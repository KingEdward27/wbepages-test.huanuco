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
/******/ 	return __webpack_require__(__webpack_require__.s = 289);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/assets/js/odajup/consulta-jueces.js":
/***/ (function(module, exports) {

new Vue({
    el: "#app",
    mounted: function mounted() {
        this.GetRegiones();
    },
    data: function data() {
        return {
            regiones: [],
            provincias: [],
            distritos: [],
            juzgados: [],

            region: '',
            provincia: '',
            distrito: '',
            juzgado_id: '',

            jueces: {},
            juez_id: '',

            guardando: false
        };
    },
    methods: {
        GetRegiones: function GetRegiones() {
            var _this = this;

            axios.get('/api/departamentos/listar').then(function (res) {
                _this.regiones = res.data;
                _this.region = '';
            }).catch(function (err) {
                console.log(err);
            });
        },
        GetProvincias: function GetProvincias() {
            var _this2 = this;

            axios.get('/api/provincias/listar/' + this.region).then(function (res) {
                _this2.provincias = res.data;
                _this2.provincia = '';
                _this2.distrito = '';
                _this2.juzgado_id = '';
            }).catch(function (err) {
                console.log(err);
            });
        },
        GetDistrito: function GetDistrito() {
            var _this3 = this;

            axios.get('/api/distritos/listar/' + this.region + '/' + this.provincia).then(function (res) {
                _this3.distritos = res.data;
                _this3.distrito = '';
                _this3.juzgado_id = '';
            }).catch(function (err) {
                console.log(err);
            });
        },
        GetJuzgados: function GetJuzgados() {
            var _this4 = this;

            axios.get('/odajup/api/juzgado-filtro/' + this.region + '/' + this.provincia + '/' + this.distrito).then(function (res) {
                if (!res.data.error) {
                    _this4.juzgados = res.data.juzgados;
                } else {
                    _this4.juzgados = null;
                    alert('Ha ocurrido un error al cargar los datos de los postulantes');
                }
            }).catch(function (err) {
                console.log(err);
            });
        },
        GetJuez: function GetJuez(id) {
            var _this5 = this;

            // axios.get('/odajup/api/juez/' + this.juez_id)
            if (id) {
                axios.get('/odajup/api/jueces/' + id).then(function (res) {
                    if (!res.data.error) {
                        _this5.jueces = res.data.jueces;
                        console.log(_this5.juez);
                    } else {
                        toastr.warning('Ha ocurrido un error al recuperar los datos del usuario');
                    }
                }).catch(function (err) {
                    console.log(err);
                });
            }
        }
    }
});

/***/ }),

/***/ 289:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./resources/assets/js/odajup/consulta-jueces.js");


/***/ })

/******/ });