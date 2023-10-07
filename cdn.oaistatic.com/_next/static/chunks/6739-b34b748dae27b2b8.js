"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6739],
  {
    41932: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var s = n(51217),
        a = n(22830),
        i = n(35250),
        r = n(70079),
        l = n(19012);
      function o(e) {
        var t = e.text,
          n = (0, l.Z)(),
          s = (0, a._)((0, r.useState)(!0), 2),
          o = s[0],
          u = s[1],
          d = (0, a._)((0, r.useState)(0), 2),
          f = d[0],
          m = d[1],
          h = (0, r.useMemo)(
            function () {
              return new c().humanTypingDelaysQuertyDistance(t);
            },
            [t]
          );
        return (
          (0, r.useEffect)(
            function () {
              t &&
                o &&
                (u(!0),
                h.forEach(function (e, t) {
                  setTimeout(function () {
                    n() && (m(t), t === h.length - 1 && u(!1));
                  }, e);
                }));
            },
            [h, n, o, t]
          ),
          (0, i.jsxs)(i.Fragment, {
            children: [t.substring(0, f + 1), o && "▋"],
          })
        );
      }
      var c = (function () {
        function e() {
          (0, s._)(this, e);
        }
        var t = e.prototype;
        return (
          (t.qwertyDistance = function (e, t) {
            var n,
              s,
              i = {
                q: [0, 0],
                w: [1, 0],
                e: [2, 0],
                r: [3, 0],
                t: [4, 0],
                y: [5, 0],
                u: [6, 0],
                i: [7, 0],
                o: [8, 0],
                p: [9, 0],
                a: [0, 1],
                s: [1, 1],
                d: [2, 1],
                f: [3, 1],
                g: [4, 1],
                h: [5, 1],
                j: [6, 1],
                k: [7, 1],
                l: [8, 1],
                z: [0, 2],
                x: [1, 2],
                c: [2, 2],
                v: [3, 2],
                b: [4, 2],
                n: [5, 2],
                m: [6, 2],
              },
              r = (0, a._)(
                null !== (n = i[e.toLowerCase()]) && void 0 !== n ? n : [0, 0],
                2
              ),
              l = r[0],
              o = r[1],
              c = (0, a._)(
                null !== (s = i[t.toLowerCase()]) && void 0 !== s ? s : [0, 0],
                2
              );
            return Math.abs(l - c[0]) + Math.abs(o - c[1]);
          }),
          (t.humanTypingDelaysQuertyDistance = function (e) {
            for (
              var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : 10,
                n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : 100,
                s = 0,
                a = [],
                i = 0;
              i < e.length;
              ++i
            ) {
              var r = void 0;
              if (i > 0) {
                var l = this.qwertyDistance(e[i - 1], e[i]);
                r =
                  0 === l
                    ? this.getRandomInt(t, Math.floor(n / 2))
                    : 1 === l
                    ? this.getRandomInt(t, Math.floor((2 * n) / 3))
                    : this.getRandomInt(t, n);
              } else r = this.getRandomInt(t, n);
              a.push(r + s), (s += r);
            }
            return a;
          }),
          (t.getRandomInt = function (e, t) {
            return Math.floor(Math.random() * (t - e + 1)) + e;
          }),
          e
        );
      })();
    },
    80267: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return ea;
        },
      });
      var s = n(39324),
        a = n(71209),
        i = n(22830),
        r = n(4337),
        l = n(35250),
        o = n(50795),
        c = n(82081),
        u = n(19841),
        d = n(72201),
        f = n(26430),
        m = n(84913),
        h = n(44043),
        g = n(82187),
        p = n(69262),
        x = n(70737),
        v = n(97296),
        y = n(91530),
        b = n.n(y),
        j = n(60554),
        M = n(70079),
        w = n(1454),
        k = n(94968),
        _ = n(70671),
        C = n(32004),
        N = n(21389),
        F = n(95137),
        Z = n(32877),
        S = n(37469),
        D = n(46020),
        P = n(78931),
        T = n(33669),
        B = n(66085),
        E = n(2166),
        z = n(21817),
        I = n(41932),
        L = n(6038),
        A = n(67273),
        R = n(61402),
        O = n(79579),
        U = n(89368),
        W = n(67),
        H = n(20522),
        $ = n(1821),
        Y = n(2295);
      function q() {
        var e = (0, r._)([
          "flex flex-col gap-2 pb-2 dark:text-gray-100 text-gray-800 text-sm\n",
          "",
        ]);
        return (
          (q = function () {
            return e;
          }),
          e
        );
      }
      function G() {
        var e = (0, r._)([
          "flex py-3 px-3 items-center gap-3 relative rounded-md hover:bg-gray-100 dark:hover:bg-[#2A2B32] cursor-pointer break-all\n",
          "\n",
        ]);
        return (
          (G = function () {
            return e;
          }),
          e
        );
      }
      function J() {
        var e = (0, r._)([
          "flex py-3 px-3 items-center gap-3 gizmo:gap-2 relative rounded-md hover:bg-gray-100 dark:hover:bg-[#2A2B32] cursor-pointer hover:pr-14 break-all\n",
          "\n",
        ]);
        return (
          (J = function () {
            return e;
          }),
          e
        );
      }
      function V() {
        var e = (0, r._)(["text-sm border-none bg-transparent p-0 m-0 w-full"]);
        return (
          (V = function () {
            return e;
          }),
          e
        );
      }
      function Q() {
        var e = (0, r._)([
          "flex-1 text-ellipsis max-h-5 overflow-hidden break-all relative",
        ]);
        return (
          (Q = function () {
            return e;
          }),
          e
        );
      }
      function X() {
        var e = (0, r._)([
          "h-9 pb-2 pt-3 px-3 text-xs text-gray-500 font-medium text-ellipsis overflow-hidden break-all bg-gray-50 gizmo:bg-white dark:bg-gray-900",
        ]);
        return (
          (X = function () {
            return e;
          }),
          e
        );
      }
      function K() {
        var e = (0, r._)([
          "absolute inset-y-0 right-0 w-8 z-10 bg-gradient-to-l\n",
          "",
        ]);
        return (
          (K = function () {
            return e;
          }),
          e
        );
      }
      function ee() {
        var e = (0, r._)([
          "absolute flex right-1 z-10 dark:text-gray-300 text-gray-800\n",
          "",
        ]);
        return (
          (ee = function () {
            return e;
          }),
          e
        );
      }
      function et() {
        var e = (0, r._)(["p-1 hover:text-white"]);
        return (
          (et = function () {
            return e;
          }),
          e
        );
      }
      var en = (0, k.vU)({
          historyBucketToday: {
            id: "history.bucket.today",
            defaultMessage: "Today",
            description: "Label for today's history bucket",
          },
          historyBucketYesterday: {
            id: "history.bucket.yesterday",
            defaultMessage: "Yesterday",
            description: "Label for yesterday's history bucket",
          },
          historyBucketLastSeven: {
            id: "history.bucket.lastSeven",
            defaultMessage: "Previous 7 Days",
            description: "Label for the history bucket of the previous 7 days",
          },
          historyBucketLastThirty: {
            id: "history.bucket.lastThirty",
            defaultMessage: "Previous 30 Days",
            description: "Label for the history bucket of the previous 30 days",
          },
          unableToLoadHistory: {
            id: "history.unableToLoad",
            defaultMessage: "Unable to load history",
            description: "Error message when history fails to load",
          },
          retryButton: {
            id: "history.retryButton",
            defaultMessage: "Retry",
            description: "Button to retry loading history",
          },
          showMoreButton: {
            id: "history.showMoreButton",
            defaultMessage: "Show more",
            description: "Button to show more history items",
          },
          deleteModalTitle: {
            id: "history.deleteModalTitle",
            defaultMessage: "Delete chat?",
            description:
              "Title of the modal to confirm deleting a conversation",
          },
          deleteModalBody: {
            id: "history.deleteModalBody",
            defaultMessage: "This will delete {title}.",
            description: "Body of the modal to confirm deleting a conversation",
          },
          deleteModalConfirm: {
            id: "history.deleteModalConfirm",
            defaultMessage: "Delete",
            description: "Button to confirm deleting a conversation",
          },
          deleteModalCancel: {
            id: "history.deleteModalCancel",
            defaultMessage: "Cancel",
            description: "Button to cancel deleting a conversation",
          },
        }),
        es = {
          initial: function (e) {
            return e.isNew ? { opacity: 0, height: 0, overflow: "hidden" } : {};
          },
          animate: function () {
            return { opacity: 1, height: "auto" };
          },
          exit: function () {
            return { opacity: 0, height: 0 };
          },
        };
      function ea(e) {
        var t,
          n,
          a = e.activeId,
          r = e.onNewThread,
          o = (0, _.Z)(),
          c = (0, i._)((0, M.useState)(!1), 2),
          y = c[0],
          b = c[1],
          j = (0, i._)((0, M.useState)(0), 2),
          w = j[0],
          k = j[1],
          N = (0, z.Z)(),
          F = (0, Y.MO)(),
          S = F.conversations,
          D = F.hasNextPage,
          T = F.fetchNextPage,
          B = F.isLoading,
          E = F.isFetchingNextPage,
          I = F.isError,
          L = (0, P.hz)().has(Z.DY),
          R = (0, M.useRef)(null),
          O = (0, M.useCallback)(
            function (e) {
              var t;
              L &&
                !B &&
                null != e &&
                (null === (t = R.current) || void 0 === t || t.disconnect(),
                (R.current = new IntersectionObserver(function (e) {
                  e[0].isIntersecting && D && T();
                })),
                R.current.observe(e));
            },
            [L, B, D, T]
          );
        (0, M.useEffect)(function () {
          return function () {
            var e;
            null === (e = R.current) || void 0 === e || e.disconnect();
          };
        }, []);
        var U = (0, Y.iF)();
        (0, Y.Od)();
        var W =
          ((t = (0, M.useRef)()),
          (n = (0, M.useRef)()),
          ((0, M.useEffect)(
            function () {
              (t.current = n.current), (n.current = S);
            },
            [S]
          ),
          S === n.current)
            ? t.current
            : n.current);
        (0, M.useEffect)(
          function () {
            N(function () {
              k(w + 1);
            }, (0, f.Z)((0, m.Z)(), Date.now()) + 1e3);
          },
          [w, N]
        );
        var H = 0 === S.length,
          q = (0, M.useMemo)(
            function () {
              return S.reduce(
                function (e, t) {
                  var n,
                    s,
                    a = new Date(
                      null !==
                        (s =
                          null !== (n = t.update_time) && void 0 !== n
                            ? n
                            : t.create_time) && void 0 !== s
                        ? s
                        : 0
                    ),
                    i = (0, d.Z)(new Date(), a);
                  if (0 === i) e.recent.today.items.push(t);
                  else if (i <= 1) e.recent.yesterday.items.push(t);
                  else if (i <= 7) e.recent.lastSeven.items.push(t);
                  else if (i <= 30) e.recent.lastThirty.items.push(t);
                  else if ((0, p.Z)(a)) {
                    var r = (0, g.Z)(a),
                      l = (0, h.Z)(a),
                      c = "".concat(r, "-").concat(l);
                    e.dynamicMonths[c]
                      ? e.dynamicMonths[c].items.push(t)
                      : (e.dynamicMonths[c] = {
                          label: o.formatDate(a, { month: "long" }),
                          items: [t],
                        });
                  } else {
                    var u = (0, g.Z)(a),
                      f = "".concat(u, "-");
                    e.dynamicYears[f]
                      ? e.dynamicYears[f].items.push(t)
                      : (e.dynamicYears[f] = {
                          label: o.formatDate(a, { year: "numeric" }),
                          items: [t],
                        });
                  }
                  return e;
                },
                {
                  recent: {
                    today: {
                      label: (0, l.jsx)(
                        C.Z,
                        (0, s._)({}, en.historyBucketToday)
                      ),
                      items: [],
                    },
                    yesterday: {
                      label: (0, l.jsx)(
                        C.Z,
                        (0, s._)({}, en.historyBucketYesterday)
                      ),
                      items: [],
                    },
                    lastSeven: {
                      label: (0, l.jsx)(
                        C.Z,
                        (0, s._)({}, en.historyBucketLastSeven)
                      ),
                      items: [],
                    },
                    lastThirty: {
                      label: (0, l.jsx)(
                        C.Z,
                        (0, s._)({}, en.historyBucketLastThirty)
                      ),
                      items: [],
                    },
                  },
                  dynamicMonths: {},
                  dynamicYears: {},
                }
              );
            },
            [w, S]
          );
        return (0, l.jsxs)(ei, {
          $centered: B || (I && H),
          children: [
            H && B && (0, l.jsx)($.Z, { className: "m-auto" }),
            H &&
              I &&
              (0, l.jsxs)("div", {
                className: "p-3 text-center italic text-gray-500",
                children: [
                  (0, l.jsx)(C.Z, (0, s._)({}, en.unableToLoadHistory)),
                  !y &&
                    (0, l.jsx)("div", {
                      className: "mt-1",
                      children: (0, l.jsx)(A.z, {
                        as: "button",
                        color: "dark",
                        size: "small",
                        className: "m-auto mt-2",
                        onClick: function () {
                          b(!0), U();
                        },
                        children: (0, l.jsx)(C.Z, (0, s._)({}, en.retryButton)),
                      }),
                    }),
                ],
              }),
            !B &&
              (0, l.jsx)("div", {
                children: (0, l.jsx)(x.M, {
                  initial: !1,
                  children: [q.recent, q.dynamicMonths, q.dynamicYears].flatMap(
                    function (e, t) {
                      return (0, l.jsx)(
                        "span",
                        {
                          children: Object.entries(e).map(function (e) {
                            var t = (0, i._)(e, 2),
                              n = t[0],
                              s = t[1],
                              o = s.items,
                              c = s.label;
                            if ("today" !== n && !o.length) return null;
                            var d = !!o.find(function (e) {
                              var t;
                              return (
                                S.length > 0 &&
                                e.id ===
                                  (null === (t = S[0]) || void 0 === t
                                    ? void 0
                                    : t.id)
                              );
                            });
                            return (0, l.jsxs)(
                              v.E.div,
                              {
                                className: "relative",
                                layoutId: "bucket-".concat(n),
                                layout: "position",
                                initial: {
                                  height: 0,
                                  opacity: 1,
                                  position: "relative",
                                },
                                animate: {
                                  height: "auto",
                                  opacity: 1,
                                  transition: { duration: 0.2, ease: "easeIn" },
                                },
                                children: [
                                  o.length > 0 &&
                                    (0, l.jsx)(v.E.div, {
                                      className: (0, u.default)(
                                        "sticky top-0",
                                        d ? "z-[16]" : "z-[14]"
                                      ),
                                      layoutId: "bucketTitle-".concat(n),
                                      layout: "position",
                                      children: (0, l.jsx)(ef, { children: c }),
                                    }),
                                  (0, l.jsx)("ol", {
                                    children: o.map(function (e, t) {
                                      var n = a === e.id,
                                        s =
                                          null == W
                                            ? void 0
                                            : W.find(function (t) {
                                                return t.id === e.id;
                                              });
                                      return (0,
                                      l.jsx)(v.E.li, { className: (0, u.default)("relative", d && 0 === t ? "z-[15]" : ""), layoutId: "".concat(e.id), layout: "position", custom: { isNew: !s }, variants: es, initial: "initial", animate: "animate", exit: "exit", children: (0, l.jsx)(er, { id: e.id, title: e.title, active: n, onNewThread: r, conversationTemplateId: e.conversation_template_id, forwardRef: D && S[S.length - 5 - 1].id === e.id ? O : void 0 }) }, "history-item-".concat(e.id));
                                    }),
                                  }),
                                ],
                              },
                              n
                            );
                          }),
                        },
                        "category-".concat(t)
                      );
                    }
                  ),
                }),
              }),
            L
              ? E &&
                (0, l.jsx)("div", {
                  className: "m-4 mb-5 flex justify-center",
                  children: (0, l.jsx)($.Z, {}),
                })
              : (0, l.jsx)(l.Fragment, {
                  children:
                    D &&
                    (0, l.jsx)(A.z, {
                      as: "button",
                      onClick: function () {
                        return T();
                      },
                      color: "dark",
                      className: "m-auto mb-2",
                      size: "small",
                      loading: E,
                      children: (0, l.jsx)(
                        C.Z,
                        (0, s._)({}, en.showMoreButton)
                      ),
                    }),
                }),
          ],
        });
      }
      var ei = N.Z.div(q(), function (e) {
        return e.$centered && "h-full justify-center items-center";
      });
      function er(e) {
        var t = e.id,
          n = e.title,
          s = e.active,
          a = e.onNewThread,
          r = e.forwardRef,
          d = e.conversationTemplateId,
          f = (0, T.w$)(),
          m = (0, j.useRouter)(),
          h = (0, i._)((0, M.useState)(!1), 2),
          g = h[0],
          p = h[1],
          x = (0, M.useRef)(null),
          v = (0, P.ec)(function (e) {
            return e.currentWorkspace;
          }),
          y = (0, Y.iF)(),
          k = (0, M.useCallback)(
            function (e) {
              var s, a;
              if (
                (null == e || e.preventDefault(),
                p(!1),
                (null === (s = x.current) || void 0 === s ? void 0 : s.value) &&
                  (null === (a = x.current) || void 0 === a
                    ? void 0
                    : a.value) !== n)
              ) {
                var i = x.current.value;
                F.ZP.patchConversation(t, { title: i }),
                  S.tQ.setTitle(t, i, S._L.User),
                  o.o.logEvent(c.a.renameThread, { threadId: t, content: i }),
                  y();
              }
            },
            [t, y, n]
          ),
          _ = (0, M.useCallback)(
            function (e) {
              "Enter" === e.key && k();
            },
            [k]
          ),
          C = (0, M.useCallback)(
            function () {
              F.ZP.patchConversation(t, { is_visible: !1 }).then(function () {
                y();
              }),
                a();
            },
            [t, a, y]
          ),
          N = (0, M.useCallback)(
            function (e) {
              R.hx.abortAllRequests(),
                e.preventDefault(),
                o.o.logEvent(c.a.loadThread, { threadId: t }),
                m.push((0, B.ZV)(t), void 0, { shallow: !0 });
            },
            [t, m]
          ),
          Z = (0, E.Z)(t, n, s),
          z = Z.resolvedTitle,
          A = Z.isTypingEffect,
          O = (0, H.Ml)()
            ? null != d && null != v
              ? (0, l.jsx)(L.Ao, {
                  workspaceId: v.id,
                  templateId: d,
                  iconSize: "small",
                  className: "gizmo:rounded",
                })
              : (0, l.jsx)("div", {
                  className: "flex h-4 w-4",
                  children: (0, l.jsx)("div", {
                    className:
                      "h-fit w-fit rounded-full border border-gray-200 p-[3px] dark:border-gray-700",
                    children: (0, l.jsx)(W.X, { className: "h-1.5 w-1.5" }),
                  }),
                })
            : (0, l.jsx)(w.IC0, { className: "icon-sm" });
        if (g)
          return (0, l.jsxs)(ec, {
            $active: s,
            children: [
              O,
              (0, l.jsx)(eu, {
                ref: x,
                type: "text",
                defaultValue: null != z ? z : "",
                autoFocus: !0,
                onKeyDown: _,
                className: "mr-0",
                onBlur: k,
              }),
              (0, l.jsxs)(eh, {
                $active: !0,
                children: [
                  (0, l.jsx)(eg, {
                    onClick: k,
                    children: (0, l.jsx)(w.UgA, { className: "icon-sm" }),
                  }),
                  (0, l.jsx)(eg, {
                    onClick: function (e) {
                      e.preventDefault(), p(!1);
                    },
                    children: (0, l.jsx)(w.q5L, { className: "icon-sm" }),
                  }),
                ],
              }),
            ],
          });
        var U = A && s && f;
        return (0, l.jsxs)(l.Fragment, {
          children: [
            s && (0, l.jsx)(el, { title: n, handleDelete: C }),
            (0, l.jsxs)(eo, {
              onClick: s ? b() : N,
              $active: s,
              className: (0, u.default)("group", U && "animate-flash"),
              ref: r,
              children: [
                O,
                (0, l.jsxs)(ed, {
                  children: [
                    U ? (0, l.jsx)(I.Z, { text: null != z ? z : "" }) : z,
                    (!A || !s) && (0, l.jsx)(em, { $active: s }),
                  ],
                }),
                s &&
                  (0, l.jsxs)(eh, {
                    $active: s,
                    children: [
                      (0, l.jsx)(eg, {
                        onClick: function (e) {
                          e.preventDefault(), p(!0);
                        },
                        children: (0, l.jsx)(w.Nte, { className: "icon-sm" }),
                      }),
                      (0, l.jsx)(eg, {
                        onClick: function () {
                          D.vm.openModal(D.B.DeleteChatConfirmation);
                        },
                        children: (0, l.jsx)(w.Ybf, { className: "icon-sm" }),
                      }),
                    ],
                  }),
              ],
            }),
          ],
        });
      }
      var el = function (e) {
          var t = e.handleDelete,
            n = e.title,
            i = (0, _.Z)(),
            r = (0, D.tN)(function (e) {
              return e.activeModals.has(D.B.DeleteChatConfirmation);
            }),
            o = function () {
              D.vm.closeModal(D.B.DeleteChatConfirmation);
            };
          return (0, l.jsx)(U.Z, {
            isOpen: r,
            onClose: o,
            type: "success",
            title: i.formatMessage(en.deleteModalTitle),
            primaryButton: (0, l.jsx)(O.ZP.Button, {
              title: i.formatMessage(en.deleteModalConfirm),
              color: "danger",
              onClick: function () {
                t(), o();
              },
            }),
            secondaryButton: (0, l.jsx)(O.ZP.Button, {
              title: i.formatMessage(en.deleteModalCancel),
              color: "neutral",
              onClick: o,
            }),
            children: (0, l.jsx)(
              C.Z,
              (0, a._)((0, s._)({}, en.deleteModalBody), {
                values: { title: (0, l.jsx)("strong", { children: n }) },
              })
            ),
          });
        },
        eo = N.Z.a(G(), function (e) {
          return e.$active
            ? "bg-gray-100 dark:bg-gray-800 pr-14 dark:hover:bg-gray-800"
            : "bg-gray-50 gizmo:bg-white gizmo:hover:bg-gray-100 hover:pr-4 dark:bg-gray-900";
        }),
        ec = N.Z.div(J(), function (e) {
          return e.$active
            ? "pr-14 bg-gray-100 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800"
            : "bg-gray-100 dark:bg-gray-900";
        }),
        eu = N.Z.input(V()),
        ed = N.Z.div(Q()),
        ef = N.Z.h3(X()),
        em = N.Z.div(K(), function (e) {
          return e.$active
            ? "dark:from-gray-800 from-gray-100"
            : "dark:from-gray-900 from-gray-50 gizmo:from-white group-hover:from-gray-100 dark:group-hover:from-[#2A2B32]";
        }),
        eh = N.Z.div(ee(), function (e) {
          return e.$active ? "visible" : "invisible group-hover:visible";
        }),
        eg = N.Z.button(et());
    },
    92720: function (e, t, n) {
      var s = n(39324),
        a = n(71209),
        i = n(70216),
        r = n(35250),
        l = n(47428),
        o = n(70079),
        c = n(89705),
        u = {
          Root: l.fC,
          Trigger: function (e) {
            return (0, r.jsx)(c.J7, (0, s._)({ $as: l.xz }, e));
          },
          Portal: l.Uv,
          Content: o.forwardRef(function (e) {
            var t;
            return (0,
            r.jsx)(c.ay, (0, a._)((0, s._)({}, e), { $as: l.VY, sideOffset: 4, align: null !== (t = e.align) && void 0 !== t ? t : "start" }));
          }),
          Item: o.forwardRef(function (e, t) {
            var n = e.children,
              o = e.onSelect,
              u = (0, i._)(e, ["children", "onSelect"]);
            return (0,
            r.jsx)(c.mS, (0, a._)((0, s._)({ $as: l.ck, ref: t, onSelect: o }, u), { children: n }));
          }),
        };
      t.Z = u;
    },
    67: function (e, t, n) {
      n.d(t, {
        X: function () {
          return i;
        },
      });
      var s = n(4337);
      function a() {
        var e = (0, s._)(["rounded-full bg-black dark:bg-gray-100"]);
        return (
          (a = function () {
            return e;
          }),
          e
        );
      }
      var i = n(21389).Z.div(a());
    },
    56932: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return eV;
        },
      });
      var s,
        a,
        i = n(39324),
        r = n(71209),
        l = n(22830),
        o = n(4337),
        c = n(35250),
        u = n(70596),
        d = n(32877),
        f = n(46020),
        m = n(78931),
        h = n(32542),
        g = n(32148),
        p = n(19841),
        x = n(44544),
        v = n(70079),
        y = n(1454),
        b = n(70671),
        j = n(32004),
        M = n(94968),
        w = n(21389),
        k = n(67273),
        _ = n(21722),
        C = n(81949),
        N = n(75883),
        F = n(75641),
        Z = n(95137),
        S = n(21817),
        D = n(74686),
        P = n(62509),
        T = n(56115),
        B = n(92720),
        E = n(79579),
        z = n(89368),
        I = n(55629),
        L = n(45635),
        A = n(1821);
      function R(e) {
        var t = e.accept,
          n = e.onFilePicked,
          s = e.loading,
          a = e.disabled,
          i = e.className,
          r = e.text,
          l = e.multiple,
          o = (0, v.useRef)(null),
          u = (0, v.useCallback)(function () {
            var e;
            null === (e = o.current) || void 0 === e || e.click();
          }, []),
          d = (0, v.useCallback)(
            function (e) {
              var t = e.target.files;
              t && t.length > 0 && (n(Array.from(t)), (e.target.value = ""));
            },
            [n]
          );
        return (0, c.jsxs)(c.Fragment, {
          children: [
            (0, c.jsx)(k.z, {
              onClick: u,
              disabled: a || s,
              color: "none",
              className: i,
              children: (0, c.jsxs)("div", {
                className: "flex items-center space-x-2",
                children: [
                  s
                    ? (0, c.jsx)(A.Z, { className: "h-4 w-4" })
                    : (0, c.jsx)(y.OvN, { className: "icon-sm" }),
                  r && (0, c.jsx)("span", { children: r }),
                ],
              }),
            }),
            (0, c.jsx)("input", {
              type: "file",
              accept: t,
              ref: o,
              className: "hidden",
              onChange: d,
              multiple: void 0 !== l && l,
            }),
          ],
        });
      }
      var O = n(63031),
        U = n(88798),
        W = n(5268),
        H = (0, M.vU)({
          errorLoadingFiles: {
            id: "filesModal.errorLoadingFiles",
            defaultMessage: "Failed to load files",
            description: "Error message when loading files fails",
          },
        }),
        $ = [
          "application/pdf",
          "text/plain",
          "text/markdown",
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
          "application/vnd.openxmlformats-officedocument.presentationml.presentation",
          "text/csv",
        ],
        Y = (0, M.vU)({
          myFiles: {
            id: "filesModal.myFiles",
            defaultMessage: "My Files",
            description: "Title for the files modal",
          },
          noFilesFound: {
            id: "filesModal.noFilesFound",
            defaultMessage: "No files found.",
            description: "Message displayed when no files are found",
          },
          uploadFile: {
            id: "filesModal.uploadFile",
            defaultMessage: "Upload File",
            description: "Label for the upload file button",
          },
          fileDownloadFailed: {
            id: "filesModal.fileDownloadFailed",
            defaultMessage: "File download failed. Please try again.",
            description: "Error message when file download fails",
          },
          fileDeleteFailed: {
            id: "filesModal.fileDeleteFailed",
            defaultMessage: "File delete failed. Please try again.",
            description: "Error message when file delete fails",
          },
          fileUploadFailed: {
            id: "filesModal.fileUploadFailed",
            defaultMessage: "File upload failed. Please try again.",
            description: "Error message when file upload fails",
          },
          fileUploaded: {
            id: "filesModal.fileUploaded",
            defaultMessage: "Uploaded file",
            description: "Success message when file is uploaded",
          },
          fileDeleted: {
            id: "filesModal.fileDeleted",
            defaultMessage: "File deleted",
            description: "Success message when file is deleted",
          },
          allFilesDeleted: {
            id: "filesModal.allFilesDeleted",
            defaultMessage: "All files deleted",
            description: "Success message when all files are deleted",
          },
          allFilesDeleteFailed: {
            id: "filesModal.allFilesDeletedFailed",
            defaultMessage: "All files delete failed. Please try again.",
            description: "Error message when all files delete fails",
          },
          confirmDeleteAll: {
            id: "filesModal.confirmDeleteAll",
            defaultMessage: "Are you sure you want to delete all files?",
            description: "Confirmation message for deleting all files",
          },
          downloadAll: {
            id: "filesModal.downloadAll",
            defaultMessage: "Download All",
            description: "Label for the download all button",
          },
          deleteAll: {
            id: "filesModal.deleteAll",
            defaultMessage: "Delete All",
            description: "Label for the delete all button",
          },
          name: {
            id: "filesModal.name",
            defaultMessage: "Name",
            description: "Label for the name column",
          },
          date: {
            id: "filesModal.date",
            defaultMessage: "Date",
            description: "Label for the date column",
          },
          size: {
            id: "filesModal.size",
            defaultMessage: "Size",
            description: "Label for the size column",
          },
          successfullyEmbeddedFileTooltip: {
            id: "filesModal.successfullyEmbeddedFileTooltip",
            defaultMessage: "Successfully processed file for searching",
            description: "Tooltip for the successfully embedded file icon",
          },
          failedToEmbedFileTooltip: {
            id: "filesModal.failedToEmbedFileTooltip",
            defaultMessage:
              "Failed to process file for searching,\nplease try deleting and re-uploading",
            description: "Tooltip for the failed to embed file icon",
          },
          embeddingFileTooltip: {
            id: "filesModal.embeddingFileTooltip",
            defaultMessage: "Processing file for searching...",
            description: "Tooltip for the embedding file icon",
          },
          deleteHistoryModalCancel: {
            id: "filesModal.deleteHistoryModalCancel",
            defaultMessage: "Cancel",
            description: "Label for the cancel button",
          },
          confirmDownloadAll: {
            id: "filesModal.confirmDownloadAll",
            defaultMessage: "Are you sure you want to download all files?",
            description: "Confirmation message for downloading all files",
          },
          confirmCancelDownloadAll: {
            id: "filesModal.confirmCancelDownloadAll",
            defaultMessage: "Cancel Download All",
            description:
              "Label for the cancel download all button in the confirmation modal",
          },
          tooManyFilesWithSameName: {
            id: "filesModal.tooManyFilesWithSameName",
            defaultMessage:
              "Too many files with the same name. Please rename your file.",
            description: "Error message when too many files have the same name",
          },
          tooManyFilesUploadedAtOnce: {
            id: "filesModal.tooManyFilesUploadedAtOnce",
            defaultMessage:
              "You can only upload up to {maxFiles} files at a time.",
            description:
              "Error message when too many files are uploaded at once",
          },
          totalFileSizeExceedsLimit: {
            id: "filesModal.totalFileSizeExceedsLimit",
            defaultMessage:
              "The total size of the files exceeds the limit of {maxSize}.",
            description:
              "Error message when the total file size exceeds the limit",
          },
          filesModalDescription: {
            id: "filesModal.filesModalDescription",
            defaultMessage:
              "Files can be used with the My Files Browsing model. {totalUploadedSize} / {maxFileSize} of storage used.",
            description: "Description for the files modal",
          },
        });
      ((s = a || (a = {})).Uploading = "uploading"), (s.Deleting = "deleting");
      var q = function (e, t) {
        for (
          var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 1e3,
            s = 1,
            a = e,
            i = e.lastIndexOf("."),
            r = i >= 0 ? e.slice(0, i) : e,
            l = i >= 0 ? e.slice(i) : "";
          t.find(function (e) {
            return e.name === a;
          }) && s <= n;

        )
          (a = "".concat(r, " (").concat(s, ")").concat(l)), s++;
        if (s > n) throw Error();
        return a;
      };
      function G(e) {
        var t = e.label,
          n = e.children;
        return (0, c.jsx)(L.u, {
          side: "top",
          size: "xsmall",
          sideOffset: 4,
          label: t,
          children: n,
        });
      }
      function J(e) {
        var t = e.file,
          n = e.refetch,
          s = e.handleFileDelete,
          i = e.handleFileDeleteFailed,
          r = e.session,
          l = e.downloadedFiles,
          o = e.setDownloadedFiles,
          u = (0, v.useMemo)(
            function () {
              return (0, T.Z)(new Date(t.ready_time), "MMM d, yyyy");
            },
            [t.ready_time]
          ),
          d = (0, v.useMemo)(
            function () {
              var e;
              return (e = t.size) < 1048576
                ? "".concat((e / 1024).toFixed(0), " KB")
                : "".concat((e / 1048576).toFixed(1), " MB");
            },
            [t.size]
          ),
          f = (0, b.Z)(),
          m = (0, O.O6)(),
          h = (0, v.useCallback)(
            (0, _._)(function () {
              return (0, N.Jh)(this, function (e) {
                switch (e.label) {
                  case 0:
                    return [4, m(t.id, t.name)];
                  case 1:
                    return e.sent() && o((0, C._)(l).concat([t.id])), [2];
                }
              });
            }),
            [t, l, o, m]
          ),
          g = (0, v.useCallback)(
            (0, _._)(function () {
              return (0, N.Jh)(this, function (e) {
                switch (e.label) {
                  case 0:
                    if (!r) return [2];
                    s(t), (e.label = 1);
                  case 1:
                    return (
                      e.trys.push([1, 4, , 5]),
                      [4, Z.ZP.deleteFileFromFileService(t.id)]
                    );
                  case 2:
                    return (
                      e.sent(),
                      U.m.success(f.formatMessage(Y.fileDeleted)),
                      [4, n()]
                    );
                  case 3:
                    return e.sent(), [3, 5];
                  case 4:
                    return (
                      e.sent(),
                      i(t),
                      U.m.danger(f.formatMessage(Y.fileDeleteFailed)),
                      [3, 5]
                    );
                  case 5:
                    return [2];
                }
              });
            }),
            [s, i, r, t, n, f]
          );
        return (0, c.jsxs)(I.Z.Row, {
          disabled: t.state === a.Uploading,
          children: [
            (0, c.jsx)(I.Z.Cell, {
              children: (0, c.jsxs)("div", {
                className: "inline-flex max-w-full gap-2 align-top",
                children: [
                  t.retrieval_index_status === F.Xf.Success
                    ? (0, c.jsx)(G, {
                        label: f.formatMessage(
                          Y.successfullyEmbeddedFileTooltip
                        ),
                        children: (0, c.jsx)(y._rq, {
                          className:
                            "icon-xs mt-1 flex-shrink-0 text-green-600",
                        }),
                      })
                    : t.retrieval_index_status === F.Xf.Failed
                    ? (0, c.jsx)(G, {
                        label: f.formatMessage(Y.failedToEmbedFileTooltip),
                        children: (0, c.jsx)(y.$Rx, {
                          className: "icon-xs mt-1 flex-shrink-0 text-red-500",
                        }),
                      })
                    : (0, c.jsx)(G, {
                        label: f.formatMessage(Y.embeddingFileTooltip),
                        children: (0, c.jsx)(A.Z, {
                          className:
                            "mt-1 flex-shrink-0 text-gray-500 dark:text-gray-100",
                        }),
                      }),
                  (0, c.jsx)("button", {
                    className: (0, p.default)(
                      l.includes(t.id)
                        ? "text-[#800080]"
                        : "hover:text-gray-900 dark:hover:text-gray-100",
                      "truncate whitespace-normal break-words text-left focus:outline-none"
                    ),
                    onClick: h,
                    children: (0, c.jsx)("span", { children: t.name }),
                  }),
                ],
              }),
            }),
            (0, c.jsx)(I.Z.Cell, {
              className: "align-top",
              children: t.state !== a.Uploading && u,
            }),
            (0, c.jsx)(I.Z.Cell, {
              className: "align-top",
              children: t.state !== a.Uploading && d,
            }),
            (0, c.jsx)(I.Z.Cell, {
              textAlign: "right",
              className: "align-top",
              children: (0, c.jsx)("div", {
                className: "flex justify-end space-x-2",
                children:
                  t.state !== a.Uploading &&
                  (0, c.jsxs)(c.Fragment, {
                    children: [
                      (0, c.jsx)("button", {
                        className: "text-gray-500 hover:text-gray-600",
                        onClick: h,
                        children: (0, c.jsx)(y._hL, { className: "icon-sm" }),
                      }),
                      (0, c.jsx)("button", {
                        className: "text-gray-500 hover:text-gray-600",
                        onClick: g,
                        children: (0, c.jsx)(y.Ybf, { className: "icon-sm" }),
                      }),
                    ],
                  }),
              }),
            }),
          ],
        });
      }
      function V() {
        var e,
          t,
          n,
          s,
          o,
          u,
          d,
          h = (0, b.Z)(),
          g =
            ((e = (0, m.hz)()),
            (t = (0, b.Z)()),
            (0, W.a)(
              ["files"],
              (0, _._)(function () {
                return (0, N.Jh)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return [
                        4,
                        Z.ZP.listFiles().catch(function () {
                          return (
                            U.m.danger(t.formatMessage(H.errorLoadingFiles)),
                            { files: [] }
                          );
                        }),
                      ];
                    case 1:
                      return [2, e.sent()];
                  }
                });
              }),
              { enabled: e.has("files_list_ui") }
            )),
          p = g.data,
          x = g.isLoading,
          M = g.refetch,
          w = (0, l._)((0, v.useState)([]), 2),
          k = w[0],
          T = w[1],
          L = (0, v.useRef)([]),
          G = (0, l._)((0, v.useState)([]), 2),
          V = G[0],
          Q = G[1],
          X = (0, S.Z)(),
          K = (0, P.kP)().session,
          ee = (0, v.useMemo)(
            function () {
              return null !== (d = null == p ? void 0 : p.files) && void 0 !== d
                ? d
                : [];
            },
            [p]
          ),
          et = (0, l._)((0, v.useState)([]), 2),
          en = et[0],
          es = et[1],
          ea = (0, l._)((0, v.useState)(!1), 2),
          ei = ea[0],
          er = ea[1],
          el = (0, l._)((0, v.useState)(!1), 2),
          eo = el[0],
          ec = el[1],
          eu = (0, O.qS)(),
          ed = (0, v.useCallback)(
            function () {
              f.vm.closeFilesModal(), k.length > 0 && M();
            },
            [M, k]
          ),
          ef = (0, D.D)({
            mutationFn: function (e) {
              return Z.ZP.uploadFileUsingFileService(e, F.Ei.MyFiles);
            },
            onMutate:
              ((n = (0, _._)(function (e) {
                return (0, N.Jh)(this, function (t) {
                  return [2, e];
                });
              })),
              function (e) {
                return n.apply(this, arguments);
              }),
            onSuccess:
              ((s = (0, _._)(function (e) {
                return (0, N.Jh)(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return [4, M()];
                    case 1:
                      return (
                        t.sent(),
                        U.m.success(h.formatMessage(Y.fileUploaded)),
                        L.current.push(e.file_id),
                        Q((0, C._)(L.current)),
                        [2]
                      );
                  }
                });
              })),
              function (e) {
                return s.apply(this, arguments);
              }),
            onError: function (e, t) {
              T(function (e) {
                return e.filter(function (e) {
                  return e.name !== t.name;
                });
              }),
                U.m.danger(h.formatMessage(Y.fileUploadFailed));
            },
          }),
          em = (0, v.useCallback)(
            ((o = (0, _._)(function (e) {
              var t;
              return (0, N.Jh)(this, function (n) {
                switch (n.label) {
                  case 0:
                    if (!K) return [2];
                    n.label = 1;
                  case 1:
                    return n.trys.push([1, 6, , 7]), [4, Z.ZP.getFileInfo(e)];
                  case 2:
                    if (
                      !(
                        (t = n.sent()).retrieval_index_status ===
                          F.Xf.Success ||
                        t.retrieval_index_status === F.Xf.Failed
                      )
                    )
                      return [3, 4];
                    return (
                      (L.current = L.current.filter(function (t) {
                        return t !== e;
                      })),
                      [4, M()]
                    );
                  case 3:
                    return n.sent(), [3, 5];
                  case 4:
                    X(function () {
                      return em(e);
                    }, 500),
                      (n.label = 5);
                  case 5:
                    return [3, 7];
                  case 6:
                    return (
                      n.sent(),
                      (L.current = L.current.filter(function (t) {
                        return t !== e;
                      })),
                      [3, 7]
                    );
                  case 7:
                    return [2];
                }
              });
            })),
            function (e) {
              return o.apply(this, arguments);
            }),
            [M, K, X]
          );
        (0, v.useEffect)(
          function () {
            L.current.length > 0 && em(L.current[L.current.length - 1]);
          },
          [V, em]
        );
        var eh = (0, v.useCallback)(
            (0, _._)(function () {
              var e;
              return (0, N.Jh)(this, function (t) {
                switch (t.label) {
                  case 0:
                    if (!K) return [2];
                    t.label = 1;
                  case 1:
                    return (
                      t.trys.push([1, 3, , 4]),
                      [
                        4,
                        eu(
                          (e = ee.filter(function (e) {
                            return e.use_case === F.Ei.MyFiles;
                          })),
                          30
                        ),
                      ]
                    );
                  case 2:
                    return (
                      t.sent(),
                      es(
                        (0, C._)(en).concat(
                          (0, C._)(
                            e.map(function (e) {
                              return e.id;
                            })
                          )
                        )
                      ),
                      [3, 4]
                    );
                  case 3:
                    return (
                      t.sent(),
                      U.m.danger(h.formatMessage(Y.fileDownloadFailed)),
                      [3, 4]
                    );
                  case 4:
                    return [2];
                }
              });
            }),
            [K, ee, h, en, es, eu]
          ),
          eg = (0, v.useCallback)(
            (0, _._)(function () {
              var e;
              return (0, N.Jh)(this, function (t) {
                switch (t.label) {
                  case 0:
                    if (
                      ((e = ee.map(function (e) {
                        return (0, r._)((0, i._)({}, e), { state: a.Deleting });
                      })),
                      !K)
                    )
                      return [2];
                    T((0, C._)(k).concat((0, C._)(e))), (t.label = 1);
                  case 1:
                    return (
                      t.trys.push([1, 4, , 5]),
                      [
                        4,
                        Promise.all(
                          e
                            .filter(function (e) {
                              return e.use_case === F.Ei.MyFiles;
                            })
                            .map(function (e) {
                              return Z.ZP.deleteFileFromFileService(e.id);
                            })
                        ),
                      ]
                    );
                  case 2:
                    return (
                      t.sent(),
                      U.m.success(h.formatMessage(Y.allFilesDeleted)),
                      [4, M()]
                    );
                  case 3:
                    return t.sent(), [3, 5];
                  case 4:
                    return (
                      t.sent(),
                      T([]),
                      U.m.danger(h.formatMessage(Y.allFilesDeleteFailed)),
                      [3, 5]
                    );
                  case 5:
                    return [2];
                }
              });
            }),
            [ee, k, K, h, M]
          ),
          ep = (0, v.useCallback)(function () {
            er(!0);
          }, []),
          ex = (0, v.useCallback)(function () {
            ec(!0);
          }, []),
          ev = (0, v.useCallback)(
            (0, _._)(function () {
              return (0, N.Jh)(this, function (e) {
                return er(!1), eg(), [2];
              });
            }),
            [eg]
          ),
          ey = (0, v.useCallback)(function () {
            er(!1);
          }, []),
          eb = (0, v.useCallback)(
            (0, _._)(function () {
              return (0, N.Jh)(this, function (e) {
                return ec(!1), eh(), [2];
              });
            }),
            [eh]
          ),
          ej = (0, v.useCallback)(function () {
            ec(!1);
          }, []),
          eM = (0, v.useCallback)(function (e, t) {
            return e.findIndex(function (e) {
              return e.name === t.name && e.state !== a.Uploading;
            });
          }, []),
          ew = (0, v.useCallback)(function (e) {
            var t = (0, r._)((0, i._)({}, e), { state: a.Deleting });
            T(function (e) {
              return (0, C._)(e).concat([t]);
            });
          }, []),
          ek = (0, v.useCallback)(function (e) {
            T(function (t) {
              return t.filter(function (t) {
                return t.name !== e.name;
              });
            });
          }, []),
          e_ = (0, v.useMemo)(
            function () {
              return (0, C._)(ee)
                .concat((0, C._)(k))
                .filter(function (e, t, n) {
                  if (e.use_case !== F.Ei.MyFiles) return !1;
                  e.retrieval_index_status === F.Xf.Success ||
                    e.retrieval_index_status === F.Xf.Failed ||
                    L.current.includes(e.id) ||
                    (L.current.push(e.id), Q((0, C._)(L.current)));
                  var s = eM(n, e);
                  return e.state === a.Uploading && -1 !== s
                    ? (T(function (t) {
                        return t.filter(function (t) {
                          return t.name !== e.name || t.state !== a.Uploading;
                        });
                      }),
                      !1)
                    : e.state === a.Deleting &&
                      -1 ===
                        n.findIndex(function (t) {
                          return t.name === e.name && t.state !== a.Deleting;
                        })
                    ? (T(function (t) {
                        return t.filter(function (t) {
                          return t.name !== e.name;
                        });
                      }),
                      !1)
                    : -1 ===
                      n.findIndex(function (t) {
                        return t.name === e.name && t.state === a.Deleting;
                      });
                })
                .sort(function (e, t) {
                  return (
                    new Date(t.ready_time).getTime() -
                    new Date(e.ready_time).getTime()
                  );
                });
            },
            [ee, eM, k]
          ),
          eC = (0, v.useMemo)(
            function () {
              return e_.reduce(function (e, t) {
                return e + (t.size || 0);
              }, 0);
            },
            [e_]
          ),
          eN = (0, v.useMemo)(
            function () {
              return eC / 1073741824;
            },
            [eC]
          ),
          eF = (0, v.useCallback)(
            ((u = (0, _._)(function (e) {
              var t, n, s, i, r, l, o, c, u, d;
              return (0, N.Jh)(this, function (f) {
                if (e.length > 10)
                  return (
                    U.m.warning(
                      h.formatMessage(Y.tooManyFilesUploadedAtOnce, {
                        maxFiles: 10,
                      })
                    ),
                    [2]
                  );
                (t = eC), (n = !0), (s = !1), (i = void 0);
                try {
                  for (
                    r = e[Symbol.iterator]();
                    !(n = (l = r.next()).done);
                    n = !0
                  ) {
                    if (((o = l.value), (t += o.size) > 2147483648)) {
                      U.m.warning(
                        h.formatMessage(Y.totalFileSizeExceedsLimit, {
                          maxSize: "".concat(2, "GB"),
                        })
                      );
                      break;
                    }
                    if (
                      ((c = o.name),
                      ee
                        .filter(function (e) {
                          return e.use_case === F.Ei.MyFiles;
                        })
                        .find(function (e) {
                          return e.name === c;
                        }))
                    )
                      try {
                        c = q(c, ee);
                      } catch (e) {
                        U.m.warning(
                          h.formatMessage(Y.tooManyFilesWithSameName)
                        );
                        break;
                      }
                    (u = {
                      id: "",
                      name: c,
                      ready_time: new Date().toISOString(),
                      use_case: F.Ei.MyFiles,
                      size: o.size,
                      state: a.Uploading,
                    }),
                      T(function (e) {
                        return (0, C._)(e).concat([u]);
                      }),
                      (d = new File([o], c, { type: o.type })),
                      ef.mutate(d);
                  }
                } catch (e) {
                  (s = !0), (i = e);
                } finally {
                  try {
                    n || null == r.return || r.return();
                  } finally {
                    if (s) throw i;
                  }
                }
                return [2];
              });
            })),
            function (e) {
              return u.apply(this, arguments);
            }),
            [ee, h, ef, eC]
          );
        return (0, c.jsxs)(c.Fragment, {
          children: [
            (0, c.jsxs)(z.Z, {
              isOpen: !0,
              onClose: ed,
              size: "custom",
              className: "max-w-5xl",
              type: "success",
              title: h.formatMessage(Y.myFiles),
              closeButton: (0, c.jsx)(E.ZP.CloseButton, { onClose: ed }),
              children: [
                x
                  ? (0, c.jsx)("div", {
                      className: "flex h-64 items-center justify-center",
                      children: (0, c.jsx)(A.Z, { className: "text-gray-500" }),
                    })
                  : e_.length > 0
                  ? (0, c.jsxs)("div", {
                      className: "flex flex-col",
                      children: [
                        (0, c.jsx)("div", {
                          className:
                            "mb-2 text-xs text-gray-600 dark:text-gray-300",
                          children: (0, c.jsx)(
                            j.Z,
                            (0, r._)((0, i._)({}, Y.filesModalDescription), {
                              values: {
                                totalUploadedSize: (0, c.jsx)("span", {
                                  className: "font-bold",
                                  children: "".concat(
                                    Number(eN).toPrecision(2),
                                    "GB"
                                  ),
                                }),
                                maxFileSize: "".concat(2, "GB"),
                              },
                            })
                          ),
                        }),
                        (0, c.jsxs)(I.Z.Root, {
                          className: "max-h-[28rem]",
                          fixed: !0,
                          size: "compact",
                          children: [
                            (0, c.jsxs)(I.Z.Header, {
                              children: [
                                (0, c.jsx)(I.Z.HeaderCell, {
                                  className:
                                    "max-w-8/12 w-8/12 dark:bg-gray-900",
                                  children: h.formatMessage(Y.name),
                                }),
                                (0, c.jsx)(I.Z.HeaderCell, {
                                  children: h.formatMessage(Y.date),
                                }),
                                (0, c.jsx)(I.Z.HeaderCell, {
                                  children: h.formatMessage(Y.size),
                                }),
                                (0, c.jsx)(I.Z.HeaderCell, {
                                  textAlign: "right",
                                  children: (0, c.jsxs)(B.Z.Root, {
                                    children: [
                                      (0, c.jsx)(B.Z.Trigger, {
                                        children: (0, c.jsx)(y.K9M, {
                                          className: "icon-sm",
                                        }),
                                      }),
                                      (0, c.jsx)(B.Z.Portal, {
                                        children: (0, c.jsxs)(B.Z.Content, {
                                          children: [
                                            (0, c.jsxs)(B.Z.Item, {
                                              onClick: ex,
                                              className: "flex gap-2",
                                              children: [
                                                (0, c.jsx)(y._hL, {
                                                  className: "icon-sm",
                                                }),
                                                (0, c.jsx)("span", {
                                                  children: h.formatMessage(
                                                    Y.downloadAll
                                                  ),
                                                }),
                                              ],
                                            }),
                                            (0, c.jsxs)(B.Z.Item, {
                                              onClick: ep,
                                              className: "flex gap-2",
                                              children: [
                                                (0, c.jsx)(y.Ybf, {
                                                  className: "icon-sm",
                                                }),
                                                (0, c.jsx)("span", {
                                                  children: h.formatMessage(
                                                    Y.deleteAll
                                                  ),
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                            (0, c.jsx)(I.Z.Body, {
                              children: e_.map(function (e, t) {
                                return (0,
                                c.jsx)(J, { file: e, refetch: M, handleFileDelete: ew, handleFileDeleteFailed: ek, session: K, downloadedFiles: en, setDownloadedFiles: es }, t);
                              }),
                            }),
                          ],
                        }),
                      ],
                    })
                  : (0, c.jsx)(j.Z, (0, i._)({}, Y.noFilesFound)),
                (0, c.jsx)(R, {
                  accept: $.join(","),
                  onFilePicked: eF,
                  loading: ef.isLoading,
                  disabled: ef.isLoading,
                  className:
                    "mt-4 flex items-center space-x-2 rounded bg-green-600 px-4 py-2 text-white",
                  text: h.formatMessage(Y.uploadFile),
                  multiple: !0,
                }),
              ],
            }),
            (0, c.jsx)(z.Z, {
              isOpen: ei,
              onClose: function () {
                return er(!1);
              },
              type: "danger",
              title: h.formatMessage(Y.confirmDeleteAll),
              primaryButton: (0, c.jsx)(E.ZP.Button, {
                title: h.formatMessage(Y.deleteAll),
                color: "danger",
                onClick: ev,
              }),
              secondaryButton: (0, c.jsx)(E.ZP.Button, {
                title: h.formatMessage(Y.deleteHistoryModalCancel),
                color: "neutral",
                onClick: ey,
              }),
            }),
            (0, c.jsx)(z.Z, {
              isOpen: eo,
              onClose: function () {
                return ec(!1);
              },
              type: "success",
              title: h.formatMessage(Y.confirmDownloadAll),
              primaryButton: (0, c.jsx)(E.ZP.Button, {
                title: h.formatMessage(Y.downloadAll),
                color: "primary",
                onClick: eb,
              }),
              secondaryButton: (0, c.jsx)(E.ZP.Button, {
                title: h.formatMessage(Y.confirmCancelDownloadAll),
                color: "neutral",
                onClick: ej,
              }),
            }),
          ],
        });
      }
      var Q = n(41230),
        X = n(13090),
        K = n(86273),
        ee = n(50795),
        et = n(82081),
        en = n(60554),
        es = n(35588),
        ea = n(97296),
        ei = n(16920);
      function er() {
        var e = (0, o._)([
          "group relative mb-1 rounded-md hover:[#0077FF] bg-[#0077FF] flex px-3 min-h-[44px] py-1 items-center gap-3 transition-colors duration-200 dark:text-white cursor-pointer text-sm",
        ]);
        return (
          (er = function () {
            return e;
          }),
          e
        );
      }
      function el(e) {
        var t = e.showFreeTrialLoadingPayment,
          n = e.handleGetPaymentLink,
          s = (0, b.Z)(),
          a = (0, W.a)(
            ["claimedReferralInvite"],
            function () {
              return Z.ZP.getClaimedReferralInvite();
            },
            {
              refetchOnMount: !1,
              refetchOnWindowFocus: !1,
              refetchInterval: !1,
              refetchOnReconnect: !1,
            }
          ),
          o = a.data,
          u = a.isLoading,
          d = a.isSuccess,
          f = null == o ? void 0 : o.invite_code,
          m = (0, l._)((0, v.useState)(!1), 2),
          h = m[0],
          g = m[1];
        if (
          ((0, v.useEffect)(
            function () {
              f &&
                !h &&
                d &&
                (g(!0),
                ei.m9.logEvent(
                  "chatgpt_referral_show_claimed_sidebar_menu_promo"
                ),
                ee.o.logEvent(
                  et.a.chatgptReferralShowClaimedSidebartMenuPromo
                ));
            },
            [f, g, h, d]
          ),
          !f || u || !d)
        )
          return null;
        var x = f.invite_metadata.invite_data,
          M = (null == x ? void 0 : x.referral_trial_duration_months)
            ? (null == x ? void 0 : x.referral_trial_duration_months) > 1
              ? s.formatMessage(ec.monthsOfBenefit, {
                  referralTrialDurationMonths:
                    null == x ? void 0 : x.referral_trial_duration_months,
                })
              : s.formatMessage(ec.daysOfBenefit, {
                  referralTrialDurationDays:
                    null == x ? void 0 : x.referral_trial_duration_days,
                })
            : null;
        return (0, c.jsx)(ea.E.div, {
          className: (0, p.default)("relative", {
            "cursor-progress opacity-50": t,
          }),
          layout: "position",
          initial: { y: -10, opacity: 1 },
          animate: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.1, ease: "easeIn" },
          },
          children: (0, c.jsxs)(eo, {
            className: (0, p.default)(t && "opacity-75"),
            onClick: function () {
              t || ((0, es.Vk)(!0), n());
            },
            children: [
              (0, c.jsxs)("div", {
                className:
                  "flex w-full flex-row items-center justify-start gap-3 ",
                children: [
                  (0, c.jsx)(y.E33, { className: "icon-sm shrink-0" }),
                  (0, c.jsx)(
                    j.Z,
                    (0, r._)((0, i._)({}, ec.freeTrialCta), {
                      values: { duration: M },
                    })
                  ),
                ],
              }),
              !t &&
                (0, c.jsx)(y.q5L, {
                  onClick: function (e) {
                    e.stopPropagation(), (0, es.zG)(!0), (0, es.H1)(!0);
                  },
                  className:
                    "icon-md shrink-0 rounded-full p-0.5 text-gray-400 opacity-50  transition-colors duration-200 hover:bg-[#0077FF] hover:text-red-500  group-hover:opacity-100",
                }),
              (0, c.jsx)("span", {
                className:
                  "absolute top-11 h-0 w-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-[#0077FF] transition-colors duration-200 group-hover:border-t-[#0077FF]",
              }),
            ],
          }),
        });
      }
      var eo = w.Z.a(er()),
        ec = (0, M.vU)({
          freeTrialCta: {
            id: "PaymentMenuItems.freeTrialCta",
            defaultMessage: "Get {duration}!",
            description: "Get free trial menu item",
          },
          monthsOfBenefit: {
            id: "FreeTrialMenuItem.monthsOfBenefit",
            defaultMessage:
              "{referralTrialDurationMonths, plural, one {one month free} other {# months free}}",
            description: "Duration of the referral trial benefits in months",
          },
          daysOfBenefit: {
            id: "FreeTrialMenuItem.daysOfBenefit",
            defaultMessage:
              "{referralTrialDurationDays, plural, one {one day free} other {# days free}}",
            description: "Duration of the referral trial benefits in days",
          },
        }),
        eu = n(15329),
        ed = n(21739),
        ef = n(38566);
      function em() {
        var e,
          t = (0, en.useRouter)(),
          n = (0, b.Z)(),
          s = (0, m.hz)(),
          a = (0, m.$T)(),
          r = (0, m.WY)(),
          l = (0, m.Zp)(),
          o =
            ((e = (0, _._)(function () {
              var e;
              return (0, N.Jh)(this, function (s) {
                switch (s.label) {
                  case 0:
                    (0, es.Vk)(!0),
                      ee.o.logEvent(et.a.clickAccountPaymentCheckout),
                      (s.label = 1);
                  case 1:
                    return (
                      s.trys.push([1, 3, 4, 5]), [4, Z.ZP.getCheckoutLink()]
                    );
                  case 2:
                    return (e = s.sent()), t.push(e.url), [3, 5];
                  case 3:
                    return (
                      s.sent(),
                      U.m.warning(n.formatMessage(eg.paymentErrorWarning), {
                        hasCloseButton: !0,
                      }),
                      (0, es.Vk)(!1),
                      [3, 5]
                    );
                  case 4:
                    return [7];
                  case 5:
                    return [2];
                }
              });
            })),
            function () {
              return e.apply(this, arguments);
            }),
          u = (0, es.tS)(function (e) {
            return e.didCloseFreeTrial;
          }),
          f = (0, es.tS)(function (e) {
            return e.showFreeTrialLoadingPayment;
          }),
          h = !u && l,
          g = !r && !s.has("disable_upgrade_ui"),
          p = (0, m.KQ)(),
          x = (0, ed.g)(function (e) {
            return e.flags.isUserInCanPayGroup;
          }),
          M = (0, m.ec)(m.F_.isBusinessWorkspace),
          w = (0, es.tS)(function (e) {
            return { setShowAccountPaymentModal: e.setShowAccountPaymentModal };
          }).setShowAccountPaymentModal,
          k = (0, v.useCallback)(
            function () {
              w(!0, function () {
                ee.o.logEvent(et.a.clickSidebarAccountPaymentMenuItem);
              });
            },
            [w]
          ),
          C = (0, ef.C)(function (e) {
            return { setShowReferralInviteModal: e.setShowReferralInviteModal };
          }).setShowReferralInviteModal,
          F = (0, v.useCallback)(
            function () {
              ei.m9.logEvent("chatgpt_referral_invite_sidebar_clicked"),
                ee.o.logEvent(et.a.chatgptReferralInviteSidebarClicked),
                C(!0, function () {
                  ee.o.logEvent(et.a.clickSidebarAccountPaymentMenuItem);
                });
            },
            [C]
          );
        return (0, c.jsxs)(c.Fragment, {
          children: [
            (s.has(d.a3) || r) && (0, c.jsx)(eh, { handleReferralInvite: F }),
            !r &&
              h &&
              (0, c.jsx)(el, {
                showFreeTrialLoadingPayment: f,
                handleGetPaymentLink: o,
              }),
            !a &&
              !1 === r &&
              x &&
              !M &&
              (0, c.jsx)(eu.Vq, {
                onClick: h
                  ? function () {
                      f || ((0, es.Vk)(!0), o());
                    }
                  : k,
                className: "rounded-md",
                children: (0, c.jsxs)("span", {
                  className:
                    "flex w-full flex-row flex-wrap-reverse justify-between",
                  children: [
                    (0, c.jsxs)("span", {
                      className: "gold-new-button flex items-center gap-3",
                      children: [
                        f
                          ? (0, c.jsx)(A.Z, { className: "icon-sm shrink-0" })
                          : (0, c.jsx)(y.fzv, {
                              className: "icon-sm shrink-0",
                            }),
                        p
                          ? (0, c.jsx)(j.Z, (0, i._)({}, eg.renewPlus))
                          : (0, c.jsx)(j.Z, (0, i._)({}, eg.upgradeToPlus)),
                      ],
                    }),
                    !s.has(d.a3) &&
                      g &&
                      !p &&
                      (0, c.jsx)("span", {
                        className:
                          "rounded-md bg-yellow-200 px-1.5 py-0.5 text-xs font-medium uppercase text-gray-800",
                        children: (0, c.jsx)(j.Z, (0, i._)({}, eg.newLabel)),
                      }),
                  ],
                }),
              }),
          ],
        });
      }
      var eh = function (e) {
          var t = e.handleReferralInvite,
            n = (0, m.hz)().has(d.a3),
            s = (0, W.a)(
              ["referralInvites"],
              function () {
                return Z.ZP.getEligibleReferralInvites();
              },
              { enabled: n }
            ),
            a = s.data,
            r = s.isSuccess,
            o =
              (null == a ? void 0 : a.invites_remaining) &&
              (null == a ? void 0 : a.invites_remaining) > 0 &&
              r,
            u = (0, l._)((0, v.useState)(!1), 2),
            f = u[0],
            h = u[1];
          return ((0, v.useEffect)(
            function () {
              o &&
                !f &&
                (h(!0),
                ei.m9.logEvent("chatgpt_referral_show_sidebar_menu_item"),
                ee.o.logEvent(et.a.chatgptReferralShowSidebarMenuItem));
            },
            [o, h, f]
          ),
          o)
            ? (0, c.jsx)(eu.Vq, {
                onClick: t,
                className: "rounded-md",
                children: (0, c.jsxs)("span", {
                  className:
                    "flex w-full flex-row flex-wrap-reverse justify-between",
                  children: [
                    (0, c.jsxs)("span", {
                      className: "gold-new-button flex items-center gap-3",
                      children: [
                        (0, c.jsx)(y.zy7, { className: "icon-sm shrink-0" }),
                        (0, c.jsx)(j.Z, (0, i._)({}, eg.inviteReferral)),
                      ],
                    }),
                    (0, c.jsx)("span", {
                      className:
                        "rounded-md bg-yellow-200 px-1.5 py-0.5 text-xs font-medium uppercase text-gray-800",
                      children: (0, c.jsx)(j.Z, (0, i._)({}, eg.newLabel)),
                    }),
                  ],
                }),
              })
            : null;
        },
        eg = (0, M.vU)({
          upgradeToPlus: {
            id: "PaymentMenuItems.upgradeToPlus",
            defaultMessage: "Upgrade to Plus",
            description: "Upgrade to Plus menu item",
          },
          renewPlus: {
            id: "PaymentMenuItems.renewPlus",
            defaultMessage: "Renew Plus",
            description: "Renew Plus menu item",
          },
          inviteReferral: {
            id: "PaymentMenuItems.inviteReferral",
            defaultMessage: "Refer a friend",
            description: "Invite referral menu item",
          },
          newLabel: {
            id: "PaymentMenuItems.newLabel",
            defaultMessage: "NEW",
            description: "Label for new features or items",
          },
          paymentErrorWarning: {
            id: "PaymentMenuItems.paymentErrorWarning",
            description: "Error toast when payment page has an error",
            defaultMessage:
              "The payments page encountered an error. Please try again. If the problem continues, please visit help.openai.com.",
          },
        }),
        ep = n(33669),
        ex = n(88809),
        ev = n(7813),
        ey = n(6948),
        eb = n(61888),
        ej = n(6038),
        eM = n(52696),
        ew = n(88327),
        ek = n(6013);
      function e_() {
        var e = (0, o._)([
          "bg-green-500 text-white py-0.5 px-1.5 text-[10px] leading-normal font-semibold rounded uppercase",
        ]);
        return (
          (e_ = function () {
            return e;
          }),
          e
        );
      }
      var eC = (0, M.vU)({
          title: {
            id: "customInstructionsAnnouncement.title",
            defaultMessage: "Set your Custom instructions",
            description:
              "Text displayed in tooltip announcing custom instructions",
          },
          new: {
            id: "customInstructionsAnnouncement.new",
            defaultMessage: "New",
            description: "New badge text",
          },
        }),
        eN = "oai/apps/announcement/customInstructions";
      function eF(e) {
        var t = e.children,
          n = function () {
            var e = Date.now();
            ey.m.setItem(eN, e), o(e);
          },
          s = (0, ep.w$)(),
          a = (0, l._)(
            (0, v.useState)(function () {
              var e = ey.m.getItem(eN);
              return "number" == typeof e && e;
            }),
            2
          ),
          r = a[0],
          o = a[1],
          u = (0, f.tN)(function (e) {
            return e.isDesktopNavCollapsed;
          }),
          h = (0, m.ec)(m.F_.isBusinessWorkspace),
          g = (0, m.hz)(),
          p = g.has(d.Rw) || g.has(d.uo),
          x = (0, v.useRef)(null);
        return (0, c.jsxs)(ek.fC, {
          open: !1 === h && p && !u && s && !1 === r,
          onOpenChange: function (e) {
            e || n();
          },
          children: [
            (0, c.jsx)(ek.xz, { asChild: !0, ref: x, children: t }),
            (0, c.jsx)(ek.h_, {
              children: (0, c.jsxs)(ek.VY, {
                side: "right",
                sideOffset: 16,
                onOpenAutoFocus: function (e) {
                  e.preventDefault();
                },
                onCloseAutoFocus: function (e) {
                  e.preventDefault();
                },
                onInteractOutside: function (e) {
                  var t;
                  e.target instanceof Element &&
                  (null === (t = x.current) || void 0 === t
                    ? void 0
                    : t.contains(e.target))
                    ? n()
                    : e.preventDefault();
                },
                className:
                  "relative animate-slideLeftAndFade select-none rounded-xl bg-gray-900 p-4 text-sm text-white shadow-sm dark:bg-gray-50 dark:text-gray-700",
                children: [
                  (0, c.jsx)("div", {
                    children: (0, c.jsxs)("div", {
                      className: "mb-0.5 flex items-center gap-2",
                      children: [
                        (0, c.jsx)(eZ, {
                          children: (0, c.jsx)(j.Z, (0, i._)({}, eC.new)),
                        }),
                        (0, c.jsx)("div", {
                          className: "font-medium",
                          children: (0, c.jsx)(j.Z, (0, i._)({}, eC.title)),
                        }),
                        (0, c.jsx)(ek.x8, {
                          className:
                            "-my-1 -mr-1 ml-1 p-1 opacity-70 transition hover:opacity-100",
                          children: (0, c.jsx)(y.q5L, { className: "icon-sm" }),
                        }),
                      ],
                    }),
                  }),
                  (0, c.jsx)(ek.Eh, {
                    asChild: !0,
                    children: (0, c.jsx)("div", {
                      className:
                        "relative top-[-6px] h-3 w-3 rotate-45 transform rounded-br-sm bg-gray-900 dark:bg-gray-50",
                    }),
                  }),
                ],
              }),
            }),
          ],
        });
      }
      var eZ = w.Z.span(e_()),
        eS = n(44513);
      function eD() {
        var e = (0, m.WY)(),
          t = (0, m.hz)(),
          n = (0, v.useCallback)(function () {
            ee.o.logEvent(et.a.clickSidebarAccountPortalMenuItem),
              f.vm.openModal(f.B.AccountPortal);
          }, []),
          s = t.has(d.Rw) || t.has(d.uo);
        return (0, c.jsxs)(c.Fragment, {
          children: [
            !0 === e &&
              (0, c.jsxs)(eu.ZP, {
                onClick: n,
                children: [
                  (0, c.jsx)(y.fzv, { className: "icon-sm shrink-0" }),
                  (0, c.jsx)(j.Z, (0, i._)({}, eP.myPlan)),
                ],
              }),
            s &&
              (0, c.jsxs)(eu.ZP, {
                onClick: function () {
                  return f.vm.openModal(f.B.UserContext);
                },
                children: [
                  (0, c.jsx)(ew.wP, { className: "h-4 w-4 shrink-0" }),
                  (0, c.jsx)(j.Z, (0, i._)({}, eP.chatPreferences)),
                ],
              }),
            !1,
          ],
        });
      }
      var eP = (0, M.vU)({
          myPlan: {
            id: "popoverNavigation.myPlan",
            defaultMessage: "My plan",
            description: "My plan menu item",
          },
          chatPreferences: {
            id: "popoverNavigation.chatPreferences",
            defaultMessage: "Custom instructions",
            description: "Custom instructions menu item",
          },
          myFiles: {
            id: "popoverNavigation.myFiles",
            defaultMessage: "My files",
            description: "Files menu item",
          },
        }),
        eT = n(57101),
        eB = n(9181),
        eE = n.n(eB);
      function ez() {
        var e = (0, m.hz)(),
          t = e.has(d.Rw) || e.has(d.uo);
        return (0, c.jsxs)(c.Fragment, {
          children: [
            (0, c.jsxs)(eI, {
              href: "/admin",
              children: [
                (0, c.jsx)(eT.Z, { className: "icon-sm" }),
                (0, c.jsx)(j.Z, (0, i._)({}, eL.myWorkspaceSettings)),
              ],
            }),
            e.has(d.L0.WorkspaceConversationTemplates) &&
              (0, c.jsxs)(eI, {
                href: "/templates",
                children: [
                  (0, c.jsx)(y.Wpg, { className: "icon-sm" }),
                  (0, c.jsx)(j.Z, (0, i._)({}, eL.templates)),
                ],
              }),
            t &&
              (0, c.jsxs)(eu.ZP, {
                onClick: function () {
                  return f.vm.openModal(f.B.UserContext);
                },
                children: [
                  (0, c.jsx)(ew.wP, { className: "h-4 w-4" }),
                  (0, c.jsx)(j.Z, (0, i._)({}, eL.chatPreferences)),
                ],
              }),
          ],
        });
      }
      function eI(e) {
        var t = e.href,
          n = e.children;
        return (0, c.jsx)(ev.v.Item, {
          children: function (e) {
            var s = e.active;
            return (0, c.jsx)(eE(), {
              href: t,
              children: (0, c.jsx)(eu.ZB, {
                $as: "span",
                className: (0, p.default)(
                  s
                    ? "bg-gray-100 dark:bg-gray-800"
                    : "cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800"
                ),
                children: n,
              }),
            });
          },
        });
      }
      var eL = (0, M.vU)({
        myWorkspaceSettings: {
          id: "workspacePopoverNavigation.myWorkspaceSettings",
          defaultMessage: "Workspace settings",
          description: "Workspace settings menu item",
        },
        templates: {
          id: "workspacePopoverNavigation.templates",
          defaultMessage: "Templates",
          description: "Template directory menu item",
        },
        chatPreferences: {
          id: "workspacePopoverNavigation.chatPreferences",
          defaultMessage: "Custom instructions",
          description: "Custom instructions menu item",
        },
      });
      function eA(e) {
        var t = e.onClickSettings;
        return (0, c.jsxs)(ev.v, {
          as: "div",
          className: "group relative",
          children: [
            (0, c.jsx)(eY, {}),
            (0, c.jsx)(eS.m, {
              children: (0, c.jsx)(ev.v.Items, {
                className:
                  "absolute bottom-full left-0 z-20 mb-1 w-full overflow-hidden rounded-md bg-white pb-1.5 pt-1 outline-none dark:bg-gray-950",
                children: (0, c.jsx)(e$, { onClickSettings: t }),
              }),
            }),
          ],
        });
      }
      function eR() {
        var e = (0, P.kP)().session,
          t = null == e ? void 0 : e.user;
        return t
          ? (0, c.jsxs)("div", {
              className: "px-3 py-2",
              children: [
                (0, c.jsx)("div", {
                  className:
                    "text-sm font-bold text-gray-600 dark:text-gray-400",
                  children: (0, c.jsx)(
                    j.Z,
                    (0, i._)({}, eG.accountSwitcherTitle)
                  ),
                }),
                (0, c.jsx)("div", {
                  className: "text-sm text-gray-400 dark:text-gray-600",
                  children: null == t ? void 0 : t.email,
                }),
              ],
            })
          : null;
      }
      function eO() {
        var e = (0, m.ec)(function (e) {
            return e.currentWorkspace;
          }),
          t = (0, b.Z)();
        return (0, c.jsxs)(c.Fragment, {
          children: [
            (0, c.jsx)(eR, {}),
            (0, c.jsxs)("div", {
              className:
                "flex w-full items-center justify-start gap-2 px-3 py-1",
              children: [
                (0, c.jsx)(ej.zf, { iconSize: "medium", workspace: e }),
                (0, c.jsx)("div", {
                  className: "flex-grow text-base dark:text-white",
                  children: (0, eM.CV)(t, e),
                }),
              ],
            }),
            (0, c.jsx)(eu.R, {}),
          ],
        });
      }
      function eU() {
        var e = (0, b.Z)(),
          t = (0, m.ec)(function (e) {
            return e.workspaces;
          }),
          n = (0, m.ec)(function (e) {
            return e.currentWorkspace;
          }),
          s = (0, l._)((0, v.useState)(!1), 2),
          a = s[0],
          i = s[1],
          r = (0, eb.compact)(
            [
              t.find(function (e) {
                return e.structure === F.CZ.PERSONAL;
              }),
            ].concat(
              (0, C._)(
                t.filter(function (e) {
                  return e.structure !== F.CZ.PERSONAL;
                })
              )
            )
          );
        return (
          r.sort(function (e, t) {
            return e.structure === F.CZ.PERSONAL
              ? 1
              : t.structure === F.CZ.PERSONAL
              ? -1
              : 0;
          }),
          (0, c.jsxs)(c.Fragment, {
            children: [
              (0, c.jsx)(eR, {}),
              (0, c.jsx)("div", {
                className: "flex w-full flex-col",
                children: r.map(function (t) {
                  return (0, c.jsx)(
                    eu.ZP,
                    {
                      onClick: function () {
                        t.id !== (null == n ? void 0 : n.id) &&
                          (i(!0), m.w_.setCurrentWorkspace(t), (0, ex.M)());
                      },
                      children: (0, c.jsxs)("div", {
                        className:
                          "flex w-full items-center justify-start gap-3 py-1",
                        children: [
                          (0, c.jsx)(ej.zf, {
                            iconSize: "small",
                            workspace: t,
                            className: "flex-shrink-0",
                          }),
                          (0, c.jsx)("div", {
                            className: "flex-grow truncate dark:text-white",
                            children: (0, eM.CV)(e, t),
                          }),
                          a
                            ? (0, c.jsx)(A.Z, {})
                            : (0, c.jsx)("div", {
                                className: (0, p.default)(
                                  "flex h-4 w-4 flex-shrink-0 rounded-full border align-middle",
                                  {
                                    "bg-white":
                                      t.id === (null == n ? void 0 : n.id),
                                  }
                                ),
                                children:
                                  t.id === (null == n ? void 0 : n.id) &&
                                  (0, c.jsx)(y.UgA, {
                                    className:
                                      "m-auto h-3 w-3 scale-x-75 stroke-black stroke-[4]",
                                  }),
                              }),
                        ],
                      }),
                    },
                    t.id
                  );
                }),
              }),
              (0, c.jsx)(eu.R, {}),
            ],
          })
        );
      }
      var eW = "oai/apps/hasSeenUserSurvey6_23";
      function eH() {
        var e = (0, b.Z)(),
          t = (0, ep.w$)(),
          n = (0, l._)((0, v.useState)(!1), 2),
          s = n[0],
          a = n[1],
          r = ey.m.getItem(eW);
        return s || r
          ? null
          : (0, c.jsx)("div", {
              className: "mx-1 mb-1 rounded-sm bg-[#0077FF]",
              children: (0, c.jsxs)("div", {
                className:
                  "flex flex-col items-center justify-stretch gap-3 p-3 text-sm text-white",
                children: [
                  (0, c.jsxs)("div", {
                    className: "flex w-full items-start",
                    children: [
                      (0, c.jsxs)("div", {
                        className: "flex-grow",
                        children: [
                          (0, c.jsx)("div", {
                            className: "font-bold",
                            children: (0, c.jsx)(
                              j.Z,
                              (0, i._)({}, eG.surveyTitle)
                            ),
                          }),
                          (0, c.jsx)("div", {
                            children: (0, c.jsx)(
                              j.Z,
                              (0, i._)({}, eG.surveyDescription)
                            ),
                          }),
                        ],
                      }),
                      (0, c.jsx)("button", {
                        className: "text-white/25 hover:text-white/40",
                        onClick: function () {
                          a(!0), ey.m.setItem(eW, !0);
                        },
                        "aria-label": e.formatMessage(eG.surveyDismiss),
                        children: (0, c.jsx)(ew.QF, {
                          width: t ? "20px" : "24px",
                          height: t ? "20px" : "24px",
                        }),
                      }),
                    ],
                  }),
                  (0, c.jsxs)("a", {
                    href: "https://openai.qualtrics.com/jfe/form/SV_7QmSGWHymCCmIxE",
                    target: "_blank",
                    className:
                      "flex w-full flex-row items-center justify-center gap-2 rounded-[4px] bg-white/25 p-2 hover:bg-white/40",
                    rel: "noreferrer",
                    onClick: function () {
                      ey.m.setItem(eW, !0), a(!0);
                    },
                    children: [
                      (0, c.jsx)(y.AlO, { className: "icon-sm" }),
                      (0, c.jsx)(j.Z, (0, i._)({}, eG.takeSurveyButton)),
                    ],
                  }),
                ],
              }),
            });
      }
      function e$(e) {
        var t = e.onClickSettings,
          n = (0, m.WY)(),
          s = (0, m.ec)(m.F_.isBusinessWorkspace),
          a = (0, m.hz)(),
          r = a.has(d.G_),
          l = (0, m.ec)(m.F_.hasMultipleWorkspaces),
          o = (0, ep.w$)(),
          u = a.has(d.rk);
        return (0, c.jsxs)("nav", {
          children: [
            r && (0, c.jsx)(eH, {}),
            l ? (0, c.jsx)(eU, {}) : s && (0, c.jsx)(eO, {}),
            s ? (0, c.jsx)(ez, {}) : (0, c.jsx)(eD, {}),
            (!u || !o) &&
              (0, c.jsxs)(eu.ZP, {
                as: "a",
                href: "https://help.openai.com/en/collections/3742473-chatgpt",
                target: "_blank",
                onClick: function () {
                  ee.o.logEvent(et.a.clickFaqLink);
                },
                children: [
                  (0, c.jsx)(y.AlO, { className: "icon-sm" }),
                  (0, c.jsx)(j.Z, (0, i._)({}, eG.helpAndFaq)),
                ],
              }),
            (0, c.jsxs)(eu.ZP, {
              onClick: t,
              children: [
                (0, c.jsx)(y.nbt, { className: "icon-sm" }),
                n
                  ? (0, c.jsx)(j.Z, (0, i._)({}, eG.settingsPlus))
                  : (0, c.jsx)(j.Z, (0, i._)({}, eG.settings)),
              ],
            }),
            (0, c.jsx)(eu.R, {}),
            (0, c.jsxs)(eu.ZP, {
              onClick: function () {
                ee.o.logEvent(et.a.clickLogOut, { eventSource: "mouse" }),
                  (0, P.w7)();
              },
              children: [
                (0, c.jsx)(y.xqh, { className: "icon-sm" }),
                (0, c.jsx)(j.Z, (0, i._)({}, eG.logOut)),
              ],
            }),
          ],
        });
      }
      function eY() {
        var e = (0, P.kP)().session;
        return (null == e ? void 0 : e.user) ? (0, c.jsx)(eq, {}) : null;
      }
      function eq() {
        var e = (0, eM.$3)(),
          t = (0, eM.cI)(),
          n = (0, m.ec)(m.F_.isBusinessWorkspace),
          s = (0, m.ec)(m.F_.hasMultipleWorkspaces);
        return (0, c.jsx)(eF, {
          children: (0, c.jsxs)(ev.v.Button, {
            className:
              "flex w-full items-center gap-3 rounded-md px-3 py-3 text-sm transition-colors duration-200 hover:bg-gray-100 group-ui-open:bg-gray-100 dark:hover:bg-gray-800 dark:group-ui-open:bg-gray-800",
            children: [
              (0, c.jsx)("div", {
                className: "flex-shrink-0",
                children: (0, c.jsx)(ej.zf, { iconSize: "medium" }),
              }),
              (0, c.jsxs)("div", {
                className:
                  "grow overflow-hidden text-ellipsis whitespace-nowrap text-left text-gray-700 dark:text-white",
                children: [
                  (0, c.jsx)("div", {
                    className: "font-semibold",
                    children: n ? e : t,
                  }),
                  (0, c.jsx)("div", {
                    className: "text-xs text-gray-500",
                    children: n ? t : s ? e : null,
                  }),
                ],
              }),
              (0, c.jsx)(y.K9M, {
                className: "icon-sm flex-shrink-0 text-gray-500",
              }),
            ],
          }),
        });
      }
      var eG = (0, M.vU)({
        helpAndFaq: {
          id: "navigation.helpAndFaq",
          defaultMessage: "Help & FAQ",
          description: "Help & FAQ menu item",
        },
        settings: {
          id: "navigation.settings",
          defaultMessage: "Settings",
          description: "Settings menu item",
        },
        settingsPlus: {
          id: "navigation.settingsPlus",
          defaultMessage: "Settings & Beta",
          description: "Settings menu item for Plus users",
        },
        logOut: {
          id: "navigation.logOut",
          defaultMessage: "Log out",
          description: "Log out menu item",
        },
        takeSurveyButton: {
          id: "navigation.survey.takeSurveyButton",
          defaultMessage: "Take survey",
          description: "Survey offer call to action",
        },
        surveyDismiss: {
          id: "navigation.surveyDismiss",
          defaultMessage: "Dismiss survey",
          description: "Survey offer dismiss button",
        },
        surveyDescription: {
          id: "navigation.surveyDescription",
          defaultMessage: "Shape the future of ChatGPT.",
          description: "Survey offer description",
        },
        surveyTitle: {
          id: "navigation.surveyTitle",
          defaultMessage: "We’d love to hear from you!",
          description: "Survey offer title",
        },
        accountSwitcherTitle: {
          id: "navigation.accountSwitcherTitle",
          defaultMessage: "Workspaces",
          description: "Account switcher title",
        },
        defaultWorkspaceTitle: {
          id: "useWorkspaces.defaultWorkspaceTitle",
          defaultMessage: "Untitled Workspace",
          description: "title for workspace without a name",
        },
      });
      function eJ() {
        var e = (0, o._)([
          "flex-col flex-1 transition-opacity duration-500 -mr-2 pr-2\n  ",
          "",
        ]);
        return (
          (eJ = function () {
            return e;
          }),
          e
        );
      }
      function eV(e) {
        var t = e.onDeleteHistory,
          n = e.onNewThread,
          s = e.children,
          a = (0, b.Z)(),
          o = (0, m.hz)(),
          M = o.has(d.Ue),
          w = (0, m.$T)(),
          _ = (0, l._)(
            (0, v.useState)(function () {
              var e = (0, x.getCookie)(u.Yl);
              return "string" == typeof e && e !== u.bC;
            }),
            1
          )[0],
          C = o.has(d.Rw) || o.has(d.uo),
          N = (0, m.ec)(m.F_.isBusinessWorkspace),
          F = (0, v.useRef)(null),
          Z = (0, v.useContext)(h.QL),
          S = Z.historyDisabled,
          D = Z.toggleHistoryDisabled,
          P = Z.getModifiedSettings,
          T = Z.unsetModifiedSettings,
          B = P(),
          E = (0, f.tN)(function (e) {
            return e.activeModals.has(f.B.Settings);
          }),
          z = (0, v.useCallback)(function () {
            f.vm.openModal(f.B.Settings);
          }, []),
          I = (0, v.useCallback)(
            function () {
              f.vm.closeModal(f.B.Settings), T();
            },
            [T]
          );
        (0, v.useEffect)(function () {
          B && f.vm.openModal(f.B.Settings);
        }, []);
        var L = (0, v.useCallback)(
            function () {
              n(), D();
            },
            [n, D]
          ),
          A = (0, c.jsxs)("div", {
            className: (0, p.default)(
              "absolute left-0 top-14 z-20 overflow-hidden transition-all duration-500",
              S ? "visible max-h-72" : "invisible max-h-0"
            ),
            children: [
              (0, c.jsxs)("div", {
                className: "bg-gray-900 px-4 py-3",
                children: [
                  (0, c.jsx)("div", {
                    className: "p-1 text-sm text-gray-100",
                    children: (0, c.jsx)(j.Z, (0, i._)({}, eX.chatHistoryOff)),
                  }),
                  (0, c.jsx)("div", {
                    className: "p-1 text-xs text-gray-500",
                    children: (0, c.jsx)(
                      j.Z,
                      (0, r._)(
                        (0, i._)(
                          {},
                          N
                            ? eX.chatHistoryOffDescriptionBusiness
                            : eX.chatHistoryOffDescription
                        ),
                        {
                          values: {
                            learnMore: (0, c.jsx)("a", {
                              href: "https://help.openai.com/en/articles/7730893",
                              target: "_blank",
                              className: "underline",
                              rel: "noreferrer",
                              children: (0, c.jsx)(
                                j.Z,
                                (0, i._)({}, eX.learnMore)
                              ),
                            }),
                            b: function (e) {
                              return (0, c.jsx)("strong", { children: e });
                            },
                          },
                        }
                      )
                    ),
                  }),
                  (0, c.jsxs)(k.z, {
                    className: "mt-4 w-full",
                    onClick: L,
                    color: "primary",
                    size: "medium",
                    children: [
                      (0, c.jsx)(y.$IY, { className: "icon-sm" }),
                      (0, c.jsx)(j.Z, (0, i._)({}, eX.enableChatHistory)),
                    ],
                  }),
                ],
              }),
              (0, c.jsx)("div", {
                className: "h-24 bg-gradient-to-t from-gray-900/0 to-gray-900",
              }),
            ],
          }),
          R = (0, f.tN)(function (e) {
            return e.isFilesModalOpen;
          });
        return (0, c.jsxs)(c.Fragment, {
          children: [
            (0, c.jsxs)("div", {
              className:
                "scrollbar-trigger relative h-full w-full flex-1 items-start border-white/20",
              children: [
                (0, c.jsx)(g.f, {
                  asChild: !0,
                  children: (0, c.jsx)("h2", {
                    children: (0, c.jsx)(
                      j.Z,
                      (0, i._)({}, eX.chatHistoryLabel)
                    ),
                  }),
                }),
                (0, c.jsxs)("nav", {
                  className: "flex h-full w-full flex-col p-2 gizmo:p-3",
                  "aria-label": a.formatMessage(eX.chatHistoryLabel),
                  children: [
                    (0, c.jsxs)("div", {
                      className: "mb-1 flex flex-row gap-2",
                      children: [
                        (0, c.jsxs)(X.MP, {
                          onClick: n,
                          className: "bg-white dark:bg-transparent",
                          children: [
                            S
                              ? (0, c.jsx)(y.Bw1, {
                                  className: "icon-sm shrink-0",
                                })
                              : (0, c.jsx)(y.OvN, {
                                  className: "icon-sm shrink-0",
                                }),
                            (0, c.jsx)("span", {
                              className: "truncate",
                              children: (0, c.jsx)(
                                j.Z,
                                (0, i._)({}, S ? eX.clearChat : eX.newChat)
                              ),
                            }),
                          ],
                        }),
                        M && (0, c.jsx)(X.H, {}),
                      ],
                    }),
                    A,
                    (0, c.jsx)(eQ, { ref: F, $disableScroll: S, children: s }),
                    _ && w
                      ? null
                      : (0, c.jsxs)("div", {
                          className:
                            "border-t border-black/20 pt-2 empty:hidden gizmo:border-token-border-light dark:border-white/20",
                          children: [
                            (0, c.jsx)(em, {}),
                            (0, c.jsx)(eA, { onClickSettings: z }),
                          ],
                        }),
                  ],
                }),
              ],
            }),
            E &&
              (0, c.jsx)(Q.ZP, {
                onClose: I,
                onToggleHistoryDisabled: n,
                onDeleteHistory: t,
              }),
            o.has("files_list_ui") && R && (0, c.jsx)(V, {}),
            C && (0, c.jsx)(K.wm, {}),
          ],
        });
      }
      var eQ = w.Z.div(eJ(), function (e) {
          return e.$disableScroll
            ? "overflow-y-hidden opacity-20 pointer-events-none"
            : "overflow-y-auto";
        }),
        eX = (0, M.vU)({
          chatHistoryLabel: {
            id: "NavigationContent.chatHistoryLabel",
            defaultMessage: "Chat history",
            description: "Chat history label heading",
          },
          chatHistoryOff: {
            id: "NavigationContent.chatHistoryOff",
            defaultMessage: "Chat History is off for this browser.",
            description: "Text indicating that chat history is turned off",
          },
          chatHistoryOffDescription: {
            id: "NavigationContent.chatHistoryOffDescription",
            defaultMessage:
              "When history is turned off, new chats on this browser won't appear in your history on any of your devices, be used to train our models, or stored for longer than 30 days. <b>This setting does not sync across browsers or devices.</b> {learnMore}",
            description: "Description for chat history being off",
          },
          chatHistoryOffDescriptionBusiness: {
            id: "NavigationContent.chatHistoryOffDescriptionBusiness",
            defaultMessage:
              "When history is turned off, new chats on this browser won't appear in your history on any of your devices, or stored for longer than 30 days. <b>This setting does not sync across browsers or devices.</b> {learnMore}",
            description: "Description for chat history being off",
          },
          learnMore: {
            id: "NavigationContent.learnMore",
            defaultMessage: "Learn more",
            description: "Learn more link text",
          },
          enableChatHistory: {
            id: "NavigationContent.enableChatHistory",
            defaultMessage: "Enable chat history",
            description: "Enable chat history button label",
          },
          clearChat: {
            id: "NavigationContent.clearChat",
            defaultMessage: "Clear chat",
            description: "Clear chat button label",
          },
          newChat: {
            id: "NavigationContent.newChat",
            defaultMessage: "New Chat",
            description: "New chat button label",
          },
        });
    },
    2166: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      var s = n(22830),
        a = n(70079),
        i = n(37469);
      function r(e, t, n) {
        var r = (0, i.XL)(e),
          l = r.title,
          o = r.titleSource,
          c = (0, s._)((0, a.useState)(!1), 2),
          u = c[0],
          d = c[1],
          f = null != l ? l : t,
          m = (0, a.useRef)(f);
        return (
          (0, a.useEffect)(
            function () {
              return (
                n && o === i._L.Generated && f !== m.current && d(!0),
                function () {
                  m.current = f;
                }
              );
            },
            [n, f, o]
          ),
          { isTypingEffect: u, resolvedTitle: f }
        );
      }
    },
    21817: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return a;
        },
      });
      var s = n(70079);
      function a() {
        var e = (0, s.useRef)([]),
          t = (0, s.useRef)(function (t, n) {
            var s = setTimeout(t, n);
            return e.current.push(s), s;
          });
        return (
          (0, s.useEffect)(function () {
            var t = e.current;
            return function () {
              t.forEach(function (e) {
                clearTimeout(e);
              });
            };
          }, []),
          t.current
        );
      }
    },
  },
]);
