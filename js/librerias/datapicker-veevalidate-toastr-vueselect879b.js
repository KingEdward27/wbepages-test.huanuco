var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

//! moment.js
//! version : 2.18.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
!function (a, b) {
    "object" == (typeof exports === "undefined" ? "undefined" : _typeof2(exports)) && "undefined" != typeof module ? module.exports = b() : "function" == typeof define && define.amd ? define(b) : a.moment = b();
}(this, function () {
    "use strict";
    function a() {
        return sd.apply(null, arguments);
    }function b(a) {
        sd = a;
    }function c(a) {
        return a instanceof Array || "[object Array]" === Object.prototype.toString.call(a);
    }function d(a) {
        return null != a && "[object Object]" === Object.prototype.toString.call(a);
    }function e(a) {
        var b;for (b in a) {
            return !1;
        }return !0;
    }function f(a) {
        return void 0 === a;
    }function g(a) {
        return "number" == typeof a || "[object Number]" === Object.prototype.toString.call(a);
    }function h(a) {
        return a instanceof Date || "[object Date]" === Object.prototype.toString.call(a);
    }function i(a, b) {
        var c,
            d = [];for (c = 0; c < a.length; ++c) {
            d.push(b(a[c], c));
        }return d;
    }function j(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b);
    }function k(a, b) {
        for (var c in b) {
            j(b, c) && (a[c] = b[c]);
        }return j(b, "toString") && (a.toString = b.toString), j(b, "valueOf") && (a.valueOf = b.valueOf), a;
    }function l(a, b, c, d) {
        return sb(a, b, c, d, !0).utc();
    }function m() {
        return { empty: !1, unusedTokens: [], unusedInput: [], overflow: -2, charsLeftOver: 0, nullInput: !1, invalidMonth: null, invalidFormat: !1, userInvalidated: !1, iso: !1, parsedDateParts: [], meridiem: null, rfc2822: !1, weekdayMismatch: !1 };
    }function n(a) {
        return null == a._pf && (a._pf = m()), a._pf;
    }function o(a) {
        if (null == a._isValid) {
            var b = n(a),
                c = ud.call(b.parsedDateParts, function (a) {
                return null != a;
            }),
                d = !isNaN(a._d.getTime()) && b.overflow < 0 && !b.empty && !b.invalidMonth && !b.invalidWeekday && !b.nullInput && !b.invalidFormat && !b.userInvalidated && (!b.meridiem || b.meridiem && c);if (a._strict && (d = d && 0 === b.charsLeftOver && 0 === b.unusedTokens.length && void 0 === b.bigHour), null != Object.isFrozen && Object.isFrozen(a)) return d;a._isValid = d;
        }return a._isValid;
    }function p(a) {
        var b = l(NaN);return null != a ? k(n(b), a) : n(b).userInvalidated = !0, b;
    }function q(a, b) {
        var c, d, e;if (f(b._isAMomentObject) || (a._isAMomentObject = b._isAMomentObject), f(b._i) || (a._i = b._i), f(b._f) || (a._f = b._f), f(b._l) || (a._l = b._l), f(b._strict) || (a._strict = b._strict), f(b._tzm) || (a._tzm = b._tzm), f(b._isUTC) || (a._isUTC = b._isUTC), f(b._offset) || (a._offset = b._offset), f(b._pf) || (a._pf = n(b)), f(b._locale) || (a._locale = b._locale), vd.length > 0) for (c = 0; c < vd.length; c++) {
            d = vd[c], e = b[d], f(e) || (a[d] = e);
        }return a;
    }function r(b) {
        q(this, b), this._d = new Date(null != b._d ? b._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), wd === !1 && (wd = !0, a.updateOffset(this), wd = !1);
    }function s(a) {
        return a instanceof r || null != a && null != a._isAMomentObject;
    }function t(a) {
        return a < 0 ? Math.ceil(a) || 0 : Math.floor(a);
    }function u(a) {
        var b = +a,
            c = 0;return 0 !== b && isFinite(b) && (c = t(b)), c;
    }function v(a, b, c) {
        var d,
            e = Math.min(a.length, b.length),
            f = Math.abs(a.length - b.length),
            g = 0;for (d = 0; d < e; d++) {
            (c && a[d] !== b[d] || !c && u(a[d]) !== u(b[d])) && g++;
        }return g + f;
    }function w(b) {
        a.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + b);
    }function x(b, c) {
        var d = !0;return k(function () {
            if (null != a.deprecationHandler && a.deprecationHandler(null, b), d) {
                for (var e, f = [], g = 0; g < arguments.length; g++) {
                    if (e = "", "object" == _typeof2(arguments[g])) {
                        e += "\n[" + g + "] ";for (var h in arguments[0]) {
                            e += h + ": " + arguments[0][h] + ", ";
                        }e = e.slice(0, -2);
                    } else e = arguments[g];f.push(e);
                }w(b + "\nArguments: " + Array.prototype.slice.call(f).join("") + "\n" + new Error().stack), d = !1;
            }return c.apply(this, arguments);
        }, c);
    }function y(b, c) {
        null != a.deprecationHandler && a.deprecationHandler(b, c), xd[b] || (w(c), xd[b] = !0);
    }function z(a) {
        return a instanceof Function || "[object Function]" === Object.prototype.toString.call(a);
    }function A(a) {
        var b, c;for (c in a) {
            b = a[c], z(b) ? this[c] = b : this["_" + c] = b;
        }this._config = a, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source);
    }function B(a, b) {
        var c,
            e = k({}, a);for (c in b) {
            j(b, c) && (d(a[c]) && d(b[c]) ? (e[c] = {}, k(e[c], a[c]), k(e[c], b[c])) : null != b[c] ? e[c] = b[c] : delete e[c]);
        }for (c in a) {
            j(a, c) && !j(b, c) && d(a[c]) && (e[c] = k({}, e[c]));
        }return e;
    }function C(a) {
        null != a && this.set(a);
    }function D(a, b, c) {
        var d = this._calendar[a] || this._calendar.sameElse;return z(d) ? d.call(b, c) : d;
    }function E(a) {
        var b = this._longDateFormat[a],
            c = this._longDateFormat[a.toUpperCase()];return b || !c ? b : (this._longDateFormat[a] = c.replace(/MMMM|MM|DD|dddd/g, function (a) {
            return a.slice(1);
        }), this._longDateFormat[a]);
    }function F() {
        return this._invalidDate;
    }function G(a) {
        return this._ordinal.replace("%d", a);
    }function H(a, b, c, d) {
        var e = this._relativeTime[c];return z(e) ? e(a, b, c, d) : e.replace(/%d/i, a);
    }function I(a, b) {
        var c = this._relativeTime[a > 0 ? "future" : "past"];return z(c) ? c(b) : c.replace(/%s/i, b);
    }function J(a, b) {
        var c = a.toLowerCase();Hd[c] = Hd[c + "s"] = Hd[b] = a;
    }function K(a) {
        return "string" == typeof a ? Hd[a] || Hd[a.toLowerCase()] : void 0;
    }function L(a) {
        var b,
            c,
            d = {};for (c in a) {
            j(a, c) && (b = K(c), b && (d[b] = a[c]));
        }return d;
    }function M(a, b) {
        Id[a] = b;
    }function N(a) {
        var b = [];for (var c in a) {
            b.push({ unit: c, priority: Id[c] });
        }return b.sort(function (a, b) {
            return a.priority - b.priority;
        }), b;
    }function O(b, c) {
        return function (d) {
            return null != d ? (Q(this, b, d), a.updateOffset(this, c), this) : P(this, b);
        };
    }function P(a, b) {
        return a.isValid() ? a._d["get" + (a._isUTC ? "UTC" : "") + b]() : NaN;
    }function Q(a, b, c) {
        a.isValid() && a._d["set" + (a._isUTC ? "UTC" : "") + b](c);
    }function R(a) {
        return a = K(a), z(this[a]) ? this[a]() : this;
    }function S(a, b) {
        if ("object" == (typeof a === "undefined" ? "undefined" : _typeof2(a))) {
            a = L(a);for (var c = N(a), d = 0; d < c.length; d++) {
                this[c[d].unit](a[c[d].unit]);
            }
        } else if (a = K(a), z(this[a])) return this[a](b);return this;
    }function T(a, b, c) {
        var d = "" + Math.abs(a),
            e = b - d.length,
            f = a >= 0;return (f ? c ? "+" : "" : "-") + Math.pow(10, Math.max(0, e)).toString().substr(1) + d;
    }function U(a, b, c, d) {
        var e = d;"string" == typeof d && (e = function e() {
            return this[d]();
        }), a && (Md[a] = e), b && (Md[b[0]] = function () {
            return T(e.apply(this, arguments), b[1], b[2]);
        }), c && (Md[c] = function () {
            return this.localeData().ordinal(e.apply(this, arguments), a);
        });
    }function V(a) {
        return a.match(/\[[\s\S]/) ? a.replace(/^\[|\]$/g, "") : a.replace(/\\/g, "");
    }function W(a) {
        var b,
            c,
            d = a.match(Jd);for (b = 0, c = d.length; b < c; b++) {
            Md[d[b]] ? d[b] = Md[d[b]] : d[b] = V(d[b]);
        }return function (b) {
            var e,
                f = "";for (e = 0; e < c; e++) {
                f += z(d[e]) ? d[e].call(b, a) : d[e];
            }return f;
        };
    }function X(a, b) {
        return a.isValid() ? (b = Y(b, a.localeData()), Ld[b] = Ld[b] || W(b), Ld[b](a)) : a.localeData().invalidDate();
    }function Y(a, b) {
        function c(a) {
            return b.longDateFormat(a) || a;
        }var d = 5;for (Kd.lastIndex = 0; d >= 0 && Kd.test(a);) {
            a = a.replace(Kd, c), Kd.lastIndex = 0, d -= 1;
        }return a;
    }function Z(a, b, c) {
        ce[a] = z(b) ? b : function (a, d) {
            return a && c ? c : b;
        };
    }function $(a, b) {
        return j(ce, a) ? ce[a](b._strict, b._locale) : new RegExp(_(a));
    }function _(a) {
        return aa(a.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (a, b, c, d, e) {
            return b || c || d || e;
        }));
    }function aa(a) {
        return a.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
    }function ba(a, b) {
        var c,
            d = b;for ("string" == typeof a && (a = [a]), g(b) && (d = function d(a, c) {
            c[b] = u(a);
        }), c = 0; c < a.length; c++) {
            de[a[c]] = d;
        }
    }function ca(a, b) {
        ba(a, function (a, c, d, e) {
            d._w = d._w || {}, b(a, d._w, d, e);
        });
    }function da(a, b, c) {
        null != b && j(de, a) && de[a](b, c._a, c, a);
    }function ea(a, b) {
        return new Date(Date.UTC(a, b + 1, 0)).getUTCDate();
    }function fa(a, b) {
        return a ? c(this._months) ? this._months[a.month()] : this._months[(this._months.isFormat || oe).test(b) ? "format" : "standalone"][a.month()] : c(this._months) ? this._months : this._months.standalone;
    }function ga(a, b) {
        return a ? c(this._monthsShort) ? this._monthsShort[a.month()] : this._monthsShort[oe.test(b) ? "format" : "standalone"][a.month()] : c(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
    }function ha(a, b, c) {
        var d,
            e,
            f,
            g = a.toLocaleLowerCase();if (!this._monthsParse) for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], d = 0; d < 12; ++d) {
            f = l([2e3, d]), this._shortMonthsParse[d] = this.monthsShort(f, "").toLocaleLowerCase(), this._longMonthsParse[d] = this.months(f, "").toLocaleLowerCase();
        }return c ? "MMM" === b ? (e = ne.call(this._shortMonthsParse, g), e !== -1 ? e : null) : (e = ne.call(this._longMonthsParse, g), e !== -1 ? e : null) : "MMM" === b ? (e = ne.call(this._shortMonthsParse, g), e !== -1 ? e : (e = ne.call(this._longMonthsParse, g), e !== -1 ? e : null)) : (e = ne.call(this._longMonthsParse, g), e !== -1 ? e : (e = ne.call(this._shortMonthsParse, g), e !== -1 ? e : null));
    }function ia(a, b, c) {
        var d, e, f;if (this._monthsParseExact) return ha.call(this, a, b, c);for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), d = 0; d < 12; d++) {
            if (e = l([2e3, d]), c && !this._longMonthsParse[d] && (this._longMonthsParse[d] = new RegExp("^" + this.months(e, "").replace(".", "") + "$", "i"), this._shortMonthsParse[d] = new RegExp("^" + this.monthsShort(e, "").replace(".", "") + "$", "i")), c || this._monthsParse[d] || (f = "^" + this.months(e, "") + "|^" + this.monthsShort(e, ""), this._monthsParse[d] = new RegExp(f.replace(".", ""), "i")), c && "MMMM" === b && this._longMonthsParse[d].test(a)) return d;if (c && "MMM" === b && this._shortMonthsParse[d].test(a)) return d;if (!c && this._monthsParse[d].test(a)) return d;
        }
    }function ja(a, b) {
        var c;if (!a.isValid()) return a;if ("string" == typeof b) if (/^\d+$/.test(b)) b = u(b);else if (b = a.localeData().monthsParse(b), !g(b)) return a;return c = Math.min(a.date(), ea(a.year(), b)), a._d["set" + (a._isUTC ? "UTC" : "") + "Month"](b, c), a;
    }function ka(b) {
        return null != b ? (ja(this, b), a.updateOffset(this, !0), this) : P(this, "Month");
    }function la() {
        return ea(this.year(), this.month());
    }function ma(a) {
        return this._monthsParseExact ? (j(this, "_monthsRegex") || oa.call(this), a ? this._monthsShortStrictRegex : this._monthsShortRegex) : (j(this, "_monthsShortRegex") || (this._monthsShortRegex = re), this._monthsShortStrictRegex && a ? this._monthsShortStrictRegex : this._monthsShortRegex);
    }function na(a) {
        return this._monthsParseExact ? (j(this, "_monthsRegex") || oa.call(this), a ? this._monthsStrictRegex : this._monthsRegex) : (j(this, "_monthsRegex") || (this._monthsRegex = se), this._monthsStrictRegex && a ? this._monthsStrictRegex : this._monthsRegex);
    }function oa() {
        function a(a, b) {
            return b.length - a.length;
        }var b,
            c,
            d = [],
            e = [],
            f = [];for (b = 0; b < 12; b++) {
            c = l([2e3, b]), d.push(this.monthsShort(c, "")), e.push(this.months(c, "")), f.push(this.months(c, "")), f.push(this.monthsShort(c, ""));
        }for (d.sort(a), e.sort(a), f.sort(a), b = 0; b < 12; b++) {
            d[b] = aa(d[b]), e[b] = aa(e[b]);
        }for (b = 0; b < 24; b++) {
            f[b] = aa(f[b]);
        }this._monthsRegex = new RegExp("^(" + f.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + e.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + d.join("|") + ")", "i");
    }function pa(a) {
        return qa(a) ? 366 : 365;
    }function qa(a) {
        return a % 4 === 0 && a % 100 !== 0 || a % 400 === 0;
    }function ra() {
        return qa(this.year());
    }function sa(a, b, c, d, e, f, g) {
        var h = new Date(a, b, c, d, e, f, g);return a < 100 && a >= 0 && isFinite(h.getFullYear()) && h.setFullYear(a), h;
    }function ta(a) {
        var b = new Date(Date.UTC.apply(null, arguments));return a < 100 && a >= 0 && isFinite(b.getUTCFullYear()) && b.setUTCFullYear(a), b;
    }function ua(a, b, c) {
        var d = 7 + b - c,
            e = (7 + ta(a, 0, d).getUTCDay() - b) % 7;return -e + d - 1;
    }function va(a, b, c, d, e) {
        var f,
            g,
            h = (7 + c - d) % 7,
            i = ua(a, d, e),
            j = 1 + 7 * (b - 1) + h + i;return j <= 0 ? (f = a - 1, g = pa(f) + j) : j > pa(a) ? (f = a + 1, g = j - pa(a)) : (f = a, g = j), { year: f, dayOfYear: g };
    }function wa(a, b, c) {
        var d,
            e,
            f = ua(a.year(), b, c),
            g = Math.floor((a.dayOfYear() - f - 1) / 7) + 1;return g < 1 ? (e = a.year() - 1, d = g + xa(e, b, c)) : g > xa(a.year(), b, c) ? (d = g - xa(a.year(), b, c), e = a.year() + 1) : (e = a.year(), d = g), { week: d, year: e };
    }function xa(a, b, c) {
        var d = ua(a, b, c),
            e = ua(a + 1, b, c);return (pa(a) - d + e) / 7;
    }function ya(a) {
        return wa(a, this._week.dow, this._week.doy).week;
    }function za() {
        return this._week.dow;
    }function Aa() {
        return this._week.doy;
    }function Ba(a) {
        var b = this.localeData().week(this);return null == a ? b : this.add(7 * (a - b), "d");
    }function Ca(a) {
        var b = wa(this, 1, 4).week;return null == a ? b : this.add(7 * (a - b), "d");
    }function Da(a, b) {
        return "string" != typeof a ? a : isNaN(a) ? (a = b.weekdaysParse(a), "number" == typeof a ? a : null) : parseInt(a, 10);
    }function Ea(a, b) {
        return "string" == typeof a ? b.weekdaysParse(a) % 7 || 7 : isNaN(a) ? null : a;
    }function Fa(a, b) {
        return a ? c(this._weekdays) ? this._weekdays[a.day()] : this._weekdays[this._weekdays.isFormat.test(b) ? "format" : "standalone"][a.day()] : c(this._weekdays) ? this._weekdays : this._weekdays.standalone;
    }function Ga(a) {
        return a ? this._weekdaysShort[a.day()] : this._weekdaysShort;
    }function Ha(a) {
        return a ? this._weekdaysMin[a.day()] : this._weekdaysMin;
    }function Ia(a, b, c) {
        var d,
            e,
            f,
            g = a.toLocaleLowerCase();if (!this._weekdaysParse) for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], d = 0; d < 7; ++d) {
            f = l([2e3, 1]).day(d), this._minWeekdaysParse[d] = this.weekdaysMin(f, "").toLocaleLowerCase(), this._shortWeekdaysParse[d] = this.weekdaysShort(f, "").toLocaleLowerCase(), this._weekdaysParse[d] = this.weekdays(f, "").toLocaleLowerCase();
        }return c ? "dddd" === b ? (e = ne.call(this._weekdaysParse, g), e !== -1 ? e : null) : "ddd" === b ? (e = ne.call(this._shortWeekdaysParse, g), e !== -1 ? e : null) : (e = ne.call(this._minWeekdaysParse, g), e !== -1 ? e : null) : "dddd" === b ? (e = ne.call(this._weekdaysParse, g), e !== -1 ? e : (e = ne.call(this._shortWeekdaysParse, g), e !== -1 ? e : (e = ne.call(this._minWeekdaysParse, g), e !== -1 ? e : null))) : "ddd" === b ? (e = ne.call(this._shortWeekdaysParse, g), e !== -1 ? e : (e = ne.call(this._weekdaysParse, g), e !== -1 ? e : (e = ne.call(this._minWeekdaysParse, g), e !== -1 ? e : null))) : (e = ne.call(this._minWeekdaysParse, g), e !== -1 ? e : (e = ne.call(this._weekdaysParse, g), e !== -1 ? e : (e = ne.call(this._shortWeekdaysParse, g), e !== -1 ? e : null)));
    }function Ja(a, b, c) {
        var d, e, f;if (this._weekdaysParseExact) return Ia.call(this, a, b, c);for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), d = 0; d < 7; d++) {
            if (e = l([2e3, 1]).day(d), c && !this._fullWeekdaysParse[d] && (this._fullWeekdaysParse[d] = new RegExp("^" + this.weekdays(e, "").replace(".", ".?") + "$", "i"), this._shortWeekdaysParse[d] = new RegExp("^" + this.weekdaysShort(e, "").replace(".", ".?") + "$", "i"), this._minWeekdaysParse[d] = new RegExp("^" + this.weekdaysMin(e, "").replace(".", ".?") + "$", "i")), this._weekdaysParse[d] || (f = "^" + this.weekdays(e, "") + "|^" + this.weekdaysShort(e, "") + "|^" + this.weekdaysMin(e, ""), this._weekdaysParse[d] = new RegExp(f.replace(".", ""), "i")), c && "dddd" === b && this._fullWeekdaysParse[d].test(a)) return d;if (c && "ddd" === b && this._shortWeekdaysParse[d].test(a)) return d;if (c && "dd" === b && this._minWeekdaysParse[d].test(a)) return d;if (!c && this._weekdaysParse[d].test(a)) return d;
        }
    }function Ka(a) {
        if (!this.isValid()) return null != a ? this : NaN;var b = this._isUTC ? this._d.getUTCDay() : this._d.getDay();return null != a ? (a = Da(a, this.localeData()), this.add(a - b, "d")) : b;
    }function La(a) {
        if (!this.isValid()) return null != a ? this : NaN;var b = (this.day() + 7 - this.localeData()._week.dow) % 7;return null == a ? b : this.add(a - b, "d");
    }function Ma(a) {
        if (!this.isValid()) return null != a ? this : NaN;if (null != a) {
            var b = Ea(a, this.localeData());return this.day(this.day() % 7 ? b : b - 7);
        }return this.day() || 7;
    }function Na(a) {
        return this._weekdaysParseExact ? (j(this, "_weekdaysRegex") || Qa.call(this), a ? this._weekdaysStrictRegex : this._weekdaysRegex) : (j(this, "_weekdaysRegex") || (this._weekdaysRegex = ye), this._weekdaysStrictRegex && a ? this._weekdaysStrictRegex : this._weekdaysRegex);
    }function Oa(a) {
        return this._weekdaysParseExact ? (j(this, "_weekdaysRegex") || Qa.call(this), a ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (j(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = ze), this._weekdaysShortStrictRegex && a ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
    }function Pa(a) {
        return this._weekdaysParseExact ? (j(this, "_weekdaysRegex") || Qa.call(this), a ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (j(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Ae), this._weekdaysMinStrictRegex && a ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
    }function Qa() {
        function a(a, b) {
            return b.length - a.length;
        }var b,
            c,
            d,
            e,
            f,
            g = [],
            h = [],
            i = [],
            j = [];for (b = 0; b < 7; b++) {
            c = l([2e3, 1]).day(b), d = this.weekdaysMin(c, ""), e = this.weekdaysShort(c, ""), f = this.weekdays(c, ""), g.push(d), h.push(e), i.push(f), j.push(d), j.push(e), j.push(f);
        }for (g.sort(a), h.sort(a), i.sort(a), j.sort(a), b = 0; b < 7; b++) {
            h[b] = aa(h[b]), i[b] = aa(i[b]), j[b] = aa(j[b]);
        }this._weekdaysRegex = new RegExp("^(" + j.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + i.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + h.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + g.join("|") + ")", "i");
    }function Ra() {
        return this.hours() % 12 || 12;
    }function Sa() {
        return this.hours() || 24;
    }function Ta(a, b) {
        U(a, 0, 0, function () {
            return this.localeData().meridiem(this.hours(), this.minutes(), b);
        });
    }function Ua(a, b) {
        return b._meridiemParse;
    }function Va(a) {
        return "p" === (a + "").toLowerCase().charAt(0);
    }function Wa(a, b, c) {
        return a > 11 ? c ? "pm" : "PM" : c ? "am" : "AM";
    }function Xa(a) {
        return a ? a.toLowerCase().replace("_", "-") : a;
    }function Ya(a) {
        for (var b, c, d, e, f = 0; f < a.length;) {
            for (e = Xa(a[f]).split("-"), b = e.length, c = Xa(a[f + 1]), c = c ? c.split("-") : null; b > 0;) {
                if (d = Za(e.slice(0, b).join("-"))) return d;if (c && c.length >= b && v(e, c, !0) >= b - 1) break;b--;
            }f++;
        }return null;
    }function Za(a) {
        var b = null;if (!Fe[a] && "undefined" != typeof module && module && module.exports) try {
            b = Be._abbr, require("./locale/" + a), $a(b);
        } catch (a) {}return Fe[a];
    }function $a(a, b) {
        var c;return a && (c = f(b) ? bb(a) : _a(a, b), c && (Be = c)), Be._abbr;
    }function _a(a, b) {
        if (null !== b) {
            var c = Ee;if (b.abbr = a, null != Fe[a]) y("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), c = Fe[a]._config;else if (null != b.parentLocale) {
                if (null == Fe[b.parentLocale]) return Ge[b.parentLocale] || (Ge[b.parentLocale] = []), Ge[b.parentLocale].push({ name: a, config: b }), null;c = Fe[b.parentLocale]._config;
            }return Fe[a] = new C(B(c, b)), Ge[a] && Ge[a].forEach(function (a) {
                _a(a.name, a.config);
            }), $a(a), Fe[a];
        }return delete Fe[a], null;
    }function ab(a, b) {
        if (null != b) {
            var c,
                d = Ee;null != Fe[a] && (d = Fe[a]._config), b = B(d, b), c = new C(b), c.parentLocale = Fe[a], Fe[a] = c, $a(a);
        } else null != Fe[a] && (null != Fe[a].parentLocale ? Fe[a] = Fe[a].parentLocale : null != Fe[a] && delete Fe[a]);return Fe[a];
    }function bb(a) {
        var b;if (a && a._locale && a._locale._abbr && (a = a._locale._abbr), !a) return Be;if (!c(a)) {
            if (b = Za(a)) return b;a = [a];
        }return Ya(a);
    }function cb() {
        return Ad(Fe);
    }function db(a) {
        var b,
            c = a._a;return c && n(a).overflow === -2 && (b = c[fe] < 0 || c[fe] > 11 ? fe : c[ge] < 1 || c[ge] > ea(c[ee], c[fe]) ? ge : c[he] < 0 || c[he] > 24 || 24 === c[he] && (0 !== c[ie] || 0 !== c[je] || 0 !== c[ke]) ? he : c[ie] < 0 || c[ie] > 59 ? ie : c[je] < 0 || c[je] > 59 ? je : c[ke] < 0 || c[ke] > 999 ? ke : -1, n(a)._overflowDayOfYear && (b < ee || b > ge) && (b = ge), n(a)._overflowWeeks && b === -1 && (b = le), n(a)._overflowWeekday && b === -1 && (b = me), n(a).overflow = b), a;
    }function eb(a) {
        var b,
            c,
            d,
            e,
            f,
            g,
            h = a._i,
            i = He.exec(h) || Ie.exec(h);if (i) {
            for (n(a).iso = !0, b = 0, c = Ke.length; b < c; b++) {
                if (Ke[b][1].exec(i[1])) {
                    e = Ke[b][0], d = Ke[b][2] !== !1;break;
                }
            }if (null == e) return void (a._isValid = !1);if (i[3]) {
                for (b = 0, c = Le.length; b < c; b++) {
                    if (Le[b][1].exec(i[3])) {
                        f = (i[2] || " ") + Le[b][0];break;
                    }
                }if (null == f) return void (a._isValid = !1);
            }if (!d && null != f) return void (a._isValid = !1);if (i[4]) {
                if (!Je.exec(i[4])) return void (a._isValid = !1);g = "Z";
            }a._f = e + (f || "") + (g || ""), lb(a);
        } else a._isValid = !1;
    }function fb(a) {
        var b,
            c,
            d,
            e,
            f,
            g,
            h,
            i,
            j = { " GMT": " +0000", " EDT": " -0400", " EST": " -0500", " CDT": " -0500", " CST": " -0600", " MDT": " -0600", " MST": " -0700", " PDT": " -0700", " PST": " -0800" },
            k = "YXWVUTSRQPONZABCDEFGHIKLM";if (b = a._i.replace(/\([^\)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s|\s$/g, ""), c = Ne.exec(b)) {
            if (d = c[1] ? "ddd" + (5 === c[1].length ? ", " : " ") : "", e = "D MMM " + (c[2].length > 10 ? "YYYY " : "YY "), f = "HH:mm" + (c[4] ? ":ss" : ""), c[1]) {
                var l = new Date(c[2]),
                    m = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][l.getDay()];if (c[1].substr(0, 3) !== m) return n(a).weekdayMismatch = !0, void (a._isValid = !1);
            }switch (c[5].length) {case 2:
                    0 === i ? h = " +0000" : (i = k.indexOf(c[5][1].toUpperCase()) - 12, h = (i < 0 ? " -" : " +") + ("" + i).replace(/^-?/, "0").match(/..$/)[0] + "00");break;case 4:
                    h = j[c[5]];break;default:
                    h = j[" GMT"];}c[5] = h, a._i = c.splice(1).join(""), g = " ZZ", a._f = d + e + f + g, lb(a), n(a).rfc2822 = !0;
        } else a._isValid = !1;
    }function gb(b) {
        var c = Me.exec(b._i);return null !== c ? void (b._d = new Date(+c[1])) : (eb(b), void (b._isValid === !1 && (delete b._isValid, fb(b), b._isValid === !1 && (delete b._isValid, a.createFromInputFallback(b)))));
    }function hb(a, b, c) {
        return null != a ? a : null != b ? b : c;
    }function ib(b) {
        var c = new Date(a.now());return b._useUTC ? [c.getUTCFullYear(), c.getUTCMonth(), c.getUTCDate()] : [c.getFullYear(), c.getMonth(), c.getDate()];
    }function jb(a) {
        var b,
            c,
            d,
            e,
            f = [];if (!a._d) {
            for (d = ib(a), a._w && null == a._a[ge] && null == a._a[fe] && kb(a), null != a._dayOfYear && (e = hb(a._a[ee], d[ee]), (a._dayOfYear > pa(e) || 0 === a._dayOfYear) && (n(a)._overflowDayOfYear = !0), c = ta(e, 0, a._dayOfYear), a._a[fe] = c.getUTCMonth(), a._a[ge] = c.getUTCDate()), b = 0; b < 3 && null == a._a[b]; ++b) {
                a._a[b] = f[b] = d[b];
            }for (; b < 7; b++) {
                a._a[b] = f[b] = null == a._a[b] ? 2 === b ? 1 : 0 : a._a[b];
            }24 === a._a[he] && 0 === a._a[ie] && 0 === a._a[je] && 0 === a._a[ke] && (a._nextDay = !0, a._a[he] = 0), a._d = (a._useUTC ? ta : sa).apply(null, f), null != a._tzm && a._d.setUTCMinutes(a._d.getUTCMinutes() - a._tzm), a._nextDay && (a._a[he] = 24);
        }
    }function kb(a) {
        var b, c, d, e, f, g, h, i;if (b = a._w, null != b.GG || null != b.W || null != b.E) f = 1, g = 4, c = hb(b.GG, a._a[ee], wa(tb(), 1, 4).year), d = hb(b.W, 1), e = hb(b.E, 1), (e < 1 || e > 7) && (i = !0);else {
            f = a._locale._week.dow, g = a._locale._week.doy;var j = wa(tb(), f, g);c = hb(b.gg, a._a[ee], j.year), d = hb(b.w, j.week), null != b.d ? (e = b.d, (e < 0 || e > 6) && (i = !0)) : null != b.e ? (e = b.e + f, (b.e < 0 || b.e > 6) && (i = !0)) : e = f;
        }d < 1 || d > xa(c, f, g) ? n(a)._overflowWeeks = !0 : null != i ? n(a)._overflowWeekday = !0 : (h = va(c, d, e, f, g), a._a[ee] = h.year, a._dayOfYear = h.dayOfYear);
    }function lb(b) {
        if (b._f === a.ISO_8601) return void eb(b);if (b._f === a.RFC_2822) return void fb(b);b._a = [], n(b).empty = !0;var c,
            d,
            e,
            f,
            g,
            h = "" + b._i,
            i = h.length,
            j = 0;for (e = Y(b._f, b._locale).match(Jd) || [], c = 0; c < e.length; c++) {
            f = e[c], d = (h.match($(f, b)) || [])[0], d && (g = h.substr(0, h.indexOf(d)), g.length > 0 && n(b).unusedInput.push(g), h = h.slice(h.indexOf(d) + d.length), j += d.length), Md[f] ? (d ? n(b).empty = !1 : n(b).unusedTokens.push(f), da(f, d, b)) : b._strict && !d && n(b).unusedTokens.push(f);
        }n(b).charsLeftOver = i - j, h.length > 0 && n(b).unusedInput.push(h), b._a[he] <= 12 && n(b).bigHour === !0 && b._a[he] > 0 && (n(b).bigHour = void 0), n(b).parsedDateParts = b._a.slice(0), n(b).meridiem = b._meridiem, b._a[he] = mb(b._locale, b._a[he], b._meridiem), jb(b), db(b);
    }function mb(a, b, c) {
        var d;return null == c ? b : null != a.meridiemHour ? a.meridiemHour(b, c) : null != a.isPM ? (d = a.isPM(c), d && b < 12 && (b += 12), d || 12 !== b || (b = 0), b) : b;
    }function nb(a) {
        var b, c, d, e, f;if (0 === a._f.length) return n(a).invalidFormat = !0, void (a._d = new Date(NaN));for (e = 0; e < a._f.length; e++) {
            f = 0, b = q({}, a), null != a._useUTC && (b._useUTC = a._useUTC), b._f = a._f[e], lb(b), o(b) && (f += n(b).charsLeftOver, f += 10 * n(b).unusedTokens.length, n(b).score = f, (null == d || f < d) && (d = f, c = b));
        }k(a, c || b);
    }function ob(a) {
        if (!a._d) {
            var b = L(a._i);a._a = i([b.year, b.month, b.day || b.date, b.hour, b.minute, b.second, b.millisecond], function (a) {
                return a && parseInt(a, 10);
            }), jb(a);
        }
    }function pb(a) {
        var b = new r(db(qb(a)));return b._nextDay && (b.add(1, "d"), b._nextDay = void 0), b;
    }function qb(a) {
        var b = a._i,
            d = a._f;return a._locale = a._locale || bb(a._l), null === b || void 0 === d && "" === b ? p({ nullInput: !0 }) : ("string" == typeof b && (a._i = b = a._locale.preparse(b)), s(b) ? new r(db(b)) : (h(b) ? a._d = b : c(d) ? nb(a) : d ? lb(a) : rb(a), o(a) || (a._d = null), a));
    }function rb(b) {
        var e = b._i;f(e) ? b._d = new Date(a.now()) : h(e) ? b._d = new Date(e.valueOf()) : "string" == typeof e ? gb(b) : c(e) ? (b._a = i(e.slice(0), function (a) {
            return parseInt(a, 10);
        }), jb(b)) : d(e) ? ob(b) : g(e) ? b._d = new Date(e) : a.createFromInputFallback(b);
    }function sb(a, b, f, g, h) {
        var i = {};return f !== !0 && f !== !1 || (g = f, f = void 0), (d(a) && e(a) || c(a) && 0 === a.length) && (a = void 0), i._isAMomentObject = !0, i._useUTC = i._isUTC = h, i._l = f, i._i = a, i._f = b, i._strict = g, pb(i);
    }function tb(a, b, c, d) {
        return sb(a, b, c, d, !1);
    }function ub(a, b) {
        var d, e;if (1 === b.length && c(b[0]) && (b = b[0]), !b.length) return tb();for (d = b[0], e = 1; e < b.length; ++e) {
            b[e].isValid() && !b[e][a](d) || (d = b[e]);
        }return d;
    }function vb() {
        var a = [].slice.call(arguments, 0);return ub("isBefore", a);
    }function wb() {
        var a = [].slice.call(arguments, 0);return ub("isAfter", a);
    }function xb(a) {
        for (var b in a) {
            if (Re.indexOf(b) === -1 || null != a[b] && isNaN(a[b])) return !1;
        }for (var c = !1, d = 0; d < Re.length; ++d) {
            if (a[Re[d]]) {
                if (c) return !1;parseFloat(a[Re[d]]) !== u(a[Re[d]]) && (c = !0);
            }
        }return !0;
    }function yb() {
        return this._isValid;
    }function zb() {
        return Sb(NaN);
    }function Ab(a) {
        var b = L(a),
            c = b.year || 0,
            d = b.quarter || 0,
            e = b.month || 0,
            f = b.week || 0,
            g = b.day || 0,
            h = b.hour || 0,
            i = b.minute || 0,
            j = b.second || 0,
            k = b.millisecond || 0;this._isValid = xb(b), this._milliseconds = +k + 1e3 * j + 6e4 * i + 1e3 * h * 60 * 60, this._days = +g + 7 * f, this._months = +e + 3 * d + 12 * c, this._data = {}, this._locale = bb(), this._bubble();
    }function Bb(a) {
        return a instanceof Ab;
    }function Cb(a) {
        return a < 0 ? Math.round(-1 * a) * -1 : Math.round(a);
    }function Db(a, b) {
        U(a, 0, 0, function () {
            var a = this.utcOffset(),
                c = "+";return a < 0 && (a = -a, c = "-"), c + T(~~(a / 60), 2) + b + T(~~a % 60, 2);
        });
    }function Eb(a, b) {
        var c = (b || "").match(a);if (null === c) return null;var d = c[c.length - 1] || [],
            e = (d + "").match(Se) || ["-", 0, 0],
            f = +(60 * e[1]) + u(e[2]);return 0 === f ? 0 : "+" === e[0] ? f : -f;
    }function Fb(b, c) {
        var d, e;return c._isUTC ? (d = c.clone(), e = (s(b) || h(b) ? b.valueOf() : tb(b).valueOf()) - d.valueOf(), d._d.setTime(d._d.valueOf() + e), a.updateOffset(d, !1), d) : tb(b).local();
    }function Gb(a) {
        return 15 * -Math.round(a._d.getTimezoneOffset() / 15);
    }function Hb(b, c, d) {
        var e,
            f = this._offset || 0;if (!this.isValid()) return null != b ? this : NaN;if (null != b) {
            if ("string" == typeof b) {
                if (b = Eb(_d, b), null === b) return this;
            } else Math.abs(b) < 16 && !d && (b = 60 * b);return !this._isUTC && c && (e = Gb(this)), this._offset = b, this._isUTC = !0, null != e && this.add(e, "m"), f !== b && (!c || this._changeInProgress ? Xb(this, Sb(b - f, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, a.updateOffset(this, !0), this._changeInProgress = null)), this;
        }return this._isUTC ? f : Gb(this);
    }function Ib(a, b) {
        return null != a ? ("string" != typeof a && (a = -a), this.utcOffset(a, b), this) : -this.utcOffset();
    }function Jb(a) {
        return this.utcOffset(0, a);
    }function Kb(a) {
        return this._isUTC && (this.utcOffset(0, a), this._isUTC = !1, a && this.subtract(Gb(this), "m")), this;
    }function Lb() {
        if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);else if ("string" == typeof this._i) {
            var a = Eb($d, this._i);null != a ? this.utcOffset(a) : this.utcOffset(0, !0);
        }return this;
    }function Mb(a) {
        return !!this.isValid() && (a = a ? tb(a).utcOffset() : 0, (this.utcOffset() - a) % 60 === 0);
    }function Nb() {
        return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
    }function Ob() {
        if (!f(this._isDSTShifted)) return this._isDSTShifted;var a = {};if (q(a, this), a = qb(a), a._a) {
            var b = a._isUTC ? l(a._a) : tb(a._a);this._isDSTShifted = this.isValid() && v(a._a, b.toArray()) > 0;
        } else this._isDSTShifted = !1;return this._isDSTShifted;
    }function Pb() {
        return !!this.isValid() && !this._isUTC;
    }function Qb() {
        return !!this.isValid() && this._isUTC;
    }function Rb() {
        return !!this.isValid() && this._isUTC && 0 === this._offset;
    }function Sb(a, b) {
        var c,
            d,
            e,
            f = a,
            h = null;return Bb(a) ? f = { ms: a._milliseconds, d: a._days, M: a._months } : g(a) ? (f = {}, b ? f[b] = a : f.milliseconds = a) : (h = Te.exec(a)) ? (c = "-" === h[1] ? -1 : 1, f = { y: 0, d: u(h[ge]) * c, h: u(h[he]) * c, m: u(h[ie]) * c, s: u(h[je]) * c, ms: u(Cb(1e3 * h[ke])) * c }) : (h = Ue.exec(a)) ? (c = "-" === h[1] ? -1 : 1, f = { y: Tb(h[2], c), M: Tb(h[3], c), w: Tb(h[4], c), d: Tb(h[5], c), h: Tb(h[6], c), m: Tb(h[7], c), s: Tb(h[8], c) }) : null == f ? f = {} : "object" == (typeof f === "undefined" ? "undefined" : _typeof2(f)) && ("from" in f || "to" in f) && (e = Vb(tb(f.from), tb(f.to)), f = {}, f.ms = e.milliseconds, f.M = e.months), d = new Ab(f), Bb(a) && j(a, "_locale") && (d._locale = a._locale), d;
    }function Tb(a, b) {
        var c = a && parseFloat(a.replace(",", "."));return (isNaN(c) ? 0 : c) * b;
    }function Ub(a, b) {
        var c = { milliseconds: 0, months: 0 };return c.months = b.month() - a.month() + 12 * (b.year() - a.year()), a.clone().add(c.months, "M").isAfter(b) && --c.months, c.milliseconds = +b - +a.clone().add(c.months, "M"), c;
    }function Vb(a, b) {
        var c;return a.isValid() && b.isValid() ? (b = Fb(b, a), a.isBefore(b) ? c = Ub(a, b) : (c = Ub(b, a), c.milliseconds = -c.milliseconds, c.months = -c.months), c) : { milliseconds: 0, months: 0 };
    }function Wb(a, b) {
        return function (c, d) {
            var e, f;return null === d || isNaN(+d) || (y(b, "moment()." + b + "(period, number) is deprecated. Please use moment()." + b + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), f = c, c = d, d = f), c = "string" == typeof c ? +c : c, e = Sb(c, d), Xb(this, e, a), this;
        };
    }function Xb(b, c, d, e) {
        var f = c._milliseconds,
            g = Cb(c._days),
            h = Cb(c._months);b.isValid() && (e = null == e || e, f && b._d.setTime(b._d.valueOf() + f * d), g && Q(b, "Date", P(b, "Date") + g * d), h && ja(b, P(b, "Month") + h * d), e && a.updateOffset(b, g || h));
    }function Yb(a, b) {
        var c = a.diff(b, "days", !0);return c < -6 ? "sameElse" : c < -1 ? "lastWeek" : c < 0 ? "lastDay" : c < 1 ? "sameDay" : c < 2 ? "nextDay" : c < 7 ? "nextWeek" : "sameElse";
    }function Zb(b, c) {
        var d = b || tb(),
            e = Fb(d, this).startOf("day"),
            f = a.calendarFormat(this, e) || "sameElse",
            g = c && (z(c[f]) ? c[f].call(this, d) : c[f]);return this.format(g || this.localeData().calendar(f, this, tb(d)));
    }function $b() {
        return new r(this);
    }function _b(a, b) {
        var c = s(a) ? a : tb(a);return !(!this.isValid() || !c.isValid()) && (b = K(f(b) ? "millisecond" : b), "millisecond" === b ? this.valueOf() > c.valueOf() : c.valueOf() < this.clone().startOf(b).valueOf());
    }function ac(a, b) {
        var c = s(a) ? a : tb(a);return !(!this.isValid() || !c.isValid()) && (b = K(f(b) ? "millisecond" : b), "millisecond" === b ? this.valueOf() < c.valueOf() : this.clone().endOf(b).valueOf() < c.valueOf());
    }function bc(a, b, c, d) {
        return d = d || "()", ("(" === d[0] ? this.isAfter(a, c) : !this.isBefore(a, c)) && (")" === d[1] ? this.isBefore(b, c) : !this.isAfter(b, c));
    }function cc(a, b) {
        var c,
            d = s(a) ? a : tb(a);return !(!this.isValid() || !d.isValid()) && (b = K(b || "millisecond"), "millisecond" === b ? this.valueOf() === d.valueOf() : (c = d.valueOf(), this.clone().startOf(b).valueOf() <= c && c <= this.clone().endOf(b).valueOf()));
    }function dc(a, b) {
        return this.isSame(a, b) || this.isAfter(a, b);
    }function ec(a, b) {
        return this.isSame(a, b) || this.isBefore(a, b);
    }function fc(a, b, c) {
        var d, e, f, g;return this.isValid() ? (d = Fb(a, this), d.isValid() ? (e = 6e4 * (d.utcOffset() - this.utcOffset()), b = K(b), "year" === b || "month" === b || "quarter" === b ? (g = gc(this, d), "quarter" === b ? g /= 3 : "year" === b && (g /= 12)) : (f = this - d, g = "second" === b ? f / 1e3 : "minute" === b ? f / 6e4 : "hour" === b ? f / 36e5 : "day" === b ? (f - e) / 864e5 : "week" === b ? (f - e) / 6048e5 : f), c ? g : t(g)) : NaN) : NaN;
    }function gc(a, b) {
        var c,
            d,
            e = 12 * (b.year() - a.year()) + (b.month() - a.month()),
            f = a.clone().add(e, "months");return b - f < 0 ? (c = a.clone().add(e - 1, "months"), d = (b - f) / (f - c)) : (c = a.clone().add(e + 1, "months"), d = (b - f) / (c - f)), -(e + d) || 0;
    }function hc() {
        return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
    }function ic() {
        if (!this.isValid()) return null;var a = this.clone().utc();return a.year() < 0 || a.year() > 9999 ? X(a, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : z(Date.prototype.toISOString) ? this.toDate().toISOString() : X(a, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]");
    }function jc() {
        if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";var a = "moment",
            b = "";this.isLocal() || (a = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", b = "Z");var c = "[" + a + '("]',
            d = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
            e = "-MM-DD[T]HH:mm:ss.SSS",
            f = b + '[")]';return this.format(c + d + e + f);
    }function kc(b) {
        b || (b = this.isUtc() ? a.defaultFormatUtc : a.defaultFormat);var c = X(this, b);return this.localeData().postformat(c);
    }function lc(a, b) {
        return this.isValid() && (s(a) && a.isValid() || tb(a).isValid()) ? Sb({ to: this, from: a }).locale(this.locale()).humanize(!b) : this.localeData().invalidDate();
    }function mc(a) {
        return this.from(tb(), a);
    }function nc(a, b) {
        return this.isValid() && (s(a) && a.isValid() || tb(a).isValid()) ? Sb({ from: this, to: a }).locale(this.locale()).humanize(!b) : this.localeData().invalidDate();
    }function oc(a) {
        return this.to(tb(), a);
    }function pc(a) {
        var b;return void 0 === a ? this._locale._abbr : (b = bb(a), null != b && (this._locale = b), this);
    }function qc() {
        return this._locale;
    }function rc(a) {
        switch (a = K(a)) {case "year":
                this.month(0);case "quarter":case "month":
                this.date(1);case "week":case "isoWeek":case "day":case "date":
                this.hours(0);case "hour":
                this.minutes(0);case "minute":
                this.seconds(0);case "second":
                this.milliseconds(0);}return "week" === a && this.weekday(0), "isoWeek" === a && this.isoWeekday(1), "quarter" === a && this.month(3 * Math.floor(this.month() / 3)), this;
    }function sc(a) {
        return a = K(a), void 0 === a || "millisecond" === a ? this : ("date" === a && (a = "day"), this.startOf(a).add(1, "isoWeek" === a ? "week" : a).subtract(1, "ms"));
    }function tc() {
        return this._d.valueOf() - 6e4 * (this._offset || 0);
    }function uc() {
        return Math.floor(this.valueOf() / 1e3);
    }function vc() {
        return new Date(this.valueOf());
    }function wc() {
        var a = this;return [a.year(), a.month(), a.date(), a.hour(), a.minute(), a.second(), a.millisecond()];
    }function xc() {
        var a = this;return { years: a.year(), months: a.month(), date: a.date(), hours: a.hours(), minutes: a.minutes(), seconds: a.seconds(), milliseconds: a.milliseconds() };
    }function yc() {
        return this.isValid() ? this.toISOString() : null;
    }function zc() {
        return o(this);
    }function Ac() {
        return k({}, n(this));
    }function Bc() {
        return n(this).overflow;
    }function Cc() {
        return { input: this._i, format: this._f, locale: this._locale, isUTC: this._isUTC, strict: this._strict };
    }function Dc(a, b) {
        U(0, [a, a.length], 0, b);
    }function Ec(a) {
        return Ic.call(this, a, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy);
    }function Fc(a) {
        return Ic.call(this, a, this.isoWeek(), this.isoWeekday(), 1, 4);
    }function Gc() {
        return xa(this.year(), 1, 4);
    }function Hc() {
        var a = this.localeData()._week;return xa(this.year(), a.dow, a.doy);
    }function Ic(a, b, c, d, e) {
        var f;return null == a ? wa(this, d, e).year : (f = xa(a, d, e), b > f && (b = f), Jc.call(this, a, b, c, d, e));
    }function Jc(a, b, c, d, e) {
        var f = va(a, b, c, d, e),
            g = ta(f.year, 0, f.dayOfYear);return this.year(g.getUTCFullYear()), this.month(g.getUTCMonth()), this.date(g.getUTCDate()), this;
    }function Kc(a) {
        return null == a ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (a - 1) + this.month() % 3);
    }function Lc(a) {
        var b = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;return null == a ? b : this.add(a - b, "d");
    }function Mc(a, b) {
        b[ke] = u(1e3 * ("0." + a));
    }function Nc() {
        return this._isUTC ? "UTC" : "";
    }function Oc() {
        return this._isUTC ? "Coordinated Universal Time" : "";
    }function Pc(a) {
        return tb(1e3 * a);
    }function Qc() {
        return tb.apply(null, arguments).parseZone();
    }function Rc(a) {
        return a;
    }function Sc(a, b, c, d) {
        var e = bb(),
            f = l().set(d, b);return e[c](f, a);
    }function Tc(a, b, c) {
        if (g(a) && (b = a, a = void 0), a = a || "", null != b) return Sc(a, b, c, "month");var d,
            e = [];for (d = 0; d < 12; d++) {
            e[d] = Sc(a, d, c, "month");
        }return e;
    }function Uc(a, b, c, d) {
        "boolean" == typeof a ? (g(b) && (c = b, b = void 0), b = b || "") : (b = a, c = b, a = !1, g(b) && (c = b, b = void 0), b = b || "");var e = bb(),
            f = a ? e._week.dow : 0;if (null != c) return Sc(b, (c + f) % 7, d, "day");var h,
            i = [];for (h = 0; h < 7; h++) {
            i[h] = Sc(b, (h + f) % 7, d, "day");
        }return i;
    }function Vc(a, b) {
        return Tc(a, b, "months");
    }function Wc(a, b) {
        return Tc(a, b, "monthsShort");
    }function Xc(a, b, c) {
        return Uc(a, b, c, "weekdays");
    }function Yc(a, b, c) {
        return Uc(a, b, c, "weekdaysShort");
    }function Zc(a, b, c) {
        return Uc(a, b, c, "weekdaysMin");
    }function $c() {
        var a = this._data;return this._milliseconds = df(this._milliseconds), this._days = df(this._days), this._months = df(this._months), a.milliseconds = df(a.milliseconds), a.seconds = df(a.seconds), a.minutes = df(a.minutes), a.hours = df(a.hours), a.months = df(a.months), a.years = df(a.years), this;
    }function _c(a, b, c, d) {
        var e = Sb(b, c);return a._milliseconds += d * e._milliseconds, a._days += d * e._days, a._months += d * e._months, a._bubble();
    }function ad(a, b) {
        return _c(this, a, b, 1);
    }function bd(a, b) {
        return _c(this, a, b, -1);
    }function cd(a) {
        return a < 0 ? Math.floor(a) : Math.ceil(a);
    }function dd() {
        var a,
            b,
            c,
            d,
            e,
            f = this._milliseconds,
            g = this._days,
            h = this._months,
            i = this._data;return f >= 0 && g >= 0 && h >= 0 || f <= 0 && g <= 0 && h <= 0 || (f += 864e5 * cd(fd(h) + g), g = 0, h = 0), i.milliseconds = f % 1e3, a = t(f / 1e3), i.seconds = a % 60, b = t(a / 60), i.minutes = b % 60, c = t(b / 60), i.hours = c % 24, g += t(c / 24), e = t(ed(g)), h += e, g -= cd(fd(e)), d = t(h / 12), h %= 12, i.days = g, i.months = h, i.years = d, this;
    }function ed(a) {
        return 4800 * a / 146097;
    }function fd(a) {
        return 146097 * a / 4800;
    }function gd(a) {
        if (!this.isValid()) return NaN;var b,
            c,
            d = this._milliseconds;if (a = K(a), "month" === a || "year" === a) return b = this._days + d / 864e5, c = this._months + ed(b), "month" === a ? c : c / 12;switch (b = this._days + Math.round(fd(this._months)), a) {case "week":
                return b / 7 + d / 6048e5;case "day":
                return b + d / 864e5;case "hour":
                return 24 * b + d / 36e5;case "minute":
                return 1440 * b + d / 6e4;case "second":
                return 86400 * b + d / 1e3;case "millisecond":
                return Math.floor(864e5 * b) + d;default:
                throw new Error("Unknown unit " + a);}
    }function hd() {
        return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * u(this._months / 12) : NaN;
    }function id(a) {
        return function () {
            return this.as(a);
        };
    }function jd(a) {
        return a = K(a), this.isValid() ? this[a + "s"]() : NaN;
    }function kd(a) {
        return function () {
            return this.isValid() ? this._data[a] : NaN;
        };
    }function ld() {
        return t(this.days() / 7);
    }function md(a, b, c, d, e) {
        return e.relativeTime(b || 1, !!c, a, d);
    }function nd(a, b, c) {
        var d = Sb(a).abs(),
            e = uf(d.as("s")),
            f = uf(d.as("m")),
            g = uf(d.as("h")),
            h = uf(d.as("d")),
            i = uf(d.as("M")),
            j = uf(d.as("y")),
            k = e <= vf.ss && ["s", e] || e < vf.s && ["ss", e] || f <= 1 && ["m"] || f < vf.m && ["mm", f] || g <= 1 && ["h"] || g < vf.h && ["hh", g] || h <= 1 && ["d"] || h < vf.d && ["dd", h] || i <= 1 && ["M"] || i < vf.M && ["MM", i] || j <= 1 && ["y"] || ["yy", j];return k[2] = b, k[3] = +a > 0, k[4] = c, md.apply(null, k);
    }function od(a) {
        return void 0 === a ? uf : "function" == typeof a && (uf = a, !0);
    }function pd(a, b) {
        return void 0 !== vf[a] && (void 0 === b ? vf[a] : (vf[a] = b, "s" === a && (vf.ss = b - 1), !0));
    }function qd(a) {
        if (!this.isValid()) return this.localeData().invalidDate();var b = this.localeData(),
            c = nd(this, !a, b);return a && (c = b.pastFuture(+this, c)), b.postformat(c);
    }function rd() {
        if (!this.isValid()) return this.localeData().invalidDate();var a,
            b,
            c,
            d = wf(this._milliseconds) / 1e3,
            e = wf(this._days),
            f = wf(this._months);a = t(d / 60), b = t(a / 60), d %= 60, a %= 60, c = t(f / 12), f %= 12;var g = c,
            h = f,
            i = e,
            j = b,
            k = a,
            l = d,
            m = this.asSeconds();return m ? (m < 0 ? "-" : "") + "P" + (g ? g + "Y" : "") + (h ? h + "M" : "") + (i ? i + "D" : "") + (j || k || l ? "T" : "") + (j ? j + "H" : "") + (k ? k + "M" : "") + (l ? l + "S" : "") : "P0D";
    }var sd, td;td = Array.prototype.some ? Array.prototype.some : function (a) {
        for (var b = Object(this), c = b.length >>> 0, d = 0; d < c; d++) {
            if (d in b && a.call(this, b[d], d, b)) return !0;
        }return !1;
    };var ud = td,
        vd = a.momentProperties = [],
        wd = !1,
        xd = {};a.suppressDeprecationWarnings = !1, a.deprecationHandler = null;var yd;yd = Object.keys ? Object.keys : function (a) {
        var b,
            c = [];for (b in a) {
            j(a, b) && c.push(b);
        }return c;
    };var zd,
        Ad = yd,
        Bd = { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" },
        Cd = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" },
        Dd = "Invalid date",
        Ed = "%d",
        Fd = /\d{1,2}/,
        Gd = { future: "in %s", past: "%s ago", s: "a few seconds", ss: "%d seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" },
        Hd = {},
        Id = {},
        Jd = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
        Kd = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
        Ld = {},
        Md = {},
        Nd = /\d/,
        Od = /\d\d/,
        Pd = /\d{3}/,
        Qd = /\d{4}/,
        Rd = /[+-]?\d{6}/,
        Sd = /\d\d?/,
        Td = /\d\d\d\d?/,
        Ud = /\d\d\d\d\d\d?/,
        Vd = /\d{1,3}/,
        Wd = /\d{1,4}/,
        Xd = /[+-]?\d{1,6}/,
        Yd = /\d+/,
        Zd = /[+-]?\d+/,
        $d = /Z|[+-]\d\d:?\d\d/gi,
        _d = /Z|[+-]\d\d(?::?\d\d)?/gi,
        ae = /[+-]?\d+(\.\d{1,3})?/,
        be = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
        ce = {},
        de = {},
        ee = 0,
        fe = 1,
        ge = 2,
        he = 3,
        ie = 4,
        je = 5,
        ke = 6,
        le = 7,
        me = 8;zd = Array.prototype.indexOf ? Array.prototype.indexOf : function (a) {
        var b;for (b = 0; b < this.length; ++b) {
            if (this[b] === a) return b;
        }return -1;
    };var ne = zd;U("M", ["MM", 2], "Mo", function () {
        return this.month() + 1;
    }), U("MMM", 0, 0, function (a) {
        return this.localeData().monthsShort(this, a);
    }), U("MMMM", 0, 0, function (a) {
        return this.localeData().months(this, a);
    }), J("month", "M"), M("month", 8), Z("M", Sd), Z("MM", Sd, Od), Z("MMM", function (a, b) {
        return b.monthsShortRegex(a);
    }), Z("MMMM", function (a, b) {
        return b.monthsRegex(a);
    }), ba(["M", "MM"], function (a, b) {
        b[fe] = u(a) - 1;
    }), ba(["MMM", "MMMM"], function (a, b, c, d) {
        var e = c._locale.monthsParse(a, d, c._strict);null != e ? b[fe] = e : n(c).invalidMonth = a;
    });var oe = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
        pe = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        qe = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        re = be,
        se = be;U("Y", 0, 0, function () {
        var a = this.year();return a <= 9999 ? "" + a : "+" + a;
    }), U(0, ["YY", 2], 0, function () {
        return this.year() % 100;
    }), U(0, ["YYYY", 4], 0, "year"), U(0, ["YYYYY", 5], 0, "year"), U(0, ["YYYYYY", 6, !0], 0, "year"), J("year", "y"), M("year", 1), Z("Y", Zd), Z("YY", Sd, Od), Z("YYYY", Wd, Qd), Z("YYYYY", Xd, Rd), Z("YYYYYY", Xd, Rd), ba(["YYYYY", "YYYYYY"], ee), ba("YYYY", function (b, c) {
        c[ee] = 2 === b.length ? a.parseTwoDigitYear(b) : u(b);
    }), ba("YY", function (b, c) {
        c[ee] = a.parseTwoDigitYear(b);
    }), ba("Y", function (a, b) {
        b[ee] = parseInt(a, 10);
    }), a.parseTwoDigitYear = function (a) {
        return u(a) + (u(a) > 68 ? 1900 : 2e3);
    };var te = O("FullYear", !0);U("w", ["ww", 2], "wo", "week"), U("W", ["WW", 2], "Wo", "isoWeek"), J("week", "w"), J("isoWeek", "W"), M("week", 5), M("isoWeek", 5), Z("w", Sd), Z("ww", Sd, Od), Z("W", Sd), Z("WW", Sd, Od), ca(["w", "ww", "W", "WW"], function (a, b, c, d) {
        b[d.substr(0, 1)] = u(a);
    });var ue = { dow: 0, doy: 6 };U("d", 0, "do", "day"), U("dd", 0, 0, function (a) {
        return this.localeData().weekdaysMin(this, a);
    }), U("ddd", 0, 0, function (a) {
        return this.localeData().weekdaysShort(this, a);
    }), U("dddd", 0, 0, function (a) {
        return this.localeData().weekdays(this, a);
    }), U("e", 0, 0, "weekday"), U("E", 0, 0, "isoWeekday"), J("day", "d"), J("weekday", "e"), J("isoWeekday", "E"), M("day", 11), M("weekday", 11), M("isoWeekday", 11), Z("d", Sd), Z("e", Sd), Z("E", Sd), Z("dd", function (a, b) {
        return b.weekdaysMinRegex(a);
    }), Z("ddd", function (a, b) {
        return b.weekdaysShortRegex(a);
    }), Z("dddd", function (a, b) {
        return b.weekdaysRegex(a);
    }), ca(["dd", "ddd", "dddd"], function (a, b, c, d) {
        var e = c._locale.weekdaysParse(a, d, c._strict);null != e ? b.d = e : n(c).invalidWeekday = a;
    }), ca(["d", "e", "E"], function (a, b, c, d) {
        b[d] = u(a);
    });var ve = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        we = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        xe = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        ye = be,
        ze = be,
        Ae = be;U("H", ["HH", 2], 0, "hour"), U("h", ["hh", 2], 0, Ra), U("k", ["kk", 2], 0, Sa), U("hmm", 0, 0, function () {
        return "" + Ra.apply(this) + T(this.minutes(), 2);
    }), U("hmmss", 0, 0, function () {
        return "" + Ra.apply(this) + T(this.minutes(), 2) + T(this.seconds(), 2);
    }), U("Hmm", 0, 0, function () {
        return "" + this.hours() + T(this.minutes(), 2);
    }), U("Hmmss", 0, 0, function () {
        return "" + this.hours() + T(this.minutes(), 2) + T(this.seconds(), 2);
    }), Ta("a", !0), Ta("A", !1), J("hour", "h"), M("hour", 13), Z("a", Ua), Z("A", Ua), Z("H", Sd), Z("h", Sd), Z("k", Sd), Z("HH", Sd, Od), Z("hh", Sd, Od), Z("kk", Sd, Od), Z("hmm", Td), Z("hmmss", Ud), Z("Hmm", Td), Z("Hmmss", Ud), ba(["H", "HH"], he), ba(["k", "kk"], function (a, b, c) {
        var d = u(a);b[he] = 24 === d ? 0 : d;
    }), ba(["a", "A"], function (a, b, c) {
        c._isPm = c._locale.isPM(a), c._meridiem = a;
    }), ba(["h", "hh"], function (a, b, c) {
        b[he] = u(a), n(c).bigHour = !0;
    }), ba("hmm", function (a, b, c) {
        var d = a.length - 2;b[he] = u(a.substr(0, d)), b[ie] = u(a.substr(d)), n(c).bigHour = !0;
    }), ba("hmmss", function (a, b, c) {
        var d = a.length - 4,
            e = a.length - 2;b[he] = u(a.substr(0, d)), b[ie] = u(a.substr(d, 2)), b[je] = u(a.substr(e)), n(c).bigHour = !0;
    }), ba("Hmm", function (a, b, c) {
        var d = a.length - 2;b[he] = u(a.substr(0, d)), b[ie] = u(a.substr(d));
    }), ba("Hmmss", function (a, b, c) {
        var d = a.length - 4,
            e = a.length - 2;b[he] = u(a.substr(0, d)), b[ie] = u(a.substr(d, 2)), b[je] = u(a.substr(e));
    });var Be,
        Ce = /[ap]\.?m?\.?/i,
        De = O("Hours", !0),
        Ee = { calendar: Bd, longDateFormat: Cd, invalidDate: Dd, ordinal: Ed, dayOfMonthOrdinalParse: Fd, relativeTime: Gd, months: pe, monthsShort: qe, week: ue, weekdays: ve, weekdaysMin: xe, weekdaysShort: we, meridiemParse: Ce },
        Fe = {},
        Ge = {},
        He = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        Ie = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        Je = /Z|[+-]\d\d(?::?\d\d)?/,
        Ke = [["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/], ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/], ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/], ["GGGG-[W]WW", /\d{4}-W\d\d/, !1], ["YYYY-DDD", /\d{4}-\d{3}/], ["YYYY-MM", /\d{4}-\d\d/, !1], ["YYYYYYMMDD", /[+-]\d{10}/], ["YYYYMMDD", /\d{8}/], ["GGGG[W]WWE", /\d{4}W\d{3}/], ["GGGG[W]WW", /\d{4}W\d{2}/, !1], ["YYYYDDD", /\d{7}/]],
        Le = [["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/], ["HH:mm:ss", /\d\d:\d\d:\d\d/], ["HH:mm", /\d\d:\d\d/], ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/], ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/], ["HHmmss", /\d\d\d\d\d\d/], ["HHmm", /\d\d\d\d/], ["HH", /\d\d/]],
        Me = /^\/?Date\((\-?\d+)/i,
        Ne = /^((?:Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d?\d\s(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(?:\d\d)?\d\d\s)(\d\d:\d\d)(\:\d\d)?(\s(?:UT|GMT|[ECMP][SD]T|[A-IK-Za-ik-z]|[+-]\d{4}))$/;a.createFromInputFallback = x("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function (a) {
        a._d = new Date(a._i + (a._useUTC ? " UTC" : ""));
    }), a.ISO_8601 = function () {}, a.RFC_2822 = function () {};var Oe = x("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
        var a = tb.apply(null, arguments);return this.isValid() && a.isValid() ? a < this ? this : a : p();
    }),
        Pe = x("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
        var a = tb.apply(null, arguments);return this.isValid() && a.isValid() ? a > this ? this : a : p();
    }),
        Qe = function Qe() {
        return Date.now ? Date.now() : +new Date();
    },
        Re = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];Db("Z", ":"), Db("ZZ", ""), Z("Z", _d), Z("ZZ", _d), ba(["Z", "ZZ"], function (a, b, c) {
        c._useUTC = !0, c._tzm = Eb(_d, a);
    });var Se = /([\+\-]|\d\d)/gi;a.updateOffset = function () {};var Te = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
        Ue = /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;Sb.fn = Ab.prototype, Sb.invalid = zb;var Ve = Wb(1, "add"),
        We = Wb(-1, "subtract");a.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", a.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";var Xe = x("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function (a) {
        return void 0 === a ? this.localeData() : this.locale(a);
    });U(0, ["gg", 2], 0, function () {
        return this.weekYear() % 100;
    }), U(0, ["GG", 2], 0, function () {
        return this.isoWeekYear() % 100;
    }), Dc("gggg", "weekYear"), Dc("ggggg", "weekYear"), Dc("GGGG", "isoWeekYear"), Dc("GGGGG", "isoWeekYear"), J("weekYear", "gg"), J("isoWeekYear", "GG"), M("weekYear", 1), M("isoWeekYear", 1), Z("G", Zd), Z("g", Zd), Z("GG", Sd, Od), Z("gg", Sd, Od), Z("GGGG", Wd, Qd), Z("gggg", Wd, Qd), Z("GGGGG", Xd, Rd), Z("ggggg", Xd, Rd), ca(["gggg", "ggggg", "GGGG", "GGGGG"], function (a, b, c, d) {
        b[d.substr(0, 2)] = u(a);
    }), ca(["gg", "GG"], function (b, c, d, e) {
        c[e] = a.parseTwoDigitYear(b);
    }), U("Q", 0, "Qo", "quarter"), J("quarter", "Q"), M("quarter", 7), Z("Q", Nd), ba("Q", function (a, b) {
        b[fe] = 3 * (u(a) - 1);
    }), U("D", ["DD", 2], "Do", "date"), J("date", "D"), M("date", 9), Z("D", Sd), Z("DD", Sd, Od), Z("Do", function (a, b) {
        return a ? b._dayOfMonthOrdinalParse || b._ordinalParse : b._dayOfMonthOrdinalParseLenient;
    }), ba(["D", "DD"], ge), ba("Do", function (a, b) {
        b[ge] = u(a.match(Sd)[0], 10);
    });var Ye = O("Date", !0);U("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), J("dayOfYear", "DDD"), M("dayOfYear", 4), Z("DDD", Vd), Z("DDDD", Pd), ba(["DDD", "DDDD"], function (a, b, c) {
        c._dayOfYear = u(a);
    }), U("m", ["mm", 2], 0, "minute"), J("minute", "m"), M("minute", 14), Z("m", Sd), Z("mm", Sd, Od), ba(["m", "mm"], ie);var Ze = O("Minutes", !1);U("s", ["ss", 2], 0, "second"), J("second", "s"), M("second", 15), Z("s", Sd), Z("ss", Sd, Od), ba(["s", "ss"], je);var $e = O("Seconds", !1);U("S", 0, 0, function () {
        return ~~(this.millisecond() / 100);
    }), U(0, ["SS", 2], 0, function () {
        return ~~(this.millisecond() / 10);
    }), U(0, ["SSS", 3], 0, "millisecond"), U(0, ["SSSS", 4], 0, function () {
        return 10 * this.millisecond();
    }), U(0, ["SSSSS", 5], 0, function () {
        return 100 * this.millisecond();
    }), U(0, ["SSSSSS", 6], 0, function () {
        return 1e3 * this.millisecond();
    }), U(0, ["SSSSSSS", 7], 0, function () {
        return 1e4 * this.millisecond();
    }), U(0, ["SSSSSSSS", 8], 0, function () {
        return 1e5 * this.millisecond();
    }), U(0, ["SSSSSSSSS", 9], 0, function () {
        return 1e6 * this.millisecond();
    }), J("millisecond", "ms"), M("millisecond", 16), Z("S", Vd, Nd), Z("SS", Vd, Od), Z("SSS", Vd, Pd);var _e;for (_e = "SSSS"; _e.length <= 9; _e += "S") {
        Z(_e, Yd);
    }for (_e = "S"; _e.length <= 9; _e += "S") {
        ba(_e, Mc);
    }var af = O("Milliseconds", !1);U("z", 0, 0, "zoneAbbr"), U("zz", 0, 0, "zoneName");var bf = r.prototype;bf.add = Ve, bf.calendar = Zb, bf.clone = $b, bf.diff = fc, bf.endOf = sc, bf.format = kc, bf.from = lc, bf.fromNow = mc, bf.to = nc, bf.toNow = oc, bf.get = R, bf.invalidAt = Bc, bf.isAfter = _b, bf.isBefore = ac, bf.isBetween = bc, bf.isSame = cc, bf.isSameOrAfter = dc, bf.isSameOrBefore = ec, bf.isValid = zc, bf.lang = Xe, bf.locale = pc, bf.localeData = qc, bf.max = Pe, bf.min = Oe, bf.parsingFlags = Ac, bf.set = S, bf.startOf = rc, bf.subtract = We, bf.toArray = wc, bf.toObject = xc, bf.toDate = vc, bf.toISOString = ic, bf.inspect = jc, bf.toJSON = yc, bf.toString = hc, bf.unix = uc, bf.valueOf = tc, bf.creationData = Cc, bf.year = te, bf.isLeapYear = ra, bf.weekYear = Ec, bf.isoWeekYear = Fc, bf.quarter = bf.quarters = Kc, bf.month = ka, bf.daysInMonth = la, bf.week = bf.weeks = Ba, bf.isoWeek = bf.isoWeeks = Ca, bf.weeksInYear = Hc, bf.isoWeeksInYear = Gc, bf.date = Ye, bf.day = bf.days = Ka, bf.weekday = La, bf.isoWeekday = Ma, bf.dayOfYear = Lc, bf.hour = bf.hours = De, bf.minute = bf.minutes = Ze, bf.second = bf.seconds = $e, bf.millisecond = bf.milliseconds = af, bf.utcOffset = Hb, bf.utc = Jb, bf.local = Kb, bf.parseZone = Lb, bf.hasAlignedHourOffset = Mb, bf.isDST = Nb, bf.isLocal = Pb, bf.isUtcOffset = Qb, bf.isUtc = Rb, bf.isUTC = Rb, bf.zoneAbbr = Nc, bf.zoneName = Oc, bf.dates = x("dates accessor is deprecated. Use date instead.", Ye), bf.months = x("months accessor is deprecated. Use month instead", ka), bf.years = x("years accessor is deprecated. Use year instead", te), bf.zone = x("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", Ib), bf.isDSTShifted = x("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", Ob);var cf = C.prototype;cf.calendar = D, cf.longDateFormat = E, cf.invalidDate = F, cf.ordinal = G, cf.preparse = Rc, cf.postformat = Rc, cf.relativeTime = H, cf.pastFuture = I, cf.set = A, cf.months = fa, cf.monthsShort = ga, cf.monthsParse = ia, cf.monthsRegex = na, cf.monthsShortRegex = ma, cf.week = ya, cf.firstDayOfYear = Aa, cf.firstDayOfWeek = za, cf.weekdays = Fa, cf.weekdaysMin = Ha, cf.weekdaysShort = Ga, cf.weekdaysParse = Ja, cf.weekdaysRegex = Na, cf.weekdaysShortRegex = Oa, cf.weekdaysMinRegex = Pa, cf.isPM = Va, cf.meridiem = Wa, $a("en", { dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/, ordinal: function ordinal(a) {
            var b = a % 10,
                c = 1 === u(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";return a + c;
        } }), a.lang = x("moment.lang is deprecated. Use moment.locale instead.", $a), a.langData = x("moment.langData is deprecated. Use moment.localeData instead.", bb);var df = Math.abs,
        ef = id("ms"),
        ff = id("s"),
        gf = id("m"),
        hf = id("h"),
        jf = id("d"),
        kf = id("w"),
        lf = id("M"),
        mf = id("y"),
        nf = kd("milliseconds"),
        of = kd("seconds"),
        pf = kd("minutes"),
        qf = kd("hours"),
        rf = kd("days"),
        sf = kd("months"),
        tf = kd("years"),
        uf = Math.round,
        vf = { ss: 44, s: 45, m: 45, h: 22, d: 26, M: 11 },
        wf = Math.abs,
        xf = Ab.prototype;return xf.isValid = yb, xf.abs = $c, xf.add = ad, xf.subtract = bd, xf.as = gd, xf.asMilliseconds = ef, xf.asSeconds = ff, xf.asMinutes = gf, xf.asHours = hf, xf.asDays = jf, xf.asWeeks = kf, xf.asMonths = lf, xf.asYears = mf, xf.valueOf = hd, xf._bubble = dd, xf.get = jd, xf.milliseconds = nf, xf.seconds = of, xf.minutes = pf, xf.hours = qf, xf.days = rf, xf.weeks = ld, xf.months = sf, xf.years = tf, xf.humanize = qd, xf.toISOString = rd, xf.toString = rd, xf.toJSON = rd, xf.locale = pc, xf.localeData = qc, xf.toIsoString = x("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", rd), xf.lang = Xe, U("X", 0, 0, "unix"), U("x", 0, 0, "valueOf"), Z("x", Zd), Z("X", ae), ba("X", function (a, b, c) {
        c._d = new Date(1e3 * parseFloat(a, 10));
    }), ba("x", function (a, b, c) {
        c._d = new Date(u(a));
    }), a.version = "2.18.1", b(tb), a.fn = bf, a.min = vb, a.max = wb, a.now = Qe, a.utc = l, a.unix = Pc, a.months = Vc, a.isDate = h, a.locale = $a, a.invalid = p, a.duration = Sb, a.isMoment = s, a.weekdays = Xc, a.parseZone = Qc, a.localeData = bb, a.isDuration = Bb, a.monthsShort = Wc, a.weekdaysMin = Zc, a.defineLocale = _a, a.updateLocale = ab, a.locales = cb, a.weekdaysShort = Yc, a.normalizeUnits = K, a.relativeTimeRounding = od, a.relativeTimeThreshold = pd, a.calendarFormat = Yb, a.prototype = bf, a;
});
//! moment.js locale configuration
//! locale : spanish (es)
//! author : Julio Napurí : https://github.com/julionc

(function (global, factory) {
    (typeof exports === "undefined" ? "undefined" : _typeof2(exports)) === 'object' && typeof module !== 'undefined' ? factory(require('../moment')) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
})(this, function (moment) {
    'use strict';

    var monthsShortDot = 'Ene._Feb._Mar._Abr._May._Jun._Jul._Ago._Sep._Oct._Nov._Dic.'.split('_'),
        _monthsShort = 'Ene_Feb_Mar_Abr_May_Jun_Jul_Ago_Sep_Oct_Nov_Dic'.split('_');

    var es = moment.defineLocale('es', {
        months: 'Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre'.split('_'),
        monthsShort: function monthsShort(m, format) {
            if (/-MMM-/.test(format)) {
                return _monthsShort[m.month()];
            } else {
                return monthsShortDot[m.month()];
            }
        },
        weekdays: 'Domingo_Lunes_Martes_Miércoles_Jueves_Viernes_Sábado'.split('_'),
        weekdaysShort: 'Dom._Lun._Mar._Mié._Jue._Vie._Sáb.'.split('_'),
        weekdaysMin: 'Do_Lu_Ma_Mi_Ju_Vi_Sá'.split('_'),
        longDateFormat: {
            LT: 'H:mm',
            LTS: 'H:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D [de] MMMM [de] YYYY',
            LLL: 'D [de] MMMM [de] YYYY H:mm',
            LLLL: 'dddd, D [de] MMMM [de] YYYY H:mm'
        },
        calendar: {
            sameDay: function sameDay() {
                return '[hoy a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
            },
            nextDay: function nextDay() {
                return '[mañana a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
            },
            nextWeek: function nextWeek() {
                return 'dddd [a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
            },
            lastDay: function lastDay() {
                return '[ayer a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
            },
            lastWeek: function lastWeek() {
                return '[el] dddd [pasado a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
            },
            sameElse: 'L'
        },
        relativeTime: {
            future: 'en %s',
            past: 'hace %s',
            s: 'unos segundos',
            m: 'un minuto',
            mm: '%d minutos',
            h: 'una hora',
            hh: '%d horas',
            d: 'un día',
            dd: '%d días',
            M: 'un mes',
            MM: '%d meses',
            y: 'un año',
            yy: '%d años'
        },
        ordinalParse: /\d{1,2}º/,
        ordinal: '%dº',
        week: {
            dow: 1, // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.
        }
    });

    return es;
});
/**
* @version: 2.1.25
* @author: Dan Grossman http://www.dangrossman.info/
* @copyright: Copyright (c) 2012-2017 Dan Grossman. All rights reserved.
* @license: Licensed under the MIT license. See http://www.opensource.org/licenses/mit-license.php
* @website: http://www.daterangepicker.com/
*/
// Follow the UMD template https://github.com/umdjs/umd/blob/master/templates/returnExportsGlobal.js
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Make globaly available as well
        define(['../../../../../../../../../Downloads/bootstrap-daterangepicker-master/moment', 'jquery'], function (moment, jquery) {
            if (!jquery.fn) jquery.fn = {}; // webpack server rendering
            return root.daterangepicker = factory(moment, jquery);
        });
    } else if ((typeof module === "undefined" ? "undefined" : _typeof2(module)) === 'object' && module.exports) {
        // Node / Browserify
        //isomorphic issue
        var jQuery = typeof window != 'undefined' ? window.jQuery : undefined;
        if (!jQuery) {
            jQuery = require('jquery');
            if (!jQuery.fn) jQuery.fn = {};
        }
        var moment = typeof window != 'undefined' && typeof window.moment != 'undefined' ? window.moment : require('../../../../../../../../../Downloads/bootstrap-daterangepicker-master/moment');
        module.exports = factory(moment, jQuery);
    } else {
        // Browser globals
        root.daterangepicker = factory(root.moment, root.jQuery);
    }
})(this, function (moment, $) {
    var DateRangePicker = function DateRangePicker(element, options, cb) {

        //default settings for options
        this.parentEl = 'body';
        this.element = $(element);
        this.startDate = moment().startOf('day');
        this.endDate = moment().endOf('day');
        this.minDate = false;
        this.maxDate = false;
        this.dateLimit = false;
        this.autoApply = false;
        this.singleDatePicker = false;
        this.showDropdowns = false;
        this.showWeekNumbers = false;
        this.showISOWeekNumbers = false;
        this.showCustomRangeLabel = true;
        this.timePicker = false;
        this.timePicker24Hour = false;
        this.timePickerIncrement = 1;
        this.timePickerSeconds = false;
        this.linkedCalendars = true;
        this.autoUpdateInput = true;
        this.alwaysShowCalendars = false;
        this.ranges = {};

        this.opens = 'right';
        if (this.element.hasClass('pull-right')) this.opens = 'left';

        this.drops = 'down';
        if (this.element.hasClass('dropup')) this.drops = 'up';

        this.buttonClasses = 'btn btn-sm';
        this.applyClass = 'btn-success';
        this.cancelClass = 'btn-default';

        this.locale = {
            direction: 'ltr',
            format: moment.localeData().longDateFormat('L'),
            separator: ' - ',
            applyLabel: 'Apply',
            cancelLabel: 'Cancel',
            weekLabel: 'W',
            customRangeLabel: 'Custom Range',
            daysOfWeek: moment.weekdaysMin(),
            monthNames: moment.monthsShort(),
            firstDay: moment.localeData().firstDayOfWeek()
        };

        this.callback = function () {};

        //some state information
        this.isShowing = false;
        this.leftCalendar = {};
        this.rightCalendar = {};

        //custom options from user
        if ((typeof options === "undefined" ? "undefined" : _typeof2(options)) !== 'object' || options === null) options = {};

        //allow setting options with data attributes
        //data-api options will be overwritten with custom javascript options
        options = $.extend(this.element.data(), options);

        //html template for the picker UI
        if (typeof options.template !== 'string' && !(options.template instanceof $)) options.template = '<div class="daterangepicker dropdown-menu">' + '<div class="calendar left">' + '<div class="daterangepicker_input">' + '<input class="input-mini form-control" type="text" name="daterangepicker_start" value="" />' + '<i class="fa fa-calendar glyphicon glyphicon-calendar"></i>' + '<div class="calendar-time">' + '<div></div>' + '<i class="fa fa-clock-o glyphicon glyphicon-time"></i>' + '</div>' + '</div>' + '<div class="calendar-table"></div>' + '</div>' + '<div class="calendar right">' + '<div class="daterangepicker_input">' + '<input class="input-mini form-control" type="text" name="daterangepicker_end" value="" />' + '<i class="fa fa-calendar glyphicon glyphicon-calendar"></i>' + '<div class="calendar-time">' + '<div></div>' + '<i class="fa fa-clock-o glyphicon glyphicon-time"></i>' + '</div>' + '</div>' + '<div class="calendar-table"></div>' + '</div>' + '<div class="ranges">' + '<div class="range_inputs">' + '<button class="applyBtn" disabled="disabled" type="button"></button> ' + '<button class="cancelBtn" type="button"></button>' + '</div>' + '</div>' + '</div>';

        this.parentEl = options.parentEl && $(options.parentEl).length ? $(options.parentEl) : $(this.parentEl);
        this.container = $(options.template).appendTo(this.parentEl);

        //
        // handle all the possible options overriding defaults
        //

        if (_typeof2(options.locale) === 'object') {

            if (typeof options.locale.direction === 'string') this.locale.direction = options.locale.direction;

            if (typeof options.locale.format === 'string') this.locale.format = options.locale.format;

            if (typeof options.locale.separator === 'string') this.locale.separator = options.locale.separator;

            if (_typeof2(options.locale.daysOfWeek) === 'object') this.locale.daysOfWeek = options.locale.daysOfWeek.slice();

            if (_typeof2(options.locale.monthNames) === 'object') this.locale.monthNames = options.locale.monthNames.slice();

            if (typeof options.locale.firstDay === 'number') this.locale.firstDay = options.locale.firstDay;

            if (typeof options.locale.applyLabel === 'string') this.locale.applyLabel = options.locale.applyLabel;

            if (typeof options.locale.cancelLabel === 'string') this.locale.cancelLabel = options.locale.cancelLabel;

            if (typeof options.locale.weekLabel === 'string') this.locale.weekLabel = options.locale.weekLabel;

            if (typeof options.locale.customRangeLabel === 'string') {
                //Support unicode chars in the custom range name.
                var elem = document.createElement('textarea');
                elem.innerHTML = options.locale.customRangeLabel;
                var rangeHtml = elem.value;
                this.locale.customRangeLabel = rangeHtml;
            }
        }
        this.container.addClass(this.locale.direction);

        if (typeof options.startDate === 'string') this.startDate = moment(options.startDate, this.locale.format);

        if (typeof options.endDate === 'string') this.endDate = moment(options.endDate, this.locale.format);

        if (typeof options.minDate === 'string') this.minDate = moment(options.minDate, this.locale.format);

        if (typeof options.maxDate === 'string') this.maxDate = moment(options.maxDate, this.locale.format);

        if (_typeof2(options.startDate) === 'object') this.startDate = moment(options.startDate);

        if (_typeof2(options.endDate) === 'object') this.endDate = moment(options.endDate);

        if (_typeof2(options.minDate) === 'object') this.minDate = moment(options.minDate);

        if (_typeof2(options.maxDate) === 'object') this.maxDate = moment(options.maxDate);

        // sanity check for bad options
        if (this.minDate && this.startDate.isBefore(this.minDate)) this.startDate = this.minDate.clone();

        // sanity check for bad options
        if (this.maxDate && this.endDate.isAfter(this.maxDate)) this.endDate = this.maxDate.clone();

        if (typeof options.applyClass === 'string') this.applyClass = options.applyClass;

        if (typeof options.cancelClass === 'string') this.cancelClass = options.cancelClass;

        if (_typeof2(options.dateLimit) === 'object') this.dateLimit = options.dateLimit;

        if (typeof options.opens === 'string') this.opens = options.opens;

        if (typeof options.drops === 'string') this.drops = options.drops;

        if (typeof options.showWeekNumbers === 'boolean') this.showWeekNumbers = options.showWeekNumbers;

        if (typeof options.showISOWeekNumbers === 'boolean') this.showISOWeekNumbers = options.showISOWeekNumbers;

        if (typeof options.buttonClasses === 'string') this.buttonClasses = options.buttonClasses;

        if (_typeof2(options.buttonClasses) === 'object') this.buttonClasses = options.buttonClasses.join(' ');

        if (typeof options.showDropdowns === 'boolean') this.showDropdowns = options.showDropdowns;

        if (typeof options.showCustomRangeLabel === 'boolean') this.showCustomRangeLabel = options.showCustomRangeLabel;

        if (typeof options.singleDatePicker === 'boolean') {
            this.singleDatePicker = options.singleDatePicker;
            if (this.singleDatePicker) this.endDate = this.startDate.clone();
        }

        if (typeof options.timePicker === 'boolean') this.timePicker = options.timePicker;

        if (typeof options.timePickerSeconds === 'boolean') this.timePickerSeconds = options.timePickerSeconds;

        if (typeof options.timePickerIncrement === 'number') this.timePickerIncrement = options.timePickerIncrement;

        if (typeof options.timePicker24Hour === 'boolean') this.timePicker24Hour = options.timePicker24Hour;

        if (typeof options.autoApply === 'boolean') this.autoApply = options.autoApply;

        if (typeof options.autoUpdateInput === 'boolean') this.autoUpdateInput = options.autoUpdateInput;

        if (typeof options.linkedCalendars === 'boolean') this.linkedCalendars = options.linkedCalendars;

        if (typeof options.isInvalidDate === 'function') this.isInvalidDate = options.isInvalidDate;

        if (typeof options.isCustomDate === 'function') this.isCustomDate = options.isCustomDate;

        if (typeof options.alwaysShowCalendars === 'boolean') this.alwaysShowCalendars = options.alwaysShowCalendars;

        // update day names order to firstDay
        if (this.locale.firstDay != 0) {
            var iterator = this.locale.firstDay;
            while (iterator > 0) {
                this.locale.daysOfWeek.push(this.locale.daysOfWeek.shift());
                iterator--;
            }
        }

        var start, end, range;

        //if no start/end dates set, check if an input element contains initial values
        if (typeof options.startDate === 'undefined' && typeof options.endDate === 'undefined') {
            if ($(this.element).is('input[type=text]')) {
                var val = $(this.element).val(),
                    split = val.split(this.locale.separator);

                start = end = null;

                if (split.length == 2) {
                    start = moment(split[0], this.locale.format);
                    end = moment(split[1], this.locale.format);
                } else if (this.singleDatePicker && val !== "") {
                    start = moment(val, this.locale.format);
                    end = moment(val, this.locale.format);
                }
                if (start !== null && end !== null) {
                    this.setStartDate(start);
                    this.setEndDate(end);
                }
            }
        }

        if (_typeof2(options.ranges) === 'object') {
            for (range in options.ranges) {

                if (typeof options.ranges[range][0] === 'string') start = moment(options.ranges[range][0], this.locale.format);else start = moment(options.ranges[range][0]);

                if (typeof options.ranges[range][1] === 'string') end = moment(options.ranges[range][1], this.locale.format);else end = moment(options.ranges[range][1]);

                // If the start or end date exceed those allowed by the minDate or dateLimit
                // options, shorten the range to the allowable period.
                if (this.minDate && start.isBefore(this.minDate)) start = this.minDate.clone();

                var maxDate = this.maxDate;
                if (this.dateLimit && maxDate && start.clone().add(this.dateLimit).isAfter(maxDate)) maxDate = start.clone().add(this.dateLimit);
                if (maxDate && end.isAfter(maxDate)) end = maxDate.clone();

                // If the end of the range is before the minimum or the start of the range is
                // after the maximum, don't display this range option at all.
                if (this.minDate && end.isBefore(this.minDate, this.timepicker ? 'minute' : 'day') || maxDate && start.isAfter(maxDate, this.timepicker ? 'minute' : 'day')) continue;

                //Support unicode chars in the range names.
                var elem = document.createElement('textarea');
                elem.innerHTML = range;
                var rangeHtml = elem.value;

                this.ranges[rangeHtml] = [start, end];
            }

            var list = '<ul>';
            for (range in this.ranges) {
                list += '<li data-range-key="' + range + '">' + range + '</li>';
            }
            if (this.showCustomRangeLabel) {
                list += '<li data-range-key="' + this.locale.customRangeLabel + '">' + this.locale.customRangeLabel + '</li>';
            }
            list += '</ul>';
            this.container.find('.ranges').prepend(list);
        }

        if (typeof cb === 'function') {
            this.callback = cb;
        }

        if (!this.timePicker) {
            this.startDate = this.startDate.startOf('day');
            this.endDate = this.endDate.endOf('day');
            this.container.find('.calendar-time').hide();
        }

        //can't be used together for now
        if (this.timePicker && this.autoApply) this.autoApply = false;

        if (this.autoApply && _typeof2(options.ranges) !== 'object') {
            this.container.find('.ranges').hide();
        } else if (this.autoApply) {
            this.container.find('.applyBtn, .cancelBtn').addClass('hide');
        }

        if (this.singleDatePicker) {
            this.container.addClass('single');
            this.container.find('.calendar.left').addClass('single');
            this.container.find('.calendar.left').show();
            this.container.find('.calendar.right').hide();
            this.container.find('.daterangepicker_input input, .daterangepicker_input > i').hide();
            if (this.timePicker) {
                this.container.find('.ranges ul').hide();
            } else {
                this.container.find('.ranges').hide();
            }
        }

        if (typeof options.ranges === 'undefined' && !this.singleDatePicker || this.alwaysShowCalendars) {
            this.container.addClass('show-calendar');
        }

        this.container.addClass('opens' + this.opens);

        //swap the position of the predefined ranges if opens right
        if (typeof options.ranges !== 'undefined' && this.opens == 'right') {
            this.container.find('.ranges').prependTo(this.container.find('.calendar.left').parent());
        }

        //apply CSS classes and labels to buttons
        this.container.find('.applyBtn, .cancelBtn').addClass(this.buttonClasses);
        if (this.applyClass.length) this.container.find('.applyBtn').addClass(this.applyClass);
        if (this.cancelClass.length) this.container.find('.cancelBtn').addClass(this.cancelClass);
        this.container.find('.applyBtn').html(this.locale.applyLabel);
        this.container.find('.cancelBtn').html(this.locale.cancelLabel);

        //
        // event listeners
        //

        this.container.find('.calendar').on('click.daterangepicker', '.prev', $.proxy(this.clickPrev, this)).on('click.daterangepicker', '.next', $.proxy(this.clickNext, this)).on('mousedown.daterangepicker', 'td.available', $.proxy(this.clickDate, this)).on('mouseenter.daterangepicker', 'td.available', $.proxy(this.hoverDate, this)).on('mouseleave.daterangepicker', 'td.available', $.proxy(this.updateFormInputs, this)).on('change.daterangepicker', 'select.yearselect', $.proxy(this.monthOrYearChanged, this)).on('change.daterangepicker', 'select.monthselect', $.proxy(this.monthOrYearChanged, this)).on('change.daterangepicker', 'select.hourselect,select.minuteselect,select.secondselect,select.ampmselect', $.proxy(this.timeChanged, this)).on('click.daterangepicker', '.daterangepicker_input input', $.proxy(this.showCalendars, this)).on('focus.daterangepicker', '.daterangepicker_input input', $.proxy(this.formInputsFocused, this)).on('blur.daterangepicker', '.daterangepicker_input input', $.proxy(this.formInputsBlurred, this)).on('change.daterangepicker', '.daterangepicker_input input', $.proxy(this.formInputsChanged, this));

        this.container.find('.ranges').on('click.daterangepicker', 'button.applyBtn', $.proxy(this.clickApply, this)).on('click.daterangepicker', 'button.cancelBtn', $.proxy(this.clickCancel, this)).on('click.daterangepicker', 'li', $.proxy(this.clickRange, this)).on('mouseenter.daterangepicker', 'li', $.proxy(this.hoverRange, this)).on('mouseleave.daterangepicker', 'li', $.proxy(this.updateFormInputs, this));

        if (this.element.is('input') || this.element.is('button')) {
            this.element.on({
                'click.daterangepicker': $.proxy(this.show, this),
                'focus.daterangepicker': $.proxy(this.show, this),
                'keyup.daterangepicker': $.proxy(this.elementChanged, this),
                'keydown.daterangepicker': $.proxy(this.keydown, this)
            });
        } else {
            this.element.on('click.daterangepicker', $.proxy(this.toggle, this));
        }

        //
        // if attached to a text input, set the initial value
        //

        if (this.element.is('input') && !this.singleDatePicker && this.autoUpdateInput) {
            this.element.val(this.startDate.format(this.locale.format) + this.locale.separator + this.endDate.format(this.locale.format));
            this.element.trigger('change');
        } else if (this.element.is('input') && this.autoUpdateInput) {
            this.element.val(this.startDate.format(this.locale.format));
            this.element.trigger('change');
        }
    };

    DateRangePicker.prototype = {

        constructor: DateRangePicker,

        setStartDate: function setStartDate(startDate) {
            if (typeof startDate === 'string') this.startDate = moment(startDate, this.locale.format);

            if ((typeof startDate === "undefined" ? "undefined" : _typeof2(startDate)) === 'object') this.startDate = moment(startDate);

            if (!this.timePicker) this.startDate = this.startDate.startOf('day');

            if (this.timePicker && this.timePickerIncrement) this.startDate.minute(Math.round(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement);

            if (this.minDate && this.startDate.isBefore(this.minDate)) {
                this.startDate = this.minDate.clone();
                if (this.timePicker && this.timePickerIncrement) this.startDate.minute(Math.round(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement);
            }

            if (this.maxDate && this.startDate.isAfter(this.maxDate)) {
                this.startDate = this.maxDate.clone();
                if (this.timePicker && this.timePickerIncrement) this.startDate.minute(Math.floor(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement);
            }

            if (!this.isShowing) this.updateElement();

            this.updateMonthsInView();
        },

        setEndDate: function setEndDate(endDate) {
            if (typeof endDate === 'string') this.endDate = moment(endDate, this.locale.format);

            if ((typeof endDate === "undefined" ? "undefined" : _typeof2(endDate)) === 'object') this.endDate = moment(endDate);

            if (!this.timePicker) this.endDate = this.endDate.endOf('day');

            if (this.timePicker && this.timePickerIncrement) this.endDate.minute(Math.round(this.endDate.minute() / this.timePickerIncrement) * this.timePickerIncrement);

            if (this.endDate.isBefore(this.startDate)) this.endDate = this.startDate.clone();

            if (this.maxDate && this.endDate.isAfter(this.maxDate)) this.endDate = this.maxDate.clone();

            if (this.dateLimit && this.startDate.clone().add(this.dateLimit).isBefore(this.endDate)) this.endDate = this.startDate.clone().add(this.dateLimit);

            this.previousRightTime = this.endDate.clone();

            if (!this.isShowing) this.updateElement();

            this.updateMonthsInView();
        },

        isInvalidDate: function isInvalidDate() {
            return false;
        },

        isCustomDate: function isCustomDate() {
            return false;
        },

        updateView: function updateView() {
            if (this.timePicker) {
                this.renderTimePicker('left');
                this.renderTimePicker('right');
                if (!this.endDate) {
                    this.container.find('.right .calendar-time select').attr('disabled', 'disabled').addClass('disabled');
                } else {
                    this.container.find('.right .calendar-time select').removeAttr('disabled').removeClass('disabled');
                }
            }
            if (this.endDate) {
                this.container.find('input[name="daterangepicker_end"]').removeClass('active');
                this.container.find('input[name="daterangepicker_start"]').addClass('active');
            } else {
                this.container.find('input[name="daterangepicker_end"]').addClass('active');
                this.container.find('input[name="daterangepicker_start"]').removeClass('active');
            }
            this.updateMonthsInView();
            this.updateCalendars();
            this.updateFormInputs();
        },

        updateMonthsInView: function updateMonthsInView() {
            if (this.endDate) {

                //if both dates are visible already, do nothing
                if (!this.singleDatePicker && this.leftCalendar.month && this.rightCalendar.month && (this.startDate.format('YYYY-MM') == this.leftCalendar.month.format('YYYY-MM') || this.startDate.format('YYYY-MM') == this.rightCalendar.month.format('YYYY-MM')) && (this.endDate.format('YYYY-MM') == this.leftCalendar.month.format('YYYY-MM') || this.endDate.format('YYYY-MM') == this.rightCalendar.month.format('YYYY-MM'))) {
                    return;
                }

                this.leftCalendar.month = this.startDate.clone().date(2);
                if (!this.linkedCalendars && (this.endDate.month() != this.startDate.month() || this.endDate.year() != this.startDate.year())) {
                    this.rightCalendar.month = this.endDate.clone().date(2);
                } else {
                    this.rightCalendar.month = this.startDate.clone().date(2).add(1, 'month');
                }
            } else {
                if (this.leftCalendar.month.format('YYYY-MM') != this.startDate.format('YYYY-MM') && this.rightCalendar.month.format('YYYY-MM') != this.startDate.format('YYYY-MM')) {
                    this.leftCalendar.month = this.startDate.clone().date(2);
                    this.rightCalendar.month = this.startDate.clone().date(2).add(1, 'month');
                }
            }
            if (this.maxDate && this.linkedCalendars && !this.singleDatePicker && this.rightCalendar.month > this.maxDate) {
                this.rightCalendar.month = this.maxDate.clone().date(2);
                this.leftCalendar.month = this.maxDate.clone().date(2).subtract(1, 'month');
            }
        },

        updateCalendars: function updateCalendars() {

            if (this.timePicker) {
                var hour, minute, second;
                if (this.endDate) {
                    hour = parseInt(this.container.find('.left .hourselect').val(), 10);
                    minute = parseInt(this.container.find('.left .minuteselect').val(), 10);
                    second = this.timePickerSeconds ? parseInt(this.container.find('.left .secondselect').val(), 10) : 0;
                    if (!this.timePicker24Hour) {
                        var ampm = this.container.find('.left .ampmselect').val();
                        if (ampm === 'PM' && hour < 12) hour += 12;
                        if (ampm === 'AM' && hour === 12) hour = 0;
                    }
                } else {
                    hour = parseInt(this.container.find('.right .hourselect').val(), 10);
                    minute = parseInt(this.container.find('.right .minuteselect').val(), 10);
                    second = this.timePickerSeconds ? parseInt(this.container.find('.right .secondselect').val(), 10) : 0;
                    if (!this.timePicker24Hour) {
                        var ampm = this.container.find('.right .ampmselect').val();
                        if (ampm === 'PM' && hour < 12) hour += 12;
                        if (ampm === 'AM' && hour === 12) hour = 0;
                    }
                }
                this.leftCalendar.month.hour(hour).minute(minute).second(second);
                this.rightCalendar.month.hour(hour).minute(minute).second(second);
            }

            this.renderCalendar('left');
            this.renderCalendar('right');

            //highlight any predefined range matching the current start and end dates
            this.container.find('.ranges li').removeClass('active');
            if (this.endDate == null) return;

            this.calculateChosenLabel();
        },

        renderCalendar: function renderCalendar(side) {

            //
            // Build the matrix of dates that will populate the calendar
            //

            var calendar = side == 'left' ? this.leftCalendar : this.rightCalendar;
            var month = calendar.month.month();
            var year = calendar.month.year();
            var hour = calendar.month.hour();
            var minute = calendar.month.minute();
            var second = calendar.month.second();
            var daysInMonth = moment([year, month]).daysInMonth();
            var firstDay = moment([year, month, 1]);
            var lastDay = moment([year, month, daysInMonth]);
            var lastMonth = moment(firstDay).subtract(1, 'month').month();
            var lastYear = moment(firstDay).subtract(1, 'month').year();
            var daysInLastMonth = moment([lastYear, lastMonth]).daysInMonth();
            var dayOfWeek = firstDay.day();

            //initialize a 6 rows x 7 columns array for the calendar
            var calendar = [];
            calendar.firstDay = firstDay;
            calendar.lastDay = lastDay;

            for (var i = 0; i < 6; i++) {
                calendar[i] = [];
            }

            //populate the calendar with date objects
            var startDay = daysInLastMonth - dayOfWeek + this.locale.firstDay + 1;
            if (startDay > daysInLastMonth) startDay -= 7;

            if (dayOfWeek == this.locale.firstDay) startDay = daysInLastMonth - 6;

            var curDate = moment([lastYear, lastMonth, startDay, 12, minute, second]);

            var col, row;
            for (var i = 0, col = 0, row = 0; i < 42; i++, col++, curDate = moment(curDate).add(24, 'hour')) {
                if (i > 0 && col % 7 === 0) {
                    col = 0;
                    row++;
                }
                calendar[row][col] = curDate.clone().hour(hour).minute(minute).second(second);
                curDate.hour(12);

                if (this.minDate && calendar[row][col].format('YYYY-MM-DD') == this.minDate.format('YYYY-MM-DD') && calendar[row][col].isBefore(this.minDate) && side == 'left') {
                    calendar[row][col] = this.minDate.clone();
                }

                if (this.maxDate && calendar[row][col].format('YYYY-MM-DD') == this.maxDate.format('YYYY-MM-DD') && calendar[row][col].isAfter(this.maxDate) && side == 'right') {
                    calendar[row][col] = this.maxDate.clone();
                }
            }

            //make the calendar object available to hoverDate/clickDate
            if (side == 'left') {
                this.leftCalendar.calendar = calendar;
            } else {
                this.rightCalendar.calendar = calendar;
            }

            //
            // Display the calendar
            //

            var minDate = side == 'left' ? this.minDate : this.startDate;
            var maxDate = this.maxDate;
            var selected = side == 'left' ? this.startDate : this.endDate;
            var arrow = this.locale.direction == 'ltr' ? { left: 'chevron-left', right: 'chevron-right' } : { left: 'chevron-right', right: 'chevron-left' };

            var html = '<table class="table-condensed">';
            html += '<thead>';
            html += '<tr>';

            // add empty cell for week number
            if (this.showWeekNumbers || this.showISOWeekNumbers) html += '<th></th>';

            if ((!minDate || minDate.isBefore(calendar.firstDay)) && (!this.linkedCalendars || side == 'left')) {
                html += '<th class="prev available"><i class="fa fa-' + arrow.left + ' glyphicon glyphicon-' + arrow.left + '"></i></th>';
            } else {
                html += '<th></th>';
            }

            var dateHtml = this.locale.monthNames[calendar[1][1].month()] + calendar[1][1].format(" YYYY");

            if (this.showDropdowns) {
                var currentMonth = calendar[1][1].month();
                var currentYear = calendar[1][1].year();
                var maxYear = maxDate && maxDate.year() || currentYear + 5;
                var minYear = minDate && minDate.year() || currentYear - 50;
                var inMinYear = currentYear == minYear;
                var inMaxYear = currentYear == maxYear;

                var monthHtml = '<select class="monthselect">';
                for (var m = 0; m < 12; m++) {
                    if ((!inMinYear || m >= minDate.month()) && (!inMaxYear || m <= maxDate.month())) {
                        monthHtml += "<option value='" + m + "'" + (m === currentMonth ? " selected='selected'" : "") + ">" + this.locale.monthNames[m] + "</option>";
                    } else {
                        monthHtml += "<option value='" + m + "'" + (m === currentMonth ? " selected='selected'" : "") + " disabled='disabled'>" + this.locale.monthNames[m] + "</option>";
                    }
                }
                monthHtml += "</select>";

                var yearHtml = '<select class="yearselect">';
                for (var y = minYear; y <= maxYear; y++) {
                    yearHtml += '<option value="' + y + '"' + (y === currentYear ? ' selected="selected"' : '') + '>' + y + '</option>';
                }
                yearHtml += '</select>';

                dateHtml = monthHtml + yearHtml;
            }

            html += '<th colspan="5" class="month">' + dateHtml + '</th>';
            if ((!maxDate || maxDate.isAfter(calendar.lastDay)) && (!this.linkedCalendars || side == 'right' || this.singleDatePicker)) {
                html += '<th class="next available"><i class="fa fa-' + arrow.right + ' glyphicon glyphicon-' + arrow.right + '"></i></th>';
            } else {
                html += '<th></th>';
            }

            html += '</tr>';
            html += '<tr>';

            // add week number label
            if (this.showWeekNumbers || this.showISOWeekNumbers) html += '<th class="week">' + this.locale.weekLabel + '</th>';

            $.each(this.locale.daysOfWeek, function (index, dayOfWeek) {
                html += '<th>' + dayOfWeek + '</th>';
            });

            html += '</tr>';
            html += '</thead>';
            html += '<tbody>';

            //adjust maxDate to reflect the dateLimit setting in order to
            //grey out end dates beyond the dateLimit
            if (this.endDate == null && this.dateLimit) {
                var maxLimit = this.startDate.clone().add(this.dateLimit).endOf('day');
                if (!maxDate || maxLimit.isBefore(maxDate)) {
                    maxDate = maxLimit;
                }
            }

            for (var row = 0; row < 6; row++) {
                html += '<tr>';

                // add week number
                if (this.showWeekNumbers) html += '<td class="week">' + calendar[row][0].week() + '</td>';else if (this.showISOWeekNumbers) html += '<td class="week">' + calendar[row][0].isoWeek() + '</td>';

                for (var col = 0; col < 7; col++) {

                    var classes = [];

                    //highlight today's date
                    if (calendar[row][col].isSame(new Date(), "day")) classes.push('today');

                    //highlight weekends
                    if (calendar[row][col].isoWeekday() > 5) classes.push('weekend');

                    //grey out the dates in other months displayed at beginning and end of this calendar
                    if (calendar[row][col].month() != calendar[1][1].month()) classes.push('off');

                    //don't allow selection of dates before the minimum date
                    if (this.minDate && calendar[row][col].isBefore(this.minDate, 'day')) classes.push('off', 'disabled');

                    //don't allow selection of dates after the maximum date
                    if (maxDate && calendar[row][col].isAfter(maxDate, 'day')) classes.push('off', 'disabled');

                    //don't allow selection of date if a custom function decides it's invalid
                    if (this.isInvalidDate(calendar[row][col])) classes.push('off', 'disabled');

                    //highlight the currently selected start date
                    if (calendar[row][col].format('YYYY-MM-DD') == this.startDate.format('YYYY-MM-DD')) classes.push('active', 'start-date');

                    //highlight the currently selected end date
                    if (this.endDate != null && calendar[row][col].format('YYYY-MM-DD') == this.endDate.format('YYYY-MM-DD')) classes.push('active', 'end-date');

                    //highlight dates in-between the selected dates
                    if (this.endDate != null && calendar[row][col] > this.startDate && calendar[row][col] < this.endDate) classes.push('in-range');

                    //apply custom classes for this date
                    var isCustom = this.isCustomDate(calendar[row][col]);
                    if (isCustom !== false) {
                        if (typeof isCustom === 'string') classes.push(isCustom);else Array.prototype.push.apply(classes, isCustom);
                    }

                    var cname = '',
                        disabled = false;
                    for (var i = 0; i < classes.length; i++) {
                        cname += classes[i] + ' ';
                        if (classes[i] == 'disabled') disabled = true;
                    }
                    if (!disabled) cname += 'available';

                    html += '<td class="' + cname.replace(/^\s+|\s+$/g, '') + '" data-title="' + 'r' + row + 'c' + col + '">' + calendar[row][col].date() + '</td>';
                }
                html += '</tr>';
            }

            html += '</tbody>';
            html += '</table>';

            this.container.find('.calendar.' + side + ' .calendar-table').html(html);
        },

        renderTimePicker: function renderTimePicker(side) {

            // Don't bother updating the time picker if it's currently disabled
            // because an end date hasn't been clicked yet
            if (side == 'right' && !this.endDate) return;

            var html,
                selected,
                minDate,
                maxDate = this.maxDate;

            if (this.dateLimit && (!this.maxDate || this.startDate.clone().add(this.dateLimit).isAfter(this.maxDate))) maxDate = this.startDate.clone().add(this.dateLimit);

            if (side == 'left') {
                selected = this.startDate.clone();
                minDate = this.minDate;
            } else if (side == 'right') {
                selected = this.endDate.clone();
                minDate = this.startDate;

                //Preserve the time already selected
                var timeSelector = this.container.find('.calendar.right .calendar-time div');
                if (timeSelector.html() != '') {

                    selected.hour(timeSelector.find('.hourselect option:selected').val() || selected.hour());
                    selected.minute(timeSelector.find('.minuteselect option:selected').val() || selected.minute());
                    selected.second(timeSelector.find('.secondselect option:selected').val() || selected.second());

                    if (!this.timePicker24Hour) {
                        var ampm = timeSelector.find('.ampmselect option:selected').val();
                        if (ampm === 'PM' && selected.hour() < 12) selected.hour(selected.hour() + 12);
                        if (ampm === 'AM' && selected.hour() === 12) selected.hour(0);
                    }
                }

                if (selected.isBefore(this.startDate)) selected = this.startDate.clone();

                if (maxDate && selected.isAfter(maxDate)) selected = maxDate.clone();
            }

            //
            // hours
            //

            html = '<select class="hourselect">';

            var start = this.timePicker24Hour ? 0 : 1;
            var end = this.timePicker24Hour ? 23 : 12;

            for (var i = start; i <= end; i++) {
                var i_in_24 = i;
                if (!this.timePicker24Hour) i_in_24 = selected.hour() >= 12 ? i == 12 ? 12 : i + 12 : i == 12 ? 0 : i;

                var time = selected.clone().hour(i_in_24);
                var disabled = false;
                if (minDate && time.minute(59).isBefore(minDate)) disabled = true;
                if (maxDate && time.minute(0).isAfter(maxDate)) disabled = true;

                if (i_in_24 == selected.hour() && !disabled) {
                    html += '<option value="' + i + '" selected="selected">' + i + '</option>';
                } else if (disabled) {
                    html += '<option value="' + i + '" disabled="disabled" class="disabled">' + i + '</option>';
                } else {
                    html += '<option value="' + i + '">' + i + '</option>';
                }
            }

            html += '</select> ';

            //
            // minutes
            //

            html += ': <select class="minuteselect">';

            for (var i = 0; i < 60; i += this.timePickerIncrement) {
                var padded = i < 10 ? '0' + i : i;
                var time = selected.clone().minute(i);

                var disabled = false;
                if (minDate && time.second(59).isBefore(minDate)) disabled = true;
                if (maxDate && time.second(0).isAfter(maxDate)) disabled = true;

                if (selected.minute() == i && !disabled) {
                    html += '<option value="' + i + '" selected="selected">' + padded + '</option>';
                } else if (disabled) {
                    html += '<option value="' + i + '" disabled="disabled" class="disabled">' + padded + '</option>';
                } else {
                    html += '<option value="' + i + '">' + padded + '</option>';
                }
            }

            html += '</select> ';

            //
            // seconds
            //

            if (this.timePickerSeconds) {
                html += ': <select class="secondselect">';

                for (var i = 0; i < 60; i++) {
                    var padded = i < 10 ? '0' + i : i;
                    var time = selected.clone().second(i);

                    var disabled = false;
                    if (minDate && time.isBefore(minDate)) disabled = true;
                    if (maxDate && time.isAfter(maxDate)) disabled = true;

                    if (selected.second() == i && !disabled) {
                        html += '<option value="' + i + '" selected="selected">' + padded + '</option>';
                    } else if (disabled) {
                        html += '<option value="' + i + '" disabled="disabled" class="disabled">' + padded + '</option>';
                    } else {
                        html += '<option value="' + i + '">' + padded + '</option>';
                    }
                }

                html += '</select> ';
            }

            //
            // AM/PM
            //

            if (!this.timePicker24Hour) {
                html += '<select class="ampmselect">';

                var am_html = '';
                var pm_html = '';

                if (minDate && selected.clone().hour(12).minute(0).second(0).isBefore(minDate)) am_html = ' disabled="disabled" class="disabled"';

                if (maxDate && selected.clone().hour(0).minute(0).second(0).isAfter(maxDate)) pm_html = ' disabled="disabled" class="disabled"';

                if (selected.hour() >= 12) {
                    html += '<option value="AM"' + am_html + '>AM</option><option value="PM" selected="selected"' + pm_html + '>PM</option>';
                } else {
                    html += '<option value="AM" selected="selected"' + am_html + '>AM</option><option value="PM"' + pm_html + '>PM</option>';
                }

                html += '</select>';
            }

            this.container.find('.calendar.' + side + ' .calendar-time div').html(html);
        },

        updateFormInputs: function updateFormInputs() {

            //ignore mouse movements while an above-calendar text input has focus
            if (this.container.find('input[name=daterangepicker_start]').is(":focus") || this.container.find('input[name=daterangepicker_end]').is(":focus")) return;

            this.container.find('input[name=daterangepicker_start]').val(this.startDate.format(this.locale.format));
            if (this.endDate) this.container.find('input[name=daterangepicker_end]').val(this.endDate.format(this.locale.format));

            if (this.singleDatePicker || this.endDate && (this.startDate.isBefore(this.endDate) || this.startDate.isSame(this.endDate))) {
                this.container.find('button.applyBtn').removeAttr('disabled');
            } else {
                this.container.find('button.applyBtn').attr('disabled', 'disabled');
            }
        },

        move: function move() {
            var parentOffset = { top: 0, left: 0 },
                containerTop;
            var parentRightEdge = $(window).width();
            if (!this.parentEl.is('body')) {
                parentOffset = {
                    top: this.parentEl.offset().top - this.parentEl.scrollTop(),
                    left: this.parentEl.offset().left - this.parentEl.scrollLeft()
                };
                parentRightEdge = this.parentEl[0].clientWidth + this.parentEl.offset().left;
            }

            if (this.drops == 'up') containerTop = this.element.offset().top - this.container.outerHeight() - parentOffset.top;else containerTop = this.element.offset().top + this.element.outerHeight() - parentOffset.top;
            this.container[this.drops == 'up' ? 'addClass' : 'removeClass']('dropup');

            if (this.opens == 'left') {
                this.container.css({
                    top: containerTop,
                    right: parentRightEdge - this.element.offset().left - this.element.outerWidth(),
                    left: 'auto'
                });
                if (this.container.offset().left < 0) {
                    this.container.css({
                        right: 'auto',
                        left: 9
                    });
                }
            } else if (this.opens == 'center') {
                this.container.css({
                    top: containerTop,
                    left: this.element.offset().left - parentOffset.left + this.element.outerWidth() / 2 - this.container.outerWidth() / 2,
                    right: 'auto'
                });
                if (this.container.offset().left < 0) {
                    this.container.css({
                        right: 'auto',
                        left: 9
                    });
                }
            } else {
                this.container.css({
                    top: containerTop,
                    left: this.element.offset().left - parentOffset.left,
                    right: 'auto'
                });
                if (this.container.offset().left + this.container.outerWidth() > $(window).width()) {
                    this.container.css({
                        left: 'auto',
                        right: 0
                    });
                }
            }
        },

        show: function show(e) {
            if (this.isShowing) return;

            // Create a click proxy that is private to this instance of datepicker, for unbinding
            this._outsideClickProxy = $.proxy(function (e) {
                this.outsideClick(e);
            }, this);

            // Bind global datepicker mousedown for hiding and
            $(document).on('mousedown.daterangepicker', this._outsideClickProxy)
            // also support mobile devices
            .on('touchend.daterangepicker', this._outsideClickProxy)
            // also explicitly play nice with Bootstrap dropdowns, which stopPropagation when clicking them
            .on('click.daterangepicker', '[data-toggle=dropdown]', this._outsideClickProxy)
            // and also close when focus changes to outside the picker (eg. tabbing between controls)
            .on('focusin.daterangepicker', this._outsideClickProxy);

            // Reposition the picker if the window is resized while it's open
            $(window).on('resize.daterangepicker', $.proxy(function (e) {
                this.move(e);
            }, this));

            this.oldStartDate = this.startDate.clone();
            this.oldEndDate = this.endDate.clone();
            this.previousRightTime = this.endDate.clone();

            this.updateView();
            this.container.show();
            this.move();
            this.element.trigger('show.daterangepicker', this);
            this.isShowing = true;
        },

        hide: function hide(e) {
            if (!this.isShowing) return;

            //incomplete date selection, revert to last values
            if (!this.endDate) {
                this.startDate = this.oldStartDate.clone();
                this.endDate = this.oldEndDate.clone();
            }

            //if a new date range was selected, invoke the user callback function
            if (!this.startDate.isSame(this.oldStartDate) || !this.endDate.isSame(this.oldEndDate)) this.callback(this.startDate, this.endDate, this.chosenLabel);

            //if picker is attached to a text input, update it
            this.updateElement();

            $(document).off('.daterangepicker');
            $(window).off('.daterangepicker');
            this.container.hide();
            this.element.trigger('hide.daterangepicker', this);
            this.isShowing = false;
        },

        toggle: function toggle(e) {
            if (this.isShowing) {
                this.hide();
            } else {
                this.show();
            }
        },

        outsideClick: function outsideClick(e) {
            var target = $(e.target);
            // if the page is clicked anywhere except within the daterangerpicker/button
            // itself then call this.hide()
            if (
            // ie modal dialog fix
            e.type == "focusin" || target.closest(this.element).length || target.closest(this.container).length || target.closest('.calendar-table').length) return;
            this.hide();
            this.element.trigger('outsideClick.daterangepicker', this);
        },

        showCalendars: function showCalendars() {
            this.container.addClass('show-calendar');
            this.move();
            this.element.trigger('showCalendar.daterangepicker', this);
        },

        hideCalendars: function hideCalendars() {
            this.container.removeClass('show-calendar');
            this.element.trigger('hideCalendar.daterangepicker', this);
        },

        hoverRange: function hoverRange(e) {

            //ignore mouse movements while an above-calendar text input has focus
            if (this.container.find('input[name=daterangepicker_start]').is(":focus") || this.container.find('input[name=daterangepicker_end]').is(":focus")) return;

            var label = e.target.getAttribute('data-range-key');

            if (label == this.locale.customRangeLabel) {
                this.updateView();
            } else {
                var dates = this.ranges[label];
                this.container.find('input[name=daterangepicker_start]').val(dates[0].format(this.locale.format));
                this.container.find('input[name=daterangepicker_end]').val(dates[1].format(this.locale.format));
            }
        },

        clickRange: function clickRange(e) {
            var label = e.target.getAttribute('data-range-key');
            this.chosenLabel = label;
            if (label == this.locale.customRangeLabel) {
                this.showCalendars();
            } else {
                var dates = this.ranges[label];
                this.startDate = dates[0];
                this.endDate = dates[1];

                if (!this.timePicker) {
                    this.startDate.startOf('day');
                    this.endDate.endOf('day');
                }

                if (!this.alwaysShowCalendars) this.hideCalendars();
                this.clickApply();
            }
        },

        clickPrev: function clickPrev(e) {
            var cal = $(e.target).parents('.calendar');
            if (cal.hasClass('left')) {
                this.leftCalendar.month.subtract(1, 'month');
                if (this.linkedCalendars) this.rightCalendar.month.subtract(1, 'month');
            } else {
                this.rightCalendar.month.subtract(1, 'month');
            }
            this.updateCalendars();
        },

        clickNext: function clickNext(e) {
            var cal = $(e.target).parents('.calendar');
            if (cal.hasClass('left')) {
                this.leftCalendar.month.add(1, 'month');
            } else {
                this.rightCalendar.month.add(1, 'month');
                if (this.linkedCalendars) this.leftCalendar.month.add(1, 'month');
            }
            this.updateCalendars();
        },

        hoverDate: function hoverDate(e) {

            //ignore mouse movements while an above-calendar text input has focus
            //if (this.container.find('input[name=daterangepicker_start]').is(":focus") || this.container.find('input[name=daterangepicker_end]').is(":focus"))
            //    return;

            //ignore dates that can't be selected
            if (!$(e.target).hasClass('available')) return;

            //have the text inputs above calendars reflect the date being hovered over
            var title = $(e.target).attr('data-title');
            var row = title.substr(1, 1);
            var col = title.substr(3, 1);
            var cal = $(e.target).parents('.calendar');
            var date = cal.hasClass('left') ? this.leftCalendar.calendar[row][col] : this.rightCalendar.calendar[row][col];

            if (this.endDate && !this.container.find('input[name=daterangepicker_start]').is(":focus")) {
                this.container.find('input[name=daterangepicker_start]').val(date.format(this.locale.format));
            } else if (!this.endDate && !this.container.find('input[name=daterangepicker_end]').is(":focus")) {
                this.container.find('input[name=daterangepicker_end]').val(date.format(this.locale.format));
            }

            //highlight the dates between the start date and the date being hovered as a potential end date
            var leftCalendar = this.leftCalendar;
            var rightCalendar = this.rightCalendar;
            var startDate = this.startDate;
            if (!this.endDate) {
                this.container.find('.calendar tbody td').each(function (index, el) {

                    //skip week numbers, only look at dates
                    if ($(el).hasClass('week')) return;

                    var title = $(el).attr('data-title');
                    var row = title.substr(1, 1);
                    var col = title.substr(3, 1);
                    var cal = $(el).parents('.calendar');
                    var dt = cal.hasClass('left') ? leftCalendar.calendar[row][col] : rightCalendar.calendar[row][col];

                    if (dt.isAfter(startDate) && dt.isBefore(date) || dt.isSame(date, 'day')) {
                        $(el).addClass('in-range');
                    } else {
                        $(el).removeClass('in-range');
                    }
                });
            }
        },

        clickDate: function clickDate(e) {

            if (!$(e.target).hasClass('available')) return;

            var title = $(e.target).attr('data-title');
            var row = title.substr(1, 1);
            var col = title.substr(3, 1);
            var cal = $(e.target).parents('.calendar');
            var date = cal.hasClass('left') ? this.leftCalendar.calendar[row][col] : this.rightCalendar.calendar[row][col];

            //
            // this function needs to do a few things:
            // * alternate between selecting a start and end date for the range,
            // * if the time picker is enabled, apply the hour/minute/second from the select boxes to the clicked date
            // * if autoapply is enabled, and an end date was chosen, apply the selection
            // * if single date picker mode, and time picker isn't enabled, apply the selection immediately
            // * if one of the inputs above the calendars was focused, cancel that manual input
            //

            if (this.endDate || date.isBefore(this.startDate, 'day')) {
                //picking start
                if (this.timePicker) {
                    var hour = parseInt(this.container.find('.left .hourselect').val(), 10);
                    if (!this.timePicker24Hour) {
                        var ampm = this.container.find('.left .ampmselect').val();
                        if (ampm === 'PM' && hour < 12) hour += 12;
                        if (ampm === 'AM' && hour === 12) hour = 0;
                    }
                    var minute = parseInt(this.container.find('.left .minuteselect').val(), 10);
                    var second = this.timePickerSeconds ? parseInt(this.container.find('.left .secondselect').val(), 10) : 0;
                    date = date.clone().hour(hour).minute(minute).second(second);
                }
                this.endDate = null;
                this.setStartDate(date.clone());
            } else if (!this.endDate && date.isBefore(this.startDate)) {
                //special case: clicking the same date for start/end,
                //but the time of the end date is before the start date
                this.setEndDate(this.startDate.clone());
            } else {
                // picking end
                if (this.timePicker) {
                    var hour = parseInt(this.container.find('.right .hourselect').val(), 10);
                    if (!this.timePicker24Hour) {
                        var ampm = this.container.find('.right .ampmselect').val();
                        if (ampm === 'PM' && hour < 12) hour += 12;
                        if (ampm === 'AM' && hour === 12) hour = 0;
                    }
                    var minute = parseInt(this.container.find('.right .minuteselect').val(), 10);
                    var second = this.timePickerSeconds ? parseInt(this.container.find('.right .secondselect').val(), 10) : 0;
                    date = date.clone().hour(hour).minute(minute).second(second);
                }
                this.setEndDate(date.clone());
                if (this.autoApply) {
                    this.calculateChosenLabel();
                    this.clickApply();
                }
            }

            if (this.singleDatePicker) {
                this.setEndDate(this.startDate);
                if (!this.timePicker) this.clickApply();
            }

            this.updateView();

            //This is to cancel the blur event handler if the mouse was in one of the inputs
            e.stopPropagation();
        },

        calculateChosenLabel: function calculateChosenLabel() {
            var customRange = true;
            var i = 0;
            for (var range in this.ranges) {
                if (this.timePicker) {
                    if (this.startDate.isSame(this.ranges[range][0]) && this.endDate.isSame(this.ranges[range][1])) {
                        customRange = false;
                        this.chosenLabel = this.container.find('.ranges li:eq(' + i + ')').addClass('active').html();
                        break;
                    }
                } else {
                    //ignore times when comparing dates if time picker is not enabled
                    if (this.startDate.format('YYYY-MM-DD') == this.ranges[range][0].format('YYYY-MM-DD') && this.endDate.format('YYYY-MM-DD') == this.ranges[range][1].format('YYYY-MM-DD')) {
                        customRange = false;
                        this.chosenLabel = this.container.find('.ranges li:eq(' + i + ')').addClass('active').html();
                        break;
                    }
                }
                i++;
            }
            if (customRange) {
                if (this.showCustomRangeLabel) {
                    this.chosenLabel = this.container.find('.ranges li:last').addClass('active').html();
                } else {
                    this.chosenLabel = null;
                }
                this.showCalendars();
            }
        },

        clickApply: function clickApply(e) {
            this.hide();
            this.element.trigger('apply.daterangepicker', this);
        },

        clickCancel: function clickCancel(e) {
            this.startDate = this.oldStartDate;
            this.endDate = this.oldEndDate;
            this.hide();
            this.element.trigger('cancel.daterangepicker', this);
        },

        monthOrYearChanged: function monthOrYearChanged(e) {
            var isLeft = $(e.target).closest('.calendar').hasClass('left'),
                leftOrRight = isLeft ? 'left' : 'right',
                cal = this.container.find('.calendar.' + leftOrRight);

            // Month must be Number for new moment versions
            var month = parseInt(cal.find('.monthselect').val(), 10);
            var year = cal.find('.yearselect').val();

            if (!isLeft) {
                if (year < this.startDate.year() || year == this.startDate.year() && month < this.startDate.month()) {
                    month = this.startDate.month();
                    year = this.startDate.year();
                }
            }

            if (this.minDate) {
                if (year < this.minDate.year() || year == this.minDate.year() && month < this.minDate.month()) {
                    month = this.minDate.month();
                    year = this.minDate.year();
                }
            }

            if (this.maxDate) {
                if (year > this.maxDate.year() || year == this.maxDate.year() && month > this.maxDate.month()) {
                    month = this.maxDate.month();
                    year = this.maxDate.year();
                }
            }

            if (isLeft) {
                this.leftCalendar.month.month(month).year(year);
                if (this.linkedCalendars) this.rightCalendar.month = this.leftCalendar.month.clone().add(1, 'month');
            } else {
                this.rightCalendar.month.month(month).year(year);
                if (this.linkedCalendars) this.leftCalendar.month = this.rightCalendar.month.clone().subtract(1, 'month');
            }
            this.updateCalendars();
        },

        timeChanged: function timeChanged(e) {

            var cal = $(e.target).closest('.calendar'),
                isLeft = cal.hasClass('left');

            var hour = parseInt(cal.find('.hourselect').val(), 10);
            var minute = parseInt(cal.find('.minuteselect').val(), 10);
            var second = this.timePickerSeconds ? parseInt(cal.find('.secondselect').val(), 10) : 0;

            if (!this.timePicker24Hour) {
                var ampm = cal.find('.ampmselect').val();
                if (ampm === 'PM' && hour < 12) hour += 12;
                if (ampm === 'AM' && hour === 12) hour = 0;
            }

            if (isLeft) {
                var start = this.startDate.clone();
                start.hour(hour);
                start.minute(minute);
                start.second(second);
                this.setStartDate(start);
                if (this.singleDatePicker) {
                    this.endDate = this.startDate.clone();
                } else if (this.endDate && this.endDate.format('YYYY-MM-DD') == start.format('YYYY-MM-DD') && this.endDate.isBefore(start)) {
                    this.setEndDate(start.clone());
                }
            } else if (this.endDate) {
                var end = this.endDate.clone();
                end.hour(hour);
                end.minute(minute);
                end.second(second);
                this.setEndDate(end);
            }

            //update the calendars so all clickable dates reflect the new time component
            this.updateCalendars();

            //update the form inputs above the calendars with the new time
            this.updateFormInputs();

            //re-render the time pickers because changing one selection can affect what's enabled in another
            this.renderTimePicker('left');
            this.renderTimePicker('right');
        },

        formInputsChanged: function formInputsChanged(e) {
            var isRight = $(e.target).closest('.calendar').hasClass('right');
            var start = moment(this.container.find('input[name="daterangepicker_start"]').val(), this.locale.format);
            var end = moment(this.container.find('input[name="daterangepicker_end"]').val(), this.locale.format);

            if (start.isValid() && end.isValid()) {

                if (isRight && end.isBefore(start)) start = end.clone();

                this.setStartDate(start);
                this.setEndDate(end);

                if (isRight) {
                    this.container.find('input[name="daterangepicker_start"]').val(this.startDate.format(this.locale.format));
                } else {
                    this.container.find('input[name="daterangepicker_end"]').val(this.endDate.format(this.locale.format));
                }
            }

            this.updateView();
        },

        formInputsFocused: function formInputsFocused(e) {

            // Highlight the focused input
            this.container.find('input[name="daterangepicker_start"], input[name="daterangepicker_end"]').removeClass('active');
            $(e.target).addClass('active');

            // Set the state such that if the user goes back to using a mouse, 
            // the calendars are aware we're selecting the end of the range, not
            // the start. This allows someone to edit the end of a date range without
            // re-selecting the beginning, by clicking on the end date input then
            // using the calendar.
            var isRight = $(e.target).closest('.calendar').hasClass('right');
            if (isRight) {
                this.endDate = null;
                this.setStartDate(this.startDate.clone());
                this.updateView();
            }
        },

        formInputsBlurred: function formInputsBlurred(e) {

            // this function has one purpose right now: if you tab from the first
            // text input to the second in the UI, the endDate is nulled so that
            // you can click another, but if you tab out without clicking anything
            // or changing the input value, the old endDate should be retained

            if (!this.endDate) {
                var val = this.container.find('input[name="daterangepicker_end"]').val();
                var end = moment(val, this.locale.format);
                if (end.isValid()) {
                    this.setEndDate(end);
                    this.updateView();
                }
            }
        },

        elementChanged: function elementChanged() {
            if (!this.element.is('input')) return;
            if (!this.element.val().length) return;
            if (this.element.val().length < this.locale.format.length) return;

            var dateString = this.element.val().split(this.locale.separator),
                start = null,
                end = null;

            if (dateString.length === 2) {
                start = moment(dateString[0], this.locale.format);
                end = moment(dateString[1], this.locale.format);
            }

            if (this.singleDatePicker || start === null || end === null) {
                start = moment(this.element.val(), this.locale.format);
                end = start;
            }

            if (!start.isValid() || !end.isValid()) return;

            this.setStartDate(start);
            this.setEndDate(end);
            this.updateView();
        },

        keydown: function keydown(e) {
            //hide on tab or enter
            if (e.keyCode === 9 || e.keyCode === 13) {
                this.hide();
            }
        },

        updateElement: function updateElement() {
            if (this.element.is('input') && !this.singleDatePicker && this.autoUpdateInput) {
                this.element.val(this.startDate.format(this.locale.format) + this.locale.separator + this.endDate.format(this.locale.format));
                this.element.trigger('change');
            } else if (this.element.is('input') && this.autoUpdateInput) {
                this.element.val(this.startDate.format(this.locale.format));
                this.element.trigger('change');
            }
        },

        remove: function remove() {
            this.container.remove();
            this.element.off('.daterangepicker');
            this.element.removeData();
        }

    };

    $.fn.daterangepicker = function (options, callback) {
        this.each(function () {
            var el = $(this);
            if (el.data('daterangepicker')) el.data('daterangepicker').remove();
            el.data('daterangepicker', new DateRangePicker(el, options, callback));
        });
        return this;
    };

    return DateRangePicker;
});

!function (a) {
    "use strict";
    if ("function" == typeof define && define.amd) define(["jquery", "moment"], a);else if ("object" == (typeof exports === "undefined" ? "undefined" : _typeof2(exports))) module.exports = a(require("jquery"), require("moment"));else {
        if ("undefined" == typeof jQuery) throw "bootstrap-datetimepicker requires jQuery to be loaded first";if ("undefined" == typeof moment) throw "bootstrap-datetimepicker requires Moment.js to be loaded first";a(jQuery, moment);
    }
}(function (a, b) {
    "use strict";
    if (!b) throw new Error("bootstrap-datetimepicker requires Moment.js to be loaded first");var c = function c(_c2, d) {
        var e,
            f,
            g,
            h,
            i,
            j,
            k,
            l = {},
            m = !0,
            n = !1,
            o = !1,
            p = 0,
            q = [{ clsName: "days", navFnc: "M", navStep: 1 }, { clsName: "months", navFnc: "y", navStep: 1 }, { clsName: "years", navFnc: "y", navStep: 10 }, { clsName: "decades", navFnc: "y", navStep: 100 }],
            r = ["days", "months", "years", "decades"],
            s = ["top", "bottom", "auto"],
            t = ["left", "right", "auto"],
            u = ["default", "top", "bottom"],
            v = { up: 38, 38: "up", down: 40, 40: "down", left: 37, 37: "left", right: 39, 39: "right", tab: 9, 9: "tab", escape: 27, 27: "escape", enter: 13, 13: "enter", pageUp: 33, 33: "pageUp", pageDown: 34, 34: "pageDown", shift: 16, 16: "shift", control: 17, 17: "control", space: 32, 32: "space", t: 84, 84: "t", delete: 46, 46: "delete" },
            w = {},
            x = function x() {
            return void 0 !== b.tz && void 0 !== d.timeZone && null !== d.timeZone && "" !== d.timeZone;
        },
            y = function y(a) {
            var c;return c = void 0 === a || null === a ? b() : b.isDate(a) || b.isMoment(a) ? b(a) : x() ? b.tz(a, j, d.useStrict, d.timeZone) : b(a, j, d.useStrict), x() && c.tz(d.timeZone), c;
        },
            z = function z(a) {
            if ("string" != typeof a || a.length > 1) throw new TypeError("isEnabled expects a single character string parameter");switch (a) {case "y":
                    return i.indexOf("Y") !== -1;case "M":
                    return i.indexOf("M") !== -1;case "d":
                    return i.toLowerCase().indexOf("d") !== -1;case "h":case "H":
                    return i.toLowerCase().indexOf("h") !== -1;case "m":
                    return i.indexOf("m") !== -1;case "s":
                    return i.indexOf("s") !== -1;default:
                    return !1;}
        },
            A = function A() {
            return z("h") || z("m") || z("s");
        },
            B = function B() {
            return z("y") || z("M") || z("d");
        },
            C = function C() {
            var b = a("<thead>").append(a("<tr>").append(a("<th>").addClass("prev").attr("data-action", "previous").append(a("<span>").addClass(d.icons.previous))).append(a("<th>").addClass("picker-switch").attr("data-action", "pickerSwitch").attr("colspan", d.calendarWeeks ? "6" : "5")).append(a("<th>").addClass("next").attr("data-action", "next").append(a("<span>").addClass(d.icons.next)))),
                c = a("<tbody>").append(a("<tr>").append(a("<td>").attr("colspan", d.calendarWeeks ? "8" : "7")));return [a("<div>").addClass("datepicker-days").append(a("<table>").addClass("table-condensed").append(b).append(a("<tbody>"))), a("<div>").addClass("datepicker-months").append(a("<table>").addClass("table-condensed").append(b.clone()).append(c.clone())), a("<div>").addClass("datepicker-years").append(a("<table>").addClass("table-condensed").append(b.clone()).append(c.clone())), a("<div>").addClass("datepicker-decades").append(a("<table>").addClass("table-condensed").append(b.clone()).append(c.clone()))];
        },
            D = function D() {
            var b = a("<tr>"),
                c = a("<tr>"),
                e = a("<tr>");return z("h") && (b.append(a("<td>").append(a("<a>").attr({ href: "#", tabindex: "-1", title: d.tooltips.incrementHour }).addClass("btn").attr("data-action", "incrementHours").append(a("<span>").addClass(d.icons.up)))), c.append(a("<td>").append(a("<span>").addClass("timepicker-hour").attr({ "data-time-component": "hours", title: d.tooltips.pickHour }).attr("data-action", "showHours"))), e.append(a("<td>").append(a("<a>").attr({ href: "#", tabindex: "-1", title: d.tooltips.decrementHour }).addClass("btn").attr("data-action", "decrementHours").append(a("<span>").addClass(d.icons.down))))), z("m") && (z("h") && (b.append(a("<td>").addClass("separator")), c.append(a("<td>").addClass("separator").html(":")), e.append(a("<td>").addClass("separator"))), b.append(a("<td>").append(a("<a>").attr({ href: "#", tabindex: "-1", title: d.tooltips.incrementMinute }).addClass("btn").attr("data-action", "incrementMinutes").append(a("<span>").addClass(d.icons.up)))), c.append(a("<td>").append(a("<span>").addClass("timepicker-minute").attr({ "data-time-component": "minutes", title: d.tooltips.pickMinute }).attr("data-action", "showMinutes"))), e.append(a("<td>").append(a("<a>").attr({ href: "#", tabindex: "-1", title: d.tooltips.decrementMinute }).addClass("btn").attr("data-action", "decrementMinutes").append(a("<span>").addClass(d.icons.down))))), z("s") && (z("m") && (b.append(a("<td>").addClass("separator")), c.append(a("<td>").addClass("separator").html(":")), e.append(a("<td>").addClass("separator"))), b.append(a("<td>").append(a("<a>").attr({ href: "#", tabindex: "-1", title: d.tooltips.incrementSecond }).addClass("btn").attr("data-action", "incrementSeconds").append(a("<span>").addClass(d.icons.up)))), c.append(a("<td>").append(a("<span>").addClass("timepicker-second").attr({ "data-time-component": "seconds", title: d.tooltips.pickSecond }).attr("data-action", "showSeconds"))), e.append(a("<td>").append(a("<a>").attr({ href: "#", tabindex: "-1", title: d.tooltips.decrementSecond }).addClass("btn").attr("data-action", "decrementSeconds").append(a("<span>").addClass(d.icons.down))))), h || (b.append(a("<td>").addClass("separator")), c.append(a("<td>").append(a("<button>").addClass("btn btn-primary").attr({ "data-action": "togglePeriod", tabindex: "-1", title: d.tooltips.togglePeriod }))), e.append(a("<td>").addClass("separator"))), a("<div>").addClass("timepicker-picker").append(a("<table>").addClass("table-condensed").append([b, c, e]));
        },
            E = function E() {
            var b = a("<div>").addClass("timepicker-hours").append(a("<table>").addClass("table-condensed")),
                c = a("<div>").addClass("timepicker-minutes").append(a("<table>").addClass("table-condensed")),
                d = a("<div>").addClass("timepicker-seconds").append(a("<table>").addClass("table-condensed")),
                e = [D()];return z("h") && e.push(b), z("m") && e.push(c), z("s") && e.push(d), e;
        },
            F = function F() {
            var b = [];return d.showTodayButton && b.push(a("<td>").append(a("<a>").attr({ "data-action": "today", title: d.tooltips.today }).append(a("<span>").addClass(d.icons.today)))), !d.sideBySide && B() && A() && b.push(a("<td>").append(a("<a>").attr({ "data-action": "togglePicker", title: d.tooltips.selectTime }).append(a("<span>").addClass(d.icons.time)))), d.showClear && b.push(a("<td>").append(a("<a>").attr({ "data-action": "clear", title: d.tooltips.clear }).append(a("<span>").addClass(d.icons.clear)))), d.showClose && b.push(a("<td>").append(a("<a>").attr({ "data-action": "close", title: d.tooltips.close }).append(a("<span>").addClass(d.icons.close)))), a("<table>").addClass("table-condensed").append(a("<tbody>").append(a("<tr>").append(b)));
        },
            G = function G() {
            var b = a("<div>").addClass("bootstrap-datetimepicker-widget dropdown-menu"),
                c = a("<div>").addClass("datepicker").append(C()),
                e = a("<div>").addClass("timepicker").append(E()),
                f = a("<ul>").addClass("list-unstyled"),
                g = a("<li>").addClass("picker-switch" + (d.collapse ? " accordion-toggle" : "")).append(F());return d.inline && b.removeClass("dropdown-menu"), h && b.addClass("usetwentyfour"), z("s") && !h && b.addClass("wider"), d.sideBySide && B() && A() ? (b.addClass("timepicker-sbs"), "top" === d.toolbarPlacement && b.append(g), b.append(a("<div>").addClass("row").append(c.addClass("col-md-6")).append(e.addClass("col-md-6"))), "bottom" === d.toolbarPlacement && b.append(g), b) : ("top" === d.toolbarPlacement && f.append(g), B() && f.append(a("<li>").addClass(d.collapse && A() ? "collapse in" : "").append(c)), "default" === d.toolbarPlacement && f.append(g), A() && f.append(a("<li>").addClass(d.collapse && B() ? "collapse" : "").append(e)), "bottom" === d.toolbarPlacement && f.append(g), b.append(f));
        },
            H = function H() {
            var b,
                e = {};return b = _c2.is("input") || d.inline ? _c2.data() : _c2.find("input").data(), b.dateOptions && b.dateOptions instanceof Object && (e = a.extend(!0, e, b.dateOptions)), a.each(d, function (a) {
                var c = "date" + a.charAt(0).toUpperCase() + a.slice(1);void 0 !== b[c] && (e[a] = b[c]);
            }), e;
        },
            I = function I() {
            var b,
                e = (n || _c2).position(),
                f = (n || _c2).offset(),
                g = d.widgetPositioning.vertical,
                h = d.widgetPositioning.horizontal;if (d.widgetParent) b = d.widgetParent.append(o);else if (_c2.is("input")) b = _c2.after(o).parent();else {
                if (d.inline) return void (b = _c2.append(o));b = _c2, _c2.children().first().after(o);
            }if ("auto" === g && (g = f.top + 1.5 * o.height() >= a(window).height() + a(window).scrollTop() && o.height() + _c2.outerHeight() < f.top ? "top" : "bottom"), "auto" === h && (h = b.width() < f.left + o.outerWidth() / 2 && f.left + o.outerWidth() > a(window).width() ? "right" : "left"), "top" === g ? o.addClass("top").removeClass("bottom") : o.addClass("bottom").removeClass("top"), "right" === h ? o.addClass("pull-right") : o.removeClass("pull-right"), "static" === b.css("position") && (b = b.parents().filter(function () {
                return "static" !== a(this).css("position");
            }).first()), 0 === b.length) throw new Error("datetimepicker component should be placed within a non-static positioned container");o.css({ top: "top" === g ? "auto" : e.top + _c2.outerHeight(), bottom: "top" === g ? b.outerHeight() - (b === _c2 ? 0 : e.top) : "auto", left: "left" === h ? b === _c2 ? 0 : e.left : "auto", right: "left" === h ? "auto" : b.outerWidth() - _c2.outerWidth() - (b === _c2 ? 0 : e.left) });
        },
            J = function J(a) {
            "dp.change" === a.type && (a.date && a.date.isSame(a.oldDate) || !a.date && !a.oldDate) || _c2.trigger(a);
        },
            K = function K(a) {
            "y" === a && (a = "YYYY"), J({ type: "dp.update", change: a, viewDate: f.clone() });
        },
            L = function L(a) {
            o && (a && (k = Math.max(p, Math.min(3, k + a))), o.find(".datepicker > div").hide().filter(".datepicker-" + q[k].clsName).show());
        },
            M = function M() {
            var b = a("<tr>"),
                c = f.clone().startOf("w").startOf("d");for (d.calendarWeeks === !0 && b.append(a("<th>").addClass("cw").text("#")); c.isBefore(f.clone().endOf("w"));) {
                b.append(a("<th>").addClass("dow").text(c.format("dd"))), c.add(1, "d");
            }o.find(".datepicker-days thead").append(b);
        },
            N = function N(a) {
            return d.disabledDates[a.format("YYYY-MM-DD")] === !0;
        },
            O = function O(a) {
            return d.enabledDates[a.format("YYYY-MM-DD")] === !0;
        },
            P = function P(a) {
            return d.disabledHours[a.format("H")] === !0;
        },
            Q = function Q(a) {
            return d.enabledHours[a.format("H")] === !0;
        },
            R = function R(b, c) {
            if (!b.isValid()) return !1;if (d.disabledDates && "d" === c && N(b)) return !1;if (d.enabledDates && "d" === c && !O(b)) return !1;if (d.minDate && b.isBefore(d.minDate, c)) return !1;if (d.maxDate && b.isAfter(d.maxDate, c)) return !1;if (d.daysOfWeekDisabled && "d" === c && d.daysOfWeekDisabled.indexOf(b.day()) !== -1) return !1;if (d.disabledHours && ("h" === c || "m" === c || "s" === c) && P(b)) return !1;if (d.enabledHours && ("h" === c || "m" === c || "s" === c) && !Q(b)) return !1;if (d.disabledTimeIntervals && ("h" === c || "m" === c || "s" === c)) {
                var e = !1;if (a.each(d.disabledTimeIntervals, function () {
                    if (b.isBetween(this[0], this[1])) return e = !0, !1;
                }), e) return !1;
            }return !0;
        },
            S = function S() {
            for (var b = [], c = f.clone().startOf("y").startOf("d"); c.isSame(f, "y");) {
                b.push(a("<span>").attr("data-action", "selectMonth").addClass("month").text(c.format("MMM"))), c.add(1, "M");
            }o.find(".datepicker-months td").empty().append(b);
        },
            T = function T() {
            var b = o.find(".datepicker-months"),
                c = b.find("th"),
                g = b.find("tbody").find("span");c.eq(0).find("span").attr("title", d.tooltips.prevYear), c.eq(1).attr("title", d.tooltips.selectYear), c.eq(2).find("span").attr("title", d.tooltips.nextYear), b.find(".disabled").removeClass("disabled"), R(f.clone().subtract(1, "y"), "y") || c.eq(0).addClass("disabled"), c.eq(1).text(f.year()), R(f.clone().add(1, "y"), "y") || c.eq(2).addClass("disabled"), g.removeClass("active"), e.isSame(f, "y") && !m && g.eq(e.month()).addClass("active"), g.each(function (b) {
                R(f.clone().month(b), "M") || a(this).addClass("disabled");
            });
        },
            U = function U() {
            var a = o.find(".datepicker-years"),
                b = a.find("th"),
                c = f.clone().subtract(5, "y"),
                g = f.clone().add(6, "y"),
                h = "";for (b.eq(0).find("span").attr("title", d.tooltips.prevDecade), b.eq(1).attr("title", d.tooltips.selectDecade), b.eq(2).find("span").attr("title", d.tooltips.nextDecade), a.find(".disabled").removeClass("disabled"), d.minDate && d.minDate.isAfter(c, "y") && b.eq(0).addClass("disabled"), b.eq(1).text(c.year() + "-" + g.year()), d.maxDate && d.maxDate.isBefore(g, "y") && b.eq(2).addClass("disabled"); !c.isAfter(g, "y");) {
                h += '<span data-action="selectYear" class="year' + (c.isSame(e, "y") && !m ? " active" : "") + (R(c, "y") ? "" : " disabled") + '">' + c.year() + "</span>", c.add(1, "y");
            }a.find("td").html(h);
        },
            V = function V() {
            var a,
                c = o.find(".datepicker-decades"),
                g = c.find("th"),
                h = b({ y: f.year() - f.year() % 100 - 1 }),
                i = h.clone().add(100, "y"),
                j = h.clone(),
                k = !1,
                l = !1,
                m = "";for (g.eq(0).find("span").attr("title", d.tooltips.prevCentury), g.eq(2).find("span").attr("title", d.tooltips.nextCentury), c.find(".disabled").removeClass("disabled"), (h.isSame(b({ y: 1900 })) || d.minDate && d.minDate.isAfter(h, "y")) && g.eq(0).addClass("disabled"), g.eq(1).text(h.year() + "-" + i.year()), (h.isSame(b({ y: 2e3 })) || d.maxDate && d.maxDate.isBefore(i, "y")) && g.eq(2).addClass("disabled"); !h.isAfter(i, "y");) {
                a = h.year() + 12, k = d.minDate && d.minDate.isAfter(h, "y") && d.minDate.year() <= a, l = d.maxDate && d.maxDate.isAfter(h, "y") && d.maxDate.year() <= a, m += '<span data-action="selectDecade" class="decade' + (e.isAfter(h) && e.year() <= a ? " active" : "") + (R(h, "y") || k || l ? "" : " disabled") + '" data-selection="' + (h.year() + 6) + '">' + (h.year() + 1) + " - " + (h.year() + 12) + "</span>", h.add(12, "y");
            }m += "<span></span><span></span><span></span>", c.find("td").html(m), g.eq(1).text(j.year() + 1 + "-" + h.year());
        },
            W = function W() {
            var b,
                c,
                g,
                h = o.find(".datepicker-days"),
                i = h.find("th"),
                j = [],
                k = [];if (B()) {
                for (i.eq(0).find("span").attr("title", d.tooltips.prevMonth), i.eq(1).attr("title", d.tooltips.selectMonth), i.eq(2).find("span").attr("title", d.tooltips.nextMonth), h.find(".disabled").removeClass("disabled"), i.eq(1).text(f.format(d.dayViewHeaderFormat)), R(f.clone().subtract(1, "M"), "M") || i.eq(0).addClass("disabled"), R(f.clone().add(1, "M"), "M") || i.eq(2).addClass("disabled"), b = f.clone().startOf("M").startOf("w").startOf("d"), g = 0; g < 42; g++) {
                    0 === b.weekday() && (c = a("<tr>"), d.calendarWeeks && c.append('<td class="cw">' + b.week() + "</td>"), j.push(c)), k = ["day"], b.isBefore(f, "M") && k.push("old"), b.isAfter(f, "M") && k.push("new"), b.isSame(e, "d") && !m && k.push("active"), R(b, "d") || k.push("disabled"), b.isSame(y(), "d") && k.push("today"), 0 !== b.day() && 6 !== b.day() || k.push("weekend"), J({ type: "dp.classify", date: b, classNames: k }), c.append('<td data-action="selectDay" data-day="' + b.format("L") + '" class="' + k.join(" ") + '">' + b.date() + "</td>"), b.add(1, "d");
                }h.find("tbody").empty().append(j), T(), U(), V();
            }
        },
            X = function X() {
            var b = o.find(".timepicker-hours table"),
                c = f.clone().startOf("d"),
                d = [],
                e = a("<tr>");for (f.hour() > 11 && !h && c.hour(12); c.isSame(f, "d") && (h || f.hour() < 12 && c.hour() < 12 || f.hour() > 11);) {
                c.hour() % 4 === 0 && (e = a("<tr>"), d.push(e)), e.append('<td data-action="selectHour" class="hour' + (R(c, "h") ? "" : " disabled") + '">' + c.format(h ? "HH" : "hh") + "</td>"), c.add(1, "h");
            }b.empty().append(d);
        },
            Y = function Y() {
            for (var b = o.find(".timepicker-minutes table"), c = f.clone().startOf("h"), e = [], g = a("<tr>"), h = 1 === d.stepping ? 5 : d.stepping; f.isSame(c, "h");) {
                c.minute() % (4 * h) === 0 && (g = a("<tr>"), e.push(g)), g.append('<td data-action="selectMinute" class="minute' + (R(c, "m") ? "" : " disabled") + '">' + c.format("mm") + "</td>"), c.add(h, "m");
            }b.empty().append(e);
        },
            Z = function Z() {
            for (var b = o.find(".timepicker-seconds table"), c = f.clone().startOf("m"), d = [], e = a("<tr>"); f.isSame(c, "m");) {
                c.second() % 20 === 0 && (e = a("<tr>"), d.push(e)), e.append('<td data-action="selectSecond" class="second' + (R(c, "s") ? "" : " disabled") + '">' + c.format("ss") + "</td>"), c.add(5, "s");
            }b.empty().append(d);
        },
            $ = function $() {
            var a,
                b,
                c = o.find(".timepicker span[data-time-component]");h || (a = o.find(".timepicker [data-action=togglePeriod]"), b = e.clone().add(e.hours() >= 12 ? -12 : 12, "h"), a.text(e.format("A")), R(b, "h") ? a.removeClass("disabled") : a.addClass("disabled")), c.filter("[data-time-component=hours]").text(e.format(h ? "HH" : "hh")), c.filter("[data-time-component=minutes]").text(e.format("mm")), c.filter("[data-time-component=seconds]").text(e.format("ss")), X(), Y(), Z();
        },
            _ = function _() {
            o && (W(), $());
        },
            aa = function aa(a) {
            var b = m ? null : e;if (!a) return m = !0, g.val(""), _c2.data("date", ""), J({ type: "dp.change", date: !1, oldDate: b }), void _();if (a = a.clone().locale(d.locale), x() && a.tz(d.timeZone), 1 !== d.stepping) for (a.minutes(Math.round(a.minutes() / d.stepping) * d.stepping).seconds(0); d.minDate && a.isBefore(d.minDate);) {
                a.add(d.stepping, "minutes");
            }R(a) ? (e = a, f = e.clone(), g.val(e.format(i)), _c2.data("date", e.format(i)), m = !1, _(), J({ type: "dp.change", date: e.clone(), oldDate: b })) : (d.keepInvalid ? J({ type: "dp.change", date: a, oldDate: b }) : g.val(m ? "" : e.format(i)), J({ type: "dp.error", date: a, oldDate: b }));
        },
            ba = function ba() {
            var b = !1;return o ? (o.find(".collapse").each(function () {
                var c = a(this).data("collapse");return !c || !c.transitioning || (b = !0, !1);
            }), b ? l : (n && n.hasClass("btn") && n.toggleClass("active"), o.hide(), a(window).off("resize", I), o.off("click", "[data-action]"), o.off("mousedown", !1), o.remove(), o = !1, J({ type: "dp.hide", date: e.clone() }), g.blur(), f = e.clone(), l)) : l;
        },
            ca = function ca() {
            aa(null);
        },
            da = function da(a) {
            return void 0 === d.parseInputDate ? (!b.isMoment(a) || a instanceof Date) && (a = y(a)) : a = d.parseInputDate(a), a;
        },
            ea = { next: function next() {
                var a = q[k].navFnc;f.add(q[k].navStep, a), W(), K(a);
            }, previous: function previous() {
                var a = q[k].navFnc;f.subtract(q[k].navStep, a), W(), K(a);
            }, pickerSwitch: function pickerSwitch() {
                L(1);
            }, selectMonth: function selectMonth(b) {
                var c = a(b.target).closest("tbody").find("span").index(a(b.target));f.month(c), k === p ? (aa(e.clone().year(f.year()).month(f.month())), d.inline || ba()) : (L(-1), W()), K("M");
            }, selectYear: function selectYear(b) {
                var c = parseInt(a(b.target).text(), 10) || 0;f.year(c), k === p ? (aa(e.clone().year(f.year())), d.inline || ba()) : (L(-1), W()), K("YYYY");
            }, selectDecade: function selectDecade(b) {
                var c = parseInt(a(b.target).data("selection"), 10) || 0;f.year(c), k === p ? (aa(e.clone().year(f.year())), d.inline || ba()) : (L(-1), W()), K("YYYY");
            }, selectDay: function selectDay(b) {
                var c = f.clone();a(b.target).is(".old") && c.subtract(1, "M"), a(b.target).is(".new") && c.add(1, "M"), aa(c.date(parseInt(a(b.target).text(), 10))), A() || d.keepOpen || d.inline || ba();
            }, incrementHours: function incrementHours() {
                var a = e.clone().add(1, "h");R(a, "h") && aa(a);
            }, incrementMinutes: function incrementMinutes() {
                var a = e.clone().add(d.stepping, "m");R(a, "m") && aa(a);
            }, incrementSeconds: function incrementSeconds() {
                var a = e.clone().add(1, "s");R(a, "s") && aa(a);
            }, decrementHours: function decrementHours() {
                var a = e.clone().subtract(1, "h");R(a, "h") && aa(a);
            }, decrementMinutes: function decrementMinutes() {
                var a = e.clone().subtract(d.stepping, "m");R(a, "m") && aa(a);
            }, decrementSeconds: function decrementSeconds() {
                var a = e.clone().subtract(1, "s");R(a, "s") && aa(a);
            }, togglePeriod: function togglePeriod() {
                aa(e.clone().add(e.hours() >= 12 ? -12 : 12, "h"));
            }, togglePicker: function togglePicker(b) {
                var c,
                    e = a(b.target),
                    f = e.closest("ul"),
                    g = f.find(".in"),
                    h = f.find(".collapse:not(.in)");if (g && g.length) {
                    if (c = g.data("collapse"), c && c.transitioning) return;g.collapse ? (g.collapse("hide"), h.collapse("show")) : (g.removeClass("in"), h.addClass("in")), e.is("span") ? e.toggleClass(d.icons.time + " " + d.icons.date) : e.find("span").toggleClass(d.icons.time + " " + d.icons.date);
                }
            }, showPicker: function showPicker() {
                o.find(".timepicker > div:not(.timepicker-picker)").hide(), o.find(".timepicker .timepicker-picker").show();
            }, showHours: function showHours() {
                o.find(".timepicker .timepicker-picker").hide(), o.find(".timepicker .timepicker-hours").show();
            }, showMinutes: function showMinutes() {
                o.find(".timepicker .timepicker-picker").hide(), o.find(".timepicker .timepicker-minutes").show();
            }, showSeconds: function showSeconds() {
                o.find(".timepicker .timepicker-picker").hide(), o.find(".timepicker .timepicker-seconds").show();
            }, selectHour: function selectHour(b) {
                var c = parseInt(a(b.target).text(), 10);h || (e.hours() >= 12 ? 12 !== c && (c += 12) : 12 === c && (c = 0)), aa(e.clone().hours(c)), ea.showPicker.call(l);
            }, selectMinute: function selectMinute(b) {
                aa(e.clone().minutes(parseInt(a(b.target).text(), 10))), ea.showPicker.call(l);
            }, selectSecond: function selectSecond(b) {
                aa(e.clone().seconds(parseInt(a(b.target).text(), 10))), ea.showPicker.call(l);
            }, clear: ca, today: function today() {
                var a = y();R(a, "d") && aa(a);
            }, close: ba },
            fa = function fa(b) {
            return !a(b.currentTarget).is(".disabled") && (ea[a(b.currentTarget).data("action")].apply(l, arguments), !1);
        },
            ga = function ga() {
            var b,
                c = { year: function year(a) {
                    return a.month(0).date(1).hours(0).seconds(0).minutes(0);
                }, month: function month(a) {
                    return a.date(1).hours(0).seconds(0).minutes(0);
                }, day: function day(a) {
                    return a.hours(0).seconds(0).minutes(0);
                }, hour: function hour(a) {
                    return a.seconds(0).minutes(0);
                }, minute: function minute(a) {
                    return a.seconds(0);
                } };return g.prop("disabled") || !d.ignoreReadonly && g.prop("readonly") || o ? l : (void 0 !== g.val() && 0 !== g.val().trim().length ? aa(da(g.val().trim())) : m && d.useCurrent && (d.inline || g.is("input") && 0 === g.val().trim().length) && (b = y(), "string" == typeof d.useCurrent && (b = c[d.useCurrent](b)), aa(b)), o = G(), M(), S(), o.find(".timepicker-hours").hide(), o.find(".timepicker-minutes").hide(), o.find(".timepicker-seconds").hide(), _(), L(), a(window).on("resize", I), o.on("click", "[data-action]", fa), o.on("mousedown", !1), n && n.hasClass("btn") && n.toggleClass("active"), I(), o.show(), d.focusOnShow && !g.is(":focus") && g.focus(), J({ type: "dp.show" }), l);
        },
            ha = function ha() {
            return o ? ba() : ga();
        },
            ia = function ia(a) {
            var b,
                c,
                e,
                f,
                g = null,
                h = [],
                i = {},
                j = a.which,
                k = "p";w[j] = k;for (b in w) {
                w.hasOwnProperty(b) && w[b] === k && (h.push(b), parseInt(b, 10) !== j && (i[b] = !0));
            }for (b in d.keyBinds) {
                if (d.keyBinds.hasOwnProperty(b) && "function" == typeof d.keyBinds[b] && (e = b.split(" "), e.length === h.length && v[j] === e[e.length - 1])) {
                    for (f = !0, c = e.length - 2; c >= 0; c--) {
                        if (!(v[e[c]] in i)) {
                            f = !1;break;
                        }
                    }if (f) {
                        g = d.keyBinds[b];break;
                    }
                }
            }g && (g.call(l, o), a.stopPropagation(), a.preventDefault());
        },
            ja = function ja(a) {
            w[a.which] = "r", a.stopPropagation(), a.preventDefault();
        },
            ka = function ka(b) {
            var c = a(b.target).val().trim(),
                d = c ? da(c) : null;return aa(d), b.stopImmediatePropagation(), !1;
        },
            la = function la() {
            g.on({ change: ka, blur: d.debug ? "" : ba, keydown: ia, keyup: ja, focus: d.allowInputToggle ? ga : "" }), _c2.is("input") ? g.on({ focus: ga }) : n && (n.on("click", ha), n.on("mousedown", !1));
        },
            ma = function ma() {
            g.off({ change: ka, blur: blur, keydown: ia, keyup: ja, focus: d.allowInputToggle ? ba : "" }), _c2.is("input") ? g.off({ focus: ga }) : n && (n.off("click", ha), n.off("mousedown", !1));
        },
            na = function na(b) {
            var c = {};return a.each(b, function () {
                var a = da(this);a.isValid() && (c[a.format("YYYY-MM-DD")] = !0);
            }), !!Object.keys(c).length && c;
        },
            oa = function oa(b) {
            var c = {};return a.each(b, function () {
                c[this] = !0;
            }), !!Object.keys(c).length && c;
        },
            pa = function pa() {
            var a = d.format || "L LT";i = a.replace(/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, function (a) {
                var b = e.localeData().longDateFormat(a) || a;return b.replace(/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, function (a) {
                    return e.localeData().longDateFormat(a) || a;
                });
            }), j = d.extraFormats ? d.extraFormats.slice() : [], j.indexOf(a) < 0 && j.indexOf(i) < 0 && j.push(i), h = i.toLowerCase().indexOf("a") < 1 && i.replace(/\[.*?\]/g, "").indexOf("h") < 1, z("y") && (p = 2), z("M") && (p = 1), z("d") && (p = 0), k = Math.max(p, k), m || aa(e);
        };if (l.destroy = function () {
            ba(), ma(), _c2.removeData("DateTimePicker"), _c2.removeData("date");
        }, l.toggle = ha, l.show = ga, l.hide = ba, l.disable = function () {
            return ba(), n && n.hasClass("btn") && n.addClass("disabled"), g.prop("disabled", !0), l;
        }, l.enable = function () {
            return n && n.hasClass("btn") && n.removeClass("disabled"), g.prop("disabled", !1), l;
        }, l.ignoreReadonly = function (a) {
            if (0 === arguments.length) return d.ignoreReadonly;if ("boolean" != typeof a) throw new TypeError("ignoreReadonly () expects a boolean parameter");return d.ignoreReadonly = a, l;
        }, l.options = function (b) {
            if (0 === arguments.length) return a.extend(!0, {}, d);if (!(b instanceof Object)) throw new TypeError("options() options parameter should be an object");return a.extend(!0, d, b), a.each(d, function (a, b) {
                if (void 0 === l[a]) throw new TypeError("option " + a + " is not recognized!");l[a](b);
            }), l;
        }, l.date = function (a) {
            if (0 === arguments.length) return m ? null : e.clone();if (!(null === a || "string" == typeof a || b.isMoment(a) || a instanceof Date)) throw new TypeError("date() parameter must be one of [null, string, moment or Date]");return aa(null === a ? null : da(a)), l;
        }, l.format = function (a) {
            if (0 === arguments.length) return d.format;if ("string" != typeof a && ("boolean" != typeof a || a !== !1)) throw new TypeError("format() expects a string or boolean:false parameter " + a);return d.format = a, i && pa(), l;
        }, l.timeZone = function (a) {
            if (0 === arguments.length) return d.timeZone;if ("string" != typeof a) throw new TypeError("newZone() expects a string parameter");return d.timeZone = a, l;
        }, l.dayViewHeaderFormat = function (a) {
            if (0 === arguments.length) return d.dayViewHeaderFormat;if ("string" != typeof a) throw new TypeError("dayViewHeaderFormat() expects a string parameter");return d.dayViewHeaderFormat = a, l;
        }, l.extraFormats = function (a) {
            if (0 === arguments.length) return d.extraFormats;if (a !== !1 && !(a instanceof Array)) throw new TypeError("extraFormats() expects an array or false parameter");return d.extraFormats = a, j && pa(), l;
        }, l.disabledDates = function (b) {
            if (0 === arguments.length) return d.disabledDates ? a.extend({}, d.disabledDates) : d.disabledDates;if (!b) return d.disabledDates = !1, _(), l;if (!(b instanceof Array)) throw new TypeError("disabledDates() expects an array parameter");return d.disabledDates = na(b), d.enabledDates = !1, _(), l;
        }, l.enabledDates = function (b) {
            if (0 === arguments.length) return d.enabledDates ? a.extend({}, d.enabledDates) : d.enabledDates;if (!b) return d.enabledDates = !1, _(), l;if (!(b instanceof Array)) throw new TypeError("enabledDates() expects an array parameter");return d.enabledDates = na(b), d.disabledDates = !1, _(), l;
        }, l.daysOfWeekDisabled = function (a) {
            if (0 === arguments.length) return d.daysOfWeekDisabled.splice(0);if ("boolean" == typeof a && !a) return d.daysOfWeekDisabled = !1, _(), l;if (!(a instanceof Array)) throw new TypeError("daysOfWeekDisabled() expects an array parameter");if (d.daysOfWeekDisabled = a.reduce(function (a, b) {
                return b = parseInt(b, 10), b > 6 || b < 0 || isNaN(b) ? a : (a.indexOf(b) === -1 && a.push(b), a);
            }, []).sort(), d.useCurrent && !d.keepInvalid) {
                for (var b = 0; !R(e, "d");) {
                    if (e.add(1, "d"), 31 === b) throw "Tried 31 times to find a valid date";b++;
                }aa(e);
            }return _(), l;
        }, l.maxDate = function (a) {
            if (0 === arguments.length) return d.maxDate ? d.maxDate.clone() : d.maxDate;if ("boolean" == typeof a && a === !1) return d.maxDate = !1, _(), l;"string" == typeof a && ("now" !== a && "moment" !== a || (a = y()));var b = da(a);if (!b.isValid()) throw new TypeError("maxDate() Could not parse date parameter: " + a);if (d.minDate && b.isBefore(d.minDate)) throw new TypeError("maxDate() date parameter is before options.minDate: " + b.format(i));return d.maxDate = b, d.useCurrent && !d.keepInvalid && e.isAfter(a) && aa(d.maxDate), f.isAfter(b) && (f = b.clone().subtract(d.stepping, "m")), _(), l;
        }, l.minDate = function (a) {
            if (0 === arguments.length) return d.minDate ? d.minDate.clone() : d.minDate;if ("boolean" == typeof a && a === !1) return d.minDate = !1, _(), l;"string" == typeof a && ("now" !== a && "moment" !== a || (a = y()));var b = da(a);if (!b.isValid()) throw new TypeError("minDate() Could not parse date parameter: " + a);if (d.maxDate && b.isAfter(d.maxDate)) throw new TypeError("minDate() date parameter is after options.maxDate: " + b.format(i));return d.minDate = b, d.useCurrent && !d.keepInvalid && e.isBefore(a) && aa(d.minDate), f.isBefore(b) && (f = b.clone().add(d.stepping, "m")), _(), l;
        }, l.defaultDate = function (a) {
            if (0 === arguments.length) return d.defaultDate ? d.defaultDate.clone() : d.defaultDate;if (!a) return d.defaultDate = !1, l;"string" == typeof a && (a = "now" === a || "moment" === a ? y() : y(a));var b = da(a);if (!b.isValid()) throw new TypeError("defaultDate() Could not parse date parameter: " + a);if (!R(b)) throw new TypeError("defaultDate() date passed is invalid according to component setup validations");return d.defaultDate = b, (d.defaultDate && d.inline || "" === g.val().trim()) && aa(d.defaultDate), l;
        }, l.locale = function (a) {
            if (0 === arguments.length) return d.locale;if (!b.localeData(a)) throw new TypeError("locale() locale " + a + " is not loaded from moment locales!");return d.locale = a, e.locale(d.locale), f.locale(d.locale), i && pa(), o && (ba(), ga()), l;
        }, l.stepping = function (a) {
            return 0 === arguments.length ? d.stepping : (a = parseInt(a, 10), (isNaN(a) || a < 1) && (a = 1), d.stepping = a, l);
        }, l.useCurrent = function (a) {
            var b = ["year", "month", "day", "hour", "minute"];if (0 === arguments.length) return d.useCurrent;if ("boolean" != typeof a && "string" != typeof a) throw new TypeError("useCurrent() expects a boolean or string parameter");if ("string" == typeof a && b.indexOf(a.toLowerCase()) === -1) throw new TypeError("useCurrent() expects a string parameter of " + b.join(", "));return d.useCurrent = a, l;
        }, l.collapse = function (a) {
            if (0 === arguments.length) return d.collapse;if ("boolean" != typeof a) throw new TypeError("collapse() expects a boolean parameter");return d.collapse === a ? l : (d.collapse = a, o && (ba(), ga()), l);
        }, l.icons = function (b) {
            if (0 === arguments.length) return a.extend({}, d.icons);if (!(b instanceof Object)) throw new TypeError("icons() expects parameter to be an Object");return a.extend(d.icons, b), o && (ba(), ga()), l;
        }, l.tooltips = function (b) {
            if (0 === arguments.length) return a.extend({}, d.tooltips);if (!(b instanceof Object)) throw new TypeError("tooltips() expects parameter to be an Object");return a.extend(d.tooltips, b), o && (ba(), ga()), l;
        }, l.useStrict = function (a) {
            if (0 === arguments.length) return d.useStrict;if ("boolean" != typeof a) throw new TypeError("useStrict() expects a boolean parameter");return d.useStrict = a, l;
        }, l.sideBySide = function (a) {
            if (0 === arguments.length) return d.sideBySide;if ("boolean" != typeof a) throw new TypeError("sideBySide() expects a boolean parameter");return d.sideBySide = a, o && (ba(), ga()), l;
        }, l.viewMode = function (a) {
            if (0 === arguments.length) return d.viewMode;if ("string" != typeof a) throw new TypeError("viewMode() expects a string parameter");if (r.indexOf(a) === -1) throw new TypeError("viewMode() parameter must be one of (" + r.join(", ") + ") value");return d.viewMode = a, k = Math.max(r.indexOf(a), p), L(), l;
        }, l.toolbarPlacement = function (a) {
            if (0 === arguments.length) return d.toolbarPlacement;if ("string" != typeof a) throw new TypeError("toolbarPlacement() expects a string parameter");if (u.indexOf(a) === -1) throw new TypeError("toolbarPlacement() parameter must be one of (" + u.join(", ") + ") value");return d.toolbarPlacement = a, o && (ba(), ga()), l;
        }, l.widgetPositioning = function (b) {
            if (0 === arguments.length) return a.extend({}, d.widgetPositioning);if ("[object Object]" !== {}.toString.call(b)) throw new TypeError("widgetPositioning() expects an object variable");if (b.horizontal) {
                if ("string" != typeof b.horizontal) throw new TypeError("widgetPositioning() horizontal variable must be a string");if (b.horizontal = b.horizontal.toLowerCase(), t.indexOf(b.horizontal) === -1) throw new TypeError("widgetPositioning() expects horizontal parameter to be one of (" + t.join(", ") + ")");d.widgetPositioning.horizontal = b.horizontal;
            }if (b.vertical) {
                if ("string" != typeof b.vertical) throw new TypeError("widgetPositioning() vertical variable must be a string");if (b.vertical = b.vertical.toLowerCase(), s.indexOf(b.vertical) === -1) throw new TypeError("widgetPositioning() expects vertical parameter to be one of (" + s.join(", ") + ")");d.widgetPositioning.vertical = b.vertical;
            }return _(), l;
        }, l.calendarWeeks = function (a) {
            if (0 === arguments.length) return d.calendarWeeks;if ("boolean" != typeof a) throw new TypeError("calendarWeeks() expects parameter to be a boolean value");return d.calendarWeeks = a, _(), l;
        }, l.showTodayButton = function (a) {
            if (0 === arguments.length) return d.showTodayButton;if ("boolean" != typeof a) throw new TypeError("showTodayButton() expects a boolean parameter");return d.showTodayButton = a, o && (ba(), ga()), l;
        }, l.showClear = function (a) {
            if (0 === arguments.length) return d.showClear;if ("boolean" != typeof a) throw new TypeError("showClear() expects a boolean parameter");return d.showClear = a, o && (ba(), ga()), l;
        }, l.widgetParent = function (b) {
            if (0 === arguments.length) return d.widgetParent;if ("string" == typeof b && (b = a(b)), null !== b && "string" != typeof b && !(b instanceof a)) throw new TypeError("widgetParent() expects a string or a jQuery object parameter");return d.widgetParent = b, o && (ba(), ga()), l;
        }, l.keepOpen = function (a) {
            if (0 === arguments.length) return d.keepOpen;if ("boolean" != typeof a) throw new TypeError("keepOpen() expects a boolean parameter");return d.keepOpen = a, l;
        }, l.focusOnShow = function (a) {
            if (0 === arguments.length) return d.focusOnShow;if ("boolean" != typeof a) throw new TypeError("focusOnShow() expects a boolean parameter");return d.focusOnShow = a, l;
        }, l.inline = function (a) {
            if (0 === arguments.length) return d.inline;if ("boolean" != typeof a) throw new TypeError("inline() expects a boolean parameter");return d.inline = a, l;
        }, l.clear = function () {
            return ca(), l;
        }, l.keyBinds = function (a) {
            return 0 === arguments.length ? d.keyBinds : (d.keyBinds = a, l);
        }, l.getMoment = function (a) {
            return y(a);
        }, l.debug = function (a) {
            if ("boolean" != typeof a) throw new TypeError("debug() expects a boolean parameter");return d.debug = a, l;
        }, l.allowInputToggle = function (a) {
            if (0 === arguments.length) return d.allowInputToggle;if ("boolean" != typeof a) throw new TypeError("allowInputToggle() expects a boolean parameter");return d.allowInputToggle = a, l;
        }, l.showClose = function (a) {
            if (0 === arguments.length) return d.showClose;if ("boolean" != typeof a) throw new TypeError("showClose() expects a boolean parameter");return d.showClose = a, l;
        }, l.keepInvalid = function (a) {
            if (0 === arguments.length) return d.keepInvalid;if ("boolean" != typeof a) throw new TypeError("keepInvalid() expects a boolean parameter");
            return d.keepInvalid = a, l;
        }, l.datepickerInput = function (a) {
            if (0 === arguments.length) return d.datepickerInput;if ("string" != typeof a) throw new TypeError("datepickerInput() expects a string parameter");return d.datepickerInput = a, l;
        }, l.parseInputDate = function (a) {
            if (0 === arguments.length) return d.parseInputDate;if ("function" != typeof a) throw new TypeError("parseInputDate() sholud be as function");return d.parseInputDate = a, l;
        }, l.disabledTimeIntervals = function (b) {
            if (0 === arguments.length) return d.disabledTimeIntervals ? a.extend({}, d.disabledTimeIntervals) : d.disabledTimeIntervals;if (!b) return d.disabledTimeIntervals = !1, _(), l;if (!(b instanceof Array)) throw new TypeError("disabledTimeIntervals() expects an array parameter");return d.disabledTimeIntervals = b, _(), l;
        }, l.disabledHours = function (b) {
            if (0 === arguments.length) return d.disabledHours ? a.extend({}, d.disabledHours) : d.disabledHours;if (!b) return d.disabledHours = !1, _(), l;if (!(b instanceof Array)) throw new TypeError("disabledHours() expects an array parameter");if (d.disabledHours = oa(b), d.enabledHours = !1, d.useCurrent && !d.keepInvalid) {
                for (var c = 0; !R(e, "h");) {
                    if (e.add(1, "h"), 24 === c) throw "Tried 24 times to find a valid date";c++;
                }aa(e);
            }return _(), l;
        }, l.enabledHours = function (b) {
            if (0 === arguments.length) return d.enabledHours ? a.extend({}, d.enabledHours) : d.enabledHours;if (!b) return d.enabledHours = !1, _(), l;if (!(b instanceof Array)) throw new TypeError("enabledHours() expects an array parameter");if (d.enabledHours = oa(b), d.disabledHours = !1, d.useCurrent && !d.keepInvalid) {
                for (var c = 0; !R(e, "h");) {
                    if (e.add(1, "h"), 24 === c) throw "Tried 24 times to find a valid date";c++;
                }aa(e);
            }return _(), l;
        }, l.viewDate = function (a) {
            if (0 === arguments.length) return f.clone();if (!a) return f = e.clone(), l;if (!("string" == typeof a || b.isMoment(a) || a instanceof Date)) throw new TypeError("viewDate() parameter must be one of [string, moment or Date]");return f = da(a), K(), l;
        }, _c2.is("input")) g = _c2;else if (g = _c2.find(d.datepickerInput), 0 === g.length) g = _c2.find("input");else if (!g.is("input")) throw new Error('CSS class "' + d.datepickerInput + '" cannot be applied to non input element');if (_c2.hasClass("input-group") && (n = 0 === _c2.find(".datepickerbutton").length ? _c2.find(".input-group-addon") : _c2.find(".datepickerbutton")), !d.inline && !g.is("input")) throw new Error("Could not initialize DateTimePicker without an input element");return e = y(), f = e.clone(), a.extend(!0, d, H()), l.options(d), pa(), la(), g.prop("disabled") && l.disable(), g.is("input") && 0 !== g.val().trim().length ? aa(da(g.val().trim())) : d.defaultDate && void 0 === g.attr("placeholder") && aa(d.defaultDate), d.inline && ga(), l;
    };return a.fn.datetimepicker = function (b) {
        b = b || {};var d,
            e = Array.prototype.slice.call(arguments, 1),
            f = !0,
            g = ["destroy", "hide", "show", "toggle"];if ("object" == (typeof b === "undefined" ? "undefined" : _typeof2(b))) return this.each(function () {
            var d,
                e = a(this);e.data("DateTimePicker") || (d = a.extend(!0, {}, a.fn.datetimepicker.defaults, b), e.data("DateTimePicker", c(e, d)));
        });if ("string" == typeof b) return this.each(function () {
            var c = a(this),
                g = c.data("DateTimePicker");if (!g) throw new Error('bootstrap-datetimepicker("' + b + '") method was called on an element that is not using DateTimePicker');d = g[b].apply(g, e), f = d === g;
        }), f || a.inArray(b, g) > -1 ? this : d;throw new TypeError("Invalid arguments for DateTimePicker: " + b);
    }, a.fn.datetimepicker.defaults = { timeZone: "", format: !1, dayViewHeaderFormat: "MMMM YYYY", extraFormats: !1, stepping: 1, minDate: !1, maxDate: !1, useCurrent: !0, collapse: !0, locale: b.locale(), defaultDate: !1, disabledDates: !1, enabledDates: !1, icons: { time: "glyphicon glyphicon-time", date: "glyphicon glyphicon-calendar", up: "glyphicon glyphicon-chevron-up", down: "glyphicon glyphicon-chevron-down", previous: "glyphicon glyphicon-chevron-left", next: "glyphicon glyphicon-chevron-right", today: "glyphicon glyphicon-screenshot", clear: "glyphicon glyphicon-trash", close: "glyphicon glyphicon-remove" }, tooltips: { today: "Go to today", clear: "Clear selection", close: "Close the picker", selectMonth: "Select Month", prevMonth: "Previous Month", nextMonth: "Next Month", selectYear: "Select Year", prevYear: "Previous Year", nextYear: "Next Year", selectDecade: "Select Decade", prevDecade: "Previous Decade", nextDecade: "Next Decade", prevCentury: "Previous Century", nextCentury: "Next Century", pickHour: "Pick Hour", incrementHour: "Increment Hour", decrementHour: "Decrement Hour", pickMinute: "Pick Minute", incrementMinute: "Increment Minute", decrementMinute: "Decrement Minute", pickSecond: "Pick Second", incrementSecond: "Increment Second", decrementSecond: "Decrement Second", togglePeriod: "Toggle Period", selectTime: "Select Time" }, useStrict: !1, sideBySide: !1, daysOfWeekDisabled: !1, calendarWeeks: !1, viewMode: "days", toolbarPlacement: "default", showTodayButton: !1, showClear: !1, showClose: !1, widgetPositioning: { horizontal: "auto", vertical: "auto" }, widgetParent: null, ignoreReadonly: !1, keepOpen: !1, focusOnShow: !0, inline: !1, keepInvalid: !1, datepickerInput: ".datepickerinput", keyBinds: { up: function up(a) {
                if (a) {
                    var b = this.date() || this.getMoment();a.find(".datepicker").is(":visible") ? this.date(b.clone().subtract(7, "d")) : this.date(b.clone().add(this.stepping(), "m"));
                }
            }, down: function down(a) {
                if (!a) return void this.show();var b = this.date() || this.getMoment();a.find(".datepicker").is(":visible") ? this.date(b.clone().add(7, "d")) : this.date(b.clone().subtract(this.stepping(), "m"));
            }, "control up": function controlUp(a) {
                if (a) {
                    var b = this.date() || this.getMoment();a.find(".datepicker").is(":visible") ? this.date(b.clone().subtract(1, "y")) : this.date(b.clone().add(1, "h"));
                }
            }, "control down": function controlDown(a) {
                if (a) {
                    var b = this.date() || this.getMoment();a.find(".datepicker").is(":visible") ? this.date(b.clone().add(1, "y")) : this.date(b.clone().subtract(1, "h"));
                }
            }, left: function left(a) {
                if (a) {
                    var b = this.date() || this.getMoment();a.find(".datepicker").is(":visible") && this.date(b.clone().subtract(1, "d"));
                }
            }, right: function right(a) {
                if (a) {
                    var b = this.date() || this.getMoment();a.find(".datepicker").is(":visible") && this.date(b.clone().add(1, "d"));
                }
            }, pageUp: function pageUp(a) {
                if (a) {
                    var b = this.date() || this.getMoment();a.find(".datepicker").is(":visible") && this.date(b.clone().subtract(1, "M"));
                }
            }, pageDown: function pageDown(a) {
                if (a) {
                    var b = this.date() || this.getMoment();a.find(".datepicker").is(":visible") && this.date(b.clone().add(1, "M"));
                }
            }, enter: function enter() {
                this.hide();
            }, escape: function escape() {
                this.hide();
            }, "control space": function controlSpace(a) {
                a && a.find(".timepicker").is(":visible") && a.find('.btn[data-action="togglePeriod"]').click();
            }, t: function t() {
                this.date(this.getMoment());
            }, delete: function _delete() {
                this.clear();
            } }, debug: !1, allowInputToggle: !1, disabledTimeIntervals: !1, disabledHours: !1, enabledHours: !1, viewDate: !1 }, a.fn.datetimepicker;
});
!function (e, t) {
    "object" == (typeof exports === "undefined" ? "undefined" : _typeof2(exports)) && "object" == (typeof module === "undefined" ? "undefined" : _typeof2(module)) ? module.exports = t(require("jquery"), require("moment"), require("eonasdan-bootstrap-datetimepicker")) : "function" == typeof define && define.amd ? define("VueBootstrapDatetimePicker", ["jquery", "moment", "eonasdan-bootstrap-datetimepicker"], t) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof2(exports)) ? exports.VueBootstrapDatetimePicker = t(require("jquery"), require("moment"), require("eonasdan-bootstrap-datetimepicker")) : e.VueBootstrapDatetimePicker = t(e.jquery, e.moment, e["eonasdan-bootstrap-datetimepicker"]);
}(this, function (e, t, n) {
    return function (e) {
        function t(r) {
            if (n[r]) return n[r].exports;var o = n[r] = { i: r, l: !1, exports: {} };return e[r].call(o.exports, o, o.exports, t), o.l = !0, o.exports;
        }var n = {};return t.m = e, t.c = n, t.d = function (e, n, r) {
            t.o(e, n) || Object.defineProperty(e, n, { configurable: !1, enumerable: !0, get: r });
        }, t.n = function (e) {
            var n = e && e.__esModule ? function () {
                return e.default;
            } : function () {
                return e;
            };return t.d(n, "a", n), n;
        }, t.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }, t.p = "", t(t.s = 0);
    }([function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), n.d(t, "DatetimePickerPlugin", function () {
            return o;
        });var r = n(1);n.d(t, "component", function () {
            return r.a;
        });var o = function o(e, t) {
            var n = "date-picker";"string" == typeof t && (n = t), e.component(n, r.a);
        };r.a.install = o, t.default = r.a;
    }, function (e, t, n) {
        "use strict";
        var r = n(3),
            o = n(7),
            i = n(2),
            a = i(r.a, o.a, null, null, null);t.a = a.exports;
    }, function (e, t) {
        e.exports = function (e, t, n, r, o) {
            var i,
                a = e = e || {},
                s = _typeof2(e.default);"object" !== s && "function" !== s || (i = e, a = e.default);var u = "function" == typeof a ? a.options : a;t && (u.render = t.render, u.staticRenderFns = t.staticRenderFns), r && (u._scopeId = r);var c;if (o ? (c = function c(e) {
                e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, e || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__), n && n.call(this, e), e && e._registeredComponents && e._registeredComponents.add(o);
            }, u._ssrRegister = c) : n && (c = n), c) {
                var p = u.functional,
                    d = p ? u.render : u.beforeCreate;p ? u.render = function (e, t) {
                    return c.call(t), d(e, t);
                } : u.beforeCreate = d ? [].concat(d, c) : [c];
            }return { esModule: i, exports: a, options: u };
        };
    }, function (e, t, n) {
        "use strict";
        var r = n(6),
            o = (n.n(r), Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];for (var r in n) {
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
            }return e;
        }),
            i = window.jQuery || n(4),
            a = window.moment || n(5),
            s = ["hide", "show", "change", "error", "update"];t.a = { name: "date-picker", props: { value: { default: null, required: !0, validator: function validator(e) {
                        return null === e || e instanceof Date || "string" == typeof e || e instanceof String || e instanceof a;
                    } }, config: { type: Object, default: function _default() {
                        return {};
                    } }, wrap: { type: Boolean, default: !1 } }, data: function data() {
                return { dp: null, elem: null };
            }, mounted: function mounted() {
                if (!this.dp) {
                    var e = this.wrap ? this.$el.parentNode : this.$el;this.elem = i(e), this.elem.datetimepicker(this.config), this.dp = this.elem.data("DateTimePicker"), this.dp.date(this.value), this.elem.on("dp.change", this.onChange), this.registerEvents();
                }
            }, beforeDestroy: function beforeDestroy() {
                this.dp && (this.dp.destroy(), this.dp = null, this.elem = null);
            }, watch: { value: function value(e) {
                    this.dp && this.dp.date(e || null);
                }, config: function config(e) {
                    this.dp && this.dp.options(o({}, this.dp.options(), e));
                } }, methods: { onChange: function onChange(e) {
                    var t = e.date ? e.date.format(this.dp.format()) : null;this.$emit("input", t);
                }, registerEvents: function registerEvents() {
                    var e = this;s.forEach(function (t) {
                        e.elem.on("dp." + t, function () {
                            for (var n = arguments.length, r = Array(n), o = 0; o < n; o++) {
                                r[o] = arguments[o];
                            }e.$emit.apply(e, ["dp-" + t].concat(r));
                        });
                    });
                } } };
    }, function (t, n) {
        t.exports = e;
    }, function (e, n) {
        e.exports = t;
    }, function (e, t) {
        e.exports = n;
    }, function (e, t, n) {
        "use strict";
        var r = function r() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;return e.config.inline ? n("div", { staticClass: "datetimepicker-inline" }) : n("input", { staticClass: "form-control", attrs: { type: "text" } });
        },
            o = [],
            i = { render: r, staticRenderFns: o };t.a = i;
    }]);
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

