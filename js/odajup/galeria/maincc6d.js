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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 290);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/assets/js/odajup/galeria/main.js":
/***/ (function(module, exports) {

$('.popup-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
        titleSrc: function titleSrc(item) {
            return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
        }
    }
});

new Vue({
    el: "#app",
    mounted: function mounted() {
        this.GetGalerias();
        // this.GetImagenesGaleria(2);
    },
    data: function data() {
        return {
            galerias: [],
            imagenes: []
        };
    },
    methods: {
        GetGalerias: function GetGalerias() {
            var _this = this;

            axios.get('/odajup/api/galeria').then(function (res) {
                if (!res.data.error) {
                    _this.galerias = res.data.galerias;
                }
            }).catch(function (err) {
                console.log(err);
            });
        },
        GetImagenesGaleria: function GetImagenesGaleria(id) {
            var _this2 = this;

            axios.get('/odajup/api/imagen/' + id).then(function (res) {
                if (!res.data.error) {
                    _this2.imagenes = res.data.imagenes;
                    var items = [];
                    for (var i = 0; i < _this2.imagenes.length; i++) {
                        items.push({ src: '/archivos/modulos/odajup/' + _this2.imagenes[i].imagen_url, title: _this2.imagenes[i].descripcion });
                    }

                    $('#open-popup').magnificPopup({
                        items: items,
                        gallery: {
                            enabled: true
                        },
                        type: 'image' // this is a default type
                    });
                }
            }).catch(function (err) {
                console.log(err);
            });
        }
    }
});

/***/ }),

/***/ 290:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./resources/assets/js/odajup/galeria/main.js");


/***/ })

/******/ });