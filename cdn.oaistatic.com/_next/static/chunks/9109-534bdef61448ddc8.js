"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9109],
  {
    51959: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return a;
        },
      });
      var r = t(35250);
      function a(e) {
        var n = e.id,
          t = e.label,
          a = e.checked,
          s = e.onChange,
          i = e.disabled;
        return (0, r.jsxs)("div", {
          className: "form-check",
          children: [
            (0, r.jsx)("input", {
              className:
                "form-check-input float-left mr-2 mt-1 h-4 w-4 cursor-pointer appearance-none rounded-sm border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:bg-blue-600 focus:outline-none",
              type: "checkbox",
              disabled: i,
              onChange: s,
              checked: a,
              id: n,
            }),
            (0, r.jsx)("label", {
              className: "form-check-label text-gray-800 dark:text-gray-100",
              htmlFor: n,
              children: t,
            }),
          ],
        });
      }
    },
    28512: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return x;
        },
      });
      var r = t(39324),
        a = t(22830),
        s = t(4337),
        i = t(35250),
        o = t(70079),
        c = t(1454),
        l = t(94968),
        u = t(32004),
        d = t(21389),
        f = t(19012);
      function m() {
        var e = (0, s._)(["flex ml-auto gap-2"]);
        return (
          (m = function () {
            return e;
          }),
          e
        );
      }
      var h = (0, l.vU)({
        copied: {
          id: "CopyButton.copied",
          defaultMessage: "Copied!",
          description: "Text displayed when the content has been copied",
        },
      });
      function x(e) {
        var n = e.buttonText,
          t = e.onCopy,
          s = e.className,
          l = (0, a._)((0, o.useState)(!1), 2),
          d = l[0],
          m = l[1],
          x = (0, f.Z)(),
          g = (0, o.useCallback)(
            function (e) {
              e.stopPropagation(),
                t(),
                m(!0),
                setTimeout(function () {
                  x() && m(!1);
                }, 2e3);
            },
            [x, t],
          );
        return (0, i.jsxs)(i.Fragment, {
          children: [
            !d &&
              (0, i.jsxs)(p, {
                onClick: g,
                className: s,
                children: [(0, i.jsx)(c.j4u, { className: "icon-sm" }), n],
              }),
            d &&
              (0, i.jsxs)(p, {
                className: s,
                children: [
                  (0, i.jsx)(c.UgA, { className: "icon-sm" }),
                  n && (0, i.jsx)(u.Z, (0, r._)({}, h.copied)),
                ],
              }),
          ],
        });
      }
      var p = d.Z.button(m());
    },
    31486: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return s;
        },
      });
      var r = t(35250),
        a = t(91809);
      function s(e) {
        var n = e.plugin,
          t = n.manifest.name_for_human;
        return (0, r.jsxs)("div", {
          className: "flex gap-4 rounded bg-gray-50 px-4 py-2 dark:bg-gray-800",
          children: [
            (0, r.jsx)(a.Z, {
              url: n.manifest.logo_url,
              name: t,
              size: 32,
              className: "flex-shrink-0",
            }),
            (0, r.jsxs)("div", {
              className: "flex flex-col gap-1",
              children: [
                (0, r.jsx)("h2", {
                  className: "align-top text-base font-medium",
                  children: t,
                }),
                (0, r.jsx)("div", {
                  className: "text-sm",
                  children: n.manifest.description_for_human,
                }),
              ],
            }),
          ],
        });
      }
    },
    48759: function (e, n, t) {
      t.d(n, {
        bf: function () {
          return d;
        },
        q6: function () {
          return u;
        },
        rC: function () {
          return l;
        },
      });
      var r = t(39324),
        a = t(70216),
        s = t(22830),
        i = t(35250),
        o = t(70079),
        c = t(1454);
      function l(e) {
        var n = e.manifestValidationInfo,
          t = (0, a._)(e, ["manifestValidationInfo"]),
          s = n.manifest_dict,
          o = n.warnings,
          c = n.errors;
        return (0, i.jsx)(
          f,
          (0, r._)({ name: "manifest", content: s, warnings: o, errors: c }, t),
        );
      }
      function u(e) {
        var n = e.apiValidationInfo,
          t = (0, a._)(e, ["apiValidationInfo"]),
          s = n.openapi_spec_dict,
          o = n.warnings,
          c = n.errors;
        return (0, i.jsx)(
          f,
          (0, r._)(
            { name: "OpenAPI spec", content: s, warnings: o, errors: c },
            t,
          ),
        );
      }
      function d(e) {
        var n = e.apiValidationInfo,
          t = (0, a._)(e, ["apiValidationInfo"]),
          s = n.api_typescript;
        return s
          ? (0, i.jsx)(
              m,
              (0, r._)({ text: "Prompt for ChatGPT", content: s }, t),
            )
          : null;
      }
      function f(e) {
        var n = e.name,
          t = e.content,
          s = e.warnings,
          o = e.errors,
          l = (0, a._)(e, ["name", "content", "warnings", "errors"]),
          u = s && s.length > 0,
          d = o && o.length > 0,
          f = "Validated ".concat(n),
          h = (0, i.jsx)(c.UgA, { className: "icon-sm text-green-500" });
        return (
          d
            ? ((f = "Errors in ".concat(n)),
              (h = (0, i.jsx)(c.q5L, { className: "icon-sm text-red-500" })))
            : u &&
              ((f = "Warnings in ".concat(n)),
              (h = (0, i.jsx)(c.bcx, {
                className: "icon-sm  text-yellow-500",
              }))),
          (0, i.jsx)(
            m,
            (0, r._)(
              { icon: h, text: f, content: t, warnings: s, errors: o },
              l,
            ),
          )
        );
      }
      function m(e) {
        var n = e.icon,
          t = e.text,
          r = e.content,
          a = e.warnings,
          l = e.errors,
          u = e.expanded,
          d = e.onChangeExpanded,
          f = (0, s._)((0, o.useState)(!1), 2),
          m = f[0],
          h = f[1],
          x = null != u ? u : m,
          p = (0, o.useCallback)(
            function () {
              d
                ? d(!x)
                : h(function (e) {
                    return !e;
                  });
            },
            [x, d],
          );
        return (0, i.jsxs)("div", {
          className: "flex flex-col gap-2 text-sm",
          children: [
            (0, i.jsxs)("div", {
              className: "flex items-center gap-1",
              children: [
                n && (0, i.jsx)("div", { children: n }),
                (0, i.jsx)("div", { children: t }),
                (0, i.jsx)("div", {
                  role: "button",
                  className: "cursor-pointer text-gray-500 hover:text-gray-700",
                  onClick: p,
                  children: x
                    ? (0, i.jsx)(c.rH8, { className: "icon-sm" })
                    : (0, i.jsx)(c.bTu, { className: "icon-sm" }),
                }),
              ],
            }),
            x &&
              (0, i.jsxs)(i.Fragment, {
                children: [
                  (0, i.jsxs)("div", {
                    className: "flex flex-col gap-2 font-semibold",
                    children: [
                      l &&
                        l.map(function (e, n) {
                          return (0, i.jsx)(
                            "div",
                            { className: "text-red-500", children: e },
                            n,
                          );
                        }),
                      a &&
                        a.map(function (e, n) {
                          return (0, i.jsx)(
                            "div",
                            { className: "text-yellow-500", children: e },
                            n,
                          );
                        }),
                    ],
                  }),
                  r &&
                    (0, i.jsx)("pre", {
                      className: "overflow-auto whitespace-pre-wrap text-xs",
                      children:
                        "string" == typeof r ? r : JSON.stringify(r, null, 2),
                    }),
                ],
              }),
          ],
        });
      }
    },
    85330: function (e, n, t) {
      t.d(n, {
        dT: function () {
          return g;
        },
        hZ: function () {
          return u;
        },
        iO: function () {
          return d;
        },
        p0: function () {
          return p;
        },
        wu: function () {
          return v;
        },
      });
      var r = t(81949),
        a = t(75641),
        s = t(78931),
        i = t(6948),
        o = t(70079),
        c = t(78103),
        l = t(14444),
        u = 3,
        d = [
          ["www.klarna.com", "server.shop.app"],
          ["apim.expedia.com", "kayak.com"],
          ["www.redfin.com", "plugins.zillow.com"],
          ["instacart.com", "api.tasty.co"],
        ],
        f = "oai/enabledPluginIds";
      function m(e) {
        var n = e.currentWorkspace;
        return (null == n ? void 0 : n.id) != null &&
          (null == n ? void 0 : n.structure) == a.CZ.WORKSPACE
          ? "".concat(f, "/").concat(n.id)
          : f;
      }
      function h(e) {
        var n = Array.from(new Set(i.m.getItem(m(e))));
        return { enabledPluginIds: new Set(n.splice(0, u)) };
      }
      var x = (0, c.ZP)(function () {
        return h(s.ec.getState());
      });
      function p() {
        var e = (0, l.C)().installedPlugins,
          n = x().enabledPluginIds;
        return (0, o.useMemo)(
          function () {
            return e.filter(function (e) {
              return n.has(e.id);
            });
          },
          [n, e],
        );
      }
      function g(e) {
        e.length > u ||
          x.setState(function () {
            return (
              i.m.setItem(m(s.ec.getState()), e),
              { enabledPluginIds: new Set(e) }
            );
          });
      }
      function v(e) {
        x.setState(function (n) {
          if (n.enabledPluginIds.size >= u) return n;
          var t = (0, r._)(n.enabledPluginIds).concat([e]);
          return (
            i.m.setItem(m(s.ec.getState()), t), { enabledPluginIds: new Set(t) }
          );
        });
      }
      s.ec.subscribe(function (e) {
        x.setState(h(e));
      });
    },
    56817: function (e, n, t) {
      t.d(n, {
        D7: function () {
          return o;
        },
        Zr: function () {
          return s;
        },
        _4: function () {
          return i;
        },
        m1: function () {
          return a;
        },
        ti: function () {
          return r;
        },
      });
      var r = "https://help.openai.com/en/collections/3943089-billing",
        a =
          "https://help.openai.com/en/articles/7905690-how-do-i-cancel-my-apple-subscription-for-chatgpt-plus-in-the-chatgpt-ios-app",
        s =
          "https://help.openai.com/en/articles/8258076-how-to-cancel-my-plus-subscription-in-the-chatgpt-android-app",
        i = {
          WEBAPP: "chatgpt_web",
          MOBILE_IOS: "chatgpt_mobile_ios",
          MOBILE_ANDROID: "chatgpt_mobile_android",
          GRANTED: "chatgpt_gratis_recepient",
          NOT_PURCHASED: "chatgpt_not_purchased",
        },
        o = { ALREADY_PAID: "User is already paid" };
    },
    52481: function (e, n, t) {
      t.d(n, {
        fv: function () {
          return R;
        },
        ZP: function () {
          return A;
        },
        Ub: function () {
          return D;
        },
      });
      var r = t(39324),
        a = t(22830),
        s = t(4337),
        i = t(35250),
        o = t(37469),
        c = t(78931),
        l = t(52787),
        u = t(11084),
        d = t(70079),
        f = t(1454),
        m = t(32004),
        h = t(70671),
        x = t(94968),
        p = t(21389),
        g = t(67273),
        v = t(51959),
        b = t(28512),
        j = t(89368),
        w = t(98359),
        N = t(20525);
      function y(e) {
        var n = e.children,
          t = e.sidebarOpen,
          r = e.onClose;
        return (0, i.jsx)(w.u.Root, {
          show: t,
          as: d.Fragment,
          children: (0, i.jsxs)(N.V, {
            as: "div",
            className: "relative z-10",
            onClose: r,
            children: [
              (0, i.jsx)("div", { className: "fixed inset-0" }),
              (0, i.jsx)("div", {
                className: "fixed inset-0 overflow-hidden",
                children: (0, i.jsx)("div", {
                  className: "absolute inset-0 overflow-hidden",
                  children: (0, i.jsx)("div", {
                    className:
                      "pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10",
                    children: (0, i.jsx)(w.u.Child, {
                      as: d.Fragment,
                      enter:
                        "transform transition ease-in-out duration-100 sm:duration-300",
                      enterFrom: "translate-x-full",
                      enterTo: "translate-x-0",
                      leave:
                        "transform transition ease-in-out duration-300 sm:duration-500",
                      leaveFrom: "translate-x-0",
                      leaveTo: "translate-x-full",
                      children: (0, i.jsx)(N.V.Panel, {
                        className:
                          "pointer-events-auto w-screen max-w-md border-l border-gray-100 dark:border-gray-700",
                        children: (0, i.jsx)("div", {
                          className:
                            "h-full overflow-y-auto bg-white shadow-xl dark:bg-gray-800",
                          children: n,
                        }),
                      }),
                    }),
                  }),
                }),
              }),
            ],
          }),
        });
      }
      var _ = t(81949),
        k = t(95954),
        C = t(19841);
      function I(e) {
        var n = e.clientThreadId,
          t = (0, a._)((0, d.useState)([]), 2),
          r = t[0],
          s = t[1],
          c = o.tQ.getThreadCurrentLeafId(n),
          u = o.tQ.getThreadConversationTurns(n, c),
          m = function (e) {
            var t = o.tQ.getTree(n).getLeafFromNode(e);
            o.tQ.setThreadCurrentLeafId(n, t.id);
          },
          h = function (e) {
            s(function (e) {
              return (0, _._)(e).concat([c]);
            }),
              m(e);
          };
        return (0, i.jsxs)(i.Fragment, {
          children: [
            r.length > 0 &&
              (0, i.jsxs)(g.z, {
                className: "absolute left-2 top-2",
                color: "neutral",
                onClick: function () {
                  m(r[r.length - 1]),
                    s(function (e) {
                      return e.slice(0, -1);
                    });
                },
                children: [
                  (0, i.jsx)(f.lV_, {}),
                  "Go back to ",
                  r[r.length - 1],
                ],
              }),
            (0, i.jsx)("div", {
              className:
                "flex flex-col items-center gap-4 overflow-auto p-4 text-xs",
              children: u.map(function (e, t) {
                var r = e.messages[0].nodeId,
                  a = o.tQ.getTree(n),
                  s = 0 !== t ? a.getParent(r) : null,
                  c =
                    null != s
                      ? s.children.findIndex(function (e) {
                          return r === e;
                        })
                      : 0,
                  u = null != s ? s.children : [],
                  d = u.slice(0, c),
                  f = u.slice(c + 1),
                  m = "bg-gray-400";
                switch (e.role) {
                  case k.uU.User:
                    m = "bg-blue-500";
                    break;
                  case k.uU.Assistant:
                    m = "bg-gray-600";
                }
                return (0, i.jsxs)(
                  "div",
                  {
                    className: (0, C.default)("relative p-2", m),
                    children: [
                      (0, i.jsx)("div", {
                        className:
                          "absolute bottom-0 left-0 -ml-2 flex -translate-x-full gap-2 pl-2",
                        children: d.map(function (e) {
                          return (0, i.jsx)(
                            P,
                            { variantId: e, onChangeItemInView: h },
                            e,
                          );
                        }),
                      }),
                      (0, i.jsx)("div", {
                        className:
                          "absolute left-full top-0 ml-2 flex gap-2 pr-2",
                        children: f.map(function (e) {
                          return (0, i.jsx)(
                            P,
                            { variantId: e, onChangeItemInView: h },
                            e,
                          );
                        }),
                      }),
                      (0, i.jsx)("div", {
                        className: "flex flex-col gap-2",
                        children: e.messages.map(function (e) {
                          return (0, i.jsxs)(
                            "div",
                            {
                              className:
                                "h-14 w-32 truncate bg-gray-200 p-1 text-black",
                              children: [
                                (0, i.jsx)("div", {
                                  className: "font-semibold",
                                  children: e.nodeId,
                                }),
                                (0, i.jsx)("div", {
                                  className: "italic text-gray-600",
                                  children: e.message.author.role,
                                }),
                                (0, i.jsx)("div", {
                                  children: (0, l.RR)(e.message),
                                }),
                              ],
                            },
                            e.nodeId,
                          );
                        }),
                      }),
                    ],
                  },
                  t,
                );
              }),
            }),
          ],
        });
      }
      function P(e) {
        var n = e.variantId,
          t = e.onChangeItemInView;
        return (0, i.jsx)(
          "button",
          {
            className:
              "w-32 truncate bg-gray-400 p-2 text-black opacity-50 hover:opacity-100",
            onClick: function () {
              t(n);
            },
            children: (0, i.jsx)("span", {
              className: "bg-gray-200 p-2",
              children: n,
            }),
          },
          n,
        );
      }
      var T = t(51704);
      function S() {
        var e = (0, s._)([
          "overflow-y-auto h-full md:w-[250px] lg:w-[300px] xl:w-[350px] 2xl:w-[400px] md:border-l md:border-gray-100 md:dark:border-gray-700 bg-white dark:bg-gray-900",
        ]);
        return (
          (S = function () {
            return e;
          }),
          e
        );
      }
      function M() {
        var e = (0, s._)(["whitespace-pre-wrap text-sm"]);
        return (
          (M = function () {
            return e;
          }),
          e
        );
      }
      function O() {
        var e = (0, s._)([
          "px-6 py-4 flex flex-col gap-1 hover:bg-gray-50 dark:hover:bg-gray-500/10 cursor-pointer border-b dark:border-white/10 border-gray-200",
        ]);
        return (
          (O = function () {
            return e;
          }),
          e
        );
      }
      function A(e) {
        var n = e.children,
          t = e.title,
          a = e.icon,
          s = e.isOpen,
          o = e.slideOver,
          c = e.onClose,
          l = (0, i.jsxs)(F, {
            children: [
              (0, i.jsxs)("div", {
                className: "flex items-start justify-between",
                children: [
                  (0, i.jsxs)("div", {
                    className:
                      "flex items-center gap-2 px-4 py-2 text-lg font-medium text-gray-900 dark:text-white",
                    children: [(0, i.jsx)(a, { className: "icon-sm" }), t],
                  }),
                  (0, i.jsx)("div", {
                    className: "mr-2 mt-2 flex h-7 items-center",
                    children: (0, i.jsxs)("button", {
                      type: "button",
                      onClick: c,
                      children: [
                        (0, i.jsx)("span", {
                          className: "sr-only",
                          children: (0, i.jsx)(
                            m.Z,
                            (0, r._)({}, z.closeSidebar),
                          ),
                        }),
                        (0, i.jsx)(f.q5L, {
                          className: "icon-md",
                          "aria-hidden": "true",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              n,
            ],
          });
        return o
          ? (0, i.jsx)(y, { sidebarOpen: s, onClose: c, children: l })
          : s
          ? l
          : null;
      }
      function Z(e) {
        var n = e.messages,
          t = e.setDebugMessageIndex,
          r = n.map(function (e, n) {
            var r = e.author,
              a = r.role,
              s = r.name;
            return (0, i.jsxs)(
              V,
              {
                role: "button",
                onClick: function () {
                  return t(n);
                },
                children: [
                  (0, i.jsxs)("div", {
                    className: "text-xs font-medium uppercase text-gray-400",
                    children: [
                      a,
                      s && s !== a && " (".concat(s, ")"),
                      " -> ",
                      (0, l.Ej)(e),
                      (0, i.jsx)("div", {
                        className: "text-gray-600",
                        children: e.id,
                      }),
                    ],
                  }),
                  (0, i.jsx)("div", {
                    className: "line-clamp-6",
                    children: (0, l.RR)(e),
                  }),
                ],
              },
              e.id,
            );
          });
        return (0, i.jsx)(L, { children: r });
      }
      function E() {
        var e = (0, T.N)();
        return (0, i.jsx)("div", {
          className:
            "flex items-center justify-around gap-2 px-4 py-1 text-xs font-medium uppercase ",
          children: (0, i.jsx)(v.Z, {
            id: "force-paragen",
            label: "Force Parallel Gen",
            checked: e.forceParagen,
            onChange: function () {
              T.N.setState({ forceParagen: !e.forceParagen });
            },
          }),
        });
      }
      function R(e) {
        var n = e.clientThreadId,
          t = e.isOpen,
          r = e.slideOver,
          s = e.onClose,
          l = (0, h.Z)(),
          m = o.tQ.getThreadCurrentLeafId(n),
          x = (0, o.u9)(n, m),
          p = (0, a._)((0, d.useState)(), 2),
          g = p[0],
          v = p[1],
          w = (0, c.hz)(),
          N = (0, d.useCallback)(function () {
            v(void 0);
          }, []),
          y = (0, d.useCallback)(
            function () {
              var e = o.tQ.getTree(n);
              (0, u.S)(e.getTextFromThread(m));
            },
            [m, n],
          ),
          _ = (0, a._)((0, d.useState)(!1), 2),
          k = _[0],
          C = _[1];
        return w.has("debug")
          ? (0, i.jsxs)(A, {
              icon: f.cDN,
              title: l.formatMessage(z.debugTitle),
              isOpen: t,
              slideOver: r,
              onClose: s,
              children: [
                (0, i.jsx)("div", {
                  className:
                    "mb-2 flex items-center justify-around px-4 py-1 text-xs font-medium uppercase",
                  children: (0, i.jsx)(U, { clientThreadId: n, messages: x }),
                }),
                (0, i.jsxs)("div", {
                  className:
                    "flex items-center justify-around gap-2 px-4 py-1 text-xs font-medium uppercase",
                  children: [
                    (0, i.jsx)("div", {
                      children: (0, i.jsx)(b.Z, {
                        onCopy: y,
                        buttonText: l.formatMessage(z.copyText),
                      }),
                    }),
                    (0, i.jsxs)("button", {
                      className: "flex items-center justify-center gap-2",
                      onClick: function () {
                        return C(!0);
                      },
                      children: [
                        (0, i.jsx)(f.PMT, { className: "icon-sm rotate-90" }),
                        "View tree",
                      ],
                    }),
                  ],
                }),
                (0, i.jsx)(E, {}),
                (0, i.jsx)(Z, { messages: x, setDebugMessageIndex: v }),
                void 0 !== g &&
                  (0, i.jsx)(
                    j.Z,
                    {
                      isOpen: !0,
                      onClose: N,
                      type: "success",
                      children: (0, i.jsx)("pre", {
                        className:
                          "max-h-[80vh] overflow-auto whitespace-pre-wrap text-xs",
                        children: JSON.stringify(x[g], null, 2),
                      }),
                    },
                    "DebugMessageModal-".concat(g),
                  ),
                k &&
                  (0, i.jsx)(
                    j.Z,
                    {
                      isOpen: !0,
                      onClose: function () {
                        return C(!1);
                      },
                      type: "success",
                      size: "fullscreen",
                      children: (0, i.jsx)(I, { clientThreadId: n }),
                    },
                    "DebugTreeViewer",
                  ),
              ],
            })
          : null;
      }
      function D(e, n) {
        var t = JSON.stringify(
            { conversation_id: o.tQ.getServerThreadId(e), messages: n },
            null,
            2,
          ),
          r = new Blob([t], { type: "application/json" }),
          a = URL.createObjectURL(r),
          s = document.createElement("a");
        (s.href = a),
          (s.download = "messages-".concat(o.tQ.getServerThreadId(e), ".json")),
          s.click(),
          URL.revokeObjectURL(a);
      }
      function U(e) {
        var n = e.clientThreadId,
          t = e.messages,
          a = (0, d.useCallback)(
            function () {
              D(n, t);
            },
            [n, t],
          );
        return (0, i.jsxs)(g.z, {
          onClick: a,
          color: "dark",
          size: "small",
          children: [
            (0, i.jsx)(f._hL, { className: "icon-sm" }),
            (0, i.jsx)(m.Z, (0, r._)({}, z.downloadRawConversation)),
          ],
        });
      }
      var F = p.Z.div(S()),
        L = p.Z.pre(M()),
        V = p.Z.div(O()),
        z = (0, x.vU)({
          debugTitle: {
            id: "DebugSidebar.debugTitle",
            description: "Title of the Debug sidebar",
            defaultMessage: "Debug",
          },
          copyText: {
            id: "DebugSidebar.copyText",
            description: "Button text to copy the content to clipboard",
            defaultMessage: "Copy text",
          },
          downloadRawConversation: {
            id: "DebugSidebar.downloadRawConversation",
            description: "Button text to download raw conversation",
            defaultMessage: "Download raw conversation",
          },
          closeSidebar: {
            id: "DebugSidebar.closeSidebar",
            description: "Aria-label for the close sidebar button",
            defaultMessage: "Close sidebar",
          },
        });
    },
    51704: function (e, n, t) {
      t.d(n, {
        N: function () {
          return r;
        },
      });
      var r = (0, t(78103).ZP)(function () {
        return { forceParagen: !1 };
      });
    },
    19012: function (e, n, t) {
      var r = t(70079);
      n.Z = function () {
        var e = (0, r.useRef)(!1);
        return (
          (0, r.useEffect)(function () {
            return (
              (e.current = !0),
              function () {
                e.current = !1;
              }
            );
          }, []),
          (0, r.useCallback)(function () {
            return e.current;
          }, [])
        );
      };
    },
    87389: function (e, n, t) {
      t.d(n, {
        S: function () {
          return f;
        },
      });
      var r = t(21722),
        a = t(39324),
        s = t(22830),
        i = t(75883),
        o = t(62509),
        c = t(12155),
        l = t(60554),
        u = t(70079),
        d = t(95137);
      function f() {
        var e,
          n,
          t = (0, l.useRouter)(),
          f = (0, o.kP)().session,
          m =
            (null == f
              ? void 0
              : null === (e = f.user) || void 0 === e
              ? void 0
              : e.idp) === "auth0",
          h = !!(null == f
            ? void 0
            : null === (n = f.user) || void 0 === n
            ? void 0
            : n.mfa),
          x = (0, s._)((0, u.useState)(!1), 2),
          p = x[0],
          g = x[1],
          v = (0, u.useCallback)(
            (0, r._)(function () {
              var e;
              return (0, i.Jh)(this, function (n) {
                if (
                  ((e = new URL(t.asPath, window.location.origin).toString()),
                  !m)
                )
                  throw Error("Only username/password users can enable MFA");
                if (!f) throw Error("No session found, cannot enable MFA");
                if ("mocked" === f.authProvider)
                  throw Error(
                    "Mock users can't enable MFA! Please setup Auth0 following the instructions in the README",
                  );
                return (
                  (0, c.signIn)(
                    f.authProvider,
                    { callbackUrl: e },
                    (0, a._)(
                      { prompt: "login" },
                      f.authProvider === o.Ho.OpenAI
                        ? {
                            login_hint: (0, o.W_)({
                              oai_enforce_mfa: !0,
                              idp: "openai",
                            }),
                          }
                        : { oai_enforce_mfa: "true" },
                    ),
                  ),
                  [2]
                );
              });
            }),
            [t.asPath, f, m],
          ),
          b = (0, u.useCallback)(
            (0, r._)(function () {
              var e;
              return (0, i.Jh)(this, function (n) {
                switch (n.label) {
                  case 0:
                    if (!m)
                      throw Error(
                        "Only username/password users can disable MFA",
                      );
                    if (!f) throw Error("No session found, cannot enable MFA");
                    if ("mocked" === f.authProvider)
                      throw Error(
                        "Mock users can't enable MFA! Please setup Auth0 following the instructions in the README",
                      );
                    return g(!0), [4, d.ZP.deleteMfa()];
                  case 1:
                    return (
                      n.sent(),
                      [
                        4,
                        (0, c.signOut)({
                          redirect: !1,
                          callbackUrl: "/auth/login?next=".concat(
                            encodeURIComponent(t.asPath),
                          ),
                        }),
                      ]
                    );
                  case 2:
                    return (e = n.sent()), g(!1), t.push(e.url), [2];
                }
              });
            }),
            [m, t, f],
          );
        return {
          setupMfa: v,
          isUsernamePassword: m,
          isLoggedInWithMfa: h,
          removeMfa: b,
          isLoading: p,
        };
      }
    },
  },
]);
