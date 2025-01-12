var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*! Magnific Popup - v1.1.0 - 2016-02-20
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2016 Dmitry Semenov; */
!function (a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == (typeof exports === "undefined" ? "undefined" : _typeof2(exports)) ? require("jquery") : window.jQuery || window.Zepto);
}(function (a) {
    var b,
        c,
        d,
        e,
        f,
        g,
        h = "Close",
        i = "BeforeClose",
        j = "AfterClose",
        k = "BeforeAppend",
        l = "MarkupParse",
        m = "Open",
        n = "Change",
        o = "mfp",
        p = "." + o,
        q = "mfp-ready",
        r = "mfp-removing",
        s = "mfp-prevent-close",
        t = function t() {},
        u = !!window.jQuery,
        v = a(window),
        w = function w(a, c) {
        b.ev.on(o + a + p, c);
    },
        x = function x(b, c, d, e) {
        var f = document.createElement("div");return f.className = "mfp-" + b, d && (f.innerHTML = d), e ? c && c.appendChild(f) : (f = a(f), c && f.appendTo(c)), f;
    },
        y = function y(c, d) {
        b.ev.triggerHandler(o + c, d), b.st.callbacks && (c = c.charAt(0).toLowerCase() + c.slice(1), b.st.callbacks[c] && b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d]));
    },
        z = function z(c) {
        return c === g && b.currTemplate.closeBtn || (b.currTemplate.closeBtn = a(b.st.closeMarkup.replace("%title%", b.st.tClose)), g = c), b.currTemplate.closeBtn;
    },
        A = function A() {
        a.magnificPopup.instance || (b = new t(), b.init(), a.magnificPopup.instance = b);
    },
        B = function B() {
        var a = document.createElement("p").style,
            b = ["ms", "O", "Moz", "Webkit"];if (void 0 !== a.transition) return !0;for (; b.length;) {
            if (b.pop() + "Transition" in a) return !0;
        }return !1;
    };t.prototype = { constructor: t, init: function init() {
            var c = navigator.appVersion;b.isLowIE = b.isIE8 = document.all && !document.addEventListener, b.isAndroid = /android/gi.test(c), b.isIOS = /iphone|ipad|ipod/gi.test(c), b.supportsTransition = B(), b.probablyMobile = b.isAndroid || b.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), d = a(document), b.popupsCache = {};
        }, open: function open(c) {
            var e;if (c.isObj === !1) {
                b.items = c.items.toArray(), b.index = 0;var g,
                    h = c.items;for (e = 0; e < h.length; e++) {
                    if (g = h[e], g.parsed && (g = g.el[0]), g === c.el[0]) {
                        b.index = e;break;
                    }
                }
            } else b.items = a.isArray(c.items) ? c.items : [c.items], b.index = c.index || 0;if (b.isOpen) return void b.updateItemHTML();b.types = [], f = "", c.mainEl && c.mainEl.length ? b.ev = c.mainEl.eq(0) : b.ev = d, c.key ? (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}), b.currTemplate = b.popupsCache[c.key]) : b.currTemplate = {}, b.st = a.extend(!0, {}, a.magnificPopup.defaults, c), b.fixedContentPos = "auto" === b.st.fixedContentPos ? !b.probablyMobile : b.st.fixedContentPos, b.st.modal && (b.st.closeOnContentClick = !1, b.st.closeOnBgClick = !1, b.st.showCloseBtn = !1, b.st.enableEscapeKey = !1), b.bgOverlay || (b.bgOverlay = x("bg").on("click" + p, function () {
                b.close();
            }), b.wrap = x("wrap").attr("tabindex", -1).on("click" + p, function (a) {
                b._checkIfClose(a.target) && b.close();
            }), b.container = x("container", b.wrap)), b.contentContainer = x("content"), b.st.preloader && (b.preloader = x("preloader", b.container, b.st.tLoading));var i = a.magnificPopup.modules;for (e = 0; e < i.length; e++) {
                var j = i[e];j = j.charAt(0).toUpperCase() + j.slice(1), b["init" + j].call(b);
            }y("BeforeOpen"), b.st.showCloseBtn && (b.st.closeBtnInside ? (w(l, function (a, b, c, d) {
                c.close_replaceWith = z(d.type);
            }), f += " mfp-close-btn-in") : b.wrap.append(z())), b.st.alignTop && (f += " mfp-align-top"), b.fixedContentPos ? b.wrap.css({ overflow: b.st.overflowY, overflowX: "hidden", overflowY: b.st.overflowY }) : b.wrap.css({ top: v.scrollTop(), position: "absolute" }), (b.st.fixedBgPos === !1 || "auto" === b.st.fixedBgPos && !b.fixedContentPos) && b.bgOverlay.css({ height: d.height(), position: "absolute" }), b.st.enableEscapeKey && d.on("keyup" + p, function (a) {
                27 === a.keyCode && b.close();
            }), v.on("resize" + p, function () {
                b.updateSize();
            }), b.st.closeOnContentClick || (f += " mfp-auto-cursor"), f && b.wrap.addClass(f);var k = b.wH = v.height(),
                n = {};if (b.fixedContentPos && b._hasScrollBar(k)) {
                var o = b._getScrollbarSize();o && (n.marginRight = o);
            }b.fixedContentPos && (b.isIE7 ? a("body, html").css("overflow", "hidden") : n.overflow = "hidden");var r = b.st.mainClass;return b.isIE7 && (r += " mfp-ie7"), r && b._addClassToMFP(r), b.updateItemHTML(), y("BuildControls"), a("html").css(n), b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || a(document.body)), b._lastFocusedEl = document.activeElement, setTimeout(function () {
                b.content ? (b._addClassToMFP(q), b._setFocus()) : b.bgOverlay.addClass(q), d.on("focusin" + p, b._onFocusIn);
            }, 16), b.isOpen = !0, b.updateSize(k), y(m), c;
        }, close: function close() {
            b.isOpen && (y(i), b.isOpen = !1, b.st.removalDelay && !b.isLowIE && b.supportsTransition ? (b._addClassToMFP(r), setTimeout(function () {
                b._close();
            }, b.st.removalDelay)) : b._close());
        }, _close: function _close() {
            y(h);var c = r + " " + q + " ";if (b.bgOverlay.detach(), b.wrap.detach(), b.container.empty(), b.st.mainClass && (c += b.st.mainClass + " "), b._removeClassFromMFP(c), b.fixedContentPos) {
                var e = { marginRight: "" };b.isIE7 ? a("body, html").css("overflow", "") : e.overflow = "", a("html").css(e);
            }d.off("keyup" + p + " focusin" + p), b.ev.off(p), b.wrap.attr("class", "mfp-wrap").removeAttr("style"), b.bgOverlay.attr("class", "mfp-bg"), b.container.attr("class", "mfp-container"), !b.st.showCloseBtn || b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== !0 || b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach(), b.st.autoFocusLast && b._lastFocusedEl && a(b._lastFocusedEl).focus(), b.currItem = null, b.content = null, b.currTemplate = null, b.prevHeight = 0, y(j);
        }, updateSize: function updateSize(a) {
            if (b.isIOS) {
                var c = document.documentElement.clientWidth / window.innerWidth,
                    d = window.innerHeight * c;b.wrap.css("height", d), b.wH = d;
            } else b.wH = a || v.height();b.fixedContentPos || b.wrap.css("height", b.wH), y("Resize");
        }, updateItemHTML: function updateItemHTML() {
            var c = b.items[b.index];b.contentContainer.detach(), b.content && b.content.detach(), c.parsed || (c = b.parseEl(b.index));var d = c.type;if (y("BeforeChange", [b.currItem ? b.currItem.type : "", d]), b.currItem = c, !b.currTemplate[d]) {
                var f = b.st[d] ? b.st[d].markup : !1;y("FirstMarkupParse", f), f ? b.currTemplate[d] = a(f) : b.currTemplate[d] = !0;
            }e && e !== c.type && b.container.removeClass("mfp-" + e + "-holder");var g = b["get" + d.charAt(0).toUpperCase() + d.slice(1)](c, b.currTemplate[d]);b.appendContent(g, d), c.preloaded = !0, y(n, c), e = c.type, b.container.prepend(b.contentContainer), y("AfterChange");
        }, appendContent: function appendContent(a, c) {
            b.content = a, a ? b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c] === !0 ? b.content.find(".mfp-close").length || b.content.append(z()) : b.content = a : b.content = "", y(k), b.container.addClass("mfp-" + c + "-holder"), b.contentContainer.append(b.content);
        }, parseEl: function parseEl(c) {
            var d,
                e = b.items[c];if (e.tagName ? e = { el: a(e) } : (d = e.type, e = { data: e, src: e.src }), e.el) {
                for (var f = b.types, g = 0; g < f.length; g++) {
                    if (e.el.hasClass("mfp-" + f[g])) {
                        d = f[g];break;
                    }
                }e.src = e.el.attr("data-mfp-src"), e.src || (e.src = e.el.attr("href"));
            }return e.type = d || b.st.type || "inline", e.index = c, e.parsed = !0, b.items[c] = e, y("ElementParse", e), b.items[c];
        }, addGroup: function addGroup(a, c) {
            var d = function d(_d) {
                _d.mfpEl = this, b._openClick(_d, a, c);
            };c || (c = {});var e = "click.magnificPopup";c.mainEl = a, c.items ? (c.isObj = !0, a.off(e).on(e, d)) : (c.isObj = !1, c.delegate ? a.off(e).on(e, c.delegate, d) : (c.items = a, a.off(e).on(e, d)));
        }, _openClick: function _openClick(c, d, e) {
            var f = void 0 !== e.midClick ? e.midClick : a.magnificPopup.defaults.midClick;if (f || !(2 === c.which || c.ctrlKey || c.metaKey || c.altKey || c.shiftKey)) {
                var g = void 0 !== e.disableOn ? e.disableOn : a.magnificPopup.defaults.disableOn;if (g) if (a.isFunction(g)) {
                    if (!g.call(b)) return !0;
                } else if (v.width() < g) return !0;c.type && (c.preventDefault(), b.isOpen && c.stopPropagation()), e.el = a(c.mfpEl), e.delegate && (e.items = d.find(e.delegate)), b.open(e);
            }
        }, updateStatus: function updateStatus(a, d) {
            if (b.preloader) {
                c !== a && b.container.removeClass("mfp-s-" + c), d || "loading" !== a || (d = b.st.tLoading);var e = { status: a, text: d };y("UpdateStatus", e), a = e.status, d = e.text, b.preloader.html(d), b.preloader.find("a").on("click", function (a) {
                    a.stopImmediatePropagation();
                }), b.container.addClass("mfp-s-" + a), c = a;
            }
        }, _checkIfClose: function _checkIfClose(c) {
            if (!a(c).hasClass(s)) {
                var d = b.st.closeOnContentClick,
                    e = b.st.closeOnBgClick;if (d && e) return !0;if (!b.content || a(c).hasClass("mfp-close") || b.preloader && c === b.preloader[0]) return !0;if (c === b.content[0] || a.contains(b.content[0], c)) {
                    if (d) return !0;
                } else if (e && a.contains(document, c)) return !0;return !1;
            }
        }, _addClassToMFP: function _addClassToMFP(a) {
            b.bgOverlay.addClass(a), b.wrap.addClass(a);
        }, _removeClassFromMFP: function _removeClassFromMFP(a) {
            this.bgOverlay.removeClass(a), b.wrap.removeClass(a);
        }, _hasScrollBar: function _hasScrollBar(a) {
            return (b.isIE7 ? d.height() : document.body.scrollHeight) > (a || v.height());
        }, _setFocus: function _setFocus() {
            (b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus();
        }, _onFocusIn: function _onFocusIn(c) {
            return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target) ? void 0 : (b._setFocus(), !1);
        }, _parseMarkup: function _parseMarkup(b, c, d) {
            var e;d.data && (c = a.extend(d.data, c)), y(l, [b, c, d]), a.each(c, function (c, d) {
                if (void 0 === d || d === !1) return !0;if (e = c.split("_"), e.length > 1) {
                    var f = b.find(p + "-" + e[0]);if (f.length > 0) {
                        var g = e[1];"replaceWith" === g ? f[0] !== d[0] && f.replaceWith(d) : "img" === g ? f.is("img") ? f.attr("src", d) : f.replaceWith(a("<img>").attr("src", d).attr("class", f.attr("class"))) : f.attr(e[1], d);
                    }
                } else b.find(p + "-" + c).html(d);
            });
        }, _getScrollbarSize: function _getScrollbarSize() {
            if (void 0 === b.scrollbarSize) {
                var a = document.createElement("div");a.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(a), b.scrollbarSize = a.offsetWidth - a.clientWidth, document.body.removeChild(a);
            }return b.scrollbarSize;
        } }, a.magnificPopup = { instance: null, proto: t.prototype, modules: [], open: function open(b, c) {
            return A(), b = b ? a.extend(!0, {}, b) : {}, b.isObj = !0, b.index = c || 0, this.instance.open(b);
        }, close: function close() {
            return a.magnificPopup.instance && a.magnificPopup.instance.close();
        }, registerModule: function registerModule(b, c) {
            c.options && (a.magnificPopup.defaults[b] = c.options), a.extend(this.proto, c.proto), this.modules.push(b);
        }, defaults: { disableOn: 0, key: null, midClick: !1, mainClass: "", preloader: !0, focus: "", closeOnContentClick: !1, closeOnBgClick: !0, closeBtnInside: !0, showCloseBtn: !0, enableEscapeKey: !0, modal: !1, alignTop: !1, removalDelay: 0, prependTo: null, fixedContentPos: "auto", fixedBgPos: "auto", overflowY: "auto", closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>', tClose: "Close (Esc)", tLoading: "Loading...", autoFocusLast: !0 } }, a.fn.magnificPopup = function (c) {
        A();var d = a(this);if ("string" == typeof c) {
            if ("open" === c) {
                var e,
                    f = u ? d.data("magnificPopup") : d[0].magnificPopup,
                    g = parseInt(arguments[1], 10) || 0;f.items ? e = f.items[g] : (e = d, f.delegate && (e = e.find(f.delegate)), e = e.eq(g)), b._openClick({ mfpEl: e }, d, f);
            } else b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1));
        } else c = a.extend(!0, {}, c), u ? d.data("magnificPopup", c) : d[0].magnificPopup = c, b.addGroup(d, c);return d;
    };var C,
        D,
        E,
        F = "inline",
        G = function G() {
        E && (D.after(E.addClass(C)).detach(), E = null);
    };a.magnificPopup.registerModule(F, { options: { hiddenClass: "hide", markup: "", tNotFound: "Content not found" }, proto: { initInline: function initInline() {
                b.types.push(F), w(h + "." + F, function () {
                    G();
                });
            }, getInline: function getInline(c, d) {
                if (G(), c.src) {
                    var e = b.st.inline,
                        f = a(c.src);if (f.length) {
                        var g = f[0].parentNode;g && g.tagName && (D || (C = e.hiddenClass, D = x(C), C = "mfp-" + C), E = f.after(D).detach().removeClass(C)), b.updateStatus("ready");
                    } else b.updateStatus("error", e.tNotFound), f = a("<div>");return c.inlineElement = f, f;
                }return b.updateStatus("ready"), b._parseMarkup(d, {}, c), d;
            } } });var H,
        I = "ajax",
        J = function J() {
        H && a(document.body).removeClass(H);
    },
        K = function K() {
        J(), b.req && b.req.abort();
    };a.magnificPopup.registerModule(I, { options: { settings: null, cursor: "mfp-ajax-cur", tError: '<a href="%url%">The content</a> could not be loaded.' }, proto: { initAjax: function initAjax() {
                b.types.push(I), H = b.st.ajax.cursor, w(h + "." + I, K), w("BeforeChange." + I, K);
            }, getAjax: function getAjax(c) {
                H && a(document.body).addClass(H), b.updateStatus("loading");var d = a.extend({ url: c.src, success: function success(d, e, f) {
                        var g = { data: d, xhr: f };y("ParseAjax", g), b.appendContent(a(g.data), I), c.finished = !0, J(), b._setFocus(), setTimeout(function () {
                            b.wrap.addClass(q);
                        }, 16), b.updateStatus("ready"), y("AjaxContentAdded");
                    }, error: function error() {
                        J(), c.finished = c.loadError = !0, b.updateStatus("error", b.st.ajax.tError.replace("%url%", c.src));
                    } }, b.st.ajax.settings);return b.req = a.ajax(d), "";
            } } });var L,
        M = function M(c) {
        if (c.data && void 0 !== c.data.title) return c.data.title;var d = b.st.image.titleSrc;if (d) {
            if (a.isFunction(d)) return d.call(b, c);if (c.el) return c.el.attr(d) || "";
        }return "";
    };a.magnificPopup.registerModule("image", { options: { markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>', cursor: "mfp-zoom-out-cur", titleSrc: "title", verticalFit: !0, tError: '<a href="%url%">The image</a> could not be loaded.' }, proto: { initImage: function initImage() {
                var c = b.st.image,
                    d = ".image";b.types.push("image"), w(m + d, function () {
                    "image" === b.currItem.type && c.cursor && a(document.body).addClass(c.cursor);
                }), w(h + d, function () {
                    c.cursor && a(document.body).removeClass(c.cursor), v.off("resize" + p);
                }), w("Resize" + d, b.resizeImage), b.isLowIE && w("AfterChange", b.resizeImage);
            }, resizeImage: function resizeImage() {
                var a = b.currItem;if (a && a.img && b.st.image.verticalFit) {
                    var c = 0;b.isLowIE && (c = parseInt(a.img.css("padding-top"), 10) + parseInt(a.img.css("padding-bottom"), 10)), a.img.css("max-height", b.wH - c);
                }
            }, _onImageHasSize: function _onImageHasSize(a) {
                a.img && (a.hasSize = !0, L && clearInterval(L), a.isCheckingImgSize = !1, y("ImageHasSize", a), a.imgHidden && (b.content && b.content.removeClass("mfp-loading"), a.imgHidden = !1));
            }, findImageSize: function findImageSize(a) {
                var c = 0,
                    d = a.img[0],
                    e = function e(f) {
                    L && clearInterval(L), L = setInterval(function () {
                        return d.naturalWidth > 0 ? void b._onImageHasSize(a) : (c > 200 && clearInterval(L), c++, void (3 === c ? e(10) : 40 === c ? e(50) : 100 === c && e(500)));
                    }, f);
                };e(1);
            }, getImage: function getImage(c, d) {
                var e = 0,
                    f = function f() {
                    c && (c.img[0].complete ? (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("ready")), c.hasSize = !0, c.loaded = !0, y("ImageLoadComplete")) : (e++, 200 > e ? setTimeout(f, 100) : g()));
                },
                    g = function g() {
                    c && (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("error", h.tError.replace("%url%", c.src))), c.hasSize = !0, c.loaded = !0, c.loadError = !0);
                },
                    h = b.st.image,
                    i = d.find(".mfp-img");if (i.length) {
                    var j = document.createElement("img");j.className = "mfp-img", c.el && c.el.find("img").length && (j.alt = c.el.find("img").attr("alt")), c.img = a(j).on("load.mfploader", f).on("error.mfploader", g), j.src = c.src, i.is("img") && (c.img = c.img.clone()), j = c.img[0], j.naturalWidth > 0 ? c.hasSize = !0 : j.width || (c.hasSize = !1);
                }return b._parseMarkup(d, { title: M(c), img_replaceWith: c.img }, c), b.resizeImage(), c.hasSize ? (L && clearInterval(L), c.loadError ? (d.addClass("mfp-loading"), b.updateStatus("error", h.tError.replace("%url%", c.src))) : (d.removeClass("mfp-loading"), b.updateStatus("ready")), d) : (b.updateStatus("loading"), c.loading = !0, c.hasSize || (c.imgHidden = !0, d.addClass("mfp-loading"), b.findImageSize(c)), d);
            } } });var N,
        O = function O() {
        return void 0 === N && (N = void 0 !== document.createElement("p").style.MozTransform), N;
    };a.magnificPopup.registerModule("zoom", { options: { enabled: !1, easing: "ease-in-out", duration: 300, opener: function opener(a) {
                return a.is("img") ? a : a.find("img");
            } }, proto: { initZoom: function initZoom() {
                var a,
                    c = b.st.zoom,
                    d = ".zoom";if (c.enabled && b.supportsTransition) {
                    var e,
                        f,
                        g = c.duration,
                        j = function j(a) {
                        var b = a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                            d = "all " + c.duration / 1e3 + "s " + c.easing,
                            e = { position: "fixed", zIndex: 9999, left: 0, top: 0, "-webkit-backface-visibility": "hidden" },
                            f = "transition";return e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d, b.css(e), b;
                    },
                        k = function k() {
                        b.content.css("visibility", "visible");
                    };w("BuildControls" + d, function () {
                        if (b._allowZoom()) {
                            if (clearTimeout(e), b.content.css("visibility", "hidden"), a = b._getItemToZoom(), !a) return void k();f = j(a), f.css(b._getOffset()), b.wrap.append(f), e = setTimeout(function () {
                                f.css(b._getOffset(!0)), e = setTimeout(function () {
                                    k(), setTimeout(function () {
                                        f.remove(), a = f = null, y("ZoomAnimationEnded");
                                    }, 16);
                                }, g);
                            }, 16);
                        }
                    }), w(i + d, function () {
                        if (b._allowZoom()) {
                            if (clearTimeout(e), b.st.removalDelay = g, !a) {
                                if (a = b._getItemToZoom(), !a) return;f = j(a);
                            }f.css(b._getOffset(!0)), b.wrap.append(f), b.content.css("visibility", "hidden"), setTimeout(function () {
                                f.css(b._getOffset());
                            }, 16);
                        }
                    }), w(h + d, function () {
                        b._allowZoom() && (k(), f && f.remove(), a = null);
                    });
                }
            }, _allowZoom: function _allowZoom() {
                return "image" === b.currItem.type;
            }, _getItemToZoom: function _getItemToZoom() {
                return b.currItem.hasSize ? b.currItem.img : !1;
            }, _getOffset: function _getOffset(c) {
                var d;d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem);var e = d.offset(),
                    f = parseInt(d.css("padding-top"), 10),
                    g = parseInt(d.css("padding-bottom"), 10);e.top -= a(window).scrollTop() - f;var h = { width: d.width(), height: (u ? d.innerHeight() : d[0].offsetHeight) - g - f };return O() ? h["-moz-transform"] = h.transform = "translate(" + e.left + "px," + e.top + "px)" : (h.left = e.left, h.top = e.top), h;
            } } });var P = "iframe",
        Q = "//about:blank",
        R = function R(a) {
        if (b.currTemplate[P]) {
            var c = b.currTemplate[P].find("iframe");c.length && (a || (c[0].src = Q), b.isIE8 && c.css("display", a ? "block" : "none"));
        }
    };a.magnificPopup.registerModule(P, { options: { markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>', srcAction: "iframe_src", patterns: { youtube: { index: "youtube.com", id: "v=", src: "//www.youtube.com/embed/%id%?autoplay=1" }, vimeo: { index: "vimeo.com/", id: "/", src: "//player.vimeo.com/video/%id%?autoplay=1" }, gmaps: { index: "//maps.google.", src: "%id%&output=embed" } } }, proto: { initIframe: function initIframe() {
                b.types.push(P), w("BeforeChange", function (a, b, c) {
                    b !== c && (b === P ? R() : c === P && R(!0));
                }), w(h + "." + P, function () {
                    R();
                });
            }, getIframe: function getIframe(c, d) {
                var e = c.src,
                    f = b.st.iframe;a.each(f.patterns, function () {
                    return e.indexOf(this.index) > -1 ? (this.id && (e = "string" == typeof this.id ? e.substr(e.lastIndexOf(this.id) + this.id.length, e.length) : this.id.call(this, e)), e = this.src.replace("%id%", e), !1) : void 0;
                });var g = {};return f.srcAction && (g[f.srcAction] = e), b._parseMarkup(d, g, c), b.updateStatus("ready"), d;
            } } });var S = function S(a) {
        var c = b.items.length;return a > c - 1 ? a - c : 0 > a ? c + a : a;
    },
        T = function T(a, b, c) {
        return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c);
    };a.magnificPopup.registerModule("gallery", { options: { enabled: !1, arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', preload: [0, 2], navigateByImgClick: !0, arrows: !0, tPrev: "Previous (Left arrow key)", tNext: "Next (Right arrow key)", tCounter: "%curr% of %total%" }, proto: { initGallery: function initGallery() {
                var c = b.st.gallery,
                    e = ".mfp-gallery";return b.direction = !0, c && c.enabled ? (f += " mfp-gallery", w(m + e, function () {
                    c.navigateByImgClick && b.wrap.on("click" + e, ".mfp-img", function () {
                        return b.items.length > 1 ? (b.next(), !1) : void 0;
                    }), d.on("keydown" + e, function (a) {
                        37 === a.keyCode ? b.prev() : 39 === a.keyCode && b.next();
                    });
                }), w("UpdateStatus" + e, function (a, c) {
                    c.text && (c.text = T(c.text, b.currItem.index, b.items.length));
                }), w(l + e, function (a, d, e, f) {
                    var g = b.items.length;e.counter = g > 1 ? T(c.tCounter, f.index, g) : "";
                }), w("BuildControls" + e, function () {
                    if (b.items.length > 1 && c.arrows && !b.arrowLeft) {
                        var d = c.arrowMarkup,
                            e = b.arrowLeft = a(d.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")).addClass(s),
                            f = b.arrowRight = a(d.replace(/%title%/gi, c.tNext).replace(/%dir%/gi, "right")).addClass(s);e.click(function () {
                            b.prev();
                        }), f.click(function () {
                            b.next();
                        }), b.container.append(e.add(f));
                    }
                }), w(n + e, function () {
                    b._preloadTimeout && clearTimeout(b._preloadTimeout), b._preloadTimeout = setTimeout(function () {
                        b.preloadNearbyImages(), b._preloadTimeout = null;
                    }, 16);
                }), void w(h + e, function () {
                    d.off(e), b.wrap.off("click" + e), b.arrowRight = b.arrowLeft = null;
                })) : !1;
            }, next: function next() {
                b.direction = !0, b.index = S(b.index + 1), b.updateItemHTML();
            }, prev: function prev() {
                b.direction = !1, b.index = S(b.index - 1), b.updateItemHTML();
            }, goTo: function goTo(a) {
                b.direction = a >= b.index, b.index = a, b.updateItemHTML();
            }, preloadNearbyImages: function preloadNearbyImages() {
                var a,
                    c = b.st.gallery.preload,
                    d = Math.min(c[0], b.items.length),
                    e = Math.min(c[1], b.items.length);for (a = 1; a <= (b.direction ? e : d); a++) {
                    b._preloadItem(b.index + a);
                }for (a = 1; a <= (b.direction ? d : e); a++) {
                    b._preloadItem(b.index - a);
                }
            }, _preloadItem: function _preloadItem(c) {
                if (c = S(c), !b.items[c].preloaded) {
                    var d = b.items[c];d.parsed || (d = b.parseEl(c)), y("LazyLoad", d), "image" === d.type && (d.img = a('<img class="mfp-img" />').on("load.mfploader", function () {
                        d.hasSize = !0;
                    }).on("error.mfploader", function () {
                        d.hasSize = !0, d.loadError = !0, y("LazyLoadError", d);
                    }).attr("src", d.src)), d.preloaded = !0;
                }
            } } });var U = "retina";a.magnificPopup.registerModule(U, { options: { replaceSrc: function replaceSrc(a) {
                return a.src.replace(/\.\w+$/, function (a) {
                    return "@2x" + a;
                });
            }, ratio: 1 }, proto: { initRetina: function initRetina() {
                if (window.devicePixelRatio > 1) {
                    var a = b.st.retina,
                        c = a.ratio;c = isNaN(c) ? c() : c, c > 1 && (w("ImageHasSize." + U, function (a, b) {
                        b.img.css({ "max-width": b.img[0].naturalWidth / c, width: "100%" });
                    }), w("ElementParse." + U, function (b, d) {
                        d.src = a.replaceSrc(d, c);
                    }));
                }
            } } }), A();
});
/**
 * vee-validate v2.0.0-rc.25
 * (c) 2017 Abdelrahman Awad
 * @license MIT
 */
