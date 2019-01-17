(window.webpackJsonp = window.webpackJsonp || []).push([
  [9],
  {
    157: function(e, t, n) {
      "use strict";
      e.exports = n(159);
    },
    159: function(e, t, n) {
      "use strict";
      var r = n(56),
        i = "function" == typeof Symbol && Symbol.for,
        o = i ? Symbol.for("react.element") : 60103,
        s = i ? Symbol.for("react.portal") : 60106,
        a = i ? Symbol.for("react.fragment") : 60107,
        l = i ? Symbol.for("react.strict_mode") : 60108,
        u = i ? Symbol.for("react.profiler") : 60114,
        c = i ? Symbol.for("react.provider") : 60109,
        f = i ? Symbol.for("react.context") : 60110,
        d = i ? Symbol.for("react.concurrent_mode") : 60111,
        h = i ? Symbol.for("react.forward_ref") : 60112,
        p = i ? Symbol.for("react.suspense") : 60113,
        g = i ? Symbol.for("react.memo") : 60115,
        m = i ? Symbol.for("react.lazy") : 60116,
        v = "function" == typeof Symbol && Symbol.iterator;
      function y(e) {
        for (
          var t = arguments.length - 1,
            n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
            r = 0;
          r < t;
          r++
        )
          n += "&args[]=" + encodeURIComponent(arguments[r + 1]);
        !(function(e, t, n, r, i, o, s, a) {
          if (!e) {
            if (((e = void 0), void 0 === t))
              e = Error(
                "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
              );
            else {
              var l = [n, r, i, o, s, a],
                u = 0;
              (e = Error(
                t.replace(/%s/g, function() {
                  return l[u++];
                })
              )).name = "Invariant Violation";
            }
            throw ((e.framesToPop = 1), e);
          }
        })(
          !1,
          "Minified React error #" +
            e +
            "; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",
          n
        );
      }
      var _ = {
          isMounted: function() {
            return !1;
          },
          enqueueForceUpdate: function() {},
          enqueueReplaceState: function() {},
          enqueueSetState: function() {}
        },
        b = {};
      function E(e, t, n) {
        (this.props = e),
          (this.context = t),
          (this.refs = b),
          (this.updater = n || _);
      }
      function T() {}
      function w(e, t, n) {
        (this.props = e),
          (this.context = t),
          (this.refs = b),
          (this.updater = n || _);
      }
      (E.prototype.isReactComponent = {}),
        (E.prototype.setState = function(e, t) {
          "object" != typeof e &&
            "function" != typeof e &&
            null != e &&
            y("85"),
            this.updater.enqueueSetState(this, e, t, "setState");
        }),
        (E.prototype.forceUpdate = function(e) {
          this.updater.enqueueForceUpdate(this, e, "forceUpdate");
        }),
        (T.prototype = E.prototype);
      var C = (w.prototype = new T());
      (C.constructor = w), r(C, E.prototype), (C.isPureReactComponent = !0);
      var S = { current: null, currentDispatcher: null },
        A = Object.prototype.hasOwnProperty,
        D = { key: !0, ref: !0, __self: !0, __source: !0 };
      function x(e, t, n) {
        var r = void 0,
          i = {},
          s = null,
          a = null;
        if (null != t)
          for (r in (void 0 !== t.ref && (a = t.ref),
          void 0 !== t.key && (s = "" + t.key),
          t))
            A.call(t, r) && !D.hasOwnProperty(r) && (i[r] = t[r]);
        var l = arguments.length - 2;
        if (1 === l) i.children = n;
        else if (1 < l) {
          for (var u = Array(l), c = 0; c < l; c++) u[c] = arguments[c + 2];
          i.children = u;
        }
        if (e && e.defaultProps)
          for (r in (l = e.defaultProps)) void 0 === i[r] && (i[r] = l[r]);
        return {
          $$typeof: o,
          type: e,
          key: s,
          ref: a,
          props: i,
          _owner: S.current
        };
      }
      function O(e) {
        return "object" == typeof e && null !== e && e.$$typeof === o;
      }
      var I = /\/+/g,
        N = [];
      function L(e, t, n, r) {
        if (N.length) {
          var i = N.pop();
          return (
            (i.result = e),
            (i.keyPrefix = t),
            (i.func = n),
            (i.context = r),
            (i.count = 0),
            i
          );
        }
        return { result: e, keyPrefix: t, func: n, context: r, count: 0 };
      }
      function k(e) {
        (e.result = null),
          (e.keyPrefix = null),
          (e.func = null),
          (e.context = null),
          (e.count = 0),
          10 > N.length && N.push(e);
      }
      function P(e, t, n) {
        return null == e
          ? 0
          : (function e(t, n, r, i) {
              var a = typeof t;
              ("undefined" !== a && "boolean" !== a) || (t = null);
              var l = !1;
              if (null === t) l = !0;
              else
                switch (a) {
                  case "string":
                  case "number":
                    l = !0;
                    break;
                  case "object":
                    switch (t.$$typeof) {
                      case o:
                      case s:
                        l = !0;
                    }
                }
              if (l) return r(i, t, "" === n ? "." + H(t, 0) : n), 1;
              if (((l = 0), (n = "" === n ? "." : n + ":"), Array.isArray(t)))
                for (var u = 0; u < t.length; u++) {
                  var c = n + H((a = t[u]), u);
                  l += e(a, c, r, i);
                }
              else if (
                ((c =
                  null === t || "object" != typeof t
                    ? null
                    : "function" == typeof (c = (v && t[v]) || t["@@iterator"])
                    ? c
                    : null),
                "function" == typeof c)
              )
                for (t = c.call(t), u = 0; !(a = t.next()).done; )
                  l += e((a = a.value), (c = n + H(a, u++)), r, i);
              else
                "object" === a &&
                  y(
                    "31",
                    "[object Object]" == (r = "" + t)
                      ? "object with keys {" + Object.keys(t).join(", ") + "}"
                      : r,
                    ""
                  );
              return l;
            })(e, "", t, n);
      }
      function H(e, t) {
        return "object" == typeof e && null !== e && null != e.key
          ? (function(e) {
              var t = { "=": "=0", ":": "=2" };
              return (
                "$" +
                ("" + e).replace(/[=:]/g, function(e) {
                  return t[e];
                })
              );
            })(e.key)
          : t.toString(36);
      }
      function R(e, t) {
        e.func.call(e.context, t, e.count++);
      }
      function j(e, t, n) {
        var r = e.result,
          i = e.keyPrefix;
        (e = e.func.call(e.context, t, e.count++)),
          Array.isArray(e)
            ? W(e, r, n, function(e) {
                return e;
              })
            : null != e &&
              (O(e) &&
                (e = (function(e, t) {
                  return {
                    $$typeof: o,
                    type: e.type,
                    key: t,
                    ref: e.ref,
                    props: e.props,
                    _owner: e._owner
                  };
                })(
                  e,
                  i +
                    (!e.key || (t && t.key === e.key)
                      ? ""
                      : ("" + e.key).replace(I, "$&/") + "/") +
                    n
                )),
              r.push(e));
      }
      function W(e, t, n, r, i) {
        var o = "";
        null != n && (o = ("" + n).replace(I, "$&/") + "/"),
          P(e, j, (t = L(t, o, r, i))),
          k(t);
      }
      var M = {
          Children: {
            map: function(e, t, n) {
              if (null == e) return e;
              var r = [];
              return W(e, r, null, t, n), r;
            },
            forEach: function(e, t, n) {
              if (null == e) return e;
              P(e, R, (t = L(null, null, t, n))), k(t);
            },
            count: function(e) {
              return P(
                e,
                function() {
                  return null;
                },
                null
              );
            },
            toArray: function(e) {
              var t = [];
              return (
                W(e, t, null, function(e) {
                  return e;
                }),
                t
              );
            },
            only: function(e) {
              return O(e) || y("143"), e;
            }
          },
          createRef: function() {
            return { current: null };
          },
          Component: E,
          PureComponent: w,
          createContext: function(e, t) {
            return (
              void 0 === t && (t = null),
              ((e = {
                $$typeof: f,
                _calculateChangedBits: t,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null
              }).Provider = { $$typeof: c, _context: e }),
              (e.Consumer = e)
            );
          },
          forwardRef: function(e) {
            return { $$typeof: h, render: e };
          },
          lazy: function(e) {
            return { $$typeof: m, _ctor: e, _status: -1, _result: null };
          },
          memo: function(e, t) {
            return { $$typeof: g, type: e, compare: void 0 === t ? null : t };
          },
          Fragment: a,
          StrictMode: l,
          Suspense: p,
          createElement: x,
          cloneElement: function(e, t, n) {
            null == e && y("267", e);
            var i = void 0,
              s = r({}, e.props),
              a = e.key,
              l = e.ref,
              u = e._owner;
            if (null != t) {
              void 0 !== t.ref && ((l = t.ref), (u = S.current)),
                void 0 !== t.key && (a = "" + t.key);
              var c = void 0;
              for (i in (e.type &&
                e.type.defaultProps &&
                (c = e.type.defaultProps),
              t))
                A.call(t, i) &&
                  !D.hasOwnProperty(i) &&
                  (s[i] = void 0 === t[i] && void 0 !== c ? c[i] : t[i]);
            }
            if (1 === (i = arguments.length - 2)) s.children = n;
            else if (1 < i) {
              c = Array(i);
              for (var f = 0; f < i; f++) c[f] = arguments[f + 2];
              s.children = c;
            }
            return {
              $$typeof: o,
              type: e.type,
              key: a,
              ref: l,
              props: s,
              _owner: u
            };
          },
          createFactory: function(e) {
            var t = x.bind(null, e);
            return (t.type = e), t;
          },
          isValidElement: O,
          version: "16.7.0",
          unstable_ConcurrentMode: d,
          unstable_Profiler: u,
          __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
            ReactCurrentOwner: S,
            assign: r
          }
        },
        F = { default: M },
        q = (F && M) || F;
      e.exports = q.default || q;
    },
    160: function(e, t, n) {
      !(function(e, t, n) {
        "use strict";
        function r(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        function i(e, t, n) {
          return t && r(e.prototype, t), n && r(e, n), e;
        }
        function o(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
                })
              : (e[t] = n),
            e
          );
        }
        function s(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols &&
              (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function(e) {
                  return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
              )),
              r.forEach(function(t) {
                o(e, t, n[t]);
              });
          }
          return e;
        }
        (t = t && t.hasOwnProperty("default") ? t.default : t),
          (n = n && n.hasOwnProperty("default") ? n.default : n);
        var a = "transitionend";
        function l(e) {
          var t = this,
            r = !1;
          return (
            n(this).one(u.TRANSITION_END, function() {
              r = !0;
            }),
            setTimeout(function() {
              r || u.triggerTransitionEnd(t);
            }, e),
            this
          );
        }
        var u = {
          TRANSITION_END: "bsTransitionEnd",
          getUID: function(e) {
            do {
              e += ~~(1e6 * Math.random());
            } while (document.getElementById(e));
            return e;
          },
          getSelectorFromElement: function(e) {
            var t = e.getAttribute("data-target");
            if (!t || "#" === t) {
              var n = e.getAttribute("href");
              t = n && "#" !== n ? n.trim() : "";
            }
            return t && document.querySelector(t) ? t : null;
          },
          getTransitionDurationFromElement: function(e) {
            if (!e) return 0;
            var t = n(e).css("transition-duration"),
              r = n(e).css("transition-delay"),
              i = parseFloat(t),
              o = parseFloat(r);
            return i || o
              ? ((t = t.split(",")[0]),
                (r = r.split(",")[0]),
                1e3 * (parseFloat(t) + parseFloat(r)))
              : 0;
          },
          reflow: function(e) {
            return e.offsetHeight;
          },
          triggerTransitionEnd: function(e) {
            n(e).trigger(a);
          },
          supportsTransitionEnd: function() {
            return Boolean(a);
          },
          isElement: function(e) {
            return (e[0] || e).nodeType;
          },
          typeCheckConfig: function(e, t, n) {
            for (var r in n)
              if (Object.prototype.hasOwnProperty.call(n, r)) {
                var i = n[r],
                  o = t[r],
                  s =
                    o && u.isElement(o)
                      ? "element"
                      : ((a = o),
                        {}.toString
                          .call(a)
                          .match(/\s([a-z]+)/i)[1]
                          .toLowerCase());
                if (!new RegExp(i).test(s))
                  throw new Error(
                    e.toUpperCase() +
                      ': Option "' +
                      r +
                      '" provided type "' +
                      s +
                      '" but expected type "' +
                      i +
                      '".'
                  );
              }
            var a;
          },
          findShadowRoot: function(e) {
            if (!document.documentElement.attachShadow) return null;
            if ("function" == typeof e.getRootNode) {
              var t = e.getRootNode();
              return t instanceof ShadowRoot ? t : null;
            }
            return e instanceof ShadowRoot
              ? e
              : e.parentNode
              ? u.findShadowRoot(e.parentNode)
              : null;
          }
        };
        (n.fn.emulateTransitionEnd = l),
          (n.event.special[u.TRANSITION_END] = {
            bindType: a,
            delegateType: a,
            handle: function(e) {
              if (n(e.target).is(this))
                return e.handleObj.handler.apply(this, arguments);
            }
          });
        var c = n.fn.alert,
          f = {
            CLOSE: "close.bs.alert",
            CLOSED: "closed.bs.alert",
            CLICK_DATA_API: "click.bs.alert.data-api"
          },
          d = { ALERT: "alert", FADE: "fade", SHOW: "show" },
          h = (function() {
            function e(e) {
              this._element = e;
            }
            var t = e.prototype;
            return (
              (t.close = function(e) {
                var t = this._element;
                e && (t = this._getRootElement(e));
                var n = this._triggerCloseEvent(t);
                n.isDefaultPrevented() || this._removeElement(t);
              }),
              (t.dispose = function() {
                n.removeData(this._element, "bs.alert"), (this._element = null);
              }),
              (t._getRootElement = function(e) {
                var t = u.getSelectorFromElement(e),
                  r = !1;
                return (
                  t && (r = document.querySelector(t)),
                  r || (r = n(e).closest("." + d.ALERT)[0]),
                  r
                );
              }),
              (t._triggerCloseEvent = function(e) {
                var t = n.Event(f.CLOSE);
                return n(e).trigger(t), t;
              }),
              (t._removeElement = function(e) {
                var t = this;
                if ((n(e).removeClass(d.SHOW), n(e).hasClass(d.FADE))) {
                  var r = u.getTransitionDurationFromElement(e);
                  n(e)
                    .one(u.TRANSITION_END, function(n) {
                      return t._destroyElement(e, n);
                    })
                    .emulateTransitionEnd(r);
                } else this._destroyElement(e);
              }),
              (t._destroyElement = function(e) {
                n(e)
                  .detach()
                  .trigger(f.CLOSED)
                  .remove();
              }),
              (e._jQueryInterface = function(t) {
                return this.each(function() {
                  var r = n(this),
                    i = r.data("bs.alert");
                  i || ((i = new e(this)), r.data("bs.alert", i)),
                    "close" === t && i[t](this);
                });
              }),
              (e._handleDismiss = function(e) {
                return function(t) {
                  t && t.preventDefault(), e.close(this);
                };
              }),
              i(e, null, [
                {
                  key: "VERSION",
                  get: function() {
                    return "4.2.1";
                  }
                }
              ]),
              e
            );
          })();
        n(document).on(
          f.CLICK_DATA_API,
          '[data-dismiss="alert"]',
          h._handleDismiss(new h())
        ),
          (n.fn.alert = h._jQueryInterface),
          (n.fn.alert.Constructor = h),
          (n.fn.alert.noConflict = function() {
            return (n.fn.alert = c), h._jQueryInterface;
          });
        var p = n.fn.button,
          g = { ACTIVE: "active", BUTTON: "btn", FOCUS: "focus" },
          m = {
            DATA_TOGGLE_CARROT: '[data-toggle^="button"]',
            DATA_TOGGLE: '[data-toggle="buttons"]',
            INPUT: 'input:not([type="hidden"])',
            ACTIVE: ".active",
            BUTTON: ".btn"
          },
          v = {
            CLICK_DATA_API: "click.bs.button.data-api",
            FOCUS_BLUR_DATA_API:
              "focus.bs.button.data-api blur.bs.button.data-api"
          },
          y = (function() {
            function e(e) {
              this._element = e;
            }
            var t = e.prototype;
            return (
              (t.toggle = function() {
                var e = !0,
                  t = !0,
                  r = n(this._element).closest(m.DATA_TOGGLE)[0];
                if (r) {
                  var i = this._element.querySelector(m.INPUT);
                  if (i) {
                    if ("radio" === i.type)
                      if (
                        i.checked &&
                        this._element.classList.contains(g.ACTIVE)
                      )
                        e = !1;
                      else {
                        var o = r.querySelector(m.ACTIVE);
                        o && n(o).removeClass(g.ACTIVE);
                      }
                    if (e) {
                      if (
                        i.hasAttribute("disabled") ||
                        r.hasAttribute("disabled") ||
                        i.classList.contains("disabled") ||
                        r.classList.contains("disabled")
                      )
                        return;
                      (i.checked = !this._element.classList.contains(g.ACTIVE)),
                        n(i).trigger("change");
                    }
                    i.focus(), (t = !1);
                  }
                }
                t &&
                  this._element.setAttribute(
                    "aria-pressed",
                    !this._element.classList.contains(g.ACTIVE)
                  ),
                  e && n(this._element).toggleClass(g.ACTIVE);
              }),
              (t.dispose = function() {
                n.removeData(this._element, "bs.button"),
                  (this._element = null);
              }),
              (e._jQueryInterface = function(t) {
                return this.each(function() {
                  var r = n(this).data("bs.button");
                  r || ((r = new e(this)), n(this).data("bs.button", r)),
                    "toggle" === t && r[t]();
                });
              }),
              i(e, null, [
                {
                  key: "VERSION",
                  get: function() {
                    return "4.2.1";
                  }
                }
              ]),
              e
            );
          })();
        n(document)
          .on(v.CLICK_DATA_API, m.DATA_TOGGLE_CARROT, function(e) {
            e.preventDefault();
            var t = e.target;
            n(t).hasClass(g.BUTTON) || (t = n(t).closest(m.BUTTON)),
              y._jQueryInterface.call(n(t), "toggle");
          })
          .on(v.FOCUS_BLUR_DATA_API, m.DATA_TOGGLE_CARROT, function(e) {
            var t = n(e.target).closest(m.BUTTON)[0];
            n(t).toggleClass(g.FOCUS, /^focus(in)?$/.test(e.type));
          }),
          (n.fn.button = y._jQueryInterface),
          (n.fn.button.Constructor = y),
          (n.fn.button.noConflict = function() {
            return (n.fn.button = p), y._jQueryInterface;
          });
        var _ = "carousel",
          b = ".bs.carousel",
          E = n.fn[_],
          T = {
            interval: 5e3,
            keyboard: !0,
            slide: !1,
            pause: "hover",
            wrap: !0,
            touch: !0
          },
          w = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            slide: "(boolean|string)",
            pause: "(string|boolean)",
            wrap: "boolean",
            touch: "boolean"
          },
          C = { NEXT: "next", PREV: "prev", LEFT: "left", RIGHT: "right" },
          S = {
            SLIDE: "slide.bs.carousel",
            SLID: "slid.bs.carousel",
            KEYDOWN: "keydown.bs.carousel",
            MOUSEENTER: "mouseenter.bs.carousel",
            MOUSELEAVE: "mouseleave.bs.carousel",
            TOUCHSTART: "touchstart.bs.carousel",
            TOUCHMOVE: "touchmove.bs.carousel",
            TOUCHEND: "touchend.bs.carousel",
            POINTERDOWN: "pointerdown.bs.carousel",
            POINTERUP: "pointerup.bs.carousel",
            DRAG_START: "dragstart.bs.carousel",
            LOAD_DATA_API: "load.bs.carousel.data-api",
            CLICK_DATA_API: "click.bs.carousel.data-api"
          },
          A = {
            CAROUSEL: "carousel",
            ACTIVE: "active",
            SLIDE: "slide",
            RIGHT: "carousel-item-right",
            LEFT: "carousel-item-left",
            NEXT: "carousel-item-next",
            PREV: "carousel-item-prev",
            ITEM: "carousel-item",
            POINTER_EVENT: "pointer-event"
          },
          D = {
            ACTIVE: ".active",
            ACTIVE_ITEM: ".active.carousel-item",
            ITEM: ".carousel-item",
            ITEM_IMG: ".carousel-item img",
            NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
            INDICATORS: ".carousel-indicators",
            DATA_SLIDE: "[data-slide], [data-slide-to]",
            DATA_RIDE: '[data-ride="carousel"]'
          },
          x = { TOUCH: "touch", PEN: "pen" },
          O = (function() {
            function e(e, t) {
              (this._items = null),
                (this._interval = null),
                (this._activeElement = null),
                (this._isPaused = !1),
                (this._isSliding = !1),
                (this.touchTimeout = null),
                (this.touchStartX = 0),
                (this.touchDeltaX = 0),
                (this._config = this._getConfig(t)),
                (this._element = e),
                (this._indicatorsElement = this._element.querySelector(
                  D.INDICATORS
                )),
                (this._touchSupported =
                  "ontouchstart" in document.documentElement ||
                  navigator.maxTouchPoints > 0),
                (this._pointerEvent = Boolean(
                  window.PointerEvent || window.MSPointerEvent
                )),
                this._addEventListeners();
            }
            var t = e.prototype;
            return (
              (t.next = function() {
                this._isSliding || this._slide(C.NEXT);
              }),
              (t.nextWhenVisible = function() {
                !document.hidden &&
                  n(this._element).is(":visible") &&
                  "hidden" !== n(this._element).css("visibility") &&
                  this.next();
              }),
              (t.prev = function() {
                this._isSliding || this._slide(C.PREV);
              }),
              (t.pause = function(e) {
                e || (this._isPaused = !0),
                  this._element.querySelector(D.NEXT_PREV) &&
                    (u.triggerTransitionEnd(this._element), this.cycle(!0)),
                  clearInterval(this._interval),
                  (this._interval = null);
              }),
              (t.cycle = function(e) {
                e || (this._isPaused = !1),
                  this._interval &&
                    (clearInterval(this._interval), (this._interval = null)),
                  this._config.interval &&
                    !this._isPaused &&
                    (this._interval = setInterval(
                      (document.visibilityState
                        ? this.nextWhenVisible
                        : this.next
                      ).bind(this),
                      this._config.interval
                    ));
              }),
              (t.to = function(e) {
                var t = this;
                this._activeElement = this._element.querySelector(
                  D.ACTIVE_ITEM
                );
                var r = this._getItemIndex(this._activeElement);
                if (!(e > this._items.length - 1 || e < 0))
                  if (this._isSliding)
                    n(this._element).one(S.SLID, function() {
                      return t.to(e);
                    });
                  else {
                    if (r === e) return this.pause(), void this.cycle();
                    var i = e > r ? C.NEXT : C.PREV;
                    this._slide(i, this._items[e]);
                  }
              }),
              (t.dispose = function() {
                n(this._element).off(b),
                  n.removeData(this._element, "bs.carousel"),
                  (this._items = null),
                  (this._config = null),
                  (this._element = null),
                  (this._interval = null),
                  (this._isPaused = null),
                  (this._isSliding = null),
                  (this._activeElement = null),
                  (this._indicatorsElement = null);
              }),
              (t._getConfig = function(e) {
                return (e = s({}, T, e)), u.typeCheckConfig(_, e, w), e;
              }),
              (t._handleSwipe = function() {
                var e = Math.abs(this.touchDeltaX);
                if (!(e <= 40)) {
                  var t = e / this.touchDeltaX;
                  t > 0 && this.prev(), t < 0 && this.next();
                }
              }),
              (t._addEventListeners = function() {
                var e = this;
                this._config.keyboard &&
                  n(this._element).on(S.KEYDOWN, function(t) {
                    return e._keydown(t);
                  }),
                  "hover" === this._config.pause &&
                    n(this._element)
                      .on(S.MOUSEENTER, function(t) {
                        return e.pause(t);
                      })
                      .on(S.MOUSELEAVE, function(t) {
                        return e.cycle(t);
                      }),
                  this._addTouchEventListeners();
              }),
              (t._addTouchEventListeners = function() {
                var e = this;
                if (this._touchSupported) {
                  var t = function(t) {
                      e._pointerEvent &&
                      x[t.originalEvent.pointerType.toUpperCase()]
                        ? (e.touchStartX = t.originalEvent.clientX)
                        : e._pointerEvent ||
                          (e.touchStartX = t.originalEvent.touches[0].clientX);
                    },
                    r = function(t) {
                      e._pointerEvent &&
                        x[t.originalEvent.pointerType.toUpperCase()] &&
                        (e.touchDeltaX =
                          t.originalEvent.clientX - e.touchStartX),
                        e._handleSwipe(),
                        "hover" === e._config.pause &&
                          (e.pause(),
                          e.touchTimeout && clearTimeout(e.touchTimeout),
                          (e.touchTimeout = setTimeout(function(t) {
                            return e.cycle(t);
                          }, 500 + e._config.interval)));
                    };
                  n(this._element.querySelectorAll(D.ITEM_IMG)).on(
                    S.DRAG_START,
                    function(e) {
                      return e.preventDefault();
                    }
                  ),
                    this._pointerEvent
                      ? (n(this._element).on(S.POINTERDOWN, function(e) {
                          return t(e);
                        }),
                        n(this._element).on(S.POINTERUP, function(e) {
                          return r(e);
                        }),
                        this._element.classList.add(A.POINTER_EVENT))
                      : (n(this._element).on(S.TOUCHSTART, function(e) {
                          return t(e);
                        }),
                        n(this._element).on(S.TOUCHMOVE, function(t) {
                          return (function(t) {
                            t.originalEvent.touches &&
                            t.originalEvent.touches.length > 1
                              ? (e.touchDeltaX = 0)
                              : (e.touchDeltaX =
                                  t.originalEvent.touches[0].clientX -
                                  e.touchStartX);
                          })(t);
                        }),
                        n(this._element).on(S.TOUCHEND, function(e) {
                          return r(e);
                        }));
                }
              }),
              (t._keydown = function(e) {
                if (!/input|textarea/i.test(e.target.tagName))
                  switch (e.which) {
                    case 37:
                      e.preventDefault(), this.prev();
                      break;
                    case 39:
                      e.preventDefault(), this.next();
                  }
              }),
              (t._getItemIndex = function(e) {
                return (
                  (this._items =
                    e && e.parentNode
                      ? [].slice.call(e.parentNode.querySelectorAll(D.ITEM))
                      : []),
                  this._items.indexOf(e)
                );
              }),
              (t._getItemByDirection = function(e, t) {
                var n = e === C.NEXT,
                  r = e === C.PREV,
                  i = this._getItemIndex(t),
                  o = this._items.length - 1,
                  s = (r && 0 === i) || (n && i === o);
                if (s && !this._config.wrap) return t;
                var a = e === C.PREV ? -1 : 1,
                  l = (i + a) % this._items.length;
                return -1 === l
                  ? this._items[this._items.length - 1]
                  : this._items[l];
              }),
              (t._triggerSlideEvent = function(e, t) {
                var r = this._getItemIndex(e),
                  i = this._getItemIndex(
                    this._element.querySelector(D.ACTIVE_ITEM)
                  ),
                  o = n.Event(S.SLIDE, {
                    relatedTarget: e,
                    direction: t,
                    from: i,
                    to: r
                  });
                return n(this._element).trigger(o), o;
              }),
              (t._setActiveIndicatorElement = function(e) {
                if (this._indicatorsElement) {
                  var t = [].slice.call(
                    this._indicatorsElement.querySelectorAll(D.ACTIVE)
                  );
                  n(t).removeClass(A.ACTIVE);
                  var r = this._indicatorsElement.children[
                    this._getItemIndex(e)
                  ];
                  r && n(r).addClass(A.ACTIVE);
                }
              }),
              (t._slide = function(e, t) {
                var r,
                  i,
                  o,
                  s = this,
                  a = this._element.querySelector(D.ACTIVE_ITEM),
                  l = this._getItemIndex(a),
                  c = t || (a && this._getItemByDirection(e, a)),
                  f = this._getItemIndex(c),
                  d = Boolean(this._interval);
                if (
                  (e === C.NEXT
                    ? ((r = A.LEFT), (i = A.NEXT), (o = C.LEFT))
                    : ((r = A.RIGHT), (i = A.PREV), (o = C.RIGHT)),
                  c && n(c).hasClass(A.ACTIVE))
                )
                  this._isSliding = !1;
                else {
                  var h = this._triggerSlideEvent(c, o);
                  if (!h.isDefaultPrevented() && a && c) {
                    (this._isSliding = !0),
                      d && this.pause(),
                      this._setActiveIndicatorElement(c);
                    var p = n.Event(S.SLID, {
                      relatedTarget: c,
                      direction: o,
                      from: l,
                      to: f
                    });
                    if (n(this._element).hasClass(A.SLIDE)) {
                      n(c).addClass(i),
                        u.reflow(c),
                        n(a).addClass(r),
                        n(c).addClass(r);
                      var g = parseInt(c.getAttribute("data-interval"), 10);
                      g
                        ? ((this._config.defaultInterval =
                            this._config.defaultInterval ||
                            this._config.interval),
                          (this._config.interval = g))
                        : (this._config.interval =
                            this._config.defaultInterval ||
                            this._config.interval);
                      var m = u.getTransitionDurationFromElement(a);
                      n(a)
                        .one(u.TRANSITION_END, function() {
                          n(c)
                            .removeClass(r + " " + i)
                            .addClass(A.ACTIVE),
                            n(a).removeClass(A.ACTIVE + " " + i + " " + r),
                            (s._isSliding = !1),
                            setTimeout(function() {
                              return n(s._element).trigger(p);
                            }, 0);
                        })
                        .emulateTransitionEnd(m);
                    } else
                      n(a).removeClass(A.ACTIVE),
                        n(c).addClass(A.ACTIVE),
                        (this._isSliding = !1),
                        n(this._element).trigger(p);
                    d && this.cycle();
                  }
                }
              }),
              (e._jQueryInterface = function(t) {
                return this.each(function() {
                  var r = n(this).data("bs.carousel"),
                    i = s({}, T, n(this).data());
                  "object" == typeof t && (i = s({}, i, t));
                  var o = "string" == typeof t ? t : i.slide;
                  if (
                    (r ||
                      ((r = new e(this, i)), n(this).data("bs.carousel", r)),
                    "number" == typeof t)
                  )
                    r.to(t);
                  else if ("string" == typeof o) {
                    if (void 0 === r[o])
                      throw new TypeError('No method named "' + o + '"');
                    r[o]();
                  } else i.interval && (r.pause(), r.cycle());
                });
              }),
              (e._dataApiClickHandler = function(t) {
                var r = u.getSelectorFromElement(this);
                if (r) {
                  var i = n(r)[0];
                  if (i && n(i).hasClass(A.CAROUSEL)) {
                    var o = s({}, n(i).data(), n(this).data()),
                      a = this.getAttribute("data-slide-to");
                    a && (o.interval = !1),
                      e._jQueryInterface.call(n(i), o),
                      a &&
                        n(i)
                          .data("bs.carousel")
                          .to(a),
                      t.preventDefault();
                  }
                }
              }),
              i(e, null, [
                {
                  key: "VERSION",
                  get: function() {
                    return "4.2.1";
                  }
                },
                {
                  key: "Default",
                  get: function() {
                    return T;
                  }
                }
              ]),
              e
            );
          })();
        n(document).on(S.CLICK_DATA_API, D.DATA_SLIDE, O._dataApiClickHandler),
          n(window).on(S.LOAD_DATA_API, function() {
            for (
              var e = [].slice.call(document.querySelectorAll(D.DATA_RIDE)),
                t = 0,
                r = e.length;
              t < r;
              t++
            ) {
              var i = n(e[t]);
              O._jQueryInterface.call(i, i.data());
            }
          }),
          (n.fn[_] = O._jQueryInterface),
          (n.fn[_].Constructor = O),
          (n.fn[_].noConflict = function() {
            return (n.fn[_] = E), O._jQueryInterface;
          });
        var I = "collapse",
          N = n.fn[I],
          L = { toggle: !0, parent: "" },
          k = { toggle: "boolean", parent: "(string|element)" },
          P = {
            SHOW: "show.bs.collapse",
            SHOWN: "shown.bs.collapse",
            HIDE: "hide.bs.collapse",
            HIDDEN: "hidden.bs.collapse",
            CLICK_DATA_API: "click.bs.collapse.data-api"
          },
          H = {
            SHOW: "show",
            COLLAPSE: "collapse",
            COLLAPSING: "collapsing",
            COLLAPSED: "collapsed"
          },
          R = { WIDTH: "width", HEIGHT: "height" },
          j = {
            ACTIVES: ".show, .collapsing",
            DATA_TOGGLE: '[data-toggle="collapse"]'
          },
          W = (function() {
            function e(e, t) {
              (this._isTransitioning = !1),
                (this._element = e),
                (this._config = this._getConfig(t)),
                (this._triggerArray = [].slice.call(
                  document.querySelectorAll(
                    '[data-toggle="collapse"][href="#' +
                      e.id +
                      '"],[data-toggle="collapse"][data-target="#' +
                      e.id +
                      '"]'
                  )
                ));
              for (
                var n = [].slice.call(document.querySelectorAll(j.DATA_TOGGLE)),
                  r = 0,
                  i = n.length;
                r < i;
                r++
              ) {
                var o = n[r],
                  s = u.getSelectorFromElement(o),
                  a = [].slice
                    .call(document.querySelectorAll(s))
                    .filter(function(t) {
                      return t === e;
                    });
                null !== s &&
                  a.length > 0 &&
                  ((this._selector = s), this._triggerArray.push(o));
              }
              (this._parent = this._config.parent ? this._getParent() : null),
                this._config.parent ||
                  this._addAriaAndCollapsedClass(
                    this._element,
                    this._triggerArray
                  ),
                this._config.toggle && this.toggle();
            }
            var t = e.prototype;
            return (
              (t.toggle = function() {
                n(this._element).hasClass(H.SHOW) ? this.hide() : this.show();
              }),
              (t.show = function() {
                var t,
                  r,
                  i = this;
                if (
                  !(
                    this._isTransitioning ||
                    n(this._element).hasClass(H.SHOW) ||
                    (this._parent &&
                      0 ===
                        (t = [].slice
                          .call(this._parent.querySelectorAll(j.ACTIVES))
                          .filter(function(e) {
                            return "string" == typeof i._config.parent
                              ? e.getAttribute("data-parent") ===
                                  i._config.parent
                              : e.classList.contains(H.COLLAPSE);
                          })).length &&
                      (t = null),
                    t &&
                      (r = n(t)
                        .not(this._selector)
                        .data("bs.collapse")) &&
                      r._isTransitioning)
                  )
                ) {
                  var o = n.Event(P.SHOW);
                  if ((n(this._element).trigger(o), !o.isDefaultPrevented())) {
                    t &&
                      (e._jQueryInterface.call(
                        n(t).not(this._selector),
                        "hide"
                      ),
                      r || n(t).data("bs.collapse", null));
                    var s = this._getDimension();
                    n(this._element)
                      .removeClass(H.COLLAPSE)
                      .addClass(H.COLLAPSING),
                      (this._element.style[s] = 0),
                      this._triggerArray.length &&
                        n(this._triggerArray)
                          .removeClass(H.COLLAPSED)
                          .attr("aria-expanded", !0),
                      this.setTransitioning(!0);
                    var a = s[0].toUpperCase() + s.slice(1),
                      l = "scroll" + a,
                      c = u.getTransitionDurationFromElement(this._element);
                    n(this._element)
                      .one(u.TRANSITION_END, function() {
                        n(i._element)
                          .removeClass(H.COLLAPSING)
                          .addClass(H.COLLAPSE)
                          .addClass(H.SHOW),
                          (i._element.style[s] = ""),
                          i.setTransitioning(!1),
                          n(i._element).trigger(P.SHOWN);
                      })
                      .emulateTransitionEnd(c),
                      (this._element.style[s] = this._element[l] + "px");
                  }
                }
              }),
              (t.hide = function() {
                var e = this;
                if (
                  !this._isTransitioning &&
                  n(this._element).hasClass(H.SHOW)
                ) {
                  var t = n.Event(P.HIDE);
                  if ((n(this._element).trigger(t), !t.isDefaultPrevented())) {
                    var r = this._getDimension();
                    (this._element.style[r] =
                      this._element.getBoundingClientRect()[r] + "px"),
                      u.reflow(this._element),
                      n(this._element)
                        .addClass(H.COLLAPSING)
                        .removeClass(H.COLLAPSE)
                        .removeClass(H.SHOW);
                    var i = this._triggerArray.length;
                    if (i > 0)
                      for (var o = 0; o < i; o++) {
                        var s = this._triggerArray[o],
                          a = u.getSelectorFromElement(s);
                        if (null !== a) {
                          var l = n(
                            [].slice.call(document.querySelectorAll(a))
                          );
                          l.hasClass(H.SHOW) ||
                            n(s)
                              .addClass(H.COLLAPSED)
                              .attr("aria-expanded", !1);
                        }
                      }
                    this.setTransitioning(!0), (this._element.style[r] = "");
                    var c = u.getTransitionDurationFromElement(this._element);
                    n(this._element)
                      .one(u.TRANSITION_END, function() {
                        e.setTransitioning(!1),
                          n(e._element)
                            .removeClass(H.COLLAPSING)
                            .addClass(H.COLLAPSE)
                            .trigger(P.HIDDEN);
                      })
                      .emulateTransitionEnd(c);
                  }
                }
              }),
              (t.setTransitioning = function(e) {
                this._isTransitioning = e;
              }),
              (t.dispose = function() {
                n.removeData(this._element, "bs.collapse"),
                  (this._config = null),
                  (this._parent = null),
                  (this._element = null),
                  (this._triggerArray = null),
                  (this._isTransitioning = null);
              }),
              (t._getConfig = function(e) {
                return (
                  ((e = s({}, L, e)).toggle = Boolean(e.toggle)),
                  u.typeCheckConfig(I, e, k),
                  e
                );
              }),
              (t._getDimension = function() {
                var e = n(this._element).hasClass(R.WIDTH);
                return e ? R.WIDTH : R.HEIGHT;
              }),
              (t._getParent = function() {
                var t,
                  r = this;
                u.isElement(this._config.parent)
                  ? ((t = this._config.parent),
                    void 0 !== this._config.parent.jquery &&
                      (t = this._config.parent[0]))
                  : (t = document.querySelector(this._config.parent));
                var i =
                    '[data-toggle="collapse"][data-parent="' +
                    this._config.parent +
                    '"]',
                  o = [].slice.call(t.querySelectorAll(i));
                return (
                  n(o).each(function(t, n) {
                    r._addAriaAndCollapsedClass(e._getTargetFromElement(n), [
                      n
                    ]);
                  }),
                  t
                );
              }),
              (t._addAriaAndCollapsedClass = function(e, t) {
                var r = n(e).hasClass(H.SHOW);
                t.length &&
                  n(t)
                    .toggleClass(H.COLLAPSED, !r)
                    .attr("aria-expanded", r);
              }),
              (e._getTargetFromElement = function(e) {
                var t = u.getSelectorFromElement(e);
                return t ? document.querySelector(t) : null;
              }),
              (e._jQueryInterface = function(t) {
                return this.each(function() {
                  var r = n(this),
                    i = r.data("bs.collapse"),
                    o = s({}, L, r.data(), "object" == typeof t && t ? t : {});
                  if (
                    (!i && o.toggle && /show|hide/.test(t) && (o.toggle = !1),
                    i || ((i = new e(this, o)), r.data("bs.collapse", i)),
                    "string" == typeof t)
                  ) {
                    if (void 0 === i[t])
                      throw new TypeError('No method named "' + t + '"');
                    i[t]();
                  }
                });
              }),
              i(e, null, [
                {
                  key: "VERSION",
                  get: function() {
                    return "4.2.1";
                  }
                },
                {
                  key: "Default",
                  get: function() {
                    return L;
                  }
                }
              ]),
              e
            );
          })();
        n(document).on(P.CLICK_DATA_API, j.DATA_TOGGLE, function(e) {
          "A" === e.currentTarget.tagName && e.preventDefault();
          var t = n(this),
            r = u.getSelectorFromElement(this),
            i = [].slice.call(document.querySelectorAll(r));
          n(i).each(function() {
            var e = n(this),
              r = e.data("bs.collapse"),
              i = r ? "toggle" : t.data();
            W._jQueryInterface.call(e, i);
          });
        }),
          (n.fn[I] = W._jQueryInterface),
          (n.fn[I].Constructor = W),
          (n.fn[I].noConflict = function() {
            return (n.fn[I] = N), W._jQueryInterface;
          });
        var M = "dropdown",
          F = n.fn[M],
          q = new RegExp("38|40|27"),
          U = {
            HIDE: "hide.bs.dropdown",
            HIDDEN: "hidden.bs.dropdown",
            SHOW: "show.bs.dropdown",
            SHOWN: "shown.bs.dropdown",
            CLICK: "click.bs.dropdown",
            CLICK_DATA_API: "click.bs.dropdown.data-api",
            KEYDOWN_DATA_API: "keydown.bs.dropdown.data-api",
            KEYUP_DATA_API: "keyup.bs.dropdown.data-api"
          },
          B = {
            DISABLED: "disabled",
            SHOW: "show",
            DROPUP: "dropup",
            DROPRIGHT: "dropright",
            DROPLEFT: "dropleft",
            MENURIGHT: "dropdown-menu-right",
            MENULEFT: "dropdown-menu-left",
            POSITION_STATIC: "position-static"
          },
          V = {
            DATA_TOGGLE: '[data-toggle="dropdown"]',
            FORM_CHILD: ".dropdown form",
            MENU: ".dropdown-menu",
            NAVBAR_NAV: ".navbar-nav",
            VISIBLE_ITEMS:
              ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)"
          },
          G = {
            TOP: "top-start",
            TOPEND: "top-end",
            BOTTOM: "bottom-start",
            BOTTOMEND: "bottom-end",
            RIGHT: "right-start",
            RIGHTEND: "right-end",
            LEFT: "left-start",
            LEFTEND: "left-end"
          },
          $ = {
            offset: 0,
            flip: !0,
            boundary: "scrollParent",
            reference: "toggle",
            display: "dynamic"
          },
          K = {
            offset: "(number|string|function)",
            flip: "boolean",
            boundary: "(string|element)",
            reference: "(string|element)",
            display: "string"
          },
          Q = (function() {
            function e(e, t) {
              (this._element = e),
                (this._popper = null),
                (this._config = this._getConfig(t)),
                (this._menu = this._getMenuElement()),
                (this._inNavbar = this._detectNavbar()),
                this._addEventListeners();
            }
            var r = e.prototype;
            return (
              (r.toggle = function() {
                if (
                  !this._element.disabled &&
                  !n(this._element).hasClass(B.DISABLED)
                ) {
                  var r = e._getParentFromElement(this._element),
                    i = n(this._menu).hasClass(B.SHOW);
                  if ((e._clearMenus(), !i)) {
                    var o = { relatedTarget: this._element },
                      s = n.Event(U.SHOW, o);
                    if ((n(r).trigger(s), !s.isDefaultPrevented())) {
                      if (!this._inNavbar) {
                        if (void 0 === t)
                          throw new TypeError(
                            "Bootstrap's dropdowns require Popper.js (https://popper.js.org/)"
                          );
                        var a = this._element;
                        "parent" === this._config.reference
                          ? (a = r)
                          : u.isElement(this._config.reference) &&
                            ((a = this._config.reference),
                            void 0 !== this._config.reference.jquery &&
                              (a = this._config.reference[0])),
                          "scrollParent" !== this._config.boundary &&
                            n(r).addClass(B.POSITION_STATIC),
                          (this._popper = new t(
                            a,
                            this._menu,
                            this._getPopperConfig()
                          ));
                      }
                      "ontouchstart" in document.documentElement &&
                        0 === n(r).closest(V.NAVBAR_NAV).length &&
                        n(document.body)
                          .children()
                          .on("mouseover", null, n.noop),
                        this._element.focus(),
                        this._element.setAttribute("aria-expanded", !0),
                        n(this._menu).toggleClass(B.SHOW),
                        n(r)
                          .toggleClass(B.SHOW)
                          .trigger(n.Event(U.SHOWN, o));
                    }
                  }
                }
              }),
              (r.show = function() {
                if (
                  !(
                    this._element.disabled ||
                    n(this._element).hasClass(B.DISABLED) ||
                    n(this._menu).hasClass(B.SHOW)
                  )
                ) {
                  var t = { relatedTarget: this._element },
                    r = n.Event(U.SHOW, t),
                    i = e._getParentFromElement(this._element);
                  n(i).trigger(r),
                    r.isDefaultPrevented() ||
                      (n(this._menu).toggleClass(B.SHOW),
                      n(i)
                        .toggleClass(B.SHOW)
                        .trigger(n.Event(U.SHOWN, t)));
                }
              }),
              (r.hide = function() {
                if (
                  !this._element.disabled &&
                  !n(this._element).hasClass(B.DISABLED) &&
                  n(this._menu).hasClass(B.SHOW)
                ) {
                  var t = { relatedTarget: this._element },
                    r = n.Event(U.HIDE, t),
                    i = e._getParentFromElement(this._element);
                  n(i).trigger(r),
                    r.isDefaultPrevented() ||
                      (n(this._menu).toggleClass(B.SHOW),
                      n(i)
                        .toggleClass(B.SHOW)
                        .trigger(n.Event(U.HIDDEN, t)));
                }
              }),
              (r.dispose = function() {
                n.removeData(this._element, "bs.dropdown"),
                  n(this._element).off(".bs.dropdown"),
                  (this._element = null),
                  (this._menu = null),
                  null !== this._popper &&
                    (this._popper.destroy(), (this._popper = null));
              }),
              (r.update = function() {
                (this._inNavbar = this._detectNavbar()),
                  null !== this._popper && this._popper.scheduleUpdate();
              }),
              (r._addEventListeners = function() {
                var e = this;
                n(this._element).on(U.CLICK, function(t) {
                  t.preventDefault(), t.stopPropagation(), e.toggle();
                });
              }),
              (r._getConfig = function(e) {
                return (
                  (e = s(
                    {},
                    this.constructor.Default,
                    n(this._element).data(),
                    e
                  )),
                  u.typeCheckConfig(M, e, this.constructor.DefaultType),
                  e
                );
              }),
              (r._getMenuElement = function() {
                if (!this._menu) {
                  var t = e._getParentFromElement(this._element);
                  t && (this._menu = t.querySelector(V.MENU));
                }
                return this._menu;
              }),
              (r._getPlacement = function() {
                var e = n(this._element.parentNode),
                  t = G.BOTTOM;
                return (
                  e.hasClass(B.DROPUP)
                    ? ((t = G.TOP),
                      n(this._menu).hasClass(B.MENURIGHT) && (t = G.TOPEND))
                    : e.hasClass(B.DROPRIGHT)
                    ? (t = G.RIGHT)
                    : e.hasClass(B.DROPLEFT)
                    ? (t = G.LEFT)
                    : n(this._menu).hasClass(B.MENURIGHT) && (t = G.BOTTOMEND),
                  t
                );
              }),
              (r._detectNavbar = function() {
                return n(this._element).closest(".navbar").length > 0;
              }),
              (r._getPopperConfig = function() {
                var e = this,
                  t = {};
                "function" == typeof this._config.offset
                  ? (t.fn = function(t) {
                      return (
                        (t.offsets = s(
                          {},
                          t.offsets,
                          e._config.offset(t.offsets) || {}
                        )),
                        t
                      );
                    })
                  : (t.offset = this._config.offset);
                var n = {
                  placement: this._getPlacement(),
                  modifiers: {
                    offset: t,
                    flip: { enabled: this._config.flip },
                    preventOverflow: {
                      boundariesElement: this._config.boundary
                    }
                  }
                };
                return (
                  "static" === this._config.display &&
                    (n.modifiers.applyStyle = { enabled: !1 }),
                  n
                );
              }),
              (e._jQueryInterface = function(t) {
                return this.each(function() {
                  var r = n(this).data("bs.dropdown"),
                    i = "object" == typeof t ? t : null;
                  if (
                    (r ||
                      ((r = new e(this, i)), n(this).data("bs.dropdown", r)),
                    "string" == typeof t)
                  ) {
                    if (void 0 === r[t])
                      throw new TypeError('No method named "' + t + '"');
                    r[t]();
                  }
                });
              }),
              (e._clearMenus = function(t) {
                if (
                  !t ||
                  (3 !== t.which && ("keyup" !== t.type || 9 === t.which))
                )
                  for (
                    var r = [].slice.call(
                        document.querySelectorAll(V.DATA_TOGGLE)
                      ),
                      i = 0,
                      o = r.length;
                    i < o;
                    i++
                  ) {
                    var s = e._getParentFromElement(r[i]),
                      a = n(r[i]).data("bs.dropdown"),
                      l = { relatedTarget: r[i] };
                    if ((t && "click" === t.type && (l.clickEvent = t), a)) {
                      var u = a._menu;
                      if (
                        n(s).hasClass(B.SHOW) &&
                        !(
                          t &&
                          (("click" === t.type &&
                            /input|textarea/i.test(t.target.tagName)) ||
                            ("keyup" === t.type && 9 === t.which)) &&
                          n.contains(s, t.target)
                        )
                      ) {
                        var c = n.Event(U.HIDE, l);
                        n(s).trigger(c),
                          c.isDefaultPrevented() ||
                            ("ontouchstart" in document.documentElement &&
                              n(document.body)
                                .children()
                                .off("mouseover", null, n.noop),
                            r[i].setAttribute("aria-expanded", "false"),
                            n(u).removeClass(B.SHOW),
                            n(s)
                              .removeClass(B.SHOW)
                              .trigger(n.Event(U.HIDDEN, l)));
                      }
                    }
                  }
              }),
              (e._getParentFromElement = function(e) {
                var t,
                  n = u.getSelectorFromElement(e);
                return n && (t = document.querySelector(n)), t || e.parentNode;
              }),
              (e._dataApiKeydownHandler = function(t) {
                if (
                  (/input|textarea/i.test(t.target.tagName)
                    ? !(
                        32 === t.which ||
                        (27 !== t.which &&
                          ((40 !== t.which && 38 !== t.which) ||
                            n(t.target).closest(V.MENU).length))
                      )
                    : q.test(t.which)) &&
                  (t.preventDefault(),
                  t.stopPropagation(),
                  !this.disabled && !n(this).hasClass(B.DISABLED))
                ) {
                  var r = e._getParentFromElement(this),
                    i = n(r).hasClass(B.SHOW);
                  if (i && (!i || (27 !== t.which && 32 !== t.which))) {
                    var o = [].slice.call(r.querySelectorAll(V.VISIBLE_ITEMS));
                    if (0 !== o.length) {
                      var s = o.indexOf(t.target);
                      38 === t.which && s > 0 && s--,
                        40 === t.which && s < o.length - 1 && s++,
                        s < 0 && (s = 0),
                        o[s].focus();
                    }
                  } else {
                    if (27 === t.which) {
                      var a = r.querySelector(V.DATA_TOGGLE);
                      n(a).trigger("focus");
                    }
                    n(this).trigger("click");
                  }
                }
              }),
              i(e, null, [
                {
                  key: "VERSION",
                  get: function() {
                    return "4.2.1";
                  }
                },
                {
                  key: "Default",
                  get: function() {
                    return $;
                  }
                },
                {
                  key: "DefaultType",
                  get: function() {
                    return K;
                  }
                }
              ]),
              e
            );
          })();
        n(document)
          .on(U.KEYDOWN_DATA_API, V.DATA_TOGGLE, Q._dataApiKeydownHandler)
          .on(U.KEYDOWN_DATA_API, V.MENU, Q._dataApiKeydownHandler)
          .on(U.CLICK_DATA_API + " " + U.KEYUP_DATA_API, Q._clearMenus)
          .on(U.CLICK_DATA_API, V.DATA_TOGGLE, function(e) {
            e.preventDefault(),
              e.stopPropagation(),
              Q._jQueryInterface.call(n(this), "toggle");
          })
          .on(U.CLICK_DATA_API, V.FORM_CHILD, function(e) {
            e.stopPropagation();
          }),
          (n.fn[M] = Q._jQueryInterface),
          (n.fn[M].Constructor = Q),
          (n.fn[M].noConflict = function() {
            return (n.fn[M] = F), Q._jQueryInterface;
          });
        var X = n.fn.modal,
          Y = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
          z = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            focus: "boolean",
            show: "boolean"
          },
          J = {
            HIDE: "hide.bs.modal",
            HIDDEN: "hidden.bs.modal",
            SHOW: "show.bs.modal",
            SHOWN: "shown.bs.modal",
            FOCUSIN: "focusin.bs.modal",
            RESIZE: "resize.bs.modal",
            CLICK_DISMISS: "click.dismiss.bs.modal",
            KEYDOWN_DISMISS: "keydown.dismiss.bs.modal",
            MOUSEUP_DISMISS: "mouseup.dismiss.bs.modal",
            MOUSEDOWN_DISMISS: "mousedown.dismiss.bs.modal",
            CLICK_DATA_API: "click.bs.modal.data-api"
          },
          Z = {
            SCROLLBAR_MEASURER: "modal-scrollbar-measure",
            BACKDROP: "modal-backdrop",
            OPEN: "modal-open",
            FADE: "fade",
            SHOW: "show"
          },
          ee = {
            DIALOG: ".modal-dialog",
            DATA_TOGGLE: '[data-toggle="modal"]',
            DATA_DISMISS: '[data-dismiss="modal"]',
            FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
            STICKY_CONTENT: ".sticky-top"
          },
          te = (function() {
            function e(e, t) {
              (this._config = this._getConfig(t)),
                (this._element = e),
                (this._dialog = e.querySelector(ee.DIALOG)),
                (this._backdrop = null),
                (this._isShown = !1),
                (this._isBodyOverflowing = !1),
                (this._ignoreBackdropClick = !1),
                (this._isTransitioning = !1),
                (this._scrollbarWidth = 0);
            }
            var t = e.prototype;
            return (
              (t.toggle = function(e) {
                return this._isShown ? this.hide() : this.show(e);
              }),
              (t.show = function(e) {
                var t = this;
                if (!this._isShown && !this._isTransitioning) {
                  n(this._element).hasClass(Z.FADE) &&
                    (this._isTransitioning = !0);
                  var r = n.Event(J.SHOW, { relatedTarget: e });
                  n(this._element).trigger(r),
                    this._isShown ||
                      r.isDefaultPrevented() ||
                      ((this._isShown = !0),
                      this._checkScrollbar(),
                      this._setScrollbar(),
                      this._adjustDialog(),
                      this._setEscapeEvent(),
                      this._setResizeEvent(),
                      n(this._element).on(
                        J.CLICK_DISMISS,
                        ee.DATA_DISMISS,
                        function(e) {
                          return t.hide(e);
                        }
                      ),
                      n(this._dialog).on(J.MOUSEDOWN_DISMISS, function() {
                        n(t._element).one(J.MOUSEUP_DISMISS, function(e) {
                          n(e.target).is(t._element) &&
                            (t._ignoreBackdropClick = !0);
                        });
                      }),
                      this._showBackdrop(function() {
                        return t._showElement(e);
                      }));
                }
              }),
              (t.hide = function(e) {
                var t = this;
                if (
                  (e && e.preventDefault(),
                  this._isShown && !this._isTransitioning)
                ) {
                  var r = n.Event(J.HIDE);
                  if (
                    (n(this._element).trigger(r),
                    this._isShown && !r.isDefaultPrevented())
                  ) {
                    this._isShown = !1;
                    var i = n(this._element).hasClass(Z.FADE);
                    if (
                      (i && (this._isTransitioning = !0),
                      this._setEscapeEvent(),
                      this._setResizeEvent(),
                      n(document).off(J.FOCUSIN),
                      n(this._element).removeClass(Z.SHOW),
                      n(this._element).off(J.CLICK_DISMISS),
                      n(this._dialog).off(J.MOUSEDOWN_DISMISS),
                      i)
                    ) {
                      var o = u.getTransitionDurationFromElement(this._element);
                      n(this._element)
                        .one(u.TRANSITION_END, function(e) {
                          return t._hideModal(e);
                        })
                        .emulateTransitionEnd(o);
                    } else this._hideModal();
                  }
                }
              }),
              (t.dispose = function() {
                [window, this._element, this._dialog].forEach(function(e) {
                  return n(e).off(".bs.modal");
                }),
                  n(document).off(J.FOCUSIN),
                  n.removeData(this._element, "bs.modal"),
                  (this._config = null),
                  (this._element = null),
                  (this._dialog = null),
                  (this._backdrop = null),
                  (this._isShown = null),
                  (this._isBodyOverflowing = null),
                  (this._ignoreBackdropClick = null),
                  (this._isTransitioning = null),
                  (this._scrollbarWidth = null);
              }),
              (t.handleUpdate = function() {
                this._adjustDialog();
              }),
              (t._getConfig = function(e) {
                return (e = s({}, Y, e)), u.typeCheckConfig("modal", e, z), e;
              }),
              (t._showElement = function(e) {
                var t = this,
                  r = n(this._element).hasClass(Z.FADE);
                (this._element.parentNode &&
                  this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
                  document.body.appendChild(this._element),
                  (this._element.style.display = "block"),
                  this._element.removeAttribute("aria-hidden"),
                  this._element.setAttribute("aria-modal", !0),
                  (this._element.scrollTop = 0),
                  r && u.reflow(this._element),
                  n(this._element).addClass(Z.SHOW),
                  this._config.focus && this._enforceFocus();
                var i = n.Event(J.SHOWN, { relatedTarget: e }),
                  o = function() {
                    t._config.focus && t._element.focus(),
                      (t._isTransitioning = !1),
                      n(t._element).trigger(i);
                  };
                if (r) {
                  var s = u.getTransitionDurationFromElement(this._dialog);
                  n(this._dialog)
                    .one(u.TRANSITION_END, o)
                    .emulateTransitionEnd(s);
                } else o();
              }),
              (t._enforceFocus = function() {
                var e = this;
                n(document)
                  .off(J.FOCUSIN)
                  .on(J.FOCUSIN, function(t) {
                    document !== t.target &&
                      e._element !== t.target &&
                      0 === n(e._element).has(t.target).length &&
                      e._element.focus();
                  });
              }),
              (t._setEscapeEvent = function() {
                var e = this;
                this._isShown && this._config.keyboard
                  ? n(this._element).on(J.KEYDOWN_DISMISS, function(t) {
                      27 === t.which && (t.preventDefault(), e.hide());
                    })
                  : this._isShown || n(this._element).off(J.KEYDOWN_DISMISS);
              }),
              (t._setResizeEvent = function() {
                var e = this;
                this._isShown
                  ? n(window).on(J.RESIZE, function(t) {
                      return e.handleUpdate(t);
                    })
                  : n(window).off(J.RESIZE);
              }),
              (t._hideModal = function() {
                var e = this;
                (this._element.style.display = "none"),
                  this._element.setAttribute("aria-hidden", !0),
                  this._element.removeAttribute("aria-modal"),
                  (this._isTransitioning = !1),
                  this._showBackdrop(function() {
                    n(document.body).removeClass(Z.OPEN),
                      e._resetAdjustments(),
                      e._resetScrollbar(),
                      n(e._element).trigger(J.HIDDEN);
                  });
              }),
              (t._removeBackdrop = function() {
                this._backdrop &&
                  (n(this._backdrop).remove(), (this._backdrop = null));
              }),
              (t._showBackdrop = function(e) {
                var t = this,
                  r = n(this._element).hasClass(Z.FADE) ? Z.FADE : "";
                if (this._isShown && this._config.backdrop) {
                  if (
                    ((this._backdrop = document.createElement("div")),
                    (this._backdrop.className = Z.BACKDROP),
                    r && this._backdrop.classList.add(r),
                    n(this._backdrop).appendTo(document.body),
                    n(this._element).on(J.CLICK_DISMISS, function(e) {
                      t._ignoreBackdropClick
                        ? (t._ignoreBackdropClick = !1)
                        : e.target === e.currentTarget &&
                          ("static" === t._config.backdrop
                            ? t._element.focus()
                            : t.hide());
                    }),
                    r && u.reflow(this._backdrop),
                    n(this._backdrop).addClass(Z.SHOW),
                    !e)
                  )
                    return;
                  if (!r) return void e();
                  var i = u.getTransitionDurationFromElement(this._backdrop);
                  n(this._backdrop)
                    .one(u.TRANSITION_END, e)
                    .emulateTransitionEnd(i);
                } else if (!this._isShown && this._backdrop) {
                  n(this._backdrop).removeClass(Z.SHOW);
                  var o = function() {
                    t._removeBackdrop(), e && e();
                  };
                  if (n(this._element).hasClass(Z.FADE)) {
                    var s = u.getTransitionDurationFromElement(this._backdrop);
                    n(this._backdrop)
                      .one(u.TRANSITION_END, o)
                      .emulateTransitionEnd(s);
                  } else o();
                } else e && e();
              }),
              (t._adjustDialog = function() {
                var e =
                  this._element.scrollHeight >
                  document.documentElement.clientHeight;
                !this._isBodyOverflowing &&
                  e &&
                  (this._element.style.paddingLeft =
                    this._scrollbarWidth + "px"),
                  this._isBodyOverflowing &&
                    !e &&
                    (this._element.style.paddingRight =
                      this._scrollbarWidth + "px");
              }),
              (t._resetAdjustments = function() {
                (this._element.style.paddingLeft = ""),
                  (this._element.style.paddingRight = "");
              }),
              (t._checkScrollbar = function() {
                var e = document.body.getBoundingClientRect();
                (this._isBodyOverflowing =
                  e.left + e.right < window.innerWidth),
                  (this._scrollbarWidth = this._getScrollbarWidth());
              }),
              (t._setScrollbar = function() {
                var e = this;
                if (this._isBodyOverflowing) {
                  var t = [].slice.call(
                      document.querySelectorAll(ee.FIXED_CONTENT)
                    ),
                    r = [].slice.call(
                      document.querySelectorAll(ee.STICKY_CONTENT)
                    );
                  n(t).each(function(t, r) {
                    var i = r.style.paddingRight,
                      o = n(r).css("padding-right");
                    n(r)
                      .data("padding-right", i)
                      .css(
                        "padding-right",
                        parseFloat(o) + e._scrollbarWidth + "px"
                      );
                  }),
                    n(r).each(function(t, r) {
                      var i = r.style.marginRight,
                        o = n(r).css("margin-right");
                      n(r)
                        .data("margin-right", i)
                        .css(
                          "margin-right",
                          parseFloat(o) - e._scrollbarWidth + "px"
                        );
                    });
                  var i = document.body.style.paddingRight,
                    o = n(document.body).css("padding-right");
                  n(document.body)
                    .data("padding-right", i)
                    .css(
                      "padding-right",
                      parseFloat(o) + this._scrollbarWidth + "px"
                    );
                }
                n(document.body).addClass(Z.OPEN);
              }),
              (t._resetScrollbar = function() {
                var e = [].slice.call(
                  document.querySelectorAll(ee.FIXED_CONTENT)
                );
                n(e).each(function(e, t) {
                  var r = n(t).data("padding-right");
                  n(t).removeData("padding-right"),
                    (t.style.paddingRight = r || "");
                });
                var t = [].slice.call(
                  document.querySelectorAll("" + ee.STICKY_CONTENT)
                );
                n(t).each(function(e, t) {
                  var r = n(t).data("margin-right");
                  void 0 !== r &&
                    n(t)
                      .css("margin-right", r)
                      .removeData("margin-right");
                });
                var r = n(document.body).data("padding-right");
                n(document.body).removeData("padding-right"),
                  (document.body.style.paddingRight = r || "");
              }),
              (t._getScrollbarWidth = function() {
                var e = document.createElement("div");
                (e.className = Z.SCROLLBAR_MEASURER),
                  document.body.appendChild(e);
                var t = e.getBoundingClientRect().width - e.clientWidth;
                return document.body.removeChild(e), t;
              }),
              (e._jQueryInterface = function(t, r) {
                return this.each(function() {
                  var i = n(this).data("bs.modal"),
                    o = s(
                      {},
                      Y,
                      n(this).data(),
                      "object" == typeof t && t ? t : {}
                    );
                  if (
                    (i || ((i = new e(this, o)), n(this).data("bs.modal", i)),
                    "string" == typeof t)
                  ) {
                    if (void 0 === i[t])
                      throw new TypeError('No method named "' + t + '"');
                    i[t](r);
                  } else o.show && i.show(r);
                });
              }),
              i(e, null, [
                {
                  key: "VERSION",
                  get: function() {
                    return "4.2.1";
                  }
                },
                {
                  key: "Default",
                  get: function() {
                    return Y;
                  }
                }
              ]),
              e
            );
          })();
        n(document).on(J.CLICK_DATA_API, ee.DATA_TOGGLE, function(e) {
          var t,
            r = this,
            i = u.getSelectorFromElement(this);
          i && (t = document.querySelector(i));
          var o = n(t).data("bs.modal")
            ? "toggle"
            : s({}, n(t).data(), n(this).data());
          ("A" !== this.tagName && "AREA" !== this.tagName) ||
            e.preventDefault();
          var a = n(t).one(J.SHOW, function(e) {
            e.isDefaultPrevented() ||
              a.one(J.HIDDEN, function() {
                n(r).is(":visible") && r.focus();
              });
          });
          te._jQueryInterface.call(n(t), o, this);
        }),
          (n.fn.modal = te._jQueryInterface),
          (n.fn.modal.Constructor = te),
          (n.fn.modal.noConflict = function() {
            return (n.fn.modal = X), te._jQueryInterface;
          });
        var ne = "tooltip",
          re = n.fn.tooltip,
          ie = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
          oe = {
            animation: "boolean",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
            delay: "(number|object)",
            html: "boolean",
            selector: "(string|boolean)",
            placement: "(string|function)",
            offset: "(number|string)",
            container: "(string|element|boolean)",
            fallbackPlacement: "(string|array)",
            boundary: "(string|element)"
          },
          se = {
            AUTO: "auto",
            TOP: "top",
            RIGHT: "right",
            BOTTOM: "bottom",
            LEFT: "left"
          },
          ae = {
            animation: !0,
            template:
              '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            selector: !1,
            placement: "top",
            offset: 0,
            container: !1,
            fallbackPlacement: "flip",
            boundary: "scrollParent"
          },
          le = { SHOW: "show", OUT: "out" },
          ue = {
            HIDE: "hide.bs.tooltip",
            HIDDEN: "hidden.bs.tooltip",
            SHOW: "show.bs.tooltip",
            SHOWN: "shown.bs.tooltip",
            INSERTED: "inserted.bs.tooltip",
            CLICK: "click.bs.tooltip",
            FOCUSIN: "focusin.bs.tooltip",
            FOCUSOUT: "focusout.bs.tooltip",
            MOUSEENTER: "mouseenter.bs.tooltip",
            MOUSELEAVE: "mouseleave.bs.tooltip"
          },
          ce = { FADE: "fade", SHOW: "show" },
          fe = {
            TOOLTIP: ".tooltip",
            TOOLTIP_INNER: ".tooltip-inner",
            ARROW: ".arrow"
          },
          de = {
            HOVER: "hover",
            FOCUS: "focus",
            CLICK: "click",
            MANUAL: "manual"
          },
          he = (function() {
            function e(e, n) {
              if (void 0 === t)
                throw new TypeError(
                  "Bootstrap's tooltips require Popper.js (https://popper.js.org/)"
                );
              (this._isEnabled = !0),
                (this._timeout = 0),
                (this._hoverState = ""),
                (this._activeTrigger = {}),
                (this._popper = null),
                (this.element = e),
                (this.config = this._getConfig(n)),
                (this.tip = null),
                this._setListeners();
            }
            var r = e.prototype;
            return (
              (r.enable = function() {
                this._isEnabled = !0;
              }),
              (r.disable = function() {
                this._isEnabled = !1;
              }),
              (r.toggleEnabled = function() {
                this._isEnabled = !this._isEnabled;
              }),
              (r.toggle = function(e) {
                if (this._isEnabled)
                  if (e) {
                    var t = this.constructor.DATA_KEY,
                      r = n(e.currentTarget).data(t);
                    r ||
                      ((r = new this.constructor(
                        e.currentTarget,
                        this._getDelegateConfig()
                      )),
                      n(e.currentTarget).data(t, r)),
                      (r._activeTrigger.click = !r._activeTrigger.click),
                      r._isWithActiveTrigger()
                        ? r._enter(null, r)
                        : r._leave(null, r);
                  } else {
                    if (n(this.getTipElement()).hasClass(ce.SHOW))
                      return void this._leave(null, this);
                    this._enter(null, this);
                  }
              }),
              (r.dispose = function() {
                clearTimeout(this._timeout),
                  n.removeData(this.element, this.constructor.DATA_KEY),
                  n(this.element).off(this.constructor.EVENT_KEY),
                  n(this.element)
                    .closest(".modal")
                    .off("hide.bs.modal"),
                  this.tip && n(this.tip).remove(),
                  (this._isEnabled = null),
                  (this._timeout = null),
                  (this._hoverState = null),
                  (this._activeTrigger = null),
                  null !== this._popper && this._popper.destroy(),
                  (this._popper = null),
                  (this.element = null),
                  (this.config = null),
                  (this.tip = null);
              }),
              (r.show = function() {
                var e = this;
                if ("none" === n(this.element).css("display"))
                  throw new Error("Please use show on visible elements");
                var r = n.Event(this.constructor.Event.SHOW);
                if (this.isWithContent() && this._isEnabled) {
                  n(this.element).trigger(r);
                  var i = u.findShadowRoot(this.element),
                    o = n.contains(
                      null !== i
                        ? i
                        : this.element.ownerDocument.documentElement,
                      this.element
                    );
                  if (r.isDefaultPrevented() || !o) return;
                  var s = this.getTipElement(),
                    a = u.getUID(this.constructor.NAME);
                  s.setAttribute("id", a),
                    this.element.setAttribute("aria-describedby", a),
                    this.setContent(),
                    this.config.animation && n(s).addClass(ce.FADE);
                  var l =
                      "function" == typeof this.config.placement
                        ? this.config.placement.call(this, s, this.element)
                        : this.config.placement,
                    c = this._getAttachment(l);
                  this.addAttachmentClass(c);
                  var f = this._getContainer();
                  n(s).data(this.constructor.DATA_KEY, this),
                    n.contains(
                      this.element.ownerDocument.documentElement,
                      this.tip
                    ) || n(s).appendTo(f),
                    n(this.element).trigger(this.constructor.Event.INSERTED),
                    (this._popper = new t(this.element, s, {
                      placement: c,
                      modifiers: {
                        offset: { offset: this.config.offset },
                        flip: { behavior: this.config.fallbackPlacement },
                        arrow: { element: fe.ARROW },
                        preventOverflow: {
                          boundariesElement: this.config.boundary
                        }
                      },
                      onCreate: function(t) {
                        t.originalPlacement !== t.placement &&
                          e._handlePopperPlacementChange(t);
                      },
                      onUpdate: function(t) {
                        return e._handlePopperPlacementChange(t);
                      }
                    })),
                    n(s).addClass(ce.SHOW),
                    "ontouchstart" in document.documentElement &&
                      n(document.body)
                        .children()
                        .on("mouseover", null, n.noop);
                  var d = function() {
                    e.config.animation && e._fixTransition();
                    var t = e._hoverState;
                    (e._hoverState = null),
                      n(e.element).trigger(e.constructor.Event.SHOWN),
                      t === le.OUT && e._leave(null, e);
                  };
                  if (n(this.tip).hasClass(ce.FADE)) {
                    var h = u.getTransitionDurationFromElement(this.tip);
                    n(this.tip)
                      .one(u.TRANSITION_END, d)
                      .emulateTransitionEnd(h);
                  } else d();
                }
              }),
              (r.hide = function(e) {
                var t = this,
                  r = this.getTipElement(),
                  i = n.Event(this.constructor.Event.HIDE),
                  o = function() {
                    t._hoverState !== le.SHOW &&
                      r.parentNode &&
                      r.parentNode.removeChild(r),
                      t._cleanTipClass(),
                      t.element.removeAttribute("aria-describedby"),
                      n(t.element).trigger(t.constructor.Event.HIDDEN),
                      null !== t._popper && t._popper.destroy(),
                      e && e();
                  };
                if ((n(this.element).trigger(i), !i.isDefaultPrevented())) {
                  if (
                    (n(r).removeClass(ce.SHOW),
                    "ontouchstart" in document.documentElement &&
                      n(document.body)
                        .children()
                        .off("mouseover", null, n.noop),
                    (this._activeTrigger[de.CLICK] = !1),
                    (this._activeTrigger[de.FOCUS] = !1),
                    (this._activeTrigger[de.HOVER] = !1),
                    n(this.tip).hasClass(ce.FADE))
                  ) {
                    var s = u.getTransitionDurationFromElement(r);
                    n(r)
                      .one(u.TRANSITION_END, o)
                      .emulateTransitionEnd(s);
                  } else o();
                  this._hoverState = "";
                }
              }),
              (r.update = function() {
                null !== this._popper && this._popper.scheduleUpdate();
              }),
              (r.isWithContent = function() {
                return Boolean(this.getTitle());
              }),
              (r.addAttachmentClass = function(e) {
                n(this.getTipElement()).addClass("bs-tooltip-" + e);
              }),
              (r.getTipElement = function() {
                return (
                  (this.tip = this.tip || n(this.config.template)[0]), this.tip
                );
              }),
              (r.setContent = function() {
                var e = this.getTipElement();
                this.setElementContent(
                  n(e.querySelectorAll(fe.TOOLTIP_INNER)),
                  this.getTitle()
                ),
                  n(e).removeClass(ce.FADE + " " + ce.SHOW);
              }),
              (r.setElementContent = function(e, t) {
                var r = this.config.html;
                "object" == typeof t && (t.nodeType || t.jquery)
                  ? r
                    ? n(t)
                        .parent()
                        .is(e) || e.empty().append(t)
                    : e.text(n(t).text())
                  : e[r ? "html" : "text"](t);
              }),
              (r.getTitle = function() {
                var e = this.element.getAttribute("data-original-title");
                return (
                  e ||
                    (e =
                      "function" == typeof this.config.title
                        ? this.config.title.call(this.element)
                        : this.config.title),
                  e
                );
              }),
              (r._getContainer = function() {
                return !1 === this.config.container
                  ? document.body
                  : u.isElement(this.config.container)
                  ? n(this.config.container)
                  : n(document).find(this.config.container);
              }),
              (r._getAttachment = function(e) {
                return se[e.toUpperCase()];
              }),
              (r._setListeners = function() {
                var e = this,
                  t = this.config.trigger.split(" ");
                t.forEach(function(t) {
                  if ("click" === t)
                    n(e.element).on(
                      e.constructor.Event.CLICK,
                      e.config.selector,
                      function(t) {
                        return e.toggle(t);
                      }
                    );
                  else if (t !== de.MANUAL) {
                    var r =
                        t === de.HOVER
                          ? e.constructor.Event.MOUSEENTER
                          : e.constructor.Event.FOCUSIN,
                      i =
                        t === de.HOVER
                          ? e.constructor.Event.MOUSELEAVE
                          : e.constructor.Event.FOCUSOUT;
                    n(e.element)
                      .on(r, e.config.selector, function(t) {
                        return e._enter(t);
                      })
                      .on(i, e.config.selector, function(t) {
                        return e._leave(t);
                      });
                  }
                }),
                  n(this.element)
                    .closest(".modal")
                    .on("hide.bs.modal", function() {
                      e.element && e.hide();
                    }),
                  this.config.selector
                    ? (this.config = s({}, this.config, {
                        trigger: "manual",
                        selector: ""
                      }))
                    : this._fixTitle();
              }),
              (r._fixTitle = function() {
                var e = typeof this.element.getAttribute("data-original-title");
                (this.element.getAttribute("title") || "string" !== e) &&
                  (this.element.setAttribute(
                    "data-original-title",
                    this.element.getAttribute("title") || ""
                  ),
                  this.element.setAttribute("title", ""));
              }),
              (r._enter = function(e, t) {
                var r = this.constructor.DATA_KEY;
                (t = t || n(e.currentTarget).data(r)) ||
                  ((t = new this.constructor(
                    e.currentTarget,
                    this._getDelegateConfig()
                  )),
                  n(e.currentTarget).data(r, t)),
                  e &&
                    (t._activeTrigger[
                      "focusin" === e.type ? de.FOCUS : de.HOVER
                    ] = !0),
                  n(t.getTipElement()).hasClass(ce.SHOW) ||
                  t._hoverState === le.SHOW
                    ? (t._hoverState = le.SHOW)
                    : (clearTimeout(t._timeout),
                      (t._hoverState = le.SHOW),
                      t.config.delay && t.config.delay.show
                        ? (t._timeout = setTimeout(function() {
                            t._hoverState === le.SHOW && t.show();
                          }, t.config.delay.show))
                        : t.show());
              }),
              (r._leave = function(e, t) {
                var r = this.constructor.DATA_KEY;
                (t = t || n(e.currentTarget).data(r)) ||
                  ((t = new this.constructor(
                    e.currentTarget,
                    this._getDelegateConfig()
                  )),
                  n(e.currentTarget).data(r, t)),
                  e &&
                    (t._activeTrigger[
                      "focusout" === e.type ? de.FOCUS : de.HOVER
                    ] = !1),
                  t._isWithActiveTrigger() ||
                    (clearTimeout(t._timeout),
                    (t._hoverState = le.OUT),
                    t.config.delay && t.config.delay.hide
                      ? (t._timeout = setTimeout(function() {
                          t._hoverState === le.OUT && t.hide();
                        }, t.config.delay.hide))
                      : t.hide());
              }),
              (r._isWithActiveTrigger = function() {
                for (var e in this._activeTrigger)
                  if (this._activeTrigger[e]) return !0;
                return !1;
              }),
              (r._getConfig = function(e) {
                return (
                  "number" ==
                    typeof (e = s(
                      {},
                      this.constructor.Default,
                      n(this.element).data(),
                      "object" == typeof e && e ? e : {}
                    )).delay && (e.delay = { show: e.delay, hide: e.delay }),
                  "number" == typeof e.title && (e.title = e.title.toString()),
                  "number" == typeof e.content &&
                    (e.content = e.content.toString()),
                  u.typeCheckConfig(ne, e, this.constructor.DefaultType),
                  e
                );
              }),
              (r._getDelegateConfig = function() {
                var e = {};
                if (this.config)
                  for (var t in this.config)
                    this.constructor.Default[t] !== this.config[t] &&
                      (e[t] = this.config[t]);
                return e;
              }),
              (r._cleanTipClass = function() {
                var e = n(this.getTipElement()),
                  t = e.attr("class").match(ie);
                null !== t && t.length && e.removeClass(t.join(""));
              }),
              (r._handlePopperPlacementChange = function(e) {
                var t = e.instance;
                (this.tip = t.popper),
                  this._cleanTipClass(),
                  this.addAttachmentClass(this._getAttachment(e.placement));
              }),
              (r._fixTransition = function() {
                var e = this.getTipElement(),
                  t = this.config.animation;
                null === e.getAttribute("x-placement") &&
                  (n(e).removeClass(ce.FADE),
                  (this.config.animation = !1),
                  this.hide(),
                  this.show(),
                  (this.config.animation = t));
              }),
              (e._jQueryInterface = function(t) {
                return this.each(function() {
                  var r = n(this).data("bs.tooltip"),
                    i = "object" == typeof t && t;
                  if (
                    (r || !/dispose|hide/.test(t)) &&
                    (r || ((r = new e(this, i)), n(this).data("bs.tooltip", r)),
                    "string" == typeof t)
                  ) {
                    if (void 0 === r[t])
                      throw new TypeError('No method named "' + t + '"');
                    r[t]();
                  }
                });
              }),
              i(e, null, [
                {
                  key: "VERSION",
                  get: function() {
                    return "4.2.1";
                  }
                },
                {
                  key: "Default",
                  get: function() {
                    return ae;
                  }
                },
                {
                  key: "NAME",
                  get: function() {
                    return ne;
                  }
                },
                {
                  key: "DATA_KEY",
                  get: function() {
                    return "bs.tooltip";
                  }
                },
                {
                  key: "Event",
                  get: function() {
                    return ue;
                  }
                },
                {
                  key: "EVENT_KEY",
                  get: function() {
                    return ".bs.tooltip";
                  }
                },
                {
                  key: "DefaultType",
                  get: function() {
                    return oe;
                  }
                }
              ]),
              e
            );
          })();
        (n.fn.tooltip = he._jQueryInterface),
          (n.fn.tooltip.Constructor = he),
          (n.fn.tooltip.noConflict = function() {
            return (n.fn.tooltip = re), he._jQueryInterface;
          });
        var pe = "popover",
          ge = n.fn.popover,
          me = new RegExp("(^|\\s)bs-popover\\S+", "g"),
          ve = s({}, he.Default, {
            placement: "right",
            trigger: "click",
            content: "",
            template:
              '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
          }),
          ye = s({}, he.DefaultType, { content: "(string|element|function)" }),
          _e = { FADE: "fade", SHOW: "show" },
          be = { TITLE: ".popover-header", CONTENT: ".popover-body" },
          Ee = {
            HIDE: "hide.bs.popover",
            HIDDEN: "hidden.bs.popover",
            SHOW: "show.bs.popover",
            SHOWN: "shown.bs.popover",
            INSERTED: "inserted.bs.popover",
            CLICK: "click.bs.popover",
            FOCUSIN: "focusin.bs.popover",
            FOCUSOUT: "focusout.bs.popover",
            MOUSEENTER: "mouseenter.bs.popover",
            MOUSELEAVE: "mouseleave.bs.popover"
          },
          Te = (function(e) {
            var t, r;
            function o() {
              return e.apply(this, arguments) || this;
            }
            (r = e),
              ((t = o).prototype = Object.create(r.prototype)),
              (t.prototype.constructor = t),
              (t.__proto__ = r);
            var s = o.prototype;
            return (
              (s.isWithContent = function() {
                return this.getTitle() || this._getContent();
              }),
              (s.addAttachmentClass = function(e) {
                n(this.getTipElement()).addClass("bs-popover-" + e);
              }),
              (s.getTipElement = function() {
                return (
                  (this.tip = this.tip || n(this.config.template)[0]), this.tip
                );
              }),
              (s.setContent = function() {
                var e = n(this.getTipElement());
                this.setElementContent(e.find(be.TITLE), this.getTitle());
                var t = this._getContent();
                "function" == typeof t && (t = t.call(this.element)),
                  this.setElementContent(e.find(be.CONTENT), t),
                  e.removeClass(_e.FADE + " " + _e.SHOW);
              }),
              (s._getContent = function() {
                return (
                  this.element.getAttribute("data-content") ||
                  this.config.content
                );
              }),
              (s._cleanTipClass = function() {
                var e = n(this.getTipElement()),
                  t = e.attr("class").match(me);
                null !== t && t.length > 0 && e.removeClass(t.join(""));
              }),
              (o._jQueryInterface = function(e) {
                return this.each(function() {
                  var t = n(this).data("bs.popover"),
                    r = "object" == typeof e ? e : null;
                  if (
                    (t || !/dispose|hide/.test(e)) &&
                    (t || ((t = new o(this, r)), n(this).data("bs.popover", t)),
                    "string" == typeof e)
                  ) {
                    if (void 0 === t[e])
                      throw new TypeError('No method named "' + e + '"');
                    t[e]();
                  }
                });
              }),
              i(o, null, [
                {
                  key: "VERSION",
                  get: function() {
                    return "4.2.1";
                  }
                },
                {
                  key: "Default",
                  get: function() {
                    return ve;
                  }
                },
                {
                  key: "NAME",
                  get: function() {
                    return pe;
                  }
                },
                {
                  key: "DATA_KEY",
                  get: function() {
                    return "bs.popover";
                  }
                },
                {
                  key: "Event",
                  get: function() {
                    return Ee;
                  }
                },
                {
                  key: "EVENT_KEY",
                  get: function() {
                    return ".bs.popover";
                  }
                },
                {
                  key: "DefaultType",
                  get: function() {
                    return ye;
                  }
                }
              ]),
              o
            );
          })(he);
        (n.fn.popover = Te._jQueryInterface),
          (n.fn.popover.Constructor = Te),
          (n.fn.popover.noConflict = function() {
            return (n.fn.popover = ge), Te._jQueryInterface;
          });
        var we = "scrollspy",
          Ce = n.fn[we],
          Se = { offset: 10, method: "auto", target: "" },
          Ae = {
            offset: "number",
            method: "string",
            target: "(string|element)"
          },
          De = {
            ACTIVATE: "activate.bs.scrollspy",
            SCROLL: "scroll.bs.scrollspy",
            LOAD_DATA_API: "load.bs.scrollspy.data-api"
          },
          xe = {
            DROPDOWN_ITEM: "dropdown-item",
            DROPDOWN_MENU: "dropdown-menu",
            ACTIVE: "active"
          },
          Oe = {
            DATA_SPY: '[data-spy="scroll"]',
            ACTIVE: ".active",
            NAV_LIST_GROUP: ".nav, .list-group",
            NAV_LINKS: ".nav-link",
            NAV_ITEMS: ".nav-item",
            LIST_ITEMS: ".list-group-item",
            DROPDOWN: ".dropdown",
            DROPDOWN_ITEMS: ".dropdown-item",
            DROPDOWN_TOGGLE: ".dropdown-toggle"
          },
          Ie = { OFFSET: "offset", POSITION: "position" },
          Ne = (function() {
            function e(e, t) {
              var r = this;
              (this._element = e),
                (this._scrollElement = "BODY" === e.tagName ? window : e),
                (this._config = this._getConfig(t)),
                (this._selector =
                  this._config.target +
                  " " +
                  Oe.NAV_LINKS +
                  "," +
                  this._config.target +
                  " " +
                  Oe.LIST_ITEMS +
                  "," +
                  this._config.target +
                  " " +
                  Oe.DROPDOWN_ITEMS),
                (this._offsets = []),
                (this._targets = []),
                (this._activeTarget = null),
                (this._scrollHeight = 0),
                n(this._scrollElement).on(De.SCROLL, function(e) {
                  return r._process(e);
                }),
                this.refresh(),
                this._process();
            }
            var t = e.prototype;
            return (
              (t.refresh = function() {
                var e = this,
                  t =
                    this._scrollElement === this._scrollElement.window
                      ? Ie.OFFSET
                      : Ie.POSITION,
                  r = "auto" === this._config.method ? t : this._config.method,
                  i = r === Ie.POSITION ? this._getScrollTop() : 0;
                (this._offsets = []),
                  (this._targets = []),
                  (this._scrollHeight = this._getScrollHeight());
                var o = [].slice.call(
                  document.querySelectorAll(this._selector)
                );
                o.map(function(e) {
                  var t,
                    o = u.getSelectorFromElement(e);
                  if ((o && (t = document.querySelector(o)), t)) {
                    var s = t.getBoundingClientRect();
                    if (s.width || s.height) return [n(t)[r]().top + i, o];
                  }
                  return null;
                })
                  .filter(function(e) {
                    return e;
                  })
                  .sort(function(e, t) {
                    return e[0] - t[0];
                  })
                  .forEach(function(t) {
                    e._offsets.push(t[0]), e._targets.push(t[1]);
                  });
              }),
              (t.dispose = function() {
                n.removeData(this._element, "bs.scrollspy"),
                  n(this._scrollElement).off(".bs.scrollspy"),
                  (this._element = null),
                  (this._scrollElement = null),
                  (this._config = null),
                  (this._selector = null),
                  (this._offsets = null),
                  (this._targets = null),
                  (this._activeTarget = null),
                  (this._scrollHeight = null);
              }),
              (t._getConfig = function(e) {
                if (
                  "string" !=
                  typeof (e = s({}, Se, "object" == typeof e && e ? e : {}))
                    .target
                ) {
                  var t = n(e.target).attr("id");
                  t || ((t = u.getUID(we)), n(e.target).attr("id", t)),
                    (e.target = "#" + t);
                }
                return u.typeCheckConfig(we, e, Ae), e;
              }),
              (t._getScrollTop = function() {
                return this._scrollElement === window
                  ? this._scrollElement.pageYOffset
                  : this._scrollElement.scrollTop;
              }),
              (t._getScrollHeight = function() {
                return (
                  this._scrollElement.scrollHeight ||
                  Math.max(
                    document.body.scrollHeight,
                    document.documentElement.scrollHeight
                  )
                );
              }),
              (t._getOffsetHeight = function() {
                return this._scrollElement === window
                  ? window.innerHeight
                  : this._scrollElement.getBoundingClientRect().height;
              }),
              (t._process = function() {
                var e = this._getScrollTop() + this._config.offset,
                  t = this._getScrollHeight(),
                  n = this._config.offset + t - this._getOffsetHeight();
                if ((this._scrollHeight !== t && this.refresh(), e >= n)) {
                  var r = this._targets[this._targets.length - 1];
                  this._activeTarget !== r && this._activate(r);
                } else {
                  if (
                    this._activeTarget &&
                    e < this._offsets[0] &&
                    this._offsets[0] > 0
                  )
                    return (this._activeTarget = null), void this._clear();
                  for (var i = this._offsets.length, o = i; o--; ) {
                    var s =
                      this._activeTarget !== this._targets[o] &&
                      e >= this._offsets[o] &&
                      (void 0 === this._offsets[o + 1] ||
                        e < this._offsets[o + 1]);
                    s && this._activate(this._targets[o]);
                  }
                }
              }),
              (t._activate = function(e) {
                (this._activeTarget = e), this._clear();
                var t = this._selector.split(",").map(function(t) {
                    return (
                      t +
                      '[data-target="' +
                      e +
                      '"],' +
                      t +
                      '[href="' +
                      e +
                      '"]'
                    );
                  }),
                  r = n([].slice.call(document.querySelectorAll(t.join(","))));
                r.hasClass(xe.DROPDOWN_ITEM)
                  ? (r
                      .closest(Oe.DROPDOWN)
                      .find(Oe.DROPDOWN_TOGGLE)
                      .addClass(xe.ACTIVE),
                    r.addClass(xe.ACTIVE))
                  : (r.addClass(xe.ACTIVE),
                    r
                      .parents(Oe.NAV_LIST_GROUP)
                      .prev(Oe.NAV_LINKS + ", " + Oe.LIST_ITEMS)
                      .addClass(xe.ACTIVE),
                    r
                      .parents(Oe.NAV_LIST_GROUP)
                      .prev(Oe.NAV_ITEMS)
                      .children(Oe.NAV_LINKS)
                      .addClass(xe.ACTIVE)),
                  n(this._scrollElement).trigger(De.ACTIVATE, {
                    relatedTarget: e
                  });
              }),
              (t._clear = function() {
                [].slice
                  .call(document.querySelectorAll(this._selector))
                  .filter(function(e) {
                    return e.classList.contains(xe.ACTIVE);
                  })
                  .forEach(function(e) {
                    return e.classList.remove(xe.ACTIVE);
                  });
              }),
              (e._jQueryInterface = function(t) {
                return this.each(function() {
                  var r = n(this).data("bs.scrollspy"),
                    i = "object" == typeof t && t;
                  if (
                    (r ||
                      ((r = new e(this, i)), n(this).data("bs.scrollspy", r)),
                    "string" == typeof t)
                  ) {
                    if (void 0 === r[t])
                      throw new TypeError('No method named "' + t + '"');
                    r[t]();
                  }
                });
              }),
              i(e, null, [
                {
                  key: "VERSION",
                  get: function() {
                    return "4.2.1";
                  }
                },
                {
                  key: "Default",
                  get: function() {
                    return Se;
                  }
                }
              ]),
              e
            );
          })();
        n(window).on(De.LOAD_DATA_API, function() {
          for (
            var e = [].slice.call(document.querySelectorAll(Oe.DATA_SPY)),
              t = e.length,
              r = t;
            r--;

          ) {
            var i = n(e[r]);
            Ne._jQueryInterface.call(i, i.data());
          }
        }),
          (n.fn[we] = Ne._jQueryInterface),
          (n.fn[we].Constructor = Ne),
          (n.fn[we].noConflict = function() {
            return (n.fn[we] = Ce), Ne._jQueryInterface;
          });
        var Le = n.fn.tab,
          ke = {
            HIDE: "hide.bs.tab",
            HIDDEN: "hidden.bs.tab",
            SHOW: "show.bs.tab",
            SHOWN: "shown.bs.tab",
            CLICK_DATA_API: "click.bs.tab.data-api"
          },
          Pe = {
            DROPDOWN_MENU: "dropdown-menu",
            ACTIVE: "active",
            DISABLED: "disabled",
            FADE: "fade",
            SHOW: "show"
          },
          He = {
            DROPDOWN: ".dropdown",
            NAV_LIST_GROUP: ".nav, .list-group",
            ACTIVE: ".active",
            ACTIVE_UL: "> li > .active",
            DATA_TOGGLE:
              '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
            DROPDOWN_TOGGLE: ".dropdown-toggle",
            DROPDOWN_ACTIVE_CHILD: "> .dropdown-menu .active"
          },
          Re = (function() {
            function e(e) {
              this._element = e;
            }
            var t = e.prototype;
            return (
              (t.show = function() {
                var e = this;
                if (
                  !(
                    (this._element.parentNode &&
                      this._element.parentNode.nodeType === Node.ELEMENT_NODE &&
                      n(this._element).hasClass(Pe.ACTIVE)) ||
                    n(this._element).hasClass(Pe.DISABLED)
                  )
                ) {
                  var t,
                    r,
                    i = n(this._element).closest(He.NAV_LIST_GROUP)[0],
                    o = u.getSelectorFromElement(this._element);
                  if (i) {
                    var s =
                      "UL" === i.nodeName || "OL" === i.nodeName
                        ? He.ACTIVE_UL
                        : He.ACTIVE;
                    r = (r = n.makeArray(n(i).find(s)))[r.length - 1];
                  }
                  var a = n.Event(ke.HIDE, { relatedTarget: this._element }),
                    l = n.Event(ke.SHOW, { relatedTarget: r });
                  if (
                    (r && n(r).trigger(a),
                    n(this._element).trigger(l),
                    !l.isDefaultPrevented() && !a.isDefaultPrevented())
                  ) {
                    o && (t = document.querySelector(o)),
                      this._activate(this._element, i);
                    var c = function() {
                      var t = n.Event(ke.HIDDEN, { relatedTarget: e._element }),
                        i = n.Event(ke.SHOWN, { relatedTarget: r });
                      n(r).trigger(t), n(e._element).trigger(i);
                    };
                    t ? this._activate(t, t.parentNode, c) : c();
                  }
                }
              }),
              (t.dispose = function() {
                n.removeData(this._element, "bs.tab"), (this._element = null);
              }),
              (t._activate = function(e, t, r) {
                var i = this,
                  o =
                    !t || ("UL" !== t.nodeName && "OL" !== t.nodeName)
                      ? n(t).children(He.ACTIVE)
                      : n(t).find(He.ACTIVE_UL),
                  s = o[0],
                  a = r && s && n(s).hasClass(Pe.FADE),
                  l = function() {
                    return i._transitionComplete(e, s, r);
                  };
                if (s && a) {
                  var c = u.getTransitionDurationFromElement(s);
                  n(s)
                    .removeClass(Pe.SHOW)
                    .one(u.TRANSITION_END, l)
                    .emulateTransitionEnd(c);
                } else l();
              }),
              (t._transitionComplete = function(e, t, r) {
                if (t) {
                  n(t).removeClass(Pe.ACTIVE);
                  var i = n(t.parentNode).find(He.DROPDOWN_ACTIVE_CHILD)[0];
                  i && n(i).removeClass(Pe.ACTIVE),
                    "tab" === t.getAttribute("role") &&
                      t.setAttribute("aria-selected", !1);
                }
                if (
                  (n(e).addClass(Pe.ACTIVE),
                  "tab" === e.getAttribute("role") &&
                    e.setAttribute("aria-selected", !0),
                  u.reflow(e),
                  n(e).addClass(Pe.SHOW),
                  e.parentNode && n(e.parentNode).hasClass(Pe.DROPDOWN_MENU))
                ) {
                  var o = n(e).closest(He.DROPDOWN)[0];
                  if (o) {
                    var s = [].slice.call(
                      o.querySelectorAll(He.DROPDOWN_TOGGLE)
                    );
                    n(s).addClass(Pe.ACTIVE);
                  }
                  e.setAttribute("aria-expanded", !0);
                }
                r && r();
              }),
              (e._jQueryInterface = function(t) {
                return this.each(function() {
                  var r = n(this),
                    i = r.data("bs.tab");
                  if (
                    (i || ((i = new e(this)), r.data("bs.tab", i)),
                    "string" == typeof t)
                  ) {
                    if (void 0 === i[t])
                      throw new TypeError('No method named "' + t + '"');
                    i[t]();
                  }
                });
              }),
              i(e, null, [
                {
                  key: "VERSION",
                  get: function() {
                    return "4.2.1";
                  }
                }
              ]),
              e
            );
          })();
        n(document).on(ke.CLICK_DATA_API, He.DATA_TOGGLE, function(e) {
          e.preventDefault(), Re._jQueryInterface.call(n(this), "show");
        }),
          (n.fn.tab = Re._jQueryInterface),
          (n.fn.tab.Constructor = Re),
          (n.fn.tab.noConflict = function() {
            return (n.fn.tab = Le), Re._jQueryInterface;
          });
        var je = n.fn.toast,
          We = {
            CLICK_DISMISS: "click.dismiss.bs.toast",
            HIDE: "hide.bs.toast",
            HIDDEN: "hidden.bs.toast",
            SHOW: "show.bs.toast",
            SHOWN: "shown.bs.toast"
          },
          Me = { FADE: "fade", HIDE: "hide", SHOW: "show", SHOWING: "showing" },
          Fe = { animation: "boolean", autohide: "boolean", delay: "number" },
          qe = { animation: !0, autohide: !0, delay: 500 },
          Ue = { DATA_DISMISS: '[data-dismiss="toast"]' },
          Be = (function() {
            function e(e, t) {
              (this._element = e),
                (this._config = this._getConfig(t)),
                (this._timeout = null),
                this._setListeners();
            }
            var t = e.prototype;
            return (
              (t.show = function() {
                var e = this;
                n(this._element).trigger(We.SHOW),
                  this._config.animation &&
                    this._element.classList.add(Me.FADE);
                var t = function() {
                  e._element.classList.remove(Me.SHOWING),
                    e._element.classList.add(Me.SHOW),
                    n(e._element).trigger(We.SHOWN),
                    e._config.autohide && e.hide();
                };
                if (
                  (this._element.classList.remove(Me.HIDE),
                  this._element.classList.add(Me.SHOWING),
                  this._config.animation)
                ) {
                  var r = u.getTransitionDurationFromElement(this._element);
                  n(this._element)
                    .one(u.TRANSITION_END, t)
                    .emulateTransitionEnd(r);
                } else t();
              }),
              (t.hide = function(e) {
                var t = this;
                this._element.classList.contains(Me.SHOW) &&
                  (n(this._element).trigger(We.HIDE),
                  e
                    ? this._close()
                    : (this._timeout = setTimeout(function() {
                        t._close();
                      }, this._config.delay)));
              }),
              (t.dispose = function() {
                clearTimeout(this._timeout),
                  (this._timeout = null),
                  this._element.classList.contains(Me.SHOW) &&
                    this._element.classList.remove(Me.SHOW),
                  n(this._element).off(We.CLICK_DISMISS),
                  n.removeData(this._element, "bs.toast"),
                  (this._element = null),
                  (this._config = null);
              }),
              (t._getConfig = function(e) {
                return (
                  (e = s(
                    {},
                    qe,
                    n(this._element).data(),
                    "object" == typeof e && e ? e : {}
                  )),
                  u.typeCheckConfig("toast", e, this.constructor.DefaultType),
                  e
                );
              }),
              (t._setListeners = function() {
                var e = this;
                n(this._element).on(
                  We.CLICK_DISMISS,
                  Ue.DATA_DISMISS,
                  function() {
                    return e.hide(!0);
                  }
                );
              }),
              (t._close = function() {
                var e = this,
                  t = function() {
                    e._element.classList.add(Me.HIDE),
                      n(e._element).trigger(We.HIDDEN);
                  };
                if (
                  (this._element.classList.remove(Me.SHOW),
                  this._config.animation)
                ) {
                  var r = u.getTransitionDurationFromElement(this._element);
                  n(this._element)
                    .one(u.TRANSITION_END, t)
                    .emulateTransitionEnd(r);
                } else t();
              }),
              (e._jQueryInterface = function(t) {
                return this.each(function() {
                  var r = n(this),
                    i = r.data("bs.toast"),
                    o = "object" == typeof t && t;
                  if (
                    (i || ((i = new e(this, o)), r.data("bs.toast", i)),
                    "string" == typeof t)
                  ) {
                    if (void 0 === i[t])
                      throw new TypeError('No method named "' + t + '"');
                    i[t](this);
                  }
                });
              }),
              i(e, null, [
                {
                  key: "VERSION",
                  get: function() {
                    return "4.2.1";
                  }
                },
                {
                  key: "DefaultType",
                  get: function() {
                    return Fe;
                  }
                }
              ]),
              e
            );
          })();
        (n.fn.toast = Be._jQueryInterface),
          (n.fn.toast.Constructor = Be),
          (n.fn.toast.noConflict = function() {
            return (n.fn.toast = je), Be._jQueryInterface;
          }),
          (function() {
            if (void 0 === n)
              throw new TypeError(
                "Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."
              );
            var e = n.fn.jquery.split(" ")[0].split(".");
            if (
              (e[0] < 2 && e[1] < 9) ||
              (1 === e[0] && 9 === e[1] && e[2] < 1) ||
              e[0] >= 4
            )
              throw new Error(
                "Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0"
              );
          })(),
          (e.Util = u),
          (e.Alert = h),
          (e.Button = y),
          (e.Carousel = O),
          (e.Collapse = W),
          (e.Dropdown = Q),
          (e.Modal = te),
          (e.Popover = Te),
          (e.Scrollspy = Ne),
          (e.Tab = Re),
          (e.Toast = Be),
          (e.Tooltip = he),
          Object.defineProperty(e, "__esModule", { value: !0 });
      })(t, n(161), n(162));
    },
    161: function(e, t, n) {
      "use strict";
      n.r(t),
        function(e) {
          for (
            var n =
                "undefined" != typeof window && "undefined" != typeof document,
              r = ["Edge", "Trident", "Firefox"],
              i = 0,
              o = 0;
            o < r.length;
            o += 1
          )
            if (n && navigator.userAgent.indexOf(r[o]) >= 0) {
              i = 1;
              break;
            }
          var s =
            n && window.Promise
              ? function(e) {
                  var t = !1;
                  return function() {
                    t ||
                      ((t = !0),
                      window.Promise.resolve().then(function() {
                        (t = !1), e();
                      }));
                  };
                }
              : function(e) {
                  var t = !1;
                  return function() {
                    t ||
                      ((t = !0),
                      setTimeout(function() {
                        (t = !1), e();
                      }, i));
                  };
                };
          function a(e) {
            return e && "[object Function]" === {}.toString.call(e);
          }
          function l(e, t) {
            if (1 !== e.nodeType) return [];
            var n = e.ownerDocument.defaultView.getComputedStyle(e, null);
            return t ? n[t] : n;
          }
          function u(e) {
            return "HTML" === e.nodeName ? e : e.parentNode || e.host;
          }
          function c(e) {
            if (!e) return document.body;
            switch (e.nodeName) {
              case "HTML":
              case "BODY":
                return e.ownerDocument.body;
              case "#document":
                return e.body;
            }
            var t = l(e),
              n = t.overflow,
              r = t.overflowX,
              i = t.overflowY;
            return /(auto|scroll|overlay)/.test(n + i + r) ? e : c(u(e));
          }
          var f =
              n && !(!window.MSInputMethodContext || !document.documentMode),
            d = n && /MSIE 10/.test(navigator.userAgent);
          function h(e) {
            return 11 === e ? f : 10 === e ? d : f || d;
          }
          function p(e) {
            if (!e) return document.documentElement;
            for (
              var t = h(10) ? document.body : null, n = e.offsetParent || null;
              n === t && e.nextElementSibling;

            )
              n = (e = e.nextElementSibling).offsetParent;
            var r = n && n.nodeName;
            return r && "BODY" !== r && "HTML" !== r
              ? -1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) &&
                "static" === l(n, "position")
                ? p(n)
                : n
              : e
              ? e.ownerDocument.documentElement
              : document.documentElement;
          }
          function g(e) {
            return null !== e.parentNode ? g(e.parentNode) : e;
          }
          function m(e, t) {
            if (!(e && e.nodeType && t && t.nodeType))
              return document.documentElement;
            var n =
                e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
              r = n ? e : t,
              i = n ? t : e,
              o = document.createRange();
            o.setStart(r, 0), o.setEnd(i, 0);
            var s,
              a,
              l = o.commonAncestorContainer;
            if ((e !== l && t !== l) || r.contains(i))
              return "BODY" === (a = (s = l).nodeName) ||
                ("HTML" !== a && p(s.firstElementChild) !== s)
                ? p(l)
                : l;
            var u = g(e);
            return u.host ? m(u.host, t) : m(e, g(t).host);
          }
          function v(e) {
            var t =
                "top" ===
                (arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : "top")
                  ? "scrollTop"
                  : "scrollLeft",
              n = e.nodeName;
            if ("BODY" === n || "HTML" === n) {
              var r = e.ownerDocument.documentElement;
              return (e.ownerDocument.scrollingElement || r)[t];
            }
            return e[t];
          }
          function y(e, t) {
            var n = "x" === t ? "Left" : "Top",
              r = "Left" === n ? "Right" : "Bottom";
            return (
              parseFloat(e["border" + n + "Width"], 10) +
              parseFloat(e["border" + r + "Width"], 10)
            );
          }
          function _(e, t, n, r) {
            return Math.max(
              t["offset" + e],
              t["scroll" + e],
              n["client" + e],
              n["offset" + e],
              n["scroll" + e],
              h(10)
                ? parseInt(n["offset" + e]) +
                    parseInt(r["margin" + ("Height" === e ? "Top" : "Left")]) +
                    parseInt(
                      r["margin" + ("Height" === e ? "Bottom" : "Right")]
                    )
                : 0
            );
          }
          function b(e) {
            var t = e.body,
              n = e.documentElement,
              r = h(10) && getComputedStyle(n);
            return { height: _("Height", t, n, r), width: _("Width", t, n, r) };
          }
          var E = function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            },
            T = (function() {
              function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                  var r = t[n];
                  (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r);
                }
              }
              return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t;
              };
            })(),
            w = function(e, t, n) {
              return (
                t in e
                  ? Object.defineProperty(e, t, {
                      value: n,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                    })
                  : (e[t] = n),
                e
              );
            },
            C =
              Object.assign ||
              function(e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              };
          function S(e) {
            return C({}, e, {
              right: e.left + e.width,
              bottom: e.top + e.height
            });
          }
          function A(e) {
            var t = {};
            try {
              if (h(10)) {
                t = e.getBoundingClientRect();
                var n = v(e, "top"),
                  r = v(e, "left");
                (t.top += n), (t.left += r), (t.bottom += n), (t.right += r);
              } else t = e.getBoundingClientRect();
            } catch (d) {}
            var i = {
                left: t.left,
                top: t.top,
                width: t.right - t.left,
                height: t.bottom - t.top
              },
              o = "HTML" === e.nodeName ? b(e.ownerDocument) : {},
              s = o.width || e.clientWidth || i.right - i.left,
              a = o.height || e.clientHeight || i.bottom - i.top,
              u = e.offsetWidth - s,
              c = e.offsetHeight - a;
            if (u || c) {
              var f = l(e);
              (u -= y(f, "x")),
                (c -= y(f, "y")),
                (i.width -= u),
                (i.height -= c);
            }
            return S(i);
          }
          function D(e, t) {
            var n =
                arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              r = h(10),
              i = "HTML" === t.nodeName,
              o = A(e),
              s = A(t),
              a = c(e),
              u = l(t),
              f = parseFloat(u.borderTopWidth, 10),
              d = parseFloat(u.borderLeftWidth, 10);
            n &&
              i &&
              ((s.top = Math.max(s.top, 0)), (s.left = Math.max(s.left, 0)));
            var p = S({
              top: o.top - s.top - f,
              left: o.left - s.left - d,
              width: o.width,
              height: o.height
            });
            if (((p.marginTop = 0), (p.marginLeft = 0), !r && i)) {
              var g = parseFloat(u.marginTop, 10),
                m = parseFloat(u.marginLeft, 10);
              (p.top -= f - g),
                (p.bottom -= f - g),
                (p.left -= d - m),
                (p.right -= d - m),
                (p.marginTop = g),
                (p.marginLeft = m);
            }
            return (
              (r && !n ? t.contains(a) : t === a && "BODY" !== a.nodeName) &&
                (p = (function(e, t) {
                  var n =
                      arguments.length > 2 &&
                      void 0 !== arguments[2] &&
                      arguments[2],
                    r = v(t, "top"),
                    i = v(t, "left"),
                    o = n ? -1 : 1;
                  return (
                    (e.top += r * o),
                    (e.bottom += r * o),
                    (e.left += i * o),
                    (e.right += i * o),
                    e
                  );
                })(p, t)),
              p
            );
          }
          function x(e) {
            if (!e || !e.parentElement || h()) return document.documentElement;
            for (var t = e.parentElement; t && "none" === l(t, "transform"); )
              t = t.parentElement;
            return t || document.documentElement;
          }
          function O(e, t, n, r) {
            var i =
                arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              o = { top: 0, left: 0 },
              s = i ? x(e) : m(e, t);
            if ("viewport" === r)
              o = (function(e) {
                var t =
                    arguments.length > 1 &&
                    void 0 !== arguments[1] &&
                    arguments[1],
                  n = e.ownerDocument.documentElement,
                  r = D(e, n),
                  i = Math.max(n.clientWidth, window.innerWidth || 0),
                  o = Math.max(n.clientHeight, window.innerHeight || 0),
                  s = t ? 0 : v(n),
                  a = t ? 0 : v(n, "left");
                return S({
                  top: s - r.top + r.marginTop,
                  left: a - r.left + r.marginLeft,
                  width: i,
                  height: o
                });
              })(s, i);
            else {
              var a = void 0;
              "scrollParent" === r
                ? "BODY" === (a = c(u(t))).nodeName &&
                  (a = e.ownerDocument.documentElement)
                : (a = "window" === r ? e.ownerDocument.documentElement : r);
              var f = D(a, s, i);
              if (
                "HTML" !== a.nodeName ||
                (function e(t) {
                  var n = t.nodeName;
                  return (
                    "BODY" !== n &&
                    "HTML" !== n &&
                    ("fixed" === l(t, "position") || e(u(t)))
                  );
                })(s)
              )
                o = f;
              else {
                var d = b(e.ownerDocument),
                  h = d.height,
                  p = d.width;
                (o.top += f.top - f.marginTop),
                  (o.bottom = h + f.top),
                  (o.left += f.left - f.marginLeft),
                  (o.right = p + f.left);
              }
            }
            var g = "number" == typeof (n = n || 0);
            return (
              (o.left += g ? n : n.left || 0),
              (o.top += g ? n : n.top || 0),
              (o.right -= g ? n : n.right || 0),
              (o.bottom -= g ? n : n.bottom || 0),
              o
            );
          }
          function I(e, t, n, r, i) {
            var o =
              arguments.length > 5 && void 0 !== arguments[5]
                ? arguments[5]
                : 0;
            if (-1 === e.indexOf("auto")) return e;
            var s = O(n, r, o, i),
              a = {
                top: { width: s.width, height: t.top - s.top },
                right: { width: s.right - t.right, height: s.height },
                bottom: { width: s.width, height: s.bottom - t.bottom },
                left: { width: t.left - s.left, height: s.height }
              },
              l = Object.keys(a)
                .map(function(e) {
                  return C({ key: e }, a[e], {
                    area: ((t = a[e]), t.width * t.height)
                  });
                  var t;
                })
                .sort(function(e, t) {
                  return t.area - e.area;
                }),
              u = l.filter(function(e) {
                var t = e.width,
                  r = e.height;
                return t >= n.clientWidth && r >= n.clientHeight;
              }),
              c = u.length > 0 ? u[0].key : l[0].key,
              f = e.split("-")[1];
            return c + (f ? "-" + f : "");
          }
          function N(e, t, n) {
            var r =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : null;
            return D(n, r ? x(t) : m(t, n), r);
          }
          function L(e) {
            var t = e.ownerDocument.defaultView.getComputedStyle(e),
              n =
                parseFloat(t.marginTop || 0) + parseFloat(t.marginBottom || 0),
              r =
                parseFloat(t.marginLeft || 0) + parseFloat(t.marginRight || 0);
            return { width: e.offsetWidth + r, height: e.offsetHeight + n };
          }
          function k(e) {
            var t = {
              left: "right",
              right: "left",
              bottom: "top",
              top: "bottom"
            };
            return e.replace(/left|right|bottom|top/g, function(e) {
              return t[e];
            });
          }
          function P(e, t, n) {
            n = n.split("-")[0];
            var r = L(e),
              i = { width: r.width, height: r.height },
              o = -1 !== ["right", "left"].indexOf(n),
              s = o ? "top" : "left",
              a = o ? "left" : "top",
              l = o ? "height" : "width",
              u = o ? "width" : "height";
            return (
              (i[s] = t[s] + t[l] / 2 - r[l] / 2),
              (i[a] = n === a ? t[a] - r[u] : t[k(a)]),
              i
            );
          }
          function H(e, t) {
            return Array.prototype.find ? e.find(t) : e.filter(t)[0];
          }
          function R(e, t, n) {
            return (
              (void 0 === n
                ? e
                : e.slice(
                    0,
                    (function(e, t, n) {
                      if (Array.prototype.findIndex)
                        return e.findIndex(function(e) {
                          return e[t] === n;
                        });
                      var r = H(e, function(e) {
                        return e[t] === n;
                      });
                      return e.indexOf(r);
                    })(e, "name", n)
                  )
              ).forEach(function(e) {
                e.function &&
                  console.warn(
                    "`modifier.function` is deprecated, use `modifier.fn`!"
                  );
                var n = e.function || e.fn;
                e.enabled &&
                  a(n) &&
                  ((t.offsets.popper = S(t.offsets.popper)),
                  (t.offsets.reference = S(t.offsets.reference)),
                  (t = n(t, e)));
              }),
              t
            );
          }
          function j(e, t) {
            return e.some(function(e) {
              var n = e.name;
              return e.enabled && n === t;
            });
          }
          function W(e) {
            for (
              var t = [!1, "ms", "Webkit", "Moz", "O"],
                n = e.charAt(0).toUpperCase() + e.slice(1),
                r = 0;
              r < t.length;
              r++
            ) {
              var i = t[r],
                o = i ? "" + i + n : e;
              if (void 0 !== document.body.style[o]) return o;
            }
            return null;
          }
          function M(e) {
            var t = e.ownerDocument;
            return t ? t.defaultView : window;
          }
          function F(e, t, n, r) {
            (n.updateBound = r),
              M(e).addEventListener("resize", n.updateBound, { passive: !0 });
            var i = c(e);
            return (
              (function e(t, n, r, i) {
                var o = "BODY" === t.nodeName,
                  s = o ? t.ownerDocument.defaultView : t;
                s.addEventListener(n, r, { passive: !0 }),
                  o || e(c(s.parentNode), n, r, i),
                  i.push(s);
              })(i, "scroll", n.updateBound, n.scrollParents),
              (n.scrollElement = i),
              (n.eventsEnabled = !0),
              n
            );
          }
          function q() {
            var e, t;
            this.state.eventsEnabled &&
              (cancelAnimationFrame(this.scheduleUpdate),
              (this.state = ((e = this.reference),
              (t = this.state),
              M(e).removeEventListener("resize", t.updateBound),
              t.scrollParents.forEach(function(e) {
                e.removeEventListener("scroll", t.updateBound);
              }),
              (t.updateBound = null),
              (t.scrollParents = []),
              (t.scrollElement = null),
              (t.eventsEnabled = !1),
              t)));
          }
          function U(e) {
            return "" !== e && !isNaN(parseFloat(e)) && isFinite(e);
          }
          function B(e, t) {
            Object.keys(t).forEach(function(n) {
              var r = "";
              -1 !==
                ["width", "height", "top", "right", "bottom", "left"].indexOf(
                  n
                ) &&
                U(t[n]) &&
                (r = "px"),
                (e.style[n] = t[n] + r);
            });
          }
          var V = n && /Firefox/i.test(navigator.userAgent);
          function G(e, t, n) {
            var r = H(e, function(e) {
                return e.name === t;
              }),
              i =
                !!r &&
                e.some(function(e) {
                  return e.name === n && e.enabled && e.order < r.order;
                });
            if (!i) {
              var o = "`" + t + "`",
                s = "`" + n + "`";
              console.warn(
                s +
                  " modifier is required by " +
                  o +
                  " modifier in order to work, be sure to include it before " +
                  o +
                  "!"
              );
            }
            return i;
          }
          var $ = [
              "auto-start",
              "auto",
              "auto-end",
              "top-start",
              "top",
              "top-end",
              "right-start",
              "right",
              "right-end",
              "bottom-end",
              "bottom",
              "bottom-start",
              "left-end",
              "left",
              "left-start"
            ],
            K = $.slice(3);
          function Q(e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              n = K.indexOf(e),
              r = K.slice(n + 1).concat(K.slice(0, n));
            return t ? r.reverse() : r;
          }
          var X = {
            FLIP: "flip",
            CLOCKWISE: "clockwise",
            COUNTERCLOCKWISE: "counterclockwise"
          };
          function Y(e, t, n, r) {
            var i = [0, 0],
              o = -1 !== ["right", "left"].indexOf(r),
              s = e.split(/(\+|\-)/).map(function(e) {
                return e.trim();
              }),
              a = s.indexOf(
                H(s, function(e) {
                  return -1 !== e.search(/,|\s/);
                })
              );
            s[a] &&
              -1 === s[a].indexOf(",") &&
              console.warn(
                "Offsets separated by white space(s) are deprecated, use a comma (,) instead."
              );
            var l = /\s*,\s*|\s+/,
              u =
                -1 !== a
                  ? [
                      s.slice(0, a).concat([s[a].split(l)[0]]),
                      [s[a].split(l)[1]].concat(s.slice(a + 1))
                    ]
                  : [s];
            return (
              (u = u.map(function(e, r) {
                var i = (1 === r ? !o : o) ? "height" : "width",
                  s = !1;
                return e
                  .reduce(function(e, t) {
                    return "" === e[e.length - 1] &&
                      -1 !== ["+", "-"].indexOf(t)
                      ? ((e[e.length - 1] = t), (s = !0), e)
                      : s
                      ? ((e[e.length - 1] += t), (s = !1), e)
                      : e.concat(t);
                  }, [])
                  .map(function(e) {
                    return (function(e, t, n, r) {
                      var i = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                        o = +i[1],
                        s = i[2];
                      if (!o) return e;
                      if (0 === s.indexOf("%")) {
                        var a = void 0;
                        switch (s) {
                          case "%p":
                            a = n;
                            break;
                          case "%":
                          case "%r":
                          default:
                            a = r;
                        }
                        return (S(a)[t] / 100) * o;
                      }
                      if ("vh" === s || "vw" === s)
                        return (
                          (("vh" === s
                            ? Math.max(
                                document.documentElement.clientHeight,
                                window.innerHeight || 0
                              )
                            : Math.max(
                                document.documentElement.clientWidth,
                                window.innerWidth || 0
                              )) /
                            100) *
                          o
                        );
                      return o;
                    })(e, i, t, n);
                  });
              })).forEach(function(e, t) {
                e.forEach(function(n, r) {
                  U(n) && (i[t] += n * ("-" === e[r - 1] ? -1 : 1));
                });
              }),
              i
            );
          }
          var z = {
              placement: "bottom",
              positionFixed: !1,
              eventsEnabled: !0,
              removeOnDestroy: !1,
              onCreate: function() {},
              onUpdate: function() {},
              modifiers: {
                shift: {
                  order: 100,
                  enabled: !0,
                  fn: function(e) {
                    var t = e.placement,
                      n = t.split("-")[0],
                      r = t.split("-")[1];
                    if (r) {
                      var i = e.offsets,
                        o = i.reference,
                        s = i.popper,
                        a = -1 !== ["bottom", "top"].indexOf(n),
                        l = a ? "left" : "top",
                        u = a ? "width" : "height",
                        c = {
                          start: w({}, l, o[l]),
                          end: w({}, l, o[l] + o[u] - s[u])
                        };
                      e.offsets.popper = C({}, s, c[r]);
                    }
                    return e;
                  }
                },
                offset: {
                  order: 200,
                  enabled: !0,
                  fn: function(e, t) {
                    var n = t.offset,
                      r = e.placement,
                      i = e.offsets,
                      o = i.popper,
                      s = i.reference,
                      a = r.split("-")[0],
                      l = void 0;
                    return (
                      (l = U(+n) ? [+n, 0] : Y(n, o, s, a)),
                      "left" === a
                        ? ((o.top += l[0]), (o.left -= l[1]))
                        : "right" === a
                        ? ((o.top += l[0]), (o.left += l[1]))
                        : "top" === a
                        ? ((o.left += l[0]), (o.top -= l[1]))
                        : "bottom" === a && ((o.left += l[0]), (o.top += l[1])),
                      (e.popper = o),
                      e
                    );
                  },
                  offset: 0
                },
                preventOverflow: {
                  order: 300,
                  enabled: !0,
                  fn: function(e, t) {
                    var n = t.boundariesElement || p(e.instance.popper);
                    e.instance.reference === n && (n = p(n));
                    var r = W("transform"),
                      i = e.instance.popper.style,
                      o = i.top,
                      s = i.left,
                      a = i[r];
                    (i.top = ""), (i.left = ""), (i[r] = "");
                    var l = O(
                      e.instance.popper,
                      e.instance.reference,
                      t.padding,
                      n,
                      e.positionFixed
                    );
                    (i.top = o), (i.left = s), (i[r] = a), (t.boundaries = l);
                    var u = t.priority,
                      c = e.offsets.popper,
                      f = {
                        primary: function(e) {
                          var n = c[e];
                          return (
                            c[e] < l[e] &&
                              !t.escapeWithReference &&
                              (n = Math.max(c[e], l[e])),
                            w({}, e, n)
                          );
                        },
                        secondary: function(e) {
                          var n = "right" === e ? "left" : "top",
                            r = c[n];
                          return (
                            c[e] > l[e] &&
                              !t.escapeWithReference &&
                              (r = Math.min(
                                c[n],
                                l[e] - ("right" === e ? c.width : c.height)
                              )),
                            w({}, n, r)
                          );
                        }
                      };
                    return (
                      u.forEach(function(e) {
                        var t =
                          -1 !== ["left", "top"].indexOf(e)
                            ? "primary"
                            : "secondary";
                        c = C({}, c, f[t](e));
                      }),
                      (e.offsets.popper = c),
                      e
                    );
                  },
                  priority: ["left", "right", "top", "bottom"],
                  padding: 5,
                  boundariesElement: "scrollParent"
                },
                keepTogether: {
                  order: 400,
                  enabled: !0,
                  fn: function(e) {
                    var t = e.offsets,
                      n = t.popper,
                      r = t.reference,
                      i = e.placement.split("-")[0],
                      o = Math.floor,
                      s = -1 !== ["top", "bottom"].indexOf(i),
                      a = s ? "right" : "bottom",
                      l = s ? "left" : "top",
                      u = s ? "width" : "height";
                    return (
                      n[a] < o(r[l]) && (e.offsets.popper[l] = o(r[l]) - n[u]),
                      n[l] > o(r[a]) && (e.offsets.popper[l] = o(r[a])),
                      e
                    );
                  }
                },
                arrow: {
                  order: 500,
                  enabled: !0,
                  fn: function(e, t) {
                    var n;
                    if (!G(e.instance.modifiers, "arrow", "keepTogether"))
                      return e;
                    var r = t.element;
                    if ("string" == typeof r) {
                      if (!(r = e.instance.popper.querySelector(r))) return e;
                    } else if (!e.instance.popper.contains(r))
                      return (
                        console.warn(
                          "WARNING: `arrow.element` must be child of its popper element!"
                        ),
                        e
                      );
                    var i = e.placement.split("-")[0],
                      o = e.offsets,
                      s = o.popper,
                      a = o.reference,
                      u = -1 !== ["left", "right"].indexOf(i),
                      c = u ? "height" : "width",
                      f = u ? "Top" : "Left",
                      d = f.toLowerCase(),
                      h = u ? "left" : "top",
                      p = u ? "bottom" : "right",
                      g = L(r)[c];
                    a[p] - g < s[d] &&
                      (e.offsets.popper[d] -= s[d] - (a[p] - g)),
                      a[d] + g > s[p] &&
                        (e.offsets.popper[d] += a[d] + g - s[p]),
                      (e.offsets.popper = S(e.offsets.popper));
                    var m = a[d] + a[c] / 2 - g / 2,
                      v = l(e.instance.popper),
                      y = parseFloat(v["margin" + f], 10),
                      _ = parseFloat(v["border" + f + "Width"], 10),
                      b = m - e.offsets.popper[d] - y - _;
                    return (
                      (b = Math.max(Math.min(s[c] - g, b), 0)),
                      (e.arrowElement = r),
                      (e.offsets.arrow = (w((n = {}), d, Math.round(b)),
                      w(n, h, ""),
                      n)),
                      e
                    );
                  },
                  element: "[x-arrow]"
                },
                flip: {
                  order: 600,
                  enabled: !0,
                  fn: function(e, t) {
                    if (j(e.instance.modifiers, "inner")) return e;
                    if (e.flipped && e.placement === e.originalPlacement)
                      return e;
                    var n = O(
                        e.instance.popper,
                        e.instance.reference,
                        t.padding,
                        t.boundariesElement,
                        e.positionFixed
                      ),
                      r = e.placement.split("-")[0],
                      i = k(r),
                      o = e.placement.split("-")[1] || "",
                      s = [];
                    switch (t.behavior) {
                      case X.FLIP:
                        s = [r, i];
                        break;
                      case X.CLOCKWISE:
                        s = Q(r);
                        break;
                      case X.COUNTERCLOCKWISE:
                        s = Q(r, !0);
                        break;
                      default:
                        s = t.behavior;
                    }
                    return (
                      s.forEach(function(a, l) {
                        if (r !== a || s.length === l + 1) return e;
                        (r = e.placement.split("-")[0]), (i = k(r));
                        var u = e.offsets.popper,
                          c = e.offsets.reference,
                          f = Math.floor,
                          d =
                            ("left" === r && f(u.right) > f(c.left)) ||
                            ("right" === r && f(u.left) < f(c.right)) ||
                            ("top" === r && f(u.bottom) > f(c.top)) ||
                            ("bottom" === r && f(u.top) < f(c.bottom)),
                          h = f(u.left) < f(n.left),
                          p = f(u.right) > f(n.right),
                          g = f(u.top) < f(n.top),
                          m = f(u.bottom) > f(n.bottom),
                          v =
                            ("left" === r && h) ||
                            ("right" === r && p) ||
                            ("top" === r && g) ||
                            ("bottom" === r && m),
                          y = -1 !== ["top", "bottom"].indexOf(r),
                          _ =
                            !!t.flipVariations &&
                            ((y && "start" === o && h) ||
                              (y && "end" === o && p) ||
                              (!y && "start" === o && g) ||
                              (!y && "end" === o && m));
                        (d || v || _) &&
                          ((e.flipped = !0),
                          (d || v) && (r = s[l + 1]),
                          _ &&
                            (o = (function(e) {
                              return "end" === e
                                ? "start"
                                : "start" === e
                                ? "end"
                                : e;
                            })(o)),
                          (e.placement = r + (o ? "-" + o : "")),
                          (e.offsets.popper = C(
                            {},
                            e.offsets.popper,
                            P(
                              e.instance.popper,
                              e.offsets.reference,
                              e.placement
                            )
                          )),
                          (e = R(e.instance.modifiers, e, "flip")));
                      }),
                      e
                    );
                  },
                  behavior: "flip",
                  padding: 5,
                  boundariesElement: "viewport"
                },
                inner: {
                  order: 700,
                  enabled: !1,
                  fn: function(e) {
                    var t = e.placement,
                      n = t.split("-")[0],
                      r = e.offsets,
                      i = r.popper,
                      o = r.reference,
                      s = -1 !== ["left", "right"].indexOf(n),
                      a = -1 === ["top", "left"].indexOf(n);
                    return (
                      (i[s ? "left" : "top"] =
                        o[n] - (a ? i[s ? "width" : "height"] : 0)),
                      (e.placement = k(t)),
                      (e.offsets.popper = S(i)),
                      e
                    );
                  }
                },
                hide: {
                  order: 800,
                  enabled: !0,
                  fn: function(e) {
                    if (!G(e.instance.modifiers, "hide", "preventOverflow"))
                      return e;
                    var t = e.offsets.reference,
                      n = H(e.instance.modifiers, function(e) {
                        return "preventOverflow" === e.name;
                      }).boundaries;
                    if (
                      t.bottom < n.top ||
                      t.left > n.right ||
                      t.top > n.bottom ||
                      t.right < n.left
                    ) {
                      if (!0 === e.hide) return e;
                      (e.hide = !0), (e.attributes["x-out-of-boundaries"] = "");
                    } else {
                      if (!1 === e.hide) return e;
                      (e.hide = !1), (e.attributes["x-out-of-boundaries"] = !1);
                    }
                    return e;
                  }
                },
                computeStyle: {
                  order: 850,
                  enabled: !0,
                  fn: function(e, t) {
                    var n = t.x,
                      r = t.y,
                      i = e.offsets.popper,
                      o = H(e.instance.modifiers, function(e) {
                        return "applyStyle" === e.name;
                      }).gpuAcceleration;
                    void 0 !== o &&
                      console.warn(
                        "WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!"
                      );
                    var s = void 0 !== o ? o : t.gpuAcceleration,
                      a = p(e.instance.popper),
                      l = A(a),
                      u = { position: i.position },
                      c = (function(e, t) {
                        var n = e.offsets,
                          r = n.popper,
                          i = n.reference,
                          o = -1 !== ["left", "right"].indexOf(e.placement),
                          s = -1 !== e.placement.indexOf("-"),
                          a = i.width % 2 == r.width % 2,
                          l = i.width % 2 == 1 && r.width % 2 == 1,
                          u = function(e) {
                            return e;
                          },
                          c = t ? (o || s || a ? Math.round : Math.floor) : u,
                          f = t ? Math.round : u;
                        return {
                          left: c(l && !s && t ? r.left - 1 : r.left),
                          top: f(r.top),
                          bottom: f(r.bottom),
                          right: c(r.right)
                        };
                      })(e, window.devicePixelRatio < 2 || !V),
                      f = "bottom" === n ? "top" : "bottom",
                      d = "right" === r ? "left" : "right",
                      h = W("transform"),
                      g = void 0,
                      m = void 0;
                    if (
                      ((m =
                        "bottom" === f
                          ? "HTML" === a.nodeName
                            ? -a.clientHeight + c.bottom
                            : -l.height + c.bottom
                          : c.top),
                      (g =
                        "right" === d
                          ? "HTML" === a.nodeName
                            ? -a.clientWidth + c.right
                            : -l.width + c.right
                          : c.left),
                      s && h)
                    )
                      (u[h] = "translate3d(" + g + "px, " + m + "px, 0)"),
                        (u[f] = 0),
                        (u[d] = 0),
                        (u.willChange = "transform");
                    else {
                      var v = "bottom" === f ? -1 : 1,
                        y = "right" === d ? -1 : 1;
                      (u[f] = m * v),
                        (u[d] = g * y),
                        (u.willChange = f + ", " + d);
                    }
                    var _ = { "x-placement": e.placement };
                    return (
                      (e.attributes = C({}, _, e.attributes)),
                      (e.styles = C({}, u, e.styles)),
                      (e.arrowStyles = C({}, e.offsets.arrow, e.arrowStyles)),
                      e
                    );
                  },
                  gpuAcceleration: !0,
                  x: "bottom",
                  y: "right"
                },
                applyStyle: {
                  order: 900,
                  enabled: !0,
                  fn: function(e) {
                    var t, n;
                    return (
                      B(e.instance.popper, e.styles),
                      (t = e.instance.popper),
                      (n = e.attributes),
                      Object.keys(n).forEach(function(e) {
                        !1 !== n[e]
                          ? t.setAttribute(e, n[e])
                          : t.removeAttribute(e);
                      }),
                      e.arrowElement &&
                        Object.keys(e.arrowStyles).length &&
                        B(e.arrowElement, e.arrowStyles),
                      e
                    );
                  },
                  onLoad: function(e, t, n, r, i) {
                    var o = N(i, t, e, n.positionFixed),
                      s = I(
                        n.placement,
                        o,
                        t,
                        e,
                        n.modifiers.flip.boundariesElement,
                        n.modifiers.flip.padding
                      );
                    return (
                      t.setAttribute("x-placement", s),
                      B(t, {
                        position: n.positionFixed ? "fixed" : "absolute"
                      }),
                      n
                    );
                  },
                  gpuAcceleration: void 0
                }
              }
            },
            J = (function() {
              function e(t, n) {
                var r = this,
                  i =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : {};
                E(this, e),
                  (this.scheduleUpdate = function() {
                    return requestAnimationFrame(r.update);
                  }),
                  (this.update = s(this.update.bind(this))),
                  (this.options = C({}, e.Defaults, i)),
                  (this.state = {
                    isDestroyed: !1,
                    isCreated: !1,
                    scrollParents: []
                  }),
                  (this.reference = t && t.jquery ? t[0] : t),
                  (this.popper = n && n.jquery ? n[0] : n),
                  (this.options.modifiers = {}),
                  Object.keys(C({}, e.Defaults.modifiers, i.modifiers)).forEach(
                    function(t) {
                      r.options.modifiers[t] = C(
                        {},
                        e.Defaults.modifiers[t] || {},
                        i.modifiers ? i.modifiers[t] : {}
                      );
                    }
                  ),
                  (this.modifiers = Object.keys(this.options.modifiers)
                    .map(function(e) {
                      return C({ name: e }, r.options.modifiers[e]);
                    })
                    .sort(function(e, t) {
                      return e.order - t.order;
                    })),
                  this.modifiers.forEach(function(e) {
                    e.enabled &&
                      a(e.onLoad) &&
                      e.onLoad(r.reference, r.popper, r.options, e, r.state);
                  }),
                  this.update();
                var o = this.options.eventsEnabled;
                o && this.enableEventListeners(),
                  (this.state.eventsEnabled = o);
              }
              return (
                T(e, [
                  {
                    key: "update",
                    value: function() {
                      return function() {
                        if (!this.state.isDestroyed) {
                          var e = {
                            instance: this,
                            styles: {},
                            arrowStyles: {},
                            attributes: {},
                            flipped: !1,
                            offsets: {}
                          };
                          (e.offsets.reference = N(
                            this.state,
                            this.popper,
                            this.reference,
                            this.options.positionFixed
                          )),
                            (e.placement = I(
                              this.options.placement,
                              e.offsets.reference,
                              this.popper,
                              this.reference,
                              this.options.modifiers.flip.boundariesElement,
                              this.options.modifiers.flip.padding
                            )),
                            (e.originalPlacement = e.placement),
                            (e.positionFixed = this.options.positionFixed),
                            (e.offsets.popper = P(
                              this.popper,
                              e.offsets.reference,
                              e.placement
                            )),
                            (e.offsets.popper.position = this.options
                              .positionFixed
                              ? "fixed"
                              : "absolute"),
                            (e = R(this.modifiers, e)),
                            this.state.isCreated
                              ? this.options.onUpdate(e)
                              : ((this.state.isCreated = !0),
                                this.options.onCreate(e));
                        }
                      }.call(this);
                    }
                  },
                  {
                    key: "destroy",
                    value: function() {
                      return function() {
                        return (
                          (this.state.isDestroyed = !0),
                          j(this.modifiers, "applyStyle") &&
                            (this.popper.removeAttribute("x-placement"),
                            (this.popper.style.position = ""),
                            (this.popper.style.top = ""),
                            (this.popper.style.left = ""),
                            (this.popper.style.right = ""),
                            (this.popper.style.bottom = ""),
                            (this.popper.style.willChange = ""),
                            (this.popper.style[W("transform")] = "")),
                          this.disableEventListeners(),
                          this.options.removeOnDestroy &&
                            this.popper.parentNode.removeChild(this.popper),
                          this
                        );
                      }.call(this);
                    }
                  },
                  {
                    key: "enableEventListeners",
                    value: function() {
                      return function() {
                        this.state.eventsEnabled ||
                          (this.state = F(
                            this.reference,
                            this.options,
                            this.state,
                            this.scheduleUpdate
                          ));
                      }.call(this);
                    }
                  },
                  {
                    key: "disableEventListeners",
                    value: function() {
                      return q.call(this);
                    }
                  }
                ]),
                e
              );
            })();
          (J.Utils = ("undefined" != typeof window ? window : e).PopperUtils),
            (J.placements = $),
            (J.Defaults = z),
            (t.default = J);
        }.call(this, n(77));
    },
    162: function(e, t, n) {
      var r;
      !(function(t, n) {
        "use strict";
        "object" == typeof e.exports
          ? (e.exports = t.document
              ? n(t, !0)
              : function(e) {
                  if (!e.document)
                    throw new Error("jQuery requires a window with a document");
                  return n(e);
                })
          : n(t);
      })("undefined" != typeof window ? window : this, function(n, i) {
        "use strict";
        var o = [],
          s = n.document,
          a = Object.getPrototypeOf,
          l = o.slice,
          u = o.concat,
          c = o.push,
          f = o.indexOf,
          d = {},
          h = d.toString,
          p = d.hasOwnProperty,
          g = p.toString,
          m = g.call(Object),
          v = {},
          y = function(e) {
            return "function" == typeof e && "number" != typeof e.nodeType;
          },
          _ = function(e) {
            return null != e && e === e.window;
          },
          b = { type: !0, src: !0, noModule: !0 };
        function E(e, t, n) {
          var r,
            i = (t = t || s).createElement("script");
          if (((i.text = e), n)) for (r in b) n[r] && (i[r] = n[r]);
          t.head.appendChild(i).parentNode.removeChild(i);
        }
        function T(e) {
          return null == e
            ? e + ""
            : "object" == typeof e || "function" == typeof e
            ? d[h.call(e)] || "object"
            : typeof e;
        }
        var w = function(e, t) {
            return new w.fn.init(e, t);
          },
          C = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        function S(e) {
          var t = !!e && "length" in e && e.length,
            n = T(e);
          return (
            !y(e) &&
            !_(e) &&
            ("array" === n ||
              0 === t ||
              ("number" == typeof t && t > 0 && t - 1 in e))
          );
        }
        (w.fn = w.prototype = {
          jquery: "3.3.1",
          constructor: w,
          length: 0,
          toArray: function() {
            return l.call(this);
          },
          get: function(e) {
            return null == e
              ? l.call(this)
              : e < 0
              ? this[e + this.length]
              : this[e];
          },
          pushStack: function(e) {
            var t = w.merge(this.constructor(), e);
            return (t.prevObject = this), t;
          },
          each: function(e) {
            return w.each(this, e);
          },
          map: function(e) {
            return this.pushStack(
              w.map(this, function(t, n) {
                return e.call(t, n, t);
              })
            );
          },
          slice: function() {
            return this.pushStack(l.apply(this, arguments));
          },
          first: function() {
            return this.eq(0);
          },
          last: function() {
            return this.eq(-1);
          },
          eq: function(e) {
            var t = this.length,
              n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
          },
          end: function() {
            return this.prevObject || this.constructor();
          },
          push: c,
          sort: o.sort,
          splice: o.splice
        }),
          (w.extend = w.fn.extend = function() {
            var e,
              t,
              n,
              r,
              i,
              o,
              s = arguments[0] || {},
              a = 1,
              l = arguments.length,
              u = !1;
            for (
              "boolean" == typeof s && ((u = s), (s = arguments[a] || {}), a++),
                "object" == typeof s || y(s) || (s = {}),
                a === l && ((s = this), a--);
              a < l;
              a++
            )
              if (null != (e = arguments[a]))
                for (t in e)
                  (n = s[t]),
                    s !== (r = e[t]) &&
                      (u && r && (w.isPlainObject(r) || (i = Array.isArray(r)))
                        ? (i
                            ? ((i = !1), (o = n && Array.isArray(n) ? n : []))
                            : (o = n && w.isPlainObject(n) ? n : {}),
                          (s[t] = w.extend(u, o, r)))
                        : void 0 !== r && (s[t] = r));
            return s;
          }),
          w.extend({
            expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(e) {
              throw new Error(e);
            },
            noop: function() {},
            isPlainObject: function(e) {
              var t, n;
              return (
                !(!e || "[object Object]" !== h.call(e)) &&
                (!(t = a(e)) ||
                  ("function" ==
                    typeof (n = p.call(t, "constructor") && t.constructor) &&
                    g.call(n) === m))
              );
            },
            isEmptyObject: function(e) {
              var t;
              for (t in e) return !1;
              return !0;
            },
            globalEval: function(e) {
              E(e);
            },
            each: function(e, t) {
              var n,
                r = 0;
              if (S(e))
                for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
              else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
              return e;
            },
            trim: function(e) {
              return null == e ? "" : (e + "").replace(C, "");
            },
            makeArray: function(e, t) {
              var n = t || [];
              return (
                null != e &&
                  (S(Object(e))
                    ? w.merge(n, "string" == typeof e ? [e] : e)
                    : c.call(n, e)),
                n
              );
            },
            inArray: function(e, t, n) {
              return null == t ? -1 : f.call(t, e, n);
            },
            merge: function(e, t) {
              for (var n = +t.length, r = 0, i = e.length; r < n; r++)
                e[i++] = t[r];
              return (e.length = i), e;
            },
            grep: function(e, t, n) {
              for (var r = [], i = 0, o = e.length, s = !n; i < o; i++)
                !t(e[i], i) !== s && r.push(e[i]);
              return r;
            },
            map: function(e, t, n) {
              var r,
                i,
                o = 0,
                s = [];
              if (S(e))
                for (r = e.length; o < r; o++)
                  null != (i = t(e[o], o, n)) && s.push(i);
              else for (o in e) null != (i = t(e[o], o, n)) && s.push(i);
              return u.apply([], s);
            },
            guid: 1,
            support: v
          }),
          "function" == typeof Symbol &&
            (w.fn[Symbol.iterator] = o[Symbol.iterator]),
          w.each(
            "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
              " "
            ),
            function(e, t) {
              d["[object " + t + "]"] = t.toLowerCase();
            }
          );
        var A = (function(e) {
          var t,
            n,
            r,
            i,
            o,
            s,
            a,
            l,
            u,
            c,
            f,
            d,
            h,
            p,
            g,
            m,
            v,
            y,
            _,
            b = "sizzle" + 1 * new Date(),
            E = e.document,
            T = 0,
            w = 0,
            C = se(),
            S = se(),
            A = se(),
            D = function(e, t) {
              return e === t && (f = !0), 0;
            },
            x = {}.hasOwnProperty,
            O = [],
            I = O.pop,
            N = O.push,
            L = O.push,
            k = O.slice,
            P = function(e, t) {
              for (var n = 0, r = e.length; n < r; n++)
                if (e[n] === t) return n;
              return -1;
            },
            H =
              "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            R = "[\\x20\\t\\r\\n\\f]",
            j = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            W =
              "\\[" +
              R +
              "*(" +
              j +
              ")(?:" +
              R +
              "*([*^$|!~]?=)" +
              R +
              "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
              j +
              "))|)" +
              R +
              "*\\]",
            M =
              ":(" +
              j +
              ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
              W +
              ")*)|.*)\\)|)",
            F = new RegExp(R + "+", "g"),
            q = new RegExp(
              "^" + R + "+|((?:^|[^\\\\])(?:\\\\.)*)" + R + "+$",
              "g"
            ),
            U = new RegExp("^" + R + "*," + R + "*"),
            B = new RegExp("^" + R + "*([>+~]|" + R + ")" + R + "*"),
            V = new RegExp("=" + R + "*([^\\]'\"]*?)" + R + "*\\]", "g"),
            G = new RegExp(M),
            $ = new RegExp("^" + j + "$"),
            K = {
              ID: new RegExp("^#(" + j + ")"),
              CLASS: new RegExp("^\\.(" + j + ")"),
              TAG: new RegExp("^(" + j + "|[*])"),
              ATTR: new RegExp("^" + W),
              PSEUDO: new RegExp("^" + M),
              CHILD: new RegExp(
                "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                  R +
                  "*(even|odd|(([+-]|)(\\d*)n|)" +
                  R +
                  "*(?:([+-]|)" +
                  R +
                  "*(\\d+)|))" +
                  R +
                  "*\\)|)",
                "i"
              ),
              bool: new RegExp("^(?:" + H + ")$", "i"),
              needsContext: new RegExp(
                "^" +
                  R +
                  "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                  R +
                  "*((?:-\\d)?\\d*)" +
                  R +
                  "*\\)|)(?=[^-]|$)",
                "i"
              )
            },
            Q = /^(?:input|select|textarea|button)$/i,
            X = /^h\d$/i,
            Y = /^[^{]+\{\s*\[native \w/,
            z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            J = /[+~]/,
            Z = new RegExp("\\\\([\\da-f]{1,6}" + R + "?|(" + R + ")|.)", "ig"),
            ee = function(e, t, n) {
              var r = "0x" + t - 65536;
              return r != r || n
                ? t
                : r < 0
                ? String.fromCharCode(r + 65536)
                : String.fromCharCode((r >> 10) | 55296, (1023 & r) | 56320);
            },
            te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ne = function(e, t) {
              return t
                ? "\0" === e
                  ? "�"
                  : e.slice(0, -1) +
                    "\\" +
                    e.charCodeAt(e.length - 1).toString(16) +
                    " "
                : "\\" + e;
            },
            re = function() {
              d();
            },
            ie = ye(
              function(e) {
                return !0 === e.disabled && ("form" in e || "label" in e);
              },
              { dir: "parentNode", next: "legend" }
            );
          try {
            L.apply((O = k.call(E.childNodes)), E.childNodes),
              O[E.childNodes.length].nodeType;
          } catch (we) {
            L = {
              apply: O.length
                ? function(e, t) {
                    N.apply(e, k.call(t));
                  }
                : function(e, t) {
                    for (var n = e.length, r = 0; (e[n++] = t[r++]); );
                    e.length = n - 1;
                  }
            };
          }
          function oe(e, t, r, i) {
            var o,
              a,
              u,
              c,
              f,
              p,
              v,
              y = t && t.ownerDocument,
              T = t ? t.nodeType : 9;
            if (
              ((r = r || []),
              "string" != typeof e || !e || (1 !== T && 9 !== T && 11 !== T))
            )
              return r;
            if (
              !i &&
              ((t ? t.ownerDocument || t : E) !== h && d(t), (t = t || h), g)
            ) {
              if (11 !== T && (f = z.exec(e)))
                if ((o = f[1])) {
                  if (9 === T) {
                    if (!(u = t.getElementById(o))) return r;
                    if (u.id === o) return r.push(u), r;
                  } else if (
                    y &&
                    (u = y.getElementById(o)) &&
                    _(t, u) &&
                    u.id === o
                  )
                    return r.push(u), r;
                } else {
                  if (f[2]) return L.apply(r, t.getElementsByTagName(e)), r;
                  if (
                    (o = f[3]) &&
                    n.getElementsByClassName &&
                    t.getElementsByClassName
                  )
                    return L.apply(r, t.getElementsByClassName(o)), r;
                }
              if (n.qsa && !A[e + " "] && (!m || !m.test(e))) {
                if (1 !== T) (y = t), (v = e);
                else if ("object" !== t.nodeName.toLowerCase()) {
                  for (
                    (c = t.getAttribute("id"))
                      ? (c = c.replace(te, ne))
                      : t.setAttribute("id", (c = b)),
                      a = (p = s(e)).length;
                    a--;

                  )
                    p[a] = "#" + c + " " + ve(p[a]);
                  (v = p.join(",")), (y = (J.test(e) && ge(t.parentNode)) || t);
                }
                if (v)
                  try {
                    return L.apply(r, y.querySelectorAll(v)), r;
                  } catch (w) {
                  } finally {
                    c === b && t.removeAttribute("id");
                  }
              }
            }
            return l(e.replace(q, "$1"), t, r, i);
          }
          function se() {
            var e = [];
            return function t(n, i) {
              return (
                e.push(n + " ") > r.cacheLength && delete t[e.shift()],
                (t[n + " "] = i)
              );
            };
          }
          function ae(e) {
            return (e[b] = !0), e;
          }
          function le(e) {
            var t = h.createElement("fieldset");
            try {
              return !!e(t);
            } catch (we) {
              return !1;
            } finally {
              t.parentNode && t.parentNode.removeChild(t), (t = null);
            }
          }
          function ue(e, t) {
            for (var n = e.split("|"), i = n.length; i--; )
              r.attrHandle[n[i]] = t;
          }
          function ce(e, t) {
            var n = t && e,
              r =
                n &&
                1 === e.nodeType &&
                1 === t.nodeType &&
                e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
            return e ? 1 : -1;
          }
          function fe(e) {
            return function(t) {
              return "input" === t.nodeName.toLowerCase() && t.type === e;
            };
          }
          function de(e) {
            return function(t) {
              var n = t.nodeName.toLowerCase();
              return ("input" === n || "button" === n) && t.type === e;
            };
          }
          function he(e) {
            return function(t) {
              return "form" in t
                ? t.parentNode && !1 === t.disabled
                  ? "label" in t
                    ? "label" in t.parentNode
                      ? t.parentNode.disabled === e
                      : t.disabled === e
                    : t.isDisabled === e || (t.isDisabled !== !e && ie(t) === e)
                  : t.disabled === e
                : "label" in t && t.disabled === e;
            };
          }
          function pe(e) {
            return ae(function(t) {
              return (
                (t = +t),
                ae(function(n, r) {
                  for (var i, o = e([], n.length, t), s = o.length; s--; )
                    n[(i = o[s])] && (n[i] = !(r[i] = n[i]));
                })
              );
            });
          }
          function ge(e) {
            return e && void 0 !== e.getElementsByTagName && e;
          }
          for (t in ((n = oe.support = {}),
          (o = oe.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName;
          }),
          (d = oe.setDocument = function(e) {
            var t,
              i,
              s = e ? e.ownerDocument || e : E;
            return s !== h && 9 === s.nodeType && s.documentElement
              ? ((p = (h = s).documentElement),
                (g = !o(h)),
                E !== h &&
                  (i = h.defaultView) &&
                  i.top !== i &&
                  (i.addEventListener
                    ? i.addEventListener("unload", re, !1)
                    : i.attachEvent && i.attachEvent("onunload", re)),
                (n.attributes = le(function(e) {
                  return (e.className = "i"), !e.getAttribute("className");
                })),
                (n.getElementsByTagName = le(function(e) {
                  return (
                    e.appendChild(h.createComment("")),
                    !e.getElementsByTagName("*").length
                  );
                })),
                (n.getElementsByClassName = Y.test(h.getElementsByClassName)),
                (n.getById = le(function(e) {
                  return (
                    (p.appendChild(e).id = b),
                    !h.getElementsByName || !h.getElementsByName(b).length
                  );
                })),
                n.getById
                  ? ((r.filter.ID = function(e) {
                      var t = e.replace(Z, ee);
                      return function(e) {
                        return e.getAttribute("id") === t;
                      };
                    }),
                    (r.find.ID = function(e, t) {
                      if (void 0 !== t.getElementById && g) {
                        var n = t.getElementById(e);
                        return n ? [n] : [];
                      }
                    }))
                  : ((r.filter.ID = function(e) {
                      var t = e.replace(Z, ee);
                      return function(e) {
                        var n =
                          void 0 !== e.getAttributeNode &&
                          e.getAttributeNode("id");
                        return n && n.value === t;
                      };
                    }),
                    (r.find.ID = function(e, t) {
                      if (void 0 !== t.getElementById && g) {
                        var n,
                          r,
                          i,
                          o = t.getElementById(e);
                        if (o) {
                          if ((n = o.getAttributeNode("id")) && n.value === e)
                            return [o];
                          for (
                            i = t.getElementsByName(e), r = 0;
                            (o = i[r++]);

                          )
                            if ((n = o.getAttributeNode("id")) && n.value === e)
                              return [o];
                        }
                        return [];
                      }
                    })),
                (r.find.TAG = n.getElementsByTagName
                  ? function(e, t) {
                      return void 0 !== t.getElementsByTagName
                        ? t.getElementsByTagName(e)
                        : n.qsa
                        ? t.querySelectorAll(e)
                        : void 0;
                    }
                  : function(e, t) {
                      var n,
                        r = [],
                        i = 0,
                        o = t.getElementsByTagName(e);
                      if ("*" === e) {
                        for (; (n = o[i++]); ) 1 === n.nodeType && r.push(n);
                        return r;
                      }
                      return o;
                    }),
                (r.find.CLASS =
                  n.getElementsByClassName &&
                  function(e, t) {
                    if (void 0 !== t.getElementsByClassName && g)
                      return t.getElementsByClassName(e);
                  }),
                (v = []),
                (m = []),
                (n.qsa = Y.test(h.querySelectorAll)) &&
                  (le(function(e) {
                    (p.appendChild(e).innerHTML =
                      "<a id='" +
                      b +
                      "'></a><select id='" +
                      b +
                      "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                      e.querySelectorAll("[msallowcapture^='']").length &&
                        m.push("[*^$]=" + R + "*(?:''|\"\")"),
                      e.querySelectorAll("[selected]").length ||
                        m.push("\\[" + R + "*(?:value|" + H + ")"),
                      e.querySelectorAll("[id~=" + b + "-]").length ||
                        m.push("~="),
                      e.querySelectorAll(":checked").length ||
                        m.push(":checked"),
                      e.querySelectorAll("a#" + b + "+*").length ||
                        m.push(".#.+[+~]");
                  }),
                  le(function(e) {
                    e.innerHTML =
                      "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = h.createElement("input");
                    t.setAttribute("type", "hidden"),
                      e.appendChild(t).setAttribute("name", "D"),
                      e.querySelectorAll("[name=d]").length &&
                        m.push("name" + R + "*[*^$|!~]?="),
                      2 !== e.querySelectorAll(":enabled").length &&
                        m.push(":enabled", ":disabled"),
                      (p.appendChild(e).disabled = !0),
                      2 !== e.querySelectorAll(":disabled").length &&
                        m.push(":enabled", ":disabled"),
                      e.querySelectorAll("*,:x"),
                      m.push(",.*:");
                  })),
                (n.matchesSelector = Y.test(
                  (y =
                    p.matches ||
                    p.webkitMatchesSelector ||
                    p.mozMatchesSelector ||
                    p.oMatchesSelector ||
                    p.msMatchesSelector)
                )) &&
                  le(function(e) {
                    (n.disconnectedMatch = y.call(e, "*")),
                      y.call(e, "[s!='']:x"),
                      v.push("!=", M);
                  }),
                (m = m.length && new RegExp(m.join("|"))),
                (v = v.length && new RegExp(v.join("|"))),
                (t = Y.test(p.compareDocumentPosition)),
                (_ =
                  t || Y.test(p.contains)
                    ? function(e, t) {
                        var n = 9 === e.nodeType ? e.documentElement : e,
                          r = t && t.parentNode;
                        return (
                          e === r ||
                          !(
                            !r ||
                            1 !== r.nodeType ||
                            !(n.contains
                              ? n.contains(r)
                              : e.compareDocumentPosition &&
                                16 & e.compareDocumentPosition(r))
                          )
                        );
                      }
                    : function(e, t) {
                        if (t)
                          for (; (t = t.parentNode); ) if (t === e) return !0;
                        return !1;
                      }),
                (D = t
                  ? function(e, t) {
                      if (e === t) return (f = !0), 0;
                      var r =
                        !e.compareDocumentPosition - !t.compareDocumentPosition;
                      return (
                        r ||
                        (1 &
                          (r =
                            (e.ownerDocument || e) === (t.ownerDocument || t)
                              ? e.compareDocumentPosition(t)
                              : 1) ||
                        (!n.sortDetached && t.compareDocumentPosition(e) === r)
                          ? e === h || (e.ownerDocument === E && _(E, e))
                            ? -1
                            : t === h || (t.ownerDocument === E && _(E, t))
                            ? 1
                            : c
                            ? P(c, e) - P(c, t)
                            : 0
                          : 4 & r
                          ? -1
                          : 1)
                      );
                    }
                  : function(e, t) {
                      if (e === t) return (f = !0), 0;
                      var n,
                        r = 0,
                        i = e.parentNode,
                        o = t.parentNode,
                        s = [e],
                        a = [t];
                      if (!i || !o)
                        return e === h
                          ? -1
                          : t === h
                          ? 1
                          : i
                          ? -1
                          : o
                          ? 1
                          : c
                          ? P(c, e) - P(c, t)
                          : 0;
                      if (i === o) return ce(e, t);
                      for (n = e; (n = n.parentNode); ) s.unshift(n);
                      for (n = t; (n = n.parentNode); ) a.unshift(n);
                      for (; s[r] === a[r]; ) r++;
                      return r
                        ? ce(s[r], a[r])
                        : s[r] === E
                        ? -1
                        : a[r] === E
                        ? 1
                        : 0;
                    }),
                h)
              : h;
          }),
          (oe.matches = function(e, t) {
            return oe(e, null, null, t);
          }),
          (oe.matchesSelector = function(e, t) {
            if (
              ((e.ownerDocument || e) !== h && d(e),
              (t = t.replace(V, "='$1']")),
              n.matchesSelector &&
                g &&
                !A[t + " "] &&
                (!v || !v.test(t)) &&
                (!m || !m.test(t)))
            )
              try {
                var r = y.call(e, t);
                if (
                  r ||
                  n.disconnectedMatch ||
                  (e.document && 11 !== e.document.nodeType)
                )
                  return r;
              } catch (we) {}
            return oe(t, h, null, [e]).length > 0;
          }),
          (oe.contains = function(e, t) {
            return (e.ownerDocument || e) !== h && d(e), _(e, t);
          }),
          (oe.attr = function(e, t) {
            (e.ownerDocument || e) !== h && d(e);
            var i = r.attrHandle[t.toLowerCase()],
              o =
                i && x.call(r.attrHandle, t.toLowerCase())
                  ? i(e, t, !g)
                  : void 0;
            return void 0 !== o
              ? o
              : n.attributes || !g
              ? e.getAttribute(t)
              : (o = e.getAttributeNode(t)) && o.specified
              ? o.value
              : null;
          }),
          (oe.escape = function(e) {
            return (e + "").replace(te, ne);
          }),
          (oe.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e);
          }),
          (oe.uniqueSort = function(e) {
            var t,
              r = [],
              i = 0,
              o = 0;
            if (
              ((f = !n.detectDuplicates),
              (c = !n.sortStable && e.slice(0)),
              e.sort(D),
              f)
            ) {
              for (; (t = e[o++]); ) t === e[o] && (i = r.push(o));
              for (; i--; ) e.splice(r[i], 1);
            }
            return (c = null), e;
          }),
          (i = oe.getText = function(e) {
            var t,
              n = "",
              r = 0,
              o = e.nodeType;
            if (o) {
              if (1 === o || 9 === o || 11 === o) {
                if ("string" == typeof e.textContent) return e.textContent;
                for (e = e.firstChild; e; e = e.nextSibling) n += i(e);
              } else if (3 === o || 4 === o) return e.nodeValue;
            } else for (; (t = e[r++]); ) n += i(t);
            return n;
          }),
          ((r = oe.selectors = {
            cacheLength: 50,
            createPseudo: ae,
            match: K,
            attrHandle: {},
            find: {},
            relative: {
              ">": { dir: "parentNode", first: !0 },
              " ": { dir: "parentNode" },
              "+": { dir: "previousSibling", first: !0 },
              "~": { dir: "previousSibling" }
            },
            preFilter: {
              ATTR: function(e) {
                return (
                  (e[1] = e[1].replace(Z, ee)),
                  (e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee)),
                  "~=" === e[2] && (e[3] = " " + e[3] + " "),
                  e.slice(0, 4)
                );
              },
              CHILD: function(e) {
                return (
                  (e[1] = e[1].toLowerCase()),
                  "nth" === e[1].slice(0, 3)
                    ? (e[3] || oe.error(e[0]),
                      (e[4] = +(e[4]
                        ? e[5] + (e[6] || 1)
                        : 2 * ("even" === e[3] || "odd" === e[3]))),
                      (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                    : e[3] && oe.error(e[0]),
                  e
                );
              },
              PSEUDO: function(e) {
                var t,
                  n = !e[6] && e[2];
                return K.CHILD.test(e[0])
                  ? null
                  : (e[3]
                      ? (e[2] = e[4] || e[5] || "")
                      : n &&
                        G.test(n) &&
                        (t = s(n, !0)) &&
                        (t = n.indexOf(")", n.length - t) - n.length) &&
                        ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                    e.slice(0, 3));
              }
            },
            filter: {
              TAG: function(e) {
                var t = e.replace(Z, ee).toLowerCase();
                return "*" === e
                  ? function() {
                      return !0;
                    }
                  : function(e) {
                      return e.nodeName && e.nodeName.toLowerCase() === t;
                    };
              },
              CLASS: function(e) {
                var t = C[e + " "];
                return (
                  t ||
                  ((t = new RegExp("(^|" + R + ")" + e + "(" + R + "|$)")) &&
                    C(e, function(e) {
                      return t.test(
                        ("string" == typeof e.className && e.className) ||
                          (void 0 !== e.getAttribute &&
                            e.getAttribute("class")) ||
                          ""
                      );
                    }))
                );
              },
              ATTR: function(e, t, n) {
                return function(r) {
                  var i = oe.attr(r, e);
                  return null == i
                    ? "!=" === t
                    : !t ||
                        ((i += ""),
                        "=" === t
                          ? i === n
                          : "!=" === t
                          ? i !== n
                          : "^=" === t
                          ? n && 0 === i.indexOf(n)
                          : "*=" === t
                          ? n && i.indexOf(n) > -1
                          : "$=" === t
                          ? n && i.slice(-n.length) === n
                          : "~=" === t
                          ? (" " + i.replace(F, " ") + " ").indexOf(n) > -1
                          : "|=" === t &&
                            (i === n || i.slice(0, n.length + 1) === n + "-"));
                };
              },
              CHILD: function(e, t, n, r, i) {
                var o = "nth" !== e.slice(0, 3),
                  s = "last" !== e.slice(-4),
                  a = "of-type" === t;
                return 1 === r && 0 === i
                  ? function(e) {
                      return !!e.parentNode;
                    }
                  : function(t, n, l) {
                      var u,
                        c,
                        f,
                        d,
                        h,
                        p,
                        g = o !== s ? "nextSibling" : "previousSibling",
                        m = t.parentNode,
                        v = a && t.nodeName.toLowerCase(),
                        y = !l && !a,
                        _ = !1;
                      if (m) {
                        if (o) {
                          for (; g; ) {
                            for (d = t; (d = d[g]); )
                              if (
                                a
                                  ? d.nodeName.toLowerCase() === v
                                  : 1 === d.nodeType
                              )
                                return !1;
                            p = g = "only" === e && !p && "nextSibling";
                          }
                          return !0;
                        }
                        if (((p = [s ? m.firstChild : m.lastChild]), s && y)) {
                          for (
                            _ =
                              (h =
                                (u =
                                  (c =
                                    (f = (d = m)[b] || (d[b] = {}))[
                                      d.uniqueID
                                    ] || (f[d.uniqueID] = {}))[e] || [])[0] ===
                                  T && u[1]) && u[2],
                              d = h && m.childNodes[h];
                            (d = (++h && d && d[g]) || (_ = h = 0) || p.pop());

                          )
                            if (1 === d.nodeType && ++_ && d === t) {
                              c[e] = [T, h, _];
                              break;
                            }
                        } else if (
                          (y &&
                            (_ = h =
                              (u =
                                (c =
                                  (f = (d = t)[b] || (d[b] = {}))[d.uniqueID] ||
                                  (f[d.uniqueID] = {}))[e] || [])[0] === T &&
                              u[1]),
                          !1 === _)
                        )
                          for (
                            ;
                            (d =
                              (++h && d && d[g]) || (_ = h = 0) || p.pop()) &&
                            ((a
                              ? d.nodeName.toLowerCase() !== v
                              : 1 !== d.nodeType) ||
                              !++_ ||
                              (y &&
                                ((c =
                                  (f = d[b] || (d[b] = {}))[d.uniqueID] ||
                                  (f[d.uniqueID] = {}))[e] = [T, _]),
                              d !== t));

                          );
                        return (_ -= i) === r || (_ % r == 0 && _ / r >= 0);
                      }
                    };
              },
              PSEUDO: function(e, t) {
                var n,
                  i =
                    r.pseudos[e] ||
                    r.setFilters[e.toLowerCase()] ||
                    oe.error("unsupported pseudo: " + e);
                return i[b]
                  ? i(t)
                  : i.length > 1
                  ? ((n = [e, e, "", t]),
                    r.setFilters.hasOwnProperty(e.toLowerCase())
                      ? ae(function(e, n) {
                          for (var r, o = i(e, t), s = o.length; s--; )
                            e[(r = P(e, o[s]))] = !(n[r] = o[s]);
                        })
                      : function(e) {
                          return i(e, 0, n);
                        })
                  : i;
              }
            },
            pseudos: {
              not: ae(function(e) {
                var t = [],
                  n = [],
                  r = a(e.replace(q, "$1"));
                return r[b]
                  ? ae(function(e, t, n, i) {
                      for (var o, s = r(e, null, i, []), a = e.length; a--; )
                        (o = s[a]) && (e[a] = !(t[a] = o));
                    })
                  : function(e, i, o) {
                      return (
                        (t[0] = e), r(t, null, o, n), (t[0] = null), !n.pop()
                      );
                    };
              }),
              has: ae(function(e) {
                return function(t) {
                  return oe(e, t).length > 0;
                };
              }),
              contains: ae(function(e) {
                return (
                  (e = e.replace(Z, ee)),
                  function(t) {
                    return (
                      (t.textContent || t.innerText || i(t)).indexOf(e) > -1
                    );
                  }
                );
              }),
              lang: ae(function(e) {
                return (
                  $.test(e || "") || oe.error("unsupported lang: " + e),
                  (e = e.replace(Z, ee).toLowerCase()),
                  function(t) {
                    var n;
                    do {
                      if (
                        (n = g
                          ? t.lang
                          : t.getAttribute("xml:lang") ||
                            t.getAttribute("lang"))
                      )
                        return (
                          (n = n.toLowerCase()) === e ||
                          0 === n.indexOf(e + "-")
                        );
                    } while ((t = t.parentNode) && 1 === t.nodeType);
                    return !1;
                  }
                );
              }),
              target: function(t) {
                var n = e.location && e.location.hash;
                return n && n.slice(1) === t.id;
              },
              root: function(e) {
                return e === p;
              },
              focus: function(e) {
                return (
                  e === h.activeElement &&
                  (!h.hasFocus || h.hasFocus()) &&
                  !!(e.type || e.href || ~e.tabIndex)
                );
              },
              enabled: he(!1),
              disabled: he(!0),
              checked: function(e) {
                var t = e.nodeName.toLowerCase();
                return (
                  ("input" === t && !!e.checked) ||
                  ("option" === t && !!e.selected)
                );
              },
              selected: function(e) {
                return (
                  e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                );
              },
              empty: function(e) {
                for (e = e.firstChild; e; e = e.nextSibling)
                  if (e.nodeType < 6) return !1;
                return !0;
              },
              parent: function(e) {
                return !r.pseudos.empty(e);
              },
              header: function(e) {
                return X.test(e.nodeName);
              },
              input: function(e) {
                return Q.test(e.nodeName);
              },
              button: function(e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t && "button" === e.type) || "button" === t;
              },
              text: function(e) {
                var t;
                return (
                  "input" === e.nodeName.toLowerCase() &&
                  "text" === e.type &&
                  (null == (t = e.getAttribute("type")) ||
                    "text" === t.toLowerCase())
                );
              },
              first: pe(function() {
                return [0];
              }),
              last: pe(function(e, t) {
                return [t - 1];
              }),
              eq: pe(function(e, t, n) {
                return [n < 0 ? n + t : n];
              }),
              even: pe(function(e, t) {
                for (var n = 0; n < t; n += 2) e.push(n);
                return e;
              }),
              odd: pe(function(e, t) {
                for (var n = 1; n < t; n += 2) e.push(n);
                return e;
              }),
              lt: pe(function(e, t, n) {
                for (var r = n < 0 ? n + t : n; --r >= 0; ) e.push(r);
                return e;
              }),
              gt: pe(function(e, t, n) {
                for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
                return e;
              })
            }
          }).pseudos.nth = r.pseudos.eq),
          { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
            r.pseudos[t] = fe(t);
          for (t in { submit: !0, reset: !0 }) r.pseudos[t] = de(t);
          function me() {}
          function ve(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r;
          }
          function ye(e, t, n) {
            var r = t.dir,
              i = t.next,
              o = i || r,
              s = n && "parentNode" === o,
              a = w++;
            return t.first
              ? function(t, n, i) {
                  for (; (t = t[r]); )
                    if (1 === t.nodeType || s) return e(t, n, i);
                  return !1;
                }
              : function(t, n, l) {
                  var u,
                    c,
                    f,
                    d = [T, a];
                  if (l) {
                    for (; (t = t[r]); )
                      if ((1 === t.nodeType || s) && e(t, n, l)) return !0;
                  } else
                    for (; (t = t[r]); )
                      if (1 === t.nodeType || s)
                        if (
                          ((c =
                            (f = t[b] || (t[b] = {}))[t.uniqueID] ||
                            (f[t.uniqueID] = {})),
                          i && i === t.nodeName.toLowerCase())
                        )
                          t = t[r] || t;
                        else {
                          if ((u = c[o]) && u[0] === T && u[1] === a)
                            return (d[2] = u[2]);
                          if (((c[o] = d), (d[2] = e(t, n, l)))) return !0;
                        }
                  return !1;
                };
          }
          function _e(e) {
            return e.length > 1
              ? function(t, n, r) {
                  for (var i = e.length; i--; ) if (!e[i](t, n, r)) return !1;
                  return !0;
                }
              : e[0];
          }
          function be(e, t, n, r, i) {
            for (var o, s = [], a = 0, l = e.length, u = null != t; a < l; a++)
              (o = e[a]) && ((n && !n(o, r, i)) || (s.push(o), u && t.push(a)));
            return s;
          }
          function Ee(e, t, n, r, i, o) {
            return (
              r && !r[b] && (r = Ee(r)),
              i && !i[b] && (i = Ee(i, o)),
              ae(function(o, s, a, l) {
                var u,
                  c,
                  f,
                  d = [],
                  h = [],
                  p = s.length,
                  g =
                    o ||
                    (function(e, t, n) {
                      for (var r = 0, i = t.length; r < i; r++) oe(e, t[r], n);
                      return n;
                    })(t || "*", a.nodeType ? [a] : a, []),
                  m = !e || (!o && t) ? g : be(g, d, e, a, l),
                  v = n ? (i || (o ? e : p || r) ? [] : s) : m;
                if ((n && n(m, v, a, l), r))
                  for (u = be(v, h), r(u, [], a, l), c = u.length; c--; )
                    (f = u[c]) && (v[h[c]] = !(m[h[c]] = f));
                if (o) {
                  if (i || e) {
                    if (i) {
                      for (u = [], c = v.length; c--; )
                        (f = v[c]) && u.push((m[c] = f));
                      i(null, (v = []), u, l);
                    }
                    for (c = v.length; c--; )
                      (f = v[c]) &&
                        (u = i ? P(o, f) : d[c]) > -1 &&
                        (o[u] = !(s[u] = f));
                  }
                } else (v = be(v === s ? v.splice(p, v.length) : v)), i ? i(null, s, v, l) : L.apply(s, v);
              })
            );
          }
          function Te(e) {
            for (
              var t,
                n,
                i,
                o = e.length,
                s = r.relative[e[0].type],
                a = s || r.relative[" "],
                l = s ? 1 : 0,
                c = ye(
                  function(e) {
                    return e === t;
                  },
                  a,
                  !0
                ),
                f = ye(
                  function(e) {
                    return P(t, e) > -1;
                  },
                  a,
                  !0
                ),
                d = [
                  function(e, n, r) {
                    var i =
                      (!s && (r || n !== u)) ||
                      ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
                    return (t = null), i;
                  }
                ];
              l < o;
              l++
            )
              if ((n = r.relative[e[l].type])) d = [ye(_e(d), n)];
              else {
                if ((n = r.filter[e[l].type].apply(null, e[l].matches))[b]) {
                  for (i = ++l; i < o && !r.relative[e[i].type]; i++);
                  return Ee(
                    l > 1 && _e(d),
                    l > 1 &&
                      ve(
                        e
                          .slice(0, l - 1)
                          .concat({ value: " " === e[l - 2].type ? "*" : "" })
                      ).replace(q, "$1"),
                    n,
                    l < i && Te(e.slice(l, i)),
                    i < o && Te((e = e.slice(i))),
                    i < o && ve(e)
                  );
                }
                d.push(n);
              }
            return _e(d);
          }
          return (
            (me.prototype = r.filters = r.pseudos),
            (r.setFilters = new me()),
            (s = oe.tokenize = function(e, t) {
              var n,
                i,
                o,
                s,
                a,
                l,
                u,
                c = S[e + " "];
              if (c) return t ? 0 : c.slice(0);
              for (a = e, l = [], u = r.preFilter; a; ) {
                for (s in ((n && !(i = U.exec(a))) ||
                  (i && (a = a.slice(i[0].length) || a), l.push((o = []))),
                (n = !1),
                (i = B.exec(a)) &&
                  ((n = i.shift()),
                  o.push({ value: n, type: i[0].replace(q, " ") }),
                  (a = a.slice(n.length))),
                r.filter))
                  !(i = K[s].exec(a)) ||
                    (u[s] && !(i = u[s](i))) ||
                    ((n = i.shift()),
                    o.push({ value: n, type: s, matches: i }),
                    (a = a.slice(n.length)));
                if (!n) break;
              }
              return t ? a.length : a ? oe.error(e) : S(e, l).slice(0);
            }),
            (a = oe.compile = function(e, t) {
              var n,
                i = [],
                o = [],
                a = A[e + " "];
              if (!a) {
                for (t || (t = s(e)), n = t.length; n--; )
                  (a = Te(t[n]))[b] ? i.push(a) : o.push(a);
                (a = A(
                  e,
                  (function(e, t) {
                    var n = t.length > 0,
                      i = e.length > 0,
                      o = function(o, s, a, l, c) {
                        var f,
                          p,
                          m,
                          v = 0,
                          y = "0",
                          _ = o && [],
                          b = [],
                          E = u,
                          w = o || (i && r.find.TAG("*", c)),
                          C = (T += null == E ? 1 : Math.random() || 0.1),
                          S = w.length;
                        for (
                          c && (u = s === h || s || c);
                          y !== S && null != (f = w[y]);
                          y++
                        ) {
                          if (i && f) {
                            for (
                              p = 0,
                                s || f.ownerDocument === h || (d(f), (a = !g));
                              (m = e[p++]);

                            )
                              if (m(f, s || h, a)) {
                                l.push(f);
                                break;
                              }
                            c && (T = C);
                          }
                          n && ((f = !m && f) && v--, o && _.push(f));
                        }
                        if (((v += y), n && y !== v)) {
                          for (p = 0; (m = t[p++]); ) m(_, b, s, a);
                          if (o) {
                            if (v > 0)
                              for (; y--; ) _[y] || b[y] || (b[y] = I.call(l));
                            b = be(b);
                          }
                          L.apply(l, b),
                            c &&
                              !o &&
                              b.length > 0 &&
                              v + t.length > 1 &&
                              oe.uniqueSort(l);
                        }
                        return c && ((T = C), (u = E)), _;
                      };
                    return n ? ae(o) : o;
                  })(o, i)
                )).selector = e;
              }
              return a;
            }),
            (l = oe.select = function(e, t, n, i) {
              var o,
                l,
                u,
                c,
                f,
                d = "function" == typeof e && e,
                h = !i && s((e = d.selector || e));
              if (((n = n || []), 1 === h.length)) {
                if (
                  (l = h[0] = h[0].slice(0)).length > 2 &&
                  "ID" === (u = l[0]).type &&
                  9 === t.nodeType &&
                  g &&
                  r.relative[l[1].type]
                ) {
                  if (
                    !(t = (r.find.ID(u.matches[0].replace(Z, ee), t) || [])[0])
                  )
                    return n;
                  d && (t = t.parentNode),
                    (e = e.slice(l.shift().value.length));
                }
                for (
                  o = K.needsContext.test(e) ? 0 : l.length;
                  o-- && ((u = l[o]), !r.relative[(c = u.type)]);

                )
                  if (
                    (f = r.find[c]) &&
                    (i = f(
                      u.matches[0].replace(Z, ee),
                      (J.test(l[0].type) && ge(t.parentNode)) || t
                    ))
                  ) {
                    if ((l.splice(o, 1), !(e = i.length && ve(l))))
                      return L.apply(n, i), n;
                    break;
                  }
              }
              return (
                (d || a(e, h))(
                  i,
                  t,
                  !g,
                  n,
                  !t || (J.test(e) && ge(t.parentNode)) || t
                ),
                n
              );
            }),
            (n.sortStable =
              b
                .split("")
                .sort(D)
                .join("") === b),
            (n.detectDuplicates = !!f),
            d(),
            (n.sortDetached = le(function(e) {
              return 1 & e.compareDocumentPosition(h.createElement("fieldset"));
            })),
            le(function(e) {
              return (
                (e.innerHTML = "<a href='#'></a>"),
                "#" === e.firstChild.getAttribute("href")
              );
            }) ||
              ue("type|href|height|width", function(e, t, n) {
                if (!n)
                  return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
              }),
            (n.attributes &&
              le(function(e) {
                return (
                  (e.innerHTML = "<input/>"),
                  e.firstChild.setAttribute("value", ""),
                  "" === e.firstChild.getAttribute("value")
                );
              })) ||
              ue("value", function(e, t, n) {
                if (!n && "input" === e.nodeName.toLowerCase())
                  return e.defaultValue;
              }),
            le(function(e) {
              return null == e.getAttribute("disabled");
            }) ||
              ue(H, function(e, t, n) {
                var r;
                if (!n)
                  return !0 === e[t]
                    ? t.toLowerCase()
                    : (r = e.getAttributeNode(t)) && r.specified
                    ? r.value
                    : null;
              }),
            oe
          );
        })(n);
        (w.find = A),
          (w.expr = A.selectors),
          (w.expr[":"] = w.expr.pseudos),
          (w.uniqueSort = w.unique = A.uniqueSort),
          (w.text = A.getText),
          (w.isXMLDoc = A.isXML),
          (w.contains = A.contains),
          (w.escapeSelector = A.escape);
        var D = function(e, t, n) {
            for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
              if (1 === e.nodeType) {
                if (i && w(e).is(n)) break;
                r.push(e);
              }
            return r;
          },
          x = function(e, t) {
            for (var n = []; e; e = e.nextSibling)
              1 === e.nodeType && e !== t && n.push(e);
            return n;
          },
          O = w.expr.match.needsContext;
        function I(e, t) {
          return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
        }
        var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
        function L(e, t, n) {
          return y(t)
            ? w.grep(e, function(e, r) {
                return !!t.call(e, r, e) !== n;
              })
            : t.nodeType
            ? w.grep(e, function(e) {
                return (e === t) !== n;
              })
            : "string" != typeof t
            ? w.grep(e, function(e) {
                return f.call(t, e) > -1 !== n;
              })
            : w.filter(t, e, n);
        }
        (w.filter = function(e, t, n) {
          var r = t[0];
          return (
            n && (e = ":not(" + e + ")"),
            1 === t.length && 1 === r.nodeType
              ? w.find.matchesSelector(r, e)
                ? [r]
                : []
              : w.find.matches(
                  e,
                  w.grep(t, function(e) {
                    return 1 === e.nodeType;
                  })
                )
          );
        }),
          w.fn.extend({
            find: function(e) {
              var t,
                n,
                r = this.length,
                i = this;
              if ("string" != typeof e)
                return this.pushStack(
                  w(e).filter(function() {
                    for (t = 0; t < r; t++)
                      if (w.contains(i[t], this)) return !0;
                  })
                );
              for (n = this.pushStack([]), t = 0; t < r; t++)
                w.find(e, i[t], n);
              return r > 1 ? w.uniqueSort(n) : n;
            },
            filter: function(e) {
              return this.pushStack(L(this, e || [], !1));
            },
            not: function(e) {
              return this.pushStack(L(this, e || [], !0));
            },
            is: function(e) {
              return !!L(
                this,
                "string" == typeof e && O.test(e) ? w(e) : e || [],
                !1
              ).length;
            }
          });
        var k,
          P = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
        ((w.fn.init = function(e, t, n) {
          var r, i;
          if (!e) return this;
          if (((n = n || k), "string" == typeof e)) {
            if (
              !(r =
                "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3
                  ? [null, e, null]
                  : P.exec(e)) ||
              (!r[1] && t)
            )
              return !t || t.jquery
                ? (t || n).find(e)
                : this.constructor(t).find(e);
            if (r[1]) {
              if (
                ((t = t instanceof w ? t[0] : t),
                w.merge(
                  this,
                  w.parseHTML(
                    r[1],
                    t && t.nodeType ? t.ownerDocument || t : s,
                    !0
                  )
                ),
                N.test(r[1]) && w.isPlainObject(t))
              )
                for (r in t) y(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
              return this;
            }
            return (
              (i = s.getElementById(r[2])) &&
                ((this[0] = i), (this.length = 1)),
              this
            );
          }
          return e.nodeType
            ? ((this[0] = e), (this.length = 1), this)
            : y(e)
            ? void 0 !== n.ready
              ? n.ready(e)
              : e(w)
            : w.makeArray(e, this);
        }).prototype = w.fn),
          (k = w(s));
        var H = /^(?:parents|prev(?:Until|All))/,
          R = { children: !0, contents: !0, next: !0, prev: !0 };
        function j(e, t) {
          for (; (e = e[t]) && 1 !== e.nodeType; );
          return e;
        }
        w.fn.extend({
          has: function(e) {
            var t = w(e, this),
              n = t.length;
            return this.filter(function() {
              for (var e = 0; e < n; e++) if (w.contains(this, t[e])) return !0;
            });
          },
          closest: function(e, t) {
            var n,
              r = 0,
              i = this.length,
              o = [],
              s = "string" != typeof e && w(e);
            if (!O.test(e))
              for (; r < i; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
                  if (
                    n.nodeType < 11 &&
                    (s
                      ? s.index(n) > -1
                      : 1 === n.nodeType && w.find.matchesSelector(n, e))
                  ) {
                    o.push(n);
                    break;
                  }
            return this.pushStack(o.length > 1 ? w.uniqueSort(o) : o);
          },
          index: function(e) {
            return e
              ? "string" == typeof e
                ? f.call(w(e), this[0])
                : f.call(this, e.jquery ? e[0] : e)
              : this[0] && this[0].parentNode
              ? this.first().prevAll().length
              : -1;
          },
          add: function(e, t) {
            return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))));
          },
          addBack: function(e) {
            return this.add(
              null == e ? this.prevObject : this.prevObject.filter(e)
            );
          }
        }),
          w.each(
            {
              parent: function(e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null;
              },
              parents: function(e) {
                return D(e, "parentNode");
              },
              parentsUntil: function(e, t, n) {
                return D(e, "parentNode", n);
              },
              next: function(e) {
                return j(e, "nextSibling");
              },
              prev: function(e) {
                return j(e, "previousSibling");
              },
              nextAll: function(e) {
                return D(e, "nextSibling");
              },
              prevAll: function(e) {
                return D(e, "previousSibling");
              },
              nextUntil: function(e, t, n) {
                return D(e, "nextSibling", n);
              },
              prevUntil: function(e, t, n) {
                return D(e, "previousSibling", n);
              },
              siblings: function(e) {
                return x((e.parentNode || {}).firstChild, e);
              },
              children: function(e) {
                return x(e.firstChild);
              },
              contents: function(e) {
                return I(e, "iframe")
                  ? e.contentDocument
                  : (I(e, "template") && (e = e.content || e),
                    w.merge([], e.childNodes));
              }
            },
            function(e, t) {
              w.fn[e] = function(n, r) {
                var i = w.map(this, t, n);
                return (
                  "Until" !== e.slice(-5) && (r = n),
                  r && "string" == typeof r && (i = w.filter(r, i)),
                  this.length > 1 &&
                    (R[e] || w.uniqueSort(i), H.test(e) && i.reverse()),
                  this.pushStack(i)
                );
              };
            }
          );
        var W = /[^\x20\t\r\n\f]+/g;
        function M(e) {
          return e;
        }
        function F(e) {
          throw e;
        }
        function q(e, t, n, r) {
          var i;
          try {
            e && y((i = e.promise))
              ? i
                  .call(e)
                  .done(t)
                  .fail(n)
              : e && y((i = e.then))
              ? i.call(e, t, n)
              : t.apply(void 0, [e].slice(r));
          } catch (e) {
            n.apply(void 0, [e]);
          }
        }
        (w.Callbacks = function(e) {
          e =
            "string" == typeof e
              ? (function(e) {
                  var t = {};
                  return (
                    w.each(e.match(W) || [], function(e, n) {
                      t[n] = !0;
                    }),
                    t
                  );
                })(e)
              : w.extend({}, e);
          var t,
            n,
            r,
            i,
            o = [],
            s = [],
            a = -1,
            l = function() {
              for (i = i || e.once, r = t = !0; s.length; a = -1)
                for (n = s.shift(); ++a < o.length; )
                  !1 === o[a].apply(n[0], n[1]) &&
                    e.stopOnFalse &&
                    ((a = o.length), (n = !1));
              e.memory || (n = !1), (t = !1), i && (o = n ? [] : "");
            },
            u = {
              add: function() {
                return (
                  o &&
                    (n && !t && ((a = o.length - 1), s.push(n)),
                    (function t(n) {
                      w.each(n, function(n, r) {
                        y(r)
                          ? (e.unique && u.has(r)) || o.push(r)
                          : r && r.length && "string" !== T(r) && t(r);
                      });
                    })(arguments),
                    n && !t && l()),
                  this
                );
              },
              remove: function() {
                return (
                  w.each(arguments, function(e, t) {
                    for (var n; (n = w.inArray(t, o, n)) > -1; )
                      o.splice(n, 1), n <= a && a--;
                  }),
                  this
                );
              },
              has: function(e) {
                return e ? w.inArray(e, o) > -1 : o.length > 0;
              },
              empty: function() {
                return o && (o = []), this;
              },
              disable: function() {
                return (i = s = []), (o = n = ""), this;
              },
              disabled: function() {
                return !o;
              },
              lock: function() {
                return (i = s = []), n || t || (o = n = ""), this;
              },
              locked: function() {
                return !!i;
              },
              fireWith: function(e, n) {
                return (
                  i ||
                    ((n = [e, (n = n || []).slice ? n.slice() : n]),
                    s.push(n),
                    t || l()),
                  this
                );
              },
              fire: function() {
                return u.fireWith(this, arguments), this;
              },
              fired: function() {
                return !!r;
              }
            };
          return u;
        }),
          w.extend({
            Deferred: function(e) {
              var t = [
                  [
                    "notify",
                    "progress",
                    w.Callbacks("memory"),
                    w.Callbacks("memory"),
                    2
                  ],
                  [
                    "resolve",
                    "done",
                    w.Callbacks("once memory"),
                    w.Callbacks("once memory"),
                    0,
                    "resolved"
                  ],
                  [
                    "reject",
                    "fail",
                    w.Callbacks("once memory"),
                    w.Callbacks("once memory"),
                    1,
                    "rejected"
                  ]
                ],
                r = "pending",
                i = {
                  state: function() {
                    return r;
                  },
                  always: function() {
                    return o.done(arguments).fail(arguments), this;
                  },
                  catch: function(e) {
                    return i.then(null, e);
                  },
                  pipe: function() {
                    var e = arguments;
                    return w
                      .Deferred(function(n) {
                        w.each(t, function(t, r) {
                          var i = y(e[r[4]]) && e[r[4]];
                          o[r[1]](function() {
                            var e = i && i.apply(this, arguments);
                            e && y(e.promise)
                              ? e
                                  .promise()
                                  .progress(n.notify)
                                  .done(n.resolve)
                                  .fail(n.reject)
                              : n[r[0] + "With"](this, i ? [e] : arguments);
                          });
                        }),
                          (e = null);
                      })
                      .promise();
                  },
                  then: function(e, r, i) {
                    var o = 0;
                    function s(e, t, r, i) {
                      return function() {
                        var a = this,
                          l = arguments,
                          u = function() {
                            var n, u;
                            if (!(e < o)) {
                              if ((n = r.apply(a, l)) === t.promise())
                                throw new TypeError("Thenable self-resolution");
                              (u =
                                n &&
                                ("object" == typeof n ||
                                  "function" == typeof n) &&
                                n.then),
                                y(u)
                                  ? i
                                    ? u.call(n, s(o, t, M, i), s(o, t, F, i))
                                    : (o++,
                                      u.call(
                                        n,
                                        s(o, t, M, i),
                                        s(o, t, F, i),
                                        s(o, t, M, t.notifyWith)
                                      ))
                                  : (r !== M && ((a = void 0), (l = [n])),
                                    (i || t.resolveWith)(a, l));
                            }
                          },
                          c = i
                            ? u
                            : function() {
                                try {
                                  u();
                                } catch (n) {
                                  w.Deferred.exceptionHook &&
                                    w.Deferred.exceptionHook(n, c.stackTrace),
                                    e + 1 >= o &&
                                      (r !== F && ((a = void 0), (l = [n])),
                                      t.rejectWith(a, l));
                                }
                              };
                        e
                          ? c()
                          : (w.Deferred.getStackHook &&
                              (c.stackTrace = w.Deferred.getStackHook()),
                            n.setTimeout(c));
                      };
                    }
                    return w
                      .Deferred(function(n) {
                        t[0][3].add(s(0, n, y(i) ? i : M, n.notifyWith)),
                          t[1][3].add(s(0, n, y(e) ? e : M)),
                          t[2][3].add(s(0, n, y(r) ? r : F));
                      })
                      .promise();
                  },
                  promise: function(e) {
                    return null != e ? w.extend(e, i) : i;
                  }
                },
                o = {};
              return (
                w.each(t, function(e, n) {
                  var s = n[2],
                    a = n[5];
                  (i[n[1]] = s.add),
                    a &&
                      s.add(
                        function() {
                          r = a;
                        },
                        t[3 - e][2].disable,
                        t[3 - e][3].disable,
                        t[0][2].lock,
                        t[0][3].lock
                      ),
                    s.add(n[3].fire),
                    (o[n[0]] = function() {
                      return (
                        o[n[0] + "With"](this === o ? void 0 : this, arguments),
                        this
                      );
                    }),
                    (o[n[0] + "With"] = s.fireWith);
                }),
                i.promise(o),
                e && e.call(o, o),
                o
              );
            },
            when: function(e) {
              var t = arguments.length,
                n = t,
                r = Array(n),
                i = l.call(arguments),
                o = w.Deferred(),
                s = function(e) {
                  return function(n) {
                    (r[e] = this),
                      (i[e] = arguments.length > 1 ? l.call(arguments) : n),
                      --t || o.resolveWith(r, i);
                  };
                };
              if (
                t <= 1 &&
                (q(e, o.done(s(n)).resolve, o.reject, !t),
                "pending" === o.state() || y(i[n] && i[n].then))
              )
                return o.then();
              for (; n--; ) q(i[n], s(n), o.reject);
              return o.promise();
            }
          });
        var U = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        (w.Deferred.exceptionHook = function(e, t) {
          n.console &&
            n.console.warn &&
            e &&
            U.test(e.name) &&
            n.console.warn(
              "jQuery.Deferred exception: " + e.message,
              e.stack,
              t
            );
        }),
          (w.readyException = function(e) {
            n.setTimeout(function() {
              throw e;
            });
          });
        var B = w.Deferred();
        function V() {
          s.removeEventListener("DOMContentLoaded", V),
            n.removeEventListener("load", V),
            w.ready();
        }
        (w.fn.ready = function(e) {
          return (
            B.then(e).catch(function(e) {
              w.readyException(e);
            }),
            this
          );
        }),
          w.extend({
            isReady: !1,
            readyWait: 1,
            ready: function(e) {
              (!0 === e ? --w.readyWait : w.isReady) ||
                ((w.isReady = !0),
                (!0 !== e && --w.readyWait > 0) || B.resolveWith(s, [w]));
            }
          }),
          (w.ready.then = B.then),
          "complete" === s.readyState ||
          ("loading" !== s.readyState && !s.documentElement.doScroll)
            ? n.setTimeout(w.ready)
            : (s.addEventListener("DOMContentLoaded", V),
              n.addEventListener("load", V));
        var G = function(e, t, n, r, i, o, s) {
            var a = 0,
              l = e.length,
              u = null == n;
            if ("object" === T(n))
              for (a in ((i = !0), n)) G(e, t, a, n[a], !0, o, s);
            else if (
              void 0 !== r &&
              ((i = !0),
              y(r) || (s = !0),
              u &&
                (s
                  ? (t.call(e, r), (t = null))
                  : ((u = t),
                    (t = function(e, t, n) {
                      return u.call(w(e), n);
                    }))),
              t)
            )
              for (; a < l; a++)
                t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
            return i ? e : u ? t.call(e) : l ? t(e[0], n) : o;
          },
          $ = /^-ms-/,
          K = /-([a-z])/g;
        function Q(e, t) {
          return t.toUpperCase();
        }
        function X(e) {
          return e.replace($, "ms-").replace(K, Q);
        }
        var Y = function(e) {
          return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
        };
        function z() {
          this.expando = w.expando + z.uid++;
        }
        (z.uid = 1),
          (z.prototype = {
            cache: function(e) {
              var t = e[this.expando];
              return (
                t ||
                  ((t = {}),
                  Y(e) &&
                    (e.nodeType
                      ? (e[this.expando] = t)
                      : Object.defineProperty(e, this.expando, {
                          value: t,
                          configurable: !0
                        }))),
                t
              );
            },
            set: function(e, t, n) {
              var r,
                i = this.cache(e);
              if ("string" == typeof t) i[X(t)] = n;
              else for (r in t) i[X(r)] = t[r];
              return i;
            },
            get: function(e, t) {
              return void 0 === t
                ? this.cache(e)
                : e[this.expando] && e[this.expando][X(t)];
            },
            access: function(e, t, n) {
              return void 0 === t || (t && "string" == typeof t && void 0 === n)
                ? this.get(e, t)
                : (this.set(e, t, n), void 0 !== n ? n : t);
            },
            remove: function(e, t) {
              var n,
                r = e[this.expando];
              if (void 0 !== r) {
                if (void 0 !== t) {
                  n = (t = Array.isArray(t)
                    ? t.map(X)
                    : (t = X(t)) in r
                    ? [t]
                    : t.match(W) || []).length;
                  for (; n--; ) delete r[t[n]];
                }
                (void 0 === t || w.isEmptyObject(r)) &&
                  (e.nodeType
                    ? (e[this.expando] = void 0)
                    : delete e[this.expando]);
              }
            },
            hasData: function(e) {
              var t = e[this.expando];
              return void 0 !== t && !w.isEmptyObject(t);
            }
          });
        var J = new z(),
          Z = new z(),
          ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
          te = /[A-Z]/g;
        function ne(e, t, n) {
          var r;
          if (void 0 === n && 1 === e.nodeType)
            if (
              ((r = "data-" + t.replace(te, "-$&").toLowerCase()),
              "string" == typeof (n = e.getAttribute(r)))
            ) {
              try {
                n = (function(e) {
                  return (
                    "true" === e ||
                    ("false" !== e &&
                      ("null" === e
                        ? null
                        : e === +e + ""
                        ? +e
                        : ee.test(e)
                        ? JSON.parse(e)
                        : e))
                  );
                })(n);
              } catch (i) {}
              Z.set(e, t, n);
            } else n = void 0;
          return n;
        }
        w.extend({
          hasData: function(e) {
            return Z.hasData(e) || J.hasData(e);
          },
          data: function(e, t, n) {
            return Z.access(e, t, n);
          },
          removeData: function(e, t) {
            Z.remove(e, t);
          },
          _data: function(e, t, n) {
            return J.access(e, t, n);
          },
          _removeData: function(e, t) {
            J.remove(e, t);
          }
        }),
          w.fn.extend({
            data: function(e, t) {
              var n,
                r,
                i,
                o = this[0],
                s = o && o.attributes;
              if (void 0 === e) {
                if (
                  this.length &&
                  ((i = Z.get(o)),
                  1 === o.nodeType && !J.get(o, "hasDataAttrs"))
                ) {
                  for (n = s.length; n--; )
                    s[n] &&
                      0 === (r = s[n].name).indexOf("data-") &&
                      ((r = X(r.slice(5))), ne(o, r, i[r]));
                  J.set(o, "hasDataAttrs", !0);
                }
                return i;
              }
              return "object" == typeof e
                ? this.each(function() {
                    Z.set(this, e);
                  })
                : G(
                    this,
                    function(t) {
                      var n;
                      if (o && void 0 === t)
                        return void 0 !== (n = Z.get(o, e))
                          ? n
                          : void 0 !== (n = ne(o, e))
                          ? n
                          : void 0;
                      this.each(function() {
                        Z.set(this, e, t);
                      });
                    },
                    null,
                    t,
                    arguments.length > 1,
                    null,
                    !0
                  );
            },
            removeData: function(e) {
              return this.each(function() {
                Z.remove(this, e);
              });
            }
          }),
          w.extend({
            queue: function(e, t, n) {
              var r;
              if (e)
                return (
                  (t = (t || "fx") + "queue"),
                  (r = J.get(e, t)),
                  n &&
                    (!r || Array.isArray(n)
                      ? (r = J.access(e, t, w.makeArray(n)))
                      : r.push(n)),
                  r || []
                );
            },
            dequeue: function(e, t) {
              t = t || "fx";
              var n = w.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = w._queueHooks(e, t);
              "inprogress" === i && ((i = n.shift()), r--),
                i &&
                  ("fx" === t && n.unshift("inprogress"),
                  delete o.stop,
                  i.call(
                    e,
                    function() {
                      w.dequeue(e, t);
                    },
                    o
                  )),
                !r && o && o.empty.fire();
            },
            _queueHooks: function(e, t) {
              var n = t + "queueHooks";
              return (
                J.get(e, n) ||
                J.access(e, n, {
                  empty: w.Callbacks("once memory").add(function() {
                    J.remove(e, [t + "queue", n]);
                  })
                })
              );
            }
          }),
          w.fn.extend({
            queue: function(e, t) {
              var n = 2;
              return (
                "string" != typeof e && ((t = e), (e = "fx"), n--),
                arguments.length < n
                  ? w.queue(this[0], e)
                  : void 0 === t
                  ? this
                  : this.each(function() {
                      var n = w.queue(this, e, t);
                      w._queueHooks(this, e),
                        "fx" === e &&
                          "inprogress" !== n[0] &&
                          w.dequeue(this, e);
                    })
              );
            },
            dequeue: function(e) {
              return this.each(function() {
                w.dequeue(this, e);
              });
            },
            clearQueue: function(e) {
              return this.queue(e || "fx", []);
            },
            promise: function(e, t) {
              var n,
                r = 1,
                i = w.Deferred(),
                o = this,
                s = this.length,
                a = function() {
                  --r || i.resolveWith(o, [o]);
                };
              for (
                "string" != typeof e && ((t = e), (e = void 0)), e = e || "fx";
                s--;

              )
                (n = J.get(o[s], e + "queueHooks")) &&
                  n.empty &&
                  (r++, n.empty.add(a));
              return a(), i.promise(t);
            }
          });
        var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
          ie = new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$", "i"),
          oe = ["Top", "Right", "Bottom", "Left"],
          se = function(e, t) {
            return (
              "none" === (e = t || e).style.display ||
              ("" === e.style.display &&
                w.contains(e.ownerDocument, e) &&
                "none" === w.css(e, "display"))
            );
          },
          ae = function(e, t, n, r) {
            var i,
              o,
              s = {};
            for (o in t) (s[o] = e.style[o]), (e.style[o] = t[o]);
            for (o in ((i = n.apply(e, r || [])), t)) e.style[o] = s[o];
            return i;
          };
        function le(e, t, n, r) {
          var i,
            o,
            s = 20,
            a = r
              ? function() {
                  return r.cur();
                }
              : function() {
                  return w.css(e, t, "");
                },
            l = a(),
            u = (n && n[3]) || (w.cssNumber[t] ? "" : "px"),
            c = (w.cssNumber[t] || ("px" !== u && +l)) && ie.exec(w.css(e, t));
          if (c && c[3] !== u) {
            for (l /= 2, u = u || c[3], c = +l || 1; s--; )
              w.style(e, t, c + u),
                (1 - o) * (1 - (o = a() / l || 0.5)) <= 0 && (s = 0),
                (c /= o);
            (c *= 2), w.style(e, t, c + u), (n = n || []);
          }
          return (
            n &&
              ((c = +c || +l || 0),
              (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
              r && ((r.unit = u), (r.start = c), (r.end = i))),
            i
          );
        }
        var ue = {};
        function ce(e) {
          var t,
            n = e.ownerDocument,
            r = e.nodeName,
            i = ue[r];
          return (
            i ||
            ((t = n.body.appendChild(n.createElement(r))),
            (i = w.css(t, "display")),
            t.parentNode.removeChild(t),
            "none" === i && (i = "block"),
            (ue[r] = i),
            i)
          );
        }
        function fe(e, t) {
          for (var n, r, i = [], o = 0, s = e.length; o < s; o++)
            (r = e[o]).style &&
              ((n = r.style.display),
              t
                ? ("none" === n &&
                    ((i[o] = J.get(r, "display") || null),
                    i[o] || (r.style.display = "")),
                  "" === r.style.display && se(r) && (i[o] = ce(r)))
                : "none" !== n && ((i[o] = "none"), J.set(r, "display", n)));
          for (o = 0; o < s; o++) null != i[o] && (e[o].style.display = i[o]);
          return e;
        }
        w.fn.extend({
          show: function() {
            return fe(this, !0);
          },
          hide: function() {
            return fe(this);
          },
          toggle: function(e) {
            return "boolean" == typeof e
              ? e
                ? this.show()
                : this.hide()
              : this.each(function() {
                  se(this) ? w(this).show() : w(this).hide();
                });
          }
        });
        var de = /^(?:checkbox|radio)$/i,
          he = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
          pe = /^$|^module$|\/(?:java|ecma)script/i,
          ge = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
          };
        function me(e, t) {
          var n;
          return (
            (n =
              void 0 !== e.getElementsByTagName
                ? e.getElementsByTagName(t || "*")
                : void 0 !== e.querySelectorAll
                ? e.querySelectorAll(t || "*")
                : []),
            void 0 === t || (t && I(e, t)) ? w.merge([e], n) : n
          );
        }
        function ve(e, t) {
          for (var n = 0, r = e.length; n < r; n++)
            J.set(e[n], "globalEval", !t || J.get(t[n], "globalEval"));
        }
        (ge.optgroup = ge.option),
          (ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead),
          (ge.th = ge.td);
        var ye,
          _e,
          be = /<|&#?\w+;/;
        function Ee(e, t, n, r, i) {
          for (
            var o,
              s,
              a,
              l,
              u,
              c,
              f = t.createDocumentFragment(),
              d = [],
              h = 0,
              p = e.length;
            h < p;
            h++
          )
            if ((o = e[h]) || 0 === o)
              if ("object" === T(o)) w.merge(d, o.nodeType ? [o] : o);
              else if (be.test(o)) {
                for (
                  s = s || f.appendChild(t.createElement("div")),
                    a = (he.exec(o) || ["", ""])[1].toLowerCase(),
                    l = ge[a] || ge._default,
                    s.innerHTML = l[1] + w.htmlPrefilter(o) + l[2],
                    c = l[0];
                  c--;

                )
                  s = s.lastChild;
                w.merge(d, s.childNodes), ((s = f.firstChild).textContent = "");
              } else d.push(t.createTextNode(o));
          for (f.textContent = "", h = 0; (o = d[h++]); )
            if (r && w.inArray(o, r) > -1) i && i.push(o);
            else if (
              ((u = w.contains(o.ownerDocument, o)),
              (s = me(f.appendChild(o), "script")),
              u && ve(s),
              n)
            )
              for (c = 0; (o = s[c++]); ) pe.test(o.type || "") && n.push(o);
          return f;
        }
        (ye = s.createDocumentFragment().appendChild(s.createElement("div"))),
          (_e = s.createElement("input")).setAttribute("type", "radio"),
          _e.setAttribute("checked", "checked"),
          _e.setAttribute("name", "t"),
          ye.appendChild(_e),
          (v.checkClone = ye.cloneNode(!0).cloneNode(!0).lastChild.checked),
          (ye.innerHTML = "<textarea>x</textarea>"),
          (v.noCloneChecked = !!ye.cloneNode(!0).lastChild.defaultValue);
        var Te = s.documentElement,
          we = /^key/,
          Ce = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
          Se = /^([^.]*)(?:\.(.+)|)/;
        function Ae() {
          return !0;
        }
        function De() {
          return !1;
        }
        function xe() {
          try {
            return s.activeElement;
          } catch (e) {}
        }
        function Oe(e, t, n, r, i, o) {
          var s, a;
          if ("object" == typeof t) {
            for (a in ("string" != typeof n && ((r = r || n), (n = void 0)), t))
              Oe(e, a, n, r, t[a], o);
            return e;
          }
          if (
            (null == r && null == i
              ? ((i = n), (r = n = void 0))
              : null == i &&
                ("string" == typeof n
                  ? ((i = r), (r = void 0))
                  : ((i = r), (r = n), (n = void 0))),
            !1 === i)
          )
            i = De;
          else if (!i) return e;
          return (
            1 === o &&
              ((s = i),
              ((i = function(e) {
                return w().off(e), s.apply(this, arguments);
              }).guid = s.guid || (s.guid = w.guid++))),
            e.each(function() {
              w.event.add(this, t, i, r, n);
            })
          );
        }
        (w.event = {
          global: {},
          add: function(e, t, n, r, i) {
            var o,
              s,
              a,
              l,
              u,
              c,
              f,
              d,
              h,
              p,
              g,
              m = J.get(e);
            if (m)
              for (
                n.handler && ((n = (o = n).handler), (i = o.selector)),
                  i && w.find.matchesSelector(Te, i),
                  n.guid || (n.guid = w.guid++),
                  (l = m.events) || (l = m.events = {}),
                  (s = m.handle) ||
                    (s = m.handle = function(t) {
                      return void 0 !== w && w.event.triggered !== t.type
                        ? w.event.dispatch.apply(e, arguments)
                        : void 0;
                    }),
                  u = (t = (t || "").match(W) || [""]).length;
                u--;

              )
                (h = g = (a = Se.exec(t[u]) || [])[1]),
                  (p = (a[2] || "").split(".").sort()),
                  h &&
                    ((f = w.event.special[h] || {}),
                    (h = (i ? f.delegateType : f.bindType) || h),
                    (f = w.event.special[h] || {}),
                    (c = w.extend(
                      {
                        type: h,
                        origType: g,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: i,
                        needsContext: i && w.expr.match.needsContext.test(i),
                        namespace: p.join(".")
                      },
                      o
                    )),
                    (d = l[h]) ||
                      (((d = l[h] = []).delegateCount = 0),
                      (f.setup && !1 !== f.setup.call(e, r, p, s)) ||
                        (e.addEventListener && e.addEventListener(h, s))),
                    f.add &&
                      (f.add.call(e, c),
                      c.handler.guid || (c.handler.guid = n.guid)),
                    i ? d.splice(d.delegateCount++, 0, c) : d.push(c),
                    (w.event.global[h] = !0));
          },
          remove: function(e, t, n, r, i) {
            var o,
              s,
              a,
              l,
              u,
              c,
              f,
              d,
              h,
              p,
              g,
              m = J.hasData(e) && J.get(e);
            if (m && (l = m.events)) {
              for (u = (t = (t || "").match(W) || [""]).length; u--; )
                if (
                  ((h = g = (a = Se.exec(t[u]) || [])[1]),
                  (p = (a[2] || "").split(".").sort()),
                  h)
                ) {
                  for (
                    f = w.event.special[h] || {},
                      d = l[(h = (r ? f.delegateType : f.bindType) || h)] || [],
                      a =
                        a[2] &&
                        new RegExp(
                          "(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"
                        ),
                      s = o = d.length;
                    o--;

                  )
                    (c = d[o]),
                      (!i && g !== c.origType) ||
                        (n && n.guid !== c.guid) ||
                        (a && !a.test(c.namespace)) ||
                        (r &&
                          r !== c.selector &&
                          ("**" !== r || !c.selector)) ||
                        (d.splice(o, 1),
                        c.selector && d.delegateCount--,
                        f.remove && f.remove.call(e, c));
                  s &&
                    !d.length &&
                    ((f.teardown && !1 !== f.teardown.call(e, p, m.handle)) ||
                      w.removeEvent(e, h, m.handle),
                    delete l[h]);
                } else for (h in l) w.event.remove(e, h + t[u], n, r, !0);
              w.isEmptyObject(l) && J.remove(e, "handle events");
            }
          },
          dispatch: function(e) {
            var t,
              n,
              r,
              i,
              o,
              s,
              a = w.event.fix(e),
              l = new Array(arguments.length),
              u = (J.get(this, "events") || {})[a.type] || [],
              c = w.event.special[a.type] || {};
            for (l[0] = a, t = 1; t < arguments.length; t++)
              l[t] = arguments[t];
            if (
              ((a.delegateTarget = this),
              !c.preDispatch || !1 !== c.preDispatch.call(this, a))
            ) {
              for (
                s = w.event.handlers.call(this, a, u), t = 0;
                (i = s[t++]) && !a.isPropagationStopped();

              )
                for (
                  a.currentTarget = i.elem, n = 0;
                  (o = i.handlers[n++]) && !a.isImmediatePropagationStopped();

                )
                  (a.rnamespace && !a.rnamespace.test(o.namespace)) ||
                    ((a.handleObj = o),
                    (a.data = o.data),
                    void 0 !==
                      (r = (
                        (w.event.special[o.origType] || {}).handle || o.handler
                      ).apply(i.elem, l)) &&
                      !1 === (a.result = r) &&
                      (a.preventDefault(), a.stopPropagation()));
              return c.postDispatch && c.postDispatch.call(this, a), a.result;
            }
          },
          handlers: function(e, t) {
            var n,
              r,
              i,
              o,
              s,
              a = [],
              l = t.delegateCount,
              u = e.target;
            if (l && u.nodeType && !("click" === e.type && e.button >= 1))
              for (; u !== this; u = u.parentNode || this)
                if (
                  1 === u.nodeType &&
                  ("click" !== e.type || !0 !== u.disabled)
                ) {
                  for (o = [], s = {}, n = 0; n < l; n++)
                    void 0 === s[(i = (r = t[n]).selector + " ")] &&
                      (s[i] = r.needsContext
                        ? w(i, this).index(u) > -1
                        : w.find(i, this, null, [u]).length),
                      s[i] && o.push(r);
                  o.length && a.push({ elem: u, handlers: o });
                }
            return (
              (u = this),
              l < t.length && a.push({ elem: u, handlers: t.slice(l) }),
              a
            );
          },
          addProp: function(e, t) {
            Object.defineProperty(w.Event.prototype, e, {
              enumerable: !0,
              configurable: !0,
              get: y(t)
                ? function() {
                    if (this.originalEvent) return t(this.originalEvent);
                  }
                : function() {
                    if (this.originalEvent) return this.originalEvent[e];
                  },
              set: function(t) {
                Object.defineProperty(this, e, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: t
                });
              }
            });
          },
          fix: function(e) {
            return e[w.expando] ? e : new w.Event(e);
          },
          special: {
            load: { noBubble: !0 },
            focus: {
              trigger: function() {
                if (this !== xe() && this.focus) return this.focus(), !1;
              },
              delegateType: "focusin"
            },
            blur: {
              trigger: function() {
                if (this === xe() && this.blur) return this.blur(), !1;
              },
              delegateType: "focusout"
            },
            click: {
              trigger: function() {
                if ("checkbox" === this.type && this.click && I(this, "input"))
                  return this.click(), !1;
              },
              _default: function(e) {
                return I(e.target, "a");
              }
            },
            beforeunload: {
              postDispatch: function(e) {
                void 0 !== e.result &&
                  e.originalEvent &&
                  (e.originalEvent.returnValue = e.result);
              }
            }
          }
        }),
          (w.removeEvent = function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n);
          }),
          (w.Event = function(e, t) {
            if (!(this instanceof w.Event)) return new w.Event(e, t);
            e && e.type
              ? ((this.originalEvent = e),
                (this.type = e.type),
                (this.isDefaultPrevented =
                  e.defaultPrevented ||
                  (void 0 === e.defaultPrevented && !1 === e.returnValue)
                    ? Ae
                    : De),
                (this.target =
                  e.target && 3 === e.target.nodeType
                    ? e.target.parentNode
                    : e.target),
                (this.currentTarget = e.currentTarget),
                (this.relatedTarget = e.relatedTarget))
              : (this.type = e),
              t && w.extend(this, t),
              (this.timeStamp = (e && e.timeStamp) || Date.now()),
              (this[w.expando] = !0);
          }),
          (w.Event.prototype = {
            constructor: w.Event,
            isDefaultPrevented: De,
            isPropagationStopped: De,
            isImmediatePropagationStopped: De,
            isSimulated: !1,
            preventDefault: function() {
              var e = this.originalEvent;
              (this.isDefaultPrevented = Ae),
                e && !this.isSimulated && e.preventDefault();
            },
            stopPropagation: function() {
              var e = this.originalEvent;
              (this.isPropagationStopped = Ae),
                e && !this.isSimulated && e.stopPropagation();
            },
            stopImmediatePropagation: function() {
              var e = this.originalEvent;
              (this.isImmediatePropagationStopped = Ae),
                e && !this.isSimulated && e.stopImmediatePropagation(),
                this.stopPropagation();
            }
          }),
          w.each(
            {
              altKey: !0,
              bubbles: !0,
              cancelable: !0,
              changedTouches: !0,
              ctrlKey: !0,
              detail: !0,
              eventPhase: !0,
              metaKey: !0,
              pageX: !0,
              pageY: !0,
              shiftKey: !0,
              view: !0,
              char: !0,
              charCode: !0,
              key: !0,
              keyCode: !0,
              button: !0,
              buttons: !0,
              clientX: !0,
              clientY: !0,
              offsetX: !0,
              offsetY: !0,
              pointerId: !0,
              pointerType: !0,
              screenX: !0,
              screenY: !0,
              targetTouches: !0,
              toElement: !0,
              touches: !0,
              which: function(e) {
                var t = e.button;
                return null == e.which && we.test(e.type)
                  ? null != e.charCode
                    ? e.charCode
                    : e.keyCode
                  : !e.which && void 0 !== t && Ce.test(e.type)
                  ? 1 & t
                    ? 1
                    : 2 & t
                    ? 3
                    : 4 & t
                    ? 2
                    : 0
                  : e.which;
              }
            },
            w.event.addProp
          ),
          w.each(
            {
              mouseenter: "mouseover",
              mouseleave: "mouseout",
              pointerenter: "pointerover",
              pointerleave: "pointerout"
            },
            function(e, t) {
              w.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function(e) {
                  var n,
                    r = e.relatedTarget,
                    i = e.handleObj;
                  return (
                    (r && (r === this || w.contains(this, r))) ||
                      ((e.type = i.origType),
                      (n = i.handler.apply(this, arguments)),
                      (e.type = t)),
                    n
                  );
                }
              };
            }
          ),
          w.fn.extend({
            on: function(e, t, n, r) {
              return Oe(this, e, t, n, r);
            },
            one: function(e, t, n, r) {
              return Oe(this, e, t, n, r, 1);
            },
            off: function(e, t, n) {
              var r, i;
              if (e && e.preventDefault && e.handleObj)
                return (
                  (r = e.handleObj),
                  w(e.delegateTarget).off(
                    r.namespace ? r.origType + "." + r.namespace : r.origType,
                    r.selector,
                    r.handler
                  ),
                  this
                );
              if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this;
              }
              return (
                (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
                !1 === n && (n = De),
                this.each(function() {
                  w.event.remove(this, e, n, t);
                })
              );
            }
          });
        var Ie = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
          Ne = /<script|<style|<link/i,
          Le = /checked\s*(?:[^=]|=\s*.checked.)/i,
          ke = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        function Pe(e, t) {
          return (
            (I(e, "table") &&
              I(11 !== t.nodeType ? t : t.firstChild, "tr") &&
              w(e).children("tbody")[0]) ||
            e
          );
        }
        function He(e) {
          return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
        }
        function Re(e) {
          return (
            "true/" === (e.type || "").slice(0, 5)
              ? (e.type = e.type.slice(5))
              : e.removeAttribute("type"),
            e
          );
        }
        function je(e, t) {
          var n, r, i, o, s, a, l, u;
          if (1 === t.nodeType) {
            if (
              J.hasData(e) &&
              ((o = J.access(e)), (s = J.set(t, o)), (u = o.events))
            )
              for (i in (delete s.handle, (s.events = {}), u))
                for (n = 0, r = u[i].length; n < r; n++)
                  w.event.add(t, i, u[i][n]);
            Z.hasData(e) &&
              ((a = Z.access(e)), (l = w.extend({}, a)), Z.set(t, l));
          }
        }
        function We(e, t, n, r) {
          t = u.apply([], t);
          var i,
            o,
            s,
            a,
            l,
            c,
            f = 0,
            d = e.length,
            h = d - 1,
            p = t[0],
            g = y(p);
          if (
            g ||
            (d > 1 && "string" == typeof p && !v.checkClone && Le.test(p))
          )
            return e.each(function(i) {
              var o = e.eq(i);
              g && (t[0] = p.call(this, i, o.html())), We(o, t, n, r);
            });
          if (
            d &&
            ((o = (i = Ee(t, e[0].ownerDocument, !1, e, r)).firstChild),
            1 === i.childNodes.length && (i = o),
            o || r)
          ) {
            for (a = (s = w.map(me(i, "script"), He)).length; f < d; f++)
              (l = i),
                f !== h &&
                  ((l = w.clone(l, !0, !0)), a && w.merge(s, me(l, "script"))),
                n.call(e[f], l, f);
            if (a)
              for (
                c = s[s.length - 1].ownerDocument, w.map(s, Re), f = 0;
                f < a;
                f++
              )
                (l = s[f]),
                  pe.test(l.type || "") &&
                    !J.access(l, "globalEval") &&
                    w.contains(c, l) &&
                    (l.src && "module" !== (l.type || "").toLowerCase()
                      ? w._evalUrl && w._evalUrl(l.src)
                      : E(l.textContent.replace(ke, ""), c, l));
          }
          return e;
        }
        function Me(e, t, n) {
          for (
            var r, i = t ? w.filter(t, e) : e, o = 0;
            null != (r = i[o]);
            o++
          )
            n || 1 !== r.nodeType || w.cleanData(me(r)),
              r.parentNode &&
                (n && w.contains(r.ownerDocument, r) && ve(me(r, "script")),
                r.parentNode.removeChild(r));
          return e;
        }
        w.extend({
          htmlPrefilter: function(e) {
            return e.replace(Ie, "<$1></$2>");
          },
          clone: function(e, t, n) {
            var r,
              i,
              o,
              s,
              a,
              l,
              u,
              c = e.cloneNode(!0),
              f = w.contains(e.ownerDocument, e);
            if (
              !(
                v.noCloneChecked ||
                (1 !== e.nodeType && 11 !== e.nodeType) ||
                w.isXMLDoc(e)
              )
            )
              for (s = me(c), r = 0, i = (o = me(e)).length; r < i; r++)
                (a = o[r]),
                  (l = s[r]),
                  (u = void 0),
                  "input" === (u = l.nodeName.toLowerCase()) && de.test(a.type)
                    ? (l.checked = a.checked)
                    : ("input" !== u && "textarea" !== u) ||
                      (l.defaultValue = a.defaultValue);
            if (t)
              if (n)
                for (
                  o = o || me(e), s = s || me(c), r = 0, i = o.length;
                  r < i;
                  r++
                )
                  je(o[r], s[r]);
              else je(e, c);
            return (
              (s = me(c, "script")).length > 0 && ve(s, !f && me(e, "script")),
              c
            );
          },
          cleanData: function(e) {
            for (
              var t, n, r, i = w.event.special, o = 0;
              void 0 !== (n = e[o]);
              o++
            )
              if (Y(n)) {
                if ((t = n[J.expando])) {
                  if (t.events)
                    for (r in t.events)
                      i[r]
                        ? w.event.remove(n, r)
                        : w.removeEvent(n, r, t.handle);
                  n[J.expando] = void 0;
                }
                n[Z.expando] && (n[Z.expando] = void 0);
              }
          }
        }),
          w.fn.extend({
            detach: function(e) {
              return Me(this, e, !0);
            },
            remove: function(e) {
              return Me(this, e);
            },
            text: function(e) {
              return G(
                this,
                function(e) {
                  return void 0 === e
                    ? w.text(this)
                    : this.empty().each(function() {
                        (1 !== this.nodeType &&
                          11 !== this.nodeType &&
                          9 !== this.nodeType) ||
                          (this.textContent = e);
                      });
                },
                null,
                e,
                arguments.length
              );
            },
            append: function() {
              return We(this, arguments, function(e) {
                (1 !== this.nodeType &&
                  11 !== this.nodeType &&
                  9 !== this.nodeType) ||
                  Pe(this, e).appendChild(e);
              });
            },
            prepend: function() {
              return We(this, arguments, function(e) {
                if (
                  1 === this.nodeType ||
                  11 === this.nodeType ||
                  9 === this.nodeType
                ) {
                  var t = Pe(this, e);
                  t.insertBefore(e, t.firstChild);
                }
              });
            },
            before: function() {
              return We(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this);
              });
            },
            after: function() {
              return We(this, arguments, function(e) {
                this.parentNode &&
                  this.parentNode.insertBefore(e, this.nextSibling);
              });
            },
            empty: function() {
              for (var e, t = 0; null != (e = this[t]); t++)
                1 === e.nodeType &&
                  (w.cleanData(me(e, !1)), (e.textContent = ""));
              return this;
            },
            clone: function(e, t) {
              return (
                (e = null != e && e),
                (t = null == t ? e : t),
                this.map(function() {
                  return w.clone(this, e, t);
                })
              );
            },
            html: function(e) {
              return G(
                this,
                function(e) {
                  var t = this[0] || {},
                    n = 0,
                    r = this.length;
                  if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                  if (
                    "string" == typeof e &&
                    !Ne.test(e) &&
                    !ge[(he.exec(e) || ["", ""])[1].toLowerCase()]
                  ) {
                    e = w.htmlPrefilter(e);
                    try {
                      for (; n < r; n++)
                        1 === (t = this[n] || {}).nodeType &&
                          (w.cleanData(me(t, !1)), (t.innerHTML = e));
                      t = 0;
                    } catch (i) {}
                  }
                  t && this.empty().append(e);
                },
                null,
                e,
                arguments.length
              );
            },
            replaceWith: function() {
              var e = [];
              return We(
                this,
                arguments,
                function(t) {
                  var n = this.parentNode;
                  w.inArray(this, e) < 0 &&
                    (w.cleanData(me(this)), n && n.replaceChild(t, this));
                },
                e
              );
            }
          }),
          w.each(
            {
              appendTo: "append",
              prependTo: "prepend",
              insertBefore: "before",
              insertAfter: "after",
              replaceAll: "replaceWith"
            },
            function(e, t) {
              w.fn[e] = function(e) {
                for (
                  var n, r = [], i = w(e), o = i.length - 1, s = 0;
                  s <= o;
                  s++
                )
                  (n = s === o ? this : this.clone(!0)),
                    w(i[s])[t](n),
                    c.apply(r, n.get());
                return this.pushStack(r);
              };
            }
          );
        var Fe = new RegExp("^(" + re + ")(?!px)[a-z%]+$", "i"),
          qe = function(e) {
            var t = e.ownerDocument.defaultView;
            return (t && t.opener) || (t = n), t.getComputedStyle(e);
          },
          Ue = new RegExp(oe.join("|"), "i");
        function Be(e, t, n) {
          var r,
            i,
            o,
            s,
            a = e.style;
          return (
            (n = n || qe(e)) &&
              ("" !== (s = n.getPropertyValue(t) || n[t]) ||
                w.contains(e.ownerDocument, e) ||
                (s = w.style(e, t)),
              !v.pixelBoxStyles() &&
                Fe.test(s) &&
                Ue.test(t) &&
                ((r = a.width),
                (i = a.minWidth),
                (o = a.maxWidth),
                (a.minWidth = a.maxWidth = a.width = s),
                (s = n.width),
                (a.width = r),
                (a.minWidth = i),
                (a.maxWidth = o))),
            void 0 !== s ? s + "" : s
          );
        }
        function Ve(e, t) {
          return {
            get: function() {
              if (!e()) return (this.get = t).apply(this, arguments);
              delete this.get;
            }
          };
        }
        !(function() {
          function e() {
            if (c) {
              (u.style.cssText =
                "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                (c.style.cssText =
                  "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                Te.appendChild(u).appendChild(c);
              var e = n.getComputedStyle(c);
              (r = "1%" !== e.top),
                (l = 12 === t(e.marginLeft)),
                (c.style.right = "60%"),
                (a = 36 === t(e.right)),
                (i = 36 === t(e.width)),
                (c.style.position = "absolute"),
                (o = 36 === c.offsetWidth || "absolute"),
                Te.removeChild(u),
                (c = null);
            }
          }
          function t(e) {
            return Math.round(parseFloat(e));
          }
          var r,
            i,
            o,
            a,
            l,
            u = s.createElement("div"),
            c = s.createElement("div");
          c.style &&
            ((c.style.backgroundClip = "content-box"),
            (c.cloneNode(!0).style.backgroundClip = ""),
            (v.clearCloneStyle = "content-box" === c.style.backgroundClip),
            w.extend(v, {
              boxSizingReliable: function() {
                return e(), i;
              },
              pixelBoxStyles: function() {
                return e(), a;
              },
              pixelPosition: function() {
                return e(), r;
              },
              reliableMarginLeft: function() {
                return e(), l;
              },
              scrollboxSize: function() {
                return e(), o;
              }
            }));
        })();
        var Ge = /^(none|table(?!-c[ea]).+)/,
          $e = /^--/,
          Ke = { position: "absolute", visibility: "hidden", display: "block" },
          Qe = { letterSpacing: "0", fontWeight: "400" },
          Xe = ["Webkit", "Moz", "ms"],
          Ye = s.createElement("div").style;
        function ze(e) {
          var t = w.cssProps[e];
          return (
            t ||
              (t = w.cssProps[e] =
                (function(e) {
                  if (e in Ye) return e;
                  for (
                    var t = e[0].toUpperCase() + e.slice(1), n = Xe.length;
                    n--;

                  )
                    if ((e = Xe[n] + t) in Ye) return e;
                })(e) || e),
            t
          );
        }
        function Je(e, t, n) {
          var r = ie.exec(t);
          return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
        }
        function Ze(e, t, n, r, i, o) {
          var s = "width" === t ? 1 : 0,
            a = 0,
            l = 0;
          if (n === (r ? "border" : "content")) return 0;
          for (; s < 4; s += 2)
            "margin" === n && (l += w.css(e, n + oe[s], !0, i)),
              r
                ? ("content" === n && (l -= w.css(e, "padding" + oe[s], !0, i)),
                  "margin" !== n &&
                    (l -= w.css(e, "border" + oe[s] + "Width", !0, i)))
                : ((l += w.css(e, "padding" + oe[s], !0, i)),
                  "padding" !== n
                    ? (l += w.css(e, "border" + oe[s] + "Width", !0, i))
                    : (a += w.css(e, "border" + oe[s] + "Width", !0, i)));
          return (
            !r &&
              o >= 0 &&
              (l += Math.max(
                0,
                Math.ceil(
                  e["offset" + t[0].toUpperCase() + t.slice(1)] -
                    o -
                    l -
                    a -
                    0.5
                )
              )),
            l
          );
        }
        function et(e, t, n) {
          var r = qe(e),
            i = Be(e, t, r),
            o = "border-box" === w.css(e, "boxSizing", !1, r),
            s = o;
          if (Fe.test(i)) {
            if (!n) return i;
            i = "auto";
          }
          return (
            (s = s && (v.boxSizingReliable() || i === e.style[t])),
            ("auto" === i ||
              (!parseFloat(i) && "inline" === w.css(e, "display", !1, r))) &&
              ((i = e["offset" + t[0].toUpperCase() + t.slice(1)]), (s = !0)),
            (i = parseFloat(i) || 0) +
              Ze(e, t, n || (o ? "border" : "content"), s, r, i) +
              "px"
          );
        }
        function tt(e, t, n, r, i) {
          return new tt.prototype.init(e, t, n, r, i);
        }
        w.extend({
          cssHooks: {
            opacity: {
              get: function(e, t) {
                if (t) {
                  var n = Be(e, "opacity");
                  return "" === n ? "1" : n;
                }
              }
            }
          },
          cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
          },
          cssProps: {},
          style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
              var i,
                o,
                s,
                a = X(t),
                l = $e.test(t),
                u = e.style;
              if (
                (l || (t = ze(a)),
                (s = w.cssHooks[t] || w.cssHooks[a]),
                void 0 === n)
              )
                return s && "get" in s && void 0 !== (i = s.get(e, !1, r))
                  ? i
                  : u[t];
              "string" === (o = typeof n) &&
                (i = ie.exec(n)) &&
                i[1] &&
                ((n = le(e, t, i)), (o = "number")),
                null != n &&
                  n == n &&
                  ("number" === o &&
                    (n += (i && i[3]) || (w.cssNumber[a] ? "" : "px")),
                  v.clearCloneStyle ||
                    "" !== n ||
                    0 !== t.indexOf("background") ||
                    (u[t] = "inherit"),
                  (s && "set" in s && void 0 === (n = s.set(e, n, r))) ||
                    (l ? u.setProperty(t, n) : (u[t] = n)));
            }
          },
          css: function(e, t, n, r) {
            var i,
              o,
              s,
              a = X(t);
            return (
              $e.test(t) || (t = ze(a)),
              (s = w.cssHooks[t] || w.cssHooks[a]) &&
                "get" in s &&
                (i = s.get(e, !0, n)),
              void 0 === i && (i = Be(e, t, r)),
              "normal" === i && t in Qe && (i = Qe[t]),
              "" === n || n
                ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i)
                : i
            );
          }
        }),
          w.each(["height", "width"], function(e, t) {
            w.cssHooks[t] = {
              get: function(e, n, r) {
                if (n)
                  return !Ge.test(w.css(e, "display")) ||
                    (e.getClientRects().length &&
                      e.getBoundingClientRect().width)
                    ? et(e, t, r)
                    : ae(e, Ke, function() {
                        return et(e, t, r);
                      });
              },
              set: function(e, n, r) {
                var i,
                  o = qe(e),
                  s = "border-box" === w.css(e, "boxSizing", !1, o),
                  a = r && Ze(e, t, r, s, o);
                return (
                  s &&
                    v.scrollboxSize() === o.position &&
                    (a -= Math.ceil(
                      e["offset" + t[0].toUpperCase() + t.slice(1)] -
                        parseFloat(o[t]) -
                        Ze(e, t, "border", !1, o) -
                        0.5
                    )),
                  a &&
                    (i = ie.exec(n)) &&
                    "px" !== (i[3] || "px") &&
                    ((e.style[t] = n), (n = w.css(e, t))),
                  Je(0, n, a)
                );
              }
            };
          }),
          (w.cssHooks.marginLeft = Ve(v.reliableMarginLeft, function(e, t) {
            if (t)
              return (
                (parseFloat(Be(e, "marginLeft")) ||
                  e.getBoundingClientRect().left -
                    ae(e, { marginLeft: 0 }, function() {
                      return e.getBoundingClientRect().left;
                    })) + "px"
              );
          })),
          w.each({ margin: "", padding: "", border: "Width" }, function(e, t) {
            (w.cssHooks[e + t] = {
              expand: function(n) {
                for (
                  var r = 0,
                    i = {},
                    o = "string" == typeof n ? n.split(" ") : [n];
                  r < 4;
                  r++
                )
                  i[e + oe[r] + t] = o[r] || o[r - 2] || o[0];
                return i;
              }
            }),
              "margin" !== e && (w.cssHooks[e + t].set = Je);
          }),
          w.fn.extend({
            css: function(e, t) {
              return G(
                this,
                function(e, t, n) {
                  var r,
                    i,
                    o = {},
                    s = 0;
                  if (Array.isArray(t)) {
                    for (r = qe(e), i = t.length; s < i; s++)
                      o[t[s]] = w.css(e, t[s], !1, r);
                    return o;
                  }
                  return void 0 !== n ? w.style(e, t, n) : w.css(e, t);
                },
                e,
                t,
                arguments.length > 1
              );
            }
          }),
          (w.Tween = tt),
          (tt.prototype = {
            constructor: tt,
            init: function(e, t, n, r, i, o) {
              (this.elem = e),
                (this.prop = n),
                (this.easing = i || w.easing._default),
                (this.options = t),
                (this.start = this.now = this.cur()),
                (this.end = r),
                (this.unit = o || (w.cssNumber[n] ? "" : "px"));
            },
            cur: function() {
              var e = tt.propHooks[this.prop];
              return e && e.get ? e.get(this) : tt.propHooks._default.get(this);
            },
            run: function(e) {
              var t,
                n = tt.propHooks[this.prop];
              return (
                this.options.duration
                  ? (this.pos = t = w.easing[this.easing](
                      e,
                      this.options.duration * e,
                      0,
                      1,
                      this.options.duration
                    ))
                  : (this.pos = t = e),
                (this.now = (this.end - this.start) * t + this.start),
                this.options.step &&
                  this.options.step.call(this.elem, this.now, this),
                n && n.set ? n.set(this) : tt.propHooks._default.set(this),
                this
              );
            }
          }),
          (tt.prototype.init.prototype = tt.prototype),
          (tt.propHooks = {
            _default: {
              get: function(e) {
                var t;
                return 1 !== e.elem.nodeType ||
                  (null != e.elem[e.prop] && null == e.elem.style[e.prop])
                  ? e.elem[e.prop]
                  : (t = w.css(e.elem, e.prop, "")) && "auto" !== t
                  ? t
                  : 0;
              },
              set: function(e) {
                w.fx.step[e.prop]
                  ? w.fx.step[e.prop](e)
                  : 1 !== e.elem.nodeType ||
                    (null == e.elem.style[w.cssProps[e.prop]] &&
                      !w.cssHooks[e.prop])
                  ? (e.elem[e.prop] = e.now)
                  : w.style(e.elem, e.prop, e.now + e.unit);
              }
            }
          }),
          (tt.propHooks.scrollTop = tt.propHooks.scrollLeft = {
            set: function(e) {
              e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
            }
          }),
          (w.easing = {
            linear: function(e) {
              return e;
            },
            swing: function(e) {
              return 0.5 - Math.cos(e * Math.PI) / 2;
            },
            _default: "swing"
          }),
          (w.fx = tt.prototype.init),
          (w.fx.step = {});
        var nt,
          rt,
          it = /^(?:toggle|show|hide)$/,
          ot = /queueHooks$/;
        function st() {
          rt &&
            (!1 === s.hidden && n.requestAnimationFrame
              ? n.requestAnimationFrame(st)
              : n.setTimeout(st, w.fx.interval),
            w.fx.tick());
        }
        function at() {
          return (
            n.setTimeout(function() {
              nt = void 0;
            }),
            (nt = Date.now())
          );
        }
        function lt(e, t) {
          var n,
            r = 0,
            i = { height: e };
          for (t = t ? 1 : 0; r < 4; r += 2 - t)
            i["margin" + (n = oe[r])] = i["padding" + n] = e;
          return t && (i.opacity = i.width = e), i;
        }
        function ut(e, t, n) {
          for (
            var r,
              i = (ct.tweeners[t] || []).concat(ct.tweeners["*"]),
              o = 0,
              s = i.length;
            o < s;
            o++
          )
            if ((r = i[o].call(n, t, e))) return r;
        }
        function ct(e, t, n) {
          var r,
            i,
            o = 0,
            s = ct.prefilters.length,
            a = w.Deferred().always(function() {
              delete l.elem;
            }),
            l = function() {
              if (i) return !1;
              for (
                var t = nt || at(),
                  n = Math.max(0, u.startTime + u.duration - t),
                  r = 1 - (n / u.duration || 0),
                  o = 0,
                  s = u.tweens.length;
                o < s;
                o++
              )
                u.tweens[o].run(r);
              return (
                a.notifyWith(e, [u, r, n]),
                r < 1 && s
                  ? n
                  : (s || a.notifyWith(e, [u, 1, 0]), a.resolveWith(e, [u]), !1)
              );
            },
            u = a.promise({
              elem: e,
              props: w.extend({}, t),
              opts: w.extend(
                !0,
                { specialEasing: {}, easing: w.easing._default },
                n
              ),
              originalProperties: t,
              originalOptions: n,
              startTime: nt || at(),
              duration: n.duration,
              tweens: [],
              createTween: function(t, n) {
                var r = w.Tween(
                  e,
                  u.opts,
                  t,
                  n,
                  u.opts.specialEasing[t] || u.opts.easing
                );
                return u.tweens.push(r), r;
              },
              stop: function(t) {
                var n = 0,
                  r = t ? u.tweens.length : 0;
                if (i) return this;
                for (i = !0; n < r; n++) u.tweens[n].run(1);
                return (
                  t
                    ? (a.notifyWith(e, [u, 1, 0]), a.resolveWith(e, [u, t]))
                    : a.rejectWith(e, [u, t]),
                  this
                );
              }
            }),
            c = u.props;
          for (
            !(function(e, t) {
              var n, r, i, o, s;
              for (n in e)
                if (
                  ((i = t[(r = X(n))]),
                  (o = e[n]),
                  Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
                  n !== r && ((e[r] = o), delete e[n]),
                  (s = w.cssHooks[r]) && ("expand" in s))
                )
                  for (n in ((o = s.expand(o)), delete e[r], o))
                    (n in e) || ((e[n] = o[n]), (t[n] = i));
                else t[r] = i;
            })(c, u.opts.specialEasing);
            o < s;
            o++
          )
            if ((r = ct.prefilters[o].call(u, e, c, u.opts)))
              return (
                y(r.stop) &&
                  (w._queueHooks(u.elem, u.opts.queue).stop = r.stop.bind(r)),
                r
              );
          return (
            w.map(c, ut, u),
            y(u.opts.start) && u.opts.start.call(e, u),
            u
              .progress(u.opts.progress)
              .done(u.opts.done, u.opts.complete)
              .fail(u.opts.fail)
              .always(u.opts.always),
            w.fx.timer(w.extend(l, { elem: e, anim: u, queue: u.opts.queue })),
            u
          );
        }
        (w.Animation = w.extend(ct, {
          tweeners: {
            "*": [
              function(e, t) {
                var n = this.createTween(e, t);
                return le(n.elem, e, ie.exec(t), n), n;
              }
            ]
          },
          tweener: function(e, t) {
            y(e) ? ((t = e), (e = ["*"])) : (e = e.match(W));
            for (var n, r = 0, i = e.length; r < i; r++)
              (n = e[r]),
                (ct.tweeners[n] = ct.tweeners[n] || []),
                ct.tweeners[n].unshift(t);
          },
          prefilters: [
            function(e, t, n) {
              var r,
                i,
                o,
                s,
                a,
                l,
                u,
                c,
                f = "width" in t || "height" in t,
                d = this,
                h = {},
                p = e.style,
                g = e.nodeType && se(e),
                m = J.get(e, "fxshow");
              for (r in (n.queue ||
                (null == (s = w._queueHooks(e, "fx")).unqueued &&
                  ((s.unqueued = 0),
                  (a = s.empty.fire),
                  (s.empty.fire = function() {
                    s.unqueued || a();
                  })),
                s.unqueued++,
                d.always(function() {
                  d.always(function() {
                    s.unqueued--, w.queue(e, "fx").length || s.empty.fire();
                  });
                })),
              t))
                if (((i = t[r]), it.test(i))) {
                  if (
                    (delete t[r],
                    (o = o || "toggle" === i),
                    i === (g ? "hide" : "show"))
                  ) {
                    if ("show" !== i || !m || void 0 === m[r]) continue;
                    g = !0;
                  }
                  h[r] = (m && m[r]) || w.style(e, r);
                }
              if ((l = !w.isEmptyObject(t)) || !w.isEmptyObject(h))
                for (r in (f &&
                  1 === e.nodeType &&
                  ((n.overflow = [p.overflow, p.overflowX, p.overflowY]),
                  null == (u = m && m.display) && (u = J.get(e, "display")),
                  "none" === (c = w.css(e, "display")) &&
                    (u
                      ? (c = u)
                      : (fe([e], !0),
                        (u = e.style.display || u),
                        (c = w.css(e, "display")),
                        fe([e]))),
                  ("inline" === c || ("inline-block" === c && null != u)) &&
                    "none" === w.css(e, "float") &&
                    (l ||
                      (d.done(function() {
                        p.display = u;
                      }),
                      null == u &&
                        ((c = p.display), (u = "none" === c ? "" : c))),
                    (p.display = "inline-block"))),
                n.overflow &&
                  ((p.overflow = "hidden"),
                  d.always(function() {
                    (p.overflow = n.overflow[0]),
                      (p.overflowX = n.overflow[1]),
                      (p.overflowY = n.overflow[2]);
                  })),
                (l = !1),
                h))
                  l ||
                    (m
                      ? "hidden" in m && (g = m.hidden)
                      : (m = J.access(e, "fxshow", { display: u })),
                    o && (m.hidden = !g),
                    g && fe([e], !0),
                    d.done(function() {
                      for (r in (g || fe([e]), J.remove(e, "fxshow"), h))
                        w.style(e, r, h[r]);
                    })),
                    (l = ut(g ? m[r] : 0, r, d)),
                    r in m ||
                      ((m[r] = l.start),
                      g && ((l.end = l.start), (l.start = 0)));
            }
          ],
          prefilter: function(e, t) {
            t ? ct.prefilters.unshift(e) : ct.prefilters.push(e);
          }
        })),
          (w.speed = function(e, t, n) {
            var r =
              e && "object" == typeof e
                ? w.extend({}, e)
                : {
                    complete: n || (!n && t) || (y(e) && e),
                    duration: e,
                    easing: (n && t) || (t && !y(t) && t)
                  };
            return (
              w.fx.off
                ? (r.duration = 0)
                : "number" != typeof r.duration &&
                  (r.duration in w.fx.speeds
                    ? (r.duration = w.fx.speeds[r.duration])
                    : (r.duration = w.fx.speeds._default)),
              (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
              (r.old = r.complete),
              (r.complete = function() {
                y(r.old) && r.old.call(this),
                  r.queue && w.dequeue(this, r.queue);
              }),
              r
            );
          }),
          w.fn.extend({
            fadeTo: function(e, t, n, r) {
              return this.filter(se)
                .css("opacity", 0)
                .show()
                .end()
                .animate({ opacity: t }, e, n, r);
            },
            animate: function(e, t, n, r) {
              var i = w.isEmptyObject(e),
                o = w.speed(t, n, r),
                s = function() {
                  var t = ct(this, w.extend({}, e), o);
                  (i || J.get(this, "finish")) && t.stop(!0);
                };
              return (
                (s.finish = s),
                i || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
              );
            },
            stop: function(e, t, n) {
              var r = function(e) {
                var t = e.stop;
                delete e.stop, t(n);
              };
              return (
                "string" != typeof e && ((n = t), (t = e), (e = void 0)),
                t && !1 !== e && this.queue(e || "fx", []),
                this.each(function() {
                  var t = !0,
                    i = null != e && e + "queueHooks",
                    o = w.timers,
                    s = J.get(this);
                  if (i) s[i] && s[i].stop && r(s[i]);
                  else for (i in s) s[i] && s[i].stop && ot.test(i) && r(s[i]);
                  for (i = o.length; i--; )
                    o[i].elem !== this ||
                      (null != e && o[i].queue !== e) ||
                      (o[i].anim.stop(n), (t = !1), o.splice(i, 1));
                  (!t && n) || w.dequeue(this, e);
                })
              );
            },
            finish: function(e) {
              return (
                !1 !== e && (e = e || "fx"),
                this.each(function() {
                  var t,
                    n = J.get(this),
                    r = n[e + "queue"],
                    i = n[e + "queueHooks"],
                    o = w.timers,
                    s = r ? r.length : 0;
                  for (
                    n.finish = !0,
                      w.queue(this, e, []),
                      i && i.stop && i.stop.call(this, !0),
                      t = o.length;
                    t--;

                  )
                    o[t].elem === this &&
                      o[t].queue === e &&
                      (o[t].anim.stop(!0), o.splice(t, 1));
                  for (t = 0; t < s; t++)
                    r[t] && r[t].finish && r[t].finish.call(this);
                  delete n.finish;
                })
              );
            }
          }),
          w.each(["toggle", "show", "hide"], function(e, t) {
            var n = w.fn[t];
            w.fn[t] = function(e, r, i) {
              return null == e || "boolean" == typeof e
                ? n.apply(this, arguments)
                : this.animate(lt(t, !0), e, r, i);
            };
          }),
          w.each(
            {
              slideDown: lt("show"),
              slideUp: lt("hide"),
              slideToggle: lt("toggle"),
              fadeIn: { opacity: "show" },
              fadeOut: { opacity: "hide" },
              fadeToggle: { opacity: "toggle" }
            },
            function(e, t) {
              w.fn[e] = function(e, n, r) {
                return this.animate(t, e, n, r);
              };
            }
          ),
          (w.timers = []),
          (w.fx.tick = function() {
            var e,
              t = 0,
              n = w.timers;
            for (nt = Date.now(); t < n.length; t++)
              (e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || w.fx.stop(), (nt = void 0);
          }),
          (w.fx.timer = function(e) {
            w.timers.push(e), w.fx.start();
          }),
          (w.fx.interval = 13),
          (w.fx.start = function() {
            rt || ((rt = !0), st());
          }),
          (w.fx.stop = function() {
            rt = null;
          }),
          (w.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
          (w.fn.delay = function(e, t) {
            return (
              (e = (w.fx && w.fx.speeds[e]) || e),
              (t = t || "fx"),
              this.queue(t, function(t, r) {
                var i = n.setTimeout(t, e);
                r.stop = function() {
                  n.clearTimeout(i);
                };
              })
            );
          }),
          (function() {
            var e = s.createElement("input"),
              t = s
                .createElement("select")
                .appendChild(s.createElement("option"));
            (e.type = "checkbox"),
              (v.checkOn = "" !== e.value),
              (v.optSelected = t.selected),
              ((e = s.createElement("input")).value = "t"),
              (e.type = "radio"),
              (v.radioValue = "t" === e.value);
          })();
        var ft,
          dt = w.expr.attrHandle;
        w.fn.extend({
          attr: function(e, t) {
            return G(this, w.attr, e, t, arguments.length > 1);
          },
          removeAttr: function(e) {
            return this.each(function() {
              w.removeAttr(this, e);
            });
          }
        }),
          w.extend({
            attr: function(e, t, n) {
              var r,
                i,
                o = e.nodeType;
              if (3 !== o && 8 !== o && 2 !== o)
                return void 0 === e.getAttribute
                  ? w.prop(e, t, n)
                  : ((1 === o && w.isXMLDoc(e)) ||
                      (i =
                        w.attrHooks[t.toLowerCase()] ||
                        (w.expr.match.bool.test(t) ? ft : void 0)),
                    void 0 !== n
                      ? null === n
                        ? void w.removeAttr(e, t)
                        : i && "set" in i && void 0 !== (r = i.set(e, n, t))
                        ? r
                        : (e.setAttribute(t, n + ""), n)
                      : i && "get" in i && null !== (r = i.get(e, t))
                      ? r
                      : null == (r = w.find.attr(e, t))
                      ? void 0
                      : r);
            },
            attrHooks: {
              type: {
                set: function(e, t) {
                  if (!v.radioValue && "radio" === t && I(e, "input")) {
                    var n = e.value;
                    return e.setAttribute("type", t), n && (e.value = n), t;
                  }
                }
              }
            },
            removeAttr: function(e, t) {
              var n,
                r = 0,
                i = t && t.match(W);
              if (i && 1 === e.nodeType)
                for (; (n = i[r++]); ) e.removeAttribute(n);
            }
          }),
          (ft = {
            set: function(e, t, n) {
              return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n;
            }
          }),
          w.each(w.expr.match.bool.source.match(/\w+/g), function(e, t) {
            var n = dt[t] || w.find.attr;
            dt[t] = function(e, t, r) {
              var i,
                o,
                s = t.toLowerCase();
              return (
                r ||
                  ((o = dt[s]),
                  (dt[s] = i),
                  (i = null != n(e, t, r) ? s : null),
                  (dt[s] = o)),
                i
              );
            };
          });
        var ht = /^(?:input|select|textarea|button)$/i,
          pt = /^(?:a|area)$/i;
        function gt(e) {
          return (e.match(W) || []).join(" ");
        }
        function mt(e) {
          return (e.getAttribute && e.getAttribute("class")) || "";
        }
        function vt(e) {
          return Array.isArray(e)
            ? e
            : ("string" == typeof e && e.match(W)) || [];
        }
        w.fn.extend({
          prop: function(e, t) {
            return G(this, w.prop, e, t, arguments.length > 1);
          },
          removeProp: function(e) {
            return this.each(function() {
              delete this[w.propFix[e] || e];
            });
          }
        }),
          w.extend({
            prop: function(e, t, n) {
              var r,
                i,
                o = e.nodeType;
              if (3 !== o && 8 !== o && 2 !== o)
                return (
                  (1 === o && w.isXMLDoc(e)) ||
                    ((t = w.propFix[t] || t), (i = w.propHooks[t])),
                  void 0 !== n
                    ? i && "set" in i && void 0 !== (r = i.set(e, n, t))
                      ? r
                      : (e[t] = n)
                    : i && "get" in i && null !== (r = i.get(e, t))
                    ? r
                    : e[t]
                );
            },
            propHooks: {
              tabIndex: {
                get: function(e) {
                  var t = w.find.attr(e, "tabindex");
                  return t
                    ? parseInt(t, 10)
                    : ht.test(e.nodeName) || (pt.test(e.nodeName) && e.href)
                    ? 0
                    : -1;
                }
              }
            },
            propFix: { for: "htmlFor", class: "className" }
          }),
          v.optSelected ||
            (w.propHooks.selected = {
              get: function(e) {
                var t = e.parentNode;
                return t && t.parentNode && t.parentNode.selectedIndex, null;
              },
              set: function(e) {
                var t = e.parentNode;
                t &&
                  (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
              }
            }),
          w.each(
            [
              "tabIndex",
              "readOnly",
              "maxLength",
              "cellSpacing",
              "cellPadding",
              "rowSpan",
              "colSpan",
              "useMap",
              "frameBorder",
              "contentEditable"
            ],
            function() {
              w.propFix[this.toLowerCase()] = this;
            }
          ),
          w.fn.extend({
            addClass: function(e) {
              var t,
                n,
                r,
                i,
                o,
                s,
                a,
                l = 0;
              if (y(e))
                return this.each(function(t) {
                  w(this).addClass(e.call(this, t, mt(this)));
                });
              if ((t = vt(e)).length)
                for (; (n = this[l++]); )
                  if (
                    ((i = mt(n)), (r = 1 === n.nodeType && " " + gt(i) + " "))
                  ) {
                    for (s = 0; (o = t[s++]); )
                      r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                    i !== (a = gt(r)) && n.setAttribute("class", a);
                  }
              return this;
            },
            removeClass: function(e) {
              var t,
                n,
                r,
                i,
                o,
                s,
                a,
                l = 0;
              if (y(e))
                return this.each(function(t) {
                  w(this).removeClass(e.call(this, t, mt(this)));
                });
              if (!arguments.length) return this.attr("class", "");
              if ((t = vt(e)).length)
                for (; (n = this[l++]); )
                  if (
                    ((i = mt(n)), (r = 1 === n.nodeType && " " + gt(i) + " "))
                  ) {
                    for (s = 0; (o = t[s++]); )
                      for (; r.indexOf(" " + o + " ") > -1; )
                        r = r.replace(" " + o + " ", " ");
                    i !== (a = gt(r)) && n.setAttribute("class", a);
                  }
              return this;
            },
            toggleClass: function(e, t) {
              var n = typeof e,
                r = "string" === n || Array.isArray(e);
              return "boolean" == typeof t && r
                ? t
                  ? this.addClass(e)
                  : this.removeClass(e)
                : y(e)
                ? this.each(function(n) {
                    w(this).toggleClass(e.call(this, n, mt(this), t), t);
                  })
                : this.each(function() {
                    var t, i, o, s;
                    if (r)
                      for (i = 0, o = w(this), s = vt(e); (t = s[i++]); )
                        o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                    else
                      (void 0 !== e && "boolean" !== n) ||
                        ((t = mt(this)) && J.set(this, "__className__", t),
                        this.setAttribute &&
                          this.setAttribute(
                            "class",
                            t || !1 === e
                              ? ""
                              : J.get(this, "__className__") || ""
                          ));
                  });
            },
            hasClass: function(e) {
              var t,
                n,
                r = 0;
              for (t = " " + e + " "; (n = this[r++]); )
                if (1 === n.nodeType && (" " + gt(mt(n)) + " ").indexOf(t) > -1)
                  return !0;
              return !1;
            }
          });
        var yt = /\r/g;
        w.fn.extend({
          val: function(e) {
            var t,
              n,
              r,
              i = this[0];
            return arguments.length
              ? ((r = y(e)),
                this.each(function(n) {
                  var i;
                  1 === this.nodeType &&
                    (null == (i = r ? e.call(this, n, w(this).val()) : e)
                      ? (i = "")
                      : "number" == typeof i
                      ? (i += "")
                      : Array.isArray(i) &&
                        (i = w.map(i, function(e) {
                          return null == e ? "" : e + "";
                        })),
                    ((t =
                      w.valHooks[this.type] ||
                      w.valHooks[this.nodeName.toLowerCase()]) &&
                      "set" in t &&
                      void 0 !== t.set(this, i, "value")) ||
                      (this.value = i));
                }))
              : i
              ? (t =
                  w.valHooks[i.type] || w.valHooks[i.nodeName.toLowerCase()]) &&
                "get" in t &&
                void 0 !== (n = t.get(i, "value"))
                ? n
                : "string" == typeof (n = i.value)
                ? n.replace(yt, "")
                : null == n
                ? ""
                : n
              : void 0;
          }
        }),
          w.extend({
            valHooks: {
              option: {
                get: function(e) {
                  var t = w.find.attr(e, "value");
                  return null != t ? t : gt(w.text(e));
                }
              },
              select: {
                get: function(e) {
                  var t,
                    n,
                    r,
                    i = e.options,
                    o = e.selectedIndex,
                    s = "select-one" === e.type,
                    a = s ? null : [],
                    l = s ? o + 1 : i.length;
                  for (r = o < 0 ? l : s ? o : 0; r < l; r++)
                    if (
                      ((n = i[r]).selected || r === o) &&
                      !n.disabled &&
                      (!n.parentNode.disabled || !I(n.parentNode, "optgroup"))
                    ) {
                      if (((t = w(n).val()), s)) return t;
                      a.push(t);
                    }
                  return a;
                },
                set: function(e, t) {
                  for (
                    var n, r, i = e.options, o = w.makeArray(t), s = i.length;
                    s--;

                  )
                    ((r = i[s]).selected =
                      w.inArray(w.valHooks.option.get(r), o) > -1) && (n = !0);
                  return n || (e.selectedIndex = -1), o;
                }
              }
            }
          }),
          w.each(["radio", "checkbox"], function() {
            (w.valHooks[this] = {
              set: function(e, t) {
                if (Array.isArray(t))
                  return (e.checked = w.inArray(w(e).val(), t) > -1);
              }
            }),
              v.checkOn ||
                (w.valHooks[this].get = function(e) {
                  return null === e.getAttribute("value") ? "on" : e.value;
                });
          }),
          (v.focusin = "onfocusin" in n);
        var _t = /^(?:focusinfocus|focusoutblur)$/,
          bt = function(e) {
            e.stopPropagation();
          };
        w.extend(w.event, {
          trigger: function(e, t, r, i) {
            var o,
              a,
              l,
              u,
              c,
              f,
              d,
              h,
              g = [r || s],
              m = p.call(e, "type") ? e.type : e,
              v = p.call(e, "namespace") ? e.namespace.split(".") : [];
            if (
              ((a = h = l = r = r || s),
              3 !== r.nodeType &&
                8 !== r.nodeType &&
                !_t.test(m + w.event.triggered) &&
                (m.indexOf(".") > -1 &&
                  ((v = m.split(".")), (m = v.shift()), v.sort()),
                (c = m.indexOf(":") < 0 && "on" + m),
                ((e = e[w.expando]
                  ? e
                  : new w.Event(m, "object" == typeof e && e)).isTrigger = i
                  ? 2
                  : 3),
                (e.namespace = v.join(".")),
                (e.rnamespace = e.namespace
                  ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)")
                  : null),
                (e.result = void 0),
                e.target || (e.target = r),
                (t = null == t ? [e] : w.makeArray(t, [e])),
                (d = w.event.special[m] || {}),
                i || !d.trigger || !1 !== d.trigger.apply(r, t)))
            ) {
              if (!i && !d.noBubble && !_(r)) {
                for (
                  u = d.delegateType || m, _t.test(u + m) || (a = a.parentNode);
                  a;
                  a = a.parentNode
                )
                  g.push(a), (l = a);
                l === (r.ownerDocument || s) &&
                  g.push(l.defaultView || l.parentWindow || n);
              }
              for (o = 0; (a = g[o++]) && !e.isPropagationStopped(); )
                (h = a),
                  (e.type = o > 1 ? u : d.bindType || m),
                  (f =
                    (J.get(a, "events") || {})[e.type] && J.get(a, "handle")) &&
                    f.apply(a, t),
                  (f = c && a[c]) &&
                    f.apply &&
                    Y(a) &&
                    ((e.result = f.apply(a, t)),
                    !1 === e.result && e.preventDefault());
              return (
                (e.type = m),
                i ||
                  e.isDefaultPrevented() ||
                  (d._default && !1 !== d._default.apply(g.pop(), t)) ||
                  !Y(r) ||
                  (c &&
                    y(r[m]) &&
                    !_(r) &&
                    ((l = r[c]) && (r[c] = null),
                    (w.event.triggered = m),
                    e.isPropagationStopped() && h.addEventListener(m, bt),
                    r[m](),
                    e.isPropagationStopped() && h.removeEventListener(m, bt),
                    (w.event.triggered = void 0),
                    l && (r[c] = l))),
                e.result
              );
            }
          },
          simulate: function(e, t, n) {
            var r = w.extend(new w.Event(), n, { type: e, isSimulated: !0 });
            w.event.trigger(r, null, t);
          }
        }),
          w.fn.extend({
            trigger: function(e, t) {
              return this.each(function() {
                w.event.trigger(e, t, this);
              });
            },
            triggerHandler: function(e, t) {
              var n = this[0];
              if (n) return w.event.trigger(e, t, n, !0);
            }
          }),
          v.focusin ||
            w.each({ focus: "focusin", blur: "focusout" }, function(e, t) {
              var n = function(e) {
                w.event.simulate(t, e.target, w.event.fix(e));
              };
              w.event.special[t] = {
                setup: function() {
                  var r = this.ownerDocument || this,
                    i = J.access(r, t);
                  i || r.addEventListener(e, n, !0),
                    J.access(r, t, (i || 0) + 1);
                },
                teardown: function() {
                  var r = this.ownerDocument || this,
                    i = J.access(r, t) - 1;
                  i
                    ? J.access(r, t, i)
                    : (r.removeEventListener(e, n, !0), J.remove(r, t));
                }
              };
            });
        var Et = n.location,
          Tt = Date.now(),
          wt = /\?/;
        w.parseXML = function(e) {
          var t;
          if (!e || "string" != typeof e) return null;
          try {
            t = new n.DOMParser().parseFromString(e, "text/xml");
          } catch (r) {
            t = void 0;
          }
          return (
            (t && !t.getElementsByTagName("parsererror").length) ||
              w.error("Invalid XML: " + e),
            t
          );
        };
        var Ct = /\[\]$/,
          St = /\r?\n/g,
          At = /^(?:submit|button|image|reset|file)$/i,
          Dt = /^(?:input|select|textarea|keygen)/i;
        function xt(e, t, n, r) {
          var i;
          if (Array.isArray(t))
            w.each(t, function(t, i) {
              n || Ct.test(e)
                ? r(e, i)
                : xt(
                    e +
                      "[" +
                      ("object" == typeof i && null != i ? t : "") +
                      "]",
                    i,
                    n,
                    r
                  );
            });
          else if (n || "object" !== T(t)) r(e, t);
          else for (i in t) xt(e + "[" + i + "]", t[i], n, r);
        }
        (w.param = function(e, t) {
          var n,
            r = [],
            i = function(e, t) {
              var n = y(t) ? t() : t;
              r[r.length] =
                encodeURIComponent(e) +
                "=" +
                encodeURIComponent(null == n ? "" : n);
            };
          if (Array.isArray(e) || (e.jquery && !w.isPlainObject(e)))
            w.each(e, function() {
              i(this.name, this.value);
            });
          else for (n in e) xt(n, e[n], t, i);
          return r.join("&");
        }),
          w.fn.extend({
            serialize: function() {
              return w.param(this.serializeArray());
            },
            serializeArray: function() {
              return this.map(function() {
                var e = w.prop(this, "elements");
                return e ? w.makeArray(e) : this;
              })
                .filter(function() {
                  var e = this.type;
                  return (
                    this.name &&
                    !w(this).is(":disabled") &&
                    Dt.test(this.nodeName) &&
                    !At.test(e) &&
                    (this.checked || !de.test(e))
                  );
                })
                .map(function(e, t) {
                  var n = w(this).val();
                  return null == n
                    ? null
                    : Array.isArray(n)
                    ? w.map(n, function(e) {
                        return { name: t.name, value: e.replace(St, "\r\n") };
                      })
                    : { name: t.name, value: n.replace(St, "\r\n") };
                })
                .get();
            }
          });
        var Ot = /%20/g,
          It = /#.*$/,
          Nt = /([?&])_=[^&]*/,
          Lt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
          kt = /^(?:GET|HEAD)$/,
          Pt = /^\/\//,
          Ht = {},
          Rt = {},
          jt = "*/".concat("*"),
          Wt = s.createElement("a");
        function Mt(e) {
          return function(t, n) {
            "string" != typeof t && ((n = t), (t = "*"));
            var r,
              i = 0,
              o = t.toLowerCase().match(W) || [];
            if (y(n))
              for (; (r = o[i++]); )
                "+" === r[0]
                  ? ((r = r.slice(1) || "*"), (e[r] = e[r] || []).unshift(n))
                  : (e[r] = e[r] || []).push(n);
          };
        }
        function Ft(e, t, n, r) {
          var i = {},
            o = e === Rt;
          function s(a) {
            var l;
            return (
              (i[a] = !0),
              w.each(e[a] || [], function(e, a) {
                var u = a(t, n, r);
                return "string" != typeof u || o || i[u]
                  ? o
                    ? !(l = u)
                    : void 0
                  : (t.dataTypes.unshift(u), s(u), !1);
              }),
              l
            );
          }
          return s(t.dataTypes[0]) || (!i["*"] && s("*"));
        }
        function qt(e, t) {
          var n,
            r,
            i = w.ajaxSettings.flatOptions || {};
          for (n in t)
            void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
          return r && w.extend(!0, e, r), e;
        }
        (Wt.href = Et.href),
          w.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
              url: Et.href,
              type: "GET",
              isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
                Et.protocol
              ),
              global: !0,
              processData: !0,
              async: !0,
              contentType: "application/x-www-form-urlencoded; charset=UTF-8",
              accepts: {
                "*": jt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
              },
              contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
              responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
              },
              converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": w.parseXML
              },
              flatOptions: { url: !0, context: !0 }
            },
            ajaxSetup: function(e, t) {
              return t ? qt(qt(e, w.ajaxSettings), t) : qt(w.ajaxSettings, e);
            },
            ajaxPrefilter: Mt(Ht),
            ajaxTransport: Mt(Rt),
            ajax: function(e, t) {
              "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
              var r,
                i,
                o,
                a,
                l,
                u,
                c,
                f,
                d,
                h,
                p = w.ajaxSetup({}, t),
                g = p.context || p,
                m = p.context && (g.nodeType || g.jquery) ? w(g) : w.event,
                v = w.Deferred(),
                y = w.Callbacks("once memory"),
                _ = p.statusCode || {},
                b = {},
                E = {},
                T = "canceled",
                C = {
                  readyState: 0,
                  getResponseHeader: function(e) {
                    var t;
                    if (c) {
                      if (!a)
                        for (a = {}; (t = Lt.exec(o)); )
                          a[t[1].toLowerCase()] = t[2];
                      t = a[e.toLowerCase()];
                    }
                    return null == t ? null : t;
                  },
                  getAllResponseHeaders: function() {
                    return c ? o : null;
                  },
                  setRequestHeader: function(e, t) {
                    return (
                      null == c &&
                        ((e = E[e.toLowerCase()] = E[e.toLowerCase()] || e),
                        (b[e] = t)),
                      this
                    );
                  },
                  overrideMimeType: function(e) {
                    return null == c && (p.mimeType = e), this;
                  },
                  statusCode: function(e) {
                    var t;
                    if (e)
                      if (c) C.always(e[C.status]);
                      else for (t in e) _[t] = [_[t], e[t]];
                    return this;
                  },
                  abort: function(e) {
                    var t = e || T;
                    return r && r.abort(t), S(0, t), this;
                  }
                };
              if (
                (v.promise(C),
                (p.url = ((e || p.url || Et.href) + "").replace(
                  Pt,
                  Et.protocol + "//"
                )),
                (p.type = t.method || t.type || p.method || p.type),
                (p.dataTypes = (p.dataType || "*").toLowerCase().match(W) || [
                  ""
                ]),
                null == p.crossDomain)
              ) {
                u = s.createElement("a");
                try {
                  (u.href = p.url),
                    (u.href = u.href),
                    (p.crossDomain =
                      Wt.protocol + "//" + Wt.host !=
                      u.protocol + "//" + u.host);
                } catch (A) {
                  p.crossDomain = !0;
                }
              }
              if (
                (p.data &&
                  p.processData &&
                  "string" != typeof p.data &&
                  (p.data = w.param(p.data, p.traditional)),
                Ft(Ht, p, t, C),
                c)
              )
                return C;
              for (d in ((f = w.event && p.global) &&
                0 == w.active++ &&
                w.event.trigger("ajaxStart"),
              (p.type = p.type.toUpperCase()),
              (p.hasContent = !kt.test(p.type)),
              (i = p.url.replace(It, "")),
              p.hasContent
                ? p.data &&
                  p.processData &&
                  0 ===
                    (p.contentType || "").indexOf(
                      "application/x-www-form-urlencoded"
                    ) &&
                  (p.data = p.data.replace(Ot, "+"))
                : ((h = p.url.slice(i.length)),
                  p.data &&
                    (p.processData || "string" == typeof p.data) &&
                    ((i += (wt.test(i) ? "&" : "?") + p.data), delete p.data),
                  !1 === p.cache &&
                    ((i = i.replace(Nt, "$1")),
                    (h = (wt.test(i) ? "&" : "?") + "_=" + Tt++ + h)),
                  (p.url = i + h)),
              p.ifModified &&
                (w.lastModified[i] &&
                  C.setRequestHeader("If-Modified-Since", w.lastModified[i]),
                w.etag[i] && C.setRequestHeader("If-None-Match", w.etag[i])),
              ((p.data && p.hasContent && !1 !== p.contentType) ||
                t.contentType) &&
                C.setRequestHeader("Content-Type", p.contentType),
              C.setRequestHeader(
                "Accept",
                p.dataTypes[0] && p.accepts[p.dataTypes[0]]
                  ? p.accepts[p.dataTypes[0]] +
                      ("*" !== p.dataTypes[0] ? ", " + jt + "; q=0.01" : "")
                  : p.accepts["*"]
              ),
              p.headers))
                C.setRequestHeader(d, p.headers[d]);
              if (p.beforeSend && (!1 === p.beforeSend.call(g, C, p) || c))
                return C.abort();
              if (
                ((T = "abort"),
                y.add(p.complete),
                C.done(p.success),
                C.fail(p.error),
                (r = Ft(Rt, p, t, C)))
              ) {
                if (((C.readyState = 1), f && m.trigger("ajaxSend", [C, p]), c))
                  return C;
                p.async &&
                  p.timeout > 0 &&
                  (l = n.setTimeout(function() {
                    C.abort("timeout");
                  }, p.timeout));
                try {
                  (c = !1), r.send(b, S);
                } catch (A) {
                  if (c) throw A;
                  S(-1, A);
                }
              } else S(-1, "No Transport");
              function S(e, t, s, a) {
                var u,
                  d,
                  h,
                  b,
                  E,
                  T = t;
                c ||
                  ((c = !0),
                  l && n.clearTimeout(l),
                  (r = void 0),
                  (o = a || ""),
                  (C.readyState = e > 0 ? 4 : 0),
                  (u = (e >= 200 && e < 300) || 304 === e),
                  s &&
                    (b = (function(e, t, n) {
                      for (
                        var r, i, o, s, a = e.contents, l = e.dataTypes;
                        "*" === l[0];

                      )
                        l.shift(),
                          void 0 === r &&
                            (r =
                              e.mimeType ||
                              t.getResponseHeader("Content-Type"));
                      if (r)
                        for (i in a)
                          if (a[i] && a[i].test(r)) {
                            l.unshift(i);
                            break;
                          }
                      if (l[0] in n) o = l[0];
                      else {
                        for (i in n) {
                          if (!l[0] || e.converters[i + " " + l[0]]) {
                            o = i;
                            break;
                          }
                          s || (s = i);
                        }
                        o = o || s;
                      }
                      if (o) return o !== l[0] && l.unshift(o), n[o];
                    })(p, C, s)),
                  (b = (function(e, t, n, r) {
                    var i,
                      o,
                      s,
                      a,
                      l,
                      u = {},
                      c = e.dataTypes.slice();
                    if (c[1])
                      for (s in e.converters)
                        u[s.toLowerCase()] = e.converters[s];
                    for (o = c.shift(); o; )
                      if (
                        (e.responseFields[o] && (n[e.responseFields[o]] = t),
                        !l &&
                          r &&
                          e.dataFilter &&
                          (t = e.dataFilter(t, e.dataType)),
                        (l = o),
                        (o = c.shift()))
                      )
                        if ("*" === o) o = l;
                        else if ("*" !== l && l !== o) {
                          if (!(s = u[l + " " + o] || u["* " + o]))
                            for (i in u)
                              if (
                                (a = i.split(" "))[1] === o &&
                                (s = u[l + " " + a[0]] || u["* " + a[0]])
                              ) {
                                !0 === s
                                  ? (s = u[i])
                                  : !0 !== u[i] &&
                                    ((o = a[0]), c.unshift(a[1]));
                                break;
                              }
                          if (!0 !== s)
                            if (s && e.throws) t = s(t);
                            else
                              try {
                                t = s(t);
                              } catch (A) {
                                return {
                                  state: "parsererror",
                                  error: s
                                    ? A
                                    : "No conversion from " + l + " to " + o
                                };
                              }
                        }
                    return { state: "success", data: t };
                  })(p, b, C, u)),
                  u
                    ? (p.ifModified &&
                        ((E = C.getResponseHeader("Last-Modified")) &&
                          (w.lastModified[i] = E),
                        (E = C.getResponseHeader("etag")) && (w.etag[i] = E)),
                      204 === e || "HEAD" === p.type
                        ? (T = "nocontent")
                        : 304 === e
                        ? (T = "notmodified")
                        : ((T = b.state), (d = b.data), (u = !(h = b.error))))
                    : ((h = T), (!e && T) || ((T = "error"), e < 0 && (e = 0))),
                  (C.status = e),
                  (C.statusText = (t || T) + ""),
                  u ? v.resolveWith(g, [d, T, C]) : v.rejectWith(g, [C, T, h]),
                  C.statusCode(_),
                  (_ = void 0),
                  f &&
                    m.trigger(u ? "ajaxSuccess" : "ajaxError", [
                      C,
                      p,
                      u ? d : h
                    ]),
                  y.fireWith(g, [C, T]),
                  f &&
                    (m.trigger("ajaxComplete", [C, p]),
                    --w.active || w.event.trigger("ajaxStop")));
              }
              return C;
            },
            getJSON: function(e, t, n) {
              return w.get(e, t, n, "json");
            },
            getScript: function(e, t) {
              return w.get(e, void 0, t, "script");
            }
          }),
          w.each(["get", "post"], function(e, t) {
            w[t] = function(e, n, r, i) {
              return (
                y(n) && ((i = i || r), (r = n), (n = void 0)),
                w.ajax(
                  w.extend(
                    { url: e, type: t, dataType: i, data: n, success: r },
                    w.isPlainObject(e) && e
                  )
                )
              );
            };
          }),
          (w._evalUrl = function(e) {
            return w.ajax({
              url: e,
              type: "GET",
              dataType: "script",
              cache: !0,
              async: !1,
              global: !1,
              throws: !0
            });
          }),
          w.fn.extend({
            wrapAll: function(e) {
              var t;
              return (
                this[0] &&
                  (y(e) && (e = e.call(this[0])),
                  (t = w(e, this[0].ownerDocument)
                    .eq(0)
                    .clone(!0)),
                  this[0].parentNode && t.insertBefore(this[0]),
                  t
                    .map(function() {
                      for (var e = this; e.firstElementChild; )
                        e = e.firstElementChild;
                      return e;
                    })
                    .append(this)),
                this
              );
            },
            wrapInner: function(e) {
              return y(e)
                ? this.each(function(t) {
                    w(this).wrapInner(e.call(this, t));
                  })
                : this.each(function() {
                    var t = w(this),
                      n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e);
                  });
            },
            wrap: function(e) {
              var t = y(e);
              return this.each(function(n) {
                w(this).wrapAll(t ? e.call(this, n) : e);
              });
            },
            unwrap: function(e) {
              return (
                this.parent(e)
                  .not("body")
                  .each(function() {
                    w(this).replaceWith(this.childNodes);
                  }),
                this
              );
            }
          }),
          (w.expr.pseudos.hidden = function(e) {
            return !w.expr.pseudos.visible(e);
          }),
          (w.expr.pseudos.visible = function(e) {
            return !!(
              e.offsetWidth ||
              e.offsetHeight ||
              e.getClientRects().length
            );
          }),
          (w.ajaxSettings.xhr = function() {
            try {
              return new n.XMLHttpRequest();
            } catch (e) {}
          });
        var Ut = { 0: 200, 1223: 204 },
          Bt = w.ajaxSettings.xhr();
        (v.cors = !!Bt && "withCredentials" in Bt),
          (v.ajax = Bt = !!Bt),
          w.ajaxTransport(function(e) {
            var t, r;
            if (v.cors || (Bt && !e.crossDomain))
              return {
                send: function(i, o) {
                  var s,
                    a = e.xhr();
                  if (
                    (a.open(e.type, e.url, e.async, e.username, e.password),
                    e.xhrFields)
                  )
                    for (s in e.xhrFields) a[s] = e.xhrFields[s];
                  for (s in (e.mimeType &&
                    a.overrideMimeType &&
                    a.overrideMimeType(e.mimeType),
                  e.crossDomain ||
                    i["X-Requested-With"] ||
                    (i["X-Requested-With"] = "XMLHttpRequest"),
                  i))
                    a.setRequestHeader(s, i[s]);
                  (t = function(e) {
                    return function() {
                      t &&
                        ((t = r = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null),
                        "abort" === e
                          ? a.abort()
                          : "error" === e
                          ? "number" != typeof a.status
                            ? o(0, "error")
                            : o(a.status, a.statusText)
                          : o(
                              Ut[a.status] || a.status,
                              a.statusText,
                              "text" !== (a.responseType || "text") ||
                                "string" != typeof a.responseText
                                ? { binary: a.response }
                                : { text: a.responseText },
                              a.getAllResponseHeaders()
                            ));
                    };
                  }),
                    (a.onload = t()),
                    (r = a.onerror = a.ontimeout = t("error")),
                    void 0 !== a.onabort
                      ? (a.onabort = r)
                      : (a.onreadystatechange = function() {
                          4 === a.readyState &&
                            n.setTimeout(function() {
                              t && r();
                            });
                        }),
                    (t = t("abort"));
                  try {
                    a.send((e.hasContent && e.data) || null);
                  } catch (l) {
                    if (t) throw l;
                  }
                },
                abort: function() {
                  t && t();
                }
              };
          }),
          w.ajaxPrefilter(function(e) {
            e.crossDomain && (e.contents.script = !1);
          }),
          w.ajaxSetup({
            accepts: {
              script:
                "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: { script: /\b(?:java|ecma)script\b/ },
            converters: {
              "text script": function(e) {
                return w.globalEval(e), e;
              }
            }
          }),
          w.ajaxPrefilter("script", function(e) {
            void 0 === e.cache && (e.cache = !1),
              e.crossDomain && (e.type = "GET");
          }),
          w.ajaxTransport("script", function(e) {
            var t, n;
            if (e.crossDomain)
              return {
                send: function(r, i) {
                  (t = w("<script>")
                    .prop({ charset: e.scriptCharset, src: e.url })
                    .on(
                      "load error",
                      (n = function(e) {
                        t.remove(),
                          (n = null),
                          e && i("error" === e.type ? 404 : 200, e.type);
                      })
                    )),
                    s.head.appendChild(t[0]);
                },
                abort: function() {
                  n && n();
                }
              };
          });
        var Vt,
          Gt = [],
          $t = /(=)\?(?=&|$)|\?\?/;
        w.ajaxSetup({
          jsonp: "callback",
          jsonpCallback: function() {
            var e = Gt.pop() || w.expando + "_" + Tt++;
            return (this[e] = !0), e;
          }
        }),
          w.ajaxPrefilter("json jsonp", function(e, t, r) {
            var i,
              o,
              s,
              a =
                !1 !== e.jsonp &&
                ($t.test(e.url)
                  ? "url"
                  : "string" == typeof e.data &&
                    0 ===
                      (e.contentType || "").indexOf(
                        "application/x-www-form-urlencoded"
                      ) &&
                    $t.test(e.data) &&
                    "data");
            if (a || "jsonp" === e.dataTypes[0])
              return (
                (i = e.jsonpCallback = y(e.jsonpCallback)
                  ? e.jsonpCallback()
                  : e.jsonpCallback),
                a
                  ? (e[a] = e[a].replace($t, "$1" + i))
                  : !1 !== e.jsonp &&
                    (e.url += (wt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i),
                (e.converters["script json"] = function() {
                  return s || w.error(i + " was not called"), s[0];
                }),
                (e.dataTypes[0] = "json"),
                (o = n[i]),
                (n[i] = function() {
                  s = arguments;
                }),
                r.always(function() {
                  void 0 === o ? w(n).removeProp(i) : (n[i] = o),
                    e[i] && ((e.jsonpCallback = t.jsonpCallback), Gt.push(i)),
                    s && y(o) && o(s[0]),
                    (s = o = void 0);
                }),
                "script"
              );
          }),
          (v.createHTMLDocument = (((Vt = s.implementation.createHTMLDocument(
            ""
          ).body).innerHTML = "<form></form><form></form>"),
          2 === Vt.childNodes.length)),
          (w.parseHTML = function(e, t, n) {
            return "string" != typeof e
              ? []
              : ("boolean" == typeof t && ((n = t), (t = !1)),
                t ||
                  (v.createHTMLDocument
                    ? (((r = (t = s.implementation.createHTMLDocument(
                        ""
                      )).createElement("base")).href = s.location.href),
                      t.head.appendChild(r))
                    : (t = s)),
                (o = !n && []),
                (i = N.exec(e))
                  ? [t.createElement(i[1])]
                  : ((i = Ee([e], t, o)),
                    o && o.length && w(o).remove(),
                    w.merge([], i.childNodes)));
            var r, i, o;
          }),
          (w.fn.load = function(e, t, n) {
            var r,
              i,
              o,
              s = this,
              a = e.indexOf(" ");
            return (
              a > -1 && ((r = gt(e.slice(a))), (e = e.slice(0, a))),
              y(t)
                ? ((n = t), (t = void 0))
                : t && "object" == typeof t && (i = "POST"),
              s.length > 0 &&
                w
                  .ajax({ url: e, type: i || "GET", dataType: "html", data: t })
                  .done(function(e) {
                    (o = arguments),
                      s.html(
                        r
                          ? w("<div>")
                              .append(w.parseHTML(e))
                              .find(r)
                          : e
                      );
                  })
                  .always(
                    n &&
                      function(e, t) {
                        s.each(function() {
                          n.apply(this, o || [e.responseText, t, e]);
                        });
                      }
                  ),
              this
            );
          }),
          w.each(
            [
              "ajaxStart",
              "ajaxStop",
              "ajaxComplete",
              "ajaxError",
              "ajaxSuccess",
              "ajaxSend"
            ],
            function(e, t) {
              w.fn[t] = function(e) {
                return this.on(t, e);
              };
            }
          ),
          (w.expr.pseudos.animated = function(e) {
            return w.grep(w.timers, function(t) {
              return e === t.elem;
            }).length;
          }),
          (w.offset = {
            setOffset: function(e, t, n) {
              var r,
                i,
                o,
                s,
                a,
                l,
                u = w.css(e, "position"),
                c = w(e),
                f = {};
              "static" === u && (e.style.position = "relative"),
                (a = c.offset()),
                (o = w.css(e, "top")),
                (l = w.css(e, "left")),
                ("absolute" === u || "fixed" === u) &&
                (o + l).indexOf("auto") > -1
                  ? ((s = (r = c.position()).top), (i = r.left))
                  : ((s = parseFloat(o) || 0), (i = parseFloat(l) || 0)),
                y(t) && (t = t.call(e, n, w.extend({}, a))),
                null != t.top && (f.top = t.top - a.top + s),
                null != t.left && (f.left = t.left - a.left + i),
                "using" in t ? t.using.call(e, f) : c.css(f);
            }
          }),
          w.fn.extend({
            offset: function(e) {
              if (arguments.length)
                return void 0 === e
                  ? this
                  : this.each(function(t) {
                      w.offset.setOffset(this, e, t);
                    });
              var t,
                n,
                r = this[0];
              return r
                ? r.getClientRects().length
                  ? ((t = r.getBoundingClientRect()),
                    (n = r.ownerDocument.defaultView),
                    {
                      top: t.top + n.pageYOffset,
                      left: t.left + n.pageXOffset
                    })
                  : { top: 0, left: 0 }
                : void 0;
            },
            position: function() {
              if (this[0]) {
                var e,
                  t,
                  n,
                  r = this[0],
                  i = { top: 0, left: 0 };
                if ("fixed" === w.css(r, "position"))
                  t = r.getBoundingClientRect();
                else {
                  for (
                    t = this.offset(),
                      n = r.ownerDocument,
                      e = r.offsetParent || n.documentElement;
                    e &&
                    (e === n.body || e === n.documentElement) &&
                    "static" === w.css(e, "position");

                  )
                    e = e.parentNode;
                  e &&
                    e !== r &&
                    1 === e.nodeType &&
                    (((i = w(e).offset()).top += w.css(
                      e,
                      "borderTopWidth",
                      !0
                    )),
                    (i.left += w.css(e, "borderLeftWidth", !0)));
                }
                return {
                  top: t.top - i.top - w.css(r, "marginTop", !0),
                  left: t.left - i.left - w.css(r, "marginLeft", !0)
                };
              }
            },
            offsetParent: function() {
              return this.map(function() {
                for (
                  var e = this.offsetParent;
                  e && "static" === w.css(e, "position");

                )
                  e = e.offsetParent;
                return e || Te;
              });
            }
          }),
          w.each(
            { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
            function(e, t) {
              var n = "pageYOffset" === t;
              w.fn[e] = function(r) {
                return G(
                  this,
                  function(e, r, i) {
                    var o;
                    if (
                      (_(e) ? (o = e) : 9 === e.nodeType && (o = e.defaultView),
                      void 0 === i)
                    )
                      return o ? o[t] : e[r];
                    o
                      ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset)
                      : (e[r] = i);
                  },
                  e,
                  r,
                  arguments.length
                );
              };
            }
          ),
          w.each(["top", "left"], function(e, t) {
            w.cssHooks[t] = Ve(v.pixelPosition, function(e, n) {
              if (n)
                return (
                  (n = Be(e, t)), Fe.test(n) ? w(e).position()[t] + "px" : n
                );
            });
          }),
          w.each({ Height: "height", Width: "width" }, function(e, t) {
            w.each(
              { padding: "inner" + e, content: t, "": "outer" + e },
              function(n, r) {
                w.fn[r] = function(i, o) {
                  var s = arguments.length && (n || "boolean" != typeof i),
                    a = n || (!0 === i || !0 === o ? "margin" : "border");
                  return G(
                    this,
                    function(t, n, i) {
                      var o;
                      return _(t)
                        ? 0 === r.indexOf("outer")
                          ? t["inner" + e]
                          : t.document.documentElement["client" + e]
                        : 9 === t.nodeType
                        ? ((o = t.documentElement),
                          Math.max(
                            t.body["scroll" + e],
                            o["scroll" + e],
                            t.body["offset" + e],
                            o["offset" + e],
                            o["client" + e]
                          ))
                        : void 0 === i
                        ? w.css(t, n, a)
                        : w.style(t, n, i, a);
                    },
                    t,
                    s ? i : void 0,
                    s
                  );
                };
              }
            );
          }),
          w.each(
            "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
              " "
            ),
            function(e, t) {
              w.fn[t] = function(e, n) {
                return arguments.length > 0
                  ? this.on(t, null, e, n)
                  : this.trigger(t);
              };
            }
          ),
          w.fn.extend({
            hover: function(e, t) {
              return this.mouseenter(e).mouseleave(t || e);
            }
          }),
          w.fn.extend({
            bind: function(e, t, n) {
              return this.on(e, null, t, n);
            },
            unbind: function(e, t) {
              return this.off(e, null, t);
            },
            delegate: function(e, t, n, r) {
              return this.on(t, e, n, r);
            },
            undelegate: function(e, t, n) {
              return 1 === arguments.length
                ? this.off(e, "**")
                : this.off(t, e || "**", n);
            }
          }),
          (w.proxy = function(e, t) {
            var n, r, i;
            if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), y(e)))
              return (
                (r = l.call(arguments, 2)),
                ((i = function() {
                  return e.apply(t || this, r.concat(l.call(arguments)));
                }).guid = e.guid = e.guid || w.guid++),
                i
              );
          }),
          (w.holdReady = function(e) {
            e ? w.readyWait++ : w.ready(!0);
          }),
          (w.isArray = Array.isArray),
          (w.parseJSON = JSON.parse),
          (w.nodeName = I),
          (w.isFunction = y),
          (w.isWindow = _),
          (w.camelCase = X),
          (w.type = T),
          (w.now = Date.now),
          (w.isNumeric = function(e) {
            var t = w.type(e);
            return (
              ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
            );
          }),
          void 0 ===
            (r = function() {
              return w;
            }.apply(t, [])) || (e.exports = r);
        var Kt = n.jQuery,
          Qt = n.$;
        return (
          (w.noConflict = function(e) {
            return (
              n.$ === w && (n.$ = Qt), e && n.jQuery === w && (n.jQuery = Kt), w
            );
          }),
          i || (n.jQuery = n.$ = w),
          w
        );
      });
    }
  }
]);
//# sourceMappingURL=9-b86fb7d39c10885219a4.js.map
