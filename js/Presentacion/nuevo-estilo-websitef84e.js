var meses = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");
var diasSemana = new Array("Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado");
var f = new Date();
document.getElementById("fecha-tiempo-real").innerHTML = diasSemana[f.getDay()] + ", " + f.getDate() + " de " + meses[f.getMonth()] + " de " + f.getFullYear();
document.getElementById("fecha-tiempo-real-xs").innerHTML = diasSemana[f.getDay()] + ", " + f.getDate() + " de " + meses[f.getMonth()] + " de " + f.getFullYear();

var vm = new Vue({
    el: '#atajos',
    created: function created() {
        this.getDatos();
    },
    data: {
        datos: [],
        imagen: '',
        urlC: 'paginaweb',
        urlS: 'atajos'
    },
    computed: {},
    methods: {
        getDatos: function getDatos() {
            var _this = this;

            var url = "/" + this.urlC + "/api/" + this.urlS + "/activos";
            axios.get(url).then(function (response) {
                _this.datos = response.data;
            });
        },
        abrirPopUp: function abrirPopUp(datos) {
            this.imagen = datos.foto;
            $('#popUp').modal('show');
        }
    }
});
/**
 * @preserve
 * Project: Bootstrap Hover Dropdown
 * Author: Cameron Spear
 * Version: v2.2.1
 * Contributors: Mattia Larentis
 * Dependencies: Bootstrap's Dropdown plugin, jQuery
 * Description: A simple plugin to enable Bootstrap dropdowns to active on hover and provide a nice user experience.
 * License: MIT
 * Homepage: http://cameronspear.com/blog/bootstrap-dropdown-on-hover-plugin/
 */
!function (e, n) {
    var o = e();e.fn.dropdownHover = function (t) {
        return "ontouchstart" in document ? this : (o = o.add(this.parent()), this.each(function () {
            function r() {
                d.parents(".navbar").find(".navbar-toggle").is(":visible") || (n.clearTimeout(a), n.clearTimeout(i), i = n.setTimeout(function () {
                    o.find(":focus").blur(), v.instantlyCloseOthers === !0 && o.removeClass("open"), n.clearTimeout(i), d.attr("aria-expanded", "true"), s.addClass("open"), d.trigger(h);
                }, v.hoverDelay));
            }var a,
                i,
                d = e(this),
                s = d.parent(),
                u = { delay: 500, hoverDelay: 0, instantlyCloseOthers: !0 },
                l = { delay: e(this).data("delay"), hoverDelay: e(this).data("hover-delay"), instantlyCloseOthers: e(this).data("close-others") },
                h = "show.bs.dropdown",
                c = "hide.bs.dropdown",
                v = e.extend(!0, {}, u, t, l);s.hover(function (e) {
                return s.hasClass("open") || d.is(e.target) ? void r(e) : !0;
            }, function () {
                n.clearTimeout(i), a = n.setTimeout(function () {
                    d.attr("aria-expanded", "false"), s.removeClass("open"), d.trigger(c);
                }, v.delay);
            }), d.hover(function (e) {
                return s.hasClass("open") || s.is(e.target) ? void r(e) : !0;
            }), s.find(".dropdown-submenu").each(function () {
                var o,
                    t = e(this);t.hover(function () {
                    n.clearTimeout(o), t.children(".dropdown-menu").show(), t.siblings().children(".dropdown-menu").hide();
                }, function () {
                    var e = t.children(".dropdown-menu");o = n.setTimeout(function () {
                        e.hide();
                    }, v.delay);
                });
            });
        }));
    }, e(document).ready(function () {
        e('[data-hover="dropdown"]').dropdownHover();
    });
}(jQuery, window);
