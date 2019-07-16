/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(function() {\n\tlet container = $(\".container>.row.galleryPage\");\n\tcontainer.html(\"\");\n\tlet toInsert;\n\tlet imgList = [];\n\tlet mainUrl =\n\t\t\"https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=C9myK9Vp8WkYUoSp4X1tcB74Lob3Fe8bf9ieJEGc\";\n\t$.ajax({\n\t\turl: mainUrl,\n\t\tmethod: \"get\",\n\t\tdataType: \"json\"\n\t})\n\t\t.done(function(response) {\n\t\t\timgList = response.photos;\n\t\t\tconsole.log(imgList);\n\t\t\t$(\"body>div.col-12.startPage\").css(\n\t\t\t\t\"background\",\n\t\t\t\t`url(${imgList[Math.floor(Math.random() * 856)].img_src})`\n\t\t\t);\n\t\t\timgList.forEach(function(element) {\n\t\t\t\tgalleryItem = `<li class=\"col-4 image\" background=\"${element.img_src}\"></li>`;\n\t\t\t\ttoInsert = $(galleryItem);\n\t\t\t});\n\t\t})\n\t\t.fail(function(response) {\n\t\t\tinfoBar.text(\"Error\");\n\t\t});\n\n\t$(\"button.enterBtn\").on(\"click\", function(e) {\n\t\t$(\"body>div.col-12\").removeClass(\"hide\");\n\t\t$(\"body>div.col-12\").addClass(\"show\");\n\t\t$(\"body>div.col-12.startPage\").removeClass(\"show\");\n\t\t$(\"body>div.col-12.startPage\").addClass(\"hide\");\n\t\tcontainer.append($(toInsert));\n\t});\n\t$(\"button.backBtn\").on(\"click\", function(e) {\n\t\t$(\"body>div.col-12.startPage\").css(\"background\", `url(${imgList[Math.floor(Math.random() * 856)].img_src})`);\n\t\t$(\"body>div.col-12\").removeClass(\"show\");\n\t\t$(\"body>div.col-12\").addClass(\"hide\");\n\t\t$(\"body>div.col-12.startPage\").removeClass(\"hide\");\n\t\t$(\"body>div.col-12.startPage\").addClass(\"show\");\n\t\tcontainer.html($(\"\"));\n\t});\n});\n\n\n//# sourceURL=webpack:///./js/app.js?");

/***/ })

/******/ });