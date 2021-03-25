/*
 * @Author: Xin https://github.com/Xin-code 
 * @Date: 2021-02-04 13:11:59 
 * @Last Modified by: Xin 
 * @Last Modified time: 2021-03-25 10:17:11
 * 
 * 剑三通宝红包
 * 
 */

const $ = new Env("剑三通宝红包")
// ------------------------------🕛2月4日 小年--------------------------------
// 12：00 郭炜炜
// jx3hb = '剑网3真好玩'
// 15:00 官博
// jx3hb = '郭炜炜最帅'
// 15:30 官博
// jx3hb = '侠之大者'
// 16:00 同人秀
// jx3hb = '嗨老婆'
// 17:00 客户服务
// jx3hb = '小红手快出来'
// 19:00 咸鱼
// jx3hb = '小年夜快乐'
// ------------------------------🕛2月11日 除夕--------------------------------
// 12：00 郭炜炜
// jx3hb = '除旧迎新年'
// 15:00 官博
// jx3hb = '年夜饭吃啥'
// 16:00 同人秀
// jx3hb = '老公贴贴'
// 17:00 客户服务
// jx3hb = '今天开服了吗'
// 19:00 咸鱼
// jx3hb = '上线一起吃年夜饭'
// ------------------------------🕛2月12日 春节--------------------------------
// 12：00 郭炜炜
// jx3hb = '新春新气象'
// 15:00 官博
// jx3hb = '回家一起看烟花吧'
// 16:00 同人秀
// jx3hb = '今年一定产粮'
// 17:00 客户服务
// jx3hb = '今天不用维护'
// 19:00 咸鱼
// jx3hb = '新年大吉阖家欢乐'
// ------------------------------🕛2月26日 元宵节--------------------------------
// 12：00 郭炜炜
// jx3hb = '团圆万事兴'
// 15:00 官博
// jx3hb = '剑网3玩家的本质是'
// 16:00 同人秀
// jx3hb = '太太饭饭饿饿'
// 17:00 客户服务
// jx3hb = '昨天开过服了'
// 19:00 咸鱼
// jx3hb = '吃饺子还是吃元宵'


// nowTimeStamp = ''

const CookiesArr = []

const role_nameArr =[]

!(async () => {

  // getTime()
  // await $.wait(100)

  // 查找用户信息
  for(let i=0;i<CookiesArr.length;i++){
    await $.wait(200)
    nowCookie = CookiesArr[i]
    await $.wait(200)
    await getUserInfo()
  }
  
  // 获得通宝
  for(let j=0;j<CookiesArr.length;j++){
    await $.wait(200)
    nowCookie = CookiesArr[j]
    await $.wait(200)
    nowrole_name = role_nameArr[j]
    await $.wait(200)
    await GetHB()
  }

  })()
  .catch((e) => $.logErr(e))
  .finally(() => $.done())



// 红包
function GetHB(){
  return new Promise((resolve) => { 
    const myRequest = {
      // 获得奖励URL
     url: `https://ws.xoyo.com/jx3/redpacket210108/receive_packet?channel=%E6%B5%8F%E8%A7%88%E5%99%A8&from_source=2&role_name=${nowrole_name}&server_name=%E7%A0%B4%E9%98%B5%E5%AD%90&uid=${jx3hb}&zone_id=z21&zone_name=%E5%8F%8C%E7%BA%BF%E4%B8%80%E5%8C%BA%EF%BC%88%E7%82%B9%E5%8D%A1%EF%BC%89&__ts__=1612423897292&callback=`,
     headers: {
       // Cookie抓包获取
       'Cookie' : `${nowCookie}`,
       'Accept-Encoding' : `gzip, deflate, br`,
       'Connection' : `keep-alive`,
       'Accept' : `*/*`,
       'Host' : `ws.xoyo.com`,
       'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1`,
       'Accept-Language' : `zh-CN,zh;q=0.9`
     },
 };
   // get请求 请求地址&请求头 (错误，错误响应数据,成功返回的JSON数据)
   $.get(myRequest, (error, response, data) => {
     if(data){
      console.log(`----------兑换结果----------`);
       console.log("通宝反馈数据:"+data);
       temp = JSON.parse(data)
       if(temp.status!==`-20202`||`-20204`){
       let nowname =decodeURI(nowrole_name)
       console.log(`🎁`+nowname+`获得：`+temp.data.receive_money+`通宝`);
       $.totalTB=$.totalTB+temp.data.receive_money
       }else{
         console.log(temp.msg);
       }
     }
      if(error){
      console.log("响应失败："+response + "\n" + data);
      }
       })
     resolve()
    }) 
 }

// 查找自己的 信息
// https://ws.xoyo.com/jx3/redpacket210108/get_role_info?__ts__=1612664895408&callback=
function getUserInfo(){
  return new Promise((resolve) => { 
    const myRequest = {
      // 获得奖励URL
     url: `https://ws.xoyo.com/jx3/redpacket210108/get_role_info?__ts__=1612664895408&callback=`,
     headers: {
       // Cookie抓包获取
       'Cookie' : `${nowCookie}`,
       'Accept-Encoding' : `gzip, deflate, br`,
       'Connection' : `keep-alive`,
       'Accept' : `*/*`,
       'Host' : `ws.xoyo.com`,
       'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1`,
       'Accept-Language' : `zh-CN,zh;q=0.9`
     },
 };
   // get请求 请求地址&请求头 (错误，错误响应数据,成功返回的JSON数据)
   $.get(myRequest, (error, response, data) => {
     if(data){
      //  console.log("反馈数据:"+data);
       temp=JSON.parse(data)
       role_nameArr.push(encodeURI(temp.data.role_name))
      //  console.log(role_nameArr);
     }
      if(error){
      console.log("响应失败："+response + "\n" + data);
      }
       })
     resolve()
    }) 
 }


 // 获得时间戳
 function getTime(){
  nowTimeStp = Date.parse(new Date())
  console.log(`🕛现在的时间戳：`+nowTimeStp.toString().substr(0,10))
  $.nowTimeStamp = nowTimeStp
 }

// 登录
// https://pf-api.xoyo.com/passport/common_api/login?account=&password&geetest_challenge=4765de1d5b13e8c36d7a0c3af90ef4229m&geetest_validate=7fd08ecd47ff5d3b5e3d837c86d3930b&geetest_seccode=7fd08ecd47ff5d3b5e3d837c86d3930b%7Cjordan&geetest_gt=80c0ce0a5b35e4dcb473eee39844038b&__ts__=1612662901158&callback=__xfe4

// prettier-ignore
function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}