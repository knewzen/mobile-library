/**
 * Created by hanminghui on 16/9/12.
 */
let  M = {

    /**
     * ua客户端判断
     */
    ua(){
      return navigator.userAgent.toLocaleLowerCase();
    },
    /**
     * 是否微信环境
     */
    isWeixin(){
        let ua =M.ua();
        return /micromessenger/.test(ua);
    },
    /**
     * 移动端判断
     */
    isMobile(){
        M.ua().match(/iPhone|iPad|iPod|Android|IEMobile/i);
    },
    isIOS(){
        let a = M.ua();
        return (a.indexOf("iphone") != -1 || a.indexOf("ipad") != -1 || a.indexOf("ipod") != -1) ? 1 : 0;
    },
    isAndroid(){
        return M.ua().indexOf("android") != -1 ? 1 : 0;
    },
    platform: function(){
        if(M.isMobile()){
            if(M.isIOS()){
                return "IOS";
            } else if(M.isAndroid()){
                return "Android";
            } else{
                return "other-mobile";
            }
        }
        else{
            return "PC";
        }
    },
    getCookie(name){
        let cookieStart = document.cookie.indexOf(name+=""),
            cookieEnd = document.cookie.indexOf(";",cookieStart);
        return cookieStart == -1 ? "" : unescape(document.cookie.substring(cookieStart + name.length +1,(cookieEnd > cookieStart ? cookieEnd : document.cookie.length)));
    },
    setCookie(name,value,expires,path,domain,secure){
        var cookieText = encodeURIComponent(name) + '=' + encodeURIComponent(value);
        if (expires instanceof Date) {
            cookieText += '; expires=' + expires;
        }
        if (path) {
            cookieText += '; expires=' + expires;
        }
        if (domain) {
            cookieText += '; domain=' + domain;
        }
        if (secure) {
            cookieText += '; secure';
        }
        document.cookie = cookieText;
    },
    urlQuery : function(name){
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        if (r != null){
            return decodeURIComponent(r[2]);
        }
        return "";
    },
    test(){
        return 'hello';
    }
};
module.exports = M;