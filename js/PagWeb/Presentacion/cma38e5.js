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
/******/ 	return __webpack_require__(__webpack_require__.s = 152);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/assets/js/pagina-web/servicios/cma.js":
/***/ (function(module, exports) {

new Vue({
    el: '#cma',
    created: function created() {
        this.getJuecesM();
        this.getJuecesP();
    },

    data: {
        documentos: [],
        buscarM: [],
        buscarP: [],
        juecesM: [],
        juecesP: [],
        buscadorM: '',
        buscadorP: '',
        total: {
            'aprobado': '',
            'demerito': '',
            'antiguedad': '',
            'total': ''
        }
    },
    methods: {
        listarDocumentos: function listarDocumentos(dni) {
            var _this = this;

            var url = '/api/web/cma/documentos/' + dni;
            axios.get(url).then(function (response) {
                _this.documentos = response.data;
                _this.total = { 'total': '', 'aprobado': '', 'demerito': '', 'antiguedad': '' };
                _this.Total(dni);
            });
        },
        Total: function Total(dni) {
            var _this2 = this;

            var url = '/capacitacion/api/cma/ranking/total/' + dni;
            axios.get(url).then(function (response) {
                _this2.total.aprobado = response.data.aprobado;
                _this2.total.demerito = response.data.demerito;
                _this2.total.antiguedad = response.data.antiguedad;
                _this2.total.total = response.data.total;
                $('#lista').modal('show');
            });
        },
        getJuecesM: function getJuecesM() {
            var _this3 = this;

            var url = '/api/web/cma/jueces/mixto';
            axios.get(url).then(function (response) {
                _this3.buscarM = response.data;
                _this3.juecesM = _this3.buscarM.sort(function (a, b) {
                    if (a.total < b.total) {
                        return 1;
                    }
                    if (a.total > b.total) {
                        return -1;
                    }
                    return 0;
                });
            });
        },
        getJuecesP: function getJuecesP() {
            var _this4 = this;

            var url = '/api/web/cma/jueces/paz';
            axios.get(url).then(function (response) {
                _this4.buscarP = response.data;
                _this4.juecesP = _this4.buscarP.sort(function (a, b) {
                    if (a.total < b.total) {
                        return 1;
                    }
                    if (a.total > b.total) {
                        return -1;
                    }
                    return 0;
                });
            });
        },
        buscadorJuecesM: function buscadorJuecesM() {
            var usuario_found = [];
            for (var i = 0; i < this.buscarM.length; i++) {
                if (this.buscarM[i].nombre_completo.toUpperCase().indexOf(this.buscadorM.toUpperCase()) >= 0) {
                    usuario_found.push(this.buscarM[i]);
                }
            }
            this.juecesM = usuario_found;
            return this.juecesM;
        },
        buscadorJuecesP: function buscadorJuecesP() {
            var usuario_found = [];
            for (var i = 0; i < this.buscarP.length; i++) {
                if (this.buscarP[i].nombre_completo.toUpperCase().indexOf(this.buscadorP.toUpperCase()) >= 0) {
                    usuario_found.push(this.buscarP[i]);
                }
            }
            this.juecesP = usuario_found;
            return this.juecesP;
        }
    }
});

/***/ }),

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./resources/assets/js/pagina-web/servicios/cma.js");


/***/ })

/******/ });