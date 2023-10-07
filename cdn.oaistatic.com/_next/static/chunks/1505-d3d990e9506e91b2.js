"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1505],
  {
    10132: function (e, t, r) {
      r.d(t, {
        M: function () {
          return n;
        },
      });
      function n(e, t, { checkForDefaultPrevented: r = !0 } = {}) {
        return function (n) {
          if ((null == e || e(n), !1 === r || !n.defaultPrevented))
            return null == t ? void 0 : t(n);
        };
      }
    },
    89340: function (e, t, r) {
      r.d(t, {
        B: function () {
          return i;
        },
      });
      var n = r(70079),
        u = r(53559),
        o = r(68469),
        l = r(26739);
      function i(e) {
        let t = e + "CollectionProvider",
          [r, i] = (0, u.b)(t),
          [c, f] = r(t, {
            collectionRef: { current: null },
            itemMap: new Map(),
          }),
          a = (e) => {
            let { scope: t, children: r } = e,
              u = n.useRef(null),
              o = n.useRef(new Map()).current;
            return n.createElement(
              c,
              { scope: t, itemMap: o, collectionRef: u },
              r
            );
          },
          s = e + "CollectionSlot",
          d = n.forwardRef((e, t) => {
            let { scope: r, children: u } = e,
              i = f(s, r),
              c = (0, o.e)(t, i.collectionRef);
            return n.createElement(l.g7, { ref: c }, u);
          }),
          v = e + "CollectionItemSlot",
          p = "data-radix-collection-item",
          m = n.forwardRef((e, t) => {
            let { scope: r, children: u, ...i } = e,
              c = n.useRef(null),
              a = (0, o.e)(t, c),
              s = f(v, r);
            return (
              n.useEffect(
                () => (
                  s.itemMap.set(c, { ref: c, ...i }),
                  () => void s.itemMap.delete(c)
                )
              ),
              n.createElement(l.g7, { [p]: "", ref: a }, u)
            );
          });
        return [
          { Provider: a, Slot: d, ItemSlot: m },
          function (t) {
            let r = f(e + "CollectionConsumer", t),
              u = n.useCallback(() => {
                let e = r.collectionRef.current;
                if (!e) return [];
                let t = Array.from(e.querySelectorAll(`[${p}]`)),
                  n = Array.from(r.itemMap.values()),
                  u = n.sort(
                    (e, r) =>
                      t.indexOf(e.ref.current) - t.indexOf(r.ref.current)
                  );
                return u;
              }, [r.collectionRef, r.itemMap]);
            return u;
          },
          i,
        ];
      }
    },
    53559: function (e, t, r) {
      r.d(t, {
        b: function () {
          return u;
        },
      });
      var n = r(70079);
      function u(e, t = []) {
        let r = [],
          u = () => {
            let t = r.map((e) => (0, n.createContext)(e));
            return function (r) {
              let u = (null == r ? void 0 : r[e]) || t;
              return (0, n.useMemo)(
                () => ({ [`__scope${e}`]: { ...r, [e]: u } }),
                [r, u]
              );
            };
          };
        return (
          (u.scopeName = e),
          [
            function (t, u) {
              let o = (0, n.createContext)(u),
                l = r.length;
              function i(t) {
                let { scope: r, children: u, ...i } = t,
                  c = (null == r ? void 0 : r[e][l]) || o,
                  f = (0, n.useMemo)(() => i, Object.values(i));
                return (0, n.createElement)(c.Provider, { value: f }, u);
              }
              return (
                (r = [...r, u]),
                (i.displayName = t + "Provider"),
                [
                  i,
                  function (r, i) {
                    let c = (null == i ? void 0 : i[e][l]) || o,
                      f = (0, n.useContext)(c);
                    if (f) return f;
                    if (void 0 !== u) return u;
                    throw Error(`\`${r}\` must be used within \`${t}\``);
                  },
                ]
              );
            },
            (function (...e) {
              let t = e[0];
              if (1 === e.length) return t;
              let r = () => {
                let r = e.map((e) => ({
                  useScope: e(),
                  scopeName: e.scopeName,
                }));
                return function (e) {
                  let u = r.reduce((t, { useScope: r, scopeName: n }) => {
                    let u = r(e),
                      o = u[`__scope${n}`];
                    return { ...t, ...o };
                  }, {});
                  return (0, n.useMemo)(
                    () => ({ [`__scope${t.scopeName}`]: u }),
                    [u]
                  );
                };
              };
              return (r.scopeName = t.scopeName), r;
            })(u, ...t),
          ]
        );
      }
    },
    74400: function (e, t, r) {
      r.d(t, {
        gm: function () {
          return o;
        },
      });
      var n = r(70079);
      let u = (0, n.createContext)(void 0);
      function o(e) {
        let t = (0, n.useContext)(u);
        return e || t || "ltr";
      }
    },
    70494: function (e, t, r) {
      r.d(t, {
        M: function () {
          return c;
        },
      });
      var n,
        u = r(70079),
        o = r(90671);
      let l = (n || (n = r.t(u, 2)))["useId".toString()] || (() => void 0),
        i = 0;
      function c(e) {
        let [t, r] = u.useState(l());
        return (
          (0, o.b)(() => {
            e || r((e) => (null != e ? e : String(i++)));
          }, [e]),
          e || (t ? `radix-${t}` : "")
        );
      }
    },
    51629: function (e, t, r) {
      r.d(t, {
        W: function () {
          return u;
        },
      });
      var n = r(70079);
      function u(e) {
        let t = (0, n.useRef)(e);
        return (
          (0, n.useEffect)(() => {
            t.current = e;
          }),
          (0, n.useMemo)(
            () =>
              (...e) => {
                var r;
                return null === (r = t.current) || void 0 === r
                  ? void 0
                  : r.call(t, ...e);
              },
            []
          )
        );
      }
    },
    21381: function (e, t, r) {
      r.d(t, {
        T: function () {
          return o;
        },
      });
      var n = r(70079),
        u = r(51629);
      function o({ prop: e, defaultProp: t, onChange: r = () => {} }) {
        let [o, l] = (function ({ defaultProp: e, onChange: t }) {
            let r = (0, n.useState)(e),
              [o] = r,
              l = (0, n.useRef)(o),
              i = (0, u.W)(t);
            return (
              (0, n.useEffect)(() => {
                l.current !== o && (i(o), (l.current = o));
              }, [o, l, i]),
              r
            );
          })({ defaultProp: t, onChange: r }),
          i = void 0 !== e,
          c = (0, u.W)(r),
          f = (0, n.useCallback)(
            (t) => {
              if (i) {
                let r = "function" == typeof t ? t(e) : t;
                r !== e && c(r);
              } else l(t);
            },
            [i, e, l, c]
          );
        return [i ? e : o, f];
      }
    },
    90671: function (e, t, r) {
      r.d(t, {
        b: function () {
          return u;
        },
      });
      var n = r(70079);
      let u = (null == globalThis ? void 0 : globalThis.document)
        ? n.useLayoutEffect
        : () => {};
    },
    80136: function (e, t, r) {
      r.d(t, {
        D: function () {
          return u;
        },
      });
      var n = r(70079);
      function u(e) {
        let t = (0, n.useRef)({ value: e, previous: e });
        return (0, n.useMemo)(
          () => (
            t.current.value !== e &&
              ((t.current.previous = t.current.value), (t.current.value = e)),
            t.current.previous
          ),
          [e]
        );
      }
    },
    86648: function (e, t, r) {
      r.d(t, {
        t: function () {
          return o;
        },
      });
      var n = r(70079),
        u = r(90671);
      function o(e) {
        let [t, r] = (0, n.useState)(void 0);
        return (
          (0, u.b)(() => {
            if (e) {
              r({ width: e.offsetWidth, height: e.offsetHeight });
              let t = new ResizeObserver((t) => {
                let n, u;
                if (!Array.isArray(t) || !t.length) return;
                let o = t[0];
                if ("borderBoxSize" in o) {
                  let e = o.borderBoxSize,
                    t = Array.isArray(e) ? e[0] : e;
                  (n = t.inlineSize), (u = t.blockSize);
                } else (n = e.offsetWidth), (u = e.offsetHeight);
                r({ width: n, height: u });
              });
              return t.observe(e, { box: "border-box" }), () => t.unobserve(e);
            }
            r(void 0);
          }, [e]),
          t
        );
      }
    },
  },
]);
