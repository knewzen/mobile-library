/**
 * Created by hanminghui on 16/9/16.
 */
;(function (root,factory) {
    "use strict";

    if (typeof define === "function" && define.amd) {
        define(factory);
    }else if (typeof exports === 'object') {
        module.exports = factory();
    }else {
        /* jshint sub:true */
        root.Mob = factory();
    }
}(this,function (root) {
    root = this || global;

    var Mob = {};

    Mob = (function () {
        return {

            now_version: '1.0.1',
            /**
             * ua客户端判断
             */
            ua: function(){
                return navigator.userAgent.toLocaleLowerCase();
            },
            /**
             * 是否微信环境
             */
            isWeixin: function(){
                let ua =Mob.ua();
                return /micromessenger/.test(ua);
            },
            /**
             * 移动端判断
             */
            isMobile: function(){
                Mob.ua().match(/iPhone|iPad|iPod|Android|IEMobile/i);
            },

            isIOS: function(){
                let a = Mob.ua();
                return (a.indexOf("iphone") != -1 || a.indexOf("ipad") != -1 || a.indexOf("ipod") != -1) ? 1 : 0;
            },

            isAndroid: function(){
                return Mob.ua().indexOf("android") != -1 ? 1 : 0;
            },

            platform: function(){
                if(Mob.isMobile()){
                    if(Mob.isIOS()){
                        return "IOS";
                    } else if(Mob.isAndroid()){
                        return "Android";
                    } else{
                        return "other-mobile";
                    }
                }
                else{
                    return "PC";
                }
            },
            getCookie: function(name){
                let cookieStart = document.cookie.indexOf(name+=""),
                    cookieEnd = document.cookie.indexOf(";",cookieStart);
                return cookieStart == -1 ? "" : unescape(document.cookie.substring(cookieStart + name.length +1,(cookieEnd > cookieStart ? cookieEnd : document.cookie.length)));
            },
            setCookie: function(name,value,expires,path,domain,secure){
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
            /**
             * 删除cookie
             * @param {String} name cookie名称
             * @param {String} [domain] cookie所在域
             * @param {String} [path= '/'] 所在路径
             * @example Mob.delCookie('cookie_name');//删除cookie
             */
            delCookie: function(name,domain,path){
                document.cookie = name + "=; expires=Mon,26 Jul 1970 02:00:00 GMT;path="+ (path ? path:"/") + "; " + (domain ? ("domain=" + domain +";"): "");
            },

            urlQuery: function(name){
                var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
                var r = window.location.search.substr(1).match(reg);
                if (r != null){
                    return decodeURIComponent(r[2]);
                }
                return "";
            },

            /**
             * 获取iOS和安卓系统版本号
             */
            version: function(){
                var version = 0;
                if(Mob.isIOS()){
                    version = navigator.userAgent.match(/ os ([\d_]+) /i)[1];
                    version && (version =  version.replace(/_/gi ,'.'));
                    version = version ?  version.replace(/_/gi ,'.') : 0;
                }else{
                    version = navigator.userAgent.match(/android ([\d\.]+);/i)[1];
                    version && (version =  version.replace(/_/gi ,'.'));
                }
                return version;
            },
            ratio: function(){
                if(arguments.callee.ratio){
                    return arguments.callee.ratio;
                }
                var ratio = window.devicePixelRatio >= 2 ? 2 : 1;
                arguments.callee.ratio = ratio;
                return ratio;
            },
            getHash: function(url){
                url = url || window.location.href;
                var match = url.match(/#(.*)$/);
                return match ? match[1] : '';
            },
            test: function () {
                return 'hello'
            }
        };
    })();
    root.Mob = Mob;

    return Mob;
}));