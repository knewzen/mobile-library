/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * Created by hanminghui on 16/9/12.
	 */
	var Mob = {

	    /**
	     * ua客户端判断
	     */
	    ua: function ua() {
	        return navigator.userAgent.toLocaleLowerCase();
	    },

	    /**
	     * 是否微信环境
	     */
	    isWeixin: function isWeixin() {
	        var ua = Mob.ua();
	        return (/micromessenger/.test(ua)
	        );
	    },

	    /**
	     * 移动端判断
	     */
	    isMobile: function isMobile() {
	        Mob.ua().match(/iPhone|iPad|iPod|Android|IEMobile/i);
	    },
	    isIOS: function isIOS() {
	        var a = Mob.ua();
	        return a.indexOf("iphone") != -1 || a.indexOf("ipad") != -1 || a.indexOf("ipod") != -1 ? 1 : 0;
	    },
	    isAndroid: function isAndroid() {
	        return Mob.ua().indexOf("android") != -1 ? 1 : 0;
	    },

	    platform: function platform() {
	        if (Mob.isMobile()) {
	            if (Mob.isIOS()) {
	                return "IOS";
	            } else if (Mob.isAndroid()) {
	                return "Android";
	            } else {
	                return "other-mobile";
	            }
	        } else {
	            return "PC";
	        }
	    },
	    getCookie: function getCookie(name) {
	        var cookieStart = document.cookie.indexOf(name += ""),
	            cookieEnd = document.cookie.indexOf(";", cookieStart);
	        return cookieStart == -1 ? "" : unescape(document.cookie.substring(cookieStart + name.length + 1, cookieEnd > cookieStart ? cookieEnd : document.cookie.length));
	    },
	    setCookie: function setCookie(name, value, expires, path, domain, secure) {
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
	    delCookie: function delCookie(name, domain, path) {
	        document.cookie = name + "=; expires=Mon,26 Jul 1970 02:00:00 GMT;path=" + (path ? path : "/") + "; " + (domain ? "domain=" + domain + ";" : "");
	    },
	    urlQuery: function urlQuery(name) {
	        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	        var r = window.location.search.substr(1).match(reg);
	        if (r != null) {
	            return decodeURIComponent(r[2]);
	        }
	        return "";
	    },

	    /**
	     * 获取iOS和安卓系统版本号
	     */
	    version: function version() {
	        var version = 0;
	        if (Mob.isIOS()) {
	            version = navigator.userAgent.match(/ os ([\d_]+) /i)[1];
	            version && (version = version.replace(/_/gi, '.'));
	            version = version ? version.replace(/_/gi, '.') : 0;
	        } else {
	            version = navigator.userAgent.match(/android ([\d\.]+);/i)[1];
	            version && (version = version.replace(/_/gi, '.'));
	        }
	        return version;
	    },
	    ratio: function ratio() {
	        if (arguments.callee.ratio) {
	            return arguments.callee.ratio;
	        }
	        var ratio = window.devicePixelRatio >= 2 ? 2 : 1;
	        arguments.callee.ratio = ratio;
	        return ratio;
	    },
	    getHash: function getHash(url) {
	        url = url || window.location.href;
	        var match = url.match(/#(.*)$/);
	        return match ? match[1] : '';
	    },
	    test: function test() {
	        return 'hello';
	    }
	};
	module.exports = Mob;

/***/ }
/******/ ]);