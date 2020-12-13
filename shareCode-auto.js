/*
 * @Author: whyour
 * @Github: https://github.com/whyour
 * @Date: 2020-11-20 10:42:06
 * @LastEditors: whyour
 * @LastEditTime: 2020-11-30 13:12:39
 */
const $ = new Env("互助码");
const shareCodes = [
  {
    zd: $.getdata("zd_shareCode1") || "4npkonnsy7xi2zbosmkrmvl3tuhfybrgg75tqha",
    nc: $.getdata("nc_shareCode1") || "5eb0d4bdb0c542c08df69f064c2a260f",
    mc: $.getdata("mc_shareCode1") || "MTE1NDAxNzcwMDAwMDAwMzY3ODI5NDc=",
    ddgc: $.getdata("dd_shareCode1") || "P04z54XCjVWnYaS5m9cZ2f-iXtDxPgpxOg6kus",
    jxgc: $.getdata("jx_shareCode1") || "JL2xFS7HrRm5eosoYMe_HQ==",
  },
  {
    zd: $.getdata("zd_shareCode2") || "",
    nc: $.getdata("nc_shareCode2") || "",
    mc: $.getdata("mc_shareCode2") || "",
    ddgc: $.getdata("dd_shareCode2") || "",
    jxgc: $.getdata("jx_shareCode2") || "",
  },
];
$.result = [];
$.random = Math.floor(Math.random() * 60);

!(async () => {
  console.log(`\n此脚本延迟${$.random}秒执行\n`);
  for (let i = 0; i < shareCodes.length; i++) {
    const { zd, nc, mc, ddgc, jxgc } = shareCodes[i];
    await $.wait($.random);
    zd &&
      (await create(
        `http://api.turinglabs.net/api/v1/jd/bean/create/${zd}/`,
        "种豆得豆"
      ));
    await $.wait($.random);
    nc &&
      (await create(
        `http://api.turinglabs.net/api/v1/jd/farm/create/${nc}/`,
        "东东农场"
      ));
    await $.wait($.random);
    mc &&
      (await create(
        `http://api.turinglabs.net/api/v1/jd/pet/create/${mc}/`,
        "东东萌宠"
      ));
    await $.wait($.random);
    ddgc &&
      (await create(
        `http://api.turinglabs.net/api/v1/jd/ddfactory/create/${ddgc}/`,
        "东东工厂"
      ));
    await $.wait($.random);
    jxgc &&
      (await create(i
        `http://api.turinglabs.net/api/v1/jd/jxfactory/create/${jxgc}/`,
        "京喜工厂"
      ));
  }
  await showMsg();
})()
  .catch((e) => $.logErr(e))
  .finally(() => $.done());

