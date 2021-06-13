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
/******/ 	return __webpack_require__(__webpack_require__.s = 146);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/assets/js/pagina-web/servicios/audiencias.js":
/***/ (function(module, exports) {

new Vue({
    el: '#programacion-audiencias',
    mounted: function mounted() {
        // this.getHora();
        // this.consultaHora();
    },

    data: {
        loader: false,
        mostrar: false,
        palabra: '01',
        hora: '',
        horaT: '',
        fecha: '',
        fechaBusqueda: '',
        usuario: {
            'data1': '',
            'data2': '',
            'data3': '',
            'data4': '',
            'data5': '',
            'data6': '',
            'data7': ''
        },
        datos: [],
        datosP: []
    },
    computed: {},
    methods: {
        mayuscula: function mayuscula(e, o, prop) {
            var start = e.target.selectionStart;
            e.target.value = e.target.value.toUpperCase();
            this.$set(o, prop, e.target.value);
            e.target.setSelectionRange(start, start);
        },
        getDatos: function getDatos() {
            var _this = this;

            if (this.usuario.data1.length > 0) {
                if (this.usuario.data2.length > 3) {
                    if (this.usuario.data3 !== '') {
                        if (this.usuario.data4.length > 3) {
                            if (this.usuario.data5.length > 1) {
                                if (this.usuario.data6.length > 1) {
                                    if (this.usuario.data7.length > 1) {
                                        this.loader = true;
                                        this.mostrar = false;
                                        var exp = this.usuario.data1 + '-' + this.usuario.data2 + '-' + this.usuario.data3 + '-' + this.usuario.data4 + '-' + this.usuario.data5 + '-' + this.usuario.data6 + '-' + this.usuario.data7;
                                        var data = { 'data': exp, 'sede': this.usuario.data4 };
                                        var url = '/api/web/buscar-audiencia';
                                        axios.post(url, data).then(function (response) {
                                            if (response.data.length > 0) {
                                                _this.mostrar = true;
                                                _this.datos = response.data;
                                            } else {
                                                toastr.warning('No se encontro ninguna audiencia para este expediente');
                                            }
                                            _this.loader = false;
                                        });
                                    } else {
                                        toastr.warning('El 6to campo debe tener 2 digitos');
                                    }
                                } else {
                                    toastr.warning('El 6to campo debe tener 2 letras');
                                }
                            } else {
                                toastr.warning('El 5to campo debe tener 2 letras');
                            }
                        } else {
                            toastr.warning('El 4to campo debe tener 4 digitos');
                        }
                    } else {
                        toastr.warning('Complete el 3er campo');
                    }
                } else {
                    toastr.warning('El 2do campo debe tener 4 digitos');
                }
            } else {
                toastr.warning('El 1er campo debe contener 5 digitos, rellene con ceros al lado izquierdo');
            }
        },
        getHora: function getHora() {
            var _this2 = this;

            var url = '/api/web/hora';
            axios.get(url).then(function (response) {
                _this2.hora = response.data[0];
                _this2.fecha = response.data[1];
                _this2.getDatos();
            });
        },
        consultaHora: function consultaHora() {
            var _this3 = this;

            setInterval(function () {
                var url = '/api/web/hora';
                axios.get(url).then(function (response) {
                    _this3.horaT = response.data[0];
                    console.log(_this3.horaT);
                    if (_this3.hora < _this3.horaT) {
                        _this3.hora = _this3.horaT;
                        console.log('cambio de turno');
                        _this3.loader = true;
                        _this3.action = false;
                        _this3.ocultar = true;
                        var temporal = [];
                        var horaF = parseInt(_this3.hora) + 1;
                        var fecha = _this3.fecha + ' ' + _this3.hora + ':00:00';
                        var fechaF = _this3.fecha + ' ' + horaF + ':00:00';
                        for (var i = 0; i < _this3.datosP.length; i++) {
                            if (Date.parse(_this3.datosP[i].f_inicio) >= Date.parse(fecha) && Date.parse(_this3.datosP[i].f_inicio) <= Date.parse(fechaF)) {
                                temporal.push(_this3.datosP[i]);
                            }
                        }
                        _this3.datos = temporal;
                        _this3.loader = false;
                        _this3.action = true;
                        setTimeout(function () {
                            _this3.ocultar = false;
                        }, 10000);
                    }
                    _this3.horaT = '';
                });
            }, 300000);
        }
        // getDatos: function () {
        //     let temporal = [];
        //     let horaF = parseInt(this.hora)+1;
        //     let fecha = this.fecha+' '+this.hora+':00:00';
        //     let fechaF = this.fecha+' '+horaF+':00:00';
        //     let url = '/api/web/audiencias/'+this.palabra;
        //     axios.get(url).then(response => {
        //         this.datosP = response.data;
        //         for (let i = 0; i < this.datosP.length; i++){
        //             if (Date.parse(this.datosP[i].f_inicio) >=  Date.parse(fecha) && Date.parse(this.datosP[i].f_inicio) <=  Date.parse(fechaF)) {
        //                 temporal.push(this.datosP[i]);
        //             }
        //         }
        //         this.datos = temporal;
        //         this.loader = false;
        //         this.action = true;
        //         setTimeout(() => {
        //             this.ocultar = false;
        //         }, 10000)
        //     });
        // }
    }
});

var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {
        myIndex = 1;
    }
    x[myIndex - 1].style.display = "block";
    setTimeout(carousel, 10000); // Change image every 2 seconds
}

/***/ }),

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./resources/assets/js/pagina-web/servicios/audiencias.js");


/***/ })

/******/ });