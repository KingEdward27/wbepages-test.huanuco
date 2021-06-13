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
/******/ 	return __webpack_require__(__webpack_require__.s = 159);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/assets/js/pagina-web/subsedes/subsede.js":
/***/ (function(module, exports) {

new Vue({
    el: '#subsede',
    mounted: function mounted() {
        this.obtenerId();
    },

    data: {
        verSitios: false,
        verConformacion: false,
        apuntador: '',
        registro: '',
        vacioV: '',
        vacio: '',
        dependencias: [],
        //parametros paginar
        datoslistar: [],
        datosPaginar: [],
        datos_per_page: [],
        current_page: 1,
        records_per_page: 10
    },
    computed: {
        active_page: function active_page() {
            return this.current_page;
        },
        last_page: function last_page() {
            var count_pages = Math.ceil(this.datosPaginar.length / this.records_per_page);
            return count_pages;
        },
        pagesNumber: function pagesNumber() {
            var cant_pages = this.last_page;
            var from = this.current_page - 2;
            if (from < 1) {
                from = 1;
            }
            var to = this.current_page + 2;
            if (to >= cant_pages || cant_pages < 5) {
                to = cant_pages;
                this.pages_not_seen = 0;
            } else if (cant_pages > 5 && this.current_page <= 3) {
                to = 5;
                this.pages_not_seen = 1;
            }

            var pages_total = [];
            for (var i = 1; i <= cant_pages; i++) {
                pages_total.push(i);
            }
            var pages_final = pages_total.slice(from - 1, to);
            return pages_final;
        }
    },
    methods: {
        obtenerId: function obtenerId() {
            var URLactual = window.location.pathname;
            var array_url = URLactual.split("/");
            var id = array_url[3];
            this.apuntador = id;
        },
        getSitios: function getSitios() {
            this.verSitios = true;
            this.verConformacion = false;
        },
        getDependencias: function getDependencias() {
            var _this = this;

            this.verSitios = false;
            this.verConformacion = false;
            var url = '/api/web/subsede/dependencias/' + this.apuntador;
            axios.get(url).then(function (response) {
                _this.dependencias = response.data;
                _this.verConformacion = true;
            });
        },
        getPersonal: function getPersonal(nombre) {
            var _this2 = this;

            var data = { 'id': this.apuntador, 'dependencia': nombre };
            var url = '/api/web/subsede/personal';
            axios.post(url, data).then(function (response) {
                _this2.datoslistar = response.data;
                // this.datosPaginar = response.data;
                // this.changePage(1);
                $('#new').modal('show');
            });
        },
        changePage: function changePage(page) {
            if (page !== 0 && page <= this.last_page || page == 1) {
                this.current_page = page;
                var start_index = (page - 1) * this.records_per_page;
                var end_index = page * this.records_per_page;
                this.datos_per_page = this.datosPaginar.slice(start_index, end_index);
            }
        }
    }
});

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./resources/assets/js/pagina-web/subsedes/subsede.js");


/***/ })

/******/ });