"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5120],
  {
    52696: function (e, t, a) {
      a.d(t, {
        $3: function () {
          return g;
        },
        Ap: function () {
          return d;
        },
        CV: function () {
          return h;
        },
        GA: function () {
          return u;
        },
        Gk: function () {
          return b;
        },
        Ix: function () {
          return p;
        },
        _O: function () {
          return x;
        },
        bE: function () {
          return m;
        },
        cI: function () {
          return f;
        },
        qH: function () {
          return c;
        },
      });
      var n = a(96237),
        s = a(75641),
        i = a(78931),
        o = a(62509),
        r = a(70079),
        l = a(70671);
      function d() {
        var e = (0, l.Z)(),
          t = e.formatMessage(v.adminRoleName),
          a = e.formatMessage(v.ownerRoleName),
          i = e.formatMessage(v.standardRoleName);
        return (0, r.useMemo)(
          function () {
            var e;
            return (
              (e = {}),
              (0, n._)(e, s.r3.OWNER, a),
              (0, n._)(e, s.r3.ADMIN, t),
              (0, n._)(e, s.r3.STANDARD, i),
              e
            );
          },
          [a, t, i],
        );
      }
      function c(e) {
        var t = (0, l.Z)();
        return e
          ? e.structure === s.CZ.PERSONAL
            ? t.formatMessage(v.personalPlanName)
            : t.formatMessage(v.enterprisePlanName)
          : t.formatMessage(v.personalPlanName);
      }
      function u(e) {
        return h((0, l.Z)(), e);
      }
      function g() {
        var e = (0, i.ec)(function (e) {
          return e.currentWorkspace;
        });
        return h((0, l.Z)(), e);
      }
      function h(e, t) {
        var a;
        return t && t.structure !== s.CZ.PERSONAL
          ? null !== (a = t.name) && void 0 !== a
            ? a
            : e.formatMessage(v.defaultWorkspaceTitle)
          : e.formatMessage(v.personalWorkspaceTitle);
      }
      function f() {
        var e,
          t,
          a,
          n,
          s = (0, o.kP)().session;
        return null !==
          (n =
            null !==
              (a =
                null == s
                  ? void 0
                  : null === (e = s.user) || void 0 === e
                  ? void 0
                  : e.name) && void 0 !== a
              ? a
              : null == s
              ? void 0
              : null === (t = s.user) || void 0 === t
              ? void 0
              : t.email) && void 0 !== n
          ? n
          : null;
      }
      function p(e) {
        var t = (0, i.ec)(function (e) {
            return e.currentWorkspace;
          }),
          a = (0, i.ec)(i.F_.isPersonalWorkspace),
          n = (0, i.$T)(),
          o = u(t),
          r = f();
        return e && !n
          ? e.structure === s.CZ.PERSONAL
            ? r
            : e.name
          : t
          ? a
            ? r
            : o
          : r;
      }
      function x() {
        return (0, i.ec)(function (e) {
          return e.workspaces;
        });
      }
      function b(e) {
        var t = x().find(function (t) {
          return t.id === e;
        });
        return (null == t ? void 0 : t.role) === s.r3.OWNER;
      }
      function m(e) {
        var t = x().find(function (t) {
          return t.id === e;
        });
        return (null == t ? void 0 : t.role) === s.r3.ADMIN;
      }
      var v = (0, a(94968).vU)({
        defaultWorkspaceTitle: {
          id: "useWorkspaces.defaultWorkspaceTitle",
          defaultMessage: "Untitled Workspace",
          description: "title for workspace without a name",
        },
        personalWorkspaceTitle: {
          id: "useWorkspaces.personalWorkspaceTitle",
          defaultMessage: "Personal account",
          description: "title for personal workspace",
        },
        personalPlanName: {
          id: "useWorkspaces.personalPlanName",
          defaultMessage: "Personal",
          description: "label for personal tier account",
        },
        enterprisePlanName: {
          id: "useWorkspaces.enterprisePlanName",
          defaultMessage: "Enterprise",
          description: "label for enterprise tier account",
        },
        adminRoleName: {
          id: "useWorkspaces.adminRoleName",
          defaultMessage: "Admin",
          description: "Role name for an admin user",
        },
        ownerRoleName: {
          id: "useWorkspaces.ownerRoleName",
          defaultMessage: "Owner",
          description: "Role name for an owner user",
        },
        standardRoleName: {
          id: "useWorkspacews.standardRoleName",
          defaultMessage: "Member",
          description: "Role name for a standard user",
        },
      });
    },
    10580: function (e, t, a) {
      var n = a(39324),
        s = a(71209),
        i = a(70216),
        o = a(35250),
        r = a(47103),
        l = a(70079),
        d = a(1454),
        c = a(89705),
        u = {
          Root: r.fC,
          Trigger: function (e) {
            return (0, o.jsx)(c.J7, (0, n._)({ $as: r.xz }, e));
          },
          Value: r.B4,
          Icon: function () {
            return (0, o.jsx)(r.JO, {
              children: (0, o.jsx)(d.bTu, { className: "icon-sm" }),
            });
          },
          Portal: r.h_,
          Content: function (e) {
            var t = e.children,
              a = (0, i._)(e, ["children"]);
            return (0, o.jsxs)(
              c.ay,
              (0, s._)(
                (0, n._)(
                  {
                    $as: r.VY,
                    side: "bottom",
                    sideOffset: 4,
                    position: "popper",
                  },
                  a,
                ),
                {
                  children: [
                    (0, o.jsx)(r.u_, {
                      className:
                        "flex h-8 cursor-default items-center justify-center bg-white text-gray-700 dark:bg-gray-900 dark:text-gray-200",
                      children: (0, o.jsx)(d.rH8, { className: "icon-sm" }),
                    }),
                    (0, o.jsx)(r.l_, { children: t }),
                    (0, o.jsx)(r.$G, {
                      className:
                        "flex h-8 cursor-default items-center justify-center bg-white text-gray-700 dark:bg-gray-900 dark:text-gray-200",
                      children: (0, o.jsx)(d.bTu, { className: "icon-sm" }),
                    }),
                  ],
                },
              ),
            );
          },
          Item: l.forwardRef(function (e, t) {
            var a = e.children,
              l = (0, i._)(e, ["children"]);
            return (0, o.jsx)(
              c.mS,
              (0, s._)((0, n._)({ $as: r.ck, ref: t }, l), {
                children: (0, o.jsx)(r.eT, { children: a }),
              }),
            );
          }),
        };
      t.Z = u;
    },
    89705: function (e, t, a) {
      a.d(t, {
        J7: function () {
          return l;
        },
        ay: function () {
          return c;
        },
        mS: function () {
          return d;
        },
      });
      var n = a(4337),
        s = a(21389);
      function i() {
        var e = (0, n._)([
          "\ntext-gray-700 border border-transparent inline-flex h-9 items-center justify-center gap-4 rounded-md bg-white px-3 text-sm\ndark:text-gray-200 dark:transparent dark:bg-transparent\nleading-none outline-none cursor-pointer\nhover:bg-gray-50 dark:hover:bg-[#494A54]\nfocus-visible:border-blue-500 dark:focus-visible:border-blue-500\nradix-state-active:text-gray-600 dark:radix-state-active::text-gray-400\nradix-disabled:cursor-auto radix-disabled:bg-transparent radix-disabled:text-gray-500 dark:radix-disabled:bg-transparent dark:radix-disabled:text-gray-500\n",
        ]);
        return (
          (i = function () {
            return e;
          }),
          e
        );
      }
      function o() {
        var e = (0, n._)([
          "\nrelative flex h-8 cursor-pointer select-none items-center rounded-md pl-3 pr-7 text-sm leading-none text-gray-700 hover:bg-gray-50 radix-disabled:pointer-events-none radix-highlighted:bg-gray-50 radix-disabled:text-gray-300 radix-highlighted:outline-none dark:text-gray-200 dark:hover:bg-[#2E2F33] dark:radix-highlighted:bg-[#2E2F33] dark:radix-disabled:text-gray-600 dark:radix-highlighted:hover:bg-[#2E2F33]\n",
        ]);
        return (
          (o = function () {
            return e;
          }),
          e
        );
      }
      function r() {
        var e = (0, n._)([
          "\nmin-w-[220px] rounded-lg bg-white dark:bg-gray-900 p-[5px] shadow-xs will-change-[opacity,transform] radix-side-bottom:animate-slideUpAndFade radix-side-left:animate-slideRightAndFade radix-side-right:animate-slideLeftAndFade radix-side-top:animate-slideDownAndFade\n",
        ]);
        return (
          (r = function () {
            return e;
          }),
          e
        );
      }
      var l = s.Z.button(i()),
        d = s.Z.div(o()),
        c = s.Z.div(r());
    },
    41230: function (e, t, a) {
      a.d(t, {
        oC: function () {
          return er;
        },
        ZP: function () {
          return ei;
        },
        Wu: function () {
          return ev;
        },
        TP: function () {
          return em;
        },
        up: function () {
          return ej;
        },
        Dj: function () {
          return eM;
        },
      });
      var n,
        s,
        i = a(39324),
        o = a(71209),
        r = a(22830),
        l = a(4337),
        d = a(35250),
        c = a(75641),
        u = a(95137),
        g = a(32877),
        h = a(54118),
        f = a(78931),
        p = a(32542),
        x = a(20890),
        b = a(33669),
        m = a(87389),
        v = a(65374),
        M = a(74686),
        j = a(62509),
        y = a(19841),
        C = a(91530),
        k = a.n(C),
        w = a(77997),
        L = a(70079),
        D = a(1454),
        T = a(13002),
        Z = a(70671),
        _ = a(32004),
        P = a(94968),
        A = a(21389),
        S = a(67273),
        E = a(79579),
        N = a(89368),
        B = a(10580),
        W = a(45635),
        I = a(51973),
        F = a(47917),
        O = a(82816),
        R = a(56817),
        H = a(21722),
        V = a(75883),
        U = a(47428),
        G = a(13995),
        z = a(5268),
        Y = a(66085),
        q = a(55629),
        J = a(88798),
        $ = ["sharedConversations"],
        Q = (0, P.vU)({
          name: {
            id: "sharedConversationModal.name",
            defaultMessage: "Name",
            description: "Table column header",
          },
          dateShared: {
            id: "sharedConversationModal.dateShared",
            defaultMessage: "Date shared",
            description: "Table column header",
          },
          loading: {
            id: "sharedConversationModal.loading",
            defaultMessage: "Loading...",
            description: "Loading message",
          },
          somethingWentWrong: {
            id: "sharedConversationModal.somethingWentWrong",
            defaultMessage: "Something went wrong...",
            description: "Error message",
          },
          retry: {
            id: "sharedConversationModal.retry",
            defaultMessage: "Retry",
            description: "Retry button text",
          },
          noSharedConversations: {
            id: "sharedConversationModal.noSharedConversations",
            defaultMessage: "You have no shared links.",
            description: "No shared links message",
          },
          title: {
            id: "sharedConversationModal.title",
            defaultMessage: "Shared Links",
            description: "Shared links modal title",
          },
          goToOriginConversation: {
            id: "sharedConversationModal.goToOriginConversation",
            defaultMessage: "View source chat",
            description: "Label for conversation icon",
          },
          deleteSharedLink: {
            id: "sharedConversationModal.deleteSharedLink",
            defaultMessage: "Delete shared link",
            description: "Label for delete shared link icon",
          },
          deleteSharedLinkFailed: {
            id: "sharedConversationModal.deleteSharedLinkFailed",
            defaultMessage: "Deleting shared link failed",
            description: "Toaster message when deleting share link fails",
          },
          deleteAllSharedLinks: {
            id: "sharedConversationModal.deleteSharedAllConversations",
            defaultMessage: "Delete all shared links",
            description: "Menu item for deleting all shared links",
          },
          deleteAllSharedLinksConfirm: {
            id: "sharedConversationModal.deleteSharedAllConversationsConfirm",
            defaultMessage:
              "Are you sure you want to delete all your shared links?",
            description: "Confirmation message for deleting share links",
          },
          deleteAllSharedLinksFailed: {
            id: "sharedConversationModal.deleteSharedAllConversationsFailed",
            defaultMessage: "Deleting shared links failed",
            description: "Toaster message when deleting all share links fails",
          },
        });
      function K() {
        var e = (0, G.NL)(),
          t = (0, Z.Z)(),
          a = (0, M.D)({
            mutationFn: function () {
              return u.ZP.deleteAllSharedConversations();
            },
            onSettled: function () {
              e.invalidateQueries($);
            },
            onError: function () {
              J.m.danger(t.formatMessage(Q.deleteAllSharedLinksFailed));
            },
          }).mutate;
        return (0, d.jsxs)(U.fC, {
          children: [
            (0, d.jsx)(U.xz, {
              asChild: !0,
              children: (0, d.jsx)("button", {
                className:
                  "text-gray-500 hover:text-gray-600 radix-state-open:text-gray-600 dark:hover:text-gray-400 dark:radix-state-open:text-gray-400",
                children: (0, d.jsx)(D.K9M, { className: "icon-sm" }),
              }),
            }),
            (0, d.jsx)(U.Uv, {
              children: (0, d.jsx)(U.VY, {
                className:
                  "min-w-[8rem] rounded-md bg-white py-1 shadow-lg dark:bg-gray-800",
                side: "bottom",
                sideOffset: 4,
                children: (0, d.jsx)(U.ck, {
                  onClick: function () {
                    window.confirm(
                      t.formatMessage(Q.deleteAllSharedLinksConfirm),
                    ) && a();
                  },
                  className:
                    "cursor-pointer select-none px-2 py-1 text-red-500 radix-highlighted:bg-gray-50 dark:radix-highlighted:bg-gray-700",
                  children: (0, d.jsx)(
                    _.Z,
                    (0, i._)({}, Q.deleteAllSharedLinks),
                  ),
                }),
              }),
            }),
          ],
        });
      }
      function X() {
        return u.ZP.getSharedConversations();
      }
      function ee(e) {
        var t,
          a = e.sharedConversation,
          n = (0, Z.Z)(),
          s = (0, G.NL)(),
          i = (0, M.D)({
            mutationFn:
              ((t = (0, H._)(function (e) {
                var t;
                return (0, V.Jh)(this, function (a) {
                  return (
                    (t = e.sharedConversationId),
                    [2, u.ZP.deleteShareLink({ share_id: t })]
                  );
                });
              })),
              function (e) {
                return t.apply(this, arguments);
              }),
            onSettled: function () {
              s.invalidateQueries($);
            },
            onError: function () {
              J.m.danger(n.formatMessage(Q.deleteSharedLinkFailed));
            },
          }),
          o = i.mutate,
          r = i.isLoading,
          l =
            null !== a.workspace_id
              ? "/share/e/".concat(a.id)
              : "/share/".concat(a.id);
        return (0, d.jsxs)(q.Z.Row, {
          disabled: r,
          children: [
            (0, d.jsx)(q.Z.Cell, {
              children: (0, d.jsxs)("a", {
                href: l,
                target: "_blank",
                rel: "noreferrer",
                className:
                  "inline-flex items-center gap-2 align-top text-blue-500 dark:text-blue-400",
                children: [
                  (0, d.jsx)(D.XKb, { className: "icon-sm flex-shrink-0" }),
                  a.title,
                ],
              }),
            }),
            (0, d.jsx)(q.Z.Cell, {
              children:
                null != a.create_time
                  ? (0, d.jsx)(P.Ji, {
                      value: a.create_time,
                      month: "long",
                      year: "numeric",
                      day: "numeric",
                    })
                  : null,
            }),
            (0, d.jsx)(q.Z.Cell, {
              children: (0, d.jsxs)(q.Z.Actions, {
                children: [
                  (0, d.jsx)(W.u, {
                    label: n.formatMessage(Q.goToOriginConversation),
                    sideOffset: 4,
                    side: "top",
                    children: (0, d.jsx)("a", {
                      href: (0, Y.ZV)(a.conversation_id),
                      target: "_blank",
                      rel: "noreferrer",
                      "aria-label": n.formatMessage(Q.goToOriginConversation),
                      className:
                        "cursor-pointer text-gray-500 hover:text-gray-600 dark:hover:text-gray-400",
                      children: (0, d.jsx)(D.IC0, { className: "icon-sm" }),
                    }),
                  }),
                  (0, d.jsx)(W.u, {
                    label: n.formatMessage(Q.deleteSharedLink),
                    sideOffset: 4,
                    side: "top",
                    children: (0, d.jsx)("button", {
                      onClick: function () {
                        o({ sharedConversationId: a.id });
                      },
                      "aria-label": n.formatMessage(Q.deleteSharedLink),
                      className:
                        "text-gray-500 hover:text-gray-600 dark:hover:text-gray-400",
                      children: (0, d.jsx)(D.Ybf, { className: "icon-sm" }),
                    }),
                  }),
                ],
              }),
            }),
          ],
        });
      }
      function et(e) {
        var t,
          a = e.onClose,
          n = (0, z.a)({ queryKey: $, queryFn: X, refetchOnMount: "always" }),
          s = n.data,
          o = n.isLoading,
          r = n.isError,
          l = n.refetch,
          c = (0, Z.Z)();
        return (
          (t = o
            ? (0, d.jsx)("div", {
                className: "pb-8 text-gray-400 dark:text-gray-600",
                children: (0, d.jsx)(_.Z, (0, i._)({}, Q.loading)),
              })
            : r
            ? (0, d.jsxs)("div", {
                children: [
                  (0, d.jsx)("div", {
                    className: "mb-4 text-red-500",
                    children: (0, d.jsx)(
                      _.Z,
                      (0, i._)({}, Q.somethingWentWrong),
                    ),
                  }),
                  (0, d.jsx)("div", {
                    children: (0, d.jsx)(S.z, {
                      color: "neutral",
                      onClick: function () {
                        l();
                      },
                      children: (0, d.jsx)(_.Z, (0, i._)({}, Q.retry)),
                    }),
                  }),
                ],
              })
            : 0 === s.total
            ? (0, d.jsx)("div", {
                className: "pb-8 text-gray-600 dark:text-gray-400",
                children: (0, d.jsx)(
                  _.Z,
                  (0, i._)({}, Q.noSharedConversations),
                ),
              })
            : (0, d.jsxs)(q.Z.Root, {
                className: "max-h-[28rem]",
                size: "compact",
                children: [
                  (0, d.jsxs)(q.Z.Header, {
                    children: [
                      (0, d.jsx)(q.Z.HeaderCell, {
                        children: (0, d.jsx)(_.Z, (0, i._)({}, Q.name)),
                      }),
                      (0, d.jsx)(q.Z.HeaderCell, {
                        children: (0, d.jsx)(_.Z, (0, i._)({}, Q.dateShared)),
                      }),
                      (0, d.jsx)(q.Z.HeaderCell, {
                        textAlign: "right",
                        children: (0, d.jsx)(K, {}),
                      }),
                    ],
                  }),
                  (0, d.jsx)(q.Z.Body, {
                    children: s.items.map(function (e) {
                      return (0, d.jsx)(ee, { sharedConversation: e }, e.id);
                    }),
                  }),
                ],
              })),
          (0, d.jsx)(N.Z, {
            isOpen: !0,
            onClose: a,
            size: "custom",
            className: "max-w-5xl",
            type: "success",
            title: c.formatMessage(Q.title),
            closeButton: (0, d.jsx)(E.ZP.CloseButton, { onClose: a }),
            children: t,
          })
        );
      }
      var ea = a(97674),
        en = a(2295);
      function es() {
        var e = (0, l._)(["block text-sm font-medium mb-1"]);
        return (
          (es = function () {
            return e;
          }),
          e
        );
      }
      function ei(e) {
        var t = e.onClose,
          a = e.onToggleHistoryDisabled,
          n = e.onDeleteHistory,
          l = (0, Z.Z)(),
          c = (0, en.LC)(),
          u = (0, b.w$)(),
          M = (0, r._)((0, L.useState)(!1), 2),
          C = M[0],
          w = M[1],
          D = (0, r._)((0, L.useState)(!1), 2),
          P = D[0],
          A = D[1],
          S = (0, r._)((0, L.useState)(!1), 2),
          B = S[0],
          W = S[1],
          I = (0, r._)((0, L.useState)(!1), 2),
          R = I[0],
          H = I[1],
          V = (0, r._)((0, L.useState)(s.General), 2),
          U = V[0],
          G = V[1],
          z = (0, L.useContext)(p.QL),
          Y = z.historyDisabled,
          q = z.toggleHistoryDisabled,
          J = (0, O.OS)(function (e) {
            return e.isOpen;
          }),
          $ = (0, f.hz)(),
          Q = (0, f.ec)(f.F_.isBusinessWorkspace),
          K = (!Q || $.has(g.L0.WorkspaceShareLinks)) && $.has(g.RJ),
          X = (0, j.kP)().session,
          ee = (0, h.Fl)(),
          ea = ee.isBetaFeaturesUiEnabled,
          es = ee.isPluginsAvailable,
          ei = ee.isBrowsingAvailable,
          eb = ee.isAdvancedDataAnalysisAvailable,
          em = (0, L.useCallback)(function () {
            w(!1);
          }, []),
          ev = (0, L.useCallback)(function () {
            A(!1);
          }, []),
          eM = (0, L.useCallback)(function () {
            W(!1);
          }, []),
          ej = (0, L.useCallback)(function () {
            w(!0);
          }, []),
          eC = (0, L.useCallback)(function () {
            A(!0);
          }, []),
          ek = (0, L.useCallback)(function () {
            W(!0);
          }, []),
          ew = (0, L.useCallback)(
            function () {
              null == a || a(), q();
            },
            [a, q],
          ),
          eL = (0, m.S)(),
          eD = eL.setupMfa,
          eT = eL.isUsernamePassword,
          eZ = eL.removeMfa,
          e_ = (0, L.useContext)(F.RD),
          eP = e_.locale,
          eA = e_.isBetaEligible;
        if (C) return (0, d.jsx)(eg, { onClose: em });
        if (P) return (0, d.jsx)(eu, { onClose: ev, onDeleteHistory: n });
        if (B) return (0, d.jsx)(ex, { onClose: eM });
        if (R)
          return (0, d.jsx)(et, {
            onClose: function () {
              H(!1);
            },
          });
        var eS,
          eE,
          eN = $.has(g.Tx) && (eA || eP !== x.ZW);
        return (0, d.jsx)(N.Z, {
          isOpen: !0,
          onClose: t,
          size: "custom",
          className: "md:max-w-[680px]",
          type: "success",
          title: l.formatMessage(ey.settings),
          closeButton: (0, d.jsx)(E.ZP.CloseButton, { onClose: t }),
          children: (0, d.jsxs)(v.fC, {
            className: "flex flex-col gap-6 md:flex-row",
            defaultValue: U,
            orientation: u ? "vertical" : void 0,
            onValueChange: function (e) {
              G(e);
            },
            children: [
              (0, d.jsxs)(v.aV, {
                className: (0, y.default)(
                  "-ml-[8px] flex min-w-[180px] flex-shrink-0",
                  u
                    ? "max-w-[200px] flex-col"
                    : "flex-row rounded-lg bg-gray-100 p-1 dark:bg-gray-800/30",
                ),
                children: [
                  (0, d.jsx)(eh, {
                    value: s.General,
                    icon: T.oq2,
                    label: (0, d.jsx)(_.Z, (0, i._)({}, ey.generalTab)),
                  }),
                  ea &&
                    (ei || es || eb) &&
                    (0, d.jsx)(eh, {
                      value: s.BetaFeatures,
                      icon: T.rTN,
                      label: (0, d.jsx)(_.Z, (0, i._)({}, ey.betaTab)),
                    }),
                  (0, d.jsx)(eh, {
                    value: s.DataControls,
                    icon: T.tQn,
                    label: (0, d.jsx)(_.Z, (0, i._)({}, ey.dataControlsTab)),
                  }),
                ],
              }),
              (0, d.jsxs)(ef, {
                value: s.General,
                children: [
                  (0, d.jsx)(ep, { children: (0, d.jsx)(ed, {}) }),
                  eN && (0, d.jsx)(ep, { children: (0, d.jsx)(ec, {}) }),
                  !Q &&
                    $.has("tools3_dev") &&
                    (0, d.jsx)(ep, {
                      children: (0, d.jsx)(er, {
                        label: l.formatMessage(ey.openPluginDevtools),
                        enabled: J,
                        onChange: O.Ds.setIsOpen,
                      }),
                    }),
                  (0, d.jsx)(ep, {
                    children: (0, d.jsx)(el, {
                      color: "danger",
                      disabled: !c,
                      label: l.formatMessage(ey.clearChatLabel),
                      buttonLabel: l.formatMessage(ey.clearChatButton),
                      onClick: eC,
                    }),
                  }),
                ],
              }),
              (0, d.jsx)(ef, {
                value: s.BetaFeatures,
                children: (0, d.jsx)(eo, {}),
              }),
              (0, d.jsxs)(ef, {
                value: s.DataControls,
                children: [
                  Q
                    ? (0, d.jsxs)(d.Fragment, {
                        children: [
                          (0, d.jsx)(ep, {
                            children: (0, d.jsx)(er, {
                              label: l.formatMessage(ey.chatHistoryLabel),
                              enabled: !Y,
                              onChange: ew,
                              description: (0, d.jsx)(
                                _.Z,
                                (0, o._)(
                                  (0, i._)({}, ey.chatHistoryOnlyDescription),
                                  {
                                    values: {
                                      link: function (e) {
                                        return (0, d.jsx)("a", {
                                          href: "https://help.openai.com/en/articles/7730893 ",
                                          target: "_blank",
                                          className: "underline",
                                          rel: "noreferrer",
                                          children: e,
                                        });
                                      },
                                    },
                                  },
                                ),
                              ),
                            }),
                          }),
                          (0, d.jsx)(ep, {
                            children: (0, d.jsx)(er, {
                              label: l.formatMessage(ey.chatTrainingLabel),
                              disabled: !0,
                              enabled: !1,
                              onChange: k(),
                              description: (0, d.jsx)(
                                _.Z,
                                (0, i._)(
                                  {},
                                  ey.chatTrainingEnterpriseDescription,
                                ),
                              ),
                              toggleTooltip: (0, d.jsx)(
                                _.Z,
                                (0, i._)({}, ey.chatTrainingEnterpriseTooltip),
                              ),
                            }),
                          }),
                        ],
                      })
                    : (0, d.jsx)(ep, {
                        children: (0, d.jsx)(er, {
                          label: l.formatMessage(ey.chatHistoryToggleLabel),
                          enabled: !Y,
                          onChange: ew,
                          description: (0, d.jsx)(
                            _.Z,
                            (0, o._)((0, i._)({}, ey.chatHistoryDescription), {
                              values: {
                                link: function (e) {
                                  return (0, d.jsx)("a", {
                                    href: "https://help.openai.com/en/articles/7730893 ",
                                    target: "_blank",
                                    className: "underline",
                                    rel: "noreferrer",
                                    children: e,
                                  });
                                },
                              },
                            }),
                          ),
                        }),
                      }),
                  K &&
                    (0, d.jsx)(ep, {
                      children: (0, d.jsx)(el, {
                        label: l.formatMessage(ey.sharedConversations),
                        buttonLabel: l.formatMessage(
                          ey.sharedConversationsButton,
                        ),
                        onClick: function () {
                          H(!0);
                        },
                      }),
                    }),
                  !Q &&
                    (0, d.jsxs)(d.Fragment, {
                      children: [
                        (0, d.jsx)(ep, {
                          children: (0, d.jsx)(el, {
                            label: l.formatMessage(ey.exportData),
                            buttonLabel: l.formatMessage(ey.exportButton),
                            onClick: ej,
                          }),
                        }),
                        (0, d.jsx)(ep, {
                          children: (0, d.jsx)(el, {
                            label: l.formatMessage(ey.deleteAccount),
                            buttonLabel: l.formatMessage(
                              ey.deleteAccountButton,
                            ),
                            color: "danger",
                            onClick: ek,
                          }),
                        }),
                      ],
                    }),
                  $.has(g.i) &&
                    !(null == X
                      ? void 0
                      : null === (eS = X.user) || void 0 === eS
                      ? void 0
                      : eS.mfa) &&
                    eT &&
                    (0, d.jsx)(ep, {
                      children: (0, d.jsx)(el, {
                        label: l.formatMessage(ey.enable2fa),
                        buttonLabel: l.formatMessage(ey.enable),
                        onClick: eD,
                      }),
                    }),
                  (null == X
                    ? void 0
                    : null === (eE = X.user) || void 0 === eE
                    ? void 0
                    : eE.mfa) &&
                    eT &&
                    (0, d.jsx)(ep, {
                      children: (0, d.jsx)(el, {
                        label: l.formatMessage(ey.disable2fa),
                        buttonLabel: l.formatMessage(ey.disable),
                        onClick: eZ,
                        color: "danger",
                      }),
                    }),
                ],
              }),
            ],
          }),
        });
      }
      function eo() {
        var e = (0, Z.Z)(),
          t = (0, h.N2)(),
          a = (0, h.Fl)(),
          n = a.isBrowsingAvailable,
          s = a.isBrowsingEnabled,
          o = a.isPluginsAvailable,
          r = a.isPluginsEnabled,
          l = a.isAdvancedDataAnalysisAvailable,
          g = a.isAdvancedDataAnalysisEnabled,
          f = a.isSunshineAvailable,
          p = a.isSunshineEnabled,
          x = (0, M.D)({
            mutationFn: function (e) {
              var t = e.feature,
                a = e.enabled;
              return u.ZP.setUserSettingsBetaFeature(t, a);
            },
            onSettled: t,
            onError: function () {
              J.m.danger(e.formatMessage(ey.betaSettingsUpdateFailed));
            },
          }),
          b = x.isLoading,
          m = x.variables,
          v = x.mutate,
          j = b && (null == m ? void 0 : m.feature) === c.tr.BROWSING,
          y = b && (null == m ? void 0 : m.feature) === c.tr.CODE_INTERPRETER,
          C = b && (null == m ? void 0 : m.feature) === c.tr.PLUGINS,
          k = b && (null == m ? void 0 : m.feature) === c.tr.SUNSHINE;
        return (0, d.jsxs)(d.Fragment, {
          children: [
            (0, d.jsx)(ep, {
              children: (0, d.jsx)("p", {
                children: (0, d.jsx)(_.Z, (0, i._)({}, ey.betaIntro)),
              }),
            }),
            n &&
              (0, d.jsx)(ep, {
                children: (0, d.jsx)(er, {
                  label: e.formatMessage(ey.betaBrowsingToggleLabel),
                  disabled: j,
                  enabled: j ? (null == m ? void 0 : m.enabled) : s,
                  onChange: function (e) {
                    v({ feature: c.tr.BROWSING, enabled: e });
                  },
                  description: (0, d.jsx)(
                    _.Z,
                    (0, i._)({}, ey.betaBrowsingToggleDescription),
                  ),
                }),
              }),
            o &&
              (0, d.jsx)(ep, {
                children: (0, d.jsx)(er, {
                  label: e.formatMessage(ey.betaPluginToggleLabel),
                  disabled: C,
                  enabled: C ? (null == m ? void 0 : m.enabled) : r,
                  onChange: function (e) {
                    v({ feature: c.tr.PLUGINS, enabled: e });
                  },
                  description: (0, d.jsx)(
                    _.Z,
                    (0, i._)({}, ey.betaPluginToggleDescription),
                  ),
                }),
              }),
            l &&
              (0, d.jsx)(ep, {
                children: (0, d.jsx)(er, {
                  label: e.formatMessage(
                    ey.betaAdvancedDataAnalysisToggleLabel,
                  ),
                  disabled: y,
                  enabled: y ? (null == m ? void 0 : m.enabled) : g,
                  onChange: function (e) {
                    v({ feature: c.tr.CODE_INTERPRETER, enabled: e });
                  },
                  description: (0, d.jsx)(
                    _.Z,
                    (0, i._)({}, ey.betaAdvancedDataAnalysisToggleDescription),
                  ),
                }),
              }),
            f &&
              (0, d.jsx)(ep, {
                children: (0, d.jsx)(er, {
                  label: e.formatMessage(ey.betaSunshineToggleLabel),
                  disabled: k,
                  enabled: k ? (null == m ? void 0 : m.enabled) : p,
                  onChange: function (e) {
                    v({ feature: c.tr.SUNSHINE, enabled: e });
                  },
                  description: (0, d.jsx)(
                    _.Z,
                    (0, i._)({}, ey.betaSunshineToggleDescription),
                  ),
                }),
              }),
          ],
        });
      }
      function er(e) {
        var t = e.label,
          a = e.disabled,
          n = e.enabled,
          s = e.onChange,
          i = e.description,
          o = e.toggleTooltip,
          r = (0, d.jsx)(ea.Z, {
            disabled: a,
            enabled: n,
            onChange: s,
            label: t,
            withLockIcon: a,
          });
        return (
          null != o &&
            (r = (0, d.jsx)(W.u, {
              label: o,
              side: "top",
              sideOffset: 4,
              children: r,
            })),
          (0, d.jsxs)(d.Fragment, {
            children: [
              (0, d.jsxs)("div", {
                className: "flex items-center justify-between",
                children: [(0, d.jsx)("div", { children: t }), r],
              }),
              null != i &&
                (0, d.jsx)("div", {
                  className: "mt-2 text-xs text-token-text-tertiary",
                  children: i,
                }),
            ],
          })
        );
      }
      function el(e) {
        var t = e.color,
          a = e.disabled,
          n = e.label,
          s = e.buttonLabel,
          i = e.onClick;
        return (0, d.jsxs)("div", {
          className: "flex items-center justify-between",
          children: [
            (0, d.jsx)("div", { children: n }),
            (0, d.jsx)(S.z, {
              color: void 0 === t ? "neutral" : t,
              disabled: !!a,
              onClick: i,
              children: s,
            }),
          ],
        });
      }
      function ed() {
        var e = (0, w.F)(),
          t = e.theme,
          a = e.setTheme;
        return (0, d.jsxs)("div", {
          className: "flex items-center justify-between",
          children: [
            (0, d.jsx)("div", {
              children: (0, d.jsx)(_.Z, (0, i._)({}, ey.theme)),
            }),
            (0, d.jsxs)(B.Z.Root, {
              value: t,
              onValueChange: function (e) {
                return a(e);
              },
              children: [
                (0, d.jsxs)(B.Z.Trigger, {
                  children: [
                    (0, d.jsx)(B.Z.Value, {}),
                    (0, d.jsx)(B.Z.Icon, {}),
                  ],
                }),
                (0, d.jsx)(B.Z.Portal, {
                  children: (0, d.jsxs)(B.Z.Content, {
                    children: [
                      (0, d.jsx)(B.Z.Item, {
                        value: "system",
                        children: (0, d.jsx)(_.Z, (0, i._)({}, ey.system)),
                      }),
                      (0, d.jsx)(B.Z.Item, {
                        value: "dark",
                        children: (0, d.jsx)(_.Z, (0, i._)({}, ey.dark)),
                      }),
                      (0, d.jsx)(B.Z.Item, {
                        value: "light",
                        children: (0, d.jsx)(_.Z, (0, i._)({}, ey.light)),
                      }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        });
      }
      function ec() {
        var e = (0, F.bU)().setLocale,
          t = (0, j.kP)().session,
          a = (null == t ? void 0 : t.user) != null && (0, j.yl)(t.user),
          n = (0, F.F4)(a),
          s = (0, L.useMemo)(
            function () {
              return x.Yr.filter(function (e) {
                return x.u9.includes(e) || a;
              });
            },
            [a],
          );
        return (0, d.jsxs)("div", {
          className: "flex items-center justify-between",
          children: [
            (0, d.jsx)("div", {
              children: (0, d.jsx)(_.Z, (0, i._)({}, ey.locale)),
            }),
            (0, d.jsxs)(B.Z.Root, {
              value: null != n ? n : "auto",
              onValueChange: function (t) {
                return "auto" == t ? e(null) : e(t);
              },
              children: [
                (0, d.jsxs)(B.Z.Trigger, {
                  children: [
                    (0, d.jsx)(B.Z.Value, {}),
                    (0, d.jsx)(B.Z.Icon, {}),
                  ],
                }),
                (0, d.jsx)(B.Z.Portal, {
                  children: (0, d.jsxs)(B.Z.Content, {
                    children: [
                      (0, d.jsx)(B.Z.Item, {
                        value: "auto",
                        children: (0, d.jsx)(_.Z, (0, i._)({}, ey.localeAuto)),
                      }),
                      s.map(function (e) {
                        return (0, d.jsx)(
                          B.Z.Item,
                          { value: e, children: e },
                          e,
                        );
                      }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        });
      }
      function eu(e) {
        var t = e.onClose,
          a = e.onDeleteHistory,
          n = (0, Z.Z)();
        return (0, d.jsx)(N.Z, {
          isOpen: !0,
          onClose: t,
          type: "success",
          title: n.formatMessage(ey.deleteHistoryModalTitle),
          primaryButton: (0, d.jsx)(E.ZP.Button, {
            title: n.formatMessage(ey.deleteHistoryModalConfirm),
            color: "primary",
            onClick: function () {
              a(), t();
            },
          }),
          secondaryButton: (0, d.jsx)(E.ZP.Button, {
            title: n.formatMessage(ey.deleteHistoryModalCancel),
            color: "neutral",
            onClick: t,
          }),
        });
      }
      function eg(e) {
        var t = e.onClose,
          a = (0, Z.Z)(),
          n = (0, L.useCallback)(
            function () {
              try {
                u.ZP.submitDataExport().then(function () {
                  J.m.success(a.formatMessage(ey.dataExportRequested)), t();
                });
              } catch (e) {
                J.m.warning(a.formatMessage(ey.dataExportFailed), {
                  hasCloseButton: !0,
                });
              }
            },
            [a, t],
          );
        return (0, d.jsx)(N.Z, {
          isOpen: !0,
          onClose: t,
          type: "success",
          title: a.formatMessage(ey.dataExportModalTitle),
          primaryButton: (0, d.jsx)(E.ZP.Button, {
            title: a.formatMessage(ey.dataExportModalConfirm),
            color: "primary",
            onClick: n,
          }),
          secondaryButton: (0, d.jsx)(E.ZP.Button, {
            title: a.formatMessage(ey.dataExportModalCancel),
            color: "neutral",
            onClick: t,
          }),
          children: (0, d.jsxs)("div", {
            className: "text-sm",
            children: [
              (0, d.jsxs)("ul", {
                className: "my-3 flex list-disc flex-col gap-1 pl-3",
                children: [
                  (0, d.jsx)("li", {
                    children: (0, d.jsx)(
                      _.Z,
                      (0, i._)({}, ey.dataExportModalDescription1),
                    ),
                  }),
                  (0, d.jsx)("li", {
                    children: (0, d.jsx)(
                      _.Z,
                      (0, i._)({}, ey.dataExportModalDescription2),
                    ),
                  }),
                  (0, d.jsx)("li", {
                    children: (0, d.jsx)(
                      _.Z,
                      (0, i._)({}, ey.dataExportModalDescription3),
                    ),
                  }),
                  (0, d.jsx)("li", {
                    children: (0, d.jsx)(
                      _.Z,
                      (0, i._)({}, ey.dataExportModalDescription4),
                    ),
                  }),
                ],
              }),
              (0, d.jsx)("div", {
                children: (0, d.jsx)(
                  _.Z,
                  (0, i._)({}, ey.dataExportModalDescription5),
                ),
              }),
            ],
          }),
        });
      }
      function eh(e) {
        var t = e.value,
          a = e.icon,
          n = e.label,
          s = (0, b.w$)();
        return (0, d.jsxs)(v.xz, {
          className: (0, y.default)(
            "group flex items-center justify-start gap-2 rounded-md px-2 py-1.5 text-sm radix-state-active:bg-gray-800 radix-state-active:text-white dark:text-gray-500 dark:radix-state-active:text-white",
            { "flex-1 items-center justify-center": !s },
          ),
          value: t,
          children: [
            (0, d.jsx)(a, {
              strokeWidth: 0,
              className:
                "h-5 w-5 fill-gray-800 group-radix-state-active:fill-white dark:fill-gray-500",
            }),
            (0, d.jsx)("div", { className: "truncate", children: n }),
          ],
        });
      }
      function ef(e) {
        var t = e.value,
          a = e.children;
        return (0, d.jsx)(v.VY, {
          className: "w-full md:min-h-[300px]",
          value: t,
          children: (0, d.jsx)("div", {
            className: "flex flex-col gap-3 text-sm text-token-text-secondary",
            children: a,
          }),
        });
      }
      function ep(e) {
        var t = e.children;
        return (0, d.jsx)("div", {
          className:
            "border-b pb-3 last-of-type:border-b-0 dark:border-gray-700",
          children: t,
        });
      }
      function ex(e) {
        var t,
          a = e.onClose,
          n = (0, Z.Z)(),
          s = (0, j.kP)().session,
          o =
            null == s
              ? void 0
              : null === (t = s.user) || void 0 === t
              ? void 0
              : t.email,
          l = (0, r._)((0, L.useState)(""), 2),
          c = l[0],
          g = l[1],
          h = (0, r._)((0, L.useState)(""), 2),
          p = h[0],
          x = h[1],
          b = (0, L.useCallback)(
            function () {
              var e,
                t =
                  null == s
                    ? void 0
                    : null === (e = s.user) || void 0 === e
                    ? void 0
                    : e.iat;
              return void 0 === t || Date.now() / 1e3 - t < 600;
            },
            [s],
          ),
          m = (0, L.useCallback)(
            function () {
              try {
                b()
                  ? u.ZP.deactivateAccount().then(function () {
                      (0, j.w7)();
                    })
                  : J.m.warning(
                      n.formatMessage(ey.deleteAccountSessionTooOld),
                      { hasCloseButton: !0 },
                    );
              } catch (e) {
                J.m.warning(n.formatMessage(ey.deleteAccountFailed), {
                  hasCloseButton: !0,
                });
              }
            },
            [n, b],
          ),
          v = (0, L.useCallback)(function () {
            (0, j.w7)();
          }, []),
          M =
            "DELETE" === p &&
            (void 0 === o || c.toLowerCase() === o.toLowerCase()),
          y = (0, r._)(
            (0, L.useState)(function () {
              return b();
            }),
            1,
          )[0],
          C = (0, f.e2)();
        return (0, d.jsx)(N.Z, {
          isOpen: !0,
          onClose: a,
          type: "success",
          title: n.formatMessage(ey.deleteAccountTitle),
          closeButton: (0, d.jsx)(E.ZP.CloseButton, { onClose: a }),
          children: (0, d.jsxs)("div", {
            className: "text-sm",
            children: [
              (0, d.jsxs)("ul", {
                className: "mb-6 mt-4 flex list-disc flex-col gap-1 pl-3",
                children: [
                  (0, d.jsx)("li", {
                    children: (0, d.jsx)(
                      _.Z,
                      (0, i._)({}, ey.deleteAccountWarning),
                    ),
                  }),
                  (0, d.jsx)("li", {
                    children: (0, d.jsx)(
                      _.Z,
                      (0, i._)({}, ey.reuseEmailPhoneWarning),
                    ),
                  }),
                  (0, d.jsx)("li", {
                    children: (0, d.jsx)(
                      _.Z,
                      (0, i._)({}, ey.dataRemovalWarning),
                    ),
                  }),
                  (0, d.jsx)("li", {
                    children: (0, d.jsx)(
                      _.Z,
                      (0, i._)({}, ey.apiAccessDeletionWarning),
                    ),
                  }),
                  (null == C ? void 0 : C.purchase_origin_platform) ===
                    R._4.MOBILE_IOS &&
                    (0, d.jsx)("li", {
                      children: (0, d.jsx)(
                        _.Z,
                        (0, i._)({}, ey.iapSubscriptionWarning),
                      ),
                    }),
                  (null == C ? void 0 : C.purchase_origin_platform) ===
                    R._4.MOBILE_ANDROID &&
                    (0, d.jsx)("li", {
                      children: (0, d.jsx)(
                        _.Z,
                        (0, i._)({}, ey.playStoreSubscriptionWarning),
                      ),
                    }),
                ],
              }),
              y
                ? (0, d.jsxs)(d.Fragment, {
                    children: [
                      void 0 !== o
                        ? (0, d.jsxs)("div", {
                            className: "mb-4",
                            children: [
                              (0, d.jsx)(eb, {
                                children: (0, d.jsx)(
                                  _.Z,
                                  (0, i._)({}, ey.typeEmailLabel),
                                ),
                              }),
                              (0, d.jsx)(I.Z, {
                                value: c,
                                placeholder: o,
                                name: "email",
                                onChange: function (e) {
                                  g(e.target.value);
                                },
                              }),
                            ],
                          })
                        : null,
                      (0, d.jsxs)("div", {
                        className: "mb-4",
                        children: [
                          (0, d.jsx)(eb, {
                            children: (0, d.jsx)(
                              _.Z,
                              (0, i._)({}, ey.typeDeleteInputLabel),
                            ),
                          }),
                          (0, d.jsx)(I.Z, {
                            value: p,
                            onChange: function (e) {
                              x(e.target.value);
                            },
                            name: "delete",
                            className: "mb-4",
                          }),
                        ],
                      }),
                      (0, d.jsx)(S.z, {
                        color: M ? "danger" : "disabled",
                        onClick: m,
                        disabled: !M,
                        className: "w-full",
                        children: M
                          ? (0, d.jsxs)(d.Fragment, {
                              children: [
                                (0, d.jsx)(D.BJv, { className: "icon-sm" }),
                                " ",
                                (0, d.jsx)(
                                  _.Z,
                                  (0, i._)({}, ey.deleteAccountButtonLabel),
                                ),
                              ],
                            })
                          : (0, d.jsxs)(d.Fragment, {
                              children: [
                                (0, d.jsx)(D.UIZ, { className: "icon-sm" }),
                                " ",
                                (0, d.jsx)(
                                  _.Z,
                                  (0, i._)({}, ey.lockedButtonLabel),
                                ),
                              ],
                            }),
                      }),
                    ],
                  })
                : (0, d.jsxs)(d.Fragment, {
                    children: [
                      (0, d.jsx)("p", {
                        className: "pb-4 text-xs text-gray-500",
                        children: (0, d.jsx)(
                          _.Z,
                          (0, i._)({}, ey.recentLoginMessage),
                        ),
                      }),
                      (0, d.jsx)(S.z, {
                        color: "primary",
                        onClick: v,
                        className: "w-full",
                        children: (0, d.jsx)(
                          _.Z,
                          (0, i._)({}, ey.refreshLoginButtonLabel),
                        ),
                      }),
                    ],
                  }),
            ],
          }),
        });
      }
      ((n = s || (s = {})).General = "General"),
        (n.BetaFeatures = "BetaFeatures"),
        (n.DataControls = "DataControls");
      var eb = A.Z.label(es());
      function em(e) {
        return e.formatMessage(ey.betaAdvancedDataAnalysisToggleLabel);
      }
      function ev(e) {
        return e.formatMessage(ey.betaAdvancedDataAnalysisToggleDescription);
      }
      function eM(e) {
        return e.formatMessage(ey.betaPluginToggleLabel);
      }
      function ej(e) {
        return e.formatMessage(ey.betaPluginToggleDescription);
      }
      var ey = (0, P.vU)({
        settings: {
          id: "settingsModal.settings",
          defaultMessage: "Settings",
          description: "Title for the settings modal",
        },
        theme: {
          id: "settingsModal.theme",
          defaultMessage: "Theme",
          description: "Label for the theme setting",
        },
        system: {
          id: "settingsModal.system",
          defaultMessage: "System",
          description: "Option for the system theme",
        },
        dark: {
          id: "settingsModal.dark",
          defaultMessage: "Dark",
          description: "Option for the dark theme",
        },
        light: {
          id: "settingsModal.light",
          defaultMessage: "Light",
          description: "Option for the light theme",
        },
        locale: {
          id: "settingsModal.locale_alpha",
          defaultMessage: "Locale (Alpha)",
          description: "Label for the locale setting",
        },
        localeAuto: {
          id: "settingsModal.localeAuto",
          defaultMessage: "Auto-detect",
          description: "Label for the auto-detect locale setting",
        },
        localeDev: {
          id: "settingsModal.localeDev",
          defaultMessage: "⋆✩★DEV★✩⋆",
          description: "Label for the dev locale setting",
        },
        sharedConversations: {
          id: "settingsModal.sharedConversations",
          defaultMessage: "Shared links",
          description: "Label for the shared chat/link button",
        },
        sharedConversationsButton: {
          id: "settingsModal.sharedConversationsButton",
          defaultMessage: "Manage",
          description: "Manage shared links/conversations button",
        },
        exportData: {
          id: "settingsModal.exportData",
          defaultMessage: "Export data",
          description: "Label for the export data button",
        },
        exportButton: {
          id: "settingsModal.exportButton",
          defaultMessage: "Export",
          description: "Export data button",
        },
        deleteAccount: {
          id: "settingsModal.deleteAccount",
          defaultMessage: "Delete account",
          description: "Label for the delete account button",
        },
        deleteAccountButton: {
          id: "settingsModal.deleteButton",
          defaultMessage: "Delete",
          description: "Delete account button",
        },
        openPluginDevtools: {
          id: "settingsModal.openPluginDevtools",
          defaultMessage: "Open plugin devtools",
          description: "Label for the open plugin devtools setting",
        },
        enable2fa: {
          id: "settingsModal.enable2fa",
          defaultMessage: "Enable two-factor authentication",
          description: "Label for the enable 2FA button",
        },
        enable: {
          id: "settingsModal.enable",
          defaultMessage: "Enable",
          description: "Enable 2FA button",
        },
        disable: {
          id: "settingsModal.disable",
          defaultMessage: "Disable",
          description: "Disable 2FA button",
        },
        disable2fa: {
          id: "settingsModal.disable2fa",
          defaultMessage: "Disable two factor authentication",
          description: "Label for the mfa remove button.",
        },
        chatHistoryDescription: {
          id: "settingsModal.chatHistoryDescription",
          defaultMessage:
            "Save new chats on this browser to your history and allow them to be used to improve our models. Unsaved chats will be deleted from our systems within 30 days. This setting does not sync across browsers or devices. <link>Learn more</link>",
          description: "Description for the chat history setting",
        },
        deleteHistoryModalTitle: {
          id: "settingsModal.deleteHistoryModalTitle",
          defaultMessage: "Clear your conversation history - are you sure?",
          description: "Title for the delete history modal",
        },
        deleteHistoryModalConfirm: {
          id: "settingsModal.deleteHistoryModalConfirm",
          defaultMessage: "Confirm deletion",
          description: "Confirm button for the delete history modal",
        },
        deleteHistoryModalCancel: {
          id: "settingsModal.deleteHistoryModalCancel",
          defaultMessage: "Cancel",
          description: "Cancel button for the delete history modal",
        },
        dataExportRequested: {
          id: "settingsModal.dataExportRequested",
          defaultMessage:
            "Successfully exported data. You should receive an email shortly with your data.",
          description: "Message shown when a data export request is received",
        },
        dataExportFailed: {
          id: "settingsModal.dataExportFailed",
          defaultMessage:
            "We were unable to process your export at this time. Please try again later.",
          description: "Message shown when a data export request fails",
        },
        dataExportModalTitle: {
          id: "settingsModal.dataExportModalTitle",
          defaultMessage: "Request data export - are you sure?",
          description: "Title for the data export modal",
        },
        dataExportModalConfirm: {
          id: "settingsModal.dataExportModalConfirm",
          defaultMessage: "Confirm export",
          description: "Confirm button for the data export modal",
        },
        dataExportModalCancel: {
          id: "settingsModal.dataExportModalCancel",
          defaultMessage: "Cancel",
          description: "Cancel button for the data export modal",
        },
        dataExportModalDescription1: {
          id: "settingsModal.dataExportModalDescription1",
          defaultMessage:
            "Your account details and conversations will be included in the export.",
          description: "Description for the data export modal",
        },
        dataExportModalDescription2: {
          id: "settingsModal.dataExportModalDescription2",
          defaultMessage:
            "The data will be sent to your registered email in a downloadable file.",
          description: "Description for the data export modal",
        },
        dataExportModalDescription3: {
          id: "settingsModal.dataExportModalDescription3",
          defaultMessage:
            "The download link will expire 24 hours after you receive it.",
          description: "Description for the data export modal",
        },
        dataExportModalDescription4: {
          id: "settingsModal.dataExportModalDescription4",
          defaultMessage:
            "Processing may take some time. You'll be notified when it's ready.",
          description: "Description for the data export modal",
        },
        dataExportModalDescription5: {
          id: "settingsModal.dataExportModalDescription5",
          defaultMessage: 'To proceed, click "Confirm export" below.',
          description: "Description for the data export modal",
        },
        deleteAccountSessionTooOld: {
          id: "settingsModal.deleteAccountSessionTooOld",
          defaultMessage:
            "Your login session is too old. Please log in again before deleting your account.",
          description:
            "Message shown when the user's login session is too old to delete their account.",
        },
        deleteAccountFailed: {
          id: "settingsModal.deleteAccountFailed",
          defaultMessage: "Failed to delete account. Please try again later.",
          description:
            "Message shown when there's an error deleting the user's account.",
        },
        deleteAccountTitle: {
          id: "settingsModal.deleteAccountTitle",
          defaultMessage: "Delete account - are you sure?",
          description: "Title for the delete account confirmation modal.",
        },
        deleteAccountWarning: {
          id: "settingsModal.deleteAccountWarning",
          defaultMessage:
            "Deleting your account is permanent and cannot be undone.",
          description:
            "Warning message about account deletion being permanent.",
        },
        reuseEmailPhoneWarning: {
          id: "settingsModal.reuseEmailPhoneWarning",
          defaultMessage:
            "For security reasons, you cannot reuse the same email or phone number for a new account.",
          description:
            "Warning message about not being able to reuse email or phone number for a new account.",
        },
        dataRemovalWarning: {
          id: "settingsModal.dataRemovalWarning",
          defaultMessage:
            "All your data, including profile, conversations, and API usage, will be removed.",
          description:
            "Warning message about data removal after account deletion.",
        },
        apiAccessDeletionWarning: {
          id: "settingsModal.apiAccessDeletionWarning",
          defaultMessage:
            "If you've been using ChatGPT with the API, this access will also be deleted.",
          description: "Warning message about API access being deleted.",
        },
        iapSubscriptionWarning: {
          id: "settingsModal.iapSubscriptionWarning",
          defaultMessage:
            "You will need to cancel your in-app purchase subscription in the Apple App Store. We cannot cancel your subscription for you.",
          description: "Warning message about cancelling in-app subscriptions.",
        },
        playStoreSubscriptionWarning: {
          id: "settingsModal.playStoreSubscriptionWarning",
          defaultMessage:
            "You will need to cancel your in-app purchase subscription in the Google Play Store. We cannot cancel your subscription for you.",
          description: "Warning message about cancelling in-app subscriptions.",
        },
        typeEmailLabel: {
          id: "settingsModal.typeEmailLabel",
          defaultMessage: "Please type your account email.",
          description: "Label for email input field when deleting an account.",
        },
        typeDeleteInputLabel: {
          id: "settingsModal.typeDeleteInputLabel",
          defaultMessage: 'To proceed, type "DELETE" in the input field below.',
          description: "Label for DELETE input field when deleting an account.",
        },
        lockedButtonLabel: {
          id: "settingsModal.lockedButtonLabel",
          defaultMessage: "Locked",
          description: "Label for the locked button when deleting an account.",
        },
        deleteAccountButtonLabel: {
          id: "settingsModal.deleteAccountButtonLabel",
          defaultMessage: "Permanently delete my account",
          description: "Label for the button to confirm account deletion.",
        },
        recentLoginMessage: {
          id: "settingsModal.recentLoginMessage",
          defaultMessage:
            "You may only delete your account if you have logged in within the last 10 minutes. Please log in again, then return here to continue.",
          description:
            "Message shown when the user needs to log in again to delete their account.",
        },
        refreshLoginButtonLabel: {
          id: "settingsModal.refreshLoginButtonLabel",
          defaultMessage: "Refresh login",
          description: "Label for the button to refresh login.",
        },
        chatHistoryToggleLabel: {
          id: "settingsModal.chatHistoryToggleLabel",
          defaultMessage: "Chat history & training",
          description: "Label for the chat history toggle.",
        },
        chatHistoryLabel: {
          id: "settingsModal.chatHistoryLabel",
          defaultMessage: "Chat history",
          description: "Label for the chat history toggle.",
        },
        chatHistoryOnlyDescription: {
          id: "settingsModal.chatHistoryOnlyDescription",
          defaultMessage:
            "Save new chats on this browser to your history. Unsaved chats will be deleted from our systems within 30 days. This setting does not sync across browsers or devices. <link>Learn more</link>",
          description: "Description for the chat history setting",
        },
        chatTrainingLabel: {
          id: "settingsModal.chatTrainingLabel",
          defaultMessage: "Chat training",
          description: "Label for the chat training toggle.",
        },
        chatTrainingEnterpriseDescription: {
          id: "settingsModal.chatTrainingEnterpriseDescription",
          defaultMessage:
            "This workspace is private and opted out of training.",
          description: "Description for the disabled chat training toggle.",
        },
        chatTrainingEnterpriseTooltip: {
          id: "settingsModal.chatTrainingEnterpriseTooltip",
          defaultMessage: "ChatGPT Enterprise automatically disables training.",
          description: "Tooltip for the disabled chat training toggle.",
        },
        dataControlsTab: {
          id: "settingsModal.dataControls",
          defaultMessage: "Data controls",
          description: "Label for the data controls tab",
        },
        betaIntro: {
          id: "settingsModal.betaIntro",
          defaultMessage:
            "As a Plus user, enjoy early access to experimental new features, which may change during development.",
          description: "Introduction for the beta features tab",
        },
        betaSettingsUpdateFailed: {
          id: "settingsModal.betaSettingsUpdateFailed",
          defaultMessage: "Failed to update your beta setting",
          description:
            "Message shown when there's an error updating beta settings",
        },
        betaPluginToggleLabel: {
          id: "settingsModal.betaPluginToggleLabel",
          defaultMessage: "Plugins",
          description: "Label for the Plugins beta toggle.",
        },
        betaPluginToggleDescription: {
          id: "settingsModal.betaPluginToggleDescription",
          defaultMessage:
            "Try a version of ChatGPT that knows when and how to use third-party plugins that you enable.",
          description: "Description for the Plugins beta toggle.",
        },
        betaBrowsingToggleLabel: {
          id: "settingsModal.betaBrowsingToggleLabel",
          defaultMessage: "Browse with Bing",
          description: "Label for the Browse with Bing beta toggle.",
        },
        betaBrowsingToggleDescription: {
          id: "settingsModal.betaBrowsingToggleDescription",
          defaultMessage:
            "Try a version of ChatGPT that knows when and how to browse the internet to answer questions about recent topics and events.",
          description: "Description for the Browsing beta toggle.",
        },
        betaAdvancedDataAnalysisToggleLabel: {
          id: "settingsModal.betaAdvancedDataAnalysisToggleLabel",
          defaultMessage: "Advanced data analysis",
          description: "Label for the Advanced data analysis beta toggle.",
        },
        betaAdvancedDataAnalysisToggleDescription: {
          id: "settingsModal.betaAdvancedDataAnalysisToggleDescription",
          defaultMessage:
            "Try a version of ChatGPT that knows how to write and execute python code, and can work with file uploads. Try asking for help with data analysis, image conversions, or editing a code file. Note: files will not persist beyond a single session.",
          description:
            "Description for the Advanced data analysis beta toggle.",
        },
        betaSunshineToggleLabel: {
          id: "settingsModal.betaSunshineToggleLabel",
          defaultMessage: "Sunshine",
          description: "Label for the Project Sunshine beta toggle.",
        },
        betaSunshineToggleDescription: {
          id: "settingsModal.betaSunshineToggleDescription",
          defaultMessage:
            "Try project Sunshine, a version of ChatGPT with special capabilities",
          description: "Description for the Project Sunshine beta toggle.",
        },
        generalTab: {
          id: "settingsModal.generalTab",
          defaultMessage: "General",
          description: "Label for the general tab",
        },
        betaTab: {
          id: "settingsModal.betaTab",
          defaultMessage: "Beta features",
          description: "Label for the Beta Features tab",
        },
        clearChatLabel: {
          id: "settingsModal.clearChatLabel",
          defaultMessage: "Clear all chats",
          description: "Label for the clear chat button",
        },
        clearChatButton: {
          id: "settingsModal.clearChatButton",
          defaultMessage: "Clear",
          description: "Clear chat button",
        },
      });
    },
    82816: function (e, t, a) {
      a.d(t, {
        Ds: function () {
          return Z;
        },
        OS: function () {
          return T;
        },
        ZP: function () {
          return _;
        },
      });
      var n = a(21722),
        s = a(39324),
        i = a(71209),
        o = a(22830),
        r = a(75883),
        l = a(35250),
        d = a(32877),
        c = a(78931),
        u = a(13995),
        g = a(62509),
        h = a(70079),
        f = a(1454),
        p = a(70671),
        x = a(32004),
        b = a(94968),
        m = a(78103),
        v = a(67273),
        M = a(52481),
        j = a(1821),
        y = a(88798),
        C = a(15608),
        k = a(73908),
        w = a(31486),
        L = a(48759),
        D = a(85330),
        T = (0, m.ZP)(function () {
          return { isOpen: !1 };
        }),
        Z = {
          close: function () {
            T.setState({ isOpen: !1 });
          },
          setIsOpen: function (e) {
            T.setState({ isOpen: e });
          },
        };
      function _(e) {
        var t = e.slideOver,
          a = (0, p.Z)(),
          b = (0, o._)((0, h.useState)(), 2),
          m = b[0],
          _ = b[1],
          A = (0, o._)((0, h.useState)(!1), 2),
          S = A[0],
          E = A[1],
          N = (0, o._)((0, h.useState)(!1), 2),
          B = N[0],
          W = N[1],
          I = (0, o._)((0, h.useState)(!1), 2),
          F = I[0],
          O = I[1],
          R = (0, g.kP)().session,
          H = (0, c.hz)(),
          V =
            ((null == R ? void 0 : R.user) != null && (0, g.yl)(R.user)) ||
            H.has(d.YI),
          U = (0, u.NL)(),
          G = T(function (e) {
            return e.isOpen;
          }),
          z = (0, D.p0)(),
          Y = (0, C.useFetchManifestAndSpec)().fetchManifestAndSpec,
          q = (0, h.useMemo)(
            function () {
              return V ? z[0] : z.find(k.cf);
            },
            [z, V],
          ),
          J = (0, h.useCallback)(
            (0, n._)(function () {
              return (0, r.Jh)(this, function (e) {
                return (
                  q &&
                    (_(void 0),
                    Y({
                      domain: q.domain,
                      onSuccess: function (e) {
                        _({
                          manifestValidationInfo:
                            e.scrapeManifestResponse.manifest_validation_info,
                          apiValidationInfo: e.apiValidationInfo,
                        }),
                          null != e.scrapeManifestResponse.plugin &&
                            (0, C.updateCachedApprovedPlugins)(
                              e.scrapeManifestResponse.plugin,
                              U,
                            );
                      },
                      onError: function (e) {
                        y.m.danger(
                          (null == e ? void 0 : e.message) ||
                            "Error refreshing plugin.",
                        );
                      },
                    })),
                  [2]
                );
              });
            }),
            [q, U, Y],
          );
        return ((0, h.useEffect)(
          function () {
            G && J();
          },
          [G, J],
        ),
        H.has(d.Wk))
          ? (0, l.jsx)(M.ZP, {
              icon: f.V7f,
              title: a.formatMessage(P.title),
              isOpen: G,
              slideOver: t,
              onClose: Z.close,
              children: (0, l.jsx)("div", {
                className:
                  "border-t border-gray-100 p-2 text-sm dark:border-gray-700",
                children:
                  null != q
                    ? (0, l.jsxs)("div", {
                        className: "flex flex-col gap-2",
                        children: [
                          (0, l.jsx)("div", {
                            children: (0, l.jsx)(v.z, {
                              size: "small",
                              color: "neutral",
                              onClick: J,
                              children: (0, l.jsx)(
                                x.Z,
                                (0, s._)({}, P.refreshPlugin),
                              ),
                            }),
                          }),
                          m
                            ? (0, l.jsxs)(l.Fragment, {
                                children: [
                                  (0, l.jsx)(w.Z, { plugin: q }),
                                  (0, l.jsx)("div", {
                                    children: (0, l.jsx)(
                                      x.Z,
                                      (0, i._)((0, s._)({}, P.pluginId), {
                                        values: { id: q.id },
                                      }),
                                    ),
                                  }),
                                  (0, l.jsx)(L.rC, {
                                    manifestValidationInfo:
                                      m.manifestValidationInfo,
                                    expanded: S,
                                    onChangeExpanded: E,
                                  }),
                                  null != m.apiValidationInfo &&
                                    (0, l.jsxs)(l.Fragment, {
                                      children: [
                                        (0, l.jsx)(L.q6, {
                                          apiValidationInfo:
                                            m.apiValidationInfo,
                                          expanded: B,
                                          onChangeExpanded: W,
                                        }),
                                        (0, l.jsx)(L.bf, {
                                          apiValidationInfo:
                                            m.apiValidationInfo,
                                          expanded: F,
                                          onChangeExpanded: O,
                                        }),
                                      ],
                                    }),
                                ],
                              })
                            : (0, l.jsx)("div", {
                                className: "self-center",
                                children: (0, l.jsx)(j.Z, {}),
                              }),
                        ],
                      })
                    : (0, l.jsx)("div", {
                        className: "mt-4 text-center",
                        children: V
                          ? (0, l.jsx)(
                              x.Z,
                              (0, s._)({}, P.enableLocalhostPluginWithDevTools),
                            )
                          : (0, l.jsx)(
                              x.Z,
                              (0, s._)({}, P.enableLocalhostPlugin),
                            ),
                      }),
              }),
            })
          : null;
      }
      var P = (0, b.vU)({
        title: {
          id: "PluginDevtools.title",
          description: "Title of the plugin devtools component.",
          defaultMessage: "Plugin devtools",
        },
        refreshPlugin: {
          id: "PluginDevtools.refreshPlugin",
          description: "Refresh plugin button text.",
          defaultMessage: "Refresh plugin",
        },
        pluginId: {
          id: "PluginDevtools.pluginId",
          description: "Text for showing the plugin id.",
          defaultMessage: "Plugin id: {id}",
        },
        enableLocalhostPlugin: {
          id: "PluginDevtools.enableLocalhostPlugin",
          description:
            "Text displayed when a localhost plugin should be enabled to use devtools.",
          defaultMessage: "Please enable a localhost plugin to use devtools.",
        },
        enableLocalhostPluginWithDevTools: {
          id: "PluginDevtools.enableLocalhostPluginenableLocalhostPluginWithDevTools",
          description:
            "Text displayed when a localhost plugin should be enabled to use devtools.",
          defaultMessage:
            "Please enable a localhost plugin (or any plugin if you're a plugin reviewer) to use devtools.",
        },
      });
    },
  },
]);
