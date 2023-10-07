"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1703],
  {
    1703: function (e, t, s) {
      let n;
      s.d(t, {
        ZP: function () {
          return su;
        },
      });
      var i = {};
      s.r(i),
        s.d(i, {
          BOM: function () {
            return tY;
          },
          DOCUMENT: function () {
            return tW;
          },
          FLOW_END: function () {
            return tG;
          },
          SCALAR: function () {
            return tQ;
          },
          createScalarToken: function () {
            return tM;
          },
          isCollection: function () {
            return tH;
          },
          isScalar: function () {
            return tX;
          },
          prettyToken: function () {
            return tz;
          },
          resolveAsScalar: function () {
            return tB;
          },
          setScalarValue: function () {
            return tj;
          },
          stringify: function () {
            return tP;
          },
          tokenType: function () {
            return tZ;
          },
          visit: function () {
            return tJ;
          },
        });
      var r = {};
      s.r(r),
        s.d(r, {
          Alias: function () {
            return U;
          },
          CST: function () {
            return i;
          },
          Composer: function () {
            return t_;
          },
          Document: function () {
            return ta;
          },
          Lexer: function () {
            return t6;
          },
          LineCounter: function () {
            return t3;
          },
          Pair: function () {
            return eg;
          },
          Parser: function () {
            return si;
          },
          Scalar: function () {
            return F;
          },
          Schema: function () {
            return tl;
          },
          YAMLError: function () {
            return tu;
          },
          YAMLMap: function () {
            return eE;
          },
          YAMLParseError: function () {
            return tf;
          },
          YAMLSeq: function () {
            return eO;
          },
          YAMLWarning: function () {
            return th;
          },
          isAlias: function () {
            return d;
          },
          isCollection: function () {
            return k;
          },
          isDocument: function () {
            return p;
          },
          isMap: function () {
            return m;
          },
          isNode: function () {
            return w;
          },
          isPair: function () {
            return y;
          },
          isScalar: function () {
            return g;
          },
          isSeq: function () {
            return b;
          },
          parse: function () {
            return sa;
          },
          parseAllDocuments: function () {
            return so;
          },
          parseDocument: function () {
            return sl;
          },
          stringify: function () {
            return sc;
          },
          visit: function () {
            return O;
          },
          visitAsync: function () {
            return T;
          },
        });
      let o = Symbol.for("yaml.alias"),
        l = Symbol.for("yaml.document"),
        a = Symbol.for("yaml.map"),
        c = Symbol.for("yaml.pair"),
        u = Symbol.for("yaml.scalar"),
        f = Symbol.for("yaml.seq"),
        h = Symbol.for("yaml.node.type"),
        d = (e) => !!e && "object" == typeof e && e[h] === o,
        p = (e) => !!e && "object" == typeof e && e[h] === l,
        m = (e) => !!e && "object" == typeof e && e[h] === a,
        y = (e) => !!e && "object" == typeof e && e[h] === c,
        g = (e) => !!e && "object" == typeof e && e[h] === u,
        b = (e) => !!e && "object" == typeof e && e[h] === f;
      function k(e) {
        if (e && "object" == typeof e)
          switch (e[h]) {
            case a:
            case f:
              return !0;
          }
        return !1;
      }
      function w(e) {
        if (e && "object" == typeof e)
          switch (e[h]) {
            case o:
            case a:
            case u:
            case f:
              return !0;
          }
        return !1;
      }
      let v = (e) => (g(e) || k(e)) && !!e.anchor,
        S = Symbol("break visit"),
        E = Symbol("skip children"),
        N = Symbol("remove node");
      function O(e, t) {
        let s = L(t);
        if (p(e)) {
          let t = A(null, e.contents, s, Object.freeze([e]));
          t === N && (e.contents = null);
        } else A(null, e, s, Object.freeze([]));
      }
      function A(e, t, s, n) {
        let i = x(e, t, s, n);
        if (w(i) || y(i)) return $(e, n, i), A(e, i, s, n);
        if ("symbol" != typeof i) {
          if (k(t)) {
            n = Object.freeze(n.concat(t));
            for (let e = 0; e < t.items.length; ++e) {
              let i = A(e, t.items[e], s, n);
              if ("number" == typeof i) e = i - 1;
              else {
                if (i === S) return S;
                i === N && (t.items.splice(e, 1), (e -= 1));
              }
            }
          } else if (y(t)) {
            n = Object.freeze(n.concat(t));
            let e = A("key", t.key, s, n);
            if (e === S) return S;
            e === N && (t.key = null);
            let i = A("value", t.value, s, n);
            if (i === S) return S;
            i === N && (t.value = null);
          }
        }
        return i;
      }
      async function T(e, t) {
        let s = L(t);
        if (p(e)) {
          let t = await I(null, e.contents, s, Object.freeze([e]));
          t === N && (e.contents = null);
        } else await I(null, e, s, Object.freeze([]));
      }
      async function I(e, t, s, n) {
        let i = await x(e, t, s, n);
        if (w(i) || y(i)) return $(e, n, i), I(e, i, s, n);
        if ("symbol" != typeof i) {
          if (k(t)) {
            n = Object.freeze(n.concat(t));
            for (let e = 0; e < t.items.length; ++e) {
              let i = await I(e, t.items[e], s, n);
              if ("number" == typeof i) e = i - 1;
              else {
                if (i === S) return S;
                i === N && (t.items.splice(e, 1), (e -= 1));
              }
            }
          } else if (y(t)) {
            n = Object.freeze(n.concat(t));
            let e = await I("key", t.key, s, n);
            if (e === S) return S;
            e === N && (t.key = null);
            let i = await I("value", t.value, s, n);
            if (i === S) return S;
            i === N && (t.value = null);
          }
        }
        return i;
      }
      function L(e) {
        return "object" == typeof e && (e.Collection || e.Node || e.Value)
          ? Object.assign(
              { Alias: e.Node, Map: e.Node, Scalar: e.Node, Seq: e.Node },
              e.Value && { Map: e.Value, Scalar: e.Value, Seq: e.Value },
              e.Collection && { Map: e.Collection, Seq: e.Collection },
              e
            )
          : e;
      }
      function x(e, t, s, n) {
        return "function" == typeof s
          ? s(e, t, n)
          : m(t)
          ? s.Map?.(e, t, n)
          : b(t)
          ? s.Seq?.(e, t, n)
          : y(t)
          ? s.Pair?.(e, t, n)
          : g(t)
          ? s.Scalar?.(e, t, n)
          : d(t)
          ? s.Alias?.(e, t, n)
          : void 0;
      }
      function $(e, t, s) {
        let n = t[t.length - 1];
        if (k(n)) n.items[e] = s;
        else if (y(n)) "key" === e ? (n.key = s) : (n.value = s);
        else if (p(n)) n.contents = s;
        else {
          let e = d(n) ? "alias" : "scalar";
          throw Error(`Cannot replace node with ${e} parent`);
        }
      }
      (O.BREAK = S),
        (O.SKIP = E),
        (O.REMOVE = N),
        (T.BREAK = S),
        (T.SKIP = E),
        (T.REMOVE = N);
      let C = {
          "!": "%21",
          ",": "%2C",
          "[": "%5B",
          "]": "%5D",
          "{": "%7B",
          "}": "%7D",
        },
        _ = (e) => e.replace(/[!,[\]{}]/g, (e) => C[e]);
      class B {
        constructor(e, t) {
          (this.docStart = null),
            (this.docEnd = !1),
            (this.yaml = Object.assign({}, B.defaultYaml, e)),
            (this.tags = Object.assign({}, B.defaultTags, t));
        }
        clone() {
          let e = new B(this.yaml, this.tags);
          return (e.docStart = this.docStart), e;
        }
        atDocument() {
          let e = new B(this.yaml, this.tags);
          switch (this.yaml.version) {
            case "1.1":
              this.atNextDocument = !0;
              break;
            case "1.2":
              (this.atNextDocument = !1),
                (this.yaml = {
                  explicit: B.defaultYaml.explicit,
                  version: "1.2",
                }),
                (this.tags = Object.assign({}, B.defaultTags));
          }
          return e;
        }
        add(e, t) {
          this.atNextDocument &&
            ((this.yaml = { explicit: B.defaultYaml.explicit, version: "1.1" }),
            (this.tags = Object.assign({}, B.defaultTags)),
            (this.atNextDocument = !1));
          let s = e.trim().split(/[ \t]+/),
            n = s.shift();
          switch (n) {
            case "%TAG": {
              if (
                2 !== s.length &&
                (t(0, "%TAG directive should contain exactly two parts"),
                s.length < 2)
              )
                return !1;
              let [e, n] = s;
              return (this.tags[e] = n), !0;
            }
            case "%YAML": {
              if (((this.yaml.explicit = !0), 1 !== s.length))
                return (
                  t(0, "%YAML directive should contain exactly one part"), !1
                );
              let [e] = s;
              if ("1.1" === e || "1.2" === e)
                return (this.yaml.version = e), !0;
              {
                let s = /^\d+\.\d+$/.test(e);
                return t(6, `Unsupported YAML version ${e}`, s), !1;
              }
            }
            default:
              return t(0, `Unknown directive ${n}`, !0), !1;
          }
        }
        tagName(e, t) {
          if ("!" === e) return "!";
          if ("!" !== e[0]) return t(`Not a valid tag: ${e}`), null;
          if ("<" === e[1]) {
            let s = e.slice(2, -1);
            return "!" === s || "!!" === s
              ? (t(`Verbatim tags aren't resolved, so ${e} is invalid.`), null)
              : (">" !== e[e.length - 1] &&
                  t("Verbatim tags must end with a >"),
                s);
          }
          let [, s, n] = e.match(/^(.*!)([^!]*)$/);
          n || t(`The ${e} tag has no suffix`);
          let i = this.tags[s];
          return i
            ? i + decodeURIComponent(n)
            : "!" === s
            ? e
            : (t(`Could not resolve tag: ${e}`), null);
        }
        tagString(e) {
          for (let [t, s] of Object.entries(this.tags))
            if (e.startsWith(s)) return t + _(e.substring(s.length));
          return "!" === e[0] ? e : `!<${e}>`;
        }
        toString(e) {
          let t;
          let s = this.yaml.explicit
              ? [`%YAML ${this.yaml.version || "1.2"}`]
              : [],
            n = Object.entries(this.tags);
          if (e && n.length > 0 && w(e.contents)) {
            let s = {};
            O(e.contents, (e, t) => {
              w(t) && t.tag && (s[t.tag] = !0);
            }),
              (t = Object.keys(s));
          } else t = [];
          for (let [i, r] of n)
            ("!!" !== i || "tag:yaml.org,2002:" !== r) &&
              (!e || t.some((e) => e.startsWith(r))) &&
              s.push(`%TAG ${i} ${r}`);
          return s.join("\n");
        }
      }
      function M(e) {
        if (/[\x00-\x19\s,[\]{}]/.test(e)) {
          let t = JSON.stringify(e),
            s = `Anchor must not contain whitespace or control characters: ${t}`;
          throw Error(s);
        }
        return !0;
      }
      function j(e) {
        let t = new Set();
        return (
          O(e, {
            Value(e, s) {
              s.anchor && t.add(s.anchor);
            },
          }),
          t
        );
      }
      function D(e, t) {
        for (let s = 1; ; ++s) {
          let n = `${e}${s}`;
          if (!t.has(n)) return n;
        }
      }
      function q(e, t, s, n) {
        if (n && "object" == typeof n) {
          if (Array.isArray(n))
            for (let t = 0, s = n.length; t < s; ++t) {
              let s = n[t],
                i = q(e, n, String(t), s);
              void 0 === i ? delete n[t] : i !== s && (n[t] = i);
            }
          else if (n instanceof Map)
            for (let t of Array.from(n.keys())) {
              let s = n.get(t),
                i = q(e, n, t, s);
              void 0 === i ? n.delete(t) : i !== s && n.set(t, i);
            }
          else if (n instanceof Set)
            for (let t of Array.from(n)) {
              let s = q(e, n, t, t);
              void 0 === s ? n.delete(t) : s !== t && (n.delete(t), n.add(s));
            }
          else
            for (let [t, s] of Object.entries(n)) {
              let i = q(e, n, t, s);
              void 0 === i ? delete n[t] : i !== s && (n[t] = i);
            }
        }
        return e.call(t, s, n);
      }
      function P(e, t, s) {
        if (Array.isArray(e)) return e.map((e, t) => P(e, String(t), s));
        if (e && "function" == typeof e.toJSON) {
          if (!s || !v(e)) return e.toJSON(t, s);
          let n = { aliasCount: 0, count: 1, res: void 0 };
          s.anchors.set(e, n),
            (s.onCreate = (e) => {
              (n.res = e), delete s.onCreate;
            });
          let i = e.toJSON(t, s);
          return s.onCreate && s.onCreate(i), i;
        }
        return "bigint" != typeof e || s?.keep ? e : Number(e);
      }
      (B.defaultYaml = { explicit: !1, version: "1.2" }),
        (B.defaultTags = { "!!": "tag:yaml.org,2002:" });
      class K {
        constructor(e) {
          Object.defineProperty(this, h, { value: e });
        }
        clone() {
          let e = Object.create(
            Object.getPrototypeOf(this),
            Object.getOwnPropertyDescriptors(this)
          );
          return this.range && (e.range = this.range.slice()), e;
        }
        toJS(
          e,
          { mapAsMap: t, maxAliasCount: s, onAnchor: n, reviver: i } = {}
        ) {
          if (!p(e)) throw TypeError("A document argument is required");
          let r = {
              anchors: new Map(),
              doc: e,
              keep: !0,
              mapAsMap: !0 === t,
              mapKeyWarned: !1,
              maxAliasCount: "number" == typeof s ? s : 100,
            },
            o = P(this, "", r);
          if ("function" == typeof n)
            for (let { count: e, res: t } of r.anchors.values()) n(t, e);
          return "function" == typeof i ? q(i, { "": o }, "", o) : o;
        }
      }
      class U extends K {
        constructor(e) {
          super(o),
            (this.source = e),
            Object.defineProperty(this, "tag", {
              set() {
                throw Error("Alias nodes cannot have tags");
              },
            });
        }
        resolve(e) {
          let t;
          return (
            O(e, {
              Node: (e, s) => {
                if (s === this) return O.BREAK;
                s.anchor === this.source && (t = s);
              },
            }),
            t
          );
        }
        toJSON(e, t) {
          if (!t) return { source: this.source };
          let { anchors: s, doc: n, maxAliasCount: i } = t,
            r = this.resolve(n);
          if (!r) {
            let e = `Unresolved alias (the anchor must be set before the alias): ${this.source}`;
            throw ReferenceError(e);
          }
          let o = s.get(r);
          if ((o || (P(r, null, t), (o = s.get(r))), !o || void 0 === o.res))
            throw ReferenceError(
              "This should not happen: Alias anchor was not resolved?"
            );
          if (
            i >= 0 &&
            ((o.count += 1),
            0 === o.aliasCount &&
              (o.aliasCount = (function e(t, s, n) {
                if (d(s)) {
                  let e = s.resolve(t),
                    i = n && e && n.get(e);
                  return i ? i.count * i.aliasCount : 0;
                }
                if (k(s)) {
                  let i = 0;
                  for (let r of s.items) {
                    let s = e(t, r, n);
                    s > i && (i = s);
                  }
                  return i;
                }
                if (y(s)) {
                  let i = e(t, s.key, n),
                    r = e(t, s.value, n);
                  return Math.max(i, r);
                }
                return 1;
              })(n, r, s)),
            o.count * o.aliasCount > i)
          )
            throw ReferenceError(
              "Excessive alias count indicates a resource exhaustion attack"
            );
          return o.res;
        }
        toString(e, t, s) {
          let n = `*${this.source}`;
          if (e) {
            if (
              (M(this.source),
              e.options.verifyAliasOrder && !e.anchors.has(this.source))
            ) {
              let e = `Unresolved alias (the anchor must be set before the alias): ${this.source}`;
              throw Error(e);
            }
            if (e.implicitKey) return `${n} `;
          }
          return n;
        }
      }
      let R = (e) => !e || ("function" != typeof e && "object" != typeof e);
      class F extends K {
        constructor(e) {
          super(u), (this.value = e);
        }
        toJSON(e, t) {
          return t?.keep ? this.value : P(this.value, e, t);
        }
        toString() {
          return String(this.value);
        }
      }
      function V(e, t, s) {
        let n;
        if ((p(e) && (e = e.contents), w(e))) return e;
        if (y(e)) {
          let t = s.schema[a].createNode?.(s.schema, null, s);
          return t.items.push(e), t;
        }
        (e instanceof String ||
          e instanceof Number ||
          e instanceof Boolean ||
          ("undefined" != typeof BigInt && e instanceof BigInt)) &&
          (e = e.valueOf());
        let {
          aliasDuplicateObjects: i,
          onAnchor: r,
          onTagObj: o,
          schema: l,
          sourceObjects: c,
        } = s;
        if (i && e && "object" == typeof e) {
          if ((n = c.get(e)))
            return n.anchor || (n.anchor = r(e)), new U(n.anchor);
          (n = { anchor: null, node: null }), c.set(e, n);
        }
        t?.startsWith("!!") && (t = "tag:yaml.org,2002:" + t.slice(2));
        let u = (function (e, t, s) {
          if (t) {
            let e = s.filter((e) => e.tag === t),
              n = e.find((e) => !e.format) ?? e[0];
            if (!n) throw Error(`Tag ${t} not found`);
            return n;
          }
          return s.find((t) => t.identify?.(e) && !t.format);
        })(e, t, l.tags);
        if (!u) {
          if (
            (e && "function" == typeof e.toJSON && (e = e.toJSON()),
            !e || "object" != typeof e)
          ) {
            let t = new F(e);
            return n && (n.node = t), t;
          }
          u =
            e instanceof Map
              ? l[a]
              : Symbol.iterator in Object(e)
              ? l[f]
              : l[a];
        }
        o && (o(u), delete s.onTagObj);
        let h = u?.createNode
          ? u.createNode(s.schema, e, s)
          : "function" == typeof u?.nodeClass?.from
          ? u.nodeClass.from(s.schema, e, s)
          : new F(e);
        return (
          t ? (h.tag = t) : u.default || (h.tag = u.tag), n && (n.node = h), h
        );
      }
      function J(e, t, s) {
        let n = s;
        for (let e = t.length - 1; e >= 0; --e) {
          let s = t[e];
          if ("number" == typeof s && Number.isInteger(s) && s >= 0) {
            let e = [];
            (e[s] = n), (n = e);
          } else n = new Map([[s, n]]);
        }
        return V(n, void 0, {
          aliasDuplicateObjects: !1,
          keepUndefined: !1,
          onAnchor: () => {
            throw Error("This should not happen, please report a bug.");
          },
          schema: e,
          sourceObjects: new Map(),
        });
      }
      (F.BLOCK_FOLDED = "BLOCK_FOLDED"),
        (F.BLOCK_LITERAL = "BLOCK_LITERAL"),
        (F.PLAIN = "PLAIN"),
        (F.QUOTE_DOUBLE = "QUOTE_DOUBLE"),
        (F.QUOTE_SINGLE = "QUOTE_SINGLE");
      let Y = (e) =>
        null == e ||
        ("object" == typeof e && !!e[Symbol.iterator]().next().done);
      class W extends K {
        constructor(e, t) {
          super(e),
            Object.defineProperty(this, "schema", {
              value: t,
              configurable: !0,
              enumerable: !1,
              writable: !0,
            });
        }
        clone(e) {
          let t = Object.create(
            Object.getPrototypeOf(this),
            Object.getOwnPropertyDescriptors(this)
          );
          return (
            e && (t.schema = e),
            (t.items = t.items.map((t) => (w(t) || y(t) ? t.clone(e) : t))),
            this.range && (t.range = this.range.slice()),
            t
          );
        }
        addIn(e, t) {
          if (Y(e)) this.add(t);
          else {
            let [s, ...n] = e,
              i = this.get(s, !0);
            if (k(i)) i.addIn(n, t);
            else if (void 0 === i && this.schema)
              this.set(s, J(this.schema, n, t));
            else
              throw Error(
                `Expected YAML collection at ${s}. Remaining path: ${n}`
              );
          }
        }
        deleteIn(e) {
          let [t, ...s] = e;
          if (0 === s.length) return this.delete(t);
          let n = this.get(t, !0);
          if (k(n)) return n.deleteIn(s);
          throw Error(`Expected YAML collection at ${t}. Remaining path: ${s}`);
        }
        getIn(e, t) {
          let [s, ...n] = e,
            i = this.get(s, !0);
          return 0 === n.length
            ? !t && g(i)
              ? i.value
              : i
            : k(i)
            ? i.getIn(n, t)
            : void 0;
        }
        hasAllNullValues(e) {
          return this.items.every((t) => {
            if (!y(t)) return !1;
            let s = t.value;
            return (
              null == s ||
              (e &&
                g(s) &&
                null == s.value &&
                !s.commentBefore &&
                !s.comment &&
                !s.tag)
            );
          });
        }
        hasIn(e) {
          let [t, ...s] = e;
          if (0 === s.length) return this.has(t);
          let n = this.get(t, !0);
          return !!k(n) && n.hasIn(s);
        }
        setIn(e, t) {
          let [s, ...n] = e;
          if (0 === n.length) this.set(s, t);
          else {
            let e = this.get(s, !0);
            if (k(e)) e.setIn(n, t);
            else if (void 0 === e && this.schema)
              this.set(s, J(this.schema, n, t));
            else
              throw Error(
                `Expected YAML collection at ${s}. Remaining path: ${n}`
              );
          }
        }
      }
      W.maxFlowStringSingleLineLength = 60;
      let G = (e) => e.replace(/^(?!$)(?: $)?/gm, "#");
      function Q(e, t) {
        return /^\n+$/.test(e)
          ? e.substring(1)
          : t
          ? e.replace(/^(?! *$)/gm, t)
          : e;
      }
      let H = (e, t, s) =>
          e.endsWith("\n")
            ? Q(s, t)
            : s.includes("\n")
            ? "\n" + Q(s, t)
            : (e.endsWith(" ") ? "" : " ") + s,
        X = "flow",
        z = "block",
        Z = "quoted";
      function ee(
        e,
        t,
        s = "flow",
        {
          indentAtStart: n,
          lineWidth: i = 80,
          minContentWidth: r = 20,
          onFold: o,
          onOverflow: l,
        } = {}
      ) {
        let a, c, u;
        if (!i || i < 0) return e;
        let f = Math.max(1 + r, 1 + i - t.length);
        if (e.length <= f) return e;
        let h = [],
          d = {},
          p = i - t.length;
        "number" == typeof n &&
          (n > i - Math.max(2, r) ? h.push(0) : (p = i - n));
        let m = !1,
          y = -1,
          g = -1,
          b = -1;
        for (
          s === z && -1 !== (y = et(e, y)) && (p = y + f);
          (u = e[(y += 1)]);

        ) {
          if (s === Z && "\\" === u) {
            switch (((g = y), e[y + 1])) {
              case "x":
                y += 3;
                break;
              case "u":
                y += 5;
                break;
              case "U":
                y += 9;
                break;
              default:
                y += 1;
            }
            b = y;
          }
          if ("\n" === u) s === z && (y = et(e, y)), (p = y + f), (a = void 0);
          else {
            if (" " === u && c && " " !== c && "\n" !== c && "	" !== c) {
              let t = e[y + 1];
              t && " " !== t && "\n" !== t && "	" !== t && (a = y);
            }
            if (y >= p) {
              if (a) h.push(a), (p = a + f), (a = void 0);
              else if (s === Z) {
                for (; " " === c || "	" === c; )
                  (c = u), (u = e[(y += 1)]), (m = !0);
                let t = y > b + 1 ? y - 2 : g - 1;
                if (d[t]) return e;
                h.push(t), (d[t] = !0), (p = t + f), (a = void 0);
              } else m = !0;
            }
          }
          c = u;
        }
        if ((m && l && l(), 0 === h.length)) return e;
        o && o();
        let k = e.slice(0, h[0]);
        for (let n = 0; n < h.length; ++n) {
          let i = h[n],
            r = h[n + 1] || e.length;
          0 === i
            ? (k = `
${t}${e.slice(0, r)}`)
            : (s === Z && d[i] && (k += `${e[i]}\\`),
              (k += `
${t}${e.slice(i + 1, r)}`));
        }
        return k;
      }
      function et(e, t) {
        let s = e[t + 1];
        for (; " " === s || "	" === s; ) {
          do s = e[(t += 1)];
          while (s && "\n" !== s);
          s = e[t + 1];
        }
        return t;
      }
      let es = (e, t) => ({
          indentAtStart: t ? e.indent.length : e.indentAtStart,
          lineWidth: e.options.lineWidth,
          minContentWidth: e.options.minContentWidth,
        }),
        en = (e) => /^(%|---|\.\.\.)/m.test(e);
      function ei(e, t) {
        let s = JSON.stringify(e);
        if (t.options.doubleQuotedAsJSON) return s;
        let { implicitKey: n } = t,
          i = t.options.doubleQuotedMinMultiLineLength,
          r = t.indent || (en(e) ? "  " : ""),
          o = "",
          l = 0;
        for (let e = 0, t = s[e]; t; t = s[++e])
          if (
            (" " === t &&
              "\\" === s[e + 1] &&
              "n" === s[e + 2] &&
              ((o += s.slice(l, e) + "\\ "), (e += 1), (l = e), (t = "\\")),
            "\\" === t)
          )
            switch (s[e + 1]) {
              case "u":
                {
                  o += s.slice(l, e);
                  let t = s.substr(e + 2, 4);
                  switch (t) {
                    case "0000":
                      o += "\\0";
                      break;
                    case "0007":
                      o += "\\a";
                      break;
                    case "000b":
                      o += "\\v";
                      break;
                    case "001b":
                      o += "\\e";
                      break;
                    case "0085":
                      o += "\\N";
                      break;
                    case "00a0":
                      o += "\\_";
                      break;
                    case "2028":
                      o += "\\L";
                      break;
                    case "2029":
                      o += "\\P";
                      break;
                    default:
                      "00" === t.substr(0, 2)
                        ? (o += "\\x" + t.substr(2))
                        : (o += s.substr(e, 6));
                  }
                  (e += 5), (l = e + 1);
                }
                break;
              case "n":
                if (n || '"' === s[e + 2] || s.length < i) e += 1;
                else {
                  for (
                    o += s.slice(l, e) + "\n\n";
                    "\\" === s[e + 2] && "n" === s[e + 3] && '"' !== s[e + 4];

                  )
                    (o += "\n"), (e += 2);
                  (o += r),
                    " " === s[e + 2] && (o += "\\"),
                    (e += 1),
                    (l = e + 1);
                }
                break;
              default:
                e += 1;
            }
        return (o = l ? o + s.slice(l) : s), n ? o : ee(o, r, Z, es(t, !1));
      }
      function er(e, t) {
        if (
          !1 === t.options.singleQuote ||
          (t.implicitKey && e.includes("\n")) ||
          /[ \t]\n|\n[ \t]/.test(e)
        )
          return ei(e, t);
        let s = t.indent || (en(e) ? "  " : ""),
          n =
            "'" +
            e.replace(/'/g, "''").replace(
              /\n+/g,
              `$&
${s}`
            ) +
            "'";
        return t.implicitKey ? n : ee(n, s, X, es(t, !1));
      }
      function eo(e, t) {
        let s;
        let { singleQuote: n } = t.options;
        if (!1 === n) s = ei;
        else {
          let t = e.includes('"'),
            i = e.includes("'");
          s = t && !i ? er : i && !t ? ei : n ? er : ei;
        }
        return s(e, t);
      }
      try {
        n = RegExp("(^|(?<!\n))\n+(?!\n|$)", "g");
      } catch {
        n = /\n+(?!\n|$)/g;
      }
      function el({ comment: e, type: t, value: s }, i, r, o) {
        let l, a, c;
        let { blockQuote: u, commentString: f, lineWidth: h } = i.options;
        if (!u || /\n[\t ]+$/.test(s) || /^\s*$/.test(s)) return eo(s, i);
        let d = i.indent || (i.forceBlockIndent || en(s) ? "  " : ""),
          p =
            "literal" === u ||
            ("folded" !== u &&
              t !== F.BLOCK_FOLDED &&
              (t === F.BLOCK_LITERAL ||
                !(function (e, t, s) {
                  if (!t || t < 0) return !1;
                  let n = t - s,
                    i = e.length;
                  if (i <= n) return !1;
                  for (let t = 0, s = 0; t < i; ++t)
                    if ("\n" === e[t]) {
                      if (t - s > n) return !0;
                      if (i - (s = t + 1) <= n) return !1;
                    }
                  return !0;
                })(s, h, d.length)));
        if (!s) return p ? "|\n" : ">\n";
        for (a = s.length; a > 0; --a) {
          let e = s[a - 1];
          if ("\n" !== e && "	" !== e && " " !== e) break;
        }
        let m = s.substring(a),
          y = m.indexOf("\n");
        -1 === y
          ? (l = "-")
          : s === m || y !== m.length - 1
          ? ((l = "+"), o && o())
          : (l = ""),
          m &&
            ((s = s.slice(0, -m.length)),
            "\n" === m[m.length - 1] && (m = m.slice(0, -1)),
            (m = m.replace(n, `$&${d}`)));
        let g = !1,
          b = -1;
        for (c = 0; c < s.length; ++c) {
          let e = s[c];
          if (" " === e) g = !0;
          else if ("\n" === e) b = c;
          else break;
        }
        let k = s.substring(0, b < c ? b + 1 : c);
        k && ((s = s.substring(k.length)), (k = k.replace(/\n+/g, `$&${d}`)));
        let w = (p ? "|" : ">") + (g ? (d ? "2" : "1") : "") + l;
        if ((e && ((w += " " + f(e.replace(/ ?[\r\n]+/g, " "))), r && r()), p))
          return `${w}
${d}${k}${(s = s.replace(/\n+/g, `$&${d}`))}${m}`;
        s = s
          .replace(/\n+/g, "\n$&")
          .replace(/(?:^|\n)([\t ].*)(?:([\n\t ]*)\n(?![\n\t ]))?/g, "$1$2")
          .replace(/\n+/g, `$&${d}`);
        let v = ee(`${k}${s}${m}`, d, z, es(i, !0));
        return `${w}
${d}${v}`;
      }
      function ea(e, t, s, n) {
        let { implicitKey: i, inFlow: r } = t,
          o =
            "string" == typeof e.value
              ? e
              : Object.assign({}, e, { value: String(e.value) }),
          { type: l } = e;
        l !== F.QUOTE_DOUBLE &&
          /[\x00-\x08\x0b-\x1f\x7f-\x9f\u{D800}-\u{DFFF}]/u.test(o.value) &&
          (l = F.QUOTE_DOUBLE);
        let a = (e) => {
            switch (e) {
              case F.BLOCK_FOLDED:
              case F.BLOCK_LITERAL:
                return i || r ? eo(o.value, t) : el(o, t, s, n);
              case F.QUOTE_DOUBLE:
                return ei(o.value, t);
              case F.QUOTE_SINGLE:
                return er(o.value, t);
              case F.PLAIN:
                return (function (e, t, s, n) {
                  let { type: i, value: r } = e,
                    {
                      actualString: o,
                      implicitKey: l,
                      indent: a,
                      indentStep: c,
                      inFlow: u,
                    } = t;
                  if ((l && r.includes("\n")) || (u && /[[\]{},]/.test(r)))
                    return eo(r, t);
                  if (
                    !r ||
                    /^[\n\t ,[\]{}#&*!|>'"%@`]|^[?-]$|^[?-][ \t]|[\n:][ \t]|[ \t]\n|[\n\t ]#|[\n\t :]$/.test(
                      r
                    )
                  )
                    return l || u || !r.includes("\n")
                      ? eo(r, t)
                      : el(e, t, s, n);
                  if (!l && !u && i !== F.PLAIN && r.includes("\n"))
                    return el(e, t, s, n);
                  if (en(r)) {
                    if ("" === a)
                      return (t.forceBlockIndent = !0), el(e, t, s, n);
                    if (l && a === c) return eo(r, t);
                  }
                  let f = r.replace(
                    /\n+/g,
                    `$&
${a}`
                  );
                  if (o) {
                    let e = (e) =>
                        e.default &&
                        "tag:yaml.org,2002:str" !== e.tag &&
                        e.test?.test(f),
                      { compat: s, tags: n } = t.doc.schema;
                    if (n.some(e) || s?.some(e)) return eo(r, t);
                  }
                  return l ? f : ee(f, a, X, es(t, !1));
                })(o, t, s, n);
              default:
                return null;
            }
          },
          c = a(l);
        if (null === c) {
          let { defaultKeyType: e, defaultStringType: s } = t.options,
            n = (i && e) || s;
          if (null === (c = a(n)))
            throw Error(`Unsupported default string type ${n}`);
        }
        return c;
      }
      function ec(e, t) {
        let s;
        let n = Object.assign(
          {
            blockQuote: !0,
            commentString: G,
            defaultKeyType: null,
            defaultStringType: "PLAIN",
            directives: null,
            doubleQuotedAsJSON: !1,
            doubleQuotedMinMultiLineLength: 40,
            falseStr: "false",
            flowCollectionPadding: !0,
            indentSeq: !0,
            lineWidth: 80,
            minContentWidth: 20,
            nullStr: "null",
            simpleKeys: !1,
            singleQuote: null,
            trueStr: "true",
            verifyAliasOrder: !0,
          },
          e.schema.toStringOptions,
          t
        );
        switch (n.collectionStyle) {
          case "block":
            s = !1;
            break;
          case "flow":
            s = !0;
            break;
          default:
            s = null;
        }
        return {
          anchors: new Set(),
          doc: e,
          flowCollectionPadding: n.flowCollectionPadding ? " " : "",
          indent: "",
          indentStep: "number" == typeof n.indent ? " ".repeat(n.indent) : "  ",
          inFlow: s,
          options: n,
        };
      }
      function eu(e, t, s, n) {
        let i;
        if (y(e)) return e.toString(t, s, n);
        if (d(e)) {
          if (t.doc.directives) return e.toString(t);
          if (t.resolvedAliases?.has(e))
            throw TypeError(
              "Cannot stringify circular structure without alias nodes"
            );
          t.resolvedAliases
            ? t.resolvedAliases.add(e)
            : (t.resolvedAliases = new Set([e])),
            (e = e.resolve(t.doc));
        }
        let r = w(e) ? e : t.doc.createNode(e, { onTagObj: (e) => (i = e) });
        i ||
          (i = (function (e, t) {
            let s, n;
            if (t.tag) {
              let s = e.filter((e) => e.tag === t.tag);
              if (s.length > 0)
                return s.find((e) => e.format === t.format) ?? s[0];
            }
            if (g(t)) {
              s = t.value;
              let i = e.filter((e) => e.identify?.(s));
              n =
                i.find((e) => e.format === t.format) ??
                i.find((e) => !e.format);
            } else
              (s = t),
                (n = e.find((e) => e.nodeClass && s instanceof e.nodeClass));
            if (!n) {
              let e = s?.constructor?.name ?? typeof s;
              throw Error(`Tag not resolved for ${e} value`);
            }
            return n;
          })(t.doc.schema.tags, r));
        let o = (function (e, t, { anchors: s, doc: n }) {
          if (!n.directives) return "";
          let i = [],
            r = (g(e) || k(e)) && e.anchor;
          r && M(r) && (s.add(r), i.push(`&${r}`));
          let o = e.tag ? e.tag : t.default ? null : t.tag;
          return o && i.push(n.directives.tagString(o)), i.join(" ");
        })(r, i, t);
        o.length > 0 &&
          (t.indentAtStart = (t.indentAtStart ?? 0) + o.length + 1);
        let l =
          "function" == typeof i.stringify
            ? i.stringify(r, t, s, n)
            : g(r)
            ? ea(r, t, s, n)
            : r.toString(t, s, n);
        return o
          ? g(r) || "{" === l[0] || "[" === l[0]
            ? `${o} ${l}`
            : `${o}
${t.indent}${l}`
          : l;
      }
      var ef = s(44675);
      function eh(e, t) {
        ("debug" === e || "warn" === e) &&
          (void 0 !== ef && ef.emitWarning
            ? ef.emitWarning(t)
            : console.warn(t));
      }
      function ed(e, t, { key: s, value: n }) {
        if (e?.doc.schema.merge && ep(s)) {
          if (b((n = d(n) ? n.resolve(e.doc) : n)))
            for (let s of n.items) em(e, t, s);
          else if (Array.isArray(n)) for (let s of n) em(e, t, s);
          else em(e, t, n);
        } else {
          let i = P(s, "", e);
          if (t instanceof Map) t.set(i, P(n, i, e));
          else if (t instanceof Set) t.add(i);
          else {
            let r = (function (e, t, s) {
                if (null === t) return "";
                if ("object" != typeof t) return String(t);
                if (w(e) && s?.doc) {
                  let t = ec(s.doc, {});
                  for (let e of ((t.anchors = new Set()), s.anchors.keys()))
                    t.anchors.add(e.anchor);
                  (t.inFlow = !0), (t.inStringifyKey = !0);
                  let n = e.toString(t);
                  if (!s.mapKeyWarned) {
                    let e = JSON.stringify(n);
                    e.length > 40 && (e = e.substring(0, 36) + '..."'),
                      eh(
                        s.doc.options.logLevel,
                        `Keys with collection values will be stringified due to JS Object restrictions: ${e}. Set mapAsMap: true to use object keys.`
                      ),
                      (s.mapKeyWarned = !0);
                  }
                  return n;
                }
                return JSON.stringify(t);
              })(s, i, e),
              o = P(n, r, e);
            r in t
              ? Object.defineProperty(t, r, {
                  value: o,
                  writable: !0,
                  enumerable: !0,
                  configurable: !0,
                })
              : (t[r] = o);
          }
        }
        return t;
      }
      let ep = (e) =>
        "<<" === e ||
        (g(e) && "<<" === e.value && (!e.type || e.type === F.PLAIN));
      function em(e, t, s) {
        let n = e && d(s) ? s.resolve(e.doc) : s;
        if (!m(n)) throw Error("Merge sources must be maps or map aliases");
        let i = n.toJSON(null, e, Map);
        for (let [e, s] of i)
          t instanceof Map
            ? t.has(e) || t.set(e, s)
            : t instanceof Set
            ? t.add(e)
            : Object.prototype.hasOwnProperty.call(t, e) ||
              Object.defineProperty(t, e, {
                value: s,
                writable: !0,
                enumerable: !0,
                configurable: !0,
              });
        return t;
      }
      function ey(e, t, s) {
        let n = V(e, void 0, s),
          i = V(t, void 0, s);
        return new eg(n, i);
      }
      class eg {
        constructor(e, t = null) {
          Object.defineProperty(this, h, { value: c }),
            (this.key = e),
            (this.value = t);
        }
        clone(e) {
          let { key: t, value: s } = this;
          return (
            w(t) && (t = t.clone(e)), w(s) && (s = s.clone(e)), new eg(t, s)
          );
        }
        toJSON(e, t) {
          let s = t?.mapAsMap ? new Map() : {};
          return ed(t, s, this);
        }
        toString(e, t, s) {
          return e?.doc
            ? (function ({ key: e, value: t }, s, n, i) {
                let r, o, l;
                let {
                    allNullValues: a,
                    doc: c,
                    indent: u,
                    indentStep: f,
                    options: { commentString: h, indentSeq: d, simpleKeys: p },
                  } = s,
                  m = (w(e) && e.comment) || null;
                if (p) {
                  if (m)
                    throw Error(
                      "With simple keys, key nodes cannot have comments"
                    );
                  if (k(e))
                    throw Error(
                      "With simple keys, collection cannot be used as a key value"
                    );
                }
                let y =
                  !p &&
                  (!e ||
                    (m && null == t && !s.inFlow) ||
                    k(e) ||
                    (g(e)
                      ? e.type === F.BLOCK_FOLDED || e.type === F.BLOCK_LITERAL
                      : "object" == typeof e));
                s = Object.assign({}, s, {
                  allNullValues: !1,
                  implicitKey: !y && (p || !a),
                  indent: u + f,
                });
                let v = !1,
                  S = !1,
                  E = eu(
                    e,
                    s,
                    () => (v = !0),
                    () => (S = !0)
                  );
                if (!y && !s.inFlow && E.length > 1024) {
                  if (p)
                    throw Error(
                      "With simple keys, single line scalar must not span more than 1024 characters"
                    );
                  y = !0;
                }
                if (s.inFlow) {
                  if (a || null == t)
                    return v && n && n(), "" === E ? "?" : y ? `? ${E}` : E;
                } else if ((a && !p) || (null == t && y))
                  return (
                    (E = `? ${E}`),
                    m && !v ? (E += H(E, s.indent, h(m))) : S && i && i(),
                    E
                  );
                v && (m = null),
                  y
                    ? (m && (E += H(E, s.indent, h(m))),
                      (E = `? ${E}
${u}:`))
                    : ((E = `${E}:`), m && (E += H(E, s.indent, h(m)))),
                  w(t)
                    ? ((r = !!t.spaceBefore),
                      (o = t.commentBefore),
                      (l = t.comment))
                    : ((r = !1),
                      (o = null),
                      (l = null),
                      t && "object" == typeof t && (t = c.createNode(t))),
                  (s.implicitKey = !1),
                  !y && !m && g(t) && (s.indentAtStart = E.length + 1),
                  (S = !1),
                  !(!d && f.length >= 2 && !s.inFlow && !y && b(t)) ||
                    t.flow ||
                    t.tag ||
                    t.anchor ||
                    (s.indent = s.indent.substring(2));
                let N = !1,
                  O = eu(
                    t,
                    s,
                    () => (N = !0),
                    () => (S = !0)
                  ),
                  A = " ";
                if (m || r || o) {
                  if (((A = r ? "\n" : ""), o)) {
                    let e = h(o);
                    A += `
${Q(e, s.indent)}`;
                  }
                  "" !== O || s.inFlow
                    ? (A += `
${s.indent}`)
                    : "\n" === A && (A = "\n\n");
                } else if (!y && k(t)) {
                  let e = O[0],
                    n = O.indexOf("\n"),
                    i = -1 !== n,
                    r = s.inFlow ?? t.flow ?? 0 === t.items.length;
                  if (i || !r) {
                    let t = !1;
                    if (i && ("&" === e || "!" === e)) {
                      let s = O.indexOf(" ");
                      "&" === e &&
                        -1 !== s &&
                        s < n &&
                        "!" === O[s + 1] &&
                        (s = O.indexOf(" ", s + 1)),
                        (-1 === s || n < s) && (t = !0);
                    }
                    t ||
                      (A = `
${s.indent}`);
                  }
                } else ("" === O || "\n" === O[0]) && (A = "");
                return (
                  (E += A + O),
                  s.inFlow
                    ? N && n && n()
                    : l && !N
                    ? (E += H(E, s.indent, h(l)))
                    : S && i && i(),
                  E
                );
              })(this, e, t, s)
            : JSON.stringify(this);
        }
      }
      function eb(e, t, s) {
        let n = t.inFlow ?? e.flow;
        return (n ? ew : ek)(e, t, s);
      }
      function ek(
        { comment: e, items: t },
        s,
        {
          blockItemPrefix: n,
          flowChars: i,
          itemIndent: r,
          onChompKeep: o,
          onComment: l,
        }
      ) {
        let a;
        let {
            indent: c,
            options: { commentString: u },
          } = s,
          f = Object.assign({}, s, { indent: r, type: null }),
          h = !1,
          d = [];
        for (let e = 0; e < t.length; ++e) {
          let i = t[e],
            o = null;
          if (w(i))
            !h && i.spaceBefore && d.push(""),
              ev(s, d, i.commentBefore, h),
              i.comment && (o = i.comment);
          else if (y(i)) {
            let e = w(i.key) ? i.key : null;
            e &&
              (!h && e.spaceBefore && d.push(""), ev(s, d, e.commentBefore, h));
          }
          h = !1;
          let l = eu(
            i,
            f,
            () => (o = null),
            () => (h = !0)
          );
          o && (l += H(l, r, u(o))), h && o && (h = !1), d.push(n + l);
        }
        if (0 === d.length) a = i.start + i.end;
        else {
          a = d[0];
          for (let e = 1; e < d.length; ++e) {
            let t = d[e];
            a += t
              ? `
${c}${t}`
              : "\n";
          }
        }
        return e ? ((a += "\n" + Q(u(e), c)), l && l()) : h && o && o(), a;
      }
      function ew(
        { comment: e, items: t },
        s,
        { flowChars: n, itemIndent: i, onComment: r }
      ) {
        let o;
        let {
          indent: l,
          indentStep: a,
          flowCollectionPadding: c,
          options: { commentString: u },
        } = s;
        i += a;
        let f = Object.assign({}, s, { indent: i, inFlow: !0, type: null }),
          h = !1,
          d = 0,
          p = [];
        for (let e = 0; e < t.length; ++e) {
          let n = t[e],
            r = null;
          if (w(n))
            n.spaceBefore && p.push(""),
              ev(s, p, n.commentBefore, !1),
              n.comment && (r = n.comment);
          else if (y(n)) {
            let e = w(n.key) ? n.key : null;
            e &&
              (e.spaceBefore && p.push(""),
              ev(s, p, e.commentBefore, !1),
              e.comment && (h = !0));
            let t = w(n.value) ? n.value : null;
            t
              ? (t.comment && (r = t.comment), t.commentBefore && (h = !0))
              : null == n.value && e?.comment && (r = e.comment);
          }
          r && (h = !0);
          let o = eu(n, f, () => (r = null));
          e < t.length - 1 && (o += ","),
            r && (o += H(o, i, u(r))),
            !h && (p.length > d || o.includes("\n")) && (h = !0),
            p.push(o),
            (d = p.length);
        }
        let { start: m, end: g } = n;
        if (0 === p.length) o = m + g;
        else {
          if (!h) {
            let e = p.reduce((e, t) => e + t.length + 2, 2);
            h = e > W.maxFlowStringSingleLineLength;
          }
          if (h) {
            for (let e of ((o = m), p))
              o += e
                ? `
${a}${l}${e}`
                : "\n";
            o += `
${l}${g}`;
          } else o = `${m}${c}${p.join(" ")}${c}${g}`;
        }
        return e && ((o += H(o, l, u(e))), r && r()), o;
      }
      function ev({ indent: e, options: { commentString: t } }, s, n, i) {
        if ((n && i && (n = n.replace(/^\n+/, "")), n)) {
          let i = Q(t(n), e);
          s.push(i.trimStart());
        }
      }
      function eS(e, t) {
        let s = g(t) ? t.value : t;
        for (let n of e)
          if (
            y(n) &&
            (n.key === t || n.key === s || (g(n.key) && n.key.value === s))
          )
            return n;
      }
      class eE extends W {
        static get tagName() {
          return "tag:yaml.org,2002:map";
        }
        constructor(e) {
          super(a, e), (this.items = []);
        }
        static from(e, t, s) {
          let { keepUndefined: n, replacer: i } = s,
            r = new this(e),
            o = (e, o) => {
              if ("function" == typeof i) o = i.call(t, e, o);
              else if (Array.isArray(i) && !i.includes(e)) return;
              (void 0 !== o || n) && r.items.push(ey(e, o, s));
            };
          if (t instanceof Map) for (let [e, s] of t) o(e, s);
          else if (t && "object" == typeof t)
            for (let e of Object.keys(t)) o(e, t[e]);
          return (
            "function" == typeof e.sortMapEntries &&
              r.items.sort(e.sortMapEntries),
            r
          );
        }
        add(e, t) {
          let s;
          s = y(e)
            ? e
            : e && "object" == typeof e && "key" in e
            ? new eg(e.key, e.value)
            : new eg(e, e?.value);
          let n = eS(this.items, s.key),
            i = this.schema?.sortMapEntries;
          if (n) {
            if (!t) throw Error(`Key ${s.key} already set`);
            g(n.value) && R(s.value)
              ? (n.value.value = s.value)
              : (n.value = s.value);
          } else if (i) {
            let e = this.items.findIndex((e) => 0 > i(s, e));
            -1 === e ? this.items.push(s) : this.items.splice(e, 0, s);
          } else this.items.push(s);
        }
        delete(e) {
          let t = eS(this.items, e);
          if (!t) return !1;
          let s = this.items.splice(this.items.indexOf(t), 1);
          return s.length > 0;
        }
        get(e, t) {
          let s = eS(this.items, e),
            n = s?.value;
          return (!t && g(n) ? n.value : n) ?? void 0;
        }
        has(e) {
          return !!eS(this.items, e);
        }
        set(e, t) {
          this.add(new eg(e, t), !0);
        }
        toJSON(e, t, s) {
          let n = s ? new s() : t?.mapAsMap ? new Map() : {};
          for (let e of (t?.onCreate && t.onCreate(n), this.items)) ed(t, n, e);
          return n;
        }
        toString(e, t, s) {
          if (!e) return JSON.stringify(this);
          for (let e of this.items)
            if (!y(e))
              throw Error(
                `Map items must all be pairs; found ${JSON.stringify(
                  e
                )} instead`
              );
          return (
            !e.allNullValues &&
              this.hasAllNullValues(!1) &&
              (e = Object.assign({}, e, { allNullValues: !0 })),
            eb(this, e, {
              blockItemPrefix: "",
              flowChars: { start: "{", end: "}" },
              itemIndent: e.indent || "",
              onChompKeep: s,
              onComment: t,
            })
          );
        }
      }
      let eN = {
        collection: "map",
        default: !0,
        nodeClass: eE,
        tag: "tag:yaml.org,2002:map",
        resolve: (e, t) => (m(e) || t("Expected a mapping for this tag"), e),
        createNode: (e, t, s) => eE.from(e, t, s),
      };
      class eO extends W {
        static get tagName() {
          return "tag:yaml.org,2002:seq";
        }
        constructor(e) {
          super(f, e), (this.items = []);
        }
        add(e) {
          this.items.push(e);
        }
        delete(e) {
          let t = eA(e);
          if ("number" != typeof t) return !1;
          let s = this.items.splice(t, 1);
          return s.length > 0;
        }
        get(e, t) {
          let s = eA(e);
          if ("number" != typeof s) return;
          let n = this.items[s];
          return !t && g(n) ? n.value : n;
        }
        has(e) {
          let t = eA(e);
          return "number" == typeof t && t < this.items.length;
        }
        set(e, t) {
          let s = eA(e);
          if ("number" != typeof s)
            throw Error(`Expected a valid index, not ${e}.`);
          let n = this.items[s];
          g(n) && R(t) ? (n.value = t) : (this.items[s] = t);
        }
        toJSON(e, t) {
          let s = [];
          t?.onCreate && t.onCreate(s);
          let n = 0;
          for (let e of this.items) s.push(P(e, String(n++), t));
          return s;
        }
        toString(e, t, s) {
          return e
            ? eb(this, e, {
                blockItemPrefix: "- ",
                flowChars: { start: "[", end: "]" },
                itemIndent: (e.indent || "") + "  ",
                onChompKeep: s,
                onComment: t,
              })
            : JSON.stringify(this);
        }
        static from(e, t, s) {
          let { replacer: n } = s,
            i = new this(e);
          if (t && Symbol.iterator in Object(t)) {
            let e = 0;
            for (let r of t) {
              if ("function" == typeof n) {
                let s = t instanceof Set ? r : String(e++);
                r = n.call(t, s, r);
              }
              i.items.push(V(r, void 0, s));
            }
          }
          return i;
        }
      }
      function eA(e) {
        let t = g(e) ? e.value : e;
        return (
          t && "string" == typeof t && (t = Number(t)),
          "number" == typeof t && Number.isInteger(t) && t >= 0 ? t : null
        );
      }
      let eT = {
          collection: "seq",
          default: !0,
          nodeClass: eO,
          tag: "tag:yaml.org,2002:seq",
          resolve: (e, t) => (b(e) || t("Expected a sequence for this tag"), e),
          createNode: (e, t, s) => eO.from(e, t, s),
        },
        eI = {
          identify: (e) => "string" == typeof e,
          default: !0,
          tag: "tag:yaml.org,2002:str",
          resolve: (e) => e,
          stringify: (e, t, s, n) =>
            ea(e, (t = Object.assign({ actualString: !0 }, t)), s, n),
        },
        eL = {
          identify: (e) => null == e,
          createNode: () => new F(null),
          default: !0,
          tag: "tag:yaml.org,2002:null",
          test: /^(?:~|[Nn]ull|NULL)?$/,
          resolve: () => new F(null),
          stringify: ({ source: e }, t) =>
            "string" == typeof e && eL.test.test(e) ? e : t.options.nullStr,
        },
        ex = {
          identify: (e) => "boolean" == typeof e,
          default: !0,
          tag: "tag:yaml.org,2002:bool",
          test: /^(?:[Tt]rue|TRUE|[Ff]alse|FALSE)$/,
          resolve: (e) => new F("t" === e[0] || "T" === e[0]),
          stringify({ source: e, value: t }, s) {
            if (e && ex.test.test(e)) {
              let s = "t" === e[0] || "T" === e[0];
              if (t === s) return e;
            }
            return t ? s.options.trueStr : s.options.falseStr;
          },
        };
      function e$({ format: e, minFractionDigits: t, tag: s, value: n }) {
        if ("bigint" == typeof n) return String(n);
        let i = "number" == typeof n ? n : Number(n);
        if (!isFinite(i)) return isNaN(i) ? ".nan" : i < 0 ? "-.inf" : ".inf";
        let r = JSON.stringify(n);
        if (
          !e &&
          t &&
          (!s || "tag:yaml.org,2002:float" === s) &&
          /^\d/.test(r)
        ) {
          let e = r.indexOf(".");
          e < 0 && ((e = r.length), (r += "."));
          let s = t - (r.length - e - 1);
          for (; s-- > 0; ) r += "0";
        }
        return r;
      }
      let eC = {
          identify: (e) => "number" == typeof e,
          default: !0,
          tag: "tag:yaml.org,2002:float",
          test: /^(?:[-+]?\.(?:inf|Inf|INF|nan|NaN|NAN))$/,
          resolve: (e) =>
            "nan" === e.slice(-3).toLowerCase()
              ? NaN
              : "-" === e[0]
              ? Number.NEGATIVE_INFINITY
              : Number.POSITIVE_INFINITY,
          stringify: e$,
        },
        e_ = {
          identify: (e) => "number" == typeof e,
          default: !0,
          tag: "tag:yaml.org,2002:float",
          format: "EXP",
          test: /^[-+]?(?:\.[0-9]+|[0-9]+(?:\.[0-9]*)?)[eE][-+]?[0-9]+$/,
          resolve: (e) => parseFloat(e),
          stringify(e) {
            let t = Number(e.value);
            return isFinite(t) ? t.toExponential() : e$(e);
          },
        },
        eB = {
          identify: (e) => "number" == typeof e,
          default: !0,
          tag: "tag:yaml.org,2002:float",
          test: /^[-+]?(?:\.[0-9]+|[0-9]+\.[0-9]*)$/,
          resolve(e) {
            let t = new F(parseFloat(e)),
              s = e.indexOf(".");
            return (
              -1 !== s &&
                "0" === e[e.length - 1] &&
                (t.minFractionDigits = e.length - s - 1),
              t
            );
          },
          stringify: e$,
        },
        eM = (e) => "bigint" == typeof e || Number.isInteger(e),
        ej = (e, t, s, { intAsBigInt: n }) =>
          n ? BigInt(e) : parseInt(e.substring(t), s);
      function eD(e, t, s) {
        let { value: n } = e;
        return eM(n) && n >= 0 ? s + n.toString(t) : e$(e);
      }
      let eq = {
          identify: (e) => eM(e) && e >= 0,
          default: !0,
          tag: "tag:yaml.org,2002:int",
          format: "OCT",
          test: /^0o[0-7]+$/,
          resolve: (e, t, s) => ej(e, 2, 8, s),
          stringify: (e) => eD(e, 8, "0o"),
        },
        eP = {
          identify: eM,
          default: !0,
          tag: "tag:yaml.org,2002:int",
          test: /^[-+]?[0-9]+$/,
          resolve: (e, t, s) => ej(e, 0, 10, s),
          stringify: e$,
        },
        eK = {
          identify: (e) => eM(e) && e >= 0,
          default: !0,
          tag: "tag:yaml.org,2002:int",
          format: "HEX",
          test: /^0x[0-9a-fA-F]+$/,
          resolve: (e, t, s) => ej(e, 2, 16, s),
          stringify: (e) => eD(e, 16, "0x"),
        };
      function eU(e) {
        return "bigint" == typeof e || Number.isInteger(e);
      }
      let eR = ({ value: e }) => JSON.stringify(e),
        eF = [
          {
            identify: (e) => "string" == typeof e,
            default: !0,
            tag: "tag:yaml.org,2002:str",
            resolve: (e) => e,
            stringify: eR,
          },
          {
            identify: (e) => null == e,
            createNode: () => new F(null),
            default: !0,
            tag: "tag:yaml.org,2002:null",
            test: /^null$/,
            resolve: () => null,
            stringify: eR,
          },
          {
            identify: (e) => "boolean" == typeof e,
            default: !0,
            tag: "tag:yaml.org,2002:bool",
            test: /^true|false$/,
            resolve: (e) => "true" === e,
            stringify: eR,
          },
          {
            identify: eU,
            default: !0,
            tag: "tag:yaml.org,2002:int",
            test: /^-?(?:0|[1-9][0-9]*)$/,
            resolve: (e, t, { intAsBigInt: s }) =>
              s ? BigInt(e) : parseInt(e, 10),
            stringify: ({ value: e }) =>
              eU(e) ? e.toString() : JSON.stringify(e),
          },
          {
            identify: (e) => "number" == typeof e,
            default: !0,
            tag: "tag:yaml.org,2002:float",
            test: /^-?(?:0|[1-9][0-9]*)(?:\.[0-9]*)?(?:[eE][-+]?[0-9]+)?$/,
            resolve: (e) => parseFloat(e),
            stringify: eR,
          },
        ],
        eV = [eN, eT].concat(eF, {
          default: !0,
          tag: "",
          test: /^/,
          resolve: (e, t) => (
            t(`Unresolved plain scalar ${JSON.stringify(e)}`), e
          ),
        });
      var eJ = s(14984).lW;
      let eY = {
        identify: (e) => e instanceof Uint8Array,
        default: !1,
        tag: "tag:yaml.org,2002:binary",
        resolve(e, t) {
          if ("function" == typeof eJ) return eJ.from(e, "base64");
          if ("function" != typeof atob)
            return (
              t(
                "This environment does not support reading binary tags; either Buffer or atob is required"
              ),
              e
            );
          {
            let t = atob(e.replace(/[\n\r]/g, "")),
              s = new Uint8Array(t.length);
            for (let e = 0; e < t.length; ++e) s[e] = t.charCodeAt(e);
            return s;
          }
        },
        stringify({ comment: e, type: t, value: s }, n, i, r) {
          let o;
          if ("function" == typeof eJ)
            o =
              s instanceof eJ
                ? s.toString("base64")
                : eJ.from(s.buffer).toString("base64");
          else if ("function" == typeof btoa) {
            let e = "";
            for (let t = 0; t < s.length; ++t) e += String.fromCharCode(s[t]);
            o = btoa(e);
          } else
            throw Error(
              "This environment does not support writing binary tags; either Buffer or btoa is required"
            );
          if ((t || (t = F.BLOCK_LITERAL), t !== F.QUOTE_DOUBLE)) {
            let e = Math.max(
                n.options.lineWidth - n.indent.length,
                n.options.minContentWidth
              ),
              s = Math.ceil(o.length / e),
              i = Array(s);
            for (let t = 0, n = 0; t < s; ++t, n += e) i[t] = o.substr(n, e);
            o = i.join(t === F.BLOCK_LITERAL ? "\n" : " ");
          }
          return ea({ comment: e, type: t, value: o }, n, i, r);
        },
      };
      function eW(e, t) {
        if (b(e))
          for (let s = 0; s < e.items.length; ++s) {
            let n = e.items[s];
            if (!y(n)) {
              if (m(n)) {
                n.items.length > 1 &&
                  t("Each pair must have its own sequence indicator");
                let e = n.items[0] || new eg(new F(null));
                if (
                  (n.commentBefore &&
                    (e.key.commentBefore = e.key.commentBefore
                      ? `${n.commentBefore}
${e.key.commentBefore}`
                      : n.commentBefore),
                  n.comment)
                ) {
                  let t = e.value ?? e.key;
                  t.comment = t.comment
                    ? `${n.comment}
${t.comment}`
                    : n.comment;
                }
                n = e;
              }
              e.items[s] = y(n) ? n : new eg(n);
            }
          }
        else t("Expected a sequence for this tag");
        return e;
      }
      function eG(e, t, s) {
        let { replacer: n } = s,
          i = new eO(e);
        i.tag = "tag:yaml.org,2002:pairs";
        let r = 0;
        if (t && Symbol.iterator in Object(t))
          for (let e of t) {
            let o, l;
            if (
              ("function" == typeof n && (e = n.call(t, String(r++), e)),
              Array.isArray(e))
            ) {
              if (2 === e.length) (o = e[0]), (l = e[1]);
              else throw TypeError(`Expected [key, value] tuple: ${e}`);
            } else if (e && e instanceof Object) {
              let t = Object.keys(e);
              if (1 === t.length) l = e[(o = t[0])];
              else
                throw TypeError(
                  `Expected tuple with one key, not ${t.length} keys`
                );
            } else o = e;
            i.items.push(ey(o, l, s));
          }
        return i;
      }
      let eQ = {
        collection: "seq",
        default: !1,
        tag: "tag:yaml.org,2002:pairs",
        resolve: eW,
        createNode: eG,
      };
      class eH extends eO {
        constructor() {
          super(),
            (this.add = eE.prototype.add.bind(this)),
            (this.delete = eE.prototype.delete.bind(this)),
            (this.get = eE.prototype.get.bind(this)),
            (this.has = eE.prototype.has.bind(this)),
            (this.set = eE.prototype.set.bind(this)),
            (this.tag = eH.tag);
        }
        toJSON(e, t) {
          if (!t) return super.toJSON(e);
          let s = new Map();
          for (let e of (t?.onCreate && t.onCreate(s), this.items)) {
            let n, i;
            if (
              (y(e)
                ? ((n = P(e.key, "", t)), (i = P(e.value, n, t)))
                : (n = P(e, "", t)),
              s.has(n))
            )
              throw Error("Ordered maps must not include duplicate keys");
            s.set(n, i);
          }
          return s;
        }
        static from(e, t, s) {
          let n = eG(e, t, s),
            i = new this();
          return (i.items = n.items), i;
        }
      }
      eH.tag = "tag:yaml.org,2002:omap";
      let eX = {
        collection: "seq",
        identify: (e) => e instanceof Map,
        nodeClass: eH,
        default: !1,
        tag: "tag:yaml.org,2002:omap",
        resolve(e, t) {
          let s = eW(e, t),
            n = [];
          for (let { key: e } of s.items)
            g(e) &&
              (n.includes(e.value)
                ? t(`Ordered maps must not include duplicate keys: ${e.value}`)
                : n.push(e.value));
          return Object.assign(new eH(), s);
        },
        createNode: (e, t, s) => eH.from(e, t, s),
      };
      function ez({ value: e, source: t }, s) {
        return t && (e ? eZ : e0).test.test(t)
          ? t
          : e
          ? s.options.trueStr
          : s.options.falseStr;
      }
      let eZ = {
          identify: (e) => !0 === e,
          default: !0,
          tag: "tag:yaml.org,2002:bool",
          test: /^(?:Y|y|[Yy]es|YES|[Tt]rue|TRUE|[Oo]n|ON)$/,
          resolve: () => new F(!0),
          stringify: ez,
        },
        e0 = {
          identify: (e) => !1 === e,
          default: !0,
          tag: "tag:yaml.org,2002:bool",
          test: /^(?:N|n|[Nn]o|NO|[Ff]alse|FALSE|[Oo]ff|OFF)$/i,
          resolve: () => new F(!1),
          stringify: ez,
        },
        e1 = (e) => "bigint" == typeof e || Number.isInteger(e);
      function e2(e, t, s, { intAsBigInt: n }) {
        let i = e[0];
        if (
          (("-" === i || "+" === i) && (t += 1),
          (e = e.substring(t).replace(/_/g, "")),
          n)
        ) {
          switch (s) {
            case 2:
              e = `0b${e}`;
              break;
            case 8:
              e = `0o${e}`;
              break;
            case 16:
              e = `0x${e}`;
          }
          let t = BigInt(e);
          return "-" === i ? BigInt(-1) * t : t;
        }
        let r = parseInt(e, s);
        return "-" === i ? -1 * r : r;
      }
      function e9(e, t, s) {
        let { value: n } = e;
        if (e1(n)) {
          let e = n.toString(t);
          return n < 0 ? "-" + s + e.substr(1) : s + e;
        }
        return e$(e);
      }
      class e8 extends eE {
        constructor(e) {
          super(e), (this.tag = e8.tag);
        }
        add(e) {
          let t;
          t = y(e)
            ? e
            : e &&
              "object" == typeof e &&
              "key" in e &&
              "value" in e &&
              null === e.value
            ? new eg(e.key, null)
            : new eg(e, null);
          let s = eS(this.items, t.key);
          s || this.items.push(t);
        }
        get(e, t) {
          let s = eS(this.items, e);
          return !t && y(s) ? (g(s.key) ? s.key.value : s.key) : s;
        }
        set(e, t) {
          if ("boolean" != typeof t)
            throw Error(
              `Expected boolean value for set(key, value) in a YAML set, not ${typeof t}`
            );
          let s = eS(this.items, e);
          s && !t
            ? this.items.splice(this.items.indexOf(s), 1)
            : !s && t && this.items.push(new eg(e));
        }
        toJSON(e, t) {
          return super.toJSON(e, t, Set);
        }
        toString(e, t, s) {
          if (!e) return JSON.stringify(this);
          if (this.hasAllNullValues(!0))
            return super.toString(
              Object.assign({}, e, { allNullValues: !0 }),
              t,
              s
            );
          throw Error("Set items must all have null values");
        }
        static from(e, t, s) {
          let { replacer: n } = s,
            i = new this(e);
          if (t && Symbol.iterator in Object(t))
            for (let e of t)
              "function" == typeof n && (e = n.call(t, e, e)),
                i.items.push(ey(e, null, s));
          return i;
        }
      }
      e8.tag = "tag:yaml.org,2002:set";
      let e4 = {
        collection: "map",
        identify: (e) => e instanceof Set,
        nodeClass: e8,
        default: !1,
        tag: "tag:yaml.org,2002:set",
        createNode: (e, t, s) => e8.from(e, t, s),
        resolve(e, t) {
          if (m(e)) {
            if (e.hasAllNullValues(!0)) return Object.assign(new e8(), e);
            t("Set items must all have null values");
          } else t("Expected a mapping for this tag");
          return e;
        },
      };
      function e6(e, t) {
        let s = e[0],
          n = "-" === s || "+" === s ? e.substring(1) : e,
          i = (e) => (t ? BigInt(e) : Number(e)),
          r = n
            .replace(/_/g, "")
            .split(":")
            .reduce((e, t) => e * i(60) + i(t), i(0));
        return "-" === s ? i(-1) * r : r;
      }
      function e3(e) {
        let { value: t } = e,
          s = (e) => e;
        if ("bigint" == typeof t) s = (e) => BigInt(e);
        else if (isNaN(t) || !isFinite(t)) return e$(e);
        let n = "";
        t < 0 && ((n = "-"), (t *= s(-1)));
        let i = s(60),
          r = [t % i];
        return (
          t < 60
            ? r.unshift(0)
            : ((t = (t - r[0]) / i),
              r.unshift(t % i),
              t >= 60 && ((t = (t - r[0]) / i), r.unshift(t))),
          n +
            r
              .map((e) => String(e).padStart(2, "0"))
              .join(":")
              .replace(/000000\d*$/, "")
        );
      }
      let e7 = {
          identify: (e) => "bigint" == typeof e || Number.isInteger(e),
          default: !0,
          tag: "tag:yaml.org,2002:int",
          format: "TIME",
          test: /^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+$/,
          resolve: (e, t, { intAsBigInt: s }) => e6(e, s),
          stringify: e3,
        },
        e5 = {
          identify: (e) => "number" == typeof e,
          default: !0,
          tag: "tag:yaml.org,2002:float",
          format: "TIME",
          test: /^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\.[0-9_]*$/,
          resolve: (e) => e6(e, !1),
          stringify: e3,
        },
        te = {
          identify: (e) => e instanceof Date,
          default: !0,
          tag: "tag:yaml.org,2002:timestamp",
          test: RegExp(
            "^([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})(?:(?:t|T|[ \\t]+)([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2}(\\.[0-9]+)?)(?:[ \\t]*(Z|[-+][012]?[0-9](?::[0-9]{2})?))?)?$"
          ),
          resolve(e) {
            let t = e.match(te.test);
            if (!t)
              throw Error(
                "!!timestamp expects a date, starting with yyyy-mm-dd"
              );
            let [, s, n, i, r, o, l] = t.map(Number),
              a = t[7] ? Number((t[7] + "00").substr(1, 3)) : 0,
              c = Date.UTC(s, n - 1, i, r || 0, o || 0, l || 0, a),
              u = t[8];
            if (u && "Z" !== u) {
              let e = e6(u, !1);
              30 > Math.abs(e) && (e *= 60), (c -= 6e4 * e);
            }
            return new Date(c);
          },
          stringify: ({ value: e }) =>
            e.toISOString().replace(/((T00:00)?:00)?\.000Z$/, ""),
        },
        tt = [
          eN,
          eT,
          eI,
          eL,
          eZ,
          e0,
          {
            identify: e1,
            default: !0,
            tag: "tag:yaml.org,2002:int",
            format: "BIN",
            test: /^[-+]?0b[0-1_]+$/,
            resolve: (e, t, s) => e2(e, 2, 2, s),
            stringify: (e) => e9(e, 2, "0b"),
          },
          {
            identify: e1,
            default: !0,
            tag: "tag:yaml.org,2002:int",
            format: "OCT",
            test: /^[-+]?0[0-7_]+$/,
            resolve: (e, t, s) => e2(e, 1, 8, s),
            stringify: (e) => e9(e, 8, "0"),
          },
          {
            identify: e1,
            default: !0,
            tag: "tag:yaml.org,2002:int",
            test: /^[-+]?[0-9][0-9_]*$/,
            resolve: (e, t, s) => e2(e, 0, 10, s),
            stringify: e$,
          },
          {
            identify: e1,
            default: !0,
            tag: "tag:yaml.org,2002:int",
            format: "HEX",
            test: /^[-+]?0x[0-9a-fA-F_]+$/,
            resolve: (e, t, s) => e2(e, 2, 16, s),
            stringify: (e) => e9(e, 16, "0x"),
          },
          {
            identify: (e) => "number" == typeof e,
            default: !0,
            tag: "tag:yaml.org,2002:float",
            test: /^[-+]?\.(?:inf|Inf|INF|nan|NaN|NAN)$/,
            resolve: (e) =>
              "nan" === e.slice(-3).toLowerCase()
                ? NaN
                : "-" === e[0]
                ? Number.NEGATIVE_INFINITY
                : Number.POSITIVE_INFINITY,
            stringify: e$,
          },
          {
            identify: (e) => "number" == typeof e,
            default: !0,
            tag: "tag:yaml.org,2002:float",
            format: "EXP",
            test: /^[-+]?(?:[0-9][0-9_]*)?(?:\.[0-9_]*)?[eE][-+]?[0-9]+$/,
            resolve: (e) => parseFloat(e.replace(/_/g, "")),
            stringify(e) {
              let t = Number(e.value);
              return isFinite(t) ? t.toExponential() : e$(e);
            },
          },
          {
            identify: (e) => "number" == typeof e,
            default: !0,
            tag: "tag:yaml.org,2002:float",
            test: /^[-+]?(?:[0-9][0-9_]*)?\.[0-9_]*$/,
            resolve(e) {
              let t = new F(parseFloat(e.replace(/_/g, ""))),
                s = e.indexOf(".");
              if (-1 !== s) {
                let n = e.substring(s + 1).replace(/_/g, "");
                "0" === n[n.length - 1] && (t.minFractionDigits = n.length);
              }
              return t;
            },
            stringify: e$,
          },
          eY,
          eX,
          eQ,
          e4,
          e7,
          e5,
          te,
        ],
        ts = new Map([
          ["core", [eN, eT, eI, eL, ex, eq, eP, eK, eC, e_, eB]],
          ["failsafe", [eN, eT, eI]],
          ["json", eV],
          ["yaml11", tt],
          ["yaml-1.1", tt],
        ]),
        tn = {
          binary: eY,
          bool: ex,
          float: eB,
          floatExp: e_,
          floatNaN: eC,
          floatTime: e5,
          int: eP,
          intHex: eK,
          intOct: eq,
          intTime: e7,
          map: eN,
          null: eL,
          omap: eX,
          pairs: eQ,
          seq: eT,
          set: e4,
          timestamp: te,
        },
        ti = {
          "tag:yaml.org,2002:binary": eY,
          "tag:yaml.org,2002:omap": eX,
          "tag:yaml.org,2002:pairs": eQ,
          "tag:yaml.org,2002:set": e4,
          "tag:yaml.org,2002:timestamp": te,
        };
      function tr(e, t) {
        let s = ts.get(t);
        if (!s) {
          if (Array.isArray(e)) s = [];
          else {
            let e = Array.from(ts.keys())
              .filter((e) => "yaml11" !== e)
              .map((e) => JSON.stringify(e))
              .join(", ");
            throw Error(
              `Unknown schema "${t}"; use one of ${e} or define customTags array`
            );
          }
        }
        if (Array.isArray(e)) for (let t of e) s = s.concat(t);
        else "function" == typeof e && (s = e(s.slice()));
        return s.map((e) => {
          if ("string" != typeof e) return e;
          let t = tn[e];
          if (t) return t;
          let s = Object.keys(tn)
            .map((e) => JSON.stringify(e))
            .join(", ");
          throw Error(`Unknown custom tag "${e}"; use one of ${s}`);
        });
      }
      let to = (e, t) => (e.key < t.key ? -1 : e.key > t.key ? 1 : 0);
      class tl {
        constructor({
          compat: e,
          customTags: t,
          merge: s,
          resolveKnownTags: n,
          schema: i,
          sortMapEntries: r,
          toStringDefaults: o,
        }) {
          (this.compat = Array.isArray(e)
            ? tr(e, "compat")
            : e
            ? tr(null, e)
            : null),
            (this.merge = !!s),
            (this.name = ("string" == typeof i && i) || "core"),
            (this.knownTags = n ? ti : {}),
            (this.tags = tr(t, this.name)),
            (this.toStringOptions = o ?? null),
            Object.defineProperty(this, a, { value: eN }),
            Object.defineProperty(this, u, { value: eI }),
            Object.defineProperty(this, f, { value: eT }),
            (this.sortMapEntries =
              "function" == typeof r ? r : !0 === r ? to : null);
        }
        clone() {
          let e = Object.create(
            tl.prototype,
            Object.getOwnPropertyDescriptors(this)
          );
          return (e.tags = this.tags.slice()), e;
        }
      }
      class ta {
        constructor(e, t, s) {
          (this.commentBefore = null),
            (this.comment = null),
            (this.errors = []),
            (this.warnings = []),
            Object.defineProperty(this, h, { value: l });
          let n = null;
          "function" == typeof t || Array.isArray(t)
            ? (n = t)
            : void 0 === s && t && ((s = t), (t = void 0));
          let i = Object.assign(
            {
              intAsBigInt: !1,
              keepSourceTokens: !1,
              logLevel: "warn",
              prettyErrors: !0,
              strict: !0,
              uniqueKeys: !0,
              version: "1.2",
            },
            s
          );
          this.options = i;
          let { version: r } = i;
          s?._directives
            ? ((this.directives = s._directives.atDocument()),
              this.directives.yaml.explicit &&
                (r = this.directives.yaml.version))
            : (this.directives = new B({ version: r })),
            this.setSchema(r, s),
            (this.contents = void 0 === e ? null : this.createNode(e, n, s));
        }
        clone() {
          let e = Object.create(ta.prototype, { [h]: { value: l } });
          return (
            (e.commentBefore = this.commentBefore),
            (e.comment = this.comment),
            (e.errors = this.errors.slice()),
            (e.warnings = this.warnings.slice()),
            (e.options = Object.assign({}, this.options)),
            this.directives && (e.directives = this.directives.clone()),
            (e.schema = this.schema.clone()),
            (e.contents = w(this.contents)
              ? this.contents.clone(e.schema)
              : this.contents),
            this.range && (e.range = this.range.slice()),
            e
          );
        }
        add(e) {
          tc(this.contents) && this.contents.add(e);
        }
        addIn(e, t) {
          tc(this.contents) && this.contents.addIn(e, t);
        }
        createAlias(e, t) {
          if (!e.anchor) {
            let s = j(this);
            e.anchor = !t || s.has(t) ? D(t || "a", s) : t;
          }
          return new U(e.anchor);
        }
        createNode(e, t, s) {
          let n;
          if ("function" == typeof t) (e = t.call({ "": e }, "", e)), (n = t);
          else if (Array.isArray(t)) {
            let e = t
              .filter(
                (e) =>
                  "number" == typeof e ||
                  e instanceof String ||
                  e instanceof Number
              )
              .map(String);
            e.length > 0 && (t = t.concat(e)), (n = t);
          } else void 0 === s && t && ((s = t), (t = void 0));
          let {
              aliasDuplicateObjects: i,
              anchorPrefix: r,
              flow: o,
              keepUndefined: l,
              onTagObj: a,
              tag: c,
            } = s ?? {},
            {
              onAnchor: u,
              setAnchors: f,
              sourceObjects: h,
            } = (function (e, t) {
              let s = [],
                n = new Map(),
                i = null;
              return {
                onAnchor: (n) => {
                  s.push(n), i || (i = j(e));
                  let r = D(t, i);
                  return i.add(r), r;
                },
                setAnchors: () => {
                  for (let e of s) {
                    let t = n.get(e);
                    if (
                      "object" == typeof t &&
                      t.anchor &&
                      (g(t.node) || k(t.node))
                    )
                      t.node.anchor = t.anchor;
                    else {
                      let t = Error(
                        "Failed to resolve repeated object (this should not happen)"
                      );
                      throw ((t.source = e), t);
                    }
                  }
                },
                sourceObjects: n,
              };
            })(this, r || "a"),
            d = {
              aliasDuplicateObjects: i ?? !0,
              keepUndefined: l ?? !1,
              onAnchor: u,
              onTagObj: a,
              replacer: n,
              schema: this.schema,
              sourceObjects: h,
            },
            p = V(e, c, d);
          return o && k(p) && (p.flow = !0), f(), p;
        }
        createPair(e, t, s = {}) {
          let n = this.createNode(e, null, s),
            i = this.createNode(t, null, s);
          return new eg(n, i);
        }
        delete(e) {
          return !!tc(this.contents) && this.contents.delete(e);
        }
        deleteIn(e) {
          return Y(e)
            ? null != this.contents && ((this.contents = null), !0)
            : !!tc(this.contents) && this.contents.deleteIn(e);
        }
        get(e, t) {
          return k(this.contents) ? this.contents.get(e, t) : void 0;
        }
        getIn(e, t) {
          return Y(e)
            ? !t && g(this.contents)
              ? this.contents.value
              : this.contents
            : k(this.contents)
            ? this.contents.getIn(e, t)
            : void 0;
        }
        has(e) {
          return !!k(this.contents) && this.contents.has(e);
        }
        hasIn(e) {
          return Y(e)
            ? void 0 !== this.contents
            : !!k(this.contents) && this.contents.hasIn(e);
        }
        set(e, t) {
          null == this.contents
            ? (this.contents = J(this.schema, [e], t))
            : tc(this.contents) && this.contents.set(e, t);
        }
        setIn(e, t) {
          Y(e)
            ? (this.contents = t)
            : null == this.contents
            ? (this.contents = J(this.schema, Array.from(e), t))
            : tc(this.contents) && this.contents.setIn(e, t);
        }
        setSchema(e, t = {}) {
          let s;
          switch (("number" == typeof e && (e = String(e)), e)) {
            case "1.1":
              this.directives
                ? (this.directives.yaml.version = "1.1")
                : (this.directives = new B({ version: "1.1" })),
                (s = { merge: !0, resolveKnownTags: !1, schema: "yaml-1.1" });
              break;
            case "1.2":
            case "next":
              this.directives
                ? (this.directives.yaml.version = e)
                : (this.directives = new B({ version: e })),
                (s = { merge: !1, resolveKnownTags: !0, schema: "core" });
              break;
            case null:
              this.directives && delete this.directives, (s = null);
              break;
            default: {
              let t = JSON.stringify(e);
              throw Error(
                `Expected '1.1', '1.2' or null as first argument, but found: ${t}`
              );
            }
          }
          if (t.schema instanceof Object) this.schema = t.schema;
          else if (s) this.schema = new tl(Object.assign(s, t));
          else
            throw Error(
              "With a null YAML version, the { schema: Schema } option is required"
            );
        }
        toJS({
          json: e,
          jsonArg: t,
          mapAsMap: s,
          maxAliasCount: n,
          onAnchor: i,
          reviver: r,
        } = {}) {
          let o = {
              anchors: new Map(),
              doc: this,
              keep: !e,
              mapAsMap: !0 === s,
              mapKeyWarned: !1,
              maxAliasCount: "number" == typeof n ? n : 100,
            },
            l = P(this.contents, t ?? "", o);
          if ("function" == typeof i)
            for (let { count: e, res: t } of o.anchors.values()) i(t, e);
          return "function" == typeof r ? q(r, { "": l }, "", l) : l;
        }
        toJSON(e, t) {
          return this.toJS({ json: !0, jsonArg: e, mapAsMap: !1, onAnchor: t });
        }
        toString(e = {}) {
          if (this.errors.length > 0)
            throw Error("Document with errors cannot be stringified");
          if (
            "indent" in e &&
            (!Number.isInteger(e.indent) || 0 >= Number(e.indent))
          ) {
            let t = JSON.stringify(e.indent);
            throw Error(`"indent" option must be a positive integer, not ${t}`);
          }
          return (function (e, t) {
            let s = [],
              n = !0 === t.directives;
            if (!1 !== t.directives && e.directives) {
              let t = e.directives.toString(e);
              t ? (s.push(t), (n = !0)) : e.directives.docStart && (n = !0);
            }
            n && s.push("---");
            let i = ec(e, t),
              { commentString: r } = i.options;
            if (e.commentBefore) {
              1 !== s.length && s.unshift("");
              let t = r(e.commentBefore);
              s.unshift(Q(t, ""));
            }
            let o = !1,
              l = null;
            if (e.contents) {
              if (w(e.contents)) {
                if (
                  (e.contents.spaceBefore && n && s.push(""),
                  e.contents.commentBefore)
                ) {
                  let t = r(e.contents.commentBefore);
                  s.push(Q(t, ""));
                }
                (i.forceBlockIndent = !!e.comment), (l = e.contents.comment);
              }
              let t = l ? void 0 : () => (o = !0),
                a = eu(e.contents, i, () => (l = null), t);
              l && (a += H(a, "", r(l))),
                ("|" === a[0] || ">" === a[0]) && "---" === s[s.length - 1]
                  ? (s[s.length - 1] = `--- ${a}`)
                  : s.push(a);
            } else s.push(eu(e.contents, i));
            if (e.directives?.docEnd) {
              if (e.comment) {
                let t = r(e.comment);
                t.includes("\n")
                  ? (s.push("..."), s.push(Q(t, "")))
                  : s.push(`... ${t}`);
              } else s.push("...");
            } else {
              let t = e.comment;
              t && o && (t = t.replace(/^\n+/, "")),
                t &&
                  ((!o || l) && "" !== s[s.length - 1] && s.push(""),
                  s.push(Q(r(t), "")));
            }
            return s.join("\n") + "\n";
          })(this, e);
        }
      }
      function tc(e) {
        if (k(e)) return !0;
        throw Error("Expected a YAML collection as document contents");
      }
      class tu extends Error {
        constructor(e, t, s, n) {
          super(),
            (this.name = e),
            (this.code = s),
            (this.message = n),
            (this.pos = t);
        }
      }
      class tf extends tu {
        constructor(e, t, s) {
          super("YAMLParseError", e, t, s);
        }
      }
      class th extends tu {
        constructor(e, t, s) {
          super("YAMLWarning", e, t, s);
        }
      }
      let td = (e, t) => (s) => {
        if (-1 === s.pos[0]) return;
        s.linePos = s.pos.map((e) => t.linePos(e));
        let { line: n, col: i } = s.linePos[0];
        s.message += ` at line ${n}, column ${i}`;
        let r = i - 1,
          o = e
            .substring(t.lineStarts[n - 1], t.lineStarts[n])
            .replace(/[\n\r]+$/, "");
        if (r >= 60 && o.length > 80) {
          let e = Math.min(r - 39, o.length - 79);
          (o = "…" + o.substring(e)), (r -= e - 1);
        }
        if (
          (o.length > 80 && (o = o.substring(0, 79) + "…"),
          n > 1 && /^ *$/.test(o.substring(0, r)))
        ) {
          let s = e.substring(t.lineStarts[n - 2], t.lineStarts[n - 1]);
          s.length > 80 && (s = s.substring(0, 79) + "…\n"), (o = s + o);
        }
        if (/[^ ]/.test(o)) {
          let e = 1,
            t = s.linePos[1];
          t &&
            t.line === n &&
            t.col > i &&
            (e = Math.max(1, Math.min(t.col - i, 80 - r)));
          let l = " ".repeat(r) + "^".repeat(e);
          s.message += `:

${o}
${l}
`;
        }
      };
      function tp(
        e,
        {
          flow: t,
          indicator: s,
          next: n,
          offset: i,
          onError: r,
          startOnNewline: o,
        }
      ) {
        let l = !1,
          a = o,
          c = o,
          u = "",
          f = "",
          h = !1,
          d = !1,
          p = !1,
          m = null,
          y = null,
          g = null,
          b = null,
          k = null;
        for (let n of e)
          switch (
            (p &&
              ("space" !== n.type &&
                "newline" !== n.type &&
                "comma" !== n.type &&
                r(
                  n.offset,
                  "MISSING_CHAR",
                  "Tags and anchors must be separated from the next token by white space"
                ),
              (p = !1)),
            n.type)
          ) {
            case "space":
              !t &&
                a &&
                "doc-start" !== s &&
                "	" === n.source[0] &&
                r(n, "TAB_AS_INDENT", "Tabs are not allowed as indentation"),
                (c = !0);
              break;
            case "comment": {
              c ||
                r(
                  n,
                  "MISSING_CHAR",
                  "Comments must be separated from other tokens by white space characters"
                );
              let e = n.source.substring(1) || " ";
              u ? (u += f + e) : (u = e), (f = ""), (a = !1);
              break;
            }
            case "newline":
              a ? (u ? (u += n.source) : (l = !0)) : (f += n.source),
                (a = !0),
                (h = !0),
                (m || y) && (d = !0),
                (c = !0);
              break;
            case "anchor":
              m &&
                r(n, "MULTIPLE_ANCHORS", "A node can have at most one anchor"),
                n.source.endsWith(":") &&
                  r(
                    n.offset + n.source.length - 1,
                    "BAD_ALIAS",
                    "Anchor ending in : is ambiguous",
                    !0
                  ),
                (m = n),
                null === k && (k = n.offset),
                (a = !1),
                (c = !1),
                (p = !0);
              break;
            case "tag":
              y && r(n, "MULTIPLE_TAGS", "A node can have at most one tag"),
                (y = n),
                null === k && (k = n.offset),
                (a = !1),
                (c = !1),
                (p = !0);
              break;
            case s:
              (m || y) &&
                r(
                  n,
                  "BAD_PROP_ORDER",
                  `Anchors and tags must be after the ${n.source} indicator`
                ),
                b &&
                  r(
                    n,
                    "UNEXPECTED_TOKEN",
                    `Unexpected ${n.source} in ${t ?? "collection"}`
                  ),
                (b = n),
                (a = !1),
                (c = !1);
              break;
            case "comma":
              if (t) {
                g && r(n, "UNEXPECTED_TOKEN", `Unexpected , in ${t}`),
                  (g = n),
                  (a = !1),
                  (c = !1);
                break;
              }
            default:
              r(n, "UNEXPECTED_TOKEN", `Unexpected ${n.type} token`),
                (a = !1),
                (c = !1);
          }
        let w = e[e.length - 1],
          v = w ? w.offset + w.source.length : i;
        return (
          p &&
            n &&
            "space" !== n.type &&
            "newline" !== n.type &&
            "comma" !== n.type &&
            ("scalar" !== n.type || "" !== n.source) &&
            r(
              n.offset,
              "MISSING_CHAR",
              "Tags and anchors must be separated from the next token by white space"
            ),
          {
            comma: g,
            found: b,
            spaceBefore: l,
            comment: u,
            hasNewline: h,
            hasNewlineAfterProp: d,
            anchor: m,
            tag: y,
            end: v,
            start: k ?? v,
          }
        );
      }
      function tm(e) {
        if (!e) return null;
        switch (e.type) {
          case "alias":
          case "scalar":
          case "double-quoted-scalar":
          case "single-quoted-scalar":
            if (e.source.includes("\n")) return !0;
            if (e.end) {
              for (let t of e.end) if ("newline" === t.type) return !0;
            }
            return !1;
          case "flow-collection":
            for (let t of e.items) {
              for (let e of t.start) if ("newline" === e.type) return !0;
              if (t.sep) {
                for (let e of t.sep) if ("newline" === e.type) return !0;
              }
              if (tm(t.key) || tm(t.value)) return !0;
            }
            return !1;
          default:
            return !0;
        }
      }
      function ty(e, t, s) {
        if (t?.type === "flow-collection") {
          let n = t.end[0];
          n.indent === e &&
            ("]" === n.source || "}" === n.source) &&
            tm(t) &&
            s(
              n,
              "BAD_INDENT",
              "Flow end indicator should be more indented than parent",
              !0
            );
        }
      }
      function tg(e, t, s) {
        let { uniqueKeys: n } = e.options;
        if (!1 === n) return !1;
        let i =
          "function" == typeof n
            ? n
            : (t, s) =>
                t === s ||
                (g(t) &&
                  g(s) &&
                  t.value === s.value &&
                  !("<<" === t.value && e.schema.merge));
        return t.some((e) => i(e.key, s));
      }
      let tb = "All mapping items must start at the same column";
      function tk(e, t, s, n) {
        let i = "";
        if (e) {
          let r = !1,
            o = "";
          for (let l of e) {
            let { source: e, type: a } = l;
            switch (a) {
              case "space":
                r = !0;
                break;
              case "comment": {
                s &&
                  !r &&
                  n(
                    l,
                    "MISSING_CHAR",
                    "Comments must be separated from other tokens by white space characters"
                  );
                let t = e.substring(1) || " ";
                i ? (i += o + t) : (i = t), (o = "");
                break;
              }
              case "newline":
                i && (o += e), (r = !0);
                break;
              default:
                n(l, "UNEXPECTED_TOKEN", `Unexpected ${a} at node end`);
            }
            t += e.length;
          }
        }
        return { comment: i, offset: t };
      }
      let tw = "Block collections are not allowed within flow collections",
        tv = (e) => e && ("block-map" === e.type || "block-seq" === e.type);
      function tS(e, t, s, n, i, r) {
        let o =
            "block-map" === s.type
              ? (function (
                  { composeNode: e, composeEmptyNode: t },
                  s,
                  n,
                  i,
                  r
                ) {
                  let o = r?.nodeClass ?? eE,
                    l = new o(s.schema);
                  s.atRoot && (s.atRoot = !1);
                  let a = n.offset,
                    c = null;
                  for (let r of n.items) {
                    let { start: o, key: u, sep: f, value: h } = r,
                      d = tp(o, {
                        indicator: "explicit-key-ind",
                        next: u ?? f?.[0],
                        offset: a,
                        onError: i,
                        startOnNewline: !0,
                      }),
                      p = !d.found;
                    if (p) {
                      if (
                        (u &&
                          ("block-seq" === u.type
                            ? i(
                                a,
                                "BLOCK_AS_IMPLICIT_KEY",
                                "A block sequence may not be used as an implicit map key"
                              )
                            : "indent" in u &&
                              u.indent !== n.indent &&
                              i(a, "BAD_INDENT", tb)),
                        !d.anchor && !d.tag && !f)
                      ) {
                        (c = d.end),
                          d.comment &&
                            (l.comment
                              ? (l.comment += "\n" + d.comment)
                              : (l.comment = d.comment));
                        continue;
                      }
                      (d.hasNewlineAfterProp || tm(u)) &&
                        i(
                          u ?? o[o.length - 1],
                          "MULTILINE_IMPLICIT_KEY",
                          "Implicit keys need to be on a single line"
                        );
                    } else
                      d.found?.indent !== n.indent && i(a, "BAD_INDENT", tb);
                    let m = d.end,
                      y = u ? e(s, u, d, i) : t(s, m, o, null, d, i);
                    s.schema.compat && ty(n.indent, u, i),
                      tg(s, l.items, y) &&
                        i(m, "DUPLICATE_KEY", "Map keys must be unique");
                    let g = tp(f ?? [], {
                      indicator: "map-value-ind",
                      next: h,
                      offset: y.range[2],
                      onError: i,
                      startOnNewline: !u || "block-scalar" === u.type,
                    });
                    if (((a = g.end), g.found)) {
                      p &&
                        (h?.type !== "block-map" ||
                          g.hasNewline ||
                          i(
                            a,
                            "BLOCK_AS_IMPLICIT_KEY",
                            "Nested mappings are not allowed in compact mappings"
                          ),
                        s.options.strict &&
                          d.start < g.found.offset - 1024 &&
                          i(
                            y.range,
                            "KEY_OVER_1024_CHARS",
                            "The : indicator must be at most 1024 chars after the start of an implicit block mapping key"
                          ));
                      let o = h ? e(s, h, g, i) : t(s, a, f, null, g, i);
                      s.schema.compat && ty(n.indent, h, i), (a = o.range[2]);
                      let c = new eg(y, o);
                      s.options.keepSourceTokens && (c.srcToken = r),
                        l.items.push(c);
                    } else {
                      p &&
                        i(
                          y.range,
                          "MISSING_CHAR",
                          "Implicit map keys need to be followed by map values"
                        ),
                        g.comment &&
                          (y.comment
                            ? (y.comment += "\n" + g.comment)
                            : (y.comment = g.comment));
                      let e = new eg(y);
                      s.options.keepSourceTokens && (e.srcToken = r),
                        l.items.push(e);
                    }
                  }
                  return (
                    c &&
                      c < a &&
                      i(c, "IMPOSSIBLE", "Map comment with trailing content"),
                    (l.range = [n.offset, a, c ?? a]),
                    l
                  );
                })(e, t, s, n, r)
              : "block-seq" === s.type
              ? (function (
                  { composeNode: e, composeEmptyNode: t },
                  s,
                  n,
                  i,
                  r
                ) {
                  let o = r?.nodeClass ?? eO,
                    l = new o(s.schema);
                  s.atRoot && (s.atRoot = !1);
                  let a = n.offset,
                    c = null;
                  for (let { start: r, value: o } of n.items) {
                    let u = tp(r, {
                      indicator: "seq-item-ind",
                      next: o,
                      offset: a,
                      onError: i,
                      startOnNewline: !0,
                    });
                    if (!u.found) {
                      if (u.anchor || u.tag || o)
                        o && "block-seq" === o.type
                          ? i(
                              u.end,
                              "BAD_INDENT",
                              "All sequence items must start at the same column"
                            )
                          : i(
                              a,
                              "MISSING_CHAR",
                              "Sequence item without - indicator"
                            );
                      else {
                        (c = u.end), u.comment && (l.comment = u.comment);
                        continue;
                      }
                    }
                    let f = o ? e(s, o, u, i) : t(s, u.end, r, null, u, i);
                    s.schema.compat && ty(n.indent, o, i),
                      (a = f.range[2]),
                      l.items.push(f);
                  }
                  return (l.range = [n.offset, a, c ?? a]), l;
                })(e, t, s, n, r)
              : (function (
                  { composeNode: e, composeEmptyNode: t },
                  s,
                  n,
                  i,
                  r
                ) {
                  let o = "{" === n.start.source,
                    l = o ? "flow map" : "flow sequence",
                    a = r?.nodeClass ?? (o ? eE : eO),
                    c = new a(s.schema);
                  c.flow = !0;
                  let u = s.atRoot;
                  u && (s.atRoot = !1);
                  let f = n.offset + n.start.source.length;
                  for (let r = 0; r < n.items.length; ++r) {
                    let a = n.items[r],
                      { start: u, key: h, sep: d, value: p } = a,
                      m = tp(u, {
                        flow: l,
                        indicator: "explicit-key-ind",
                        next: h ?? d?.[0],
                        offset: f,
                        onError: i,
                        startOnNewline: !1,
                      });
                    if (!m.found) {
                      if (!m.anchor && !m.tag && !d && !p) {
                        0 === r && m.comma
                          ? i(
                              m.comma,
                              "UNEXPECTED_TOKEN",
                              `Unexpected , in ${l}`
                            )
                          : r < n.items.length - 1 &&
                            i(
                              m.start,
                              "UNEXPECTED_TOKEN",
                              `Unexpected empty item in ${l}`
                            ),
                          m.comment &&
                            (c.comment
                              ? (c.comment += "\n" + m.comment)
                              : (c.comment = m.comment)),
                          (f = m.end);
                        continue;
                      }
                      !o &&
                        s.options.strict &&
                        tm(h) &&
                        i(
                          h,
                          "MULTILINE_IMPLICIT_KEY",
                          "Implicit keys of flow sequence pairs need to be on a single line"
                        );
                    }
                    if (0 === r)
                      m.comma &&
                        i(m.comma, "UNEXPECTED_TOKEN", `Unexpected , in ${l}`);
                    else if (
                      (m.comma ||
                        i(
                          m.start,
                          "MISSING_CHAR",
                          `Missing , between ${l} items`
                        ),
                      m.comment)
                    ) {
                      let e = "";
                      e: for (let t of u)
                        switch (t.type) {
                          case "comma":
                          case "space":
                            break;
                          case "comment":
                            e = t.source.substring(1);
                            break e;
                          default:
                            break e;
                        }
                      if (e) {
                        let t = c.items[c.items.length - 1];
                        y(t) && (t = t.value ?? t.key),
                          t.comment ? (t.comment += "\n" + e) : (t.comment = e),
                          (m.comment = m.comment.substring(e.length + 1));
                      }
                    }
                    if (o || d || m.found) {
                      let n = m.end,
                        r = h ? e(s, h, m, i) : t(s, n, u, null, m, i);
                      tv(h) && i(r.range, "BLOCK_IN_FLOW", tw);
                      let y = tp(d ?? [], {
                        flow: l,
                        indicator: "map-value-ind",
                        next: p,
                        offset: r.range[2],
                        onError: i,
                        startOnNewline: !1,
                      });
                      if (y.found) {
                        if (!o && !m.found && s.options.strict) {
                          if (d)
                            for (let e of d) {
                              if (e === y.found) break;
                              if ("newline" === e.type) {
                                i(
                                  e,
                                  "MULTILINE_IMPLICIT_KEY",
                                  "Implicit keys of flow sequence pairs need to be on a single line"
                                );
                                break;
                              }
                            }
                          m.start < y.found.offset - 1024 &&
                            i(
                              y.found,
                              "KEY_OVER_1024_CHARS",
                              "The : indicator must be at most 1024 chars after the start of an implicit flow sequence key"
                            );
                        }
                      } else
                        p &&
                          ("source" in p && p.source && ":" === p.source[0]
                            ? i(
                                p,
                                "MISSING_CHAR",
                                `Missing space after : in ${l}`
                              )
                            : i(
                                y.start,
                                "MISSING_CHAR",
                                `Missing , or : between ${l} items`
                              ));
                      let g = p
                        ? e(s, p, y, i)
                        : y.found
                        ? t(s, y.end, d, null, y, i)
                        : null;
                      g
                        ? tv(p) && i(g.range, "BLOCK_IN_FLOW", tw)
                        : y.comment &&
                          (r.comment
                            ? (r.comment += "\n" + y.comment)
                            : (r.comment = y.comment));
                      let b = new eg(r, g);
                      if ((s.options.keepSourceTokens && (b.srcToken = a), o))
                        tg(s, c.items, r) &&
                          i(n, "DUPLICATE_KEY", "Map keys must be unique"),
                          c.items.push(b);
                      else {
                        let e = new eE(s.schema);
                        (e.flow = !0), e.items.push(b), c.items.push(e);
                      }
                      f = g ? g.range[2] : y.end;
                    } else {
                      let n = p ? e(s, p, m, i) : t(s, m.end, d, null, m, i);
                      c.items.push(n),
                        (f = n.range[2]),
                        tv(p) && i(n.range, "BLOCK_IN_FLOW", tw);
                    }
                  }
                  let h = o ? "}" : "]",
                    [d, ...p] = n.end,
                    m = f;
                  if (d && d.source === h) m = d.offset + d.source.length;
                  else {
                    let e = l[0].toUpperCase() + l.substring(1),
                      t = u
                        ? `${e} must end with a ${h}`
                        : `${e} in block collection must be sufficiently indented and end with a ${h}`;
                    i(f, u ? "MISSING_CHAR" : "BAD_INDENT", t),
                      d && 1 !== d.source.length && p.unshift(d);
                  }
                  if (p.length > 0) {
                    let e = tk(p, m, s.options.strict, i);
                    e.comment &&
                      (c.comment
                        ? (c.comment += "\n" + e.comment)
                        : (c.comment = e.comment)),
                      (c.range = [n.offset, m, e.offset]);
                  } else c.range = [n.offset, m, m];
                  return c;
                })(e, t, s, n, r),
          l = o.constructor;
        return "!" === i || i === l.tagName
          ? ((o.tag = l.tagName), o)
          : (i && (o.tag = i), o);
      }
      function tE(e, t, s) {
        let n = e.offset,
          i = (function ({ offset: e, props: t }, s, n) {
            if ("block-scalar-header" !== t[0].type)
              return (
                n(t[0], "IMPOSSIBLE", "Block scalar header not found"), null
              );
            let { source: i } = t[0],
              r = i[0],
              o = 0,
              l = "",
              a = -1;
            for (let t = 1; t < i.length; ++t) {
              let s = i[t];
              if (l || ("-" !== s && "+" !== s)) {
                let n = Number(s);
                !o && n ? (o = n) : -1 === a && (a = e + t);
              } else l = s;
            }
            -1 !== a &&
              n(
                a,
                "UNEXPECTED_TOKEN",
                `Block scalar header includes extra characters: ${i}`
              );
            let c = !1,
              u = "",
              f = i.length;
            for (let e = 1; e < t.length; ++e) {
              let i = t[e];
              switch (i.type) {
                case "space":
                  c = !0;
                case "newline":
                  f += i.source.length;
                  break;
                case "comment":
                  s &&
                    !c &&
                    n(
                      i,
                      "MISSING_CHAR",
                      "Comments must be separated from other tokens by white space characters"
                    ),
                    (f += i.source.length),
                    (u = i.source.substring(1));
                  break;
                case "error":
                  n(i, "UNEXPECTED_TOKEN", i.message), (f += i.source.length);
                  break;
                default: {
                  let e = `Unexpected token in block scalar header: ${i.type}`;
                  n(i, "UNEXPECTED_TOKEN", e);
                  let t = i.source;
                  t && "string" == typeof t && (f += t.length);
                }
              }
            }
            return { mode: r, indent: o, chomp: l, comment: u, length: f };
          })(e, t, s);
        if (!i) return { value: "", type: null, comment: "", range: [n, n, n] };
        let r = ">" === i.mode ? F.BLOCK_FOLDED : F.BLOCK_LITERAL,
          o = e.source
            ? (function (e) {
                let t = e.split(/\n( *)/),
                  s = t[0],
                  n = s.match(/^( *)/),
                  i = n?.[1] ? [n[1], s.slice(n[1].length)] : ["", s],
                  r = [i];
                for (let e = 1; e < t.length; e += 2) r.push([t[e], t[e + 1]]);
                return r;
              })(e.source)
            : [],
          l = o.length;
        for (let e = o.length - 1; e >= 0; --e) {
          let t = o[e][1];
          if ("" === t || "\r" === t) l = e;
          else break;
        }
        if (0 === l) {
          let t =
              "+" === i.chomp && o.length > 0
                ? "\n".repeat(Math.max(1, o.length - 1))
                : "",
            s = n + i.length;
          return (
            e.source && (s += e.source.length),
            { value: t, type: r, comment: i.comment, range: [n, s, s] }
          );
        }
        let a = e.indent + i.indent,
          c = e.offset + i.length,
          u = 0;
        for (let e = 0; e < l; ++e) {
          let [t, n] = o[e];
          if ("" === n || "\r" === n)
            0 === i.indent && t.length > a && (a = t.length);
          else {
            t.length < a &&
              s(
                c + t.length,
                "MISSING_CHAR",
                "Block scalars with more-indented leading empty lines must use an explicit indentation indicator"
              ),
              0 === i.indent && (a = t.length),
              (u = e);
            break;
          }
          c += t.length + n.length + 1;
        }
        for (let e = o.length - 1; e >= l; --e)
          o[e][0].length > a && (l = e + 1);
        let f = "",
          h = "",
          d = !1;
        for (let e = 0; e < u; ++e) f += o[e][0].slice(a) + "\n";
        for (let e = u; e < l; ++e) {
          let [t, n] = o[e];
          c += t.length + n.length + 1;
          let l = "\r" === n[n.length - 1];
          if ((l && (n = n.slice(0, -1)), n && t.length < a)) {
            let e = i.indent ? "explicit indentation indicator" : "first line",
              r = `Block scalar lines must not be less indented than their ${e}`;
            s(c - n.length - (l ? 2 : 1), "BAD_INDENT", r), (t = "");
          }
          r === F.BLOCK_LITERAL
            ? ((f += h + t.slice(a) + n), (h = "\n"))
            : t.length > a || "	" === n[0]
            ? (" " === h ? (h = "\n") : d || "\n" !== h || (h = "\n\n"),
              (f += h + t.slice(a) + n),
              (h = "\n"),
              (d = !0))
            : "" === n
            ? "\n" === h
              ? (f += "\n")
              : (h = "\n")
            : ((f += h + n), (h = " "), (d = !1));
        }
        switch (i.chomp) {
          case "-":
            break;
          case "+":
            for (let e = l; e < o.length; ++e) f += "\n" + o[e][0].slice(a);
            "\n" !== f[f.length - 1] && (f += "\n");
            break;
          default:
            f += "\n";
        }
        let p = n + i.length + e.source.length;
        return { value: f, type: r, comment: i.comment, range: [n, p, p] };
      }
      function tN(e, t, s) {
        let n, i;
        let { offset: r, type: o, source: l, end: a } = e,
          c = (e, t, n) => s(r + e, t, n);
        switch (o) {
          case "scalar":
            (n = F.PLAIN),
              (i = (function (e, t) {
                let s = "";
                switch (e[0]) {
                  case "	":
                    s = "a tab character";
                    break;
                  case ",":
                    s = "flow indicator character ,";
                    break;
                  case "%":
                    s = "directive indicator character %";
                    break;
                  case "|":
                  case ">":
                    s = `block scalar indicator ${e[0]}`;
                    break;
                  case "@":
                  case "`":
                    s = `reserved character ${e[0]}`;
                }
                return (
                  s &&
                    t(
                      0,
                      "BAD_SCALAR_START",
                      `Plain value cannot start with ${s}`
                    ),
                  tO(e)
                );
              })(l, c));
            break;
          case "single-quoted-scalar":
            (n = F.QUOTE_SINGLE),
              ("'" !== l[l.length - 1] || 1 === l.length) &&
                c(l.length, "MISSING_CHAR", "Missing closing 'quote"),
              (i = tO(l.slice(1, -1)).replace(/''/g, "'"));
            break;
          case "double-quoted-scalar":
            (n = F.QUOTE_DOUBLE),
              (i = (function (e, t) {
                let s = "";
                for (let n = 1; n < e.length - 1; ++n) {
                  let i = e[n];
                  if ("\r" !== i || "\n" !== e[n + 1]) {
                    if ("\n" === i) {
                      let { fold: t, offset: i } = (function (e, t) {
                        let s = "",
                          n = e[t + 1];
                        for (
                          ;
                          (" " === n || "	" === n || "\n" === n || "\r" === n) &&
                          ("\r" !== n || "\n" === e[t + 2]);

                        )
                          "\n" === n && (s += "\n"), (t += 1), (n = e[t + 1]);
                        return s || (s = " "), { fold: s, offset: t };
                      })(e, n);
                      (s += t), (n = i);
                    } else if ("\\" === i) {
                      let i = e[++n],
                        r = tA[i];
                      if (r) s += r;
                      else if ("\n" === i)
                        for (i = e[n + 1]; " " === i || "	" === i; )
                          i = e[++n + 1];
                      else if ("\r" === i && "\n" === e[n + 1])
                        for (i = e[++n + 1]; " " === i || "	" === i; )
                          i = e[++n + 1];
                      else if ("x" === i || "u" === i || "U" === i) {
                        let r = { x: 2, u: 4, U: 8 }[i];
                        (s += (function (e, t, s, n) {
                          let i = e.substr(t, s),
                            r = i.length === s && /^[0-9a-fA-F]+$/.test(i),
                            o = r ? parseInt(i, 16) : NaN;
                          if (isNaN(o)) {
                            let i = e.substr(t - 2, s + 2);
                            return (
                              n(
                                t - 2,
                                "BAD_DQ_ESCAPE",
                                `Invalid escape sequence ${i}`
                              ),
                              i
                            );
                          }
                          return String.fromCodePoint(o);
                        })(e, n + 1, r, t)),
                          (n += r);
                      } else {
                        let i = e.substr(n - 1, 2);
                        t(
                          n - 1,
                          "BAD_DQ_ESCAPE",
                          `Invalid escape sequence ${i}`
                        ),
                          (s += i);
                      }
                    } else if (" " === i || "	" === i) {
                      let t = n,
                        r = e[n + 1];
                      for (; " " === r || "	" === r; ) r = e[++n + 1];
                      "\n" === r ||
                        ("\r" === r && "\n" === e[n + 2]) ||
                        (s += n > t ? e.slice(t, n + 1) : i);
                    } else s += i;
                  }
                }
                return (
                  ('"' !== e[e.length - 1] || 1 === e.length) &&
                    t(e.length, "MISSING_CHAR", 'Missing closing "quote'),
                  s
                );
              })(l, c));
            break;
          default:
            return (
              s(
                e,
                "UNEXPECTED_TOKEN",
                `Expected a flow scalar value, but found: ${o}`
              ),
              {
                value: "",
                type: null,
                comment: "",
                range: [r, r + l.length, r + l.length],
              }
            );
        }
        let u = r + l.length,
          f = tk(a, u, t, s);
        return {
          value: i,
          type: n,
          comment: f.comment,
          range: [r, u, f.offset],
        };
      }
      function tO(e) {
        let t, s;
        try {
          (t = RegExp("(.*?)(?<![ 	])[ 	]*\r?\n", "sy")),
            (s = RegExp("[ 	]*(.*?)(?:(?<![ 	])[ 	]*)?\r?\n", "sy"));
        } catch (e) {
          (t = /(.*?)[ \t]*\r?\n/sy), (s = /[ \t]*(.*?)[ \t]*\r?\n/sy);
        }
        let n = t.exec(e);
        if (!n) return e;
        let i = n[1],
          r = " ",
          o = t.lastIndex;
        for (s.lastIndex = o; (n = s.exec(e)); )
          "" === n[1]
            ? "\n" === r
              ? (i += r)
              : (r = "\n")
            : ((i += r + n[1]), (r = " ")),
            (o = s.lastIndex);
        let l = /[ \t]*(.*)/sy;
        return (l.lastIndex = o), (n = l.exec(e)), i + r + (n?.[1] ?? "");
      }
      let tA = {
        0: "\x00",
        a: "\x07",
        b: "\b",
        e: "\x1b",
        f: "\f",
        n: "\n",
        r: "\r",
        t: "	",
        v: "\v",
        N: "\x85",
        _: "\xa0",
        L: "\u2028",
        P: "\u2029",
        " ": " ",
        '"': '"',
        "/": "/",
        "\\": "\\",
        "	": "	",
      };
      function tT(e, t, s, n) {
        let i;
        let {
            value: r,
            type: o,
            comment: l,
            range: a,
          } = "block-scalar" === t.type
            ? tE(t, e.options.strict, n)
            : tN(t, e.options.strict, n),
          c = s
            ? e.directives.tagName(s.source, (e) =>
                n(s, "TAG_RESOLVE_FAILED", e)
              )
            : null,
          f =
            s && c
              ? (function (e, t, s, n, i) {
                  if ("!" === s) return e[u];
                  let r = [];
                  for (let t of e.tags)
                    if (!t.collection && t.tag === s) {
                      if (!t.default || !t.test) return t;
                      r.push(t);
                    }
                  for (let e of r) if (e.test?.test(t)) return e;
                  let o = e.knownTags[s];
                  return o && !o.collection
                    ? (e.tags.push(
                        Object.assign({}, o, { default: !1, test: void 0 })
                      ),
                      o)
                    : (i(
                        n,
                        "TAG_RESOLVE_FAILED",
                        `Unresolved tag: ${s}`,
                        "tag:yaml.org,2002:str" !== s
                      ),
                      e[u]);
                })(e.schema, r, c, s, n)
              : "scalar" === t.type
              ? (function ({ directives: e, schema: t }, s, n, i) {
                  let r =
                    t.tags.find((e) => e.default && e.test?.test(s)) || t[u];
                  if (t.compat) {
                    let o =
                      t.compat.find((e) => e.default && e.test?.test(s)) ??
                      t[u];
                    if (r.tag !== o.tag) {
                      let t = e.tagString(r.tag),
                        s = e.tagString(o.tag),
                        l = `Value may be parsed as either ${t} or ${s}`;
                      i(n, "TAG_RESOLVE_FAILED", l, !0);
                    }
                  }
                  return r;
                })(e, r, t, n)
              : e.schema[u];
        try {
          let o = f.resolve(
            r,
            (e) => n(s ?? t, "TAG_RESOLVE_FAILED", e),
            e.options
          );
          i = g(o) ? o : new F(o);
        } catch (o) {
          let e = o instanceof Error ? o.message : String(o);
          n(s ?? t, "TAG_RESOLVE_FAILED", e), (i = new F(r));
        }
        return (
          (i.range = a),
          (i.source = r),
          o && (i.type = o),
          c && (i.tag = c),
          f.format && (i.format = f.format),
          l && (i.comment = l),
          i
        );
      }
      let tI = { composeNode: tL, composeEmptyNode: tx };
      function tL(e, t, s, n) {
        let i;
        let { spaceBefore: r, comment: o, anchor: l, tag: a } = s,
          c = !0;
        switch (t.type) {
          case "alias":
            (i = (function (
              { options: e },
              { offset: t, source: s, end: n },
              i
            ) {
              let r = new U(s.substring(1));
              "" === r.source &&
                i(t, "BAD_ALIAS", "Alias cannot be an empty string"),
                r.source.endsWith(":") &&
                  i(
                    t + s.length - 1,
                    "BAD_ALIAS",
                    "Alias ending in : is ambiguous",
                    !0
                  );
              let o = t + s.length,
                l = tk(n, o, e.strict, i);
              return (
                (r.range = [t, o, l.offset]),
                l.comment && (r.comment = l.comment),
                r
              );
            })(e, t, n)),
              (l || a) &&
                n(
                  t,
                  "ALIAS_PROPS",
                  "An alias node must not specify any properties"
                );
            break;
          case "scalar":
          case "single-quoted-scalar":
          case "double-quoted-scalar":
          case "block-scalar":
            (i = tT(e, t, a, n)), l && (i.anchor = l.source.substring(1));
            break;
          case "block-map":
          case "block-seq":
          case "flow-collection":
            (i = (function (e, t, s, n, i) {
              let r = n
                  ? t.directives.tagName(n.source, (e) =>
                      i(n, "TAG_RESOLVE_FAILED", e)
                    )
                  : null,
                o =
                  "block-map" === s.type
                    ? "map"
                    : "block-seq" === s.type
                    ? "seq"
                    : "{" === s.start.source
                    ? "map"
                    : "seq";
              if (
                !n ||
                !r ||
                "!" === r ||
                (r === eE.tagName && "map" === o) ||
                (r === eO.tagName && "seq" === o) ||
                !o
              )
                return tS(e, t, s, i, r);
              let l = t.schema.tags.find(
                (e) => e.tag === r && e.collection === o
              );
              if (!l) {
                let a = t.schema.knownTags[r];
                if (!a || a.collection !== o)
                  return (
                    a?.collection
                      ? i(
                          n,
                          "BAD_COLLECTION_TYPE",
                          `${a.tag} used for ${o} collection, but expects ${a.collection}`,
                          !0
                        )
                      : i(n, "TAG_RESOLVE_FAILED", `Unresolved tag: ${r}`, !0),
                    tS(e, t, s, i, r)
                  );
                t.schema.tags.push(Object.assign({}, a, { default: !1 })),
                  (l = a);
              }
              let a = tS(e, t, s, i, r, l),
                c =
                  l.resolve?.(
                    a,
                    (e) => i(n, "TAG_RESOLVE_FAILED", e),
                    t.options
                  ) ?? a,
                u = w(c) ? c : new F(c);
              return (
                (u.range = a.range),
                (u.tag = r),
                l?.format && (u.format = l.format),
                u
              );
            })(tI, e, t, a, n)),
              l && (i.anchor = l.source.substring(1));
            break;
          default: {
            let r =
              "error" === t.type
                ? t.message
                : `Unsupported token (type: ${t.type})`;
            n(t, "UNEXPECTED_TOKEN", r),
              (i = tx(e, t.offset, void 0, null, s, n)),
              (c = !1);
          }
        }
        return (
          l &&
            "" === i.anchor &&
            n(l, "BAD_ALIAS", "Anchor cannot be an empty string"),
          r && (i.spaceBefore = !0),
          o &&
            ("scalar" === t.type && "" === t.source
              ? (i.comment = o)
              : (i.commentBefore = o)),
          e.options.keepSourceTokens && c && (i.srcToken = t),
          i
        );
      }
      function tx(
        e,
        t,
        s,
        n,
        { spaceBefore: i, comment: r, anchor: o, tag: l, end: a },
        c
      ) {
        let u = {
            type: "scalar",
            offset: (function (e, t, s) {
              if (t) {
                null === s && (s = t.length);
                for (let n = s - 1; n >= 0; --n) {
                  let s = t[n];
                  switch (s.type) {
                    case "space":
                    case "comment":
                    case "newline":
                      e -= s.source.length;
                      continue;
                  }
                  for (s = t[++n]; s?.type === "space"; )
                    (e += s.source.length), (s = t[++n]);
                  break;
                }
              }
              return e;
            })(t, s, n),
            indent: -1,
            source: "",
          },
          f = tT(e, u, l, c);
        return (
          o &&
            ((f.anchor = o.source.substring(1)),
            "" === f.anchor &&
              c(o, "BAD_ALIAS", "Anchor cannot be an empty string")),
          i && (f.spaceBefore = !0),
          r && ((f.comment = r), (f.range[2] = a)),
          f
        );
      }
      function t$(e) {
        if ("number" == typeof e) return [e, e + 1];
        if (Array.isArray(e)) return 2 === e.length ? e : [e[0], e[1]];
        let { offset: t, source: s } = e;
        return [t, t + ("string" == typeof s ? s.length : 1)];
      }
      function tC(e) {
        let t = "",
          s = !1,
          n = !1;
        for (let i = 0; i < e.length; ++i) {
          let r = e[i];
          switch (r[0]) {
            case "#":
              (t +=
                ("" === t ? "" : n ? "\n\n" : "\n") + (r.substring(1) || " ")),
                (s = !0),
                (n = !1);
              break;
            case "%":
              e[i + 1]?.[0] !== "#" && (i += 1), (s = !1);
              break;
            default:
              s || (n = !0), (s = !1);
          }
        }
        return { comment: t, afterEmptyLine: n };
      }
      class t_ {
        constructor(e = {}) {
          (this.doc = null),
            (this.atDirectives = !1),
            (this.prelude = []),
            (this.errors = []),
            (this.warnings = []),
            (this.onError = (e, t, s, n) => {
              let i = t$(e);
              n
                ? this.warnings.push(new th(i, t, s))
                : this.errors.push(new tf(i, t, s));
            }),
            (this.directives = new B({ version: e.version || "1.2" })),
            (this.options = e);
        }
        decorate(e, t) {
          let { comment: s, afterEmptyLine: n } = tC(this.prelude);
          if (s) {
            let i = e.contents;
            if (t)
              e.comment = e.comment
                ? `${e.comment}
${s}`
                : s;
            else if (n || e.directives.docStart || !i) e.commentBefore = s;
            else if (k(i) && !i.flow && i.items.length > 0) {
              let e = i.items[0];
              y(e) && (e = e.key);
              let t = e.commentBefore;
              e.commentBefore = t
                ? `${s}
${t}`
                : s;
            } else {
              let e = i.commentBefore;
              i.commentBefore = e
                ? `${s}
${e}`
                : s;
            }
          }
          t
            ? (Array.prototype.push.apply(e.errors, this.errors),
              Array.prototype.push.apply(e.warnings, this.warnings))
            : ((e.errors = this.errors), (e.warnings = this.warnings)),
            (this.prelude = []),
            (this.errors = []),
            (this.warnings = []);
        }
        streamInfo() {
          return {
            comment: tC(this.prelude).comment,
            directives: this.directives,
            errors: this.errors,
            warnings: this.warnings,
          };
        }
        *compose(e, t = !1, s = -1) {
          for (let t of e) yield* this.next(t);
          yield* this.end(t, s);
        }
        *next(e) {
          switch (e.type) {
            case "directive":
              this.directives.add(e.source, (t, s, n) => {
                let i = t$(e);
                (i[0] += t), this.onError(i, "BAD_DIRECTIVE", s, n);
              }),
                this.prelude.push(e.source),
                (this.atDirectives = !0);
              break;
            case "document": {
              let t = (function (
                e,
                t,
                { offset: s, start: n, value: i, end: r },
                o
              ) {
                let l = Object.assign({ _directives: t }, e),
                  a = new ta(void 0, l),
                  c = {
                    atRoot: !0,
                    directives: a.directives,
                    options: a.options,
                    schema: a.schema,
                  },
                  u = tp(n, {
                    indicator: "doc-start",
                    next: i ?? r?.[0],
                    offset: s,
                    onError: o,
                    startOnNewline: !0,
                  });
                u.found &&
                  ((a.directives.docStart = !0),
                  i &&
                    ("block-map" === i.type || "block-seq" === i.type) &&
                    !u.hasNewline &&
                    o(
                      u.end,
                      "MISSING_CHAR",
                      "Block collection cannot start on same line with directives-end marker"
                    )),
                  (a.contents = i
                    ? tL(c, i, u, o)
                    : tx(c, u.end, n, null, u, o));
                let f = a.contents.range[2],
                  h = tk(r, f, !1, o);
                return (
                  h.comment && (a.comment = h.comment),
                  (a.range = [s, f, h.offset]),
                  a
                );
              })(this.options, this.directives, e, this.onError);
              this.atDirectives &&
                !t.directives.docStart &&
                this.onError(
                  e,
                  "MISSING_CHAR",
                  "Missing directives-end/doc-start indicator line"
                ),
                this.decorate(t, !1),
                this.doc && (yield this.doc),
                (this.doc = t),
                (this.atDirectives = !1);
              break;
            }
            case "byte-order-mark":
            case "space":
              break;
            case "comment":
            case "newline":
              this.prelude.push(e.source);
              break;
            case "error": {
              let t = e.source
                  ? `${e.message}: ${JSON.stringify(e.source)}`
                  : e.message,
                s = new tf(t$(e), "UNEXPECTED_TOKEN", t);
              this.atDirectives || !this.doc
                ? this.errors.push(s)
                : this.doc.errors.push(s);
              break;
            }
            case "doc-end": {
              if (!this.doc) {
                this.errors.push(
                  new tf(
                    t$(e),
                    "UNEXPECTED_TOKEN",
                    "Unexpected doc-end without preceding document"
                  )
                );
                break;
              }
              this.doc.directives.docEnd = !0;
              let t = tk(
                e.end,
                e.offset + e.source.length,
                this.doc.options.strict,
                this.onError
              );
              if ((this.decorate(this.doc, !0), t.comment)) {
                let e = this.doc.comment;
                this.doc.comment = e
                  ? `${e}
${t.comment}`
                  : t.comment;
              }
              this.doc.range[2] = t.offset;
              break;
            }
            default:
              this.errors.push(
                new tf(t$(e), "UNEXPECTED_TOKEN", `Unsupported token ${e.type}`)
              );
          }
        }
        *end(e = !1, t = -1) {
          if (this.doc)
            this.decorate(this.doc, !0), yield this.doc, (this.doc = null);
          else if (e) {
            let e = Object.assign(
                { _directives: this.directives },
                this.options
              ),
              s = new ta(void 0, e);
            this.atDirectives &&
              this.onError(
                t,
                "MISSING_CHAR",
                "Missing directives-end indicator line"
              ),
              (s.range = [0, t, t]),
              this.decorate(s, !1),
              yield s;
          }
        }
      }
      function tB(e, t = !0, s) {
        if (e) {
          let n = (e, t, n) => {
            let i =
              "number" == typeof e ? e : Array.isArray(e) ? e[0] : e.offset;
            if (s) s(i, t, n);
            else throw new tf([i, i + 1], t, n);
          };
          switch (e.type) {
            case "scalar":
            case "single-quoted-scalar":
            case "double-quoted-scalar":
              return tN(e, t, n);
            case "block-scalar":
              return tE(e, t, n);
          }
        }
        return null;
      }
      function tM(e, t) {
        let {
            implicitKey: s = !1,
            indent: n,
            inFlow: i = !1,
            offset: r = -1,
            type: o = "PLAIN",
          } = t,
          l = ea(
            { type: o, value: e },
            {
              implicitKey: s,
              indent: n > 0 ? " ".repeat(n) : "",
              inFlow: i,
              options: { blockQuote: !0, lineWidth: -1 },
            }
          ),
          a = t.end ?? [
            { type: "newline", offset: -1, indent: n, source: "\n" },
          ];
        switch (l[0]) {
          case "|":
          case ">": {
            let e = l.indexOf("\n"),
              t = l.substring(0, e),
              s = l.substring(e + 1) + "\n",
              i = [
                {
                  type: "block-scalar-header",
                  offset: r,
                  indent: n,
                  source: t,
                },
              ];
            return (
              tD(i, a) ||
                i.push({
                  type: "newline",
                  offset: -1,
                  indent: n,
                  source: "\n",
                }),
              {
                type: "block-scalar",
                offset: r,
                indent: n,
                props: i,
                source: s,
              }
            );
          }
          case '"':
            return {
              type: "double-quoted-scalar",
              offset: r,
              indent: n,
              source: l,
              end: a,
            };
          case "'":
            return {
              type: "single-quoted-scalar",
              offset: r,
              indent: n,
              source: l,
              end: a,
            };
          default:
            return { type: "scalar", offset: r, indent: n, source: l, end: a };
        }
      }
      function tj(e, t, s = {}) {
        let {
            afterKey: n = !1,
            implicitKey: i = !1,
            inFlow: r = !1,
            type: o,
          } = s,
          l = "indent" in e ? e.indent : null;
        if ((n && "number" == typeof l && (l += 2), !o))
          switch (e.type) {
            case "single-quoted-scalar":
              o = "QUOTE_SINGLE";
              break;
            case "double-quoted-scalar":
              o = "QUOTE_DOUBLE";
              break;
            case "block-scalar": {
              let t = e.props[0];
              if ("block-scalar-header" !== t.type)
                throw Error("Invalid block scalar header");
              o = ">" === t.source[0] ? "BLOCK_FOLDED" : "BLOCK_LITERAL";
              break;
            }
            default:
              o = "PLAIN";
          }
        let a = ea(
          { type: o, value: t },
          {
            implicitKey: i || null === l,
            indent: null !== l && l > 0 ? " ".repeat(l) : "",
            inFlow: r,
            options: { blockQuote: !0, lineWidth: -1 },
          }
        );
        switch (a[0]) {
          case "|":
          case ">":
            !(function (e, t) {
              let s = t.indexOf("\n"),
                n = t.substring(0, s),
                i = t.substring(s + 1) + "\n";
              if ("block-scalar" === e.type) {
                let t = e.props[0];
                if ("block-scalar-header" !== t.type)
                  throw Error("Invalid block scalar header");
                (t.source = n), (e.source = i);
              } else {
                let { offset: t } = e,
                  s = "indent" in e ? e.indent : -1,
                  r = [
                    {
                      type: "block-scalar-header",
                      offset: t,
                      indent: s,
                      source: n,
                    },
                  ];
                for (let t of (tD(r, "end" in e ? e.end : void 0) ||
                  r.push({
                    type: "newline",
                    offset: -1,
                    indent: s,
                    source: "\n",
                  }),
                Object.keys(e)))
                  "type" !== t && "offset" !== t && delete e[t];
                Object.assign(e, {
                  type: "block-scalar",
                  indent: s,
                  props: r,
                  source: i,
                });
              }
            })(e, a);
            break;
          case '"':
            tq(e, a, "double-quoted-scalar");
            break;
          case "'":
            tq(e, a, "single-quoted-scalar");
            break;
          default:
            tq(e, a, "scalar");
        }
      }
      function tD(e, t) {
        if (t)
          for (let s of t)
            switch (s.type) {
              case "space":
              case "comment":
                e.push(s);
                break;
              case "newline":
                return e.push(s), !0;
            }
        return !1;
      }
      function tq(e, t, s) {
        switch (e.type) {
          case "scalar":
          case "double-quoted-scalar":
          case "single-quoted-scalar":
            (e.type = s), (e.source = t);
            break;
          case "block-scalar": {
            let n = e.props.slice(1),
              i = t.length;
            for (let t of ("block-scalar-header" === e.props[0].type &&
              (i -= e.props[0].source.length),
            n))
              t.offset += i;
            delete e.props, Object.assign(e, { type: s, source: t, end: n });
            break;
          }
          case "block-map":
          case "block-seq": {
            let n = e.offset + t.length,
              i = {
                type: "newline",
                offset: n,
                indent: e.indent,
                source: "\n",
              };
            delete e.items, Object.assign(e, { type: s, source: t, end: [i] });
            break;
          }
          default: {
            let n = "indent" in e ? e.indent : -1,
              i =
                "end" in e && Array.isArray(e.end)
                  ? e.end.filter(
                      (e) =>
                        "space" === e.type ||
                        "comment" === e.type ||
                        "newline" === e.type
                    )
                  : [];
            for (let t of Object.keys(e))
              "type" !== t && "offset" !== t && delete e[t];
            Object.assign(e, { type: s, indent: n, source: t, end: i });
          }
        }
      }
      let tP = (e) => ("type" in e ? tK(e) : tU(e));
      function tK(e) {
        switch (e.type) {
          case "block-scalar": {
            let t = "";
            for (let s of e.props) t += tK(s);
            return t + e.source;
          }
          case "block-map":
          case "block-seq": {
            let t = "";
            for (let s of e.items) t += tU(s);
            return t;
          }
          case "flow-collection": {
            let t = e.start.source;
            for (let s of e.items) t += tU(s);
            for (let s of e.end) t += s.source;
            return t;
          }
          case "document": {
            let t = tU(e);
            if (e.end) for (let s of e.end) t += s.source;
            return t;
          }
          default: {
            let t = e.source;
            if ("end" in e && e.end) for (let s of e.end) t += s.source;
            return t;
          }
        }
      }
      function tU({ start: e, key: t, sep: s, value: n }) {
        let i = "";
        for (let t of e) i += t.source;
        if ((t && (i += tK(t)), s)) for (let e of s) i += e.source;
        return n && (i += tK(n)), i;
      }
      let tR = Symbol("break visit"),
        tF = Symbol("skip children"),
        tV = Symbol("remove item");
      function tJ(e, t) {
        "type" in e &&
          "document" === e.type &&
          (e = { start: e.start, value: e.value }),
          (function e(t, s, n) {
            let i = n(s, t);
            if ("symbol" == typeof i) return i;
            for (let r of ["key", "value"]) {
              let o = s[r];
              if (o && "items" in o) {
                for (let s = 0; s < o.items.length; ++s) {
                  let i = e(Object.freeze(t.concat([[r, s]])), o.items[s], n);
                  if ("number" == typeof i) s = i - 1;
                  else {
                    if (i === tR) return tR;
                    i === tV && (o.items.splice(s, 1), (s -= 1));
                  }
                }
                "function" == typeof i && "key" === r && (i = i(s, t));
              }
            }
            return "function" == typeof i ? i(s, t) : i;
          })(Object.freeze([]), e, t);
      }
      (tJ.BREAK = tR),
        (tJ.SKIP = tF),
        (tJ.REMOVE = tV),
        (tJ.itemAtPath = (e, t) => {
          let s = e;
          for (let [e, n] of t) {
            let t = s?.[e];
            if (!t || !("items" in t)) return;
            s = t.items[n];
          }
          return s;
        }),
        (tJ.parentCollection = (e, t) => {
          let s = tJ.itemAtPath(e, t.slice(0, -1)),
            n = t[t.length - 1][0],
            i = s?.[n];
          if (i && "items" in i) return i;
          throw Error("Parent collection not found");
        });
      let tY = "\uFEFF",
        tW = "\x02",
        tG = "\x18",
        tQ = "\x1f",
        tH = (e) => !!e && "items" in e,
        tX = (e) =>
          !!e &&
          ("scalar" === e.type ||
            "single-quoted-scalar" === e.type ||
            "double-quoted-scalar" === e.type ||
            "block-scalar" === e.type);
      function tz(e) {
        switch (e) {
          case tY:
            return "<BOM>";
          case tW:
            return "<DOC>";
          case tG:
            return "<FLOW_END>";
          case tQ:
            return "<SCALAR>";
          default:
            return JSON.stringify(e);
        }
      }
      function tZ(e) {
        switch (e) {
          case tY:
            return "byte-order-mark";
          case tW:
            return "doc-mode";
          case tG:
            return "flow-error-end";
          case tQ:
            return "scalar";
          case "---":
            return "doc-start";
          case "...":
            return "doc-end";
          case "":
          case "\n":
          case "\r\n":
            return "newline";
          case "-":
            return "seq-item-ind";
          case "?":
            return "explicit-key-ind";
          case ":":
            return "map-value-ind";
          case "{":
            return "flow-map-start";
          case "}":
            return "flow-map-end";
          case "[":
            return "flow-seq-start";
          case "]":
            return "flow-seq-end";
          case ",":
            return "comma";
        }
        switch (e[0]) {
          case " ":
          case "	":
            return "space";
          case "#":
            return "comment";
          case "%":
            return "directive-line";
          case "*":
            return "alias";
          case "&":
            return "anchor";
          case "!":
            return "tag";
          case "'":
            return "single-quoted-scalar";
          case '"':
            return "double-quoted-scalar";
          case "|":
          case ">":
            return "block-scalar-header";
        }
        return null;
      }
      function t0(e) {
        switch (e) {
          case void 0:
          case " ":
          case "\n":
          case "\r":
          case "	":
            return !0;
          default:
            return !1;
        }
      }
      let t1 = "0123456789ABCDEFabcdef".split(""),
        t2 =
          "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-#;/?:@&=+$_.!~*'()".split(
            ""
          ),
        t9 = ",[]{}".split(""),
        t8 = " ,[]{}\n\r	".split(""),
        t4 = (e) => !e || t8.includes(e);
      class t6 {
        constructor() {
          (this.atEnd = !1),
            (this.blockScalarIndent = -1),
            (this.blockScalarKeep = !1),
            (this.buffer = ""),
            (this.flowKey = !1),
            (this.flowLevel = 0),
            (this.indentNext = 0),
            (this.indentValue = 0),
            (this.lineEndPos = null),
            (this.next = null),
            (this.pos = 0);
        }
        *lex(e, t = !1) {
          e &&
            ((this.buffer = this.buffer ? this.buffer + e : e),
            (this.lineEndPos = null)),
            (this.atEnd = !t);
          let s = this.next ?? "stream";
          for (; s && (t || this.hasChars(1)); ) s = yield* this.parseNext(s);
        }
        atLineEnd() {
          let e = this.pos,
            t = this.buffer[e];
          for (; " " === t || "	" === t; ) t = this.buffer[++e];
          return (
            !t ||
            "#" === t ||
            "\n" === t ||
            ("\r" === t && "\n" === this.buffer[e + 1])
          );
        }
        charAt(e) {
          return this.buffer[this.pos + e];
        }
        continueScalar(e) {
          let t = this.buffer[e];
          if (this.indentNext > 0) {
            let s = 0;
            for (; " " === t; ) t = this.buffer[++s + e];
            if ("\r" === t) {
              let t = this.buffer[s + e + 1];
              if ("\n" === t || (!t && !this.atEnd)) return e + s + 1;
            }
            return "\n" !== t && !(s >= this.indentNext) && (t || this.atEnd)
              ? -1
              : e + s;
          }
          if ("-" === t || "." === t) {
            let t = this.buffer.substr(e, 3);
            if (("---" === t || "..." === t) && t0(this.buffer[e + 3]))
              return -1;
          }
          return e;
        }
        getLine() {
          let e = this.lineEndPos;
          return (("number" != typeof e || (-1 !== e && e < this.pos)) &&
            ((e = this.buffer.indexOf("\n", this.pos)), (this.lineEndPos = e)),
          -1 === e)
            ? this.atEnd
              ? this.buffer.substring(this.pos)
              : null
            : ("\r" === this.buffer[e - 1] && (e -= 1),
              this.buffer.substring(this.pos, e));
        }
        hasChars(e) {
          return this.pos + e <= this.buffer.length;
        }
        setNext(e) {
          return (
            (this.buffer = this.buffer.substring(this.pos)),
            (this.pos = 0),
            (this.lineEndPos = null),
            (this.next = e),
            null
          );
        }
        peek(e) {
          return this.buffer.substr(this.pos, e);
        }
        *parseNext(e) {
          switch (e) {
            case "stream":
              return yield* this.parseStream();
            case "line-start":
              return yield* this.parseLineStart();
            case "block-start":
              return yield* this.parseBlockStart();
            case "doc":
              return yield* this.parseDocument();
            case "flow":
              return yield* this.parseFlowCollection();
            case "quoted-scalar":
              return yield* this.parseQuotedScalar();
            case "block-scalar":
              return yield* this.parseBlockScalar();
            case "plain-scalar":
              return yield* this.parsePlainScalar();
          }
        }
        *parseStream() {
          let e = this.getLine();
          if (null === e) return this.setNext("stream");
          if (
            (e[0] === tY && (yield* this.pushCount(1), (e = e.substring(1))),
            "%" === e[0])
          ) {
            let t = e.length,
              s = e.indexOf("#");
            if (-1 !== s) {
              let n = e[s - 1];
              (" " === n || "	" === n) && (t = s - 1);
            }
            for (;;) {
              let s = e[t - 1];
              if (" " === s || "	" === s) t -= 1;
              else break;
            }
            let n = (yield* this.pushCount(t)) + (yield* this.pushSpaces(!0));
            return (
              yield* this.pushCount(e.length - n), this.pushNewline(), "stream"
            );
          }
          if (this.atLineEnd()) {
            let t = yield* this.pushSpaces(!0);
            return (
              yield* this.pushCount(e.length - t),
              yield* this.pushNewline(),
              "stream"
            );
          }
          return yield tW, yield* this.parseLineStart();
        }
        *parseLineStart() {
          let e = this.charAt(0);
          if (!e && !this.atEnd) return this.setNext("line-start");
          if ("-" === e || "." === e) {
            if (!this.atEnd && !this.hasChars(4))
              return this.setNext("line-start");
            let e = this.peek(3);
            if ("---" === e && t0(this.charAt(3)))
              return (
                yield* this.pushCount(3),
                (this.indentValue = 0),
                (this.indentNext = 0),
                "doc"
              );
            if ("..." === e && t0(this.charAt(3)))
              return yield* this.pushCount(3), "stream";
          }
          return (
            (this.indentValue = yield* this.pushSpaces(!1)),
            this.indentNext > this.indentValue &&
              !t0(this.charAt(1)) &&
              (this.indentNext = this.indentValue),
            yield* this.parseBlockStart()
          );
        }
        *parseBlockStart() {
          let [e, t] = this.peek(2);
          if (!t && !this.atEnd) return this.setNext("block-start");
          if (("-" === e || "?" === e || ":" === e) && t0(t)) {
            let e = (yield* this.pushCount(1)) + (yield* this.pushSpaces(!0));
            return (
              (this.indentNext = this.indentValue + 1),
              (this.indentValue += e),
              yield* this.parseBlockStart()
            );
          }
          return "doc";
        }
        *parseDocument() {
          yield* this.pushSpaces(!0);
          let e = this.getLine();
          if (null === e) return this.setNext("doc");
          let t = yield* this.pushIndicators();
          switch (e[t]) {
            case "#":
              yield* this.pushCount(e.length - t);
            case void 0:
              return yield* this.pushNewline(), yield* this.parseLineStart();
            case "{":
            case "[":
              return (
                yield* this.pushCount(1),
                (this.flowKey = !1),
                (this.flowLevel = 1),
                "flow"
              );
            case "}":
            case "]":
              return yield* this.pushCount(1), "doc";
            case "*":
              return yield* this.pushUntil(t4), "doc";
            case '"':
            case "'":
              return yield* this.parseQuotedScalar();
            case "|":
            case ">":
              return (
                (t +=
                  (yield* this.parseBlockScalarHeader()) +
                  (yield* this.pushSpaces(!0))),
                yield* this.pushCount(e.length - t),
                yield* this.pushNewline(),
                yield* this.parseBlockScalar()
              );
            default:
              return yield* this.parsePlainScalar();
          }
        }
        *parseFlowCollection() {
          let e, t;
          let s = -1;
          do
            (e = yield* this.pushNewline()) > 0
              ? ((t = yield* this.pushSpaces(!1)), (this.indentValue = s = t))
              : (t = 0),
              (t += yield* this.pushSpaces(!0));
          while (e + t > 0);
          let n = this.getLine();
          if (null === n) return this.setNext("flow");
          if (
            (-1 !== s && s < this.indentNext && "#" !== n[0]) ||
            (0 === s &&
              (n.startsWith("---") || n.startsWith("...")) &&
              t0(n[3]))
          ) {
            let e =
              s === this.indentNext - 1 &&
              1 === this.flowLevel &&
              ("]" === n[0] || "}" === n[0]);
            if (!e)
              return (
                (this.flowLevel = 0), yield tG, yield* this.parseLineStart()
              );
          }
          let i = 0;
          for (; "," === n[i]; )
            (i += (yield* this.pushCount(1)) + (yield* this.pushSpaces(!0))),
              (this.flowKey = !1);
          switch (n[(i += yield* this.pushIndicators())]) {
            case void 0:
              return "flow";
            case "#":
              return yield* this.pushCount(n.length - i), "flow";
            case "{":
            case "[":
              return (
                yield* this.pushCount(1),
                (this.flowKey = !1),
                (this.flowLevel += 1),
                "flow"
              );
            case "}":
            case "]":
              return (
                yield* this.pushCount(1),
                (this.flowKey = !0),
                (this.flowLevel -= 1),
                this.flowLevel ? "flow" : "doc"
              );
            case "*":
              return yield* this.pushUntil(t4), "flow";
            case '"':
            case "'":
              return (this.flowKey = !0), yield* this.parseQuotedScalar();
            case ":": {
              let e = this.charAt(1);
              if (this.flowKey || t0(e) || "," === e)
                return (
                  (this.flowKey = !1),
                  yield* this.pushCount(1),
                  yield* this.pushSpaces(!0),
                  "flow"
                );
            }
            default:
              return (this.flowKey = !1), yield* this.parsePlainScalar();
          }
        }
        *parseQuotedScalar() {
          let e = this.charAt(0),
            t = this.buffer.indexOf(e, this.pos + 1);
          if ("'" === e)
            for (; -1 !== t && "'" === this.buffer[t + 1]; )
              t = this.buffer.indexOf("'", t + 2);
          else
            for (; -1 !== t; ) {
              let e = 0;
              for (; "\\" === this.buffer[t - 1 - e]; ) e += 1;
              if (e % 2 == 0) break;
              t = this.buffer.indexOf('"', t + 1);
            }
          let s = this.buffer.substring(0, t),
            n = s.indexOf("\n", this.pos);
          if (-1 !== n) {
            for (; -1 !== n; ) {
              let e = this.continueScalar(n + 1);
              if (-1 === e) break;
              n = s.indexOf("\n", e);
            }
            -1 !== n && (t = n - ("\r" === s[n - 1] ? 2 : 1));
          }
          if (-1 === t) {
            if (!this.atEnd) return this.setNext("quoted-scalar");
            t = this.buffer.length;
          }
          return (
            yield* this.pushToIndex(t + 1, !1), this.flowLevel ? "flow" : "doc"
          );
        }
        *parseBlockScalarHeader() {
          (this.blockScalarIndent = -1), (this.blockScalarKeep = !1);
          let e = this.pos;
          for (;;) {
            let t = this.buffer[++e];
            if ("+" === t) this.blockScalarKeep = !0;
            else if (t > "0" && t <= "9")
              this.blockScalarIndent = Number(t) - 1;
            else if ("-" !== t) break;
          }
          return yield* this.pushUntil((e) => t0(e) || "#" === e);
        }
        *parseBlockScalar() {
          let e,
            t = this.pos - 1,
            s = 0;
          e: for (let n = this.pos; (e = this.buffer[n]); ++n)
            switch (e) {
              case " ":
                s += 1;
                break;
              case "\n":
                (t = n), (s = 0);
                break;
              case "\r": {
                let e = this.buffer[n + 1];
                if (!e && !this.atEnd) return this.setNext("block-scalar");
                if ("\n" === e) break;
              }
              default:
                break e;
            }
          if (!e && !this.atEnd) return this.setNext("block-scalar");
          if (s >= this.indentNext) {
            -1 === this.blockScalarIndent
              ? (this.indentNext = s)
              : (this.indentNext += this.blockScalarIndent);
            do {
              let e = this.continueScalar(t + 1);
              if (-1 === e) break;
              t = this.buffer.indexOf("\n", e);
            } while (-1 !== t);
            if (-1 === t) {
              if (!this.atEnd) return this.setNext("block-scalar");
              t = this.buffer.length;
            }
          }
          if (!this.blockScalarKeep)
            for (;;) {
              let e = t - 1,
                n = this.buffer[e];
              "\r" === n && (n = this.buffer[--e]);
              let i = e;
              for (; " " === n || "	" === n; ) n = this.buffer[--e];
              if ("\n" === n && e >= this.pos && e + 1 + s > i) t = e;
              else break;
            }
          return (
            yield tQ,
            yield* this.pushToIndex(t + 1, !0),
            yield* this.parseLineStart()
          );
        }
        *parsePlainScalar() {
          let e;
          let t = this.flowLevel > 0,
            s = this.pos - 1,
            n = this.pos - 1;
          for (; (e = this.buffer[++n]); )
            if (":" === e) {
              let e = this.buffer[n + 1];
              if (t0(e) || (t && "," === e)) break;
              s = n;
            } else if (t0(e)) {
              let i = this.buffer[n + 1];
              if (
                ("\r" === e &&
                  ("\n" === i
                    ? ((n += 1), (e = "\n"), (i = this.buffer[n + 1]))
                    : (s = n)),
                "#" === i || (t && t9.includes(i)))
              )
                break;
              if ("\n" === e) {
                let e = this.continueScalar(n + 1);
                if (-1 === e) break;
                n = Math.max(n, e - 2);
              }
            } else {
              if (t && t9.includes(e)) break;
              s = n;
            }
          return e || this.atEnd
            ? (yield tQ, yield* this.pushToIndex(s + 1, !0), t ? "flow" : "doc")
            : this.setNext("plain-scalar");
        }
        *pushCount(e) {
          return e > 0
            ? (yield this.buffer.substr(this.pos, e), (this.pos += e), e)
            : 0;
        }
        *pushToIndex(e, t) {
          let s = this.buffer.slice(this.pos, e);
          return s
            ? (yield s, (this.pos += s.length), s.length)
            : (t && (yield ""), 0);
        }
        *pushIndicators() {
          switch (this.charAt(0)) {
            case "!":
              return (
                (yield* this.pushTag()) +
                (yield* this.pushSpaces(!0)) +
                (yield* this.pushIndicators())
              );
            case "&":
              return (
                (yield* this.pushUntil(t4)) +
                (yield* this.pushSpaces(!0)) +
                (yield* this.pushIndicators())
              );
            case "-":
            case "?":
            case ":": {
              let e = this.flowLevel > 0,
                t = this.charAt(1);
              if (t0(t) || (e && t9.includes(t)))
                return (
                  e
                    ? this.flowKey && (this.flowKey = !1)
                    : (this.indentNext = this.indentValue + 1),
                  (yield* this.pushCount(1)) +
                    (yield* this.pushSpaces(!0)) +
                    (yield* this.pushIndicators())
                );
            }
          }
          return 0;
        }
        *pushTag() {
          if ("<" === this.charAt(1)) {
            let e = this.pos + 2,
              t = this.buffer[e];
            for (; !t0(t) && ">" !== t; ) t = this.buffer[++e];
            return yield* this.pushToIndex(">" === t ? e + 1 : e, !1);
          }
          {
            let e = this.pos + 1,
              t = this.buffer[e];
            for (; t; )
              if (t2.includes(t)) t = this.buffer[++e];
              else if (
                "%" === t &&
                t1.includes(this.buffer[e + 1]) &&
                t1.includes(this.buffer[e + 2])
              )
                t = this.buffer[(e += 3)];
              else break;
            return yield* this.pushToIndex(e, !1);
          }
        }
        *pushNewline() {
          let e = this.buffer[this.pos];
          return "\n" === e
            ? yield* this.pushCount(1)
            : "\r" === e && "\n" === this.charAt(1)
            ? yield* this.pushCount(2)
            : 0;
        }
        *pushSpaces(e) {
          let t,
            s = this.pos - 1;
          do t = this.buffer[++s];
          while (" " === t || (e && "	" === t));
          let n = s - this.pos;
          return (
            n > 0 && (yield this.buffer.substr(this.pos, n), (this.pos = s)), n
          );
        }
        *pushUntil(e) {
          let t = this.pos,
            s = this.buffer[t];
          for (; !e(s); ) s = this.buffer[++t];
          return yield* this.pushToIndex(t, !1);
        }
      }
      class t3 {
        constructor() {
          (this.lineStarts = []),
            (this.addNewLine = (e) => this.lineStarts.push(e)),
            (this.linePos = (e) => {
              let t = 0,
                s = this.lineStarts.length;
              for (; t < s; ) {
                let n = (t + s) >> 1;
                this.lineStarts[n] < e ? (t = n + 1) : (s = n);
              }
              if (this.lineStarts[t] === e) return { line: t + 1, col: 1 };
              if (0 === t) return { line: 0, col: e };
              let n = this.lineStarts[t - 1];
              return { line: t, col: e - n + 1 };
            });
        }
      }
      function t7(e, t) {
        for (let s = 0; s < e.length; ++s) if (e[s].type === t) return !0;
        return !1;
      }
      function t5(e) {
        for (let t = 0; t < e.length; ++t)
          switch (e[t].type) {
            case "space":
            case "comment":
            case "newline":
              break;
            default:
              return t;
          }
        return -1;
      }
      function se(e) {
        switch (e?.type) {
          case "alias":
          case "scalar":
          case "single-quoted-scalar":
          case "double-quoted-scalar":
          case "flow-collection":
            return !0;
          default:
            return !1;
        }
      }
      function st(e) {
        switch (e.type) {
          case "document":
            return e.start;
          case "block-map": {
            let t = e.items[e.items.length - 1];
            return t.sep ?? t.start;
          }
          case "block-seq":
            return e.items[e.items.length - 1].start;
          default:
            return [];
        }
      }
      function ss(e) {
        if (0 === e.length) return [];
        let t = e.length;
        e: for (; --t >= 0; )
          switch (e[t].type) {
            case "doc-start":
            case "explicit-key-ind":
            case "map-value-ind":
            case "seq-item-ind":
            case "newline":
              break e;
          }
        for (; e[++t]?.type === "space"; );
        return e.splice(t, e.length);
      }
      function sn(e) {
        if ("flow-seq-start" === e.start.type)
          for (let t of e.items)
            !t.sep ||
              t.value ||
              t7(t.start, "explicit-key-ind") ||
              t7(t.sep, "map-value-ind") ||
              (t.key && (t.value = t.key),
              delete t.key,
              se(t.value)
                ? t.value.end
                  ? Array.prototype.push.apply(t.value.end, t.sep)
                  : (t.value.end = t.sep)
                : Array.prototype.push.apply(t.start, t.sep),
              delete t.sep);
      }
      class si {
        constructor(e) {
          (this.atNewLine = !0),
            (this.atScalar = !1),
            (this.indent = 0),
            (this.offset = 0),
            (this.onKeyLine = !1),
            (this.stack = []),
            (this.source = ""),
            (this.type = ""),
            (this.lexer = new t6()),
            (this.onNewLine = e);
        }
        *parse(e, t = !1) {
          for (let s of (this.onNewLine &&
            0 === this.offset &&
            this.onNewLine(0),
          this.lexer.lex(e, t)))
            yield* this.next(s);
          t || (yield* this.end());
        }
        *next(e) {
          if (((this.source = e), this.atScalar)) {
            (this.atScalar = !1), yield* this.step(), (this.offset += e.length);
            return;
          }
          let t = tZ(e);
          if (t) {
            if ("scalar" === t)
              (this.atNewLine = !1),
                (this.atScalar = !0),
                (this.type = "scalar");
            else {
              switch (((this.type = t), yield* this.step(), t)) {
                case "newline":
                  (this.atNewLine = !0),
                    (this.indent = 0),
                    this.onNewLine && this.onNewLine(this.offset + e.length);
                  break;
                case "space":
                  this.atNewLine && " " === e[0] && (this.indent += e.length);
                  break;
                case "explicit-key-ind":
                case "map-value-ind":
                case "seq-item-ind":
                  this.atNewLine && (this.indent += e.length);
                  break;
                case "doc-mode":
                case "flow-error-end":
                  return;
                default:
                  this.atNewLine = !1;
              }
              this.offset += e.length;
            }
          } else {
            let t = `Not a YAML token: ${e}`;
            yield* this.pop({
              type: "error",
              offset: this.offset,
              message: t,
              source: e,
            }),
              (this.offset += e.length);
          }
        }
        *end() {
          for (; this.stack.length > 0; ) yield* this.pop();
        }
        get sourceToken() {
          let e = {
            type: this.type,
            offset: this.offset,
            indent: this.indent,
            source: this.source,
          };
          return e;
        }
        *step() {
          let e = this.peek(1);
          if ("doc-end" === this.type && (!e || "doc-end" !== e.type)) {
            for (; this.stack.length > 0; ) yield* this.pop();
            this.stack.push({
              type: "doc-end",
              offset: this.offset,
              source: this.source,
            });
            return;
          }
          if (!e) return yield* this.stream();
          switch (e.type) {
            case "document":
              return yield* this.document(e);
            case "alias":
            case "scalar":
            case "single-quoted-scalar":
            case "double-quoted-scalar":
              return yield* this.scalar(e);
            case "block-scalar":
              return yield* this.blockScalar(e);
            case "block-map":
              return yield* this.blockMap(e);
            case "block-seq":
              return yield* this.blockSequence(e);
            case "flow-collection":
              return yield* this.flowCollection(e);
            case "doc-end":
              return yield* this.documentEnd(e);
          }
          yield* this.pop();
        }
        peek(e) {
          return this.stack[this.stack.length - e];
        }
        *pop(e) {
          let t = e ?? this.stack.pop();
          if (t) {
            if (0 === this.stack.length) yield t;
            else {
              let e = this.peek(1);
              switch (
                ("block-scalar" === t.type
                  ? (t.indent = "indent" in e ? e.indent : 0)
                  : "flow-collection" === t.type &&
                    "document" === e.type &&
                    (t.indent = 0),
                "flow-collection" === t.type && sn(t),
                e.type)
              ) {
                case "document":
                  e.value = t;
                  break;
                case "block-scalar":
                  e.props.push(t);
                  break;
                case "block-map": {
                  let s = e.items[e.items.length - 1];
                  if (s.value) {
                    e.items.push({ start: [], key: t, sep: [] }),
                      (this.onKeyLine = !0);
                    return;
                  }
                  if (s.sep) s.value = t;
                  else {
                    Object.assign(s, { key: t, sep: [] }),
                      (this.onKeyLine = !t7(s.start, "explicit-key-ind"));
                    return;
                  }
                  break;
                }
                case "block-seq": {
                  let s = e.items[e.items.length - 1];
                  s.value
                    ? e.items.push({ start: [], value: t })
                    : (s.value = t);
                  break;
                }
                case "flow-collection": {
                  let s = e.items[e.items.length - 1];
                  !s || s.value
                    ? e.items.push({ start: [], key: t, sep: [] })
                    : s.sep
                    ? (s.value = t)
                    : Object.assign(s, { key: t, sep: [] });
                  return;
                }
                default:
                  yield* this.pop(), yield* this.pop(t);
              }
              if (
                ("document" === e.type ||
                  "block-map" === e.type ||
                  "block-seq" === e.type) &&
                ("block-map" === t.type || "block-seq" === t.type)
              ) {
                let s = t.items[t.items.length - 1];
                s &&
                  !s.sep &&
                  !s.value &&
                  s.start.length > 0 &&
                  -1 === t5(s.start) &&
                  (0 === t.indent ||
                    s.start.every(
                      (e) => "comment" !== e.type || e.indent < t.indent
                    )) &&
                  ("document" === e.type
                    ? (e.end = s.start)
                    : e.items.push({ start: s.start }),
                  t.items.splice(-1, 1));
              }
            }
          } else
            yield {
              type: "error",
              offset: this.offset,
              source: "",
              message: "Tried to pop an empty stack",
            };
        }
        *stream() {
          switch (this.type) {
            case "directive-line":
              yield {
                type: "directive",
                offset: this.offset,
                source: this.source,
              };
              return;
            case "byte-order-mark":
            case "space":
            case "comment":
            case "newline":
              yield this.sourceToken;
              return;
            case "doc-mode":
            case "doc-start": {
              let e = { type: "document", offset: this.offset, start: [] };
              "doc-start" === this.type && e.start.push(this.sourceToken),
                this.stack.push(e);
              return;
            }
          }
          yield {
            type: "error",
            offset: this.offset,
            message: `Unexpected ${this.type} token in YAML stream`,
            source: this.source,
          };
        }
        *document(e) {
          if (e.value) return yield* this.lineEnd(e);
          switch (this.type) {
            case "doc-start":
              -1 !== t5(e.start)
                ? (yield* this.pop(), yield* this.step())
                : e.start.push(this.sourceToken);
              return;
            case "anchor":
            case "tag":
            case "space":
            case "comment":
            case "newline":
              e.start.push(this.sourceToken);
              return;
          }
          let t = this.startBlockValue(e);
          t
            ? this.stack.push(t)
            : yield {
                type: "error",
                offset: this.offset,
                message: `Unexpected ${this.type} token in YAML document`,
                source: this.source,
              };
        }
        *scalar(e) {
          if ("map-value-ind" === this.type) {
            let t;
            let s = st(this.peek(2)),
              n = ss(s);
            e.end
              ? ((t = e.end).push(this.sourceToken), delete e.end)
              : (t = [this.sourceToken]);
            let i = {
              type: "block-map",
              offset: e.offset,
              indent: e.indent,
              items: [{ start: n, key: e, sep: t }],
            };
            (this.onKeyLine = !0), (this.stack[this.stack.length - 1] = i);
          } else yield* this.lineEnd(e);
        }
        *blockScalar(e) {
          switch (this.type) {
            case "space":
            case "comment":
            case "newline":
              e.props.push(this.sourceToken);
              return;
            case "scalar":
              if (
                ((e.source = this.source),
                (this.atNewLine = !0),
                (this.indent = 0),
                this.onNewLine)
              ) {
                let e = this.source.indexOf("\n") + 1;
                for (; 0 !== e; )
                  this.onNewLine(this.offset + e),
                    (e = this.source.indexOf("\n", e) + 1);
              }
              yield* this.pop();
              break;
            default:
              yield* this.pop(), yield* this.step();
          }
        }
        *blockMap(e) {
          let t = e.items[e.items.length - 1];
          switch (this.type) {
            case "newline":
              if (((this.onKeyLine = !1), t.value)) {
                let s = "end" in t.value ? t.value.end : void 0,
                  n = Array.isArray(s) ? s[s.length - 1] : void 0;
                n?.type === "comment"
                  ? s?.push(this.sourceToken)
                  : e.items.push({ start: [this.sourceToken] });
              } else
                t.sep
                  ? t.sep.push(this.sourceToken)
                  : t.start.push(this.sourceToken);
              return;
            case "space":
            case "comment":
              if (t.value) e.items.push({ start: [this.sourceToken] });
              else if (t.sep) t.sep.push(this.sourceToken);
              else {
                if (this.atIndentedComment(t.start, e.indent)) {
                  let s = e.items[e.items.length - 2],
                    n = s?.value?.end;
                  if (Array.isArray(n)) {
                    Array.prototype.push.apply(n, t.start),
                      n.push(this.sourceToken),
                      e.items.pop();
                    return;
                  }
                }
                t.start.push(this.sourceToken);
              }
              return;
          }
          if (this.indent >= e.indent) {
            let s = !this.onKeyLine && this.indent === e.indent && t.sep,
              n = [];
            if (s && t.sep && !t.value) {
              let s = [];
              for (let n = 0; n < t.sep.length; ++n) {
                let i = t.sep[n];
                switch (i.type) {
                  case "newline":
                    s.push(n);
                    break;
                  case "space":
                    break;
                  case "comment":
                    i.indent > e.indent && (s.length = 0);
                    break;
                  default:
                    s.length = 0;
                }
              }
              s.length >= 2 && (n = t.sep.splice(s[1]));
            }
            switch (this.type) {
              case "anchor":
              case "tag":
                s || t.value
                  ? (n.push(this.sourceToken),
                    e.items.push({ start: n }),
                    (this.onKeyLine = !0))
                  : t.sep
                  ? t.sep.push(this.sourceToken)
                  : t.start.push(this.sourceToken);
                return;
              case "explicit-key-ind":
                t.sep || t7(t.start, "explicit-key-ind")
                  ? s || t.value
                    ? (n.push(this.sourceToken), e.items.push({ start: n }))
                    : this.stack.push({
                        type: "block-map",
                        offset: this.offset,
                        indent: this.indent,
                        items: [{ start: [this.sourceToken] }],
                      })
                  : t.start.push(this.sourceToken),
                  (this.onKeyLine = !0);
                return;
              case "map-value-ind":
                if (t7(t.start, "explicit-key-ind")) {
                  if (t.sep) {
                    if (t.value)
                      e.items.push({
                        start: [],
                        key: null,
                        sep: [this.sourceToken],
                      });
                    else if (t7(t.sep, "map-value-ind"))
                      this.stack.push({
                        type: "block-map",
                        offset: this.offset,
                        indent: this.indent,
                        items: [
                          { start: n, key: null, sep: [this.sourceToken] },
                        ],
                      });
                    else if (se(t.key) && !t7(t.sep, "newline")) {
                      let e = ss(t.start),
                        s = t.key,
                        n = t.sep;
                      n.push(this.sourceToken),
                        delete t.key,
                        delete t.sep,
                        this.stack.push({
                          type: "block-map",
                          offset: this.offset,
                          indent: this.indent,
                          items: [{ start: e, key: s, sep: n }],
                        });
                    } else
                      n.length > 0
                        ? (t.sep = t.sep.concat(n, this.sourceToken))
                        : t.sep.push(this.sourceToken);
                  } else if (t7(t.start, "newline"))
                    Object.assign(t, { key: null, sep: [this.sourceToken] });
                  else {
                    let e = ss(t.start);
                    this.stack.push({
                      type: "block-map",
                      offset: this.offset,
                      indent: this.indent,
                      items: [{ start: e, key: null, sep: [this.sourceToken] }],
                    });
                  }
                } else
                  t.sep
                    ? t.value || s
                      ? e.items.push({
                          start: n,
                          key: null,
                          sep: [this.sourceToken],
                        })
                      : t7(t.sep, "map-value-ind")
                      ? this.stack.push({
                          type: "block-map",
                          offset: this.offset,
                          indent: this.indent,
                          items: [
                            { start: [], key: null, sep: [this.sourceToken] },
                          ],
                        })
                      : t.sep.push(this.sourceToken)
                    : Object.assign(t, { key: null, sep: [this.sourceToken] });
                this.onKeyLine = !0;
                return;
              case "alias":
              case "scalar":
              case "single-quoted-scalar":
              case "double-quoted-scalar": {
                let i = this.flowScalar(this.type);
                s || t.value
                  ? (e.items.push({ start: n, key: i, sep: [] }),
                    (this.onKeyLine = !0))
                  : t.sep
                  ? this.stack.push(i)
                  : (Object.assign(t, { key: i, sep: [] }),
                    (this.onKeyLine = !0));
                return;
              }
              default: {
                let i = this.startBlockValue(e);
                if (i) {
                  s &&
                    "block-seq" !== i.type &&
                    t7(t.start, "explicit-key-ind") &&
                    e.items.push({ start: n }),
                    this.stack.push(i);
                  return;
                }
              }
            }
          }
          yield* this.pop(), yield* this.step();
        }
        *blockSequence(e) {
          let t = e.items[e.items.length - 1];
          switch (this.type) {
            case "newline":
              if (t.value) {
                let s = "end" in t.value ? t.value.end : void 0,
                  n = Array.isArray(s) ? s[s.length - 1] : void 0;
                n?.type === "comment"
                  ? s?.push(this.sourceToken)
                  : e.items.push({ start: [this.sourceToken] });
              } else t.start.push(this.sourceToken);
              return;
            case "space":
            case "comment":
              if (t.value) e.items.push({ start: [this.sourceToken] });
              else {
                if (this.atIndentedComment(t.start, e.indent)) {
                  let s = e.items[e.items.length - 2],
                    n = s?.value?.end;
                  if (Array.isArray(n)) {
                    Array.prototype.push.apply(n, t.start),
                      n.push(this.sourceToken),
                      e.items.pop();
                    return;
                  }
                }
                t.start.push(this.sourceToken);
              }
              return;
            case "anchor":
            case "tag":
              if (t.value || this.indent <= e.indent) break;
              t.start.push(this.sourceToken);
              return;
            case "seq-item-ind":
              if (this.indent !== e.indent) break;
              t.value || t7(t.start, "seq-item-ind")
                ? e.items.push({ start: [this.sourceToken] })
                : t.start.push(this.sourceToken);
              return;
          }
          if (this.indent > e.indent) {
            let t = this.startBlockValue(e);
            if (t) {
              this.stack.push(t);
              return;
            }
          }
          yield* this.pop(), yield* this.step();
        }
        *flowCollection(e) {
          let t = e.items[e.items.length - 1];
          if ("flow-error-end" === this.type) {
            let e;
            do yield* this.pop(), (e = this.peek(1));
            while (e && "flow-collection" === e.type);
          } else if (0 === e.end.length) {
            switch (this.type) {
              case "comma":
              case "explicit-key-ind":
                !t || t.sep
                  ? e.items.push({ start: [this.sourceToken] })
                  : t.start.push(this.sourceToken);
                return;
              case "map-value-ind":
                !t || t.value
                  ? e.items.push({
                      start: [],
                      key: null,
                      sep: [this.sourceToken],
                    })
                  : t.sep
                  ? t.sep.push(this.sourceToken)
                  : Object.assign(t, { key: null, sep: [this.sourceToken] });
                return;
              case "space":
              case "comment":
              case "newline":
              case "anchor":
              case "tag":
                !t || t.value
                  ? e.items.push({ start: [this.sourceToken] })
                  : t.sep
                  ? t.sep.push(this.sourceToken)
                  : t.start.push(this.sourceToken);
                return;
              case "alias":
              case "scalar":
              case "single-quoted-scalar":
              case "double-quoted-scalar": {
                let s = this.flowScalar(this.type);
                !t || t.value
                  ? e.items.push({ start: [], key: s, sep: [] })
                  : t.sep
                  ? this.stack.push(s)
                  : Object.assign(t, { key: s, sep: [] });
                return;
              }
              case "flow-map-end":
              case "flow-seq-end":
                e.end.push(this.sourceToken);
                return;
            }
            let s = this.startBlockValue(e);
            s ? this.stack.push(s) : (yield* this.pop(), yield* this.step());
          } else {
            let t = this.peek(2);
            if (
              "block-map" !== t.type ||
              (("map-value-ind" !== this.type || t.indent !== e.indent) &&
                ("newline" !== this.type || t.items[t.items.length - 1].sep))
            ) {
              if (
                "map-value-ind" === this.type &&
                "flow-collection" !== t.type
              ) {
                let s = st(t),
                  n = ss(s);
                sn(e);
                let i = e.end.splice(1, e.end.length);
                i.push(this.sourceToken);
                let r = {
                  type: "block-map",
                  offset: e.offset,
                  indent: e.indent,
                  items: [{ start: n, key: e, sep: i }],
                };
                (this.onKeyLine = !0), (this.stack[this.stack.length - 1] = r);
              } else yield* this.lineEnd(e);
            } else yield* this.pop(), yield* this.step();
          }
        }
        flowScalar(e) {
          if (this.onNewLine) {
            let e = this.source.indexOf("\n") + 1;
            for (; 0 !== e; )
              this.onNewLine(this.offset + e),
                (e = this.source.indexOf("\n", e) + 1);
          }
          return {
            type: e,
            offset: this.offset,
            indent: this.indent,
            source: this.source,
          };
        }
        startBlockValue(e) {
          switch (this.type) {
            case "alias":
            case "scalar":
            case "single-quoted-scalar":
            case "double-quoted-scalar":
              return this.flowScalar(this.type);
            case "block-scalar-header":
              return {
                type: "block-scalar",
                offset: this.offset,
                indent: this.indent,
                props: [this.sourceToken],
                source: "",
              };
            case "flow-map-start":
            case "flow-seq-start":
              return {
                type: "flow-collection",
                offset: this.offset,
                indent: this.indent,
                start: this.sourceToken,
                items: [],
                end: [],
              };
            case "seq-item-ind":
              return {
                type: "block-seq",
                offset: this.offset,
                indent: this.indent,
                items: [{ start: [this.sourceToken] }],
              };
            case "explicit-key-ind": {
              this.onKeyLine = !0;
              let t = st(e),
                s = ss(t);
              return (
                s.push(this.sourceToken),
                {
                  type: "block-map",
                  offset: this.offset,
                  indent: this.indent,
                  items: [{ start: s }],
                }
              );
            }
            case "map-value-ind": {
              this.onKeyLine = !0;
              let t = st(e),
                s = ss(t);
              return {
                type: "block-map",
                offset: this.offset,
                indent: this.indent,
                items: [{ start: s, key: null, sep: [this.sourceToken] }],
              };
            }
          }
          return null;
        }
        atIndentedComment(e, t) {
          return (
            "comment" === this.type &&
            !(this.indent <= t) &&
            e.every((e) => "newline" === e.type || "space" === e.type)
          );
        }
        *documentEnd(e) {
          "doc-mode" !== this.type &&
            (e.end
              ? e.end.push(this.sourceToken)
              : (e.end = [this.sourceToken]),
            "newline" === this.type && (yield* this.pop()));
        }
        *lineEnd(e) {
          switch (this.type) {
            case "comma":
            case "doc-start":
            case "doc-end":
            case "flow-seq-end":
            case "flow-map-end":
            case "map-value-ind":
              yield* this.pop(), yield* this.step();
              break;
            case "newline":
              this.onKeyLine = !1;
            default:
              e.end
                ? e.end.push(this.sourceToken)
                : (e.end = [this.sourceToken]),
                "newline" === this.type && (yield* this.pop());
          }
        }
      }
      function sr(e) {
        let t = !1 !== e.prettyErrors,
          s = e.lineCounter || (t && new t3()) || null;
        return { lineCounter: s, prettyErrors: t };
      }
      function so(e, t = {}) {
        let { lineCounter: s, prettyErrors: n } = sr(t),
          i = new si(s?.addNewLine),
          r = new t_(t),
          o = Array.from(r.compose(i.parse(e)));
        if (n && s)
          for (let t of o)
            t.errors.forEach(td(e, s)), t.warnings.forEach(td(e, s));
        return o.length > 0
          ? o
          : Object.assign([], { empty: !0 }, r.streamInfo());
      }
      function sl(e, t = {}) {
        let { lineCounter: s, prettyErrors: n } = sr(t),
          i = new si(s?.addNewLine),
          r = new t_(t),
          o = null;
        for (let t of r.compose(i.parse(e), !0, e.length))
          if (o) {
            if ("silent" !== o.options.logLevel) {
              o.errors.push(
                new tf(
                  t.range.slice(0, 2),
                  "MULTIPLE_DOCS",
                  "Source contains multiple documents; please use YAML.parseAllDocuments()"
                )
              );
              break;
            }
          } else o = t;
        return (
          n && s && (o.errors.forEach(td(e, s)), o.warnings.forEach(td(e, s))),
          o
        );
      }
      function sa(e, t, s) {
        let n;
        "function" == typeof t
          ? (n = t)
          : void 0 === s && t && "object" == typeof t && (s = t);
        let i = sl(e, s);
        if (!i) return null;
        if (
          (i.warnings.forEach((e) => eh(i.options.logLevel, e)),
          i.errors.length > 0)
        ) {
          if ("silent" !== i.options.logLevel) throw i.errors[0];
          i.errors = [];
        }
        return i.toJS(Object.assign({ reviver: n }, s));
      }
      function sc(e, t, s) {
        let n = null;
        if (
          ("function" == typeof t || Array.isArray(t)
            ? (n = t)
            : void 0 === s && t && (s = t),
          "string" == typeof s && (s = s.length),
          "number" == typeof s)
        ) {
          let e = Math.round(s);
          s = e < 1 ? void 0 : e > 8 ? { indent: 8 } : { indent: e };
        }
        if (void 0 === e) {
          let { keepUndefined: e } = s ?? t ?? {};
          if (!e) return;
        }
        return new ta(e, n, s).toString(s);
      }
      var su = r;
    },
  },
]);
