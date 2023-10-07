"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5608],
  {
    15608: function (n, t, e) {
      e.r(t),
        e.d(t, {
          addToCachedInstalledPlugins: function () {
            return y;
          },
          doOauthRedirect: function () {
            return b;
          },
          getOauthCallbackUrl: function () {
            return k;
          },
          updateCachedApprovedPlugins: function () {
            return v;
          },
          useFetchManifestAndSpec: function () {
            return w;
          },
          useInstallPlugin: function () {
            return m;
          },
          useUninstallPlugin: function () {
            return _;
          },
        });
      var r = e(21722),
        a = e(39324),
        i = e(71209),
        o = e(22830),
        s = e(81949),
        u = e(75883),
        c = e(95137),
        l = e(13995),
        p = e(74686),
        f = e(70079),
        d = e(73908),
        h = e(35101),
        g = e(14444);
      function m(n) {
        var t = n.onSuccess,
          e = n.onError,
          r = n.onSettled,
          a = (0, l.NL)(),
          i = (0, p.D)(c.ZP.updatePluginUserSettings.bind(c.ZP), {
            onSuccess: function (n) {
              y(n, a), v(n, a), t(n);
            },
            onError: e,
            onSettled: r,
          }).mutate;
        return (0, f.useCallback)(
          function (n) {
            i({ pluginId: n, isInstalled: !0 });
          },
          [i],
        );
      }
      function _(n) {
        var t = n.onSuccess,
          e = n.onError,
          r = n.onSettled,
          a = (0, l.NL)(),
          i = (0, p.D)(c.ZP.updatePluginUserSettings.bind(c.ZP), {
            onSuccess: function (n) {
              (function (n, t) {
                var e = g.Z;
                t.setQueryData(e, function (t) {
                  var e = (0, s._)((null == t ? void 0 : t.items) || []),
                    r = e.findIndex(function (t) {
                      return t.id === n.id;
                    });
                  return (
                    -1 !== r && e.splice(r, 1), { count: e.length, items: e }
                  );
                });
              })(n, a),
                v(n, a),
                t(n);
            },
            onError: e,
            onSettled: r,
          }).mutate;
        return (0, f.useCallback)(
          function (n) {
            i({ pluginId: n, isInstalled: !1 });
          },
          [i],
        );
      }
      function y(n, t) {
        var e = g.Z;
        t.setQueryData(e, function (t) {
          var e = (0, s._)((null == t ? void 0 : t.items) || []),
            r = e.findIndex(function (t) {
              return t.id === n.id;
            });
          return (
            -1 !== r ? (e[r] = n) : e.push(n), { count: e.length, items: e }
          );
        });
      }
      function v(n, t) {
        var e = h.V;
        t.setQueriesData(e, function (t) {
          if (!t) return t;
          var e = t.items.findIndex(function (t) {
            return t.id === n.id;
          });
          if (-1 === e) return t;
          var r = (0, s._)(t.items);
          return (r[e] = n), (0, i._)((0, a._)({}, t), { items: r });
        });
      }
      function b(n) {
        return P.apply(this, arguments);
      }
      function P() {
        return (P = (0, r._)(function (n) {
          var t, e;
          return (0, u.Jh)(this, function (r) {
            switch (r.label) {
              case 0:
                return (
                  (t = ""
                    .concat(window.location.origin, "/aip/")
                    .concat(n.id, "/oauth/callback")),
                  [4, c.ZP.pluginOauthRedirect(n.id, t)]
                );
              case 1:
                return (
                  (e = r.sent()), (window.location.href = e.redirect_uri), [2]
                );
            }
          });
        })).apply(this, arguments);
      }
      function k(n) {
        var t = n.manifest.auth;
        if ("oauth" !== t.type || !n.oauth_client_id) return null;
        var e = new URLSearchParams({
          response_type: "code",
          client_id: n.oauth_client_id,
          redirect_uri: ""
            .concat(window.location.origin, "/aip/")
            .concat(n.id, "/oauth/callback"),
          scope: t.scope,
        });
        return (
          t.client_url.includes("slack.com") &&
            (e.delete("scope"), e.append("user_scope", t.scope)),
          "".concat(t.client_url, "?").concat(e)
        );
      }
      function w() {
        var n,
          t = (0, o._)((0, f.useState)(!1), 2),
          e = t[0],
          a = t[1];
        return {
          fetchManifestAndSpec: (0, f.useCallback)(
            ((n = (0, r._)(function (n) {
              var t, e, r, i, o, s, l, p, f;
              return (0, u.Jh)(this, function (u) {
                switch (u.label) {
                  case 0:
                    (t = n.domain),
                      (e = n.manifestAccessToken),
                      (r = n.onSuccess),
                      (i = n.onError),
                      (o = (0, d.NB)(t)),
                      (u.label = 1);
                  case 1:
                    if ((u.trys.push([1, 10, 11, 12]), a(!0), !(null != o)))
                      return [3, 3];
                    return [4, (0, d.Zb)(o)];
                  case 2:
                    if (void 0 === (s = u.sent())) return [2];
                    return (
                      r({
                        domain: o,
                        scrapeManifestResponse: {
                          plugin: s.plugin,
                          manifest_validation_info: s.manifest_validation_info,
                        },
                        apiValidationInfo: s.api_validation_info,
                      }),
                      [3, 9]
                    );
                  case 3:
                    return [
                      4,
                      c.ZP.scrapePluginManifest({
                        domain: t,
                        manifestAccessToken: e,
                      }),
                    ];
                  case 4:
                    if (!(l = u.sent()).plugin) return [3, 8];
                    u.label = 5;
                  case 5:
                    return (
                      u.trys.push([5, 7, , 8]),
                      [4, c.ZP.getPluginApi({ id: l.plugin.id })]
                    );
                  case 6:
                    return (p = u.sent().api_validation_info), [3, 8];
                  case 7:
                    return u.sent(), [3, 8];
                  case 8:
                    r({
                      domain: t,
                      scrapeManifestResponse: l,
                      apiValidationInfo: p,
                      manifestAccessToken: e,
                    }),
                      (u.label = 9);
                  case 9:
                    return [3, 12];
                  case 10:
                    return (f = u.sent()), i(null != o ? f : void 0), [3, 12];
                  case 11:
                    return a(!1), [7];
                  case 12:
                    return [2];
                }
              });
            })),
            function (t) {
              return n.apply(this, arguments);
            }),
            [],
          ),
          isLoading: e,
        };
      }
    },
    73908: function (n, t, e) {
      e.d(t, {
        NB: function () {
          return m;
        },
        Zb: function () {
          return _;
        },
        cf: function () {
          return g;
        },
        qZ: function () {
          return f;
        },
        wR: function () {
          return p;
        },
      });
      var r = e(21722),
        a = e(39324),
        i = e(75883),
        o = e(95954),
        s = e(95137),
        u = e(8844),
        c = e(1703),
        l = e(88798);
      function p(n) {
        var t,
          e,
          r,
          a,
          i =
            null !==
              (a =
                null === (t = n.metadata) || void 0 === t
                  ? void 0
                  : null === (e = t.invoked_plugin) || void 0 === e
                  ? void 0
                  : e.http_api_call_data) && void 0 !== a
              ? a
              : null === (r = n.metadata) || void 0 === r
              ? void 0
              : r.http_api_call_data;
        if (void 0 !== i) {
          if (n.author.role !== o.uU.Assistant) {
            console.error(
              "Refusing to make localhost plugin HTTP call from non-assistant message",
              n,
            );
            return;
          }
          if (
            "object" != typeof i ||
            "string" != typeof i.namespace ||
            0 === i.namespace.length ||
            "string" != typeof i.function_name ||
            0 === i.function_name.length ||
            "string" != typeof i.parent_message_id ||
            0 === i.parent_message_id.length ||
            "string" != typeof i.url ||
            0 === i.url.length ||
            "string" != typeof i.method ||
            !["get", "post", "put", "delete", "patch"].includes(i.method) ||
            !Array.isArray(i.qs_params) ||
            i.qs_params.some(function (n) {
              return (
                !Array.isArray(n) ||
                2 !== n.length ||
                "string" != typeof n[0] ||
                "string" != typeof n[1]
              );
            }) ||
            "object" != typeof i.headers ||
            Object.keys(i.headers).some(function (n) {
              return "string" != typeof n;
            }) ||
            Object.values(i.headers).some(function (n) {
              return "string" != typeof n;
            }) ||
            !(
              null === i.body ||
              ("object" == typeof i.body &&
                Object.keys(i.body).every(function (n) {
                  return "string" == typeof n;
                }))
            ) ||
            "string" != typeof i.api_function_type ||
            !["kwargs", "chat"].includes(i.api_function_type)
          ) {
            console.error(
              "Refusing to make localhost plugin HTTP call with invalid metadata",
              n,
            );
            return;
          }
          if (!/^https?:\/\/localhost:/.test(i.url)) {
            console.error(
              "Refusing to make localhost plugin HTTP call with non-localhost URL",
              n,
            );
            return;
          }
          return i;
        }
      }
      function f(n) {
        return d.apply(this, arguments);
      }
      function d() {
        return (d = (0, r._)(function (n) {
          var t;
          return (0, i.Jh)(this, function (e) {
            switch (e.label) {
              case 0:
                return (
                  e.trys.push([0, 2, , 3]),
                  [
                    4,
                    (function (n) {
                      return h.apply(this, arguments);
                    })(n),
                  ]
                );
              case 1:
                return [2, e.sent()];
              case 2:
                return (
                  console.error(
                    "Error making localhost plugin HTTP call",
                    (t = e.sent()),
                  ),
                  [
                    2,
                    [
                      {
                        id: (0, u.Z)(),
                        author: { role: o.uU.Tool, name: "plugin_service" },
                        content: {
                          content_type: o.PX.Text,
                          parts: [
                            "Error making localhost plugin HTTP call: ".concat(
                              t,
                            ),
                          ],
                        },
                        recipient: "all",
                      },
                    ],
                  ]
                );
              case 3:
                return [2];
            }
          });
        })).apply(this, arguments);
      }
      function h() {
        return (h = (0, r._)(function (n) {
          var t, e, r, s;
          function c(n) {
            return Object.keys(n).map(function (n) {
              return n.toLowerCase();
            });
          }
          return (0, i.Jh)(this, function (i) {
            switch (i.label) {
              case 0:
                var l;
                if (
                  ((t = { "content-type": "application/json" }),
                  (l = [c(n.headers), c(t)].flat()),
                  new Set(l).size !== l.length)
                )
                  throw Error(
                    "Refusing to make localhost plugin HTTP call with duplicate header keys",
                  );
                return (
                  (e = n.url),
                  n.qs_params.length > 0 &&
                    (e = e + "?" + new URLSearchParams(n.qs_params)),
                  (r = void 0),
                  null !== n.body && (r = JSON.stringify(n.body)),
                  [
                    4,
                    fetch(e, {
                      method: n.method,
                      headers: (0, a._)({}, t, n.headers),
                      body: r,
                    }),
                  ]
                );
              case 1:
                return [4, i.sent().text()];
              case 2:
                if (((s = i.sent()), "chat" === n.api_function_type))
                  return [2, [JSON.parse(s)]];
                if ("kwargs" === n.api_function_type)
                  return [
                    2,
                    [
                      {
                        id: (0, u.Z)(),
                        author: {
                          role: o.uU.Tool,
                          name: ""
                            .concat(n.namespace, ".")
                            .concat(n.function_name),
                        },
                        content: { content_type: o.PX.Text, parts: [s] },
                        recipient: "all",
                      },
                    ],
                  ];
                throw Error("Not implemented");
            }
          });
        })).apply(this, arguments);
      }
      function g(n) {
        return !!m(n.domain);
      }
      function m(n) {
        return /^localhost:\d+$/.test(n)
          ? "http://".concat(n)
          : /^https?:\/\/localhost:\d+$/.test(n)
          ? n
          : null;
      }
      function _(n) {
        return y.apply(this, arguments);
      }
      function y() {
        return (y = (0, r._)(function (n) {
          var t, e, r, a, o, u;
          return (0, i.Jh)(this, function (i) {
            switch (i.label) {
              case 0:
                return (
                  i.trys.push([0, 3, , 4]),
                  [4, fetch(n + "/.well-known/ai-plugin.json")]
                );
              case 1:
                return [4, i.sent().json()];
              case 2:
                return (e = i.sent()), [3, 4];
              case 3:
                return (
                  i.sent(),
                  l.m.danger(
                    "Failed to fetch localhost manifest. Check to ensure your localhost is running and your localhost server has CORS enabled.",
                  ),
                  [2]
                );
              case 4:
                if (
                  null ==
                  (r =
                    null == e
                      ? void 0
                      : null === (t = e.api) || void 0 === t
                      ? void 0
                      : t.url)
                )
                  return (
                    l.m.danger(
                      "Localhost manifest is missing OpenAPI spec URL.",
                    ),
                    [2]
                  );
                if (
                  "pathname" ===
                  (a = (function (n) {
                    try {
                      return new URL(n), "full url";
                    } catch (t) {
                      if (n.startsWith("/")) return "pathname";
                      return "neither";
                    }
                  })(r))
                )
                  r = n + r;
                else if ("neither" === a)
                  return (
                    l.m.danger(
                      "Localhost manifest OpenAPI spec URL is not a valid URL or path.",
                    ),
                    [2]
                  );
                i.label = 5;
              case 5:
                return i.trys.push([5, 8, , 9]), [4, fetch(r)];
              case 6:
                return [4, i.sent().text()];
              case 7:
                return (o = i.sent()), [3, 9];
              case 8:
                return (
                  i.sent(),
                  l.m.danger("Failed to fetch localhost OpenAPI spec."),
                  [2]
                );
              case 9:
                try {
                  u = c.ZP.parse(o);
                } catch (n) {}
                try {
                  u = JSON.parse(o);
                } catch (n) {}
                if (null == u)
                  return (
                    l.m.danger(
                      "Failed to parse localhost OpenAPI spec as JSON or YAML.",
                    ),
                    [2]
                  );
                i.label = 10;
              case 10:
                return (
                  i.trys.push([10, 12, , 13]),
                  [
                    4,
                    s.ZP.createOrUpdateLocalhostPlugin({
                      localhost: n,
                      manifest: e,
                      openapiSpec: u,
                    }),
                  ]
                );
              case 11:
                return [2, i.sent()];
              case 12:
                return (
                  i.sent(),
                  l.m.danger(
                    "Failed to create or update localhost plugin at ".concat(n),
                  ),
                  [3, 13]
                );
              case 13:
                return [2];
            }
          });
        })).apply(this, arguments);
      }
    },
    35101: function (n, t, e) {
      e.d(t, {
        V: function () {
          return s;
        },
        Z: function () {
          return u;
        },
      });
      var r = e(81949),
        a = e(95137),
        i = e(54118),
        o = e(5268),
        s = ["approvedAip"];
      function u(n) {
        var t = n.category,
          e = n.search,
          u = n.offset,
          c = n.limit,
          l = (0, i.Fl)().isPluginsAvailable;
        return (0, o.a)(
          (0, r._)(s).concat([
            { category: t, search: e },
            { limit: c, offset: u },
          ]),
          function () {
            return a.ZP.getApprovedPlugins({
              offset: u,
              limit: c,
              category: t,
              search: e,
            });
          },
          {
            enabled: l,
            keepPreviousData: !0,
            onError: function (n) {
              console.error(n);
            },
          },
        );
      }
    },
  },
]);
