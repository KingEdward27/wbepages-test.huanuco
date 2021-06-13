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
/******/ 	return __webpack_require__(__webpack_require__.s = 164);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/assets/js/archivo/general.js":
/***/ (function(module, exports) {

// Vue.component('v-select', VueSelect.VueSelect);

new Vue({
    el: "#app",
    mounted: function mounted() {
        this.GenerarAnios();
    },
    data: function data() {
        return {
            guardando: false,

            tipo_busqueda: 1,

            sede_id: '*',
            anio: new Date().getFullYear(),
            anios: [],
            numero: 0,

            apellidos: '',
            nombres: '',

            sedes: [{ id: '*', nombre: '-- TODOS--' }, { id: '01', nombre: 'CENTRAL' }, { id: '02', nombre: 'PAMPAS' }, { id: '04', nombre: 'CONCEPCIÓN' }, { id: '06', nombre: 'JAUJA' }, { id: '09', nombre: 'TARMA' }, { id: '10', nombre: 'OROYA' }],

            expedientes: [],
            expedientes2: [],
            detalles: [],
            detalle: {
                general: {},
                partes: []
            }
        };
    },
    methods: {
        GenerarAnios: function GenerarAnios() {
            var year = new Date().getFullYear();
            for (var i = 1970; i <= year; i++) {
                this.anios.push({ value: i });
            }
        },
        ConsultaExpediente: function ConsultaExpediente() {
            var _this = this;

            if (this.sede_id == '*') {
                for (var i = 1; i < this.sedes.length; i++) {
                    axios.get('/api/archivo/busqueda/' + this.sedes[i].id + '/' + this.anio + '/' + this.numero).then(function (res) {
                        // console.log(res.data);
                        _this.expedientes = _this.expedientes.concat(res.data);
                        // this.expedientes2 = groupBy(this.expedientes, 'desc_instan');
                    });
                }
            } else {
                axios.get('/api/archivo/busqueda/' + this.sede_id + '/' + this.anio + '/' + this.numero).then(function (res) {
                    // console.log(res.data);
                    _this.expedientes = res.data;
                    // this.expedientes = this.groupBy(res.data, 'desc_instan');
                });
            }
        },

        groupBy: function groupBy(array, key) {
            var result = {};
            array.forEach(function (item) {
                if (!result[item[key]]) {
                    result[item[key]] = [];
                }
                result[item[key]].push(item);
            });
            return result;
        },

        ConsultaPartes: function ConsultaPartes() {
            var _this2 = this;

            if (this.apellidos) {
                for (var i = 1; i < this.sedes.length; i++) {
                    axios.get('/api/archivo/busqueda-parte/' + this.sedes[i].id + '/' + this.apellidos + '/' + this.nombres).then(function (res) {
                        // console.log(res.data);
                        _this2.expedientes = _this2.expedientes.concat(res.data);
                    });
                }
            } else {
                alert("Ingrese los valores solicitados");
            }
        },
        Detalle: function Detalle(sede, codigo) {
            var _this3 = this;

            $('#modalDetalleExpediente').modal('show');
            if (codigo) {
                axios.get('/api/archivo/detalle/' + sede + '/' + codigo).then(function (res) {
                    _this3.detalle.general = res.data.detalle[0];
                    _this3.detalle.general.nro_formateado = _this3.detalle.general.nro_formateado.toString().substr(0, 10);
                    _this3.detalle.partes = res.data.partes;
                });
            }
        }

    }
});

/***/ }),

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./resources/assets/js/archivo/general.js");


/***/ })

/******/ });