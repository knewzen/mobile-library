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
	var M = {

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
	        var ua = M.ua();
	        return (/micromessenger/.test(ua)
	        );
	    },

	    /**
	     * 移动端判断
	     */
	    isMobile: function isMobile() {
	        M.ua().match(/iPhone|iPad|iPod|Android|IEMobile/i);
	    },
	    isIOS: function isIOS() {
	        var a = M.ua();
	        return a.indexOf("iphone") != -1 || a.indexOf("ipad") != -1 || a.indexOf("ipod") != -1 ? 1 : 0;
	    },
	    isAndroid: function isAndroid() {
	        return M.ua().indexOf("android") != -1 ? 1 : 0;
	    },

	    platform: function platform() {
	        if (M.isMobile()) {
	            if (M.isIOS()) {
	                return "IOS";
	            } else if (M.isAndroid()) {
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

	    urlQuery: function urlQuery(name) {
	        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	        var r = window.location.search.substr(1).match(reg);
	        if (r != null) {
	            return decodeURIComponent(r[2]);
	        }
	        return "";
	    },
	    test: function test() {
	        return 'hello';
	    }
	};
	module.exports = M;

/***/ }
/******/ ]);