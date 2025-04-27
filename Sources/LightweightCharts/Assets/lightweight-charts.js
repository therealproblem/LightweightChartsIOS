/**
 * Bundled by jsDelivr using Rollup v2.79.2 and Terser v5.39.0.
 * Original file: /npm/lightweight-charts@5.0.6/dist/lightweight-charts.production.mjs
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
import { size as t, equalSizes as i, tryCreateCanvasRenderingTarget2D as s, bindCanvasElementBitmapSizeTo as e } from "/npm/fancy-canvas@2.1.0/+esm";
/*!
 * @license
 * TradingView Lightweight Charts™ v5.0.6
 * Copyright (c) 2025 TradingView, Inc.
 * Licensed under Apache License 2.0 https://www.apache.org/licenses/LICENSE-2.0
 */
!function () {
    const h = {
        title: "",
        visible: !0,
        lastValueVisible: !0,
        priceLineVisible: !0,
        priceLineSource: 0,
        priceLineWidth: 1,
        priceLineColor: "",
        priceLineStyle: 2,
        baseLineVisible: !0,
        baseLineWidth: 1,
        baseLineColor: "#B2B5BE",
        baseLineStyle: 0,
        priceFormat: {
            type: "price",
            precision: 2,
            minMove: .01
        }
    };

    var n, r;

    function o(t, i) {
        const s = {
            0: [],
            1: [t.lineWidth, t.lineWidth],
            2: [2 * t.lineWidth, 2 * t.lineWidth],
            3: [6 * t.lineWidth, 6 * t.lineWidth],
            4: [t.lineWidth, 4 * t.lineWidth]
        }[i];

        t.setLineDash(s)
    }

    function l(t, i, s, e) {
        t.beginPath();
        const h = t.lineWidth % 2 ? .5 : 0;
        t.moveTo(s, i + h), t.lineTo(e, i + h), t.stroke()
    }

    function a(t, i) {
        if (!t) throw new Error("Assertion failed" + (i ? ": " + i : ""))
    }
    function u(t) { if (void 0 === t) throw new Error("Value is undefined"); return t }
    function c(t) { if (null === t) throw new Error("Value is null"); return t }
    function d(t) { return c(u(t)) }
    !function (t) { t[t.Simple = 0] = "Simple", t[t.WithSteps = 1] = "WithSteps", t[t.Curved = 2] = "Curved" }
        (n || (n = {})),
        function (t) { t[t.Solid = 0] = "Solid", t[t.Dotted = 1] = "Dotted", t[t.Dashed = 2] = "Dashed", t[t.LargeDashed = 3] = "LargeDashed", t[t.SparseDotted = 4] = "SparseDotted" }(r || (r = {}));

    class f {
        constructor() { this.t = [] } i(t, i, s) { const e = { h: t, l: i, o: !0 === s }; this.t.push(e) }
        _(t) { const i = this.t.findIndex((i => t === i.h)); i > -1 && this.t.splice(i, 1) }
        u(t) { this.t = this.t.filter((i => i.l !== t)) } p(t, i, s) { const e = [...this.t]; this.t = this.t.filter((t => !t.o)), e.forEach((e => e.h(t, i, s))) }
        v() { return this.t.length > 0 }
        m() { this.t = [] }
    }
    function p(t, ...i) { for (const s of i) for (const i in s) void 0 !== s[i] && Object.prototype.hasOwnProperty.call(s, i) && !["__proto__", "constructor", "prototype"].includes(i) && ("object" != typeof s[i] || void 0 === t[i] || Array.isArray(s[i]) ? t[i] = s[i] : p(t[i], s[i])); return t }
    function m(t) { return "number" == typeof t && isFinite(t) }
    function g(t) { return "number" == typeof t && t % 1 == 0 }
    function w(t) { return "string" == typeof t }
    function v(t) { return "boolean" == typeof t }
    function M(t) { const i = t; if (!i || "object" != typeof i) return i; let s, e, h; for (e in s = Array.isArray(i) ? [] : {}, i) i.hasOwnProperty(e) && (h = i[e], s[e] = h && "object" == typeof h ? M(h) : h); return s }
    function b(t) { return null !== t }
    function y(t) { return null === t ? void 0 : t }
    const S = "-apple-system, BlinkMacSystemFont, 'Trebuchet MS', Roboto, Ubuntu, sans-serif"; function x(t, i, s) { return void 0 === i && (i = S), `${s = void 0 !== s ? `${s} ` : ""}${t}px ${i}` }
    class _ {
        constructor(t) { this.M = { S: 1, C: 5, P: NaN, k: "", T: "", R: "", D: "", V: 0, I: 0, B: 0, A: 0, L: 0 }, this.O = t }
        N() { const t = this.M, i = this.W(), s = this.F(); return t.P === i && t.T === s || (t.P = i, t.T = s, t.k = x(i, s), t.A = 2.5 / 12 * i, t.V = t.A, t.I = i / 12 * t.C, t.B = i / 12 * t.C, t.L = 0), t.R = this.H(), t.D = this.U(), this.M }
        H() { return this.O.N().layout.textColor }
        U() { return this.O.$() }
        W() { return this.O.N().layout.fontSize }
        F() { return this.O.N().layout.fontFamily }
    }
    function C(t) { return t < 0 ? 0 : t > 255 ? 255 : Math.round(t) || 0 }
    function T(t) { return .199 * t[0] + .687 * t[1] + .114 * t[2] }
    class k {
        constructor(t, i) { this.q = new Map, this.Y = t, i && (this.q = i) }
        j(t, i) { if ("transparent" === t) return t; const s = this.K(t), e = s[3]; return `rgba(${s[0]}, ${s[1]}, ${s[2]}, ${i * e})` }
        X(t) { const i = this.K(t); return { Z: `rgb(${i[0]}, ${i[1]}, ${i[2]})`, G: T(i) > 160 ? "black" : "white" } }
        J(t) { return T(this.K(t)) }
        tt(t, i, s) { const [e, h, n, r] = this.K(t), [o, l, a, u] = this.K(i), c = [C(e + s * (o - e)), C(h + s * (l - h)), C(n + s * (a - n)), (d = r + s * (u - r), d <= 0 || d > 1 ? Math.min(Math.max(d, 0), 1) : Math.round(1e4 * d) / 1e4)]; var d; return `rgba(${c[0]}, ${c[1]}, ${c[2]}, ${c[3]})` }
        K(t) {
            const i = this.q.get(t); if (i) return i;
            const s = function (t) {
                const i = document.createElement("div"); i.style.display = "none", document.body.appendChild(i), i.style.color = t;
                const s = window.getComputedStyle(i).color; return document.body.removeChild(i), s
            }(t), e = s.match(/^rgba?\s*\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d*\.?\d+))?\)$/);
            if (!e) { if (this.Y.length) for (const i of this.Y) { const s = i(t); if (s) return this.q.set(t, s), s } throw new Error(`Failed to parse color: ${t}`) } const h = [parseInt(e[1], 10), parseInt(e[2], 10), parseInt(e[3], 10), e[4] ? parseFloat(e[4]) : 1]; return this.q.set(t, h), h
        }
    }
    class R { constructor() { this.it = [] } st(t) { this.it = t } nt(t, i, s) { this.it.forEach((e => { e.nt(t, i, s) })) } }
    class P { nt(t, i, s) { t.useBitmapCoordinateSpace((t => this.et(t, i, s))) } } class Y extends P {
        constructor() { super(...arguments), this.rt = null }
        ht(t) { this.rt = t } et({ context: t, horizontalPixelRatio: i, verticalPixelRatio: s }) {
            if (null === this.rt || null === this.rt.lt) return;
            const e = this.rt.lt, h = this.rt, n = Math.max(1, Math.floor(i)) % 2 / 2, r = r => {
                t.beginPath();
                for (let o = e.to - 1; o >= e.from; --o) { const e = h.ot[o], l = Math.round(e._t * i) + n, a = e.ut * s, u = r * s + n; t.moveTo(l, a), t.arc(l, a, u, 0, 2 * Math.PI) } t.fill()
            }; h.ct > 0 && (t.fillStyle = h.dt, r(h.ft + h.ct)), t.fillStyle = h.vt, r(h.ft)
        }
    }
    function N() { return { ot: [{ _t: 0, ut: 0, wt: 0, gt: 0 }], vt: "", dt: "", ft: 0, ct: 0, lt: null } } const z = { from: 0, to: 1 }; class E {
        constructor(t, i, s) { this.Mt = new R, this.bt = [], this.xt = [], this.St = !0, this.O = t, this.Ct = i, this.yt = s, this.Mt.st(this.bt) }
        Pt(t) { this.kt(), this.St = !0 }
        Tt() { return this.St && (this.Rt(), this.St = !1), this.Mt }
        kt() { const t = this.yt.Dt(); t.length !== this.bt.length && (this.xt = t.map(N), this.bt = this.xt.map((t => { const i = new Y; return i.ht(t), i })), this.Mt.st(this.bt)) }
        Rt() { const t = 2 === this.Ct.N().mode || !this.Ct.Vt(), i = this.yt.It(), s = this.Ct.Bt(), e = this.O.At(); this.kt(), i.forEach(((i, h) => { const n = this.xt[h], r = i.Et(s), o = i.zt(); !t && null !== r && i.Vt() && null !== o ? (n.vt = r.Lt, n.ft = r.ft, n.ct = r.Ot, n.ot[0].gt = r.gt, n.ot[0].ut = i.Wt().Nt(r.gt, o.Ft), n.dt = r.Ht ?? this.O.Ut(n.ot[0].ut / i.Wt().$t()), n.ot[0].wt = s, n.ot[0]._t = e.qt(s), n.lt = z) : n.lt = null })) }
    }
    class V extends P {
        constructor(t) { super(), this.Yt = t }
        et({ context: t, bitmapSize: i, horizontalPixelRatio: s, verticalPixelRatio: e }) {
            if (null === this.Yt) return; const h = this.Yt.jt.Vt, n = this.Yt.Kt.Vt; if (!h && !n) return;
            const r = Math.round(this.Yt._t * s), a = Math.round(this.Yt.ut * e); t.lineCap = "butt", h && r >= 0 && (t.lineWidth = Math.floor(this.Yt.jt.ct * s), t.strokeStyle = this.Yt.jt.R, t.fillStyle = this.Yt.jt.R, o(t, this.Yt.jt.Xt), function (t, i, s, e) { t.beginPath(); const h = t.lineWidth % 2 ? .5 : 0; t.moveTo(i + h, s), t.lineTo(i + h, e), t.stroke() }(t, r, 0, i.height)), n && a >= 0 && (t.lineWidth = Math.floor(this.Yt.Kt.ct * e), t.strokeStyle = this.Yt.Kt.R, t.fillStyle = this.Yt.Kt.R, o(t, this.Yt.Kt.Xt), l(t, a, 0, i.width))
        }
    }
    class F {
        constructor(t, i) { this.St = !0, this.Zt = { jt: { ct: 1, Xt: 0, R: "", Vt: !1 }, Kt: { ct: 1, Xt: 0, R: "", Vt: !1 }, _t: 0, ut: 0 }, this.Gt = new V(this.Zt), this.Jt = t, this.yt = i }
        Pt() { this.St = !0 } Tt(t) { return this.St && (this.Rt(), this.St = !1), this.Gt }
        Rt() { const t = this.Jt.Vt(), i = this.yt.Qt().N().crosshair, s = this.Zt; if (2 === i.mode) return s.Kt.Vt = !1, void (s.jt.Vt = !1); s.Kt.Vt = t && this.Jt.ti(this.yt), s.jt.Vt = t && this.Jt.ii(), s.Kt.ct = i.horzLine.width, s.Kt.Xt = i.horzLine.style, s.Kt.R = i.horzLine.color, s.jt.ct = i.vertLine.width, s.jt.Xt = i.vertLine.style, s.jt.R = i.vertLine.color, s._t = this.Jt.si(), s.ut = this.Jt.ni() }
    }
    function B(t, i, s, e, h, n) { t.fillRect(i + n, s, e - 2 * n, n), t.fillRect(i + n, s + h - n, e - 2 * n, n), t.fillRect(i, s, n, h), t.fillRect(i + e - n, s, n, h) } function A(t, i, s, e, h, n) { t.save(), t.globalCompositeOperation = "copy", t.fillStyle = n, t.fillRect(i, s, e, h), t.restore() }
    function L(t, i, s, e, h, n) { t.beginPath(), t.roundRect ? t.roundRect(i, s, e, h, n) : (t.lineTo(i + e - n[1], s), 0 !== n[1] && t.arcTo(i + e, s, i + e, s + n[1], n[1]), t.lineTo(i + e, s + h - n[2]), 0 !== n[2] && t.arcTo(i + e, s + h, i + e - n[2], s + h, n[2]), t.lineTo(i + n[3], s + h), 0 !== n[3] && t.arcTo(i, s + h, i, s + h - n[3], n[3]), t.lineTo(i, s + n[0]), 0 !== n[0] && t.arcTo(i, s, i + n[0], s, n[0])) }
    function W(t, i, s, e, h, n, r = 0, o = [0, 0, 0, 0], l = "") {
        if (t.save(), !r || !l || l === n) return L(t, i, s, e, h, o), t.fillStyle = n, t.fill(), void t.restore();
        const a = r / 2; var u; L(t, i + a, s + a, e - r, h - r, (u = -a, o.map((t => 0 === t ? t : t + u)))), "transparent" !== n && (t.fillStyle = n, t.fill()), "transparent" !== l && (t.lineWidth = r, t.strokeStyle = l, t.closePath(), t.stroke()), t.restore()
    }
    function O(t, i, s, e, h, n, r) { t.save(), t.globalCompositeOperation = "copy"; const o = t.createLinearGradient(0, 0, 0, h); o.addColorStop(0, n), o.addColorStop(1, r), t.fillStyle = o, t.fillRect(i, s, e, h), t.restore() }
    class D {
        constructor(t, i) { this.ht(t, i) } ht(t, i) { this.Yt = t, this.ei = i } $t(t, i) { return this.Yt.Vt ? t.P + t.A + t.V : 0 }
        nt(t, i, s, e) {
            if (!this.Yt.Vt || 0 === this.Yt.ri.length) return; const h = this.Yt.R, n = this.ei.Z, r = t.useBitmapCoordinateSpace((t => { const r = t.context; r.font = i.k; const o = this.hi(t, i, s, e), l = o.ai; return o.li ? W(r, l.oi, l._i, l.ui, l.ci, n, l.di, [l.ft, 0, 0, l.ft], n) : W(r, l.fi, l._i, l.ui, l.ci, n, l.di, [0, l.ft, l.ft, 0], n), this.Yt.pi && (r.fillStyle = h, r.fillRect(l.fi, l.mi, l.wi - l.fi, l.gi)), this.Yt.Mi && (r.fillStyle = i.D, r.fillRect(o.li ? l.bi - l.di : 0, l._i, l.di, l.xi - l._i)), o }));
            t.useMediaCoordinateSpace((({ context: t }) => {
                const s = r.Si; t.font = i.k, t.textAlign = r.li ? "right" : "left", t.textBaseline = "middle", t.fillStyle = h, t.fillText(this.Yt.ri, s.Ci, (s._i + s.xi) / 2 + s.yi)
            }))
        }
        hi(t, i, s, e) {
            const {
                context: h, bitmapSize: n, mediaSize: r, horizontalPixelRatio: o, verticalPixelRatio: l
            } = t, a = this.Yt.pi || !this.Yt.Pi ? i.C : 0, u = this.Yt.ki ? i.S : 0, c = i.A + this.ei.Ti, d = i.V + this.ei.Ri, f = i.I, p = i.B, m = this.Yt.ri, g = i.P, w = s.Di(h, m), v = Math.ceil(s.Vi(h, m)), M = g + c + d, b = i.S + f + p + v + a, y = Math.max(1, Math.floor(l));
            let S = Math.round(M * l); S % 2 != y % 2 && (S += 1); const x = u > 0 ? Math.max(1, Math.floor(u * o)) : 0, _ = Math.round(b * o), C = Math.round(a * o), T = this.ei.Ii ?? this.ei.Bi, k = Math.round(T * l) - Math.floor(.5 * l), R = Math.floor(k + y / 2 - S / 2), P = R + S, Y = "right" === e, N = Y ? r.width - u : u, z = Y ? n.width - x : x; let E, V, F; return Y ? (E = z - _, V = z - C, F = N - a - f - u) : (E = z + _, V = z + C, F = N + a + f), { li: Y, ai: { _i: R, mi: k, xi: P, ui: _, ci: S, ft: 2 * o, di: x, oi: E, fi: z, wi: V, gi: y, bi: n.width }, Si: { _i: R / l, xi: P / l, Ci: F, yi: w } }
        }
    }
    class $ {
        constructor(t) { this.Ai = { Bi: 0, Z: "#000", Ri: 0, Ti: 0 }, this.Ei = { ri: "", Vt: !1, pi: !0, Pi: !1, Ht: "", R: "#FFF", Mi: !1, ki: !1 }, this.zi = { ri: "", Vt: !1, pi: !1, Pi: !0, Ht: "", R: "#FFF", Mi: !0, ki: !0 }, this.St = !0, this.Li = new (t || D)(this.Ei, this.Ai), this.Oi = new (t || D)(this.zi, this.Ai) }
        ri() { return this.Ni(), this.Ei.ri }
        Bi() { return this.Ni(), this.Ai.Bi }
        Pt() { this.St = !0 } $t(t, i = !1) { return Math.max(this.Li.$t(t, i), this.Oi.$t(t, i)) }
        Wi() { return this.Ai.Ii || 0 }
        Fi(t) { this.Ai.Ii = t }
        Hi() { return this.Ni(), this.Ei.Vt || this.zi.Vt }
        Ui() { return this.Ni(), this.Ei.Vt }
        Tt(t) { return this.Ni(), this.Ei.pi = this.Ei.pi && t.N().ticksVisible, this.zi.pi = this.zi.pi && t.N().ticksVisible, this.Li.ht(this.Ei, this.Ai), this.Oi.ht(this.zi, this.Ai), this.Li }
        $i() { return this.Ni(), this.Li.ht(this.Ei, this.Ai), this.Oi.ht(this.zi, this.Ai), this.Oi }
        Ni() { this.St && (this.Ei.pi = !0, this.zi.pi = !1, this.qi(this.Ei, this.zi, this.Ai)) }
    }
    class I extends $ {
        constructor(t, i, s) {
            super(), this.Jt = t, this.Yi = i, this.ji = s
        }
        qi(t, i, s) {
            if (t.Vt = !1, 2 === this.Jt.N().mode) return; const e = this.Jt.N().horzLine; if (!e.labelVisible) return;
            const h = this.Yi.zt(); if (!this.Jt.Vt() || this.Yi.Ki() || null === h) return;
            const n = this.Yi.Xi().X(e.labelBackgroundColor); s.Z = n.Z, t.R = n.G; const r = 2 / 12 * this.Yi.P(); s.Ti = r, s.Ri = r;
            const o = this.ji(this.Yi); s.Bi = o.Bi, t.ri = this.Yi.Zi(o.gt, h), t.Vt = !0
        }
    } const Q = /[1-9]/g;
    class U {
        constructor() { this.Yt = null } ht(t) { this.Yt = t } nt(t, i) {
            if (null === this.Yt || !1 === this.Yt.Vt || 0 === this.Yt.ri.length) return;
            const s = t.useMediaCoordinateSpace((({ context: t }) => (t.font = i.k, Math.round(i.Gi.Vi(t, c(this.Yt).ri, Q))))); if (s <= 0) return; const e = i.Ji, h = s + 2 * e, n = h / 2, r = this.Yt.Qi; let o = this.Yt.Bi, l = Math.floor(o - n) + .5; l < 0 ? (o += Math.abs(0 - l), l = Math.floor(o - n) + .5) : l + h > r && (o -= Math.abs(r - (l + h)), l = Math.floor(o - n) + .5);
            const a = l + h, u = Math.ceil(0 + i.S + i.C + i.A + i.P + i.V); t.useBitmapCoordinateSpace((({ context: t, horizontalPixelRatio: s, verticalPixelRatio: e }) => {
                const h = c(this.Yt); t.fillStyle = h.Z;
                const n = Math.round(l * s), r = Math.round(0 * e), o = Math.round(a * s), d = Math.round(u * e), f = Math.round(2 * s); if (t.beginPath(), t.moveTo(n, r), t.lineTo(n, d - f), t.arcTo(n, d, n + f, d, f), t.lineTo(o - f, d), t.arcTo(o, d, o, d - f, f), t.lineTo(o, r), t.fill(), h.pi) {
                    const n = Math.round(h.Bi * s), o = r, l = Math.round((o + i.C) * e); t.fillStyle = h.R;
                    const a = Math.max(1, Math.floor(s)), u = Math.floor(.5 * s); t.fillRect(n - u, o, a, l - o)
                }
            })), t.useMediaCoordinateSpace((({ context: t }) => {
                const s = c(this.Yt), h = 0 + i.S + i.C + i.A + i.P / 2; t.font = i.k, t.textAlign = "left", t.textBaseline = "middle", t.fillStyle = s.R; const n = i.Gi.Di(t, "Apr0");
                t.translate(l + e, h + n), t.fillText(s.ri, 0, 0)
            }))
        }
    }
    class J {
        constructor(t, i, s) {
            this.St = !0, this.Gt = new U, this.Zt = { Vt: !1, Z: "#4c525e", R: "white", ri: "", Qi: 0, Bi: NaN, pi: !0 }, this.Ct = t, this.ts = i, this.ji = s
        }
        Pt() { this.St = !0 }
        Tt() { return this.St && (this.Rt(), this.St = !1), this.Gt.ht(this.Zt), this.Gt }
        Rt() {
            const t = this.Zt;
            if (t.Vt = !1, 2 === this.Ct.N().mode) return; const i = this.Ct.N().vertLine; if (!i.labelVisible) return;
            const s = this.ts.At();
            if (s.Ki()) return; t.Qi = s.Qi(); const e = this.ji(); if (null === e) return; t.Bi = e.Bi;
            const h = s.ss(this.Ct.Bt()); t.ri = s.ns(c(h)), t.Vt = !0; const n = this.ts.Xi().X(i.labelBackgroundColor); t.Z = n.Z, t.R = n.G, t.pi = s.N().ticksVisible
        }
    }
    class X {
        constructor() {
            this.es = null, this.rs = 0
        }
        hs() { return this.rs }
        ls(t) { this.rs = t }
        Wt() { return this.es }
        _s(t) { this.es = t }
        us(t) { return [] }
        cs() { return [] }
        Vt() { return !0 }
    } var G;
    !function (t) { t[t.Normal = 0] = "Normal", t[t.Magnet = 1] = "Magnet", t[t.Hidden = 2] = "Hidden", t[t.MagnetOHLC = 3] = "MagnetOHLC" }(G || (G = {}));
    class H extends X {
        constructor(t, i) {
            super(), this.yt = null, this.ds = NaN, this.fs = 0, this.ps = !1, this.vs = new Map, this.ws = !1, this.gs = new WeakMap, this.Ms = new WeakMap, this.bs = NaN, this.xs = NaN, this.Ss = NaN, this.Cs = NaN, this.ts = t, this.ys = i; this.Ps = ((t, i) => s => { const e = i(), h = t(); if (s === c(this.yt).ks()) return { gt: h, Bi: e }; { const t = c(s.zt()); return { gt: s.Ts(e, t), Bi: e } } })((() => this.ds), (() => this.xs)); const s = ((t, i) => () => { const s = this.ts.At().Rs(t()), e = i(); return s && Number.isFinite(e) ? { wt: s, Bi: e } : null })((() => this.fs), (() => this.si())); this.Ds = new J(this, t, s)
        }
        N() { return this.ys }
        Vs(t, i) { this.Ss = t, this.Cs = i } Is() { this.Ss = NaN, this.Cs = NaN }
        Bs() { return this.Ss }
        As() { return this.Cs }
        Es(t, i, s) { this.ws || (this.ws = !0), this.ps = !0, this.zs(t, i, s) } Bt() { return this.fs }
        si() { return this.bs }
        ni() { return this.xs }
        Vt() { return this.ps }
        Ls() { this.ps = !1, this.Os(), this.ds = NaN, this.bs = NaN, this.xs = NaN, this.yt = null, this.Is(), this.Ns() }
        Ws(t) { let i = this.gs.get(t); i || (i = new F(this, t), this.gs.set(t, i)); let s = this.Ms.get(t); return s || (s = new E(this.ts, this, t), this.Ms.set(t, s)), [i, s] }
        ti(t) { return t === this.yt && this.ys.horzLine.visible } ii() { return this.ys.vertLine.visible }
        Fs(t, i) { this.ps && this.yt === t || this.vs.clear(); const s = []; return this.yt === t && s.push(this.Hs(this.vs, i, this.Ps)), s }
        cs() { return this.ps ? [this.Ds] : [] } Us() { return this.yt }
        Ns() { this.ts.$s().forEach((t => { this.gs.get(t)?.Pt(), this.Ms.get(t)?.Pt() })), this.vs.forEach((t => t.Pt())), this.Ds.Pt() }
        qs(t) { return t && !t.ks().Ki() ? t.ks() : null }
        zs(t, i, s) { this.Ys(t, i, s) && this.Ns() }
        Ys(t, i, s) { const e = this.bs, h = this.xs, n = this.ds, r = this.fs, o = this.yt, l = this.qs(s); this.fs = t, this.bs = isNaN(t) ? NaN : this.ts.At().qt(t), this.yt = s; const a = null !== l ? l.zt() : null; return null !== l && null !== a ? (this.ds = i, this.xs = l.Nt(i, a)) : (this.ds = NaN, this.xs = NaN), e !== this.bs || h !== this.xs || r !== this.fs || n !== this.ds || o !== this.yt }
        Os() { const t = this.ts.js().map((t => t.Xs().Ks())).filter(b), i = 0 === t.length ? null : Math.max(...t); this.fs = null !== i ? i : NaN }
        Hs(t, i, s) { let e = t.get(i); return void 0 === e && (e = new I(this, i, s), t.set(i, e)), e }
    } function Z(t) { return "left" === t || "right" === t }
    class K {
        constructor(t) { this.Zs = new Map, this.Gs = [], this.Js = t }
        Qs(t, i) {
            const s = function (t, i) { return void 0 === t ? i : { tn: Math.max(t.tn, i.tn), sn: t.sn || i.sn } }(this.Zs.get(t), i); this.Zs.set(t, s)
        }
        nn() { return this.Js }
        en(t) { const i = this.Zs.get(t); return void 0 === i ? { tn: this.Js } : { tn: Math.max(this.Js, i.tn), sn: i.sn } }
        rn() { this.hn(), this.Gs = [{ an: 0 }] }
        ln(t) { this.hn(), this.Gs = [{ an: 1, Ft: t }] }
        _n(t) { this.un(), this.Gs.push({ an: 5, Ft: t }) }
        hn() { this.un(), this.Gs.push({ an: 6 }) } cn() { this.hn(), this.Gs = [{ an: 4 }] }
        dn(t) { this.hn(), this.Gs.push({ an: 2, Ft: t }) }
        fn(t) { this.hn(), this.Gs.push({ an: 3, Ft: t }) }
        pn() { return this.Gs }
        vn(t) { for (const i of t.Gs) this.mn(i); this.Js = Math.max(this.Js, t.Js), t.Zs.forEach(((t, i) => { this.Qs(i, t) })) }
        static wn() { return new K(2) }
        static gn() { return new K(3) }
        mn(t) { switch (t.an) { case 0: this.rn(); break; case 1: this.ln(t.Ft); break; case 2: this.dn(t.Ft); break; case 3: this.fn(t.Ft); break; case 4: this.cn(); break; case 5: this._n(t.Ft); break; case 6: this.un() } }
        un() { const t = this.Gs.findIndex((t => 5 === t.an)); -1 !== t && this.Gs.splice(t, 1) }
    } const q = "."; function j(t, i) { if (!m(t)) return "n/a"; if (!g(i)) throw new TypeError("invalid length"); if (i < 0 || i > 16) throw new TypeError("invalid length"); if (0 === i) return t.toString(); return ("0000000000000000" + t.toString()).slice(-i) }
    class tt {
        constructor(t, i) { if (i || (i = 1), m(t) && g(t) || (t = 100), t < 0) throw new TypeError("invalid base"); this.Yi = t, this.Mn = i, this.bn() }
        format(t) { const i = t < 0 ? "−" : ""; return t = Math.abs(t), i + this.xn(t) }
        bn() { if (this.Sn = 0, this.Yi > 0 && this.Mn > 0) { let t = this.Yi; for (; t > 1;)t /= 10, this.Sn++ } }
        xn(t) {
            const i = this.Yi / this.Mn; let s = Math.floor(t), e = ""; const h = void 0 !== this.Sn ? this.Sn : NaN;
            if (i > 1) {
                let n = +(Math.round(t * i) - s * i).toFixed(this.Sn); n >= i && (n -= i, s += 1), e = q + j(+n.toFixed(this.Sn) * this.Mn, h)
            } else s = Math.round(s * i) / i, h > 0 && (e = q + j(0, h)); return s.toFixed(0) + e
        }
    }
    class it extends tt {
        constructor(t = 100) { super(t) }
        format(t) { return `${super.format(t)}%` }
    }
    class st {
        constructor(t) { this.Cn = t }
        format(t) { let i = ""; return t < 0 && (i = "-", t = -t), t < 995 ? i + this.yn(t) : t < 999995 ? i + this.yn(t / 1e3) + "K" : t < 999999995 ? (t = 1e3 * Math.round(t / 1e3), i + this.yn(t / 1e6) + "M") : (t = 1e6 * Math.round(t / 1e6), i + this.yn(t / 1e9) + "B") }
        yn(t) { let i; const s = Math.pow(10, this.Cn); return i = (t = Math.round(t * s) / s) >= 1e-15 && t < 1 ? t.toFixed(this.Cn).replace(/\.?0+$/, "") : String(t), i.replace(/(\.[1-9]*)0+$/, ((t, i) => i)) }
    } const et = /[2-9]/g;
    class ht {
        constructor(t = 50) { this.Pn = 0, this.kn = 1, this.Tn = 1, this.Rn = {}, this.Dn = new Map, this.Vn = t }
        In() { this.Pn = 0, this.Dn.clear(), this.kn = 1, this.Tn = 1, this.Rn = {} }
        Vi(t, i, s) { return this.Bn(t, i, s).width }
        Di(t, i, s) { const e = this.Bn(t, i, s); return ((e.actualBoundingBoxAscent || 0) - (e.actualBoundingBoxDescent || 0)) / 2 }
        Bn(t, i, s) {
            const e = s || et, h = String(i).replace(e, "0");
            if (this.Dn.has(h)) return u(this.Dn.get(h)).An;
            if (this.Pn === this.Vn) {
                const t = this.Rn[this.Tn]; delete this.Rn[this.Tn], this.Dn.delete(t), this.Tn++, this.Pn--
            }
            t.save(), t.textBaseline = "middle"; const n = t.measureText(h); return t.restore(), 0 === n.width && i.length || (this.Dn.set(h, { An: n, En: this.kn }), this.Rn[this.kn] = h, this.Pn++, this.kn++), n
        }
    }
    class nt {
        constructor(t) { this.zn = null, this.M = null, this.Ln = "right", this.On = t }
        Nn(t, i, s) { this.zn = t, this.M = i, this.Ln = s }
        nt(t) { null !== this.M && null !== this.zn && this.zn.nt(t, this.M, this.On, this.Ln) }
    }
    class rt {
        constructor(t, i, s) { this.Wn = t, this.On = new ht(50), this.Fn = i, this.O = s, this.W = -1, this.Gt = new nt(this.On) }
        Tt() {
            const t = this.O.Hn(this.Fn); if (null === t) return null; const i = t.Un(this.Fn) ? t.$n() : this.Fn.Wt(); if (null === i) return null; const s = t.qn(i);
            if ("overlay" === s) return null; const e = this.O.Yn(); return e.P !== this.W && (this.W = e.P, this.On.In()), this.Gt.Nn(this.Wn.$i(), e, s), this.Gt
        }
    }
    class ot extends P {
        constructor() { super(...arguments), this.Yt = null }
        ht(t) { this.Yt = t }
        jn(t, i) { if (!this.Yt?.Vt) return null; const { ut: s, ct: e, Kn: h } = this.Yt; return i >= s - e - 7 && i <= s + e + 7 ? { Xn: this.Yt, Kn: h } : null }
        et({ context: t, bitmapSize: i, horizontalPixelRatio: s, verticalPixelRatio: e }) {
            if (null === this.Yt) return; if (!1 === this.Yt.Vt) return;
            const h = Math.round(this.Yt.ut * e); h < 0 || h > i.height || (t.lineCap = "butt", t.strokeStyle = this.Yt.R, t.lineWidth = Math.floor(this.Yt.ct * s), o(t, this.Yt.Xt), l(t, h, 0, i.width))
        }
    }
    class lt {
        constructor(t) {
            this.Zn = { ut: 0, R: "rgba(0, 0, 0, 0)", ct: 1, Xt: 0, Vt: !1 }, this.Gn = new ot, this.St = !0, this.Jn = t, this.Qn = t.Qt(), this.Gn.ht(this.Zn)
        }
        Pt() { this.St = !0 }
        Tt() { return this.Jn.Vt() ? (this.St && (this.te(), this.St = !1), this.Gn) : null }
    }
    class at extends lt {
        constructor(t) { super(t) }
        te() { this.Zn.Vt = !1; const t = this.Jn.Wt(), i = t.ie().ie; if (2 !== i && 3 !== i) return; const s = this.Jn.N(); if (!s.baseLineVisible || !this.Jn.Vt()) return; const e = this.Jn.zt(); null !== e && (this.Zn.Vt = !0, this.Zn.ut = t.Nt(e.Ft, e.Ft), this.Zn.R = s.baseLineColor, this.Zn.ct = s.baseLineWidth, this.Zn.Xt = s.baseLineStyle) }
    }
    class ut extends P {
        constructor() { super(...arguments), this.Yt = null }
        ht(t) { this.Yt = t }
        se() { return this.Yt }
        et({ context: t, horizontalPixelRatio: i, verticalPixelRatio: s }) {
            const e = this.Yt; if (null === e) return;
            const h = Math.max(1, Math.floor(i)), n = h % 2 / 2, r = Math.round(e.ne.x * i) + n, o = e.ne.y * s; t.fillStyle = e.ee, t.beginPath();
            const l = Math.max(2, 1.5 * e.re) * i; t.arc(r, o, l, 0, 2 * Math.PI, !1), t.fill(), t.fillStyle = e.he, t.beginPath(), t.arc(r, o, e.ft * i, 0, 2 * Math.PI, !1), t.fill(), t.lineWidth = h, t.strokeStyle = e.ae, t.beginPath(), t.arc(r, o, e.ft * i + h / 2, 0, 2 * Math.PI, !1), t.stroke()
        }
    }
    const ct = [{ le: 0, oe: .25, _e: 4, ue: 10, ce: .25, de: 0, fe: .4, pe: .8 }, { le: .25, oe: .525, _e: 10, ue: 14, ce: 0, de: 0, fe: .8, pe: 0 }, { le: .525, oe: 1, _e: 14, ue: 14, ce: 0, de: 0, fe: 0, pe: 0 }];
    class dt {
        constructor(t) { this.Gt = new ut, this.St = !0, this.ve = !0, this.me = performance.now(), this.we = this.me - 1, this.ge = t }
        Me() { this.we = this.me - 1, this.Pt() }
        be() {
            if (this.Pt(), 2 === this.ge.N().lastPriceAnimation) {
                const t = performance.now(), i = this.we - t; if (i > 0) return void (i < 650 && (this.we += 2600)); this.me = t, this.we = t + 2600
            }
        }
        Pt() { this.St = !0 } xe() { this.ve = !0 }
        Vt() { return 0 !== this.ge.N().lastPriceAnimation }
        Se() { switch (this.ge.N().lastPriceAnimation) { case 0: return !1; case 1: return !0; case 2: return performance.now() <= this.we } }
        Tt() { return this.St ? (this.Rt(), this.St = !1, this.ve = !1) : this.ve && (this.Ce(), this.ve = !1), this.Gt }
        Rt() {
            this.Gt.ht(null); const t = this.ge.Qt().At(), i = t.ye(), s = this.ge.zt(); if (null === i || null === s) return; const e = this.ge.Pe(!0); if (e.ke || !i.Te(e.Re)) return;
            const h = { x: t.qt(e.Re), y: this.ge.Wt().Nt(e.gt, s.Ft) }, n = e.R, r = this.ge.N().lineWidth, o = this.De(this.Ve(), n); this.Gt.ht({ ee: n, re: r, he: o.he, ae: o.ae, ft: o.ft, ne: h })
        }
        Ce() {
            const t = this.Gt.se(); if (null !== t) {
                const i = this.De(this.Ve(), t.ee); t.he = i.he, t.ae = i.ae, t.ft = i.ft
            }
        }
        Ve() { return this.Se() ? performance.now() - this.me : 2599 }
        Ie(t, i, s, e) { const h = s + (e - s) * i; return this.ge.Qt().Xi().j(t, h) }
        De(t, i) {
            const s = t % 2600 / 2600; let e; for (const t of ct) if (s >= t.le && s <= t.oe) { e = t; break } a(void 0 !== e, "Last price animation internal logic error");
            const h = (s - e.le) / (e.oe - e.le); return { he: this.Ie(i, h, e.ce, e.de), ae: this.Ie(i, h, e.fe, e.pe), ft: (n = h, r = e._e, o = e.ue, r + (o - r) * n) }; var n, r, o
        }
    }
    class ft extends lt {
        constructor(t) { super(t) }
        te() {
            const t = this.Zn; t.Vt = !1; const i = this.Jn.N(); if (!i.priceLineVisible || !this.Jn.Vt()) return;
            const s = this.Jn.Pe(0 === i.priceLineSource); s.ke || (t.Vt = !0, t.ut = s.Bi, t.R = this.Jn.Be(s.R), t.ct = i.priceLineWidth, t.Xt = i.priceLineStyle)
        }
    }
    class pt extends $ {
        constructor(t) { super(), this.Jt = t }
        qi(t, i, s) {
            t.Vt = !1, i.Vt = !1; const e = this.Jt; if (!e.Vt()) return; const h = e.N(), n = h.lastValueVisible, r = "" !== e.Ae(), o = 0 === h.seriesLastValueMode, l = e.Pe(!1); if (l.ke) return; n && (t.ri = this.Ee(l, n, o), t.Vt = 0 !== t.ri.length), (r || o) && (i.ri = this.ze(l, n, r, o), i.Vt = i.ri.length > 0);
            const a = e.Be(l.R), u = this.Jt.Qt().Xi().X(a); s.Z = u.Z, s.Bi = l.Bi, i.Ht = e.Qt().Ut(l.Bi / e.Wt().$t()), t.Ht = a, t.R = u.G, i.R = u.G
        }
        ze(t, i, s, e) { let h = ""; const n = this.Jt.Ae(); return s && 0 !== n.length && (h += `${n} `), i && e && (h += this.Jt.Wt().Le() ? t.Oe : t.Ne), h.trim() }
        Ee(t, i, s) { return i ? s ? this.Jt.Wt().Le() ? t.Ne : t.Oe : t.ri : "" }
    } function mt(t, i, s, e) { const h = Number.isFinite(i), n = Number.isFinite(s); return h && n ? t(i, s) : h || n ? h ? i : s : e } class gt {
        constructor(t, i) { this.We = t, this.Fe = i }
        He(t) { return null !== t && (this.We === t.We && this.Fe === t.Fe) }
        Ue() { return new gt(this.We, this.Fe) }
        $e() { return this.We } qe() { return this.Fe }
        Ye() { return this.Fe - this.We }
        Ki() { return this.Fe === this.We || Number.isNaN(this.Fe) || Number.isNaN(this.We) }
        vn(t) { return null === t ? this : new gt(mt(Math.min, this.$e(), t.$e(), -1 / 0), mt(Math.max, this.qe(), t.qe(), 1 / 0)) }
        je(t) { if (!m(t)) return; if (0 === this.Fe - this.We) return; const i = .5 * (this.Fe + this.We); let s = this.Fe - i, e = this.We - i; s *= t, e *= t, this.Fe = i + s, this.We = i + e }
        Ke(t) { m(t) && (this.Fe += t, this.We += t) }
        Xe() { return { minValue: this.We, maxValue: this.Fe } }
        static Ze(t) { return null === t ? null : new gt(t.minValue, t.maxValue) }
    }
    class wt {
        c
        onstructor(t, i) { this.Ge = t, this.Je = i || null }
        Qe() { return this.Ge }
        tr() { return this.Je }
        Xe() { return { priceRange: null === this.Ge ? null : this.Ge.Xe(), margins: this.Je || void 0 } }
        static Ze(t) { return null === t ? null : new wt(gt.Ze(t.priceRange), t.margins) }
    }
    class vt extends lt {
        constructor(t, i) { super(t), this.ir = i }
        te() { const t = this.Zn; t.Vt = !1; const i = this.ir.N(); if (!this.Jn.Vt() || !i.lineVisible) return; const s = this.ir.sr(); null !== s && (t.Vt = !0, t.ut = s, t.R = i.color, t.ct = i.lineWidth, t.Xt = i.lineStyle, t.Kn = this.ir.N().id) }
    }
    class Mt extends $ {
        constructor(t, i) { super(), this.ge = t, this.ir = i }
        qi(t, i, s) { t.Vt = !1, i.Vt = !1; const e = this.ir.N(), h = e.axisLabelVisible, n = "" !== e.title, r = this.ge; if (!h || !r.Vt()) return; const o = this.ir.sr(); if (null === o) return; n && (i.ri = e.title, i.Vt = !0), i.Ht = r.Qt().Ut(o / r.Wt().$t()), t.ri = this.nr(e.price), t.Vt = !0; const l = this.ge.Qt().Xi().X(e.axisLabelColor || e.color); s.Z = l.Z; const a = e.axisLabelTextColor || l.G; t.R = a, i.R = a, s.Bi = o }
        nr(t) { const i = this.ge.zt(); return null === i ? "" : this.ge.Wt().Zi(t, i.Ft) }
    }
    class bt {
        constructor(t, i) { this.ge = t, this.ys = i, this.er = new vt(t, this), this.Wn = new Mt(t, this), this.rr = new rt(this.Wn, t, t.Qt()) }
        hr(t) { p(this.ys, t), this.Pt(), this.ge.Qt().ar() }
        N() { return this.ys }
        lr() { return this.er }
        _r() { return this.rr }
        ur() { return this.Wn }
        Pt() { this.er.Pt(), this.Wn.Pt() }
        sr() { const t = this.ge, i = t.Wt(); if (t.Qt().At().Ki() || i.Ki()) return null; const s = t.zt(); return null === s ? null : i.Nt(this.ys.price, s.Ft) }
    }
    class yt extends X {
        onstructor(t) { super(), this.ts = t } Qt() { return this.ts }
    } const St = { Bar: (t, i, s, e) => { const h = i.upColor, n = i.downColor, r = c(t(s, e)), o = d(r.Ft[0]) <= d(r.Ft[3]); return { cr: r.R ?? (o ? h : n) } }, Candlestick: (t, i, s, e) => { const h = i.upColor, n = i.downColor, r = i.borderUpColor, o = i.borderDownColor, l = i.wickUpColor, a = i.wickDownColor, u = c(t(s, e)), f = d(u.Ft[0]) <= d(u.Ft[3]); return { cr: u.R ?? (f ? h : n), dr: u.Ht ?? (f ? r : o), pr: u.vr ?? (f ? l : a) } }, Custom: (t, i, s, e) => ({ cr: c(t(s, e)).R ?? i.color }), Area: (t, i, s, e) => { const h = c(t(s, e)); return { cr: h.vt ?? i.lineColor, vt: h.vt ?? i.lineColor, mr: h.mr ?? i.topColor, wr: h.wr ?? i.bottomColor } }, Baseline: (t, i, s, e) => { const h = c(t(s, e)); return { cr: h.Ft[3] >= i.baseValue.price ? i.topLineColor : i.bottomLineColor, gr: h.gr ?? i.topLineColor, Mr: h.Mr ?? i.bottomLineColor, br: h.br ?? i.topFillColor1, Sr: h.Sr ?? i.topFillColor2, Cr: h.Cr ?? i.bottomFillColor1, yr: h.yr ?? i.bottomFillColor2 } }, Line: (t, i, s, e) => { const h = c(t(s, e)); return { cr: h.R ?? i.color, vt: h.R ?? i.color } }, Histogram: (t, i, s, e) => ({ cr: c(t(s, e)).R ?? i.color }) };
    class xt {
        constructor(t) { this.Pr = (t, i) => void 0 !== i ? i.Ft : this.ge.Xs().kr(t), this.ge = t, this.Tr = St[t.Rr()] } Dr(t, i) { return this.Tr(this.Pr, this.ge.N(), t, i) }
    } function _t(t, i, s, e, h = 0, n = i.length) { let r = n - h; for (; 0 < r;) { const n = r >> 1, o = h + n; e(i[o], s) === t ? (h = o + 1, r -= n + 1) : r = n } return h } const Ct = _t.bind(null, !0), Tt = _t.bind(null, !1); var kt; !function (t) { t[t.NearestLeft = -1] = "NearestLeft", t[t.None = 0] = "None", t[t.NearestRight = 1] = "NearestRight" }(kt || (kt = {})); const Rt = 30;
    class Pt {
        constructor() { this.Vr = [], this.Ir = new Map, this.Br = new Map, this.Ar = [] }
        Er() { return this.zr() > 0 ? this.Vr[this.Vr.length - 1] : null }
        Lr() { return this.zr() > 0 ? this.Or(0) : null }
        Ks() { return this.zr() > 0 ? this.Or(this.Vr.length - 1) : null }
        zr() { return this.Vr.length }
        Ki() { return 0 === this.zr() }
        Te(t) { return null !== this.Nr(t, 0) }
        kr(t) { return this.Wr(t) }
        Wr(t, i = 0) { const s = this.Nr(t, i); return null === s ? null : { ...this.Fr(s), Re: this.Or(s) } }
        Hr() { return this.Vr }
        Ur(t, i, s) {
            if (this.Ki()) return null;
            let e = null; for (const h of s) { e = Yt(e, this.$r(t, i, h)) } return e
        }
        ht(t) { this.Br.clear(), this.Ir.clear(), this.Vr = t, this.Ar = t.map((t => t.Re)) }
        qr() { return this.Ar }
        Or(t) { return this.Vr[t].Re }
        Fr(t) { return this.Vr[t] }
        Nr(t, i) { const s = this.Yr(t); if (null === s && 0 !== i) switch (i) { case -1: return this.jr(t); case 1: return this.Kr(t); default: throw new TypeError("Unknown search mode") }return s }
        jr(t) { let i = this.Xr(t); return i > 0 && (i -= 1), i !== this.Vr.length && this.Or(i) < t ? i : null }
        Kr(t) { const i = this.Zr(t); return i !== this.Vr.length && t < this.Or(i) ? i : null }
        Yr(t) { const i = this.Xr(t); return i === this.Vr.length || t < this.Vr[i].Re ? null : i } Xr(t) { return Ct(this.Vr, t, ((t, i) => t.Re < i)) }
        Zr(t) { return Tt(this.Vr, t, ((t, i) => t.Re > i)) }
        Gr(t, i, s) {
            let e = null; for (let h = t; h < i; h++) {
                const t = this.Vr[h].Ft[s]; Number.isNaN(t) || (null === e ? e = { Jr: t, Qr: t } : (t < e.Jr && (e.Jr = t), t > e.Qr && (e.Qr = t)))
            } return e
        }
        $r(t, i, s) {
            if (this.Ki()) return null; let e = null;
            const h = c(this.Lr()), n = c(this.Ks()), r = Math.max(t, h), o = Math.min(i, n), l = Math.ceil(r / Rt) * Rt, a = Math.max(l, Math.floor(o / Rt) * Rt); { const t = this.Xr(r), h = this.Zr(Math.min(o, l, i)); e = Yt(e, this.Gr(t, h, s)) }
            let u = this.Ir.get(s); void 0 === u && (u = new Map, this.Ir.set(s, u)); for (let t = Math.max(l + 1, r); t < a; t += Rt) {
                const i = Math.floor(t / Rt); let h = u.get(i); if (void 0 === h) {
                    const t = this.Xr(i * Rt), e = this.Zr((i + 1) * Rt - 1);
                    h = this.Gr(t, e, s), u.set(i, h)
                } e = Yt(e, h)
            } {
                const t = this.Xr(a), i = this.Zr(o); e = Yt(e, this.Gr(t, i, s))
            }
            return e
        }
    } function Yt(t, i) { if (null === t) return i; if (null === i) return t; return { Jr: Math.min(t.Jr, i.Jr), Qr: Math.max(t.Qr, i.Qr) } }
    class Nt {
        constructor(t) { this.th = t }
        nt(t, i, s) { this.th.draw(t) } ih(t, i, s) { this.th.drawBackground?.(t) }
    }
    class zt {
        constructor(t) { this.Dn = null, this.sh = t }
        Tt() {
            const t = this.sh.renderer(); if (null === t) return null; if (this.Dn?.nh === t) return this.Dn.eh;
            const i = new Nt(t);
            return this.Dn = { nh: t, eh: i }, i
        }
        rh() { return this.sh.zOrder?.() ?? "normal" }
    }
    class Et {
        constructor(t) {
            this.hh = null, this.ah = t
        }
        oh() { return this.ah }
        Ns() { this.ah.updateAllViews?.() }
        Ws() {
            const t = this.ah.paneViews?.() ?? []; if (this.hh?.nh === t) return this.hh.eh;
            const i = t.map((t => new zt(t))); return this.hh = { nh: t, eh: i }, i
        }
        jn(t, i) { return this.ah.hitTest?.(t, i) ?? null }
    }
    let Vt = class extends Et { us() { return [] } };
    class Ft {
        constructor(t) { this.th = t }
        nt(t, i, s) { this.th.draw(t) }
        ih(t, i, s) { this.th.drawBackground?.(t) }
    }
    class Bt {
        constructor(t) { this.Dn = null, this.sh = t }
        Tt() { const t = this.sh.renderer(); if (null === t) return null; if (this.Dn?.nh === t) return this.Dn.eh; const i = new Ft(t); return this.Dn = { nh: t, eh: i }, i }
        rh() { return this.sh.zOrder?.() ?? "normal" }
    } function At(t) { return { ri: t.text(), Bi: t.coordinate(), Ii: t.fixedCoordinate?.(), R: t.textColor(), Z: t.backColor(), Vt: t.visible?.() ?? !0, pi: t.tickVisible?.() ?? !0 } } class Lt {
        constructor(t, i) { this.Gt = new U, this._h = t, this.uh = i }
        Tt() { return this.Gt.ht({ Qi: this.uh.Qi(), ...At(this._h) }), this.Gt }
    }
    class Wt extends $ {
        constructor(t, i) { super(), this._h = t, this.Yi = i } qi(t, i, s) { const e = At(this._h); s.Z = e.Z, t.R = e.R; const h = 2 / 12 * this.Yi.P(); s.Ti = h, s.Ri = h, s.Bi = e.Bi, s.Ii = e.Ii, t.ri = e.ri, t.Vt = e.Vt, t.pi = e.pi }
    }
    class Ot extends Et {
        constructor(t, i) { super(t), this.dh = null, this.fh = null, this.ph = null, this.mh = null, this.ge = i }
        cs() {
            const t = this.ah.timeAxisViews?.() ?? []; if (this.dh?.nh === t) return this.dh.eh; const i = this.ge.Qt().At(), s = t.map((t => new Lt(t, i)));
            return this.dh = { nh: t, eh: s }, s
        }
        Fs() { const t = this.ah.priceAxisViews?.() ?? []; if (this.fh?.nh === t) return this.fh.eh; const i = this.ge.Wt(), s = t.map((t => new Wt(t, i))); return this.fh = { nh: t, eh: s }, s }
        wh() {
            const t = this.ah.priceAxisPaneViews?.() ?? [];
            if (this.ph?.nh === t) return this.ph.eh; const i = t.map((t => new Bt(t))); return this.ph = { nh: t, eh: i }, i
        }
        gh() { const t = this.ah.timeAxisPaneViews?.() ?? []; if (this.mh?.nh === t) return this.mh.eh; const i = t.map((t => new Bt(t))); return this.mh = { nh: t, eh: i }, i }
        Mh(t, i) { return this.ah.autoscaleInfo?.(t, i) ?? null }
    } function Dt(t, i, s, e) { t.forEach((t => { i(t).forEach((t => { t.rh() === s && e.push(t) })) })) } function $t(t) { return t.Ws() } function It(t) { return t.wh() } function Qt(t) { return t.gh() } const Ut = ["Area", "Line", "Baseline"];
    class Jt extends yt {
        constructor(t, i, s, e, h) {
            super(t), this.Yt = new Pt, this.er = new ft(this), this.bh = [], this.xh = new at(this), this.Sh = null, this.Ch = null, this.yh = null, this.Ph = [], this.ys = s, this.kh = i; const n = new pt(this); this.vs = [n], this.rr = new rt(n, this, t), Ut.includes(this.kh) && (this.Sh = new dt(this)), this.Th(), this.sh = e(this, this.Qt(), h)
        }
        m() { null !== this.yh && clearTimeout(this.yh) } Be(t) { return this.ys.priceLineColor || t }
        Pe(t) {
            const i = { ke: !0 }, s = this.Wt(); if (this.Qt().At().Ki() || s.Ki() || this.Yt.Ki()) return i;
            const e = this.Qt().At().ye(), h = this.zt();
            if (null === e || null === h) return i; let n, r;
            if (t) { const t = this.Yt.Er(); if (null === t) return i; n = t, r = t.Re } else {
                const t = this.Yt.Wr(e.bi(), -1);
                if (null === t) return i;
                if (n = this.Yt.kr(t.Re), null === n) return i;
                r = t.Re
            }
            const o = n.Ft[3], l = this.Rh().Dr(r, { Ft: n }), a = s.Nt(o, h.Ft);
            return { ke: !1, gt: o, ri: s.Zi(o, h.Ft), Oe: s.Dh(o), Ne: s.Vh(o, h.Ft), R: l.cr, Bi: a, Re: r }
        }
        Rh() { return null !== this.Ch || (this.Ch = new xt(this)), this.Ch }
        N() { return this.ys }
        hr(t) { const i = t.priceScaleId; void 0 !== i && i !== this.ys.priceScaleId && this.Qt().Ih(this, i), p(this.ys, t), void 0 !== t.priceFormat && (this.Th(), this.Qt().Bh()), this.Qt().Ah(this), this.Qt().Eh(), this.sh.Pt("options") }
        ht(t, i) { this.Yt.ht(t), this.sh.Pt("data"), null !== this.Sh && (i && i.zh ? this.Sh.be() : 0 === t.length && this.Sh.Me()); const s = this.Qt().Hn(this); this.Qt().Lh(s), this.Qt().Ah(this), this.Qt().Eh(), this.Qt().ar() }
        Oh(t) { const i = new bt(this, t); return this.bh.push(i), this.Qt().Ah(this), i }
        Nh(t) { const i = this.bh.indexOf(t); -1 !== i && this.bh.splice(i, 1), this.Qt().Ah(this) }
        Wh() { return this.bh }
        Rr() { return this.kh }
        zt() { const t = this.Fh(); return null === t ? null : { Ft: t.Ft[3], Hh: t.wt } }
        Fh() {
            const t = this.Qt().At().ye();
            if (null === t) return null; const i = t.Uh(); return this.Yt.Wr(i, 1)
        }
        Xs() { return this.Yt }
        $h(t) { const i = this.Yt.kr(t); return null === i ? null : "Bar" === this.kh || "Candlestick" === this.kh || "Custom" === this.kh ? { qh: i.Ft[0], Yh: i.Ft[1], jh: i.Ft[2], Kh: i.Ft[3] } : i.Ft[3] }
        Xh(t) { const i = []; Dt(this.Ph, $t, "top", i); const s = this.Sh; return null !== s && s.Vt() ? (null === this.yh && s.Se() && (this.yh = setTimeout((() => { this.yh = null, this.Qt().Zh() }), 0)), s.xe(), i.unshift(s), i) : i }
        Ws() { const t = []; this.Gh() || t.push(this.xh), t.push(this.sh, this.er); const i = this.bh.map((t => t.lr())); return t.push(...i), Dt(this.Ph, $t, "normal", t), t }
        Jh() { return this.Qh($t, "bottom") }
        ta(t) { return this.Qh(It, t) }
        ia(t) { return this.Qh(Qt, t) }
        sa(t, i) { return this.Ph.map((s => s.jn(t, i))).filter((t => null !== t)) }
        us() { return [this.rr, ...this.bh.map((t => t._r()))] }
        Fs(t, i) { if (i !== this.es && !this.Gh()) return []; const s = [...this.vs]; for (const t of this.bh) s.push(t.ur()); return this.Ph.forEach((t => { s.push(...t.Fs()) })), s }
        cs() { const t = []; return this.Ph.forEach((i => { t.push(...i.cs()) })), t }
        Mh(t, i) {
            if (void 0 !== this.ys.autoscaleInfoProvider) {
                const s = this.ys.autoscaleInfoProvider((() => { const s = this.na(t, i); return null === s ? null : s.Xe() })); return wt.Ze(s)
            } return this.na(t, i)
        }
        ea() { return this.ys.priceFormat.minMove } ra() { return this.ha }
        Ns() {
            this.sh.Pt(); for (const t of this.vs) t.Pt();
            for (const t of this.bh) t.Pt(); this.er.Pt(), this.xh.Pt(), this.Sh?.Pt(), this.Ph.forEach((t => t.Ns()))
        } Wt() {
            return c(super.Wt())
        }
        Et(t) { if (!(("Line" === this.kh || "Area" === this.kh || "Baseline" === this.kh) && this.ys.crosshairMarkerVisible)) return null; const i = this.Yt.kr(t); if (null === i) return null; return { gt: i.Ft[3], ft: this.aa(), Ht: this.la(), Ot: this.oa(), Lt: this._a(t) } }
        Ae() { return this.ys.title }
        Vt() { return this.ys.visible }
        ua(t) { this.Ph.push(new Ot(t, this)) }
        ca(t) { this.Ph = this.Ph.filter((i => i.oh() !== t)) }
        da() { if ("Custom" === this.kh) return t => this.sh.fa(t) }
        pa() { if ("Custom" === this.kh) return t => this.sh.va(t) }
        ma() { return this.Yt.qr() }
        Gh() { return !Z(this.Wt().wa()) }
        na(t, i) {
            if (!g(t) || !g(i) || this.Yt.Ki()) return null;
            const s = "Line" === this.kh || "Area" === this.kh || "Baseline" === this.kh || "Histogram" === this.kh ? [3] : [2, 1], e = this.Yt.Ur(t, i, s); let h = null !== e ? new gt(e.Jr, e.Qr) : null, n = null;
            if ("Histogram" === this.Rr()) { const t = this.ys.base, i = new gt(t, t); h = null !== h ? h.vn(i) : i } return this.Ph.forEach((s => {
                const e = s.Mh(t, i);
                if (e?.priceRange) { const t = new gt(e.priceRange.minValue, e.priceRange.maxValue); h = null !== h ? h.vn(t) : t } e?.margins && (n = e.margins)
            })), new wt(h, n)
        }
        aa() { switch (this.kh) { case "Line": case "Area": case "Baseline": return this.ys.crosshairMarkerRadius }return 0 }
        la() { switch (this.kh) { case "Line": case "Area": case "Baseline": { const t = this.ys.crosshairMarkerBorderColor; if (0 !== t.length) return t } }return null }
        oa() { switch (this.kh) { case "Line": case "Area": case "Baseline": return this.ys.crosshairMarkerBorderWidth }return 0 }
        _a(t) {
            switch (this.kh) { case "Line": case "Area": case "Baseline": { const t = this.ys.crosshairMarkerBackgroundColor; if (0 !== t.length) return t } }return this.Rh().Dr(t).cr
        }
        Th() { switch (this.ys.priceFormat.type) { case "custom": this.ha = { format: this.ys.priceFormat.formatter }; break; case "volume": this.ha = new st(this.ys.priceFormat.precision); break; case "percent": this.ha = new it(this.ys.priceFormat.precision); break; default: { const t = Math.pow(10, this.ys.priceFormat.precision); this.ha = new tt(t, this.ys.priceFormat.minMove * t) } }null !== this.es && this.es.ga() }
        Qh(t, i) { const s = []; return Dt(this.Ph, t, i, s), s }
    } const Xt = [3], Gt = [0, 1, 2, 3];
    class Ht {
        constructor(t) {
            this.ys = t
        }
        Ma(t, i, s) {
            let e = t; if (0 === this.ys.mode) return e;
            const h = s.ks(), n = h.zt(); if (null === n) return e; const r = h.Nt(t, n), o = s.ba().filter((t => t instanceof Jt)).reduce(((t, e) => {
                if (s.Un(e) || !e.Vt()) return t;
                const h = e.Wt(), n = e.Xs(); if (h.Ki() || !n.Te(i)) return t; const r = n.kr(i); if (null === r) return t; const o = d(e.zt()), l = 3 === this.ys.mode ? Gt : Xt; return t.concat(l.map((t => h.Nt(r.Ft[t], o.Ft))))
            }), []);
            if (0 === o.length) return e;
            o.sort(((t, i) => Math.abs(t - r) - Math.abs(i - r)));
            const l = o[0]; return e = h.Ts(l, n), e
        }
    } function Zt(t, i, s) { return Math.min(Math.max(t, i), s) } function Kt(t, i, s) { return i - t <= s } function qt(t) { const i = Math.ceil(t); return i % 2 == 0 ? i - 1 : i }
    class jt extends P {
        constructor() {
            super(...arguments), this.Yt = null
        } ht(t) { this.Yt = t } et({ context: t, bitmapSize: i, horizontalPixelRatio: s, verticalPixelRatio: e }) {
            if (null === this.Yt) return;
            const h = Math.max(1, Math.floor(s)); t.lineWidth = h, function (t, i) { t.save(), t.lineWidth % 2 && t.translate(.5, .5), i(), t.restore() }(t, (() => {
                const n = c(this.Yt); if (n.xa) { t.strokeStyle = n.Sa, o(t, n.Ca), t.beginPath(); for (const e of n.ya) { const n = Math.round(e.Pa * s); t.moveTo(n, -h), t.lineTo(n, i.height + h) } t.stroke() }
                if (n.ka) {
                    t.strokeStyle = n.Ta, o(t, n.Ra), t.beginPath();
                    for (const s of n.Da) { const n = Math.round(s.Pa * e); t.moveTo(-h, n), t.lineTo(i.width + h, n) } t.stroke()
                }
            }))
        }
    }
    class ti {
        constructor(t) { this.Gt = new jt, this.St = !0, this.yt = t }
        Pt() { this.St = !0 }
        Tt() { if (this.St) { const t = this.yt.Qt().N().grid, i = { ka: t.horzLines.visible, xa: t.vertLines.visible, Ta: t.horzLines.color, Sa: t.vertLines.color, Ra: t.horzLines.style, Ca: t.vertLines.style, Da: this.yt.ks().Va(), ya: (this.yt.Qt().At().Va() || []).map((t => ({ Pa: t.coord }))) }; this.Gt.ht(i), this.St = !1 } return this.Gt }
    } class ii {
        constructor(t) { this.sh = new ti(t) } lr() { return this.sh }
    } const si = { Ia: 4, Ba: 1e-4 }; function ei(t, i) { const s = 100 * (t - i) / i; return i < 0 ? -s : s }
    function hi(t, i) { const s = ei(t.$e(), i), e = ei(t.qe(), i); return new gt(s, e) } function ni(t, i) { const s = 100 * (t - i) / i + 100; return i < 0 ? -s : s }
    function ri(t, i) { const s = ni(t.$e(), i), e = ni(t.qe(), i); return new gt(s, e) } function oi(t, i) { const s = Math.abs(t); if (s < 1e-15) return 0; const e = Math.log10(s + i.Ba) + i.Ia; return t < 0 ? -e : e }
    function li(t, i) { const s = Math.abs(t); if (s < 1e-15) return 0; const e = Math.pow(10, s - i.Ia) - i.Ba; return t < 0 ? -e : e }
    function ai(t, i) { if (null === t) return null; const s = oi(t.$e(), i), e = oi(t.qe(), i); return new gt(s, e) } function ui(t, i) {
        if (null === t) return null;
        const s = li(t.$e(), i), e = li(t.qe(), i); return new gt(s, e)
    } function ci(t) {
        if (null === t) return si; const i = Math.abs(t.qe() - t.$e()); if (i >= 1 || i < 1e-15) return si;
        const s = Math.ceil(Math.abs(Math.log10(i))), e = si.Ia + s; return { Ia: e, Ba: 1 / Math.pow(10, e) }
    }
    class di {
        constructor(t, i) {
            if (this.Aa = t, this.Ea = i,
                function (t) { if (t < 0) return !1; for (let i = t; i > 1; i /= 10)if (i % 10 != 0) return !1; return !0 }(this.Aa)) this.za = [2, 2.5, 2]; else {
                this.za = [];
                for (let t = this.Aa; 1 !== t;) { if (t % 2 == 0) this.za.push(2), t /= 2; else { if (t % 5 != 0) throw new Error("unexpected base"); this.za.push(2, 2.5), t /= 5 } if (this.za.length > 100) throw new Error("something wrong with base") }
            }
        }
        La(t, i, s) {
            const e = 0 === this.Aa ? 0 : 1 / this.Aa; let h = Math.pow(10, Math.max(0, Math.ceil(Math.log10(t - i)))), n = 0, r = this.Ea[0];
            for (; ;) {
                const t = Kt(h, e, 1e-14) && h > e + 1e-14, i = Kt(h, s * r, 1e-14), o = Kt(h, 1, 1e-14);
                if (!(t && i && o)) break; h /= r, r = this.Ea[++n % this.Ea.length]
            }
            if (h <= e + 1e-14 && (h = e), h = Math.max(1, h), this.za.length > 0 && (o = h, l = 1, a = 1e-14, Math.abs(o - l) < a)) for (n = 0, r = this.za[0]; Kt(h, s * r, 1e-14) && h > e + 1e-14;)h /= r, r = this.za[++n % this.za.length]; var o, l, a; return h
        }
    }
    class fi {
        constructor(t, i, s, e) {
            this.Oa = [], this.Yi = t, this.Aa = i, this.Na = s, this.Wa = e
        }
        La(t, i) {
            if (t < i) throw new Error("high < low"); const s = this.Yi.$t(), e = (t - i) * this.Fa() / s, h = new di(this.Aa, [2, 2.5, 2]), n = new di(this.Aa, [2, 2, 2.5]), r = new di(this.Aa, [2.5, 2, 2]), o = []; return o.push(h.La(t, i, e), n.La(t, i, e), r.La(t, i, e)), function (t) {
                if (t.length < 1) throw Error("array is empty"); let i = t[0];
                for (let s = 1; s < t.length; ++s)t[s] < i && (i = t[s]); return i
            }(o)
        }
        Ha() { const t = this.Yi, i = t.zt(); if (null === i) return void (this.Oa = []); const s = t.$t(), e = this.Na(s - 1, i), h = this.Na(0, i), n = this.Yi.N().entireTextOnly ? this.Ua() / 2 : 0, r = n, o = s - 1 - n, l = Math.max(e, h), a = Math.min(e, h); if (l === a) return void (this.Oa = []); let u = this.La(l, a), c = l % u; c += c < 0 ? u : 0; const d = l >= a ? 1 : -1; let f = null, p = 0; for (let s = l - c; s > a; s -= u) { const e = this.Wa(s, i, !0); null !== f && Math.abs(e - f) < this.Fa() || (e < r || e > o || (p < this.Oa.length ? (this.Oa[p].Pa = e, this.Oa[p].$a = t.qa(s)) : this.Oa.push({ Pa: e, $a: t.qa(s) }), p++, f = e, t.Ya() && (u = this.La(s * d, a)))) } this.Oa.length = p }
        Va() { return this.Oa }
        Ua() { return this.Yi.P() }
        Fa() { return Math.ceil(2.5 * this.Ua()) }
    }
    function pi(t) { return t.slice().sort(((t, i) => c(t.hs()) - c(i.hs()))) } var mi; !function (t) { t[t.Normal = 0] = "Normal", t[t.Logarithmic = 1] = "Logarithmic", t[t.Percentage = 2] = "Percentage", t[t.IndexedTo100 = 3] = "IndexedTo100" }(mi || (mi = {})); const gi = new it, wi = new tt(100, 1);
    class vi {
        constructor(t, i, s, e, h) { this.ja = 0, this.Ka = null, this.Ge = null, this.Xa = null, this.Za = { Ga: !1, Ja: null }, this.Qa = 0, this.tl = 0, this.il = new f, this.sl = new f, this.nl = [], this.el = null, this.rl = null, this.hl = null, this.al = null, this.ll = null, this.ha = wi, this.ol = ci(null), this._l = t, this.ys = i, this.ul = s, this.cl = e, this.dl = h, this.fl = new fi(this, 100, this.pl.bind(this), this.vl.bind(this)) } wa() { return this._l }
        N() { return this.ys }
        hr(t) { if (p(this.ys, t), this.ga(), void 0 !== t.mode && this.ml({ ie: t.mode }), void 0 !== t.scaleMargins) { const i = u(t.scaleMargins.top), s = u(t.scaleMargins.bottom); if (i < 0 || i > 1) throw new Error(`Invalid top margin - expect value between 0 and 1, given=${i}`); if (s < 0 || s > 1) throw new Error(`Invalid bottom margin - expect value between 0 and 1, given=${s}`); if (i + s > 1) throw new Error(`Invalid margins - sum of margins must be less than 1, given=${i + s}`); this.wl(), this.hl = null } }
        gl() { return this.ys.autoScale }
        Ya() { return 1 === this.ys.mode }
        Le() { return 2 === this.ys.mode }
        Ml() { return 3 === this.ys.mode }
        ie() { return { sn: this.ys.autoScale, bl: this.ys.invertScale, ie: this.ys.mode } }
        ml(t) { const i = this.ie(); let s = null; void 0 !== t.sn && (this.ys.autoScale = t.sn), void 0 !== t.ie && (this.ys.mode = t.ie, 2 !== t.ie && 3 !== t.ie || (this.ys.autoScale = !0), this.Za.Ga = !1), 1 === i.ie && t.ie !== i.ie && (!function (t, i) { if (null === t) return !1; const s = li(t.$e(), i), e = li(t.qe(), i); return isFinite(s) && isFinite(e) }(this.Ge, this.ol) ? this.ys.autoScale = !0 : (s = ui(this.Ge, this.ol), null !== s && this.xl(s))), 1 === t.ie && t.ie !== i.ie && (s = ai(this.Ge, this.ol), null !== s && this.xl(s)); const e = i.ie !== this.ys.mode; e && (2 === i.ie || this.Le()) && this.ga(), e && (3 === i.ie || this.Ml()) && this.ga(), void 0 !== t.bl && i.bl !== t.bl && (this.ys.invertScale = t.bl, this.Sl()), this.sl.p(i, this.ie()) }
        Cl() { return this.sl }
        P() { return this.ul.fontSize }
        $t() { return this.ja }
        yl(t) { this.ja !== t && (this.ja = t, this.wl(), this.hl = null) }
        Pl() { if (this.Ka) return this.Ka; const t = this.$t() - this.kl() - this.Tl(); return this.Ka = t, t }
        Qe() { return this.Rl(), this.Ge }
        xl(t, i) { const s = this.Ge; (i || null === s && null !== t || null !== s && !s.He(t)) && (this.hl = null, this.Ge = t) }
        Ki() { return this.Rl(), 0 === this.ja || !this.Ge || this.Ge.Ki() }
        Dl(t) { return this.bl() ? t : this.$t() - 1 - t }
        Nt(t, i) { return this.Le() ? t = ei(t, i) : this.Ml() && (t = ni(t, i)), this.vl(t, i) }
        Vl(t, i, s) {
            this.Rl(); const e = this.Tl(), h = c(this.Qe()), n = h.$e(), r = h.qe(), o = this.Pl() - 1, l = this.bl(), a = o / (r - n), u = void 0 === s ? 0 : s.from, d = void 0 === s ? t.length : s.to, f = this.Il();
            for (let s = u; s < d; s++) { const h = t[s], r = h.gt; if (isNaN(r)) continue; let o = r; null !== f && (o = f(h.gt, i)); const u = e + a * (o - n), c = l ? u : this.ja - 1 - u; h.ut = c }
        }
        Bl(t, i, s) {
            this.Rl(); const e = this.Tl(), h = c(this.Qe()), n = h.$e(), r = h.qe(), o = this.Pl() - 1, l = this.bl(), a = o / (r - n), u = void 0 === s ? 0 : s.from, d = void 0 === s ? t.length : s.to, f = this.Il();
            for (let s = u; s < d; s++) { const h = t[s]; let r = h.qh, o = h.Yh, u = h.jh, c = h.Kh; null !== f && (r = f(h.qh, i), o = f(h.Yh, i), u = f(h.jh, i), c = f(h.Kh, i)); let d = e + a * (r - n), p = l ? d : this.ja - 1 - d; h.Al = p, d = e + a * (o - n), p = l ? d : this.ja - 1 - d, h.El = p, d = e + a * (u - n), p = l ? d : this.ja - 1 - d, h.zl = p, d = e + a * (c - n), p = l ? d : this.ja - 1 - d, h.Ll = p }
        }
        Ts(t, i) { const s = this.pl(t, i); return this.Ol(s, i) }
        Ol(t, i) { let s = t; return this.Le() ? s = function (t, i) { return i < 0 && (t = -t), t / 100 * i + i }(s, i) : this.Ml() && (s = function (t, i) { return t -= 100, i < 0 && (t = -t), t / 100 * i + i }(s, i)), s }
        ba() { return this.nl }
        Dt() { return this.rl || (this.rl = pi(this.nl)), this.rl }
        Nl(t) { -1 === this.nl.indexOf(t) && (this.nl.push(t), this.ga(), this.Wl()) }
        Fl(t) { const i = this.nl.indexOf(t); if (-1 === i) throw new Error("source is not attached to scale"); this.nl.splice(i, 1), 0 === this.nl.length && (this.ml({ sn: !0 }), this.xl(null)), this.ga(), this.Wl() }
        zt() { let t = null; for (const i of this.nl) { const s = i.zt(); null !== s && ((null === t || s.Hh < t.Hh) && (t = s)) } return null === t ? null : t.Ft }
        bl() { return this.ys.invertScale }
        Va() { const t = null === this.zt(); if (null !== this.hl && (t || this.hl.Hl === t)) return this.hl.Va; this.fl.Ha(); const i = this.fl.Va(); return this.hl = { Va: i, Hl: t }, this.il.p(), i }
        Ul() { return this.il }
        $l(t) { this.Le() || this.Ml() || null === this.al && null === this.Xa && (this.Ki() || (this.al = this.ja - t, this.Xa = c(this.Qe()).Ue())) }
        ql(t) { if (this.Le() || this.Ml()) return; if (null === this.al) return; this.ml({ sn: !1 }), (t = this.ja - t) < 0 && (t = 0); let i = (this.al + .2 * (this.ja - 1)) / (t + .2 * (this.ja - 1)); const s = c(this.Xa).Ue(); i = Math.max(i, .1), s.je(i), this.xl(s) }
        Yl() { this.Le() || this.Ml() || (this.al = null, this.Xa = null) }
        jl(t) { this.gl() || null === this.ll && null === this.Xa && (this.Ki() || (this.ll = t, this.Xa = c(this.Qe()).Ue())) }
        Kl(t) { if (this.gl()) return; if (null === this.ll) return; const i = c(this.Qe()).Ye() / (this.Pl() - 1); let s = t - this.ll; this.bl() && (s *= -1); const e = s * i, h = c(this.Xa).Ue(); h.Ke(e), this.xl(h, !0), this.hl = null }
        Xl() { this.gl() || null !== this.ll && (this.ll = null, this.Xa = null) } ra() { return this.ha || this.ga(), this.ha }
        Zi(t, i) { switch (this.ys.mode) { case 2: return this.Zl(ei(t, i)); case 3: return this.ra().format(ni(t, i)); default: return this.nr(t) } }
        qa(t) { switch (this.ys.mode) { case 2: return this.Zl(t); case 3: return this.ra().format(t); default: return this.nr(t) } }
        Dh(t) { return this.nr(t, c(this.el).ra()) }
        Vh(t, i) { return t = ei(t, i), this.Zl(t, gi) }
        Gl() { return this.nl }
        Jl(t) { this.Za = { Ja: t, Ga: !1 } }
        Ns() { this.nl.forEach((t => t.Ns())) }
        ga() { this.hl = null; let t = 1 / 0; this.el = null; for (const i of this.nl) i.hs() < t && (t = i.hs(), this.el = i); let i = 100; null !== this.el && (i = Math.round(1 / this.el.ea())), this.ha = wi, this.Le() ? (this.ha = gi, i = 100) : this.Ml() ? (this.ha = new tt(100, 1), i = 100) : null !== this.el && (this.ha = this.el.ra()), this.fl = new fi(this, i, this.pl.bind(this), this.vl.bind(this)), this.fl.Ha() }
        Wl() { this.rl = null }
        Xi() { return this.dl }
        kl() { return this.bl() ? this.ys.scaleMargins.bottom * this.$t() + this.tl : this.ys.scaleMargins.top * this.$t() + this.Qa }
        Tl() { return this.bl() ? this.ys.scaleMargins.top * this.$t() + this.Qa : this.ys.scaleMargins.bottom * this.$t() + this.tl }
        Rl() { this.Za.Ga || (this.Za.Ga = !0, this.Ql()) }
        wl() { this.Ka = null }
        vl(t, i) { if (this.Rl(), this.Ki()) return 0; t = this.Ya() && t ? oi(t, this.ol) : t; const s = c(this.Qe()), e = this.Tl() + (this.Pl() - 1) * (t - s.$e()) / s.Ye(); return this.Dl(e) }
        pl(t, i) { if (this.Rl(), this.Ki()) return 0; const s = this.Dl(t), e = c(this.Qe()), h = e.$e() + e.Ye() * ((s - this.Tl()) / (this.Pl() - 1)); return this.Ya() ? li(h, this.ol) : h }
        Sl() { this.hl = null, this.fl.Ha() }
        Ql() {
            const t = this.Za.Ja; if (null === t) return; let i = null; const s = this.Gl(); let e = 0, h = 0; for (const n of s) {
                if (!n.Vt()) continue; const s = n.zt(); if (null === s) continue; const r = n.Mh(t.Uh(), t.bi()); let o = r && r.Qe(); if (null !== o) {
                    switch (this.ys.mode) { case 1: o = ai(o, this.ol); break; case 2: o = hi(o, s.Ft); break; case 3: o = ri(o, s.Ft) }if (i = null === i ? o : i.vn(c(o)), null !== r) { const t = r.tr(); null !== t && (e = Math.max(e, t.above), h = Math.max(h, t.below)) }
                }
            } if (e === this.Qa && h === this.tl || (this.Qa = e, this.tl = h, this.hl = null, this.wl()), null !== i) { if (i.$e() === i.qe()) { const t = this.el, s = 5 * (null === t || this.Le() || this.Ml() ? 1 : t.ea()); this.Ya() && (i = ui(i, this.ol)), i = new gt(i.$e() - s, i.qe() + s), this.Ya() && (i = ai(i, this.ol)) } if (this.Ya()) { const t = ui(i, this.ol), s = ci(t); if (n = s, r = this.ol, n.Ia !== r.Ia || n.Ba !== r.Ba) { const e = null !== this.Xa ? ui(this.Xa, this.ol) : null; this.ol = s, i = ai(t, s), null !== e && (this.Xa = ai(e, s)) } } this.xl(i) } else null === this.Ge && (this.xl(new gt(-.5, .5)), this.ol = ci(null)); var n, r; this.Za.Ga = !0
        }
        Il() { return this.Le() ? ei : this.Ml() ? ni : this.Ya() ? t => oi(t, this.ol) : null }
        io(t, i, s) { return void 0 === i ? (void 0 === s && (s = this.ra()), s.format(t)) : i(t) }
        nr(t, i) { return this.io(t, this.cl.priceFormatter, i) }
        Zl(t, i) { return this.io(t, this.cl.percentageFormatter, i) }
    } function Mi(t) { return t instanceof Jt }
    class bi {
        constructor(t, i) {
            this.nl = [], this.so = new Map, this.ja = 0, this.no = 0, this.eo = 1e3, this.rl = null, this.ro = new f, this.Ph = [], this.uh = t, this.ts = i, this.ho = new ii(this); const s = i.N(); this.ao = this.lo("left", s.leftPriceScale), this.oo = this.lo("right", s.rightPriceScale), this.ao.Cl().i(this._o.bind(this, this.ao), this), this.oo.Cl().i(this._o.bind(this, this.oo), this), this.uo(s)
        }
        uo(t) {
            if (t.leftPriceScale && this.ao.hr(t.leftPriceScale), t.rightPriceScale && this.oo.hr(t.rightPriceScale), t.localization && (this.ao.ga(), this.oo.ga()), t.overlayPriceScales) {
                const i = Array.from(this.so.values());
                for (const s of i) { const i = c(s[0].Wt()); i.hr(t.overlayPriceScales), t.localization && i.ga() }
            }
        }
        co(t) { switch (t) { case "left": return this.ao; case "right": return this.oo }return this.so.has(t) ? u(this.so.get(t))[0].Wt() : null }
        m() { this.Qt().do().u(this), this.ao.Cl().u(this), this.oo.Cl().u(this), this.nl.forEach((t => { t.m && t.m() })), this.Ph = this.Ph.filter((t => { const i = t.oh(); return i.detached && i.detached(), !1 })), this.ro.p() }
        fo() { return this.eo }
        po(t) { this.eo = t }
        Qt() { return this.ts }
        Qi() { return this.no }
        $t() { return this.ja }
        vo(t) { this.no = t, this.mo() }
        yl(t) { this.ja = t, this.ao.yl(t), this.oo.yl(t), this.nl.forEach((i => { if (this.Un(i)) { const s = i.Wt(); null !== s && s.yl(t) } })), this.mo() }
        wo() { return this.nl.filter(Mi) }
        ba() { return this.nl }
        Un(t) { const i = t.Wt(); return null === i || this.ao !== i && this.oo !== i }
        Nl(t, i, s) { this.Mo(t, i, s ? t.hs() : this.nl.length) }
        Fl(t, i) { const s = this.nl.indexOf(t); a(-1 !== s, "removeDataSource: invalid data source"), this.nl.splice(s, 1), i || this.nl.forEach(((t, i) => t.ls(i))); const e = c(t.Wt()).wa(); if (this.so.has(e)) { const i = u(this.so.get(e)), s = i.indexOf(t); -1 !== s && (i.splice(s, 1), 0 === i.length && this.so.delete(e)) } const h = t.Wt(); h && h.ba().indexOf(t) >= 0 && (h.Fl(t), this.bo(h)), this.rl = null }
        qn(t) { return t === this.ao ? "left" : t === this.oo ? "right" : "overlay" }
        xo() { return this.ao }
        So() { return this.oo }
        Co(t, i) { t.$l(i) }
        yo(t, i) { t.ql(i), this.mo() }
        Po(t) { t.Yl() }
        ko(t, i) { t.jl(i) }
        To(t, i) { t.Kl(i), this.mo() }
        Ro(t) { t.Xl() }
        mo() { this.nl.forEach((t => { t.Ns() })) }
        ks() { let t = null; return this.ts.N().rightPriceScale.visible && 0 !== this.oo.ba().length ? t = this.oo : this.ts.N().leftPriceScale.visible && 0 !== this.ao.ba().length ? t = this.ao : 0 !== this.nl.length && (t = this.nl[0].Wt()), null === t && (t = this.oo), t }
        $n() { let t = null; return this.ts.N().rightPriceScale.visible ? t = this.oo : this.ts.N().leftPriceScale.visible && (t = this.ao), t }
        bo(t) { null !== t && t.gl() && this.Do(t) }
        Vo(t) { const i = this.uh.ye(); t.ml({ sn: !0 }), null !== i && t.Jl(i), this.mo() }
        Io() { this.Do(this.ao), this.Do(this.oo) }
        Bo() { this.bo(this.ao), this.bo(this.oo), this.nl.forEach((t => { this.Un(t) && this.bo(t.Wt()) })), this.mo(), this.ts.ar() }
        Dt() { return null === this.rl && (this.rl = pi(this.nl)), this.rl }
        Ao(t, i) {
            i = Zt(i, 0, this.nl.length - 1);
            const s = this.nl.indexOf(t); a(-1 !== s, "setSeriesOrder: invalid data source"), this.nl.splice(s, 1), this.nl.splice(i, 0, t), this.nl.forEach(((t, i) => t.ls(i))), this.rl = null;
            for (const t of [this.ao, this.oo]) t.Wl(), t.ga(); this.ts.ar()
        }
        It() { return this.Dt().filter(Mi) }
        Eo() { return this.ro } zo() { return this.ho }
        ua(t) { this.Ph.push(new Vt(t)) }
        ca(t) { this.Ph = this.Ph.filter((i => i.oh() !== t)), t.detached && t.detached(), this.ts.ar() }
        Lo() { return this.Ph }
        sa(t, i) { return this.Ph.map((s => s.jn(t, i))).filter((t => null !== t)) }
        Do(t) { const i = t.Gl(); if (i && i.length > 0 && !this.uh.Ki()) { const i = this.uh.ye(); null !== i && t.Jl(i) } t.Ns() }
        Mo(t, i, s) {
            let e = this.co(i); if (null === e && (e = this.lo(i, this.ts.N().overlayPriceScales)), this.nl.splice(s, 0, t),
                !Z(i)) { const s = this.so.get(i) || []; s.push(t), this.so.set(i, s) } t.ls(s), e.Nl(t), t._s(e), this.bo(e), this.rl = null
        }
        _o(t, i, s) { i.ie !== s.ie && this.Do(t) } lo(t, i) {
            const s = { visible: !0, autoScale: !0, ...M(i) }, e = new vi(t, s, this.ts.N().layout, this.ts.N().localization, this.ts.Xi()); return e.yl(this.$t()), e
        }
    }
    function yi(t) { return { Oo: t.Oo, No: { Kn: t.Wo.externalId }, Fo: t.Wo.cursorStyle } }
    function Si(t, i, s, e) { for (const h of t) { const t = h.Tt(e); if (null !== t && t.jn) { const e = t.jn(i, s); if (null !== e) return { Ho: h, No: e } } } return null }
    function xi(t) { return void 0 !== t.Ws }
    function _i(t, i, s) {
        const e = [t, ...t.Dt()], h = function (t, i, s) {
            let e, h; for (const o of t) {
                const t = o.sa?.(i, s) ?? []; for (const i of t) n = i.zOrder, r = e?.zOrder, (!r || "top" === n && "top" !== r || "normal" === n && "bottom" === r) && (e = i, h = o)
            } var n, r; return e && h ? { Wo: e, Oo: h } : null
        }(e, i, s);
        if ("top" === h?.Wo.zOrder) return yi(h);
        for (const n of e) {
            if (h && h.Oo === n && "bottom" !== h.Wo.zOrder && !h.Wo.isBackground) return yi(h);
            if (xi(n)) {
                const e = Si(n.Ws(t), i, s, t);
                if (null !== e) return { Oo: n, Ho: e.Ho, No: e.No }
            }
            if (h && h.Oo === n && "bottom" !== h.Wo.zOrder && h.Wo.isBackground) return yi(h)
        } return h?.Wo ? yi(h) : null
    }
    class Ci {
        constructor(t, i, s = 50) {
            this.Pn = 0, this.kn = 1, this.Tn = 1, this.Dn = new Map, this.Rn = new Map, this.Uo = t, this.$o = i, this.Vn = s
        }
        qo(t) {
            const i = t.time, s = this.$o.cacheKey(i), e = this.Dn.get(s); if (void 0 !== e) return e.Yo; if (this.Pn === this.Vn) {
                const t = this.Rn.get(this.Tn); this.Rn.delete(this.Tn), this.Dn.delete(u(t)), this.Tn++, this.Pn--
            } const h = this.Uo(t); return this.Dn.set(s, { Yo: h, En: this.kn }), this.Rn.set(this.kn, s), this.Pn++, this.kn++, h
        }
    }
    class Ti {
        constructor(t, i) { a(t <= i, "right should be >= left"), this.jo = t, this.Ko = i }
        Uh() { return this.jo }
        bi() { return this.Ko }
        Xo() { return this.Ko - this.jo + 1 }
        Te(t) { return this.jo <= t && t <= this.Ko }
        He(t) { return this.jo === t.Uh() && this.Ko === t.bi() }
    } function ki(t, i) { return null === t || null === i ? t === i : t.He(i) }
    class Ri {
        constructor() { this.Zo = new Map, this.Dn = null, this.Go = !1 }
        Jo(t) { this.Go = t, this.Dn = null }
        Qo(t, i) { this.t_(i), this.Dn = null; for (let s = i; s < t.length; ++s) { const i = t[s]; let e = this.Zo.get(i.timeWeight); void 0 === e && (e = [], this.Zo.set(i.timeWeight, e)), e.push({ index: s, time: i.time, weight: i.timeWeight, originalTime: i.originalTime }) } }
        i_(t, i, s, e, h) { const n = Math.ceil(i / t); return null !== this.Dn && this.Dn.s_ === n && h === this.Dn.n_ && s === this.Dn.e_ || (this.Dn = { n_: h, e_: s, Va: this.r_(n, s, e), s_: n }), this.Dn.Va }
        t_(t) { if (0 === t) return void this.Zo.clear(); const i = []; this.Zo.forEach(((s, e) => { t <= s[0].index ? i.push(e) : s.splice(Ct(s, t, (i => i.index < t)), 1 / 0) })); for (const t of i) this.Zo.delete(t) }
        r_(t, i, s) {
            let e = []; const h = t => !i || s.has(t.index); for (const i of Array.from(this.Zo.keys()).sort(((t, i) => i - t))) {
                if (!this.Zo.get(i)) continue; const s = e; e = []; const n = s.length; let r = 0; const o = u(this.Zo.get(i)), l = o.length; let a = 1 / 0, c = -1 / 0;
                for (let i = 0; i < l; i++) {
                    const l = o[i], u = l.index; for (; r < n;) { const t = s[r], i = t.index; if (!(i < u && h(t))) { a = i; break } r++, e.push(t), c = i, a = 1 / 0 } if (a - u >= t && u - c >= t && h(l)) e.push(l), c = u; else if (this.Go) return s
                } for (; r < n; r++)h(s[r]) && e.push(s[r])
            } return e
        }
    }
    class Pi {
        constructor(t) { this.h_ = t }
        a_() { return null === this.h_ ? null : new Ti(Math.floor(this.h_.Uh()), Math.ceil(this.h_.bi())) }
        l_() { return this.h_ }
        static o_() { return new Pi(null) }
    }
    function Yi(t, i) { return t.weight > i.weight ? t : i }
    class Ni {
        constructor(t, i, s, e) { this.no = 0, this.__ = null, this.u_ = [], this.ll = null, this.al = null, this.c_ = new Ri, this.d_ = new Map, this.f_ = Pi.o_(), this.p_ = !0, this.v_ = new f, this.m_ = new f, this.w_ = new f, this.g_ = null, this.M_ = null, this.b_ = new Map, this.x_ = -1, this.S_ = [], this.ys = i, this.cl = s, this.C_ = i.rightOffset, this.y_ = i.barSpacing, this.ts = t, this.$o = e, this.P_(), this.c_.Jo(i.uniformDistribution), this.k_() }
        N() { return this.ys } T_(t) { p(this.cl, t), this.R_(), this.P_() }
        hr(t, i) { p(this.ys, t), this.ys.fixLeftEdge && this.D_(), this.ys.fixRightEdge && this.V_(), void 0 !== t.barSpacing && this.ts.dn(t.barSpacing), void 0 !== t.rightOffset && this.ts.fn(t.rightOffset), void 0 === t.minBarSpacing && void 0 === t.maxBarSpacing || this.ts.dn(t.barSpacing ?? this.y_), void 0 !== t.ignoreWhitespaceIndices && t.ignoreWhitespaceIndices !== this.ys.ignoreWhitespaceIndices && this.k_(), this.R_(), this.P_(), this.w_.p() }
        Rs(t) { return this.u_[t]?.time ?? null }
        ss(t) { return this.u_[t] ?? null }
        I_(t, i) { if (this.u_.length < 1) return null; if (this.$o.key(t) > this.$o.key(this.u_[this.u_.length - 1].time)) return i ? this.u_.length - 1 : null; const s = Ct(this.u_, this.$o.key(t), ((t, i) => this.$o.key(t.time) < i)); return this.$o.key(t) < this.$o.key(this.u_[s].time) ? i ? s : null : s }
        Ki() { return 0 === this.no || 0 === this.u_.length || null === this.__ }
        B_() { return this.u_.length > 0 }
        ye() { return this.A_(), this.f_.a_() }
        E_() { return this.A_(), this.f_.l_() }
        z_() { const t = this.ye(); if (null === t) return null; const i = { from: t.Uh(), to: t.bi() }; return this.L_(i) }
        L_(t) { const i = Math.round(t.from), s = Math.round(t.to), e = c(this.O_()), h = c(this.N_()); return { from: c(this.ss(Math.max(e, i))), to: c(this.ss(Math.min(h, s))) } }
        W_(t) { return { from: c(this.I_(t.from, !0)), to: c(this.I_(t.to, !0)) } } Q
        i() { return this.no }
        vo(t) {
            if (!isFinite(t) || t <= 0) return;
            if (this.no === t) return; const i = this.E_(), s = this.no;
            if (this.no = t, this.p_ = !0, this.ys.lockVisibleTimeRangeOnResize && 0 !== s) {
                const i = this.y_ * t / s; this.y_ = i
            }
            if (this.ys.fixLeftEdge && null !== i && i.Uh() <= 0) {
                const i = s - t; this.C_ -= Math.round(i / this.y_) + 1, this.p_ = !0
            } this.F_(), this.H_()
        }
        qt(t) {
            if (this.Ki() || !g(t)) return 0;
            const i = this.U_() + this.C_ - t; return this.no - (i + .5) * this.y_ - 1
        }
        q_(t, i) { const s = this.U_(), e = void 0 === i ? 0 : i.from, h = void 0 === i ? t.length : i.to; for (let i = e; i < h; i++) { const e = t[i].wt, h = s + this.C_ - e, n = this.no - (h + .5) * this.y_ - 1; t[i]._t = n } }
        Y_(t, i) { const s = Math.ceil(this.j_(t)); return i && this.ys.ignoreWhitespaceIndices && !this.K_(s) ? this.X_(s) : s }
        fn(t) { this.p_ = !0, this.C_ = t, this.H_(), this.ts.Z_(), this.ts.ar() }
        G_() { return this.y_ }
        dn(t) { this.J_(t), this.H_(), this.ts.Z_(), this.ts.ar() }
        Q_() { return this.C_ }
        Va() {
            if (this.Ki()) return null; if (null !== this.M_) return this.M_;
            const t = this.y_, i = 5 * (this.ts.N().layout.fontSize + 4) / 8 * (this.ys.tickMarkMaxCharacterLength || 8), s = Math.round(i / t), e = c(this.ye()), h = Math.max(e.Uh(), e.Uh() - s), n = Math.max(e.bi(), e.bi() - s), r = this.c_.i_(t, i, this.ys.ignoreWhitespaceIndices, this.b_, this.x_), o = this.O_() + s, l = this.N_() - s, a = this.tu(), u = this.ys.fixLeftEdge || a, d = this.ys.fixRightEdge || a; let f = 0;
            for (const t of r) {
                if (!(h <= t.index && t.index <= n)) continue;
                let s; f < this.S_.length ? (s = this.S_[f], s.coord = this.qt(t.index), s.label = this.iu(t), s.weight = t.weight) : (s = { needAlignCoordinate: !1, coord: this.qt(t.index), label: this.iu(t), weight: t.weight }, this.S_.push(s)), this.y_ > i / 2 && !a ? s.needAlignCoordinate = !1 : s.needAlignCoordinate = u && t.index <= o || d && t.index >= l, f++
            } return this.S_.length = f, this.M_ = this.S_, this.S_
        }
        su() { this.p_ = !0, this.dn(this.ys.barSpacing), this.fn(this.ys.rightOffset) }
        nu(t) { this.p_ = !0, this.__ = t, this.H_(), this.D_() }
        eu(t, i) { const s = this.j_(t), e = this.G_(), h = e + i * (e / 10); this.dn(h), this.ys.rightBarStaysOnScroll || this.fn(this.Q_() + (s - this.j_(t))) }
        $l(t) { this.ll && this.Xl(), null === this.al && null === this.g_ && (this.Ki() || (this.al = t, this.ru())) }
        ql(t) { if (null === this.g_) return; const i = Zt(this.no - t, 0, this.no), s = Zt(this.no - c(this.al), 0, this.no); 0 !== i && 0 !== s && this.dn(this.g_.G_ * i / s) }
        Yl() { null !== this.al && (this.al = null, this.hu()) }
        jl(t) { null === this.ll && null === this.g_ && (this.Ki() || (this.ll = t, this.ru())) }
        Kl(t) { if (null === this.ll) return; const i = (this.ll - t) / this.G_(); this.C_ = c(this.g_).Q_ + i, this.p_ = !0, this.H_() }
        Xl() { null !== this.ll && (this.ll = null, this.hu()) }
        au() { this.lu(this.ys.rightOffset) }
        lu(t, i = 400) {
            if (!isFinite(t)) throw new RangeError("offset is required and must be finite number"); if (!isFinite(i) || i <= 0) throw new RangeError("animationDuration (optional) must be finite positive number"); const s = this.C_, e = performance.now(); this.ts._n({ ou: t => (t - e) / i >= 1, _u: h => { const n = (h - e) / i; return n >= 1 ? t : s + (t - s) * n } })
        } Pt(t, i) { this.p_ = !0, this.u_ = t, this.c_.Qo(t, i), this.H_() }
        uu() { return this.v_ }
        cu() { return this.m_ }
        du() { return this.w_ }
        U_() { return this.__ || 0 }
        fu(t) { const i = t.Xo(); this.J_(this.no / i), this.C_ = t.bi() - this.U_(), this.H_(), this.p_ = !0, this.ts.Z_(), this.ts.ar() }
        pu() { const t = this.O_(), i = this.N_(); null !== t && null !== i && this.fu(new Ti(t, i + this.ys.rightOffset)) }
        vu(t) { const i = new Ti(t.from, t.to); this.fu(i) }
        ns(t) { return void 0 !== this.cl.timeFormatter ? this.cl.timeFormatter(t.originalTime) : this.$o.formatHorzItem(t.time) }
        k_() {
            if (!this.ys.ignoreWhitespaceIndices) return;
            this.b_.clear(); const t = this.ts.js();
            for (const i of t)
                for (const t of i.ma()) this.b_.set(t, !0);
            this.x_++
        }
        tu() { const t = this.ts.N().handleScroll, i = this.ts.N().handleScale; return !(t.horzTouchDrag || t.mouseWheel || t.pressedMouseMove || t.vertTouchDrag || i.axisDoubleClickReset.time || i.axisPressedMouseMove.time || i.mouseWheel || i.pinch) }
        O_() { return 0 === this.u_.length ? null : 0 }
        N_() { return 0 === this.u_.length ? null : this.u_.length - 1 }
        mu(t) { return (this.no - 1 - t) / this.y_ }
        j_(t) { const i = this.mu(t), s = this.U_() + this.C_ - i; return Math.round(1e6 * s) / 1e6 }
        J_(t) { const i = this.y_; this.y_ = t, this.F_(), i !== this.y_ && (this.p_ = !0, this.wu()) }
        A_() { if (!this.p_) return; if (this.p_ = !1, this.Ki()) return void this.gu(Pi.o_()); const t = this.U_(), i = this.no / this.y_, s = this.C_ + t, e = new Ti(s - i + 1, s); this.gu(new Pi(e)) }
        F_() { const t = Zt(this.y_, this.Mu(), this.bu()); this.y_ !== t && (this.y_ = t, this.p_ = !0) }
        bu() { return this.ys.maxBarSpacing > 0 ? this.ys.maxBarSpacing : .5 * this.no }
        Mu() { return this.ys.fixLeftEdge && this.ys.fixRightEdge && 0 !== this.u_.length ? this.no / this.u_.length : this.ys.minBarSpacing }
        H_() { const t = this.xu(); null !== t && this.C_ < t && (this.C_ = t, this.p_ = !0); const i = this.Su(); this.C_ > i && (this.C_ = i, this.p_ = !0) }
        xu() { const t = this.O_(), i = this.__; if (null === t || null === i) return null; return t - i - 1 + (this.ys.fixLeftEdge ? this.no / this.y_ : Math.min(2, this.u_.length)) }
        Su() { return this.ys.fixRightEdge ? 0 : this.no / this.y_ - Math.min(2, this.u_.length) }
        ru() { this.g_ = { G_: this.G_(), Q_: this.Q_() } }
        hu() { this.g_ = null }
        iu(t) { let i = this.d_.get(t.weight); return void 0 === i && (i = new Ci((t => this.Cu(t)), this.$o), this.d_.set(t.weight, i)), i.qo(t) }
        Cu(t) { return this.$o.formatTickmark(t, this.cl) }
        gu(t) { const i = this.f_; this.f_ = t, ki(i.a_(), this.f_.a_()) || this.v_.p(), ki(i.l_(), this.f_.l_()) || this.m_.p(), this.wu() }
        wu() { this.M_ = null }
        R_() { this.wu(), this.d_.clear() }
        P_() { this.$o.updateFormatter(this.cl) }
        D_() { if (!this.ys.fixLeftEdge) return; const t = this.O_(); if (null === t) return; const i = this.ye(); if (null === i) return; const s = i.Uh() - t; if (s < 0) { const t = this.C_ - s - 1; this.fn(t) } this.F_() }
        V_() { this.H_(), this.F_() }
        K_(t) { return !this.ys.ignoreWhitespaceIndices || (this.b_.get(t) || !1) }
        X_(t) {
            const i = function* (t) {
                const i = Math.round(t), s = i < t; let e = 1;
                for (; ;)s ? (yield i + e, yield i - e) : (yield i - e, yield i + e), e++
            }(t), s = this.N_(); for (; s;) {
                const t = i.next().value; if (this.b_.get(t)) return t;
                if (t < 0 || t > s) break
            } return t
        }
    }
    var zi, Ei, Vi, Fi, Bi; !function (t) { t[t.OnTouchEnd = 0] = "OnTouchEnd", t[t.OnNextTap = 1] = "OnNextTap" }(zi || (zi = {}));

    class Ai {
        constructor(t, i, s) {
            this.yu = [], this.Pu = [], this.no = 0, this.ku = null, this.Tu = new f, this.Ru = new f, this.Du = null, this.Vu = t, this.ys = i, this.$o = s, this.dl = new k(this.ys.layout.colorParsers), this.Iu = new _(this),
                this.uh = new Ni(this, i.timeScale, this.ys.localization, s), this.Ct = new H(this, i.crosshair), this.Bu = new Ht(i.crosshair), this.Au(0), this.yu[0].po(2e3), this.Eu = this.zu(0), this.Lu = this.zu(1)
        }
        Bh() { this.Ou(K.gn()) }
        ar() { this.Ou(K.wn()) }
        Zh() { this.Ou(new K(1)) }
        Ah(t) { const i = this.Nu(t); this.Ou(i) }
        Wu() { return this.ku }
        Fu(t) { if (this.ku?.Oo === t?.Oo && this.ku?.No?.Kn === t?.No?.Kn) return; const i = this.ku; this.ku = t, null !== i && this.Ah(i.Oo), null !== t && t.Oo !== i?.Oo && this.Ah(t.Oo) }
        N() { return this.ys }
        hr(t) { p(this.ys, t), this.yu.forEach((i => i.uo(t))), void 0 !== t.timeScale && this.uh.hr(t.timeScale), void 0 !== t.localization && this.uh.T_(t.localization), (t.leftPriceScale || t.rightPriceScale) && this.Tu.p(), this.Eu = this.zu(0), this.Lu = this.zu(1), this.Bh() }
        Hu(t, i, s = 0) { const e = this.yu[s]; if (void 0 === e) return; if ("left" === t) return p(this.ys, { leftPriceScale: i }), e.uo({ leftPriceScale: i }), this.Tu.p(), void this.Bh(); if ("right" === t) return p(this.ys, { rightPriceScale: i }), e.uo({ rightPriceScale: i }), this.Tu.p(), void this.Bh(); const h = this.Uu(t, s); null !== h && (h.Wt.hr(i), this.Tu.p()) }
        Uu(t, i) { const s = this.yu[i]; if (void 0 === s) return null; const e = s.co(t); return null !== e ? { Us: s, Wt: e } : null }
        At() { return this.uh }
        $s() { return this.yu }
        $u() { return this.Ct }
        qu() { return this.Ru }
        Yu(t, i) { t.yl(i), this.Z_() } vo(t) { this.no = t, this.uh.vo(this.no), this.yu.forEach((i => i.vo(t))), this.Z_() }
        ju(t) { 1 !== this.yu.length && (a(t >= 0 && t < this.yu.length, "Invalid pane index"), this.yu.splice(t, 1), this.Bh()) }
        Ku(t, i) {
            if (this.yu.length < 2) return; a(t >= 0 && t < this.yu.length, "Invalid pane index"); const s = this.yu[t], e = this.yu.reduce(((t, i) => t + i.fo()), 0), h = this.yu.reduce(((t, i) => t + i.$t()), 0), n = h - 30 * (this.yu.length - 1); i = Math.min(n, Math.max(30, i)); const r = e / h, o = s.$t(); s.po(i * r); let l = i - o, u = this.yu.length - 1;
            for (const t of this.yu) if (t !== s) { const i = Math.min(n, Math.max(30, t.$t() - l / u)); l -= t.$t() - i, u -= 1; const s = i * r; t.po(s) } this.Bh()
        }
        Xu(t, i) { a(t >= 0 && t < this.yu.length && i >= 0 && i < this.yu.length, "Invalid pane index"); const s = this.yu[t], e = this.yu[i]; this.yu[t] = e, this.yu[i] = s, this.Bh() }
        Co(t, i, s) { t.Co(i, s) }
        yo(t, i, s) { t.yo(i, s), this.Eh(), this.Ou(this.Zu(t, 2)) }
        Po(t, i) { t.Po(i), this.Ou(this.Zu(t, 2)) }
        ko(t, i, s) { i.gl() || t.ko(i, s) }
        To(t, i, s) { i.gl() || (t.To(i, s), this.Eh(), this.Ou(this.Zu(t, 2))) }
        Ro(t, i) { i.gl() || (t.Ro(i), this.Ou(this.Zu(t, 2))) }
        Vo(t, i) { t.Vo(i), this.Ou(this.Zu(t, 2)) }
        Gu(t) { this.uh.$l(t) }
        Ju(t, i) { const s = this.At(); if (s.Ki() || 0 === i) return; const e = s.Qi(); t = Math.max(1, Math.min(t, e)), s.eu(t, i), this.Z_() }
        Qu(t) { this.tc(0), this.sc(t), this.nc() }
        ec(t) { this.uh.ql(t), this.Z_() }
        rc() { this.uh.Yl(), this.ar() }
        tc(t) { this.uh.jl(t) }
        sc(t) { this.uh.Kl(t), this.Z_() }
        nc() { this.uh.Xl(), this.ar() }
        js() { return this.Pu } hc(t, i, s, e, h) {
            this.Ct.Vs(t, i); let n = NaN, r = this.uh.Y_(t, !0); const o = this.uh.ye(); null !== o && (r = Math.min(Math.max(o.Uh(), r), o.bi()));
            const l = e.ks(), a = l.zt(); if (null !== a && (n = l.Ts(i, a)), n = this.Bu.Ma(n, r, e), this.Ct.Es(r, n, e), this.Zh(), !h) { const h = _i(e, t, i); this.Fu(h && { Oo: h.Oo, No: h.No, Fo: h.Fo || null }), this.Ru.p(this.Ct.Bt(), { x: t, y: i }, s) }
        } ac(t, i, s) { const e = s.ks(), h = e.zt(), n = e.Nt(t, c(h)), r = this.uh.I_(i, !0), o = this.uh.qt(c(r)); this.hc(o, n, null, s, !0) }
        lc(t) { this.$u().Ls(), this.Zh(), t || this.Ru.p(null, null, null) }
        Eh() { const t = this.Ct.Us(); if (null !== t) { const i = this.Ct.Bs(), s = this.Ct.As(); this.hc(i, s, null, t) } this.Ct.Ns() }
        oc(t, i, s) { const e = this.uh.Rs(0); void 0 !== i && void 0 !== s && this.uh.Pt(i, s); const h = this.uh.Rs(0), n = this.uh.U_(), r = this.uh.ye(); if (null !== r && null !== e && null !== h) { const i = r.Te(n), o = this.$o.key(e) > this.$o.key(h), l = null !== t && t > n && !o, a = this.uh.N().allowShiftVisibleRangeOnWhitespaceReplacement, u = i && (!(void 0 === s) || a) && this.uh.N().shiftVisibleRangeOnNewBar; if (l && !u) { const i = t - n; this.uh.fn(this.uh.Q_() - i) } } this.uh.nu(t) }
        Lh(t) { null !== t && t.Bo() }
        Hn(t) {
            if (function (t) { return t instanceof bi }(t)) return t; const i = this.yu.find((i => i.Dt().includes(t))); return void 0 === i ? null : i
        }
        Z_() { this.yu.forEach((t => t.Bo())), this.Eh() }
        m() { this.yu.forEach((t => t.m())), this.yu.length = 0, this.ys.localization.priceFormatter = void 0, this.ys.localization.percentageFormatter = void 0, this.ys.localization.timeFormatter = void 0 }
        _c() { return this.Iu }
        Yn() { return this.Iu.N() }
        do() { return this.Tu } uc(t, i) { const s = this.Au(i); this.cc(t, s), this.Pu.push(t), 1 === this.Pu.length ? this.Bh() : this.ar() } dc(t) { const i = this.Hn(t), s = this.Pu.indexOf(t); a(-1 !== s, "Series not found"); const e = c(i); this.Pu.splice(s, 1), e.Fl(t), t.m && t.m(), this.uh.k_(), this.fc(e) }
        Ih(t, i) { const s = c(this.Hn(t)); s.Fl(t, !0), s.Nl(t, i, !0) } pu() { const t = K.wn(); t.rn(), this.Ou(t) }
        vc(t) { const i = K.wn(); i.ln(t), this.Ou(i) } cn() { const t = K.wn(); t.cn(), this.Ou(t) } dn(t) { const i = K.wn(); i.dn(t), this.Ou(i) } fn(t) { const i = K.wn(); i.fn(t), this.Ou(i) } _n(t) { const i = K.wn(); i._n(t), this.Ou(i) } hn() { const t = K.wn(); t.hn(), this.Ou(t) }
        mc() { return this.ys.rightPriceScale.visible ? "right" : "left" } wc(t, i) {
            a(i >= 0, "Index should be greater or equal to 0"); if (i === this.gc(t)) return;
            const s = c(this.Hn(t)); s.Fl(t); const e = this.Au(i); this.cc(t, e), 0 === s.ba().length && this.fc(s)
        } Mc() { return this.Lu } $() { return this.Eu } Ut(t) {
            const i = this.Lu, s = this.Eu; if (i === s) return i; if (t = Math.max(0, Math.min(100, Math.round(100 * t))), null === this.Du || this.Du.mr !== s || this.Du.wr !== i) this.Du = { mr: s, wr: i, bc: new Map }; else { const i = this.Du.bc.get(t); if (void 0 !== i) return i }
            const e = this.dl.tt(s, i, t / 100); return this.Du.bc.set(t, e), e
        } xc(t) { return this.yu.indexOf(t) } Xi() { return this.dl }
        Au(t) { if (a(t >= 0, "Index should be greater or equal to 0"), (t = Math.min(this.yu.length, t)) < this.yu.length) return this.yu[t]; const i = new bi(this.uh, this); this.yu.push(i); const s = K.gn(); return s.Qs(t, { tn: 0, sn: !0 }), this.Ou(s), i }
        gc(t) { return this.yu.findIndex((i => i.wo().includes(t))) }
        Zu(t, i) { const s = new K(i); if (null !== t) { const e = this.yu.indexOf(t); s.Qs(e, { tn: i }) } return s }
        Nu(t, i) { return void 0 === i && (i = 2), this.Zu(this.Hn(t), i) }
        Ou(t) { this.Vu && this.Vu(t), this.yu.forEach((t => t.zo().lr().Pt())) }
        cc(t, i) { const s = t.N().priceScaleId, e = void 0 !== s ? s : this.mc(); i.Nl(t, e), Z(e) || t.hr(t.N()) }
        zu(t) { const i = this.ys.layout; return "gradient" === i.background.type ? 0 === t ? i.background.topColor : i.background.bottomColor : i.background.color }
        fc(t) { 0 === t.ba().length && this.yu.length > 1 && (this.yu.splice(this.xc(t), 1), this.Bh()) }
    } function Li(t) { return !m(t) && !w(t) } function Wi(t) { return m(t) } !function (t) { t[t.Disabled = 0] = "Disabled", t[t.Continuous = 1] = "Continuous", t[t.OnDataUpdate = 2] = "OnDataUpdate" }(Ei || (Ei = {})), function (t) { t[t.LastBar = 0] = "LastBar", t[t.LastVisible = 1] = "LastVisible" }(Vi || (Vi = {})), function (t) { t.Solid = "solid", t.VerticalGradient = "gradient" }(Fi || (Fi = {})), function (t) { t[t.Year = 0] = "Year", t[t.Month = 1] = "Month", t[t.DayOfMonth = 2] = "DayOfMonth", t[t.Time = 3] = "Time", t[t.TimeWithSeconds = 4] = "TimeWithSeconds" }(Bi || (Bi = {})); const Oi = t => t.getUTCFullYear(); function Di(t, i, s) { return i.replace(/yyyy/g, (t => j(Oi(t), 4))(t)).replace(/yy/g, (t => j(Oi(t) % 100, 2))(t)).replace(/MMMM/g, ((t, i) => new Date(t.getUTCFullYear(), t.getUTCMonth(), 1).toLocaleString(i, { month: "long" }))(t, s)).replace(/MMM/g, ((t, i) => new Date(t.getUTCFullYear(), t.getUTCMonth(), 1).toLocaleString(i, { month: "short" }))(t, s)).replace(/MM/g, (t => j((t => t.getUTCMonth() + 1)(t), 2))(t)).replace(/dd/g, (t => j((t => t.getUTCDate())(t), 2))(t)) }
    class $i {
        constructor(t = "yyyy-MM-dd", i = "default") { this.Sc = t, this.Cc = i }
        qo(t) { return Di(t, this.Sc, this.Cc) }
    }
    class Ii {
        constructor(t) { this.yc = t || "%h:%m:%s" } qo(t) { return this.yc.replace("%h", j(t.getUTCHours(), 2)).replace("%m", j(t.getUTCMinutes(), 2)).replace("%s", j(t.getUTCSeconds(), 2)) }
    } const Qi = { Pc: "yyyy-MM-dd", kc: "%h:%m:%s", Tc: " ", Rc: "default" };
    class Ui {
        constructor(t = {}) { const i = { ...Qi, ...t }; this.Dc = new $i(i.Pc, i.Rc), this.Vc = new Ii(i.kc), this.Ic = i.Tc } qo(t) { return `${this.Dc.qo(t)}${this.Ic}${this.Vc.qo(t)}` }
    }
    function Ji(t) {
        return 60 * t * 60 * 1e3
    }
    function Xi(t) { return 60 * t * 1e3 }
    const Gi = [{ Bc: (Hi = 1, 1e3 * Hi), Ac: 10 }, { Bc: Xi(1), Ac: 20 }, { Bc: Xi(5), Ac: 21 }, { Bc: Xi(30), Ac: 22 }, { Bc: Ji(1), Ac: 30 }, { Bc: Ji(3), Ac: 31 }, { Bc: Ji(6), Ac: 32 }, { Bc: Ji(12), Ac: 33 }]; var Hi; function Zi(t, i) { if (t.getUTCFullYear() !== i.getUTCFullYear()) return 70; if (t.getUTCMonth() !== i.getUTCMonth()) return 60; if (t.getUTCDate() !== i.getUTCDate()) return 50; for (let s = Gi.length - 1; s >= 0; --s)if (Math.floor(i.getTime() / Gi[s].Bc) !== Math.floor(t.getTime() / Gi[s].Bc)) return Gi[s].Ac; return 0 } function Ki(t) { let i = t; if (w(t) && (i = ji(t)), !Li(i)) throw new Error("time must be of type BusinessDay"); const s = new Date(Date.UTC(i.year, i.month - 1, i.day, 0, 0, 0, 0)); return { Ec: Math.round(s.getTime() / 1e3), zc: i } } function qi(t) { if (!Wi(t)) throw new Error("time must be of type isUTCTimestamp"); return { Ec: t } }
    function ji(t) { const i = new Date(t); if (isNaN(i.getTime())) throw new Error(`Invalid date string=${t}, expected format=yyyy-mm-dd`); return { day: i.getUTCDate(), month: i.getUTCMonth() + 1, year: i.getUTCFullYear() } } function ts(t) { w(t.time) && (t.time = ji(t.time)) } class is {
        options() { return this.ys }
        setOptions(t) { this.ys = t, this.updateFormatter(t.localization) }
        preprocessData(t) { Array.isArray(t) ? function (t) { t.forEach(ts) }(t) : ts(t) }
        createConverterToInternalObj(t) { return c(function (t) { return 0 === t.length ? null : Li(t[0].time) || w(t[0].time) ? Ki : qi }(t)) }
        key(t) { return "object" == typeof t && "Ec" in t ? t.Ec : this.key(this.convertHorzItemToInternal(t)) }
        cacheKey(t) { const i = t; return void 0 === i.zc ? new Date(1e3 * i.Ec).getTime() : new Date(Date.UTC(i.zc.year, i.zc.month - 1, i.zc.day)).getTime() }
        convertHorzItemToInternal(t) { return Wi(i = t) ? qi(i) : Li(i) ? Ki(i) : Ki(ji(i)); var i }
        updateFormatter(t) { if (!this.ys) return; const i = t.dateFormat; this.ys.timeScale.timeVisible ? this.Lc = new Ui({ Pc: i, kc: this.ys.timeScale.secondsVisible ? "%h:%m:%s" : "%h:%m", Tc: "   ", Rc: t.locale }) : this.Lc = new $i(i, t.locale) }
        formatHorzItem(t) { const i = t; return this.Lc.qo(new Date(1e3 * i.Ec)) }
        formatTickmark(t, i) {
            const s = function (t, i, s) {
                switch (t) { case 0: case 10: return i ? s ? 4 : 3 : 2; case 20: case 21: case 22: case 30: case 31: case 32: case 33: return i ? 3 : 2; case 50: return 2; case 60: return 1; case 70: return 0 }
            }(t.weight, this.ys.timeScale.timeVisible, this.ys.timeScale.secondsVisible), e = this.ys.timeScale;
            if (void 0 !== e.tickMarkFormatter) {
                const h = e.tickMarkFormatter(t.originalTime, s, i.locale); if (null !== h) return h
            } return function (t, i, s) {
                const e = {};
                switch (i) { case 0: e.year = "numeric"; break; case 1: e.month = "short"; break; case 2: e.day = "numeric"; break; case 3: e.hour12 = !1, e.hour = "2-digit", e.minute = "2-digit"; break; case 4: e.hour12 = !1, e.hour = "2-digit", e.minute = "2-digit", e.second = "2-digit" }
                const h = void 0 === t.zc ? new Date(1e3 * t.Ec) : new Date(Date.UTC(t.zc.year, t.zc.month - 1, t.zc.day)); return new Date(h.getUTCFullYear(), h.getUTCMonth(), h.getUTCDate(), h.getUTCHours(), h.getUTCMinutes(), h.getUTCSeconds(), h.getUTCMilliseconds()).toLocaleString(s, e)
            }(t.time, s, i.locale)
        }
        maxTickMarkWeight(t) { let i = t.reduce(Yi, t[0]).weight; return i > 30 && i < 50 && (i = 30), i }
        fillWeightsForPoints(t, i) {
            !function (t, i = 0) {
                if (0 === t.length) return; let s = 0 === i ? null : t[i - 1].time.Ec, e = null !== s ? new Date(1e3 * s) : null, h = 0; for (let n = i; n < t.length; ++n) { const i = t[n], r = new Date(1e3 * i.time.Ec); null !== e && (i.timeWeight = Zi(r, e)), h += i.time.Ec - (s || i.time.Ec), s = i.time.Ec, e = r }
                if (0 === i && t.length > 1) {
                    const i = Math.ceil(h / (t.length - 1)), s = new Date(1e3 * (t[0].time.Ec - i)); t[0].timeWeight = Zi(new Date(1e3 * t[0].time.Ec), s)
                }
            }(t, i)
        }
        static Oc(t) { return p({ localization: { dateFormat: "dd MMM 'yy" } }, t ?? {}) }
    }

    const ss = "undefined" != typeof window;
    function es() { return !!ss && window.navigator.userAgent.toLowerCase().indexOf("firefox") > -1 } function hs() { return !!ss && /iPhone|iPad|iPod/.test(window.navigator.platform) } function ns(t) { return t + t % 2 } function rs(t) { ss && void 0 !== window.chrome && t.addEventListener("mousedown", (t => { if (1 === t.button) return t.preventDefault(), !1 })) }
    class os {
        constructor(t, i, s) {
            this.Nc = 0, this.Wc = null, this.Fc = { _t: Number.NEGATIVE_INFINITY, ut: Number.POSITIVE_INFINITY }, this.Hc = 0, this.Uc = null, this.$c = { _t: Number.NEGATIVE_INFINITY, ut: Number.POSITIVE_INFINITY }, this.qc = null, this.Yc = !1, this.jc = null, this.Kc = null, this.Xc = !1, this.Zc = !1, this.Gc = !1, this.Jc = null, this.Qc = null, this.td = null, this.sd = null, this.nd = null, this.ed = null, this.rd = null, this.hd = 0, this.ad = !1, this.ld = !1, this.od = !1, this._d = 0, this.ud = null, this.dd = !hs(), this.fd = t => { this.pd(t) }, this.vd = t => {
                if (this.md(t)) {
                    const i = this.wd(t);
                    if (++this.Hc, this.Uc && this.Hc > 1) { const { gd: s } = this.Md(us(t), this.$c); s < 30 && !this.Gc && this.bd(i, this.Sd.xd), this.Cd() }
                } else { const i = this.wd(t); if (++this.Nc, this.Wc && this.Nc > 1) { const { gd: s } = this.Md(us(t), this.Fc); s < 5 && !this.Zc && this.yd(i, this.Sd.Pd), this.kd() } }
            }, this.Td = t, this.Sd = i, this.ys = s, this.Rd()
        }
        m() { null !== this.Jc && (this.Jc(), this.Jc = null), null !== this.Qc && (this.Qc(), this.Qc = null), null !== this.sd && (this.sd(), this.sd = null), null !== this.nd && (this.nd(), this.nd = null), null !== this.ed && (this.ed(), this.ed = null), null !== this.td && (this.td(), this.td = null), this.Dd(), this.kd() }
        Vd(t) { this.sd && this.sd(); const i = this.Id.bind(this); if (this.sd = () => { this.Td.removeEventListener("mousemove", i) }, this.Td.addEventListener("mousemove", i), this.md(t)) return; const s = this.wd(t); this.yd(s, this.Sd.Bd), this.dd = !0 }
        kd() { null !== this.Wc && clearTimeout(this.Wc), this.Nc = 0, this.Wc = null, this.Fc = { _t: Number.NEGATIVE_INFINITY, ut: Number.POSITIVE_INFINITY } }
        Cd() { null !== this.Uc && clearTimeout(this.Uc), this.Hc = 0, this.Uc = null, this.$c = { _t: Number.NEGATIVE_INFINITY, ut: Number.POSITIVE_INFINITY } }
        Id(t) { if (this.od || null !== this.Kc) return; if (this.md(t)) return; const i = this.wd(t); this.yd(i, this.Sd.Ad), this.dd = !0 }
        Ed(t) {
            const i = ds(t.changedTouches, c(this.ud)); if (null === i) return; if (this._d = cs(t), null !== this.rd) return; if (this.ld) return; this.ad = !0; const s = this.Md(us(i), c(this.Kc)), { zd: e, Ld: h, gd: n } = s; if (this.Xc || !(n < 5)) {
                if (!this.Xc) {
                    const t = .5 * e, i = h >= t && !this.ys.Od(), s = t > h && !this.ys.Nd(); i || s || (this.ld = !0), this.Xc = !0, this.Gc = !0, this.Dd(), this.Cd()
                }
                if (!this.ld) { const s = this.wd(t, i); this.bd(s, this.Sd.Wd), as(t) }
            }
        }
        Fd(t) { if (0 !== t.button) return; const i = this.Md(us(t), c(this.jc)), { gd: s } = i; if (s >= 5 && (this.Zc = !0, this.kd()), this.Zc) { const i = this.wd(t); this.yd(i, this.Sd.Hd) } }
        Md(t, i) { const s = Math.abs(i._t - t._t), e = Math.abs(i.ut - t.ut); return { zd: s, Ld: e, gd: s + e } }
        Ud(t) {
            let i = ds(t.changedTouches, c(this.ud)); if (null === i && 0 === t.touches.length && (i = t.changedTouches[0]), null === i) return; this.ud = null, this._d = cs(t), this.Dd(), this.Kc = null, this.ed && (this.ed(), this.ed = null); const s = this.wd(t, i); if (this.bd(s, this.Sd.$d), ++this.Hc, this.Uc && this.Hc > 1) {
                const { gd: t } = this.Md(us(i), this.$c); t < 30 && !this.Gc && this.bd(s, this.Sd.xd), this.Cd()
            } else this.Gc || (this.bd(s, this.Sd.qd), this.Sd.qd && as(t)); 0 === this.Hc && as(t), 0 === t.touches.length && this.Yc && (this.Yc = !1, as(t))
        }
        pd(t) {
            if (0 !== t.button) return; const i = this.wd(t); if (this.jc = null, this.od = !1, this.nd && (this.nd(), this.nd = null), es()) { this.Td.ownerDocument.documentElement.removeEventListener("mouseleave", this.fd) } if (!this.md(t)) if (this.yd(i, this.Sd.Yd), ++this.Nc, this.Wc && this.Nc > 1) {
                const { gd: s } = this.Md(us(t), this.Fc); s < 5 && !this.Zc && this.yd(i, this.Sd.Pd), this.kd()
            } else this.Zc || this.yd(i, this.Sd.jd)
        }
        Dd() { null !== this.qc && (clearTimeout(this.qc), this.qc = null) }
        Kd(t) { if (null !== this.ud) return; const i = t.changedTouches[0]; this.ud = i.identifier, this._d = cs(t); const s = this.Td.ownerDocument.documentElement; this.Gc = !1, this.Xc = !1, this.ld = !1, this.Kc = us(i), this.ed && (this.ed(), this.ed = null); { const i = this.Ed.bind(this), e = this.Ud.bind(this); this.ed = () => { s.removeEventListener("touchmove", i), s.removeEventListener("touchend", e) }, s.addEventListener("touchmove", i, { passive: !1 }), s.addEventListener("touchend", e, { passive: !1 }), this.Dd(), this.qc = setTimeout(this.Xd.bind(this, t), 240) } const e = this.wd(t, i); this.bd(e, this.Sd.Zd), this.Uc || (this.Hc = 0, this.Uc = setTimeout(this.Cd.bind(this), 500), this.$c = us(i)) }
        Gd(t) { if (0 !== t.button) return; const i = this.Td.ownerDocument.documentElement; es() && i.addEventListener("mouseleave", this.fd), this.Zc = !1, this.jc = us(t), this.nd && (this.nd(), this.nd = null); { const t = this.Fd.bind(this), s = this.pd.bind(this); this.nd = () => { i.removeEventListener("mousemove", t), i.removeEventListener("mouseup", s) }, i.addEventListener("mousemove", t), i.addEventListener("mouseup", s) } if (this.od = !0, this.md(t)) return; const s = this.wd(t); this.yd(s, this.Sd.Jd), this.Wc || (this.Nc = 0, this.Wc = setTimeout(this.kd.bind(this), 500), this.Fc = us(t)) }
        Rd() { this.Td.addEventListener("mouseenter", this.Vd.bind(this)), this.Td.addEventListener("touchcancel", this.Dd.bind(this)); { const t = this.Td.ownerDocument, i = t => { this.Sd.Qd && (t.composed && this.Td.contains(t.composedPath()[0]) || t.target && this.Td.contains(t.target) || this.Sd.Qd()) }; this.Qc = () => { t.removeEventListener("touchstart", i) }, this.Jc = () => { t.removeEventListener("mousedown", i) }, t.addEventListener("mousedown", i), t.addEventListener("touchstart", i, { passive: !0 }) } hs() && (this.td = () => { this.Td.removeEventListener("dblclick", this.vd) }, this.Td.addEventListener("dblclick", this.vd)), this.Td.addEventListener("mouseleave", this.tf.bind(this)), this.Td.addEventListener("touchstart", this.Kd.bind(this), { passive: !0 }), rs(this.Td), this.Td.addEventListener("mousedown", this.Gd.bind(this)), this.if(), this.Td.addEventListener("touchmove", (() => { }), { passive: !1 }) } if() {
            void 0 === this.Sd.sf && void 0 === this.Sd.nf && void 0 === this.Sd.ef || (this.Td.addEventListener("touchstart", (t => this.rf(t.touches)), { passive: !0 }), this.Td.addEventListener("touchmove", (t => {
                if (2 === t.touches.length && null !== this.rd && void 0 !== this.Sd.nf) {
                    const i = ls(t.touches[0], t.touches[1]) / this.hd; this.Sd.nf(this.rd, i), as(t)
                }
            }), { passive: !1 }), this.Td.addEventListener("touchend", (t => { this.rf(t.touches) })))
        }
        rf(t) { 1 === t.length && (this.ad = !1), 2 !== t.length || this.ad || this.Yc ? this.hf() : this.af(t) }
        af(t) { const i = this.Td.getBoundingClientRect() || { left: 0, top: 0 }; this.rd = { _t: (t[0].clientX - i.left + (t[1].clientX - i.left)) / 2, ut: (t[0].clientY - i.top + (t[1].clientY - i.top)) / 2 }, this.hd = ls(t[0], t[1]), void 0 !== this.Sd.sf && this.Sd.sf(), this.Dd() }
        hf() { null !== this.rd && (this.rd = null, void 0 !== this.Sd.ef && this.Sd.ef()) }
        tf(t) { if (this.sd && this.sd(), this.md(t)) return; if (!this.dd) return; const i = this.wd(t); this.yd(i, this.Sd.lf), this.dd = !hs() }
        Xd(t) { const i = ds(t.touches, c(this.ud)); if (null === i) return; const s = this.wd(t, i); this.bd(s, this.Sd._f), this.Gc = !0, this.Yc = !0 }
        md(t) { return t.sourceCapabilities && void 0 !== t.sourceCapabilities.firesTouchEvents ? t.sourceCapabilities.firesTouchEvents : cs(t) < this._d + 500 }
        bd(t, i) { i && i.call(this.Sd, t) }
        yd(t, i) { i && i.call(this.Sd, t) }
        wd(t, i) {
            const s = i || t, e = this.Td.getBoundingClientRect() || { left: 0, top: 0 };
            return { clientX: s.clientX, clientY: s.clientY, pageX: s.pageX, pageY: s.pageY, screenX: s.screenX, screenY: s.screenY, localX: s.clientX - e.left, localY: s.clientY - e.top, ctrlKey: t.ctrlKey, altKey: t.altKey, shiftKey: t.shiftKey, metaKey: t.metaKey, uf: !t.type.startsWith("mouse") && "contextmenu" !== t.type && "click" !== t.type, cf: t.type, df: s.target, Ho: t.view, ff: () => { "touchstart" !== t.type && as(t) } }
        }
    }
    function ls(t, i) { const s = t.clientX - i.clientX, e = t.clientY - i.clientY; return Math.sqrt(s * s + e * e) }
    function as(t) { t.cancelable && t.preventDefault() }
    function us(t) { return { _t: t.pageX, ut: t.pageY } }
    function cs(t) { return t.timeStamp || performance.now() } function ds(t, i) { for (let s = 0; s < t.length; ++s)if (t[s].identifier === i) return t[s]; return null }
    class fs {
        constructor(t, i, s) { this.pf = null, this.vf = null, this.mf = !0, this.wf = null, this.gf = t, this.Mf = t.bf()[i], this.xf = t.bf()[s], this.Sf = document.createElement("tr"), this.Sf.style.height = "1px", this.Cf = document.createElement("td"), this.Cf.style.position = "relative", this.Cf.style.padding = "0", this.Cf.style.margin = "0", this.Cf.setAttribute("colspan", "3"), this.yf(), this.Sf.appendChild(this.Cf), this.mf = this.gf.N().layout.panes.enableResize, this.mf ? this.Pf() : (this.pf = null, this.vf = null) } m() { null !== this.vf && this.vf.m() }
        kf() { return this.Sf } Tf() { return t({ width: this.Mf.Tf().width, height: 1 }) }
        Rf() { return t({ width: this.Mf.Rf().width, height: 1 * window.devicePixelRatio }) }
        Df(t, i, s) { const e = this.Rf(); t.fillStyle = this.gf.N().layout.panes.separatorColor, t.fillRect(i, s, e.width, e.height) }
        Pt() { this.yf(), this.gf.N().layout.panes.enableResize !== this.mf && (this.mf = this.gf.N().layout.panes.enableResize, this.mf ? this.Pf() : (null !== this.pf && (this.Cf.removeChild(this.pf.Vf), this.Cf.removeChild(this.pf.If), this.pf = null), null !== this.vf && (this.vf.m(), this.vf = null))) }
        Pf() {
            const t = document.createElement("div"), i = t.style; i.position = "fixed", i.display = "none", i.zIndex = "49", i.top = "0", i.left = "0", i.width = "100%", i.height = "100%", i.cursor = "row-resize", this.Cf.appendChild(t);
            const s = document.createElement("div"), e = s.style; e.position = "absolute", e.zIndex = "50", e.top = "-4px", e.height = "9px", e.width = "100%", e.backgroundColor = "", e.cursor = "row-resize", this.Cf.appendChild(s); const h = { Bd: this.Bf.bind(this), lf: this.Af.bind(this), Jd: this.Ef.bind(this), Zd: this.Ef.bind(this), Hd: this.zf.bind(this), Wd: this.zf.bind(this), Yd: this.Lf.bind(this), $d: this.Lf.bind(this) }; this.vf = new os(s, h, { Od: () => !1, Nd: () => !0 }), this.pf = { If: s, Vf: t }
        }
        yf() { this.Cf.style.background = this.gf.N().layout.panes.separatorColor }
        Bf(t) { null !== this.pf && (this.pf.If.style.backgroundColor = this.gf.N().layout.panes.separatorHoverColor) }
        Af(t) { null !== this.pf && null === this.wf && (this.pf.If.style.backgroundColor = "") }
        Ef(t) { if (null === this.pf) return; const i = this.Mf.Of().fo() + this.xf.Of().fo(), s = i / (this.Mf.Tf().height + this.xf.Tf().height), e = 30 * s; i <= 2 * e || (this.wf = { Nf: t.pageY, Wf: this.Mf.Of().fo(), Ff: i - e, Hf: i, Uf: s, $f: e }, this.pf.Vf.style.display = "block") } zf(t) {
            const i = this.wf; if (null === i) return;
            const s = (t.pageY - i.Nf) * i.Uf, e = Zt(i.Wf + s, i.$f, i.Ff); this.Mf.Of().po(e), this.xf.Of().po(i.Hf - e), this.gf.Qt().Bh()
        }
        Lf(t) { null !== this.wf && null !== this.pf && (this.wf = null, this.pf.Vf.style.display = "none") }
    }
    function ps(t, i) { return t.qf - i.qf } function ms(t, i, s) { const e = (t.qf - i.qf) / (t.wt - i.wt); return Math.sign(e) * Math.min(Math.abs(e), s) }
    class gs {
        constructor(t, i, s, e) { this.Yf = null, this.jf = null, this.Kf = null, this.Xf = null, this.Zf = null, this.Gf = 0, this.Jf = 0, this.Qf = t, this.tp = i, this.ip = s, this.Mn = e }
        sp(t, i) { if (null !== this.Yf) { if (this.Yf.wt === i) return void (this.Yf.qf = t); if (Math.abs(this.Yf.qf - t) < this.Mn) return } this.Xf = this.Kf, this.Kf = this.jf, this.jf = this.Yf, this.Yf = { wt: i, qf: t } }
        le(t, i) {
            if (null === this.Yf || null === this.jf) return;
            if (i - this.Yf.wt > 50) return;
            let s = 0; const e = ms(this.Yf, this.jf, this.tp), h = ps(this.Yf, this.jf), n = [e], r = [h];
            if (s += h, null !== this.Kf) {
                const t = ms(this.jf, this.Kf, this.tp); if (Math.sign(t) === Math.sign(e)) {
                    const i = ps(this.jf, this.Kf); if (n.push(t), r.push(i), s += i, null !== this.Xf) {
                        const t = ms(this.Kf, this.Xf, this.tp); if (Math.sign(t) === Math.sign(e)) {
                            const i = ps(this.Kf, this.Xf); n.push(t), r.push(i), s += i
                        }
                    }
                }
            } let o = 0;
            for (let t = 0; t < n.length; ++t)o += r[t] / s * n[t]; Math.abs(o) < this.Qf || (this.Zf = { qf: t, wt: i }, this.Jf = o, this.Gf = function (t, i) { const s = Math.log(i); return Math.log(1 * s / -t) / s }(Math.abs(o), this.ip))
        }
        _u(t) { const i = c(this.Zf), s = t - i.wt; return i.qf + this.Jf * (Math.pow(this.ip, s) - 1) / Math.log(this.ip) }
        ou(t) { return null === this.Zf || this.np(t) === this.Gf }
        np(t) { const i = t - c(this.Zf).wt; return Math.min(i, this.Gf) }
    }
    class ws {
        constructor(t, i) {
            this.ep = void 0, this.rp = void 0, this.hp = void 0, this.ps = !1, this.ap = t, this.lp = i, this.op()
        }
        Pt() { this.op() }
        _p() { this.ep && this.ap.removeChild(this.ep), this.rp && this.ap.removeChild(this.rp), this.ep = void 0, this.rp = void 0 }
        up() { return this.ps !== this.cp() || this.hp !== this.dp() }
        dp() { return this.lp.Qt().Xi().J(this.lp.N().layout.textColor) > 160 ? "dark" : "light" }
        cp() { return this.lp.N().layout.attributionLogo }
        fp() { const t = new URL(location.href); return t.hostname ? "&utm_source=" + t.hostname + t.pathname : "" }
        op() {
            this.up() && (this._p(), this.ps = this.cp(), this.ps && (this.hp = this.dp(), this.rp = document.createElement("style"), this.rp.innerText = "a#tv-attr-logo{--fill:#131722;--stroke:#fff;position:absolute;left:10px;bottom:10px;height:19px;width:35px;margin:0;padding:0;border:0;z-index:3;}a#tv-attr-logo[data-dark]{--fill:#D1D4DC;--stroke:#131722;}", this.ep = document.createElement("a"), this.ep.href = `https://www.tradingview.com/?utm_medium=lwc-link&utm_campaign=lwc-chart${this.fp()}`, this.ep.title = "Charting by TradingView", this.ep.id = "tv-attr-logo", this.ep.target = "_blank", this.ep.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="35" height="19" fill="none"><g fill-rule="evenodd" clip-path="url(#a)" clip-rule="evenodd"><path fill="var(--stroke)" d="M2 0H0v10h6v9h21.4l.5-1.3 6-15 1-2.7H23.7l-.5 1.3-.2.6a5 5 0 0 0-7-.9V0H2Zm20 17h4l5.2-13 .8-2h-7l-1 2.5-.2.5-1.5 3.8-.3.7V17Zm-.8-10a3 3 0 0 0 .7-2.7A3 3 0 1 0 16.8 7h4.4ZM14 7V2H2v6h6v9h4V7h2Z"/><path fill="var(--fill)" d="M14 2H2v6h6v9h6V2Zm12 15h-7l6-15h7l-6 15Zm-7-9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/></g><defs><clipPath id="a"><path fill="var(--stroke)" d="M0 0h35v19H0z"/></clipPath></defs></svg>', this.ep.toggleAttribute("data-dark", "dark" === this.hp), this.ap.appendChild(this.rp), this.ap.appendChild(this.ep)))
        }
    }
    function vs(t, i) {
        const s = c(t.ownerDocument).createElement("canvas"); t.appendChild(s);
        const h = e(s, {
            type: "device-pixel-content-box",
            options: { allowResizeObserver: !0 }, transform: (t, i) => ({ width: Math.max(t.width, i.width), height: Math.max(t.height, i.height) })
        }); return h.resizeCanvasElement(i), h
    }
    function Ms(t) { t.width = 1, t.height = 1, t.getContext("2d")?.clearRect(0, 0, 1, 1) }
    function bs(t, i, s, e) { t.ih && t.ih(i, s, e) }
    function ys(t, i, s, e) {
        t.nt(i, s, e)
    }
    function Ss(t, i, s, e) {
        const h = t(s, e); for (const t of h) { const s = t.Tt(e); null !== s && i(s) }
    }
    function xs(t, i) {
        return s => { if (!function (t) { return void 0 !== t.Wt }(s)) return []; return (s.Wt()?.wa() ?? "") !== i ? [] : s.ta?.(t) ?? [] }
    }
    function _s(t, i, s, e) {
        if (!t.length) return; let h = 0; const n = t[0].$t(e, !0); let r = 1 === i ? s / 2 - (t[0].Wi() - n / 2) : t[0].Wi() - n / 2 - s / 2;
        r = Math.max(0, r);
        for (let n = 1; n < t.length; n++) {
            const o = t[n], l = t[n - 1], a = l.$t(e, !1), u = o.Wi(), c = l.Wi(); if (1 === i ? u > c - a : u < c + a) {
                const e = c - a * i; o.Fi(e); const n = e - i * a / 2; if ((1 === i ? n < 0 : n > s) && r > 0) {
                    const e = 1 === i ? -1 - n : n - s, o = Math.min(e, r); for (let s = h; s < t.length; s++)t[s].Fi(t[s].Wi() + i * o); r -= o
                }
            } else h = n, r = 1 === i ? c - a - u : u - (c + a)
        }
    }
    class Cs {
        constructor(i, s, e, h) {
            this.Yi = null, this.pp = null, this.vp = !1, this.mp = new ht(200), this.wp = null, this.gp = 0, this.Mp = !1, this.bp = () => { this.Mp || this.yt.xp().Qt().ar() }, this.Sp = () => { this.Mp || this.yt.xp().Qt().ar() }, this.yt = i, this.ys = s, this.ul = s.layout, this.Iu = e, this.Cp = "left" === h, this.yp = xs("normal", h), this.Pp = xs("top", h), this.kp = xs("bottom", h), this.Cf = document.createElement("div"), this.Cf.style.height = "100%", this.Cf.style.overflow = "hidden", this.Cf.style.width = "25px", this.Cf.style.left = "0", this.Cf.style.position = "relative", this.Tp = vs(this.Cf, t({ width: 16, height: 16 })), this.Tp.subscribeSuggestedBitmapSizeChanged(this.bp); const n = this.Tp.canvasElement; n.style.position = "absolute", n.style.zIndex = "1", n.style.left = "0", n.style.top = "0", this.Rp = vs(this.Cf, t({ width: 16, height: 16 })), this.Rp.subscribeSuggestedBitmapSizeChanged(this.Sp); const r = this.Rp.canvasElement; r.style.position = "absolute", r.style.zIndex = "2", r.style.left = "0", r.style.top = "0"; const o = { Jd: this.Ef.bind(this), Zd: this.Ef.bind(this), Hd: this.zf.bind(this), Wd: this.zf.bind(this), Qd: this.Dp.bind(this), Yd: this.Lf.bind(this), $d: this.Lf.bind(this), Pd: this.Vp.bind(this), xd: this.Vp.bind(this), Bd: this.Ip.bind(this), lf: this.Af.bind(this) }; this.vf = new os(this.Rp.canvasElement, o, { Od: () => !this.ys.handleScroll.vertTouchDrag, Nd: () => !0 })
        }
        m() { this.vf.m(), this.Rp.unsubscribeSuggestedBitmapSizeChanged(this.Sp), Ms(this.Rp.canvasElement), this.Rp.dispose(), this.Tp.unsubscribeSuggestedBitmapSizeChanged(this.bp), Ms(this.Tp.canvasElement), this.Tp.dispose(), null !== this.Yi && this.Yi.Ul().u(this), this.Yi = null }
        kf() { return this.Cf }
        P() { return this.ul.fontSize }
        Bp() { const t = this.Iu.N(); return this.wp !== t.k && (this.mp.In(), this.wp = t.k), t }
        Ap() {
            if (null === this.Yi) return 0; let t = 0; const i = this.Bp(), s = c(this.Tp.canvasElement.getContext("2d", { colorSpace: this.yt.xp().N().layout.colorSpace }));
            s.save(); const e = this.Yi.Va(); s.font = this.Ep(), e.length > 0 && (t = Math.max(this.mp.Vi(s, e[0].$a), this.mp.Vi(s, e[e.length - 1].$a)));
            const h = this.zp(); for (let i = h.length; i--;) { const e = this.mp.Vi(s, h[i].ri()); e > t && (t = e) } const n = this.Yi.zt();
            if (null !== n && null !== this.pp && (2 !== (r = this.ys.crosshair).mode && r.horzLine.visible && r.horzLine.labelVisible)) {
                const i = this.Yi.Ts(1, n), e = this.Yi.Ts(this.pp.height - 2, n); t = Math.max(t, this.mp.Vi(s, this.Yi.Zi(Math.floor(Math.min(i, e)) + .11111111111111, n)), this.mp.Vi(s, this.Yi.Zi(Math.ceil(Math.max(i, e)) - .11111111111111, n)))
            }
            var r; s.restore(); const o = t || 34; return ns(Math.ceil(i.S + i.C + i.I + i.B + 5 + o))
        }
        Lp(t) { null !== this.pp && i(this.pp, t) || (this.pp = t, this.Mp = !0, this.Tp.resizeCanvasElement(t), this.Rp.resizeCanvasElement(t), this.Mp = !1, this.Cf.style.width = `${t.width}px`, this.Cf.style.height = `${t.height}px`) }
        Op() { return c(this.pp).width }
        _s(t) { this.Yi !== t && (null !== this.Yi && this.Yi.Ul().u(this), this.Yi = t, t.Ul().i(this.il.bind(this), this)) }
        Wt() { return this.Yi } In() { const t = this.yt.Of(); this.yt.xp().Qt().Vo(t, c(this.Wt())) }
        Np(t) {
            if (null === this.pp) return;
            const i = { colorSpace: this.yt.xp().N().layout.colorSpace };
            if (1 !== t) {
                this.Wp(), this.Tp.applySuggestedBitmapSize(); const t = s(this.Tp, i); null !== t && (t.useBitmapCoordinateSpace((t => { this.Fp(t), this.Hp(t) })), this.yt.Up(t, this.kp), this.$p(t), this.yt.Up(t, this.yp), this.qp(t))
            }
            this.Rp.applySuggestedBitmapSize();
            const e = s(this.Rp, i); null !== e && (e.useBitmapCoordinateSpace((({ context: t, bitmapSize: i }) => { t.clearRect(0, 0, i.width, i.height) })), this.Yp(e), this.yt.Up(e, this.Pp))
        }
        Rf() { return this.Tp.bitmapSize }
        Df(t, i, s) { const e = this.Rf(); e.width > 0 && e.height > 0 && t.drawImage(this.Tp.canvasElement, i, s) }
        Pt() { this.Yi?.Va() }
        Ef(t) {
            if (null === this.Yi || this.Yi.Ki() || !this.ys.handleScale.axisPressedMouseMove.price) return;
            const i = this.yt.xp().Qt(), s = this.yt.Of(); this.vp = !0, i.Co(s, this.Yi, t.localY)
        }
        zf(t) {
            if (null === this.Yi || !this.ys.handleScale.axisPressedMouseMove.price) return;
            const i = this.yt.xp().Qt(), s = this.yt.Of(), e = this.Yi; i.yo(s, e, t.localY)
        }
        Dp() { if (null === this.Yi || !this.ys.handleScale.axisPressedMouseMove.price) return; const t = this.yt.xp().Qt(), i = this.yt.Of(), s = this.Yi; this.vp && (this.vp = !1, t.Po(i, s)) }
        Lf(t) { if (null === this.Yi || !this.ys.handleScale.axisPressedMouseMove.price) return; const i = this.yt.xp().Qt(), s = this.yt.Of(); this.vp = !1, i.Po(s, this.Yi) }
        Vp(t) { this.ys.handleScale.axisDoubleClickReset.price && this.In() }
        Ip(t) { if (null === this.Yi) return; !this.yt.xp().Qt().N().handleScale.axisPressedMouseMove.price || this.Yi.Le() || this.Yi.Ml() || this.jp(1) }
        Af(t) { this.jp(0) }
        zp() { const t = [], i = null === this.Yi ? void 0 : this.Yi; return (s => { for (let e = 0; e < s.length; ++e) { const h = s[e].Fs(this.yt.Of(), i); for (let i = 0; i < h.length; i++)t.push(h[i]) } })(this.yt.Of().Dt()), t }
        Fp({ context: t, bitmapSize: i }) { const { width: s, height: e } = i, h = this.yt.Of().Qt(), n = h.$(), r = h.Mc(); n === r ? A(t, 0, 0, s, e, n) : O(t, 0, 0, s, e, n, r) }
        Hp({ context: t, bitmapSize: i, horizontalPixelRatio: s }) {
            if (null === this.pp || null === this.Yi || !this.Yi.N().borderVisible) return; t.fillStyle = this.Yi.N().borderColor; const e = Math.max(1, Math.floor(this.Bp().S * s));
            let h; h = this.Cp ? i.width - e : 0, t.fillRect(h, 0, e, i.height)
        }
        $p(t) {
            if (null === this.pp || null === this.Yi) return; const i = this.Yi.Va(), s = this.Yi.N(), e = this.Bp(), h = this.Cp ? this.pp.width - e.C : 0; s.borderVisible && s.ticksVisible && t.useBitmapCoordinateSpace((({ context: t, horizontalPixelRatio: n, verticalPixelRatio: r }) => {
                t.fillStyle = s.borderColor;
                const o = Math.max(1, Math.floor(r)), l = Math.floor(.5 * r), a = Math.round(e.C * n); t.beginPath(); for (const s of i) t.rect(Math.floor(h * n), Math.round(s.Pa * r) - l, a, o); t.fill()
            })), t.useMediaCoordinateSpace((({ context: t }) => {
                t.font = this.Ep(), t.fillStyle = s.textColor ?? this.ul.textColor, t.textAlign = this.Cp ? "right" : "left", t.textBaseline = "middle"; const n = this.Cp ? Math.round(h - e.I) : Math.round(h + e.C + e.I), r = i.map((i => this.mp.Di(t, i.$a)));
                for (let s = i.length; s--;) { const e = i[s]; t.fillText(e.$a, n, e.Pa + r[s]) }
            }))
        }
        Wp() {
            if (null === this.pp || null === this.Yi) return;
            let t = this.pp.height / 2;
            const i = [], s = this.Yi.Dt().slice(), e = this.yt.Of(), h = this.Bp();
            this.Yi === e.$n() && this.yt.Of().Dt().forEach((t => { e.Un(t) && s.push(t) }));
            const n = this.Yi.ba()[0], r = this.Yi; s.forEach((s => {
                const h = s.Fs(e, r);
                h.forEach((t => { t.Fi(null), t.Hi() && i.push(t) })), n === s && h.length > 0 && (t = h[0].Bi())
            })), i.forEach((t => t.Fi(t.Bi()))); this.Yi.N().alignLabels && this.Kp(i, h, t)
        }
        Kp(t, i, s) { if (null === this.pp) return; const e = t.filter((t => t.Bi() <= s)), h = t.filter((t => t.Bi() > s)); e.sort(((t, i) => i.Bi() - t.Bi())), e.length && h.length && h.push(e[0]), h.sort(((t, i) => t.Bi() - i.Bi())); for (const s of t) { const t = Math.floor(s.$t(i) / 2), e = s.Bi(); e > -t && e < t && s.Fi(t), e > this.pp.height - t && e < this.pp.height + t && s.Fi(this.pp.height - t) } _s(e, 1, this.pp.height, i), _s(h, -1, this.pp.height, i) } qp(t) {
            if (null === this.pp) return;
            const i = this.zp(), s = this.Bp(), e = this.Cp ? "right" : "left"; i.forEach((i => { if (i.Ui()) { i.Tt(c(this.Yi)).nt(t, s, this.mp, e) } }))
        }
        Yp(t) { if (null === this.pp || null === this.Yi) return; const i = this.yt.xp().Qt(), s = [], e = this.yt.Of(), h = i.$u().Fs(e, this.Yi); h.length && s.push(h); const n = this.Bp(), r = this.Cp ? "right" : "left"; s.forEach((i => { i.forEach((i => { i.Tt(c(this.Yi)).nt(t, n, this.mp, r) })) })) }
        jp(t) { this.Cf.style.cursor = 1 === t ? "ns-resize" : "default" }
        il() { const t = this.Ap(); this.gp < t && this.yt.xp().Qt().Bh(), this.gp = t }
        Ep() { return x(this.ul.fontSize, this.ul.fontFamily) }
    }
    function Ts(t, i) { return t.Jh?.(i) ?? [] }
    function ks(t, i) { return t.Ws?.(i) ?? [] }
    function Rs(t, i) { return t.us?.(i) ?? [] }
    function Ps(t, i) { return t.Xh?.(i) ?? [] }
    class Ys {
        constructor(i, s) {
            this.pp = t({ width: 0, height: 0 }), this.Xp = null, this.Zp = null, this.Gp = null, this.Jp = null, this.Qp = !1, this.tv = new f, this.iv = new f, this.sv = 0, this.nv = !1, this.ev = null, this.rv = !1, this.hv = null, this.av = null, this.Mp = !1, this.bp = () => { this.Mp || null === this.lv || this.ts().ar() }, this.Sp = () => { this.Mp || null === this.lv || this.ts().ar() }, this.lp = i, this.lv = s, this.lv.Eo().i(this.ov.bind(this), this, !0), this._v = document.createElement("td"), this._v.style.padding = "0", this._v.style.position = "relative"; const e = document.createElement("div"); e.style.width = "100%", e.style.height = "100%", e.style.position = "relative", e.style.overflow = "hidden", this.uv = document.createElement("td"), this.uv.style.padding = "0", this.cv = document.createElement("td"), this.cv.style.padding = "0", this._v.appendChild(e), this.Tp = vs(e, t({ width: 16, height: 16 })), this.Tp.subscribeSuggestedBitmapSizeChanged(this.bp); const h = this.Tp.canvasElement; h.style.position = "absolute", h.style.zIndex = "1", h.style.left = "0", h.style.top = "0", this.Rp = vs(e, t({ width: 16, height: 16 })), this.Rp.subscribeSuggestedBitmapSizeChanged(this.Sp); const n = this.Rp.canvasElement; n.style.position = "absolute", n.style.zIndex = "2", n.style.left = "0", n.style.top = "0", this.Sf = document.createElement("tr"), this.Sf.appendChild(this.uv), this.Sf.appendChild(this._v), this.Sf.appendChild(this.cv), this.dv(), this.vf = new os(this.Rp.canvasElement, this,
                { Od: () => null === this.ev && !this.lp.N().handleScroll.vertTouchDrag, Nd: () => null === this.ev && !this.lp.N().handleScroll.horzTouchDrag })
        }
        m() { null !== this.Xp && this.Xp.m(), null !== this.Zp && this.Zp.m(), this.Gp = null, this.Rp.unsubscribeSuggestedBitmapSizeChanged(this.Sp), Ms(this.Rp.canvasElement), this.Rp.dispose(), this.Tp.unsubscribeSuggestedBitmapSizeChanged(this.bp), Ms(this.Tp.canvasElement), this.Tp.dispose(), null !== this.lv && (this.lv.Eo().u(this), this.lv.m()), this.vf.m() }
        Of() { return c(this.lv) }
        fv(t) { null !== this.lv && this.lv.Eo().u(this), this.lv = t, null !== this.lv && this.lv.Eo().i(Ys.prototype.ov.bind(this), this, !0), this.dv(), this.lp.bf().indexOf(this) === this.lp.bf().length - 1 ? (this.Gp = this.Gp ?? new ws(this._v, this.lp), this.Gp.Pt()) : (this.Gp?._p(), this.Gp = null) }
        xp() { return this.lp }
        kf() { return this.Sf }
        dv() {
            if (null !== this.lv && (this.pv(), 0 !== this.ts().js().length)) {
                if (null !== this.Xp) { const t = this.lv.xo(); this.Xp._s(c(t)) }
                if (null !== this.Zp) { const t = this.lv.So(); this.Zp._s(c(t)) }
            }
        } vv() { null !== this.Xp && this.Xp.Pt(), null !== this.Zp && this.Zp.Pt() }
        fo() { return null !== this.lv ? this.lv.fo() : 0 }
        po(t) { this.lv && this.lv.po(t) }
        Bd(t) { if (!this.lv) return; this.mv(); const i = t.localX, s = t.localY; this.wv(i, s, t) } Jd(t) { this.mv(), this.gv(), this.wv(t.localX, t.localY, t) }
        Ad(t) { if (!this.lv) return; this.mv(); const i = t.localX, s = t.localY; this.wv(i, s, t) }
        jd(t) { null !== this.lv && (this.mv(), this.Mv(t)) }
        Pd(t) { null !== this.lv && this.bv(this.iv, t) }
        xd(t) { this.Pd(t) }
        Hd(t) { this.mv(), this.xv(t), this.wv(t.localX, t.localY, t) }
        Yd(t) { null !== this.lv && (this.mv(), this.nv = !1, this.Sv(t)) }
        qd(t) { null !== this.lv && this.Mv(t) }
        _f(t) { if (this.nv = !0, null === this.ev) { const i = { x: t.localX, y: t.localY }; this.Cv(i, i, t) } }
        lf(t) { null !== this.lv && (this.mv(), this.lv.Qt().Fu(null), this.yv()) }
        Pv() { return this.tv }
        kv() { return this.iv }
        sf() { this.sv = 1, this.ts().hn() }
        nf(t, i) { if (!this.lp.N().handleScale.pinch) return; const s = 5 * (i - this.sv); this.sv = i, this.ts().Ju(t._t, s) }
        Zd(t) { this.nv = !1, this.rv = null !== this.ev, this.gv(); const i = this.ts().$u(); null !== this.ev && i.Vt() && (this.hv = { x: i.si(), y: i.ni() }, this.ev = { x: t.localX, y: t.localY }) }
        Wd(t) { if (null === this.lv) return; const i = t.localX, s = t.localY; if (null === this.ev) this.xv(t); else { this.rv = !1; const e = c(this.hv), h = e.x + (i - this.ev.x), n = e.y + (s - this.ev.y); this.wv(h, n, t) } }
        $d(t) { 0 === this.xp().N().trackingMode.exitMode && (this.rv = !0), this.Tv(), this.Sv(t) }
        jn(t, i) { const s = this.lv; return null === s ? null : _i(s, t, i) }
        Rv(i, s) { c("left" === s ? this.Xp : this.Zp).Lp(t({ width: i, height: this.pp.height })) }
        Tf() { return this.pp }
        Lp(t) { i(this.pp, t) || (this.pp = t, this.Mp = !0, this.Tp.resizeCanvasElement(t), this.Rp.resizeCanvasElement(t), this.Mp = !1, this._v.style.width = t.width + "px", this._v.style.height = t.height + "px") }
        Dv() {
            const t = c(this.lv); t.bo(t.xo()), t.bo(t.So());
            for (const i of t.ba()) if (t.Un(i)) { const s = i.Wt(); null !== s && t.bo(s), i.Ns() } for (const i of t.Lo()) i.Ns()
        }
        Rf() { return this.Tp.bitmapSize }
        Df(t, i, s) { const e = this.Rf(); e.width > 0 && e.height > 0 && t.drawImage(this.Tp.canvasElement, i, s) }
        Np(t) {
            if (0 === t) return; if (null === this.lv) return; t > 1 && this.Dv(), null !== this.Xp && this.Xp.Np(t), null !== this.Zp && this.Zp.Np(t);
            const i = { colorSpace: this.lp.N().layout.colorSpace }; if (1 !== t) {
                this.Tp.applySuggestedBitmapSize();
                const t = s(this.Tp, i); null !== t && (t.useBitmapCoordinateSpace((t => { this.Fp(t) })), this.lv && (this.Vv(t, Ts), this.Iv(t), this.Vv(t, ks), this.Vv(t, Rs)))
            } this.Rp.applySuggestedBitmapSize(); const e = s(this.Rp, i); null !== e && (e.useBitmapCoordinateSpace((({ context: t, bitmapSize: i }) => { t.clearRect(0, 0, i.width, i.height) })), this.Bv(e), this.Vv(e, Ps), this.Vv(e, Rs))
        }
        Av() { return this.Xp }
        Ev() { return this.Zp }
        Up(t, i) { this.Vv(t, i) }
        ov() { null !== this.lv && this.lv.Eo().u(this), this.lv = null }
        Mv(t) { this.bv(this.tv, t) }
        bv(t, i) { const s = i.localX, e = i.localY; t.v() && t.p(this.ts().At().Y_(s), { x: s, y: e }, i) }
        Fp({ context: t, bitmapSize: i }) { const { width: s, height: e } = i, h = this.ts(), n = h.$(), r = h.Mc(); n === r ? A(t, 0, 0, s, e, r) : O(t, 0, 0, s, e, n, r) }
        Iv(t) { const i = c(this.lv), s = i.zo().lr().Tt(i); null !== s && s.nt(t, !1) }
        Bv(t) { this.zv(t, ks, ys, this.ts().$u()) }
        Vv(t, i) {
            const s = c(this.lv), e = s.Dt(), h = s.Lo();
            for (const s of h) this.zv(t, i, bs, s);
            for (const s of e) this.zv(t, i, bs, s); for (const s of h) this.zv(t, i, ys, s);
            for (const s of e) this.zv(t, i, ys, s)
        }
        zv(t, i, s, e) { const h = c(this.lv), n = h.Qt().Wu(), r = null !== n && n.Oo === e, o = null !== n && r && void 0 !== n.No ? n.No.Xn : void 0; Ss(i, (i => s(i, t, r, o)), e, h) }
        pv() {
            if (null === this.lv) return;
            const t = this.lp, i = this.lv.xo().N().visible, s = this.lv.So().N().visible; i || null === this.Xp || (this.uv.removeChild(this.Xp.kf()), this.Xp.m(), this.Xp = null), s || null === this.Zp || (this.cv.removeChild(this.Zp.kf()), this.Zp.m(), this.Zp = null); const e = t.Qt()._c(); i && null === this.Xp && (this.Xp = new Cs(this, t.N(), e, "left"), this.uv.appendChild(this.Xp.kf())), s && null === this.Zp && (this.Zp = new Cs(this, t.N(), e, "right"), this.cv.appendChild(this.Zp.kf()))
        }
        Lv(t) { return t.uf && this.nv || null !== this.ev }
        Ov(t) { return Math.max(0, Math.min(t, this.pp.width - 1)) }
        Nv(t) { return Math.max(0, Math.min(t, this.pp.height - 1)) }
        wv(t, i, s) { this.ts().hc(this.Ov(t), this.Nv(i), s, c(this.lv)) }
        yv() { this.ts().lc() }
        Tv() { this.rv && (this.ev = null, this.yv()) }
        Cv(t, i, s) { this.ev = t, this.rv = !1, this.wv(i.x, i.y, s); const e = this.ts().$u(); this.hv = { x: e.si(), y: e.ni() } }
        ts() { return this.lp.Qt() }
        Sv(t) {
            if (!this.Qp) return; const i = this.ts(), s = this.Of();
            if (i.Ro(s, s.ks()), this.Jp = null, this.Qp = !1, i.nc(), null !== this.av) { const t = performance.now(), s = i.At(); this.av.le(s.Q_(), t), this.av.ou(t) || i._n(this.av) }
        }
        mv() { this.ev = null }
        gv() { if (!this.lv) return; if (this.ts().hn(), document.activeElement !== document.body && document.activeElement !== document.documentElement) c(document.activeElement).blur(); else { const t = document.getSelection(); null !== t && t.removeAllRanges() } !this.lv.ks().Ki() && this.ts().At().Ki() }
        xv(t) {
            if (null === this.lv) return; const i = this.ts(), s = i.At(); if (s.Ki()) return; const e = this.lp.N(), h = e.handleScroll, n = e.kineticScroll; if ((!h.pressedMouseMove || t.uf) && (!h.horzTouchDrag && !h.vertTouchDrag || !t.uf)) return;
            const r = this.lv.ks(), o = performance.now(); if (null !== this.Jp || this.Lv(t) || (this.Jp = { x: t.clientX, y: t.clientY, Ec: o, Wv: t.localX, Fv: t.localY }), null !== this.Jp && !this.Qp && (this.Jp.x !== t.clientX || this.Jp.y !== t.clientY)) {
                if (t.uf && n.touch || !t.uf && n.mouse) { const t = s.G_(); this.av = new gs(.2 / t, 7 / t, .997, 15 / t), this.av.sp(s.Q_(), this.Jp.Ec) } else this.av = null; r.Ki() || i.ko(this.lv, r, t.localY), i.tc(t.localX), this.Qp = !0
            } this.Qp && (r.Ki() || i.To(this.lv, r, t.localY), i.sc(t.localX), null !== this.av && this.av.sp(s.Q_(), o))
        }
    }
    class Ns {
        constructor(i, s, e, h, n) { this.St = !0, this.pp = t({ width: 0, height: 0 }), this.bp = () => this.Np(3), this.Cp = "left" === i, this.Iu = e._c, this.ys = s, this.Hv = h, this.Uv = n, this.Cf = document.createElement("div"), this.Cf.style.width = "25px", this.Cf.style.height = "100%", this.Cf.style.overflow = "hidden", this.Tp = vs(this.Cf, t({ width: 16, height: 16 })), this.Tp.subscribeSuggestedBitmapSizeChanged(this.bp) }
        m() { this.Tp.unsubscribeSuggestedBitmapSizeChanged(this.bp), Ms(this.Tp.canvasElement), this.Tp.dispose() }
        kf() { return this.Cf }
        Tf() { return this.pp }
        Lp(t) { i(this.pp, t) || (this.pp = t, this.Tp.resizeCanvasElement(t), this.Cf.style.width = `${t.width}px`, this.Cf.style.height = `${t.height}px`, this.St = !0) }
        Np(t) { if (t < 3 && !this.St) return; if (0 === this.pp.width || 0 === this.pp.height) return; this.St = !1, this.Tp.applySuggestedBitmapSize(); const i = s(this.Tp, { colorSpace: this.ys.layout.colorSpace }); null !== i && i.useBitmapCoordinateSpace((t => { this.Fp(t), this.Hp(t) })) }
        Rf() { return this.Tp.bitmapSize }
        Df(t, i, s) { const e = this.Rf(); e.width > 0 && e.height > 0 && t.drawImage(this.Tp.canvasElement, i, s) }
        Hp({ context: t, bitmapSize: i, horizontalPixelRatio: s, verticalPixelRatio: e }) { if (!this.Hv()) return; t.fillStyle = this.ys.timeScale.borderColor; const h = Math.floor(this.Iu.N().S * s), n = Math.floor(this.Iu.N().S * e), r = this.Cp ? i.width - h : 0; t.fillRect(r, 0, h, n) }
        Fp({ context: t, bitmapSize: i }) { A(t, 0, 0, i.width, i.height, this.Uv()) }
    } function zs(t) { return i => i.ia?.(t) ?? [] } const Es = zs("normal"), Vs = zs("top"), Fs = zs("bottom");
    class Bs {
        constructor(i, s) {
            this.$v = null, this.qv = null, this.M = null, this.Yv = !1, this.pp = t({ width: 0, height: 0 }), this.jv = new f, this.mp = new ht(5), this.Mp = !1, this.bp = () => { this.Mp || this.lp.Qt().ar() }, this.Sp = () => { this.Mp || this.lp.Qt().ar() }, this.lp = i, this.$o = s, this.ys = i.N().layout, this.ep = document.createElement("tr"), this.Kv = document.createElement("td"), this.Kv.style.padding = "0", this.Xv = document.createElement("td"), this.Xv.style.padding = "0", this.Cf = document.createElement("td"), this.Cf.style.height = "25px", this.Cf.style.padding = "0", this.Zv = document.createElement("div"), this.Zv.style.width = "100%", this.Zv.style.height = "100%", this.Zv.style.position = "relative", this.Zv.style.overflow = "hidden", this.Cf.appendChild(this.Zv), this.Tp = vs(this.Zv, t({ width: 16, height: 16 })), this.Tp.subscribeSuggestedBitmapSizeChanged(this.bp); const e = this.Tp.canvasElement; e.style.position = "absolute", e.style.zIndex = "1", e.style.left = "0", e.style.top = "0", this.Rp = vs(this.Zv, t({ width: 16, height: 16 })), this.Rp.subscribeSuggestedBitmapSizeChanged(this.Sp); const h = this.Rp.canvasElement; h.style.position = "absolute", h.style.zIndex = "2", h.style.left = "0", h.style.top = "0", this.ep.appendChild(this.Kv), this.ep.appendChild(this.Cf), this.ep.appendChild(this.Xv), this.Gv(), this.lp.Qt().do().i(this.Gv.bind(this), this), this.vf = new os(this.Rp.canvasElement, this, { Od: () => !0, Nd: () => !this.lp.N().handleScroll.horzTouchDrag })
        }
        m() { this.vf.m(), null !== this.$v && this.$v.m(), null !== this.qv && this.qv.m(), this.Rp.unsubscribeSuggestedBitmapSizeChanged(this.Sp), Ms(this.Rp.canvasElement), this.Rp.dispose(), this.Tp.unsubscribeSuggestedBitmapSizeChanged(this.bp), Ms(this.Tp.canvasElement), this.Tp.dispose() }
        kf() { return this.ep }
        Jv() { return this.$v }
        Qv() { return this.qv }
        Jd(t) { if (this.Yv) return; this.Yv = !0; const i = this.lp.Qt(); !i.At().Ki() && this.lp.N().handleScale.axisPressedMouseMove.time && i.Gu(t.localX) }
        Zd(t) { this.Jd(t) }
        Qd() { const t = this.lp.Qt(); !t.At().Ki() && this.Yv && (this.Yv = !1, this.lp.N().handleScale.axisPressedMouseMove.time && t.rc()) }
        Hd(t) { const i = this.lp.Qt(); !i.At().Ki() && this.lp.N().handleScale.axisPressedMouseMove.time && i.ec(t.localX) }
        Wd(t) { this.Hd(t) }
        Yd() { this.Yv = !1; const t = this.lp.Qt(); t.At().Ki() && !this.lp.N().handleScale.axisPressedMouseMove.time || t.rc() }
        $d() { this.Yd() }
        Pd() { this.lp.N().handleScale.axisDoubleClickReset.time && this.lp.Qt().cn() }
        xd() { this.Pd() }
        Bd() { this.lp.Qt().N().handleScale.axisPressedMouseMove.time && this.jp(1) }
        lf() { this.jp(0) }
        Tf() { return this.pp }
        tm() { return this.jv }
        im(s, e, h) { i(this.pp, s) || (this.pp = s, this.Mp = !0, this.Tp.resizeCanvasElement(s), this.Rp.resizeCanvasElement(s), this.Mp = !1, this.Cf.style.width = `${s.width}px`, this.Cf.style.height = `${s.height}px`, this.jv.p(s)), null !== this.$v && this.$v.Lp(t({ width: e, height: s.height })), null !== this.qv && this.qv.Lp(t({ width: h, height: s.height })) }
        sm() { const t = this.nm(); return Math.ceil(t.S + t.C + t.P + t.A + t.V + t.rm) }
        Pt() { this.lp.Qt().At().Va() }
        Rf() { return this.Tp.bitmapSize }
        Df(t, i, s) { const e = this.Rf(); e.width > 0 && e.height > 0 && t.drawImage(this.Tp.canvasElement, i, s) }
        Np(t) {
            if (0 === t) return;
            const i = { colorSpace: this.ys.colorSpace };
            if (1 !== t) {
                this.Tp.applySuggestedBitmapSize(); const e = s(this.Tp, i); null !== e && (e.useBitmapCoordinateSpace((t => { this.Fp(t), this.Hp(t), this.hm(e, Fs) })), this.$p(e), this.hm(e, Es)), null !== this.$v && this.$v.Np(t), null !== this.qv && this.qv.Np(t)
            }
            this.Rp.applySuggestedBitmapSize();
            const e = s(this.Rp, i); null !== e && (e.useBitmapCoordinateSpace((({ context: t, bitmapSize: i }) => { t.clearRect(0, 0, i.width, i.height) })), this.am([...this.lp.Qt().js(), this.lp.Qt().$u()], e), this.hm(e, Vs))
        }
        hm(t, i) { const s = this.lp.Qt().js(); for (const e of s) Ss(i, (i => bs(i, t, !1, void 0)), e, void 0); for (const e of s) Ss(i, (i => ys(i, t, !1, void 0)), e, void 0) }
        Fp({ context: t, bitmapSize: i }) { A(t, 0, 0, i.width, i.height, this.lp.Qt().Mc()) }
        Hp({ context: t, bitmapSize: i, verticalPixelRatio: s }) { if (this.lp.N().timeScale.borderVisible) { t.fillStyle = this.lm(); const e = Math.max(1, Math.floor(this.nm().S * s)); t.fillRect(0, 0, i.width, e) } }
        $p(t) {
            const i = this.lp.Qt().At(), s = i.Va(); if (!s || 0 === s.length) return;
            const e = this.$o.maxTickMarkWeight(s), h = this.nm(), n = i.N(); n.borderVisible && n.ticksVisible && t.useBitmapCoordinateSpace((({ context: t, horizontalPixelRatio: i, verticalPixelRatio: e }) => {
                t.strokeStyle = this.lm(), t.fillStyle = this.lm();
                const n = Math.max(1, Math.floor(i)), r = Math.floor(.5 * i); t.beginPath(); const o = Math.round(h.C * e);
                for (let e = s.length; e--;) { const h = Math.round(s[e].coord * i); t.rect(h - r, 0, n, o) } t.fill()
            })), t.useMediaCoordinateSpace((({ context: t }) => {
                const i = h.S + h.C + h.A + h.P / 2; t.textAlign = "center", t.textBaseline = "middle", t.fillStyle = this.H(), t.font = this.Ep();
                for (const h of s) if (h.weight < e) { const s = h.needAlignCoordinate ? this.om(t, h.coord, h.label) : h.coord; t.fillText(h.label, s, i) }
                this.lp.N().timeScale.allowBoldLabels && (t.font = this._m());
                for (const h of s) if (h.weight >= e) { const s = h.needAlignCoordinate ? this.om(t, h.coord, h.label) : h.coord; t.fillText(h.label, s, i) }
            }))
        }
        om(t, i, s) { const e = this.mp.Vi(t, s), h = e / 2, n = Math.floor(i - h) + .5; return n < 0 ? i += Math.abs(0 - n) : n + e > this.pp.width && (i -= Math.abs(this.pp.width - (n + e))), i }
        am(t, i) { const s = this.nm(); for (const e of t) for (const t of e.cs()) t.Tt().nt(i, s) }
        lm() { return this.lp.N().timeScale.borderColor }
        H() { return this.ys.textColor }
        W() { return this.ys.fontSize }
        Ep() { return x(this.W(), this.ys.fontFamily) }
        _m() { return x(this.W(), this.ys.fontFamily, "bold") }
        nm() { null === this.M && (this.M = { S: 1, L: NaN, A: NaN, V: NaN, Ji: NaN, C: 5, P: NaN, k: "", Gi: new ht, rm: 0 }); const t = this.M, i = this.Ep(); if (t.k !== i) { const s = this.W(); t.P = s, t.k = i, t.A = 3 * s / 12, t.V = 3 * s / 12, t.Ji = 9 * s / 12, t.L = 0, t.rm = 4 * s / 12, t.Gi.In() } return this.M }
        jp(t) { this.Cf.style.cursor = 1 === t ? "ew-resize" : "default" }
        Gv() { const t = this.lp.Qt(), i = t.N(); i.leftPriceScale.visible || null === this.$v || (this.Kv.removeChild(this.$v.kf()), this.$v.m(), this.$v = null), i.rightPriceScale.visible || null === this.qv || (this.Xv.removeChild(this.qv.kf()), this.qv.m(), this.qv = null); const s = { _c: this.lp.Qt()._c() }, e = () => i.leftPriceScale.borderVisible && t.At().N().borderVisible, h = () => t.Mc(); i.leftPriceScale.visible && null === this.$v && (this.$v = new Ns("left", i, s, e, h), this.Kv.appendChild(this.$v.kf())), i.rightPriceScale.visible && null === this.qv && (this.qv = new Ns("right", i, s, e, h), this.Xv.appendChild(this.qv.kf())) }
    }
    const As = !!ss && !!navigator.userAgentData && navigator.userAgentData.brands.some((t => t.brand.includes("Chromium"))) && !!ss && (navigator?.userAgentData?.platform ? "Windows" === navigator.userAgentData.platform : navigator.userAgent.toLowerCase().indexOf("win") >= 0);
    class Ls {
        constructor(t, i, s) {
            var e; this.um = [], this.dm = [], this.fm = 0, this.ja = 0, this.no = 0, this.pm = 0, this.vm = 0, this.wm = null, this.gm = !1, this.tv = new f, this.iv = new f, this.Ru = new f, this.Mm = null, this.bm = null, this.ap = t, this.ys = i, this.$o = s, this.ep = document.createElement("div"), this.ep.classList.add("tv-lightweight-charts"), this.ep.style.overflow = "hidden", this.ep.style.direction = "ltr", this.ep.style.width = "100%", this.ep.style.height = "100%", (e = this.ep).style.userSelect = "none", e.style.webkitUserSelect = "none", e.style.msUserSelect = "none", e.style.MozUserSelect = "none", e.style.webkitTapHighlightColor = "transparent", this.xm = document.createElement("table"), this.xm.setAttribute("cellspacing", "0"), this.ep.appendChild(this.xm), this.Sm = this.Cm.bind(this), Ws(this.ys) && this.ym(!0), this.ts = new Ai(this.Vu.bind(this), this.ys, s), this.Qt().qu().i(this.Pm.bind(this), this), this.km = new Bs(this, this.$o), this.xm.appendChild(this.km.kf()); const h = i.autoSize && this.Tm(); let n = this.ys.width, r = this.ys.height;
            if (h || 0 === n || 0 === r) { const i = t.getBoundingClientRect(); n = n || i.width, r = r || i.height } this.Rm(n, r), this.Dm(), t.appendChild(this.ep), this.Vm(), this.ts.At().du().i(this.ts.Bh.bind(this.ts), this), this.ts.do().i(this.ts.Bh.bind(this.ts), this)
        }
        Qt() { return this.ts }
        N() { return this.ys }
        bf() { return this.um }
        Im() { return this.km }
        m() {
            this.ym(!1), 0 !== this.fm && window.cancelAnimationFrame(this.fm), this.ts.qu().u(this), this.ts.At().du().u(this), this.ts.do().u(this), this.ts.m(); for (const t of this.um) this.xm.removeChild(t.kf()), t.Pv().u(this), t.kv().u(this), t.m(); this.um = [];
            for (const t of this.dm) this.Bm(t); this.dm = [], c(this.km).m(), null !== this.ep.parentElement && this.ep.parentElement.removeChild(this.ep), this.Ru.m(), this.tv.m(), this.iv.m(), this.Am()
        }
        Rm(i, s, e = !1) {
            if (this.ja === s && this.no === i) return;
            const h = function (i) {
                const s = Math.floor(i.width), e = Math.floor(i.height); return t({ width: s - s % 2, height: e - e % 2 })
            }(t({ width: i, height: s })); this.ja = h.height, this.no = h.width; const n = this.ja + "px", r = this.no + "px"; c(this.ep).style.height = n, c(this.ep).style.width = r, this.xm.style.height = n, this.xm.style.width = r, e ? this.Em(K.gn(), performance.now()) : this.ts.Bh()
        }
        Np(t) {
            void 0 === t && (t = K.gn());
            for (let i = 0; i < this.um.length; i++)this.um[i].Np(t.en(i).tn); this.ys.timeScale.visible && this.km.Np(t.nn())
        }
        hr(t) { const i = Ws(this.ys); this.ts.hr(t); const s = Ws(this.ys); s !== i && this.ym(s), t.layout?.panes && this.zm(), this.Vm(), this.Lm(t) }
        Pv() { return this.tv } kv() { return this.iv }
        qu() { return this.Ru }
        Om() { null !== this.wm && (this.Em(this.wm, performance.now()), this.wm = null); const t = this.Nm(null), i = document.createElement("canvas"); i.width = t.width, i.height = t.height; const s = c(i.getContext("2d")); return this.Nm(s), i }
        Wm(t) {
            if ("left" === t && !this.Fm()) return 0;
            if ("right" === t && !this.Hm()) return 0; if (0 === this.um.length) return 0; return c("left" === t ? this.um[0].Av() : this.um[0].Ev()).Op()
        }
        Um() { return this.ys.autoSize && null !== this.Mm }
        If() { return this.ep }
        $m(t) { this.bm = t, this.bm ? this.If().style.setProperty("cursor", t) : this.If().style.removeProperty("cursor") }
        qm() { return this.bm }
        Ym(t) { return u(this.um[t]).Tf() }
        zm() { this.dm.forEach((t => { t.Pt() })) }
        Lm(t) { (void 0 !== t.autoSize || !this.Mm || void 0 === t.width && void 0 === t.height) && (t.autoSize && !this.Mm && this.Tm(), !1 === t.autoSize && null !== this.Mm && this.Am(), t.autoSize || void 0 === t.width && void 0 === t.height || this.Rm(t.width || this.no, t.height || this.ja)) }
        Nm(i) {
            let s = 0, e = 0; const h = this.um[0], n = (t, s) => {
                let e = 0;
                for (let h = 0; h < this.um.length; h++) {
                    const n = this.um[h], r = c("left" === t ? n.Av() : n.Ev()), o = r.Rf();
                    if (null !== i && r.Df(i, s, e), e += o.height, h < this.um.length - 1) { const t = this.dm[h], n = t.Rf(); null !== i && t.Df(i, s, e), e += n.height }
                }
            };
            if (this.Fm()) { n("left", 0); s += c(h.Av()).Rf().width } for (let t = 0; t < this.um.length; t++) {
                const h = this.um[t], n = h.Rf();
                if (null !== i && h.Df(i, s, e), e += n.height, t < this.um.length - 1) { const h = this.dm[t], n = h.Rf(); null !== i && h.Df(i, s, e), e += n.height }
            }
            if (s += h.Rf().width, this.Hm()) { n("right", s); s += c(h.Ev()).Rf().width } const r = (t, s, e) => { c("left" === t ? this.km.Jv() : this.km.Qv()).Df(c(i), s, e) };
            if (this.ys.timeScale.visible) {
                const t = this.km.Rf();
                if (null !== i) { let s = 0; this.Fm() && (r("left", s, e), s = c(h.Av()).Rf().width), this.km.Df(i, s, e), s += t.width, this.Hm() && r("right", s, e) } e += t.height
            } return t({ width: s, height: e })
        }
        jm() {
            let i = 0, s = 0, e = 0;
            for (const t of this.um) this.Fm() && (s = Math.max(s, c(t.Av()).Ap(), this.ys.leftPriceScale.minimumWidth)), this.Hm() && (e = Math.max(e, c(t.Ev()).Ap(), this.ys.rightPriceScale.minimumWidth)), i += t.fo(); s = ns(s), e = ns(e); const h = this.no, n = this.ja, r = Math.max(h - s - e, 0), o = 1 * this.dm.length, l = this.ys.timeScale.visible; let a = l ? Math.max(this.km.sm(), this.ys.timeScale.minimumHeight) : 0; var u; a = (u = a) + u % 2; const d = o + a, f = n < d ? 0 : n - d, p = f / i; let m = 0; const g = window.devicePixelRatio || 1;
            for (let i = 0; i < this.um.length; ++i) { const h = this.um[i]; h.fv(this.ts.$s()[i]); let n = 0, o = 0; o = i === this.um.length - 1 ? Math.ceil((f - m) * g) / g : Math.round(h.fo() * p * g) / g, n = Math.max(o, 2), m += n, h.Lp(t({ width: r, height: n })), this.Fm() && h.Rv(s, "left"), this.Hm() && h.Rv(e, "right"), h.Of() && this.ts.Yu(h.Of(), n) } this.km.im(t({ width: l ? r : 0, height: a }), l ? s : 0, l ? e : 0), this.ts.vo(r), this.pm !== s && (this.pm = s), this.vm !== e && (this.vm = e)
        }
        ym(t) { t ? this.ep.addEventListener("wheel", this.Sm, { passive: !1 }) : this.ep.removeEventListener("wheel", this.Sm) }
        Km(t) { switch (t.deltaMode) { case t.DOM_DELTA_PAGE: return 120; case t.DOM_DELTA_LINE: return 32 }return As ? 1 / window.devicePixelRatio : 1 }
        Cm(t) {
            if (!(0 !== t.deltaX && this.ys.handleScroll.mouseWheel || 0 !== t.deltaY && this.ys.handleScale.mouseWheel)) return; const i = this.Km(t), s = i * t.deltaX / 100, e = -i * t.deltaY / 100;
            if (t.cancelable && t.preventDefault(), 0 !== e && this.ys.handleScale.mouseWheel) { const i = Math.sign(e) * Math.min(1, Math.abs(e)), s = t.clientX - this.ep.getBoundingClientRect().left; this.Qt().Ju(s, i) } 0 !== s && this.ys.handleScroll.mouseWheel && this.Qt().Qu(-80 * s)
        }
        Em(t, i) { const s = t.nn(); 3 === s && this.Xm(), 3 !== s && 2 !== s || (this.Zm(t), this.Gm(t, i), this.km.Pt(), this.um.forEach((t => { t.vv() })), 3 === this.wm?.nn() && (this.wm.vn(t), this.Xm(), this.Zm(this.wm), this.Gm(this.wm, i), t = this.wm, this.wm = null)), this.Np(t) }
        Gm(t, i) {
            for (const s of t.pn()) this.mn(s, i)
        }
        Zm(t) { const i = this.ts.$s(); for (let s = 0; s < i.length; s++)t.en(s).sn && i[s].Io() }
        mn(t, i) { const s = this.ts.At(); switch (t.an) { case 0: s.pu(); break; case 1: s.vu(t.Ft); break; case 2: s.dn(t.Ft); break; case 3: s.fn(t.Ft); break; case 4: s.su(); break; case 5: t.Ft.ou(i) || s.fn(t.Ft._u(i)) } } Vu(t) { null !== this.wm ? this.wm.vn(t) : this.wm = t, this.gm || (this.gm = !0, this.fm = window.requestAnimationFrame((t => { if (this.gm = !1, this.fm = 0, null !== this.wm) { const i = this.wm; this.wm = null, this.Em(i, t); for (const s of i.pn()) if (5 === s.an && !s.Ft.ou(t)) { this.Qt()._n(s.Ft); break } } }))) }
        Xm() { this.Dm() }
        Bm(t) { this.xm.removeChild(t.kf()), t.m() } Dm() {
            const t = this.ts.$s(), i = t.length, s = this.um.length;
            for (let t = i; t < s; t++) { const t = u(this.um.pop()); this.xm.removeChild(t.kf()), t.Pv().u(this), t.kv().u(this), t.m(); const i = this.dm.pop(); void 0 !== i && this.Bm(i) }
            for (let e = s; e < i; e++) {
                const i = new Ys(this, t[e]); if (i.Pv().i(this.Jm.bind(this, i), this), i.kv().i(this.Qm.bind(this, i), this), this.um.push(i), e > 0) {
                    const t = new fs(this, e - 1, e);
                    this.dm.push(t), this.xm.insertBefore(t.kf(), this.km.kf())
                }
                this.xm.insertBefore(i.kf(), this.km.kf())
            } for (let s = 0; s < i; s++) { const i = t[s], e = this.um[s]; e.Of() !== i ? e.fv(i) : e.dv() } this.Vm(), this.jm()
        }
        tw(t, i, s, e) {
            const h = new Map;
            if (null !== t) { this.ts.js().forEach((i => { const s = i.Xs().Wr(t); null !== s && h.set(i, s) })) } let n;
            if (null !== t) { const i = this.ts.At().ss(t)?.originalTime; void 0 !== i && (n = i) }
            const r = this.Qt().Wu(), o = null !== r && r.Oo instanceof Jt ? r.Oo : void 0, l = null !== r && void 0 !== r.No ? r.No.Kn : void 0, a = this.iw(e); return { sw: n, Re: t ?? void 0, nw: i ?? void 0, ew: -1 !== a ? a : void 0, rw: o, hw: h, aw: l, lw: s ?? void 0 }
        }
        iw(t) { let i = -1; if (t) i = this.um.indexOf(t); else { const t = this.Qt().$u().Us(); null !== t && (i = this.Qt().$s().indexOf(t)) } return i } Jm(t, i, s, e) { this.tv.p((() => this.tw(i, s, e, t))) }
        Qm(t, i, s, e) { this.iv.p((() => this.tw(i, s, e, t))) } Pm(t, i, s) { this.$m(this.Qt().Wu()?.Fo ?? null), this.Ru.p((() => this.tw(t, i, s))) } Vm() { const t = this.ys.timeScale.visible ? "" : "none"; this.km.kf().style.display = t }
        Fm() { return this.um[0].Of().xo().N().visible }
        Hm() { return this.um[0].Of().So().N().visible }
        Tm() { return "ResizeObserver" in window && (this.Mm = new ResizeObserver((t => { const i = t[t.length - 1]; i && this.Rm(i.contentRect.width, i.contentRect.height) })), this.Mm.observe(this.ap, { box: "border-box" }), !0) }
        Am() { null !== this.Mm && this.Mm.disconnect(), this.Mm = null }
    } function Ws(t) { return Boolean(t.handleScroll.mouseWheel || t.handleScale.mouseWheel) } function Os(t) { return void 0 === t.open && void 0 === t.value }
    function Ds(t) {
        return function (t) { return void 0 !== t.open }(t) || function (t) { return void 0 !== t.value }(t)
    }
    function $s(t, i, s, e) { const h = s.value, n = { Re: i, wt: t, Ft: [h, h, h, h], sw: e }; return void 0 !== s.color && (n.R = s.color), n }
    function Is(t, i, s, e) { const h = s.value, n = { Re: i, wt: t, Ft: [h, h, h, h], sw: e }; return void 0 !== s.lineColor && (n.vt = s.lineColor), void 0 !== s.topColor && (n.mr = s.topColor), void 0 !== s.bottomColor && (n.wr = s.bottomColor), n }
    function Qs(t, i, s, e) { const h = s.value, n = { Re: i, wt: t, Ft: [h, h, h, h], sw: e }; return void 0 !== s.topLineColor && (n.gr = s.topLineColor), void 0 !== s.bottomLineColor && (n.Mr = s.bottomLineColor), void 0 !== s.topFillColor1 && (n.br = s.topFillColor1), void 0 !== s.topFillColor2 && (n.Sr = s.topFillColor2), void 0 !== s.bottomFillColor1 && (n.Cr = s.bottomFillColor1), void 0 !== s.bottomFillColor2 && (n.yr = s.bottomFillColor2), n } function Us(t, i, s, e) { const h = { Re: i, wt: t, Ft: [s.open, s.high, s.low, s.close], sw: e }; return void 0 !== s.color && (h.R = s.color), h }
    function Js(t, i, s, e) { const h = { Re: i, wt: t, Ft: [s.open, s.high, s.low, s.close], sw: e }; return void 0 !== s.color && (h.R = s.color), void 0 !== s.borderColor && (h.Ht = s.borderColor), void 0 !== s.wickColor && (h.vr = s.wickColor), h }
    function Xs(t, i, s, e, h) { const n = u(h)(s), r = Math.max(...n), o = Math.min(...n), l = n[n.length - 1], a = [l, r, o, l], { time: c, color: d, ...f } = s; return { Re: i, wt: t, Ft: a, sw: e, se: f, R: d } }
    function Gs(t) { return void 0 !== t.Ft }
    function Hs(t, i) { return void 0 !== i.customValues && (t.ow = i.customValues), t } function Zs(t) { return (i, s, e, h, n, r) => function (t, i) { return i ? i(t) : Os(t) }(e, r) ? Hs({ wt: i, Re: s, sw: h }, e) : Hs(t(i, s, e, h, n), e) }
    function Ks(t) { return { Candlestick: Zs(Js), Bar: Zs(Us), Area: Zs(Is), Baseline: Zs(Qs), Histogram: Zs($s), Line: Zs($s), Custom: Zs(Xs) }[t] } function qs(t) { return { Re: 0, _w: new Map, Hh: t } } function js(t, i) { if (void 0 !== t && 0 !== t.length) return { uw: i.key(t[0].wt), cw: i.key(t[t.length - 1].wt) } }
    function te(t) { let i; return t.forEach((t => { void 0 === i && (i = t.sw) })), u(i) }
    class ie {
        constructor(t) { this.dw = new Map, this.fw = new Map, this.pw = new Map, this.mw = [], this.$o = t }
        m() { this.dw.clear(), this.fw.clear(), this.pw.clear(), this.mw = [] }
        ww(t, i) {
            let s = 0 !== this.dw.size, e = !1; const h = this.fw.get(t); if (void 0 !== h) if (1 === this.fw.size) s = !1, e = !0, this.dw.clear(); else for (const i of this.mw) i.pointData._w.delete(t) && (e = !0); let n = []; if (0 !== i.length) { const s = i.map((t => t.time)), h = this.$o.createConverterToInternalObj(i), r = Ks(t.Rr()), o = t.da(), l = t.pa(); n = i.map(((i, n) => { const a = h(i.time), u = this.$o.key(a); let c = this.dw.get(u); void 0 === c && (c = qs(a), this.dw.set(u, c), e = !0); const d = r(a, c.Re, i, s[n], o, l); return c._w.set(t, d), d })) } s && this.gw(), this.Mw(t, n); let r = -1; if (e) { const t = []; this.dw.forEach((i => { t.push({ timeWeight: 0, time: i.Hh, pointData: i, originalTime: te(i._w) }) })), t.sort(((t, i) => this.$o.key(t.time) - this.$o.key(i.time))), r = this.bw(t) } return this.xw(t, r, function (t, i, s) {
                const e = js(t, s), h = js(i, s); if (void 0 !== e && void 0 !== h) return { Sw: !1, zh: e.cw >= h.cw && e.uw >= h.uw }
            }(this.fw.get(t), h, this.$o))
        }
        dc(t) { return this.ww(t, []) } Cw(t, i, s) {
            const e = i; !function (t) { void 0 === t.sw && (t.sw = t.time) }(e), this.$o.preprocessData(i);
            const h = this.$o.createConverterToInternalObj([i])(i.time), n = this.pw.get(t); if (!s && void 0 !== n && this.$o.key(h) < this.$o.key(n)) throw new Error(`Cannot update oldest data, last time=${n}, new time=${h}`);
            let r = this.dw.get(this.$o.key(h)); if (s && void 0 === r) throw new Error("Cannot update non-existing data point when historicalUpdate is true");
            const o = void 0 === r; void 0 === r && (r = qs(h), this.dw.set(this.$o.key(h), r));
            const l = Ks(t.Rr()), a = t.da(), u = t.pa(), c = l(h, r.Re, i, e.sw, a, u); r._w.set(t, c), s ? this.yw(t, c, r.Re) : this.Pw(t, c);
            const d = { zh: Gs(c), Sw: s }; if (!o) return this.xw(t, -1, d);
            const f = { timeWeight: 0, time: r.Hh, pointData: r, originalTime: te(r._w) }, p = Ct(this.mw, this.$o.key(f.time), ((t, i) => this.$o.key(t.time) < i)); this.mw.splice(p, 0, f);
            for (let t = p; t < this.mw.length; ++t)se(this.mw[t].pointData, t); return this.$o.fillWeightsForPoints(this.mw, p), this.xw(t, p, d)
        }
        Pw(t, i) { let s = this.fw.get(t); void 0 === s && (s = [], this.fw.set(t, s)); const e = 0 !== s.length ? s[s.length - 1] : null; null === e || this.$o.key(i.wt) > this.$o.key(e.wt) ? Gs(i) && s.push(i) : Gs(i) ? s[s.length - 1] = i : s.splice(-1, 1), this.pw.set(t, i.wt) } y
        w(t, i, s) {
            const e = this.fw.get(t); if (void 0 === e) return; const h = Ct(e, s, ((t, i) => t.Re < i)); Gs(i) ? e[h] = i : e.splice(h, 1)
        } Mw(t, i) { 0 !== i.length ? (this.fw.set(t, i.filter(Gs)), this.pw.set(t, i[i.length - 1].wt)) : (this.fw.delete(t), this.pw.delete(t)) }
        gw() {
            for (const t of this.mw) 0 === t.pointData._w.size && this.dw.delete(this.$o.key(t.time))
        }
        bw(t) {
            let i = -1; for (let s = 0; s < this.mw.length && s < t.length; ++s) {
                const e = this.mw[s], h = t[s];
                if (this.$o.key(e.time) !== this.$o.key(h.time)) { i = s; break } h.timeWeight = e.timeWeight, se(h.pointData, s)
            }

            if (-1 === i && this.mw.length !== t.length && (i = Math.min(this.mw.length, t.length)), -1 === i) return -1;
            for (let s = i; s < t.length; ++s)se(t[s].pointData, s);
            return this.$o.fillWeightsForPoints(t, i), this.mw = t, i
        }
        kw() {
            if (0 === this.fw.size) return null; let t = 0;
            return this.fw.forEach((i => { 0 !== i.length && (t = Math.max(t, i[i.length - 1].Re)) })), t
        }
        xw(t, i, s) {
            const e = { wo: new Map, At: { U_: this.kw() } }; if (-1 !== i) this.fw.forEach(((i, h) => { e.wo.set(h, { se: i, Tw: h === t ? s : void 0 }) })), this.fw.has(t) || e.wo.set(t, { se: [], Tw: s }), e.At.Rw = this.mw, e.At.Dw = i;
            else { const i = this.fw.get(t); e.wo.set(t, { se: i || [], Tw: s }) } return e
        }
    }
    function se(t, i) { t.Re = i, t._w.forEach((t => { t.Re = i })) }
    function ee(t, i) { return t.wt < i } function he(t, i) { return i < t.wt }
    function ne(t, i, s) { const e = i.Uh(), h = i.bi(), n = Ct(t, e, ee), r = Tt(t, h, he); if (!s) return { from: n, to: r }; let o = n, l = r; return n > 0 && n < t.length && t[n].wt >= e && (o = n - 1), r > 0 && r < t.length && t[r - 1].wt <= h && (l = r + 1), { from: o, to: l } }
    class re {
        constructor(t, i, s) {
            this.Vw = !0, this.Iw = !0, this.Bw = !0, this.Aw = [], this.Ew = null, this.Jn = t, this.Qn = i, this.zw = s
        }
        Pt(t) { this.Vw = !0, "data" === t && (this.Iw = !0), "options" === t && (this.Bw = !0) }
        Tt() { return this.Jn.Vt() ? (this.Lw(), null === this.Ew ? null : this.Ow) : null }
        Nw() { this.Aw = this.Aw.map((t => ({ ...t, ...this.Jn.Rh().Dr(t.wt) }))) }
        Ww() { this.Ew = null }
        Lw() { this.Iw && (this.Fw(), this.Iw = !1), this.Bw && (this.Nw(), this.Bw = !1), this.Vw && (this.Hw(), this.Vw = !1) }
        Hw() { const t = this.Jn.Wt(), i = this.Qn.At(); if (this.Ww(), i.Ki() || t.Ki()) return; const s = i.ye(); if (null === s) return; if (0 === this.Jn.Xs().zr()) return; const e = this.Jn.zt(); null !== e && (this.Ew = ne(this.Aw, s, this.zw), this.Uw(t, i, e.Ft), this.$w()) }
    }
    class oe {
        constructor(t, i) { this.qw = t, this.Yi = i }
        nt(t, i, s) { this.qw.draw(t, this.Yi, i, s) }
    }
    class le extends re {
        constructor(t, i, s) { super(t, i, !1), this.sh = s, this.Ow = new oe(this.sh.renderer(), (i => { const s = t.zt(); return null === s ? null : t.Wt().Nt(i, s.Ft) })) }
        fa(t) { return this.sh.priceValueBuilder(t) }
        va(t) { return this.sh.isWhitespace(t) }
        Fw() { const t = this.Jn.Rh(); this.Aw = this.Jn.Xs().Hr().map((i => ({ wt: i.Re, _t: NaN, ...t.Dr(i.Re), Yw: i.se }))) }
        Uw(t, i) { i.q_(this.Aw, y(this.Ew)) }
        $w() { this.sh.update({ bars: this.Aw.map(ae), barSpacing: this.Qn.At().G_(), visibleRange: this.Ew }, this.Jn.N()) }
    } function ae(t) {
        return { x: t._t, time: t.wt, originalData: t.Yw, barColor: t.cr }
    }
    const ue = { color: "#2196f3" }, ce = (t, i, s) => { const e = d(s); return new le(t, i, e) };
    function de(t) { const i = { value: t.Ft[3], time: t.sw }; return void 0 !== t.ow && (i.customValues = t.ow), i }
    function fe(t) {
        const i = de(t); return void 0 !== t.R && (i.color = t.R), i
    }
    function pe(t) {
        const i = de(t); return void 0 !== t.vt && (i.lineColor = t.vt), void 0 !== t.mr && (i.topColor = t.mr), void 0 !== t.wr && (i.bottomColor = t.wr), i
    } function me(t) { const i = de(t); return void 0 !== t.gr && (i.topLineColor = t.gr), void 0 !== t.Mr && (i.bottomLineColor = t.Mr), void 0 !== t.br && (i.topFillColor1 = t.br), void 0 !== t.Sr && (i.topFillColor2 = t.Sr), void 0 !== t.Cr && (i.bottomFillColor1 = t.Cr), void 0 !== t.yr && (i.bottomFillColor2 = t.yr), i } function ge(t) { const i = { open: t.Ft[0], high: t.Ft[1], low: t.Ft[2], close: t.Ft[3], time: t.sw }; return void 0 !== t.ow && (i.customValues = t.ow), i }
    function we(t) {
        const i = ge(t); return void 0 !== t.R && (i.color = t.R), i
    } function ve(t) { const i = ge(t), { R: s, Ht: e, vr: h } = t; return void 0 !== s && (i.color = s), void 0 !== e && (i.borderColor = e), void 0 !== h && (i.wickColor = h), i }
    function Me(t) {
        return { Area: pe, Line: fe, Baseline: me, Histogram: fe, Bar: we, Candlestick: ve, Custom: be }[t]
    }
    function be(t) {
        const i = t.sw; return { ...t.se, time: i }
    } const ye = { vertLine: { color: "#9598A1", width: 1, style: 3, visible: !0, labelVisible: !0, labelBackgroundColor: "#131722" }, horzLine: { color: "#9598A1", width: 1, style: 3, visible: !0, labelVisible: !0, labelBackgroundColor: "#131722" }, mode: 1 }, Se = { vertLines: { color: "#D6DCDE", style: 0, visible: !0 }, horzLines: { color: "#D6DCDE", style: 0, visible: !0 } }, xe = { background: { type: "solid", color: "#FFFFFF" }, textColor: "#191919", fontSize: 12, fontFamily: S, panes: { enableResize: !0, separatorColor: "#E0E3EB", separatorHoverColor: "rgba(178, 181, 189, 0.2)" }, attributionLogo: !0, colorSpace: "srgb", colorParsers: [] }, _e = { autoScale: !0, mode: 0, invertScale: !1, alignLabels: !0, borderVisible: !0, borderColor: "#2B2B43", entireTextOnly: !1, visible: !1, ticksVisible: !1, scaleMargins: { bottom: .1, top: .2 }, minimumWidth: 0 }, Ce = { rightOffset: 0, barSpacing: 6, minBarSpacing: .5, maxBarSpacing: 0, fixLeftEdge: !1, fixRightEdge: !1, lockVisibleTimeRangeOnResize: !1, rightBarStaysOnScroll: !1, borderVisible: !0, borderColor: "#2B2B43", visible: !0, timeVisible: !1, secondsVisible: !0, shiftVisibleRangeOnNewBar: !0, allowShiftVisibleRangeOnWhitespaceReplacement: !1, ticksVisible: !1, uniformDistribution: !1, minimumHeight: 0, allowBoldLabels: !0, ignoreWhitespaceIndices: !1 }; function Te() { return { width: 0, height: 0, autoSize: !1, layout: xe, crosshair: ye, grid: Se, overlayPriceScales: { ..._e }, leftPriceScale: { ..._e, visible: !1 }, rightPriceScale: { ..._e, visible: !0 }, timeScale: Ce, localization: { locale: ss ? navigator.language : "", dateFormat: "dd MMM 'yy" }, handleScroll: { mouseWheel: !0, pressedMouseMove: !0, horzTouchDrag: !0, vertTouchDrag: !0 }, handleScale: { axisPressedMouseMove: { time: !0, price: !0 }, axisDoubleClickReset: { time: !0, price: !0 }, mouseWheel: !0, pinch: !0 }, kineticScroll: { mouse: !1, touch: !0 }, trackingMode: { exitMode: 1 } } }
    class ke {
        constructor(t, i, s) { this.gf = t, this.jw = i, this.Kw = s ?? 0 }
        applyOptions(t) { this.gf.Qt().Hu(this.jw, t, this.Kw) }
        options() { return this.Yi().N() }
        width() { return Z(this.jw) ? this.gf.Wm(this.jw) : 0 } Yi() { return c(this.gf.Qt().Uu(this.jw, this.Kw)).Wt }
    }
    class Re {
        constructor(t, i, s, e) { this.gf = t, this.yt = s, this.Xw = i, this.Zw = e }
        getHeight() { return this.yt.$t() }
        setHeight(t) { const i = this.gf.Qt(), s = i.xc(this.yt); i.Ku(s, t) }
        paneIndex() { return this.gf.Qt().xc(this.yt) }
        moveTo(t) { const i = this.paneIndex(); i !== t && (a(t >= 0 && t < this.gf.bf().length, "Invalid pane index"), this.gf.Qt().Xu(i, t)) } g
        etSeries() { return this.yt.wo().map((t => this.Xw(t))) ?? [] }
        getHTMLElement() { return this.gf.bf()[this.paneIndex()].kf() }
        attachPrimitive(t) { this.yt.ua(t), t.attached && t.attached({ chart: this.Zw, requestUpdate: () => this.yt.Qt().Bh() }) }
        detachPrimitive(t) { this.yt.ca(t) }
        priceScale(t) { if (null === this.yt.co(t)) throw new Error(`Cannot find price scale with id: ${t}`); return new ke(this.gf, t, this.paneIndex()) }
    } const Pe = { color: "#FF0000", price: 0, lineStyle: 2, lineWidth: 1, lineVisible: !0, axisLabelVisible: !0, title: "", axisLabelColor: "", axisLabelTextColor: "" };
    class Ye {
        constructor(t) { this.ir = t }
        applyOptions(t) { this.ir.hr(t) }
        options() { return this.ir.N() }
        Gw() { return this.ir }
    }
    class Ne {
        constructor(t, i, s, e, h, n) { this.Jw = new f, this.Jn = t, this.Qw = i, this.tg = s, this.$o = h, this.Zw = e, this.ig = n }
        m() { this.Jw.m() }
        priceFormatter() { return this.Jn.ra() }
        priceToCoordinate(t) { const i = this.Jn.zt(); return null === i ? null : this.Jn.Wt().Nt(t, i.Ft) }
        coordinateToPrice(t) { const i = this.Jn.zt(); return null === i ? null : this.Jn.Wt().Ts(t, i.Ft) }
        barsInLogicalRange(t) { if (null === t) return null; const i = new Pi(new Ti(t.from, t.to)).a_(), s = this.Jn.Xs(); if (s.Ki()) return null; const e = s.Wr(i.Uh(), 1), h = s.Wr(i.bi(), -1), n = c(s.Lr()), r = c(s.Ks()); if (null !== e && null !== h && e.Re > h.Re) return { barsBefore: t.from - n, barsAfter: r - t.to }; const o = { barsBefore: null === e || e.Re === n ? t.from - n : e.Re - n, barsAfter: null === h || h.Re === r ? r - t.to : r - h.Re }; return null !== e && null !== h && (o.from = e.sw, o.to = h.sw), o }
        setData(t) { this.$o, this.Jn.Rr(), this.Qw.sg(this.Jn, t), this.ng("full") }
        update(t, i = !1) { this.Jn.Rr(), this.Qw.eg(this.Jn, t, i), this.ng("update") }
        dataByIndex(t, i) { const s = this.Jn.Xs().Wr(t, i); if (null === s) return null; return Me(this.seriesType())(s) }
        data() { const t = Me(this.seriesType()); return this.Jn.Xs().Hr().map((i => t(i))) }
        subscribeDataChanged(t) { this.Jw.i(t) }
        unsubscribeDataChanged(t) { this.Jw._(t) }
        applyOptions(t) { this.Jn.hr(t) }
        options() { return M(this.Jn.N()) }
        priceScale() { return this.tg.priceScale(this.Jn.Wt().wa(), this.getPane().paneIndex()) }
        createPriceLine(t) { const i = p(M(Pe), t), s = this.Jn.Oh(i); return new Ye(s) }
        removePriceLine(t) { this.Jn.Nh(t.Gw()) }
        priceLines() { return this.Jn.Wh().map((t => new Ye(t))) }
        seriesType() { return this.Jn.Rr() }
        attachPrimitive(t) { this.Jn.ua(t), t.attached && t.attached({ chart: this.Zw, series: this, requestUpdate: () => this.Jn.Qt().Bh(), horzScaleBehavior: this.$o }) }
        detachPrimitive(t) { this.Jn.ca(t), t.detached && t.detached(), this.Jn.Qt().Bh() }
        getPane() { const t = this.Jn, i = c(this.Jn.Qt().Hn(t)); return this.ig(i) }
        moveToPane(t) { this.Jn.Qt().wc(this.Jn, t) }
        seriesOrder() { const t = this.Jn.Qt().Hn(this.Jn); return null === t ? -1 : t.wo().indexOf(this.Jn) }
        setSeriesOrder(t) { const i = this.Jn.Qt().Hn(this.Jn); null !== i && i.Ao(this.Jn, t) } ng(t) { this.Jw.v() && this.Jw.p(t) }
    }
    class ze {
        constructor(t, i, s) {
            this.rg = new f, this.m_ = new f, this.jv = new f, this.ts = t, this.uh = t.At(), this.km = i, this.uh.uu().i(this.hg.bind(this)), this.uh.cu().i(this.ag.bind(this)), this.km.tm().i(this.lg.bind(this)), this.$o = s
        }
        m() { this.uh.uu().u(this), this.uh.cu().u(this), this.km.tm().u(this), this.rg.m(), this.m_.m(), this.jv.m() }
        scrollPosition() { return this.uh.Q_() } scrollToPosition(t, i) { i ? this.uh.lu(t, 1e3) : this.ts.fn(t) }
        scrollToRealTime() { this.uh.au() }
        getVisibleRange() { const t = this.uh.z_(); return null === t ? null : { from: t.from.originalTime, to: t.to.originalTime } }
        setVisibleRange(t) { const i = { from: this.$o.convertHorzItemToInternal(t.from), to: this.$o.convertHorzItemToInternal(t.to) }, s = this.uh.W_(i); this.ts.vc(s) }
        getVisibleLogicalRange() { const t = this.uh.E_(); return null === t ? null : { from: t.Uh(), to: t.bi() } }
        setVisibleLogicalRange(t) { a(t.from <= t.to, "The from index cannot be after the to index."), this.ts.vc(t) }
        resetTimeScale() { this.ts.cn() }
        fitContent() { this.ts.pu() }
        logicalToCoordinate(t) { const i = this.ts.At(); return i.Ki() ? null : i.qt(t) }
        coordinateToLogical(t) { return this.uh.Ki() ? null : this.uh.Y_(t) }
        timeToIndex(t, i) { const s = this.$o.convertHorzItemToInternal(t); return this.uh.I_(s, i) }
        timeToCoordinate(t) { const i = this.timeToIndex(t, !1); return null === i ? null : this.uh.qt(i) }
        coordinateToTime(t) { const i = this.ts.At(), s = i.Y_(t), e = i.ss(s); return null === e ? null : e.originalTime }
        width() { return this.km.Tf().width }
        height() { return this.km.Tf().height }
        subscribeVisibleTimeRangeChange(t) { this.rg.i(t) }
        unsubscribeVisibleTimeRangeChange(t) { this.rg._(t) }
        subscribeVisibleLogicalRangeChange(t) { this.m_.i(t) }
        unsubscribeVisibleLogicalRangeChange(t) { this.m_._(t) }
        subscribeSizeChange(t) { this.jv.i(t) }
        unsubscribeSizeChange(t) { this.jv._(t) }
        applyOptions(t) { this.uh.hr(t) }
        options() { return { ...M(this.uh.N()), barSpacing: this.uh.G_() } }
        hg() { this.rg.v() && this.rg.p(this.getVisibleRange()) }
        ag() { this.m_.v() && this.m_.p(this.getVisibleLogicalRange()) }
        lg(t) { this.jv.p(t.width, t.height) }
    }
    function Ee(t) {
        if (void 0 === t || "custom" === t.type) return; const i = t; void 0 !== i.minMove && void 0 === i.precision && (i.precision = function (t) {
            if (t >= 1) return 0; let i = 0;
            for (; i < 8; i++) { const s = Math.round(t); if (Math.abs(s - t) < 1e-8) return i; t *= 10 } return i
        }(i.minMove))
    }
    function Ve(t) {
        return function (t) {
            if (v(t.handleScale)) { const i = t.handleScale; t.handleScale = { axisDoubleClickReset: { time: i, price: i }, axisPressedMouseMove: { time: i, price: i }, mouseWheel: i, pinch: i } }
            else if (void 0 !== t.handleScale) { const { axisPressedMouseMove: i, axisDoubleClickReset: s } = t.handleScale; v(i) && (t.handleScale.axisPressedMouseMove = { time: i, price: i }), v(s) && (t.handleScale.axisDoubleClickReset = { time: s, price: s }) } const i = t.handleScroll; v(i) && (t.handleScroll = { horzTouchDrag: i, vertTouchDrag: i, mouseWheel: i, pressedMouseMove: i })
        }(t), t
    }
    class Fe {
        constructor(t, i, s) {
            this.og = new Map, this._g = new Map, this.ug = new f, this.cg = new f, this.dg = new f, this.yu = new WeakMap, this.fg = new ie(i); const e = void 0 === s ? M(Te()) : p(M(Te()), Ve(s)); this.pg = i, this.gf = new Ls(t, e, i), this.gf.Pv().i((t => { this.ug.v() && this.ug.p(this.vg(t())) }), this), this.gf.kv().i((t => { this.cg.v() && this.cg.p(this.vg(t())) }), this), this.gf.qu().i((t => { this.dg.v() && this.dg.p(this.vg(t())) }), this); const h = this.gf.Qt(); this.mg = new ze(h, this.gf.Im(), this.pg)
        }
        remove() { this.gf.Pv().u(this), this.gf.kv().u(this), this.gf.qu().u(this), this.mg.m(), this.gf.m(), this.og.clear(), this._g.clear(), this.ug.m(), this.cg.m(), this.dg.m(), this.fg.m() }
        resize(t, i, s) { this.autoSizeActive() || this.gf.Rm(t, i, s) }
        addCustomSeries(t, i = {}, s = 0) { const e = (t => ({ type: "Custom", isBuiltIn: !1, defaultOptions: { ...ue, ...t.defaultOptions() }, wg: ce, gg: t }))(d(t)); return this.Mg(e, i, s) }
        addSeries(t, i = {}, s = 0) { return this.Mg(t, i, s) }
        removeSeries(t) { const i = u(this.og.get(t)), s = this.fg.dc(i); this.gf.Qt().dc(i), this.bg(s), this.og.delete(t), this._g.delete(i) }
        sg(t, i) { this.bg(this.fg.ww(t, i)) }
        eg(t, i, s) { this.bg(this.fg.Cw(t, i, s)) }
        subscribeClick(t) { this.ug.i(t) }
        unsubscribeClick(t) { this.ug._(t) }
        subscribeCrosshairMove(t) { this.dg.i(t) }
        unsubscribeCrosshairMove(t) { this.dg._(t) }
        subscribeDblClick(t) { this.cg.i(t) } unsubscribeDblClick(t) { this.cg._(t) }
        priceScale(t, i = 0) { return new ke(this.gf, t, i) } timeScale() { return this.mg }
        applyOptions(t) { this.gf.hr(Ve(t)) } options() { return this.gf.N() }
        takeScreenshot() { return this.gf.Om() } removePane(t) { this.gf.Qt().ju(t) }
        swapPanes(t, i) { this.gf.Qt().Xu(t, i) }
        autoSizeActive() { return this.gf.Um() } chartElement() { return this.gf.If() }
        panes() { return this.gf.Qt().$s().map((t => this.xg(t))) }
        paneSize(t = 0) { const i = this.gf.Ym(t); return { height: i.height, width: i.width } }
        setCrosshairPosition(t, i, s) { const e = this.og.get(s); if (void 0 === e) return; const h = this.gf.Qt().Hn(e); null !== h && this.gf.Qt().ac(t, i, h) }
        clearCrosshairPosition() { this.gf.Qt().lc(!0) }
        horzBehaviour() { return this.pg }
        Mg(t, i = {}, s = 0) {
            a(void 0 !== t.wg), Ee(i.priceFormat), "Candlestick" === t.type && function (t) { void 0 !== t.borderColor && (t.borderUpColor = t.borderColor, t.borderDownColor = t.borderColor), void 0 !== t.wickColor && (t.wickUpColor = t.wickColor, t.wickDownColor = t.wickColor) }(i);
            const e = p(M(h), M(t.defaultOptions), i), n = t.wg, r = new Jt(this.gf.Qt(), t.type, e, n, t.gg);
            this.gf.Qt().uc(r, s); const o = new Ne(r, this, this, this, this.pg, (t => this.xg(t)));
            return this.og.set(o, r), this._g.set(r, o), o
        }
        bg(t) { const i = this.gf.Qt(); i.oc(t.At.U_, t.At.Rw, t.At.Dw), t.wo.forEach(((t, i) => i.ht(t.se, t.Tw))), i.At().k_(), i.Z_() }
        Sg(t) { return u(this._g.get(t)) }
        vg(t) { const i = new Map; t.hw.forEach(((t, s) => { const e = s.Rr(), h = Me(e)(t); if ("Custom" !== e) a(Ds(h)); else { const t = s.pa(); a(!t || !1 === t(h)) } i.set(this.Sg(s), h) })); const s = void 0 !== t.rw && this._g.has(t.rw) ? this.Sg(t.rw) : void 0; return { time: t.sw, logical: t.Re, point: t.nw, paneIndex: t.ew, hoveredSeries: s, hoveredObjectId: t.aw, seriesData: i, sourceEvent: t.lw } }
        xg(t) { let i = this.yu.get(t); return i || (i = new Re(this.gf, (t => this.Sg(t)), t, this), this.yu.set(t, i)), i }
    }
    function Be(t) { if (w(t)) { const i = document.getElementById(t); return a(null !== i, `Cannot find element in DOM with id=${t}`), i } return t } function Ae(t, i, s) { const e = Be(t), h = new Fe(e, i, s); return i.setOptions(h.options()), h }
    function Le(t, i) { return Ae(t, new is, is.Oc(i)) }
    function We() { return is }
    class Oe extends re {
        constructor(t, i) { super(t, i, !0) }
        Uw(t, i, s) { i.q_(this.Aw, y(this.Ew)), t.Vl(this.Aw, s, y(this.Ew)) }
        Cg(t, i) { return { wt: t, gt: i, _t: NaN, ut: NaN } }
        Fw() { const t = this.Jn.Rh(); this.Aw = this.Jn.Xs().Hr().map((i => { const s = i.Ft[3]; return this.yg(i.Re, s, t) })) }
    }
    function De(t, i, s, e, h, n, r) {
        if (0 === i.length || e.from >= i.length || e.to <= 0) return; const { context: o, horizontalPixelRatio: l, verticalPixelRatio: a } = t, u = i[e.from]; let c = n(t, u), d = u; if (e.to - e.from < 2) { const i = h / 2; o.beginPath(); const s = { _t: u._t - i, ut: u.ut }, e = { _t: u._t + i, ut: u.ut }; o.moveTo(s._t * l, s.ut * a), o.lineTo(e._t * l, e.ut * a), r(t, c, s, e) } else {
            const h = (i, s) => { r(t, c, d, s), o.beginPath(), c = i, d = s }; let f = d; o.beginPath(), o.moveTo(u._t * l, u.ut * a); for (let r = e.from + 1; r < e.to; ++r) {
                f = i[r]; const e = n(t, f);
                switch (s) { case 0: o.lineTo(f._t * l, f.ut * a); break; case 1: o.lineTo(f._t * l, i[r - 1].ut * a), e !== c && (h(e, f), o.lineTo(f._t * l, i[r - 1].ut * a)), o.lineTo(f._t * l, f.ut * a); break; case 2: { const [t, s] = Ue(i, r - 1, r); o.bezierCurveTo(t._t * l, t.ut * a, s._t * l, s.ut * a, f._t * l, f.ut * a); break } }1 !== s && e !== c && (h(e, f), o.moveTo(f._t * l, f.ut * a))
            } (d !== f || d === f && 1 === s) && r(t, c, d, f)
        }
    } const $e = 6;
    function Ie(t, i) { return { _t: t._t - i._t, ut: t.ut - i.ut } }
    function Qe(t, i) { return { _t: t._t / i, ut: t.ut / i } }
    function Ue(t, i, s) { const e = Math.max(0, i - 1), h = Math.min(t.length - 1, s + 1); var n, r; return [(n = t[i], r = Qe(Ie(t[s], t[e]), $e), { _t: n._t + r._t, ut: n.ut + r.ut }), Ie(t[s], Qe(Ie(t[h], t[i]), $e))] }
    function Je(t, i) { const s = t.context; s.strokeStyle = i, s.stroke() }
    class Xe extends P {
        constructor() { super(...arguments), this.rt = null }
        ht(t) { this.rt = t }
        et(t) {
            if (null === this.rt) return; const { ot: i, lt: s, Pg: e, kg: h, ct: n, Xt: r, Tg: l } = this.rt; if (null === s) return;
            const a = t.context; a.lineCap = "butt", a.lineWidth = n * t.verticalPixelRatio, o(a, r), a.lineJoin = "round"; const u = this.Rg.bind(this);
            void 0 !== h && De(t, i, h, s, e, u, Je), l && function (t, i, s, e, h) {
                if (e.to - e.from <= 0) return; const { horizontalPixelRatio: n, verticalPixelRatio: r, context: o } = t; let l = null; const a = Math.max(1, Math.floor(n)) % 2 / 2, u = s * r + a;
                for (let s = e.to - 1; s >= e.from; --s) {
                    const e = i[s]; if (e) {
                        const i = h(t, e); i !== l && (o.beginPath(), null !== l && o.fill(), o.fillStyle = i, l = i);
                        const s = Math.round(e._t * n) + a, c = e.ut * r; o.moveTo(s, c), o.arc(s, c, u, 0, 2 * Math.PI)
                    }
                } o.fill()
            }(t, i, l, s, u)
        }
    }
    class Ge extends Xe { Rg(t, i) { return i.vt } }
    class He extends Oe {
        constructor() { super(...arguments), this.Ow = new Ge }
        yg(t, i, s) { return { ...this.Cg(t, i), ...s.Dr(t) } }
        $w() { const t = this.Jn.N(), i = { ot: this.Aw, Xt: t.lineStyle, kg: t.lineVisible ? t.lineType : void 0, ct: t.lineWidth, Tg: t.pointMarkersVisible ? t.pointMarkersRadius || t.lineWidth / 2 + 2 : void 0, lt: this.Ew, Pg: this.Qn.At().G_() }; this.Ow.ht(i) }
    }
    const Ze = { type: "Line", isBuiltIn: !0, defaultOptions: { color: "#2196f3", lineStyle: 0, lineWidth: 3, lineType: 0, lineVisible: !0, crosshairMarkerVisible: !0, crosshairMarkerRadius: 4, crosshairMarkerBorderColor: "", crosshairMarkerBorderWidth: 2, crosshairMarkerBackgroundColor: "", lastPriceAnimation: 0, pointMarkersVisible: !1 }, wg: (t, i) => new He(t, i) };
    function Ke(t, i) { return t.weight > i.weight ? t : i }
    class qe {
        constructor() { this.Dg = new f, this.Vg = function (t) { let i = !1; return function (...s) { i || (i = !0, queueMicrotask((() => { t(...s), i = !1 }))) } }((() => this.Dg.p(this.Ig))), this.Ig = 0 }
        Bg() { return this.Dg }
        m() { this.Dg.m() }
        options() { return this.ys }
        setOptions(t) { this.ys = t }
        preprocessData(t) { }
        updateFormatter(t) { this.ys && (this.ys.localization = t) }
        createConverterToInternalObj(t) { return this.Vg(), t => (t > this.Ig && (this.Ig = t), t) }
        key(t) { return t }
        cacheKey(t) { return t }
        convertHorzItemToInternal(t) { return t }
        formatHorzItem(t) { return this.Ag(t) }
        formatTickmark(t) { return this.Ag(t.time) }
        maxTickMarkWeight(t) { return t.reduce(Ke, t[0]).weight }
        fillWeightsForPoints(t, i) { for (let e = i; e < t.length; ++e)t[e].timeWeight = (s = t[e].time) % 120 == 0 ? 10 : s % 60 == 0 ? 9 : s % 36 == 0 ? 8 : s % 12 == 0 ? 7 : s % 6 == 0 ? 6 : s % 3 == 0 ? 5 : s % 1 == 0 ? 4 : 0; var s; this.Ig = t[t.length - 1].time, this.Vg() }
        Ag(t) {
            if (this.ys.localization?.timeFormatter) return this.ys.localization.timeFormatter(t);
            if (t < 12) return `${t}M`; const i = Math.floor(t / 12), s = t % 12; return 0 === s ? `${i}Y` : `${i}Y${s}M`
        }
    }
    const je = { yieldCurve: { baseResolution: 1, minimumTimeRange: 120, startTimeRange: 0 }, timeScale: { ignoreWhitespaceIndices: !0 }, leftPriceScale: { visible: !0 }, rightPriceScale: { visible: !1 }, localization: { priceFormatter: t => t.toFixed(3) + "%" } }, th = { lastValueVisible: !1, priceLineVisible: !1 };
    class ih extends Fe {
        constructor(t, i) {
            const s = p(je, i || {}), e = new qe; super(t, e, s), e.setOptions(this.options()), this._initWhitespaceSeries()
        } addSeries(t, i = {}, s = 0) { if (t.isBuiltIn && !1 === ["Area", "Line"].includes(t.type)) throw new Error("Yield curve only support Area and Line series"); const e = { ...th, ...i }; return super.addSeries(t, e, s) }
        _initWhitespaceSeries() {
            const t = this.horzBehaviour(), i = this.addSeries(Ze); let s;
            function e(e) {
                const h = function (t, i) {
                    return { le: Math.max(0, t.startTimeRange), oe: Math.max(0, t.minimumTimeRange, i || 0), Eg: Math.max(1, t.baseResolution) }
                }(t.options().yieldCurve, e), n = (({ le: t, oe: i, Eg: s }) => `${t}~${i}~${s}`)(h); n !== s && (s = n, i.setData(function ({ le: t, oe: i, Eg: s }) { return Array.from({ length: Math.floor((i - t) / s) + 1 }, ((i, e) => ({ time: t + e * s }))) }(h)))
            } e(0), t.Bg().i(e)
        }
    }
    function sh(t, i) {
        const s = Be(t);
        return new ih(s, i)
    }
    function eh(t, i) { return t.weight > i.weight ? t : i }
    class hh {
        options() { return this.ys }
        setOptions(t) { this.ys = t }
        preprocessData(t) { }
        updateFormatter(t) { this.ys && (this.ys.localization = t) }
        createConverterToInternalObj(t) { return t => t }
        key(t) { return t }
        cacheKey(t) { return t }
        convertHorzItemToInternal(t) { return t }
        formatHorzItem(t) { return t.toFixed(this.Cn()) }
        formatTickmark(t, i) { return t.time.toFixed(this.Cn()) }
        maxTickMarkWeight(t) { return t.reduce(eh, t[0]).weight }
        fillWeightsForPoints(t, i) { for (let e = i; e < t.length; ++e)t[e].timeWeight = (s = t[e].time) === 100 * Math.ceil(s / 100) ? 8 : s === 50 * Math.ceil(s / 50) ? 7 : s === 25 * Math.ceil(s / 25) ? 6 : s === 10 * Math.ceil(s / 10) ? 5 : s === 5 * Math.ceil(s / 5) ? 4 : s === Math.ceil(s) ? 3 : 2 * s === Math.ceil(2 * s) ? 1 : 0; var s }
        Cn() { return this.ys.localization.precision }
    }
    function nh(t, i) { return Ae(t, new hh, i) }
    function rh(t, i, s, e, h) { const { context: n, horizontalPixelRatio: r, verticalPixelRatio: o } = i; n.lineTo(h._t * r, t * o), n.lineTo(e._t * r, t * o), n.closePath(), n.fillStyle = s, n.fill() }
    class oh extends P {
        constructor() { super(...arguments), this.rt = null }
        ht(t) { this.rt = t }
        et(t) { if (null === this.rt) return; const { ot: i, lt: s, Pg: e, ct: h, Xt: n, kg: r } = this.rt, l = this.rt.zg ?? (this.rt.Lg ? 0 : t.mediaSize.height); if (null === s) return; const a = t.context; a.lineCap = "butt", a.lineJoin = "round", a.lineWidth = h, o(a, n), a.lineWidth = 1, De(t, i, r, s, e, this.Og.bind(this), rh.bind(null, l)) }
    }
    class lh {
        Ng(t, i) {
            const s = this.Wg, { Fg: e, Hg: h, Ug: n, $g: r, zg: o, qg: l, Yg: a } = i;
            if (void 0 === this.jg || void 0 === s || s.Fg !== e || s.Hg !== h || s.Ug !== n || s.$g !== r || s.zg !== o || s.qg !== l || s.Yg !== a) {
                const { verticalPixelRatio: s } = t, u = o || l > 0 ? s : 1, c = l * u, d = a === t.bitmapSize.height ? a : a * u, f = (o ?? 0) * u, p = t.context.createLinearGradient(0, c, 0, d);
                if (p.addColorStop(0, e), null != o) {
                    const t = Zt((f - c) / (d - c), 0, 1); p.addColorStop(t, h), p.addColorStop(t, n)
                } p.addColorStop(1, r), this.jg = p, this.Wg = i
            }
            return this.jg
        }
    }
    class ah extends oh {
        constructor() { super(...arguments), this.Kg = new lh }
        Og(t, i) {
            const s = this.rt; return this.Kg.Ng(t, { Fg: i.br, Hg: i.Sr, Ug: i.Cr, $g: i.yr, zg: s.zg, qg: s.qg ?? 0, Yg: s.Yg ?? t.bitmapSize.height })
        }
    }
    class uh extends Xe {
        constructor() { super(...arguments), this.Xg = new lh }
        Rg(t, i) {
            const s = this.rt; return this.Xg.Ng(t, { Fg: i.gr, Hg: i.gr, Ug: i.Mr, $g: i.Mr, zg: s.zg, qg: s.qg ?? 0, Yg: s.Yg ?? t.bitmapSize.height })
        }
    }
    class ch extends Oe {
        constructor(t, i) { super(t, i), this.Ow = new R, this.Zg = new ah, this.Gg = new uh, this.Ow.st([this.Zg, this.Gg]) }
        yg(t, i, s) { return { ...this.Cg(t, i), ...s.Dr(t) } }
        $w() {
            const t = this.Jn.zt(); if (null === t) return; const i = this.Jn.N(), s = this.Jn.Wt().Nt(i.baseValue.price, t.Ft), e = this.Qn.At().G_(); if (null === this.Ew || 0 === this.Aw.length) return; let h, n; if (i.relativeGradient) {
                h = this.Aw[this.Ew.from].ut, n = this.Aw[this.Ew.from].ut;
                for (let t = this.Ew.from; t < this.Ew.to; t++) {
                    const i = this.Aw[t]; i.ut < h && (h = i.ut), i.ut > n && (n = i.ut)
                }
            } this.Zg.ht({ ot: this.Aw, ct: i.lineWidth, Xt: i.lineStyle, kg: i.lineType, zg: s, qg: h, Yg: n, Lg: !1, lt: this.Ew, Pg: e }), this.Gg.ht({ ot: this.Aw, ct: i.lineWidth, Xt: i.lineStyle, kg: i.lineVisible ? i.lineType : void 0, Tg: i.pointMarkersVisible ? i.pointMarkersRadius || i.lineWidth / 2 + 2 : void 0, zg: s, qg: h, Yg: n, lt: this.Ew, Pg: e })
        }
    } const dh = { type: "Baseline", isBuiltIn: !0, defaultOptions: { baseValue: { type: "price", price: 0 }, relativeGradient: !1, topFillColor1: "rgba(38, 166, 154, 0.28)", topFillColor2: "rgba(38, 166, 154, 0.05)", topLineColor: "rgba(38, 166, 154, 1)", bottomFillColor1: "rgba(239, 83, 80, 0.05)", bottomFillColor2: "rgba(239, 83, 80, 0.28)", bottomLineColor: "rgba(239, 83, 80, 1)", lineWidth: 3, lineStyle: 0, lineType: 0, lineVisible: !0, crosshairMarkerVisible: !0, crosshairMarkerRadius: 4, crosshairMarkerBorderColor: "", crosshairMarkerBorderWidth: 2, crosshairMarkerBackgroundColor: "", lastPriceAnimation: 0, pointMarkersVisible: !1 }, wg: (t, i) => new ch(t, i) };
    class fh extends oh {
        constructor() { super(...arguments), this.Kg = new lh }
        Og(t, i) { return this.Kg.Ng(t, { Fg: i.mr, Hg: "", Ug: "", $g: i.wr, qg: this.rt?.qg ?? 0, Yg: t.bitmapSize.height }) }
    }
    class ph extends Oe {
        constructor(t, i) { super(t, i), this.Ow = new R, this.Jg = new fh, this.Qg = new Ge, this.Ow.st([this.Jg, this.Qg]) }
        yg(t, i, s) { return { ...this.Cg(t, i), ...s.Dr(t) } }
        $w() {
            const t = this.Jn.N(); if (null === this.Ew || 0 === this.Aw.length) return; let i; if (t.relativeGradient) {
                i = this.Aw[this.Ew.from].ut;
                for (let t = this.Ew.from; t < this.Ew.to; t++) { const s = this.Aw[t]; s.ut < i && (i = s.ut) }
            } this.Jg.ht({ kg: t.lineType, ot: this.Aw, Xt: t.lineStyle, ct: t.lineWidth, zg: null, qg: i, Lg: t.invertFilledArea, lt: this.Ew, Pg: this.Qn.At().G_() }), this.Qg.ht({ kg: t.lineVisible ? t.lineType : void 0, ot: this.Aw, Xt: t.lineStyle, ct: t.lineWidth, lt: this.Ew, Pg: this.Qn.At().G_(), Tg: t.pointMarkersVisible ? t.pointMarkersRadius || t.lineWidth / 2 + 2 : void 0 })
        }
    } const mh = { type: "Area", isBuiltIn: !0, defaultOptions: { topColor: "rgba( 46, 220, 135, 0.4)", bottomColor: "rgba( 40, 221, 100, 0)", invertFilledArea: !1, relativeGradient: !1, lineColor: "#33D778", lineStyle: 0, lineWidth: 3, lineType: 0, lineVisible: !0, crosshairMarkerVisible: !0, crosshairMarkerRadius: 4, crosshairMarkerBorderColor: "", crosshairMarkerBorderWidth: 2, crosshairMarkerBackgroundColor: "", lastPriceAnimation: 0, pointMarkersVisible: !1 }, wg: (t, i) => new ph(t, i) };
    class gh extends P {
        constructor() { super(...arguments), this.Yt = null, this.tM = 0, this.iM = 0 }
        ht(t) { this.Yt = t }
        et({ context: t, horizontalPixelRatio: i, verticalPixelRatio: s }) {
            if (null === this.Yt || 0 === this.Yt.Xs.length || null === this.Yt.lt) return;
            if (this.tM = this.sM(i), this.tM >= 2) { Math.max(1, Math.floor(i)) % 2 != this.tM % 2 && this.tM-- } this.iM = this.Yt.nM ? Math.min(this.tM, Math.floor(i)) : this.tM; let e = null; const h = this.iM <= this.tM && this.Yt.G_ >= Math.floor(1.5 * i);
            for (let n = this.Yt.lt.from; n < this.Yt.lt.to; ++n) {
                const r = this.Yt.Xs[n]; e !== r.cr && (t.fillStyle = r.cr, e = r.cr); const o = Math.floor(.5 * this.iM), l = Math.round(r._t * i), a = l - o, u = this.iM, c = a + u - 1, d = Math.min(r.El, r.zl), f = Math.max(r.El, r.zl), p = Math.round(d * s) - o, m = Math.round(f * s) + o, g = Math.max(m - p, this.iM); t.fillRect(a, p, u, g); const w = Math.ceil(1.5 * this.tM);
                if (h) {
                    if (this.Yt.eM) { const i = l - w; let e = Math.max(p, Math.round(r.Al * s) - o), h = e + u - 1; h > p + g - 1 && (h = p + g - 1, e = h - u + 1), t.fillRect(i, e, a - i, h - e + 1) } const i = l + w; let e = Math.max(p, Math.round(r.Ll * s) - o), h = e + u - 1; h > p + g - 1 && (h = p + g - 1, e = h - u + 1), t.fillRect(c + 1, e, i - c, h - e + 1)
                }
            }
        }
        sM(t) { const i = Math.floor(t); return Math.max(i, Math.floor(function (t, i) { return Math.floor(.3 * t * i) }(c(this.Yt).G_, t))) }
    }
    class wh extends re {
        constructor(t, i) { super(t, i, !1) }
        Uw(t, i, s) { i.q_(this.Aw, y(this.Ew)), t.Bl(this.Aw, s, y(this.Ew)) }
        rM(t, i, s) { return { wt: t, qh: i.Ft[0], Yh: i.Ft[1], jh: i.Ft[2], Kh: i.Ft[3], _t: NaN, Al: NaN, El: NaN, zl: NaN, Ll: NaN } }
        Fw() { const t = this.Jn.Rh(); this.Aw = this.Jn.Xs().Hr().map((i => this.yg(i.Re, i, t))) }
    }
    class vh extends wh {
        constructor() { super(...arguments), this.Ow = new gh }
        yg(t, i, s) { return { ...this.rM(t, i, s), ...s.Dr(t) } }
        $w() { const t = this.Jn.N(); this.Ow.ht({ Xs: this.Aw, G_: this.Qn.At().G_(), eM: t.openVisible, nM: t.thinBars, lt: this.Ew }) }
    } const Mh = { type: "Bar", isBuiltIn: !0, defaultOptions: { upColor: "#26a69a", downColor: "#ef5350", openVisible: !0, thinBars: !0 }, wg: (t, i) => new vh(t, i) };
    class bh extends P {
        constructor() {
            super(...arguments), this.Yt = null, this.tM = 0
        }
        ht(t) { this.Yt = t }
        et(t) {
            if (null === this.Yt || 0 === this.Yt.Xs.length || null === this.Yt.lt) return;
            const { horizontalPixelRatio: i } = t; if (this.tM = function (t, i) {
                if (t >= 2.5 && t <= 4) return Math.floor(3 * i); const s = 1 - .2 * Math.atan(Math.max(4, t) - 4) / (.5 * Math.PI), e = Math.floor(t * s * i), h = Math.floor(t * i), n = Math.min(e, h); return Math.max(Math.floor(i), n)
            }(this.Yt.G_, i), this.tM >= 2) { Math.floor(i) % 2 != this.tM % 2 && this.tM-- }
            const s = this.Yt.Xs; this.Yt.hM && this.aM(t, s, this.Yt.lt), this.Yt.Mi && this.Hp(t, s, this.Yt.lt);
            const e = this.lM(i); (!this.Yt.Mi || this.tM > 2 * e) && this.oM(t, s, this.Yt.lt)
        }
        aM(t, i, s) {
            if (null === this.Yt) return;
            const { context: e, horizontalPixelRatio: h, verticalPixelRatio: n } = t; let r = "", o = Math.min(Math.floor(h), Math.floor(this.Yt.G_ * h)); o = Math.max(Math.floor(h), Math.min(o, this.tM));
            const l = Math.floor(.5 * o); let a = null;
            for (let t = s.from; t < s.to; t++) {
                const s = i[t]; s.pr !== r && (e.fillStyle = s.pr, r = s.pr); const u = Math.round(Math.min(s.Al, s.Ll) * n), c = Math.round(Math.max(s.Al, s.Ll) * n), d = Math.round(s.El * n), f = Math.round(s.zl * n); let p = Math.round(h * s._t) - l;
                const m = p + o - 1; null !== a && (p = Math.max(a + 1, p), p = Math.min(p, m));
                const g = m - p + 1; e.fillRect(p, d, g, u - d), e.fillRect(p, c + 1, g, f - c), a = m
            }
        }
        lM(t) {
            let i = Math.floor(1 * t); this.tM <= 2 * i && (i = Math.floor(.5 * (this.tM - 1)));
            const s = Math.max(Math.floor(t), i); return this.tM <= 2 * s ? Math.max(Math.floor(t), Math.floor(1 * t)) : s
        }
        Hp(t, i, s) {
            if (null === this.Yt) return;
            const { context: e, horizontalPixelRatio: h, verticalPixelRatio: n } = t; let r = ""; const o = this.lM(h); let l = null;
            for (let t = s.from; t < s.to; t++) {
                const s = i[t]; s.dr !== r && (e.fillStyle = s.dr, r = s.dr); let a = Math.round(s._t * h) - Math.floor(.5 * this.tM);
                const u = a + this.tM - 1, c = Math.round(Math.min(s.Al, s.Ll) * n), d = Math.round(Math.max(s.Al, s.Ll) * n); if (null !== l && (a = Math.max(l + 1, a), a = Math.min(a, u)), this.Yt.G_ * h > 2 * o) B(e, a, c, u - a + 1, d - c + 1, o); else {
                    const t = u - a + 1; e.fillRect(a, c, t, d - c + 1)
                } l = u
            }
        }
        oM(t, i, s) {
            if (null === this.Yt) return;
            const { context: e, horizontalPixelRatio: h, verticalPixelRatio: n } = t; let r = ""; const o = this.lM(h);
            for (let t = s.from; t < s.to; t++) {
                const s = i[t]; let l = Math.round(Math.min(s.Al, s.Ll) * n), a = Math.round(Math.max(s.Al, s.Ll) * n), u = Math.round(s._t * h) - Math.floor(.5 * this.tM), c = u + this.tM - 1;
                if (s.cr !== r) {
                    const t = s.cr; e.fillStyle = t, r = t
                } this.Yt.Mi && (u += o, l += o, c -= o, a -= o), l > a || e.fillRect(u, l, c - u + 1, a - l + 1)
            }
        }
    }
    class yh extends wh {
        constructor() { super(...arguments), this.Ow = new bh }
        yg(t, i, s) { return { ...this.rM(t, i, s), ...s.Dr(t) } }
        $w() { const t = this.Jn.N(); this.Ow.ht({ Xs: this.Aw, G_: this.Qn.At().G_(), hM: t.wickVisible, Mi: t.borderVisible, lt: this.Ew }) }
    } const Sh = { type: "Candlestick", isBuiltIn: !0, defaultOptions: { upColor: "#26a69a", downColor: "#ef5350", wickVisible: !0, borderVisible: !0, borderColor: "#378658", borderUpColor: "#26a69a", borderDownColor: "#ef5350", wickColor: "#737375", wickUpColor: "#26a69a", wickDownColor: "#ef5350" }, wg: (t, i) => new yh(t, i) };
    class xh extends P {
        constructor() { super(...arguments), this.Yt = null, this._M = [] }
        ht(t) { this.Yt = t, this._M = [] }
        et({ context: t, horizontalPixelRatio: i, verticalPixelRatio: s }) {
            if (null === this.Yt || 0 === this.Yt.ot.length || null === this.Yt.lt) return;
            this._M.length || this.uM(i);
            const e = Math.max(1, Math.floor(s)), h = Math.round(this.Yt.cM * s) - Math.floor(e / 2), n = h + e;
            for (let i = this.Yt.lt.from; i < this.Yt.lt.to; i++) {
                const r = this.Yt.ot[i], o = this._M[i - this.Yt.lt.from], l = Math.round(r.ut * s);
                let a, u; t.fillStyle = r.cr, l <= h ? (a = l, u = n) : (a = h, u = l - Math.floor(e / 2) + e), t.fillRect(o.Uh, a, o.bi - o.Uh + 1, u - a)
            }
        }
        uM(t) {
            if (null === this.Yt || 0 === this.Yt.ot.length || null === this.Yt.lt) return void (this._M = []);
            const i = Math.ceil(this.Yt.G_ * t) <= 1 ? 0 : Math.max(1, Math.floor(t)), s = Math.round(this.Yt.G_ * t) - i; this._M = new Array(this.Yt.lt.to - this.Yt.lt.from);
            for (let i = this.Yt.lt.from; i < this.Yt.lt.to; i++) {
                const e = this.Yt.ot[i], h = Math.round(e._t * t); let n, r;
                if (s % 2) {
                    const t = (s - 1) / 2; n = h - t, r = h + t
                } else {
                    const t = s / 2; n = h - t, r = h + t - 1
                } this._M[i - this.Yt.lt.from] = { Uh: n, bi: r, dM: h, ne: e._t * t, wt: e.wt }
            }
            for (let t = this.Yt.lt.from + 1; t < this.Yt.lt.to; t++) {
                const s = this._M[t - this.Yt.lt.from], e = this._M[t - this.Yt.lt.from - 1]; s.wt === e.wt + 1 && (s.Uh - e.bi !== i + 1 && (e.dM > e.ne ? e.bi = s.Uh - i - 1 : s.Uh = e.bi + i + 1))
            }
            let e = Math.ceil(this.Yt.G_ * t);
            for (let t = this.Yt.lt.from; t < this.Yt.lt.to; t++) {
                const i = this._M[t - this.Yt.lt.from]; i.bi < i.Uh && (i.bi = i.Uh);
                const s = i.bi - i.Uh + 1; e = Math.min(s, e)
            }
            if (i > 0 && e < 4)
                for (let t = this.Yt.lt.from; t < this.Yt.lt.to; t++) {
                    const i = this._M[t - this.Yt.lt.from]; i.bi - i.Uh + 1 > e && (i.dM > i.ne ? i.bi -= 1 : i.Uh += 1)
                }
        }
    }
    class _h extends Oe {
        constructor() { super(...arguments), this.Ow = new xh }
        yg(t, i, s) { return { ...this.Cg(t, i), ...s.Dr(t) } }
        $w() { const t = { ot: this.Aw, G_: this.Qn.At().G_(), lt: this.Ew, cM: this.Jn.Wt().Nt(this.Jn.N().base, c(this.Jn.zt()).Ft) }; this.Ow.ht(t) }
    }
    const Ch = { type: "Histogram", isBuiltIn: !0, defaultOptions: { color: "#26a69a", base: 0 }, wg: (t, i) => new _h(t, i) };
    class Th {
        constructor(t, i) { this.yt = t, this.fM = i, this.pM() }
        detach() { this.yt.detachPrimitive(this.fM) }
        getPane() { return this.yt }
        applyOptions(t) { this.fM.hr?.(t) }
        pM() { this.yt.attachPrimitive(this.fM) }
    } const kh = { visible: !0, horzAlign: "center", vertAlign: "center", lines: [] }, Rh = { color: "rgba(0, 0, 0, 0.5)", fontSize: 48, fontFamily: S, fontStyle: "", text: "" };
    class Ph {
        constructor(t) { this.vM = new Map, this.Yt = t }
        draw(t) {
            t.useMediaCoordinateSpace((t => {
                if (!this.Yt.visible) return;
                const { context: i, mediaSize: s } = t; let e = 0;
                for (const t of this.Yt.lines) {
                    if (0 === t.text.length) continue;
                    i.font = t.k; const h = this.mM(i, t.text); h > s.width ? t.eu = s.width / h : t.eu = 1, e += t.lineHeight * t.eu
                } let h = 0;
                switch (this.Yt.vertAlign) { case "top": h = 0; break; case "center": h = Math.max((s.height - e) / 2, 0); break; case "bottom": h = Math.max(s.height - e, 0) }for (const t of this.Yt.lines) {
                    i.save(), i.fillStyle = t.color; let e = 0;
                    switch (this.Yt.horzAlign) { case "left": i.textAlign = "left", e = t.lineHeight / 2; break; case "center": i.textAlign = "center", e = s.width / 2; break; case "right": i.textAlign = "right", e = s.width - 1 - t.lineHeight / 2 }i.translate(e, h), i.textBaseline = "top", i.font = t.k, i.scale(t.eu, t.eu), i.fillText(t.text, 0, t.wM), i.restore(), h += t.lineHeight * t.eu
                }
            }))
        }
        mM(t, i) {
            const s = this.gM(t.font); let e = s.get(i);
            return void 0 === e && (e = t.measureText(i).width, s.set(i, e)), e
        }
        gM(t) {
            let i = this.vM.get(t); return void 0 === i && (i = new Map, this.vM.set(t, i)), i
        }
    }
    class Yh {
        constructor(t) { this.ys = zh(t) } Pt(t) { this.ys = zh(t) } renderer() { return new Ph(this.ys) }
    }
    function Nh(t) { return { ...t, k: x(t.fontSize, t.fontFamily, t.fontStyle), lineHeight: t.lineHeight || 1.2 * t.fontSize, wM: 0, eu: 0 } }
    function zh(t) { return { ...t, lines: t.lines.map(Nh) } }
    function Eh(t) { return { ...Rh, ...t } }
    function Vh(t) { return { ...kh, ...t, lines: t.lines?.map(Eh) ?? [] } }
    class Fh {
        constructor(t) { this.ys = Vh(t), this.MM = [new Yh(this.ys)] }
        updateAllViews() { this.MM.forEach((t => t.Pt(this.ys))) }
        paneViews() { return this.MM }
        attached({ requestUpdate: t }) { this.bM = t }
        detached() { this.bM = void 0 }
        hr(t) { this.ys = Vh({ ...this.ys, ...t }), this.bM && this.bM() }
    }
    function Bh(t, i) { return new Th(t, new Fh(i)) } const Ah = { alpha: 1, padding: 0 };
    class Lh {
        constructor(t) { this.Yt = t }
        draw(t) { t.useMediaCoordinateSpace((t => { const i = t.context, s = this.xM(this.Yt, t.mediaSize); s && this.Yt.SM && (i.globalAlpha = this.Yt.alpha ?? 1, i.drawImage(this.Yt.SM, s._t, s.ut, s.Qi, s.$t)) })) }
        xM(t, i) { const { maxHeight: s, maxWidth: e, CM: h, yM: n, padding: r } = t, o = Math.round(i.width / 2), l = Math.round(i.height / 2), a = r ?? 0; let u = i.width - 2 * a, c = i.height - 2 * a; s && (c = Math.min(c, s)), e && (u = Math.min(u, e)); const d = u / n, f = c / h, p = Math.min(d, f), m = n * p, g = h * p; return { _t: o - .5 * m, ut: l - .5 * g, $t: g, Qi: m } }
    }
    class Wh {
        constructor(t) { this.PM = null, this.kM = 0, this.TM = 0, this.ys = t, this.M = Oh(this.ys, this.PM, this.kM, this.TM) }
        RM(t) { void 0 !== t.DM && (this.kM = t.DM), void 0 !== t.VM && (this.TM = t.VM), void 0 !== t.IM && (this.PM = t.IM), this.Pt() }
        BM(t) { this.ys = t, this.Pt() }
        zOrder() { return "bottom" }
        Pt() { this.M = Oh(this.ys, this.PM, this.kM, this.TM) }
        renderer() { return new Lh(this.M) }
    }
    function Oh(t, i, s, e) { return { ...t, SM: i, yM: s, CM: e } }
    function Dh(t) { return { ...Ah, ...t } }
    class $h {
        constructor(t, i) { this.AM = null, this.EM = t, this.ys = Dh(i), this.MM = [new Wh(this.ys)] }
        updateAllViews() { this.MM.forEach((t => t.Pt())) }
        paneViews() { return this.MM }
        attached(t) { const { requestUpdate: i } = t; this.zM = i, this.AM = new Image, this.AM.onload = () => { const t = this.AM?.naturalHeight ?? 1, i = this.AM?.naturalWidth ?? 1; this.MM.forEach((s => s.RM({ VM: t, DM: i, IM: this.AM }))), this.zM && this.zM() }, this.AM.src = this.EM }
        detached() { this.zM = void 0, this.AM = null }
        hr(t) { this.ys = Dh({ ...this.ys, ...t }), this.LM(), this.bM && this.bM() }
        bM() { this.zM && this.zM() }
        LM() { this.MM.forEach((t => t.BM(this.ys))) }
    } function Ih(t, i, s) { return new Th(t, new $h(i, s)) }
    class Qh {
        constructor(t, i) { this.Jn = t, this.ah = i, this.pM() }
        detach() { this.Jn.detachPrimitive(this.ah) }
        getSeries() { return this.Jn }
        applyOptions(t) { this.ah && this.ah.hr && this.ah.hr(t) }
        pM() { this.Jn.attachPrimitive(this.ah) }
    }
    function Uh(t, i) {
        return qt(Math.min(Math.max(t, 12), 30) * i)
    } function Jh(t, i) {
        switch (t) { case "arrowDown": case "arrowUp": return Uh(i, 1); case "circle": return Uh(i, .8); case "square": return Uh(i, .7) }
    }
    function Xh(t) {
        return function (t) { const i = Math.ceil(t); return i % 2 != 0 ? i - 1 : i }(Uh(t, 1))
    }
    function Gh(t) { return Math.max(Uh(t, .1), 3) }
    function Hh(t, i, s) {
        return i ? t : s ? Math.ceil(t / 2) : 0
    }
    function Zh(t, i, s, e) {
        const h = (Jh("arrowUp", e) - 1) / 2 * s.OM, n = (qt(e / 2) - 1) / 2 * s.OM; i.beginPath(), t ? (i.moveTo(s._t - h, s.ut), i.lineTo(s._t, s.ut - h), i.lineTo(s._t + h, s.ut), i.lineTo(s._t + n, s.ut), i.lineTo(s._t + n, s.ut + h), i.lineTo(s._t - n, s.ut + h), i.lineTo(s._t - n, s.ut)) : (i.moveTo(s._t - h, s.ut), i.lineTo(s._t, s.ut + h), i.lineTo(s._t + h, s.ut), i.lineTo(s._t + n, s.ut), i.lineTo(s._t + n, s.ut - h), i.lineTo(s._t - n, s.ut - h), i.lineTo(s._t - n, s.ut)), i.fill()
    }
    function Kh(t, i, s, e, h, n) {
        const r = (Jh("arrowUp", e) - 1) / 2, o = (qt(e / 2) - 1) / 2;
        if (h >= i - o - 2 && h <= i + o + 2 && n >= (t ? s : s - r) - 2 && n <= (t ? s + r : s) + 2) return !0;
        return (() => {
            if (h < i - r - 3 || h > i + r + 3 || n < (t ? s - r - 3 : s) || n > (t ? s : s + r + 3))
                return !1; const e = Math.abs(h - i); return Math.abs(n - s) + 3 >= e / 2
        })()
    }
    class qh {
        constructor() { this.Yt = null, this.On = new ht, this.W = -1, this.F = "", this.wp = "" }
        ht(t) { this.Yt = t }
        Nn(t, i) { this.W === t && this.F === i || (this.W = t, this.F = i, this.wp = x(t, i), this.On.In()) }
        jn(t, i) {
            if (null === this.Yt || null === this.Yt.lt) return null; for (let s = this.Yt.lt.from; s < this.Yt.lt.to; s++) {
                const e = this.Yt.ot[s]; if (e && tn(e, t, i))
                    return { zOrder: "normal", externalId: e.Kn ?? "" }
            } return null
        }
        draw(t) { t.useBitmapCoordinateSpace((t => { this.et(t) })) }
        et({ context: t, horizontalPixelRatio: i, verticalPixelRatio: s }) {
            if (null !== this.Yt && null !== this.Yt.lt) {
                t.textBaseline = "middle", t.font = this.wp;
                for (let e = this.Yt.lt.from; e < this.Yt.lt.to; e++) { const h = this.Yt.ot[e]; void 0 !== h.ri && (h.ri.Qi = this.On.Vi(t, h.ri.NM), h.ri.$t = this.W, h.ri._t = h._t - h.ri.Qi / 2), jh(h, t, i, s) }
            }
        }
    }
    function jh(t, i, s, e) {
        i.fillStyle = t.R, void 0 !== t.ri && function (t, i, s, e, h, n) { t.save(), t.scale(h, n), t.fillText(i, s, e), t.restore() }(i, t.ri.NM, t.ri._t, t.ri.ut, s, e),
            function (t, i, s) {
                if (0 === t.zr) return;
                switch (t.WM) {
                    case "arrowDown": return void Zh(!1, i, s, t.zr); case "arrowUp": return void Zh(!0, i, s, t.zr); case "circle":
                        return void function (t, i, s) { const e = (Jh("circle", s) - 1) / 2; t.beginPath(), t.arc(i._t, i.ut, e * i.OM, 0, 2 * Math.PI, !1), t.fill() }(i, s, t.zr); case "square":
                        return void function (t, i, s) { const e = Jh("square", s), h = (e - 1) * i.OM / 2, n = i._t - h, r = i.ut - h; t.fillRect(n, r, e * i.OM, e * i.OM) }(i, s, t.zr)
                }t.WM
            }(t, i, function (t, i, s) { const e = Math.max(1, Math.floor(i)) % 2 / 2; return { _t: Math.round(t._t * i) + e, ut: t.ut * s, OM: i } }(t, s, e))
    }
    function tn(t, i, s) {
        return !(void 0 === t.ri || !function (t, i, s, e, h, n) { const r = e / 2; return h >= t && h <= t + s && n >= i - r && n <= i + r }(t.ri._t, t.ri.ut, t.ri.Qi, t.ri.$t, i, s)) ||
            function (t, i, s) {
                if (0 === t.zr) return !1;
                switch (t.WM) {
                    case "arrowDown": return Kh(!0, t._t, t.ut, t.zr, i, s); case "arrowUp": return Kh(!1, t._t, t.ut, t.zr, i, s); case "circle": return function (t, i, s, e, h) {
                        const n = 2 + Jh("circle", s) / 2, r = t - e, o = i - h;
                        return Math.sqrt(r * r + o * o) <= n
                    }(t._t, t.ut, t.zr, i, s); case "square": return function (t, i, s, e, h) { const n = Jh("square", s), r = (n - 1) / 2, o = t - r, l = i - r; return e >= o && e <= o + n && h >= l && h <= l + n }(t._t, t.ut, t.zr, i, s)
                }
            }(t, i, s)
    }
    function sn(t) { return "atPriceTop" === t || "atPriceBottom" === t || "atPriceMiddle" === t } function en(t, i, s, e, h, n, r, o) {
        const l = function (t, i) {
            if (sn(i.position) && void 0 !== i.price) return i.price;
            if ("value" in (s = t) && "number" == typeof s.value) return t.value;
            var s;
            if (function (t) { return "open" in t && "high" in t && "low" in t && "close" in t }(t)) { if ("inBar" === i.position) return t.close; if ("aboveBar" === i.position) return t.high; if ("belowBar" === i.position) return t.low }
        }(s, i); if (void 0 === l) return;
        const a = sn(i.position), u = o.timeScale(), d = m(i.size) ? Math.max(i.size, 0) : 1, f = Xh(u.options().barSpacing) * d, p = f / 2; t.zr = f;
        switch (i.position) {
            case "inBar": case "atPriceMiddle": return t.ut = c(r.priceToCoordinate(l)), void (void 0 !== t.ri && (t.ri.ut = t.ut + p + n + .6 * h)); case "aboveBar": case "atPriceTop": {
                const i = a ? 0 : e.FM; return t.ut = c(r.priceToCoordinate(l)) - p - i, void 0 !== t.ri && (t.ri.ut = t.ut - p - .6 * h, e.FM += 1.2 * h), void (a || (e.FM += f + n))
            } case "belowBar": case "atPriceBottom": { const i = a ? 0 : e.HM; return t.ut = c(r.priceToCoordinate(l)) + p + i, void 0 !== t.ri && (t.ri.ut = t.ut + p + n + .6 * h, e.HM += 1.2 * h), void (a || (e.HM += f + n)) }
        }
    }
    class hn {
        constructor(t, i) {
            this.UM = [], this.St = !0, this.$M = !0, this.Gt = new qh, this.ge = t, this.lp = i, this.Yt = { ot: [], lt: null }
        }
        renderer() {
            if (!this.ge.options().visible) return null; this.St && this.qM();
            const t = this.lp.options().layout; return this.Gt.Nn(t.fontSize, t.fontFamily), this.Gt.ht(this.Yt), this.Gt
        }
        YM(t) { this.UM = t, this.Pt("data") }
        Pt(t) { this.St = !0, "data" === t && (this.$M = !0) }
        qM() {
            const t = this.lp.timeScale(), i = this.UM; this.$M && (this.Yt.ot = i.map((t => ({ wt: t.time, _t: 0, ut: 0, zr: 0, WM: t.shape, R: t.color, Kn: t.id, jM: t.jM, ri: void 0 }))), this.$M = !1);
            const s = this.lp.options().layout; this.Yt.lt = null; const e = t.getVisibleLogicalRange();
            if (null === e) return;
            const h = new Ti(Math.floor(e.from), Math.ceil(e.to));
            if (null === this.ge.data()[0]) return;
            if (0 === this.Yt.ot.length) return;
            let n = NaN;
            const r = Gh(t.options().barSpacing), o = { FM: r, HM: r }; this.Yt.lt = ne(this.Yt.ot, h, !0);
            for (let e = this.Yt.lt.from; e < this.Yt.lt.to; e++) {
                const h = i[e]; h.time !== n && (o.FM = r, o.HM = r, n = h.time);
                const l = this.Yt.ot[e];
                l._t = c(t.logicalToCoordinate(h.time)), void 0 !== h.text && h.text.length > 0 && (l.ri = { NM: h.text, _t: 0, ut: 0, Qi: 0, $t: 0 }); const a = this.ge.dataByIndex(h.time, 0); null !== a && en(l, h, a, o, s.fontSize, r, this.ge, this.lp)
            } this.St = !1
        }
    }
    class nn {
        constructor() { this.sh = null, this.UM = [], this.KM = [], this.XM = null, this.ge = null, this.lp = null, this.ZM = !0, this.GM = null, this.JM = null, this.QM = null, this.tb = !0 }
        attached(t) { this.ib(), this.lp = t.chart, this.ge = t.series, this.sh = new hn(this.ge, c(this.lp)), this.zM = t.requestUpdate, this.ge.subscribeDataChanged((t => this.ng(t))), this.tb = !0, this.bM() }
        bM() { this.zM && this.zM() }
        detached() { this.ge && this.XM && this.ge.unsubscribeDataChanged(this.XM), this.lp = null, this.ge = null, this.sh = null, this.XM = null }
        YM(t) { this.tb = !0, this.UM = t, this.ib(), this.ZM = !0, this.JM = null, this.bM() } sb() { return this.UM } paneViews() { return this.sh ? [this.sh] : [] }
        updateAllViews() { this.nb() }
        hitTest(t, i) { return this.sh ? this.sh.renderer()?.jn(t, i) ?? null : null }
        autoscaleInfo(t, i) { if (this.sh) { const t = this.eb(); if (t) return { priceRange: null, margins: t } } return null }
        eb() {
            const t = c(this.lp).timeScale().options().barSpacing;
            if (this.ZM || t !== this.QM) {
                if (this.QM = t, this.UM.length > 0) {
                    const i = Gh(t), s = 1.5 * Xh(t) + 2 * i, e = this.rb(); this.GM = { above: Hh(s, e.aboveBar, e.inBar), below: Hh(s, e.belowBar, e.inBar) }
                } else this.GM = null; this.ZM = !1
            }
            return this.GM
        }
        rb() { return null === this.JM && (this.JM = this.UM.reduce(((t, i) => (t[i.position] || (t[i.position] = !0), t)), { inBar: !1, aboveBar: !1, belowBar: !1, atPriceTop: !1, atPriceBottom: !1, atPriceMiddle: !1 })), this.JM }
        ib() {
            if (!this.tb || !this.lp || !this.ge) return;
            const t = this.lp.timeScale(), i = this.ge?.data(); if (null == t.getVisibleLogicalRange() || !this.ge || 0 === i.length) return void (this.KM = []); const s = t.timeToIndex(c(i[0].time), !0);
            this.KM = this.UM.map(((i, e) => {
                const h = t.timeToIndex(i.time, !0), n = h < s ? 1 : -1, r = c(this.ge).dataByIndex(h, n), o = { time: t.timeToIndex(c(r).time, !1), position: i.position, shape: i.shape, color: i.color, id: i.id, jM: e, text: i.text, size: i.size, price: i.price, sw: i.time }; if ("atPriceTop" === i.position || "atPriceBottom" === i.position || "atPriceMiddle" === i.position) {
                    if (void 0 === i.price) throw new Error(`Price is required for position ${i.position}`);
                    return { ...o, position: i.position, price: i.price }
                }
                return { ...o, position: i.position, price: i.price }
            })), this.tb = !1
        }
        nb(t) { this.sh && (this.ib(), this.sh.YM(this.KM), this.sh.Pt(t)) } ng(t) { this.tb = !0, this.bM() }
    }
    class rn extends Qh {
        constructor(t, i, s) { super(t, i), s && this.setMarkers(s) } setMarkers(t) { this.ah.YM(t) } markers() { return this.ah.sb() }
    }
    function on(t, i) { const s = new rn(t, new nn); return i && s.setMarkers(i), s }
    class ln {
        constructor(t) { this.UM = new Map, this.hb = t } ab(t, i, s) {
            if (this.lb(i), void 0 !== s) {
                const e = window.setTimeout((() => { this.UM.delete(i), this.ob() }), s), h = { ...t, _b: e, ub: Date.now() + s }; this.UM.set(i, h)
            } else
                this.UM.set(i, { ...t, _b: void 0, ub: void 0 }); this.ob()
        }
        lb(t) {
            const i = this.UM.get(t); i && void 0 !== i._b && window.clearTimeout(i._b), this.UM.delete(t), this.ob()
        }
        cb() {
            for (const [t] of this.UM) this.lb(t)
        }
        fb() { const t = Date.now(), i = []; for (const [s, e] of this.UM) !e.ub || e.ub > t ? i.push({ time: e.time, sign: e.sign, value: e.value }) : this.lb(s); return i }
        pb(t) { this.hb = t }
        ob() { this.hb && this.hb() }
    }
    const an = { positiveColor: "#22AB94", negativeColor: "#F7525F", updateVisibilityDuration: 5e3 };
    class un {
        constructor(t, i, s, e) { this.Yt = t, this.mb = i, this.wb = s, this.gb = e }
        draw(t) {
            t.useBitmapCoordinateSpace((t => {
                const i = t.context, s = Math.max(1, Math.floor(t.horizontalPixelRatio)) % 2 / 2, e = 4 * t.verticalPixelRatio + s; this.Yt.forEach((h => {
                    const n = Math.round(h._t * t.horizontalPixelRatio) + s; i.beginPath();
                    const r = this.Mb(h.bb); i.fillStyle = r, i.arc(n, h.ut * t.verticalPixelRatio, e, 0, 2 * Math.PI, !1), i.fill(), h.bb && (i.strokeStyle = r, i.lineWidth = Math.floor(2 * t.horizontalPixelRatio), i.beginPath(), i.moveTo((h._t - 4.7) * t.horizontalPixelRatio + s, (h.ut - 7 * h.bb) * t.verticalPixelRatio), i.lineTo(h._t * t.horizontalPixelRatio + s, (h.ut - 7 * h.bb - 7 * h.bb * .5) * t.verticalPixelRatio), i.lineTo((h._t + 4.7) * t.horizontalPixelRatio + s, (h.ut - 7 * h.bb) * t.verticalPixelRatio), i.stroke())
                }))
            }))
        }
        Mb(t) { return 0 === t ? this.mb : t > 0 ? this.gb : this.wb }
    }
    class cn {
        constructor(t, i, s) { this.Yt = [], this.ge = t, this.uh = i, this.ys = s }
        Pt(t) {
            this.Yt = t.map((t => {
                const i = this.ge.priceToCoordinate(t.value);
                if (null === i) return null; return { _t: c(this.uh.timeToCoordinate(t.time)), ut: i, bb: t.sign }
            })).filter(b)
        }
        renderer() {
            const t = function (t, i) { return function (t, i) { return "Area" === i }(0, i) ? t.lineColor : t.color }(this.ge.options(), this.ge.seriesType());
            return new un(this.Yt, t, this.ys.negativeColor, this.ys.positiveColor)
        }
    }
    function dn(t, i) { return "Line" === i || "Area" === i }
    class fn {
        constructor(t) { this.lp = void 0, this.ge = void 0, this.MM = [], this.$o = null, this.xb = new Map, this.Sb = new ln((() => this.bM())), this.ys = { ...an, ...t } }
        hr(t) { this.ys = { ...this.ys, ...t }, this.bM() }
        YM(t) { this.Sb.cb(); const i = this.$o; i && t.forEach((t => { this.Sb.ab(t, i.key(t.time)) })) }
        sb() { return this.Sb.fb() }
        bM() { this.zM?.() }
        attached(t) {
            const {
                chart: i, series: s, requestUpdate: e, horzScaleBehavior: h } = t; this.lp = i, this.ge = s, this.$o = h; const n = this.ge.seriesType();
            if ("Area" !== n && "Line" !== n) throw new Error("UpDownMarkersPrimitive is only supported for Area and Line series types");
            this.MM = [new cn(this.ge, this.lp.timeScale(), this.ys)], this.zM = e, this.bM()
        }

        detached() { this.lp = void 0, this.ge = void 0, this.zM = void 0 }
        xp() { return u(this.lp) }
        wo() { return u(this.ge) }
        updateAllViews() { this.MM.forEach((t => t.Pt(this.sb()))) }

        paneViews() { return this.MM }
        ht(t) {
            if (!this.ge) throw new Error("Primitive not attached to series"); const i = this.ge.seriesType(); this.xb.clear(); const s = this.$o; s && t.forEach((t => {
                Ds(t) && dn(0, i) && this.xb.set(s.key(t.time), t.value)
            })), u(this.ge).setData(t)
        }

        Pt(t, i) {
            if (!this.ge || !this.$o) throw new Error("Primitive not attached to series");
            const s = this.ge.seriesType(), e = this.$o.key(t.time);
            if (Os(t) && this.xb.delete(e), Ds(t) && dn(0, s)) {
                const i = this.xb.get(e); i && this.Sb.ab({ time: t.time, value: t.value, sign: pn(t.value, i) }, e, this.ys.updateVisibilityDuration)
            }
            u(this.ge).update(t, i)
        }
        Cb() { this.Sb.cb() }
    }

    function pn(t, i) { return t === i ? 0 : t - i > 0 ? 1 : -1 }

    class mn extends Qh { setData(t) { return this.ah.ht(t) } update(t, i) { return this.ah.Pt(t, i) } markers() { return this.ah.sb() } setMarkers(t) { return this.ah.YM(t) } clearMarkers() { return this.ah.Cb() } }

    function gn(t, i = {}) { return new mn(t, new fn(i)) }

    const wn = { ...h, color: "#2196f3" };
    function vn() { return "5.0.6" }
    window.LightweightCharts = {
        AreaSeries: mh,
        BarSeries: Mh,
        BaselineSeries: dh,
        CandlestickSeries: Sh,
        ColorType: Fi,
        CrosshairMode: G,
        HistogramSeries: Ch,
        LastPriceAnimationMode: Ei,
        LineSeries: Ze,
        LineStyle: r,
        LineType: n,
        MismatchDirection: kt,
        PriceLineSource: Vi,
        PriceScaleMode: mi,
        TickMarkType: Bi,
        TrackingModeExitMode: zi,
        createChart: Le,
        createChartEx: Ae,
        createImageWatermark: Ih,
        createOptionsChart: nh,
        createSeriesMarkers: on,
        createTextWatermark: Bh,
        createUpDownMarkers: gn,
        createYieldCurveChart: sh,
        customSeriesDefaultOptions: wn,
        defaultHorzScaleBehavior: We,
        isBusinessDay: Li,
        isUTCTimestamp: Wi,
        version: vn
    };
    // export {
    //     mh as AreaSeries,
    //     Mh as BarSeries,
    //     dh as BaselineSeries,
    //     Sh as CandlestickSeries,
    //     Fi as ColorType,
    //     G as CrosshairMode,
    //     Ch as HistogramSeries,
    //     Ei as LastPriceAnimationMode,
    //     Ze as LineSeries,
    //     r as LineStyle,
    //     n as LineType,
    //     kt as MismatchDirection,
    //     Vi as PriceLineSource,
    //     mi as PriceScaleMode,
    //     Bi as TickMarkType,
    //     zi as TrackingModeExitMode,
    //     Le as createChart,
    //     Ae as createChartEx,
    //     Ih as createImageWatermark,
    //     nh as createOptionsChart,
    //     on as createSeriesMarkers,
    //     Bh as createTextWatermark,
    //     gn as createUpDownMarkers,
    //     sh as createYieldCurveChart,
    //     wn as customSeriesDefaultOptions,
    //     We as defaultHorzScaleBehavior,
    //     Li as isBusinessDay,
    //     Wi as isUTCTimestamp,
    //     vn as version
    // };
    // export default null;
    //# sourceMappingURL=/sm/94fdfc56549183942f96bf98c950a212ff9d7210219f5ee11d35cf47a292767c.map
}();
