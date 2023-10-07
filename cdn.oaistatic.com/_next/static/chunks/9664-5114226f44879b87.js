"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9664],
  {
    24215: function (e, t, n) {
      n.d(t, {
        kd: function () {
          return r;
        },
        Oq: function () {
          return l;
        },
        gj: function () {
          return d;
        },
      });
      var a,
        r,
        i = n(61888),
        s = n(43744);
      function o(e, t) {
        var n = e.slice().sort(function (e, t) {
            return e - t;
          }),
          a = t * (n.length - 1),
          r = Math.floor(a),
          i = Math.ceil(a);
        if (r === i) return n[r];
        var s = a - r;
        return (1 - s) * n[r] + s * n[i];
      }
      ((a = r || (r = {})).FirstTokenLatency = "first_token_lat"),
        (a.TotalRequestTime = "total_request_time"),
        (a.TokenCount = "token_count"),
        (a.StdDevTokenLatency = "std_dev_token_lat"),
        (a.MeanTokenLatency = "mean_token_lat"),
        (a.MedianTokenLatency = "median_token_lat"),
        (a.MinTokenLatency = "min_token_lat"),
        (a.MaxTokenLatency = "max_token_lat"),
        (a.P95TokenLatency = "p95_token_lat"),
        (a.P99TokenLatency = "p99_token_lat");
      var l = function (e) {
          var t,
            n = e.filter(function (e) {
              return e.requestCount > 1;
            }),
            a = e.length ? e[0] : null,
            s = o(
              n.map(function (e) {
                return e.lastTokenDuration;
              }),
              0.95,
            ),
            l = o(
              n.map(function (e) {
                return e.lastTokenDuration;
              }),
              0.99,
            ),
            d = (0, i.mean)(
              n.map(function (e) {
                return e.lastTokenDuration;
              }),
            ),
            u = (function (e) {
              if (0 === e.length) return null;
              var t = e.slice().sort(function (e, t) {
                  return e - t;
                }),
                n = Math.floor(t.length / 2);
              return t.length % 2 == 0 ? (t[n - 1] + t[n]) / 2 : t[n];
            })(
              n.map(function (e) {
                return e.lastTokenDuration;
              }),
            ),
            c = n
              .filter(function (e) {
                return 0 !== e.lastTokenDuration;
              })
              .reduce(function (e, t) {
                return Math.min(e, t.lastTokenDuration);
              }, 1 / 0),
            m = n.reduce(function (e, t) {
              return Math.max(e, t.lastTokenDuration);
            }, -1 / 0),
            f = (function (e) {
              var t = e.length;
              if (0 === t) return 0;
              var n =
                (0 === e.length
                  ? null
                  : e.reduce(function (e, t) {
                      return e + t;
                    }, 0) / e.length) || 0;
              return Math.sqrt(
                e.reduce(function (e, t) {
                  return e + Math.pow(t - n, 2);
                }, 0) / t,
              );
            })(
              n.map(function (e) {
                return e.lastTokenDuration;
              }),
            ),
            g =
              null === (t = e[e.length - 1]) || void 0 === t
                ? void 0
                : t.requestDuration;
          return [
            {
              id: r.FirstTokenLatency,
              name: "First Token lat.",
              stat: a ? "".concat(a.lastTokenDuration.toFixed(2), "ms") : null,
              value: a ? a.lastTokenDuration : null,
              category: "summary",
            },
            {
              id: r.TotalRequestTime,
              name: "Total request time",
              stat: g ? "".concat((g / 1e3).toFixed(2), "s") : null,
              value: g || null,
              category: "summary",
            },
            {
              id: r.TokenCount,
              name: "Token count",
              stat: "".concat(e.length),
              value: e.length,
              category: "summary",
            },
            {
              id: r.StdDevTokenLatency,
              name: "Std dev Token lat.",
              stat: "".concat(f.toFixed(2)),
              value: f,
              category: "token",
            },
            {
              id: r.MeanTokenLatency,
              name: "Mean Token lat.",
              stat: d ? "".concat(d.toFixed(2), "ms") : null,
              value: null != d ? d : null,
              category: "aggregate",
            },
            {
              id: r.MedianTokenLatency,
              name: "Median Token lat.",
              stat: u ? "".concat(u.toFixed(2), "ms") : null,
              value: null != u ? u : null,
              category: "token",
            },
            {
              id: r.MinTokenLatency,
              name: "Min Token lat.",
              stat: "".concat(c.toFixed(2), "ms"),
              value: null != c ? c : null,
              category: "token",
            },
            {
              id: r.MaxTokenLatency,
              name: "Max Token lat.",
              stat: "".concat(m.toFixed(2), "ms"),
              value: null != m ? m : null,
              category: "token",
            },
            {
              id: r.P95TokenLatency,
              name: "p95 Token lat.",
              stat: s ? "".concat(s.toFixed(2), "ms") : null,
              value: null != s ? s : null,
              category: "aggregate",
            },
            {
              id: r.P99TokenLatency,
              name: "p99 Token lat.",
              stat: l ? "".concat(l.toFixed(2), "ms") : null,
              value: null != l ? l : null,
              category: "aggregate",
            },
          ];
        },
        d = function () {
          var e,
            t = (0, s.JP)(),
            n = (0, s.AA)();
          if (!t || !n) return { stats: [], targetLatencyData: [] };
          var a = t[n],
            r =
              null !== (e = null == a ? void 0 : a.data) && void 0 !== e
                ? e
                : [];
          return { stats: l(r), targetLatencyData: r };
        };
    },
    43744: function (e, t, n) {
      n.d(t, {
        AA: function () {
          return C;
        },
        Ae: function () {
          return g;
        },
        BC: function () {
          return j;
        },
        F4: function () {
          return f;
        },
        JP: function () {
          return k;
        },
        Q7: function () {
          return b;
        },
        WD: function () {
          return v;
        },
        gL: function () {
          return p;
        },
        iZ: function () {
          return w;
        },
        j7: function () {
          return y;
        },
        kn: function () {
          return x;
        },
      });
      var a = n(96237),
        r = n(39324),
        i = n(71209),
        s = n(81949),
        o = n(95137),
        l = n(78103),
        d = n(24215),
        u = (0, l.ZP)(function () {
          return {
            messagesDevData: {},
            activeNodeId: void 0,
            ui: { focusedNodeId: void 0 },
          };
        }),
        c = u.getState,
        m = u.setState,
        f = function (e, t, n, s) {
          m(function (o) {
            return (0, i._)((0, r._)({}, o), {
              activeNodeId: e,
              ui: { focusedNodeId: e },
              messagesDevData: (0, i._)(
                (0, r._)({}, o.messagesDevData),
                (0, a._)({}, e, {
                  status: "active",
                  data: [],
                  model: t,
                  serverRequestId: n,
                  preflightTime: s,
                }),
              ),
            });
          });
        },
        g = function (e, t) {
          m(function (n) {
            var o = n.messagesDevData[e];
            return (0, i._)((0, r._)({}, n), {
              activeNodeId: e,
              messagesDevData: (0, i._)(
                (0, r._)({}, n.messagesDevData),
                (0, a._)(
                  {},
                  e,
                  (0, i._)((0, r._)({}, o), {
                    data: (0, s._)(o.data).concat([t]),
                  }),
                ),
              ),
            });
          });
        },
        h = function (e, t) {
          var n;
          return null ===
            (n = t.find(function (t) {
              return t.id === e;
            })) || void 0 === n
            ? void 0
            : n.value;
        },
        p = function (e) {
          var t = k()[e],
            n = (0, d.Oq)(t.data),
            a = t.preflightTime,
            r = {
              model: t.model,
              serverRequestId: t.serverRequestId,
              preflightTime: a,
              countTokens: h(d.kd.TokenCount, n),
              tsFirstToken: h(d.kd.FirstTokenLatency, n),
              tsMaxTokenTime: h(d.kd.MaxTokenLatency, n),
              tsMeanTokenWithoutFirst: h(d.kd.MeanTokenLatency, n),
              tsMedianTokenWithoutFirst: h(d.kd.MedianTokenLatency, n),
              tsMinTokenTime: h(d.kd.MinTokenLatency, n),
              tsStdDevTokenTime: h(d.kd.StdDevTokenLatency, n),
              tsP95TokenWithoutFirst: h(d.kd.P95TokenLatency, n),
              tsP99TokenWithoutFirst: h(d.kd.P99TokenLatency, n),
              tsTotalRequestTime: h(d.kd.TotalRequestTime, n),
            };
          o.ZP.postLatencyTimingEvent(r);
        },
        x = function (e) {
          return m(function (t) {
            var n = (0, i._)((0, r._)({}, t.messagesDevData[e]), {
              status: "finished",
            });
            return (0, i._)((0, r._)({}, t), {
              messagesDevData: (0, i._)(
                (0, r._)({}, t.messagesDevData),
                (0, a._)({}, e, n),
              ),
            });
          });
        },
        v = function (e) {
          return m(function (t) {
            return (0, i._)((0, r._)({}, t), {
              ui: (0, i._)((0, r._)({}, t.ui), { focusedNodeId: e }),
            });
          });
        };
      function b(e) {
        var t = Object.keys(k()),
          n = t.indexOf(e);
        if (-1 === n) throw Error("Key not found in object");
        var a = (n + 1) % t.length;
        return t[a];
      }
      function w(e) {
        var t = Object.keys(k()),
          n = t.indexOf(e);
        if (-1 === n) throw Error("Key not found in object");
        var a = (n - 1 + t.length) % t.length;
        return t[a];
      }
      function y(e) {
        return Object.keys(k()).indexOf(e);
      }
      var j = function () {
          return Object.keys(k()).length;
        },
        k = function () {
          return c().messagesDevData;
        },
        C = function () {
          return c().ui.focusedNodeId;
        };
    },
    63857: function (e, t, n) {
      n.d(t, {
        h: function () {
          return h;
        },
        t: function () {
          return b;
        },
      });
      var a = n(4337),
        r = n(35250),
        i = n(95182),
        s = n.n(i),
        o = n(1454),
        l = n(21389);
      function d() {
        var e = (0, a._)(["text-xs flex items-center justify-center gap-1"]);
        return (
          (d = function () {
            return e;
          }),
          e
        );
      }
      function u() {
        var e = (0, a._)([
          "dark:text-white disabled:text-gray-300 dark:disabled:text-gray-400",
        ]);
        return (
          (u = function () {
            return e;
          }),
          e
        );
      }
      function c() {
        var e = (0, a._)(["flex-grow flex-shrink-0 tabular-nums"]);
        return (
          (c = function () {
            return e;
          }),
          e
        );
      }
      function m() {
        var e = (0, a._)([
          "text-xs inline-flex bg-token-surface-secondary h-8 border rounded border-token-border-medium",
        ]);
        return (
          (m = function () {
            return e;
          }),
          e
        );
      }
      function f() {
        var e = (0, a._)([
          "text-token-text-secondary disabled:text-token-border-medium w-8 flex items-center justify-center hover:bg-token-surface-tertiary",
        ]);
        return (
          (f = function () {
            return e;
          }),
          e
        );
      }
      function g() {
        var e = (0, a._)([
          "text-token-text-tertiary px-2 flex items-center font-mono tracking-widest",
        ]);
        return (
          (g = function () {
            return e;
          }),
          e
        );
      }
      function h(e) {
        var t = e.currentPage,
          n = e.onChangeIndex,
          a = e.length,
          i = e.className,
          l = function (e) {
            n(s()(t + e, 0, a - 1));
          };
        return (0, r.jsxs)(p, {
          className: i,
          children: [
            (0, r.jsx)(x, {
              onClick: function () {
                return l(-1);
              },
              disabled: 0 === t,
              children: (0, r.jsx)(o.YFh, { className: "icon-xs" }),
            }),
            (0, r.jsx)(v, { children: "".concat(t + 1, " / ").concat(a) }),
            (0, r.jsx)(x, {
              onClick: function () {
                return l(1);
              },
              disabled: t === a - 1,
              children: (0, r.jsx)(o.Tfp, { className: "icon-xs" }),
            }),
          ],
        });
      }
      var p = l.Z.div(d()),
        x = l.Z.button(u()),
        v = l.Z.span(c());
      function b(e) {
        var t = e.currentPage,
          n = e.onChangeIndex,
          a = e.length,
          i = e.className,
          l = function (e) {
            n(s()(t + e, 0, a - 1));
          };
        return (0, r.jsxs)(w, {
          className: i,
          children: [
            (0, r.jsx)(y, {
              onClick: function () {
                return l(-1);
              },
              disabled: 0 === t,
              children: (0, r.jsx)(o.YFh, { className: "icon-sm" }),
            }),
            (0, r.jsx)(j, { children: "".concat(t + 1, "/").concat(a) }),
            (0, r.jsx)(y, {
              onClick: function () {
                return l(1);
              },
              disabled: t === a - 1,
              children: (0, r.jsx)(o.Tfp, { className: "icon-sm" }),
            }),
          ],
        });
      }
      var w = l.Z.div(m()),
        y = l.Z.button(f()),
        j = l.Z.span(g());
    },
    44513: function (e, t, n) {
      n.d(t, {
        m: function () {
          return s;
        },
      });
      var a = n(35250),
        r = n(98359),
        i = n(70079);
      function s(e) {
        var t = e.children;
        return (0, a.jsx)(r.u, {
          as: i.Fragment,
          enter: "transition ease-out duration-200",
          enterFrom: "opacity-0 translate-y-1",
          enterTo: "opacity-100 translate-y-0",
          leave: "transition ease-in duration-150",
          leaveFrom: "opacity-100 translate-y-0",
          leaveTo: "opacity-0 translate-y-1",
          children: t,
        });
      }
    },
    9664: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return lL;
        },
      });
      var a,
        r,
        i,
        s,
        o,
        l,
        d,
        u,
        c,
        m,
        f,
        g,
        h = n(21722),
        p = n(39324),
        x = n(71209),
        v = n(70216),
        b = n(22830),
        w = n(4337),
        y = n(75883),
        j = n(35250),
        k = n(7813),
        C = n(6128),
        M = n(77010),
        _ = n(62509),
        T = n(6948),
        N = n(50795),
        I = n(82081),
        S = n(55344),
        P = n.n(S),
        R = n(73413),
        Z = n.n(R),
        L = n(9181),
        D = n.n(L),
        B = n(60554),
        F = n(70079),
        E = n(1454),
        q = n(13002),
        A = n(94968),
        U = n(32004),
        O = n(70671),
        z = n(21389),
        W = n(8844),
        V = n(95954),
        Q = n(95137),
        H = n(32877),
        G = n(21739),
        Y = n(37469),
        J = n(46020),
        $ = n(54118),
        K = n(78931),
        X = n(32542),
        ee = n(33669),
        et = n(52787),
        en = n(66085),
        ea = n(36338),
        er = n(67273),
        ei = n(61402),
        es = n(79579),
        eo = n(89368),
        el = n(78103),
        ed = (0, el.ZP)(function () {
          return { displayingSideBySideFeedback: !1, unskippable: !1 };
        }),
        eu = n(81949),
        ec = n(19841),
        em = n(91530),
        ef = n.n(em),
        eg = n(2827),
        eh = n(77370),
        ep = n(51959),
        ex = n(89794),
        ev = n(6038),
        eb = n(20522),
        ew = n(47703),
        ey = n(20485),
        ej = n(13995),
        ek = n(5268),
        eC = n(35101),
        eM = n(14444);
      function e_(e) {
        return eT.apply(this, arguments);
      }
      function eT() {
        return (eT = (0, h._)(function (e) {
          var t;
          return (0, y.Jh)(this, function (n) {
            switch (n.label) {
              case 0:
                return (
                  (t = e.queryKey), [4, Q.ZP.publicGetPluginsById({ ids: t })]
                );
              case 1:
                return [2, n.sent().items];
            }
          });
        })).apply(this, arguments);
      }
      function eN(e) {
        var t, n, a;
        return null !==
          (t = ((n = (0, Y.GR)(e)),
          (a = (0, ej.NL)()),
          (0, ek.a)({
            queryKey: n,
            queryFn: e_,
            initialData: function () {
              var e =
                  null === (l = a.getQueryData(eM.Z)) || void 0 === l
                    ? void 0
                    : l.items,
                t =
                  null === (d = a.getQueryData(eC.V)) || void 0 === d
                    ? void 0
                    : d.items,
                r = [],
                i = !0,
                s = !1,
                o = void 0;
              try {
                for (
                  var l, d, u, c = n[Symbol.iterator]();
                  !(i = (u = c.next()).done);
                  i = !0
                ) {
                  var m = (function () {
                    var n,
                      a = u.value,
                      i =
                        null !==
                          (n =
                            null == e
                              ? void 0
                              : e.find(function (e) {
                                  return e.id === a;
                                })) && void 0 !== n
                          ? n
                          : null == t
                          ? void 0
                          : t.find(function (e) {
                              return e.id === a;
                            });
                    if (null == i) return { v: void 0 };
                    r.push(i);
                  })();
                  if ("object" === (0, ey._)(m)) return m.v;
                }
              } catch (e) {
                (s = !0), (o = e);
              } finally {
                try {
                  i || null == c.return || c.return();
                } finally {
                  if (s) throw o;
                }
              }
              return r;
            },
          })).data) && void 0 !== t
          ? t
          : [];
      }
      var eI = ["#7989FF"],
        eS = function (e) {
          var t = e.children;
          return (0, eb.Ml)()
            ? (0, j.jsx)(ex.i1, { size: "medium", children: t })
            : (0, j.jsx)(j.Fragment, { children: t });
        };
      function eP(e) {
        var t,
          n,
          a = e.isCompletionRequestInProgress,
          r = e.messages,
          i = e.clientThreadId,
          s = e.isCompletion,
          o = e.avatarColor,
          l = e.showInlineEmbeddedDisplay,
          d = (0, F.useMemo)(
            function () {
              var e = !0,
                t = !1,
                n = void 0;
              try {
                for (
                  var a, i = r[Symbol.iterator]();
                  !(e = (a = i.next()).done);
                  e = !0
                ) {
                  var s = a.value,
                    o = (0, ew.ZC)(s).flagSeverity;
                  if (void 0 !== o) return o;
                }
              } catch (e) {
                (t = !0), (n = e);
              } finally {
                try {
                  e || null == i.return || i.return();
                } finally {
                  if (t) throw n;
                }
              }
            },
            [r],
          ),
          u =
            null === (n = r[0].message.metadata) || void 0 === n
              ? void 0
              : n.shared_conversation_id,
          c = (0, _.kP)().session,
          m = (0, Y.UL)(i),
          f = (0, K.ec)(function (e) {
            var t;
            return null === (t = e.currentWorkspace) || void 0 === t
              ? void 0
              : t.id;
          }),
          g = (0, eb.Ml)(),
          h = (0, j.jsx)(eS, {
            children: (0, j.jsx)(ev.k$, {
              background: null != o ? o : "#19c37d",
              iconName: "openai",
              notice: null != d ? d : void 0,
              size: g ? "gizmoConversation" : void 0,
            }),
          }),
          p = eN(i);
        if (a && r.length > 0) {
          var x = (function (e, t) {
            var n = (0, et.rH)(t.message);
            if (n === et.Cs.Plugin || n === et.Cs.PluginTool) {
              var a = (0, et.Lx)(
                n === et.Cs.Plugin
                  ? t.message.recipient
                  : t.message.author.name,
              );
              return e.find(function (e) {
                return e.namespace === (null == a ? void 0 : a.namespace);
              });
            }
          })(p, r[r.length - 1]);
          null != x &&
            (h = (0, j.jsx)(eS, {
              children: (0, j.jsx)(ev.Ph, {
                plugin: x,
                notice: null != d ? d : void 0,
                iconSize: g ? "gizmoConversation" : void 0,
              }),
            }));
        }
        return (
          null != f &&
            null != m.conversationTemplateId &&
            (h = (0, j.jsx)(eS, {
              children: (0, j.jsx)(ev.Ao, {
                workspaceId: f,
                templateId: m.conversationTemplateId,
                iconSize: g ? "gizmoConversation" : void 0,
              }),
            })),
          (0, j.jsx)("div", {
            children: s
              ? h
              : null != u || (void 0 !== l && l)
              ? (0, j.jsx)(eS, {
                  children: (0, j.jsx)(ev.k$, {
                    background:
                      eI[
                        (null !== (t = null == u ? void 0 : u.charCodeAt(0)) &&
                        void 0 !== t
                          ? t
                          : 0) % eI.length
                      ],
                    iconName: "user",
                    size: g ? "gizmoConversation" : void 0,
                  }),
                })
              : (0, j.jsx)(eS, {
                  children: (0, j.jsx)(ev.Yt, {
                    user: null == c ? void 0 : c.user,
                    notice: null != d ? d : void 0,
                    size: g ? "gizmoConversation" : "medium",
                  }),
                }),
          })
        );
      }
      var eR = n(28861),
        eZ = n(45635);
      function eL(e) {
        var t,
          n = e.url,
          a = e.size,
          r = void 0 === a ? 16 : a,
          i = e.className;
        try {
          t = new URL(n);
        } catch (e) {
          return console.error(e), null;
        }
        return (0, j.jsx)("img", {
          src: "https://icons.duckduckgo.com/ip3/".concat(t.hostname, ".ico"),
          alt: "Favicon",
          width: r,
          height: r,
          className: i,
        });
      }
      var eD = n(63031),
        eB = "&#8203;",
        eF = "oaicite:";
      function eE(e) {
        var t = e.displayInfo,
          n = (0, eD.O6)(),
          a = t.metadata,
          r = (null == a ? void 0 : a.type) === "file";
        return (0, j.jsx)(eZ.u, {
          label: (0, j.jsx)(eq, {
            citationMetadata: a,
            invalidReason: t.invalid_reason,
          }),
          side: "top",
          sideOffset: 4,
          withArrow: !1,
          interactive: !0,
          wide: !0,
          children: r
            ? (0, j.jsx)("button", {
                onClick: function () {
                  return n(a.id, a.name);
                },
                className: "px-0.5 text-green-600",
                children: (0, j.jsx)("sup", { children: t.number }),
              })
            : (0, j.jsx)("a", {
                href: null == a ? void 0 : a.url,
                target: "_blank",
                rel: "noreferrer",
                className: "px-0.5 text-green-600 !no-underline",
                children: (0, j.jsx)("sup", { children: t.number }),
              }),
        });
      }
      function eq(e) {
        var t = e.citationMetadata,
          n = e.invalidReason,
          a = e.onClick,
          r = (0, eD.O6)(),
          i = (null == t ? void 0 : t.type) === "file",
          s = t
            ? (0, j.jsxs)("div", {
                className: "flex items-center gap-2",
                children: [
                  (0, j.jsx)("div", {
                    className: "flex shrink-0 items-center justify-center",
                    children: i
                      ? (0, j.jsx)(E.NOg, {})
                      : (0, j.jsx)(eL, { url: t.url, className: "my-0" }),
                  }),
                  (0, j.jsx)("div", {
                    className: "max-w-xs truncate",
                    children: i ? t.name : t.title,
                  }),
                  (0, j.jsx)("div", {
                    className: "shrink-0",
                    children: (0, j.jsx)(E.AlO, { className: "icon-xs" }),
                  }),
                ],
              })
            : (0, j.jsx)("div", {
                className: "text-red-500",
                children:
                  null != n ? n : (0, j.jsx)(U.Z, (0, p._)({}, eU.invalid)),
              });
        return i
          ? (0, j.jsx)("button", {
              onClick: function () {
                r(t.id, t.name), null == a || a();
              },
              className: "text-xs",
              children: s,
            })
          : (0, j.jsx)("a", {
              href: null == t ? void 0 : t.url,
              target: "_blank",
              rel: "noreferrer",
              className: "text-xs !no-underline",
              onClick: a,
              children: s,
            });
      }
      function eA(e) {
        return "file" === e.type ? e.id : e.url;
      }
      var eU = (0, A.vU)({
          invalid: {
            id: "citations.invalid",
            description: "Text when citation is invalid",
            defaultMessage: "Invalid citation",
          },
        }),
        eO = n(16920),
        ez = n(47635),
        eW = n(88327),
        eV = n(1821);
      function eQ() {
        var e = (0, w._)(["flex flex-col items-start"]);
        return (
          (eQ = function () {
            return e;
          }),
          e
        );
      }
      function eH() {
        var e = (0, w._)([
          "flex items-center text-xs bg-green-100 rounded p-3 text-gray-900 ",
          "",
        ]);
        return (
          (eH = function () {
            return e;
          }),
          e
        );
      }
      function eG() {
        var e = (0, w._)([
          "max-w-full overflow-x-auto mt-3 flex flex-col gap-2 rounded bg-gray-100 p-3 text-sm text-gray-800",
        ]);
        return (
          (eG = function () {
            return e;
          }),
          e
        );
      }
      var eY = F.memo(function (e) {
          var t = e.children,
            n = e.isComplete,
            a = e.expanderClosedLabel,
            r = e.expanderOpenLabel,
            i = e.resultsPreview,
            s = e.results,
            o = e.initialExpanded,
            l = e.onExpand,
            d = (0, b._)((0, F.useState)(void 0 !== o && o), 2),
            u = d[0],
            c = d[1],
            m = (0, F.useCallback)(
              function () {
                c(function (e) {
                  return !e;
                }),
                  null == l || l();
              },
              [l],
            );
          return (0, j.jsxs)(eJ, {
            children: [
              (0, j.jsxs)(e$, {
                $complete: n,
                children: [
                  (0, j.jsx)("div", { children: t }),
                  !n &&
                    (0, j.jsx)(eV.Z, {
                      className: (0, ec.default)(
                        "shrink-0",
                        null != s ? "ml-1" : "ml-12",
                      ),
                    }),
                  null != s &&
                    (0, j.jsxs)("div", {
                      className: "ml-12 flex items-center gap-2",
                      role: "button",
                      onClick: m,
                      children: [
                        null != r &&
                          null != a &&
                          (0, j.jsx)("div", {
                            className: "text-xs text-gray-600",
                            children: u ? r : a,
                          }),
                        !u && i,
                        u
                          ? (0, j.jsx)(E.rH8, { className: "icon-sm" })
                          : (0, j.jsx)(E.bTu, { className: "icon-sm" }),
                      ],
                    }),
                ],
              }),
              u && s,
            ],
          });
        }),
        eJ = z.Z.div(eQ()),
        e$ = z.Z.div(eH(), function (e) {
          return e.$complete && "bg-gray-100";
        }),
        eK = z.Z.div(eG()),
        eX = n(55068),
        e0 = n(61491),
        e1 = n(59837),
        e2 = n(62853),
        e5 = n(77421),
        e4 = n(97296);
      function e3() {
        var e = (0, w._)(["0px 1px 12px 0px rgba(162, 107, 247, ", ")"]);
        return (
          (e3 = function () {
            return e;
          }),
          e
        );
      }
      function e6() {
        var e = (0, w._)(["1px solid rgba(171, 97, 253, ", ")"]);
        return (
          (e6 = function () {
            return e;
          }),
          e
        );
      }
      var e7 = eX._.apply(void 0, (0, eu._)([0.28, 0.52, 0.83, 0.67])),
        e8 = function (e, t) {
          return function (n) {
            var a = n % 2150;
            return a < 250
              ? e
              : ((e - t) *
                  (1 -
                    Math.sin(
                      (2 * (1900 * e7((a - 250) / 1900)) * Math.PI) / 1900 -
                        Math.PI / 2,
                    ))) /
                  2 +
                  t;
          };
        },
        e9 = F.memo(function (e) {
          var t = e.children,
            n = e.isComplete,
            a = e.results,
            r = e.initialExpanded,
            i = e.onExpand,
            s = (0, b._)((0, F.useState)(void 0 !== r && r), 2),
            o = s[0],
            l = s[1],
            d = (0, b._)((0, F.useState)(t), 2),
            u = d[0],
            c = d[1],
            m = (0, O.Z)(),
            f = (0, ec.default)(
              "bg-white dark:bg-gray-600 rounded-xl max-w-full overflow-hidden",
              n ? "border-black/10 border-[0.5px] shadow-xxs" : "",
            ),
            g = (0, j.jsx)(tt, {
              className: (0, ec.default)(f, "w-[280px]"),
              onNewLoop: function () {
                c(t);
              },
              isComplete: n,
              children: (0, j.jsxs)("div", {
                className: "flex items-center justify-between",
                children: [
                  (0, j.jsx)("div", {
                    className: "min-w-0",
                    children: n ? t : u,
                  }),
                  n &&
                    null != a &&
                    (0, j.jsx)("div", {
                      className:
                        "mr-3 flex w-5 justify-center text-gray-600/50",
                      children: o
                        ? (0, j.jsx)(E.rH8, { className: "icon-sm" })
                        : (0, j.jsx)(E.bTu, { className: "icon-sm" }),
                    }),
                ],
              }),
            });
          return (
            n &&
              null != a &&
              (g = (0, j.jsx)("button", {
                className: o
                  ? "group/tool-expander-open"
                  : "group/tool-expander-closed",
                onClick: function () {
                  l(function (e) {
                    return !e;
                  }),
                    null == i || i();
                },
                "aria-label": m.formatMessage(o ? ta.collapse : ta.expand),
                children: g,
              })),
            (0, j.jsxs)("div", {
              className: "flex flex-col items-start gap-2",
              children: [
                g,
                null != a &&
                  n &&
                  o &&
                  (0, j.jsx)("div", {
                    className: (0, ec.default)(f, "min-w-[280px]"),
                    children: a,
                  }),
              ],
            })
          );
        });
      function te(e) {
        var t = e.icon,
          n = e.title,
          a = e.subtitle;
        return (0, j.jsxs)("div", {
          className: "flex h-14 items-center gap-2.5 px-3 py-2",
          children: [
            (0, j.jsx)("div", {
              className:
                "flex h-[34px] w-[34px] shrink-0 items-center justify-center",
              children: t,
            }),
            (0, j.jsxs)("div", {
              className:
                "flex min-w-0 flex-1 flex-col items-start text-sm leading-[18px]",
              children: [
                null != n &&
                  (0, j.jsx)("div", {
                    className: "truncate font-medium",
                    children: n,
                  }),
                null != a &&
                  (0, j.jsx)("div", {
                    className: "max-w-full truncate opacity-70",
                    children: a,
                  }),
              ],
            }),
          ],
        });
      }
      var tt = function (e) {
          var t = e.children,
            n = e.className,
            a = e.isComplete,
            r = e.onNewLoop;
          return a
            ? (0, j.jsx)("div", { className: n, children: t })
            : (0, j.jsx)(tn, { className: n, onNewLoop: r, children: t });
        },
        tn = function (e) {
          var t = e.children,
            n = e.className,
            a = e.onNewLoop,
            r = (0, b._)((0, F.useState)(0), 2),
            i = r[0],
            s = r[1],
            o = (0, e0.r)(),
            l = (0, e1.H)(o, e8(0.05, 0.2)),
            d = (0, e2.Y)(e3(), l),
            u = (0, e1.H)(o, e8(0.33, 1)),
            c = (0, e2.Y)(e6(), u);
          return (
            (0, e5.W)(o, "change", function (e) {
              s(e);
              var t = Math.floor(e / 2150);
              Math.floor(i / 2150) !== t && a(t);
            }),
            (0, j.jsx)(e4.E.div, {
              className: n,
              style: { boxShadow: d, border: c },
              children: t,
            })
          );
        },
        ta = (0, A.vU)({
          expand: {
            id: "NewToolMessage.expand",
            defaultMessage: "Expand",
            description: "Aria-label for the expand button",
          },
          collapse: {
            id: "NewToolMessage.collapse",
            defaultMessage: "Collapse",
            description: "Aria-label for the collapse button",
          },
        }),
        tr = (0, A.vU)({
          startingBrowsing: {
            id: "browsingMessage.startingBrowsingV2",
            defaultMessage: "Starting up",
            description: "Status message when browsing is starting",
          },
          startingFileSearch: {
            id: "browsingMessage.startingFileSearch",
            defaultMessage: "Searching files...",
            description: "Status message when searching files is starting",
          },
          finishedFileSearch: {
            id: "browsingMessage.finishedFileSearch",
            defaultMessage: "Finished searching files",
            description: "Status message when searching files is finished",
          },
          searchInProgressTitle: {
            id: "browsingMessage.searchInProgressTitle",
            defaultMessage: "Browsing...",
            description: "Browsing command title when in progress",
          },
          searchFinishedTitle: {
            id: "browsingMessage.searchFinishedTitle",
            defaultMessage: "Finished browsing",
            description: "Browsing command title when finished",
          },
          searchInProgressWeb: {
            id: "browsingMessage.command.search.inProgress.web",
            defaultMessage: "Browsing",
            description: "Browsing command to search Bing is in progress",
          },
          searchInProgressFiles: {
            id: "browsingMessage.command.search.inProgress.files",
            defaultMessage: "Searching files: <bold>“{searchQuery}”</bold>",
            description: "Browsing command to search files is in progress",
          },
          searchFinishedWeb: {
            id: "browsingMessage.command.search.finished.web",
            defaultMessage:
              "Searched Bing: <bold>“<link>{searchQuery}</link>”</bold>",
            description: "Browsing command to search Bing finished",
          },
          searchFinishedFiles: {
            id: "browsingMessage.command.search.finished.files",
            defaultMessage: "Searched files: <bold>“{searchQuery}”</bold>",
            description: "Browsing command to search files finished",
          },
          searchError: {
            id: "browsingMessage.command.search.error",
            defaultMessage: "Search failed",
            description: "Browsing command to search the web failed",
          },
          clickInProgressForUrl: {
            id: "browsingMessage.command.click.inProgressForUrl",
            defaultMessage: "Clicking on {url}",
            description: "Browsing command to click on a link is in progress",
          },
          clickInProgress: {
            id: "browsingMessage.command.click.inProgress",
            defaultMessage: "Clicking…",
            description: "Browsing command to click on a link is in progress",
          },
          openFileInProgress: {
            id: "browsingMessage.command.openFile.inProgress",
            defaultMessage: "Opening a file...",
            description: "Browsing command to click into a file is in progress",
          },
          clickFinished: {
            id: "browsingMessage.command.click.finished",
            defaultMessage: "Clicked on a link",
            description: "Browsing command to click on a link finished",
          },
          openFileFinished: {
            id: "browsingMessage.command.openFile.finished",
            defaultMessage: "Opened a file",
            description: "Browsing command to click into a file finished",
          },
          clickFinishedWithLink: {
            id: "browsingMessage.command.click.finishedWithLink",
            defaultMessage: "Clicked on:",
            description:
              "Browsing command to click on a link finished. The link that was clicked will be displayed after the :",
          },
          openFileFinishedWithLink: {
            id: "browsingMessage.command.openFile.finishedWithLink",
            defaultMessage: "Opened:",
            description:
              "Browsing command to click into a file finished. The file that was opened will be displayed after the :",
          },
          clickError: {
            id: "browsingMessage.command.click.error",
            defaultMessage: "Click failed",
            description: "Browsing command to click on a link failed",
          },
          openFileError: {
            id: "browsingMessage.command.openFile.error",
            defaultMessage: "Opening file failed",
            description: "Browsing command to click on a link failed",
          },
          quote: {
            id: "browsingMessage.command.quote",
            defaultMessage: "Reading content",
            description:
              "Browsing command to read a specific quote from a page",
          },
          quoteWithTitle: {
            id: "browsingMessage.command.quoteWithTitle",
            defaultMessage: "Reading “{pageTitle}”",
            description:
              "Browsing command to read a specific quote from a page (with the page title included)",
          },
          quoteError: {
            id: "browsingMessage.command.quote.error",
            defaultMessage: "Reading content failed",
            description:
              "Browsing command to read a specific quote from a page failed",
          },
          error: {
            id: "browsingMessage.command.error",
            defaultMessage: "Trying something new",
            description: "Browsing command when there was an error",
          },
          back: {
            id: "browsingMessage.command.back",
            defaultMessage: "Going back",
            description: "Browsing command to go back to the last page",
          },
          backError: {
            id: "browsingMessage.command.back.error",
            defaultMessage: "Going back failed",
            description: "Browsing command to go back to the last page failed",
          },
          scroll: {
            id: "browsingMessage.command.scroll",
            defaultMessage: "Scrolling page",
            description: "Browsing command to scroll down on a page",
          },
          scrollError: {
            id: "browsingMessage.command.scroll.error",
            defaultMessage: "Scroll failed",
            description: "Browsing command to scroll down on a page failed",
          },
          showSteps: {
            id: "browsingMessage.showSteps",
            defaultMessage: "Show work",
            description:
              "Button label for showing the steps of a browsing session",
          },
          hideSteps: {
            id: "browsingMessage.hideSteps",
            defaultMessage: "Hide work",
            description:
              "Button label for hiding the steps of a browsing session",
          },
        }),
        ti = F.memo(function (e) {
          var t = e.messages,
            n = e.isComplete,
            a = e.isRetrieval,
            r = tw(
              t.map(function (e) {
                return e.message;
              }),
            ),
            i = [(0, j.jsx)(tg, { isRetrieval: a }, "starting")].concat(
              (0, eu._)(
                r.map(function (e, t) {
                  return (0, j.jsx)(
                    ts,
                    { command: e, citationMetadata: tj(r, t), isRetrieval: a },
                    t,
                  );
                }),
              ),
            ),
            s = null;
          return (
            n
              ? (i.push((0, j.jsx)(th, { isRetrieval: a }, "finished")),
                (s = (0, j.jsx)(th, { isRetrieval: a, isPreview: !0 })))
              : (s =
                  0 === r.length
                    ? (0, j.jsx)(tg, { isRetrieval: a, isPreview: !0 })
                    : (0, j.jsx)(ts, {
                        command: r[r.length - 1],
                        citationMetadata: tj(r, r.length - 1),
                        isRetrieval: a,
                        isPreview: !0,
                      })),
            a
              ? (0, j.jsx)(eY, {
                  isComplete: n,
                  results: (0, j.jsx)(eK, {
                    className: "text-xs",
                    children: i,
                  }),
                  children: s,
                })
              : (0, j.jsx)(e9, { isComplete: n, children: s })
          );
        });
      function ts(e) {
        var t = e.command,
          n = e.citationMetadata,
          a = e.isRetrieval,
          r = e.isPreview;
        if (t.didError)
          return (0, j.jsx)(tm, {
            isRetrieval: a,
            commandType: t.type,
            citationMetadata: n,
          });
        switch (t.type) {
          case "search":
            var i,
              s,
              o,
              l,
              d =
                "browser_one_box" === t.message.author.name
                  ? null === (i = t.message.metadata) || void 0 === i
                    ? void 0
                    : null === (s = i._cite_metadata) || void 0 === s
                    ? void 0
                    : s.original_query
                  : null === (o = t.message.metadata) || void 0 === o
                  ? void 0
                  : null === (l = o.args) || void 0 === l
                  ? void 0
                  : l[0];
            if (null == d) return null;
            return (0, j.jsx)(to, {
              searchQuery: d,
              isComplete: t.status === V.L5.Finished,
              isRetrieval: a,
              isPreview: r,
            });
          case "click":
          case "open_url":
            return (0, j.jsx)(tl, {
              isRetrieval: a,
              citationMetadata: n,
              isPreview: r,
            });
          case "quote":
          case "quote_full":
          case "quote_lines":
            return (0, j.jsx)(td, {
              isRetrieval: a,
              isPreview: r,
              citationMetadata: n,
            });
          case "back":
            return (0, j.jsx)(tu, {
              isRetrieval: a,
              isPreview: r,
              citationMetadata: n,
            });
          case "scroll":
            return (0, j.jsx)(tc, {
              isRetrieval: a,
              isPreview: r,
              citationMetadata: n,
            });
          default:
            return null;
        }
      }
      function to(e) {
        var t = e.searchQuery,
          n = e.isComplete,
          a = e.isRetrieval,
          r = e.isPreview,
          i = Q.ZP.getBingLink({ query: t });
        if (!a)
          return (0, j.jsxs)(tx, {
            isRetrieval: a,
            icon: eW.ol,
            isPreview: r,
            iconBase: (0, j.jsx)(eW.jE, {
              className: "absolute -left-1 -top-1 h-[21px] w-[21px]",
            }),
            link: i,
            children: ["“", t, "”"],
          });
        var s = tr.searchInProgressFiles,
          o = tr.searchFinishedFiles;
        return (0, j.jsx)(tb, {
          icon: eW.ol,
          isPreview: r,
          children: n
            ? (0, j.jsx)(
                U.Z,
                (0, x._)((0, p._)({}, o), {
                  values: {
                    bold: function (e) {
                      return (0, j.jsx)("span", {
                        className: "font-medium",
                        children: e,
                      });
                    },
                    searchQuery: t,
                  },
                }),
              )
            : (0, j.jsx)(
                U.Z,
                (0, x._)((0, p._)({}, s), {
                  values: {
                    bold: function (e) {
                      return (0, j.jsx)("span", {
                        className: "font-medium",
                        children: e,
                      });
                    },
                    searchQuery: t,
                  },
                }),
              ),
        });
      }
      function tl(e) {
        var t = e.isRetrieval,
          n = e.citationMetadata,
          a = e.isPreview,
          r = t ? tr.openFileInProgress : tr.clickInProgress;
        if (!t) {
          var i = n ? (0, j.jsx)(tp, { citationMetadata: n, size: 18 }) : null,
            s = (function (e) {
              if (null != e) {
                var t = tk(e);
                try {
                  return new URL(t).hostname;
                } catch (e) {
                  return;
                }
              }
            })(n);
          return (
            null != s && (r = tr.clickInProgressForUrl),
            (0, j.jsx)(tx, {
              isRetrieval: t,
              icon: eW.G$,
              iconBase: i,
              isPreview: a,
              link: n ? tk(n) : void 0,
              children: (0, j.jsx)(
                U.Z,
                (0, x._)((0, p._)({}, r), { values: { url: s } }),
              ),
            })
          );
        }
        var o = t ? tr.openFileFinished : tr.clickFinished,
          l = t ? tr.openFileFinishedWithLink : tr.clickFinishedWithLink;
        return (0, j.jsx)(tb, {
          icon: E.NOg,
          isPreview: a,
          children: n
            ? !0 === a
              ? (0, j.jsx)(U.Z, (0, p._)({}, o))
              : (0, j.jsxs)("div", {
                  className: "flex items-center gap-2",
                  children: [
                    (0, j.jsx)(U.Z, (0, p._)({}, l)),
                    (0, j.jsx)("div", {
                      className:
                        "rounded border border-black/10 bg-white px-2 py-1",
                      children: (0, j.jsx)(eq, {
                        citationMetadata: n,
                        onClick: function () {
                          if (void 0 === n.type || "webpage" === n.type) {
                            var e;
                            eO.m9.logEvent(
                              "chatgpt_browsing_click_link",
                              n.url,
                              {
                                domain:
                                  null !==
                                    (e = ez.get(new URL(n.url).hostname)) &&
                                  void 0 !== e
                                    ? e
                                    : "",
                              },
                            );
                          }
                        },
                      }),
                    }),
                  ],
                })
            : (0, j.jsx)(U.Z, (0, p._)({}, r)),
        });
      }
      function td(e) {
        var t = e.isPreview,
          n = e.citationMetadata,
          a = e.isRetrieval,
          r = n ? (0, j.jsx)(tp, { citationMetadata: n }) : void 0,
          i = tr.quote,
          s = (null == n ? void 0 : n.type) === "webpage" ? n.title : void 0;
        return (
          null != s && (i = tr.quoteWithTitle),
          (0, j.jsx)(tx, {
            iconBase: r,
            icon: a ? E.SnF : void 0,
            isPreview: t,
            isRetrieval: a,
            children: (0, j.jsx)(
              U.Z,
              (0, x._)((0, p._)({}, i), { values: { pageTitle: s } }),
            ),
          })
        );
      }
      function tu(e) {
        var t = e.isPreview,
          n = e.citationMetadata,
          a = e.isRetrieval,
          r = n ? (0, j.jsx)(tp, { citationMetadata: n, size: 18 }) : null;
        return (0, j.jsx)(tx, {
          isRetrieval: a,
          icon: a ? E.cww : q.LVY,
          isPreview: t,
          iconBase: r,
          children: (0, j.jsx)(U.Z, (0, p._)({}, tr.back)),
        });
      }
      function tc(e) {
        var t = e.isPreview,
          n = e.citationMetadata,
          a = e.isRetrieval,
          r = n ? (0, j.jsx)(tp, { citationMetadata: n, size: 18 }) : null;
        return (0, j.jsx)(tx, {
          icon: a ? E.nlg : eW.NV,
          isPreview: t,
          iconBase: r,
          isRetrieval: a,
          children: (0, j.jsx)(U.Z, (0, p._)({}, tr.scroll)),
        });
      }
      function tm(e) {
        var t,
          n = e.commandType,
          a = e.isPreview,
          r = e.citationMetadata,
          i = e.isRetrieval;
        if (!i)
          return (0, j.jsx)(tf, {
            isPreview: a,
            citationMetadata: r,
            isRetrieval: i,
          });
        switch (n) {
          case "search":
            t = tr.searchError;
            break;
          case "click":
          case "open_url":
            t = tr.clickError;
            break;
          case "quote":
          case "quote_full":
          case "quote_lines":
            t = tr.quoteError;
            break;
          case "back":
            t = tr.backError;
            break;
          case "scroll":
            t = tr.scrollError;
            break;
          default:
            return null;
        }
        return (0, j.jsx)(tb, {
          icon: E.bcx,
          isPreview: a,
          children: (0, j.jsx)(U.Z, (0, p._)({}, t)),
        });
      }
      function tf(e) {
        var t = e.isPreview,
          n = e.citationMetadata,
          a = e.isRetrieval,
          r = n ? (0, j.jsx)(tp, { citationMetadata: n, size: 18 }) : null;
        return (0, j.jsx)(tx, {
          icon: q.LVY,
          isPreview: t,
          iconBase: r,
          isRetrieval: a,
          children: (0, j.jsx)(U.Z, (0, p._)({}, tr.error)),
        });
      }
      function tg(e) {
        var t = e.isRetrieval,
          n = e.isPreview,
          a = t ? tr.startingFileSearch : tr.startingBrowsing;
        return (0, j.jsx)(tx, {
          isPreview: n,
          iconBase: (0, j.jsx)(eW.Wp, {
            className: "icon-2xl text-brand-purple",
          }),
          isRetrieval: t,
          children: (0, j.jsx)(U.Z, (0, p._)({}, a)),
        });
      }
      function th(e) {
        var t = e.isRetrieval,
          n = e.isPreview;
        return (0, j.jsx)(tx, {
          iconBase: (0, j.jsx)(eW.aS, { className: "icon-2xl" }),
          icon: t ? E._rq : void 0,
          isPreview: n,
          isComplete: !0,
          isRetrieval: t,
          children: t
            ? (0, j.jsx)(U.Z, (0, p._)({}, tr.finishedFileSearch))
            : (0, j.jsxs)(j.Fragment, {
                children: [
                  (0, j.jsx)("div", {
                    className: "hidden group-hover/tool-expander-closed:block",
                    children: (0, j.jsx)(U.Z, (0, p._)({}, tr.showSteps)),
                  }),
                  (0, j.jsx)("div", {
                    className: "hidden group-hover/tool-expander-open:block",
                    children: (0, j.jsx)(U.Z, (0, p._)({}, tr.hideSteps)),
                  }),
                ],
              }),
        });
      }
      var tp = function (e) {
        var t = e.citationMetadata,
          n = e.size,
          a = void 0 === n ? 24 : n;
        return (0, j.jsx)("div", {
          className: "overflow-hidden rounded-sm bg-[rgba(30,203,239,0.07)]",
          style: { width: a, height: a },
          children: (0, j.jsx)(eL, { url: tk(t), size: a }),
        });
      };
      function tx(e) {
        var t = e.isRetrieval,
          n = (0, v._)(e, ["isRetrieval"]);
        return t
          ? (0, j.jsx)(tb, (0, p._)({}, n))
          : (0, j.jsx)(tv, (0, p._)({}, n));
      }
      function tv(e) {
        var t = e.children,
          n = e.icon,
          a = e.isPreview,
          r = e.iconBase,
          i = e.link,
          s = e.isComplete,
          o =
            null != n
              ? null != r
                ? (0, j.jsxs)("div", {
                    className:
                      "relative h-full w-full text-gray-600 dark:text-gray-200",
                    children: [
                      (0, j.jsx)("div", {
                        className: "absolute left-1 top-1",
                        children: r,
                      }),
                      (0, j.jsx)(n, {
                        className:
                          "absolute bottom-1 right-1 h-4 w-4 stroke-white",
                        strokeWidth: 0.5,
                      }),
                    ],
                  })
                : (0, j.jsx)(n, {
                    className:
                      "h-4 w-4 stroke-white text-gray-600 dark:text-gray-200",
                    strokeWidth: 0.5,
                  })
              : (0, j.jsx)("div", {
                  className:
                    "flex h-full w-full items-center justify-center text-gray-600 dark:text-gray-200",
                  children: r,
                }),
          l = (0, j.jsx)(te, {
            icon: o,
            title: s
              ? (0, j.jsx)(U.Z, (0, p._)({}, tr.searchFinishedTitle))
              : a
              ? (0, j.jsx)(U.Z, (0, p._)({}, tr.searchInProgressTitle))
              : null,
            subtitle: t,
          });
        return (
          a ||
            null == i ||
            (l = (0, j.jsx)("a", {
              href: i,
              target: "_blank",
              rel: "noreferrer",
              className: "block hover:bg-gray-50 dark:hover:bg-gray-800",
              children: (0, j.jsxs)("div", {
                className: "flex items-center justify-between",
                children: [
                  (0, j.jsx)("div", { className: "min-w-0", children: l }),
                  (0, j.jsx)("div", {
                    className: "mr-3 text-gray-600/50",
                    children: (0, j.jsx)(E.AlO, { className: "icon-sm" }),
                  }),
                ],
              }),
            })),
          (0, j.jsx)("div", {
            className:
              "border-b-[0.5px] border-black/10 border-opacity-75 last:border-b-0",
            children: l,
          })
        );
      }
      function tb(e) {
        var t = e.children,
          n = e.icon,
          a = e.isPreview;
        return (0, j.jsxs)("div", {
          className: (0, ec.default)(
            "flex items-center gap-2",
            !0 !== a && "min-h-[24px]",
          ),
          children: [
            null != n && (0, j.jsx)(n, { className: "icon-sm shrink-0" }),
            (0, j.jsx)("div", { children: t }),
          ],
        });
      }
      function tw(e) {
        return e
          .map(function (t, n) {
            if (t.author.role !== V.uU.Tool || (n > 0 && ty(t) && ty(e[n - 1])))
              return null;
            if ("browser_one_box" === t.author.name)
              return {
                type: "search",
                didError: "system_error" === t.content.content_type,
                message: t,
              };
            var a = t.metadata;
            if (!a) return null;
            var r = a.command,
              i = a.status;
            return r
              ? {
                  type: r,
                  status: i,
                  didError: "system_error" === t.content.content_type,
                  message: t,
                }
              : null;
          })
          .filter(Boolean);
      }
      function ty(e) {
        var t, n, a;
        return (
          (null === (t = e.metadata) || void 0 === t ? void 0 : t.command) ===
            "quote" ||
          (null === (n = e.metadata) || void 0 === n ? void 0 : n.command) ===
            "quote_full" ||
          (null === (a = e.metadata) || void 0 === a ? void 0 : a.command) ===
            "quote_lines"
        );
      }
      function tj(e, t) {
        for (var n = t; n >= 0; n--) {
          var a,
            r,
            i =
              null === (a = e[n].message.metadata) || void 0 === a
                ? void 0
                : null === (r = a._cite_metadata) || void 0 === r
                ? void 0
                : r.metadata_list[0];
          if (null != i) return i;
        }
      }
      function tk(e) {
        return (null == e ? void 0 : e.type) !== "file" ? e.url : "";
      }
      function tC() {
        var e = (0, F.useRef)(!0);
        return e.current ? ((e.current = !1), !0) : e.current;
      }
      var tM = n(70737),
        t_ = JSON.parse(
          '{"v":"5.7.5","fr":100,"ip":0,"op":200,"w":20,"h":20,"nm":"Comp 1","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"dot","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"hd":false,"shapes":[{"ty":"gr","hd":false,"it":[{"ty":"rc","hd":false,"d":1,"s":{"a":0,"k":[3.5,3.5],"ix":2},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":0,"k":1.75,"ix":2}},{"ty":"fl","c":{"a":0,"k":[0.6941176470588235,0.3803921568627451,0.9921568627450981],"ix":2},"o":{"a":0,"k":100,"ix":2},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":2},"e":{"a":0,"k":100,"ix":2},"o":{"a":0,"k":0,"ix":2},"m":1,"hd":false},{"ty":"tr","hd":false,"p":{"a":0,"k":[10.00000762939453,9.997123718261719],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]}],"ip":0,"op":200,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":3,"nm":"","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":1,"k":[{"t":100,"s":[0],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":160,"s":[410],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":200,"s":[360],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2},"p":{"a":0,"k":[10,10],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"ip":0,"op":200,"st":0,"bm":0,"hd":false},{"ddd":0,"ind":3,"ty":4,"nm":"compass","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"hd":false,"parent":2,"shapes":[{"ty":"gr","hd":false,"it":[{"ty":"sh","hd":false,"d":1,"ks":{"a":0,"k":{"c":false,"v":[[3.897755676788864,2.156718939201098],[9.466585676788863,0.04442893920109814],[10.31768567678886,0.895618939201098],[8.205185676788863,6.464308939201097],[6.464305676788864,8.205198939201097],[0.8956156767888639,10.3176989392011],[0.04442567678886356,9.466498939201099],[2.156725676788863,3.897748939201098],[3.897755676788864,2.156718939201098],[3.897755676788864,2.156718939201098],[3.897755676788864,2.156718939201098]],"i":[[0,0],[-1.856276666666666,0.7040966666666666],[0.2018000000000004,-0.5320100000000001],[0.7041666666666675,-1.85623],[0.8026800000000005,-0.3044999999999982],[1.85623,-0.7041666666666657],[-0.2018,0.5320999999999998],[-0.7040999999999995,1.8562499999999993],[-0.80274,0.3044900000000004],[0,0],[0,0]],"o":[[1.856276666666667,-0.7040966666666666],[0.532,-0.20181],[-0.7041666666666675,1.8562299999999992],[-0.3044999999999991,0.8025900000000004],[-1.85623,0.7041666666666693],[-0.5320100000000001,0.2018000000000022],[0.7041,-1.85625],[0.3044800000000008,-0.8027300000000004],[0,0],[0,0],[1.856276666666667,-0.7040966666666666]]}}},{"ty":"fl","c":{"a":0,"k":[1,1,1],"ix":2},"o":{"a":0,"k":100,"ix":2},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":2},"e":{"a":0,"k":100,"ix":2},"o":{"a":0,"k":0,"ix":2},"m":1,"hd":false},{"ty":"tr","hd":false,"p":{"a":0,"k":[-5.181057929992676,-5.181064605712891],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]}],"ip":0,"op":200,"st":0,"bm":0}],"markers":[]}',
        ),
        tT = n(68233),
        tN = n.n(tT);
      function tI(e) {
        var t = e.animationData,
          n = e.animationLoopCounter,
          a = (0, F.useRef)(null);
        return (
          (0, F.useEffect)(
            function () {
              var e;
              null === (e = a.current) || void 0 === e || e.goToAndPlay(0);
            },
            [n],
          ),
          (0, j.jsx)(tN(), {
            animationData: t,
            lottieRef: a,
            loop: !1,
            autoplay: !1,
          })
        );
      }
      function tS(e) {
        var t = e.animationLoopCounter;
        return (0, j.jsx)(tI, { animationData: t_, animationLoopCounter: t });
      }
      function tP(e) {
        var t = e.animationLoopCounter;
        return (0, j.jsx)(tI, { animationData: t_, animationLoopCounter: t });
      }
      function tR(e) {
        return (0, j.jsx)(
          eW.A0,
          (0, x._)(
            (0, p._)(
              { width: "8", height: "9", viewBox: "0 0 8 9", fill: "none" },
              e,
            ),
            {
              children: (0, j.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M7.66607 0.376042C8.01072 0.605806 8.10385 1.07146 7.87408 1.4161L3.54075 7.9161C3.40573 8.11863 3.18083 8.24304 2.93752 8.24979C2.69421 8.25654 2.46275 8.1448 2.31671 7.95008L0.150044 5.06119C-0.098484 4.72982 -0.0313267 4.25972 0.300044 4.01119C0.631415 3.76266 1.10152 3.82982 1.35004 4.16119L2.88068 6.20204L6.62601 0.584055C6.85577 0.239408 7.32142 0.146278 7.66607 0.376042Z",
                fill: "currentColor",
              }),
            },
          ),
        );
      }
      function tZ(e) {
        return (0, j.jsxs)(
          eW.A0,
          (0, x._)(
            (0, p._)(
              { width: "4", height: "12", viewBox: "0 0 4 12", fill: "none" },
              e,
            ),
            {
              children: [
                (0, j.jsx)("mask", {
                  id: "path-1-inside-1_1975_4008",
                  fill: "currentColor",
                  children: (0, j.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M1 6.5C1 7.05228 1.44772 7.5 2 7.5C2.55228 7.5 3 7.05228 3 6.5V1.5C3 0.947715 2.55228 0.5 2 0.5C1.44772 0.5 1 0.947715 1 1.5L1 6.5ZM0.75 10.25C0.75 10.9404 1.30964 11.5 2 11.5C2.69036 11.5 3.25 10.9404 3.25 10.25C3.25 9.55964 2.69036 9 2 9C1.30964 9 0.75 9.55964 0.75 10.25Z",
                  }),
                }),
                (0, j.jsx)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M1 6.5C1 7.05228 1.44772 7.5 2 7.5C2.55228 7.5 3 7.05228 3 6.5V1.5C3 0.947715 2.55228 0.5 2 0.5C1.44772 0.5 1 0.947715 1 1.5L1 6.5ZM0.75 10.25C0.75 10.9404 1.30964 11.5 2 11.5C2.69036 11.5 3.25 10.9404 3.25 10.25C3.25 9.55964 2.69036 9 2 9C1.30964 9 0.75 9.55964 0.75 10.25Z",
                  fill: "currentColor",
                }),
                (0, j.jsx)("path", {
                  d: "M1 6.5H-0.25H1ZM1 1.5L-0.25 1.5L-0.25 1.5L1 1.5ZM2 6.25C2.13807 6.25 2.25 6.36193 2.25 6.5H-0.25C-0.25 7.74264 0.757359 8.75 2 8.75V6.25ZM1.75 6.5C1.75 6.36193 1.86193 6.25 2 6.25V8.75C3.24264 8.75 4.25 7.74264 4.25 6.5H1.75ZM1.75 1.5V6.5H4.25V1.5H1.75ZM2 1.75C1.86193 1.75 1.75 1.63807 1.75 1.5H4.25C4.25 0.257359 3.24264 -0.75 2 -0.75V1.75ZM2.25 1.5C2.25 1.63807 2.13807 1.75 2 1.75V-0.75C0.757359 -0.75 -0.25 0.257359 -0.25 1.5L2.25 1.5ZM2.25 6.5L2.25 1.5L-0.25 1.5L-0.25 6.5L2.25 6.5ZM2 10.25H-0.5C-0.5 11.6307 0.619288 12.75 2 12.75V10.25ZM2 10.25V12.75C3.38071 12.75 4.5 11.6307 4.5 10.25H2ZM2 10.25H2H4.5C4.5 8.86929 3.38071 7.75 2 7.75V10.25ZM2 10.25H2V7.75C0.619288 7.75 -0.5 8.86929 -0.5 10.25H2Z",
                  fill: "currentColor",
                  mask: "url(#path-1-inside-1_1975_4008)",
                }),
              ],
            },
          ),
        );
      }
      function tL(e) {
        return (0, j.jsx)(
          eW.A0,
          (0, x._)(
            (0, p._)(
              { width: "8", height: "9", viewBox: "0 0 8 9", fill: "none" },
              e,
            ),
            {
              children: (0, j.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M7.32256 1.48447C7.59011 1.16827 7.55068 0.695034 7.23447 0.427476C6.91827 0.159918 6.44503 0.199354 6.17748 0.515559L4.00002 3.08892L1.82256 0.515559C1.555 0.199354 1.08176 0.159918 0.765559 0.427476C0.449355 0.695034 0.409918 1.16827 0.677476 1.48447L3.01755 4.25002L0.677476 7.01556C0.409918 7.33176 0.449354 7.805 0.765559 8.07256C1.08176 8.34011 1.555 8.30068 1.82256 7.98447L4.00002 5.41111L6.17748 7.98447C6.44503 8.30068 6.91827 8.34011 7.23447 8.07256C7.55068 7.805 7.59011 7.33176 7.32256 7.01556L4.98248 4.25002L7.32256 1.48447Z",
                fill: "currentColor",
              }),
            },
          ),
        );
      }
      function tD(e) {
        var t,
          n,
          a = e.icon,
          r = e.status,
          i = e.displayMessage,
          s = e.displayMessageValues,
          o = e.isFirstMessageInTurn,
          d = (0, b._)((0, F.useState)(0), 2),
          u = d[0],
          c = d[1];
        return (
          (t = function () {
            r === l.Running &&
              c(function (e) {
                return e + 1;
              });
          }),
          (n = (0, F.useRef)(t)),
          (0, F.useEffect)(
            function () {
              n.current = t;
            },
            [t],
          ),
          (0, F.useEffect)(
            function () {
              var e = window.setInterval(function () {
                n.current();
              }, 2e3);
              return function () {
                return clearInterval(e);
              };
            },
            [2e3],
          ),
          (0, j.jsxs)("div", {
            className: (0, ec.default)("flex items-center gap-2", o && "mt-2"),
            children: [
              (0, j.jsx)(tB, { icon: a, status: r, animationLoopCounter: u }),
              (0, j.jsx)(tF, {
                status: r,
                displayMessage: i,
                displayMessageValues: s,
                animationLoopCounter: u,
              }),
            ],
          })
        );
      }
      function tB(e) {
        var t,
          n,
          a = e.icon,
          r = e.status,
          i = e.animationLoopCounter,
          s = tC();
        switch (r) {
          case l.Finished:
            (t = (0, j.jsx)(tR, {})), (n = "bg-green-600");
            break;
          case l.Error:
            (t = (0, j.jsx)(tZ, {})), (n = "bg-orange-500");
            break;
          case l.Stopped:
            (t = (0, j.jsx)(tL, {})), (n = "bg-gray-300");
            break;
          case l.Running:
            (t = (0, j.jsx)(a, { animationLoopCounter: i })),
              (n = "bg-brand-purple");
            break;
          default:
            (0, eR.Z)(r);
        }
        var o = { opacity: 0, scale: 0, rotate: -180, x: 0 },
          d = { type: "spring", bounce: 0.3, duration: 0.3 };
        return (
          s &&
            (r === l.Running
              ? ((o = { opacity: 0, scale: 0.5, rotate: -180, x: -8 }),
                (d = { type: "spring", bounce: 0.3, duration: 0.5 }))
              : (o = !1)),
          (0, j.jsx)("div", {
            className: "relative h-5 w-5 shrink-0",
            children: (0, j.jsx)(
              e4.E.div,
              {
                className: (0, ec.default)(
                  "absolute left-0 top-0 flex h-full w-full items-center justify-center rounded-full text-white",
                  n,
                ),
                initial: o,
                animate: { opacity: 1, scale: 1, rotate: 0, x: 0 },
                exit: { opacity: 0, scale: 0.6, x: 0 },
                transition: d,
                children: t,
              },
              r,
            ),
          })
        );
      }
      function tF(e) {
        var t = e.status,
          n = e.displayMessage,
          a = e.displayMessageValues,
          r = e.animationLoopCounter,
          i = tC(),
          s = (0, b._)((0, F.useState)({ message: n, values: a }), 2),
          o = s[0],
          d = s[1];
        (0, F.useEffect)(
          function () {
            d({ message: n, values: a });
          },
          [r],
        ),
          (0, F.useEffect)(
            function () {
              t !== l.Running && d({ message: n, values: a });
            },
            [t],
          );
        var u = { opacity: 0, x: 0, y: 15 },
          c = {
            type: "spring",
            bounce: 0.3,
            opacity: { duration: 0.15 },
            y: { duration: 0.3 },
          };
        return (
          i &&
            (t === l.Running
              ? ((u = { opacity: 0, x: -8, y: 0 }),
                (c = {
                  type: "spring",
                  bounce: 0.3,
                  duration: 0.5,
                  delay: 0.15,
                }))
              : (u = !1)),
          (0, j.jsx)("div", {
            className: (0, ec.default)(
              "relative h-5 w-full leading-5",
              "-mt-[0.75px]",
              t === l.Running
                ? "text-token-text-secondary"
                : "text-token-text-tertiary",
            ),
            children: (0, j.jsx)(tM.M, {
              children: (0, j.jsx)(
                e4.E.div,
                {
                  className: "absolute left-0 top-0 line-clamp-1",
                  initial: u,
                  animate: { opacity: 1, x: 0, y: 0 },
                  exit: { opacity: 0, x: 0, y: -15 },
                  transition: c,
                  children: (0, j.jsx)(
                    U.Z,
                    (0, x._)((0, p._)({}, o.message), { values: o.values }),
                  ),
                },
                o.message.id,
              ),
            }),
          })
        );
      }
      function tE(e) {
        return (0, et.qi)(e) && !(0, et.oH)(e);
      }
      function tq(e) {
        var t,
          n,
          a = e.messages,
          r = e.isFirstMessageInTurn,
          i = e.isLastMessageInTurn,
          s = e.isRequestActive,
          o = a.map(function (e) {
            return e.message;
          }),
          d = tw(o),
          u = d.filter(tA),
          c = l.Running,
          m = tz.starting;
        if (o.some(tE)) (c = l.Stopped), (m = tz.browsingStopped);
        else if (i && s)
          u.length > 0 &&
            ((m = (n = (function (e) {
              switch (e.type) {
                case V.$x.Search:
                  var t,
                    n,
                    a =
                      null === (t = e.message.metadata) || void 0 === t
                        ? void 0
                        : null === (n = t.args) || void 0 === n
                        ? void 0
                        : n[0];
                  if (null != a)
                    return {
                      displayMessage: tz.searchingForQuery,
                      displayMessageValues: { query: a },
                    };
                  return { displayMessage: tz.searching };
                case V.$x.Click:
                case V.$x.OpenUrl:
                case V.$x.Quote:
                case V.$x.QuoteFull:
                case V.$x.QuoteLines:
                  var r = tU(e);
                  return {
                    displayMessage: tz.reading,
                    displayMessageValues: { url: null != r ? tO(r) : null },
                  };
                case V.$x.Back:
                case V.$x.Scroll:
                  throw Error("No display string for command: ".concat(e.type));
                default:
                  throw (
                    ((0, eR.Z)(e.type),
                    Error("Unknown command type: ".concat(e.type)))
                  );
              }
            })(u[u.length - 1])).displayMessage),
            (t = n.displayMessageValues));
        else if (
          d.every(function (e) {
            return e.didError;
          })
        )
          (c = l.Error), (m = tz.browsingFailed);
        else {
          c = l.Finished;
          var f = new Set(u.map(tU).filter(Boolean));
          (m = tz.browsingFinished),
            (t = {
              numSites: f.size,
              url: 1 === f.size ? tO(Array.from(f)[0]) : null,
            });
        }
        return (0, j.jsx)(tD, {
          icon: tS,
          status: c,
          displayMessage: m,
          displayMessageValues: t,
          isFirstMessageInTurn: r,
        });
      }
      function tA(e) {
        switch (e.type) {
          case V.$x.Search:
            return !0;
          case V.$x.Click:
          case V.$x.OpenUrl:
          case V.$x.Quote:
          case V.$x.QuoteFull:
          case V.$x.QuoteLines:
            return null != tU(e);
          case V.$x.Back:
          case V.$x.Scroll:
            return !1;
          default:
            return (0, eR.Z)(e.type), !1;
        }
      }
      function tU(e) {
        var t,
          n,
          a =
            null === (t = e.message.metadata) || void 0 === t
              ? void 0
              : null === (n = t._cite_metadata) || void 0 === n
              ? void 0
              : n.metadata_list[0];
        return null != a && "file" !== a.type ? a.url : null;
      }
      function tO(e) {
        try {
          return new URL(e).hostname;
        } catch (e) {
          return null;
        }
      }
      ((a = l || (l = {}))[(a.Running = 0)] = "Running"),
        (a[(a.Finished = 1)] = "Finished"),
        (a[(a.Error = 2)] = "Error"),
        (a[(a.Stopped = 3)] = "Stopped");
      var tz = (0, A.vU)({
          starting: {
            id: "browsingMessage.starting",
            defaultMessage: "Browsing the web",
            description: "Status message when browsing is starting",
          },
          browsingFinished: {
            id: "browsingMessage.browsingFinished",
            defaultMessage:
              "{numSites, plural, =0 {Browsed the web} one {Browsed {url}} other {Browsed # sites}}",
            description: "Status message when browsing is finished",
          },
          browsingStopped: {
            id: "browsingMessage.browsingStopped",
            defaultMessage: "Stopped browsing",
            description: "Status message when browsing was stopped",
          },
          browsingFailed: {
            id: "browsingMessage.browsingFailed",
            defaultMessage: "Error browsing",
            description: "Status message when browsing failed",
          },
          searching: {
            id: "browsingMessage.searching",
            defaultMessage: "Searching Bing",
            description: "Status message when searching Bing",
          },
          searchingForQuery: {
            id: "browsingMessage.searchingForQuery",
            defaultMessage: "Searching “{query}”",
            description: "Status message when searching for a query",
          },
          reading: {
            id: "browsingMessage.reading",
            defaultMessage: "Reading {url}",
            description: "Status message when reading from a webpage",
          },
        }),
        tW = F.memo(function (e) {
          var t,
            n = e.message,
            a = e.isCollapsed,
            r = (0, O.Z)(),
            i =
              null === (t = n.message.metadata) || void 0 === t
                ? void 0
                : t.aggregate_result;
          if (!i)
            return console.error("Corrupt code execution result message"), null;
          var s = i.messages.filter(tJ),
            o = a && s.length > 0,
            l = a && null != i.final_expression_output,
            d = a && null != i.in_kernel_exception,
            u = !a && i.messages.filter(tG).length > 0;
          return (0, j.jsxs)(j.Fragment, {
            children: [
              o &&
                (0, j.jsx)(tV, {
                  label: "STDOUT/STDERR",
                  output: s.map(function (e, t) {
                    return (0, j.jsx)(
                      "span",
                      {
                        className:
                          "stderr" === e.stream_name ? "text-red-500" : "",
                        children: e.text,
                      },
                      "".concat(t),
                    );
                  }),
                }),
              l &&
                (0, j.jsx)(tV, {
                  label: r.formatMessage(t$.resultLabel),
                  output: i.final_expression_output,
                }),
              d &&
                (0, j.jsx)("div", {
                  className:
                    "overflow-auto rounded border-t border-gray-500 bg-black text-white",
                  children: (0, j.jsx)("div", {
                    className: "border-l-4 border-red-500 p-2 text-xs",
                    children: (0, j.jsx)("div", {
                      className:
                        "scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-700 flex max-h-64 flex-col-reverse",
                      children: (0, j.jsx)("pre", {
                        className: "shrink-0",
                        children: i.in_kernel_exception.traceback.join(""),
                      }),
                    }),
                  }),
                }),
              u &&
                i.messages.filter(tG).map(function (e, t) {
                  return (0, j.jsx)(
                    "div",
                    {
                      className: "empty:hidden",
                      children: (0, j.jsx)(tY, { jupyterMessage: e }),
                    },
                    t,
                  );
                }),
            ],
          });
        });
      function tV(e) {
        var t = e.label,
          n = e.output;
        return (0, j.jsxs)("div", {
          className: "rounded-md bg-black p-4 text-xs",
          children: [
            (0, j.jsx)("div", { className: "mb-1 text-gray-400", children: t }),
            (0, j.jsx)("div", {
              className:
                "scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-700 prose flex max-h-64 flex-col-reverse overflow-auto text-white",
              children: (0, j.jsx)("pre", {
                className: "shrink-0",
                children: n,
              }),
            }),
          ],
        });
      }
      var tQ = Math.log(151) / Math.log(1.5);
      function tH(e) {
        var t = e.fileId,
          n = (0, b._)((0, F.useState)(""), 2),
          a = n[0],
          r = n[1];
        return (
          (0, ek.a)({
            queryKey: ["getFileDownloadLink", t],
            queryFn: function () {
              return Q.ZP.getFileDownloadLink(t).then(function (e) {
                return (
                  (null == e ? void 0 : e.status) === "success" &&
                    r(e.download_url),
                  e
                );
              });
            },
            refetchInterval: function (e, t) {
              var n = t.state.dataUpdateCount;
              return (
                (null == e ? void 0 : e.status) !== "success" &&
                !(n > tQ) &&
                "error" !== t.state.status &&
                100 * Math.pow(1.5, n)
              );
            },
          }),
          (0, j.jsxs)(j.Fragment, {
            children: [" ", a && (0, j.jsx)("img", { src: a }), " "],
          })
        );
      }
      function tG(e) {
        return (
          "image" === e.message_type ||
          ("image_url" in e && (0, eD.$H)(e.image_url + ""))
        );
      }
      function tY(e) {
        var t = e.jupyterMessage;
        if (null !== (0, F.useContext)(X.gB))
          return (0, j.jsxs)("div", {
            className:
              "flex h-52 w-full max-w-xs flex-col items-center justify-center gap-2 rounded-md border-black/5 bg-gray-100 p-7 text-center text-gray-500 dark:border-white/10",
            children: [
              (0, j.jsx)(E.LFN, { className: "icon-lg" }),
              (0, j.jsx)(U.Z, (0, p._)({}, t$.imageNotSupported)),
            ],
          });
        if (null != t.image_payload)
          return (0, j.jsx)("img", {
            src: "data:image/png;base64,".concat(t.image_payload),
          });
        if (null != t.image_url) {
          var n = (0, eD.Iy)(t.image_url);
          return (0, j.jsx)(tH, { fileId: n });
        }
        return null;
      }
      function tJ(e) {
        return "stream" === e.message_type;
      }
      var t$ = (0, A.vU)({
          imageNotSupported: {
            id: "CodeExecutionOutputMessage.imageNotSupported",
            defaultMessage: "Image output is not supported in a shared chat",
            description:
              "Message shown when an image is output in a shared thread",
          },
          resultLabel: {
            id: "CodeExecutionOutputMessage.resultLabel",
            defaultMessage: "RESULT",
            description: "Label show with the code execution result output",
          },
        }),
        tK = n(77997),
        tX = n(67666),
        t0 = n(47567),
        t1 = n(96237),
        t2 = n(61110),
        t5 = n(55975),
        t4 = n(46050),
        t3 = n(29874),
        t6 = n(8449),
        t7 = n(15472),
        t8 = {
          tokenize: function (e, t, n) {
            var a = function (t) {
                return t === t5.q.eof || (0, t3.Ch)(t)
                  ? r(t)
                  : (e.enter("mathFlowFenceMeta"),
                    e.enter(t7.V.chunkString, {
                      contentType: t6._.contentTypeString,
                    }),
                    (function t(a) {
                      return a === t5.q.eof || (0, t3.Ch)(a)
                        ? (e.exit(t7.V.chunkString),
                          e.exit("mathFlowFenceMeta"),
                          r(a))
                        : a === t5.q.rightSquareBracket
                        ? n(a)
                        : (e.consume(a), t);
                    })(t));
              },
              r = function (n) {
                return (
                  e.exit("mathFlowFence"),
                  o.interrupt
                    ? t(n)
                    : (function t(n) {
                        return n === t5.q.eof
                          ? i(n)
                          : (0, t3.Ch)(n)
                          ? e.attempt(
                              t9,
                              e.attempt(
                                { tokenize: s, partial: !0 },
                                i,
                                d ? (0, t4.f)(e, t, t7.V.linePrefix, d + 1) : t,
                              ),
                              i,
                            )(n)
                          : (e.enter("mathFlowValue"),
                            (function n(a) {
                              return a === t5.q.eof || (0, t3.Ch)(a)
                                ? (e.exit("mathFlowValue"), t(a))
                                : (e.consume(a), n);
                            })(n));
                      })(n)
                );
              },
              i = function (n) {
                return e.exit("mathFlow"), t(n);
              },
              s = function (e, t, n) {
                var a = [];
                return (0, t4.f)(
                  e,
                  function (t) {
                    return (
                      e.enter("mathFlowFence"),
                      e.enter("mathFlowFenceSequence"),
                      (function t(i) {
                        return (i === t5.q.backslash && 0 === a.length) ||
                          (i === t5.q.rightSquareBracket &&
                            a[0] === t5.q.backslash)
                          ? (e.consume(i), a.push(i), t)
                          : a < u
                          ? n(i)
                          : (e.exit("mathFlowFenceSequence"),
                            (0, t4.f)(e, r, t7.V.whitespace)(i));
                      })(t)
                    );
                  },
                  t7.V.linePrefix,
                  t6._.tabSize,
                );
                function r(a) {
                  return a === t5.q.eof || (0, t3.Ch)(a)
                    ? (e.exit("mathFlowFence"), t(a))
                    : n(a);
                }
              },
              o = this,
              l = this.events[this.events.length - 1],
              d =
                l && l[1].type === t7.V.linePrefix
                  ? l[2].sliceSerialize(l[1], !0).length
                  : 0,
              u = [];
            return function (t) {
              return (
                t5.q.backslash,
                e.enter("mathFlow"),
                e.enter("mathFlowFence"),
                e.enter("mathFlowFenceSequence"),
                (function t(r) {
                  return r === t5.q.backslash ||
                    (r === t5.q.leftSquareBracket && u[0] === t5.q.backslash)
                    ? (e.consume(r), u.push(r), t)
                    : (e.exit("mathFlowFenceSequence"),
                      u.length < 2
                        ? n(r)
                        : (0, t4.f)(e, a, t7.V.whitespace)(r));
                })(t)
              );
            };
          },
          concrete: !0,
        },
        t9 = {
          tokenize: function (e, t, n) {
            var a = function (e) {
                return r.parser.lazy[r.now().line] ? n(e) : t(e);
              },
              r = this;
            return function (t) {
              return (
                e.enter(t7.V.lineEnding),
                e.consume(t),
                e.exit(t7.V.lineEnding),
                a
              );
            };
          },
          partial: !0,
        },
        ne = {
          tokenize: function (e, t, n) {
            var a = function (t) {
                return t === t5.q.eof || (0, t3.Ch)(t)
                  ? r(t)
                  : (e.enter("mathFlowFenceMeta"),
                    e.enter(t7.V.chunkString, {
                      contentType: t6._.contentTypeString,
                    }),
                    (function t(a) {
                      return a === t5.q.eof || (0, t3.Ch)(a)
                        ? (e.exit(t7.V.chunkString),
                          e.exit("mathFlowFenceMeta"),
                          r(a))
                        : a === t5.q.dollarSign
                        ? n(a)
                        : (e.consume(a), t);
                    })(t));
              },
              r = function (n) {
                return (
                  e.exit("mathFlowFence"),
                  o.interrupt
                    ? t(n)
                    : (function t(n) {
                        return n === t5.q.eof
                          ? i(n)
                          : (0, t3.Ch)(n)
                          ? e.attempt(
                              nt,
                              e.attempt(
                                { tokenize: s, partial: !0 },
                                i,
                                d ? (0, t4.f)(e, t, t7.V.linePrefix, d + 1) : t,
                              ),
                              i,
                            )(n)
                          : (e.enter("mathFlowValue"),
                            (function n(a) {
                              return a === t5.q.eof || (0, t3.Ch)(a)
                                ? (e.exit("mathFlowValue"), t(a))
                                : (e.consume(a), n);
                            })(n));
                      })(n)
                );
              },
              i = function (n) {
                return e.exit("mathFlow"), t(n);
              },
              s = function (e, t, n) {
                var a = 0;
                return (0, t4.f)(
                  e,
                  function (t) {
                    return (
                      e.enter("mathFlowFence"),
                      e.enter("mathFlowFenceSequence"),
                      (function t(i) {
                        return i === t5.q.dollarSign
                          ? (e.consume(i), a++, t)
                          : a < u
                          ? n(i)
                          : (e.exit("mathFlowFenceSequence"),
                            (0, t4.f)(e, r, t7.V.whitespace)(i));
                      })(t)
                    );
                  },
                  t7.V.linePrefix,
                  t6._.tabSize,
                );
                function r(a) {
                  return a === t5.q.eof || (0, t3.Ch)(a)
                    ? (e.exit("mathFlowFence"), t(a))
                    : n(a);
                }
              },
              o = this,
              l = o.events[o.events.length - 1],
              d =
                l && l[1].type === t7.V.linePrefix
                  ? l[2].sliceSerialize(l[1], !0).length
                  : 0,
              u = 0;
            return function (t) {
              return (
                t5.q.dollarSign,
                e.enter("mathFlow"),
                e.enter("mathFlowFence"),
                e.enter("mathFlowFenceSequence"),
                (function t(r) {
                  return r === t5.q.dollarSign
                    ? (e.consume(r), u++, t)
                    : (e.exit("mathFlowFenceSequence"),
                      u < 2 ? n(r) : (0, t4.f)(e, a, t7.V.whitespace)(r));
                })(t)
              );
            };
          },
          concrete: !0,
        },
        nt = {
          tokenize: function (e, t, n) {
            var a = function (e) {
                return r.parser.lazy[r.now().line] ? n(e) : t(e);
              },
              r = this;
            return function (t) {
              return (
                (0, t3.Ch)(t),
                e.enter(t7.V.lineEnding),
                e.consume(t),
                e.exit(t7.V.lineEnding),
                a
              );
            };
          },
          partial: !0,
        };
      function nn(e) {
        var t,
          n,
          a = e.length - 4,
          r = 3;
        if (
          (e[3][1].type === t7.V.lineEnding || "space" === e[r][1].type) &&
          (e[a][1].type === t7.V.lineEnding || "space" === e[a][1].type)
        ) {
          for (t = r; ++t < a; )
            if ("mathTextData" === e[t][1].type) {
              (e[a][1].type = "mathTextPadding"),
                (e[r][1].type = "mathTextPadding"),
                (r += 2),
                (a -= 2);
              break;
            }
        }
        for (t = r - 1, a++; ++t <= a; )
          void 0 === n
            ? t !== a && e[t][1].type !== t7.V.lineEnding && (n = t)
            : (t === a || e[t][1].type === t7.V.lineEnding) &&
              ((e[n][1].type = "mathTextData"),
              t !== n + 2 &&
                ((e[n][1].end = e[t - 1][1].end),
                e.splice(n + 2, t - n - 2),
                (a -= t - n - 2),
                (t = n + 2)),
              (n = void 0));
        return e;
      }
      function na(e) {
        return (
          e !== t5.q.backslash ||
          this.events[this.events.length - 1][1].type === t7.V.characterEscape
        );
      }
      function nr(e) {
        var t,
          n,
          a = e.length - 4,
          r = 3;
        if (
          (e[3][1].type === t7.V.lineEnding || "space" === e[r][1].type) &&
          (e[a][1].type === t7.V.lineEnding || "space" === e[a][1].type)
        ) {
          for (t = r; ++t < a; )
            if ("mathTextData" === e[t][1].type) {
              (e[a][1].type = "mathTextPadding"),
                (e[r][1].type = "mathTextPadding"),
                (r += 2),
                (a -= 2);
              break;
            }
        }
        for (t = r - 1, a++; ++t <= a; )
          void 0 === n
            ? t !== a && e[t][1].type !== t7.V.lineEnding && (n = t)
            : (t === a || e[t][1].type === t7.V.lineEnding) &&
              ((e[n][1].type = "mathTextData"),
              t !== n + 2 &&
                ((e[n][1].end = e[t - 1][1].end),
                e.splice(n + 2, t - n - 2),
                (a -= t - n - 2),
                (t = n + 2)),
              (n = void 0));
        return e;
      }
      function ni(e) {
        return (
          e !== t5.q.dollarSign ||
          this.events[this.events.length - 1][1].type === t7.V.characterEscape
        );
      }
      function ns(e) {
        var t,
          n,
          a = e.length - 4,
          r = 3;
        if (
          (e[3][1].type === t7.V.lineEnding || "space" === e[r][1].type) &&
          (e[a][1].type === t7.V.lineEnding || "space" === e[a][1].type)
        ) {
          for (t = r; ++t < a; )
            if ("mathTextData" === e[t][1].type) {
              (e[a][1].type = "mathTextPadding"),
                (e[r][1].type = "mathTextPadding"),
                (r += 2),
                (a -= 2);
              break;
            }
        }
        for (t = r - 1, a++; ++t <= a; )
          void 0 === n
            ? t !== a && e[t][1].type !== t7.V.lineEnding && (n = t)
            : (t === a || e[t][1].type === t7.V.lineEnding) &&
              ((e[n][1].type = "mathTextData"),
              t !== n + 2 &&
                ((e[n][1].end = e[t - 1][1].end),
                e.splice(n + 2, t - n - 2),
                (a -= t - n - 2),
                (t = n + 2)),
              (n = void 0));
        return e;
      }
      function no(e) {
        return (
          e !== t5.q.backslash ||
          this.events[this.events.length - 1][1].type === t7.V.characterEscape
        );
      }
      var nl = n(67726),
        nd = n(63395),
        nu = n(93362),
        nc = n(45369),
        nm = n(42426),
        nf = n(65028),
        ng = n(88366),
        nh = n(11084),
        np = n(28512);
      function nx() {
        var e = (0, w._)(["bg-black rounded-md"]);
        return (
          (nx = function () {
            return e;
          }),
          e
        );
      }
      function nv() {
        var e = (0, w._)([
          "flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans justify-between rounded-t-md",
        ]);
        return (
          (nv = function () {
            return e;
          }),
          e
        );
      }
      function nb() {
        var e = (0, w._)(["p-4 overflow-y-auto"]);
        return (
          (nb = function () {
            return e;
          }),
          e
        );
      }
      function nw() {
        var e = (0, w._)(["", ""]);
        return (
          (nw = function () {
            return e;
          }),
          e
        );
      }
      var ny = z.Z.div(nx()),
        nj = z.Z.div(nv()),
        nk = z.Z.div(nb()),
        nC = z.Z.code(nw(), function (e) {
          return e.$shouldWrap ? "!whitespace-pre-wrap" : "!whitespace-pre";
        });
      function nM(e) {
        var t = e.children,
          n = e.className,
          a = e.language,
          r = e.content,
          i = (0, F.useCallback)(
            function () {
              (0, nh.S)(r);
            },
            [r],
          );
        return (0, j.jsx)(n_, {
          title: a,
          headerDecoration: (0, j.jsx)(np.Z, {
            buttonText: "Copy code",
            onCopy: i,
          }),
          className: "mb-4",
          codeClassName: n,
          children: t,
        });
      }
      function n_(e) {
        var t = e.children,
          n = e.title,
          a = e.headerDecoration,
          r = e.shouldWrapCode,
          i = e.className,
          s = e.codeClassName;
        return (0, j.jsxs)(ny, {
          className: i,
          children: [
            (0, j.jsxs)(nj, {
              children: [n && (0, j.jsx)("span", { children: n }), a],
            }),
            (0, j.jsx)(nk, {
              children: (0, j.jsx)(nC, {
                $shouldWrap: void 0 !== r && r,
                className: s,
                children: t,
              }),
            }),
          ],
        });
      }
      var nT = n(88798),
        nN = "sandbox:";
      function nI(e) {
        var t,
          n,
          a,
          r = e.messageId,
          i = e.clientThreadId,
          s = e.href,
          o = (0, v._)(e, ["messageId", "clientThreadId", "href"]),
          l = null !== (0, F.useContext)(X.gB),
          d = (0, ej.NL)(),
          u = (0, b._)((0, F.useState)(!1), 2),
          c = u[0],
          m = u[1],
          f = s.substring(nN.length),
          g = Y.tQ.getServerThreadId(i),
          w = (0, O.Z)(),
          k = (0, F.useCallback)(function (e) {
            var t = document.createElement("a");
            (t.href = e), t.click(), m(!1);
          }, []),
          C = ((t = (0, F.useCallback)(function (e) {
            m(!1), nT.m.danger(e);
          }, [])),
          (n = (0, eD.VF)()),
          (0, ek.a)({
            queryKey: nP(r, f),
            queryFn: function () {
              return Q.ZP.downloadFromInterpreter(r, g, f)
                .then(function (e) {
                  return (
                    (null == e ? void 0 : e.status) === "success" &&
                      k(e.download_url),
                    e
                  );
                })
                .catch(function (e) {
                  var a = n("default_download_link_error", { fileName: f });
                  throw (
                    (void 0 !== e.code && (a = n(e.code)), null == t || t(a), e)
                  );
                });
            },
            enabled: !!(c && !l && r && g && f),
          })).data,
          M = (0, F.useCallback)(
            ((a = (0, h._)(function (e) {
              return (0, y.Jh)(this, function (t) {
                return (
                  void 0 !== i &&
                    (e.preventDefault(),
                    (void 0 === C ||
                      (null == C ? void 0 : C.status) === "error") &&
                      d.invalidateQueries({ queryKey: nP(r, f) }),
                    (null == C ? void 0 : C.status) == "success" &&
                    (null == C ? void 0 : C.download_url)
                      ? k(C.download_url)
                      : m(!0)),
                  [2]
                );
              });
            })),
            function (e) {
              return a.apply(this, arguments);
            }),
            [i, C, d, r, f, k],
          );
        return (0, j.jsx)(eZ.u, {
          closeOnOutsideClick: !1,
          delayDuration: 0,
          label: (0, j.jsxs)("span", {
            className: "flex items-center gap-1",
            children: [
              c
                ? w.formatMessage(nR.startingDownload)
                : w.formatMessage(nR.downloadFile),
              c && (0, j.jsx)(eV.Z, {}),
            ],
          }),
          side: "top",
          sideOffset: 4,
          children: (0, j.jsx)(
            "a",
            (0, x._)((0, p._)({}, o), {
              className: "cursor-pointer",
              onClick: function (e) {
                return !c && M(e);
              },
            }),
          ),
        });
      }
      function nS(e) {
        return (0, j.jsx)(eZ.u, {
          closeOnOutsideClick: !1,
          delayDuration: 0,
          label: (0, j.jsx)("span", {
            className: "flex items-center gap-1",
            children: (0, j.jsx)(U.Z, (0, p._)({}, nR.downloadUnavailable)),
          }),
          side: "top",
          sideOffset: 4,
          children: (0, j.jsx)(
            "span",
            (0, x._)((0, p._)({}, e), {
              className:
                "font-semibold text-gray-500 underline dark:text-gray-300",
            }),
          ),
        });
      }
      function nP(e, t) {
        return ["downloadSandboxLink", e, t];
      }
      var nR = (0, A.vU)({
          downloadFile: {
            id: "SandboxDownload.downloadFile",
            defaultMessage: "Download file",
            description: "Tooltip label for downloading a file button",
          },
          startingDownload: {
            id: "SandboxDownload.startingDownload",
            defaultMessage: "Starting download",
            description:
              "Tooltip label for downloading started for file button",
          },
          downloadUnavailable: {
            id: "SandboxDownload.downloadUnavailable",
            defaultMessage: "File download not supported in a shared chat",
            description:
              "Tooltip label indicating file is unavailable to download for shared conversations",
          },
        }),
        nZ = function (e) {
          return e.startsWith(nN) ? e : (0, nd.A)(e);
        },
        nL = [
          nf.Z,
          [
            function () {
              var e,
                t,
                n = function (e, t) {
                  (a[e] ? a[e] : (a[e] = [])).push(t);
                },
                a = this.data();
              n("micromarkExtensions", {
                flow:
                  ((e = {}),
                  (0, t1._)(e, t5.q.dollarSign, ne),
                  (0, t1._)(e, t5.q.backslash, t8),
                  e),
                text:
                  ((t = {}),
                  (0, t1._)(t, t5.q.dollarSign, {
                    tokenize: function (e, t, n) {
                      var a,
                        r,
                        i = 0;
                      return function (t) {
                        return (
                          e.enter("mathText"),
                          e.enter("mathTextSequence"),
                          (function t(a) {
                            return a === t5.q.dollarSign
                              ? (e.consume(a), i++, t)
                              : i < 2
                              ? n(a)
                              : (e.exit("mathTextSequence"), s(a));
                          })(t)
                        );
                      };
                      function s(l) {
                        return l === t5.q.eof
                          ? n(l)
                          : l === t5.q.dollarSign
                          ? ((r = e.enter("mathTextSequence")),
                            (a = 0),
                            (function n(s) {
                              return s === t5.q.dollarSign
                                ? (e.consume(s), a++, n)
                                : a === i
                                ? (e.exit("mathTextSequence"),
                                  e.exit("mathText"),
                                  t(s))
                                : ((r.type = "mathTextData"), o(s));
                            })(l))
                          : l === t5.q.space
                          ? (e.enter("space"), e.consume(l), e.exit("space"), s)
                          : (0, t3.Ch)(l)
                          ? (e.enter(t7.V.lineEnding),
                            e.consume(l),
                            e.exit(t7.V.lineEnding),
                            s)
                          : (e.enter("mathTextData"), o(l));
                      }
                      function o(t) {
                        return t === t5.q.eof ||
                          t === t5.q.space ||
                          t === t5.q.dollarSign ||
                          (0, t3.Ch)(t)
                          ? (e.exit("mathTextData"), s(t))
                          : (e.consume(t), o);
                      }
                    },
                    resolve: nr,
                    previous: ni,
                  }),
                  (0, t1._)(t, t5.q.backslash, [
                    {
                      tokenize: function (e, t, n) {
                        var a,
                          r = [],
                          i = [],
                          s = this;
                        return function (t) {
                          return (
                            t5.q.backslash,
                            na.call(s, s.previous) && s.previous,
                            e.enter("mathText"),
                            e.enter("mathTextSequence"),
                            (function t(a) {
                              return (r.join(","),
                              (a === t5.q.backslash && 0 === r.length) ||
                                (a === t5.q.leftParenthesis && 1 === r.length))
                                ? (e.consume(a), r.push(a), t)
                                : r.length < 2
                                ? n(a)
                                : (e.exit("mathTextSequence"), o(a));
                            })(t)
                          );
                        };
                        function o(s) {
                          return s === t5.q.eof
                            ? n(s)
                            : s === t5.q.backslash
                            ? ((a = e.enter("mathTextSequence")),
                              (i = []),
                              (function n(s) {
                                return (r.join(","),
                                (s === t5.q.backslash && 0 === i.length) ||
                                  (s === t5.q.rightParenthesis &&
                                    1 === i.length))
                                  ? (e.consume(s), i.push(s), n)
                                  : i.length === r.length
                                  ? (e.exit("mathTextSequence"),
                                    e.exit("mathText"),
                                    t(s))
                                  : ((a.type = "mathTextData"), l(s));
                              })(s))
                            : s === t5.q.space
                            ? (e.enter("space"),
                              e.consume(s),
                              e.exit("space"),
                              o)
                            : (0, t3.Ch)(s)
                            ? (e.enter(t7.V.lineEnding),
                              e.consume(s),
                              e.exit(t7.V.lineEnding),
                              o)
                            : (e.enter("mathTextData"), l(s));
                        }
                        function l(t) {
                          return t === t5.q.eof ||
                            t === t5.q.space ||
                            t === t5.q.backslash ||
                            (0, t3.Ch)(t)
                            ? (e.exit("mathTextData"), o(t))
                            : (e.consume(t), l);
                        }
                      },
                      resolve: nn,
                      previous: na,
                    },
                    {
                      tokenize: function (e, t, n) {
                        var a,
                          r = [],
                          i = [],
                          s = this;
                        return function (t) {
                          return (
                            t5.q.backslash,
                            no.call(s, s.previous) && s.previous,
                            e.enter("mathText"),
                            e.enter("mathTextSequence"),
                            (function t(a) {
                              return (r.join(","),
                              (a === t5.q.backslash && 0 === r.length) ||
                                (a === t5.q.leftSquareBracket &&
                                  1 === r.length))
                                ? (e.consume(a), r.push(a), t)
                                : r.length < 2
                                ? n(a)
                                : (e.exit("mathTextSequence"), o(a));
                            })(t)
                          );
                        };
                        function o(s) {
                          return s === t5.q.eof
                            ? n(s)
                            : s === t5.q.backslash
                            ? ((a = e.enter("mathTextSequence")),
                              (i = []),
                              (function n(s) {
                                return (r.join(","),
                                (s === t5.q.backslash && 0 === i.length) ||
                                  (s === t5.q.rightSquareBracket &&
                                    1 === i.length))
                                  ? (e.consume(s), i.push(s), n)
                                  : i.length === r.length
                                  ? (e.exit("mathTextSequence"),
                                    e.exit("mathText"),
                                    t(s))
                                  : ((a.type = "mathTextData"), l(s));
                              })(s))
                            : s === t5.q.space
                            ? (e.enter("space"),
                              e.consume(s),
                              e.exit("space"),
                              o)
                            : (0, t3.Ch)(s)
                            ? (e.enter(t7.V.lineEnding),
                              e.consume(s),
                              e.exit(t7.V.lineEnding),
                              o)
                            : (e.enter("mathTextData"), l(s));
                        }
                        function l(t) {
                          return t === t5.q.eof ||
                            t === t5.q.space ||
                            t === t5.q.backslash ||
                            (0, t3.Ch)(t)
                            ? (e.exit("mathTextData"), o(t))
                            : (e.consume(t), l);
                        }
                      },
                      resolve: ns,
                      previous: no,
                    },
                  ]),
                  t),
              }),
                n("fromMarkdownExtensions", (0, t2.N)()),
                n("toMarkdownExtensions", (0, t2.O)());
            },
            { singleDollarTextMath: !1 },
          ],
        ],
        nD = [
          [
            nu.Z,
            {
              languages: { mathematica: nl.Z },
              detect: !0,
              subset: [
                "arduino",
                "bash",
                "c",
                "cpp",
                "csharp",
                "css",
                "diff",
                "go",
                "graphql",
                "java",
                "javascript",
                "json",
                "kotlin",
                "latex",
                "less",
                "lua",
                "makefile",
                "makefile",
                "markdown",
                "matlab",
                "mathematica",
                "nginx",
                "objectivec",
                "perl",
                "pgsql",
                "php-template",
                "php",
                "plaintext",
                "python-repl",
                "python",
                "r",
                "ruby",
                "rust",
                "scss",
                "shell",
                "sql",
                "swift",
                "typescript",
                "vbnet",
                "wasm",
                "xml",
                "yaml",
              ],
              ignoreMissing: !0,
              aliases: { mathematica: "wolfram" },
            },
          ],
          nc.Z,
          [nm.Z, { newlines: !0 }],
        ],
        nB = {
          code: function (e) {
            var t = e.inline,
              n = e.node,
              a = e.className,
              r = e.children,
              i = (0, v._)(e, ["inline", "node", "className", "children"]);
            if (t) {
              var s = (function (e) {
                if (!e.startsWith(eF)) return null;
                try {
                  return JSON.parse(e.slice(eF.length));
                } catch (e) {
                  return { number: -1 };
                }
              })((0, ng.B)(n));
              return s
                ? (0, j.jsx)(eE, { displayInfo: s })
                : (0, j.jsx)(
                    "code",
                    (0, x._)((0, p._)({ className: a }, i), { children: r }),
                  );
            }
            var o,
              l =
                null ===
                  (o =
                    null == a
                      ? void 0
                      : a.split(" ").filter(function (e) {
                          return e.startsWith("language-");
                        })) || void 0 === o
                  ? void 0
                  : o[0],
              d = l ? l.split("-")[1] : "";
            return (0, j.jsx)(nM, {
              language: d,
              className: a,
              content: (0, ng.B)(n),
              children: r,
            });
          },
        };
      function nF(e) {
        var t = e.size,
          n = e.children,
          a = e.className,
          r = e.clientThreadId,
          i = e.messageId,
          s = (0, tK.F)().theme,
          o = (0, $.Fl)().isAdvancedDataAnalysisAvailable,
          l = null !== (0, F.useContext)(X.gB),
          d = (0, F.useMemo)(
            function () {
              return (0, x._)((0, p._)({}, nB), {
                a: function (e) {
                  var t = e.node,
                    n = (0, v._)(e, ["node"]);
                  return t.properties.href.startsWith(nN)
                    ? l
                      ? (0, j.jsx)(nS, (0, p._)({}, n))
                      : o
                      ? (0, j.jsx)(
                          nI,
                          (0, p._)({ clientThreadId: r, messageId: i }, n),
                        )
                      : null
                    : (0, j.jsx)("a", (0, p._)({}, n));
                },
                img: function (e) {
                  var t = e.node,
                    n = (0, v._)(e, ["node"]),
                    a = t.properties.src;
                  return a.startsWith(nN) || a.startsWith("attachment:")
                    ? null
                    : (0, j.jsx)("img", (0, p._)({}, n));
                },
              });
            },
            [r, o, l, i],
          );
        return (0, j.jsx)(tX.S, {
          name: "formatted_text_error",
          fallback: function () {
            return (0, j.jsx)(j.Fragment, { children: n });
          },
          children: (0, j.jsx)(t0.D, {
            rehypePlugins: nD,
            remarkPlugins: nL,
            linkTarget: "_new",
            className: (0, ec.default)(
              a,
              "markdown prose w-full break-words dark:prose-invert",
              "dark" === s ? "dark" : "light",
              "small" === (void 0 === t ? "medium" : t) && "prose-xs",
            ),
            transformLinkUri: nZ,
            components: d,
            children: n,
          }),
        });
      }
      var nE = {},
        nq = {};
      function nA(e) {
        var t = e.message,
          n = e.outputMessage,
          a = e.clientThreadId,
          r = e.isComplete,
          i = (0, O.Z)(),
          s = (0, tK.F)().theme;
        (0, F.useEffect)(
          function () {
            nE[t.message.id] ||
              (N.o.logEvent(I.a.renderTool2Message, {
                id: t.message.id,
                finishedExecuting: r,
              }),
              (nE[t.message.id] = !0));
          },
          [t, r],
        );
        var o = (0, F.useCallback)(
            function () {
              nq[t.message.id] ||
                (N.o.logEvent(I.a.expandTool2Message, {
                  id: t.message.id,
                  finishedExecuting: r,
                }),
                (nq[t.message.id] = !0));
            },
            [t, r],
          ),
          l = (0, j.jsxs)(j.Fragment, {
            children: [
              (0, j.jsx)("div", {
                className: "mt-3 self-stretch",
                children: (0, j.jsx)(nF, {
                  clientThreadId: a,
                  messageId: t.message.id,
                  className: (0, ec.default)(
                    "markdown prose w-full break-words dark:prose-invert",
                    "dark" === s ? "dark" : "light",
                  ),
                  children: (function (e) {
                    var t = function (e, t) {
                      return "```".concat(t, "\n").concat(e, "\n```");
                    };
                    if ("code" === e.message.content.content_type)
                      return t(e.message.content.text, "python");
                    if ("python" === e.message.recipient) {
                      if ("text" !== e.message.content.content_type)
                        throw Error("Unexpected content type for code message");
                      var n = e.message.content.parts;
                      if (1 !== n.length || "string" != typeof n[0])
                        throw Error("Unexpected parts for code message");
                      return t(n[0], "python");
                    }
                    throw Error("Unexpected code message format");
                  })(t),
                }),
              }),
              n &&
                (0, j.jsx)("div", {
                  className: "self-stretch",
                  children: (0, j.jsx)(tW, { message: n, isCollapsed: !0 }),
                }),
            ],
          });
        return (0, j.jsx)(eY, {
          expanderClosedLabel: i.formatMessage(nU.expanderClosedLabel),
          expanderOpenLabel: i.formatMessage(nU.expanderOpenLabel),
          isComplete: r,
          results: l,
          onExpand: o,
          children: r
            ? (0, j.jsx)(U.Z, (0, p._)({}, nU.finishedWorking))
            : (0, j.jsx)(U.Z, (0, p._)({}, nU.working)),
        });
      }
      var nU = (0, A.vU)({
          expanderClosedLabel: {
            id: "CodeMessage.expanderClosedLabel",
            defaultMessage: "Show work",
            description:
              "Label for the button to expand and show the code execution details",
          },
          expanderOpenLabel: {
            id: "CodeMessage.expanderOpenLabel",
            defaultMessage: "Hide work",
            description:
              "Label for the button to collapse and hide the code execution details",
          },
          finishedWorking: {
            id: "CodeMessage.finishedWorking",
            defaultMessage: "Finished working",
            description:
              "Status text indicating the code execution has completed",
          },
          working: {
            id: "CodeMessage.working",
            defaultMessage: "Working...",
            description:
              "Status text indicating the code execution is in progress",
          },
        }),
        nO = n(56115),
        nz = n(40803),
        nW = n(75641),
        nV = n(30644),
        nQ = n(19579),
        nH = n.n(nQ),
        nG = n(44675);
      function nY(e) {
        var t = (0, b._)((0, F.useState)(!1), 2),
          n = t[0],
          a = t[1];
        return (0, j.jsx)(
          nH(),
          (0, x._)((0, p._)({}, e), {
            alt: e.alt,
            onLoadingComplete: function (t) {
              var n;
              a(!0),
                null === (n = e.onLoadingComplete) ||
                  void 0 === n ||
                  n.call(e, t);
            },
            unoptimized: !0,
            className: (0, ec.default)(
              e.className,
              "transition-opacity duration-300",
              n ? "opacity-100" : "opacity-0",
            ),
          }),
        );
      }
      function nJ(e, t) {
        var n,
          a = null !== (n = nG.env.CDN_IMAGE_BASE_URL) && void 0 !== n ? n : "",
          r = "".concat(e, "/image/").concat(t);
        return a
          ? "".concat(a, "/").concat(r)
          : "".concat(Q.B, "/share/").concat(r);
      }
      var n$ = n(71950);
      function nK(e) {
        var t,
          n = (0, b._)((0, F.useState)({ width: 0, height: 0 }), 2),
          a = n[0],
          r = n[1],
          i = (0, b._)((0, F.useState)(!0), 2),
          s = i[0],
          o = i[1],
          l = (0, b._)((0, F.useState)(e.image), 2),
          d = l[0],
          u = l[1],
          c = a.width > 0 && a.height > 0;
        (0, F.useEffect)(
          function () {
            if (!d.url) throw Error("ExpandableImage requires a src");
            var e = new Image();
            (e.onload = function () {
              r({ width: e.naturalWidth, height: e.naturalHeight });
            }),
              (e.onerror = function () {}),
              (e.src = d.url);
          },
          [d],
        );
        var m = (0, F.useCallback)(
            function () {
              var t =
                (e.images.findIndex(function (e) {
                  return e === d;
                }) +
                  1) %
                e.images.length;
              u(e.images[t]);
            },
            [e.images, d],
          ),
          f = (0, F.useCallback)(
            function () {
              var t = e.images.findIndex(function (e) {
                  return e === d;
                }),
                n = t > 0 ? (t - 1) % e.images.length : e.images.length - 1;
              u(e.images[n]);
            },
            [e.images, d],
          ),
          g = (0, F.useCallback)(
            function (e) {
              "ArrowLeft" === e.key ? f() : "ArrowRight" === e.key && m();
            },
            [m, f],
          );
        return (
          (0, F.useEffect)(
            function () {
              return (
                document.addEventListener("keyup", g),
                function () {
                  document.removeEventListener("keyup", g);
                }
              );
            },
            [e.images, g],
          ),
          (0, j.jsxs)(n$.fC, {
            onOpenChange: function (t) {
              t || u(e.image);
            },
            children: [
              (0, j.jsx)(n$.xz, {
                disabled: !c,
                className: "outline-none",
                onClick: e.onOpen,
                children: e.children,
              }),
              (0, j.jsx)(n$.h_, {
                children: (0, j.jsx)(n$.aV, {
                  className:
                    "fixed inset-0 flex items-center justify-center bg-black/90 backdrop-blur-xl radix-state-open:animate-show",
                  children: (0, j.jsxs)(n$.VY, {
                    className: (0, ec.default)(
                      "relative flex h-screen w-screen justify-stretch divide-x divide-white/10 focus:outline-none radix-state-open:animate-contentShow",
                    ),
                    children: [
                      (0, j.jsx)("div", {
                        className: (0, ec.default)(
                          "flex flex-1 transition-[flex-basis]",
                          s ? "basis-[75vw]" : "",
                        ),
                        children: (0, j.jsxs)("div", {
                          className: "flex flex-1 flex-col p-6",
                          children: [
                            (0, j.jsxs)("div", {
                              className: "mb-4 flex justify-between text-white",
                              children: [
                                (0, j.jsx)(n$.x8, {
                                  asChild: !0,
                                  children: (0, j.jsx)("button", {
                                    className:
                                      "transition hover:text-gray-300 dark:text-gray-400 dark:hover:text-gray-200",
                                    children: (0, j.jsx)(E.q5L, {
                                      className: "icon-md",
                                    }),
                                  }),
                                }),
                                (0, j.jsxs)("div", {
                                  children: [
                                    (0, j.jsx)(er.z, {
                                      color: "none",
                                      size: "small",
                                      onClick: function () {
                                        return e.onDownload(d);
                                      },
                                      children: (0, j.jsx)(E._hL, {
                                        className: "icon-md",
                                      }),
                                    }),
                                    (0, j.jsx)(er.z, {
                                      color: "none",
                                      size: "small",
                                      onClick: function () {
                                        return o(function (e) {
                                          return !e;
                                        });
                                      },
                                      children: (0, j.jsx)(E.iYc, {
                                        className: "icon-md",
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, j.jsx)("div", {
                              className:
                                "flex  flex-1 flex-col items-center justify-center",
                              children: (0, j.jsx)("img", {
                                src: d.url,
                                alt: d.alt,
                                className:
                                  "max-h-[calc(100vh-150px)] object-contain",
                              }),
                            }),
                            (0, j.jsxs)("div", {
                              className:
                                "flex items-center justify-center gap-4 p-4 text-white",
                              children: [
                                (0, j.jsx)(er.z, {
                                  color: "none",
                                  size: "small",
                                  onClick: f,
                                  children: (0, j.jsx)(E.Ao2, {
                                    className: "icon-md",
                                  }),
                                }),
                                e.images.map(function (e, n) {
                                  return (0, j.jsx)(
                                    "img",
                                    {
                                      src: e.url,
                                      alt:
                                        null !== (t = e.alt) && void 0 !== t
                                          ? t
                                          : "",
                                      className: (0, ec.default)(
                                        "h-12 w-12 cursor-pointer rounded object-cover transition duration-300 hover:opacity-100",
                                        e.url === d.url
                                          ? "ring-2 ring-white ring-offset-4 ring-offset-black"
                                          : "opacity-25",
                                      ),
                                      onClick: function () {
                                        return u(e);
                                      },
                                      role: "button",
                                    },
                                    n,
                                  );
                                }),
                                (0, j.jsx)(er.z, {
                                  color: "none",
                                  size: "small",
                                  onClick: m,
                                  children: (0, j.jsx)(E.Rgz, {
                                    className: "h-5 w-5",
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      (0, j.jsx)("div", {
                        className: (0, ec.default)(
                          "flex items-center justify-start overflow-hidden bg-gray-900 text-white transition-[flex-basis] duration-500",
                          s ? "basis-[25vw]" : "basis-0",
                        ),
                        children: (0, j.jsx)("div", {
                          className: "w-[25vw]",
                          children: e.metadataRenderer(d),
                        }),
                      }),
                    ],
                  }),
                }),
              }),
            ],
          })
        );
      }
      function nX() {
        var e = (0, w._)(["grid gap-4\n", ""]);
        return (
          (nX = function () {
            return e;
          }),
          e
        );
      }
      function n0(e) {
        var t,
          n,
          a,
          r,
          i,
          s,
          o = e.messages,
          u = e.isFirstMessageInTurn,
          c = (0, b._)(o, 2),
          m = c[0],
          f = c[1],
          g = tE(m.message),
          h = (0, K.hz)(),
          v = d.WIDE,
          w = !1;
        if ("text" === m.message.content.content_type)
          try {
            var y = (function (e) {
                var t = !0,
                  n = !1,
                  a = void 0;
                try {
                  for (
                    var r, i = ["", "}", '"}', "]}", '"]}'][Symbol.iterator]();
                    !(t = (r = i.next()).done);
                    t = !0
                  ) {
                    var s = r.value,
                      o = e.trimEnd().endsWith(",")
                        ? e.trimEnd().slice(0, -1)
                        : e;
                    try {
                      return {
                        result: JSON.parse(o + s),
                        isComplete: "" === s,
                      };
                    } catch (e) {}
                  }
                } catch (e) {
                  (n = !0), (a = e);
                } finally {
                  try {
                    t || null == i.return || i.return();
                  } finally {
                    if (n) throw a;
                  }
                }
                return { result: JSON.parse(e), isComplete: !1 };
              })(m.message.content.parts[0]),
              k = y.result,
              C = y.isComplete;
            (a = k),
              (w = C),
              (null == k ? void 0 : k.size) != null && (v = k.size);
          } catch (e) {}
        var M = null;
        null != f &&
          "multimodal_text" === f.message.content.content_type &&
          (M = f.message.content.parts.filter(function (e) {
            return "object" == typeof e && "asset_pointer" in e;
          }));
        var _ =
            null !== M
              ? (0, j.jsx)(n2, { imageAssets: M, gridItemShape: v })
              : (
                  null == a
                    ? void 0
                    : null === (t = a.prompts) || void 0 === t
                    ? void 0
                    : t.length
                )
              ? (0, j.jsx)(n1, {
                  numItems:
                    null !==
                      (r =
                        null == a
                          ? void 0
                          : null === (n = a.prompts) || void 0 === n
                          ? void 0
                          : n.length) && void 0 !== r
                      ? r
                      : 1,
                  prompts:
                    null !== (i = null == a ? void 0 : a.prompts) &&
                    void 0 !== i
                      ? i
                      : [],
                  gridItemShape: v,
                  isPromptListComplete: w,
                  showErrorState: (null != f && null === M) || g,
                })
              : null,
          T = l.Running,
          N = n8.creatingImages;
        return (
          null != M
            ? ((T = l.Finished),
              (N = n8.finishedCreating),
              (s = { numImages: M.length }))
            : null != f
            ? ((T = l.Error), (N = n8.errorCreating))
            : g && ((T = l.Stopped), (N = n8.stopped)),
          (0, j.jsxs)(j.Fragment, {
            children: [
              h.has(H.vE)
                ? (0, j.jsx)(tD, {
                    icon: tP,
                    status: T,
                    displayMessage: N,
                    displayMessageValues: s,
                    isFirstMessageInTurn: u,
                  })
                : (0, j.jsx)(e9, {
                    isComplete: null != f || g,
                    children: (0, j.jsx)(te, {
                      icon: (0, j.jsx)(eW.ql, {
                        className: "h-[34px] w-[34px]",
                      }),
                      title: "DALL\xb7E 3",
                      subtitle: (0, j.jsx)(
                        U.Z,
                        (0, x._)((0, p._)({}, N), { values: s }),
                      ),
                    }),
                  }),
              _,
            ],
          })
        );
      }
      function n1(e) {
        for (
          var t = e.numItems,
            n = e.prompts,
            a = e.gridItemShape,
            r = e.isPromptListComplete,
            i = e.showErrorState,
            s = [],
            o = 0;
          o < t;
          o++
        ) {
          var l = n[o],
            d = o < n.length - 1 || r || i;
          s.push(
            (0, j.jsx)(
              n4,
              {
                className: (0, ec.default)("text-sm", i && "text-gray-500"),
                shape: a,
                bgColor: i ? "medium" : null == l ? "dark" : "light",
                children: (0, j.jsx)(nz.default, {
                  className: "hide-scrollbar h-full",
                  followButtonClassName: "hidden",
                  children: (0, j.jsxs)("div", {
                    className:
                      "flex min-h-full flex-col justify-between gap-3 px-4 pb-5",
                    children: [
                      null != l &&
                        (0, j.jsx)("div", {
                          className: (0, ec.default)(
                            "pt-4",
                            !d && "result-streaming",
                          ),
                          children: (0, j.jsx)("span", { children: l }),
                        }),
                      d &&
                        !i &&
                        (0, j.jsx)(eV.Z, { className: "h-4 w-4 self-center" }),
                      i &&
                        (0, j.jsx)(E.bcx, {
                          className: "icon-sm self-center text-gray-400",
                        }),
                    ],
                  }),
                }),
              },
              o,
            ),
          );
        }
        return (0, j.jsx)(n6, { $numItems: t, children: s });
      }
      function n2(e) {
        var t,
          n,
          a = e.imageAssets,
          r = e.gridItemShape,
          i = function () {
            eO.m9.logEvent("chatgpt_dalle_image_view_full");
          },
          s = (0, O.Z)(),
          o =
            ((n =
              null == (t = (0, F.useContext)(X.gB))
                ? void 0
                : t.serverSharedThreadId),
            (0, nV.h)({
              queries: a.map(function (e) {
                var t = (0, eD.Iy)(e.asset_pointer);
                return {
                  queryKey: ["getFileDownloadLink", t],
                  queryFn: (0, h._)(function () {
                    var a;
                    return (0, y.Jh)(this, function (r) {
                      switch (r.label) {
                        case 0:
                          if (!(null != n)) return [3, 1];
                          return [
                            2,
                            (0, x._)((0, p._)({}, e), { url: nJ(n, t) }),
                          ];
                        case 1:
                          return [
                            4,
                            Q.ZP.getFileDownloadLink(t).catch(function (e) {
                              throw (
                                (console.error(
                                  "Could not fetch file with ID ".concat(
                                    t,
                                    " from file service",
                                  ),
                                  e.message,
                                ),
                                e)
                              );
                            }),
                          ];
                        case 2:
                          if ((a = r.sent()).status !== nW.KF.Success)
                            throw (
                              (console.error(
                                "Could not fetch file with ID ".concat(
                                  t,
                                  " from file service",
                                ),
                                a,
                              ),
                              Error(
                                "Could not fetch file with ID ".concat(
                                  t,
                                  " from file service",
                                ),
                              ))
                            );
                          return [
                            2,
                            (0, x._)((0, p._)({}, e), { url: a.download_url }),
                          ];
                        case 3:
                          return [2];
                      }
                    });
                  }),
                };
              }),
            }));
        function l(e) {
          return d.apply(this, arguments);
        }
        function d() {
          return (d = (0, h._)(function (e) {
            var t, n, a, r;
            return (0, y.Jh)(this, function (i) {
              switch (i.label) {
                case 0:
                  var s, o, l;
                  return (
                    (s =
                      null !==
                        (a =
                          null === (t = e.metadata) || void 0 === t
                            ? void 0
                            : null === (n = t.dalle) || void 0 === n
                            ? void 0
                            : n.prompt) && void 0 !== a
                        ? a
                        : ""),
                    (o = (0, nO.Z)(new Date(), "yyyy-MM-dd HH.mm.ss")),
                    (l = s.slice(0, 150)).endsWith(".") && (l = l.slice(0, -1)),
                    (r = "DALL\xb7E ".concat(o, " - ").concat(l, ".png")),
                    [
                      4,
                      (function (e, t) {
                        return n7.apply(this, arguments);
                      })(e.url, r),
                    ]
                  );
                case 1:
                  return (
                    i.sent(),
                    eO.m9.logEvent("chatgpt_dalle_image_download"),
                    [2]
                  );
              }
            });
          })).apply(this, arguments);
        }
        return (0, j.jsx)(n6, {
          $numItems: o.length,
          children: o.map(function (e, t) {
            var n,
              a,
              d,
              u = e.isLoading,
              c = e.data,
              m = e.error;
            if (u)
              return (0, j.jsx)(
                n4,
                { shape: r, className: "animate-pulse bg-gray-100" },
                t,
              );
            if (null != m || (null == c ? void 0 : c.url) == null)
              return (0, j.jsx)(
                n4,
                {
                  className: "text-sm text-gray-500",
                  shape: r,
                  bgColor: "medium",
                  children: (0, j.jsx)(nz.default, {
                    className: "hide-scrollbar h-full",
                    followButtonClassName: "hidden",
                    children: (0, j.jsxs)("div", {
                      className:
                        "flex min-h-full flex-col items-center justify-center gap-3 px-4 pb-5",
                      children: [
                        (0, j.jsx)(E.bcx, {
                          className: "icon-sm self-center text-gray-400",
                        }),
                        s.formatMessage(n8.imageLoadError),
                      ],
                    }),
                  }),
                },
                t,
              );
            var f = (0, x._)((0, p._)({}, c), {
              alt:
                null !==
                  (d =
                    null == c
                      ? void 0
                      : null === (n = c.metadata) || void 0 === n
                      ? void 0
                      : null === (a = n.dalle) || void 0 === a
                      ? void 0
                      : a.prompt) && void 0 !== d
                  ? d
                  : "",
            });
            return (0, j.jsx)(
              nK,
              {
                image: f,
                images: o
                  .filter(function (e) {
                    return null != e.data;
                  })
                  .map(function (e) {
                    var t,
                      n,
                      a,
                      r = e.data;
                    return (0, x._)((0, p._)({}, r), {
                      alt:
                        null !==
                          (a =
                            null === (t = r.metadata) || void 0 === t
                              ? void 0
                              : null === (n = t.dalle) || void 0 === n
                              ? void 0
                              : n.prompt) && void 0 !== a
                          ? a
                          : "",
                    });
                  }),
                metadataRenderer: function (e) {
                  return (0, j.jsx)(n5, { image: e });
                },
                onDownload: l,
                onOpen: i,
                children: (0, j.jsx)(n3, {
                  image: f,
                  shape: r,
                  onDownload: function () {
                    return l(f);
                  },
                }),
              },
              t,
            );
          }),
        });
      }
      function n5(e) {
        var t,
          n,
          a = e.image,
          r = (0, O.Z)(),
          i = (0, b._)((0, F.useState)(!1), 2),
          s = i[0],
          o = i[1];
        return (0, j.jsxs)("div", {
          className: "flex flex-col items-start gap-3 p-6",
          children: [
            (0, j.jsx)("div", {
              className: "text-gray-300",
              children: r.formatMessage(n8.imageViewerMetadataTitle),
            }),
            (0, j.jsx)("div", {
              className: "text-lg",
              children:
                null === (t = a.metadata) || void 0 === t
                  ? void 0
                  : null === (n = t.dalle) || void 0 === n
                  ? void 0
                  : n.prompt,
            }),
            (0, j.jsxs)(er.z, {
              color: "dark",
              onClick: function () {
                var e,
                  t,
                  n,
                  r =
                    null !==
                      (n =
                        null === (e = a.metadata) || void 0 === e
                          ? void 0
                          : null === (t = e.dalle) || void 0 === t
                          ? void 0
                          : t.prompt) && void 0 !== n
                      ? n
                      : "";
                try {
                  navigator.clipboard.writeText(r),
                    o(!0),
                    setTimeout(function () {
                      o(!1);
                    }, 2e3);
                } catch (e) {
                  console.error("Error copying to clipboard", e);
                }
              },
              disabled: s,
              children: [
                (0, j.jsx)(E.C3L, { className: "h-5 w-5" }),
                s
                  ? r.formatMessage(n8.imageViewerMetadataCopyButtonCopied)
                  : r.formatMessage(n8.imageViewerMetadataCopyButton),
              ],
            }),
          ],
        });
      }
      function n4(e) {
        var t = e.children,
          n = e.shape,
          a = e.className,
          r = e.bgColor,
          i = void 0 === r ? "light" : r;
        return (0, j.jsxs)("div", {
          className: (0, ec.default)(
            "relative overflow-hidden rounded",
            a,
            n === d.WIDE && "aspect-[7/4]",
            n === d.SQUARE && "aspect-square max-w-[400px]",
            n === d.TALL && "aspect-[4/7] max-w-xs",
          ),
          children: [
            (0, j.jsx)("div", {
              className: (0, ec.default)(
                "pointer-events-none absolute inset-0 blur-xl",
                "light" === i && "bg-black/[.04]",
                "medium" === i && "bg-black/[.08]",
                "dark" === i && "bg-black/[.12]",
              ),
            }),
            (0, j.jsx)("div", { className: "relative h-full", children: t }),
          ],
        });
      }
      function n3(e) {
        var t = e.image,
          n = e.shape,
          a = e.onDownload,
          r = (0, O.Z)(),
          i = t.url,
          s = t.width,
          o = t.height;
        function l() {
          return (l = (0, h._)(function (e) {
            return (0, y.Jh)(this, function (t) {
              return e.stopPropagation(), a(), [2];
            });
          })).apply(this, arguments);
        }
        return (0, j.jsxs)(n4, {
          shape: n,
          className: "group/dalle-image",
          children: [
            (0, j.jsx)(nY, {
              alt: r.formatMessage(n8.generatedImageAltText),
              src: i,
              width: s,
              height: o,
            }),
            (0, j.jsx)("div", {
              className:
                "invisible absolute left-1 top-1 group-hover/dalle-image:visible",
              children: (0, j.jsx)(er.z, {
                color: "dark",
                size: "small",
                onClick: function (e) {
                  return l.apply(this, arguments);
                },
                children: (0, j.jsx)(E._hL, {}),
              }),
            }),
          ],
        });
      }
      ((r = d || (d = {})).WIDE = "1792x1024"),
        (r.SQUARE = "1024x1024"),
        (r.TALL = "1024x1792");
      var n6 = z.Z.div(nX(), function (e) {
        return 1 === e.$numItems ? "grid-cols-1" : "grid-cols-2";
      });
      function n7() {
        return (n7 = (0, h._)(function (e, t) {
          var n, a, r, i;
          return (0, y.Jh)(this, function (s) {
            switch (s.label) {
              case 0:
                ((n = new Image()).crossOrigin = "anonymous"),
                  (n.src = e),
                  (s.label = 1);
              case 1:
                return (
                  s.trys.push([1, 3, , 4]),
                  [
                    4,
                    new Promise(function (e, t) {
                      (n.onload = function () {
                        e(null);
                      }),
                        (n.onerror = t);
                    }),
                  ]
                );
              case 2:
                return s.sent(), [3, 4];
              case 3:
                return console.error("Error downloading image", s.sent()), [2];
              case 4:
                if (
                  (((a = document.createElement("canvas")).width =
                    n.naturalWidth),
                  (a.height = n.naturalHeight),
                  null == (r = a.getContext("2d")))
                )
                  return [2];
                return (
                  r.drawImage(n, 0, 0),
                  ((i = document.createElement("a")).href =
                    a.toDataURL("image/png")),
                  (i.download = t),
                  i.click(),
                  a.remove(),
                  n.remove(),
                  i.remove(),
                  [2]
                );
            }
          });
        })).apply(this, arguments);
      }
      var n8 = (0, A.vU)({
          creatingImages: {
            id: "dalleMessage.creatingImages",
            defaultMessage: "Creating images",
            description: "Status message when DALL\xb7E is creating images",
          },
          stopped: {
            id: "dalleMessage.stoppedV2",
            defaultMessage: "Stopped creating images",
            description:
              "Status message when DALL\xb7E was stopped by the user",
          },
          errorCreating: {
            id: "dalleMessage.errorCreating",
            defaultMessage: "Error creating images",
            description:
              "Status message when DALL\xb7E failed to create images",
          },
          finishedCreating: {
            id: "dalleMessage.finishedCreating",
            defaultMessage:
              "Created {numImages, plural, =0 {images} one {image} other {# images}}",
            description:
              "Status message when DALL\xb7E finished creating images",
          },
          generatedImageAltText: {
            id: "dalleMessage.generatedImageAltText",
            defaultMessage: "Generated by DALL\xb7E",
            description: "Alt text for images generated by DALL\xb7E",
          },
          imageLoadError: {
            id: "dalleMessage.imageLoadError",
            defaultMessage: "Error loading image",
            description: "Error message when an image fails to load",
          },
          imageViewerMetadataTitle: {
            id: "dalleMessage.imageViewerMetadataTitle",
            defaultMessage: "Prompt",
            description: "Title for the prompt metadata in the image viewer",
          },
          imageViewerMetadataCopyButton: {
            id: "dalleMessage.imageViewerMetadataCopyButton",
            defaultMessage: "Copy",
            description:
              "Copy button for the prompt metadata in the image viewer",
          },
          imageViewerMetadataCopyButtonCopied: {
            id: "dalleMessage.imageViewerMetadataCopyButtonCopied",
            defaultMessage: "Copied!",
            description:
              "Copy button for the prompt metadata in the image viewer when the prompt is copied",
          },
        }),
        n9 = n(76051),
        ae = n(98439);
      function at() {
        var e = (0, w._)(["text-center mt-2 flex justify-center"]);
        return (
          (at = function () {
            return e;
          }),
          e
        );
      }
      function an() {
        var e = (0, w._)(["flex gap-2 flex-wrap mt-2"]);
        return (
          (an = function () {
            return e;
          }),
          e
        );
      }
      var aa = (0, A.vU)({
          saveAndSubmit: {
            id: "NodeEditor.saveAndSubmit",
            defaultMessage: "Save & Submit",
            description:
              "Save and submit button label in the NodeEditor component.",
          },
          cancel: {
            id: "NodeEditor.cancel",
            defaultMessage: "Cancel",
            description: "Cancel button label in the NodeEditor component.",
          },
        }),
        ar = z.Z.div(at());
      function ai(e) {
        var t = e.initialText,
          n = e.clientThreadId,
          a = e.currentLeaf,
          r = e.onChangeItemInView,
          i = e.onExitEdit,
          s = e.onRequestCompletion,
          o = e.disabled,
          l = e.attachments,
          d = (0, F.useId)(),
          u = "".concat(a, "-").concat(d),
          c = (0, b._)((0, F.useState)(null != t ? t : ""), 2),
          m = c[0],
          f = c[1],
          g = (0, F.useRef)(null),
          h = (0, F.useCallback)(function (e) {
            f(e.currentTarget.value);
          }, []),
          x = (0, F.useCallback)(
            function () {
              Y.tQ.updateTree(n, function (e) {
                var t = e.getParentId(a);
                e.addNode(
                  u,
                  m,
                  t,
                  V.uU.User,
                  void 0,
                  l ? { attachments: l } : void 0,
                );
              }),
                r(u),
                s(V.Os.Next, u, { eventSource: "mouse" }, !0),
                i(),
                N.o.logEvent(I.a.changeNode, { intent: "edit_save" });
            },
            [l, n, a, u, m, r, s, i],
          ),
          v = (0, F.useCallback)(
            function () {
              r(a),
                N.o.logEvent(I.a.changeNode, { intent: "edit_cancel" }),
                i(),
                N.o.logEvent(I.a.cancelEditPrompt, {
                  threadId: Y.tQ.getServerThreadId(n),
                });
            },
            [a, r, i, n],
          );
        (0, F.useEffect)(
          function () {
            var e = g.current,
              t = function (e) {
                "Enter" === e.key && e.metaKey
                  ? x()
                  : "Escape" === e.key && v();
              };
            return (
              e && e.addEventListener("keydown", t),
              function () {
                e && e.removeEventListener("keydown", t);
              }
            );
          },
          [v, x],
        );
        var w = l && l.length > 0;
        return (0, j.jsxs)(j.Fragment, {
          children: [
            (0, j.jsx)(eg.ZP, {
              ref: g,
              value: m,
              onChange: h,
              className:
                "m-0 resize-none border-0 bg-transparent p-0 focus:ring-0 focus-visible:ring-0",
            }),
            w &&
              (0, j.jsx)(as, {
                children: l.map(function (e) {
                  return (0, j.jsx)(ae.Z, { file: e.name }, e.id);
                }),
              }),
            (0, j.jsxs)(ar, {
              children: [
                (0, j.jsx)(er.z, {
                  as: "button",
                  onClick: x,
                  className: "mr-2",
                  disabled: o,
                  children: (0, j.jsx)(U.Z, (0, p._)({}, aa.saveAndSubmit)),
                }),
                (0, j.jsx)(er.z, {
                  as: "button",
                  color: "neutral",
                  onClick: v,
                  children: (0, j.jsx)(U.Z, (0, p._)({}, aa.cancel)),
                }),
              ],
            }),
          ],
        });
      }
      var as = z.Z.div(an()),
        ao = n(91809);
      function al() {
        var e = (0, w._)(["text-xs text-black\n", ""]);
        return (
          (al = function () {
            return e;
          }),
          e
        );
      }
      function ad() {
        var e = (0, w._)(["relative w-full overflow-hidden pt-[67%]"]);
        return (
          (ad = function () {
            return e;
          }),
          e
        );
      }
      function au(e) {
        var t,
          n = e.title,
          a = e.url,
          r = e.imageUrl,
          i = e.logoUrl,
          s = e.className,
          o = e.mini,
          l = (0, O.Z)(),
          d = !!r,
          u = (0, F.useCallback)(
            function () {
              N.o.logEvent(I.a.carouselCardClick, { content: a });
            },
            [a],
          );
        try {
          t = ez.get(new URL(a).hostname);
        } catch (e) {
          return console.error("Invalid card url: ", e), null;
        }
        return (0, j.jsxs)(a ? "a" : "div", {
          className: (0, ec.default)(
            "flex h-full w-full flex-col overflow-hidden rounded-md border border-black/10 bg-gray-50 shadow-[0_2px_24px_rgba(0,0,0,0.05)]",
            s,
          ),
          href: a,
          target: a ? "_blank" : "",
          onClick: u,
          children: [
            d &&
              (0, j.jsx)(am, {
                children: (0, j.jsx)("div", {
                  className: "absolute inset-0",
                  children: (0, j.jsx)("img", {
                    src: r,
                    alt: l.formatMessage(af.imageAlt, { title: n }),
                    className:
                      "h-full w-full border-b border-black/10 object-cover",
                  }),
                }),
              }),
            (0, j.jsxs)("div", {
              className: "flex flex-1 flex-col justify-between gap-1.5 p-3",
              children: [
                (0, j.jsx)(ac, {
                  $clamp: (void 0 !== o && o) || d,
                  children: n,
                }),
                (0, j.jsxs)("div", {
                  className: "flex items-center gap-1",
                  children: [
                    i
                      ? (0, j.jsx)(ao.Z, { url: i, name: t, size: 13 })
                      : (0, j.jsx)(eL, { url: a, size: 13 }),
                    (0, j.jsx)("div", {
                      className:
                        "text-[10px] leading-3 text-gray-500 line-clamp-1",
                      children: t,
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      var ac = z.Z.div(al(), function (e) {
          return e.$clamp && "line-clamp-2";
        }),
        am = z.Z.div(ad()),
        af = (0, A.vU)({
          imageAlt: {
            id: "Card.imageAlt",
            description:
              "Alt text for the image, describing the content of the image",
            defaultMessage: "image of {title}",
          },
        }),
        ag = n(33554),
        ah = n(46244),
        ap = n(95182),
        ax = n.n(ap);
      function av(e) {
        var t = e.disabled,
          n = e.onClick,
          a = e.left,
          r = e.children;
        return (0, j.jsx)("button", {
          disabled: t,
          onClick: n,
          "aria-disabled": t,
          className: (0, ec.default)(
            "flex h-6 w-[30px] items-center justify-center rounded-full",
            "bg-gray-900 text-white shadow-sm hover:bg-gray-700 disabled:hover:bg-gray-900 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200 dark:disabled:hover:bg-white",
            "transition-opacity disabled:opacity-20",
            "cursor-pointer disabled:cursor-auto",
            "absolute top-full translate-y-3 lg:top-1/2 lg:-translate-y-1/2",
            void 0 !== a && a
              ? "left-1/2 -translate-x-[calc(100%+4px)] lg:-left-3 lg:-translate-x-full"
              : "left-1/2 translate-x-1 lg:-right-3 lg:left-auto lg:translate-x-full",
            t && "lg:hidden",
          ),
          children: r,
        });
      }
      var ab = function (e) {
          var t = e.x,
            n = e.children,
            a = e.className;
          return (0, j.jsx)(e4.E.div, {
            className: (0, ec.default)(
              "mr-3 h-full w-full flex-none sm:w-[calc((100%-12px)/2)] lg:w-[calc((100%-24px)/3)]",
              a,
            ),
            style: { x: t },
            children: n,
          });
        },
        aw = { type: "spring", bounce: 0 },
        ay = (0, F.forwardRef)(function (e, t) {
          return (0, j.jsx)("div", {
            ref: t,
            className: (0, ec.default)(
              "relative flex h-full w-full overflow-hidden",
              e.className,
            ),
            children: e.children,
          });
        });
      ay.displayName = "CarouselContainer";
      var aj =
        ((u = {}),
        (0, t1._)(u, ee._G.Mobile, 1),
        (0, t1._)(u, ee._G.Small, 2),
        (0, t1._)(u, ee._G.Medium, 2),
        (0, t1._)(u, ee._G.Large, 3),
        (0, t1._)(u, ee._G.XLarge, 3),
        u);
      function ak(e) {
        var t = e.children,
          n = e.loop,
          a = void 0 === n || n,
          r = e.className,
          i = (0, ag.c)(0),
          s = (0, F.useRef)(null),
          o = (0, b._)((0, F.useState)(0), 2),
          l = o[0],
          d = o[1],
          u = aj[(0, ee.dQ)()] || 1,
          c = F.Children.count(t) > u,
          m = F.Children.toArray(t),
          f = (0, F.useCallback)(
            function () {
              var e,
                t =
                  null === (e = s.current) || void 0 === e
                    ? void 0
                    : e.clientWidth;
              return t ? -Math.floor(l / u) * (t + 12) : 0;
            },
            [u, l],
          ),
          g = (0, F.useCallback)(
            function (e) {
              var t = u * e;
              a
                ? d(function (e) {
                    return ((e + t) % m.length) - 1;
                  })
                : d(function (e) {
                    return ax()(e + t, 0, m.length - 1);
                  });
            },
            [m.length, a, u],
          ),
          h = (0, F.useCallback)(
            function () {
              g(1);
            },
            [g],
          ),
          p = (0, F.useCallback)(
            function () {
              g(-1);
            },
            [g],
          ),
          x = (0, b._)(
            (0, F.useMemo)(
              function () {
                if (a) return [!0, !0];
                var e = l < m.length - u;
                return [l > 0, e];
              },
              [m.length, l, a, u],
            ),
            2,
          ),
          v = x[0],
          w = x[1];
        return (
          (0, F.useEffect)(
            function () {
              return (0, ah.j)(i, f(), aw).stop;
            },
            [f, l, i],
          ),
          (0, j.jsxs)("div", {
            className: (0, ec.default)(
              "relative h-full w-full",
              r,
              c && "mb-12 lg:mb-0",
            ),
            children: [
              (0, j.jsx)(ay, {
                ref: s,
                children: m.map(function (e, t) {
                  return (0, j.jsx)(ab, { x: i, children: e }, t);
                }),
              }),
              c &&
                (0, j.jsxs)(j.Fragment, {
                  children: [
                    (0, j.jsx)(av, {
                      onClick: p,
                      left: !0,
                      disabled: !v,
                      children: (0, j.jsx)(E.YFh, { className: "icon-sm" }),
                    }),
                    (0, j.jsx)(av, {
                      onClick: h,
                      disabled: !w,
                      children: (0, j.jsx)(E.Tfp, { className: "icon-sm" }),
                    }),
                  ],
                }),
            ],
          })
        );
      }
      var aC = new Set([
          "og:site_name",
          "og:title",
          "og:description",
          "og:image",
          "og:url",
        ]),
        aM = {
          "og:site_name": "metadataTitle",
          "og:title": "title",
          "og:description": "description",
          "og:image": "imageUrl",
          "og:url": "url",
        },
        a_ =
          /https:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g,
        aT = F.memo(function (e) {
          var t,
            n = e.clientThreadId,
            a = e.urls,
            r = eN(n),
            i =
              ((t = (0, nV.h)({
                queries: a.map(function (e) {
                  return {
                    queryKey: ["opengraph", e],
                    queryFn: (0, h._)(function () {
                      return (0, y.Jh)(this, function (t) {
                        switch (t.label) {
                          case 0:
                            return [4, Q.ZP.getPageMetadata({ url: e })];
                          case 1:
                            return [2, t.sent()];
                        }
                      });
                    }),
                    enabled: !!e,
                    retry: !1,
                  };
                }),
              })),
              (0, F.useMemo)(
                function () {
                  return t
                    .map(function (e, t) {
                      var n = e.data,
                        r = e.isError,
                        i = e.isLoading,
                        s = a[t];
                      if (r || i) return null;
                      var o = n.tags.reduce(function (e, t) {
                        return aC.has(t.type) && (e[aM[t.type]] = t.value), e;
                      }, {});
                      try {
                        var l,
                          d = s.split(/[#?]/)[0],
                          u =
                            null === (l = o.url) || void 0 === l
                              ? void 0
                              : l.endsWith("/login"),
                          c = o.url && "/" === new URL(o.url || "").pathname;
                        if (d !== o.url && (u || c)) return null;
                      } catch (e) {
                        return null;
                      }
                      return (o.url = s), o;
                    })
                    .filter(Boolean);
                },
                [t, a],
              )),
            s = (0, F.useMemo)(
              function () {
                return !i.some(function (e) {
                  return !!(null == e ? void 0 : e.imageUrl);
                });
              },
              [i],
            ),
            o = (0, F.useMemo)(
              function () {
                return r.reduce(function (e, t) {
                  return (e[ez.get(t.domain)] = t.manifest.logo_url), e;
                }, {});
              },
              [r],
            ),
            l = (0, F.useMemo)(
              function () {
                return i.map(function (e) {
                  var t, n;
                  if (!e) return null;
                  try {
                    t = ez.get(new URL(e.url).hostname);
                  } catch (e) {
                    return console.error("Invalid card url: ", e), null;
                  }
                  return (
                    t in o && (n = o[t]),
                    (0, j.jsx)(
                      au,
                      {
                        title: e.title || "",
                        url: e.url,
                        imageUrl: e.imageUrl,
                        logoUrl: n,
                        mini: s,
                      },
                      e.url,
                    )
                  );
                });
              },
              [i, s, o],
            );
          return 0 === i.length
            ? null
            : (0, j.jsx)(ak, { loop: !1, children: l });
        });
      function aN() {
        var e = (0, w._)(["flex gap-2 flex-wrap"]);
        return (
          (aN = function () {
            return e;
          }),
          e
        );
      }
      var aI = F.memo(function (e) {
        var t,
          n,
          a,
          r = e.message,
          i = e.isEditing,
          s = e.format,
          o = e.isCompletionInProgress,
          l = e.className,
          d = e.isCompletion,
          u = e.isResponseToPluginMessage,
          c = (0, v._)(e, [
            "message",
            "isEditing",
            "format",
            "isCompletionInProgress",
            "className",
            "isCompletion",
            "isResponseToPluginMessage",
          ]),
          m = (0, F.useMemo)(
            function () {
              return "parts" in r.message.content
                ? r.message.content.parts
                : [(0, et.RR)(r.message)];
            },
            [r],
          );
        return i
          ? (0, j.jsx)(
              ai,
              (0, p._)(
                {
                  currentLeaf: r.nodeId,
                  initialText: (0, et.RR)(r.message),
                  attachments:
                    null === (a = r.message.metadata) || void 0 === a
                      ? void 0
                      : a.attachments,
                },
                c,
              ),
            )
          : (0, j.jsx)(aS, {
              parts: m,
              message: r,
              isCompletionInProgress: o,
              format: s,
              className: l,
              citations:
                null === (t = r.message.metadata) || void 0 === t
                  ? void 0
                  : t.citations,
              attachments:
                null === (n = r.message.metadata) || void 0 === n
                  ? void 0
                  : n.attachments,
              isCompletion: d,
              id: r.nodeId,
              onRequestMoreCompletions: c.onRequestMoreCompletions,
              clientThreadId: c.clientThreadId,
              showExtractedLinkCards: u,
            });
      });
      function aS(e) {
        var t,
          n,
          a,
          r = e.attachments,
          i = e.citations,
          s = e.className,
          o = e.clientThreadId,
          l = e.format,
          d = e.id,
          u = e.isCompletion,
          c = e.isCompletionInProgress,
          m = e.message,
          f = e.onRequestMoreCompletions,
          g = e.parts,
          h = e.showExtractedLinkCards,
          p = e.size,
          x = void 0 === p ? "medium" : p,
          v = (0, ew.ZC)(m),
          b = v.flagSeverity,
          w = v.shouldHideContent,
          y = !g.some(function (e) {
            return "" !== e;
          }),
          k =
            ((n = (t = {
              text: g
                .map(function (e) {
                  return "string" == typeof e ? e : "";
                })
                .join(""),
              isCompletionInProgress: c,
            }).text),
            (a = t.isCompletionInProgress),
            (0, F.useMemo)(
              function () {
                if (a) return [];
                var e = n.match(a_);
                return Array.from(new Set(e));
              },
              [a, n],
            )),
          C = r && r.length > 0 && !u,
          M = "danger" !== b && c,
          _ = g.reduce(function (e, t) {
            if ("string" == typeof t) e.push({ type: "text", value: t });
            else {
              var n = 0 === e.length,
                a = !n && "text" === e[e.length - 1].type;
              if (n || a) e.push({ type: "images", value: [t] });
              else {
                var r = e[e.length - 1];
                "images" === r.type && r.value.push(t);
              }
            }
            return e;
          }, []);
        return (0, j.jsxs)("div", {
          className: (0, ec.default)(
            s,
            "flex flex-col items-start gap-3 overflow-x-auto whitespace-pre-wrap break-words",
            "danger" === b && "text-red-500",
            "warning" === b && "text-orange-500",
          ),
          children: [
            C &&
              (0, j.jsx)(aP, {
                children: r.map(function (e) {
                  return (0, j.jsx)(
                    ae.Z,
                    {
                      file: e.name,
                      fileId: e.id,
                      width: "wide",
                      alwaysShowData: !0,
                    },
                    e.id,
                  );
                }),
              }),
            _.map(function (e, t) {
              if ("text" === e.type) {
                var n = w ? null : e.value;
                return y || w || !l
                  ? (0, j.jsx)(
                      "div",
                      { className: "empty:hidden", children: n },
                      t,
                    )
                  : (0, j.jsx)(
                      nF,
                      {
                        clientThreadId: o,
                        messageId: d,
                        size: x,
                        className: (0, ec.default)(
                          M && "result-streaming",
                          "danger" === b && "text-red-500",
                          "warning" === b && "text-orange-500",
                        ),
                        children:
                          "" === e.value
                            ? "&#8203;"
                            : (function (e, t) {
                                if (!t) return e;
                                for (
                                  var n = [], a = 1, r = {}, i = 0;
                                  i < t.length;
                                  i++
                                ) {
                                  var s = t[i],
                                    o = s.metadata,
                                    l = s.invalid_reason;
                                  if (o) {
                                    var d = eA(o);
                                    null == r[d] && ((r[d] = a), a++),
                                      n.push(r[d]);
                                  } else null != l && (n.push(a), a++);
                                }
                                for (var u = t.length - 1; u >= 0; u--) {
                                  var c = t[u],
                                    m = c.start_ix,
                                    f = c.end_ix,
                                    g = c.metadata,
                                    h = c.invalid_reason,
                                    p = { number: n[u] };
                                  g
                                    ? (p.metadata = g)
                                    : null != h && (p.invalid_reason = h);
                                  var x = !1;
                                  if (u > 0) {
                                    var v = t[u - 1];
                                    null != v.metadata &&
                                      null != g &&
                                      eA(v.metadata) === eA(g) &&
                                      0 ===
                                        e.slice(v.end_ix, c.start_ix).trim()
                                          .length &&
                                      ((e =
                                        e.slice(0, v.end_ix) +
                                        e.slice(c.end_ix)),
                                      (x = !0));
                                  }
                                  x ||
                                    (e =
                                      e.slice(0, m) +
                                      ""
                                        .concat(eB, "``")
                                        .concat(eF)
                                        .concat(JSON.stringify(p), "``")
                                        .concat(eB) +
                                      e.slice(f));
                                }
                                return e;
                              })(e.value, i),
                      },
                      t,
                    );
              }
              var a = e.value.length > 1;
              return (0, j.jsx)(
                "div",
                {
                  className: (0, ec.default)(
                    a && "grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4",
                  ),
                  children: e.value.map(function (e, t) {
                    return (0, j.jsx)(aR, { asset: e, showAsGrid: a }, t);
                  }),
                },
                t,
              );
            }),
            (0, j.jsx)(ew.ZP, {
              message: m,
              id: d,
              onRequestMoreCompletions: f,
              clientThreadId: o,
            }),
            u &&
              h &&
              k.length > 0 &&
              (0, j.jsx)(aT, { clientThreadId: o, urls: k }),
          ],
        });
      }
      var aP = z.Z.div(aN());
      function aR(e) {
        var t,
          n,
          a,
          r,
          i,
          s,
          o,
          l,
          d,
          u,
          c = e.asset,
          m = e.showAsGrid,
          f = (0, b._)((0, F.useState)(!1), 2),
          g = f[0],
          p = f[1],
          x = (0, O.Z)(),
          v =
            ((t = c.asset_pointer),
            (n = c.width),
            (a = c.height),
            (r = (0, F.useContext)(X.gB)),
            (i = (0, eD.Iy)(t)),
            (o = null != (s = null == r ? void 0 : r.serverSharedThreadId)),
            (d = (l = (0, ek.a)({
              queryKey: ["getFileDownloadLink", i],
              queryFn: (0, h._)(function () {
                return (0, y.Jh)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return [
                        4,
                        Q.ZP.getFileDownloadLink(i).catch(function (e) {
                          throw (
                            (console.error(
                              "Could not fetch file with ID ".concat(
                                i,
                                " from file service",
                              ),
                              e.message,
                            ),
                            e)
                          );
                        }),
                      ];
                    case 1:
                      return [2, e.sent()];
                  }
                });
              }),
              enabled: !o,
            })).data),
            (u = l.isLoading),
            {
              isLoading: !o && u,
              error: l.error,
              url: o
                ? nJ(s, i)
                : (null == d ? void 0 : d.status) == nW.KF.Success
                ? d.download_url
                : null,
              width: n,
              height: a,
            }),
          w = v.url,
          k = v.width,
          C = v.height,
          M = v.isLoading,
          _ = v.error,
          T = M || !g;
        return (0, j.jsx)("div", {
          className: (0, ec.default)(
            "relative flex h-auto w-full max-w-lg items-center justify-center overflow-hidden rounded-md bg-gray-100 text-gray-500 dark:bg-gray-700 dark:text-gray-400",
            m && "aspect-square",
          ),
          children:
            null !== w
              ? (0, j.jsx)(n9.l, {
                  src: w,
                  alt: x.formatMessage(aZ.imageAltText),
                  children: (0, j.jsx)(nY, {
                    alt: x.formatMessage(aZ.imageAltText),
                    className: (0, ec.default)(
                      "max-w-full",
                      m && "aspect-square object-cover",
                    ),
                    src: w,
                    width: k,
                    height: C,
                    onLoadingComplete: function () {
                      return p(!0);
                    },
                  }),
                })
              : (0, j.jsx)("div", {
                  className: "flex items-center justify-center",
                  style: {
                    aspectRatio: "".concat(k, " / ").concat(C),
                    width: k,
                  },
                  title: T
                    ? x.formatMessage(aZ.loadingImage)
                    : x.formatMessage(aZ.errorLoadingImage),
                  children: T
                    ? (0, j.jsx)(eV.Z, {})
                    : _
                    ? (0, j.jsx)(E.BJv, {})
                    : null,
                }),
        });
      }
      var aZ = (0, A.vU)({
        loadingImage: {
          id: "textMessage.loadingImage",
          defaultMessage: "Loading...",
          description: "Text that describes a loading image",
        },
        errorLoadingImage: {
          id: "textMessage.errorLoadingImage",
          defaultMessage: "Could not load image",
          description: "Text that describes an image that failed to load",
        },
        imageAltText: {
          id: "textMessage.imageAltText",
          defaultMessage: "Uploaded image",
          description: "Alt text for image asset",
        },
      });
      function aL(e) {
        var t = e.messages,
          n = e.clientThreadId,
          a = e.isCompletionInProgress,
          r = e.isCompletion,
          i = e.onRequestMoreCompletions,
          s = (0, F.useMemo)(
            function () {
              return [
                t.reduce(function (e, t) {
                  return null == t.err ? e + (0, et.RR)(t.message) : e;
                }, ""),
              ];
            },
            [t],
          );
        return (0, j.jsx)(aS, {
          clientThreadId: n,
          parts: s,
          format: !0,
          isCompletion: r,
          isCompletionInProgress: a,
          id: "",
          onRequestMoreCompletions: i,
        });
      }
      function aD(e) {
        return (
          e.status === V.RF.Done ||
          e.status === V.RF.Timeout ||
          e.status === V.RF.Error ||
          e.status === V.RF.Cancelled
        );
      }
      function aB(e) {
        var t,
          n,
          a,
          r,
          i,
          s,
          o,
          l,
          d,
          u,
          m,
          f,
          g,
          h = e.messages,
          v = (0, b._)(h, 2),
          w =
            ((t = v[0]),
            (d =
              null !==
                (o =
                  null ===
                    (a = null == (n = v[1]) ? void 0 : n.message.metadata) ||
                  void 0 === a
                    ? void 0
                    : null === (r = a.parallel_browse) || void 0 === r
                    ? void 0
                    : r.frontend_info.sub_agent_infos) && void 0 !== o
                ? o
                : null === (i = t.message.metadata) || void 0 === i
                ? void 0
                : null === (s = i.parallel_browse) || void 0 === s
                ? void 0
                : s.frontend_info.sub_agent_infos),
            (u = 0),
            (m = 0),
            null != d &&
              ((u = (l = Object.values(
                Object.values(d).reduce(function (e, t) {
                  var n = t.task_index;
                  return null == e[n] && (e[n] = []), e[n].push(t), e;
                }, {}),
              )
                .map(function (e) {
                  return (0, x._)((0, p._)({}, e[0]), {
                    status: (function (e) {
                      var t = e.map(function (e) {
                          return e.status;
                        }),
                        n = [
                          V.RF.Starting,
                          V.RF.Running,
                          V.RF.Done,
                          V.RF.Error,
                          V.RF.Timeout,
                          V.RF.Cancelled,
                        ],
                        a = !0,
                        r = !1,
                        i = void 0;
                      try {
                        for (
                          var s, o = n[Symbol.iterator]();
                          !(a = (s = o.next()).done);
                          a = !0
                        ) {
                          var l = (function () {
                            var e = s.value;
                            if (
                              t.some(function (t) {
                                return t === e;
                              })
                            )
                              return { v: e };
                          })();
                          if ("object" === (0, ey._)(l)) return l.v;
                        }
                      } catch (e) {
                        (r = !0), (i = e);
                      } finally {
                        try {
                          a || null == o.return || o.return();
                        } finally {
                          if (r) throw i;
                        }
                      }
                      return V.RF.Starting;
                    })(e),
                  });
                })
                .sort(function (e, t) {
                  return e.task_index - t.task_index;
                })).length),
              (m = l.filter(aD).length)),
            (f = c.Planning),
            tE(t.message)
              ? (f = c.Stopped)
              : null != n && (f = m === u ? c.Done : c.Running),
            {
              status: f,
              subAgentInfos: l,
              numTotalSubAgents: u,
              numCompletedSubAgents: m,
            });
        switch (w.status) {
          case c.Planning:
            g = aF.creatingPlan;
            break;
          case c.Running:
            g =
              w.numTotalSubAgents > 0 &&
              w.numCompletedSubAgents / w.numTotalSubAgents >= 0.75
                ? aF.almostDone
                : aF.running;
            break;
          case c.Done:
            g = aF.finished;
            break;
          case c.Stopped:
            g = aF.cancelled;
        }
        var y = w.status === c.Done || w.status === c.Stopped;
        return (0, j.jsx)(e9, {
          isComplete: y,
          children: (0, j.jsx)(te, {
            icon: y
              ? (0, j.jsx)(eW.aS, { className: "icon-2xl" })
              : (0, j.jsx)(eW.Wp, { className: "icon-2xl text-brand-purple" }),
            title: (0, j.jsx)(
              U.Z,
              (0, p._)({}, y ? aF.finishedTitle : aF.inProgressTitle),
            ),
            subtitle: (0, j.jsx)(
              U.Z,
              (0, x._)((0, p._)({}, g), {
                values: { numTasks: w.numTotalSubAgents },
              }),
            ),
          }),
        });
      }
      ((i = c || (c = {})).Planning = "planning"),
        (i.Running = "running"),
        (i.Done = "done"),
        (i.Stopped = "stopped"),
        (0, A.vU)({
          planning: {
            id: "legacyParallelBrowsingMessage.planning",
            defaultMessage: "Creating a browsing plan...",
            description: "Status message when browsing is being planned",
          },
          running: {
            id: "legacyParallelBrowsingMessage.running",
            defaultMessage:
              "Executing browsing plan. Check back again in a few minutes. ({numCompleted}/{numTotal})",
            description: "Status message when browsing is in progress",
          },
          done: {
            id: "legacyParallelBrowsingMessage.done",
            defaultMessage: "Finished browsing",
            description: "Status message when browsing is finished",
          },
          stopped: {
            id: "legacyParallelBrowsingMessage.stopped",
            defaultMessage: "Stopped browsing",
            description: "Status message when browsing was stopped",
          },
          subAgentStarting: {
            id: "legacyParallelBrowsingMessage.subAgent.starting",
            defaultMessage: "Waiting to start",
            description: "Status when a browsing task is waiting to start",
          },
          subAgentRunning: {
            id: "legacyParallelBrowsingMessage.subAgent.running",
            defaultMessage: "In progress",
            description: "Status when a browsing task is in progress",
          },
          subAgentDone: {
            id: "legacyParallelBrowsingMessage.subAgent.done",
            defaultMessage: "Completed",
            description: "Status when a browsing task is complete",
          },
          subAgentFailed: {
            id: "legacyParallelBrowsingMessage.subAgent.failed",
            defaultMessage: "Could not complete",
            description: "Status when a browsing task failed to complete",
          },
        });
      var aF = (0, A.vU)({
          creatingPlan: {
            id: "parallelBrowsingMessage.creatingPlanV2",
            defaultMessage: "Making a research plan",
            description: "Status message when browsing is being planned",
          },
          running: {
            id: "parallelBrowsingMessage.running",
            defaultMessage:
              "Visiting {numTasks, plural, one {# site} other {# sites}}",
            description: "Status message when browsing is visiting sites",
          },
          almostDone: {
            id: "parallelBrowsingMessage.almostDone",
            defaultMessage: "Almost done",
            description:
              "Status message when browsing is almost done visiting sites",
          },
          finished: {
            id: "parallelBrowsingMessage.finishedV2",
            defaultMessage: "Research complete",
            description: "Status message when browsing is finished",
          },
          cancelled: {
            id: "parallelBrowsingMessage.cancelledV2",
            defaultMessage: "Stopped doing research",
            description: "Status message when browsing was cancelled",
          },
          inProgressTitle: {
            id: "parallelBrowsingMessage.inProgressTitleV2",
            defaultMessage: "Browsing...",
            description: "Title when browsing is in progress",
          },
          finishedTitle: {
            id: "parallelBrowsingMessage.finishedTitle",
            defaultMessage: "Finished browsing",
            description: "Title when browsing is finished",
          },
        }),
        aE = n(73908);
      function aq() {
        var e = (0, w._)(["grid gap-4\n", ""]);
        return (
          (aq = function () {
            return e;
          }),
          e
        );
      }
      var aA = (0, A.vU)({
        generatedImage: {
          id: "pluginDisplayParams.generatedImage",
          defaultMessage: "Generated by plugin",
          description:
            "Description text for an image that was generated by a plugin",
        },
      });
      function aU(e) {
        var t,
          n,
          a,
          r = e.plugin,
          i = e.pluginMessage,
          s = e.toolMessage;
        if (null != r && "plugin-bd1fbb6d-40f9-4159-8da9-7a8975c5793b" !== r.id)
          return null;
        var o = m.WIDE;
        if ("text" === i.content.content_type)
          try {
            (null ==
            (t = (function (e) {
              var t = !0,
                n = !1,
                a = void 0;
              try {
                for (
                  var r, i = ["", "}", '"}', "]}", '"]}'][Symbol.iterator]();
                  !(t = (r = i.next()).done);
                  t = !0
                ) {
                  var s = r.value,
                    o = e.trimEnd().endsWith(",")
                      ? e.trimEnd().slice(0, -1)
                      : e;
                  try {
                    return { result: JSON.parse(o + s), isComplete: "" === s };
                  } catch (e) {}
                }
              } catch (e) {
                (n = !0), (a = e);
              } finally {
                try {
                  t || null == i.return || i.return();
                } finally {
                  if (n) throw a;
                }
              }
              return { result: JSON.parse(e), isComplete: !1 };
            })(i.content.parts[0]).result)
              ? void 0
              : t.image_shape) != null && (o = t.image_shape);
          } catch (e) {}
        var l = !1;
        if (null != s) {
          if ("text" === s.content.content_type) {
            try {
              n = JSON.parse(s.content.parts[0]);
            } catch (e) {}
            if ((null == n ? void 0 : n.images) != null)
              return (0, j.jsx)(az, { images: n.images, gridItemShape: o });
          }
          l = !0;
        }
        return (null == t ? void 0 : t.prompts) != null
          ? (0, j.jsx)(aO, {
              numItems:
                null !== (a = null == t ? void 0 : t.n) && void 0 !== a
                  ? a
                  : Math.max(t.prompts.length, 1),
              prompts: t.prompts,
              gridItemShape: o,
              showErrorState: l || tE(i),
            })
          : null;
      }
      function aO(e) {
        for (
          var t = e.numItems,
            n = e.prompts,
            a = e.gridItemShape,
            r = e.showErrorState,
            i = [],
            s = 0;
          s < t;
          s++
        ) {
          var o = n[s];
          i.push(
            (0, j.jsx)(
              aW,
              {
                className: (0, ec.default)("text-sm", r && "text-gray-500"),
                shape: a,
                bgColor: r ? "medium" : null == o ? "dark" : "light",
                children: (0, j.jsx)(nz.default, {
                  className: "hide-scrollbar h-full",
                  followButtonClassName: "hidden",
                  children: (0, j.jsx)("div", {
                    className:
                      "flex min-h-full flex-col items-center justify-center gap-3 px-4 pb-5",
                    children: r
                      ? (0, j.jsx)(E.bcx, {
                          className: "icon-sm self-center text-gray-400",
                        })
                      : (0, j.jsx)(eV.Z, { className: "h-4 w-4 self-center" }),
                  }),
                }),
              },
              s,
            ),
          );
        }
        return (0, j.jsx)(aQ, { $numItems: t, children: i });
      }
      function az(e) {
        var t = e.images,
          n = e.gridItemShape;
        return (0, j.jsx)(aQ, {
          $numItems: t.length,
          children: t.map(function (e, t) {
            return (0, j.jsx)(aV, { imageUrl: e.url, shape: n }, t);
          }),
        });
      }
      function aW(e) {
        var t = e.children,
          n = e.shape,
          a = e.className,
          r = e.bgColor,
          i = void 0 === r ? "light" : r;
        return (0, j.jsxs)("div", {
          className: (0, ec.default)(
            "relative overflow-hidden rounded",
            a,
            n === m.WIDE && "aspect-[7/4]",
            n === m.SQUARE && "aspect-square max-w-[400px]",
            n === m.TALL && "aspect-[4/7] max-w-xs",
          ),
          children: [
            (0, j.jsx)("div", {
              className: (0, ec.default)(
                "pointer-events-none absolute inset-0 blur-xl",
                "light" === i && "bg-black/[.04]",
                "medium" === i && "bg-black/[.08]",
                "dark" === i && "bg-black/[.12]",
              ),
            }),
            t,
          ],
        });
      }
      function aV(e) {
        var t = e.imageUrl,
          n = e.shape,
          a = (0, O.Z)();
        return (0, j.jsx)(aW, {
          shape: n,
          children: (0, j.jsx)("a", {
            href: t,
            target: "_blank",
            rel: "noreferrer",
            children: (0, j.jsx)("img", {
              src: t,
              alt: a.formatMessage(aA.generatedImage),
            }),
          }),
        });
      }
      ((s = m || (m = {})).WIDE = "wide"),
        (s.SQUARE = "square"),
        (s.TALL = "tall");
      var aQ = z.Z.div(aq(), function (e) {
        return 1 === e.$numItems ? "grid-cols-1" : "grid-cols-2";
      });
      function aH() {
        var e = (0, w._)([
          "flex h-[18px] w-[18px] items-center justify-center rounded-[5px] bg-red-200 text-red-800",
        ]);
        return (
          (aH = function () {
            return e;
          }),
          e
        );
      }
      function aG() {
        var e = (0, w._)([
          "flex items-center gap-1 rounded-[5px] bg-red-200 py-0.5 px-1.5 text-xs font-medium uppercase text-red-800",
        ]);
        return (
          (aG = function () {
            return e;
          }),
          e
        );
      }
      var aY = z.Z.div(aH()),
        aJ = (0, A.vU)({
          unapprovedTag: {
            id: "TagComponents.unapprovedTag",
            defaultMessage: "Unverified",
            description:
              "Text shown inside the UnapprovedTagWithText component",
          },
          localhostTag: {
            id: "TagComponents.localhostTag",
            defaultMessage: "Localhost",
            description: "Text shown inside the LocalhostTagWithText component",
          },
        });
      function a$() {
        return (0, j.jsx)(aY, {
          children: (0, j.jsx)(E.OH, { className: "h-3 w-3 stroke-[2.5]" }),
        });
      }
      function aK() {
        return (0, j.jsx)(aY, {
          children: (0, j.jsx)(E.V7f, { className: "icon-xs" }),
        });
      }
      var aX = z.Z.div(aG());
      function a0() {
        return (0, j.jsxs)(aX, {
          children: [
            (0, j.jsx)(E.OH, { className: "h-3 w-3 stroke-[2.5]" }),
            (0, j.jsx)("div", {
              children: (0, j.jsx)(U.Z, (0, p._)({}, aJ.unapprovedTag)),
            }),
          ],
        });
      }
      function a1() {
        return (0, j.jsxs)(aX, {
          children: [
            (0, j.jsx)(E.V7f, { className: "icon-xs" }),
            (0, j.jsx)("div", {
              children: (0, j.jsx)(U.Z, (0, p._)({}, aJ.localhostTag)),
            }),
          ],
        });
      }
      var a2 = F.memo(function (e) {
        var t,
          n = e.clientThreadId,
          a = e.messages,
          r = (0, b._)(a, 2),
          i = r[0],
          s = r[1],
          o = eN(n),
          l = (0, et.Lx)(i.message.recipient),
          d = o.find(function (e) {
            return e.namespace === (null == l ? void 0 : l.namespace);
          }),
          u = null == d ? void 0 : d.manifest.name_for_human,
          c = tE(i.message),
          m = null != u ? (0, j.jsx)("b", { children: u }) : "unknown plugin",
          f =
            null != s
              ? (0, j.jsx)("div", {
                  children: (0, j.jsx)(
                    U.Z,
                    (0, x._)((0, p._)({}, a3.used), {
                      values: { pluginName: m },
                    }),
                  ),
                })
              : c
              ? (0, j.jsx)("div", {
                  children: (0, j.jsx)(
                    U.Z,
                    (0, x._)((0, p._)({}, a3.triedToUse), {
                      values: { pluginName: m },
                    }),
                  ),
                })
              : (0, j.jsx)("div", {
                  children: (0, j.jsx)(
                    U.Z,
                    (0, x._)((0, p._)({}, a3.using), {
                      values: { pluginName: m },
                    }),
                  ),
                });
        return (
          d &&
            ((0, aE.cf)(d)
              ? (t = (0, j.jsx)(a1, {}))
              : "approved" !== d.status && (t = (0, j.jsx)(a0, {}))),
          (0, j.jsxs)(j.Fragment, {
            children: [
              (0, j.jsx)(eY, {
                isComplete: null != s || c,
                results: (0, j.jsx)(a5, {
                  pluginName: null != u ? u : "unknown plugin",
                  pluginMessage: i,
                  toolMessage: s,
                }),
                children: (0, j.jsxs)("div", {
                  className: "flex items-center gap-3",
                  children: [f, t],
                }),
              }),
              null != d &&
                (0, j.jsx)(aU, {
                  plugin: d,
                  pluginMessage: i.message,
                  toolMessage: null == s ? void 0 : s.message,
                }),
            ],
          })
        );
      });
      function a5(e) {
        var t = e.pluginName,
          n = e.pluginMessage,
          a = e.toolMessage,
          r = (0, O.Z)(),
          i = (0, et.RR)(n.message),
          s = a ? (0, et.RR)(a.message) : null;
        try {
          (i = JSON.stringify(JSON.parse(i), null, 2)),
            null != s && (s = JSON.stringify(JSON.parse(s), null, 2));
        } catch (e) {}
        var o =
          (null == a ? void 0 : a.message.author.name) === "plugin_service";
        return (0, j.jsxs)("div", {
          className: "my-3 flex max-w-full flex-col gap-3",
          children: [
            (0, j.jsx)(a4, {
              title: r.formatMessage(a3.requestTo, { pluginName: t }),
              infoTooltip: n.message.recipient,
              children: i,
            }),
            null != s &&
              (0, j.jsx)(a4, {
                title: o
                  ? r.formatMessage(a3.error)
                  : r.formatMessage(a3.responseFrom, { pluginName: t }),
                infoTooltip: n.message.recipient,
                children: (0, j.jsx)("span", {
                  className: (0, ec.default)(o && "text-red-500"),
                  children: s,
                }),
              }),
          ],
        });
      }
      function a4(e) {
        var t = e.title,
          n = e.infoTooltip,
          a = e.children;
        return (0, j.jsx)(n_, {
          title: (0, j.jsx)("span", { className: "uppercase", children: t }),
          headerDecoration:
            void 0 !== n
              ? (0, j.jsx)(eZ.u, {
                  label: n,
                  children: (0, j.jsx)(E.H33, {
                    className: "icon-sm text-white/50",
                  }),
                })
              : void 0,
          shouldWrapCode: !0,
          className: "w-full text-xs text-white/80",
          children: a,
        });
      }
      var a3 = (0, A.vU)({
        used: {
          id: "PluginMessage.used",
          description: "Used plugin text",
          defaultMessage: "Used {pluginName}",
        },
        triedToUse: {
          id: "PluginMessage.triedToUse",
          description: "Tried to use plugin text",
          defaultMessage: "Tried to use {pluginName}",
        },
        using: {
          id: "PluginMessage.using",
          description: "Using plugin text",
          defaultMessage: "Using {pluginName}...",
        },
        requestTo: {
          id: "ResultsSection.requestTo",
          description: "Request to plugin title",
          defaultMessage: "Request to {pluginName}",
        },
        responseFrom: {
          id: "ResultsSection.responseFrom",
          description: "Response from plugin title",
          defaultMessage: "Response from {pluginName}",
        },
        error: {
          id: "ResultsSection.error",
          description: "Error title",
          defaultMessage: "Error",
        },
      });
      function a6() {
        var e = (0, w._)(["flex flex-grow flex-col gap-3 max-w-full"]);
        return (
          (a6 = function () {
            return e;
          }),
          e
        );
      }
      function a7(e) {
        for (var t = [], n = 0; n < e.length; n++) {
          var a = e[n],
            r = (0, et.rH)(a.message),
            i = null == e ? void 0 : e[n - 1],
            s = null != i && ((0, et.lD)(i.message) || (0, et.qs)(a.message)),
            o = r === et.Cs.Text && (0, et.RR)(a.message);
          if (r !== et.Cs.System) {
            if (
              r === et.Cs.UserModelBio ||
              r === et.Cs.UserModelBioTool ||
              r === et.Cs.ModelEditableContext
            )
              continue;
            if (r === et.Cs.Browsing || r === et.Cs.BrowseTool) {
              var l = t[t.length - 1];
              (null == l ? void 0 : l.type) === f.Browsing
                ? l.messages.push(a)
                : t.push({ type: f.Browsing, messages: [a] });
            } else if (
              r === et.Cs.RetrievalBrowsing ||
              r === et.Cs.RetrievalBrowsingTool
            ) {
              var d = t[t.length - 1];
              (null == d ? void 0 : d.type) === f.RetrievalBrowsing
                ? d.messages.push(a)
                : t.push({ type: f.RetrievalBrowsing, messages: [a] });
            } else if (
              r === et.Cs.ParallelBrowsing ||
              r === et.Cs.ParallelBrowsingTool
            ) {
              var u = t[t.length - 1];
              (null == u ? void 0 : u.type) === f.ParallelBrowsing
                ? u.messages.push(a)
                : t.push({ type: f.ParallelBrowsing, messages: [a] });
            } else if (r === et.Cs.Plugin || r === et.Cs.PluginTool) {
              var c = t[t.length - 1];
              r === et.Cs.PluginTool &&
              (null == c ? void 0 : c.type) === f.Plugin
                ? c.messages.push(a)
                : t.push({ type: f.Plugin, messages: [a] });
            } else if (r === et.Cs.Dalle || r === et.Cs.DalleTool) {
              var m = t[t.length - 1];
              r === et.Cs.DalleTool && (null == m ? void 0 : m.type) === f.Dalle
                ? m.messages.push(a)
                : t.push({ type: f.Dalle, messages: [a] });
            } else if (r === et.Cs.Code) t.push({ type: f.Code, message: a });
            else if (r === et.Cs.CodeExecutionOutput)
              t.push({ type: f.CodeExecutionOutput, message: a });
            else if (s && null != o) {
              var g = t.pop();
              (null == g ? void 0 : g.type) === f.MultiText
                ? (g.messages.push(a), t.push(g))
                : (null == g ? void 0 : g.type) === f.Text &&
                  t.push({ type: f.MultiText, messages: [g.message, a] });
            } else t.push({ type: f.Text, message: a });
          }
        }
        return t;
      }
      function a8(e) {
        var t = e.groupedMessages,
          n = e.clientThreadId,
          a = e.isEditing,
          r = e.isCompletion,
          i = e.isCompletionRequestInProgress,
          s = e.isFinalTurn,
          o = e.hasActiveRequest,
          l = e.handleExitEdit,
          d = e.onChangeItemInView,
          u = e.onRequestMoreCompletions,
          c = e.onRequestCompletion,
          m = (0, K.hz)(),
          g = t.map(function (e, g) {
            var h,
              p = 0 === g,
              x = g === t.length - 1;
            switch (e.type) {
              case f.Text:
                return (0, j.jsx)(
                  aI,
                  {
                    className: "min-h-[20px]",
                    message: e.message,
                    isEditing: a,
                    format: r,
                    isCompletionInProgress: x && i,
                    clientThreadId: n,
                    onChangeItemInView: d,
                    onRequestCompletion: c,
                    onExitEdit: l,
                    disabled: o,
                    isCompletion: r,
                    onRequestMoreCompletions: u,
                    isResponseToPluginMessage:
                      (null === (h = t[g - 1]) || void 0 === h
                        ? void 0
                        : h.type) === f.Plugin,
                  },
                  e.message.nodeId,
                );
              case f.MultiText:
                return (0, j.jsx)(
                  aL,
                  {
                    clientThreadId: n,
                    messages: e.messages,
                    isCompletionInProgress: x && i,
                    isCompletion: r,
                    onRequestMoreCompletions: u,
                  },
                  g,
                );
              case f.Browsing:
              case f.RetrievalBrowsing:
                var v = e.messages[e.messages.length - 1],
                  b = e.type === f.RetrievalBrowsing;
                return m.has(H.vE) && !b
                  ? (0, j.jsx)(
                      tq,
                      {
                        messages: e.messages,
                        isFirstMessageInTurn: p,
                        isLastMessageInTurn: x,
                        isRequestActive: o,
                      },
                      e.messages[0].nodeId,
                    )
                  : (0, j.jsx)(
                      ti,
                      {
                        messages: e.messages,
                        isComplete: !s || !x || !o || tE(v.message),
                        isRetrieval: e.type === f.RetrievalBrowsing,
                      },
                      e.messages[0].nodeId,
                    );
              case f.ParallelBrowsing:
                return (0, j.jsx)(
                  aB,
                  { messages: e.messages },
                  e.messages[0].nodeId,
                );
              case f.Code:
                var w,
                  y,
                  k = t[g + 1],
                  C =
                    k && k.type === f.CodeExecutionOutput ? k.message : void 0;
                return (0, j.jsx)(
                  nA,
                  {
                    clientThreadId: n,
                    message: e.message,
                    outputMessage: C,
                    isComplete:
                      !s ||
                      !x ||
                      !o ||
                      ((null ==
                      (y =
                        null ===
                          (w = null == C ? void 0 : C.message.metadata) ||
                        void 0 === w
                          ? void 0
                          : w.aggregate_result)
                        ? void 0
                        : y.status) !== void 0 &&
                        (null == y ? void 0 : y.status) !== "running") ||
                      tE(e.message.message),
                  },
                  e.message.nodeId,
                );
              case f.CodeExecutionOutput:
                return (0, j.jsx)(
                  tW,
                  { message: e.message, isCollapsed: !1 },
                  e.message.nodeId,
                );
              case f.Plugin:
                return (0, j.jsx)(
                  a2,
                  { clientThreadId: n, messages: e.messages },
                  e.messages[0].nodeId,
                );
              case f.Dalle:
                return (0, j.jsx)(
                  n0,
                  { messages: e.messages, isFirstMessageInTurn: p },
                  e.messages[0].nodeId,
                );
              default:
                return null;
            }
          });
        return (0, j.jsx)(a9, { children: g });
      }
      ((o = f || (f = {}))[(o.Text = 0)] = "Text"),
        (o[(o.MultiText = 1)] = "MultiText"),
        (o[(o.Browsing = 2)] = "Browsing"),
        (o[(o.Code = 3)] = "Code"),
        (o[(o.CodeExecutionOutput = 4)] = "CodeExecutionOutput"),
        (o[(o.Plugin = 5)] = "Plugin"),
        (o[(o.RetrievalBrowsing = 6)] = "RetrievalBrowsing"),
        (o[(o.ParallelBrowsing = 7)] = "ParallelBrowsing"),
        (o[(o.Dalle = 8)] = "Dalle");
      var a9 = z.Z.div(a6()),
        re = n(54655);
      function rt() {
        var e = (0, w._)([
          "p-2 rounded-md hover:bg-gray-200 hover:text-gray-800 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200 flex items-center gap-2 flex-wrap justify-center",
        ]);
        return (
          (rt = function () {
            return e;
          }),
          e
        );
      }
      function rn() {
        var e = (0, w._)([
          "flex justify-between items-center p-4 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm",
        ]);
        return (
          (rn = function () {
            return e;
          }),
          e
        );
      }
      function ra(e) {
        var t = e.clientThreadId,
          n = e.messageForRating,
          a = e.variantIds,
          r = e.conversationTurnMountTime,
          i = function (e) {
            var i,
              s,
              d = Y.tQ.getTree(t),
              u = a[0] || "",
              c = (null == d ? void 0 : d.getConversationTurns(u)) || [],
              m = c[c.length - 1],
              f = (null == m ? void 0 : m.messages) || [],
              g = f[f.length - 1],
              h =
                (null == g
                  ? void 0
                  : null === (i = g.message) || void 0 === i
                  ? void 0
                  : i.id) || "",
              p = a[1] || "",
              x = (null == d ? void 0 : d.getConversationTurns(p)) || [],
              v = x[x.length - 1],
              b = (null == v ? void 0 : v.messages) || [],
              w = b[b.length - 1],
              y =
                (null == w
                  ? void 0
                  : null === (s = w.message) || void 0 === s
                  ? void 0
                  : s.id) || "";
            Q.ZP.submitMessageComparisonFeedback({
              feedback_version: "inline_regen_feedback:a:1.0",
              original_message_id: h,
              new_message_id: y,
              rating: "none",
              conversation_id: Y.tQ.getServerThreadId(t),
              text: "",
              tags: [],
              completion_comparison_rating: e,
              new_completion_placement: "not-applicable",
              feedback_start_time: r,
              compare_step_start_time: r,
              new_completion_load_start_time: o,
              new_completion_load_end_time: l,
              frontend_submission_time: Date.now(),
              timezone_offset_min: new Date().getTimezoneOffset(),
            }),
              Y.tQ.updateTree(t, function (t) {
                t.updateNodeMetadata(n.nodeId, { inlineComparisonRating: e });
              }),
              Y.tQ.updateTree(t, function (e) {
                e.updateNodeMetadata(g.nodeId, {
                  inlineComparisonRating: "baseline",
                });
              });
          },
          s = (0, O.Z)(),
          o = (0, b._)(
            (0, F.useState)(function () {
              return null != n.message.create_time
                ? 1e3 * n.message.create_time
                : Date.now();
            }),
            1,
          )[0],
          l = (0, b._)(
            (0, F.useState)(function () {
              return Date.now();
            }),
            1,
          )[0];
        return (0, j.jsxs)(ri, {
          children: [
            (0, j.jsx)("div", {
              className: (0, ec.default)("mr-4"),
              children: (0, j.jsx)(U.Z, (0, p._)({}, rs.regenTitle)),
            }),
            (0, j.jsxs)(rr, {
              onClick: function () {
                return i("new");
              },
              title: s.formatMessage(rs.regenBetterLabel),
              children: [
                (0, j.jsx)(E.fmn, { className: "icon-sm mr-1 flex-shrink-0" }),
                (0, j.jsx)("span", {
                  className: "flex-shrink-0",
                  children: (0, j.jsx)(U.Z, (0, p._)({}, rs.regenBetterText)),
                }),
              ],
            }),
            (0, j.jsxs)(rr, {
              onClick: function () {
                return i("original");
              },
              title: s.formatMessage(rs.regenWorseLabel),
              children: [
                (0, j.jsx)(E.oLd, { className: "icon-sm mr-1 flex-shrink-0" }),
                (0, j.jsx)("span", {
                  className: "flex-shrink-0",
                  children: (0, j.jsx)(U.Z, (0, p._)({}, rs.regenWorseText)),
                }),
              ],
            }),
            (0, j.jsxs)(rr, {
              onClick: function () {
                return i("same");
              },
              title: s.formatMessage(rs.regenSameLabel),
              children: [
                (0, j.jsx)(re.Ny3, {
                  className:
                    "icon-sm mr-1 flex-shrink-0 rounded-full border border-gray-400 dark:border-gray-300",
                }),
                (0, j.jsx)("span", {
                  className: "flex-shrink-0",
                  children: (0, j.jsx)(U.Z, (0, p._)({}, rs.regenSameText)),
                }),
              ],
            }),
            (0, j.jsx)(rr, {
              onClick: function () {
                Y.tQ.updateTree(t, function (e) {
                  e.updateNodeMetadata(n.nodeId, {
                    inlineComparisonRating: "skip",
                  });
                });
              },
              title: s.formatMessage(rs.regenSkipLabel),
              children: (0, j.jsx)(E.q5L, {
                className: "icon-lg flex-shrink-0",
              }),
            }),
          ],
        });
      }
      var rr = z.Z.button(rt()),
        ri = z.Z.div(rn()),
        rs = (0, A.vU)({
          regenTitle: {
            id: "ConversationTurnInlineFeedback.regenTitle",
            description: "Title of the regeneration rating",
            defaultMessage: "Was this response better or worse?",
          },
          regenBetterLabel: {
            id: "ConversationTurnInlineFeedback.regenBetterLabel",
            description: "Regeneration was better button label",
            defaultMessage:
              "This response was better than the previous response",
          },
          regenBetterText: {
            id: "ConversationTurnInlineFeedback.regenBetterText",
            description: "Regeneration was better button text",
            defaultMessage: "Better",
          },
          regenWorseLabel: {
            id: "ConversationTurnInlineFeedback.regenWorseLabel",
            description: "Regeneration was worse button label",
            defaultMessage:
              "This response was worse than the previous response",
          },
          regenWorseText: {
            id: "ConversationTurnInlineFeedback.regenWorseText",
            description: "Regeneration was worse button text",
            defaultMessage: "Worse",
          },
          regenSameLabel: {
            id: "ConversationTurnInlineFeedback.regenSameLabel",
            description: "Regeneration was Same button label",
            defaultMessage: "This response was the same in quality",
          },
          regenSameText: {
            id: "ConversationTurnInlineFeedback.regenSameText",
            description: "Regeneration was Same button text",
            defaultMessage: "Same",
          },
          regenSkipLabel: {
            id: "ConversationTurnInlineFeedback.regenSkipLabel",
            description: "Regeneration skip button label",
            defaultMessage: "Skip this comparison",
          },
        }),
        ro = n(28735),
        rl = n(51217),
        rd = n(36560),
        ru = n.n(rd),
        rc = new ((function () {
          function e() {
            (0, rl._)(this, e),
              (this.emitter = new (ru())()),
              this.emitter.setMaxListeners(1e3);
          }
          var t = e.prototype;
          return (
            (t.on = function (e, t) {
              this.emitter.on(e, t);
            }),
            (t.off = function (e, t) {
              this.emitter.off(e, t);
            }),
            (t.publish = function (e) {
              this.emitter.emit(e.kind, e), this.emitter.emit("anyEvent", e);
            }),
            e
          );
        })())(),
        rm = n(84829),
        rf = n(61888);
      function rg() {
        var e = (0, w._)([
          "relative flex w-full flex-col gap-1 bg-white cursor-pointer truncate rounded-lg border border-gray-300 text-left\nbg-white dark:bg-[#444654] py-4 px-5\nhover:border-[var(--avatar-color)]",
        ]);
        return (
          (rg = function () {
            return e;
          }),
          e
        );
      }
      function rh() {
        var e = (0, w._)(["text-sm text-token-text-tertiary"]);
        return (
          (rh = function () {
            return e;
          }),
          e
        );
      }
      function rp() {
        var e = (0, w._)(["flex gap-4 items-center mb-1"]);
        return (
          (rp = function () {
            return e;
          }),
          e
        );
      }
      function rx(e, t, n) {
        Y.tQ.updateTree(e, function (e) {
          e.updateNodeMetadata(t, { inlineComparisonRating: n });
        });
      }
      function rv() {
        return (0, j.jsxs)("div", {
          className: "mx-auto flex flex-col",
          children: [
            (0, j.jsx)("div", {
              className: "text-center text-lg",
              children: (0, j.jsx)(U.Z, (0, p._)({}, rk.responsePrompt)),
            }),
            (0, j.jsx)("div", {
              className: "text-center text-sm text-token-text-tertiary",
              children: (0, j.jsx)(
                U.Z,
                (0, p._)({}, rk.responsePromptExplanation),
              ),
            }),
          ],
        });
      }
      function rb(e) {
        var t = e.clientThreadId,
          n = e.variantIds,
          a = e.variantsInStreamInfo,
          r = e.avatarColor;
        (0, rm.ok)(2 === n.length);
        var i = (0, b._)(
            (0, F.useState)(function () {
              return Date.now();
            }),
            1,
          )[0],
          s = (0, ei.B$)(),
          o = (0, b._)(
            (0, F.useMemo)(
              function () {
                return (0, rf.shuffle)([0, 1]);
              },
              [n[0], n[1]],
            ),
            2,
          ),
          l = o[0],
          d = o[1],
          u = l < d ? "left" : "right",
          c = "left" === u ? "right" : "left",
          m = n[l],
          f = n[d],
          g = (0, Y.Rz)(t, m),
          h = (0, Y.Rz)(t, f),
          v = (0, Y.uj)(t, g.id),
          w = (0, Y.uj)(t, h.id),
          y = "left" === u ? v : w,
          k = "left" === u ? w : v,
          C = "unskippable" === a.display_treatment,
          M = C
            ? "unskippable_parallel_2_in_stream:a:1.0"
            : "skippable_parallel_2_in_stream:a:1.0";
        (0, F.useEffect)(
          function () {
            return (
              ed.setState({ displayingSideBySideFeedback: !0, unskippable: C }),
              function () {
                ed.setState({
                  displayingSideBySideFeedback: !1,
                  unskippable: !1,
                });
              }
            );
          },
          [C],
        ),
          (0, F.useEffect)(
            function () {
              return (0, ro.LW)(rc, {
                requestCompletion: function () {
                  var e,
                    n,
                    a,
                    r,
                    s =
                      null === (e = (0, rf.last)(y.messages)) || void 0 === e
                        ? void 0
                        : e.completionSampleFinishTime,
                    o =
                      null === (n = (0, rf.last)(k.messages)) || void 0 === n
                        ? void 0
                        : n.completionSampleFinishTime;
                  Q.ZP.submitMessageComparisonFeedback({
                    feedback_version: M,
                    original_message_id:
                      null === (a = y.messages[y.messages.length - 1]) ||
                      void 0 === a
                        ? void 0
                        : a.message.id,
                    new_message_id:
                      null === (r = k.messages[k.messages.length - 1]) ||
                      void 0 === r
                        ? void 0
                        : r.message.id,
                    rating: "none",
                    conversation_id: Y.tQ.getServerThreadId(t),
                    text: "",
                    tags: [],
                    completion_comparison_rating: "skip",
                    new_completion_placement: c,
                    feedback_start_time: i,
                    compare_step_start_time: i,
                    original_completion_load_start_time: i,
                    original_completion_load_end_time: null != s ? s : 0,
                    new_completion_load_start_time: i,
                    new_completion_load_end_time: null != o ? o : 0,
                    frontend_submission_time: Date.now(),
                    timezone_offset_min: new Date().getTimezoneOffset(),
                  });
                },
              });
            },
            [v, w, t, i, M, c, y.messages, k.messages],
          );
        var _ = function (e) {
            var n,
              a,
              r,
              s,
              o = Y.tQ.getTree(t).getLeafFromNode(e);
            Y.tQ.setThreadCurrentLeafId(t, o.id);
            var l = (e === m) == ("left" === u),
              d =
                null === (n = (0, rf.last)(y.messages)) || void 0 === n
                  ? void 0
                  : n.completionSampleFinishTime,
              f =
                null === (a = (0, rf.last)(k.messages)) || void 0 === a
                  ? void 0
                  : a.completionSampleFinishTime;
            y.messages.length > 0 &&
              rx(
                t,
                y.messages[y.messages.length - 1].nodeId,
                l ? "original" : "new",
              ),
              k.messages.length > 0 &&
                rx(
                  t,
                  k.messages[k.messages.length - 1].nodeId,
                  l ? "original" : "new",
                ),
              null != d &&
                null != f &&
                Q.ZP.submitMessageComparisonFeedback({
                  feedback_version: M,
                  original_message_id:
                    null === (r = y.messages[y.messages.length - 1]) ||
                    void 0 === r
                      ? void 0
                      : r.message.id,
                  new_message_id:
                    null === (s = k.messages[k.messages.length - 1]) ||
                    void 0 === s
                      ? void 0
                      : s.message.id,
                  rating: "none",
                  conversation_id: Y.tQ.getServerThreadId(t),
                  text: "",
                  tags: [],
                  completion_comparison_rating: l ? "original" : "new",
                  new_completion_placement: c,
                  feedback_start_time: i,
                  compare_step_start_time: i,
                  original_completion_load_start_time: i,
                  original_completion_load_end_time: d,
                  new_completion_load_start_time: i,
                  new_completion_load_end_time: f,
                  frontend_submission_time: Date.now(),
                  timezone_offset_min: new Date().getTimezoneOffset(),
                });
          },
          T = (0, ei.Yk)(eh.Cv.getRequestIdFromConversationTurn(v)),
          N = (0, ei.Yk)(eh.Cv.getRequestIdFromConversationTurn(w)),
          I = eh.Cv.getRequestIdFromConversationTurn(v),
          S = (0, ei.Yk)(I),
          P = eh.Cv.getRequestIdFromConversationTurn(w),
          R = (0, ei.Yk)(P),
          Z = (0, F.useMemo)(
            function () {
              return a7(v.messages);
            },
            [v.messages],
          ),
          L = (0, F.useMemo)(
            function () {
              return a7(w.messages);
            },
            [w.messages],
          );
        return (0, j.jsx)("div", {
          className: (0, ec.default)(
            "relative flex w-[calc(100%-50px)] flex-col gap-1 md:gap-3 lg:w-[calc(100%-115px)]",
          ),
          children: (0, j.jsxs)("div", {
            className: "relative mt-3 flex gap-1 md:gap-3",
            children: [
              (0, j.jsxs)(rw, {
                onClick: function () {
                  _(m);
                },
                children: [
                  (0, j.jsxs)(rj, {
                    children: [
                      (0, j.jsx)(eP, {
                        isCompletionRequestInProgress: T,
                        messages: v.messages,
                        clientThreadId: t,
                        isCompletion: rF(v),
                        avatarColor: r,
                        showInlineEmbeddedDisplay: !1,
                      }),
                      (0, j.jsx)(ry, {
                        children: (0, j.jsx)(
                          U.Z,
                          (0, x._)((0, p._)({}, rk.responseNumber), {
                            values: { responseIndex: 1 },
                          }),
                        ),
                      }),
                    ],
                  }),
                  (0, j.jsx)(
                    a8,
                    (0, x._)((0, p._)({}, e), {
                      groupedMessages: Z,
                      isEditing: !1,
                      isCompletion: rF(v),
                      isCompletionRequestInProgress: S,
                      hasActiveRequest: s,
                      handleExitEdit: rf.noop,
                    }),
                  ),
                ],
              }),
              (0, j.jsxs)(rw, {
                onClick: function () {
                  _(f);
                },
                children: [
                  (0, j.jsxs)(rj, {
                    children: [
                      (0, j.jsx)(eP, {
                        isCompletionRequestInProgress: N,
                        messages: w.messages,
                        clientThreadId: t,
                        isCompletion: rF(w),
                        avatarColor: r,
                        showInlineEmbeddedDisplay: !1,
                      }),
                      (0, j.jsx)(ry, {
                        children: (0, j.jsx)(
                          U.Z,
                          (0, x._)((0, p._)({}, rk.responseNumber), {
                            values: { responseIndex: 2 },
                          }),
                        ),
                      }),
                    ],
                  }),
                  (0, j.jsx)(
                    a8,
                    (0, x._)((0, p._)({}, e), {
                      groupedMessages: L,
                      isEditing: !1,
                      isCompletion: rF(w),
                      isCompletionRequestInProgress: R,
                      hasActiveRequest: s,
                      handleExitEdit: rf.noop,
                    }),
                  ),
                ],
              }),
            ],
          }),
        });
      }
      var rw = z.Z.button(rg()),
        ry = z.Z.div(rh()),
        rj = z.Z.div(rp()),
        rk = (0, A.vU)({
          responsePrompt: {
            id: "ConversationTurnTwoUpFeedback.responsePrompt",
            description:
              "A prompt for the user to choose between two responses",
            defaultMessage: "Which response do you prefer?",
          },
          responsePromptExplanation: {
            id: "ConversationTurnTwoUpFeedback.responsePromptExplanation",
            description:
              "An explanation of why a user would choose between two responses",
            defaultMessage: "Your choice will help make ChatGPT better.",
          },
          responseNumber: {
            id: "ConversationTurnTwoUpFeedback.responseNumber",
            description: "A label for the response number, e.g. 'Response 1'",
            defaultMessage: "Response {responseIndex, number}",
          },
        }),
        rC = n(15608);
      function rM(e) {
        var t = e.oauthMetadata;
        return (0, j.jsxs)("div", {
          className: "flex justify-between bg-gray-100 p-4 dark:bg-gray-700",
          children: [
            (0, j.jsxs)("div", {
              children: [
                (0, j.jsx)("p", {
                  className: "font-medium text-token-text-primary",
                  children: t.name,
                }),
                (0, j.jsx)("p", {
                  className: "text-sm text-token-text-secondary",
                  children: t.description,
                }),
              ],
            }),
            (0, j.jsx)(er.z, {
              className: "self-center",
              onClick: function () {
                return (0, rC.doOauthRedirect)({ id: t.id });
              },
              children: (0, j.jsx)(U.Z, (0, p._)({}, r_.connectOAuth)),
            }),
          ],
        });
      }
      var r_ = (0, A.vU)({
          connectOAuth: {
            id: "oauthMessage.connectOAuth",
            defaultMessage: "Connect",
            description: "Button text to connect an OAuth application",
          },
        }),
        rT = n(63857),
        rN = n(42569);
      function rI() {
        var e = (0, w._)([""]);
        return (
          (rI = function () {
            return e;
          }),
          e
        );
      }
      function rS() {
        var e = (0, w._)([
          "p-4 justify-center text-base md:gap-6 md:py-6\n  ",
          "",
        ]);
        return (
          (rS = function () {
            return e;
          }),
          e
        );
      }
      function rP() {
        var e = (0, w._)([
          "flex flex-1 gap-4 text-base mx-auto md:gap-6 ",
          "\n}",
        ]);
        return (
          (rP = function () {
            return e;
          }),
          e
        );
      }
      function rR() {
        var e = (0, w._)([
          "justify-center flex flex-1 p-4 gap-4 text-base mx-auto max-w-6xl",
        ]);
        return (
          (rR = function () {
            return e;
          }),
          e
        );
      }
      function rZ() {
        var e = (0, w._)(["flex-shrink-0 flex flex-col relative items-end"]);
        return (
          (rZ = function () {
            return e;
          }),
          e
        );
      }
      function rL() {
        var e = (0, w._)([
          "p-1 rounded-md hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200 disabled:dark:hover:text-gray-400",
        ]);
        return (
          (rL = function () {
            return e;
          }),
          e
        );
      }
      function rD() {
        var e = (0, w._)([
          "text-gray-400 flex self-end lg:self-center justify-center mt-2 gap-2 md:gap-3 lg:gap-1 lg:absolute lg:top-0 lg:translate-x-full lg:right-0 lg:mt-0 lg:pl-2\n",
          "",
        ]);
        return (
          (rD = function () {
            return e;
          }),
          e
        );
      }
      function rB() {
        var e = (0, w._)([
          "text-center border-b p-3 text-gray-500 dark:border-black/20 dark:text-gray-400 text-xs",
        ]);
        return (
          (rB = function () {
            return e;
          }),
          e
        );
      }
      function rF(e) {
        return e.role !== V.uU.User;
      }
      var rE = F.memo(function (e) {
          var t,
            n,
            a = e.turnIndex,
            r = e.conversationLeafId,
            i = e.isFinalTurn,
            s = e.clientThreadId,
            o = e.onChangeItemInView,
            l = e.onChangeRating,
            d = e.showInlineEmbeddedDisplay,
            u = void 0 !== d && d,
            c = e.currentModelId,
            m = e.initiallyHighlightedMessageId,
            f = e.avatarColor,
            g = null !== (0, F.useContext)(X.gB),
            h = (0, K.ec)(K.F_.isBusinessWorkspace),
            v = (0, Y.GD)(s, a, r),
            w = v.messages,
            y = v.variantIds,
            k = v.variantsInStreamInfo,
            C = (0, ee.x_)(),
            M = (0, b._)((0, F.useState)(!1), 2),
            _ = M[0],
            T = M[1],
            S = y.indexOf(w[0].nodeId),
            P = rF(v),
            R = (0, F.useContext)(X.QL).historyDisabled,
            Z = (0, J.tN)(function (e) {
              return e.isDesktopNavCollapsed;
            }),
            L = w.some(function (e) {
              return e.message.content.content_type === V.PX.MultimodalText;
            }),
            D = (0, F.useRef)(null);
          (0, F.useEffect)(
            function () {
              var e;
              null != m &&
                v.messages
                  .map(function (e) {
                    return e.message.id;
                  })
                  .includes(m) &&
                (null === (e = D.current) ||
                  void 0 === e ||
                  e.scrollIntoView({ behavior: "auto" }));
            },
            [m],
          );
          var B = w[w.length - 1],
            q = B.rating,
            A = (0, F.useMemo)(
              function () {
                return (
                  (P &&
                    (null == w ? void 0 : w[0]) != null &&
                    (0, et.Rc)(w[0].message)) ||
                  c
                );
              },
              [P, w, c],
            ),
            U = (0, F.useCallback)(
              function () {
                1 === w.length &&
                  (N.o.logEvent(I.a.editPrompt, {
                    id: w[0].message.id,
                    threadId: Y.tQ.getServerThreadId(s),
                  }),
                  T(!0));
              },
              [w, s],
            ),
            O = (0, F.useCallback)(function () {
              T(!1);
            }, []),
            z = (0, F.useCallback)(
              function () {
                Y.tQ.copyMessageToClipboard(s, a);
              },
              [s, a],
            ),
            W = (0, F.useCallback)(
              function (e) {
                l(B.nodeId, B.message.id, e);
              },
              [B, l],
            ),
            Q = (0, b._)(
              (0, F.useState)(function () {
                return Date.now();
              }),
              1,
            )[0],
            H = (0, F.useMemo)(
              function () {
                return eh.Cv.getRequestIdFromConversationTurn(v);
              },
              [v],
            ),
            G = (0, ei.Yk)(H),
            $ = (0, ei.B$)(),
            en = (0, F.useMemo)(
              function () {
                if (P) {
                  var e,
                    t,
                    n = Y.tQ.getTree(s),
                    a = w[0],
                    r = null == a ? void 0 : a.nodeId;
                  if (null == a || null == r || "" === r) return null;
                  var i = n.getParentPromptNode(r),
                    o = null == i ? void 0 : i.parentId;
                  if (null == o || "" === o) return null;
                  var l = n.getNodeByIdOrMessageId(o),
                    d =
                      null == l
                        ? void 0
                        : null === (e = l.message) || void 0 === e
                        ? void 0
                        : null === (t = e.metadata) || void 0 === t
                        ? void 0
                        : t.model_slug;
                  if (A && null != d && A !== d)
                    return rN.n2.has(d)
                      ? "The previous model used in this conversation has been deprecated. We've switched you to the latest default model."
                      : "The previous model used in this conversation is unavailable. We've switched you to the latest default model.";
                }
                return null;
              },
              [A, P, w, s],
            ),
            ea = (0, F.useMemo)(
              function () {
                return a7(w);
              },
              [w],
            ),
            er = (0, Y.r7)(s),
            es = !h && !g && !er && !R && C && P,
            eo =
              es &&
              !G &&
              !u &&
              !_ &&
              1 === S &&
              i &&
              !B.inlineComparisonRating &&
              !q &&
              2 === y.length &&
              Date.now() -
                (null !== (n = B.message.create_time) && void 0 !== n ? n : 0) *
                  1e3 <
                6e5,
            el = (0, Y.yt)(s, y),
            ed =
              es &&
              i &&
              (null == k ? void 0 : k.num_variants_in_stream) === 2 &&
              2 === y.length &&
              !B.inlineComparisonRating &&
              !el,
            eu =
              null ===
                (t = w.find(function (e) {
                  return void 0 !== e.oauthRequired;
                })) || void 0 === t
                ? void 0
                : t.oauthRequired,
            em = P && !u && !g && !er,
            ef = !g && !u && !_ && !ed,
            eg = !P && !u && !g && !L && 1 === w.length && !_,
            ep = function (e) {
              o(y[e]),
                N.o.logEvent(I.a.changeNode, { intent: "toggle_between" });
            };
          if (!(v.role !== V.uU.Root && v.role !== V.uU.System) && !ed)
            return null;
          var ex = eg
              ? (0, j.jsx)(rW, {
                  onClick: U,
                  className: (0, ec.default)(
                    C && "md:invisible md:group-hover:visible",
                  ),
                  children: (0, j.jsx)(E.vPQ, { className: "icon-sm" }),
                })
              : null,
            ev =
              P && !u
                ? (0, j.jsx)(np.Z, {
                    onCopy: z,
                    className: (0, ec.default)(
                      "rounded-md p-1 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200 disabled:dark:hover:text-gray-400",
                    ),
                  })
                : null,
            eb =
              em && !h
                ? (0, j.jsxs)("div", {
                    className: "flex gap-1",
                    children: [
                      "thumbsDown" !== q &&
                        !R &&
                        (0, j.jsx)(
                          rW,
                          {
                            onClick: function () {
                              return W("thumbsUp");
                            },
                            disabled: "thumbsUp" === q,
                            className: (0, ec.default)(
                              "thumbsUp" === q &&
                                "!dark:text-gray-200 bg-gray-100 text-gray-700 dark:bg-gray-700",
                            ),
                            children: (0, j.jsx)(E.fmn, {
                              className: "icon-sm",
                            }),
                          },
                          "thumbsUp:".concat(B.nodeId),
                        ),
                      "thumbsUp" !== q &&
                        !R &&
                        (0, j.jsx)(
                          rW,
                          {
                            onClick: function () {
                              return W("thumbsDown");
                            },
                            disabled: "thumbsDown" === q,
                            className: (0, ec.default)(
                              "thumbsDown" === q &&
                                "!dark:text-gray-200 bg-gray-100 text-gray-700 dark:bg-gray-700",
                            ),
                            children: (0, j.jsx)(E.oLd, {
                              className: "icon-sm",
                            }),
                          },
                          "thumbsDown:".concat(B.nodeId),
                        ),
                    ],
                  })
                : null,
            ew = eo
              ? (0, j.jsx)(ra, {
                  clientThreadId: s,
                  messageForRating: B,
                  variantIds: y,
                  conversationTurnMountTime: Q,
                })
              : null;
          return (0, j.jsxs)(rq, {
            className: (0, ec.default)(
              "group",
              "w-full text-token-text-primary",
              (0, ec.default)(
                !u &&
                  "border-b border-black/10 gizmo:border-0 dark:border-gray-900/50 gizmo:dark:border-0",
                P
                  ? "bg-gray-50 gizmo:bg-transparent dark:bg-[#444654] gizmo:dark:bg-transparent"
                  : "gizmo:bg-transparent dark:bg-gray-800 gizmo:dark:bg-transparent",
              ),
            ),
            ref: D,
            style: { "--avatar-color": f },
            "data-testid": "conversation-turn-".concat(a),
            children: [
              en && (0, j.jsx)(rQ, { children: en }),
              (0, j.jsxs)(rA, {
                $isStaticSharedThread: g,
                className: (0, ec.default)(u ? "ml-5" : "m-auto"),
                children: [
                  (0, j.jsx)(rU, {
                    $isDesktopNavCollapsed: Z,
                    children: ed
                      ? (0, j.jsx)(rv, {})
                      : (0, j.jsxs)(j.Fragment, {
                          children: [
                            (0, j.jsxs)(rz, {
                              children: [
                                (0, j.jsx)(eP, {
                                  isCompletionRequestInProgress: G,
                                  messages: w,
                                  clientThreadId: s,
                                  isCompletion: P,
                                  avatarColor: f,
                                  showInlineEmbeddedDisplay: u,
                                }),
                                ef &&
                                  C &&
                                  (0, j.jsx)(rT.h, {
                                    currentPage: S,
                                    onChangeIndex: ep,
                                    length: y.length,
                                    className: (0, ec.default)(
                                      "absolute left-0 top-2 -ml-4 -translate-x-full",
                                      y.length > 1
                                        ? "group:hover-visible visible"
                                        : "invisible",
                                    ),
                                  }),
                              ],
                            }),
                            (0, j.jsxs)("div", {
                              className: (0, ec.default)(
                                "relative flex w-[calc(100%-50px)] flex-col gap-1 md:gap-3 lg:w-[calc(100%-115px)]",
                              ),
                              children: [
                                (0, j.jsx)(
                                  a8,
                                  (0, x._)(
                                    (0, p._)({ groupedMessages: ea }, e),
                                    {
                                      isEditing: _,
                                      isCompletion: P,
                                      isCompletionRequestInProgress: G,
                                      isFinalTurn: i,
                                      hasActiveRequest: $,
                                      handleExitEdit: O,
                                    },
                                  ),
                                ),
                                eg &&
                                  C &&
                                  (0, j.jsx)(rV, { $hidden: $, children: ex }),
                                eu && (0, j.jsx)(rM, { oauthMetadata: eu }),
                                (em || ef) &&
                                  (0, j.jsxs)("div", {
                                    className: "flex justify-between lg:block",
                                    children: [
                                      !C &&
                                        ef &&
                                        (0, j.jsx)(rT.h, {
                                          currentPage: S,
                                          onChangeIndex: ep,
                                          length: y.length,
                                          className: (0, ec.default)(
                                            "self-center pt-2",
                                            y.length > 1
                                              ? "visible"
                                              : "!invisible",
                                          ),
                                        }),
                                      eg &&
                                        !C &&
                                        (0, j.jsx)(rV, {
                                          $hidden: G,
                                          children: ex,
                                        }),
                                      em &&
                                        (0, j.jsxs)(rV, {
                                          $hidden: G,
                                          children: [ev, eb],
                                        }),
                                      eo && ew,
                                    ],
                                  }),
                              ],
                            }),
                          ],
                        }),
                  }),
                  ed &&
                    (0, j.jsx)(rO, {
                      children: (0, j.jsx)(
                        rb,
                        (0, p._)(
                          {
                            variantIds: y,
                            variantsInStreamInfo: k,
                            conversationTurnMountTime: Q,
                          },
                          e,
                        ),
                      ),
                    }),
                ],
              }),
            ],
          });
        }),
        rq = z.Z.div(rI()),
        rA = z.Z.div(rS(), function (e) {
          return e.$isStaticSharedThread ? "pl-0 pr-4" : "";
        }),
        rU = z.Z.div(rP(), function (e) {
          return e.$isDesktopNavCollapsed
            ? "md:max-w-3xl"
            : "md:max-w-2xl lg:max-w-[38rem] xl:max-w-3xl";
        }),
        rO = z.Z.div(rR()),
        rz = z.Z.div(rZ()),
        rW = z.Z.button(rL()),
        rV = z.Z.div(rD(), function (e) {
          return e.$hidden ? "invisible" : "visible";
        }),
        rQ = z.Z.div(rB());
      function rH() {
        var e = (0, w._)(["mb-2 mt-auto ml-auto mr-auto"]);
        return (
          (rH = function () {
            return e;
          }),
          e
        );
      }
      function rG() {
        var e = (0, w._)([
          "relative rounded-md border border-black/10 bg-gray-50 dark:border-gray-900/50 dark:bg-[#444654] flex flex-col overflow-hidden",
        ]);
        return (
          (rG = function () {
            return e;
          }),
          e
        );
      }
      function rY() {
        var e = (0, w._)(["mb-5 border dark:bg-gray-800 overflow-hidden"]);
        return (
          (rY = function () {
            return e;
          }),
          e
        );
      }
      function rJ() {
        var e = (0, w._)([""]);
        return (
          (rJ = function () {
            return e;
          }),
          e
        );
      }
      var r$ = (0, A.vU)({
        submitFeedback: {
          id: "feedbackModal.submitFeedback",
          defaultMessage: "Submit feedback",
          description: "Button text for submitting the feedback",
        },
        submitReport: {
          id: "feedbackModal.submitReport",
          defaultMessage: "Submit report",
          description: "Button text for submitting a content-moderation report",
        },
        submitRejectModeration: {
          id: "feedbackModal.moderationReject",
          defaultMessage: "Block Content",
          description:
            "Button text for rejecting the share link and blocking it from being viewed",
        },
        submitAcceptModeration: {
          id: "feedbackModal.moderationAccept",
          defaultMessage: "Allow Content",
          description:
            "Button text for accepting the share link and allowing it to be viewed",
        },
        thumbsUpPlaceholder: {
          id: "feedbackModal.thumbsUpPlaceholder",
          defaultMessage: "What do you like about the response?",
          description:
            "Placeholder for textarea input when user chooses thumbs up",
        },
        thumbsDownPlaceholder: {
          id: "feedbackModal.thumbsDownPlaceholder",
          defaultMessage:
            "What was the issue with the response? How could it be improved?",
          description:
            "Placeholder for textarea input when user chooses thumbs down",
        },
        reportContentExplanationPlaceholder: {
          id: "feedbackModal.reportContentExplanationPlaceholder",
          defaultMessage:
            "What is wrong with the response? What about this response is harmful? Please be as specific as possible, and add any details that are not present in the checkboxes below.",
          description:
            "Placeholder for textarea input when user chooses to report a shared chat",
        },
        harmfulUnsafe: {
          id: "feedbackModal.harmfulUnsafe",
          defaultMessage: "This is harmful / unsafe",
          description: "Label for harmful/unsafe checkbox",
        },
        harmfulOffensive: {
          id: "feedbackModal.harmfulOffensive",
          defaultMessage: "This content is harmful or offensive",
          description: "Label for harmful/offensive checkbox",
        },
        copyrightContent: {
          id: "feedbackModal.copyrightContent",
          defaultMessage: "This content violates copyright law",
          description: "Label for Copyrighted Content checkbox",
        },
        reportOtherContent: {
          id: "feedbackModal.reportOtherContent",
          defaultMessage:
            "I don't like this for some other reason (please describe)",
          description: "Label for Report Other Content checkbox",
        },
        notTrue: {
          id: "feedbackModal.notTrue",
          defaultMessage: "This isn't true",
          description: "Label for not true checkbox",
        },
        notHelpful: {
          id: "feedbackModal.notHelpful",
          defaultMessage: "This isn't helpful",
          description: "Label for not helpful checkbox",
        },
        dontLikeThis: {
          id: "feedbackModal.dontLikeThis",
          defaultMessage: "I don't like this",
          description: "Label for I Don't Like This checkbox",
        },
        sexualAbuse: {
          id: "feedbackModal.sexualAbuse",
          defaultMessage: "This content contains sexual abuse",
          description: "Label for Sexual Abuse checkbox",
        },
        provideAdditionalFeedback: {
          id: "feedbackModal.provideAdditionalFeedback",
          defaultMessage: "Provide additional feedback",
          description: "Title for the critique feedback modal",
        },
        provideReportModalTitle: {
          id: "feedbackModal.provideReportModalTitle",
          defaultMessage: "Report This Content",
          description: "Title for the 'report' feedback modal",
        },
        pickBestAnswer: {
          id: "feedbackModal.pickBestAnswer",
          defaultMessage: "Pick the best answer to improve the model",
          description: "Title for the compare feedback modal",
        },
        newAnswer: {
          id: "feedbackModal.newAnswer",
          defaultMessage: "New Answer",
          description: "Title for the new answer during comparison",
        },
        originalAnswer: {
          id: "feedbackModal.originalAnswer",
          defaultMessage: "Original Answer",
          description: "Title for the original answer during comparison",
        },
        newAnswerBetter: {
          id: "feedbackModal.newAnswerBetter",
          defaultMessage: "New answer is better",
          description: "Button text for choosing new answer during comparison",
        },
        originalAnswerBetter: {
          id: "feedbackModal.originalAnswerBetter",
          defaultMessage: "Original answer is better",
          description:
            "Button text for choosing original answer during comparison",
        },
        neitherAnswerBetter: {
          id: "feedbackModal.neitherAnswerBetter",
          defaultMessage: "Neither answer is better",
          description:
            "Button text for choosing neither answer during comparison",
        },
        skipStep: {
          id: "feedbackModal.skipStep",
          defaultMessage: "Skip this step",
          description: "Button text for skipping comparison step",
        },
        continueWithChosenAnswer: {
          id: "feedbackModal.continueWithChosenAnswer",
          defaultMessage:
            "The conversation will continue with the answer you choose.",
          description: "Information text for user during comparison",
        },
      });
      function rK(e) {
        var t,
          n,
          a,
          r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return (
          (null == e
            ? void 0
            : null === (t = e.messages) || void 0 === t
            ? void 0
            : t.length) === 1 &&
          !(null == e
            ? void 0
            : null === (n = e.messages) || void 0 === n
            ? void 0
            : n.some(function (e) {
                return "error" in e;
              })) &&
          (!r ||
            !(
              (null == e
                ? void 0
                : null === (a = e.messages) || void 0 === a
                ? void 0
                : a.length) === 1 &&
              (0, et.RR)(null == e ? void 0 : e.messages[0].message).length < 20
            ))
        );
      }
      function rX(e) {
        var t,
          n,
          a = e.ratingModalNodeId,
          r = e.ratingModalOpen,
          i = e.onCloseRatingModal,
          s = e.handleSubmitFeedback,
          o = e.onHandleChangeFeedbackComparisonRating,
          l = e.feedbackTextareaRef,
          d = e.clientThreadId,
          u = e.currentModelId,
          c = e.onChangeItemInView,
          m = e.onRequestMoreCompletions,
          f = e.onRequestCompletion,
          g = (0, O.Z)(),
          h = Y.tQ.getTree(d),
          x = (0, Y.XK)(d);
        (0, F.useEffect)(
          function () {
            "report" === r && _.pg.forceEnableSession();
          },
          [r],
        );
        var v = (0, F.useRef)(0.5 > Math.random() ? "left" : "right"),
          w = null == h ? void 0 : h.getConversationTurns(a || "root"),
          y = w.length - 1,
          k = w[w.length - 1],
          C = (0, b._)((0, F.useState)("critique"), 2),
          M = C[0],
          T = C[1],
          S = (0, ee.w$)(),
          P = rK(k, !0) && S,
          R = (0, F.useMemo)(
            function () {
              return {
                id: a || "root",
                threadId: Y.tQ.getServerThreadId(d),
                rating: r,
                model: u,
              };
            },
            [a, d, r, u],
          ),
          Z =
            null == w
              ? void 0
              : w[(null == w ? void 0 : w.length) - 1].variantIds,
          L = null == Z ? void 0 : Z[(null == Z ? void 0 : Z.length) - 1],
          D = (n = (t = null == h ? void 0 : h.getConversationTurns(L))[
            t.length - 1
          ]).messages[n.messages.length - 1].nodeId,
          B = null == h ? void 0 : h.getConversationTurns(D),
          q = (0, F.useMemo)(
            function () {
              var e =
                null == B ? void 0 : B[(null == B ? void 0 : B.length) - 1];
              return "thumbsDown" === r && P && rK(e) && rK(k);
            },
            [r, P, B, k],
          ),
          A = (0, F.useRef)(Date.now()),
          z = (0, F.useRef)(-1),
          W = (0, F.useRef)(Date.now()),
          V = (0, F.useRef)(Date.now());
        (0, F.useEffect)(
          function () {
            "compare" === M
              ? ((z.current = Date.now()),
                N.o.logEvent(I.a.displayedComparisonUIV0, R))
              : "critique" === M &&
                "thumbsDown" === r &&
                N.o.logEvent(I.a.displayedThumbsDownFeedbackForm, R);
          },
          [M],
        );
        var H = w.length - 2,
          G = B.length - 1,
          J = B[B.length - 1],
          $ = (0, F.useMemo)(
            function () {
              return J && eh.Cv.getRequestIdFromConversationTurn(J);
            },
            [J],
          ),
          K = (0, ei.Yk)($);
        (0, F.useMemo)(
          function () {
            K || (V.current = Date.now());
          },
          [K],
        );
        var X = k.messages,
          et = X[X.length - 1],
          en = et.message.id,
          ea = et.nodeId,
          er = h.getLeafFromNode(ea),
          el = J.messages,
          ed = el[el.length - 1],
          em = ed.message.id,
          ex = ed.nodeId,
          ev = h.getLeafFromNode(ex),
          eb =
            "critique" === M
              ? "report" === r
                ? g.formatMessage(r$.provideReportModalTitle)
                : g.formatMessage(r$.provideAdditionalFeedback)
              : g.formatMessage(r$.pickBestAnswer),
          ew = (0, F.useRef)([]),
          ey = (0, F.useRef)(""),
          ej = (0, F.useCallback)(
            function () {
              var e,
                t =
                  null === (e = l.current) || void 0 === e
                    ? void 0
                    : e.elements;
              (ew.current = (0, eu._)(t || [])
                .filter(function (e) {
                  return e.checked;
                })
                .map(function (e) {
                  return e.id;
                })
                .map(function (e) {
                  return e.replace("feedback-", "");
                })),
                (ey.current =
                  (null == t ? void 0 : t["feedback-other"].value) || "");
            },
            [l],
          ),
          ek = (0, F.useCallback)(
            function () {
              ej(),
                s(ey.current, ew.current),
                "thumbsDown" === r &&
                  N.o.logEvent(I.a.submitThumbsDownFeedbackForm, R),
                q ? T("compare") : i();
            },
            [ej, s, r, q, R, i],
          ),
          eC = (0, F.useCallback)(
            function (e, t) {
              var n = Y.tQ.getServerThreadId(d);
              if (null != n) {
                var a = h.getMessageId(Y.tQ.getThreadCurrentLeafId(d));
                Q.ZP.submitSharedConversationReportFeedback({
                  message_id: a,
                  shared_conversation_id: n,
                  text: e,
                  tags: t,
                })
                  .then(function () {
                    nT.m.success("Moderation logged successfully");
                  })
                  .catch(function () {
                    nT.m.danger(
                      "Moderation NOT logged successfully! Please try again",
                    );
                  }),
                  i();
              }
            },
            [h, d, i],
          ),
          eM = (0, F.useCallback)(
            function () {
              ej(),
                ew.current.push("moderation-reject"),
                eC(ey.current, ew.current);
            },
            [eC, ej],
          ),
          e_ = (0, F.useCallback)(
            function () {
              ej(),
                ew.current.push("moderation-accept"),
                eC(ey.current, ew.current);
            },
            [eC, ej],
          ),
          eT =
            "moderate" === r
              ? (0, j.jsxs)(j.Fragment, {
                  children: [
                    (0, j.jsx)(es.ZP.Button, {
                      title: g.formatMessage(r$.submitRejectModeration),
                      color: "danger",
                      onClick: eM,
                    }),
                    (0, j.jsx)(es.ZP.Button, {
                      title: g.formatMessage(r$.submitAcceptModeration),
                      color: "primary",
                      onClick: e_,
                    }),
                  ],
                })
              : "critique" === M
              ? (0, j.jsx)(es.ZP.Button, {
                  title: g.formatMessage(
                    "report" === r ? r$.submitReport : r$.submitFeedback,
                  ),
                  onClick: ek,
                })
              : null,
          eN = "left" === v.current,
          eI = eN ? ea : ex,
          eS = eN ? "new" : "original",
          eP = eN ? "original" : "new",
          eR = eN
            ? g.formatMessage(r$.newAnswer)
            : g.formatMessage(r$.originalAnswer),
          eZ = eN
            ? g.formatMessage(r$.originalAnswer)
            : g.formatMessage(r$.newAnswer),
          eL = eN
            ? g.formatMessage(r$.newAnswerBetter)
            : g.formatMessage(r$.originalAnswerBetter),
          eD = eN
            ? g.formatMessage(r$.originalAnswerBetter)
            : g.formatMessage(r$.newAnswerBetter),
          eB = r && "report" !== r && "moderate" !== r,
          eF = (0, F.useCallback)(
            function (e) {
              var t = "left" === e ? eS : "right" === e ? eP : "same";
              if (
                (N.o.logEvent(
                  I.a.submittedComparisonUIV0,
                  Object.assign({}, R, { choice: t }),
                ),
                eB)
              ) {
                var n = Y.tQ.getTree(d);
                n.updateNodeMetadata(ea, {
                  inlineComparisonRating: "baseline",
                }),
                  n.updateNodeMetadata(ex, { inlineComparisonRating: t }),
                  o(
                    en,
                    em,
                    r,
                    t,
                    v.current,
                    A.current,
                    z.current,
                    W.current,
                    V.current,
                    ey.current,
                    ew.current,
                  );
              }
              Y.tQ.setThreadCurrentLeafId(d, e === v.current ? ev.id : er.id),
                i();
            },
            [eS, eP, R, eB, d, ev.id, er.id, i, ea, ex, o, en, em, r],
          ),
          eE = !K && null != V.current && q,
          eq = (0, F.useCallback)(
            function () {
              i(),
                "critique" === M
                  ? N.o.logEvent(
                      I.a.skippedThumbsDownFeedbackForm,
                      Object.assign({}, R),
                    )
                  : "compare" === M &&
                    N.o.logEvent(
                      I.a.skippedComparisonUIV0,
                      Object.assign({}, R),
                    );
            },
            [i, R, M],
          ),
          eA = (0, b._)((0, F.useState)([]), 2),
          eU = eA[0],
          eO = eA[1];
        return (
          (0, F.useEffect)(function () {
            "moderate" === r &&
              Q.ZP.fetchShareModerationCategories().then(function (e) {
                var t = e.moderation_categories;
                eO(
                  Object.keys(t).map(function (e) {
                    return [e, t[e]];
                  }),
                );
              });
          }, []),
          (0, j.jsxs)(
            eo.Z,
            {
              isOpen: !0,
              onClose: eq,
              size: "custom",
              className: "md:max-w-[672px] lg:max-w-[896px] xl:max-w-6xl",
              type:
                "critique" === M
                  ? "thumbsUp" === r
                    ? "success"
                    : "danger"
                  : "success",
              icon:
                "critique" === M ? ("thumbsUp" === r ? E.fmn : E.oLd) : void 0,
              title: eb,
              closeButton: (0, j.jsx)(es.ZP.CloseButton, { onClose: eq }),
              children: [
                "critique" === M &&
                  (0, j.jsxs)("form", {
                    ref: l,
                    children: [
                      (0, j.jsx)(eg.ZP, {
                        id: "feedback-other",
                        placeholder:
                          "thumbsUp" === r
                            ? g.formatMessage(r$.thumbsUpPlaceholder)
                            : "report" === r
                            ? g.formatMessage(
                                r$.reportContentExplanationPlaceholder,
                              )
                            : g.formatMessage(r$.thumbsDownPlaceholder),
                        rows: 3,
                        className:
                          "mb-1 mt-4 w-full resize-none rounded-md dark:bg-gray-800 dark:focus:border-white dark:focus:ring-white",
                      }),
                      "thumbsDown" === r &&
                        (0, j.jsxs)("div", {
                          className: "mb-4",
                          children: [
                            (0, j.jsx)(ep.Z, {
                              id: "feedback-harmful",
                              label: g.formatMessage(r$.harmfulUnsafe),
                            }),
                            (0, j.jsx)(ep.Z, {
                              id: "feedback-false",
                              label: g.formatMessage(r$.notTrue),
                            }),
                            (0, j.jsx)(ep.Z, {
                              id: "feedback-not-helpful",
                              label: g.formatMessage(r$.notHelpful),
                            }),
                          ],
                        }),
                      null != r &&
                        !eB &&
                        (0, j.jsx)(j.Fragment, {
                          children: (0, j.jsxs)("div", {
                            className: "mb-4",
                            children: [
                              "report" === r &&
                                (0, j.jsxs)(j.Fragment, {
                                  children: [
                                    (0, j.jsx)(ep.Z, {
                                      id: "feedback-dont-like-this",
                                      label: g.formatMessage(r$.dontLikeThis),
                                    }),
                                    (0, j.jsx)(ep.Z, {
                                      id: "feedback-false",
                                      label: g.formatMessage(r$.notTrue),
                                    }),
                                    (0, j.jsx)(ep.Z, {
                                      id: "feedback-not-helpful",
                                      label: g.formatMessage(r$.notHelpful),
                                    }),
                                    (0, j.jsx)(ep.Z, {
                                      id: "feedback-harmful-offensive",
                                      label: g.formatMessage(
                                        r$.harmfulOffensive,
                                      ),
                                    }),
                                    (0, j.jsx)(ep.Z, {
                                      id: "feedback-sexual-abuse",
                                      label: g.formatMessage(r$.sexualAbuse),
                                    }),
                                  ],
                                }),
                              "moderate" === r &&
                                (0, j.jsxs)(j.Fragment, {
                                  children: [
                                    eU.map(function (e) {
                                      var t = (0, b._)(e, 2),
                                        n = t[0],
                                        a = t[1];
                                      return (0, j.jsx)(
                                        ep.Z,
                                        { id: "feedback-" + n, label: a },
                                        n,
                                      );
                                    }),
                                    (0, j.jsx)(ep.Z, {
                                      id: "feedback-copyright",
                                      label: g.formatMessage(
                                        r$.copyrightContent,
                                      ),
                                    }),
                                  ],
                                }),
                              (0, j.jsx)(ep.Z, {
                                id: "feedback-content-other",
                                label: g.formatMessage(r$.reportOtherContent),
                              }),
                            ],
                          }),
                        }),
                    ],
                  }),
                "compare" === M &&
                  B &&
                  void 0 !== x &&
                  (0, j.jsxs)("div", {
                    className: (0, ec.default)("w-full"),
                    children: [
                      (0, j.jsx)("p", {
                        className: (0, ec.default)("mb-7 mt-3"),
                        children: (0, j.jsx)(
                          U.Z,
                          (0, p._)({}, r$.continueWithChosenAnswer),
                        ),
                      }),
                      (0, j.jsx)(r2, {
                        className: "rounded-md",
                        children: (0, j.jsx)(r5, {
                          children: (0, j.jsx)(rE, {
                            currentModelId: u,
                            turnIndex: H,
                            conversationLeafId: eI,
                            isFinalTurn: !1,
                            clientThreadId: d,
                            onChangeItemInView: c,
                            onChangeRating: ef(),
                            onRequestMoreCompletions: m,
                            onRequestCompletion: f,
                            showInlineEmbeddedDisplay: !0,
                          }),
                        }),
                      }),
                      (0, j.jsxs)("div", {
                        className: (0, ec.default)(),
                        children: [
                          (0, j.jsxs)("div", {
                            className: (0, ec.default)(
                              "mb-2 grid w-full grid-cols-2 gap-5",
                            ),
                            children: [
                              (0, j.jsx)("div", {
                                children: (0, j.jsx)("p", {
                                  className: (0, ec.default)("font-semibold"),
                                  children: eR,
                                }),
                              }),
                              (0, j.jsx)("div", {
                                children: (0, j.jsx)("p", {
                                  className: (0, ec.default)("font-semibold"),
                                  children: eZ,
                                }),
                              }),
                            ],
                          }),
                          (0, j.jsxs)("div", {
                            className: (0, ec.default)(
                              "mb-5 grid w-full grid-cols-2 gap-5",
                            ),
                            children: [
                              (0, j.jsxs)(r1, {
                                children: [
                                  (0, j.jsx)(r5, {
                                    children: (0, j.jsx)(rE, {
                                      currentModelId: u,
                                      turnIndex: eN ? G : y,
                                      conversationLeafId: eN ? ex : ea,
                                      isFinalTurn: !0,
                                      clientThreadId: d,
                                      onChangeItemInView: c,
                                      onChangeRating: ef(),
                                      onRequestMoreCompletions: m,
                                      onRequestCompletion: f,
                                      showInlineEmbeddedDisplay: !0,
                                    }),
                                  }),
                                  (0, j.jsx)(r0, {
                                    children: (0, j.jsx)(es.ZP.Button, {
                                      disabled: !eE,
                                      title: eL,
                                      onClick: function () {
                                        return eF("left");
                                      },
                                      color: "dark",
                                    }),
                                  }),
                                ],
                              }),
                              (0, j.jsxs)(r1, {
                                children: [
                                  (0, j.jsx)(r5, {
                                    children: (0, j.jsx)(rE, {
                                      currentModelId: u,
                                      turnIndex: eN ? y : G,
                                      conversationLeafId: eI,
                                      isFinalTurn: !0,
                                      clientThreadId: d,
                                      onChangeItemInView: c,
                                      onChangeRating: ef(),
                                      onRequestMoreCompletions: m,
                                      onRequestCompletion: f,
                                      showInlineEmbeddedDisplay: !0,
                                    }),
                                  }),
                                  (0, j.jsx)(r0, {
                                    children: (0, j.jsx)(es.ZP.Button, {
                                      disabled: !eE,
                                      title: eD,
                                      onClick: function () {
                                        return eF("right");
                                      },
                                      color: "dark",
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, j.jsx)("div", {
                            className: (0, ec.default)("grid w-full"),
                            children: (0, j.jsxs)("div", {
                              className: (0, ec.default)("mb-2 text-right"),
                              children: [
                                (0, j.jsx)(es.ZP.Button, {
                                  disabled: !eE,
                                  title: g.formatMessage(
                                    r$.neitherAnswerBetter,
                                  ),
                                  color: "primary",
                                  onClick: function () {
                                    return eF("same");
                                  },
                                  className: (0, ec.default)("mr-2"),
                                }),
                                (0, j.jsx)(es.ZP.Button, {
                                  title: g.formatMessage(r$.skipStep),
                                  onClick: function () {
                                    return i();
                                  },
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                (0, j.jsx)(es.ZP.Actions, { primaryButton: eT }),
              ],
            },
            "RatingModal-".concat(a),
          )
        );
      }
      var r0 = z.Z.div(rH()),
        r1 = z.Z.div(rG()),
        r2 = z.Z.div(rY()),
        r5 = z.Z.div(rJ()),
        r4 = n(41711);
      function r3(e) {
        var t,
          n = e.clientThreadId,
          a = e.currentLeafId,
          r = e.currentModelId,
          i = e.onChangeItemInView,
          s = e.onRequestMoreCompletions,
          o = e.onChangeRating,
          l = e.onRequestCompletion,
          d = e.ratingModalOpen,
          u = e.ratingModalNodeId,
          c = e.ratingModalCompletionId,
          m = e.sharedConversationReportModalNodeId,
          f = e.sharedConversationModerationModalOpen,
          g = e.setRatingModalOpen,
          p = e.setSharedConversationReportModalNodeId,
          x = e.setSharedConversationModerationModalOpen,
          v = (0, O.Z)(),
          w = (0, F.useRef)(null),
          k = (0, b._)((0, F.useState)(!1), 2),
          C = k[0],
          M = k[1],
          _ = (0, F.useCallback)(
            function (e, t) {
              if (d && null != u && "" !== u && (e || t.length > 0)) {
                var a = Y.tQ.getServerThreadId(n);
                N.o.logEvent(I.a.reportResult, {
                  id: c,
                  threadId: a,
                  content: e,
                  model: r,
                  rating: d,
                  tags: t,
                }),
                  n &&
                    c &&
                    Q.ZP.submitMessageFeedback({
                      message_id: c,
                      conversation_id: a,
                      rating: d,
                      text: e,
                      tags: t,
                    });
              }
            },
            [d, u, n, c, r],
          ),
          T = (0, F.useCallback)(
            function (e, t) {
              if (null != m && "" !== m) {
                var a = Y.tQ.getServerThreadId(n);
                N.o.logEvent(I.a.reportResult, {
                  id: c,
                  threadId: a,
                  content: e,
                  model: r,
                  rating: d,
                  tags: t,
                }),
                  Q.ZP.submitSharedConversationReportFeedback({
                    message_id: m,
                    shared_conversation_id: a,
                    text: e,
                    tags: t,
                  }),
                  M(!0);
              }
            },
            [m, n, c, r, d, M],
          ),
          S = (0, F.useCallback)(
            ((t = (0, h._)(function (e, t, a, r, i, s, o, l, d, u, c) {
              return (0, y.Jh)(this, function (m) {
                switch (m.label) {
                  case 0:
                    return [
                      4,
                      Q.ZP.submitMessageComparisonFeedback({
                        feedback_version: "comparison_feedback_modal:a:1.0",
                        original_message_id: e,
                        new_message_id: t,
                        rating: a,
                        conversation_id: Y.tQ.getServerThreadId(n),
                        text: u,
                        tags: c.map(function (e) {
                          return e.replace("feedback-", "");
                        }),
                        completion_comparison_rating: r,
                        new_completion_placement: i,
                        feedback_start_time: s,
                        compare_step_start_time: o,
                        new_completion_load_start_time: l,
                        new_completion_load_end_time: d,
                        frontend_submission_time: Date.now(),
                        timezone_offset_min: new Date().getTimezoneOffset(),
                      }),
                    ];
                  case 1:
                    return m.sent(), [2];
                }
              });
            })),
            function (e, n, a, r, i, s, o, l, d, u, c) {
              return t.apply(this, arguments);
            }),
            [n],
          );
        return null != d
          ? (0, j.jsx)(rX, {
              ratingModalNodeId: u,
              ratingModalOpen: d,
              onCloseRatingModal: function () {
                return g(void 0);
              },
              handleSubmitFeedback: _,
              onHandleChangeFeedbackComparisonRating: S,
              currentModelId: r,
              feedbackTextareaRef: w,
              clientThreadId: n,
              onChangeItemInView: i,
              onRequestMoreCompletions: s,
              onChangeRating: o,
              onRequestCompletion: l,
            })
          : null != m
          ? (0, j.jsx)(rX, {
              ratingModalNodeId: m,
              ratingModalOpen: "report",
              onCloseRatingModal: function () {
                return p(void 0);
              },
              handleSubmitFeedback: T,
              onHandleChangeFeedbackComparisonRating: function () {},
              currentModelId: r,
              feedbackTextareaRef: w,
              clientThreadId: n,
              onChangeItemInView: i,
              onRequestMoreCompletions: s,
              onChangeRating: o,
              onRequestCompletion: l,
            })
          : C
          ? (0, j.jsx)(eo.Z, {
              onClose: function () {
                return M(!1);
              },
              isOpen: !0,
              icon: r4.Z,
              title: v.formatMessage(r6.reportModalThankYouTitle),
              description: v.formatMessage(r6.reportModalThankYouDescription),
              primaryButton: (0, j.jsx)(es.ZP.Button, {
                onClick: function () {
                  return M(!1);
                },
                title: v.formatMessage(r6.reportModalThankYouDismiss),
              }),
              type: "danger",
            })
          : f
          ? (0, j.jsx)(rX, {
              ratingModalNodeId: a,
              ratingModalOpen: "moderate",
              onCloseRatingModal: function () {
                return x(!1);
              },
              handleSubmitFeedback: rf.noop,
              onHandleChangeFeedbackComparisonRating: function () {},
              currentModelId: r,
              feedbackTextareaRef: w,
              clientThreadId: n,
              onChangeItemInView: i,
              onRequestMoreCompletions: s,
              onChangeRating: o,
              onRequestCompletion: l,
            })
          : null;
      }
      var r6 = (0, A.vU)({
          reportModalThankYouTitle: {
            id: "thread.modal.reportModalThankYou.title",
            defaultMessage: "Thank you for your report!",
            description: "Title for the post-report thank-you modal",
          },
          reportModalThankYouDescription: {
            id: "thread.modal.reportModalThankYou.description",
            defaultMessage: "Thank you for your report.",
            description: "Description for the post-report thank-you modal",
          },
          reportModalThankYouDismiss: {
            id: "thread.modal.reportModalThankYou.dismissButton",
            defaultMessage: "Close",
            description: "Close button for the post-report thank-you modal",
          },
        }),
        r7 = n(65261),
        r8 = n(74686),
        r9 = n(96175);
      function ie(e) {
        var t,
          n = e.isOpen,
          a = e.onClose,
          r = (0, F.useCallback)(
            function () {
              N.o.logEvent(I.a.closeAccountPaymentModal), a();
            },
            [a],
          ),
          i = (0, ek.a)(
            ["referralInvites"],
            function () {
              return Q.ZP.getEligibleReferralInvites();
            },
            { enabled: n },
          ),
          s = i.data,
          o = i.isLoading,
          l = i.isSuccess,
          d =
            null !== (t = null == s ? void 0 : s.invites_remaining) &&
            void 0 !== t
              ? t
              : 0,
          u = l ? s.invite_codes : [];
        return ((0, F.useEffect)(
          function () {
            n &&
              (eO.m9.logEvent("chatgpt_referral_invite_modal_opened"),
              N.o.logEvent(I.a.chatgptReferralInviteModalOpened));
          },
          [n],
        ),
        l)
          ? (0, j.jsxs)(r9.x, {
              isOpen: n,
              onClose: a,
              children: [
                (0, j.jsxs)("div", {
                  className:
                    "flex w-full flex-row items-center justify-between border-b px-4 py-3 dark:border-gray-700",
                  children: [
                    (0, j.jsx)("span", {
                      className: "text-base font-semibold sm:text-base",
                      children: (0, j.jsx)(
                        U.Z,
                        (0, x._)((0, p._)({}, ii.modalTitle), {
                          values: { remainingInviteCount: d },
                        }),
                      ),
                    }),
                    (0, j.jsx)("button", {
                      className:
                        "text-gray-700 opacity-50 transition hover:opacity-75 dark:text-white",
                      onClick: r,
                      children: (0, j.jsx)(E.q5L, { className: "h-6 w-6" }),
                    }),
                  ],
                }),
                (0, j.jsx)("div", {
                  className: "px-4 py-4",
                  children: (0, j.jsx)("div", {
                    className: "relative col-span-1 px-3 md:w-[500px] md:px-0",
                    children: (0, j.jsxs)("div", {
                      children: [
                        (0, j.jsx)("div", {
                          className: "flex flex-col items-center pb-5 pt-4",
                          children: (0, j.jsx)(E.E33, {
                            className: "h-12 w-12 text-gray-800",
                          }),
                        }),
                        (0, j.jsxs)("div", {
                          className:
                            "flex flex-col items-center gap-2 text-center",
                          children: [
                            (0, j.jsx)("p", {
                              className: "text-xl font-semibold leading-6",
                              children: (0, j.jsx)(
                                U.Z,
                                (0, p._)({}, ii.inviteDescription),
                              ),
                            }),
                            (0, j.jsx)("p", {
                              className: "max-w-sm text-xs text-gray-500",
                              children: (0, j.jsx)(
                                U.Z,
                                (0, p._)({}, ii.inviteDescriptionFollowUp),
                              ),
                            }),
                          ],
                        }),
                        (0, j.jsxs)("div", {
                          className: "mt-6",
                          children: [
                            (0, j.jsxs)("div", {
                              className: "flex flex-row justify-between px-2",
                              children: [
                                (0, j.jsx)("label", {
                                  className:
                                    "block text-sm font-medium text-gray-900",
                                  children: (0, j.jsx)(
                                    U.Z,
                                    (0, p._)({}, ii.referralCodeLabel),
                                  ),
                                }),
                                (0, j.jsx)("label", {
                                  className: "block text-sm text-gray-500",
                                  children: (0, j.jsx)(
                                    U.Z,
                                    (0, x._)((0, p._)({}, ii.inviteRemaining), {
                                      values: { remainingInviteCount: d },
                                    }),
                                  ),
                                }),
                              ],
                            }),
                            o
                              ? (0, j.jsx)("div", {
                                  className: "h-40 py-2",
                                  children: (0, j.jsx)(eV.Z, {
                                    className: "h-4 w-4",
                                  }),
                                })
                              : null,
                            (null == u ? void 0 : u.length) > 0 &&
                              (0, j.jsx)(ia, { referralCodes: u }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
              ],
            })
          : null;
      }
      var it = function (e) {
          return "".concat(window.location.host, "/invite/").concat(e);
        },
        ia = function (e) {
          var t = e.referralCodes,
            n = (0, F.useRef)(null);
          return (0, j.jsx)("div", {
            className: "mt-2 flow-root",
            children: (0, j.jsx)("div", {
              className: "-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8",
              children: (0, j.jsx)("div", {
                className:
                  "inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8",
                children: (0, j.jsx)("div", {
                  ref: n,
                  className: (0, ec.default)(
                    "shadow ring-1 ring-black ring-opacity-5 sm:rounded-md",
                    {
                      "h-44 overflow-y-scroll": t.length > 4,
                      "overflow-hidden": t.length <= 4,
                    },
                  ),
                  children: (0, j.jsx)("table", {
                    className: "min-w-full",
                    children: (0, j.jsx)("tbody", {
                      className:
                        "divide-y divide-gray-200 bg-white dark:divide-gray-900 dark:bg-gray-800",
                      children: t
                        .sort(function (e, t) {
                          var n = {
                              activated: 0,
                              created: 1,
                              claimed: 2,
                              subscription_granted: 3,
                            },
                            a = e.status,
                            r = t.status;
                          return n[a] < n[r]
                            ? -1
                            : n[a] > n[r]
                            ? 1
                            : e.updated_at > t.updated_at
                            ? -1
                            : e.updated_at < t.updated_at
                            ? 1
                            : 0;
                        })
                        .map(function (e) {
                          return (0, j.jsx)(
                            ir,
                            { tableRef: n, referralCode: e },
                            e.id,
                          );
                        }),
                    }),
                  }),
                }),
              }),
            }),
          });
        },
        ir = function (e) {
          var t,
            n = e.referralCode,
            a = e.tableRef,
            r = (0, O.Z)(),
            i = (0, F.useRef)(null),
            s = (0, b._)((0, F.useState)(!1), 2),
            o = s[0],
            l = s[1],
            d = (0, b._)((0, F.useState)(!1), 2),
            u = d[0],
            c = d[1],
            m = (0, ej.NL)(),
            f = (0, r8.D)({
              mutationFn: function () {
                return Q.ZP.postActivateReferralInvite(n.id);
              },
              onSettled: function () {
                m.invalidateQueries({ queryKey: ["referralInvites"] }), l(!1);
              },
              onError: (0, h._)(function () {
                return (0, y.Jh)(this, function (e) {
                  return (
                    nT.m.danger(r.formatMessage(ii.activateReferralError)), [2]
                  );
                });
              }),
              onSuccess: function (e) {
                l(!1);
                var t,
                  n,
                  s = e.invite_code;
                navigator.clipboard.writeText(it(null != s ? s : "")),
                  c(!0),
                  null === (t = i.current) || void 0 === t || t.select(),
                  nT.m.success(
                    r.formatMessage(ii.copiedReferralToastMessage, {
                      referralInviteCode: s,
                    }),
                    { duration: 3, hasCloseButton: !0 },
                  ),
                  null === (n = a.current) || void 0 === n || n.scrollTo(0, 0);
              },
            }).mutateAsync,
            g =
              ((t = (0, h._)(function (e) {
                var t;
                return (0, y.Jh)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      switch (e.status) {
                        case "created":
                          return [3, 1];
                        case "activated":
                          return [3, 3];
                        case "claimed":
                          return [3, 4];
                        case "subscription_granted":
                          return [3, 5];
                      }
                      return [3, 6];
                    case 1:
                      return (
                        l(!0),
                        eO.m9.logEvent(
                          "chatgpt_referral_invite_link_activated",
                        ),
                        N.o.logEvent(I.a.chatgptReferralInviteLinkActivated),
                        [4, f()]
                      );
                    case 2:
                      return n.sent(), [3, 7];
                    case 3:
                      return (
                        eO.m9.logEvent("chatgpt_referral_invite_link_copied"),
                        N.o.logEvent(I.a.chatgptReferralInviteLinkCopied),
                        navigator.clipboard.writeText(
                          it(
                            null !== (t = e.code_token) && void 0 !== t
                              ? t
                              : "",
                          ),
                        ),
                        c(!0),
                        nT.m.success(
                          r.formatMessage(ii.copiedReferralToastMessage, {
                            referralInviteCode: e.code_token,
                          }),
                          { duration: 3, hasCloseButton: !0 },
                        ),
                        [3, 7]
                      );
                    case 4:
                    case 5:
                    case 6:
                      return [3, 7];
                    case 7:
                      return [2];
                  }
                });
              })),
              function (e) {
                return t.apply(this, arguments);
              }),
            x = "".concat(window.location.host, "/invite/");
          return (0, j.jsxs)("tr", {
            children: [
              (0, j.jsxs)("td", {
                className:
                  "relative w-full whitespace-nowrap py-1.5 pl-1 pr-3 text-sm text-gray-900 dark:text-white",
                children: [
                  (0, j.jsx)("input", {
                    ref: i,
                    name: "referral-code",
                    className:
                      "block w-full border-0 bg-transparent py-1.5 pl-2 text-gray-900 shadow-none ring-0 ring-inset placeholder:text-gray-600 focus:ring-0 focus:ring-inset dark:text-white placeholder:dark:text-white sm:text-sm",
                    disabled: "activated" != n.status,
                    value:
                      "created" == n.status ||
                      "subscription_granted" == n.status
                        ? ""
                        : it(n.code_token),
                  }),
                  (0, j.jsxs)("span", {
                    className:
                      "absolute top-3 flex items-center pl-2 text-gray-700  dark:text-white",
                    children: [
                      "created" == n.status &&
                        (0, j.jsxs)("span", {
                          children: [
                            x,
                            (0, j.jsx)("span", {
                              className:
                                "select-none text-gray-400  dark:text-gray-300",
                              children: "•••••••",
                            }),
                          ],
                        }),
                      "subscription_granted" == n.status &&
                        (0, j.jsx)("span", {
                          className: "select-none line-through opacity-25",
                          children: it(n.code_token),
                        }),
                    ],
                  }),
                ],
              }),
              (0, j.jsx)("td", {
                className:
                  "relative whitespace-nowrap py-1.5 pl-3 pr-2 text-right text-sm font-medium sm:pr-2",
                children: (0, j.jsx)(er.z, {
                  disabled:
                    o ||
                    "claimed" == n.status ||
                    "subscription_granted" == n.status,
                  loading: o,
                  as: "button",
                  type: "button",
                  onClick: function () {
                    return g(n);
                  },
                  color: "created" == n.status ? "primary" : "light",
                  className: (0, ec.default)("w-20 rounded-sm py-1 text-sm", {
                    "bg-brand-green/20 text-green-700 hover:bg-brand-green/30 dark:bg-brand-green/50 dark:text-green-100 dark:hover:bg-brand-green/40":
                      "activated" == n.status,
                    "!bg-gray-200 ": "subscription_granted" == n.status,
                  }),
                  children: (0, j.jsx)("span", {
                    className: "flex flex-row items-center",
                    children:
                      "created" == n.status
                        ? (0, j.jsx)(U.Z, (0, p._)({}, ii.referralActivate))
                        : "activated" == n.status
                        ? u
                          ? (0, j.jsx)(U.Z, (0, p._)({}, ii.referralCopied))
                          : (0, j.jsx)(U.Z, (0, p._)({}, ii.referralCopy))
                        : "claimed" == n.status
                        ? (0, j.jsx)(U.Z, (0, p._)({}, ii.referralClaimed))
                        : "subscription_granted" == n.status
                        ? (0, j.jsx)(U.Z, (0, p._)({}, ii.referralClaimed))
                        : null,
                  }),
                }),
              }),
            ],
          });
        },
        ii = (0, A.vU)({
          modalTitle: {
            id: "InviteReferralModal.modalTitle",
            description: "Description for the invite referral modal",
            defaultMessage: "Refer a friend",
          },
          inviteFormTitle: {
            id: "InviteReferralModal.inviteFormTitle",
            description: "Title for the invite referral form",
            defaultMessage: "Emails",
          },
          invitePlaceholder: {
            id: "InviteReferralModal.invitePlaceholder",
            description:
              "List of placeholder emails for the invite referral form",
            defaultMessage: "friend@openai.com, friend2@openai.com...",
          },
          referralActivate: {
            id: "InviteReferralModal.referralActivate",
            description: "Button label for activating a referral code",
            defaultMessage: "Copy",
          },
          referralCopy: {
            id: "InviteReferralModal.referralCopy",
            description: "Button label for copying a referral code",
            defaultMessage: "Copy",
          },
          referralCopied: {
            id: "InviteReferralModal.referralCopied",
            description: "Button label for when a referral code is copied",
            defaultMessage: "Copied",
          },
          referralClaimed: {
            id: "InviteReferralModal.referralClaimed",
            description: "Disabled state for claimed referral code",
            defaultMessage: "Claimed",
          },
          inviteDescription: {
            id: "InviteReferralModal.inviteDescription",
            description: "Description text for the invite referral modal",
            defaultMessage: "Share ChatGPT Plus with your friends!",
          },
          inviteDescriptionFollowUp: {
            id: "InviteReferralModal.inviteDescriptionFollowUp",
            description:
              "Description follow up text for the invite referral modal",
            defaultMessage:
              "Activate and copy the referral links below to share ChatGPT Plus with your friends, giving them access to a free trial!",
          },
          inviteRemaining: {
            id: "InviteReferralModal.inviteRemaining",
            description:
              "Description of invites remaining for the invite referral modal",
            defaultMessage: "{remainingInviteCount} available",
          },
          usersInvited: {
            id: "InviteReferralModal.usersInvited",
            description:
              "Description of users invited for the invite referral modal",
            defaultMessage:
              "<showcaseValue>{usersInviteCount}</showcaseValue><description>users invited</description>",
          },
          referralCodeLabel: {
            id: "InviteReferralModal.referralCodeLabel",
            description: "Label for the referral code input field",
            defaultMessage: "Links",
          },
          sendInviteCta: {
            id: "InviteReferralModal.sendInviteCta",
            description: "Button text for the invite referral modal",
            defaultMessage: "Send invites",
          },
          clickToActivateString: {
            id: "InviteReferralModal.clickToActivateString",
            description:
              "Text for the activate referral invite action referral modal",
            defaultMessage:
              "chat.openai.com/invite/<codeStyle>•••••••</codeStyle>",
          },
          clickToCopyString: {
            id: "InviteReferralModal.clickToCopyString",
            description:
              "Text for clicking to copy invite action referral modal",
            defaultMessage: "Click to copy",
          },
          copiedReferralToastMessage: {
            id: "InviteReferralModal.copiedReferralToastMessage",
            description:
              "Toast text to display when copying a referral invite code",
            defaultMessage:
              "Your referral link {referralInviteCode} has been copied to your clipboard. Share it with your friends!",
          },
          activateReferralError: {
            id: "InviteReferralModal.activateReferralError",
            description:
              "Text to display when activating a referral invite fails",
            defaultMessage:
              "Failed to accept referral invite. Please try again.",
          },
        }),
        is = n(38566),
        io = n(15329),
        il = n(87389),
        id = n(31486),
        iu = n(85330);
      function ic() {
        var e,
          t,
          n,
          a,
          r,
          i,
          s = (0, O.Z)(),
          o =
            ((t = (e = (0, il.S)()).isLoggedInWithMfa),
            (n = e.isUsernamePassword),
            (a = e.setupMfa),
            (i = (r = (0, iu.p0)()).filter(function (e) {
              return !(
                "none" === e.manifest.auth.type ||
                "service_http" === e.manifest.auth.type
              );
            })),
            (t || !n) && (i = []),
            {
              disablePluginsThatWeCantUse: function () {
                var e = r.filter(function (e) {
                  return (
                    "none" === e.manifest.auth.type ||
                    "service_http" === e.manifest.auth.type
                  );
                });
                (0, iu.dT)(
                  e.map(function (e) {
                    return e.id;
                  }),
                );
              },
              pluginsWeCantUse: i,
              setupMfa: a,
            }),
          l = o.disablePluginsThatWeCantUse,
          d = o.pluginsWeCantUse,
          u = o.setupMfa,
          c = (0, F.useCallback)(
            function () {
              l();
            },
            [l],
          );
        return 0 === d.length
          ? null
          : (0, j.jsx)(eo.Z, {
              isOpen: !0,
              onClose: c,
              title: (0, j.jsx)(U.Z, (0, p._)({}, im.title)),
              primaryButton: (0, j.jsx)(es.ZP.Button, {
                onClick: u,
                title: s.formatMessage(im.primaryButtonTitle),
                color: "primary",
              }),
              secondaryButton: (0, j.jsx)(es.ZP.Button, {
                onClick: l,
                title: s.formatMessage(im.secondaryButtonTitle),
              }),
              type: "danger",
              children: (0, j.jsx)("div", {
                className: "flex flex-col gap-2 py-4",
                children: d.map(function (e) {
                  return (0, j.jsx)(
                    "div",
                    {
                      className: "w-full",
                      children: (0, j.jsx)(id.Z, { plugin: e }),
                    },
                    e.id,
                  );
                }),
              }),
            });
      }
      var im = (0, A.vU)({
          title: {
            id: "RequireMfaForAuthPluginsModal.title",
            description: "Title for the Require MFA for Auth Plugins modal",
            defaultMessage:
              "Some of your plugins require two-factor authentication.",
          },
          primaryButtonTitle: {
            id: "RequireMfaForAuthPluginsModal.primaryButtonTitle",
            description:
              "Title for the primary button to set up two-factor authentication",
            defaultMessage: "Setup two-factor authentication",
          },
          secondaryButtonTitle: {
            id: "RequireMfaForAuthPluginsModal.secondaryButtonTitle",
            description: "Title for the secondary button to disable plugins",
            defaultMessage: "Turn off the plugins",
          },
        }),
        ig = n(44513),
        ih = n(56817),
        ip = n(19350),
        ix = n(51061);
      function iv(e) {
        var t = e.isOpen,
          n = e.onClose,
          a = (0, b._)((0, F.useState)(!1), 2),
          r = a[0],
          i = a[1],
          s = (0, B.useRouter)(),
          o = (0, F.useCallback)(
            function () {
              N.o.logEvent(I.a.closeAccountPaymentModal), n();
            },
            [n],
          ),
          l = (0, F.useCallback)(
            (0, h._)(function () {
              var e;
              return (0, y.Jh)(this, function (t) {
                switch (t.label) {
                  case 0:
                    i(!0),
                      N.o.logEvent(I.a.clickAccountCustomerPortal),
                      (t.label = 1);
                  case 1:
                    return (
                      t.trys.push([1, 3, 4, 5]),
                      [4, Q.ZP.fetchCustomerPortalUrl()]
                    );
                  case 2:
                    return (e = t.sent()), s.push(e.url), [3, 5];
                  case 3:
                    return (
                      t.sent(),
                      nT.m.warning(
                        "The account management page encountered an error. Please try again. If the problem continues, please visit help.openai.com.",
                        { hasCloseButton: !0 },
                      ),
                      [3, 5]
                    );
                  case 4:
                    return i(!1), [7];
                  case 5:
                    return [2];
                }
              });
            }),
            [s, i],
          ),
          d = (0, F.useCallback)(function () {
            N.o.logEvent(I.a.clickAccountPaymentGetHelp);
          }, []),
          u = (0, F.useCallback)(function () {
            N.o.logEvent(I.a.clickAccountManageIos);
          }, []),
          c = (0, F.useCallback)(function () {
            N.o.logEvent(I.a.clickAccountManageAndroid);
          }, []),
          m = (0, K.e2)(),
          f = (0, K.YD)();
        return (0, j.jsxs)(r9.x, {
          isOpen: t,
          onClose: n,
          children: [
            (0, j.jsxs)("div", {
              className:
                "flex w-full flex-row items-center justify-between border-b px-4 py-3 dark:border-gray-700",
              children: [
                (0, j.jsx)("span", {
                  className: "text-base font-semibold sm:text-base",
                  children: (0, j.jsx)(U.Z, (0, p._)({}, ib.modalTitle)),
                }),
                (0, j.jsx)("button", {
                  className:
                    "text-gray-700 opacity-50 transition hover:opacity-75 dark:text-white",
                  onClick: o,
                  children: (0, j.jsx)(E.q5L, { className: "h-6 w-6" }),
                }),
              ],
            }),
            (0, j.jsx)("div", {
              className: "grid",
              children: (0, j.jsx)("div", {
                className: "relative order-1 col-span-1 sm:order-2",
                children: (0, j.jsx)(ip.Oi, {
                  rowElements: [
                    (0, j.jsx)(
                      ip.Cu,
                      {
                        text: ix.S.plus.name,
                        children: (0, j.jsx)("span", {
                          className: "font-semibold text-gray-500",
                          children: (0, j.jsx)(
                            U.Z,
                            (0, p._)({}, ix.S.plus.costInDollars),
                          ),
                        }),
                      },
                      "row-plus-plan-name",
                    ),
                    (0, j.jsx)(
                      ip.hi,
                      {
                        disabled: !0,
                        variant: "primary-disabled",
                        text: ix.S.plus.callToAction.active,
                      },
                      "row-plus-plan-button",
                    ),
                    (0, j.jsx)(
                      ip.G,
                      { text: ix.S.plus.demandAccess },
                      "row-plus-plan-demand",
                    ),
                    (0, j.jsx)(
                      ip.G,
                      { text: ix.S.plus.responseSpeed },
                      "row-plus-plan-speed",
                    ),
                    (0, j.jsx)(
                      ip.G,
                      { className: "sm:pb-1", text: ix.S.plus.modelFeatures },
                      "row-plus-plan-feathers",
                    ),
                    (null == m ? void 0 : m.purchase_origin_platform) ===
                      ih._4.MOBILE_IOS &&
                      (0, j.jsx)(
                        D(),
                        {
                          href: ih.m1,
                          target: "_blank",
                          passHref: !0,
                          children: (0, j.jsx)(ip.nR, {
                            className: "sm:pb-1",
                            isLoading: !1,
                            text: ix.S.manageSubscriptionIos.callToAction,
                            onClick: u,
                          }),
                        },
                        "row-plus-plan-manage-ios",
                      ),
                    (null == m ? void 0 : m.purchase_origin_platform) ===
                      ih._4.MOBILE_ANDROID &&
                      (0, j.jsx)(
                        D(),
                        {
                          href: ih.Zr,
                          target: "_blank",
                          passHref: !0,
                          children: (0, j.jsx)(ip.nR, {
                            className: "sm:pb-1",
                            isLoading: !1,
                            text: ix.S.manageSubscriptionAndroid.callToAction,
                            onClick: c,
                          }),
                        },
                        "row-plus-plan-manage-android",
                      ),
                    (!m ||
                      m.purchase_origin_platform === ih._4.WEBAPP ||
                      m.purchase_origin_platform === ih._4.GRANTED) &&
                      f &&
                      (0, j.jsx)(
                        ip.nR,
                        {
                          className: "sm:pb-1",
                          isLoading: r,
                          text: ix.S.manageSubscriptionWeb.callToAction,
                          onClick: l,
                        },
                        "row-plus-plan-manage",
                      ),
                    (0, j.jsx)(
                      D(),
                      {
                        href: ih.ti,
                        target: "_blank",
                        passHref: !0,
                        children: (0, j.jsx)(
                          ip.nR,
                          {
                            className: "sm:pb-1",
                            isLoading: !1,
                            isTextOnly: !0,
                            text: ix.S.getHelp.callToAction,
                            onClick: d,
                          },
                          "row-plus-plan-help",
                        ),
                      },
                      "row-plus-plan-help-link",
                    ),
                  ],
                }),
              }),
            }),
          ],
        });
      }
      var ib = (0, A.vU)({
          modalTitle: {
            id: "AccountCustomerPortalModal.modalTitle",
            description: "Title for the account custom portal page modal",
            defaultMessage: "Your plan",
          },
        }),
        iw = n(93683);
      function iy(e) {
        var t = e.isOpen,
          n = e.onClose,
          a = (0, F.useCallback)(
            function () {
              N.o.logEvent(I.a.closeAccountPaymentModal), n();
            },
            [n],
          );
        return (0, j.jsx)(es.ZP.Root, {
          isOpen: t,
          onClose: a,
          shouldIgnoreClickOutside: !0,
          children: (0, j.jsx)(es.ZP.Overlay, {
            children: (0, j.jsx)(es.ZP.Content, {
              className:
                "focus-none !bg-transparent !shadow-none outline-none md:w-[672px] lg:w-[896px] xl:w-[1024px]",
              children: (0, j.jsx)("div", {
                className:
                  "focus-none flex h-full flex-col items-center justify-start outline-none",
                children: (0, j.jsx)("div", {
                  className: "relative w-full",
                  children: (0, j.jsxs)("div", {
                    className:
                      "flex grow flex-col items-start justify-center overflow-hidden rounded-md border bg-white shadow-md dark:border-gray-700 dark:bg-gray-900",
                    children: [
                      (0, j.jsxs)("div", {
                        className:
                          "flex w-full flex-row items-center justify-between border-b px-4 py-3 dark:border-gray-700",
                        children: [
                          (0, j.jsx)("span", {
                            className: "text-base font-semibold sm:text-base",
                            children: (0, j.jsx)(
                              U.Z,
                              (0, p._)({}, ij.modalTitle),
                            ),
                          }),
                          (0, j.jsx)("button", {
                            className:
                              "text-gray-700 opacity-50 transition hover:opacity-75 dark:text-white",
                            onClick: a,
                            children: (0, j.jsx)(E.q5L, {
                              className: "h-6 w-6",
                            }),
                          }),
                        ],
                      }),
                      (0, j.jsx)("div", {
                        className: "grid w-full",
                        children: (0, j.jsx)("div", {
                          className: "relative w-full ",
                          children: (0, j.jsx)("div", {
                            id: "embedded-checkout-modal",
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
              }),
            }),
          }),
        });
      }
      var ij = (0, A.vU)({
          modalTitle: {
            id: "EmbeddedPaymentModal.modalTitle",
            description: "Title for the payment page modal",
            defaultMessage: "Your plan",
          },
        }),
        ik = n(35588),
        iC = n(26003),
        iM = n(6013),
        i_ = n(43477),
        iT = (0, F.createContext)(),
        iN = function (e) {
          return (0, el.oR)((0, F.useContext)(iT), e);
        },
        iI = n(68993);
      function iS(e) {
        return e.some(function (e) {
          return e.messages.some(function (e) {
            var t, n, a, r;
            return (
              (null ==
              (a =
                null === (t = e.message.metadata) || void 0 === t
                  ? void 0
                  : t.aggregate_result)
                ? void 0
                : null === (n = a.messages) || void 0 === n
                ? void 0
                : n.some(tG)) ||
              ("parts" in (r = e.message.content)
                ? r.parts.join("")
                : ""
              ).includes("sandbox:")
            );
          });
        });
      }
      var iP = function (e) {
        var t = e.children,
          n = e.color,
          a = void 0 === n ? "yellow" : n,
          r = e.icon;
        return (0, j.jsxs)("div", {
          className: (0, ec.default)(
            "mb-4 flex items-start justify-start gap-2.5 rounded-md p-4 last:mb-0",
            {
              "bg-yellow-300 text-[#756B5C]": "yellow" === a,
              "bg-gray-50 text-gray-800 dark:bg-[#444654] dark:text-gray-100":
                "gray" === a,
            },
          ),
          children: [
            null != r &&
              (0, j.jsx)(r, { className: "icon-sm mt-1 flex-shrink-0" }),
            t,
          ],
        });
      };
      function iR() {
        var e = (0, w._)([
          "bg-yellow-200 text-yellow-900 py-0.5 px-1.5 text-xs md:text-sm rounded-md uppercase",
        ]);
        return (
          (iR = function () {
            return e;
          }),
          e
        );
      }
      function iZ() {
        var e = (0, w._)(["bg-blue-200 text-blue-700"]);
        return (
          (iZ = function () {
            return e;
          }),
          e
        );
      }
      var iL = z.Z.span(iR()),
        iD = (0, z.Z)(iL)(iZ()),
        iB = function () {
          var e = (0, K.ec)(function (e) {
              return e.currentWorkspace;
            }),
            t = (0, K.WY)();
          return (null == e ? void 0 : e.structure) === "workspace"
            ? (0, j.jsx)(iD, {
                children: (0, j.jsx)(U.Z, (0, p._)({}, iF.enterprisePlanName)),
              })
            : (null == e ? void 0 : e.structure) === nW.CZ.PERSONAL && t
            ? (0, j.jsx)(iL, { children: "Plus" })
            : null;
        },
        iF = (0, A.vU)({
          enterprisePlanName: {
            id: "badge.enterprisePlanName",
            defaultMessage: "Enterprise",
            description: "label for enterprise tier account",
          },
        }),
        iE = n(75318);
      function iq() {
        var e = (0, w._)([
          "text-gray-800 w-full mx-auto md:max-w-2xl lg:max-w-3xl md:h-full md:flex md:flex-col px-6 dark:text-gray-100",
        ]);
        return (
          (iq = function () {
            return e;
          }),
          e
        );
      }
      function iA() {
        var e = (0, w._)([
          "text-4xl font-semibold text-center mt-6 sm:mt-[20vh] ml-auto mr-auto mb-10 sm:mb-16 flex gap-2 items-center justify-center",
        ]);
        return (
          (iA = function () {
            return e;
          }),
          e
        );
      }
      function iU() {
        var e = (0, w._)(["md:flex items-start text-center gap-3.5"]);
        return (
          (iU = function () {
            return e;
          }),
          e
        );
      }
      function iO() {
        var e = (0, w._)(["flex flex-col mb-8 md:mb-auto gap-3.5 flex-1"]);
        return (
          (iO = function () {
            return e;
          }),
          e
        );
      }
      function iz() {
        var e = (0, w._)([
          "flex gap-3 items-center m-auto text-lg font-normal md:flex-col md:gap-2",
        ]);
        return (
          (iz = function () {
            return e;
          }),
          e
        );
      }
      function iW() {
        var e = (0, w._)(["flex flex-col gap-3.5 w-full sm:max-w-md m-auto"]);
        return (
          (iW = function () {
            return e;
          }),
          e
        );
      }
      function iV() {
        var e = (0, w._)(["w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md"]);
        return (
          (iV = function () {
            return e;
          }),
          e
        );
      }
      function iQ() {
        var e = (0, w._)([
          "w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md after:content-['\"'] before:content-['\"']",
        ]);
        return (
          (iQ = function () {
            return e;
          }),
          e
        );
      }
      function iH() {
        var e = (0, w._)([
          "w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md hover:bg-gray-200 dark:hover:bg-gray-900",
        ]);
        return (
          (iH = function () {
            return e;
          }),
          e
        );
      }
      z.Z.div(iq()), z.Z.h1(iA());
      var iG = z.Z.div(iU()),
        iY = z.Z.div(iO()),
        iJ = z.Z.h2(iz()),
        i$ = z.Z.ul(iW()),
        iK = z.Z.li(iV());
      z.Z.li(iQ());
      var iX = z.Z.button(iH());
      function i0() {
        var e = (0, w._)([
          "text-4xl font-semibold text-center mt-6 sm:mt-[6vh] ml-auto mr-auto mb-4 sm:mb-16 flex gap-2 items-center justify-center",
        ]);
        return (
          (i0 = function () {
            return e;
          }),
          e
        );
      }
      function i1() {
        var e = (0, w._)([
          "text-gray-800 w-full mx-auto md:max-w-2xl lg:max-w-3xl md:flex md:flex-col px-6 dark:text-gray-100",
        ]);
        return (
          (i1 = function () {
            return e;
          }),
          e
        );
      }
      var i2 = (0, A.vU)({
        title: {
          id: "Placeholder.title",
          description: "Title text for the Placeholder component",
          defaultMessage: "ChatGPT",
        },
        examplesHeader: {
          id: "Placeholder.examplesHeader",
          description: "Header text for the examples list",
          defaultMessage: "Examples",
        },
        capabilitiesHeader: {
          id: "Placeholder.capabilitiesHeader",
          description: "Header text for the capabilities list",
          defaultMessage: "Capabilities",
        },
        limitationsHeader: {
          id: "Placeholder.limitationsHeader",
          description: "Header text for the limitations list",
          defaultMessage: "Limitations",
        },
        quantumComputingExample: {
          id: "Placeholder.quantumComputingExample",
          description: "Example text for quantum computing explanation",
          defaultMessage: "Explain quantum computing in simple terms",
        },
        birthdayIdeasExample: {
          id: "Placeholder.birthdayIdeasExample",
          description: "Example text for creative birthday ideas",
          defaultMessage:
            "Got any creative ideas for a 10 year old's birthday?",
        },
        httpRequestExample: {
          id: "Placeholder.httpRequestExample",
          description: "Example text for making an HTTP request in Javascript",
          defaultMessage: "How do I make an HTTP request in Javascript?",
        },
        remembersEarlierConversation: {
          id: "Placeholder.remembersEarlierConversation",
          description:
            "Capability description for remembering earlier conversation",
          defaultMessage:
            "Remembers what user said earlier in the conversation",
        },
        allowsFollowUpCorrections: {
          id: "Placeholder.allowsFollowUpCorrections",
          description:
            "Capability description for allowing follow-up corrections",
          defaultMessage: "Allows user to provide follow-up corrections",
        },
        declinesInappropriateRequests: {
          id: "Placeholder.declinesInappropriateRequests",
          description:
            "Capability description for declining inappropriate requests",
          defaultMessage: "Trained to decline inappropriate requests",
        },
        mayGenerateIncorrectInfo: {
          id: "Placeholder.mayGenerateIncorrectInfo",
          description:
            "Limitation description for occasionally generating incorrect information",
          defaultMessage: "May occasionally generate incorrect information",
        },
        mayProduceHarmfulInstructions: {
          id: "Placeholder.mayProduceHarmfulInstructions",
          description:
            "Limitation description for occasionally producing harmful instructions or biased content",
          defaultMessage:
            "May occasionally produce harmful instructions or biased content",
        },
        limitedKnowledgeAfter2021: {
          id: "Placeholder.limitedKnowledgeAfter2021",
          description:
            "Limitation description for limited knowledge of world and events after 2021",
          defaultMessage: "Limited knowledge of world and events after 2021",
        },
      });
      function i5(e) {
        var t = e.text,
          n = e.onChangeCurrentPrompt,
          a = (0, F.useCallback)(
            function () {
              n(t);
            },
            [t, n],
          );
        return (0, j.jsxs)(iX, { onClick: a, children: ['"', t, '" →'] });
      }
      function i4(e) {
        var t = function (e) {
            var t;
            null == n ||
              null === (t = n.current) ||
              void 0 === t ||
              t.setInputValue(e);
          },
          n = e.promptTextareaRef,
          a = (0, O.Z)();
        return (0, j.jsxs)(i6, {
          children: [
            (0, j.jsxs)(i3, {
              children: [
                (0, j.jsx)(U.Z, (0, p._)({}, i2.title)),
                (0, j.jsx)(iB, {}),
              ],
            }),
            (0, j.jsxs)(iG, {
              children: [
                (0, j.jsxs)(iY, {
                  children: [
                    (0, j.jsxs)(iJ, {
                      children: [
                        (0, j.jsx)(E.kXG, { className: "icon-lg" }),
                        (0, j.jsx)(U.Z, (0, p._)({}, i2.examplesHeader)),
                      ],
                    }),
                    (0, j.jsxs)(i$, {
                      children: [
                        (0, j.jsx)(i5, {
                          text: a.formatMessage(i2.quantumComputingExample),
                          onChangeCurrentPrompt: t,
                        }),
                        (0, j.jsx)(i5, {
                          text: a.formatMessage(i2.birthdayIdeasExample),
                          onChangeCurrentPrompt: t,
                        }),
                        (0, j.jsx)(i5, {
                          text: a.formatMessage(i2.httpRequestExample),
                          onChangeCurrentPrompt: t,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, j.jsxs)(iY, {
                  children: [
                    (0, j.jsxs)(iJ, {
                      children: [
                        (0, j.jsx)(iE.Z, { className: "icon-lg" }),
                        (0, j.jsx)(U.Z, (0, p._)({}, i2.capabilitiesHeader)),
                      ],
                    }),
                    (0, j.jsxs)(i$, {
                      children: [
                        (0, j.jsx)(iK, {
                          children: (0, j.jsx)(
                            U.Z,
                            (0, p._)({}, i2.remembersEarlierConversation),
                          ),
                        }),
                        (0, j.jsx)(iK, {
                          children: (0, j.jsx)(
                            U.Z,
                            (0, p._)({}, i2.allowsFollowUpCorrections),
                          ),
                        }),
                        (0, j.jsx)(iK, {
                          children: (0, j.jsx)(
                            U.Z,
                            (0, p._)({}, i2.declinesInappropriateRequests),
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, j.jsxs)(iY, {
                  children: [
                    (0, j.jsxs)(iJ, {
                      children: [
                        (0, j.jsx)(E.BJv, { className: "icon-lg" }),
                        (0, j.jsx)(U.Z, (0, p._)({}, i2.limitationsHeader)),
                      ],
                    }),
                    (0, j.jsxs)(i$, {
                      children: [
                        (0, j.jsx)(iK, {
                          children: (0, j.jsx)(
                            U.Z,
                            (0, p._)({}, i2.mayGenerateIncorrectInfo),
                          ),
                        }),
                        (0, j.jsx)(iK, {
                          children: (0, j.jsx)(
                            U.Z,
                            (0, p._)({}, i2.mayProduceHarmfulInstructions),
                          ),
                        }),
                        (0, j.jsx)(iK, {
                          children: (0, j.jsx)(
                            U.Z,
                            (0, p._)({}, i2.limitedKnowledgeAfter2021),
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      var i3 = z.Z.h1(i0()),
        i6 = z.Z.div(i1()),
        i7 = n(24326),
        i8 = n(26563),
        i9 = n(98359),
        se = n(57526),
        st = n(99581);
      function sn() {
        var e = (0, w._)([
          "rounded-lg bg-white ring-1 ring-black/10 dark:bg-gray-800 dark:ring-white/20 shadow-[0_1px_7px_0_rgba(0,0,0,0.03)]",
        ]);
        return (
          (sn = function () {
            return e;
          }),
          e
        );
      }
      function sa() {
        var e = (0, w._)([
          "absolute z-[17] mt-2 flex max-h-60 w-full flex-col overflow-hidden text-base focus:outline-none dark:last:border-0 sm:text-sm md:w-[100%]",
        ]);
        return (
          (sa = function () {
            return e;
          }),
          e
        );
      }
      function sr() {
        var e = (0, w._)([
          "absolute z-[17] -ml-[1px] flex flex-col gap-2 p-3 sm:p-4",
        ]);
        return (
          (sr = function () {
            return e;
          }),
          e
        );
      }
      function si() {
        var e = (0, w._)(["flex items-center gap-2 truncate"]);
        return (
          (si = function () {
            return e;
          }),
          e
        );
      }
      function ss() {
        var e = (0, w._)(["h-6 w-6 shrink-0"]);
        return (
          (ss = function () {
            return e;
          }),
          e
        );
      }
      function so() {
        var e = (0, w._)([
          "absolute inset-y-0 right-0 flex items-center pr-5 text-gray-800 dark:text-gray-100",
        ]);
        return (
          (so = function () {
            return e;
          }),
          e
        );
      }
      function sl() {
        var e = (0, w._)([
          "absolute inset-y-0 right-0 flex items-center pr-3 text-gray-800 dark:text-gray-100",
        ]);
        return (
          (sl = function () {
            return e;
          }),
          e
        );
      }
      var sd = ["confidential", "alpha", "plus"];
      function su(e) {
        var t = e.selectedOptions,
          n = e.selectedLabel,
          a = e.onChange,
          r = e.onAction,
          i = e.onOpen,
          s = e.onClose,
          o = e.dropdownRef,
          l = (0, v._)(e, [
            "selectedOptions",
            "selectedLabel",
            "onChange",
            "onAction",
            "onOpen",
            "onClose",
            "dropdownRef",
          ]),
          d = (0, F.useCallback)(
            function (e) {
              if (
                e.some(function (e) {
                  return "string" == typeof e;
                })
              ) {
                var t = e.find(function (e) {
                  return "string" == typeof e;
                });
                null == r || r(t);
              } else a(e);
            },
            [a, r],
          );
        return (0, j.jsx)(i8.R, {
          value: t.map(function (e) {
            return e.value;
          }),
          multiple: !0,
          onChange: d,
          children: function (e) {
            var a = e.open;
            return (0, j.jsx)(
              sc,
              (0, p._)(
                {
                  ref: o,
                  selectedLabel: n || "".concat(t.length, " selected"),
                  open: a,
                  onOpen: i,
                  onClose: s,
                  multiple: !0,
                },
                l,
              ),
            );
          },
        });
      }
      var sc = (0, F.forwardRef)(function (e, t) {
        var n = e.name,
          a = e.selectedLabel,
          r = e.open,
          i = e.options,
          s = e.actions,
          o = e.multiple,
          l = e.isLoading,
          d = e.loadingState,
          u = e.header,
          c = e.onOpen,
          m = e.onClose,
          f = e.theme,
          g = (0, F.useRef)(null),
          h = (0, F.useRef)(null),
          p = (0, ee.oc)();
        (0, F.useImperativeHandle)(
          t,
          function () {
            return {
              open: function () {
                if (!r) {
                  var e;
                  null === (e = g.current) || void 0 === e || e.click();
                }
              },
              close: function () {
                if (r) {
                  var e;
                  null === (e = g.current) || void 0 === e || e.click();
                }
              },
            };
          },
          [r],
        );
        var x = l
          ? d ||
            (0, j.jsx)("div", {
              className: "flex h-[42px] items-center justify-center",
              children: (0, j.jsx)(eV.Z, {}),
            })
          : (0, j.jsxs)(j.Fragment, {
              children: [
                u,
                (0, j.jsxs)(i8.R.Options, {
                  className: "overflow-auto",
                  children: [
                    i.map(function (e, t) {
                      return (0, j.jsx)(
                        sm,
                        {
                          value: e.value,
                          disabled: e.disabled,
                          theme: f,
                          children: function (t) {
                            var n = t.selected,
                              a = t.active;
                            return (0, j.jsxs)(j.Fragment, {
                              children: [
                                (0, j.jsxs)(sk, {
                                  children: [
                                    e.imageUrl &&
                                      (0, j.jsx)(sC, {
                                        children: (0, j.jsx)(ao.Z, {
                                          url: e.imageUrl,
                                          name: e.title,
                                          size: "100%",
                                        }),
                                      }),
                                    (0, j.jsxs)("span", {
                                      className: (0, ec.default)(
                                        n && !o && "font-semibold",
                                        "flex h-6 items-center gap-1 text-gray-800 dark:text-gray-100",
                                      ),
                                      children: [
                                        e.title,
                                        e.tags.map(function (e) {
                                          return sx(e);
                                        }),
                                        e.customTags,
                                      ],
                                    }),
                                  ],
                                }),
                                o && !e.disabled
                                  ? (0, j.jsx)(sg, { theme: f, selected: n })
                                  : n &&
                                    (0, j.jsx)(sf, {
                                      theme: f,
                                      icon: "mini" === f ? eW.HQ : E.UgA,
                                    }),
                                e.disabled &&
                                  (0, j.jsx)(sf, {
                                    theme: f,
                                    icon: se.Z,
                                    className: "text-red-700 dark:text-red-500",
                                  }),
                                a &&
                                  p &&
                                  (0, st.createPortal)(
                                    (0, j.jsx)(sp, {
                                      option: e,
                                      dropdownRef: h,
                                    }),
                                    document.body,
                                  ),
                              ],
                            });
                          },
                        },
                        t,
                      );
                    }),
                    null == s
                      ? void 0
                      : s.map(function (e, t) {
                          return (0, j.jsx)(
                            sm,
                            {
                              value: e.id,
                              theme: f,
                              children: function () {
                                return (0, j.jsxs)(j.Fragment, {
                                  children: [
                                    (0, j.jsx)("div", {
                                      className:
                                        "text-gray-800 dark:text-gray-100",
                                      children: e.label,
                                    }),
                                    (0, j.jsx)(sf, { theme: f, icon: e.icon }),
                                  ],
                                });
                              },
                            },
                            t,
                          );
                        }),
                  ],
                }),
              ],
            });
        return (0, j.jsxs)("div", {
          className: "relative w-full md:w-1/2 lg:w-1/3 xl:w-1/4",
          children: [
            (0, j.jsxs)(i8.R.Button, {
              ref: g,
              onClick: r ? m : c,
              className: (0, ec.default)(
                "relative flex cursor-pointer flex-col bg-white py-2 pr-10 text-left dark:bg-gray-800 sm:text-sm",
                "mini" === f
                  ? "mx-auto w-auto rounded-lg border border-transparent pl-4 pr-7 hover:border-black/10 dark:hover:border-white/10"
                  : "w-full rounded-md border border-black/10 pl-3 focus:border-green-600 focus:outline-none focus:ring-1 focus:ring-green-600 dark:border-white/20",
              ),
              children: [
                "mini" !== f &&
                  (0, j.jsx)(i8.R.Label, {
                    className: "block text-xs text-gray-700 dark:text-gray-500",
                    children: n,
                  }),
                (0, j.jsx)("span", {
                  className: "inline-flex w-full truncate",
                  children: (0, j.jsx)("span", {
                    className: "flex h-6 items-center gap-1 truncate",
                    children: a,
                  }),
                }),
                (0, j.jsx)("span", {
                  className:
                    "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2",
                  children: (0, j.jsx)(E.bTu, {
                    className: "icon-sm text-gray-400",
                    "aria-hidden": "true",
                  }),
                }),
              ],
            }),
            (0, j.jsx)(i9.u, {
              show: r,
              as: F.Fragment,
              leave: "transition ease-in duration-100",
              leaveFrom: "opacity-100",
              leaveTo: "opacity-0",
              children: (0, j.jsx)(sb, { ref: h, children: x }),
            }),
          ],
        });
      });
      function sm(e) {
        var t = e.value,
          n = e.disabled,
          a = e.children,
          r = e.theme;
        return (0, j.jsx)(i8.R.Option, {
          className: function (e) {
            var t = e.active;
            return (0, ec.default)(
              "mini" === r ? sy : sj,
              t && !n ? "bg-gray-100 dark:bg-gray-700" : "text-gray-900",
              n &&
                "cursor-auto bg-gray-50 text-gray-400 dark:bg-gray-700 dark:text-gray-100",
            );
          },
          value: t,
          children: a,
        });
      }
      function sf(e) {
        var t = e.icon,
          n = e.className,
          a = e.theme;
        return (0, j.jsx)("mini" === a ? sM : s_, {
          children: (0, j.jsx)(t, {
            className: (0, ec.default)("icon-md", n),
            "aria-hidden": "true",
          }),
        });
      }
      function sg(e) {
        var t = e.selected,
          n = e.disabled;
        if ("mini" === e.theme) {
          var a = (0, ec.default)(
            "h-5 w-5 text-blue-600",
            t ? "stroke-[2.5]" : "stroke-2",
          );
          return (0, j.jsxs)(sM, {
            children: [
              t
                ? (0, j.jsx)(eW.HQ, { className: a })
                : (0, j.jsx)(eW.i9, { className: a }),
              !t &&
                (0, j.jsx)(eW.nQ, {
                  className: (0, ec.default)(
                    "icon-md absolute text-blue-600 opacity-0 transition-opacity",
                    !n && "group-hover:opacity-100",
                  ),
                }),
            ],
          });
        }
        return (0, j.jsx)(s_, {
          children: (0, j.jsx)("div", {
            className: (0, ec.default)(
              "flex h-6 w-6 items-center justify-center rounded-full border transition-colors",
              t
                ? "border-transparent bg-green-600 text-white"
                : "border-black/5 dark:border-white/20",
            ),
            "aria-hidden": "true",
            children: (0, j.jsx)(E.UgA, {
              className: (0, ec.default)(
                "h-3 w-3 transition-opacity",
                t && "opacity-100",
                !t && "opacity-0",
                !t && !n && "group-hover:opacity-50",
              ),
              strokeWidth: t ? 2.5 : 2,
            }),
          }),
        });
      }
      function sh(e) {
        var t = e.showCheckbox,
          n = e.theme;
        return (0, j.jsxs)("div", {
          className: (0, ec.default)("mini" === n ? sy : sj, "cursor-auto"),
          children: [
            (0, j.jsxs)(sk, {
              children: [
                (0, j.jsx)(sC, {
                  children: (0, j.jsx)("div", {
                    className: "h-full w-full rounded-sm bg-gray-200",
                  }),
                }),
                (0, j.jsx)("div", {
                  className: "h-[12px] w-[88px] rounded-sm bg-gray-100",
                }),
              ],
            }),
            t && (0, j.jsx)(sg, { theme: n, selected: !1, disabled: !0 }),
          ],
        });
      }
      function sp(e) {
        var t = e.option,
          n = e.dropdownRef,
          a = (0, b._)((0, F.useState)(), 2),
          r = a[0],
          i = a[1];
        return ((0, F.useEffect)(
          function () {
            var e = function () {
              if (n.current) {
                var e = n.current.getBoundingClientRect();
                i({ top: e.top, left: e.left - 260, minHeight: e.height });
              }
            };
            return (
              e(),
              window.addEventListener("resize", e),
              function () {
                return window.removeEventListener("resize", e);
              }
            );
          },
          [n],
        ),
        r)
          ? (0, j.jsxs)(sw, {
              style: {
                width: 260,
                minHeight: r.minHeight,
                top: r.top,
                left: r.left,
              },
              children: [
                t.disabled &&
                  (0, j.jsx)(se.Z, {
                    className: "icon-lg text-red-700 dark:text-red-500",
                  }),
                t.imageUrl &&
                  (0, j.jsx)(ao.Z, {
                    url: t.imageUrl,
                    name: t.title,
                    size: 70,
                  }),
                (0, j.jsxs)("div", {
                  className: "flex items-center gap-1",
                  children: [
                    t.title,
                    " ",
                    t.tags.map(function (e) {
                      return sx(e);
                    }),
                    " ",
                    t.customTags,
                  ],
                }),
                (0, j.jsx)("div", {
                  className: "whitespace-pre-line text-xs",
                  children: t.description,
                }),
              ],
            })
          : null;
      }
      var sx = function (e) {
          return (
            sd.includes(e) &&
            (0, j.jsx)(
              "span",
              {
                className: (0, ec.default)(
                  "py-0.25 rounded px-1 text-[10px] font-semibold uppercase",
                  "confidential" === e && "bg-red-200 text-red-800",
                  "alpha" === e && "bg-blue-200 text-blue-500",
                  "plus" === e && "bg-yellow-200 text-yellow-900",
                ),
                children: e,
              },
              e,
            )
          );
        },
        sv = z.Z.div(sn()),
        sb = (0, z.Z)(sv)(sa()),
        sw = (0, z.Z)(sv)(sr()),
        sy =
          "group relative flex h-[50px] cursor-pointer select-none items-center overflow-hidden border-b border-black/10 pl-5 pr-12 last:border-0 dark:border-white/20",
        sj =
          "group relative flex h-[42px] cursor-pointer select-none items-center overflow-hidden border-b border-black/10 pl-3 pr-9 last:border-0 dark:border-white/20",
        sk = z.Z.span(si()),
        sC = z.Z.span(ss()),
        sM = z.Z.span(so()),
        s_ = z.Z.span(sl()),
        sT = n(51973),
        sN = n(7614),
        sI = n(35328),
        sS = n(48759),
        sP = (0, A.vU)({
          enterWebsiteDomainTitle: {
            id: "DevelopPluginModal.enterWebsiteDomainTitle",
            description:
              "Title for the section where users enter their website domain",
            defaultMessage: "Enter your website domain",
          },
          learnToBuildPlugin: {
            id: "DevelopPluginModal.learnToBuildPlugin",
            description:
              "Text for the link directing users to the plugin documentation",
            defaultMessage:
              "Visit our documentation to learn how to build a plugin.",
          },
          pluginApprovalWarning: {
            id: "DevelopPluginModal.pluginApprovalWarning",
            description:
              "Warning about plugin review process if the manifest is modified",
            defaultMessage:
              "If your plugin has been approved to be in the ChatGPT plugin store, and you have made changes to your plugin's manifest, your plugin will be removed from the store, and you will need to <resubmitLink>resubmit it for review</resubmitLink>.",
          },
          domainInputPlaceholder: {
            id: "DevelopPluginModal.domainInputPlaceholder",
            description: "Placeholder text for the domain input field",
            defaultMessage: "ex: openai.com or localhost:3000",
          },
          authenticationFileText: {
            id: "DevelopPluginModal.authenticationFileText",
            description: "Text for the link to expand authentication settings",
            defaultMessage: "My file requires authentication",
          },
          authenticationTypeText: {
            id: "DevelopPluginModal.authenticationTypeText",
            description: "Label for the section to choose authentication type",
            defaultMessage: "Authentication type",
          },
          accessTokenText: {
            id: "DevelopPluginModal.accessTokenText",
            description: "Label for the section to input the access token",
            defaultMessage: "Access token",
          },
          findManifestFileText: {
            id: "DevelopPluginModal.findManifestFileText",
            description: "Button text to find the manifest file",
            defaultMessage: "Find manifest file",
          },
          cancelButtonText: {
            id: "DevelopPluginModal.cancelButtonText",
            description: "Button text for the cancel button",
            defaultMessage: "Cancel",
          },
          domainDisplayName: {
            id: "DevelopPluginModal.domainDisplayName",
            description: "Display name for the domain input",
            defaultMessage: "Domain",
          },
          bearerLabel: {
            id: "DevelopPluginModal.bearerLabel",
            description:
              "Label for the Bearer authentication type radio button",
            defaultMessage: "Bearer",
          },
          basicLabel: {
            id: "DevelopPluginModal.basicLabel",
            description: "Label for the Basic authentication type radio button",
            defaultMessage: "Basic",
          },
          refetchManifestButtonText: {
            id: "DevelopPluginModal.refetchManifestButtonText",
            description: "Button text for refetching the manifest",
            defaultMessage: "Refetch manifest",
          },
          installLocalhostPluginButtonText: {
            id: "DevelopPluginModal.installLocalhostPluginButtonText",
            description: "Button text for installing localhost plugin",
            defaultMessage: "Install localhost plugin",
          },
          nextButtonText: {
            id: "DevelopPluginModal.nextButtonText",
            description: "Button text for the next step",
            defaultMessage: "Next",
          },
          foundPluginTitle: {
            id: "DevelopPluginModal.foundPluginTitle",
            description: "Title for the modal when a plugin is found",
            defaultMessage: "Found plugin",
          },
          enterServiceAccessTokenLabel: {
            id: "DevelopPluginModal.enterServiceAccessTokenLabel",
            description: "Label for entering the service access token",
            defaultMessage: "Enter your service access token:",
          },
          enterOAuthCredentialsLabel: {
            id: "DevelopPluginModal.enterOAuthCredentialsLabel",
            description: "Label for entering OAuth credentials",
            defaultMessage: "Enter your OAuth credentials:",
          },
          addVerificationTokenTitle: {
            id: "DevelopPluginModal.addVerificationTokenTitle",
            description: "Title for the modal when adding verification tokens",
            defaultMessage: "Add verification token",
          },
          verifyTokensButtonText: {
            id: "DevelopPluginModal.verifyTokensButtonText",
            description: "Button text for verifying tokens",
            defaultMessage: "Verify tokens",
          },
          addTokensLaterButtonText: {
            id: "DevelopPluginModal.addTokensLaterButtonText",
            description: "Button text for adding tokens later",
            defaultMessage: "I'll add the tokens later",
          },
          addVerificationTokensText: {
            id: "DevelopPluginModal.addVerificationTokensText",
            description:
              "Text for adding verification tokens to the manifest file",
            defaultMessage:
              "Add the following verification tokens to your manifest file:",
          },
          readyToInstallTitle: {
            id: "DevelopPluginModal.readyToInstallTitle",
            description:
              "Title for the modal when the plugin is ready to install",
            defaultMessage: "Ready to install",
          },
          installForMeButtonText: {
            id: "DevelopPluginModal.installForMeButtonText",
            description: "Button text for installing the plugin for the user",
            defaultMessage: "Install for me",
          },
          installLaterButtonText: {
            id: "DevelopPluginModal.installLaterButtonText",
            description: "Button text for installing the plugin later",
            defaultMessage: "Install later",
          },
          unverifiedPluginText: {
            id: "DevelopPluginModal.unverifiedPluginText",
            description:
              "Text about the unverified plugin being installed by a limited number of developers",
            defaultMessage:
              "Your unverified plugin can now be installed by <developersLink>up to 15 developers</developersLink>. Once you're ready to make your plugin available to everyone, you can <submitPluginLink>submit your plugin for review</submitPluginLink>.",
          },
        });
      function sR(e) {
        var t = e.onClickInstall,
          n = e.onInstallLocalhost,
          a = e.onClose,
          r = (0, b._)((0, F.useState)(), 2),
          i = r[0],
          s = r[1],
          o = (0, b._)((0, F.useState)(), 2),
          l = o[0],
          d = o[1],
          u = (0, b._)((0, F.useState)(!1), 2),
          c = u[0],
          m = u[1],
          f = (0, F.useCallback)(function (e) {
            s(e);
          }, []),
          g = (0, F.useCallback)(function () {
            m(!0);
          }, []);
        return c && (null == i ? void 0 : i.scrapeManifestResponse.plugin)
          ? (0, j.jsx)(sF, {
              plugin: null == i ? void 0 : i.scrapeManifestResponse.plugin,
              onClickInstall: t,
              onClose: a,
            })
          : l && (null == i ? void 0 : i.scrapeManifestResponse.plugin)
          ? (0, j.jsx)(sB, {
              plugin: i.scrapeManifestResponse.plugin,
              manifestAccessToken: i.manifestAccessToken,
              verificationTokens: l,
              onReadyToInstall: g,
              onClose: a,
            })
          : i
          ? (0, j.jsx)(sD, {
              loadManifestResult: i,
              onRefetch: f,
              onSubmitAuthInfo: d,
              onReadyToInstall: g,
              onInstallLocalhost: n,
              onClose: a,
            })
          : (0, j.jsx)(sZ, { onFetch: f, onClose: a });
      }
      function sZ(e) {
        var t = e.onFetch,
          n = e.onClose,
          a = (0, O.Z)(),
          r = (0, _.kP)().session,
          i = (0, b._)((0, F.useState)(!1), 2),
          s = i[0],
          o = i[1],
          l = (0, b._)((0, F.useState)("bearer"), 2),
          d = l[0],
          u = l[1],
          c = (0, b._)((0, F.useState)(), 2),
          m = c[0],
          f = c[1],
          g = (0, F.useRef)(null),
          v = (0, F.useRef)(null),
          w = (0, rC.useFetchManifestAndSpec)(),
          k = w.fetchManifestAndSpec,
          C = w.isLoading;
        (0, F.useEffect)(function () {
          var e;
          null === (e = g.current) || void 0 === e || e.focus();
        }, []);
        var M = (0, F.useCallback)(function () {
            o(function (e) {
              return !e;
            });
          }, []),
          T = (0, F.useCallback)(function (e) {
            u(e.target.value);
          }, []),
          N = (0, F.useCallback)(
            (0, h._)(function () {
              var e, n, r;
              return (0, y.Jh)(this, function (i) {
                return (r =
                  null === (e = g.current) || void 0 === e ? void 0 : e.value)
                  ? (k({
                      domain: r,
                      manifestAccessToken: s
                        ? {
                            authorization_type: d,
                            token:
                              (null === (n = v.current) || void 0 === n
                                ? void 0
                                : n.value) || "",
                          }
                        : void 0,
                      onSuccess: t,
                      onError: function (e) {
                        return f(
                          (null == e ? void 0 : e.message) ||
                            "Couldn't find manifest.",
                        );
                      },
                    }),
                    [2])
                  : (f(a.formatMessage(sP.domainInputPlaceholder)), [2]);
              });
            }),
            [k, t, d, s, a],
          );
        return (0, j.jsx)(eo.Z, {
          isOpen: !0,
          onClose: n,
          type: "success",
          title: (0, j.jsx)(U.Z, (0, p._)({}, sP.enterWebsiteDomainTitle)),
          primaryButton: (0, j.jsx)(es.ZP.Button, {
            title: a.formatMessage(sP.findManifestFileText),
            color: "primary",
            onClick: N,
            loading: C,
          }),
          secondaryButton: (0, j.jsx)(es.ZP.Button, {
            title: a.formatMessage(sP.cancelButtonText),
            color: "neutral",
            onClick: n,
          }),
          children: (0, j.jsxs)(sI.p, {
            children: [
              (0, j.jsx)("a", {
                href: "https://platform.openai.com/docs/plugins/getting-started",
                target: "_blank",
                rel: "noreferrer",
                className: "text-green-600",
                children: (0, j.jsx)(U.Z, (0, p._)({}, sP.learnToBuildPlugin)),
              }),
              (0, j.jsx)(sN.Z, {
                icon: "\uD83D\uDEA8",
                children: (0, j.jsx)(
                  U.Z,
                  (0, x._)((0, p._)({}, sP.pluginApprovalWarning), {
                    values: {
                      resubmitLink: function (e) {
                        return (0, j.jsx)("a", {
                          target: "_blank",
                          rel: "noreferrer",
                          className: "text-green-600",
                          href: "https://platform.openai.com/docs/plugins/review/submit-a-plugin-for-review",
                          children: e,
                        });
                      },
                    },
                  }),
                ),
              }),
              (0, j.jsx)(sT.Z, {
                ref: g,
                name: "url",
                displayName: a.formatMessage(sP.domainDisplayName),
                placeholder: a.formatMessage(sP.domainInputPlaceholder),
                onPressEnter: N,
                autoFocus: !0,
              }),
              (null == r ? void 0 : r.user) != null &&
                (0, _.yl)(r.user) &&
                (0, j.jsxs)(j.Fragment, {
                  children: [
                    (0, j.jsxs)("div", {
                      role: "button",
                      className:
                        "flex cursor-pointer items-center gap-1 text-sm text-black/60 hover:text-black/70",
                      onClick: M,
                      children: [
                        (0, j.jsx)("div", {
                          children: (0, j.jsx)(
                            U.Z,
                            (0, p._)({}, sP.authenticationFileText),
                          ),
                        }),
                        s
                          ? (0, j.jsx)(E.rH8, { className: "icon-sm" })
                          : (0, j.jsx)(E.bTu, { className: "icon-sm" }),
                      ],
                    }),
                    s &&
                      (0, j.jsxs)(j.Fragment, {
                        children: [
                          (0, j.jsxs)("div", {
                            className: "flex flex-col gap-2 text-sm",
                            children: [
                              (0, j.jsx)("div", {
                                children: (0, j.jsx)(
                                  U.Z,
                                  (0, p._)({}, sP.authenticationTypeText),
                                ),
                              }),
                              (0, j.jsxs)("div", {
                                className: "flex gap-6",
                                children: [
                                  (0, j.jsx)(sL, {
                                    label: a.formatMessage(sP.bearerLabel),
                                    value: "bearer",
                                    checked: "bearer" === d,
                                    onChange: T,
                                  }),
                                  (0, j.jsx)(sL, {
                                    label: a.formatMessage(sP.basicLabel),
                                    value: "basic",
                                    checked: "basic" === d,
                                    onChange: T,
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, j.jsxs)("div", {
                            className: "flex flex-col gap-2 text-sm",
                            children: [
                              (0, j.jsx)("div", {
                                children: (0, j.jsx)(
                                  U.Z,
                                  (0, p._)({}, sP.accessTokenText),
                                ),
                              }),
                              (0, j.jsx)(sT.Z, {
                                ref: v,
                                name: "manifestToken",
                                onPressEnter: N,
                              }),
                            ],
                          }),
                        ],
                      }),
                  ],
                }),
              m && (0, j.jsx)(sI.L, { children: m }),
            ],
          }),
        });
      }
      function sL(e) {
        var t = e.label,
          n = e.value,
          a = e.checked,
          r = e.onChange;
        return (0, j.jsxs)("label", {
          className: "flex items-center gap-2",
          children: [
            (0, j.jsx)("input", {
              name: "manifestAuthType",
              type: "radio",
              value: n,
              checked: a,
              onChange: r,
              className: "text-green-600 focus:ring-green-600",
            }),
            t,
          ],
        });
      }
      function sD(e) {
        var t = e.loadManifestResult,
          n = e.onRefetch,
          a = e.onSubmitAuthInfo,
          r = e.onReadyToInstall,
          i = e.onInstallLocalhost,
          s = e.onClose,
          o = (0, O.Z)(),
          l = t.domain,
          d = t.manifestAccessToken,
          u = t.scrapeManifestResponse,
          c = t.apiValidationInfo,
          m = u.plugin,
          f = u.manifest_validation_info,
          g = (0, b._)((0, F.useState)(), 2),
          x = g[0],
          v = g[1],
          w = (0, b._)((0, F.useState)(!1), 2),
          k = w[0],
          C = w[1],
          M = (0, F.useRef)(null),
          _ = (0, F.useRef)(null),
          T = (0, F.useRef)(null),
          N = (0, rC.useFetchManifestAndSpec)(),
          I = N.fetchManifestAndSpec,
          S = N.isLoading,
          P = (0, ej.NL)(),
          R = m && (0, aE.cf)(m),
          Z = (null == m ? void 0 : m.manifest.auth.type) === "service_http",
          L = (null == m ? void 0 : m.manifest.auth.type) === "oauth",
          D =
            (f.errors && f.errors.length > 0) ||
            ((null == c ? void 0 : c.errors) &&
              (null == c ? void 0 : c.errors.length) > 0),
          B = (0, F.useCallback)(
            (0, h._)(function () {
              var e, t, o, u, c;
              return (0, y.Jh)(this, function (f) {
                switch (f.label) {
                  case 0:
                    if (!D) return [3, 1];
                    return (
                      I({
                        domain: l,
                        manifestAccessToken: d,
                        onSuccess: n,
                        onError: function (e) {
                          return v(
                            (null == e ? void 0 : e.message) ||
                              "Couldn't find manifest.",
                          );
                        },
                      }),
                      [3, 15]
                    );
                  case 1:
                    if (!R) return [3, 2];
                    return (
                      (0, rC.addToCachedInstalledPlugins)(m, P), i(m), [3, 15]
                    );
                  case 2:
                    if (!Z) return [3, 8];
                    if (
                      !(null === (e = M.current) || void 0 === e
                        ? void 0
                        : e.value)
                    )
                      return (
                        v("Please provide your service access token."), [2]
                      );
                    f.label = 3;
                  case 3:
                    return (
                      f.trys.push([3, 5, 6, 7]),
                      C(!0),
                      [
                        4,
                        Q.ZP.setPluginServiceHttpToken({
                          id: m.id,
                          serviceAccessToken: M.current.value,
                        }),
                      ]
                    );
                  case 4:
                    return a(f.sent().verification_tokens), [3, 7];
                  case 5:
                    return f.sent(), v("Error setting access token."), [3, 7];
                  case 6:
                    return C(!1), [7];
                  case 7:
                    return [3, 15];
                  case 8:
                    if (!L) return [3, 14];
                    if (
                      ((u =
                        null === (t = _.current) || void 0 === t
                          ? void 0
                          : t.value),
                      (c =
                        null === (o = T.current) || void 0 === o
                          ? void 0
                          : o.value),
                      !u || !c)
                    )
                      return v("Please provide your OAuth credentials."), [2];
                    f.label = 9;
                  case 9:
                    return (
                      f.trys.push([9, 11, 12, 13]),
                      [
                        4,
                        Q.ZP.setPluginOAuthClientCredentials({
                          id: m.id,
                          clientId: _.current.value,
                          clientSecret: T.current.value,
                        }),
                      ]
                    );
                  case 10:
                    return a(f.sent().verification_tokens), [3, 13];
                  case 11:
                    return (
                      f.sent(), v("Error setting OAuth credentials."), [3, 13]
                    );
                  case 12:
                    return C(!1), [7];
                  case 13:
                    return [3, 15];
                  case 14:
                    m ? r(m) : s(), (f.label = 15);
                  case 15:
                    return [2];
                }
              });
            }),
            [Z, L, m, l, d, D, R, P, I, n, a, r, i, s],
          );
        return (0, j.jsx)(eo.Z, {
          isOpen: !0,
          onClose: s,
          type: "success",
          title: (0, j.jsx)(U.Z, (0, p._)({}, sP.foundPluginTitle)),
          primaryButton: (0, j.jsx)(es.ZP.Button, {
            title: D
              ? o.formatMessage(sP.refetchManifestButtonText)
              : R
              ? o.formatMessage(sP.installLocalhostPluginButtonText)
              : o.formatMessage(sP.nextButtonText),
            color: "primary",
            onClick: B,
            loading: k || S,
          }),
          secondaryButton:
            (D || Z || L) &&
            (0, j.jsx)(es.ZP.Button, {
              title: o.formatMessage(sP.cancelButtonText),
              color: "neutral",
              onClick: s,
            }),
          children: (0, j.jsxs)(sI.p, {
            children: [
              (0, j.jsx)(sS.rC, { manifestValidationInfo: f }),
              c && (0, j.jsx)(sS.q6, { apiValidationInfo: c }),
              m && (0, j.jsx)(id.Z, { plugin: m }),
              Z &&
                !D &&
                (0, j.jsxs)("div", {
                  children: [
                    (0, j.jsx)("div", {
                      className: "text-sm",
                      children: (0, j.jsx)(
                        U.Z,
                        (0, p._)({}, sP.enterServiceAccessTokenLabel),
                      ),
                    }),
                    (0, j.jsx)("div", {
                      className: "mt-2",
                      children: (0, j.jsx)(sT.Z, {
                        ref: M,
                        name: "serviceToken",
                        placeholder: "Service access token",
                        autoComplete: "off",
                        onPressEnter: B,
                        autoFocus: !0,
                      }),
                    }),
                  ],
                }),
              L &&
                !D &&
                (0, j.jsxs)("div", {
                  children: [
                    (0, j.jsx)("div", {
                      className: "text-sm",
                      children: (0, j.jsx)(
                        U.Z,
                        (0, p._)({}, sP.enterOAuthCredentialsLabel),
                      ),
                    }),
                    (0, j.jsx)("div", {
                      className: "mt-2",
                      children: (0, j.jsx)(sT.Z, {
                        ref: _,
                        name: "clientId",
                        placeholder: "Client ID",
                        autoComplete: "off",
                        onPressEnter: B,
                        autoFocus: !0,
                      }),
                    }),
                    (0, j.jsx)("div", {
                      className: "mt-2",
                      children: (0, j.jsx)(sT.Z, {
                        ref: T,
                        type: "password",
                        name: "clientSecret",
                        placeholder: "Client secret",
                        autoComplete: "off",
                        onPressEnter: B,
                      }),
                    }),
                  ],
                }),
              x && (0, j.jsx)(sI.L, { children: x }),
            ],
          }),
        });
      }
      function sB(e) {
        var t = e.plugin,
          n = e.manifestAccessToken,
          a = e.verificationTokens,
          r = e.onReadyToInstall,
          i = e.onClose,
          s = (0, O.Z)(),
          o = (0, b._)((0, F.useState)(), 2),
          l = o[0],
          d = o[1],
          u = (0, b._)((0, F.useState)(!1), 2),
          c = u[0],
          m = u[1],
          f = (0, F.useCallback)(
            (0, h._)(function () {
              var e, i;
              return (0, y.Jh)(this, function (s) {
                switch (s.label) {
                  case 0:
                    return (
                      s.trys.push([0, 2, 3, 4]),
                      m(!0),
                      [
                        4,
                        Q.ZP.scrapePluginManifest({
                          domain: t.domain,
                          manifestAccessToken: n,
                        }),
                      ]
                    );
                  case 1:
                    if ((e = s.sent().plugin)) {
                      for (var o in ((i =
                        "service_http" === e.manifest.auth.type ||
                        "oauth" === e.manifest.auth.type
                          ? e.manifest.auth.verification_tokens
                          : {}),
                      a))
                        if (a[o] !== i[o])
                          return (
                            d(
                              'Please add the "'.concat(
                                o,
                                '" token to your manifest file.',
                              ),
                            ),
                            [2]
                          );
                      r(e);
                    } else d("Error creating plugin.");
                    return [3, 4];
                  case 2:
                    return s.sent(), d("Error creating plugin."), [3, 4];
                  case 3:
                    return m(!1), [7];
                  case 4:
                    return [2];
                }
              });
            }),
            [t, n, a, r],
          );
        return (0, j.jsx)(eo.Z, {
          isOpen: !0,
          onClose: i,
          type: "success",
          title: (0, j.jsx)(U.Z, (0, p._)({}, sP.addVerificationTokenTitle)),
          primaryButton: (0, j.jsx)(es.ZP.Button, {
            title: s.formatMessage(sP.verifyTokensButtonText),
            color: "primary",
            onClick: f,
            loading: c,
          }),
          secondaryButton: (0, j.jsx)(es.ZP.Button, {
            title: s.formatMessage(sP.addTokensLaterButtonText),
            color: "neutral",
            onClick: i,
          }),
          children: (0, j.jsxs)(sI.p, {
            children: [
              (0, j.jsx)(id.Z, { plugin: t }),
              (0, j.jsx)("div", {
                className: "text-sm",
                children: (0, j.jsx)(
                  U.Z,
                  (0, p._)({}, sP.addVerificationTokensText),
                ),
              }),
              (0, j.jsx)("pre", {
                className: "text-sm",
                children: JSON.stringify(a, null),
              }),
              l && (0, j.jsx)(sI.L, { children: l }),
            ],
          }),
        });
      }
      function sF(e) {
        var t = e.plugin,
          n = e.onClickInstall,
          a = e.onClose,
          r = (0, O.Z)(),
          i = (0, F.useCallback)(
            function () {
              n(t);
            },
            [t, n],
          );
        return (0, j.jsx)(eo.Z, {
          isOpen: !0,
          onClose: a,
          type: "success",
          title: (0, j.jsx)(U.Z, (0, p._)({}, sP.readyToInstallTitle)),
          primaryButton: (0, j.jsx)(es.ZP.Button, {
            title: r.formatMessage(sP.installForMeButtonText),
            color: "primary",
            onClick: i,
          }),
          secondaryButton: (0, j.jsx)(es.ZP.Button, {
            title: r.formatMessage(sP.installLaterButtonText),
            color: "neutral",
            onClick: a,
          }),
          children: (0, j.jsx)(sI.p, {
            children: (0, j.jsx)("div", {
              className: "text-sm",
              children: (0, j.jsx)(
                U.Z,
                (0, x._)((0, p._)({}, sP.unverifiedPluginText), {
                  values: {
                    developersLink: function (e) {
                      return (0, j.jsx)("a", {
                        href: "https://platform.openai.com/docs/plugins/production/can-i-invite-people-to-try-my-plugin",
                        target: "_blank",
                        rel: "noreferrer",
                        className: "text-green-600",
                        children: e,
                      });
                    },
                    submitPluginLink: function (e) {
                      return (0, j.jsx)("a", {
                        href: "https://platform.openai.com/docs/plugins/review/submit-a-plugin-for-review",
                        target: "_blank",
                        rel: "noreferrer",
                        className: "text-green-600",
                        children: e,
                      });
                    },
                  },
                }),
              ),
            }),
          }),
        });
      }
      var sE = n(9884),
        sq = n(89678),
        sA = n.n(sq),
        sU = n(52478),
        sO = (0, A.vU)({
          prev: {
            id: "PaginationControls.prev",
            defaultMessage: "Prev",
            description:
              "Label for the previous page button in the pagination controls",
          },
          next: {
            id: "PaginationControls.next",
            defaultMessage: "Next",
            description:
              "Label for the next page button in the pagination controls",
          },
        });
      function sz(e) {
        var t = e.page,
          n = e.numPages,
          a = e.goToPage,
          r = t > 0,
          i = t < n - 1,
          s = (0, F.useCallback)(
            function () {
              a(Math.max(t - 1, 0));
            },
            [t, a],
          ),
          o = (0, F.useCallback)(
            function () {
              a(Math.min(t + 1, n - 1));
            },
            [t, n, a],
          ),
          l = [],
          d = !0,
          u = !1,
          c = void 0;
        try {
          for (
            var m,
              f = (function (e, t) {
                var n =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : 10,
                  a = Math.max(0, t - n + 1);
                if (0 === a) return sW(0, t);
                var r = sW(0, e),
                  i = sW(e + 1, t);
                if (a < i.length - 1)
                  i.splice(Math.floor((i.length - a) / 2), a, -1);
                else if (a < r.length - 1)
                  r.splice(Math.floor((r.length - a) / 2), a, -1);
                else {
                  var s = Math.min(i.length - 3, a),
                    o = a - s + 1;
                  i.splice(Math.floor((i.length - s) / 2), s, -1),
                    r.splice(Math.floor((r.length - o) / 2), o, -2);
                }
                return (0, eu._)(r).concat([e], (0, eu._)(i));
              })(t, n)[Symbol.iterator]();
            !(d = (m = f.next()).done);
            d = !0
          )
            !(function () {
              var e = m.value;
              e < 0
                ? l.push(
                    (0, j.jsx)(
                      "div",
                      {
                        role: "button",
                        className: "flex h-5 w-5 items-center justify-center",
                        children: "…",
                      },
                      "ellipsis-".concat(e),
                    ),
                  )
                : l.push(
                    (0, j.jsx)(
                      s3,
                      {
                        role: "button",
                        className: (0, ec.default)(
                          "flex h-5 w-5 items-center justify-center",
                          e === t &&
                            "text-blue-600 hover:text-blue-600 dark:text-blue-600 dark:hover:text-blue-600",
                        ),
                        onClick: function () {
                          return a(e);
                        },
                        children: e + 1,
                      },
                      e,
                    ),
                  );
            })();
        } catch (e) {
          (u = !0), (c = e);
        } finally {
          try {
            d || null == f.return || f.return();
          } finally {
            if (u) throw c;
          }
        }
        return (0, j.jsxs)("div", {
          className:
            "flex flex-wrap gap-2 text-sm text-black/60 dark:text-white/70",
          children: [
            (0, j.jsxs)(s3, {
              role: "button",
              className: (0, ec.default)(
                "flex items-center",
                !r && "opacity-50",
              ),
              onClick: s,
              $disabled: !r,
              children: [
                (0, j.jsx)(E.YFh, { className: "icon-sm" }),
                (0, j.jsx)(U.Z, (0, p._)({}, sO.prev)),
              ],
            }),
            l,
            (0, j.jsxs)(s3, {
              role: "button",
              className: (0, ec.default)(
                "flex items-center",
                !i && "opacity-50",
              ),
              onClick: o,
              $disabled: !i,
              children: [
                (0, j.jsx)(U.Z, (0, p._)({}, sO.next)),
                (0, j.jsx)(E.Tfp, { className: "icon-sm" }),
              ],
            }),
          ],
        });
      }
      function sW(e, t) {
        return Array.from({ length: t - e }, function (t, n) {
          return n + e;
        });
      }
      var sV = (0, A.vU)({
        title: {
          id: "RequiresMfaModal.title",
          defaultMessage: "Enable two-factor authentication",
          description:
            "Title for the modal to enable two-factor authentication",
        },
        enableMfaButton: {
          id: "RequiresMfaModal.enableMfaButton",
          defaultMessage: "Enable two-factor authentication",
          description:
            "Label for the button to enable two-factor authentication",
        },
        cancelButton: {
          id: "RequiresMfaModal.cancelButton",
          defaultMessage: "Cancel",
          description: "Label for the cancel button",
        },
        disclaimer: {
          id: "RequiresMfaModal.disclaimer",
          defaultMessage:
            "This plugin requires you to have two-factor authentication enabled for additional security. Please set up two-factor authentication and try again.",
          description:
            "Disclaimer text informing the user that the plugin requires two-factor authentication",
        },
      });
      function sQ(e) {
        var t = e.onClose,
          n = (0, il.S)().setupMfa,
          a = (0, O.Z)();
        return (0, j.jsx)(eo.Z, {
          isOpen: !0,
          onClose: t,
          type: "success",
          title: a.formatMessage(sV.title),
          primaryButton: (0, j.jsx)(es.ZP.Button, {
            title: a.formatMessage(sV.enableMfaButton),
            color: "primary",
            onClick: n,
          }),
          secondaryButton: (0, j.jsx)(es.ZP.Button, {
            title: a.formatMessage(sV.cancelButton),
            color: "neutral",
            onClick: t,
          }),
          children: (0, j.jsx)(sI.p, {
            children: (0, j.jsx)(sN.I, {
              children: (0, j.jsx)(sN.Z, {
                icon: "\uD83D\uDEA8",
                children: (0, j.jsx)(U.Z, (0, p._)({}, sV.disclaimer)),
              }),
            }),
          }),
        });
      }
      function sH() {
        var e = (0, w._)([
          "text-sm text-black/70 dark:text-white/70 whitespace-nowrap ",
          "",
        ]);
        return (
          (sH = function () {
            return e;
          }),
          e
        );
      }
      function sG() {
        var e = (0, w._)([
          "hidden h-4 border-l border-black/30 dark:border-white/30 sm:block",
        ]);
        return (
          (sG = function () {
            return e;
          }),
          e
        );
      }
      var sY =
          ((g = {}),
          (0, t1._)(g, ee._G.Mobile, 8),
          (0, t1._)(g, ee._G.Small, 4),
          (0, t1._)(g, ee._G.Medium, 4),
          (0, t1._)(g, ee._G.Large, 6),
          (0, t1._)(g, ee._G.XLarge, 8),
          g),
        sJ = (0, A.vU)({
          title: {
            id: "PluginStoreModal.title",
            defaultMessage: "Plugin store",
            description: "Title of the plugin store",
          },
          searchPlaceholder: {
            id: "PluginStoreModal.searchPlaceholder",
            defaultMessage: "Search plugins",
            description: "Placeholder text for the plugin store search bar",
          },
          noSearchResultsTitle: {
            id: "PluginStoreModal.noSearchResults",
            defaultMessage: 'No plugins found for "{query}"',
            description:
              "Message shown when no plugins are found for a search query",
          },
          noSearchResultsHint: {
            id: "PluginStoreModal.noSearchResultsHint",
            defaultMessage: "Try a different query or category",
            description:
              "Hint shown when no plugins are found for a search query",
          },
          installUnverifiedPlugin: {
            id: "PluginStoreModal.installUnverifiedPlugin",
            defaultMessage: "Install an unverified plugin",
            description: "Link to dialog to install an unverified plugin",
          },
          developPlugin: {
            id: "PluginStoreModal.developPlugin",
            defaultMessage: "Develop your own plugin",
            description: "Link to dialog to develop your own plugin",
          },
          aboutPlugins: {
            id: "PluginStoreModal.aboutPlugins",
            defaultMessage: "About plugins",
            description: "Link to learn more about plugins",
          },
          install: {
            id: "PluginStoreModal.card.install",
            defaultMessage: "Install",
            description: "Button to install a plugin",
          },
          uninstall: {
            id: "PluginStoreModal.card.uninstall",
            defaultMessage: "Uninstall",
            description: "Button to uninstall a plugin",
          },
          installing: {
            id: "PluginStoreModal.card.installing",
            defaultMessage: "Installing",
            description: "Status label when installing a plugin",
          },
          uninstalling: {
            id: "PluginStoreModal.card.uninstalling",
            defaultMessage: "Uninstalling",
            description: "Status label when uninstalling a plugin",
          },
          developerInfo: {
            id: "PluginStoreModal.card.developerInfo",
            defaultMessage: "Developer info",
            description: "Label for plugin developer information",
          },
        }),
        s$ = sU.f8.Popular;
      function sK(e) {
        var t = e.onInstallWithAuthRequired,
          n = e.onClickInstallDeveloper,
          a = e.onClickDevelop,
          r = e.onClickAbout,
          i = e.onClose,
          s = (0, O.Z)(),
          o = (0, K.hz)(),
          l = (0, b._)((0, F.useState)(s$), 2),
          d = l[0],
          u = l[1],
          c = (0, b._)((0, F.useState)(""), 2),
          m = c[0],
          f = c[1],
          g = (0, b._)((0, F.useState)(""), 2),
          h = g[0],
          x = g[1],
          v = (0, sU.F6)().availableFilters;
        (0, F.useEffect)(
          function () {
            v.some(function (e) {
              return e.id === d;
            }) || u(s$);
          },
          [d, v],
        );
        var w = (0, F.useCallback)(
          sA()(function (e) {
            x(e);
          }, 300),
          [],
        );
        return (0, j.jsx)(eo.Z, {
          isOpen: !0,
          onClose: i,
          size: "custom",
          className:
            "w-full max-w-7xl bg-gray-50 md:min-w-[672px] lg:min-w-[896px] xl:min-w-[1024px]",
          type: "success",
          title: s.formatMessage(sJ.title),
          closeButton: (0, j.jsx)(es.ZP.CloseButton, { onClose: i }),
          children: (0, j.jsxs)(sI.p, {
            children: [
              v.length > 1 &&
                (0, j.jsxs)("div", {
                  className: "flex flex-wrap gap-3",
                  children: [
                    v.map(function (e) {
                      return (0, j.jsx)(
                        s0,
                        {
                          selected: d === e.id,
                          onClick: function () {
                            u(e.id);
                          },
                          children: e.title,
                        },
                        e.id,
                      );
                    }),
                    (0, j.jsxs)("div", {
                      className: "relative",
                      children: [
                        (0, j.jsx)("div", {
                          className:
                            "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3",
                          children: (0, j.jsx)(E.jRj, {
                            className:
                              "icon-md text-gray-500 dark:text-gray-400",
                          }),
                        }),
                        (0, j.jsx)(sT.Z, {
                          className: "pl-10",
                          autoFocus: !0,
                          type: "search",
                          placeholder: s.formatMessage(sJ.searchPlaceholder),
                          value: m,
                          onChange: function (e) {
                            f(e.target.value), u(sU.JF.All), w(e.target.value);
                          },
                          name: "search",
                        }),
                      ],
                    }),
                  ],
                }),
              (0, j.jsx)(sX, {
                filter: d,
                query: h,
                onInstallWithAuthRequired: t,
                children: (0, j.jsxs)("div", {
                  className: "flex flex-col items-center gap-2 sm:flex-row",
                  children: [
                    o.has("tools3_dev") &&
                      (0, j.jsxs)(j.Fragment, {
                        children: [
                          (0, j.jsx)(s3, {
                            onClick: n,
                            children: (0, j.jsx)(
                              U.Z,
                              (0, p._)({}, sJ.installUnverifiedPlugin),
                            ),
                          }),
                          (0, j.jsx)(s6, {}),
                          (0, j.jsx)(s3, {
                            onClick: a,
                            children: (0, j.jsx)(
                              U.Z,
                              (0, p._)({}, sJ.developPlugin),
                            ),
                          }),
                          (0, j.jsx)(s6, {}),
                        ],
                      }),
                    (0, j.jsx)(s3, {
                      onClick: r,
                      children: (0, j.jsx)(U.Z, (0, p._)({}, sJ.aboutPlugins)),
                    }),
                  ],
                }),
              }),
            ],
          }),
        });
      }
      function sX(e) {
        var t = e.filter,
          n = e.query,
          a = e.onInstallWithAuthRequired,
          r = e.children,
          i = sY[(0, ee.dQ)()],
          s = (0, b._)((0, F.useState)(0), 2),
          o = s[0],
          l = s[1],
          d = (0, sU.ZP)({ pageSize: i, filter: t, query: n, page: o }),
          u = d.isLoading,
          c = d.items,
          m = d.pagesTotal;
        (0, F.useEffect)(
          function () {
            l(0);
          },
          [t, n],
        );
        var f = (0, b._)((0, F.useState)(!1), 2),
          g = f[0],
          h = f[1];
        return g
          ? (0, j.jsx)(sQ, {
              onClose: function () {
                h(!1);
              },
            })
          : (0, j.jsxs)(j.Fragment, {
              children: [
                (0, j.jsx)(s1, {
                  plugins: null != c ? c : [],
                  numSkeletons: i,
                  query: n,
                  isLoading: u,
                  onInstallWithAuthRequired: a,
                  onRequestMfa: function () {
                    return h(!0);
                  },
                }),
                (0, j.jsxs)("div", {
                  className:
                    "flex flex-col flex-wrap items-center justify-center gap-6 sm:flex-row md:justify-between",
                  children: [
                    (0, j.jsx)("div", {
                      className:
                        "max-lg:justify-center flex flex-1 justify-start",
                      children:
                        void 0 !== m &&
                        m > 1 &&
                        (0, j.jsx)(sz, { page: o, numPages: m, goToPage: l }),
                    }),
                    r,
                  ],
                }),
              ],
            });
      }
      function s0(e) {
        var t = e.selected,
          n = e.onClick,
          a = e.children;
        return (0, j.jsx)(er.z, {
          color: t ? "light" : "neutral",
          className: (0, ec.default)(
            "focus:ring-0",
            t && "hover:bg-gray-200",
            !t && "text-black/50",
          ),
          onClick: n,
          children: a,
        });
      }
      function s1(e) {
        var t = e.plugins,
          n = e.numSkeletons,
          a = e.isLoading,
          r = e.onInstallWithAuthRequired,
          i = e.onRequestMfa,
          s = e.query;
        if (0 === t.length && !a && s)
          return (0, j.jsxs)("div", {
            className:
              "flex h-[404px] flex-col items-center justify-center gap-4",
            children: [
              (0, j.jsx)("div", {
                className: "text-lg font-medium",
                children: (0, j.jsx)(
                  U.Z,
                  (0, x._)((0, p._)({}, sJ.noSearchResultsTitle), {
                    values: { query: s },
                  }),
                ),
              }),
              (0, j.jsx)("div", {
                className: "text-sm text-black/50",
                children: (0, j.jsx)(U.Z, (0, p._)({}, sJ.noSearchResultsHint)),
              }),
            ],
          });
        var o = a
          ? Array(n)
              .fill(0)
              .map(function (e, t) {
                return (0, j.jsx)(s5, {}, t);
              })
          : t.map(function (e) {
              return (0, j.jsx)(
                s2,
                { plugin: e, onInstallWithAuthRequired: r, onRequestMfa: i },
                e.id,
              );
            });
        return (0, j.jsx)("div", {
          className:
            "grid grid-cols-1 gap-3 sm:grid-cols-2 sm:grid-rows-2 lg:grid-cols-3 xl:grid-cols-4",
          children: o,
        });
      }
      function s2(e) {
        var t,
          n,
          a = e.plugin,
          r = e.onInstallWithAuthRequired,
          i = e.onRequestMfa,
          s = (0, b._)((0, F.useState)(!1), 2),
          o = s[0],
          l = s[1],
          d = (0, b._)((0, F.useState)(!1), 2),
          u = d[0],
          c = d[1],
          m = (0, rC.useInstallPlugin)({
            onSuccess: function (e) {
              (0, iu.wu)(e.id);
            },
            onError: function (e) {
              console.error(e),
                nT.m.danger(
                  "Error installing ".concat(a.manifest.name_for_human, "."),
                );
            },
            onSettled: function () {
              l(!1);
            },
          }),
          f = (0, rC.useUninstallPlugin)({
            onSuccess: function () {},
            onError: function (e) {
              console.error(e),
                nT.m.danger(
                  "Error uninstalling ".concat(a.manifest.name_for_human, "."),
                );
            },
            onSettled: function () {
              c(!1);
            },
          }),
          g = (0, _.kP)().session,
          h = (0, K.hz)(),
          x = (0, O.Z)(),
          v = (0, il.S)().isUsernamePassword,
          w = (0, F.useCallback)(
            function () {
              var e,
                t = a.manifest.auth.type;
              if (
                !("none" === t || "service_http" === t) &&
                !(null == g
                  ? void 0
                  : null === (e = g.user) || void 0 === e
                  ? void 0
                  : e.mfa) &&
                h.has(H.i) &&
                v
              ) {
                i();
                return;
              }
              if ("oauth" === t) {
                if (h.has("new_plugin_oauth_endpoint")) {
                  (0, rC.doOauthRedirect)(a);
                  return;
                }
                var n = (0, rC.getOauthCallbackUrl)(a);
                null != n
                  ? (window.location.href = n)
                  : nT.m.danger(
                      "Missing plugin configuration for ".concat(
                        a.manifest.name_for_human,
                        ".",
                      ),
                    );
              } else "user_http" === t ? r(a) : (l(!0), m(a.id));
            },
            [a, m, r, i, v, g, h],
          ),
          y = (0, F.useCallback)(
            function () {
              c(!0), f(a.id);
            },
            [a, f],
          );
        return (
          (n =
            o || u
              ? (0, j.jsxs)(er.z, {
                  color: "light",
                  className: "bg-green-100 hover:bg-green-100",
                  children: [
                    o
                      ? x.formatMessage(sJ.installing)
                      : x.formatMessage(sJ.uninstalling),
                    (0, j.jsx)(eV.Z, {}),
                  ],
                })
              : (
                  null === (t = a.user_settings) || void 0 === t
                    ? void 0
                    : t.is_installed
                )
              ? (0, j.jsxs)(er.z, {
                  color: "light",
                  className: "hover:bg-gray-200",
                  onClick: y,
                  children: [
                    (0, j.jsx)(U.Z, (0, p._)({}, sJ.uninstall)),
                    (0, j.jsx)(E.$Rx, { className: "icon-sm" }),
                  ],
                })
              : (0, j.jsxs)(er.z, {
                  onClick: w,
                  children: [
                    (0, j.jsx)(U.Z, (0, p._)({}, sJ.install)),
                    (0, j.jsx)(E.wzc, { className: "icon-sm" }),
                  ],
                })),
          (0, j.jsx)(s4, {
            logo: (0, j.jsx)(ao.Z, {
              url: a.manifest.logo_url,
              name: a.manifest.name_for_human,
              size: "100%",
              large: !0,
            }),
            tag: (0, aE.cf)(a)
              ? (0, j.jsx)(aK, {})
              : "approved" !== a.status
              ? (0, j.jsx)(a$, {})
              : void 0,
            title: (0, j.jsx)("div", {
              className: "max-w-full truncate text-lg leading-6",
              children: a.manifest.name_for_human,
            }),
            button: n,
            description: a.manifest.description_for_human,
            developerInfo: (0, j.jsxs)("div", {
              className: "flex items-center gap-1.5",
              children: [
                (0, j.jsx)(U.Z, (0, p._)({}, sJ.developerInfo)),
                (0, j.jsx)("a", {
                  href: a.manifest.legal_info_url,
                  target: "_blank",
                  rel: "noreferrer",
                  children: (0, j.jsx)(E.RsK, { className: "icon-xs" }),
                }),
                (0, j.jsx)("a", {
                  href: "mailto:".concat(a.manifest.contact_email),
                  children: (0, j.jsx)(E.Imn, { className: "icon-xs" }),
                }),
              ],
            }),
          })
        );
      }
      function s5() {
        return (0, j.jsx)(s4, {
          logo: (0, j.jsx)("div", {
            className: "h-full w-full rounded-[5px] bg-gray-300",
          }),
          title: (0, j.jsx)("div", {
            className: "h-[19px] w-[103px] rounded-[5px] bg-gray-100",
          }),
          button: (0, j.jsx)("div", {
            className: "h-[36px] w-[103px] rounded-[5px] bg-gray-200",
          }),
          description: (0, j.jsxs)("div", {
            className: "flex flex-col gap-1.5",
            children: [
              (0, j.jsx)("div", {
                className: "h-[14px] w-[209px] rounded-[5px] bg-gray-100",
              }),
              (0, j.jsx)("div", {
                className: "h-[14px] w-[218px] rounded-[5px] bg-gray-100",
              }),
              (0, j.jsx)("div", {
                className: "h-[14px] w-[184px] rounded-[5px] bg-gray-100",
              }),
            ],
          }),
          developerInfo: (0, j.jsx)("div", {
            className: "h-full w-[120px] rounded-[5px] bg-gray-50",
          }),
        });
      }
      function s4(e) {
        var t = e.logo,
          n = e.tag,
          a = e.title,
          r = e.button,
          i = e.description,
          s = e.developerInfo;
        return (0, j.jsxs)("div", {
          className:
            "flex flex-col gap-4 rounded border border-black/10 bg-white p-6 dark:border-white/20 dark:bg-gray-900",
          children: [
            (0, j.jsxs)("div", {
              className: "flex gap-4",
              children: [
                (0, j.jsx)("div", {
                  className: "h-[70px] w-[70px] shrink-0",
                  children: t,
                }),
                (0, j.jsxs)("div", {
                  className:
                    "flex min-w-0 flex-col items-start justify-between",
                  children: [
                    null != n
                      ? (0, j.jsxs)("div", {
                          className: "flex items-center gap-1.5",
                          children: [n, a],
                        })
                      : a,
                    r,
                  ],
                }),
              ],
            }),
            (0, j.jsx)("div", {
              className:
                "h-[60px] text-sm text-black/70 line-clamp-3 dark:text-white/70",
              children: i,
            }),
            (0, j.jsx)("div", {
              className: "h-[14px] text-xs text-black/60 dark:text-white/60",
              children: s,
            }),
          ],
        });
      }
      var s3 = z.Z.button(sH(), function (e) {
          return e.$disabled
            ? "opacity-50 cursor-default"
            : "hover:text-black/50 dark:hover:text-white/50";
        }),
        s6 = z.Z.div(sG()),
        s7 = (0, A.vU)({
          aboutPlugins: {
            id: "StoreDisclaimerModal.aboutPlugins",
            defaultMessage: "About plugins",
            description: "Title for the About Plugins modal",
          },
          okButton: {
            id: "StoreDisclaimerModal.okButton",
            defaultMessage: "OK",
            description: "OK button text",
          },
          cancelButton: {
            id: "StoreDisclaimerModal.cancelButton",
            defaultMessage: "Cancel",
            description: "Cancel button text",
          },
          thirdPartyWarning: {
            id: "StoreDisclaimerModal.thirdPartyWarning",
            defaultMessage:
              "Plugins are powered by third party applications that are not controlled by OpenAI. Be sure you trust a plugin before installation.",
            description: "Warning about third-party applications and trust",
          },
          externalAppsWarning: {
            id: "StoreDisclaimerModal.externalAppsWarning",
            defaultMessage:
              "Plugins connect ChatGPT to external apps. If you enable a plugin, ChatGPT may send your conversation, Custom Instructions, and the country or state you're in to the plugin.",
            description: "Warning about external apps and data sharing",
          },
          autoUseWarning: {
            id: "StoreDisclaimerModal.autoUseWarning",
            defaultMessage:
              "ChatGPT automatically chooses when to use plugins during a conversation, depending on the plugins you've enabled.",
            description:
              "Information about automatic plugin usage during conversations",
          },
        });
      function s8(e) {
        var t = e.allowClose,
          n = e.onConfirm,
          a = e.onClose,
          r = (0, O.Z)();
        return (0, j.jsx)(eo.Z, {
          isOpen: !0,
          onClose: a,
          type: "success",
          title: r.formatMessage(s7.aboutPlugins),
          primaryButton: (0, j.jsx)(es.ZP.Button, {
            title: r.formatMessage(s7.okButton),
            color: "primary",
            onClick: n,
          }),
          secondaryButton:
            t &&
            (0, j.jsx)(es.ZP.Button, {
              title: r.formatMessage(s7.cancelButton),
              color: "neutral",
              onClick: a,
            }),
          children: (0, j.jsx)(sI.p, {
            children: (0, j.jsxs)(sN.I, {
              children: [
                (0, j.jsx)(sN.Z, {
                  icon: "\uD83D\uDEA8",
                  children: (0, j.jsx)(U.Z, (0, p._)({}, s7.thirdPartyWarning)),
                }),
                (0, j.jsx)(sN.Z, {
                  icon: "\uD83C\uDF10",
                  children: (0, j.jsx)(
                    U.Z,
                    (0, p._)({}, s7.externalAppsWarning),
                  ),
                }),
                (0, j.jsx)(sN.Z, {
                  icon: "\uD83E\uDDE0",
                  children: (0, j.jsx)(U.Z, (0, p._)({}, s7.autoUseWarning)),
                }),
              ],
            }),
          }),
        });
      }
      var s9 = "oai/apps/hasSeenPluginsDisclaimer";
      function oe(e) {
        var t = e.onInstall,
          n = e.onClose,
          a = (0, b._)((0, F.useState)(!!T.m.getItem(s9)), 2),
          r = a[0],
          i = a[1],
          s = (0, b._)((0, F.useState)(!1), 2),
          o = s[0],
          l = s[1],
          d = (0, b._)((0, F.useState)(!1), 2),
          u = d[0],
          c = d[1],
          m = (0, b._)((0, F.useState)(), 2),
          f = m[0],
          g = m[1],
          h = (0, b._)((0, F.useState)(!1), 2),
          p = h[0],
          x = h[1],
          v = (0, F.useCallback)(function () {
            i(!0), l(!1), T.m.setItem(s9, !0);
          }, []),
          w = (0, F.useCallback)(function (e) {
            g(e), c(!0);
          }, []),
          y = (0, F.useCallback)(function () {
            c(!0);
          }, []),
          k = (0, F.useCallback)(function () {
            x(!0);
          }, []),
          C = (0, F.useCallback)(function () {
            l(!0);
          }, []),
          M = (0, F.useCallback)(
            function (e) {
              (0, iu.wu)(e.id), n(), t(e);
            },
            [t, n],
          ),
          _ = (0, F.useCallback)(
            function () {
              g(void 0), c(!1), n();
            },
            [n],
          ),
          N = (0, F.useCallback)(
            function () {
              x(!1), n();
            },
            [n],
          );
        return !r || o
          ? (0, j.jsx)(s8, { allowClose: !r, onConfirm: v, onClose: n })
          : u
          ? (0, j.jsx)(sE.Z, { plugin: f, onInstall: M, onClose: _ })
          : p
          ? (0, j.jsx)(sR, {
              onClickInstall: w,
              onInstallLocalhost: M,
              onClose: N,
            })
          : (0, j.jsx)(sK, {
              onInstallWithAuthRequired: w,
              onClickInstallDeveloper: y,
              onClickDevelop: k,
              onClickAbout: C,
              onClose: n,
            });
      }
      function ot() {
        var e = (0, w._)([
          "flex h-8 flex-shrink-0 items-center justify-center border-b border-black/10 bg-gray-50 text-xs text-gray-800 dark:border-white/20 dark:bg-[#272832] dark:text-white",
        ]);
        return (
          (ot = function () {
            return e;
          }),
          e
        );
      }
      function on(e) {
        var t,
          n = e.theme,
          a = void 0 === n ? "default" : n,
          r = (0, b._)((0, F.useState)(!1), 2),
          i = r[0],
          s = r[1],
          o = (0, b._)((0, F.useState)(!1), 2),
          l = o[0],
          d = o[1],
          u = (0, B.useRouter)(),
          c = (0, eM.C)(),
          m = c.installedPlugins,
          f = c.isLoading,
          g = (0, iu.p0)(),
          h = (0, F.useRef)(null);
        (0, F.useEffect)(
          function () {
            if (!f) {
              var e = u.query,
                t = e.loginAip,
                n = e.loginSuccess,
                a = (0, v._)(e, ["loginAip", "loginSuccess"]);
              if (t) {
                var r,
                  i,
                  s = m.find(function (e) {
                    return e.id === t;
                  });
                s && "true" === n
                  ? ((0, iu.wu)(u.query.loginAip),
                    null === (r = h.current) || void 0 === r || r.open())
                  : nT.m.warning(
                      "Couldn't log in with ".concat(
                        null !==
                          (i =
                            null == s ? void 0 : s.manifest.name_for_human) &&
                          void 0 !== i
                          ? i
                          : "plugin",
                        ".",
                      ),
                    ),
                  u.replace({ pathname: u.pathname, query: a });
              }
            }
          },
          [u, m, f],
        );
        var w = (0, F.useCallback)(function () {
            var e;
            null === (e = h.current) || void 0 === e || e.open();
          }, []),
          y = (0, F.useCallback)(function () {
            s(!1);
          }, []),
          k = (0, b._)((0, F.useState)(g), 2),
          C = k[0],
          M = k[1],
          _ = (0, F.useCallback)(
            function (e) {
              if (e.length > iu.hZ)
                d(!0),
                  setTimeout(function () {
                    d(!1);
                  }, 600);
              else {
                var t = e.filter(function (e) {
                    return !g.find(function (t) {
                      return t.id === e.id;
                    });
                  }),
                  n = !0,
                  a = !1,
                  r = void 0;
                try {
                  for (
                    var i, s = iu.iO[Symbol.iterator]();
                    !(n = (i = s.next()).done);
                    n = !0
                  ) {
                    var o = (function () {
                      var e = i.value,
                        n = g.find(function (t) {
                          return e.includes(t.domain);
                        });
                      if (n) {
                        var a = e.find(function (e) {
                            return e !== n.domain;
                          }),
                          r = t.find(function (e) {
                            return e.domain === a;
                          });
                        if (r)
                          return (
                            nT.m.warning(
                              "You can't enable "
                                .concat(r.manifest.name_for_human, " while ")
                                .concat(
                                  n.manifest.name_for_human,
                                  " is enabled.",
                                ),
                            ),
                            { v: void 0 }
                          );
                      }
                    })();
                    if ("object" === (0, ey._)(o)) return o.v;
                  }
                } catch (e) {
                  (a = !0), (r = e);
                } finally {
                  try {
                    n || null == s.return || s.return();
                  } finally {
                    if (a) throw r;
                  }
                }
                (0, iu.dT)(
                  e.map(function (e) {
                    return e.id;
                  }),
                );
              }
            },
            [g],
          ),
          T = (0, F.useCallback)(function (e) {
            var t;
            null === (t = h.current) || void 0 === t || t.close(),
              "store" === e && s(!0);
          }, []),
          N = (0, F.useCallback)(
            function () {
              M(g),
                eO.m9.logEvent("chatgpt_plugin_chooser_opened", null, {
                  num_enabled_plugins: "".concat(g.length),
                });
            },
            [g],
          ),
          I = (0, F.useCallback)(
            function () {
              var e = C.filter(function (e) {
                  return !g.find(function (t) {
                    return t.id === e.id;
                  });
                }),
                t = g.filter(function (e) {
                  return !C.find(function (t) {
                    return t.id === e.id;
                  });
                }),
                n = !0,
                a = !1,
                r = void 0;
              try {
                for (
                  var i, s = t[Symbol.iterator]();
                  !(n = (i = s.next()).done);
                  n = !0
                ) {
                  var o = i.value;
                  eO.m9.logEvent("chatgpt_plugin_enabled", null, {
                    plugin_id: o.id,
                  });
                }
              } catch (e) {
                (a = !0), (r = e);
              } finally {
                try {
                  n || null == s.return || s.return();
                } finally {
                  if (a) throw r;
                }
              }
              var l = !0,
                d = !1,
                u = void 0;
              try {
                for (
                  var c, m = e[Symbol.iterator]();
                  !(l = (c = m.next()).done);
                  l = !0
                ) {
                  var f = c.value;
                  eO.m9.logEvent("chatgpt_plugin_disabled", null, {
                    plugin_id: f.id,
                  });
                }
              } catch (e) {
                (d = !0), (u = e);
              } finally {
                try {
                  l || null == m.return || m.return();
                } finally {
                  if (d) throw u;
                }
              }
            },
            [g, C],
          ),
          S = m.map(function (e) {
            return {
              value: e,
              title: e.manifest.name_for_human,
              description: e.manifest.description_for_human,
              tags: [],
              customTags: (0, aE.cf)(e)
                ? (0, j.jsx)(aK, {})
                : "approved" !== e.status
                ? (0, j.jsx)(a$, {})
                : void 0,
              imageUrl: e.manifest.logo_url,
            };
          }),
          P = S.filter(function (e) {
            return g.find(function (t) {
              return t.id === e.value.id;
            });
          }),
          R = (0, j.jsx)(
            U.Z,
            (0, x._)((0, p._)({}, or.pluginsEnabled), {
              values: { count: g.length },
            }),
          );
        if (g.length > 0 && g.length < 6) {
          var Z = g.map(function (e, t) {
            return (0, j.jsx)(
              ao.Z,
              {
                url: e.manifest.logo_url,
                name: e.manifest.name_for_human,
                size: 24,
              },
              t,
            );
          });
          R = (0, j.jsx)("div", { className: "flex gap-2", children: Z });
        }
        var L = [{ id: "store", label: "Plugin store", icon: E.Rgz }];
        m.length > iu.hZ &&
          (t = (0, j.jsx)(oa, {
            className: (0, ec.default)(
              "transition-colors duration-300",
              l && "bg-red-200 text-red-800 dark:bg-red-200 dark:text-red-800",
            ),
            children: (0, j.jsx)(
              U.Z,
              (0, x._)((0, p._)({}, or.enabledPluginsLimit), {
                values: { enabledPlugins: g.length, maxEnabledPlugins: iu.hZ },
              }),
            ),
          }));
        var D = (0, j.jsxs)(j.Fragment, {
          children: [
            (0, j.jsx)(oa, {
              children: (0, j.jsx)(U.Z, (0, p._)({}, or.loading)),
            }),
            (0, j.jsx)(sh, { showCheckbox: !0, theme: a }),
            (0, j.jsx)(sh, { showCheckbox: !0, theme: a }),
            (0, j.jsx)(sh, { showCheckbox: !0, theme: a }),
            (0, j.jsx)(sh, { showCheckbox: !0, theme: a }),
            (0, j.jsx)(sh, { showCheckbox: !0, theme: a }),
          ],
        });
        return (0, j.jsxs)(j.Fragment, {
          children: [
            (0, j.jsx)(su, {
              name: "Plugins",
              selectedOptions: P,
              selectedLabel: R,
              options: S,
              actions: L,
              onChange: _,
              onAction: T,
              onOpen: N,
              onClose: I,
              dropdownRef: h,
              isLoading: f,
              loadingState: D,
              header: t,
              theme: "mini" === a ? "mini" : "default",
            }),
            i && (0, j.jsx)(oe, { onInstall: w, onClose: y }),
          ],
        });
      }
      var oa = z.Z.div(ot()),
        or = (0, A.vU)({
          pluginsEnabled: {
            id: "PluginChooser.pluginsEnabled",
            description: "Text shown with the number of enabled plugins.",
            defaultMessage:
              "{count, plural, =0 {No plugins} one {# plugin} other {# plugins}} enabled",
          },
          loading: {
            id: "PluginChooser.loading",
            description: "Text shown when plugin information is being loaded.",
            defaultMessage: "Loading...",
          },
          enabledPluginsLimit: {
            id: "PluginChooser.enabledPluginsLimit",
            description:
              "Text shown with the number of enabled plugins and the maximum limit.",
            defaultMessage: "{enabledPlugins}/{maxEnabledPlugins} Enabled",
          },
        });
      function oi(e) {
        var t,
          n = e.currentModelId,
          a = e.shouldShowPlusUpsell,
          r = (0, rN.fm)(),
          i = (0, rN.Q_)(),
          s = (0, rN.B9)(),
          o = void 0 !== n ? s.get(n) : void 0,
          l = (0, $.Fl)().isPluginsAvailable;
        return o && i
          ? (0, j.jsxs)("div", {
              className:
                "relative flex flex-col items-stretch justify-center gap-2 sm:items-center",
              children: [
                (0, j.jsx)(i7.ZP, {
                  shouldShowPlusUpsell: a,
                  currentModel: o,
                  onModelChange: r,
                }),
                l &&
                  (null == o
                    ? void 0
                    : null === (t = o.enabledTools) || void 0 === t
                    ? void 0
                    : t.includes("tools3")) &&
                  (0, j.jsx)(on, { theme: "mini" }),
              ],
            })
          : null;
      }
      function os() {
        var e = (0, w._)([
          "px-2 relative w-full flex flex-col py-2 md:py-6 sticky top-0",
        ]);
        return (
          (os = function () {
            return e;
          }),
          e
        );
      }
      function oo() {
        var e = (0, w._)([
          "text-4xl font-semibold text-center text-gray-200 dark:text-gray-600 ml-auto mr-auto mb-10 sm:mb-16 flex gap-2 items-center justify-center flex-grow",
        ]);
        return (
          (oo = function () {
            return e;
          }),
          e
        );
      }
      var ol = function (e) {
          var t = e.shouldShowThreadSettings,
            n = e.shouldShowPlusUpsell,
            a = e.showSpinner,
            r = e.currentModelId,
            i = e.title,
            s = e.promptTextareaRef,
            o = e.shouldShowPlaceholder;
          return (0, K.hz)().has(H.Zz)
            ? (0, j.jsx)(od, {
                promptTextareaRef: s,
                shouldShowPlaceholder: o,
                shouldShowPlusUpsell: n,
                shouldShowThreadSettings: t,
                showSpinner: a,
                currentModelId: r,
                title: i,
              })
            : (0, j.jsxs)(j.Fragment, {
                children: [
                  t &&
                    (0, j.jsx)(ou, {
                      children: (0, j.jsx)(oi, {
                        shouldShowPlusUpsell: n,
                        currentModelId: r,
                      }),
                    }),
                  o
                    ? (0, j.jsx)(i4, { promptTextareaRef: s })
                    : t
                    ? (0, j.jsx)("div", {
                        className:
                          "align-center flex h-full w-full flex-col justify-center self-center px-2 pb-2 md:pb-[8vh]",
                        children: (0, j.jsxs)(oc, {
                          children: [i, (0, j.jsx)(iB, {})],
                        }),
                      })
                    : null,
                  a && (0, j.jsx)(eV.Z, { className: "mt-4 self-center" }),
                ],
              });
        },
        od = function (e) {
          var t = e.shouldShowThreadSettings,
            n = e.shouldShowPlusUpsell,
            a = e.currentModelId,
            r = e.shouldShowPlaceholder,
            i = e.showSpinner,
            s = e.title;
          return r
            ? (0, j.jsxs)("div", {
                className:
                  "flex h-full flex-col items-center justify-between pb-64",
                children: [
                  t &&
                    (0, j.jsxs)(j.Fragment, {
                      children: [
                        (0, j.jsx)(ou, {
                          children: (0, j.jsx)(oi, {
                            shouldShowPlusUpsell: n,
                            currentModelId: a,
                          }),
                        }),
                        (0, j.jsx)("div", {
                          className:
                            "align-center flex h-full w-full flex-col justify-center self-center px-2 pb-2 md:pb-[8vh]",
                          children: (0, j.jsxs)(oc, {
                            children: [s, (0, j.jsx)(iB, {})],
                          }),
                        }),
                      ],
                    }),
                  (0, j.jsx)("div", {
                    className:
                      "align-center flex h-full w-full flex-col justify-center self-center px-2 pb-2 md:pb-[8vh]",
                    children:
                      i && (0, j.jsx)(eV.Z, { className: "mt-4 self-center" }),
                  }),
                ],
              })
            : null;
        },
        ou = z.Z.div(os()),
        oc = z.Z.h1(oo()),
        om = n(32148),
        of = function (e) {
          var t = e.children,
            n = e.contentClassName,
            a = e.content,
            r = e.side,
            i = e.sideOffset,
            s = (0, b._)((0, F.useState)(void 0), 2),
            o = s[0],
            l = s[1],
            d = function () {
              l(!0);
            },
            u = function () {
              l(void 0);
            };
          return (0, j.jsxs)(iM.fC, {
            open: o,
            onOpenChange: function (e) {
              l(!0 === e || void 0);
            },
            children: [
              (0, j.jsx)(iM.xz, {
                asChild: !0,
                onMouseEnter: d,
                onMouseLeave: u,
                children: t,
              }),
              (0, j.jsx)(iM.h_, {
                children: (0, j.jsx)(iM.VY, {
                  onMouseEnter: d,
                  onMouseLeave: u,
                  side: r,
                  sideOffset: i,
                  collisionPadding: 16,
                  className: n,
                  onOpenAutoFocus: function (e) {
                    e.preventDefault();
                  },
                  onCloseAutoFocus: function (e) {
                    e.preventDefault();
                  },
                  children: a,
                }),
              }),
            ],
          });
        },
        og = n(52481),
        oh = n(47428),
        op = n(64082);
      function ox(e) {
        var t = e.icon,
          n = e.label,
          a = e.onSelect;
        return (0, j.jsxs)(oh.ck, {
          onSelect: a,
          className:
            "flex cursor-pointer select-none items-center gap-3 px-4 py-2 text-sm text-token-text-secondary outline-none radix-highlighted:bg-gray-50 dark:radix-highlighted:bg-gray-700",
          children: [
            (0, j.jsx)(t, { className: "icon-sm" }),
            (0, j.jsx)("span", { children: n }),
          ],
        });
      }
      function ov(e) {
        var t = e.conversationTemplate,
          n = (0, K.ec)(K.F_.accountUserId),
          a = t.owner_id === n,
          r = (0, B.useRouter)(),
          i = (0, K.hz)().has("debug"),
          s = (0, en.xj)(t.id);
        return (0, j.jsxs)(oh.fC, {
          children: [
            (0, j.jsx)(oh.xz, {
              asChild: !0,
              children: (0, j.jsxs)("button", {
                className:
                  "flex min-w-[256px] items-center gap-4 overflow-hidden rounded p-2 text-left hover:bg-gray-50 radix-state-open:bg-gray-50 dark:hover:bg-gray-700 dark:radix-state-open:bg-gray-700 lg:-ml-2",
                children: [
                  (0, j.jsx)(ev.Py, { conversationTemplate: t }),
                  (0, j.jsxs)("div", {
                    className: "grow",
                    children: [
                      (0, j.jsx)("div", {
                        className:
                          "text-sm font-medium text-token-text-primary",
                        children: t.name,
                      }),
                      (0, j.jsxs)("div", {
                        className:
                          "flex items-center gap-1 text-xs text-token-text-tertiary",
                        children: [
                          (0, j.jsxs)("span", {
                            children: ["Template by ", t.author_name],
                          }),
                          null != t.published_at
                            ? null != t.description
                              ? (0, j.jsxs)(j.Fragment, {
                                  children: [
                                    (0, j.jsx)("span", { children: "•" }),
                                    (0, j.jsx)("span", {
                                      className:
                                        "max-w-[160px] overflow-hidden overflow-ellipsis whitespace-nowrap",
                                      children: t.description,
                                    }),
                                  ],
                                })
                              : null
                            : (0, j.jsxs)(j.Fragment, {
                                children: [
                                  (0, j.jsx)("span", { children: "•" }),
                                  (0, j.jsx)("span", { children: "Private" }),
                                ],
                              }),
                        ],
                      }),
                    ],
                  }),
                  (0, j.jsx)(E.bTu, {
                    className: "icon-sm text-token-text-tertiary",
                  }),
                ],
              }),
            }),
            (0, j.jsx)(oh.Uv, {
              children: (0, j.jsxs)(oh.VY, {
                className:
                  "min-w-[256px] max-w-[320px] rounded-md border border-gray-100 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800",
                align: "start",
                side: "bottom",
                sideOffset: 4,
                children: [
                  (0, j.jsxs)(oh.__, {
                    className:
                      "border-b border-gray-200 p-4 dark:border-gray-700",
                    children: [
                      (0, j.jsx)("div", {
                        className:
                          "text-sm font-medium text-token-text-primary",
                        children: t.name,
                      }),
                      (0, j.jsx)("div", {
                        className:
                          "mt-1 flex items-center gap-1 text-xs text-token-text-tertiary",
                        children:
                          null != t.published_at
                            ? (0, j.jsxs)(j.Fragment, {
                                children: [
                                  (0, j.jsx)(E._rq, { className: "icon-xs" }),
                                  (0, j.jsx)("span", {
                                    children: "Published in workspace",
                                  }),
                                ],
                              })
                            : (0, j.jsxs)(j.Fragment, {
                                children: [
                                  (0, j.jsx)(E.UIZ, { className: "icon-xs" }),
                                  (0, j.jsxs)("span", {
                                    children: [
                                      "Private",
                                      a &&
                                        (0, j.jsx)("span", {
                                          children: " (Only visible to you)",
                                        }),
                                    ],
                                  }),
                                ],
                              }),
                      }),
                      null != t.published_at &&
                        null != t.description &&
                        (0, j.jsx)("div", {
                          className:
                            "mt-1 text-xs text-token-text-secondary line-clamp-3",
                          children: t.description,
                        }),
                    ],
                  }),
                  (0, j.jsxs)(oh.ZA, {
                    className: "py-1",
                    children: [
                      (0, j.jsx)(ox, {
                        icon: E.IC0,
                        label: "New chat with this template",
                        onSelect: function () {
                          r.push((0, ea.l1)(t.id), void 0, { shallow: !0 });
                        },
                      }),
                      a
                        ? (0, j.jsx)(ox, {
                            icon: E.IYd,
                            label: "Edit template",
                            onSelect: function () {
                              r.push(s, void 0, { shallow: !0 });
                            },
                          })
                        : (0, j.jsx)(ox, {
                            icon: E.rDJ,
                            label: "See how it's made",
                            onSelect: function () {
                              (0, op.O)(t.id);
                            },
                          }),
                      i &&
                        (0, j.jsx)(ox, {
                          icon: E.cDN,
                          label: "Debug",
                          onSelect: function () {
                            return J.vm.toggleActiveSidebar("debug");
                          },
                        }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        });
      }
      function ob(e) {
        var t = e.workspaceId,
          n = e.conversationTemplateId,
          a = (0, ea.GS)(t, n, { includeDeleted: !0 }).data;
        return (0, j.jsx)("div", {
          className:
            "flex min-h-[60px] justify-center border-b border-gray-100 dark:border-gray-700",
          children: (0, j.jsx)("div", {
            className:
              "flex w-full items-center px-2 md:max-w-2xl lg:max-w-[38rem] lg:px-0 xl:max-w-3xl",
            children:
              null != a ? (0, j.jsx)(ov, { conversationTemplate: a }) : null,
          }),
        });
      }
      var ow = n(42271),
        oy = n(86273);
      function oj() {
        var e = (0, w._)(["translateY(", ")"]);
        return (
          (oj = function () {
            return e;
          }),
          e
        );
      }
      var ok = P()(
          function () {
            return Promise.all([n.e(8682), n.e(2864)])
              .then(n.bind(n, 22179))
              .then(function (e) {
                return e.GizmoConversationHeader;
              });
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [22179];
              },
            },
          },
        ),
        oC = [0, 60],
        oM = function (e) {
          var t = e.clientThreadId,
            n = (0, O.Z)(),
            a = null !== (0, F.useContext)(X.gB),
            r = (0, K.hz)(),
            i = Y.tQ.getServerThreadId(t),
            s =
              (!(0, K.ec)(K.F_.isBusinessWorkspace) ||
                r.has(H.L0.WorkspaceShareLinks)) &&
              r.has(H.RJ);
          return !a && void 0 !== i && s
            ? (0, j.jsx)(eZ.u, {
                side: "left",
                label: n.formatMessage(oS.shareChat),
                children: (0, j.jsx)(ow.O, {
                  onClick: function () {
                    return J.vm.openSharingModal(i);
                  },
                  "aria-label": n.formatMessage(oS.shareChat),
                  children: (0, j.jsx)(E.A8q, { className: "icon-sm" }),
                }),
              })
            : null;
        };
      function o_(e) {
        var t = e.currentModelConfig,
          n = e.clientThreadId,
          a = e.icon,
          r = (0, Y.UL)(n),
          i = (0, K.ec)(function (e) {
            var t;
            return null === (t = e.currentWorkspace) || void 0 === t
              ? void 0
              : t.id;
          });
        return (0, eb.Ml)() && null != i && null != r.conversationTemplateId
          ? (0, j.jsx)(ok, {
              workspaceId: i,
              conversationTemplateId: r.conversationTemplateId,
              clientThreadId: n,
            })
          : (0, j.jsx)(oT, {
              children:
                null != i && null != r.conversationTemplateId
                  ? (0, j.jsx)(ob, {
                      clientThreadId: n,
                      workspaceId: i,
                      conversationTemplateId: r.conversationTemplateId,
                    })
                  : (0, j.jsx)(oN, {
                      currentModelConfig: t,
                      clientThreadId: n,
                      icon: a,
                    }),
            });
      }
      function oT(e) {
        var t = e.children,
          n = (0, J.tN)(J.bM.isThreadHeaderVisible),
          a = (0, ag.c)(0),
          r = (0, F.useRef)(null),
          i = (0, F.useRef)(null),
          s = (0, b._)((0, nz.useAtTop)(), 1)[0],
          o = (0, F.useCallback)(
            function (e) {
              var t = e.scrollTop;
              if (null == r.current || r.current === t) {
                r.current = t;
                return;
              }
              if (
                ((i.current = r.current),
                (r.current = t),
                i.current > r.current)
              ) {
                J.vm.showThreadHeader();
                var n = Math.max(
                  oC[0],
                  a.get() - Math.abs(i.current - r.current),
                );
                n !== a.get() && a.set(n);
              } else {
                var s = Math.min(
                  oC[1],
                  a.get() + Math.abs(i.current - r.current),
                );
                s !== a.get() && a.set(s);
              }
            },
            [a],
          ),
          l = (0, e1.H)(a, oC, ["0%", "-100%"]),
          d = (0, b._)((0, F.useState)(l.get()), 2),
          u = (d[0], d[1]);
        (0, e5.W)(l, "change", function (e) {
          u(e);
        });
        var c = (0, e2.Y)(oj(), l);
        (0, F.useEffect)(function () {
          J.vm.showThreadHeader();
        }, []);
        var m = null !== (0, F.useContext)(X.gB);
        return (
          (0, nz.useObserveScrollPosition)(m ? void 0 : o),
          (0, j.jsx)(e4.E.header, {
            animate: n
              ? void 0
              : {
                  top: n ? 0 : "-90px",
                  transition: { duration: 0.2, ease: "easeIn" },
                },
            style: {
              boxShadow: !s && n ? "0px 4px 24px 0px #0000000D" : void 0,
              transform: n ? c : void 0,
            },
            className: "sticky top-0 z-10 w-full bg-white dark:bg-gray-800",
            children: t,
          })
        );
      }
      function oN(e) {
        var t,
          n,
          a,
          r = e.currentModelConfig,
          i = e.clientThreadId,
          s = e.icon,
          o = (0, O.Z)(),
          l = null !== (0, F.useContext)(X.gB),
          d = (0, J.tN)(function (e) {
            return "debug" === e.activeSidebar;
          }),
          u = (0, K.hz)(),
          c = u.has("debug") && !d,
          m = [];
        c &&
          m.push(
            (0, j.jsx)(eZ.u, {
              side: "left",
              label: o.formatMessage(oS.openDebug),
              children: (0, j.jsx)(ow.O, {
                onClick: function () {
                  return J.vm.toggleActiveSidebar("debug");
                },
                "aria-label": o.formatMessage(oS.openDebug),
                children: (0, j.jsx)(E.cDN, { className: "icon-sm" }),
              }),
            }),
          ),
          m.push((0, j.jsx)(oM, { clientThreadId: i }));
        var f = (0, Y.Qi)(i),
          g = null != f,
          h =
            g &&
            null == f.aboutModelMessage &&
            null == f.aboutUserMessage &&
            null !== f.shareId,
          x = u.has(H.b5),
          v = (0, Y.Ro)(i);
        void 0 === v && (v = r);
        var b = v.tags
            .filter(function (e) {
              return sd.includes(e);
            })
            .map(function (e) {
              return sx(e);
            }),
          w = l ? v.title : r.title,
          y = eN(i);
        if (y.length > 0) {
          var k = y.map(function (e, t) {
            return (0, j.jsx)(
              ao.Z,
              {
                url: e.manifest.logo_url,
                name: e.manifest.name_for_human,
                size: 16,
              },
              t,
            );
          });
          a = (0, j.jsxs)(j.Fragment, {
            children: [
              (0, j.jsx)("div", {
                children: (0, j.jsx)(U.Z, (0, p._)({}, oS.enabledPlugins)),
              }),
              k,
            ],
          });
        }
        var C = (0, B.useRouter)(),
          M =
            l &&
            (null === (t = C.query) || void 0 === t
              ? void 0
              : null === (n = t.shareParams) || void 0 === n
              ? void 0
              : n[1]) === "moderate",
          _ = (0, J.tN)(function (e) {
            return e.activeModals.has(J.B.DownloadMessages);
          }),
          T = Y.tQ.getThreadCurrentLeafId(i),
          N = (0, Y.u9)(i, T),
          I = (0, F.useCallback)(
            function () {
              x && (0, og.Ub)(i, N);
            },
            [i, x, N],
          );
        return (0, j.jsxs)(j.Fragment, {
          children: [
            x &&
              (0, j.jsx)(eo.Z, {
                type: "success",
                isOpen: _,
                onClose: function () {
                  J.vm.closeModal(J.B.DownloadMessages);
                },
                closeButton: (0, j.jsx)(es.ZP.CloseButton, {
                  onClose: function () {
                    J.vm.closeModal(J.B.DownloadMessages);
                  },
                }),
                primaryButton: (0, j.jsx)(es.ZP.Button, {
                  onClick: I,
                  children: (0, j.jsx)(U.Z, (0, p._)({}, oS.downloadButton)),
                }),
                title: o.formatMessage(oS.downloadChatDebugInfo),
                secondaryButton: (0, j.jsx)(es.ZP.Button, {
                  onClick: function () {
                    J.vm.closeModal(J.B.DownloadMessages);
                  },
                  children: (0, j.jsx)(U.Z, (0, p._)({}, oS.cancelButton)),
                }),
              }),
            (0, j.jsxs)("div", {
              className:
                "relative z-20 flex min-h-[60px] flex-wrap items-center justify-between gap-3 border-b border-black/10 bg-white p-2 text-gray-500 dark:border-gray-900/50 dark:bg-gray-800 dark:text-gray-300",
              onClick: function (e) {
                x &&
                  !l &&
                  3 === e.detail &&
                  J.vm.openModal(J.B.DownloadMessages);
              },
              children: [
                (0, j.jsx)("div", {
                  className: "hidden flex-shrink flex-row sm:flex",
                  children: m.map(function (e, t) {
                    return (0, j.jsx)(ow.h, {}, t);
                  }),
                }),
                (0, j.jsxs)("div", {
                  className:
                    "flex flex-1 flex-grow items-center gap-1 p-1 text-gray-600 dark:text-gray-200 sm:justify-center sm:p-0",
                  children: [
                    l &&
                      (0, j.jsxs)("div", {
                        className: "flex items-center justify-center gap-1",
                        children: [
                          (0, j.jsx)("span", {
                            children: (0, j.jsx)(
                              U.Z,
                              (0, p._)({}, oS.sharedChat),
                            ),
                          }),
                          (0, j.jsx)("span", {
                            className: "px-1",
                            children: "•",
                          }),
                        ],
                      }),
                    !l && null != s && (0, j.jsx)(s, { className: "icon-sm" }),
                    (0, j.jsx)("span", { children: w }),
                    b,
                    a
                      ? (0, j.jsxs)("div", {
                          className: "flex items-center justify-center gap-1",
                          children: [
                            (0, j.jsx)("span", {
                              className: "px-1",
                              children: "•",
                            }),
                            a,
                          ],
                        })
                      : null,
                    M &&
                      (0, j.jsxs)("div", {
                        className: "flex items-center justify-center gap-1",
                        children: [
                          (0, j.jsx)("span", {
                            className: "px-1",
                            children: "•",
                          }),
                          (0, j.jsx)("strong", {
                            children: (0, j.jsx)(
                              U.Z,
                              (0, p._)({}, oS.moderationView),
                            ),
                          }),
                        ],
                      }),
                    !l &&
                      g &&
                      !h &&
                      (0, j.jsx)("div", {
                        className: "",
                        children: (0, j.jsx)(oI, { clientThreadId: i }),
                      }),
                  ],
                }),
                (0, j.jsx)("div", {
                  className: "flex flex-shrink flex-row",
                  children: m.map(function (e, t) {
                    return (0, j.jsx)("span", { children: e }, t);
                  }),
                }),
              ],
            }),
          ],
        });
      }
      var oI = function (e) {
          var t = e.clientThreadId,
            n = (0, Y.Qi)(t),
            a = (0, F.useMemo)(
              function () {
                if (null == n) return null;
                var e = n.aboutUserMessage,
                  t = n.aboutModelMessage,
                  a = n.fallback;
                return null != e && null != t
                  ? (0, j.jsxs)("div", {
                      className: "flex flex-col gap-7",
                      children: [
                        null !== e &&
                          "" !== e &&
                          (0, j.jsxs)("div", {
                            className: "flex flex-col gap-3",
                            children: [
                              (0, j.jsx)("div", {
                                className:
                                  "font-medium text-gray-600 dark:text-gray-200",
                                children: (0, j.jsx)(
                                  U.Z,
                                  (0, p._)({}, oy.sY.aboutYouHelpText),
                                ),
                              }),
                              (0, j.jsx)("div", {
                                className: "flex flex-row gap-1 text-gray-500",
                                children: e,
                              }),
                            ],
                          }),
                        null !== t &&
                          "" !== t &&
                          (0, j.jsxs)("div", {
                            className: "flex flex-col gap-3",
                            children: [
                              (0, j.jsx)("div", {
                                className:
                                  "font-medium text-gray-600 dark:text-gray-200",
                                children: (0, j.jsx)(
                                  U.Z,
                                  (0, p._)({}, oy.sY.modelHelpText),
                                ),
                              }),
                              (0, j.jsx)("div", {
                                className: "flex flex-row gap-1 text-gray-500",
                                children: t,
                              }),
                            ],
                          }),
                      ],
                    })
                  : null != a
                  ? a
                  : null;
              },
              [n],
            );
          return null === n
            ? null
            : (0, j.jsx)(j.Fragment, {
                children: (0, j.jsx)(of, {
                  contentClassName:
                    "relative max-h-[450px] min-w-[300px] max-w-[350px] animate-slideDownAndFade select-none overflow-y-auto whitespace-pre-line rounded-xl border-gray-100 bg-white p-4 text-sm text-gray-600 shadow-xs dark:bg-gray-900 dark:text-white sm:max-w-lg md:max-w-xl",
                  side: "bottom",
                  sideOffset: 8,
                  content: (0, j.jsxs)(j.Fragment, {
                    children: [
                      (0, j.jsx)("div", {
                        className:
                          "mb-5 mt-1 border-b border-black/10 pb-5 dark:border-white/10",
                        children: (0, j.jsx)("div", {
                          className:
                            "flex flex-row items-center gap-2 text-gray-500",
                          children: (0, j.jsx)(
                            U.Z,
                            (0, p._)({}, oS.chatPreferencesNote),
                          ),
                        }),
                      }),
                      a,
                    ],
                  }),
                  children: (0, j.jsxs)("div", {
                    className: "cursor-pointer pt-0.5",
                    children: [
                      (0, j.jsx)(eW.HV, {
                        className:
                          "h-4 w-4 flex-shrink-0 sm:mb-0.5 sm:h-5 sm:w-5",
                      }),
                      (0, j.jsx)(om.T, {
                        children: (0, j.jsx)(
                          U.Z,
                          (0, p._)({}, oS.chatPreferencesInfoLabel),
                        ),
                      }),
                    ],
                  }),
                }),
              });
        },
        oS = (0, A.vU)({
          chatPreferencesInfoLabel: {
            id: "ThreadSettings.chatPreferencesInfoLabel",
            defaultMessage: "Custom instructions details",
            description: "Label for the Custom instructions info icon",
          },
          chatPreferencesNote: {
            id: "ThreadSettings.chatPreferencesNote",
            defaultMessage:
              "Custom instructions are on and can only be changed at the beginning of the chat.",
            description: "Label in the popover for Custom Instructions",
          },
          openDebug: {
            id: "ThreadSettings.openDebug",
            defaultMessage: "Open debug sidebar",
            description: "Open debug sidebar button tooltip",
          },
          shareChat: {
            id: "ThreadSettings.shareChat",
            defaultMessage: "Share chat",
            description: "Open share modal button tooltip",
          },
          sharedChat: {
            id: "ThreadHeader.sharedChat",
            defaultMessage: "Shared Chat",
            description: "Label for shared chat status",
          },
          enabledPlugins: {
            id: "ThreadHeader.enabledPlugins",
            defaultMessage: "Enabled plugins:",
            description: "Label for enabled plugins in the header",
          },
          moderationView: {
            id: "ThreadHeader.moderationView",
            defaultMessage: "MODERATION VIEW",
            description: "Label for moderation view status",
          },
          downloadChatDebugInfo: {
            id: "ThreadHeader.downloadChatDebugInfo",
            defaultMessage: "Download chat debug info",
            description: "Title for the Download chat debug info modal",
          },
          downloadButton: {
            id: "ThreadHeader.downloadButton",
            defaultMessage: "Download",
            description:
              "Download button text in the Download chat debug info modal",
          },
          cancelButton: {
            id: "ThreadHeader.cancelButton",
            defaultMessage: "Cancel",
            description:
              "Cancel button text in the Download chat debug info modal",
          },
        }),
        oP = n(72198);
      function oR() {
        var e = (0, w._)([
          "\n  flex flex-col text-sm dark:bg-gray-800\n  ",
          "\n",
        ]);
        return (
          (oR = function () {
            return e;
          }),
          e
        );
      }
      function oZ() {
        var e = (0, w._)(["h-32 md:h-48 flex-shrink-0"]);
        return (
          (oZ = function () {
            return e;
          }),
          e
        );
      }
      function oL() {
        var e = (0, w._)([
          "cursor-pointer absolute right-6 bottom-[124px] md:bottom-[180px] lg:bottom-[120px] z-10 rounded-full border border-gray-200 bg-gray-50 text-gray-600 dark:border-white/10 dark:bg-white/10 dark:text-gray-200",
        ]);
        return (
          (oL = function () {
            return e;
          }),
          e
        );
      }
      var oD = (0, A.vU)({
        advancedDataAnalysisSupportDisclaimer: {
          id: "sharedConversation.advancedDataAnalysisSupportDisclaimer",
          defaultMessage:
            "This chat contains files or images produced by Advanced Data Analysis which are not yet visible in Shared Chats.",
          description:
            "Disclaimer about our lack of support for Advanced Data Analysis inline images and file downloads with shared links",
        },
        userContextCustomProfileDisclaimer: {
          id: "sharedConversation.userContextCustomProfileDisclaimer",
          defaultMessage:
            "This conversation may reflect the link creator’s Custom Instructions, which aren’t shared and can meaningfully change how the model responds.",
          description:
            "Disclaimer about our lack of support for custom profiles with shared links",
        },
        userContextCustomProfileAndAdvancedDataAnalysisSupportDisclaimer: {
          id: "sharedConversation.userContextCustomProfileAndAdvancedDataAnalysisSupportDisclaimer",
          defaultMessage:
            "This conversation may reflect the link creator’s Custom Instructions, which aren’t shared and can meaningfully change how the model responds. The chat contains files or images produced by Advanced Data Analysis which are not yet visible in Shared Chats.",
          description:
            "Disclaimer about our lack of support for Advanced Data Analysis inline images and file downloads with shared links and not sharing custom profile data",
        },
      });
      function oB(e) {
        var t = e.clientThreadId,
          n = (0, Y.qA)(t),
          a = (0, Y.je)(t),
          r = (0, Y.qN)(function (e) {
            return Y.iN.getThreadCreateTime(t, e);
          }),
          i = (0, Y.oq)(t),
          s = (0, Y.JI)(t, i),
          o = (0, F.useMemo)(
            function () {
              return iS(s);
            },
            [s],
          ),
          l = (0, Y.aS)(t);
        return (0, j.jsxs)("div", {
          className:
            "mb-1 border-b border-gray-100 pt-3 sm:mb-2 sm:pb-6 sm:pt-8",
          children: [
            (0, j.jsx)("h1", {
              className:
                "max-w-md text-3xl font-semibold leading-tight text-gray-700 dark:text-gray-100 sm:text-4xl",
              children: n,
            }),
            (null != a || null != r) &&
              (0, j.jsxs)("div", {
                className: "pt-3 text-base text-gray-400 sm:pt-4",
                children: [
                  null != a && (0, j.jsx)("span", { children: a }),
                  null != a &&
                    null != r &&
                    (0, j.jsx)("span", { className: "px-2", children: "•" }),
                  null != r &&
                    (0, j.jsx)(A.Ji, {
                      value: r,
                      month: "long",
                      year: "numeric",
                      day: "numeric",
                    }),
                ],
              }),
            (0, j.jsx)(oF, {
              shouldShowCodeInterpreterDisclaimer: o,
              shouldShowUserContextCustomProfileDisclaimer: l,
            }),
          ],
        });
      }
      var oF = function (e) {
        var t = e.shouldShowCodeInterpreterDisclaimer,
          n = e.shouldShowUserContextCustomProfileDisclaimer;
        return t && n
          ? (0, j.jsx)("div", {
              className: "mt-4",
              children: (0, j.jsx)(iP, {
                icon: E.H33,
                children: (0, j.jsx)(
                  U.Z,
                  (0, p._)(
                    {},
                    oD.userContextCustomProfileAndAdvancedDataAnalysisSupportDisclaimer,
                  ),
                ),
              }),
            })
          : (0, j.jsxs)(j.Fragment, {
              children: [
                t &&
                  (0, j.jsx)("div", {
                    className: "mt-4",
                    children: (0, j.jsx)(iP, {
                      icon: E.H33,
                      color: "gray",
                      children: (0, j.jsx)(
                        U.Z,
                        (0, p._)({}, oD.advancedDataAnalysisSupportDisclaimer),
                      ),
                    }),
                  }),
                n &&
                  (0, j.jsx)("div", {
                    className: "mt-4",
                    children: (0, j.jsx)(iP, {
                      icon: E.H33,
                      color: "gray",
                      children: (0, j.jsx)(
                        U.Z,
                        (0, p._)({}, oD.userContextCustomProfileDisclaimer),
                      ),
                    }),
                  }),
              ],
            });
      };
      function oE(e) {
        var t = e.onChangeItemInView,
          n = e.onRequestMoreCompletions,
          a = e.onChangeRating,
          r = e.onRequestCompletion,
          i = e.clientThreadId,
          s = e.conversationLeafId,
          o = e.isNewThread,
          l = e.currentThreadModel,
          d = e.inlineEmbeddedDisplay,
          u = e.initiallyHighlightedMessageId,
          c = e.promptTextareaRef,
          m = null !== (0, F.useContext)(X.gB),
          f = (0, nz.useScrollToBottom)(),
          g = (0, b._)((0, nz.useSticky)(), 1)[0],
          h = (0, K.hz)(),
          p = (0, $.Fl)().isBetaFeaturesUiEnabled,
          x = (0, Y.Kt)(i),
          v = (0, K.$T)(),
          w = (0, rN.iu)(),
          y = (0, rN.ZL)(),
          k = (0, rN.Xy)(l, i),
          C = h.has("model_switcher") && w.size > 1,
          M = h.has("model_switcher_upsell"),
          _ = o && !v && !y && (h.has(H.Zz) || !C),
          T = (0, b._)((0, F.useState)(!1), 2),
          N = T[0],
          I = T[1],
          S = (0, oP.Ri)(k.id),
          P = (0, Y.U0)(i, s);
        (0, F.useEffect)(
          function () {
            if (x) {
              var e = setTimeout(function () {
                I(!0);
              }, 1e3);
              return function () {
                clearTimeout(e);
              };
            }
            I(!1);
          },
          [x],
        );
        var R = o && !v,
          Z = (0, eu._)(Array(P).keys()).map(function (e) {
            return (0, j.jsx)(
              rE,
              {
                isFinalTurn: e === P - 1,
                turnIndex: e,
                clientThreadId: i,
                conversationLeafId: s,
                onChangeItemInView: t,
                onChangeRating: a,
                onRequestMoreCompletions: n,
                onRequestCompletion: r,
                currentModelId: k.id,
                showInlineEmbeddedDisplay: d,
                initiallyHighlightedMessageId: u,
                avatarColor: null == S ? void 0 : S.backgroundColor,
              },
              e,
            );
          });
        return (0, j.jsxs)(oq, {
          $shouldShowThreadSettings: R,
          children: [
            (0, j.jsx)(ol, {
              title: "ChatGPT",
              showSpinner: N,
              shouldShowThreadSettings: R,
              shouldShowPlusUpsell: M,
              currentModelId: k.id,
              promptTextareaRef: c,
              shouldShowPlaceholder: _,
            }),
            !o &&
              (m || !v) &&
              !d &&
              (0, j.jsx)(o_, {
                icon: p ? (null == S ? void 0 : S.icon) : void 0,
                currentModelConfig: k,
                clientThreadId: i,
              }),
            m &&
              !d &&
              (0, j.jsx)("div", {
                className:
                  "mx-auto w-full p-4 md:max-w-2xl lg:max-w-xl lg:px-0 xl:max-w-3xl",
                children: (0, j.jsx)(oB, { clientThreadId: i }),
              }),
            Z,
            !d && !_ && (0, j.jsx)(oA, {}),
            !g &&
              !d &&
              (0, j.jsx)(oU, {
                onClick: f,
                children: (0, j.jsx)(E.tv1, { className: "icon-sm m-1" }),
              }),
          ],
        });
      }
      var oq = z.Z.div(oR(), function (e) {
          return e.$shouldShowThreadSettings && "h-full";
        }),
        oA = z.Z.div(oZ()),
        oU = z.Z.button(oL());
      function oO() {
        var e = (0, w._)([
          "relative h-full w-full transition-width flex flex-col overflow-hidden items-stretch",
        ]);
        return (
          (oO = function () {
            return e;
          }),
          e
        );
      }
      function oz() {
        var e = (0, w._)(["grow flex-1 overflow-hidden"]);
        return (
          (oz = function () {
            return e;
          }),
          e
        );
      }
      function oW() {
        var e = (0, w._)([
          "w-full mb-4 shadow-[0_2px_12px_0px_rgba(0,0,0,0.08)] dark:bg-gray-800/90 rounded-lg border border-gray-100 dark:border-gray-700 overflow-hidden bg-gray-50",
        ]);
        return (
          (oW = function () {
            return e;
          }),
          e
        );
      }
      function oV() {
        var e = (0, w._)([
          "flex p-4 bg-white dark:bg-gray-800/90 border-t border-gray-100 dark:border-gray-700 rounded-b-lg w-full h-full\n",
          "\n",
        ]);
        return (
          (oV = function () {
            return e;
          }),
          e
        );
      }
      function oQ() {
        var e = (0, w._)([
          "flex w-full items-center justify-left gap-2 min-h-[1.5rem]",
        ]);
        return (
          (oQ = function () {
            return e;
          }),
          e
        );
      }
      function oH() {
        var e = (0, w._)([
          "border-none focus:ring-gray-200 dark:focus:ring-gray-600 bg-transparent py-0.5 -my-0.5 pl-1 -ml-1 w-full",
        ]);
        return (
          (oH = function () {
            return e;
          }),
          e
        );
      }
      function oG() {
        var e = (0, w._)(["flex-none h-full mt-auto mb-auto"]);
        return (
          (oG = function () {
            return e;
          }),
          e
        );
      }
      var oY = (0, A.vU)({
        sharingModalTitle: {
          id: "thread.sharingModal.title",
          defaultMessage: "Share Link to Chat",
          description:
            "Title of sharing feature in the title of the sharing modal",
        },
        sharingModalDescription: {
          id: "sharingModal.description",
          defaultMessage:
            "Messages you send after creating your link won't be shared. Anyone with the URL will be able to view the shared chat.",
          description:
            "Description of sharing feature in the first paragraph of the sharing modal",
        },
        sharingModalBizDescription: {
          id: "sharingModal.bizDescription",
          defaultMessage:
            "Anyone in your enterprise workspace will be able to view the latest version of the chat if given the URL.",
          description:
            "Description of sharing feature in the first paragraph of the sharing modal",
        },
        existingShareDescription: {
          id: "sharingModal.exisitingDescription",
          defaultMessage:
            "You have shared this chat <existingLink>before</existingLink>. If you want to update the shared chat content, <deleteLink>delete this link</deleteLink> and create a new shared link.",
          description:
            "Description in sharing modal when viewing an existing link",
        },
        sharingModalMoreInfo: {
          id: "thread.sharingModal.moreInfo",
          defaultMessage: "More Info",
          description:
            "Link to a helpdesk article with more information about the sharing modal",
        },
        moderationBlocked: {
          id: "sharingModal.moderationBlocked",
          defaultMessage: "This shared link has been disabled by moderation.",
          description:
            "Error message in sharing modal when shared link has been moderated.",
        },
        confirmCloseWithChanges: {
          id: "thread.sharingModal.confirmCloseWithChanges",
          defaultMessage: "You have unsaved changes. Do you want to continue?",
          description:
            "Confirmation message when closing share modal with changes",
        },
        confirmDeleteLink: {
          id: "sharingModal.confirmDeleteLink",
          defaultMessage: "Are you sure you want to delete the share link?",
          description: "Confirmation message when deleting share link",
        },
        advancedDataAnalysisSupportDisclaimer: {
          id: "sharingModal.advancedDataAnalysisSupportDisclaimer",
          defaultMessage:
            "Recipients won’t be able to view Advanced Data Analysis images or download files.",
          description:
            "Disclaimer about our lack of support for Advanced Data Analysis inline images and file downloads with shared links",
        },
        userContextCustomProfileDisclaimer: {
          id: "sharingModal.userContextCustomProfileDisclaimer",
          defaultMessage:
            "Your Custom Instructions won’t be shared with viewers.",
          description:
            "Disclaimer about our policy to not copy over custom profile data which could have PII",
        },
        userContextCustomProfileAndAdvancedDataAnalysisSupportDisclaimer: {
          id: "sharingModal.userContextCustomProfileAndAdvancedDataAnalysisSupportDisclaimer",
          defaultMessage:
            "Recipients won’t be able to view images, download files, or custom profiles.",
          description:
            "Disclaimer about our lack of support for Advanced Data Analysis inline images and file downloads with shared links and not sharing custom profile data",
        },
        copied: {
          id: "thread.sharingModal.copied",
          defaultMessage: "Copied!",
          description:
            "Status message after successfully copying the shared link",
        },
        copying: {
          id: "thread.sharingModal.copying",
          defaultMessage: "Copying...",
          description: "Status message while copying the shared link",
        },
        updateAndCopyLink: {
          id: "thread.sharingModal.updateAndCopyLink",
          defaultMessage: "Update and Copy Link",
          description: "Button text to update and copy the shared link",
        },
        shareYourName: {
          id: "sharingModal.shareYourName",
          defaultMessage: "Share your name",
          description: "Button text to change sharing to show the user's name",
        },
        shareAnonymously: {
          id: "sharingModal.shareAnonymously",
          defaultMessage: "Share anonymously",
          description: "Button text to change sharing to be anonymous",
        },
        deleteLink: {
          id: "sharingModal.deleteLink",
          defaultMessage: "Delete Link",
          description: "Button text to delete the share link",
        },
        failedToCopyLink: {
          id: "thread.sharingModal.failedToCopyLink",
          defaultMessage: "Failed to copy link to clipboard",
          description: "Error message when failing to copy link to clipboard",
        },
        copyLink: {
          id: "thread.sharingModal.copyLink",
          defaultMessage: "Copy Link",
          description: "Button text to copy the shared link",
        },
        copiedSharedConversationURL: {
          id: "thread.sharingModal.copiedSharedConversationURL",
          defaultMessage: "Copied shared conversation URL to clipboard!",
          description: "Success message when shared conversation URL is copied",
        },
        failedToDeleteSharedLink: {
          id: "thread.sharingModal.failedToDeleteSharedLink",
          defaultMessage: "Failed to delete shared link",
          description: "Error message when failing to delete shared link",
        },
      });
      function oJ(e) {
        var t = e.serverThreadId,
          n = (0, Y.oq)(t),
          a = (0, b._)(
            (0, F.useState)(function () {
              return (0, i_.Z)(function (e, t) {
                return {
                  title: void 0,
                  highlightedMessageId: void 0,
                  initiallyHighlightedMessageId: void 0,
                  currentNodeId: void 0,
                  shareLinkId: void 0,
                  shareLinkUrl: void 0,
                  isPublic: !1,
                  isDeleted: !1,
                  isAnonymous: !0,
                  linkAlreadyExisted: !1,
                  linkError: void 0,
                  moderationState: void 0,
                };
              });
            }),
            1,
          )[0],
          r = !(0, ei.B$)() && "root" !== n,
          i = (0, F.useRef)(!1);
        return (
          (0, F.useEffect)(
            function () {
              if (r && !i.current) {
                i.current = !0;
                var e = Y.tQ.getThreadCurrentLeafId(t),
                  n = Y.tQ.getTree(t).getMessageId(e);
                Q.ZP.createShareLink({
                  current_node_id: n,
                  conversation_id: t,
                  is_anonymous: !0,
                })
                  .then(function (e) {
                    a.setState({
                      shareLinkId: e.share_id,
                      shareLinkUrl: e.share_url,
                      isPublic: e.is_public,
                      isDeleted: !e.is_visible,
                      title: e.title,
                      highlightedMessageId: e.highlighted_message_id,
                      initiallyHighlightedMessageId: e.highlighted_message_id,
                      currentNodeId: e.current_node_id,
                      linkAlreadyExisted: e.already_exists,
                      isAnonymous: e.is_anonymous,
                      moderationState: e.moderation_state,
                    });
                  })
                  .catch(function (e) {
                    e instanceof iI.Q0 && "string" == typeof e.message
                      ? a.setState({ linkError: e.message })
                      : (nT.m.danger(
                          "Failed to copy link to clipboard - could not create link",
                        ),
                        J.vm.closeSharingModal());
                  });
              }
            },
            [r],
          ),
          (0, j.jsx)(iT.Provider, {
            value: a,
            children: (0, j.jsx)(oK, (0, p._)({}, e)),
          })
        );
      }
      function o$(e) {
        return (
          !0 === e.has_been_auto_blocked ||
          !0 === e.has_been_auto_moderated ||
          !0 === e.has_been_blocked
        );
      }
      function oK(e) {
        var t,
          n,
          a,
          r,
          i,
          s = e.serverThreadId,
          o = e.currentThreadModel,
          l = function () {
            (!el ||
              window.confirm(d.formatMessage(oY.confirmCloseWithChanges))) &&
              J.vm.closeSharingModal();
          },
          d = (0, O.Z)(),
          u = (0, F.useRef)(null),
          c = (0, b._)((0, F.useState)(!1), 2),
          m = c[0],
          f = c[1],
          g = (0, b._)((0, F.useState)(!1), 2),
          v = g[0],
          w = g[1],
          k = (0, b._)((0, F.useState)(!1), 2),
          C = k[0],
          M = k[1],
          T = (0, F.useContext)(iT),
          N = iN(function (e) {
            return e.title;
          }),
          I = iN(function (e) {
            return e.shareLinkId;
          }),
          S = iN(function (e) {
            return e.shareLinkUrl;
          }),
          P = iN(function (e) {
            return e.isAnonymous;
          }),
          R = iN(function (e) {
            return e.initiallyHighlightedMessageId;
          }),
          Z = iN(function (e) {
            return e.currentNodeId;
          }),
          L = iN(function (e) {
            return e.isPublic;
          }),
          D =
            iN(function (e) {
              return e.linkAlreadyExisted;
            }) && L,
          B = iN(function (e) {
            return e.linkError;
          }),
          z = iN(function (e) {
            return e.moderationState;
          }),
          W = null != z && o$(z),
          V = (0, K.ec)(K.F_.isBusinessWorkspace),
          H = (0, Y.oq)(s),
          G = (0, F.useRef)(),
          $ = (0, F.useRef)();
        (0, F.useEffect)(
          function () {
            D && ((G.current = N), ($.current = P));
          },
          [D],
        );
        var ee = (0, _.kP)().session,
          et = (0, Y.JI)(s, null != Z ? Z : H),
          en = (0, F.useMemo)(
            function () {
              return iS(et);
            },
            [et],
          ),
          ea = (0, Y.aS)(s),
          ei =
            ((t = (0, h._)(function (e, t) {
              var n, a, r, i, s, o, l;
              return (0, y.Jh)(this, function (u) {
                switch (u.label) {
                  case 0:
                    w(!0),
                      (a = (n = T.getState()).highlightedMessageId),
                      (r = n.title),
                      (i = n.isDeleted),
                      (s = n.isAnonymous);
                    try {
                      (0, nh.S)(t);
                    } catch (e) {
                      return (
                        nT.m.warning(d.formatMessage(oY.failedToCopyLink)),
                        w(!1),
                        [2]
                      );
                    }
                    u.label = 1;
                  case 1:
                    return (
                      u.trys.push([1, 3, 4, 5]),
                      [
                        4,
                        Q.ZP.updateShareLink({
                          share_id: e,
                          highlighted_message_id: a,
                          title: null != r ? r : void 0,
                          is_public: !i,
                          is_visible: !i,
                          is_anonymous: s,
                        }),
                      ]
                    );
                  case 2:
                    if (o$((o = u.sent().moderation_state)))
                      return T.setState({ moderationState: o }), [2];
                    return (
                      T.setState({ isPublic: !0, moderationState: o }),
                      M(!0),
                      setTimeout(function () {
                        J.vm.closeSharingModal(),
                          nT.m.success(
                            d.formatMessage(oY.copiedSharedConversationURL),
                          );
                      }, 500),
                      [3, 5]
                    );
                  case 3:
                    return (
                      (l = u.sent()) instanceof iI.Q0 &&
                        "string" == typeof l.message &&
                        T.setState({ linkError: l.message }),
                      [3, 5]
                    );
                  case 4:
                    return w(!1), [7];
                  case 5:
                    return [2];
                }
              });
            })),
            function (e, n) {
              return t.apply(this, arguments);
            }),
          el = D && (N !== G.current || P !== $.current),
          ed = (0, j.jsxs)(es.ZP.Button, {
            onClick: function () {
              return ei(I, S);
            },
            color: "primary",
            disabled: v || C || null == I || null == S || null != B || W,
            children: [
              C
                ? (0, j.jsx)(E.LSm, { className: "icon-sm" })
                : v
                ? (0, j.jsx)(eV.Z, {})
                : (0, j.jsx)(E.XKb, { className: "icon-sm" }),
              C
                ? (0, j.jsx)(U.Z, (0, p._)({}, oY.copied))
                : v
                ? (0, j.jsx)(U.Z, (0, p._)({}, oY.copying))
                : el
                ? (0, j.jsx)(U.Z, (0, p._)({}, oY.updateAndCopyLink))
                : (0, j.jsx)(U.Z, (0, p._)({}, oY.copyLink)),
            ],
          }),
          eu = (0, F.useCallback)(
            function (e) {
              var t;
              null == e || e.preventDefault(),
                T.setState({
                  title:
                    null === (t = u.current) || void 0 === t ? void 0 : t.value,
                }),
                f(!1);
            },
            [T],
          ),
          em = (0, F.useCallback)(
            function (e) {
              "Enter" === e.key && eu();
            },
            [eu],
          ),
          eg =
            ((n = (0, h._)(function () {
              return (0, y.Jh)(this, function (e) {
                switch (e.label) {
                  case 0:
                    return [
                      4,
                      Q.ZP.deleteShareLink({
                        share_id: T.getState().shareLinkId,
                      })
                        .catch(function (e) {
                          nT.m.danger(
                            d.formatMessage(oY.failedToDeleteSharedLink),
                          );
                        })
                        .then(function () {
                          J.vm.closeSharingModal();
                        }),
                    ];
                  case 1:
                    return e.sent(), [2];
                }
              });
            })),
            function () {
              return n.apply(this, arguments);
            }),
          eh =
            ((a = (0, h._)(function () {
              return (0, y.Jh)(this, function (e) {
                return (
                  T.setState({ isAnonymous: !0 }),
                  Y.qN.setState(function (e) {
                    e.threads[s].initialThreadData.authorName = void 0;
                  }),
                  [2]
                );
              });
            })),
            function () {
              return a.apply(this, arguments);
            }),
          ep =
            ((r = (0, h._)(function () {
              return (0, y.Jh)(this, function (e) {
                return (
                  T.setState({ isAnonymous: !1 }),
                  Y.qN.setState(function (e) {
                    var t;
                    e.threads[s].initialThreadData.authorName =
                      null == ee
                        ? void 0
                        : null === (t = ee.user) || void 0 === t
                        ? void 0
                        : t.name;
                  }),
                  [2]
                );
              });
            })),
            function () {
              return r.apply(this, arguments);
            }),
          ex = (0, j.jsxs)(o5, {
            $active: m,
            children: [
              (0, j.jsxs)("div", {
                className: "flex-1 pr-1",
                children: [
                  void 0 !== N
                    ? m
                      ? (0, j.jsx)(o3, {
                          ref: u,
                          type: "text",
                          defaultValue: null != N ? N : "",
                          autoFocus: !0,
                          onKeyDown: em,
                          onBlur: eu,
                        })
                      : (0, j.jsxs)(o4, {
                          onDoubleClick: function () {
                            return f(!0);
                          },
                          children: [
                            N,
                            m || null == N || D
                              ? null
                              : (0, j.jsx)("button", {
                                  onClick: function () {
                                    return f(!0);
                                  },
                                  className: "text-gray-500",
                                  children: (0, j.jsx)(E.Nte, {
                                    className: "icon-sm",
                                  }),
                                }),
                          ],
                        })
                    : (0, j.jsx)("div", { className: "h-6" }),
                  (0, j.jsxs)("div", {
                    className: "mt-1 text-gray-500",
                    children: [
                      !P &&
                        (0, j.jsx)("span", {
                          children: "".concat(
                            null == ee
                              ? void 0
                              : null === (i = ee.user) || void 0 === i
                              ? void 0
                              : i.name,
                            " \xb7 ",
                          ),
                        }),
                      (0, j.jsx)(A.Ji, {
                        value: new Date(),
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      }),
                    ],
                  }),
                ],
              }),
              (0, j.jsx)(o6, {
                children: (0, j.jsxs)(iM.fC, {
                  children: [
                    (0, j.jsx)(iM.xz, {
                      asChild: !0,
                      children: (0, j.jsx)(er.z, {
                        color: "neutral",
                        className: "mb-auto mt-auto",
                        children: (0, j.jsx)(q.JEI, {}),
                      }),
                    }),
                    (0, j.jsx)(iM.h_, {
                      children: (0, j.jsxs)(iM.VY, {
                        className:
                          "PopoverContent rounded-sm bg-white p-2 pb-0.5 shadow-xl dark:bg-gray-800/90",
                        side: "top",
                        align: "end",
                        children: [
                          P &&
                            (0, j.jsx)(er.z, {
                              color: "neutral",
                              className: "mb-2 flex w-full border-0",
                              onClick: ep,
                              children: (0, j.jsxs)("div", {
                                className: "flex w-full items-start",
                                children: [
                                  (0, j.jsx)(E.fzv, {
                                    className:
                                      "icon-sm float-left mb-auto mr-4 mt-auto",
                                  }),
                                  (0, j.jsx)("div", {
                                    children: (0, j.jsx)(
                                      U.Z,
                                      (0, p._)({}, oY.shareYourName),
                                    ),
                                  }),
                                ],
                              }),
                            }),
                          !P &&
                            (0, j.jsx)(er.z, {
                              color: "neutral",
                              className: "mb-2 flex w-full border-0",
                              onClick: eh,
                              children: (0, j.jsxs)("div", {
                                className: "flex w-full items-start",
                                children: [
                                  (0, j.jsx)(E.fzv, {
                                    className:
                                      "icon-sm float-left mb-auto mr-4 mt-auto",
                                  }),
                                  (0, j.jsx)("div", {
                                    children: (0, j.jsx)(
                                      U.Z,
                                      (0, p._)({}, oY.shareAnonymously),
                                    ),
                                  }),
                                ],
                              }),
                            }),
                          D &&
                            (0, j.jsx)(er.z, {
                              color: "neutral",
                              className: "mb-2 flex w-full border-0",
                              onClick: eg,
                              children: (0, j.jsxs)("div", {
                                className: "flex w-full items-start",
                                children: [
                                  (0, j.jsx)(E.Ybf, {
                                    className:
                                      "icon-sm float-left mb-auto mr-4 mt-auto",
                                  }),
                                  (0, j.jsx)("div", {
                                    children: (0, j.jsx)(
                                      U.Z,
                                      (0, p._)({}, oY.deleteLink),
                                    ),
                                  }),
                                ],
                              }),
                            }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
            ],
          }),
          ev = B;
        return (
          null == ev &&
            ((null == z ? void 0 : z.has_been_auto_blocked) ||
              (null == z ? void 0 : z.has_been_auto_moderated) ||
              (null == z ? void 0 : z.has_been_blocked)) &&
            (ev = (0, j.jsx)(U.Z, (0, p._)({}, oY.moderationBlocked))),
          (0, j.jsxs)(eo.Z, {
            isOpen: !0,
            onClose: function () {
              l();
            },
            size: "custom",
            className: "max-w-[550px]",
            type: "success",
            title: d.formatMessage(oY.sharingModalTitle),
            closeButton: (0, j.jsx)(es.ZP.CloseButton, {
              onClose: function () {
                l();
              },
            }),
            children: [
              null != ev &&
                (0, j.jsx)("div", {
                  className: "mb-4 rounded-md bg-red-500 p-4 text-white",
                  children: ev,
                }),
              (0, j.jsx)("div", {
                className: (0, ec.default)("w-full"),
                children: (0, j.jsx)("p", {
                  className: (0, ec.default)("mb-6 text-gray-500"),
                  children: D
                    ? (0, j.jsx)(
                        U.Z,
                        (0, x._)((0, p._)({}, oY.existingShareDescription), {
                          values: {
                            existingLink: function (e) {
                              return (0, j.jsx)("a", {
                                href: S,
                                target: "_blank",
                                rel: "noreferrer",
                                className: "underline",
                                children: e,
                              });
                            },
                            deleteLink: function (e) {
                              return (0, j.jsx)("a", {
                                href: "#",
                                onClick: function (e) {
                                  e.preventDefault(),
                                    window.confirm(
                                      d.formatMessage(oY.confirmDeleteLink),
                                    ) && eg();
                                },
                                className: "underline",
                                children: e,
                              });
                            },
                          },
                        }),
                      )
                    : (0, j.jsx)(
                        U.Z,
                        (0, p._)(
                          {},
                          V
                            ? oY.sharingModalBizDescription
                            : oY.sharingModalDescription,
                        ),
                      ),
                }),
              }),
              (0, j.jsx)(oX, {
                shouldShowCodeInterpreterDisclaimer: en,
                shouldShowUserContextCustomProfileDisclaimer: ea,
              }),
              (0, j.jsx)(o2, {
                children: (0, j.jsx)("div", {
                  className: "flex h-full max-w-full flex-1 flex-col",
                  children: (0, j.jsx)(o0, {
                    children: (0, j.jsxs)(o1, {
                      children: [
                        (0, j.jsx)(iC.f, {
                          ratio: 1.9,
                          className: "overflow-auto bg-white dark:bg-gray-800",
                          children:
                            null != Z
                              ? (0, j.jsx)(X.gB.Provider, {
                                  value: { serverSharedThreadId: null },
                                  children: (0, j.jsx)(oE, {
                                    onChangeItemInView: ef(),
                                    onRequestMoreCompletions: ef(),
                                    onChangeRating: ef(),
                                    onRequestCompletion: ef(),
                                    clientThreadId: s,
                                    conversationLeafId: Z,
                                    currentThreadModel: o,
                                    inlineEmbeddedDisplay: !0,
                                    isNewThread: !1,
                                    initiallyHighlightedMessageId: R,
                                  }),
                                })
                              : (0, j.jsx)("div", {
                                  className:
                                    "flex h-full items-center justify-center",
                                  children: (0, j.jsx)(eV.Z, {
                                    className:
                                      "text-gray-400 dark:text-gray-500",
                                  }),
                                }),
                        }),
                        ex,
                      ],
                    }),
                  }),
                }),
              }),
              (0, j.jsx)(es.ZP.Actions, {
                isSpacedBetween: !0,
                primaryButton: ed,
                secondaryButton: (0, j.jsx)("div", {
                  children: (0, j.jsxs)("a", {
                    href: "https://help.openai.com/en/articles/7925741-chatgpt-shared-links-faq",
                    className:
                      "flex items-center gap-2 text-gray-500 hover:text-gray-600 dark:hover:text-gray-400",
                    target: "_blank",
                    rel: "noreferrer",
                    children: [
                      d.formatMessage(oY.sharingModalMoreInfo),
                      (0, j.jsx)(E.AlO, { className: "icon-sm" }),
                    ],
                  }),
                }),
              }),
            ],
          })
        );
      }
      var oX = function (e) {
          var t = e.shouldShowCodeInterpreterDisclaimer,
            n = e.shouldShowUserContextCustomProfileDisclaimer;
          return t && n
            ? (0, j.jsx)(iP, {
                icon: E.H33,
                children: (0, j.jsx)(
                  U.Z,
                  (0, p._)(
                    {},
                    oY.userContextCustomProfileAndAdvancedDataAnalysisSupportDisclaimer,
                  ),
                ),
              })
            : (0, j.jsxs)(j.Fragment, {
                children: [
                  t &&
                    (0, j.jsx)(iP, {
                      icon: E.H33,
                      children: (0, j.jsx)(
                        U.Z,
                        (0, p._)({}, oY.advancedDataAnalysisSupportDisclaimer),
                      ),
                    }),
                  n &&
                    (0, j.jsxs)("p", {
                      className: "mb-6 flex flex-row gap-2.5 text-gray-500",
                      children: [
                        (0, j.jsx)(E.H33, {
                          className: "icon-sm mt-1 flex-shrink-0",
                        }),
                        (0, j.jsx)(
                          U.Z,
                          (0, p._)({}, oY.userContextCustomProfileDisclaimer),
                        ),
                      ],
                    }),
                ],
              });
        },
        o0 = z.Z.main(oO()),
        o1 = z.Z.div(oz()),
        o2 = z.Z.div(oW()),
        o5 = z.Z.div(oV(), function (e) {
          return e.$active, "";
        }),
        o4 = z.Z.div(oQ()),
        o3 = z.Z.input(oH()),
        o6 = z.Z.div(oG()),
        o7 = n(51704),
        o8 = n(16600),
        o9 = n(32636),
        le = n(50744),
        lt = n(33976),
        ln = n(85350),
        la = n(58268);
      function lr(e) {
        var t = e.clientThreadId,
          n = e.isNewThread,
          a = e.currentModelId,
          r = e.onRequestCompletion,
          i = e.onRequestMoreCompletions,
          s = e.onNewThreadCreationFinished,
          o = e.playgroundTemplateConfig,
          l = e.promptTextareaRef,
          d = (0, ei.B$)(),
          u = (0, Y.qN)(function (e) {
            var n, a, r, i, s, o;
            return (
              (s =
                (null === (a = (n = Y.iN.getCurrentNode(t, e)).message) ||
                void 0 === a
                  ? void 0
                  : a.author.role) === V.uU.User),
              (o =
                (null === (r = n.metadata) || void 0 === r ? void 0 : r.err) !=
                  null &&
                (null === (i = n.metadata) || void 0 === i
                  ? void 0
                  : i.errCode) !== o8.qS.ContentPolicy),
              s || o
            );
          });
        return !d && u
          ? (0, j.jsx)(li, { clientThreadId: t, onRequestMoreCompletions: i })
          : (0, j.jsxs)(le.Z, {
              children: [
                n && (0, j.jsx)(o9.sw, {}),
                (0, j.jsx)(ls, {
                  clientThreadId: t,
                  currentModelId: a,
                  isNewThread: n,
                  onRequestCompletion: r,
                  onRequestMoreCompletions: i,
                  onNewThreadCreationFinished: s,
                  playgroundTemplateConfig: o,
                  promptTextareaRef: l,
                }),
              ],
            });
      }
      function li(e) {
        var t = e.clientThreadId,
          n = e.onRequestMoreCompletions,
          a = (0, Y.qN)(function (e) {
            var n;
            return (
              (null === (n = Y.iN.getCurrentNode(t, e).metadata) || void 0 === n
                ? void 0
                : n.errCode) === ln.uU
            );
          }),
          r = (0, ln.Y8)(function (e) {
            return e.isoDate;
          }),
          i = (0, ee.w$)(),
          s = (0, Y.oq)(t);
        return a && null != r && "" !== r
          ? null
          : (0, j.jsxs)("div", {
              children: [
                (0, j.jsx)("div", {
                  className: "mb-3 text-center text-xs",
                  children: (0, j.jsx)(
                    U.Z,
                    (0, p._)({}, lo.errorGeneratingResponse),
                  ),
                }),
                (0, j.jsx)("div", {
                  className: "flex items-center md:mb-4",
                  children: (0, j.jsxs)(er.z, {
                    as: "button",
                    color: "primary",
                    onClick: function () {
                      n(s, { eventSource: "mouse" });
                    },
                    className: "m-auto",
                    children: [
                      (0, j.jsx)(E.Qxo, {
                        className: (0, ec.default)(
                          "flex-shrink-0",
                          i ? "icon-xs" : "icon-sm",
                        ),
                      }),
                      (0, j.jsx)(U.Z, (0, p._)({}, lo.regenerateResponse)),
                    ],
                  }),
                }),
              ],
            });
      }
      function ls(e) {
        var t,
          n,
          a,
          r,
          i,
          s,
          o,
          l = e.clientThreadId,
          d = e.currentModelId,
          u = e.isNewThread,
          c = e.onRequestCompletion,
          m = e.onRequestMoreCompletions,
          f = e.onNewThreadCreationFinished,
          g = e.playgroundTemplateConfig,
          h = e.promptTextareaRef,
          v = (0, Y.oq)(l),
          b = (0, F.useContext)(X.gt).serviceStatus,
          w = (0, Y.Hk)(l),
          y = (0, ei.Yk)(w),
          k = ed(),
          C =
            "root" !== v &&
            !y &&
            !(null == b ? void 0 : b.oof) &&
            !k.displayingSideBySideFeedback,
          M = (0, F.useCallback)(
            function (e, t) {
              var n = Y.tQ.getTree(l).getConversationTurns(e),
                a =
                  null == n
                    ? void 0
                    : n[(null == n ? void 0 : n.length) - 1].variantIds,
                r = (null == a ? void 0 : a.length) === 1;
              m(
                e,
                r
                  ? (0, x._)((0, p._)({}, t), { intent: "comparison_implicit" })
                  : t,
                !0,
                r ? "comparison_implicit" : "none",
              );
            },
            [m, l],
          ),
          _ = (0, F.useCallback)(
            function (e) {
              N.o.logEvent(I.a.continueCompletion),
                c(V.Os.Continue, e, { eventSource: "mouse" }, !1);
            },
            [c],
          ),
          T = (0, F.useContext)(X.QL).historyDisabled,
          S = (0, F.useCallback)(
            function (e, t) {
              var n,
                a = Y.tQ.getTree(l);
              a.hasReceivedServerCompletion ||
                T ||
                (null === (n = a.getParent(t).metadata) || void 0 === n
                  ? void 0
                  : n.errCode) === o8.qS.ContentPolicy ||
                setTimeout(function () {
                  f();
                }, 500),
                ei.hx.abortRequest(t) &&
                  Y.tQ.updateTree(l, function (e) {
                    var t = Y.tQ.getThreadCurrentLeafId(l);
                    e.updateNodeMessageMetadata(t, {
                      finish_details: { type: "interrupted" },
                    });
                  });
            },
            [f, T, l],
          ),
          P = (0, F.useCallback)(
            function (e, t, n) {
              var a,
                r = t.content,
                i = t.attachments,
                s =
                  arguments.length > 3 && void 0 !== arguments[3]
                    ? arguments[3]
                    : {},
                o = Y.tQ.getThreadCurrentLeafId(l);
              (null === (a = s.conversationTemplate) || void 0 === a
                ? void 0
                : a.id) != null &&
                Y.tQ.setConversationTemplateIdForNewThread(
                  l,
                  s.conversationTemplate.id,
                );
              var d = i.length > 0 ? { attachments: i } : {};
              Y.tQ.updateTree(l, function (t) {
                t.addNode(e, r, o, V.uU.User, void 0, d);
              }),
                c(V.Os.Next, e, n, !0, void 0, void 0, s);
            },
            [l, c],
          ),
          R = (0, Y.lA)(l, v),
          Z = (0, Y.dz)(l, v),
          L = (0, ei.Yk)(w),
          D = (0, K.hz)(),
          B = (0, F.useMemo)(
            function () {
              return !!D.has("allow_continue") && !L && !R && Z;
            },
            [R, Z, L, D],
          ),
          E = (0, Y.Kt)(l),
          q =
            ((t = (0, K.hz)()),
            (a = (n = (0, ek.a)(
              ["promptStarters", l],
              function () {
                return Q.ZP.getSampledPromptStarter(4);
              },
              { enabled: t.has(H.Zz) && u && !E },
            )).data),
            (r = n.isLoading),
            (i = n.isSuccess),
            t.has(H.Zz)
              ? {
                  promptStarters:
                    (null == a
                      ? void 0
                      : a.items.map(function (e) {
                          return {
                            title: e.title,
                            body: e.description,
                            prompt: e.prompt,
                          };
                        })) || [],
                  isLoading: r,
                  isSuccess: i,
                }
              : { promptStarters: [], isLoading: !1, isSuccess: !0 }),
          A = q.promptStarters,
          U = q.isSuccess,
          O = (0, la.x0)(),
          z =
            (null == O ? void 0 : O.messageId) ===
            (null === (s = Y.tQ.getTree(l).getLastValidNode(v)) || void 0 === s
              ? void 0
              : null === (o = s.message) || void 0 === o
              ? void 0
              : o.id)
              ? null == O
                ? void 0
                : O.suggestions
              : u && !E && U
              ? A
              : void 0,
          W = (0, rN.iu)(),
          G = (0, eb.Ml)(),
          J = (0, ea.cH)(l),
          $ = (function () {
            if (!W.size) return "noModelsAvailable";
            if (k.displayingSideBySideFeedback && k.unskippable)
              return "feedbackRequired";
            if (G) {
              if (J.isLoading) return "loadingPlugins";
              if (J.requiresPlugins) return "requiresPluginsToBeInstalled";
            }
            return null;
          })(),
          ee = (0, Y.r7)(l);
        return (0, j.jsx)(
          lt.ZP,
          {
            clientThreadId: l,
            canRegenerateResponse: C,
            onRequestMoreCompletions: M,
            onCreateNewCompletion: P,
            onAbortCompletion: S,
            onContinueGenerating: _,
            currentModelId: d,
            isNewThread: u,
            isCompletionInProgress: y,
            className:
              "stretch mx-2 flex flex-row gap-3 last:mb-2 md:mx-4 md:last:mb-6 lg:mx-auto lg:max-w-2xl xl:max-w-3xl",
            canContinue: B,
            suggestions: null != z ? z : [],
            disabled: !!$,
            disabledReason: null != $ ? $ : void 0,
            canPause: L && "gpt-4-pbrowse" !== d,
            isInteractableSharedThread: ee,
            playgroundTemplateConfig: g,
            ref: h,
          },
          l,
        );
      }
      var lo = (0, A.vU)({
          errorGeneratingResponse: {
            id: "PromptTextarea.errorGeneratingResponse",
            defaultMessage: "There was an error generating a response",
            description:
              "Error message shown when the response generation fails",
          },
          regenerateResponse: {
            id: "PromptTextarea.regenerateResponse",
            defaultMessage: "Regenerate",
            description: "Button label for regenerating response",
          },
        }),
        ll = n(2295);
      function ld() {
        return (ld = (0, h._)(function (e, t) {
          var n, a;
          return (0, y.Jh)(this, function (r) {
            switch (r.label) {
              case 0:
                if (
                  (null === (n = t.metadata) || void 0 === n
                    ? void 0
                    : n.client_actions) === void 0 ||
                  0 === t.metadata.client_actions.length ||
                  0 ==
                    (a = t.metadata.client_actions.filter(function (e) {
                      return "browser_tool" === e.type;
                    })).length
                )
                  return [2, []];
                return [
                  4,
                  Promise.all(
                    a.map(function (n) {
                      return (function (e, t, n) {
                        return lc.apply(this, arguments);
                      })(e, n.action, t);
                    }),
                  ),
                ];
              case 1:
                return [2, r.sent().flat()];
            }
          });
        })).apply(this, arguments);
      }
      var lu = (function () {
        function e(t) {
          (0, rl._)(this, e), (this.conversationId = t);
        }
        var t = e.prototype;
        return (
          (t.createRequest = function (e) {
            var t = this;
            return new Promise(function (n, a) {
              var r = new BroadcastChannel(Math.random().toString()),
                i = setTimeout(function () {
                  a("Timeout"), r.close();
                }, 6e4);
              r.onmessage = function (e) {
                n(e.data), clearTimeout(i), r.close();
              };
              var s = (0, x._)(
                (0, p._)({ action: "browse", id: t.conversationId }, e),
                { channel: r.name },
              );
              window.postMessage(s, "*");
            });
          }),
          (t.browse = function (e) {
            return this.createRequest({ url: e, type: "browse" });
          }),
          (t.back = function () {
            return this.createRequest({ type: "back" });
          }),
          (t.click = function (e) {
            return this.createRequest({ target: e, type: "click" });
          }),
          (t.scroll = function (e) {
            return this.createRequest({ amount: e, type: "scroll" });
          }),
          (t.quote = function (e, t) {
            return this.createRequest({
              quote_start: e,
              quote_end: t,
              type: "quote",
            });
          }),
          e
        );
      })();
      function lc() {
        return (lc = (0, h._)(function (e, t, n) {
          var a, r;
          return (0, y.Jh)(this, function (n) {
            var i, s;
            switch (n.label) {
              case 0:
                (a = new lu(e)), (n.label = 1);
              case 1:
                switch ((n.trys.push([1, 14, , 15]), t.command)) {
                  case "back":
                    return [3, 2];
                  case "quote":
                    return [3, 4];
                  case "scroll":
                    return [3, 6];
                  case "open_url":
                    return [3, 8];
                  case "click":
                    return [3, 10];
                }
                return [3, 12];
              case 2:
                return [4, a.back()];
              case 3:
              case 7:
              case 9:
              case 11:
                return [
                  2,
                  [
                    (!(function (e) {
                      for (var t in e.urls)
                        e.text.includes("".concat(t)) || delete e.urls[t];
                    })((i = n.sent())),
                    {
                      id: (0, W.Z)(),
                      author: { role: V.uU.Tool, name: "browser" },
                      content: {
                        content_type: V.PX.TetherBrowsingDisplay,
                        result: i.text,
                        summary: i.title,
                      },
                      metadata: {
                        _cite_metadata: {
                          citation_format: { name: "tether_og" },
                          metadata_list: [
                            {
                              type: "webpage",
                              title: i.title,
                              url: i.url,
                              text: i.text,
                            },
                          ],
                        },
                      },
                      recipient: "all",
                    }),
                  ],
                ];
              case 4:
                return [4, a.quote(t.quote_start, t.quote_end)];
              case 5:
                return [
                  2,
                  [
                    ((s = n.sent()),
                    {
                      id: (0, W.Z)(),
                      author: { role: V.uU.Tool, name: "browser" },
                      content: {
                        content_type: V.PX.Text,
                        parts: ["".concat(JSON.stringify(s))],
                      },
                      recipient: "all",
                    }),
                  ],
                ];
              case 6:
                return [4, a.scroll(t.amount)];
              case 8:
                return [4, a.browse(t.url)];
              case 10:
                return [4, a.click(t.target)];
              case 12:
                throw Error("Unsupported browser action type " + t);
              case 13:
                return [3, 15];
              case 14:
                return (
                  console.error((r = n.sent())),
                  [
                    2,
                    [
                      {
                        id: (0, W.Z)(),
                        author: { role: V.uU.Tool, name: "browser" },
                        content: {
                          content_type: V.PX.Text,
                          parts: ["Error making browse call: ".concat(r)],
                        },
                        recipient: "all",
                      },
                    ],
                  ]
                );
              case 15:
                return [2];
            }
          });
        })).apply(this, arguments);
      }
      var lm = n(23111),
        lf = function e(t) {
          var n,
            a = this;
          (0, rl._)(this, e),
            (this.blurDuringCompletionTrackerOnUnmountRef = t),
            (this.completionStartTime = Date.now()),
            (this.logFocusAfterBlurDuringCompletionEvent = function () {
              eO.m9.logEvent(
                "chatgpt_focus_after_blur_during_completion",
                null,
                {
                  completion_duration_ms: "".concat(
                    a.completionEndTime - a.completionStartTime,
                  ),
                  blur_time_ms: "".concat(
                    a.blurDuringCompletionTime - a.completionStartTime,
                  ),
                  refocus_time_ms: "".concat(
                    a.refocusTime - a.completionStartTime,
                  ),
                },
              );
            }),
            (this.onWindowBlur = function () {
              void 0 === a.blurDuringCompletionTime &&
                ((a.blurDuringCompletionTime = Date.now()),
                window.addEventListener("focus", a.onWindowFocusAfterBlur),
                (a.blurDuringCompletionTrackerOnUnmountRef.current =
                  a.cleanupFocusAfterBlurListener));
            }),
            (this.onWindowFocusAfterBlur = function () {
              (a.refocusTime = Date.now()),
                void 0 !== a.completionEndTime &&
                  a.logFocusAfterBlurDuringCompletionEvent(),
                a.cleanupFocusAfterBlurListener();
            }),
            (this.cleanupFocusAfterBlurListener = function () {
              window.removeEventListener("focus", a.onWindowFocusAfterBlur),
                (a.blurDuringCompletionTrackerOnUnmountRef.current = void 0);
            }),
            (this.onMessageError = function () {
              window.removeEventListener("blur", a.onWindowBlur);
            }),
            (this.onMessageDone = function () {
              window.removeEventListener("blur", a.onWindowBlur),
                void 0 !== a.blurDuringCompletionTime &&
                  ((a.completionEndTime = Date.now()),
                  eO.m9.logEvent("chatgpt_blur_during_completion", null, {
                    completion_duration_ms: "".concat(
                      a.completionEndTime - a.completionStartTime,
                    ),
                    blur_time_ms: "".concat(
                      a.blurDuringCompletionTime - a.completionStartTime,
                    ),
                  }),
                  void 0 !== a.refocusTime &&
                    a.logFocusAfterBlurDuringCompletionEvent());
            }),
            window.addEventListener("blur", this.onWindowBlur),
            null === (n = t.current) || void 0 === n || n.call(t);
        },
        lg = n(43744),
        lh = (function () {
          function e(t) {
            (0, rl._)(this, e),
              (this.requestLatencyId = t),
              (this.requestStartTime = performance.now()),
              (this.requestLastTokenTime = performance.now()),
              (this.requestCount = 0),
              (this.requestTimes = []);
          }
          return (
            (e.prototype.onResponse = function (e, t, n) {
              var a,
                r,
                i = performance.now(),
                s = i - this.requestLastTokenTime,
                o = i - this.requestStartTime;
              (this.requestLastTokenTime = i), (this.requestCount += 1);
              var l =
                  t.content.content_type == V.PX.Text
                    ? null == t
                      ? void 0
                      : null === (a = t.content) || void 0 === a
                      ? void 0
                      : a.parts[
                          (null == t
                            ? void 0
                            : null === (r = t.content) || void 0 === r
                            ? void 0
                            : r.parts.length) - 1
                        ]
                    : "",
                d = {
                  requestCount: this.requestCount,
                  requestDuration: o,
                  lastTokenDuration: Number(JSON.stringify(s)),
                  messageType: t.content.content_type,
                  content: l,
                };
              this.requestTimes.push(d),
                "message" === e.type
                  ? (0, lg.Ae)(this.requestLatencyId, d)
                  : "done" === e.type &&
                    null != n &&
                    ((0, lg.kn)(this.requestLatencyId),
                    (0, lg.gL)(this.requestLatencyId));
            }),
            e
          );
        })();
      function lp(e, t) {
        e.updateNodeMetadata(t.id, { completionSampleFinishTime: Date.now() });
      }
      function lx(e, t, n, a, r, i, s, o) {
        return lv.apply(this, arguments);
      }
      function lv() {
        return (lv = (0, h._)(function (e, t, n, a, r, i, s, o) {
          var l, d, u, c;
          return (0, y.Jh)(this, function (m) {
            switch (m.label) {
              case 0:
                if (
                  ((d = performance.now()),
                  (u =
                    null === (l = r.get(n)) || void 0 === l
                      ? void 0
                      : l.tags.includes(rN.S.GPT_4)),
                  a && u && M.Z.gatherData(),
                  Y.tQ.updateTree(e, function (e) {
                    var n = !0,
                      a = !1,
                      r = void 0;
                    try {
                      for (
                        var i, o = s[Symbol.iterator]();
                        !(n = (i = o.next()).done);
                        n = !0
                      ) {
                        var l = i.value;
                        e.addNode(l.id, l, t, V.uU.Assistant, {
                          completionSampleFinishTime: Date.now(),
                        }),
                          (t = l.id);
                      }
                    } catch (e) {
                      (a = !0), (r = e);
                    } finally {
                      try {
                        n || null == o.return || o.return();
                      } finally {
                        if (a) throw r;
                      }
                    }
                  }),
                  Y.tQ.setThreadCurrentLeafId(e, t),
                  !(a && u))
                )
                  return [3, 2];
                return [4, M.Z.getEnforcementToken()];
              case 1:
                (c = m.sent()), (m.label = 2);
              case 2:
                return (
                  i({
                    model: n,
                    completionType: V.Os.Next,
                    parentNodeId: t,
                    metadata: {},
                    arkoseToken: null != c ? c : null,
                    preflightTime: performance.now() - d,
                    extraStreamParams: o,
                  }),
                  [2]
                );
            }
          });
        })).apply(this, arguments);
      }
      var lb = [
        /\bnigger\w*/i,
        /\bfaggot\w*/i,
        /\bkike\w*/i,
        /\bdykes?\b/i,
        /\bwetbacks?\b/i,
        /\bchinks?\b/i,
        /\bgooks?\b/i,
        /\bpakis?\b/i,
        /\binjuns?\b/i,
        /\btrannys?\b/i,
        /\btrannies\b/i,
        /\bspicks?\b/i,
        /\bshemales?\b/i,
      ];
      function lw(e) {
        return ly.apply(this, arguments);
      }
      function ly() {
        return (ly = (0, h._)(function (e) {
          var t, n;
          return (0, y.Jh)(this, function (a) {
            switch (a.label) {
              case 0:
                return (
                  (t = (0, b._)(e.queryKey, 2))[0],
                  (n = t[1]),
                  [
                    4,
                    Q.ZP.getThreadInterpreterState(n).then(function (e) {
                      return (
                        0 === e.time_remaining_ms &&
                          e.kernel_started &&
                          nT.m.warning(
                            "This advanced data analysis (beta) chat has timed out. You may continue the conversation, but previous files, links, and code blocks below may not work as expected.",
                            { hasCloseButton: !0, duration: 0 },
                          ),
                        e
                      );
                    }),
                  ]
                );
              case 1:
                return [2, a.sent()];
            }
          });
        })).apply(this, arguments);
      }
      var lj = P()(
        function () {
          return Promise.resolve().then(n.bind(n, 40803));
        },
        {
          loadableGenerated: {
            webpack: function () {
              return [40803];
            },
          },
          ssr: !1,
        },
      );
      function lk(e) {
        var t = e.children;
        return (0, j.jsx)(lj, {
          className: "h-full dark:bg-gray-800",
          followButtonClassName: "scroll-convo",
          initialScrollBehavior: "auto",
          children: t,
        });
      }
      function lC() {
        var e = (0, w._)(["grow flex-1 overflow-hidden"]);
        return (
          (lC = function () {
            return e;
          }),
          e
        );
      }
      function lM() {
        var e = (0, w._)([
          "absolute bottom-0 left-0 w-full border-t md:border-t-0 dark:border-white/20 md:border-transparent md:dark:border-transparent md:bg-vert-light-gradient bg-white dark:bg-gray-800 md:!bg-transparent dark:md:bg-vert-dark-gradient pt-2 md:pl-2 md:w-[calc(100%-.5rem)]",
        ]);
        return (
          (lM = function () {
            return e;
          }),
          e
        );
      }
      var l_ = P()(
          function () {
            return Promise.all([n.e(1966), n.e(1724)]).then(n.bind(n, 51724));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [51724];
              },
            },
            ssr: !1,
          },
        ),
        lT = P()(
          function () {
            return n
              .e(8682)
              .then(n.bind(n, 95624))
              .then(function (e) {
                return e.GizmoAccessToggle;
              });
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [95624];
              },
            },
          },
        ),
        lN = P()(
          function () {
            return Promise.all([n.e(8682), n.e(8932)])
              .then(n.bind(n, 61621))
              .then(function (e) {
                return e.GizmoNewConversation;
              });
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [61621];
              },
            },
          },
        ),
        lI = (0, A.vU)({
          contentPolicyViolation: {
            id: "thread.modal.restrictedTerms.title",
            defaultMessage: "This prompt may violate our content policy.",
            description: "Title for the restricted terms modal",
          },
          acknowledge: {
            id: "thread.modal.common.acknowledge",
            defaultMessage: "Acknowledge",
            description: "Acknowledge button text",
          },
          doNotShareSensitive: {
            id: "thread.modal.onboarding.title",
            defaultMessage:
              "Do not share sensitive materials with this application",
            description: "Title for the onboarding warning modal",
          },
          freeResearchPreview: {
            id: "thread.chatgptFreeResearchPreview-aug3-23",
            defaultMessage:
              "Free Research Preview. ChatGPT may produce inaccurate information about people, places, or facts. <link>ChatGPT August 3 Version</link>",
            description: "Free Research Preview disclaimer",
          },
          mayProduceInaccurateInformation: {
            id: "thread.chatgptMayProduceInaccurateInformation-aug3-23",
            defaultMessage:
              "ChatGPT may produce inaccurate information about people, places, or facts. <link>ChatGPT August 3 Version</link>",
            description:
              "ChatGPT disclaimer for producing inaccurate information",
          },
          businessDisclaimer: {
            id: "thread.businessDisclaimer-aug3-23-r2",
            defaultMessage:
              "Your {workspaceName} Workspace conversations won't be used to train our models. Responses may contain inaccurate info. <link>ChatGPT August 3 Version</link>",
            description: "Business disclaimer with protected data assurance",
          },
          businessDisclaimerNoName: {
            id: "thread.businessDisclaimerNoName-aug3-23-r2",
            defaultMessage:
              "Your Workspace conversations won't be used to train our models. Responses may contain inaccurate info. <link>ChatGPT August 3 Version</link>",
            description:
              "Business disclaimer with protected data assurance when no Workspace name is available",
          },
          outdatedTemplateDisclaimer: {
            id: "thread.outdatedTemplateDisclaimer",
            defaultMessage:
              "<bold>New version of template available</bold> - Continue chatting to use the old version, or start a <link>new chat</link> for the latest version.",
            description: "Outdated template disclaimer",
          },
          somethingWentWrong: {
            id: "thread.modal.unrecoverableError.title",
            defaultMessage: "Something went wrong",
            description: "Title for the UnrecoverableErrorModal",
          },
          tryAgainLater: {
            id: "thread.modal.unrecoverableError.description",
            defaultMessage:
              "We're sorry, but something went wrong. Please try again later.",
            description: "Description for the UnrecoverableErrorModal",
          },
          resetThread: {
            id: "thread.modal.unrecoverableError.resetThread",
            defaultMessage: "Reset thread",
            description: "Reset thread button text",
          },
          sharedConversationContinueConversation: {
            id: "thread.sharedConversation.continue",
            defaultMessage: "Continue this conversation",
            description:
              "Button for shared links to allow user to continue conversation in their own history",
          },
          sharedConversationReportConversation: {
            id: "thread.sharedConversation.report",
            defaultMessage: "Report conversation",
            description:
              "Button for shared links to report chat for legal, safety, or other reasons",
          },
          sharedConversationModerateConversation: {
            id: "thread.sharedConversation.moderate",
            defaultMessage: "Moderate conversation",
            description:
              "Button for shared links to moderate a chat for legal, safety, or other reasons",
          },
          reportSharedConversation: {
            id: "thread.reportSharedConversation",
            defaultMessage: "Report content",
            description: "Report shared chat footer link text",
          },
          termsOfUse: {
            id: "thread.termsOfUse",
            defaultMessage: "Terms of use",
            description: "Terms of use footer link text",
          },
          privacyPolicy: {
            id: "thread.privacyPolicy",
            defaultMessage: "Privacy policy",
            description: "Privacy policy footer link text",
          },
          helpAndFaq: {
            id: "thread.helpAndFaq",
            defaultMessage: "Help & FAQ",
            description: "Help & FAQ menu item",
          },
          keyboardShortcutsMenu: {
            id: "thread.keyboardShortcutsMenu",
            defaultMessage: "Keyboard shortcuts",
            description: "Keyboard shortcuts menu item",
          },
          latencyButton: {
            id: "thread.latencyButton",
            defaultMessage: "Latency",
            description: "Button to open the latency menu",
          },
        });
      function lS(e) {
        var t = e.onClickReportSharedConversation;
        return (0, j.jsxs)("div", {
          className: "flex justify-center gap-3 text-gray-500",
          children: [
            (0, j.jsx)("button", {
              onClick: function () {
                t();
              },
              children: (0, j.jsx)(
                U.Z,
                (0, p._)({}, lI.reportSharedConversation),
              ),
            }),
            (0, j.jsx)("span", { children: "|" }),
            (0, j.jsx)("a", {
              href: "https://openai.com/policies/terms-of-use",
              target: "_blank",
              rel: "noreferrer",
              children: (0, j.jsx)(U.Z, (0, p._)({}, lI.termsOfUse)),
            }),
            (0, j.jsx)("span", { children: "|" }),
            (0, j.jsx)("a", {
              href: "https://openai.com/policies/privacy-policy",
              target: "_blank",
              rel: "noreferrer",
              children: (0, j.jsx)(U.Z, (0, p._)({}, lI.privacyPolicy)),
            }),
          ],
        });
      }
      function lP(e) {
        var t = e.clientThreadId,
          n = (0, K.ec)(function (e) {
            return e.currentWorkspace;
          }),
          a = null == n ? void 0 : n.id,
          r = (0, Y.UL)(t),
          i = null == r ? void 0 : r.conversationTemplateId;
        return null != a && null != i
          ? (0, j.jsx)(lR, {
              clientThreadId: t,
              workspaceId: a,
              conversationTemplateId: i,
            })
          : (0, j.jsx)(lZ, {});
      }
      function lR(e) {
        var t = e.clientThreadId,
          n = e.workspaceId,
          a = e.conversationTemplateId,
          r = (0, ea.GS)(n, a).data,
          i = (0, Y.qN)(function (e) {
            return Y.iN.getThreadCreateTime(t, e);
          }),
          s =
            (null == r ? void 0 : r.updated_at) != null
              ? new Date(r.updated_at)
              : void 0;
        return null == s || null == i || s <= i
          ? (0, j.jsx)(lZ, {})
          : (0, j.jsxs)("span", {
              className: "text-gray-500",
              children: [
                (0, j.jsx)(q.h5O, {
                  className:
                    "text-token-secondary mb-1 mr-1 inline-block h-4 w-4 stroke-0",
                }),
                (0, j.jsx)(
                  U.Z,
                  (0, x._)((0, p._)({}, lI.outdatedTemplateDisclaimer), {
                    values: {
                      link: function (e) {
                        return (0, j.jsx)(D(), {
                          href: (0, ea.l1)(a),
                          className: "underline",
                          shallow: !0,
                          children: e,
                        });
                      },
                      bold: function (e) {
                        return (0, j.jsx)("span", {
                          className: "text-token-secondary font-semibold",
                          children: e,
                        });
                      },
                    },
                  }),
                ),
              ],
            });
      }
      function lZ() {
        var e = (0, K.ec)(K.F_.isBusinessWorkspace),
          t = (0, K.ec)(function (e) {
            return e.currentWorkspace;
          }),
          n = null == t ? void 0 : t.name,
          a = (0, K.WY)(),
          r = function (e) {
            return (0, j.jsx)("a", {
              href: "https://help.openai.com/en/articles/6825453-chatgpt-release-notes",
              target: "_blank",
              rel: "noreferrer",
              className: "underline",
              children: e,
            });
          };
        return e
          ? (0, j.jsx)("span", {
              children:
                null != n
                  ? (0, j.jsx)(
                      U.Z,
                      (0, x._)((0, p._)({}, lI.businessDisclaimer), {
                        values: { link: r, workspaceName: n },
                      }),
                    )
                  : (0, j.jsx)(
                      U.Z,
                      (0, x._)((0, p._)({}, lI.businessDisclaimerNoName), {
                        values: { link: r },
                      }),
                    ),
            })
          : a
          ? (0, j.jsx)("span", {
              children: (0, j.jsx)(
                U.Z,
                (0, x._)((0, p._)({}, lI.mayProduceInaccurateInformation), {
                  values: { link: r },
                }),
              ),
            })
          : (0, j.jsx)("span", {
              children: (0, j.jsx)(
                U.Z,
                (0, x._)((0, p._)({}, lI.freeResearchPreview), {
                  values: { link: r },
                }),
              ),
            });
      }
      var lL = function (e) {
          var t,
            n,
            a,
            r,
            i,
            s,
            o,
            l,
            d,
            u,
            c,
            m,
            f,
            g,
            w,
            k,
            S,
            P,
            R,
            L,
            D,
            q,
            A,
            z,
            el,
            eu,
            ec,
            em,
            ef,
            eg,
            ep,
            ex,
            ev,
            ew,
            ey = e.initialThreadData,
            ej = e.clientThreadId,
            eC = e.initiallyHighlightedMessageId,
            eM = e.continueConversationUrl,
            e_ = e.playgroundTemplateConfig,
            eT = null !== (0, F.useContext)(X.gB),
            eN = (0, O.Z)(),
            eI = (0, K.hz)(),
            eS = (0, $.Fl)().isPluginsAvailable,
            eP = (0, ee.w$)(),
            eR = (0, F.useContext)(X.QL).historyDisabled,
            eZ = ed(),
            eL = (0, B.useRouter)(),
            eD =
              eT &&
              (null === (ep = eL.query) || void 0 === ep
                ? void 0
                : null === (ex = ep.shareParams) || void 0 === ex
                ? void 0
                : ex[1]) === "moderate",
            eB = (0, Y.Kt)(ej),
            eF = (0, Y.oq)(ej),
            eE = (0, Y.U0)(ej, eF),
            eq = (0, Y.je)(ej),
            eA = (0, b._)((0, F.useState)(), 2),
            eU = eA[0],
            eO = eA[1],
            ez = (0, b._)((0, F.useState)(!1), 2),
            eW = ez[0],
            eV = ez[1],
            eQ = (0, b._)((0, F.useState)(), 2),
            eH = eQ[0],
            eG = eQ[1],
            eY = (0, b._)((0, F.useState)(), 2),
            eJ = eY[0],
            e$ = eY[1],
            eK = (0, b._)((0, F.useState)(), 2),
            eX = eK[0],
            e0 = eK[1],
            e1 = (0, K.WY)(),
            e2 = (0, G.g)(function (e) {
              return e.flags.isUserInCanPayGroup;
            }),
            e5 = eI.has(H.AL),
            e4 = (0, b._)((0, F.useState)(!1), 2),
            e3 = e4[0],
            e6 = e4[1],
            e7 =
              ((i = (r = {
                exempt: !1,
                onRestrictedTermFound: (0, F.useCallback)(
                  function (e) {
                    e6(!0),
                      N.o.logEvent(I.a.promptUsedRestrictedWords, {
                        threadId: Y.tQ.getServerThreadId(ej),
                        content: e,
                      });
                  },
                  [ej],
                ),
              }).exempt),
              (s = r.onRestrictedTermFound),
              (l = (o = (0, b._)((0, F.useState)(!1), 2))[0]),
              (d = o[1]),
              {
                hasRestrictedTerms: l,
                checkRestrictedTerms: (0, F.useCallback)(
                  function (e) {
                    var t;
                    return (lb.some(function (n) {
                      var a = n.exec(e);
                      return a && (t = a[0]), a;
                    }),
                    !i && t)
                      ? (d(!0), null == s || s(t), !0)
                      : (d(!1), !1);
                  },
                  [i, s],
                ),
              }),
            e8 = e7.hasRestrictedTerms,
            e9 = e7.checkRestrictedTerms,
            te = (0, b._)((0, F.useState)(!0), 2),
            tt = te[0],
            tn = te[1],
            ta = (0, rN.iu)(),
            tr = (0, iu.p0)(),
            ti = eE >= 2,
            ts = (0, Y.Zz)(ej) && !ti && !e_,
            to = (0, eb.Ml)(),
            tl = (0, rN.Gg)(ta, !0),
            td =
              null !== (ew = (0, rN.Bv)(ey.lastModelUsed, ej)) && void 0 !== ew
                ? ew
                : tl,
            tu = (0, rN.B9)(),
            tc = tu.get(td),
            tm = (0, ll.iF)(),
            tf = (0, F.useCallback)(
              function () {
                tm(), N.o.logEvent(I.a.newThread);
              },
              [tm],
            ),
            tg = Y.tQ.getTitle(ej),
            th = (0, F.useCallback)(
              function (e) {
                if (!eR && e) {
                  var t = Y.tQ
                    .getTree(e)
                    .getMessageId(Y.tQ.getThreadCurrentLeafId(e));
                  Q.ZP.generateTitle(e, t, td)
                    .then(function (t) {
                      var n = t.title;
                      Y.tQ.setTitle(e, n, Y._L.Generated),
                        tm(),
                        N.o.logEvent(I.a.renameThread, {
                          threadId: e,
                          content: n,
                          model: td,
                        });
                    })
                    .catch(function (e) {
                      console.error(e);
                    }),
                    null == e_ &&
                      eL.push((0, en.ZV)(e), void 0, { shallow: !0 });
                }
              },
              [eR, td, tm, eL, e_],
            );
          (0, F.useEffect)(function () {
            (0, la.sb)();
          }, []);
          var tp = (0, F.useCallback)(
              function (e) {
                if (
                  !eR &&
                  (0, K.N$)().has(H.uj) &&
                  !eZ.displayingSideBySideFeedback
                ) {
                  var t = Y.tQ.getThreadCurrentLeafId(e),
                    n = Y.tQ.getTree(e).getMessage(t);
                  (0, et.lD)(n) || (0, et.JD)(n) || (0, la.yu)(e, n.id, td);
                }
              },
              [eR, td, eZ.displayingSideBySideFeedback],
            ),
            tx = (0, Y.Uy)(ej),
            tv = null != (0, ea.DT)(ej),
            tb = (0, ea.tP)(ej).plugins,
            tw =
              to && tv
                ? tb
                : eS &&
                  (null == tc
                    ? void 0
                    : null === (ev = tc.enabledTools) || void 0 === ev
                    ? void 0
                    : ev.includes("tools3"))
                ? tr
                : void 0,
            ty =
              null == tw
                ? void 0
                : tw.map(function (e) {
                    return e.id;
                  }),
            tj =
              ((c = (u = (0, K.hz)()).has(H.PL)) &&
                M.Z.setPrefetchEnabled(u.has(H.rX)),
              (m = (0, F.useId)()),
              (f = (0, ln.Y8)(function (e) {
                return null == e ? void 0 : e.setCapTimeout;
              })),
              (g = (0, ln.Y8)(function (e) {
                return null == e ? void 0 : e.clearCapTimeout;
              })),
              (w = (0, F.useContext)(X.QL).historyDisabled),
              (k = (0, rN.B9)()),
              (S = (0, F.useRef)(0)),
              (P = (0, F.useRef)(tf)),
              (R = (0, F.useRef)(th)),
              (L = (0, F.useRef)(tp)),
              (P.current = tf),
              (R.current = th),
              (L.current = tp),
              (D = (0, F.useRef)(void 0)),
              (0, F.useEffect)(function () {
                return function () {
                  var e;
                  return null === (e = D.current) || void 0 === e
                    ? void 0
                    : e.call(D);
                };
              }, []),
              (q = (0, F.useCallback)(
                function (e, t, n, a, r, i) {
                  var s,
                    o,
                    l,
                    d,
                    m = a.eventSource,
                    v = function () {
                      setTimeout(function () {
                        ei.hx.removeRequest(n), Y.tQ.releaseThread(ej);
                      }, 0);
                    },
                    b = Y.tQ.getTree(ej),
                    w = n,
                    j = t === V.Os.Continue,
                    C = !0,
                    M = !1,
                    _ = b.getMessage(w),
                    T = {},
                    S = {},
                    Z = !1,
                    B = !1,
                    F = new lf(D),
                    E = new lh(r),
                    q = sA()(
                      function () {
                        Z ||
                          Y.tQ.updateTree(ej, function (e) {
                            Object.values(T).forEach(function (t) {
                              e.updateNodeMessage(t.id, t);
                            });
                          }),
                          (T = {});
                      },
                      50,
                      { leading: !0, maxWait: 50 },
                    );
                  return (
                    (s = (0, h._)(function (a) {
                      var r,
                        s,
                        h,
                        D,
                        A,
                        U,
                        O,
                        W,
                        Q,
                        H,
                        G,
                        J,
                        $,
                        K,
                        X,
                        ee,
                        et,
                        en,
                        ea,
                        er,
                        ei,
                        es,
                        eo,
                        el,
                        ed,
                        eu,
                        ec,
                        em,
                        ef,
                        eg,
                        eh,
                        ep,
                        ex,
                        ev;
                      return (0, y.Jh)(this, function (y) {
                        switch (y.label) {
                          case 0:
                            if (
                              (E.onResponse(a, _, o),
                              (r = !0),
                              "error" === a.type)
                            )
                              return (
                                console.error((s = a.error)),
                                (h =
                                  (null == s ? void 0 : s.message) ||
                                  "Something went wrong"),
                                Y.tQ.updateTree(ej, function (e) {
                                  e.updateNodeMessage(w, _),
                                    e.updateNodeMetadata(w, {
                                      err: h,
                                      errType: "danger",
                                      errCode: ((0, lm.T)(s) && s.code) || "",
                                      completionSampleFinishTime: Date.now(),
                                    });
                                }),
                                F.onMessageError(),
                                v(),
                                (0, lm.T)(s) &&
                                  (null == s ? void 0 : s.code) === ln.uU &&
                                  (null == s ? void 0 : s.clearsIn) &&
                                  (f(
                                    new Date(
                                      Date.now() + 1e3 * s.clearsIn,
                                    ).toISOString(),
                                  ),
                                  setTimeout(function () {
                                    g();
                                  }, 1e3 * s.clearsIn)),
                                [2]
                              );
                            if (
                              ("moderation" === a.type &&
                                ((D = a.isCompletion),
                                (A = a.messageId),
                                (U = a.conversationId),
                                (O = a.flagged),
                                (W = a.blocked),
                                (O || W) &&
                                  ((B = !0),
                                  W && D && (Z = !0),
                                  Y.tQ.updateTree(ej, function (e) {
                                    var t = e.messageIdToNodeId(A);
                                    O && e.clearNodeMessageParts(t),
                                      e.updateNodeMetadata(
                                        t,
                                        (0, x._)(
                                          (0, p._)({}, W ? o8.sK : o8.Mf),
                                          {
                                            completionSampleFinishTime:
                                              Date.now(),
                                          },
                                        ),
                                      );
                                  }),
                                  N.o.logEvent(
                                    D
                                      ? W
                                        ? I.a.completionBlockedByModeration
                                        : I.a.completionFlaggedByModeration
                                      : W
                                      ? I.a.promptBlockedByModeration
                                      : I.a.promptFlaggedByModeration,
                                    { threadId: U, id: A },
                                  ))),
                              "num_variants_in_stream" === a.type)
                            )
                              return (l = a), [2];
                            if ("message" === a.type) {
                              if (
                                ((H = a.message),
                                (G = a.conversationId),
                                C && !b.hasReceivedServerCompletion)
                              ) {
                                if (
                                  (null == H ? void 0 : H.author.role) ===
                                  V.uU.System
                                )
                                  return b.appendSystemMessageToRoot(H), [2];
                                if (
                                  (null == H ? void 0 : H.author.role) ===
                                    V.uU.User ||
                                  b.hasNodeOrMessageId(H.id)
                                )
                                  return [2];
                              }
                              C
                                ? (($ =
                                    (null ===
                                      (J = Y.qN.getState().threads[ej]) ||
                                    void 0 === J
                                      ? void 0
                                      : J.continuingFromSharedConversationId) !=
                                    null),
                                  Y.tQ.removeContinuingFromSharedConversationId(
                                    ej,
                                  ),
                                  (C = !1),
                                  (M = !b.hasReceivedServerCompletion || $),
                                  void 0 !== G &&
                                    ((o = G),
                                    (0, Y.Zz)(ej) &&
                                      Y.tQ.setServerIdForNewThread(ej, G)),
                                  Y.tQ.updateTree(ej, function (e) {
                                    e.updateNodeMessage(w, H);
                                  }),
                                  M && P.current(G),
                                  (K = {
                                    id: n,
                                    threadId: G,
                                    completionType: t,
                                    eventSource: m,
                                    model: e,
                                  }),
                                  t === V.Os.Next &&
                                    ((ea =
                                      null == (en = Y.qN.getState().threads[G])
                                        ? void 0
                                        : null === (X = en.conversationTurns) ||
                                          void 0 === X
                                        ? void 0
                                        : X.length),
                                    (ei =
                                      null ===
                                        (et = (er =
                                          null == en
                                            ? void 0
                                            : null ===
                                                (ee = en.conversationTurns) ||
                                              void 0 === ee
                                            ? void 0
                                            : ee.filter(function (e) {
                                                return e.role == V.uU.User;
                                              }))[er.length - 1]) ||
                                      void 0 === et
                                        ? void 0
                                        : et.messages[0].message).content
                                      .content_type == V.PX.Text &&
                                      ((es = ei.content.parts.join("").length),
                                      (el =
                                        null !== (eo = er.length) &&
                                        void 0 !== eo
                                          ? eo
                                          : 0),
                                      (K.countConversationTurns = ea),
                                      (K.countUserSubmittedMessages = el),
                                      (K.countLastUserPromptTextMessageLength =
                                        es))),
                                  N.o.logEvent(I.a.generateCompletion, K))
                                : !j &&
                                  ((eu = b.containsNodeOrMessageId(H.id)),
                                  (ec =
                                    null === (ed = H.metadata) || void 0 === ed
                                      ? void 0
                                      : ed.parent_id),
                                  eu ||
                                    (q.flush(),
                                    Y.tQ.updateTree(ej, function (e) {
                                      if (null == ec)
                                        throw Error(
                                          "Received a message with no parentId: ".concat(
                                            JSON.stringify(H),
                                          ),
                                        );
                                      e.addNode(H.id, H, ec, V.uU.Assistant);
                                    })),
                                  null != ec &&
                                    ec === d &&
                                    null != (em = S[ec]) &&
                                    (Y.tQ.updateTree(ej, function (e) {
                                      lp(e, em);
                                    }),
                                    delete S[ec]),
                                  (r =
                                    (null !==
                                      (ef =
                                        null == l
                                          ? void 0
                                          : l.num_variants_in_stream) &&
                                    void 0 !== ef
                                      ? ef
                                      : 1) === 1 ||
                                    null == d ||
                                    d === H.id) &&
                                    d !== H.id &&
                                    ((d = H.id),
                                    (w = H.id),
                                    (eg = Y.tQ.getThreadCurrentLeafId(ej)),
                                    b.messageIdToNodeId(w) !==
                                      b.messageIdToNodeId(eg) &&
                                      Y.tQ.setThreadCurrentLeafId(ej, w),
                                    null != ec &&
                                      Y.tQ.updateTree(ej, function (e) {
                                        e.updateNodeMetadata(ec, {
                                          variantsInStreamInfo: l,
                                        });
                                      }))),
                                r && (_ = H),
                                (T[H.id] = H),
                                (S[H.id] = H),
                                (null === (Q = H.metadata) || void 0 === Q
                                  ? void 0
                                  : Q.oauth_required) !== void 0 &&
                                  Y.tQ.updateTree(ej, function (e) {
                                    var t;
                                    e.updateNodeMetadata(H.id, {
                                      oauthRequired:
                                        null === (t = H.metadata) ||
                                        void 0 === t
                                          ? void 0
                                          : t.oauth_required,
                                    });
                                  });
                            }
                            if ((q(), "done" !== a.type)) return [3, 4];
                            if (
                              (Z ||
                                (q.flush(),
                                B || (M && R.current(o), L.current(o))),
                              Y.tQ.updateTree(ej, function (e) {
                                Object.values(S).forEach(function (t) {
                                  lp(e, t);
                                });
                              }),
                              F.onMessageDone(),
                              v(),
                              !(
                                (null == _
                                  ? void 0
                                  : null === (eh = _.metadata) || void 0 === eh
                                  ? void 0
                                  : eh.client_actions) !== void 0
                              ))
                            )
                              return [3, 2];
                            return [
                              4,
                              (function (e, t) {
                                return ld.apply(this, arguments);
                              })(ej, _),
                            ];
                          case 1:
                            (ep = y.sent()).length > 0 &&
                              lx(ej, w, e, c, k, z, ep, i),
                              (y.label = 2);
                          case 2:
                            if (!u.has("tools3_dev") || !(ex = (0, aE.wR)(_)))
                              return [3, 4];
                            return (
                              (ev = [ej, w, e, c, k, z]), [4, (0, aE.qZ)(ex)]
                            );
                          case 3:
                            lx.apply(void 0, ev.concat([y.sent(), i])),
                              (y.label = 4);
                          case 4:
                            return [2];
                        }
                      });
                    })),
                    function (e) {
                      return s.apply(this, arguments);
                    }
                  );
                },
                [P, R, L, ej],
              )),
              (z = (0, F.useCallback)(
                ((A = (0, h._)(function (e) {
                  var t,
                    n,
                    a,
                    r,
                    i,
                    s,
                    o,
                    l,
                    d,
                    u,
                    c,
                    f,
                    g,
                    h,
                    v,
                    b,
                    j,
                    k,
                    C,
                    M,
                    _,
                    T,
                    N,
                    I,
                    P,
                    R;
                  return (0, y.Jh)(this, function (y) {
                    switch (y.label) {
                      case 0:
                        for (
                          t = e.model,
                            n = e.completionType,
                            a = e.parentNodeId,
                            r = e.metadata,
                            s = void 0 === (i = e.focusOnNewCompletion) || i,
                            o = e.completionMetadata,
                            l = e.arkoseToken,
                            d = e.preflightTime,
                            u = e.extraStreamParams,
                            rc.publish({ kind: "requestCompletion" }),
                            f = Y.tQ.getTree(ej),
                            Y.tQ.retainThread(ej),
                            g = ""
                              .concat(eh.Vh)
                              .concat(m, "-")
                              .concat(S.current++),
                            h = "".concat(m, "-").concat(S.current),
                            Y.tQ.updateTree(ej, function (e) {
                              e.addNode(g, "", a, V.uU.Assistant);
                            }),
                            s && Y.tQ.setThreadCurrentLeafId(ej, g),
                            b = [],
                            j = f.getNodeByIdOrMessageId(a),
                            k = f.getNodeByIdOrMessageId(j.parentId);
                          null != k &&
                          (null === (c = k.metadata) || void 0 === c
                            ? void 0
                            : c.isPlaceholderTemplateAssistantWelcomeMessage) ===
                            !0;

                        ) {
                          var Z,
                            L,
                            D = k.message;
                          b.unshift(D);
                          var B = f.getNodeByIdOrMessageId(k.parentId);
                          (v =
                            null !==
                              (L =
                                null === (Z = B.message) || void 0 === Z
                                  ? void 0
                                  : Z.id) && void 0 !== L
                              ? L
                              : B.id),
                            (k = B);
                        }
                        return (
                          n === V.Os.Next || n === V.Os.Variant
                            ? ((M = f.getNodeByIdOrMessageId(j.parentId)),
                              null != v ||
                                (v =
                                  null !==
                                    (_ =
                                      null === (C = M.message) || void 0 === C
                                        ? void 0
                                        : C.id) && void 0 !== _
                                    ? _
                                    : M.id),
                              b.push(j.message))
                            : null != v || (v = j.message.id),
                          void 0 === (T = Y.tQ.getServerThreadId(ej)) &&
                            (0, Y.Zz)(ej) &&
                            Y.tQ.updateInitialThreadDataForNewThread(ej, t, ty),
                          (N = (0, x._)((0, p._)({}, u), {
                            model: t,
                            completionType: n,
                            threadId: T,
                            continueFromSharedConversationId: tx,
                            historyDisabled: w,
                            parentMessageId: v,
                            messages: b,
                            arkoseToken: null != l ? l : null,
                            enabledPluginIds: ty,
                            completionMetadata: o,
                          })),
                          (I = function (e, t) {
                            (0, lg.F4)(h, t, e, d);
                          }),
                          (P = q(t, n, g, r, h, u)),
                          [4, Q.ZP.publicApiCompletionStream(N, P, I)]
                        );
                      case 1:
                        return (R = y.sent()), ei.hx.addRequest(g, R), [2];
                    }
                  });
                })),
                function (e) {
                  return A.apply(this, arguments);
                }),
                [m, ej, tx, ty, q, w],
              ))),
            tk = (0, F.useCallback)(
              function () {
                var e = Y.tQ.getThreadCurrentLeafId(ej);
                if (null != e) {
                  var t = Y.tQ.getTree(ej).getBranchFromLeaf(e);
                  ei.hx.abortRequests(
                    t.map(function (e) {
                      return e.id;
                    }),
                  );
                }
              },
              [ej],
            ),
            tC = eI.has(H.PL),
            tM = eI.has(H.rX),
            t_ = (0, o7.N)(),
            tT = (0, F.useCallback)(
              ((el = (0, h._)(function (e, t, n, a) {
                var r,
                  i,
                  s,
                  o,
                  l,
                  d,
                  u,
                  c,
                  m,
                  f = arguments;
                return (0, y.Jh)(this, function (g) {
                  switch (g.label) {
                    case 0:
                      if (
                        ((r = !(f.length > 4) || void 0 === f[4] || f[4]),
                        (i = f.length > 5 ? f[5] : void 0),
                        (s = f.length > 6 ? f[6] : void 0),
                        (0, la.sb)(),
                        a && tk(),
                        (l = performance.now()),
                        (d = Y.tQ.getTree(ej)),
                        e !== V.Os.Continue && e9(d.getTextFromNode(t)))
                      )
                        return [2];
                      if (
                        ((u = i ? tl : td),
                        (c =
                          null === (o = tu.get(u)) || void 0 === o
                            ? void 0
                            : o.tags.includes(rN.S.GPT_4)),
                        !(tC && c))
                      )
                        return [3, 2];
                      return (
                        M.Z.setPrefetchEnabled(tM),
                        [4, M.Z.getEnforcementToken()]
                      );
                    case 1:
                      (m = g.sent()), (g.label = 2);
                    case 2:
                      return (
                        tj({
                          model: u,
                          completionType: e,
                          parentNodeId: t,
                          metadata: n,
                          focusOnNewCompletion: r,
                          completionMetadata: s,
                          arkoseToken: null != m ? m : null,
                          preflightTime: performance.now() - l,
                          extraStreamParams: { forceParagen: t_.forceParagen },
                        }),
                        [2]
                      );
                  }
                });
              })),
              function (e, t, n, a) {
                return el.apply(this, arguments);
              }),
              [ej, e9, tl, td, tu, tC, tM, tj, tk, t_.forceParagen],
            ),
            tN = (0, F.useCallback)(
              function (e, t, n, a) {
                Y.tQ.updateTree(ej, function (r) {
                  r.addNode(e, n, t, V.uU.User, void 0, a);
                });
              },
              [ej],
            ),
            tI = (0, F.useCallback)(
              ((eu = (0, h._)(function (e, t, n) {
                var a,
                  r,
                  i,
                  s = arguments;
                return (0, y.Jh)(this, function (o) {
                  return (
                    (a = t.content),
                    (r = t.attachments),
                    null !=
                      (i = s.length > 3 && void 0 !== s[3] ? s[3] : {})
                        .conversationTemplate &&
                      Y.tQ.setConversationTemplateIdForNewThread(
                        ej,
                        i.conversationTemplate.id,
                      ),
                    tN(e, eF, a, r.length > 0 ? { attachments: r } : {}),
                    tT(V.Os.Next, e, n, !0, void 0, void 0, i),
                    [2]
                  );
                });
              })),
              function (e, t, n) {
                return eu.apply(this, arguments);
              }),
              [ej, tN, tT, eF],
            ),
            tS = (0, F.useRef)(!1),
            tP = (0, rN.B8)(),
            tR = (0, _.kP)().session;
          (0, F.useEffect)(
            function () {
              if (
                tR &&
                void 0 !== tc &&
                (void 0 === tc.enabledTools || !(tc.enabledTools.length > 0)) &&
                eI.has(H.Yj) &&
                0 !== tP.enabledModelsInCategoriesById.size &&
                !tS.current &&
                void 0 === Y.tQ.getServerThreadId(ej)
              ) {
                var e,
                  t = eL.query,
                  n = t.m,
                  a = (0, v._)(t, ["m"]);
                if (void 0 !== n) {
                  e = Array.isArray(n) ? n[0] : n;
                  var r = (0, W.Z)();
                  (tS.current = !0),
                    tI(
                      r,
                      { content: e, attachments: [] },
                      { eventSource: "url" },
                    ),
                    eL.replace({ pathname: eL.pathname, query: a }, void 0, {
                      shallow: !0,
                    });
                }
              }
            },
            [tc, eL, tI, tR, tP, eI, ej],
          ),
            (0, ea.dB)(ej);
          var tZ = (0, F.useCallback)(
              function (e, t) {
                var n =
                    !(arguments.length > 2) ||
                    void 0 === arguments[2] ||
                    arguments[2],
                  a =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : "none",
                  r = arguments.length > 4 ? arguments[4] : void 0,
                  i = Y.tQ.getTree(ej).getParentPromptNode(e).id;
                tT(V.Os.Variant, i, t, !1, n, r, { variantPurpose: a });
              },
              [tT, ej],
            ),
            tL = (0, F.useCallback)(
              function (e) {
                var t = Y.tQ.getTree(ej).getLeafFromNode(e);
                Y.tQ.setThreadCurrentLeafId(ej, t.id);
              },
              [ej],
            ),
            tD = (0, F.useCallback)(
              function (e, t, n) {
                var a = Y.tQ.getServerThreadId(ej);
                if (
                  (N.o.logEvent(I.a.thumbRating, {
                    id: t,
                    threadId: a,
                    rating: n,
                    model: td,
                  }),
                  void 0 !== a &&
                    Q.ZP.submitMessageFeedback({
                      message_id: t,
                      conversation_id: a,
                      rating: n,
                    }),
                  e$(e),
                  e0(t),
                  eG(n),
                  Y.tQ.updateTree(ej, function (t) {
                    t.updateNodeMetadata(e, { rating: n });
                  }),
                  "thumbsDown" === n && eP)
                ) {
                  var r = Y.tQ.getTree(ej).getConversationTurns(e || "root");
                  rK(r[r.length - 1]) &&
                    tZ(
                      e,
                      { eventSource: "mouse", intent: "comparison" },
                      !1,
                      "comparison",
                    );
                }
              },
              [ej, td, eP, tZ],
            ),
            tB = (0, F.useCallback)(function () {
              J.vm.closeModal(J.B.AccountPortal);
            }, []),
            tF = (0, ik.tS)(function (e) {
              return {
                setShowEmbeddedPaymentModal: e.setShowEmbeddedPaymentModal,
                setShowAccountPaymentModal: e.setShowAccountPaymentModal,
                showAccountPaymentModal: e.showAccountPaymentModal,
                showEmbeddedPaymentModal: e.showEmbeddedPaymentModal,
              };
            }),
            tE = tF.showAccountPaymentModal,
            tq = tF.setShowAccountPaymentModal,
            tA = tF.showEmbeddedPaymentModal,
            tU = tF.setShowEmbeddedPaymentModal,
            tO = (0, is.C)(function (e) {
              return {
                setShowReferralInviteModal: e.setShowReferralInviteModal,
              };
            }).setShowReferralInviteModal,
            tz = (0, F.useCallback)(
              function () {
                tq(!1);
              },
              [tq],
            ),
            tW = (0, F.useCallback)(
              function () {
                tU(!1);
              },
              [tU],
            ),
            tV = (0, F.useCallback)(
              function () {
                tO(!1);
              },
              [tO],
            ),
            tQ = (0, F.useCallback)(function () {
              tn(!0), T.m.setItem("oai/librarian/hasSeenWarning", "true");
            }, []),
            tH = (0, F.useCallback)(function () {
              e6(!1);
            }, []),
            tG = (0, F.useRef)(null),
            tY = (0, J.tN)(function (e) {
              return e.activeModals.has(J.B.AccountPortal);
            }),
            tJ = (0, Y.XK)(ej),
            t$ = (0, J.tN)(function (e) {
              return e.sharingModalThreadId === tJ;
            }),
            tK = (0, is.C)(function (e) {
              return e.showReferralInviteModal;
            });
          return (
            (em = (ec = { clientThreadId: ej, currentModelId: td })
              .clientThreadId),
            (ef = ec.currentModelId),
            (t = (0, oP.i0)(ef, oP.dN.CODE_INTERPRETER)),
            (n = null !== (0, F.useContext)(X.gB)),
            (a = Y.tQ.getServerThreadId(em)),
            (0, ek.a)({
              queryKey: ["interpreterState", a],
              queryFn: lw,
              enabled: !!(t && a && !n),
              cacheTime: 0,
            }),
            (0, j.jsxs)(j.Fragment, {
              children: [
                e5 && (0, j.jsx)(l_, {}),
                (0, j.jsxs)(Z(), {
                  children: [
                    null != tg && (0, j.jsx)("title", { children: tg }),
                    eT &&
                      (0, j.jsxs)(j.Fragment, {
                        children: [
                          (0, j.jsx)("meta", {
                            property: "og:site_name",
                            content: "ChatGPT",
                          }),
                          (0, j.jsx)(
                            "meta",
                            { name: "robots", content: "noindex,nofollow" },
                            "robots",
                          ),
                          (0, j.jsx)(
                            "meta",
                            {
                              property: "og:title",
                              content:
                                null != tg ? tg : "Shared Chat on ChatGPT",
                            },
                            "og:title",
                          ),
                          (0, j.jsx)(
                            "meta",
                            {
                              property: "og:decription",
                              content:
                                "Shared " +
                                (null != eq ? "by ".concat(eq, " ") : "") +
                                "via ChatGPT",
                            },
                            "og:description",
                          ),
                          (0, j.jsx)(
                            "meta",
                            {
                              property: "og:image",
                              content: "/images/chatgpt-share-og.png",
                            },
                            "og:image",
                          ),
                        ],
                      }),
                  ],
                }),
                eI.has(H.i) ? (0, j.jsx)(ic, {}) : null,
                !tt &&
                  (0, j.jsx)(
                    eo.Z,
                    {
                      isOpen: !0,
                      onClose: tQ,
                      icon: C.Z,
                      title: eN.formatMessage(lI.doNotShareSensitive),
                      primaryButton: (0, j.jsx)(es.ZP.Button, {
                        onClick: tQ,
                        title: eN.formatMessage(lI.acknowledge),
                      }),
                      type: "danger",
                    },
                    "OnboardingModal",
                  ),
                e8 &&
                  e3 &&
                  (0, j.jsx)(
                    eo.Z,
                    {
                      isOpen: !0,
                      onClose: tH,
                      icon: E.U0j,
                      title: eN.formatMessage(lI.contentPolicyViolation),
                      primaryButton: (0, j.jsx)(es.ZP.Button, {
                        onClick: tH,
                        title: eN.formatMessage(lI.acknowledge),
                      }),
                      type: "danger",
                    },
                    "RestrictedTerms",
                  ),
                t$ &&
                  null != tJ &&
                  (0, j.jsx)(oJ, {
                    serverThreadId: tJ,
                    currentThreadModel: ey.lastModelUsed,
                  }),
                ts && to
                  ? (0, j.jsx)(lN, {
                      clientThreadId: ej,
                      onRequestCompletion: tT,
                      currentModel: tc,
                    })
                  : (0, j.jsxs)(r7.ZP, {
                      currentModelConfig: tc,
                      className: "flex h-full",
                      children: [
                        (0, j.jsx)(lB, {
                          children:
                            !eB &&
                            (ts || ti) &&
                            ((eg = (0, j.jsx)(
                              oE,
                              {
                                onChangeItemInView: tL,
                                onRequestMoreCompletions: tZ,
                                onChangeRating: tD,
                                onRequestCompletion: tT,
                                isNewThread: ts,
                                clientThreadId: ej,
                                currentThreadModel: ey.lastModelUsed,
                                initiallyHighlightedMessageId: eC,
                                inlineEmbeddedDisplay: !1,
                                promptTextareaRef: tG,
                                conversationLeafId: eF,
                              },
                              ej,
                            )),
                            eT
                              ? (0, j.jsx)("div", {
                                  className:
                                    "h-full overflow-auto dark:bg-gray-800",
                                  children: eg,
                                })
                              : (0, j.jsx)(lk, { children: eg })),
                        }),
                        (0, j.jsxs)(lF, {
                          children: [
                            eT
                              ? (0, j.jsxs)("div", {
                                  className:
                                    "relative flex h-full w-full flex-1 items-center justify-center gap-2",
                                  children: [
                                    (0, j.jsx)(er.z, {
                                      as: "link",
                                      to: eM,
                                      children: eN.formatMessage(
                                        lI.sharedConversationContinueConversation,
                                      ),
                                    }),
                                    eD &&
                                      (0, j.jsx)(er.z, {
                                        onClick: function () {
                                          eV(!0);
                                        },
                                        children: eN.formatMessage(
                                          lI.sharedConversationModerateConversation,
                                        ),
                                      }),
                                  ],
                                })
                              : (0, j.jsx)(lr, {
                                  clientThreadId: ej,
                                  isNewThread: ts,
                                  currentModelId: td,
                                  onRequestCompletion: tT,
                                  onRequestMoreCompletions: tZ,
                                  onNewThreadCreationFinished: th,
                                  playgroundTemplateConfig: e_,
                                  promptTextareaRef: tG,
                                }),
                            (0, j.jsx)("div", {
                              className:
                                "relative pb-3 pt-2 text-center text-xs text-gray-600 dark:text-gray-300 md:px-[60px] md:pb-6 md:pt-3",
                              children: eT
                                ? (0, j.jsx)(lS, {
                                    onClickReportSharedConversation:
                                      function () {
                                        eO(eF);
                                      },
                                  })
                                : e_
                                ? null
                                : (0, j.jsx)(lP, { clientThreadId: ej }),
                            }),
                          ],
                        }),
                      ],
                    }),
                (0, j.jsxs)("div", {
                  className:
                    "group fixed bottom-5 right-4 z-10 flex flex-row items-center gap-3",
                  children: [
                    ts && eI.has(H.L0.GizmoUI) ? (0, j.jsx)(lT, {}) : null,
                    e5 &&
                      (0, j.jsx)(er.z, {
                        size: "small",
                        color: "neutral",
                        onClick: function () {
                          J.vm.showLatencyDevTools();
                        },
                        className: "hidden md:block",
                        children: (0, j.jsxs)("div", {
                          className: "flex flex-row space-x-1",
                          children: [
                            (0, j.jsx)(E.DKx, { className: "icon-sm" }),
                            (0, j.jsx)("span", {
                              className: "text-xs",
                              children: (0, j.jsx)(
                                U.Z,
                                (0, p._)({}, lI.latencyButton),
                              ),
                            }),
                          ],
                        }),
                      }),
                    (0, j.jsx)("div", {
                      className: "hidden md:block",
                      children: (0, j.jsx)(lD, {}),
                    }),
                  ],
                }),
                (0, j.jsx)(r3, {
                  clientThreadId: ej,
                  currentLeafId: eF,
                  currentModelId: td,
                  onChangeItemInView: tL,
                  onRequestMoreCompletions: tZ,
                  onChangeRating: tD,
                  onRequestCompletion: tT,
                  ratingModalOpen: eH,
                  ratingModalNodeId: eJ,
                  ratingModalCompletionId: eX,
                  sharedConversationReportModalNodeId: eU,
                  setSharedConversationReportModalNodeId: eO,
                  sharedConversationModerationModalOpen: eW,
                  setRatingModalOpen: eG,
                  setSharedConversationModerationModalOpen: eV,
                }),
                e2 &&
                  (0, j.jsxs)(j.Fragment, {
                    children: [
                      (0, j.jsx)(iw.Z, { isOpen: tE, onClose: tz }),
                      (0, j.jsx)(iy, { isOpen: tA, onClose: tW }),
                    ],
                  }),
                eI.has(H.a3) && (0, j.jsx)(ie, { isOpen: tK, onClose: tV }),
                void 0 !== e1 &&
                  e1 &&
                  (0, j.jsx)(iv, { isOpen: tY, onClose: tB }),
              ],
            })
          );
        },
        lD = function () {
          return (0, K.hz)().has(H.rk)
            ? (0, j.jsxs)(k.v, {
                as: "div",
                className: "group relative",
                children: [
                  (0, j.jsx)(k.v.Button, {
                    className:
                      "flex items-center justify-center rounded-full border border-gray-200 bg-gray-50 text-gray-600 dark:border-white/10 dark:bg-white/10 dark:text-gray-200",
                    children: (0, j.jsx)("div", {
                      className: "h-6 w-6",
                      children: "?",
                    }),
                  }),
                  (0, j.jsx)(ig.m, {
                    children: (0, j.jsxs)(k.v.Items, {
                      className:
                        "absolute bottom-full right-0 z-20 mb-2 w-full min-w-[175px] overflow-hidden rounded-md bg-gray-50 pb-1.5 pt-1 outline-none dark:bg-gray-950",
                      children: [
                        (0, j.jsxs)(io.ZP, {
                          as: "a",
                          href: "https://help.openai.com/en/collections/3742473-chatgpt",
                          target: "_blank",
                          onClick: function () {
                            N.o.logEvent(I.a.clickFaqLink);
                          },
                          children: [
                            (0, j.jsx)(E.AlO, { className: "icon-sm" }),
                            (0, j.jsx)("span", {
                              className: "text-xs",
                              children: (0, j.jsx)(
                                U.Z,
                                (0, p._)({}, lI.helpAndFaq),
                              ),
                            }),
                          ],
                        }),
                        (0, j.jsxs)(io.ZP, {
                          onClick: function () {
                            J.vm.openModal(J.B.KeyboardActions);
                          },
                          children: [
                            (0, j.jsx)(E.aCJ, { className: "icon-sm" }),
                            (0, j.jsx)("span", {
                              className: "text-xs",
                              children: (0, j.jsx)(
                                U.Z,
                                (0, p._)({}, lI.keyboardShortcutsMenu),
                              ),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              })
            : null;
        },
        lB = z.Z.div(lC()),
        lF = z.Z.div(lM());
    },
    61402: function (e, t, n) {
      n.d(t, {
        B$: function () {
          return c;
        },
        Yk: function () {
          return u;
        },
        hx: function () {
          return m;
        },
      });
      var a = n(96237),
        r = n(39324),
        i = n(71209),
        s = n(43477),
        o = n(78103),
        l = (0, s.Z)(function () {
          return { activeRequests: {} };
        }),
        d = (0, o.ZP)(l);
      function u(e) {
        return d(function (t) {
          return null != t.activeRequests[e];
        });
      }
      function c() {
        return d(function (e) {
          return Object.keys(e.activeRequests).length > 0;
        });
      }
      var m = {
        addRequest: function (e, t) {
          l.setState(function (n) {
            return {
              activeRequests: (0, i._)(
                (0, r._)({}, n.activeRequests),
                (0, a._)({}, e, { id: e, abortController: t }),
              ),
            };
          });
        },
        removeRequest: function (e) {
          l.setState(function (t) {
            var n = (0, r._)({}, t.activeRequests);
            return delete n[e], { activeRequests: n };
          });
        },
        clear: function () {
          l.setState({ activeRequests: {} });
        },
        abortRequest: function (e) {
          var t = l.getState().activeRequests;
          return (
            null != t[e] &&
            (t[e].abortController.abort(), m.removeRequest(e), !0)
          );
        },
        abortRequests: function (e) {
          var t = l.getState().activeRequests,
            n = (0, r._)({}, t),
            a = !0,
            i = !1,
            s = void 0;
          try {
            for (
              var o, d = e[Symbol.iterator]();
              !(a = (o = d.next()).done);
              a = !0
            ) {
              var u = o.value;
              null != n[u] && (n[u].abortController.abort(), delete n[u]);
            }
          } catch (e) {
            (i = !0), (s = e);
          } finally {
            try {
              a || null == d.return || d.return();
            } finally {
              if (i) throw s;
            }
          }
          l.setState({ activeRequests: n });
        },
        abortAllRequests: function () {
          Object.values(l.getState().activeRequests).forEach(function (e) {
            e.abortController.abort();
          }),
            m.clear();
        },
      };
    },
    38566: function (e, t, n) {
      n.d(t, {
        C: function () {
          return d;
        },
      });
      var a = n(39324),
        r = n(71209),
        i = n(91530),
        s = n.n(i),
        o = n(78103),
        l = { showReferralInviteModal: !1 },
        d = (0, o.ZP)()(function (e) {
          return (0, r._)((0, a._)({}, l), {
            setShowReferralInviteModal: function (t) {
              var n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : s();
              e({ showReferralInviteModal: t }), null == n || n();
            },
          });
        });
    },
    7614: function (e, t, n) {
      n.d(t, {
        I: function () {
          return g;
        },
        Z: function () {
          return u;
        },
      });
      var a = n(4337),
        r = n(35250),
        i = n(21389);
      function s() {
        var e = (0, a._)([
          "flex p-4 bg-gray-50 dark:bg-white/5 rounded-md items-center gap-4 min-h-[71px]",
        ]);
        return (
          (s = function () {
            return e;
          }),
          e
        );
      }
      function o() {
        var e = (0, a._)(["w-10 text-2xl text-center"]);
        return (
          (o = function () {
            return e;
          }),
          e
        );
      }
      function l() {
        var e = (0, a._)(["flex-1 leading-5"]);
        return (
          (l = function () {
            return e;
          }),
          e
        );
      }
      function d() {
        var e = (0, a._)(["flex gap-4 flex-col text-sm"]);
        return (
          (d = function () {
            return e;
          }),
          e
        );
      }
      function u(e) {
        var t = e.icon,
          n = e.children;
        return (0, r.jsxs)(c, {
          children: [
            (0, r.jsx)(m, { children: t }),
            (0, r.jsx)(f, { children: n }),
          ],
        });
      }
      var c = i.Z.div(s()),
        m = i.Z.div(o()),
        f = i.Z.div(l()),
        g = i.Z.div(d());
    },
    35328: function (e, t, n) {
      n.d(t, {
        L: function () {
          return l;
        },
        p: function () {
          return o;
        },
      });
      var a = n(4337),
        r = n(21389);
      function i() {
        var e = (0, a._)(["mt-4 flex flex-col gap-4"]);
        return (
          (i = function () {
            return e;
          }),
          e
        );
      }
      function s() {
        var e = (0, a._)(["text-sm text-red-500"]);
        return (
          (s = function () {
            return e;
          }),
          e
        );
      }
      var o = r.Z.div(i()),
        l = r.Z.div(s());
    },
    9884: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return M;
        },
      });
      var a = n(21722),
        r = n(39324),
        i = n(71209),
        s = n(22830),
        o = n(75883),
        l = n(35250),
        d = n(79579),
        u = n(89368),
        c = n(51973),
        m = n(95137),
        f = n(78931),
        g = n(70079),
        h = n(70671),
        p = n(32004),
        x = n(94968),
        v = n(15608),
        b = n(73908),
        w = n(31486),
        y = n(35328),
        j = n(7614),
        k = (0, x.vU)({
          title: {
            id: "InstallUnverifiedDisclaimerModal.title",
            defaultMessage: "Unverified plugin",
            description: "Title for the Install Unverified Disclaimer Modal",
          },
          continue: {
            id: "InstallUnverifiedDisclaimerModal.continue",
            defaultMessage: "Continue",
            description:
              "Primary action button for proceeding with installation",
          },
          cancel: {
            id: "InstallUnverifiedDisclaimerModal.cancel",
            defaultMessage: "Cancel",
            description:
              "Secondary action button for cancelling the installation",
          },
          warning: {
            id: "InstallUnverifiedDisclaimerModal.warning",
            defaultMessage:
              "OpenAI hasn't vetted this plugin. This plugin may pose risks to your information. Be sure you trust this plugin before proceeding.",
            description: "Warning message about unverified plugins",
          },
        });
      function C(e) {
        var t = e.onConfirm,
          n = e.onClose,
          a = (0, h.Z)();
        return (0, l.jsx)(u.Z, {
          isOpen: !0,
          onClose: n,
          type: "success",
          title: a.formatMessage(k.title),
          primaryButton: (0, l.jsx)(d.ZP.Button, {
            title: a.formatMessage(k.continue),
            color: "primary",
            onClick: t,
          }),
          secondaryButton: (0, l.jsx)(d.ZP.Button, {
            title: a.formatMessage(k.cancel),
            color: "neutral",
            onClick: n,
          }),
          children: (0, l.jsx)(y.p, {
            children: (0, l.jsx)(j.I, {
              children: (0, l.jsx)(j.Z, {
                icon: "\uD83D\uDEA8",
                children: (0, l.jsx)(p.Z, (0, r._)({}, k.warning)),
              }),
            }),
          }),
        });
      }
      function M(e) {
        var t = e.plugin,
          n = e.onInstall,
          a = e.onClose,
          r = (0, s._)((0, g.useState)(!1), 2),
          i = r[0],
          o = r[1],
          d = (0, s._)((0, g.useState)(t), 2),
          u = d[0],
          c = d[1],
          m = (0, g.useCallback)(function () {
            o(!0);
          }, []);
        return u
          ? i
            ? (0, l.jsx)(T, { plugin: u, onInstall: n, onClose: a })
            : (0, l.jsx)(C, { onConfirm: m, onClose: a })
          : (0, l.jsx)(_, { onLoad: c, onClose: a });
      }
      function _(e) {
        var t = e.onLoad,
          n = e.onClose,
          i = (0, h.Z)(),
          f = (0, g.useRef)(null),
          x = (0, s._)((0, g.useState)(!1), 2),
          v = x[0],
          w = x[1],
          j = (0, s._)((0, g.useState)(), 2),
          k = j[0],
          C = j[1];
        (0, g.useEffect)(function () {
          setTimeout(function () {
            var e;
            null === (e = f.current) || void 0 === e || e.focus();
          }, 50);
        }, []);
        var M = (0, g.useCallback)(
          (0, a._)(function () {
            var e, n, a;
            return (0, o.Jh)(this, function (r) {
              switch (r.label) {
                case 0:
                  if (
                    !(n =
                      null === (e = f.current) || void 0 === e
                        ? void 0
                        : e.value)
                  )
                    return C("Please provide a URL."), [2];
                  if ((0, b.NB)(n))
                    return (
                      C(
                        'To add a localhost plugin, please go to "Develop your own plugin."',
                      ),
                      [2]
                    );
                  r.label = 1;
                case 1:
                  return (
                    r.trys.push([1, 3, 4, 5]),
                    w(!0),
                    [4, m.ZP.getPluginByDomain({ domain: n })]
                  );
                case 2:
                  return (
                    (a = r.sent()) ? t(a) : C("That plugin doesn't exist."),
                    [3, 5]
                  );
                case 3:
                  return r.sent(), C("Couldn't find plugin."), [3, 5];
                case 4:
                  return w(!1), [7];
                case 5:
                  return [2];
              }
            });
          }),
          [t, w, C],
        );
        return (0, l.jsx)(u.Z, {
          isOpen: !0,
          onClose: n,
          type: "success",
          title: i.formatMessage(N.installUnverifiedPluginTitle),
          primaryButton: (0, l.jsx)(d.ZP.Button, {
            title: i.formatMessage(N.findPlugin),
            color: "primary",
            onClick: M,
            loading: v,
          }),
          secondaryButton: (0, l.jsx)(d.ZP.Button, {
            title: i.formatMessage(N.cancel),
            color: "neutral",
            onClick: n,
          }),
          children: (0, l.jsxs)(y.p, {
            children: [
              (0, l.jsx)("div", {
                children: (0, l.jsx)(p.Z, (0, r._)({}, N.pleaseProvideDomain)),
              }),
              (0, l.jsx)(c.Z, {
                ref: f,
                name: "url",
                placeholder: "openai.com",
                onPressEnter: M,
              }),
              k && (0, l.jsx)(y.L, { children: k }),
            ],
          }),
        });
      }
      function T(e) {
        var t = e.plugin,
          n = e.onInstall,
          x = e.onClose,
          b = (0, h.Z)(),
          j = (0, s._)((0, g.useState)(), 2),
          k = j[0],
          C = j[1],
          M = (0, s._)((0, g.useState)(!1), 2),
          _ = M[0],
          T = M[1],
          I = (0, g.useRef)(null),
          S = (0, v.useInstallPlugin)({
            onSuccess: function (e) {
              n(e), x();
            },
            onError: function (e) {
              C("Couldn't install plugin.");
            },
          }),
          P = (0, f.hz)(),
          R = t.manifest.name_for_human,
          Z = "user_http" === t.manifest.auth.type,
          L = "oauth" === t.manifest.auth.type,
          D = (0, g.useCallback)(
            (0, a._)(function () {
              var e, n;
              return (0, o.Jh)(this, function (a) {
                switch (a.label) {
                  case 0:
                    if (!L) return [3, 1];
                    if (P.has("new_plugin_oauth_endpoint"))
                      return (0, v.doOauthRedirect)(t), [2];
                    return (
                      (e = (0, v.getOauthCallbackUrl)(t))
                        ? (window.location.href = e)
                        : C("Missing plugin configuration for ".concat(R, ".")),
                      [3, 8]
                    );
                  case 1:
                    if (!Z) return [3, 7];
                    if (
                      !(null === (n = I.current) || void 0 === n
                        ? void 0
                        : n.value)
                    )
                      return C("Please provide your credentials."), [2];
                    a.label = 2;
                  case 2:
                    return (
                      a.trys.push([2, 4, 5, 6]),
                      T(!0),
                      [
                        4,
                        m.ZP.setPluginUserHttpToken({
                          id: t.id,
                          userAccessToken: I.current.value,
                        }),
                      ]
                    );
                  case 3:
                    return a.sent(), S(t.id), [3, 6];
                  case 4:
                    return a.sent(), C("Couldn't install plugin."), [3, 6];
                  case 5:
                    return T(!1), [7];
                  case 6:
                    return [3, 8];
                  case 7:
                    try {
                      T(!0), S(t.id);
                    } catch (e) {
                      C("Couldn't install plugin.");
                    } finally {
                      T(!1);
                    }
                    a.label = 8;
                  case 8:
                    return [2];
                }
              });
            }),
            [P, t, R, L, Z, S],
          );
        return (0, l.jsx)(u.Z, {
          isOpen: !0,
          onClose: x,
          type: "success",
          title: b.formatMessage(N.unverifiedPluginTitle),
          primaryButton: (0, l.jsx)(d.ZP.Button, {
            title: L
              ? b.formatMessage(N.loginWithPlugin, { pluginName: R })
              : b.formatMessage(N.installPlugin),
            color: "primary",
            onClick: D,
            loading: _,
          }),
          secondaryButton: (0, l.jsx)(d.ZP.Button, {
            title: b.formatMessage(N.cancel),
            color: "neutral",
            onClick: x,
          }),
          children: (0, l.jsxs)(y.p, {
            children: [
              (0, l.jsx)(w.Z, { plugin: t }),
              Z &&
                (0, l.jsxs)("div", {
                  children: [
                    (0, l.jsx)("div", {
                      className: "text-sm",
                      children:
                        t.manifest.auth.instructions ||
                        (0, l.jsx)(p.Z, (0, r._)({}, N.enterHttpAccessToken)),
                    }),
                    (0, l.jsx)("div", {
                      className: "mt-2",
                      children: (0, l.jsx)(c.Z, {
                        ref: I,
                        type: "password",
                        name: "token",
                        placeholder: "Enter your credentials",
                        autoComplete: "off",
                        onPressEnter: D,
                      }),
                    }),
                  ],
                }),
              L &&
                (0, l.jsx)("div", {
                  children: (0, l.jsx)(
                    p.Z,
                    (0, i._)((0, r._)({}, N.youWillBeRedirected), {
                      values: {
                        pluginName: (0, l.jsx)("span", {
                          className: "font-medium",
                          children: R,
                        }),
                      },
                    }),
                  ),
                }),
              k && (0, l.jsx)(y.L, { children: k }),
            ],
          }),
        });
      }
      var N = (0, x.vU)({
        installUnverifiedPluginTitle: {
          id: "InstallPluginModal.installUnverifiedPluginTitle",
          description: "Title for the Install an Unverified Plugin modal",
          defaultMessage: "Install an unverified plugin",
        },
        pleaseProvideDomain: {
          id: "InstallPluginModal.pleaseProvideDomain",
          description:
            "Text asking the user to provide the website domain of the unverified plugin",
          defaultMessage:
            "Please provide the website domain of the unverified plugin you'd like to install.",
        },
        findPlugin: {
          id: "InstallPluginModal.findPlugin",
          description: "Text for the Find Plugin button",
          defaultMessage: "Find plugin",
        },
        cancel: {
          id: "InstallPluginModal.cancel",
          description: "Text for the Cancel button",
          defaultMessage: "Cancel",
        },
        unverifiedPluginTitle: {
          id: "InstallPluginModal.unverifiedPluginTitle",
          description: "Title for the Unverified Plugin modal",
          defaultMessage: "Unverified plugin",
        },
        loginWithPlugin: {
          id: "InstallPluginModal.loginWithPlugin",
          description: "Text for the Log in with plugin button",
          defaultMessage: "Log in with {pluginName}",
        },
        installPlugin: {
          id: "InstallPluginModal.installPlugin",
          description: "Text for the Install Plugin button",
          defaultMessage: "Install plugin",
        },
        enterHttpAccessToken: {
          id: "InstallPluginModal.enterHttpAccessToken",
          description: "Text asking user to enter their HTTP access token",
          defaultMessage: "Enter your HTTP access token below:",
        },
        youWillBeRedirected: {
          id: "InstallPluginModal.youWillBeRedirected",
          description:
            "Text informing the user they will be redirected to the plugin's login page",
          defaultMessage: "You will be redirected to {pluginName} to log in.",
        },
      });
    },
    52478: function (e, t, n) {
      n.d(t, {
        F6: function () {
          return c;
        },
        JF: function () {
          return i;
        },
        ZP: function () {
          return m;
        },
        f8: function () {
          return s;
        },
      });
      var a,
        r,
        i,
        s,
        o = n(70079),
        l = n(35101),
        d = n(14444);
      ((a = i || (i = {}))[(a.All = 0)] = "All"),
        (a[(a.Installed = 1)] = "Installed"),
        ((r = s || (s = {})).New = "newly_added"),
        (r.Popular = "most_popular");
      var u = [
        { id: s.Popular, title: "Popular" },
        { id: s.New, title: "New" },
        { id: i.All, title: "All" },
        { id: i.Installed, title: "Installed" },
      ];
      function c() {
        var e = (0, d.C)(),
          t = e.isLoading,
          n = e.installedPlugins;
        return {
          availableFilters: (0, o.useMemo)(
            function () {
              return u.filter(function (e) {
                return e.id !== i.Installed || n.length > 0;
              });
            },
            [n],
          ),
          isLoading: t,
        };
      }
      function m(e) {
        var t = e.filter,
          n = e.query,
          a = e.page,
          r = e.pageSize,
          s = (0, l.Z)({
            category: (function (e) {
              if (e !== i.All && e !== i.Installed) return e;
            })(t),
            search: n,
            offset: r * a,
            limit: r,
          }),
          u = s.data,
          c = s.isLoading,
          m = (0, d.C)(),
          f = m.installedPlugins,
          g = m.isLoading,
          h = (0, o.useMemo)(
            function () {
              return "" !== n
                ? f
                    .map(function (e) {
                      return {
                        plugin: e,
                        score: (function (e, t) {
                          var n = t.toLowerCase(),
                            a = n.trim().split(/\s+/),
                            r = e.manifest.description_for_human.toLowerCase(),
                            i = e.manifest.name_for_human.toLowerCase(),
                            s = 0;
                          if (i === n || e.domain.toLowerCase() === n)
                            return 1e3;
                          if (i.startsWith(n)) return 500;
                          if (i.includes(n)) return 100;
                          var o = !0,
                            l = !1,
                            d = void 0;
                          try {
                            for (
                              var u, c = a[Symbol.iterator]();
                              !(o = (u = c.next()).done);
                              o = !0
                            ) {
                              var m = u.value;
                              if (i.startsWith(m)) s += 50;
                              else if (i.includes(m)) s += 10;
                              else {
                                if (!r.includes(m)) return 0;
                                s += 1;
                              }
                            }
                          } catch (e) {
                            (l = !0), (d = e);
                          } finally {
                            try {
                              o || null == c.return || c.return();
                            } finally {
                              if (l) throw d;
                            }
                          }
                          return s;
                        })(e, n),
                      };
                    })
                    .filter(function (e) {
                      return e.score > 0;
                    })
                    .sort(function (e, t) {
                      return t.score - e.score;
                    })
                    .map(function (e) {
                      return e.plugin;
                    })
                : f.sort(function (e, t) {
                    return e.manifest.name_for_human.localeCompare(
                      t.manifest.name_for_human,
                    );
                  });
            },
            [f, n],
          );
        if (t === i.Installed) {
          var p,
            x,
            v,
            b,
            w,
            y,
            j =
              ((x = (p = { page: a, items: h, pageSize: r }).page),
              (v = p.items),
              (b = p.pageSize),
              (w = Math.ceil(v.length / b)),
              (y = x * b),
              { pagesTotal: w, pageItems: v.slice(y, y + b) });
          return { isLoading: g, items: j.pageItems, pagesTotal: j.pagesTotal };
        }
        var k = null != u ? u : { count: void 0, items: void 0 },
          C = k.count;
        return {
          isLoading: c,
          items: k.items,
          pagesTotal: void 0 !== C ? Math.ceil(C / r) : void 0,
        };
      }
    },
    28735: function (e, t, n) {
      n.d(t, {
        LW: function () {
          return i;
        },
        eR: function () {
          return r;
        },
      });
      var a = n(22830);
      function r(e, t) {
        var n = !0,
          r = !1,
          i = void 0;
        try {
          for (
            var s, o = Object.entries(t)[Symbol.iterator]();
            !(n = (s = o.next()).done);
            n = !0
          ) {
            var l = (0, a._)(s.value, 2),
              d = l[0],
              u = l[1];
            e.addEventListener(d, u);
          }
        } catch (e) {
          (r = !0), (i = e);
        } finally {
          try {
            n || null == o.return || o.return();
          } finally {
            if (r) throw i;
          }
        }
        return function () {
          var n = !0,
            r = !1,
            i = void 0;
          try {
            for (
              var s, o = Object.entries(t)[Symbol.iterator]();
              !(n = (s = o.next()).done);
              n = !0
            ) {
              var l = (0, a._)(s.value, 2),
                d = l[0],
                u = l[1];
              e.removeEventListener(d, u);
            }
          } catch (e) {
            (r = !0), (i = e);
          } finally {
            try {
              n || null == o.return || o.return();
            } finally {
              if (r) throw i;
            }
          }
        };
      }
      function i(e, t) {
        var n = !0,
          r = !1,
          i = void 0;
        try {
          for (
            var s, o = Object.entries(t)[Symbol.iterator]();
            !(n = (s = o.next()).done);
            n = !0
          ) {
            var l = (0, a._)(s.value, 2),
              d = l[0],
              u = l[1];
            e.on(d, u);
          }
        } catch (e) {
          (r = !0), (i = e);
        } finally {
          try {
            n || null == o.return || o.return();
          } finally {
            if (r) throw i;
          }
        }
        return function () {
          var n = !0,
            r = !1,
            i = void 0;
          try {
            for (
              var s, o = Object.entries(t)[Symbol.iterator]();
              !(n = (s = o.next()).done);
              n = !0
            ) {
              var l = (0, a._)(s.value, 2),
                d = l[0],
                u = l[1];
              e.off(d, u);
            }
          } catch (e) {
            (r = !0), (i = e);
          } finally {
            try {
              n || null == o.return || o.return();
            } finally {
              if (r) throw i;
            }
          }
        };
      }
    },
  },
]);
