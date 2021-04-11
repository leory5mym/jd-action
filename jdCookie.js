/*
此文件为Node.js专用。其他用户请忽略
 */
//此处填写京东账号cookie。
//注：github action用户cookie填写到Settings-Secrets里面，新增JD_COOKIE，多个账号的cookie使用`&`隔开或者换行
let CookieJDs = [
  'shshshfpa=ce8d8c40-d09c-4ca9-b896-101ebe4685f3-1617351689; __jdv=122270672|direct|-|none|-|1617351690014; shshshfpb=mkkSsW5FTMZOeJCwm6cGTcw%3D%3D; areaId=1; ipLoc-djd=1-2901-55548-0; TrackID=12zcsIVIw5b608VVjLW9C9D8IuqfYKGQhJQbmZlGIPNqjdPKnoGYz4XI2uXXfuXs0w4LuIVwFJ0ZHukJICYQevqbGcBffTvoJMdK4IMmevIo; pinId=YUOHEYI440HlyGcfF5R9hg; pin=15901082682_p; unick=leory521myn; _tp=fq96b7yjIlA7WQfrTZA6pA%3D%3D; _pst=15901082682_p; wxa_level=1; jxsid=16181439209389925641; webp=1; visitkey=9574621233109799; autoOpenApp_downCloseDate_auto=1618143924258_10800000; jcap_dvzw_fp=3WYlwNtPoiG9_hFX8MpJIQFbYoUPILodBz16trBzsTrcRKLameSPGzQOWu-Fw0nT; whwswswws=; cid=9; PPRD_P=UUID.16173516900132135083961; __jda=122270672.16173516900132135083961.1617351690.1617351690.1618143961.2; sc_width=1680; cartLastOpTime=1618144221; cartNum=4; kplTitleShow=1; wq_addr=1094720801%7C1_2810_55530_0%7C%u5317%u4EAC_%u5927%u5174%u533A_%u89C2%u97F3%u5BFA%u8857%u9053_%7C%u5317%u4EAC%u5927%u5174%u533A%u89C2%u97F3%u5BFA%u8857%u9053%u6CF0%u79BE%u4E2D%u592E%u5E7F%u573AC%u5EA7515%7C116.32%2C39.7135; jdAddrId=1_2810_55530_0; commonAddress=1094720801; jdAddrName=%u5317%u4EAC_%u5927%u5174%u533A_%u89C2%u97F3%u5BFA%u8857%u9053_; regionAddress=1%2C2810%2C55530%2C0; mitemAddrId=1_2810_55530_0; mitemAddrName=%u5317%u4EAC%u5927%u5174%u533A%u89C2%u97F3%u5BFA%u8857%u9053%u6CF0%u79BE%u4E2D%u592E%u5E7F%u573AC%u5EA7515; retina=1; __wga=1618145750920.1618143961006.1618143961006.1618143961006.17.1; jxsid_s_t=1618145751080; jxsid_s_u=https%3A//wqs.jd.com/my/accountv2.shtml; wqmnx1=MDEyNjM1MGg6am01MTBNbDBhUCAgIE8gZWk0NFRsRylzMU1lNSByNDhmN24yNDJZT09VIUgl; shshshfp=f1ff9e0f10c1ed9556bbc112e250da47; shshshsID=1083d2369dd92eaa02fc3ea7695f6d42_18_1618145779610; TrackerID=dxwUDGKW1CDqttkWXBgyYB8_tRN-fwX3IsjeOS_jdpKyCixDzgNOCNhiW-9mxC85EGpwLuAQTahP_rSSSdWDtVEOzZKaGw56xk6Qq2pHyfLzLlwYmKTNuE2UW3TSs7-LusehyUwvdYJASwIMyriI0Q; pt_key=AAJgcvIOADDIdN2kZK-VffjJsbNdIbrgSNTgNKyB6610F4lZ5f7UB5DR9v5DR5hvnWwUKhi9ZZw; pt_pin=15901082682_p; pt_token=mu936npa; pwdt_id=15901082682_p; sfstoken=tk01md04e1c7ea8sMyszZkM0NWtsmvgP4+S6piW41nitci4YQ7eumSS+ecqlRUgZ4VK+/rT/w8Ae1BWjYqImHgaH4fJr',//账号一ck
]
// 判断github action里面是否有京东ck
if (process.env.JD_COOKIE) {
  if (process.env.JD_COOKIE.indexOf('&') > -1) {
    console.log(`您的cookie选择的是用&隔开\n`)
    CookieJDs = process.env.JD_COOKIE.split('&');
  } else if (process.env.JD_COOKIE.indexOf('\n') > -1) {
    console.log(`您的cookie选择的是用换行隔开\n`)
    CookieJDs = process.env.JD_COOKIE.split('\n');
  } else {
    CookieJDs = process.env.JD_COOKIE.split();
  }
  console.log(`\n==================脚本执行来自 github action=====================\n`)
  console.log(`==================脚本执行-国际标准时间(UTC)：${new Date().toLocaleString()}=====================\n`)
  console.log(`==================脚本执行- 北京时间(UTC+8)：${new Date(new Date().getTime() + 8 * 60 * 60 * 1000).toLocaleString()}=====================\n`)
}
for (let i = 0; i < CookieJDs.length; i++) {
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['CookieJD' + index] = CookieJDs[i];
}