(function (global, factory) {
    (typeof exports === "undefined" ? "undefined" : _typeof2(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : global.VeeValidate = factory();
})(this, function () {
    'use strict';

    var MILLISECONDS_IN_HOUR = 3600000;
    var MILLISECONDS_IN_MINUTE = 60000;
    var DEFAULT_ADDITIONAL_DIGITS = 2;

    var patterns = {
        dateTimeDelimeter: /[T ]/,
        plainTime: /:/,

        // year tokens
        YY: /^(\d{2})$/,
        YYY: [/^([+-]\d{2})$/, // 0 additional digits
        /^([+-]\d{3})$/, // 1 additional digit
        /^([+-]\d{4})$/ // 2 additional digits
        ],
        YYYY: /^(\d{4})/,
        YYYYY: [/^([+-]\d{4})/, // 0 additional digits
        /^([+-]\d{5})/, // 1 additional digit
        /^([+-]\d{6})/ // 2 additional digits
        ],

        // date tokens
        MM: /^-(\d{2})$/,
        DDD: /^-?(\d{3})$/,
        MMDD: /^-?(\d{2})-?(\d{2})$/,
        Www: /^-?W(\d{2})$/,
        WwwD: /^-?W(\d{2})-?(\d{1})$/,

        HH: /^(\d{2}([.,]\d*)?)$/,
        HHMM: /^(\d{2}):?(\d{2}([.,]\d*)?)$/,
        HHMMSS: /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,

        // timezone tokens
        timezone: /([Z+-].*)$/,
        timezoneZ: /^(Z)$/,
        timezoneHH: /^([+-])(\d{2})$/,
        timezoneHHMM: /^([+-])(\d{2}):?(\d{2})$/
    };

    /**
     * @name toDate
     * @category Common Helpers
     * @summary Convert the given argument to an instance of Date.
     *
     * @description
     * Convert the given argument to an instance of Date.
     *
     * If the argument is an instance of Date, the function returns its clone.
     *
     * If the argument is a number, it is treated as a timestamp.
     *
     * If an argument is a string, the function tries to parse it.
     * Function accepts complete ISO 8601 formats as well as partial implementations.
     * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
     *
     * If the argument is null, it is treated as an invalid date.
     *
     * If all above fails, the function passes the given argument to Date constructor.
     *
     * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
     * All *date-fns* functions will throw `RangeError` if `options.additionalDigits` is not 0, 1, 2 or undefined.
     *
     * @param {*} argument - the value to convert
     * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
     * @param {0|1|2} [options.additionalDigits=2] - the additional number of digits in the extended year format
     * @returns {Date} the parsed date in the local time zone
     * @throws {TypeError} 1 argument required
     * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
     *
     * @example
     * // Convert string '2014-02-11T11:30:30' to date:
     * var result = toDate('2014-02-11T11:30:30')
     * //=> Tue Feb 11 2014 11:30:30
     *
     * @example
     * // Convert string '+02014101' to date,
     * // if the additional number of digits in the extended year format is 1:
     * var result = toDate('+02014101', {additionalDigits: 1})
     * //=> Fri Apr 11 2014 00:00:00
     */
    function toDate(argument, dirtyOptions) {
        if (arguments.length < 1) {
            throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
        }

        if (argument === null) {
            return new Date(NaN);
        }

        var options = dirtyOptions || {};

        var additionalDigits = options.additionalDigits === undefined ? DEFAULT_ADDITIONAL_DIGITS : Number(options.additionalDigits);
        if (additionalDigits !== 2 && additionalDigits !== 1 && additionalDigits !== 0) {
            throw new RangeError('additionalDigits must be 0, 1 or 2');
        }

        // Clone the date
        if (argument instanceof Date) {
            // Prevent the date to lose the milliseconds when passed to new Date() in IE10
            return new Date(argument.getTime());
        } else if (typeof argument !== 'string') {
            return new Date(argument);
        }

        var dateStrings = splitDateString(argument);

        var parseYearResult = parseYear(dateStrings.date, additionalDigits);
        var year = parseYearResult.year;
        var restDateString = parseYearResult.restDateString;

        var date = parseDate(restDateString, year);

        if (date) {
            var timestamp = date.getTime();
            var time = 0;
            var offset;

            if (dateStrings.time) {
                time = parseTime(dateStrings.time);
            }

            if (dateStrings.timezone) {
                offset = parseTimezone(dateStrings.timezone);
            } else {
                // get offset accurate to hour in timezones that change offset
                offset = new Date(timestamp + time).getTimezoneOffset();
                offset = new Date(timestamp + time + offset * MILLISECONDS_IN_MINUTE).getTimezoneOffset();
            }

            return new Date(timestamp + time + offset * MILLISECONDS_IN_MINUTE);
        } else {
            return new Date(argument);
        }
    }

    function splitDateString(dateString) {
        var dateStrings = {};
        var array = dateString.split(patterns.dateTimeDelimeter);
        var timeString;

        if (patterns.plainTime.test(array[0])) {
            dateStrings.date = null;
            timeString = array[0];
        } else {
            dateStrings.date = array[0];
            timeString = array[1];
        }

        if (timeString) {
            var token = patterns.timezone.exec(timeString);
            if (token) {
                dateStrings.time = timeString.replace(token[1], '');
                dateStrings.timezone = token[1];
            } else {
                dateStrings.time = timeString;
            }
        }

        return dateStrings;
    }

    function parseYear(dateString, additionalDigits) {
        var patternYYY = patterns.YYY[additionalDigits];
        var patternYYYYY = patterns.YYYYY[additionalDigits];

        var token;

        // YYYY or ±YYYYY
        token = patterns.YYYY.exec(dateString) || patternYYYYY.exec(dateString);
        if (token) {
            var yearString = token[1];
            return {
                year: parseInt(yearString, 10),
                restDateString: dateString.slice(yearString.length)
            };
        }

        // YY or ±YYY
        token = patterns.YY.exec(dateString) || patternYYY.exec(dateString);
        if (token) {
            var centuryString = token[1];
            return {
                year: parseInt(centuryString, 10) * 100,
                restDateString: dateString.slice(centuryString.length)
            };
        }

        // Invalid ISO-formatted year
        return {
            year: null
        };
    }

    function parseDate(dateString, year) {
        // Invalid ISO-formatted year
        if (year === null) {
            return null;
        }

        var token;
        var date;
        var month;
        var week;

        // YYYY
        if (dateString.length === 0) {
            date = new Date(0);
            date.setUTCFullYear(year);
            return date;
        }

        // YYYY-MM
        token = patterns.MM.exec(dateString);
        if (token) {
            date = new Date(0);
            month = parseInt(token[1], 10) - 1;
            date.setUTCFullYear(year, month);
            return date;
        }

        // YYYY-DDD or YYYYDDD
        token = patterns.DDD.exec(dateString);
        if (token) {
            date = new Date(0);
            var dayOfYear = parseInt(token[1], 10);
            date.setUTCFullYear(year, 0, dayOfYear);
            return date;
        }

        // YYYY-MM-DD or YYYYMMDD
        token = patterns.MMDD.exec(dateString);
        if (token) {
            date = new Date(0);
            month = parseInt(token[1], 10) - 1;
            var day = parseInt(token[2], 10);
            date.setUTCFullYear(year, month, day);
            return date;
        }

        // YYYY-Www or YYYYWww
        token = patterns.Www.exec(dateString);
        if (token) {
            week = parseInt(token[1], 10) - 1;
            return dayOfISOYear(year, week);
        }

        // YYYY-Www-D or YYYYWwwD
        token = patterns.WwwD.exec(dateString);
        if (token) {
            week = parseInt(token[1], 10) - 1;
            var dayOfWeek = parseInt(token[2], 10) - 1;
            return dayOfISOYear(year, week, dayOfWeek);
        }

        // Invalid ISO-formatted date
        return null;
    }

    function parseTime(timeString) {
        var token;
        var hours;
        var minutes;

        // hh
        token = patterns.HH.exec(timeString);
        if (token) {
            hours = parseFloat(token[1].replace(',', '.'));
            return hours % 24 * MILLISECONDS_IN_HOUR;
        }

        // hh:mm or hhmm
        token = patterns.HHMM.exec(timeString);
        if (token) {
            hours = parseInt(token[1], 10);
            minutes = parseFloat(token[2].replace(',', '.'));
            return hours % 24 * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE;
        }

        // hh:mm:ss or hhmmss
        token = patterns.HHMMSS.exec(timeString);
        if (token) {
            hours = parseInt(token[1], 10);
            minutes = parseInt(token[2], 10);
            var seconds = parseFloat(token[3].replace(',', '.'));
            return hours % 24 * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE + seconds * 1000;
        }

        // Invalid ISO-formatted time
        return null;
    }

    function parseTimezone(timezoneString) {
        var token;
        var absoluteOffset;

        // Z
        token = patterns.timezoneZ.exec(timezoneString);
        if (token) {
            return 0;
        }

        // ±hh
        token = patterns.timezoneHH.exec(timezoneString);
        if (token) {
            absoluteOffset = parseInt(token[2], 10) * 60;
            return token[1] === '+' ? -absoluteOffset : absoluteOffset;
        }

        // ±hh:mm or ±hhmm
        token = patterns.timezoneHHMM.exec(timezoneString);
        if (token) {
            absoluteOffset = parseInt(token[2], 10) * 60 + parseInt(token[3], 10);
            return token[1] === '+' ? -absoluteOffset : absoluteOffset;
        }

        return 0;
    }

    function dayOfISOYear(isoYear, week, day) {
        week = week || 0;
        day = day || 0;
        var date = new Date(0);
        date.setUTCFullYear(isoYear, 0, 4);
        var fourthOfJanuaryDay = date.getUTCDay() || 7;
        var diff = week * 7 + day + 1 - fourthOfJanuaryDay;
        date.setUTCDate(date.getUTCDate() + diff);
        return date;
    }

    /**
     * @name addMilliseconds
     * @category Millisecond Helpers
     * @summary Add the specified number of milliseconds to the given date.
     *
     * @description
     * Add the specified number of milliseconds to the given date.
     *
     * @param {Date|String|Number} date - the date to be changed
     * @param {Number} amount - the amount of milliseconds to be added
     * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
     * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
     * @returns {Date} the new date with the milliseconds added
     * @throws {TypeError} 2 arguments required
     * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
     *
     * @example
     * // Add 750 milliseconds to 10 July 2014 12:45:30.000:
     * var result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
     * //=> Thu Jul 10 2014 12:45:30.750
     */
    function addMilliseconds(dirtyDate, dirtyAmount, dirtyOptions) {
        if (arguments.length < 2) {
            throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
        }

        var timestamp = toDate(dirtyDate, dirtyOptions).getTime();
        var amount = Number(dirtyAmount);
        return new Date(timestamp + amount);
    }

    function cloneObject(dirtyObject) {
        dirtyObject = dirtyObject || {};
        var object = {};

        for (var property in dirtyObject) {
            if (dirtyObject.hasOwnProperty(property)) {
                object[property] = dirtyObject[property];
            }
        }

        return object;
    }

    var MILLISECONDS_IN_MINUTE$2 = 60000;

    /**
     * @name addMinutes
     * @category Minute Helpers
     * @summary Add the specified number of minutes to the given date.
     *
     * @description
     * Add the specified number of minutes to the given date.
     *
     * @param {Date|String|Number} date - the date to be changed
     * @param {Number} amount - the amount of minutes to be added
     * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
     * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
     * @returns {Date} the new date with the minutes added
     * @throws {TypeError} 2 arguments required
     * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
     *
     * @example
     * // Add 30 minutes to 10 July 2014 12:00:00:
     * var result = addMinutes(new Date(2014, 6, 10, 12, 0), 30)
     * //=> Thu Jul 10 2014 12:30:00
     */
    function addMinutes(dirtyDate, dirtyAmount, dirtyOptions) {
        if (arguments.length < 2) {
            throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
        }

        var amount = Number(dirtyAmount);
        return addMilliseconds(dirtyDate, amount * MILLISECONDS_IN_MINUTE$2, dirtyOptions);
    }

    /**
     * @name isValid
     * @category Common Helpers
     * @summary Is the given date valid?
     *
     * @description
     * Returns false if argument is Invalid Date and true otherwise.
     * Argument is converted to Date using `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
     * Invalid Date is a Date, whose time value is NaN.
     *
     * Time value of Date: http://es5.github.io/#x15.9.1.1
     *
     * @param {*} date - the date to check
     * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
     * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
     * @returns {Boolean} the date is valid
     * @throws {TypeError} 1 argument required
     * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
     *
     * @example
     * // For the valid date:
     * var result = isValid(new Date(2014, 1, 31))
     * //=> true
     *
     * @example
     * // For the value, convertable into a date:
     * var result = isValid('2014-02-31')
     * //=> true
     *
     * @example
     * // For the invalid date:
     * var result = isValid(new Date(''))
     * //=> false
     */
    function isValid(dirtyDate, dirtyOptions) {
        if (arguments.length < 1) {
            throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
        }

        var date = toDate(dirtyDate, dirtyOptions);
        return !isNaN(date);
    }

    var formatDistanceLocale = {
        lessThanXSeconds: {
            one: 'less than a second',
            other: 'less than {{count}} seconds'
        },

        xSeconds: {
            one: '1 second',
            other: '{{count}} seconds'
        },

        halfAMinute: 'half a minute',

        lessThanXMinutes: {
            one: 'less than a minute',
            other: 'less than {{count}} minutes'
        },

        xMinutes: {
            one: '1 minute',
            other: '{{count}} minutes'
        },

        aboutXHours: {
            one: 'about 1 hour',
            other: 'about {{count}} hours'
        },

        xHours: {
            one: '1 hour',
            other: '{{count}} hours'
        },

        xDays: {
            one: '1 day',
            other: '{{count}} days'
        },

        aboutXMonths: {
            one: 'about 1 month',
            other: 'about {{count}} months'
        },

        xMonths: {
            one: '1 month',
            other: '{{count}} months'
        },

        aboutXYears: {
            one: 'about 1 year',
            other: 'about {{count}} years'
        },

        xYears: {
            one: '1 year',
            other: '{{count}} years'
        },

        overXYears: {
            one: 'over 1 year',
            other: 'over {{count}} years'
        },

        almostXYears: {
            one: 'almost 1 year',
            other: 'almost {{count}} years'
        }
    };

    function formatDistance(token, count, options) {
        options = options || {};

        var result;
        if (typeof formatDistanceLocale[token] === 'string') {
            result = formatDistanceLocale[token];
        } else if (count === 1) {
            result = formatDistanceLocale[token].one;
        } else {
            result = formatDistanceLocale[token].other.replace('{{count}}', count);
        }

        if (options.addSuffix) {
            if (options.comparison > 0) {
                return 'in ' + result;
            } else {
                return result + ' ago';
            }
        }

        return result;
    }

    var tokensToBeShortedPattern = /MMMM|MM|DD|dddd/g;

    function buildShortLongFormat(format) {
        return format.replace(tokensToBeShortedPattern, function (token) {
            return token.slice(1);
        });
    }

    /**
     * @name buildFormatLongFn
     * @category Locale Helpers
     * @summary Build `formatLong` property for locale used by `format`, `formatRelative` and `parse` functions.
     *
     * @description
     * Build `formatLong` property for locale used by `format`, `formatRelative` and `parse` functions.
     * Returns a function which takes one of the following tokens as the argument:
     * `'LTS'`, `'LT'`, `'L'`, `'LL'`, `'LLL'`, `'l'`, `'ll'`, `'lll'`, `'llll'`
     * and returns a long format string written as `format` token strings.
     * See [format]{@link https://date-fns.org/docs/format}
     *
     * `'l'`, `'ll'`, `'lll'` and `'llll'` formats are built automatically
     * by shortening some of the tokens from corresponding unshortened formats
     * (e.g., if `LL` is `'MMMM DD YYYY'` then `ll` will be `MMM D YYYY`)
     *
     * @param {Object} obj - the object with long formats written as `format` token strings
     * @param {String} obj.LT - time format: hours and minutes
     * @param {String} obj.LTS - time format: hours, minutes and seconds
     * @param {String} obj.L - short date format: numeric day, month and year
     * @param {String} [obj.l] - short date format: numeric day, month and year (shortened)
     * @param {String} obj.LL - long date format: day, month in words, and year
     * @param {String} [obj.ll] - long date format: day, month in words, and year (shortened)
     * @param {String} obj.LLL - long date and time format
     * @param {String} [obj.lll] - long date and time format (shortened)
     * @param {String} obj.LLLL - long date, time and weekday format
     * @param {String} [obj.llll] - long date, time and weekday format (shortened)
     * @returns {Function} `formatLong` property of the locale
     *
     * @example
     * // For `en-US` locale:
     * locale.formatLong = buildFormatLongFn({
    *   LT: 'h:mm aa',
    *   LTS: 'h:mm:ss aa',
    *   L: 'MM/DD/YYYY',
    *   LL: 'MMMM D YYYY',
    *   LLL: 'MMMM D YYYY h:mm aa',
    *   LLLL: 'dddd, MMMM D YYYY h:mm aa'
    * })
     */
    function buildFormatLongFn(obj) {
        var formatLongLocale = {
            LTS: obj.LTS,
            LT: obj.LT,
            L: obj.L,
            LL: obj.LL,
            LLL: obj.LLL,
            LLLL: obj.LLLL,
            l: obj.l || buildShortLongFormat(obj.L),
            ll: obj.ll || buildShortLongFormat(obj.LL),
            lll: obj.lll || buildShortLongFormat(obj.LLL),
            llll: obj.llll || buildShortLongFormat(obj.LLLL)
        };

        return function (token) {
            return formatLongLocale[token];
        };
    }

    var formatLong = buildFormatLongFn({
        LT: 'h:mm aa',
        LTS: 'h:mm:ss aa',
        L: 'MM/DD/YYYY',
        LL: 'MMMM D YYYY',
        LLL: 'MMMM D YYYY h:mm aa',
        LLLL: 'dddd, MMMM D YYYY h:mm aa'
    });

    var formatRelativeLocale = {
        lastWeek: '[last] dddd [at] LT',
        yesterday: '[yesterday at] LT',
        today: '[today at] LT',
        tomorrow: '[tomorrow at] LT',
        nextWeek: 'dddd [at] LT',
        other: 'L'
    };

    function formatRelative(token, date, baseDate, options) {
        return formatRelativeLocale[token];
    }

    /**
     * @name buildLocalizeFn
     * @category Locale Helpers
     * @summary Build `localize.weekday`, `localize.month` and `localize.timeOfDay` properties for the locale.
     *
     * @description
     * Build `localize.weekday`, `localize.month` and `localize.timeOfDay` properties for the locale
     * used by `format` function.
     * If no `type` is supplied to the options of the resulting function, `defaultType` will be used (see example).
     *
     * `localize.weekday` function takes the weekday index as argument (0 - Sunday).
     * `localize.month` takes the month index (0 - January).
     * `localize.timeOfDay` takes the hours. Use `indexCallback` to convert them to an array index (see example).
     *
     * @param {Object} values - the object with arrays of values
     * @param {String} defaultType - the default type for the localize function
     * @param {Function} [indexCallback] - the callback which takes the resulting function argument
     *   and converts it into value array index
     * @returns {Function} the resulting function
     *
     * @example
     * var timeOfDayValues = {
    *   uppercase: ['AM', 'PM'],
    *   lowercase: ['am', 'pm'],
    *   long: ['a.m.', 'p.m.']
    * }
     * locale.localize.timeOfDay = buildLocalizeFn(timeOfDayValues, 'long', function (hours) {
    *   // 0 is a.m. array index, 1 is p.m. array index
    *   return (hours / 12) >= 1 ? 1 : 0
    * })
     * locale.localize.timeOfDay(16, {type: 'uppercase'}) //=> 'PM'
     * locale.localize.timeOfDay(5) //=> 'a.m.'
     */
    function buildLocalizeFn(values, defaultType, indexCallback) {
        return function (dirtyIndex, dirtyOptions) {
            var options = dirtyOptions || {};
            var type = options.type ? String(options.type) : defaultType;
            var valuesArray = values[type] || values[defaultType];
            var index = indexCallback ? indexCallback(Number(dirtyIndex)) : Number(dirtyIndex);
            return valuesArray[index];
        };
    }

    /**
     * @name buildLocalizeArrayFn
     * @category Locale Helpers
     * @summary Build `localize.weekdays`, `localize.months` and `localize.timesOfDay` properties for the locale.
     *
     * @description
     * Build `localize.weekdays`, `localize.months` and `localize.timesOfDay` properties for the locale.
     * If no `type` is supplied to the options of the resulting function, `defaultType` will be used (see example).
     *
     * @param {Object} values - the object with arrays of values
     * @param {String} defaultType - the default type for the localize function
     * @returns {Function} the resulting function
     *
     * @example
     * var weekdayValues = {
    *   narrow: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
    *   short: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    *   long: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    * }
     * locale.localize.weekdays = buildLocalizeArrayFn(weekdayValues, 'long')
     * locale.localize.weekdays({type: 'narrow'}) //=> ['Su', 'Mo', ...]
     * locale.localize.weekdays() //=> ['Sunday', 'Monday', ...]
     */
    function buildLocalizeArrayFn(values, defaultType) {
        return function (dirtyOptions) {
            var options = dirtyOptions || {};
            var type = options.type ? String(options.type) : defaultType;
            return values[type] || values[defaultType];
        };
    }

    // Note: in English, the names of days of the week and months are capitalized.
    // If you are making a new locale based on this one, check if the same is true for the language you're working on.
    // Generally, formatted dates should look like they are in the middle of a sentence,
    // e.g. in Spanish language the weekdays and months should be in the lowercase.
    var weekdayValues = {
        narrow: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
        short: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        long: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    };

    var monthValues = {
        short: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        long: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    };

    // `timeOfDay` is used to designate which part of the day it is, when used with 12-hour clock.
    // Use the system which is used the most commonly in the locale.
    // For example, if the country doesn't use a.m./p.m., you can use `night`/`morning`/`afternoon`/`evening`:
    //
    //   var timeOfDayValues = {
    //     any: ['in the night', 'in the morning', 'in the afternoon', 'in the evening']
    //   }
    //
    // And later:
    //
    //   var localize = {
    //     // The callback takes the hours as the argument and returns the array index
    //     timeOfDay: buildLocalizeFn(timeOfDayValues, 'any', function (hours) {
    //       if (hours >= 17) {
    //         return 3
    //       } else if (hours >= 12) {
    //         return 2
    //       } else if (hours >= 4) {
    //         return 1
    //       } else {
    //         return 0
    //       }
    //     }),
    //     timesOfDay: buildLocalizeArrayFn(timeOfDayValues, 'any')
    //   }
    var timeOfDayValues = {
        uppercase: ['AM', 'PM'],
        lowercase: ['am', 'pm'],
        long: ['a.m.', 'p.m.']
    };

    function ordinalNumber(dirtyNumber, dirtyOptions) {
        var number = Number(dirtyNumber);

        // If ordinal numbers depend on context, for example,
        // if they are different for different grammatical genders,
        // use `options.unit`:
        //
        //   var options = dirtyOptions || {}
        //   var unit = String(options.unit)
        //
        // where `unit` can be 'month', 'quarter', 'week', 'isoWeek', 'dayOfYear',
        // 'dayOfMonth' or 'dayOfWeek'

        var rem100 = number % 100;
        if (rem100 > 20 || rem100 < 10) {
            switch (rem100 % 10) {
                case 1:
                    return number + 'st';
                case 2:
                    return number + 'nd';
                case 3:
                    return number + 'rd';
            }
        }
        return number + 'th';
    }

    var localize = {
        ordinalNumber: ordinalNumber,
        weekday: buildLocalizeFn(weekdayValues, 'long'),
        weekdays: buildLocalizeArrayFn(weekdayValues, 'long'),
        month: buildLocalizeFn(monthValues, 'long'),
        months: buildLocalizeArrayFn(monthValues, 'long'),
        timeOfDay: buildLocalizeFn(timeOfDayValues, 'long', function (hours) {
            return hours / 12 >= 1 ? 1 : 0;
        }),
        timesOfDay: buildLocalizeArrayFn(timeOfDayValues, 'long')
    };

    /**
     * @name buildMatchFn
     * @category Locale Helpers
     * @summary Build `match.weekdays`, `match.months` and `match.timesOfDay` properties for the locale.
     *
     * @description
     * Build `match.weekdays`, `match.months` and `match.timesOfDay` properties for the locale used by `parse` function.
     * If no `type` is supplied to the options of the resulting function, `defaultType` will be used (see example).
     * The result of the match function will be passed into corresponding parser function
     * (`match.weekday`, `match.month` or `match.timeOfDay` respectively. See `buildParseFn`).
     *
     * @param {Object} values - the object with RegExps
     * @param {String} defaultType - the default type for the match function
     * @returns {Function} the resulting function
     *
     * @example
     * var matchWeekdaysPatterns = {
    *   narrow: /^(su|mo|tu|we|th|fr|sa)/i,
    *   short: /^(sun|mon|tue|wed|thu|fri|sat)/i,
    *   long: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
    * }
     * locale.match.weekdays = buildMatchFn(matchWeekdaysPatterns, 'long')
     * locale.match.weekdays('Sunday', {type: 'narrow'}) //=> ['Su', 'Su', ...]
     * locale.match.weekdays('Sunday') //=> ['Sunday', 'Sunday', ...]
     */
    function buildMatchFn(patterns, defaultType) {
        return function (dirtyString, dirtyOptions) {
            var options = dirtyOptions || {};
            var type = options.type ? String(options.type) : defaultType;
            var pattern = patterns[type] || patterns[defaultType];
            var string = String(dirtyString);
            return string.match(pattern);
        };
    }

    /**
     * @name buildParseFn
     * @category Locale Helpers
     * @summary Build `match.weekday`, `match.month` and `match.timeOfDay` properties for the locale.
     *
     * @description
     * Build `match.weekday`, `match.month` and `match.timeOfDay` properties for the locale used by `parse` function.
     * The argument of the resulting function is the result of the corresponding match function
     * (`match.weekdays`, `match.months` or `match.timesOfDay` respectively. See `buildMatchFn`).
     *
     * @param {Object} values - the object with arrays of RegExps
     * @param {String} defaultType - the default type for the parser function
     * @returns {Function} the resulting function
     *
     * @example
     * var parseWeekdayPatterns = {
    *   any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
    * }
     * locale.match.weekday = buildParseFn(matchWeekdaysPatterns, 'long')
     * var matchResult = locale.match.weekdays('Friday')
     * locale.match.weekday(matchResult) //=> 5
     */
    function buildParseFn(patterns, defaultType) {
        return function (matchResult, dirtyOptions) {
            var options = dirtyOptions || {};
            var type = options.type ? String(options.type) : defaultType;
            var patternsArray = patterns[type] || patterns[defaultType];
            var string = matchResult[1];

            return patternsArray.findIndex(function (pattern) {
                return pattern.test(string);
            });
        };
    }

    /**
     * @name buildMatchPatternFn
     * @category Locale Helpers
     * @summary Build match function from a single RegExp.
     *
     * @description
     * Build match function from a single RegExp.
     * Usually used for building `match.ordinalNumbers` property of the locale.
     *
     * @param {Object} pattern - the RegExp
     * @returns {Function} the resulting function
     *
     * @example
     * locale.match.ordinalNumbers = buildMatchPatternFn(/^(\d+)(th|st|nd|rd)?/i)
     * locale.match.ordinalNumbers('3rd') //=> ['3rd', '3', 'rd', ...]
     */
    function buildMatchPatternFn(pattern) {
        return function (dirtyString) {
            var string = String(dirtyString);
            return string.match(pattern);
        };
    }

    /**
     * @name parseDecimal
     * @category Locale Helpers
     * @summary Parses the match result into decimal number.
     *
     * @description
     * Parses the match result into decimal number.
     * Uses the string matched with the first set of parentheses of match RegExp.
     *
     * @param {Array} matchResult - the object returned by matching function
     * @returns {Number} the parsed value
     *
     * @example
     * locale.match = {
    *   ordinalNumbers: (dirtyString) {
    *     return String(dirtyString).match(/^(\d+)(th|st|nd|rd)?/i)
    *   },
    *   ordinalNumber: parseDecimal
    * }
     */
    function parseDecimal(matchResult) {
        return parseInt(matchResult[1], 10);
    }

    var matchOrdinalNumbersPattern = /^(\d+)(th|st|nd|rd)?/i;

    var matchWeekdaysPatterns = {
        narrow: /^(su|mo|tu|we|th|fr|sa)/i,
        short: /^(sun|mon|tue|wed|thu|fri|sat)/i,
        long: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
    };

    var parseWeekdayPatterns = {
        any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
    };

    var matchMonthsPatterns = {
        short: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
        long: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
    };

    var parseMonthPatterns = {
        any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
    };

    // `timeOfDay` is used to designate which part of the day it is, when used with 12-hour clock.
    // Use the system which is used the most commonly in the locale.
    // For example, if the country doesn't use a.m./p.m., you can use `night`/`morning`/`afternoon`/`evening`:
    //
    //   var matchTimesOfDayPatterns = {
    //     long: /^((in the)? (night|morning|afternoon|evening?))/i
    //   }
    //
    //   var parseTimeOfDayPatterns = {
    //     any: [/(night|morning)/i, /(afternoon|evening)/i]
    //   }
    var matchTimesOfDayPatterns = {
        short: /^(am|pm)/i,
        long: /^([ap]\.?\s?m\.?)/i
    };

    var parseTimeOfDayPatterns = {
        any: [/^a/i, /^p/i]
    };

    var match = {
        ordinalNumbers: buildMatchPatternFn(matchOrdinalNumbersPattern),
        ordinalNumber: parseDecimal,
        weekdays: buildMatchFn(matchWeekdaysPatterns, 'long'),
        weekday: buildParseFn(parseWeekdayPatterns, 'any'),
        months: buildMatchFn(matchMonthsPatterns, 'long'),
        month: buildParseFn(parseMonthPatterns, 'any'),
        timesOfDay: buildMatchFn(matchTimesOfDayPatterns, 'long'),
        timeOfDay: buildParseFn(parseTimeOfDayPatterns, 'any')
    };

    /**
     * @type {Locale}
     * @category Locales
     * @summary English locale (United States).
     * @language English
     * @iso-639-2 eng
     */
    var locale = {
        formatDistance: formatDistance,
        formatLong: formatLong,
        formatRelative: formatRelative,
        localize: localize,
        match: match,
        options: {
            weekStartsOn: 0 /* Sunday */
            , firstWeekContainsDate: 1
        }
    };

    var MILLISECONDS_IN_DAY$1 = 86400000;

    // This function will be a part of public API when UTC function will be implemented.
    // See issue: https://github.com/date-fns/date-fns/issues/376
    function getUTCDayOfYear(dirtyDate, dirtyOptions) {
        var date = toDate(dirtyDate, dirtyOptions);
        var timestamp = date.getTime();
        date.setUTCMonth(0, 1);
        date.setUTCHours(0, 0, 0, 0);
        var startOfYearTimestamp = date.getTime();
        var difference = timestamp - startOfYearTimestamp;
        return Math.floor(difference / MILLISECONDS_IN_DAY$1) + 1;
    }

    // This function will be a part of public API when UTC function will be implemented.
    // See issue: https://github.com/date-fns/date-fns/issues/376
    function startOfUTCISOWeek(dirtyDate, dirtyOptions) {
        var weekStartsOn = 1;

        var date = toDate(dirtyDate, dirtyOptions);
        var day = date.getUTCDay();
        var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;

        date.setUTCDate(date.getUTCDate() - diff);
        date.setUTCHours(0, 0, 0, 0);
        return date;
    }

    // This function will be a part of public API when UTC function will be implemented.
    // See issue: https://github.com/date-fns/date-fns/issues/376
    function getUTCISOWeekYear(dirtyDate, dirtyOptions) {
        var date = toDate(dirtyDate, dirtyOptions);
        var year = date.getUTCFullYear();

        var fourthOfJanuaryOfNextYear = new Date(0);
        fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
        fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
        var startOfNextYear = startOfUTCISOWeek(fourthOfJanuaryOfNextYear, dirtyOptions);

        var fourthOfJanuaryOfThisYear = new Date(0);
        fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
        fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
        var startOfThisYear = startOfUTCISOWeek(fourthOfJanuaryOfThisYear, dirtyOptions);

        if (date.getTime() >= startOfNextYear.getTime()) {
            return year + 1;
        } else if (date.getTime() >= startOfThisYear.getTime()) {
            return year;
        } else {
            return year - 1;
        }
    }

    // This function will be a part of public API when UTC function will be implemented.
    // See issue: https://github.com/date-fns/date-fns/issues/376
    function startOfUTCISOWeekYear(dirtyDate, dirtyOptions) {
        var year = getUTCISOWeekYear(dirtyDate, dirtyOptions);
        var fourthOfJanuary = new Date(0);
        fourthOfJanuary.setUTCFullYear(year, 0, 4);
        fourthOfJanuary.setUTCHours(0, 0, 0, 0);
        var date = startOfUTCISOWeek(fourthOfJanuary, dirtyOptions);
        return date;
    }

    var MILLISECONDS_IN_WEEK$2 = 604800000;

    // This function will be a part of public API when UTC function will be implemented.
    // See issue: https://github.com/date-fns/date-fns/issues/376
    function getUTCISOWeek(dirtyDate, dirtyOptions) {
        var date = toDate(dirtyDate, dirtyOptions);
        var diff = startOfUTCISOWeek(date, dirtyOptions).getTime() - startOfUTCISOWeekYear(date, dirtyOptions).getTime();

        // Round the number of days to the nearest integer
        // because the number of milliseconds in a week is not constant
        // (e.g. it's different in the week of the daylight saving time clock shift)
        return Math.round(diff / MILLISECONDS_IN_WEEK$2) + 1;
    }

    var formatters = {
        // Month: 1, 2, ..., 12
        'M': function M(date) {
            return date.getUTCMonth() + 1;
        },

        // Month: 1st, 2nd, ..., 12th
        'Mo': function Mo(date, options) {
            var month = date.getUTCMonth() + 1;
            return options.locale.localize.ordinalNumber(month, { unit: 'month' });
        },

        // Month: 01, 02, ..., 12
        'MM': function MM(date) {
            return addLeadingZeros(date.getUTCMonth() + 1, 2);
        },

        // Month: Jan, Feb, ..., Dec
        'MMM': function MMM(date, options) {
            return options.locale.localize.month(date.getUTCMonth(), { type: 'short' });
        },

        // Month: January, February, ..., December
        'MMMM': function MMMM(date, options) {
            return options.locale.localize.month(date.getUTCMonth(), { type: 'long' });
        },

        // Quarter: 1, 2, 3, 4
        'Q': function Q(date) {
            return Math.ceil((date.getUTCMonth() + 1) / 3);
        },

        // Quarter: 1st, 2nd, 3rd, 4th
        'Qo': function Qo(date, options) {
            var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);
            return options.locale.localize.ordinalNumber(quarter, { unit: 'quarter' });
        },

        // Day of month: 1, 2, ..., 31
        'D': function D(date) {
            return date.getUTCDate();
        },

        // Day of month: 1st, 2nd, ..., 31st
        'Do': function Do(date, options) {
            return options.locale.localize.ordinalNumber(date.getUTCDate(), { unit: 'dayOfMonth' });
        },

        // Day of month: 01, 02, ..., 31
        'DD': function DD(date) {
            return addLeadingZeros(date.getUTCDate(), 2);
        },

        // Day of year: 1, 2, ..., 366
        'DDD': function DDD(date) {
            return getUTCDayOfYear(date);
        },

        // Day of year: 1st, 2nd, ..., 366th
        'DDDo': function DDDo(date, options) {
            return options.locale.localize.ordinalNumber(getUTCDayOfYear(date), { unit: 'dayOfYear' });
        },

        // Day of year: 001, 002, ..., 366
        'DDDD': function DDDD(date) {
            return addLeadingZeros(getUTCDayOfYear(date), 3);
        },

        // Day of week: Su, Mo, ..., Sa
        'dd': function dd(date, options) {
            return options.locale.localize.weekday(date.getUTCDay(), { type: 'narrow' });
        },

        // Day of week: Sun, Mon, ..., Sat
        'ddd': function ddd(date, options) {
            return options.locale.localize.weekday(date.getUTCDay(), { type: 'short' });
        },

        // Day of week: Sunday, Monday, ..., Saturday
        'dddd': function dddd(date, options) {
            return options.locale.localize.weekday(date.getUTCDay(), { type: 'long' });
        },

        // Day of week: 0, 1, ..., 6
        'd': function d(date) {
            return date.getUTCDay();
        },

        // Day of week: 0th, 1st, 2nd, ..., 6th
        'do': function _do(date, options) {
            return options.locale.localize.ordinalNumber(date.getUTCDay(), { unit: 'dayOfWeek' });
        },

        // Day of ISO week: 1, 2, ..., 7
        'E': function E(date) {
            return date.getUTCDay() || 7;
        },

        // ISO week: 1, 2, ..., 53
        'W': function W(date) {
            return getUTCISOWeek(date);
        },

        // ISO week: 1st, 2nd, ..., 53th
        'Wo': function Wo(date, options) {
            return options.locale.localize.ordinalNumber(getUTCISOWeek(date), { unit: 'isoWeek' });
        },

        // ISO week: 01, 02, ..., 53
        'WW': function WW(date) {
            return addLeadingZeros(getUTCISOWeek(date), 2);
        },

        // Year: 00, 01, ..., 99
        'YY': function YY(date) {
            return addLeadingZeros(date.getUTCFullYear(), 4).substr(2);
        },

        // Year: 1900, 1901, ..., 2099
        'YYYY': function YYYY(date) {
            return addLeadingZeros(date.getUTCFullYear(), 4);
        },

        // ISO week-numbering year: 00, 01, ..., 99
        'GG': function GG(date) {
            return String(getUTCISOWeekYear(date)).substr(2);
        },

        // ISO week-numbering year: 1900, 1901, ..., 2099
        'GGGG': function GGGG(date) {
            return getUTCISOWeekYear(date);
        },

        // Hour: 0, 1, ... 23
        'H': function H(date) {
            return date.getUTCHours();
        },

        // Hour: 00, 01, ..., 23
        'HH': function HH(date) {
            return addLeadingZeros(date.getUTCHours(), 2);
        },

        // Hour: 1, 2, ..., 12
        'h': function h(date) {
            var hours = date.getUTCHours();
            if (hours === 0) {
                return 12;
            } else if (hours > 12) {
                return hours % 12;
            } else {
                return hours;
            }
        },

        // Hour: 01, 02, ..., 12
        'hh': function hh(date) {
            return addLeadingZeros(formatters['h'](date), 2);
        },

        // Minute: 0, 1, ..., 59
        'm': function m(date) {
            return date.getUTCMinutes();
        },

        // Minute: 00, 01, ..., 59
        'mm': function mm(date) {
            return addLeadingZeros(date.getUTCMinutes(), 2);
        },

        // Second: 0, 1, ..., 59
        's': function s(date) {
            return date.getUTCSeconds();
        },

        // Second: 00, 01, ..., 59
        'ss': function ss(date) {
            return addLeadingZeros(date.getUTCSeconds(), 2);
        },

        // 1/10 of second: 0, 1, ..., 9
        'S': function S(date) {
            return Math.floor(date.getUTCMilliseconds() / 100);
        },

        // 1/100 of second: 00, 01, ..., 99
        'SS': function SS(date) {
            return addLeadingZeros(Math.floor(date.getUTCMilliseconds() / 10), 2);
        },

        // Millisecond: 000, 001, ..., 999
        'SSS': function SSS(date) {
            return addLeadingZeros(date.getUTCMilliseconds(), 3);
        },

        // Timezone: -01:00, +00:00, ... +12:00
        'Z': function Z(date, options) {
            var originalDate = options._originalDate || date;
            return formatTimezone(originalDate.getTimezoneOffset(), ':');
        },

        // Timezone: -0100, +0000, ... +1200
        'ZZ': function ZZ(date, options) {
            var originalDate = options._originalDate || date;
            return formatTimezone(originalDate.getTimezoneOffset());
        },

        // Seconds timestamp: 512969520
        'X': function X(date, options) {
            var originalDate = options._originalDate || date;
            return Math.floor(originalDate.getTime() / 1000);
        },

        // Milliseconds timestamp: 512969520900
        'x': function x(date, options) {
            var originalDate = options._originalDate || date;
            return originalDate.getTime();
        },

        // AM, PM
        'A': function A(date, options) {
            return options.locale.localize.timeOfDay(date.getUTCHours(), { type: 'uppercase' });
        },

        // am, pm
        'a': function a(date, options) {
            return options.locale.localize.timeOfDay(date.getUTCHours(), { type: 'lowercase' });
        },

        // a.m., p.m.
        'aa': function aa(date, options) {
            return options.locale.localize.timeOfDay(date.getUTCHours(), { type: 'long' });
        }
    };

    function formatTimezone(offset, delimeter) {
        delimeter = delimeter || '';
        var sign = offset > 0 ? '-' : '+';
        var absOffset = Math.abs(offset);
        var hours = Math.floor(absOffset / 60);
        var minutes = absOffset % 60;
        return sign + addLeadingZeros(hours, 2) + delimeter + addLeadingZeros(minutes, 2);
    }

    function addLeadingZeros(number, targetLength) {
        var output = Math.abs(number).toString();
        while (output.length < targetLength) {
            output = '0' + output;
        }
        return output;
    }

    // This function will be a part of public API when UTC function will be implemented.
    // See issue: https://github.com/date-fns/date-fns/issues/376
    function addUTCMinutes(dirtyDate, dirtyAmount, dirtyOptions) {
        var date = toDate(dirtyDate, dirtyOptions);
        var amount = Number(dirtyAmount);
        date.setUTCMinutes(date.getUTCMinutes() + amount);
        return date;
    }

    var longFormattingTokensRegExp = /(\[[^[]*])|(\\)?(LTS|LT|LLLL|LLL|LL|L|llll|lll|ll|l)/g;
    var defaultFormattingTokensRegExp = /(\[[^[]*])|(\\)?(x|ss|s|mm|m|hh|h|do|dddd|ddd|dd|d|aa|a|ZZ|Z|YYYY|YY|X|Wo|WW|W|SSS|SS|S|Qo|Q|Mo|MMMM|MMM|MM|M|HH|H|GGGG|GG|E|Do|DDDo|DDDD|DDD|DD|D|A|.)/g;

    /**
     * @name format
     * @category Common Helpers
     * @summary Format the date.
     *
     * @description
     * Return the formatted date string in the given format.
     *
     * Accepted tokens:
     * | Unit                    | Token | Result examples                  |
     * |-------------------------|-------|----------------------------------|
     * | Month                   | M     | 1, 2, ..., 12                    |
     * |                         | Mo    | 1st, 2nd, ..., 12th              |
     * |                         | MM    | 01, 02, ..., 12                  |
     * |                         | MMM   | Jan, Feb, ..., Dec               |
     * |                         | MMMM  | January, February, ..., December |
     * | Quarter                 | Q     | 1, 2, 3, 4                       |
     * |                         | Qo    | 1st, 2nd, 3rd, 4th               |
     * | Day of month            | D     | 1, 2, ..., 31                    |
     * |                         | Do    | 1st, 2nd, ..., 31st              |
     * |                         | DD    | 01, 02, ..., 31                  |
     * | Day of year             | DDD   | 1, 2, ..., 366                   |
     * |                         | DDDo  | 1st, 2nd, ..., 366th             |
     * |                         | DDDD  | 001, 002, ..., 366               |
     * | Day of week             | d     | 0, 1, ..., 6                     |
     * |                         | do    | 0th, 1st, ..., 6th               |
     * |                         | dd    | Su, Mo, ..., Sa                  |
     * |                         | ddd   | Sun, Mon, ..., Sat               |
     * |                         | dddd  | Sunday, Monday, ..., Saturday    |
     * | Day of ISO week         | E     | 1, 2, ..., 7                     |
     * | ISO week                | W     | 1, 2, ..., 53                    |
     * |                         | Wo    | 1st, 2nd, ..., 53rd              |
     * |                         | WW    | 01, 02, ..., 53                  |
     * | Year                    | YY    | 00, 01, ..., 99                  |
     * |                         | YYYY  | 1900, 1901, ..., 2099            |
     * | ISO week-numbering year | GG    | 00, 01, ..., 99                  |
     * |                         | GGGG  | 1900, 1901, ..., 2099            |
     * | AM/PM                   | A     | AM, PM                           |
     * |                         | a     | am, pm                           |
     * |                         | aa    | a.m., p.m.                       |
     * | Hour                    | H     | 0, 1, ... 23                     |
     * |                         | HH    | 00, 01, ... 23                   |
     * |                         | h     | 1, 2, ..., 12                    |
     * |                         | hh    | 01, 02, ..., 12                  |
     * | Minute                  | m     | 0, 1, ..., 59                    |
     * |                         | mm    | 00, 01, ..., 59                  |
     * | Second                  | s     | 0, 1, ..., 59                    |
     * |                         | ss    | 00, 01, ..., 59                  |
     * | 1/10 of second          | S     | 0, 1, ..., 9                     |
     * | 1/100 of second         | SS    | 00, 01, ..., 99                  |
     * | Millisecond             | SSS   | 000, 001, ..., 999               |
     * | Timezone                | Z     | -01:00, +00:00, ... +12:00       |
     * |                         | ZZ    | -0100, +0000, ..., +1200         |
     * | Seconds timestamp       | X     | 512969520                        |
     * | Milliseconds timestamp  | x     | 512969520900                     |
     * | Long format             | LT    | 05:30 a.m.                       |
     * |                         | LTS   | 05:30:15 a.m.                    |
     * |                         | L     | 07/02/1995                       |
     * |                         | l     | 7/2/1995                         |
     * |                         | LL    | July 2 1995                      |
     * |                         | ll    | Jul 2 1995                       |
     * |                         | LLL   | July 2 1995 05:30 a.m.           |
     * |                         | lll   | Jul 2 1995 05:30 a.m.            |
     * |                         | LLLL  | Sunday, July 2 1995 05:30 a.m.   |
     * |                         | llll  | Sun, Jul 2 1995 05:30 a.m.       |
     *
     * The characters wrapped in square brackets are escaped.
     *
     * The result may vary by locale.
     *
     * @param {Date|String|Number} date - the original date
     * @param {String} format - the string of tokens
     * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
     * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
     * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
     * @returns {String} the formatted date string
     * @throws {TypeError} 2 arguments required
     * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
     * @throws {RangeError} `options.locale` must contain `localize` property
     * @throws {RangeError} `options.locale` must contain `formatLong` property
     *
     * @example
     * // Represent 11 February 2014 in middle-endian format:
     * var result = format(
     *   new Date(2014, 1, 11),
     *   'MM/DD/YYYY'
     * )
     * //=> '02/11/2014'
     *
     * @example
     * // Represent 2 July 2014 in Esperanto:
     * import { eoLocale } from 'date-fns/locale/eo'
     * var result = format(
     *   new Date(2014, 6, 2),
     *   'Do [de] MMMM YYYY',
     *   {locale: eoLocale}
     * )
     * //=> '2-a de julio 2014'
     */
    function format(dirtyDate, dirtyFormatStr, dirtyOptions) {
        if (arguments.length < 2) {
            throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
        }

        var formatStr = String(dirtyFormatStr);
        var options = dirtyOptions || {};

        var locale$$1 = options.locale || locale;

        if (!locale$$1.localize) {
            throw new RangeError('locale must contain localize property');
        }

        if (!locale$$1.formatLong) {
            throw new RangeError('locale must contain formatLong property');
        }

        var localeFormatters = locale$$1.formatters || {};
        var formattingTokensRegExp = locale$$1.formattingTokensRegExp || defaultFormattingTokensRegExp;
        var formatLong = locale$$1.formatLong;

        var originalDate = toDate(dirtyDate, options);

        if (!isValid(originalDate, options)) {
            return 'Invalid Date';
        }

        // Convert the date in system timezone to the same date in UTC+00:00 timezone.
        // This ensures that when UTC functions will be implemented, locales will be compatible with them.
        // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/376
        var timezoneOffset = originalDate.getTimezoneOffset();
        var utcDate = addUTCMinutes(originalDate, -timezoneOffset, options);

        var formatterOptions = cloneObject(options);
        formatterOptions.locale = locale$$1;
        formatterOptions.formatters = formatters;

        // When UTC functions will be implemented, options._originalDate will likely be a part of public API.
        // Right now, please don't use it in locales. If you have to use an original date,
        // please restore it from `date`, adding a timezone offset to it.
        formatterOptions._originalDate = originalDate;

        var result = formatStr.replace(longFormattingTokensRegExp, function (substring) {
            if (substring[0] === '[') {
                return substring;
            }

            if (substring[0] === '\\') {
                return cleanEscapedString(substring);
            }

            return formatLong(substring);
        }).replace(formattingTokensRegExp, function (substring) {
            var formatter = localeFormatters[substring] || formatters[substring];

            if (formatter) {
                return formatter(utcDate, formatterOptions);
            } else {
                return cleanEscapedString(substring);
            }
        });

        return result;
    }

    function cleanEscapedString(input) {
        if (input.match(/\[[\s\S]/)) {
            return input.replace(/^\[|]$/g, '');
        }
        return input.replace(/\\/g, '');
    }

    /**
     * @name subMinutes
     * @category Minute Helpers
     * @summary Subtract the specified number of minutes from the given date.
     *
     * @description
     * Subtract the specified number of minutes from the given date.
     *
     * @param {Date|String|Number} date - the date to be changed
     * @param {Number} amount - the amount of minutes to be subtracted
     * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
     * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
     * @returns {Date} the new date with the mintues subtracted
     * @throws {TypeError} 2 arguments required
     * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
     *
     * @example
     * // Subtract 30 minutes from 10 July 2014 12:00:00:
     * var result = subMinutes(new Date(2014, 6, 10, 12, 0), 30)
     * //=> Thu Jul 10 2014 11:30:00
     */
    function subMinutes(dirtyDate, dirtyAmount, dirtyOptions) {
        if (arguments.length < 2) {
            throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
        }

        var amount = Number(dirtyAmount);
        return addMinutes(dirtyDate, -amount, dirtyOptions);
    }

    /**
     * @name isAfter
     * @category Common Helpers
     * @summary Is the first date after the second one?
     *
     * @description
     * Is the first date after the second one?
     *
     * @param {Date|String|Number} date - the date that should be after the other one to return true
     * @param {Date|String|Number} dateToCompare - the date to compare with
     * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
     * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
     * @returns {Boolean} the first date is after the second date
     * @throws {TypeError} 2 arguments required
     * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
     *
     * @example
     * // Is 10 July 1989 after 11 February 1987?
     * var result = isAfter(new Date(1989, 6, 10), new Date(1987, 1, 11))
     * //=> true
     */
    function isAfter(dirtyDate, dirtyDateToCompare, dirtyOptions) {
        if (arguments.length < 2) {
            throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
        }

        var date = toDate(dirtyDate, dirtyOptions);
        var dateToCompare = toDate(dirtyDateToCompare, dirtyOptions);
        return date.getTime() > dateToCompare.getTime();
    }

    /**
     * @name isBefore
     * @category Common Helpers
     * @summary Is the first date before the second one?
     *
     * @description
     * Is the first date before the second one?
     *
     * @param {Date|String|Number} date - the date that should be before the other one to return true
     * @param {Date|String|Number} dateToCompare - the date to compare with
     * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
     * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
     * @returns {Boolean} the first date is before the second date
     * @throws {TypeError} 2 arguments required
     * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
     *
     * @example
     * // Is 10 July 1989 before 11 February 1987?
     * var result = isBefore(new Date(1989, 6, 10), new Date(1987, 1, 11))
     * //=> false
     */
    function isBefore(dirtyDate, dirtyDateToCompare, dirtyOptions) {
        if (arguments.length < 2) {
            throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
        }

        var date = toDate(dirtyDate, dirtyOptions);
        var dateToCompare = toDate(dirtyDateToCompare, dirtyOptions);
        return date.getTime() < dateToCompare.getTime();
    }

    /**
     * @name isEqual
     * @category Common Helpers
     * @summary Are the given dates equal?
     *
     * @description
     * Are the given dates equal?
     *
     * @param {Date|String|Number} dateLeft - the first date to compare
     * @param {Date|String|Number} dateRight - the second date to compare
     * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
     * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
     * @returns {Boolean} the dates are equal
     * @throws {TypeError} 2 arguments required
     * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
     *
     * @example
     * // Are 2 July 2014 06:30:45.000 and 2 July 2014 06:30:45.500 equal?
     * var result = isEqual(
     *   new Date(2014, 6, 2, 6, 30, 45, 0)
     *   new Date(2014, 6, 2, 6, 30, 45, 500)
     * )
     * //=> false
     */
    function isEqual(dirtyLeftDate, dirtyRightDate, dirtyOptions) {
        if (arguments.length < 2) {
            throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
        }

        var dateLeft = toDate(dirtyLeftDate, dirtyOptions);
        var dateRight = toDate(dirtyRightDate, dirtyOptions);
        return dateLeft.getTime() === dateRight.getTime();
    }

    var patterns$1 = {
        'M': /^(1[0-2]|0?\d)/, // 0 to 12
        'D': /^(3[0-1]|[0-2]?\d)/, // 0 to 31
        'DDD': /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/, // 0 to 366
        'W': /^(5[0-3]|[0-4]?\d)/, // 0 to 53
        'YYYY': /^(\d{1,4})/, // 0 to 9999
        'H': /^(2[0-3]|[0-1]?\d)/, // 0 to 23
        'm': /^([0-5]?\d)/, // 0 to 59
        'Z': /^([+-])(\d{2}):(\d{2})/,
        'ZZ': /^([+-])(\d{2})(\d{2})/,
        singleDigit: /^(\d)/,
        twoDigits: /^(\d{2})/,
        threeDigits: /^(\d{3})/,
        fourDigits: /^(\d{4})/,
        anyDigits: /^(\d+)/
    };

    function parseDecimal$1(matchResult) {
        return parseInt(matchResult[1], 10);
    }

    var parsers = {
        // Year: 00, 01, ..., 99
        'YY': {
            unit: 'twoDigitYear',
            match: patterns$1.twoDigits,
            parse: function parse(matchResult) {
                return parseDecimal$1(matchResult);
            }
        },

        // Year: 1900, 1901, ..., 2099
        'YYYY': {
            unit: 'year',
            match: patterns$1.YYYY,
            parse: parseDecimal$1
        },

        // ISO week-numbering year: 00, 01, ..., 99
        'GG': {
            unit: 'isoYear',
            match: patterns$1.twoDigits,
            parse: function parse(matchResult) {
                return parseDecimal$1(matchResult) + 1900;
            }
        },

        // ISO week-numbering year: 1900, 1901, ..., 2099
        'GGGG': {
            unit: 'isoYear',
            match: patterns$1.YYYY,
            parse: parseDecimal$1
        },

        // Quarter: 1, 2, 3, 4
        'Q': {
            unit: 'quarter',
            match: patterns$1.singleDigit,
            parse: parseDecimal$1
        },

        // Ordinal quarter
        'Qo': {
            unit: 'quarter',
            match: function match(string, options) {
                return options.locale.match.ordinalNumbers(string, { unit: 'quarter' });
            },
            parse: function parse(matchResult, options) {
                return options.locale.match.ordinalNumber(matchResult, { unit: 'quarter' });
            }
        },

        // Month: 1, 2, ..., 12
        'M': {
            unit: 'month',
            match: patterns$1.M,
            parse: function parse(matchResult) {
                return parseDecimal$1(matchResult) - 1;
            }
        },

        // Ordinal month
        'Mo': {
            unit: 'month',
            match: function match(string, options) {
                return options.locale.match.ordinalNumbers(string, { unit: 'month' });
            },
            parse: function parse(matchResult, options) {
                return options.locale.match.ordinalNumber(matchResult, { unit: 'month' }) - 1;
            }
        },

        // Month: 01, 02, ..., 12
        'MM': {
            unit: 'month',
            match: patterns$1.twoDigits,
            parse: function parse(matchResult) {
                return parseDecimal$1(matchResult) - 1;
            }
        },

        // Month: Jan, Feb, ..., Dec
        'MMM': {
            unit: 'month',
            match: function match(string, options) {
                return options.locale.match.months(string, { type: 'short' });
            },
            parse: function parse(matchResult, options) {
                return options.locale.match.month(matchResult, { type: 'short' });
            }
        },

        // Month: January, February, ..., December
        'MMMM': {
            unit: 'month',
            match: function match(string, options) {
                return options.locale.match.months(string, { type: 'long' }) || options.locale.match.months(string, { type: 'short' });
            },
            parse: function parse(matchResult, options) {
                var parseResult = options.locale.match.month(matchResult, { type: 'long' });

                if (parseResult == null) {
                    parseResult = options.locale.match.month(matchResult, { type: 'short' });
                }

                return parseResult;
            }
        },

        // ISO week: 1, 2, ..., 53
        'W': {
            unit: 'isoWeek',
            match: patterns$1.W,
            parse: parseDecimal$1
        },

        // Ordinal ISO week
        'Wo': {
            unit: 'isoWeek',
            match: function match(string, options) {
                return options.locale.match.ordinalNumbers(string, { unit: 'isoWeek' });
            },
            parse: function parse(matchResult, options) {
                return options.locale.match.ordinalNumber(matchResult, { unit: 'isoWeek' });
            }
        },

        // ISO week: 01, 02, ..., 53
        'WW': {
            unit: 'isoWeek',
            match: patterns$1.twoDigits,
            parse: parseDecimal$1
        },

        // Day of week: 0, 1, ..., 6
        'd': {
            unit: 'dayOfWeek',
            match: patterns$1.singleDigit,
            parse: parseDecimal$1
        },

        // Ordinal day of week
        'do': {
            unit: 'dayOfWeek',
            match: function match(string, options) {
                return options.locale.match.ordinalNumbers(string, { unit: 'dayOfWeek' });
            },
            parse: function parse(matchResult, options) {
                return options.locale.match.ordinalNumber(matchResult, { unit: 'dayOfWeek' });
            }
        },

        // Day of week: Su, Mo, ..., Sa
        'dd': {
            unit: 'dayOfWeek',
            match: function match(string, options) {
                return options.locale.match.weekdays(string, { type: 'narrow' });
            },
            parse: function parse(matchResult, options) {
                return options.locale.match.weekday(matchResult, { type: 'narrow' });
            }
        },

        // Day of week: Sun, Mon, ..., Sat
        'ddd': {
            unit: 'dayOfWeek',
            match: function match(string, options) {
                return options.locale.match.weekdays(string, { type: 'short' }) || options.locale.match.weekdays(string, { type: 'narrow' });
            },
            parse: function parse(matchResult, options) {
                var parseResult = options.locale.match.weekday(matchResult, { type: 'short' });

                if (parseResult == null) {
                    parseResult = options.locale.match.weekday(matchResult, { type: 'narrow' });
                }

                return parseResult;
            }
        },

        // Day of week: Sunday, Monday, ..., Saturday
        'dddd': {
            unit: 'dayOfWeek',
            match: function match(string, options) {
                return options.locale.match.weekdays(string, { type: 'long' }) || options.locale.match.weekdays(string, { type: 'short' }) || options.locale.match.weekdays(string, { type: 'narrow' });
            },
            parse: function parse(matchResult, options) {
                var parseResult = options.locale.match.weekday(matchResult, { type: 'long' });

                if (parseResult == null) {
                    parseResult = options.locale.match.weekday(matchResult, { type: 'short' });

                    if (parseResult == null) {
                        parseResult = options.locale.match.weekday(matchResult, { type: 'narrow' });
                    }
                }

                return parseResult;
            }
        },

        // Day of ISO week: 1, 2, ..., 7
        'E': {
            unit: 'dayOfISOWeek',
            match: patterns$1.singleDigit,
            parse: function parse(matchResult) {
                return parseDecimal$1(matchResult);
            }
        },

        // Day of month: 1, 2, ..., 31
        'D': {
            unit: 'dayOfMonth',
            match: patterns$1.D,
            parse: parseDecimal$1
        },

        // Ordinal day of month
        'Do': {
            unit: 'dayOfMonth',
            match: function match(string, options) {
                return options.locale.match.ordinalNumbers(string, { unit: 'dayOfMonth' });
            },
            parse: function parse(matchResult, options) {
                return options.locale.match.ordinalNumber(matchResult, { unit: 'dayOfMonth' });
            }
        },

        // Day of month: 01, 02, ..., 31
        'DD': {
            unit: 'dayOfMonth',
            match: patterns$1.twoDigits,
            parse: parseDecimal$1
        },

        // Day of year: 1, 2, ..., 366
        'DDD': {
            unit: 'dayOfYear',
            match: patterns$1.DDD,
            parse: parseDecimal$1
        },

        // Ordinal day of year
        'DDDo': {
            unit: 'dayOfYear',
            match: function match(string, options) {
                return options.locale.match.ordinalNumbers(string, { unit: 'dayOfYear' });
            },
            parse: function parse(matchResult, options) {
                return options.locale.match.ordinalNumber(matchResult, { unit: 'dayOfYear' });
            }
        },

        // Day of year: 001, 002, ..., 366
        'DDDD': {
            unit: 'dayOfYear',
            match: patterns$1.threeDigits,
            parse: parseDecimal$1
        },

        // AM, PM
        'A': {
            unit: 'timeOfDay',
            match: function match(string, options) {
                return options.locale.match.timesOfDay(string, { type: 'short' });
            },
            parse: function parse(matchResult, options) {
                return options.locale.match.timeOfDay(matchResult, { type: 'short' });
            }
        },

        // a.m., p.m.
        'aa': {
            unit: 'timeOfDay',
            match: function match(string, options) {
                return options.locale.match.timesOfDay(string, { type: 'long' }) || options.locale.match.timesOfDay(string, { type: 'short' });
            },
            parse: function parse(matchResult, options) {
                var parseResult = options.locale.match.timeOfDay(matchResult, { type: 'long' });

                if (parseResult == null) {
                    parseResult = options.locale.match.timeOfDay(matchResult, { type: 'short' });
                }

                return parseResult;
            }
        },

        // Hour: 0, 1, ... 23
        'H': {
            unit: 'hours',
            match: patterns$1.H,
            parse: parseDecimal$1
        },

        // Hour: 00, 01, ..., 23
        'HH': {
            unit: 'hours',
            match: patterns$1.twoDigits,
            parse: parseDecimal$1
        },

        // Hour: 1, 2, ..., 12
        'h': {
            unit: 'timeOfDayHours',
            match: patterns$1.M,
            parse: parseDecimal$1
        },

        // Hour: 01, 02, ..., 12
        'hh': {
            unit: 'timeOfDayHours',
            match: patterns$1.twoDigits,
            parse: parseDecimal$1
        },

        // Minute: 0, 1, ..., 59
        'm': {
            unit: 'minutes',
            match: patterns$1.m,
            parse: parseDecimal$1
        },

        // Minute: 00, 01, ..., 59
        'mm': {
            unit: 'minutes',
            match: patterns$1.twoDigits,
            parse: parseDecimal$1
        },

        // Second: 0, 1, ..., 59
        's': {
            unit: 'seconds',
            match: patterns$1.m,
            parse: parseDecimal$1
        },

        // Second: 00, 01, ..., 59
        'ss': {
            unit: 'seconds',
            match: patterns$1.twoDigits,
            parse: parseDecimal$1
        },

        // 1/10 of second: 0, 1, ..., 9
        'S': {
            unit: 'milliseconds',
            match: patterns$1.singleDigit,
            parse: function parse(matchResult) {
                return parseDecimal$1(matchResult) * 100;
            }
        },

        // 1/100 of second: 00, 01, ..., 99
        'SS': {
            unit: 'milliseconds',
            match: patterns$1.twoDigits,
            parse: function parse(matchResult) {
                return parseDecimal$1(matchResult) * 10;
            }
        },

        // Millisecond: 000, 001, ..., 999
        'SSS': {
            unit: 'milliseconds',
            match: patterns$1.threeDigits,
            parse: parseDecimal$1
        },

        // Timezone: -01:00, +00:00, ... +12:00
        'Z': {
            unit: 'timezone',
            match: patterns$1.Z,
            parse: function parse(matchResult) {
                var sign = matchResult[1];
                var hours = parseInt(matchResult[2], 10);
                var minutes = parseInt(matchResult[3], 10);
                var absoluteOffset = hours * 60 + minutes;
                return sign === '+' ? absoluteOffset : -absoluteOffset;
            }
        },

        // Timezone: -0100, +0000, ... +1200
        'ZZ': {
            unit: 'timezone',
            match: patterns$1.ZZ,
            parse: function parse(matchResult) {
                var sign = matchResult[1];
                var hours = parseInt(matchResult[2], 10);
                var minutes = parseInt(matchResult[3], 10);
                var absoluteOffset = hours * 60 + minutes;
                return sign === '+' ? absoluteOffset : -absoluteOffset;
            }
        },

        // Seconds timestamp: 512969520
        'X': {
            unit: 'timestamp',
            match: patterns$1.anyDigits,
            parse: function parse(matchResult) {
                return parseDecimal$1(matchResult) * 1000;
            }
        },

        // Milliseconds timestamp: 512969520900
        'x': {
            unit: 'timestamp',
            match: patterns$1.anyDigits,
            parse: parseDecimal$1
        }
    };

    parsers['a'] = parsers['A'];

    // This function will be a part of public API when UTC function will be implemented.
    // See issue: https://github.com/date-fns/date-fns/issues/376
    function setUTCDay(dirtyDate, dirtyDay, dirtyOptions) {
        var options = dirtyOptions || {};
        var locale = options.locale;
        var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
        var defaultWeekStartsOn = localeWeekStartsOn === undefined ? 0 : Number(localeWeekStartsOn);
        var weekStartsOn = options.weekStartsOn === undefined ? defaultWeekStartsOn : Number(options.weekStartsOn);

        // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
        if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
            throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
        }

        var date = toDate(dirtyDate, dirtyOptions);
        var day = Number(dirtyDay);

        var currentDay = date.getUTCDay();

        var remainder = day % 7;
        var dayIndex = (remainder + 7) % 7;

        var diff = (dayIndex < weekStartsOn ? 7 : 0) + day - currentDay;

        date.setUTCDate(date.getUTCDate() + diff);
        return date;
    }

    // This function will be a part of public API when UTC function will be implemented.
    // See issue: https://github.com/date-fns/date-fns/issues/376
    function setUTCISODay(dirtyDate, dirtyDay, dirtyOptions) {
        var day = Number(dirtyDay);

        if (day % 7 === 0) {
            day = day - 7;
        }

        var weekStartsOn = 1;
        var date = toDate(dirtyDate, dirtyOptions);
        var currentDay = date.getUTCDay();

        var remainder = day % 7;
        var dayIndex = (remainder + 7) % 7;

        var diff = (dayIndex < weekStartsOn ? 7 : 0) + day - currentDay;

        date.setUTCDate(date.getUTCDate() + diff);
        return date;
    }

    // This function will be a part of public API when UTC function will be implemented.
    // See issue: https://github.com/date-fns/date-fns/issues/376
    function setUTCISOWeek(dirtyDate, dirtyISOWeek, dirtyOptions) {
        var date = toDate(dirtyDate, dirtyOptions);
        var isoWeek = Number(dirtyISOWeek);
        var diff = getUTCISOWeek(date, dirtyOptions) - isoWeek;
        date.setUTCDate(date.getUTCDate() - diff * 7);
        return date;
    }

    var MILLISECONDS_IN_DAY$3 = 86400000;

    // This function will be a part of public API when UTC function will be implemented.
    // See issue: https://github.com/date-fns/date-fns/issues/376
    function setUTCISOWeekYear(dirtyDate, dirtyISOYear, dirtyOptions) {
        var date = toDate(dirtyDate, dirtyOptions);
        var isoYear = Number(dirtyISOYear);
        var dateStartOfYear = startOfUTCISOWeekYear(date, dirtyOptions);
        var diff = Math.floor((date.getTime() - dateStartOfYear.getTime()) / MILLISECONDS_IN_DAY$3);
        var fourthOfJanuary = new Date(0);
        fourthOfJanuary.setUTCFullYear(isoYear, 0, 4);
        fourthOfJanuary.setUTCHours(0, 0, 0, 0);
        date = startOfUTCISOWeekYear(fourthOfJanuary, dirtyOptions);
        date.setUTCDate(date.getUTCDate() + diff);
        return date;
    }

    var MILLISECONDS_IN_MINUTE$7 = 60000;

    function setTimeOfDay(hours, timeOfDay) {
        var isAM = timeOfDay === 0;

        if (isAM) {
            if (hours === 12) {
                return 0;
            }
        } else {
            if (hours !== 12) {
                return 12 + hours;
            }
        }

        return hours;
    }

    var units = {
        twoDigitYear: {
            priority: 10,
            set: function set(dateValues, value) {
                var century = Math.floor(dateValues.date.getUTCFullYear() / 100);
                var year = century * 100 + value;
                dateValues.date.setUTCFullYear(year, 0, 1);
                dateValues.date.setUTCHours(0, 0, 0, 0);
                return dateValues;
            }
        },

        year: {
            priority: 10,
            set: function set(dateValues, value) {
                dateValues.date.setUTCFullYear(value, 0, 1);
                dateValues.date.setUTCHours(0, 0, 0, 0);
                return dateValues;
            }
        },

        isoYear: {
            priority: 10,
            set: function set(dateValues, value, options) {
                dateValues.date = startOfUTCISOWeekYear(setUTCISOWeekYear(dateValues.date, value, options), options);
                return dateValues;
            }
        },

        quarter: {
            priority: 20,
            set: function set(dateValues, value) {
                dateValues.date.setUTCMonth((value - 1) * 3, 1);
                dateValues.date.setUTCHours(0, 0, 0, 0);
                return dateValues;
            }
        },

        month: {
            priority: 30,
            set: function set(dateValues, value) {
                dateValues.date.setUTCMonth(value, 1);
                dateValues.date.setUTCHours(0, 0, 0, 0);
                return dateValues;
            }
        },

        isoWeek: {
            priority: 40,
            set: function set(dateValues, value, options) {
                dateValues.date = startOfUTCISOWeek(setUTCISOWeek(dateValues.date, value, options), options);
                return dateValues;
            }
        },

        dayOfWeek: {
            priority: 50,
            set: function set(dateValues, value, options) {
                dateValues.date = setUTCDay(dateValues.date, value, options);
                dateValues.date.setUTCHours(0, 0, 0, 0);
                return dateValues;
            }
        },

        dayOfISOWeek: {
            priority: 50,
            set: function set(dateValues, value, options) {
                dateValues.date = setUTCISODay(dateValues.date, value, options);
                dateValues.date.setUTCHours(0, 0, 0, 0);
                return dateValues;
            }
        },

        dayOfMonth: {
            priority: 50,
            set: function set(dateValues, value) {
                dateValues.date.setUTCDate(value);
                dateValues.date.setUTCHours(0, 0, 0, 0);
                return dateValues;
            }
        },

        dayOfYear: {
            priority: 50,
            set: function set(dateValues, value) {
                dateValues.date.setUTCMonth(0, value);
                dateValues.date.setUTCHours(0, 0, 0, 0);
                return dateValues;
            }
        },

        timeOfDay: {
            priority: 60,
            set: function set(dateValues, value, options) {
                dateValues.timeOfDay = value;
                return dateValues;
            }
        },

        hours: {
            priority: 70,
            set: function set(dateValues, value, options) {
                dateValues.date.setUTCHours(value, 0, 0, 0);
                return dateValues;
            }
        },

        timeOfDayHours: {
            priority: 70,
            set: function set(dateValues, value, options) {
                var timeOfDay = dateValues.timeOfDay;
                if (timeOfDay != null) {
                    value = setTimeOfDay(value, timeOfDay);
                }
                dateValues.date.setUTCHours(value, 0, 0, 0);
                return dateValues;
            }
        },

        minutes: {
            priority: 80,
            set: function set(dateValues, value) {
                dateValues.date.setUTCMinutes(value, 0, 0);
                return dateValues;
            }
        },

        seconds: {
            priority: 90,
            set: function set(dateValues, value) {
                dateValues.date.setUTCSeconds(value, 0);
                return dateValues;
            }
        },

        milliseconds: {
            priority: 100,
            set: function set(dateValues, value) {
                dateValues.date.setUTCMilliseconds(value);
                return dateValues;
            }
        },

        timezone: {
            priority: 110,
            set: function set(dateValues, value) {
                dateValues.date = new Date(dateValues.date.getTime() - value * MILLISECONDS_IN_MINUTE$7);
                return dateValues;
            }
        },

        timestamp: {
            priority: 120,
            set: function set(dateValues, value) {
                dateValues.date = new Date(value);
                return dateValues;
            }
        }
    };

    var TIMEZONE_UNIT_PRIORITY = 110;
    var MILLISECONDS_IN_MINUTE$6 = 60000;

    var longFormattingTokensRegExp$1 = /(\[[^[]*])|(\\)?(LTS|LT|LLLL|LLL|LL|L|llll|lll|ll|l)/g;
    var defaultParsingTokensRegExp = /(\[[^[]*])|(\\)?(x|ss|s|mm|m|hh|h|do|dddd|ddd|dd|d|aa|a|ZZ|Z|YYYY|YY|X|Wo|WW|W|SSS|SS|S|Qo|Q|Mo|MMMM|MMM|MM|M|HH|H|GGGG|GG|E|Do|DDDo|DDDD|DDD|DD|D|A|.)/g;

    /**
     * @name parse
     * @category Common Helpers
     * @summary Parse the date.
     *
     * @description
     * Return the date parsed from string using the given format.
     *
     * Accepted format tokens:
     * | Unit                    | Priority | Token | Input examples                   |
     * |-------------------------|----------|-------|----------------------------------|
     * | Year                    | 10       | YY    | 00, 01, ..., 99                  |
     * |                         |          | YYYY  | 1900, 1901, ..., 2099            |
     * | ISO week-numbering year | 10       | GG    | 00, 01, ..., 99                  |
     * |                         |          | GGGG  | 1900, 1901, ..., 2099            |
     * | Quarter                 | 20       | Q     | 1, 2, 3, 4                       |
     * |                         |          | Qo    | 1st, 2nd, 3rd, 4th               |
     * | Month                   | 30       | M     | 1, 2, ..., 12                    |
     * |                         |          | Mo    | 1st, 2nd, ..., 12th              |
     * |                         |          | MM    | 01, 02, ..., 12                  |
     * |                         |          | MMM   | Jan, Feb, ..., Dec               |
     * |                         |          | MMMM  | January, February, ..., December |
     * | ISO week                | 40       | W     | 1, 2, ..., 53                    |
     * |                         |          | Wo    | 1st, 2nd, ..., 53rd              |
     * |                         |          | WW    | 01, 02, ..., 53                  |
     * | Day of week             | 50       | d     | 0, 1, ..., 6                     |
     * |                         |          | do    | 0th, 1st, ..., 6th               |
     * |                         |          | dd    | Su, Mo, ..., Sa                  |
     * |                         |          | ddd   | Sun, Mon, ..., Sat               |
     * |                         |          | dddd  | Sunday, Monday, ..., Saturday    |
     * | Day of ISO week         | 50       | E     | 1, 2, ..., 7                     |
     * | Day of month            | 50       | D     | 1, 2, ..., 31                    |
     * |                         |          | Do    | 1st, 2nd, ..., 31st              |
     * |                         |          | DD    | 01, 02, ..., 31                  |
     * | Day of year             | 50       | DDD   | 1, 2, ..., 366                   |
     * |                         |          | DDDo  | 1st, 2nd, ..., 366th             |
     * |                         |          | DDDD  | 001, 002, ..., 366               |
     * | Time of day             | 60       | A     | AM, PM                           |
     * |                         |          | a     | am, pm                           |
     * |                         |          | aa    | a.m., p.m.                       |
     * | Hour                    | 70       | H     | 0, 1, ... 23                     |
     * |                         |          | HH    | 00, 01, ... 23                   |
     * | Time of day hour        | 70       | h     | 1, 2, ..., 12                    |
     * |                         |          | hh    | 01, 02, ..., 12                  |
     * | Minute                  | 80       | m     | 0, 1, ..., 59                    |
     * |                         |          | mm    | 00, 01, ..., 59                  |
     * | Second                  | 90       | s     | 0, 1, ..., 59                    |
     * |                         |          | ss    | 00, 01, ..., 59                  |
     * | 1/10 of second          | 100      | S     | 0, 1, ..., 9                     |
     * | 1/100 of second         | 100      | SS    | 00, 01, ..., 99                  |
     * | Millisecond             | 100      | SSS   | 000, 001, ..., 999               |
     * | Timezone                | 110      | Z     | -01:00, +00:00, ... +12:00       |
     * |                         |          | ZZ    | -0100, +0000, ..., +1200         |
     * | Seconds timestamp       | 120      | X     | 512969520                        |
     * | Milliseconds timestamp  | 120      | x     | 512969520900                     |
     *
     * Values will be assigned to the date in the ascending order of its unit's priority.
     * Units of an equal priority overwrite each other in the order of appearance.
     *
     * If no values of higher priority are parsed (e.g. when parsing string 'January 1st' without a year),
     * the values will be taken from 3rd argument `baseDate` which works as a context of parsing.
     *
     * `baseDate` must be passed for correct work of the function.
     * If you're not sure which `baseDate` to supply, create a new instance of Date:
     * `parse('02/11/2014', 'MM/DD/YYYY', new Date())`
     * In this case parsing will be done in the context of the current date.
     * If `baseDate` is `Invalid Date` or a value not convertible to valid `Date`,
     * then `Invalid Date` will be returned.
     *
     * Also, `parse` unfolds long formats like those in [format]{@link https://date-fns.org/docs/format}:
     * | Token | Input examples                 |
     * |-------|--------------------------------|
     * | LT    | 05:30 a.m.                     |
     * | LTS   | 05:30:15 a.m.                  |
     * | L     | 07/02/1995                     |
     * | l     | 7/2/1995                       |
     * | LL    | July 2 1995                    |
     * | ll    | Jul 2 1995                     |
     * | LLL   | July 2 1995 05:30 a.m.         |
     * | lll   | Jul 2 1995 05:30 a.m.          |
     * | LLLL  | Sunday, July 2 1995 05:30 a.m. |
     * | llll  | Sun, Jul 2 1995 05:30 a.m.     |
     *
     * The characters wrapped in square brackets in the format string are escaped.
     *
     * The result may vary by locale.
     *
     * If `formatString` matches with `dateString` but does not provides tokens, `baseDate` will be returned.
     *
     * If parsing failed, `Invalid Date` will be returned.
     * Invalid Date is a Date, whose time value is NaN.
     * Time value of Date: http://es5.github.io/#x15.9.1.1
     *
     * @param {String} dateString - the string to parse
     * @param {String} formatString - the string of tokens
     * @param {Date|String|Number} baseDate - the date to took the missing higher priority values from
     * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
     * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
     * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
     * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
     * @returns {Date} the parsed date
     * @throws {TypeError} 3 arguments required
     * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
     * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
     * @throws {RangeError} `options.locale` must contain `match` property
     * @throws {RangeError} `options.locale` must contain `formatLong` property
     *
     * @example
     * // Parse 11 February 2014 from middle-endian format:
     * var result = parse(
     *   '02/11/2014',
     *   'MM/DD/YYYY',
     *   new Date()
     * )
     * //=> Tue Feb 11 2014 00:00:00
     *
     * @example
     * // Parse 28th of February in English locale in the context of 2010 year:
     * import eoLocale from 'date-fns/locale/eo'
     * var result = parse(
     *   '28-a de februaro',
     *   'Do [de] MMMM',
     *   new Date(2010, 0, 1)
     *   {locale: eoLocale}
     * )
     * //=> Sun Feb 28 2010 00:00:00
     */
    function parse(dirtyDateString, dirtyFormatString, dirtyBaseDate, dirtyOptions) {
        if (arguments.length < 3) {
            throw new TypeError('3 arguments required, but only ' + arguments.length + ' present');
        }

        var dateString = String(dirtyDateString);
        var options = dirtyOptions || {};

        var weekStartsOn = options.weekStartsOn === undefined ? 0 : Number(options.weekStartsOn);

        // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
        if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
            throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
        }

        var locale$$1 = options.locale || locale;
        var localeParsers = locale$$1.parsers || {};
        var localeUnits = locale$$1.units || {};

        if (!locale$$1.match) {
            throw new RangeError('locale must contain match property');
        }

        if (!locale$$1.formatLong) {
            throw new RangeError('locale must contain formatLong property');
        }

        var formatString = String(dirtyFormatString).replace(longFormattingTokensRegExp$1, function (substring) {
            if (substring[0] === '[') {
                return substring;
            }

            if (substring[0] === '\\') {
                return cleanEscapedString$1(substring);
            }

            return locale$$1.formatLong(substring);
        });

        if (formatString === '') {
            if (dateString === '') {
                return toDate(dirtyBaseDate, options);
            } else {
                return new Date(NaN);
            }
        }

        var subFnOptions = cloneObject(options);
        subFnOptions.locale = locale$$1;

        var tokens = formatString.match(locale$$1.parsingTokensRegExp || defaultParsingTokensRegExp);
        var tokensLength = tokens.length;

        // If timezone isn't specified, it will be set to the system timezone
        var setters = [{
            priority: TIMEZONE_UNIT_PRIORITY,
            set: dateToSystemTimezone,
            index: 0
        }];

        var i;
        for (i = 0; i < tokensLength; i++) {
            var token = tokens[i];
            var parser = localeParsers[token] || parsers[token];
            if (parser) {
                var matchResult;

                if (parser.match instanceof RegExp) {
                    matchResult = parser.match.exec(dateString);
                } else {
                    matchResult = parser.match(dateString, subFnOptions);
                }

                if (!matchResult) {
                    return new Date(NaN);
                }

                var unitName = parser.unit;
                var unit = localeUnits[unitName] || units[unitName];

                setters.push({
                    priority: unit.priority,
                    set: unit.set,
                    value: parser.parse(matchResult, subFnOptions),
                    index: setters.length
                });

                var substring = matchResult[0];
                dateString = dateString.slice(substring.length);
            } else {
                var head = tokens[i].match(/^\[.*]$/) ? tokens[i].replace(/^\[|]$/g, '') : tokens[i];
                if (dateString.indexOf(head) === 0) {
                    dateString = dateString.slice(head.length);
                } else {
                    return new Date(NaN);
                }
            }
        }

        var uniquePrioritySetters = setters.map(function (setter) {
            return setter.priority;
        }).sort(function (a, b) {
            return a - b;
        }).filter(function (priority, index, array) {
            return array.indexOf(priority) === index;
        }).map(function (priority) {
            return setters.filter(function (setter) {
                return setter.priority === priority;
            }).reverse();
        }).map(function (setterArray) {
            return setterArray[0];
        });

        var date = toDate(dirtyBaseDate, options);

        if (isNaN(date)) {
            return new Date(NaN);
        }

        // Convert the date in system timezone to the same date in UTC+00:00 timezone.
        // This ensures that when UTC functions will be implemented, locales will be compatible with them.
        // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/37
        var utcDate = subMinutes(date, date.getTimezoneOffset());

        var dateValues = { date: utcDate };

        var settersLength = uniquePrioritySetters.length;
        for (i = 0; i < settersLength; i++) {
            var setter = uniquePrioritySetters[i];
            dateValues = setter.set(dateValues, setter.value, subFnOptions);
        }

        return dateValues.date;
    }

    function dateToSystemTimezone(dateValues) {
        var date = dateValues.date;
        var time = date.getTime();

        // Get the system timezone offset at (moment of time - offset)
        var offset = date.getTimezoneOffset();

        // Get the system timezone offset at the exact moment of time
        offset = new Date(time + offset * MILLISECONDS_IN_MINUTE$6).getTimezoneOffset();

        // Convert date in timezone "UTC+00:00" to the system timezone
        dateValues.date = new Date(time + offset * MILLISECONDS_IN_MINUTE$6);

        return dateValues;
    }

    function cleanEscapedString$1(input) {
        if (input.match(/\[[\s\S]/)) {
            return input.replace(/^\[|]$/g, '');
        }
        return input.replace(/\\/g, '');
    }

    // This file is generated automatically by `scripts/build/indices.js`. Please, don't change it.

    //

    /**
     * Custom parse behavior on top of date-fns parse function.
     */
    function parseDate$1(date, format$$1) {
        if (typeof date !== 'string') {
            return isValid(date) ? date : null;
        }

        var parsed = parse(date, format$$1, new Date());

        // if date is not valid or the formatted output after parsing does not match
        // the string value passed in (avoids overflows)
        if (!isValid(parsed) || format(parsed, format$$1) !== date) {
            return null;
        }

        return parsed;
    }

    var after = function after(value, ref) {
        var otherValue = ref[0];
        var inclusion = ref[1];
        var format = ref[2];

        if (typeof format === 'undefined') {
            format = inclusion;
            inclusion = false;
        }
        value = parseDate$1(value, format);
        otherValue = parseDate$1(otherValue, format);

        // if either is not valid.
        if (!value || !otherValue) {
            return false;
        }

        return isAfter(value, otherValue) || inclusion && isEqual(value, otherValue);
    };

    /**
     * Some Alpha Regex helpers.
     * https://github.com/chriso/validator.js/blob/master/src/lib/alpha.js
     */

    var alpha$1 = {
        en: /^[A-Z]*$/i,
        cs: /^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]*$/i,
        da: /^[A-ZÆØÅ]*$/i,
        de: /^[A-ZÄÖÜß]*$/i,
        es: /^[A-ZÁÉÍÑÓÚÜ]*$/i,
        fr: /^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]*$/i,
        lt: /^[A-ZĄČĘĖĮŠŲŪŽ]*$/i,
        nl: /^[A-ZÉËÏÓÖÜ]*$/i,
        hu: /^[A-ZÁÉÍÓÖŐÚÜŰ]*$/i,
        pl: /^[A-ZĄĆĘŚŁŃÓŻŹ]*$/i,
        pt: /^[A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]*$/i,
        ru: /^[А-ЯЁ]*$/i,
        sk: /^[A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ]*$/i,
        sr: /^[A-ZČĆŽŠĐ]*$/i,
        tr: /^[A-ZÇĞİıÖŞÜ]*$/i,
        uk: /^[А-ЩЬЮЯЄІЇҐ]*$/i,
        ar: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]*$/
    };

    var alphaSpaces = {
        en: /^[A-Z\s]*$/i,
        cs: /^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ\s]*$/i,
        da: /^[A-ZÆØÅ\s]*$/i,
        de: /^[A-ZÄÖÜß\s]*$/i,
        es: /^[A-ZÁÉÍÑÓÚÜ\s]*$/i,
        fr: /^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ\s]*$/i,
        lt: /^[A-ZĄČĘĖĮŠŲŪŽ\s]*$/i,
        nl: /^[A-ZÉËÏÓÖÜ\s]*$/i,
        hu: /^[A-ZÁÉÍÓÖŐÚÜŰ\s]*$/i,
        pl: /^[A-ZĄĆĘŚŁŃÓŻŹ\s]*$/i,
        pt: /^[A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ\s]*$/i,
        ru: /^[А-ЯЁ\s]*$/i,
        sk: /^[A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ\s]*$/i,
        sr: /^[A-ZČĆŽŠĐ\s]*$/i,
        tr: /^[A-ZÇĞİıÖŞÜ\s]*$/i,
        uk: /^[А-ЩЬЮЯЄІЇҐ\s]*$/i,
        ar: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ\s]*$/
    };

    var alphanumeric = {
        en: /^[0-9A-Z]*$/i,
        cs: /^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]*$/i,
        da: /^[0-9A-ZÆØÅ]$/i,
        de: /^[0-9A-ZÄÖÜß]*$/i,
        es: /^[0-9A-ZÁÉÍÑÓÚÜ]*$/i,
        fr: /^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]*$/i,
        lt: /^[0-9A-ZĄČĘĖĮŠŲŪŽ]*$/i,
        hu: /^[0-9A-ZÁÉÍÓÖŐÚÜŰ]*$/i,
        nl: /^[0-9A-ZÉËÏÓÖÜ]*$/i,
        pl: /^[0-9A-ZĄĆĘŚŁŃÓŻŹ]*$/i,
        pt: /^[0-9A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]*$/i,
        ru: /^[0-9А-ЯЁ]*$/i,
        sk: /^[0-9A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ]*$/i,
        sr: /^[0-9A-ZČĆŽŠĐ]*$/i,
        tr: /^[0-9A-ZÇĞİıÖŞÜ]*$/i,
        uk: /^[0-9А-ЩЬЮЯЄІЇҐ]*$/i,
        ar: /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]*$/
    };

    var alphaDash = {
        en: /^[0-9A-Z_-]*$/i,
        cs: /^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ_-]*$/i,
        da: /^[0-9A-ZÆØÅ_-]*$/i,
        de: /^[0-9A-ZÄÖÜß_-]*$/i,
        es: /^[0-9A-ZÁÉÍÑÓÚÜ_-]*$/i,
        fr: /^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ_-]*$/i,
        lt: /^[0-9A-ZĄČĘĖĮŠŲŪŽ_-]*$/i,
        nl: /^[0-9A-ZÉËÏÓÖÜ_-]*$/i,
        hu: /^[0-9A-ZÁÉÍÓÖŐÚÜŰ_-]*$/i,
        pl: /^[0-9A-ZĄĆĘŚŁŃÓŻŹ_-]*$/i,
        pt: /^[0-9A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ_-]*$/i,
        ru: /^[0-9А-ЯЁ_-]*$/i,
        sk: /^[0-9A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ_-]*$/i,
        sr: /^[0-9A-ZČĆŽŠĐ_-]*$/i,
        tr: /^[0-9A-ZÇĞİıÖŞÜ_-]*$/i,
        uk: /^[0-9А-ЩЬЮЯЄІЇҐ_-]*$/i,
        ar: /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ_-]*$/
    };

    var validate = function validate(value, ref) {
        if (ref === void 0) ref = [];
        var locale = ref[0];if (locale === void 0) locale = null;

        if (Array.isArray(value)) {
            return value.every(function (val) {
                return validate(val, [locale]);
            });
        }

        // Match at least one locale.
        if (!locale) {
            return Object.keys(alpha$1).some(function (loc) {
                return alpha$1[loc].test(value);
            });
        }

        return (alpha$1[locale] || alpha$1.en).test(value);
    };

    var validate$1 = function validate$1(value, ref) {
        if (ref === void 0) ref = [];
        var locale = ref[0];if (locale === void 0) locale = null;

        if (Array.isArray(value)) {
            return value.every(function (val) {
                return validate$1(val, [locale]);
            });
        }

        // Match at least one locale.
        if (!locale) {
            return Object.keys(alphaDash).some(function (loc) {
                return alphaDash[loc].test(value);
            });
        }

        return (alphaDash[locale] || alphaDash.en).test(value);
    };

    var validate$2 = function validate$2(value, ref) {
        if (ref === void 0) ref = [];
        var locale = ref[0];if (locale === void 0) locale = null;

        if (Array.isArray(value)) {
            return value.every(function (val) {
                return validate$2(val, [locale]);
            });
        }

        // Match at least one locale.
        if (!locale) {
            return Object.keys(alphanumeric).some(function (loc) {
                return alphanumeric[loc].test(value);
            });
        }

        return (alphanumeric[locale] || alphanumeric.en).test(value);
    };

    var validate$3 = function validate$3(value, ref) {
        if (ref === void 0) ref = [];
        var locale = ref[0];if (locale === void 0) locale = null;

        if (Array.isArray(value)) {
            return value.every(function (val) {
                return validate$3(val, [locale]);
            });
        }

        // Match at least one locale.
        if (!locale) {
            return Object.keys(alphaSpaces).some(function (loc) {
                return alphaSpaces[loc].test(value);
            });
        }

        return (alphaSpaces[locale] || alphaSpaces.en).test(value);
    };

    var before = function before(value, ref) {
        var otherValue = ref[0];
        var inclusion = ref[1];
        var format = ref[2];

        if (typeof format === 'undefined') {
            format = inclusion;
            inclusion = false;
        }
        value = parseDate$1(value, format);
        otherValue = parseDate$1(otherValue, format);

        // if either is not valid.
        if (!value || !otherValue) {
            return false;
        }

        return isBefore(value, otherValue) || inclusion && isEqual(value, otherValue);
    };

    var validate$4 = function validate$4(value, ref) {
        var min = ref[0];
        var max = ref[1];

        if (Array.isArray(value)) {
            return value.every(function (val) {
                return validate$4(val, [min, max]);
            });
        }

        return Number(min) <= value && Number(max) >= value;
    };

    var confirmed = function confirmed(value, other) {
        return String(value) === String(other);
    };

    function unwrapExports(x) {
        return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
    }

    function createCommonjsModule(fn, module) {
        return module = { exports: {} }, fn(module, module.exports), module.exports;
    }

    var assertString_1 = createCommonjsModule(function (module, exports) {
        'use strict';

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.default = assertString;
        function assertString(input) {
            var isString = typeof input === 'string' || input instanceof String;

            if (!isString) {
                throw new TypeError('This library (validator.js) validates strings only');
            }
        }
        module.exports = exports['default'];
    });

    unwrapExports(assertString_1);

    var isCreditCard_1 = createCommonjsModule(function (module, exports) {
        'use strict';

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.default = isCreditCard;

        var _assertString2 = _interopRequireDefault(assertString_1);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
        }

        /* eslint-disable max-len */
        var creditCard = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|(222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11}|62[0-9]{14})$/;
        /* eslint-enable max-len */

        function isCreditCard(str) {
            (0, _assertString2.default)(str);
            var sanitized = str.replace(/[- ]+/g, '');
            if (!creditCard.test(sanitized)) {
                return false;
            }
            var sum = 0;
            var digit = void 0;
            var tmpNum = void 0;
            var shouldDouble = void 0;
            for (var i = sanitized.length - 1; i >= 0; i--) {
                digit = sanitized.substring(i, i + 1);
                tmpNum = parseInt(digit, 10);
                if (shouldDouble) {
                    tmpNum *= 2;
                    if (tmpNum >= 10) {
                        sum += tmpNum % 10 + 1;
                    } else {
                        sum += tmpNum;
                    }
                } else {
                    sum += tmpNum;
                }
                shouldDouble = !shouldDouble;
            }
            return !!(sum % 10 === 0 ? sanitized : false);
        }
        module.exports = exports['default'];
    });

    var isCreditCard = unwrapExports(isCreditCard_1);

    var credit_card = function credit_card(value) {
        return isCreditCard(String(value));
    };

    var validate$5 = function validate$5(value, ref) {
        if (ref === void 0) ref = [];
        var decimals = ref[0];if (decimals === void 0) decimals = '*';
        var separator = ref[1];if (separator === void 0) separator = '.';

        if (Array.isArray(value)) {
            return value.every(function (val) {
                return validate$5(val, [decimals, separator]);
            });
        }

        if (value === null || value === undefined || value === '') {
            return true;
        }

        // if is 0.
        if (Number(decimals) === 0) {
            return (/^-?\d*$/.test(value)
            );
        }

        var regexPart = decimals === '*' ? '+' : "{1," + decimals + "}";
        var regex = new RegExp("^-?\\d*(\\" + separator + "\\d" + regexPart + ")?$");

        if (!regex.test(value)) {
            return false;
        }

        var parsedValue = parseFloat(value);

        // eslint-disable-next-line
        return parsedValue === parsedValue;
    };

    var date_between = function date_between(value, params) {
        var min;
        var max;
        var format;
        var inclusivity = '()';

        if (params.length > 3) {
            var assign;
            assign = params, min = assign[0], max = assign[1], inclusivity = assign[2], format = assign[3];
        } else {
            var assign$1;
            assign$1 = params, min = assign$1[0], max = assign$1[1], format = assign$1[2];
        }

        var minDate = parseDate$1(min, format);
        var maxDate = parseDate$1(max, format);
        var dateVal = parseDate$1(value, format);

        if (!minDate || !maxDate || !dateVal) {
            return false;
        }

        if (inclusivity === '()') {
            return isAfter(dateVal, minDate) && isBefore(dateVal, maxDate);
        }

        if (inclusivity === '(]') {
            return isAfter(dateVal, minDate) && (isEqual(dateVal, maxDate) || isBefore(dateVal, maxDate));
        }

        if (inclusivity === '[)') {
            return isBefore(dateVal, maxDate) && (isEqual(dateVal, minDate) || isAfter(dateVal, minDate));
        }

        return isEqual(dateVal, maxDate) || isEqual(dateVal, minDate) || isBefore(dateVal, maxDate) && isAfter(dateVal, minDate);
    };

    var date_format = function date_format(value, ref) {
        var format = ref[0];

        return !!parseDate$1(value, format);
    };

    var validate$6 = function validate$6(value, ref) {
        var length = ref[0];

        if (Array.isArray(value)) {
            return value.every(function (val) {
                return validate$6(val, [length]);
            });
        }
        var strVal = String(value);

        return (/^[0-9]*$/.test(strVal) && strVal.length === Number(length)
        );
    };

    var validateImage = function validateImage(file, width, height) {
        var URL = window.URL || window.webkitURL;
        return new Promise(function (resolve) {
            var image = new Image();
            image.onerror = function () {
                return resolve({ valid: false });
            };
            image.onload = function () {
                return resolve({
                    valid: image.width <= Number(width) && image.height <= Number(height)
                });
            };

            image.src = URL.createObjectURL(file);
        });
    };

    var dimensions = function dimensions(files, ref) {
        var width = ref[0];
        var height = ref[1];

        var list = [];
        for (var i = 0; i < files.length; i++) {
            // if file is not an image, reject.
            if (!/\.(jpg|svg|jpeg|png|bmp|gif)$/i.test(files[i].name)) {
                return false;
            }

            list.push(files[i]);
        }

        return Promise.all(list.map(function (file) {
            return validateImage(file, width, height);
        }));
    };

    var merge_1 = createCommonjsModule(function (module, exports) {
        'use strict';

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.default = merge;
        function merge() {
            var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var defaults = arguments[1];

            for (var key in defaults) {
                if (typeof obj[key] === 'undefined') {
                    obj[key] = defaults[key];
                }
            }
            return obj;
        }
        module.exports = exports['default'];
    });

    unwrapExports(merge_1);

    var isByteLength_1 = createCommonjsModule(function (module, exports) {
        'use strict';

        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
            return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
        } : function (obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
        };

        exports.default = isByteLength;

        var _assertString2 = _interopRequireDefault(assertString_1);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
        }

        /* eslint-disable prefer-rest-params */
        function isByteLength(str, options) {
            (0, _assertString2.default)(str);
            var min = void 0;
            var max = void 0;
            if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object') {
                min = options.min || 0;
                max = options.max;
            } else {
                // backwards compatibility: isByteLength(str, min [, max])
                min = arguments[1];
                max = arguments[2];
            }
            var len = encodeURI(str).split(/%..|./).length - 1;
            return len >= min && (typeof max === 'undefined' || len <= max);
        }
        module.exports = exports['default'];
    });

    unwrapExports(isByteLength_1);

    var isFQDN = createCommonjsModule(function (module, exports) {
        'use strict';

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.default = isFDQN;

        var _assertString2 = _interopRequireDefault(assertString_1);

        var _merge2 = _interopRequireDefault(merge_1);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
        }

        var default_fqdn_options = {
            require_tld: true,
            allow_underscores: false,
            allow_trailing_dot: false
        };

        function isFDQN(str, options) {
            (0, _assertString2.default)(str);
            options = (0, _merge2.default)(options, default_fqdn_options);

            /* Remove the optional trailing dot before checking validity */
            if (options.allow_trailing_dot && str[str.length - 1] === '.') {
                str = str.substring(0, str.length - 1);
            }
            var parts = str.split('.');
            if (options.require_tld) {
                var tld = parts.pop();
                if (!parts.length || !/^([a-z\u00a1-\uffff]{2,}|xn[a-z0-9-]{2,})$/i.test(tld)) {
                    return false;
                }
                // disallow spaces
                if (/[\s\u2002-\u200B\u202F\u205F\u3000\uFEFF\uDB40\uDC20]/.test(tld)) {
                    return false;
                }
            }
            for (var part, i = 0; i < parts.length; i++) {
                part = parts[i];
                if (options.allow_underscores) {
                    part = part.replace(/_/g, '');
                }
                if (!/^[a-z\u00a1-\uffff0-9-]+$/i.test(part)) {
                    return false;
                }
                // disallow full-width chars
                if (/[\uff01-\uff5e]/.test(part)) {
                    return false;
                }
                if (part[0] === '-' || part[part.length - 1] === '-') {
                    return false;
                }
            }
            return true;
        }
        module.exports = exports['default'];
    });

    unwrapExports(isFQDN);

    var isEmail_1 = createCommonjsModule(function (module, exports) {
        'use strict';

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.default = isEmail;

        var _assertString2 = _interopRequireDefault(assertString_1);

        var _merge2 = _interopRequireDefault(merge_1);

        var _isByteLength2 = _interopRequireDefault(isByteLength_1);

        var _isFQDN2 = _interopRequireDefault(isFQDN);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
        }

        var default_email_options = {
            allow_display_name: false,
            require_display_name: false,
            allow_utf8_local_part: true,
            require_tld: true
        };

        /* eslint-disable max-len */
        /* eslint-disable no-control-regex */
        var displayName = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\,\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF\s]*<(.+)>$/i;
        var emailUserPart = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i;
        var quotedEmailUser = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i;
        var emailUserUtf8Part = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i;
        var quotedEmailUserUtf8 = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i;
        /* eslint-enable max-len */
        /* eslint-enable no-control-regex */

        function isEmail(str, options) {
            (0, _assertString2.default)(str);
            options = (0, _merge2.default)(options, default_email_options);

            if (options.require_display_name || options.allow_display_name) {
                var display_email = str.match(displayName);
                if (display_email) {
                    str = display_email[1];
                } else if (options.require_display_name) {
                    return false;
                }
            }

            var parts = str.split('@');
            var domain = parts.pop();
            var user = parts.join('@');

            var lower_domain = domain.toLowerCase();
            if (lower_domain === 'gmail.com' || lower_domain === 'googlemail.com') {
                user = user.replace(/\./g, '').toLowerCase();
            }

            if (!(0, _isByteLength2.default)(user, { max: 64 }) || !(0, _isByteLength2.default)(domain, { max: 254 })) {
                return false;
            }

            if (!(0, _isFQDN2.default)(domain, { require_tld: options.require_tld })) {
                return false;
            }

            if (user[0] === '"') {
                user = user.slice(1, user.length - 1);
                return options.allow_utf8_local_part ? quotedEmailUserUtf8.test(user) : quotedEmailUser.test(user);
            }

            var pattern = options.allow_utf8_local_part ? emailUserUtf8Part : emailUserPart;

            var user_parts = user.split('.');
            for (var i = 0; i < user_parts.length; i++) {
                if (!pattern.test(user_parts[i])) {
                    return false;
                }
            }

            return true;
        }
        module.exports = exports['default'];
    });

    var isEmail = unwrapExports(isEmail_1);

    var validate$7 = function validate$7(value) {
        if (Array.isArray(value)) {
            return value.every(function (val) {
                return isEmail(String(val));
            });
        }

        return isEmail(String(value));
    };

    var ext = function ext(files, extensions) {
        var regex = new RegExp(".(" + extensions.join('|') + ")$", 'i');

        return files.every(function (file) {
            return regex.test(file.name);
        });
    };

    var image = function image(files) {
        return files.every(function (file) {
            return (/\.(jpg|svg|jpeg|png|bmp|gif)$/i.test(file.name)
            );
        });
    };

    var validate$8 = function validate$8(value, options) {
        if (Array.isArray(value)) {
            return value.every(function (val) {
                return validate$8(val, options);
            });
        }

        // eslint-disable-next-line
        return !!options.filter(function (option) {
            return option == value;
        }).length;
    };

    var isIP_1 = createCommonjsModule(function (module, exports) {
        'use strict';

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.default = isIP;

        var _assertString2 = _interopRequireDefault(assertString_1);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
        }

        var ipv4Maybe = /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/;
        var ipv6Block = /^[0-9A-F]{1,4}$/i;

        function isIP(str) {
            var version = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

            (0, _assertString2.default)(str);
            version = String(version);
            if (!version) {
                return isIP(str, 4) || isIP(str, 6);
            } else if (version === '4') {
                if (!ipv4Maybe.test(str)) {
                    return false;
                }
                var parts = str.split('.').sort(function (a, b) {
                    return a - b;
                });
                return parts[3] <= 255;
            } else if (version === '6') {
                var blocks = str.split(':');
                var foundOmissionBlock = false; // marker to indicate ::

                // At least some OS accept the last 32 bits of an IPv6 address
                // (i.e. 2 of the blocks) in IPv4 notation, and RFC 3493 says
                // that '::ffff:a.b.c.d' is valid for IPv4-mapped IPv6 addresses,
                // and '::a.b.c.d' is deprecated, but also valid.
                var foundIPv4TransitionBlock = isIP(blocks[blocks.length - 1], 4);
                var expectedNumberOfBlocks = foundIPv4TransitionBlock ? 7 : 8;

                if (blocks.length > expectedNumberOfBlocks) {
                    return false;
                }
                // initial or final ::
                if (str === '::') {
                    return true;
                } else if (str.substr(0, 2) === '::') {
                    blocks.shift();
                    blocks.shift();
                    foundOmissionBlock = true;
                } else if (str.substr(str.length - 2) === '::') {
                    blocks.pop();
                    blocks.pop();
                    foundOmissionBlock = true;
                }

                for (var i = 0; i < blocks.length; ++i) {
                    // test for a :: which can not be at the string start/end
                    // since those cases have been handled above
                    if (blocks[i] === '' && i > 0 && i < blocks.length - 1) {
                        if (foundOmissionBlock) {
                            return false; // multiple :: in address
                        }
                        foundOmissionBlock = true;
                    } else if (foundIPv4TransitionBlock && i === blocks.length - 1) {
                        // it has been checked before that the last
                        // block is a valid IPv4 address
                    } else if (!ipv6Block.test(blocks[i])) {
                        return false;
                    }
                }
                if (foundOmissionBlock) {
                    return blocks.length >= 1;
                }
                return blocks.length === expectedNumberOfBlocks;
            }
            return false;
        }
        module.exports = exports['default'];
    });

    var isIP = unwrapExports(isIP_1);

    //

    /**
     * Gets the data attribute. the name must be kebab-case.
     */
    var getDataAttribute = function getDataAttribute(el, name) {
        return el.getAttribute("data-vv-" + name);
    };

    /**
     * Checks if the value is either null or undefined.
     */
    var isNullOrUndefined = function isNullOrUndefined(value) {
        return value === null || value === undefined;
    };

    /**
     * Sets the data attribute.
     */
    var setDataAttribute = function setDataAttribute(el, name, value) {
        return el.setAttribute("data-vv-" + name, value);
    };

    /**
     * Creates a proxy object if available in the environment.
     */
    var createProxy = function createProxy(target, handler) {
        if (typeof Proxy === 'undefined') {
            return target;
        }

        return new Proxy(target, handler);
    };

    /**
     * Creates the default flags object.
     */
    var createFlags = function createFlags() {
        return {
            untouched: true,
            touched: false,
            dirty: false,
            pristine: true,
            valid: null,
            invalid: null,
            validated: false,
            pending: false,
            required: false
        };
    };

    /**
     * Shallow object comparison.
     */
    var isEqual$1 = function isEqual$1(lhs, rhs) {
        if (lhs instanceof RegExp && rhs instanceof RegExp) {
            return isEqual$1(lhs.source, rhs.source) && isEqual$1(lhs.flags, rhs.flags);
        }

        if (Array.isArray(lhs) && Array.isArray(rhs)) {
            if (lhs.length !== rhs.length) {
                return false;
            }

            for (var i = 0; i < lhs.length; i++) {
                if (!isEqual$1(lhs[i], rhs[i])) {
                    return false;
                }
            }

            return true;
        }

        // if both are objects, compare each key recursively.
        if (isObject(lhs) && isObject(rhs)) {
            return Object.keys(lhs).every(function (key) {
                return isEqual$1(lhs[key], rhs[key]);
            }) && Object.keys(rhs).every(function (key) {
                return isEqual$1(lhs[key], rhs[key]);
            });
        }

        return lhs === rhs;
    };

    /**
     * Determines the input field scope.
     */
    var getScope = function getScope(el) {
        var scope = getDataAttribute(el, 'scope');
        if (isNullOrUndefined(scope) && el.form) {
            scope = getDataAttribute(el.form, 'scope');
        }

        return !isNullOrUndefined(scope) ? scope : null;
    };

    /**
     * Gets the value in an object safely.
     */
    var getPath = function getPath(path, target, def) {
        if (def === void 0) def = undefined;

        if (!path || !target) {
            return def;
        }

        var value = target;
        path.split('.').every(function (prop) {
            if (!Object.prototype.hasOwnProperty.call(value, prop) && value[prop] === undefined) {
                value = def;

                return false;
            }

            value = value[prop];

            return true;
        });

        return value;
    };

    /**
     * Checks if path exists within an object.
     */
    var hasPath = function hasPath(path, target) {
        var obj = target;
        return path.split('.').every(function (prop) {
            if (!Object.prototype.hasOwnProperty.call(obj, prop)) {
                return false;
            }

            obj = obj[prop];

            return true;
        });
    };

    /**
     * Parses a rule string expression.
     */
    var parseRule = function parseRule(rule) {
        var params = [];
        var name = rule.split(':')[0];

        if (~rule.indexOf(':')) {
            params = rule.split(':').slice(1).join(':').split(',');
        }

        return { name: name, params: params };
    };

    /**
     * Debounces a function.
     */
    var debounce = function debounce(fn, wait, immediate) {
        if (wait === void 0) wait = 0;
        if (immediate === void 0) immediate = false;

        if (wait === 0) {
            return fn;
        }

        var timeout;

        return function () {
            var args = [],
                len = arguments.length;
            while (len--) {
                args[len] = arguments[len];
            }var later = function later() {
                timeout = null;
                if (!immediate) {
                    fn.apply(void 0, args);
                }
            };
            /* istanbul ignore next */
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            /* istanbul ignore next */
            if (callNow) {
                fn.apply(void 0, args);
            }
        };
    };

    /**
     * Normalizes the given rules expression.
     */
    var normalizeRules = function normalizeRules(rules) {
        // if falsy value return an empty object.
        if (!rules) {
            return {};
        }

        if (isObject(rules)) {
            // $FlowFixMe
            return Object.keys(rules).reduce(function (prev, curr) {
                var params = [];
                // $FlowFixMe
                if (rules[curr] === true) {
                    params = [];
                } else if (Array.isArray(rules[curr])) {
                    params = rules[curr];
                } else {
                    params = [rules[curr]];
                }

                // $FlowFixMe
                if (rules[curr] !== false) {
                    prev[curr] = params;
                }

                return prev;
            }, {});
        }

        if (typeof rules !== 'string') {
            warn('rules must be either a string or an object.');
            return {};
        }

        return rules.split('|').reduce(function (prev, rule) {
            var parsedRule = parseRule(rule);
            if (!parsedRule.name) {
                return prev;
            }

            prev[parsedRule.name] = parsedRule.params;
            return prev;
        }, {});
    };

    /**
     * Emits a warning to the console.
     */
    var warn = function warn(message) {
        console.warn("[vee-validate] " + message); // eslint-disable-line
    };

    /**
     * Creates a branded error object.
     */
    var createError = function createError(message) {
        return new Error("[vee-validate] " + message);
    };

    /**
     * Checks if the value is an object.
     */
    var isObject = function isObject(obj) {
        return obj !== null && obj && (typeof obj === "undefined" ? "undefined" : _typeof2(obj)) === 'object' && !Array.isArray(obj);
    };

    /**
     * Checks if a function is callable.
     */
    var isCallable = function isCallable(func) {
        return typeof func === 'function';
    };

    /**
     * Check if element has the css class on it.
     */
    var hasClass = function hasClass(el, className) {
        if (el.classList) {
            return el.classList.contains(className);
        }

        return !!el.className.match(new RegExp("(\\s|^)" + className + "(\\s|$)"));
    };

    /**
     * Adds the provided css className to the element.
     */
    var addClass = function addClass(el, className) {
        if (el.classList) {
            el.classList.add(className);
            return;
        }

        if (!hasClass(el, className)) {
            el.className += " " + className;
        }
    };

    /**
     * Remove the provided css className from the element.
     */
    var removeClass = function removeClass(el, className) {
        if (el.classList) {
            el.classList.remove(className);
            return;
        }

        if (hasClass(el, className)) {
            var reg = new RegExp("(\\s|^)" + className + "(\\s|$)");
            el.className = el.className.replace(reg, ' ');
        }
    };

    /**
     * Adds or removes a class name on the input depending on the status flag.
     */
    var toggleClass = function toggleClass(el, className, status) {
        if (!el || !className) {
            return;
        }

        if (status) {
            return addClass(el, className);
        }

        removeClass(el, className);
    };

    /**
     * Converts an array-like object to array, provides a simple polyfill for Array.from
     */
    var toArray = function toArray(arrayLike) {
        if (isCallable(Array.from)) {
            return Array.from(arrayLike);
        }

        var array = [];
        var length = arrayLike.length;
        for (var i = 0; i < length; i++) {
            array.push(arrayLike[i]);
        }

        return array;
    };

    /**
     * Assign polyfill from the mdn.
     */
    var assign = function assign(target) {
        var others = [],
            len = arguments.length - 1;
        while (len-- > 0) {
            others[len] = arguments[len + 1];
        } /* istanbul ignore else */
        if (isCallable(Object.assign)) {
            return Object.assign.apply(Object, [target].concat(others));
        }

        /* istanbul ignore next */
        if (target == null) {
            throw new TypeError('Cannot convert undefined or null to object');
        }

        /* istanbul ignore next */
        var to = Object(target);
        /* istanbul ignore next */
        others.forEach(function (arg) {
            // Skip over if undefined or null
            if (arg != null) {
                Object.keys(arg).forEach(function (key) {
                    to[key] = arg[key];
                });
            }
        });
        /* istanbul ignore next */
        return to;
    };

    var id = 0;
    var idTemplate = '{id}';

    /**
     * Generates a unique id.
     */
    var uniqId = function uniqId() {
        // handle too many uses of uniqId, although unlikely.
        if (id >= 9999) {
            id = 0;
            // shift the template.
            idTemplate = idTemplate.replace('{id}', '_{id}');
        }

        id++;
        var newId = idTemplate.replace('{id}', String(id));

        return newId;
    };

    /**
     * finds the first element that satisfies the predicate callback, polyfills array.find
     */
    var find = function find(arrayLike, predicate) {
        var array = toArray(arrayLike);

        if (isCallable(array.find)) {
            return array.find(predicate);
        }

        var result;
        array.some(function (item) {
            if (predicate(item)) {
                result = item;
                return true;
            }

            return false;
        });

        return result;
    };

    /**
     * Returns a suitable event name for the input element.
     */
    var getInputEventName = function getInputEventName(el) {
        if (el && (el.tagName === 'SELECT' || ~['radio', 'checkbox', 'file'].indexOf(el.type))) {
            return 'change';
        }

        return 'input';
    };

    var isBuiltInComponent = function isBuiltInComponent(vnode) {
        if (!vnode) {
            return false;
        }

        var tag = vnode.componentOptions.tag;

        return (/keep-alive|transition|transition-group/.test(tag)
        );
    };

    var makeEventsArray = function makeEventsArray(events) {
        return typeof events === 'string' && events.length ? events.split('|') : [];
    };

    var makeDelayObject = function makeDelayObject(events, delay) {
        var delayObject = {};

        // We already have a valid delay object
        if ((typeof delay === "undefined" ? "undefined" : _typeof2(delay)) === 'object' && !('global' in delay) && !('local' in delay) && Object.keys(delay).length) {
            return delay;
        }

        var globalDelay = (typeof delay === "undefined" ? "undefined" : _typeof2(delay)) === 'object' && 'global' in delay ? delay.global : delay || 0;
        var localDelay = (typeof delay === "undefined" ? "undefined" : _typeof2(delay)) === 'object' && 'local' in delay ? delay.local : {};

        events.forEach(function (e) {
            delayObject[e] = (typeof globalDelay === "undefined" ? "undefined" : _typeof2(globalDelay)) === 'object' ? localDelay[e] || globalDelay[e] || 0 : localDelay[e] || globalDelay;
        });

        return delayObject;
    };

    var deepParseInt = function deepParseInt(input) {
        if (typeof input === 'number') {
            return input;
        }

        if (typeof input === 'string') {
            return parseInt(input);
        }

        var map = {};
        for (var element in input) {
            map[element] = parseInt(input[element]);
        }

        return map;
    };

    var ip = function ip(value, ref) {
        if (ref === void 0) ref = [];
        var version = ref[0];if (version === void 0) version = 4;

        if (isNullOrUndefined(value)) {
            value = '';
        }

        if (Array.isArray(value)) {
            return value.every(function (val) {
                return isIP(val, version);
            });
        }

        return isIP(value, version);
    };

    /**
     * @param {Array|String} value
     * @param {Number} length
     * @param {Number} max
     */
    var compare = function compare(value, length, max) {
        if (max === undefined) {
            return value.length === length;
        }

        // cast to number.
        max = Number(max);

        return value.length >= length && value.length <= max;
    };

    var length = function length(value, ref) {
        var length = ref[0];
        var max = ref[1];if (max === void 0) max = undefined;

        length = Number(length);
        if (value === undefined || value === null) {
            return false;
        }

        if (typeof value === 'number') {
            value = String(value);
        }

        if (!value.length) {
            value = toArray(value);
        }

        return compare(value, length, max);
    };

    var integer = function integer(value) {
        if (Array.isArray(value)) {
            return value.every(function (val) {
                return (/^-?[0-9]+$/.test(String(val))
                );
            });
        }

        return (/^-?[0-9]+$/.test(String(value))
        );
    };

    var max$1 = function max$1(value, ref) {
        var length = ref[0];

        if (value === undefined || value === null) {
            return length >= 0;
        }

        return String(value).length <= length;
    };

    var max_value = function max_value(value, ref) {
        var max = ref[0];

        if (Array.isArray(value) || value === null || value === undefined || value === '') {
            return false;
        }

        return Number(value) <= max;
    };

    var mimes = function mimes(files, _mimes) {
        var regex = new RegExp(_mimes.join('|').replace('*', '.+') + "$", 'i');

        return files.every(function (file) {
            return regex.test(file.type);
        });
    };

    var min$1 = function min$1(value, ref) {
        var length = ref[0];

        if (value === undefined || value === null) {
            return false;
        }
        return String(value).length >= length;
    };

    var min_value = function min_value(value, ref) {
        var min = ref[0];

        if (Array.isArray(value) || value === null || value === undefined || value === '') {
            return false;
        }

        return Number(value) >= min;
    };

    var validate$9 = function validate$9(value, options) {
        if (Array.isArray(value)) {
            return value.every(function (val) {
                return validate$9(val, options);
            });
        }

        // eslint-disable-next-line
        return !options.filter(function (option) {
            return option == value;
        }).length;
    };

    var numeric = function numeric(value) {
        if (Array.isArray(value)) {
            return value.every(function (val) {
                return (/^[0-9]+$/.test(String(val))
                );
            });
        }

        return (/^[0-9]+$/.test(String(value))
        );
    };

    var regex = function regex(value, ref) {
        var regex = ref[0];
        var flags = ref.slice(1);

        if (regex instanceof RegExp) {
            return regex.test(value);
        }

        return new RegExp(regex, flags).test(String(value));
    };

    var required = function required(value, ref) {
        if (ref === void 0) ref = [];
        var invalidateFalse = ref[0];if (invalidateFalse === void 0) invalidateFalse = false;

        if (Array.isArray(value)) {
            return !!value.length;
        }

        // incase a field considers `false` as an empty value like checkboxes.
        if (value === false && invalidateFalse) {
            return false;
        }

        if (value === undefined || value === null) {
            return false;
        }

        return !!String(value).trim().length;
    };

    var size = function size(files, ref) {
        var size = ref[0];

        if (isNaN(size)) {
            return false;
        }

        var nSize = Number(size) * 1024;
        for (var i = 0; i < files.length; i++) {
            if (files[i].size > nSize) {
                return false;
            }
        }

        return true;
    };

    var isURL_1 = createCommonjsModule(function (module, exports) {
        'use strict';

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.default = isURL;

        var _assertString2 = _interopRequireDefault(assertString_1);

        var _isFQDN2 = _interopRequireDefault(isFQDN);

        var _isIP2 = _interopRequireDefault(isIP_1);

        var _merge2 = _interopRequireDefault(merge_1);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
        }

        var default_url_options = {
            protocols: ['http', 'https', 'ftp'],
            require_tld: true,
            require_protocol: false,
            require_host: true,
            require_valid_protocol: true,
            allow_underscores: false,
            allow_trailing_dot: false,
            allow_protocol_relative_urls: false
        };

        var wrapped_ipv6 = /^\[([^\]]+)\](?::([0-9]+))?$/;

        function isRegExp(obj) {
            return Object.prototype.toString.call(obj) === '[object RegExp]';
        }

        function checkHost(host, matches) {
            for (var i = 0; i < matches.length; i++) {
                var match = matches[i];
                if (host === match || isRegExp(match) && match.test(host)) {
                    return true;
                }
            }
            return false;
        }

        function isURL(url, options) {
            (0, _assertString2.default)(url);
            if (!url || url.length >= 2083 || /[\s<>]/.test(url)) {
                return false;
            }
            if (url.indexOf('mailto:') === 0) {
                return false;
            }
            options = (0, _merge2.default)(options, default_url_options);
            var protocol = void 0,
                auth = void 0,
                host = void 0,
                hostname = void 0,
                port = void 0,
                port_str = void 0,
                split = void 0,
                ipv6 = void 0;

            split = url.split('#');
            url = split.shift();

            split = url.split('?');
            url = split.shift();

            split = url.split('://');
            if (split.length > 1) {
                protocol = split.shift();
                if (options.require_valid_protocol && options.protocols.indexOf(protocol) === -1) {
                    return false;
                }
            } else if (options.require_protocol) {
                return false;
            } else if (options.allow_protocol_relative_urls && url.substr(0, 2) === '//') {
                split[0] = url.substr(2);
            }
            url = split.join('://');

            if (url === '') {
                return false;
            }

            split = url.split('/');
            url = split.shift();

            if (url === '' && !options.require_host) {
                return true;
            }

            split = url.split('@');
            if (split.length > 1) {
                auth = split.shift();
                if (auth.indexOf(':') >= 0 && auth.split(':').length > 2) {
                    return false;
                }
            }
            hostname = split.join('@');

            port_str = null;
            ipv6 = null;
            var ipv6_match = hostname.match(wrapped_ipv6);
            if (ipv6_match) {
                host = '';
                ipv6 = ipv6_match[1];
                port_str = ipv6_match[2] || null;
            } else {
                split = hostname.split(':');
                host = split.shift();
                if (split.length) {
                    port_str = split.join(':');
                }
            }

            if (port_str !== null) {
                port = parseInt(port_str, 10);
                if (!/^[0-9]+$/.test(port_str) || port <= 0 || port > 65535) {
                    return false;
                }
            }

            if (!(0, _isIP2.default)(host) && !(0, _isFQDN2.default)(host, options) && (!ipv6 || !(0, _isIP2.default)(ipv6, 6))) {
                return false;
            }

            host = host || ipv6;

            if (options.host_whitelist && !checkHost(host, options.host_whitelist)) {
                return false;
            }
            if (options.host_blacklist && checkHost(host, options.host_blacklist)) {
                return false;
            }

            return true;
        }
        module.exports = exports['default'];
    });

    var isURL = unwrapExports(isURL_1);

    var url = function url(value, ref) {
        if (ref === void 0) ref = [];
        var requireProtocol = ref[0];if (requireProtocol === void 0) requireProtocol = false;

        var options = { require_protocol: !!requireProtocol, allow_underscores: true };
        if (isNullOrUndefined(value)) {
            value = '';
        }

        if (Array.isArray(value)) {
            return value.every(function (val) {
                return isURL(val, options);
            });
        }

        return isURL(value, options);
    };

    /* eslint-disable camelcase */
    var Rules = {
        after: after,
        alpha_dash: validate$1,
        alpha_num: validate$2,
        alpha_spaces: validate$3,
        alpha: validate,
        before: before,
        between: validate$4,
        confirmed: confirmed,
        credit_card: credit_card,
        date_between: date_between,
        date_format: date_format,
        decimal: validate$5,
        digits: validate$6,
        dimensions: dimensions,
        email: validate$7,
        ext: ext,
        image: image,
        in: validate$8,
        integer: integer,
        length: length,
        ip: ip,
        max: max$1,
        max_value: max_value,
        mimes: mimes,
        min: min$1,
        min_value: min_value,
        not_in: validate$9,
        numeric: numeric,
        regex: regex,
        required: required,
        size: size,
        url: url
    };

    /**
     * Formates file size.
     *
     * @param {Number|String} size
     */
    var formatFileSize = function formatFileSize(size) {
        var units = ['Byte', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        var threshold = 1024;
        size = Number(size) * threshold;
        var i = size === 0 ? 0 : Math.floor(Math.log(size) / Math.log(threshold));
        return (size / Math.pow(threshold, i)).toFixed(2) * 1 + " " + units[i];
    };

    /**
     * Checks if vee-validate is defined globally.
     */
    var isDefinedGlobally = function isDefinedGlobally() {
        return typeof VeeValidate !== 'undefined';
    };

    var messages = {
        _default: function _default(e) {
            return "El campo " + e + " no es válido.";
        },
        after: function after(e, n) {
            var o = n[0];
            return "El campo " + e + " debe ser posterior " + (n[1] ? "o igual " : "") + "a " + o + ".";
        },
        alpha_dash: function alpha_dash(e) {
            return "El campo " + e + " solo debe contener letras, números y guiones.";
        },
        alpha_num: function alpha_num(e) {
            return "El campo " + e + " solo debe contener letras y números.";
        },
        alpha_spaces: function alpha_spaces(e) {
            return "El campo " + e + " solo debe contener letras y espacios.";
        },
        alpha: function alpha(e) {
            return "El campo " + e + " solo debe contener letras.";
        },
        before: function before(e, n) {
            var o = n[0];
            return "El campo " + e + " debe ser anterior " + (n[1] ? "o igual " : "") + "a " + o + ".";
        },
        between: function between(e, n) {
            return "El campo " + e + " debe estar entre " + n[0] + " y " + n[1] + ".";
        },
        confirmed: function confirmed(e) {
            return "El campo " + e + " no coincide.";
        },
        credit_card: function credit_card(e) {
            return "El campo " + e + " es inválido.";
        },
        date_between: function date_between(e, n) {
            return "El campo " + e + " debe estar entre " + n[0] + " y " + n[1] + ".";
        },
        date_format: function date_format(e, n) {
            return "El campo " + e + " debe tener formato formato " + n[0] + ".";
        },
        decimal: function decimal(e, n) {
            void 0 === n && (n = []);
            var o = n[0];
            return void 0 === o && (o = "*"), "El campo " + e + " debe ser númerico y contener " + ("*" === o ? "" : o) + " puntos decimales.";
        },
        digits: function digits(e, n) {
            return "El campo " + e + " debe ser númerico y contener exactamente " + n[0] + " dígitos.";
        },
        dimensions: function dimensions(e, n) {
            return "El campo " + e + " debe ser de " + n[0] + " pixeles por " + n[1] + " pixeles.";
        },
        email: function email(e) {
            return "El campo " + e + " debe ser un correo electrónico válido.";
        },
        ext: function ext(e) {
            return "El campo " + e + " debe ser un archivo válido.";
        },
        image: function image(e) {
            return "El campo " + e + " debe ser una imagen.";
        },
        in: function _in(e) {
            return "El campo " + e + " debe ser un valor válido.";
        },
        integer: function integer(e) {
            return "El campo " + e + " debe ser un entero.";
        },
        ip: function ip(e) {
            return "El campo " + e + " debe ser una dirección ip válida.";
        },
        length: function length(e, n) {
            var o = n[0],
                r = n[1];
            return r ? "El largo del campo " + e + " debe estar entre " + o + " y " + r + "." : "El largo del campo " + e + " debe ser " + o + ".";
        },
        max: function max(e, n) {
            return "El campo " + e + " no debe ser mayor a " + n[0] + " caracteres.";
        },
        max_value: function max_value(e, n) {
            return "El campo " + e + " debe de ser " + n[0] + " o menor.";
        },
        mimes: function mimes(e) {
            return "El campo " + e + " debe ser un tipo de archivo válido.";
        },
        min: function min(e, n) {
            return "El campo " + e + " debe tener al menos " + n[0] + " caracteres.";
        },
        min_value: function min_value(e, n) {
            return "El campo " + e + " debe ser " + n[0] + " o superior.";
        },
        not_in: function not_in(e) {
            return "El campo " + e + " debe ser un valor válido.";
        },
        numeric: function numeric(e) {
            return "El campo " + e + " debe contener solo caracteres númericos.";
        },
        regex: function regex(e) {
            return "El formato del campo " + e + " no es válido.";
        },
        required: function required(e) {
            return "El campo " + e + " es obligatorio.";
        },
        size: function size(e, n) {
            return "El campo " + e + " debe ser menor a " + function (e) {
                var n = 0 == (e = 1024 * Number(e)) ? 0 : Math.floor(Math.log(e) / Math.log(1024));
                return 1 * (e / Math.pow(1024, n)).toFixed(2) + " " + ["Byte", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"][n];
            }(n[0]) + ".";
        },
        url: function url(e) {
            return "El campo " + e + " no es una URL válida.";
        }
    };

    var locale$1 = {
        name: 'en',
        messages: messages,
        attributes: {}
    };

    if (isDefinedGlobally()) {
        // eslint-disable-next-line
        VeeValidate.Validator.addLocale(locale$1);
    }

    //

    var ErrorBag = function ErrorBag() {
        this.items = [];
    };

    /**
     * Adds an error to the internal array.
     */
    ErrorBag.prototype.add = function add(error) {
        // handle old signature.
        if (arguments.length > 1) {
            error = {
                field: arguments[0],
                msg: arguments[1],
                rule: arguments[2],
                scope: !isNullOrUndefined(arguments[3]) ? arguments[3] : null
            };
        }

        error.scope = !isNullOrUndefined(error.scope) ? error.scope : null;
        this.items.push(error);
    };

    /**
     * Updates a field error with the new field scope.
     */
    ErrorBag.prototype.update = function update(id, error) {
        var item = find(this.items, function (i) {
            return i.id === id;
        });
        if (!item) {
            return;
        }

        var idx = this.items.indexOf(item);
        this.items.splice(idx, 1);
        item.scope = error.scope;
        this.items.push(item);
    };

    /**
     * Gets all error messages from the internal array.
     */
    ErrorBag.prototype.all = function all(scope) {
        if (isNullOrUndefined(scope)) {
            return this.items.map(function (e) {
                return e.msg;
            });
        }

        return this.items.filter(function (e) {
            return e.scope === scope;
        }).map(function (e) {
            return e.msg;
        });
    };

    /**
     * Checks if there are any errors in the internal array.
     */
    ErrorBag.prototype.any = function any(scope) {
        if (isNullOrUndefined(scope)) {
            return !!this.items.length;
        }

        return !!this.items.filter(function (e) {
            return e.scope === scope;
        }).length;
    };

    /**
     * Removes all items from the internal array.
     */
    ErrorBag.prototype.clear = function clear(scope) {
        var this$1 = this;

        if (isNullOrUndefined(scope)) {
            scope = null;
        }

        for (var i = 0; i < this.items.length; ++i) {
            if (this$1.items[i].scope === scope) {
                this$1.items.splice(i, 1);
                --i;
            }
        }
    };

    /**
     * Collects errors into groups or for a specific field.
     */
    ErrorBag.prototype.collect = function collect(field, scope, map) {
        if (map === void 0) map = true;

        if (!field) {
            var collection = {};
            this.items.forEach(function (e) {
                if (!collection[e.field]) {
                    collection[e.field] = [];
                }

                collection[e.field].push(map ? e.msg : e);
            });

            return collection;
        }

        field = !isNullOrUndefined(field) ? String(field) : field;
        if (isNullOrUndefined(scope)) {
            return this.items.filter(function (e) {
                return e.field === field;
            }).map(function (e) {
                return map ? e.msg : e;
            });
        }

        return this.items.filter(function (e) {
            return e.field === field && e.scope === scope;
        }).map(function (e) {
            return map ? e.msg : e;
        });
    };
    /**
     * Gets the internal array length.
     */
    ErrorBag.prototype.count = function count() {
        return this.items.length;
    };

    /**
     * Finds and fetches the first error message for the specified field id.
     */
    ErrorBag.prototype.firstById = function firstById(id) {
        var error = find(this.items, function (i) {
            return i.id === id;
        });

        return error ? error.msg : null;
    };

    /**
     * Gets the first error message for a specific field.
     */
    ErrorBag.prototype.first = function first(field, scope) {
        var this$1 = this;
        if (scope === void 0) scope = null;

        field = !isNullOrUndefined(field) ? String(field) : field;
        var selector = this._selector(field);
        var scoped = this._scope(field);

        if (scoped) {
            var result = this.first(scoped.name, scoped.scope);
            // if such result exist, return it. otherwise it could be a field.
            // with dot in its name.
            if (result) {
                return result;
            }
        }

        if (selector) {
            return this.firstByRule(selector.name, selector.rule, scope);
        }

        for (var i = 0; i < this.items.length; ++i) {
            if (this$1.items[i].field === field && this$1.items[i].scope === scope) {
                return this$1.items[i].msg;
            }
        }

        return null;
    };

    /**
     * Returns the first error rule for the specified field
     */
    ErrorBag.prototype.firstRule = function firstRule(field, scope) {
        var errors = this.collect(field, scope, false);

        return errors.length && errors[0].rule || null;
    };

    /**
     * Checks if the internal array has at least one error for the specified field.
     */
    ErrorBag.prototype.has = function has(field, scope) {
        if (scope === void 0) scope = null;

        return !!this.first(field, scope);
    };

    /**
     * Gets the first error message for a specific field and a rule.
     */
    ErrorBag.prototype.firstByRule = function firstByRule(name, rule, scope) {
        if (scope === void 0) scope = null;

        var error = this.collect(name, scope, false).filter(function (e) {
            return e.rule === rule;
        })[0];

        return error && error.msg || null;
    };

    /**
     * Gets the first error message for a specific field that not match the rule.
     */
    ErrorBag.prototype.firstNot = function firstNot(name, rule, scope) {
        if (rule === void 0) rule = 'required';
        if (scope === void 0) scope = null;

        var error = this.collect(name, scope, false).filter(function (e) {
            return e.rule !== rule;
        })[0];

        return error && error.msg || null;
    };

    /**
     * Removes errors by matching against the id.
     */
    ErrorBag.prototype.removeById = function removeById(id) {
        var this$1 = this;

        for (var i = 0; i < this.items.length; ++i) {
            if (this$1.items[i].id === id) {
                this$1.items.splice(i, 1);
                --i;
            }
        }
    };

    /**
     * Removes all error messages associated with a specific field.
     */
    ErrorBag.prototype.remove = function remove(field, scope, id) {
        var this$1 = this;

        field = !isNullOrUndefined(field) ? String(field) : field;
        var removeCondition = function removeCondition(e) {
            if (e.id && id) {
                return e.id === id;
            }

            if (!isNullOrUndefined(scope)) {
                return e.field === field && e.scope === scope;
            }

            return e.field === field && e.scope === null;
        };

        for (var i = 0; i < this.items.length; ++i) {
            if (removeCondition(this$1.items[i])) {
                this$1.items.splice(i, 1);
                --i;
            }
        }
    };

    /**
     * Get the field attributes if there's a rule selector.
     */
    ErrorBag.prototype._selector = function _selector(field) {
        if (field.indexOf(':') > -1) {
            var ref = field.split(':');
            var name = ref[0];
            var rule = ref[1];

            return { name: name, rule: rule };
        }

        return null;
    };

    /**
     * Get the field scope if specified using dot notation.
     */
    ErrorBag.prototype._scope = function _scope(field) {
        if (field.indexOf('.') > -1) {
            var ref = field.split('.');
            var scope = ref[0];
            var name = ref.slice(1);

            return { name: name.join('.'), scope: scope };
        }

        return null;
    };

    //

    var Dictionary = function Dictionary(dictionary) {
        if (dictionary === void 0) dictionary = {};

        this.container = {};
        this.merge(dictionary);
    };

    Dictionary.prototype.hasLocale = function hasLocale(locale) {
        return !!this.container[locale];
    };

    Dictionary.prototype.setDateFormat = function setDateFormat(locale, format) {
        if (!this.container[locale]) {
            this.container[locale] = {};
        }

        this.container[locale].dateFormat = format;
    };

    Dictionary.prototype.getDateFormat = function getDateFormat(locale) {
        if (!this.container[locale]) {
            return undefined;
        }

        return this.container[locale].dateFormat;
    };

    Dictionary.prototype.getMessage = function getMessage(locale, key, fallback) {
        if (!this.hasMessage(locale, key)) {
            return fallback || this._getDefaultMessage(locale);
        }

        return this.container[locale].messages[key];
    };

    /**
     * Gets a specific message for field. falls back to the rule message.
     */
    Dictionary.prototype.getFieldMessage = function getFieldMessage(locale, field, key) {
        if (!this.hasLocale(locale)) {
            return this.getMessage(locale, key);
        }

        var dict = this.container[locale].custom && this.container[locale].custom[field];
        if (!dict || !dict[key]) {
            return this.getMessage(locale, key);
        }

        return dict[key];
    };

    Dictionary.prototype._getDefaultMessage = function _getDefaultMessage(locale) {
        if (this.hasMessage(locale, '_default')) {
            return this.container[locale].messages._default;
        }

        return this.container.en.messages._default;
    };

    Dictionary.prototype.getAttribute = function getAttribute(locale, key, fallback) {
        if (fallback === void 0) fallback = '';

        if (!this.hasAttribute(locale, key)) {
            return fallback;
        }

        return this.container[locale].attributes[key];
    };

    Dictionary.prototype.hasMessage = function hasMessage(locale, key) {
        return !!(this.hasLocale(locale) && this.container[locale].messages && this.container[locale].messages[key]);
    };

    Dictionary.prototype.hasAttribute = function hasAttribute(locale, key) {
        return !!(this.hasLocale(locale) && this.container[locale].attributes && this.container[locale].attributes[key]);
    };

    Dictionary.prototype.merge = function merge(dictionary) {
        this._merge(this.container, dictionary);
    };

    Dictionary.prototype.setMessage = function setMessage(locale, key, message) {
        if (!this.hasLocale(locale)) {
            this.container[locale] = {
                messages: {},
                attributes: {}
            };
        }

        this.container[locale].messages[key] = message;
    };

    Dictionary.prototype.setAttribute = function setAttribute(locale, key, attribute) {
        if (!this.hasLocale(locale)) {
            this.container[locale] = {
                messages: {},
                attributes: {}
            };
        }

        this.container[locale].attributes[key] = attribute;
    };

    Dictionary.prototype._merge = function _merge(target, source) {
        var this$1 = this;

        if (!(isObject(target) && isObject(source))) {
            return target;
        }

        Object.keys(source).forEach(function (key) {
            if (isObject(source[key])) {
                if (!target[key]) {
                    assign(target, (obj = {}, obj[key] = {}, obj));
                    var obj;
                }

                this$1._merge(target[key], source[key]);
                return;
            }

            assign(target, (obj$1 = {}, obj$1[key] = source[key], obj$1));
            var obj$1;
        });

        return target;
    };

    //

    var defaultConfig = {
        locale: 'en',
        delay: 0,
        errorBagName: 'errors',
        dictionary: null,
        strict: true,
        fieldsBagName: 'fields',
        classes: false,
        classNames: null,
        events: 'input|blur',
        inject: true,
        fastExit: true,
        aria: true,
        validity: false
    };

    var currentConfig = assign({}, defaultConfig);

    var Config = function Config() {};

    var staticAccessors$1 = { default: {}, current: {} };

    staticAccessors$1.default.get = function () {
        return defaultConfig;
    };

    staticAccessors$1.current.get = function () {
        return currentConfig;
    };

    /**
     * Merges the config with a new one.
     */
    Config.merge = function merge(config) {
        currentConfig = assign({}, currentConfig, config);
    };

    /**
     * Resolves the working config from a Vue instance.
     */
    Config.resolve = function resolve(context) {
        var selfConfig = getPath('$options.$_veeValidate', context, {});

        return assign({}, Config.current, selfConfig);
    };

    Object.defineProperties(Config, staticAccessors$1);

    /**
     * Generates the options required to construct a field.
     */
    var Generator = function Generator() {};

    Generator.generate = function generate(el, binding, vnode) {
        var model = Generator.resolveModel(binding, vnode);
        var options = Config.resolve(vnode.context);

        return {
            name: Generator.resolveName(el, vnode),
            el: el,
            listen: !binding.modifiers.disable,
            scope: Generator.resolveScope(el, binding, vnode),
            vm: Generator.makeVM(vnode.context),
            expression: binding.value,
            component: vnode.child,
            classes: options.classes,
            classNames: options.classNames,
            getter: Generator.resolveGetter(el, vnode, model),
            events: Generator.resolveEvents(el, vnode) || options.events,
            model: model,
            delay: Generator.resolveDelay(el, vnode, options),
            rules: Generator.resolveRules(el, binding),
            initial: !!binding.modifiers.initial,
            validity: options.validity,
            aria: options.aria,
            initialValue: Generator.resolveInitialValue(vnode)
        };
    };

    Generator.getCtorConfig = function getCtorConfig(vnode) {
        if (!vnode.child) {
            return null;
        }

        var config = getPath('child.$options.$_veeValidate', vnode);

        return config;
    };

    /**
     *
     * @param {*} el
     * @param {*} binding
     */
    Generator.resolveRules = function resolveRules(el, binding) {
        if (!binding || !binding.expression) {
            return getDataAttribute(el, 'rules');
        }

        if (typeof binding.value === 'string') {
            return binding.value;
        }

        if (~['string', 'object'].indexOf(_typeof2(binding.value.rules))) {
            return binding.value.rules;
        }

        return binding.value;
    };

    /**
     * @param {*} vnode
     */
    Generator.resolveInitialValue = function resolveInitialValue(vnode) {
        var model = vnode.data.model || find(vnode.data.directives, function (d) {
            return d.name === 'model';
        });

        return model && model.value;
    };

    /**
     * Creates a non-circular partial VM instance from a Vue instance.
     * @param {*} vm
     */
    Generator.makeVM = function makeVM(vm) {
        return {
            get $el() {
                return vm.$el;
            },
            get $refs() {
                return vm.$refs;
            },
            $watch: vm.$watch ? vm.$watch.bind(vm) : function () {},
            $validator: vm.$validator ? {
                errors: vm.$validator.errors,
                validate: vm.$validator.validate.bind(vm.$validator),
                update: vm.$validator.update.bind(vm.$validator)
            } : null
        };
    };

    /**
     * Resolves the delay value.
     * @param {*} el
     * @param {*} vnode
     * @param {Object} options
     */
    Generator.resolveDelay = function resolveDelay(el, vnode, options) {
        var delay = getDataAttribute(el, 'delay');
        var globalDelay = options && 'delay' in options ? options.delay : 0;

        if (!delay && vnode.child && vnode.child.$attrs) {
            delay = vnode.child.$attrs['data-vv-delay'];
        }

        return delay ? { local: { input: parseInt(delay) }, global: deepParseInt(globalDelay) } : { global: deepParseInt(globalDelay) };
    };

    /**
     * Resolves the events to validate in response to.
     * @param {*} el
     * @param {*} vnode
     */
    Generator.resolveEvents = function resolveEvents(el, vnode) {
        var events = getDataAttribute(el, 'validate-on');

        if (!events && vnode.child && vnode.child.$attrs) {
            events = vnode.child.$attrs['data-vv-validate-on'];
        }

        if (!events && vnode.child) {
            var config = Generator.getCtorConfig(vnode);
            events = config && config.events;
        }

        return events;
    };

    /**
     * Resolves the scope for the field.
     * @param {*} el
     * @param {*} binding
     */
    Generator.resolveScope = function resolveScope(el, binding, vnode) {
        if (vnode === void 0) vnode = {};

        var scope = null;
        if (isObject(binding.value)) {
            scope = binding.value.scope;
        }

        if (vnode.child && isNullOrUndefined(scope)) {
            scope = vnode.child.$attrs && vnode.child.$attrs['data-vv-scope'];
        }

        return !isNullOrUndefined(scope) ? scope : getScope(el);
    };

    /**
     * Checks if the node directives contains a v-model or a specified arg.
     * Args take priority over models.
     *
     * @return {Object}
     */
    Generator.resolveModel = function resolveModel(binding, vnode) {
        if (binding.arg) {
            return binding.arg;
        }

        if (isObject(binding.value) && binding.value.arg) {
            return binding.value.arg;
        }

        var model = vnode.data.model || find(vnode.data.directives, function (d) {
            return d.name === 'model';
        });
        if (!model) {
            return null;
        }

        var watchable = /^[a-z_]+[0-9]*(\w*\.[a-z_]\w*)*$/i.test(model.expression) && hasPath(model.expression, vnode.context);

        if (!watchable) {
            return null;
        }

        return model.expression;
    };

    /**
     * Resolves the field name to trigger validations.
     * @return {String} The field name.
     */
    Generator.resolveName = function resolveName(el, vnode) {
        var name = getDataAttribute(el, 'name');

        if (!name && !vnode.child) {
            return el.name;
        }

        if (!name && vnode.child && vnode.child.$attrs) {
            name = vnode.child.$attrs['data-vv-name'] || vnode.child.$attrs['name'];
        }

        if (!name && vnode.child) {
            var config = Generator.getCtorConfig(vnode);
            if (config && isCallable(config.name)) {
                var boundGetter = config.name.bind(vnode.child);

                return boundGetter();
            }

            return vnode.child.name;
        }

        return name;
    };

    /**
     * Returns a value getter input type.
     */
    Generator.resolveGetter = function resolveGetter(el, vnode, model) {
        if (model) {
            return function () {
                return getPath(model, vnode.context);
            };
        }

        if (vnode.child) {
            var path = getDataAttribute(el, 'value-path') || vnode.child.$attrs && vnode.child.$attrs['data-vv-value-path'];
            if (path) {
                return function () {
                    return getPath(path, vnode.child);
                };
            }

            var config = Generator.getCtorConfig(vnode);
            if (config && isCallable(config.value)) {
                var boundGetter = config.value.bind(vnode.child);

                return function () {
                    return boundGetter();
                };
            }

            return function () {
                return vnode.child.value;
            };
        }

        switch (el.type) {
            case 'checkbox':
                return function () {
                    var els = document.querySelectorAll("input[name=\"" + el.name + "\"]");

                    els = toArray(els).filter(function (el) {
                        return el.checked;
                    });
                    if (!els.length) {
                        return undefined;
                    }

                    return els.map(function (checkbox) {
                        return checkbox.value;
                    });
                };
            case 'radio':
                return function () {
                    var els = document.querySelectorAll("input[name=\"" + el.name + "\"]");
                    var elm = find(els, function (el) {
                        return el.checked;
                    });

                    return elm && elm.value;
                };
            case 'file':
                return function (context) {
                    return toArray(el.files);
                };
            case 'select-multiple':
                return function () {
                    return toArray(el.options).filter(function (opt) {
                        return opt.selected;
                    }).map(function (opt) {
                        return opt.value;
                    });
                };
            default:
                return function () {
                    return el && el.value;
                };
        }
    };

    //

    var DEFAULT_OPTIONS = {
        targetOf: null,
        initial: false,
        scope: null,
        listen: true,
        name: null,
        active: true,
        required: false,
        rules: {},
        vm: null,
        classes: false,
        validity: true,
        aria: true,
        events: 'input|blur',
        delay: 0,
        classNames: {
            touched: 'touched', // the control has been blurred
            untouched: 'untouched', // the control hasn't been blurred
            valid: 'valid', // model is valid
            invalid: 'invalid', // model is invalid
            pristine: 'pristine', // control has not been interacted with
            dirty: 'dirty' // control has been interacted with
        }
    };

    var Field = function Field(el, options) {
        if (options === void 0) options = {};

        this.id = uniqId();
        this.el = el;
        this.updated = false;
        this.dependencies = [];
        this.watchers = [];
        this.events = [];
        this.delay = 0;
        this.rules = {};
        if (this.el && !options.targetOf) {
            setDataAttribute(this.el, 'id', this.id); // cache field id if it is independent and has a root element.
        }
        options = assign({}, DEFAULT_OPTIONS, options);
        this.validity = options.validity;
        this.aria = options.aria;
        this.flags = createFlags();
        this.vm = options.vm;
        this.component = options.component;
        this.ctorConfig = this.component ? getPath('$options.$_veeValidate', this.component) : undefined;
        this.update(options);
        this.updated = false;
    };

    var prototypeAccessors$1 = { validator: {}, isRequired: {}, isDisabled: {}, alias: {}, value: {}, rejectsFalse: {} };

    prototypeAccessors$1.validator.get = function () {
        if (!this.vm || !this.vm.$validator) {
            warn('No validator instance detected.');
            return { validate: function validate() {} };
        }

        return this.vm.$validator;
    };

    prototypeAccessors$1.isRequired.get = function () {
        return !!this.rules.required;
    };

    prototypeAccessors$1.isDisabled.get = function () {
        return !!(this.component && this.component.disabled) || !!(this.el && this.el.disabled);
    };

    /**
     * Gets the display name (user-friendly name).
     */
    prototypeAccessors$1.alias.get = function () {
        if (this._alias) {
            return this._alias;
        }

        var alias = null;
        if (this.el) {
            alias = getDataAttribute(this.el, 'as');
        }

        if (!alias && this.component) {
            return this.component.$attrs && this.component.$attrs['data-vv-as'];
        }

        return alias;
    };

    /**
     * Gets the input value.
     */

    prototypeAccessors$1.value.get = function () {
        if (!isCallable(this.getter)) {
            return undefined;
        }

        return this.getter();
    };

    /**
     * If the field rejects false as a valid value for the required rule.
     */

    prototypeAccessors$1.rejectsFalse.get = function () {
        if (this.component && this.ctorConfig) {
            return !!this.ctorConfig.rejectsFalse;
        }

        if (!this.el) {
            return false;
        }

        return this.el.type === 'checkbox';
    };

    /**
     * Determines if the instance matches the options provided.
     */
    Field.prototype.matches = function matches(options) {
        if (options.id) {
            return this.id === options.id;
        }

        if (options.name === undefined && options.scope === undefined) {
            return true;
        }

        if (options.scope === undefined) {
            return this.name === options.name;
        }

        if (options.name === undefined) {
            return this.scope === options.scope;
        }

        return options.name === this.name && options.scope === this.scope;
    };

    /**
     * Updates the field with changed data.
     */
    Field.prototype.update = function update(options) {
        this.targetOf = options.targetOf || null;
        this.initial = options.initial || this.initial || false;

        // update errors scope if the field scope was changed.
        if (!isNullOrUndefined(options.scope) && options.scope !== this.scope && isCallable(this.validator.update)) {
            this.validator.update(this.id, { scope: options.scope });
        }
        this.scope = !isNullOrUndefined(options.scope) ? options.scope : !isNullOrUndefined(this.scope) ? this.scope : null;
        this.name = (!isNullOrUndefined(options.name) ? String(options.name) : options.name) || this.name || null;
        this.rules = options.rules !== undefined ? normalizeRules(options.rules) : this.rules;
        this.model = options.model || this.model;
        this.listen = options.listen !== undefined ? options.listen : this.listen;
        this.classes = options.classes || this.classes || false;
        this.classNames = options.classNames || this.classNames || DEFAULT_OPTIONS.classNames;
        this.getter = isCallable(options.getter) ? options.getter : this.getter;
        this._alias = options.alias || this._alias;
        this.events = options.events ? makeEventsArray(options.events) : this.events;
        this.delay = options.delay ? makeDelayObject(this.events, options.delay) : makeDelayObject(this.events, this.delay);
        this.updateDependencies();
        this.addActionListeners();

        // update required flag flags
        if (options.rules !== undefined) {
            this.flags.required = this.isRequired;
        }

        // validate if it was validated before and field was updated and there was a rules mutation.
        if (this.flags.validated && options.rules !== undefined && this.updated) {
            this.validator.validate("#" + this.id);
        }

        this.updated = true;

        // no need to continue.
        if (!this.el) {
            return;
        }

        this.updateClasses();
        this.addValueListeners();
        this.updateAriaAttrs();
    };

    /**
     * Resets field flags and errors.
     */
    Field.prototype.reset = function reset() {
        var this$1 = this;

        var def = createFlags();
        Object.keys(this.flags).forEach(function (flag) {
            this$1.flags[flag] = def[flag];
        });

        this.addActionListeners();
        this.updateClasses();
        this.updateAriaAttrs();
        this.updateCustomValidity();
    };

    /**
     * Sets the flags and their negated counterparts, and updates the classes and re-adds action listeners.
     */
    Field.prototype.setFlags = function setFlags(flags) {
        var this$1 = this;

        var negated = {
            pristine: 'dirty',
            dirty: 'pristine',
            valid: 'invalid',
            invalid: 'valid',
            touched: 'untouched',
            untouched: 'touched'
        };

        Object.keys(flags).forEach(function (flag) {
            this$1.flags[flag] = flags[flag];
            // if it has a negation and was not specified, set it as well.
            if (negated[flag] && flags[negated[flag]] === undefined) {
                this$1.flags[negated[flag]] = !flags[flag];
            }
        });

        if (flags.untouched !== undefined || flags.touched !== undefined || flags.dirty !== undefined || flags.pristine !== undefined) {
            this.addActionListeners();
        }
        this.updateClasses();
        this.updateAriaAttrs();
        this.updateCustomValidity();
    };

    /**
     * Determines if the field requires references to target fields.
     */
    Field.prototype.updateDependencies = function updateDependencies() {
        var this$1 = this;

        // reset dependencies.
        this.dependencies.forEach(function (d) {
            return d.field.destroy();
        });
        this.dependencies = [];

        // we get the selectors for each field.
        var fields = Object.keys(this.rules).reduce(function (prev, r) {
            if (r === 'confirmed') {
                prev.push({ selector: this$1.rules[r][0] || this$1.name + "_confirmation", name: r });
            } else if (/after|before/.test(r)) {
                prev.push({ selector: this$1.rules[r][0], name: r });
            }

            return prev;
        }, []);

        if (!fields.length || !this.vm || !this.vm.$el) {
            return;
        }

        // must be contained within the same component, so we use the vm root element constrain our dom search.
        fields.forEach(function (ref) {
            var selector = ref.selector;
            var name = ref.name;

            var el = null;
            // vue ref selector.
            if (selector[0] === '$') {
                el = this$1.vm.$refs[selector.slice(1)];
            } else {
                try {
                    // try query selector
                    el = this$1.vm.$el.querySelector(selector);
                } catch (err) {
                    el = null;
                }
            }

            if (!el) {
                try {
                    el = this$1.vm.$el.querySelector("input[name=\"" + selector + "\"]");
                } catch (err) {
                    el = null;
                }
            }

            if (!el) {
                return;
            }

            var options = {
                vm: this$1.vm,
                classes: this$1.classes,
                classNames: this$1.classNames,
                delay: this$1.delay,
                scope: this$1.scope,
                events: this$1.events.join('|'),
                initial: this$1.initial,
                targetOf: this$1.id
            };

            // probably a component.
            if (isCallable(el.$watch)) {
                options.component = el;
                options.el = el.$el;
                options.getter = Generator.resolveGetter(el.$el, { child: el });
            } else {
                options.el = el;
                options.getter = Generator.resolveGetter(el, {});
            }

            this$1.dependencies.push({ name: name, field: new Field(options.el, options) });
        });
    };

    /**
     * Removes listeners.
     */
    Field.prototype.unwatch = function unwatch(tag) {
        if (tag === void 0) tag = null;

        if (!tag) {
            this.watchers.forEach(function (w) {
                return w.unwatch();
            });
            this.watchers = [];
            return;
        }

        this.watchers.filter(function (w) {
            return tag.test(w.tag);
        }).forEach(function (w) {
            return w.unwatch();
        });
        this.watchers = this.watchers.filter(function (w) {
            return !tag.test(w.tag);
        });
    };

    /**
     * Updates the element classes depending on each field flag status.
     */
    Field.prototype.updateClasses = function updateClasses() {
        if (!this.classes) {
            return;
        }

        toggleClass(this.el, this.classNames.dirty, this.flags.dirty);
        toggleClass(this.el, this.classNames.pristine, this.flags.pristine);
        toggleClass(this.el, this.classNames.valid, !!this.flags.valid);
        toggleClass(this.el, this.classNames.invalid, !!this.flags.invalid);
        toggleClass(this.el, this.classNames.touched, this.flags.touched);
        toggleClass(this.el, this.classNames.untouched, this.flags.untouched);
    };

    /**
     * Adds the listeners required for automatic classes and some flags.
     */
    Field.prototype.addActionListeners = function addActionListeners() {
        var this$1 = this;

        // remove previous listeners.
        this.unwatch(/class/);

        var onBlur = function onBlur() {
            this$1.flags.touched = true;
            this$1.flags.untouched = false;
            if (this$1.classes) {
                toggleClass(this$1.el, this$1.classNames.touched, true);
                toggleClass(this$1.el, this$1.classNames.untouched, false);
            }

            // only needed once.
            this$1.unwatch(/^class_blur$/);
        };

        var inputEvent = getInputEventName(this.el);
        var onInput = function onInput() {
            this$1.flags.dirty = true;
            this$1.flags.pristine = false;
            if (this$1.classes) {
                toggleClass(this$1.el, this$1.classNames.pristine, false);
                toggleClass(this$1.el, this$1.classNames.dirty, true);
            }

            // only needed once.
            this$1.unwatch(/^class_input$/);
        };

        if (this.component && isCallable(this.component.$once)) {
            this.component.$once('input', onInput);
            this.component.$once('blur', onBlur);
            this.watchers.push({
                tag: 'class_input',
                unwatch: function unwatch() {
                    this$1.component.$off('input', onInput);
                }
            });
            this.watchers.push({
                tag: 'class_blur',
                unwatch: function unwatch() {
                    this$1.component.$off('blur', onBlur);
                }
            });
            return;
        }

        if (!this.el) {
            return;
        }

        this.el.addEventListener(inputEvent, onInput);
        // Checkboxes and radio buttons on Mac don't emit blur naturally, so we listen on click instead.
        var blurEvent = ['radio', 'checkbox'].indexOf(this.el.type) === -1 ? 'blur' : 'click';
        this.el.addEventListener(blurEvent, onBlur);
        this.watchers.push({
            tag: 'class_input',
            unwatch: function unwatch() {
                this$1.el.removeEventListener(inputEvent, onInput);
            }
        });

        this.watchers.push({
            tag: 'class_blur',
            unwatch: function unwatch() {
                this$1.el.removeEventListener(blurEvent, onBlur);
            }
        });
    };

    /**
     * Adds the listeners required for validation.
     */
    Field.prototype.addValueListeners = function addValueListeners() {
        var this$1 = this;

        this.unwatch(/^input_.+/);
        if (!this.listen) {
            return;
        }

        var fn = this.targetOf ? function () {
            this$1.validator.validate("#" + this$1.targetOf);
        } : function () {
            var args = [],
                len = arguments.length;
            while (len--) {
                args[len] = arguments[len];
            } // if its a DOM event, resolve the value, otherwise use the first parameter as the value.
            if (args.length === 0 || isCallable(Event) && args[0] instanceof Event || args[0] && args[0].srcElement) {
                args[0] = this$1.value;
            }
            this$1.validator.validate("#" + this$1.id, args[0]);
        };

        var inputEvent = getInputEventName(this.el);
        // replace input event with suitable one.
        var events = this.events.map(function (e) {
            return e === 'input' ? inputEvent : e;
        });

        // if there is a watchable model and an on input validation is requested.
        if (this.model && events.indexOf(inputEvent) !== -1) {
            var debouncedFn = debounce(fn, this.delay[inputEvent]);
            var unwatch = this.vm.$watch(this.model, function () {
                var args = [],
                    len = arguments.length;
                while (len--) {
                    args[len] = arguments[len];
                }this$1.flags.pending = true;
                debouncedFn.apply(void 0, args);
            });
            this.watchers.push({
                tag: 'input_model',
                unwatch: unwatch
            });
            // filter out input event as it is already handled by the watcher API.
            events = events.filter(function (e) {
                return e !== inputEvent;
            });
        }

        // Add events.
        events.forEach(function (e) {
            var debouncedFn = debounce(fn, this$1.delay[e]);
            var validate = function validate() {
                var args = [],
                    len = arguments.length;
                while (len--) {
                    args[len] = arguments[len];
                }this$1.flags.pending = true;
                debouncedFn.apply(void 0, args);
            };

            if (this$1.component) {
                this$1.component.$on(e, validate);
                this$1.watchers.push({
                    tag: 'input_vue',
                    unwatch: function unwatch() {
                        this$1.component.$off(e, validate);
                    }
                });
                return;
            }

            if (~['radio', 'checkbox'].indexOf(this$1.el.type)) {
                var els = document.querySelectorAll("input[name=\"" + this$1.el.name + "\"]");
                toArray(els).forEach(function (el) {
                    el.addEventListener(e, validate);
                    this$1.watchers.push({
                        tag: 'input_native',
                        unwatch: function unwatch() {
                            el.removeEventListener(e, validate);
                        }
                    });
                });

                return;
            }

            this$1.el.addEventListener(e, validate);
            this$1.watchers.push({
                tag: 'input_native',
                unwatch: function unwatch() {
                    this$1.el.removeEventListener(e, validate);
                }
            });
        });
    };

    /**
     * Updates aria attributes on the element.
     */
    Field.prototype.updateAriaAttrs = function updateAriaAttrs() {
        if (!this.aria || !this.el || !isCallable(this.el.setAttribute)) {
            return;
        }

        this.el.setAttribute('aria-required', this.isRequired ? 'true' : 'false');
        this.el.setAttribute('aria-invalid', this.flags.invalid ? 'true' : 'false');
    };

    /**
     * Updates the custom validity for the field.
     */
    Field.prototype.updateCustomValidity = function updateCustomValidity() {
        if (!this.validity || !this.el || !isCallable(this.el.setCustomValidity)) {
            return;
        }

        this.el.setCustomValidity(this.flags.valid ? '' : this.validator.errors.firstById(this.id) || '');
    };

    /**
     * Removes all listeners.
     */
    Field.prototype.destroy = function destroy() {
        this.watchers.forEach(function (w) {
            return w.unwatch();
        });
        this.watchers = [];
        this.dependencies.forEach(function (d) {
            return d.field.destroy();
        });
        this.dependencies = [];
    };

    Object.defineProperties(Field.prototype, prototypeAccessors$1);

    //

    var FieldBag = function FieldBag() {
        this.items = [];
    };

    var prototypeAccessors$2 = { length: {} };

    /**
     * Gets the current items length.
     */

    prototypeAccessors$2.length.get = function () {
        return this.items.length;
    };

    /**
     * Finds the first field that matches the provided matcher object.
     */
    FieldBag.prototype.find = function find$1(matcher) {
        return find(this.items, function (item) {
            return item.matches(matcher);
        });
    };

    /**
     * Filters the items down to the matched fields.
     */
    FieldBag.prototype.filter = function filter(matcher) {
        // multiple matchers to be tried.
        if (Array.isArray(matcher)) {
            return this.items.filter(function (item) {
                return matcher.some(function (m) {
                    return item.matches(m);
                });
            });
        }

        return this.items.filter(function (item) {
            return item.matches(matcher);
        });
    };

    /**
     * Maps the field items using the mapping function.
     */
    FieldBag.prototype.map = function map(mapper) {
        return this.items.map(mapper);
    };

    /**
     * Finds and removes the first field that matches the provided matcher object, returns the removed item.
     */
    FieldBag.prototype.remove = function remove(matcher) {
        var item = null;
        if (matcher instanceof Field) {
            item = matcher;
        } else {
            item = this.find(matcher);
        }

        if (!item) {
            return null;
        }

        var index = this.items.indexOf(item);
        this.items.splice(index, 1);

        return item;
    };

    /**
     * Adds a field item to the list.
     */
    FieldBag.prototype.push = function push(item) {
        if (!(item instanceof Field)) {
            throw createError('FieldBag only accepts instances of Field that has an id defined.');
        }

        if (!item.id) {
            throw createError('Field id must be defined.');
        }

        if (this.find({ id: item.id })) {
            throw createError("Field with id " + item.id + " is already added.");
        }

        this.items.push(item);
    };

    Object.defineProperties(FieldBag.prototype, prototypeAccessors$2);

    //

    var RULES = {};
    var LOCALE = 'en';
    var STRICT_MODE = true;
    var DICTIONARY = new Dictionary({
        en: {
            messages: {},
            attributes: {},
            custom: {}
        }
    });

    var Validator = function Validator(validations, options) {
        var this$1 = this;
        if (options === void 0) options = { vm: null, fastExit: true };

        this.strict = STRICT_MODE;
        this.errors = new ErrorBag();
        this.fields = new FieldBag();
        this.flags = {};
        this._createFields(validations);
        this.paused = false;
        this.fastExit = options.fastExit || false;
        this.ownerId = options.vm && options.vm._uid;
        // create it statically since we don't need constant access to the vm.
        this.reset = options.vm && isCallable(options.vm.$nextTick) ? function () {
            return new Promise(function (resolve, reject) {
                options.vm.$nextTick(function () {
                    this$1.fields.items.forEach(function (i) {
                        return i.reset();
                    });
                    this$1.errors.clear();
                    resolve();
                });
            });
        } : function () {
            return new Promise(function (resolve, reject) {
                this$1.fields.items.forEach(function (i) {
                    return i.reset();
                });
                this$1.errors.clear();
                resolve();
            });
        };
        /* istanbul ignore next */
        this.clean = function () {
            warn('validator.clean is marked for deprecation, please use validator.reset instead.');
            this$1.reset();
        };
    };

    var prototypeAccessors = { dictionary: {}, locale: {}, rules: {} };
    var staticAccessors = { dictionary: {}, locale: {}, rules: {} };

    /**
     * Getter for the dictionary.
     */
    prototypeAccessors.dictionary.get = function () {
        return DICTIONARY;
    };

    /**
     * Static Getter for the dictionary.
     */
    staticAccessors.dictionary.get = function () {
        return DICTIONARY;
    };

    /**
     * Getter for the current locale.
     */
    prototypeAccessors.locale.get = function () {
        return LOCALE;
    };

    /**
     * Setter for the validator locale.
     */
    prototypeAccessors.locale.set = function (value) {
        Validator.locale = value;
    };

    /**
     * Static getter for the validator locale.
     */
    staticAccessors.locale.get = function () {
        return LOCALE;
    };

    /**
     * Static setter for the validator locale.
     */
    staticAccessors.locale.set = function (value) {
        /* istanbul ignore if */
        if (!DICTIONARY.hasLocale(value)) {
            // eslint-disable-next-line
            warn('You are setting the validator locale to a locale that is not defined in the dictionary. English messages may still be generated.');
        }

        LOCALE = value;
    };

    /**
     * Getter for the rules object.
     */
    prototypeAccessors.rules.get = function () {
        return RULES;
    };

    /**
     * Static Getter for the rules object.
     */
    staticAccessors.rules.get = function () {
        return RULES;
    };

    /**
     * Static constructor.
     */
    Validator.create = function create(validations, options) {
        return new Validator(validations, options);
    };

    /**
     * Adds a custom validator to the list of validation rules.
     */
    Validator.extend = function extend(name, validator) {
        Validator._guardExtend(name, validator);
        Validator._merge(name, validator);
    };

    /**
     * Removes a rule from the list of validators.
     */
    Validator.remove = function remove(name) {
        delete RULES[name];
    };

    /**
     * Sets the default locale for all validators.
     * @deprecated
     */
    Validator.setLocale = function setLocale(language) {
        if (language === void 0) language = 'en';

        Validator.locale = language;
    };

    /**
     * @deprecated
     */
    Validator.installDateTimeValidators = function installDateTimeValidators() {
        /* istanbul ignore next */
        warn('Date validations are now installed by default, you no longer need to install it.');
    };

    /**
     * @deprecated
     */
    Validator.prototype.installDateTimeValidators = function installDateTimeValidators() {
        /* istanbul ignore next */
        warn('Date validations are now installed by default, you no longer need to install it.');
    };

    /**
     * Sets the operating mode for all newly created validators.
     * strictMode = true: Values without a rule are invalid and cause failure.
     * strictMode = false: Values without a rule are valid and are skipped.
     */
    Validator.setStrictMode = function setStrictMode(strictMode) {
        if (strictMode === void 0) strictMode = true;

        STRICT_MODE = strictMode;
    };

    /**
     * Updates the dictionary, overwriting existing values and adding new ones.
     * @deprecated
     */
    Validator.updateDictionary = function updateDictionary(data) {
        DICTIONARY.merge(data);
    };

    /**
     * Adds a locale object to the dictionary.
     * @deprecated
     */
    Validator.addLocale = function addLocale(locale) {
        if (!locale.name) {
            warn('Your locale must have a name property');
            return;
        }

        this.updateDictionary((obj = {}, obj[locale.name] = locale, obj));
        var obj;
    };

    /**
     * Adds a locale object to the dictionary.
     * @deprecated
     * @param {Object} locale
     */
    Validator.prototype.addLocale = function addLocale(locale) {
        Validator.addLocale(locale);
    };

    /**
     * Adds and sets the current locale for the validator.
     */
    Validator.prototype.localize = function localize(lang, dictionary) {
        Validator.localize(lang, dictionary);
    };

    /**
     * Adds and sets the current locale for the validator.
     */
    Validator.localize = function localize(lang, dictionary) {
        // merge the dictionary.
        if (dictionary) {
            dictionary = assign({}, dictionary, { name: lang });
            Validator.addLocale(dictionary);
        }

        // set the locale.
        Validator.locale = lang;
    };

    /**
     * Registers a field to be validated.
     */
    Validator.prototype.attach = function attach(field) {
        // deprecate: handle old signature.
        if (arguments.length > 1) {
            field = assign({}, {
                name: arguments[0],
                rules: arguments[1]
            }, arguments[2] || { vm: { $validator: this } });
        }

        // fixes initial value detection with v-model and select elements.
        var value = field.initialValue;
        if (!(field instanceof Field)) {
            field = new Field(field.el || null, field);
        }

        this.fields.push(field);

        // validate the field initially
        if (field.initial) {
            this.validate("#" + field.id, value || field.value);
        } else {
            this._validate(field, value || field.value, true).then(function (result) {
                field.flags.valid = result.valid;
                field.flags.invalid = !result.valid;
            });
        }

        this._addFlag(field, field.scope);
        return field;
    };

    /**
     * Sets the flags on a field.
     */
    Validator.prototype.flag = function flag(name, flags) {
        var field = this._resolveField(name);
        if (!field || !flags) {
            return;
        }

        field.setFlags(flags);
    };

    /**
     * Removes a field from the validator.
     */
    Validator.prototype.detach = function detach(name, scope) {
        var field = name instanceof Field ? name : this._resolveField(name, scope);
        if (!field) {
            return;
        }

        field.destroy();
        this.errors.remove(field.name, field.scope, field.id);
        this.fields.remove(field);
        var flags = this.flags;
        if (!isNullOrUndefined(field.scope) && flags["$" + field.scope]) {
            delete flags["$" + field.scope][field.name];
        } else if (isNullOrUndefined(field.scope)) {
            delete flags[field.name];
        }

        this.flags = assign({}, flags);
    };

    /**
     * Adds a custom validator to the list of validation rules.
     */
    Validator.prototype.extend = function extend(name, validator) {
        Validator.extend(name, validator);
    };

    /**
     * Updates a field, updating both errors and flags.
     */
    Validator.prototype.update = function update(id, ref) {
        var scope = ref.scope;

        var field = this._resolveField("#" + id);
        if (!field) {
            return;
        }

        // remove old scope.
        this.errors.update(id, { scope: scope });
        if (!isNullOrUndefined(field.scope) && this.flags["$" + field.scope]) {
            delete this.flags["$" + field.scope][field.name];
        } else if (isNullOrUndefined(field.scope)) {
            delete this.flags[field.name];
        }

        this._addFlag(field, scope);
    };

    /**
     * Removes a rule from the list of validators.
     */
    Validator.prototype.remove = function remove(name) {
        Validator.remove(name);
    };

    /**
     * Sets the validator current language.
     * @deprecated
     */
    Validator.prototype.setLocale = function setLocale(language) {
        this.locale = language;
    };

    /**
     * Updates the messages dictionary, overwriting existing values and adding new ones.
     * @deprecated
     */
    Validator.prototype.updateDictionary = function updateDictionary(data) {
        Validator.updateDictionary(data);
    };

    /**
     * Validates a value against a registered field validations.
     */
    Validator.prototype.validate = function validate(name, value, scope) {
        var this$1 = this;
        if (scope === void 0) scope = null;

        if (this.paused) {
            return Promise.resolve(true);
        }

        // overload to validate all.
        if (arguments.length === 0) {
            return this.validateScopes();
        }

        // overload to validate scope-less fields.
        if (arguments.length === 1 && arguments[0] === '*') {
            return this.validateAll();
        }

        // overload to validate a scope.
        if (arguments.length === 1 && typeof arguments[0] === 'string' && /^(.+)\.\*$/.test(arguments[0])) {
            var matched = arguments[0].match(/^(.+)\.\*$/)[1];
            return this.validateAll(matched);
        }

        var field = this._resolveField(name, scope);
        if (!field) {
            return this._handleFieldNotFound(name, scope);
        }

        field.flags.pending = true;
        if (arguments.length === 1) {
            value = field.value;
        }

        var silentRun = field.isDisabled;

        return this._validate(field, value, silentRun).then(function (result) {
            field.setFlags({
                pending: false,
                valid: result.valid,
                validated: true
            });

            this$1.errors.remove(field.name, field.scope, field.id);
            if (silentRun) {
                return Promise.resolve(true);
            } else if (result.errors) {
                result.errors.forEach(function (e) {
                    return this$1.errors.add(e);
                });
            }

            return result.valid;
        });
    };

    /**
     * Pauses the validator.
     */
    Validator.prototype.pause = function pause() {
        this.paused = true;

        return this;
    };

    /**
     * Resumes the validator.
     */
    Validator.prototype.resume = function resume() {
        this.paused = false;

        return this;
    };

    /**
     * Validates each value against the corresponding field validations.
     */
    Validator.prototype.validateAll = function validateAll(values) {
        var arguments$1 = arguments;
        var this$1 = this;

        if (this.paused) {
            return Promise.resolve(true);
        }

        var matcher = null;
        var providedValues = false;

        if (typeof values === 'string') {
            matcher = { scope: values };
        } else if (isObject(values)) {
            matcher = Object.keys(values).map(function (key) {
                return { name: key, scope: arguments$1[1] || null };
            });
            providedValues = true;
        } else if (arguments.length === 0) {
            matcher = { scope: null }; // global scope.
        } else if (Array.isArray(values)) {
            matcher = values.map(function (key) {
                return { name: key, scope: arguments$1[1] || null };
            });
        }

        var promises = this.fields.filter(matcher).map(function (field) {
            return this$1.validate("#" + field.id, providedValues ? values[field.name] : field.value);
        });

        return Promise.all(promises).then(function (results) {
            return results.every(function (t) {
                return t;
            });
        });
    };

    /**
     * Validates all scopes.
     */
    Validator.prototype.validateScopes = function validateScopes() {
        var this$1 = this;

        if (this.paused) {
            return Promise.resolve(true);
        }

        var promises = this.fields.map(function (field) {
            return this$1.validate("#" + field.id, field.value);
        });

        return Promise.all(promises).then(function (results) {
            return results.every(function (t) {
                return t;
            });
        });
    };

    /**
     * Creates the fields to be validated.
     */
    Validator.prototype._createFields = function _createFields(validations) {
        var this$1 = this;

        if (!validations) {
            return;
        }

        Object.keys(validations).forEach(function (field) {
            var options = assign({}, { name: field, rules: validations[field] });
            this$1.attach(options);
        });
    };

    /**
     * Date rules need the existence of a format, so date_format must be supplied.
     */
    Validator.prototype._getDateFormat = function _getDateFormat(validations) {
        var format = null;
        if (validations.date_format && Array.isArray(validations.date_format)) {
            format = validations.date_format[0];
        }

        return format || this.dictionary.getDateFormat(this.locale);
    };

    /**
     * Checks if the passed rule is a date rule.
     */
    Validator.prototype._isADateRule = function _isADateRule(rule) {
        return !!~['after', 'before', 'date_between', 'date_format'].indexOf(rule);
    };

    /**
     * Formats an error message for field and a rule.
     */
    Validator.prototype._formatErrorMessage = function _formatErrorMessage(field, rule, data, targetName) {
        if (data === void 0) data = {};
        if (targetName === void 0) targetName = null;

        var name = this._getFieldDisplayName(field);
        var params = this._getLocalizedParams(rule, targetName);
        // Defaults to english message.
        if (!this.dictionary.hasLocale(LOCALE)) {
            var msg$1 = this.dictionary.getFieldMessage('en', field.name, rule.name);

            return isCallable(msg$1) ? msg$1(name, params, data) : msg$1;
        }

        var msg = this.dictionary.getFieldMessage(LOCALE, field.name, rule.name);

        return isCallable(msg) ? msg(name, params, data) : msg;
    };

    /**
     * Translates the parameters passed to the rule (mainly for target fields).
     */
    Validator.prototype._getLocalizedParams = function _getLocalizedParams(rule, targetName) {
        if (targetName === void 0) targetName = null;

        if (~['after', 'before', 'confirmed'].indexOf(rule.name) && rule.params && rule.params[0]) {
            var localizedName = targetName || this.dictionary.getAttribute(LOCALE, rule.params[0], rule.params[0]);
            return [localizedName].concat(rule.params.slice(1));
        }

        return rule.params;
    };

    /**
     * Resolves an appropriate display name, first checking 'data-as' or the registered 'prettyName'
     */
    Validator.prototype._getFieldDisplayName = function _getFieldDisplayName(field) {
        return field.alias || this.dictionary.getAttribute(LOCALE, field.name, field.name);
    };

    /**
     * Adds a field flags to the flags collection.
     */
    Validator.prototype._addFlag = function _addFlag(field, scope) {
        if (scope === void 0) scope = null;

        if (isNullOrUndefined(scope)) {
            this.flags = assign({}, this.flags, (obj = {}, obj["" + field.name] = field.flags, obj));
            var obj;
            return;
        }

        var scopeObj = assign({}, this.flags["$" + scope] || {}, (obj$1 = {}, obj$1["" + field.name] = field.flags, obj$1));
        var obj$1;
        this.flags = assign({}, this.flags, (obj$2 = {}, obj$2["$" + scope] = scopeObj, obj$2));
        var obj$2;
    };

    /**
     * Tests a single input value against a rule.
     */
    Validator.prototype._test = function _test(field, value, rule) {
        var this$1 = this;

        var validator = RULES[rule.name];
        var params = Array.isArray(rule.params) ? toArray(rule.params) : [];
        var targetName = null;
        if (!validator || typeof validator !== 'function') {
            throw createError("No such validator '" + rule.name + "' exists.");
        }

        // has field dependencies.
        if (/(confirmed|after|before)/.test(rule.name)) {
            var target = find(field.dependencies, function (d) {
                return d.name === rule.name;
            });
            if (target) {
                targetName = target.field.alias;
                params = [target.field.value].concat(params.slice(1));
            }
        } else if (rule.name === 'required' && field.rejectsFalse) {
            // invalidate false if no args were specified and the field rejects false by default.
            params = params.length ? params : [true];
        }

        if (this._isADateRule(rule.name)) {
            var dateFormat = this._getDateFormat(field.rules);
            if (rule.name !== 'date_format') {
                params.push(dateFormat);
            }
        }

        var result = validator(value, params);

        // If it is a promise.
        if (isCallable(result.then)) {
            return result.then(function (values) {
                var allValid = true;
                var data = {};
                if (Array.isArray(values)) {
                    allValid = values.every(function (t) {
                        return isObject(t) ? t.valid : t;
                    });
                } else {
                    // Is a single object/boolean.
                    allValid = isObject(values) ? values.valid : values;
                    data = values.data;
                }

                return {
                    valid: allValid,
                    error: allValid ? undefined : {
                        id: field.id,
                        field: field.name,
                        msg: this$1._formatErrorMessage(field, rule, data, targetName),
                        rule: rule.name,
                        scope: field.scope
                    }
                };
            });
        }

        if (!isObject(result)) {
            result = { valid: result, data: {} };
        }

        return {
            valid: result.valid,
            error: result.valid ? undefined : {
                id: field.id,
                field: field.name,
                msg: this._formatErrorMessage(field, rule, result.data, targetName),
                rule: rule.name,
                scope: field.scope
            }
        };
    };

    /**
     * Merges a validator object into the RULES and Messages.
     */
    Validator._merge = function _merge(name, validator) {
        if (isCallable(validator)) {
            RULES[name] = validator;
            return;
        }

        RULES[name] = validator.validate;
        if (isCallable(validator.getMessage)) {
            DICTIONARY.setMessage(LOCALE, name, validator.getMessage);
        }

        if (validator.messages) {
            DICTIONARY.merge(Object.keys(validator.messages).reduce(function (prev, curr) {
                var dict = prev;
                dict[curr] = {
                    messages: (obj = {}, obj[name] = validator.messages[curr], obj)
                };
                var obj;

                return dict;
            }, {}));
        }
    };

    /**
     * Guards from extension violations.
     */
    Validator._guardExtend = function _guardExtend(name, validator) {
        if (isCallable(validator)) {
            return;
        }

        if (!isCallable(validator.validate)) {
            throw createError(
            // eslint-disable-next-line
            "Extension Error: The validator '" + name + "' must be a function or have a 'validate' method.");
        }

        if (!isCallable(validator.getMessage) && !isObject(validator.messages)) {
            throw createError(
            // eslint-disable-next-line
            "Extension Error: The validator '" + name + "' must have a 'getMessage' method or have a 'messages' object.");
        }
    };

    /**
     * Tries different strategies to find a field.
     */
    Validator.prototype._resolveField = function _resolveField(name, scope) {
        if (!isNullOrUndefined(scope)) {
            return this.fields.find({ name: name, scope: scope });
        }

        if (name[0] === '#') {
            return this.fields.find({ id: name.slice(1) });
        }

        if (name.indexOf('.') > -1) {
            var ref = name.split('.');
            var fieldScope = ref[0];
            var fieldName = ref.slice(1);
            var field = this.fields.find({ name: fieldName.join('.'), scope: fieldScope });
            if (field) {
                return field;
            }
        }

        return this.fields.find({ name: name, scope: null });
    };

    /**
     * Handles when a field is not found depending on the strict flag.
     */
    Validator.prototype._handleFieldNotFound = function _handleFieldNotFound(name, scope) {
        if (!this.strict) {
            return Promise.resolve(true);
        }

        var fullName = isNullOrUndefined(scope) ? name : "" + (!isNullOrUndefined(scope) ? scope + '.' : '') + name;
        throw createError("Validating a non-existent field: \"" + fullName + "\". Use \"attach()\" first.");
    };

    /**
     * Starts the validation process.
     */
    Validator.prototype._validate = function _validate(field, value, silent) {
        var this$1 = this;
        if (silent === void 0) silent = false;

        if (!field.isRequired && (isNullOrUndefined(value) || value === '')) {
            return Promise.resolve({ valid: true });
        }

        var promises = [];
        var errors = [];
        var isExitEarly = false;
        // use of '.some()' is to break iteration in middle by returning true
        Object.keys(field.rules).some(function (rule) {
            var result = this$1._test(field, value, { name: rule, params: field.rules[rule] });
            if (isCallable(result.then)) {
                promises.push(result);
            } else if (this$1.fastExit && !result.valid) {
                errors.push(result.error);
                isExitEarly = true;
            } else {
                // promisify the result.
                promises.push(new Promise(function (resolve) {
                    resolve(result);
                }));
            }

            return isExitEarly;
        });

        if (isExitEarly) {
            return Promise.resolve({
                valid: false,
                errors: errors
            });
        }

        return Promise.all(promises).then(function (values) {
            return values.map(function (v) {
                if (!v.valid) {
                    errors.push(v.error);
                }

                return v.valid;
            }).every(function (t) {
                return t;
            });
        }).then(function (result) {
            return {
                valid: result,
                errors: errors
            };
        });
    };

    Object.defineProperties(Validator.prototype, prototypeAccessors);
    Object.defineProperties(Validator, staticAccessors);

    //

    /* istanbul ignore next */
    var fakeFlags = createProxy({}, {
        get: function get(target, key) {
            // is a scope
            if (String(key).indexOf('$') === 0) {
                return fakeFlags;
            }

            return createFlags();
        }
    });

    /**
     * Checks if a parent validator instance was requested.
     */
    var requestsValidator = function requestsValidator(injections) {
        if (!injections) {
            return false;
        }

        /* istanbul ignore next */
        if (Array.isArray(injections) && ~injections.indexOf('$validator')) {
            return true;
        }

        if (isObject(injections) && injections.$validator) {
            return true;
        }

        return false;
    };

    /**
     * Creates a validator instance.
     */
    var createValidator = function createValidator(vm, options) {
        return new Validator(null, { vm: vm, fastExit: options.fastExit });
    };

    var mixin = {
        provide: function provide() {
            if (this.$validator && !isBuiltInComponent(this.$vnode)) {
                return {
                    $validator: this.$validator
                };
            }

            return {};
        },
        beforeCreate: function beforeCreate() {
            // if built in do nothing.
            if (isBuiltInComponent(this.$vnode)) {
                return;
            }

            // if its a root instance set the config if it exists.
            if (!this.$parent) {
                Config.merge(this.$options.$_veeValidate || {});
            }

            var options = Config.resolve(this);
            var Vue = this.$options._base; // the vue constructor.
            // TODO: Deprecate
            /* istanbul ignore next */
            if (this.$options.$validates) {
                warn('The ctor $validates option has been deprecated please set the $_veeValidate.validator option to "new" instead');
                this.$validator = createValidator(this, options);
            }

            // if its a root instance, inject anyways, or if it requested a new instance.
            if (!this.$parent || this.$options.$_veeValidate && /new/.test(this.$options.$_veeValidate.validator)) {
                this.$validator = createValidator(this, options);
            }

            var requested = requestsValidator(this.$options.inject);

            // if automatic injection is enabled and no instance was requested.
            if (!this.$validator && options.inject && !requested) {
                this.$validator = createValidator(this, options);
            }

            // don't inject errors or fieldBag as no validator was resolved.
            if (!requested && !this.$validator) {
                return;
            }

            // There is a validator but it isn't injected, mark as reactive.
            if (!requested && this.$validator) {
                Vue.util.defineReactive(this.$validator, 'errors', this.$validator.errors);
                Vue.util.defineReactive(this.$validator, 'flags', this.$validator.flags);
            }

            if (!this.$options.computed) {
                this.$options.computed = {};
            }

            this.$options.computed[options.errorBagName || 'errors'] = function errorBagGetter() {
                return this.$validator.errors;
            };
            this.$options.computed[options.fieldsBagName || 'fields'] = function fieldBagGetter() {
                if (!Object.keys(this.$validator.flags).length) {
                    return fakeFlags;
                }

                return this.$validator.flags;
            };
        },

        beforeDestroy: function beforeDestroy() {
            if (isBuiltInComponent(this.$vnode)) {
                return;
            }

            // mark the validator paused to prevent delayed validation.
            if (this.$validator && this.$validator.ownerId === this._uid && isCallable(this.$validator.pause)) {
                this.$validator.pause();
            }
        }
    };

    //

    /**
     * Finds the requested field by id from the context object.
     */
    var findField = function findField(el, context) {
        if (!context || !context.$validator) {
            return null;
        }

        return context.$validator.fields.find({ id: getDataAttribute(el, 'id') });
    };

    var directive = {
        bind: function bind(el, binding, vnode) {
            var validator = vnode.context.$validator;
            if (!validator) {
                warn("No validator instance is present on vm, did you forget to inject '$validator'?");
                return;
            }

            var fieldOptions = Generator.generate(el, binding, vnode);
            validator.attach(fieldOptions);
        },
        inserted: function inserted(el, binding, vnode) {
            var field = findField(el, vnode.context);
            var scope = Generator.resolveScope(el, binding, vnode);

            // skip if scope hasn't changed.
            if (!field || scope === field.scope) {
                return;
            }

            // only update scope.
            field.update({ scope: scope });

            // allows the field to re-evaluated once more in the update hook.
            field.updated = false;
        },
        update: function update(el, binding, vnode) {
            var field = findField(el, vnode.context);

            // make sure we don't do unneccasary work if no important change was done.
            if (!field || field.updated && isEqual$1(binding.value, binding.oldValue)) {
                return;
            }
            var scope = Generator.resolveScope(el, binding, vnode);
            var rules = Generator.resolveRules(el, binding);

            field.update({
                scope: scope,
                rules: rules
            });
        },
        unbind: function unbind(el, binding, ref) {
            var context = ref.context;

            var field = findField(el, context);
            if (!field) {
                return;
            }

            context.$validator.detach(field);
        }
    };

    var Vue;

    function install(_Vue, options) {
        if (options === void 0) options = {};

        if (Vue) {
            warn('already installed, Vue.use(VeeValidate) should only be called once.');
            return;
        }

        Vue = _Vue;
        Config.merge(options);
        if (Config.current.dictionary) {
            Validator.updateDictionary(Config.current.dictionary);
        }

        if (options) {
            if (options.locale) {
                Validator.locale = options.locale;
            }

            if (options.strict) {
                Validator.setStrictMode(Config.current.strict);
            }
        }

        Vue.mixin(mixin);
        Vue.directive('validate', directive);
    }

    //

    function use(plugin, options) {
        if (options === void 0) options = {};

        if (!isCallable(plugin)) {
            return warn('The plugin must be a callable function');
        }

        plugin({ Validator: Validator, ErrorBag: ErrorBag, Rules: Validator.rules }, options);
    }

    //

    var normalize = function normalize(fields) {
        if (Array.isArray(fields)) {
            return fields.reduce(function (prev, curr) {
                if (~curr.indexOf('.')) {
                    prev[curr.split('.')[1]] = curr;
                } else {
                    prev[curr] = curr;
                }

                return prev;
            }, {});
        }

        return fields;
    };

    // Combines two flags using either AND or OR depending on the flag type.
    var combine = function combine(lhs, rhs) {
        var mapper = {
            pristine: function pristine(lhs, rhs) {
                return lhs && rhs;
            },
            dirty: function dirty(lhs, rhs) {
                return lhs || rhs;
            },
            touched: function touched(lhs, rhs) {
                return lhs || rhs;
            },
            untouched: function untouched(lhs, rhs) {
                return lhs && rhs;
            },
            valid: function valid(lhs, rhs) {
                return lhs && rhs;
            },
            invalid: function invalid(lhs, rhs) {
                return lhs || rhs;
            },
            pending: function pending(lhs, rhs) {
                return lhs || rhs;
            },
            required: function required(lhs, rhs) {
                return lhs || rhs;
            },
            validated: function validated(lhs, rhs) {
                return lhs && rhs;
            }
        };

        return Object.keys(mapper).reduce(function (flags, flag) {
            flags[flag] = mapper[flag](lhs[flag], rhs[flag]);

            return flags;
        }, {});
    };

    var mapScope = function mapScope(scope, deep) {
        if (deep === void 0) deep = true;

        return Object.keys(scope).reduce(function (flags, field) {
            if (!flags) {
                flags = assign({}, scope[field]);
                return flags;
            }

            // scope.
            var isScope = field.indexOf('$') === 0;
            if (deep && isScope) {
                flags = mapScope(scope[field]);
                return flags;
            } else if (!deep && isScope) {
                return flags;
            }

            flags = combine(flags, scope[field]);

            return flags;
        }, null);
    };

    /**
     * Maps fields to computed functions.
     */
    var mapFields = function mapFields(fields) {
        if (!fields) {
            return function () {
                return mapScope(this.$validator.flags);
            };
        }

        var normalized = normalize(fields);
        return Object.keys(normalized).reduce(function (prev, curr) {
            var field = normalized[curr];
            prev[curr] = function mappedField() {
                // if field exists
                if (this.$validator.flags[field]) {
                    return this.$validator.flags[field];
                }

                // scopeless fields were selected.
                if (normalized[curr] === '*') {
                    return mapScope(this.$validator.flags, false);
                }

                // if it has a scope defined
                var index = field.indexOf('.');
                if (index <= 0) {
                    return {};
                }

                var ref = field.split('.');
                var scope = ref[0];
                var name = ref.slice(1);

                scope = this.$validator.flags["$" + scope];
                name = name.join('.');

                // an entire scope was selected: scope.*
                if (name === '*' && scope) {
                    return mapScope(scope);
                }

                if (scope && scope[name]) {
                    return scope[name];
                }

                return {};
            };

            return prev;
        }, {});
    };

    var minimal$1 = {
        install: install,
        use: use,
        directive: directive,
        mixin: mixin,
        mapFields: mapFields,
        Validator: Validator,
        ErrorBag: ErrorBag,
        version: '2.0.0-rc.25'
    };

    // rules plugin definition.
    var rulesPlugin = function rulesPlugin(ref) {
        var Validator = ref.Validator;

        Object.keys(Rules).forEach(function (rule) {
            Validator.extend(rule, Rules[rule]);
        });

        // Merge the english messages.
        Validator.localize('en', locale$1);
    };

    // install the rules via the plugin API.
    minimal$1.use(rulesPlugin);

    minimal$1.Rules = Rules;

    return minimal$1;
});
