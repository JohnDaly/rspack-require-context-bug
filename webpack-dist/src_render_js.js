(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_render_js"],{

/***/ "./src/assets/sample.js":
/*!******************************!*\
  !*** ./src/assets/sample.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hello: () => (/* binding */ hello)
/* harmony export */ });
const hello = 'Hello, world!'


/***/ }),

/***/ "./src/assets sync recursive \\.js$/i":
/*!**********************************!*\
  !*** ./src/assets/ sync \.js$/i ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./sample.js": "./src/assets/sample.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/assets sync recursive \\.js$/i";

/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var _render_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render.css */ "./src/render.css");


const assetsContext = __webpack_require__("./src/assets sync recursive \\.js$/i")

function render() {
    const el = document.createElement('div')
    el.classList.add('text')
    document.getElementsByTagName('body')[0].appendChild(el)
    el.innerHTML = 'hello, world'
}

/***/ })

}]);