"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8873],
  {
    52696: function (e, t, s) {
      s.d(t, {
        $3: function () {
          return f;
        },
        Ap: function () {
          return c;
        },
        CV: function () {
          return m;
        },
        GA: function () {
          return d;
        },
        Gk: function () {
          return x;
        },
        Ix: function () {
          return p;
        },
        _O: function () {
          return g;
        },
        bE: function () {
          return v;
        },
        cI: function () {
          return h;
        },
        qH: function () {
          return u;
        },
      });
      var r = s(96237),
        n = s(75641),
        a = s(78931),
        i = s(62509),
        o = s(70079),
        l = s(70671);
      function c() {
        var e = (0, l.Z)(),
          t = e.formatMessage(y.adminRoleName),
          s = e.formatMessage(y.ownerRoleName),
          a = e.formatMessage(y.standardRoleName);
        return (0, o.useMemo)(
          function () {
            var e;
            return (
              (e = {}),
              (0, r._)(e, n.r3.OWNER, s),
              (0, r._)(e, n.r3.ADMIN, t),
              (0, r._)(e, n.r3.STANDARD, a),
              e
            );
          },
          [s, t, a],
        );
      }
      function u(e) {
        var t = (0, l.Z)();
        return e
          ? e.structure === n.CZ.PERSONAL
            ? t.formatMessage(y.personalPlanName)
            : t.formatMessage(y.enterprisePlanName)
          : t.formatMessage(y.personalPlanName);
      }
      function d(e) {
        return m((0, l.Z)(), e);
      }
      function f() {
        var e = (0, a.ec)(function (e) {
          return e.currentWorkspace;
        });
        return m((0, l.Z)(), e);
      }
      function m(e, t) {
        var s;
        return t && t.structure !== n.CZ.PERSONAL
          ? null !== (s = t.name) && void 0 !== s
            ? s
            : e.formatMessage(y.defaultWorkspaceTitle)
          : e.formatMessage(y.personalWorkspaceTitle);
      }
      function h() {
        var e,
          t,
          s,
          r,
          n = (0, i.kP)().session;
        return null !==
          (r =
            null !==
              (s =
                null == n
                  ? void 0
                  : null === (e = n.user) || void 0 === e
                  ? void 0
                  : e.name) && void 0 !== s
              ? s
              : null == n
              ? void 0
              : null === (t = n.user) || void 0 === t
              ? void 0
              : t.email) && void 0 !== r
          ? r
          : null;
      }
      function p(e) {
        var t = (0, a.ec)(function (e) {
            return e.currentWorkspace;
          }),
          s = (0, a.ec)(a.F_.isPersonalWorkspace),
          r = (0, a.$T)(),
          i = d(t),
          o = h();
        return e && !r
          ? e.structure === n.CZ.PERSONAL
            ? o
            : e.name
          : t
          ? s
            ? o
            : i
          : o;
      }
      function g() {
        return (0, a.ec)(function (e) {
          return e.workspaces;
        });
      }
      function x(e) {
        var t = g().find(function (t) {
          return t.id === e;
        });
        return (null == t ? void 0 : t.role) === n.r3.OWNER;
      }
      function v(e) {
        var t = g().find(function (t) {
          return t.id === e;
        });
        return (null == t ? void 0 : t.role) === n.r3.ADMIN;
      }
      var y = (0, s(94968).vU)({
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
    18873: function (e, t, s) {
      s.d(t, {
        Z: function () {
          return eC;
        },
      });
      var r = s(39324),
        n = s(71209),
        a = s(22830),
        i = s(4337),
        o = s(35250),
        l = s(70596),
        c = s(32877),
        u = s(78931),
        d = s(32542),
        f = s(32148),
        m = s(19841),
        h = s(70079),
        p = s(1454),
        g = s(70671),
        x = s(32004),
        v = s(94968),
        y = s(21389),
        j = s(67273),
        b = s(46020),
        k = s(37952),
        w = s(45635),
        N = s(20522),
        M = s(12346),
        _ = s(13090),
        C = s(86273),
        P = s(21722),
        S = s(38104),
        Z = s(95137),
        W = s(18719),
        R = s(73426),
        T = s(60554),
        F = s(35588),
        A = s(1821),
        E = s(88798),
        I = s(97296),
        O = s(5268),
        L = s(16920);
      function z() {
        var e = (0, i._)([
          "group relative mb-1 rounded-md hover:[#0077FF] bg-[#0077FF] flex px-3 min-h-[44px] py-1 items-center gap-3 transition-colors duration-200 dark:text-white cursor-pointer text-sm",
        ]);
        return (
          (z = function () {
            return e;
          }),
          e
        );
      }
      function D(e) {
        var t = e.showFreeTrialLoadingPayment,
          s = e.handleGetPaymentLink,
          i = (0, g.Z)(),
          l = (0, O.a)(
            ["claimedReferralInvite"],
            function () {
              return Z.ZP.getClaimedReferralInvite();
            },
            {
              refetchOnMount: !1,
              refetchOnWindowFocus: !1,
              refetchInterval: !1,
              refetchOnReconnect: !1,
            },
          ),
          c = l.data,
          u = l.isLoading,
          d = l.isSuccess,
          f = null == c ? void 0 : c.invite_code,
          v = (0, a._)((0, h.useState)(!1), 2),
          y = v[0],
          j = v[1];
        if (
          ((0, h.useEffect)(
            function () {
              f &&
                !y &&
                d &&
                (j(!0),
                L.m9.logEvent(
                  "chatgpt_referral_show_claimed_sidebar_menu_promo",
                ),
                W.A.logEvent(R.M.chatgptReferralShowClaimedSidebartMenuPromo));
            },
            [f, j, y, d],
          ),
          !f || u || !d)
        )
          return null;
        var b = f.invite_metadata.invite_data,
          k = (null == b ? void 0 : b.referral_trial_duration_months)
            ? (null == b ? void 0 : b.referral_trial_duration_months) > 1
              ? i.formatMessage(H.monthsOfBenefit, {
                  referralTrialDurationMonths:
                    null == b ? void 0 : b.referral_trial_duration_months,
                })
              : i.formatMessage(H.daysOfBenefit, {
                  referralTrialDurationDays:
                    null == b ? void 0 : b.referral_trial_duration_days,
                })
            : null;
        return (0, o.jsx)(I.E.div, {
          className: (0, m.default)("relative", {
            "cursor-progress opacity-50": t,
          }),
          layout: "position",
          initial: { y: -10, opacity: 1 },
          animate: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.1, ease: "easeIn" },
          },
          children: (0, o.jsxs)(B, {
            className: (0, m.default)(t && "opacity-75"),
            onClick: function () {
              t || ((0, F.Vk)(!0), s());
            },
            children: [
              (0, o.jsxs)("div", {
                className:
                  "flex w-full flex-row items-center justify-start gap-3 ",
                children: [
                  (0, o.jsx)(p.E33, { className: "icon-sm shrink-0" }),
                  (0, o.jsx)(
                    x.Z,
                    (0, n._)((0, r._)({}, H.freeTrialCta), {
                      values: { duration: k },
                    }),
                  ),
                ],
              }),
              !t &&
                (0, o.jsx)(p.q5L, {
                  onClick: function (e) {
                    e.stopPropagation(), (0, F.zG)(!0), (0, F.H1)(!0);
                  },
                  className:
                    "icon-md shrink-0 rounded-full p-0.5 text-gray-400 opacity-50  transition-colors duration-200 hover:bg-[#0077FF] hover:text-red-500  group-hover:opacity-100",
                }),
              (0, o.jsx)("span", {
                className:
                  "absolute top-11 h-0 w-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-[#0077FF] transition-colors duration-200 group-hover:border-t-[#0077FF]",
              }),
            ],
          }),
        });
      }
      var B = y.Z.a(z()),
        H = (0, v.vU)({
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
        U = s(15329),
        G = s(21739),
        $ = s(38566);
      function q() {
        var e,
          t = (0, T.useRouter)(),
          s = (0, g.Z)(),
          n = (0, u.hz)(),
          a = (0, u.$T)(),
          i = (0, u.WY)(),
          l = (0, u.Zp)(),
          d =
            ((e = (0, P._)(function () {
              var e;
              return (0, S.Jh)(this, function (r) {
                switch (r.label) {
                  case 0:
                    (0, F.Vk)(!0),
                      W.A.logEvent(R.M.clickAccountPaymentCheckout),
                      (r.label = 1);
                  case 1:
                    return (
                      r.trys.push([1, 3, 4, 5]), [4, Z.ZP.getCheckoutLink()]
                    );
                  case 2:
                    return (e = r.sent()), t.push(e.url), [3, 5];
                  case 3:
                    return (
                      r.sent(),
                      E.m.warning(s.formatMessage(Q.paymentErrorWarning), {
                        hasCloseButton: !0,
                      }),
                      (0, F.Vk)(!1),
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
          f = (0, F.tS)(function (e) {
            return e.didCloseFreeTrial;
          }),
          m = (0, F.tS)(function (e) {
            return e.showFreeTrialLoadingPayment;
          }),
          v = !f && l,
          y = !i && !n.has("disable_upgrade_ui"),
          j = (0, u.KQ)(),
          b = (0, G.g)(function (e) {
            return e.flags.isUserInCanPayGroup;
          }),
          k = (0, u.ec)(u.F_.isBusinessWorkspace),
          w = (0, F.tS)(function (e) {
            return { setShowAccountPaymentModal: e.setShowAccountPaymentModal };
          }).setShowAccountPaymentModal,
          N = (0, h.useCallback)(
            function () {
              w(!0, function () {
                W.A.logEvent(R.M.clickSidebarAccountPaymentMenuItem);
              });
            },
            [w],
          ),
          M = (0, $.C)(function (e) {
            return { setShowReferralInviteModal: e.setShowReferralInviteModal };
          }).setShowReferralInviteModal,
          _ = (0, h.useCallback)(
            function () {
              L.m9.logEvent("chatgpt_referral_invite_sidebar_clicked"),
                W.A.logEvent(R.M.chatgptReferralInviteSidebarClicked),
                M(!0, function () {
                  W.A.logEvent(R.M.clickSidebarAccountPaymentMenuItem);
                });
            },
            [M],
          );
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (n.has(c.a3) || i) && (0, o.jsx)(V, { handleReferralInvite: _ }),
            !i &&
              v &&
              (0, o.jsx)(D, {
                showFreeTrialLoadingPayment: m,
                handleGetPaymentLink: d,
              }),
            !a &&
              !1 === i &&
              b &&
              !k &&
              (0, o.jsx)(U.Vq, {
                onClick: v
                  ? function () {
                      m || ((0, F.Vk)(!0), d());
                    }
                  : N,
                className: "rounded-md",
                children: (0, o.jsxs)("span", {
                  className:
                    "flex w-full flex-row flex-wrap-reverse justify-between",
                  children: [
                    (0, o.jsxs)("span", {
                      className: "gold-new-button flex items-center gap-3",
                      children: [
                        m
                          ? (0, o.jsx)(A.Z, { className: "icon-sm shrink-0" })
                          : (0, o.jsx)(p.fzv, {
                              className: "icon-sm shrink-0",
                            }),
                        j
                          ? (0, o.jsx)(x.Z, (0, r._)({}, Q.renewPlus))
                          : (0, o.jsx)(x.Z, (0, r._)({}, Q.upgradeToPlus)),
                      ],
                    }),
                    !n.has(c.a3) &&
                      y &&
                      !j &&
                      (0, o.jsx)("span", {
                        className:
                          "rounded-md bg-yellow-200 px-1.5 py-0.5 text-xs font-medium uppercase text-gray-800",
                        children: (0, o.jsx)(x.Z, (0, r._)({}, Q.newLabel)),
                      }),
                  ],
                }),
              }),
          ],
        });
      }
      var V = function (e) {
          var t = e.handleReferralInvite,
            s = (0, u.hz)().has(c.a3),
            n = (0, O.a)(
              ["referralInvites"],
              function () {
                return Z.ZP.getEligibleReferralInvites();
              },
              { enabled: s },
            ),
            i = n.data,
            l = n.isSuccess,
            d =
              (null == i ? void 0 : i.invites_remaining) &&
              (null == i ? void 0 : i.invites_remaining) > 0 &&
              l,
            f = (0, a._)((0, h.useState)(!1), 2),
            m = f[0],
            g = f[1];
          return ((0, h.useEffect)(
            function () {
              d &&
                !m &&
                (g(!0),
                L.m9.logEvent("chatgpt_referral_show_sidebar_menu_item"),
                W.A.logEvent(R.M.chatgptReferralShowSidebarMenuItem));
            },
            [d, g, m],
          ),
          d)
            ? (0, o.jsx)(U.Vq, {
                onClick: t,
                className: "rounded-md",
                children: (0, o.jsxs)("span", {
                  className:
                    "flex w-full flex-row flex-wrap-reverse justify-between",
                  children: [
                    (0, o.jsxs)("span", {
                      className: "gold-new-button flex items-center gap-3",
                      children: [
                        (0, o.jsx)(p.zy7, { className: "icon-sm shrink-0" }),
                        (0, o.jsx)(x.Z, (0, r._)({}, Q.inviteReferral)),
                      ],
                    }),
                    (0, o.jsx)("span", {
                      className:
                        "rounded-md bg-yellow-200 px-1.5 py-0.5 text-xs font-medium uppercase text-gray-800",
                      children: (0, o.jsx)(x.Z, (0, r._)({}, Q.newLabel)),
                    }),
                  ],
                }),
              })
            : null;
        },
        Q = (0, v.vU)({
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
        Y = s(81949),
        K = s(75641),
        J = s(33669),
        X = s(88809),
        ee = s(7813),
        et = s(62509),
        es = s(6948),
        er = s(61888),
        en = s(6038),
        ea = s(52696),
        ei = s(88327),
        eo = s(44513);
      function el() {
        var e = (0, u.WY)(),
          t = (0, u.hz)(),
          s = (0, h.useCallback)(function () {
            W.A.logEvent(R.M.clickSidebarAccountPortalMenuItem),
              b.vm.openModal(b.B.AccountPortal);
          }, []),
          n = t.has(c.Rw) || t.has(c.uo);
        return (0, o.jsxs)(o.Fragment, {
          children: [
            !0 === e &&
              (0, o.jsxs)(U.ZP, {
                onClick: s,
                children: [
                  (0, o.jsx)(p.fzv, { className: "icon-sm shrink-0" }),
                  (0, o.jsx)(x.Z, (0, r._)({}, ec.myPlan)),
                ],
              }),
            n &&
              (0, o.jsxs)(U.ZP, {
                onClick: function () {
                  return b.vm.openModal(b.B.UserContext);
                },
                children: [
                  (0, o.jsx)(ei.wP, { className: "h-4 w-4 shrink-0" }),
                  (0, o.jsx)(x.Z, (0, r._)({}, ec.chatPreferences)),
                ],
              }),
          ],
        });
      }
      var ec = (0, v.vU)({
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
        }),
        eu = s(57101),
        ed = s(9181),
        ef = s.n(ed);
      function em() {
        var e = (0, u.hz)(),
          t = e.has(c.Rw) || e.has(c.uo),
          s = (0, N.Ml)();
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsxs)(eh, {
              href: "/admin",
              children: [
                (0, o.jsx)(eu.Z, { className: "icon-sm" }),
                (0, o.jsx)(x.Z, (0, r._)({}, ep.myWorkspaceSettings)),
              ],
            }),
            (0, o.jsxs)(eh, {
              href: s ? "/gizmo/explore" : "/templates",
              children: [
                (0, o.jsx)(p.Wpg, { className: "icon-sm" }),
                (0, o.jsx)(x.Z, (0, r._)({}, ep.templates)),
              ],
            }),
            t &&
              (0, o.jsxs)(U.ZP, {
                onClick: function () {
                  return b.vm.openModal(b.B.UserContext);
                },
                children: [
                  (0, o.jsx)(ei.wP, { className: "h-4 w-4" }),
                  (0, o.jsx)(x.Z, (0, r._)({}, ep.chatPreferences)),
                ],
              }),
          ],
        });
      }
      function eh(e) {
        var t = e.href,
          s = e.children;
        return (0, o.jsx)(ee.v.Item, {
          children: function (e) {
            var r = e.active;
            return (0, o.jsx)(ef(), {
              href: t,
              children: (0, o.jsx)(U.ZB, {
                $as: "span",
                className: (0, m.default)(
                  r
                    ? "bg-gray-100 dark:bg-gray-800"
                    : "cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800",
                ),
                children: s,
              }),
            });
          },
        });
      }
      var ep = (0, v.vU)({
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
      function eg(e) {
        var t = e.onClickSettings;
        return (0, o.jsxs)(ee.v, {
          as: "div",
          className: "group relative",
          children: [
            (0, o.jsx)(ew, {}),
            (0, o.jsx)(eo.m, {
              children: (0, o.jsx)(ee.v.Items, {
                className:
                  "absolute bottom-full left-0 z-20 mb-1 w-full overflow-hidden rounded-md bg-white pb-1.5 pt-1 outline-none dark:bg-gray-950",
                children: (0, o.jsx)(ek, { onClickSettings: t }),
              }),
            }),
          ],
        });
      }
      function ex() {
        var e = (0, et.kP)().session,
          t = null == e ? void 0 : e.user;
        return t
          ? (0, o.jsxs)("div", {
              className: "px-3 py-2",
              children: [
                (0, o.jsx)("div", {
                  className:
                    "text-sm font-bold text-gray-600 dark:text-gray-400",
                  children: (0, o.jsx)(
                    x.Z,
                    (0, r._)({}, eM.accountSwitcherTitle),
                  ),
                }),
                (0, o.jsx)("div", {
                  className: "text-sm text-gray-400 dark:text-gray-600",
                  children: null == t ? void 0 : t.email,
                }),
              ],
            })
          : null;
      }
      function ev() {
        var e = (0, u.ec)(function (e) {
            return e.currentWorkspace;
          }),
          t = (0, g.Z)();
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)(ex, {}),
            (0, o.jsxs)("div", {
              className:
                "flex w-full items-center justify-start gap-2 px-3 py-1",
              children: [
                (0, o.jsx)(en.zf, { iconSize: "medium", workspace: e }),
                (0, o.jsx)("div", {
                  className: "flex-grow text-base dark:text-white",
                  children: (0, ea.CV)(t, e),
                }),
              ],
            }),
            (0, o.jsx)(U.R, {}),
          ],
        });
      }
      function ey() {
        var e = (0, g.Z)(),
          t = (0, u.ec)(function (e) {
            return e.workspaces;
          }),
          s = (0, u.ec)(function (e) {
            return e.currentWorkspace;
          }),
          r = (0, a._)((0, h.useState)(!1), 2),
          n = r[0],
          i = r[1],
          l = (0, er.compact)(
            [
              t.find(function (e) {
                return e.structure === K.CZ.PERSONAL;
              }),
            ].concat(
              (0, Y._)(
                t.filter(function (e) {
                  return e.structure !== K.CZ.PERSONAL;
                }),
              ),
            ),
          );
        return (
          l.sort(function (e, t) {
            return e.structure === K.CZ.PERSONAL
              ? 1
              : t.structure === K.CZ.PERSONAL
              ? -1
              : 0;
          }),
          (0, o.jsxs)(o.Fragment, {
            children: [
              (0, o.jsx)(ex, {}),
              (0, o.jsx)("div", {
                className: "flex w-full flex-col",
                children: l.map(function (t) {
                  return (0, o.jsx)(
                    U.ZP,
                    {
                      onClick: function () {
                        t.id !== (null == s ? void 0 : s.id) &&
                          (i(!0), u.w_.setCurrentWorkspace(t), (0, X.M)());
                      },
                      children: (0, o.jsxs)("div", {
                        className:
                          "flex w-full items-center justify-start gap-3 py-1",
                        children: [
                          (0, o.jsx)(en.zf, {
                            iconSize: "small",
                            workspace: t,
                            className: "flex-shrink-0",
                          }),
                          (0, o.jsx)("div", {
                            className: "flex-grow truncate dark:text-white",
                            children: (0, ea.CV)(e, t),
                          }),
                          n
                            ? (0, o.jsx)(A.Z, {})
                            : (0, o.jsx)("div", {
                                className: (0, m.default)(
                                  "flex h-4 w-4 flex-shrink-0 rounded-full border align-middle",
                                  {
                                    "bg-white":
                                      t.id === (null == s ? void 0 : s.id),
                                  },
                                ),
                                children:
                                  t.id === (null == s ? void 0 : s.id) &&
                                  (0, o.jsx)(p.UgA, {
                                    className:
                                      "m-auto h-3 w-3 scale-x-75 stroke-black stroke-[4]",
                                  }),
                              }),
                        ],
                      }),
                    },
                    t.id,
                  );
                }),
              }),
              (0, o.jsx)(U.R, {}),
            ],
          })
        );
      }
      var ej = "oai/apps/hasSeenUserSurvey6_23";
      function eb() {
        var e = (0, g.Z)(),
          t = (0, J.w$)(),
          s = (0, a._)((0, h.useState)(!1), 2),
          n = s[0],
          i = s[1],
          l = es.m.getItem(ej);
        return n || l
          ? null
          : (0, o.jsx)("div", {
              className: "mx-1 mb-1 rounded-sm bg-[#0077FF]",
              children: (0, o.jsxs)("div", {
                className:
                  "flex flex-col items-center justify-stretch gap-3 p-3 text-sm text-white",
                children: [
                  (0, o.jsxs)("div", {
                    className: "flex w-full items-start",
                    children: [
                      (0, o.jsxs)("div", {
                        className: "flex-grow",
                        children: [
                          (0, o.jsx)("div", {
                            className: "font-bold",
                            children: (0, o.jsx)(
                              x.Z,
                              (0, r._)({}, eM.surveyTitle),
                            ),
                          }),
                          (0, o.jsx)("div", {
                            children: (0, o.jsx)(
                              x.Z,
                              (0, r._)({}, eM.surveyDescription),
                            ),
                          }),
                        ],
                      }),
                      (0, o.jsx)("button", {
                        className: "text-white/25 hover:text-white/40",
                        onClick: function () {
                          i(!0), es.m.setItem(ej, !0);
                        },
                        "aria-label": e.formatMessage(eM.surveyDismiss),
                        children: (0, o.jsx)(ei.QF, {
                          width: t ? "20px" : "24px",
                          height: t ? "20px" : "24px",
                        }),
                      }),
                    ],
                  }),
                  (0, o.jsxs)("a", {
                    href: "https://openai.qualtrics.com/jfe/form/SV_7QmSGWHymCCmIxE",
                    target: "_blank",
                    className:
                      "flex w-full flex-row items-center justify-center gap-2 rounded-[4px] bg-white/25 p-2 hover:bg-white/40",
                    rel: "noreferrer",
                    onClick: function () {
                      es.m.setItem(ej, !0), i(!0);
                    },
                    children: [
                      (0, o.jsx)(p.AlO, { className: "icon-sm" }),
                      (0, o.jsx)(x.Z, (0, r._)({}, eM.takeSurveyButton)),
                    ],
                  }),
                ],
              }),
            });
      }
      function ek(e) {
        var t = e.onClickSettings,
          s = (0, u.WY)(),
          n = (0, u.ec)(u.F_.isBusinessWorkspace),
          a = (0, u.hz)(),
          i = a.has(c.G_),
          l = (0, u.ec)(u.F_.hasMultipleWorkspaces),
          d = (0, J.w$)(),
          f = a.has(c.rk);
        return (0, o.jsxs)("nav", {
          children: [
            i && (0, o.jsx)(eb, {}),
            l ? (0, o.jsx)(ey, {}) : n && (0, o.jsx)(ev, {}),
            n ? (0, o.jsx)(em, {}) : (0, o.jsx)(el, {}),
            (!f || !d) &&
              (0, o.jsxs)(U.ZP, {
                as: "a",
                href: "https://help.openai.com/en/collections/3742473-chatgpt",
                target: "_blank",
                onClick: function () {
                  W.A.logEvent(R.M.clickFaqLink);
                },
                children: [
                  (0, o.jsx)(p.AlO, { className: "icon-sm" }),
                  (0, o.jsx)(x.Z, (0, r._)({}, eM.helpAndFaq)),
                ],
              }),
            (0, o.jsxs)(U.ZP, {
              onClick: t,
              children: [
                (0, o.jsx)(p.nbt, { className: "icon-sm" }),
                s
                  ? (0, o.jsx)(x.Z, (0, r._)({}, eM.settingsPlus))
                  : (0, o.jsx)(x.Z, (0, r._)({}, eM.settings)),
              ],
            }),
            (0, o.jsx)(U.R, {}),
            (0, o.jsxs)(U.ZP, {
              onClick: function () {
                W.A.logEvent(R.M.clickLogOut, { eventSource: "mouse" }),
                  (0, et.w7)();
              },
              children: [
                (0, o.jsx)(p.xqh, { className: "icon-sm" }),
                (0, o.jsx)(x.Z, (0, r._)({}, eM.logOut)),
              ],
            }),
          ],
        });
      }
      function ew() {
        var e = (0, et.kP)().session;
        return (null == e ? void 0 : e.user) ? (0, o.jsx)(eN, {}) : null;
      }
      function eN() {
        var e = (0, ea.$3)(),
          t = (0, ea.cI)(),
          s = (0, u.ec)(u.F_.isBusinessWorkspace),
          r = (0, u.ec)(u.F_.hasMultipleWorkspaces);
        return (0, o.jsxs)(ee.v.Button, {
          className:
            "flex w-full items-center gap-3 rounded-md p-3 text-sm transition-colors duration-200 hover:bg-gray-100 group-ui-open:bg-gray-100 gizmo:gap-2 gizmo:rounded-lg gizmo:p-1 gizmo:hover:bg-gray-50 dark:hover:bg-gray-800 dark:group-ui-open:bg-gray-800",
          children: [
            (0, o.jsx)("div", {
              className: "flex-shrink-0",
              children: (0, o.jsx)(en.zf, { iconSize: "gizmo" }),
            }),
            (0, o.jsxs)("div", {
              className:
                "grow overflow-hidden text-ellipsis whitespace-nowrap text-left text-gray-700 dark:text-white",
              children: [
                (0, o.jsx)("div", { className: "font-semibold", children: t }),
                s || r
                  ? (0, o.jsx)("div", {
                      className: "text-xs text-gray-500 gizmo:-mt-1",
                      children: e,
                    })
                  : null,
              ],
            }),
            (0, o.jsx)(p.K9M, {
              className: "icon-sm flex-shrink-0 text-gray-500 gizmo:hidden",
            }),
          ],
        });
      }
      var eM = (0, v.vU)({
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
      function e_() {
        var e = (0, i._)([
          "flex-col flex-1 transition-opacity duration-500 -mr-2 pr-2\n  ",
          "",
        ]);
        return (
          (e_ = function () {
            return e;
          }),
          e
        );
      }
      function eC(e) {
        var t = e.onNewThread,
          s = e.children,
          a = (0, g.Z)(),
          i = (0, u.hz)().has(c.Ue),
          l = (0, u.ec)(u.F_.isBusinessWorkspace),
          v = (0, h.useRef)(null),
          y = (0, h.useContext)(d.QL),
          b = y.historyDisabled,
          k = y.toggleHistoryDisabled,
          w = (0, y.getModifiedSettings)(),
          C = (0, M.Fr)().openSettings;
        (0, h.useEffect)(function () {
          w && C();
        }, []);
        var P = (0, h.useCallback)(
            function () {
              t(), k();
            },
            [t, k],
          ),
          S = (0, o.jsxs)("div", {
            className: (0, m.default)(
              "absolute left-0 top-14 z-20 overflow-hidden transition-all duration-500",
              b ? "visible max-h-72" : "invisible max-h-0",
            ),
            children: [
              (0, o.jsxs)("div", {
                className: "bg-gray-900 px-4 py-3",
                children: [
                  (0, o.jsx)("div", {
                    className: "p-1 text-sm text-gray-100",
                    children: (0, o.jsx)(x.Z, (0, r._)({}, eR.chatHistoryOff)),
                  }),
                  (0, o.jsx)("div", {
                    className: "p-1 text-xs text-gray-500",
                    children: (0, o.jsx)(
                      x.Z,
                      (0, n._)(
                        (0, r._)(
                          {},
                          l
                            ? eR.chatHistoryOffDescriptionBusiness
                            : eR.chatHistoryOffDescription,
                        ),
                        {
                          values: {
                            learnMore: (0, o.jsx)("a", {
                              href: "https://help.openai.com/en/articles/7730893",
                              target: "_blank",
                              className: "underline",
                              rel: "noreferrer",
                              children: (0, o.jsx)(
                                x.Z,
                                (0, r._)({}, eR.learnMore),
                              ),
                            }),
                            b: function (e) {
                              return (0, o.jsx)("strong", { children: e });
                            },
                          },
                        },
                      ),
                    ),
                  }),
                  (0, o.jsxs)(j.z, {
                    className: "mt-4 w-full",
                    onClick: P,
                    color: "primary",
                    size: "medium",
                    children: [
                      (0, o.jsx)(p.$IY, { className: "icon-sm" }),
                      (0, o.jsx)(x.Z, (0, r._)({}, eR.enableChatHistory)),
                    ],
                  }),
                ],
              }),
              (0, o.jsx)("div", {
                className: "h-24 bg-gradient-to-t from-gray-900/0 to-gray-900",
              }),
            ],
          }),
          Z = (0, N.Ml)();
        return (0, o.jsx)(o.Fragment, {
          children: (0, o.jsxs)("div", {
            className:
              "scrollbar-trigger relative h-full w-full flex-1 items-start border-white/20",
            children: [
              (0, o.jsx)(f.f, {
                asChild: !0,
                children: (0, o.jsx)("h2", {
                  children: (0, o.jsx)(x.Z, (0, r._)({}, eR.chatHistoryLabel)),
                }),
              }),
              (0, o.jsxs)("nav", {
                className: "flex h-full w-full flex-col p-2",
                "aria-label": a.formatMessage(eR.chatHistoryLabel),
                children: [
                  Z
                    ? (0, o.jsx)(eZ, { onNewThread: t })
                    : (0, o.jsxs)("div", {
                        className: "mb-1 flex flex-row gap-2",
                        children: [
                          (0, o.jsxs)(_.MP, {
                            onClick: t,
                            className: "bg-white dark:bg-transparent",
                            children: [
                              b
                                ? (0, o.jsx)(p.Bw1, {
                                    className: "icon-sm shrink-0",
                                  })
                                : (0, o.jsx)(p.OvN, {
                                    className: "icon-sm shrink-0",
                                  }),
                              (0, o.jsx)("span", {
                                className: "truncate",
                                children: (0, o.jsx)(
                                  x.Z,
                                  (0, r._)({}, b ? eR.clearChat : eR.newChat),
                                ),
                              }),
                            ],
                          }),
                          i && (0, o.jsx)(_.H, {}),
                        ],
                      }),
                  S,
                  (0, o.jsx)(eW, { ref: v, $disableScroll: b, children: s }),
                  (0, o.jsx)(eS, {}),
                ],
              }),
            ],
          }),
        });
      }
      function eP() {
        var e = (0, g.Z)();
        return (0, o.jsx)(w.u, {
          side: "right",
          sideOffset: 4,
          label: e.formatMessage(eR.closeSidebar),
          className: "hidden sm:inline-block",
          children: (0, o.jsxs)("button", {
            onClick: function () {
              b.vm.toggleDesktopNavCollapsed();
            },
            className:
              "p-2 text-token-text-tertiary transition hover:text-token-text-secondary",
            children: [
              (0, o.jsx)(p.iYc, { className: "icon-sm" }),
              (0, o.jsx)(f.f, {
                children: (0, o.jsx)(x.Z, (0, r._)({}, eR.closeSidebar)),
              }),
            ],
          }),
        });
      }
      function eS() {
        var e = (0, a._)(
            (0, h.useState)(function () {
              var e = k.b.getCookie(k.c.Workspace);
              return "string" == typeof e && e !== l.b;
            }),
            1,
          )[0],
          t = (0, u.hz)(),
          s = t.has(c.Rw) || t.has(c.uo),
          r = (0, M.Fr)().openSettings,
          n = (0, u.$T)(),
          i = (0, N.Ml)();
        return e && n
          ? null
          : (0, o.jsxs)("div", {
              className:
                "border-t border-black/20 pt-2 empty:hidden gizmo:border-token-border-light dark:border-white/20",
              children: [
                (0, o.jsx)(q, {}),
                (0, o.jsxs)("div", {
                  className: "flex w-full items-center",
                  children: [
                    (0, o.jsx)("div", {
                      className: "grow",
                      children: (0, o.jsx)(eg, {
                        onClickSettings: function () {
                          return r();
                        },
                      }),
                    }),
                    i && (0, o.jsx)(eP, {}),
                  ],
                }),
                s && (0, o.jsx)(C.wm, {}),
              ],
            });
      }
      function eZ(e) {
        var t = e.onNewThread;
        return (0, o.jsx)("div", {
          className: "flex justify-end",
          children: (0, o.jsx)(w.u, {
            label: (0, o.jsx)(x.Z, (0, r._)({}, eR.newChat)),
            side: "right",
            sideOffset: 4,
            children: (0, o.jsx)("button", {
              onClick: t,
              className:
                "flex h-10 w-11 items-center justify-center rounded-lg text-token-text-secondary hover:bg-token-surface-secondary",
              children: (0, o.jsx)(p.vPQ, { className: "icon-sm" }),
            }),
          }),
        });
      }
      var eW = y.Z.div(e_(), function (e) {
          return e.$disableScroll
            ? "overflow-y-hidden opacity-20 pointer-events-none"
            : "overflow-y-auto";
        }),
        eR = (0, v.vU)({
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
          closeSidebar: {
            id: "NavigationContent.closeSidebar",
            defaultMessage: "Close sidebar",
            description: "Close sidebar button label",
          },
        });
    },
  },
]);
