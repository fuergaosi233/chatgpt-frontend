"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [537],
  {
    40537: function (e, t, a) {
      a.d(t, {
        FB: function () {
          return ep;
        },
        ZP: function () {
          return ex;
        },
        wS: function () {
          return em;
        },
      });
      var s,
        n,
        o = a(22830),
        r = a(35250),
        i = a(88798),
        c = a(21739),
        l = a(32542),
        d = a(77010),
        u = a(70079),
        g = a(32877),
        h = a(37469),
        f = a(78931),
        p = a(61888),
        m = a(70671),
        x = a(94968),
        y = a(95137),
        v = a(21722),
        b = a(39324),
        k = a(71209),
        w = a(75883),
        j = a(12155),
        M = a(60554),
        C = a(1454),
        N = a(32004),
        T = a(79579),
        S = a(89368),
        B = a(1821);
      function A() {
        var e = (0, y.Go)(),
          t = (0, M.useRouter)(),
          a = (0, m.Z)(),
          s = (0, o._)((0, u.useState)(), 2),
          n = s[0],
          i = s[1],
          c = null !== e;
        if (
          ((0, u.useEffect)(
            function () {
              c || i(void 0);
            },
            [c]
          ),
          !c)
        )
          return null;
        var l = (0, r.jsx)("span", {
            className: "font-medium",
            children: e.ownerEmail,
          }),
          d = e.hasActiveRequest || "success" === n;
        return (0, r.jsx)(S.Z, {
          isOpen: !0,
          onClose: p.noop,
          type: "warning",
          size: "custom",
          className: "max-w-3xl",
          title: (0, r.jsxs)("div", {
            className: "flex flex-col",
            children: [
              (0, r.jsx)("div", {
                className: "text-lg",
                children: (0, r.jsx)(
                  N.Z,
                  (0, k._)((0, b._)({}, _.title), {
                    values: { workspaceName: e.accountName },
                  })
                ),
              }),
              (0, r.jsx)("div", {
                className: "text-sm font-normal",
                children: (0, r.jsx)(N.Z, (0, b._)({}, _.subtitle)),
              }),
            ],
          }),
          icon: C.UIZ,
          primaryButton: (0, r.jsx)(T.ZP.Button, {
            onClick: (0, v._)(function () {
              return (0, w.Jh)(this, function (t) {
                switch (t.label) {
                  case 0:
                    i("requesting"), (t.label = 1);
                  case 1:
                    return (
                      t.trys.push([1, 3, , 4]),
                      [4, y.ZP.requestWorkspaceAccess(e.accountId)]
                    );
                  case 2:
                    return t.sent().success && i("success"), [3, 4];
                  case 3:
                    return t.sent(), i("error"), [3, 4];
                  case 4:
                    return [2];
                }
              });
            }),
            color: "primary",
            title: a.formatMessage(_.requestAccessButton),
            disabled: d,
          }),
          secondaryButton: (0, r.jsx)(T.ZP.Button, {
            onClick: (0, v._)(function () {
              var e;
              return (0, w.Jh)(this, function (a) {
                switch (a.label) {
                  case 0:
                    return [
                      4,
                      (0, j.signOut)({
                        redirect: !1,
                        callbackUrl: "/auth/login?next=".concat(
                          encodeURIComponent(t.asPath)
                        ),
                      }),
                    ];
                  case 1:
                    return (e = a.sent()), t.push(e.url), [2];
                }
              });
            }),
            color: "neutral",
            title: a.formatMessage(_.signOutButton),
          }),
          children: (0, r.jsxs)("div", {
            className: "flex flex-col space-y-4",
            children: [
              (0, r.jsx)("div", {
                children: (0, r.jsx)(
                  N.Z,
                  (0, k._)((0, b._)({}, _.emailBelongsToWorkspace), {
                    values: {
                      email: (0, r.jsx)("span", {
                        className: "font-medium",
                        children: e.userEmail,
                      }),
                    },
                  })
                ),
              }),
              (0, r.jsx)("div", {
                children: d
                  ? (0, r.jsx)(
                      N.Z,
                      (0, k._)((0, b._)({}, _.activeRequestMessage), {
                        values: { email: l },
                      })
                    )
                  : "requesting" === n
                  ? (0, r.jsx)(B.Z, {})
                  : "error" === n
                  ? (0, r.jsx)(
                      N.Z,
                      (0, k._)((0, b._)({}, _.contactWorkspaceAdminEmail), {
                        values: { email: l },
                      })
                    )
                  : null,
              }),
            ],
          }),
        });
      }
      var _ = {
          title: {
            id: "RequestWorkspaceAccessModal.title",
            defaultMessage: "Request access to {workspaceName}",
            description: "Title for request access modal for a workspace",
          },
          subtitle: {
            id: "RequestWorkspaceAccessModal.subtitle",
            defaultMessage:
              "ChatGPT Enterprise has been enabled in your workspace",
            description:
              "Subtitle for request access modal mentioning ChatGPT Enterprise",
          },
          emailBelongsToWorkspace: {
            id: "RequestWorkspaceAccessModal.emailBelongsToWorkspace",
            defaultMessage:
              "{email} belongs to a ChatGPT Enterprise plan but currently has no access.",
            description:
              "Message shown telling the user their email is part of an enterprise workspace.",
          },
          requestWorkspaceAccessMessage: {
            id: "RequestWorkspaceAccessModal.requestWorkspaceAccessMessage",
            defaultMessage: "You may request access to the workspace account.",
            description:
              "Message telling the user to request access to the workspace.",
          },
          requestedWorkspaceAccessMessage: {
            id: "RequestWorkspaceAccessModal.requestedWorkspaceAccessMessage",
            defaultMessage:
              "Successfully requested access to the workspace account. Your workspace administrator at {email} may approve the request.",
            description:
              "Message telling the user they have requested access to the workspace.",
          },
          contactWorkspaceAdminEmail: {
            id: "RequestWorkspaceAccessModal.contactWorkspaceAdminEmail",
            defaultMessage:
              "Could not request access. Contact your workspace administrator at {email} to request access to a new workspace account.",
            description:
              "Message telling the user who to contact to create a new account for the workspace.",
          },
          signOutButton: {
            id: "RequestWorkspaceAccessModal.signOutButton",
            defaultMessage: "Sign Out",
            description: "Label for sign out button on modal",
          },
          requestAccessButton: {
            id: "RequestWorkspaceAccessModal.requestAccessButton",
            defaultMessage: "Request access",
            description: "Label for request access button on modal",
          },
          activeRequestMessage: {
            id: "RequestWorkspaceAccessModal.activeRequestMessage",
            defaultMessage:
              "You have a pending invite request for this workspace. Contact your workspace administrator at {email} to approve your request.",
            description:
              "Message telling the user they have an active request for the workspace.",
          },
        },
        Z = a(75641),
        P = a(88809),
        W = a(25260),
        I = a(62509),
        q = a(19841),
        E = a(91530),
        R = a.n(E),
        D = a(19579),
        O = a.n(D),
        K = a(6038),
        L = a(32367),
        U = a(52696);
      function G(e) {
        var t = e.workspace,
          a = (0, I.kP)().session,
          s = (0, f.ec)(function (e) {
            return e.currentWorkspace;
          }),
          n = (null == s ? void 0 : s.id) === t.id,
          i = (0, o._)((0, u.useState)(!1), 2),
          c = i[0],
          l = i[1],
          d = (0, L.Z)().onEnableHistory,
          g = (0, u.useCallback)(
            (0, v._)(function () {
              return (0, w.Jh)(this, function (e) {
                return l(!0), f.w_.setCurrentWorkspace(t), d(), (0, P.M)(), [2];
              });
            }),
            [t, d]
          ),
          h = (0, U.GA)(t),
          p = (0, r.jsx)("div", {
            className: "flex items-center justify-center",
            children: (0, r.jsx)(K.B0, {}),
          });
        if (t.structure === Z.CZ.PERSONAL) {
          if (!(null == a ? void 0 : a.user)) return null;
          p = (0, r.jsx)("div", {
            className: "flex items-center justify-center",
            children: (0, r.jsx)(O(), {
              alt: "Profile",
              src: a.user.picture,
              width: 38,
              height: 38,
              className: "flex items-center justify-center rounded-sm",
            }),
          });
        }
        return (0, r.jsxs)(n ? "div" : "button", {
          onClick: n ? R() : g,
          className: (0, q.default)({
            "flex w-full items-center gap-2 rounded-lg border border-gray-100 bg-gray-50 p-4 hover:bg-gray-100 focus:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:bg-gray-700":
              !0,
            "bg-gray-50 dark:bg-gray-800": n,
          }),
          children: [
            (0, r.jsxs)("div", {
              className: "flex w-full items-center gap-4",
              children: [
                p,
                (0, r.jsx)("div", {
                  className: "inline align-top font-medium",
                  children: h,
                }),
              ],
            }),
            (0, r.jsx)("div", {
              className: "flex h-full items-center p-1",
              children: c
                ? (0, r.jsx)(B.Z, {})
                : n
                ? (0, r.jsx)(W.Z, { className: "icon-lg" })
                : (0, r.jsx)(C.Tfp, { className: "icon-lg my-auto" }),
            }),
          ],
        });
      }
      function H(e) {
        var t = e.data.map(function (e) {
          return (0, r.jsx)(G, { workspace: e }, e.id);
        });
        return (0, r.jsx)("div", {
          className: "flex w-full flex-col gap-2",
          children: t,
        });
      }
      function z() {
        var e,
          t,
          a = (0, U._O)(),
          s = (0, I.kP)().session,
          n =
            null !==
              (t =
                null == s
                  ? void 0
                  : null === (e = s.user) || void 0 === e
                  ? void 0
                  : e.email) && void 0 !== t
              ? t
              : "";
        if (0 === a.length) return null;
        var o = a.filter(function (e) {
          return e.structure === Z.CZ.WORKSPACE;
        });
        return (0, r.jsx)(S.Z, {
          isOpen: !0,
          onClose: R(),
          type: "success",
          size: "normal",
          title: (0, r.jsxs)("div", {
            className: "flex flex-col",
            children: [
              (0, r.jsx)(N.Z, (0, b._)({}, F.workspaceSwitcherTitle)),
              (0, r.jsx)("span", {
                className: "mt-0.5 text-sm text-gray-700 dark:text-gray-400",
                children: n,
              }),
            ],
          }),
          children: (0, r.jsxs)("div", {
            className: "flex w-full flex-col items-center justify-between",
            children: [
              (0, r.jsx)(H, { data: a }),
              (0, r.jsx)("span", {
                className: "mt-4 text-sm text-gray-700 dark:text-gray-400",
                children: (0, r.jsx)(
                  N.Z,
                  (0, k._)((0, b._)({}, F.workspaceSwitcherDisclaimer), {
                    values: {
                      workspaces: (0, r.jsx)("span", {
                        className: "contents font-bold",
                        children: (0, r.jsx)(x.yX, {
                          value: o.map(function (e) {
                            return e.name;
                          }),
                        }),
                      }),
                      numWorkspaces: o.length,
                    },
                  })
                ),
              }),
            ],
          }),
        });
      }
      var F = (0, x.vU)({
          workspaceSwitcherTitle: {
            id: "workspaceSwitcher.title",
            defaultMessage: "Select a workspace",
            description: "title for account switcher modal",
          },
          workspaceSwitcherDisclaimer: {
            id: "workspaceSwitcher.disclaimer",
            defaultMessage:
              "You've been added to the {workspaces} {numWorkspaces, plural, one {workspace} other {workspaces}}. You can switch between workspaces at any time.",
            description: "disclaimer for account switcher modal",
          },
        }),
        Q = a(77311),
        J = a(6948),
        X = a(88327),
        Y = "oai/apps/hasSeenOnboarding";
      ((s = n || (n = {})).Personal = "chat"), (s.Workspace = "workspace");
      var $ = function (e) {
        var t = (0, u.useCallback)(
            function () {
              J.m.setItem(
                "".concat(Y, "/").concat(e),
                new Date().toLocaleDateString("en-CA", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                })
              );
            },
            [e]
          ),
          a = (0, o._)((0, u.useState)(null), 2),
          s = a[0],
          n = a[1];
        (0, u.useEffect)(
          function () {
            var t = J.m.getItem("".concat(Y, "/").concat(e));
            n(!!t && t);
          },
          [e]
        );
        var r = (0, u.useCallback)(
          function () {
            return s ? new Date(!0 === s ? "2022-12-14" : s) : s;
          },
          [s]
        );
        return (0, u.useMemo)(
          function () {
            return { setHasSeenOnboarding: t, getHasSeenOnboardingDate: r };
          },
          [r, t]
        );
      };
      function V(e) {
        var t = e.onClose,
          a = e.scope,
          s = $(a).setHasSeenOnboarding,
          o = (0, u.useCallback)(
            function () {
              t(!0), s();
            },
            [t, s]
          );
        return a === n.Personal
          ? (0, r.jsx)(et, { onSubmit: o })
          : (0, r.jsx)(ea, { onSubmit: o });
      }
      var ee = function (e) {
          var t = e.icon,
            a = e.title,
            s = e.body;
          return (0, r.jsxs)("div", {
            children: [
              (0, r.jsxs)("div", {
                className: "flex flex-row items-center gap-1.5",
                children: [
                  (0, r.jsx)("div", { children: t }),
                  (0, r.jsx)("div", {
                    className: "font-medium text-token-text-primary",
                    children: a,
                  }),
                ],
              }),
              (0, r.jsx)("div", {
                className: "text-sm text-token-text-secondary",
                children: s,
              }),
            ],
          });
        },
        et = function (e) {
          var t = e.onSubmit,
            a = (0, m.Z)();
          return (0, r.jsxs)("div", {
            className: "flex flex-col gap-6",
            children: [
              (0, r.jsx)(ee, {
                icon: (0, r.jsx)(X.wP, {
                  isSolid: !0,
                  className: "h-5 w-5 text-green-600",
                }),
                title: (0, r.jsx)(N.Z, (0, b._)({}, es.askAway)),
                body: (0, r.jsx)(N.Z, (0, b._)({}, es.askAwayBody)),
              }),
              (0, r.jsx)(ee, {
                icon: (0, r.jsx)(X.NJ, { className: "text-brand-purple" }),
                title: (0, r.jsx)(N.Z, (0, b._)({}, es.warning)),
                body: (0, r.jsx)(
                  N.Z,
                  (0, k._)((0, b._)({}, es.warningBody), {
                    values: {
                      article: function (e) {
                        return (0, r.jsx)("a", {
                          href: "https://help.openai.com/en/articles/7039943-data-usage-for-consumer-services-faq",
                          target: "_blank",
                          className: "underline",
                          rel: "noopener noreferrer",
                          children: e,
                        });
                      },
                    },
                  })
                ),
              }),
              (0, r.jsx)(ee, {
                icon: (0, r.jsx)(X.CJ, { className: "text-orange-300" }),
                title: (0, r.jsx)(N.Z, (0, b._)({}, es.accuracy)),
                body: (0, r.jsx)(N.Z, (0, b._)({}, es.accuracyBody)),
              }),
              (0, r.jsx)("div", {
                className: "flex flex-row justify-end",
                children: (0, r.jsx)(T.mH, {
                  title: a.formatMessage(es.gettingStartedButton),
                  onClick: t,
                  color: "primary",
                }),
              }),
            ],
          });
        },
        ea = function (e) {
          var t = e.onSubmit,
            a = (0, m.Z)(),
            s = (0, f.ec)(function (e) {
              return e.currentWorkspace;
            }),
            n = null == s ? void 0 : s.name;
          return (0, r.jsxs)("div", {
            className: "flex flex-col gap-3",
            children: [
              (0, r.jsxs)("div", {
                children: [
                  (0, r.jsx)("div", {
                    className: "font-medium text-token-text-primary",
                    children:
                      null != n
                        ? (0, r.jsx)(
                            N.Z,
                            (0, b._)(
                              { values: { workspaceName: n } },
                              es.workspaceWelcome
                            )
                          )
                        : (0, r.jsx)(
                            N.Z,
                            (0, b._)({}, es.workspaceWelcomeNoName)
                          ),
                  }),
                  (0, r.jsx)("div", {
                    className: "text-sm text-token-text-secondary",
                    children: (0, r.jsx)(
                      N.Z,
                      (0, b._)({}, es.workspaceWelcomeBody)
                    ),
                  }),
                ],
              }),
              (0, r.jsx)(ee, {
                icon: (0, r.jsx)(Q.Z, {
                  className: "icon-md text-brand-purple",
                }),
                title: (0, r.jsx)(N.Z, (0, b._)({}, es.workUse)),
                body: (0, r.jsx)(N.Z, (0, b._)({}, es.workUseBody)),
              }),
              (0, r.jsx)(ee, {
                icon: (0, r.jsx)(X.wP, {
                  isSolid: !0,
                  className: "h-5 w-5 text-green-600",
                }),
                title: (0, r.jsx)(N.Z, (0, b._)({}, es.askAway)),
                body: (0, r.jsx)(N.Z, (0, b._)({}, es.askAwayBody)),
              }),
              (0, r.jsx)(ee, {
                icon: (0, r.jsx)(X.CJ, { className: "text-orange-300" }),
                title: (0, r.jsx)(N.Z, (0, b._)({}, es.accuracy)),
                body: (0, r.jsx)(N.Z, (0, b._)({}, es.accuracyBody)),
              }),
              (0, r.jsx)("div", {
                className: "flex flex-row justify-end",
                children: (0, r.jsx)(T.mH, {
                  title: a.formatMessage(es.gettingStartedButton),
                  onClick: t,
                  color: "primary",
                }),
              }),
            ],
          });
        },
        es = (0, x.vU)({
          askAway: {
            id: "onboarding.askAway",
            defaultMessage: "Ask away",
            description: "Title for the tip about what ChatGPT can do",
          },
          askAwayBody: {
            id: "onboarding.askAwayBody",
            defaultMessage:
              "ChatGPT can answer questions, help you learn, write code, brainstorm together, and much more.",
            description: "Body copy for the tip about what ChatGPT can do",
          },
          warning: {
            id: "onboarding.warning",
            defaultMessage: "Don’t share sensitive info",
            description: "Title for the warning about ChatGPT traning",
          },
          warningBody: {
            id: "onboarding.warningBody",
            defaultMessage:
              "Chat history may be reviewed or used to improve our services. Learn more about your choices in our <article>Help Center</article>.",
            description: "Body copy for the warning about ChatGPT traning",
          },
          accuracy: {
            id: "onboarding.accuracy",
            defaultMessage: "Check your facts",
            description: "Title for the warning about ChatGPT inaccuracy",
          },
          accuracyBody: {
            id: "onboarding.accuracyBody",
            defaultMessage:
              "While we have safeguards, ChatGPT may give you inaccurate information. It’s not intended to give advice.",
            description: "Body copy for the warning about ChatGPT inaccuracy",
          },
          gettingStartedButton: {
            id: "onboarding.gettingStartedButton",
            defaultMessage: "Okay, let’s go",
            description: "Button to accept the getting started modal",
          },
          workspaceWelcome: {
            id: "onboarding.workspaceWelcome",
            defaultMessage: "Welcome to the {workspaceName} Workspace",
            description: "Introduction welcome for workspace onboarding",
          },
          workspaceWelcomeNoName: {
            id: "onboarding.workspaceWelcomeNoName",
            defaultMessage: "Welcome to the your Workspace",
            description:
              "Introduction welcome for workspace onboarding when no Workspace name is available",
          },
          workspaceWelcomeBody: {
            id: "onboarding.workspaceWelcomeBody",
            defaultMessage:
              "Here you can use our latest models, with more capabilities, and fewer limits.",
            description: "Introduction welcome body for workspace onboarding",
          },
          workUse: {
            id: "onboarding.workUse",
            defaultMessage: "Made for use at work",
            description:
              "Title for the warning about ChatGPT business workspace use",
          },
          workUseBody: {
            id: "onboarding.workUseBody",
            defaultMessage:
              "By default, chats in this workspace are not used to train our AI models.",
            description:
              "Body copy for the warning about ChatGPT business workspace use",
          },
        }),
        en = function (e) {
          var t = e.onClose,
            a = (0, m.Z)();
          return (0, r.jsx)(S.Z, {
            isOpen: !0,
            onClose: p.noop,
            type: "success",
            title: "ChatGPT",
            description: a.formatMessage(ei.personalOnboardingSubheading),
            children: (0, r.jsx)(V, { onClose: t, scope: n.Personal }),
          });
        },
        eo = function (e) {
          var t = e.onClose;
          return (0, r.jsx)(S.Z, {
            isOpen: !0,
            onClose: p.noop,
            type: "success",
            title: "ChatGPT",
            description: "Enterprise Edition",
            children: (0, r.jsx)(V, { onClose: t, scope: n.Workspace }),
          });
        };
      function er() {
        var e = (0, o._)((0, u.useState)(0), 2),
          t = e[0],
          a = e[1],
          s = $(n.Personal).getHasSeenOnboardingDate,
          i = $(n.Workspace).getHasSeenOnboardingDate,
          c = (0, f.ec)(f.F_.isBusinessWorkspace),
          l = (0, f.$T)(),
          d = (0, y.Go)(),
          g = (0, f.ec)(f.F_.workspaceId),
          h = (0, f.ec)(f.F_.hasMultipleWorkspaces) && null == g,
          p = (0, u.useMemo)(
            function () {
              return [
                {
                  Modal: z,
                  getModalState: function () {
                    return l ? "loading" : h ? "show" : "hide";
                  },
                },
                {
                  Modal: A,
                  getModalState: function () {
                    return l ? "loading" : null !== d ? "show" : "hide";
                  },
                },
                {
                  Modal: en,
                  getModalState: function () {
                    if (c) return "hide";
                    var e = s();
                    return null === e ? "loading" : !1 === e ? "show" : "hide";
                  },
                },
                {
                  Modal: eo,
                  getModalState: function () {
                    if (!c) return "hide";
                    var e = i();
                    return null === e ? "loading" : !1 === e ? "show" : "hide";
                  },
                },
              ];
            },
            [s, i, c, l, d, h]
          );
        (0, u.useEffect)(
          function () {
            p[t] &&
              "hide" === p[t].getModalState() &&
              a(
                p.findIndex(function (e) {
                  return "hide" !== e.getModalState();
                })
              );
          },
          [t, p]
        );
        var m = p[t];
        if (null == m) return null;
        var x = m.getModalState();
        if ("loading" === x) return null;
        "hide" === x &&
          a(function (e) {
            return e + 1;
          });
        var v = p[t].Modal;
        return (0, r.jsx)(v, {
          onClose: function () {
            a(function (e) {
              return e + 1;
            });
          },
        });
      }
      var ei = (0, x.vU)({
          personalOnboardingSubheading: {
            id: "BlockingInitialModals.personalOnboardingSubheading",
            defaultMessage: "Tips for getting started",
            description: "Subheading for the Personal onbaording modal",
          },
        }),
        ec = a(6780),
        el = a(46020),
        ed = a(10664),
        eu = function (e) {
          var t = e.action;
          return (0, r.jsxs)("div", {
            className:
              "flex items-center justify-between overflow-hidden text-gray-600 dark:text-gray-300",
            children: [
              (0, r.jsx)("div", {
                className:
                  "flex flex-shrink items-center overflow-hidden text-sm",
                children: (0, r.jsx)("div", {
                  className: "truncate",
                  children: (0, r.jsx)(
                    N.Z,
                    (0, b._)({}, t.actionMessageDescriptor)
                  ),
                }),
              }),
              (0, r.jsx)("div", {
                className: "ml-3 flex flex-row gap-2",
                children: (0, ed.A3)(t.keyboardBinding).map(function (e, a) {
                  return (0,
                  r.jsx)(eg, { keyName: e }, "".concat(t.key, "-").concat(a));
                }),
              }),
            ],
          });
        },
        eg = function (e) {
          var t = e.keyName,
            a = (0, q.default)(
              "my-2 flex h-8 items-center justify-center rounded-[4px] border border-black/10 capitalize text-gray-600 dark:border-white/10 dark:text-gray-300"
            );
          return t.length > 1
            ? t.length > 3
              ? (0, r.jsx)("div", {
                  className: (0, q.default)(a, "min-w-[50px]"),
                  children: (0, r.jsx)("span", {
                    className: "text-xs",
                    children: t,
                  }),
                })
              : (0, r.jsx)("div", {
                  className: (0, q.default)(a, "min-w-[32px]"),
                  children: (0, r.jsx)("span", {
                    className: "text-xs",
                    children: t,
                  }),
                })
            : (0, r.jsx)("div", {
                className: (0, q.default)(a, "min-w-[32px]"),
                children: (0, r.jsx)("span", {
                  className: "text-sm",
                  children: t,
                }),
              });
        },
        eh = (0, x.vU)({
          keyboardActionsModalTitle: {
            id: "KeyboardActionsModal.keyboardActionsModalTitle",
            defaultMessage: "Keyboard shortcuts",
            description: "Title of the keyboard shortcuts modal",
          },
        }),
        ef = function () {
          var e = (0, m.Z)(),
            t = (0, el.tN)(function (e) {
              return e.activeModals.has(el.B.KeyboardActions);
            }),
            a = function () {
              el.vm.closeModal(el.B.KeyboardActions);
            },
            s = (0, ed.JS)(),
            n = (0, u.useMemo)(
              function () {
                var e = Math.ceil(s.length / 2);
                return [s.slice(0, e), s.slice(e)];
              },
              [s]
            );
          return (0, r.jsx)(S.Z, {
            isOpen: t,
            onClose: a,
            type: "success",
            size: "custom",
            className: "md:max-w-[672px] lg:max-w-[796px] xl:max-w-4xl",
            closeButton: (0, r.jsx)(T.ZP.CloseButton, { onClose: a }),
            title: e.formatMessage(eh.keyboardActionsModalTitle),
            children: (0, r.jsx)(r.Fragment, {
              children: (0, r.jsx)("div", {
                className:
                  "grid grid-flow-row grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-x-9",
                children: n.map(function (e, t) {
                  return (0, r.jsx)(
                    "div",
                    {
                      className: "flex flex-col overflow-hidden",
                      children: e.map(function (e) {
                        return (0, r.jsx)(eu, { action: e }, e.key);
                      }),
                    },
                    "col-".concat(t)
                  );
                }),
              }),
            }),
          });
        },
        ep = Symbol("invalid path");
      function em(e) {
        var t,
          a = e.split(/[#?]/)[0];
        if ("/" !== a) {
          var s = /\/c\/([a-f0-9-]+)/.exec(a);
          return null !== (t = null == s ? void 0 : s[1]) && void 0 !== t
            ? t
            : ep;
        }
      }
      function ex(e) {
        var t = e.urlThreadId,
          a = e.clientThreadId,
          s = e.isUserInCanPayGroup,
          n = e.serviceStatus,
          p = e.serviceAnnouncement,
          m = (0, o._)(
            (0, u.useState)(function () {
              return void 0 !== t ? t : void 0 !== a ? a : (0, h.OX)();
            }),
            2
          ),
          x = m[0],
          y = m[1];
        void 0 !== t && x !== t && h.tQ.getServerThreadId(x) !== t && y(t),
          void 0 !== t || (0, h.Zz)(x) || y((0, h.OX)());
        var v = (0, f.$T)(),
          b = (0, f.WY)(),
          k = (0, f.ec)(f.F_.workspaceId),
          w = (0, c.g)(function (e) {
            return e.updateFlagValue;
          }),
          j = (0, f.hz)(),
          M = j.has(g.PL),
          C = j.has(g.rX);
        (0, u.useEffect)(
          function () {
            M && (d.Z.setPrefetchEnabled(C), d.Z.gatherData());
          },
          [M, C]
        ),
          (0, u.useEffect)(
            function () {
              void 0 !== s && w("isUserInCanPayGroup", s);
            },
            [w, s]
          ),
          (0, u.useEffect)(
            function () {
              (null == n ? void 0 : n.type) &&
                !1 === b &&
                i.m.warning(n.message, { hasCloseButton: !0, duration: 5 });
            },
            [b, null == n ? void 0 : n.message, null == n ? void 0 : n.type]
          );
        var N = (0, u.useRef)(!1);
        return (
          (0, u.useEffect)(
            function () {
              if (!v) {
                var e = b ? p.paid : p.public;
                if (
                  (null == e ? void 0 : e.type) &&
                  (null == e ? void 0 : e.message) &&
                  !N.current
                ) {
                  N.current = !0;
                  var t = e.message,
                    a = { hasCloseButton: !0, duration: 15 };
                  switch (e.type) {
                    case "danger":
                      i.m.danger(t, a);
                      break;
                    case "info":
                      i.m.info(t, a);
                      break;
                    case "warning":
                      i.m.warning(t, a);
                  }
                }
              }
            },
            [p, v, b]
          ),
          (0, r.jsxs)(l.gB.Provider, {
            value: null,
            children: [
              (0, r.jsx)(er, {}, k),
              (0, r.jsx)(ef, {}),
              (0, r.jsx)(ec.Z, { clientThreadId: x, setClientThreadId: y }),
            ],
          })
        );
      }
    },
    6780: function (e, t, a) {
      a.d(t, {
        Z: function () {
          return _;
        },
      });
      var s = a(39324),
        n = a(35250),
        o = a(13995),
        r = a(60554),
        i = a(70079),
        c = a(1454),
        l = a(32004),
        d = a(94968),
        u = a(95137),
        g = a(37469),
        h = a(46020),
        f = a(78931),
        p = a(32542),
        m = a(28735),
        x = a(10664),
        y = a(33669),
        v = a(2166),
        b = a(41932),
        k = a(61402),
        w = a(80267),
        j = a(56932),
        M = a(82816),
        C = a(52481),
        N = a(82277),
        T = a(13090),
        S = a(9664),
        B = a(2295),
        A = a(42569);
      function _(e) {
        var t,
          a = e.clientThreadId,
          s = e.setClientThreadId,
          l = e.initiallyHighlightedMessageId,
          d = e.continueConversationUrl,
          v = null !== (0, i.useContext)(p.gB);
        (0, g.ax)(a);
        var b = (0, g.XK)(a),
          _ = (0, r.useRouter)(),
          P = (0, f.hz)(),
          W = (0, g.UL)(a),
          I = (0, i.useContext)(p.QL).historyDisabled,
          q = (0, A.Xy)(W.lastModelUsed, a),
          E = (0, o.NL)();
        (0, i.useEffect)(
          function () {
            return (
              g.tQ.retainThread(a),
              function () {
                setTimeout(function () {
                  E.invalidateQueries(["conversation", a]);
                }, 0),
                  g.tQ.releaseThread(a);
              }
            );
          },
          [a, E]
        ),
          (0, i.useEffect)(
            function () {
              h.vm.closeSharingModal();
            },
            [a, b]
          );
        var R = (0, i.useCallback)(
          function () {
            s((0, g.OX)()),
              _.replace(
                q.tags.includes(A.S.GPT_4) ? "/" : "/?model=".concat(q.id),
                void 0,
                { shallow: !0 }
              );
          },
          [s, q.tags, q.id, _]
        );
        (0, x.yx)({ resetThreadAction: R, clientThreadId: a });
        var D = (0, h.tN)(function (e) {
            return e.activeSidebar;
          }),
          O = (0, y.w$)();
        (0, i.useEffect)(
          function () {
            return function () {
              k.hx.abortAllRequests();
            };
          },
          [a]
        ),
          (t = (0, f.hz)().has("debug")),
          (0, i.useEffect)(
            function () {
              if (t)
                return (0, m.eR)(document, {
                  keydown: function (e) {
                    (e.target instanceof HTMLElement &&
                      ["input", "textarea", "select", "button"].includes(
                        e.target.tagName.toLowerCase()
                      )) ||
                      "\\" !== e.key ||
                      h.vm.toggleActiveSidebar("debug");
                  },
                });
            },
            [t]
          );
        var K = (0, B.iF)(),
          L = (0, i.useCallback)(
            function () {
              u.ZP.deleteConversations().then(function () {
                K();
              }),
                R(),
                "/" !== _.asPath &&
                  _.replace({ pathname: "/" }, void 0, { shallow: !0 });
            },
            [R, K, _]
          ),
          U = (0, i.useRef)(W.threadId);
        return (
          (0, i.useEffect)(
            function () {
              W.threadId !== U.current &&
                (h.vm.setActiveSidebar(!1), (U.current = W.threadId)),
                k.hx.clear();
            },
            [W.threadId]
          ),
          (0, n.jsxs)(N.Z, {
            showNavigation: !v,
            renderTitle: (0, n.jsx)(Z, { clientThreadId: a }),
            renderMobileHeaderRightContent: (0, n.jsx)(T.js, {
              onClick: R,
              children: I
                ? (0, n.jsx)(c.Bw1, { className: "icon-lg" })
                : (0, n.jsx)(c.OvN, { className: "icon-lg" }),
            }),
            renderSidebar: (0, n.jsx)(j.Z, {
              onDeleteHistory: L,
              onNewThread: R,
              children: (0, n.jsx)(w.Z, {
                activeId: I ? void 0 : b,
                onNewThread: R,
              }),
            }),
            children: [
              (0, n.jsx)(
                S.Z,
                {
                  initialThreadData: W,
                  clientThreadId: a,
                  initiallyHighlightedMessageId: l,
                  continueConversationUrl: d,
                },
                a
              ),
              (0, n.jsxs)(N.Z.Sidebars, {
                children: [
                  P.has("debug") &&
                    "debug" === D &&
                    (0, n.jsx)(C.fv, {
                      clientThreadId: a,
                      slideOver: !O,
                      onClose: function () {
                        return h.vm.toggleActiveSidebar("debug");
                      },
                      isOpen: !0,
                    }),
                  P.has("tools3_dev") && (0, n.jsx)(M.ZP, { slideOver: !O }),
                ],
              }),
            ],
          })
        );
      }
      function Z(e) {
        var t,
          a = e.clientThreadId,
          o = null !== (t = g.tQ.getTitle(a)) && void 0 !== t ? t : "New chat",
          r = (0, v.Z)(a, o, !0),
          d = r.resolvedTitle,
          u = r.isTypingEffect,
          h = (0, i.useContext)(p.QL),
          f = h.historyDisabled,
          m = h.toggleHistoryDisabled;
        return (0, n.jsx)(n.Fragment, {
          children: f
            ? (0, n.jsxs)("button", {
                className:
                  "flex cursor-pointer flex-row place-items-center items-center justify-center gap-3",
                onClick: function () {
                  return m();
                },
                children: [
                  (0, n.jsx)(c.$IY, { className: "icon-sm" }),
                  (0, n.jsx)(l.Z, (0, s._)({}, P.enableChatHistory)),
                ],
              })
            : u && null != d
            ? (0, n.jsx)(b.Z, { text: d })
            : null != d
            ? d
            : (0, n.jsx)(l.Z, (0, s._)({}, P.newChat)),
        });
      }
      var P = (0, d.vU)({
        enableChatHistory: {
          id: "navigation.enableChatHistory",
          defaultMessage: "Enable chat history",
          description: "Enable chat history button label",
        },
        newChat: {
          id: "navigation.newChat",
          defaultMessage: "New chat",
          description: "New chat header title",
        },
      });
    },
    10664: function (e, t, a) {
      a.d(t, {
        A3: function () {
          return A;
        },
        yx: function () {
          return I;
        },
        JS: function () {
          return W;
        },
      });
      var s,
        n,
        o,
        r = a(96237),
        i = a(39324),
        c = a(81949),
        l = a(15858),
        d = a(11084),
        u = a(82534),
        g = a(50795),
        h = a(82081),
        f = a(61888),
        p = a(70079),
        m = a(94968),
        x = a(95954),
        y = a(33976),
        v = a(88798),
        b = a(32877),
        k = a(37469),
        w = a(46020),
        j = a(78931),
        M = a(52787),
        C = a(45248),
        N = p.useLayoutEffect,
        T = RegExp("```.*?\\n([\\s\\S]+?)\\n?```[^`]*$", "gms");
      ((s = n || (n = {})).Core = "Core"),
        (s.Chat = "Chat"),
        (s.Settings = "Settings");
      var S = (0, i._)({ Mod: "mod", Comma: "," }, l.s),
        B =
          ((o = {}),
          (0, r._)(
            o,
            S.Mod,
            /Mac|iPod|iPhone|iPad/.test(window.navigator.platform)
              ? "⌘"
              : "Ctrl"
          ),
          (0, r._)(o, S.Comma, ","),
          (0, r._)(o, S.Enter, "⏎"),
          (0, r._)(o, S.Escape, "Esc"),
          (0, r._)(o, S.ArrowUp, "↑"),
          (0, r._)(o, S.ArrowDown, "↓"),
          (0, r._)(o, S.ArrowLeft, "←"),
          (0, r._)(o, S.ArrowRight, "→"),
          (0, r._)(o, S.Backspace, "⌫"),
          (0, r._)(o, S.Delete, "⌦"),
          (0, r._)(o, S.Tab, "⇥"),
          (0, r._)(o, S.Control, "Ctrl"),
          (0, r._)(o, S.Shift, "Shift"),
          o),
        A = function (e) {
          var t;
          return e.map(function (e) {
            return null !== (t = B[e]) && void 0 !== t ? t : e;
          });
        },
        _ = (0, m.vU)({
          newChat: {
            id: "keyboardActions.newChat",
            defaultMessage: "Open new chat",
            description: "Keyboard shortcut to open a new chat",
          },
          focusPromptTextarea: {
            id: "keyboardActions.focusPromptTextarea",
            defaultMessage: "Focus chat input",
            description: "Keyboard shortcut to focus the chat input",
          },
          copyLastCodeBlock: {
            id: "keyboardActions.copyLastCodeBlock",
            defaultMessage: "Copy last code block",
            description:
              "Keyboard shortcut to copy the last code block in the chat",
          },
          copyLastResponse: {
            id: "keyboardActions.copyLastResponse",
            defaultMessage: "Copy last response",
            description:
              "Keyboard shortcut to copy the last response in the chat",
          },
          toggleCustomInstructions: {
            id: "keyboardActions.toggleCustomInstructions",
            defaultMessage: "Set custom instructions",
            description: "Keyboard shortcut to toggle custom instructions",
          },
          navigationToggle: {
            id: "keyboardActions.navigationToggle",
            defaultMessage: "Toggle sidebar",
            description: "Keyboard shortcut to toggle navigation",
          },
          deleteChat: {
            id: "keyboardActions.deleteChat",
            defaultMessage: "Delete chat",
            description: "Keyboard shortcut to delete chat",
          },
          toggleKeyboardActions: {
            id: "keyboardActions.toggleKeyboardActions",
            defaultMessage: "Show shortcuts",
            description: "Keyboard shortcut to toggle keyboard actions",
          },
        }),
        Z = function (e) {
          var t = e.resetThreadAction,
            a = e.clientThreadId,
            s = e.features;
          return [
            {
              key: "newChat",
              action: t || f.noop,
              actionMessageDescriptor: _.newChat,
              group: n.Core,
              keyboardBinding: [S.Mod, S.Shift, "o"],
              altKeyboardBindings: [[S.Mod, "k"]],
            },
            {
              key: "focusPromptTextarea",
              action: y.go,
              actionMessageDescriptor: _.focusPromptTextarea,
              group: n.Chat,
              keyboardBinding: [S.Shift, S.Escape],
            },
            {
              key: "copyLastCodeBlock",
              action: function () {
                if (null != a)
                  for (
                    var e = k.tQ.getThreadCurrentLeafId(a),
                      t = k.tQ.getThreadConversationTurns(a, e),
                      s = t.length - 1;
                    s >= 0;
                    s--
                  ) {
                    var n = t[s].messages.reduce(function (e, t) {
                        return null == t.err &&
                          t.message.author.role === x.uU.Assistant &&
                          "all" === t.message.recipient
                          ? e + (e ? "\n\n" : "") + (0, M.RR)(t.message)
                          : e;
                      }, ""),
                      o = (0, c._)(n.matchAll(T)),
                      r = o.length ? o[o.length - 1][1] : null;
                    if (null != r) {
                      (0, d.S)(r).then(function () {
                        v.m.success("Copied code block to clipboard");
                      });
                      break;
                    }
                  }
              },
              actionMessageDescriptor: _.copyLastCodeBlock,
              group: n.Chat,
              keyboardBinding: [S.Mod, S.Shift, ";"],
              altKeyboardBindings: [[S.Mod, S.Shift, ":"]],
            },
            {
              key: "copyLastResponse",
              action: function () {
                null != a &&
                  k.tQ
                    .copyLastMessageToClipboard(a, "keyboard")
                    .then(function () {
                      v.m.success("Last response copied to clipboard");
                    });
              },
              actionMessageDescriptor: _.copyLastResponse,
              group: n.Chat,
              keyboardBinding: [S.Mod, S.Shift, "c"],
            },
            {
              key: "toggleCustomInstructions",
              action: function () {
                return w.vm.toggleModal(w.B.UserContext);
              },
              actionMessageDescriptor: _.toggleCustomInstructions,
              group: n.Settings,
              keyboardBinding: [S.Mod, S.Shift, "i"],
              enabled: s.has(b.Rw) || s.has(b.uo),
            },
            {
              key: "navigationToggle",
              action: function () {
                return w.vm.toggleDesktopNavCollapsed();
              },
              actionMessageDescriptor: _.navigationToggle,
              group: n.Core,
              keyboardBinding: [S.Mod, S.Shift, "s"],
            },
            {
              key: "deleteChat",
              action: function () {
                return w.vm.toggleModal(w.B.DeleteChatConfirmation);
              },
              actionMessageDescriptor: _.deleteChat,
              group: n.Chat,
              keyboardBinding: [S.Mod, S.Shift, S.Backspace],
              altKeyboardBindings: [[S.Mod, S.Shift, S.Delete]],
            },
            {
              key: "toggleKeyboardActions",
              action: function () {
                return w.vm.toggleModal(w.B.KeyboardActions);
              },
              actionMessageDescriptor: _.toggleKeyboardActions,
              group: n.Settings,
              keyboardBinding: [S.Mod, "/"],
            },
          ];
        },
        P = function (e) {
          var t,
            a,
            s,
            n = (0, j.hz)().has(b.rk);
          return (
            (t = function (e) {
              g.o.logEvent(h.a.keyboardShortcut, { keyboardActionKey: e.key }),
                u.U.addAction("chatgpt_keyboard_shortcut", {
                  keyboardActionKey: e.key,
                });
            }),
            (a = { enabled: n }),
            (s = e.map(function (e) {
              var t = e.keyboardBinding.join("+");
              if (e.altKeyboardBindings) {
                t = [t];
                var a = e.altKeyboardBindings.map(function (e) {
                  return e.join("+");
                });
                t = t.concat(a);
              }
              return (0, C.ZP)(t, { byKey: !0 });
            })),
            void N(
              function () {
                if ((null == a ? void 0 : a.enabled) !== !1) {
                  var n = function (a) {
                      if (!a.repeat)
                        for (var n = 0; n < s.length; n++)
                          s[n](a) &&
                            (void 0 === e[n].enabled || e[n].enabled) &&
                            (a.preventDefault(), t(e[n]), e[n].action());
                    },
                    o = function (e) {
                      void 0 !== e.key && n(e);
                    },
                    r = document;
                  return (
                    r.addEventListener("keydown", o),
                    function () {
                      r.removeEventListener("keydown", o);
                    }
                  );
                }
              },
              [e, a]
            )
          );
        },
        W = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t = e.resetThreadAction,
            a = e.clientThreadId,
            s = (0, j.hz)();
          return (0, p.useMemo)(
            function () {
              return Z({
                features: s,
                resetThreadAction: t,
                clientThreadId: a,
              }).filter(function (e) {
                var t = e.enabled;
                return void 0 === t || t;
              });
            },
            [a, s, t]
          );
        },
        I = function (e) {
          P(
            W({
              resetThreadAction: e.resetThreadAction,
              clientThreadId: e.clientThreadId,
            })
          );
        };
    },
  },
]);
