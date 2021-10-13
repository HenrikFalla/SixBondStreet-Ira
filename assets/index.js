! function(t) {
	var e = {};

	function n(r) {
		if (e[r]) return e[r].exports;
		var i = e[r] = {
			i: r,
			l: !1,
			exports: {}
		};
		return t[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
	}
	n.m = t, n.c = e, n.d = function(t, e, r) {
		n.o(t, e) || Object.defineProperty(t, e, {
			enumerable: !0,
			get: r
		})
	}, n.r = function(t) {
		"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
			value: "Module"
		}), Object.defineProperty(t, "__esModule", {
			value: !0
		})
	}, n.t = function(t, e) {
		if (1 & e && (t = n(t)), 8 & e) return t;
		if (4 & e && "object" == typeof t && t && t.__esModule) return t;
		var r = Object.create(null);
		if (n.r(r), Object.defineProperty(r, "default", {
				enumerable: !0,
				value: t
			}), 2 & e && "string" != typeof t)
			for (var i in t) n.d(r, i, function(e) {
				return t[e]
			}.bind(null, i));
		return r
	}, n.n = function(t) {
		var e = t && t.__esModule ? function() {
			return t.default
		} : function() {
			return t
		};
		return n.d(e, "a", e), e
	}, n.o = function(t, e) {
		return Object.prototype.hasOwnProperty.call(t, e)
	}, n.p = "", n(n.s = 65)
}([function(t, e, n) {
	var r = n(27),
		i = n(28),
		o = n(16),
		a = n(29);
	t.exports = function(t) {
		return r(t) || i(t) || o(t) || a()
	}
}, function(t, e, n) {
	var r, i, o;
	/*!
	 * Flickity v2.2.1
	 * Touch, responsive, flickable carousels
	 *
	 * Licensed GPLv3 for open source use
	 * or Flickity Commercial License for commercial use
	 *
	 * https://flickity.metafizzy.co
	 * Copyright 2015-2019 Metafizzy
	 */
	window, i = [n(7), n(40), n(42), n(43), n(44), n(45), n(46)], void 0 === (o = "function" == typeof(r = function(t) {
		return t
	}) ? r.apply(e, i) : r) || (t.exports = o)
}, function(t, e, n) {
	! function(e, n) {
		var r = function(t, e, n) {
			"use strict";
			var r, i;
			if (function() {
					var e, n = {
						lazyClass: "lazyload",
						loadedClass: "lazyloaded",
						loadingClass: "lazyloading",
						preloadClass: "lazypreload",
						errorClass: "lazyerror",
						autosizesClass: "lazyautosizes",
						srcAttr: "data-src",
						srcsetAttr: "data-srcset",
						sizesAttr: "data-sizes",
						minSize: 40,
						customMedia: {},
						init: !0,
						expFactor: 1.5,
						hFac: .8,
						loadMode: 2,
						loadHidden: !0,
						ricTimeout: 0,
						throttleDelay: 125
					};
					for (e in i = t.lazySizesConfig || t.lazysizesConfig || {}, n) e in i || (i[e] = n[e])
				}(), !e || !e.getElementsByClassName) return {
				init: function() {},
				cfg: i,
				noSupport: !0
			};
			var o = e.documentElement,
				a = t.HTMLPictureElement,
				s = t.addEventListener.bind(t),
				c = t.setTimeout,
				l = t.requestAnimationFrame || c,
				u = t.requestIdleCallback,
				d = /^picture$/i,
				f = ["load", "error", "lazyincluded", "_lazyloaded"],
				h = {},
				p = Array.prototype.forEach,
				g = function(t, e) {
					return h[e] || (h[e] = new RegExp("(\\s|^)" + e + "(\\s|$)")), h[e].test(t.getAttribute("class") || "") && h[e]
				},
				v = function(t, e) {
					g(t, e) || t.setAttribute("class", (t.getAttribute("class") || "").trim() + " " + e)
				},
				m = function(t, e) {
					var n;
					(n = g(t, e)) && t.setAttribute("class", (t.getAttribute("class") || "").replace(n, " "))
				},
				y = function(t, e, n) {
					var r = n ? "addEventListener" : "removeEventListener";
					n && y(t, e), f.forEach((function(n) {
						t[r](n, e)
					}))
				},
				b = function(t, n, i, o, a) {
					var s = e.createEvent("Event");
					return i || (i = {}), i.instance = r, s.initEvent(n, !o, !a), s.detail = i, t.dispatchEvent(s), s
				},
				w = function(e, n) {
					var r;
					!a && (r = t.picturefill || i.pf) ? (n && n.src && !e.getAttribute("srcset") && e.setAttribute("srcset", n.src), r({
						reevaluate: !0,
						elements: [e]
					})) : n && n.src && (e.src = n.src)
				},
				E = function(t, e) {
					return (getComputedStyle(t, null) || {})[e]
				},
				_ = function(t, e, n) {
					for (n = n || t.offsetWidth; n < i.minSize && e && !t._lazysizesWidth;) n = e.offsetWidth, e = e.parentNode;
					return n
				},
				A = (ht = [], pt = [], gt = ht, vt = function() {
					var t = gt;
					for (gt = ht.length ? pt : ht, dt = !0, ft = !1; t.length;) t.shift()();
					dt = !1
				}, mt = function(t, n) {
					dt && !n ? t.apply(this, arguments) : (gt.push(t), ft || (ft = !0, (e.hidden ? c : l)(vt)))
				}, mt._lsFlush = vt, mt),
				k = function(t, e) {
					return e ? function() {
						A(t)
					} : function() {
						var e = this,
							n = arguments;
						A((function() {
							t.apply(e, n)
						}))
					}
				},
				T = function(t) {
					var e, r, i = function() {
							e = null, t()
						},
						o = function() {
							var t = n.now() - r;
							t < 99 ? c(o, 99 - t) : (u || i)(i)
						};
					return function() {
						r = n.now(), e || (e = c(o, 99))
					}
				},
				S = (W = /^img$/i, G = /^iframe$/i, $ = "onscroll" in t && !/(gle|ing)bot/.test(navigator.userAgent), J = 0, Y = 0, X = -1, Q = function(t) {
					Y--, (!t || Y < 0 || !t.target) && (Y = 0)
				}, Z = function(t) {
					return null == U && (U = "hidden" == E(e.body, "visibility")), U || !("hidden" == E(t.parentNode, "visibility") && "hidden" == E(t, "visibility"))
				}, K = function(t, n) {
					var r, i = t,
						a = Z(t);
					for (B -= n, V += n, F -= n, H += n; a && (i = i.offsetParent) && i != e.body && i != o;)(a = (E(i, "opacity") || 1) > 0) && "visible" != E(i, "overflow") && (r = i.getBoundingClientRect(), a = H > r.left && F < r.right && V > r.top - 1 && B < r.bottom + 1);
					return a
				}, tt = function() {
					var t, n, a, s, c, l, u, d, f, h, p, g, v = r.elements;
					if ((N = i.loadMode) && Y < 8 && (t = v.length)) {
						for (n = 0, X++; n < t; n++)
							if (v[n] && !v[n]._lazyRace)
								if (!$ || r.prematureUnveil && r.prematureUnveil(v[n])) st(v[n]);
								else if ((d = v[n].getAttribute("data-expand")) && (l = 1 * d) || (l = J), h || (h = !i.expand || i.expand < 1 ? o.clientHeight > 500 && o.clientWidth > 500 ? 500 : 370 : i.expand, r._defEx = h, p = h * i.expFactor, g = i.hFac, U = null, J < p && Y < 1 && X > 2 && N > 2 && !e.hidden ? (J = p, X = 0) : J = N > 1 && X > 1 && Y < 6 ? h : 0), f !== l && (z = innerWidth + l * g, R = innerHeight + l, u = -1 * l, f = l), a = v[n].getBoundingClientRect(), (V = a.bottom) >= u && (B = a.top) <= R && (H = a.right) >= u * g && (F = a.left) <= z && (V || H || F || B) && (i.loadHidden || Z(v[n])) && (j && Y < 3 && !d && (N < 3 || X < 4) || K(v[n], l))) {
							if (st(v[n]), c = !0, Y > 9) break
						} else !c && j && !s && Y < 4 && X < 4 && N > 2 && (P[0] || i.preloadAfterLoad) && (P[0] || !d && (V || H || F || B || "auto" != v[n].getAttribute(i.sizesAttr))) && (s = P[0] || v[n]);
						s && !c && st(s)
					}
				}, et = function(t) {
					var e, r = 0,
						o = i.throttleDelay,
						a = i.ricTimeout,
						s = function() {
							e = !1, r = n.now(), t()
						},
						l = u && a > 49 ? function() {
							u(s, {
								timeout: a
							}), a !== i.ricTimeout && (a = i.ricTimeout)
						} : k((function() {
							c(s)
						}), !0);
					return function(t) {
						var i;
						(t = !0 === t) && (a = 33), e || (e = !0, (i = o - (n.now() - r)) < 0 && (i = 0), t || i < 9 ? l() : c(l, i))
					}
				}(tt), nt = function(t) {
					var e = t.target;
					e._lazyCache ? delete e._lazyCache : (Q(t), v(e, i.loadedClass), m(e, i.loadingClass), y(e, it), b(e, "lazyloaded"))
				}, rt = k(nt), it = function(t) {
					rt({
						target: t.target
					})
				}, ot = function(t) {
					var e, n = t.getAttribute(i.srcsetAttr);
					(e = i.customMedia[t.getAttribute("data-media") || t.getAttribute("media")]) && t.setAttribute("media", e), n && t.setAttribute("srcset", n)
				}, at = k((function(t, e, n, r, o) {
					var a, s, l, u, f, h;
					(f = b(t, "lazybeforeunveil", e)).defaultPrevented || (r && (n ? v(t, i.autosizesClass) : t.setAttribute("sizes", r)), s = t.getAttribute(i.srcsetAttr), a = t.getAttribute(i.srcAttr), o && (u = (l = t.parentNode) && d.test(l.nodeName || "")), h = e.firesLoad || "src" in t && (s || a || u), f = {
						target: t
					}, v(t, i.loadingClass), h && (clearTimeout(I), I = c(Q, 2500), y(t, it, !0)), u && p.call(l.getElementsByTagName("source"), ot), s ? t.setAttribute("srcset", s) : a && !u && (G.test(t.nodeName) ? function(t, e) {
						try {
							t.contentWindow.location.replace(e)
						} catch (n) {
							t.src = e
						}
					}(t, a) : t.src = a), o && (s || u) && w(t, {
						src: a
					})), t._lazyRace && delete t._lazyRace, m(t, i.lazyClass), A((function() {
						var e = t.complete && t.naturalWidth > 1;
						h && !e || (e && v(t, "ls-is-cached"), nt(f), t._lazyCache = !0, c((function() {
							"_lazyCache" in t && delete t._lazyCache
						}), 9)), "lazy" == t.loading && Y--
					}), !0)
				})), st = function(t) {
					if (!t._lazyRace) {
						var e, n = W.test(t.nodeName),
							r = n && (t.getAttribute(i.sizesAttr) || t.getAttribute("sizes")),
							o = "auto" == r;
						(!o && j || !n || !t.getAttribute("src") && !t.srcset || t.complete || g(t, i.errorClass) || !g(t, i.lazyClass)) && (e = b(t, "lazyunveilread").detail, o && x.updateElem(t, !0, t.offsetWidth), t._lazyRace = !0, Y++, at(t, e, o, r, n))
					}
				}, ct = T((function() {
					i.loadMode = 3, et()
				})), lt = function() {
					3 == i.loadMode && (i.loadMode = 2), ct()
				}, ut = function() {
					j || (n.now() - M < 999 ? c(ut, 999) : (j = !0, i.loadMode = 3, et(), s("scroll", lt, !0)))
				}, {
					_: function() {
						M = n.now(), r.elements = e.getElementsByClassName(i.lazyClass), P = e.getElementsByClassName(i.lazyClass + " " + i.preloadClass), s("scroll", et, !0), s("resize", et, !0), s("pageshow", (function(t) {
							if (t.persisted) {
								var n = e.querySelectorAll("." + i.loadingClass);
								n.length && n.forEach && l((function() {
									n.forEach((function(t) {
										t.complete && st(t)
									}))
								}))
							}
						})), t.MutationObserver ? new MutationObserver(et).observe(o, {
							childList: !0,
							subtree: !0,
							attributes: !0
						}) : (o.addEventListener("DOMNodeInserted", et, !0), o.addEventListener("DOMAttrModified", et, !0), setInterval(et, 999)), s("hashchange", et, !0), ["focus", "mouseover", "click", "load", "transitionend", "animationend"].forEach((function(t) {
							e.addEventListener(t, et, !0)
						})), /d$|^c/.test(e.readyState) ? ut() : (s("load", ut), e.addEventListener("DOMContentLoaded", et), c(ut, 2e4)), r.elements.length ? (tt(), A._lsFlush()) : et()
					},
					checkElems: et,
					unveil: st,
					_aLSL: lt
				}),
				x = (L = k((function(t, e, n, r) {
					var i, o, a;
					if (t._lazysizesWidth = r, r += "px", t.setAttribute("sizes", r), d.test(e.nodeName || ""))
						for (o = 0, a = (i = e.getElementsByTagName("source")).length; o < a; o++) i[o].setAttribute("sizes", r);
					n.detail.dataAttr || w(t, n.detail)
				})), q = function(t, e, n) {
					var r, i = t.parentNode;
					i && (n = _(t, i, n), (r = b(t, "lazybeforesizes", {
						width: n,
						dataAttr: !!e
					})).defaultPrevented || (n = r.detail.width) && n !== t._lazysizesWidth && L(t, i, r, n))
				}, D = T((function() {
					var t, e = O.length;
					if (e)
						for (t = 0; t < e; t++) q(O[t])
				})), {
					_: function() {
						O = e.getElementsByClassName(i.autosizesClass), s("resize", D)
					},
					checkElems: D,
					updateElem: q
				}),
				C = function() {
					!C.i && e.getElementsByClassName && (C.i = !0, x._(), S._())
				};
			var O, L, q, D;
			var P, j, I, N, M, z, R, B, F, H, V, U, W, G, $, J, Y, X, Q, Z, K, tt, et, nt, rt, it, ot, at, st, ct, lt, ut;
			var dt, ft, ht, pt, gt, vt, mt;
			return c((function() {
				i.init && C()
			})), r = {
				cfg: i,
				autoSizer: x,
				loader: S,
				init: C,
				uP: w,
				aC: v,
				rC: m,
				hC: g,
				fire: b,
				gW: _,
				rAF: A
			}
		}(e, e.document, Date);
		e.lazySizes = r, t.exports && (t.exports = r)
	}("undefined" != typeof window ? window : {})
}, function(t, e, n) {
	"use strict";

	function r(t) {
		this.listenerMap = [{}, {}], t && this.root(t), this.handle = r.prototype.handle.bind(this), this._removedListeners = []
	}

	function i(t, e) {
		return t.toLowerCase() === e.tagName.toLowerCase()
	}

	function o(t, e) {
		return this.rootElement === window ? e === document || e === document.documentElement || e === window : this.rootElement === e
	}

	function a(t, e) {
		return t === e.id
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	}), e.default = void 0, r.prototype.root = function(t) {
		var e, n = this.listenerMap;
		if (this.rootElement) {
			for (e in n[1]) n[1].hasOwnProperty(e) && this.rootElement.removeEventListener(e, this.handle, !0);
			for (e in n[0]) n[0].hasOwnProperty(e) && this.rootElement.removeEventListener(e, this.handle, !1)
		}
		if (!t || !t.addEventListener) return this.rootElement && delete this.rootElement, this;
		for (e in this.rootElement = t, n[1]) n[1].hasOwnProperty(e) && this.rootElement.addEventListener(e, this.handle, !0);
		for (e in n[0]) n[0].hasOwnProperty(e) && this.rootElement.addEventListener(e, this.handle, !1);
		return this
	}, r.prototype.captureForType = function(t) {
		return -1 !== ["blur", "error", "focus", "load", "resize", "scroll"].indexOf(t)
	}, r.prototype.on = function(t, e, n, r) {
		var s, c, l, u;
		if (!t) throw new TypeError("Invalid event type: " + t);
		if ("function" == typeof e && (r = n, n = e, e = null), void 0 === r && (r = this.captureForType(t)), "function" != typeof n) throw new TypeError("Handler must be a type of Function");
		return s = this.rootElement, (c = this.listenerMap[r ? 1 : 0])[t] || (s && s.addEventListener(t, this.handle, r), c[t] = []), e ? /^[a-z]+$/i.test(e) ? (u = e, l = i) : /^#[a-z0-9\-_]+$/i.test(e) ? (u = e.slice(1), l = a) : (u = e, l = Element.prototype.matches) : (u = null, l = o.bind(this)), c[t].push({
			selector: e,
			handler: n,
			matcher: l,
			matcherParam: u
		}), this
	}, r.prototype.off = function(t, e, n, r) {
		var i, o, a, s, c;
		if ("function" == typeof e && (r = n, n = e, e = null), void 0 === r) return this.off(t, e, n, !0), this.off(t, e, n, !1), this;
		if (a = this.listenerMap[r ? 1 : 0], !t) {
			for (c in a) a.hasOwnProperty(c) && this.off(c, e, n);
			return this
		}
		if (!(s = a[t]) || !s.length) return this;
		for (i = s.length - 1; i >= 0; i--) o = s[i], e && e !== o.selector || n && n !== o.handler || (this._removedListeners.push(o), s.splice(i, 1));
		return s.length || (delete a[t], this.rootElement && this.rootElement.removeEventListener(t, this.handle, r)), this
	}, r.prototype.handle = function(t) {
		var e, n, r, i, o, a = t.type,
			s = [];
		if (!0 !== t.ftLabsDelegateIgnore) {
			switch (3 === (o = t.target).nodeType && (o = o.parentNode), o.correspondingUseElement && (o = o.correspondingUseElement), r = this.rootElement, t.eventPhase || (t.target !== t.currentTarget ? 3 : 2)) {
				case 1:
					s = this.listenerMap[1][a];
					break;
				case 2:
					this.listenerMap[0] && this.listenerMap[0][a] && (s = s.concat(this.listenerMap[0][a])), this.listenerMap[1] && this.listenerMap[1][a] && (s = s.concat(this.listenerMap[1][a]));
					break;
				case 3:
					s = this.listenerMap[0][a]
			}
			var c, l = [];
			for (n = s.length; o && n;) {
				for (e = 0; e < n && (i = s[e]); e++) o.tagName && ["button", "input", "select", "textarea"].indexOf(o.tagName.toLowerCase()) > -1 && o.hasAttribute("disabled") ? l = [] : i.matcher.call(o, i.matcherParam, o) && l.push([t, o, i]);
				if (o === r) break;
				if (n = s.length, (o = o.parentElement || o.parentNode) instanceof HTMLDocument) break
			}
			for (e = 0; e < l.length; e++)
				if (!(this._removedListeners.indexOf(l[e][2]) > -1) && !1 === this.fire.apply(this, l[e])) {
					l[e][0].ftLabsDelegateIgnore = !0, l[e][0].preventDefault(), c = !1;
					break
				} return c
		}
	}, r.prototype.fire = function(t, e, n) {
		return n.handler.call(e, t, e)
	}, r.prototype.destroy = function() {
		this.off(), this.root()
	};
	var s = r;
	e.default = s, t.exports = e.default
}, function(t, e, n) {
	var r, i;
	! function(o, a) {
		r = [n(36)], void 0 === (i = function(t) {
			return function(t, e) {
				"use strict";
				var n = {
						extend: function(t, e) {
							for (var n in e) t[n] = e[n];
							return t
						},
						modulo: function(t, e) {
							return (t % e + e) % e
						}
					},
					r = Array.prototype.slice;
				n.makeArray = function(t) {
					return Array.isArray(t) ? t : null == t ? [] : "object" == typeof t && "number" == typeof t.length ? r.call(t) : [t]
				}, n.removeFrom = function(t, e) {
					var n = t.indexOf(e); - 1 != n && t.splice(n, 1)
				}, n.getParent = function(t, n) {
					for (; t.parentNode && t != document.body;)
						if (t = t.parentNode, e(t, n)) return t
				}, n.getQueryElement = function(t) {
					return "string" == typeof t ? document.querySelector(t) : t
				}, n.handleEvent = function(t) {
					var e = "on" + t.type;
					this[e] && this[e](t)
				}, n.filterFindElements = function(t, r) {
					t = n.makeArray(t);
					var i = [];
					return t.forEach((function(t) {
						if (t instanceof HTMLElement)
							if (r) {
								e(t, r) && i.push(t);
								for (var n = t.querySelectorAll(r), o = 0; o < n.length; o++) i.push(n[o])
							} else i.push(t)
					})), i
				}, n.debounceMethod = function(t, e, n) {
					n = n || 100;
					var r = t.prototype[e],
						i = e + "Timeout";
					t.prototype[e] = function() {
						var t = this[i];
						clearTimeout(t);
						var e = arguments,
							o = this;
						this[i] = setTimeout((function() {
							r.apply(o, e), delete o[i]
						}), n)
					}
				}, n.docReady = function(t) {
					var e = document.readyState;
					"complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t)
				}, n.toDashed = function(t) {
					return t.replace(/(.)([A-Z])/g, (function(t, e, n) {
						return e + "-" + n
					})).toLowerCase()
				};
				var i = t.console;
				return n.htmlInit = function(e, r) {
					n.docReady((function() {
						var o = n.toDashed(r),
							a = "data-" + o,
							s = document.querySelectorAll("[" + a + "]"),
							c = document.querySelectorAll(".js-" + o),
							l = n.makeArray(s).concat(n.makeArray(c)),
							u = a + "-options",
							d = t.jQuery;
						l.forEach((function(t) {
							var n, o = t.getAttribute(a) || t.getAttribute(u);
							try {
								n = o && JSON.parse(o)
							} catch (e) {
								return void(i && i.error("Error parsing " + a + " on " + t.className + ": " + e))
							}
							var s = new e(t, n);
							d && d.data(t, r, s)
						}))
					}))
				}, n
			}(o, t)
		}.apply(e, r)) || (t.exports = i)
	}(window)
}, function(t, e, n) {
	"use strict";

	function r(t) {
		(new Image).src = t
	}

	function i(t, e) {
		if (null === e) return t;
		if ("master" === e) return o(t);
		var n = t.match(/\.(jpg|jpeg|gif|png|bmp|bitmap|tiff|tif)(\?v=\d+)?$/i);
		if (n) {
			var r = t.split(n[0]),
				i = n[0];
			return o(r[0] + "_" + e + i)
		}
		return null
	}

	function o(t) {
		return t.replace(/http(s)?:/, "")
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	}), e.preload = function(t, e) {
		"string" == typeof t && (t = [t]);
		for (var n = 0; n < t.length; n++) {
			r(i(t[n], e))
		}
	}, e.loadImage = r, e.imageSize = function(t) {
		var e = t.match(/.+_((?:pico|icon|thumb|small|compact|medium|large|grande)|\d{1,4}x\d{0,4}|x\d{1,4})[_\.@]/);
		return e ? e[1] : null
	}, e.getSizedImageUrl = i, e.removeProtocol = o
}, function(t, e, n) {
	(function(e) {
		t.exports = function() {
			"use strict";

			function t(e) {
				return (t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
					return typeof t
				} : function(t) {
					return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
				})(e)
			}

			function n(t, e) {
				for (var n = 0; n < e.length; n++) {
					var r = e[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
				}
			}

			function r(t, e, n) {
				return e in t ? Object.defineProperty(t, e, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : t[e] = n, t
			}

			function i(t, e) {
				var n = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(t);
					e && (r = r.filter((function(e) {
						return Object.getOwnPropertyDescriptor(t, e).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function o(t) {
				for (var e = 1; e < arguments.length; e++) {
					var n = null != arguments[e] ? arguments[e] : {};
					e % 2 ? i(Object(n), !0).forEach((function(e) {
						r(t, e, n[e])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach((function(e) {
						Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
					}))
				}
				return t
			}

			function a(t) {
				return function(t) {
					if (Array.isArray(t)) return s(t)
				}(t) || function(t) {
					if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
				}(t) || function(t, e) {
					if (t) {
						if ("string" == typeof t) return s(t, e);
						var n = Object.prototype.toString.call(t).slice(8, -1);
						return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? s(t, e) : void 0
					}
				}(t) || function() {
					throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
				}()
			}

			function s(t, e) {
				(null == e || e > t.length) && (e = t.length);
				for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
				return r
			}

			function c(t, e) {
				if (!Array.isArray(t) || !t.length) return t;
				var n, r, i = o(o({}, {
					strictlyTwoElementsInRangeArrays: !1,
					progressFn: null
				}), e);
				if (i.strictlyTwoElementsInRangeArrays && !t.every((function(t, e) {
						return 2 === t.length || (n = e, r = t.length, !1)
					}))) throw new TypeError("ranges-sort: [THROW_ID_03] The first argument should be an array and must consist of arrays which are natural number indexes representing TWO string index ranges. However, ".concat(n, "th range (").concat(JSON.stringify(t[n], null, 4), ") has not two but ").concat(r, " elements!"));
				if (!t.every((function(t, e) {
						return !(!Number.isInteger(t[0]) || t[0] < 0 || !Number.isInteger(t[1]) || t[1] < 0) || (n = e, !1)
					}))) throw new TypeError("ranges-sort: [THROW_ID_04] The first argument should be an array and must consist of arrays which are natural number indexes representing string index ranges. However, ".concat(n, "th range (").concat(JSON.stringify(t[n], null, 4), ") does not consist of only natural numbers!"));
				var a = t.length * t.length,
					s = 0;
				return Array.from(t).sort((function(t, e) {
					return i.progressFn && (s += 1, i.progressFn(Math.floor(100 * s / a))), t[0] === e[0] ? t[1] < e[1] ? -1 : t[1] > e[1] ? 1 : 0 : t[0] < e[0] ? -1 : 1
				}))
			}

			function l(e, n) {
				function r(t) {
					return "string" == typeof t
				}

				function i(e) {
					return e && "object" === t(e) && !Array.isArray(e)
				}
				if (!Array.isArray(e) || !e.length) return e;
				var s, l = {
					mergeType: 1,
					progressFn: null,
					joinRangesThatTouchEdges: !0
				};
				if (n) {
					if (!i(n)) throw new Error("emlint: [THROW_ID_03] the second input argument must be a plain object. It was given as:\n".concat(JSON.stringify(n, null, 4), " (type ").concat(t(n), ")"));
					if ((s = o(o({}, l), n)).progressFn && i(s.progressFn) && !Object.keys(s.progressFn).length) s.progressFn = null;
					else if (s.progressFn && "function" != typeof s.progressFn) throw new Error('ranges-merge: [THROW_ID_01] opts.progressFn must be a function! It was given of a type: "'.concat(t(s.progressFn), '", equal to ').concat(JSON.stringify(s.progressFn, null, 4)));
					if (s.mergeType && 1 !== s.mergeType && 2 !== s.mergeType)
						if (r(s.mergeType) && "1" === s.mergeType.trim()) s.mergeType = 1;
						else {
							if (!r(s.mergeType) || "2" !== s.mergeType.trim()) throw new Error('ranges-merge: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "'.concat(t(s.mergeType), '", equal to ').concat(JSON.stringify(s.mergeType, null, 4)));
							s.mergeType = 2
						} if ("boolean" != typeof s.joinRangesThatTouchEdges) throw new Error('ranges-merge: [THROW_ID_04] opts.joinRangesThatTouchEdges was customised to a wrong thing! It was given of a type: "'.concat(t(s.joinRangesThatTouchEdges), '", equal to ').concat(JSON.stringify(s.joinRangesThatTouchEdges, null, 4)))
				} else s = o({}, l);
				for (var u, d, f, h = e.map((function(t) {
						return a(t)
					})).filter((function(t) {
						return void 0 !== t[2] || t[0] !== t[1]
					})), p = (u = s.progressFn ? c(h, {
						progressFn: function(t) {
							(f = Math.floor(t / 5)) !== d && (d = f, s.progressFn(f))
						}
					}) : c(h)).length - 1, g = p; g > 0; g--) s.progressFn && (f = Math.floor(78 * (1 - g / p)) + 21) !== d && f > d && (d = f, s.progressFn(f)), (u[g][0] <= u[g - 1][0] || !s.joinRangesThatTouchEdges && u[g][0] < u[g - 1][1] || s.joinRangesThatTouchEdges && u[g][0] <= u[g - 1][1]) && (u[g - 1][0] = Math.min(u[g][0], u[g - 1][0]), u[g - 1][1] = Math.max(u[g][1], u[g - 1][1]), void 0 !== u[g][2] && (u[g - 1][0] >= u[g][0] || u[g - 1][1] <= u[g][1]) && null !== u[g - 1][2] && (null === u[g][2] && null !== u[g - 1][2] ? u[g - 1][2] = null : void 0 !== u[g - 1][2] ? 2 === s.mergeType && u[g - 1][0] === u[g][0] ? u[g - 1][2] = u[g][2] : u[g - 1][2] += u[g][2] : u[g - 1][2] = u[g][2]), u.splice(g, 1), g = u.length);
				return u
			}

			function u(t) {
				return null != t
			}

			function d(t) {
				return "string" == typeof t
			}

			function f(e, n, r) {
				var i, o = 0,
					a = 0;
				if (0 === arguments.length) throw new Error("ranges-apply: [THROW_ID_01] inputs missing!");
				if (!d(e)) throw new TypeError("ranges-apply: [THROW_ID_02] first input argument must be a string! Currently it's: ".concat(t(e), ", equal to: ").concat(JSON.stringify(e, null, 4)));
				if (null === n) return e;
				if (!Array.isArray(n)) throw new TypeError("ranges-apply: [THROW_ID_03] second input argument must be an array (or null)! Currently it's: ".concat(t(n), ", equal to: ").concat(JSON.stringify(n, null, 4)));
				if (r && "function" != typeof r) throw new TypeError("ranges-apply: [THROW_ID_04] the third input argument must be a function (or falsey)! Currently it's: ".concat(t(r), ", equal to: ").concat(JSON.stringify(r, null, 4)));
				var s = (i = Array.isArray(n) && (Number.isInteger(n[0]) && n[0] >= 0 || /^\d*$/.test(n[0])) && (Number.isInteger(n[1]) && n[1] >= 0 || /^\d*$/.test(n[1])) ? [Array.from(n)] : Array.from(n)).length,
					c = 0;
				i.forEach((function(e, n) {
					if (r && (o = Math.floor(c / s * 10)) !== a && (a = o, r(o)), !Array.isArray(e)) throw new TypeError("ranges-apply: [THROW_ID_05] ranges array, second input arg., has ".concat(n, "th element not an array: ").concat(JSON.stringify(e, null, 4), ", which is ").concat(t(e)));
					if (!Number.isInteger(e[0]) || e[0] < 0) {
						if (!/^\d*$/.test(e[0])) throw new TypeError("ranges-apply: [THROW_ID_06] ranges array, second input arg. has ".concat(n, "th element, array [").concat(e[0], ",").concat(e[1], "]. That array has first element not an integer, but ").concat(t(e[0]), ", equal to: ").concat(JSON.stringify(e[0], null, 4), ". Computer doesn't like this."));
						i[n][0] = Number.parseInt(i[n][0], 10)
					}
					if (!Number.isInteger(e[1])) {
						if (!/^\d*$/.test(e[1])) throw new TypeError("ranges-apply: [THROW_ID_07] ranges array, second input arg. has ".concat(n, "th element, array [").concat(e[0], ",").concat(e[1], "]. That array has second element not an integer, but ").concat(t(e[1]), ", equal to: ").concat(JSON.stringify(e[1], null, 4), ". Computer doesn't like this."));
						i[n][1] = Number.parseInt(i[n][1], 10)
					}
					c += 1
				}));
				var f = l(i, {
						progressFn: function(t) {
							r && (o = 10 + Math.floor(t / 10)) !== a && (a = o, r(o))
						}
					}),
					h = f.length;
				if (h > 0) {
					var p = e.slice(f[h - 1][1]);
					e = f.reduce((function(t, n, i, s) {
						r && (o = 20 + Math.floor(i / h * 80)) !== a && (a = o, r(o));
						var c = 0 === i ? 0 : s[i - 1][1],
							l = s[i][0];
						return t + e.slice(c, l) + (u(s[i][2]) ? s[i][2] : "")
					}), ""), e += p
				}
				return e
			}

			function h(t) {
				var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
					n = arguments.length > 2 ? arguments[2] : void 0;
				if (!(n.trim() || t.length && "\n" !== n && " " !== n && " " === (e ? t[t.length - 1] : t[0]) || t.length && "\n" === (e ? t[t.length - 1] : t[0]) && "\n" !== n && " " !== n))
					if (e) {
						if (("\n" === n || " " === n) && t.length && " " === t[t.length - 1])
							for (; t.length && " " === t[t.length - 1];) t.pop();
						t.push(" " === n || "\n" === n ? n : " ")
					} else {
						if (("\n" === n || " " === n) && t.length && " " === t[0])
							for (; t.length && " " === t[0];) t.shift();
						t.unshift(" " === n || "\n" === n ? n : " ")
					}
			}

			function p(t, e) {
				if ("string" == typeof t && t.length) {
					var n, r, i = !1;
					if (t.includes("\r\n") && (i = !0), n = e && "number" == typeof e ? e : 1, "" === t.trim()) {
						var o = [];
						for (r = n, Array.from(t).forEach((function(t) {
								("\n" !== t || r) && ("\n" === t && (r -= 1), h(o, !0, t))
							})); o.length > 1 && " " === o[o.length - 1];) o.pop();
						return o.join("")
					}
					var a = [];
					if (r = n, "" === t[0].trim())
						for (var s = 0, c = t.length; s < c && !t[s].trim(); s++)("\n" !== t[s] || r) && ("\n" === t[s] && (r -= 1), h(a, !0, t[s]));
					var l = [];
					if (r = n, "" === t.slice(-1).trim())
						for (var u = t.length; u-- && !t[u].trim();)("\n" !== t[u] || r) && ("\n" === t[u] && (r -= 1), h(l, !1, t[u]));
					return i ? "".concat(a.join("")).concat(t.trim()).concat(l.join("")).replace(/\n/g, "\r\n") : a.join("") + t.trim() + l.join("")
				}
				return t
			}

			function g(t) {
				return null != t
			}

			function v(t) {
				return Number.isInteger(t) && t >= 0
			}

			function m(t) {
				return "string" == typeof t
			}

			function y(t) {
				return /^\d*$/.test(t) ? parseInt(t, 10) : t
			}
			var b, w, E = function() {
					function e(n) {
						! function(t, e) {
							if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
						}(this, e);
						var r = o(o({}, {
							limitToBeAddedWhitespace: !1,
							limitLinebreaksCount: 1,
							mergeType: 1
						}), n);
						if (r.mergeType && 1 !== r.mergeType && 2 !== r.mergeType)
							if (m(r.mergeType) && "1" === r.mergeType.trim()) r.mergeType = 1;
							else {
								if (!m(r.mergeType) || "2" !== r.mergeType.trim()) throw new Error('ranges-push: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "'.concat(t(r.mergeType), '", equal to ').concat(JSON.stringify(r.mergeType, null, 4)));
								r.mergeType = 2
							} this.opts = r
					}
					var r, i;
					return r = e, (i = [{
						key: "add",
						value: function(e, n, r) {
							for (var i = this, o = arguments.length, s = new Array(o > 3 ? o - 3 : 0), c = 3; c < o; c++) s[c - 3] = arguments[c];
							if (s.length > 0) throw new TypeError("ranges-push/Ranges/add(): [THROW_ID_03] Please don't overload the add() method. From the 4th input argument onwards we see these redundant arguments: ".concat(JSON.stringify(s, null, 4)));
							if (g(e) || g(n)) {
								if (g(e) && !g(n)) {
									if (Array.isArray(e)) {
										if (e.length) {
											if (e.some((function(t) {
													return Array.isArray(t)
												}))) return void e.forEach((function(t) {
												Array.isArray(t) && i.add.apply(i, a(t))
											}));
											e.length > 1 && v(y(e[0])) && v(y(e[1])) && this.add.apply(this, a(e))
										}
										return
									}
									throw new TypeError('ranges-push/Ranges/add(): [THROW_ID_12] the first input argument, "from" is set ('.concat(JSON.stringify(e, null, 0), ') but second-one, "to" is not (').concat(JSON.stringify(n, null, 0), ")"))
								}
								if (!g(e) && g(n)) throw new TypeError('ranges-push/Ranges/add(): [THROW_ID_13] the second input argument, "to" is set ('.concat(JSON.stringify(n, null, 0), ') but first-one, "from" is not (').concat(JSON.stringify(e, null, 0), ")"));
								var l = /^\d*$/.test(e) ? parseInt(e, 10) : e,
									u = /^\d*$/.test(n) ? parseInt(n, 10) : n;
								if (v(r) && (r = String(r)), !v(l) || !v(u)) throw v(l) && l >= 0 ? new TypeError('ranges-push/Ranges/add(): [THROW_ID_10] "to" value, the second input argument, must be a natural number or zero! Currently it\'s of a type "'.concat(t(u), '" equal to: ').concat(JSON.stringify(u, null, 4))) : new TypeError('ranges-push/Ranges/add(): [THROW_ID_09] "from" value, the first input argument, must be a natural number or zero! Currently it\'s of a type "'.concat(t(l), '" equal to: ').concat(JSON.stringify(l, null, 4)));
								if (g(r) && !m(r) && !v(r)) throw new TypeError("ranges-push/Ranges/add(): [THROW_ID_08] The third argument, the value to add, was given not as string but ".concat(t(r), ", equal to:\n").concat(JSON.stringify(r, null, 4)));
								if (g(this.slices) && Array.isArray(this.last()) && l === this.last()[1]) {
									if (this.last()[1] = u, this.last()[2], null !== this.last()[2] && g(r)) {
										var d = !(g(this.last()[2]) && this.last()[2].length > 0) || this.opts && this.opts.mergeType && 1 !== this.opts.mergeType ? r : this.last()[2] + r;
										this.opts.limitToBeAddedWhitespace && (d = p(d, this.opts.limitLinebreaksCount)), m(d) && !d.length || (this.last()[2] = d)
									}
								} else {
									this.slices || (this.slices = []);
									var f = void 0 === r || m(r) && !r.length ? [l, u] : [l, u, this.opts.limitToBeAddedWhitespace ? p(r, this.opts.limitLinebreaksCount) : r];
									this.slices.push(f)
								}
							}
						}
					}, {
						key: "push",
						value: function(t, e, n) {
							for (var r = arguments.length, i = new Array(r > 3 ? r - 3 : 0), o = 3; o < r; o++) i[o - 3] = arguments[o];
							this.add.apply(this, [t, e, n].concat(i))
						}
					}, {
						key: "current",
						value: function() {
							var t = this;
							return null != this.slices ? (this.slices = l(this.slices, {
								mergeType: this.opts.mergeType
							}), this.opts.limitToBeAddedWhitespace ? this.slices.map((function(e) {
								return g(e[2]) ? [e[0], e[1], p(e[2], t.opts.limitLinebreaksCount)] : e
							})) : this.slices) : null
						}
					}, {
						key: "wipe",
						value: function() {
							this.slices = void 0
						}
					}, {
						key: "replace",
						value: function(t) {
							if (Array.isArray(t) && t.length) {
								if (!Array.isArray(t[0]) || !v(t[0][0])) throw new Error("ranges-push/Ranges/replace(): [THROW_ID_11] Single range was given but we expected array of arrays! The first element, ".concat(JSON.stringify(t[0], null, 4), " should be an array and its first element should be an integer, a string index."));
								this.slices = Array.from(t)
							} else this.slices = void 0
						}
					}, {
						key: "last",
						value: function() {
							return void 0 !== this.slices && Array.isArray(this.slices) ? this.slices[this.slices.length - 1] : null
						}
					}]) && n(r.prototype, i), e
				}(),
				_ = Function.prototype,
				A = Object.prototype,
				k = _.toString,
				T = A.hasOwnProperty,
				S = k.call(Object),
				x = A.toString,
				C = (b = Object.getPrototypeOf, w = Object, function(t) {
					return b(w(t))
				}),
				O = function(e) {
					if (! function(e) {
							return !!e && "object" == t(e)
						}(e) || "[object Object]" != x.call(e) || function(t) {
							var e = !1;
							if (null != t && "function" != typeof t.toString) try {
								e = !!(t + "")
							} catch (t) {}
							return e
						}(e)) return !1;
					var n = C(e);
					if (null === n) return !0;
					var r = T.call(n, "constructor") && n.constructor;
					return "function" == typeof r && r instanceof r && k.call(r) == S
				},
				L = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== e ? e : "undefined" != typeof self ? self : {};

			function q(t) {
				return t && t.default || t
			}
			var D = /^\s+|\s+$/g,
				P = "[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]",
				j = "\\ud83c[\\udffb-\\udfff]",
				I = "[^\\ud800-\\udfff]",
				N = "(?:\\ud83c[\\udde6-\\uddff]){2}",
				M = "[\\ud800-\\udbff][\\udc00-\\udfff]",
				z = "(?:" + P + "|" + j + ")?",
				R = "[\\ufe0e\\ufe0f]?" + z + "(?:\\u200d(?:" + [I, N, M].join("|") + ")[\\ufe0e\\ufe0f]?" + z + ")*",
				B = "(?:" + [I + P + "?", P, N, M, "[\\ud800-\\udfff]"].join("|") + ")",
				F = RegExp(j + "(?=" + j + ")|" + B + R, "g"),
				H = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0\\ufe0e\\ufe0f]"),
				V = "object" == t(L) && L && L.Object === Object && L,
				U = "object" == ("undefined" == typeof self ? "undefined" : t(self)) && self && self.Object === Object && self,
				W = V || U || Function("return this")();

			function G(t, e, n) {
				if (e != e) return function(t, e, n, r) {
					for (var i = t.length, o = n + -1; ++o < i;)
						if (e(t[o], o, t)) return o;
					return -1
				}(t, $, n);
				for (var r = n - 1, i = t.length; ++r < i;)
					if (t[r] === e) return r;
				return -1
			}

			function $(t) {
				return t != t
			}

			function J(t) {
				return function(t) {
					return H.test(t)
				}(t) ? function(t) {
					return t.match(F) || []
				}(t) : function(t) {
					return t.split("")
				}(t)
			}
			var Y = Object.prototype.toString,
				X = W.Symbol,
				Q = X ? X.prototype : void 0,
				Z = Q ? Q.toString : void 0;

			function K(e) {
				if ("string" == typeof e) return e;
				if (function(e) {
						return "symbol" == t(e) || function(e) {
							return !!e && "object" == t(e)
						}(e) && "[object Symbol]" == Y.call(e)
					}(e)) return Z ? Z.call(e) : "";
				var n = e + "";
				return "0" == n && 1 / e == -1 / 0 ? "-0" : n
			}
			var tt = function(t, e, n) {
					var r;
					if ((t = null == (r = t) ? "" : K(r)) && (n || void 0 === e)) return t.replace(D, "");
					if (!t || !(e = K(e))) return t;
					var i = J(t),
						o = J(e);
					return function(t, e, n) {
						var r = t.length;
						return n = void 0 === n ? r : n, !e && n >= r ? t : function(t, e, n) {
							var r = -1,
								i = t.length;
							e < 0 && (e = -e > i ? 0 : i + e), (n = n > i ? i : n) < 0 && (n += i), i = e > n ? 0 : n - e >>> 0, e >>>= 0;
							for (var o = Array(i); ++r < i;) o[r] = t[r + e];
							return o
						}(t, e, n)
					}(i, function(t, e) {
						for (var n = -1, r = t.length; ++n < r && G(e, t[n], 0) > -1;);
						return n
					}(i, o), function(t, e) {
						for (var n = t.length; n-- && G(e, t[n], 0) > -1;);
						return n
					}(i, o) + 1).join("")
				},
				et = /^\[object .+?Constructor\]$/,
				nt = "object" == t(L) && L && L.Object === Object && L,
				rt = "object" == ("undefined" == typeof self ? "undefined" : t(self)) && self && self.Object === Object && self,
				it = nt || rt || Function("return this")();

			function ot(t, e, n) {
				switch (n.length) {
					case 0:
						return t.call(e);
					case 1:
						return t.call(e, n[0]);
					case 2:
						return t.call(e, n[0], n[1]);
					case 3:
						return t.call(e, n[0], n[1], n[2])
				}
				return t.apply(e, n)
			}

			function at(t, e) {
				return !(!t || !t.length) && function(t, e, n) {
					if (e != e) return function(t, e, n, r) {
						for (var i = t.length, o = -1; ++o < i;)
							if (e(t[o], o, t)) return o;
						return -1
					}(t, ct);
					for (var r = -1, i = t.length; ++r < i;)
						if (t[r] === e) return r;
					return -1
				}(t, e) > -1
			}

			function st(t, e, n) {
				for (var r = -1, i = t ? t.length : 0; ++r < i;)
					if (n(e, t[r])) return !0;
				return !1
			}

			function ct(t) {
				return t != t
			}

			function lt(t, e) {
				return t.has(e)
			}
			var ut, dt = Array.prototype,
				ft = Function.prototype,
				ht = Object.prototype,
				pt = it["__core-js_shared__"],
				gt = (ut = /[^.]+$/.exec(pt && pt.keys && pt.keys.IE_PROTO || "")) ? "Symbol(src)_1." + ut : "",
				vt = ft.toString,
				mt = ht.hasOwnProperty,
				yt = ht.toString,
				bt = RegExp("^" + vt.call(mt).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
				wt = dt.splice,
				Et = Math.max,
				_t = Lt(it, "Map"),
				At = Lt(Object, "create");

			function kt(t) {
				var e = -1,
					n = t ? t.length : 0;
				for (this.clear(); ++e < n;) {
					var r = t[e];
					this.set(r[0], r[1])
				}
			}

			function Tt(t) {
				var e = -1,
					n = t ? t.length : 0;
				for (this.clear(); ++e < n;) {
					var r = t[e];
					this.set(r[0], r[1])
				}
			}

			function St(t) {
				var e = -1,
					n = t ? t.length : 0;
				for (this.clear(); ++e < n;) {
					var r = t[e];
					this.set(r[0], r[1])
				}
			}

			function xt(t) {
				var e = -1,
					n = t ? t.length : 0;
				for (this.__data__ = new St; ++e < n;) this.add(t[e])
			}

			function Ct(t, e) {
				for (var n, r, i = t.length; i--;)
					if ((n = t[i][0]) === (r = e) || n != n && r != r) return i;
				return -1
			}

			function Ot(e, n) {
				var r, i, o = e.__data__;
				return ("string" == (i = t(r = n)) || "number" == i || "symbol" == i || "boolean" == i ? "__proto__" !== r : null === r) ? o["string" == typeof n ? "string" : "hash"] : o.map
			}

			function Lt(t, e) {
				var n = function(t, e) {
					return null == t ? void 0 : t[e]
				}(t, e);
				return function(t) {
					return !(!Dt(t) || function(t) {
						return !!gt && gt in t
					}(t)) && (qt(t) || function(t) {
						var e = !1;
						if (null != t && "function" != typeof t.toString) try {
							e = !!(t + "")
						} catch (t) {}
						return e
					}(t) ? bt : et).test(function(t) {
						if (null != t) {
							try {
								return vt.call(t)
							} catch (t) {}
							try {
								return t + ""
							} catch (t) {}
						}
						return ""
					}(t))
				}(n) ? n : void 0
			}

			function qt(t) {
				var e = Dt(t) ? yt.call(t) : "";
				return "[object Function]" == e || "[object GeneratorFunction]" == e
			}

			function Dt(e) {
				var n = t(e);
				return !!e && ("object" == n || "function" == n)
			}
			kt.prototype.clear = function() {
				this.__data__ = At ? At(null) : {}
			}, kt.prototype.delete = function(t) {
				return this.has(t) && delete this.__data__[t]
			}, kt.prototype.get = function(t) {
				var e = this.__data__;
				if (At) {
					var n = e[t];
					return "__lodash_hash_undefined__" === n ? void 0 : n
				}
				return mt.call(e, t) ? e[t] : void 0
			}, kt.prototype.has = function(t) {
				var e = this.__data__;
				return At ? void 0 !== e[t] : mt.call(e, t)
			}, kt.prototype.set = function(t, e) {
				return this.__data__[t] = At && void 0 === e ? "__lodash_hash_undefined__" : e, this
			}, Tt.prototype.clear = function() {
				this.__data__ = []
			}, Tt.prototype.delete = function(t) {
				var e = this.__data__,
					n = Ct(e, t);
				return !(n < 0 || (n == e.length - 1 ? e.pop() : wt.call(e, n, 1), 0))
			}, Tt.prototype.get = function(t) {
				var e = this.__data__,
					n = Ct(e, t);
				return n < 0 ? void 0 : e[n][1]
			}, Tt.prototype.has = function(t) {
				return Ct(this.__data__, t) > -1
			}, Tt.prototype.set = function(t, e) {
				var n = this.__data__,
					r = Ct(n, t);
				return r < 0 ? n.push([t, e]) : n[r][1] = e, this
			}, St.prototype.clear = function() {
				this.__data__ = {
					hash: new kt,
					map: new(_t || Tt),
					string: new kt
				}
			}, St.prototype.delete = function(t) {
				return Ot(this, t).delete(t)
			}, St.prototype.get = function(t) {
				return Ot(this, t).get(t)
			}, St.prototype.has = function(t) {
				return Ot(this, t).has(t)
			}, St.prototype.set = function(t, e) {
				return Ot(this, t).set(t, e), this
			}, xt.prototype.add = xt.prototype.push = function(t) {
				return this.__data__.set(t, "__lodash_hash_undefined__"), this
			}, xt.prototype.has = function(t) {
				return this.__data__.has(t)
			};
			var Pt = function(t, e) {
					return e = Et(void 0 === e ? t.length - 1 : e, 0),
						function() {
							for (var n = arguments, r = -1, i = Et(n.length - e, 0), o = Array(i); ++r < i;) o[r] = n[e + r];
							r = -1;
							for (var a = Array(e + 1); ++r < e;) a[r] = n[r];
							return a[e] = o, ot(t, this, a)
						}
				}((function(e, n) {
					return function(e) {
						return !!e && "object" == t(e)
					}(r = e) && function(t) {
						return null != t && function(t) {
							return "number" == typeof t && t > -1 && t % 1 == 0 && t <= 9007199254740991
						}(t.length) && !qt(t)
					}(r) ? function(t, e, n, r) {
						var i = -1,
							o = at,
							a = !0,
							s = t.length,
							c = [],
							l = e.length;
						if (!s) return c;
						n && (e = function(t, e) {
							for (var n = -1, r = t ? t.length : 0, i = Array(r); ++n < r;) i[n] = e(t[n], n, t);
							return i
						}(e, function(t) {
							return function(e) {
								return t(e)
							}
						}(n))), r ? (o = st, a = !1) : e.length >= 200 && (o = lt, a = !1, e = new xt(e));
						t: for (; ++i < s;) {
							var u = t[i],
								d = n ? n(u) : u;
							if (u = r || 0 !== u ? u : 0, a && d == d) {
								for (var f = l; f--;)
									if (e[f] === d) continue t;
								c.push(u)
							} else o(e, d, r) || c.push(u)
						}
						return c
					}(e, n) : [];
					var r
				})),
				jt = 2147483647,
				It = /^xn--/,
				Nt = /[^\x20-\x7E]/,
				Mt = /[\x2E\u3002\uFF0E\uFF61]/g,
				zt = {
					overflow: "Overflow: input needs wider integers to process",
					"not-basic": "Illegal input >= 0x80 (not a basic code point)",
					"invalid-input": "Invalid input"
				},
				Rt = Math.floor,
				Bt = String.fromCharCode;
			/*! https://mths.be/punycode v1.4.1 by @mathias */
			function Ft(t) {
				throw new RangeError(zt[t])
			}

			function Ht(t, e) {
				for (var n = t.length, r = []; n--;) r[n] = e(t[n]);
				return r
			}

			function Vt(t, e) {
				var n = t.split("@"),
					r = "";
				return n.length > 1 && (r = n[0] + "@", t = n[1]), r + Ht((t = t.replace(Mt, ".")).split("."), e).join(".")
			}

			function Ut(t) {
				for (var e, n, r = [], i = 0, o = t.length; i < o;)(e = t.charCodeAt(i++)) >= 55296 && e <= 56319 && i < o ? 56320 == (64512 & (n = t.charCodeAt(i++))) ? r.push(((1023 & e) << 10) + (1023 & n) + 65536) : (r.push(e), i--) : r.push(e);
				return r
			}

			function Wt(t) {
				return Ht(t, (function(t) {
					var e = "";
					return t > 65535 && (e += Bt((t -= 65536) >>> 10 & 1023 | 55296), t = 56320 | 1023 & t), e + Bt(t)
				})).join("")
			}

			function Gt(t, e) {
				return t + 22 + 75 * (t < 26) - ((0 != e) << 5)
			}

			function $t(t, e, n) {
				var r = 0;
				for (t = n ? Rt(t / 700) : t >> 1, t += Rt(t / e); t > 455; r += 36) t = Rt(t / 35);
				return Rt(r + 36 * t / (t + 38))
			}

			function Jt(t) {
				var e, n, r, i, o, a, s, c, l, u, d, f = [],
					h = t.length,
					p = 0,
					g = 128,
					v = 72;
				for ((n = t.lastIndexOf("-")) < 0 && (n = 0), r = 0; r < n; ++r) t.charCodeAt(r) >= 128 && Ft("not-basic"), f.push(t.charCodeAt(r));
				for (i = n > 0 ? n + 1 : 0; i < h;) {
					for (o = p, a = 1, s = 36; i >= h && Ft("invalid-input"), ((c = (d = t.charCodeAt(i++)) - 48 < 10 ? d - 22 : d - 65 < 26 ? d - 65 : d - 97 < 26 ? d - 97 : 36) >= 36 || c > Rt((jt - p) / a)) && Ft("overflow"), p += c * a, !(c < (l = s <= v ? 1 : s >= v + 26 ? 26 : s - v)); s += 36) a > Rt(jt / (u = 36 - l)) && Ft("overflow"), a *= u;
					v = $t(p - o, e = f.length + 1, 0 == o), Rt(p / e) > jt - g && Ft("overflow"), g += Rt(p / e), p %= e, f.splice(p++, 0, g)
				}
				return Wt(f)
			}

			function Yt(t) {
				var e, n, r, i, o, a, s, c, l, u, d, f, h, p, g, v = [];
				for (f = (t = Ut(t)).length, e = 128, n = 0, o = 72, a = 0; a < f; ++a)(d = t[a]) < 128 && v.push(Bt(d));
				for (r = i = v.length, i && v.push("-"); r < f;) {
					for (s = jt, a = 0; a < f; ++a)(d = t[a]) >= e && d < s && (s = d);
					for (s - e > Rt((jt - n) / (h = r + 1)) && Ft("overflow"), n += (s - e) * h, e = s, a = 0; a < f; ++a)
						if ((d = t[a]) < e && ++n > jt && Ft("overflow"), d == e) {
							for (c = n, l = 36; !(c < (u = l <= o ? 1 : l >= o + 26 ? 26 : l - o)); l += 36) g = c - u, p = 36 - u, v.push(Bt(Gt(u + g % p, 0))), c = Rt(g / p);
							v.push(Bt(Gt(c, 0))), o = $t(n, h, r == i), n = 0, ++r
						}++ n, ++e
				}
				return v.join("")
			}
			var Xt = {
					version: "1.4.1",
					ucs2: {
						decode: Ut,
						encode: Wt
					},
					toASCII: function(t) {
						return Vt(t, (function(t) {
							return Nt.test(t) ? "xn--" + Yt(t) : t
						}))
					},
					toUnicode: function(t) {
						return Vt(t, (function(t) {
							return It.test(t) ? Jt(t.slice(4).toLowerCase()) : t
						}))
					},
					encode: Yt,
					decode: Jt
				},
				Qt = (q(Object.freeze({
					__proto__: null,
					default: {
						9: "Tab;",
						10: "NewLine;",
						33: "excl;",
						34: "quot;",
						35: "num;",
						36: "dollar;",
						37: "percnt;",
						38: "amp;",
						39: "apos;",
						40: "lpar;",
						41: "rpar;",
						42: "midast;",
						43: "plus;",
						44: "comma;",
						46: "period;",
						47: "sol;",
						58: "colon;",
						59: "semi;",
						60: "lt;",
						61: "equals;",
						62: "gt;",
						63: "quest;",
						64: "commat;",
						91: "lsqb;",
						92: "bsol;",
						93: "rsqb;",
						94: "Hat;",
						95: "UnderBar;",
						96: "grave;",
						123: "lcub;",
						124: "VerticalLine;",
						125: "rcub;",
						160: "NonBreakingSpace;",
						161: "iexcl;",
						162: "cent;",
						163: "pound;",
						164: "curren;",
						165: "yen;",
						166: "brvbar;",
						167: "sect;",
						168: "uml;",
						169: "copy;",
						170: "ordf;",
						171: "laquo;",
						172: "not;",
						173: "shy;",
						174: "reg;",
						175: "strns;",
						176: "deg;",
						177: "pm;",
						178: "sup2;",
						179: "sup3;",
						180: "DiacriticalAcute;",
						181: "micro;",
						182: "para;",
						183: "middot;",
						184: "Cedilla;",
						185: "sup1;",
						186: "ordm;",
						187: "raquo;",
						188: "frac14;",
						189: "half;",
						190: "frac34;",
						191: "iquest;",
						192: "Agrave;",
						193: "Aacute;",
						194: "Acirc;",
						195: "Atilde;",
						196: "Auml;",
						197: "Aring;",
						198: "AElig;",
						199: "Ccedil;",
						200: "Egrave;",
						201: "Eacute;",
						202: "Ecirc;",
						203: "Euml;",
						204: "Igrave;",
						205: "Iacute;",
						206: "Icirc;",
						207: "Iuml;",
						208: "ETH;",
						209: "Ntilde;",
						210: "Ograve;",
						211: "Oacute;",
						212: "Ocirc;",
						213: "Otilde;",
						214: "Ouml;",
						215: "times;",
						216: "Oslash;",
						217: "Ugrave;",
						218: "Uacute;",
						219: "Ucirc;",
						220: "Uuml;",
						221: "Yacute;",
						222: "THORN;",
						223: "szlig;",
						224: "agrave;",
						225: "aacute;",
						226: "acirc;",
						227: "atilde;",
						228: "auml;",
						229: "aring;",
						230: "aelig;",
						231: "ccedil;",
						232: "egrave;",
						233: "eacute;",
						234: "ecirc;",
						235: "euml;",
						236: "igrave;",
						237: "iacute;",
						238: "icirc;",
						239: "iuml;",
						240: "eth;",
						241: "ntilde;",
						242: "ograve;",
						243: "oacute;",
						244: "ocirc;",
						245: "otilde;",
						246: "ouml;",
						247: "divide;",
						248: "oslash;",
						249: "ugrave;",
						250: "uacute;",
						251: "ucirc;",
						252: "uuml;",
						253: "yacute;",
						254: "thorn;",
						255: "yuml;",
						256: "Amacr;",
						257: "amacr;",
						258: "Abreve;",
						259: "abreve;",
						260: "Aogon;",
						261: "aogon;",
						262: "Cacute;",
						263: "cacute;",
						264: "Ccirc;",
						265: "ccirc;",
						266: "Cdot;",
						267: "cdot;",
						268: "Ccaron;",
						269: "ccaron;",
						270: "Dcaron;",
						271: "dcaron;",
						272: "Dstrok;",
						273: "dstrok;",
						274: "Emacr;",
						275: "emacr;",
						278: "Edot;",
						279: "edot;",
						280: "Eogon;",
						281: "eogon;",
						282: "Ecaron;",
						283: "ecaron;",
						284: "Gcirc;",
						285: "gcirc;",
						286: "Gbreve;",
						287: "gbreve;",
						288: "Gdot;",
						289: "gdot;",
						290: "Gcedil;",
						292: "Hcirc;",
						293: "hcirc;",
						294: "Hstrok;",
						295: "hstrok;",
						296: "Itilde;",
						297: "itilde;",
						298: "Imacr;",
						299: "imacr;",
						302: "Iogon;",
						303: "iogon;",
						304: "Idot;",
						305: "inodot;",
						306: "IJlig;",
						307: "ijlig;",
						308: "Jcirc;",
						309: "jcirc;",
						310: "Kcedil;",
						311: "kcedil;",
						312: "kgreen;",
						313: "Lacute;",
						314: "lacute;",
						315: "Lcedil;",
						316: "lcedil;",
						317: "Lcaron;",
						318: "lcaron;",
						319: "Lmidot;",
						320: "lmidot;",
						321: "Lstrok;",
						322: "lstrok;",
						323: "Nacute;",
						324: "nacute;",
						325: "Ncedil;",
						326: "ncedil;",
						327: "Ncaron;",
						328: "ncaron;",
						329: "napos;",
						330: "ENG;",
						331: "eng;",
						332: "Omacr;",
						333: "omacr;",
						336: "Odblac;",
						337: "odblac;",
						338: "OElig;",
						339: "oelig;",
						340: "Racute;",
						341: "racute;",
						342: "Rcedil;",
						343: "rcedil;",
						344: "Rcaron;",
						345: "rcaron;",
						346: "Sacute;",
						347: "sacute;",
						348: "Scirc;",
						349: "scirc;",
						350: "Scedil;",
						351: "scedil;",
						352: "Scaron;",
						353: "scaron;",
						354: "Tcedil;",
						355: "tcedil;",
						356: "Tcaron;",
						357: "tcaron;",
						358: "Tstrok;",
						359: "tstrok;",
						360: "Utilde;",
						361: "utilde;",
						362: "Umacr;",
						363: "umacr;",
						364: "Ubreve;",
						365: "ubreve;",
						366: "Uring;",
						367: "uring;",
						368: "Udblac;",
						369: "udblac;",
						370: "Uogon;",
						371: "uogon;",
						372: "Wcirc;",
						373: "wcirc;",
						374: "Ycirc;",
						375: "ycirc;",
						376: "Yuml;",
						377: "Zacute;",
						378: "zacute;",
						379: "Zdot;",
						380: "zdot;",
						381: "Zcaron;",
						382: "zcaron;",
						402: "fnof;",
						437: "imped;",
						501: "gacute;",
						567: "jmath;",
						710: "circ;",
						711: "Hacek;",
						728: "breve;",
						729: "dot;",
						730: "ring;",
						731: "ogon;",
						732: "tilde;",
						733: "DiacriticalDoubleAcute;",
						785: "DownBreve;",
						913: "Alpha;",
						914: "Beta;",
						915: "Gamma;",
						916: "Delta;",
						917: "Epsilon;",
						918: "Zeta;",
						919: "Eta;",
						920: "Theta;",
						921: "Iota;",
						922: "Kappa;",
						923: "Lambda;",
						924: "Mu;",
						925: "Nu;",
						926: "Xi;",
						927: "Omicron;",
						928: "Pi;",
						929: "Rho;",
						931: "Sigma;",
						932: "Tau;",
						933: "Upsilon;",
						934: "Phi;",
						935: "Chi;",
						936: "Psi;",
						937: "Omega;",
						945: "alpha;",
						946: "beta;",
						947: "gamma;",
						948: "delta;",
						949: "epsilon;",
						950: "zeta;",
						951: "eta;",
						952: "theta;",
						953: "iota;",
						954: "kappa;",
						955: "lambda;",
						956: "mu;",
						957: "nu;",
						958: "xi;",
						959: "omicron;",
						960: "pi;",
						961: "rho;",
						962: "varsigma;",
						963: "sigma;",
						964: "tau;",
						965: "upsilon;",
						966: "phi;",
						967: "chi;",
						968: "psi;",
						969: "omega;",
						977: "vartheta;",
						978: "upsih;",
						981: "varphi;",
						982: "varpi;",
						988: "Gammad;",
						989: "gammad;",
						1008: "varkappa;",
						1009: "varrho;",
						1013: "varepsilon;",
						1014: "bepsi;",
						1025: "IOcy;",
						1026: "DJcy;",
						1027: "GJcy;",
						1028: "Jukcy;",
						1029: "DScy;",
						1030: "Iukcy;",
						1031: "YIcy;",
						1032: "Jsercy;",
						1033: "LJcy;",
						1034: "NJcy;",
						1035: "TSHcy;",
						1036: "KJcy;",
						1038: "Ubrcy;",
						1039: "DZcy;",
						1040: "Acy;",
						1041: "Bcy;",
						1042: "Vcy;",
						1043: "Gcy;",
						1044: "Dcy;",
						1045: "IEcy;",
						1046: "ZHcy;",
						1047: "Zcy;",
						1048: "Icy;",
						1049: "Jcy;",
						1050: "Kcy;",
						1051: "Lcy;",
						1052: "Mcy;",
						1053: "Ncy;",
						1054: "Ocy;",
						1055: "Pcy;",
						1056: "Rcy;",
						1057: "Scy;",
						1058: "Tcy;",
						1059: "Ucy;",
						1060: "Fcy;",
						1061: "KHcy;",
						1062: "TScy;",
						1063: "CHcy;",
						1064: "SHcy;",
						1065: "SHCHcy;",
						1066: "HARDcy;",
						1067: "Ycy;",
						1068: "SOFTcy;",
						1069: "Ecy;",
						1070: "YUcy;",
						1071: "YAcy;",
						1072: "acy;",
						1073: "bcy;",
						1074: "vcy;",
						1075: "gcy;",
						1076: "dcy;",
						1077: "iecy;",
						1078: "zhcy;",
						1079: "zcy;",
						1080: "icy;",
						1081: "jcy;",
						1082: "kcy;",
						1083: "lcy;",
						1084: "mcy;",
						1085: "ncy;",
						1086: "ocy;",
						1087: "pcy;",
						1088: "rcy;",
						1089: "scy;",
						1090: "tcy;",
						1091: "ucy;",
						1092: "fcy;",
						1093: "khcy;",
						1094: "tscy;",
						1095: "chcy;",
						1096: "shcy;",
						1097: "shchcy;",
						1098: "hardcy;",
						1099: "ycy;",
						1100: "softcy;",
						1101: "ecy;",
						1102: "yucy;",
						1103: "yacy;",
						1105: "iocy;",
						1106: "djcy;",
						1107: "gjcy;",
						1108: "jukcy;",
						1109: "dscy;",
						1110: "iukcy;",
						1111: "yicy;",
						1112: "jsercy;",
						1113: "ljcy;",
						1114: "njcy;",
						1115: "tshcy;",
						1116: "kjcy;",
						1118: "ubrcy;",
						1119: "dzcy;",
						8194: "ensp;",
						8195: "emsp;",
						8196: "emsp13;",
						8197: "emsp14;",
						8199: "numsp;",
						8200: "puncsp;",
						8201: "ThinSpace;",
						8202: "VeryThinSpace;",
						8203: "ZeroWidthSpace;",
						8204: "zwnj;",
						8205: "zwj;",
						8206: "lrm;",
						8207: "rlm;",
						8208: "hyphen;",
						8211: "ndash;",
						8212: "mdash;",
						8213: "horbar;",
						8214: "Vert;",
						8216: "OpenCurlyQuote;",
						8217: "rsquor;",
						8218: "sbquo;",
						8220: "OpenCurlyDoubleQuote;",
						8221: "rdquor;",
						8222: "ldquor;",
						8224: "dagger;",
						8225: "ddagger;",
						8226: "bullet;",
						8229: "nldr;",
						8230: "mldr;",
						8240: "permil;",
						8241: "pertenk;",
						8242: "prime;",
						8243: "Prime;",
						8244: "tprime;",
						8245: "bprime;",
						8249: "lsaquo;",
						8250: "rsaquo;",
						8254: "OverBar;",
						8257: "caret;",
						8259: "hybull;",
						8260: "frasl;",
						8271: "bsemi;",
						8279: "qprime;",
						8287: "MediumSpace;",
						8288: "NoBreak;",
						8289: "ApplyFunction;",
						8290: "it;",
						8291: "InvisibleComma;",
						8364: "euro;",
						8411: "TripleDot;",
						8412: "DotDot;",
						8450: "Copf;",
						8453: "incare;",
						8458: "gscr;",
						8459: "Hscr;",
						8460: "Poincareplane;",
						8461: "quaternions;",
						8462: "planckh;",
						8463: "plankv;",
						8464: "Iscr;",
						8465: "imagpart;",
						8466: "Lscr;",
						8467: "ell;",
						8469: "Nopf;",
						8470: "numero;",
						8471: "copysr;",
						8472: "wp;",
						8473: "primes;",
						8474: "rationals;",
						8475: "Rscr;",
						8476: "Rfr;",
						8477: "Ropf;",
						8478: "rx;",
						8482: "trade;",
						8484: "Zopf;",
						8487: "mho;",
						8488: "Zfr;",
						8489: "iiota;",
						8492: "Bscr;",
						8493: "Cfr;",
						8495: "escr;",
						8496: "expectation;",
						8497: "Fscr;",
						8499: "phmmat;",
						8500: "oscr;",
						8501: "aleph;",
						8502: "beth;",
						8503: "gimel;",
						8504: "daleth;",
						8517: "DD;",
						8518: "DifferentialD;",
						8519: "exponentiale;",
						8520: "ImaginaryI;",
						8531: "frac13;",
						8532: "frac23;",
						8533: "frac15;",
						8534: "frac25;",
						8535: "frac35;",
						8536: "frac45;",
						8537: "frac16;",
						8538: "frac56;",
						8539: "frac18;",
						8540: "frac38;",
						8541: "frac58;",
						8542: "frac78;",
						8592: "slarr;",
						8593: "uparrow;",
						8594: "srarr;",
						8595: "ShortDownArrow;",
						8596: "leftrightarrow;",
						8597: "varr;",
						8598: "UpperLeftArrow;",
						8599: "UpperRightArrow;",
						8600: "searrow;",
						8601: "swarrow;",
						8602: "nleftarrow;",
						8603: "nrightarrow;",
						8605: "rightsquigarrow;",
						8606: "twoheadleftarrow;",
						8607: "Uarr;",
						8608: "twoheadrightarrow;",
						8609: "Darr;",
						8610: "leftarrowtail;",
						8611: "rightarrowtail;",
						8612: "mapstoleft;",
						8613: "UpTeeArrow;",
						8614: "RightTeeArrow;",
						8615: "mapstodown;",
						8617: "larrhk;",
						8618: "rarrhk;",
						8619: "looparrowleft;",
						8620: "rarrlp;",
						8621: "leftrightsquigarrow;",
						8622: "nleftrightarrow;",
						8624: "lsh;",
						8625: "rsh;",
						8626: "ldsh;",
						8627: "rdsh;",
						8629: "crarr;",
						8630: "curvearrowleft;",
						8631: "curvearrowright;",
						8634: "olarr;",
						8635: "orarr;",
						8636: "lharu;",
						8637: "lhard;",
						8638: "upharpoonright;",
						8639: "upharpoonleft;",
						8640: "RightVector;",
						8641: "rightharpoondown;",
						8642: "RightDownVector;",
						8643: "LeftDownVector;",
						8644: "rlarr;",
						8645: "UpArrowDownArrow;",
						8646: "lrarr;",
						8647: "llarr;",
						8648: "uuarr;",
						8649: "rrarr;",
						8650: "downdownarrows;",
						8651: "ReverseEquilibrium;",
						8652: "rlhar;",
						8653: "nLeftarrow;",
						8654: "nLeftrightarrow;",
						8655: "nRightarrow;",
						8656: "Leftarrow;",
						8657: "Uparrow;",
						8658: "Rightarrow;",
						8659: "Downarrow;",
						8660: "Leftrightarrow;",
						8661: "vArr;",
						8662: "nwArr;",
						8663: "neArr;",
						8664: "seArr;",
						8665: "swArr;",
						8666: "Lleftarrow;",
						8667: "Rrightarrow;",
						8669: "zigrarr;",
						8676: "LeftArrowBar;",
						8677: "RightArrowBar;",
						8693: "duarr;",
						8701: "loarr;",
						8702: "roarr;",
						8703: "hoarr;",
						8704: "forall;",
						8705: "complement;",
						8706: "PartialD;",
						8707: "Exists;",
						8708: "NotExists;",
						8709: "varnothing;",
						8711: "nabla;",
						8712: "isinv;",
						8713: "notinva;",
						8715: "SuchThat;",
						8716: "NotReverseElement;",
						8719: "Product;",
						8720: "Coproduct;",
						8721: "sum;",
						8722: "minus;",
						8723: "mp;",
						8724: "plusdo;",
						8726: "ssetmn;",
						8727: "lowast;",
						8728: "SmallCircle;",
						8730: "Sqrt;",
						8733: "vprop;",
						8734: "infin;",
						8735: "angrt;",
						8736: "angle;",
						8737: "measuredangle;",
						8738: "angsph;",
						8739: "VerticalBar;",
						8740: "nsmid;",
						8741: "spar;",
						8742: "nspar;",
						8743: "wedge;",
						8744: "vee;",
						8745: "cap;",
						8746: "cup;",
						8747: "Integral;",
						8748: "Int;",
						8749: "tint;",
						8750: "oint;",
						8751: "DoubleContourIntegral;",
						8752: "Cconint;",
						8753: "cwint;",
						8754: "cwconint;",
						8755: "CounterClockwiseContourIntegral;",
						8756: "therefore;",
						8757: "because;",
						8758: "ratio;",
						8759: "Proportion;",
						8760: "minusd;",
						8762: "mDDot;",
						8763: "homtht;",
						8764: "Tilde;",
						8765: "bsim;",
						8766: "mstpos;",
						8767: "acd;",
						8768: "wreath;",
						8769: "nsim;",
						8770: "esim;",
						8771: "TildeEqual;",
						8772: "nsimeq;",
						8773: "TildeFullEqual;",
						8774: "simne;",
						8775: "NotTildeFullEqual;",
						8776: "TildeTilde;",
						8777: "NotTildeTilde;",
						8778: "approxeq;",
						8779: "apid;",
						8780: "bcong;",
						8781: "CupCap;",
						8782: "HumpDownHump;",
						8783: "HumpEqual;",
						8784: "esdot;",
						8785: "eDot;",
						8786: "fallingdotseq;",
						8787: "risingdotseq;",
						8788: "coloneq;",
						8789: "eqcolon;",
						8790: "eqcirc;",
						8791: "cire;",
						8793: "wedgeq;",
						8794: "veeeq;",
						8796: "trie;",
						8799: "questeq;",
						8800: "NotEqual;",
						8801: "equiv;",
						8802: "NotCongruent;",
						8804: "leq;",
						8805: "GreaterEqual;",
						8806: "LessFullEqual;",
						8807: "GreaterFullEqual;",
						8808: "lneqq;",
						8809: "gneqq;",
						8810: "NestedLessLess;",
						8811: "NestedGreaterGreater;",
						8812: "twixt;",
						8813: "NotCupCap;",
						8814: "NotLess;",
						8815: "NotGreater;",
						8816: "NotLessEqual;",
						8817: "NotGreaterEqual;",
						8818: "lsim;",
						8819: "gtrsim;",
						8820: "NotLessTilde;",
						8821: "NotGreaterTilde;",
						8822: "lg;",
						8823: "gtrless;",
						8824: "ntlg;",
						8825: "ntgl;",
						8826: "Precedes;",
						8827: "Succeeds;",
						8828: "PrecedesSlantEqual;",
						8829: "SucceedsSlantEqual;",
						8830: "prsim;",
						8831: "succsim;",
						8832: "nprec;",
						8833: "nsucc;",
						8834: "subset;",
						8835: "supset;",
						8836: "nsub;",
						8837: "nsup;",
						8838: "SubsetEqual;",
						8839: "supseteq;",
						8840: "nsubseteq;",
						8841: "nsupseteq;",
						8842: "subsetneq;",
						8843: "supsetneq;",
						8845: "cupdot;",
						8846: "uplus;",
						8847: "SquareSubset;",
						8848: "SquareSuperset;",
						8849: "SquareSubsetEqual;",
						8850: "SquareSupersetEqual;",
						8851: "SquareIntersection;",
						8852: "SquareUnion;",
						8853: "oplus;",
						8854: "ominus;",
						8855: "otimes;",
						8856: "osol;",
						8857: "odot;",
						8858: "ocir;",
						8859: "oast;",
						8861: "odash;",
						8862: "plusb;",
						8863: "minusb;",
						8864: "timesb;",
						8865: "sdotb;",
						8866: "vdash;",
						8867: "LeftTee;",
						8868: "top;",
						8869: "UpTee;",
						8871: "models;",
						8872: "vDash;",
						8873: "Vdash;",
						8874: "Vvdash;",
						8875: "VDash;",
						8876: "nvdash;",
						8877: "nvDash;",
						8878: "nVdash;",
						8879: "nVDash;",
						8880: "prurel;",
						8882: "vltri;",
						8883: "vrtri;",
						8884: "trianglelefteq;",
						8885: "trianglerighteq;",
						8886: "origof;",
						8887: "imof;",
						8888: "mumap;",
						8889: "hercon;",
						8890: "intercal;",
						8891: "veebar;",
						8893: "barvee;",
						8894: "angrtvb;",
						8895: "lrtri;",
						8896: "xwedge;",
						8897: "xvee;",
						8898: "xcap;",
						8899: "xcup;",
						8900: "diamond;",
						8901: "sdot;",
						8902: "Star;",
						8903: "divonx;",
						8904: "bowtie;",
						8905: "ltimes;",
						8906: "rtimes;",
						8907: "lthree;",
						8908: "rthree;",
						8909: "bsime;",
						8910: "cuvee;",
						8911: "cuwed;",
						8912: "Subset;",
						8913: "Supset;",
						8914: "Cap;",
						8915: "Cup;",
						8916: "pitchfork;",
						8917: "epar;",
						8918: "ltdot;",
						8919: "gtrdot;",
						8920: "Ll;",
						8921: "ggg;",
						8922: "LessEqualGreater;",
						8923: "gtreqless;",
						8926: "curlyeqprec;",
						8927: "curlyeqsucc;",
						8928: "nprcue;",
						8929: "nsccue;",
						8930: "nsqsube;",
						8931: "nsqsupe;",
						8934: "lnsim;",
						8935: "gnsim;",
						8936: "prnsim;",
						8937: "succnsim;",
						8938: "ntriangleleft;",
						8939: "ntriangleright;",
						8940: "ntrianglelefteq;",
						8941: "ntrianglerighteq;",
						8942: "vellip;",
						8943: "ctdot;",
						8944: "utdot;",
						8945: "dtdot;",
						8946: "disin;",
						8947: "isinsv;",
						8948: "isins;",
						8949: "isindot;",
						8950: "notinvc;",
						8951: "notinvb;",
						8953: "isinE;",
						8954: "nisd;",
						8955: "xnis;",
						8956: "nis;",
						8957: "notnivc;",
						8958: "notnivb;",
						8965: "barwedge;",
						8966: "doublebarwedge;",
						8968: "LeftCeiling;",
						8969: "RightCeiling;",
						8970: "lfloor;",
						8971: "RightFloor;",
						8972: "drcrop;",
						8973: "dlcrop;",
						8974: "urcrop;",
						8975: "ulcrop;",
						8976: "bnot;",
						8978: "profline;",
						8979: "profsurf;",
						8981: "telrec;",
						8982: "target;",
						8988: "ulcorner;",
						8989: "urcorner;",
						8990: "llcorner;",
						8991: "lrcorner;",
						8994: "sfrown;",
						8995: "ssmile;",
						9005: "cylcty;",
						9006: "profalar;",
						9014: "topbot;",
						9021: "ovbar;",
						9023: "solbar;",
						9084: "angzarr;",
						9136: "lmoustache;",
						9137: "rmoustache;",
						9140: "tbrk;",
						9141: "UnderBracket;",
						9142: "bbrktbrk;",
						9180: "OverParenthesis;",
						9181: "UnderParenthesis;",
						9182: "OverBrace;",
						9183: "UnderBrace;",
						9186: "trpezium;",
						9191: "elinters;",
						9251: "blank;",
						9416: "oS;",
						9472: "HorizontalLine;",
						9474: "boxv;",
						9484: "boxdr;",
						9488: "boxdl;",
						9492: "boxur;",
						9496: "boxul;",
						9500: "boxvr;",
						9508: "boxvl;",
						9516: "boxhd;",
						9524: "boxhu;",
						9532: "boxvh;",
						9552: "boxH;",
						9553: "boxV;",
						9554: "boxdR;",
						9555: "boxDr;",
						9556: "boxDR;",
						9557: "boxdL;",
						9558: "boxDl;",
						9559: "boxDL;",
						9560: "boxuR;",
						9561: "boxUr;",
						9562: "boxUR;",
						9563: "boxuL;",
						9564: "boxUl;",
						9565: "boxUL;",
						9566: "boxvR;",
						9567: "boxVr;",
						9568: "boxVR;",
						9569: "boxvL;",
						9570: "boxVl;",
						9571: "boxVL;",
						9572: "boxHd;",
						9573: "boxhD;",
						9574: "boxHD;",
						9575: "boxHu;",
						9576: "boxhU;",
						9577: "boxHU;",
						9578: "boxvH;",
						9579: "boxVh;",
						9580: "boxVH;",
						9600: "uhblk;",
						9604: "lhblk;",
						9608: "block;",
						9617: "blk14;",
						9618: "blk12;",
						9619: "blk34;",
						9633: "square;",
						9642: "squf;",
						9643: "EmptyVerySmallSquare;",
						9645: "rect;",
						9646: "marker;",
						9649: "fltns;",
						9651: "xutri;",
						9652: "utrif;",
						9653: "utri;",
						9656: "rtrif;",
						9657: "triangleright;",
						9661: "xdtri;",
						9662: "dtrif;",
						9663: "triangledown;",
						9666: "ltrif;",
						9667: "triangleleft;",
						9674: "lozenge;",
						9675: "cir;",
						9708: "tridot;",
						9711: "xcirc;",
						9720: "ultri;",
						9721: "urtri;",
						9722: "lltri;",
						9723: "EmptySmallSquare;",
						9724: "FilledSmallSquare;",
						9733: "starf;",
						9734: "star;",
						9742: "phone;",
						9792: "female;",
						9794: "male;",
						9824: "spadesuit;",
						9827: "clubsuit;",
						9829: "heartsuit;",
						9830: "diams;",
						9834: "sung;",
						9837: "flat;",
						9838: "natural;",
						9839: "sharp;",
						10003: "checkmark;",
						10007: "cross;",
						10016: "maltese;",
						10038: "sext;",
						10072: "VerticalSeparator;",
						10098: "lbbrk;",
						10099: "rbbrk;",
						10184: "bsolhsub;",
						10185: "suphsol;",
						10214: "lobrk;",
						10215: "robrk;",
						10216: "LeftAngleBracket;",
						10217: "RightAngleBracket;",
						10218: "Lang;",
						10219: "Rang;",
						10220: "loang;",
						10221: "roang;",
						10229: "xlarr;",
						10230: "xrarr;",
						10231: "xharr;",
						10232: "xlArr;",
						10233: "xrArr;",
						10234: "xhArr;",
						10236: "xmap;",
						10239: "dzigrarr;",
						10498: "nvlArr;",
						10499: "nvrArr;",
						10500: "nvHarr;",
						10501: "Map;",
						10508: "lbarr;",
						10509: "rbarr;",
						10510: "lBarr;",
						10511: "rBarr;",
						10512: "RBarr;",
						10513: "DDotrahd;",
						10514: "UpArrowBar;",
						10515: "DownArrowBar;",
						10518: "Rarrtl;",
						10521: "latail;",
						10522: "ratail;",
						10523: "lAtail;",
						10524: "rAtail;",
						10525: "larrfs;",
						10526: "rarrfs;",
						10527: "larrbfs;",
						10528: "rarrbfs;",
						10531: "nwarhk;",
						10532: "nearhk;",
						10533: "searhk;",
						10534: "swarhk;",
						10535: "nwnear;",
						10536: "toea;",
						10537: "tosa;",
						10538: "swnwar;",
						10547: "rarrc;",
						10549: "cudarrr;",
						10550: "ldca;",
						10551: "rdca;",
						10552: "cudarrl;",
						10553: "larrpl;",
						10556: "curarrm;",
						10557: "cularrp;",
						10565: "rarrpl;",
						10568: "harrcir;",
						10569: "Uarrocir;",
						10570: "lurdshar;",
						10571: "ldrushar;",
						10574: "LeftRightVector;",
						10575: "RightUpDownVector;",
						10576: "DownLeftRightVector;",
						10577: "LeftUpDownVector;",
						10578: "LeftVectorBar;",
						10579: "RightVectorBar;",
						10580: "RightUpVectorBar;",
						10581: "RightDownVectorBar;",
						10582: "DownLeftVectorBar;",
						10583: "DownRightVectorBar;",
						10584: "LeftUpVectorBar;",
						10585: "LeftDownVectorBar;",
						10586: "LeftTeeVector;",
						10587: "RightTeeVector;",
						10588: "RightUpTeeVector;",
						10589: "RightDownTeeVector;",
						10590: "DownLeftTeeVector;",
						10591: "DownRightTeeVector;",
						10592: "LeftUpTeeVector;",
						10593: "LeftDownTeeVector;",
						10594: "lHar;",
						10595: "uHar;",
						10596: "rHar;",
						10597: "dHar;",
						10598: "luruhar;",
						10599: "ldrdhar;",
						10600: "ruluhar;",
						10601: "rdldhar;",
						10602: "lharul;",
						10603: "llhard;",
						10604: "rharul;",
						10605: "lrhard;",
						10606: "UpEquilibrium;",
						10607: "ReverseUpEquilibrium;",
						10608: "RoundImplies;",
						10609: "erarr;",
						10610: "simrarr;",
						10611: "larrsim;",
						10612: "rarrsim;",
						10613: "rarrap;",
						10614: "ltlarr;",
						10616: "gtrarr;",
						10617: "subrarr;",
						10619: "suplarr;",
						10620: "lfisht;",
						10621: "rfisht;",
						10622: "ufisht;",
						10623: "dfisht;",
						10629: "lopar;",
						10630: "ropar;",
						10635: "lbrke;",
						10636: "rbrke;",
						10637: "lbrkslu;",
						10638: "rbrksld;",
						10639: "lbrksld;",
						10640: "rbrkslu;",
						10641: "langd;",
						10642: "rangd;",
						10643: "lparlt;",
						10644: "rpargt;",
						10645: "gtlPar;",
						10646: "ltrPar;",
						10650: "vzigzag;",
						10652: "vangrt;",
						10653: "angrtvbd;",
						10660: "ange;",
						10661: "range;",
						10662: "dwangle;",
						10663: "uwangle;",
						10664: "angmsdaa;",
						10665: "angmsdab;",
						10666: "angmsdac;",
						10667: "angmsdad;",
						10668: "angmsdae;",
						10669: "angmsdaf;",
						10670: "angmsdag;",
						10671: "angmsdah;",
						10672: "bemptyv;",
						10673: "demptyv;",
						10674: "cemptyv;",
						10675: "raemptyv;",
						10676: "laemptyv;",
						10677: "ohbar;",
						10678: "omid;",
						10679: "opar;",
						10681: "operp;",
						10683: "olcross;",
						10684: "odsold;",
						10686: "olcir;",
						10687: "ofcir;",
						10688: "olt;",
						10689: "ogt;",
						10690: "cirscir;",
						10691: "cirE;",
						10692: "solb;",
						10693: "bsolb;",
						10697: "boxbox;",
						10701: "trisb;",
						10702: "rtriltri;",
						10703: "LeftTriangleBar;",
						10704: "RightTriangleBar;",
						10716: "iinfin;",
						10717: "infintie;",
						10718: "nvinfin;",
						10723: "eparsl;",
						10724: "smeparsl;",
						10725: "eqvparsl;",
						10731: "lozf;",
						10740: "RuleDelayed;",
						10742: "dsol;",
						10752: "xodot;",
						10753: "xoplus;",
						10754: "xotime;",
						10756: "xuplus;",
						10758: "xsqcup;",
						10764: "qint;",
						10765: "fpartint;",
						10768: "cirfnint;",
						10769: "awint;",
						10770: "rppolint;",
						10771: "scpolint;",
						10772: "npolint;",
						10773: "pointint;",
						10774: "quatint;",
						10775: "intlarhk;",
						10786: "pluscir;",
						10787: "plusacir;",
						10788: "simplus;",
						10789: "plusdu;",
						10790: "plussim;",
						10791: "plustwo;",
						10793: "mcomma;",
						10794: "minusdu;",
						10797: "loplus;",
						10798: "roplus;",
						10799: "Cross;",
						10800: "timesd;",
						10801: "timesbar;",
						10803: "smashp;",
						10804: "lotimes;",
						10805: "rotimes;",
						10806: "otimesas;",
						10807: "Otimes;",
						10808: "odiv;",
						10809: "triplus;",
						10810: "triminus;",
						10811: "tritime;",
						10812: "iprod;",
						10815: "amalg;",
						10816: "capdot;",
						10818: "ncup;",
						10819: "ncap;",
						10820: "capand;",
						10821: "cupor;",
						10822: "cupcap;",
						10823: "capcup;",
						10824: "cupbrcap;",
						10825: "capbrcup;",
						10826: "cupcup;",
						10827: "capcap;",
						10828: "ccups;",
						10829: "ccaps;",
						10832: "ccupssm;",
						10835: "And;",
						10836: "Or;",
						10837: "andand;",
						10838: "oror;",
						10839: "orslope;",
						10840: "andslope;",
						10842: "andv;",
						10843: "orv;",
						10844: "andd;",
						10845: "ord;",
						10847: "wedbar;",
						10854: "sdote;",
						10858: "simdot;",
						10861: "congdot;",
						10862: "easter;",
						10863: "apacir;",
						10864: "apE;",
						10865: "eplus;",
						10866: "pluse;",
						10867: "Esim;",
						10868: "Colone;",
						10869: "Equal;",
						10871: "eDDot;",
						10872: "equivDD;",
						10873: "ltcir;",
						10874: "gtcir;",
						10875: "ltquest;",
						10876: "gtquest;",
						10877: "LessSlantEqual;",
						10878: "GreaterSlantEqual;",
						10879: "lesdot;",
						10880: "gesdot;",
						10881: "lesdoto;",
						10882: "gesdoto;",
						10883: "lesdotor;",
						10884: "gesdotol;",
						10885: "lessapprox;",
						10886: "gtrapprox;",
						10887: "lneq;",
						10888: "gneq;",
						10889: "lnapprox;",
						10890: "gnapprox;",
						10891: "lesseqqgtr;",
						10892: "gtreqqless;",
						10893: "lsime;",
						10894: "gsime;",
						10895: "lsimg;",
						10896: "gsiml;",
						10897: "lgE;",
						10898: "glE;",
						10899: "lesges;",
						10900: "gesles;",
						10901: "eqslantless;",
						10902: "eqslantgtr;",
						10903: "elsdot;",
						10904: "egsdot;",
						10905: "el;",
						10906: "eg;",
						10909: "siml;",
						10910: "simg;",
						10911: "simlE;",
						10912: "simgE;",
						10913: "LessLess;",
						10914: "GreaterGreater;",
						10916: "glj;",
						10917: "gla;",
						10918: "ltcc;",
						10919: "gtcc;",
						10920: "lescc;",
						10921: "gescc;",
						10922: "smt;",
						10923: "lat;",
						10924: "smte;",
						10925: "late;",
						10926: "bumpE;",
						10927: "preceq;",
						10928: "succeq;",
						10931: "prE;",
						10932: "scE;",
						10933: "prnE;",
						10934: "succneqq;",
						10935: "precapprox;",
						10936: "succapprox;",
						10937: "prnap;",
						10938: "succnapprox;",
						10939: "Pr;",
						10940: "Sc;",
						10941: "subdot;",
						10942: "supdot;",
						10943: "subplus;",
						10944: "supplus;",
						10945: "submult;",
						10946: "supmult;",
						10947: "subedot;",
						10948: "supedot;",
						10949: "subseteqq;",
						10950: "supseteqq;",
						10951: "subsim;",
						10952: "supsim;",
						10955: "subsetneqq;",
						10956: "supsetneqq;",
						10959: "csub;",
						10960: "csup;",
						10961: "csube;",
						10962: "csupe;",
						10963: "subsup;",
						10964: "supsub;",
						10965: "subsub;",
						10966: "supsup;",
						10967: "suphsub;",
						10968: "supdsub;",
						10969: "forkv;",
						10970: "topfork;",
						10971: "mlcp;",
						10980: "DoubleLeftTee;",
						10982: "Vdashl;",
						10983: "Barv;",
						10984: "vBar;",
						10985: "vBarv;",
						10987: "Vbar;",
						10988: "Not;",
						10989: "bNot;",
						10990: "rnmid;",
						10991: "cirmid;",
						10992: "midcir;",
						10993: "topcir;",
						10994: "nhpar;",
						10995: "parsim;",
						11005: "parsl;",
						64256: "fflig;",
						64257: "filig;",
						64258: "fllig;",
						64259: "ffilig;",
						64260: "ffllig;"
					}
				})), q(Object.freeze({
					__proto__: null,
					Aacute: "Á",
					aacute: "á",
					Acirc: "Â",
					acirc: "â",
					acute: "´",
					AElig: "Æ",
					aelig: "æ",
					Agrave: "À",
					agrave: "à",
					AMP: "&",
					amp: "&",
					Aring: "Å",
					aring: "å",
					Atilde: "Ã",
					atilde: "ã",
					Auml: "Ä",
					auml: "ä",
					brvbar: "¦",
					Ccedil: "Ç",
					ccedil: "ç",
					cedil: "¸",
					cent: "¢",
					COPY: "©",
					copy: "©",
					curren: "¤",
					deg: "°",
					divide: "÷",
					Eacute: "É",
					eacute: "é",
					Ecirc: "Ê",
					ecirc: "ê",
					Egrave: "È",
					egrave: "è",
					ETH: "Ð",
					eth: "ð",
					Euml: "Ë",
					euml: "ë",
					frac12: "½",
					frac14: "¼",
					frac34: "¾",
					GT: ">",
					gt: ">",
					Iacute: "Í",
					iacute: "í",
					Icirc: "Î",
					icirc: "î",
					iexcl: "¡",
					Igrave: "Ì",
					igrave: "ì",
					iquest: "¿",
					Iuml: "Ï",
					iuml: "ï",
					laquo: "«",
					LT: "<",
					lt: "<",
					macr: "¯",
					micro: "µ",
					middot: "·",
					nbsp: " ",
					not: "¬",
					Ntilde: "Ñ",
					ntilde: "ñ",
					Oacute: "Ó",
					oacute: "ó",
					Ocirc: "Ô",
					ocirc: "ô",
					Ograve: "Ò",
					ograve: "ò",
					ordf: "ª",
					ordm: "º",
					Oslash: "Ø",
					oslash: "ø",
					Otilde: "Õ",
					otilde: "õ",
					Ouml: "Ö",
					ouml: "ö",
					para: "¶",
					plusmn: "±",
					pound: "£",
					QUOT: '"',
					quot: '"',
					raquo: "»",
					REG: "®",
					reg: "®",
					sect: "§",
					shy: "­",
					sup1: "¹",
					sup2: "²",
					sup3: "³",
					szlig: "ß",
					THORN: "Þ",
					thorn: "þ",
					times: "×",
					Uacute: "Ú",
					uacute: "ú",
					Ucirc: "Û",
					ucirc: "û",
					Ugrave: "Ù",
					ugrave: "ù",
					uml: "¨",
					Uuml: "Ü",
					uuml: "ü",
					Yacute: "Ý",
					yacute: "ý",
					yen: "¥",
					yuml: "ÿ",
					default: {
						"Aacute;": "Á",
						Aacute: "Á",
						"aacute;": "á",
						aacute: "á",
						"Abreve;": "Ă",
						"abreve;": "ă",
						"ac;": "∾",
						"acd;": "∿",
						"acE;": "∾̳",
						"Acirc;": "Â",
						Acirc: "Â",
						"acirc;": "â",
						acirc: "â",
						"acute;": "´",
						acute: "´",
						"Acy;": "А",
						"acy;": "а",
						"AElig;": "Æ",
						AElig: "Æ",
						"aelig;": "æ",
						aelig: "æ",
						"af;": "⁡",
						"Afr;": "𝔄",
						"afr;": "𝔞",
						"Agrave;": "À",
						Agrave: "À",
						"agrave;": "à",
						agrave: "à",
						"alefsym;": "ℵ",
						"aleph;": "ℵ",
						"Alpha;": "Α",
						"alpha;": "α",
						"Amacr;": "Ā",
						"amacr;": "ā",
						"amalg;": "⨿",
						"AMP;": "&",
						AMP: "&",
						"amp;": "&",
						amp: "&",
						"And;": "⩓",
						"and;": "∧",
						"andand;": "⩕",
						"andd;": "⩜",
						"andslope;": "⩘",
						"andv;": "⩚",
						"ang;": "∠",
						"ange;": "⦤",
						"angle;": "∠",
						"angmsd;": "∡",
						"angmsdaa;": "⦨",
						"angmsdab;": "⦩",
						"angmsdac;": "⦪",
						"angmsdad;": "⦫",
						"angmsdae;": "⦬",
						"angmsdaf;": "⦭",
						"angmsdag;": "⦮",
						"angmsdah;": "⦯",
						"angrt;": "∟",
						"angrtvb;": "⊾",
						"angrtvbd;": "⦝",
						"angsph;": "∢",
						"angst;": "Å",
						"angzarr;": "⍼",
						"Aogon;": "Ą",
						"aogon;": "ą",
						"Aopf;": "𝔸",
						"aopf;": "𝕒",
						"ap;": "≈",
						"apacir;": "⩯",
						"apE;": "⩰",
						"ape;": "≊",
						"apid;": "≋",
						"apos;": "'",
						"ApplyFunction;": "⁡",
						"approx;": "≈",
						"approxeq;": "≊",
						"Aring;": "Å",
						Aring: "Å",
						"aring;": "å",
						aring: "å",
						"Ascr;": "𝒜",
						"ascr;": "𝒶",
						"Assign;": "≔",
						"ast;": "*",
						"asymp;": "≈",
						"asympeq;": "≍",
						"Atilde;": "Ã",
						Atilde: "Ã",
						"atilde;": "ã",
						atilde: "ã",
						"Auml;": "Ä",
						Auml: "Ä",
						"auml;": "ä",
						auml: "ä",
						"awconint;": "∳",
						"awint;": "⨑",
						"backcong;": "≌",
						"backepsilon;": "϶",
						"backprime;": "‵",
						"backsim;": "∽",
						"backsimeq;": "⋍",
						"Backslash;": "∖",
						"Barv;": "⫧",
						"barvee;": "⊽",
						"Barwed;": "⌆",
						"barwed;": "⌅",
						"barwedge;": "⌅",
						"bbrk;": "⎵",
						"bbrktbrk;": "⎶",
						"bcong;": "≌",
						"Bcy;": "Б",
						"bcy;": "б",
						"bdquo;": "„",
						"becaus;": "∵",
						"Because;": "∵",
						"because;": "∵",
						"bemptyv;": "⦰",
						"bepsi;": "϶",
						"bernou;": "ℬ",
						"Bernoullis;": "ℬ",
						"Beta;": "Β",
						"beta;": "β",
						"beth;": "ℶ",
						"between;": "≬",
						"Bfr;": "𝔅",
						"bfr;": "𝔟",
						"bigcap;": "⋂",
						"bigcirc;": "◯",
						"bigcup;": "⋃",
						"bigodot;": "⨀",
						"bigoplus;": "⨁",
						"bigotimes;": "⨂",
						"bigsqcup;": "⨆",
						"bigstar;": "★",
						"bigtriangledown;": "▽",
						"bigtriangleup;": "△",
						"biguplus;": "⨄",
						"bigvee;": "⋁",
						"bigwedge;": "⋀",
						"bkarow;": "⤍",
						"blacklozenge;": "⧫",
						"blacksquare;": "▪",
						"blacktriangle;": "▴",
						"blacktriangledown;": "▾",
						"blacktriangleleft;": "◂",
						"blacktriangleright;": "▸",
						"blank;": "␣",
						"blk12;": "▒",
						"blk14;": "░",
						"blk34;": "▓",
						"block;": "█",
						"bne;": "=⃥",
						"bnequiv;": "≡⃥",
						"bNot;": "⫭",
						"bnot;": "⌐",
						"Bopf;": "𝔹",
						"bopf;": "𝕓",
						"bot;": "⊥",
						"bottom;": "⊥",
						"bowtie;": "⋈",
						"boxbox;": "⧉",
						"boxDL;": "╗",
						"boxDl;": "╖",
						"boxdL;": "╕",
						"boxdl;": "┐",
						"boxDR;": "╔",
						"boxDr;": "╓",
						"boxdR;": "╒",
						"boxdr;": "┌",
						"boxH;": "═",
						"boxh;": "─",
						"boxHD;": "╦",
						"boxHd;": "╤",
						"boxhD;": "╥",
						"boxhd;": "┬",
						"boxHU;": "╩",
						"boxHu;": "╧",
						"boxhU;": "╨",
						"boxhu;": "┴",
						"boxminus;": "⊟",
						"boxplus;": "⊞",
						"boxtimes;": "⊠",
						"boxUL;": "╝",
						"boxUl;": "╜",
						"boxuL;": "╛",
						"boxul;": "┘",
						"boxUR;": "╚",
						"boxUr;": "╙",
						"boxuR;": "╘",
						"boxur;": "└",
						"boxV;": "║",
						"boxv;": "│",
						"boxVH;": "╬",
						"boxVh;": "╫",
						"boxvH;": "╪",
						"boxvh;": "┼",
						"boxVL;": "╣",
						"boxVl;": "╢",
						"boxvL;": "╡",
						"boxvl;": "┤",
						"boxVR;": "╠",
						"boxVr;": "╟",
						"boxvR;": "╞",
						"boxvr;": "├",
						"bprime;": "‵",
						"Breve;": "˘",
						"breve;": "˘",
						"brvbar;": "¦",
						brvbar: "¦",
						"Bscr;": "ℬ",
						"bscr;": "𝒷",
						"bsemi;": "⁏",
						"bsim;": "∽",
						"bsime;": "⋍",
						"bsol;": "\\",
						"bsolb;": "⧅",
						"bsolhsub;": "⟈",
						"bull;": "•",
						"bullet;": "•",
						"bump;": "≎",
						"bumpE;": "⪮",
						"bumpe;": "≏",
						"Bumpeq;": "≎",
						"bumpeq;": "≏",
						"Cacute;": "Ć",
						"cacute;": "ć",
						"Cap;": "⋒",
						"cap;": "∩",
						"capand;": "⩄",
						"capbrcup;": "⩉",
						"capcap;": "⩋",
						"capcup;": "⩇",
						"capdot;": "⩀",
						"CapitalDifferentialD;": "ⅅ",
						"caps;": "∩︀",
						"caret;": "⁁",
						"caron;": "ˇ",
						"Cayleys;": "ℭ",
						"ccaps;": "⩍",
						"Ccaron;": "Č",
						"ccaron;": "č",
						"Ccedil;": "Ç",
						Ccedil: "Ç",
						"ccedil;": "ç",
						ccedil: "ç",
						"Ccirc;": "Ĉ",
						"ccirc;": "ĉ",
						"Cconint;": "∰",
						"ccups;": "⩌",
						"ccupssm;": "⩐",
						"Cdot;": "Ċ",
						"cdot;": "ċ",
						"cedil;": "¸",
						cedil: "¸",
						"Cedilla;": "¸",
						"cemptyv;": "⦲",
						"cent;": "¢",
						cent: "¢",
						"CenterDot;": "·",
						"centerdot;": "·",
						"Cfr;": "ℭ",
						"cfr;": "𝔠",
						"CHcy;": "Ч",
						"chcy;": "ч",
						"check;": "✓",
						"checkmark;": "✓",
						"Chi;": "Χ",
						"chi;": "χ",
						"cir;": "○",
						"circ;": "ˆ",
						"circeq;": "≗",
						"circlearrowleft;": "↺",
						"circlearrowright;": "↻",
						"circledast;": "⊛",
						"circledcirc;": "⊚",
						"circleddash;": "⊝",
						"CircleDot;": "⊙",
						"circledR;": "®",
						"circledS;": "Ⓢ",
						"CircleMinus;": "⊖",
						"CirclePlus;": "⊕",
						"CircleTimes;": "⊗",
						"cirE;": "⧃",
						"cire;": "≗",
						"cirfnint;": "⨐",
						"cirmid;": "⫯",
						"cirscir;": "⧂",
						"ClockwiseContourIntegral;": "∲",
						"CloseCurlyDoubleQuote;": "”",
						"CloseCurlyQuote;": "’",
						"clubs;": "♣",
						"clubsuit;": "♣",
						"Colon;": "∷",
						"colon;": ":",
						"Colone;": "⩴",
						"colone;": "≔",
						"coloneq;": "≔",
						"comma;": ",",
						"commat;": "@",
						"comp;": "∁",
						"compfn;": "∘",
						"complement;": "∁",
						"complexes;": "ℂ",
						"cong;": "≅",
						"congdot;": "⩭",
						"Congruent;": "≡",
						"Conint;": "∯",
						"conint;": "∮",
						"ContourIntegral;": "∮",
						"Copf;": "ℂ",
						"copf;": "𝕔",
						"coprod;": "∐",
						"Coproduct;": "∐",
						"COPY;": "©",
						COPY: "©",
						"copy;": "©",
						copy: "©",
						"copysr;": "℗",
						"CounterClockwiseContourIntegral;": "∳",
						"crarr;": "↵",
						"Cross;": "⨯",
						"cross;": "✗",
						"Cscr;": "𝒞",
						"cscr;": "𝒸",
						"csub;": "⫏",
						"csube;": "⫑",
						"csup;": "⫐",
						"csupe;": "⫒",
						"ctdot;": "⋯",
						"cudarrl;": "⤸",
						"cudarrr;": "⤵",
						"cuepr;": "⋞",
						"cuesc;": "⋟",
						"cularr;": "↶",
						"cularrp;": "⤽",
						"Cup;": "⋓",
						"cup;": "∪",
						"cupbrcap;": "⩈",
						"CupCap;": "≍",
						"cupcap;": "⩆",
						"cupcup;": "⩊",
						"cupdot;": "⊍",
						"cupor;": "⩅",
						"cups;": "∪︀",
						"curarr;": "↷",
						"curarrm;": "⤼",
						"curlyeqprec;": "⋞",
						"curlyeqsucc;": "⋟",
						"curlyvee;": "⋎",
						"curlywedge;": "⋏",
						"curren;": "¤",
						curren: "¤",
						"curvearrowleft;": "↶",
						"curvearrowright;": "↷",
						"cuvee;": "⋎",
						"cuwed;": "⋏",
						"cwconint;": "∲",
						"cwint;": "∱",
						"cylcty;": "⌭",
						"Dagger;": "‡",
						"dagger;": "†",
						"daleth;": "ℸ",
						"Darr;": "↡",
						"dArr;": "⇓",
						"darr;": "↓",
						"dash;": "‐",
						"Dashv;": "⫤",
						"dashv;": "⊣",
						"dbkarow;": "⤏",
						"dblac;": "˝",
						"Dcaron;": "Ď",
						"dcaron;": "ď",
						"Dcy;": "Д",
						"dcy;": "д",
						"DD;": "ⅅ",
						"dd;": "ⅆ",
						"ddagger;": "‡",
						"ddarr;": "⇊",
						"DDotrahd;": "⤑",
						"ddotseq;": "⩷",
						"deg;": "°",
						deg: "°",
						"Del;": "∇",
						"Delta;": "Δ",
						"delta;": "δ",
						"demptyv;": "⦱",
						"dfisht;": "⥿",
						"Dfr;": "𝔇",
						"dfr;": "𝔡",
						"dHar;": "⥥",
						"dharl;": "⇃",
						"dharr;": "⇂",
						"DiacriticalAcute;": "´",
						"DiacriticalDot;": "˙",
						"DiacriticalDoubleAcute;": "˝",
						"DiacriticalGrave;": "`",
						"DiacriticalTilde;": "˜",
						"diam;": "⋄",
						"Diamond;": "⋄",
						"diamond;": "⋄",
						"diamondsuit;": "♦",
						"diams;": "♦",
						"die;": "¨",
						"DifferentialD;": "ⅆ",
						"digamma;": "ϝ",
						"disin;": "⋲",
						"div;": "÷",
						"divide;": "÷",
						divide: "÷",
						"divideontimes;": "⋇",
						"divonx;": "⋇",
						"DJcy;": "Ђ",
						"djcy;": "ђ",
						"dlcorn;": "⌞",
						"dlcrop;": "⌍",
						"dollar;": "$",
						"Dopf;": "𝔻",
						"dopf;": "𝕕",
						"Dot;": "¨",
						"dot;": "˙",
						"DotDot;": "⃜",
						"doteq;": "≐",
						"doteqdot;": "≑",
						"DotEqual;": "≐",
						"dotminus;": "∸",
						"dotplus;": "∔",
						"dotsquare;": "⊡",
						"doublebarwedge;": "⌆",
						"DoubleContourIntegral;": "∯",
						"DoubleDot;": "¨",
						"DoubleDownArrow;": "⇓",
						"DoubleLeftArrow;": "⇐",
						"DoubleLeftRightArrow;": "⇔",
						"DoubleLeftTee;": "⫤",
						"DoubleLongLeftArrow;": "⟸",
						"DoubleLongLeftRightArrow;": "⟺",
						"DoubleLongRightArrow;": "⟹",
						"DoubleRightArrow;": "⇒",
						"DoubleRightTee;": "⊨",
						"DoubleUpArrow;": "⇑",
						"DoubleUpDownArrow;": "⇕",
						"DoubleVerticalBar;": "∥",
						"DownArrow;": "↓",
						"Downarrow;": "⇓",
						"downarrow;": "↓",
						"DownArrowBar;": "⤓",
						"DownArrowUpArrow;": "⇵",
						"DownBreve;": "̑",
						"downdownarrows;": "⇊",
						"downharpoonleft;": "⇃",
						"downharpoonright;": "⇂",
						"DownLeftRightVector;": "⥐",
						"DownLeftTeeVector;": "⥞",
						"DownLeftVector;": "↽",
						"DownLeftVectorBar;": "⥖",
						"DownRightTeeVector;": "⥟",
						"DownRightVector;": "⇁",
						"DownRightVectorBar;": "⥗",
						"DownTee;": "⊤",
						"DownTeeArrow;": "↧",
						"drbkarow;": "⤐",
						"drcorn;": "⌟",
						"drcrop;": "⌌",
						"Dscr;": "𝒟",
						"dscr;": "𝒹",
						"DScy;": "Ѕ",
						"dscy;": "ѕ",
						"dsol;": "⧶",
						"Dstrok;": "Đ",
						"dstrok;": "đ",
						"dtdot;": "⋱",
						"dtri;": "▿",
						"dtrif;": "▾",
						"duarr;": "⇵",
						"duhar;": "⥯",
						"dwangle;": "⦦",
						"DZcy;": "Џ",
						"dzcy;": "џ",
						"dzigrarr;": "⟿",
						"Eacute;": "É",
						Eacute: "É",
						"eacute;": "é",
						eacute: "é",
						"easter;": "⩮",
						"Ecaron;": "Ě",
						"ecaron;": "ě",
						"ecir;": "≖",
						"Ecirc;": "Ê",
						Ecirc: "Ê",
						"ecirc;": "ê",
						ecirc: "ê",
						"ecolon;": "≕",
						"Ecy;": "Э",
						"ecy;": "э",
						"eDDot;": "⩷",
						"Edot;": "Ė",
						"eDot;": "≑",
						"edot;": "ė",
						"ee;": "ⅇ",
						"efDot;": "≒",
						"Efr;": "𝔈",
						"efr;": "𝔢",
						"eg;": "⪚",
						"Egrave;": "È",
						Egrave: "È",
						"egrave;": "è",
						egrave: "è",
						"egs;": "⪖",
						"egsdot;": "⪘",
						"el;": "⪙",
						"Element;": "∈",
						"elinters;": "⏧",
						"ell;": "ℓ",
						"els;": "⪕",
						"elsdot;": "⪗",
						"Emacr;": "Ē",
						"emacr;": "ē",
						"empty;": "∅",
						"emptyset;": "∅",
						"EmptySmallSquare;": "◻",
						"emptyv;": "∅",
						"EmptyVerySmallSquare;": "▫",
						"emsp;": " ",
						"emsp13;": " ",
						"emsp14;": " ",
						"ENG;": "Ŋ",
						"eng;": "ŋ",
						"ensp;": " ",
						"Eogon;": "Ę",
						"eogon;": "ę",
						"Eopf;": "𝔼",
						"eopf;": "𝕖",
						"epar;": "⋕",
						"eparsl;": "⧣",
						"eplus;": "⩱",
						"epsi;": "ε",
						"Epsilon;": "Ε",
						"epsilon;": "ε",
						"epsiv;": "ϵ",
						"eqcirc;": "≖",
						"eqcolon;": "≕",
						"eqsim;": "≂",
						"eqslantgtr;": "⪖",
						"eqslantless;": "⪕",
						"Equal;": "⩵",
						"equals;": "=",
						"EqualTilde;": "≂",
						"equest;": "≟",
						"Equilibrium;": "⇌",
						"equiv;": "≡",
						"equivDD;": "⩸",
						"eqvparsl;": "⧥",
						"erarr;": "⥱",
						"erDot;": "≓",
						"Escr;": "ℰ",
						"escr;": "ℯ",
						"esdot;": "≐",
						"Esim;": "⩳",
						"esim;": "≂",
						"Eta;": "Η",
						"eta;": "η",
						"ETH;": "Ð",
						ETH: "Ð",
						"eth;": "ð",
						eth: "ð",
						"Euml;": "Ë",
						Euml: "Ë",
						"euml;": "ë",
						euml: "ë",
						"euro;": "€",
						"excl;": "!",
						"exist;": "∃",
						"Exists;": "∃",
						"expectation;": "ℰ",
						"ExponentialE;": "ⅇ",
						"exponentiale;": "ⅇ",
						"fallingdotseq;": "≒",
						"Fcy;": "Ф",
						"fcy;": "ф",
						"female;": "♀",
						"ffilig;": "ﬃ",
						"fflig;": "ﬀ",
						"ffllig;": "ﬄ",
						"Ffr;": "𝔉",
						"ffr;": "𝔣",
						"filig;": "ﬁ",
						"FilledSmallSquare;": "◼",
						"FilledVerySmallSquare;": "▪",
						"fjlig;": "fj",
						"flat;": "♭",
						"fllig;": "ﬂ",
						"fltns;": "▱",
						"fnof;": "ƒ",
						"Fopf;": "𝔽",
						"fopf;": "𝕗",
						"ForAll;": "∀",
						"forall;": "∀",
						"fork;": "⋔",
						"forkv;": "⫙",
						"Fouriertrf;": "ℱ",
						"fpartint;": "⨍",
						"frac12;": "½",
						frac12: "½",
						"frac13;": "⅓",
						"frac14;": "¼",
						frac14: "¼",
						"frac15;": "⅕",
						"frac16;": "⅙",
						"frac18;": "⅛",
						"frac23;": "⅔",
						"frac25;": "⅖",
						"frac34;": "¾",
						frac34: "¾",
						"frac35;": "⅗",
						"frac38;": "⅜",
						"frac45;": "⅘",
						"frac56;": "⅚",
						"frac58;": "⅝",
						"frac78;": "⅞",
						"frasl;": "⁄",
						"frown;": "⌢",
						"Fscr;": "ℱ",
						"fscr;": "𝒻",
						"gacute;": "ǵ",
						"Gamma;": "Γ",
						"gamma;": "γ",
						"Gammad;": "Ϝ",
						"gammad;": "ϝ",
						"gap;": "⪆",
						"Gbreve;": "Ğ",
						"gbreve;": "ğ",
						"Gcedil;": "Ģ",
						"Gcirc;": "Ĝ",
						"gcirc;": "ĝ",
						"Gcy;": "Г",
						"gcy;": "г",
						"Gdot;": "Ġ",
						"gdot;": "ġ",
						"gE;": "≧",
						"ge;": "≥",
						"gEl;": "⪌",
						"gel;": "⋛",
						"geq;": "≥",
						"geqq;": "≧",
						"geqslant;": "⩾",
						"ges;": "⩾",
						"gescc;": "⪩",
						"gesdot;": "⪀",
						"gesdoto;": "⪂",
						"gesdotol;": "⪄",
						"gesl;": "⋛︀",
						"gesles;": "⪔",
						"Gfr;": "𝔊",
						"gfr;": "𝔤",
						"Gg;": "⋙",
						"gg;": "≫",
						"ggg;": "⋙",
						"gimel;": "ℷ",
						"GJcy;": "Ѓ",
						"gjcy;": "ѓ",
						"gl;": "≷",
						"gla;": "⪥",
						"glE;": "⪒",
						"glj;": "⪤",
						"gnap;": "⪊",
						"gnapprox;": "⪊",
						"gnE;": "≩",
						"gne;": "⪈",
						"gneq;": "⪈",
						"gneqq;": "≩",
						"gnsim;": "⋧",
						"Gopf;": "𝔾",
						"gopf;": "𝕘",
						"grave;": "`",
						"GreaterEqual;": "≥",
						"GreaterEqualLess;": "⋛",
						"GreaterFullEqual;": "≧",
						"GreaterGreater;": "⪢",
						"GreaterLess;": "≷",
						"GreaterSlantEqual;": "⩾",
						"GreaterTilde;": "≳",
						"Gscr;": "𝒢",
						"gscr;": "ℊ",
						"gsim;": "≳",
						"gsime;": "⪎",
						"gsiml;": "⪐",
						"GT;": ">",
						GT: ">",
						"Gt;": "≫",
						"gt;": ">",
						gt: ">",
						"gtcc;": "⪧",
						"gtcir;": "⩺",
						"gtdot;": "⋗",
						"gtlPar;": "⦕",
						"gtquest;": "⩼",
						"gtrapprox;": "⪆",
						"gtrarr;": "⥸",
						"gtrdot;": "⋗",
						"gtreqless;": "⋛",
						"gtreqqless;": "⪌",
						"gtrless;": "≷",
						"gtrsim;": "≳",
						"gvertneqq;": "≩︀",
						"gvnE;": "≩︀",
						"Hacek;": "ˇ",
						"hairsp;": " ",
						"half;": "½",
						"hamilt;": "ℋ",
						"HARDcy;": "Ъ",
						"hardcy;": "ъ",
						"hArr;": "⇔",
						"harr;": "↔",
						"harrcir;": "⥈",
						"harrw;": "↭",
						"Hat;": "^",
						"hbar;": "ℏ",
						"Hcirc;": "Ĥ",
						"hcirc;": "ĥ",
						"hearts;": "♥",
						"heartsuit;": "♥",
						"hellip;": "…",
						"hercon;": "⊹",
						"Hfr;": "ℌ",
						"hfr;": "𝔥",
						"HilbertSpace;": "ℋ",
						"hksearow;": "⤥",
						"hkswarow;": "⤦",
						"hoarr;": "⇿",
						"homtht;": "∻",
						"hookleftarrow;": "↩",
						"hookrightarrow;": "↪",
						"Hopf;": "ℍ",
						"hopf;": "𝕙",
						"horbar;": "―",
						"HorizontalLine;": "─",
						"Hscr;": "ℋ",
						"hscr;": "𝒽",
						"hslash;": "ℏ",
						"Hstrok;": "Ħ",
						"hstrok;": "ħ",
						"HumpDownHump;": "≎",
						"HumpEqual;": "≏",
						"hybull;": "⁃",
						"hyphen;": "‐",
						"Iacute;": "Í",
						Iacute: "Í",
						"iacute;": "í",
						iacute: "í",
						"ic;": "⁣",
						"Icirc;": "Î",
						Icirc: "Î",
						"icirc;": "î",
						icirc: "î",
						"Icy;": "И",
						"icy;": "и",
						"Idot;": "İ",
						"IEcy;": "Е",
						"iecy;": "е",
						"iexcl;": "¡",
						iexcl: "¡",
						"iff;": "⇔",
						"Ifr;": "ℑ",
						"ifr;": "𝔦",
						"Igrave;": "Ì",
						Igrave: "Ì",
						"igrave;": "ì",
						igrave: "ì",
						"ii;": "ⅈ",
						"iiiint;": "⨌",
						"iiint;": "∭",
						"iinfin;": "⧜",
						"iiota;": "℩",
						"IJlig;": "Ĳ",
						"ijlig;": "ĳ",
						"Im;": "ℑ",
						"Imacr;": "Ī",
						"imacr;": "ī",
						"image;": "ℑ",
						"ImaginaryI;": "ⅈ",
						"imagline;": "ℐ",
						"imagpart;": "ℑ",
						"imath;": "ı",
						"imof;": "⊷",
						"imped;": "Ƶ",
						"Implies;": "⇒",
						"in;": "∈",
						"incare;": "℅",
						"infin;": "∞",
						"infintie;": "⧝",
						"inodot;": "ı",
						"Int;": "∬",
						"int;": "∫",
						"intcal;": "⊺",
						"integers;": "ℤ",
						"Integral;": "∫",
						"intercal;": "⊺",
						"Intersection;": "⋂",
						"intlarhk;": "⨗",
						"intprod;": "⨼",
						"InvisibleComma;": "⁣",
						"InvisibleTimes;": "⁢",
						"IOcy;": "Ё",
						"iocy;": "ё",
						"Iogon;": "Į",
						"iogon;": "į",
						"Iopf;": "𝕀",
						"iopf;": "𝕚",
						"Iota;": "Ι",
						"iota;": "ι",
						"iprod;": "⨼",
						"iquest;": "¿",
						iquest: "¿",
						"Iscr;": "ℐ",
						"iscr;": "𝒾",
						"isin;": "∈",
						"isindot;": "⋵",
						"isinE;": "⋹",
						"isins;": "⋴",
						"isinsv;": "⋳",
						"isinv;": "∈",
						"it;": "⁢",
						"Itilde;": "Ĩ",
						"itilde;": "ĩ",
						"Iukcy;": "І",
						"iukcy;": "і",
						"Iuml;": "Ï",
						Iuml: "Ï",
						"iuml;": "ï",
						iuml: "ï",
						"Jcirc;": "Ĵ",
						"jcirc;": "ĵ",
						"Jcy;": "Й",
						"jcy;": "й",
						"Jfr;": "𝔍",
						"jfr;": "𝔧",
						"jmath;": "ȷ",
						"Jopf;": "𝕁",
						"jopf;": "𝕛",
						"Jscr;": "𝒥",
						"jscr;": "𝒿",
						"Jsercy;": "Ј",
						"jsercy;": "ј",
						"Jukcy;": "Є",
						"jukcy;": "є",
						"Kappa;": "Κ",
						"kappa;": "κ",
						"kappav;": "ϰ",
						"Kcedil;": "Ķ",
						"kcedil;": "ķ",
						"Kcy;": "К",
						"kcy;": "к",
						"Kfr;": "𝔎",
						"kfr;": "𝔨",
						"kgreen;": "ĸ",
						"KHcy;": "Х",
						"khcy;": "х",
						"KJcy;": "Ќ",
						"kjcy;": "ќ",
						"Kopf;": "𝕂",
						"kopf;": "𝕜",
						"Kscr;": "𝒦",
						"kscr;": "𝓀",
						"lAarr;": "⇚",
						"Lacute;": "Ĺ",
						"lacute;": "ĺ",
						"laemptyv;": "⦴",
						"lagran;": "ℒ",
						"Lambda;": "Λ",
						"lambda;": "λ",
						"Lang;": "⟪",
						"lang;": "⟨",
						"langd;": "⦑",
						"langle;": "⟨",
						"lap;": "⪅",
						"Laplacetrf;": "ℒ",
						"laquo;": "«",
						laquo: "«",
						"Larr;": "↞",
						"lArr;": "⇐",
						"larr;": "←",
						"larrb;": "⇤",
						"larrbfs;": "⤟",
						"larrfs;": "⤝",
						"larrhk;": "↩",
						"larrlp;": "↫",
						"larrpl;": "⤹",
						"larrsim;": "⥳",
						"larrtl;": "↢",
						"lat;": "⪫",
						"lAtail;": "⤛",
						"latail;": "⤙",
						"late;": "⪭",
						"lates;": "⪭︀",
						"lBarr;": "⤎",
						"lbarr;": "⤌",
						"lbbrk;": "❲",
						"lbrace;": "{",
						"lbrack;": "[",
						"lbrke;": "⦋",
						"lbrksld;": "⦏",
						"lbrkslu;": "⦍",
						"Lcaron;": "Ľ",
						"lcaron;": "ľ",
						"Lcedil;": "Ļ",
						"lcedil;": "ļ",
						"lceil;": "⌈",
						"lcub;": "{",
						"Lcy;": "Л",
						"lcy;": "л",
						"ldca;": "⤶",
						"ldquo;": "“",
						"ldquor;": "„",
						"ldrdhar;": "⥧",
						"ldrushar;": "⥋",
						"ldsh;": "↲",
						"lE;": "≦",
						"le;": "≤",
						"LeftAngleBracket;": "⟨",
						"LeftArrow;": "←",
						"Leftarrow;": "⇐",
						"leftarrow;": "←",
						"LeftArrowBar;": "⇤",
						"LeftArrowRightArrow;": "⇆",
						"leftarrowtail;": "↢",
						"LeftCeiling;": "⌈",
						"LeftDoubleBracket;": "⟦",
						"LeftDownTeeVector;": "⥡",
						"LeftDownVector;": "⇃",
						"LeftDownVectorBar;": "⥙",
						"LeftFloor;": "⌊",
						"leftharpoondown;": "↽",
						"leftharpoonup;": "↼",
						"leftleftarrows;": "⇇",
						"LeftRightArrow;": "↔",
						"Leftrightarrow;": "⇔",
						"leftrightarrow;": "↔",
						"leftrightarrows;": "⇆",
						"leftrightharpoons;": "⇋",
						"leftrightsquigarrow;": "↭",
						"LeftRightVector;": "⥎",
						"LeftTee;": "⊣",
						"LeftTeeArrow;": "↤",
						"LeftTeeVector;": "⥚",
						"leftthreetimes;": "⋋",
						"LeftTriangle;": "⊲",
						"LeftTriangleBar;": "⧏",
						"LeftTriangleEqual;": "⊴",
						"LeftUpDownVector;": "⥑",
						"LeftUpTeeVector;": "⥠",
						"LeftUpVector;": "↿",
						"LeftUpVectorBar;": "⥘",
						"LeftVector;": "↼",
						"LeftVectorBar;": "⥒",
						"lEg;": "⪋",
						"leg;": "⋚",
						"leq;": "≤",
						"leqq;": "≦",
						"leqslant;": "⩽",
						"les;": "⩽",
						"lescc;": "⪨",
						"lesdot;": "⩿",
						"lesdoto;": "⪁",
						"lesdotor;": "⪃",
						"lesg;": "⋚︀",
						"lesges;": "⪓",
						"lessapprox;": "⪅",
						"lessdot;": "⋖",
						"lesseqgtr;": "⋚",
						"lesseqqgtr;": "⪋",
						"LessEqualGreater;": "⋚",
						"LessFullEqual;": "≦",
						"LessGreater;": "≶",
						"lessgtr;": "≶",
						"LessLess;": "⪡",
						"lesssim;": "≲",
						"LessSlantEqual;": "⩽",
						"LessTilde;": "≲",
						"lfisht;": "⥼",
						"lfloor;": "⌊",
						"Lfr;": "𝔏",
						"lfr;": "𝔩",
						"lg;": "≶",
						"lgE;": "⪑",
						"lHar;": "⥢",
						"lhard;": "↽",
						"lharu;": "↼",
						"lharul;": "⥪",
						"lhblk;": "▄",
						"LJcy;": "Љ",
						"ljcy;": "љ",
						"Ll;": "⋘",
						"ll;": "≪",
						"llarr;": "⇇",
						"llcorner;": "⌞",
						"Lleftarrow;": "⇚",
						"llhard;": "⥫",
						"lltri;": "◺",
						"Lmidot;": "Ŀ",
						"lmidot;": "ŀ",
						"lmoust;": "⎰",
						"lmoustache;": "⎰",
						"lnap;": "⪉",
						"lnapprox;": "⪉",
						"lnE;": "≨",
						"lne;": "⪇",
						"lneq;": "⪇",
						"lneqq;": "≨",
						"lnsim;": "⋦",
						"loang;": "⟬",
						"loarr;": "⇽",
						"lobrk;": "⟦",
						"LongLeftArrow;": "⟵",
						"Longleftarrow;": "⟸",
						"longleftarrow;": "⟵",
						"LongLeftRightArrow;": "⟷",
						"Longleftrightarrow;": "⟺",
						"longleftrightarrow;": "⟷",
						"longmapsto;": "⟼",
						"LongRightArrow;": "⟶",
						"Longrightarrow;": "⟹",
						"longrightarrow;": "⟶",
						"looparrowleft;": "↫",
						"looparrowright;": "↬",
						"lopar;": "⦅",
						"Lopf;": "𝕃",
						"lopf;": "𝕝",
						"loplus;": "⨭",
						"lotimes;": "⨴",
						"lowast;": "∗",
						"lowbar;": "_",
						"LowerLeftArrow;": "↙",
						"LowerRightArrow;": "↘",
						"loz;": "◊",
						"lozenge;": "◊",
						"lozf;": "⧫",
						"lpar;": "(",
						"lparlt;": "⦓",
						"lrarr;": "⇆",
						"lrcorner;": "⌟",
						"lrhar;": "⇋",
						"lrhard;": "⥭",
						"lrm;": "‎",
						"lrtri;": "⊿",
						"lsaquo;": "‹",
						"Lscr;": "ℒ",
						"lscr;": "𝓁",
						"Lsh;": "↰",
						"lsh;": "↰",
						"lsim;": "≲",
						"lsime;": "⪍",
						"lsimg;": "⪏",
						"lsqb;": "[",
						"lsquo;": "‘",
						"lsquor;": "‚",
						"Lstrok;": "Ł",
						"lstrok;": "ł",
						"LT;": "<",
						LT: "<",
						"Lt;": "≪",
						"lt;": "<",
						lt: "<",
						"ltcc;": "⪦",
						"ltcir;": "⩹",
						"ltdot;": "⋖",
						"lthree;": "⋋",
						"ltimes;": "⋉",
						"ltlarr;": "⥶",
						"ltquest;": "⩻",
						"ltri;": "◃",
						"ltrie;": "⊴",
						"ltrif;": "◂",
						"ltrPar;": "⦖",
						"lurdshar;": "⥊",
						"luruhar;": "⥦",
						"lvertneqq;": "≨︀",
						"lvnE;": "≨︀",
						"macr;": "¯",
						macr: "¯",
						"male;": "♂",
						"malt;": "✠",
						"maltese;": "✠",
						"Map;": "⤅",
						"map;": "↦",
						"mapsto;": "↦",
						"mapstodown;": "↧",
						"mapstoleft;": "↤",
						"mapstoup;": "↥",
						"marker;": "▮",
						"mcomma;": "⨩",
						"Mcy;": "М",
						"mcy;": "м",
						"mdash;": "—",
						"mDDot;": "∺",
						"measuredangle;": "∡",
						"MediumSpace;": " ",
						"Mellintrf;": "ℳ",
						"Mfr;": "𝔐",
						"mfr;": "𝔪",
						"mho;": "℧",
						"micro;": "µ",
						micro: "µ",
						"mid;": "∣",
						"midast;": "*",
						"midcir;": "⫰",
						"middot;": "·",
						middot: "·",
						"minus;": "−",
						"minusb;": "⊟",
						"minusd;": "∸",
						"minusdu;": "⨪",
						"MinusPlus;": "∓",
						"mlcp;": "⫛",
						"mldr;": "…",
						"mnplus;": "∓",
						"models;": "⊧",
						"Mopf;": "𝕄",
						"mopf;": "𝕞",
						"mp;": "∓",
						"Mscr;": "ℳ",
						"mscr;": "𝓂",
						"mstpos;": "∾",
						"Mu;": "Μ",
						"mu;": "μ",
						"multimap;": "⊸",
						"mumap;": "⊸",
						"nabla;": "∇",
						"Nacute;": "Ń",
						"nacute;": "ń",
						"nang;": "∠⃒",
						"nap;": "≉",
						"napE;": "⩰̸",
						"napid;": "≋̸",
						"napos;": "ŉ",
						"napprox;": "≉",
						"natur;": "♮",
						"natural;": "♮",
						"naturals;": "ℕ",
						"nbsp;": " ",
						nbsp: " ",
						"nbump;": "≎̸",
						"nbumpe;": "≏̸",
						"ncap;": "⩃",
						"Ncaron;": "Ň",
						"ncaron;": "ň",
						"Ncedil;": "Ņ",
						"ncedil;": "ņ",
						"ncong;": "≇",
						"ncongdot;": "⩭̸",
						"ncup;": "⩂",
						"Ncy;": "Н",
						"ncy;": "н",
						"ndash;": "–",
						"ne;": "≠",
						"nearhk;": "⤤",
						"neArr;": "⇗",
						"nearr;": "↗",
						"nearrow;": "↗",
						"nedot;": "≐̸",
						"NegativeMediumSpace;": "​",
						"NegativeThickSpace;": "​",
						"NegativeThinSpace;": "​",
						"NegativeVeryThinSpace;": "​",
						"nequiv;": "≢",
						"nesear;": "⤨",
						"nesim;": "≂̸",
						"NestedGreaterGreater;": "≫",
						"NestedLessLess;": "≪",
						"NewLine;": "\n",
						"nexist;": "∄",
						"nexists;": "∄",
						"Nfr;": "𝔑",
						"nfr;": "𝔫",
						"ngE;": "≧̸",
						"nge;": "≱",
						"ngeq;": "≱",
						"ngeqq;": "≧̸",
						"ngeqslant;": "⩾̸",
						"nges;": "⩾̸",
						"nGg;": "⋙̸",
						"ngsim;": "≵",
						"nGt;": "≫⃒",
						"ngt;": "≯",
						"ngtr;": "≯",
						"nGtv;": "≫̸",
						"nhArr;": "⇎",
						"nharr;": "↮",
						"nhpar;": "⫲",
						"ni;": "∋",
						"nis;": "⋼",
						"nisd;": "⋺",
						"niv;": "∋",
						"NJcy;": "Њ",
						"njcy;": "њ",
						"nlArr;": "⇍",
						"nlarr;": "↚",
						"nldr;": "‥",
						"nlE;": "≦̸",
						"nle;": "≰",
						"nLeftarrow;": "⇍",
						"nleftarrow;": "↚",
						"nLeftrightarrow;": "⇎",
						"nleftrightarrow;": "↮",
						"nleq;": "≰",
						"nleqq;": "≦̸",
						"nleqslant;": "⩽̸",
						"nles;": "⩽̸",
						"nless;": "≮",
						"nLl;": "⋘̸",
						"nlsim;": "≴",
						"nLt;": "≪⃒",
						"nlt;": "≮",
						"nltri;": "⋪",
						"nltrie;": "⋬",
						"nLtv;": "≪̸",
						"nmid;": "∤",
						"NoBreak;": "⁠",
						"NonBreakingSpace;": " ",
						"Nopf;": "ℕ",
						"nopf;": "𝕟",
						"Not;": "⫬",
						"not;": "¬",
						not: "¬",
						"NotCongruent;": "≢",
						"NotCupCap;": "≭",
						"NotDoubleVerticalBar;": "∦",
						"NotElement;": "∉",
						"NotEqual;": "≠",
						"NotEqualTilde;": "≂̸",
						"NotExists;": "∄",
						"NotGreater;": "≯",
						"NotGreaterEqual;": "≱",
						"NotGreaterFullEqual;": "≧̸",
						"NotGreaterGreater;": "≫̸",
						"NotGreaterLess;": "≹",
						"NotGreaterSlantEqual;": "⩾̸",
						"NotGreaterTilde;": "≵",
						"NotHumpDownHump;": "≎̸",
						"NotHumpEqual;": "≏̸",
						"notin;": "∉",
						"notindot;": "⋵̸",
						"notinE;": "⋹̸",
						"notinva;": "∉",
						"notinvb;": "⋷",
						"notinvc;": "⋶",
						"NotLeftTriangle;": "⋪",
						"NotLeftTriangleBar;": "⧏̸",
						"NotLeftTriangleEqual;": "⋬",
						"NotLess;": "≮",
						"NotLessEqual;": "≰",
						"NotLessGreater;": "≸",
						"NotLessLess;": "≪̸",
						"NotLessSlantEqual;": "⩽̸",
						"NotLessTilde;": "≴",
						"NotNestedGreaterGreater;": "⪢̸",
						"NotNestedLessLess;": "⪡̸",
						"notni;": "∌",
						"notniva;": "∌",
						"notnivb;": "⋾",
						"notnivc;": "⋽",
						"NotPrecedes;": "⊀",
						"NotPrecedesEqual;": "⪯̸",
						"NotPrecedesSlantEqual;": "⋠",
						"NotReverseElement;": "∌",
						"NotRightTriangle;": "⋫",
						"NotRightTriangleBar;": "⧐̸",
						"NotRightTriangleEqual;": "⋭",
						"NotSquareSubset;": "⊏̸",
						"NotSquareSubsetEqual;": "⋢",
						"NotSquareSuperset;": "⊐̸",
						"NotSquareSupersetEqual;": "⋣",
						"NotSubset;": "⊂⃒",
						"NotSubsetEqual;": "⊈",
						"NotSucceeds;": "⊁",
						"NotSucceedsEqual;": "⪰̸",
						"NotSucceedsSlantEqual;": "⋡",
						"NotSucceedsTilde;": "≿̸",
						"NotSuperset;": "⊃⃒",
						"NotSupersetEqual;": "⊉",
						"NotTilde;": "≁",
						"NotTildeEqual;": "≄",
						"NotTildeFullEqual;": "≇",
						"NotTildeTilde;": "≉",
						"NotVerticalBar;": "∤",
						"npar;": "∦",
						"nparallel;": "∦",
						"nparsl;": "⫽⃥",
						"npart;": "∂̸",
						"npolint;": "⨔",
						"npr;": "⊀",
						"nprcue;": "⋠",
						"npre;": "⪯̸",
						"nprec;": "⊀",
						"npreceq;": "⪯̸",
						"nrArr;": "⇏",
						"nrarr;": "↛",
						"nrarrc;": "⤳̸",
						"nrarrw;": "↝̸",
						"nRightarrow;": "⇏",
						"nrightarrow;": "↛",
						"nrtri;": "⋫",
						"nrtrie;": "⋭",
						"nsc;": "⊁",
						"nsccue;": "⋡",
						"nsce;": "⪰̸",
						"Nscr;": "𝒩",
						"nscr;": "𝓃",
						"nshortmid;": "∤",
						"nshortparallel;": "∦",
						"nsim;": "≁",
						"nsime;": "≄",
						"nsimeq;": "≄",
						"nsmid;": "∤",
						"nspar;": "∦",
						"nsqsube;": "⋢",
						"nsqsupe;": "⋣",
						"nsub;": "⊄",
						"nsubE;": "⫅̸",
						"nsube;": "⊈",
						"nsubset;": "⊂⃒",
						"nsubseteq;": "⊈",
						"nsubseteqq;": "⫅̸",
						"nsucc;": "⊁",
						"nsucceq;": "⪰̸",
						"nsup;": "⊅",
						"nsupE;": "⫆̸",
						"nsupe;": "⊉",
						"nsupset;": "⊃⃒",
						"nsupseteq;": "⊉",
						"nsupseteqq;": "⫆̸",
						"ntgl;": "≹",
						"Ntilde;": "Ñ",
						Ntilde: "Ñ",
						"ntilde;": "ñ",
						ntilde: "ñ",
						"ntlg;": "≸",
						"ntriangleleft;": "⋪",
						"ntrianglelefteq;": "⋬",
						"ntriangleright;": "⋫",
						"ntrianglerighteq;": "⋭",
						"Nu;": "Ν",
						"nu;": "ν",
						"num;": "#",
						"numero;": "№",
						"numsp;": " ",
						"nvap;": "≍⃒",
						"nVDash;": "⊯",
						"nVdash;": "⊮",
						"nvDash;": "⊭",
						"nvdash;": "⊬",
						"nvge;": "≥⃒",
						"nvgt;": ">⃒",
						"nvHarr;": "⤄",
						"nvinfin;": "⧞",
						"nvlArr;": "⤂",
						"nvle;": "≤⃒",
						"nvlt;": "<⃒",
						"nvltrie;": "⊴⃒",
						"nvrArr;": "⤃",
						"nvrtrie;": "⊵⃒",
						"nvsim;": "∼⃒",
						"nwarhk;": "⤣",
						"nwArr;": "⇖",
						"nwarr;": "↖",
						"nwarrow;": "↖",
						"nwnear;": "⤧",
						"Oacute;": "Ó",
						Oacute: "Ó",
						"oacute;": "ó",
						oacute: "ó",
						"oast;": "⊛",
						"ocir;": "⊚",
						"Ocirc;": "Ô",
						Ocirc: "Ô",
						"ocirc;": "ô",
						ocirc: "ô",
						"Ocy;": "О",
						"ocy;": "о",
						"odash;": "⊝",
						"Odblac;": "Ő",
						"odblac;": "ő",
						"odiv;": "⨸",
						"odot;": "⊙",
						"odsold;": "⦼",
						"OElig;": "Œ",
						"oelig;": "œ",
						"ofcir;": "⦿",
						"Ofr;": "𝔒",
						"ofr;": "𝔬",
						"ogon;": "˛",
						"Ograve;": "Ò",
						Ograve: "Ò",
						"ograve;": "ò",
						ograve: "ò",
						"ogt;": "⧁",
						"ohbar;": "⦵",
						"ohm;": "Ω",
						"oint;": "∮",
						"olarr;": "↺",
						"olcir;": "⦾",
						"olcross;": "⦻",
						"oline;": "‾",
						"olt;": "⧀",
						"Omacr;": "Ō",
						"omacr;": "ō",
						"Omega;": "Ω",
						"omega;": "ω",
						"Omicron;": "Ο",
						"omicron;": "ο",
						"omid;": "⦶",
						"ominus;": "⊖",
						"Oopf;": "𝕆",
						"oopf;": "𝕠",
						"opar;": "⦷",
						"OpenCurlyDoubleQuote;": "“",
						"OpenCurlyQuote;": "‘",
						"operp;": "⦹",
						"oplus;": "⊕",
						"Or;": "⩔",
						"or;": "∨",
						"orarr;": "↻",
						"ord;": "⩝",
						"order;": "ℴ",
						"orderof;": "ℴ",
						"ordf;": "ª",
						ordf: "ª",
						"ordm;": "º",
						ordm: "º",
						"origof;": "⊶",
						"oror;": "⩖",
						"orslope;": "⩗",
						"orv;": "⩛",
						"oS;": "Ⓢ",
						"Oscr;": "𝒪",
						"oscr;": "ℴ",
						"Oslash;": "Ø",
						Oslash: "Ø",
						"oslash;": "ø",
						oslash: "ø",
						"osol;": "⊘",
						"Otilde;": "Õ",
						Otilde: "Õ",
						"otilde;": "õ",
						otilde: "õ",
						"Otimes;": "⨷",
						"otimes;": "⊗",
						"otimesas;": "⨶",
						"Ouml;": "Ö",
						Ouml: "Ö",
						"ouml;": "ö",
						ouml: "ö",
						"ovbar;": "⌽",
						"OverBar;": "‾",
						"OverBrace;": "⏞",
						"OverBracket;": "⎴",
						"OverParenthesis;": "⏜",
						"par;": "∥",
						"para;": "¶",
						para: "¶",
						"parallel;": "∥",
						"parsim;": "⫳",
						"parsl;": "⫽",
						"part;": "∂",
						"PartialD;": "∂",
						"Pcy;": "П",
						"pcy;": "п",
						"percnt;": "%",
						"period;": ".",
						"permil;": "‰",
						"perp;": "⊥",
						"pertenk;": "‱",
						"Pfr;": "𝔓",
						"pfr;": "𝔭",
						"Phi;": "Φ",
						"phi;": "φ",
						"phiv;": "ϕ",
						"phmmat;": "ℳ",
						"phone;": "☎",
						"Pi;": "Π",
						"pi;": "π",
						"pitchfork;": "⋔",
						"piv;": "ϖ",
						"planck;": "ℏ",
						"planckh;": "ℎ",
						"plankv;": "ℏ",
						"plus;": "+",
						"plusacir;": "⨣",
						"plusb;": "⊞",
						"pluscir;": "⨢",
						"plusdo;": "∔",
						"plusdu;": "⨥",
						"pluse;": "⩲",
						"PlusMinus;": "±",
						"plusmn;": "±",
						plusmn: "±",
						"plussim;": "⨦",
						"plustwo;": "⨧",
						"pm;": "±",
						"Poincareplane;": "ℌ",
						"pointint;": "⨕",
						"Popf;": "ℙ",
						"popf;": "𝕡",
						"pound;": "£",
						pound: "£",
						"Pr;": "⪻",
						"pr;": "≺",
						"prap;": "⪷",
						"prcue;": "≼",
						"prE;": "⪳",
						"pre;": "⪯",
						"prec;": "≺",
						"precapprox;": "⪷",
						"preccurlyeq;": "≼",
						"Precedes;": "≺",
						"PrecedesEqual;": "⪯",
						"PrecedesSlantEqual;": "≼",
						"PrecedesTilde;": "≾",
						"preceq;": "⪯",
						"precnapprox;": "⪹",
						"precneqq;": "⪵",
						"precnsim;": "⋨",
						"precsim;": "≾",
						"Prime;": "″",
						"prime;": "′",
						"primes;": "ℙ",
						"prnap;": "⪹",
						"prnE;": "⪵",
						"prnsim;": "⋨",
						"prod;": "∏",
						"Product;": "∏",
						"profalar;": "⌮",
						"profline;": "⌒",
						"profsurf;": "⌓",
						"prop;": "∝",
						"Proportion;": "∷",
						"Proportional;": "∝",
						"propto;": "∝",
						"prsim;": "≾",
						"prurel;": "⊰",
						"Pscr;": "𝒫",
						"pscr;": "𝓅",
						"Psi;": "Ψ",
						"psi;": "ψ",
						"puncsp;": " ",
						"Qfr;": "𝔔",
						"qfr;": "𝔮",
						"qint;": "⨌",
						"Qopf;": "ℚ",
						"qopf;": "𝕢",
						"qprime;": "⁗",
						"Qscr;": "𝒬",
						"qscr;": "𝓆",
						"quaternions;": "ℍ",
						"quatint;": "⨖",
						"quest;": "?",
						"questeq;": "≟",
						"QUOT;": '"',
						QUOT: '"',
						"quot;": '"',
						quot: '"',
						"rAarr;": "⇛",
						"race;": "∽̱",
						"Racute;": "Ŕ",
						"racute;": "ŕ",
						"radic;": "√",
						"raemptyv;": "⦳",
						"Rang;": "⟫",
						"rang;": "⟩",
						"rangd;": "⦒",
						"range;": "⦥",
						"rangle;": "⟩",
						"raquo;": "»",
						raquo: "»",
						"Rarr;": "↠",
						"rArr;": "⇒",
						"rarr;": "→",
						"rarrap;": "⥵",
						"rarrb;": "⇥",
						"rarrbfs;": "⤠",
						"rarrc;": "⤳",
						"rarrfs;": "⤞",
						"rarrhk;": "↪",
						"rarrlp;": "↬",
						"rarrpl;": "⥅",
						"rarrsim;": "⥴",
						"Rarrtl;": "⤖",
						"rarrtl;": "↣",
						"rarrw;": "↝",
						"rAtail;": "⤜",
						"ratail;": "⤚",
						"ratio;": "∶",
						"rationals;": "ℚ",
						"RBarr;": "⤐",
						"rBarr;": "⤏",
						"rbarr;": "⤍",
						"rbbrk;": "❳",
						"rbrace;": "}",
						"rbrack;": "]",
						"rbrke;": "⦌",
						"rbrksld;": "⦎",
						"rbrkslu;": "⦐",
						"Rcaron;": "Ř",
						"rcaron;": "ř",
						"Rcedil;": "Ŗ",
						"rcedil;": "ŗ",
						"rceil;": "⌉",
						"rcub;": "}",
						"Rcy;": "Р",
						"rcy;": "р",
						"rdca;": "⤷",
						"rdldhar;": "⥩",
						"rdquo;": "”",
						"rdquor;": "”",
						"rdsh;": "↳",
						"Re;": "ℜ",
						"real;": "ℜ",
						"realine;": "ℛ",
						"realpart;": "ℜ",
						"reals;": "ℝ",
						"rect;": "▭",
						"REG;": "®",
						REG: "®",
						"reg;": "®",
						reg: "®",
						"ReverseElement;": "∋",
						"ReverseEquilibrium;": "⇋",
						"ReverseUpEquilibrium;": "⥯",
						"rfisht;": "⥽",
						"rfloor;": "⌋",
						"Rfr;": "ℜ",
						"rfr;": "𝔯",
						"rHar;": "⥤",
						"rhard;": "⇁",
						"rharu;": "⇀",
						"rharul;": "⥬",
						"Rho;": "Ρ",
						"rho;": "ρ",
						"rhov;": "ϱ",
						"RightAngleBracket;": "⟩",
						"RightArrow;": "→",
						"Rightarrow;": "⇒",
						"rightarrow;": "→",
						"RightArrowBar;": "⇥",
						"RightArrowLeftArrow;": "⇄",
						"rightarrowtail;": "↣",
						"RightCeiling;": "⌉",
						"RightDoubleBracket;": "⟧",
						"RightDownTeeVector;": "⥝",
						"RightDownVector;": "⇂",
						"RightDownVectorBar;": "⥕",
						"RightFloor;": "⌋",
						"rightharpoondown;": "⇁",
						"rightharpoonup;": "⇀",
						"rightleftarrows;": "⇄",
						"rightleftharpoons;": "⇌",
						"rightrightarrows;": "⇉",
						"rightsquigarrow;": "↝",
						"RightTee;": "⊢",
						"RightTeeArrow;": "↦",
						"RightTeeVector;": "⥛",
						"rightthreetimes;": "⋌",
						"RightTriangle;": "⊳",
						"RightTriangleBar;": "⧐",
						"RightTriangleEqual;": "⊵",
						"RightUpDownVector;": "⥏",
						"RightUpTeeVector;": "⥜",
						"RightUpVector;": "↾",
						"RightUpVectorBar;": "⥔",
						"RightVector;": "⇀",
						"RightVectorBar;": "⥓",
						"ring;": "˚",
						"risingdotseq;": "≓",
						"rlarr;": "⇄",
						"rlhar;": "⇌",
						"rlm;": "‏",
						"rmoust;": "⎱",
						"rmoustache;": "⎱",
						"rnmid;": "⫮",
						"roang;": "⟭",
						"roarr;": "⇾",
						"robrk;": "⟧",
						"ropar;": "⦆",
						"Ropf;": "ℝ",
						"ropf;": "𝕣",
						"roplus;": "⨮",
						"rotimes;": "⨵",
						"RoundImplies;": "⥰",
						"rpar;": ")",
						"rpargt;": "⦔",
						"rppolint;": "⨒",
						"rrarr;": "⇉",
						"Rrightarrow;": "⇛",
						"rsaquo;": "›",
						"Rscr;": "ℛ",
						"rscr;": "𝓇",
						"Rsh;": "↱",
						"rsh;": "↱",
						"rsqb;": "]",
						"rsquo;": "’",
						"rsquor;": "’",
						"rthree;": "⋌",
						"rtimes;": "⋊",
						"rtri;": "▹",
						"rtrie;": "⊵",
						"rtrif;": "▸",
						"rtriltri;": "⧎",
						"RuleDelayed;": "⧴",
						"ruluhar;": "⥨",
						"rx;": "℞",
						"Sacute;": "Ś",
						"sacute;": "ś",
						"sbquo;": "‚",
						"Sc;": "⪼",
						"sc;": "≻",
						"scap;": "⪸",
						"Scaron;": "Š",
						"scaron;": "š",
						"sccue;": "≽",
						"scE;": "⪴",
						"sce;": "⪰",
						"Scedil;": "Ş",
						"scedil;": "ş",
						"Scirc;": "Ŝ",
						"scirc;": "ŝ",
						"scnap;": "⪺",
						"scnE;": "⪶",
						"scnsim;": "⋩",
						"scpolint;": "⨓",
						"scsim;": "≿",
						"Scy;": "С",
						"scy;": "с",
						"sdot;": "⋅",
						"sdotb;": "⊡",
						"sdote;": "⩦",
						"searhk;": "⤥",
						"seArr;": "⇘",
						"searr;": "↘",
						"searrow;": "↘",
						"sect;": "§",
						sect: "§",
						"semi;": ";",
						"seswar;": "⤩",
						"setminus;": "∖",
						"setmn;": "∖",
						"sext;": "✶",
						"Sfr;": "𝔖",
						"sfr;": "𝔰",
						"sfrown;": "⌢",
						"sharp;": "♯",
						"SHCHcy;": "Щ",
						"shchcy;": "щ",
						"SHcy;": "Ш",
						"shcy;": "ш",
						"ShortDownArrow;": "↓",
						"ShortLeftArrow;": "←",
						"shortmid;": "∣",
						"shortparallel;": "∥",
						"ShortRightArrow;": "→",
						"ShortUpArrow;": "↑",
						"shy;": "­",
						shy: "­",
						"Sigma;": "Σ",
						"sigma;": "σ",
						"sigmaf;": "ς",
						"sigmav;": "ς",
						"sim;": "∼",
						"simdot;": "⩪",
						"sime;": "≃",
						"simeq;": "≃",
						"simg;": "⪞",
						"simgE;": "⪠",
						"siml;": "⪝",
						"simlE;": "⪟",
						"simne;": "≆",
						"simplus;": "⨤",
						"simrarr;": "⥲",
						"slarr;": "←",
						"SmallCircle;": "∘",
						"smallsetminus;": "∖",
						"smashp;": "⨳",
						"smeparsl;": "⧤",
						"smid;": "∣",
						"smile;": "⌣",
						"smt;": "⪪",
						"smte;": "⪬",
						"smtes;": "⪬︀",
						"SOFTcy;": "Ь",
						"softcy;": "ь",
						"sol;": "/",
						"solb;": "⧄",
						"solbar;": "⌿",
						"Sopf;": "𝕊",
						"sopf;": "𝕤",
						"spades;": "♠",
						"spadesuit;": "♠",
						"spar;": "∥",
						"sqcap;": "⊓",
						"sqcaps;": "⊓︀",
						"sqcup;": "⊔",
						"sqcups;": "⊔︀",
						"Sqrt;": "√",
						"sqsub;": "⊏",
						"sqsube;": "⊑",
						"sqsubset;": "⊏",
						"sqsubseteq;": "⊑",
						"sqsup;": "⊐",
						"sqsupe;": "⊒",
						"sqsupset;": "⊐",
						"sqsupseteq;": "⊒",
						"squ;": "□",
						"Square;": "□",
						"square;": "□",
						"SquareIntersection;": "⊓",
						"SquareSubset;": "⊏",
						"SquareSubsetEqual;": "⊑",
						"SquareSuperset;": "⊐",
						"SquareSupersetEqual;": "⊒",
						"SquareUnion;": "⊔",
						"squarf;": "▪",
						"squf;": "▪",
						"srarr;": "→",
						"Sscr;": "𝒮",
						"sscr;": "𝓈",
						"ssetmn;": "∖",
						"ssmile;": "⌣",
						"sstarf;": "⋆",
						"Star;": "⋆",
						"star;": "☆",
						"starf;": "★",
						"straightepsilon;": "ϵ",
						"straightphi;": "ϕ",
						"strns;": "¯",
						"Sub;": "⋐",
						"sub;": "⊂",
						"subdot;": "⪽",
						"subE;": "⫅",
						"sube;": "⊆",
						"subedot;": "⫃",
						"submult;": "⫁",
						"subnE;": "⫋",
						"subne;": "⊊",
						"subplus;": "⪿",
						"subrarr;": "⥹",
						"Subset;": "⋐",
						"subset;": "⊂",
						"subseteq;": "⊆",
						"subseteqq;": "⫅",
						"SubsetEqual;": "⊆",
						"subsetneq;": "⊊",
						"subsetneqq;": "⫋",
						"subsim;": "⫇",
						"subsub;": "⫕",
						"subsup;": "⫓",
						"succ;": "≻",
						"succapprox;": "⪸",
						"succcurlyeq;": "≽",
						"Succeeds;": "≻",
						"SucceedsEqual;": "⪰",
						"SucceedsSlantEqual;": "≽",
						"SucceedsTilde;": "≿",
						"succeq;": "⪰",
						"succnapprox;": "⪺",
						"succneqq;": "⪶",
						"succnsim;": "⋩",
						"succsim;": "≿",
						"SuchThat;": "∋",
						"Sum;": "∑",
						"sum;": "∑",
						"sung;": "♪",
						"Sup;": "⋑",
						"sup;": "⊃",
						"sup1;": "¹",
						sup1: "¹",
						"sup2;": "²",
						sup2: "²",
						"sup3;": "³",
						sup3: "³",
						"supdot;": "⪾",
						"supdsub;": "⫘",
						"supE;": "⫆",
						"supe;": "⊇",
						"supedot;": "⫄",
						"Superset;": "⊃",
						"SupersetEqual;": "⊇",
						"suphsol;": "⟉",
						"suphsub;": "⫗",
						"suplarr;": "⥻",
						"supmult;": "⫂",
						"supnE;": "⫌",
						"supne;": "⊋",
						"supplus;": "⫀",
						"Supset;": "⋑",
						"supset;": "⊃",
						"supseteq;": "⊇",
						"supseteqq;": "⫆",
						"supsetneq;": "⊋",
						"supsetneqq;": "⫌",
						"supsim;": "⫈",
						"supsub;": "⫔",
						"supsup;": "⫖",
						"swarhk;": "⤦",
						"swArr;": "⇙",
						"swarr;": "↙",
						"swarrow;": "↙",
						"swnwar;": "⤪",
						"szlig;": "ß",
						szlig: "ß",
						"Tab;": "\t",
						"target;": "⌖",
						"Tau;": "Τ",
						"tau;": "τ",
						"tbrk;": "⎴",
						"Tcaron;": "Ť",
						"tcaron;": "ť",
						"Tcedil;": "Ţ",
						"tcedil;": "ţ",
						"Tcy;": "Т",
						"tcy;": "т",
						"tdot;": "⃛",
						"telrec;": "⌕",
						"Tfr;": "𝔗",
						"tfr;": "𝔱",
						"there4;": "∴",
						"Therefore;": "∴",
						"therefore;": "∴",
						"Theta;": "Θ",
						"theta;": "θ",
						"thetasym;": "ϑ",
						"thetav;": "ϑ",
						"thickapprox;": "≈",
						"thicksim;": "∼",
						"ThickSpace;": "  ",
						"thinsp;": " ",
						"ThinSpace;": " ",
						"thkap;": "≈",
						"thksim;": "∼",
						"THORN;": "Þ",
						THORN: "Þ",
						"thorn;": "þ",
						thorn: "þ",
						"Tilde;": "∼",
						"tilde;": "˜",
						"TildeEqual;": "≃",
						"TildeFullEqual;": "≅",
						"TildeTilde;": "≈",
						"times;": "×",
						times: "×",
						"timesb;": "⊠",
						"timesbar;": "⨱",
						"timesd;": "⨰",
						"tint;": "∭",
						"toea;": "⤨",
						"top;": "⊤",
						"topbot;": "⌶",
						"topcir;": "⫱",
						"Topf;": "𝕋",
						"topf;": "𝕥",
						"topfork;": "⫚",
						"tosa;": "⤩",
						"tprime;": "‴",
						"TRADE;": "™",
						"trade;": "™",
						"triangle;": "▵",
						"triangledown;": "▿",
						"triangleleft;": "◃",
						"trianglelefteq;": "⊴",
						"triangleq;": "≜",
						"triangleright;": "▹",
						"trianglerighteq;": "⊵",
						"tridot;": "◬",
						"trie;": "≜",
						"triminus;": "⨺",
						"TripleDot;": "⃛",
						"triplus;": "⨹",
						"trisb;": "⧍",
						"tritime;": "⨻",
						"trpezium;": "⏢",
						"Tscr;": "𝒯",
						"tscr;": "𝓉",
						"TScy;": "Ц",
						"tscy;": "ц",
						"TSHcy;": "Ћ",
						"tshcy;": "ћ",
						"Tstrok;": "Ŧ",
						"tstrok;": "ŧ",
						"twixt;": "≬",
						"twoheadleftarrow;": "↞",
						"twoheadrightarrow;": "↠",
						"Uacute;": "Ú",
						Uacute: "Ú",
						"uacute;": "ú",
						uacute: "ú",
						"Uarr;": "↟",
						"uArr;": "⇑",
						"uarr;": "↑",
						"Uarrocir;": "⥉",
						"Ubrcy;": "Ў",
						"ubrcy;": "ў",
						"Ubreve;": "Ŭ",
						"ubreve;": "ŭ",
						"Ucirc;": "Û",
						Ucirc: "Û",
						"ucirc;": "û",
						ucirc: "û",
						"Ucy;": "У",
						"ucy;": "у",
						"udarr;": "⇅",
						"Udblac;": "Ű",
						"udblac;": "ű",
						"udhar;": "⥮",
						"ufisht;": "⥾",
						"Ufr;": "𝔘",
						"ufr;": "𝔲",
						"Ugrave;": "Ù",
						Ugrave: "Ù",
						"ugrave;": "ù",
						ugrave: "ù",
						"uHar;": "⥣",
						"uharl;": "↿",
						"uharr;": "↾",
						"uhblk;": "▀",
						"ulcorn;": "⌜",
						"ulcorner;": "⌜",
						"ulcrop;": "⌏",
						"ultri;": "◸",
						"Umacr;": "Ū",
						"umacr;": "ū",
						"uml;": "¨",
						uml: "¨",
						"UnderBar;": "_",
						"UnderBrace;": "⏟",
						"UnderBracket;": "⎵",
						"UnderParenthesis;": "⏝",
						"Union;": "⋃",
						"UnionPlus;": "⊎",
						"Uogon;": "Ų",
						"uogon;": "ų",
						"Uopf;": "𝕌",
						"uopf;": "𝕦",
						"UpArrow;": "↑",
						"Uparrow;": "⇑",
						"uparrow;": "↑",
						"UpArrowBar;": "⤒",
						"UpArrowDownArrow;": "⇅",
						"UpDownArrow;": "↕",
						"Updownarrow;": "⇕",
						"updownarrow;": "↕",
						"UpEquilibrium;": "⥮",
						"upharpoonleft;": "↿",
						"upharpoonright;": "↾",
						"uplus;": "⊎",
						"UpperLeftArrow;": "↖",
						"UpperRightArrow;": "↗",
						"Upsi;": "ϒ",
						"upsi;": "υ",
						"upsih;": "ϒ",
						"Upsilon;": "Υ",
						"upsilon;": "υ",
						"UpTee;": "⊥",
						"UpTeeArrow;": "↥",
						"upuparrows;": "⇈",
						"urcorn;": "⌝",
						"urcorner;": "⌝",
						"urcrop;": "⌎",
						"Uring;": "Ů",
						"uring;": "ů",
						"urtri;": "◹",
						"Uscr;": "𝒰",
						"uscr;": "𝓊",
						"utdot;": "⋰",
						"Utilde;": "Ũ",
						"utilde;": "ũ",
						"utri;": "▵",
						"utrif;": "▴",
						"uuarr;": "⇈",
						"Uuml;": "Ü",
						Uuml: "Ü",
						"uuml;": "ü",
						uuml: "ü",
						"uwangle;": "⦧",
						"vangrt;": "⦜",
						"varepsilon;": "ϵ",
						"varkappa;": "ϰ",
						"varnothing;": "∅",
						"varphi;": "ϕ",
						"varpi;": "ϖ",
						"varpropto;": "∝",
						"vArr;": "⇕",
						"varr;": "↕",
						"varrho;": "ϱ",
						"varsigma;": "ς",
						"varsubsetneq;": "⊊︀",
						"varsubsetneqq;": "⫋︀",
						"varsupsetneq;": "⊋︀",
						"varsupsetneqq;": "⫌︀",
						"vartheta;": "ϑ",
						"vartriangleleft;": "⊲",
						"vartriangleright;": "⊳",
						"Vbar;": "⫫",
						"vBar;": "⫨",
						"vBarv;": "⫩",
						"Vcy;": "В",
						"vcy;": "в",
						"VDash;": "⊫",
						"Vdash;": "⊩",
						"vDash;": "⊨",
						"vdash;": "⊢",
						"Vdashl;": "⫦",
						"Vee;": "⋁",
						"vee;": "∨",
						"veebar;": "⊻",
						"veeeq;": "≚",
						"vellip;": "⋮",
						"Verbar;": "‖",
						"verbar;": "|",
						"Vert;": "‖",
						"vert;": "|",
						"VerticalBar;": "∣",
						"VerticalLine;": "|",
						"VerticalSeparator;": "❘",
						"VerticalTilde;": "≀",
						"VeryThinSpace;": " ",
						"Vfr;": "𝔙",
						"vfr;": "𝔳",
						"vltri;": "⊲",
						"vnsub;": "⊂⃒",
						"vnsup;": "⊃⃒",
						"Vopf;": "𝕍",
						"vopf;": "𝕧",
						"vprop;": "∝",
						"vrtri;": "⊳",
						"Vscr;": "𝒱",
						"vscr;": "𝓋",
						"vsubnE;": "⫋︀",
						"vsubne;": "⊊︀",
						"vsupnE;": "⫌︀",
						"vsupne;": "⊋︀",
						"Vvdash;": "⊪",
						"vzigzag;": "⦚",
						"Wcirc;": "Ŵ",
						"wcirc;": "ŵ",
						"wedbar;": "⩟",
						"Wedge;": "⋀",
						"wedge;": "∧",
						"wedgeq;": "≙",
						"weierp;": "℘",
						"Wfr;": "𝔚",
						"wfr;": "𝔴",
						"Wopf;": "𝕎",
						"wopf;": "𝕨",
						"wp;": "℘",
						"wr;": "≀",
						"wreath;": "≀",
						"Wscr;": "𝒲",
						"wscr;": "𝓌",
						"xcap;": "⋂",
						"xcirc;": "◯",
						"xcup;": "⋃",
						"xdtri;": "▽",
						"Xfr;": "𝔛",
						"xfr;": "𝔵",
						"xhArr;": "⟺",
						"xharr;": "⟷",
						"Xi;": "Ξ",
						"xi;": "ξ",
						"xlArr;": "⟸",
						"xlarr;": "⟵",
						"xmap;": "⟼",
						"xnis;": "⋻",
						"xodot;": "⨀",
						"Xopf;": "𝕏",
						"xopf;": "𝕩",
						"xoplus;": "⨁",
						"xotime;": "⨂",
						"xrArr;": "⟹",
						"xrarr;": "⟶",
						"Xscr;": "𝒳",
						"xscr;": "𝓍",
						"xsqcup;": "⨆",
						"xuplus;": "⨄",
						"xutri;": "△",
						"xvee;": "⋁",
						"xwedge;": "⋀",
						"Yacute;": "Ý",
						Yacute: "Ý",
						"yacute;": "ý",
						yacute: "ý",
						"YAcy;": "Я",
						"yacy;": "я",
						"Ycirc;": "Ŷ",
						"ycirc;": "ŷ",
						"Ycy;": "Ы",
						"ycy;": "ы",
						"yen;": "¥",
						yen: "¥",
						"Yfr;": "𝔜",
						"yfr;": "𝔶",
						"YIcy;": "Ї",
						"yicy;": "ї",
						"Yopf;": "𝕐",
						"yopf;": "𝕪",
						"Yscr;": "𝒴",
						"yscr;": "𝓎",
						"YUcy;": "Ю",
						"yucy;": "ю",
						"Yuml;": "Ÿ",
						"yuml;": "ÿ",
						yuml: "ÿ",
						"Zacute;": "Ź",
						"zacute;": "ź",
						"Zcaron;": "Ž",
						"zcaron;": "ž",
						"Zcy;": "З",
						"zcy;": "з",
						"Zdot;": "Ż",
						"zdot;": "ż",
						"zeetrf;": "ℨ",
						"ZeroWidthSpace;": "​",
						"Zeta;": "Ζ",
						"zeta;": "ζ",
						"Zfr;": "ℨ",
						"zfr;": "𝔷",
						"ZHcy;": "Ж",
						"zhcy;": "ж",
						"zigrarr;": "⇝",
						"Zopf;": "ℤ",
						"zopf;": "𝕫",
						"Zscr;": "𝒵",
						"zscr;": "𝓏",
						"zwj;": "‍",
						"zwnj;": "‌"
					}
				}))),
				Zt = function(t) {
					if ("string" != typeof t) throw new TypeError("Expected a String");
					return t.replace(/&(#?[^;\W]+;?)/g, (function(t, e) {
						var n;
						if (n = /^#(\d+);?$/.exec(e)) return Xt.ucs2.encode([parseInt(n[1], 10)]);
						if (n = /^#[Xx]([A-Fa-f0-9]+);?/.exec(e)) return Xt.ucs2.encode([parseInt(n[1], 16)]);
						var r = /;$/.test(e),
							i = r ? e.replace(/;$/, "") : e,
							o = Qt[i] || r && Qt[e];
						return "number" == typeof o ? Xt.ucs2.encode([o]) : "string" == typeof o ? o : "&" + e
					}))
				};

			function Kt(t, e) {
				return function(t, e, n) {
					if ("string" != typeof t || !t.length) return null;
					if (e && "number" == typeof e || (e = 0), !t[e + 1]) return null;
					if (t[e + 1] && t[e + 1].trim()) return e + 1;
					if (t[e + 2] && t[e + 2].trim()) return e + 2;
					for (var r = e + 1, i = t.length; r < i; r++)
						if (t[r] && t[r].trim()) return r;
					return null
				}(t, e)
			}

			function te(e, n) {
				if (!e) return [];
				if (Array.isArray(e)) return e.filter((function(t) {
					return "string" == typeof t && t.trim()
				}));
				if ("string" == typeof e) return e.trim() ? [e] : [];
				throw new TypeError("string-strip-html/stripHtml(): [THROW_ID_03] ".concat(n, " must be array containing zero or more strings or something falsey. Currently it's equal to: ").concat(e, ", that a type of ").concat(t(e), "."))
			}
			return function(t, e, n) {
					t(n = {
						path: void 0,
						exports: {},
						require: function(t, e) {
							return function() {
								throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")
							}(null == e && n.path)
						}
					}, n.exports), n.exports
				}((function(e, n) {
					var r = "[object Arguments]",
						i = "[object Function]",
						o = "[object GeneratorFunction]",
						a = "[object Map]",
						s = "[object Set]",
						c = /\w*$/,
						l = /^\[object .+?Constructor\]$/,
						u = /^(?:0|[1-9]\d*)$/,
						d = {};
					d[r] = d["[object Array]"] = d["[object ArrayBuffer]"] = d["[object DataView]"] = d["[object Boolean]"] = d["[object Date]"] = d["[object Float32Array]"] = d["[object Float64Array]"] = d["[object Int8Array]"] = d["[object Int16Array]"] = d["[object Int32Array]"] = d[a] = d["[object Number]"] = d["[object Object]"] = d["[object RegExp]"] = d[s] = d["[object String]"] = d["[object Symbol]"] = d["[object Uint8Array]"] = d["[object Uint8ClampedArray]"] = d["[object Uint16Array]"] = d["[object Uint32Array]"] = !0, d["[object Error]"] = d[i] = d["[object WeakMap]"] = !1;
					var f = "object" == t(L) && L && L.Object === Object && L,
						h = "object" == ("undefined" == typeof self ? "undefined" : t(self)) && self && self.Object === Object && self,
						p = f || h || Function("return this")(),
						g = n && !n.nodeType && n,
						v = g && e && !e.nodeType && e,
						m = v && v.exports === g;

					function y(t, e) {
						return t.set(e[0], e[1]), t
					}

					function b(t, e) {
						return t.add(e), t
					}

					function w(t, e, n, r) {
						var i = -1,
							o = t ? t.length : 0;
						for (r && o && (n = t[++i]); ++i < o;) n = e(n, t[i], i, t);
						return n
					}

					function E(t) {
						var e = !1;
						if (null != t && "function" != typeof t.toString) try {
							e = !!(t + "")
						} catch (t) {}
						return e
					}

					function _(t) {
						var e = -1,
							n = Array(t.size);
						return t.forEach((function(t, r) {
							n[++e] = [r, t]
						})), n
					}

					function A(t, e) {
						return function(n) {
							return t(e(n))
						}
					}

					function k(t) {
						var e = -1,
							n = Array(t.size);
						return t.forEach((function(t) {
							n[++e] = t
						})), n
					}
					var T = Array.prototype,
						S = Function.prototype,
						x = Object.prototype,
						C = p["__core-js_shared__"],
						O = function() {
							var t = /[^.]+$/.exec(C && C.keys && C.keys.IE_PROTO || "");
							return t ? "Symbol(src)_1." + t : ""
						}(),
						q = S.toString,
						D = x.hasOwnProperty,
						P = x.toString,
						j = RegExp("^" + q.call(D).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
						I = m ? p.Buffer : void 0,
						N = p.Symbol,
						M = p.Uint8Array,
						z = A(Object.getPrototypeOf, Object),
						R = Object.create,
						B = x.propertyIsEnumerable,
						F = T.splice,
						H = Object.getOwnPropertySymbols,
						V = I ? I.isBuffer : void 0,
						U = A(Object.keys, Object),
						W = gt(p, "DataView"),
						G = gt(p, "Map"),
						$ = gt(p, "Promise"),
						J = gt(p, "Set"),
						Y = gt(p, "WeakMap"),
						X = gt(Object, "create"),
						Q = wt(W),
						Z = wt(G),
						K = wt($),
						tt = wt(J),
						et = wt(Y),
						nt = N ? N.prototype : void 0,
						rt = nt ? nt.valueOf : void 0;

					function it(t) {
						var e = -1,
							n = t ? t.length : 0;
						for (this.clear(); ++e < n;) {
							var r = t[e];
							this.set(r[0], r[1])
						}
					}

					function ot(t) {
						var e = -1,
							n = t ? t.length : 0;
						for (this.clear(); ++e < n;) {
							var r = t[e];
							this.set(r[0], r[1])
						}
					}

					function at(t) {
						var e = -1,
							n = t ? t.length : 0;
						for (this.clear(); ++e < n;) {
							var r = t[e];
							this.set(r[0], r[1])
						}
					}

					function st(t) {
						this.__data__ = new ot(t)
					}

					function ct(e, n) {
						var i = _t(e) || function(e) {
								return function(e) {
									return function(e) {
										return !!e && "object" == t(e)
									}(e) && At(e)
								}(e) && D.call(e, "callee") && (!B.call(e, "callee") || P.call(e) == r)
							}(e) ? function(t, e) {
								for (var n = -1, r = Array(t); ++n < t;) r[n] = e(n);
								return r
							}(e.length, String) : [],
							o = i.length,
							a = !!o;
						for (var s in e) !n && !D.call(e, s) || a && ("length" == s || yt(s, o)) || i.push(s);
						return i
					}

					function lt(t, e, n) {
						var r = t[e];
						D.call(t, e) && Et(r, n) && (void 0 !== n || e in t) || (t[e] = n)
					}

					function ut(t, e) {
						for (var n = t.length; n--;)
							if (Et(t[n][0], e)) return n;
						return -1
					}

					function dt(t, e, n, l, u, f, h) {
						var p;
						if (l && (p = f ? l(t, u, f, h) : l(t)), void 0 !== p) return p;
						if (!St(t)) return t;
						var g = _t(t);
						if (g) {
							if (p = function(t) {
									var e = t.length,
										n = t.constructor(e);
									return e && "string" == typeof t[0] && D.call(t, "index") && (n.index = t.index, n.input = t.input), n
								}(t), !e) return function(t, e) {
								var n = -1,
									r = t.length;
								for (e || (e = Array(r)); ++n < r;) e[n] = t[n];
								return e
							}(t, p)
						} else {
							var v = mt(t),
								m = v == i || v == o;
							if (kt(t)) return function(t, e) {
								if (e) return t.slice();
								var n = new t.constructor(t.length);
								return t.copy(n), n
							}(t, e);
							if ("[object Object]" == v || v == r || m && !f) {
								if (E(t)) return f ? t : {};
								if (p = function(t) {
										return "function" != typeof t.constructor || bt(t) ? {} : St(e = z(t)) ? R(e) : {};
										var e
									}(m ? {} : t), !e) return function(t, e) {
									return ht(t, vt(t), e)
								}(t, function(t, e) {
									return t && ht(e, xt(e), t)
								}(p, t))
							} else {
								if (!d[v]) return f ? t : {};
								p = function(t, e, n, r) {
									var i, o = t.constructor;
									switch (e) {
										case "[object ArrayBuffer]":
											return ft(t);
										case "[object Boolean]":
										case "[object Date]":
											return new o(+t);
										case "[object DataView]":
											return function(t, e) {
												var n = e ? ft(t.buffer) : t.buffer;
												return new t.constructor(n, t.byteOffset, t.byteLength)
											}(t, r);
										case "[object Float32Array]":
										case "[object Float64Array]":
										case "[object Int8Array]":
										case "[object Int16Array]":
										case "[object Int32Array]":
										case "[object Uint8Array]":
										case "[object Uint8ClampedArray]":
										case "[object Uint16Array]":
										case "[object Uint32Array]":
											return function(t, e) {
												var n = e ? ft(t.buffer) : t.buffer;
												return new t.constructor(n, t.byteOffset, t.length)
											}(t, r);
										case a:
											return function(t, e, n) {
												return w(e ? n(_(t), !0) : _(t), y, new t.constructor)
											}(t, r, n);
										case "[object Number]":
										case "[object String]":
											return new o(t);
										case "[object RegExp]":
											return function(t) {
												var e = new t.constructor(t.source, c.exec(t));
												return e.lastIndex = t.lastIndex, e
											}(t);
										case s:
											return function(t, e, n) {
												return w(e ? n(k(t), !0) : k(t), b, new t.constructor)
											}(t, r, n);
										case "[object Symbol]":
											return i = t, rt ? Object(rt.call(i)) : {}
									}
								}(t, v, dt, e)
							}
						}
						h || (h = new st);
						var A = h.get(t);
						if (A) return A;
						if (h.set(t, p), !g) var T = n ? function(t) {
							return function(t, e, n) {
								var r = e(t);
								return _t(t) ? r : function(t, e) {
									for (var n = -1, r = e.length, i = t.length; ++n < r;) t[i + n] = e[n];
									return t
								}(r, n(t))
							}(t, xt, vt)
						}(t) : xt(t);
						return function(t, e) {
							for (var n = -1, r = t ? t.length : 0; ++n < r && !1 !== e(t[n], n););
						}(T || t, (function(r, i) {
							T && (r = t[i = r]), lt(p, i, dt(r, e, n, l, i, t, h))
						})), p
					}

					function ft(t) {
						var e = new t.constructor(t.byteLength);
						return new M(e).set(new M(t)), e
					}

					function ht(t, e, n, r) {
						n || (n = {});
						for (var i = -1, o = e.length; ++i < o;) {
							var a = e[i],
								s = r ? r(n[a], t[a], a, n, t) : void 0;
							lt(n, a, void 0 === s ? t[a] : s)
						}
						return n
					}

					function pt(e, n) {
						var r, i, o = e.__data__;
						return ("string" == (i = t(r = n)) || "number" == i || "symbol" == i || "boolean" == i ? "__proto__" !== r : null === r) ? o["string" == typeof n ? "string" : "hash"] : o.map
					}

					function gt(t, e) {
						var n = function(t, e) {
							return null == t ? void 0 : t[e]
						}(t, e);
						return function(t) {
							return !(!St(t) || function(t) {
								return !!O && O in t
							}(t)) && (Tt(t) || E(t) ? j : l).test(wt(t))
						}(n) ? n : void 0
					}
					it.prototype.clear = function() {
						this.__data__ = X ? X(null) : {}
					}, it.prototype.delete = function(t) {
						return this.has(t) && delete this.__data__[t]
					}, it.prototype.get = function(t) {
						var e = this.__data__;
						if (X) {
							var n = e[t];
							return "__lodash_hash_undefined__" === n ? void 0 : n
						}
						return D.call(e, t) ? e[t] : void 0
					}, it.prototype.has = function(t) {
						var e = this.__data__;
						return X ? void 0 !== e[t] : D.call(e, t)
					}, it.prototype.set = function(t, e) {
						return this.__data__[t] = X && void 0 === e ? "__lodash_hash_undefined__" : e, this
					}, ot.prototype.clear = function() {
						this.__data__ = []
					}, ot.prototype.delete = function(t) {
						var e = this.__data__,
							n = ut(e, t);
						return !(n < 0 || (n == e.length - 1 ? e.pop() : F.call(e, n, 1), 0))
					}, ot.prototype.get = function(t) {
						var e = this.__data__,
							n = ut(e, t);
						return n < 0 ? void 0 : e[n][1]
					}, ot.prototype.has = function(t) {
						return ut(this.__data__, t) > -1
					}, ot.prototype.set = function(t, e) {
						var n = this.__data__,
							r = ut(n, t);
						return r < 0 ? n.push([t, e]) : n[r][1] = e, this
					}, at.prototype.clear = function() {
						this.__data__ = {
							hash: new it,
							map: new(G || ot),
							string: new it
						}
					}, at.prototype.delete = function(t) {
						return pt(this, t).delete(t)
					}, at.prototype.get = function(t) {
						return pt(this, t).get(t)
					}, at.prototype.has = function(t) {
						return pt(this, t).has(t)
					}, at.prototype.set = function(t, e) {
						return pt(this, t).set(t, e), this
					}, st.prototype.clear = function() {
						this.__data__ = new ot
					}, st.prototype.delete = function(t) {
						return this.__data__.delete(t)
					}, st.prototype.get = function(t) {
						return this.__data__.get(t)
					}, st.prototype.has = function(t) {
						return this.__data__.has(t)
					}, st.prototype.set = function(t, e) {
						var n = this.__data__;
						if (n instanceof ot) {
							var r = n.__data__;
							if (!G || r.length < 199) return r.push([t, e]), this;
							n = this.__data__ = new at(r)
						}
						return n.set(t, e), this
					};
					var vt = H ? A(H, Object) : function() {
							return []
						},
						mt = function(t) {
							return P.call(t)
						};

					function yt(t, e) {
						return !!(e = null == e ? 9007199254740991 : e) && ("number" == typeof t || u.test(t)) && t > -1 && t % 1 == 0 && t < e
					}

					function bt(t) {
						var e = t && t.constructor;
						return t === ("function" == typeof e && e.prototype || x)
					}

					function wt(t) {
						if (null != t) {
							try {
								return q.call(t)
							} catch (t) {}
							try {
								return t + ""
							} catch (t) {}
						}
						return ""
					}

					function Et(t, e) {
						return t === e || t != t && e != e
					}(W && "[object DataView]" != mt(new W(new ArrayBuffer(1))) || G && mt(new G) != a || $ && "[object Promise]" != mt($.resolve()) || J && mt(new J) != s || Y && "[object WeakMap]" != mt(new Y)) && (mt = function(t) {
						var e = P.call(t),
							n = "[object Object]" == e ? t.constructor : void 0,
							r = n ? wt(n) : void 0;
						if (r) switch (r) {
							case Q:
								return "[object DataView]";
							case Z:
								return a;
							case K:
								return "[object Promise]";
							case tt:
								return s;
							case et:
								return "[object WeakMap]"
						}
						return e
					});
					var _t = Array.isArray;

					function At(t) {
						return null != t && function(t) {
							return "number" == typeof t && t > -1 && t % 1 == 0 && t <= 9007199254740991
						}(t.length) && !Tt(t)
					}
					var kt = V || function() {
						return !1
					};

					function Tt(t) {
						var e = St(t) ? P.call(t) : "";
						return e == i || e == o
					}

					function St(e) {
						var n = t(e);
						return !!e && ("object" == n || "function" == n)
					}

					function xt(t) {
						return At(t) ? ct(t) : function(t) {
							if (!bt(t)) return U(t);
							var e = [];
							for (var n in Object(t)) D.call(t, n) && "constructor" != n && e.push(n);
							return e
						}(t)
					}
					e.exports = function(t) {
						return dt(t, !0, !0)
					}
				})),
				function e(n, r) {
					var i, s = new Set(["!doctype", "abbr", "address", "area", "article", "aside", "audio", "base", "bdi", "bdo", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "doctype", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "math", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "param", "picture", "pre", "progress", "rb", "rp", "rt", "rtc", "ruby", "samp", "script", "section", "select", "slot", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "svg", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "ul", "var", "video", "wbr", "xml"]),
						c = new Set(["a", "b", "i", "p", "q", "s", "u"]),
						l = new Set([".", ",", "?", ";", ")", "…", '"', "»"]),
						u = new Set(["script", "style", "xml"]),
						d = {
							attributes: []
						},
						h = null,
						p = null,
						g = [],
						v = {},
						m = {},
						y = "",
						b = null;

					function w(t, e, r) {
						if (Array.isArray(e.stripTogetherWithTheirContents) && e.stripTogetherWithTheirContents.includes(d.name))
							if (Array.isArray(g) && g.some((function(e) {
									return e.name === d.name && e.lastClosingBracketAt < t
								}))) {
								for (var i = g.length; i--;)
									if (g[i].name === d.name) {
										l.has(n[t]) ? e.cb({
											tag: d,
											deleteFrom: g[i].lastOpeningBracketAt,
											deleteTo: t,
											insert: null,
											rangesArr: r,
											proposedReturn: [g[i].lastOpeningBracketAt, t, null]
										}) : e.cb({
											tag: d,
											deleteFrom: g[i].lastOpeningBracketAt,
											deleteTo: t,
											insert: "",
											rangesArr: r,
											proposedReturn: [g[i].lastOpeningBracketAt, t, ""]
										}), g.splice(i, 1);
										break
									}
							} else g.push(d)
					}

					function _(t, e, n, r, i, o) {
						var a = "";
						if (n < i && (a += t.slice(n, i)), r > o + 1) {
							var s = t.slice(o + 1, r);
							s.includes("\n") && "<" === t[r] ? a += " " : a += s
						}
						if (!l.has(t[e]) && "!" !== t[e]) {
							var c = a.match(/\n/g);
							return Array.isArray(c) && c.length ? 1 === c.length ? "\n" : 2 === c.length ? "\n\n" : "\n\n\n" : " "
						}
						return ""
					}

					function A(t) {
						if (t.dumpLinkHrefsNearby.enabled && Object.keys(m).length && m.tagName === d.name && d.lastOpeningBracketAt && (m.openingTagEnds && d.lastOpeningBracketAt > m.openingTagEnds || !m.openingTagEnds) && (i = !0), i) {
							var e = t.dumpLinkHrefsNearby.putOnNewLine ? "\n\n" : "";
							y = "".concat(e).concat(m.hrefValue).concat(e)
						}
					}
					if ("string" != typeof n) throw new TypeError("string-strip-html/stripHtml(): [THROW_ID_01] Input must be string! Currently it's: ".concat(t(n).toLowerCase(), ", equal to:\n").concat(JSON.stringify(n, null, 4)));
					if (!n || !n.trim()) return n;
					if (null != r && !O(r)) throw new TypeError("string-strip-html/stripHtml(): [THROW_ID_02] Optional Options Object must be a plain object! Currently it's: ".concat(t(r).toLowerCase(), ", equal to:\n").concat(JSON.stringify(r, null, 4)));

					function k() {
						i && (m = {}, i = !1)
					}
					var T = {
							ignoreTags: [],
							onlyStripTags: [],
							stripTogetherWithTheirContents: a(u),
							skipHtmlDecoding: !1,
							returnRangesOnly: !1,
							trimOnlySpaces: !1,
							dumpLinkHrefsNearby: {
								enabled: !1,
								putOnNewLine: !1,
								wrapHeads: "",
								wrapTails: ""
							},
							cb: null
						},
						S = o(o({}, T), r);
					S.ignoreTags = te(S.ignoreTags, "opts.ignoreTags"), S.onlyStripTags = te(S.onlyStripTags, "opts.onlyStripTags");
					var x = !!S.onlyStripTags.length;
					if (S.onlyStripTags.length && S.ignoreTags.length && (S.onlyStripTags = Pt.apply(void 0, [S.onlyStripTags].concat(a(S.ignoreTags)))), O(S.dumpLinkHrefsNearby) || (S.dumpLinkHrefsNearby = o({}, T.dumpLinkHrefsNearby)), S.dumpLinkHrefsNearby = T.dumpLinkHrefsNearby, O(r) && Object.prototype.hasOwnProperty.call(r, "dumpLinkHrefsNearby") && null != r.dumpLinkHrefsNearby)
						if (O(r.dumpLinkHrefsNearby)) S.dumpLinkHrefsNearby = o(o({}, T.dumpLinkHrefsNearby), r.dumpLinkHrefsNearby);
						else if (r.dumpLinkHrefsNearby) throw new TypeError("string-strip-html/stripHtml(): [THROW_ID_04] Optional Options Object's key dumpLinkHrefsNearby was set to ".concat(t(r.dumpLinkHrefsNearby), ", equal to ").concat(JSON.stringify(r.dumpLinkHrefsNearby, null, 4), ". The only allowed value is a plain object. See the API reference."));
					S.stripTogetherWithTheirContents ? "string" == typeof S.stripTogetherWithTheirContents && S.stripTogetherWithTheirContents.length > 0 && (S.stripTogetherWithTheirContents = [S.stripTogetherWithTheirContents]) : S.stripTogetherWithTheirContents = [];
					var C = {};
					if (S.stripTogetherWithTheirContents && Array.isArray(S.stripTogetherWithTheirContents) && S.stripTogetherWithTheirContents.length && !S.stripTogetherWithTheirContents.every((function(t, e) {
							return "string" == typeof t || (C.el = t, C.i = e, !1)
						}))) throw new TypeError("string-strip-html/stripHtml(): [THROW_ID_06] Optional Options Object's key stripTogetherWithTheirContents was set to contain not just string elements! For example, element at index ".concat(C.i, " has a value ").concat(C.el, " which is not string but ").concat(t(C.el).toLowerCase(), "."));
					S.cb || (S.cb = function(t) {
						var e = t.rangesArr,
							n = t.proposedReturn;
						e.push.apply(e, a(n))
					});
					var L, q = new E({
						limitToBeAddedWhitespace: !0,
						limitLinebreaksCount: 2
					});
					if (!S.skipHtmlDecoding)
						for (; n !== Zt(n);) n = Zt(n);
					S.trimOnlySpaces || (n = n.trim());
					for (var D = 0, P = n.length; D < P; D++) {
						if (Object.keys(d).length > 1 && d.lastClosingBracketAt && d.lastClosingBracketAt < D && " " !== n[D] && null === b && (b = D), ">" === n[D] && (!d || Object.keys(d).length < 2) && D > 1)
							for (var j = D; j-- && (void 0 !== n[j - 1] && ">" !== n[j] || "break" !== function() {
									var t = void 0 === n[j - 1] ? j : j + 1,
										r = n.slice(t, D + 1);
									if (n !== "<".concat(tt(r.trim(), "/>"), ">") && a(s).some((function(t) {
											return tt(r.trim().split(" ").filter((function(t) {
												return t.trim()
											})).filter((function(t, e) {
												return 0 === e
											})), "/>").toLowerCase() === t
										})) && "" === e("<".concat(r.trim(), ">"), S)) {
										var i = _(n, D, t, D + 1, t, D + 1),
											o = D + 1;
										if (n[o] && !n[o].trim())
											for (var c = o; c < P; c++)
												if (n[c].trim()) {
													o = c;
													break
												} S.cb({
											tag: d,
											deleteFrom: t,
											deleteTo: o,
											insert: i,
											rangesArr: q,
											proposedReturn: [t, o, i]
										})
									}
									return "break"
								}()););
						if ("/" !== n[D] || d.quotes && d.quotes.value || !Number.isInteger(d.lastOpeningBracketAt) || Number.isInteger(d.lastClosingBracketAt) || (d.slashPresent = D), '"' === n[D] || "'" === n[D])
							if (d.nameStarts && d.quotes && d.quotes.value && d.quotes.value === n[D]) {
								v.valueEnds = D, v.value = n.slice(v.valueStarts, D), d.attributes.push(v), v = {}, d.quotes = void 0;
								var I = void 0;
								S.dumpLinkHrefsNearby.enabled && d.attributes.some((function(t) {
									if (t.name && "href" === t.name.toLowerCase()) return I = "".concat(S.dumpLinkHrefsNearby.wrapHeads || "").concat(t.value).concat(S.dumpLinkHrefsNearby.wrapTails || ""), !0
								})) && (m = {
									tagName: d.name,
									hrefValue: I
								})
							} else !d.quotes && d.nameStarts && (d.quotes = {}, d.quotes.value = n[D], d.quotes.start = D, v.nameStarts && v.nameEnds && v.nameEnds < D && v.nameStarts < D && !v.valueStarts && (v.name = n.slice(v.nameStarts, v.nameEnds)));
						if (!(void 0 === d.nameStarts || void 0 !== d.nameEnds || n[D].trim() && (L = n[D], /[-_A-Za-z0-9]/.test(L)))) {
							if (d.nameEnds = D, d.name = n.slice(d.nameStarts, d.nameEnds + (">" !== n[D] && "/" !== n[D] && void 0 === n[D + 1] ? 1 : 0)), "!" !== n[d.nameStarts - 1] && !d.name.replace(/-/g, "").length || /^\d+$/.test(d.name[0])) {
								d = {};
								continue
							}
							if ("<" === n[D]) {
								A(S);
								var N = _(n, D, d.leftOuterWhitespace, D, d.lastOpeningBracketAt, D);
								S.cb({
									tag: d,
									deleteFrom: d.leftOuterWhitespace,
									deleteTo: D,
									insert: "".concat(N).concat(y).concat(N),
									rangesArr: q,
									proposedReturn: [d.leftOuterWhitespace, D, "".concat(N).concat(y).concat(N)]
								}), k(), w(D, S, q)
							}
						}
						if (d.quotes && d.quotes.start && d.quotes.start < D && !d.quotes.end && v.nameEnds && v.equalsAt && !v.valueStarts && (v.valueStarts = D), d.quotes || !v.nameEnds || "=" !== n[D] || v.valueStarts || v.equalsAt || (v.equalsAt = D), !d.quotes && v.nameStarts && v.nameEnds && !v.valueStarts && n[D].trim() && "=" !== n[D] && (d.attributes.push(v), v = {}), d.quotes || !v.nameStarts || v.nameEnds || (n[D].trim() ? "=" === n[D] ? v.equalsAt || (v.nameEnds = D, v.equalsAt = D, v.name = n.slice(v.nameStarts, v.nameEnds)) : ("/" === n[D] || ">" === n[D] || "<" === n[D]) && (v.nameEnds = D, v.name = n.slice(v.nameStarts, v.nameEnds), d.attributes.push(v), v = {}) : (v.nameEnds = D, v.name = n.slice(v.nameStarts, v.nameEnds))), d.quotes || !(d.nameEnds < D) || n[D - 1].trim() || !n[D].trim() || "<>/!".includes(n[D]) || v.nameStarts || d.lastClosingBracketAt || (v.nameStarts = D), null !== d.lastOpeningBracketAt && d.lastOpeningBracketAt < D && "/" === n[D] && d.onlyPlausible && (d.onlyPlausible = !1), null !== d.lastOpeningBracketAt && d.lastOpeningBracketAt < D && "/" !== n[D] && (void 0 === d.onlyPlausible && (n[D].trim() && "<" !== n[D] || d.slashPresent ? d.onlyPlausible = !1 : d.onlyPlausible = !0), n[D].trim() && void 0 === d.nameStarts && "<" !== n[D] && "/" !== n[D] && ">" !== n[D] && "!" !== n[D] && (d.nameStarts = D, d.nameContainsLetters = !1)), d.nameStarts && !d.quotes && n[D].toLowerCase() !== n[D].toUpperCase() && (d.nameContainsLetters = !0), ">" === n[D] && void 0 !== d.lastOpeningBracketAt && (d.lastClosingBracketAt = D, b = null, Object.keys(v).length && (d.attributes.push(v), v = {}), S.dumpLinkHrefsNearby.enabled && m.tagName && !m.openingTagEnds && (m.openingTagEnds = D)), void 0 !== d.lastOpeningBracketAt)
							if (void 0 === d.lastClosingBracketAt) {
								if (d.lastOpeningBracketAt < D && "<" !== n[D] && (void 0 === n[D + 1] || "<" === n[D + 1]) && d.nameContainsLetters) {
									if (d.name = n.slice(d.nameStarts, d.nameEnds ? d.nameEnds : D + 1).toLowerCase(), S.ignoreTags.includes(d.name) || d.onlyPlausible && !s.has(d.name)) {
										d = {}, v = {};
										continue
									}
									if ((s.has(d.name) || c.has(d.name)) && (!1 === d.onlyPlausible || !0 === d.onlyPlausible && d.attributes.length) || void 0 === n[D + 1]) {
										A(S);
										var M = _(n, D, d.leftOuterWhitespace, D + 1, d.lastOpeningBracketAt, d.lastClosingBracketAt);
										S.cb({
											tag: d,
											deleteFrom: d.leftOuterWhitespace,
											deleteTo: D + 1,
											insert: "".concat(M).concat(y).concat(M),
											rangesArr: q,
											proposedReturn: [d.leftOuterWhitespace, D + 1, "".concat(M).concat(y).concat(M)]
										}), k(), w(D, S, q)
									}
								}
							} else if (D > d.lastClosingBracketAt && n[D].trim() || void 0 === n[D + 1]) {
							var z = d.lastClosingBracketAt === D ? D + 1 : D;
							if (S.trimOnlySpaces && z === P - 1 && null !== b && b < D && (z = b), !x && S.ignoreTags.includes(d.name) || x && !S.onlyStripTags.includes(d.name)) S.cb({
								tag: d,
								deleteFrom: null,
								deleteTo: null,
								insert: null,
								rangesArr: q,
								proposedReturn: []
							}), d = {}, v = {};
							else if (!d.onlyPlausible || 0 === d.attributes.length && d.name && (s.has(d.name.toLowerCase()) || c.has(d.name.toLowerCase())) || d.attributes && d.attributes.some((function(t) {
									return t.equalsAt
								}))) {
								var R = _(n, D, d.leftOuterWhitespace, z, d.lastOpeningBracketAt, d.lastClosingBracketAt);
								y = "", i = !1, A(S);
								var B = void 0;
								B = "string" == typeof y && y.length ? "".concat(R).concat(y).concat("\n\n" === R ? "\n" : R) : R, 0 !== d.leftOuterWhitespace && Kt(n, z - 1) || (B = ""), S.cb({
									tag: d,
									deleteFrom: d.leftOuterWhitespace,
									deleteTo: z,
									insert: B,
									rangesArr: q,
									proposedReturn: [d.leftOuterWhitespace, z, B]
								}), k(), w(D, S, q)
							} else d = {};
							">" !== n[D] && (d = {})
						}
						if ("<" === n[D] && "<" !== n[D - 1]) {
							if (">" === n[Kt(n, D)]) continue;
							if (d.nameEnds && d.nameEnds < D && !d.lastClosingBracketAt && (!0 === d.onlyPlausible && d.attributes && d.attributes.length || !1 === d.onlyPlausible)) {
								var F = _(n, D, d.leftOuterWhitespace, D, d.lastOpeningBracketAt, D);
								S.cb({
									tag: d,
									deleteFrom: d.leftOuterWhitespace,
									deleteTo: D,
									insert: F,
									rangesArr: q,
									proposedReturn: [d.leftOuterWhitespace, D, F]
								}), w(D, S, q), d = {}, v = {}
							}
							if (void 0 !== d.lastOpeningBracketAt && d.onlyPlausible && d.name && !d.quotes && (d.lastOpeningBracketAt = void 0, d.onlyPlausible = !1), !(void 0 !== d.lastOpeningBracketAt && d.onlyPlausible || d.quotes) && (d.lastOpeningBracketAt = D, d.slashPresent = !1, d.attributes = [], null === h ? d.leftOuterWhitespace = D : S.trimOnlySpaces && 0 === h ? d.leftOuterWhitespace = p || D : d.leftOuterWhitespace = h, "!--" === "".concat(n[D + 1]).concat(n[D + 2]).concat(n[D + 3]) || "![CDATA[" === "".concat(n[D + 1]).concat(n[D + 2]).concat(n[D + 3]).concat(n[D + 4]).concat(n[D + 5]).concat(n[D + 6]).concat(n[D + 7]).concat(n[D + 8]))) {
								var H = !0;
								"-" === n[D + 2] && (H = !1);
								for (var V = void 0, U = D; U < P; U++)
									if ((!V && H && "]]>" === "".concat(n[U - 2]).concat(n[U - 1]).concat(n[U]) || !H && "--\x3e" === "".concat(n[U - 2]).concat(n[U - 1]).concat(n[U])) && (V = U), V && (V < U && n[U].trim() || void 0 === n[U + 1])) {
										var W = U;
										(void 0 === n[U + 1] && !n[U].trim() || ">" === n[U]) && (W += 1);
										var G = _(n, U, d.leftOuterWhitespace, W, d.lastOpeningBracketAt, V);
										S.cb({
											tag: d,
											deleteFrom: d.leftOuterWhitespace,
											deleteTo: W,
											insert: G,
											rangesArr: q,
											proposedReturn: [d.leftOuterWhitespace, W, G]
										}), D = U - 1, ">" === n[U] && (D = U), d = {}, v = {};
										break
									}
							}
						}
						"" === n[D].trim() ? null === h && (h = D, void 0 !== d.lastOpeningBracketAt && d.lastOpeningBracketAt < D && d.nameStarts && d.nameStarts < d.lastOpeningBracketAt && D === d.lastOpeningBracketAt + 1 && !g.some((function(t) {
							return t.name === d.name
						})) && (d.onlyPlausible = !0, d.name = void 0, d.nameStarts = void 0)) : null !== h && (!d.quotes && v.equalsAt > h - 1 && v.nameEnds && v.equalsAt > v.nameEnds && '"' !== n[D] && "'" !== n[D] && (O(v) && d.attributes.push(v), v = {}, d.equalsSpottedAt = void 0), h = null), " " === n[D] ? null === p && (p = D) : null !== p && (p = null)
					}
					if (q.current()) {
						if (S.returnRangesOnly) return q.current();
						var $ = f(n, q.current());
						return S.trimOnlySpaces ? tt($, " ") : $.trim()
					}
					return S.returnRangesOnly ? [] : S.trimOnlySpaces ? tt(n, " ") : n.trim()
				}
		}()
	}).call(this, n(8))
}, function(t, e, n) {
	var r, i;
	! function(o, a) {
		r = [n(12), n(17), n(4), n(37), n(38), n(39)], void 0 === (i = function(t, e, n, r, i, a) {
			return function(t, e, n, r, i, o, a) {
				"use strict";
				var s = t.jQuery,
					c = t.getComputedStyle,
					l = t.console;

				function u(t, e) {
					for (t = r.makeArray(t); t.length;) e.appendChild(t.shift())
				}
				var d = 0,
					f = {};

				function h(t, e) {
					var n = r.getQueryElement(t);
					if (n) {
						if (this.element = n, this.element.flickityGUID) {
							var i = f[this.element.flickityGUID];
							return i.option(e), i
						}
						s && (this.$element = s(this.element)), this.options = r.extend({}, this.constructor.defaults), this.option(e), this._create()
					} else l && l.error("Bad element for Flickity: " + (n || t))
				}
				h.defaults = {
					accessibility: !0,
					cellAlign: "center",
					freeScrollFriction: .075,
					friction: .28,
					namespaceJQueryEvents: !0,
					percentPosition: !0,
					resize: !0,
					selectedAttraction: .025,
					setGallerySize: !0
				}, h.createMethods = [];
				var p = h.prototype;
				r.extend(p, e.prototype), p._create = function() {
					var e = this.guid = ++d;
					for (var n in this.element.flickityGUID = e, f[e] = this, this.selectedIndex = 0, this.restingFrames = 0, this.x = 0, this.velocity = 0, this.originSide = this.options.rightToLeft ? "right" : "left", this.viewport = document.createElement("div"), this.viewport.className = "flickity-viewport", this._createSlider(), (this.options.resize || this.options.watchCSS) && t.addEventListener("resize", this), this.options.on) {
						var r = this.options.on[n];
						this.on(n, r)
					}
					h.createMethods.forEach((function(t) {
						this[t]()
					}), this), this.options.watchCSS ? this.watchCSS() : this.activate()
				}, p.option = function(t) {
					r.extend(this.options, t)
				}, p.activate = function() {
					this.isActive || (this.isActive = !0, this.element.classList.add("flickity-enabled"), this.options.rightToLeft && this.element.classList.add("flickity-rtl"), this.getSize(), u(this._filterFindCellElements(this.element.children), this.slider), this.viewport.appendChild(this.slider), this.element.appendChild(this.viewport), this.reloadCells(), this.options.accessibility && (this.element.tabIndex = 0, this.element.addEventListener("keydown", this)), this.emitEvent("activate"), this.selectInitialIndex(), this.isInitActivated = !0, this.dispatchEvent("ready"))
				}, p._createSlider = function() {
					var t = document.createElement("div");
					t.className = "flickity-slider", t.style[this.originSide] = 0, this.slider = t
				}, p._filterFindCellElements = function(t) {
					return r.filterFindElements(t, this.options.cellSelector)
				}, p.reloadCells = function() {
					this.cells = this._makeCells(this.slider.children), this.positionCells(), this._getWrapShiftCells(), this.setGallerySize()
				}, p._makeCells = function(t) {
					return this._filterFindCellElements(t).map((function(t) {
						return new i(t, this)
					}), this)
				}, p.getLastCell = function() {
					return this.cells[this.cells.length - 1]
				}, p.getLastSlide = function() {
					return this.slides[this.slides.length - 1]
				}, p.positionCells = function() {
					this._sizeCells(this.cells), this._positionCells(0)
				}, p._positionCells = function(t) {
					t = t || 0, this.maxCellHeight = t && this.maxCellHeight || 0;
					var e = 0;
					if (t > 0) {
						var n = this.cells[t - 1];
						e = n.x + n.size.outerWidth
					}
					for (var r = this.cells.length, i = t; i < r; i++) {
						var o = this.cells[i];
						o.setPosition(e), e += o.size.outerWidth, this.maxCellHeight = Math.max(o.size.outerHeight, this.maxCellHeight)
					}
					this.slideableWidth = e, this.updateSlides(), this._containSlides(), this.slidesWidth = r ? this.getLastSlide().target - this.slides[0].target : 0
				}, p._sizeCells = function(t) {
					t.forEach((function(t) {
						t.getSize()
					}))
				}, p.updateSlides = function() {
					if (this.slides = [], this.cells.length) {
						var t = new o(this);
						this.slides.push(t);
						var e = "left" == this.originSide ? "marginRight" : "marginLeft",
							n = this._getCanCellFit();
						this.cells.forEach((function(r, i) {
							if (t.cells.length) {
								var a = t.outerWidth - t.firstMargin + (r.size.outerWidth - r.size[e]);
								n.call(this, i, a) || (t.updateTarget(), t = new o(this), this.slides.push(t)), t.addCell(r)
							} else t.addCell(r)
						}), this), t.updateTarget(), this.updateSelectedSlide()
					}
				}, p._getCanCellFit = function() {
					var t = this.options.groupCells;
					if (!t) return function() {
						return !1
					};
					if ("number" == typeof t) {
						var e = parseInt(t, 10);
						return function(t) {
							return t % e != 0
						}
					}
					var n = "string" == typeof t && t.match(/^(\d+)%$/),
						r = n ? parseInt(n[1], 10) / 100 : 1;
					return function(t, e) {
						return e <= (this.size.innerWidth + 1) * r
					}
				}, p._init = p.reposition = function() {
					this.positionCells(), this.positionSliderAtSelected()
				}, p.getSize = function() {
					this.size = n(this.element), this.setCellAlign(), this.cursorPosition = this.size.innerWidth * this.cellAlign
				};
				var g = {
					center: {
						left: .5,
						right: .5
					},
					left: {
						left: 0,
						right: 1
					},
					right: {
						right: 0,
						left: 1
					}
				};
				p.setCellAlign = function() {
					var t = g[this.options.cellAlign];
					this.cellAlign = t ? t[this.originSide] : this.options.cellAlign
				}, p.setGallerySize = function() {
					if (this.options.setGallerySize) {
						var t = this.options.adaptiveHeight && this.selectedSlide ? this.selectedSlide.height : this.maxCellHeight;
						this.viewport.style.height = t + "px"
					}
				}, p._getWrapShiftCells = function() {
					if (this.options.wrapAround) {
						this._unshiftCells(this.beforeShiftCells), this._unshiftCells(this.afterShiftCells);
						var t = this.cursorPosition,
							e = this.cells.length - 1;
						this.beforeShiftCells = this._getGapCells(t, e, -1), t = this.size.innerWidth - this.cursorPosition, this.afterShiftCells = this._getGapCells(t, 0, 1)
					}
				}, p._getGapCells = function(t, e, n) {
					for (var r = []; t > 0;) {
						var i = this.cells[e];
						if (!i) break;
						r.push(i), e += n, t -= i.size.outerWidth
					}
					return r
				}, p._containSlides = function() {
					if (this.options.contain && !this.options.wrapAround && this.cells.length) {
						var t = this.options.rightToLeft,
							e = t ? "marginRight" : "marginLeft",
							n = t ? "marginLeft" : "marginRight",
							r = this.slideableWidth - this.getLastCell().size[n],
							i = r < this.size.innerWidth,
							o = this.cursorPosition + this.cells[0].size[e],
							a = r - this.size.innerWidth * (1 - this.cellAlign);
						this.slides.forEach((function(t) {
							i ? t.target = r * this.cellAlign : (t.target = Math.max(t.target, o), t.target = Math.min(t.target, a))
						}), this)
					}
				}, p.dispatchEvent = function(t, e, n) {
					var r = e ? [e].concat(n) : n;
					if (this.emitEvent(t, r), s && this.$element) {
						var i = t += this.options.namespaceJQueryEvents ? ".flickity" : "";
						if (e) {
							var o = s.Event(e);
							o.type = t, i = o
						}
						this.$element.trigger(i, n)
					}
				}, p.select = function(t, e, n) {
					if (this.isActive && (t = parseInt(t, 10), this._wrapSelect(t), (this.options.wrapAround || e) && (t = r.modulo(t, this.slides.length)), this.slides[t])) {
						var i = this.selectedIndex;
						this.selectedIndex = t, this.updateSelectedSlide(), n ? this.positionSliderAtSelected() : this.startAnimation(), this.options.adaptiveHeight && this.setGallerySize(), this.dispatchEvent("select", null, [t]), t != i && this.dispatchEvent("change", null, [t]), this.dispatchEvent("cellSelect")
					}
				}, p._wrapSelect = function(t) {
					var e = this.slides.length;
					if (!(this.options.wrapAround && e > 1)) return t;
					var n = r.modulo(t, e),
						i = Math.abs(n - this.selectedIndex),
						o = Math.abs(n + e - this.selectedIndex),
						a = Math.abs(n - e - this.selectedIndex);
					!this.isDragSelect && o < i ? t += e : !this.isDragSelect && a < i && (t -= e), t < 0 ? this.x -= this.slideableWidth : t >= e && (this.x += this.slideableWidth)
				}, p.previous = function(t, e) {
					this.select(this.selectedIndex - 1, t, e)
				}, p.next = function(t, e) {
					this.select(this.selectedIndex + 1, t, e)
				}, p.updateSelectedSlide = function() {
					var t = this.slides[this.selectedIndex];
					t && (this.unselectSelectedSlide(), this.selectedSlide = t, t.select(), this.selectedCells = t.cells, this.selectedElements = t.getCellElements(), this.selectedCell = t.cells[0], this.selectedElement = this.selectedElements[0])
				}, p.unselectSelectedSlide = function() {
					this.selectedSlide && this.selectedSlide.unselect()
				}, p.selectInitialIndex = function() {
					var t = this.options.initialIndex;
					if (this.isInitActivated) this.select(this.selectedIndex, !1, !0);
					else {
						if (t && "string" == typeof t)
							if (this.queryCell(t)) return void this.selectCell(t, !1, !0);
						var e = 0;
						t && this.slides[t] && (e = t), this.select(e, !1, !0)
					}
				}, p.selectCell = function(t, e, n) {
					var r = this.queryCell(t);
					if (r) {
						var i = this.getCellSlideIndex(r);
						this.select(i, e, n)
					}
				}, p.getCellSlideIndex = function(t) {
					for (var e = 0; e < this.slides.length; e++) {
						if (-1 != this.slides[e].cells.indexOf(t)) return e
					}
				}, p.getCell = function(t) {
					for (var e = 0; e < this.cells.length; e++) {
						var n = this.cells[e];
						if (n.element == t) return n
					}
				}, p.getCells = function(t) {
					t = r.makeArray(t);
					var e = [];
					return t.forEach((function(t) {
						var n = this.getCell(t);
						n && e.push(n)
					}), this), e
				}, p.getCellElements = function() {
					return this.cells.map((function(t) {
						return t.element
					}))
				}, p.getParentCell = function(t) {
					var e = this.getCell(t);
					return e || (t = r.getParent(t, ".flickity-slider > *"), this.getCell(t))
				}, p.getAdjacentCellElements = function(t, e) {
					if (!t) return this.selectedSlide.getCellElements();
					e = void 0 === e ? this.selectedIndex : e;
					var n = this.slides.length;
					if (1 + 2 * t >= n) return this.getCellElements();
					for (var i = [], o = e - t; o <= e + t; o++) {
						var a = this.options.wrapAround ? r.modulo(o, n) : o,
							s = this.slides[a];
						s && (i = i.concat(s.getCellElements()))
					}
					return i
				}, p.queryCell = function(t) {
					if ("number" == typeof t) return this.cells[t];
					if ("string" == typeof t) {
						if (t.match(/^[#\.]?[\d\/]/)) return;
						t = this.element.querySelector(t)
					}
					return this.getCell(t)
				}, p.uiChange = function() {
					this.emitEvent("uiChange")
				}, p.childUIPointerDown = function(t) {
					"touchstart" != t.type && t.preventDefault(), this.focus()
				}, p.onresize = function() {
					this.watchCSS(), this.resize()
				}, r.debounceMethod(h, "onresize", 150), p.resize = function() {
					if (this.isActive) {
						this.getSize(), this.options.wrapAround && (this.x = r.modulo(this.x, this.slideableWidth)), this.positionCells(), this._getWrapShiftCells(), this.setGallerySize(), this.emitEvent("resize");
						var t = this.selectedElements && this.selectedElements[0];
						this.selectCell(t, !1, !0)
					}
				}, p.watchCSS = function() {
					this.options.watchCSS && (-1 != c(this.element, ":after").content.indexOf("flickity") ? this.activate() : this.deactivate())
				}, p.onkeydown = function(t) {
					var e = document.activeElement && document.activeElement != this.element;
					if (this.options.accessibility && !e) {
						var n = h.keyboardHandlers[t.keyCode];
						n && n.call(this)
					}
				}, h.keyboardHandlers = {
					37: function() {
						var t = this.options.rightToLeft ? "next" : "previous";
						this.uiChange(), this[t]()
					},
					39: function() {
						var t = this.options.rightToLeft ? "previous" : "next";
						this.uiChange(), this[t]()
					}
				}, p.focus = function() {
					var e = t.pageYOffset;
					this.element.focus({
						preventScroll: !0
					}), t.pageYOffset != e && t.scrollTo(t.pageXOffset, e)
				}, p.deactivate = function() {
					this.isActive && (this.element.classList.remove("flickity-enabled"), this.element.classList.remove("flickity-rtl"), this.unselectSelectedSlide(), this.cells.forEach((function(t) {
						t.destroy()
					})), this.element.removeChild(this.viewport), u(this.slider.children, this.element), this.options.accessibility && (this.element.removeAttribute("tabIndex"), this.element.removeEventListener("keydown", this)), this.isActive = !1, this.emitEvent("deactivate"))
				}, p.destroy = function() {
					this.deactivate(), t.removeEventListener("resize", this), this.allOff(), this.emitEvent("destroy"), s && this.$element && s.removeData(this.element, "flickity"), delete this.element.flickityGUID, delete f[this.guid]
				}, r.extend(p, a), h.data = function(t) {
					var e = (t = r.getQueryElement(t)) && t.flickityGUID;
					return e && f[e]
				}, r.htmlInit(h, "flickity"), s && s.bridget && s.bridget("flickity", h);
				return h.setJQuery = function(t) {
					s = t
				}, h.Cell = i, h.Slide = o, h
			}(o, t, e, n, r, i, a)
		}.apply(e, r)) || (t.exports = i)
	}(window)
}, function(t, e) {
	var n;
	n = function() {
		return this
	}();
	try {
		n = n || new Function("return this")()
	} catch (t) {
		"object" == typeof window && (n = window)
	}
	t.exports = n
}, function(t, e) {
	t.exports = function(t, e, n) {
		return e in t ? Object.defineProperty(t, e, {
			value: n,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : t[e] = n, t
	}
}, function(t, e, n) {
	"use strict";
	t.exports = o, t.exports.isMobile = o, t.exports.default = o;
	var r = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series[46]0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i,
		i = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series[46]0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino|android|ipad|playbook|silk/i;

	function o(t) {
		t || (t = {});
		var e = t.ua;
		if (e || "undefined" == typeof navigator || (e = navigator.userAgent), e && e.headers && "string" == typeof e.headers["user-agent"] && (e = e.headers["user-agent"]), "string" != typeof e) return !1;
		var n = t.tablet ? i.test(e) : r.test(e);
		return !n && t.tablet && t.featureDetect && navigator && navigator.maxTouchPoints > 1 && -1 !== e.indexOf("Macintosh") && -1 !== e.indexOf("Safari") && (n = !0), n
	}
}, function(t, e, n) {
	var r = n(47),
		i = n(48),
		o = n(16),
		a = n(49);
	t.exports = function(t, e) {
		return r(t) || i(t, e) || o(t, e) || a()
	}
}, function(t, e, n) {
	var r, i;
	"undefined" != typeof window && window, void 0 === (i = "function" == typeof(r = function() {
		"use strict";

		function t() {}
		var e = t.prototype;
		return e.on = function(t, e) {
			if (t && e) {
				var n = this._events = this._events || {},
					r = n[t] = n[t] || [];
				return -1 == r.indexOf(e) && r.push(e), this
			}
		}, e.once = function(t, e) {
			if (t && e) {
				this.on(t, e);
				var n = this._onceEvents = this._onceEvents || {};
				return (n[t] = n[t] || {})[e] = !0, this
			}
		}, e.off = function(t, e) {
			var n = this._events && this._events[t];
			if (n && n.length) {
				var r = n.indexOf(e);
				return -1 != r && n.splice(r, 1), this
			}
		}, e.emitEvent = function(t, e) {
			var n = this._events && this._events[t];
			if (n && n.length) {
				n = n.slice(0), e = e || [];
				for (var r = this._onceEvents && this._onceEvents[t], i = 0; i < n.length; i++) {
					var o = n[i];
					r && r[o] && (this.off(t, o), delete r[o]), o.apply(this, e)
				}
				return this
			}
		}, e.allOff = function() {
			delete this._events, delete this._onceEvents
		}, t
	}) ? r.call(e, n, e, t) : r) || (t.exports = i)
}, function(t, e, n) {
	var r, i;
	/*!
	 * Unipointer v2.3.0
	 * base class for doing one thing with pointer event
	 * MIT license
	 */
	! function(o, a) {
		r = [n(12)], void 0 === (i = function(t) {
			return function(t, e) {
				"use strict";

				function n() {}
				var r = n.prototype = Object.create(e.prototype);
				r.bindStartEvent = function(t) {
					this._bindStartEvent(t, !0)
				}, r.unbindStartEvent = function(t) {
					this._bindStartEvent(t, !1)
				}, r._bindStartEvent = function(e, n) {
					var r = (n = void 0 === n || n) ? "addEventListener" : "removeEventListener",
						i = "mousedown";
					t.PointerEvent ? i = "pointerdown" : "ontouchstart" in t && (i = "touchstart"), e[r](i, this)
				}, r.handleEvent = function(t) {
					var e = "on" + t.type;
					this[e] && this[e](t)
				}, r.getTouch = function(t) {
					for (var e = 0; e < t.length; e++) {
						var n = t[e];
						if (n.identifier == this.pointerIdentifier) return n
					}
				}, r.onmousedown = function(t) {
					var e = t.button;
					e && 0 !== e && 1 !== e || this._pointerDown(t, t)
				}, r.ontouchstart = function(t) {
					this._pointerDown(t, t.changedTouches[0])
				}, r.onpointerdown = function(t) {
					this._pointerDown(t, t)
				}, r._pointerDown = function(t, e) {
					t.button || this.isPointerDown || (this.isPointerDown = !0, this.pointerIdentifier = void 0 !== e.pointerId ? e.pointerId : e.identifier, this.pointerDown(t, e))
				}, r.pointerDown = function(t, e) {
					this._bindPostStartEvents(t), this.emitEvent("pointerDown", [t, e])
				};
				var i = {
					mousedown: ["mousemove", "mouseup"],
					touchstart: ["touchmove", "touchend", "touchcancel"],
					pointerdown: ["pointermove", "pointerup", "pointercancel"]
				};
				return r._bindPostStartEvents = function(e) {
					if (e) {
						var n = i[e.type];
						n.forEach((function(e) {
							t.addEventListener(e, this)
						}), this), this._boundPointerEvents = n
					}
				}, r._unbindPostStartEvents = function() {
					this._boundPointerEvents && (this._boundPointerEvents.forEach((function(e) {
						t.removeEventListener(e, this)
					}), this), delete this._boundPointerEvents)
				}, r.onmousemove = function(t) {
					this._pointerMove(t, t)
				}, r.onpointermove = function(t) {
					t.pointerId == this.pointerIdentifier && this._pointerMove(t, t)
				}, r.ontouchmove = function(t) {
					var e = this.getTouch(t.changedTouches);
					e && this._pointerMove(t, e)
				}, r._pointerMove = function(t, e) {
					this.pointerMove(t, e)
				}, r.pointerMove = function(t, e) {
					this.emitEvent("pointerMove", [t, e])
				}, r.onmouseup = function(t) {
					this._pointerUp(t, t)
				}, r.onpointerup = function(t) {
					t.pointerId == this.pointerIdentifier && this._pointerUp(t, t)
				}, r.ontouchend = function(t) {
					var e = this.getTouch(t.changedTouches);
					e && this._pointerUp(t, e)
				}, r._pointerUp = function(t, e) {
					this._pointerDone(), this.pointerUp(t, e)
				}, r.pointerUp = function(t, e) {
					this.emitEvent("pointerUp", [t, e])
				}, r._pointerDone = function() {
					this._pointerReset(), this._unbindPostStartEvents(), this.pointerDone()
				}, r._pointerReset = function() {
					this.isPointerDown = !1, delete this.pointerIdentifier
				}, r.pointerDone = function() {}, r.onpointercancel = function(t) {
					t.pointerId == this.pointerIdentifier && this._pointerCancel(t, t)
				}, r.ontouchcancel = function(t) {
					var e = this.getTouch(t.changedTouches);
					e && this._pointerCancel(t, e)
				}, r._pointerCancel = function(t, e) {
					this._pointerDone(), this.pointerCancel(t, e)
				}, r.pointerCancel = function(t, e) {
					this.emitEvent("pointerCancel", [t, e])
				}, n.getPointerPoint = function(t) {
					return {
						x: t.pageX,
						y: t.pageY
					}
				}, n
			}(o, t)
		}.apply(e, r)) || (t.exports = i)
	}(window)
}, function(t, e) {
	var n, r, i = t.exports = {};

	function o() {
		throw new Error("setTimeout has not been defined")
	}

	function a() {
		throw new Error("clearTimeout has not been defined")
	}

	function s(t) {
		if (n === setTimeout) return setTimeout(t, 0);
		if ((n === o || !n) && setTimeout) return n = setTimeout, setTimeout(t, 0);
		try {
			return n(t, 0)
		} catch (e) {
			try {
				return n.call(null, t, 0)
			} catch (e) {
				return n.call(this, t, 0)
			}
		}
	}! function() {
		try {
			n = "function" == typeof setTimeout ? setTimeout : o
		} catch (t) {
			n = o
		}
		try {
			r = "function" == typeof clearTimeout ? clearTimeout : a
		} catch (t) {
			r = a
		}
	}();
	var c, l = [],
		u = !1,
		d = -1;

	function f() {
		u && c && (u = !1, c.length ? l = c.concat(l) : d = -1, l.length && h())
	}

	function h() {
		if (!u) {
			var t = s(f);
			u = !0;
			for (var e = l.length; e;) {
				for (c = l, l = []; ++d < e;) c && c[d].run();
				d = -1, e = l.length
			}
			c = null, u = !1,
				function(t) {
					if (r === clearTimeout) return clearTimeout(t);
					if ((r === a || !r) && clearTimeout) return r = clearTimeout, clearTimeout(t);
					try {
						r(t)
					} catch (e) {
						try {
							return r.call(null, t)
						} catch (e) {
							return r.call(this, t)
						}
					}
				}(t)
		}
	}

	function p(t, e) {
		this.fun = t, this.array = e
	}

	function g() {}
	i.nextTick = function(t) {
		var e = new Array(arguments.length - 1);
		if (arguments.length > 1)
			for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
		l.push(new p(t, e)), 1 !== l.length || u || s(h)
	}, p.prototype.run = function() {
		this.fun.apply(null, this.array)
	}, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = g, i.addListener = g, i.once = g, i.off = g, i.removeListener = g, i.removeAllListeners = g, i.emit = g, i.prependListener = g, i.prependOnceListener = g, i.listeners = function(t) {
		return []
	}, i.binding = function(t) {
		throw new Error("process.binding is not supported")
	}, i.cwd = function() {
		return "/"
	}, i.chdir = function(t) {
		throw new Error("process.chdir is not supported")
	}, i.umask = function() {
		return 0
	}
}, function(t, e) {
	t.exports = function(t, e) {
		(null == e || e > t.length) && (e = t.length);
		for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
		return r
	}
}, function(t, e, n) {
	var r = n(15);
	t.exports = function(t, e) {
		if (t) {
			if ("string" == typeof t) return r(t, e);
			var n = Object.prototype.toString.call(t).slice(8, -1);
			return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? r(t, e) : void 0
		}
	}
}, function(t, e, n) {
	var r, i;
	/*!
	 * getSize v2.0.3
	 * measure size of elements
	 * MIT license
	 */
	window, void 0 === (i = "function" == typeof(r = function() {
		"use strict";

		function t(t) {
			var e = parseFloat(t);
			return -1 == t.indexOf("%") && !isNaN(e) && e
		}
		var e = "undefined" == typeof console ? function() {} : function(t) {
				console.error(t)
			},
			n = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
			r = n.length;

		function i(t) {
			var n = getComputedStyle(t);
			return n || e("Style returned " + n + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"), n
		}
		var o, a = !1;

		function s(e) {
			if (function() {
					if (!a) {
						a = !0;
						var e = document.createElement("div");
						e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style.boxSizing = "border-box";
						var n = document.body || document.documentElement;
						n.appendChild(e);
						var r = i(e);
						o = 200 == Math.round(t(r.width)), s.isBoxSizeOuter = o, n.removeChild(e)
					}
				}(), "string" == typeof e && (e = document.querySelector(e)), e && "object" == typeof e && e.nodeType) {
				var c = i(e);
				if ("none" == c.display) return function() {
					for (var t = {
							width: 0,
							height: 0,
							innerWidth: 0,
							innerHeight: 0,
							outerWidth: 0,
							outerHeight: 0
						}, e = 0; e < r; e++) t[n[e]] = 0;
					return t
				}();
				var l = {};
				l.width = e.offsetWidth, l.height = e.offsetHeight;
				for (var u = l.isBorderBox = "border-box" == c.boxSizing, d = 0; d < r; d++) {
					var f = n[d],
						h = c[f],
						p = parseFloat(h);
					l[f] = isNaN(p) ? 0 : p
				}
				var g = l.paddingLeft + l.paddingRight,
					v = l.paddingTop + l.paddingBottom,
					m = l.marginLeft + l.marginRight,
					y = l.marginTop + l.marginBottom,
					b = l.borderLeftWidth + l.borderRightWidth,
					w = l.borderTopWidth + l.borderBottomWidth,
					E = u && o,
					_ = t(c.width);
				!1 !== _ && (l.width = _ + (E ? 0 : g + b));
				var A = t(c.height);
				return !1 !== A && (l.height = A + (E ? 0 : v + w)), l.innerWidth = l.width - (g + b), l.innerHeight = l.height - (v + w), l.outerWidth = l.width + m, l.outerHeight = l.height + y, l
			}
		}
		return s
	}) ? r.call(e, n, e, t) : r) || (t.exports = i)
}, function(t, e, n) {
	"use strict";
	Object.defineProperty(e, "__esModule", {
		value: !0
	}), e.formatMoney = function(t, e) {
		"string" == typeof t && (t = t.replace(".", ""));
		var n = "",
			r = /\{\{\s*(\w+)\s*\}\}/,
			i = e || "${{amount}}";

		function o(t) {
			var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
				n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ",",
				r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ".";
			if (isNaN(t) || null == t) return 0;
			var i = (t = (t / 100).toFixed(e)).split("."),
				o = i[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1" + n),
				a = i[1] ? r + i[1] : "";
			return o + a
		}
		switch (i.match(r)[1]) {
			case "amount":
				n = o(t, 2);
				break;
			case "amount_no_decimals":
				n = o(t, 0);
				break;
			case "amount_with_comma_separator":
				n = o(t, 2, ".", ",");
				break;
			case "amount_no_decimals_with_comma_separator":
				n = o(t, 0, ".", ",")
		}
		return i.replace(r, n)
	}
}, function(t, e) {
	function n(e) {
		return "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? t.exports = n = function(t) {
			return typeof t
		} : t.exports = n = function(t) {
			return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
		}, n(e)
	}
	t.exports = n
}, function(t, e, n) {
	"use strict";
	(function(t) {
		var n = function() {
				if ("undefined" != typeof Map) return Map;

				function t(t, e) {
					var n = -1;
					return t.some((function(t, r) {
						return t[0] === e && (n = r, !0)
					})), n
				}
				return function() {
					function e() {
						this.__entries__ = []
					}
					return Object.defineProperty(e.prototype, "size", {
						get: function() {
							return this.__entries__.length
						},
						enumerable: !0,
						configurable: !0
					}), e.prototype.get = function(e) {
						var n = t(this.__entries__, e),
							r = this.__entries__[n];
						return r && r[1]
					}, e.prototype.set = function(e, n) {
						var r = t(this.__entries__, e);
						~r ? this.__entries__[r][1] = n : this.__entries__.push([e, n])
					}, e.prototype.delete = function(e) {
						var n = this.__entries__,
							r = t(n, e);
						~r && n.splice(r, 1)
					}, e.prototype.has = function(e) {
						return !!~t(this.__entries__, e)
					}, e.prototype.clear = function() {
						this.__entries__.splice(0)
					}, e.prototype.forEach = function(t, e) {
						void 0 === e && (e = null);
						for (var n = 0, r = this.__entries__; n < r.length; n++) {
							var i = r[n];
							t.call(e, i[1], i[0])
						}
					}, e
				}()
			}(),
			r = "undefined" != typeof window && "undefined" != typeof document && window.document === document,
			i = void 0 !== t && t.Math === Math ? t : "undefined" != typeof self && self.Math === Math ? self : "undefined" != typeof window && window.Math === Math ? window : Function("return this")(),
			o = "function" == typeof requestAnimationFrame ? requestAnimationFrame.bind(i) : function(t) {
				return setTimeout((function() {
					return t(Date.now())
				}), 1e3 / 60)
			};
		var a = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
			s = "undefined" != typeof MutationObserver,
			c = function() {
				function t() {
					this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = function(t, e) {
						var n = !1,
							r = !1,
							i = 0;

						function a() {
							n && (n = !1, t()), r && c()
						}

						function s() {
							o(a)
						}

						function c() {
							var t = Date.now();
							if (n) {
								if (t - i < 2) return;
								r = !0
							} else n = !0, r = !1, setTimeout(s, e);
							i = t
						}
						return c
					}(this.refresh.bind(this), 20)
				}
				return t.prototype.addObserver = function(t) {
					~this.observers_.indexOf(t) || this.observers_.push(t), this.connected_ || this.connect_()
				}, t.prototype.removeObserver = function(t) {
					var e = this.observers_,
						n = e.indexOf(t);
					~n && e.splice(n, 1), !e.length && this.connected_ && this.disconnect_()
				}, t.prototype.refresh = function() {
					this.updateObservers_() && this.refresh()
				}, t.prototype.updateObservers_ = function() {
					var t = this.observers_.filter((function(t) {
						return t.gatherActive(), t.hasActive()
					}));
					return t.forEach((function(t) {
						return t.broadcastActive()
					})), t.length > 0
				}, t.prototype.connect_ = function() {
					r && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), s ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
						attributes: !0,
						childList: !0,
						characterData: !0,
						subtree: !0
					})) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0)
				}, t.prototype.disconnect_ = function() {
					r && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1)
				}, t.prototype.onTransitionEnd_ = function(t) {
					var e = t.propertyName,
						n = void 0 === e ? "" : e;
					a.some((function(t) {
						return !!~n.indexOf(t)
					})) && this.refresh()
				}, t.getInstance = function() {
					return this.instance_ || (this.instance_ = new t), this.instance_
				}, t.instance_ = null, t
			}(),
			l = function(t, e) {
				for (var n = 0, r = Object.keys(e); n < r.length; n++) {
					var i = r[n];
					Object.defineProperty(t, i, {
						value: e[i],
						enumerable: !1,
						writable: !1,
						configurable: !0
					})
				}
				return t
			},
			u = function(t) {
				return t && t.ownerDocument && t.ownerDocument.defaultView || i
			},
			d = m(0, 0, 0, 0);

		function f(t) {
			return parseFloat(t) || 0
		}

		function h(t) {
			for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
			return e.reduce((function(e, n) {
				return e + f(t["border-" + n + "-width"])
			}), 0)
		}

		function p(t) {
			var e = t.clientWidth,
				n = t.clientHeight;
			if (!e && !n) return d;
			var r = u(t).getComputedStyle(t),
				i = function(t) {
					for (var e = {}, n = 0, r = ["top", "right", "bottom", "left"]; n < r.length; n++) {
						var i = r[n],
							o = t["padding-" + i];
						e[i] = f(o)
					}
					return e
				}(r),
				o = i.left + i.right,
				a = i.top + i.bottom,
				s = f(r.width),
				c = f(r.height);
			if ("border-box" === r.boxSizing && (Math.round(s + o) !== e && (s -= h(r, "left", "right") + o), Math.round(c + a) !== n && (c -= h(r, "top", "bottom") + a)), ! function(t) {
					return t === u(t).document.documentElement
				}(t)) {
				var l = Math.round(s + o) - e,
					p = Math.round(c + a) - n;
				1 !== Math.abs(l) && (s -= l), 1 !== Math.abs(p) && (c -= p)
			}
			return m(i.left, i.top, s, c)
		}
		var g = "undefined" != typeof SVGGraphicsElement ? function(t) {
			return t instanceof u(t).SVGGraphicsElement
		} : function(t) {
			return t instanceof u(t).SVGElement && "function" == typeof t.getBBox
		};

		function v(t) {
			return r ? g(t) ? function(t) {
				var e = t.getBBox();
				return m(0, 0, e.width, e.height)
			}(t) : p(t) : d
		}

		function m(t, e, n, r) {
			return {
				x: t,
				y: e,
				width: n,
				height: r
			}
		}
		var y = function() {
				function t(t) {
					this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = m(0, 0, 0, 0), this.target = t
				}
				return t.prototype.isActive = function() {
					var t = v(this.target);
					return this.contentRect_ = t, t.width !== this.broadcastWidth || t.height !== this.broadcastHeight
				}, t.prototype.broadcastRect = function() {
					var t = this.contentRect_;
					return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t
				}, t
			}(),
			b = function(t, e) {
				var n, r, i, o, a, s, c, u = (r = (n = e).x, i = n.y, o = n.width, a = n.height, s = "undefined" != typeof DOMRectReadOnly ? DOMRectReadOnly : Object, c = Object.create(s.prototype), l(c, {
					x: r,
					y: i,
					width: o,
					height: a,
					top: i,
					right: r + o,
					bottom: a + i,
					left: r
				}), c);
				l(this, {
					target: t,
					contentRect: u
				})
			},
			w = function() {
				function t(t, e, r) {
					if (this.activeObservations_ = [], this.observations_ = new n, "function" != typeof t) throw new TypeError("The callback provided as parameter 1 is not a function.");
					this.callback_ = t, this.controller_ = e, this.callbackCtx_ = r
				}
				return t.prototype.observe = function(t) {
					if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
					if ("undefined" != typeof Element && Element instanceof Object) {
						if (!(t instanceof u(t).Element)) throw new TypeError('parameter 1 is not of type "Element".');
						var e = this.observations_;
						e.has(t) || (e.set(t, new y(t)), this.controller_.addObserver(this), this.controller_.refresh())
					}
				}, t.prototype.unobserve = function(t) {
					if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
					if ("undefined" != typeof Element && Element instanceof Object) {
						if (!(t instanceof u(t).Element)) throw new TypeError('parameter 1 is not of type "Element".');
						var e = this.observations_;
						e.has(t) && (e.delete(t), e.size || this.controller_.removeObserver(this))
					}
				}, t.prototype.disconnect = function() {
					this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this)
				}, t.prototype.gatherActive = function() {
					var t = this;
					this.clearActive(), this.observations_.forEach((function(e) {
						e.isActive() && t.activeObservations_.push(e)
					}))
				}, t.prototype.broadcastActive = function() {
					if (this.hasActive()) {
						var t = this.callbackCtx_,
							e = this.activeObservations_.map((function(t) {
								return new b(t.target, t.broadcastRect())
							}));
						this.callback_.call(t, e, t), this.clearActive()
					}
				}, t.prototype.clearActive = function() {
					this.activeObservations_.splice(0)
				}, t.prototype.hasActive = function() {
					return this.activeObservations_.length > 0
				}, t
			}(),
			E = "undefined" != typeof WeakMap ? new WeakMap : new n,
			_ = function t(e) {
				if (!(this instanceof t)) throw new TypeError("Cannot call a class as a function.");
				if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
				var n = c.getInstance(),
					r = new w(e, n, this);
				E.set(this, r)
			};
		["observe", "unobserve", "disconnect"].forEach((function(t) {
			_.prototype[t] = function() {
				var e;
				return (e = E.get(this))[t].apply(e, arguments)
			}
		}));
		var A = void 0 !== i.ResizeObserver ? i.ResizeObserver : _;
		e.a = A
	}).call(this, n(8))
}, function(t, e, n) {
	var r = n(50);
	t.exports = function(t, e) {
		if (null == t) return {};
		var n, i, o = r(t, e);
		if (Object.getOwnPropertySymbols) {
			var a = Object.getOwnPropertySymbols(t);
			for (i = 0; i < a.length; i++) n = a[i], e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n])
		}
		return o
	}
}, function(t, e) {
	var n = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'],
		r = n.join(","),
		i = "undefined" == typeof Element ? function() {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;

	function o(t, e) {
		e = e || {};
		var n, o, s, c = [],
			d = [],
			f = t.querySelectorAll(r);
		for (e.includeContainer && i.call(t, r) && (f = Array.prototype.slice.apply(f)).unshift(t), n = 0; n < f.length; n++) a(o = f[n]) && (0 === (s = l(o)) ? c.push(o) : d.push({
			documentOrder: n,
			tabIndex: s,
			node: o
		}));
		return d.sort(u).map((function(t) {
			return t.node
		})).concat(c)
	}

	function a(t) {
		return !(!s(t) || function(t) {
			return function(t) {
				return d(t) && "radio" === t.type
			}(t) && ! function(t) {
				if (!t.name) return !0;
				var e = function(t) {
					for (var e = 0; e < t.length; e++)
						if (t[e].checked) return t[e]
				}(t.ownerDocument.querySelectorAll('input[type="radio"][name="' + t.name + '"]'));
				return !e || e === t
			}(t)
		}(t) || l(t) < 0)
	}

	function s(t) {
		return !(t.disabled || function(t) {
			return d(t) && "hidden" === t.type
		}(t) || function(t) {
			return null === t.offsetParent || "hidden" === getComputedStyle(t).visibility
		}(t))
	}
	o.isTabbable = function(t) {
		if (!t) throw new Error("No node provided");
		return !1 !== i.call(t, r) && a(t)
	}, o.isFocusable = function(t) {
		if (!t) throw new Error("No node provided");
		return !1 !== i.call(t, c) && s(t)
	};
	var c = n.concat("iframe").join(",");

	function l(t) {
		var e = parseInt(t.getAttribute("tabindex"), 10);
		return isNaN(e) ? function(t) {
			return "true" === t.contentEditable
		}(t) ? 0 : t.tabIndex : e
	}

	function u(t, e) {
		return t.tabIndex === e.tabIndex ? t.documentOrder - e.documentOrder : t.tabIndex - e.tabIndex
	}

	function d(t) {
		return "INPUT" === t.tagName
	}
	t.exports = o
}, function(t, e, n) {
	/*!
	 * simpleParallax.min - simpleParallax is a simple JavaScript library that gives your website parallax animations on any images or videos, 
	 * @date: 20-08-2020 14:0:14, 
	 * @version: 5.6.2,
	 * @link: https://simpleparallax.com/
	 */
	window,
	t.exports = function(t) {
		var e = {};

		function n(r) {
			if (e[r]) return e[r].exports;
			var i = e[r] = {
				i: r,
				l: !1,
				exports: {}
			};
			return t[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
		}
		return n.m = t, n.c = e, n.d = function(t, e, r) {
			n.o(t, e) || Object.defineProperty(t, e, {
				enumerable: !0,
				get: r
			})
		}, n.r = function(t) {
			"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
				value: "Module"
			}), Object.defineProperty(t, "__esModule", {
				value: !0
			})
		}, n.t = function(t, e) {
			if (1 & e && (t = n(t)), 8 & e) return t;
			if (4 & e && "object" == typeof t && t && t.__esModule) return t;
			var r = Object.create(null);
			if (n.r(r), Object.defineProperty(r, "default", {
					enumerable: !0,
					value: t
				}), 2 & e && "string" != typeof t)
				for (var i in t) n.d(r, i, function(e) {
					return t[e]
				}.bind(null, i));
			return r
		}, n.n = function(t) {
			var e = t && t.__esModule ? function() {
				return t.default
			} : function() {
				return t
			};
			return n.d(e, "a", e), e
		}, n.o = function(t, e) {
			return Object.prototype.hasOwnProperty.call(t, e)
		}, n.p = "", n(n.s = 0)
	}([function(t, e, n) {
		"use strict";

		function r(t, e) {
			for (var n = 0; n < e.length; n++) {
				var r = e[n];
				r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
			}
		}
		n.r(e), n.d(e, "default", (function() {
			return y
		}));
		var i = new(function() {
				function t() {
					! function(t, e) {
						if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
					}(this, t), this.positions = {
						top: 0,
						bottom: 0,
						height: 0
					}
				}
				var e, n;
				return e = t, (n = [{
					key: "setViewportTop",
					value: function(t) {
						return this.positions.top = t ? t.scrollTop : window.pageYOffset, this.positions
					}
				}, {
					key: "setViewportBottom",
					value: function() {
						return this.positions.bottom = this.positions.top + this.positions.height, this.positions
					}
				}, {
					key: "setViewportAll",
					value: function(t) {
						return this.positions.top = t ? t.scrollTop : window.pageYOffset, this.positions.height = t ? t.clientHeight : document.documentElement.clientHeight, this.positions.bottom = this.positions.top + this.positions.height, this.positions
					}
				}]) && r(e.prototype, n), t
			}()),
			o = function(t) {
				return NodeList.prototype.isPrototypeOf(t) || HTMLCollection.prototype.isPrototypeOf(t) ? Array.from(t) : "string" == typeof t || t instanceof String ? document.querySelectorAll(t) : [t]
			},
			a = function() {
				for (var t, e = "transform webkitTransform mozTransform oTransform msTransform".split(" "), n = 0; void 0 === t;) t = void 0 !== document.createElement("div").style[e[n]] ? e[n] : void 0, n += 1;
				return t
			}();

		function s(t, e) {
			(null == e || e > t.length) && (e = t.length);
			for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
			return r
		}

		function c(t, e) {
			for (var n = 0; n < e.length; n++) {
				var r = e[n];
				r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
			}
		}
		var l = function() {
			function t(e, n) {
				var r = this;
				! function(t, e) {
					if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
				}(this, t), this.element = e, this.elementContainer = e, this.settings = n, this.isVisible = !0, this.isInit = !1, this.oldTranslateValue = -1, this.init = this.init.bind(this), this.customWrapper = this.settings.customWrapper && this.element.closest(this.settings.customWrapper) ? this.element.closest(this.settings.customWrapper) : null,
					function(t) {
						return "img" !== t.tagName.toLowerCase() && "picture" !== t.tagName.toLowerCase() || !!t && !!t.complete && (void 0 === t.naturalWidth || 0 !== t.naturalWidth)
					}(e) ? this.init() : this.element.addEventListener("load", (function() {
						setTimeout((function() {
							r.init(!0)
						}), 50)
					}))
			}
			var e, n;
			return e = t, (n = [{
				key: "init",
				value: function(t) {
					var e = this;
					this.isInit || (t && (this.rangeMax = null), this.element.closest(".simpleParallax") || (!1 === this.settings.overflow && this.wrapElement(this.element), this.setTransformCSS(), this.getElementOffset(), this.intersectionObserver(), this.getTranslateValue(), this.animate(), this.settings.delay > 0 ? setTimeout((function() {
						e.setTransitionCSS(), e.elementContainer.classList.add("simple-parallax-initialized")
					}), 10) : this.elementContainer.classList.add("simple-parallax-initialized"), this.isInit = !0))
				}
			}, {
				key: "wrapElement",
				value: function() {
					var t = this.element.closest("picture") || this.element,
						e = this.customWrapper || document.createElement("div");
					e.classList.add("simpleParallax"), e.style.overflow = "hidden", this.customWrapper || (t.parentNode.insertBefore(e, t), e.appendChild(t)), this.elementContainer = e
				}
			}, {
				key: "unWrapElement",
				value: function() {
					var t = this.elementContainer;
					this.customWrapper ? (t.classList.remove("simpleParallax"), t.style.overflow = "") : t.replaceWith.apply(t, function(t) {
						return function(t) {
							if (Array.isArray(t)) return s(t)
						}(t) || function(t) {
							if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
						}(t) || function(t, e) {
							if (t) {
								if ("string" == typeof t) return s(t, e);
								var n = Object.prototype.toString.call(t).slice(8, -1);
								return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? s(t, e) : void 0
							}
						}(t) || function() {
							throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
						}()
					}(t.childNodes))
				}
			}, {
				key: "setTransformCSS",
				value: function() {
					!1 === this.settings.overflow && (this.element.style[a] = "scale(".concat(this.settings.scale, ")")), this.element.style.willChange = "transform"
				}
			}, {
				key: "setTransitionCSS",
				value: function() {
					this.element.style.transition = "transform ".concat(this.settings.delay, "s ").concat(this.settings.transition)
				}
			}, {
				key: "unSetStyle",
				value: function() {
					this.element.style.willChange = "", this.element.style[a] = "", this.element.style.transition = ""
				}
			}, {
				key: "getElementOffset",
				value: function() {
					var t = this.elementContainer.getBoundingClientRect();
					if (this.elementHeight = t.height, this.elementTop = t.top + i.positions.top, this.settings.customContainer) {
						var e = this.settings.customContainer.getBoundingClientRect();
						this.elementTop = t.top - e.top + i.positions.top
					}
					this.elementBottom = this.elementHeight + this.elementTop
				}
			}, {
				key: "buildThresholdList",
				value: function() {
					for (var t = [], e = 1; e <= this.elementHeight; e++) {
						var n = e / this.elementHeight;
						t.push(n)
					}
					return t
				}
			}, {
				key: "intersectionObserver",
				value: function() {
					var t = {
						root: null,
						threshold: this.buildThresholdList()
					};
					this.observer = new IntersectionObserver(this.intersectionObserverCallback.bind(this), t), this.observer.observe(this.element)
				}
			}, {
				key: "intersectionObserverCallback",
				value: function(t) {
					var e = this;
					t.forEach((function(t) {
						t.isIntersecting ? e.isVisible = !0 : e.isVisible = !1
					}))
				}
			}, {
				key: "checkIfVisible",
				value: function() {
					return this.elementBottom > i.positions.top && this.elementTop < i.positions.bottom
				}
			}, {
				key: "getRangeMax",
				value: function() {
					var t = this.element.clientHeight;
					this.rangeMax = t * this.settings.scale - t
				}
			}, {
				key: "getTranslateValue",
				value: function() {
					var t = ((i.positions.bottom - this.elementTop) / ((i.positions.height + this.elementHeight) / 100)).toFixed(1);
					return t = Math.min(100, Math.max(0, t)), 0 !== this.settings.maxTransition && t > this.settings.maxTransition && (t = this.settings.maxTransition), this.oldPercentage !== t && (this.rangeMax || this.getRangeMax(), this.translateValue = (t / 100 * this.rangeMax - this.rangeMax / 2).toFixed(0), this.oldTranslateValue !== this.translateValue && (this.oldPercentage = t, this.oldTranslateValue = this.translateValue, !0))
				}
			}, {
				key: "animate",
				value: function() {
					var t, e = 0,
						n = 0;
					(this.settings.orientation.includes("left") || this.settings.orientation.includes("right")) && (n = "".concat(this.settings.orientation.includes("left") ? -1 * this.translateValue : this.translateValue, "px")), (this.settings.orientation.includes("up") || this.settings.orientation.includes("down")) && (e = "".concat(this.settings.orientation.includes("up") ? -1 * this.translateValue : this.translateValue, "px")), t = !1 === this.settings.overflow ? "translate3d(".concat(n, ", ").concat(e, ", 0) scale(").concat(this.settings.scale, ")") : "translate3d(".concat(n, ", ").concat(e, ", 0)"), this.element.style[a] = t
				}
			}]) && c(e.prototype, n), t
		}();

		function u(t) {
			return function(t) {
				if (Array.isArray(t)) return f(t)
			}(t) || function(t) {
				if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
			}(t) || d(t) || function() {
				throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
			}()
		}

		function d(t, e) {
			if (t) {
				if ("string" == typeof t) return f(t, e);
				var n = Object.prototype.toString.call(t).slice(8, -1);
				return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? f(t, e) : void 0
			}
		}

		function f(t, e) {
			(null == e || e > t.length) && (e = t.length);
			for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
			return r
		}

		function h(t, e) {
			for (var n = 0; n < e.length; n++) {
				var r = e[n];
				r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
			}
		}
		var p, g, v = !1,
			m = [],
			y = function() {
				function t(e, n) {
					if (function(t, e) {
							if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
						}(this, t), e && Element.prototype.closest && "IntersectionObserver" in window) {
						if (this.elements = o(e), this.defaults = {
								delay: 0,
								orientation: "up",
								scale: 1.3,
								overflow: !1,
								transition: "cubic-bezier(0,0,0,1)",
								customContainer: "",
								customWrapper: "",
								maxTransition: 0
							}, this.settings = Object.assign(this.defaults, n), this.settings.customContainer) {
							var r = function(t, e) {
								return function(t) {
									if (Array.isArray(t)) return t
								}(t) || function(t, e) {
									if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) {
										var n = [],
											r = !0,
											i = !1,
											o = void 0;
										try {
											for (var a, s = t[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0);
										} catch (t) {
											i = !0, o = t
										} finally {
											try {
												r || null == s.return || s.return()
											} finally {
												if (i) throw o
											}
										}
										return n
									}
								}(t, e) || d(t, e) || function() {
									throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
								}()
							}(o(this.settings.customContainer), 1);
							this.customContainer = r[0]
						}
						this.lastPosition = -1, this.resizeIsDone = this.resizeIsDone.bind(this), this.refresh = this.refresh.bind(this), this.proceedRequestAnimationFrame = this.proceedRequestAnimationFrame.bind(this), this.init()
					}
				}
				var e, n;
				return e = t, (n = [{
					key: "init",
					value: function() {
						var t = this;
						i.setViewportAll(this.customContainer), m = [].concat(u(this.elements.map((function(e) {
							return new l(e, t.settings)
						}))), u(m)), v || (this.proceedRequestAnimationFrame(), window.addEventListener("resize", this.resizeIsDone), v = !0)
					}
				}, {
					key: "resizeIsDone",
					value: function() {
						clearTimeout(g), g = setTimeout(this.refresh, 200)
					}
				}, {
					key: "proceedRequestAnimationFrame",
					value: function() {
						var t = this;
						i.setViewportTop(this.customContainer), this.lastPosition !== i.positions.top ? (i.setViewportBottom(), m.forEach((function(e) {
							t.proceedElement(e)
						})), p = window.requestAnimationFrame(this.proceedRequestAnimationFrame), this.lastPosition = i.positions.top) : p = window.requestAnimationFrame(this.proceedRequestAnimationFrame)
					}
				}, {
					key: "proceedElement",
					value: function(t) {
						(this.customContainer ? t.checkIfVisible() : t.isVisible) && t.getTranslateValue() && t.animate()
					}
				}, {
					key: "refresh",
					value: function() {
						i.setViewportAll(this.customContainer), m.forEach((function(t) {
							t.getElementOffset(), t.getRangeMax()
						})), this.lastPosition = -1
					}
				}, {
					key: "destroy",
					value: function() {
						var t = this,
							e = [];
						m = m.filter((function(n) {
							return t.elements.includes(n.element) ? (e.push(n), !1) : n
						})), e.forEach((function(e) {
							e.unSetStyle(), !1 === t.settings.overflow && e.unWrapElement()
						})), m.length || (window.cancelAnimationFrame(p), window.removeEventListener("resize", this.refresh), v = !1)
					}
				}]) && h(e.prototype, n), t
			}()
	}]).default
}, function(t, e, n) {
	"use strict";
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
			return typeof t
		} : function(t) {
			return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
		},
		i = s(n(51)),
		o = s(n(52)),
		a = s(n(54));

	function s(t) {
		return t && t.__esModule ? t : {
			default: t
		}
	}
	var c = void 0;
	e.default = function(t) {
		var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
			n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
			s = (0, i.default)();
		if (c || (c = (0, o.default)(s)), e.events) throw new Error("Event handlers cannot be overwritten.");
		if ("string" == typeof t && !document.getElementById(t)) throw new Error('Element "' + t + '" does not exist.');
		e.events = a.default.proxyEvents(s);
		var l = new Promise((function(n) {
				"object" === (void 0 === t ? "undefined" : r(t)) && t.playVideo instanceof Function ? n(t) : c.then((function(r) {
					var i = new r.Player(t, e);
					return s.on("ready", (function() {
						n(i)
					})), null
				}))
			})),
			u = a.default.promisifyPlayer(l, n);
		return u.on = s.on, u.off = s.off, u
	}, t.exports = e.default
}, function(t, e, n) {
	"use strict";
	(function(t, n) {
		/*! @vimeo/player v2.13.0 | (c) 2020 Vimeo | MIT License | https://github.com/vimeo/player.js */
		function r(t, e) {
			if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
		}

		function i(t, e) {
			for (var n = 0; n < e.length; n++) {
				var r = e[n];
				r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
			}
		}
		var o = void 0 !== t && "[object global]" === {}.toString.call(t);

		function a(t, e) {
			return 0 === t.indexOf(e.toLowerCase()) ? t : "".concat(e.toLowerCase()).concat(t.substr(0, 1).toUpperCase()).concat(t.substr(1))
		}

		function s(t) {
			return Boolean(t && 1 === t.nodeType && "nodeName" in t && t.ownerDocument && t.ownerDocument.defaultView)
		}

		function c(t) {
			return !isNaN(parseFloat(t)) && isFinite(t) && Math.floor(t) == t
		}

		function l(t) {
			return /^(https?:)?\/\/((player|www)\.)?vimeo\.com(?=$|\/)/.test(t)
		}

		function u() {
			var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
				e = t.id,
				n = t.url,
				r = e || n;
			if (!r) throw new Error("An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute.");
			if (c(r)) return "https://vimeo.com/".concat(r);
			if (l(r)) return r.replace("http:", "https:");
			if (e) throw new TypeError("“".concat(e, "” is not a valid video id."));
			throw new TypeError("“".concat(r, "” is not a vimeo.com url."))
		}
		var d = void 0 !== Array.prototype.indexOf,
			f = "undefined" != typeof window && void 0 !== window.postMessage;
		if (!(o || d && f)) throw new Error("Sorry, the Vimeo Player API is not available in this browser.");
		var h = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== t ? t : "undefined" != typeof self ? self : {};
		/*!
		 * weakmap-polyfill v2.0.1 - ECMAScript6 WeakMap polyfill
		 * https://github.com/polygonplanet/weakmap-polyfill
		 * Copyright (c) 2015-2020 Polygon Planet <polygon.planet.aqua@gmail.com>
		 * @license MIT
		 */
		! function(t) {
			if (!t.WeakMap) {
				var e = Object.prototype.hasOwnProperty,
					n = function(t, e, n) {
						Object.defineProperty ? Object.defineProperty(t, e, {
							configurable: !0,
							writable: !0,
							value: n
						}) : t[e] = n
					};
				t.WeakMap = function() {
					function t() {
						if (void 0 === this) throw new TypeError("Constructor WeakMap requires 'new'");
						if (n(this, "_id", o("_WeakMap")), arguments.length > 0) throw new TypeError("WeakMap iterable is not supported")
					}

					function i(t, n) {
						if (!r(t) || !e.call(t, "_id")) throw new TypeError(n + " method called on incompatible receiver " + typeof t)
					}

					function o(t) {
						return t + "_" + a() + "." + a()
					}

					function a() {
						return Math.random().toString().substring(2)
					}
					return n(t.prototype, "delete", (function(t) {
						if (i(this, "delete"), !r(t)) return !1;
						var e = t[this._id];
						return !(!e || e[0] !== t) && (delete t[this._id], !0)
					})), n(t.prototype, "get", (function(t) {
						if (i(this, "get"), r(t)) {
							var e = t[this._id];
							return e && e[0] === t ? e[1] : void 0
						}
					})), n(t.prototype, "has", (function(t) {
						if (i(this, "has"), !r(t)) return !1;
						var e = t[this._id];
						return !(!e || e[0] !== t)
					})), n(t.prototype, "set", (function(t, e) {
						if (i(this, "set"), !r(t)) throw new TypeError("Invalid value used as weak map key");
						var o = t[this._id];
						return o && o[0] === t ? (o[1] = e, this) : (n(t, this._id, [t, e]), this)
					})), n(t, "_polyfill", !0), t
				}()
			}

			function r(t) {
				return Object(t) === t
			}
		}("undefined" != typeof self ? self : "undefined" != typeof window ? window : h);
		var p = function(t, e) {
				return t(e = {
					exports: {}
				}, e.exports), e.exports
			}((function(t) {
				/*! Native Promise Only
				    v0.8.1 (c) Kyle Simpson
				    MIT License: http://getify.mit-license.org
				*/
				var e, r, i;
				i = function() {
					var t, e, r, i = Object.prototype.toString,
						o = void 0 !== n ? function(t) {
							return n(t)
						} : setTimeout;
					try {
						Object.defineProperty({}, "x", {}), t = function(t, e, n, r) {
							return Object.defineProperty(t, e, {
								value: n,
								writable: !0,
								configurable: !1 !== r
							})
						}
					} catch (e) {
						t = function(t, e, n) {
							return t[e] = n, t
						}
					}

					function a(t, n) {
						r.add(t, n), e || (e = o(r.drain))
					}

					function s(t) {
						var e, n = typeof t;
						return null == t || "object" != n && "function" != n || (e = t.then), "function" == typeof e && e
					}

					function c() {
						for (var t = 0; t < this.chain.length; t++) l(this, 1 === this.state ? this.chain[t].success : this.chain[t].failure, this.chain[t]);
						this.chain.length = 0
					}

					function l(t, e, n) {
						var r, i;
						try {
							!1 === e ? n.reject(t.msg) : (r = !0 === e ? t.msg : e.call(void 0, t.msg)) === n.promise ? n.reject(TypeError("Promise-chain cycle")) : (i = s(r)) ? i.call(r, n.resolve, n.reject) : n.resolve(r)
						} catch (t) {
							n.reject(t)
						}
					}

					function u(t) {
						var e, n = this;
						if (!n.triggered) {
							n.triggered = !0, n.def && (n = n.def);
							try {
								(e = s(t)) ? a((function() {
									var r = new h(n);
									try {
										e.call(t, (function() {
											u.apply(r, arguments)
										}), (function() {
											d.apply(r, arguments)
										}))
									} catch (t) {
										d.call(r, t)
									}
								})): (n.msg = t, n.state = 1, n.chain.length > 0 && a(c, n))
							} catch (t) {
								d.call(new h(n), t)
							}
						}
					}

					function d(t) {
						var e = this;
						e.triggered || (e.triggered = !0, e.def && (e = e.def), e.msg = t, e.state = 2, e.chain.length > 0 && a(c, e))
					}

					function f(t, e, n, r) {
						for (var i = 0; i < e.length; i++) ! function(i) {
							t.resolve(e[i]).then((function(t) {
								n(i, t)
							}), r)
						}(i)
					}

					function h(t) {
						this.def = t, this.triggered = !1
					}

					function p(t) {
						this.promise = t, this.state = 0, this.triggered = !1, this.chain = [], this.msg = void 0
					}

					function g(t) {
						if ("function" != typeof t) throw TypeError("Not a function");
						if (0 !== this.__NPO__) throw TypeError("Not a promise");
						this.__NPO__ = 1;
						var e = new p(this);
						this.then = function(t, n) {
							var r = {
								success: "function" != typeof t || t,
								failure: "function" == typeof n && n
							};
							return r.promise = new this.constructor((function(t, e) {
								if ("function" != typeof t || "function" != typeof e) throw TypeError("Not a function");
								r.resolve = t, r.reject = e
							})), e.chain.push(r), 0 !== e.state && a(c, e), r.promise
						}, this.catch = function(t) {
							return this.then(void 0, t)
						};
						try {
							t.call(void 0, (function(t) {
								u.call(e, t)
							}), (function(t) {
								d.call(e, t)
							}))
						} catch (t) {
							d.call(e, t)
						}
					}
					r = function() {
						var t, n, r;

						function i(t, e) {
							this.fn = t, this.self = e, this.next = void 0
						}
						return {
							add: function(e, o) {
								r = new i(e, o), n ? n.next = r : t = r, n = r, r = void 0
							},
							drain: function() {
								var r = t;
								for (t = n = e = void 0; r;) r.fn.call(r.self), r = r.next
							}
						}
					}();
					var v = t({}, "constructor", g, !1);
					return g.prototype = v, t(v, "__NPO__", 0, !1), t(g, "resolve", (function(t) {
						return t && "object" == typeof t && 1 === t.__NPO__ ? t : new this((function(e, n) {
							if ("function" != typeof e || "function" != typeof n) throw TypeError("Not a function");
							e(t)
						}))
					})), t(g, "reject", (function(t) {
						return new this((function(e, n) {
							if ("function" != typeof e || "function" != typeof n) throw TypeError("Not a function");
							n(t)
						}))
					})), t(g, "all", (function(t) {
						var e = this;
						return "[object Array]" != i.call(t) ? e.reject(TypeError("Not an array")) : 0 === t.length ? e.resolve([]) : new e((function(n, r) {
							if ("function" != typeof n || "function" != typeof r) throw TypeError("Not a function");
							var i = t.length,
								o = Array(i),
								a = 0;
							f(e, t, (function(t, e) {
								o[t] = e, ++a === i && n(o)
							}), r)
						}))
					})), t(g, "race", (function(t) {
						var e = this;
						return "[object Array]" != i.call(t) ? e.reject(TypeError("Not an array")) : new e((function(n, r) {
							if ("function" != typeof n || "function" != typeof r) throw TypeError("Not a function");
							f(e, t, (function(t, e) {
								n(e)
							}), r)
						}))
					})), g
				}, (r = h)[e = "Promise"] = r[e] || i(), t.exports && (t.exports = r[e])
			})),
			g = new WeakMap;

		function v(t, e, n) {
			var r = g.get(t.element) || {};
			e in r || (r[e] = []), r[e].push(n), g.set(t.element, r)
		}

		function m(t, e) {
			return (g.get(t.element) || {})[e] || []
		}

		function y(t, e, n) {
			var r = g.get(t.element) || {};
			if (!r[e]) return !0;
			if (!n) return r[e] = [], g.set(t.element, r), !0;
			var i = r[e].indexOf(n);
			return -1 !== i && r[e].splice(i, 1), g.set(t.element, r), r[e] && 0 === r[e].length
		}

		function b(t, e) {
			var n = g.get(t);
			g.set(e, n), g.delete(t)
		}
		var w = ["autopause", "autoplay", "background", "byline", "color", "controls", "dnt", "height", "id", "loop", "maxheight", "maxwidth", "muted", "playsinline", "portrait", "responsive", "speed", "texttrack", "title", "transparent", "url", "width"];

		function E(t) {
			var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
			return w.reduce((function(e, n) {
				var r = t.getAttribute("data-vimeo-".concat(n));
				return (r || "" === r) && (e[n] = "" === r ? 1 : r), e
			}), e)
		}

		function _(t, e) {
			var n = t.html;
			if (!e) throw new TypeError("An element must be provided");
			if (null !== e.getAttribute("data-vimeo-initialized")) return e.querySelector("iframe");
			var r = document.createElement("div");
			return r.innerHTML = n, e.appendChild(r.firstChild), e.setAttribute("data-vimeo-initialized", "true"), e.querySelector("iframe")
		}

		function A(t) {
			var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
				n = arguments.length > 2 ? arguments[2] : void 0;
			return new Promise((function(r, i) {
				if (!l(t)) throw new TypeError("“".concat(t, "” is not a vimeo.com url."));
				var o = "https://vimeo.com/api/oembed.json?url=".concat(encodeURIComponent(t));
				for (var a in e) e.hasOwnProperty(a) && (o += "&".concat(a, "=").concat(encodeURIComponent(e[a])));
				var s = "XDomainRequest" in window ? new XDomainRequest : new XMLHttpRequest;
				s.open("GET", o, !0), s.onload = function() {
					if (404 !== s.status)
						if (403 !== s.status) try {
							var e = JSON.parse(s.responseText);
							if (403 === e.domain_status_code) return _(e, n), void i(new Error("“".concat(t, "” is not embeddable.")));
							r(e)
						} catch (t) {
							i(t)
						} else i(new Error("“".concat(t, "” is not embeddable.")));
						else i(new Error("“".concat(t, "” was not found.")))
				}, s.onerror = function() {
					var t = s.status ? " (".concat(s.status, ")") : "";
					i(new Error("There was an error fetching the embed code from Vimeo".concat(t, ".")))
				}, s.send()
			}))
		}

		function k(t) {
			if ("string" == typeof t) try {
				t = JSON.parse(t)
			} catch (t) {
				return console.warn(t), {}
			}
			return t
		}

		function T(t, e, n) {
			if (t.element.contentWindow && t.element.contentWindow.postMessage) {
				var r = {
					method: e
				};
				void 0 !== n && (r.value = n);
				var i = parseFloat(navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/, "$1"));
				i >= 8 && i < 10 && (r = JSON.stringify(r)), t.element.contentWindow.postMessage(r, t.origin)
			}
		}

		function S(t, e) {
			var n, r = [];
			if ((e = k(e)).event) {
				if ("error" === e.event) m(t, e.data.method).forEach((function(n) {
					var r = new Error(e.data.message);
					r.name = e.data.name, n.reject(r), y(t, e.data.method, n)
				}));
				r = m(t, "event:".concat(e.event)), n = e.data
			} else if (e.method) {
				var i = function(t, e) {
					var n = m(t, e);
					if (n.length < 1) return !1;
					var r = n.shift();
					return y(t, e, r), r
				}(t, e.method);
				i && (r.push(i), n = e.value)
			}
			r.forEach((function(e) {
				try {
					if ("function" == typeof e) return void e.call(t, n);
					e.resolve(n)
				} catch (t) {}
			}))
		}
		var x = new WeakMap,
			C = new WeakMap,
			O = {},
			L = function() {
				function t(e) {
					var n = this,
						i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
					if (r(this, t), window.jQuery && e instanceof jQuery && (e.length > 1 && window.console && console.warn && console.warn("A jQuery object with multiple elements was passed, using the first element."), e = e[0]), "undefined" != typeof document && "string" == typeof e && (e = document.getElementById(e)), !s(e)) throw new TypeError("You must pass either a valid element or a valid id.");
					if ("IFRAME" !== e.nodeName) {
						var o = e.querySelector("iframe");
						o && (e = o)
					}
					if ("IFRAME" === e.nodeName && !l(e.getAttribute("src") || "")) throw new Error("The player element passed isn’t a Vimeo embed.");
					if (x.has(e)) return x.get(e);
					this._window = e.ownerDocument.defaultView, this.element = e, this.origin = "*";
					var a = new p((function(t, r) {
						if (n._onMessage = function(e) {
								if (l(e.origin) && n.element.contentWindow === e.source) {
									"*" === n.origin && (n.origin = e.origin);
									var i = k(e.data);
									if (i && "error" === i.event && i.data && "ready" === i.data.method) {
										var o = new Error(i.data.message);
										return o.name = i.data.name, void r(o)
									}
									var a = i && "ready" === i.event,
										s = i && "ping" === i.method;
									if (a || s) return n.element.setAttribute("data-ready", "true"), void t();
									S(n, i)
								}
							}, n._window.addEventListener("message", n._onMessage), "IFRAME" !== n.element.nodeName) {
							var o = E(e, i);
							A(u(o), o, e).then((function(t) {
								var r = _(t, e);
								return n.element = r, n._originalElement = e, b(e, r), x.set(n.element, n), t
							})).catch(r)
						}
					}));
					if (C.set(this, a), x.set(this.element, this), "IFRAME" === this.element.nodeName && T(this, "ping"), O.isEnabled) {
						var c = function() {
							return O.exit()
						};
						O.on("fullscreenchange", (function() {
							O.isFullscreen ? v(n, "event:exitFullscreen", c) : y(n, "event:exitFullscreen", c), n.ready().then((function() {
								T(n, "fullscreenchange", O.isFullscreen)
							}))
						}))
					}
					return this
				}
				var e, n, o;
				return e = t, (n = [{
					key: "callMethod",
					value: function(t) {
						var e = this,
							n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
						return new p((function(r, i) {
							return e.ready().then((function() {
								v(e, t, {
									resolve: r,
									reject: i
								}), T(e, t, n)
							})).catch(i)
						}))
					}
				}, {
					key: "get",
					value: function(t) {
						var e = this;
						return new p((function(n, r) {
							return t = a(t, "get"), e.ready().then((function() {
								v(e, t, {
									resolve: n,
									reject: r
								}), T(e, t)
							})).catch(r)
						}))
					}
				}, {
					key: "set",
					value: function(t, e) {
						var n = this;
						return new p((function(r, i) {
							if (t = a(t, "set"), null == e) throw new TypeError("There must be a value to set.");
							return n.ready().then((function() {
								v(n, t, {
									resolve: r,
									reject: i
								}), T(n, t, e)
							})).catch(i)
						}))
					}
				}, {
					key: "on",
					value: function(t, e) {
						if (!t) throw new TypeError("You must pass an event name.");
						if (!e) throw new TypeError("You must pass a callback function.");
						if ("function" != typeof e) throw new TypeError("The callback must be a function.");
						0 === m(this, "event:".concat(t)).length && this.callMethod("addEventListener", t).catch((function() {})), v(this, "event:".concat(t), e)
					}
				}, {
					key: "off",
					value: function(t, e) {
						if (!t) throw new TypeError("You must pass an event name.");
						if (e && "function" != typeof e) throw new TypeError("The callback must be a function.");
						y(this, "event:".concat(t), e) && this.callMethod("removeEventListener", t).catch((function(t) {}))
					}
				}, {
					key: "loadVideo",
					value: function(t) {
						return this.callMethod("loadVideo", t)
					}
				}, {
					key: "ready",
					value: function() {
						var t = C.get(this) || new p((function(t, e) {
							e(new Error("Unknown player. Probably unloaded."))
						}));
						return p.resolve(t)
					}
				}, {
					key: "addCuePoint",
					value: function(t) {
						var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
						return this.callMethod("addCuePoint", {
							time: t,
							data: e
						})
					}
				}, {
					key: "removeCuePoint",
					value: function(t) {
						return this.callMethod("removeCuePoint", t)
					}
				}, {
					key: "enableTextTrack",
					value: function(t, e) {
						if (!t) throw new TypeError("You must pass a language.");
						return this.callMethod("enableTextTrack", {
							language: t,
							kind: e
						})
					}
				}, {
					key: "disableTextTrack",
					value: function() {
						return this.callMethod("disableTextTrack")
					}
				}, {
					key: "pause",
					value: function() {
						return this.callMethod("pause")
					}
				}, {
					key: "play",
					value: function() {
						return this.callMethod("play")
					}
				}, {
					key: "requestFullscreen",
					value: function() {
						return O.isEnabled ? O.request(this.element) : this.callMethod("requestFullscreen")
					}
				}, {
					key: "exitFullscreen",
					value: function() {
						return O.isEnabled ? O.exit() : this.callMethod("exitFullscreen")
					}
				}, {
					key: "getFullscreen",
					value: function() {
						return O.isEnabled ? p.resolve(O.isFullscreen) : this.get("fullscreen")
					}
				}, {
					key: "unload",
					value: function() {
						return this.callMethod("unload")
					}
				}, {
					key: "destroy",
					value: function() {
						var t = this;
						return new p((function(e) {
							C.delete(t), x.delete(t.element), t._originalElement && (x.delete(t._originalElement), t._originalElement.removeAttribute("data-vimeo-initialized")), t.element && "IFRAME" === t.element.nodeName && t.element.parentNode && t.element.parentNode.removeChild(t.element), t._window.removeEventListener("message", t._onMessage), e()
						}))
					}
				}, {
					key: "getAutopause",
					value: function() {
						return this.get("autopause")
					}
				}, {
					key: "setAutopause",
					value: function(t) {
						return this.set("autopause", t)
					}
				}, {
					key: "getBuffered",
					value: function() {
						return this.get("buffered")
					}
				}, {
					key: "getChapters",
					value: function() {
						return this.get("chapters")
					}
				}, {
					key: "getCurrentChapter",
					value: function() {
						return this.get("currentChapter")
					}
				}, {
					key: "getColor",
					value: function() {
						return this.get("color")
					}
				}, {
					key: "setColor",
					value: function(t) {
						return this.set("color", t)
					}
				}, {
					key: "getCuePoints",
					value: function() {
						return this.get("cuePoints")
					}
				}, {
					key: "getCurrentTime",
					value: function() {
						return this.get("currentTime")
					}
				}, {
					key: "setCurrentTime",
					value: function(t) {
						return this.set("currentTime", t)
					}
				}, {
					key: "getDuration",
					value: function() {
						return this.get("duration")
					}
				}, {
					key: "getEnded",
					value: function() {
						return this.get("ended")
					}
				}, {
					key: "getLoop",
					value: function() {
						return this.get("loop")
					}
				}, {
					key: "setLoop",
					value: function(t) {
						return this.set("loop", t)
					}
				}, {
					key: "setMuted",
					value: function(t) {
						return this.set("muted", t)
					}
				}, {
					key: "getMuted",
					value: function() {
						return this.get("muted")
					}
				}, {
					key: "getPaused",
					value: function() {
						return this.get("paused")
					}
				}, {
					key: "getPlaybackRate",
					value: function() {
						return this.get("playbackRate")
					}
				}, {
					key: "setPlaybackRate",
					value: function(t) {
						return this.set("playbackRate", t)
					}
				}, {
					key: "getPlayed",
					value: function() {
						return this.get("played")
					}
				}, {
					key: "getQualities",
					value: function() {
						return this.get("qualities")
					}
				}, {
					key: "getQuality",
					value: function() {
						return this.get("quality")
					}
				}, {
					key: "setQuality",
					value: function(t) {
						return this.set("quality", t)
					}
				}, {
					key: "getSeekable",
					value: function() {
						return this.get("seekable")
					}
				}, {
					key: "getSeeking",
					value: function() {
						return this.get("seeking")
					}
				}, {
					key: "getTextTracks",
					value: function() {
						return this.get("textTracks")
					}
				}, {
					key: "getVideoEmbedCode",
					value: function() {
						return this.get("videoEmbedCode")
					}
				}, {
					key: "getVideoId",
					value: function() {
						return this.get("videoId")
					}
				}, {
					key: "getVideoTitle",
					value: function() {
						return this.get("videoTitle")
					}
				}, {
					key: "getVideoWidth",
					value: function() {
						return this.get("videoWidth")
					}
				}, {
					key: "getVideoHeight",
					value: function() {
						return this.get("videoHeight")
					}
				}, {
					key: "getVideoUrl",
					value: function() {
						return this.get("videoUrl")
					}
				}, {
					key: "getVolume",
					value: function() {
						return this.get("volume")
					}
				}, {
					key: "setVolume",
					value: function(t) {
						return this.set("volume", t)
					}
				}]) && i(e.prototype, n), o && i(e, o), t
			}();
		o || (O = function() {
			var t = function() {
					for (var t, e = [
							["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
							["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"],
							["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"],
							["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"],
							["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]
						], n = 0, r = e.length, i = {}; n < r; n++)
						if ((t = e[n]) && t[1] in document) {
							for (n = 0; n < t.length; n++) i[e[0][n]] = t[n];
							return i
						} return !1
				}(),
				e = {
					fullscreenchange: t.fullscreenchange,
					fullscreenerror: t.fullscreenerror
				},
				n = {
					request: function(e) {
						return new Promise((function(r, i) {
							var o = function t() {
								n.off("fullscreenchange", t), r()
							};
							n.on("fullscreenchange", o);
							var a = (e = e || document.documentElement)[t.requestFullscreen]();
							a instanceof Promise && a.then(o).catch(i)
						}))
					},
					exit: function() {
						return new Promise((function(e, r) {
							if (n.isFullscreen) {
								var i = function t() {
									n.off("fullscreenchange", t), e()
								};
								n.on("fullscreenchange", i);
								var o = document[t.exitFullscreen]();
								o instanceof Promise && o.then(i).catch(r)
							} else e()
						}))
					},
					on: function(t, n) {
						var r = e[t];
						r && document.addEventListener(r, n)
					},
					off: function(t, n) {
						var r = e[t];
						r && document.removeEventListener(r, n)
					}
				};
			return Object.defineProperties(n, {
				isFullscreen: {
					get: function() {
						return Boolean(document[t.fullscreenElement])
					}
				},
				element: {
					enumerable: !0,
					get: function() {
						return document[t.fullscreenElement]
					}
				},
				isEnabled: {
					enumerable: !0,
					get: function() {
						return Boolean(document[t.fullscreenEnabled])
					}
				}
			}), n
		}(), function() {
			var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document,
				e = [].slice.call(t.querySelectorAll("[data-vimeo-id], [data-vimeo-url]")),
				n = function(t) {
					"console" in window && console.error && console.error("There was an error creating an embed: ".concat(t))
				};
			e.forEach((function(t) {
				try {
					if (null !== t.getAttribute("data-vimeo-defer")) return;
					var e = E(t);
					A(u(e), e, t).then((function(e) {
						return _(e, t)
					})).catch(n)
				} catch (t) {
					n(t)
				}
			}))
		}(), function() {
			var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document;
			if (!window.VimeoPlayerResizeEmbeds_) {
				window.VimeoPlayerResizeEmbeds_ = !0;
				var e = function(e) {
					if (l(e.origin) && e.data && "spacechange" === e.data.event)
						for (var n = t.querySelectorAll("iframe"), r = 0; r < n.length; r++)
							if (n[r].contentWindow === e.source) {
								n[r].parentElement.style.paddingBottom = "".concat(e.data.data[0].bottom, "px");
								break
							}
				};
				window.addEventListener("message", e)
			}
		}()), e.a = L
	}).call(this, n(8), n(62).setImmediate)
}, function(t, e, n) {
	(function(t, e, n) {
		! function(t) {
			"use strict";
			var r, i = /^[a-z]+:/,
				o = /[-a-z0-9]+(\.[-a-z0-9])*:\d+/i,
				a = /\/\/(.*?)(?::(.*?))?@/,
				s = /^win/i,
				c = /:$/,
				l = /^\?/,
				u = /^#/,
				d = /(.*\/)/,
				f = /^\/{2,}/,
				h = /(^\/?)/,
				p = /'/g,
				g = /%([ef][0-9a-f])%([89ab][0-9a-f])%([89ab][0-9a-f])/gi,
				v = /%([cd][0-9a-f])%([89ab][0-9a-f])/gi,
				m = /%([0-7][0-9a-f])/gi,
				y = /\+/g,
				b = /^\w:$/,
				w = /[^/#?]/,
				E = "undefined" == typeof window && void 0 !== e && !0,
				_ = !E && t.navigator && t.navigator.userAgent && ~t.navigator.userAgent.indexOf("MSIE"),
				A = E ? t.require : null,
				k = {
					protocol: "protocol",
					host: "hostname",
					port: "port",
					path: "pathname",
					query: "search",
					hash: "hash"
				},
				T = {
					ftp: 21,
					gopher: 70,
					http: 80,
					https: 443,
					ws: 80,
					wss: 443
				};

			function S() {
				return E ? r = r || "file://" + (n.platform.match(s) ? "/" : "") + A("fs").realpathSync(".") : "about:srcdoc" === document.location.href ? self.parent.document.location.href : document.location.href
			}

			function x(t) {
				return encodeURIComponent(t).replace(p, "%27")
			}

			function C(t) {
				return (t = (t = (t = t.replace(y, " ")).replace(g, (function(t, e, n, r) {
					var i = parseInt(e, 16) - 224,
						o = parseInt(n, 16) - 128;
					if (0 == i && o < 32) return t;
					var a = (i << 12) + (o << 6) + (parseInt(r, 16) - 128);
					return 65535 < a ? t : String.fromCharCode(a)
				}))).replace(v, (function(t, e, n) {
					var r = parseInt(e, 16) - 192;
					if (r < 2) return t;
					var i = parseInt(n, 16) - 128;
					return String.fromCharCode((r << 6) + i)
				}))).replace(m, (function(t, e) {
					return String.fromCharCode(parseInt(e, 16))
				}))
			}

			function O(t) {
				for (var e = t.split("&"), n = 0, r = e.length; n < r; n++) {
					var i = e[n].split("="),
						o = decodeURIComponent(i[0].replace(y, " "));
					if (o) {
						var a = void 0 !== i[1] ? C(i[1]) : null;
						void 0 === this[o] ? this[o] = a : (this[o] instanceof Array || (this[o] = [this[o]]), this[o].push(a))
					}
				}
			}

			function L(t, e) {
				! function(t, e, n) {
					var r, s, p;
					e = e || S(), E ? r = A("url").parse(e) : (r = document.createElement("a")).href = e;
					var g, v, m = (v = {
						path: !0,
						query: !0,
						hash: !0
					}, (g = e) && i.test(g) && (v.protocol = !0, v.host = !0, o.test(g) && (v.port = !0), a.test(g) && (v.user = !0, v.pass = !0)), v);
					for (s in p = e.match(a) || [], k) m[s] ? t[s] = r[k[s]] || "" : t[s] = "";
					if (t.protocol = t.protocol.replace(c, ""), t.query = t.query.replace(l, ""), t.hash = C(t.hash.replace(u, "")), t.user = C(p[1] || ""), t.pass = C(p[2] || ""), t.port = T[t.protocol] == t.port || 0 == t.port ? "" : t.port, !m.protocol && w.test(e.charAt(0)) && (t.path = e.split("?")[0].split("#")[0]), !m.protocol && n) {
						var y = new L(S().match(d)[0]),
							b = y.path.split("/"),
							x = t.path.split("/"),
							q = ["protocol", "user", "pass", "host", "port"],
							D = q.length;
						for (b.pop(), s = 0; s < D; s++) t[q[s]] = y[q[s]];
						for (;
							".." === x[0];) b.pop(), x.shift();
						t.path = ("/" !== e.charAt(0) ? b.join("/") : "") + "/" + x.join("/")
					}
					t.path = t.path.replace(f, "/"), _ && (t.path = t.path.replace(h, "/")), t.paths(t.paths()), t.query = new O(t.query)
				}(this, t, !e)
			}
			O.prototype.toString = function() {
				var t, e, n = "",
					r = x;
				for (t in this) {
					var i = this[t];
					if (!(i instanceof Function || void 0 === i))
						if (i instanceof Array) {
							var o = i.length;
							if (!o) {
								n += (n ? "&" : "") + r(t) + "=";
								continue
							}
							for (e = 0; e < o; e++) {
								var a = i[e];
								void 0 !== a && (n += n ? "&" : "", n += r(t) + (null === a ? "" : "=" + r(a)))
							}
						} else n += n ? "&" : "", n += r(t) + (null === i ? "" : "=" + r(i))
				}
				return n
			}, L.prototype.clearQuery = function() {
				for (var t in this.query) this.query[t] instanceof Function || delete this.query[t];
				return this
			}, L.prototype.queryLength = function() {
				var t = 0;
				for (var e in this.query) this.query[e] instanceof Function || t++;
				return t
			}, L.prototype.isEmptyQuery = function() {
				return 0 === this.queryLength()
			}, L.prototype.paths = function(t) {
				var e, n = "",
					r = 0;
				if (t && t.length && t + "" !== t) {
					for (this.isAbsolute() && (n = "/"), e = t.length; r < e; r++) t[r] = !r && b.test(t[r]) ? t[r] : x(t[r]);
					this.path = n + t.join("/")
				}
				for (r = 0, e = (t = ("/" === this.path.charAt(0) ? this.path.slice(1) : this.path).split("/")).length; r < e; r++) t[r] = C(t[r]);
				return t
			}, L.prototype.encode = x, L.prototype.decode = C, L.prototype.isAbsolute = function() {
				return this.protocol || "/" === this.path.charAt(0)
			}, L.prototype.toString = function() {
				return (this.protocol && this.protocol + "://") + (this.user && x(this.user) + (this.pass && ":" + x(this.pass)) + "@") + (this.host && this.host) + (this.port && ":" + this.port) + (this.path && this.path) + (this.query.toString() && "?" + this.query) + (this.hash && "#" + x(this.hash))
			}, t[t.exports ? "exports" : "Url"] = L
		}(t.exports ? t : window)
	}).call(this, n(64)(t), n(8), n(14))
}, function(t, e, n) {
	var r = n(15);
	t.exports = function(t) {
		if (Array.isArray(t)) return r(t)
	}
}, function(t, e) {
	t.exports = function(t) {
		if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
	}
}, function(t, e) {
	t.exports = function() {
		throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
	}
}, function(t, e, n) {}, function(t, e, n) {
	var r, i, o;
	! function(a, s) {
		if (a) {
			s = s.bind(null, a, a.document), t.exports ? s(n(2)) : (i = [n(2)], void 0 === (o = "function" == typeof(r = s) ? r.apply(e, i) : r) || (t.exports = o))
		}
	}("undefined" != typeof window ? window : 0, (function(t, e, n, r) {
		"use strict";
		var i, o = e.createElement("a").style,
			a = "objectFit" in o,
			s = /object-fit["']*\s*:\s*["']*(contain|cover)/,
			c = /object-position["']*\s*:\s*["']*(.+?)(?=($|,|'|"|;))/,
			l = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
			u = /\(|\)|'/,
			d = {
				center: "center",
				"50% 50%": "center"
			};

		function f(t, r) {
			var o, a, s, c, d = n.cfg,
				f = function() {
					var e = t.currentSrc || t.src;
					e && a !== e && (a = e, c.backgroundImage = "url(" + (u.test(e) ? JSON.stringify(e) : e) + ")", o || (o = !0, n.rC(s, d.loadingClass), n.aC(s, d.loadedClass)))
				},
				h = function() {
					n.rAF(f)
				};
			t._lazysizesParentFit = r.fit, t.addEventListener("lazyloaded", h, !0), t.addEventListener("load", h, !0), n.rAF((function() {
				var o = t,
					a = t.parentNode;
				"PICTURE" == a.nodeName.toUpperCase() && (o = a, a = a.parentNode),
					function(t) {
						var e = t.previousElementSibling;
						e && n.hC(e, i) && (e.parentNode.removeChild(e), t.style.position = e.getAttribute("data-position") || "", t.style.visibility = e.getAttribute("data-visibility") || "")
					}(o), i || function() {
						if (!i) {
							var t = e.createElement("style");
							i = n.cfg.objectFitClass || "lazysizes-display-clone", e.querySelector("head").appendChild(t)
						}
					}(), s = t.cloneNode(!1), c = s.style, s.addEventListener("load", (function() {
						var t = s.currentSrc || s.src;
						t && t != l && (s.src = l, s.srcset = "")
					})), n.rC(s, d.loadedClass), n.rC(s, d.lazyClass), n.rC(s, d.autosizesClass), n.aC(s, d.loadingClass), n.aC(s, i), ["data-parent-fit", "data-parent-container", "data-object-fit-polyfilled", d.srcsetAttr, d.srcAttr].forEach((function(t) {
						s.removeAttribute(t)
					})), s.src = l, s.srcset = "", c.backgroundRepeat = "no-repeat", c.backgroundPosition = r.position, c.backgroundSize = r.fit, s.setAttribute("data-position", o.style.position), s.setAttribute("data-visibility", o.style.visibility), o.style.visibility = "hidden", o.style.position = "absolute", t.setAttribute("data-parent-fit", r.fit), t.setAttribute("data-parent-container", "prev"), t.setAttribute("data-object-fit-polyfilled", ""), t._objectFitPolyfilledDisplay = s, a.insertBefore(s, o), t._lazysizesParentFit && delete t._lazysizesParentFit, t.complete && f()
			}))
		}
		if (!a || !(a && "objectPosition" in o)) {
			var h = function(t) {
				if (t.detail.instance == n) {
					var e = t.target,
						r = function(t) {
							var e = (getComputedStyle(t, null) || {}).fontFamily || "",
								n = e.match(s) || "",
								r = n && e.match(c) || "";
							return r && (r = r[1]), {
								fit: n && n[1] || "",
								position: d[r] || r || "center"
							}
						}(e);
					return !(!r.fit || a && "center" == r.position) && (f(e, r), !0)
				}
			};
			t.addEventListener("lazybeforesizes", (function(t) {
				if (t.detail.instance == n) {
					var e = t.target;
					null == e.getAttribute("data-object-fit-polyfilled") || e._objectFitPolyfilledDisplay || h(t) || n.rAF((function() {
						e.removeAttribute("data-object-fit-polyfilled")
					}))
				}
			})), t.addEventListener("lazyunveilread", h, !0), r && r.detail && h(r)
		}
	}))
}, function(t, e, n) {
	var r, i, o;
	! function(a, s) {
		if (a) {
			s = s.bind(null, a, a.document), t.exports ? s(n(2)) : (i = [n(2)], void 0 === (o = "function" == typeof(r = s) ? r.apply(e, i) : r) || (t.exports = o))
		}
	}("undefined" != typeof window ? window : 0, (function(t, e, n) {
		"use strict";
		if (t.addEventListener) {
			var r = /\s+(\d+)(w|h)\s+(\d+)(w|h)/,
				i = /parent-fit["']*\s*:\s*["']*(contain|cover|width)/,
				o = /parent-container["']*\s*:\s*["']*(.+?)(?=(\s|$|,|'|"|;))/,
				a = /^picture$/i,
				s = n.cfg,
				c = {
					getParent: function(e, n) {
						var r = e,
							i = e.parentNode;
						return n && "prev" != n || !i || !a.test(i.nodeName || "") || (i = i.parentNode), "self" != n && (r = "prev" == n ? e.previousElementSibling : n && (i.closest || t.jQuery) && (i.closest ? i.closest(n) : jQuery(i).closest(n)[0]) || i), r
					},
					getFit: function(t) {
						var e, n, r = getComputedStyle(t, null) || {},
							a = r.content || r.fontFamily,
							s = {
								fit: t._lazysizesParentFit || t.getAttribute("data-parent-fit")
							};
						return !s.fit && a && (e = a.match(i)) && (s.fit = e[1]), s.fit ? (!(n = t._lazysizesParentContainer || t.getAttribute("data-parent-container")) && a && (e = a.match(o)) && (n = e[1]), s.parent = c.getParent(t, n)) : s.fit = r.objectFit, s
					},
					getImageRatio: function(e) {
						var n, i, o, c, l, u, d, f = e.parentNode,
							h = f && a.test(f.nodeName || "") ? f.querySelectorAll("source, img") : [e];
						for (n = 0; n < h.length; n++)
							if (i = (e = h[n]).getAttribute(s.srcsetAttr) || e.getAttribute("srcset") || e.getAttribute("data-pfsrcset") || e.getAttribute("data-risrcset") || "", o = e._lsMedia || e.getAttribute("media"), o = s.customMedia[e.getAttribute("data-media") || o] || o, i && (!o || (t.matchMedia && matchMedia(o) || {}).matches)) {
								(c = parseFloat(e.getAttribute("data-aspectratio"))) || ((l = i.match(r)) ? "w" == l[2] ? (u = l[1], d = l[3]) : (u = l[3], d = l[1]) : (u = e.getAttribute("width"), d = e.getAttribute("height")), c = u / d);
								break
							} return c
					},
					calculateSize: function(t, e) {
						var n, r, i, o = this.getFit(t),
							a = o.fit,
							s = o.parent;
						return "width" == a || ("contain" == a || "cover" == a) && (r = this.getImageRatio(t)) ? (s ? e = s.clientWidth : s = t, i = e, "width" == a ? i = e : (n = e / s.clientHeight) && ("cover" == a && n < r || "contain" == a && n > r) && (i = e * (r / n)), i) : e
					}
				};
			n.parentFit = c, e.addEventListener("lazybeforesizes", (function(t) {
				if (!t.defaultPrevented && t.detail.instance == n) {
					var e = t.target;
					t.detail.width = c.calculateSize(e, t.detail.width)
				}
			}))
		}
	}))
}, function(t, e, n) {
	var r, i, o;
	! function(a, s) {
		s = s.bind(null, a, a.document), t.exports ? s(n(2)) : (i = [n(2)], void 0 === (o = "function" == typeof(r = s) ? r.apply(e, i) : r) || (t.exports = o))
	}(window, (function(t, e, n) {
		"use strict";
		var r, i, o = n.cfg,
			a = {
				string: 1,
				number: 1
			},
			s = /^\-*\+*\d+\.*\d*$/,
			c = /^picture$/i,
			l = /\s*\{\s*width\s*\}\s*/i,
			u = /\s*\{\s*height\s*\}\s*/i,
			d = /\s*\{\s*([a-z0-9]+)\s*\}\s*/gi,
			f = /^\[.*\]|\{.*\}$/,
			h = /^(?:auto|\d+(px)?)$/,
			p = e.createElement("a"),
			g = e.createElement("img"),
			v = "srcset" in g && !("sizes" in g),
			m = !!t.HTMLPictureElement && !v;

		function y(t, n, o) {
			var s = 0,
				c = 0,
				f = o;
			if (t) {
				if ("container" === n.ratio) {
					for (s = f.scrollWidth, c = f.scrollHeight; !(s && c || f === e);) s = (f = f.parentNode).scrollWidth, c = f.scrollHeight;
					s && c && (n.ratio = n.traditionalRatio ? c / s : s / c)
				}
				var h, g, m;
				h = t, g = n, (m = []).srcset = [], g.absUrl && (p.setAttribute("href", h), h = p.href), h = ((g.prefix || "") + h + (g.postfix || "")).replace(d, (function(t, e) {
					return a[typeof g[e]] ? g[e] : t
				})), g.widths.forEach((function(t) {
					var e = g.widthmap[t] || t,
						n = g.aspectratio || g.ratio,
						r = !g.aspectratio && i.traditionalRatio,
						o = {
							u: h.replace(l, e).replace(u, n ? r ? Math.round(t * n) : Math.round(t / n) : ""),
							w: t
						};
					m.push(o), m.srcset.push(o.c = o.u + " " + t + "w")
				})), (t = m).isPicture = n.isPicture, v && "IMG" == o.nodeName.toUpperCase() ? o.removeAttribute(r.srcsetAttr) : o.setAttribute(r.srcsetAttr, t.srcset.join(", ")), Object.defineProperty(o, "_lazyrias", {
					value: t,
					writable: !0
				})
			}
		}

		function b(e, r) {
			var o = function(e, n) {
				var r, o, a, l, u = t.getComputedStyle(e);
				for (r in o = e.parentNode, l = {
						isPicture: !(!o || !c.test(o.nodeName || ""))
					}, a = function(t, n) {
						var r = e.getAttribute("data-" + t);
						if (!r) {
							var o = u.getPropertyValue("--ls-" + t);
							o && (r = o.trim())
						}
						if (r) {
							if ("true" == r) r = !0;
							else if ("false" == r) r = !1;
							else if (s.test(r)) r = parseFloat(r);
							else if ("function" == typeof i[t]) r = i[t](e, r);
							else if (f.test(r)) try {
								r = JSON.parse(r)
							} catch (t) {}
							l[t] = r
						} else t in i && "function" != typeof i[t] ? l[t] = i[t] : n && "function" == typeof i[t] && (l[t] = i[t](e, r))
					}, i) a(r);
				return n.replace(d, (function(t, e) {
					e in l || a(e, !0)
				})), l
			}(e, r);
			return i.modifyOptions.call(e, {
				target: e,
				details: o,
				detail: o
			}), n.fire(e, "lazyriasmodifyoptions", o), o
		}

		function w(t) {
			return t.getAttribute(t.getAttribute("data-srcattr") || i.srcAttr) || t.getAttribute(r.srcsetAttr) || t.getAttribute(r.srcAttr) || t.getAttribute("data-pfsrcset") || ""
		}! function() {
			var t, e = {
				prefix: "",
				postfix: "",
				srcAttr: "data-src",
				absUrl: !1,
				modifyOptions: function() {},
				widthmap: {},
				ratio: !1,
				traditionalRatio: !1,
				aspectratio: !1
			};
			for (t in (r = n && n.cfg).supportsType || (r.supportsType = function(t) {
					return !t
				}), r.rias || (r.rias = {}), "widths" in (i = r.rias) || (i.widths = [], function(t) {
					for (var e, n = 0; !e || e < 3e3;)(n += 5) > 30 && (n += 1), e = 36 * n, t.push(e)
				}(i.widths)), e) t in i || (i[t] = e[t])
		}(), addEventListener("lazybeforesizes", (function(t) {
			var e, o, a, s, c, u, d, f, p, g, v, _, A;
			if (t.detail.instance == n && (e = t.target, t.detail.dataAttr && !t.defaultPrevented && !i.disabled && (p = e.getAttribute(r.sizesAttr) || e.getAttribute("sizes")) && h.test(p))) {
				if (a = b(e, o = w(e)), v = l.test(a.prefix) || l.test(a.postfix), a.isPicture && (s = e.parentNode))
					for (u = 0, d = (c = s.getElementsByTagName("source")).length; u < d; u++)(v || l.test(f = w(c[u]))) && (y(f, a, c[u]), _ = !0);
				v || l.test(o) ? (y(o, a, e), _ = !0) : _ && ((A = []).srcset = [], A.isPicture = !0, Object.defineProperty(e, "_lazyrias", {
					value: A,
					writable: !0
				})), _ && (m ? e.removeAttribute(r.srcAttr) : "auto" != p && (g = {
					width: parseInt(p, 10)
				}, E({
					target: e,
					detail: g
				})))
			}
		}), !0);
		var E = function() {
			var i = function(t, e) {
					return t.w - e.w
				},
				a = function(t, e) {
					var i;
					return !t._lazyrias && n.pWS && (i = n.pWS(t.getAttribute(r.srcsetAttr || ""))).length && (Object.defineProperty(t, "_lazyrias", {
						value: i,
						writable: !0
					}), e && t.parentNode && (i.isPicture = "PICTURE" == t.parentNode.nodeName.toUpperCase())), t._lazyrias
				},
				s = function(e, r) {
					var o, s, c, l, u, d;
					if ((u = e._lazyrias).isPicture && t.matchMedia)
						for (s = 0, c = (o = e.parentNode.getElementsByTagName("source")).length; s < c; s++)
							if (a(o[s]) && !o[s].getAttribute("type") && (!(l = o[s].getAttribute("media")) || (matchMedia(l) || {}).matches)) {
								u = o[s]._lazyrias;
								break
							} return (!u.w || u.w < r) && (u.w = r, u.d = function(e) {
						var r = t.devicePixelRatio || 1,
							i = n.getX && n.getX(e);
						return Math.min(i || r, 2.4, r)
					}(e), d = function(t) {
						for (var e, n, r = t.length, i = t[r - 1], o = 0; o < r; o++)
							if ((i = t[o]).d = i.w / t.w, i.d >= t.d) {
								!i.cached && (e = t[o - 1]) && e.d > t.d - .13 * Math.pow(t.d, 2.2) && (n = Math.pow(e.d - .6, 1.6), e.cached && (e.d += .15 * n), e.d + (i.d - t.d) * n > t.d && (i = e));
								break
							} return i
					}(u.sort(i))), d
				},
				c = function(i) {
					if (i.detail.instance == n) {
						var l, u = i.target;
						v || !(t.respimage || t.picturefill || o.pf) ? ("_lazyrias" in u || i.detail.dataAttr && a(u, !0)) && (l = s(u, i.detail.width)) && l.u && u._lazyrias.cur != l.u && (u._lazyrias.cur = l.u, l.cached = !0, n.rAF((function() {
							u.setAttribute(r.srcAttr, l.u), u.setAttribute("src", l.u)
						}))) : e.removeEventListener("lazybeforesizes", c)
					}
				};
			return m ? c = function() {} : addEventListener("lazybeforesizes", c), c
		}()
	}))
}, function(t, e, n) {
	var r, i, o;
	! function(a, s) {
		s = s.bind(null, a, a.document), t.exports ? s(n(2)) : (i = [n(2)], void 0 === (o = "function" == typeof(r = s) ? r.apply(e, i) : r) || (t.exports = o))
	}(window, (function(t, e, n) {
		"use strict";
		if (t.addEventListener) {
			var r = n.cfg,
				i = /\s+/g,
				o = /\s*\|\s+|\s+\|\s*/g,
				a = /^(.+?)(?:\s+\[\s*(.+?)\s*\])(?:\s+\[\s*(.+?)\s*\])?$/,
				s = /^\s*\(*\s*type\s*:\s*(.+?)\s*\)*\s*$/,
				c = /\(|\)|'/,
				l = {
					contain: 1,
					cover: 1
				},
				u = function(t, e) {
					if (e) {
						var n = e.match(s);
						n && n[1] ? t.setAttribute("type", n[1]) : t.setAttribute("media", r.customMedia[e] || e)
					}
				},
				d = function(t) {
					if (t.target._lazybgset) {
						var e = t.target,
							r = e._lazybgset,
							i = e.currentSrc || e.src;
						if (i) {
							var o = n.fire(r, "bgsetproxy", {
								src: i,
								useSrc: c.test(i) ? JSON.stringify(i) : i
							});
							o.defaultPrevented || (r.style.backgroundImage = "url(" + o.detail.useSrc + ")")
						}
						e._lazybgsetLoading && (n.fire(r, "_lazyloaded", {}, !1, !0), delete e._lazybgsetLoading)
					}
				};
			addEventListener("lazybeforeunveil", (function(t) {
				var s, c, l;
				!t.defaultPrevented && (s = t.target.getAttribute("data-bgset")) && (l = t.target, (c = e.createElement("img")).alt = "", c._lazybgsetLoading = !0, t.detail.firesLoad = !0, function(t, n, s) {
					var c = e.createElement("picture"),
						l = n.getAttribute(r.sizesAttr),
						d = n.getAttribute("data-ratio"),
						f = n.getAttribute("data-optimumx");
					n._lazybgset && n._lazybgset.parentNode == n && n.removeChild(n._lazybgset), Object.defineProperty(s, "_lazybgset", {
						value: n,
						writable: !0
					}), Object.defineProperty(n, "_lazybgset", {
						value: c,
						writable: !0
					}), t = t.replace(i, " ").split(o), c.style.display = "none", s.className = r.lazyClass, 1 != t.length || l || (l = "auto"), t.forEach((function(t) {
						var n, i = e.createElement("source");
						l && "auto" != l && i.setAttribute("sizes", l), (n = t.match(a)) ? (i.setAttribute(r.srcsetAttr, n[1]), u(i, n[2]), u(i, n[3])) : i.setAttribute(r.srcsetAttr, t), c.appendChild(i)
					})), l && (s.setAttribute(r.sizesAttr, l), n.removeAttribute(r.sizesAttr), n.removeAttribute("sizes")), f && s.setAttribute("data-optimumx", f), d && s.setAttribute("data-ratio", d), c.appendChild(s), n.appendChild(c)
				}(s, l, c), setTimeout((function() {
					n.loader.unveil(c), n.rAF((function() {
						n.fire(c, "_lazyloaded", {}, !0, !0), c.complete && d({
							target: c
						})
					}))
				})))
			})), e.addEventListener("load", d, !0), t.addEventListener("lazybeforesizes", (function(t) {
				if (t.detail.instance == n && t.target._lazybgset && t.detail.dataAttr) {
					var e = function(t) {
						var e;
						return e = (getComputedStyle(t) || {
							getPropertyValue: function() {}
						}).getPropertyValue("background-size"), !l[e] && l[t.style.backgroundSize] && (e = t.style.backgroundSize), e
					}(t.target._lazybgset);
					l[e] && (t.target._lazysizesParentFit = e, n.rAF((function() {
						t.target.setAttribute("data-parent-fit", e), t.target._lazysizesParentFit && delete t.target._lazysizesParentFit
					})))
				}
			}), !0), e.documentElement.addEventListener("lazybeforesizes", (function(t) {
				var e, r;
				!t.defaultPrevented && t.target._lazybgset && t.detail.instance == n && (t.detail.width = (e = t.target._lazybgset, r = n.gW(e, e.parentNode), (!e._lazysizesWidth || r > e._lazysizesWidth) && (e._lazysizesWidth = r), e._lazysizesWidth))
			}))
		}
	}))
}, function(t, e, n) {
	var r, i, o;
	! function(a, s) {
		if (a) {
			s = s.bind(null, a, a.document), t.exports ? s(n(2)) : (i = [n(2)], void 0 === (o = "function" == typeof(r = s) ? r.apply(e, i) : r) || (t.exports = o))
		}
	}("undefined" != typeof window ? window : 0, (function(t, e, n) {
		"use strict";
		var r, i, o, a, s, c, l, u, d, f, h, p, g, v, m, y, b = n.cfg,
			w = e.createElement("img"),
			E = "sizes" in w && "srcset" in w,
			_ = /\s+\d+h/g,
			A = (i = /\s+(\d+)(w|h)\s+(\d+)(w|h)/, o = Array.prototype.forEach, function() {
				var t = e.createElement("img"),
					r = function(t) {
						var e, n, r = t.getAttribute(b.srcsetAttr);
						r && (n = r.match(i)) && ((e = "w" == n[2] ? n[1] / n[3] : n[3] / n[1]) && t.setAttribute("data-aspectratio", e), t.setAttribute(b.srcsetAttr, r.replace(_, "")))
					},
					a = function(t) {
						if (t.detail.instance == n) {
							var e = t.target.parentNode;
							e && "PICTURE" == e.nodeName && o.call(e.getElementsByTagName("source"), r), r(t.target)
						}
					},
					s = function() {
						t.currentSrc && e.removeEventListener("lazybeforeunveil", a)
					};
				e.addEventListener("lazybeforeunveil", a), t.onload = s, t.onerror = s, t.srcset = "data:,a 1w 1h", t.complete && s()
			});
		(b.supportsType || (b.supportsType = function(t) {
			return !t
		}), t.HTMLPictureElement && E) ? !n.hasHDescriptorFix && e.msElementsFromPoint && (n.hasHDescriptorFix = !0, A()): t.picturefill || b.pf || (b.pf = function(e) {
			var n, i;
			if (!t.picturefill)
				for (n = 0, i = e.elements.length; n < i; n++) r(e.elements[n])
		}, u = function(t, e) {
			return t.w - e.w
		}, d = /^\s*\d+\.*\d*px\s*$/, s = /(([^,\s].[^\s]+)\s+(\d+)w)/g, c = /\s/, l = function(t, e, n, r) {
			a.push({
				c: e,
				u: n,
				w: 1 * r
			})
		}, h = function() {
			var t, n, i;
			h.init || (h.init = !0, addEventListener("resize", (n = e.getElementsByClassName("lazymatchmedia"), i = function() {
				var t, e;
				for (t = 0, e = n.length; t < e; t++) r(n[t])
			}, function() {
				clearTimeout(t), t = setTimeout(i, 66)
			})))
		}, p = function(e, r) {
			var i, o = e.getAttribute("srcset") || e.getAttribute(b.srcsetAttr);
			!o && r && (o = e._lazypolyfill ? e._lazypolyfill._set : e.getAttribute(b.srcAttr) || e.getAttribute("src")), e._lazypolyfill && e._lazypolyfill._set == o || (i = f(o || ""), r && e.parentNode && (i.isPicture = "PICTURE" == e.parentNode.nodeName.toUpperCase(), i.isPicture && t.matchMedia && (n.aC(e, "lazymatchmedia"), h())), i._set = o, Object.defineProperty(e, "_lazypolyfill", {
				value: i,
				writable: !0
			}))
		}, g = function(e) {
			return t.matchMedia ? (g = function(t) {
				return !t || (matchMedia(t) || {}).matches
			})(e) : !e
		}, v = function(e) {
			var r, i, o, a, s, c, l;
			if (p(a = e, !0), (s = a._lazypolyfill).isPicture)
				for (i = 0, o = (r = e.parentNode.getElementsByTagName("source")).length; i < o; i++)
					if (b.supportsType(r[i].getAttribute("type"), e) && g(r[i].getAttribute("media"))) {
						a = r[i], p(a), s = a._lazypolyfill;
						break
					} return s.length > 1 ? (l = a.getAttribute("sizes") || "", l = d.test(l) && parseInt(l, 10) || n.gW(e, e.parentNode), s.d = function(e) {
				var r = t.devicePixelRatio || 1,
					i = n.getX && n.getX(e);
				return Math.min(i || r, 2.5, r)
			}(e), !s.src || !s.w || s.w < l ? (s.w = l, c = function(t) {
				for (var e, n, r = t.length, i = t[r - 1], o = 0; o < r; o++)
					if ((i = t[o]).d = i.w / t.w, i.d >= t.d) {
						!i.cached && (e = t[o - 1]) && e.d > t.d - .13 * Math.pow(t.d, 2.2) && (n = Math.pow(e.d - .6, 1.6), e.cached && (e.d += .15 * n), e.d + (i.d - t.d) * n > t.d && (i = e));
						break
					} return i
			}(s.sort(u)), s.src = c) : c = s.src) : c = s[0], c
		}, (m = function(t) {
			if (!E || !t.parentNode || "PICTURE" == t.parentNode.nodeName.toUpperCase()) {
				var e = v(t);
				e && e.u && t._lazypolyfill.cur != e.u && (t._lazypolyfill.cur = e.u, e.cached = !0, t.setAttribute(b.srcAttr, e.u), t.setAttribute("src", e.u))
			}
		}).parse = f = function(t) {
			return a = [], (t = t.trim()).replace(_, "").replace(s, l), a.length || !t || c.test(t) || a.push({
				c: t,
				u: t,
				w: 99
			}), a
		}, r = m, b.loadedClass && b.loadingClass && (y = [], ['img[sizes$="px"][srcset].', "picture > img:not([srcset])."].forEach((function(t) {
			y.push(t + b.loadedClass), y.push(t + b.loadingClass)
		})), b.pf({
			elements: e.querySelectorAll(y.join(", "))
		})))
	}))
}, function(t, e, n) {
	var r, i;
	! function(o, a) {
		"use strict";
		void 0 === (i = "function" == typeof(r = a) ? r.call(e, n, e, t) : r) || (t.exports = i)
	}(window, (function() {
		"use strict";
		var t = function() {
			var t = window.Element.prototype;
			if (t.matches) return "matches";
			if (t.matchesSelector) return "matchesSelector";
			for (var e = ["webkit", "moz", "ms", "o"], n = 0; n < e.length; n++) {
				var r = e[n] + "MatchesSelector";
				if (t[r]) return r
			}
		}();
		return function(e, n) {
			return e[t](n)
		}
	}))
}, function(t, e, n) {
	var r, i;
	window, r = [n(17)], void 0 === (i = function(t) {
		return function(t, e) {
			"use strict";

			function n(t, e) {
				this.element = t, this.parent = e, this.create()
			}
			var r = n.prototype;
			return r.create = function() {
				this.element.style.position = "absolute", this.element.setAttribute("aria-hidden", "true"), this.x = 0, this.shift = 0
			}, r.destroy = function() {
				this.unselect(), this.element.style.position = "";
				var t = this.parent.originSide;
				this.element.style[t] = ""
			}, r.getSize = function() {
				this.size = e(this.element)
			}, r.setPosition = function(t) {
				this.x = t, this.updateTarget(), this.renderPosition(t)
			}, r.updateTarget = r.setDefaultTarget = function() {
				var t = "left" == this.parent.originSide ? "marginLeft" : "marginRight";
				this.target = this.x + this.size[t] + this.size.width * this.parent.cellAlign
			}, r.renderPosition = function(t) {
				var e = this.parent.originSide;
				this.element.style[e] = this.parent.getPositionValue(t)
			}, r.select = function() {
				this.element.classList.add("is-selected"), this.element.removeAttribute("aria-hidden")
			}, r.unselect = function() {
				this.element.classList.remove("is-selected"), this.element.setAttribute("aria-hidden", "true")
			}, r.wrapShift = function(t) {
				this.shift = t, this.renderPosition(this.x + this.parent.slideableWidth * t)
			}, r.remove = function() {
				this.element.parentNode.removeChild(this.element)
			}, n
		}(0, t)
	}.apply(e, r)) || (t.exports = i)
}, function(t, e, n) {
	var r, i;
	window, void 0 === (i = "function" == typeof(r = function() {
		"use strict";

		function t(t) {
			this.parent = t, this.isOriginLeft = "left" == t.originSide, this.cells = [], this.outerWidth = 0, this.height = 0
		}
		var e = t.prototype;
		return e.addCell = function(t) {
			if (this.cells.push(t), this.outerWidth += t.size.outerWidth, this.height = Math.max(t.size.outerHeight, this.height), 1 == this.cells.length) {
				this.x = t.x;
				var e = this.isOriginLeft ? "marginLeft" : "marginRight";
				this.firstMargin = t.size[e]
			}
		}, e.updateTarget = function() {
			var t = this.isOriginLeft ? "marginRight" : "marginLeft",
				e = this.getLastCell(),
				n = e ? e.size[t] : 0,
				r = this.outerWidth - (this.firstMargin + n);
			this.target = this.x + this.firstMargin + r * this.parent.cellAlign
		}, e.getLastCell = function() {
			return this.cells[this.cells.length - 1]
		}, e.select = function() {
			this.cells.forEach((function(t) {
				t.select()
			}))
		}, e.unselect = function() {
			this.cells.forEach((function(t) {
				t.unselect()
			}))
		}, e.getCellElements = function() {
			return this.cells.map((function(t) {
				return t.element
			}))
		}, t
	}) ? r.call(e, n, e, t) : r) || (t.exports = i)
}, function(t, e, n) {
	var r, i;
	window, r = [n(4)], void 0 === (i = function(t) {
		return function(t, e) {
			"use strict";
			var n = {
				startAnimation: function() {
					this.isAnimating || (this.isAnimating = !0, this.restingFrames = 0, this.animate())
				},
				animate: function() {
					this.applyDragForce(), this.applySelectedAttraction();
					var t = this.x;
					if (this.integratePhysics(), this.positionSlider(), this.settle(t), this.isAnimating) {
						var e = this;
						requestAnimationFrame((function() {
							e.animate()
						}))
					}
				},
				positionSlider: function() {
					var t = this.x;
					this.options.wrapAround && this.cells.length > 1 && (t = e.modulo(t, this.slideableWidth), t -= this.slideableWidth, this.shiftWrapCells(t)), this.setTranslateX(t, this.isAnimating), this.dispatchScrollEvent()
				},
				setTranslateX: function(t, e) {
					t += this.cursorPosition, t = this.options.rightToLeft ? -t : t;
					var n = this.getPositionValue(t);
					this.slider.style.transform = e ? "translate3d(" + n + ",0,0)" : "translateX(" + n + ")"
				},
				dispatchScrollEvent: function() {
					var t = this.slides[0];
					if (t) {
						var e = -this.x - t.target,
							n = e / this.slidesWidth;
						this.dispatchEvent("scroll", null, [n, e])
					}
				},
				positionSliderAtSelected: function() {
					this.cells.length && (this.x = -this.selectedSlide.target, this.velocity = 0, this.positionSlider())
				},
				getPositionValue: function(t) {
					return this.options.percentPosition ? .01 * Math.round(t / this.size.innerWidth * 1e4) + "%" : Math.round(t) + "px"
				},
				settle: function(t) {
					this.isPointerDown || Math.round(100 * this.x) != Math.round(100 * t) || this.restingFrames++, this.restingFrames > 2 && (this.isAnimating = !1, delete this.isFreeScrolling, this.positionSlider(), this.dispatchEvent("settle", null, [this.selectedIndex]))
				},
				shiftWrapCells: function(t) {
					var e = this.cursorPosition + t;
					this._shiftCells(this.beforeShiftCells, e, -1);
					var n = this.size.innerWidth - (t + this.slideableWidth + this.cursorPosition);
					this._shiftCells(this.afterShiftCells, n, 1)
				},
				_shiftCells: function(t, e, n) {
					for (var r = 0; r < t.length; r++) {
						var i = t[r],
							o = e > 0 ? n : 0;
						i.wrapShift(o), e -= i.size.outerWidth
					}
				},
				_unshiftCells: function(t) {
					if (t && t.length)
						for (var e = 0; e < t.length; e++) t[e].wrapShift(0)
				},
				integratePhysics: function() {
					this.x += this.velocity, this.velocity *= this.getFrictionFactor()
				},
				applyForce: function(t) {
					this.velocity += t
				},
				getFrictionFactor: function() {
					return 1 - this.options[this.isFreeScrolling ? "freeScrollFriction" : "friction"]
				},
				getRestingPosition: function() {
					return this.x + this.velocity / (1 - this.getFrictionFactor())
				},
				applyDragForce: function() {
					if (this.isDraggable && this.isPointerDown) {
						var t = this.dragX - this.x - this.velocity;
						this.applyForce(t)
					}
				},
				applySelectedAttraction: function() {
					if ((!this.isDraggable || !this.isPointerDown) && !this.isFreeScrolling && this.slides.length) {
						var t = (-1 * this.selectedSlide.target - this.x) * this.options.selectedAttraction;
						this.applyForce(t)
					}
				}
			};
			return n
		}(0, t)
	}.apply(e, r)) || (t.exports = i)
}, function(t, e, n) {
	var r, i;
	! function(o, a) {
		r = [n(7), n(41), n(4)], void 0 === (i = function(t, e, n) {
			return function(t, e, n, r) {
				"use strict";
				r.extend(e.defaults, {
					draggable: ">1",
					dragThreshold: 3
				}), e.createMethods.push("_createDrag");
				var i = e.prototype;
				r.extend(i, n.prototype), i._touchActionValue = "pan-y";
				var o = "createTouch" in document,
					a = !1;
				i._createDrag = function() {
					this.on("activate", this.onActivateDrag), this.on("uiChange", this._uiChangeDrag), this.on("deactivate", this.onDeactivateDrag), this.on("cellChange", this.updateDraggable), o && !a && (t.addEventListener("touchmove", (function() {})), a = !0)
				}, i.onActivateDrag = function() {
					this.handles = [this.viewport], this.bindHandles(), this.updateDraggable()
				}, i.onDeactivateDrag = function() {
					this.unbindHandles(), this.element.classList.remove("is-draggable")
				}, i.updateDraggable = function() {
					">1" == this.options.draggable ? this.isDraggable = this.slides.length > 1 : this.isDraggable = this.options.draggable, this.isDraggable ? this.element.classList.add("is-draggable") : this.element.classList.remove("is-draggable")
				}, i.bindDrag = function() {
					this.options.draggable = !0, this.updateDraggable()
				}, i.unbindDrag = function() {
					this.options.draggable = !1, this.updateDraggable()
				}, i._uiChangeDrag = function() {
					delete this.isFreeScrolling
				}, i.pointerDown = function(e, n) {
					this.isDraggable ? this.okayPointerDown(e) && (this._pointerDownPreventDefault(e), this.pointerDownFocus(e), document.activeElement != this.element && this.pointerDownBlur(), this.dragX = this.x, this.viewport.classList.add("is-pointer-down"), this.pointerDownScroll = c(), t.addEventListener("scroll", this), this._pointerDownDefault(e, n)) : this._pointerDownDefault(e, n)
				}, i._pointerDownDefault = function(t, e) {
					this.pointerDownPointer = {
						pageX: e.pageX,
						pageY: e.pageY
					}, this._bindPostStartEvents(t), this.dispatchEvent("pointerDown", t, [e])
				};
				var s = {
					INPUT: !0,
					TEXTAREA: !0,
					SELECT: !0
				};

				function c() {
					return {
						x: t.pageXOffset,
						y: t.pageYOffset
					}
				}
				return i.pointerDownFocus = function(t) {
					s[t.target.nodeName] || this.focus()
				}, i._pointerDownPreventDefault = function(t) {
					var e = "touchstart" == t.type,
						n = "touch" == t.pointerType,
						r = s[t.target.nodeName];
					e || n || r || t.preventDefault()
				}, i.hasDragStarted = function(t) {
					return Math.abs(t.x) > this.options.dragThreshold
				}, i.pointerUp = function(t, e) {
					delete this.isTouchScrolling, this.viewport.classList.remove("is-pointer-down"), this.dispatchEvent("pointerUp", t, [e]), this._dragPointerUp(t, e)
				}, i.pointerDone = function() {
					t.removeEventListener("scroll", this), delete this.pointerDownScroll
				}, i.dragStart = function(e, n) {
					this.isDraggable && (this.dragStartPosition = this.x, this.startAnimation(), t.removeEventListener("scroll", this), this.dispatchEvent("dragStart", e, [n]))
				}, i.pointerMove = function(t, e) {
					var n = this._dragPointerMove(t, e);
					this.dispatchEvent("pointerMove", t, [e, n]), this._dragMove(t, e, n)
				}, i.dragMove = function(t, e, n) {
					if (this.isDraggable) {
						t.preventDefault(), this.previousDragX = this.dragX;
						var r = this.options.rightToLeft ? -1 : 1;
						this.options.wrapAround && (n.x = n.x % this.slideableWidth);
						var i = this.dragStartPosition + n.x * r;
						if (!this.options.wrapAround && this.slides.length) {
							var o = Math.max(-this.slides[0].target, this.dragStartPosition);
							i = i > o ? .5 * (i + o) : i;
							var a = Math.min(-this.getLastSlide().target, this.dragStartPosition);
							i = i < a ? .5 * (i + a) : i
						}
						this.dragX = i, this.dragMoveTime = new Date, this.dispatchEvent("dragMove", t, [e, n])
					}
				}, i.dragEnd = function(t, e) {
					if (this.isDraggable) {
						this.options.freeScroll && (this.isFreeScrolling = !0);
						var n = this.dragEndRestingSelect();
						if (this.options.freeScroll && !this.options.wrapAround) {
							var r = this.getRestingPosition();
							this.isFreeScrolling = -r > this.slides[0].target && -r < this.getLastSlide().target
						} else this.options.freeScroll || n != this.selectedIndex || (n += this.dragEndBoostSelect());
						delete this.previousDragX, this.isDragSelect = this.options.wrapAround, this.select(n), delete this.isDragSelect, this.dispatchEvent("dragEnd", t, [e])
					}
				}, i.dragEndRestingSelect = function() {
					var t = this.getRestingPosition(),
						e = Math.abs(this.getSlideDistance(-t, this.selectedIndex)),
						n = this._getClosestResting(t, e, 1),
						r = this._getClosestResting(t, e, -1);
					return n.distance < r.distance ? n.index : r.index
				}, i._getClosestResting = function(t, e, n) {
					for (var r = this.selectedIndex, i = 1 / 0, o = this.options.contain && !this.options.wrapAround ? function(t, e) {
							return t <= e
						} : function(t, e) {
							return t < e
						}; o(e, i) && (r += n, i = e, null !== (e = this.getSlideDistance(-t, r)));) e = Math.abs(e);
					return {
						distance: i,
						index: r - n
					}
				}, i.getSlideDistance = function(t, e) {
					var n = this.slides.length,
						i = this.options.wrapAround && n > 1,
						o = i ? r.modulo(e, n) : e,
						a = this.slides[o];
					if (!a) return null;
					var s = i ? this.slideableWidth * Math.floor(e / n) : 0;
					return t - (a.target + s)
				}, i.dragEndBoostSelect = function() {
					if (void 0 === this.previousDragX || !this.dragMoveTime || new Date - this.dragMoveTime > 100) return 0;
					var t = this.getSlideDistance(-this.dragX, this.selectedIndex),
						e = this.previousDragX - this.dragX;
					return t > 0 && e > 0 ? 1 : t < 0 && e < 0 ? -1 : 0
				}, i.staticClick = function(t, e) {
					var n = this.getParentCell(t.target),
						r = n && n.element,
						i = n && this.cells.indexOf(n);
					this.dispatchEvent("staticClick", t, [e, r, i])
				}, i.onscroll = function() {
					var t = c(),
						e = this.pointerDownScroll.x - t.x,
						n = this.pointerDownScroll.y - t.y;
					(Math.abs(e) > 3 || Math.abs(n) > 3) && this._pointerDone()
				}, e
			}(o, t, e, n)
		}.apply(e, r)) || (t.exports = i)
	}(window)
}, function(t, e, n) {
	var r, i;
	/*!
	 * Unidragger v2.3.1
	 * Draggable base class
	 * MIT license
	 */
	! function(o, a) {
		r = [n(13)], void 0 === (i = function(t) {
			return function(t, e) {
				"use strict";

				function n() {}
				var r = n.prototype = Object.create(e.prototype);
				r.bindHandles = function() {
					this._bindHandles(!0)
				}, r.unbindHandles = function() {
					this._bindHandles(!1)
				}, r._bindHandles = function(e) {
					for (var n = (e = void 0 === e || e) ? "addEventListener" : "removeEventListener", r = e ? this._touchActionValue : "", i = 0; i < this.handles.length; i++) {
						var o = this.handles[i];
						this._bindStartEvent(o, e), o[n]("click", this), t.PointerEvent && (o.style.touchAction = r)
					}
				}, r._touchActionValue = "none", r.pointerDown = function(t, e) {
					this.okayPointerDown(t) && (this.pointerDownPointer = {
						pageX: e.pageX,
						pageY: e.pageY
					}, t.preventDefault(), this.pointerDownBlur(), this._bindPostStartEvents(t), this.emitEvent("pointerDown", [t, e]))
				};
				var i = {
						TEXTAREA: !0,
						INPUT: !0,
						SELECT: !0,
						OPTION: !0
					},
					o = {
						radio: !0,
						checkbox: !0,
						button: !0,
						submit: !0,
						image: !0,
						file: !0
					};
				return r.okayPointerDown = function(t) {
					var e = i[t.target.nodeName],
						n = o[t.target.type],
						r = !e || n;
					return r || this._pointerReset(), r
				}, r.pointerDownBlur = function() {
					var t = document.activeElement;
					t && t.blur && t != document.body && t.blur()
				}, r.pointerMove = function(t, e) {
					var n = this._dragPointerMove(t, e);
					this.emitEvent("pointerMove", [t, e, n]), this._dragMove(t, e, n)
				}, r._dragPointerMove = function(t, e) {
					var n = {
						x: e.pageX - this.pointerDownPointer.pageX,
						y: e.pageY - this.pointerDownPointer.pageY
					};
					return !this.isDragging && this.hasDragStarted(n) && this._dragStart(t, e), n
				}, r.hasDragStarted = function(t) {
					return Math.abs(t.x) > 3 || Math.abs(t.y) > 3
				}, r.pointerUp = function(t, e) {
					this.emitEvent("pointerUp", [t, e]), this._dragPointerUp(t, e)
				}, r._dragPointerUp = function(t, e) {
					this.isDragging ? this._dragEnd(t, e) : this._staticClick(t, e)
				}, r._dragStart = function(t, e) {
					this.isDragging = !0, this.isPreventingClicks = !0, this.dragStart(t, e)
				}, r.dragStart = function(t, e) {
					this.emitEvent("dragStart", [t, e])
				}, r._dragMove = function(t, e, n) {
					this.isDragging && this.dragMove(t, e, n)
				}, r.dragMove = function(t, e, n) {
					t.preventDefault(), this.emitEvent("dragMove", [t, e, n])
				}, r._dragEnd = function(t, e) {
					this.isDragging = !1, setTimeout(function() {
						delete this.isPreventingClicks
					}.bind(this)), this.dragEnd(t, e)
				}, r.dragEnd = function(t, e) {
					this.emitEvent("dragEnd", [t, e])
				}, r.onclick = function(t) {
					this.isPreventingClicks && t.preventDefault()
				}, r._staticClick = function(t, e) {
					this.isIgnoringMouseUp && "mouseup" == t.type || (this.staticClick(t, e), "mouseup" != t.type && (this.isIgnoringMouseUp = !0, setTimeout(function() {
						delete this.isIgnoringMouseUp
					}.bind(this), 400)))
				}, r.staticClick = function(t, e) {
					this.emitEvent("staticClick", [t, e])
				}, n.getPointerPoint = e.getPointerPoint, n
			}(o, t)
		}.apply(e, r)) || (t.exports = i)
	}(window)
}, function(t, e, n) {
	var r, i;
	window, r = [n(7), n(13), n(4)], void 0 === (i = function(t, e, n) {
		return function(t, e, n, r) {
			"use strict";
			var i = "http://www.w3.org/2000/svg";

			function o(t, e) {
				this.direction = t, this.parent = e, this._create()
			}
			o.prototype = Object.create(n.prototype), o.prototype._create = function() {
				this.isEnabled = !0, this.isPrevious = -1 == this.direction;
				var t = this.parent.options.rightToLeft ? 1 : -1;
				this.isLeft = this.direction == t;
				var e = this.element = document.createElement("button");
				e.className = "flickity-button flickity-prev-next-button", e.className += this.isPrevious ? " previous" : " next", e.setAttribute("type", "button"), this.disable(), e.setAttribute("aria-label", this.isPrevious ? "Previous" : "Next");
				var n = this.createSVG();
				e.appendChild(n), this.parent.on("select", this.update.bind(this)), this.on("pointerDown", this.parent.childUIPointerDown.bind(this.parent))
			}, o.prototype.activate = function() {
				this.bindStartEvent(this.element), this.element.addEventListener("click", this), this.parent.element.appendChild(this.element)
			}, o.prototype.deactivate = function() {
				this.parent.element.removeChild(this.element), this.unbindStartEvent(this.element), this.element.removeEventListener("click", this)
			}, o.prototype.createSVG = function() {
				var t = document.createElementNS(i, "svg");
				t.setAttribute("class", "flickity-button-icon"), t.setAttribute("viewBox", "0 0 100 100");
				var e, n = document.createElementNS(i, "path"),
					r = "string" == typeof(e = this.parent.options.arrowShape) ? e : "M " + e.x0 + ",50 L " + e.x1 + "," + (e.y1 + 50) + " L " + e.x2 + "," + (e.y2 + 50) + " L " + e.x3 + ",50  L " + e.x2 + "," + (50 - e.y2) + " L " + e.x1 + "," + (50 - e.y1) + " Z";
				return n.setAttribute("d", r), n.setAttribute("class", "arrow"), this.isLeft || n.setAttribute("transform", "translate(100, 100) rotate(180) "), t.appendChild(n), t
			}, o.prototype.handleEvent = r.handleEvent, o.prototype.onclick = function() {
				if (this.isEnabled) {
					this.parent.uiChange();
					var t = this.isPrevious ? "previous" : "next";
					this.parent[t]()
				}
			}, o.prototype.enable = function() {
				this.isEnabled || (this.element.disabled = !1, this.isEnabled = !0)
			}, o.prototype.disable = function() {
				this.isEnabled && (this.element.disabled = !0, this.isEnabled = !1)
			}, o.prototype.update = function() {
				var t = this.parent.slides;
				if (this.parent.options.wrapAround && t.length > 1) this.enable();
				else {
					var e = t.length ? t.length - 1 : 0,
						n = this.isPrevious ? 0 : e;
					this[this.parent.selectedIndex == n ? "disable" : "enable"]()
				}
			}, o.prototype.destroy = function() {
				this.deactivate(), this.allOff()
			}, r.extend(e.defaults, {
				prevNextButtons: !0,
				arrowShape: {
					x0: 10,
					x1: 60,
					y1: 50,
					x2: 70,
					y2: 40,
					x3: 30
				}
			}), e.createMethods.push("_createPrevNextButtons");
			var a = e.prototype;
			return a._createPrevNextButtons = function() {
				this.options.prevNextButtons && (this.prevButton = new o(-1, this), this.nextButton = new o(1, this), this.on("activate", this.activatePrevNextButtons))
			}, a.activatePrevNextButtons = function() {
				this.prevButton.activate(), this.nextButton.activate(), this.on("deactivate", this.deactivatePrevNextButtons)
			}, a.deactivatePrevNextButtons = function() {
				this.prevButton.deactivate(), this.nextButton.deactivate(), this.off("deactivate", this.deactivatePrevNextButtons)
			}, e.PrevNextButton = o, e
		}(0, t, e, n)
	}.apply(e, r)) || (t.exports = i)
}, function(t, e, n) {
	var r, i;
	window, r = [n(7), n(13), n(4)], void 0 === (i = function(t, e, n) {
		return function(t, e, n, r) {
			"use strict";

			function i(t) {
				this.parent = t, this._create()
			}
			i.prototype = Object.create(n.prototype), i.prototype._create = function() {
				this.holder = document.createElement("ol"), this.holder.className = "flickity-page-dots", this.dots = [], this.handleClick = this.onClick.bind(this), this.on("pointerDown", this.parent.childUIPointerDown.bind(this.parent))
			}, i.prototype.activate = function() {
				this.setDots(), this.holder.addEventListener("click", this.handleClick), this.bindStartEvent(this.holder), this.parent.element.appendChild(this.holder)
			}, i.prototype.deactivate = function() {
				this.holder.removeEventListener("click", this.handleClick), this.unbindStartEvent(this.holder), this.parent.element.removeChild(this.holder)
			}, i.prototype.setDots = function() {
				var t = this.parent.slides.length - this.dots.length;
				t > 0 ? this.addDots(t) : t < 0 && this.removeDots(-t)
			}, i.prototype.addDots = function(t) {
				for (var e = document.createDocumentFragment(), n = [], r = this.dots.length, i = r + t, o = r; o < i; o++) {
					var a = document.createElement("li");
					a.className = "dot", a.setAttribute("aria-label", "Page dot " + (o + 1)), e.appendChild(a), n.push(a)
				}
				this.holder.appendChild(e), this.dots = this.dots.concat(n)
			}, i.prototype.removeDots = function(t) {
				this.dots.splice(this.dots.length - t, t).forEach((function(t) {
					this.holder.removeChild(t)
				}), this)
			}, i.prototype.updateSelected = function() {
				this.selectedDot && (this.selectedDot.className = "dot", this.selectedDot.removeAttribute("aria-current")), this.dots.length && (this.selectedDot = this.dots[this.parent.selectedIndex], this.selectedDot.className = "dot is-selected", this.selectedDot.setAttribute("aria-current", "step"))
			}, i.prototype.onTap = i.prototype.onClick = function(t) {
				var e = t.target;
				if ("LI" == e.nodeName) {
					this.parent.uiChange();
					var n = this.dots.indexOf(e);
					this.parent.select(n)
				}
			}, i.prototype.destroy = function() {
				this.deactivate(), this.allOff()
			}, e.PageDots = i, r.extend(e.defaults, {
				pageDots: !0
			}), e.createMethods.push("_createPageDots");
			var o = e.prototype;
			return o._createPageDots = function() {
				this.options.pageDots && (this.pageDots = new i(this), this.on("activate", this.activatePageDots), this.on("select", this.updateSelectedPageDots), this.on("cellChange", this.updatePageDots), this.on("resize", this.updatePageDots), this.on("deactivate", this.deactivatePageDots))
			}, o.activatePageDots = function() {
				this.pageDots.activate()
			}, o.updateSelectedPageDots = function() {
				this.pageDots.updateSelected()
			}, o.updatePageDots = function() {
				this.pageDots.setDots()
			}, o.deactivatePageDots = function() {
				this.pageDots.deactivate()
			}, e.PageDots = i, e
		}(0, t, e, n)
	}.apply(e, r)) || (t.exports = i)
}, function(t, e, n) {
	var r, i;
	window, r = [n(12), n(4), n(7)], void 0 === (i = function(t, e, n) {
		return function(t, e, n) {
			"use strict";

			function r(t) {
				this.parent = t, this.state = "stopped", this.onVisibilityChange = this.visibilityChange.bind(this), this.onVisibilityPlay = this.visibilityPlay.bind(this)
			}
			r.prototype = Object.create(t.prototype), r.prototype.play = function() {
				"playing" != this.state && (document.hidden ? document.addEventListener("visibilitychange", this.onVisibilityPlay) : (this.state = "playing", document.addEventListener("visibilitychange", this.onVisibilityChange), this.tick()))
			}, r.prototype.tick = function() {
				if ("playing" == this.state) {
					var t = this.parent.options.autoPlay;
					t = "number" == typeof t ? t : 3e3;
					var e = this;
					this.clear(), this.timeout = setTimeout((function() {
						e.parent.next(!0), e.tick()
					}), t)
				}
			}, r.prototype.stop = function() {
				this.state = "stopped", this.clear(), document.removeEventListener("visibilitychange", this.onVisibilityChange)
			}, r.prototype.clear = function() {
				clearTimeout(this.timeout)
			}, r.prototype.pause = function() {
				"playing" == this.state && (this.state = "paused", this.clear())
			}, r.prototype.unpause = function() {
				"paused" == this.state && this.play()
			}, r.prototype.visibilityChange = function() {
				this[document.hidden ? "pause" : "unpause"]()
			}, r.prototype.visibilityPlay = function() {
				this.play(), document.removeEventListener("visibilitychange", this.onVisibilityPlay)
			}, e.extend(n.defaults, {
				pauseAutoPlayOnHover: !0
			}), n.createMethods.push("_createPlayer");
			var i = n.prototype;
			return i._createPlayer = function() {
				this.player = new r(this), this.on("activate", this.activatePlayer), this.on("uiChange", this.stopPlayer), this.on("pointerDown", this.stopPlayer), this.on("deactivate", this.deactivatePlayer)
			}, i.activatePlayer = function() {
				this.options.autoPlay && (this.player.play(), this.element.addEventListener("mouseenter", this))
			}, i.playPlayer = function() {
				this.player.play()
			}, i.stopPlayer = function() {
				this.player.stop()
			}, i.pausePlayer = function() {
				this.player.pause()
			}, i.unpausePlayer = function() {
				this.player.unpause()
			}, i.deactivatePlayer = function() {
				this.player.stop(), this.element.removeEventListener("mouseenter", this)
			}, i.onmouseenter = function() {
				this.options.pauseAutoPlayOnHover && (this.player.pause(), this.element.addEventListener("mouseleave", this))
			}, i.onmouseleave = function() {
				this.player.unpause(), this.element.removeEventListener("mouseleave", this)
			}, n.Player = r, n
		}(t, e, n)
	}.apply(e, r)) || (t.exports = i)
}, function(t, e, n) {
	var r, i;
	window, r = [n(7), n(4)], void 0 === (i = function(t, e) {
		return function(t, e, n) {
			"use strict";
			var r = e.prototype;
			return r.insert = function(t, e) {
				var n = this._makeCells(t);
				if (n && n.length) {
					var r = this.cells.length;
					e = void 0 === e ? r : e;
					var i = function(t) {
							var e = document.createDocumentFragment();
							return t.forEach((function(t) {
								e.appendChild(t.element)
							})), e
						}(n),
						o = e == r;
					if (o) this.slider.appendChild(i);
					else {
						var a = this.cells[e].element;
						this.slider.insertBefore(i, a)
					}
					if (0 === e) this.cells = n.concat(this.cells);
					else if (o) this.cells = this.cells.concat(n);
					else {
						var s = this.cells.splice(e, r - e);
						this.cells = this.cells.concat(n).concat(s)
					}
					this._sizeCells(n), this.cellChange(e, !0)
				}
			}, r.append = function(t) {
				this.insert(t, this.cells.length)
			}, r.prepend = function(t) {
				this.insert(t, 0)
			}, r.remove = function(t) {
				var e = this.getCells(t);
				if (e && e.length) {
					var r = this.cells.length - 1;
					e.forEach((function(t) {
						t.remove();
						var e = this.cells.indexOf(t);
						r = Math.min(e, r), n.removeFrom(this.cells, t)
					}), this), this.cellChange(r, !0)
				}
			}, r.cellSizeChange = function(t) {
				var e = this.getCell(t);
				if (e) {
					e.getSize();
					var n = this.cells.indexOf(e);
					this.cellChange(n)
				}
			}, r.cellChange = function(t, e) {
				var n = this.selectedElement;
				this._positionCells(t), this._getWrapShiftCells(), this.setGallerySize();
				var r = this.getCell(n);
				r && (this.selectedIndex = this.getCellSlideIndex(r)), this.selectedIndex = Math.min(this.slides.length - 1, this.selectedIndex), this.emitEvent("cellChange", [t]), this.select(this.selectedIndex), e && this.positionSliderAtSelected()
			}, e
		}(0, t, e)
	}.apply(e, r)) || (t.exports = i)
}, function(t, e, n) {
	var r, i;
	window, r = [n(7), n(4)], void 0 === (i = function(t, e) {
		return function(t, e, n) {
			"use strict";
			e.createMethods.push("_createLazyload");
			var r = e.prototype;

			function i(t, e) {
				this.img = t, this.flickity = e, this.load()
			}
			return r._createLazyload = function() {
				this.on("select", this.lazyLoad)
			}, r.lazyLoad = function() {
				var t = this.options.lazyLoad;
				if (t) {
					var e = "number" == typeof t ? t : 0,
						r = this.getAdjacentCellElements(e),
						o = [];
					r.forEach((function(t) {
						var e = function(t) {
							if ("IMG" == t.nodeName) {
								var e = t.getAttribute("data-flickity-lazyload"),
									r = t.getAttribute("data-flickity-lazyload-src"),
									i = t.getAttribute("data-flickity-lazyload-srcset");
								if (e || r || i) return [t]
							}
							var o = t.querySelectorAll("img[data-flickity-lazyload], img[data-flickity-lazyload-src], img[data-flickity-lazyload-srcset]");
							return n.makeArray(o)
						}(t);
						o = o.concat(e)
					})), o.forEach((function(t) {
						new i(t, this)
					}), this)
				}
			}, i.prototype.handleEvent = n.handleEvent, i.prototype.load = function() {
				this.img.addEventListener("load", this), this.img.addEventListener("error", this);
				var t = this.img.getAttribute("data-flickity-lazyload") || this.img.getAttribute("data-flickity-lazyload-src"),
					e = this.img.getAttribute("data-flickity-lazyload-srcset");
				this.img.src = t, e && this.img.setAttribute("srcset", e), this.img.removeAttribute("data-flickity-lazyload"), this.img.removeAttribute("data-flickity-lazyload-src"), this.img.removeAttribute("data-flickity-lazyload-srcset")
			}, i.prototype.onload = function(t) {
				this.complete(t, "flickity-lazyloaded")
			}, i.prototype.onerror = function(t) {
				this.complete(t, "flickity-lazyerror")
			}, i.prototype.complete = function(t, e) {
				this.img.removeEventListener("load", this), this.img.removeEventListener("error", this);
				var n = this.flickity.getParentCell(this.img),
					r = n && n.element;
				this.flickity.cellSizeChange(r), this.img.classList.add(e), this.flickity.dispatchEvent("lazyLoad", t, r)
			}, e.LazyLoader = i, e
		}(0, t, e)
	}.apply(e, r)) || (t.exports = i)
}, function(t, e) {
	t.exports = function(t) {
		if (Array.isArray(t)) return t
	}
}, function(t, e) {
	t.exports = function(t, e) {
		if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) {
			var n = [],
				r = !0,
				i = !1,
				o = void 0;
			try {
				for (var a, s = t[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0);
			} catch (t) {
				i = !0, o = t
			} finally {
				try {
					r || null == s.return || s.return()
				} finally {
					if (i) throw o
				}
			}
			return n
		}
	}
}, function(t, e) {
	t.exports = function() {
		throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
	}
}, function(t, e) {
	t.exports = function(t, e) {
		if (null == t) return {};
		var n, r, i = {},
			o = Object.keys(t);
		for (r = 0; r < o.length; r++) n = o[r], e.indexOf(n) >= 0 || (i[n] = t[n]);
		return i
	}
}, function(t, e, n) {
	"use strict";
	var r;
	/**
	 * @link https://github.com/gajus/sister for the canonical source repository
	 * @license https://github.com/gajus/sister/blob/master/LICENSE BSD 3-Clause
	 */
	r = function() {
		var t = {},
			e = {};
		return t.on = function(t, n) {
			var r = {
				name: t,
				handler: n
			};
			return e[t] = e[t] || [], e[t].unshift(r), r
		}, t.off = function(t) {
			var n = e[t.name].indexOf(t); - 1 !== n && e[t.name].splice(n, 1)
		}, t.trigger = function(t, n) {
			var r, i = e[t];
			if (i)
				for (r = i.length; r--;) i[r].handler(n)
		}, t
	}, t.exports = r
}, function(t, e, n) {
	"use strict";
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var r, i = n(53),
		o = (r = i) && r.__esModule ? r : {
			default: r
		};
	e.default = function(t) {
		return new Promise((function(e) {
			if (window.YT && window.YT.Player && window.YT.Player instanceof Function) e(window.YT);
			else {
				var n = "http:" === window.location.protocol ? "http:" : "https:";
				(0, o.default)(n + "//www.youtube.com/iframe_api", (function(e) {
					e && t.trigger("error", e)
				}));
				var r = window.onYouTubeIframeAPIReady;
				window.onYouTubeIframeAPIReady = function() {
					r && r(), e(window.YT)
				}
			}
		}))
	}, t.exports = e.default
}, function(t, e) {
	function n(t, e) {
		t.onload = function() {
			this.onerror = this.onload = null, e(null, t)
		}, t.onerror = function() {
			this.onerror = this.onload = null, e(new Error("Failed to load " + this.src), t)
		}
	}

	function r(t, e) {
		t.onreadystatechange = function() {
			"complete" != this.readyState && "loaded" != this.readyState || (this.onreadystatechange = null, e(null, t))
		}
	}
	t.exports = function(t, e, i) {
		var o = document.head || document.getElementsByTagName("head")[0],
			a = document.createElement("script");
		"function" == typeof e && (i = e, e = {}), e = e || {}, i = i || function() {}, a.type = e.type || "text/javascript", a.charset = e.charset || "utf8", a.async = !("async" in e) || !!e.async, a.src = t, e.attrs && function(t, e) {
			for (var n in e) t.setAttribute(n, e[n])
		}(a, e.attrs), e.text && (a.text = "" + e.text), ("onload" in a ? n : r)(a, i), a.onload || n(a, i), o.appendChild(a)
	}
}, function(t, e, n) {
	"use strict";
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var r = s(n(55)),
		i = s(n(58)),
		o = s(n(59)),
		a = s(n(60));

	function s(t) {
		return t && t.__esModule ? t : {
			default: t
		}
	}
	var c = (0, r.default)("youtube-player"),
		l = {
			proxyEvents: function(t) {
				var e = {},
					n = function(n) {
						var r = "on" + n.slice(0, 1).toUpperCase() + n.slice(1);
						e[r] = function(e) {
							c('event "%s"', r, e), t.trigger(n, e)
						}
					},
					r = !0,
					i = !1,
					a = void 0;
				try {
					for (var s, l = o.default[Symbol.iterator](); !(r = (s = l.next()).done); r = !0) {
						n(s.value)
					}
				} catch (t) {
					i = !0, a = t
				} finally {
					try {
						!r && l.return && l.return()
					} finally {
						if (i) throw a
					}
				}
				return e
			},
			promisifyPlayer: function(t) {
				var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
					n = {},
					r = function(r) {
						e && a.default[r] ? n[r] = function() {
							for (var e = arguments.length, n = Array(e), i = 0; i < e; i++) n[i] = arguments[i];
							return t.then((function(t) {
								var e = a.default[r],
									i = t.getPlayerState(),
									o = t[r].apply(t, n);
								return e.stateChangeRequired || Array.isArray(e.acceptableStates) && -1 === e.acceptableStates.indexOf(i) ? new Promise((function(n) {
									t.addEventListener("onStateChange", (function r() {
										var i = t.getPlayerState(),
											o = void 0;
										"number" == typeof e.timeout && (o = setTimeout((function() {
											t.removeEventListener("onStateChange", r), n()
										}), e.timeout)), Array.isArray(e.acceptableStates) && -1 !== e.acceptableStates.indexOf(i) && (t.removeEventListener("onStateChange", r), clearTimeout(o), n())
									}))
								})).then((function() {
									return o
								})) : o
							}))
						} : n[r] = function() {
							for (var e = arguments.length, n = Array(e), i = 0; i < e; i++) n[i] = arguments[i];
							return t.then((function(t) {
								return t[r].apply(t, n)
							}))
						}
					},
					o = !0,
					s = !1,
					c = void 0;
				try {
					for (var l, u = i.default[Symbol.iterator](); !(o = (l = u.next()).done); o = !0) {
						var d = l.value;
						r(d)
					}
				} catch (t) {
					s = !0, c = t
				} finally {
					try {
						!o && u.return && u.return()
					} finally {
						if (s) throw c
					}
				}
				return n
			}
		};
	e.default = l, t.exports = e.default
}, function(t, e, n) {
	(function(r) {
		function i() {
			var t;
			try {
				t = e.storage.debug
			} catch (t) {}
			return !t && void 0 !== r && "env" in r && (t = r.env.DEBUG), t
		}(e = t.exports = n(56)).log = function() {
			return "object" == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments)
		}, e.formatArgs = function(t) {
			var n = this.useColors;
			if (t[0] = (n ? "%c" : "") + this.namespace + (n ? " %c" : " ") + t[0] + (n ? "%c " : " ") + "+" + e.humanize(this.diff), !n) return;
			var r = "color: " + this.color;
			t.splice(1, 0, r, "color: inherit");
			var i = 0,
				o = 0;
			t[0].replace(/%[a-zA-Z%]/g, (function(t) {
				"%%" !== t && (i++, "%c" === t && (o = i))
			})), t.splice(o, 0, r)
		}, e.save = function(t) {
			try {
				null == t ? e.storage.removeItem("debug") : e.storage.debug = t
			} catch (t) {}
		}, e.load = i, e.useColors = function() {
			if ("undefined" != typeof window && window.process && "renderer" === window.process.type) return !0;
			return "undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)
		}, e.storage = "undefined" != typeof chrome && void 0 !== chrome.storage ? chrome.storage.local : function() {
			try {
				return window.localStorage
			} catch (t) {}
		}(), e.colors = ["lightseagreen", "forestgreen", "goldenrod", "dodgerblue", "darkorchid", "crimson"], e.formatters.j = function(t) {
			try {
				return JSON.stringify(t)
			} catch (t) {
				return "[UnexpectedJSONParseError]: " + t.message
			}
		}, e.enable(i())
	}).call(this, n(14))
}, function(t, e, n) {
	var r;

	function i(t) {
		function n() {
			if (n.enabled) {
				var t = n,
					i = +new Date,
					o = i - (r || i);
				t.diff = o, t.prev = r, t.curr = i, r = i;
				for (var a = new Array(arguments.length), s = 0; s < a.length; s++) a[s] = arguments[s];
				a[0] = e.coerce(a[0]), "string" != typeof a[0] && a.unshift("%O");
				var c = 0;
				a[0] = a[0].replace(/%([a-zA-Z%])/g, (function(n, r) {
					if ("%%" === n) return n;
					c++;
					var i = e.formatters[r];
					if ("function" == typeof i) {
						var o = a[c];
						n = i.call(t, o), a.splice(c, 1), c--
					}
					return n
				})), e.formatArgs.call(t, a);
				var l = n.log || e.log || console.log.bind(console);
				l.apply(t, a)
			}
		}
		return n.namespace = t, n.enabled = e.enabled(t), n.useColors = e.useColors(), n.color = function(t) {
			var n, r = 0;
			for (n in t) r = (r << 5) - r + t.charCodeAt(n), r |= 0;
			return e.colors[Math.abs(r) % e.colors.length]
		}(t), "function" == typeof e.init && e.init(n), n
	}(e = t.exports = i.debug = i.default = i).coerce = function(t) {
		return t instanceof Error ? t.stack || t.message : t
	}, e.disable = function() {
		e.enable("")
	}, e.enable = function(t) {
		e.save(t), e.names = [], e.skips = [];
		for (var n = ("string" == typeof t ? t : "").split(/[\s,]+/), r = n.length, i = 0; i < r; i++) n[i] && ("-" === (t = n[i].replace(/\*/g, ".*?"))[0] ? e.skips.push(new RegExp("^" + t.substr(1) + "$")) : e.names.push(new RegExp("^" + t + "$")))
	}, e.enabled = function(t) {
		var n, r;
		for (n = 0, r = e.skips.length; n < r; n++)
			if (e.skips[n].test(t)) return !1;
		for (n = 0, r = e.names.length; n < r; n++)
			if (e.names[n].test(t)) return !0;
		return !1
	}, e.humanize = n(57), e.names = [], e.skips = [], e.formatters = {}
}, function(t, e) {
	var n = 1e3,
		r = 6e4,
		i = 60 * r,
		o = 24 * i;

	function a(t, e, n) {
		if (!(t < e)) return t < 1.5 * e ? Math.floor(t / e) + " " + n : Math.ceil(t / e) + " " + n + "s"
	}
	t.exports = function(t, e) {
		e = e || {};
		var s, c = typeof t;
		if ("string" === c && t.length > 0) return function(t) {
			if ((t = String(t)).length > 100) return;
			var e = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(t);
			if (!e) return;
			var a = parseFloat(e[1]);
			switch ((e[2] || "ms").toLowerCase()) {
				case "years":
				case "year":
				case "yrs":
				case "yr":
				case "y":
					return 315576e5 * a;
				case "days":
				case "day":
				case "d":
					return a * o;
				case "hours":
				case "hour":
				case "hrs":
				case "hr":
				case "h":
					return a * i;
				case "minutes":
				case "minute":
				case "mins":
				case "min":
				case "m":
					return a * r;
				case "seconds":
				case "second":
				case "secs":
				case "sec":
				case "s":
					return a * n;
				case "milliseconds":
				case "millisecond":
				case "msecs":
				case "msec":
				case "ms":
					return a;
				default:
					return
			}
		}(t);
		if ("number" === c && !1 === isNaN(t)) return e.long ? a(s = t, o, "day") || a(s, i, "hour") || a(s, r, "minute") || a(s, n, "second") || s + " ms" : function(t) {
			if (t >= o) return Math.round(t / o) + "d";
			if (t >= i) return Math.round(t / i) + "h";
			if (t >= r) return Math.round(t / r) + "m";
			if (t >= n) return Math.round(t / n) + "s";
			return t + "ms"
		}(t);
		throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(t))
	}
}, function(t, e, n) {
	"use strict";
	Object.defineProperty(e, "__esModule", {
		value: !0
	}), e.default = ["cueVideoById", "loadVideoById", "cueVideoByUrl", "loadVideoByUrl", "playVideo", "pauseVideo", "stopVideo", "getVideoLoadedFraction", "cuePlaylist", "loadPlaylist", "nextVideo", "previousVideo", "playVideoAt", "setShuffle", "setLoop", "getPlaylist", "getPlaylistIndex", "setOption", "mute", "unMute", "isMuted", "setVolume", "getVolume", "seekTo", "getPlayerState", "getPlaybackRate", "setPlaybackRate", "getAvailablePlaybackRates", "getPlaybackQuality", "setPlaybackQuality", "getAvailableQualityLevels", "getCurrentTime", "getDuration", "removeEventListener", "getVideoUrl", "getVideoEmbedCode", "getOptions", "getOption", "addEventListener", "destroy", "setSize", "getIframe"], t.exports = e.default
}, function(t, e, n) {
	"use strict";
	Object.defineProperty(e, "__esModule", {
		value: !0
	}), e.default = ["ready", "stateChange", "playbackQualityChange", "playbackRateChange", "error", "apiChange", "volumeChange"], t.exports = e.default
}, function(t, e, n) {
	"use strict";
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var r, i = n(61),
		o = (r = i) && r.__esModule ? r : {
			default: r
		};
	e.default = {
		pauseVideo: {
			acceptableStates: [o.default.ENDED, o.default.PAUSED],
			stateChangeRequired: !1
		},
		playVideo: {
			acceptableStates: [o.default.ENDED, o.default.PLAYING],
			stateChangeRequired: !1
		},
		seekTo: {
			acceptableStates: [o.default.ENDED, o.default.PLAYING, o.default.PAUSED],
			stateChangeRequired: !0,
			timeout: 3e3
		}
	}, t.exports = e.default
}, function(t, e, n) {
	"use strict";
	Object.defineProperty(e, "__esModule", {
		value: !0
	}), e.default = {
		BUFFERING: 3,
		ENDED: 0,
		PAUSED: 2,
		PLAYING: 1,
		UNSTARTED: -1,
		VIDEO_CUED: 5
	}, t.exports = e.default
}, function(t, e, n) {
	(function(t) {
		var r = void 0 !== t && t || "undefined" != typeof self && self || window,
			i = Function.prototype.apply;

		function o(t, e) {
			this._id = t, this._clearFn = e
		}
		e.setTimeout = function() {
			return new o(i.call(setTimeout, r, arguments), clearTimeout)
		}, e.setInterval = function() {
			return new o(i.call(setInterval, r, arguments), clearInterval)
		}, e.clearTimeout = e.clearInterval = function(t) {
			t && t.close()
		}, o.prototype.unref = o.prototype.ref = function() {}, o.prototype.close = function() {
			this._clearFn.call(r, this._id)
		}, e.enroll = function(t, e) {
			clearTimeout(t._idleTimeoutId), t._idleTimeout = e
		}, e.unenroll = function(t) {
			clearTimeout(t._idleTimeoutId), t._idleTimeout = -1
		}, e._unrefActive = e.active = function(t) {
			clearTimeout(t._idleTimeoutId);
			var e = t._idleTimeout;
			e >= 0 && (t._idleTimeoutId = setTimeout((function() {
				t._onTimeout && t._onTimeout()
			}), e))
		}, n(63), e.setImmediate = "undefined" != typeof self && self.setImmediate || void 0 !== t && t.setImmediate || this && this.setImmediate, e.clearImmediate = "undefined" != typeof self && self.clearImmediate || void 0 !== t && t.clearImmediate || this && this.clearImmediate
	}).call(this, n(8))
}, function(t, e, n) {
	(function(t, e) {
		! function(t, n) {
			"use strict";
			if (!t.setImmediate) {
				var r, i, o, a, s, c = 1,
					l = {},
					u = !1,
					d = t.document,
					f = Object.getPrototypeOf && Object.getPrototypeOf(t);
				f = f && f.setTimeout ? f : t, "[object process]" === {}.toString.call(t.process) ? r = function(t) {
					e.nextTick((function() {
						p(t)
					}))
				} : ! function() {
					if (t.postMessage && !t.importScripts) {
						var e = !0,
							n = t.onmessage;
						return t.onmessage = function() {
							e = !1
						}, t.postMessage("", "*"), t.onmessage = n, e
					}
				}() ? t.MessageChannel ? ((o = new MessageChannel).port1.onmessage = function(t) {
					p(t.data)
				}, r = function(t) {
					o.port2.postMessage(t)
				}) : d && "onreadystatechange" in d.createElement("script") ? (i = d.documentElement, r = function(t) {
					var e = d.createElement("script");
					e.onreadystatechange = function() {
						p(t), e.onreadystatechange = null, i.removeChild(e), e = null
					}, i.appendChild(e)
				}) : r = function(t) {
					setTimeout(p, 0, t)
				} : (a = "setImmediate$" + Math.random() + "$", s = function(e) {
					e.source === t && "string" == typeof e.data && 0 === e.data.indexOf(a) && p(+e.data.slice(a.length))
				}, t.addEventListener ? t.addEventListener("message", s, !1) : t.attachEvent("onmessage", s), r = function(e) {
					t.postMessage(a + e, "*")
				}), f.setImmediate = function(t) {
					"function" != typeof t && (t = new Function("" + t));
					for (var e = new Array(arguments.length - 1), n = 0; n < e.length; n++) e[n] = arguments[n + 1];
					var i = {
						callback: t,
						args: e
					};
					return l[c] = i, r(c), c++
				}, f.clearImmediate = h
			}

			function h(t) {
				delete l[t]
			}

			function p(t) {
				if (u) setTimeout(p, 0, t);
				else {
					var e = l[t];
					if (e) {
						u = !0;
						try {
							! function(t) {
								var e = t.callback,
									n = t.args;
								switch (n.length) {
									case 0:
										e();
										break;
									case 1:
										e(n[0]);
										break;
									case 2:
										e(n[0], n[1]);
										break;
									case 3:
										e(n[0], n[1], n[2]);
										break;
									default:
										e.apply(void 0, n)
								}
							}(e)
						} finally {
							h(t), u = !1
						}
					}
				}
			}
		}("undefined" == typeof self ? void 0 === t ? this : t : self)
	}).call(this, n(8), n(14))
}, function(t, e) {
	t.exports = function(t) {
		return t.webpackPolyfill || (t.deprecate = function() {}, t.paths = [], t.children || (t.children = []), Object.defineProperty(t, "loaded", {
			enumerable: !0,
			get: function() {
				return t.l
			}
		}), Object.defineProperty(t, "id", {
			enumerable: !0,
			get: function() {
				return t.i
			}
		}), t.webpackPolyfill = 1), t
	}
}, function(t, e, n) {
	"use strict";
	n.r(e);

	function r(t, e) {
		this.container = function(t) {
			if (!(t instanceof Element)) throw new TypeError("Theme Sections: Attempted to load section. The section container provided is not a DOM element.");
			if (null === t.getAttribute("data-section-id")) throw new Error("Theme Sections: The section container provided does not have an id assigned to the data-section-id attribute.");
			return t
		}(t), this.id = t.getAttribute("data-section-id"), this.extensions = [], Object.assign(this, function(t) {
			if (void 0 !== t && "object" != typeof t || null === t) throw new TypeError("Theme Sections: The properties object provided is not a valid");
			return t
		}(e)), this.onLoad()
	}
	r.prototype = {
		onLoad: Function.prototype,
		onUnload: Function.prototype,
		onSelect: Function.prototype,
		onDeselect: Function.prototype,
		onBlockSelect: Function.prototype,
		onBlockDeselect: Function.prototype,
		extend: function(t) {
			this.extensions.push(t);
			var e = Object.assign({}, t);
			delete e.init, Object.assign(this, e), "function" == typeof t.init && t.init.apply(this)
		}
	}, "function" != typeof Object.assign && Object.defineProperty(Object, "assign", {
		value: function(t) {
			if (null == t) throw new TypeError("Cannot convert undefined or null to object");
			for (var e = Object(t), n = 1; n < arguments.length; n++) {
				var r = arguments[n];
				if (null != r)
					for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i])
			}
			return e
		},
		writable: !0,
		configurable: !0
	});
	window.Shopify = window.Shopify || {}, window.Shopify.theme = window.Shopify.theme || {}, window.Shopify.theme.sections = window.Shopify.theme.sections || {};
	var i = window.Shopify.theme.sections.registered = window.Shopify.theme.sections.registered || {},
		o = window.Shopify.theme.sections.instances = window.Shopify.theme.sections.instances || [];

	function a(t, e) {
		t = l(t), void 0 === e && (e = document.querySelectorAll("[data-section-type]")), e = u(e), t.forEach((function(t) {
			var n = i[t];
			void 0 !== n && (e = e.filter((function(e) {
				return !(s(e).length > 0) && (null !== e.getAttribute("data-section-type") && (e.getAttribute("data-section-type") !== t || (o.push(new n(e)), !1)))
			})))
		}))
	}

	function s(t) {
		var e = [];
		if (NodeList.prototype.isPrototypeOf(t) || Array.isArray(t)) var n = t[0];
		if (t instanceof Element || n instanceof Element) u(t).forEach((function(t) {
			e = e.concat(o.filter((function(e) {
				return e.container === t
			})))
		}));
		else if ("string" == typeof t || "string" == typeof n) {
			l(t).forEach((function(t) {
				e = e.concat(o.filter((function(e) {
					return e.type === t
				})))
			}))
		}
		return e
	}

	function c(t) {
		for (var e, n = 0; n < o.length; n++)
			if (o[n].id === t) {
				e = o[n];
				break
			} return e
	}

	function l(t) {
		return "*" === t ? t = Object.keys(i) : "string" == typeof t ? t = [t] : t.constructor === r ? t = [t.prototype.type] : Array.isArray(t) && t[0].constructor === r && (t = t.map((function(t) {
			return t.prototype.type
		}))), t = t.map((function(t) {
			return t.toLowerCase()
		}))
	}

	function u(t) {
		return NodeList.prototype.isPrototypeOf(t) && t.length > 0 ? t = Array.prototype.slice.call(t) : NodeList.prototype.isPrototypeOf(t) && 0 === t.length || null === t ? t = [] : !Array.isArray(t) && t instanceof Element && (t = [t]), t
	}
	window.Shopify.designMode && (document.addEventListener("shopify:section:load", (function(t) {
		var e = t.detail.sectionId,
			n = t.target.querySelector('[data-section-id="' + e + '"]');
		null !== n && a(n.getAttribute("data-section-type"), n)
	})), document.addEventListener("shopify:section:unload", (function(t) {
		var e = t.detail.sectionId,
			n = t.target.querySelector('[data-section-id="' + e + '"]');
		"object" == typeof s(n)[0] && s(n).forEach((function(t) {
			var e = o.map((function(t) {
				return t.id
			})).indexOf(t.id);
			o.splice(e, 1), t.onUnload()
		}))
	})), document.addEventListener("shopify:section:select", (function(t) {
		var e = c(t.detail.sectionId);
		"object" == typeof e && e.onSelect(t)
	})), document.addEventListener("shopify:section:deselect", (function(t) {
		var e = c(t.detail.sectionId);
		"object" == typeof e && e.onDeselect(t)
	})), document.addEventListener("shopify:block:select", (function(t) {
		var e = c(t.detail.sectionId);
		"object" == typeof e && e.onBlockSelect(t)
	})), document.addEventListener("shopify:block:deselect", (function(t) {
		var e = c(t.detail.sectionId);
		"object" == typeof e && e.onBlockDeselect(t)
	})));
	var d = n(3),
		f = n.n(d);

	function h(t, e) {
		return void 0 === e && (e = document), e.querySelector(t)
	}

	function p(t, e) {
		return void 0 === e && (e = document), [].slice.call(e.querySelectorAll(t))
	}

	function g(t, e) {
		return Array.isArray(t) ? t.forEach(e) : e(t)
	}

	function v(t) {
		return function(e, n, r) {
			return g(e, (function(e) {
				return e[t + "EventListener"](n, r)
			}))
		}
	}

	function m(t, e, n) {
		return v("add")(t, e, n),
			function() {
				return v("remove")(t, e, n)
			}
	}

	function y(t) {
		return function(e) {
			var n = arguments;
			return g(e, (function(e) {
				var r;
				return (r = e.classList)[t].apply(r, [].slice.call(n, 1))
			}))
		}
	}

	function b(t) {
		y("add").apply(void 0, [t].concat([].slice.call(arguments, 1)))
	}

	function w(t) {
		y("remove").apply(void 0, [t].concat([].slice.call(arguments, 1)))
	}

	function E(t) {
		y("toggle").apply(void 0, [t].concat([].slice.call(arguments, 1)))
	}

	function _(t, e) {
		return t.classList.contains(e)
	}

	function A() {
		this.entries = []
	}

	function k(t, e) {
		T(t);
		var n = function(t, e) {
			T(t),
				function(t) {
					if (!Array.isArray(t)) throw new TypeError(t + " is not an array.");
					if (0 === t.length) return [];
					if (!t[0].hasOwnProperty("name")) throw new Error(t[0] + "does not contain name key.");
					if ("string" != typeof t[0].name) throw new TypeError("Invalid value type passed for name of option " + t[0].name + ". Value should be string.")
				}(e);
			var n = [];
			return e.forEach((function(e) {
				for (var r = 0; r < t.options.length; r++)
					if (t.options[r].name.toLowerCase() === e.name.toLowerCase()) {
						n[r] = e.value;
						break
					}
			})), n
		}(t, e);
		return function(t, e) {
			return T(t),
				function(t) {
					if (Array.isArray(t) && "object" == typeof t[0]) throw new Error(t + "is not a valid array of options.")
				}(e), t.variants.filter((function(t) {
					return e.every((function(e, n) {
						return t.options[n] === e
					}))
				}))[0] || null
		}(t, n)
	}

	function T(t) {
		if ("object" != typeof t) throw new TypeError(t + " is not an object.");
		if (0 === Object.keys(t).length && t.constructor === Object) throw new Error(t + " is empty.")
	}
	A.prototype.add = function(t, e, n) {
		this.entries.push({
			element: t,
			event: e,
			fn: n
		}), t.addEventListener(e, n)
	}, A.prototype.removeAll = function() {
		this.entries = this.entries.filter((function(t) {
			return t.element.removeEventListener(t.event, t.fn), !1
		}))
	};
	var S = '[name="id"]',
		x = '[name^="options"]',
		C = '[name="quantity"]',
		O = '[name^="properties"]';

	function L(t, e, n) {
		this.element = t, this.product = function(t) {
			if ("object" != typeof t) throw new TypeError(t + " is not an object.");
			if (void 0 === t.variants[0].options) throw new TypeError("Product object is invalid. Make sure you use the product object that is output from {{ product | json }} or from the http://[your-product-url].js route");
			return t
		}(e), n = n || {}, this._listeners = new A, this._listeners.add(this.element, "submit", this._onSubmit.bind(this, n)), this.optionInputs = this._initInputs(x, n.onOptionChange), this.quantityInputs = this._initInputs(C, n.onQuantityChange), this.propertyInputs = this._initInputs(O, n.onPropertyChange)
	}
	L.prototype.destroy = function() {
		this._listeners.removeAll()
	}, L.prototype.options = function() {
		return t = this.optionInputs, e = function(t) {
			return t.name = /(?:^(options\[))(.*?)(?:\])/.exec(t.name)[2], t
		}, t.reduce((function(t, n) {
			return (n.checked || "radio" !== n.type && "checkbox" !== n.type) && t.push(e({
				name: n.name,
				value: n.value
			})), t
		}), []);
		var t, e
	}, L.prototype.variant = function() {
		return k(this.product, this.options())
	}, L.prototype.properties = function() {
		var t, e, n = (t = this.propertyInputs, e = function(t) {
			return /(?:^(properties\[))(.*?)(?:\])/.exec(t)[2]
		}, t.reduce((function(t, n) {
			return (n.checked || "radio" !== n.type && "checkbox" !== n.type) && (t[e(n.name)] = n.value), t
		}), {}));
		return 0 === Object.entries(n).length ? null : n
	}, L.prototype.quantity = function() {
		return this.quantityInputs[0] ? Number.parseInt(this.quantityInputs[0].value, 10) : 1
	}, L.prototype._setIdInputValue = function(t) {
		var e = this.element.querySelector(S);
		e || ((e = document.createElement("input")).type = "hidden", e.name = "id", this.element.appendChild(e)), e.value = t.toString()
	}, L.prototype._onSubmit = function(t, e) {
		e.dataset = this._getProductFormEventData(), this._setIdInputValue(e.dataset.variant.id), t.onFormSubmit && t.onFormSubmit(e)
	}, L.prototype._onFormEvent = function(t) {
		return void 0 === t ? Function.prototype : function(e) {
			e.dataset = this._getProductFormEventData(), t(e)
		}.bind(this)
	}, L.prototype._initInputs = function(t, e) {
		return Array.prototype.slice.call(this.element.querySelectorAll(t)).map(function(t) {
			return this._listeners.add(t, "change", this._onFormEvent(e)), t
		}.bind(this))
	}, L.prototype._getProductFormEventData = function() {
		return {
			options: this.options(),
			variant: this.variant(),
			properties: this.properties(),
			quantity: this.quantity()
		}
	};
	var q = n(0),
		D = n.n(q);

	function P() {
		try {
			return localStorage.setItem("test", "test"), localStorage.removeItem("test"), !0
		} catch (t) {
			return !1
		}
	}

	function j(t) {
		if (P()) return JSON.parse(localStorage.getItem("neon_" + t))
	}

	function I(t, e) {
		if (P()) return localStorage.setItem("neon_" + t, e)
	}
	var N = function(t) {
			if ("object" != typeof(e = t) || Array.isArray(e)) throw "state should be an object";
			var e
		},
		M = function(t, e, n, r) {
			return (i = t, i.reduce((function(t, e, n) {
				return t.indexOf(e) > -1 ? t : t.concat(e)
			}), [])).reduce((function(t, n) {
				return t.concat(e[n] || [])
			}), []).map((function(t) {
				return t(n, r)
			}));
			var i
		},
		z = V(),
		R = z.on,
		B = z.emit,
		F = z.hydrate,
		H = z.getState;

	function V(t) {
		void 0 === t && (t = {});
		var e = {};
		return {
			getState: function() {
				return Object.assign({}, t)
			},
			hydrate: function(n) {
				return N(n), Object.assign(t, n),
					function() {
						var r = ["*"].concat(Object.keys(n));
						M(r, e, t)
					}
			},
			on: function(t, n) {
				return (t = [].concat(t)).map((function(t) {
						return e[t] = (e[t] || []).concat(n)
					})),
					function() {
						return t.map((function(t) {
							return e[t].splice(e[t].indexOf(n), 1)
						}))
					}
			},
			emit: function(n, r, i) {
				var o = ("*" === n ? [] : ["*"]).concat(n);
				(r = "function" == typeof r ? r(t) : r) && (N(r), Object.assign(t, r), o = o.concat(Object.keys(r))), M(o, e, t, i)
			}
		}
	}
	var U = window.theme.routes.cart || {},
		W = {
			base: "".concat(U.base || "/cart", ".js"),
			add: "".concat(U.add || "/cart/add", ".js"),
			change: "".concat(U.change || "/cart/change", ".js"),
			clear: "".concat(U.clear || "/cart/clear", ".js")
		};

	function G(t) {
		var e = j("cart_order") || [];
		return e.length ? (t.sorted = D()(t.items).sort((function(t, n) {
			return e.indexOf(t.variant_id) - e.indexOf(n.variant_id)
		})), t) : (t.sorted = t.items, t)
	}

	function $(t, e) {
		return fetch(W.change, {
			method: "POST",
			credentials: "include",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				line: t,
				quantity: e
			})
		}).then((function(t) {
			return t.json()
		})).then((function(t) {
			return B("cart:updated", {
				cart: G(t)
			}), G(t)
		}))
	}

	function J(t, e) {
		return B("cart:updating"), fetch(W.add, {
			method: "POST",
			credentials: "include",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				id: t,
				quantity: e
			})
		}).then((function(t) {
			return t.json()
		})).then((function(t) {
			return Y().then((function(e) {
				var n = j("cart_order") || [],
					r = [t.variant_id].concat(D()(n.filter((function(e) {
						return e !== t.variant_id
					}))));
				return I("cart_order", JSON.stringify(r)), B("cart:updated", {
					cart: G(e)
				}), {
					item: t,
					cart: G(e)
				}
			}))
		}))
	}

	function Y() {
		return fetch(W.base, {
			method: "GET",
			credentials: "include"
		}).then((function(t) {
			return t.json()
		})).then((function(t) {
			return G(t)
		}))
	}

	function X(t) {
		var e = [];
		return Array.prototype.slice.call(t.elements).forEach((function(t) {
			!t.name || t.disabled || ["file", "reset", "submit", "button"].indexOf(t.type) > -1 || ("select-multiple" !== t.type ? ["checkbox", "radio"].indexOf(t.type) > -1 && !t.checked || e.push(encodeURIComponent(t.name) + "=" + encodeURIComponent(t.value)) : Array.prototype.slice.call(t.options).forEach((function(n) {
				n.selected && e.push(encodeURIComponent(t.name) + "=" + encodeURIComponent(n.value))
			})))
		})), e.join("&")
	}
	var Q = {
			addItem: function(t) {
				return B("cart:updating"), fetch(W.add, {
					method: "POST",
					credentials: "include",
					headers: {
						"Content-Type": "application/x-www-form-urlencoded",
						"X-Requested-With": "XMLHttpRequest"
					},
					body: X(t)
				}).then((function(t) {
					return t.json()
				})).then((function(t) {
					if ("422" == t.status) throw {
						code: 422,
						message: t.description
					};
					return Y().then((function(e) {
						var n = j("cart_order") || [],
							r = [t.variant_id].concat(D()(n.filter((function(e) {
								return e !== t.variant_id
							}))));
						return I("cart_order", JSON.stringify(r)), B("cart:updated", {
							cart: G(e)
						}), {
							item: t,
							cart: G(e)
						}
					}))
				}))
			},
			addItemById: J,
			addVariant: function(t, e) {
				var n = "deny" === t.inventory_policy && "shopify" === t.inventory_management ? t.inventory_quantity : null;
				return Y().then((function(r) {
					var i = ((r.items.filter((function(e) {
						return e.id === t.id
					}))[0] || {}).quantity || 0) + e;
					if (null !== n && i > n) {
						var o = "There are only ".concat(n, " of that product available, requested ").concat(i, ".");
						throw new Error(o)
					}
					return J(t.id, e)
				}))
			},
			get: Y,
			updateItem: function(t, e) {
				return Y().then((function(n) {
					for (var r = n.items, i = 0; i < r.length; i++)
						if (r[i].variant_id === parseInt(t)) return $(i + 1, e)
				}))
			}
		},
		Z = n(18),
		K = function(t) {
			return Object(Z.formatMoney)(t, window.theme.moneyFormat || "${{amount}}")
		},
		tt = function(t) {
			return function(e) {
				return fetch("".concat(window.theme.routes.products, "/").concat(t, ".js")).then((function(t) {
					return t.json()
				})).then((function(t) {
					return e(t)
				})).catch((function(t) {
					return console.log(t.message)
				}))
			}
		},
		et = function(t, e) {
			if ("string" != typeof t) throw new TypeError("Theme Sections: The first argument for .register must be a string that specifies the type of the section being registered");
			if (void 0 !== i[t]) throw new Error('Theme Sections: A section of type "' + t + '" has already been registered. You cannot register the same section type twice');

			function n(t) {
				r.call(this, t, e)
			}
			return n.constructor = r, n.prototype = Object.create(r.prototype), n.prototype.type = t, i[t] = n
		},
		nt = "[data-price]",
		rt = "[data-compare-price]";

	function it() {
		var t = window.SPR;
		t && (t.registerCallbacks(), t.initRatingHandler(), t.initDomEls(), t.loadProducts(), t.loadBadges())
	}
	var ot = "full-width",
		at = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])', "details>summary:first-of-type", "details"],
		st = at.join(","),
		ct = "undefined" == typeof Element ? function() {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;

	function lt(t, e, n) {
		var r = Array.prototype.slice.apply(t.querySelectorAll(st));
		return e && ct.call(t, st) && r.unshift(t), r = r.filter(n)
	}

	function ut(t) {
		return !(!dt(t) || function(t) {
			return function(t) {
				return mt(t) && "radio" === t.type
			}(t) && ! function(t) {
				if (!t.name) return !0;
				var e = function(t, e) {
					for (var n = 0; n < t.length; n++)
						if (t[n].checked && t[n].form === e) return t[n]
				}((t.form || t.ownerDocument).querySelectorAll('input[type="radio"][name="' + t.name + '"]'), t.form);
				return !e || e === t
			}(t)
		}(t) || gt(t) < 0)
	}

	function dt(t) {
		return !(t.disabled || function(t) {
				return mt(t) && "hidden" === t.type
			}(t) || function(t) {
				if ("hidden" === getComputedStyle(t).visibility) return !0;
				if ((t.matches("details>summary:first-of-type") ? t.parentElement : t).matches("details:not([open]) *")) return !0;
				for (; t;) {
					if ("none" === getComputedStyle(t).display) return !0;
					t = t.parentElement
				}
				return !1
			}
			/*!
			 * focus-trap 6.1.4
			 * @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
			 */
			(t) || function(t) {
				return "DETAILS" === t.tagName && Array.prototype.slice.apply(t.children).some((function(t) {
					return "SUMMARY" === t.tagName
				}))
			}(t))
	}
	var ft, ht = at.concat("iframe").join(",");

	function pt(t) {
		if (!t) throw new Error("No node provided");
		return !1 !== ct.call(t, ht) && dt(t)
	}

	function gt(t) {
		var e = parseInt(t.getAttribute("tabindex"), 10);
		return isNaN(e) ? function(t) {
			return "true" === t.contentEditable
		}(t) ? 0 : "AUDIO" !== t.nodeName && "VIDEO" !== t.nodeName && "DETAILS" !== t.nodeName || null !== t.getAttribute("tabindex") ? t.tabIndex : 0 : e
	}

	function vt(t, e) {
		return t.tabIndex === e.tabIndex ? t.documentOrder - e.documentOrder : t.tabIndex - e.tabIndex
	}

	function mt(t) {
		return "INPUT" === t.tagName
	}

	function yt(t, e, n) {
		return e in t ? Object.defineProperty(t, e, {
			value: n,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : t[e] = n, t
	}

	function bt(t, e) {
		var n = Object.keys(t);
		if (Object.getOwnPropertySymbols) {
			var r = Object.getOwnPropertySymbols(t);
			e && (r = r.filter((function(e) {
				return Object.getOwnPropertyDescriptor(t, e).enumerable
			}))), n.push.apply(n, r)
		}
		return n
	}
	var wt, Et = (wt = [], {
		activateTrap: function(t) {
			if (wt.length > 0) {
				var e = wt[wt.length - 1];
				e !== t && e.pause()
			}
			var n = wt.indexOf(t); - 1 === n || wt.splice(n, 1), wt.push(t)
		},
		deactivateTrap: function(t) {
			var e = wt.indexOf(t); - 1 !== e && wt.splice(e, 1), wt.length > 0 && wt[wt.length - 1].unpause()
		}
	});

	function _t(t, e) {
		var n = document,
			r = "string" == typeof t ? n.querySelector(t) : t,
			i = function(t) {
				for (var e = 1; e < arguments.length; e++) {
					var n = null != arguments[e] ? arguments[e] : {};
					e % 2 ? bt(Object(n), !0).forEach((function(e) {
						yt(t, e, n[e])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : bt(Object(n)).forEach((function(e) {
						Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
					}))
				}
				return t
			}({
				returnFocusOnDeactivate: !0,
				escapeDeactivates: !0,
				delayInitialFocus: !0
			}, e),
			o = {
				firstTabbableNode: null,
				lastTabbableNode: null,
				nodeFocusedBeforeActivation: null,
				mostRecentlyFocusedNode: null,
				active: !1,
				paused: !1
			},
			a = {
				activate: function(t) {
					if (o.active) return;
					v(), o.active = !0, o.paused = !1, o.nodeFocusedBeforeActivation = n.activeElement;
					var e = t && t.onActivate ? t.onActivate : i.onActivate;
					e && e();
					return c(), a
				},
				deactivate: s,
				pause: function() {
					if (o.paused || !o.active) return;
					o.paused = !0, l()
				},
				unpause: function() {
					if (!o.paused || !o.active) return;
					o.paused = !1, v(), c()
				}
			};
		return a;

		function s(t) {
			if (o.active) {
				clearTimeout(ft), l(), o.active = !1, o.paused = !1, Et.deactivateTrap(a);
				var e = t && void 0 !== t.onDeactivate ? t.onDeactivate : i.onDeactivate;
				return e && e(), (t && void 0 !== t.returnFocus ? t.returnFocus : i.returnFocusOnDeactivate) && At((function() {
					var t;
					m((t = o.nodeFocusedBeforeActivation, u("setReturnFocus") || t))
				})), a
			}
		}

		function c() {
			if (o.active) return Et.activateTrap(a), ft = i.delayInitialFocus ? At((function() {
				m(d())
			})) : m(d()), n.addEventListener("focusin", h, !0), n.addEventListener("mousedown", f, {
				capture: !0,
				passive: !1
			}), n.addEventListener("touchstart", f, {
				capture: !0,
				passive: !1
			}), n.addEventListener("click", g, {
				capture: !0,
				passive: !1
			}), n.addEventListener("keydown", p, {
				capture: !0,
				passive: !1
			}), a
		}

		function l() {
			if (o.active) return n.removeEventListener("focusin", h, !0), n.removeEventListener("mousedown", f, !0), n.removeEventListener("touchstart", f, !0), n.removeEventListener("click", g, !0), n.removeEventListener("keydown", p, !0), a
		}

		function u(t) {
			var e = i[t],
				r = e;
			if (!e) return null;
			if ("string" == typeof e && !(r = n.querySelector(e))) throw new Error("`" + t + "` refers to no known node");
			if ("function" == typeof e && !(r = e())) throw new Error("`" + t + "` did not return a node");
			return r
		}

		function d() {
			var t;
			if (!(t = null !== u("initialFocus") ? u("initialFocus") : r.contains(n.activeElement) ? n.activeElement : o.firstTabbableNode || u("fallbackFocus"))) throw new Error("Your focus-trap needs to have at least one focusable element");
			return t
		}

		function f(t) {
			r.contains(t.target) || (i.clickOutsideDeactivates ? s({
				returnFocus: i.returnFocusOnDeactivate && !pt(t.target)
			}) : i.allowOutsideClick && ("boolean" == typeof i.allowOutsideClick ? i.allowOutsideClick : i.allowOutsideClick(t)) || t.preventDefault())
		}

		function h(t) {
			r.contains(t.target) || t.target instanceof Document || (t.stopImmediatePropagation(), m(o.mostRecentlyFocusedNode || d()))
		}

		function p(t) {
			if (!1 !== i.escapeDeactivates && function(t) {
					return "Escape" === t.key || "Esc" === t.key || 27 === t.keyCode
				}(t)) return t.preventDefault(), void s();
			(function(t) {
				return "Tab" === t.key || 9 === t.keyCode
			})(t) && function(t) {
				if (v(), t.shiftKey && t.target === o.firstTabbableNode) return t.preventDefault(), void m(o.lastTabbableNode);
				if (!t.shiftKey && t.target === o.lastTabbableNode) t.preventDefault(), m(o.firstTabbableNode)
			}(t)
		}

		function g(t) {
			i.clickOutsideDeactivates || r.contains(t.target) || i.allowOutsideClick && ("boolean" == typeof i.allowOutsideClick ? i.allowOutsideClick : i.allowOutsideClick(t)) || (t.preventDefault(), t.stopImmediatePropagation())
		}

		function v() {
			var t, e, n, i = (e = [], n = [], lt(r, (t = t || {}).includeContainer, ut).forEach((function(t, r) {
				var i = gt(t);
				0 === i ? e.push(t) : n.push({
					documentOrder: r,
					tabIndex: i,
					node: t
				})
			})), n.sort(vt).map((function(t) {
				return t.node
			})).concat(e));
			o.firstTabbableNode = i[0] || d(), o.lastTabbableNode = i[i.length - 1] || d()
		}

		function m(t) {
			t !== n.activeElement && (t && t.focus ? (t.focus({
				preventScroll: !!i.preventScroll
			}), o.mostRecentlyFocusedNode = t, function(t) {
				return t.tagName && "input" === t.tagName.toLowerCase() && "function" == typeof t.select
			}(t) && t.select()) : m(d()))
		}
	}

	function At(t) {
		return setTimeout(t, 0)
	}

	function kt(t) {
		if (Array.isArray(t)) {
			for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e];
			return n
		}
		return Array.from(t)
	}
	var Tt = !1;
	if ("undefined" != typeof window) {
		var St = {
			get passive() {
				Tt = !0
			}
		};
		window.addEventListener("testPassive", null, St), window.removeEventListener("testPassive", null, St)
	}
	var xt = "undefined" != typeof window && window.navigator && window.navigator.platform && (/iP(ad|hone|od)/.test(window.navigator.platform) || "MacIntel" === window.navigator.platform && window.navigator.maxTouchPoints > 1),
		Ct = [],
		Ot = !1,
		Lt = -1,
		qt = void 0,
		Dt = void 0,
		Pt = function(t) {
			return Ct.some((function(e) {
				return !(!e.options.allowTouchMove || !e.options.allowTouchMove(t))
			}))
		},
		jt = function(t) {
			var e = t || window.event;
			return !!Pt(e.target) || (e.touches.length > 1 || (e.preventDefault && e.preventDefault(), !1))
		},
		It = function() {
			setTimeout((function() {
				void 0 !== Dt && (document.body.style.paddingRight = Dt, Dt = void 0), void 0 !== qt && (document.body.style.overflow = qt, qt = void 0)
			}))
		},
		Nt = function(t, e) {
			if (xt) {
				if (!t) return void console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");
				if (t && !Ct.some((function(e) {
						return e.targetElement === t
					}))) {
					var n = {
						targetElement: t,
						options: e || {}
					};
					Ct = [].concat(kt(Ct), [n]), t.ontouchstart = function(t) {
						1 === t.targetTouches.length && (Lt = t.targetTouches[0].clientY)
					}, t.ontouchmove = function(e) {
						1 === e.targetTouches.length && function(t, e) {
							var n = t.targetTouches[0].clientY - Lt;
							!Pt(t.target) && (e && 0 === e.scrollTop && n > 0 || function(t) {
								return !!t && t.scrollHeight - t.scrollTop <= t.clientHeight
							}(e) && n < 0 ? jt(t) : t.stopPropagation())
						}(e, t)
					}, Ot || (document.addEventListener("touchmove", jt, Tt ? {
						passive: !1
					} : void 0), Ot = !0)
				}
			} else {
				! function(t) {
					if (void 0 === Dt) {
						var e = !!t && !0 === t.reserveScrollBarGap,
							n = window.innerWidth - document.documentElement.clientWidth;
						e && n > 0 && (Dt = document.body.style.paddingRight, document.body.style.paddingRight = n + "px")
					}
					void 0 === qt && (qt = document.body.style.overflow, setTimeout((function() {
						document.body.style.overflow = "hidden"
					})))
				}(e);
				var r = {
					targetElement: t,
					options: e || {}
				};
				Ct = [].concat(kt(Ct), [r])
			}
		},
		Mt = function(t) {
			if (xt) {
				if (!t) return void console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");
				t.ontouchstart = null, t.ontouchmove = null, Ct = Ct.filter((function(e) {
					return e.targetElement !== t
				})), Ot && 0 === Ct.length && (document.removeEventListener("touchmove", jt, Tt ? {
					passive: !1
				} : void 0), Ot = !1)
			} else(Ct = Ct.filter((function(e) {
				return e.targetElement !== t
			}))).length || It()
		},
		zt = n(5),
		Rt = window.theme.strings.products,
		Bt = "[data-unit-price-container]",
		Ft = "[data-unit-price]",
		Ht = "[data-unit-base]",
		Vt = "unit-price--available",
		Ut = function(t, e) {
			var n = p(Bt, t),
				r = p(Ft, t),
				i = p(Ht, t),
				o = !e || !e.unit_price;
			E(n, Vt, !o), e && e.unit_price && ($t(r, K(e.unit_price)), $t(i, Gt(e.unit_price_measurement)))
		},
		Wt = function(t, e) {
			if (t && e) {
				var n = Rt.product.unitPrice;
				return '\n      <div class="unit-price '.concat(Vt, '">\n        <dt>\n          <span class="visually-hidden visually-hidden--inline">').concat(n, '</span>\n        </dt>\n        <dd class="unit-price__price">\n          <span data-unit-price>').concat(K(t), '</span><span aria-hidden="true">/</span><span class="visually-hidden">').concat(Rt.product.unitPriceSeparator, "&nbsp;</span><span data-unit-base>").concat(Gt(e), "</span>\n        </dd>\n      </div>\n    ")
			}
			return ""
		},
		Gt = function(t) {
			return 1 === t.reference_value ? t.reference_unit : t.reference_value + t.reference_unit
		},
		$t = function(t, e) {
			t.forEach((function(t) {
				return t.innerText = e
			}))
		},
		Jt = "is-visible",
		Yt = "active",
		Xt = "is-fixed",
		Qt = "[data-store-availability-product]",
		Zt = "[data-store-list-container]",
		Kt = "[data-store-availability-modal-wash]",
		te = function(t) {
			var e = _t(t, {
					allowOutsideClick: !0
				}),
				n = h(Kt, t.parentNode),
				r = h(Qt, t),
				i = h(Zt, t),
				o = [m(n, "click", (function(t) {
					t.preventDefault(), d()
				})), m(t, "keydown", (function(t) {
					27 === t.keyCode && d()
				})), R("availability:showMore", (function(t) {
					var e = t.product,
						n = t.variant,
						i = t.storeList,
						o = t.options;
					r.innerHTML = s(e, n, o), a(i), u()
				}))],
				a = function(t) {
					i.innerHTML = "", i.appendChild(t)
				},
				s = function(t, e, n) {
					var r = t.featured_image,
						i = t.title,
						o = e.title,
						a = e.featured_image,
						s = e.price,
						l = e.unit_price,
						u = e.unit_price_measurement,
						d = n.hideVariantTitle,
						f = c(r, a);
					return '\n      <div class="store-availbility-modal__product-card">\n        '.concat(f ? "\n            <div class='store-availbility-modal__product-card-image'>\n              <img src='".concat(f, "' alt='").concat(i, "'/>\n            </div>\n          ") : "", "\n        <div class='store-availbility-modal__product-card-details'>\n          <div>\n            <h4>\n              <span>").concat(i, '</span>\n            </h4>\n            <div class="store-availbility-modal__product-price-wrapper">\n              <span class="store-availbility-modal__product-price">').concat(K(s), "</span>\n              ").concat(Wt(l, u), '\n            </div>\n            <div class="store-availbility-modal__product-card-variant').concat(d ? " hidden" : "", '">\n              ').concat(o, "\n            </div>\n          </div>\n        </div>\n      </div>\n    ")
				},
				c = function(t, e) {
					return t || e ? l(e ? e.src : t) : ""
				},
				l = function(t) {
					return Object(zt.getSizedImageUrl)(t, "200x")
				},
				u = function() {
					b(t, Xt), setTimeout((function() {
						b(t, Jt), b(t, Yt)
					}), 50), t.setAttribute("aria-hidden", "false"), e.activate(), Nt(t, {
						allowTouchMove: function(t) {
							for (; t && t !== document.body;) {
								if (null !== t.getAttribute("data-scroll-lock-ignore")) return !0;
								t = t.parentNode
							}
						},
						reserveScrollBarGap: !0
					})
				},
				d = function() {
					e.deactivate(), w(t, Yt), w(t, Jt), t.setAttribute("aria-hidden", "true"), Mt(t), setTimeout((function() {
						w(t, Xt)
					}), 300)
				};
			return {
				unload: function() {
					o.forEach((function(t) {
						return t()
					}))
				}
			}
		},
		ee = "(max-width: 40em)",
		ne = "(min-width: 40em) and (max-width: 60em)",
		re = "(min-width: 60em)",
		ie = (n(30), n(31), n(32), n(33), n(34), n(2), n(35), n(9)),
		oe = n.n(ie),
		ae = n(1),
		se = n.n(ae);

	function ce(t, e) {
		var n = Object.keys(t);
		if (Object.getOwnPropertySymbols) {
			var r = Object.getOwnPropertySymbols(t);
			e && (r = r.filter((function(e) {
				return Object.getOwnPropertyDescriptor(t, e).enumerable
			}))), n.push.apply(n, r)
		}
		return n
	}

	function le(t) {
		for (var e = 1; e < arguments.length; e++) {
			var n = null != arguments[e] ? arguments[e] : {};
			e % 2 ? ce(Object(n), !0).forEach((function(e) {
				oe()(t, e, n[e])
			})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : ce(Object(n)).forEach((function(e) {
				Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
			}))
		}
		return t
	}
	var ue = {
			adaptiveHeight: !1,
			draggable: !1,
			fade: !0,
			pageDots: !1,
			prevNextButtons: !1,
			wrapAround: !0
		},
		de = "is-active";
	et("announcement-bar", {
		timer: null,
		onLoad: function() {
			var t = this,
				e = parseInt(this.container.dataset.timing),
				n = p("[data-single-announcement]", this.container);
			this.slideshow = new se.a(this.container, le(le({}, ue), {}, {
				autoPlay: e,
				on: {
					change: function(t) {
						n.forEach((function(e, n) {
							return E(e, de, t === n)
						}))
					}
				}
			})), this.slideshow.on("pointerUp", (function() {
				return t.handleRestart()
			})), this.listeners = [m(this.container, "touchend", (function() {
				return t.handleRestart()
			}))]
		},
		handleRestart: function() {
			var t = this;
			clearTimeout(this.timer), this.timer = setTimeout((function() {
				return t.slideshow.playPlayer()
			}), 3500)
		},
		onBlockSelect: function(t) {
			var e = t.target;
			this.slideshow.pausePlayer(), this.slideshow.select(e.dataset.index)
		},
		onBlockDeselect: function() {
			this.slideshow.unpausePlayer()
		},
		onUnload: function() {
			this.slideshow.destroy(), this.listeners.forEach((function(t) {
				return t()
			}))
		}
	});
	var fe = n(11),
		he = n.n(fe);

	function pe(t, e) {
		var n = Object.keys(t);
		if (Object.getOwnPropertySymbols) {
			var r = Object.getOwnPropertySymbols(t);
			e && (r = r.filter((function(e) {
				return Object.getOwnPropertyDescriptor(t, e).enumerable
			}))), n.push.apply(n, r)
		}
		return n
	}

	function ge(t) {
		for (var e = 1; e < arguments.length; e++) {
			var n = null != arguments[e] ? arguments[e] : {};
			e % 2 ? pe(Object(n), !0).forEach((function(e) {
				oe()(t, e, n[e])
			})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : pe(Object(n)).forEach((function(e) {
				Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
			}))
		}
		return t
	}
	var ve = function(t) {
			var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
				n = h("[data-prev]", t),
				r = h("[data-next]", t),
				i = new se.a(t, ge({
					adaptiveHeight: !0,
					cellAlign: "left",
					cellSelector: "[data-slide]",
					pageDots: !1,
					prevNextButtons: !1,
					watchCSS: !0,
					wrapAround: !0
				}, e)),
				o = new IntersectionObserver((function(e) {
					he()(e, 1)[0].isIntersecting && (i.slides || {}).length > 1 && (b(r, "visible"), o.unobserve(t))
				}), {
					threshold: .75
				});

			function a() {
				b(n, "visible"), i.off("change", a)
			}
			o.observe(t);
			var s = m(n, "click", (function() {
					return i.previous()
				})),
				c = m(r, "click", (function() {
					return i.next()
				}));
			return i.on("change", a), {
				destroy: function() {
					(i.slides || {}).length > 1 && (s(), c()), o.disconnect(), i.destroy()
				},
				select: function(t) {
					return i.select(t)
				}
			}
		},
		me = "[data-slider]";
	et("blog-posts", {
		onLoad: function() {
			var t = this.container.querySelector(me);
			this.mobileCarousel = ve(t)
		},
		onUnload: function() {
			this.mobileCarousel.destroy()
		}
	});
	var ye = ".mobile-carousel__pagination-arrow",
		be = "[data-js-slide]",
		we = "[data-js-slider]";
	et("carousel", {
		onLoad: function() {
			var t = this,
				e = h(we, this.container),
				n = p(ye, this.container),
				r = h("[data-prev]", this.container),
				i = h("[data-next]", this.container);
			b(n, "visible");
			var o = function() {
				var e = h(".carousel__slide .carousel__image", t.container);
				e && t.container.style.setProperty("--height-carousel", e.offsetHeight + "px")
			};
			this.flkty = new se.a(e, {
				adaptiveHeight: !1,
				cellSelector: be,
				pageDots: !1,
				prevNextButtons: !1,
				setGallerySize: !1,
				wrapAround: !0,
				on: {
					ready: function() {
						return o()
					}
				}
			}), this.flkty.on("resize", (function() {
				return o()
			})), this.prevClick = m(r, "click", (function() {
				return t.flkty.previous()
			})), this.nextClick = m(i, "click", (function() {
				return t.flkty.next()
			}))
		},
		onUnload: function() {
			this.flkty.destroy(), (this.flkty.slides || {}).length > 1 && (this.prevClick(), this.nextClick())
		},
		onBlockSelect: function(t) {
			var e = t.target;
			this.flkty.select(e.dataset.index)
		}
	});
	var Ee = "[data-slider]";
	et("collection-list", {
		onLoad: function() {
			var t = this.container.querySelector(Ee);
			this.mobileCarousel = ve(t, {
				groupCells: 2
			})
		},
		onUnload: function() {
			this.mobileCarousel.destroy()
		},
		onBlockSelect: function(t) {
			var e = t.target;
			this.mobileCarousel.select(e.dataset.index)
		}
	}), et("custom-content", {
		onLoad: function() {},
		onUnload: function() {}
	});
	var _e = "[data-slider]";
	et("featured-collection", {
		onLoad: function() {
			var t = this.container.querySelector(_e);
			this.mobileCarousel = ve(t, {
				groupCells: 2
			})
		},
		onUnload: function() {
			this.mobileCarousel.destroy()
		}
	});
	/*!
	 * slide-anim
	 * https://github.com/yomotsu/slide-anim
	 * (c) 2017 @yomotsu
	 * Released under the MIT License.
	 */
	var Ae = window,
		ke = "function" == typeof Ae.Promise ? Ae.Promise : function(t) {
			var e = function() {};
			return t((function() {
				e()
			})), {
				then: function(t) {
					e = t
				}
			}
		},
		Te = [],
		Se = {
			add: function(t, e, n, r) {
				var i = {
					el: t,
					defaultStyle: e,
					timeoutId: n,
					onCancelled: r
				};
				this.remove(t), Te.push(i)
			},
			remove: function(t) {
				var e = Se.findIndex(t);
				if (-1 !== e) {
					var n = Te[e];
					clearTimeout(n.timeoutId), n.onCancelled(), Te.splice(e, 1)
				}
			},
			find: function(t) {
				return Te[Se.findIndex(t)]
			},
			findIndex: function(t) {
				var e = -1;
				return Te.some((function(n, r) {
					return n.el === t && (e = r, !0)
				})), e
			}
		};

	function xe(t, e) {
		return void 0 === e && (e = {}), new ke((function(n) {
			if (-1 === Se.findIndex(t)) {
				var r = Le(t),
					i = "number" == typeof e.endHeight,
					o = e.display || "block",
					a = e.duration || 400,
					s = e.onCancelled || function() {},
					c = t.getAttribute("style") || "",
					l = window.getComputedStyle(t),
					u = function(t, e) {
						void 0 === e && (e = "block");
						var n = t.getAttribute("style") || "",
							r = window.getComputedStyle(t);
						t.style.visibility = "hidden", t.style.display = e;
						var i = De(r.getPropertyValue("width"));
						t.style.position = "absolute", t.style.width = i + "px", t.style.height = "", t.style.minHeight = "", t.style.paddingTop = "", t.style.paddingBottom = "", t.style.borderTopWidth = "", t.style.borderBottomWidth = "";
						var o = De(r.getPropertyValue("min-height")),
							a = De(r.getPropertyValue("padding-top")),
							s = De(r.getPropertyValue("padding-bottom")),
							c = De(r.getPropertyValue("border-top-width")),
							l = De(r.getPropertyValue("border-bottom-width")),
							u = t.scrollHeight;
						return t.setAttribute("style", n), {
							height: u,
							minHeight: o,
							paddingTop: a,
							paddingBottom: s,
							borderTop: c,
							borderBottom: l
						}
					}(t, o),
					d = /border-box/.test(l.getPropertyValue("box-sizing")),
					f = u.height,
					h = u.minHeight,
					p = u.paddingTop,
					g = u.paddingBottom,
					v = u.borderTop,
					m = u.borderBottom,
					y = a + "ms",
					b = "cubic-bezier( 0.19, 1, 0.22, 1 )",
					w = ["height " + y + " " + b, "min-height " + y + " " + b, "padding " + y + " " + b, "border-width " + y + " " + b].join(),
					E = r ? l.height : "0px",
					_ = r ? l.minHeight : "0px",
					A = r ? l.paddingTop : "0px",
					k = r ? l.paddingBottom : "0px",
					T = r ? l.borderTopWidth : "0px",
					S = r ? l.borderBottomWidth : "0px",
					x = i ? e.endHeight + "px" : d ? f + v + m + "px" : f - p - g + "px",
					C = h + "px",
					O = p + "px",
					L = g + "px",
					q = v + "px",
					D = m + "px";
				if (E !== x || A !== O || k !== L || T !== q || S !== D) {
					requestAnimationFrame((function() {
						t.style.height = E, t.style.minHeight = _, t.style.paddingTop = A, t.style.paddingBottom = k, t.style.borderTopWidth = T, t.style.borderBottomWidth = S, t.style.display = o, t.style.overflow = "hidden", t.style.visibility = "visible", t.style.transition = w, t.style.webkitTransition = w, requestAnimationFrame((function() {
							t.style.height = x, t.style.minHeight = C, t.style.paddingTop = O, t.style.paddingBottom = L, t.style.borderTopWidth = q, t.style.borderBottomWidth = D
						}))
					}));
					var P = setTimeout((function() {
						qe(t), t.style.display = o, i && (t.style.height = e.endHeight + "px", t.style.overflow = "hidden"), Se.remove(t), n()
					}), a);
					Se.add(t, c, P, s)
				} else n()
			}
		}))
	}

	function Ce(t, e) {
		return void 0 === e && (e = {}), new ke((function(n) {
			if (-1 === Se.findIndex(t)) {
				var r = Le(t),
					i = e.display || "block",
					o = e.duration || 400,
					a = e.onCancelled || function() {};
				if (r) {
					var s = t.getAttribute("style") || "",
						c = window.getComputedStyle(t),
						l = /border-box/.test(c.getPropertyValue("box-sizing")),
						u = De(c.getPropertyValue("min-height")),
						d = De(c.getPropertyValue("padding-top")),
						f = De(c.getPropertyValue("padding-bottom")),
						h = De(c.getPropertyValue("border-top-width")),
						p = De(c.getPropertyValue("border-bottom-width")),
						g = t.scrollHeight,
						v = o + "ms",
						m = "cubic-bezier( 0.19, 1, 0.22, 1 )",
						y = ["height " + v + " " + m, "padding " + v + " " + m, "border-width " + v + " " + m].join(),
						b = l ? g + h + p + "px" : g - d - f + "px",
						w = u + "px",
						E = d + "px",
						_ = f + "px",
						A = h + "px",
						k = p + "px";
					requestAnimationFrame((function() {
						t.style.height = b, t.style.minHeight = w, t.style.paddingTop = E, t.style.paddingBottom = _, t.style.borderTopWidth = A, t.style.borderBottomWidth = k, t.style.display = i, t.style.overflow = "hidden", t.style.transition = y, t.style.webkitTransition = y, requestAnimationFrame((function() {
							t.style.height = "0", t.style.minHeight = "0", t.style.paddingTop = "0", t.style.paddingBottom = "0", t.style.borderTopWidth = "0", t.style.borderBottomWidth = "0"
						}))
					}));
					var T = setTimeout((function() {
						qe(t), t.style.display = "none", Se.remove(t), n()
					}), o);
					Se.add(t, s, T, a)
				} else n()
			}
		}))
	}

	function Oe(t) {
		if (Se.find(t)) {
			var e = window.getComputedStyle(t),
				n = e.height,
				r = e.paddingTop,
				i = e.paddingBottom,
				o = e.borderTopWidth,
				a = e.borderBottomWidth;
			qe(t), t.style.height = n, t.style.paddingTop = r, t.style.paddingBottom = i, t.style.borderTopWidth = o, t.style.borderBottomWidth = a, t.style.overflow = "hidden", Se.remove(t)
		}
	}

	function Le(t) {
		return 0 !== t.offsetHeight
	}

	function qe(t) {
		t.style.visibility = "", t.style.height = "", t.style.minHeight = "", t.style.paddingTop = "", t.style.paddingBottom = "", t.style.borderTopWidth = "", t.style.borderBottomWidth = "", t.style.overflow = "", t.style.transition = "", t.style.webkitTransition = ""
	}

	function De(t) {
		return +t.replace(/px/, "")
	}

	function Pe(t) {
		var e = p(".accordion__label", t);
		e.forEach((function(t) {
			t.href = "#";
			var e = document.createElement("div");
			e.classList.add("icon"), e.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24"><path d="M7 10L12 15L17 10H7Z" fill="currentColor"/></svg>', t.append(e)
		}));
		var n = m(e, "click", (function(t) {
			var e = t.currentTarget,
				n = e.parentNode,
				r = e.nextElementSibling;
			t.preventDefault(), Oe(r), Le(r) ? (Ce(r), n.setAttribute("data-open", !1)) : (xe(r), n.setAttribute("data-open", !0))
		}));
		return {
			destroy: function() {
				return function() {
					return n()
				}
			}
		}
	}

	function je(t) {
		var e = t.map(Pe);
		return {
			accordions: e,
			destroy: function() {
				e.forEach((function(t) {
					return t.destroy()
				}))
			}
		}
	}

	function Ie(t) {
		var e = window,
			n = e.Shopify,
			r = e.YT,
			i = p("[data-interactive]", t);
		if (i.length) {
			var o = ["video", "model", "external_video"],
				a = null,
				s = !1,
				c = {};
			return s && i.forEach(l), window.Shopify.loadFeatures([{
				name: "model-viewer-ui",
				version: "1.0"
			}, {
				name: "shopify-xr",
				version: "1.0"
			}, {
				name: "video-ui",
				version: "1.0"
			}], (function() {
				s = !0, "YT" in window && Boolean(r.loaded) ? i.forEach(l) : window.onYouTubeIframeAPIReady = function() {
					i.forEach(l)
				}
			})), {
				pauseActiveMedia: u
			}
		}

		function l(t) {
			var e = t.dataset,
				i = e.mediaId,
				s = e.mediaType;
			if (s && o.includes(s) && !Object.keys(c).includes(i)) {
				var l = {
					id: i,
					type: s,
					container: t,
					media: t.children[0]
				};
				switch (l.type) {
					case "video":
						l.player = new n.Plyr(l.media, {
							loop: {
								active: "true" == t.dataset.loop
							}
						});
						break;
					case "external_video":
						l.player = new r.Player(l.media);
						break;
					case "model":
						l.viewer = new n.ModelViewerUI(h("model-viewer", t)), m(h(".model-poster", t), "click", (function(t) {
							t.preventDefault(),
								function(t) {
									u(t), t.viewer.play(), b(t.container, "model-active"), a = t, setTimeout((function() {
										h("model-viewer", t.container).focus()
									}), 300)
								}(l)
						}))
				}
				c[i] = l, l.player && ("video" === l.type ? l.player.on("playing", (function() {
					u(l), a = l
				})) : "external_video" === l.type && l.player.addEventListener("onStateChange", (function(t) {
					1 === t.data && (u(l), a = l)
				})))
			}
		}

		function u(t) {
			if (a && t != a) return a.player ? ("video" === a.type ? a.player.pause() : "external_video" === a.type && a.player.pauseVideo(), void(a = null)) : void(a.viewer && (w(a.container, "model-active"), a.viewer.pause(), a = null))
		}
	}

	function Ne(t) {
		var e = t.map(Me);
		return {
			groups: e,
			destroy: function() {
				e && e.forEach((function(t) {
					return t()
				}))
			}
		}
	}

	function Me(t) {
		var e = h("select", t),
			n = p("[data-button]", t),
			r = m(n, "click", (function(t) {
				t.preventDefault();
				var r = t.currentTarget.dataset.button;
				n.forEach((function(t) {
					return E(t, "selected", t.dataset.button === r)
				})), h('[value="'.concat(r, '"]'), e).selected = !0, e.dispatchEvent(new Event("change"))
			}));
		return function() {
			return r()
		}
	}
	var ze = n(19),
		Re = n.n(ze),
		Be = '[name="id"]',
		Fe = '[name^="options"]',
		He = '[name="quantity"]',
		Ve = '[name^="properties"]';

	function Ue(t, e) {
		var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
			r = We(e),
			i = [],
			o = function() {
				return Ge(p, (function(t) {
					return t.name = /(?:^(options\[))(.*?)(?:\])/.exec(t.name)[2], t
				}))
			},
			a = function() {
				return k(r, o())
			},
			s = function() {
				var t = $e(v, (function(t) {
					return /(?:^(properties\[))(.*?)(?:\])/.exec(t)[2]
				}));
				return 0 === Object.entries(t).length ? null : t
			},
			c = function() {
				return g[0] ? Number.parseInt(g[0].value, 10) : 1
			},
			l = function() {
				return {
					options: o(),
					variant: a(),
					properties: s(),
					quantity: c()
				}
			},
			u = function(t) {
				if (void 0 !== t) return function(e) {
					e.dataset = l(), t(e)
				}
			},
			d = function(e) {
				var n = t.querySelector(Be);
				n || ((n = document.createElement("input")).type = "hidden", n.name = "id", t.appendChild(n)), n.value = e.toString()
			},
			f = function(t) {
				t.dataset = l(), d(t.dataset.variant.id), n.onFormSubmit && n.onFormSubmit(t)
			},
			h = function(e, n) {
				return D()(t.querySelectorAll(e)).map((function(t) {
					return i.push(m(t, "change", u(n))), t
				}))
			};
		i.push(m(t, "submit", f));
		var p = h(Fe, n.onOptionChange),
			g = h(He, n.onQuantityChange),
			v = h(Ve, n.onPropertyChange),
			y = function() {
				i.forEach((function(t) {
					return t()
				}))
			};
		return {
			getVariant: a,
			destroy: y
		}
	}

	function We(t) {
		if ("object" !== Re()(t)) throw new TypeError(t + " is not an object.");
		if (void 0 === t.variants[0].options) throw new TypeError("Product object is invalid. Make sure you use the product object that is output from {{ product | json }} or from the http://[your-product-url].js route");
		return t
	}

	function Ge(t, e) {
		return t.reduce((function(t, n) {
			return (n.checked || "radio" !== n.type && "checkbox" !== n.type) && t.push(e({
				name: n.name,
				value: n.value
			})), t
		}), [])
	}

	function $e(t, e) {
		return t.reduce((function(t, n) {
			return (n.checked || "radio" !== n.type && "checkbox" !== n.type) && (t[e(n.name)] = n.value), t
		}), {})
	}
	var Je = "[data-store-availability-modal-trigger]",
		Ye = "[data-store-availability-list-content]",
		Xe = function(t, e, n, r) {
			var i = null,
				o = n,
				a = new f.a(t),
				s = function(e) {
					o = e;
					var n = "".concat(t.dataset.baseUrl, "/variants/").concat(e.id, "/?section_id=store-availability");
					t.innerHTML = "", fetch(n).then((function(t) {
						return t.text()
					})).then((function(e) {
						"" !== e.trim() && (t.innerHTML = e.trim(), t.innerHTML = t.firstElementChild.innerHTML, i = h(Ye, t))
					}))
				};
			s(n), a.on("click", Je, (function(t) {
				t.preventDefault(), B("availability:showMore", (function() {
					return {
						product: e,
						variant: o,
						storeList: i,
						options: r
					}
				}))
			}));
			return {
				unload: function() {
					t.innerHTML = ""
				},
				update: s
			}
		},
		Qe = "[data-product-form]",
		Ze = "[data-add-to-cart]",
		Ke = "[data-price]",
		tn = "[data-compare-price]",
		en = "[data-variant-select]",
		nn = function(t) {
			return "[value='".concat(t, "']")
		},
		rn = "[data-store-availability-container]";

	function on(t, e) {
		var n = h("[data-add-to-cart-text]", t),
			r = t.dataset,
			i = r.langAvailable,
			o = r.langUnavailable,
			a = r.langSoldOut;
		e ? e.available ? (t.removeAttribute("disabled"), n.textContent = i) : (t.setAttribute("disabled", "disabled"), n.textContent = a) : (t.setAttribute("disabled", "disabled"), n.textContent = o)
	}
	et("featured-product", {
		productForm: null,
		onLoad: function() {
			var t = this,
				e = this.container.dataset.productHasOnlyDefaultVariant;
			if (this.formElement = h(Qe, this.container), this.formElement) {
				var n = this.formElement.dataset.productHandle;
				this.storeAvailabilityContainer = this.formElement.querySelector(rn), this.availability = null, tt(n)((function(n) {
					t.productForm = Ue(t.formElement, n, {
						onOptionChange: function(e) {
							return t.onOptionChange(e)
						},
						onFormSubmit: t.onFormSubmit
					});
					var r = t.productForm.getVariant();
					t.storeAvailabilityContainer && r && (t.availability = Xe(t.storeAvailabilityContainer, n, r, {
						hideVariantTitle: "true" === e
					}))
				})), this.images = p("[data-media]", this.container), this.media = Ie(h(".featured-product__media-container", this.container)), this.optionButtons = Ne(p("[data-option-buttons]", this.container));
				var r = h("[data-share]", this.container);
				if (r) {
					var i = h("[data-description]", this.container).childNodes || null,
						o = i ? i[i.length - 1] : null;
					if (o && "DIV" === o.nodeName && o.classList.contains("accordion")) {
						var a = '\n            <div class="accordion__group">\n              <a class="accordion__label">'.concat(r.dataset.share, '</a>\n              <div class="accordion__text">').concat(r.innerHTML, "</div>\n            </div>\n          ");
						o.insertAdjacentHTML("beforeend", a), r.style.display = "none"
					}
				}
				this.accordions = je(p(".accordion", this.container)), it();
				var s = h(".product-form", this.container);
				this.observer = new MutationObserver((function(e) {
					e.forEach((function(e) {
						if (D()(e.removedNodes).find((function(t) {
								return t.classList.contains("shopify-product-reviews-badge")
							}))) {
							t.observer.disconnect();
							var n = h(".spr-badge", t.container),
								r = document.createElement("label");
							r.classList.add("pf-review-label"), r.textContent = window.theme.strings.product.reviews || "Reviews", n.prepend(r)
						}
					}))
				})), this.observer.observe(s, {
					childList: !0
				})
			}
		},
		onUnload: function() {
			this.productForm && (this.optionButtons.destroy(), this.productForm.destroy(), this.accordions.destroy(), this.observer.disconnect())
		},
		onOptionChange: function(t) {
			var e = t.dataset.variant;
			if (Ut(this.container, e), !e) return on(h("[data-add-to-cart]", this.container), !1), void(this.availability && this.availability.unload());
			(e.featured_media || {}).id && (this.media && this.media.pauseActiveMedia(), this.images.forEach((function(t) {
				E(t, "visible", t.dataset.media === String(e.featured_media.id))
			}))), this.updatePrices(e), h("".concat(en, " ").concat(nn(e.id)), this.container).selected = !0, this.availability && this.availability.update(e), this.formElement.dispatchEvent(new Event("change"))
		},
		onFormSubmit: function(t) {
			if (document.body.dataset.enableCartAjax) {
				t.preventDefault();
				var e = t.dataset,
					n = e.variant,
					r = e.quantity,
					i = h(Ze, this.container);
				b(i, "loading"), Q.addVariant(n, r).then((function() {
					w(i, "loading"), B("cart:open", null, {
						flash: n.id
					})
				}))
			}
		},
		updatePrices: function(t) {
			var e = p(Ke, this.container),
				n = p(tn, this.container),
				r = h("[data-add-to-cart]", this.container);
			e.forEach((function(e) {
				return e.innerHTML = K(t.price)
			})), n.forEach((function(e) {
				return e.innerHTML = t.compare_at_price > t.price ? K(t.compare_at_price) : ""
			})), on(r, t)
		}
	});
	var an = "[data-slider]";
	et("featured-products", {
		onLoad: function() {
			var t = h(an, this.container);
			t && (this.mobileCarousel = ve(t, {
				adaptiveHeight: !1,
				groupCells: 2
			}))
		},
		onUnload: function() {
			this.mobileCarousel.destroy()
		}
	});
	var sn = ".selectors-form",
		cn = "[data-disclosure-list]",
		ln = "[data-disclosure-toggle]",
		un = "[data-disclosure-input]",
		dn = "[data-disclosure-option]",
		fn = "disclosure-list--visible";

	function hn(t, e) {
		return t.map((function(t) {
			return t.contains(e)
		})).filter(Boolean)
	}
	var pn = "[data-disclosure]",
		gn = "[data-header]";
	et("footer", {
		crossBorder: {},
		onLoad: function() {
			var t = this,
				e = p(gn, this.container);
			this.headerClick = m(e, "click", (function(t) {
				var e = t.currentTarget,
					n = e.nextElementSibling;
				E(e, "open", !Le(n)), Oe(n), Le(n) ? Ce(n) : xe(n)
			}));
			var n = p(pn, this.container);
			n && n.forEach((function(e) {
				var n = e.dataset.disclosure;
				t.crossBorder[n] = function(t) {
					var e = t.closest(sn),
						n = h(cn, t),
						r = h(ln, t),
						i = h(un, t),
						o = p(dn, t),
						a = [m(r, "click", (function(t) {
							var e = !0 === t.currentTarget.getAttribute("aria-expanded");
							t.currentTarget.setAttribute("aria-expanded", !e), n.classList.toggle(fn)
						})), m(o, "click", (function(t) {
							t.preventDefault();
							var n = t.currentTarget.dataset.value;
							i.value = n, e.submit()
						})), m(document, "click", (function(e) {
							var r = hn([t], e.target).length > 0;
							n.classList.contains(fn) && !r && s()
						})), m(r, "focusout", (function(e) {
							0 === hn([t], e.relatedTarget).length && s()
						})), m(n, "focusout", (function(e) {
							var r = hn([t], e.relatedTarget).length > 0;
							n.classList.contains(fn) && !r && s()
						})), m(t, "keyup", (function(t) {
							if (27 !== t.which) return;
							s(), r.focus()
						}))];

					function s() {
						r.setAttribute("aria-expanded", !1), n.classList.remove(fn)
					}
					return {
						unload: function() {
							a.forEach((function(t) {
								return t()
							}))
						}
					}
				}(e)
			}))
		},
		onUnload: function() {
			var t = this;
			this.headerClick(), Object.keys(this.crossBorder).forEach((function(e) {
				return t.crossBorder[e].unload()
			}))
		}
	});
	var vn = "[data-slider]";
	et("gallery", {
		onLoad: function() {
			var t = this.container.querySelector(vn);
			this.mobileCarousel = ve(t)
		},
		onUnload: function() {
			this.mobileCarousel.destroy()
		},
		onBlockSelect: function(t) {
			var e = t.target;
			this.mobileCarousel.select(e.dataset.index)
		}
	});
	var mn = n(20),
		yn = function(t) {
			return function(e) {
				e.preventDefault(), t()
			}
		},
		bn = n(21),
		wn = n.n(bn),
		En = '\n    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n      <path d="M0 0h24v24H0z" fill="none" />\n      <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" fill="currentColor" />\n    </svg>\n  ',
		_n = '\n    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n      <path d="M0 0h24v24H0z" fill="none" />\n      <path d="M19 13H5v-2h14v2z" fill="currentColor" />\n    </svg>\n  ';

	function An(t) {
		var e = new f.a(t),
			n = h("[data-overlay]", t),
			r = h("[data-cart]", t),
			i = h("[data-configure]", t),
			o = h("[data-items]", t),
			a = h("[data-empty]", t),
			s = h("[data-footer]", t),
			c = h("[data-discounts]", s),
			l = h("[data-subtotal]", s),
			u = h("[data-add]", i),
			d = h("[data-contents]", u);
		e.on("click", "button[data-decrease]", (function(t, e) {
			var n = parseInt(h("[data-qty]", e.parentNode).innerHTML) - 1;
			Q.updateItem(e.dataset.decrease, n)
		})), e.on("click", "button[data-increase]", (function(t, e) {
			var n = parseInt(h("[data-qty]", e.parentNode).innerHTML) + 1;
			Q.updateItem(e.dataset.increase, n)
		}));
		var g = _t(r, {
				allowOutsideClick: !0,
				escapeDeactivates: !1
			}),
			v = _t(i, {
				allowOutsideClick: !0,
				escapeDeactivates: !1
			});
		Q.get().then(T), R("cart:updated", (function(t) {
			return T(t.cart)
		}));
		var y = m(n, "click", k),
			_ = m(t, "keydown", (function(t) {
				27 === t.keyCode && k()
			}));

		function A(e, n) {
			b(t, "active"), setTimeout((function() {
				Nt(t, {
					allowTouchMove: function(t) {
						for (; t && t !== document.body;) {
							if (null !== t.getAttribute("data-scroll-lock-ignore")) return !0;
							t = t.parentNode
						}
					},
					reserveScrollBarGap: !0
				}), b(t, "visible"), E(i, "visible", !0 === n), E(r, "visible", !n), !n && g.activate(), e && (b(h('[data-id="'.concat(e, '"]'), t), "flash"), setTimeout((function() {
					w(h('[data-id="'.concat(e, '"]'), t), "flash")
				}), 2e3))
			}), 50)
		}

		function k() {
			w(t, "visible"), setTimeout((function() {
				w(t, "active"), Mt(t), w(i, "visible"), b(u, "loading"), b(r, "visible"), g.deactivate(), v.deactivate()
			}), 350)
		}

		function T(t) {
			var e, n = t.cart_level_discount_applications;
			o.innerHTML = kn((e = t.sorted).length > 0, e.reduce((function(t, e) {
				return t + function(t) {
					var e, n, r, i = t.line_level_discount_allocations,
						o = wn()(t, ["line_level_discount_allocations"]),
						a = kn(o.image, '<img class="image__img lazyload" data-src="'.concat(Object(zt.getSizedImageUrl)(o.image, "120x"), '" />')),
						s = o.selling_plan_allocation ? '<p class="fs-body-small c-subdued">'.concat(o.selling_plan_allocation.selling_plan.name, "</p>") : "";
					return '\n    <div class="quick-cart__item ff-body" data-id="'.concat(o.variant_id, '">\n      <div class="quick-cart__item-left">\n        <a href="').concat(o.url, '">\n          <div class="quick-cart__image">').concat(a, '</div>\n        </a>\n        <div class="quick-cart__control">\n          <button class="quick-cart__button" data-decrease="').concat(o.variant_id, '" href="#">\n            ').concat(_n, '\n          </button>\n          <div class="quick-cart__qty ff-body ta-c" data-qty>').concat(o.quantity, '</div>\n          <button class="quick-cart__button" data-increase="').concat(o.variant_id, '" href="#">\n            ').concat(En, '\n          </button>\n        </div>\n      </div>\n      <div class="quick-cart__item-right">\n        <h4><a href="').concat(o.url, '">').concat(o.product_title, "</a></h4>\n        <div>\n          ").concat(kn(o.original_price > o.final_price, '<s class="qty">'.concat(K(o.original_price), "</s>")), "\n          ").concat(K(o.final_price), "\n          ").concat(kn(o.quantity > 1, '<span class="c-subdued">x '.concat(o.quantity, "</span>")), "\n        </div>\n        ").concat((e = o, n = e.options_with_values, r = e.variant_title, kn(n.length > 0 && r, n.reduce((function(t, e) {
						var n = e.name,
							r = e.value;
						return t + "<div>".concat(n, ": ").concat(r, "</div>")
					}), ""))), "\n        ").concat(function(t) {
						var e = t.map((function(t) {
							var e = t.amount,
								n = t.discount_application.title;
							return "<li>".concat(n, " (-").concat(K(e), ")</li>")
						}));
						return kn(Boolean(t.length), '<ul class="quick-cart__item-discounts c-subdued">'.concat(e, "</ul>"))
					}(i), "\n        ").concat(Wt(o.unit_price, o.unit_price_measurement), "\n        ").concat(s, "\n      </div>\n    </div>\n  ")
				}(e)
			}), "")), c.innerHTML = function(t) {
				return kn(Boolean(t.length), "\n      <ul>\n        ".concat(t.map((function(t) {
					var e = t.title,
						n = t.total_allocated_amount;
					return "<div>".concat(e, " (-").concat(K(n), ")</div>")
				})), "\n      </ul>\n    "))
			}(n), E(s, "visible", t.sorted.length), E(a, "visible", !t.sorted.length), E(c, "visible", n.length), l && (l.innerHTML = K(t.total_price))
		}
		return R("cart:open", (function(t, e) {
			return A(e.flash)
		})), R("cart:configureLoading", (function() {
			A(!1, !0), w(r, "visible"), b(i, "visible")
		})), R("cart:configureReady", (function(t, e) {
			var n = e.html,
				r = e.handle;
			tt(r)((function(t) {
				w(u, "loading"), d.innerHTML = n,
					function(t, e) {
						var n = h("[data-add-to-cart]", e),
							r = h("[data-error-message]", e),
							i = new L(h("[data-product-form]", e), t, {
								onOptionChange: function(t) {
									var r = t.dataset.variant,
										i = p(nt, e),
										o = p(rt, e);
									i.forEach((function(t) {
										return t.innerHTML = K(r.price)
									})), o.forEach((function(t) {
										return t.innerHTML = r.compare_at_price > r.price ? K(r.compare_at_price) : ""
									}));
									var a = h("[data-add-to-cart-text]", n),
										s = n.dataset,
										c = s.langAvailable,
										l = s.langSoldOut;
									r.available ? (n.removeAttribute("disabled"), a.textContent = c) : (n.setAttribute("disabled", "disabled"), a.textContent = l)
								},
								onFormSubmit: function(t) {
									t.preventDefault(), b(n, "loading"), w(r, "visible"), Q.addItem(i.element).then((function(t) {
										var e = t.item;
										w(n, "loading"), B("cart:open", null, {
											flash: e.variant_id
										})
									})).catch((function(t) {
										w(n, "loading"), b(r, "visible"), r.innerText = t.message
									}))
								}
							})
					}(t, i), v.activate()
			}))
		})), {
			open: A,
			close: k,
			destroy: function() {
				y(), _()
			}
		}
	}

	function kn(t, e) {
		return t ? e : ""
	}

	function Tn() {
		var t = Error.call(this);
		return t.name = "Server error", t.message = "Something went wrong on the server", t.status = 500, t
	}

	function Sn(t) {
		var e = Error.call(this);
		return e.name = "Not found", e.message = "Not found", e.status = t, e
	}

	function xn() {
		var t = Error.call(this);
		return t.name = "Server error", t.message = "Something went wrong on the server", t.status = 500, t
	}

	function Cn(t) {
		var e = Error.call(this);
		return e.name = "Content-Type error", e.message = "Content-Type was not provided or is of wrong type", e.status = t, e
	}

	function On(t) {
		var e = Error.call(this);
		return e.name = "JSON parse error", e.message = "JSON syntax error", e.status = t, e
	}

	function Ln(t, e, n, r) {
		var i = Error.call(this);
		return i.name = e, i.message = n, i.status = t, i.retryAfter = r, i
	}

	function qn(t, e, n) {
		var r = Error.call(this);
		return r.name = e, r.message = n, r.status = t, r
	}

	function Dn(t, e, n) {
		var r = Error.call(this);
		return r.name = e, r.message = n, r.status = t, r
	}

	function Pn() {
		this.events = {}
	}

	function jn(t) {
		this.eventName = t, this.callbacks = []
	}

	function In(t) {
		this._store = {}, this._keys = [], t && t.bucketSize ? this.bucketSize = t.bucketSize : this.bucketSize = 20
	}

	function Nn(t, e) {
		var n = "";
		return e = e || null, Object.keys(t).forEach((function(r) {
			var i = r + "=";
			switch (e && (i = e + "[" + r + "]"), function(t) {
					return Object.prototype.toString.call(t).slice(8, -1).toLowerCase()
				}(t[r])) {
				case "object":
					n += Nn(t[r], e ? i : r);
					break;
				case "array":
					n += i + "=" + t[r].join(",") + "&";
					break;
				default:
					e && (i += "="), n += i + encodeURIComponent(t[r]) + "&"
			}
		})), n
	}
	Pn.prototype.on = function(t, e) {
		var n = this.events[t];
		n || (n = new jn(t), this.events[t] = n), n.registerCallback(e)
	}, Pn.prototype.off = function(t, e) {
		var n = this.events[t];
		n && n.callbacks.indexOf(e) > -1 && (n.unregisterCallback(e), 0 === n.callbacks.length && delete this.events[t])
	}, Pn.prototype.dispatch = function(t, e) {
		var n = this.events[t];
		n && n.fire(e)
	}, jn.prototype.registerCallback = function(t) {
		this.callbacks.push(t)
	}, jn.prototype.unregisterCallback = function(t) {
		var e = this.callbacks.indexOf(t);
		e > -1 && this.callbacks.splice(e, 1)
	}, jn.prototype.fire = function(t) {
		this.callbacks.slice(0).forEach((function(e) {
			e(t)
		}))
	}, In.prototype.set = function(t, e) {
		if (this.count() >= this.bucketSize) {
			var n = this._keys.splice(0, 1);
			this.delete(n)
		}
		return this._keys.push(t), this._store[t] = e, this._store
	}, In.prototype.get = function(t) {
		return this._store[t]
	}, In.prototype.has = function(t) {
		return Boolean(this._store[t])
	}, In.prototype.count = function() {
		return Object.keys(this._store).length
	}, In.prototype.delete = function(t) {
		var e = Boolean(this._store[t]);
		return delete this._store[t], e && !this._store[t]
	};
	var Mn, zn, Rn, Bn = (Mn = function(t, e, n, r) {
		var i = new XMLHttpRequest;
		i.onreadystatechange = function() {
			if (i.readyState !== XMLHttpRequest.DONE);
			else {
				var t = i.getResponseHeader("Content-Type");
				if (i.status >= 500) return void r(new xn);
				if (404 === i.status) return void r(new Sn(i.status));
				if ("string" != typeof t || null === t.toLowerCase().match("application/json")) return void r(new Cn(i.status));
				if (417 === i.status) {
					try {
						var o = JSON.parse(i.responseText);
						r(new qn(i.status, o.message, o.description))
					} catch (t) {
						r(new On(i.status))
					}
					return
				}
				if (422 === i.status) {
					try {
						var a = JSON.parse(i.responseText);
						r(new Dn(i.status, a.message, a.description))
					} catch (t) {
						r(new On(i.status))
					}
					return
				}
				if (429 === i.status) {
					try {
						var s = JSON.parse(i.responseText);
						r(new Ln(i.status, s.message, s.description, i.getResponseHeader("Retry-After")))
					} catch (t) {
						r(new On(i.status))
					}
					return
				}
				if (200 === i.status) {
					try {
						var c = JSON.parse(i.responseText);
						c.query = e, n(c)
					} catch (t) {
						r(new On(i.status))
					}
					return
				}
				try {
					var l = JSON.parse(i.responseText);
					r(new Tn(i.status, l.message, l.description))
				} catch (t) {
					r(new On(i.status))
				}
			}
		}, i.open("get", "/search/suggest.json?q=" + encodeURIComponent(e) + "&" + t), i.setRequestHeader("Content-Type", "application/json"), i.send()
	}, zn = 10, Rn = null, function() {
		var t = this,
			e = arguments;
		clearTimeout(Rn), Rn = setTimeout((function() {
			Rn = null, Mn.apply(t, e)
		}), zn || 0)
	});

	function Fn(t) {
		if (!t) throw new TypeError("No config object was specified");
		this._retryAfter = null, this._currentQuery = null, this.dispatcher = new Pn, this.cache = new In({
			bucketSize: 40
		}), this.configParams = Nn(t)
	}

	function Hn(t) {
		return "string" != typeof t ? null : t.trim().replace(" ", "-").toLowerCase()
	}
	Fn.TYPES = {
		PRODUCT: "product",
		PAGE: "page",
		ARTICLE: "article"
	}, Fn.FIELDS = {
		AUTHOR: "author",
		BODY: "body",
		PRODUCT_TYPE: "product_type",
		TAG: "tag",
		TITLE: "title",
		VARIANTS_BARCODE: "variants.barcode",
		VARIANTS_SKU: "variants.sku",
		VARIANTS_TITLE: "variants.title",
		VENDOR: "vendor"
	}, Fn.UNAVAILABLE_PRODUCTS = {
		SHOW: "show",
		HIDE: "hide",
		LAST: "last"
	}, Fn.prototype.query = function(t) {
		try {
			! function(t) {
				var e;
				if (null == t) throw (e = new TypeError("'query' is missing")).type = "argument", e;
				if ("string" != typeof t) throw (e = new TypeError("'query' is not a string")).type = "argument", e
			}(t)
		} catch (t) {
			return void this.dispatcher.dispatch("error", t)
		}
		if ("" === t) return this;
		this._currentQuery = Hn(t);
		var e = this.cache.get(this._currentQuery);
		return e ? (this.dispatcher.dispatch("success", e), this) : (Bn(this.configParams, t, function(t) {
			this.cache.set(Hn(t.query), t), Hn(t.query) === this._currentQuery && (this._retryAfter = null, this.dispatcher.dispatch("success", t))
		}.bind(this), function(t) {
			t.retryAfter && (this._retryAfter = t.retryAfter), this.dispatcher.dispatch("error", t)
		}.bind(this)), this)
	}, Fn.prototype.on = function(t, e) {
		return this.dispatcher.on(t, e), this
	}, Fn.prototype.off = function(t, e) {
		return this.dispatcher.off(t, e), this
	};
	var Vn = n(6),
		Un = n.n(Vn),
		Wn = n(22),
		Gn = n.n(Wn);

	function $n(t) {
		var e = t.onfocus,
			n = document.createElement("div");
		return n.style.cssText = "\n    width: 1px;\n    height: 0px;\n    padding: 0px;\n    overflow: hidden;\n    position: fixed;\n    top: 1px;\n    left: 1px;\n  ", n.onfocus = e, n.setAttribute("tabindex", "0"), n.setAttribute("aria-hidden", "true"), n.setAttribute("data-lockbox", ""), n
	}

	function Jn(t) {
		if (t) {
			var e, n, r = document.activeElement,
				i = Gn()(t);
			if (!t.querySelector("[data-lockbox]")) {
				e = $n({
					onfocus: function() {
						var t = i[i.length - 1];
						t && t.focus()
					}
				}), n = $n({
					onfocus: function() {
						var t = i[0];
						t && t.focus()
					}
				}), t.insertBefore(e, t.children[0]), t.appendChild(n);
				var o = i[0];
				o && o.focus()
			}
			return function() {
				t.removeChild(e), t.removeChild(n), r.focus()
			}
		}
	}
	var Yn = window.theme.strings,
		Xn = "active",
		Qn = "visible",
		Zn = function(t) {
			var e = h("[data-overlay]", t),
				n = h("form", t),
				r = h("[data-input]", t),
				i = h("[data-clear]", t),
				o = h("[data-results]", t),
				a = h("[data-settings]", t),
				s = JSON.parse(a.innerHTML),
				c = s.limit,
				l = s.show_articles,
				u = s.show_pages,
				d = s.show_price,
				f = s.show_vendor,
				p = "",
				g = function() {},
				v = m(e, "click", C),
				y = m(i, "click", (function(t) {
					t.preventDefault(), r.value = "", w([o, i], Qn), r.focus()
				})),
				_ = m(t, "keydown", (function(t) {
					27 === t.keyCode && C()
				})),
				A = m(r, "input", (function(t) {
					"" === t.target.value && w(o, Qn);
					E(i, Qn, "" !== t.target.value), E(o, Qn, "" !== t.target.value), T.query(t.target.value)
				})),
				k = [l && Fn.TYPES.ARTICLE, u && Fn.TYPES.PAGE, Fn.TYPES.PRODUCT].filter(Boolean),
				T = new Fn({
					resources: {
						type: k,
						limit: c,
						options: {
							unavailable_products: "last",
							fields: [Fn.FIELDS.TITLE, Fn.FIELDS.PRODUCT_TYPE, Fn.FIELDS.VARIANTS_TITLE, Fn.FIELDS.VENDOR]
						}
					}
				});

			function S(t, e, n) {
				return t.length < 1 ? "" : '<div class="quick-search__header ff-meta fs-meta">'.concat(e, "</div>") + t.map(n).join("")
			}

			function x(t) {
				var e = t.url,
					n = t.image,
					r = t.heading,
					i = t.subheading,
					o = new RegExp("(" + p + ")", "gi"),
					a = r.replace(o, '<span class="hl">$1</span>'),
					s = i.replace(o, '<span class="hl">$1</span>'),
					c = n ? '<img class="image__img lazyload" data-src="'.concat(Object(zt.getSizedImageUrl)(n, "120x"), '" />') : '\n  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n    <path d="M3 7A2 2 0 0 0 1 9V17H3V13H5V17H7V9A2 2 0 0 0 5 7H3M3 9H5V11H3M15 10.5V9A2 2 0 0 0 13 7H9V17H13A2 2 0 0 0 15 15V13.5A1.54 1.54 0 0 0 13.5 12A1.54 1.54 0 0 0 15 10.5M13 15H11V13H13V15M13 11H11V9H13M19 7A2 2 0 0 0 17 9V15A2 2 0 0 0 19 17H21A2 2 0 0 0 23 15V14H21V15H19V9H21V10H23V9A2 2 0 0 0 21 7Z" fill="currentColor" />\n  </svg>\n';
				return '\n      <a class="quick-search__result" href="'.concat(e, '">\n        <div class="quick-search__result-image">').concat(c, '</div>\n        <div class="quick-search__result-details ff-body">\n          <div class="quick-search__result-heading">').concat(a, '</div>\n          <div class="quick-search__result-subheading">').concat(s, "</div>\n        </div>\n      </a>\n  ")
			}

			function C() {
				w(t, Qn), setTimeout((function() {
					w(t, Xn), Mt(t), g()
				}), 350)
			}
			return T.on("success", (function(t) {
				var e = t.query,
					n = t.resources.results;
				p = e,
					function(t) {
						var e = t.articles,
							n = t.pages,
							r = t.products,
							i = "";
						r.length && (i = S(r, Yn.search.headings.products, (function(t) {
							var e = t.url,
								n = t.image,
								r = t.title,
								i = t.price,
								o = t.vendor,
								a = K(i * window.Shopify.currency.rate * 100);
							return x({
								url: e,
								image: n,
								heading: r,
								subheading: [f && o, d && Un()(a)].filter(Boolean).join(" • ")
							})
						}))), n && (i += S(n, Yn.search.headings.pages, (function(t) {
							var e = t.url,
								n = t.image,
								r = t.title,
								i = t.body;
							return x({
								url: e,
								image: n,
								heading: r,
								subheading: Un()(i)
							})
						}))), e && (i += S(e, Yn.search.headings.articles, (function(t) {
							var e = t.url,
								n = t.image,
								r = t.title,
								i = t.body;
							return x({
								url: e,
								image: n,
								heading: r,
								subheading: Un()(i)
							})
						})));
						var a = i ? '\n      <div class="quick-search__view-all ff-body">\n        <button type="submit">'.concat(Yn.search.view_all, "</button>\n      </div>\n    ") : "";
						i || (i = '\n          <div class="quick-search__no-results">\n            '.concat(Yn.search.no_results, "\n          </div>\n        ")), o.innerHTML = i + a
					}(n)
			})), T.on("error", (function(t) {
				console.log("Predictive Search Error:", t.message)
			})), {
				open: function() {
					b(t, Xn), setTimeout((function() {
						g = Jn(n), r.focus(), Nt(t, {
							reserveScrollBarGap: !0
						}), b(t, Qn)
					}), 50)
				},
				close: C,
				destroy: function() {
					C(), v(), y(), _(), A()
				}
			}
		},
		Kn = "[data-collection]",
		tr = "[data-image]",
		er = "[data-overlay]",
		nr = "[data-trigger]",
		rr = "[data-submenu]";

	function ir(t) {
		var e, n = h(tr, t),
			r = p(nr, t),
			i = p(rr, t),
			o = p(Kn, t),
			a = p(".image", t),
			s = h(".image--mega-nav-image", t),
			c = Boolean(t.dataset.showImages),
			l = c,
			u = [m(h(er, t), "click", d), m(r, "click", (function(t) {
				t.preventDefault();
				var e = t.currentTarget.dataset.trigger;
				c && (w(n, "visible"), w(s, "active"), l = !1), i.forEach((function(t) {
					E(t, "visible", t.dataset.submenu === e)
				}))
			})), c && m(o, "mouseover", (function(t) {
				var e = t.currentTarget.dataset.collection;
				a.forEach((function(t) {
					E(t, "active", t.classList.contains("image--".concat(e)))
				})), l || b(n, "visible")
			})), c && m(o, "mouseout", (function() {
				w(a, "active"), s && E(s, "active", l), E(n, "visible", l)
			})), m(t, "keydown", (function(t) {
				27 === t.keyCode && d()
			}))].filter(Boolean);

		function d() {
			w(t, "visible"), setTimeout((function() {
				w(t, "active"), Mt(t), e(), u.forEach((function(t) {
					return t()
				}))
			}), 350)
		}
		return {
			open: function() {
				b(t, "active"), setTimeout((function() {
					e = Jn(t), Nt(t, {
						reserveScrollBarGap: !0
					}), b(t, "visible"), c && b(s, "active"), h("a", t).focus()
				}), 50)
			},
			close: d
		}
	}
	var or = {
			update: null,
			begin: null,
			loopBegin: null,
			changeBegin: null,
			change: null,
			changeComplete: null,
			loopComplete: null,
			complete: null,
			loop: 1,
			direction: "normal",
			autoplay: !0,
			timelineOffset: 0
		},
		ar = {
			duration: 1e3,
			delay: 0,
			endDelay: 0,
			easing: "easeOutElastic(1, .5)",
			round: 0
		},
		sr = ["translateX", "translateY", "translateZ", "rotate", "rotateX", "rotateY", "rotateZ", "scale", "scaleX", "scaleY", "scaleZ", "skew", "skewX", "skewY", "perspective", "matrix", "matrix3d"],
		cr = {
			CSS: {},
			springs: {}
		};

	function lr(t, e, n) {
		return Math.min(Math.max(t, e), n)
	}

	function ur(t, e) {
		return t.indexOf(e) > -1
	}

	function dr(t, e) {
		return t.apply(null, e)
	}
	var fr = {
		arr: function(t) {
			return Array.isArray(t)
		},
		obj: function(t) {
			return ur(Object.prototype.toString.call(t), "Object")
		},
		pth: function(t) {
			return fr.obj(t) && t.hasOwnProperty("totalLength")
		},
		svg: function(t) {
			return t instanceof SVGElement
		},
		inp: function(t) {
			return t instanceof HTMLInputElement
		},
		dom: function(t) {
			return t.nodeType || fr.svg(t)
		},
		str: function(t) {
			return "string" == typeof t
		},
		fnc: function(t) {
			return "function" == typeof t
		},
		und: function(t) {
			return void 0 === t
		},
		hex: function(t) {
			return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(t)
		},
		rgb: function(t) {
			return /^rgb/.test(t)
		},
		hsl: function(t) {
			return /^hsl/.test(t)
		},
		col: function(t) {
			return fr.hex(t) || fr.rgb(t) || fr.hsl(t)
		},
		key: function(t) {
			return !or.hasOwnProperty(t) && !ar.hasOwnProperty(t) && "targets" !== t && "keyframes" !== t
		}
	};

	function hr(t) {
		var e = /\(([^)]+)\)/.exec(t);
		return e ? e[1].split(",").map((function(t) {
			return parseFloat(t)
		})) : []
	}

	function pr(t, e) {
		var n = hr(t),
			r = lr(fr.und(n[0]) ? 1 : n[0], .1, 100),
			i = lr(fr.und(n[1]) ? 100 : n[1], .1, 100),
			o = lr(fr.und(n[2]) ? 10 : n[2], .1, 100),
			a = lr(fr.und(n[3]) ? 0 : n[3], .1, 100),
			s = Math.sqrt(i / r),
			c = o / (2 * Math.sqrt(i * r)),
			l = c < 1 ? s * Math.sqrt(1 - c * c) : 0,
			u = c < 1 ? (c * s - a) / l : -a + s;

		function d(t) {
			var n = e ? e * t / 1e3 : t;
			return n = c < 1 ? Math.exp(-n * c * s) * (1 * Math.cos(l * n) + u * Math.sin(l * n)) : (1 + u * n) * Math.exp(-n * s), 0 === t || 1 === t ? t : 1 - n
		}
		return e ? d : function() {
			var e = cr.springs[t];
			if (e) return e;
			for (var n = 0, r = 0;;)
				if (1 === d(n += 1 / 6)) {
					if (++r >= 16) break
				} else r = 0;
			var i = n * (1 / 6) * 1e3;
			return cr.springs[t] = i, i
		}
	}

	function gr(t) {
		return void 0 === t && (t = 10),
			function(e) {
				return Math.ceil(lr(e, 1e-6, 1) * t) * (1 / t)
			}
	}
	var vr, mr, yr = function() {
			function t(t, e) {
				return 1 - 3 * e + 3 * t
			}

			function e(t, e) {
				return 3 * e - 6 * t
			}

			function n(t) {
				return 3 * t
			}

			function r(r, i, o) {
				return ((t(i, o) * r + e(i, o)) * r + n(i)) * r
			}

			function i(r, i, o) {
				return 3 * t(i, o) * r * r + 2 * e(i, o) * r + n(i)
			}
			return function(t, e, n, o) {
				if (0 <= t && t <= 1 && 0 <= n && n <= 1) {
					var a = new Float32Array(11);
					if (t !== e || n !== o)
						for (var s = 0; s < 11; ++s) a[s] = r(.1 * s, t, n);
					return function(i) {
						return t === e && n === o || 0 === i || 1 === i ? i : r(c(i), e, o)
					}
				}

				function c(e) {
					for (var o = 0, s = 1; 10 !== s && a[s] <= e; ++s) o += .1;
					--s;
					var c = o + .1 * ((e - a[s]) / (a[s + 1] - a[s])),
						l = i(c, t, n);
					return l >= .001 ? function(t, e, n, o) {
						for (var a = 0; a < 4; ++a) {
							var s = i(e, n, o);
							if (0 === s) return e;
							e -= (r(e, n, o) - t) / s
						}
						return e
					}(e, c, t, n) : 0 === l ? c : function(t, e, n, i, o) {
						var a, s, c = 0;
						do {
							(a = r(s = e + (n - e) / 2, i, o) - t) > 0 ? n = s : e = s
						} while (Math.abs(a) > 1e-7 && ++c < 10);
						return s
					}(e, o, o + .1, t, n)
				}
			}
		}(),
		br = (vr = {
			linear: function() {
				return function(t) {
					return t
				}
			}
		}, mr = {
			Sine: function() {
				return function(t) {
					return 1 - Math.cos(t * Math.PI / 2)
				}
			},
			Circ: function() {
				return function(t) {
					return 1 - Math.sqrt(1 - t * t)
				}
			},
			Back: function() {
				return function(t) {
					return t * t * (3 * t - 2)
				}
			},
			Bounce: function() {
				return function(t) {
					for (var e, n = 4; t < ((e = Math.pow(2, --n)) - 1) / 11;);
					return 1 / Math.pow(4, 3 - n) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2)
				}
			},
			Elastic: function(t, e) {
				void 0 === t && (t = 1), void 0 === e && (e = .5);
				var n = lr(t, 1, 10),
					r = lr(e, .1, 2);
				return function(t) {
					return 0 === t || 1 === t ? t : -n * Math.pow(2, 10 * (t - 1)) * Math.sin((t - 1 - r / (2 * Math.PI) * Math.asin(1 / n)) * (2 * Math.PI) / r)
				}
			}
		}, ["Quad", "Cubic", "Quart", "Quint", "Expo"].forEach((function(t, e) {
			mr[t] = function() {
				return function(t) {
					return Math.pow(t, e + 2)
				}
			}
		})), Object.keys(mr).forEach((function(t) {
			var e = mr[t];
			vr["easeIn" + t] = e, vr["easeOut" + t] = function(t, n) {
				return function(r) {
					return 1 - e(t, n)(1 - r)
				}
			}, vr["easeInOut" + t] = function(t, n) {
				return function(r) {
					return r < .5 ? e(t, n)(2 * r) / 2 : 1 - e(t, n)(-2 * r + 2) / 2
				}
			}
		})), vr);

	function wr(t, e) {
		if (fr.fnc(t)) return t;
		var n = t.split("(")[0],
			r = br[n],
			i = hr(t);
		switch (n) {
			case "spring":
				return pr(t, e);
			case "cubicBezier":
				return dr(yr, i);
			case "steps":
				return dr(gr, i);
			default:
				return dr(r, i)
		}
	}

	function Er(t) {
		try {
			return document.querySelectorAll(t)
		} catch (t) {
			return
		}
	}

	function _r(t, e) {
		for (var n = t.length, r = arguments.length >= 2 ? arguments[1] : void 0, i = [], o = 0; o < n; o++)
			if (o in t) {
				var a = t[o];
				e.call(r, a, o, t) && i.push(a)
			} return i
	}

	function Ar(t) {
		return t.reduce((function(t, e) {
			return t.concat(fr.arr(e) ? Ar(e) : e)
		}), [])
	}

	function kr(t) {
		return fr.arr(t) ? t : (fr.str(t) && (t = Er(t) || t), t instanceof NodeList || t instanceof HTMLCollection ? [].slice.call(t) : [t])
	}

	function Tr(t, e) {
		return t.some((function(t) {
			return t === e
		}))
	}

	function Sr(t) {
		var e = {};
		for (var n in t) e[n] = t[n];
		return e
	}

	function xr(t, e) {
		var n = Sr(t);
		for (var r in t) n[r] = e.hasOwnProperty(r) ? e[r] : t[r];
		return n
	}

	function Cr(t, e) {
		var n = Sr(t);
		for (var r in e) n[r] = fr.und(t[r]) ? e[r] : t[r];
		return n
	}

	function Or(t) {
		return fr.rgb(t) ? (n = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(e = t)) ? "rgba(" + n[1] + ",1)" : e : fr.hex(t) ? function(t) {
			var e = t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (function(t, e, n, r) {
					return e + e + n + n + r + r
				})),
				n = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
			return "rgba(" + parseInt(n[1], 16) + "," + parseInt(n[2], 16) + "," + parseInt(n[3], 16) + ",1)"
		}(t) : fr.hsl(t) ? function(t) {
			var e, n, r, i = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(t) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(t),
				o = parseInt(i[1], 10) / 360,
				a = parseInt(i[2], 10) / 100,
				s = parseInt(i[3], 10) / 100,
				c = i[4] || 1;

			function l(t, e, n) {
				return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + 6 * (e - t) * n : n < .5 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t
			}
			if (0 == a) e = n = r = s;
			else {
				var u = s < .5 ? s * (1 + a) : s + a - s * a,
					d = 2 * s - u;
				e = l(d, u, o + 1 / 3), n = l(d, u, o), r = l(d, u, o - 1 / 3)
			}
			return "rgba(" + 255 * e + "," + 255 * n + "," + 255 * r + "," + c + ")"
		}(t) : void 0;
		var e, n
	}

	function Lr(t) {
		var e = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(t);
		if (e) return e[1]
	}

	function qr(t, e) {
		return fr.fnc(t) ? t(e.target, e.id, e.total) : t
	}

	function Dr(t, e) {
		return t.getAttribute(e)
	}

	function Pr(t, e, n) {
		if (Tr([n, "deg", "rad", "turn"], Lr(e))) return e;
		var r = cr.CSS[e + n];
		if (!fr.und(r)) return r;
		var i = document.createElement(t.tagName),
			o = t.parentNode && t.parentNode !== document ? t.parentNode : document.body;
		o.appendChild(i), i.style.position = "absolute", i.style.width = 100 + n;
		var a = 100 / i.offsetWidth;
		o.removeChild(i);
		var s = a * parseFloat(e);
		return cr.CSS[e + n] = s, s
	}

	function jr(t, e, n) {
		if (e in t.style) {
			var r = e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(),
				i = t.style[e] || getComputedStyle(t).getPropertyValue(r) || "0";
			return n ? Pr(t, i, n) : i
		}
	}

	function Ir(t, e) {
		return fr.dom(t) && !fr.inp(t) && (Dr(t, e) || fr.svg(t) && t[e]) ? "attribute" : fr.dom(t) && Tr(sr, e) ? "transform" : fr.dom(t) && "transform" !== e && jr(t, e) ? "css" : null != t[e] ? "object" : void 0
	}

	function Nr(t) {
		if (fr.dom(t)) {
			for (var e, n = t.style.transform || "", r = /(\w+)\(([^)]*)\)/g, i = new Map; e = r.exec(n);) i.set(e[1], e[2]);
			return i
		}
	}

	function Mr(t, e, n, r) {
		var i = ur(e, "scale") ? 1 : 0 + function(t) {
				return ur(t, "translate") || "perspective" === t ? "px" : ur(t, "rotate") || ur(t, "skew") ? "deg" : void 0
			}(e),
			o = Nr(t).get(e) || i;
		return n && (n.transforms.list.set(e, o), n.transforms.last = e), r ? Pr(t, o, r) : o
	}

	function zr(t, e, n, r) {
		switch (Ir(t, e)) {
			case "transform":
				return Mr(t, e, r, n);
			case "css":
				return jr(t, e, n);
			case "attribute":
				return Dr(t, e);
			default:
				return t[e] || 0
		}
	}

	function Rr(t, e) {
		var n = /^(\*=|\+=|-=)/.exec(t);
		if (!n) return t;
		var r = Lr(t) || 0,
			i = parseFloat(e),
			o = parseFloat(t.replace(n[0], ""));
		switch (n[0][0]) {
			case "+":
				return i + o + r;
			case "-":
				return i - o + r;
			case "*":
				return i * o + r
		}
	}

	function Br(t, e) {
		if (fr.col(t)) return Or(t);
		if (/\s/g.test(t)) return t;
		var n = Lr(t),
			r = n ? t.substr(0, t.length - n.length) : t;
		return e ? r + e : r
	}

	function Fr(t, e) {
		return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2))
	}

	function Hr(t) {
		for (var e, n = t.points, r = 0, i = 0; i < n.numberOfItems; i++) {
			var o = n.getItem(i);
			i > 0 && (r += Fr(e, o)), e = o
		}
		return r
	}

	function Vr(t) {
		if (t.getTotalLength) return t.getTotalLength();
		switch (t.tagName.toLowerCase()) {
			case "circle":
				return function(t) {
					return 2 * Math.PI * Dr(t, "r")
				}(t);
			case "rect":
				return function(t) {
					return 2 * Dr(t, "width") + 2 * Dr(t, "height")
				}(t);
			case "line":
				return function(t) {
					return Fr({
						x: Dr(t, "x1"),
						y: Dr(t, "y1")
					}, {
						x: Dr(t, "x2"),
						y: Dr(t, "y2")
					})
				}(t);
			case "polyline":
				return Hr(t);
			case "polygon":
				return function(t) {
					var e = t.points;
					return Hr(t) + Fr(e.getItem(e.numberOfItems - 1), e.getItem(0))
				}(t)
		}
	}

	function Ur(t, e) {
		var n = e || {},
			r = n.el || function(t) {
				for (var e = t.parentNode; fr.svg(e) && fr.svg(e.parentNode);) e = e.parentNode;
				return e
			}(t),
			i = r.getBoundingClientRect(),
			o = Dr(r, "viewBox"),
			a = i.width,
			s = i.height,
			c = n.viewBox || (o ? o.split(" ") : [0, 0, a, s]);
		return {
			el: r,
			viewBox: c,
			x: c[0] / 1,
			y: c[1] / 1,
			w: a / c[2],
			h: s / c[3]
		}
	}

	function Wr(t, e) {
		function n(n) {
			void 0 === n && (n = 0);
			var r = e + n >= 1 ? e + n : 0;
			return t.el.getPointAtLength(r)
		}
		var r = Ur(t.el, t.svg),
			i = n(),
			o = n(-1),
			a = n(1);
		switch (t.property) {
			case "x":
				return (i.x - r.x) * r.w;
			case "y":
				return (i.y - r.y) * r.h;
			case "angle":
				return 180 * Math.atan2(a.y - o.y, a.x - o.x) / Math.PI
		}
	}

	function Gr(t, e) {
		var n = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,
			r = Br(fr.pth(t) ? t.totalLength : t, e) + "";
		return {
			original: r,
			numbers: r.match(n) ? r.match(n).map(Number) : [0],
			strings: fr.str(t) || e ? r.split(n) : []
		}
	}

	function $r(t) {
		return _r(t ? Ar(fr.arr(t) ? t.map(kr) : kr(t)) : [], (function(t, e, n) {
			return n.indexOf(t) === e
		}))
	}

	function Jr(t) {
		var e = $r(t);
		return e.map((function(t, n) {
			return {
				target: t,
				id: n,
				total: e.length,
				transforms: {
					list: Nr(t)
				}
			}
		}))
	}

	function Yr(t, e) {
		var n = Sr(e);
		if (/^spring/.test(n.easing) && (n.duration = pr(n.easing)), fr.arr(t)) {
			var r = t.length;
			2 === r && !fr.obj(t[0]) ? t = {
				value: t
			} : fr.fnc(e.duration) || (n.duration = e.duration / r)
		}
		var i = fr.arr(t) ? t : [t];
		return i.map((function(t, n) {
			var r = fr.obj(t) && !fr.pth(t) ? t : {
				value: t
			};
			return fr.und(r.delay) && (r.delay = n ? 0 : e.delay), fr.und(r.endDelay) && (r.endDelay = n === i.length - 1 ? e.endDelay : 0), r
		})).map((function(t) {
			return Cr(t, n)
		}))
	}

	function Xr(t, e) {
		var n = [],
			r = e.keyframes;
		for (var i in r && (e = Cr(function(t) {
				for (var e = _r(Ar(t.map((function(t) {
						return Object.keys(t)
					}))), (function(t) {
						return fr.key(t)
					})).reduce((function(t, e) {
						return t.indexOf(e) < 0 && t.push(e), t
					}), []), n = {}, r = function(r) {
						var i = e[r];
						n[i] = t.map((function(t) {
							var e = {};
							for (var n in t) fr.key(n) ? n == i && (e.value = t[n]) : e[n] = t[n];
							return e
						}))
					}, i = 0; i < e.length; i++) r(i);
				return n
			}(r), e)), e) fr.key(i) && n.push({
			name: i,
			tweens: Yr(e[i], t)
		});
		return n
	}

	function Qr(t, e) {
		var n;
		return t.tweens.map((function(r) {
			var i = function(t, e) {
					var n = {};
					for (var r in t) {
						var i = qr(t[r], e);
						fr.arr(i) && 1 === (i = i.map((function(t) {
							return qr(t, e)
						}))).length && (i = i[0]), n[r] = i
					}
					return n.duration = parseFloat(n.duration), n.delay = parseFloat(n.delay), n
				}(r, e),
				o = i.value,
				a = fr.arr(o) ? o[1] : o,
				s = Lr(a),
				c = zr(e.target, t.name, s, e),
				l = n ? n.to.original : c,
				u = fr.arr(o) ? o[0] : l,
				d = Lr(u) || Lr(c),
				f = s || d;
			return fr.und(a) && (a = l), i.from = Gr(u, f), i.to = Gr(Rr(a, u), f), i.start = n ? n.end : 0, i.end = i.start + i.delay + i.duration + i.endDelay, i.easing = wr(i.easing, i.duration), i.isPath = fr.pth(o), i.isColor = fr.col(i.from.original), i.isColor && (i.round = 1), n = i, i
		}))
	}
	var Zr = {
		css: function(t, e, n) {
			return t.style[e] = n
		},
		attribute: function(t, e, n) {
			return t.setAttribute(e, n)
		},
		object: function(t, e, n) {
			return t[e] = n
		},
		transform: function(t, e, n, r, i) {
			if (r.list.set(e, n), e === r.last || i) {
				var o = "";
				r.list.forEach((function(t, e) {
					o += e + "(" + t + ") "
				})), t.style.transform = o
			}
		}
	};

	function Kr(t, e) {
		Jr(t).forEach((function(t) {
			for (var n in e) {
				var r = qr(e[n], t),
					i = t.target,
					o = Lr(r),
					a = zr(i, n, o, t),
					s = Rr(Br(r, o || Lr(a)), a),
					c = Ir(i, n);
				Zr[c](i, n, s, t.transforms, !0)
			}
		}))
	}

	function ti(t, e) {
		return _r(Ar(t.map((function(t) {
			return e.map((function(e) {
				return function(t, e) {
					var n = Ir(t.target, e.name);
					if (n) {
						var r = Qr(e, t),
							i = r[r.length - 1];
						return {
							type: n,
							property: e.name,
							animatable: t,
							tweens: r,
							duration: i.end,
							delay: r[0].delay,
							endDelay: i.endDelay
						}
					}
				}(t, e)
			}))
		}))), (function(t) {
			return !fr.und(t)
		}))
	}

	function ei(t, e) {
		var n = t.length,
			r = function(t) {
				return t.timelineOffset ? t.timelineOffset : 0
			},
			i = {};
		return i.duration = n ? Math.max.apply(Math, t.map((function(t) {
			return r(t) + t.duration
		}))) : e.duration, i.delay = n ? Math.min.apply(Math, t.map((function(t) {
			return r(t) + t.delay
		}))) : e.delay, i.endDelay = n ? i.duration - Math.max.apply(Math, t.map((function(t) {
			return r(t) + t.duration - t.endDelay
		}))) : e.endDelay, i
	}
	var ni = 0;
	var ri, ii = [],
		oi = [],
		ai = function() {
			function t() {
				ri = requestAnimationFrame(e)
			}

			function e(e) {
				var n = ii.length;
				if (n) {
					for (var r = 0; r < n;) {
						var i = ii[r];
						if (i.paused) {
							var o = ii.indexOf(i);
							o > -1 && (ii.splice(o, 1), n = ii.length)
						} else i.tick(e);
						r++
					}
					t()
				} else ri = cancelAnimationFrame(ri)
			}
			return t
		}();

	function si(t) {
		void 0 === t && (t = {});
		var e, n = 0,
			r = 0,
			i = 0,
			o = 0,
			a = null;

		function s(t) {
			var e = window.Promise && new Promise((function(t) {
				return a = t
			}));
			return t.finished = e, e
		}
		var c = function(t) {
			var e = xr(or, t),
				n = xr(ar, t),
				r = Xr(n, t),
				i = Jr(t.targets),
				o = ti(i, r),
				a = ei(o, n),
				s = ni;
			return ni++, Cr(e, {
				id: s,
				children: [],
				animatables: i,
				animations: o,
				duration: a.duration,
				delay: a.delay,
				endDelay: a.endDelay
			})
		}(t);
		s(c);

		function l() {
			var t = c.direction;
			"alternate" !== t && (c.direction = "normal" !== t ? "normal" : "reverse"), c.reversed = !c.reversed, e.forEach((function(t) {
				return t.reversed = c.reversed
			}))
		}

		function u(t) {
			return c.reversed ? c.duration - t : t
		}

		function d() {
			n = 0, r = u(c.currentTime) * (1 / si.speed)
		}

		function f(t, e) {
			e && e.seek(t - e.timelineOffset)
		}

		function h(t) {
			for (var e = 0, n = c.animations, r = n.length; e < r;) {
				var i = n[e],
					o = i.animatable,
					a = i.tweens,
					s = a.length - 1,
					l = a[s];
				s && (l = _r(a, (function(e) {
					return t < e.end
				}))[0] || l);
				for (var u = lr(t - l.start - l.delay, 0, l.duration) / l.duration, d = isNaN(u) ? 1 : l.easing(u), f = l.to.strings, h = l.round, p = [], g = l.to.numbers.length, v = void 0, m = 0; m < g; m++) {
					var y = void 0,
						b = l.to.numbers[m],
						w = l.from.numbers[m] || 0;
					y = l.isPath ? Wr(l.value, d * b) : w + d * (b - w), h && (l.isColor && m > 2 || (y = Math.round(y * h) / h)), p.push(y)
				}
				var E = f.length;
				if (E) {
					v = f[0];
					for (var _ = 0; _ < E; _++) {
						f[_];
						var A = f[_ + 1],
							k = p[_];
						isNaN(k) || (v += A ? k + A : k + " ")
					}
				} else v = p[0];
				Zr[i.type](o.target, i.property, v, o.transforms), i.currentValue = v, e++
			}
		}

		function p(t) {
			c[t] && !c.passThrough && c[t](c)
		}

		function g(t) {
			var d = c.duration,
				g = c.delay,
				v = d - c.endDelay,
				m = u(t);
			c.progress = lr(m / d * 100, 0, 100), c.reversePlayback = m < c.currentTime, e && function(t) {
				if (c.reversePlayback)
					for (var n = o; n--;) f(t, e[n]);
				else
					for (var r = 0; r < o; r++) f(t, e[r])
			}(m), !c.began && c.currentTime > 0 && (c.began = !0, p("begin")), !c.loopBegan && c.currentTime > 0 && (c.loopBegan = !0, p("loopBegin")), m <= g && 0 !== c.currentTime && h(0), (m >= v && c.currentTime !== d || !d) && h(d), m > g && m < v ? (c.changeBegan || (c.changeBegan = !0, c.changeCompleted = !1, p("changeBegin")), p("change"), h(m)) : c.changeBegan && (c.changeCompleted = !0, c.changeBegan = !1, p("changeComplete")), c.currentTime = lr(m, 0, d), c.began && p("update"), t >= d && (r = 0, c.remaining && !0 !== c.remaining && c.remaining--, c.remaining ? (n = i, p("loopComplete"), c.loopBegan = !1, "alternate" === c.direction && l()) : (c.paused = !0, c.completed || (c.completed = !0, p("loopComplete"), p("complete"), !c.passThrough && "Promise" in window && (a(), s(c)))))
		}
		return c.reset = function() {
			var t = c.direction;
			c.passThrough = !1, c.currentTime = 0, c.progress = 0, c.paused = !0, c.began = !1, c.loopBegan = !1, c.changeBegan = !1, c.completed = !1, c.changeCompleted = !1, c.reversePlayback = !1, c.reversed = "reverse" === t, c.remaining = c.loop, e = c.children;
			for (var n = o = e.length; n--;) c.children[n].reset();
			(c.reversed && !0 !== c.loop || "alternate" === t && 1 === c.loop) && c.remaining++, h(c.reversed ? c.duration : 0)
		}, c.set = function(t, e) {
			return Kr(t, e), c
		}, c.tick = function(t) {
			i = t, n || (n = i), g((i + (r - n)) * si.speed)
		}, c.seek = function(t) {
			g(u(t))
		}, c.pause = function() {
			c.paused = !0, d()
		}, c.play = function() {
			c.paused && (c.completed && c.reset(), c.paused = !1, ii.push(c), d(), ri || ai())
		}, c.reverse = function() {
			l(), c.completed = !c.reversed, d()
		}, c.restart = function() {
			c.reset(), c.play()
		}, c.reset(), c.autoplay && c.play(), c
	}

	function ci(t, e) {
		for (var n = e.length; n--;) Tr(t, e[n].animatable.target) && e.splice(n, 1)
	}
	"undefined" != typeof document && document.addEventListener("visibilitychange", (function() {
		document.hidden ? (ii.forEach((function(t) {
			return t.pause()
		})), oi = ii.slice(0), si.running = ii = []) : oi.forEach((function(t) {
			return t.play()
		}))
	})), si.version = "3.2.0", si.speed = 1, si.running = ii, si.remove = function(t) {
		for (var e = $r(t), n = ii.length; n--;) {
			var r = ii[n],
				i = r.animations,
				o = r.children;
			ci(e, i);
			for (var a = o.length; a--;) {
				var s = o[a],
					c = s.animations;
				ci(e, c), c.length || s.children.length || o.splice(a, 1)
			}
			i.length || o.length || r.pause()
		}
	}, si.get = zr, si.set = Kr, si.convertPx = Pr, si.path = function(t, e) {
		var n = fr.str(t) ? Er(t)[0] : t,
			r = e || 100;
		return function(t) {
			return {
				property: t,
				el: n,
				svg: Ur(n),
				totalLength: Vr(n) * (r / 100)
			}
		}
	}, si.setDashoffset = function(t) {
		var e = Vr(t);
		return t.setAttribute("stroke-dasharray", e), e
	}, si.stagger = function(t, e) {
		void 0 === e && (e = {});
		var n = e.direction || "normal",
			r = e.easing ? wr(e.easing) : null,
			i = e.grid,
			o = e.axis,
			a = e.from || 0,
			s = "first" === a,
			c = "center" === a,
			l = "last" === a,
			u = fr.arr(t),
			d = u ? parseFloat(t[0]) : parseFloat(t),
			f = u ? parseFloat(t[1]) : 0,
			h = Lr(u ? t[1] : t) || 0,
			p = e.start || 0 + (u ? d : 0),
			g = [],
			v = 0;
		return function(t, e, m) {
			if (s && (a = 0), c && (a = (m - 1) / 2), l && (a = m - 1), !g.length) {
				for (var y = 0; y < m; y++) {
					if (i) {
						var b = c ? (i[0] - 1) / 2 : a % i[0],
							w = c ? (i[1] - 1) / 2 : Math.floor(a / i[0]),
							E = b - y % i[0],
							_ = w - Math.floor(y / i[0]),
							A = Math.sqrt(E * E + _ * _);
						"x" === o && (A = -E), "y" === o && (A = -_), g.push(A)
					} else g.push(Math.abs(a - y));
					v = Math.max.apply(Math, g)
				}
				r && (g = g.map((function(t) {
					return r(t / v) * v
				}))), "reverse" === n && (g = g.map((function(t) {
					return o ? t < 0 ? -1 * t : -t : Math.abs(v - t)
				})))
			}
			return p + (u ? (f - d) / v : d) * (Math.round(100 * g[e]) / 100) + h
		}
	}, si.timeline = function(t) {
		void 0 === t && (t = {});
		var e = si(t);
		return e.duration = 0, e.add = function(n, r) {
			var i = ii.indexOf(e),
				o = e.children;

			function a(t) {
				t.passThrough = !0
			}
			i > -1 && ii.splice(i, 1);
			for (var s = 0; s < o.length; s++) a(o[s]);
			var c = Cr(n, xr(ar, t));
			c.targets = c.targets || t.targets;
			var l = e.duration;
			c.autoplay = !1, c.direction = e.direction, c.timelineOffset = fr.und(r) ? l : Rr(r, l), a(e), e.seek(c.timelineOffset);
			var u = si(c);
			a(u), o.push(u);
			var d = ei(o, t);
			return e.delay = d.delay, e.endDelay = d.endDelay, e.duration = d.duration, e.seek(0), e.reset(), e.autoplay && e.play(), e
		}, e
	}, si.easing = wr, si.penner = br, si.random = function(t, e) {
		return Math.floor(Math.random() * (e - t + 1)) + t
	};
	var li = si,
		ui = '\n  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n    <path d="M3 7A2 2 0 0 0 1 9V17H3V13H5V17H7V9A2 2 0 0 0 5 7H3M3 9H5V11H3M15 10.5V9A2 2 0 0 0 13 7H9V17H13A2 2 0 0 0 15 15V13.5A1.54 1.54 0 0 0 13.5 12A1.54 1.54 0 0 0 15 10.5M13 15H11V13H13V15M13 11H11V9H13M19 7A2 2 0 0 0 17 9V15A2 2 0 0 0 19 17H21A2 2 0 0 0 23 15V14H21V15H19V9H21V10H23V9A2 2 0 0 0 21 7Z" fill="currentColor" />\n  </svg>\n',
		di = {
			el: {
				clear: "[data-search-clear]",
				input: "[data-input]",
				results: "[data-search-results]",
				search: "[data-search-submit]"
			},
			strings: {
				articles: "Articles",
				pages: "Pages",
				products: "Products",
				view_all: "View all"
			},
			show_articles: !0,
			show_pages: !0,
			show_products: !0,
			show_vendor: !1,
			show_price: !0,
			limit: 4,
			headingMarkup: function(t) {
				return '<div class="quick-search__header ff-meta fs-meta c-meta">'.concat(t, "</div>")
			},
			resultMarkup: function(t) {
				var e = t.url,
					n = t.img,
					r = t.heading,
					i = t.subheading;
				return '\n  <a class="quick-search__result" href="'.concat(e, '">\n    <div class="quick-search__result-image">').concat(n, '</div>\n    <div class="quick-search__result-details ff-body">\n      <div class="quick-search__result-heading">').concat(r, '</div>\n      <div class="quick-search__result-subheading">').concat(i, "</div>\n    </div>\n  </a>\n")
			},
			viewAllMarkup: function(t) {
				return '\n  <div class="quick-search__view-all ff-body">\n    <button type="submit">'.concat(t, "</button>\n  </div>\n")
			}
		};

	function fi(t, e) {
		var n = Object.keys(t);
		if (Object.getOwnPropertySymbols) {
			var r = Object.getOwnPropertySymbols(t);
			e && (r = r.filter((function(e) {
				return Object.getOwnPropertyDescriptor(t, e).enumerable
			}))), n.push.apply(n, r)
		}
		return n
	}

	function hi(t) {
		for (var e = 1; e < arguments.length; e++) {
			var n = null != arguments[e] ? arguments[e] : {};
			e % 2 ? fi(Object(n), !0).forEach((function(e) {
				oe()(t, e, n[e])
			})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : fi(Object(n)).forEach((function(e) {
				Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
			}))
		}
		return t
	}
	var pi = "[data-overlay]",
		gi = "[data-list-item]",
		vi = "[data-all-links]",
		mi = "[data-main]",
		yi = "[data-primary-container]",
		bi = "[data-footer]",
		wi = "[data-search-settings]",
		Ei = ".drawer-menu__form",
		_i = "[data-locale-input]",
		Ai = "[data-currency-input]",
		ki = "active",
		Ti = "visible",
		Si = function(t) {
			return li({
				targets: t,
				translateX: [40, 0],
				opacity: [0, 1],
				easing: "cubicBezier(.5, .05, .1, .3)",
				duration: 180,
				delay: li.stagger(80, {
					start: 250
				}),
				complete: function() {
					t.forEach((function(t) {
						return t.style.removeProperty("transform")
					}))
				}
			})
		},
		xi = function(t) {
			return t + 8 + "px"
		},
		Ci = function(t) {
			var e = window.theme,
				n = 0,
				r = 0,
				i = h(vi, t),
				o = h(mi, t),
				a = h(yi, t),
				s = h(Ei, t),
				c = h(_i, t),
				l = h(Ai, t),
				u = h(wi, t),
				d = function(t) {
					var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
						n = Object.assign(di, e),
						r = "",
						i = h("form", t),
						o = h(n.el.input, t),
						a = h(n.el.results, t),
						s = h(n.el.clear, t),
						c = h(n.el.search, t),
						l = m(o, "input", b),
						u = m(s, "click", _),
						d = function() {},
						f = [n.show_articles && Fn.TYPES.ARTICLE, n.show_pages && Fn.TYPES.PAGE, Fn.TYPES.PRODUCT].filter(Boolean),
						p = new Fn({
							resources: {
								type: f,
								limit: n.limit,
								options: {
									unavailable_products: "last",
									fields: [Fn.FIELDS.TITLE, Fn.FIELDS.PRODUCT_TYPE, Fn.FIELDS.VARIANTS_TITLE]
								}
							}
						});

					function g(t, e, r) {
						return t.length < 1 ? "" : n.headingMarkup(e) + t.map(r).join("")
					}

					function v(t) {
						var e = t.url,
							i = t.image,
							o = t.heading,
							a = t.subheading,
							s = new RegExp("(" + r + ")", "gi"),
							c = o.replace(s, '<span class="hl">$1</span>'),
							l = a.replace(s, '<span class="hl">$1</span>'),
							u = i ? '<img class="image__img lazyload" data-src="'.concat(Object(zt.getSizedImageUrl)(i, "120x"), '" />') : ui;
						return n.resultMarkup({
							url: e,
							img: u,
							heading: c,
							subheading: l
						})
					}

					function y(t) {
						var e = t.articles,
							r = t.pages,
							i = g(t.products, n.strings.products, (function(t) {
								var e = t.url,
									r = t.image,
									i = t.title,
									o = t.price,
									a = t.vendor,
									s = K(o * window.Shopify.currency.rate * 100);
								return v({
									url: e,
									image: r,
									heading: i,
									subheading: [n.show_vendor && a, n.show_price && Un()(s)].filter(Boolean).join(" • ")
								})
							}));
						r && (i += g(r, n.strings.pages, (function(t) {
							var e = t.url,
								n = t.image,
								r = t.title,
								i = t.body;
							return v({
								url: e,
								image: n,
								heading: r,
								subheading: Un()(i)
							})
						}))), e && (i += g(e, n.strings.articles, (function(t) {
							var e = t.url,
								n = t.image,
								r = t.title,
								i = t.body;
							return v({
								url: e,
								image: n,
								heading: r,
								subheading: Un()(i)
							})
						})));
						var o = n.viewAllMarkup(n.strings.view_all);
						a.innerHTML = i + o
					}

					function b(t) {
						var e = t.target.value;
						"" === e && w(a, "visible"), E([s, c], "visible", "" !== e), p.query(e)
					}

					function _(t) {
						t.preventDefault(), o.value = "", w([a, s, c], "visible"), a.innerHTML = "", o.focus(), d()
					}

					function A() {
						l(), u()
					}
					return p.on("success", (function(t) {
						var e = t.query,
							n = t.resources.results,
							o = Object.keys(n).reduce((function(t, e) {
								return t + n[e].length
							}), 0);
						r = e, E(a, "visible", o), o && (y(n), d(), d = Jn(i))
					})), p.on("error", (function(t) {
						console.log("Search error:", t.message)
					})), {
						destroy: A
					}
				}(t, hi(hi({}, JSON.parse(u.innerHTML)), {}, {
					strings: {
						articles: e.strings.search.headings.articles,
						pages: e.strings.search.headings.pages,
						products: e.strings.search.headings.products,
						view_all: e.strings.search.view_all
					}
				})),
				f = h(pi, t),
				g = p('[data-item="parent"]', t),
				v = p('[data-item="back"]', t),
				y = p('[data-item="secondary"]', t),
				_ = p('[data-item="secondaryHeading"]', t),
				A = p('[data-item="locale"]', t),
				k = p('[data-item="currency"]', t),
				T = [m(f, "click", S), m(g, "click", (function(t) {
					t.preventDefault();
					var e = t.currentTarget.nextElementSibling;
					b(e, Ti), o.style.height = xi(e.offsetHeight);
					var n = p(":scope > ".concat(gi), e);
					Si(n), x(r += 1)
				})), m(v, "click", (function(t) {
					t.preventDefault();
					var e = t.currentTarget.closest(gi).closest("ul");
					o.style.height = xi(e.offsetHeight), w(t.currentTarget.closest("ul"), Ti), x(r -= 1)
				})), m(y, "click", (function(t) {
					t.preventDefault(), C(1);
					var e = t.currentTarget.nextElementSibling;
					b(e, Ti);
					var n = p(":scope > ".concat(gi), e);
					Si(n)
				})), m(_, "click", (function(t) {
					t.preventDefault(), C(0), w(t.currentTarget.closest("ul"), Ti)
				})), m(A, "click", (function(t) {
					return O(t, c)
				})), m(k, "click", (function(t) {
					return O(t, l)
				}))];

			function S() {
				w(t, Ti), setTimeout((function() {
					w(t, ki), Mt(t)
				}), 350)
			}

			function x(t) {
				r = t, a.setAttribute("data-depth", t)
			}

			function C(t) {
				n = t, i.setAttribute("data-depth", t)
			}

			function O(t, e) {
				var n = t.currentTarget.dataset.value;
				e.value = n, S(), s.submit()
			}
			return {
				close: S,
				destroy: function() {
					T.forEach((function(t) {
						return t()
					})), Mt(t), d.destroy()
				},
				open: function() {
					b(t, ki), setTimeout((function() {
						b(t, Ti), Nt(t, {
							allowTouchMove: function(t) {
								for (; t && t !== document.body;) {
									if (null !== t.getAttribute("data-scroll-lock-ignore")) return !0;
									t = t.parentNode
								}
							},
							reserveScrollBarGap: !0
						});
						var e = p("".concat(yi, " > ").concat(gi, ", ").concat(bi, " > li, ").concat(bi, " > form > li"), t);
						0 === n && 0 === r && (o.style.height = xi(a.offsetHeight), Si(e))
					}), 50)
				}
			}
		};
	et("header", {
		onLoad: function() {
			var t = this,
				e = h("[data-js-cart-icon]", this.container),
				n = h("[data-js-cart-indicator]", e),
				r = h("[data-js-cart-count]", this.container),
				i = h("[data-js-menu-button]", this.container),
				o = h("[data-search]", this.container),
				a = h("[data-header-space]", document),
				s = Ci(h("[data-drawer-menu]")),
				c = Zn(h("[data-quick-search]", this.container)),
				l = An(h("[data-quick-cart]", this.container)),
				u = function(t) {
					if (t) {
						var e = p("[data-parent]", t),
							n = p("[data-mega]", t);
						if (e || n) {
							var r = null,
								i = [m([].concat(D()(e), D()(n)), "mouseup", (function(t) {
									return t.preventDefault()
								})), m(e, "click", (function(t) {
									return t.preventDefault()
								})), m(e, "mousedown", (function(t) {
									t.preventDefault(), D()(t.currentTarget.parentNode.parentNode.children).filter((function(e) {
										return !e.contains(t.currentTarget)
									})).forEach((function(t) {
										return w(p("[data-submenu]", t), "active")
									})), o(t.currentTarget.parentNode)
								})), m(n, "click", (function(t) {
									t.preventDefault(), ir(h("[data-mega-nav]", t.currentTarget.parentNode)).open()
								})), m(p(".header__links-list > li > a", t), "focus", a), m(p("[data-link]", t), "focus", (function(t) {
									t.preventDefault();
									var e = t.currentTarget;
									e.hasAttribute("data-parent") && o(e.parentNode), p("[data-link]", e.parentNode.parentNode).forEach((function(t) {
										return E(p("[data-submenu]", t.parentNode), "active", t === e)
									}))
								})), m(p("[data-link]", t), "focusout", (function(t) {
									t.relatedTarget && !t.relatedTarget.hasAttribute("data-link") && a()
								})), R("megaNav:open", (function(e, n) {
									var i = n.id;
									(r = ir(h('[data-id="'.concat(i, '"]'), t))).open()
								})), R("megaNav:close", (function() {
									r && r.close()
								}))];
							return {
								destroy: function() {
									i.forEach((function(t) {
										return t()
									}))
								}
							}
						}
					}

					function o(t) {
						var e = h("[data-submenu]", t);
						E(e, "active", !e.offsetWidth > 0 && !e.offsetHeight > 0)
					}

					function a() {
						w(p("[data-submenu]", t), "active")
					}
				}(h("[data-navigation]", this.container));
			this.listeners = [R("cart:updated", (function(t) {
				var e = t.cart;
				w(n, "visible"), setTimeout((function() {
					return b(n, "visible")
				}), 500), r.innerHTML = e.item_count
			})), m(i, "click", yn(s.open)), m(o, "click", yn(c.open)), m(e, "click", yn(l.open))], this.components = [s, c, l, u], this.io = new IntersectionObserver((function(e) {
				var n = he()(e, 1)[0].isIntersecting;
				E(t.container, "is-sticky", !n)
			})), this.io.observe(a), this.ro = new mn.a((function(t) {
				var e, n = he()(t, 1)[0].target;
				_(n, "is-sticky") || (e = n.offsetHeight, document.documentElement.style.setProperty("--height-header", e + "px"))
			})), this.ro.observe(this.container)
		},
		onUnload: function() {
			this.listeners.forEach((function(t) {
				return t()
			})), this.components.forEach((function(t) {
				return t.destroy()
			})), this.io.disconnect(), this.ro.disconnect()
		},
		onBlockSelect: function(t) {
			var e = t.target;
			B("megaNav:open", null, {
				id: e.dataset.id
			})
		},
		onBlockDeselect: function() {
			B("megaNav:close")
		}
	}), et("image-with-text", {
		onLoad: function() {},
		onUnload: function() {}
	}), et("newsletter", {
		onLoad: function() {},
		onUnload: function() {}
	});
	var Oi = n(10),
		Li = n.n(Oi),
		qi = function() {
			return j("exit_intent")
		},
		Di = function(t) {
			return I("exit_intent", t)
		};
	et("popup", {
		onLoad: function() {
			var t = this,
				e = h("[data-close]", this.container),
				n = h("[data-overlay]", this.container);
			this.closeClick = m([e, n], "click", (function(e) {
				e.preventDefault(), t.close()
			})), this.bodyLeave = function() {};
			var r = this.container.dataset.timeout;
			!qi() && Li()() ? setTimeout((function() {
				return t.open()
			}), parseInt(r)) : qi() || (this.bodyLeave = m(document.body, "mouseout", (function(e) {
				e.relatedTarget || e.toElement || (t.open(), t.bodyLeave())
			})))
		},
		open: function() {
			b(this.container, "visible")
		},
		close: function() {
			Di(!0), w(this.container, "visible")
		},
		onSelect: function() {
			this.open()
		},
		onDeselect: function() {
			this.close()
		},
		onUnload: function() {
			this.closeClick(), this.bodyLeave()
		}
	});
	var Pi = "[data-recommendations]",
		ji = "[data-slider]";
	et("recommended-products", {
		onLoad: function() {
			var t = this,
				e = this.container.dataset,
				n = e.limit,
				r = e.productId,
				i = h(Pi, this.container);
			if (i) {
				var o = "".concat(window.theme.routes.productRecommendations, "?section_id=recommended-products--static&limit=").concat(n, "&product_id=").concat(r),
					a = new XMLHttpRequest;
				a.open("GET", o, !0), a.onload = function() {
					if (a.status >= 200 && a.status < 300) {
						var e = document.createElement("div");
						if (e.innerHTML = a.response, !h(".product-item", e)) return void t.container.parentNode.removeChild(t.container);
						i.innerHTML = h(Pi, e).innerHTML;
						var n = h(ji, i);
						n && (t.mobileCarousel = ve(n))
					} else t.container.parentNode.removeChild(t.container)
				}, a.send()
			}
		},
		onUnload: function() {
			this.mobileCarousel && this.mobileCarousel.destroy()
		}
	}), et("rich-text", {
		onLoad: function() {},
		onUnload: function() {}
	});
	var Ii = n(23),
		Ni = n.n(Ii),
		Mi = function(t) {
			if (t.length) var e = [m(window, "click", (function() {
				return n()
			})), m(window, "touchstart", (function() {
				return n()
			}))];

			function n() {
				t.forEach((function(t) {
					t.playing || t.play()
				})), e.forEach((function(t) {
					return t()
				}))
			}
		},
		zi = "[data-slider]";
	et("slideshow", {
		onLoad: function() {
			var t = this,
				e = h(zi, this.container),
				n = this.container.dataset,
				r = n.autoplay,
				i = n.parallax;
			if (Mi(p(".slideshow__video", this.container)), w(e, "is-hidden"), e.offsetHeight, this.flkty = new se.a(e, {
					adaptiveHeight: !0,
					autoPlay: Number(r),
					draggable: !0,
					prevNextButtons: !1,
					wrapAround: !0,
					on: {
						ready: function() {
							var e = h("[data-slide]", t.container);
							li({
								targets: p(".animate", e),
								easing: "easeOutQuart",
								translateY: [{
									value: 40,
									duration: 0
								}, {
									value: 0,
									duration: 500
								}],
								opacity: [{
									value: 0,
									duration: 0
								}, {
									value: 1,
									duration: 500
								}],
								delay: li.stagger(150, {
									start: 800
								})
							})
						}
					}
				}), this.flkty.on("change", (function(e) {
					var n = t.flkty.cells[e].element;
					li({
						targets: p(".animate", n),
						easing: "easeOutQuart",
						translateY: [{
							value: 40,
							duration: 0
						}, {
							value: 0,
							duration: 500
						}],
						opacity: [{
							value: 0,
							duration: 0
						}, {
							value: 1,
							duration: 500
						}],
						delay: li.stagger(150, {
							start: 200
						})
					})
				})), "true" == i) {
				var o = this.container.querySelectorAll(".image__img");
				this.parallax = new Ni.a(o, {
					customWrapper: ".slideshow__parallax-wrapper",
					scale: 1.5
				})
			}
		},
		onBlockSelect: function(t) {
			var e = t.target;
			this.flkty.select(e.dataset.index), this.flkty.pausePlayer()
		},
		onBlockDeselect: function() {
			this.flkty.unpausePlayer(), this.parallax && this.parallax.destroy()
		},
		onUnload: function() {
			this.flkty.destroy()
		}
	});
	var Ri = "img",
		Bi = "[data-slider]",
		Fi = "[data-slide]";
	et("testimonials", {
		onLoad: function() {
			var t = h(Bi, this.container),
				e = p(Fi, this.container);
			p(Ri, this.container).length === e.length ? this.mobileCarousel = ve(t) : b(this.container, "testimonials--vertical")
		},
		onUnload: function() {
			this.mobileCarousel && this.mobileCarousel.destroy()
		},
		onBlockSelect: function(t) {
			var e = t.target;
			this.mobileCarousel && this.mobileCarousel.select(e.dataset.index)
		}
	});
	var Hi = "[data-slider]";
	et("text-columns-with-images", {
		onLoad: function() {
			var t = this.container.querySelector(Hi);
			this.mobileCarousel = ve(t)
		},
		onUnload: function() {
			this.mobileCarousel.destroy()
		},
		onBlockSelect: function(t) {
			var e = t.target;
			this.mobileCarousel.select(e.dataset.index)
		}
	});
	var Vi = n(24),
		Ui = n.n(Vi),
		Wi = n(25);
	et("video", {
		onLoad: function() {
			var t = this,
				e = this.container.dataset,
				n = e.videoId,
				r = e.videoType;
			if (n && r) {
				var i = h("[data-video-player]", this.container),
					o = h("[data-play-button]", this.container),
					a = h("[data-overlay]", this.container),
					s = h(".video__image", this.container);
				this.video = function(t, e) {
					void 0 === e && (e = {});
					var n, r = e.id,
						i = e.playerEl,
						o = e.type;
					if (r && o) {
						var a = V(),
							s = a.on,
							c = a.emit;
						return "youtube" === o ? ((n = Ui()(i)).loadVideoById({
							videoId: r,
							suggestedQuality: "large"
						}), n.stopVideo(), n.on("stateChange", (function(t) {
							1 === t.data ? c("play") : 2 === t.data && c("pause")
						})), n.on("ready", (function() {
							c("ready"), l()
						}))) : "vimeo" === o && ((n = new Wi.a(i, {
							id: r
						})).on("play", (function() {
							return c("play")
						})), n.on("pause", (function() {
							return c("pause")
						})), n.ready().then((function() {
							c("ready"), l()
						}))), {
							destroy: function() {},
							on: s,
							pause: function() {
								"youtube" === o ? n.pauseVideo() : "vimeo" === o && n.pause()
							},
							play: function() {
								"youtube" === o ? n.playVideo() : "vimeo" === o && n.play()
							}
						}
					}

					function l() {
						var e = h("iframe", t),
							n = e.height / e.width * 100,
							r = e.parentNode;
						e.height = "100%", e.width = "100%", "youtube" === o ? r.style.paddingTop = n + "%" : "vimeo" === o && (r.parentNode.style.paddingTop = n + "%"), c("resized")
					}
				}(this.container, {
					id: n,
					type: r,
					playerEl: i
				}), this.video.on("play", (function() {
					var e = h("iframe", t.container);
					e.taxindex = 0, e.focus(), w(a, "visible"), s && w(s, "visible")
				})), this.video.on("pause", (function() {
					h("iframe", t.container).tabindex = -1, b(a, "visible"), s && b(s, "visible"), o.focus()
				})), this.buttonClick = m(o, "click", (function() {
					t.video.play()
				}))
			}
		},
		onUnload: function() {
			this.video && this.video.destroy(), this.buttonClick()
		}
	}), et("collage", {
		onLoad: function() {
			Mi(p(".collage__block-video", this.container))
		},
		onUnload: function() {}
	}), et("cart", {
		onLoad: function() {
			var t, e = h("[data-form]", this.container),
				n = p("[data-change]", this.container);
			this.buttonClick = m(n, "click", (function(n) {
				n.preventDefault();
				var r = n.currentTarget.dataset.change,
					i = h("input", n.currentTarget.parentNode);
				"increment" === r ? i.value >= 0 && i.value++ : "decrement" === r && i.value > 0 && i.value--, clearTimeout(t), t = setTimeout((function() {
					e.submit()
				}), 1e3)
			}))
		},
		onUnload: function() {
			this.buttonClick()
		}
	});
	var Gi = n(26),
		$i = n.n(Gi),
		Ji = function(t) {
			return !0 !== window.Shopify.designMode && li({
				targets: t,
				translateY: [60, 0],
				opacity: 1,
				easing: "cubicBezier(.5, .05, .1, .3)",
				duration: 400,
				delay: li.stagger(200)
			})
		},
		Yi = function(t) {
			return B("collection:filters:add", null, {
				tags: t
			})
		},
		Xi = function(t) {
			var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
			return B("collection:filters:remove", null, {
				tags: t,
				fetch: e
			})
		},
		Qi = function(t) {
			return B("collection:sort:set", null, {
				method: t
			})
		},
		Zi = function() {
			return B("collection:sort:clear", null)
		},
		Ki = function(t) {
			return R("collection:filters:remove", t)
		},
		to = function(t) {
			return R("collection:sort:set", t)
		},
		eo = function(t) {
			return R("collection:sort:clear", t)
		},
		no = function(t) {
			return R("collection:clear", t)
		},
		ro = "active",
		io = "closed",
		oo = function() {
			return j("closed_sidebar_groups") || []
		},
		ao = function(t) {
			return I("closed_sidebar_groups", JSON.stringify(t))
		},
		so = "[data-heading]",
		co = "[data-tag]",
		lo = "[data-sort]",
		uo = function(t) {
			return '[data-group="'.concat(t, '"]')
		},
		fo = "[data-mobile-filter]",
		ho = "[data-mobile-modal]",
		po = "[data-button]",
		go = "[data-mobile-wash]",
		vo = "[data-tag]",
		mo = "[data-sort]",
		yo = "[data-close-icon]",
		bo = "active",
		wo = "[data-js-partial]",
		Eo = "[data-js-sidebar]";
	et("collection", {
		onLoad: function() {
			var t, e = this;
			this.collection = function(t) {
				var e = new $i.a(t || window.location.href),
					n = e.paths().indexOf("collections") > 0 ? 3 : 2;

				function r(t) {
					var r = e.paths().slice(0, n);
					e.paths([].concat(r, [t]))
				}

				function i() {
					var t = e.paths().filter(Boolean);
					return t[n] ? t[n].split(" ") : []
				}
				return {
					getState: function() {
						return {
							handle: e.paths()[1],
							page: Number(e.query.page) || 1,
							sort_by: e.query.sort_by || null,
							tags: i(),
							url: e.toString().replace(/%20/g, "+")
						}
					},
					addTags: function(t, n) {
						return r([].concat(i(), t).filter((function(t, e, n) {
							return n.indexOf(t) == e
						})).join(" ")), delete e.query.page, n(this.getState())
					},
					removeTags: function(t, n) {
						return r(i().filter((function(e) {
							return !t.includes(e)
						})).join(" ")), delete e.query.page, n(this.getState())
					},
					setSort: function(t, n) {
						return e.query.sort_by = t, n(this.getState())
					},
					clearSort: function(t) {
						return delete e.query.sort_by, t(this.getState())
					},
					clearAll: function(t) {
						return delete e.query.sort_by, r(""), t(this.getState())
					}
				}
			}(window.location.href), this.sidebar = function(t) {
				if (!t) return Function();
				var e = p(co, t),
					n = p(lo, t),
					r = m(t, "click", (function(t) {
						t.preventDefault();
						var e = t.target.dataset,
							n = e.heading,
							r = e.tag,
							i = e.sort;
						r && (H().tags.includes(r) ? Xi([r]) : Yi([r]));
						i && (H().sort_by === i ? Zi() : Qi(i));
						if (n) {
							var o = t.target.nextElementSibling;
							Oe(o);
							var a = oo();
							Le(o) ? (b(t.target, io), Ce(o), ao([].concat(D()(a), [n]))) : (w(t.target, io), xe(o), ao(a.filter((function(t) {
								return t !== n
							}))))
						}
					})),
					i = R("tags", (function(t) {
						var n = t.tags;
						return e.forEach((function(t) {
							return E(t.parentElement, ro, n.includes(t.dataset.tag))
						}))
					})),
					o = R("sort_by", (function(t) {
						var e = t.sort_by;
						return n.forEach((function(t) {
							return E(t.parentElement, ro, t.dataset.sort === e)
						}))
					}));
				return oo().forEach((function(e) {
						var n = h(uo(e), t);
						n && (b(h(so, n), io), Ce(n.querySelector("ul"), {
							duration: 1
						}))
					})),
					function() {
						r(), i(), o()
					}
			}(h(Eo, this.container)), this.mobileFiltering = function(t) {
				var e = p(fo, t),
					n = p(ho, t),
					r = h(go, t),
					i = p(vo, t),
					o = p('[data-mobile-modal="__sort"] '.concat(mo)),
					a = p(po, t),
					s = p(yo, t),
					c = m(e, "click", (function(e) {
						e.preventDefault();
						var n = e.currentTarget.dataset.mobileFilter;
						b(r, bo), b(h('[data-mobile-modal="'.concat(n, '"]'), t), bo), Nt(t, {
							allowTouchMove: function(t) {
								for (; t && t !== document.body;) {
									if (null !== t.getAttribute("data-scroll-lock-ignore")) return !0;
									t = t.parentNode
								}
							},
							reserveScrollBarGap: !0
						})
					})),
					l = m(i, "click", (function(t) {
						t.preventDefault(), E(t.target.parentNode, bo)
					})),
					u = m(o, "click", (function(t) {
						if (t.preventDefault(), _(t.currentTarget.parentNode, bo)) return;
						o.forEach((function(e) {
							return E(e.parentNode, bo, e === t.currentTarget)
						}))
					})),
					d = m(r, "click", A),
					f = m(a, "click", (function(t) {
						t.preventDefault();
						var e = t.currentTarget.dataset.button,
							n = t.currentTarget.closest(ho);
						if ("__sort" === n.dataset.mobileModal) {
							if ("clear" === e && w(o.map((function(t) {
									return t.parentNode
								})), bo), "apply" === e) {
								var r = h(".".concat(bo), n);
								return r ? Qi(r.firstElementChild.dataset.sort) : Zi(), void A()
							}
						} else {
							var i = p(vo, n);
							if ("clear" === e && w(i.map((function(t) {
									return t.parentNode
								})), bo), "apply" === e) {
								var a = [],
									s = [];
								i.forEach((function(t) {
									var e = t.parentNode,
										n = t.dataset.tag;
									_(e, bo) ? a.push(n) : s.push(n)
								})), s.length > 0 && Xi(s, a.length <= 0), a.length > 0 && Yi(a), A()
							}
						}
					})),
					g = m(s, "click", A),
					v = R("tags", (function(t) {
						var e = t.tags;
						return i.forEach((function(t) {
							return E(t.parentElement, bo, e.includes(t.dataset.tag))
						}))
					})),
					y = R("sort_by", (function(t) {
						var e = t.sort_by;
						return o.forEach((function(t) {
							return E(t.parentElement, bo, t.dataset.sort === e)
						}))
					}));

				function A() {
					w([].concat(D()(n), [r]), bo), Mt(t)
				}
				return function() {
					v(), y(), c(), l(), u(), d(), f(), g()
				}
			}(this.container), F(this.collection.getState()), this.partial = h(wo, this.container), this.subscriptions = [(t = function(t, n) {
				var r = n.tags;
				return e.collection.addTags(r, (function(t) {
					e.renderView(t.url), F(t)()
				}))
			}, R("collection:filters:add", t)), Ki((function(t, n) {
				var r = n.tags,
					i = n.fetch;
				e.collection.removeTags(r, (function(t) {
					i && (e.renderView(t.url), F(t)())
				}))
			})), to((function(t, n) {
				var r = n.method;
				e.collection.setSort(r, (function(t) {
					e.renderView(t.url), F(t)()
				}))
			})), eo((function() {
				e.collection.clearSort((function(t) {
					e.renderView(t.url), F(t)()
				}))
			})), no((function() {
				e.collection.clearAll((function(t) {
					e.renderView(t.url), F(t)()
				}))
			})), m(window, "popstate", (function() {
				return location.reload()
			}))], this.delegate = new f.a(this.partial), this.delegate.on("click", '[data-pill="filter"]', (function(t) {
				t.preventDefault();
				var e = t.target.dataset.tag;
				Xi([e])
			})), this.delegate.on("click", '[data-pill="sort"]', (function(t) {
				t.preventDefault(), Zi()
			})), this.delegate.on("click", "[data-clear]", (function(t) {
				t.preventDefault(), B("collection:clear")
			})), this.delegate.on("click", "[data-pagination]", (function(t) {
				t.preventDefault();
				var n = t.target.href || t.target.closest("a").href;
				e.renderView(n)
			})), Ji(".animate.animate-up")
		},
		onUnload: function() {
			this.sidebar(), this.mobileFiltering(), this.delegate.off(), this.subscriptions.forEach((function(t) {
				return t()
			}))
		},
		renderView: function(t) {
			var e = this,
				n = h(".collection__loading", this.container);
			b(n, "is-active"), fetch(t, {
				credentials: "include"
			}).then((function(t) {
				return t.text()
			})).then((function(r) {
				window.history.pushState({}, "", t);
				var i = (new window.DOMParser).parseFromString(r, "text/html"),
					o = h(wo, i).innerHTML;
				e.partial.innerHTML = o, w(n, "is-active"), B("collection:updated")
			})).then((function() {
				Ji(".animate.animate-up")
			}))
		}
	});
	var _o = function(t) {
		var e = je(p(".accordion", t));
		return {
			destroy: function() {
				e.destroy()
			}
		}
	};

	function Ao() {
		var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
		t.forEach((function(t) {
			var e = document.createElement("div");
			e.classList.add("rte__iframe"), t.parentNode.insertBefore(e, t), e.appendChild(t), t.src = t.src
		}))
	}
	et("page", {
		onLoad: function() {
			this.accordions = _o(this.container), Ao(p("iframe", this.container))
		},
		onUnload: function() {
			this.accordions.destroy()
		}
	});
	var ko = "[data-js-toggle]";
	et("password", {
		onLoad: function() {
			var t = this;
			this.toggleButton = this.container.querySelector(ko), this.toggleButton.addEventListener("click", (function(e) {
				return t.toggleView(e)
			}))
		},
		onUnload: function() {
			var t = this;
			this.toggleButton.removeEventListener("click", (function(e) {
				return t.toggleView(e)
			}))
		},
		toggleView: function() {
			this.container.classList.toggle("welcome")
		}
	});
	var To = "[data-close]",
		So = "[data-slider]",
		xo = "[data-slide]",
		Co = function(t) {
			return "[data-id='".concat(t, "']")
		},
		Oo = "[data-nav-item]",
		Lo = ".lightbox__images-wrapper",
		qo = "[data-prev]",
		Do = "[data-next]",
		Po = "visible",
		jo = "active",
		Io = "zoom";

	function No(t) {
		var e = _t(t),
			n = p(Oo, t),
			r = h(Lo, t),
			i = p(xo, t),
			o = h(qo, t),
			a = h(Do, t),
			s = h(So, t),
			c = new se.a(s, {
				adaptiveHeight: !0,
				draggable: Li()({
					tablet: !0,
					featureDetect: !0
				}),
				prevNextButtons: !1,
				wrapAround: !1,
				pageDots: !1
			});
		i.length > 1 ? (c.on("scroll", (function(t) {
			u();
			var e = 100 * t;
			o.disabled = e < 1, a.disabled = e > 99
		})), c.on("select", (function() {
			n.forEach((function(t) {
				return w(t, jo)
			})), b(n[c.selectedIndex], jo), n[c.selectedIndex].scrollIntoView({
				behavior: "smooth",
				inline: "nearest"
			})
		}))) : (b(o, "hidden"), b(a, "hidden"), o.disabled = !0, a.disabled = !0);
		var l = [m(h(To, t), "click", (function(t) {
			t.preventDefault(), d()
		})), m(t, "keydown", (function(t) {
			27 === t.keyCode && d()
		})), m(n, "click", (function(t) {
			t.preventDefault();
			var e = t.currentTarget.dataset.index;
			c.select(e)
		})), m(i, "click", (function(t) {
			t.preventDefault(),
				function(t) {
					var e = t.currentTarget,
						n = e.classList.contains(Io);
					if (E(e, Io, !n), n) return void u(e);
					var i = t.clientX,
						o = t.clientY + r.scrollTop - s.offsetTop,
						a = -1 * (i - e.clientWidth / 2),
						c = -1 * (o - e.clientHeight / 2);
					e.style.transform = "translate3d(".concat(a, "px, ").concat(c, "px, 0) scale(2)")
				}(t)
		})), m(o, "click", (function() {
			return c.previous()
		})), m(a, "click", (function() {
			return c.next()
		}))];

		function u(t) {
			if (t) return w(t, Io), void(t.style.transform = "translate3d(0px, 0px, 0) scale(1)");
			i.forEach((function(t) {
				w(t, Io), t.style.transform = "translate3d(0px, 0px, 0) scale(1)"
			}))
		}

		function d() {
			u(), w(t, Po), setTimeout((function() {
				w(t, jo), Mt(t), e.deactivate()
			}), 300)
		}
		return {
			destroy: function() {
				l.forEach((function(t) {
					return t()
				})), c.destroy()
			},
			open: function(n) {
				b(t, jo), setTimeout((function() {
					b(t, Po), Nt(t, {
						allowTouchMove: function(t) {
							for (; t && t !== document.body;) {
								if (null !== t.getAttribute("data-scroll-lock-ignore")) return !0;
								t = t.parentNode
							}
						},
						reserveScrollBarGap: !0
					}), e.activate();
					var r = h(Co(n), t).dataset.slideIndex;
					c.select(r, !1, !0)
				}), 50)
			}
		}
	}
	var Mo, zo = "[data-product-form]",
		Ro = "[data-add-to-cart]",
		Bo = "[data-price]",
		Fo = "[data-compare-price]",
		Ho = "[data-slide]",
		Vo = "[data-slider]",
		Uo = "[data-variant-select]",
		Wo = function(t) {
			return "[value='".concat(t, "']")
		},
		Go = "[data-store-availability-container]";

	function $o(t, e) {
		var n = h("[data-add-to-cart-text]", t),
			r = t.dataset,
			i = r.langAvailable,
			o = r.langUnavailable,
			a = r.langSoldOut;
		e ? e.available ? (t.removeAttribute("disabled"), n.textContent = i) : (t.setAttribute("disabled", "disabled"), n.textContent = a) : (t.setAttribute("disabled", "disabled"), n.textContent = o)
	}
	if (et("product", {
			productForm: null,
			onLoad: function() {
				var t = this,
					e = this.container.dataset.productHasOnlyDefaultVariant;
				this.formElement = h(zo, this.container);
				var n = h(Vo, this.container),
					r = this.formElement.dataset.productHandle;
				this.storeAvailabilityContainer = this.formElement.querySelector(Go), this.availability = null;
				var i = p("[data-open]", this.container),
					o = h("[data-in-your-space]", this.container);
				o && E(o, "visible", Li()()), tt(r)((function(n) {
					t.productForm = Ue(t.formElement, n, {
						onOptionChange: function(e) {
							return t.onOptionChange(e)
						},
						onFormSubmit: function(e) {
							return t.onFormSubmit(e)
						}
					});
					var r = t.productForm.getVariant();
					t.storeAvailabilityContainer && r && (t.availability = Xe(t.storeAvailabilityContainer, n, r, {
						hideVariantTitle: "true" === e
					}))
				})), this.optionButtons = Ne(p("[data-option-buttons]", this.container)), this.lightbox = No(h("[data-lightbox]", this.container)), this.media = Ie(h(".product__media-container", this.container)), this.imageClick = m(i, "click", (function(e) {
					e.preventDefault(), t.media && t.media.pauseActiveMedia(), t.lightbox.open(e.currentTarget.dataset.open)
				}));
				var a = h("[data-prev]", this.container),
					s = h("[data-next]", this.container);
				s && b(s, "visible"), this.flkty = new se.a(n, {
					adaptiveHeight: !0,
					cellSelector: Ho,
					initialIndex: ".initial",
					pageDots: !1,
					prevNextButtons: !1,
					watchCSS: !0,
					wrapAround: !0
				}), this.flkty.on("change", (function() {
					b(a, "visible"), t.media && t.media.pauseActiveMedia()
				})), this.viewportResizeEvent = R("viewport-resize:small", (function() {
					setTimeout((function() {
						t.flkty.resize()
					}), 400)
				})), this.sliderPaginationClick = s ? m([a, s], "click", (function(e) {
					return t.onClickNav(e)
				})) : function() {};
				var c = h("[data-share]", this.container);
				if (c) {
					var l = h("[data-description]", this.container).childNodes || null,
						u = l ? l[l.length - 1] : null;
					if (u && "DIV" === u.nodeName && u.classList.contains("accordion")) {
						var d = '\n            <div class="accordion__group">\n              <a class="accordion__label">'.concat(c.dataset.share, '</a>\n              <div class="accordion__text">').concat(c.innerHTML, "</div>\n            </div>\n          ");
						u.insertAdjacentHTML("beforeend", d), c.style.display = "none"
					}
				}
				this.accordions = je(p(".accordion", this.container)), it();
				var f = h(".product-form", this.container);
				this.observer = new MutationObserver((function(e) {
					e.forEach((function(e) {
						if (D()(e.removedNodes).find((function(t) {
								return t.classList.contains("shopify-product-reviews-badge")
							}))) {
							t.observer.disconnect();
							var n = h(".spr-badge", t.container),
								r = document.createElement("label");
							r.classList.add("pf-review-label"), r.textContent = window.theme.strings.product.reviews || "Reviews", n.prepend(r)
						}
					}))
				})), this.observer.observe(f, {
					childList: !0
				})
			},
			onUnload: function() {
				this.optionButtons.destroy(), this.productForm.destroy(), this.flkty.destroy(), this.accordions.destroy(), this.lightbox.destroy(), this.imageClick(), this.sliderPaginationClick(), this.viewportResizeEvent(), this.observer.disconnect()
			},
			onOptionChange: function(t) {
				var e = t.dataset.variant;
              
              //  console.log("Endringer / Changes - to show # per variant on variant change");
//            get id of selected variant	
              var variantid = t.dataset.variant.id;
				
//               "inv_qty" returns whole object of all variants.           
              var updatedqty = inv_qty[variantid];
              document.querySelector(".variant-inventory").innerHTML = updatedqty;

              	if(updatedqty == 0)
                {
                  var lnk = '<div class="in_stock__variant_orb"><div class="in_stock__variant_orb_inner"></div></div>';
                 document.querySelector(".variant-inventory").prepend(lnk);
                }
              
              
				if (Ut(this.container, e), !e) return $o(h("[data-add-to-cart]", this.container), !1), void(this.availability && this.availability.unload());
				var n = function(t, e) {
					return /variant=/.test(t) ? t.replace(/(variant=)[^&]+/, "$1" + e) : /\?/.test(t) ? t.concat("&variant=").concat(e) : t.concat("?variant=").concat(e)
				}(window.location.href, e.id);
				if (window.history.replaceState({
						path: n
					}, "", n), this.updatePrices(e), h("".concat(Uo, " ").concat(Wo(e.id)), this.container).selected = !0, this.formElement.dispatchEvent(new Event("change")), e.featured_media)
					if (window.matchMedia("(min-width: 40em)").matches) {
						var r = h('[data-media-id="'.concat(e.featured_media.id, '"]'), this.container);
						r && r.scrollIntoView({
							behavior: "smooth",
							block: "center"
						})
					} else this.flkty.select(e.featured_media.position - 1);
				this.availability && this.availability.update(e)
			},
			onFormSubmit: function(t) {
				if (document.body.dataset.enableCartAjax) {
					t.preventDefault();
					var e = h(Ro, this.container);
					b(e, "loading"), Q.addItem(this.formElement).then((function(t) {
						var n = t.item;
						w(e, "loading"), B("cart:open", null, {
							flash: n.variant_id
						})
					}))
				}
			},
			updatePrices: function(t) {
				var e = p(Bo, this.container),
					n = p(Fo, this.container),
					r = h("[data-add-to-cart]", this.container);
				e.forEach((function(e) {
					return e.innerHTML = K(t.price)
				})), n.forEach((function(e) {
					return e.innerHTML = t.compare_at_price > t.price ? K(t.compare_at_price) : ""
				})), $o(r, t)
			},
			onClickNav: function(t) {
				t.preventDefault(), "next" in t.currentTarget.dataset ? this.flkty.next() : "prev" in t.currentTarget.dataset && this.flkty.previous()
			}
		}), et("contact", {
			onLoad: function() {
				this.accordions = _o(this.container), Ao(p("iframe", this.container))
			},
			onUnload: function() {
				this.accordions.destroy()
			}
		}), et("addresses", {
			onLoad: function() {
				var t = this;
				this.modals = p("[data-modal]", this.container);
				var e = p("[data-overlay]", this.container),
					n = p("[data-open]", this.container),
					r = p("[data-close]", this.container),
					i = p("[data-remove]", this.container),
					o = p("[data-country-option]", this.container) || [];
				this.events = [m(n, "click", (function(e) {
					return t.openModal(e)
				})), m([].concat(D()(r), D()(e)), "click", (function(e) {
					return t.closeModal(e)
				})), m(i, "click", (function(e) {
					return t.removeAddress(e)
				}))], o.forEach((function(t) {
					var e = t.dataset.formId,
						n = "AddressCountry_" + e,
						r = "AddressProvince_" + e,
						i = "AddressProvinceContainer_" + e;
					new window.Shopify.CountryProvinceSelector(n, r, {
						hideElement: i
					})
				}))
			},
			onUnload: function() {
				this.events.forEach((function(t) {
					return t()
				}))
			},
			openModal: function(t) {
				t.preventDefault();
				var e = t.currentTarget.dataset.open,
					n = this.modals.find((function(t) {
						return t.dataset.modal == e
					}));
				b(n, "active"), setTimeout((function() {
					b(n, "visible")
				}), 50)
			},
			closeModal: function(t) {
				var e = this;
				t.preventDefault(), w(this.modals, "visible"), setTimeout((function() {
					w(e.modals, "active")
				}), 350)
			},
			removeAddress: function(t) {
				var e = t.currentTarget.dataset,
					n = e.confirmMessage,
					r = e.target;
				confirm(n), window.Shopify.postLink(r, {
					parameters: {
						_method: "delete"
					}
				})
			}
		}), et("login", {
			onLoad: function() {
				var t = h('[data-part="login"]', this.container),
					e = h('[data-part="reset"]', this.container),
					n = p("[data-toggle]", this.container),
					r = h("[data-success]", this.container),
					i = h("[data-success-message]", this.container);
				r && b(i, "visible"), this.toggleClick = m(n, "click", (function(n) {
					n.preventDefault(), E([t, e], "hide")
				}))
			},
			onUnload: function() {
				this.toggleClick()
			}
		}), !0 === window.Shopify.designMode) document.documentElement.classList.add("theme-editor");
	else {
		var Jo = document.querySelector(".theme-editor-scroll-offset");
		Jo && Jo.parentNode.removeChild(Jo)
	}! function() {
		function t() {
			p(".shopify-section").forEach((function(t) {
				var e = t.firstElementChild;
				e && e.classList.contains(ot) && (w(e, ot), b(t, ot))
			}))
		}
		t(), document.addEventListener("shopify:section:load", t)
	}(), document.addEventListener("DOMContentLoaded", (function() {
			a("*")
		})), (Mo = document.querySelector(".page-transition")) && (Object.assign(Mo.style, {
			opacity: 0,
			pointerEvents: "none"
		}), setTimeout((function() {
			Mo.style.visibility = "hidden"
		}), 300), new f.a(document.body).on("click", 'a[href]:not([href^="#"]):not(.no-transition):not([href^="mailto:"]):not([href^="tel:"]):not([target="_blank"])', (function(t, e) {
			t.preventDefault(), Mo.addEventListener("transitionend", (function t(n) {
				"opacity" === n.propertyName && (Mo.removeEventListener("transitionend", t), window.location.href = e.href)
			})), Object.assign(Mo.style, {
				opacity: 1,
				pointerEvents: "all",
				visibility: "visible"
			})
		})), window.onpageshow = function(t) {
			t.persisted && Object.assign(Mo.style, {
				opacity: 0,
				pointerEvents: "none"
			})
		}), new f.a(document.body).on("click", "button[data-quick-add]", (function(t, e) {
			var n = e.dataset.quickAdd;
			B("cart:configureLoading"),
				function(t) {
					return function(e) {
						return fetch("".concat(window.theme.routes.products, "/").concat(t, "?view=quick")).then((function(t) {
							return t.text()
						})).then((function(t) {
							return e(t)
						})).catch((function(t) {
							return console.log(t.message)
						}))
					}
				}(n)((function(t) {
					return B("cart:configureReady", null, {
						html: t,
						handle: n
					})
				}))
		})), R("collection:updated", it),
		function() {
			var t = e();

			function e() {
				return window.matchMedia(ee).matches ? "small" : window.matchMedia(ne).matches ? "medium" : window.matchMedia(re).matches ? "large" : void 0
			}
			m(window, "resize", (function() {
				var n = e();
				t !== n && B("viewport-resize:".concat(t = n))
			}))
		}(), te(document.querySelector("[data-store-availability-modal]")), window.SHA = "unknown"
}]);
