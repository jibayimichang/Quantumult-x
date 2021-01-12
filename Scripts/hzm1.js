const urlbean = `http://api.turinglabs.net/api/v1/jd/bean/create/4npkonnsy7xi2zbosmkrmvl3tuhfybrgg75tqha/`;
const urlfarm = `http://api.turinglabs.net/api/v1/jd/farm/create/5eb0d4bdb0c542c08df69f064c2a260f/`;
const urlpet = `http://api.turinglabs.net/api/v1/jd/pet/create/MTE1NDAxNzcwMDAwMDAwMzY3ODI5NDc=/`;
const urlddfac = `http://api.turinglabs.net/api/v1/jd/ddfactory/create/P04z54XCjVWnYaS5m9cZ2f-iXtDxPgpxOg6kus/`;
const urlfac = `http://api.turinglabs.net/api/v1/jd/jxfactory/create/JL2xFS7HrRm5eosoYMe_HQ==/`;
const urljdzz = `https://code.chiang.fun/api/v1/jd/jdzz/create/AUWE5mKvEyjxZCmD43H8YxA/`;
const urlcrazy = `https://code.chiang.fun/api/v1/jd/jdcrazyjoy/create/1gmxBLcV2ng2aXdYKrFVDqt9zd5YaBeE/`;
const urljdcash = `https://code.chiang.fun/api/v1/jd/jdcash/create/eU9Ya-rmYfV3827VynBBhw/`;


const method = `GET`;
const headers = {
'Accept-Encoding' : `gzip, deflate`,
'Accept' : `text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8`,
'Connection' : `keep-alive`,
'Host' : `api.turinglabs.net`,
'User-Agent' : `Mozilla/5.0 (iPhone; CP iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.1 Mobile/15E148 Safari/604.1`,
'Upgrade-Insecure-Requests' : `1`,
'Accept-Language' : `zh-cn`
};
const body = ``;

var msg = "";
var name = {"bean":"种豆：","farm":"农场：","pet":"萌宠：","jxfactory":"京喜：","ddfactory":"东东：","jdzz":"赚赚：","crazy":"joy：","jdcash":"领现金："}

function Task(url) {
    const myRequest = {
        url: url,
        method: method,
        headers: headers,
        body: body
    };
$task.fetch(myRequest).then(response => {
    console.log(response.statusCode + "\n\n" + response.body);
    var obj = JSON.parse(response.body);
    msg = msg + "🐤" +name[url.split("jd/")[1].split("/")[0]]+ obj.message+"\n";
    //return msg
}, reason => {
    console.log(reason.error);
    $done();
});
}
function DoIt(){
    let msg1= Task(urlbean)
    let msg2= Task(urlfarm)
    let msg3= Task(urlfac)
    let msg4= Task(urlpet)
    let msg5= Task(urlddfac)
    let msg6= Task(urljdzz)
    let msg7= Task(urlcrazy)
    let msg8= Task(urljdcash)
    setTimeout(function(){
        $notify("互助码提交",``,msg)
        $done()
    },5000)
    
}

DoIt()