/*
 * Toastr
 * Copyright 2012-2015
 * Authors: John Papa, Hans Fjällemark, and Tim Ferrell.
 * All Rights Reserved.
 * Use, reproduction, distribution, and modification of this code is subject to the terms and
 * conditions of the MIT license, available at http://www.opensource.org/licenses/mit-license.php
 *
 * ARIA Support: Greta Krafsig
 *
 * Project: https://github.com/CodeSeven/toastr
 */
/* global define */
(function (define) {
    define(['jquery'], function ($) {
        return function () {
            var $container;
            var listener;
            var toastId = 0;
            var toastType = {
                error: 'error',
                info: 'info',
                success: 'success',
                warning: 'warning'
            };

            var toastr = {
                clear: clear,
                remove: remove,
                error: error,
                getContainer: getContainer,
                info: info,
                options: {},
                subscribe: subscribe,
                success: success,
                version: '2.1.3',
                warning: warning
            };

            var previousToast;

            return toastr;

            ////////////////

            function error(message, title, optionsOverride) {
                return notify({
                    type: toastType.error,
                    iconClass: getOptions().iconClasses.error,
                    message: message,
                    optionsOverride: optionsOverride,
                    title: title
                });
            }

            function getContainer(options, create) {
                if (!options) {
                    options = getOptions();
                }
                $container = $('#' + options.containerId);
                if ($container.length) {
                    return $container;
                }
                if (create) {
                    $container = createContainer(options);
                }
                return $container;
            }

            function info(message, title, optionsOverride) {
                return notify({
                    type: toastType.info,
                    iconClass: getOptions().iconClasses.info,
                    message: message,
                    optionsOverride: optionsOverride,
                    title: title
                });
            }

            function subscribe(callback) {
                listener = callback;
            }

            function success(message, title, optionsOverride) {
                return notify({
                    type: toastType.success,
                    iconClass: getOptions().iconClasses.success,
                    message: message,
                    optionsOverride: optionsOverride,
                    title: title
                });
            }

            function warning(message, title, optionsOverride) {
                return notify({
                    type: toastType.warning,
                    iconClass: getOptions().iconClasses.warning,
                    message: message,
                    optionsOverride: optionsOverride,
                    title: title
                });
            }

            function clear($toastElement, clearOptions) {
                var options = getOptions();
                if (!$container) {
                    getContainer(options);
                }
                if (!clearToast($toastElement, options, clearOptions)) {
                    clearContainer(options);
                }
            }

            function remove($toastElement) {
                var options = getOptions();
                if (!$container) {
                    getContainer(options);
                }
                if ($toastElement && $(':focus', $toastElement).length === 0) {
                    removeToast($toastElement);
                    return;
                }
                if ($container.children().length) {
                    $container.remove();
                }
            }

            // internal functions

            function clearContainer(options) {
                var toastsToClear = $container.children();
                for (var i = toastsToClear.length - 1; i >= 0; i--) {
                    clearToast($(toastsToClear[i]), options);
                }
            }

            function clearToast($toastElement, options, clearOptions) {
                var force = clearOptions && clearOptions.force ? clearOptions.force : false;
                if ($toastElement && (force || $(':focus', $toastElement).length === 0)) {
                    $toastElement[options.hideMethod]({
                        duration: options.hideDuration,
                        easing: options.hideEasing,
                        complete: function complete() {
                            removeToast($toastElement);
                        }
                    });
                    return true;
                }
                return false;
            }

            function createContainer(options) {
                $container = $('<div/>').attr('id', options.containerId).addClass(options.positionClass);

                $container.appendTo($(options.target));
                return $container;
            }

            function getDefaults() {
                return {
                    tapToDismiss: true,
                    toastClass: 'toast',
                    containerId: 'toast-container',
                    debug: false,

                    showMethod: 'fadeIn', //fadeIn, slideDown, and show are built into jQuery
                    showDuration: 300,
                    showEasing: 'swing', //swing and linear are built into jQuery
                    onShown: undefined,
                    hideMethod: 'fadeOut',
                    hideDuration: 1000,
                    hideEasing: 'swing',
                    onHidden: undefined,
                    closeMethod: false,
                    closeDuration: false,
                    closeEasing: false,
                    closeOnHover: true,

                    extendedTimeOut: 1000,
                    iconClasses: {
                        error: 'toast-error',
                        info: 'toast-info',
                        success: 'toast-success',
                        warning: 'toast-warning'
                    },
                    iconClass: 'toast-info',
                    positionClass: 'toast-top-right',
                    timeOut: 5000, // Set timeOut and extendedTimeOut to 0 to make it sticky
                    titleClass: 'toast-title',
                    messageClass: 'toast-message',
                    escapeHtml: false,
                    target: 'body',
                    closeHtml: '<button type="button">&times;</button>',
                    closeClass: 'toast-close-button',
                    newestOnTop: true,
                    preventDuplicates: false,
                    progressBar: false,
                    progressClass: 'toast-progress',
                    rtl: false
                };
            }

            function publish(args) {
                if (!listener) {
                    return;
                }
                listener(args);
            }

            function notify(map) {
                var options = getOptions();
                var iconClass = map.iconClass || options.iconClass;

                if (typeof map.optionsOverride !== 'undefined') {
                    options = $.extend(options, map.optionsOverride);
                    iconClass = map.optionsOverride.iconClass || iconClass;
                }

                if (shouldExit(options, map)) {
                    return;
                }

                toastId++;

                $container = getContainer(options, true);

                var intervalId = null;
                var $toastElement = $('<div/>');
                var $titleElement = $('<div/>');
                var $messageElement = $('<div/>');
                var $progressElement = $('<div/>');
                var $closeElement = $(options.closeHtml);
                var progressBar = {
                    intervalId: null,
                    hideEta: null,
                    maxHideTime: null
                };
                var response = {
                    toastId: toastId,
                    state: 'visible',
                    startTime: new Date(),
                    options: options,
                    map: map
                };

                personalizeToast();

                displayToast();

                handleEvents();

                publish(response);

                if (options.debug && console) {
                    console.log(response);
                }

                return $toastElement;

                function escapeHtml(source) {
                    if (source == null) {
                        source = '';
                    }

                    return source.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
                }

                function personalizeToast() {
                    setIcon();
                    setTitle();
                    setMessage();
                    setCloseButton();
                    setProgressBar();
                    setRTL();
                    setSequence();
                    setAria();
                }

                function setAria() {
                    var ariaValue = '';
                    switch (map.iconClass) {
                        case 'toast-success':
                        case 'toast-info':
                            ariaValue = 'polite';
                            break;
                        default:
                            ariaValue = 'assertive';
                    }
                    $toastElement.attr('aria-live', ariaValue);
                }

                function handleEvents() {
                    if (options.closeOnHover) {
                        $toastElement.hover(stickAround, delayedHideToast);
                    }

                    if (!options.onclick && options.tapToDismiss) {
                        $toastElement.click(hideToast);
                    }

                    if (options.closeButton && $closeElement) {
                        $closeElement.click(function (event) {
                            if (event.stopPropagation) {
                                event.stopPropagation();
                            } else if (event.cancelBubble !== undefined && event.cancelBubble !== true) {
                                event.cancelBubble = true;
                            }

                            if (options.onCloseClick) {
                                options.onCloseClick(event);
                            }

                            hideToast(true);
                        });
                    }

                    if (options.onclick) {
                        $toastElement.click(function (event) {
                            options.onclick(event);
                            hideToast();
                        });
                    }
                }

                function displayToast() {
                    $toastElement.hide();

                    $toastElement[options.showMethod]({ duration: options.showDuration, easing: options.showEasing, complete: options.onShown });

                    if (options.timeOut > 0) {
                        intervalId = setTimeout(hideToast, options.timeOut);
                        progressBar.maxHideTime = parseFloat(options.timeOut);
                        progressBar.hideEta = new Date().getTime() + progressBar.maxHideTime;
                        if (options.progressBar) {
                            progressBar.intervalId = setInterval(updateProgress, 10);
                        }
                    }
                }

                function setIcon() {
                    if (map.iconClass) {
                        $toastElement.addClass(options.toastClass).addClass(iconClass);
                    }
                }

                function setSequence() {
                    if (options.newestOnTop) {
                        $container.prepend($toastElement);
                    } else {
                        $container.append($toastElement);
                    }
                }

                function setTitle() {
                    if (map.title) {
                        var suffix = map.title;
                        if (options.escapeHtml) {
                            suffix = escapeHtml(map.title);
                        }
                        $titleElement.append(suffix).addClass(options.titleClass);
                        $toastElement.append($titleElement);
                    }
                }

                function setMessage() {
                    if (map.message) {
                        var suffix = map.message;
                        if (options.escapeHtml) {
                            suffix = escapeHtml(map.message);
                        }
                        $messageElement.append(suffix).addClass(options.messageClass);
                        $toastElement.append($messageElement);
                    }
                }

                function setCloseButton() {
                    if (options.closeButton) {
                        $closeElement.addClass(options.closeClass).attr('role', 'button');
                        $toastElement.prepend($closeElement);
                    }
                }

                function setProgressBar() {
                    if (options.progressBar) {
                        $progressElement.addClass(options.progressClass);
                        $toastElement.prepend($progressElement);
                    }
                }

                function setRTL() {
                    if (options.rtl) {
                        $toastElement.addClass('rtl');
                    }
                }

                function shouldExit(options, map) {
                    if (options.preventDuplicates) {
                        if (map.message === previousToast) {
                            return true;
                        } else {
                            previousToast = map.message;
                        }
                    }
                    return false;
                }

                function hideToast(override) {
                    var method = override && options.closeMethod !== false ? options.closeMethod : options.hideMethod;
                    var duration = override && options.closeDuration !== false ? options.closeDuration : options.hideDuration;
                    var easing = override && options.closeEasing !== false ? options.closeEasing : options.hideEasing;
                    if ($(':focus', $toastElement).length && !override) {
                        return;
                    }
                    clearTimeout(progressBar.intervalId);
                    return $toastElement[method]({
                        duration: duration,
                        easing: easing,
                        complete: function complete() {
                            removeToast($toastElement);
                            clearTimeout(intervalId);
                            if (options.onHidden && response.state !== 'hidden') {
                                options.onHidden();
                            }
                            response.state = 'hidden';
                            response.endTime = new Date();
                            publish(response);
                        }
                    });
                }

                function delayedHideToast() {
                    if (options.timeOut > 0 || options.extendedTimeOut > 0) {
                        intervalId = setTimeout(hideToast, options.extendedTimeOut);
                        progressBar.maxHideTime = parseFloat(options.extendedTimeOut);
                        progressBar.hideEta = new Date().getTime() + progressBar.maxHideTime;
                    }
                }

                function stickAround() {
                    clearTimeout(intervalId);
                    progressBar.hideEta = 0;
                    $toastElement.stop(true, true)[options.showMethod]({ duration: options.showDuration, easing: options.showEasing });
                }

                function updateProgress() {
                    var percentage = (progressBar.hideEta - new Date().getTime()) / progressBar.maxHideTime * 100;
                    $progressElement.width(percentage + '%');
                }
            }

            function getOptions() {
                return $.extend({}, getDefaults(), toastr.options);
            }

            function removeToast($toastElement) {
                if (!$container) {
                    $container = getContainer();
                }
                if ($toastElement.is(':visible')) {
                    return;
                }
                $toastElement.remove();
                $toastElement = null;
                if ($container.children().length === 0) {
                    $container.remove();
                    previousToast = undefined;
                }
            }
        }();
    });
})(typeof define === 'function' && define.amd ? define : function (deps, factory) {
    if (typeof module !== 'undefined' && module.exports) {
        //Node
        module.exports = factory(require('jquery'));
    } else {
        window.toastr = factory(window.jQuery);
    }
});
!function (t, e) {
    "object" == (typeof exports === "undefined" ? "undefined" : _typeof2(exports)) && "object" == (typeof module === "undefined" ? "undefined" : _typeof2(module)) ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof2(exports)) ? exports.VueSelect = e() : t.VueSelect = e();
}(this, function () {
    return function (t) {
        function e(r) {
            if (n[r]) return n[r].exports;var o = n[r] = { exports: {}, id: r, loaded: !1 };return t[r].call(o.exports, o, o.exports, e), o.loaded = !0, o.exports;
        }var n = {};return e.m = t, e.c = n, e.p = "/", e(0);
    }([function (t, e, n) {
        "use strict";
        function r(t) {
            return t && t.__esModule ? t : { default: t };
        }Object.defineProperty(e, "__esModule", { value: !0 }), e.mixins = e.VueSelect = void 0;var o = n(83),
            i = r(o),
            a = n(42),
            s = r(a);e.default = i.default, e.VueSelect = i.default, e.mixins = s.default;
    }, function (t, e) {
        var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();"number" == typeof __g && (__g = n);
    }, function (t, e, n) {
        t.exports = !n(9)(function () {
            return 7 != Object.defineProperty({}, "a", { get: function get() {
                    return 7;
                } }).a;
        });
    }, function (t, e) {
        var n = {}.hasOwnProperty;t.exports = function (t, e) {
            return n.call(t, e);
        };
    }, function (t, e, n) {
        var r = n(11),
            o = n(33),
            i = n(25),
            a = Object.defineProperty;e.f = n(2) ? Object.defineProperty : function (t, e, n) {
            if (r(t), e = i(e, !0), r(n), o) try {
                return a(t, e, n);
            } catch (t) {}if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");return "value" in n && (t[e] = n.value), t;
        };
    }, function (t, e) {
        var n = t.exports = { version: "2.5.2" };"number" == typeof __e && (__e = n);
    }, function (t, e, n) {
        var r = n(4),
            o = n(14);t.exports = n(2) ? function (t, e, n) {
            return r.f(t, e, o(1, n));
        } : function (t, e, n) {
            return t[e] = n, t;
        };
    }, function (t, e, n) {
        var r = n(59),
            o = n(16);t.exports = function (t) {
            return r(o(t));
        };
    }, function (t, e, n) {
        var r = n(23)("wks"),
            o = n(15),
            i = n(1).Symbol,
            a = "function" == typeof i,
            s = t.exports = function (t) {
            return r[t] || (r[t] = a && i[t] || (a ? i : o)("Symbol." + t));
        };s.store = r;
    }, function (t, e) {
        t.exports = function (t) {
            try {
                return !!t();
            } catch (t) {
                return !0;
            }
        };
    }, function (t, e) {
        t.exports = function (t) {
            return "object" == (typeof t === "undefined" ? "undefined" : _typeof2(t)) ? null !== t : "function" == typeof t;
        };
    }, function (t, e, n) {
        var r = n(10);t.exports = function (t) {
            if (!r(t)) throw TypeError(t + " is not an object!");return t;
        };
    }, function (t, e, n) {
        var r = n(1),
            o = n(5),
            i = n(56),
            a = n(6),
            s = "prototype",
            u = function u(t, e, n) {
            var l,
                c,
                f,
                p = t & u.F,
                d = t & u.G,
                h = t & u.S,
                b = t & u.P,
                v = t & u.B,
                g = t & u.W,
                y = d ? o : o[e] || (o[e] = {}),
                m = y[s],
                x = d ? r : h ? r[e] : (r[e] || {})[s];d && (n = e);for (l in n) {
                c = !p && x && void 0 !== x[l], c && l in y || (f = c ? x[l] : n[l], y[l] = d && "function" != typeof x[l] ? n[l] : v && c ? i(f, r) : g && x[l] == f ? function (t) {
                    var e = function e(_e2, n, r) {
                        if (this instanceof t) {
                            switch (arguments.length) {case 0:
                                    return new t();case 1:
                                    return new t(_e2);case 2:
                                    return new t(_e2, n);}return new t(_e2, n, r);
                        }return t.apply(this, arguments);
                    };return e[s] = t[s], e;
                }(f) : b && "function" == typeof f ? i(Function.call, f) : f, b && ((y.virtual || (y.virtual = {}))[l] = f, t & u.R && m && !m[l] && a(m, l, f)));
            }
        };u.F = 1, u.G = 2, u.S = 4, u.P = 8, u.B = 16, u.W = 32, u.U = 64, u.R = 128, t.exports = u;
    }, function (t, e, n) {
        var r = n(38),
            o = n(17);t.exports = Object.keys || function (t) {
            return r(t, o);
        };
    }, function (t, e) {
        t.exports = function (t, e) {
            return { enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: e };
        };
    }, function (t, e) {
        var n = 0,
            r = Math.random();t.exports = function (t) {
            return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + r).toString(36));
        };
    }, function (t, e) {
        t.exports = function (t) {
            if (void 0 == t) throw TypeError("Can't call method on  " + t);return t;
        };
    }, function (t, e) {
        t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
    }, function (t, e) {
        t.exports = {};
    }, function (t, e) {
        t.exports = !0;
    }, function (t, e) {
        e.f = {}.propertyIsEnumerable;
    }, function (t, e, n) {
        var r = n(4).f,
            o = n(3),
            i = n(8)("toStringTag");t.exports = function (t, e, n) {
            t && !o(t = n ? t : t.prototype, i) && r(t, i, { configurable: !0, value: e });
        };
    }, function (t, e, n) {
        var r = n(23)("keys"),
            o = n(15);t.exports = function (t) {
            return r[t] || (r[t] = o(t));
        };
    }, function (t, e, n) {
        var r = n(1),
            o = "__core-js_shared__",
            i = r[o] || (r[o] = {});t.exports = function (t) {
            return i[t] || (i[t] = {});
        };
    }, function (t, e) {
        var n = Math.ceil,
            r = Math.floor;t.exports = function (t) {
            return isNaN(t = +t) ? 0 : (t > 0 ? r : n)(t);
        };
    }, function (t, e, n) {
        var r = n(10);t.exports = function (t, e) {
            if (!r(t)) return t;var n, o;if (e && "function" == typeof (n = t.toString) && !r(o = n.call(t))) return o;if ("function" == typeof (n = t.valueOf) && !r(o = n.call(t))) return o;if (!e && "function" == typeof (n = t.toString) && !r(o = n.call(t))) return o;throw TypeError("Can't convert object to primitive value");
        };
    }, function (t, e, n) {
        var r = n(1),
            o = n(5),
            i = n(19),
            a = n(27),
            s = n(4).f;t.exports = function (t) {
            var e = o.Symbol || (o.Symbol = i ? {} : r.Symbol || {});"_" == t.charAt(0) || t in e || s(e, t, { value: a.f(t) });
        };
    }, function (t, e, n) {
        e.f = n(8);
    }, function (t, e) {
        "use strict";
        t.exports = { props: { loading: { type: Boolean, default: !1 }, onSearch: { type: Function, default: function _default(t, e) {} } }, data: function data() {
                return { mutableLoading: !1 };
            }, watch: { search: function search() {
                    this.search.length > 0 && (this.onSearch(this.search, this.toggleLoading), this.$emit("search", this.search, this.toggleLoading));
                }, loading: function loading(t) {
                    this.mutableLoading = t;
                } }, methods: { toggleLoading: function toggleLoading() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;return null == t ? this.mutableLoading = !this.mutableLoading : this.mutableLoading = t;
                } } };
    }, function (t, e) {
        "use strict";
        t.exports = { watch: { typeAheadPointer: function typeAheadPointer() {
                    this.maybeAdjustScroll();
                } }, methods: { maybeAdjustScroll: function maybeAdjustScroll() {
                    var t = this.pixelsToPointerTop(),
                        e = this.pixelsToPointerBottom();return t <= this.viewport().top ? this.scrollTo(t) : e >= this.viewport().bottom ? this.scrollTo(this.viewport().top + this.pointerHeight()) : void 0;
                }, pixelsToPointerTop: function t() {
                    var t = 0;if (this.$refs.dropdownMenu) for (var e = 0; e < this.typeAheadPointer; e++) {
                        t += this.$refs.dropdownMenu.children[e].offsetHeight;
                    }return t;
                }, pixelsToPointerBottom: function pixelsToPointerBottom() {
                    return this.pixelsToPointerTop() + this.pointerHeight();
                }, pointerHeight: function pointerHeight() {
                    var t = !!this.$refs.dropdownMenu && this.$refs.dropdownMenu.children[this.typeAheadPointer];return t ? t.offsetHeight : 0;
                }, viewport: function viewport() {
                    return { top: this.$refs.dropdownMenu ? this.$refs.dropdownMenu.scrollTop : 0, bottom: this.$refs.dropdownMenu ? this.$refs.dropdownMenu.offsetHeight + this.$refs.dropdownMenu.scrollTop : 0 };
                }, scrollTo: function scrollTo(t) {
                    return this.$refs.dropdownMenu ? this.$refs.dropdownMenu.scrollTop = t : null;
                } } };
    }, function (t, e) {
        "use strict";
        t.exports = { data: function data() {
                return { typeAheadPointer: -1 };
            }, watch: { filteredOptions: function filteredOptions() {
                    this.typeAheadPointer = 0;
                } }, methods: { typeAheadUp: function typeAheadUp() {
                    this.typeAheadPointer > 0 && (this.typeAheadPointer--, this.maybeAdjustScroll && this.maybeAdjustScroll());
                }, typeAheadDown: function typeAheadDown() {
                    this.typeAheadPointer < this.filteredOptions.length - 1 && (this.typeAheadPointer++, this.maybeAdjustScroll && this.maybeAdjustScroll());
                }, typeAheadSelect: function typeAheadSelect() {
                    this.filteredOptions[this.typeAheadPointer] ? this.select(this.filteredOptions[this.typeAheadPointer]) : this.taggable && this.search.length && this.select(this.search), this.clearSearchOnSelect && (this.search = "");
                } } };
    }, function (t, e) {
        var n = {}.toString;t.exports = function (t) {
            return n.call(t).slice(8, -1);
        };
    }, function (t, e, n) {
        var r = n(10),
            o = n(1).document,
            i = r(o) && r(o.createElement);t.exports = function (t) {
            return i ? o.createElement(t) : {};
        };
    }, function (t, e, n) {
        t.exports = !n(2) && !n(9)(function () {
            return 7 != Object.defineProperty(n(32)("div"), "a", { get: function get() {
                    return 7;
                } }).a;
        });
    }, function (t, e, n) {
        "use strict";
        var r = n(19),
            o = n(12),
            i = n(39),
            a = n(6),
            s = n(3),
            u = n(18),
            l = n(61),
            c = n(21),
            f = n(67),
            p = n(8)("iterator"),
            d = !([].keys && "next" in [].keys()),
            h = "@@iterator",
            b = "keys",
            v = "values",
            g = function g() {
            return this;
        };t.exports = function (t, e, n, y, m, x, w) {
            l(n, e, y);var S,
                O,
                _,
                j = function j(t) {
                if (!d && t in A) return A[t];switch (t) {case b:
                        return function () {
                            return new n(this, t);
                        };case v:
                        return function () {
                            return new n(this, t);
                        };}return function () {
                    return new n(this, t);
                };
            },
                k = e + " Iterator",
                P = m == v,
                C = !1,
                A = t.prototype,
                M = A[p] || A[h] || m && A[m],
                L = M || j(m),
                T = m ? P ? j("entries") : L : void 0,
                E = "Array" == e ? A.entries || M : M;if (E && (_ = f(E.call(new t())), _ !== Object.prototype && _.next && (c(_, k, !0), r || s(_, p) || a(_, p, g))), P && M && M.name !== v && (C = !0, L = function L() {
                return M.call(this);
            }), r && !w || !d && !C && A[p] || a(A, p, L), u[e] = L, u[k] = g, m) if (S = { values: P ? L : j(v), keys: x ? L : j(b), entries: T }, w) for (O in S) {
                O in A || i(A, O, S[O]);
            } else o(o.P + o.F * (d || C), e, S);return S;
        };
    }, function (t, e, n) {
        var r = n(11),
            o = n(64),
            i = n(17),
            a = n(22)("IE_PROTO"),
            s = function s() {},
            u = "prototype",
            _l = function l() {
            var t,
                e = n(32)("iframe"),
                r = i.length,
                o = "<",
                a = ">";for (e.style.display = "none", n(58).appendChild(e), e.src = "javascript:", t = e.contentWindow.document, t.open(), t.write(o + "script" + a + "document.F=Object" + o + "/script" + a), t.close(), _l = t.F; r--;) {
                delete _l[u][i[r]];
            }return _l();
        };t.exports = Object.create || function (t, e) {
            var n;return null !== t ? (s[u] = r(t), n = new s(), s[u] = null, n[a] = t) : n = _l(), void 0 === e ? n : o(n, e);
        };
    }, function (t, e, n) {
        var r = n(38),
            o = n(17).concat("length", "prototype");e.f = Object.getOwnPropertyNames || function (t) {
            return r(t, o);
        };
    }, function (t, e) {
        e.f = Object.getOwnPropertySymbols;
    }, function (t, e, n) {
        var r = n(3),
            o = n(7),
            i = n(55)(!1),
            a = n(22)("IE_PROTO");t.exports = function (t, e) {
            var n,
                s = o(t),
                u = 0,
                l = [];for (n in s) {
                n != a && r(s, n) && l.push(n);
            }for (; e.length > u;) {
                r(s, n = e[u++]) && (~i(l, n) || l.push(n));
            }return l;
        };
    }, function (t, e, n) {
        t.exports = n(6);
    }, function (t, e, n) {
        var r = n(16);t.exports = function (t) {
            return Object(r(t));
        };
    }, function (t, e, n) {
        "use strict";
        function r(t) {
            return t && t.__esModule ? t : { default: t };
        }Object.defineProperty(e, "__esModule", { value: !0 });var o = n(44),
            i = r(o),
            a = n(47),
            s = r(a),
            u = n(48),
            l = r(u),
            c = n(29),
            f = r(c),
            p = n(30),
            d = r(p),
            h = n(28),
            b = r(h);e.default = { mixins: [f.default, d.default, b.default], props: { value: { default: null }, options: { type: Array, default: function _default() {
                        return [];
                    } }, disabled: { type: Boolean, default: !1 }, maxHeight: { type: String, default: "400px" }, searchable: { type: Boolean, default: !0 }, multiple: { type: Boolean, default: !1 }, placeholder: { type: String, default: "" }, transition: { type: String, default: "fade" }, clearSearchOnSelect: { type: Boolean, default: !0 }, closeOnSelect: { type: Boolean, default: !0 }, label: { type: String, default: "label" }, getOptionLabel: { type: Function, default: function _default(t) {
                        return "object" === ("undefined" == typeof t ? "undefined" : (0, l.default)(t)) && this.label && t[this.label] ? t[this.label] : t;
                    } }, onChange: { type: Function, default: function _default(t) {
                        this.$emit("input", t);
                    } }, taggable: { type: Boolean, default: !1 }, tabindex: { type: Number, default: null }, pushTags: { type: Boolean, default: !1 }, filterable: { type: Boolean, default: !0 }, createOption: { type: Function, default: function _default(t) {
                        return "object" === (0, l.default)(this.mutableOptions[0]) && (t = (0, s.default)({}, this.label, t)), this.$emit("option:created", t), t;
                    } }, resetOnOptionsChange: { type: Boolean, default: !1 }, noDrop: { type: Boolean, default: !1 }, inputId: { type: String }, dir: { type: String, default: "auto" } }, data: function data() {
                return { search: "", open: !1, mutableValue: null, mutableOptions: [] };
            }, watch: { value: function value(t) {
                    this.mutableValue = t;
                }, mutableValue: function mutableValue(t, e) {
                    this.multiple ? this.onChange ? this.onChange(t) : null : this.onChange && t !== e ? this.onChange(t) : null;
                }, options: function options(t) {
                    this.mutableOptions = t;
                }, mutableOptions: function mutableOptions() {
                    !this.taggable && this.resetOnOptionsChange && (this.mutableValue = this.multiple ? [] : null);
                }, multiple: function multiple(t) {
                    this.mutableValue = t ? [] : null;
                } }, created: function created() {
                this.mutableValue = this.value, this.mutableOptions = this.options.slice(0), this.mutableLoading = this.loading, this.$on("option:created", this.maybePushTag);
            }, methods: { select: function select(t) {
                    this.isOptionSelected(t) ? this.deselect(t) : (this.taggable && !this.optionExists(t) && (t = this.createOption(t)), this.multiple && !this.mutableValue ? this.mutableValue = [t] : this.multiple ? this.mutableValue.push(t) : this.mutableValue = t), this.onAfterSelect(t);
                }, deselect: function deselect(t) {
                    var e = this;if (this.multiple) {
                        var n = -1;this.mutableValue.forEach(function (r) {
                            (r === t || "object" === ("undefined" == typeof r ? "undefined" : (0, l.default)(r)) && r[e.label] === t[e.label]) && (n = r);
                        });var r = this.mutableValue.indexOf(n);this.mutableValue.splice(r, 1);
                    } else this.mutableValue = null;
                }, clearSelection: function clearSelection() {
                    this.mutableValue = this.multiple ? [] : null;
                }, onAfterSelect: function onAfterSelect(t) {
                    this.closeOnSelect && (this.open = !this.open, this.$refs.search.blur()), this.clearSearchOnSelect && (this.search = "");
                }, toggleDropdown: function toggleDropdown(t) {
                    t.target !== this.$refs.openIndicator && t.target !== this.$refs.search && t.target !== this.$refs.toggle && t.target !== this.$el || (this.open ? this.$refs.search.blur() : this.disabled || (this.open = !0, this.$refs.search.focus()));
                }, isOptionSelected: function isOptionSelected(t) {
                    var e = this;if (this.multiple && this.mutableValue) {
                        var n = !1;return this.mutableValue.forEach(function (r) {
                            "object" === ("undefined" == typeof r ? "undefined" : (0, l.default)(r)) && r[e.label] === t[e.label] ? n = !0 : "object" === ("undefined" == typeof r ? "undefined" : (0, l.default)(r)) && r[e.label] === t ? n = !0 : r === t && (n = !0);
                        }), n;
                    }return this.mutableValue === t;
                }, onEscape: function onEscape() {
                    this.search.length ? this.search = "" : this.$refs.search.blur();
                }, onSearchBlur: function onSearchBlur() {
                    this.clearSearchOnBlur && (this.search = ""), this.open = !1, this.$emit("search:blur");
                }, onSearchFocus: function onSearchFocus() {
                    this.open = !0, this.$emit("search:focus");
                }, maybeDeleteValue: function maybeDeleteValue() {
                    if (!this.$refs.search.value.length && this.mutableValue) return this.multiple ? this.mutableValue.pop() : this.mutableValue = null;
                }, optionExists: function optionExists(t) {
                    var e = this,
                        n = !1;return this.mutableOptions.forEach(function (r) {
                        "object" === ("undefined" == typeof r ? "undefined" : (0, l.default)(r)) && r[e.label] === t ? n = !0 : r === t && (n = !0);
                    }), n;
                }, maybePushTag: function maybePushTag(t) {
                    this.pushTags && this.mutableOptions.push(t);
                } }, computed: { dropdownClasses: function dropdownClasses() {
                    return { open: this.dropdownOpen, single: !this.multiple, searching: this.searching, searchable: this.searchable, unsearchable: !this.searchable, loading: this.mutableLoading, rtl: "rtl" === this.dir, disabled: this.disabled };
                }, clearSearchOnBlur: function clearSearchOnBlur() {
                    return this.clearSearchOnSelect && !this.multiple;
                }, searching: function searching() {
                    return !!this.search;
                }, dropdownOpen: function dropdownOpen() {
                    return !this.noDrop && this.open && !this.mutableLoading;
                }, searchPlaceholder: function searchPlaceholder() {
                    if (this.isValueEmpty && this.placeholder) return this.placeholder;
                }, filteredOptions: function filteredOptions() {
                    var t = this;if (!this.filterable && !this.taggable) return this.mutableOptions.slice();var e = this.mutableOptions.filter(function (e) {
                        return "object" === ("undefined" == typeof e ? "undefined" : (0, l.default)(e)) && e.hasOwnProperty(t.label) ? e[t.label].toLowerCase().indexOf(t.search.toLowerCase()) > -1 : "object" !== ("undefined" == typeof e ? "undefined" : (0, l.default)(e)) || e.hasOwnProperty(t.label) ? e.toLowerCase().indexOf(t.search.toLowerCase()) > -1 : console.warn('[vue-select warn]: Label key "option.' + t.label + '" does not exist in options object.\nhttp://sagalbot.github.io/vue-select/#ex-labels');
                    });return this.taggable && this.search.length && !this.optionExists(this.search) && e.unshift(this.search), e;
                }, isValueEmpty: function isValueEmpty() {
                    return !this.mutableValue || ("object" === (0, l.default)(this.mutableValue) ? !(0, i.default)(this.mutableValue).length : !this.mutableValue.length);
                }, valueAsArray: function valueAsArray() {
                    return this.multiple ? this.mutableValue : this.mutableValue ? [this.mutableValue] : [];
                }, showClearButton: function showClearButton() {
                    return !this.multiple && !this.open && null != this.mutableValue;
                } } };
    }, function (t, e, n) {
        "use strict";
        function r(t) {
            return t && t.__esModule ? t : { default: t };
        }Object.defineProperty(e, "__esModule", { value: !0 });var o = n(28),
            i = r(o),
            a = n(30),
            s = r(a),
            u = n(29),
            l = r(u);e.default = { ajax: i.default, pointer: s.default, pointerScroll: l.default };
    }, function (t, e, n) {
        t.exports = { default: n(49), __esModule: !0 };
    }, function (t, e, n) {
        t.exports = { default: n(50), __esModule: !0 };
    }, function (t, e, n) {
        t.exports = { default: n(51), __esModule: !0 };
    }, function (t, e, n) {
        t.exports = { default: n(52), __esModule: !0 };
    }, function (t, e, n) {
        "use strict";
        function r(t) {
            return t && t.__esModule ? t : { default: t };
        }e.__esModule = !0;var o = n(43),
            i = r(o);e.default = function (t, e, n) {
            return e in t ? (0, i.default)(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
        };
    }, function (t, e, n) {
        "use strict";
        function r(t) {
            return t && t.__esModule ? t : { default: t };
        }e.__esModule = !0;var o = n(46),
            i = r(o),
            a = n(45),
            s = r(a),
            u = "function" == typeof s.default && "symbol" == _typeof2(i.default) ? function (t) {
            return typeof t === "undefined" ? "undefined" : _typeof2(t);
        } : function (t) {
            return t && "function" == typeof s.default && t.constructor === s.default && t !== s.default.prototype ? "symbol" : typeof t === "undefined" ? "undefined" : _typeof2(t);
        };e.default = "function" == typeof s.default && "symbol" === u(i.default) ? function (t) {
            return "undefined" == typeof t ? "undefined" : u(t);
        } : function (t) {
            return t && "function" == typeof s.default && t.constructor === s.default && t !== s.default.prototype ? "symbol" : "undefined" == typeof t ? "undefined" : u(t);
        };
    }, function (t, e, n) {
        n(73);var r = n(5).Object;t.exports = function (t, e, n) {
            return r.defineProperty(t, e, n);
        };
    }, function (t, e, n) {
        n(74), t.exports = n(5).Object.keys;
    }, function (t, e, n) {
        n(77), n(75), n(78), n(79), t.exports = n(5).Symbol;
    }, function (t, e, n) {
        n(76), n(80), t.exports = n(27).f("iterator");
    }, function (t, e) {
        t.exports = function (t) {
            if ("function" != typeof t) throw TypeError(t + " is not a function!");return t;
        };
    }, function (t, e) {
        t.exports = function () {};
    }, function (t, e, n) {
        var r = n(7),
            o = n(71),
            i = n(70);t.exports = function (t) {
            return function (e, n, a) {
                var s,
                    u = r(e),
                    l = o(u.length),
                    c = i(a, l);if (t && n != n) {
                    for (; l > c;) {
                        if (s = u[c++], s != s) return !0;
                    }
                } else for (; l > c; c++) {
                    if ((t || c in u) && u[c] === n) return t || c || 0;
                }return !t && -1;
            };
        };
    }, function (t, e, n) {
        var r = n(53);t.exports = function (t, e, n) {
            if (r(t), void 0 === e) return t;switch (n) {case 1:
                    return function (n) {
                        return t.call(e, n);
                    };case 2:
                    return function (n, r) {
                        return t.call(e, n, r);
                    };case 3:
                    return function (n, r, o) {
                        return t.call(e, n, r, o);
                    };}return function () {
                return t.apply(e, arguments);
            };
        };
    }, function (t, e, n) {
        var r = n(13),
            o = n(37),
            i = n(20);t.exports = function (t) {
            var e = r(t),
                n = o.f;if (n) for (var a, s = n(t), u = i.f, l = 0; s.length > l;) {
                u.call(t, a = s[l++]) && e.push(a);
            }return e;
        };
    }, function (t, e, n) {
        var r = n(1).document;t.exports = r && r.documentElement;
    }, function (t, e, n) {
        var r = n(31);t.exports = Object("z").propertyIsEnumerable(0) ? Object : function (t) {
            return "String" == r(t) ? t.split("") : Object(t);
        };
    }, function (t, e, n) {
        var r = n(31);t.exports = Array.isArray || function (t) {
            return "Array" == r(t);
        };
    }, function (t, e, n) {
        "use strict";
        var r = n(35),
            o = n(14),
            i = n(21),
            a = {};n(6)(a, n(8)("iterator"), function () {
            return this;
        }), t.exports = function (t, e, n) {
            t.prototype = r(a, { next: o(1, n) }), i(t, e + " Iterator");
        };
    }, function (t, e) {
        t.exports = function (t, e) {
            return { value: e, done: !!t };
        };
    }, function (t, e, n) {
        var r = n(15)("meta"),
            o = n(10),
            i = n(3),
            a = n(4).f,
            s = 0,
            u = Object.isExtensible || function () {
            return !0;
        },
            l = !n(9)(function () {
            return u(Object.preventExtensions({}));
        }),
            c = function c(t) {
            a(t, r, { value: { i: "O" + ++s, w: {} } });
        },
            f = function f(t, e) {
            if (!o(t)) return "symbol" == (typeof t === "undefined" ? "undefined" : _typeof2(t)) ? t : ("string" == typeof t ? "S" : "P") + t;if (!i(t, r)) {
                if (!u(t)) return "F";if (!e) return "E";c(t);
            }return t[r].i;
        },
            p = function p(t, e) {
            if (!i(t, r)) {
                if (!u(t)) return !0;if (!e) return !1;c(t);
            }return t[r].w;
        },
            d = function d(t) {
            return l && h.NEED && u(t) && !i(t, r) && c(t), t;
        },
            h = t.exports = { KEY: r, NEED: !1, fastKey: f, getWeak: p, onFreeze: d };
    }, function (t, e, n) {
        var r = n(4),
            o = n(11),
            i = n(13);t.exports = n(2) ? Object.defineProperties : function (t, e) {
            o(t);for (var n, a = i(e), s = a.length, u = 0; s > u;) {
                r.f(t, n = a[u++], e[n]);
            }return t;
        };
    }, function (t, e, n) {
        var r = n(20),
            o = n(14),
            i = n(7),
            a = n(25),
            s = n(3),
            u = n(33),
            l = Object.getOwnPropertyDescriptor;e.f = n(2) ? l : function (t, e) {
            if (t = i(t), e = a(e, !0), u) try {
                return l(t, e);
            } catch (t) {}if (s(t, e)) return o(!r.f.call(t, e), t[e]);
        };
    }, function (t, e, n) {
        var r = n(7),
            o = n(36).f,
            i = {}.toString,
            a = "object" == (typeof window === "undefined" ? "undefined" : _typeof2(window)) && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
            s = function s(t) {
            try {
                return o(t);
            } catch (t) {
                return a.slice();
            }
        };t.exports.f = function (t) {
            return a && "[object Window]" == i.call(t) ? s(t) : o(r(t));
        };
    }, function (t, e, n) {
        var r = n(3),
            o = n(40),
            i = n(22)("IE_PROTO"),
            a = Object.prototype;t.exports = Object.getPrototypeOf || function (t) {
            return t = o(t), r(t, i) ? t[i] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? a : null;
        };
    }, function (t, e, n) {
        var r = n(12),
            o = n(5),
            i = n(9);t.exports = function (t, e) {
            var n = (o.Object || {})[t] || Object[t],
                a = {};a[t] = e(n), r(r.S + r.F * i(function () {
                n(1);
            }), "Object", a);
        };
    }, function (t, e, n) {
        var r = n(24),
            o = n(16);t.exports = function (t) {
            return function (e, n) {
                var i,
                    a,
                    s = String(o(e)),
                    u = r(n),
                    l = s.length;return u < 0 || u >= l ? t ? "" : void 0 : (i = s.charCodeAt(u), i < 55296 || i > 56319 || u + 1 === l || (a = s.charCodeAt(u + 1)) < 56320 || a > 57343 ? t ? s.charAt(u) : i : t ? s.slice(u, u + 2) : (i - 55296 << 10) + (a - 56320) + 65536);
            };
        };
    }, function (t, e, n) {
        var r = n(24),
            o = Math.max,
            i = Math.min;t.exports = function (t, e) {
            return t = r(t), t < 0 ? o(t + e, 0) : i(t, e);
        };
    }, function (t, e, n) {
        var r = n(24),
            o = Math.min;t.exports = function (t) {
            return t > 0 ? o(r(t), 9007199254740991) : 0;
        };
    }, function (t, e, n) {
        "use strict";
        var r = n(54),
            o = n(62),
            i = n(18),
            a = n(7);t.exports = n(34)(Array, "Array", function (t, e) {
            this._t = a(t), this._i = 0, this._k = e;
        }, function () {
            var t = this._t,
                e = this._k,
                n = this._i++;return !t || n >= t.length ? (this._t = void 0, o(1)) : "keys" == e ? o(0, n) : "values" == e ? o(0, t[n]) : o(0, [n, t[n]]);
        }, "values"), i.Arguments = i.Array, r("keys"), r("values"), r("entries");
    }, function (t, e, n) {
        var r = n(12);r(r.S + r.F * !n(2), "Object", { defineProperty: n(4).f });
    }, function (t, e, n) {
        var r = n(40),
            o = n(13);n(68)("keys", function () {
            return function (t) {
                return o(r(t));
            };
        });
    }, function (t, e) {}, function (t, e, n) {
        "use strict";
        var r = n(69)(!0);n(34)(String, "String", function (t) {
            this._t = String(t), this._i = 0;
        }, function () {
            var t,
                e = this._t,
                n = this._i;return n >= e.length ? { value: void 0, done: !0 } : (t = r(e, n), this._i += t.length, { value: t, done: !1 });
        });
    }, function (t, e, n) {
        "use strict";
        var r = n(1),
            o = n(3),
            i = n(2),
            a = n(12),
            s = n(39),
            u = n(63).KEY,
            l = n(9),
            c = n(23),
            f = n(21),
            p = n(15),
            d = n(8),
            h = n(27),
            b = n(26),
            v = n(57),
            g = n(60),
            y = n(11),
            m = n(10),
            x = n(7),
            w = n(25),
            S = n(14),
            O = n(35),
            _ = n(66),
            j = n(65),
            k = n(4),
            P = n(13),
            C = j.f,
            A = k.f,
            M = _.f,
            _L = r.Symbol,
            T = r.JSON,
            E = T && T.stringify,
            V = "prototype",
            B = d("_hidden"),
            F = d("toPrimitive"),
            $ = {}.propertyIsEnumerable,
            N = c("symbol-registry"),
            D = c("symbols"),
            I = c("op-symbols"),
            R = Object[V],
            z = "function" == typeof _L,
            H = r.QObject,
            G = !H || !H[V] || !H[V].findChild,
            U = i && l(function () {
            return 7 != O(A({}, "a", { get: function get() {
                    return A(this, "a", { value: 7 }).a;
                } })).a;
        }) ? function (t, e, n) {
            var r = C(R, e);r && delete R[e], A(t, e, n), r && t !== R && A(R, e, r);
        } : A,
            W = function W(t) {
            var e = D[t] = O(_L[V]);return e._k = t, e;
        },
            J = z && "symbol" == _typeof2(_L.iterator) ? function (t) {
            return "symbol" == (typeof t === "undefined" ? "undefined" : _typeof2(t));
        } : function (t) {
            return t instanceof _L;
        },
            K = function K(t, e, n) {
            return t === R && K(I, e, n), y(t), e = w(e, !0), y(n), o(D, e) ? (n.enumerable ? (o(t, B) && t[B][e] && (t[B][e] = !1), n = O(n, { enumerable: S(0, !1) })) : (o(t, B) || A(t, B, S(1, {})), t[B][e] = !0), U(t, e, n)) : A(t, e, n);
        },
            Y = function Y(t, e) {
            y(t);for (var n, r = v(e = x(e)), o = 0, i = r.length; i > o;) {
                K(t, n = r[o++], e[n]);
            }return t;
        },
            q = function q(t, e) {
            return void 0 === e ? O(t) : Y(O(t), e);
        },
            Q = function Q(t) {
            var e = $.call(this, t = w(t, !0));return !(this === R && o(D, t) && !o(I, t)) && (!(e || !o(this, t) || !o(D, t) || o(this, B) && this[B][t]) || e);
        },
            Z = function Z(t, e) {
            if (t = x(t), e = w(e, !0), t !== R || !o(D, e) || o(I, e)) {
                var n = C(t, e);return !n || !o(D, e) || o(t, B) && t[B][e] || (n.enumerable = !0), n;
            }
        },
            X = function X(t) {
            for (var e, n = M(x(t)), r = [], i = 0; n.length > i;) {
                o(D, e = n[i++]) || e == B || e == u || r.push(e);
            }return r;
        },
            tt = function tt(t) {
            for (var e, n = t === R, r = M(n ? I : x(t)), i = [], a = 0; r.length > a;) {
                !o(D, e = r[a++]) || n && !o(R, e) || i.push(D[e]);
            }return i;
        };z || (_L = function L() {
            if (this instanceof _L) throw TypeError("Symbol is not a constructor!");var t = p(arguments.length > 0 ? arguments[0] : void 0),
                e = function e(n) {
                this === R && e.call(I, n), o(this, B) && o(this[B], t) && (this[B][t] = !1), U(this, t, S(1, n));
            };return i && G && U(R, t, { configurable: !0, set: e }), W(t);
        }, s(_L[V], "toString", function () {
            return this._k;
        }), j.f = Z, k.f = K, n(36).f = _.f = X, n(20).f = Q, n(37).f = tt, i && !n(19) && s(R, "propertyIsEnumerable", Q, !0), h.f = function (t) {
            return W(d(t));
        }), a(a.G + a.W + a.F * !z, { Symbol: _L });for (var et = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), nt = 0; et.length > nt;) {
            d(et[nt++]);
        }for (var rt = P(d.store), ot = 0; rt.length > ot;) {
            b(rt[ot++]);
        }a(a.S + a.F * !z, "Symbol", { for: function _for(t) {
                return o(N, t += "") ? N[t] : N[t] = _L(t);
            }, keyFor: function keyFor(t) {
                if (!J(t)) throw TypeError(t + " is not a symbol!");for (var e in N) {
                    if (N[e] === t) return e;
                }
            }, useSetter: function useSetter() {
                G = !0;
            }, useSimple: function useSimple() {
                G = !1;
            } }), a(a.S + a.F * !z, "Object", { create: q, defineProperty: K, defineProperties: Y, getOwnPropertyDescriptor: Z, getOwnPropertyNames: X, getOwnPropertySymbols: tt }), T && a(a.S + a.F * (!z || l(function () {
            var t = _L();return "[null]" != E([t]) || "{}" != E({ a: t }) || "{}" != E(Object(t));
        })), "JSON", { stringify: function stringify(t) {
                for (var e, n, r = [t], o = 1; arguments.length > o;) {
                    r.push(arguments[o++]);
                }if (n = e = r[1], (m(e) || void 0 !== t) && !J(t)) return g(e) || (e = function e(t, _e3) {
                    if (n && (_e3 = n.call(this, t, _e3)), !J(_e3)) return _e3;
                }), r[1] = e, E.apply(T, r);
            } }), _L[V][F] || n(6)(_L[V], F, _L[V].valueOf), f(_L, "Symbol"), f(Math, "Math", !0), f(r.JSON, "JSON", !0);
    }, function (t, e, n) {
        n(26)("asyncIterator");
    }, function (t, e, n) {
        n(26)("observable");
    }, function (t, e, n) {
        n(72);for (var r = n(1), o = n(6), i = n(18), a = n(8)("toStringTag"), s = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), u = 0; u < s.length; u++) {
            var l = s[u],
                c = r[l],
                f = c && c.prototype;f && !f[a] && o(f, a, l), i[l] = i.Array;
        }
    }, function (t, e, n) {
        e = t.exports = n(82)(), e.push([t.id, '.v-select{position:relative;font-family:sans-serif}.v-select,.v-select *{box-sizing:border-box}.v-select.rtl .open-indicator{left:10px;right:auto}.v-select.rtl .selected-tag{float:right;margin-right:3px;margin-left:1px}.v-select.rtl .dropdown-menu{text-align:right}.v-select.rtl .dropdown-toggle .clear{left:30px;right:auto}.v-select .open-indicator{position:absolute;bottom:6px;right:10px;cursor:pointer;pointer-events:all;opacity:1;height:20px}.v-select .open-indicator,.v-select .open-indicator:before{display:inline-block;transition:all .15s cubic-bezier(1,-.115,.975,.855);transition-timing-function:cubic-bezier(1,-.115,.975,.855);width:10px}.v-select .open-indicator:before{border-color:rgba(60,60,60,.5);border-style:solid;border-width:3px 3px 0 0;content:"";height:10px;vertical-align:top;transform:rotate(133deg);box-sizing:inherit}.v-select.open .open-indicator:before{transform:rotate(315deg)}.v-select.loading .open-indicator{opacity:0}.v-select.open .open-indicator{bottom:1px}.v-select .dropdown-toggle{-webkit-appearance:none;-moz-appearance:none;appearance:none;display:block;padding:0;background:none;border:1px solid rgba(60,60,60,.26);border-radius:4px;white-space:normal}.v-select .dropdown-toggle:after{visibility:hidden;display:block;font-size:0;content:" ";clear:both;height:0}.v-select .dropdown-toggle .clear{position:absolute;bottom:9px;right:30px;font-size:23px;font-weight:700;line-height:1;color:rgba(60,60,60,.5);padding:0;border:0;background-color:transparent;cursor:pointer}.v-select.searchable .dropdown-toggle{cursor:text}.v-select.unsearchable .dropdown-toggle{cursor:pointer}.v-select.open .dropdown-toggle{border-bottom-color:transparent;border-bottom-left-radius:0;border-bottom-right-radius:0}.v-select .dropdown-menu{display:block;position:absolute;top:100%;left:0;z-index:1000;min-width:160px;padding:5px 0;margin:0;width:100%;overflow-y:scroll;border:1px solid rgba(0,0,0,.26);box-shadow:0 3px 6px 0 rgba(0,0,0,.15);border-top:none;border-radius:0 0 4px 4px;text-align:left;list-style:none;background:#fff}.v-select .no-options{text-align:center}.v-select .selected-tag{color:#333;background-color:#f0f0f0;border:1px solid #ccc;border-radius:4px;height:26px;margin:4px 1px 0 3px;padding:1px .25em;float:left;line-height:24px}.v-select.single .selected-tag{background-color:transparent;border-color:transparent}.v-select.single.open .selected-tag{position:absolute;opacity:.5}.v-select.single.loading .selected-tag,.v-select.single.open.searching .selected-tag{display:none}.v-select .selected-tag .close{float:none;margin-right:0;font-size:20px;appearance:none;padding:0;cursor:pointer;background:0 0;border:0;font-weight:700;line-height:1;color:#000;text-shadow:0 1px 0 #fff;filter:alpha(opacity=20);opacity:.2}.v-select.single.searching:not(.open):not(.loading) input[type=search]{opacity:.2}.v-select input[type=search]::-webkit-search-cancel-button,.v-select input[type=search]::-webkit-search-decoration,.v-select input[type=search]::-webkit-search-results-button,.v-select input[type=search]::-webkit-search-results-decoration{display:none}.v-select input[type=search]::-ms-clear{display:none}.v-select input[type=search],.v-select input[type=search]:focus{appearance:none;-webkit-appearance:none;-moz-appearance:none;line-height:1.42857143;font-size:1em;height:34px;display:inline-block;border:none;outline:none;margin:0;padding:0 .5em;width:10em;max-width:100%;background:none;position:relative;box-shadow:none}.v-select.unsearchable input[type=search]{opacity:0}.v-select.unsearchable input[type=search]:hover{cursor:pointer}.v-select li{line-height:1.42857143}.v-select li>a{display:block;padding:3px 20px;clear:both;color:#333;white-space:nowrap}.v-select li:hover{cursor:pointer}.v-select .dropdown-menu .active>a{color:#333;background:rgba(50,50,50,.1)}.v-select .dropdown-menu>.highlight>a{background:#5897fb;color:#fff}.v-select .highlight:not(:last-child){margin-bottom:0}.v-select .spinner{opacity:0;position:absolute;top:5px;right:10px;font-size:5px;text-indent:-9999em;overflow:hidden;border-top:.9em solid hsla(0,0%,39%,.1);border-right:.9em solid hsla(0,0%,39%,.1);border-bottom:.9em solid hsla(0,0%,39%,.1);border-left:.9em solid rgba(60,60,60,.45);transform:translateZ(0);animation:vSelectSpinner 1.1s infinite linear;transition:opacity .1s}.v-select .spinner,.v-select .spinner:after{border-radius:50%;width:5em;height:5em}.v-select.disabled .dropdown-toggle,.v-select.disabled .dropdown-toggle .clear,.v-select.disabled .dropdown-toggle input,.v-select.disabled .open-indicator,.v-select.disabled .selected-tag .close{cursor:not-allowed;background-color:#f8f8f8}.v-select.loading .spinner{opacity:1}@-webkit-keyframes vSelectSpinner{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes vSelectSpinner{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.fade-enter-active,.fade-leave-active{transition:opacity .15s cubic-bezier(1,.5,.8,1)}.fade-enter,.fade-leave-to{opacity:0}', ""]);
    }, function (t, e) {
        t.exports = function () {
            var t = [];return t.toString = function () {
                for (var t = [], e = 0; e < this.length; e++) {
                    var n = this[e];n[2] ? t.push("@media " + n[2] + "{" + n[1] + "}") : t.push(n[1]);
                }return t.join("");
            }, t.i = function (e, n) {
                "string" == typeof e && (e = [[null, e, ""]]);for (var r = {}, o = 0; o < this.length; o++) {
                    var i = this[o][0];"number" == typeof i && (r[i] = !0);
                }for (o = 0; o < e.length; o++) {
                    var a = e[o];"number" == typeof a[0] && r[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"), t.push(a));
                }
            }, t;
        };
    }, function (t, e, n) {
        n(87);var r = n(84)(n(41), n(85), null, null);t.exports = r.exports;
    }, function (t, e) {
        t.exports = function (t, e, n, r) {
            var o,
                i = t = t || {},
                a = _typeof2(t.default);"object" !== a && "function" !== a || (o = t, i = t.default);var s = "function" == typeof i ? i.options : i;if (e && (s.render = e.render, s.staticRenderFns = e.staticRenderFns), n && (s._scopeId = n), r) {
                var u = s.computed || (s.computed = {});Object.keys(r).forEach(function (t) {
                    var e = r[t];u[t] = function () {
                        return e;
                    };
                });
            }return { esModule: o, exports: i, options: s };
        };
    }, function (t, e) {
        t.exports = { render: function render() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;return n("div", { staticClass: "dropdown v-select", class: t.dropdownClasses, attrs: { dir: t.dir } }, [n("div", { ref: "toggle", class: ["dropdown-toggle", "clearfix"], on: { mousedown: function mousedown(e) {
                            e.preventDefault(), t.toggleDropdown(e);
                        } } }, [t._l(t.valueAsArray, function (e) {
                    return n("span", { key: e.index, staticClass: "selected-tag" }, [t._t("selected-option", [t._v("\n        " + t._s(t.getOptionLabel(e)) + "\n      ")], null, e), t._v(" "), t.multiple ? n("button", { staticClass: "close", attrs: { disabled: t.disabled, type: "button", "aria-label": "Remove option" }, on: { click: function click(n) {
                                t.deselect(e);
                            } } }, [n("span", { attrs: { "aria-hidden": "true" } }, [t._v("×")])]) : t._e()], 2);
                }), t._v(" "), n("input", { directives: [{ name: "model", rawName: "v-model", value: t.search, expression: "search" }], ref: "search", staticClass: "form-control", style: { width: t.isValueEmpty ? "100%" : "auto" }, attrs: { type: "search", autocomplete: "false", disabled: t.disabled, placeholder: t.searchPlaceholder, tabindex: t.tabindex, readonly: !t.searchable, id: t.inputId, "aria-label": "Search for option" }, domProps: { value: t.search }, on: { keydown: [function (e) {
                            return "button" in e || !t._k(e.keyCode, "delete", [8, 46], e.key) ? void t.maybeDeleteValue(e) : null;
                        }, function (e) {
                            return "button" in e || !t._k(e.keyCode, "up", 38, e.key) ? (e.preventDefault(), void t.typeAheadUp(e)) : null;
                        }, function (e) {
                            return "button" in e || !t._k(e.keyCode, "down", 40, e.key) ? (e.preventDefault(), void t.typeAheadDown(e)) : null;
                        }, function (e) {
                            return "button" in e || !t._k(e.keyCode, "enter", 13, e.key) ? (e.preventDefault(), void t.typeAheadSelect(e)) : null;
                        }], keyup: function keyup(e) {
                            return "button" in e || !t._k(e.keyCode, "esc", 27, e.key) ? void t.onEscape(e) : null;
                        }, blur: t.onSearchBlur, focus: t.onSearchFocus, input: function input(e) {
                            e.target.composing || (t.search = e.target.value);
                        } } }), t._v(" "), n("button", { directives: [{ name: "show", rawName: "v-show", value: t.showClearButton, expression: "showClearButton" }], staticClass: "clear", attrs: { disabled: t.disabled, type: "button", title: "Clear selection" }, on: { click: t.clearSelection } }, [n("span", { attrs: { "aria-hidden": "true" } }, [t._v("×")])]), t._v(" "), t.noDrop ? t._e() : n("i", { ref: "openIndicator", staticClass: "open-indicator", attrs: { role: "presentation" } }), t._v(" "), t._t("spinner", [n("div", { directives: [{ name: "show", rawName: "v-show", value: t.mutableLoading, expression: "mutableLoading" }], staticClass: "spinner" }, [t._v("Loading...")])])], 2), t._v(" "), n("transition", { attrs: { name: t.transition } }, [t.dropdownOpen ? n("ul", { ref: "dropdownMenu", staticClass: "dropdown-menu", style: { "max-height": t.maxHeight } }, [t._l(t.filteredOptions, function (e, r) {
                    return n("li", { key: r, class: { active: t.isOptionSelected(e), highlight: r === t.typeAheadPointer }, on: { mouseover: function mouseover(e) {
                                t.typeAheadPointer = r;
                            } } }, [n("a", { on: { mousedown: function mousedown(n) {
                                n.preventDefault(), t.select(e);
                            } } }, [t._t("option", [t._v("\n          " + t._s(t.getOptionLabel(e)) + "\n        ")], null, e)], 2)]);
                }), t._v(" "), t.filteredOptions.length ? t._e() : n("li", { staticClass: "no-options" }, [t._t("no-options", [t._v("Lo sentimos, no hay opciones coincidentes.")])], 2)], 2) : t._e()])], 1);
            }, staticRenderFns: [] };
    }, function (t, e, n) {
        function r(t, e) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n],
                    o = f[r.id];if (o) {
                    o.refs++;for (var i = 0; i < o.parts.length; i++) {
                        o.parts[i](r.parts[i]);
                    }for (; i < r.parts.length; i++) {
                        o.parts.push(u(r.parts[i], e));
                    }
                } else {
                    for (var a = [], i = 0; i < r.parts.length; i++) {
                        a.push(u(r.parts[i], e));
                    }f[r.id] = { id: r.id, refs: 1, parts: a };
                }
            }
        }function o(t) {
            for (var e = [], n = {}, r = 0; r < t.length; r++) {
                var o = t[r],
                    i = o[0],
                    a = o[1],
                    s = o[2],
                    u = o[3],
                    l = { css: a, media: s, sourceMap: u };n[i] ? n[i].parts.push(l) : e.push(n[i] = { id: i, parts: [l] });
            }return e;
        }function i(t, e) {
            var n = h(),
                r = g[g.length - 1];if ("top" === t.insertAt) r ? r.nextSibling ? n.insertBefore(e, r.nextSibling) : n.appendChild(e) : n.insertBefore(e, n.firstChild), g.push(e);else {
                if ("bottom" !== t.insertAt) throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(e);
            }
        }function a(t) {
            t.parentNode.removeChild(t);var e = g.indexOf(t);e >= 0 && g.splice(e, 1);
        }function s(t) {
            var e = document.createElement("style");return e.type = "text/css", i(t, e), e;
        }function u(t, e) {
            var n, r, o;if (e.singleton) {
                var i = v++;n = b || (b = s(e)), r = l.bind(null, n, i, !1), o = l.bind(null, n, i, !0);
            } else n = s(e), r = c.bind(null, n), o = function o() {
                a(n);
            };return r(t), function (e) {
                if (e) {
                    if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;r(t = e);
                } else o();
            };
        }function l(t, e, n, r) {
            var o = n ? "" : r.css;if (t.styleSheet) t.styleSheet.cssText = y(e, o);else {
                var i = document.createTextNode(o),
                    a = t.childNodes;a[e] && t.removeChild(a[e]), a.length ? t.insertBefore(i, a[e]) : t.appendChild(i);
            }
        }function c(t, e) {
            var n = e.css,
                r = e.media,
                o = e.sourceMap;if (r && t.setAttribute("media", r), o && (n += "\n/*# sourceURL=" + o.sources[0] + " */", n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */"), t.styleSheet) t.styleSheet.cssText = n;else {
                for (; t.firstChild;) {
                    t.removeChild(t.firstChild);
                }t.appendChild(document.createTextNode(n));
            }
        }var f = {},
            p = function p(t) {
            var e;return function () {
                return "undefined" == typeof e && (e = t.apply(this, arguments)), e;
            };
        },
            d = p(function () {
            return (/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())
            );
        }),
            h = p(function () {
            return document.head || document.getElementsByTagName("head")[0];
        }),
            b = null,
            v = 0,
            g = [];t.exports = function (t, e) {
            e = e || {}, "undefined" == typeof e.singleton && (e.singleton = d()), "undefined" == typeof e.insertAt && (e.insertAt = "bottom");var n = o(t);return r(n, e), function (t) {
                for (var i = [], a = 0; a < n.length; a++) {
                    var s = n[a],
                        u = f[s.id];u.refs--, i.push(u);
                }if (t) {
                    var l = o(t);r(l, e);
                }for (var a = 0; a < i.length; a++) {
                    var u = i[a];if (0 === u.refs) {
                        for (var c = 0; c < u.parts.length; c++) {
                            u.parts[c]();
                        }delete f[u.id];
                    }
                }
            };
        };var y = function () {
            var t = [];return function (e, n) {
                return t[e] = n, t.filter(Boolean).join("\n");
            };
        }();
    }, function (t, e, n) {
        var r = n(81);"string" == typeof r && (r = [[t.id, r, ""]]);n(86)(r, {});r.locals && (t.exports = r.locals);
    }]);
});
//# sourceMappingURL=vue-select.js.map
