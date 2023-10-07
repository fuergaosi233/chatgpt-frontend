"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8682],
  {
    95624: function (e, n, t) {
      t.r(n),
        t.d(n, {
          GizmoAccessToggle: function () {
            return r;
          },
        });
      var s = t(35250),
        l = t(67273),
        a = t(20522),
        i = t(78931);
      function r() {
        var e = (0, i.ec)(i.F_.isBusinessWorkspace),
          n = (0, a.bU)(a.rc.isGizmoUiManuallyDisabled);
        return e
          ? (0, s.jsx)(l.z, {
              size: "small",
              color: "neutral",
              onClick: function () {
                n ? a.lx.enableGizmoUI() : a.lx.disableGizmoUI();
              },
              children: (0, s.jsx)("span", {
                className: "text-xs",
                children: n ? "Use prototype" : "Switch to old UI",
              }),
            })
          : null;
      }
    },
    22179: function (e, n, t) {
      t.r(n),
        t.d(n, {
          GizmoConversationHeader: function () {
            return w;
          },
        });
      var s = t(39324),
        l = t(71209),
        a = t(22830),
        i = t(35250),
        r = t(6038),
        o = t(36338),
        d = t(64082),
        c = t(67273),
        u = t(45635),
        m = t(46020),
        x = t(78931),
        g = t(66085),
        f = t(47428),
        h = t(19841),
        p = t(60554),
        v = t(70079),
        b = t(1454),
        j = t(44548),
        y = t(89794);
      function w(e) {
        var n,
          t = e.clientThreadId,
          s = e.workspaceId,
          l = e.conversationTemplateId,
          c = (0, o.GS)(s, l, { includeDeleted: !0 }).data,
          u = (0, x.hz)().has("debug"),
          h = (0, m.tN)(function (e) {
            return e.isDesktopNavCollapsed;
          }),
          w = (0, p.useRouter)(),
          N = (0, x.ec)(x.F_.accountUserId),
          _ = (null == c ? void 0 : c.owner_id) === N,
          I = (0, g.xj)(null == c ? void 0 : c.id),
          C = (0, g.J8)(null == c ? void 0 : c.id),
          P = (0, a._)((0, v.useState)(!1), 2),
          T = P[0],
          S = P[1],
          z = (0, o.cH)(t),
          A = z.requiresPlugins && !z.isLoading;
        return null == c
          ? null
          : (0, i.jsxs)(y.QT, {
              $spaceForCollapsedSidebar: h,
              children: [
                T &&
                  (0, i.jsx)(j.Z, {
                    pluginIds:
                      null !== (n = null == c ? void 0 : c.config.plugin_ids) &&
                      void 0 !== n
                        ? n
                        : [],
                    onClose: function () {
                      return S(!1);
                    },
                  }),
                (0, i.jsxs)("div", {
                  className: "ml-2 flex items-center gap-2 text-lg",
                  children: [
                    (0, i.jsx)(y.i1, {
                      size: "large",
                      children: (0, i.jsx)(r.Py, {
                        conversationTemplate: c,
                        iconSize: "gizmoHeader",
                        className: "!rounded-lg",
                      }),
                    }),
                    c.name,
                  ],
                }),
                A &&
                  (0, i.jsx)(k, {
                    color: "danger",
                    onClick: function () {
                      return S(!0);
                    },
                    children: "Install required plugins",
                  }),
                (0, i.jsxs)("div", {
                  className: "flex gap-2",
                  children: [
                    (0, i.jsx)(k, {
                      disabled: !0,
                      children: (0, i.jsx)(b.A8q, { size: 20 }),
                    }),
                    (0, i.jsxs)(f.fC, {
                      children: [
                        (0, i.jsx)(f.xz, {
                          children: (0, i.jsx)(k, {
                            children: (0, i.jsx)(b.K9M, { size: 20 }),
                          }),
                        }),
                        (0, i.jsxs)(f.VY, {
                          className:
                            "min-w-10 rounded-lg border border-gray-100 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-900",
                          children: [
                            (0, i.jsxs)(y.UA, {
                              onSelect: function () {
                                w.push((0, o.l1)(c.id), void 0, {
                                  shallow: !0,
                                });
                              },
                              children: [
                                (0, i.jsx)(b.IC0, { size: 20 }),
                                "New Chat with ",
                                c.name,
                              ],
                            }),
                            _
                              ? (0, i.jsxs)(y.UA, {
                                  onSelect: function () {
                                    w.push(I, void 0, { shallow: !0 });
                                  },
                                  children: [
                                    (0, i.jsx)(b.IYd, { size: 20 }),
                                    "Edit GPT",
                                  ],
                                })
                              : (0, i.jsxs)(y.UA, {
                                  onSelect: function () {
                                    (0, d.O)(c.id);
                                  },
                                  children: [
                                    (0, i.jsx)(b.H33, { size: 20 }),
                                    "Inspect",
                                  ],
                                }),
                            (0, i.jsxs)(y.UA, {
                              onSelect: function () {
                                w.push(C, void 0, { shallow: !0 });
                              },
                              children: [
                                (0, i.jsx)(b.PJJ, { size: 20 }),
                                "Remix",
                              ],
                            }),
                            u &&
                              (0, i.jsxs)(y.UA, {
                                onSelect: function () {
                                  m.vm.toggleActiveSidebar("debug");
                                },
                                children: [
                                  (0, i.jsx)(b.cDN, { size: 20 }),
                                  "Debug",
                                ],
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
      function k(e) {
        var n = (0, i.jsx)(
          c.z,
          (0, l._)((0, s._)({ color: "neutral", size: "small" }, e), {
            className: (0, h.default)(
              "h-10 rounded-lg border border-[rgba(0,0,0,.15)] bg-white px-3 py-2 shadow-[0_1px_1px_0_rgba(0,0,0,0.08)]",
              e.className
            ),
          })
        );
        return null != e.label
          ? (0, i.jsx)(u.u, {
              side: "left",
              label: e.label,
              className: "h-fit w-fit",
              children: n,
            })
          : n;
      }
    },
    66369: function (e, n, t) {
      t.d(n, {
        V: function () {
          return eu;
        },
      });
      var s,
        l,
        a,
        i,
        r = t(21722),
        o = t(39324),
        d = t(71209),
        c = t(22830),
        u = t(4337),
        m = t(75883),
        x = t(35250),
        g = t(36338),
        f = t(64082),
        h = t(4585),
        p = t(67273),
        v = t(79579),
        b = t(89368),
        j = t(58659),
        y = t(14444),
        w = t(1821),
        k = t(88798),
        N = t(42569),
        _ = t(37469),
        I = t(78931),
        C = t(52378),
        P = t(61888),
        T = t(60554),
        S = t(70079),
        z = t(1454),
        A = t(21389),
        G = t(62759),
        Z = t(19841),
        D = t(81949),
        M = t(2864),
        F = t(52478);
      function O(e) {
        var n = e.onAddPluginId,
          t = e.selectedPluginIds,
          s = (0, c._)((0, S.useState)(""), 2),
          l = s[0],
          a = s[1],
          i = (0, F.ZP)({ pageSize: 10, filter: F.JF.All, query: l, page: 0 }),
          r = i.isLoading,
          o = i.items;
        return (0, x.jsxs)("div", {
          children: [
            (0, x.jsx)("label", {
              className: "mb-2 block",
              children: "Add a plugin",
            }),
            (0, x.jsxs)("div", {
              className: "relative",
              children: [
                (0, x.jsx)("input", {
                  type: "text",
                  value: l,
                  onChange: function (e) {
                    return a(e.target.value);
                  },
                  className: "block w-full rounded dark:bg-gray-800",
                }),
                r && (0, x.jsx)(w.Z, { className: "absolute right-3 top-3" }),
              ],
            }),
            l.length > 0 &&
              o &&
              (0, x.jsx)("ul", {
                className: "mt-4 space-y-1",
                children: o
                  .filter(function (e) {
                    return !t.includes(e.id);
                  })
                  .map(function (e) {
                    return (0, x.jsxs)(
                      "li",
                      {
                        className: "my-0.5 flex gap-2",
                        children: [
                          (0, x.jsx)("button", {
                            type: "button",
                            onClick: function () {
                              return n(e.id);
                            },
                            className:
                              "flex h-6 w-6 items-center justify-center rounded border bg-green-500 font-semibold text-white hover:text-green-700 dark:border-black dark:text-black",
                            children: (0, x.jsx)(z.OvN, {}),
                          }),
                          (0, x.jsx)("span", {
                            className: "truncate text-ellipsis",
                            children: e.manifest.name_for_human,
                          }),
                        ],
                      },
                      e.id
                    );
                  }),
              }),
          ],
        });
      }
      function U(e) {
        var n = e.pluginIds,
          t = e.setPluginIds,
          s = e.onClose;
        return (0, x.jsx)(b.Z, {
          isOpen: !0,
          onClose: s,
          type: "success",
          title: "Add Plugin",
          children: (0, x.jsx)(O, {
            onAddPluginId: function (e) {
              return t((0, D._)(n).concat([e]));
            },
            selectedPluginIds: n,
          }),
        });
      }
      function B(e) {
        var n = e.pluginIds,
          t = e.setPluginIds,
          s = (0, M.K)(n),
          l = s.plugins,
          a = s.isLoading,
          i = (0, c._)((0, S.useState)(!1), 2),
          r = i[0],
          o = i[1];
        return (0, x.jsxs)("div", {
          children: [
            (0, x.jsxs)("div", {
              className: "mb-2 font-medium",
              children: ["Plugins (", n.length, " Enabled)"],
            }),
            a
              ? (0, x.jsx)(w.Z, {})
              : l.length > 0
              ? (0, x.jsx)("ul", {
                  className: "mb-3 space-y-1",
                  children: l.map(function (e) {
                    return (0, x.jsxs)(
                      "li",
                      {
                        className: "my-0.5 flex items-center gap-2 text-sm",
                        children: [
                          (0, x.jsx)("button", {
                            type: "button",
                            onClick: function () {
                              return t(
                                n.filter(function (n) {
                                  return n !== e.id;
                                })
                              );
                            },
                            className:
                              "flex h-6 w-6 items-center justify-center rounded border bg-red-500 font-semibold text-white hover:text-red-700 dark:border-black dark:text-black",
                            children: (0, x.jsx)(z.q5L, {}),
                          }),
                          (0, x.jsx)("span", {
                            className: "truncate text-ellipsis",
                            children: e.manifest.name_for_human,
                          }),
                        ],
                      },
                      e.id
                    );
                  }),
                })
              : null,
            (0, x.jsx)(p.z, {
              type: "button",
              color: "neutral",
              size: "large",
              onClick: function () {
                o(!0);
              },
              children: "Add Plugin",
            }),
            r &&
              (0, x.jsx)(U, {
                pluginIds: n,
                setPluginIds: t,
                onClose: function () {
                  o(!1);
                },
              }),
          ],
        });
      }
      ((s = a || (a = {})).GPT_3_5 = "gpt_3.5"),
        (s.GPT_4 = "gpt_4"),
        ((l = i || (i = {})).Default = "default_model"),
        (l.DallE = "dalle"),
        (l.Browsing = "browsing_model"),
        (l.Code = "code_interpreter_model"),
        (l.Plugins = "plugins_model");
      var E = "gpt-4-dalle";
      function L(e) {
        var n = e.label,
          t = e.disabled,
          s = void 0 !== t && t,
          l = e.value,
          a = (0, S.useId)();
        return (0, x.jsxs)("div", {
          className: (0, Z.default)(
            "flex items-center gap-2",
            s ? "opacity-50" : ""
          ),
          children: [
            (0, x.jsx)(G.ck, {
              id: a,
              value: l,
              disabled: s,
              className:
                "flex h-5 w-5 items-center justify-center rounded-full border border-token-border-medium bg-white",
              children: (0, x.jsx)(G.z$, {
                className: "h-2 w-2 rounded-full bg-gray-700",
              }),
            }),
            (0, x.jsx)("label", {
              htmlFor: a,
              className: "cursor-pointer text-sm",
              children: n,
            }),
          ],
        });
      }
      function W(e) {
        var n,
          t = e.modelSlug,
          s = e.onModelChange,
          l = e.pluginIds,
          r = e.onPluginIdsChange,
          o = (0, N.OX)(),
          d = o.find(function (e) {
            return e.category === a.GPT_3_5;
          }),
          u = o.find(function (e) {
            return e.category === a.GPT_4;
          }),
          m = (0, c._)(
            null !==
              (n = (function (e, n) {
                if ("gpt-4-dalle" === e) return [a.GPT_4, i.DallE];
                var t = !0,
                  s = !1,
                  l = void 0;
                try {
                  for (
                    var r, o = n[Symbol.iterator]();
                    !(t = (r = o.next()).done);
                    t = !0
                  ) {
                    var d = r.value,
                      c = !0,
                      u = !1,
                      m = void 0;
                    try {
                      for (
                        var x, g = Object.values(i)[Symbol.iterator]();
                        !(c = (x = g.next()).done);
                        c = !0
                      ) {
                        var f = x.value;
                        if (f !== i.DallE && d[f] === e) return [d.category, f];
                      }
                    } catch (e) {
                      (u = !0), (m = e);
                    } finally {
                      try {
                        c || null == g.return || g.return();
                      } finally {
                        if (u) throw m;
                      }
                    }
                  }
                } catch (e) {
                  (s = !0), (l = e);
                } finally {
                  try {
                    t || null == o.return || o.return();
                  } finally {
                    if (s) throw l;
                  }
                }
              })(t, o)) && void 0 !== n
              ? n
              : [a.GPT_4, i.Default],
            2
          ),
          g = m[0],
          f = m[1];
        return (0, x.jsxs)("div", {
          children: [
            (0, x.jsxs)("div", {
              className: "mb-4",
              children: [
                (0, x.jsx)("div", {
                  className: "mb-2 font-medium",
                  children: "Model",
                }),
                (0, x.jsxs)(G.fC, {
                  value: g,
                  onValueChange: function (e) {
                    switch (e) {
                      case a.GPT_3_5:
                        s(d[f === i.DallE ? i.Default : f]);
                        break;
                      case a.GPT_4:
                        s(f === i.DallE ? E : u[f]);
                    }
                  },
                  className: "space-y-1.5",
                  children: [
                    (0, x.jsx)(L, { label: "GPT-3.5", value: a.GPT_3_5 }),
                    (0, x.jsx)(L, { label: "GPT-4", value: a.GPT_4 }),
                  ],
                }),
              ],
            }),
            (0, x.jsxs)("div", {
              children: [
                (0, x.jsx)("div", {
                  className: "mb-2 font-medium",
                  children: "Abilities",
                }),
                (0, x.jsxs)(G.fC, {
                  value: f,
                  onValueChange: function (e) {
                    e === i.DallE ? s(E) : s(g === a.GPT_3_5 ? d[e] : u[e]);
                  },
                  className: "space-y-1.5",
                  children: [
                    (0, x.jsx)(L, { label: "Default", value: i.Default }),
                    (0, x.jsx)(L, {
                      label: "Dall\xb7e Image Generation",
                      value: i.DallE,
                      disabled: g === a.GPT_3_5,
                    }),
                    (0, x.jsx)(L, { label: "Web Browsing", value: i.Browsing }),
                    (0, x.jsx)(L, { label: "Coding Sandbox", value: i.Code }),
                    (0, x.jsx)(L, { label: "Plugins", value: i.Plugins }),
                  ],
                }),
                f === i.Plugins &&
                  (0, x.jsx)("div", {
                    className: "mt-4",
                    children: (0, x.jsx)(B, {
                      pluginIds: l,
                      setPluginIds: function (e) {
                        r(e);
                      },
                    }),
                  }),
              ],
            }),
          ],
        });
      }
      var R = t(44548),
        q = t(9181),
        J = t.n(q),
        V = t(6038);
      function Y(e) {
        var n,
          t = e.workspaceId,
          s = e.conversationTemplate,
          l = (0, T.useRouter)(),
          a = null != s ? "/gizmo/editor?id=".concat(s.id) : "/gizmo/editor",
          i = l.asPath === a;
        return (0, x.jsxs)(J(), {
          href: a,
          shallow: !0,
          className: (0, Z.default)(
            "flex items-center gap-2 rounded-lg p-2 text-sm",
            i
              ? "bg-gray-100 dark:bg-gray-700"
              : "hover:bg-gray-50 dark:hover:bg-gray-700"
          ),
          children: [
            null != s
              ? (0, x.jsx)(V.Ao, {
                  workspaceId: t,
                  templateId: s.id,
                  iconSize: "small",
                })
              : (0, x.jsx)("div", {
                  className:
                    "flex h-4 w-4 items-center justify-center rounded-sm bg-gray-300 dark:bg-gray-600",
                  children: (0, x.jsx)(z.OvN, {
                    className: "icon-xs text-white",
                  }),
                }),
            null !== (n = null == s ? void 0 : s.name) && void 0 !== n
              ? n
              : "New GPT",
          ],
        });
      }
      function H(e) {
        var n = e.workspaceId,
          t = (0, g.Ym)(n).data;
        return (0, x.jsxs)("div", {
          className: "w-64 flex-shrink-0 border-r border-token-border-light",
          children: [
            (0, x.jsx)("div", {
              className: "p-5 text-2xl font-medium",
              children: "My GPTs",
            }),
            (0, x.jsxs)("div", {
              className: "space-y-0.5 px-3",
              children: [
                (0, x.jsx)(Y, { workspaceId: n, conversationTemplate: void 0 }),
                null == t
                  ? void 0
                  : t.items.map(function (e) {
                      return (0,
                      x.jsx)(Y, { workspaceId: n, conversationTemplate: e }, e.id);
                    }),
              ],
            }),
          ],
        });
      }
      function K() {
        var e = (0, u._)(["mb-6"]);
        return (
          (K = function () {
            return e;
          }),
          e
        );
      }
      function Q() {
        var e = (0, u._)([
          "w-full text-sm overflow-y-auto rounded border bg-transparent px-3 py-2 focus:ring-2 focus:ring-blue-400 dark:border-gray-900 dark:bg-gray-700",
        ]);
        return (
          (Q = function () {
            return e;
          }),
          e
        );
      }
      function X() {
        var e = (0, u._)(["text-sm text-red-500"]);
        return (
          (X = function () {
            return e;
          }),
          e
        );
      }
      var $ = A.Z.div(K());
      function ee(e) {
        var n = e.label,
          t = e.description;
        return (0, x.jsxs)("div", {
          className: "mb-1",
          children: [
            (0, x.jsx)("label", {
              className: "block font-medium text-token-text-primary",
              children: n,
            }),
            null != t
              ? (0, x.jsx)("div", {
                  className: "text-md mb-2 text-sm text-token-text-tertiary",
                  children: t,
                })
              : null,
          ],
        });
      }
      function en(e) {
        var n = e.value,
          t = e.icon,
          s = e.label;
        return (0, x.jsxs)(C.ck, {
          value: n,
          className:
            "inline-flex items-center gap-2 bg-gray-100 px-3 py-2 text-sm radix-state-on:bg-green-600 radix-state-on:text-white dark:bg-gray-500 dark:radix-state-on:bg-green-600",
          children: [(0, x.jsx)(t, { className: "icon-sm" }), s],
        });
      }
      function et(e) {
        var n = e.value,
          t = e.onValueChange;
        return (0, x.jsxs)(C.fC, {
          type: "single",
          value: n,
          onValueChange: t,
          className: "inline-flex overflow-hidden rounded",
          children: [
            (0, x.jsx)(en, { value: "private", icon: z.UIZ, label: "Private" }),
            (0, x.jsx)(en, {
              value: "published",
              icon: z._rq,
              label: "Published",
            }),
          ],
        });
      }
      function es(e) {
        var n = e.onDelete,
          t = e.onClose;
        return (0, x.jsx)(b.Z, {
          isOpen: !0,
          onClose: t,
          type: "danger",
          title: "Delete chat template",
          primaryButton: (0, x.jsx)(v.ZP.Button, {
            title: "Delete template",
            color: "danger",
            onClick: function () {
              n();
            },
          }),
          secondaryButton: (0, x.jsx)(v.ZP.Button, {
            title: "Cancel",
            color: "neutral",
            onClick: t,
          }),
          children: (0, x.jsx)("div", {
            className: "text-sm",
            children:
              "Are you sure you want to delete this template? This cannot be undone.",
          }),
        });
      }
      function el(e) {
        var n = e.workspaceId,
          t = e.conversationTemplate,
          s = (0, g.Zv)(n),
          l = (0, c._)((0, S.useState)(!1), 2),
          a = l[0],
          i = l[1],
          o = (0, T.useRouter)();
        return (0, x.jsxs)(x.Fragment, {
          children: [
            (0, x.jsxs)(p.z, {
              type: "button",
              onClick: function () {
                i(!0);
              },
              disabled: s.isLoading,
              color: "danger-outline",
              children: [
                (0, x.jsx)(z.Ybf, { className: "icon-sm" }),
                "Delete template",
              ],
            }),
            a &&
              (0, x.jsx)(es, {
                onDelete: (0, r._)(function () {
                  return (0, m.Jh)(this, function (e) {
                    switch (e.label) {
                      case 0:
                        return [
                          4,
                          s.mutateAsync({ conversationTemplateId: t.id }),
                        ];
                      case 1:
                        return (
                          e.sent(),
                          k.m.success("Chat template deleted", { duration: 3 }),
                          o.push("/templates", void 0, { shallow: !0 }),
                          [2]
                        );
                    }
                  });
                }),
                onClose: function () {
                  i(!1);
                },
              }),
          ],
        });
      }
      function ea(e) {
        var n,
          t,
          s,
          l,
          a,
          i,
          o,
          d,
          u,
          f = e.conversationTemplate,
          h = e.workspaceId,
          v = e.configContextMessage,
          b = e.setConfigContextMessage,
          y = e.configAssistantWelcomeMessage,
          w = e.setConfigAssistantWelcomeMessage,
          _ = e.onNewPlaygroundConversation,
          I = e.configModelSlug,
          C = e.setConfigModelSlug,
          z = e.configPluginIds,
          A = e.setConfigPluginIds,
          G = e.profilePicId,
          Z = e.setProfilePicId,
          D = (0, T.useRouter)(),
          M = (0, c._)(
            (0, S.useState)(
              null !== (t = null == f ? void 0 : f.name) && void 0 !== t
                ? t
                : ""
            ),
            2
          ),
          F = M[0],
          O = M[1],
          U = (0, c._)(
            (0, S.useState)(
              null !== (s = null == f ? void 0 : f.icon) && void 0 !== s
                ? s
                : g.bj.Box
            ),
            2
          ),
          B = U[0];
        U[1];
        var E = (0, c._)(
            (0, S.useState)(
              null !== (l = null == f ? void 0 : f.color) && void 0 !== l
                ? l
                : (0, g.yq)()
            ),
            2
          ),
          L = E[0];
        E[1];
        var R = (0, c._)(
            (0, S.useState)(
              null !== (a = null == f ? void 0 : f.config.context_message) &&
                void 0 !== a
                ? a
                : ""
            ),
            2
          ),
          q = R[0],
          J = R[1],
          V = (0, c._)(
            (0, S.useState)(
              null !==
                (i = null == f ? void 0 : f.config.assistant_welcome_message) &&
                void 0 !== i
                ? i
                : ""
            ),
            2
          ),
          Y = V[0],
          H = V[1],
          K = (0, c._)(
            (0, S.useState)(
              null !== (o = null == f ? void 0 : f.config.model_slug) &&
                void 0 !== o
                ? o
                : N.S0
            ),
            2
          ),
          Q = K[0],
          X = K[1],
          en = (0, c._)(
            (0, S.useState)(
              null !== (d = null == f ? void 0 : f.config.plugin_ids) &&
                void 0 !== d
                ? d
                : []
            ),
            2
          ),
          es = en[0],
          ea = en[1],
          er = (0, c._)(
            (0, S.useState)(
              (null == f ? void 0 : f.published_at) != null
                ? g.Ou.Published
                : g.Ou.Private
            ),
            2
          ),
          eo = er[0],
          ed = er[1],
          ec = (0, c._)(
            (0, S.useState)(
              null !== (u = null == f ? void 0 : f.description) && void 0 !== u
                ? u
                : ""
            ),
            2
          ),
          eu = ec[0],
          ex = ec[1],
          eg =
            eo === g.Ou.Published &&
            (null == f ? void 0 : f.published_at) == null,
          ef = (0, g.jc)(h),
          eh = (0, g.h$)(h),
          ep = F.length > g.h5,
          ev = eu.length > g.Ip,
          eb = (0, N.B9)(),
          ej = Q ? eb.get(Q) : void 0,
          ey =
            null == ej
              ? void 0
              : null === (n = ej.enabledTools) || void 0 === n
              ? void 0
              : n.includes("tools3");
        function ew() {
          return (ew = (0, r._)(function () {
            var e, n;
            return (0, m.Jh)(this, function (t) {
              switch (t.label) {
                case 0:
                  if ("uploading" === G)
                    throw Error("cannot submit while uploading profile pic");
                  if (
                    ((e = {
                      name: F,
                      description: eu,
                      config: {
                        contextMessage: q,
                        assistantWelcomeMessage: Y,
                        modelSlug: Q,
                        pluginIds: ey ? es : void 0,
                      },
                      publish: eo === g.Ou.Published,
                      icon: B,
                      color: L,
                      profilePicId: G,
                    }),
                    !((null == f ? void 0 : f.id) != null))
                  )
                    return [3, 2];
                  return (
                    (n = q !== f.config.context_message),
                    [
                      4,
                      eh.mutateAsync(
                        { conversationTemplateId: f.id, templateData: e },
                        {
                          onSuccess: function () {
                            D.push(
                              "/?".concat(g.t9, "=").concat(f.id),
                              void 0,
                              { shallow: !0 }
                            ),
                              n
                                ? k.m.success(
                                    eg
                                      ? "Template saved and published. Changes only apply to new chats. Try it out here."
                                      : "Template saved. Changes only apply to new chats. Try it out here.",
                                    { duration: 3 }
                                  )
                                : k.m.success(
                                    eg
                                      ? "Template saved and published."
                                      : "Template saved.",
                                    { duration: 3 }
                                  );
                          },
                        }
                      ),
                    ]
                  );
                case 1:
                  return t.sent(), [3, 4];
                case 2:
                  return [
                    4,
                    ef.mutateAsync(
                      { templateData: e },
                      {
                        onSuccess: function (e) {
                          D.push("/?".concat(g.t9, "=").concat(e.id), void 0, {
                            shallow: !0,
                          }),
                            k.m.success(
                              eg
                                ? "Template created and published. Try it out here."
                                : "Template created. Try it out here.",
                              { duration: 3 }
                            );
                        },
                      }
                    ),
                  ];
                case 3:
                  t.sent(), (t.label = 4);
                case 4:
                  return [2];
              }
            });
          })).apply(this, arguments);
        }
        return (
          !ey && es.length > 0 && (ea([]), A([])),
          (0, x.jsxs)("div", {
            className: "flex h-full flex-col",
            children: [
              (0, x.jsxs)("div", {
                className: "grow overflow-auto p-6",
                children: [
                  (0, x.jsxs)($, {
                    children: [
                      (0, x.jsx)(ee, { label: "Name" }),
                      (0, x.jsx)("input", {
                        type: "text",
                        className:
                          "w-full resize-none overflow-y-auto rounded border bg-transparent px-3 py-2 text-sm outline-none focus:border-brand-green focus:ring-2 focus:ring-blue-400 dark:border-gray-900 dark:bg-gray-700",
                        placeholder: "Short descriptive name",
                        value: null != F ? F : "",
                        onChange: function (e) {
                          return O(e.target.value);
                        },
                      }),
                      ep
                        ? (0, x.jsxs)(em, {
                            className: "mt-1",
                            children: [
                              "Template names cannot be longer than",
                              " ",
                              g.h5,
                              " characters.",
                            ],
                          })
                        : null,
                    ],
                  }),
                  (0, x.jsxs)($, {
                    children: [
                      (0, x.jsx)(ee, { label: "Profile Picture" }),
                      (0, x.jsx)("div", {
                        className: "mb-2 flex items-center gap-2",
                        children: (0, x.jsx)(j.O, {
                          conversationTemplate: f,
                          onFileChange: function (e) {
                            Z(e);
                          },
                        }),
                      }),
                    ],
                  }),
                  (0, x.jsx)($, {
                    children: (0, x.jsx)(W, {
                      modelSlug: Q,
                      onModelChange: function (e) {
                        X(e), e !== I && (C(e), _());
                      },
                      pluginIds: es,
                      onPluginIdsChange: function (e) {
                        ea(e), (0, P.isEqual)(e, z) || (A(e), _());
                      },
                    }),
                  }),
                  (0, x.jsxs)($, {
                    children: [
                      (0, x.jsx)(ee, {
                        label: "Behavior",
                        description:
                          "Describe what this GPT is and what it does. Include information about it’s tone of voice, the style and length of response, and any additional or specific information it should know.",
                      }),
                      (0, x.jsx)(ei, {
                        rows: 8,
                        value: q,
                        onChange: function (e) {
                          return J(e.target.value);
                        },
                        onBlurCapture: function () {
                          q.trim() !== v.trim() && (b(q), _());
                        },
                      }),
                    ],
                  }),
                  (0, x.jsxs)($, {
                    children: [
                      (0, x.jsx)(ee, {
                        label: "Welcome Message",
                        description:
                          "When a user starts a new chat with this GPT, what should it say? It can be helpful to give examples of what this GPT does and how best to interact with it.",
                      }),
                      (0, x.jsx)(ei, {
                        rows: 8,
                        value: Y,
                        onChange: function (e) {
                          return H(e.target.value);
                        },
                        onBlurCapture: function () {
                          Y.trim() !== y.trim() && (w(Y), _());
                        },
                      }),
                    ],
                  }),
                  (0, x.jsxs)("div", {
                    children: [
                      (0, x.jsx)("div", {
                        className: "mb-3 text-lg font-medium",
                        children: "Sharing",
                      }),
                      (0, x.jsx)(et, { value: eo, onValueChange: ed }),
                      (0, x.jsx)("div", {
                        className:
                          "mb-2 mt-3 text-xs text-token-text-secondary",
                        children:
                          eo === g.Ou.Private
                            ? "This GPT can only be used by you."
                            : "This GPT can be used by anyone in this workspace.",
                      }),
                      eo === g.Ou.Published &&
                        (0, x.jsxs)($, {
                          className: "mt-4",
                          children: [
                            (0, x.jsx)(ee, {
                              label: "Description",
                              description:
                                "A publicly visible blurb about this GPT.",
                            }),
                            (0, x.jsx)("textarea", {
                              value: eu,
                              rows: 5,
                              onChange: function (e) {
                                return ex(e.target.value);
                              },
                              className:
                                "w-full overflow-y-auto rounded border bg-transparent px-3 py-2 focus:ring-2 focus:ring-blue-400 dark:border-gray-900 dark:bg-gray-700",
                            }),
                            ev
                              ? (0, x.jsxs)(em, {
                                  className: "mt-1",
                                  children: [
                                    "Template descriptions cannot be longer than",
                                    " ",
                                    g.Ip,
                                    " characters.",
                                  ],
                                })
                              : null,
                          ],
                        }),
                      (null == f ? void 0 : f.id) != null &&
                        (0, x.jsx)($, {
                          className: "mt-8",
                          children: (0, x.jsx)(el, {
                            workspaceId: h,
                            conversationTemplate: f,
                          }),
                        }),
                    ],
                  }),
                ],
              }),
              (0, x.jsx)("div", {
                className: "border-t border-gray-100 dark:border-gray-700",
                children: (0, x.jsxs)("div", {
                  className: "flex justify-end space-x-2 px-6 py-4",
                  children: [
                    (0, x.jsx)(p.z, {
                      color: "neutral",
                      as: "button",
                      onClick: function (e) {
                        e.preventDefault(), D.back();
                      },
                      children: "Cancel",
                    }),
                    (0, x.jsx)(p.z, {
                      loading: ef.isLoading || eh.isLoading,
                      onClick: function () {
                        return ew.apply(this, arguments);
                      },
                      className: "cursor-pointer",
                      disabled:
                        ef.isLoading ||
                        eh.isLoading ||
                        ef.isSuccess ||
                        eh.isSuccess ||
                        "" === F ||
                        "" === q ||
                        ep ||
                        ev ||
                        "" === Y ||
                        "uploading" === G,
                      children:
                        (null == f ? void 0 : f.id) != null
                          ? eg
                            ? "Save and publish GPT"
                            : "Save GPT"
                          : eg
                          ? "Create and publish GPT"
                          : "Create GPT",
                    }),
                  ],
                }),
              }),
            ],
          })
        );
      }
      var ei = A.Z.textarea(Q()),
        er = function (e) {
          var n,
            t,
            s,
            l,
            a = e.workspace,
            i = e.conversationTemplate,
            r = (0, c._)(
              (0, S.useState)(function () {
                return (0, _.OX)();
              }),
              2
            ),
            o = r[0],
            d = r[1],
            u = (0, c._)(
              (0, S.useState)(
                null !== (n = null == i ? void 0 : i.config.context_message) &&
                  void 0 !== n
                  ? n
                  : ""
              ),
              2
            ),
            m = u[0],
            g = u[1],
            f = (0, c._)((0, S.useState)(!0), 2),
            v = f[0],
            b = f[1],
            j = (0, c._)(
              (0, S.useState)(
                null !==
                  (t =
                    null == i ? void 0 : i.config.assistant_welcome_message) &&
                  void 0 !== t
                  ? t
                  : ""
              ),
              2
            ),
            w = j[0],
            k = j[1],
            I = (0, c._)(
              (0, S.useState)(
                null !== (s = null == i ? void 0 : i.config.model_slug) &&
                  void 0 !== s
                  ? s
                  : N.S0
              ),
              2
            ),
            C = I[0],
            P = I[1],
            T = (0, c._)(
              (0, S.useState)(
                null !== (l = null == i ? void 0 : i.config.plugin_ids) &&
                  void 0 !== l
                  ? l
                  : []
              ),
              2
            ),
            A = T[0],
            G = T[1],
            Z = (0, c._)(
              (0, S.useState)(null == i ? void 0 : i.profile_pic_id),
              2
            ),
            D = Z[0],
            M = Z[1],
            F = (0, S.useMemo)(
              function () {
                return {
                  context_message: m,
                  assistant_welcome_message: w,
                  model_slug: C,
                  plugin_ids: A,
                };
              },
              [m, w, C, A]
            ),
            O = (0, S.useCallback)(function () {
              b(!1);
            }, []),
            U = (0, y.C)(),
            B =
              !U.isLoading &&
              (null == A
                ? void 0
                : A.some(function (e) {
                    return !U.installedPlugins.some(function (n) {
                      return n.id === e;
                    });
                  })),
            E = (0, c._)((0, S.useState)(!1), 2),
            L = E[0],
            W = E[1];
          return (0, x.jsxs)(x.Fragment, {
            children: [
              L &&
                (0, x.jsx)(R.Z, {
                  pluginIds: A,
                  onClose: function () {
                    return W(!1);
                  },
                }),
              (0, x.jsxs)("div", {
                className: "flex h-screen grow overflow-hidden",
                children: [
                  (0, x.jsx)("div", {
                    className: "relative w-1/2 dark:bg-gray-900",
                    children: (0, x.jsx)(ea, {
                      conversationTemplate: i,
                      workspaceId: a.id,
                      configContextMessage: m,
                      setConfigContextMessage: g,
                      configAssistantWelcomeMessage: w,
                      setConfigAssistantWelcomeMessage: k,
                      onNewPlaygroundConversation: function () {
                        d((0, _.OX)()), b(!0);
                      },
                      configModelSlug: C,
                      setConfigModelSlug: P,
                      configPluginIds: A,
                      setConfigPluginIds: G,
                      profilePicId: D,
                      setProfilePicId: M,
                    }),
                  }),
                  (0, x.jsxs)("div", {
                    className:
                      "relative hidden w-1/2 flex-shrink-0 border-l border-token-border-light md:block",
                    children: [
                      (0, x.jsx)(
                        h.w,
                        {
                          playgroundTemplate: F,
                          clientThreadId: o,
                          onInitiated: O,
                        },
                        o
                      ),
                      B
                        ? (0, x.jsxs)("div", {
                            className:
                              "max-md:left-6 max-md:right-6 absolute inset-y-1/2 left-16 right-16 flex h-fit flex-col items-center justify-center space-y-2 rounded border bg-gray-50 px-2 py-4 opacity-80 dark:border-gray-700 dark:bg-gray-900",
                            children: [
                              (0, x.jsx)("div", {
                                className:
                                  "text-center text-lg font-medium text-token-text-primary",
                                children: "Install plugins",
                              }),
                              (0, x.jsx)("div", {
                                className:
                                  "text-center text-token-text-tertiary",
                                children:
                                  "This template requires plugins that are not installed. Please install them to test your template.",
                              }),
                              (0, x.jsx)("div", {
                                className:
                                  "text-center text-token-text-tertiary",
                                children:
                                  "Note that installing plugins may have you leave this page.",
                              }),
                              (0, x.jsx)(p.z, {
                                color: "danger",
                                onClick: function () {
                                  return W(!0);
                                },
                                children: "Install required plugins",
                              }),
                            ],
                          })
                        : v &&
                          (0, x.jsxs)("div", {
                            className:
                              "max-md:left-6 max-md:right-6 absolute inset-y-1/2 left-16 right-16 flex h-fit flex-col items-center justify-center space-y-2 rounded border bg-gray-50 px-2 py-4 opacity-80 dark:border-gray-700 dark:bg-gray-900",
                            children: [
                              (0, x.jsx)(z.nrB, { className: "icon-xl" }),
                              (0, x.jsx)("div", {
                                className:
                                  "text-center text-lg font-medium text-token-text-primary",
                                children: "Test your GPT",
                              }),
                              (0, x.jsx)("div", {
                                className:
                                  "text-center text-token-text-tertiary",
                                children:
                                  "This temporary chat updates every time you modify your GPT. It won’t be saved in your chat history.",
                              }),
                            ],
                          }),
                    ],
                  }),
                ],
              }),
            ],
          });
        };
      function eo(e) {
        var n = e.workspace,
          t = e.conversationTemplateId,
          s = (0, g.GS)(n.id, t).data,
          l = (0, I.ec)(I.F_.accountUserId),
          a = (null == s ? void 0 : s.owner_id) === l;
        return (
          (0, S.useEffect)(
            function () {
              s && void 0 !== l && !a && (0, f.O)(s.id);
            },
            [a, l, s]
          ),
          null != s && a
            ? (0, x.jsx)(er, { workspace: n, conversationTemplate: s })
            : null
        );
      }
      function ed(e) {
        var n = e.workspace,
          t = e.remixSourceTemplateId,
          s = (0, g.Lm)(n.id, t).data,
          l = null != s ? (0, d._)((0, o._)({}, s), { id: void 0 }) : void 0;
        return (0, x.jsx)(er, { workspace: n, conversationTemplate: l });
      }
      function ec(e) {
        var n = e.conversationTemplateId,
          t = e.remixSourceTemplateId,
          s = (0, I.ec)().currentWorkspace;
        return null != s
          ? (0, x.jsx)("div", {
              children:
                void 0 != n
                  ? (0, x.jsx)(eo, { workspace: s, conversationTemplateId: n })
                  : (0, x.jsx)(ed, { workspace: s, remixSourceTemplateId: t }),
            })
          : (0, x.jsx)("div", {
              className: "flex min-h-screen items-center justify-center",
              children: (0, x.jsx)(w.Z, {}),
            });
      }
      function eu(e) {
        var n = e.workspaceId,
          t = e.conversationTemplateId,
          s = e.remixSourceTemplateId;
        return (0, x.jsxs)("div", {
          className: "flex h-full",
          children: [
            (0, x.jsx)(H, { workspaceId: n }),
            (0, x.jsx)("div", {
              className: "grow",
              children: (0, x.jsx)(
                ec,
                { conversationTemplateId: t, remixSourceTemplateId: s },
                null != t ? t : "new"
              ),
            }),
          ],
        });
      }
      var em = A.Z.div(X());
    },
    44548: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return x;
        },
      });
      var s = t(22830),
        l = t(35250),
        a = t(91809),
        i = t(67273),
        r = t(89368),
        o = t(9884),
        d = t(14444),
        c = t(2864),
        u = t(1821),
        m = t(70079);
      function x(e) {
        var n = e.pluginIds,
          t = e.onClose,
          x = (0, d.C)(),
          g = new Set(
            x.installedPlugins.map(function (e) {
              return e.id;
            })
          ),
          f = n.filter(function (e) {
            return !g.has(e);
          }),
          h = (0, c.K)(f),
          p = (0, s._)((0, m.useState)(), 2),
          v = p[0],
          b = p[1];
        return (
          (0, m.useEffect)(
            function () {
              0 == f.length && t();
            },
            [f.length, t]
          ),
          (0, l.jsxs)(l.Fragment, {
            children: [
              null != v &&
                (0, l.jsx)(o.Z, {
                  plugin: v,
                  onInstall: function () {
                    return b(void 0);
                  },
                  onClose: function () {
                    return b(void 0);
                  },
                }),
              (0, l.jsx)(r.Z, {
                isOpen: !0,
                onClose: t,
                type: "success",
                title: "Install Required Plugins",
                children: h.isLoading
                  ? (0, l.jsx)(u.Z, {})
                  : (0, l.jsx)("ul", {
                      children: h.plugins.map(function (e) {
                        return (0, l.jsxs)(
                          "li",
                          {
                            className: "my-4 flex w-full gap-2",
                            children: [
                              (0, l.jsx)(i.z, {
                                onClick: function () {
                                  return b(e);
                                },
                                children: "Install",
                              }),
                              (0, l.jsxs)("div", {
                                className:
                                  "flex items-center gap-1 overflow-hidden",
                                children: [
                                  (0, l.jsx)(a.Z, {
                                    url: e.manifest.logo_url,
                                    name: e.manifest.name_for_human,
                                    className: "flex-shrink-0",
                                    size: 36,
                                  }),
                                  (0, l.jsx)("span", {
                                    className: "truncate text-ellipsis",
                                    children: e.manifest.name_for_human,
                                  }),
                                ],
                              }),
                            ],
                          },
                          e.id
                        );
                      }),
                    }),
              }),
            ],
          })
        );
      }
    },
    61621: function (e, n, t) {
      t.r(n),
        t.d(n, {
          GizmoNewConversation: function () {
            return H;
          },
        });
      var s,
        l,
        a = t(39324),
        i = t(22830),
        r = t(81949),
        o = t(35250),
        d = t(95954),
        c = t(6038),
        u = t(36338),
        m = t(61402),
        x = t(3299),
        g = t(47044),
        f = t(22558),
        h = t(65261),
        p = t(54986),
        v = t(77224),
        b = t(89314),
        j = t(78781),
        y = t(63031),
        w = t(98107),
        k = t(67),
        N = t(33976),
        _ = t(59289),
        I = t(37469),
        C = t(78931),
        P = t(66085),
        T = t(82920),
        S = t(19841),
        z = t(9181),
        A = t.n(z),
        G = t(60554),
        Z = t(70079),
        D = t(76483),
        M = t(2827),
        F = t(1454),
        O = t(70671),
        U = t(92720),
        B = t(44510),
        E = t(42569),
        L = t(72198),
        W = t(47428);
      function R(e) {
        var n = e.option,
          t = e.prefixNameWithGPT4,
          s = e.isSelected,
          l = (0, E.fm)(),
          a = (0, B.xT)();
        return (0, o.jsxs)(
          U.Z.Item,
          {
            onClick: function () {
              var e = n.value;
              l(e), a(e);
            },
            children: [
              (0, o.jsxs)("span", {
                children: [void 0 !== t && t && "GPT-4 ", n.name],
              }),
              s &&
                (0, o.jsx)(F.UgA, {
                  className: "icon-sm absolute right-2 top-2",
                }),
            ],
          },
          n.value
        );
      }
      function q(e) {
        var n = e.currentModel,
          t = (0, L.ZP)(),
          s = null == n ? void 0 : n.id,
          l = t.find(function (e) {
            return "gpt_4" === e.categoryId;
          }),
          a = t.find(function (e) {
            return "other" === e.categoryId;
          });
        return (0, o.jsxs)(U.Z.Root, {
          children: [
            (0, o.jsx)(U.Z.Trigger, {
              asChild: !0,
              children: (0, o.jsx)("button", {
                children: (0, o.jsxs)("div", {
                  className:
                    "flex items-center gap-1 text-xs text-token-text-tertiary",
                  children: [
                    null == n ? void 0 : n.title,
                    " ",
                    (0, o.jsx)(F.bTu, { className: "icon-xs" }),
                  ],
                }),
              }),
            }),
            (0, o.jsx)(U.Z.Portal, {
              children: (0, o.jsxs)(U.Z.Content, {
                align: "end",
                children: [
                  null != l &&
                    l.options.map(function (e) {
                      return (0,
                      o.jsx)(R, { option: e, prefixNameWithGPT4: !0, isSelected: s === e.value }, e.value);
                    }),
                  (0, o.jsx)(W.Z0, {}),
                  null != a &&
                    a.options.map(function (e) {
                      return (0,
                      o.jsx)(R, { option: e, isSelected: s === e.value }, e.value);
                    }),
                ],
              }),
            }),
          ],
        });
      }
      var J = t(89794);
      ((s = l || (l = {}))[(s.Agent = 0)] = "Agent"),
        (s[(s.Create = 1)] = "Create"),
        (s[(s.Browse = 2)] = "Browse");
      var V = "Create GPT",
        Y = "Explore all GPTs";
      function H(e) {
        var n = e.clientThreadId,
          t = e.onRequestCompletion,
          s = e.currentModel,
          a = (0, i._)((0, Z.useState)(""), 2),
          d = a[0],
          c = a[1],
          m = (0, C.ec)(C.F_.businessWorkspaceId),
          x = (0, u.ki)(m).data,
          g = (0, u.Ym)(m).data,
          f = (0, j.gF)(function (e) {
            return e.files.length > 0;
          }),
          h = (0, r._)(
            Object.values(w.Z).flatMap(function (e) {
              var n =
                null == x
                  ? void 0
                  : x.items.find(function (n) {
                      return n.id === e;
                    });
              return null != n ? [n] : [];
            })
          ).concat(
            (0, r._)(
              "" !== d
                ? (0, r._)(
                    null != g
                      ? g.items.filter(function (e) {
                          return null == e.published_at;
                        })
                      : []
                  )
                    .concat((0, r._)(null != x ? x.items : []))
                    .filter(function (e) {
                      return (
                        !Object.values(w.Z).includes(e.id) &&
                        null != e.config.assistant_welcome_message
                      );
                    })
                : []
            )
          ),
          p = f
            ? []
            : (0, r._)(
                h.map(function (e) {
                  return { kind: l.Agent, agent: e };
                })
              )
                .concat([{ kind: l.Create }, { kind: l.Browse }])
                .filter(function (e) {
                  return (function (e, n) {
                    switch (n.kind) {
                      case l.Agent:
                        return e
                          .toLowerCase()
                          .split(" ")
                          .every(function (e) {
                            return n.agent.name
                              .toLowerCase()
                              .replace(/[^a-zA-Z0-9 ]/g, "")
                              .split(" ")
                              .some(function (n) {
                                return n.startsWith(e);
                              });
                          });
                      case l.Create:
                        return V.toLowerCase().startsWith(e.toLowerCase());
                      case l.Browse:
                        return Y.toLowerCase().startsWith(e.toLowerCase());
                      default:
                        (0, T.ZP)(n);
                    }
                  })(d, e);
                })
                .slice(0, 5),
          v = (0, i._)((0, Z.useState)("textarea"), 2),
          b = v[0],
          y = v[1];
        return (
          "number" == typeof b &&
            b >= p.length &&
            y(0 === p.length ? "textarea" : p.length - 1),
          (0, o.jsxs)("div", {
            className: "relative h-full px-8 pt-[36vh]",
            children: [
              (0, o.jsxs)("div", {
                className: "mx-auto max-w-[46rem] pb-16",
                children: [
                  (0, o.jsxs)("div", {
                    className:
                      "mb-9 flex items-center justify-center gap-1 text-4xl font-semibold",
                    children: [
                      "ChatGPT ",
                      (0, o.jsx)(k.X, { className: "relative top-px h-7 w-7" }),
                    ],
                  }),
                  (0, o.jsx)(K, {
                    textareaValue: d,
                    setTextareaValue: c,
                    clientThreadId: n,
                    onRequestCompletion: t,
                    listItems: p,
                    focusedItemIndex: b,
                    setFocusedItemIndex: y,
                    currentModel: s,
                  }),
                  (0, o.jsx)(X, {
                    listItems: p,
                    focusedItemIndex: b,
                    setFocusedItemIndex: y,
                    isTextareaEmpty: "" === d,
                  }),
                ],
              }),
              (0, o.jsx)("div", {
                className: "absolute right-1 top-1",
                children: (0, o.jsx)(q, { currentModel: s }),
              }),
            ],
          })
        );
      }
      function K(e) {
        var n,
          t = e.clientThreadId,
          s = e.textareaValue,
          i = e.setTextareaValue,
          r = e.onRequestCompletion,
          c = e.listItems,
          w = e.focusedItemIndex,
          k = e.setFocusedItemIndex,
          C = e.currentModel,
          S = (0, G.useRouter)(),
          z = (0, I.Hk)(t),
          A = (0, m.Yk)(z),
          U = (0, P.J8)(),
          B = (0, y.YN)(C),
          E = (0, j.gF)(function (e) {
            return e.files;
          }),
          L = (0, j.gF)(j.HR.hasUploadInProgress),
          W = (E.length > 0 ? !L : "" !== s) && !A,
          R = E.length >= g.Z0,
          q = (0, O.Z)(),
          J = (0, h.Sv)(q, (0, y.YN)(C), "mouse").handleFileAccepted,
          V = B !== v.A.None,
          Y = (0, D.uI)(
            (0, a._)(
              {
                disabled: !V || R,
                noClick: !0,
                onDropAccepted: J,
                onDropRejected: function (e) {
                  return (0, h.UJ)(e, q);
                },
                multiple: !0,
                maxSize: g.xC,
              },
              (0, y.Z8)((0, y.Zp)(C))
            )
          ),
          H = Y.getInputProps,
          K = Y.open;
        return (
          (0, Z.useEffect)(
            function () {
              j.Dw.reset();
            },
            [C]
          ),
          B === v.A.ContextConnector
            ? (n = (0, o.jsx)(f.Z, {}))
            : !R &&
              V &&
              (n = (0, o.jsx)(p.Z, {
                openFileDialog: K,
                getInputProps: H,
                uploadType: B,
              })),
          (0, o.jsxs)("div", {
            children: [
              (0, o.jsxs)("div", {
                className:
                  "flex overflow-hidden rounded-xl border border-[rgba(0,0,0,.05)] bg-gray-50 transition focus-within:border-[rgba(0,0,0,.1)] focus-within:shadow-[0_3px_3px_0_rgba(0,0,0,0.05)] dark:bg-gray-700 dark:focus-within:border-[rgba(0,0,0,0.3)]",
                children: [
                  null != n
                    ? (0, o.jsx)("div", {
                        className: "relative left-2 ml-2 mt-6 leading-none",
                        children: n,
                      })
                    : null,
                  (0, o.jsx)(M.ZP, {
                    value: s,
                    onChange: function (e) {
                      i(e.target.value);
                    },
                    rows: 1,
                    placeholder: "Send a message",
                    autoFocus: !0,
                    onKeyDown: function (e) {
                      if ("Enter" !== e.key || e.shiftKey)
                        "ArrowUp" === e.key
                          ? "textarea" !== w &&
                            (e.preventDefault(),
                            k(function (e) {
                              return "number" == typeof e
                                ? e > 0
                                  ? e - 1
                                  : "textarea"
                                : e;
                            }))
                          : "ArrowDown" === e.key
                          ? c.length > 0 &&
                            ("textarea" === w || w < c.length - 1) &&
                            (e.preventDefault(),
                            k(function (e) {
                              if ("textarea" === e) {
                                if (c.length > 0) return 0;
                              } else if (e < c.length - 1) return e + 1;
                              return e;
                            }))
                          : "textarea" !== w && k("textarea");
                      else {
                        e.preventDefault();
                        var n,
                          a,
                          i,
                          o,
                          m,
                          g,
                          f = "textarea" !== w ? c[w] : void 0;
                        null != f
                          ? S.push(
                              f.kind === l.Agent
                                ? (0, u.l1)(f.agent.id)
                                : f.kind === l.Browse
                                ? "/gizmo/explore"
                                : f.kind === l.Create
                                ? U
                                : (0, T.ZP)(f),
                              void 0,
                              { shallow: !0 }
                            )
                          : W &&
                            null != C &&
                            ((n = I.tQ.getThreadCurrentLeafId(t)),
                            (i = (a = (0, x.J)(C, s)).content),
                            (m =
                              (o = a.attachments).length > 0
                                ? { attachments: o }
                                : {}),
                            (g = "new-conversation-user-node-id"),
                            I.tQ.updateTree(t, function (e) {
                              e.addNode(g, i, n, d.uU.User, void 0, m);
                            }),
                            r(d.Os.Next, g, {}, !0));
                      }
                    },
                    className:
                      "max-h-32 w-full grow resize-none border-0 bg-transparent p-5",
                  }),
                  B === v.A.Multimodal &&
                    (0, o.jsx)("div", {
                      className: "mr-4 mt-6",
                      children: (0, o.jsx)(_.Z, {
                        onPick: function (e, n) {
                          j.Dw.uploadFile((0, b.W7)(e), e, B, q), i(n);
                        },
                      }),
                    }),
                ],
              }),
              E.length > 0 && (0, o.jsx)(N.nR, { files: E }),
              (0, o.jsx)("div", {
                className: "mt-3 text-center text-[0.8rem] text-gray-400",
                children:
                  c.length > 0
                    ? (0, o.jsxs)("span", {
                        children: [
                          "Use ",
                          (0, o.jsx)(F.tv1, {
                            className: "inline-block h-4 w-4",
                          }),
                          (0, o.jsx)(F.iRh, {
                            className: "inline-block h-4 w-4",
                          }),
                          " to navigate",
                        ],
                      })
                    : "Press enter to send",
              }),
            ],
          })
        );
      }
      function Q(e) {
        var n,
          t,
          s,
          a,
          i = e.listItem,
          r = e.isFocused,
          d = e.itemIndex,
          m = e.setFocusedItemIndex,
          x = e.className;
        switch (i.kind) {
          case l.Agent:
            (n = (0, o.jsx)(c.Py, {
              conversationTemplate: i.agent,
              iconSize: "gizmoHeader",
            })),
              (t = i.agent.name),
              (s =
                null !== (a = i.agent.description) && void 0 !== a
                  ? a
                  : void 0);
            break;
          case l.Create:
            (n = (0, o.jsx)("div", {
              className:
                "flex h-8 w-8 items-center justify-center bg-gray-400 dark:bg-gray-900",
              children: (0, o.jsx)(F.OvN, { className: "h-4 w-4 text-white" }),
            })),
              (t = V),
              (s = "Add personality, knowledge, and capabilities");
            break;
          case l.Browse:
            (n = (0, o.jsx)("div", {
              className:
                "flex h-8 w-8 items-center justify-center bg-gray-400 dark:bg-gray-900",
              children: (0, o.jsx)(F.aCJ, { className: "h-4 w-4 text-white" }),
            })),
              (t = Y);
            break;
          default:
            (0, T.ZP)(i);
        }
        var g = (0, P.J8)();
        return (0, o.jsxs)(A(), {
          href:
            i.kind === l.Agent
              ? (0, u.l1)(i.agent.id)
              : i.kind === l.Browse
              ? "/gizmo/explore"
              : i.kind === l.Create
              ? g
              : (0, T.ZP)(i),
          shallow: !0,
          onMouseEnter: function () {
            m(d);
          },
          onMouseLeave: function () {
            m("textarea");
          },
          className: (0, S.default)(
            "flex items-center gap-3 rounded-xl p-4",
            r ? "bg-token-surface-secondary" : "",
            x
          ),
          children: [
            (0, o.jsx)(J.i1, {
              className: "h-8 w-8",
              size: "large",
              children: n,
            }),
            (0, o.jsxs)("div", {
              className: "text-[13px] leading-[18px]",
              children: [
                (0, o.jsx)("div", { className: "font-medium", children: t }),
                (0, o.jsx)("div", {
                  className: "text-token-text-tertiary line-clamp-1",
                  children: s,
                }),
              ],
            }),
          ],
        });
      }
      function X(e) {
        var n = e.listItems,
          t = e.focusedItemIndex,
          s = e.setFocusedItemIndex,
          a = e.isTextareaEmpty;
        return (0, o.jsx)("div", {
          className: "mx-auto mt-14 flex max-w-md flex-col",
          children: n.map(function (e, i) {
            return (0, o.jsx)(
              Q,
              {
                listItem: e,
                isFocused: t === i,
                setFocusedItemIndex: s,
                itemIndex: i,
                className:
                  a &&
                  e.kind === l.Create &&
                  n.some(function (e) {
                    return e.kind === l.Agent;
                  })
                    ? "mt-4"
                    : "",
              },
              e.kind === l.Agent ? e.agent.id : e.kind
            );
          }),
        });
      }
    },
    89794: function (e, n, t) {
      t.d(n, {
        QT: function () {
          return u;
        },
        UA: function () {
          return m;
        },
        i1: function () {
          return c;
        },
      });
      var s = t(39324),
        l = t(71209),
        a = t(4337),
        i = t(35250),
        r = t(47428),
        o = t(19841);
      function d() {
        var e = (0, a._)([
          "sticky top-0 z-10 flex h-16 items-center justify-between bg-white/95 p-2 font-semibold dark:bg-gray-800/90 ",
          "",
        ]);
        return (
          (d = function () {
            return e;
          }),
          e
        );
      }
      function c(e) {
        var n = e.children,
          t = e.className,
          s = e.size;
        return (0, i.jsxs)("div", {
          className: (0, o.default)(
            "relative flex-shrink-0 overflow-hidden",
            "small" === s && "rounded-sm",
            "medium" === s && "rounded-md",
            "large" === s && "rounded-lg",
            t
          ),
          children: [
            n,
            (0, i.jsx)("div", {
              className: (0, o.default)(
                "absolute inset-0 shadow-[inset_0_0_1px_rgba(0,0,0,0.1)]",
                "small" === s && "rounded-sm",
                "medium" === s && "rounded-md",
                "large" === s && "rounded-lg"
              ),
            }),
          ],
        });
      }
      var u = t(21389).Z.div(d(), function (e) {
        return e.$spaceForCollapsedSidebar && "pl-12";
      });
      function m(e) {
        return (0, i.jsx)(
          r.ck,
          (0, l._)((0, s._)({}, e), {
            className: (0, o.default)(
              "flex gap-2 p-4 hover:bg-gray-100 dark:hover:bg-gray-800",
              e.className
            ),
          })
        );
      }
    },
  },
]);
