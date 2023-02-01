/*! For license information please see main.996c44d4.js.LICENSE.txt */
!(function () {
  var e = {
      76: function (e, t, n) {
        "use strict";
        n.d(t, {
          Z: function () {
            return oe;
          },
        });
        var r = (function () {
            function e(e) {
              var t = this;
              (this._insertTag = function (e) {
                var n;
                (n =
                  0 === t.tags.length
                    ? t.insertionPoint
                      ? t.insertionPoint.nextSibling
                      : t.prepend
                      ? t.container.firstChild
                      : t.before
                    : t.tags[t.tags.length - 1].nextSibling),
                  t.container.insertBefore(e, n),
                  t.tags.push(e);
              }),
                (this.isSpeedy = void 0 === e.speedy || e.speedy),
                (this.tags = []),
                (this.ctr = 0),
                (this.nonce = e.nonce),
                (this.key = e.key),
                (this.container = e.container),
                (this.prepend = e.prepend),
                (this.insertionPoint = e.insertionPoint),
                (this.before = null);
            }
            var t = e.prototype;
            return (
              (t.hydrate = function (e) {
                e.forEach(this._insertTag);
              }),
              (t.insert = function (e) {
                this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 &&
                  this._insertTag(
                    (function (e) {
                      var t = document.createElement("style");
                      return (
                        t.setAttribute("data-emotion", e.key),
                        void 0 !== e.nonce && t.setAttribute("nonce", e.nonce),
                        t.appendChild(document.createTextNode("")),
                        t.setAttribute("data-s", ""),
                        t
                      );
                    })(this)
                  );
                var t = this.tags[this.tags.length - 1];
                if (this.isSpeedy) {
                  var n = (function (e) {
                    if (e.sheet) return e.sheet;
                    for (var t = 0; t < document.styleSheets.length; t++)
                      if (document.styleSheets[t].ownerNode === e)
                        return document.styleSheets[t];
                  })(t);
                  try {
                    n.insertRule(e, n.cssRules.length);
                  } catch (r) {
                    0;
                  }
                } else t.appendChild(document.createTextNode(e));
                this.ctr++;
              }),
              (t.flush = function () {
                this.tags.forEach(function (e) {
                  return e.parentNode && e.parentNode.removeChild(e);
                }),
                  (this.tags = []),
                  (this.ctr = 0);
              }),
              e
            );
          })(),
          o = Math.abs,
          i = String.fromCharCode,
          a = Object.assign;
        function l(e) {
          return e.trim();
        }
        function s(e, t, n) {
          return e.replace(t, n);
        }
        function u(e, t) {
          return e.indexOf(t);
        }
        function c(e, t) {
          return 0 | e.charCodeAt(t);
        }
        function d(e, t, n) {
          return e.slice(t, n);
        }
        function f(e) {
          return e.length;
        }
        function p(e) {
          return e.length;
        }
        function h(e, t) {
          return t.push(e), e;
        }
        var m = 1,
          v = 1,
          g = 0,
          y = 0,
          b = 0,
          x = "";
        function w(e, t, n, r, o, i, a) {
          return {
            value: e,
            root: t,
            parent: n,
            type: r,
            props: o,
            children: i,
            line: m,
            column: v,
            length: a,
            return: "",
          };
        }
        function k(e, t) {
          return a(
            w("", null, null, "", null, null, 0),
            e,
            { length: -e.length },
            t
          );
        }
        function S() {
          return (
            (b = y > 0 ? c(x, --y) : 0), v--, 10 === b && ((v = 1), m--), b
          );
        }
        function Z() {
          return (
            (b = y < g ? c(x, y++) : 0), v++, 10 === b && ((v = 1), m++), b
          );
        }
        function E() {
          return c(x, y);
        }
        function C() {
          return y;
        }
        function P(e, t) {
          return d(x, e, t);
        }
        function M(e) {
          switch (e) {
            case 0:
            case 9:
            case 10:
            case 13:
            case 32:
              return 5;
            case 33:
            case 43:
            case 44:
            case 47:
            case 62:
            case 64:
            case 126:
            case 59:
            case 123:
            case 125:
              return 4;
            case 58:
              return 3;
            case 34:
            case 39:
            case 40:
            case 91:
              return 2;
            case 41:
            case 93:
              return 1;
          }
          return 0;
        }
        function R(e) {
          return (m = v = 1), (g = f((x = e))), (y = 0), [];
        }
        function T(e) {
          return (x = ""), e;
        }
        function j(e) {
          return l(P(y - 1, N(91 === e ? e + 2 : 40 === e ? e + 1 : e)));
        }
        function O(e) {
          for (; (b = E()) && b < 33; ) Z();
          return M(e) > 2 || M(b) > 3 ? "" : " ";
        }
        function z(e, t) {
          for (
            ;
            --t &&
            Z() &&
            !(b < 48 || b > 102 || (b > 57 && b < 65) || (b > 70 && b < 97));

          );
          return P(e, C() + (t < 6 && 32 == E() && 32 == Z()));
        }
        function N(e) {
          for (; Z(); )
            switch (b) {
              case e:
                return y;
              case 34:
              case 39:
                34 !== e && 39 !== e && N(b);
                break;
              case 40:
                41 === e && N(e);
                break;
              case 92:
                Z();
            }
          return y;
        }
        function L(e, t) {
          for (; Z() && e + b !== 57 && (e + b !== 84 || 47 !== E()); );
          return "/*" + P(t, y - 1) + "*" + i(47 === e ? e : Z());
        }
        function _(e) {
          for (; !M(E()); ) Z();
          return P(e, y);
        }
        var A = "-ms-",
          F = "-moz-",
          I = "-webkit-",
          D = "comm",
          W = "rule",
          B = "decl",
          V = "@keyframes";
        function H(e, t) {
          for (var n = "", r = p(e), o = 0; o < r; o++)
            n += t(e[o], o, e, t) || "";
          return n;
        }
        function U(e, t, n, r) {
          switch (e.type) {
            case "@import":
            case B:
              return (e.return = e.return || e.value);
            case D:
              return "";
            case V:
              return (e.return = e.value + "{" + H(e.children, r) + "}");
            case W:
              e.value = e.props.join(",");
          }
          return f((n = H(e.children, r)))
            ? (e.return = e.value + "{" + n + "}")
            : "";
        }
        function $(e, t) {
          switch (
            (function (e, t) {
              return (
                (((((((t << 2) ^ c(e, 0)) << 2) ^ c(e, 1)) << 2) ^ c(e, 2)) <<
                  2) ^
                c(e, 3)
              );
            })(e, t)
          ) {
            case 5103:
              return I + "print-" + e + e;
            case 5737:
            case 4201:
            case 3177:
            case 3433:
            case 1641:
            case 4457:
            case 2921:
            case 5572:
            case 6356:
            case 5844:
            case 3191:
            case 6645:
            case 3005:
            case 6391:
            case 5879:
            case 5623:
            case 6135:
            case 4599:
            case 4855:
            case 4215:
            case 6389:
            case 5109:
            case 5365:
            case 5621:
            case 3829:
              return I + e + e;
            case 5349:
            case 4246:
            case 4810:
            case 6968:
            case 2756:
              return I + e + F + e + A + e + e;
            case 6828:
            case 4268:
              return I + e + A + e + e;
            case 6165:
              return I + e + A + "flex-" + e + e;
            case 5187:
              return (
                I +
                e +
                s(e, /(\w+).+(:[^]+)/, "-webkit-box-$1$2-ms-flex-$1$2") +
                e
              );
            case 5443:
              return I + e + A + "flex-item-" + s(e, /flex-|-self/, "") + e;
            case 4675:
              return (
                I +
                e +
                A +
                "flex-line-pack" +
                s(e, /align-content|flex-|-self/, "") +
                e
              );
            case 5548:
              return I + e + A + s(e, "shrink", "negative") + e;
            case 5292:
              return I + e + A + s(e, "basis", "preferred-size") + e;
            case 6060:
              return (
                I +
                "box-" +
                s(e, "-grow", "") +
                I +
                e +
                A +
                s(e, "grow", "positive") +
                e
              );
            case 4554:
              return I + s(e, /([^-])(transform)/g, "$1-webkit-$2") + e;
            case 6187:
              return (
                s(
                  s(s(e, /(zoom-|grab)/, I + "$1"), /(image-set)/, I + "$1"),
                  e,
                  ""
                ) + e
              );
            case 5495:
            case 3959:
              return s(e, /(image-set\([^]*)/, I + "$1$`$1");
            case 4968:
              return (
                s(
                  s(
                    e,
                    /(.+:)(flex-)?(.*)/,
                    "-webkit-box-pack:$3-ms-flex-pack:$3"
                  ),
                  /s.+-b[^;]+/,
                  "justify"
                ) +
                I +
                e +
                e
              );
            case 4095:
            case 3583:
            case 4068:
            case 2532:
              return s(e, /(.+)-inline(.+)/, I + "$1$2") + e;
            case 8116:
            case 7059:
            case 5753:
            case 5535:
            case 5445:
            case 5701:
            case 4933:
            case 4677:
            case 5533:
            case 5789:
            case 5021:
            case 4765:
              if (f(e) - 1 - t > 6)
                switch (c(e, t + 1)) {
                  case 109:
                    if (45 !== c(e, t + 4)) break;
                  case 102:
                    return (
                      s(
                        e,
                        /(.+:)(.+)-([^]+)/,
                        "$1-webkit-$2-$3$1" +
                          F +
                          (108 == c(e, t + 3) ? "$3" : "$2-$3")
                      ) + e
                    );
                  case 115:
                    return ~u(e, "stretch")
                      ? $(s(e, "stretch", "fill-available"), t) + e
                      : e;
                }
              break;
            case 4949:
              if (115 !== c(e, t + 1)) break;
            case 6444:
              switch (c(e, f(e) - 3 - (~u(e, "!important") && 10))) {
                case 107:
                  return s(e, ":", ":" + I) + e;
                case 101:
                  return (
                    s(
                      e,
                      /(.+:)([^;!]+)(;|!.+)?/,
                      "$1" +
                        I +
                        (45 === c(e, 14) ? "inline-" : "") +
                        "box$3$1" +
                        I +
                        "$2$3$1" +
                        A +
                        "$2box$3"
                    ) + e
                  );
              }
              break;
            case 5936:
              switch (c(e, t + 11)) {
                case 114:
                  return I + e + A + s(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
                case 108:
                  return I + e + A + s(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
                case 45:
                  return I + e + A + s(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
              }
              return I + e + A + e + e;
          }
          return e;
        }
        function q(e) {
          return T(K("", null, null, null, [""], (e = R(e)), 0, [0], e));
        }
        function K(e, t, n, r, o, a, l, c, d) {
          for (
            var p = 0,
              m = 0,
              v = l,
              g = 0,
              y = 0,
              b = 0,
              x = 1,
              w = 1,
              k = 1,
              P = 0,
              M = "",
              R = o,
              T = a,
              N = r,
              A = M;
            w;

          )
            switch (((b = P), (P = Z()))) {
              case 40:
                if (108 != b && 58 == A.charCodeAt(v - 1)) {
                  -1 != u((A += s(j(P), "&", "&\f")), "&\f") && (k = -1);
                  break;
                }
              case 34:
              case 39:
              case 91:
                A += j(P);
                break;
              case 9:
              case 10:
              case 13:
              case 32:
                A += O(b);
                break;
              case 92:
                A += z(C() - 1, 7);
                continue;
              case 47:
                switch (E()) {
                  case 42:
                  case 47:
                    h(Q(L(Z(), C()), t, n), d);
                    break;
                  default:
                    A += "/";
                }
                break;
              case 123 * x:
                c[p++] = f(A) * k;
              case 125 * x:
              case 59:
              case 0:
                switch (P) {
                  case 0:
                  case 125:
                    w = 0;
                  case 59 + m:
                    y > 0 &&
                      f(A) - v &&
                      h(
                        y > 32
                          ? Y(A + ";", r, n, v - 1)
                          : Y(s(A, " ", "") + ";", r, n, v - 2),
                        d
                      );
                    break;
                  case 59:
                    A += ";";
                  default:
                    if (
                      (h(
                        (N = G(A, t, n, p, m, o, c, M, (R = []), (T = []), v)),
                        a
                      ),
                      123 === P)
                    )
                      if (0 === m) K(A, t, N, N, R, a, v, c, T);
                      else
                        switch (g) {
                          case 100:
                          case 109:
                          case 115:
                            K(
                              e,
                              N,
                              N,
                              r &&
                                h(G(e, N, N, 0, 0, o, c, M, o, (R = []), v), T),
                              o,
                              T,
                              v,
                              c,
                              r ? R : T
                            );
                            break;
                          default:
                            K(A, N, N, N, [""], T, 0, c, T);
                        }
                }
                (p = m = y = 0), (x = k = 1), (M = A = ""), (v = l);
                break;
              case 58:
                (v = 1 + f(A)), (y = b);
              default:
                if (x < 1)
                  if (123 == P) --x;
                  else if (125 == P && 0 == x++ && 125 == S()) continue;
                switch (((A += i(P)), P * x)) {
                  case 38:
                    k = m > 0 ? 1 : ((A += "\f"), -1);
                    break;
                  case 44:
                    (c[p++] = (f(A) - 1) * k), (k = 1);
                    break;
                  case 64:
                    45 === E() && (A += j(Z())),
                      (g = E()),
                      (m = v = f((M = A += _(C())))),
                      P++;
                    break;
                  case 45:
                    45 === b && 2 == f(A) && (x = 0);
                }
            }
          return a;
        }
        function G(e, t, n, r, i, a, u, c, f, h, m) {
          for (
            var v = i - 1,
              g = 0 === i ? a : [""],
              y = p(g),
              b = 0,
              x = 0,
              k = 0;
            b < r;
            ++b
          )
            for (
              var S = 0, Z = d(e, v + 1, (v = o((x = u[b])))), E = e;
              S < y;
              ++S
            )
              (E = l(x > 0 ? g[S] + " " + Z : s(Z, /&\f/g, g[S]))) &&
                (f[k++] = E);
          return w(e, t, n, 0 === i ? W : c, f, h, m);
        }
        function Q(e, t, n) {
          return w(e, t, n, D, i(b), d(e, 2, -2), 0);
        }
        function Y(e, t, n, r) {
          return w(e, t, n, B, d(e, 0, r), d(e, r + 1, -1), r);
        }
        var X = function (e, t, n) {
            for (
              var r = 0, o = 0;
              (r = o), (o = E()), 38 === r && 12 === o && (t[n] = 1), !M(o);

            )
              Z();
            return P(e, y);
          },
          J = function (e, t) {
            return T(
              (function (e, t) {
                var n = -1,
                  r = 44;
                do {
                  switch (M(r)) {
                    case 0:
                      38 === r && 12 === E() && (t[n] = 1),
                        (e[n] += X(y - 1, t, n));
                      break;
                    case 2:
                      e[n] += j(r);
                      break;
                    case 4:
                      if (44 === r) {
                        (e[++n] = 58 === E() ? "&\f" : ""),
                          (t[n] = e[n].length);
                        break;
                      }
                    default:
                      e[n] += i(r);
                  }
                } while ((r = Z()));
                return e;
              })(R(e), t)
            );
          },
          ee = new WeakMap(),
          te = function (e) {
            if ("rule" === e.type && e.parent && !(e.length < 1)) {
              for (
                var t = e.value,
                  n = e.parent,
                  r = e.column === n.column && e.line === n.line;
                "rule" !== n.type;

              )
                if (!(n = n.parent)) return;
              if (
                (1 !== e.props.length || 58 === t.charCodeAt(0) || ee.get(n)) &&
                !r
              ) {
                ee.set(e, !0);
                for (
                  var o = [], i = J(t, o), a = n.props, l = 0, s = 0;
                  l < i.length;
                  l++
                )
                  for (var u = 0; u < a.length; u++, s++)
                    e.props[s] = o[l]
                      ? i[l].replace(/&\f/g, a[u])
                      : a[u] + " " + i[l];
              }
            }
          },
          ne = function (e) {
            if ("decl" === e.type) {
              var t = e.value;
              108 === t.charCodeAt(0) &&
                98 === t.charCodeAt(2) &&
                ((e.return = ""), (e.value = ""));
            }
          },
          re = [
            function (e, t, n, r) {
              if (e.length > -1 && !e.return)
                switch (e.type) {
                  case B:
                    e.return = $(e.value, e.length);
                    break;
                  case V:
                    return H([k(e, { value: s(e.value, "@", "@" + I) })], r);
                  case W:
                    if (e.length)
                      return (function (e, t) {
                        return e.map(t).join("");
                      })(e.props, function (t) {
                        switch (
                          (function (e, t) {
                            return (e = t.exec(e)) ? e[0] : e;
                          })(t, /(::plac\w+|:read-\w+)/)
                        ) {
                          case ":read-only":
                          case ":read-write":
                            return H(
                              [
                                k(e, {
                                  props: [s(t, /:(read-\w+)/, ":-moz-$1")],
                                }),
                              ],
                              r
                            );
                          case "::placeholder":
                            return H(
                              [
                                k(e, {
                                  props: [
                                    s(t, /:(plac\w+)/, ":-webkit-input-$1"),
                                  ],
                                }),
                                k(e, {
                                  props: [s(t, /:(plac\w+)/, ":-moz-$1")],
                                }),
                                k(e, {
                                  props: [s(t, /:(plac\w+)/, A + "input-$1")],
                                }),
                              ],
                              r
                            );
                        }
                        return "";
                      });
                }
            },
          ],
          oe = function (e) {
            var t = e.key;
            if ("css" === t) {
              var n = document.querySelectorAll(
                "style[data-emotion]:not([data-s])"
              );
              Array.prototype.forEach.call(n, function (e) {
                -1 !== e.getAttribute("data-emotion").indexOf(" ") &&
                  (document.head.appendChild(e), e.setAttribute("data-s", ""));
              });
            }
            var o = e.stylisPlugins || re;
            var i,
              a,
              l = {},
              s = [];
            (i = e.container || document.head),
              Array.prototype.forEach.call(
                document.querySelectorAll('style[data-emotion^="' + t + ' "]'),
                function (e) {
                  for (
                    var t = e.getAttribute("data-emotion").split(" "), n = 1;
                    n < t.length;
                    n++
                  )
                    l[t[n]] = !0;
                  s.push(e);
                }
              );
            var u,
              c,
              d = [
                U,
                ((c = function (e) {
                  u.insert(e);
                }),
                function (e) {
                  e.root || ((e = e.return) && c(e));
                }),
              ],
              f = (function (e) {
                var t = p(e);
                return function (n, r, o, i) {
                  for (var a = "", l = 0; l < t; l++)
                    a += e[l](n, r, o, i) || "";
                  return a;
                };
              })([te, ne].concat(o, d));
            a = function (e, t, n, r) {
              (u = n),
                H(q(e ? e + "{" + t.styles + "}" : t.styles), f),
                r && (h.inserted[t.name] = !0);
            };
            var h = {
              key: t,
              sheet: new r({
                key: t,
                container: i,
                nonce: e.nonce,
                speedy: e.speedy,
                prepend: e.prepend,
                insertionPoint: e.insertionPoint,
              }),
              nonce: e.nonce,
              inserted: l,
              registered: {},
              insert: a,
            };
            return h.sheet.hydrate(s), h;
          };
      },
      9797: function (e, t) {
        "use strict";
        t.Z = function (e) {
          var t = Object.create(null);
          return function (n) {
            return void 0 === t[n] && (t[n] = e(n)), t[n];
          };
        };
      },
      9886: function (e, t, n) {
        "use strict";
        n.d(t, {
          T: function () {
            return l;
          },
          w: function () {
            return a;
          },
        });
        var r = n(2791),
          o = n(76),
          i =
            (n(9140),
            n(2561),
            (0, r.createContext)(
              "undefined" !== typeof HTMLElement
                ? (0, o.Z)({ key: "css" })
                : null
            ));
        i.Provider;
        var a = function (e) {
            return (0, r.forwardRef)(function (t, n) {
              var o = (0, r.useContext)(i);
              return e(t, o, n);
            });
          },
          l = (0, r.createContext)({});
      },
      9140: function (e, t, n) {
        "use strict";
        n.d(t, {
          O: function () {
            return m;
          },
        });
        var r = function (e) {
            for (var t, n = 0, r = 0, o = e.length; o >= 4; ++r, o -= 4)
              (t =
                1540483477 *
                  (65535 &
                    (t =
                      (255 & e.charCodeAt(r)) |
                      ((255 & e.charCodeAt(++r)) << 8) |
                      ((255 & e.charCodeAt(++r)) << 16) |
                      ((255 & e.charCodeAt(++r)) << 24))) +
                ((59797 * (t >>> 16)) << 16)),
                (n =
                  (1540483477 * (65535 & (t ^= t >>> 24)) +
                    ((59797 * (t >>> 16)) << 16)) ^
                  (1540483477 * (65535 & n) + ((59797 * (n >>> 16)) << 16)));
            switch (o) {
              case 3:
                n ^= (255 & e.charCodeAt(r + 2)) << 16;
              case 2:
                n ^= (255 & e.charCodeAt(r + 1)) << 8;
              case 1:
                n =
                  1540483477 * (65535 & (n ^= 255 & e.charCodeAt(r))) +
                  ((59797 * (n >>> 16)) << 16);
            }
            return (
              ((n =
                1540483477 * (65535 & (n ^= n >>> 13)) +
                ((59797 * (n >>> 16)) << 16)) ^
                (n >>> 15)) >>>
              0
            ).toString(36);
          },
          o = {
            animationIterationCount: 1,
            borderImageOutset: 1,
            borderImageSlice: 1,
            borderImageWidth: 1,
            boxFlex: 1,
            boxFlexGroup: 1,
            boxOrdinalGroup: 1,
            columnCount: 1,
            columns: 1,
            flex: 1,
            flexGrow: 1,
            flexPositive: 1,
            flexShrink: 1,
            flexNegative: 1,
            flexOrder: 1,
            gridRow: 1,
            gridRowEnd: 1,
            gridRowSpan: 1,
            gridRowStart: 1,
            gridColumn: 1,
            gridColumnEnd: 1,
            gridColumnSpan: 1,
            gridColumnStart: 1,
            msGridRow: 1,
            msGridRowSpan: 1,
            msGridColumn: 1,
            msGridColumnSpan: 1,
            fontWeight: 1,
            lineHeight: 1,
            opacity: 1,
            order: 1,
            orphans: 1,
            tabSize: 1,
            widows: 1,
            zIndex: 1,
            zoom: 1,
            WebkitLineClamp: 1,
            fillOpacity: 1,
            floodOpacity: 1,
            stopOpacity: 1,
            strokeDasharray: 1,
            strokeDashoffset: 1,
            strokeMiterlimit: 1,
            strokeOpacity: 1,
            strokeWidth: 1,
          },
          i = n(9797),
          a = /[A-Z]|^ms/g,
          l = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
          s = function (e) {
            return 45 === e.charCodeAt(1);
          },
          u = function (e) {
            return null != e && "boolean" !== typeof e;
          },
          c = (0, i.Z)(function (e) {
            return s(e) ? e : e.replace(a, "-$&").toLowerCase();
          }),
          d = function (e, t) {
            switch (e) {
              case "animation":
              case "animationName":
                if ("string" === typeof t)
                  return t.replace(l, function (e, t, n) {
                    return (p = { name: t, styles: n, next: p }), t;
                  });
            }
            return 1 === o[e] || s(e) || "number" !== typeof t || 0 === t
              ? t
              : t + "px";
          };
        function f(e, t, n) {
          if (null == n) return "";
          if (void 0 !== n.__emotion_styles) return n;
          switch (typeof n) {
            case "boolean":
              return "";
            case "object":
              if (1 === n.anim)
                return (
                  (p = { name: n.name, styles: n.styles, next: p }), n.name
                );
              if (void 0 !== n.styles) {
                var r = n.next;
                if (void 0 !== r)
                  for (; void 0 !== r; )
                    (p = { name: r.name, styles: r.styles, next: p }),
                      (r = r.next);
                return n.styles + ";";
              }
              return (function (e, t, n) {
                var r = "";
                if (Array.isArray(n))
                  for (var o = 0; o < n.length; o++) r += f(e, t, n[o]) + ";";
                else
                  for (var i in n) {
                    var a = n[i];
                    if ("object" !== typeof a)
                      null != t && void 0 !== t[a]
                        ? (r += i + "{" + t[a] + "}")
                        : u(a) && (r += c(i) + ":" + d(i, a) + ";");
                    else if (
                      !Array.isArray(a) ||
                      "string" !== typeof a[0] ||
                      (null != t && void 0 !== t[a[0]])
                    ) {
                      var l = f(e, t, a);
                      switch (i) {
                        case "animation":
                        case "animationName":
                          r += c(i) + ":" + l + ";";
                          break;
                        default:
                          r += i + "{" + l + "}";
                      }
                    } else
                      for (var s = 0; s < a.length; s++)
                        u(a[s]) && (r += c(i) + ":" + d(i, a[s]) + ";");
                  }
                return r;
              })(e, t, n);
            case "function":
              if (void 0 !== e) {
                var o = p,
                  i = n(e);
                return (p = o), f(e, t, i);
              }
          }
          if (null == t) return n;
          var a = t[n];
          return void 0 !== a ? a : n;
        }
        var p,
          h = /label:\s*([^\s;\n{]+)\s*(;|$)/g;
        var m = function (e, t, n) {
          if (
            1 === e.length &&
            "object" === typeof e[0] &&
            null !== e[0] &&
            void 0 !== e[0].styles
          )
            return e[0];
          var o = !0,
            i = "";
          p = void 0;
          var a = e[0];
          null == a || void 0 === a.raw
            ? ((o = !1), (i += f(n, t, a)))
            : (i += a[0]);
          for (var l = 1; l < e.length; l++)
            (i += f(n, t, e[l])), o && (i += a[l]);
          h.lastIndex = 0;
          for (var s, u = ""; null !== (s = h.exec(i)); ) u += "-" + s[1];
          return { name: r(i) + u, styles: i, next: p };
        };
      },
      2561: function (e, t, n) {
        "use strict";
        var r;
        n.d(t, {
          L: function () {
            return a;
          },
          j: function () {
            return l;
          },
        });
        var o = n(2791),
          i =
            !!(r || (r = n.t(o, 2))).useInsertionEffect &&
            (r || (r = n.t(o, 2))).useInsertionEffect,
          a =
            i ||
            function (e) {
              return e();
            },
          l = i || o.useLayoutEffect;
      },
      5438: function (e, t, n) {
        "use strict";
        n.d(t, {
          My: function () {
            return i;
          },
          fp: function () {
            return r;
          },
          hC: function () {
            return o;
          },
        });
        function r(e, t, n) {
          var r = "";
          return (
            n.split(" ").forEach(function (n) {
              void 0 !== e[n] ? t.push(e[n] + ";") : (r += n + " ");
            }),
            r
          );
        }
        var o = function (e, t, n) {
            var r = e.key + "-" + t.name;
            !1 === n &&
              void 0 === e.registered[r] &&
              (e.registered[r] = t.styles);
          },
          i = function (e, t, n) {
            o(e, t, n);
            var r = e.key + "-" + t.name;
            if (void 0 === e.inserted[t.name]) {
              var i = t;
              do {
                e.insert(t === i ? "." + r : "", i, e.sheet, !0);
                i = i.next;
              } while (void 0 !== i);
            }
          };
      },
      5524: function (e, t, n) {
        "use strict";
        var r = n(4836);
        t.Z = void 0;
        var o = r(n(5649)),
          i = n(184),
          a = (0, o.default)(
            (0, i.jsx)("path", {
              d: "M22 11V3h-7v3H9V3H2v8h7V8h2v10h4v3h7v-8h-7v3h-2V8h2v3z",
            }),
            "AccountTree"
          );
        t.Z = a;
      },
      2419: function (e, t, n) {
        "use strict";
        var r = n(4836);
        t.Z = void 0;
        var o = r(n(5649)),
          i = n(184),
          a = (0, o.default)(
            (0, i.jsx)("path", { d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" }),
            "Add"
          );
        t.Z = a;
      },
      2752: function (e, t, n) {
        "use strict";
        var r = n(4836);
        t.Z = void 0;
        var o = r(n(5649)),
          i = n(184),
          a = (0, o.default)(
            (0, i.jsx)("path", {
              d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57V12c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.6 3.5-3.57V12c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z",
            }),
            "AlternateEmail"
          );
        t.Z = a;
      },
      8422: function (e, t, n) {
        "use strict";
        var r = n(4836);
        t.Z = void 0;
        var o = r(n(5649)),
          i = n(184),
          a = (0, o.default)(
            (0, i.jsx)("path", {
              d: "M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-3 12.59L17.59 17 14 13.41 10.41 17 9 15.59 12.59 12 9 8.41 10.41 7 14 10.59 17.59 7 19 8.41 15.41 12 19 15.59z",
            }),
            "Backspace"
          );
        t.Z = a;
      },
      8527: function (e, t, n) {
        "use strict";
        var r = n(4836);
        t.Z = void 0;
        var o = r(n(5649)),
          i = n(184),
          a = (0, o.default)(
            (0, i.jsx)("path", {
              d: "m22.7 19-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z",
            }),
            "Build"
          );
        t.Z = a;
      },
      6711: function (e, t, n) {
        "use strict";
        var r = n(4836);
        t.Z = void 0;
        var o = r(n(5649)),
          i = n(184),
          a = (0, o.default)(
            (0, i.jsx)("path", {
              d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z",
            }),
            "Cancel"
          );
        t.Z = a;
      },
      194: function (e, t, n) {
        "use strict";
        var r = n(4836);
        t.Z = void 0;
        var o = r(n(5649)),
          i = n(184),
          a = (0, o.default)(
            (0, i.jsx)("path", {
              d: "M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z",
            }),
            "ContentCopy"
          );
        t.Z = a;
      },
      1477: function (e, t, n) {
        "use strict";
        var r = n(4836);
        t.Z = void 0;
        var o = r(n(5649)),
          i = n(184),
          a = (0, o.default)(
            [
              (0, i.jsx)(
                "path",
                {
                  d: "M5 5h2v3h10V5h2v6h2V5c0-1.1-.9-2-2-2h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h5v-2H5V5zm7-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z",
                },
                "0"
              ),
              (0, i.jsx)(
                "path",
                {
                  d: "m18.01 13-1.42 1.41 1.58 1.58H12v2h6.17l-1.58 1.59 1.42 1.41 3.99-4z",
                },
                "1"
              ),
            ],
            "ContentPasteGo"
          );
        t.Z = a;
      },
      7247: function (e, t, n) {
        "use strict";
        var r = n(4836);
        t.Z = void 0;
        var o = r(n(5649)),
          i = n(184),
          a = (0, o.default)(
            (0, i.jsx)("path", {
              d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z",
            }),
            "Delete"
          );
        t.Z = a;
      },
      1286: function (e, t, n) {
        "use strict";
        var r = n(4836);
        t.Z = void 0;
        var o = r(n(5649)),
          i = n(184),
          a = (0, o.default)(
            (0, i.jsx)("path", {
              d: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z",
            }),
            "Edit"
          );
        t.Z = a;
      },
      1961: function (e, t, n) {
        "use strict";
        var r = n(4836);
        t.Z = void 0;
        var o = r(n(5649)),
          i = n(184),
          a = (0, o.default)(
            (0, i.jsx)("path", {
              fillRule: "evenodd",
              d: "m9 17 3-2.94c-.39-.04-.68-.06-1-.06-2.67 0-8 1.34-8 4v2h9l-3-3zm2-5c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m4.47 8.5L12 17l1.4-1.41 2.07 2.08 5.13-5.17 1.4 1.41z",
            }),
            "HowToReg"
          );
        t.Z = a;
      },
      9885: function (e, t, n) {
        "use strict";
        var r = n(4836);
        t.Z = void 0;
        var o = r(n(5649)),
          i = n(184),
          a = (0, o.default)(
            (0, i.jsx)("path", {
              d: "M6 2c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6H6zm7 7V3.5L18.5 9H13z",
            }),
            "InsertDriveFile"
          );
        t.Z = a;
      },
      9724: function (e, t, n) {
        "use strict";
        var r = n(4836);
        t.Z = void 0;
        var o = r(n(5649)),
          i = n(184),
          a = (0, o.default)(
            (0, i.jsx)("path", {
              d: "M17.5 3C15.57 3 14 4.57 14 6.5V8h-4V6.5C10 4.57 8.43 3 6.5 3S3 4.57 3 6.5 4.57 10 6.5 10H8v4H6.5C4.57 14 3 15.57 3 17.5S4.57 21 6.5 21s3.5-1.57 3.5-3.5V16h4v1.5c0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5H16v-4h1.5c1.93 0 3.5-1.57 3.5-3.5S19.43 3 17.5 3zM16 8V6.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5S18.33 8 17.5 8H16zM6.5 8C5.67 8 5 7.33 5 6.5S5.67 5 6.5 5 8 5.67 8 6.5V8H6.5zm3.5 6v-4h4v4h-4zm7.5 5c-.83 0-1.5-.67-1.5-1.5V16h1.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5zm-11 0c-.83 0-1.5-.67-1.5-1.5S5.67 16 6.5 16H8v1.5c0 .83-.67 1.5-1.5 1.5z",
            }),
            "KeyboardCommandKey"
          );
        t.Z = a;
      },
      521: function (e, t, n) {
        "use strict";
        var r = n(4836);
        t.Z = void 0;
        var o = r(n(5649)),
          i = n(184),
          a = (0, o.default)(
            (0, i.jsx)("path", {
              d: "M11 7 9.6 8.4l2.6 2.6H2v2h10.2l-2.6 2.6L11 17l5-5-5-5zm9 12h-8v2h8c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-8v2h8v14z",
            }),
            "Login"
          );
        t.Z = a;
      },
      6488: function (e, t, n) {
        "use strict";
        var r = n(4836);
        t.Z = void 0;
        var o = r(n(5649)),
          i = n(184),
          a = (0, o.default)(
            (0, i.jsx)("path", {
              d: "m17 7-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z",
            }),
            "Logout"
          );
        t.Z = a;
      },
      3329: function (e, t, n) {
        "use strict";
        var r = n(4836);
        t.Z = void 0;
        var o = r(n(5649)),
          i = n(184),
          a = (0, o.default)(
            (0, i.jsx)("path", {
              d: "M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z",
            }),
            "Save"
          );
        t.Z = a;
      },
      5020: function (e, t, n) {
        "use strict";
        var r = n(4836);
        t.Z = void 0;
        var o = r(n(5649)),
          i = n(184),
          a = (0, o.default)(
            (0, i.jsx)("path", {
              d: "M21 12.4V7l-4-4H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h7.4l8.6-8.6zM15 15c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zM6 6h9v4H6V6zm13.99 10.25 1.77 1.77L16.77 23H15v-1.77l4.99-4.98zm3.26.26-.85.85-1.77-1.77.85-.85c.2-.2.51-.2.71 0l1.06 1.06c.2.2.2.52 0 .71z",
            }),
            "SaveAs"
          );
        t.Z = a;
      },
      3416: function (e, t, n) {
        "use strict";
        var r = n(4836);
        t.Z = void 0;
        var o = r(n(5649)),
          i = n(184),
          a = (0, o.default)(
            (0, i.jsx)("path", {
              d: "M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z",
            }),
            "Undo"
          );
        t.Z = a;
      },
      1291: function (e, t, n) {
        "use strict";
        var r = n(4836);
        t.Z = void 0;
        var o = r(n(5649)),
          i = n(184),
          a = (0, o.default)(
            (0, i.jsx)("path", {
              d: "M7.41 18.59 8.83 20 12 16.83 15.17 20l1.41-1.41L12 14l-4.59 4.59zm9.18-13.18L15.17 4 12 7.17 8.83 4 7.41 5.41 12 10l4.59-4.59z",
            }),
            "UnfoldLess"
          );
        t.Z = a;
      },
      2207: function (e, t, n) {
        "use strict";
        var r = n(4836);
        t.Z = void 0;
        var o = r(n(5649)),
          i = n(184),
          a = (0, o.default)(
            (0, i.jsx)("path", {
              d: "M12 5.83 15.17 9l1.41-1.41L12 3 7.41 7.59 8.83 9 12 5.83zm0 12.34L8.83 15l-1.41 1.41L12 21l4.59-4.59L15.17 15 12 18.17z",
            }),
            "UnfoldMore"
          );
        t.Z = a;
      },
      5649: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          Object.defineProperty(t, "default", {
            enumerable: !0,
            get: function () {
              return r.createSvgIcon;
            },
          });
        var r = n(1142);
      },
      4360: function (e, t, n) {
        "use strict";
        n.d(t, {
          Z: function () {
            return I;
          },
        });
        var r = n(7462),
          o = n(3366),
          i = n(6189),
          a = n(2466),
          l = n(5080),
          s = n(4942);
        function u(e, t) {
          var n;
          return (0, r.Z)(
            {
              toolbar:
                ((n = { minHeight: 56 }),
                (0, s.Z)(n, e.up("xs"), {
                  "@media (orientation: landscape)": { minHeight: 48 },
                }),
                (0, s.Z)(n, e.up("sm"), { minHeight: 64 }),
                n),
            },
            t
          );
        }
        var c = n(2065),
          d = { black: "#000", white: "#fff" },
          f = {
            50: "#fafafa",
            100: "#f5f5f5",
            200: "#eeeeee",
            300: "#e0e0e0",
            400: "#bdbdbd",
            500: "#9e9e9e",
            600: "#757575",
            700: "#616161",
            800: "#424242",
            900: "#212121",
            A100: "#f5f5f5",
            A200: "#eeeeee",
            A400: "#bdbdbd",
            A700: "#616161",
          },
          p = {
            50: "#f3e5f5",
            100: "#e1bee7",
            200: "#ce93d8",
            300: "#ba68c8",
            400: "#ab47bc",
            500: "#9c27b0",
            600: "#8e24aa",
            700: "#7b1fa2",
            800: "#6a1b9a",
            900: "#4a148c",
            A100: "#ea80fc",
            A200: "#e040fb",
            A400: "#d500f9",
            A700: "#aa00ff",
          },
          h = {
            50: "#ffebee",
            100: "#ffcdd2",
            200: "#ef9a9a",
            300: "#e57373",
            400: "#ef5350",
            500: "#f44336",
            600: "#e53935",
            700: "#d32f2f",
            800: "#c62828",
            900: "#b71c1c",
            A100: "#ff8a80",
            A200: "#ff5252",
            A400: "#ff1744",
            A700: "#d50000",
          },
          m = {
            50: "#fff3e0",
            100: "#ffe0b2",
            200: "#ffcc80",
            300: "#ffb74d",
            400: "#ffa726",
            500: "#ff9800",
            600: "#fb8c00",
            700: "#f57c00",
            800: "#ef6c00",
            900: "#e65100",
            A100: "#ffd180",
            A200: "#ffab40",
            A400: "#ff9100",
            A700: "#ff6d00",
          },
          v = {
            50: "#e3f2fd",
            100: "#bbdefb",
            200: "#90caf9",
            300: "#64b5f6",
            400: "#42a5f5",
            500: "#2196f3",
            600: "#1e88e5",
            700: "#1976d2",
            800: "#1565c0",
            900: "#0d47a1",
            A100: "#82b1ff",
            A200: "#448aff",
            A400: "#2979ff",
            A700: "#2962ff",
          },
          g = {
            50: "#e1f5fe",
            100: "#b3e5fc",
            200: "#81d4fa",
            300: "#4fc3f7",
            400: "#29b6f6",
            500: "#03a9f4",
            600: "#039be5",
            700: "#0288d1",
            800: "#0277bd",
            900: "#01579b",
            A100: "#80d8ff",
            A200: "#40c4ff",
            A400: "#00b0ff",
            A700: "#0091ea",
          },
          y = {
            50: "#e8f5e9",
            100: "#c8e6c9",
            200: "#a5d6a7",
            300: "#81c784",
            400: "#66bb6a",
            500: "#4caf50",
            600: "#43a047",
            700: "#388e3c",
            800: "#2e7d32",
            900: "#1b5e20",
            A100: "#b9f6ca",
            A200: "#69f0ae",
            A400: "#00e676",
            A700: "#00c853",
          },
          b = ["mode", "contrastThreshold", "tonalOffset"],
          x = {
            text: {
              primary: "rgba(0, 0, 0, 0.87)",
              secondary: "rgba(0, 0, 0, 0.6)",
              disabled: "rgba(0, 0, 0, 0.38)",
            },
            divider: "rgba(0, 0, 0, 0.12)",
            background: { paper: d.white, default: d.white },
            action: {
              active: "rgba(0, 0, 0, 0.54)",
              hover: "rgba(0, 0, 0, 0.04)",
              hoverOpacity: 0.04,
              selected: "rgba(0, 0, 0, 0.08)",
              selectedOpacity: 0.08,
              disabled: "rgba(0, 0, 0, 0.26)",
              disabledBackground: "rgba(0, 0, 0, 0.12)",
              disabledOpacity: 0.38,
              focus: "rgba(0, 0, 0, 0.12)",
              focusOpacity: 0.12,
              activatedOpacity: 0.12,
            },
          },
          w = {
            text: {
              primary: d.white,
              secondary: "rgba(255, 255, 255, 0.7)",
              disabled: "rgba(255, 255, 255, 0.5)",
              icon: "rgba(255, 255, 255, 0.5)",
            },
            divider: "rgba(255, 255, 255, 0.12)",
            background: { paper: "#121212", default: "#121212" },
            action: {
              active: d.white,
              hover: "rgba(255, 255, 255, 0.08)",
              hoverOpacity: 0.08,
              selected: "rgba(255, 255, 255, 0.16)",
              selectedOpacity: 0.16,
              disabled: "rgba(255, 255, 255, 0.3)",
              disabledBackground: "rgba(255, 255, 255, 0.12)",
              disabledOpacity: 0.38,
              focus: "rgba(255, 255, 255, 0.12)",
              focusOpacity: 0.12,
              activatedOpacity: 0.24,
            },
          };
        function k(e, t, n, r) {
          var o = r.light || r,
            i = r.dark || 1.5 * r;
          e[t] ||
            (e.hasOwnProperty(n)
              ? (e[t] = e[n])
              : "light" === t
              ? (e.light = (0, c.$n)(e.main, o))
              : "dark" === t && (e.dark = (0, c._j)(e.main, i)));
        }
        function S(e) {
          var t = e.mode,
            n = void 0 === t ? "light" : t,
            l = e.contrastThreshold,
            s = void 0 === l ? 3 : l,
            u = e.tonalOffset,
            S = void 0 === u ? 0.2 : u,
            Z = (0, o.Z)(e, b),
            E =
              e.primary ||
              (function () {
                return "dark" ===
                  (arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : "light")
                  ? { main: v[200], light: v[50], dark: v[400] }
                  : { main: v[700], light: v[400], dark: v[800] };
              })(n),
            C =
              e.secondary ||
              (function () {
                return "dark" ===
                  (arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : "light")
                  ? { main: p[200], light: p[50], dark: p[400] }
                  : { main: p[500], light: p[300], dark: p[700] };
              })(n),
            P =
              e.error ||
              (function () {
                return "dark" ===
                  (arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : "light")
                  ? { main: h[500], light: h[300], dark: h[700] }
                  : { main: h[700], light: h[400], dark: h[800] };
              })(n),
            M =
              e.info ||
              (function () {
                return "dark" ===
                  (arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : "light")
                  ? { main: g[400], light: g[300], dark: g[700] }
                  : { main: g[700], light: g[500], dark: g[900] };
              })(n),
            R =
              e.success ||
              (function () {
                return "dark" ===
                  (arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : "light")
                  ? { main: y[400], light: y[300], dark: y[700] }
                  : { main: y[800], light: y[500], dark: y[900] };
              })(n),
            T =
              e.warning ||
              (function () {
                return "dark" ===
                  (arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : "light")
                  ? { main: m[400], light: m[300], dark: m[700] }
                  : { main: "#ed6c02", light: m[500], dark: m[900] };
              })(n);
          function j(e) {
            return (0, c.mi)(e, w.text.primary) >= s
              ? w.text.primary
              : x.text.primary;
          }
          var O = function (e) {
              var t = e.color,
                n = e.name,
                o = e.mainShade,
                a = void 0 === o ? 500 : o,
                l = e.lightShade,
                s = void 0 === l ? 300 : l,
                u = e.darkShade,
                c = void 0 === u ? 700 : u;
              if (
                (!(t = (0, r.Z)({}, t)).main && t[a] && (t.main = t[a]),
                !t.hasOwnProperty("main"))
              )
                throw new Error((0, i.Z)(11, n ? " (".concat(n, ")") : "", a));
              if ("string" !== typeof t.main)
                throw new Error(
                  (0, i.Z)(
                    12,
                    n ? " (".concat(n, ")") : "",
                    JSON.stringify(t.main)
                  )
                );
              return (
                k(t, "light", s, S),
                k(t, "dark", c, S),
                t.contrastText || (t.contrastText = j(t.main)),
                t
              );
            },
            z = { dark: w, light: x };
          return (0, a.Z)(
            (0, r.Z)(
              {
                common: (0, r.Z)({}, d),
                mode: n,
                primary: O({ color: E, name: "primary" }),
                secondary: O({
                  color: C,
                  name: "secondary",
                  mainShade: "A400",
                  lightShade: "A200",
                  darkShade: "A700",
                }),
                error: O({ color: P, name: "error" }),
                warning: O({ color: T, name: "warning" }),
                info: O({ color: M, name: "info" }),
                success: O({ color: R, name: "success" }),
                grey: f,
                contrastThreshold: s,
                getContrastText: j,
                augmentColor: O,
                tonalOffset: S,
              },
              z[n]
            ),
            Z
          );
        }
        var Z = [
          "fontFamily",
          "fontSize",
          "fontWeightLight",
          "fontWeightRegular",
          "fontWeightMedium",
          "fontWeightBold",
          "htmlFontSize",
          "allVariants",
          "pxToRem",
        ];
        var E = { textTransform: "uppercase" },
          C = '"Roboto", "Helvetica", "Arial", sans-serif';
        function P(e, t) {
          var n = "function" === typeof t ? t(e) : t,
            i = n.fontFamily,
            l = void 0 === i ? C : i,
            s = n.fontSize,
            u = void 0 === s ? 14 : s,
            c = n.fontWeightLight,
            d = void 0 === c ? 300 : c,
            f = n.fontWeightRegular,
            p = void 0 === f ? 400 : f,
            h = n.fontWeightMedium,
            m = void 0 === h ? 500 : h,
            v = n.fontWeightBold,
            g = void 0 === v ? 700 : v,
            y = n.htmlFontSize,
            b = void 0 === y ? 16 : y,
            x = n.allVariants,
            w = n.pxToRem,
            k = (0, o.Z)(n, Z);
          var S = u / 14,
            P =
              w ||
              function (e) {
                return "".concat((e / b) * S, "rem");
              },
            M = function (e, t, n, o, i) {
              return (0, r.Z)(
                { fontFamily: l, fontWeight: e, fontSize: P(t), lineHeight: n },
                l === C
                  ? {
                      letterSpacing: "".concat(
                        ((a = o / t), Math.round(1e5 * a) / 1e5),
                        "em"
                      ),
                    }
                  : {},
                i,
                x
              );
              var a;
            },
            R = {
              h1: M(d, 96, 1.167, -1.5),
              h2: M(d, 60, 1.2, -0.5),
              h3: M(p, 48, 1.167, 0),
              h4: M(p, 34, 1.235, 0.25),
              h5: M(p, 24, 1.334, 0),
              h6: M(m, 20, 1.6, 0.15),
              subtitle1: M(p, 16, 1.75, 0.15),
              subtitle2: M(m, 14, 1.57, 0.1),
              body1: M(p, 16, 1.5, 0.15),
              body2: M(p, 14, 1.43, 0.15),
              button: M(m, 14, 1.75, 0.4, E),
              caption: M(p, 12, 1.66, 0.4),
              overline: M(p, 12, 2.66, 1, E),
            };
          return (0, a.Z)(
            (0, r.Z)(
              {
                htmlFontSize: b,
                pxToRem: P,
                fontFamily: l,
                fontSize: u,
                fontWeightLight: d,
                fontWeightRegular: p,
                fontWeightMedium: m,
                fontWeightBold: g,
              },
              R
            ),
            k,
            { clone: !1 }
          );
        }
        function M() {
          return [
            ""
              .concat(arguments.length <= 0 ? void 0 : arguments[0], "px ")
              .concat(arguments.length <= 1 ? void 0 : arguments[1], "px ")
              .concat(arguments.length <= 2 ? void 0 : arguments[2], "px ")
              .concat(
                arguments.length <= 3 ? void 0 : arguments[3],
                "px rgba(0,0,0,"
              )
              .concat(0.2, ")"),
            ""
              .concat(arguments.length <= 4 ? void 0 : arguments[4], "px ")
              .concat(arguments.length <= 5 ? void 0 : arguments[5], "px ")
              .concat(arguments.length <= 6 ? void 0 : arguments[6], "px ")
              .concat(
                arguments.length <= 7 ? void 0 : arguments[7],
                "px rgba(0,0,0,"
              )
              .concat(0.14, ")"),
            ""
              .concat(arguments.length <= 8 ? void 0 : arguments[8], "px ")
              .concat(arguments.length <= 9 ? void 0 : arguments[9], "px ")
              .concat(arguments.length <= 10 ? void 0 : arguments[10], "px ")
              .concat(
                arguments.length <= 11 ? void 0 : arguments[11],
                "px rgba(0,0,0,"
              )
              .concat(0.12, ")"),
          ].join(",");
        }
        var R = [
            "none",
            M(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
            M(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
            M(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
            M(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
            M(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
            M(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
            M(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
            M(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
            M(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
            M(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
            M(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
            M(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
            M(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
            M(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
            M(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
            M(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
            M(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
            M(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
            M(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
            M(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
            M(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
            M(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
            M(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
            M(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8),
          ],
          T = ["duration", "easing", "delay"],
          j = {
            easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
            easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
            easeIn: "cubic-bezier(0.4, 0, 1, 1)",
            sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
          },
          O = {
            shortest: 150,
            shorter: 200,
            short: 250,
            standard: 300,
            complex: 375,
            enteringScreen: 225,
            leavingScreen: 195,
          };
        function z(e) {
          return "".concat(Math.round(e), "ms");
        }
        function N(e) {
          if (!e) return 0;
          var t = e / 36;
          return Math.round(10 * (4 + 15 * Math.pow(t, 0.25) + t / 5));
        }
        function L(e) {
          var t = (0, r.Z)({}, j, e.easing),
            n = (0, r.Z)({}, O, e.duration);
          return (0, r.Z)(
            {
              getAutoHeightDuration: N,
              create: function () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : ["all"],
                  r =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  i = r.duration,
                  a = void 0 === i ? n.standard : i,
                  l = r.easing,
                  s = void 0 === l ? t.easeInOut : l,
                  u = r.delay,
                  c = void 0 === u ? 0 : u;
                (0, o.Z)(r, T);
                return (Array.isArray(e) ? e : [e])
                  .map(function (e) {
                    return ""
                      .concat(e, " ")
                      .concat("string" === typeof a ? a : z(a), " ")
                      .concat(s, " ")
                      .concat("string" === typeof c ? c : z(c));
                  })
                  .join(",");
              },
            },
            e,
            { easing: t, duration: n }
          );
        }
        var _ = {
            mobileStepper: 1e3,
            fab: 1050,
            speedDial: 1050,
            appBar: 1100,
            drawer: 1200,
            modal: 1300,
            snackbar: 1400,
            tooltip: 1500,
          },
          A = [
            "breakpoints",
            "mixins",
            "spacing",
            "palette",
            "transitions",
            "typography",
            "shape",
          ];
        function F() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t = e.mixins,
            n = void 0 === t ? {} : t,
            s = e.palette,
            c = void 0 === s ? {} : s,
            d = e.transitions,
            f = void 0 === d ? {} : d,
            p = e.typography,
            h = void 0 === p ? {} : p,
            m = (0, o.Z)(e, A);
          if (e.vars) throw new Error((0, i.Z)(18));
          var v = S(c),
            g = (0, l.Z)(e),
            y = (0, a.Z)(g, {
              mixins: u(g.breakpoints, n),
              palette: v,
              shadows: R.slice(),
              typography: P(v, h),
              transitions: L(f),
              zIndex: (0, r.Z)({}, _),
            });
          y = (0, a.Z)(y, m);
          for (
            var b = arguments.length, x = new Array(b > 1 ? b - 1 : 0), w = 1;
            w < b;
            w++
          )
            x[w - 1] = arguments[w];
          return (y = x.reduce(function (e, t) {
            return (0, a.Z)(e, t);
          }, y));
        }
        var I = F;
      },
      4205: function (e, t, n) {
        "use strict";
        var r = (0, n(4360).Z)();
        t.Z = r;
      },
      277: function (e, t, n) {
        "use strict";
        n.d(t, {
          FO: function () {
            return i;
          },
        });
        var r = n(4046),
          o = n(4205),
          i = function (e) {
            return (0, r.x9)(e) && "classes" !== e;
          },
          a = (0, r.ZP)({ defaultTheme: o.Z, rootShouldForwardProp: i });
        t.ZP = a;
      },
      5513: function (e, t, n) {
        "use strict";
        n.d(t, {
          Z: function () {
            return i;
          },
        });
        var r = n(6083),
          o = n(4205);
        function i(e) {
          var t = e.props,
            n = e.name;
          return (0, r.Z)({ props: t, name: n, defaultTheme: o.Z });
        }
      },
      9853: function (e, t, n) {
        "use strict";
        var r = n(7312);
        t.Z = r.Z;
      },
      1245: function (e, t, n) {
        "use strict";
        n.d(t, {
          Z: function () {
            return y;
          },
        });
        var r = n(7462),
          o = n(2791),
          i = n(3366),
          a = n(8182),
          l = n(4419),
          s = n(9853),
          u = n(5513),
          c = n(277),
          d = n(1217);
        function f(e) {
          return (0, d.Z)("MuiSvgIcon", e);
        }
        (0, n(5878).Z)("MuiSvgIcon", [
          "root",
          "colorPrimary",
          "colorSecondary",
          "colorAction",
          "colorError",
          "colorDisabled",
          "fontSizeInherit",
          "fontSizeSmall",
          "fontSizeMedium",
          "fontSizeLarge",
        ]);
        var p = n(184),
          h = [
            "children",
            "className",
            "color",
            "component",
            "fontSize",
            "htmlColor",
            "inheritViewBox",
            "titleAccess",
            "viewBox",
          ],
          m = (0, c.ZP)("svg", {
            name: "MuiSvgIcon",
            slot: "Root",
            overridesResolver: function (e, t) {
              var n = e.ownerState;
              return [
                t.root,
                "inherit" !== n.color && t["color".concat((0, s.Z)(n.color))],
                t["fontSize".concat((0, s.Z)(n.fontSize))],
              ];
            },
          })(function (e) {
            var t,
              n,
              r,
              o,
              i,
              a,
              l,
              s,
              u,
              c,
              d,
              f,
              p,
              h,
              m,
              v,
              g,
              y = e.theme,
              b = e.ownerState;
            return {
              userSelect: "none",
              width: "1em",
              height: "1em",
              display: "inline-block",
              fill: "currentColor",
              flexShrink: 0,
              transition:
                null == (t = y.transitions) || null == (n = t.create)
                  ? void 0
                  : n.call(t, "fill", {
                      duration:
                        null == (r = y.transitions) || null == (o = r.duration)
                          ? void 0
                          : o.shorter,
                    }),
              fontSize: {
                inherit: "inherit",
                small:
                  (null == (i = y.typography) || null == (a = i.pxToRem)
                    ? void 0
                    : a.call(i, 20)) || "1.25rem",
                medium:
                  (null == (l = y.typography) || null == (s = l.pxToRem)
                    ? void 0
                    : s.call(l, 24)) || "1.5rem",
                large:
                  (null == (u = y.typography) || null == (c = u.pxToRem)
                    ? void 0
                    : c.call(u, 35)) || "2.1875rem",
              }[b.fontSize],
              color:
                null !=
                (d =
                  null == (f = (y.vars || y).palette) ||
                  null == (p = f[b.color])
                    ? void 0
                    : p.main)
                  ? d
                  : {
                      action:
                        null == (h = (y.vars || y).palette) ||
                        null == (m = h.action)
                          ? void 0
                          : m.active,
                      disabled:
                        null == (v = (y.vars || y).palette) ||
                        null == (g = v.action)
                          ? void 0
                          : g.disabled,
                      inherit: void 0,
                    }[b.color],
            };
          }),
          v = o.forwardRef(function (e, t) {
            var n = (0, u.Z)({ props: e, name: "MuiSvgIcon" }),
              o = n.children,
              c = n.className,
              d = n.color,
              v = void 0 === d ? "inherit" : d,
              g = n.component,
              y = void 0 === g ? "svg" : g,
              b = n.fontSize,
              x = void 0 === b ? "medium" : b,
              w = n.htmlColor,
              k = n.inheritViewBox,
              S = void 0 !== k && k,
              Z = n.titleAccess,
              E = n.viewBox,
              C = void 0 === E ? "0 0 24 24" : E,
              P = (0, i.Z)(n, h),
              M = (0, r.Z)({}, n, {
                color: v,
                component: y,
                fontSize: x,
                instanceFontSize: e.fontSize,
                inheritViewBox: S,
                viewBox: C,
              }),
              R = {};
            S || (R.viewBox = C);
            var T = (function (e) {
              var t = e.color,
                n = e.fontSize,
                r = e.classes,
                o = {
                  root: [
                    "root",
                    "inherit" !== t && "color".concat((0, s.Z)(t)),
                    "fontSize".concat((0, s.Z)(n)),
                  ],
                };
              return (0, l.Z)(o, f, r);
            })(M);
            return (0,
            p.jsxs)(m, (0, r.Z)({ as: y, className: (0, a.Z)(T.root, c), focusable: "false", color: w, "aria-hidden": !Z || void 0, role: Z ? "img" : void 0, ref: t }, R, P, { ownerState: M, children: [o, Z ? (0, p.jsx)("title", { children: Z }) : null] }));
          });
        v.muiName = "SvgIcon";
        var g = v;
        function y(e, t) {
          var n = function (n, o) {
            return (0, p.jsx)(
              g,
              (0, r.Z)({ "data-testid": "".concat(t, "Icon"), ref: o }, n, {
                children: e,
              })
            );
          };
          return (n.muiName = g.muiName), o.memo(o.forwardRef(n));
        }
      },
      2977: function (e, t, n) {
        "use strict";
        var r = n(3981);
        t.Z = r.Z;
      },
      1142: function (e, t, n) {
        "use strict";
        n.r(t),
          n.d(t, {
            capitalize: function () {
              return o.Z;
            },
            createChainedFunction: function () {
              return i;
            },
            createSvgIcon: function () {
              return a.Z;
            },
            debounce: function () {
              return l.Z;
            },
            deprecatedPropType: function () {
              return s;
            },
            isMuiElement: function () {
              return u.Z;
            },
            ownerDocument: function () {
              return c.Z;
            },
            ownerWindow: function () {
              return d.Z;
            },
            requirePropFactory: function () {
              return f;
            },
            setRef: function () {
              return p;
            },
            unstable_ClassNameGenerator: function () {
              return w;
            },
            unstable_useEnhancedEffect: function () {
              return h.Z;
            },
            unstable_useId: function () {
              return m.Z;
            },
            unsupportedProp: function () {
              return v;
            },
            useControlled: function () {
              return g.Z;
            },
            useEventCallback: function () {
              return y.Z;
            },
            useForkRef: function () {
              return b.Z;
            },
            useIsFocusVisible: function () {
              return x.Z;
            },
          });
        var r = n(5902),
          o = n(9853),
          i = n(8949).Z,
          a = n(1245),
          l = n(2977);
        var s = function (e, t) {
            return function () {
              return null;
            };
          },
          u = n(6258),
          c = n(5783),
          d = n(8195);
        n(7462);
        var f = function (e, t) {
            return function () {
              return null;
            };
          },
          p = n(2971).Z,
          h = n(3026),
          m = n(1853);
        var v = function (e, t, n, r, o) {
            return null;
          },
          g = n(4938),
          y = n(9511),
          b = n(7933),
          x = n(2763),
          w = {
            configure: function (e) {
              console.warn(
                [
                  "MUI: `ClassNameGenerator` import from `@mui/material/utils` is outdated and might cause unexpected issues.",
                  "",
                  "You should use `import { unstable_ClassNameGenerator } from '@mui/material/className'` instead",
                  "",
                  "The detail of the issue: https://github.com/mui/material-ui/issues/30011#issuecomment-1024993401",
                  "",
                  "The updated documentation: https://mui.com/guides/classname-generator/",
                ].join("\n")
              ),
                r.Z.configure(e);
            },
          };
      },
      6258: function (e, t, n) {
        "use strict";
        n.d(t, {
          Z: function () {
            return o;
          },
        });
        var r = n(2791);
        var o = function (e, t) {
          return r.isValidElement(e) && -1 !== t.indexOf(e.type.muiName);
        };
      },
      5783: function (e, t, n) {
        "use strict";
        var r = n(9723);
        t.Z = r.Z;
      },
      8195: function (e, t, n) {
        "use strict";
        var r = n(7979);
        t.Z = r.Z;
      },
      4938: function (e, t, n) {
        "use strict";
        n.d(t, {
          Z: function () {
            return i;
          },
        });
        var r = n(885),
          o = n(2791);
        var i = function (e) {
          var t = e.controlled,
            n = e.default,
            i = (e.name, e.state, o.useRef(void 0 !== t).current),
            a = o.useState(n),
            l = (0, r.Z)(a, 2),
            s = l[0],
            u = l[1];
          return [
            i ? t : s,
            o.useCallback(function (e) {
              i || u(e);
            }, []),
          ];
        };
      },
      3026: function (e, t, n) {
        "use strict";
        var r = n(5721);
        t.Z = r.Z;
      },
      9511: function (e, t, n) {
        "use strict";
        var r = n(8956);
        t.Z = r.Z;
      },
      7933: function (e, t, n) {
        "use strict";
        var r = n(7563);
        t.Z = r.Z;
      },
      1853: function (e, t, n) {
        "use strict";
        var r = n(6248);
        t.Z = r.Z;
      },
      2763: function (e, t, n) {
        "use strict";
        n.d(t, {
          Z: function () {
            return f;
          },
        });
        var r,
          o = n(2791),
          i = !0,
          a = !1,
          l = {
            text: !0,
            search: !0,
            url: !0,
            tel: !0,
            email: !0,
            password: !0,
            number: !0,
            date: !0,
            month: !0,
            week: !0,
            time: !0,
            datetime: !0,
            "datetime-local": !0,
          };
        function s(e) {
          e.metaKey || e.altKey || e.ctrlKey || (i = !0);
        }
        function u() {
          i = !1;
        }
        function c() {
          "hidden" === this.visibilityState && a && (i = !0);
        }
        function d(e) {
          var t = e.target;
          try {
            return t.matches(":focus-visible");
          } catch (n) {}
          return (
            i ||
            (function (e) {
              var t = e.type,
                n = e.tagName;
              return (
                !("INPUT" !== n || !l[t] || e.readOnly) ||
                ("TEXTAREA" === n && !e.readOnly) ||
                !!e.isContentEditable
              );
            })(t)
          );
        }
        var f = function () {
          var e = o.useCallback(function (e) {
              var t;
              null != e &&
                ((t = e.ownerDocument).addEventListener("keydown", s, !0),
                t.addEventListener("mousedown", u, !0),
                t.addEventListener("pointerdown", u, !0),
                t.addEventListener("touchstart", u, !0),
                t.addEventListener("visibilitychange", c, !0));
            }, []),
            t = o.useRef(!1);
          return {
            isFocusVisibleRef: t,
            onFocus: function (e) {
              return !!d(e) && ((t.current = !0), !0);
            },
            onBlur: function () {
              return (
                !!t.current &&
                ((a = !0),
                window.clearTimeout(r),
                (r = window.setTimeout(function () {
                  a = !1;
                }, 100)),
                (t.current = !1),
                !0)
              );
            },
            ref: e,
          };
        };
      },
      6532: function (e, t) {
        "use strict";
        var n,
          r = Symbol.for("react.element"),
          o = Symbol.for("react.portal"),
          i = Symbol.for("react.fragment"),
          a = Symbol.for("react.strict_mode"),
          l = Symbol.for("react.profiler"),
          s = Symbol.for("react.provider"),
          u = Symbol.for("react.context"),
          c = Symbol.for("react.server_context"),
          d = Symbol.for("react.forward_ref"),
          f = Symbol.for("react.suspense"),
          p = Symbol.for("react.suspense_list"),
          h = Symbol.for("react.memo"),
          m = Symbol.for("react.lazy"),
          v = Symbol.for("react.offscreen");
        function g(e) {
          if ("object" === typeof e && null !== e) {
            var t = e.$$typeof;
            switch (t) {
              case r:
                switch ((e = e.type)) {
                  case i:
                  case l:
                  case a:
                  case f:
                  case p:
                    return e;
                  default:
                    switch ((e = e && e.$$typeof)) {
                      case c:
                      case u:
                      case d:
                      case m:
                      case h:
                      case s:
                        return e;
                      default:
                        return t;
                    }
                }
              case o:
                return t;
            }
          }
        }
        n = Symbol.for("react.module.reference");
      },
      8457: function (e, t, n) {
        "use strict";
        n(6532);
      },
      8023: function (e, t, n) {
        "use strict";
        var r = n(2791).createContext(null);
        t.Z = r;
      },
      9598: function (e, t, n) {
        "use strict";
        n.d(t, {
          Z: function () {
            return i;
          },
        });
        var r = n(2791),
          o = n(8023);
        function i() {
          return r.useContext(o.Z);
        }
      },
      2421: function (e, t, n) {
        "use strict";
        n.d(t, {
          ZP: function () {
            return x;
          },
          Co: function () {
            return w;
          },
        });
        var r = n(2791),
          o = n(7462),
          i = n(9797),
          a =
            /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
          l = (0, i.Z)(function (e) {
            return (
              a.test(e) ||
              (111 === e.charCodeAt(0) &&
                110 === e.charCodeAt(1) &&
                e.charCodeAt(2) < 91)
            );
          }),
          s = n(9886),
          u = n(5438),
          c = n(9140),
          d = n(2561),
          f = l,
          p = function (e) {
            return "theme" !== e;
          },
          h = function (e) {
            return "string" === typeof e && e.charCodeAt(0) > 96 ? f : p;
          },
          m = function (e, t, n) {
            var r;
            if (t) {
              var o = t.shouldForwardProp;
              r =
                e.__emotion_forwardProp && o
                  ? function (t) {
                      return e.__emotion_forwardProp(t) && o(t);
                    }
                  : o;
            }
            return (
              "function" !== typeof r && n && (r = e.__emotion_forwardProp), r
            );
          },
          v = function (e) {
            var t = e.cache,
              n = e.serialized,
              r = e.isStringTag;
            (0, u.hC)(t, n, r);
            (0, d.L)(function () {
              return (0, u.My)(t, n, r);
            });
            return null;
          },
          g = function e(t, n) {
            var i,
              a,
              l = t.__emotion_real === t,
              d = (l && t.__emotion_base) || t;
            void 0 !== n && ((i = n.label), (a = n.target));
            var f = m(t, n, l),
              p = f || h(d),
              g = !p("as");
            return function () {
              var y = arguments,
                b =
                  l && void 0 !== t.__emotion_styles
                    ? t.__emotion_styles.slice(0)
                    : [];
              if (
                (void 0 !== i && b.push("label:" + i + ";"),
                null == y[0] || void 0 === y[0].raw)
              )
                b.push.apply(b, y);
              else {
                0, b.push(y[0][0]);
                for (var x = y.length, w = 1; w < x; w++) b.push(y[w], y[0][w]);
              }
              var k = (0, s.w)(function (e, t, n) {
                var o = (g && e.as) || d,
                  i = "",
                  l = [],
                  m = e;
                if (null == e.theme) {
                  for (var y in ((m = {}), e)) m[y] = e[y];
                  m.theme = (0, r.useContext)(s.T);
                }
                "string" === typeof e.className
                  ? (i = (0, u.fp)(t.registered, l, e.className))
                  : null != e.className && (i = e.className + " ");
                var x = (0, c.O)(b.concat(l), t.registered, m);
                (i += t.key + "-" + x.name), void 0 !== a && (i += " " + a);
                var w = g && void 0 === f ? h(o) : p,
                  k = {};
                for (var S in e) (g && "as" === S) || (w(S) && (k[S] = e[S]));
                return (
                  (k.className = i),
                  (k.ref = n),
                  (0, r.createElement)(
                    r.Fragment,
                    null,
                    (0, r.createElement)(v, {
                      cache: t,
                      serialized: x,
                      isStringTag: "string" === typeof o,
                    }),
                    (0, r.createElement)(o, k)
                  )
                );
              });
              return (
                (k.displayName =
                  void 0 !== i
                    ? i
                    : "Styled(" +
                      ("string" === typeof d
                        ? d
                        : d.displayName || d.name || "Component") +
                      ")"),
                (k.defaultProps = t.defaultProps),
                (k.__emotion_real = k),
                (k.__emotion_base = d),
                (k.__emotion_styles = b),
                (k.__emotion_forwardProp = f),
                Object.defineProperty(k, "toString", {
                  value: function () {
                    return "." + a;
                  },
                }),
                (k.withComponent = function (t, r) {
                  return e(
                    t,
                    (0, o.Z)({}, n, r, { shouldForwardProp: m(k, r, !0) })
                  ).apply(void 0, b);
                }),
                k
              );
            };
          },
          y = g.bind();
        [
          "a",
          "abbr",
          "address",
          "area",
          "article",
          "aside",
          "audio",
          "b",
          "base",
          "bdi",
          "bdo",
          "big",
          "blockquote",
          "body",
          "br",
          "button",
          "canvas",
          "caption",
          "cite",
          "code",
          "col",
          "colgroup",
          "data",
          "datalist",
          "dd",
          "del",
          "details",
          "dfn",
          "dialog",
          "div",
          "dl",
          "dt",
          "em",
          "embed",
          "fieldset",
          "figcaption",
          "figure",
          "footer",
          "form",
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "h6",
          "head",
          "header",
          "hgroup",
          "hr",
          "html",
          "i",
          "iframe",
          "img",
          "input",
          "ins",
          "kbd",
          "keygen",
          "label",
          "legend",
          "li",
          "link",
          "main",
          "map",
          "mark",
          "marquee",
          "menu",
          "menuitem",
          "meta",
          "meter",
          "nav",
          "noscript",
          "object",
          "ol",
          "optgroup",
          "option",
          "output",
          "p",
          "param",
          "picture",
          "pre",
          "progress",
          "q",
          "rp",
          "rt",
          "ruby",
          "s",
          "samp",
          "script",
          "section",
          "select",
          "small",
          "source",
          "span",
          "strong",
          "style",
          "sub",
          "summary",
          "sup",
          "table",
          "tbody",
          "td",
          "textarea",
          "tfoot",
          "th",
          "thead",
          "time",
          "title",
          "tr",
          "track",
          "u",
          "ul",
          "var",
          "video",
          "wbr",
          "circle",
          "clipPath",
          "defs",
          "ellipse",
          "foreignObject",
          "g",
          "image",
          "line",
          "linearGradient",
          "mask",
          "path",
          "pattern",
          "polygon",
          "polyline",
          "radialGradient",
          "rect",
          "stop",
          "svg",
          "text",
          "tspan",
        ].forEach(function (e) {
          y[e] = y(e);
        });
        var b = y;
        function x(e, t) {
          return b(e, t);
        }
        var w = function (e, t) {
          Array.isArray(e.__emotion_styles) &&
            (e.__emotion_styles = t(e.__emotion_styles));
        };
      },
      1184: function (e, t, n) {
        "use strict";
        n.d(t, {
          L7: function () {
            return l;
          },
          P$: function () {
            return s;
          },
          VO: function () {
            return r;
          },
          W8: function () {
            return a;
          },
          k9: function () {
            return i;
          },
        });
        var r = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
          o = {
            keys: ["xs", "sm", "md", "lg", "xl"],
            up: function (e) {
              return "@media (min-width:".concat(r[e], "px)");
            },
          };
        function i(e, t, n) {
          var i = e.theme || {};
          if (Array.isArray(t)) {
            var a = i.breakpoints || o;
            return t.reduce(function (e, r, o) {
              return (e[a.up(a.keys[o])] = n(t[o])), e;
            }, {});
          }
          if ("object" === typeof t) {
            var l = i.breakpoints || o;
            return Object.keys(t).reduce(function (e, o) {
              if (-1 !== Object.keys(l.values || r).indexOf(o)) {
                e[l.up(o)] = n(t[o], o);
              } else {
                var i = o;
                e[i] = t[i];
              }
              return e;
            }, {});
          }
          return n(t);
        }
        function a() {
          var e,
            t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            n =
              null == (e = t.keys)
                ? void 0
                : e.reduce(function (e, n) {
                    return (e[t.up(n)] = {}), e;
                  }, {});
          return n || {};
        }
        function l(e, t) {
          return e.reduce(function (e, t) {
            var n = e[t];
            return (!n || 0 === Object.keys(n).length) && delete e[t], e;
          }, t);
        }
        function s(e) {
          var t,
            n = e.values,
            r = e.breakpoints,
            o =
              e.base ||
              (function (e, t) {
                if ("object" !== typeof e) return {};
                var n = {},
                  r = Object.keys(t);
                return (
                  Array.isArray(e)
                    ? r.forEach(function (t, r) {
                        r < e.length && (n[t] = !0);
                      })
                    : r.forEach(function (t) {
                        null != e[t] && (n[t] = !0);
                      }),
                  n
                );
              })(n, r),
            i = Object.keys(o);
          return 0 === i.length
            ? n
            : i.reduce(function (e, r, o) {
                return (
                  Array.isArray(n)
                    ? ((e[r] = null != n[o] ? n[o] : n[t]), (t = o))
                    : "object" === typeof n
                    ? ((e[r] = null != n[r] ? n[r] : n[t]), (t = r))
                    : (e[r] = n),
                  e
                );
              }, {});
        }
      },
      2065: function (e, t, n) {
        "use strict";
        n.d(t, {
          $n: function () {
            return d;
          },
          Fq: function () {
            return u;
          },
          _j: function () {
            return c;
          },
          mi: function () {
            return s;
          },
        });
        var r = n(6189);
        function o(e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0,
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 1;
          return Math.min(Math.max(t, e), n);
        }
        function i(e) {
          if (e.type) return e;
          if ("#" === e.charAt(0))
            return i(
              (function (e) {
                e = e.slice(1);
                var t = new RegExp(
                    ".{1,".concat(e.length >= 6 ? 2 : 1, "}"),
                    "g"
                  ),
                  n = e.match(t);
                return (
                  n &&
                    1 === n[0].length &&
                    (n = n.map(function (e) {
                      return e + e;
                    })),
                  n
                    ? "rgb".concat(4 === n.length ? "a" : "", "(").concat(
                        n
                          .map(function (e, t) {
                            return t < 3
                              ? parseInt(e, 16)
                              : Math.round((parseInt(e, 16) / 255) * 1e3) / 1e3;
                          })
                          .join(", "),
                        ")"
                      )
                    : ""
                );
              })(e)
            );
          var t = e.indexOf("("),
            n = e.substring(0, t);
          if (-1 === ["rgb", "rgba", "hsl", "hsla", "color"].indexOf(n))
            throw new Error((0, r.Z)(9, e));
          var o,
            a = e.substring(t + 1, e.length - 1);
          if ("color" === n) {
            if (
              ((o = (a = a.split(" ")).shift()),
              4 === a.length &&
                "/" === a[3].charAt(0) &&
                (a[3] = a[3].slice(1)),
              -1 ===
                [
                  "srgb",
                  "display-p3",
                  "a98-rgb",
                  "prophoto-rgb",
                  "rec-2020",
                ].indexOf(o))
            )
              throw new Error((0, r.Z)(10, o));
          } else a = a.split(",");
          return {
            type: n,
            values: (a = a.map(function (e) {
              return parseFloat(e);
            })),
            colorSpace: o,
          };
        }
        function a(e) {
          var t = e.type,
            n = e.colorSpace,
            r = e.values;
          return (
            -1 !== t.indexOf("rgb")
              ? (r = r.map(function (e, t) {
                  return t < 3 ? parseInt(e, 10) : e;
                }))
              : -1 !== t.indexOf("hsl") &&
                ((r[1] = "".concat(r[1], "%")), (r[2] = "".concat(r[2], "%"))),
            (r =
              -1 !== t.indexOf("color")
                ? "".concat(n, " ").concat(r.join(" "))
                : "".concat(r.join(", "))),
            "".concat(t, "(").concat(r, ")")
          );
        }
        function l(e) {
          var t =
            "hsl" === (e = i(e)).type || "hsla" === e.type
              ? i(
                  (function (e) {
                    var t = (e = i(e)).values,
                      n = t[0],
                      r = t[1] / 100,
                      o = t[2] / 100,
                      l = r * Math.min(o, 1 - o),
                      s = function (e) {
                        var t =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : (e + n / 30) % 12;
                        return o - l * Math.max(Math.min(t - 3, 9 - t, 1), -1);
                      },
                      u = "rgb",
                      c = [
                        Math.round(255 * s(0)),
                        Math.round(255 * s(8)),
                        Math.round(255 * s(4)),
                      ];
                    return (
                      "hsla" === e.type && ((u += "a"), c.push(t[3])),
                      a({ type: u, values: c })
                    );
                  })(e)
                ).values
              : e.values;
          return (
            (t = t.map(function (t) {
              return (
                "color" !== e.type && (t /= 255),
                t <= 0.03928 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4)
              );
            })),
            Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3))
          );
        }
        function s(e, t) {
          var n = l(e),
            r = l(t);
          return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
        }
        function u(e, t) {
          return (
            (e = i(e)),
            (t = o(t)),
            ("rgb" !== e.type && "hsl" !== e.type) || (e.type += "a"),
            "color" === e.type
              ? (e.values[3] = "/".concat(t))
              : (e.values[3] = t),
            a(e)
          );
        }
        function c(e, t) {
          if (((e = i(e)), (t = o(t)), -1 !== e.type.indexOf("hsl")))
            e.values[2] *= 1 - t;
          else if (
            -1 !== e.type.indexOf("rgb") ||
            -1 !== e.type.indexOf("color")
          )
            for (var n = 0; n < 3; n += 1) e.values[n] *= 1 - t;
          return a(e);
        }
        function d(e, t) {
          if (((e = i(e)), (t = o(t)), -1 !== e.type.indexOf("hsl")))
            e.values[2] += (100 - e.values[2]) * t;
          else if (-1 !== e.type.indexOf("rgb"))
            for (var n = 0; n < 3; n += 1)
              e.values[n] += (255 - e.values[n]) * t;
          else if (-1 !== e.type.indexOf("color"))
            for (var r = 0; r < 3; r += 1) e.values[r] += (1 - e.values[r]) * t;
          return a(e);
        }
      },
      4046: function (e, t, n) {
        "use strict";
        n.d(t, {
          ZP: function () {
            return Z;
          },
          x9: function () {
            return k;
          },
        });
        var r = n(2982),
          o = n(885),
          i = n(3366),
          a = n(7462),
          l = n(2421),
          s = n(5080),
          u = n(7312),
          c = ["variant"];
        function d(e) {
          return 0 === e.length;
        }
        function f(e) {
          var t = e.variant,
            n = (0, i.Z)(e, c),
            r = t || "";
          return (
            Object.keys(n)
              .sort()
              .forEach(function (t) {
                r +=
                  "color" === t
                    ? d(r)
                      ? e[t]
                      : (0, u.Z)(e[t])
                    : ""
                        .concat(d(r) ? t : (0, u.Z)(t))
                        .concat((0, u.Z)(e[t].toString()));
              }),
            r
          );
        }
        var p = n(104),
          h = [
            "name",
            "slot",
            "skipVariantsResolver",
            "skipSx",
            "overridesResolver",
          ],
          m = ["theme"],
          v = ["theme"];
        function g(e) {
          return 0 === Object.keys(e).length;
        }
        function y(e) {
          return "string" === typeof e && e.charCodeAt(0) > 96;
        }
        var b = function (e, t) {
            return t.components &&
              t.components[e] &&
              t.components[e].styleOverrides
              ? t.components[e].styleOverrides
              : null;
          },
          x = function (e, t) {
            var n = [];
            t &&
              t.components &&
              t.components[e] &&
              t.components[e].variants &&
              (n = t.components[e].variants);
            var r = {};
            return (
              n.forEach(function (e) {
                var t = f(e.props);
                r[t] = e.style;
              }),
              r
            );
          },
          w = function (e, t, n, r) {
            var o,
              i,
              a = e.ownerState,
              l = void 0 === a ? {} : a,
              s = [],
              u =
                null == n || null == (o = n.components) || null == (i = o[r])
                  ? void 0
                  : i.variants;
            return (
              u &&
                u.forEach(function (n) {
                  var r = !0;
                  Object.keys(n.props).forEach(function (t) {
                    l[t] !== n.props[t] && e[t] !== n.props[t] && (r = !1);
                  }),
                    r && s.push(t[f(n.props)]);
                }),
              s
            );
          };
        function k(e) {
          return (
            "ownerState" !== e && "theme" !== e && "sx" !== e && "as" !== e
          );
        }
        var S = (0, s.Z)();
        function Z() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t = e.defaultTheme,
            n = void 0 === t ? S : t,
            s = e.rootShouldForwardProp,
            u = void 0 === s ? k : s,
            c = e.slotShouldForwardProp,
            d = void 0 === c ? k : c,
            f = e.styleFunctionSx,
            Z = void 0 === f ? p.Z : f,
            E = function (e) {
              var t = g(e.theme) ? n : e.theme;
              return Z((0, a.Z)({}, e, { theme: t }));
            };
          return (
            (E.__mui_systemSx = !0),
            function (e) {
              var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              (0, l.Co)(e, function (e) {
                return e.filter(function (e) {
                  return !(null != e && e.__mui_systemSx);
                });
              });
              var s,
                c = t.name,
                f = t.slot,
                p = t.skipVariantsResolver,
                S = t.skipSx,
                Z = t.overridesResolver,
                C = (0, i.Z)(t, h),
                P = void 0 !== p ? p : (f && "Root" !== f) || !1,
                M = S || !1;
              var R = k;
              "Root" === f ? (R = u) : f ? (R = d) : y(e) && (R = void 0);
              var T = (0, l.ZP)(
                  e,
                  (0, a.Z)({ shouldForwardProp: R, label: s }, C)
                ),
                j = function (e) {
                  for (
                    var t = arguments.length,
                      l = new Array(t > 1 ? t - 1 : 0),
                      s = 1;
                    s < t;
                    s++
                  )
                    l[s - 1] = arguments[s];
                  var u = l
                      ? l.map(function (e) {
                          return "function" === typeof e &&
                            e.__emotion_real !== e
                            ? function (t) {
                                var r = t.theme,
                                  o = (0, i.Z)(t, m);
                                return e((0, a.Z)({ theme: g(r) ? n : r }, o));
                              }
                            : e;
                        })
                      : [],
                    d = e;
                  c &&
                    Z &&
                    u.push(function (e) {
                      var t = g(e.theme) ? n : e.theme,
                        r = b(c, t);
                      if (r) {
                        var i = {};
                        return (
                          Object.entries(r).forEach(function (n) {
                            var r = (0, o.Z)(n, 2),
                              l = r[0],
                              s = r[1];
                            i[l] =
                              "function" === typeof s
                                ? s((0, a.Z)({}, e, { theme: t }))
                                : s;
                          }),
                          Z(e, i)
                        );
                      }
                      return null;
                    }),
                    c &&
                      !P &&
                      u.push(function (e) {
                        var t = g(e.theme) ? n : e.theme;
                        return w(e, x(c, t), t, c);
                      }),
                    M || u.push(E);
                  var f = u.length - l.length;
                  if (Array.isArray(e) && f > 0) {
                    var p = new Array(f).fill("");
                    (d = [].concat((0, r.Z)(e), (0, r.Z)(p))).raw = [].concat(
                      (0, r.Z)(e.raw),
                      (0, r.Z)(p)
                    );
                  } else
                    "function" === typeof e &&
                      e.__emotion_real !== e &&
                      (d = function (t) {
                        var r = t.theme,
                          o = (0, i.Z)(t, v);
                        return e((0, a.Z)({ theme: g(r) ? n : r }, o));
                      });
                  var h = T.apply(void 0, [d].concat((0, r.Z)(u)));
                  return h;
                };
              return T.withConfig && (j.withConfig = T.withConfig), j;
            }
          );
        }
      },
      5080: function (e, t, n) {
        "use strict";
        n.d(t, {
          Z: function () {
            return p;
          },
        });
        var r = n(7462),
          o = n(3366),
          i = n(2466),
          a = n(4942),
          l = ["values", "unit", "step"];
        function s(e) {
          var t = e.values,
            n =
              void 0 === t
                ? { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 }
                : t,
            i = e.unit,
            s = void 0 === i ? "px" : i,
            u = e.step,
            c = void 0 === u ? 5 : u,
            d = (0, o.Z)(e, l),
            f = (function (e) {
              var t =
                Object.keys(e).map(function (t) {
                  return { key: t, val: e[t] };
                }) || [];
              return (
                t.sort(function (e, t) {
                  return e.val - t.val;
                }),
                t.reduce(function (e, t) {
                  return (0, r.Z)({}, e, (0, a.Z)({}, t.key, t.val));
                }, {})
              );
            })(n),
            p = Object.keys(f);
          function h(e) {
            var t = "number" === typeof n[e] ? n[e] : e;
            return "@media (min-width:".concat(t).concat(s, ")");
          }
          function m(e) {
            var t = "number" === typeof n[e] ? n[e] : e;
            return "@media (max-width:".concat(t - c / 100).concat(s, ")");
          }
          function v(e, t) {
            var r = p.indexOf(t);
            return (
              "@media (min-width:"
                .concat("number" === typeof n[e] ? n[e] : e)
                .concat(s, ") and ") +
              "(max-width:"
                .concat(
                  (-1 !== r && "number" === typeof n[p[r]] ? n[p[r]] : t) -
                    c / 100
                )
                .concat(s, ")")
            );
          }
          return (0, r.Z)(
            {
              keys: p,
              values: f,
              up: h,
              down: m,
              between: v,
              only: function (e) {
                return p.indexOf(e) + 1 < p.length
                  ? v(e, p[p.indexOf(e) + 1])
                  : h(e);
              },
              not: function (e) {
                var t = p.indexOf(e);
                return 0 === t
                  ? h(p[1])
                  : t === p.length - 1
                  ? m(p[t])
                  : v(e, p[p.indexOf(e) + 1]).replace(
                      "@media",
                      "@media not all and"
                    );
              },
              unit: s,
            },
            d
          );
        }
        var u = { borderRadius: 4 },
          c = n(5682);
        function d() {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 8;
          if (e.mui) return e;
          var t = (0, c.hB)({ spacing: e }),
            n = function () {
              for (
                var e = arguments.length, n = new Array(e), r = 0;
                r < e;
                r++
              )
                n[r] = arguments[r];
              var o = 0 === n.length ? [1] : n;
              return o
                .map(function (e) {
                  var n = t(e);
                  return "number" === typeof n ? "".concat(n, "px") : n;
                })
                .join(" ");
            };
          return (n.mui = !0), n;
        }
        var f = ["breakpoints", "palette", "spacing", "shape"];
        var p = function () {
          for (
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = e.breakpoints,
              n = void 0 === t ? {} : t,
              a = e.palette,
              l = void 0 === a ? {} : a,
              c = e.spacing,
              p = e.shape,
              h = void 0 === p ? {} : p,
              m = (0, o.Z)(e, f),
              v = s(n),
              g = d(c),
              y = (0, i.Z)(
                {
                  breakpoints: v,
                  direction: "ltr",
                  components: {},
                  palette: (0, r.Z)({ mode: "light" }, l),
                  spacing: g,
                  shape: (0, r.Z)({}, u, h),
                },
                m
              ),
              b = arguments.length,
              x = new Array(b > 1 ? b - 1 : 0),
              w = 1;
            w < b;
            w++
          )
            x[w - 1] = arguments[w];
          return (y = x.reduce(function (e, t) {
            return (0, i.Z)(e, t);
          }, y));
        };
      },
      114: function (e, t, n) {
        "use strict";
        n.d(t, {
          Gc: function () {
            return G;
          },
          G$: function () {
            return K;
          },
        });
        var r = n(8529),
          o = n(8247);
        var i = function () {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            var r = t.reduce(function (e, t) {
                return (
                  t.filterProps.forEach(function (n) {
                    e[n] = t;
                  }),
                  e
                );
              }, {}),
              i = function (e) {
                return Object.keys(e).reduce(function (t, n) {
                  return r[n] ? (0, o.Z)(t, r[n](e)) : t;
                }, {});
              };
            return (
              (i.propTypes = {}),
              (i.filterProps = t.reduce(function (e, t) {
                return e.concat(t.filterProps);
              }, [])),
              i
            );
          },
          a = n(5682),
          l = n(1184);
        function s(e) {
          return "number" !== typeof e ? e : "".concat(e, "px solid");
        }
        var u = (0, r.Z)({ prop: "border", themeKey: "borders", transform: s }),
          c = (0, r.Z)({
            prop: "borderTop",
            themeKey: "borders",
            transform: s,
          }),
          d = (0, r.Z)({
            prop: "borderRight",
            themeKey: "borders",
            transform: s,
          }),
          f = (0, r.Z)({
            prop: "borderBottom",
            themeKey: "borders",
            transform: s,
          }),
          p = (0, r.Z)({
            prop: "borderLeft",
            themeKey: "borders",
            transform: s,
          }),
          h = (0, r.Z)({ prop: "borderColor", themeKey: "palette" }),
          m = (0, r.Z)({ prop: "borderTopColor", themeKey: "palette" }),
          v = (0, r.Z)({ prop: "borderRightColor", themeKey: "palette" }),
          g = (0, r.Z)({ prop: "borderBottomColor", themeKey: "palette" }),
          y = (0, r.Z)({ prop: "borderLeftColor", themeKey: "palette" }),
          b = function (e) {
            if (void 0 !== e.borderRadius && null !== e.borderRadius) {
              var t = (0, a.eI)(
                e.theme,
                "shape.borderRadius",
                4,
                "borderRadius"
              );
              return (0, l.k9)(e, e.borderRadius, function (e) {
                return { borderRadius: (0, a.NA)(t, e) };
              });
            }
            return null;
          };
        (b.propTypes = {}), (b.filterProps = ["borderRadius"]);
        var x = i(u, c, d, f, p, h, m, v, g, y, b),
          w = i(
            (0, r.Z)({
              prop: "displayPrint",
              cssProperty: !1,
              transform: function (e) {
                return { "@media print": { display: e } };
              },
            }),
            (0, r.Z)({ prop: "display" }),
            (0, r.Z)({ prop: "overflow" }),
            (0, r.Z)({ prop: "textOverflow" }),
            (0, r.Z)({ prop: "visibility" }),
            (0, r.Z)({ prop: "whiteSpace" })
          ),
          k = i(
            (0, r.Z)({ prop: "flexBasis" }),
            (0, r.Z)({ prop: "flexDirection" }),
            (0, r.Z)({ prop: "flexWrap" }),
            (0, r.Z)({ prop: "justifyContent" }),
            (0, r.Z)({ prop: "alignItems" }),
            (0, r.Z)({ prop: "alignContent" }),
            (0, r.Z)({ prop: "order" }),
            (0, r.Z)({ prop: "flex" }),
            (0, r.Z)({ prop: "flexGrow" }),
            (0, r.Z)({ prop: "flexShrink" }),
            (0, r.Z)({ prop: "alignSelf" }),
            (0, r.Z)({ prop: "justifyItems" }),
            (0, r.Z)({ prop: "justifySelf" })
          ),
          S = function (e) {
            if (void 0 !== e.gap && null !== e.gap) {
              var t = (0, a.eI)(e.theme, "spacing", 8, "gap");
              return (0, l.k9)(e, e.gap, function (e) {
                return { gap: (0, a.NA)(t, e) };
              });
            }
            return null;
          };
        (S.propTypes = {}), (S.filterProps = ["gap"]);
        var Z = function (e) {
          if (void 0 !== e.columnGap && null !== e.columnGap) {
            var t = (0, a.eI)(e.theme, "spacing", 8, "columnGap");
            return (0, l.k9)(e, e.columnGap, function (e) {
              return { columnGap: (0, a.NA)(t, e) };
            });
          }
          return null;
        };
        (Z.propTypes = {}), (Z.filterProps = ["columnGap"]);
        var E = function (e) {
          if (void 0 !== e.rowGap && null !== e.rowGap) {
            var t = (0, a.eI)(e.theme, "spacing", 8, "rowGap");
            return (0, l.k9)(e, e.rowGap, function (e) {
              return { rowGap: (0, a.NA)(t, e) };
            });
          }
          return null;
        };
        (E.propTypes = {}), (E.filterProps = ["rowGap"]);
        var C = i(
            S,
            Z,
            E,
            (0, r.Z)({ prop: "gridColumn" }),
            (0, r.Z)({ prop: "gridRow" }),
            (0, r.Z)({ prop: "gridAutoFlow" }),
            (0, r.Z)({ prop: "gridAutoColumns" }),
            (0, r.Z)({ prop: "gridAutoRows" }),
            (0, r.Z)({ prop: "gridTemplateColumns" }),
            (0, r.Z)({ prop: "gridTemplateRows" }),
            (0, r.Z)({ prop: "gridTemplateAreas" }),
            (0, r.Z)({ prop: "gridArea" })
          ),
          P = i(
            (0, r.Z)({ prop: "position" }),
            (0, r.Z)({ prop: "zIndex", themeKey: "zIndex" }),
            (0, r.Z)({ prop: "top" }),
            (0, r.Z)({ prop: "right" }),
            (0, r.Z)({ prop: "bottom" }),
            (0, r.Z)({ prop: "left" })
          ),
          M = i(
            (0, r.Z)({ prop: "color", themeKey: "palette" }),
            (0, r.Z)({
              prop: "bgcolor",
              cssProperty: "backgroundColor",
              themeKey: "palette",
            }),
            (0, r.Z)({ prop: "backgroundColor", themeKey: "palette" })
          ),
          R = (0, r.Z)({ prop: "boxShadow", themeKey: "shadows" });
        function T(e) {
          return e <= 1 && 0 !== e ? "".concat(100 * e, "%") : e;
        }
        var j = (0, r.Z)({ prop: "width", transform: T }),
          O = function (e) {
            if (void 0 !== e.maxWidth && null !== e.maxWidth) {
              return (0, l.k9)(e, e.maxWidth, function (t) {
                var n, r, o;
                return {
                  maxWidth:
                    (null == (n = e.theme) ||
                    null == (r = n.breakpoints) ||
                    null == (o = r.values)
                      ? void 0
                      : o[t]) ||
                    l.VO[t] ||
                    T(t),
                };
              });
            }
            return null;
          };
        O.filterProps = ["maxWidth"];
        var z = (0, r.Z)({ prop: "minWidth", transform: T }),
          N = (0, r.Z)({ prop: "height", transform: T }),
          L = (0, r.Z)({ prop: "maxHeight", transform: T }),
          _ = (0, r.Z)({ prop: "minHeight", transform: T }),
          A =
            ((0, r.Z)({ prop: "size", cssProperty: "width", transform: T }),
            (0, r.Z)({ prop: "size", cssProperty: "height", transform: T }),
            i(j, O, z, N, L, _, (0, r.Z)({ prop: "boxSizing" }))),
          F = (0, r.Z)({ prop: "fontFamily", themeKey: "typography" }),
          I = (0, r.Z)({ prop: "fontSize", themeKey: "typography" }),
          D = (0, r.Z)({ prop: "fontStyle", themeKey: "typography" }),
          W = (0, r.Z)({ prop: "fontWeight", themeKey: "typography" }),
          B = (0, r.Z)({ prop: "letterSpacing" }),
          V = (0, r.Z)({ prop: "textTransform" }),
          H = (0, r.Z)({ prop: "lineHeight" }),
          U = (0, r.Z)({ prop: "textAlign" }),
          $ = i(
            (0, r.Z)({
              prop: "typography",
              cssProperty: !1,
              themeKey: "typography",
            }),
            F,
            I,
            D,
            W,
            B,
            H,
            U,
            V
          ),
          q = {
            borders: x.filterProps,
            display: w.filterProps,
            flexbox: k.filterProps,
            grid: C.filterProps,
            positions: P.filterProps,
            palette: M.filterProps,
            shadows: R.filterProps,
            sizing: A.filterProps,
            spacing: a.ZP.filterProps,
            typography: $.filterProps,
          },
          K = {
            borders: x,
            display: w,
            flexbox: k,
            grid: C,
            positions: P,
            palette: M,
            shadows: R,
            sizing: A,
            spacing: a.ZP,
            typography: $,
          },
          G = Object.keys(q).reduce(function (e, t) {
            return (
              q[t].forEach(function (n) {
                e[n] = K[t];
              }),
              e
            );
          }, {});
      },
      8247: function (e, t, n) {
        "use strict";
        var r = n(2466);
        t.Z = function (e, t) {
          return t ? (0, r.Z)(e, t, { clone: !1 }) : e;
        };
      },
      5682: function (e, t, n) {
        "use strict";
        n.d(t, {
          hB: function () {
            return m;
          },
          eI: function () {
            return h;
          },
          ZP: function () {
            return k;
          },
          NA: function () {
            return v;
          },
        });
        var r = n(885),
          o = n(1184),
          i = n(8529),
          a = n(8247);
        var l = { m: "margin", p: "padding" },
          s = {
            t: "Top",
            r: "Right",
            b: "Bottom",
            l: "Left",
            x: ["Left", "Right"],
            y: ["Top", "Bottom"],
          },
          u = { marginX: "mx", marginY: "my", paddingX: "px", paddingY: "py" },
          c = (function (e) {
            var t = {};
            return function (n) {
              return void 0 === t[n] && (t[n] = e(n)), t[n];
            };
          })(function (e) {
            if (e.length > 2) {
              if (!u[e]) return [e];
              e = u[e];
            }
            var t = e.split(""),
              n = (0, r.Z)(t, 2),
              o = n[0],
              i = n[1],
              a = l[o],
              c = s[i] || "";
            return Array.isArray(c)
              ? c.map(function (e) {
                  return a + e;
                })
              : [a + c];
          }),
          d = [
            "m",
            "mt",
            "mr",
            "mb",
            "ml",
            "mx",
            "my",
            "margin",
            "marginTop",
            "marginRight",
            "marginBottom",
            "marginLeft",
            "marginX",
            "marginY",
            "marginInline",
            "marginInlineStart",
            "marginInlineEnd",
            "marginBlock",
            "marginBlockStart",
            "marginBlockEnd",
          ],
          f = [
            "p",
            "pt",
            "pr",
            "pb",
            "pl",
            "px",
            "py",
            "padding",
            "paddingTop",
            "paddingRight",
            "paddingBottom",
            "paddingLeft",
            "paddingX",
            "paddingY",
            "paddingInline",
            "paddingInlineStart",
            "paddingInlineEnd",
            "paddingBlock",
            "paddingBlockStart",
            "paddingBlockEnd",
          ],
          p = [].concat(d, f);
        function h(e, t, n, r) {
          var o,
            a = null != (o = (0, i.D)(e, t, !1)) ? o : n;
          return "number" === typeof a
            ? function (e) {
                return "string" === typeof e ? e : a * e;
              }
            : Array.isArray(a)
            ? function (e) {
                return "string" === typeof e ? e : a[e];
              }
            : "function" === typeof a
            ? a
            : function () {};
        }
        function m(e) {
          return h(e, "spacing", 8);
        }
        function v(e, t) {
          if ("string" === typeof t || null == t) return t;
          var n = e(Math.abs(t));
          return t >= 0 ? n : "number" === typeof n ? -n : "-".concat(n);
        }
        function g(e, t, n, r) {
          if (-1 === t.indexOf(n)) return null;
          var i = (function (e, t) {
              return function (n) {
                return e.reduce(function (e, r) {
                  return (e[r] = v(t, n)), e;
                }, {});
              };
            })(c(n), r),
            a = e[n];
          return (0, o.k9)(e, a, i);
        }
        function y(e, t) {
          var n = m(e.theme);
          return Object.keys(e)
            .map(function (r) {
              return g(e, t, r, n);
            })
            .reduce(a.Z, {});
        }
        function b(e) {
          return y(e, d);
        }
        function x(e) {
          return y(e, f);
        }
        function w(e) {
          return y(e, p);
        }
        (b.propTypes = {}),
          (b.filterProps = d),
          (x.propTypes = {}),
          (x.filterProps = f),
          (w.propTypes = {}),
          (w.filterProps = p);
        var k = w;
      },
      8529: function (e, t, n) {
        "use strict";
        n.d(t, {
          D: function () {
            return a;
          },
        });
        var r = n(4942),
          o = n(7312),
          i = n(1184);
        function a(e, t) {
          var n =
            !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          if (!t || "string" !== typeof t) return null;
          if (e && e.vars && n) {
            var r = "vars."
              .concat(t)
              .split(".")
              .reduce(function (e, t) {
                return e && e[t] ? e[t] : null;
              }, e);
            if (null != r) return r;
          }
          return t.split(".").reduce(function (e, t) {
            return e && null != e[t] ? e[t] : null;
          }, e);
        }
        function l(e, t, n) {
          var r,
            o =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : n;
          return (
            (r =
              "function" === typeof e
                ? e(n)
                : Array.isArray(e)
                ? e[n] || o
                : a(e, n) || o),
            t && (r = t(r)),
            r
          );
        }
        t.Z = function (e) {
          var t = e.prop,
            n = e.cssProperty,
            s = void 0 === n ? e.prop : n,
            u = e.themeKey,
            c = e.transform,
            d = function (e) {
              if (null == e[t]) return null;
              var n = e[t],
                d = a(e.theme, u) || {};
              return (0, i.k9)(e, n, function (e) {
                var n = l(d, c, e);
                return (
                  e === n &&
                    "string" === typeof e &&
                    (n = l(
                      d,
                      c,
                      "".concat(t).concat("default" === e ? "" : (0, o.Z)(e)),
                      e
                    )),
                  !1 === s ? n : (0, r.Z)({}, s, n)
                );
              });
            };
          return (d.propTypes = {}), (d.filterProps = [t]), d;
        };
      },
      104: function (e, t, n) {
        "use strict";
        var r = n(4942),
          o = n(8247),
          i = n(114),
          a = n(1184);
        function l() {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          var r = t.reduce(function (e, t) {
              return e.concat(Object.keys(t));
            }, []),
            o = new Set(r);
          return t.every(function (e) {
            return o.size === Object.keys(e).length;
          });
        }
        function s(e, t) {
          return "function" === typeof e ? e(t) : e;
        }
        var u = (function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : i.G$,
            t = Object.keys(e).reduce(function (t, n) {
              return (
                e[n].filterProps.forEach(function (r) {
                  t[r] = e[n];
                }),
                t
              );
            }, {});
          function n(e, n, o) {
            var i,
              a = ((i = {}), (0, r.Z)(i, e, n), (0, r.Z)(i, "theme", o), i),
              l = t[e];
            return l ? l(a) : (0, r.Z)({}, e, n);
          }
          function u(e) {
            var i = e || {},
              c = i.sx,
              d = i.theme,
              f = void 0 === d ? {} : d;
            if (!c) return null;
            function p(e) {
              var i = e;
              if ("function" === typeof e) i = e(f);
              else if ("object" !== typeof e) return e;
              if (!i) return null;
              var c = (0, a.W8)(f.breakpoints),
                d = Object.keys(c),
                p = c;
              return (
                Object.keys(i).forEach(function (e) {
                  var c = s(i[e], f);
                  if (null !== c && void 0 !== c)
                    if ("object" === typeof c)
                      if (t[e]) p = (0, o.Z)(p, n(e, c, f));
                      else {
                        var d = (0, a.k9)({ theme: f }, c, function (t) {
                          return (0, r.Z)({}, e, t);
                        });
                        l(d, c)
                          ? (p[e] = u({ sx: c, theme: f }))
                          : (p = (0, o.Z)(p, d));
                      }
                    else p = (0, o.Z)(p, n(e, c, f));
                }),
                (0, a.L7)(d, p)
              );
            }
            return Array.isArray(c) ? c.map(p) : p(c);
          }
          return u;
        })();
        (u.filterProps = ["sx"]), (t.Z = u);
      },
      418: function (e, t, n) {
        "use strict";
        var r = n(5080),
          o = n(9120),
          i = (0, r.Z)();
        t.Z = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i;
          return (0, o.Z)(e);
        };
      },
      3073: function (e, t, n) {
        "use strict";
        n.d(t, {
          Z: function () {
            return o;
          },
        });
        var r = n(5735);
        function o(e) {
          var t = e.theme,
            n = e.name,
            o = e.props;
          return t &&
            t.components &&
            t.components[n] &&
            t.components[n].defaultProps
            ? (0, r.Z)(t.components[n].defaultProps, o)
            : o;
        }
      },
      6083: function (e, t, n) {
        "use strict";
        n.d(t, {
          Z: function () {
            return i;
          },
        });
        var r = n(3073),
          o = n(418);
        function i(e) {
          var t = e.props,
            n = e.name,
            i = e.defaultTheme,
            a = (0, o.Z)(i);
          return (0, r.Z)({ theme: a, name: n, props: t });
        }
      },
      9120: function (e, t, n) {
        "use strict";
        var r = n(9598);
        function o(e) {
          return 0 === Object.keys(e).length;
        }
        t.Z = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : null,
            t = (0, r.Z)();
          return !t || o(t) ? e : t;
        };
      },
      5902: function (e, t) {
        "use strict";
        var n = function (e) {
            return e;
          },
          r = (function () {
            var e = n;
            return {
              configure: function (t) {
                e = t;
              },
              generate: function (t) {
                return e(t);
              },
              reset: function () {
                e = n;
              },
            };
          })();
        t.Z = r;
      },
      7312: function (e, t, n) {
        "use strict";
        n.d(t, {
          Z: function () {
            return o;
          },
        });
        var r = n(6189);
        function o(e) {
          if ("string" !== typeof e) throw new Error((0, r.Z)(7));
          return e.charAt(0).toUpperCase() + e.slice(1);
        }
      },
      4419: function (e, t, n) {
        "use strict";
        function r(e, t, n) {
          var r = {};
          return (
            Object.keys(e).forEach(function (o) {
              r[o] = e[o]
                .reduce(function (e, r) {
                  return r && (e.push(t(r)), n && n[r] && e.push(n[r])), e;
                }, [])
                .join(" ");
            }),
            r
          );
        }
        n.d(t, {
          Z: function () {
            return r;
          },
        });
      },
      8949: function (e, t, n) {
        "use strict";
        function r() {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return t.reduce(
            function (e, t) {
              return null == t
                ? e
                : function () {
                    for (
                      var n = arguments.length, r = new Array(n), o = 0;
                      o < n;
                      o++
                    )
                      r[o] = arguments[o];
                    e.apply(this, r), t.apply(this, r);
                  };
            },
            function () {}
          );
        }
        n.d(t, {
          Z: function () {
            return r;
          },
        });
      },
      3981: function (e, t, n) {
        "use strict";
        function r(e) {
          var t,
            n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 166;
          function r() {
            for (
              var r = this, o = arguments.length, i = new Array(o), a = 0;
              a < o;
              a++
            )
              i[a] = arguments[a];
            var l = function () {
              e.apply(r, i);
            };
            clearTimeout(t), (t = setTimeout(l, n));
          }
          return (
            (r.clear = function () {
              clearTimeout(t);
            }),
            r
          );
        }
        n.d(t, {
          Z: function () {
            return r;
          },
        });
      },
      2466: function (e, t, n) {
        "use strict";
        n.d(t, {
          P: function () {
            return o;
          },
          Z: function () {
            return i;
          },
        });
        var r = n(7462);
        function o(e) {
          return (
            null !== e && "object" === typeof e && e.constructor === Object
          );
        }
        function i(e, t) {
          var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : { clone: !0 },
            a = n.clone ? (0, r.Z)({}, e) : e;
          return (
            o(e) &&
              o(t) &&
              Object.keys(t).forEach(function (r) {
                "__proto__" !== r &&
                  (o(t[r]) && r in e && o(e[r])
                    ? (a[r] = i(e[r], t[r], n))
                    : (a[r] = t[r]));
              }),
            a
          );
        }
      },
      6189: function (e, t, n) {
        "use strict";
        function r(e) {
          for (
            var t = "https://mui.com/production-error/?code=" + e, n = 1;
            n < arguments.length;
            n += 1
          )
            t += "&args[]=" + encodeURIComponent(arguments[n]);
          return (
            "Minified MUI error #" +
            e +
            "; visit " +
            t +
            " for the full message."
          );
        }
        n.d(t, {
          Z: function () {
            return r;
          },
        });
      },
      1217: function (e, t, n) {
        "use strict";
        n.d(t, {
          Z: function () {
            return i;
          },
        });
        var r = n(5902),
          o = {
            active: "active",
            checked: "checked",
            completed: "completed",
            disabled: "disabled",
            error: "error",
            expanded: "expanded",
            focused: "focused",
            focusVisible: "focusVisible",
            required: "required",
            selected: "selected",
          };
        function i(e, t) {
          var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : "Mui",
            i = o[t];
          return i
            ? "".concat(n, "-").concat(i)
            : "".concat(r.Z.generate(e), "-").concat(t);
        }
      },
      5878: function (e, t, n) {
        "use strict";
        n.d(t, {
          Z: function () {
            return o;
          },
        });
        var r = n(1217);
        function o(e, t) {
          var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : "Mui",
            o = {};
          return (
            t.forEach(function (t) {
              o[t] = (0, r.Z)(e, t, n);
            }),
            o
          );
        }
      },
      9723: function (e, t, n) {
        "use strict";
        function r(e) {
          return (e && e.ownerDocument) || document;
        }
        n.d(t, {
          Z: function () {
            return r;
          },
        });
      },
      7979: function (e, t, n) {
        "use strict";
        n.d(t, {
          Z: function () {
            return o;
          },
        });
        var r = n(9723);
        function o(e) {
          return (0, r.Z)(e).defaultView || window;
        }
      },
      5735: function (e, t, n) {
        "use strict";
        n.d(t, {
          Z: function () {
            return o;
          },
        });
        var r = n(7462);
        function o(e, t) {
          var n = (0, r.Z)({}, t);
          return (
            Object.keys(e).forEach(function (t) {
              void 0 === n[t] && (n[t] = e[t]);
            }),
            n
          );
        }
      },
      2971: function (e, t, n) {
        "use strict";
        function r(e, t) {
          "function" === typeof e ? e(t) : e && (e.current = t);
        }
        n.d(t, {
          Z: function () {
            return r;
          },
        });
      },
      5721: function (e, t, n) {
        "use strict";
        var r = n(2791),
          o = "undefined" !== typeof window ? r.useLayoutEffect : r.useEffect;
        t.Z = o;
      },
      8956: function (e, t, n) {
        "use strict";
        n.d(t, {
          Z: function () {
            return i;
          },
        });
        var r = n(2791),
          o = n(5721);
        function i(e) {
          var t = r.useRef(e);
          return (
            (0, o.Z)(function () {
              t.current = e;
            }),
            r.useCallback(function () {
              return t.current.apply(void 0, arguments);
            }, [])
          );
        }
      },
      7563: function (e, t, n) {
        "use strict";
        n.d(t, {
          Z: function () {
            return i;
          },
        });
        var r = n(2791),
          o = n(2971);
        function i(e, t) {
          return r.useMemo(
            function () {
              return null == e && null == t
                ? null
                : function (n) {
                    (0, o.Z)(e, n), (0, o.Z)(t, n);
                  };
            },
            [e, t]
          );
        }
      },
      6248: function (e, t, n) {
        "use strict";
        var r;
        n.d(t, {
          Z: function () {
            return s;
          },
        });
        var o = n(885),
          i = n(2791),
          a = 0;
        var l = (r || (r = n.t(i, 2))).useId;
        function s(e) {
          if (void 0 !== l) {
            var t = l();
            return null != e ? e : t;
          }
          return (function (e) {
            var t = i.useState(e),
              n = (0, o.Z)(t, 2),
              r = n[0],
              l = n[1],
              s = e || r;
            return (
              i.useEffect(
                function () {
                  null == r && l("mui-".concat((a += 1)));
                },
                [r]
              ),
              s
            );
          })(e);
        }
      },
      8182: function (e, t, n) {
        "use strict";
        function r(e) {
          var t,
            n,
            o = "";
          if ("string" == typeof e || "number" == typeof e) o += e;
          else if ("object" == typeof e)
            if (Array.isArray(e))
              for (t = 0; t < e.length; t++)
                e[t] && (n = r(e[t])) && (o && (o += " "), (o += n));
            else for (t in e) e[t] && (o && (o += " "), (o += t));
          return o;
        }
        t.Z = function () {
          for (var e, t, n = 0, o = ""; n < arguments.length; )
            (e = arguments[n++]) && (t = r(e)) && (o && (o += " "), (o += t));
          return o;
        };
      },
      2110: function (e, t, n) {
        "use strict";
        var r = n(8309),
          o = {
            childContextTypes: !0,
            contextType: !0,
            contextTypes: !0,
            defaultProps: !0,
            displayName: !0,
            getDefaultProps: !0,
            getDerivedStateFromError: !0,
            getDerivedStateFromProps: !0,
            mixins: !0,
            propTypes: !0,
            type: !0,
          },
          i = {
            name: !0,
            length: !0,
            prototype: !0,
            caller: !0,
            callee: !0,
            arguments: !0,
            arity: !0,
          },
          a = {
            $$typeof: !0,
            compare: !0,
            defaultProps: !0,
            displayName: !0,
            propTypes: !0,
            type: !0,
          },
          l = {};
        function s(e) {
          return r.isMemo(e) ? a : l[e.$$typeof] || o;
        }
        (l[r.ForwardRef] = {
          $$typeof: !0,
          render: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
        }),
          (l[r.Memo] = a);
        var u = Object.defineProperty,
          c = Object.getOwnPropertyNames,
          d = Object.getOwnPropertySymbols,
          f = Object.getOwnPropertyDescriptor,
          p = Object.getPrototypeOf,
          h = Object.prototype;
        e.exports = function e(t, n, r) {
          if ("string" !== typeof n) {
            if (h) {
              var o = p(n);
              o && o !== h && e(t, o, r);
            }
            var a = c(n);
            d && (a = a.concat(d(n)));
            for (var l = s(t), m = s(n), v = 0; v < a.length; ++v) {
              var g = a[v];
              if (!i[g] && (!r || !r[g]) && (!m || !m[g]) && (!l || !l[g])) {
                var y = f(n, g);
                try {
                  u(t, g, y);
                } catch (b) {}
              }
            }
          }
          return t;
        };
      },
      746: function (e, t) {
        "use strict";
        var n = "function" === typeof Symbol && Symbol.for,
          r = n ? Symbol.for("react.element") : 60103,
          o = n ? Symbol.for("react.portal") : 60106,
          i = n ? Symbol.for("react.fragment") : 60107,
          a = n ? Symbol.for("react.strict_mode") : 60108,
          l = n ? Symbol.for("react.profiler") : 60114,
          s = n ? Symbol.for("react.provider") : 60109,
          u = n ? Symbol.for("react.context") : 60110,
          c = n ? Symbol.for("react.async_mode") : 60111,
          d = n ? Symbol.for("react.concurrent_mode") : 60111,
          f = n ? Symbol.for("react.forward_ref") : 60112,
          p = n ? Symbol.for("react.suspense") : 60113,
          h = n ? Symbol.for("react.suspense_list") : 60120,
          m = n ? Symbol.for("react.memo") : 60115,
          v = n ? Symbol.for("react.lazy") : 60116,
          g = n ? Symbol.for("react.block") : 60121,
          y = n ? Symbol.for("react.fundamental") : 60117,
          b = n ? Symbol.for("react.responder") : 60118,
          x = n ? Symbol.for("react.scope") : 60119;
        function w(e) {
          if ("object" === typeof e && null !== e) {
            var t = e.$$typeof;
            switch (t) {
              case r:
                switch ((e = e.type)) {
                  case c:
                  case d:
                  case i:
                  case l:
                  case a:
                  case p:
                    return e;
                  default:
                    switch ((e = e && e.$$typeof)) {
                      case u:
                      case f:
                      case v:
                      case m:
                      case s:
                        return e;
                      default:
                        return t;
                    }
                }
              case o:
                return t;
            }
          }
        }
        function k(e) {
          return w(e) === d;
        }
        (t.AsyncMode = c),
          (t.ConcurrentMode = d),
          (t.ContextConsumer = u),
          (t.ContextProvider = s),
          (t.Element = r),
          (t.ForwardRef = f),
          (t.Fragment = i),
          (t.Lazy = v),
          (t.Memo = m),
          (t.Portal = o),
          (t.Profiler = l),
          (t.StrictMode = a),
          (t.Suspense = p),
          (t.isAsyncMode = function (e) {
            return k(e) || w(e) === c;
          }),
          (t.isConcurrentMode = k),
          (t.isContextConsumer = function (e) {
            return w(e) === u;
          }),
          (t.isContextProvider = function (e) {
            return w(e) === s;
          }),
          (t.isElement = function (e) {
            return "object" === typeof e && null !== e && e.$$typeof === r;
          }),
          (t.isForwardRef = function (e) {
            return w(e) === f;
          }),
          (t.isFragment = function (e) {
            return w(e) === i;
          }),
          (t.isLazy = function (e) {
            return w(e) === v;
          }),
          (t.isMemo = function (e) {
            return w(e) === m;
          }),
          (t.isPortal = function (e) {
            return w(e) === o;
          }),
          (t.isProfiler = function (e) {
            return w(e) === l;
          }),
          (t.isStrictMode = function (e) {
            return w(e) === a;
          }),
          (t.isSuspense = function (e) {
            return w(e) === p;
          }),
          (t.isValidElementType = function (e) {
            return (
              "string" === typeof e ||
              "function" === typeof e ||
              e === i ||
              e === d ||
              e === l ||
              e === a ||
              e === p ||
              e === h ||
              ("object" === typeof e &&
                null !== e &&
                (e.$$typeof === v ||
                  e.$$typeof === m ||
                  e.$$typeof === s ||
                  e.$$typeof === u ||
                  e.$$typeof === f ||
                  e.$$typeof === y ||
                  e.$$typeof === b ||
                  e.$$typeof === x ||
                  e.$$typeof === g))
            );
          }),
          (t.typeOf = w);
      },
      8309: function (e, t, n) {
        "use strict";
        e.exports = n(746);
      },
      1725: function (e) {
        "use strict";
        var t = Object.getOwnPropertySymbols,
          n = Object.prototype.hasOwnProperty,
          r = Object.prototype.propertyIsEnumerable;
        function o(e) {
          if (null === e || void 0 === e)
            throw new TypeError(
              "Object.assign cannot be called with null or undefined"
            );
          return Object(e);
        }
        e.exports = (function () {
          try {
            if (!Object.assign) return !1;
            var e = new String("abc");
            if (((e[5] = "de"), "5" === Object.getOwnPropertyNames(e)[0]))
              return !1;
            for (var t = {}, n = 0; n < 10; n++)
              t["_" + String.fromCharCode(n)] = n;
            if (
              "0123456789" !==
              Object.getOwnPropertyNames(t)
                .map(function (e) {
                  return t[e];
                })
                .join("")
            )
              return !1;
            var r = {};
            return (
              "abcdefghijklmnopqrst".split("").forEach(function (e) {
                r[e] = e;
              }),
              "abcdefghijklmnopqrst" ===
                Object.keys(Object.assign({}, r)).join("")
            );
          } catch (o) {
            return !1;
          }
        })()
          ? Object.assign
          : function (e, i) {
              for (var a, l, s = o(e), u = 1; u < arguments.length; u++) {
                for (var c in (a = Object(arguments[u])))
                  n.call(a, c) && (s[c] = a[c]);
                if (t) {
                  l = t(a);
                  for (var d = 0; d < l.length; d++)
                    r.call(a, l[d]) && (s[l[d]] = a[l[d]]);
                }
              }
              return s;
            };
      },
      4463: function (e, t, n) {
        "use strict";
        var r = n(2791),
          o = n(1725),
          i = n(5296);
        function a(e) {
          for (
            var t =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
              n = 1;
            n < arguments.length;
            n++
          )
            t += "&args[]=" + encodeURIComponent(arguments[n]);
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        if (!r) throw Error(a(227));
        var l = new Set(),
          s = {};
        function u(e, t) {
          c(e, t), c(e + "Capture", t);
        }
        function c(e, t) {
          for (s[e] = t, e = 0; e < t.length; e++) l.add(t[e]);
        }
        var d = !(
            "undefined" === typeof window ||
            "undefined" === typeof window.document ||
            "undefined" === typeof window.document.createElement
          ),
          f =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          p = Object.prototype.hasOwnProperty,
          h = {},
          m = {};
        function v(e, t, n, r, o, i, a) {
          (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = r),
            (this.attributeNamespace = o),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = i),
            (this.removeEmptyString = a);
        }
        var g = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
          .split(" ")
          .forEach(function (e) {
            g[e] = new v(e, 0, !1, e, null, !1, !1);
          }),
          [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
          ].forEach(function (e) {
            var t = e[0];
            g[t] = new v(t, 1, !1, e[1], null, !1, !1);
          }),
          ["contentEditable", "draggable", "spellCheck", "value"].forEach(
            function (e) {
              g[e] = new v(e, 2, !1, e.toLowerCase(), null, !1, !1);
            }
          ),
          [
            "autoReverse",
            "externalResourcesRequired",
            "focusable",
            "preserveAlpha",
          ].forEach(function (e) {
            g[e] = new v(e, 2, !1, e, null, !1, !1);
          }),
          "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function (e) {
              g[e] = new v(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            g[e] = new v(e, 3, !0, e, null, !1, !1);
          }),
          ["capture", "download"].forEach(function (e) {
            g[e] = new v(e, 4, !1, e, null, !1, !1);
          }),
          ["cols", "rows", "size", "span"].forEach(function (e) {
            g[e] = new v(e, 6, !1, e, null, !1, !1);
          }),
          ["rowSpan", "start"].forEach(function (e) {
            g[e] = new v(e, 5, !1, e.toLowerCase(), null, !1, !1);
          });
        var y = /[\-:]([a-z])/g;
        function b(e) {
          return e[1].toUpperCase();
        }
        function x(e, t, n, r) {
          var o = g.hasOwnProperty(t) ? g[t] : null;
          (null !== o
            ? 0 === o.type
            : !r &&
              2 < t.length &&
              ("o" === t[0] || "O" === t[0]) &&
              ("n" === t[1] || "N" === t[1])) ||
            ((function (e, t, n, r) {
              if (
                null === t ||
                "undefined" === typeof t ||
                (function (e, t, n, r) {
                  if (null !== n && 0 === n.type) return !1;
                  switch (typeof t) {
                    case "function":
                    case "symbol":
                      return !0;
                    case "boolean":
                      return (
                        !r &&
                        (null !== n
                          ? !n.acceptsBooleans
                          : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                            "aria-" !== e)
                      );
                    default:
                      return !1;
                  }
                })(e, t, n, r)
              )
                return !0;
              if (r) return !1;
              if (null !== n)
                switch (n.type) {
                  case 3:
                    return !t;
                  case 4:
                    return !1 === t;
                  case 5:
                    return isNaN(t);
                  case 6:
                    return isNaN(t) || 1 > t;
                }
              return !1;
            })(t, n, o, r) && (n = null),
            r || null === o
              ? (function (e) {
                  return (
                    !!p.call(m, e) ||
                    (!p.call(h, e) &&
                      (f.test(e) ? (m[e] = !0) : ((h[e] = !0), !1)))
                  );
                })(t) &&
                (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
              : o.mustUseProperty
              ? (e[o.propertyName] = null === n ? 3 !== o.type && "" : n)
              : ((t = o.attributeName),
                (r = o.attributeNamespace),
                null === n
                  ? e.removeAttribute(t)
                  : ((n =
                      3 === (o = o.type) || (4 === o && !0 === n)
                        ? ""
                        : "" + n),
                    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
          .split(" ")
          .forEach(function (e) {
            var t = e.replace(y, b);
            g[t] = new v(t, 1, !1, e, null, !1, !1);
          }),
          "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
            .split(" ")
            .forEach(function (e) {
              var t = e.replace(y, b);
              g[t] = new v(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
            }),
          ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var t = e.replace(y, b);
            g[t] = new v(
              t,
              1,
              !1,
              e,
              "http://www.w3.org/XML/1998/namespace",
              !1,
              !1
            );
          }),
          ["tabIndex", "crossOrigin"].forEach(function (e) {
            g[e] = new v(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (g.xlinkHref = new v(
            "xlinkHref",
            1,
            !1,
            "xlink:href",
            "http://www.w3.org/1999/xlink",
            !0,
            !1
          )),
          ["src", "href", "action", "formAction"].forEach(function (e) {
            g[e] = new v(e, 1, !1, e.toLowerCase(), null, !0, !0);
          });
        var w = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          k = 60103,
          S = 60106,
          Z = 60107,
          E = 60108,
          C = 60114,
          P = 60109,
          M = 60110,
          R = 60112,
          T = 60113,
          j = 60120,
          O = 60115,
          z = 60116,
          N = 60121,
          L = 60128,
          _ = 60129,
          A = 60130,
          F = 60131;
        if ("function" === typeof Symbol && Symbol.for) {
          var I = Symbol.for;
          (k = I("react.element")),
            (S = I("react.portal")),
            (Z = I("react.fragment")),
            (E = I("react.strict_mode")),
            (C = I("react.profiler")),
            (P = I("react.provider")),
            (M = I("react.context")),
            (R = I("react.forward_ref")),
            (T = I("react.suspense")),
            (j = I("react.suspense_list")),
            (O = I("react.memo")),
            (z = I("react.lazy")),
            (N = I("react.block")),
            I("react.scope"),
            (L = I("react.opaque.id")),
            (_ = I("react.debug_trace_mode")),
            (A = I("react.offscreen")),
            (F = I("react.legacy_hidden"));
        }
        var D,
          W = "function" === typeof Symbol && Symbol.iterator;
        function B(e) {
          return null === e || "object" !== typeof e
            ? null
            : "function" === typeof (e = (W && e[W]) || e["@@iterator"])
            ? e
            : null;
        }
        function V(e) {
          if (void 0 === D)
            try {
              throw Error();
            } catch (n) {
              var t = n.stack.trim().match(/\n( *(at )?)/);
              D = (t && t[1]) || "";
            }
          return "\n" + D + e;
        }
        var H = !1;
        function U(e, t) {
          if (!e || H) return "";
          H = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (t)
              if (
                ((t = function () {
                  throw Error();
                }),
                Object.defineProperty(t.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                "object" === typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(t, []);
                } catch (s) {
                  var r = s;
                }
                Reflect.construct(e, [], t);
              } else {
                try {
                  t.call();
                } catch (s) {
                  r = s;
                }
                e.call(t.prototype);
              }
            else {
              try {
                throw Error();
              } catch (s) {
                r = s;
              }
              e();
            }
          } catch (s) {
            if (s && r && "string" === typeof s.stack) {
              for (
                var o = s.stack.split("\n"),
                  i = r.stack.split("\n"),
                  a = o.length - 1,
                  l = i.length - 1;
                1 <= a && 0 <= l && o[a] !== i[l];

              )
                l--;
              for (; 1 <= a && 0 <= l; a--, l--)
                if (o[a] !== i[l]) {
                  if (1 !== a || 1 !== l)
                    do {
                      if ((a--, 0 > --l || o[a] !== i[l]))
                        return "\n" + o[a].replace(" at new ", " at ");
                    } while (1 <= a && 0 <= l);
                  break;
                }
            }
          } finally {
            (H = !1), (Error.prepareStackTrace = n);
          }
          return (e = e ? e.displayName || e.name : "") ? V(e) : "";
        }
        function $(e) {
          switch (e.tag) {
            case 5:
              return V(e.type);
            case 16:
              return V("Lazy");
            case 13:
              return V("Suspense");
            case 19:
              return V("SuspenseList");
            case 0:
            case 2:
            case 15:
              return (e = U(e.type, !1));
            case 11:
              return (e = U(e.type.render, !1));
            case 22:
              return (e = U(e.type._render, !1));
            case 1:
              return (e = U(e.type, !0));
            default:
              return "";
          }
        }
        function q(e) {
          if (null == e) return null;
          if ("function" === typeof e) return e.displayName || e.name || null;
          if ("string" === typeof e) return e;
          switch (e) {
            case Z:
              return "Fragment";
            case S:
              return "Portal";
            case C:
              return "Profiler";
            case E:
              return "StrictMode";
            case T:
              return "Suspense";
            case j:
              return "SuspenseList";
          }
          if ("object" === typeof e)
            switch (e.$$typeof) {
              case M:
                return (e.displayName || "Context") + ".Consumer";
              case P:
                return (e._context.displayName || "Context") + ".Provider";
              case R:
                var t = e.render;
                return (
                  (t = t.displayName || t.name || ""),
                  e.displayName ||
                    ("" !== t ? "ForwardRef(" + t + ")" : "ForwardRef")
                );
              case O:
                return q(e.type);
              case N:
                return q(e._render);
              case z:
                (t = e._payload), (e = e._init);
                try {
                  return q(e(t));
                } catch (n) {}
            }
          return null;
        }
        function K(e) {
          switch (typeof e) {
            case "boolean":
            case "number":
            case "object":
            case "string":
            case "undefined":
              return e;
            default:
              return "";
          }
        }
        function G(e) {
          var t = e.type;
          return (
            (e = e.nodeName) &&
            "input" === e.toLowerCase() &&
            ("checkbox" === t || "radio" === t)
          );
        }
        function Q(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = G(e) ? "checked" : "value",
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = "" + e[t];
              if (
                !e.hasOwnProperty(t) &&
                "undefined" !== typeof n &&
                "function" === typeof n.get &&
                "function" === typeof n.set
              ) {
                var o = n.get,
                  i = n.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return o.call(this);
                    },
                    set: function (e) {
                      (r = "" + e), i.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: n.enumerable }),
                  {
                    getValue: function () {
                      return r;
                    },
                    setValue: function (e) {
                      r = "" + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[t];
                    },
                  }
                );
              }
            })(e));
        }
        function Y(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = "";
          return (
            e && (r = G(e) ? (e.checked ? "true" : "false") : e.value),
            (e = r) !== n && (t.setValue(e), !0)
          );
        }
        function X(e) {
          if (
            "undefined" ===
            typeof (e =
              e || ("undefined" !== typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        function J(e, t) {
          var n = t.checked;
          return o({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked,
          });
        }
        function ee(e, t) {
          var n = null == t.defaultValue ? "" : t.defaultValue,
            r = null != t.checked ? t.checked : t.defaultChecked;
          (n = K(null != t.value ? t.value : n)),
            (e._wrapperState = {
              initialChecked: r,
              initialValue: n,
              controlled:
                "checkbox" === t.type || "radio" === t.type
                  ? null != t.checked
                  : null != t.value,
            });
        }
        function te(e, t) {
          null != (t = t.checked) && x(e, "checked", t, !1);
        }
        function ne(e, t) {
          te(e, t);
          var n = K(t.value),
            r = t.type;
          if (null != n)
            "number" === r
              ? ((0 === n && "" === e.value) || e.value != n) &&
                (e.value = "" + n)
              : e.value !== "" + n && (e.value = "" + n);
          else if ("submit" === r || "reset" === r)
            return void e.removeAttribute("value");
          t.hasOwnProperty("value")
            ? oe(e, t.type, n)
            : t.hasOwnProperty("defaultValue") &&
              oe(e, t.type, K(t.defaultValue)),
            null == t.checked &&
              null != t.defaultChecked &&
              (e.defaultChecked = !!t.defaultChecked);
        }
        function re(e, t, n) {
          if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (
              !(
                ("submit" !== r && "reset" !== r) ||
                (void 0 !== t.value && null !== t.value)
              )
            )
              return;
            (t = "" + e._wrapperState.initialValue),
              n || t === e.value || (e.value = t),
              (e.defaultValue = t);
          }
          "" !== (n = e.name) && (e.name = ""),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            "" !== n && (e.name = n);
        }
        function oe(e, t, n) {
          ("number" === t && X(e.ownerDocument) === e) ||
            (null == n
              ? (e.defaultValue = "" + e._wrapperState.initialValue)
              : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
        }
        function ie(e, t) {
          return (
            (e = o({ children: void 0 }, t)),
            (t = (function (e) {
              var t = "";
              return (
                r.Children.forEach(e, function (e) {
                  null != e && (t += e);
                }),
                t
              );
            })(t.children)) && (e.children = t),
            e
          );
        }
        function ae(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
            for (n = 0; n < e.length; n++)
              (o = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== o && (e[n].selected = o),
                o && r && (e[n].defaultSelected = !0);
          } else {
            for (n = "" + K(n), t = null, o = 0; o < e.length; o++) {
              if (e[o].value === n)
                return (
                  (e[o].selected = !0), void (r && (e[o].defaultSelected = !0))
                );
              null !== t || e[o].disabled || (t = e[o]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function le(e, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(a(91));
          return o({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue,
          });
        }
        function se(e, t) {
          var n = t.value;
          if (null == n) {
            if (((n = t.children), (t = t.defaultValue), null != n)) {
              if (null != t) throw Error(a(92));
              if (Array.isArray(n)) {
                if (!(1 >= n.length)) throw Error(a(93));
                n = n[0];
              }
              t = n;
            }
            null == t && (t = ""), (n = t);
          }
          e._wrapperState = { initialValue: K(n) };
        }
        function ue(e, t) {
          var n = K(t.value),
            r = K(t.defaultValue);
          null != n &&
            ((n = "" + n) !== e.value && (e.value = n),
            null == t.defaultValue &&
              e.defaultValue !== n &&
              (e.defaultValue = n)),
            null != r && (e.defaultValue = "" + r);
        }
        function ce(e) {
          var t = e.textContent;
          t === e._wrapperState.initialValue &&
            "" !== t &&
            null !== t &&
            (e.value = t);
        }
        var de = "http://www.w3.org/1999/xhtml",
          fe = "http://www.w3.org/2000/svg";
        function pe(e) {
          switch (e) {
            case "svg":
              return "http://www.w3.org/2000/svg";
            case "math":
              return "http://www.w3.org/1998/Math/MathML";
            default:
              return "http://www.w3.org/1999/xhtml";
          }
        }
        function he(e, t) {
          return null == e || "http://www.w3.org/1999/xhtml" === e
            ? pe(t)
            : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
            ? "http://www.w3.org/1999/xhtml"
            : e;
        }
        var me,
          ve,
          ge =
            ((ve = function (e, t) {
              if (e.namespaceURI !== fe || "innerHTML" in e) e.innerHTML = t;
              else {
                for (
                  (me = me || document.createElement("div")).innerHTML =
                    "<svg>" + t.valueOf().toString() + "</svg>",
                    t = me.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
              }
            }),
            "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, t, n, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return ve(e, t);
                  });
                }
              : ve);
        function ye(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType)
              return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        var be = {
            animationIterationCount: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0,
          },
          xe = ["Webkit", "ms", "Moz", "O"];
        function we(e, t, n) {
          return null == t || "boolean" === typeof t || "" === t
            ? ""
            : n ||
              "number" !== typeof t ||
              0 === t ||
              (be.hasOwnProperty(e) && be[e])
            ? ("" + t).trim()
            : t + "px";
        }
        function ke(e, t) {
          for (var n in ((e = e.style), t))
            if (t.hasOwnProperty(n)) {
              var r = 0 === n.indexOf("--"),
                o = we(n, t[n], r);
              "float" === n && (n = "cssFloat"),
                r ? e.setProperty(n, o) : (e[n] = o);
            }
        }
        Object.keys(be).forEach(function (e) {
          xe.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)),
              (be[t] = be[e]);
          });
        });
        var Se = o(
          { menuitem: !0 },
          {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0,
          }
        );
        function Ze(e, t) {
          if (t) {
            if (
              Se[e] &&
              (null != t.children || null != t.dangerouslySetInnerHTML)
            )
              throw Error(a(137, e));
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(a(60));
              if (
                "object" !== typeof t.dangerouslySetInnerHTML ||
                !("__html" in t.dangerouslySetInnerHTML)
              )
                throw Error(a(61));
            }
            if (null != t.style && "object" !== typeof t.style)
              throw Error(a(62));
          }
        }
        function Ee(e, t) {
          if (-1 === e.indexOf("-")) return "string" === typeof t.is;
          switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              return !1;
            default:
              return !0;
          }
        }
        function Ce(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var Pe = null,
          Me = null,
          Re = null;
        function Te(e) {
          if ((e = ro(e))) {
            if ("function" !== typeof Pe) throw Error(a(280));
            var t = e.stateNode;
            t && ((t = io(t)), Pe(e.stateNode, e.type, t));
          }
        }
        function je(e) {
          Me ? (Re ? Re.push(e) : (Re = [e])) : (Me = e);
        }
        function Oe() {
          if (Me) {
            var e = Me,
              t = Re;
            if (((Re = Me = null), Te(e), t))
              for (e = 0; e < t.length; e++) Te(t[e]);
          }
        }
        function ze(e, t) {
          return e(t);
        }
        function Ne(e, t, n, r, o) {
          return e(t, n, r, o);
        }
        function Le() {}
        var _e = ze,
          Ae = !1,
          Fe = !1;
        function Ie() {
          (null === Me && null === Re) || (Le(), Oe());
        }
        function De(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = io(n);
          if (null === r) return null;
          n = r[t];
          e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
              (r = !r.disabled) ||
                (r = !(
                  "button" === (e = e.type) ||
                  "input" === e ||
                  "select" === e ||
                  "textarea" === e
                )),
                (e = !r);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (n && "function" !== typeof n) throw Error(a(231, t, typeof n));
          return n;
        }
        var We = !1;
        if (d)
          try {
            var Be = {};
            Object.defineProperty(Be, "passive", {
              get: function () {
                We = !0;
              },
            }),
              window.addEventListener("test", Be, Be),
              window.removeEventListener("test", Be, Be);
          } catch (ve) {
            We = !1;
          }
        function Ve(e, t, n, r, o, i, a, l, s) {
          var u = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(n, u);
          } catch (c) {
            this.onError(c);
          }
        }
        var He = !1,
          Ue = null,
          $e = !1,
          qe = null,
          Ke = {
            onError: function (e) {
              (He = !0), (Ue = e);
            },
          };
        function Ge(e, t, n, r, o, i, a, l, s) {
          (He = !1), (Ue = null), Ve.apply(Ke, arguments);
        }
        function Qe(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              0 !== (1026 & (t = e).flags) && (n = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function Ye(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if (
              (null === t &&
                null !== (e = e.alternate) &&
                (t = e.memoizedState),
              null !== t)
            )
              return t.dehydrated;
          }
          return null;
        }
        function Xe(e) {
          if (Qe(e) !== e) throw Error(a(188));
        }
        function Je(e) {
          if (
            ((e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = Qe(e))) throw Error(a(188));
                return t !== e ? null : e;
              }
              for (var n = e, r = t; ; ) {
                var o = n.return;
                if (null === o) break;
                var i = o.alternate;
                if (null === i) {
                  if (null !== (r = o.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (o.child === i.child) {
                  for (i = o.child; i; ) {
                    if (i === n) return Xe(o), e;
                    if (i === r) return Xe(o), t;
                    i = i.sibling;
                  }
                  throw Error(a(188));
                }
                if (n.return !== r.return) (n = o), (r = i);
                else {
                  for (var l = !1, s = o.child; s; ) {
                    if (s === n) {
                      (l = !0), (n = o), (r = i);
                      break;
                    }
                    if (s === r) {
                      (l = !0), (r = o), (n = i);
                      break;
                    }
                    s = s.sibling;
                  }
                  if (!l) {
                    for (s = i.child; s; ) {
                      if (s === n) {
                        (l = !0), (n = i), (r = o);
                        break;
                      }
                      if (s === r) {
                        (l = !0), (r = i), (n = o);
                        break;
                      }
                      s = s.sibling;
                    }
                    if (!l) throw Error(a(189));
                  }
                }
                if (n.alternate !== r) throw Error(a(190));
              }
              if (3 !== n.tag) throw Error(a(188));
              return n.stateNode.current === n ? e : t;
            })(e)),
            !e)
          )
            return null;
          for (var t = e; ; ) {
            if (5 === t.tag || 6 === t.tag) return t;
            if (t.child) (t.child.return = t), (t = t.child);
            else {
              if (t === e) break;
              for (; !t.sibling; ) {
                if (!t.return || t.return === e) return null;
                t = t.return;
              }
              (t.sibling.return = t.return), (t = t.sibling);
            }
          }
          return null;
        }
        function et(e, t) {
          for (var n = e.alternate; null !== t; ) {
            if (t === e || t === n) return !0;
            t = t.return;
          }
          return !1;
        }
        var tt,
          nt,
          rt,
          ot,
          it = !1,
          at = [],
          lt = null,
          st = null,
          ut = null,
          ct = new Map(),
          dt = new Map(),
          ft = [],
          pt =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
              " "
            );
        function ht(e, t, n, r, o) {
          return {
            blockedOn: e,
            domEventName: t,
            eventSystemFlags: 16 | n,
            nativeEvent: o,
            targetContainers: [r],
          };
        }
        function mt(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              lt = null;
              break;
            case "dragenter":
            case "dragleave":
              st = null;
              break;
            case "mouseover":
            case "mouseout":
              ut = null;
              break;
            case "pointerover":
            case "pointerout":
              ct.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              dt.delete(t.pointerId);
          }
        }
        function vt(e, t, n, r, o, i) {
          return null === e || e.nativeEvent !== i
            ? ((e = ht(t, n, r, o, i)),
              null !== t && null !== (t = ro(t)) && nt(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== o && -1 === t.indexOf(o) && t.push(o),
              e);
        }
        function gt(e) {
          var t = no(e.target);
          if (null !== t) {
            var n = Qe(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = Ye(n)))
                  return (
                    (e.blockedOn = t),
                    void ot(e.lanePriority, function () {
                      i.unstable_runWithPriority(e.priority, function () {
                        rt(n);
                      });
                    })
                  );
              } else if (3 === t && n.stateNode.hydrate)
                return void (e.blockedOn =
                  3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function yt(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Jt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n)
              return null !== (t = ro(n)) && nt(t), (e.blockedOn = n), !1;
            t.shift();
          }
          return !0;
        }
        function bt(e, t, n) {
          yt(e) && n.delete(t);
        }
        function xt() {
          for (it = !1; 0 < at.length; ) {
            var e = at[0];
            if (null !== e.blockedOn) {
              null !== (e = ro(e.blockedOn)) && tt(e);
              break;
            }
            for (var t = e.targetContainers; 0 < t.length; ) {
              var n = Jt(
                e.domEventName,
                e.eventSystemFlags,
                t[0],
                e.nativeEvent
              );
              if (null !== n) {
                e.blockedOn = n;
                break;
              }
              t.shift();
            }
            null === e.blockedOn && at.shift();
          }
          null !== lt && yt(lt) && (lt = null),
            null !== st && yt(st) && (st = null),
            null !== ut && yt(ut) && (ut = null),
            ct.forEach(bt),
            dt.forEach(bt);
        }
        function wt(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            it ||
              ((it = !0),
              i.unstable_scheduleCallback(i.unstable_NormalPriority, xt)));
        }
        function kt(e) {
          function t(t) {
            return wt(t, e);
          }
          if (0 < at.length) {
            wt(at[0], e);
            for (var n = 1; n < at.length; n++) {
              var r = at[n];
              r.blockedOn === e && (r.blockedOn = null);
            }
          }
          for (
            null !== lt && wt(lt, e),
              null !== st && wt(st, e),
              null !== ut && wt(ut, e),
              ct.forEach(t),
              dt.forEach(t),
              n = 0;
            n < ft.length;
            n++
          )
            (r = ft[n]).blockedOn === e && (r.blockedOn = null);
          for (; 0 < ft.length && null === (n = ft[0]).blockedOn; )
            gt(n), null === n.blockedOn && ft.shift();
        }
        function St(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n["Webkit" + e] = "webkit" + t),
            (n["Moz" + e] = "moz" + t),
            n
          );
        }
        var Zt = {
            animationend: St("Animation", "AnimationEnd"),
            animationiteration: St("Animation", "AnimationIteration"),
            animationstart: St("Animation", "AnimationStart"),
            transitionend: St("Transition", "TransitionEnd"),
          },
          Et = {},
          Ct = {};
        function Pt(e) {
          if (Et[e]) return Et[e];
          if (!Zt[e]) return e;
          var t,
            n = Zt[e];
          for (t in n)
            if (n.hasOwnProperty(t) && t in Ct) return (Et[e] = n[t]);
          return e;
        }
        d &&
          ((Ct = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete Zt.animationend.animation,
            delete Zt.animationiteration.animation,
            delete Zt.animationstart.animation),
          "TransitionEvent" in window || delete Zt.transitionend.transition);
        var Mt = Pt("animationend"),
          Rt = Pt("animationiteration"),
          Tt = Pt("animationstart"),
          jt = Pt("transitionend"),
          Ot = new Map(),
          zt = new Map(),
          Nt = [
            "abort",
            "abort",
            Mt,
            "animationEnd",
            Rt,
            "animationIteration",
            Tt,
            "animationStart",
            "canplay",
            "canPlay",
            "canplaythrough",
            "canPlayThrough",
            "durationchange",
            "durationChange",
            "emptied",
            "emptied",
            "encrypted",
            "encrypted",
            "ended",
            "ended",
            "error",
            "error",
            "gotpointercapture",
            "gotPointerCapture",
            "load",
            "load",
            "loadeddata",
            "loadedData",
            "loadedmetadata",
            "loadedMetadata",
            "loadstart",
            "loadStart",
            "lostpointercapture",
            "lostPointerCapture",
            "playing",
            "playing",
            "progress",
            "progress",
            "seeking",
            "seeking",
            "stalled",
            "stalled",
            "suspend",
            "suspend",
            "timeupdate",
            "timeUpdate",
            jt,
            "transitionEnd",
            "waiting",
            "waiting",
          ];
        function Lt(e, t) {
          for (var n = 0; n < e.length; n += 2) {
            var r = e[n],
              o = e[n + 1];
            (o = "on" + (o[0].toUpperCase() + o.slice(1))),
              zt.set(r, t),
              Ot.set(r, o),
              u(o, [r]);
          }
        }
        (0, i.unstable_now)();
        var _t = 8;
        function At(e) {
          if (0 !== (1 & e)) return (_t = 15), 1;
          if (0 !== (2 & e)) return (_t = 14), 2;
          if (0 !== (4 & e)) return (_t = 13), 4;
          var t = 24 & e;
          return 0 !== t
            ? ((_t = 12), t)
            : 0 !== (32 & e)
            ? ((_t = 11), 32)
            : 0 !== (t = 192 & e)
            ? ((_t = 10), t)
            : 0 !== (256 & e)
            ? ((_t = 9), 256)
            : 0 !== (t = 3584 & e)
            ? ((_t = 8), t)
            : 0 !== (4096 & e)
            ? ((_t = 7), 4096)
            : 0 !== (t = 4186112 & e)
            ? ((_t = 6), t)
            : 0 !== (t = 62914560 & e)
            ? ((_t = 5), t)
            : 67108864 & e
            ? ((_t = 4), 67108864)
            : 0 !== (134217728 & e)
            ? ((_t = 3), 134217728)
            : 0 !== (t = 805306368 & e)
            ? ((_t = 2), t)
            : 0 !== (1073741824 & e)
            ? ((_t = 1), 1073741824)
            : ((_t = 8), e);
        }
        function Ft(e, t) {
          var n = e.pendingLanes;
          if (0 === n) return (_t = 0);
          var r = 0,
            o = 0,
            i = e.expiredLanes,
            a = e.suspendedLanes,
            l = e.pingedLanes;
          if (0 !== i) (r = i), (o = _t = 15);
          else if (0 !== (i = 134217727 & n)) {
            var s = i & ~a;
            0 !== s
              ? ((r = At(s)), (o = _t))
              : 0 !== (l &= i) && ((r = At(l)), (o = _t));
          } else
            0 !== (i = n & ~a)
              ? ((r = At(i)), (o = _t))
              : 0 !== l && ((r = At(l)), (o = _t));
          if (0 === r) return 0;
          if (
            ((r = n & (((0 > (r = 31 - Ht(r)) ? 0 : 1 << r) << 1) - 1)),
            0 !== t && t !== r && 0 === (t & a))
          ) {
            if ((At(t), o <= _t)) return t;
            _t = o;
          }
          if (0 !== (t = e.entangledLanes))
            for (e = e.entanglements, t &= r; 0 < t; )
              (o = 1 << (n = 31 - Ht(t))), (r |= e[n]), (t &= ~o);
          return r;
        }
        function It(e) {
          return 0 !== (e = -1073741825 & e.pendingLanes)
            ? e
            : 1073741824 & e
            ? 1073741824
            : 0;
        }
        function Dt(e, t) {
          switch (e) {
            case 15:
              return 1;
            case 14:
              return 2;
            case 12:
              return 0 === (e = Wt(24 & ~t)) ? Dt(10, t) : e;
            case 10:
              return 0 === (e = Wt(192 & ~t)) ? Dt(8, t) : e;
            case 8:
              return (
                0 === (e = Wt(3584 & ~t)) &&
                  0 === (e = Wt(4186112 & ~t)) &&
                  (e = 512),
                e
              );
            case 2:
              return 0 === (t = Wt(805306368 & ~t)) && (t = 268435456), t;
          }
          throw Error(a(358, e));
        }
        function Wt(e) {
          return e & -e;
        }
        function Bt(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function Vt(e, t, n) {
          e.pendingLanes |= t;
          var r = t - 1;
          (e.suspendedLanes &= r),
            (e.pingedLanes &= r),
            ((e = e.eventTimes)[(t = 31 - Ht(t))] = n);
        }
        var Ht = Math.clz32
            ? Math.clz32
            : function (e) {
                return 0 === e ? 32 : (31 - ((Ut(e) / $t) | 0)) | 0;
              },
          Ut = Math.log,
          $t = Math.LN2;
        var qt = i.unstable_UserBlockingPriority,
          Kt = i.unstable_runWithPriority,
          Gt = !0;
        function Qt(e, t, n, r) {
          Ae || Le();
          var o = Xt,
            i = Ae;
          Ae = !0;
          try {
            Ne(o, e, t, n, r);
          } finally {
            (Ae = i) || Ie();
          }
        }
        function Yt(e, t, n, r) {
          Kt(qt, Xt.bind(null, e, t, n, r));
        }
        function Xt(e, t, n, r) {
          var o;
          if (Gt)
            if ((o = 0 === (4 & t)) && 0 < at.length && -1 < pt.indexOf(e))
              (e = ht(null, e, t, n, r)), at.push(e);
            else {
              var i = Jt(e, t, n, r);
              if (null === i) o && mt(e, r);
              else {
                if (o) {
                  if (-1 < pt.indexOf(e))
                    return (e = ht(i, e, t, n, r)), void at.push(e);
                  if (
                    (function (e, t, n, r, o) {
                      switch (t) {
                        case "focusin":
                          return (lt = vt(lt, e, t, n, r, o)), !0;
                        case "dragenter":
                          return (st = vt(st, e, t, n, r, o)), !0;
                        case "mouseover":
                          return (ut = vt(ut, e, t, n, r, o)), !0;
                        case "pointerover":
                          var i = o.pointerId;
                          return (
                            ct.set(i, vt(ct.get(i) || null, e, t, n, r, o)), !0
                          );
                        case "gotpointercapture":
                          return (
                            (i = o.pointerId),
                            dt.set(i, vt(dt.get(i) || null, e, t, n, r, o)),
                            !0
                          );
                      }
                      return !1;
                    })(i, e, t, n, r)
                  )
                    return;
                  mt(e, r);
                }
                Lr(e, t, r, null, n);
              }
            }
        }
        function Jt(e, t, n, r) {
          var o = Ce(r);
          if (null !== (o = no(o))) {
            var i = Qe(o);
            if (null === i) o = null;
            else {
              var a = i.tag;
              if (13 === a) {
                if (null !== (o = Ye(i))) return o;
                o = null;
              } else if (3 === a) {
                if (i.stateNode.hydrate)
                  return 3 === i.tag ? i.stateNode.containerInfo : null;
                o = null;
              } else i !== o && (o = null);
            }
          }
          return Lr(e, t, r, o, n), null;
        }
        var en = null,
          tn = null,
          nn = null;
        function rn() {
          if (nn) return nn;
          var e,
            t,
            n = tn,
            r = n.length,
            o = "value" in en ? en.value : en.textContent,
            i = o.length;
          for (e = 0; e < r && n[e] === o[e]; e++);
          var a = r - e;
          for (t = 1; t <= a && n[r - t] === o[i - t]; t++);
          return (nn = o.slice(e, 1 < t ? 1 - t : void 0));
        }
        function on(e) {
          var t = e.keyCode;
          return (
            "charCode" in e
              ? 0 === (e = e.charCode) && 13 === t && (e = 13)
              : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function an() {
          return !0;
        }
        function ln() {
          return !1;
        }
        function sn(e) {
          function t(t, n, r, o, i) {
            for (var a in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = o),
            (this.target = i),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(a) && ((t = e[a]), (this[a] = t ? t(o) : o[a]));
            return (
              (this.isDefaultPrevented = (
                null != o.defaultPrevented
                  ? o.defaultPrevented
                  : !1 === o.returnValue
              )
                ? an
                : ln),
              (this.isPropagationStopped = ln),
              this
            );
          }
          return (
            o(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : "unknown" !== typeof e.returnValue &&
                      (e.returnValue = !1),
                  (this.isDefaultPrevented = an));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : "unknown" !== typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = an));
              },
              persist: function () {},
              isPersistent: an,
            }),
            t
          );
        }
        var un,
          cn,
          dn,
          fn = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          pn = sn(fn),
          hn = o({}, fn, { view: 0, detail: 0 }),
          mn = sn(hn),
          vn = o({}, hn, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: Mn,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return "movementX" in e
                ? e.movementX
                : (e !== dn &&
                    (dn && "mousemove" === e.type
                      ? ((un = e.screenX - dn.screenX),
                        (cn = e.screenY - dn.screenY))
                      : (cn = un = 0),
                    (dn = e)),
                  un);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : cn;
            },
          }),
          gn = sn(vn),
          yn = sn(o({}, vn, { dataTransfer: 0 })),
          bn = sn(o({}, hn, { relatedTarget: 0 })),
          xn = sn(
            o({}, fn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          wn = o({}, fn, {
            clipboardData: function (e) {
              return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
            },
          }),
          kn = sn(wn),
          Sn = sn(o({}, fn, { data: 0 })),
          Zn = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified",
          },
          En = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta",
          },
          Cn = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          };
        function Pn(e) {
          var t = this.nativeEvent;
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = Cn[e]) && !!t[e];
        }
        function Mn() {
          return Pn;
        }
        var Rn = o({}, hn, {
            key: function (e) {
              if (e.key) {
                var t = Zn[e.key] || e.key;
                if ("Unidentified" !== t) return t;
              }
              return "keypress" === e.type
                ? 13 === (e = on(e))
                  ? "Enter"
                  : String.fromCharCode(e)
                : "keydown" === e.type || "keyup" === e.type
                ? En[e.keyCode] || "Unidentified"
                : "";
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: Mn,
            charCode: function (e) {
              return "keypress" === e.type ? on(e) : 0;
            },
            keyCode: function (e) {
              return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return "keypress" === e.type
                ? on(e)
                : "keydown" === e.type || "keyup" === e.type
                ? e.keyCode
                : 0;
            },
          }),
          Tn = sn(Rn),
          jn = sn(
            o({}, vn, {
              pointerId: 0,
              width: 0,
              height: 0,
              pressure: 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: 0,
              pointerType: 0,
              isPrimary: 0,
            })
          ),
          On = sn(
            o({}, hn, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: Mn,
            })
          ),
          zn = sn(
            o({}, fn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          Nn = o({}, vn, {
            deltaX: function (e) {
              return "deltaX" in e
                ? e.deltaX
                : "wheelDeltaX" in e
                ? -e.wheelDeltaX
                : 0;
            },
            deltaY: function (e) {
              return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                ? -e.wheelDeltaY
                : "wheelDelta" in e
                ? -e.wheelDelta
                : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          }),
          Ln = sn(Nn),
          _n = [9, 13, 27, 32],
          An = d && "CompositionEvent" in window,
          Fn = null;
        d && "documentMode" in document && (Fn = document.documentMode);
        var In = d && "TextEvent" in window && !Fn,
          Dn = d && (!An || (Fn && 8 < Fn && 11 >= Fn)),
          Wn = String.fromCharCode(32),
          Bn = !1;
        function Vn(e, t) {
          switch (e) {
            case "keyup":
              return -1 !== _n.indexOf(t.keyCode);
            case "keydown":
              return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout":
              return !0;
            default:
              return !1;
          }
        }
        function Hn(e) {
          return "object" === typeof (e = e.detail) && "data" in e
            ? e.data
            : null;
        }
        var Un = !1;
        var $n = {
          color: !0,
          date: !0,
          datetime: !0,
          "datetime-local": !0,
          email: !0,
          month: !0,
          number: !0,
          password: !0,
          range: !0,
          search: !0,
          tel: !0,
          text: !0,
          time: !0,
          url: !0,
          week: !0,
        };
        function qn(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!$n[e.type] : "textarea" === t;
        }
        function Kn(e, t, n, r) {
          je(r),
            0 < (t = Ar(t, "onChange")).length &&
              ((n = new pn("onChange", "change", null, n, r)),
              e.push({ event: n, listeners: t }));
        }
        var Gn = null,
          Qn = null;
        function Yn(e) {
          Rr(e, 0);
        }
        function Xn(e) {
          if (Y(oo(e))) return e;
        }
        function Jn(e, t) {
          if ("change" === e) return t;
        }
        var er = !1;
        if (d) {
          var tr;
          if (d) {
            var nr = "oninput" in document;
            if (!nr) {
              var rr = document.createElement("div");
              rr.setAttribute("oninput", "return;"),
                (nr = "function" === typeof rr.oninput);
            }
            tr = nr;
          } else tr = !1;
          er = tr && (!document.documentMode || 9 < document.documentMode);
        }
        function or() {
          Gn && (Gn.detachEvent("onpropertychange", ir), (Qn = Gn = null));
        }
        function ir(e) {
          if ("value" === e.propertyName && Xn(Qn)) {
            var t = [];
            if ((Kn(t, Qn, e, Ce(e)), (e = Yn), Ae)) e(t);
            else {
              Ae = !0;
              try {
                ze(e, t);
              } finally {
                (Ae = !1), Ie();
              }
            }
          }
        }
        function ar(e, t, n) {
          "focusin" === e
            ? (or(), (Qn = n), (Gn = t).attachEvent("onpropertychange", ir))
            : "focusout" === e && or();
        }
        function lr(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return Xn(Qn);
        }
        function sr(e, t) {
          if ("click" === e) return Xn(t);
        }
        function ur(e, t) {
          if ("input" === e || "change" === e) return Xn(t);
        }
        var cr =
            "function" === typeof Object.is
              ? Object.is
              : function (e, t) {
                  return (
                    (e === t && (0 !== e || 1 / e === 1 / t)) ||
                    (e !== e && t !== t)
                  );
                },
          dr = Object.prototype.hasOwnProperty;
        function fr(e, t) {
          if (cr(e, t)) return !0;
          if (
            "object" !== typeof e ||
            null === e ||
            "object" !== typeof t ||
            null === t
          )
            return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++)
            if (!dr.call(t, n[r]) || !cr(e[n[r]], t[n[r]])) return !1;
          return !0;
        }
        function pr(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function hr(e, t) {
          var n,
            r = pr(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t))
                return { node: r, offset: t - e };
              e = n;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = pr(r);
          }
        }
        function mr(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? mr(e, t.parentNode)
                  : "contains" in e
                  ? e.contains(t)
                  : !!e.compareDocumentPosition &&
                    !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function vr() {
          for (var e = window, t = X(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = "string" === typeof t.contentWindow.location.href;
            } catch (r) {
              n = !1;
            }
            if (!n) break;
            t = X((e = t.contentWindow).document);
          }
          return t;
        }
        function gr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (("input" === t &&
              ("text" === e.type ||
                "search" === e.type ||
                "tel" === e.type ||
                "url" === e.type ||
                "password" === e.type)) ||
              "textarea" === t ||
              "true" === e.contentEditable)
          );
        }
        var yr = d && "documentMode" in document && 11 >= document.documentMode,
          br = null,
          xr = null,
          wr = null,
          kr = !1;
        function Sr(e, t, n) {
          var r =
            n.window === n
              ? n.document
              : 9 === n.nodeType
              ? n
              : n.ownerDocument;
          kr ||
            null == br ||
            br !== X(r) ||
            ("selectionStart" in (r = br) && gr(r)
              ? (r = { start: r.selectionStart, end: r.selectionEnd })
              : (r = {
                  anchorNode: (r = (
                    (r.ownerDocument && r.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
                }),
            (wr && fr(wr, r)) ||
              ((wr = r),
              0 < (r = Ar(xr, "onSelect")).length &&
                ((t = new pn("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = br))));
        }
        Lt(
          "cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(
            " "
          ),
          0
        ),
          Lt(
            "drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(
              " "
            ),
            1
          ),
          Lt(Nt, 2);
        for (
          var Zr =
              "change selectionchange textInput compositionstart compositionend compositionupdate".split(
                " "
              ),
            Er = 0;
          Er < Zr.length;
          Er++
        )
          zt.set(Zr[Er], 0);
        c("onMouseEnter", ["mouseout", "mouseover"]),
          c("onMouseLeave", ["mouseout", "mouseover"]),
          c("onPointerEnter", ["pointerout", "pointerover"]),
          c("onPointerLeave", ["pointerout", "pointerover"]),
          u(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
              " "
            )
          ),
          u(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
              " "
            )
          ),
          u("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
          ]),
          u(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          u(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          u(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
              " "
            )
          );
        var Cr =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " "
            ),
          Pr = new Set(
            "cancel close invalid load scroll toggle".split(" ").concat(Cr)
          );
        function Mr(e, t, n) {
          var r = e.type || "unknown-event";
          (e.currentTarget = n),
            (function (e, t, n, r, o, i, l, s, u) {
              if ((Ge.apply(this, arguments), He)) {
                if (!He) throw Error(a(198));
                var c = Ue;
                (He = !1), (Ue = null), $e || (($e = !0), (qe = c));
              }
            })(r, t, void 0, e),
            (e.currentTarget = null);
        }
        function Rr(e, t) {
          t = 0 !== (4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              o = r.event;
            r = r.listeners;
            e: {
              var i = void 0;
              if (t)
                for (var a = r.length - 1; 0 <= a; a--) {
                  var l = r[a],
                    s = l.instance,
                    u = l.currentTarget;
                  if (((l = l.listener), s !== i && o.isPropagationStopped()))
                    break e;
                  Mr(o, l, u), (i = s);
                }
              else
                for (a = 0; a < r.length; a++) {
                  if (
                    ((s = (l = r[a]).instance),
                    (u = l.currentTarget),
                    (l = l.listener),
                    s !== i && o.isPropagationStopped())
                  )
                    break e;
                  Mr(o, l, u), (i = s);
                }
            }
          }
          if ($e) throw ((e = qe), ($e = !1), (qe = null), e);
        }
        function Tr(e, t) {
          var n = ao(t),
            r = e + "__bubble";
          n.has(r) || (Nr(t, e, 2, !1), n.add(r));
        }
        var jr = "_reactListening" + Math.random().toString(36).slice(2);
        function Or(e) {
          e[jr] ||
            ((e[jr] = !0),
            l.forEach(function (t) {
              Pr.has(t) || zr(t, !1, e, null), zr(t, !0, e, null);
            }));
        }
        function zr(e, t, n, r) {
          var o =
              4 < arguments.length && void 0 !== arguments[4]
                ? arguments[4]
                : 0,
            i = n;
          if (
            ("selectionchange" === e &&
              9 !== n.nodeType &&
              (i = n.ownerDocument),
            null !== r && !t && Pr.has(e))
          ) {
            if ("scroll" !== e) return;
            (o |= 2), (i = r);
          }
          var a = ao(i),
            l = e + "__" + (t ? "capture" : "bubble");
          a.has(l) || (t && (o |= 4), Nr(i, e, o, t), a.add(l));
        }
        function Nr(e, t, n, r) {
          var o = zt.get(t);
          switch (void 0 === o ? 2 : o) {
            case 0:
              o = Qt;
              break;
            case 1:
              o = Yt;
              break;
            default:
              o = Xt;
          }
          (n = o.bind(null, t, n, e)),
            (o = void 0),
            !We ||
              ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
              (o = !0),
            r
              ? void 0 !== o
                ? e.addEventListener(t, n, { capture: !0, passive: o })
                : e.addEventListener(t, n, !0)
              : void 0 !== o
              ? e.addEventListener(t, n, { passive: o })
              : e.addEventListener(t, n, !1);
        }
        function Lr(e, t, n, r, o) {
          var i = r;
          if (0 === (1 & t) && 0 === (2 & t) && null !== r)
            e: for (;;) {
              if (null === r) return;
              var a = r.tag;
              if (3 === a || 4 === a) {
                var l = r.stateNode.containerInfo;
                if (l === o || (8 === l.nodeType && l.parentNode === o)) break;
                if (4 === a)
                  for (a = r.return; null !== a; ) {
                    var s = a.tag;
                    if (
                      (3 === s || 4 === s) &&
                      ((s = a.stateNode.containerInfo) === o ||
                        (8 === s.nodeType && s.parentNode === o))
                    )
                      return;
                    a = a.return;
                  }
                for (; null !== l; ) {
                  if (null === (a = no(l))) return;
                  if (5 === (s = a.tag) || 6 === s) {
                    r = i = a;
                    continue e;
                  }
                  l = l.parentNode;
                }
              }
              r = r.return;
            }
          !(function (e, t, n) {
            if (Fe) return e(t, n);
            Fe = !0;
            try {
              _e(e, t, n);
            } finally {
              (Fe = !1), Ie();
            }
          })(function () {
            var r = i,
              o = Ce(n),
              a = [];
            e: {
              var l = Ot.get(e);
              if (void 0 !== l) {
                var s = pn,
                  u = e;
                switch (e) {
                  case "keypress":
                    if (0 === on(n)) break e;
                  case "keydown":
                  case "keyup":
                    s = Tn;
                    break;
                  case "focusin":
                    (u = "focus"), (s = bn);
                    break;
                  case "focusout":
                    (u = "blur"), (s = bn);
                    break;
                  case "beforeblur":
                  case "afterblur":
                    s = bn;
                    break;
                  case "click":
                    if (2 === n.button) break e;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    s = gn;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    s = yn;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    s = On;
                    break;
                  case Mt:
                  case Rt:
                  case Tt:
                    s = xn;
                    break;
                  case jt:
                    s = zn;
                    break;
                  case "scroll":
                    s = mn;
                    break;
                  case "wheel":
                    s = Ln;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    s = kn;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    s = jn;
                }
                var c = 0 !== (4 & t),
                  d = !c && "scroll" === e,
                  f = c ? (null !== l ? l + "Capture" : null) : l;
                c = [];
                for (var p, h = r; null !== h; ) {
                  var m = (p = h).stateNode;
                  if (
                    (5 === p.tag &&
                      null !== m &&
                      ((p = m),
                      null !== f &&
                        null != (m = De(h, f)) &&
                        c.push(_r(h, m, p))),
                    d)
                  )
                    break;
                  h = h.return;
                }
                0 < c.length &&
                  ((l = new s(l, u, null, n, o)),
                  a.push({ event: l, listeners: c }));
              }
            }
            if (0 === (7 & t)) {
              if (
                ((s = "mouseout" === e || "pointerout" === e),
                (!(l = "mouseover" === e || "pointerover" === e) ||
                  0 !== (16 & t) ||
                  !(u = n.relatedTarget || n.fromElement) ||
                  (!no(u) && !u[eo])) &&
                  (s || l) &&
                  ((l =
                    o.window === o
                      ? o
                      : (l = o.ownerDocument)
                      ? l.defaultView || l.parentWindow
                      : window),
                  s
                    ? ((s = r),
                      null !==
                        (u = (u = n.relatedTarget || n.toElement)
                          ? no(u)
                          : null) &&
                        (u !== (d = Qe(u)) || (5 !== u.tag && 6 !== u.tag)) &&
                        (u = null))
                    : ((s = null), (u = r)),
                  s !== u))
              ) {
                if (
                  ((c = gn),
                  (m = "onMouseLeave"),
                  (f = "onMouseEnter"),
                  (h = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((c = jn),
                    (m = "onPointerLeave"),
                    (f = "onPointerEnter"),
                    (h = "pointer")),
                  (d = null == s ? l : oo(s)),
                  (p = null == u ? l : oo(u)),
                  ((l = new c(m, h + "leave", s, n, o)).target = d),
                  (l.relatedTarget = p),
                  (m = null),
                  no(o) === r &&
                    (((c = new c(f, h + "enter", u, n, o)).target = p),
                    (c.relatedTarget = d),
                    (m = c)),
                  (d = m),
                  s && u)
                )
                  e: {
                    for (f = u, h = 0, p = c = s; p; p = Fr(p)) h++;
                    for (p = 0, m = f; m; m = Fr(m)) p++;
                    for (; 0 < h - p; ) (c = Fr(c)), h--;
                    for (; 0 < p - h; ) (f = Fr(f)), p--;
                    for (; h--; ) {
                      if (c === f || (null !== f && c === f.alternate)) break e;
                      (c = Fr(c)), (f = Fr(f));
                    }
                    c = null;
                  }
                else c = null;
                null !== s && Ir(a, l, s, c, !1),
                  null !== u && null !== d && Ir(a, d, u, c, !0);
              }
              if (
                "select" ===
                  (s =
                    (l = r ? oo(r) : window).nodeName &&
                    l.nodeName.toLowerCase()) ||
                ("input" === s && "file" === l.type)
              )
                var v = Jn;
              else if (qn(l))
                if (er) v = ur;
                else {
                  v = lr;
                  var g = ar;
                }
              else
                (s = l.nodeName) &&
                  "input" === s.toLowerCase() &&
                  ("checkbox" === l.type || "radio" === l.type) &&
                  (v = sr);
              switch (
                (v && (v = v(e, r))
                  ? Kn(a, v, n, o)
                  : (g && g(e, l, r),
                    "focusout" === e &&
                      (g = l._wrapperState) &&
                      g.controlled &&
                      "number" === l.type &&
                      oe(l, "number", l.value)),
                (g = r ? oo(r) : window),
                e)
              ) {
                case "focusin":
                  (qn(g) || "true" === g.contentEditable) &&
                    ((br = g), (xr = r), (wr = null));
                  break;
                case "focusout":
                  wr = xr = br = null;
                  break;
                case "mousedown":
                  kr = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  (kr = !1), Sr(a, n, o);
                  break;
                case "selectionchange":
                  if (yr) break;
                case "keydown":
                case "keyup":
                  Sr(a, n, o);
              }
              var y;
              if (An)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var b = "onCompositionStart";
                      break e;
                    case "compositionend":
                      b = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      b = "onCompositionUpdate";
                      break e;
                  }
                  b = void 0;
                }
              else
                Un
                  ? Vn(e, n) && (b = "onCompositionEnd")
                  : "keydown" === e &&
                    229 === n.keyCode &&
                    (b = "onCompositionStart");
              b &&
                (Dn &&
                  "ko" !== n.locale &&
                  (Un || "onCompositionStart" !== b
                    ? "onCompositionEnd" === b && Un && (y = rn())
                    : ((tn = "value" in (en = o) ? en.value : en.textContent),
                      (Un = !0))),
                0 < (g = Ar(r, b)).length &&
                  ((b = new Sn(b, e, null, n, o)),
                  a.push({ event: b, listeners: g }),
                  y ? (b.data = y) : null !== (y = Hn(n)) && (b.data = y))),
                (y = In
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return Hn(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((Bn = !0), Wn);
                        case "textInput":
                          return (e = t.data) === Wn && Bn ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (Un)
                        return "compositionend" === e || (!An && Vn(e, t))
                          ? ((e = rn()), (nn = tn = en = null), (Un = !1), e)
                          : null;
                      switch (e) {
                        case "paste":
                        default:
                          return null;
                        case "keypress":
                          if (
                            !(t.ctrlKey || t.altKey || t.metaKey) ||
                            (t.ctrlKey && t.altKey)
                          ) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case "compositionend":
                          return Dn && "ko" !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (r = Ar(r, "onBeforeInput")).length &&
                  ((o = new Sn("onBeforeInput", "beforeinput", null, n, o)),
                  a.push({ event: o, listeners: r }),
                  (o.data = y));
            }
            Rr(a, t);
          });
        }
        function _r(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function Ar(e, t) {
          for (var n = t + "Capture", r = []; null !== e; ) {
            var o = e,
              i = o.stateNode;
            5 === o.tag &&
              null !== i &&
              ((o = i),
              null != (i = De(e, n)) && r.unshift(_r(e, i, o)),
              null != (i = De(e, t)) && r.push(_r(e, i, o))),
              (e = e.return);
          }
          return r;
        }
        function Fr(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function Ir(e, t, n, r, o) {
          for (var i = t._reactName, a = []; null !== n && n !== r; ) {
            var l = n,
              s = l.alternate,
              u = l.stateNode;
            if (null !== s && s === r) break;
            5 === l.tag &&
              null !== u &&
              ((l = u),
              o
                ? null != (s = De(n, i)) && a.unshift(_r(n, s, l))
                : o || (null != (s = De(n, i)) && a.push(_r(n, s, l)))),
              (n = n.return);
          }
          0 !== a.length && e.push({ event: t, listeners: a });
        }
        function Dr() {}
        var Wr = null,
          Br = null;
        function Vr(e, t) {
          switch (e) {
            case "button":
            case "input":
            case "select":
            case "textarea":
              return !!t.autoFocus;
          }
          return !1;
        }
        function Hr(e, t) {
          return (
            "textarea" === e ||
            "option" === e ||
            "noscript" === e ||
            "string" === typeof t.children ||
            "number" === typeof t.children ||
            ("object" === typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var Ur = "function" === typeof setTimeout ? setTimeout : void 0,
          $r = "function" === typeof clearTimeout ? clearTimeout : void 0;
        function qr(e) {
          1 === e.nodeType
            ? (e.textContent = "")
            : 9 === e.nodeType && null != (e = e.body) && (e.textContent = "");
        }
        function Kr(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
          }
          return e;
        }
        function Gr(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ("$" === n || "$!" === n || "$?" === n) {
                if (0 === t) return e;
                t--;
              } else "/$" === n && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        var Qr = 0;
        var Yr = Math.random().toString(36).slice(2),
          Xr = "__reactFiber$" + Yr,
          Jr = "__reactProps$" + Yr,
          eo = "__reactContainer$" + Yr,
          to = "__reactEvents$" + Yr;
        function no(e) {
          var t = e[Xr];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[eo] || n[Xr])) {
              if (
                ((n = t.alternate),
                null !== t.child || (null !== n && null !== n.child))
              )
                for (e = Gr(e); null !== e; ) {
                  if ((n = e[Xr])) return n;
                  e = Gr(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function ro(e) {
          return !(e = e[Xr] || e[eo]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e;
        }
        function oo(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(a(33));
        }
        function io(e) {
          return e[Jr] || null;
        }
        function ao(e) {
          var t = e[to];
          return void 0 === t && (t = e[to] = new Set()), t;
        }
        var lo = [],
          so = -1;
        function uo(e) {
          return { current: e };
        }
        function co(e) {
          0 > so || ((e.current = lo[so]), (lo[so] = null), so--);
        }
        function fo(e, t) {
          so++, (lo[so] = e.current), (e.current = t);
        }
        var po = {},
          ho = uo(po),
          mo = uo(!1),
          vo = po;
        function go(e, t) {
          var n = e.type.contextTypes;
          if (!n) return po;
          var r = e.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext;
          var o,
            i = {};
          for (o in n) i[o] = t[o];
          return (
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                t),
              (e.__reactInternalMemoizedMaskedChildContext = i)),
            i
          );
        }
        function yo(e) {
          return null !== (e = e.childContextTypes) && void 0 !== e;
        }
        function bo() {
          co(mo), co(ho);
        }
        function xo(e, t, n) {
          if (ho.current !== po) throw Error(a(168));
          fo(ho, t), fo(mo, n);
        }
        function wo(e, t, n) {
          var r = e.stateNode;
          if (
            ((e = t.childContextTypes), "function" !== typeof r.getChildContext)
          )
            return n;
          for (var i in (r = r.getChildContext()))
            if (!(i in e)) throw Error(a(108, q(t) || "Unknown", i));
          return o({}, n, r);
        }
        function ko(e) {
          return (
            (e =
              ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
              po),
            (vo = ho.current),
            fo(ho, e),
            fo(mo, mo.current),
            !0
          );
        }
        function So(e, t, n) {
          var r = e.stateNode;
          if (!r) throw Error(a(169));
          n
            ? ((e = wo(e, t, vo)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              co(mo),
              co(ho),
              fo(ho, e))
            : co(mo),
            fo(mo, n);
        }
        var Zo = null,
          Eo = null,
          Co = i.unstable_runWithPriority,
          Po = i.unstable_scheduleCallback,
          Mo = i.unstable_cancelCallback,
          Ro = i.unstable_shouldYield,
          To = i.unstable_requestPaint,
          jo = i.unstable_now,
          Oo = i.unstable_getCurrentPriorityLevel,
          zo = i.unstable_ImmediatePriority,
          No = i.unstable_UserBlockingPriority,
          Lo = i.unstable_NormalPriority,
          _o = i.unstable_LowPriority,
          Ao = i.unstable_IdlePriority,
          Fo = {},
          Io = void 0 !== To ? To : function () {},
          Do = null,
          Wo = null,
          Bo = !1,
          Vo = jo(),
          Ho =
            1e4 > Vo
              ? jo
              : function () {
                  return jo() - Vo;
                };
        function Uo() {
          switch (Oo()) {
            case zo:
              return 99;
            case No:
              return 98;
            case Lo:
              return 97;
            case _o:
              return 96;
            case Ao:
              return 95;
            default:
              throw Error(a(332));
          }
        }
        function $o(e) {
          switch (e) {
            case 99:
              return zo;
            case 98:
              return No;
            case 97:
              return Lo;
            case 96:
              return _o;
            case 95:
              return Ao;
            default:
              throw Error(a(332));
          }
        }
        function qo(e, t) {
          return (e = $o(e)), Co(e, t);
        }
        function Ko(e, t, n) {
          return (e = $o(e)), Po(e, t, n);
        }
        function Go() {
          if (null !== Wo) {
            var e = Wo;
            (Wo = null), Mo(e);
          }
          Qo();
        }
        function Qo() {
          if (!Bo && null !== Do) {
            Bo = !0;
            var e = 0;
            try {
              var t = Do;
              qo(99, function () {
                for (; e < t.length; e++) {
                  var n = t[e];
                  do {
                    n = n(!0);
                  } while (null !== n);
                }
              }),
                (Do = null);
            } catch (n) {
              throw (null !== Do && (Do = Do.slice(e + 1)), Po(zo, Go), n);
            } finally {
              Bo = !1;
            }
          }
        }
        var Yo = w.ReactCurrentBatchConfig;
        function Xo(e, t) {
          if (e && e.defaultProps) {
            for (var n in ((t = o({}, t)), (e = e.defaultProps)))
              void 0 === t[n] && (t[n] = e[n]);
            return t;
          }
          return t;
        }
        var Jo = uo(null),
          ei = null,
          ti = null,
          ni = null;
        function ri() {
          ni = ti = ei = null;
        }
        function oi(e) {
          var t = Jo.current;
          co(Jo), (e.type._context._currentValue = t);
        }
        function ii(e, t) {
          for (; null !== e; ) {
            var n = e.alternate;
            if ((e.childLanes & t) === t) {
              if (null === n || (n.childLanes & t) === t) break;
              n.childLanes |= t;
            } else (e.childLanes |= t), null !== n && (n.childLanes |= t);
            e = e.return;
          }
        }
        function ai(e, t) {
          (ei = e),
            (ni = ti = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 !== (e.lanes & t) && (Aa = !0), (e.firstContext = null));
        }
        function li(e, t) {
          if (ni !== e && !1 !== t && 0 !== t)
            if (
              (("number" === typeof t && 1073741823 !== t) ||
                ((ni = e), (t = 1073741823)),
              (t = { context: e, observedBits: t, next: null }),
              null === ti)
            ) {
              if (null === ei) throw Error(a(308));
              (ti = t),
                (ei.dependencies = {
                  lanes: 0,
                  firstContext: t,
                  responders: null,
                });
            } else ti = ti.next = t;
          return e._currentValue;
        }
        var si = !1;
        function ui(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null },
            effects: null,
          };
        }
        function ci(e, t) {
          (e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
              });
        }
        function di(e, t) {
          return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          };
        }
        function fi(e, t) {
          if (null !== (e = e.updateQueue)) {
            var n = (e = e.shared).pending;
            null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
              (e.pending = t);
          }
        }
        function pi(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var o = null,
              i = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var a = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null,
                };
                null === i ? (o = i = a) : (i = i.next = a), (n = n.next);
              } while (null !== n);
              null === i ? (o = i = t) : (i = i.next = t);
            } else o = i = t;
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: o,
                lastBaseUpdate: i,
                shared: r.shared,
                effects: r.effects,
              }),
              void (e.updateQueue = n)
            );
          }
          null === (e = n.lastBaseUpdate)
            ? (n.firstBaseUpdate = t)
            : (e.next = t),
            (n.lastBaseUpdate = t);
        }
        function hi(e, t, n, r) {
          var i = e.updateQueue;
          si = !1;
          var a = i.firstBaseUpdate,
            l = i.lastBaseUpdate,
            s = i.shared.pending;
          if (null !== s) {
            i.shared.pending = null;
            var u = s,
              c = u.next;
            (u.next = null), null === l ? (a = c) : (l.next = c), (l = u);
            var d = e.alternate;
            if (null !== d) {
              var f = (d = d.updateQueue).lastBaseUpdate;
              f !== l &&
                (null === f ? (d.firstBaseUpdate = c) : (f.next = c),
                (d.lastBaseUpdate = u));
            }
          }
          if (null !== a) {
            for (f = i.baseState, l = 0, d = c = u = null; ; ) {
              s = a.lane;
              var p = a.eventTime;
              if ((r & s) === s) {
                null !== d &&
                  (d = d.next =
                    {
                      eventTime: p,
                      lane: 0,
                      tag: a.tag,
                      payload: a.payload,
                      callback: a.callback,
                      next: null,
                    });
                e: {
                  var h = e,
                    m = a;
                  switch (((s = t), (p = n), m.tag)) {
                    case 1:
                      if ("function" === typeof (h = m.payload)) {
                        f = h.call(p, f, s);
                        break e;
                      }
                      f = h;
                      break e;
                    case 3:
                      h.flags = (-4097 & h.flags) | 64;
                    case 0:
                      if (
                        null ===
                          (s =
                            "function" === typeof (h = m.payload)
                              ? h.call(p, f, s)
                              : h) ||
                        void 0 === s
                      )
                        break e;
                      f = o({}, f, s);
                      break e;
                    case 2:
                      si = !0;
                  }
                }
                null !== a.callback &&
                  ((e.flags |= 32),
                  null === (s = i.effects) ? (i.effects = [a]) : s.push(a));
              } else
                (p = {
                  eventTime: p,
                  lane: s,
                  tag: a.tag,
                  payload: a.payload,
                  callback: a.callback,
                  next: null,
                }),
                  null === d ? ((c = d = p), (u = f)) : (d = d.next = p),
                  (l |= s);
              if (null === (a = a.next)) {
                if (null === (s = i.shared.pending)) break;
                (a = s.next),
                  (s.next = null),
                  (i.lastBaseUpdate = s),
                  (i.shared.pending = null);
              }
            }
            null === d && (u = f),
              (i.baseState = u),
              (i.firstBaseUpdate = c),
              (i.lastBaseUpdate = d),
              (Wl |= l),
              (e.lanes = l),
              (e.memoizedState = f);
          }
        }
        function mi(e, t, n) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var r = e[t],
                o = r.callback;
              if (null !== o) {
                if (((r.callback = null), (r = n), "function" !== typeof o))
                  throw Error(a(191, o));
                o.call(r);
              }
            }
        }
        var vi = new r.Component().refs;
        function gi(e, t, n, r) {
          (n =
            null === (n = n(r, (t = e.memoizedState))) || void 0 === n
              ? t
              : o({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n);
        }
        var yi = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && Qe(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = fs(),
              o = ps(e),
              i = di(r, o);
            (i.payload = t),
              void 0 !== n && null !== n && (i.callback = n),
              fi(e, i),
              hs(e, o, r);
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = fs(),
              o = ps(e),
              i = di(r, o);
            (i.tag = 1),
              (i.payload = t),
              void 0 !== n && null !== n && (i.callback = n),
              fi(e, i),
              hs(e, o, r);
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = fs(),
              r = ps(e),
              o = di(n, r);
            (o.tag = 2),
              void 0 !== t && null !== t && (o.callback = t),
              fi(e, o),
              hs(e, r, n);
          },
        };
        function bi(e, t, n, r, o, i, a) {
          return "function" === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, i, a)
            : !t.prototype ||
                !t.prototype.isPureReactComponent ||
                !fr(n, r) ||
                !fr(o, i);
        }
        function xi(e, t, n) {
          var r = !1,
            o = po,
            i = t.contextType;
          return (
            "object" === typeof i && null !== i
              ? (i = li(i))
              : ((o = yo(t) ? vo : ho.current),
                (i = (r = null !== (r = t.contextTypes) && void 0 !== r)
                  ? go(e, o)
                  : po)),
            (t = new t(n, i)),
            (e.memoizedState =
              null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = yi),
            (e.stateNode = t),
            (t._reactInternals = e),
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                o),
              (e.__reactInternalMemoizedMaskedChildContext = i)),
            t
          );
        }
        function wi(e, t, n, r) {
          (e = t.state),
            "function" === typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(n, r),
            "function" === typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && yi.enqueueReplaceState(t, t.state, null);
        }
        function ki(e, t, n, r) {
          var o = e.stateNode;
          (o.props = n), (o.state = e.memoizedState), (o.refs = vi), ui(e);
          var i = t.contextType;
          "object" === typeof i && null !== i
            ? (o.context = li(i))
            : ((i = yo(t) ? vo : ho.current), (o.context = go(e, i))),
            hi(e, n, o, r),
            (o.state = e.memoizedState),
            "function" === typeof (i = t.getDerivedStateFromProps) &&
              (gi(e, t, i, n), (o.state = e.memoizedState)),
            "function" === typeof t.getDerivedStateFromProps ||
              "function" === typeof o.getSnapshotBeforeUpdate ||
              ("function" !== typeof o.UNSAFE_componentWillMount &&
                "function" !== typeof o.componentWillMount) ||
              ((t = o.state),
              "function" === typeof o.componentWillMount &&
                o.componentWillMount(),
              "function" === typeof o.UNSAFE_componentWillMount &&
                o.UNSAFE_componentWillMount(),
              t !== o.state && yi.enqueueReplaceState(o, o.state, null),
              hi(e, n, o, r),
              (o.state = e.memoizedState)),
            "function" === typeof o.componentDidMount && (e.flags |= 4);
        }
        var Si = Array.isArray;
        function Zi(e, t, n) {
          if (
            null !== (e = n.ref) &&
            "function" !== typeof e &&
            "object" !== typeof e
          ) {
            if (n._owner) {
              if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(a(309));
                var r = n.stateNode;
              }
              if (!r) throw Error(a(147, e));
              var o = "" + e;
              return null !== t &&
                null !== t.ref &&
                "function" === typeof t.ref &&
                t.ref._stringRef === o
                ? t.ref
                : ((t = function (e) {
                    var t = r.refs;
                    t === vi && (t = r.refs = {}),
                      null === e ? delete t[o] : (t[o] = e);
                  }),
                  (t._stringRef = o),
                  t);
            }
            if ("string" !== typeof e) throw Error(a(284));
            if (!n._owner) throw Error(a(290, e));
          }
          return e;
        }
        function Ei(e, t) {
          if ("textarea" !== e.type)
            throw Error(
              a(
                31,
                "[object Object]" === Object.prototype.toString.call(t)
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : t
              )
            );
        }
        function Ci(e) {
          function t(t, n) {
            if (e) {
              var r = t.lastEffect;
              null !== r
                ? ((r.nextEffect = n), (t.lastEffect = n))
                : (t.firstEffect = t.lastEffect = n),
                (n.nextEffect = null),
                (n.flags = 8);
            }
          }
          function n(n, r) {
            if (!e) return null;
            for (; null !== r; ) t(n, r), (r = r.sibling);
            return null;
          }
          function r(e, t) {
            for (e = new Map(); null !== t; )
              null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                (t = t.sibling);
            return e;
          }
          function o(e, t) {
            return ((e = $s(e, t)).index = 0), (e.sibling = null), e;
          }
          function i(t, n, r) {
            return (
              (t.index = r),
              e
                ? null !== (r = t.alternate)
                  ? (r = r.index) < n
                    ? ((t.flags = 2), n)
                    : r
                  : ((t.flags = 2), n)
                : n
            );
          }
          function l(t) {
            return e && null === t.alternate && (t.flags = 2), t;
          }
          function s(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = Qs(n, e.mode, r)).return = e), t)
              : (((t = o(t, n)).return = e), t);
          }
          function u(e, t, n, r) {
            return null !== t && t.elementType === n.type
              ? (((r = o(t, n.props)).ref = Zi(e, t, n)), (r.return = e), r)
              : (((r = qs(n.type, n.key, n.props, null, e.mode, r)).ref = Zi(
                  e,
                  t,
                  n
                )),
                (r.return = e),
                r);
          }
          function c(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = Ys(n, e.mode, r)).return = e), t)
              : (((t = o(t, n.children || [])).return = e), t);
          }
          function d(e, t, n, r, i) {
            return null === t || 7 !== t.tag
              ? (((t = Ks(n, e.mode, r, i)).return = e), t)
              : (((t = o(t, n)).return = e), t);
          }
          function f(e, t, n) {
            if ("string" === typeof t || "number" === typeof t)
              return ((t = Qs("" + t, e.mode, n)).return = e), t;
            if ("object" === typeof t && null !== t) {
              switch (t.$$typeof) {
                case k:
                  return (
                    ((n = qs(t.type, t.key, t.props, null, e.mode, n)).ref = Zi(
                      e,
                      null,
                      t
                    )),
                    (n.return = e),
                    n
                  );
                case S:
                  return ((t = Ys(t, e.mode, n)).return = e), t;
              }
              if (Si(t) || B(t))
                return ((t = Ks(t, e.mode, n, null)).return = e), t;
              Ei(e, t);
            }
            return null;
          }
          function p(e, t, n, r) {
            var o = null !== t ? t.key : null;
            if ("string" === typeof n || "number" === typeof n)
              return null !== o ? null : s(e, t, "" + n, r);
            if ("object" === typeof n && null !== n) {
              switch (n.$$typeof) {
                case k:
                  return n.key === o
                    ? n.type === Z
                      ? d(e, t, n.props.children, r, o)
                      : u(e, t, n, r)
                    : null;
                case S:
                  return n.key === o ? c(e, t, n, r) : null;
              }
              if (Si(n) || B(n)) return null !== o ? null : d(e, t, n, r, null);
              Ei(e, n);
            }
            return null;
          }
          function h(e, t, n, r, o) {
            if ("string" === typeof r || "number" === typeof r)
              return s(t, (e = e.get(n) || null), "" + r, o);
            if ("object" === typeof r && null !== r) {
              switch (r.$$typeof) {
                case k:
                  return (
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r.type === Z
                      ? d(t, e, r.props.children, o, r.key)
                      : u(t, e, r, o)
                  );
                case S:
                  return c(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    o
                  );
              }
              if (Si(r) || B(r))
                return d(t, (e = e.get(n) || null), r, o, null);
              Ei(t, r);
            }
            return null;
          }
          function m(o, a, l, s) {
            for (
              var u = null, c = null, d = a, m = (a = 0), v = null;
              null !== d && m < l.length;
              m++
            ) {
              d.index > m ? ((v = d), (d = null)) : (v = d.sibling);
              var g = p(o, d, l[m], s);
              if (null === g) {
                null === d && (d = v);
                break;
              }
              e && d && null === g.alternate && t(o, d),
                (a = i(g, a, m)),
                null === c ? (u = g) : (c.sibling = g),
                (c = g),
                (d = v);
            }
            if (m === l.length) return n(o, d), u;
            if (null === d) {
              for (; m < l.length; m++)
                null !== (d = f(o, l[m], s)) &&
                  ((a = i(d, a, m)),
                  null === c ? (u = d) : (c.sibling = d),
                  (c = d));
              return u;
            }
            for (d = r(o, d); m < l.length; m++)
              null !== (v = h(d, o, m, l[m], s)) &&
                (e &&
                  null !== v.alternate &&
                  d.delete(null === v.key ? m : v.key),
                (a = i(v, a, m)),
                null === c ? (u = v) : (c.sibling = v),
                (c = v));
            return (
              e &&
                d.forEach(function (e) {
                  return t(o, e);
                }),
              u
            );
          }
          function v(o, l, s, u) {
            var c = B(s);
            if ("function" !== typeof c) throw Error(a(150));
            if (null == (s = c.call(s))) throw Error(a(151));
            for (
              var d = (c = null), m = l, v = (l = 0), g = null, y = s.next();
              null !== m && !y.done;
              v++, y = s.next()
            ) {
              m.index > v ? ((g = m), (m = null)) : (g = m.sibling);
              var b = p(o, m, y.value, u);
              if (null === b) {
                null === m && (m = g);
                break;
              }
              e && m && null === b.alternate && t(o, m),
                (l = i(b, l, v)),
                null === d ? (c = b) : (d.sibling = b),
                (d = b),
                (m = g);
            }
            if (y.done) return n(o, m), c;
            if (null === m) {
              for (; !y.done; v++, y = s.next())
                null !== (y = f(o, y.value, u)) &&
                  ((l = i(y, l, v)),
                  null === d ? (c = y) : (d.sibling = y),
                  (d = y));
              return c;
            }
            for (m = r(o, m); !y.done; v++, y = s.next())
              null !== (y = h(m, o, v, y.value, u)) &&
                (e &&
                  null !== y.alternate &&
                  m.delete(null === y.key ? v : y.key),
                (l = i(y, l, v)),
                null === d ? (c = y) : (d.sibling = y),
                (d = y));
            return (
              e &&
                m.forEach(function (e) {
                  return t(o, e);
                }),
              c
            );
          }
          return function (e, r, i, s) {
            var u =
              "object" === typeof i &&
              null !== i &&
              i.type === Z &&
              null === i.key;
            u && (i = i.props.children);
            var c = "object" === typeof i && null !== i;
            if (c)
              switch (i.$$typeof) {
                case k:
                  e: {
                    for (c = i.key, u = r; null !== u; ) {
                      if (u.key === c) {
                        if (7 === u.tag) {
                          if (i.type === Z) {
                            n(e, u.sibling),
                              ((r = o(u, i.props.children)).return = e),
                              (e = r);
                            break e;
                          }
                        } else if (u.elementType === i.type) {
                          n(e, u.sibling),
                            ((r = o(u, i.props)).ref = Zi(e, u, i)),
                            (r.return = e),
                            (e = r);
                          break e;
                        }
                        n(e, u);
                        break;
                      }
                      t(e, u), (u = u.sibling);
                    }
                    i.type === Z
                      ? (((r = Ks(i.props.children, e.mode, s, i.key)).return =
                          e),
                        (e = r))
                      : (((s = qs(
                          i.type,
                          i.key,
                          i.props,
                          null,
                          e.mode,
                          s
                        )).ref = Zi(e, r, i)),
                        (s.return = e),
                        (e = s));
                  }
                  return l(e);
                case S:
                  e: {
                    for (u = i.key; null !== r; ) {
                      if (r.key === u) {
                        if (
                          4 === r.tag &&
                          r.stateNode.containerInfo === i.containerInfo &&
                          r.stateNode.implementation === i.implementation
                        ) {
                          n(e, r.sibling),
                            ((r = o(r, i.children || [])).return = e),
                            (e = r);
                          break e;
                        }
                        n(e, r);
                        break;
                      }
                      t(e, r), (r = r.sibling);
                    }
                    ((r = Ys(i, e.mode, s)).return = e), (e = r);
                  }
                  return l(e);
              }
            if ("string" === typeof i || "number" === typeof i)
              return (
                (i = "" + i),
                null !== r && 6 === r.tag
                  ? (n(e, r.sibling), ((r = o(r, i)).return = e), (e = r))
                  : (n(e, r), ((r = Qs(i, e.mode, s)).return = e), (e = r)),
                l(e)
              );
            if (Si(i)) return m(e, r, i, s);
            if (B(i)) return v(e, r, i, s);
            if ((c && Ei(e, i), "undefined" === typeof i && !u))
              switch (e.tag) {
                case 1:
                case 22:
                case 0:
                case 11:
                case 15:
                  throw Error(a(152, q(e.type) || "Component"));
              }
            return n(e, r);
          };
        }
        var Pi = Ci(!0),
          Mi = Ci(!1),
          Ri = {},
          Ti = uo(Ri),
          ji = uo(Ri),
          Oi = uo(Ri);
        function zi(e) {
          if (e === Ri) throw Error(a(174));
          return e;
        }
        function Ni(e, t) {
          switch ((fo(Oi, t), fo(ji, e), fo(Ti, Ri), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : he(null, "");
              break;
            default:
              t = he(
                (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
                (e = e.tagName)
              );
          }
          co(Ti), fo(Ti, t);
        }
        function Li() {
          co(Ti), co(ji), co(Oi);
        }
        function _i(e) {
          zi(Oi.current);
          var t = zi(Ti.current),
            n = he(t, e.type);
          t !== n && (fo(ji, e), fo(Ti, n));
        }
        function Ai(e) {
          ji.current === e && (co(Ti), co(ji));
        }
        var Fi = uo(0);
        function Ii(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (
                null !== n &&
                (null === (n = n.dehydrated) ||
                  "$?" === n.data ||
                  "$!" === n.data)
              )
                return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 !== (64 & t.flags)) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        var Di = null,
          Wi = null,
          Bi = !1;
        function Vi(e, t) {
          var n = Hs(5, null, null, 0);
          (n.elementType = "DELETED"),
            (n.type = "DELETED"),
            (n.stateNode = t),
            (n.return = e),
            (n.flags = 8),
            null !== e.lastEffect
              ? ((e.lastEffect.nextEffect = n), (e.lastEffect = n))
              : (e.firstEffect = e.lastEffect = n);
        }
        function Hi(e, t) {
          switch (e.tag) {
            case 5:
              var n = e.type;
              return (
                null !==
                  (t =
                    1 !== t.nodeType ||
                    n.toLowerCase() !== t.nodeName.toLowerCase()
                      ? null
                      : t) && ((e.stateNode = t), !0)
              );
            case 6:
              return (
                null !==
                  (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), !0)
              );
            default:
              return !1;
          }
        }
        function Ui(e) {
          if (Bi) {
            var t = Wi;
            if (t) {
              var n = t;
              if (!Hi(e, t)) {
                if (!(t = Kr(n.nextSibling)) || !Hi(e, t))
                  return (
                    (e.flags = (-1025 & e.flags) | 2), (Bi = !1), void (Di = e)
                  );
                Vi(Di, n);
              }
              (Di = e), (Wi = Kr(t.firstChild));
            } else (e.flags = (-1025 & e.flags) | 2), (Bi = !1), (Di = e);
          }
        }
        function $i(e) {
          for (
            e = e.return;
            null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

          )
            e = e.return;
          Di = e;
        }
        function qi(e) {
          if (e !== Di) return !1;
          if (!Bi) return $i(e), (Bi = !0), !1;
          var t = e.type;
          if (
            5 !== e.tag ||
            ("head" !== t && "body" !== t && !Hr(t, e.memoizedProps))
          )
            for (t = Wi; t; ) Vi(e, t), (t = Kr(t.nextSibling));
          if (($i(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(a(317));
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var n = e.data;
                  if ("/$" === n) {
                    if (0 === t) {
                      Wi = Kr(e.nextSibling);
                      break e;
                    }
                    t--;
                  } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
                }
                e = e.nextSibling;
              }
              Wi = null;
            }
          } else Wi = Di ? Kr(e.stateNode.nextSibling) : null;
          return !0;
        }
        function Ki() {
          (Wi = Di = null), (Bi = !1);
        }
        var Gi = [];
        function Qi() {
          for (var e = 0; e < Gi.length; e++)
            Gi[e]._workInProgressVersionPrimary = null;
          Gi.length = 0;
        }
        var Yi = w.ReactCurrentDispatcher,
          Xi = w.ReactCurrentBatchConfig,
          Ji = 0,
          ea = null,
          ta = null,
          na = null,
          ra = !1,
          oa = !1;
        function ia() {
          throw Error(a(321));
        }
        function aa(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!cr(e[n], t[n])) return !1;
          return !0;
        }
        function la(e, t, n, r, o, i) {
          if (
            ((Ji = i),
            (ea = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (Yi.current = null === e || null === e.memoizedState ? za : Na),
            (e = n(r, o)),
            oa)
          ) {
            i = 0;
            do {
              if (((oa = !1), !(25 > i))) throw Error(a(301));
              (i += 1),
                (na = ta = null),
                (t.updateQueue = null),
                (Yi.current = La),
                (e = n(r, o));
            } while (oa);
          }
          if (
            ((Yi.current = Oa),
            (t = null !== ta && null !== ta.next),
            (Ji = 0),
            (na = ta = ea = null),
            (ra = !1),
            t)
          )
            throw Error(a(300));
          return e;
        }
        function sa() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === na ? (ea.memoizedState = na = e) : (na = na.next = e), na
          );
        }
        function ua() {
          if (null === ta) {
            var e = ea.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = ta.next;
          var t = null === na ? ea.memoizedState : na.next;
          if (null !== t) (na = t), (ta = e);
          else {
            if (null === e) throw Error(a(310));
            (e = {
              memoizedState: (ta = e).memoizedState,
              baseState: ta.baseState,
              baseQueue: ta.baseQueue,
              queue: ta.queue,
              next: null,
            }),
              null === na ? (ea.memoizedState = na = e) : (na = na.next = e);
          }
          return na;
        }
        function ca(e, t) {
          return "function" === typeof t ? t(e) : t;
        }
        function da(e) {
          var t = ua(),
            n = t.queue;
          if (null === n) throw Error(a(311));
          n.lastRenderedReducer = e;
          var r = ta,
            o = r.baseQueue,
            i = n.pending;
          if (null !== i) {
            if (null !== o) {
              var l = o.next;
              (o.next = i.next), (i.next = l);
            }
            (r.baseQueue = o = i), (n.pending = null);
          }
          if (null !== o) {
            (o = o.next), (r = r.baseState);
            var s = (l = i = null),
              u = o;
            do {
              var c = u.lane;
              if ((Ji & c) === c)
                null !== s &&
                  (s = s.next =
                    {
                      lane: 0,
                      action: u.action,
                      eagerReducer: u.eagerReducer,
                      eagerState: u.eagerState,
                      next: null,
                    }),
                  (r = u.eagerReducer === e ? u.eagerState : e(r, u.action));
              else {
                var d = {
                  lane: c,
                  action: u.action,
                  eagerReducer: u.eagerReducer,
                  eagerState: u.eagerState,
                  next: null,
                };
                null === s ? ((l = s = d), (i = r)) : (s = s.next = d),
                  (ea.lanes |= c),
                  (Wl |= c);
              }
              u = u.next;
            } while (null !== u && u !== o);
            null === s ? (i = r) : (s.next = l),
              cr(r, t.memoizedState) || (Aa = !0),
              (t.memoizedState = r),
              (t.baseState = i),
              (t.baseQueue = s),
              (n.lastRenderedState = r);
          }
          return [t.memoizedState, n.dispatch];
        }
        function fa(e) {
          var t = ua(),
            n = t.queue;
          if (null === n) throw Error(a(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            o = n.pending,
            i = t.memoizedState;
          if (null !== o) {
            n.pending = null;
            var l = (o = o.next);
            do {
              (i = e(i, l.action)), (l = l.next);
            } while (l !== o);
            cr(i, t.memoizedState) || (Aa = !0),
              (t.memoizedState = i),
              null === t.baseQueue && (t.baseState = i),
              (n.lastRenderedState = i);
          }
          return [i, r];
        }
        function pa(e, t, n) {
          var r = t._getVersion;
          r = r(t._source);
          var o = t._workInProgressVersionPrimary;
          if (
            (null !== o
              ? (e = o === r)
              : ((e = e.mutableReadLanes),
                (e = (Ji & e) === e) &&
                  ((t._workInProgressVersionPrimary = r), Gi.push(t))),
            e)
          )
            return n(t._source);
          throw (Gi.push(t), Error(a(350)));
        }
        function ha(e, t, n, r) {
          var o = zl;
          if (null === o) throw Error(a(349));
          var i = t._getVersion,
            l = i(t._source),
            s = Yi.current,
            u = s.useState(function () {
              return pa(o, t, n);
            }),
            c = u[1],
            d = u[0];
          u = na;
          var f = e.memoizedState,
            p = f.refs,
            h = p.getSnapshot,
            m = f.source;
          f = f.subscribe;
          var v = ea;
          return (
            (e.memoizedState = { refs: p, source: t, subscribe: r }),
            s.useEffect(
              function () {
                (p.getSnapshot = n), (p.setSnapshot = c);
                var e = i(t._source);
                if (!cr(l, e)) {
                  (e = n(t._source)),
                    cr(d, e) ||
                      (c(e),
                      (e = ps(v)),
                      (o.mutableReadLanes |= e & o.pendingLanes)),
                    (e = o.mutableReadLanes),
                    (o.entangledLanes |= e);
                  for (var r = o.entanglements, a = e; 0 < a; ) {
                    var s = 31 - Ht(a),
                      u = 1 << s;
                    (r[s] |= e), (a &= ~u);
                  }
                }
              },
              [n, t, r]
            ),
            s.useEffect(
              function () {
                return r(t._source, function () {
                  var e = p.getSnapshot,
                    n = p.setSnapshot;
                  try {
                    n(e(t._source));
                    var r = ps(v);
                    o.mutableReadLanes |= r & o.pendingLanes;
                  } catch (i) {
                    n(function () {
                      throw i;
                    });
                  }
                });
              },
              [t, r]
            ),
            (cr(h, n) && cr(m, t) && cr(f, r)) ||
              (((e = {
                pending: null,
                dispatch: null,
                lastRenderedReducer: ca,
                lastRenderedState: d,
              }).dispatch = c =
                ja.bind(null, ea, e)),
              (u.queue = e),
              (u.baseQueue = null),
              (d = pa(o, t, n)),
              (u.memoizedState = u.baseState = d)),
            d
          );
        }
        function ma(e, t, n) {
          return ha(ua(), e, t, n);
        }
        function va(e) {
          var t = sa();
          return (
            "function" === typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = (e = t.queue =
              {
                pending: null,
                dispatch: null,
                lastRenderedReducer: ca,
                lastRenderedState: e,
              }).dispatch =
              ja.bind(null, ea, e)),
            [t.memoizedState, e]
          );
        }
        function ga(e, t, n, r) {
          return (
            (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            null === (t = ea.updateQueue)
              ? ((t = { lastEffect: null }),
                (ea.updateQueue = t),
                (t.lastEffect = e.next = e))
              : null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
            e
          );
        }
        function ya(e) {
          return (e = { current: e }), (sa().memoizedState = e);
        }
        function ba() {
          return ua().memoizedState;
        }
        function xa(e, t, n, r) {
          var o = sa();
          (ea.flags |= e),
            (o.memoizedState = ga(1 | t, n, void 0, void 0 === r ? null : r));
        }
        function wa(e, t, n, r) {
          var o = ua();
          r = void 0 === r ? null : r;
          var i = void 0;
          if (null !== ta) {
            var a = ta.memoizedState;
            if (((i = a.destroy), null !== r && aa(r, a.deps)))
              return void ga(t, n, i, r);
          }
          (ea.flags |= e), (o.memoizedState = ga(1 | t, n, i, r));
        }
        function ka(e, t) {
          return xa(516, 4, e, t);
        }
        function Sa(e, t) {
          return wa(516, 4, e, t);
        }
        function Za(e, t) {
          return wa(4, 2, e, t);
        }
        function Ea(e, t) {
          return "function" === typeof t
            ? ((e = e()),
              t(e),
              function () {
                t(null);
              })
            : null !== t && void 0 !== t
            ? ((e = e()),
              (t.current = e),
              function () {
                t.current = null;
              })
            : void 0;
        }
        function Ca(e, t, n) {
          return (
            (n = null !== n && void 0 !== n ? n.concat([e]) : null),
            wa(4, 2, Ea.bind(null, t, e), n)
          );
        }
        function Pa() {}
        function Ma(e, t) {
          var n = ua();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && aa(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e);
        }
        function Ra(e, t) {
          var n = ua();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && aa(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e);
        }
        function Ta(e, t) {
          var n = Uo();
          qo(98 > n ? 98 : n, function () {
            e(!0);
          }),
            qo(97 < n ? 97 : n, function () {
              var n = Xi.transition;
              Xi.transition = 1;
              try {
                e(!1), t();
              } finally {
                Xi.transition = n;
              }
            });
        }
        function ja(e, t, n) {
          var r = fs(),
            o = ps(e),
            i = {
              lane: o,
              action: n,
              eagerReducer: null,
              eagerState: null,
              next: null,
            },
            a = t.pending;
          if (
            (null === a ? (i.next = i) : ((i.next = a.next), (a.next = i)),
            (t.pending = i),
            (a = e.alternate),
            e === ea || (null !== a && a === ea))
          )
            oa = ra = !0;
          else {
            if (
              0 === e.lanes &&
              (null === a || 0 === a.lanes) &&
              null !== (a = t.lastRenderedReducer)
            )
              try {
                var l = t.lastRenderedState,
                  s = a(l, n);
                if (((i.eagerReducer = a), (i.eagerState = s), cr(s, l)))
                  return;
              } catch (u) {}
            hs(e, o, r);
          }
        }
        var Oa = {
            readContext: li,
            useCallback: ia,
            useContext: ia,
            useEffect: ia,
            useImperativeHandle: ia,
            useLayoutEffect: ia,
            useMemo: ia,
            useReducer: ia,
            useRef: ia,
            useState: ia,
            useDebugValue: ia,
            useDeferredValue: ia,
            useTransition: ia,
            useMutableSource: ia,
            useOpaqueIdentifier: ia,
            unstable_isNewReconciler: !1,
          },
          za = {
            readContext: li,
            useCallback: function (e, t) {
              return (sa().memoizedState = [e, void 0 === t ? null : t]), e;
            },
            useContext: li,
            useEffect: ka,
            useImperativeHandle: function (e, t, n) {
              return (
                (n = null !== n && void 0 !== n ? n.concat([e]) : null),
                xa(4, 2, Ea.bind(null, t, e), n)
              );
            },
            useLayoutEffect: function (e, t) {
              return xa(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = sa();
              return (
                (t = void 0 === t ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
              );
            },
            useReducer: function (e, t, n) {
              var r = sa();
              return (
                (t = void 0 !== n ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = (e = r.queue =
                  {
                    pending: null,
                    dispatch: null,
                    lastRenderedReducer: e,
                    lastRenderedState: t,
                  }).dispatch =
                  ja.bind(null, ea, e)),
                [r.memoizedState, e]
              );
            },
            useRef: ya,
            useState: va,
            useDebugValue: Pa,
            useDeferredValue: function (e) {
              var t = va(e),
                n = t[0],
                r = t[1];
              return (
                ka(
                  function () {
                    var t = Xi.transition;
                    Xi.transition = 1;
                    try {
                      r(e);
                    } finally {
                      Xi.transition = t;
                    }
                  },
                  [e]
                ),
                n
              );
            },
            useTransition: function () {
              var e = va(!1),
                t = e[0];
              return ya((e = Ta.bind(null, e[1]))), [e, t];
            },
            useMutableSource: function (e, t, n) {
              var r = sa();
              return (
                (r.memoizedState = {
                  refs: { getSnapshot: t, setSnapshot: null },
                  source: e,
                  subscribe: n,
                }),
                ha(r, e, t, n)
              );
            },
            useOpaqueIdentifier: function () {
              if (Bi) {
                var e = !1,
                  t = (function (e) {
                    return { $$typeof: L, toString: e, valueOf: e };
                  })(function () {
                    throw (
                      (e || ((e = !0), n("r:" + (Qr++).toString(36))),
                      Error(a(355)))
                    );
                  }),
                  n = va(t)[1];
                return (
                  0 === (2 & ea.mode) &&
                    ((ea.flags |= 516),
                    ga(
                      5,
                      function () {
                        n("r:" + (Qr++).toString(36));
                      },
                      void 0,
                      null
                    )),
                  t
                );
              }
              return va((t = "r:" + (Qr++).toString(36))), t;
            },
            unstable_isNewReconciler: !1,
          },
          Na = {
            readContext: li,
            useCallback: Ma,
            useContext: li,
            useEffect: Sa,
            useImperativeHandle: Ca,
            useLayoutEffect: Za,
            useMemo: Ra,
            useReducer: da,
            useRef: ba,
            useState: function () {
              return da(ca);
            },
            useDebugValue: Pa,
            useDeferredValue: function (e) {
              var t = da(ca),
                n = t[0],
                r = t[1];
              return (
                Sa(
                  function () {
                    var t = Xi.transition;
                    Xi.transition = 1;
                    try {
                      r(e);
                    } finally {
                      Xi.transition = t;
                    }
                  },
                  [e]
                ),
                n
              );
            },
            useTransition: function () {
              var e = da(ca)[0];
              return [ba().current, e];
            },
            useMutableSource: ma,
            useOpaqueIdentifier: function () {
              return da(ca)[0];
            },
            unstable_isNewReconciler: !1,
          },
          La = {
            readContext: li,
            useCallback: Ma,
            useContext: li,
            useEffect: Sa,
            useImperativeHandle: Ca,
            useLayoutEffect: Za,
            useMemo: Ra,
            useReducer: fa,
            useRef: ba,
            useState: function () {
              return fa(ca);
            },
            useDebugValue: Pa,
            useDeferredValue: function (e) {
              var t = fa(ca),
                n = t[0],
                r = t[1];
              return (
                Sa(
                  function () {
                    var t = Xi.transition;
                    Xi.transition = 1;
                    try {
                      r(e);
                    } finally {
                      Xi.transition = t;
                    }
                  },
                  [e]
                ),
                n
              );
            },
            useTransition: function () {
              var e = fa(ca)[0];
              return [ba().current, e];
            },
            useMutableSource: ma,
            useOpaqueIdentifier: function () {
              return fa(ca)[0];
            },
            unstable_isNewReconciler: !1,
          },
          _a = w.ReactCurrentOwner,
          Aa = !1;
        function Fa(e, t, n, r) {
          t.child = null === e ? Mi(t, null, n, r) : Pi(t, e.child, n, r);
        }
        function Ia(e, t, n, r, o) {
          n = n.render;
          var i = t.ref;
          return (
            ai(t, o),
            (r = la(e, t, n, r, i, o)),
            null === e || Aa
              ? ((t.flags |= 1), Fa(e, t, r, o), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -517),
                (e.lanes &= ~o),
                il(e, t, o))
          );
        }
        function Da(e, t, n, r, o, i) {
          if (null === e) {
            var a = n.type;
            return "function" !== typeof a ||
              Us(a) ||
              void 0 !== a.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((e = qs(n.type, null, r, t, t.mode, i)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = a), Wa(e, t, a, r, o, i));
          }
          return (
            (a = e.child),
            0 === (o & i) &&
            ((o = a.memoizedProps),
            (n = null !== (n = n.compare) ? n : fr)(o, r) && e.ref === t.ref)
              ? il(e, t, i)
              : ((t.flags |= 1),
                ((e = $s(a, r)).ref = t.ref),
                (e.return = t),
                (t.child = e))
          );
        }
        function Wa(e, t, n, r, o, i) {
          if (null !== e && fr(e.memoizedProps, r) && e.ref === t.ref) {
            if (((Aa = !1), 0 === (i & o)))
              return (t.lanes = e.lanes), il(e, t, i);
            0 !== (16384 & e.flags) && (Aa = !0);
          }
          return Ha(e, t, n, r, i);
        }
        function Ba(e, t, n) {
          var r = t.pendingProps,
            o = r.children,
            i = null !== e ? e.memoizedState : null;
          if ("hidden" === r.mode || "unstable-defer-without-hiding" === r.mode)
            if (0 === (4 & t.mode))
              (t.memoizedState = { baseLanes: 0 }), ks(t, n);
            else {
              if (0 === (1073741824 & n))
                return (
                  (e = null !== i ? i.baseLanes | n : n),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = { baseLanes: e }),
                  ks(t, e),
                  null
                );
              (t.memoizedState = { baseLanes: 0 }),
                ks(t, null !== i ? i.baseLanes : n);
            }
          else
            null !== i
              ? ((r = i.baseLanes | n), (t.memoizedState = null))
              : (r = n),
              ks(t, r);
          return Fa(e, t, o, n), t.child;
        }
        function Va(e, t) {
          var n = t.ref;
          ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
            (t.flags |= 128);
        }
        function Ha(e, t, n, r, o) {
          var i = yo(n) ? vo : ho.current;
          return (
            (i = go(t, i)),
            ai(t, o),
            (n = la(e, t, n, r, i, o)),
            null === e || Aa
              ? ((t.flags |= 1), Fa(e, t, n, o), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -517),
                (e.lanes &= ~o),
                il(e, t, o))
          );
        }
        function Ua(e, t, n, r, o) {
          if (yo(n)) {
            var i = !0;
            ko(t);
          } else i = !1;
          if ((ai(t, o), null === t.stateNode))
            null !== e &&
              ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
              xi(t, n, r),
              ki(t, n, r, o),
              (r = !0);
          else if (null === e) {
            var a = t.stateNode,
              l = t.memoizedProps;
            a.props = l;
            var s = a.context,
              u = n.contextType;
            "object" === typeof u && null !== u
              ? (u = li(u))
              : (u = go(t, (u = yo(n) ? vo : ho.current)));
            var c = n.getDerivedStateFromProps,
              d =
                "function" === typeof c ||
                "function" === typeof a.getSnapshotBeforeUpdate;
            d ||
              ("function" !== typeof a.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof a.componentWillReceiveProps) ||
              ((l !== r || s !== u) && wi(t, a, r, u)),
              (si = !1);
            var f = t.memoizedState;
            (a.state = f),
              hi(t, r, a, o),
              (s = t.memoizedState),
              l !== r || f !== s || mo.current || si
                ? ("function" === typeof c &&
                    (gi(t, n, c, r), (s = t.memoizedState)),
                  (l = si || bi(t, n, l, r, f, s, u))
                    ? (d ||
                        ("function" !== typeof a.UNSAFE_componentWillMount &&
                          "function" !== typeof a.componentWillMount) ||
                        ("function" === typeof a.componentWillMount &&
                          a.componentWillMount(),
                        "function" === typeof a.UNSAFE_componentWillMount &&
                          a.UNSAFE_componentWillMount()),
                      "function" === typeof a.componentDidMount &&
                        (t.flags |= 4))
                    : ("function" === typeof a.componentDidMount &&
                        (t.flags |= 4),
                      (t.memoizedProps = r),
                      (t.memoizedState = s)),
                  (a.props = r),
                  (a.state = s),
                  (a.context = u),
                  (r = l))
                : ("function" === typeof a.componentDidMount && (t.flags |= 4),
                  (r = !1));
          } else {
            (a = t.stateNode),
              ci(e, t),
              (l = t.memoizedProps),
              (u = t.type === t.elementType ? l : Xo(t.type, l)),
              (a.props = u),
              (d = t.pendingProps),
              (f = a.context),
              "object" === typeof (s = n.contextType) && null !== s
                ? (s = li(s))
                : (s = go(t, (s = yo(n) ? vo : ho.current)));
            var p = n.getDerivedStateFromProps;
            (c =
              "function" === typeof p ||
              "function" === typeof a.getSnapshotBeforeUpdate) ||
              ("function" !== typeof a.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof a.componentWillReceiveProps) ||
              ((l !== d || f !== s) && wi(t, a, r, s)),
              (si = !1),
              (f = t.memoizedState),
              (a.state = f),
              hi(t, r, a, o);
            var h = t.memoizedState;
            l !== d || f !== h || mo.current || si
              ? ("function" === typeof p &&
                  (gi(t, n, p, r), (h = t.memoizedState)),
                (u = si || bi(t, n, u, r, f, h, s))
                  ? (c ||
                      ("function" !== typeof a.UNSAFE_componentWillUpdate &&
                        "function" !== typeof a.componentWillUpdate) ||
                      ("function" === typeof a.componentWillUpdate &&
                        a.componentWillUpdate(r, h, s),
                      "function" === typeof a.UNSAFE_componentWillUpdate &&
                        a.UNSAFE_componentWillUpdate(r, h, s)),
                    "function" === typeof a.componentDidUpdate &&
                      (t.flags |= 4),
                    "function" === typeof a.getSnapshotBeforeUpdate &&
                      (t.flags |= 256))
                  : ("function" !== typeof a.componentDidUpdate ||
                      (l === e.memoizedProps && f === e.memoizedState) ||
                      (t.flags |= 4),
                    "function" !== typeof a.getSnapshotBeforeUpdate ||
                      (l === e.memoizedProps && f === e.memoizedState) ||
                      (t.flags |= 256),
                    (t.memoizedProps = r),
                    (t.memoizedState = h)),
                (a.props = r),
                (a.state = h),
                (a.context = s),
                (r = u))
              : ("function" !== typeof a.componentDidUpdate ||
                  (l === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 4),
                "function" !== typeof a.getSnapshotBeforeUpdate ||
                  (l === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 256),
                (r = !1));
          }
          return $a(e, t, n, r, i, o);
        }
        function $a(e, t, n, r, o, i) {
          Va(e, t);
          var a = 0 !== (64 & t.flags);
          if (!r && !a) return o && So(t, n, !1), il(e, t, i);
          (r = t.stateNode), (_a.current = t);
          var l =
            a && "function" !== typeof n.getDerivedStateFromError
              ? null
              : r.render();
          return (
            (t.flags |= 1),
            null !== e && a
              ? ((t.child = Pi(t, e.child, null, i)),
                (t.child = Pi(t, null, l, i)))
              : Fa(e, t, l, i),
            (t.memoizedState = r.state),
            o && So(t, n, !0),
            t.child
          );
        }
        function qa(e) {
          var t = e.stateNode;
          t.pendingContext
            ? xo(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && xo(0, t.context, !1),
            Ni(e, t.containerInfo);
        }
        var Ka,
          Ga,
          Qa,
          Ya = { dehydrated: null, retryLane: 0 };
        function Xa(e, t, n) {
          var r,
            o = t.pendingProps,
            i = Fi.current,
            a = !1;
          return (
            (r = 0 !== (64 & t.flags)) ||
              (r = (null === e || null !== e.memoizedState) && 0 !== (2 & i)),
            r
              ? ((a = !0), (t.flags &= -65))
              : (null !== e && null === e.memoizedState) ||
                void 0 === o.fallback ||
                !0 === o.unstable_avoidThisFallback ||
                (i |= 1),
            fo(Fi, 1 & i),
            null === e
              ? (void 0 !== o.fallback && Ui(t),
                (e = o.children),
                (i = o.fallback),
                a
                  ? ((e = Ja(t, e, i, n)),
                    (t.child.memoizedState = { baseLanes: n }),
                    (t.memoizedState = Ya),
                    e)
                  : "number" === typeof o.unstable_expectedLoadTime
                  ? ((e = Ja(t, e, i, n)),
                    (t.child.memoizedState = { baseLanes: n }),
                    (t.memoizedState = Ya),
                    (t.lanes = 33554432),
                    e)
                  : (((n = Gs(
                      { mode: "visible", children: e },
                      t.mode,
                      n,
                      null
                    )).return = t),
                    (t.child = n)))
              : (e.memoizedState,
                a
                  ? ((o = tl(e, t, o.children, o.fallback, n)),
                    (a = t.child),
                    (i = e.child.memoizedState),
                    (a.memoizedState =
                      null === i
                        ? { baseLanes: n }
                        : { baseLanes: i.baseLanes | n }),
                    (a.childLanes = e.childLanes & ~n),
                    (t.memoizedState = Ya),
                    o)
                  : ((n = el(e, t, o.children, n)),
                    (t.memoizedState = null),
                    n))
          );
        }
        function Ja(e, t, n, r) {
          var o = e.mode,
            i = e.child;
          return (
            (t = { mode: "hidden", children: t }),
            0 === (2 & o) && null !== i
              ? ((i.childLanes = 0), (i.pendingProps = t))
              : (i = Gs(t, o, 0, null)),
            (n = Ks(n, o, r, null)),
            (i.return = e),
            (n.return = e),
            (i.sibling = n),
            (e.child = i),
            n
          );
        }
        function el(e, t, n, r) {
          var o = e.child;
          return (
            (e = o.sibling),
            (n = $s(o, { mode: "visible", children: n })),
            0 === (2 & t.mode) && (n.lanes = r),
            (n.return = t),
            (n.sibling = null),
            null !== e &&
              ((e.nextEffect = null),
              (e.flags = 8),
              (t.firstEffect = t.lastEffect = e)),
            (t.child = n)
          );
        }
        function tl(e, t, n, r, o) {
          var i = t.mode,
            a = e.child;
          e = a.sibling;
          var l = { mode: "hidden", children: n };
          return (
            0 === (2 & i) && t.child !== a
              ? (((n = t.child).childLanes = 0),
                (n.pendingProps = l),
                null !== (a = n.lastEffect)
                  ? ((t.firstEffect = n.firstEffect),
                    (t.lastEffect = a),
                    (a.nextEffect = null))
                  : (t.firstEffect = t.lastEffect = null))
              : (n = $s(a, l)),
            null !== e ? (r = $s(e, r)) : ((r = Ks(r, i, o, null)).flags |= 2),
            (r.return = t),
            (n.return = t),
            (n.sibling = r),
            (t.child = n),
            r
          );
        }
        function nl(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          null !== n && (n.lanes |= t), ii(e.return, t);
        }
        function rl(e, t, n, r, o, i) {
          var a = e.memoizedState;
          null === a
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: o,
                lastEffect: i,
              })
            : ((a.isBackwards = t),
              (a.rendering = null),
              (a.renderingStartTime = 0),
              (a.last = r),
              (a.tail = n),
              (a.tailMode = o),
              (a.lastEffect = i));
        }
        function ol(e, t, n) {
          var r = t.pendingProps,
            o = r.revealOrder,
            i = r.tail;
          if ((Fa(e, t, r.children, n), 0 !== (2 & (r = Fi.current))))
            (r = (1 & r) | 2), (t.flags |= 64);
          else {
            if (null !== e && 0 !== (64 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && nl(e, n);
                else if (19 === e.tag) nl(e, n);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            r &= 1;
          }
          if ((fo(Fi, r), 0 === (2 & t.mode))) t.memoizedState = null;
          else
            switch (o) {
              case "forwards":
                for (n = t.child, o = null; null !== n; )
                  null !== (e = n.alternate) && null === Ii(e) && (o = n),
                    (n = n.sibling);
                null === (n = o)
                  ? ((o = t.child), (t.child = null))
                  : ((o = n.sibling), (n.sibling = null)),
                  rl(t, !1, o, n, i, t.lastEffect);
                break;
              case "backwards":
                for (n = null, o = t.child, t.child = null; null !== o; ) {
                  if (null !== (e = o.alternate) && null === Ii(e)) {
                    t.child = o;
                    break;
                  }
                  (e = o.sibling), (o.sibling = n), (n = o), (o = e);
                }
                rl(t, !0, n, null, i, t.lastEffect);
                break;
              case "together":
                rl(t, !1, null, null, void 0, t.lastEffect);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function il(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (Wl |= t.lanes),
            0 !== (n & t.childLanes))
          ) {
            if (null !== e && t.child !== e.child) throw Error(a(153));
            if (null !== t.child) {
              for (
                n = $s((e = t.child), e.pendingProps),
                  t.child = n,
                  n.return = t;
                null !== e.sibling;

              )
                (e = e.sibling),
                  ((n = n.sibling = $s(e, e.pendingProps)).return = t);
              n.sibling = null;
            }
            return t.child;
          }
          return null;
        }
        function al(e, t) {
          if (!Bi)
            switch (e.tailMode) {
              case "hidden":
                t = e.tail;
                for (var n = null; null !== t; )
                  null !== t.alternate && (n = t), (t = t.sibling);
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
              case "collapsed":
                n = e.tail;
                for (var r = null; null !== n; )
                  null !== n.alternate && (r = n), (n = n.sibling);
                null === r
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function ll(e, t, n) {
          var r = t.pendingProps;
          switch (t.tag) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
              return null;
            case 1:
            case 17:
              return yo(t.type) && bo(), null;
            case 3:
              return (
                Li(),
                co(mo),
                co(ho),
                Qi(),
                (r = t.stateNode).pendingContext &&
                  ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (qi(t) ? (t.flags |= 4) : r.hydrate || (t.flags |= 256)),
                null
              );
            case 5:
              Ai(t);
              var i = zi(Oi.current);
              if (((n = t.type), null !== e && null != t.stateNode))
                Ga(e, t, n, r), e.ref !== t.ref && (t.flags |= 128);
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(a(166));
                  return null;
                }
                if (((e = zi(Ti.current)), qi(t))) {
                  (r = t.stateNode), (n = t.type);
                  var l = t.memoizedProps;
                  switch (((r[Xr] = t), (r[Jr] = l), n)) {
                    case "dialog":
                      Tr("cancel", r), Tr("close", r);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      Tr("load", r);
                      break;
                    case "video":
                    case "audio":
                      for (e = 0; e < Cr.length; e++) Tr(Cr[e], r);
                      break;
                    case "source":
                      Tr("error", r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Tr("error", r), Tr("load", r);
                      break;
                    case "details":
                      Tr("toggle", r);
                      break;
                    case "input":
                      ee(r, l), Tr("invalid", r);
                      break;
                    case "select":
                      (r._wrapperState = { wasMultiple: !!l.multiple }),
                        Tr("invalid", r);
                      break;
                    case "textarea":
                      se(r, l), Tr("invalid", r);
                  }
                  for (var u in (Ze(n, l), (e = null), l))
                    l.hasOwnProperty(u) &&
                      ((i = l[u]),
                      "children" === u
                        ? "string" === typeof i
                          ? r.textContent !== i && (e = ["children", i])
                          : "number" === typeof i &&
                            r.textContent !== "" + i &&
                            (e = ["children", "" + i])
                        : s.hasOwnProperty(u) &&
                          null != i &&
                          "onScroll" === u &&
                          Tr("scroll", r));
                  switch (n) {
                    case "input":
                      Q(r), re(r, l, !0);
                      break;
                    case "textarea":
                      Q(r), ce(r);
                      break;
                    case "select":
                    case "option":
                      break;
                    default:
                      "function" === typeof l.onClick && (r.onclick = Dr);
                  }
                  (r = e), (t.updateQueue = r), null !== r && (t.flags |= 4);
                } else {
                  switch (
                    ((u = 9 === i.nodeType ? i : i.ownerDocument),
                    e === de && (e = pe(n)),
                    e === de
                      ? "script" === n
                        ? (((e = u.createElement("div")).innerHTML =
                            "<script></script>"),
                          (e = e.removeChild(e.firstChild)))
                        : "string" === typeof r.is
                        ? (e = u.createElement(n, { is: r.is }))
                        : ((e = u.createElement(n)),
                          "select" === n &&
                            ((u = e),
                            r.multiple
                              ? (u.multiple = !0)
                              : r.size && (u.size = r.size)))
                      : (e = u.createElementNS(e, n)),
                    (e[Xr] = t),
                    (e[Jr] = r),
                    Ka(e, t),
                    (t.stateNode = e),
                    (u = Ee(n, r)),
                    n)
                  ) {
                    case "dialog":
                      Tr("cancel", e), Tr("close", e), (i = r);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      Tr("load", e), (i = r);
                      break;
                    case "video":
                    case "audio":
                      for (i = 0; i < Cr.length; i++) Tr(Cr[i], e);
                      i = r;
                      break;
                    case "source":
                      Tr("error", e), (i = r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Tr("error", e), Tr("load", e), (i = r);
                      break;
                    case "details":
                      Tr("toggle", e), (i = r);
                      break;
                    case "input":
                      ee(e, r), (i = J(e, r)), Tr("invalid", e);
                      break;
                    case "option":
                      i = ie(e, r);
                      break;
                    case "select":
                      (e._wrapperState = { wasMultiple: !!r.multiple }),
                        (i = o({}, r, { value: void 0 })),
                        Tr("invalid", e);
                      break;
                    case "textarea":
                      se(e, r), (i = le(e, r)), Tr("invalid", e);
                      break;
                    default:
                      i = r;
                  }
                  Ze(n, i);
                  var c = i;
                  for (l in c)
                    if (c.hasOwnProperty(l)) {
                      var d = c[l];
                      "style" === l
                        ? ke(e, d)
                        : "dangerouslySetInnerHTML" === l
                        ? null != (d = d ? d.__html : void 0) && ge(e, d)
                        : "children" === l
                        ? "string" === typeof d
                          ? ("textarea" !== n || "" !== d) && ye(e, d)
                          : "number" === typeof d && ye(e, "" + d)
                        : "suppressContentEditableWarning" !== l &&
                          "suppressHydrationWarning" !== l &&
                          "autoFocus" !== l &&
                          (s.hasOwnProperty(l)
                            ? null != d && "onScroll" === l && Tr("scroll", e)
                            : null != d && x(e, l, d, u));
                    }
                  switch (n) {
                    case "input":
                      Q(e), re(e, r, !1);
                      break;
                    case "textarea":
                      Q(e), ce(e);
                      break;
                    case "option":
                      null != r.value &&
                        e.setAttribute("value", "" + K(r.value));
                      break;
                    case "select":
                      (e.multiple = !!r.multiple),
                        null != (l = r.value)
                          ? ae(e, !!r.multiple, l, !1)
                          : null != r.defaultValue &&
                            ae(e, !!r.multiple, r.defaultValue, !0);
                      break;
                    default:
                      "function" === typeof i.onClick && (e.onclick = Dr);
                  }
                  Vr(n, r) && (t.flags |= 4);
                }
                null !== t.ref && (t.flags |= 128);
              }
              return null;
            case 6:
              if (e && null != t.stateNode) Qa(0, t, e.memoizedProps, r);
              else {
                if ("string" !== typeof r && null === t.stateNode)
                  throw Error(a(166));
                (n = zi(Oi.current)),
                  zi(Ti.current),
                  qi(t)
                    ? ((r = t.stateNode),
                      (n = t.memoizedProps),
                      (r[Xr] = t),
                      r.nodeValue !== n && (t.flags |= 4))
                    : (((r = (
                        9 === n.nodeType ? n : n.ownerDocument
                      ).createTextNode(r))[Xr] = t),
                      (t.stateNode = r));
              }
              return null;
            case 13:
              return (
                co(Fi),
                (r = t.memoizedState),
                0 !== (64 & t.flags)
                  ? ((t.lanes = n), t)
                  : ((r = null !== r),
                    (n = !1),
                    null === e
                      ? void 0 !== t.memoizedProps.fallback && qi(t)
                      : (n = null !== e.memoizedState),
                    r &&
                      !n &&
                      0 !== (2 & t.mode) &&
                      ((null === e &&
                        !0 !== t.memoizedProps.unstable_avoidThisFallback) ||
                      0 !== (1 & Fi.current)
                        ? 0 === Fl && (Fl = 3)
                        : ((0 !== Fl && 3 !== Fl) || (Fl = 4),
                          null === zl ||
                            (0 === (134217727 & Wl) &&
                              0 === (134217727 & Bl)) ||
                            ys(zl, Ll))),
                    (r || n) && (t.flags |= 4),
                    null)
              );
            case 4:
              return Li(), null === e && Or(t.stateNode.containerInfo), null;
            case 10:
              return oi(t), null;
            case 19:
              if ((co(Fi), null === (r = t.memoizedState))) return null;
              if (((l = 0 !== (64 & t.flags)), null === (u = r.rendering)))
                if (l) al(r, !1);
                else {
                  if (0 !== Fl || (null !== e && 0 !== (64 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (u = Ii(e))) {
                        for (
                          t.flags |= 64,
                            al(r, !1),
                            null !== (l = u.updateQueue) &&
                              ((t.updateQueue = l), (t.flags |= 4)),
                            null === r.lastEffect && (t.firstEffect = null),
                            t.lastEffect = r.lastEffect,
                            r = n,
                            n = t.child;
                          null !== n;

                        )
                          (e = r),
                            ((l = n).flags &= 2),
                            (l.nextEffect = null),
                            (l.firstEffect = null),
                            (l.lastEffect = null),
                            null === (u = l.alternate)
                              ? ((l.childLanes = 0),
                                (l.lanes = e),
                                (l.child = null),
                                (l.memoizedProps = null),
                                (l.memoizedState = null),
                                (l.updateQueue = null),
                                (l.dependencies = null),
                                (l.stateNode = null))
                              : ((l.childLanes = u.childLanes),
                                (l.lanes = u.lanes),
                                (l.child = u.child),
                                (l.memoizedProps = u.memoizedProps),
                                (l.memoizedState = u.memoizedState),
                                (l.updateQueue = u.updateQueue),
                                (l.type = u.type),
                                (e = u.dependencies),
                                (l.dependencies =
                                  null === e
                                    ? null
                                    : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext,
                                      })),
                            (n = n.sibling);
                        return fo(Fi, (1 & Fi.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== r.tail &&
                    Ho() > $l &&
                    ((t.flags |= 64),
                    (l = !0),
                    al(r, !1),
                    (t.lanes = 33554432));
                }
              else {
                if (!l)
                  if (null !== (e = Ii(u))) {
                    if (
                      ((t.flags |= 64),
                      (l = !0),
                      null !== (n = e.updateQueue) &&
                        ((t.updateQueue = n), (t.flags |= 4)),
                      al(r, !0),
                      null === r.tail &&
                        "hidden" === r.tailMode &&
                        !u.alternate &&
                        !Bi)
                    )
                      return (
                        null !== (t = t.lastEffect = r.lastEffect) &&
                          (t.nextEffect = null),
                        null
                      );
                  } else
                    2 * Ho() - r.renderingStartTime > $l &&
                      1073741824 !== n &&
                      ((t.flags |= 64),
                      (l = !0),
                      al(r, !1),
                      (t.lanes = 33554432));
                r.isBackwards
                  ? ((u.sibling = t.child), (t.child = u))
                  : (null !== (n = r.last) ? (n.sibling = u) : (t.child = u),
                    (r.last = u));
              }
              return null !== r.tail
                ? ((n = r.tail),
                  (r.rendering = n),
                  (r.tail = n.sibling),
                  (r.lastEffect = t.lastEffect),
                  (r.renderingStartTime = Ho()),
                  (n.sibling = null),
                  (t = Fi.current),
                  fo(Fi, l ? (1 & t) | 2 : 1 & t),
                  n)
                : null;
            case 23:
            case 24:
              return (
                Ss(),
                null !== e &&
                  (null !== e.memoizedState) !== (null !== t.memoizedState) &&
                  "unstable-defer-without-hiding" !== r.mode &&
                  (t.flags |= 4),
                null
              );
          }
          throw Error(a(156, t.tag));
        }
        function sl(e) {
          switch (e.tag) {
            case 1:
              yo(e.type) && bo();
              var t = e.flags;
              return 4096 & t ? ((e.flags = (-4097 & t) | 64), e) : null;
            case 3:
              if ((Li(), co(mo), co(ho), Qi(), 0 !== (64 & (t = e.flags))))
                throw Error(a(285));
              return (e.flags = (-4097 & t) | 64), e;
            case 5:
              return Ai(e), null;
            case 13:
              return (
                co(Fi),
                4096 & (t = e.flags) ? ((e.flags = (-4097 & t) | 64), e) : null
              );
            case 19:
              return co(Fi), null;
            case 4:
              return Li(), null;
            case 10:
              return oi(e), null;
            case 23:
            case 24:
              return Ss(), null;
            default:
              return null;
          }
        }
        function ul(e, t) {
          try {
            var n = "",
              r = t;
            do {
              (n += $(r)), (r = r.return);
            } while (r);
            var o = n;
          } catch (i) {
            o = "\nError generating stack: " + i.message + "\n" + i.stack;
          }
          return { value: e, source: t, stack: o };
        }
        function cl(e, t) {
          try {
            console.error(t.value);
          } catch (n) {
            setTimeout(function () {
              throw n;
            });
          }
        }
        (Ka = function (e, t) {
          for (var n = t.child; null !== n; ) {
            if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === t) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === t) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }),
          (Ga = function (e, t, n, r) {
            var i = e.memoizedProps;
            if (i !== r) {
              (e = t.stateNode), zi(Ti.current);
              var a,
                l = null;
              switch (n) {
                case "input":
                  (i = J(e, i)), (r = J(e, r)), (l = []);
                  break;
                case "option":
                  (i = ie(e, i)), (r = ie(e, r)), (l = []);
                  break;
                case "select":
                  (i = o({}, i, { value: void 0 })),
                    (r = o({}, r, { value: void 0 })),
                    (l = []);
                  break;
                case "textarea":
                  (i = le(e, i)), (r = le(e, r)), (l = []);
                  break;
                default:
                  "function" !== typeof i.onClick &&
                    "function" === typeof r.onClick &&
                    (e.onclick = Dr);
              }
              for (d in (Ze(n, r), (n = null), i))
                if (!r.hasOwnProperty(d) && i.hasOwnProperty(d) && null != i[d])
                  if ("style" === d) {
                    var u = i[d];
                    for (a in u)
                      u.hasOwnProperty(a) && (n || (n = {}), (n[a] = ""));
                  } else
                    "dangerouslySetInnerHTML" !== d &&
                      "children" !== d &&
                      "suppressContentEditableWarning" !== d &&
                      "suppressHydrationWarning" !== d &&
                      "autoFocus" !== d &&
                      (s.hasOwnProperty(d)
                        ? l || (l = [])
                        : (l = l || []).push(d, null));
              for (d in r) {
                var c = r[d];
                if (
                  ((u = null != i ? i[d] : void 0),
                  r.hasOwnProperty(d) && c !== u && (null != c || null != u))
                )
                  if ("style" === d)
                    if (u) {
                      for (a in u)
                        !u.hasOwnProperty(a) ||
                          (c && c.hasOwnProperty(a)) ||
                          (n || (n = {}), (n[a] = ""));
                      for (a in c)
                        c.hasOwnProperty(a) &&
                          u[a] !== c[a] &&
                          (n || (n = {}), (n[a] = c[a]));
                    } else n || (l || (l = []), l.push(d, n)), (n = c);
                  else
                    "dangerouslySetInnerHTML" === d
                      ? ((c = c ? c.__html : void 0),
                        (u = u ? u.__html : void 0),
                        null != c && u !== c && (l = l || []).push(d, c))
                      : "children" === d
                      ? ("string" !== typeof c && "number" !== typeof c) ||
                        (l = l || []).push(d, "" + c)
                      : "suppressContentEditableWarning" !== d &&
                        "suppressHydrationWarning" !== d &&
                        (s.hasOwnProperty(d)
                          ? (null != c && "onScroll" === d && Tr("scroll", e),
                            l || u === c || (l = []))
                          : "object" === typeof c &&
                            null !== c &&
                            c.$$typeof === L
                          ? c.toString()
                          : (l = l || []).push(d, c));
              }
              n && (l = l || []).push("style", n);
              var d = l;
              (t.updateQueue = d) && (t.flags |= 4);
            }
          }),
          (Qa = function (e, t, n, r) {
            n !== r && (t.flags |= 4);
          });
        var dl = "function" === typeof WeakMap ? WeakMap : Map;
        function fl(e, t, n) {
          ((n = di(-1, n)).tag = 3), (n.payload = { element: null });
          var r = t.value;
          return (
            (n.callback = function () {
              Ql || ((Ql = !0), (Yl = r)), cl(0, t);
            }),
            n
          );
        }
        function pl(e, t, n) {
          (n = di(-1, n)).tag = 3;
          var r = e.type.getDerivedStateFromError;
          if ("function" === typeof r) {
            var o = t.value;
            n.payload = function () {
              return cl(0, t), r(o);
            };
          }
          var i = e.stateNode;
          return (
            null !== i &&
              "function" === typeof i.componentDidCatch &&
              (n.callback = function () {
                "function" !== typeof r &&
                  (null === Xl ? (Xl = new Set([this])) : Xl.add(this),
                  cl(0, t));
                var e = t.stack;
                this.componentDidCatch(t.value, {
                  componentStack: null !== e ? e : "",
                });
              }),
            n
          );
        }
        var hl = "function" === typeof WeakSet ? WeakSet : Set;
        function ml(e) {
          var t = e.ref;
          if (null !== t)
            if ("function" === typeof t)
              try {
                t(null);
              } catch (n) {
                Ds(e, n);
              }
            else t.current = null;
        }
        function vl(e, t) {
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
            case 22:
            case 5:
            case 6:
            case 4:
            case 17:
              return;
            case 1:
              if (256 & t.flags && null !== e) {
                var n = e.memoizedProps,
                  r = e.memoizedState;
                (t = (e = t.stateNode).getSnapshotBeforeUpdate(
                  t.elementType === t.type ? n : Xo(t.type, n),
                  r
                )),
                  (e.__reactInternalSnapshotBeforeUpdate = t);
              }
              return;
            case 3:
              return void (256 & t.flags && qr(t.stateNode.containerInfo));
          }
          throw Error(a(163));
        }
        function gl(e, t, n) {
          switch (n.tag) {
            case 0:
            case 11:
            case 15:
            case 22:
              if (
                null !==
                (t = null !== (t = n.updateQueue) ? t.lastEffect : null)
              ) {
                e = t = t.next;
                do {
                  if (3 === (3 & e.tag)) {
                    var r = e.create;
                    e.destroy = r();
                  }
                  e = e.next;
                } while (e !== t);
              }
              if (
                null !==
                (t = null !== (t = n.updateQueue) ? t.lastEffect : null)
              ) {
                e = t = t.next;
                do {
                  var o = e;
                  (r = o.next),
                    0 !== (4 & (o = o.tag)) &&
                      0 !== (1 & o) &&
                      (As(n, e), _s(n, e)),
                    (e = r);
                } while (e !== t);
              }
              return;
            case 1:
              return (
                (e = n.stateNode),
                4 & n.flags &&
                  (null === t
                    ? e.componentDidMount()
                    : ((r =
                        n.elementType === n.type
                          ? t.memoizedProps
                          : Xo(n.type, t.memoizedProps)),
                      e.componentDidUpdate(
                        r,
                        t.memoizedState,
                        e.__reactInternalSnapshotBeforeUpdate
                      ))),
                void (null !== (t = n.updateQueue) && mi(n, t, e))
              );
            case 3:
              if (null !== (t = n.updateQueue)) {
                if (((e = null), null !== n.child))
                  switch (n.child.tag) {
                    case 5:
                    case 1:
                      e = n.child.stateNode;
                  }
                mi(n, t, e);
              }
              return;
            case 5:
              return (
                (e = n.stateNode),
                void (
                  null === t &&
                  4 & n.flags &&
                  Vr(n.type, n.memoizedProps) &&
                  e.focus()
                )
              );
            case 6:
            case 4:
            case 12:
            case 19:
            case 17:
            case 20:
            case 21:
            case 23:
            case 24:
              return;
            case 13:
              return void (
                null === n.memoizedState &&
                ((n = n.alternate),
                null !== n &&
                  ((n = n.memoizedState),
                  null !== n && ((n = n.dehydrated), null !== n && kt(n))))
              );
          }
          throw Error(a(163));
        }
        function yl(e, t) {
          for (var n = e; ; ) {
            if (5 === n.tag) {
              var r = n.stateNode;
              if (t)
                "function" === typeof (r = r.style).setProperty
                  ? r.setProperty("display", "none", "important")
                  : (r.display = "none");
              else {
                r = n.stateNode;
                var o = n.memoizedProps.style;
                (o =
                  void 0 !== o && null !== o && o.hasOwnProperty("display")
                    ? o.display
                    : null),
                  (r.style.display = we("display", o));
              }
            } else if (6 === n.tag)
              n.stateNode.nodeValue = t ? "" : n.memoizedProps;
            else if (
              ((23 !== n.tag && 24 !== n.tag) ||
                null === n.memoizedState ||
                n === e) &&
              null !== n.child
            ) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === e) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === e) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }
        function bl(e, t) {
          if (Eo && "function" === typeof Eo.onCommitFiberUnmount)
            try {
              Eo.onCommitFiberUnmount(Zo, t);
            } catch (i) {}
          switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
            case 22:
              if (null !== (e = t.updateQueue) && null !== (e = e.lastEffect)) {
                var n = (e = e.next);
                do {
                  var r = n,
                    o = r.destroy;
                  if (((r = r.tag), void 0 !== o))
                    if (0 !== (4 & r)) As(t, n);
                    else {
                      r = t;
                      try {
                        o();
                      } catch (i) {
                        Ds(r, i);
                      }
                    }
                  n = n.next;
                } while (n !== e);
              }
              break;
            case 1:
              if (
                (ml(t),
                "function" === typeof (e = t.stateNode).componentWillUnmount)
              )
                try {
                  (e.props = t.memoizedProps),
                    (e.state = t.memoizedState),
                    e.componentWillUnmount();
                } catch (i) {
                  Ds(t, i);
                }
              break;
            case 5:
              ml(t);
              break;
            case 4:
              El(e, t);
          }
        }
        function xl(e) {
          (e.alternate = null),
            (e.child = null),
            (e.dependencies = null),
            (e.firstEffect = null),
            (e.lastEffect = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.return = null),
            (e.updateQueue = null);
        }
        function wl(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function kl(e) {
          e: {
            for (var t = e.return; null !== t; ) {
              if (wl(t)) break e;
              t = t.return;
            }
            throw Error(a(160));
          }
          var n = t;
          switch (((t = n.stateNode), n.tag)) {
            case 5:
              var r = !1;
              break;
            case 3:
            case 4:
              (t = t.containerInfo), (r = !0);
              break;
            default:
              throw Error(a(161));
          }
          16 & n.flags && (ye(t, ""), (n.flags &= -17));
          e: t: for (n = e; ; ) {
            for (; null === n.sibling; ) {
              if (null === n.return || wl(n.return)) {
                n = null;
                break e;
              }
              n = n.return;
            }
            for (
              n.sibling.return = n.return, n = n.sibling;
              5 !== n.tag && 6 !== n.tag && 18 !== n.tag;

            ) {
              if (2 & n.flags) continue t;
              if (null === n.child || 4 === n.tag) continue t;
              (n.child.return = n), (n = n.child);
            }
            if (!(2 & n.flags)) {
              n = n.stateNode;
              break e;
            }
          }
          r ? Sl(e, n, t) : Zl(e, n, t);
        }
        function Sl(e, t, n) {
          var r = e.tag,
            o = 5 === r || 6 === r;
          if (o)
            (e = o ? e.stateNode : e.stateNode.instance),
              t
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(e, t)
                  : n.insertBefore(e, t)
                : (8 === n.nodeType
                    ? (t = n.parentNode).insertBefore(e, n)
                    : (t = n).appendChild(e),
                  (null !== (n = n._reactRootContainer) && void 0 !== n) ||
                    null !== t.onclick ||
                    (t.onclick = Dr));
          else if (4 !== r && null !== (e = e.child))
            for (Sl(e, t, n), e = e.sibling; null !== e; )
              Sl(e, t, n), (e = e.sibling);
        }
        function Zl(e, t, n) {
          var r = e.tag,
            o = 5 === r || 6 === r;
          if (o)
            (e = o ? e.stateNode : e.stateNode.instance),
              t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (4 !== r && null !== (e = e.child))
            for (Zl(e, t, n), e = e.sibling; null !== e; )
              Zl(e, t, n), (e = e.sibling);
        }
        function El(e, t) {
          for (var n, r, o = t, i = !1; ; ) {
            if (!i) {
              i = o.return;
              e: for (;;) {
                if (null === i) throw Error(a(160));
                switch (((n = i.stateNode), i.tag)) {
                  case 5:
                    r = !1;
                    break e;
                  case 3:
                  case 4:
                    (n = n.containerInfo), (r = !0);
                    break e;
                }
                i = i.return;
              }
              i = !0;
            }
            if (5 === o.tag || 6 === o.tag) {
              e: for (var l = e, s = o, u = s; ; )
                if ((bl(l, u), null !== u.child && 4 !== u.tag))
                  (u.child.return = u), (u = u.child);
                else {
                  if (u === s) break e;
                  for (; null === u.sibling; ) {
                    if (null === u.return || u.return === s) break e;
                    u = u.return;
                  }
                  (u.sibling.return = u.return), (u = u.sibling);
                }
              r
                ? ((l = n),
                  (s = o.stateNode),
                  8 === l.nodeType
                    ? l.parentNode.removeChild(s)
                    : l.removeChild(s))
                : n.removeChild(o.stateNode);
            } else if (4 === o.tag) {
              if (null !== o.child) {
                (n = o.stateNode.containerInfo),
                  (r = !0),
                  (o.child.return = o),
                  (o = o.child);
                continue;
              }
            } else if ((bl(e, o), null !== o.child)) {
              (o.child.return = o), (o = o.child);
              continue;
            }
            if (o === t) break;
            for (; null === o.sibling; ) {
              if (null === o.return || o.return === t) return;
              4 === (o = o.return).tag && (i = !1);
            }
            (o.sibling.return = o.return), (o = o.sibling);
          }
        }
        function Cl(e, t) {
          switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
            case 22:
              var n = t.updateQueue;
              if (null !== (n = null !== n ? n.lastEffect : null)) {
                var r = (n = n.next);
                do {
                  3 === (3 & r.tag) &&
                    ((e = r.destroy),
                    (r.destroy = void 0),
                    void 0 !== e && e()),
                    (r = r.next);
                } while (r !== n);
              }
              return;
            case 1:
            case 12:
            case 17:
              return;
            case 5:
              if (null != (n = t.stateNode)) {
                r = t.memoizedProps;
                var o = null !== e ? e.memoizedProps : r;
                e = t.type;
                var i = t.updateQueue;
                if (((t.updateQueue = null), null !== i)) {
                  for (
                    n[Jr] = r,
                      "input" === e &&
                        "radio" === r.type &&
                        null != r.name &&
                        te(n, r),
                      Ee(e, o),
                      t = Ee(e, r),
                      o = 0;
                    o < i.length;
                    o += 2
                  ) {
                    var l = i[o],
                      s = i[o + 1];
                    "style" === l
                      ? ke(n, s)
                      : "dangerouslySetInnerHTML" === l
                      ? ge(n, s)
                      : "children" === l
                      ? ye(n, s)
                      : x(n, l, s, t);
                  }
                  switch (e) {
                    case "input":
                      ne(n, r);
                      break;
                    case "textarea":
                      ue(n, r);
                      break;
                    case "select":
                      (e = n._wrapperState.wasMultiple),
                        (n._wrapperState.wasMultiple = !!r.multiple),
                        null != (i = r.value)
                          ? ae(n, !!r.multiple, i, !1)
                          : e !== !!r.multiple &&
                            (null != r.defaultValue
                              ? ae(n, !!r.multiple, r.defaultValue, !0)
                              : ae(n, !!r.multiple, r.multiple ? [] : "", !1));
                  }
                }
              }
              return;
            case 6:
              if (null === t.stateNode) throw Error(a(162));
              return void (t.stateNode.nodeValue = t.memoizedProps);
            case 3:
              return void (
                (n = t.stateNode).hydrate &&
                ((n.hydrate = !1), kt(n.containerInfo))
              );
            case 13:
              return (
                null !== t.memoizedState && ((Ul = Ho()), yl(t.child, !0)),
                void Pl(t)
              );
            case 19:
              return void Pl(t);
            case 23:
            case 24:
              return void yl(t, null !== t.memoizedState);
          }
          throw Error(a(163));
        }
        function Pl(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new hl()),
              t.forEach(function (t) {
                var r = Bs.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
              });
          }
        }
        function Ml(e, t) {
          return (
            null !== e &&
            (null === (e = e.memoizedState) || null !== e.dehydrated) &&
            null !== (t = t.memoizedState) &&
            null === t.dehydrated
          );
        }
        var Rl = Math.ceil,
          Tl = w.ReactCurrentDispatcher,
          jl = w.ReactCurrentOwner,
          Ol = 0,
          zl = null,
          Nl = null,
          Ll = 0,
          _l = 0,
          Al = uo(0),
          Fl = 0,
          Il = null,
          Dl = 0,
          Wl = 0,
          Bl = 0,
          Vl = 0,
          Hl = null,
          Ul = 0,
          $l = 1 / 0;
        function ql() {
          $l = Ho() + 500;
        }
        var Kl,
          Gl = null,
          Ql = !1,
          Yl = null,
          Xl = null,
          Jl = !1,
          es = null,
          ts = 90,
          ns = [],
          rs = [],
          os = null,
          is = 0,
          as = null,
          ls = -1,
          ss = 0,
          us = 0,
          cs = null,
          ds = !1;
        function fs() {
          return 0 !== (48 & Ol) ? Ho() : -1 !== ls ? ls : (ls = Ho());
        }
        function ps(e) {
          if (0 === (2 & (e = e.mode))) return 1;
          if (0 === (4 & e)) return 99 === Uo() ? 1 : 2;
          if ((0 === ss && (ss = Dl), 0 !== Yo.transition)) {
            0 !== us && (us = null !== Hl ? Hl.pendingLanes : 0), (e = ss);
            var t = 4186112 & ~us;
            return (
              0 === (t &= -t) &&
                0 === (t = (e = 4186112 & ~e) & -e) &&
                (t = 8192),
              t
            );
          }
          return (
            (e = Uo()),
            0 !== (4 & Ol) && 98 === e
              ? (e = Dt(12, ss))
              : (e = Dt(
                  (e = (function (e) {
                    switch (e) {
                      case 99:
                        return 15;
                      case 98:
                        return 10;
                      case 97:
                      case 96:
                        return 8;
                      case 95:
                        return 2;
                      default:
                        return 0;
                    }
                  })(e)),
                  ss
                )),
            e
          );
        }
        function hs(e, t, n) {
          if (50 < is) throw ((is = 0), (as = null), Error(a(185)));
          if (null === (e = ms(e, t))) return null;
          Vt(e, t, n), e === zl && ((Bl |= t), 4 === Fl && ys(e, Ll));
          var r = Uo();
          1 === t
            ? 0 !== (8 & Ol) && 0 === (48 & Ol)
              ? bs(e)
              : (vs(e, n), 0 === Ol && (ql(), Go()))
            : (0 === (4 & Ol) ||
                (98 !== r && 99 !== r) ||
                (null === os ? (os = new Set([e])) : os.add(e)),
              vs(e, n)),
            (Hl = e);
        }
        function ms(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
            (e.childLanes |= t),
              null !== (n = e.alternate) && (n.childLanes |= t),
              (n = e),
              (e = e.return);
          return 3 === n.tag ? n.stateNode : null;
        }
        function vs(e, t) {
          for (
            var n = e.callbackNode,
              r = e.suspendedLanes,
              o = e.pingedLanes,
              i = e.expirationTimes,
              l = e.pendingLanes;
            0 < l;

          ) {
            var s = 31 - Ht(l),
              u = 1 << s,
              c = i[s];
            if (-1 === c) {
              if (0 === (u & r) || 0 !== (u & o)) {
                (c = t), At(u);
                var d = _t;
                i[s] = 10 <= d ? c + 250 : 6 <= d ? c + 5e3 : -1;
              }
            } else c <= t && (e.expiredLanes |= u);
            l &= ~u;
          }
          if (((r = Ft(e, e === zl ? Ll : 0)), (t = _t), 0 === r))
            null !== n &&
              (n !== Fo && Mo(n),
              (e.callbackNode = null),
              (e.callbackPriority = 0));
          else {
            if (null !== n) {
              if (e.callbackPriority === t) return;
              n !== Fo && Mo(n);
            }
            15 === t
              ? ((n = bs.bind(null, e)),
                null === Do ? ((Do = [n]), (Wo = Po(zo, Qo))) : Do.push(n),
                (n = Fo))
              : 14 === t
              ? (n = Ko(99, bs.bind(null, e)))
              : ((n = (function (e) {
                  switch (e) {
                    case 15:
                    case 14:
                      return 99;
                    case 13:
                    case 12:
                    case 11:
                    case 10:
                      return 98;
                    case 9:
                    case 8:
                    case 7:
                    case 6:
                    case 4:
                    case 5:
                      return 97;
                    case 3:
                    case 2:
                    case 1:
                      return 95;
                    case 0:
                      return 90;
                    default:
                      throw Error(a(358, e));
                  }
                })(t)),
                (n = Ko(n, gs.bind(null, e)))),
              (e.callbackPriority = t),
              (e.callbackNode = n);
          }
        }
        function gs(e) {
          if (((ls = -1), (us = ss = 0), 0 !== (48 & Ol))) throw Error(a(327));
          var t = e.callbackNode;
          if (Ls() && e.callbackNode !== t) return null;
          var n = Ft(e, e === zl ? Ll : 0);
          if (0 === n) return null;
          var r = n,
            o = Ol;
          Ol |= 16;
          var i = Cs();
          for ((zl === e && Ll === r) || (ql(), Zs(e, r)); ; )
            try {
              Rs();
              break;
            } catch (s) {
              Es(e, s);
            }
          if (
            (ri(),
            (Tl.current = i),
            (Ol = o),
            null !== Nl ? (r = 0) : ((zl = null), (Ll = 0), (r = Fl)),
            0 !== (Dl & Bl))
          )
            Zs(e, 0);
          else if (0 !== r) {
            if (
              (2 === r &&
                ((Ol |= 64),
                e.hydrate && ((e.hydrate = !1), qr(e.containerInfo)),
                0 !== (n = It(e)) && (r = Ps(e, n))),
              1 === r)
            )
              throw ((t = Il), Zs(e, 0), ys(e, n), vs(e, Ho()), t);
            switch (
              ((e.finishedWork = e.current.alternate), (e.finishedLanes = n), r)
            ) {
              case 0:
              case 1:
                throw Error(a(345));
              case 2:
              case 5:
                Os(e);
                break;
              case 3:
                if (
                  (ys(e, n), (62914560 & n) === n && 10 < (r = Ul + 500 - Ho()))
                ) {
                  if (0 !== Ft(e, 0)) break;
                  if (((o = e.suspendedLanes) & n) !== n) {
                    fs(), (e.pingedLanes |= e.suspendedLanes & o);
                    break;
                  }
                  e.timeoutHandle = Ur(Os.bind(null, e), r);
                  break;
                }
                Os(e);
                break;
              case 4:
                if ((ys(e, n), (4186112 & n) === n)) break;
                for (r = e.eventTimes, o = -1; 0 < n; ) {
                  var l = 31 - Ht(n);
                  (i = 1 << l), (l = r[l]) > o && (o = l), (n &= ~i);
                }
                if (
                  ((n = o),
                  10 <
                    (n =
                      (120 > (n = Ho() - n)
                        ? 120
                        : 480 > n
                        ? 480
                        : 1080 > n
                        ? 1080
                        : 1920 > n
                        ? 1920
                        : 3e3 > n
                        ? 3e3
                        : 4320 > n
                        ? 4320
                        : 1960 * Rl(n / 1960)) - n))
                ) {
                  e.timeoutHandle = Ur(Os.bind(null, e), n);
                  break;
                }
                Os(e);
                break;
              default:
                throw Error(a(329));
            }
          }
          return vs(e, Ho()), e.callbackNode === t ? gs.bind(null, e) : null;
        }
        function ys(e, t) {
          for (
            t &= ~Vl,
              t &= ~Bl,
              e.suspendedLanes |= t,
              e.pingedLanes &= ~t,
              e = e.expirationTimes;
            0 < t;

          ) {
            var n = 31 - Ht(t),
              r = 1 << n;
            (e[n] = -1), (t &= ~r);
          }
        }
        function bs(e) {
          if (0 !== (48 & Ol)) throw Error(a(327));
          if ((Ls(), e === zl && 0 !== (e.expiredLanes & Ll))) {
            var t = Ll,
              n = Ps(e, t);
            0 !== (Dl & Bl) && (n = Ps(e, (t = Ft(e, t))));
          } else n = Ps(e, (t = Ft(e, 0)));
          if (
            (0 !== e.tag &&
              2 === n &&
              ((Ol |= 64),
              e.hydrate && ((e.hydrate = !1), qr(e.containerInfo)),
              0 !== (t = It(e)) && (n = Ps(e, t))),
            1 === n)
          )
            throw ((n = Il), Zs(e, 0), ys(e, t), vs(e, Ho()), n);
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            Os(e),
            vs(e, Ho()),
            null
          );
        }
        function xs(e, t) {
          var n = Ol;
          Ol |= 1;
          try {
            return e(t);
          } finally {
            0 === (Ol = n) && (ql(), Go());
          }
        }
        function ws(e, t) {
          var n = Ol;
          (Ol &= -2), (Ol |= 8);
          try {
            return e(t);
          } finally {
            0 === (Ol = n) && (ql(), Go());
          }
        }
        function ks(e, t) {
          fo(Al, _l), (_l |= t), (Dl |= t);
        }
        function Ss() {
          (_l = Al.current), co(Al);
        }
        function Zs(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var n = e.timeoutHandle;
          if ((-1 !== n && ((e.timeoutHandle = -1), $r(n)), null !== Nl))
            for (n = Nl.return; null !== n; ) {
              var r = n;
              switch (r.tag) {
                case 1:
                  null !== (r = r.type.childContextTypes) &&
                    void 0 !== r &&
                    bo();
                  break;
                case 3:
                  Li(), co(mo), co(ho), Qi();
                  break;
                case 5:
                  Ai(r);
                  break;
                case 4:
                  Li();
                  break;
                case 13:
                case 19:
                  co(Fi);
                  break;
                case 10:
                  oi(r);
                  break;
                case 23:
                case 24:
                  Ss();
              }
              n = n.return;
            }
          (zl = e),
            (Nl = $s(e.current, null)),
            (Ll = _l = Dl = t),
            (Fl = 0),
            (Il = null),
            (Vl = Bl = Wl = 0);
        }
        function Es(e, t) {
          for (;;) {
            var n = Nl;
            try {
              if ((ri(), (Yi.current = Oa), ra)) {
                for (var r = ea.memoizedState; null !== r; ) {
                  var o = r.queue;
                  null !== o && (o.pending = null), (r = r.next);
                }
                ra = !1;
              }
              if (
                ((Ji = 0),
                (na = ta = ea = null),
                (oa = !1),
                (jl.current = null),
                null === n || null === n.return)
              ) {
                (Fl = 1), (Il = t), (Nl = null);
                break;
              }
              e: {
                var i = e,
                  a = n.return,
                  l = n,
                  s = t;
                if (
                  ((t = Ll),
                  (l.flags |= 2048),
                  (l.firstEffect = l.lastEffect = null),
                  null !== s &&
                    "object" === typeof s &&
                    "function" === typeof s.then)
                ) {
                  var u = s;
                  if (0 === (2 & l.mode)) {
                    var c = l.alternate;
                    c
                      ? ((l.updateQueue = c.updateQueue),
                        (l.memoizedState = c.memoizedState),
                        (l.lanes = c.lanes))
                      : ((l.updateQueue = null), (l.memoizedState = null));
                  }
                  var d = 0 !== (1 & Fi.current),
                    f = a;
                  do {
                    var p;
                    if ((p = 13 === f.tag)) {
                      var h = f.memoizedState;
                      if (null !== h) p = null !== h.dehydrated;
                      else {
                        var m = f.memoizedProps;
                        p =
                          void 0 !== m.fallback &&
                          (!0 !== m.unstable_avoidThisFallback || !d);
                      }
                    }
                    if (p) {
                      var v = f.updateQueue;
                      if (null === v) {
                        var g = new Set();
                        g.add(u), (f.updateQueue = g);
                      } else v.add(u);
                      if (0 === (2 & f.mode)) {
                        if (
                          ((f.flags |= 64),
                          (l.flags |= 16384),
                          (l.flags &= -2981),
                          1 === l.tag)
                        )
                          if (null === l.alternate) l.tag = 17;
                          else {
                            var y = di(-1, 1);
                            (y.tag = 2), fi(l, y);
                          }
                        l.lanes |= 1;
                        break e;
                      }
                      (s = void 0), (l = t);
                      var b = i.pingCache;
                      if (
                        (null === b
                          ? ((b = i.pingCache = new dl()),
                            (s = new Set()),
                            b.set(u, s))
                          : void 0 === (s = b.get(u)) &&
                            ((s = new Set()), b.set(u, s)),
                        !s.has(l))
                      ) {
                        s.add(l);
                        var x = Ws.bind(null, i, u, l);
                        u.then(x, x);
                      }
                      (f.flags |= 4096), (f.lanes = t);
                      break e;
                    }
                    f = f.return;
                  } while (null !== f);
                  s = Error(
                    (q(l.type) || "A React component") +
                      " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display."
                  );
                }
                5 !== Fl && (Fl = 2), (s = ul(s, l)), (f = a);
                do {
                  switch (f.tag) {
                    case 3:
                      (i = s),
                        (f.flags |= 4096),
                        (t &= -t),
                        (f.lanes |= t),
                        pi(f, fl(0, i, t));
                      break e;
                    case 1:
                      i = s;
                      var w = f.type,
                        k = f.stateNode;
                      if (
                        0 === (64 & f.flags) &&
                        ("function" === typeof w.getDerivedStateFromError ||
                          (null !== k &&
                            "function" === typeof k.componentDidCatch &&
                            (null === Xl || !Xl.has(k))))
                      ) {
                        (f.flags |= 4096),
                          (t &= -t),
                          (f.lanes |= t),
                          pi(f, pl(f, i, t));
                        break e;
                      }
                  }
                  f = f.return;
                } while (null !== f);
              }
              js(n);
            } catch (S) {
              (t = S), Nl === n && null !== n && (Nl = n = n.return);
              continue;
            }
            break;
          }
        }
        function Cs() {
          var e = Tl.current;
          return (Tl.current = Oa), null === e ? Oa : e;
        }
        function Ps(e, t) {
          var n = Ol;
          Ol |= 16;
          var r = Cs();
          for ((zl === e && Ll === t) || Zs(e, t); ; )
            try {
              Ms();
              break;
            } catch (o) {
              Es(e, o);
            }
          if ((ri(), (Ol = n), (Tl.current = r), null !== Nl))
            throw Error(a(261));
          return (zl = null), (Ll = 0), Fl;
        }
        function Ms() {
          for (; null !== Nl; ) Ts(Nl);
        }
        function Rs() {
          for (; null !== Nl && !Ro(); ) Ts(Nl);
        }
        function Ts(e) {
          var t = Kl(e.alternate, e, _l);
          (e.memoizedProps = e.pendingProps),
            null === t ? js(e) : (Nl = t),
            (jl.current = null);
        }
        function js(e) {
          var t = e;
          do {
            var n = t.alternate;
            if (((e = t.return), 0 === (2048 & t.flags))) {
              if (null !== (n = ll(n, t, _l))) return void (Nl = n);
              if (
                (24 !== (n = t).tag && 23 !== n.tag) ||
                null === n.memoizedState ||
                0 !== (1073741824 & _l) ||
                0 === (4 & n.mode)
              ) {
                for (var r = 0, o = n.child; null !== o; )
                  (r |= o.lanes | o.childLanes), (o = o.sibling);
                n.childLanes = r;
              }
              null !== e &&
                0 === (2048 & e.flags) &&
                (null === e.firstEffect && (e.firstEffect = t.firstEffect),
                null !== t.lastEffect &&
                  (null !== e.lastEffect &&
                    (e.lastEffect.nextEffect = t.firstEffect),
                  (e.lastEffect = t.lastEffect)),
                1 < t.flags &&
                  (null !== e.lastEffect
                    ? (e.lastEffect.nextEffect = t)
                    : (e.firstEffect = t),
                  (e.lastEffect = t)));
            } else {
              if (null !== (n = sl(t))) return (n.flags &= 2047), void (Nl = n);
              null !== e &&
                ((e.firstEffect = e.lastEffect = null), (e.flags |= 2048));
            }
            if (null !== (t = t.sibling)) return void (Nl = t);
            Nl = t = e;
          } while (null !== t);
          0 === Fl && (Fl = 5);
        }
        function Os(e) {
          var t = Uo();
          return qo(99, zs.bind(null, e, t)), null;
        }
        function zs(e, t) {
          do {
            Ls();
          } while (null !== es);
          if (0 !== (48 & Ol)) throw Error(a(327));
          var n = e.finishedWork;
          if (null === n) return null;
          if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
            throw Error(a(177));
          e.callbackNode = null;
          var r = n.lanes | n.childLanes,
            o = r,
            i = e.pendingLanes & ~o;
          (e.pendingLanes = o),
            (e.suspendedLanes = 0),
            (e.pingedLanes = 0),
            (e.expiredLanes &= o),
            (e.mutableReadLanes &= o),
            (e.entangledLanes &= o),
            (o = e.entanglements);
          for (var l = e.eventTimes, s = e.expirationTimes; 0 < i; ) {
            var u = 31 - Ht(i),
              c = 1 << u;
            (o[u] = 0), (l[u] = -1), (s[u] = -1), (i &= ~c);
          }
          if (
            (null !== os && 0 === (24 & r) && os.has(e) && os.delete(e),
            e === zl && ((Nl = zl = null), (Ll = 0)),
            1 < n.flags
              ? null !== n.lastEffect
                ? ((n.lastEffect.nextEffect = n), (r = n.firstEffect))
                : (r = n)
              : (r = n.firstEffect),
            null !== r)
          ) {
            if (
              ((o = Ol),
              (Ol |= 32),
              (jl.current = null),
              (Wr = Gt),
              gr((l = vr())))
            ) {
              if ("selectionStart" in l)
                s = { start: l.selectionStart, end: l.selectionEnd };
              else
                e: if (
                  ((s = ((s = l.ownerDocument) && s.defaultView) || window),
                  (c = s.getSelection && s.getSelection()) &&
                    0 !== c.rangeCount)
                ) {
                  (s = c.anchorNode),
                    (i = c.anchorOffset),
                    (u = c.focusNode),
                    (c = c.focusOffset);
                  try {
                    s.nodeType, u.nodeType;
                  } catch (C) {
                    s = null;
                    break e;
                  }
                  var d = 0,
                    f = -1,
                    p = -1,
                    h = 0,
                    m = 0,
                    v = l,
                    g = null;
                  t: for (;;) {
                    for (
                      var y;
                      v !== s || (0 !== i && 3 !== v.nodeType) || (f = d + i),
                        v !== u || (0 !== c && 3 !== v.nodeType) || (p = d + c),
                        3 === v.nodeType && (d += v.nodeValue.length),
                        null !== (y = v.firstChild);

                    )
                      (g = v), (v = y);
                    for (;;) {
                      if (v === l) break t;
                      if (
                        (g === s && ++h === i && (f = d),
                        g === u && ++m === c && (p = d),
                        null !== (y = v.nextSibling))
                      )
                        break;
                      g = (v = g).parentNode;
                    }
                    v = y;
                  }
                  s = -1 === f || -1 === p ? null : { start: f, end: p };
                } else s = null;
              s = s || { start: 0, end: 0 };
            } else s = null;
            (Br = { focusedElem: l, selectionRange: s }),
              (Gt = !1),
              (cs = null),
              (ds = !1),
              (Gl = r);
            do {
              try {
                Ns();
              } catch (C) {
                if (null === Gl) throw Error(a(330));
                Ds(Gl, C), (Gl = Gl.nextEffect);
              }
            } while (null !== Gl);
            (cs = null), (Gl = r);
            do {
              try {
                for (l = e; null !== Gl; ) {
                  var b = Gl.flags;
                  if ((16 & b && ye(Gl.stateNode, ""), 128 & b)) {
                    var x = Gl.alternate;
                    if (null !== x) {
                      var w = x.ref;
                      null !== w &&
                        ("function" === typeof w
                          ? w(null)
                          : (w.current = null));
                    }
                  }
                  switch (1038 & b) {
                    case 2:
                      kl(Gl), (Gl.flags &= -3);
                      break;
                    case 6:
                      kl(Gl), (Gl.flags &= -3), Cl(Gl.alternate, Gl);
                      break;
                    case 1024:
                      Gl.flags &= -1025;
                      break;
                    case 1028:
                      (Gl.flags &= -1025), Cl(Gl.alternate, Gl);
                      break;
                    case 4:
                      Cl(Gl.alternate, Gl);
                      break;
                    case 8:
                      El(l, (s = Gl));
                      var k = s.alternate;
                      xl(s), null !== k && xl(k);
                  }
                  Gl = Gl.nextEffect;
                }
              } catch (C) {
                if (null === Gl) throw Error(a(330));
                Ds(Gl, C), (Gl = Gl.nextEffect);
              }
            } while (null !== Gl);
            if (
              ((w = Br),
              (x = vr()),
              (b = w.focusedElem),
              (l = w.selectionRange),
              x !== b &&
                b &&
                b.ownerDocument &&
                mr(b.ownerDocument.documentElement, b))
            ) {
              null !== l &&
                gr(b) &&
                ((x = l.start),
                void 0 === (w = l.end) && (w = x),
                "selectionStart" in b
                  ? ((b.selectionStart = x),
                    (b.selectionEnd = Math.min(w, b.value.length)))
                  : (w =
                      ((x = b.ownerDocument || document) && x.defaultView) ||
                      window).getSelection &&
                    ((w = w.getSelection()),
                    (s = b.textContent.length),
                    (k = Math.min(l.start, s)),
                    (l = void 0 === l.end ? k : Math.min(l.end, s)),
                    !w.extend && k > l && ((s = l), (l = k), (k = s)),
                    (s = hr(b, k)),
                    (i = hr(b, l)),
                    s &&
                      i &&
                      (1 !== w.rangeCount ||
                        w.anchorNode !== s.node ||
                        w.anchorOffset !== s.offset ||
                        w.focusNode !== i.node ||
                        w.focusOffset !== i.offset) &&
                      ((x = x.createRange()).setStart(s.node, s.offset),
                      w.removeAllRanges(),
                      k > l
                        ? (w.addRange(x), w.extend(i.node, i.offset))
                        : (x.setEnd(i.node, i.offset), w.addRange(x))))),
                (x = []);
              for (w = b; (w = w.parentNode); )
                1 === w.nodeType &&
                  x.push({ element: w, left: w.scrollLeft, top: w.scrollTop });
              for (
                "function" === typeof b.focus && b.focus(), b = 0;
                b < x.length;
                b++
              )
                ((w = x[b]).element.scrollLeft = w.left),
                  (w.element.scrollTop = w.top);
            }
            (Gt = !!Wr), (Br = Wr = null), (e.current = n), (Gl = r);
            do {
              try {
                for (b = e; null !== Gl; ) {
                  var S = Gl.flags;
                  if ((36 & S && gl(b, Gl.alternate, Gl), 128 & S)) {
                    x = void 0;
                    var Z = Gl.ref;
                    if (null !== Z) {
                      var E = Gl.stateNode;
                      Gl.tag,
                        (x = E),
                        "function" === typeof Z ? Z(x) : (Z.current = x);
                    }
                  }
                  Gl = Gl.nextEffect;
                }
              } catch (C) {
                if (null === Gl) throw Error(a(330));
                Ds(Gl, C), (Gl = Gl.nextEffect);
              }
            } while (null !== Gl);
            (Gl = null), Io(), (Ol = o);
          } else e.current = n;
          if (Jl) (Jl = !1), (es = e), (ts = t);
          else
            for (Gl = r; null !== Gl; )
              (t = Gl.nextEffect),
                (Gl.nextEffect = null),
                8 & Gl.flags &&
                  (((S = Gl).sibling = null), (S.stateNode = null)),
                (Gl = t);
          if (
            (0 === (r = e.pendingLanes) && (Xl = null),
            1 === r ? (e === as ? is++ : ((is = 0), (as = e))) : (is = 0),
            (n = n.stateNode),
            Eo && "function" === typeof Eo.onCommitFiberRoot)
          )
            try {
              Eo.onCommitFiberRoot(
                Zo,
                n,
                void 0,
                64 === (64 & n.current.flags)
              );
            } catch (C) {}
          if ((vs(e, Ho()), Ql)) throw ((Ql = !1), (e = Yl), (Yl = null), e);
          return 0 !== (8 & Ol) || Go(), null;
        }
        function Ns() {
          for (; null !== Gl; ) {
            var e = Gl.alternate;
            ds ||
              null === cs ||
              (0 !== (8 & Gl.flags)
                ? et(Gl, cs) && (ds = !0)
                : 13 === Gl.tag && Ml(e, Gl) && et(Gl, cs) && (ds = !0));
            var t = Gl.flags;
            0 !== (256 & t) && vl(e, Gl),
              0 === (512 & t) ||
                Jl ||
                ((Jl = !0),
                Ko(97, function () {
                  return Ls(), null;
                })),
              (Gl = Gl.nextEffect);
          }
        }
        function Ls() {
          if (90 !== ts) {
            var e = 97 < ts ? 97 : ts;
            return (ts = 90), qo(e, Fs);
          }
          return !1;
        }
        function _s(e, t) {
          ns.push(t, e),
            Jl ||
              ((Jl = !0),
              Ko(97, function () {
                return Ls(), null;
              }));
        }
        function As(e, t) {
          rs.push(t, e),
            Jl ||
              ((Jl = !0),
              Ko(97, function () {
                return Ls(), null;
              }));
        }
        function Fs() {
          if (null === es) return !1;
          var e = es;
          if (((es = null), 0 !== (48 & Ol))) throw Error(a(331));
          var t = Ol;
          Ol |= 32;
          var n = rs;
          rs = [];
          for (var r = 0; r < n.length; r += 2) {
            var o = n[r],
              i = n[r + 1],
              l = o.destroy;
            if (((o.destroy = void 0), "function" === typeof l))
              try {
                l();
              } catch (u) {
                if (null === i) throw Error(a(330));
                Ds(i, u);
              }
          }
          for (n = ns, ns = [], r = 0; r < n.length; r += 2) {
            (o = n[r]), (i = n[r + 1]);
            try {
              var s = o.create;
              o.destroy = s();
            } catch (u) {
              if (null === i) throw Error(a(330));
              Ds(i, u);
            }
          }
          for (s = e.current.firstEffect; null !== s; )
            (e = s.nextEffect),
              (s.nextEffect = null),
              8 & s.flags && ((s.sibling = null), (s.stateNode = null)),
              (s = e);
          return (Ol = t), Go(), !0;
        }
        function Is(e, t, n) {
          fi(e, (t = fl(0, (t = ul(n, t)), 1))),
            (t = fs()),
            null !== (e = ms(e, 1)) && (Vt(e, 1, t), vs(e, t));
        }
        function Ds(e, t) {
          if (3 === e.tag) Is(e, e, t);
          else
            for (var n = e.return; null !== n; ) {
              if (3 === n.tag) {
                Is(n, e, t);
                break;
              }
              if (1 === n.tag) {
                var r = n.stateNode;
                if (
                  "function" === typeof n.type.getDerivedStateFromError ||
                  ("function" === typeof r.componentDidCatch &&
                    (null === Xl || !Xl.has(r)))
                ) {
                  var o = pl(n, (e = ul(t, e)), 1);
                  if ((fi(n, o), (o = fs()), null !== (n = ms(n, 1))))
                    Vt(n, 1, o), vs(n, o);
                  else if (
                    "function" === typeof r.componentDidCatch &&
                    (null === Xl || !Xl.has(r))
                  )
                    try {
                      r.componentDidCatch(t, e);
                    } catch (i) {}
                  break;
                }
              }
              n = n.return;
            }
        }
        function Ws(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t),
            (t = fs()),
            (e.pingedLanes |= e.suspendedLanes & n),
            zl === e &&
              (Ll & n) === n &&
              (4 === Fl ||
              (3 === Fl && (62914560 & Ll) === Ll && 500 > Ho() - Ul)
                ? Zs(e, 0)
                : (Vl |= n)),
            vs(e, t);
        }
        function Bs(e, t) {
          var n = e.stateNode;
          null !== n && n.delete(t),
            0 === (t = 0) &&
              (0 === (2 & (t = e.mode))
                ? (t = 1)
                : 0 === (4 & t)
                ? (t = 99 === Uo() ? 1 : 2)
                : (0 === ss && (ss = Dl),
                  0 === (t = Wt(62914560 & ~ss)) && (t = 4194304))),
            (n = fs()),
            null !== (e = ms(e, t)) && (Vt(e, t, n), vs(e, n));
        }
        function Vs(e, t, n, r) {
          (this.tag = e),
            (this.key = n),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = t),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = r),
            (this.flags = 0),
            (this.lastEffect = this.firstEffect = this.nextEffect = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function Hs(e, t, n, r) {
          return new Vs(e, t, n, r);
        }
        function Us(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function $s(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = Hs(e.tag, t, e.key, e.mode)).elementType =
                  e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.nextEffect = null),
                (n.firstEffect = null),
                (n.lastEffect = null)),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies =
              null === t
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            n
          );
        }
        function qs(e, t, n, r, o, i) {
          var l = 2;
          if (((r = e), "function" === typeof e)) Us(e) && (l = 1);
          else if ("string" === typeof e) l = 5;
          else
            e: switch (e) {
              case Z:
                return Ks(n.children, o, i, t);
              case _:
                (l = 8), (o |= 16);
                break;
              case E:
                (l = 8), (o |= 1);
                break;
              case C:
                return (
                  ((e = Hs(12, n, t, 8 | o)).elementType = C),
                  (e.type = C),
                  (e.lanes = i),
                  e
                );
              case T:
                return (
                  ((e = Hs(13, n, t, o)).type = T),
                  (e.elementType = T),
                  (e.lanes = i),
                  e
                );
              case j:
                return (
                  ((e = Hs(19, n, t, o)).elementType = j), (e.lanes = i), e
                );
              case A:
                return Gs(n, o, i, t);
              case F:
                return (
                  ((e = Hs(24, n, t, o)).elementType = F), (e.lanes = i), e
                );
              default:
                if ("object" === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case P:
                      l = 10;
                      break e;
                    case M:
                      l = 9;
                      break e;
                    case R:
                      l = 11;
                      break e;
                    case O:
                      l = 14;
                      break e;
                    case z:
                      (l = 16), (r = null);
                      break e;
                    case N:
                      l = 22;
                      break e;
                  }
                throw Error(a(130, null == e ? e : typeof e, ""));
            }
          return (
            ((t = Hs(l, n, t, o)).elementType = e),
            (t.type = r),
            (t.lanes = i),
            t
          );
        }
        function Ks(e, t, n, r) {
          return ((e = Hs(7, e, r, t)).lanes = n), e;
        }
        function Gs(e, t, n, r) {
          return ((e = Hs(23, e, r, t)).elementType = A), (e.lanes = n), e;
        }
        function Qs(e, t, n) {
          return ((e = Hs(6, e, null, t)).lanes = n), e;
        }
        function Ys(e, t, n) {
          return (
            ((t = Hs(
              4,
              null !== e.children ? e.children : [],
              e.key,
              t
            )).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        function Xs(e, t, n) {
          (this.tag = t),
            (this.containerInfo = e),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = -1),
            (this.pendingContext = this.context = null),
            (this.hydrate = n),
            (this.callbackNode = null),
            (this.callbackPriority = 0),
            (this.eventTimes = Bt(0)),
            (this.expirationTimes = Bt(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = Bt(0)),
            (this.mutableSourceEagerHydrationData = null);
        }
        function Js(e, t, n) {
          var r =
            3 < arguments.length && void 0 !== arguments[3]
              ? arguments[3]
              : null;
          return {
            $$typeof: S,
            key: null == r ? null : "" + r,
            children: e,
            containerInfo: t,
            implementation: n,
          };
        }
        function eu(e, t, n, r) {
          var o = t.current,
            i = fs(),
            l = ps(o);
          e: if (n) {
            t: {
              if (Qe((n = n._reactInternals)) !== n || 1 !== n.tag)
                throw Error(a(170));
              var s = n;
              do {
                switch (s.tag) {
                  case 3:
                    s = s.stateNode.context;
                    break t;
                  case 1:
                    if (yo(s.type)) {
                      s = s.stateNode.__reactInternalMemoizedMergedChildContext;
                      break t;
                    }
                }
                s = s.return;
              } while (null !== s);
              throw Error(a(171));
            }
            if (1 === n.tag) {
              var u = n.type;
              if (yo(u)) {
                n = wo(n, u, s);
                break e;
              }
            }
            n = s;
          } else n = po;
          return (
            null === t.context ? (t.context = n) : (t.pendingContext = n),
            ((t = di(i, l)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (t.callback = r),
            fi(o, t),
            hs(o, l, i),
            l
          );
        }
        function tu(e) {
          return (e = e.current).child
            ? (e.child.tag, e.child.stateNode)
            : null;
        }
        function nu(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function ru(e, t) {
          nu(e, t), (e = e.alternate) && nu(e, t);
        }
        function ou(e, t, n) {
          var r =
            (null != n &&
              null != n.hydrationOptions &&
              n.hydrationOptions.mutableSources) ||
            null;
          if (
            ((n = new Xs(e, t, null != n && !0 === n.hydrate)),
            (t = Hs(3, null, null, 2 === t ? 7 : 1 === t ? 3 : 0)),
            (n.current = t),
            (t.stateNode = n),
            ui(t),
            (e[eo] = n.current),
            Or(8 === e.nodeType ? e.parentNode : e),
            r)
          )
            for (e = 0; e < r.length; e++) {
              var o = (t = r[e])._getVersion;
              (o = o(t._source)),
                null == n.mutableSourceEagerHydrationData
                  ? (n.mutableSourceEagerHydrationData = [t, o])
                  : n.mutableSourceEagerHydrationData.push(t, o);
            }
          this._internalRoot = n;
        }
        function iu(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType ||
                " react-mount-point-unstable " !== e.nodeValue))
          );
        }
        function au(e, t, n, r, o) {
          var i = n._reactRootContainer;
          if (i) {
            var a = i._internalRoot;
            if ("function" === typeof o) {
              var l = o;
              o = function () {
                var e = tu(a);
                l.call(e);
              };
            }
            eu(t, a, e, o);
          } else {
            if (
              ((i = n._reactRootContainer =
                (function (e, t) {
                  if (
                    (t ||
                      (t = !(
                        !(t = e
                          ? 9 === e.nodeType
                            ? e.documentElement
                            : e.firstChild
                          : null) ||
                        1 !== t.nodeType ||
                        !t.hasAttribute("data-reactroot")
                      )),
                    !t)
                  )
                    for (var n; (n = e.lastChild); ) e.removeChild(n);
                  return new ou(e, 0, t ? { hydrate: !0 } : void 0);
                })(n, r)),
              (a = i._internalRoot),
              "function" === typeof o)
            ) {
              var s = o;
              o = function () {
                var e = tu(a);
                s.call(e);
              };
            }
            ws(function () {
              eu(t, a, e, o);
            });
          }
          return tu(a);
        }
        function lu(e, t) {
          var n =
            2 < arguments.length && void 0 !== arguments[2]
              ? arguments[2]
              : null;
          if (!iu(t)) throw Error(a(200));
          return Js(e, t, null, n);
        }
        (Kl = function (e, t, n) {
          var r = t.lanes;
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || mo.current) Aa = !0;
            else {
              if (0 === (n & r)) {
                switch (((Aa = !1), t.tag)) {
                  case 3:
                    qa(t), Ki();
                    break;
                  case 5:
                    _i(t);
                    break;
                  case 1:
                    yo(t.type) && ko(t);
                    break;
                  case 4:
                    Ni(t, t.stateNode.containerInfo);
                    break;
                  case 10:
                    r = t.memoizedProps.value;
                    var o = t.type._context;
                    fo(Jo, o._currentValue), (o._currentValue = r);
                    break;
                  case 13:
                    if (null !== t.memoizedState)
                      return 0 !== (n & t.child.childLanes)
                        ? Xa(e, t, n)
                        : (fo(Fi, 1 & Fi.current),
                          null !== (t = il(e, t, n)) ? t.sibling : null);
                    fo(Fi, 1 & Fi.current);
                    break;
                  case 19:
                    if (
                      ((r = 0 !== (n & t.childLanes)), 0 !== (64 & e.flags))
                    ) {
                      if (r) return ol(e, t, n);
                      t.flags |= 64;
                    }
                    if (
                      (null !== (o = t.memoizedState) &&
                        ((o.rendering = null),
                        (o.tail = null),
                        (o.lastEffect = null)),
                      fo(Fi, Fi.current),
                      r)
                    )
                      break;
                    return null;
                  case 23:
                  case 24:
                    return (t.lanes = 0), Ba(e, t, n);
                }
                return il(e, t, n);
              }
              Aa = 0 !== (16384 & e.flags);
            }
          else Aa = !1;
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              if (
                ((r = t.type),
                null !== e &&
                  ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
                (e = t.pendingProps),
                (o = go(t, ho.current)),
                ai(t, n),
                (o = la(null, t, r, e, o, n)),
                (t.flags |= 1),
                "object" === typeof o &&
                  null !== o &&
                  "function" === typeof o.render &&
                  void 0 === o.$$typeof)
              ) {
                if (
                  ((t.tag = 1),
                  (t.memoizedState = null),
                  (t.updateQueue = null),
                  yo(r))
                ) {
                  var i = !0;
                  ko(t);
                } else i = !1;
                (t.memoizedState =
                  null !== o.state && void 0 !== o.state ? o.state : null),
                  ui(t);
                var l = r.getDerivedStateFromProps;
                "function" === typeof l && gi(t, r, l, e),
                  (o.updater = yi),
                  (t.stateNode = o),
                  (o._reactInternals = t),
                  ki(t, r, e, n),
                  (t = $a(null, t, r, !0, i, n));
              } else (t.tag = 0), Fa(null, t, o, n), (t = t.child);
              return t;
            case 16:
              o = t.elementType;
              e: {
                switch (
                  (null !== e &&
                    ((e.alternate = null),
                    (t.alternate = null),
                    (t.flags |= 2)),
                  (e = t.pendingProps),
                  (o = (i = o._init)(o._payload)),
                  (t.type = o),
                  (i = t.tag =
                    (function (e) {
                      if ("function" === typeof e) return Us(e) ? 1 : 0;
                      if (void 0 !== e && null !== e) {
                        if ((e = e.$$typeof) === R) return 11;
                        if (e === O) return 14;
                      }
                      return 2;
                    })(o)),
                  (e = Xo(o, e)),
                  i)
                ) {
                  case 0:
                    t = Ha(null, t, o, e, n);
                    break e;
                  case 1:
                    t = Ua(null, t, o, e, n);
                    break e;
                  case 11:
                    t = Ia(null, t, o, e, n);
                    break e;
                  case 14:
                    t = Da(null, t, o, Xo(o.type, e), r, n);
                    break e;
                }
                throw Error(a(306, o, ""));
              }
              return t;
            case 0:
              return (
                (r = t.type),
                (o = t.pendingProps),
                Ha(e, t, r, (o = t.elementType === r ? o : Xo(r, o)), n)
              );
            case 1:
              return (
                (r = t.type),
                (o = t.pendingProps),
                Ua(e, t, r, (o = t.elementType === r ? o : Xo(r, o)), n)
              );
            case 3:
              if ((qa(t), (r = t.updateQueue), null === e || null === r))
                throw Error(a(282));
              if (
                ((r = t.pendingProps),
                (o = null !== (o = t.memoizedState) ? o.element : null),
                ci(e, t),
                hi(t, r, null, n),
                (r = t.memoizedState.element) === o)
              )
                Ki(), (t = il(e, t, n));
              else {
                if (
                  ((i = (o = t.stateNode).hydrate) &&
                    ((Wi = Kr(t.stateNode.containerInfo.firstChild)),
                    (Di = t),
                    (i = Bi = !0)),
                  i)
                ) {
                  if (null != (e = o.mutableSourceEagerHydrationData))
                    for (o = 0; o < e.length; o += 2)
                      ((i = e[o])._workInProgressVersionPrimary = e[o + 1]),
                        Gi.push(i);
                  for (n = Mi(t, null, r, n), t.child = n; n; )
                    (n.flags = (-3 & n.flags) | 1024), (n = n.sibling);
                } else Fa(e, t, r, n), Ki();
                t = t.child;
              }
              return t;
            case 5:
              return (
                _i(t),
                null === e && Ui(t),
                (r = t.type),
                (o = t.pendingProps),
                (i = null !== e ? e.memoizedProps : null),
                (l = o.children),
                Hr(r, o)
                  ? (l = null)
                  : null !== i && Hr(r, i) && (t.flags |= 16),
                Va(e, t),
                Fa(e, t, l, n),
                t.child
              );
            case 6:
              return null === e && Ui(t), null;
            case 13:
              return Xa(e, t, n);
            case 4:
              return (
                Ni(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = Pi(t, null, r, n)) : Fa(e, t, r, n),
                t.child
              );
            case 11:
              return (
                (r = t.type),
                (o = t.pendingProps),
                Ia(e, t, r, (o = t.elementType === r ? o : Xo(r, o)), n)
              );
            case 7:
              return Fa(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return Fa(e, t, t.pendingProps.children, n), t.child;
            case 10:
              e: {
                (r = t.type._context),
                  (o = t.pendingProps),
                  (l = t.memoizedProps),
                  (i = o.value);
                var s = t.type._context;
                if (
                  (fo(Jo, s._currentValue), (s._currentValue = i), null !== l)
                )
                  if (
                    ((s = l.value),
                    0 ===
                      (i = cr(s, i)
                        ? 0
                        : 0 |
                          ("function" === typeof r._calculateChangedBits
                            ? r._calculateChangedBits(s, i)
                            : 1073741823)))
                  ) {
                    if (l.children === o.children && !mo.current) {
                      t = il(e, t, n);
                      break e;
                    }
                  } else
                    for (
                      null !== (s = t.child) && (s.return = t);
                      null !== s;

                    ) {
                      var u = s.dependencies;
                      if (null !== u) {
                        l = s.child;
                        for (var c = u.firstContext; null !== c; ) {
                          if (c.context === r && 0 !== (c.observedBits & i)) {
                            1 === s.tag &&
                              (((c = di(-1, n & -n)).tag = 2), fi(s, c)),
                              (s.lanes |= n),
                              null !== (c = s.alternate) && (c.lanes |= n),
                              ii(s.return, n),
                              (u.lanes |= n);
                            break;
                          }
                          c = c.next;
                        }
                      } else
                        l = 10 === s.tag && s.type === t.type ? null : s.child;
                      if (null !== l) l.return = s;
                      else
                        for (l = s; null !== l; ) {
                          if (l === t) {
                            l = null;
                            break;
                          }
                          if (null !== (s = l.sibling)) {
                            (s.return = l.return), (l = s);
                            break;
                          }
                          l = l.return;
                        }
                      s = l;
                    }
                Fa(e, t, o.children, n), (t = t.child);
              }
              return t;
            case 9:
              return (
                (o = t.type),
                (r = (i = t.pendingProps).children),
                ai(t, n),
                (r = r((o = li(o, i.unstable_observedBits)))),
                (t.flags |= 1),
                Fa(e, t, r, n),
                t.child
              );
            case 14:
              return (
                (i = Xo((o = t.type), t.pendingProps)),
                Da(e, t, o, (i = Xo(o.type, i)), r, n)
              );
            case 15:
              return Wa(e, t, t.type, t.pendingProps, r, n);
            case 17:
              return (
                (r = t.type),
                (o = t.pendingProps),
                (o = t.elementType === r ? o : Xo(r, o)),
                null !== e &&
                  ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
                (t.tag = 1),
                yo(r) ? ((e = !0), ko(t)) : (e = !1),
                ai(t, n),
                xi(t, r, o),
                ki(t, r, o, n),
                $a(null, t, r, !0, e, n)
              );
            case 19:
              return ol(e, t, n);
            case 23:
            case 24:
              return Ba(e, t, n);
          }
          throw Error(a(156, t.tag));
        }),
          (ou.prototype.render = function (e) {
            eu(e, this._internalRoot, null, null);
          }),
          (ou.prototype.unmount = function () {
            var e = this._internalRoot,
              t = e.containerInfo;
            eu(null, e, null, function () {
              t[eo] = null;
            });
          }),
          (tt = function (e) {
            13 === e.tag && (hs(e, 4, fs()), ru(e, 4));
          }),
          (nt = function (e) {
            13 === e.tag && (hs(e, 67108864, fs()), ru(e, 67108864));
          }),
          (rt = function (e) {
            if (13 === e.tag) {
              var t = fs(),
                n = ps(e);
              hs(e, n, t), ru(e, n);
            }
          }),
          (ot = function (e, t) {
            return t();
          }),
          (Pe = function (e, t, n) {
            switch (t) {
              case "input":
                if ((ne(e, n), (t = n.name), "radio" === n.type && null != t)) {
                  for (n = e; n.parentNode; ) n = n.parentNode;
                  for (
                    n = n.querySelectorAll(
                      "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
                    ),
                      t = 0;
                    t < n.length;
                    t++
                  ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                      var o = io(r);
                      if (!o) throw Error(a(90));
                      Y(r), ne(r, o);
                    }
                  }
                }
                break;
              case "textarea":
                ue(e, n);
                break;
              case "select":
                null != (t = n.value) && ae(e, !!n.multiple, t, !1);
            }
          }),
          (ze = xs),
          (Ne = function (e, t, n, r, o) {
            var i = Ol;
            Ol |= 4;
            try {
              return qo(98, e.bind(null, t, n, r, o));
            } finally {
              0 === (Ol = i) && (ql(), Go());
            }
          }),
          (Le = function () {
            0 === (49 & Ol) &&
              ((function () {
                if (null !== os) {
                  var e = os;
                  (os = null),
                    e.forEach(function (e) {
                      (e.expiredLanes |= 24 & e.pendingLanes), vs(e, Ho());
                    });
                }
                Go();
              })(),
              Ls());
          }),
          (_e = function (e, t) {
            var n = Ol;
            Ol |= 2;
            try {
              return e(t);
            } finally {
              0 === (Ol = n) && (ql(), Go());
            }
          });
        var su = { Events: [ro, oo, io, je, Oe, Ls, { current: !1 }] },
          uu = {
            findFiberByHostInstance: no,
            bundleType: 0,
            version: "17.0.2",
            rendererPackageName: "react-dom",
          },
          cu = {
            bundleType: uu.bundleType,
            version: uu.version,
            rendererPackageName: uu.rendererPackageName,
            rendererConfig: uu.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: w.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = Je(e)) ? null : e.stateNode;
            },
            findFiberByHostInstance:
              uu.findFiberByHostInstance ||
              function () {
                return null;
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
          };
        if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var du = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!du.isDisabled && du.supportsFiber)
            try {
              (Zo = du.inject(cu)), (Eo = du);
            } catch (ve) {}
        }
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = su),
          (t.createPortal = lu),
          (t.findDOMNode = function (e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = e._reactInternals;
            if (void 0 === t) {
              if ("function" === typeof e.render) throw Error(a(188));
              throw Error(a(268, Object.keys(e)));
            }
            return (e = null === (e = Je(t)) ? null : e.stateNode);
          }),
          (t.flushSync = function (e, t) {
            var n = Ol;
            if (0 !== (48 & n)) return e(t);
            Ol |= 1;
            try {
              if (e) return qo(99, e.bind(null, t));
            } finally {
              (Ol = n), Go();
            }
          }),
          (t.hydrate = function (e, t, n) {
            if (!iu(t)) throw Error(a(200));
            return au(null, e, t, !0, n);
          }),
          (t.render = function (e, t, n) {
            if (!iu(t)) throw Error(a(200));
            return au(null, e, t, !1, n);
          }),
          (t.unmountComponentAtNode = function (e) {
            if (!iu(e)) throw Error(a(40));
            return (
              !!e._reactRootContainer &&
              (ws(function () {
                au(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[eo] = null);
                });
              }),
              !0)
            );
          }),
          (t.unstable_batchedUpdates = xs),
          (t.unstable_createPortal = function (e, t) {
            return lu(
              e,
              t,
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null
            );
          }),
          (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
            if (!iu(n)) throw Error(a(200));
            if (null == e || void 0 === e._reactInternals) throw Error(a(38));
            return au(e, t, n, !1, r);
          }),
          (t.version = "17.0.2");
      },
      4164: function (e, t, n) {
        "use strict";
        !(function e() {
          if (
            "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (t) {
              console.error(t);
            }
        })(),
          (e.exports = n(4463));
      },
      6374: function (e, t, n) {
        "use strict";
        n(1725);
        var r = n(2791),
          o = 60103;
        if (
          ((t.Fragment = 60107), "function" === typeof Symbol && Symbol.for)
        ) {
          var i = Symbol.for;
          (o = i("react.element")), (t.Fragment = i("react.fragment"));
        }
        var a =
            r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          l = Object.prototype.hasOwnProperty,
          s = { key: !0, ref: !0, __self: !0, __source: !0 };
        function u(e, t, n) {
          var r,
            i = {},
            u = null,
            c = null;
          for (r in (void 0 !== n && (u = "" + n),
          void 0 !== t.key && (u = "" + t.key),
          void 0 !== t.ref && (c = t.ref),
          t))
            l.call(t, r) && !s.hasOwnProperty(r) && (i[r] = t[r]);
          if (e && e.defaultProps)
            for (r in (t = e.defaultProps)) void 0 === i[r] && (i[r] = t[r]);
          return {
            $$typeof: o,
            type: e,
            key: u,
            ref: c,
            props: i,
            _owner: a.current,
          };
        }
        (t.jsx = u), (t.jsxs = u);
      },
      9117: function (e, t, n) {
        "use strict";
        var r = n(1725),
          o = 60103,
          i = 60106;
        (t.Fragment = 60107), (t.StrictMode = 60108), (t.Profiler = 60114);
        var a = 60109,
          l = 60110,
          s = 60112;
        t.Suspense = 60113;
        var u = 60115,
          c = 60116;
        if ("function" === typeof Symbol && Symbol.for) {
          var d = Symbol.for;
          (o = d("react.element")),
            (i = d("react.portal")),
            (t.Fragment = d("react.fragment")),
            (t.StrictMode = d("react.strict_mode")),
            (t.Profiler = d("react.profiler")),
            (a = d("react.provider")),
            (l = d("react.context")),
            (s = d("react.forward_ref")),
            (t.Suspense = d("react.suspense")),
            (u = d("react.memo")),
            (c = d("react.lazy"));
        }
        var f = "function" === typeof Symbol && Symbol.iterator;
        function p(e) {
          for (
            var t =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
              n = 1;
            n < arguments.length;
            n++
          )
            t += "&args[]=" + encodeURIComponent(arguments[n]);
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        var h = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          m = {};
        function v(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = m),
            (this.updater = n || h);
        }
        function g() {}
        function y(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = m),
            (this.updater = n || h);
        }
        (v.prototype.isReactComponent = {}),
          (v.prototype.setState = function (e, t) {
            if ("object" !== typeof e && "function" !== typeof e && null != e)
              throw Error(p(85));
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (v.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (g.prototype = v.prototype);
        var b = (y.prototype = new g());
        (b.constructor = y), r(b, v.prototype), (b.isPureReactComponent = !0);
        var x = { current: null },
          w = Object.prototype.hasOwnProperty,
          k = { key: !0, ref: !0, __self: !0, __source: !0 };
        function S(e, t, n) {
          var r,
            i = {},
            a = null,
            l = null;
          if (null != t)
            for (r in (void 0 !== t.ref && (l = t.ref),
            void 0 !== t.key && (a = "" + t.key),
            t))
              w.call(t, r) && !k.hasOwnProperty(r) && (i[r] = t[r]);
          var s = arguments.length - 2;
          if (1 === s) i.children = n;
          else if (1 < s) {
            for (var u = Array(s), c = 0; c < s; c++) u[c] = arguments[c + 2];
            i.children = u;
          }
          if (e && e.defaultProps)
            for (r in (s = e.defaultProps)) void 0 === i[r] && (i[r] = s[r]);
          return {
            $$typeof: o,
            type: e,
            key: a,
            ref: l,
            props: i,
            _owner: x.current,
          };
        }
        function Z(e) {
          return "object" === typeof e && null !== e && e.$$typeof === o;
        }
        var E = /\/+/g;
        function C(e, t) {
          return "object" === typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { "=": "=0", ":": "=2" };
                return (
                  "$" +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })("" + e.key)
            : t.toString(36);
        }
        function P(e, t, n, r, a) {
          var l = typeof e;
          ("undefined" !== l && "boolean" !== l) || (e = null);
          var s = !1;
          if (null === e) s = !0;
          else
            switch (l) {
              case "string":
              case "number":
                s = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case o:
                  case i:
                    s = !0;
                }
            }
          if (s)
            return (
              (a = a((s = e))),
              (e = "" === r ? "." + C(s, 0) : r),
              Array.isArray(a)
                ? ((n = ""),
                  null != e && (n = e.replace(E, "$&/") + "/"),
                  P(a, t, n, "", function (e) {
                    return e;
                  }))
                : null != a &&
                  (Z(a) &&
                    (a = (function (e, t) {
                      return {
                        $$typeof: o,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      a,
                      n +
                        (!a.key || (s && s.key === a.key)
                          ? ""
                          : ("" + a.key).replace(E, "$&/") + "/") +
                        e
                    )),
                  t.push(a)),
              1
            );
          if (((s = 0), (r = "" === r ? "." : r + ":"), Array.isArray(e)))
            for (var u = 0; u < e.length; u++) {
              var c = r + C((l = e[u]), u);
              s += P(l, t, n, c, a);
            }
          else if (
            ((c = (function (e) {
              return null === e || "object" !== typeof e
                ? null
                : "function" === typeof (e = (f && e[f]) || e["@@iterator"])
                ? e
                : null;
            })(e)),
            "function" === typeof c)
          )
            for (e = c.call(e), u = 0; !(l = e.next()).done; )
              s += P((l = l.value), t, n, (c = r + C(l, u++)), a);
          else if ("object" === l)
            throw (
              ((t = "" + e),
              Error(
                p(
                  31,
                  "[object Object]" === t
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : t
                )
              ))
            );
          return s;
        }
        function M(e, t, n) {
          if (null == e) return e;
          var r = [],
            o = 0;
          return (
            P(e, r, "", "", function (e) {
              return t.call(n, e, o++);
            }),
            r
          );
        }
        function R(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()),
              (e._status = 0),
              (e._result = t),
              t.then(
                function (t) {
                  0 === e._status &&
                    ((t = t.default), (e._status = 1), (e._result = t));
                },
                function (t) {
                  0 === e._status && ((e._status = 2), (e._result = t));
                }
              );
          }
          if (1 === e._status) return e._result;
          throw e._result;
        }
        var T = { current: null };
        function j() {
          var e = T.current;
          if (null === e) throw Error(p(321));
          return e;
        }
        var O = {
          ReactCurrentDispatcher: T,
          ReactCurrentBatchConfig: { transition: 0 },
          ReactCurrentOwner: x,
          IsSomeRendererActing: { current: !1 },
          assign: r,
        };
        (t.Children = {
          map: M,
          forEach: function (e, t, n) {
            M(
              e,
              function () {
                t.apply(this, arguments);
              },
              n
            );
          },
          count: function (e) {
            var t = 0;
            return (
              M(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              M(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!Z(e)) throw Error(p(143));
            return e;
          },
        }),
          (t.Component = v),
          (t.PureComponent = y),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = O),
          (t.cloneElement = function (e, t, n) {
            if (null === e || void 0 === e) throw Error(p(267, e));
            var i = r({}, e.props),
              a = e.key,
              l = e.ref,
              s = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((l = t.ref), (s = x.current)),
                void 0 !== t.key && (a = "" + t.key),
                e.type && e.type.defaultProps)
              )
                var u = e.type.defaultProps;
              for (c in t)
                w.call(t, c) &&
                  !k.hasOwnProperty(c) &&
                  (i[c] = void 0 === t[c] && void 0 !== u ? u[c] : t[c]);
            }
            var c = arguments.length - 2;
            if (1 === c) i.children = n;
            else if (1 < c) {
              u = Array(c);
              for (var d = 0; d < c; d++) u[d] = arguments[d + 2];
              i.children = u;
            }
            return {
              $$typeof: o,
              type: e.type,
              key: a,
              ref: l,
              props: i,
              _owner: s,
            };
          }),
          (t.createContext = function (e, t) {
            return (
              void 0 === t && (t = null),
              ((e = {
                $$typeof: l,
                _calculateChangedBits: t,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
              }).Provider = { $$typeof: a, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = S),
          (t.createFactory = function (e) {
            var t = S.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: s, render: e };
          }),
          (t.isValidElement = Z),
          (t.lazy = function (e) {
            return {
              $$typeof: c,
              _payload: { _status: -1, _result: e },
              _init: R,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: u, type: e, compare: void 0 === t ? null : t };
          }),
          (t.useCallback = function (e, t) {
            return j().useCallback(e, t);
          }),
          (t.useContext = function (e, t) {
            return j().useContext(e, t);
          }),
          (t.useDebugValue = function () {}),
          (t.useEffect = function (e, t) {
            return j().useEffect(e, t);
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return j().useImperativeHandle(e, t, n);
          }),
          (t.useLayoutEffect = function (e, t) {
            return j().useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return j().useMemo(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return j().useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return j().useRef(e);
          }),
          (t.useState = function (e) {
            return j().useState(e);
          }),
          (t.version = "17.0.2");
      },
      2791: function (e, t, n) {
        "use strict";
        e.exports = n(9117);
      },
      184: function (e, t, n) {
        "use strict";
        e.exports = n(6374);
      },
      6813: function (e, t) {
        "use strict";
        var n, r, o, i;
        if (
          "object" === typeof performance &&
          "function" === typeof performance.now
        ) {
          var a = performance;
          t.unstable_now = function () {
            return a.now();
          };
        } else {
          var l = Date,
            s = l.now();
          t.unstable_now = function () {
            return l.now() - s;
          };
        }
        if (
          "undefined" === typeof window ||
          "function" !== typeof MessageChannel
        ) {
          var u = null,
            c = null,
            d = function e() {
              if (null !== u)
                try {
                  var n = t.unstable_now();
                  u(!0, n), (u = null);
                } catch (r) {
                  throw (setTimeout(e, 0), r);
                }
            };
          (n = function (e) {
            null !== u ? setTimeout(n, 0, e) : ((u = e), setTimeout(d, 0));
          }),
            (r = function (e, t) {
              c = setTimeout(e, t);
            }),
            (o = function () {
              clearTimeout(c);
            }),
            (t.unstable_shouldYield = function () {
              return !1;
            }),
            (i = t.unstable_forceFrameRate = function () {});
        } else {
          var f = window.setTimeout,
            p = window.clearTimeout;
          if ("undefined" !== typeof console) {
            var h = window.cancelAnimationFrame;
            "function" !== typeof window.requestAnimationFrame &&
              console.error(
                "This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
              ),
              "function" !== typeof h &&
                console.error(
                  "This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
                );
          }
          var m = !1,
            v = null,
            g = -1,
            y = 5,
            b = 0;
          (t.unstable_shouldYield = function () {
            return t.unstable_now() >= b;
          }),
            (i = function () {}),
            (t.unstable_forceFrameRate = function (e) {
              0 > e || 125 < e
                ? console.error(
                    "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                  )
                : (y = 0 < e ? Math.floor(1e3 / e) : 5);
            });
          var x = new MessageChannel(),
            w = x.port2;
          (x.port1.onmessage = function () {
            if (null !== v) {
              var e = t.unstable_now();
              b = e + y;
              try {
                v(!0, e) ? w.postMessage(null) : ((m = !1), (v = null));
              } catch (n) {
                throw (w.postMessage(null), n);
              }
            } else m = !1;
          }),
            (n = function (e) {
              (v = e), m || ((m = !0), w.postMessage(null));
            }),
            (r = function (e, n) {
              g = f(function () {
                e(t.unstable_now());
              }, n);
            }),
            (o = function () {
              p(g), (g = -1);
            });
        }
        function k(e, t) {
          var n = e.length;
          e.push(t);
          e: for (;;) {
            var r = (n - 1) >>> 1,
              o = e[r];
            if (!(void 0 !== o && 0 < E(o, t))) break e;
            (e[r] = t), (e[n] = o), (n = r);
          }
        }
        function S(e) {
          return void 0 === (e = e[0]) ? null : e;
        }
        function Z(e) {
          var t = e[0];
          if (void 0 !== t) {
            var n = e.pop();
            if (n !== t) {
              e[0] = n;
              e: for (var r = 0, o = e.length; r < o; ) {
                var i = 2 * (r + 1) - 1,
                  a = e[i],
                  l = i + 1,
                  s = e[l];
                if (void 0 !== a && 0 > E(a, n))
                  void 0 !== s && 0 > E(s, a)
                    ? ((e[r] = s), (e[l] = n), (r = l))
                    : ((e[r] = a), (e[i] = n), (r = i));
                else {
                  if (!(void 0 !== s && 0 > E(s, n))) break e;
                  (e[r] = s), (e[l] = n), (r = l);
                }
              }
            }
            return t;
          }
          return null;
        }
        function E(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        var C = [],
          P = [],
          M = 1,
          R = null,
          T = 3,
          j = !1,
          O = !1,
          z = !1;
        function N(e) {
          for (var t = S(P); null !== t; ) {
            if (null === t.callback) Z(P);
            else {
              if (!(t.startTime <= e)) break;
              Z(P), (t.sortIndex = t.expirationTime), k(C, t);
            }
            t = S(P);
          }
        }
        function L(e) {
          if (((z = !1), N(e), !O))
            if (null !== S(C)) (O = !0), n(_);
            else {
              var t = S(P);
              null !== t && r(L, t.startTime - e);
            }
        }
        function _(e, n) {
          (O = !1), z && ((z = !1), o()), (j = !0);
          var i = T;
          try {
            for (
              N(n), R = S(C);
              null !== R &&
              (!(R.expirationTime > n) || (e && !t.unstable_shouldYield()));

            ) {
              var a = R.callback;
              if ("function" === typeof a) {
                (R.callback = null), (T = R.priorityLevel);
                var l = a(R.expirationTime <= n);
                (n = t.unstable_now()),
                  "function" === typeof l
                    ? (R.callback = l)
                    : R === S(C) && Z(C),
                  N(n);
              } else Z(C);
              R = S(C);
            }
            if (null !== R) var s = !0;
            else {
              var u = S(P);
              null !== u && r(L, u.startTime - n), (s = !1);
            }
            return s;
          } finally {
            (R = null), (T = i), (j = !1);
          }
        }
        var A = i;
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            O || j || ((O = !0), n(_));
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return T;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return S(C);
          }),
          (t.unstable_next = function (e) {
            switch (T) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = T;
            }
            var n = T;
            T = t;
            try {
              return e();
            } finally {
              T = n;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = A),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var n = T;
            T = e;
            try {
              return t();
            } finally {
              T = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, i, a) {
            var l = t.unstable_now();
            switch (
              ("object" === typeof a && null !== a
                ? (a = "number" === typeof (a = a.delay) && 0 < a ? l + a : l)
                : (a = l),
              e)
            ) {
              case 1:
                var s = -1;
                break;
              case 2:
                s = 250;
                break;
              case 5:
                s = 1073741823;
                break;
              case 4:
                s = 1e4;
                break;
              default:
                s = 5e3;
            }
            return (
              (e = {
                id: M++,
                callback: i,
                priorityLevel: e,
                startTime: a,
                expirationTime: (s = a + s),
                sortIndex: -1,
              }),
              a > l
                ? ((e.sortIndex = a),
                  k(P, e),
                  null === S(C) &&
                    e === S(P) &&
                    (z ? o() : (z = !0), r(L, a - l)))
                : ((e.sortIndex = s), k(C, e), O || j || ((O = !0), n(_))),
              e
            );
          }),
          (t.unstable_wrapCallback = function (e) {
            var t = T;
            return function () {
              var n = T;
              T = t;
              try {
                return e.apply(this, arguments);
              } finally {
                T = n;
              }
            };
          });
      },
      5296: function (e, t, n) {
        "use strict";
        e.exports = n(6813);
      },
      4836: function (e) {
        (e.exports = function (e) {
          return e && e.__esModule ? e : { default: e };
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
      907: function (e, t, n) {
        "use strict";
        function r(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
          return r;
        }
        n.d(t, {
          Z: function () {
            return r;
          },
        });
      },
      4942: function (e, t, n) {
        "use strict";
        function r(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        n.d(t, {
          Z: function () {
            return r;
          },
        });
      },
      7462: function (e, t, n) {
        "use strict";
        function r() {
          return (
            (r = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                      Object.prototype.hasOwnProperty.call(n, r) &&
                        (e[r] = n[r]);
                  }
                  return e;
                }),
            r.apply(this, arguments)
          );
        }
        n.d(t, {
          Z: function () {
            return r;
          },
        });
      },
      3366: function (e, t, n) {
        "use strict";
        function r(e, t) {
          if (null == e) return {};
          var n,
            r,
            o = {},
            i = Object.keys(e);
          for (r = 0; r < i.length; r++)
            (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
          return o;
        }
        n.d(t, {
          Z: function () {
            return r;
          },
        });
      },
      885: function (e, t, n) {
        "use strict";
        n.d(t, {
          Z: function () {
            return o;
          },
        });
        var r = n(181);
        function o(e, t) {
          return (
            (function (e) {
              if (Array.isArray(e)) return e;
            })(e) ||
            (function (e, t) {
              var n =
                null == e
                  ? null
                  : ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
                    e["@@iterator"];
              if (null != n) {
                var r,
                  o,
                  i = [],
                  a = !0,
                  l = !1;
                try {
                  for (
                    n = n.call(e);
                    !(a = (r = n.next()).done) &&
                    (i.push(r.value), !t || i.length !== t);
                    a = !0
                  );
                } catch (s) {
                  (l = !0), (o = s);
                } finally {
                  try {
                    a || null == n.return || n.return();
                  } finally {
                    if (l) throw o;
                  }
                }
                return i;
              }
            })(e, t) ||
            (0, r.Z)(e, t) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
      },
      2982: function (e, t, n) {
        "use strict";
        n.d(t, {
          Z: function () {
            return i;
          },
        });
        var r = n(907);
        var o = n(181);
        function i(e) {
          return (
            (function (e) {
              if (Array.isArray(e)) return (0, r.Z)(e);
            })(e) ||
            (function (e) {
              if (
                ("undefined" !== typeof Symbol && null != e[Symbol.iterator]) ||
                null != e["@@iterator"]
              )
                return Array.from(e);
            })(e) ||
            (0, o.Z)(e) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
      },
      181: function (e, t, n) {
        "use strict";
        n.d(t, {
          Z: function () {
            return o;
          },
        });
        var r = n(907);
        function o(e, t) {
          if (e) {
            if ("string" === typeof e) return (0, r.Z)(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return (
              "Object" === n && e.constructor && (n = e.constructor.name),
              "Map" === n || "Set" === n
                ? Array.from(e)
                : "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? (0, r.Z)(e, t)
                : void 0
            );
          }
        }
      },
    },
    t = {};
  function n(r) {
    var o = t[r];
    if (void 0 !== o) return o.exports;
    var i = (t[r] = { exports: {} });
    return e[r](i, i.exports, n), i.exports;
  }
  !(function () {
    var e,
      t = Object.getPrototypeOf
        ? function (e) {
            return Object.getPrototypeOf(e);
          }
        : function (e) {
            return e.__proto__;
          };
    n.t = function (r, o) {
      if ((1 & o && (r = this(r)), 8 & o)) return r;
      if ("object" === typeof r && r) {
        if (4 & o && r.__esModule) return r;
        if (16 & o && "function" === typeof r.then) return r;
      }
      var i = Object.create(null);
      n.r(i);
      var a = {};
      e = e || [null, t({}), t([]), t(t)];
      for (var l = 2 & o && r; "object" == typeof l && !~e.indexOf(l); l = t(l))
        Object.getOwnPropertyNames(l).forEach(function (e) {
          a[e] = function () {
            return r[e];
          };
        });
      return (
        (a.default = function () {
          return r;
        }),
        n.d(i, a),
        i
      );
    };
  })(),
    (n.d = function (e, t) {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.r = function (e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.p = "/projects/oxygen-editor/"),
    (function () {
      "use strict";
      var e = n(2791),
        t = n.t(e, 2),
        r = n(4164),
        o = n(2982),
        i = n(885),
        a = n(4942);
      function l(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? l(Object(n), !0).forEach(function (t) {
                (0, a.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : l(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var u = n(3366),
        c = n(7462),
        d = n(4419),
        f = n(2466),
        p = n(6189),
        h = n(8182),
        m = n(7563),
        v = n(7979),
        g = n(3981),
        y = n(5721),
        b = n(184),
        x = ["onChange", "maxRows", "minRows", "style", "value"];
      function w(e, t) {
        return parseInt(e[t], 10) || 0;
      }
      var k = {
        visibility: "hidden",
        position: "absolute",
        overflow: "hidden",
        height: 0,
        top: 0,
        left: 0,
        transform: "translateZ(0)",
      };
      function S(e) {
        return void 0 === e || null === e || 0 === Object.keys(e).length;
      }
      var Z = e.forwardRef(function (t, n) {
          var o = t.onChange,
            a = t.maxRows,
            l = t.minRows,
            s = void 0 === l ? 1 : l,
            d = t.style,
            f = t.value,
            p = (0, u.Z)(t, x),
            h = e.useRef(null != f).current,
            Z = e.useRef(null),
            E = (0, m.Z)(n, Z),
            C = e.useRef(null),
            P = e.useRef(0),
            M = e.useState({}),
            R = (0, i.Z)(M, 2),
            T = R[0],
            j = R[1],
            O = e.useCallback(
              function () {
                var e = Z.current,
                  n = (0, v.Z)(e).getComputedStyle(e);
                if ("0px" === n.width) return {};
                var r = C.current;
                (r.style.width = n.width),
                  (r.value = e.value || t.placeholder || "x"),
                  "\n" === r.value.slice(-1) && (r.value += " ");
                var o = n["box-sizing"],
                  i = w(n, "padding-bottom") + w(n, "padding-top"),
                  l = w(n, "border-bottom-width") + w(n, "border-top-width"),
                  u = r.scrollHeight;
                r.value = "x";
                var c = r.scrollHeight,
                  d = u;
                return (
                  s && (d = Math.max(Number(s) * c, d)),
                  a && (d = Math.min(Number(a) * c, d)),
                  {
                    outerHeightStyle:
                      (d = Math.max(d, c)) + ("border-box" === o ? i + l : 0),
                    overflow: Math.abs(d - u) <= 1,
                  }
                );
              },
              [a, s, t.placeholder]
            ),
            z = function (e, t) {
              var n = t.outerHeightStyle,
                r = t.overflow;
              return P.current < 20 &&
                ((n > 0 && Math.abs((e.outerHeightStyle || 0) - n) > 1) ||
                  e.overflow !== r)
                ? ((P.current += 1), { overflow: r, outerHeightStyle: n })
                : e;
            },
            N = e.useCallback(
              function () {
                var e = O();
                S(e) ||
                  j(function (t) {
                    return z(t, e);
                  });
              },
              [O]
            );
          e.useEffect(function () {
            var e,
              t = (0, g.Z)(function () {
                (P.current = 0),
                  Z.current &&
                    (function () {
                      var e = O();
                      S(e) ||
                        (0, r.flushSync)(function () {
                          j(function (t) {
                            return z(t, e);
                          });
                        });
                    })();
              }),
              n = (0, v.Z)(Z.current);
            return (
              n.addEventListener("resize", t),
              "undefined" !== typeof ResizeObserver &&
                (e = new ResizeObserver(t)).observe(Z.current),
              function () {
                t.clear(),
                  n.removeEventListener("resize", t),
                  e && e.disconnect();
              }
            );
          }),
            (0, y.Z)(function () {
              N();
            }),
            e.useEffect(
              function () {
                P.current = 0;
              },
              [f]
            );
          return (0, b.jsxs)(e.Fragment, {
            children: [
              (0, b.jsx)(
                "textarea",
                (0, c.Z)(
                  {
                    value: f,
                    onChange: function (e) {
                      (P.current = 0), h || N(), o && o(e);
                    },
                    ref: E,
                    rows: s,
                    style: (0, c.Z)(
                      {
                        height: T.outerHeightStyle,
                        overflow: T.overflow ? "hidden" : null,
                      },
                      d
                    ),
                  },
                  p
                )
              ),
              (0, b.jsx)("textarea", {
                "aria-hidden": !0,
                className: t.className,
                readOnly: !0,
                ref: C,
                tabIndex: -1,
                style: (0, c.Z)({}, k, d, { padding: 0 }),
              }),
            ],
          });
        }),
        E = Z;
      var C = function (e) {
        return "string" === typeof e;
      };
      function P(e) {
        var t = e.props,
          n = e.states,
          r = e.muiFormControl;
        return n.reduce(function (e, n) {
          return (
            (e[n] = t[n]), r && "undefined" === typeof t[n] && (e[n] = r[n]), e
          );
        }, {});
      }
      var M = e.createContext();
      function R() {
        return e.useContext(M);
      }
      var T = n(277),
        j = n(5513),
        O = n(9853),
        z = n(7933),
        N = n(3026),
        L = (n(76), n(9886)),
        _ = (n(2110), n(5438)),
        A = n(9140),
        F = n(2561),
        I = (0, L.w)(function (t, n) {
          var r = t.styles,
            o = (0, A.O)([r], void 0, (0, e.useContext)(L.T)),
            i = (0, e.useRef)();
          return (
            (0, F.j)(
              function () {
                var e = n.key + "-global",
                  t = new n.sheet.constructor({
                    key: e,
                    nonce: n.sheet.nonce,
                    container: n.sheet.container,
                    speedy: n.sheet.isSpeedy,
                  }),
                  r = !1,
                  a = document.querySelector(
                    'style[data-emotion="' + e + " " + o.name + '"]'
                  );
                return (
                  n.sheet.tags.length && (t.before = n.sheet.tags[0]),
                  null !== a &&
                    ((r = !0),
                    a.setAttribute("data-emotion", e),
                    t.hydrate([a])),
                  (i.current = [t, r]),
                  function () {
                    t.flush();
                  }
                );
              },
              [n]
            ),
            (0, F.j)(
              function () {
                var e = i.current,
                  t = e[0];
                if (e[1]) e[1] = !1;
                else {
                  if (
                    (void 0 !== o.next && (0, _.My)(n, o.next, !0),
                    t.tags.length)
                  ) {
                    var r = t.tags[t.tags.length - 1].nextElementSibling;
                    (t.before = r), t.flush();
                  }
                  n.insert("", o, t, !1);
                }
              },
              [n, o.name]
            ),
            null
          );
        });
      function D() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return (0, A.O)(t);
      }
      var W = function () {
        var e = D.apply(void 0, arguments),
          t = "animation-" + e.name;
        return {
          name: t,
          styles: "@keyframes " + t + "{" + e.styles + "}",
          anim: 1,
          toString: function () {
            return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
          },
        };
      };
      function B(e) {
        var t = e.styles,
          n = e.defaultTheme,
          r = void 0 === n ? {} : n,
          o =
            "function" === typeof t
              ? function (e) {
                  return t(
                    void 0 === (n = e) ||
                      null === n ||
                      0 === Object.keys(n).length
                      ? r
                      : e
                  );
                  var n;
                }
              : t;
        return (0, b.jsx)(I, { styles: o });
      }
      var V = n(4205);
      var H = function (e) {
        return (0, b.jsx)(B, (0, c.Z)({}, e, { defaultTheme: V.Z }));
      };
      function U(e) {
        return null != e && !(Array.isArray(e) && 0 === e.length);
      }
      function $(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return (
          e &&
          ((U(e.value) && "" !== e.value) ||
            (t && U(e.defaultValue) && "" !== e.defaultValue))
        );
      }
      var q = n(1217),
        K = n(5878);
      function G(e) {
        return (0, q.Z)("MuiInputBase", e);
      }
      var Q = (0, K.Z)("MuiInputBase", [
          "root",
          "formControl",
          "focused",
          "disabled",
          "adornedStart",
          "adornedEnd",
          "error",
          "sizeSmall",
          "multiline",
          "colorSecondary",
          "fullWidth",
          "hiddenLabel",
          "readOnly",
          "input",
          "inputSizeSmall",
          "inputMultiline",
          "inputTypeSearch",
          "inputAdornedStart",
          "inputAdornedEnd",
          "inputHiddenLabel",
        ]),
        Y = [
          "aria-describedby",
          "autoComplete",
          "autoFocus",
          "className",
          "color",
          "components",
          "componentsProps",
          "defaultValue",
          "disabled",
          "disableInjectingGlobalStyles",
          "endAdornment",
          "error",
          "fullWidth",
          "id",
          "inputComponent",
          "inputProps",
          "inputRef",
          "margin",
          "maxRows",
          "minRows",
          "multiline",
          "name",
          "onBlur",
          "onChange",
          "onClick",
          "onFocus",
          "onKeyDown",
          "onKeyUp",
          "placeholder",
          "readOnly",
          "renderSuffix",
          "rows",
          "size",
          "startAdornment",
          "type",
          "value",
        ],
        X = function (e, t) {
          var n = e.ownerState;
          return [
            t.root,
            n.formControl && t.formControl,
            n.startAdornment && t.adornedStart,
            n.endAdornment && t.adornedEnd,
            n.error && t.error,
            "small" === n.size && t.sizeSmall,
            n.multiline && t.multiline,
            n.color && t["color".concat((0, O.Z)(n.color))],
            n.fullWidth && t.fullWidth,
            n.hiddenLabel && t.hiddenLabel,
          ];
        },
        J = function (e, t) {
          var n = e.ownerState;
          return [
            t.input,
            "small" === n.size && t.inputSizeSmall,
            n.multiline && t.inputMultiline,
            "search" === n.type && t.inputTypeSearch,
            n.startAdornment && t.inputAdornedStart,
            n.endAdornment && t.inputAdornedEnd,
            n.hiddenLabel && t.inputHiddenLabel,
          ];
        },
        ee = (0, T.ZP)("div", {
          name: "MuiInputBase",
          slot: "Root",
          overridesResolver: X,
        })(function (e) {
          var t = e.theme,
            n = e.ownerState;
          return (0,
          c.Z)({}, t.typography.body1, (0, a.Z)({ color: (t.vars || t).palette.text.primary, lineHeight: "1.4375em", boxSizing: "border-box", position: "relative", cursor: "text", display: "inline-flex", alignItems: "center" }, "&.".concat(Q.disabled), { color: (t.vars || t).palette.text.disabled, cursor: "default" }), n.multiline && (0, c.Z)({ padding: "4px 0 5px" }, "small" === n.size && { paddingTop: 1 }), n.fullWidth && { width: "100%" });
        }),
        te = (0, T.ZP)("input", {
          name: "MuiInputBase",
          slot: "Input",
          overridesResolver: J,
        })(function (e) {
          var t,
            n = e.theme,
            r = e.ownerState,
            o = "light" === n.palette.mode,
            i = (0, c.Z)(
              { color: "currentColor" },
              n.vars
                ? { opacity: n.vars.opacity.inputPlaceholder }
                : { opacity: o ? 0.42 : 0.5 },
              {
                transition: n.transitions.create("opacity", {
                  duration: n.transitions.duration.shorter,
                }),
              }
            ),
            l = { opacity: "0 !important" },
            s = n.vars
              ? { opacity: n.vars.opacity.inputPlaceholder }
              : { opacity: o ? 0.42 : 0.5 };
          return (0,
          c.Z)(((t = { font: "inherit", letterSpacing: "inherit", color: "currentColor", padding: "4px 0 5px", border: 0, boxSizing: "content-box", background: "none", height: "1.4375em", margin: 0, WebkitTapHighlightColor: "transparent", display: "block", minWidth: 0, width: "100%", animationName: "mui-auto-fill-cancel", animationDuration: "10ms", "&::-webkit-input-placeholder": i, "&::-moz-placeholder": i, "&:-ms-input-placeholder": i, "&::-ms-input-placeholder": i, "&:focus": { outline: 0 }, "&:invalid": { boxShadow: "none" }, "&::-webkit-search-decoration": { WebkitAppearance: "none" } }), (0, a.Z)(t, "label[data-shrink=false] + .".concat(Q.formControl, " &"), { "&::-webkit-input-placeholder": l, "&::-moz-placeholder": l, "&:-ms-input-placeholder": l, "&::-ms-input-placeholder": l, "&:focus::-webkit-input-placeholder": s, "&:focus::-moz-placeholder": s, "&:focus:-ms-input-placeholder": s, "&:focus::-ms-input-placeholder": s }), (0, a.Z)(t, "&.".concat(Q.disabled), { opacity: 1, WebkitTextFillColor: (n.vars || n).palette.text.disabled }), (0, a.Z)(t, "&:-webkit-autofill", { animationDuration: "5000s", animationName: "mui-auto-fill" }), t), "small" === r.size && { paddingTop: 1 }, r.multiline && { height: "auto", resize: "none", padding: 0, paddingTop: 0 }, "search" === r.type && { MozAppearance: "textfield" });
        }),
        ne = (0, b.jsx)(H, {
          styles: {
            "@keyframes mui-auto-fill": { from: { display: "block" } },
            "@keyframes mui-auto-fill-cancel": { from: { display: "block" } },
          },
        }),
        re = e.forwardRef(function (t, n) {
          var r = (0, j.Z)({ props: t, name: "MuiInputBase" }),
            o = r["aria-describedby"],
            a = r.autoComplete,
            l = r.autoFocus,
            s = r.className,
            f = r.components,
            m = void 0 === f ? {} : f,
            v = r.componentsProps,
            g = void 0 === v ? {} : v,
            y = r.defaultValue,
            x = r.disabled,
            w = r.disableInjectingGlobalStyles,
            k = r.endAdornment,
            S = r.fullWidth,
            Z = void 0 !== S && S,
            T = r.id,
            L = r.inputComponent,
            _ = void 0 === L ? "input" : L,
            A = r.inputProps,
            F = void 0 === A ? {} : A,
            I = r.inputRef,
            D = r.maxRows,
            W = r.minRows,
            B = r.multiline,
            V = void 0 !== B && B,
            H = r.name,
            U = r.onBlur,
            q = r.onChange,
            K = r.onClick,
            Q = r.onFocus,
            X = r.onKeyDown,
            J = r.onKeyUp,
            re = r.placeholder,
            oe = r.readOnly,
            ie = r.renderSuffix,
            ae = r.rows,
            le = r.startAdornment,
            se = r.type,
            ue = void 0 === se ? "text" : se,
            ce = r.value,
            de = (0, u.Z)(r, Y),
            fe = null != F.value ? F.value : ce,
            pe = e.useRef(null != fe).current,
            he = e.useRef(),
            me = e.useCallback(function (e) {
              0;
            }, []),
            ve = (0, z.Z)(F.ref, me),
            ge = (0, z.Z)(I, ve),
            ye = (0, z.Z)(he, ge),
            be = e.useState(!1),
            xe = (0, i.Z)(be, 2),
            we = xe[0],
            ke = xe[1],
            Se = R();
          var Ze = P({
            props: r,
            muiFormControl: Se,
            states: [
              "color",
              "disabled",
              "error",
              "hiddenLabel",
              "size",
              "required",
              "filled",
            ],
          });
          (Ze.focused = Se ? Se.focused : we),
            e.useEffect(
              function () {
                !Se && x && we && (ke(!1), U && U());
              },
              [Se, x, we, U]
            );
          var Ee = Se && Se.onFilled,
            Ce = Se && Se.onEmpty,
            Pe = e.useCallback(
              function (e) {
                $(e) ? Ee && Ee() : Ce && Ce();
              },
              [Ee, Ce]
            );
          (0, N.Z)(
            function () {
              pe && Pe({ value: fe });
            },
            [fe, Pe, pe]
          );
          e.useEffect(function () {
            Pe(he.current);
          }, []);
          var Me = _,
            Re = F;
          V &&
            "input" === Me &&
            ((Re = ae
              ? (0, c.Z)({ type: void 0, minRows: ae, maxRows: ae }, Re)
              : (0, c.Z)({ type: void 0, maxRows: D, minRows: W }, Re)),
            (Me = E));
          e.useEffect(
            function () {
              Se && Se.setAdornedStart(Boolean(le));
            },
            [Se, le]
          );
          var Te = (0, c.Z)({}, r, {
              color: Ze.color || "primary",
              disabled: Ze.disabled,
              endAdornment: k,
              error: Ze.error,
              focused: Ze.focused,
              formControl: Se,
              fullWidth: Z,
              hiddenLabel: Ze.hiddenLabel,
              multiline: V,
              size: Ze.size,
              startAdornment: le,
              type: ue,
            }),
            je = (function (e) {
              var t = e.classes,
                n = e.color,
                r = e.disabled,
                o = e.error,
                i = e.endAdornment,
                a = e.focused,
                l = e.formControl,
                s = e.fullWidth,
                u = e.hiddenLabel,
                c = e.multiline,
                f = e.readOnly,
                p = e.size,
                h = e.startAdornment,
                m = e.type,
                v = {
                  root: [
                    "root",
                    "color".concat((0, O.Z)(n)),
                    r && "disabled",
                    o && "error",
                    s && "fullWidth",
                    a && "focused",
                    l && "formControl",
                    "small" === p && "sizeSmall",
                    c && "multiline",
                    h && "adornedStart",
                    i && "adornedEnd",
                    u && "hiddenLabel",
                    f && "readOnly",
                  ],
                  input: [
                    "input",
                    r && "disabled",
                    "search" === m && "inputTypeSearch",
                    c && "inputMultiline",
                    "small" === p && "inputSizeSmall",
                    u && "inputHiddenLabel",
                    h && "inputAdornedStart",
                    i && "inputAdornedEnd",
                    f && "readOnly",
                  ],
                };
              return (0, d.Z)(v, G, t);
            })(Te),
            Oe = m.Root || ee,
            ze = g.root || {},
            Ne = m.Input || te;
          return (
            (Re = (0, c.Z)({}, Re, g.input)),
            (0, b.jsxs)(e.Fragment, {
              children: [
                !w && ne,
                (0, b.jsxs)(
                  Oe,
                  (0, c.Z)(
                    {},
                    ze,
                    !C(Oe) && { ownerState: (0, c.Z)({}, Te, ze.ownerState) },
                    {
                      ref: n,
                      onClick: function (e) {
                        he.current &&
                          e.currentTarget === e.target &&
                          he.current.focus(),
                          K && K(e);
                      },
                    },
                    de,
                    {
                      className: (0, h.Z)(je.root, ze.className, s),
                      children: [
                        le,
                        (0, b.jsx)(M.Provider, {
                          value: null,
                          children: (0, b.jsx)(
                            Ne,
                            (0, c.Z)(
                              {
                                ownerState: Te,
                                "aria-invalid": Ze.error,
                                "aria-describedby": o,
                                autoComplete: a,
                                autoFocus: l,
                                defaultValue: y,
                                disabled: Ze.disabled,
                                id: T,
                                onAnimationStart: function (e) {
                                  Pe(
                                    "mui-auto-fill-cancel" === e.animationName
                                      ? he.current
                                      : { value: "x" }
                                  );
                                },
                                name: H,
                                placeholder: re,
                                readOnly: oe,
                                required: Ze.required,
                                rows: ae,
                                value: fe,
                                onKeyDown: X,
                                onKeyUp: J,
                                type: ue,
                              },
                              Re,
                              !C(Ne) && {
                                as: Me,
                                ownerState: (0, c.Z)({}, Te, Re.ownerState),
                              },
                              {
                                ref: ye,
                                className: (0, h.Z)(je.input, Re.className),
                                onBlur: function (e) {
                                  U && U(e),
                                    F.onBlur && F.onBlur(e),
                                    Se && Se.onBlur ? Se.onBlur(e) : ke(!1);
                                },
                                onChange: function (e) {
                                  if (!pe) {
                                    var t = e.target || he.current;
                                    if (null == t) throw new Error((0, p.Z)(1));
                                    Pe({ value: t.value });
                                  }
                                  for (
                                    var n = arguments.length,
                                      r = new Array(n > 1 ? n - 1 : 0),
                                      o = 1;
                                    o < n;
                                    o++
                                  )
                                    r[o - 1] = arguments[o];
                                  F.onChange &&
                                    F.onChange.apply(F, [e].concat(r)),
                                    q && q.apply(void 0, [e].concat(r));
                                },
                                onFocus: function (e) {
                                  Ze.disabled
                                    ? e.stopPropagation()
                                    : (Q && Q(e),
                                      F.onFocus && F.onFocus(e),
                                      Se && Se.onFocus
                                        ? Se.onFocus(e)
                                        : ke(!0));
                                },
                              }
                            )
                          ),
                        }),
                        k,
                        ie
                          ? ie((0, c.Z)({}, Ze, { startAdornment: le }))
                          : null,
                      ],
                    }
                  )
                ),
              ],
            })
          );
        }),
        oe = re;
      function ie(e) {
        return (0, q.Z)("MuiInput", e);
      }
      var ae = (0, c.Z)(
          {},
          Q,
          (0, K.Z)("MuiInput", ["root", "underline", "input"])
        ),
        le = [
          "disableUnderline",
          "components",
          "componentsProps",
          "fullWidth",
          "inputComponent",
          "multiline",
          "type",
        ],
        se = (0, T.ZP)(ee, {
          shouldForwardProp: function (e) {
            return (0, T.FO)(e) || "classes" === e;
          },
          name: "MuiInput",
          slot: "Root",
          overridesResolver: function (e, t) {
            var n = e.ownerState;
            return [].concat((0, o.Z)(X(e, t)), [
              !n.disableUnderline && t.underline,
            ]);
          },
        })(function (e) {
          var t,
            n = e.theme,
            r = e.ownerState,
            o =
              "light" === n.palette.mode
                ? "rgba(0, 0, 0, 0.42)"
                : "rgba(255, 255, 255, 0.7)";
          return (
            n.vars &&
              (o = "rgba("
                .concat(n.vars.palette.common.onBackgroundChannel, " / ")
                .concat(n.vars.opacity.inputUnderline, ")")),
            (0, c.Z)(
              { position: "relative" },
              r.formControl && { "label + &": { marginTop: 16 } },
              !r.disableUnderline &&
                ((t = {
                  "&:after": {
                    borderBottom: "2px solid ".concat(
                      (n.vars || n).palette[r.color].main
                    ),
                    left: 0,
                    bottom: 0,
                    content: '""',
                    position: "absolute",
                    right: 0,
                    transform: "scaleX(0)",
                    transition: n.transitions.create("transform", {
                      duration: n.transitions.duration.shorter,
                      easing: n.transitions.easing.easeOut,
                    }),
                    pointerEvents: "none",
                  },
                }),
                (0, a.Z)(t, "&.".concat(ae.focused, ":after"), {
                  transform: "scaleX(1) translateX(0)",
                }),
                (0, a.Z)(t, "&.".concat(ae.error, ":after"), {
                  borderBottomColor: (n.vars || n).palette.error.main,
                  transform: "scaleX(1)",
                }),
                (0, a.Z)(t, "&:before", {
                  borderBottom: "1px solid ".concat(o),
                  left: 0,
                  bottom: 0,
                  content: '"\\00a0"',
                  position: "absolute",
                  right: 0,
                  transition: n.transitions.create("border-bottom-color", {
                    duration: n.transitions.duration.shorter,
                  }),
                  pointerEvents: "none",
                }),
                (0, a.Z)(t, "&:hover:not(.".concat(ae.disabled, "):before"), {
                  borderBottom: "2px solid ".concat(
                    (n.vars || n).palette.text.primary
                  ),
                  "@media (hover: none)": {
                    borderBottom: "1px solid ".concat(o),
                  },
                }),
                (0, a.Z)(t, "&.".concat(ae.disabled, ":before"), {
                  borderBottomStyle: "dotted",
                }),
                t)
            )
          );
        }),
        ue = (0, T.ZP)(te, {
          name: "MuiInput",
          slot: "Input",
          overridesResolver: J,
        })({}),
        ce = e.forwardRef(function (e, t) {
          var n = (0, j.Z)({ props: e, name: "MuiInput" }),
            r = n.disableUnderline,
            o = n.components,
            i = void 0 === o ? {} : o,
            a = n.componentsProps,
            l = n.fullWidth,
            s = void 0 !== l && l,
            p = n.inputComponent,
            h = void 0 === p ? "input" : p,
            m = n.multiline,
            v = void 0 !== m && m,
            g = n.type,
            y = void 0 === g ? "text" : g,
            x = (0, u.Z)(n, le),
            w = (function (e) {
              var t = e.classes,
                n = {
                  root: ["root", !e.disableUnderline && "underline"],
                  input: ["input"],
                },
                r = (0, d.Z)(n, ie, t);
              return (0, c.Z)({}, t, r);
            })(n),
            k = { root: { ownerState: { disableUnderline: r } } },
            S = a ? (0, f.Z)(a, k) : k;
          return (0,
          b.jsx)(oe, (0, c.Z)({ components: (0, c.Z)({ Root: se, Input: ue }, i), componentsProps: S, fullWidth: s, inputComponent: h, multiline: v, ref: t, type: y }, x, { classes: w }));
        });
      ce.muiName = "Input";
      var de = ce,
        fe = n(5735),
        pe = n(2065),
        he = n(9511),
        me = n(2763);
      function ve(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      function ge(e, t) {
        return (
          (ge = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          ge(e, t)
        );
      }
      function ye(e, t) {
        (e.prototype = Object.create(t.prototype)),
          (e.prototype.constructor = e),
          ge(e, t);
      }
      var be = e.createContext(null);
      function xe(t, n) {
        var r = Object.create(null);
        return (
          t &&
            e.Children.map(t, function (e) {
              return e;
            }).forEach(function (t) {
              r[t.key] = (function (t) {
                return n && (0, e.isValidElement)(t) ? n(t) : t;
              })(t);
            }),
          r
        );
      }
      function we(e, t, n) {
        return null != n[t] ? n[t] : e.props[t];
      }
      function ke(t, n, r) {
        var o = xe(t.children),
          i = (function (e, t) {
            function n(n) {
              return n in t ? t[n] : e[n];
            }
            (e = e || {}), (t = t || {});
            var r,
              o = Object.create(null),
              i = [];
            for (var a in e)
              a in t ? i.length && ((o[a] = i), (i = [])) : i.push(a);
            var l = {};
            for (var s in t) {
              if (o[s])
                for (r = 0; r < o[s].length; r++) {
                  var u = o[s][r];
                  l[o[s][r]] = n(u);
                }
              l[s] = n(s);
            }
            for (r = 0; r < i.length; r++) l[i[r]] = n(i[r]);
            return l;
          })(n, o);
        return (
          Object.keys(i).forEach(function (a) {
            var l = i[a];
            if ((0, e.isValidElement)(l)) {
              var s = a in n,
                u = a in o,
                c = n[a],
                d = (0, e.isValidElement)(c) && !c.props.in;
              !u || (s && !d)
                ? u || !s || d
                  ? u &&
                    s &&
                    (0, e.isValidElement)(c) &&
                    (i[a] = (0, e.cloneElement)(l, {
                      onExited: r.bind(null, l),
                      in: c.props.in,
                      exit: we(l, "exit", t),
                      enter: we(l, "enter", t),
                    }))
                  : (i[a] = (0, e.cloneElement)(l, { in: !1 }))
                : (i[a] = (0, e.cloneElement)(l, {
                    onExited: r.bind(null, l),
                    in: !0,
                    exit: we(l, "exit", t),
                    enter: we(l, "enter", t),
                  }));
            }
          }),
          i
        );
      }
      var Se =
          Object.values ||
          function (e) {
            return Object.keys(e).map(function (t) {
              return e[t];
            });
          },
        Ze = (function (t) {
          function n(e, n) {
            var r,
              o = (r = t.call(this, e, n) || this).handleExited.bind(
                (function (e) {
                  if (void 0 === e)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return e;
                })(r)
              );
            return (
              (r.state = {
                contextValue: { isMounting: !0 },
                handleExited: o,
                firstRender: !0,
              }),
              r
            );
          }
          ye(n, t);
          var r = n.prototype;
          return (
            (r.componentDidMount = function () {
              (this.mounted = !0),
                this.setState({ contextValue: { isMounting: !1 } });
            }),
            (r.componentWillUnmount = function () {
              this.mounted = !1;
            }),
            (n.getDerivedStateFromProps = function (t, n) {
              var r,
                o,
                i = n.children,
                a = n.handleExited;
              return {
                children: n.firstRender
                  ? ((r = t),
                    (o = a),
                    xe(r.children, function (t) {
                      return (0,
                      e.cloneElement)(t, { onExited: o.bind(null, t), in: !0, appear: we(t, "appear", r), enter: we(t, "enter", r), exit: we(t, "exit", r) });
                    }))
                  : ke(t, i, a),
                firstRender: !1,
              };
            }),
            (r.handleExited = function (e, t) {
              var n = xe(this.props.children);
              e.key in n ||
                (e.props.onExited && e.props.onExited(t),
                this.mounted &&
                  this.setState(function (t) {
                    var n = (0, c.Z)({}, t.children);
                    return delete n[e.key], { children: n };
                  }));
            }),
            (r.render = function () {
              var t = this.props,
                n = t.component,
                r = t.childFactory,
                o = (0, u.Z)(t, ["component", "childFactory"]),
                i = this.state.contextValue,
                a = Se(this.state.children).map(r);
              return (
                delete o.appear,
                delete o.enter,
                delete o.exit,
                null === n
                  ? e.createElement(be.Provider, { value: i }, a)
                  : e.createElement(
                      be.Provider,
                      { value: i },
                      e.createElement(n, o, a)
                    )
              );
            }),
            n
          );
        })(e.Component);
      (Ze.propTypes = {}),
        (Ze.defaultProps = {
          component: "div",
          childFactory: function (e) {
            return e;
          },
        });
      var Ee = Ze;
      var Ce = function (t) {
        var n = t.className,
          r = t.classes,
          o = t.pulsate,
          a = void 0 !== o && o,
          l = t.rippleX,
          s = t.rippleY,
          u = t.rippleSize,
          c = t.in,
          d = t.onExited,
          f = t.timeout,
          p = e.useState(!1),
          m = (0, i.Z)(p, 2),
          v = m[0],
          g = m[1],
          y = (0, h.Z)(n, r.ripple, r.rippleVisible, a && r.ripplePulsate),
          x = { width: u, height: u, top: -u / 2 + s, left: -u / 2 + l },
          w = (0, h.Z)(r.child, v && r.childLeaving, a && r.childPulsate);
        return (
          c || v || g(!0),
          e.useEffect(
            function () {
              if (!c && null != d) {
                var e = setTimeout(d, f);
                return function () {
                  clearTimeout(e);
                };
              }
            },
            [d, c, f]
          ),
          (0, b.jsx)("span", {
            className: y,
            style: x,
            children: (0, b.jsx)("span", { className: w }),
          })
        );
      };
      var Pe,
        Me,
        Re,
        Te,
        je,
        Oe,
        ze,
        Ne,
        Le = (0, K.Z)("MuiTouchRipple", [
          "root",
          "ripple",
          "rippleVisible",
          "ripplePulsate",
          "child",
          "childLeaving",
          "childPulsate",
        ]),
        _e = ["center", "classes", "className"],
        Ae = W(
          je ||
            (je =
              Pe ||
              (Pe = ve([
                "\n  0% {\n    transform: scale(0);\n    opacity: 0.1;\n  }\n\n  100% {\n    transform: scale(1);\n    opacity: 0.3;\n  }\n",
              ])))
        ),
        Fe = W(
          Oe ||
            (Oe =
              Me ||
              (Me = ve([
                "\n  0% {\n    opacity: 1;\n  }\n\n  100% {\n    opacity: 0;\n  }\n",
              ])))
        ),
        Ie = W(
          ze ||
            (ze =
              Re ||
              (Re = ve([
                "\n  0% {\n    transform: scale(1);\n  }\n\n  50% {\n    transform: scale(0.92);\n  }\n\n  100% {\n    transform: scale(1);\n  }\n",
              ])))
        ),
        De = (0, T.ZP)("span", { name: "MuiTouchRipple", slot: "Root" })({
          overflow: "hidden",
          pointerEvents: "none",
          position: "absolute",
          zIndex: 0,
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          borderRadius: "inherit",
        }),
        We = (0, T.ZP)(Ce, { name: "MuiTouchRipple", slot: "Ripple" })(
          Ne ||
            (Ne =
              Te ||
              (Te = ve([
                "\n  opacity: 0;\n  position: absolute;\n\n  &.",
                " {\n    opacity: 0.3;\n    transform: scale(1);\n    animation-name: ",
                ";\n    animation-duration: ",
                "ms;\n    animation-timing-function: ",
                ";\n  }\n\n  &.",
                " {\n    animation-duration: ",
                "ms;\n  }\n\n  & .",
                " {\n    opacity: 1;\n    display: block;\n    width: 100%;\n    height: 100%;\n    border-radius: 50%;\n    background-color: currentColor;\n  }\n\n  & .",
                " {\n    opacity: 0;\n    animation-name: ",
                ";\n    animation-duration: ",
                "ms;\n    animation-timing-function: ",
                ";\n  }\n\n  & .",
                " {\n    position: absolute;\n    /* @noflip */\n    left: 0px;\n    top: 0;\n    animation-name: ",
                ";\n    animation-duration: 2500ms;\n    animation-timing-function: ",
                ";\n    animation-iteration-count: infinite;\n    animation-delay: 200ms;\n  }\n",
              ]))),
          Le.rippleVisible,
          Ae,
          550,
          function (e) {
            return e.theme.transitions.easing.easeInOut;
          },
          Le.ripplePulsate,
          function (e) {
            return e.theme.transitions.duration.shorter;
          },
          Le.child,
          Le.childLeaving,
          Fe,
          550,
          function (e) {
            return e.theme.transitions.easing.easeInOut;
          },
          Le.childPulsate,
          Ie,
          function (e) {
            return e.theme.transitions.easing.easeInOut;
          }
        ),
        Be = e.forwardRef(function (t, n) {
          var r = (0, j.Z)({ props: t, name: "MuiTouchRipple" }),
            a = r.center,
            l = void 0 !== a && a,
            s = r.classes,
            d = void 0 === s ? {} : s,
            f = r.className,
            p = (0, u.Z)(r, _e),
            m = e.useState([]),
            v = (0, i.Z)(m, 2),
            g = v[0],
            y = v[1],
            x = e.useRef(0),
            w = e.useRef(null);
          e.useEffect(
            function () {
              w.current && (w.current(), (w.current = null));
            },
            [g]
          );
          var k = e.useRef(!1),
            S = e.useRef(null),
            Z = e.useRef(null),
            E = e.useRef(null);
          e.useEffect(function () {
            return function () {
              clearTimeout(S.current);
            };
          }, []);
          var C = e.useCallback(
              function (e) {
                var t = e.pulsate,
                  n = e.rippleX,
                  r = e.rippleY,
                  i = e.rippleSize,
                  a = e.cb;
                y(function (e) {
                  return [].concat((0, o.Z)(e), [
                    (0, b.jsx)(
                      We,
                      {
                        classes: {
                          ripple: (0, h.Z)(d.ripple, Le.ripple),
                          rippleVisible: (0, h.Z)(
                            d.rippleVisible,
                            Le.rippleVisible
                          ),
                          ripplePulsate: (0, h.Z)(
                            d.ripplePulsate,
                            Le.ripplePulsate
                          ),
                          child: (0, h.Z)(d.child, Le.child),
                          childLeaving: (0, h.Z)(
                            d.childLeaving,
                            Le.childLeaving
                          ),
                          childPulsate: (0, h.Z)(
                            d.childPulsate,
                            Le.childPulsate
                          ),
                        },
                        timeout: 550,
                        pulsate: t,
                        rippleX: n,
                        rippleY: r,
                        rippleSize: i,
                      },
                      x.current
                    ),
                  ]);
                }),
                  (x.current += 1),
                  (w.current = a);
              },
              [d]
            ),
            P = e.useCallback(
              function () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  n = arguments.length > 2 ? arguments[2] : void 0,
                  r = t.pulsate,
                  o = void 0 !== r && r,
                  i = t.center,
                  a = void 0 === i ? l || t.pulsate : i,
                  s = t.fakeElement,
                  u = void 0 !== s && s;
                if ("mousedown" === (null == e ? void 0 : e.type) && k.current)
                  k.current = !1;
                else {
                  "touchstart" === (null == e ? void 0 : e.type) &&
                    (k.current = !0);
                  var c,
                    d,
                    f,
                    p = u ? null : E.current,
                    h = p
                      ? p.getBoundingClientRect()
                      : { width: 0, height: 0, left: 0, top: 0 };
                  if (
                    a ||
                    void 0 === e ||
                    (0 === e.clientX && 0 === e.clientY) ||
                    (!e.clientX && !e.touches)
                  )
                    (c = Math.round(h.width / 2)),
                      (d = Math.round(h.height / 2));
                  else {
                    var m =
                        e.touches && e.touches.length > 0 ? e.touches[0] : e,
                      v = m.clientX,
                      g = m.clientY;
                    (c = Math.round(v - h.left)), (d = Math.round(g - h.top));
                  }
                  if (a)
                    (f = Math.sqrt(
                      (2 * Math.pow(h.width, 2) + Math.pow(h.height, 2)) / 3
                    )) %
                      2 ===
                      0 && (f += 1);
                  else {
                    var y =
                        2 * Math.max(Math.abs((p ? p.clientWidth : 0) - c), c) +
                        2,
                      b =
                        2 *
                          Math.max(Math.abs((p ? p.clientHeight : 0) - d), d) +
                        2;
                    f = Math.sqrt(Math.pow(y, 2) + Math.pow(b, 2));
                  }
                  null != e && e.touches
                    ? null === Z.current &&
                      ((Z.current = function () {
                        C({
                          pulsate: o,
                          rippleX: c,
                          rippleY: d,
                          rippleSize: f,
                          cb: n,
                        });
                      }),
                      (S.current = setTimeout(function () {
                        Z.current && (Z.current(), (Z.current = null));
                      }, 80)))
                    : C({
                        pulsate: o,
                        rippleX: c,
                        rippleY: d,
                        rippleSize: f,
                        cb: n,
                      });
                }
              },
              [l, C]
            ),
            M = e.useCallback(
              function () {
                P({}, { pulsate: !0 });
              },
              [P]
            ),
            R = e.useCallback(function (e, t) {
              if (
                (clearTimeout(S.current),
                "touchend" === (null == e ? void 0 : e.type) && Z.current)
              )
                return (
                  Z.current(),
                  (Z.current = null),
                  void (S.current = setTimeout(function () {
                    R(e, t);
                  }))
                );
              (Z.current = null),
                y(function (e) {
                  return e.length > 0 ? e.slice(1) : e;
                }),
                (w.current = t);
            }, []);
          return (
            e.useImperativeHandle(
              n,
              function () {
                return { pulsate: M, start: P, stop: R };
              },
              [M, P, R]
            ),
            (0, b.jsx)(
              De,
              (0, c.Z)({ className: (0, h.Z)(Le.root, d.root, f), ref: E }, p, {
                children: (0, b.jsx)(Ee, {
                  component: null,
                  exit: !0,
                  children: g,
                }),
              })
            )
          );
        }),
        Ve = Be;
      function He(e) {
        return (0, q.Z)("MuiButtonBase", e);
      }
      var Ue,
        $e = (0, K.Z)("MuiButtonBase", ["root", "disabled", "focusVisible"]),
        qe = [
          "action",
          "centerRipple",
          "children",
          "className",
          "component",
          "disabled",
          "disableRipple",
          "disableTouchRipple",
          "focusRipple",
          "focusVisibleClassName",
          "LinkComponent",
          "onBlur",
          "onClick",
          "onContextMenu",
          "onDragLeave",
          "onFocus",
          "onFocusVisible",
          "onKeyDown",
          "onKeyUp",
          "onMouseDown",
          "onMouseLeave",
          "onMouseUp",
          "onTouchEnd",
          "onTouchMove",
          "onTouchStart",
          "tabIndex",
          "TouchRippleProps",
          "touchRippleRef",
          "type",
        ],
        Ke = (0, T.ZP)("button", {
          name: "MuiButtonBase",
          slot: "Root",
          overridesResolver: function (e, t) {
            return t.root;
          },
        })(
          ((Ue = {
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            boxSizing: "border-box",
            WebkitTapHighlightColor: "transparent",
            backgroundColor: "transparent",
            outline: 0,
            border: 0,
            margin: 0,
            borderRadius: 0,
            padding: 0,
            cursor: "pointer",
            userSelect: "none",
            verticalAlign: "middle",
            MozAppearance: "none",
            WebkitAppearance: "none",
            textDecoration: "none",
            color: "inherit",
            "&::-moz-focus-inner": { borderStyle: "none" },
          }),
          (0, a.Z)(Ue, "&.".concat($e.disabled), {
            pointerEvents: "none",
            cursor: "default",
          }),
          (0, a.Z)(Ue, "@media print", { colorAdjust: "exact" }),
          Ue)
        ),
        Ge = e.forwardRef(function (t, n) {
          var r = (0, j.Z)({ props: t, name: "MuiButtonBase" }),
            o = r.action,
            a = r.centerRipple,
            l = void 0 !== a && a,
            s = r.children,
            f = r.className,
            p = r.component,
            m = void 0 === p ? "button" : p,
            v = r.disabled,
            g = void 0 !== v && v,
            y = r.disableRipple,
            x = void 0 !== y && y,
            w = r.disableTouchRipple,
            k = void 0 !== w && w,
            S = r.focusRipple,
            Z = void 0 !== S && S,
            E = r.LinkComponent,
            C = void 0 === E ? "a" : E,
            P = r.onBlur,
            M = r.onClick,
            R = r.onContextMenu,
            T = r.onDragLeave,
            O = r.onFocus,
            N = r.onFocusVisible,
            L = r.onKeyDown,
            _ = r.onKeyUp,
            A = r.onMouseDown,
            F = r.onMouseLeave,
            I = r.onMouseUp,
            D = r.onTouchEnd,
            W = r.onTouchMove,
            B = r.onTouchStart,
            V = r.tabIndex,
            H = void 0 === V ? 0 : V,
            U = r.TouchRippleProps,
            $ = r.touchRippleRef,
            q = r.type,
            K = (0, u.Z)(r, qe),
            G = e.useRef(null),
            Q = e.useRef(null),
            Y = (0, z.Z)(Q, $),
            X = (0, me.Z)(),
            J = X.isFocusVisibleRef,
            ee = X.onFocus,
            te = X.onBlur,
            ne = X.ref,
            re = e.useState(!1),
            oe = (0, i.Z)(re, 2),
            ie = oe[0],
            ae = oe[1];
          g && ie && ae(!1),
            e.useImperativeHandle(
              o,
              function () {
                return {
                  focusVisible: function () {
                    ae(!0), G.current.focus();
                  },
                };
              },
              []
            );
          var le = e.useState(!1),
            se = (0, i.Z)(le, 2),
            ue = se[0],
            ce = se[1];
          e.useEffect(function () {
            ce(!0);
          }, []);
          var de = ue && !x && !g;
          function fe(e, t) {
            var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : k;
            return (0, he.Z)(function (r) {
              return t && t(r), !n && Q.current && Q.current[e](r), !0;
            });
          }
          e.useEffect(
            function () {
              ie && Z && !x && ue && Q.current.pulsate();
            },
            [x, Z, ie, ue]
          );
          var pe = fe("start", A),
            ve = fe("stop", R),
            ge = fe("stop", T),
            ye = fe("stop", I),
            be = fe("stop", function (e) {
              ie && e.preventDefault(), F && F(e);
            }),
            xe = fe("start", B),
            we = fe("stop", D),
            ke = fe("stop", W),
            Se = fe(
              "stop",
              function (e) {
                te(e), !1 === J.current && ae(!1), P && P(e);
              },
              !1
            ),
            Ze = (0, he.Z)(function (e) {
              G.current || (G.current = e.currentTarget),
                ee(e),
                !0 === J.current && (ae(!0), N && N(e)),
                O && O(e);
            }),
            Ee = function () {
              var e = G.current;
              return m && "button" !== m && !("A" === e.tagName && e.href);
            },
            Ce = e.useRef(!1),
            Pe = (0, he.Z)(function (e) {
              Z &&
                !Ce.current &&
                ie &&
                Q.current &&
                " " === e.key &&
                ((Ce.current = !0),
                Q.current.stop(e, function () {
                  Q.current.start(e);
                })),
                e.target === e.currentTarget &&
                  Ee() &&
                  " " === e.key &&
                  e.preventDefault(),
                L && L(e),
                e.target === e.currentTarget &&
                  Ee() &&
                  "Enter" === e.key &&
                  !g &&
                  (e.preventDefault(), M && M(e));
            }),
            Me = (0, he.Z)(function (e) {
              Z &&
                " " === e.key &&
                Q.current &&
                ie &&
                !e.defaultPrevented &&
                ((Ce.current = !1),
                Q.current.stop(e, function () {
                  Q.current.pulsate(e);
                })),
                _ && _(e),
                M &&
                  e.target === e.currentTarget &&
                  Ee() &&
                  " " === e.key &&
                  !e.defaultPrevented &&
                  M(e);
            }),
            Re = m;
          "button" === Re && (K.href || K.to) && (Re = C);
          var Te = {};
          "button" === Re
            ? ((Te.type = void 0 === q ? "button" : q), (Te.disabled = g))
            : (K.href || K.to || (Te.role = "button"),
              g && (Te["aria-disabled"] = g));
          var je = (0, z.Z)(ne, G),
            Oe = (0, z.Z)(n, je);
          var ze = (0, c.Z)({}, r, {
              centerRipple: l,
              component: m,
              disabled: g,
              disableRipple: x,
              disableTouchRipple: k,
              focusRipple: Z,
              tabIndex: H,
              focusVisible: ie,
            }),
            Ne = (function (e) {
              var t = e.disabled,
                n = e.focusVisible,
                r = e.focusVisibleClassName,
                o = e.classes,
                i = { root: ["root", t && "disabled", n && "focusVisible"] },
                a = (0, d.Z)(i, He, o);
              return n && r && (a.root += " ".concat(r)), a;
            })(ze);
          return (0,
          b.jsxs)(Ke, (0, c.Z)({ as: Re, className: (0, h.Z)(Ne.root, f), ownerState: ze, onBlur: Se, onClick: M, onContextMenu: ve, onFocus: Ze, onKeyDown: Pe, onKeyUp: Me, onMouseDown: pe, onMouseLeave: be, onMouseUp: ye, onDragLeave: ge, onTouchEnd: we, onTouchMove: ke, onTouchStart: xe, ref: Oe, tabIndex: g ? -1 : H, type: q }, Te, K, { children: [s, de ? (0, b.jsx)(Ve, (0, c.Z)({ ref: Y, center: l }, U)) : null] }));
        }),
        Qe = Ge;
      function Ye(e) {
        return (0, q.Z)("MuiButton", e);
      }
      var Xe = (0, K.Z)("MuiButton", [
        "root",
        "text",
        "textInherit",
        "textPrimary",
        "textSecondary",
        "textSuccess",
        "textError",
        "textInfo",
        "textWarning",
        "outlined",
        "outlinedInherit",
        "outlinedPrimary",
        "outlinedSecondary",
        "outlinedSuccess",
        "outlinedError",
        "outlinedInfo",
        "outlinedWarning",
        "contained",
        "containedInherit",
        "containedPrimary",
        "containedSecondary",
        "containedSuccess",
        "containedError",
        "containedInfo",
        "containedWarning",
        "disableElevation",
        "focusVisible",
        "disabled",
        "colorInherit",
        "textSizeSmall",
        "textSizeMedium",
        "textSizeLarge",
        "outlinedSizeSmall",
        "outlinedSizeMedium",
        "outlinedSizeLarge",
        "containedSizeSmall",
        "containedSizeMedium",
        "containedSizeLarge",
        "sizeMedium",
        "sizeSmall",
        "sizeLarge",
        "fullWidth",
        "startIcon",
        "endIcon",
        "iconSizeSmall",
        "iconSizeMedium",
        "iconSizeLarge",
      ]);
      var Je = e.createContext({}),
        et = [
          "children",
          "color",
          "component",
          "className",
          "disabled",
          "disableElevation",
          "disableFocusRipple",
          "endIcon",
          "focusVisibleClassName",
          "fullWidth",
          "size",
          "startIcon",
          "type",
          "variant",
        ],
        tt = function (e) {
          return (0, c.Z)(
            {},
            "small" === e.size && { "& > *:nth-of-type(1)": { fontSize: 18 } },
            "medium" === e.size && { "& > *:nth-of-type(1)": { fontSize: 20 } },
            "large" === e.size && { "& > *:nth-of-type(1)": { fontSize: 22 } }
          );
        },
        nt = (0, T.ZP)(Qe, {
          shouldForwardProp: function (e) {
            return (0, T.FO)(e) || "classes" === e;
          },
          name: "MuiButton",
          slot: "Root",
          overridesResolver: function (e, t) {
            var n = e.ownerState;
            return [
              t.root,
              t[n.variant],
              t["".concat(n.variant).concat((0, O.Z)(n.color))],
              t["size".concat((0, O.Z)(n.size))],
              t["".concat(n.variant, "Size").concat((0, O.Z)(n.size))],
              "inherit" === n.color && t.colorInherit,
              n.disableElevation && t.disableElevation,
              n.fullWidth && t.fullWidth,
            ];
          },
        })(
          function (e) {
            var t,
              n,
              r,
              o = e.theme,
              i = e.ownerState;
            return (0, c.Z)(
              {},
              o.typography.button,
              ((t = {
                minWidth: 64,
                padding: "6px 16px",
                borderRadius: (o.vars || o).shape.borderRadius,
                transition: o.transitions.create(
                  ["background-color", "box-shadow", "border-color", "color"],
                  { duration: o.transitions.duration.short }
                ),
                "&:hover": (0, c.Z)(
                  {
                    textDecoration: "none",
                    backgroundColor: o.vars
                      ? "rgba("
                          .concat(o.vars.palette.text.primaryChannel, " / ")
                          .concat(o.vars.palette.action.hoverOpacity, ")")
                      : (0, pe.Fq)(
                          o.palette.text.primary,
                          o.palette.action.hoverOpacity
                        ),
                    "@media (hover: none)": { backgroundColor: "transparent" },
                  },
                  "text" === i.variant &&
                    "inherit" !== i.color && {
                      backgroundColor: o.vars
                        ? "rgba("
                            .concat(o.vars.palette[i.color].mainChannel, " / ")
                            .concat(o.vars.palette.action.hoverOpacity, ")")
                        : (0, pe.Fq)(
                            o.palette[i.color].main,
                            o.palette.action.hoverOpacity
                          ),
                      "@media (hover: none)": {
                        backgroundColor: "transparent",
                      },
                    },
                  "outlined" === i.variant &&
                    "inherit" !== i.color && {
                      border: "1px solid ".concat(
                        (o.vars || o).palette[i.color].main
                      ),
                      backgroundColor: o.vars
                        ? "rgba("
                            .concat(o.vars.palette[i.color].mainChannel, " / ")
                            .concat(o.vars.palette.action.hoverOpacity, ")")
                        : (0, pe.Fq)(
                            o.palette[i.color].main,
                            o.palette.action.hoverOpacity
                          ),
                      "@media (hover: none)": {
                        backgroundColor: "transparent",
                      },
                    },
                  "contained" === i.variant && {
                    backgroundColor: (o.vars || o).palette.grey.A100,
                    boxShadow: (o.vars || o).shadows[4],
                    "@media (hover: none)": {
                      boxShadow: (o.vars || o).shadows[2],
                      backgroundColor: (o.vars || o).palette.grey[300],
                    },
                  },
                  "contained" === i.variant &&
                    "inherit" !== i.color && {
                      backgroundColor: (o.vars || o).palette[i.color].dark,
                      "@media (hover: none)": {
                        backgroundColor: (o.vars || o).palette[i.color].main,
                      },
                    }
                ),
                "&:active": (0, c.Z)(
                  {},
                  "contained" === i.variant && {
                    boxShadow: (o.vars || o).shadows[8],
                  }
                ),
              }),
              (0, a.Z)(
                t,
                "&.".concat(Xe.focusVisible),
                (0, c.Z)(
                  {},
                  "contained" === i.variant && {
                    boxShadow: (o.vars || o).shadows[6],
                  }
                )
              ),
              (0, a.Z)(
                t,
                "&.".concat(Xe.disabled),
                (0, c.Z)(
                  { color: (o.vars || o).palette.action.disabled },
                  "outlined" === i.variant && {
                    border: "1px solid ".concat(
                      (o.vars || o).palette.action.disabledBackground
                    ),
                  },
                  "outlined" === i.variant &&
                    "secondary" === i.color && {
                      border: "1px solid ".concat(
                        (o.vars || o).palette.action.disabled
                      ),
                    },
                  "contained" === i.variant && {
                    color: (o.vars || o).palette.action.disabled,
                    boxShadow: (o.vars || o).shadows[0],
                    backgroundColor: (o.vars || o).palette.action
                      .disabledBackground,
                  }
                )
              ),
              t),
              "text" === i.variant && { padding: "6px 8px" },
              "text" === i.variant &&
                "inherit" !== i.color && {
                  color: (o.vars || o).palette[i.color].main,
                },
              "outlined" === i.variant && {
                padding: "5px 15px",
                border: "1px solid currentColor",
              },
              "outlined" === i.variant &&
                "inherit" !== i.color && {
                  color: (o.vars || o).palette[i.color].main,
                  border: o.vars
                    ? "1px solid rgba(".concat(
                        o.vars.palette[i.color].mainChannel,
                        " / 0.5)"
                      )
                    : "1px solid ".concat(
                        (0, pe.Fq)(o.palette[i.color].main, 0.5)
                      ),
                },
              "contained" === i.variant && {
                color: o.vars
                  ? o.vars.palette.text.primary
                  : null == (n = (r = o.palette).getContrastText)
                  ? void 0
                  : n.call(r, o.palette.grey[300]),
                backgroundColor: (o.vars || o).palette.grey[300],
                boxShadow: (o.vars || o).shadows[2],
              },
              "contained" === i.variant &&
                "inherit" !== i.color && {
                  color: (o.vars || o).palette[i.color].contrastText,
                  backgroundColor: (o.vars || o).palette[i.color].main,
                },
              "inherit" === i.color && {
                color: "inherit",
                borderColor: "currentColor",
              },
              "small" === i.size &&
                "text" === i.variant && {
                  padding: "4px 5px",
                  fontSize: o.typography.pxToRem(13),
                },
              "large" === i.size &&
                "text" === i.variant && {
                  padding: "8px 11px",
                  fontSize: o.typography.pxToRem(15),
                },
              "small" === i.size &&
                "outlined" === i.variant && {
                  padding: "3px 9px",
                  fontSize: o.typography.pxToRem(13),
                },
              "large" === i.size &&
                "outlined" === i.variant && {
                  padding: "7px 21px",
                  fontSize: o.typography.pxToRem(15),
                },
              "small" === i.size &&
                "contained" === i.variant && {
                  padding: "4px 10px",
                  fontSize: o.typography.pxToRem(13),
                },
              "large" === i.size &&
                "contained" === i.variant && {
                  padding: "8px 22px",
                  fontSize: o.typography.pxToRem(15),
                },
              i.fullWidth && { width: "100%" }
            );
          },
          function (e) {
            var t;
            return (
              e.ownerState.disableElevation &&
              ((t = { boxShadow: "none", "&:hover": { boxShadow: "none" } }),
              (0, a.Z)(t, "&.".concat(Xe.focusVisible), { boxShadow: "none" }),
              (0, a.Z)(t, "&:active", { boxShadow: "none" }),
              (0, a.Z)(t, "&.".concat(Xe.disabled), { boxShadow: "none" }),
              t)
            );
          }
        ),
        rt = (0, T.ZP)("span", {
          name: "MuiButton",
          slot: "StartIcon",
          overridesResolver: function (e, t) {
            var n = e.ownerState;
            return [t.startIcon, t["iconSize".concat((0, O.Z)(n.size))]];
          },
        })(function (e) {
          var t = e.ownerState;
          return (0,
          c.Z)({ display: "inherit", marginRight: 8, marginLeft: -4 }, "small" === t.size && { marginLeft: -2 }, tt(t));
        }),
        ot = (0, T.ZP)("span", {
          name: "MuiButton",
          slot: "EndIcon",
          overridesResolver: function (e, t) {
            var n = e.ownerState;
            return [t.endIcon, t["iconSize".concat((0, O.Z)(n.size))]];
          },
        })(function (e) {
          var t = e.ownerState;
          return (0,
          c.Z)({ display: "inherit", marginRight: -4, marginLeft: 8 }, "small" === t.size && { marginRight: -2 }, tt(t));
        }),
        it = e.forwardRef(function (t, n) {
          var r = e.useContext(Je),
            o = (0, fe.Z)(r, t),
            i = (0, j.Z)({ props: o, name: "MuiButton" }),
            a = i.children,
            l = i.color,
            s = void 0 === l ? "primary" : l,
            f = i.component,
            p = void 0 === f ? "button" : f,
            m = i.className,
            v = i.disabled,
            g = void 0 !== v && v,
            y = i.disableElevation,
            x = void 0 !== y && y,
            w = i.disableFocusRipple,
            k = void 0 !== w && w,
            S = i.endIcon,
            Z = i.focusVisibleClassName,
            E = i.fullWidth,
            C = void 0 !== E && E,
            P = i.size,
            M = void 0 === P ? "medium" : P,
            R = i.startIcon,
            T = i.type,
            z = i.variant,
            N = void 0 === z ? "text" : z,
            L = (0, u.Z)(i, et),
            _ = (0, c.Z)({}, i, {
              color: s,
              component: p,
              disabled: g,
              disableElevation: x,
              disableFocusRipple: k,
              fullWidth: C,
              size: M,
              type: T,
              variant: N,
            }),
            A = (function (e) {
              var t = e.color,
                n = e.disableElevation,
                r = e.fullWidth,
                o = e.size,
                i = e.variant,
                a = e.classes,
                l = {
                  root: [
                    "root",
                    i,
                    "".concat(i).concat((0, O.Z)(t)),
                    "size".concat((0, O.Z)(o)),
                    "".concat(i, "Size").concat((0, O.Z)(o)),
                    "inherit" === t && "colorInherit",
                    n && "disableElevation",
                    r && "fullWidth",
                  ],
                  label: ["label"],
                  startIcon: ["startIcon", "iconSize".concat((0, O.Z)(o))],
                  endIcon: ["endIcon", "iconSize".concat((0, O.Z)(o))],
                },
                s = (0, d.Z)(l, Ye, a);
              return (0, c.Z)({}, a, s);
            })(_),
            F =
              R &&
              (0, b.jsx)(rt, {
                className: A.startIcon,
                ownerState: _,
                children: R,
              }),
            I =
              S &&
              (0, b.jsx)(ot, {
                className: A.endIcon,
                ownerState: _,
                children: S,
              });
          return (0,
          b.jsxs)(nt, (0, c.Z)({ ownerState: _, className: (0, h.Z)(r.className, A.root, m), component: p, disabled: g, focusRipple: !k, focusVisibleClassName: (0, h.Z)(A.focusVisible, Z), ref: n, type: T }, L, { classes: A, children: [F, a, I] }));
        }),
        at = n(3329),
        lt = n(6711),
        st = e.useState,
        ut = e.useEffect,
        ct = {
          nameField: { position: "relative", display: "flex" },
          input: {
            background: "rgba(0, 0, 0, 0)",
            border: "none",
            outline: "none",
            color: "black",
            fontFamily: '"DejaVu Mono", monospace',
          },
          token: { display: "inline", width: "100%", whiteSpace: "nowrap" },
          saveButton: {
            cursor: "pointer",
            padding: "0 0",
            display: "inline",
            color: "white",
            background: "transparent",
            border: "none",
            borderRadius: "2px",
          },
        },
        dt = function (e) {
          var t = e.node,
            n = e.dispatch,
            r = e.edit,
            o = e.submitEdit,
            a = st(t.name),
            l = (0, i.Z)(a, 2),
            u = l[0],
            c = l[1];
          ut(
            function () {
              c(function () {
                return t.name;
              });
            },
            [r, t.name]
          );
          return (0, b.jsx)("div", {
            style: ct.nameField,
            children: r
              ? (0, b.jsxs)("div", {
                  style: { zIndex: 4 },
                  children: [
                    (0, b.jsx)(de, {
                      autoFocus: !0,
                      style: s({}, ct.input),
                      value: u,
                      onChange: function (e) {
                        c(function () {
                          return e.target.value;
                        }),
                          n({
                            type: "input name",
                            address: t.address,
                            input: e.target.value,
                          });
                      },
                      disableUnderline: !0,
                    }),
                    (0, b.jsx)(it, {
                      onClick: function (e) {
                        e.preventDefault(), o();
                      },
                      style: s({}, ct.saveButton),
                      startIcon: (0, b.jsx)(at.Z, {}),
                    }),
                    (0, b.jsx)(it, {
                      onClick: function (e) {
                        e.preventDefault(),
                          n({ type: "edit name", isEditing: !1 });
                      },
                      style: s({}, ct.saveButton),
                      startIcon: (0, b.jsx)(lt.Z, {}),
                    }),
                  ],
                })
              : (0, b.jsx)("p", {
                  style: ct.token,
                  onClick: function (e) {
                    n({ type: "unfocus all" }),
                      n({ type: "focus node", address: t.address });
                  },
                  children: t.name,
                }),
          });
        },
        ft = {
          marginTop: "0.5em",
          background: "rgba(0, 0, 0, 0)",
          border: "none",
          outline: "none",
          color: "white",
          fontFamily: '"DejaVu Mono", monospace',
        },
        pt = {
          width: "1.5em",
          cursor: "pointer",
          padding: "0 0",
          display: "inline",
          alignContent: "center",
          marginLeft: "0.5em",
          color: "white",
          fontWeight: "bold",
          fontSize: "1em",
          backgroundColor: "#282c34",
          border: "none",
          borderRadius: "2px",
          fontFamily: "Segoe UI Symbol",
          background: "transparent",
        },
        ht = function (e) {
          var t = e.node,
            n = e.dispatch,
            r = e.addressMap,
            o = e.submitInsertChild,
            i = e.submitInsertSibling;
          return (0, b.jsx)(b.Fragment, {
            children:
              r.editNode &&
              (0, b.jsxs)("div", {
                children: [
                  (0, b.jsx)(de, {
                    autoFocus: !0,
                    style: s(
                      {
                        marginLeft: "child" === r.insertTarget ? "5em" : "2rem",
                      },
                      ft
                    ),
                    value: r.inputNode,
                    onChange: function (e) {
                      n({
                        type: "input node",
                        address: t.address,
                        input: e.target.value,
                      });
                    },
                    disableUnderline: !0,
                  }),
                  (0, b.jsx)(it, {
                    onClick: function () {
                      "child" === r.insertTarget && o(r.inputNode),
                        "sibling" === r.insertTarget && i(r.inputNode);
                    },
                    style: s({}, pt),
                    startIcon: (0, b.jsx)(at.Z, {}),
                  }),
                  (0, b.jsx)(it, {
                    onClick: function () {
                      n({ type: "edit node", isEditing: !1 });
                    },
                    style: s({}, pt),
                    startIcon: (0, b.jsx)(lt.Z, {}),
                  }),
                ],
              }),
          });
        },
        mt = e.useRef,
        vt = {
          display: "block",
          marginLeft: "3em",
          textAlign: "left",
          transition: "0.3s ease-in",
          whiteSpace: "nowrap",
          cursor: "pointer",
          WebkitTapHighlightColor: "transparent",
        },
        gt = { display: "flex", height: "2em", alignItems: "center" },
        yt = {
          width: "1.5em",
          cursor: "pointer",
          padding: "0 0",
          display: "inline",
          alignContent: "center",
          marginRight: "0.5em",
          color: "white",
          fontWeight: "bold",
          fontSize: "1em",
          backgroundColor: "#282c34",
          border: "none",
          borderRadius: "2px",
          background: "transparent",
        },
        bt = function t(n) {
          var r,
            a = n.node,
            l = n.dispatch,
            u = n.addressMap,
            c = n.isRoot,
            d = n.findFocusIndex,
            f = n.focussed,
            p = n.visible,
            h = n.displayChildren,
            m = mt(null);
          e.useEffect(
            function () {
              -1 !== f &&
                m.current &&
                m.current.scrollIntoView({
                  behavior: "smooth",
                  block: "center",
                  inline: "center",
                });
            },
            [f, a.address, a.index]
          );
          var v = function (e) {
              l(
                e
                  ? {
                      type: "paste node",
                      nodeString: e,
                      node: a,
                      target: "child",
                    }
                  : { type: "edit node", isEditing: !1 }
              );
            },
            g = (0, o.Z)(a.children).map(function (e) {
              var n,
                r = (0, i.Z)(e, 2),
                o = (r[0], r[1]);
              return (0,
              b.jsx)(t, { node: o, isRoot: !1, dispatch: l, addressMap: u, visible: h, displayChildren: null === (n = u.get(o.address.toString())) || void 0 === n ? void 0 : n.display, focussed: d(o.address), findFocusIndex: d }, o.name);
            });
          return (0, b.jsx)(b.Fragment, {
            children:
              p &&
              (0, b.jsxs)("div", {
                style: s(
                  s({}, vt),
                  {},
                  { width: "".concat(a.name.length + 10, "ch") }
                ),
                children: [
                  (0, b.jsxs)("div", {
                    ref: m,
                    style: s(
                      s({}, gt),
                      {},
                      {
                        backgroundColor: f > -1 ? "white" : "",
                        color: c ? "lightgreen" : f > -1 ? "black" : "white",
                      }
                    ),
                    children: [
                      (0, b.jsx)("button", {
                        onClick: function () {
                          l({
                            type: "toggle display children",
                            addresses: [a.address],
                          });
                        },
                        style: s(
                          s({ opacity: a.children.size > 0 ? 1 : 0 }, yt),
                          {},
                          {
                            color: c
                              ? "lightgreen"
                              : f > -1
                              ? "black"
                              : "white",
                          }
                        ),
                        tabIndex: -1,
                        children: h ? "-" : "+",
                      }),
                      (0, b.jsx)(dt, {
                        node: a,
                        dispatch: l,
                        isRoot: c,
                        edit:
                          null === (r = u.get(a.address.toString())) ||
                          void 0 === r
                            ? void 0
                            : r.editName,
                        submitEdit: function () {
                          l({ type: "submit name", node: a });
                        },
                        submitInsertChild: v,
                      }),
                      c ? "\xa0(root)" : "",
                    ],
                  }),
                  (0, b.jsx)(ht, {
                    node: a,
                    dispatch: l,
                    addressMap: u.get(a.address.toString()),
                    submitInsertChild: v,
                    submitInsertSibling: function (e) {
                      l(
                        e
                          ? {
                              type: "paste node",
                              nodeString: e,
                              node: a,
                              target: "sibling",
                            }
                          : { type: "edit node", isEditing: !1 }
                      );
                    },
                  }),
                  g,
                ],
              }),
          });
        };
      function xt(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          r = new Map();
        return { name: e, children: r, index: n, address: t };
      }
      function wt(e, t) {
        for (var n = 0; n < e.length; n++) {
          if (e.charAt(n) !== t) break;
        }
        return n;
      }
      function kt(e) {
        var t = e.split("\n"),
          n = [];
        return (
          t.forEach(function (e, t) {
            var r = {
              y: t,
              x: wt(e, "\t"),
              value: e.replace(/[\t\r\n]+/g, ""),
            };
            "" !== r.value && n.push(r);
          }),
          n
        );
      }
      function St(e, t, n, r) {
        var i = xt(e.value);
        i.address = [].concat((0, o.Z)(n), [e.value]);
        for (var a = 0, l = r; l < t.length; l++) {
          var s = t[l];
          if (s.x <= e.x) break;
          if (s.x === e.x + 1) {
            var u = St(s, t, i.address, l + 1);
            (u.address = [].concat((0, o.Z)(i.address), [s.value])),
              (u.index = a),
              a++,
              i.children.set(s.value, u);
          }
        }
        return i;
      }
      function Zt(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "root",
          n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          r = new Map(),
          o = 0;
        return (
          e.forEach(function (i, a) {
            if (i.x === n) {
              var l = St(i, e, [t], a + 1);
              (l.address = [t, i.value]), (l.index = o), o++, r.set(i.value, l);
            }
          }),
          r
        );
      }
      function Et(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "root",
          n = kt(e),
          r = xt(t, ["root"]);
        return 1 !== n.length && (r.children = Zt(n, "root")), r;
      }
      function Ct(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
          r = "\t",
          o = r.repeat(t);
        n += "\n";
        var i = t;
        return (
          "root" !== e.address.toString() && ((i = t + 1), (n += o + e.name)),
          e.children.forEach(function (e) {
            n = Ct(e, i, n);
          }),
          n
        );
      }
      function Pt(e, t) {
        var n = (0, o.Z)(e);
        if (n.length > 1) {
          n.shift();
          var r = t.children.get(n[0]);
          return r ? Pt(n, r) : t;
        }
        return t;
      }
      function Mt(e, t) {
        var n = xt(e.name, t, e.index);
        return (
          e.children.forEach(function (e) {
            n.children.set(e.name, Mt(e, [].concat((0, o.Z)(t), [e.name])));
          }),
          n
        );
      }
      function Rt(e, t, n) {
        var r =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          i = (0, o.Z)(n);
        if (1 === i.length) return t;
        var a = xt(e.name, (0, o.Z)(e.address), e.index);
        if (2 === i.length) {
          var l = (0, o.Z)(e.children).reduce(function (e, t) {
            return (t[0] === i[1] && t[0] !== i[0]) || e;
          }, !1);
          0 === e.children.size && ((t.index = 0), a.children.set(t.name, t));
          var s = 0;
          (0, o.Z)(e.children).forEach(function (e, n) {
            if (
              (n !== r ||
                l ||
                ((t.index = r), a.children.set(t.name, t), (s = 1)),
              e[0] === i[1])
            ) {
              e[1].index = n + s;
              var u = (0, o.Z)(i);
              u.shift(), a.children.set(t.name, Rt(e[1], t, u, r));
            } else (e[1].index = n + s), a.children.set(e[0], e[1]);
          }),
            r === e.children.size && ((t.index = r), a.children.set(t.name, t));
        }
        return (
          i.length > 2 &&
            (0, o.Z)(e.children).forEach(function (e, n) {
              if (e[0] === i[1]) {
                var l = (0, o.Z)(i);
                l.shift(),
                  (e[1].index = n),
                  a.children.set(e[0], Rt(e[1], t, l, r));
              } else (e[1].index = n), a.children.set(e[0], e[1]);
            }),
          a
        );
      }
      function Tt(e) {
        var t = e.length;
        return t > 1
          ? e.filter(function (e, n) {
              return n !== t - 1;
            })
          : e;
      }
      function jt(e, t) {
        var n = Pt(Tt(e.address), t);
        return "root" === n.address.toString() || e.index < n.children.size - 1
          ? [n, e]
          : jt(n, t);
      }
      function Ot(e, t, n) {
        var r = {
          display: !0,
          editName: !1,
          editNode: !1,
          insertTarget: "sibling",
          inputName: e.name,
          inputNode: "",
        };
        return (
          t.set(e.address.toString(), r),
          e.children.forEach(function (e) {
            Ot(e, t);
          }),
          n &&
            t.forEach(function (e, r) {
              var o = n.get(r);
              o && t.set(r, s({}, o));
            }),
          t
        );
      }
      function zt(e, t, n) {
        var r,
          i = xt((r = e).name, (0, o.Z)(r.address), r.index),
          a = (0, o.Z)(e.children.keys()).indexOf(t.name),
          l = (0, o.Z)(e.children);
        return (
          l.splice(a, 1),
          l.forEach(function (e, t) {
            (e[1].index = t), i.children.set(e[0], e[1]);
          }),
          Rt(n, i, e.address)
        );
      }
      function Nt(e, t) {
        var n = t.get(e.address.toString());
        return (
          n &&
            (t.set(e.address.toString(), s(s({}, n), {}, { display: !1 })),
            e.children.size > 0 &&
              e.children.forEach(function (e) {
                t = Nt(e, t);
              })),
          t
        );
      }
      function Lt(e, t) {
        switch (t.type) {
          case "initialize":
            var n = (function (e) {
              var t = Et(e),
                n = Ot(t, new Map()),
                r = (0, o.Z)(t.children);
              return {
                tree: t,
                addressMap: n,
                focus: [["root", (0, i.Z)(r[0], 1)[0]]],
                editing: { name: !1, node: !1, modal: !1 },
                collapsed: !1,
                clipboard: "",
                user: "",
                fetched: { current: -1, trees: [] },
                errorDialog: {
                  isOpen: !1,
                  content: {
                    title: "",
                    text: "",
                    buttonTrue: "",
                    buttonFalse: null,
                  },
                  action: function (e) {
                    return null;
                  },
                },
              };
            })(t.code);
            return n;
          case "load tree":
            var r = Et(t.tree.content, t.tree.title),
              a = Ot(r, new Map()),
              l = (0, o.Z)(r.children),
              u = (0, i.Z)(l[0], 1)[0];
            return s(
              s({}, e),
              {},
              {
                tree: r,
                focus: [["root", u]],
                addressMap: a,
                fetched: s(s({}, e.fetched), {}, { current: t.index }),
              }
            );
          case "set fetched trees":
            return s(
              s({}, e),
              {},
              {
                fetched: {
                  current: 0 === t.trees.length ? -1 : 0,
                  trees: t.trees || [],
                },
              }
            );
          case "set user":
            return s(s({}, e), {}, { user: t.user });
          case "replace state":
            return s(
              s({}, t.newState),
              {},
              { editing: { modal: !1, name: !1, node: !1 } }
            );
          case "set error dialog":
            return s(s({}, e), {}, { errorDialog: t.dialog });
          case "focus node":
            if ("root" === t.address.toString()) return e;
            var c = (0, o.Z)(e.focus);
            c.unshift(t.address);
            var d = Tt(t.address),
              f = e.addressMap.get(d.toString()),
              p = new Map(e.addressMap);
            return (
              (null !== f && void 0 !== f && f.display) ||
                (f && p.set(d.toString(), s(s({}, f), {}, { display: !0 }))),
              s(s({}, e), {}, { addressMap: p, focus: c })
            );
          case "unfocus node":
            var h = (0, o.Z)(e.focus),
              m = h.indexOf(t.address);
            return m > -1 && h.splice(m, 1), s(s({}, e), {}, { focus: h });
          case "unfocus all":
            var v = e.focus[0];
            if ("root" === v.toString()) return e;
            var g = new Map(e.addressMap),
              y = e.addressMap.get(v.toString());
            return (
              y &&
                g.set(
                  v.toString(),
                  s(
                    s({}, y),
                    {},
                    { editName: !1, editNode: !1, inputNode: "", inputName: "" }
                  )
                ),
              s(
                s({}, e),
                {},
                {
                  focus: [],
                  addressMap: g,
                  editing: s(s({}, e.editing), {}, { name: !1, node: !1 }),
                }
              )
            );
          case "toggle display children":
            var b = new Map(e.addressMap),
              x = !1;
            return (
              t.addresses.forEach(function (t) {
                var n,
                  r = Pt(t, e.tree),
                  o = !(
                    null !== (n = e.addressMap.get(t.toString())) &&
                    void 0 !== n &&
                    n.display
                  );
                if (!1 === o) b = Nt(r, b);
                else {
                  var i = b.get(t.toString());
                  i && b.set(t.toString(), s(s({}, i), {}, { display: o }));
                }
                "root" === r.address.toString() && (x = !0);
              }),
              s(s({}, e), {}, { collapsed: x, addressMap: b })
            );
          case "set collapse all":
            var w = new Map(e.addressMap);
            w.forEach(function (t, n) {
              var r = e.addressMap.get(n);
              r && w.set(n, s(s({}, r), {}, { display: e.collapsed }));
            });
            var k = (0, o.Z)(e.tree.children),
              S = (0, i.Z)(k[0], 1)[0];
            return s(
              s({}, e),
              {},
              { focus: [["root", S]], collapsed: !e.collapsed, addressMap: w }
            );
          case "delete":
            var Z = e.tree,
              E = new Map(e.addressMap),
              C = (0, o.Z)(e.focus);
            return (
              (0, o.Z)(e.focus).forEach(function (e) {
                if ("root" !== e.toString()) {
                  var t = Pt(e, Z),
                    n = Tt(e),
                    r = Pt(n, Z);
                  (Z = zt(r, t, Z)), (E = Ot(Z, new Map(), E));
                  var i = Pt(n, Z);
                  if (0 === i.children.size) C = [n];
                  else {
                    var a = (0, o.Z)(i.children);
                    C =
                      0 === t.index
                        ? [a[0][1].address]
                        : [a[t.index - 1][1].address];
                  }
                }
              }),
              s(s({}, e), {}, { focus: C, addressMap: E, tree: Z })
            );
          case "edit name":
            var P = e.focus[0];
            if ("root" === P.toString()) return e;
            var M = new Map(e.addressMap),
              R = e.addressMap.get(P.toString());
            return (
              R &&
                M.set(P.toString(), s(s({}, R), {}, { editName: t.isEditing })),
              s(
                s({}, e),
                {},
                {
                  addressMap: M,
                  editing: s(s({}, e.editing), {}, { name: t.isEditing }),
                }
              )
            );
          case "set modal":
            return s(
              s({}, e),
              {},
              { editing: s(s({}, e.editing), {}, { modal: t.isOpen }) }
            );
          case "input name":
            var T = t.input,
              j = new Map(e.addressMap),
              O = e.addressMap.get(t.address.toString());
            return (
              O &&
                j.set(t.address.toString(), s(s({}, O), {}, { inputName: T })),
              s(s({}, e), {}, { addressMap: j })
            );
          case "edit root name":
            var z = xt(t.name, ["root"]);
            e.tree.children.forEach(function (e) {
              return z.children.set(e.name, e);
            });
            var N = Ot(z, new Map());
            return s(s({}, e), {}, { addressMap: N, tree: z });
          case "submit name":
            var L,
              _ =
                null === (L = e.addressMap.get(t.node.address.toString())) ||
                void 0 === L
                  ? void 0
                  : L.inputName,
              A = Tt(t.node.address),
              F = (0, o.Z)(A);
            F.push(_);
            var I = xt(_, F, t.node.index);
            t.node.children.forEach(function (e) {
              return I.children.set(e.name, e);
            });
            var D = Rt(e.tree, Mt(I, F), t.node.address),
              W = e.addressMap.get(t.node.address.toString());
            W &&
              e.addressMap.set(
                t.node.address.toString(),
                s(s({}, W), {}, { editName: !1 })
              );
            var B = Ot(D, new Map());
            return (
              B.forEach(function (t, n) {
                var r = e.addressMap.get(n);
                r && B.set(n, s({}, r));
              }),
              s(
                s({}, e),
                {},
                {
                  focus: [F],
                  addressMap: B,
                  tree: D,
                  editing: s(s({}, e.editing), {}, { name: !1 }),
                }
              )
            );
          case "edit node":
            var V = e.focus[0],
              H = new Map(e.addressMap),
              U = e.addressMap.get(V.toString());
            return (
              U &&
                H.set(
                  V.toString(),
                  s(s({}, U), {}, { editNode: t.isEditing, inputNode: "" })
                ),
              s(
                s({}, e),
                {},
                {
                  addressMap: H,
                  editing: s(s({}, e.editing), {}, { node: t.isEditing }),
                }
              )
            );
          case "input node":
            var $ = t.input,
              q = new Map(e.addressMap),
              K = e.addressMap.get(t.address.toString());
            return (
              K &&
                q.set(t.address.toString(), s(s({}, K), {}, { inputNode: $ })),
              s(s({}, e), {}, { addressMap: q })
            );
          case "copy node":
            var G = "";
            e.focus.forEach(function (t) {
              G += Ct(Pt(t, e.tree)) + "\n";
            });
            try {
              navigator.clipboard.writeText(G);
            } catch (Oe) {
              console.error("Unable to copy", Oe);
            }
            return s(s({}, e), {}, { clipboard: G });
          case "copy address":
            try {
              navigator.clipboard.writeText(t.address.toString());
            } catch (Oe) {
              console.error("Unable to copy", Oe);
            }
            return e;
          case "change insert target":
            var Q = new Map(e.addressMap),
              Y = e.addressMap.get(t.address.toString());
            return (
              Y &&
                Q.set(
                  t.address.toString(),
                  s(s({}, Y), {}, { insertTarget: t.target })
                ),
              s(s({}, e), {}, { addressMap: Q })
            );
          case "paste node":
            if (!t.nodeString) return e;
            var X = Pt(
                "sibling" === t.target ? Tt(t.node.address) : t.node.address,
                e.tree
              ),
              J = kt(t.nodeString),
              ee = Zt(J, X.name, 0),
              te = (0, o.Z)(X.address);
            ee.forEach(function (e, t) {
              X.children.set(t, e);
            });
            var ne = Mt(X, X.address),
              re = Rt(e.tree, ne, X.address, X.index),
              oe = e.addressMap.get(t.node.address.toString());
            oe &&
              e.addressMap.set(
                t.node.address.toString(),
                s(s({}, oe), {}, { editNode: !1 })
              );
            var ie = Ot(re, new Map());
            return (
              ie.forEach(function (t, n) {
                var r = e.addressMap.get(n);
                r &&
                  ie.set(n, s(s({}, r), {}, { inputNode: "", editNode: !1 }));
              }),
              s(
                s({}, e),
                {},
                {
                  focus: [[].concat((0, o.Z)(te), [J[0].value])],
                  editing: s(s({}, e.editing), {}, { node: !1 }),
                  addressMap: ie,
                  tree: re,
                }
              )
            );
          case "shift sibling":
            var ae,
              le = Pt(Tt(t.node.address), e.tree),
              se = (0, o.Z)(le.children)[t.node.index - 1],
              ue = [].concat((0, o.Z)(se[1].address), [t.node.name]),
              ce = xt(t.node.name, ue);
            t.node.children.forEach(function (e) {
              ce.children.set(e.name, e);
            });
            var de = Mt(ce, ue),
              fe = zt(le, t.node, e.tree),
              pe = Ot((fe = Rt(fe, de, ue, se[1].children.size)), new Map());
            if (
              (pe.forEach(function (t, n) {
                var r = e.addressMap.get(n);
                r && pe.set(n, s({}, r));
              }),
              !1 ===
                (null === (ae = e.addressMap.get(se[1].address.toString())) ||
                void 0 === ae
                  ? void 0
                  : ae.display))
            ) {
              var he = e.addressMap.get(se[1].address.toString());
              he &&
                pe.set(
                  se[1].address.toString(),
                  s(s({}, he), {}, { display: !0 })
                );
            }
            return s(s({}, e), {}, { focus: [ue], tree: fe, addressMap: pe });
          case "shift order":
            var me = t.node.index + t.direction,
              ve = t.node.index,
              ge = Pt(Tt(t.node.address), e.tree),
              ye = (0, o.Z)(ge.children)[me],
              be = (0, o.Z)(ge.address).slice(
                ge.address.length - 1,
                ge.address.length
              );
            be.push(ye[1].name);
            var xe = Rt(ge, xt("temp"), be);
            be.pop(), be.push(t.node.name);
            var we = xt(ye[0], ye[1].address, ve);
            ye[1].children.forEach(function (e) {
              we.children.set(e.name, e);
            }),
              (xe = Rt(xe, we, be)),
              be.pop(),
              be.push("temp");
            var ke = xt(t.node.name, t.node.address, me);
            t.node.children.forEach(function (e) {
              ke.children.set(e.name, e);
            });
            var Se = Rt(xe, ke, be),
              Ze = Rt(e.tree, Se, ge.address),
              Ee = Ot(Ze, new Map());
            return (
              Ee.forEach(function (t, n) {
                var r = e.addressMap.get(n);
                r && Ee.set(n, s({}, r));
              }),
              s(
                s({}, e),
                {},
                { tree: Ze, focus: [t.node.address], addressMap: Ee }
              )
            );
          case "shift parent":
            var Ce = Pt(Tt(t.node.address), e.tree),
              Pe = (0, o.Z)(Ce.address);
            Pe.pop(), Pe.push(t.node.name);
            var Me = xt(t.node.name, Pe);
            t.node.children.forEach(function (e) {
              Me.children.set(e.name, e);
            });
            var Re = Mt(Me, Pe),
              Te = zt(Ce, t.node, e.tree),
              je = Ot((Te = Rt(Te, Re, Pe, Ce.index + 1)), new Map());
            return (
              je.forEach(function (t, n) {
                var r = e.addressMap.get(n);
                r && je.set(n, s({}, r));
              }),
              s(s({}, e), {}, { focus: [Pe], tree: Te, addressMap: je })
            );
          default:
            return e;
        }
      }
      var _t = {
          undo: "Control,z",
          collapseAll: "Control, ",
          shiftUp: "Alt,ArrowUp",
          shiftDown: "Alt,ArrowDown",
          shiftLeft: "Alt,ArrowLeft",
          shiftRight: "Alt,ArrowRight",
          showHide: " ",
          focusParent: "ArrowLeft",
          focusChild: "ArrowRight",
          focusAbove: "ArrowUp",
          focusBelow: "ArrowDown",
          addFocusAbove: "Shift,ArrowUp",
          addFocusBelow: "Shift,ArrowDown",
          delete: "Backspace",
          paste: "v",
          newNode: "Enter",
          editNode: "e",
          copyNode: "c",
          copyAddress: "a",
          submit: "Enter",
          cancel: "Escape",
          indent: "Tab",
        },
        At = function (e, t, n, r) {
          if (t[0])
            if (n.editing.name)
              switch (t[0].toString()) {
                case _t.submit:
                  var a = Pt(n.focus[0], n.tree);
                  return void e({ type: "submit name", node: a });
                case _t.cancel:
                  return void e({ type: "edit name", isEditing: !1 });
              }
            else if (n.editing.node)
              switch (t[0].toString()) {
                case _t.submit:
                  var l = Pt(n.focus[0], n.tree),
                    s = n.addressMap.get(n.focus[0].toString());
                  if (
                    "root" === n.focus[0].toString() &&
                    s &&
                    "sibling" === s.insertTarget
                  )
                    return;
                  return s
                    ? void e({
                        type: "paste node",
                        nodeString: s.inputNode,
                        node: l,
                        target: s.insertTarget,
                      })
                    : void e({ type: "edit node", isEditing: !1 });
                case _t.cancel:
                  return void e({ type: "edit node", isEditing: !1 });
                case _t.indent:
                  var u,
                    c =
                      null === (u = n.addressMap.get(n.focus[0].toString())) ||
                      void 0 === u
                        ? void 0
                        : u.insertTarget,
                    d = "sibling";
                  return (
                    "child" === c && (d = "sibling"),
                    "sibling" === c && (d = "child"),
                    void e({
                      type: "change insert target",
                      address: n.focus[0],
                      target: d,
                    })
                  );
              }
            else {
              switch (
                t[1] && t[1].toString() !== t[0].toString()
                  ? t.slice(0, 2).toString()
                  : t[0]
              ) {
                case _t.undo:
                  return void e({ type: "undo" });
                case _t.collapseAll:
                  return void r();
                case _t.shiftUp:
                  var f = Pt(n.focus[0], n.tree);
                  return void (
                    f.index > 0 &&
                    e({ type: "shift order", node: f, direction: -1 })
                  );
                case _t.shiftDown:
                  if ("root" === n.focus[0].toString()) return;
                  var p = Pt(n.focus[0], n.tree),
                    h = Pt(Tt(n.focus[0]), n.tree);
                  return void (
                    p.index < h.children.size - 1 &&
                    e({ type: "shift order", node: p, direction: 1 })
                  );
                case _t.shiftLeft:
                  var m = Pt(n.focus[0], n.tree);
                  if ("root" === Tt(n.focus[0]).toString()) return;
                  return void e({ type: "shift parent", node: m });
                case _t.shiftRight:
                  var v = Pt(n.focus[0], n.tree);
                  return void (
                    0 !== v.index && e({ type: "shift sibling", node: v })
                  );
                case _t.focusChild:
                  var g = Pt(n.focus[0], n.tree);
                  if (g.children.size > 0) {
                    var y = g.children.values().next().value.address;
                    e({ type: "unfocus all" }),
                      e({ type: "focus node", address: y });
                  } else {
                    var b = jt(g, n.tree),
                      x = (0, i.Z)(b, 2),
                      w = x[0],
                      k = x[1];
                    k.index < w.children.size - 1 &&
                      (e({ type: "unfocus node", address: n.focus[0] }),
                      e({
                        type: "focus node",
                        address: (0, o.Z)(w.children)[k.index + 1][1].address,
                      }));
                  }
                  return;
                case _t.focusParent:
                  var S = Tt(n.focus[0]);
                  if ("root" === S.toString()) return;
                  return (
                    e({ type: "unfocus all" }),
                    void e({ type: "focus node", address: S })
                  );
                case _t.focusBelow:
                  var Z = Pt(n.focus[0], n.tree);
                  if ("root" === n.focus[0].toString())
                    return (
                      e({ type: "unfocus all" }),
                      void e({
                        type: "focus node",
                        address: Z.children.values().next().value.address,
                      })
                    );
                  var E = Pt(Tt(n.focus[0]), n.tree);
                  if (Z.index < E.children.size - 1)
                    e({ type: "unfocus all" }),
                      e({
                        type: "focus node",
                        address: (0, o.Z)(E.children)[Z.index + 1][1].address,
                      });
                  else {
                    var C = jt(Z, n.tree),
                      P = (0, i.Z)(C, 2),
                      M = P[0],
                      R = P[1];
                    if (Z.children.size > 0) {
                      var T = Z.children.values().next().value.address;
                      e({ type: "unfocus all" }),
                        e({ type: "focus node", address: T });
                    } else
                      R.index < M.children.size - 1 &&
                        (e({ type: "unfocus all" }),
                        e({
                          type: "focus node",
                          address: (0, o.Z)(M.children)[R.index + 1][1].address,
                        }));
                  }
                  return;
                case _t.focusAbove:
                  if ("root" === n.focus[0].toString()) return;
                  var j = Pt(n.focus[0], n.tree),
                    O = Tt(n.focus[0]);
                  if ("root" === O.toString() && 0 === j.index) return;
                  var z = Pt(O, n.tree);
                  return void (j.index > 0
                    ? (e({ type: "unfocus all" }),
                      e({
                        type: "focus node",
                        address: (0, o.Z)(z.children)[j.index - 1][1].address,
                      }))
                    : (e({ type: "unfocus all" }),
                      e({ type: "focus node", address: z.address })));
                case _t.addFocusAbove:
                  if ("root" === n.focus[0].toString()) return;
                  var N = Pt(n.focus[0], n.tree),
                    L = Tt(n.focus[0]);
                  if ("root" === L.toString()) return;
                  var _ = Pt(L, n.tree);
                  return void (
                    N.index > 0 &&
                    e({
                      type: "focus node",
                      address: (0, o.Z)(_.children)[N.index - 1][1].address,
                    })
                  );
                case _t.addFocusBelow:
                  if ("root" === n.focus[0].toString()) return;
                  var A = Pt(n.focus[0], n.tree),
                    F = Pt(Tt(n.focus[0]), n.tree);
                  return void (
                    A.index < F.children.size - 1 &&
                    e({
                      type: "focus node",
                      address: (0, o.Z)(F.children)[A.index + 1][1].address,
                    })
                  );
                case _t.showHide:
                  return void e({
                    type: "toggle display children",
                    addresses: n.focus,
                  });
                case _t.delete:
                  return void e({ type: "delete" });
                case _t.paste:
                  return void n.focus.forEach(function (t) {
                    navigator.clipboard.readText().then(function (n) {
                      return e({
                        type: "paste child",
                        address: t,
                        nodeString: n,
                      });
                    });
                  });
                case _t.editNode:
                  return void e({ type: "edit name", isEditing: !0 });
                case _t.newNode:
                  return void e({ type: "edit node", isEditing: !0 });
                case _t.copyNode:
                  return void n.focus.forEach(function (t) {
                    e({ type: "copy node" });
                  });
                case _t.copyAddress:
                  return void n.focus.forEach(function (t) {
                    e({ type: "copy address", address: t });
                  });
              }
            }
        },
        Ft = [];
      Object.values(_t).forEach(function (e) {
        e.split(",").forEach(function (e) {
          return Ft.push(e);
        });
      });
      var It = function (t) {
          var n = (0, e.useState)([]),
            r = (0, i.Z)(n, 2),
            a = r[0],
            l = r[1];
          (0, e.useEffect)(function () {
            return (
              window.addEventListener("focus", s),
              window.addEventListener("blur", u),
              s(),
              function () {
                window.removeEventListener("focus", s),
                  window.removeEventListener("blur", u);
              }
            );
          }, []);
          var s = function () {
              l([]);
            },
            u = function () {
              l([]);
            };
          return (
            (0, e.useEffect)(
              function () {
                var e = function (e) {
                    if (!t.editing.modal) {
                      var n = e.key;
                      "Enter" === n && e.preventDefault(),
                        "ArrowLeft" === n && e.preventDefault(),
                        "Alt" === n && e.preventDefault(),
                        "Control" === n && e.preventDefault(),
                        ("Tab" !== n &&
                          "Enter" !== n &&
                          (!0 === t.editing.name ||
                            !0 === t.editing.node ||
                            (" " !== n &&
                              "ArrowUp" !== n &&
                              "ArrowDown" !== n))) ||
                          e.preventDefault(),
                        Ft.includes(n) &&
                          (t.editing || e.preventDefault(),
                          l(function (e) {
                            return [].concat((0, o.Z)(e), [n]);
                          }));
                    }
                  },
                  n = function (e) {
                    if (!t.editing.modal) {
                      var n = e.key;
                      Ft.includes(n) &&
                        l(function (e) {
                          return e.filter(function (e) {
                            return e !== n;
                          });
                        });
                    }
                  };
                return (
                  document.addEventListener("keydown", e),
                  document.addEventListener("keyup", n),
                  function () {
                    document.removeEventListener("keydown", e),
                      document.removeEventListener("keyup", n);
                  }
                );
              },
              [t.editing]
            ),
            a
          );
        },
        Dt = n(2421),
        Wt = n(104),
        Bt = n(114),
        Vt = ["sx"];
      function Ht(e) {
        var t,
          n = e.sx,
          r = (function (e) {
            var t = { systemProps: {}, otherProps: {} };
            return (
              Object.keys(e).forEach(function (n) {
                Bt.Gc[n] ? (t.systemProps[n] = e[n]) : (t.otherProps[n] = e[n]);
              }),
              t
            );
          })((0, u.Z)(e, Vt)),
          i = r.systemProps,
          a = r.otherProps;
        return (
          (t = Array.isArray(n)
            ? [i].concat((0, o.Z)(n))
            : "function" === typeof n
            ? function () {
                var e = n.apply(void 0, arguments);
                return (0, f.P)(e) ? (0, c.Z)({}, i, e) : i;
              }
            : (0, c.Z)({}, i, n)),
          (0, c.Z)({}, a, { sx: t })
        );
      }
      var Ut = n(418),
        $t = ["className", "component"];
      var qt = n(5902),
        Kt = n(4360),
        Gt = (function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            n = t.defaultTheme,
            r = t.defaultClassName,
            o = void 0 === r ? "MuiBox-root" : r,
            i = t.generateClassName,
            a = t.styleFunctionSx,
            l = void 0 === a ? Wt.Z : a,
            s = (0, Dt.ZP)("div", {
              shouldForwardProp: function (e) {
                return "theme" !== e && "sx" !== e && "as" !== e;
              },
            })(l),
            d = e.forwardRef(function (e, t) {
              var r = (0, Ut.Z)(n),
                a = Ht(e),
                l = a.className,
                d = a.component,
                f = void 0 === d ? "div" : d,
                p = (0, u.Z)(a, $t);
              return (0,
              b.jsx)(s, (0, c.Z)({ as: f, ref: t, className: (0, h.Z)(l, i ? i(o) : o), theme: r }, p));
            });
          return d;
        })({
          defaultTheme: (0, Kt.Z)(),
          defaultClassName: "MuiBox-root",
          generateClassName: qt.Z.generate,
        }),
        Qt = Gt;
      function Yt(e) {
        return (
          (Yt =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          Yt(e)
        );
      }
      function Xt() {
        Xt = function () {
          return e;
        };
        var e = {},
          t = Object.prototype,
          n = t.hasOwnProperty,
          r = "function" == typeof Symbol ? Symbol : {},
          o = r.iterator || "@@iterator",
          i = r.asyncIterator || "@@asyncIterator",
          a = r.toStringTag || "@@toStringTag";
        function l(e, t, n) {
          return (
            Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          l({}, "");
        } catch (C) {
          l = function (e, t, n) {
            return (e[t] = n);
          };
        }
        function s(e, t, n, r) {
          var o = t && t.prototype instanceof d ? t : d,
            i = Object.create(o.prototype),
            a = new S(r || []);
          return (
            (i._invoke = (function (e, t, n) {
              var r = "suspendedStart";
              return function (o, i) {
                if ("executing" === r)
                  throw new Error("Generator is already running");
                if ("completed" === r) {
                  if ("throw" === o) throw i;
                  return E();
                }
                for (n.method = o, n.arg = i; ; ) {
                  var a = n.delegate;
                  if (a) {
                    var l = x(a, n);
                    if (l) {
                      if (l === c) continue;
                      return l;
                    }
                  }
                  if ("next" === n.method) n.sent = n._sent = n.arg;
                  else if ("throw" === n.method) {
                    if ("suspendedStart" === r)
                      throw ((r = "completed"), n.arg);
                    n.dispatchException(n.arg);
                  } else "return" === n.method && n.abrupt("return", n.arg);
                  r = "executing";
                  var s = u(e, t, n);
                  if ("normal" === s.type) {
                    if (
                      ((r = n.done ? "completed" : "suspendedYield"),
                      s.arg === c)
                    )
                      continue;
                    return { value: s.arg, done: n.done };
                  }
                  "throw" === s.type &&
                    ((r = "completed"), (n.method = "throw"), (n.arg = s.arg));
                }
              };
            })(e, n, a)),
            i
          );
        }
        function u(e, t, n) {
          try {
            return { type: "normal", arg: e.call(t, n) };
          } catch (C) {
            return { type: "throw", arg: C };
          }
        }
        e.wrap = s;
        var c = {};
        function d() {}
        function f() {}
        function p() {}
        var h = {};
        l(h, o, function () {
          return this;
        });
        var m = Object.getPrototypeOf,
          v = m && m(m(Z([])));
        v && v !== t && n.call(v, o) && (h = v);
        var g = (p.prototype = d.prototype = Object.create(h));
        function y(e) {
          ["next", "throw", "return"].forEach(function (t) {
            l(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function b(e, t) {
          function r(o, i, a, l) {
            var s = u(e[o], e, i);
            if ("throw" !== s.type) {
              var c = s.arg,
                d = c.value;
              return d && "object" == Yt(d) && n.call(d, "__await")
                ? t.resolve(d.__await).then(
                    function (e) {
                      r("next", e, a, l);
                    },
                    function (e) {
                      r("throw", e, a, l);
                    }
                  )
                : t.resolve(d).then(
                    function (e) {
                      (c.value = e), a(c);
                    },
                    function (e) {
                      return r("throw", e, a, l);
                    }
                  );
            }
            l(s.arg);
          }
          var o;
          this._invoke = function (e, n) {
            function i() {
              return new t(function (t, o) {
                r(e, n, t, o);
              });
            }
            return (o = o ? o.then(i, i) : i());
          };
        }
        function x(e, t) {
          var n = e.iterator[t.method];
          if (void 0 === n) {
            if (((t.delegate = null), "throw" === t.method)) {
              if (
                e.iterator.return &&
                ((t.method = "return"),
                (t.arg = void 0),
                x(e, t),
                "throw" === t.method)
              )
                return c;
              (t.method = "throw"),
                (t.arg = new TypeError(
                  "The iterator does not provide a 'throw' method"
                ));
            }
            return c;
          }
          var r = u(n, e.iterator, t.arg);
          if ("throw" === r.type)
            return (
              (t.method = "throw"), (t.arg = r.arg), (t.delegate = null), c
            );
          var o = r.arg;
          return o
            ? o.done
              ? ((t[e.resultName] = o.value),
                (t.next = e.nextLoc),
                "return" !== t.method &&
                  ((t.method = "next"), (t.arg = void 0)),
                (t.delegate = null),
                c)
              : o
            : ((t.method = "throw"),
              (t.arg = new TypeError("iterator result is not an object")),
              (t.delegate = null),
              c);
        }
        function w(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function k(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function S(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(w, this),
            this.reset(!0);
        }
        function Z(e) {
          if (e) {
            var t = e[o];
            if (t) return t.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var r = -1,
                i = function t() {
                  for (; ++r < e.length; )
                    if (n.call(e, r)) return (t.value = e[r]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (i.next = i);
            }
          }
          return { next: E };
        }
        function E() {
          return { value: void 0, done: !0 };
        }
        return (
          (f.prototype = p),
          l(g, "constructor", p),
          l(p, "constructor", f),
          (f.displayName = l(p, a, "GeneratorFunction")),
          (e.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === f || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, p)
                : ((e.__proto__ = p), l(e, a, "GeneratorFunction")),
              (e.prototype = Object.create(g)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          y(b.prototype),
          l(b.prototype, i, function () {
            return this;
          }),
          (e.AsyncIterator = b),
          (e.async = function (t, n, r, o, i) {
            void 0 === i && (i = Promise);
            var a = new b(s(t, n, r, o), i);
            return e.isGeneratorFunction(n)
              ? a
              : a.next().then(function (e) {
                  return e.done ? e.value : a.next();
                });
          }),
          y(g),
          l(g, a, "Generator"),
          l(g, o, function () {
            return this;
          }),
          l(g, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (e) {
            var t = [];
            for (var n in e) t.push(n);
            return (
              t.reverse(),
              function n() {
                for (; t.length; ) {
                  var r = t.pop();
                  if (r in e) return (n.value = r), (n.done = !1), n;
                }
                return (n.done = !0), n;
              }
            );
          }),
          (e.values = Z),
          (S.prototype = {
            constructor: S,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(k),
                !e)
              )
                for (var t in this)
                  "t" === t.charAt(0) &&
                    n.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var t = this;
              function r(n, r) {
                return (
                  (a.type = "throw"),
                  (a.arg = e),
                  (t.next = n),
                  r && ((t.method = "next"), (t.arg = void 0)),
                  !!r
                );
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var i = this.tryEntries[o],
                  a = i.completion;
                if ("root" === i.tryLoc) return r("end");
                if (i.tryLoc <= this.prev) {
                  var l = n.call(i, "catchLoc"),
                    s = n.call(i, "finallyLoc");
                  if (l && s) {
                    if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                    if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                  } else if (l) {
                    if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                  } else {
                    if (!s)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var o = this.tryEntries[r];
                if (
                  o.tryLoc <= this.prev &&
                  n.call(o, "finallyLoc") &&
                  this.prev < o.finallyLoc
                ) {
                  var i = o;
                  break;
                }
              }
              i &&
                ("break" === e || "continue" === e) &&
                i.tryLoc <= t &&
                t <= i.finallyLoc &&
                (i = null);
              var a = i ? i.completion : {};
              return (
                (a.type = e),
                (a.arg = t),
                i
                  ? ((this.method = "next"), (this.next = i.finallyLoc), c)
                  : this.complete(a)
              );
            },
            complete: function (e, t) {
              if ("throw" === e.type) throw e.arg;
              return (
                "break" === e.type || "continue" === e.type
                  ? (this.next = e.arg)
                  : "return" === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === e.type && t && (this.next = t),
                c
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.finallyLoc === e)
                  return this.complete(n.completion, n.afterLoc), k(n), c;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.tryLoc === e) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var o = r.arg;
                    k(n);
                  }
                  return o;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (e, t, n) {
              return (
                (this.delegate = { iterator: Z(e), resultName: t, nextLoc: n }),
                "next" === this.method && (this.arg = void 0),
                c
              );
            },
          }),
          e
        );
      }
      function Jt(e, t, n, r, o, i, a) {
        try {
          var l = e[i](a),
            s = l.value;
        } catch (u) {
          return void n(u);
        }
        l.done ? t(s) : Promise.resolve(s).then(r, o);
      }
      function en(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (r, o) {
            var i = e.apply(t, n);
            function a(e) {
              Jt(i, r, o, a, l, "next", e);
            }
            function l(e) {
              Jt(i, r, o, a, l, "throw", e);
            }
            a(void 0);
          });
        };
      }
      var tn = "https://pzzw3lsaz6.execute-api.eu-west-2.amazonaws.com";
      function nn() {
        return rn.apply(this, arguments);
      }
      function rn() {
        return (rn = en(
          Xt().mark(function e() {
            var t;
            return Xt().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (e.next = 2),
                      fetch("".concat(tn, "/trees"), {
                        method: "GET",
                        headers: { Authorization: fn() },
                      }).then(function (e) {
                        return e.json();
                      })
                    );
                  case 2:
                    return (t = e.sent), e.abrupt("return", t);
                  case 4:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function on(e, t) {
        return an.apply(this, arguments);
      }
      function an() {
        return (an = en(
          Xt().mark(function e(t, n) {
            var r, o, i, a;
            return Xt().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (r = xt(t, ["root"])),
                      n.children.forEach(function (e) {
                        return r.children.set(e.name, e);
                      }),
                      (o = { title: t, content: "".concat(Ct(r)) }),
                      console.log(Ct(r)),
                      (e.next = 6),
                      fetch("".concat(tn, "/trees"), {
                        method: "POST",
                        headers: {
                          "Content-Type": "application/json",
                          Authorization: fn(),
                        },
                        body: JSON.stringify(o),
                      }).then(function (e) {
                        return e.json();
                      })
                    );
                  case 6:
                    if (!1 !== (i = e.sent).success) {
                      e.next = 9;
                      break;
                    }
                    throw new Error("Error saving tree: ".concat(i.msg));
                  case 9:
                    return (e.next = 11), nn();
                  case 11:
                    if (!1 !== (a = e.sent).success) {
                      e.next = 14;
                      break;
                    }
                    throw new Error("Error saving tree: ".concat(a.msg));
                  case 14:
                    return e.abrupt("return", {
                      tree: i.tree,
                      fetched: a.trees,
                    });
                  case 15:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function ln() {
        return (ln = en(
          Xt().mark(function e(t, n) {
            var r, o, i;
            return Xt().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      console.log(n),
                      (r = {
                        id: t.id,
                        title: t.title,
                        content: "".concat(Ct(n)),
                      }),
                      (e.next = 4),
                      fetch("".concat(tn, "/trees"), {
                        method: "PUT",
                        headers: {
                          "Content-Type": "application/json",
                          Authorization: fn(),
                        },
                        body: JSON.stringify(r),
                      }).then(function (e) {
                        return e.json();
                      })
                    );
                  case 4:
                    if (!1 !== (o = e.sent).success) {
                      e.next = 7;
                      break;
                    }
                    throw new Error("Error saving tree: ".concat(o.msg));
                  case 7:
                    return (e.next = 9), nn();
                  case 9:
                    if (!1 !== (i = e.sent).success) {
                      e.next = 12;
                      break;
                    }
                    throw new Error("Error saving tree: ".concat(i.msg));
                  case 12:
                    return e.abrupt("return", {
                      tree: o.tree,
                      fetched: i.trees,
                    });
                  case 13:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function sn() {
        return (sn = en(
          Xt().mark(function e(t) {
            var n, r, o;
            return Xt().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (n = { id: t.id }),
                      (e.next = 3),
                      fetch("".concat(tn, "/trees"), {
                        method: "DELETE",
                        headers: {
                          "Content-Type": "application/json",
                          Authorization: fn(),
                        },
                        body: JSON.stringify(n),
                      }).then(function (e) {
                        return e.json();
                      })
                    );
                  case 3:
                    if (!1 !== (r = e.sent).success) {
                      e.next = 6;
                      break;
                    }
                    throw new Error("Error saving tree: ".concat(r.msg));
                  case 6:
                    return (e.next = 8), nn();
                  case 8:
                    if (!1 !== (o = e.sent).success) {
                      e.next = 11;
                      break;
                    }
                    throw new Error("Error saving tree: ".concat(o.msg));
                  case 11:
                    return e.abrupt("return", {
                      tree: r.tree,
                      fetched: o.trees,
                    });
                  case 12:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      var un = "https://pzzw3lsaz6.execute-api.eu-west-2.amazonaws.com",
        cn = (function () {
          var e = en(
            Xt().mark(function e(t, n) {
              var r, o, i;
              return Xt().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (r = { username: t, password: n }),
                        (e.next = 3),
                        fetch("".concat(un, "/users/login"), {
                          method: "POST",
                          headers: { "Content-Type": "application/json" },
                          body: JSON.stringify(r),
                        }).then(function (e) {
                          return e.json();
                        })
                      );
                    case 3:
                      if ((o = e.sent).success) {
                        e.next = 6;
                        break;
                      }
                      return e.abrupt("return", o);
                    case 6:
                      return (
                        o.token &&
                          localStorage.setItem("user", JSON.stringify(o.token)),
                        (e.next = 9),
                        nn()
                      );
                    case 9:
                      if (!1 !== (i = e.sent).success) {
                        e.next = 12;
                        break;
                      }
                      throw new Error("Error fetching trees: ".concat(i.msg));
                    case 12:
                      return e.abrupt("return", {
                        success: !0,
                        trees: i.trees,
                        token: o.token,
                      });
                    case 13:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t, n) {
            return e.apply(this, arguments);
          };
        })(),
        dn = (function () {
          var e = en(
            Xt().mark(function e(t, n, r) {
              var o;
              return Xt().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (o = { username: t, password: n, confirmPassword: r }),
                        e.abrupt(
                          "return",
                          fetch("".concat(un, "/users"), {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify(o),
                          })
                            .then(function (e) {
                              return e.json();
                            })
                            .then(function (e) {
                              return e;
                            })
                        )
                      );
                    case 2:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t, n, r) {
            return e.apply(this, arguments);
          };
        })(),
        fn = function () {
          return JSON.parse(localStorage.getItem("user"));
        },
        pn = n(9120),
        hn = n(3073);
      function mn(t, n, r, o, a) {
        var l =
            "undefined" !== typeof window &&
            "undefined" !== typeof window.matchMedia,
          s = e.useState(function () {
            return a && l ? r(t).matches : o ? o(t).matches : n;
          }),
          u = (0, i.Z)(s, 2),
          c = u[0],
          d = u[1];
        return (
          (0, N.Z)(
            function () {
              var e = !0;
              if (l) {
                var n = r(t),
                  o = function () {
                    e && d(n.matches);
                  };
                return (
                  o(),
                  n.addListener(o),
                  function () {
                    (e = !1), n.removeListener(o);
                  }
                );
              }
            },
            [t, r, l]
          ),
          c
        );
      }
      var vn = t.useSyncExternalStore;
      function gn(t, n, r, o) {
        var a = e.useCallback(
            function () {
              return n;
            },
            [n]
          ),
          l = e.useMemo(
            function () {
              if (null !== o) {
                var e = o(t).matches;
                return function () {
                  return e;
                };
              }
              return a;
            },
            [a, t, o]
          ),
          s = e.useMemo(
            function () {
              if (null === r)
                return [
                  a,
                  function () {
                    return function () {};
                  },
                ];
              var e = r(t);
              return [
                function () {
                  return e.matches;
                },
                function (t) {
                  return (
                    e.addListener(t),
                    function () {
                      e.removeListener(t);
                    }
                  );
                },
              ];
            },
            [a, r, t]
          ),
          u = (0, i.Z)(s, 2),
          c = u[0],
          d = u[1];
        return vn(d, c, l);
      }
      function yn(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = (0, pn.Z)(),
          r =
            "undefined" !== typeof window &&
            "undefined" !== typeof window.matchMedia,
          o = (0, hn.Z)({ name: "MuiUseMediaQuery", props: t, theme: n }),
          i = o.defaultMatches,
          a = void 0 !== i && i,
          l = o.matchMedia,
          s = void 0 === l ? (r ? window.matchMedia : null) : l,
          u = o.ssrMatchMedia,
          c = void 0 === u ? null : u,
          d = o.noSsr;
        var f = "function" === typeof e ? e(n) : e;
        f = f.replace(/^@media( ?)/m, "");
        var p = void 0 !== vn ? gn : mn,
          h = p(f, a, s, c, d);
        return h;
      }
      function bn(e) {
        return (0, q.Z)("MuiButtonGroup", e);
      }
      var xn = (0, K.Z)("MuiButtonGroup", [
          "root",
          "contained",
          "outlined",
          "text",
          "disableElevation",
          "disabled",
          "fullWidth",
          "vertical",
          "grouped",
          "groupedHorizontal",
          "groupedVertical",
          "groupedText",
          "groupedTextHorizontal",
          "groupedTextVertical",
          "groupedTextPrimary",
          "groupedTextSecondary",
          "groupedOutlined",
          "groupedOutlinedHorizontal",
          "groupedOutlinedVertical",
          "groupedOutlinedPrimary",
          "groupedOutlinedSecondary",
          "groupedContained",
          "groupedContainedHorizontal",
          "groupedContainedVertical",
          "groupedContainedPrimary",
          "groupedContainedSecondary",
        ]),
        wn = [
          "children",
          "className",
          "color",
          "component",
          "disabled",
          "disableElevation",
          "disableFocusRipple",
          "disableRipple",
          "fullWidth",
          "orientation",
          "size",
          "variant",
        ],
        kn = (0, T.ZP)("div", {
          name: "MuiButtonGroup",
          slot: "Root",
          overridesResolver: function (e, t) {
            var n = e.ownerState;
            return [
              (0, a.Z)({}, "& .".concat(xn.grouped), t.grouped),
              (0, a.Z)(
                {},
                "& .".concat(xn.grouped),
                t["grouped".concat((0, O.Z)(n.orientation))]
              ),
              (0, a.Z)(
                {},
                "& .".concat(xn.grouped),
                t["grouped".concat((0, O.Z)(n.variant))]
              ),
              (0, a.Z)(
                {},
                "& .".concat(xn.grouped),
                t[
                  "grouped"
                    .concat((0, O.Z)(n.variant))
                    .concat((0, O.Z)(n.orientation))
                ]
              ),
              (0, a.Z)(
                {},
                "& .".concat(xn.grouped),
                t[
                  "grouped"
                    .concat((0, O.Z)(n.variant))
                    .concat((0, O.Z)(n.color))
                ]
              ),
              t.root,
              t[n.variant],
              !0 === n.disableElevation && t.disableElevation,
              n.fullWidth && t.fullWidth,
              "vertical" === n.orientation && t.vertical,
            ];
          },
        })(function (e) {
          var t = e.theme,
            n = e.ownerState;
          return (0,
          c.Z)({ display: "inline-flex", borderRadius: (t.vars || t).shape.borderRadius }, "contained" === n.variant && { boxShadow: (t.vars || t).shadows[2] }, n.disableElevation && { boxShadow: "none" }, n.fullWidth && { width: "100%" }, "vertical" === n.orientation && { flexDirection: "column" }, (0, a.Z)({}, "& .".concat(xn.grouped), (0, c.Z)({ minWidth: 40, "&:not(:first-of-type)": (0, c.Z)({}, "horizontal" === n.orientation && { borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }, "vertical" === n.orientation && { borderTopRightRadius: 0, borderTopLeftRadius: 0 }, "outlined" === n.variant && "horizontal" === n.orientation && { marginLeft: -1 }, "outlined" === n.variant && "vertical" === n.orientation && { marginTop: -1 }), "&:not(:last-of-type)": (0, c.Z)({}, "horizontal" === n.orientation && { borderTopRightRadius: 0, borderBottomRightRadius: 0 }, "vertical" === n.orientation && { borderBottomRightRadius: 0, borderBottomLeftRadius: 0 }, "text" === n.variant && "horizontal" === n.orientation && { borderRight: t.vars ? "1px solid rgba(".concat(t.vars.palette.common.onBackgroundChannel, " / 0.23)") : "1px solid ".concat("light" === t.palette.mode ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)") }, "text" === n.variant && "vertical" === n.orientation && { borderBottom: t.vars ? "1px solid rgba(".concat(t.vars.palette.common.onBackgroundChannel, " / 0.23)") : "1px solid ".concat("light" === t.palette.mode ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)") }, "text" === n.variant && "inherit" !== n.color && { borderColor: t.vars ? "rgba(".concat(t.vars.palette[n.color].mainChannel, " / 0.5)") : (0, pe.Fq)(t.palette[n.color].main, 0.5) }, "outlined" === n.variant && "horizontal" === n.orientation && { borderRightColor: "transparent" }, "outlined" === n.variant && "vertical" === n.orientation && { borderBottomColor: "transparent" }, "contained" === n.variant && "horizontal" === n.orientation && (0, a.Z)({ borderRight: "1px solid ".concat((t.vars || t).palette.grey[400]) }, "&.".concat(xn.disabled), { borderRight: "1px solid ".concat((t.vars || t).palette.action.disabled) }), "contained" === n.variant && "vertical" === n.orientation && (0, a.Z)({ borderBottom: "1px solid ".concat((t.vars || t).palette.grey[400]) }, "&.".concat(xn.disabled), { borderBottom: "1px solid ".concat((t.vars || t).palette.action.disabled) }), "contained" === n.variant && "inherit" !== n.color && { borderColor: (t.vars || t).palette[n.color].dark }, { "&:hover": (0, c.Z)({}, "outlined" === n.variant && "horizontal" === n.orientation && { borderRightColor: "currentColor" }, "outlined" === n.variant && "vertical" === n.orientation && { borderBottomColor: "currentColor" }) }), "&:hover": (0, c.Z)({}, "contained" === n.variant && { boxShadow: "none" }) }, "contained" === n.variant && { boxShadow: "none" })));
        }),
        Sn = e.forwardRef(function (t, n) {
          var r = (0, j.Z)({ props: t, name: "MuiButtonGroup" }),
            o = r.children,
            i = r.className,
            a = r.color,
            l = void 0 === a ? "primary" : a,
            s = r.component,
            f = void 0 === s ? "div" : s,
            p = r.disabled,
            m = void 0 !== p && p,
            v = r.disableElevation,
            g = void 0 !== v && v,
            y = r.disableFocusRipple,
            x = void 0 !== y && y,
            w = r.disableRipple,
            k = void 0 !== w && w,
            S = r.fullWidth,
            Z = void 0 !== S && S,
            E = r.orientation,
            C = void 0 === E ? "horizontal" : E,
            P = r.size,
            M = void 0 === P ? "medium" : P,
            R = r.variant,
            T = void 0 === R ? "outlined" : R,
            z = (0, u.Z)(r, wn),
            N = (0, c.Z)({}, r, {
              color: l,
              component: f,
              disabled: m,
              disableElevation: g,
              disableFocusRipple: x,
              disableRipple: k,
              fullWidth: Z,
              orientation: C,
              size: M,
              variant: T,
            }),
            L = (function (e) {
              var t = e.classes,
                n = e.color,
                r = e.disabled,
                o = e.disableElevation,
                i = e.fullWidth,
                a = e.orientation,
                l = e.variant,
                s = {
                  root: [
                    "root",
                    l,
                    "vertical" === a && "vertical",
                    i && "fullWidth",
                    o && "disableElevation",
                  ],
                  grouped: [
                    "grouped",
                    "grouped".concat((0, O.Z)(a)),
                    "grouped".concat((0, O.Z)(l)),
                    "grouped".concat((0, O.Z)(l)).concat((0, O.Z)(a)),
                    "grouped".concat((0, O.Z)(l)).concat((0, O.Z)(n)),
                    r && "disabled",
                  ],
                };
              return (0, d.Z)(s, bn, t);
            })(N),
            _ = e.useMemo(
              function () {
                return {
                  className: L.grouped,
                  color: l,
                  disabled: m,
                  disableElevation: g,
                  disableFocusRipple: x,
                  disableRipple: k,
                  fullWidth: Z,
                  size: M,
                  variant: T,
                };
              },
              [l, m, g, x, k, Z, M, T, L.grouped]
            );
          return (0,
          b.jsx)(kn, (0, c.Z)({ as: f, role: "group", className: (0, h.Z)(L.root, i), ref: n, ownerState: N }, z, { children: (0, b.jsx)(Je.Provider, { value: _, children: o }) }));
        }),
        Zn = n(9723),
        En = n(8956),
        Cn = n(8949),
        Pn = n(2971);
      var Mn = e.forwardRef(function (t, n) {
        var o = t.children,
          a = t.container,
          l = t.disablePortal,
          s = void 0 !== l && l,
          u = e.useState(null),
          c = (0, i.Z)(u, 2),
          d = c[0],
          f = c[1],
          p = (0, m.Z)(e.isValidElement(o) ? o.ref : null, n);
        return (
          (0, y.Z)(
            function () {
              s ||
                f(
                  (function (e) {
                    return "function" === typeof e ? e() : e;
                  })(a) || document.body
                );
            },
            [a, s]
          ),
          (0, y.Z)(
            function () {
              if (d && !s)
                return (
                  (0, Pn.Z)(n, d),
                  function () {
                    (0, Pn.Z)(n, null);
                  }
                );
            },
            [n, d, s]
          ),
          s
            ? e.isValidElement(o)
              ? e.cloneElement(o, { ref: p })
              : o
            : (0, b.jsx)(e.Fragment, { children: d ? r.createPortal(o, d) : d })
        );
      });
      function Rn(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function Tn(e) {
        var t = e.documentElement.clientWidth;
        return Math.abs(window.innerWidth - t);
      }
      function jn(e, t) {
        t
          ? e.setAttribute("aria-hidden", "true")
          : e.removeAttribute("aria-hidden");
      }
      function On(e) {
        return parseInt((0, v.Z)(e).getComputedStyle(e).paddingRight, 10) || 0;
      }
      function zn(e) {
        var t =
            -1 !==
            [
              "TEMPLATE",
              "SCRIPT",
              "STYLE",
              "LINK",
              "MAP",
              "META",
              "NOSCRIPT",
              "PICTURE",
              "COL",
              "COLGROUP",
              "PARAM",
              "SLOT",
              "SOURCE",
              "TRACK",
            ].indexOf(e.tagName),
          n = "INPUT" === e.tagName && "hidden" === e.getAttribute("type");
        return t || n;
      }
      function Nn(e, t, n) {
        var r =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [],
          i = arguments.length > 4 ? arguments[4] : void 0,
          a = [t, n].concat((0, o.Z)(r));
        [].forEach.call(e.children, function (e) {
          var t = -1 === a.indexOf(e),
            n = !zn(e);
          t && n && jn(e, i);
        });
      }
      function Ln(e, t) {
        var n = -1;
        return (
          e.some(function (e, r) {
            return !!t(e) && ((n = r), !0);
          }),
          n
        );
      }
      function _n(e, t) {
        var n = [],
          r = e.container;
        if (!t.disableScrollLock) {
          if (
            (function (e) {
              var t = (0, Zn.Z)(e);
              return t.body === e
                ? (0, v.Z)(e).innerWidth > t.documentElement.clientWidth
                : e.scrollHeight > e.clientHeight;
            })(r)
          ) {
            var o = Tn((0, Zn.Z)(r));
            n.push({
              value: r.style.paddingRight,
              property: "padding-right",
              el: r,
            }),
              (r.style.paddingRight = "".concat(On(r) + o, "px"));
            var i = (0, Zn.Z)(r).querySelectorAll(".mui-fixed");
            [].forEach.call(i, function (e) {
              n.push({
                value: e.style.paddingRight,
                property: "padding-right",
                el: e,
              }),
                (e.style.paddingRight = "".concat(On(e) + o, "px"));
            });
          }
          var a;
          if (r.parentNode instanceof DocumentFragment) a = (0, Zn.Z)(r).body;
          else {
            var l = r.parentElement,
              s = (0, v.Z)(r);
            a =
              "HTML" === (null == l ? void 0 : l.nodeName) &&
              "scroll" === s.getComputedStyle(l).overflowY
                ? l
                : r;
          }
          n.push(
            { value: a.style.overflow, property: "overflow", el: a },
            { value: a.style.overflowX, property: "overflow-x", el: a },
            { value: a.style.overflowY, property: "overflow-y", el: a }
          ),
            (a.style.overflow = "hidden");
        }
        return function () {
          n.forEach(function (e) {
            var t = e.value,
              n = e.el,
              r = e.property;
            t ? n.style.setProperty(r, t) : n.style.removeProperty(r);
          });
        };
      }
      var An = (function () {
          function e() {
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
              (this.containers = void 0),
              (this.modals = void 0),
              (this.modals = []),
              (this.containers = []);
          }
          var t, n, r;
          return (
            (t = e),
            (n = [
              {
                key: "add",
                value: function (e, t) {
                  var n = this.modals.indexOf(e);
                  if (-1 !== n) return n;
                  (n = this.modals.length),
                    this.modals.push(e),
                    e.modalRef && jn(e.modalRef, !1);
                  var r = (function (e) {
                    var t = [];
                    return (
                      [].forEach.call(e.children, function (e) {
                        "true" === e.getAttribute("aria-hidden") && t.push(e);
                      }),
                      t
                    );
                  })(t);
                  Nn(t, e.mount, e.modalRef, r, !0);
                  var o = Ln(this.containers, function (e) {
                    return e.container === t;
                  });
                  return -1 !== o
                    ? (this.containers[o].modals.push(e), n)
                    : (this.containers.push({
                        modals: [e],
                        container: t,
                        restore: null,
                        hiddenSiblings: r,
                      }),
                      n);
                },
              },
              {
                key: "mount",
                value: function (e, t) {
                  var n = Ln(this.containers, function (t) {
                      return -1 !== t.modals.indexOf(e);
                    }),
                    r = this.containers[n];
                  r.restore || (r.restore = _n(r, t));
                },
              },
              {
                key: "remove",
                value: function (e) {
                  var t =
                      !(arguments.length > 1 && void 0 !== arguments[1]) ||
                      arguments[1],
                    n = this.modals.indexOf(e);
                  if (-1 === n) return n;
                  var r = Ln(this.containers, function (t) {
                      return -1 !== t.modals.indexOf(e);
                    }),
                    o = this.containers[r];
                  if (
                    (o.modals.splice(o.modals.indexOf(e), 1),
                    this.modals.splice(n, 1),
                    0 === o.modals.length)
                  )
                    o.restore && o.restore(),
                      e.modalRef && jn(e.modalRef, t),
                      Nn(
                        o.container,
                        e.mount,
                        e.modalRef,
                        o.hiddenSiblings,
                        !1
                      ),
                      this.containers.splice(r, 1);
                  else {
                    var i = o.modals[o.modals.length - 1];
                    i.modalRef && jn(i.modalRef, !1);
                  }
                  return n;
                },
              },
              {
                key: "isTopModal",
                value: function (e) {
                  return (
                    this.modals.length > 0 &&
                    this.modals[this.modals.length - 1] === e
                  );
                },
              },
            ]),
            n && Rn(t.prototype, n),
            r && Rn(t, r),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            e
          );
        })(),
        Fn = [
          "input",
          "select",
          "textarea",
          "a[href]",
          "button",
          "[tabindex]",
          "audio[controls]",
          "video[controls]",
          '[contenteditable]:not([contenteditable="false"])',
        ].join(",");
      function In(e) {
        var t = [],
          n = [];
        return (
          Array.from(e.querySelectorAll(Fn)).forEach(function (e, r) {
            var o = (function (e) {
              var t = parseInt(e.getAttribute("tabindex"), 10);
              return Number.isNaN(t)
                ? "true" === e.contentEditable ||
                  (("AUDIO" === e.nodeName ||
                    "VIDEO" === e.nodeName ||
                    "DETAILS" === e.nodeName) &&
                    null === e.getAttribute("tabindex"))
                  ? 0
                  : e.tabIndex
                : t;
            })(e);
            -1 !== o &&
              (function (e) {
                return !(
                  e.disabled ||
                  ("INPUT" === e.tagName && "hidden" === e.type) ||
                  (function (e) {
                    if ("INPUT" !== e.tagName || "radio" !== e.type) return !1;
                    if (!e.name) return !1;
                    var t = function (t) {
                        return e.ownerDocument.querySelector(
                          'input[type="radio"]'.concat(t)
                        );
                      },
                      n = t('[name="'.concat(e.name, '"]:checked'));
                    return (
                      n || (n = t('[name="'.concat(e.name, '"]'))), n !== e
                    );
                  })(e)
                );
              })(e) &&
              (0 === o
                ? t.push(e)
                : n.push({ documentOrder: r, tabIndex: o, node: e }));
          }),
          n
            .sort(function (e, t) {
              return e.tabIndex === t.tabIndex
                ? e.documentOrder - t.documentOrder
                : e.tabIndex - t.tabIndex;
            })
            .map(function (e) {
              return e.node;
            })
            .concat(t)
        );
      }
      function Dn() {
        return !0;
      }
      var Wn = function (t) {
        var n = t.children,
          r = t.disableAutoFocus,
          o = void 0 !== r && r,
          i = t.disableEnforceFocus,
          a = void 0 !== i && i,
          l = t.disableRestoreFocus,
          s = void 0 !== l && l,
          u = t.getTabbable,
          c = void 0 === u ? In : u,
          d = t.isEnabled,
          f = void 0 === d ? Dn : d,
          p = t.open,
          h = e.useRef(),
          v = e.useRef(null),
          g = e.useRef(null),
          y = e.useRef(null),
          x = e.useRef(null),
          w = e.useRef(!1),
          k = e.useRef(null),
          S = (0, m.Z)(n.ref, k),
          Z = e.useRef(null);
        e.useEffect(
          function () {
            p && k.current && (w.current = !o);
          },
          [o, p]
        ),
          e.useEffect(
            function () {
              if (p && k.current) {
                var e = (0, Zn.Z)(k.current);
                return (
                  k.current.contains(e.activeElement) ||
                    (k.current.hasAttribute("tabIndex") ||
                      k.current.setAttribute("tabIndex", -1),
                    w.current && k.current.focus()),
                  function () {
                    s ||
                      (y.current &&
                        y.current.focus &&
                        ((h.current = !0), y.current.focus()),
                      (y.current = null));
                  }
                );
              }
            },
            [p]
          ),
          e.useEffect(
            function () {
              if (p && k.current) {
                var e = (0, Zn.Z)(k.current),
                  t = function (t) {
                    var n = k.current;
                    if (null !== n)
                      if (e.hasFocus() && !a && f() && !h.current) {
                        if (!n.contains(e.activeElement)) {
                          if (
                            (t && x.current !== t.target) ||
                            e.activeElement !== x.current
                          )
                            x.current = null;
                          else if (null !== x.current) return;
                          if (!w.current) return;
                          var r = [];
                          if (
                            ((e.activeElement !== v.current &&
                              e.activeElement !== g.current) ||
                              (r = c(k.current)),
                            r.length > 0)
                          ) {
                            var o,
                              i,
                              l = Boolean(
                                (null == (o = Z.current)
                                  ? void 0
                                  : o.shiftKey) &&
                                  "Tab" ===
                                    (null == (i = Z.current) ? void 0 : i.key)
                              ),
                              s = r[0],
                              u = r[r.length - 1];
                            l ? u.focus() : s.focus();
                          } else n.focus();
                        }
                      } else h.current = !1;
                  },
                  n = function (t) {
                    (Z.current = t),
                      !a &&
                        f() &&
                        "Tab" === t.key &&
                        e.activeElement === k.current &&
                        t.shiftKey &&
                        ((h.current = !0), g.current.focus());
                  };
                e.addEventListener("focusin", t),
                  e.addEventListener("keydown", n, !0);
                var r = setInterval(function () {
                  "BODY" === e.activeElement.tagName && t();
                }, 50);
                return function () {
                  clearInterval(r),
                    e.removeEventListener("focusin", t),
                    e.removeEventListener("keydown", n, !0);
                };
              }
            },
            [o, a, s, f, p, c]
          );
        var E = function (e) {
          null === y.current && (y.current = e.relatedTarget), (w.current = !0);
        };
        return (0, b.jsxs)(e.Fragment, {
          children: [
            (0, b.jsx)("div", {
              tabIndex: p ? 0 : -1,
              onFocus: E,
              ref: v,
              "data-testid": "sentinelStart",
            }),
            e.cloneElement(n, {
              ref: S,
              onFocus: function (e) {
                null === y.current && (y.current = e.relatedTarget),
                  (w.current = !0),
                  (x.current = e.target);
                var t = n.props.onFocus;
                t && t(e);
              },
            }),
            (0, b.jsx)("div", {
              tabIndex: p ? 0 : -1,
              onFocus: E,
              ref: g,
              "data-testid": "sentinelEnd",
            }),
          ],
        });
      };
      function Bn(e) {
        return (0, q.Z)("MuiModal", e);
      }
      (0, K.Z)("MuiModal", ["root", "hidden"]);
      function Vn(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = arguments.length > 2 ? arguments[2] : void 0;
        return C(e)
          ? t
          : (0, c.Z)({}, t, { ownerState: (0, c.Z)({}, t.ownerState, n) });
      }
      function Hn(e) {
        if (void 0 === e) return {};
        var t = {};
        return (
          Object.keys(e)
            .filter(function (t) {
              return !(t.match(/^on[A-Z]/) && "function" === typeof e[t]);
            })
            .forEach(function (n) {
              t[n] = e[n];
            }),
          t
        );
      }
      function Un(e) {
        var t = e.getSlotProps,
          n = e.additionalProps,
          r = e.externalSlotProps,
          o = e.externalForwardedProps,
          i = e.className;
        if (!t) {
          var a = (0, h.Z)(
              null == o ? void 0 : o.className,
              null == r ? void 0 : r.className,
              i,
              null == n ? void 0 : n.className
            ),
            l = (0, c.Z)(
              {},
              null == n ? void 0 : n.style,
              null == o ? void 0 : o.style,
              null == r ? void 0 : r.style
            ),
            s = (0, c.Z)({}, n, o, r);
          return (
            a.length > 0 && (s.className = a),
            Object.keys(l).length > 0 && (s.style = l),
            { props: s, internalRef: void 0 }
          );
        }
        var u = (function (e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : [];
            if (void 0 === e) return {};
            var n = {};
            return (
              Object.keys(e)
                .filter(function (n) {
                  return (
                    n.match(/^on[A-Z]/) &&
                    "function" === typeof e[n] &&
                    !t.includes(n)
                  );
                })
                .forEach(function (t) {
                  n[t] = e[t];
                }),
              n
            );
          })((0, c.Z)({}, o, r)),
          d = Hn(r),
          f = Hn(o),
          p = t(u),
          m = (0, h.Z)(
            null == p ? void 0 : p.className,
            null == n ? void 0 : n.className,
            i,
            null == o ? void 0 : o.className,
            null == r ? void 0 : r.className
          ),
          v = (0, c.Z)(
            {},
            null == p ? void 0 : p.style,
            null == n ? void 0 : n.style,
            null == o ? void 0 : o.style,
            null == r ? void 0 : r.style
          ),
          g = (0, c.Z)({}, p, n, f, d);
        return (
          m.length > 0 && (g.className = m),
          Object.keys(v).length > 0 && (g.style = v),
          { props: g, internalRef: p.ref }
        );
      }
      function $n(e, t) {
        return "function" === typeof e ? e(t) : e;
      }
      var qn = ["elementType", "externalSlotProps", "ownerState"];
      function Kn(e) {
        var t,
          n = e.elementType,
          r = e.externalSlotProps,
          o = e.ownerState,
          i = (0, u.Z)(e, qn),
          a = $n(r, o),
          l = Un((0, c.Z)({}, i, { externalSlotProps: a })),
          s = l.props,
          d = l.internalRef,
          f = (0, m.Z)(
            d,
            (0, m.Z)(
              null == a ? void 0 : a.ref,
              null == (t = e.additionalProps) ? void 0 : t.ref
            )
          );
        return Vn(n, (0, c.Z)({}, s, { ref: f }), o);
      }
      var Gn = [
        "children",
        "classes",
        "closeAfterTransition",
        "component",
        "components",
        "componentsProps",
        "container",
        "disableAutoFocus",
        "disableEnforceFocus",
        "disableEscapeKeyDown",
        "disablePortal",
        "disableRestoreFocus",
        "disableScrollLock",
        "hideBackdrop",
        "keepMounted",
        "manager",
        "onBackdropClick",
        "onClose",
        "onKeyDown",
        "open",
        "onTransitionEnter",
        "onTransitionExited",
      ];
      var Qn = new An(),
        Yn = e.forwardRef(function (t, n) {
          var r,
            o = t.children,
            a = t.classes,
            l = t.closeAfterTransition,
            s = void 0 !== l && l,
            f = t.component,
            p = void 0 === f ? "div" : f,
            h = t.components,
            v = void 0 === h ? {} : h,
            g = t.componentsProps,
            y = void 0 === g ? {} : g,
            x = t.container,
            w = t.disableAutoFocus,
            k = void 0 !== w && w,
            S = t.disableEnforceFocus,
            Z = void 0 !== S && S,
            E = t.disableEscapeKeyDown,
            C = void 0 !== E && E,
            P = t.disablePortal,
            M = void 0 !== P && P,
            R = t.disableRestoreFocus,
            T = void 0 !== R && R,
            j = t.disableScrollLock,
            O = void 0 !== j && j,
            z = t.hideBackdrop,
            N = void 0 !== z && z,
            L = t.keepMounted,
            _ = void 0 !== L && L,
            A = t.manager,
            F = void 0 === A ? Qn : A,
            I = t.onBackdropClick,
            D = t.onClose,
            W = t.onKeyDown,
            B = t.open,
            V = t.onTransitionEnter,
            H = t.onTransitionExited,
            U = (0, u.Z)(t, Gn),
            $ = e.useState(!0),
            q = (0, i.Z)($, 2),
            K = q[0],
            G = q[1],
            Q = e.useRef({}),
            Y = e.useRef(null),
            X = e.useRef(null),
            J = (0, m.Z)(X, n),
            ee = (function (e) {
              return !!e.children && e.children.props.hasOwnProperty("in");
            })(t),
            te = null == (r = t["aria-hidden"]) || r,
            ne = function () {
              return (
                (Q.current.modalRef = X.current),
                (Q.current.mountNode = Y.current),
                Q.current
              );
            },
            re = function () {
              F.mount(ne(), { disableScrollLock: O }),
                (X.current.scrollTop = 0);
            },
            oe = (0, En.Z)(function () {
              var e =
                (function (e) {
                  return "function" === typeof e ? e() : e;
                })(x) || (0, Zn.Z)(Y.current).body;
              F.add(ne(), e), X.current && re();
            }),
            ie = e.useCallback(
              function () {
                return F.isTopModal(ne());
              },
              [F]
            ),
            ae = (0, En.Z)(function (e) {
              (Y.current = e), e && (B && ie() ? re() : jn(X.current, te));
            }),
            le = e.useCallback(
              function () {
                F.remove(ne(), te);
              },
              [F, te]
            );
          e.useEffect(
            function () {
              return function () {
                le();
              };
            },
            [le]
          ),
            e.useEffect(
              function () {
                B ? oe() : (ee && s) || le();
              },
              [B, le, ee, s, oe]
            );
          var se = (0, c.Z)({}, t, {
              classes: a,
              closeAfterTransition: s,
              disableAutoFocus: k,
              disableEnforceFocus: Z,
              disableEscapeKeyDown: C,
              disablePortal: M,
              disableRestoreFocus: T,
              disableScrollLock: O,
              exited: K,
              hideBackdrop: N,
              keepMounted: _,
            }),
            ue = (function (e) {
              var t = e.open,
                n = e.exited,
                r = e.classes,
                o = { root: ["root", !t && n && "hidden"] };
              return (0, d.Z)(o, Bn, r);
            })(se),
            ce = {};
          void 0 === o.props.tabIndex && (ce.tabIndex = "-1"),
            ee &&
              ((ce.onEnter = (0, Cn.Z)(function () {
                G(!1), V && V();
              }, o.props.onEnter)),
              (ce.onExited = (0, Cn.Z)(function () {
                G(!0), H && H(), s && le();
              }, o.props.onExited)));
          var de = v.Root || p,
            fe = Kn({
              elementType: de,
              externalSlotProps: y.root,
              externalForwardedProps: U,
              additionalProps: {
                ref: J,
                role: "presentation",
                onKeyDown: function (e) {
                  W && W(e),
                    "Escape" === e.key &&
                      ie() &&
                      (C || (e.stopPropagation(), D && D(e, "escapeKeyDown")));
                },
              },
              className: ue.root,
              ownerState: se,
            }),
            pe = v.Backdrop,
            he = Kn({
              elementType: pe,
              externalSlotProps: y.backdrop,
              additionalProps: {
                "aria-hidden": !0,
                onClick: function (e) {
                  e.target === e.currentTarget &&
                    (I && I(e), D && D(e, "backdropClick"));
                },
                open: B,
              },
              ownerState: se,
            });
          return _ || B || (ee && !K)
            ? (0, b.jsx)(Mn, {
                ref: ae,
                container: x,
                disablePortal: M,
                children: (0, b.jsxs)(
                  de,
                  (0, c.Z)({}, fe, {
                    children: [
                      !N && pe ? (0, b.jsx)(pe, (0, c.Z)({}, he)) : null,
                      (0, b.jsx)(Wn, {
                        disableEnforceFocus: Z,
                        disableAutoFocus: k,
                        disableRestoreFocus: T,
                        isEnabled: ie,
                        open: B,
                        children: e.cloneElement(o, ce),
                      }),
                    ],
                  })
                ),
              })
            : null;
        }),
        Xn = !1,
        Jn = "unmounted",
        er = "exited",
        tr = "entering",
        nr = "entered",
        rr = "exiting",
        or = (function (t) {
          function n(e, n) {
            var r;
            r = t.call(this, e, n) || this;
            var o,
              i = n && !n.isMounting ? e.enter : e.appear;
            return (
              (r.appearStatus = null),
              e.in
                ? i
                  ? ((o = er), (r.appearStatus = tr))
                  : (o = nr)
                : (o = e.unmountOnExit || e.mountOnEnter ? Jn : er),
              (r.state = { status: o }),
              (r.nextCallback = null),
              r
            );
          }
          ye(n, t),
            (n.getDerivedStateFromProps = function (e, t) {
              return e.in && t.status === Jn ? { status: er } : null;
            });
          var o = n.prototype;
          return (
            (o.componentDidMount = function () {
              this.updateStatus(!0, this.appearStatus);
            }),
            (o.componentDidUpdate = function (e) {
              var t = null;
              if (e !== this.props) {
                var n = this.state.status;
                this.props.in
                  ? n !== tr && n !== nr && (t = tr)
                  : (n !== tr && n !== nr) || (t = rr);
              }
              this.updateStatus(!1, t);
            }),
            (o.componentWillUnmount = function () {
              this.cancelNextCallback();
            }),
            (o.getTimeouts = function () {
              var e,
                t,
                n,
                r = this.props.timeout;
              return (
                (e = t = n = r),
                null != r &&
                  "number" !== typeof r &&
                  ((e = r.exit),
                  (t = r.enter),
                  (n = void 0 !== r.appear ? r.appear : t)),
                { exit: e, enter: t, appear: n }
              );
            }),
            (o.updateStatus = function (e, t) {
              if ((void 0 === e && (e = !1), null !== t))
                if ((this.cancelNextCallback(), t === tr)) {
                  if (this.props.unmountOnExit || this.props.mountOnEnter) {
                    var n = this.props.nodeRef
                      ? this.props.nodeRef.current
                      : r.findDOMNode(this);
                    n &&
                      (function (e) {
                        e.scrollTop;
                      })(n);
                  }
                  this.performEnter(e);
                } else this.performExit();
              else
                this.props.unmountOnExit &&
                  this.state.status === er &&
                  this.setState({ status: Jn });
            }),
            (o.performEnter = function (e) {
              var t = this,
                n = this.props.enter,
                o = this.context ? this.context.isMounting : e,
                i = this.props.nodeRef ? [o] : [r.findDOMNode(this), o],
                a = i[0],
                l = i[1],
                s = this.getTimeouts(),
                u = o ? s.appear : s.enter;
              (!e && !n) || Xn
                ? this.safeSetState({ status: nr }, function () {
                    t.props.onEntered(a);
                  })
                : (this.props.onEnter(a, l),
                  this.safeSetState({ status: tr }, function () {
                    t.props.onEntering(a, l),
                      t.onTransitionEnd(u, function () {
                        t.safeSetState({ status: nr }, function () {
                          t.props.onEntered(a, l);
                        });
                      });
                  }));
            }),
            (o.performExit = function () {
              var e = this,
                t = this.props.exit,
                n = this.getTimeouts(),
                o = this.props.nodeRef ? void 0 : r.findDOMNode(this);
              t && !Xn
                ? (this.props.onExit(o),
                  this.safeSetState({ status: rr }, function () {
                    e.props.onExiting(o),
                      e.onTransitionEnd(n.exit, function () {
                        e.safeSetState({ status: er }, function () {
                          e.props.onExited(o);
                        });
                      });
                  }))
                : this.safeSetState({ status: er }, function () {
                    e.props.onExited(o);
                  });
            }),
            (o.cancelNextCallback = function () {
              null !== this.nextCallback &&
                (this.nextCallback.cancel(), (this.nextCallback = null));
            }),
            (o.safeSetState = function (e, t) {
              (t = this.setNextCallback(t)), this.setState(e, t);
            }),
            (o.setNextCallback = function (e) {
              var t = this,
                n = !0;
              return (
                (this.nextCallback = function (r) {
                  n && ((n = !1), (t.nextCallback = null), e(r));
                }),
                (this.nextCallback.cancel = function () {
                  n = !1;
                }),
                this.nextCallback
              );
            }),
            (o.onTransitionEnd = function (e, t) {
              this.setNextCallback(t);
              var n = this.props.nodeRef
                  ? this.props.nodeRef.current
                  : r.findDOMNode(this),
                o = null == e && !this.props.addEndListener;
              if (n && !o) {
                if (this.props.addEndListener) {
                  var i = this.props.nodeRef
                      ? [this.nextCallback]
                      : [n, this.nextCallback],
                    a = i[0],
                    l = i[1];
                  this.props.addEndListener(a, l);
                }
                null != e && setTimeout(this.nextCallback, e);
              } else setTimeout(this.nextCallback, 0);
            }),
            (o.render = function () {
              var t = this.state.status;
              if (t === Jn) return null;
              var n = this.props,
                r = n.children,
                o =
                  (n.in,
                  n.mountOnEnter,
                  n.unmountOnExit,
                  n.appear,
                  n.enter,
                  n.exit,
                  n.timeout,
                  n.addEndListener,
                  n.onEnter,
                  n.onEntering,
                  n.onEntered,
                  n.onExit,
                  n.onExiting,
                  n.onExited,
                  n.nodeRef,
                  (0, u.Z)(n, [
                    "children",
                    "in",
                    "mountOnEnter",
                    "unmountOnExit",
                    "appear",
                    "enter",
                    "exit",
                    "timeout",
                    "addEndListener",
                    "onEnter",
                    "onEntering",
                    "onEntered",
                    "onExit",
                    "onExiting",
                    "onExited",
                    "nodeRef",
                  ]));
              return e.createElement(
                be.Provider,
                { value: null },
                "function" === typeof r
                  ? r(t, o)
                  : e.cloneElement(e.Children.only(r), o)
              );
            }),
            n
          );
        })(e.Component);
      function ir() {}
      (or.contextType = be),
        (or.propTypes = {}),
        (or.defaultProps = {
          in: !1,
          mountOnEnter: !1,
          unmountOnExit: !1,
          appear: !1,
          enter: !0,
          exit: !0,
          onEnter: ir,
          onEntering: ir,
          onEntered: ir,
          onExit: ir,
          onExiting: ir,
          onExited: ir,
        }),
        (or.UNMOUNTED = Jn),
        (or.EXITED = er),
        (or.ENTERING = tr),
        (or.ENTERED = nr),
        (or.EXITING = rr);
      var ar = or;
      function lr() {
        return (0, Ut.Z)(V.Z);
      }
      var sr = function (e) {
        return e.scrollTop;
      };
      function ur(e, t) {
        var n,
          r,
          o = e.timeout,
          i = e.easing,
          a = e.style,
          l = void 0 === a ? {} : a;
        return {
          duration:
            null != (n = l.transitionDuration)
              ? n
              : "number" === typeof o
              ? o
              : o[t.mode] || 0,
          easing:
            null != (r = l.transitionTimingFunction)
              ? r
              : "object" === typeof i
              ? i[t.mode]
              : i,
          delay: l.transitionDelay,
        };
      }
      var cr = [
          "addEndListener",
          "appear",
          "children",
          "easing",
          "in",
          "onEnter",
          "onEntered",
          "onEntering",
          "onExit",
          "onExited",
          "onExiting",
          "style",
          "timeout",
          "TransitionComponent",
        ],
        dr = { entering: { opacity: 1 }, entered: { opacity: 1 } },
        fr = e.forwardRef(function (t, n) {
          var r = lr(),
            o = {
              enter: r.transitions.duration.enteringScreen,
              exit: r.transitions.duration.leavingScreen,
            },
            i = t.addEndListener,
            a = t.appear,
            l = void 0 === a || a,
            s = t.children,
            d = t.easing,
            f = t.in,
            p = t.onEnter,
            h = t.onEntered,
            m = t.onEntering,
            v = t.onExit,
            g = t.onExited,
            y = t.onExiting,
            x = t.style,
            w = t.timeout,
            k = void 0 === w ? o : w,
            S = t.TransitionComponent,
            Z = void 0 === S ? ar : S,
            E = (0, u.Z)(t, cr),
            C = e.useRef(null),
            P = (0, z.Z)(s.ref, n),
            M = (0, z.Z)(C, P),
            R = function (e) {
              return function (t) {
                if (e) {
                  var n = C.current;
                  void 0 === t ? e(n) : e(n, t);
                }
              };
            },
            T = R(m),
            j = R(function (e, t) {
              sr(e);
              var n = ur(
                { style: x, timeout: k, easing: d },
                { mode: "enter" }
              );
              (e.style.webkitTransition = r.transitions.create("opacity", n)),
                (e.style.transition = r.transitions.create("opacity", n)),
                p && p(e, t);
            }),
            O = R(h),
            N = R(y),
            L = R(function (e) {
              var t = ur({ style: x, timeout: k, easing: d }, { mode: "exit" });
              (e.style.webkitTransition = r.transitions.create("opacity", t)),
                (e.style.transition = r.transitions.create("opacity", t)),
                v && v(e);
            }),
            _ = R(g);
          return (0, b.jsx)(
            Z,
            (0, c.Z)(
              {
                appear: l,
                in: f,
                nodeRef: C,
                onEnter: j,
                onEntered: O,
                onEntering: T,
                onExit: L,
                onExited: _,
                onExiting: N,
                addEndListener: function (e) {
                  i && i(C.current, e);
                },
                timeout: k,
              },
              E,
              {
                children: function (t, n) {
                  return e.cloneElement(
                    s,
                    (0, c.Z)(
                      {
                        style: (0, c.Z)(
                          {
                            opacity: 0,
                            visibility: "exited" !== t || f ? void 0 : "hidden",
                          },
                          dr[t],
                          x,
                          s.props.style
                        ),
                        ref: M,
                      },
                      n
                    )
                  );
                },
              }
            )
          );
        }),
        pr = fr;
      function hr(e) {
        return (0, q.Z)("MuiBackdrop", e);
      }
      (0, K.Z)("MuiBackdrop", ["root", "invisible"]);
      var mr = [
          "children",
          "component",
          "components",
          "componentsProps",
          "className",
          "invisible",
          "open",
          "transitionDuration",
          "TransitionComponent",
        ],
        vr = (0, T.ZP)("div", {
          name: "MuiBackdrop",
          slot: "Root",
          overridesResolver: function (e, t) {
            var n = e.ownerState;
            return [t.root, n.invisible && t.invisible];
          },
        })(function (e) {
          var t = e.ownerState;
          return (0,
          c.Z)({ position: "fixed", display: "flex", alignItems: "center", justifyContent: "center", right: 0, bottom: 0, top: 0, left: 0, backgroundColor: "rgba(0, 0, 0, 0.5)", WebkitTapHighlightColor: "transparent" }, t.invisible && { backgroundColor: "transparent" });
        }),
        gr = e.forwardRef(function (e, t) {
          var n,
            r,
            o = (0, j.Z)({ props: e, name: "MuiBackdrop" }),
            i = o.children,
            a = o.component,
            l = void 0 === a ? "div" : a,
            s = o.components,
            f = void 0 === s ? {} : s,
            p = o.componentsProps,
            m = void 0 === p ? {} : p,
            v = o.className,
            g = o.invisible,
            y = void 0 !== g && g,
            x = o.open,
            w = o.transitionDuration,
            k = o.TransitionComponent,
            S = void 0 === k ? pr : k,
            Z = (0, u.Z)(o, mr),
            E = (0, c.Z)({}, o, { component: l, invisible: y }),
            C = (function (e) {
              var t = e.classes,
                n = { root: ["root", e.invisible && "invisible"] };
              return (0, d.Z)(n, hr, t);
            })(E);
          return (0,
          b.jsx)(S, (0, c.Z)({ in: x, timeout: w }, Z, { children: (0, b.jsx)(vr, { "aria-hidden": !0, as: null != (n = f.Root) ? n : l, className: (0, h.Z)(C.root, v), ownerState: (0, c.Z)({}, E, null == (r = m.root) ? void 0 : r.ownerState), classes: C, ref: t, children: i }) }));
        }),
        yr = [
          "BackdropComponent",
          "BackdropProps",
          "closeAfterTransition",
          "children",
          "component",
          "components",
          "componentsProps",
          "disableAutoFocus",
          "disableEnforceFocus",
          "disableEscapeKeyDown",
          "disablePortal",
          "disableRestoreFocus",
          "disableScrollLock",
          "hideBackdrop",
          "keepMounted",
          "theme",
        ],
        br = (0, T.ZP)("div", {
          name: "MuiModal",
          slot: "Root",
          overridesResolver: function (e, t) {
            var n = e.ownerState;
            return [t.root, !n.open && n.exited && t.hidden];
          },
        })(function (e) {
          var t = e.theme,
            n = e.ownerState;
          return (0,
          c.Z)({ position: "fixed", zIndex: (t.vars || t).zIndex.modal, right: 0, bottom: 0, top: 0, left: 0 }, !n.open && n.exited && { visibility: "hidden" });
        }),
        xr = (0, T.ZP)(gr, {
          name: "MuiModal",
          slot: "Backdrop",
          overridesResolver: function (e, t) {
            return t.backdrop;
          },
        })({ zIndex: -1 }),
        wr = e.forwardRef(function (t, n) {
          var r,
            o,
            a = (0, j.Z)({ name: "MuiModal", props: t }),
            l = a.BackdropComponent,
            s = void 0 === l ? xr : l,
            d = a.BackdropProps,
            f = a.closeAfterTransition,
            p = void 0 !== f && f,
            h = a.children,
            m = a.component,
            v = a.components,
            g = void 0 === v ? {} : v,
            y = a.componentsProps,
            x = void 0 === y ? {} : y,
            w = a.disableAutoFocus,
            k = void 0 !== w && w,
            S = a.disableEnforceFocus,
            Z = void 0 !== S && S,
            E = a.disableEscapeKeyDown,
            P = void 0 !== E && E,
            M = a.disablePortal,
            R = void 0 !== M && M,
            T = a.disableRestoreFocus,
            O = void 0 !== T && T,
            z = a.disableScrollLock,
            N = void 0 !== z && z,
            L = a.hideBackdrop,
            _ = void 0 !== L && L,
            A = a.keepMounted,
            F = void 0 !== A && A,
            I = a.theme,
            D = (0, u.Z)(a, yr),
            W = e.useState(!0),
            B = (0, i.Z)(W, 2),
            V = B[0],
            H = B[1],
            U = {
              closeAfterTransition: p,
              disableAutoFocus: k,
              disableEnforceFocus: Z,
              disableEscapeKeyDown: P,
              disablePortal: R,
              disableRestoreFocus: O,
              disableScrollLock: N,
              hideBackdrop: _,
              keepMounted: F,
            },
            $ = (0, c.Z)({}, a, U, { exited: V }),
            q = (function (e) {
              return e.classes;
            })($),
            K = null != (r = null != (o = g.Root) ? o : m) ? r : br;
          return (0, b.jsx)(
            Yn,
            (0, c.Z)(
              {
                components: (0, c.Z)({ Root: K, Backdrop: s }, g),
                componentsProps: {
                  root: function () {
                    return (0, c.Z)(
                      {},
                      $n(x.root, $),
                      !C(K) && { as: m, theme: I }
                    );
                  },
                  backdrop: function () {
                    return (0, c.Z)({}, d, $n(x.backdrop, $));
                  },
                },
                onTransitionEnter: function () {
                  return H(!1);
                },
                onTransitionExited: function () {
                  return H(!0);
                },
                ref: n,
              },
              D,
              { classes: q },
              U,
              { children: h }
            )
          );
        }),
        kr = wr,
        Sr = n(7312),
        Zr = n(6083),
        Er = (0, n(4046).ZP)(),
        Cr = n(5080),
        Pr = [
          "className",
          "component",
          "disableGutters",
          "fixed",
          "maxWidth",
          "classes",
        ],
        Mr = (0, Cr.Z)(),
        Rr = Er("div", {
          name: "MuiContainer",
          slot: "Root",
          overridesResolver: function (e, t) {
            var n = e.ownerState;
            return [
              t.root,
              t["maxWidth".concat((0, Sr.Z)(String(n.maxWidth)))],
              n.fixed && t.fixed,
              n.disableGutters && t.disableGutters,
            ];
          },
        }),
        Tr = function (e) {
          return (0, Zr.Z)({
            props: e,
            name: "MuiContainer",
            defaultTheme: Mr,
          });
        },
        jr = function (e, t) {
          var n = e.classes,
            r = e.fixed,
            o = e.disableGutters,
            i = e.maxWidth,
            a = {
              root: [
                "root",
                i && "maxWidth".concat((0, Sr.Z)(String(i))),
                r && "fixed",
                o && "disableGutters",
              ],
            };
          return (0, d.Z)(
            a,
            function (e) {
              return (0, q.Z)(t, e);
            },
            n
          );
        };
      var Or = (function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            n = t.createStyledComponent,
            r = void 0 === n ? Rr : n,
            o = t.useThemeProps,
            i = void 0 === o ? Tr : o,
            l = t.componentName,
            s = void 0 === l ? "MuiContainer" : l,
            d = r(
              function (e) {
                var t = e.theme,
                  n = e.ownerState;
                return (0, c.Z)(
                  {
                    width: "100%",
                    marginLeft: "auto",
                    boxSizing: "border-box",
                    marginRight: "auto",
                    display: "block",
                  },
                  !n.disableGutters &&
                    (0, a.Z)(
                      { paddingLeft: t.spacing(2), paddingRight: t.spacing(2) },
                      t.breakpoints.up("sm"),
                      { paddingLeft: t.spacing(3), paddingRight: t.spacing(3) }
                    )
                );
              },
              function (e) {
                var t = e.theme;
                return (
                  e.ownerState.fixed &&
                  Object.keys(t.breakpoints.values).reduce(function (e, n) {
                    var r = n,
                      o = t.breakpoints.values[r];
                    return (
                      0 !== o &&
                        (e[t.breakpoints.up(r)] = {
                          maxWidth: "".concat(o).concat(t.breakpoints.unit),
                        }),
                      e
                    );
                  }, {})
                );
              },
              function (e) {
                var t = e.theme,
                  n = e.ownerState;
                return (0, c.Z)(
                  {},
                  "xs" === n.maxWidth &&
                    (0, a.Z)({}, t.breakpoints.up("xs"), {
                      maxWidth: Math.max(t.breakpoints.values.xs, 444),
                    }),
                  n.maxWidth &&
                    "xs" !== n.maxWidth &&
                    (0, a.Z)({}, t.breakpoints.up(n.maxWidth), {
                      maxWidth: ""
                        .concat(t.breakpoints.values[n.maxWidth])
                        .concat(t.breakpoints.unit),
                    })
                );
              }
            ),
            f = e.forwardRef(function (e, t) {
              var n = i(e),
                r = n.className,
                o = n.component,
                a = void 0 === o ? "div" : o,
                l = n.disableGutters,
                f = void 0 !== l && l,
                p = n.fixed,
                m = void 0 !== p && p,
                v = n.maxWidth,
                g = void 0 === v ? "lg" : v,
                y = (0, u.Z)(n, Pr),
                x = (0, c.Z)({}, n, {
                  component: a,
                  disableGutters: f,
                  fixed: m,
                  maxWidth: g,
                }),
                w = jr(x, s);
              return (0,
              b.jsx)(d, (0, c.Z)({ as: a, ownerState: x, className: (0, h.Z)(w.root, r), ref: t }, y));
            });
          return f;
        })({
          createStyledComponent: (0, T.ZP)("div", {
            name: "MuiContainer",
            slot: "Root",
            overridesResolver: function (e, t) {
              var n = e.ownerState;
              return [
                t.root,
                t["maxWidth".concat((0, O.Z)(String(n.maxWidth)))],
                n.fixed && t.fixed,
                n.disableGutters && t.disableGutters,
              ];
            },
          }),
          useThemeProps: function (e) {
            return (0, j.Z)({ props: e, name: "MuiContainer" });
          },
        }),
        zr = Or;
      function Nr(e) {
        return (0, q.Z)("MuiPaper", e);
      }
      (0, K.Z)("MuiPaper", [
        "root",
        "rounded",
        "outlined",
        "elevation",
        "elevation0",
        "elevation1",
        "elevation2",
        "elevation3",
        "elevation4",
        "elevation5",
        "elevation6",
        "elevation7",
        "elevation8",
        "elevation9",
        "elevation10",
        "elevation11",
        "elevation12",
        "elevation13",
        "elevation14",
        "elevation15",
        "elevation16",
        "elevation17",
        "elevation18",
        "elevation19",
        "elevation20",
        "elevation21",
        "elevation22",
        "elevation23",
        "elevation24",
      ]);
      var Lr = ["className", "component", "elevation", "square", "variant"],
        _r = function (e) {
          return (
            (e < 1 ? 5.11916 * Math.pow(e, 2) : 4.5 * Math.log(e + 1) + 2) / 100
          ).toFixed(2);
        },
        Ar = (0, T.ZP)("div", {
          name: "MuiPaper",
          slot: "Root",
          overridesResolver: function (e, t) {
            var n = e.ownerState;
            return [
              t.root,
              t[n.variant],
              !n.square && t.rounded,
              "elevation" === n.variant && t["elevation".concat(n.elevation)],
            ];
          },
        })(function (e) {
          var t,
            n = e.theme,
            r = e.ownerState;
          return (0,
          c.Z)({ backgroundColor: (n.vars || n).palette.background.paper, color: (n.vars || n).palette.text.primary, transition: n.transitions.create("box-shadow") }, !r.square && { borderRadius: n.shape.borderRadius }, "outlined" === r.variant && { border: "1px solid ".concat((n.vars || n).palette.divider) }, "elevation" === r.variant && (0, c.Z)({ boxShadow: (n.vars || n).shadows[r.elevation] }, !n.vars && "dark" === n.palette.mode && { backgroundImage: "linear-gradient(".concat((0, pe.Fq)("#fff", _r(r.elevation)), ", ").concat((0, pe.Fq)("#fff", _r(r.elevation)), ")") }, n.vars && { backgroundImage: null == (t = n.vars.overlays) ? void 0 : t[r.elevation] }));
        }),
        Fr = e.forwardRef(function (e, t) {
          var n = (0, j.Z)({ props: e, name: "MuiPaper" }),
            r = n.className,
            o = n.component,
            i = void 0 === o ? "div" : o,
            a = n.elevation,
            l = void 0 === a ? 1 : a,
            s = n.square,
            f = void 0 !== s && s,
            p = n.variant,
            m = void 0 === p ? "elevation" : p,
            v = (0, u.Z)(n, Lr),
            g = (0, c.Z)({}, n, {
              component: i,
              elevation: l,
              square: f,
              variant: m,
            }),
            y = (function (e) {
              var t = e.square,
                n = e.elevation,
                r = e.variant,
                o = e.classes,
                i = {
                  root: [
                    "root",
                    r,
                    !t && "rounded",
                    "elevation" === r && "elevation".concat(n),
                  ],
                };
              return (0, d.Z)(i, Nr, o);
            })(g);
          return (0,
          b.jsx)(Ar, (0, c.Z)({ as: i, ownerState: g, className: (0, h.Z)(y.root, r), ref: t }, v));
        });
      function Ir(e) {
        return (0, q.Z)("MuiCard", e);
      }
      (0, K.Z)("MuiCard", ["root"]);
      var Dr = ["className", "raised"],
        Wr = (0, T.ZP)(Fr, {
          name: "MuiCard",
          slot: "Root",
          overridesResolver: function (e, t) {
            return t.root;
          },
        })(function () {
          return { overflow: "hidden" };
        }),
        Br = e.forwardRef(function (e, t) {
          var n = (0, j.Z)({ props: e, name: "MuiCard" }),
            r = n.className,
            o = n.raised,
            i = void 0 !== o && o,
            a = (0, u.Z)(n, Dr),
            l = (0, c.Z)({}, n, { raised: i }),
            s = (function (e) {
              var t = e.classes;
              return (0, d.Z)({ root: ["root"] }, Ir, t);
            })(l);
          return (0,
          b.jsx)(Wr, (0, c.Z)({ className: (0, h.Z)(s.root, r), elevation: i ? 8 : void 0, ref: t, ownerState: l }, a));
        });
      function Vr(e) {
        return (0, q.Z)("MuiCardContent", e);
      }
      (0, K.Z)("MuiCardContent", ["root"]);
      var Hr = ["className", "component"],
        Ur = (0, T.ZP)("div", {
          name: "MuiCardContent",
          slot: "Root",
          overridesResolver: function (e, t) {
            return t.root;
          },
        })(function () {
          return { padding: 16, "&:last-child": { paddingBottom: 24 } };
        }),
        $r = e.forwardRef(function (e, t) {
          var n = (0, j.Z)({ props: e, name: "MuiCardContent" }),
            r = n.className,
            o = n.component,
            i = void 0 === o ? "div" : o,
            a = (0, u.Z)(n, Hr),
            l = (0, c.Z)({}, n, { component: i }),
            s = (function (e) {
              var t = e.classes;
              return (0, d.Z)({ root: ["root"] }, Vr, t);
            })(l);
          return (0,
          b.jsx)(Ur, (0, c.Z)({ as: i, className: (0, h.Z)(s.root, r), ownerState: l, ref: t }, a));
        }),
        qr = (0, n(1245).Z)(
          (0, b.jsx)("path", {
            d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z",
          }),
          "Person"
        );
      function Kr(e) {
        return (0, q.Z)("MuiAvatar", e);
      }
      (0, K.Z)("MuiAvatar", [
        "root",
        "colorDefault",
        "circular",
        "rounded",
        "square",
        "img",
        "fallback",
      ]);
      var Gr = [
          "alt",
          "children",
          "className",
          "component",
          "imgProps",
          "sizes",
          "src",
          "srcSet",
          "variant",
        ],
        Qr = (0, T.ZP)("div", {
          name: "MuiAvatar",
          slot: "Root",
          overridesResolver: function (e, t) {
            var n = e.ownerState;
            return [t.root, t[n.variant], n.colorDefault && t.colorDefault];
          },
        })(function (e) {
          var t = e.theme,
            n = e.ownerState;
          return (0,
          c.Z)({ position: "relative", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, width: 40, height: 40, fontFamily: t.typography.fontFamily, fontSize: t.typography.pxToRem(20), lineHeight: 1, borderRadius: "50%", overflow: "hidden", userSelect: "none" }, "rounded" === n.variant && { borderRadius: (t.vars || t).shape.borderRadius }, "square" === n.variant && { borderRadius: 0 }, n.colorDefault && (0, c.Z)({ color: (t.vars || t).palette.background.default }, t.vars ? { backgroundColor: t.vars.palette.Avatar.defaultBg } : { backgroundColor: "light" === t.palette.mode ? t.palette.grey[400] : t.palette.grey[600] }));
        }),
        Yr = (0, T.ZP)("img", {
          name: "MuiAvatar",
          slot: "Img",
          overridesResolver: function (e, t) {
            return t.img;
          },
        })({
          width: "100%",
          height: "100%",
          textAlign: "center",
          objectFit: "cover",
          color: "transparent",
          textIndent: 1e4,
        }),
        Xr = (0, T.ZP)(qr, {
          name: "MuiAvatar",
          slot: "Fallback",
          overridesResolver: function (e, t) {
            return t.fallback;
          },
        })({ width: "75%", height: "75%" });
      var Jr = e.forwardRef(function (t, n) {
          var r = (0, j.Z)({ props: t, name: "MuiAvatar" }),
            o = r.alt,
            a = r.children,
            l = r.className,
            s = r.component,
            f = void 0 === s ? "div" : s,
            p = r.imgProps,
            m = r.sizes,
            v = r.src,
            g = r.srcSet,
            y = r.variant,
            x = void 0 === y ? "circular" : y,
            w = (0, u.Z)(r, Gr),
            k = null,
            S = (function (t) {
              var n = t.crossOrigin,
                r = t.referrerPolicy,
                o = t.src,
                a = t.srcSet,
                l = e.useState(!1),
                s = (0, i.Z)(l, 2),
                u = s[0],
                c = s[1];
              return (
                e.useEffect(
                  function () {
                    if (o || a) {
                      c(!1);
                      var e = !0,
                        t = new Image();
                      return (
                        (t.onload = function () {
                          e && c("loaded");
                        }),
                        (t.onerror = function () {
                          e && c("error");
                        }),
                        (t.crossOrigin = n),
                        (t.referrerPolicy = r),
                        (t.src = o),
                        a && (t.srcset = a),
                        function () {
                          e = !1;
                        }
                      );
                    }
                  },
                  [n, r, o, a]
                ),
                u
              );
            })((0, c.Z)({}, p, { src: v, srcSet: g })),
            Z = v || g,
            E = Z && "error" !== S,
            C = (0, c.Z)({}, r, { colorDefault: !E, component: f, variant: x }),
            P = (function (e) {
              var t = e.classes,
                n = {
                  root: ["root", e.variant, e.colorDefault && "colorDefault"],
                  img: ["img"],
                  fallback: ["fallback"],
                };
              return (0, d.Z)(n, Kr, t);
            })(C);
          return (
            (k = E
              ? (0, b.jsx)(
                  Yr,
                  (0, c.Z)(
                    {
                      alt: o,
                      src: v,
                      srcSet: g,
                      sizes: m,
                      ownerState: C,
                      className: P.img,
                    },
                    p
                  )
                )
              : null != a
              ? a
              : Z && o
              ? o[0]
              : (0, b.jsx)(Xr, { className: P.fallback })),
            (0, b.jsx)(
              Qr,
              (0, c.Z)(
                {
                  as: f,
                  ownerState: C,
                  className: (0, h.Z)(P.root, l),
                  ref: n,
                },
                w,
                { children: k }
              )
            )
          );
        }),
        eo = Jr;
      function to(e) {
        return (0, q.Z)("MuiTypography", e);
      }
      (0, K.Z)("MuiTypography", [
        "root",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "subtitle1",
        "subtitle2",
        "body1",
        "body2",
        "inherit",
        "button",
        "caption",
        "overline",
        "alignLeft",
        "alignRight",
        "alignCenter",
        "alignJustify",
        "noWrap",
        "gutterBottom",
        "paragraph",
      ]);
      var no = [
          "align",
          "className",
          "component",
          "gutterBottom",
          "noWrap",
          "paragraph",
          "variant",
          "variantMapping",
        ],
        ro = (0, T.ZP)("span", {
          name: "MuiTypography",
          slot: "Root",
          overridesResolver: function (e, t) {
            var n = e.ownerState;
            return [
              t.root,
              n.variant && t[n.variant],
              "inherit" !== n.align && t["align".concat((0, O.Z)(n.align))],
              n.noWrap && t.noWrap,
              n.gutterBottom && t.gutterBottom,
              n.paragraph && t.paragraph,
            ];
          },
        })(function (e) {
          var t = e.theme,
            n = e.ownerState;
          return (0,
          c.Z)({ margin: 0 }, n.variant && t.typography[n.variant], "inherit" !== n.align && { textAlign: n.align }, n.noWrap && { overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }, n.gutterBottom && { marginBottom: "0.35em" }, n.paragraph && { marginBottom: 16 });
        }),
        oo = {
          h1: "h1",
          h2: "h2",
          h3: "h3",
          h4: "h4",
          h5: "h5",
          h6: "h6",
          subtitle1: "h6",
          subtitle2: "h6",
          body1: "p",
          body2: "p",
          inherit: "p",
        },
        io = {
          primary: "primary.main",
          textPrimary: "text.primary",
          secondary: "secondary.main",
          textSecondary: "text.secondary",
          error: "error.main",
        },
        ao = e.forwardRef(function (e, t) {
          var n = (0, j.Z)({ props: e, name: "MuiTypography" }),
            r = (function (e) {
              return io[e] || e;
            })(n.color),
            o = Ht((0, c.Z)({}, n, { color: r })),
            i = o.align,
            a = void 0 === i ? "inherit" : i,
            l = o.className,
            s = o.component,
            f = o.gutterBottom,
            p = void 0 !== f && f,
            m = o.noWrap,
            v = void 0 !== m && m,
            g = o.paragraph,
            y = void 0 !== g && g,
            x = o.variant,
            w = void 0 === x ? "body1" : x,
            k = o.variantMapping,
            S = void 0 === k ? oo : k,
            Z = (0, u.Z)(o, no),
            E = (0, c.Z)({}, o, {
              align: a,
              color: r,
              className: l,
              component: s,
              gutterBottom: p,
              noWrap: v,
              paragraph: y,
              variant: w,
              variantMapping: S,
            }),
            C = s || (y ? "p" : S[w] || oo[w]) || "span",
            P = (function (e) {
              var t = e.align,
                n = e.gutterBottom,
                r = e.noWrap,
                o = e.paragraph,
                i = e.variant,
                a = e.classes,
                l = {
                  root: [
                    "root",
                    i,
                    "inherit" !== e.align && "align".concat((0, O.Z)(t)),
                    n && "gutterBottom",
                    r && "noWrap",
                    o && "paragraph",
                  ],
                };
              return (0, d.Z)(l, to, a);
            })(E);
          return (0,
          b.jsx)(ro, (0, c.Z)({ as: C, ref: t, ownerState: E, className: (0, h.Z)(P.root, l) }, Z));
        }),
        lo = n(1184);
      var so = e.createContext();
      function uo(e) {
        return (0, q.Z)("MuiGrid", e);
      }
      var co = ["auto", !0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        fo = (0, K.Z)(
          "MuiGrid",
          ["root", "container", "item", "zeroMinWidth"].concat(
            (0, o.Z)(
              [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(function (e) {
                return "spacing-xs-".concat(e);
              })
            ),
            (0, o.Z)(
              ["column-reverse", "column", "row-reverse", "row"].map(function (
                e
              ) {
                return "direction-xs-".concat(e);
              })
            ),
            (0, o.Z)(
              ["nowrap", "wrap-reverse", "wrap"].map(function (e) {
                return "wrap-xs-".concat(e);
              })
            ),
            (0, o.Z)(
              co.map(function (e) {
                return "grid-xs-".concat(e);
              })
            ),
            (0, o.Z)(
              co.map(function (e) {
                return "grid-sm-".concat(e);
              })
            ),
            (0, o.Z)(
              co.map(function (e) {
                return "grid-md-".concat(e);
              })
            ),
            (0, o.Z)(
              co.map(function (e) {
                return "grid-lg-".concat(e);
              })
            ),
            (0, o.Z)(
              co.map(function (e) {
                return "grid-xl-".concat(e);
              })
            )
          )
        ),
        po = [
          "className",
          "columns",
          "columnSpacing",
          "component",
          "container",
          "direction",
          "item",
          "rowSpacing",
          "spacing",
          "wrap",
          "zeroMinWidth",
        ];
      function ho(e) {
        var t = parseFloat(e);
        return "".concat(t).concat(String(e).replace(String(t), "") || "px");
      }
      function mo(e) {
        var t = e.breakpoints,
          n = e.values,
          r = "";
        Object.keys(n).forEach(function (e) {
          "" === r && 0 !== n[e] && (r = e);
        });
        var o = Object.keys(t).sort(function (e, n) {
          return t[e] - t[n];
        });
        return o.slice(0, o.indexOf(r));
      }
      var vo = (0, T.ZP)("div", {
        name: "MuiGrid",
        slot: "Root",
        overridesResolver: function (e, t) {
          var n = e.ownerState,
            r = n.container,
            i = n.direction,
            a = n.item,
            l = n.spacing,
            s = n.wrap,
            u = n.zeroMinWidth,
            c = n.breakpoints,
            d = [];
          r &&
            (d = (function (e, t) {
              var n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {};
              if (!e || e <= 0) return [];
              if (
                ("string" === typeof e && !Number.isNaN(Number(e))) ||
                "number" === typeof e
              )
                return [n["spacing-xs-".concat(String(e))]];
              var r = [];
              return (
                t.forEach(function (t) {
                  var o = e[t];
                  Number(o) > 0 &&
                    r.push(n["spacing-".concat(t, "-").concat(String(o))]);
                }),
                r
              );
            })(l, c, t));
          var f = [];
          return (
            c.forEach(function (e) {
              var r = n[e];
              r && f.push(t["grid-".concat(e, "-").concat(String(r))]);
            }),
            [t.root, r && t.container, a && t.item, u && t.zeroMinWidth].concat(
              (0, o.Z)(d),
              [
                "row" !== i && t["direction-xs-".concat(String(i))],
                "wrap" !== s && t["wrap-xs-".concat(String(s))],
              ],
              f
            )
          );
        },
      })(
        function (e) {
          var t = e.ownerState;
          return (0, c.Z)(
            { boxSizing: "border-box" },
            t.container && { display: "flex", flexWrap: "wrap", width: "100%" },
            t.item && { margin: 0 },
            t.zeroMinWidth && { minWidth: 0 },
            "wrap" !== t.wrap && { flexWrap: t.wrap }
          );
        },
        function (e) {
          var t = e.theme,
            n = e.ownerState,
            r = (0, lo.P$)({
              values: n.direction,
              breakpoints: t.breakpoints.values,
            });
          return (0, lo.k9)({ theme: t }, r, function (e) {
            var t = { flexDirection: e };
            return (
              0 === e.indexOf("column") &&
                (t["& > .".concat(fo.item)] = { maxWidth: "none" }),
              t
            );
          });
        },
        function (e) {
          var t = e.theme,
            n = e.ownerState,
            r = n.container,
            o = n.rowSpacing,
            i = {};
          if (r && 0 !== o) {
            var l,
              s = (0, lo.P$)({ values: o, breakpoints: t.breakpoints.values });
            "object" === typeof s &&
              (l = mo({ breakpoints: t.breakpoints.values, values: s })),
              (i = (0, lo.k9)({ theme: t }, s, function (e, n) {
                var r,
                  o = t.spacing(e);
                return "0px" !== o
                  ? (0, a.Z)(
                      { marginTop: "-".concat(ho(o)) },
                      "& > .".concat(fo.item),
                      { paddingTop: ho(o) }
                    )
                  : null != (r = l) && r.includes(n)
                  ? {}
                  : (0, a.Z)({ marginTop: 0 }, "& > .".concat(fo.item), {
                      paddingTop: 0,
                    });
              }));
          }
          return i;
        },
        function (e) {
          var t = e.theme,
            n = e.ownerState,
            r = n.container,
            o = n.columnSpacing,
            i = {};
          if (r && 0 !== o) {
            var l,
              s = (0, lo.P$)({ values: o, breakpoints: t.breakpoints.values });
            "object" === typeof s &&
              (l = mo({ breakpoints: t.breakpoints.values, values: s })),
              (i = (0, lo.k9)({ theme: t }, s, function (e, n) {
                var r,
                  o = t.spacing(e);
                return "0px" !== o
                  ? (0, a.Z)(
                      {
                        width: "calc(100% + ".concat(ho(o), ")"),
                        marginLeft: "-".concat(ho(o)),
                      },
                      "& > .".concat(fo.item),
                      { paddingLeft: ho(o) }
                    )
                  : null != (r = l) && r.includes(n)
                  ? {}
                  : (0, a.Z)(
                      { width: "100%", marginLeft: 0 },
                      "& > .".concat(fo.item),
                      { paddingLeft: 0 }
                    );
              }));
          }
          return i;
        },
        function (e) {
          var t,
            n = e.theme,
            r = e.ownerState;
          return n.breakpoints.keys.reduce(function (e, o) {
            var i = {};
            if ((r[o] && (t = r[o]), !t)) return e;
            if (!0 === t) i = { flexBasis: 0, flexGrow: 1, maxWidth: "100%" };
            else if ("auto" === t)
              i = {
                flexBasis: "auto",
                flexGrow: 0,
                flexShrink: 0,
                maxWidth: "none",
                width: "auto",
              };
            else {
              var a = (0, lo.P$)({
                  values: r.columns,
                  breakpoints: n.breakpoints.values,
                }),
                l = "object" === typeof a ? a[o] : a;
              if (void 0 === l || null === l) return e;
              var s = "".concat(Math.round((t / l) * 1e8) / 1e6, "%"),
                u = {};
              if (r.container && r.item && 0 !== r.columnSpacing) {
                var d = n.spacing(r.columnSpacing);
                if ("0px" !== d) {
                  var f = "calc(".concat(s, " + ").concat(ho(d), ")");
                  u = { flexBasis: f, maxWidth: f };
                }
              }
              i = (0, c.Z)({ flexBasis: s, flexGrow: 0, maxWidth: s }, u);
            }
            return (
              0 === n.breakpoints.values[o]
                ? Object.assign(e, i)
                : (e[n.breakpoints.up(o)] = i),
              e
            );
          }, {});
        }
      );
      var go = function (e) {
          var t = e.classes,
            n = e.container,
            r = e.direction,
            i = e.item,
            a = e.spacing,
            l = e.wrap,
            s = e.zeroMinWidth,
            u = e.breakpoints,
            c = [];
          n &&
            (c = (function (e, t) {
              if (!e || e <= 0) return [];
              if (
                ("string" === typeof e && !Number.isNaN(Number(e))) ||
                "number" === typeof e
              )
                return ["spacing-xs-".concat(String(e))];
              var n = [];
              return (
                t.forEach(function (t) {
                  var r = e[t];
                  if (Number(r) > 0) {
                    var o = "spacing-".concat(t, "-").concat(String(r));
                    n.push(o);
                  }
                }),
                n
              );
            })(a, u));
          var f = [];
          u.forEach(function (t) {
            var n = e[t];
            n && f.push("grid-".concat(t, "-").concat(String(n)));
          });
          var p = {
            root: [
              "root",
              n && "container",
              i && "item",
              s && "zeroMinWidth",
            ].concat(
              (0, o.Z)(c),
              [
                "row" !== r && "direction-xs-".concat(String(r)),
                "wrap" !== l && "wrap-xs-".concat(String(l)),
              ],
              f
            ),
          };
          return (0, d.Z)(p, uo, t);
        },
        yo = e.forwardRef(function (t, n) {
          var r = (0, j.Z)({ props: t, name: "MuiGrid" }),
            o = lr().breakpoints,
            i = Ht(r),
            a = i.className,
            l = i.columns,
            s = i.columnSpacing,
            d = i.component,
            f = void 0 === d ? "div" : d,
            p = i.container,
            m = void 0 !== p && p,
            v = i.direction,
            g = void 0 === v ? "row" : v,
            y = i.item,
            x = void 0 !== y && y,
            w = i.rowSpacing,
            k = i.spacing,
            S = void 0 === k ? 0 : k,
            Z = i.wrap,
            E = void 0 === Z ? "wrap" : Z,
            C = i.zeroMinWidth,
            P = void 0 !== C && C,
            M = (0, u.Z)(i, po),
            R = w || S,
            T = s || S,
            O = e.useContext(so),
            z = m ? l || 12 : O,
            N = {},
            L = (0, c.Z)({}, M);
          o.keys.forEach(function (e) {
            null != M[e] && ((N[e] = M[e]), delete L[e]);
          });
          var _ = (0, c.Z)(
              {},
              i,
              {
                columns: z,
                container: m,
                direction: g,
                item: x,
                rowSpacing: R,
                columnSpacing: T,
                wrap: E,
                zeroMinWidth: P,
                spacing: S,
              },
              N,
              { breakpoints: o.keys }
            ),
            A = go(_);
          return (0,
          b.jsx)(so.Provider, { value: z, children: (0, b.jsx)(vo, (0, c.Z)({ ownerState: _, className: (0, h.Z)(A.root, a), as: f, ref: n }, L)) });
        }),
        bo = yo,
        xo = n(6258);
      function wo(e) {
        return (0, q.Z)("MuiFormControl", e);
      }
      (0, K.Z)("MuiFormControl", [
        "root",
        "marginNone",
        "marginNormal",
        "marginDense",
        "fullWidth",
        "disabled",
      ]);
      var ko = [
          "children",
          "className",
          "color",
          "component",
          "disabled",
          "error",
          "focused",
          "fullWidth",
          "hiddenLabel",
          "margin",
          "required",
          "size",
          "variant",
        ],
        So = (0, T.ZP)("div", {
          name: "MuiFormControl",
          slot: "Root",
          overridesResolver: function (e, t) {
            var n = e.ownerState;
            return (0, c.Z)(
              {},
              t.root,
              t["margin".concat((0, O.Z)(n.margin))],
              n.fullWidth && t.fullWidth
            );
          },
        })(function (e) {
          var t = e.ownerState;
          return (0,
          c.Z)({ display: "inline-flex", flexDirection: "column", position: "relative", minWidth: 0, padding: 0, margin: 0, border: 0, verticalAlign: "top" }, "normal" === t.margin && { marginTop: 16, marginBottom: 8 }, "dense" === t.margin && { marginTop: 8, marginBottom: 4 }, t.fullWidth && { width: "100%" });
        }),
        Zo = e.forwardRef(function (t, n) {
          var r = (0, j.Z)({ props: t, name: "MuiFormControl" }),
            o = r.children,
            a = r.className,
            l = r.color,
            s = void 0 === l ? "primary" : l,
            f = r.component,
            p = void 0 === f ? "div" : f,
            m = r.disabled,
            v = void 0 !== m && m,
            g = r.error,
            y = void 0 !== g && g,
            x = r.focused,
            w = r.fullWidth,
            k = void 0 !== w && w,
            S = r.hiddenLabel,
            Z = void 0 !== S && S,
            E = r.margin,
            C = void 0 === E ? "none" : E,
            P = r.required,
            R = void 0 !== P && P,
            T = r.size,
            z = void 0 === T ? "medium" : T,
            N = r.variant,
            L = void 0 === N ? "outlined" : N,
            _ = (0, u.Z)(r, ko),
            A = (0, c.Z)({}, r, {
              color: s,
              component: p,
              disabled: v,
              error: y,
              fullWidth: k,
              hiddenLabel: Z,
              margin: C,
              required: R,
              size: z,
              variant: L,
            }),
            F = (function (e) {
              var t = e.classes,
                n = e.margin,
                r = e.fullWidth,
                o = {
                  root: [
                    "root",
                    "none" !== n && "margin".concat((0, O.Z)(n)),
                    r && "fullWidth",
                  ],
                };
              return (0, d.Z)(o, wo, t);
            })(A),
            I = e.useState(function () {
              var t = !1;
              return (
                o &&
                  e.Children.forEach(o, function (e) {
                    if ((0, xo.Z)(e, ["Input", "Select"])) {
                      var n = (0, xo.Z)(e, ["Select"]) ? e.props.input : e;
                      n && n.props.startAdornment && (t = !0);
                    }
                  }),
                t
              );
            }),
            D = (0, i.Z)(I, 2),
            W = D[0],
            B = D[1],
            V = e.useState(function () {
              var t = !1;
              return (
                o &&
                  e.Children.forEach(o, function (e) {
                    (0, xo.Z)(e, ["Input", "Select"]) &&
                      $(e.props, !0) &&
                      (t = !0);
                  }),
                t
              );
            }),
            H = (0, i.Z)(V, 2),
            U = H[0],
            q = H[1],
            K = e.useState(!1),
            G = (0, i.Z)(K, 2),
            Q = G[0],
            Y = G[1];
          v && Q && Y(!1);
          var X = void 0 === x || v ? Q : x,
            J = e.useCallback(function () {
              q(!0);
            }, []),
            ee = {
              adornedStart: W,
              setAdornedStart: B,
              color: s,
              disabled: v,
              error: y,
              filled: U,
              focused: X,
              fullWidth: k,
              hiddenLabel: Z,
              size: z,
              onBlur: function () {
                Y(!1);
              },
              onEmpty: e.useCallback(function () {
                q(!1);
              }, []),
              onFilled: J,
              onFocus: function () {
                Y(!0);
              },
              registerEffect: undefined,
              required: R,
              variant: L,
            };
          return (0,
          b.jsx)(M.Provider, { value: ee, children: (0, b.jsx)(So, (0, c.Z)({ as: p, ownerState: A, className: (0, h.Z)(F.root, a), ref: n }, _, { children: o })) });
        });
      function Eo(e) {
        return (0, q.Z)("MuiFormLabel", e);
      }
      var Co = (0, K.Z)("MuiFormLabel", [
          "root",
          "colorSecondary",
          "focused",
          "disabled",
          "error",
          "filled",
          "required",
          "asterisk",
        ]),
        Po = [
          "children",
          "className",
          "color",
          "component",
          "disabled",
          "error",
          "filled",
          "focused",
          "required",
        ],
        Mo = (0, T.ZP)("label", {
          name: "MuiFormLabel",
          slot: "Root",
          overridesResolver: function (e, t) {
            var n = e.ownerState;
            return (0, c.Z)(
              {},
              t.root,
              "secondary" === n.color && t.colorSecondary,
              n.filled && t.filled
            );
          },
        })(function (e) {
          var t,
            n = e.theme,
            r = e.ownerState;
          return (0,
          c.Z)({ color: (n.vars || n).palette.text.secondary }, n.typography.body1, ((t = { lineHeight: "1.4375em", padding: 0, position: "relative" }), (0, a.Z)(t, "&.".concat(Co.focused), { color: (n.vars || n).palette[r.color].main }), (0, a.Z)(t, "&.".concat(Co.disabled), { color: (n.vars || n).palette.text.disabled }), (0, a.Z)(t, "&.".concat(Co.error), { color: (n.vars || n).palette.error.main }), t));
        }),
        Ro = (0, T.ZP)("span", {
          name: "MuiFormLabel",
          slot: "Asterisk",
          overridesResolver: function (e, t) {
            return t.asterisk;
          },
        })(function (e) {
          var t = e.theme;
          return (0,
          a.Z)({}, "&.".concat(Co.error), { color: (t.vars || t).palette.error.main });
        }),
        To = e.forwardRef(function (e, t) {
          var n = (0, j.Z)({ props: e, name: "MuiFormLabel" }),
            r = n.children,
            o = n.className,
            i = n.component,
            a = void 0 === i ? "label" : i,
            l = (0, u.Z)(n, Po),
            s = P({
              props: n,
              muiFormControl: R(),
              states: [
                "color",
                "required",
                "focused",
                "disabled",
                "error",
                "filled",
              ],
            }),
            f = (0, c.Z)({}, n, {
              color: s.color || "primary",
              component: a,
              disabled: s.disabled,
              error: s.error,
              filled: s.filled,
              focused: s.focused,
              required: s.required,
            }),
            p = (function (e) {
              var t = e.classes,
                n = e.color,
                r = e.focused,
                o = e.disabled,
                i = e.error,
                a = e.filled,
                l = e.required,
                s = {
                  root: [
                    "root",
                    "color".concat((0, O.Z)(n)),
                    o && "disabled",
                    i && "error",
                    a && "filled",
                    r && "focused",
                    l && "required",
                  ],
                  asterisk: ["asterisk", i && "error"],
                };
              return (0, d.Z)(s, Eo, t);
            })(f);
          return (0,
          b.jsxs)(Mo, (0, c.Z)({ as: a, ownerState: f, className: (0, h.Z)(p.root, o), ref: t }, l, { children: [r, s.required && (0, b.jsxs)(Ro, { ownerState: f, "aria-hidden": !0, className: p.asterisk, children: ["\u2009", "*"] })] }));
        });
      function jo(e) {
        return (0, q.Z)("MuiInputLabel", e);
      }
      (0, K.Z)("MuiInputLabel", [
        "root",
        "focused",
        "disabled",
        "error",
        "required",
        "asterisk",
        "formControl",
        "sizeSmall",
        "shrink",
        "animated",
        "standard",
        "filled",
        "outlined",
      ]);
      var Oo = ["disableAnimation", "margin", "shrink", "variant", "className"],
        zo = (0, T.ZP)(To, {
          shouldForwardProp: function (e) {
            return (0, T.FO)(e) || "classes" === e;
          },
          name: "MuiInputLabel",
          slot: "Root",
          overridesResolver: function (e, t) {
            var n = e.ownerState;
            return [
              (0, a.Z)({}, "& .".concat(Co.asterisk), t.asterisk),
              t.root,
              n.formControl && t.formControl,
              "small" === n.size && t.sizeSmall,
              n.shrink && t.shrink,
              !n.disableAnimation && t.animated,
              t[n.variant],
            ];
          },
        })(function (e) {
          var t = e.theme,
            n = e.ownerState;
          return (0,
          c.Z)({ display: "block", transformOrigin: "top left", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "100%" }, n.formControl && { position: "absolute", left: 0, top: 0, transform: "translate(0, 20px) scale(1)" }, "small" === n.size && { transform: "translate(0, 17px) scale(1)" }, n.shrink && { transform: "translate(0, -1.5px) scale(0.75)", transformOrigin: "top left", maxWidth: "133%" }, !n.disableAnimation && { transition: t.transitions.create(["color", "transform", "max-width"], { duration: t.transitions.duration.shorter, easing: t.transitions.easing.easeOut }) }, "filled" === n.variant && (0, c.Z)({ zIndex: 1, pointerEvents: "none", transform: "translate(12px, 16px) scale(1)", maxWidth: "calc(100% - 24px)" }, "small" === n.size && { transform: "translate(12px, 13px) scale(1)" }, n.shrink && (0, c.Z)({ userSelect: "none", pointerEvents: "auto", transform: "translate(12px, 7px) scale(0.75)", maxWidth: "calc(133% - 24px)" }, "small" === n.size && { transform: "translate(12px, 4px) scale(0.75)" })), "outlined" === n.variant && (0, c.Z)({ zIndex: 1, pointerEvents: "none", transform: "translate(14px, 16px) scale(1)", maxWidth: "calc(100% - 24px)" }, "small" === n.size && { transform: "translate(14px, 9px) scale(1)" }, n.shrink && { userSelect: "none", pointerEvents: "auto", maxWidth: "calc(133% - 24px)", transform: "translate(14px, -9px) scale(0.75)" }));
        }),
        No = e.forwardRef(function (e, t) {
          var n = (0, j.Z)({ name: "MuiInputLabel", props: e }),
            r = n.disableAnimation,
            o = void 0 !== r && r,
            i = n.shrink,
            a = n.className,
            l = (0, u.Z)(n, Oo),
            s = R(),
            f = i;
          "undefined" === typeof f &&
            s &&
            (f = s.filled || s.focused || s.adornedStart);
          var p = P({
              props: n,
              muiFormControl: s,
              states: ["size", "variant", "required"],
            }),
            m = (0, c.Z)({}, n, {
              disableAnimation: o,
              formControl: s,
              shrink: f,
              size: p.size,
              variant: p.variant,
              required: p.required,
            }),
            v = (function (e) {
              var t = e.classes,
                n = e.formControl,
                r = e.size,
                o = e.shrink,
                i = {
                  root: [
                    "root",
                    n && "formControl",
                    !e.disableAnimation && "animated",
                    o && "shrink",
                    "small" === r && "sizeSmall",
                    e.variant,
                  ],
                  asterisk: [e.required && "asterisk"],
                },
                a = (0, d.Z)(i, jo, t);
              return (0, c.Z)({}, t, a);
            })(m);
          return (0,
          b.jsx)(zo, (0, c.Z)({ "data-shrink": f, ownerState: m, ref: t, className: (0, h.Z)(v.root, a) }, l, { classes: v }));
        });
      function Lo(e) {
        return (0, q.Z)("MuiFormHelperText", e);
      }
      var _o,
        Ao = (0, K.Z)("MuiFormHelperText", [
          "root",
          "error",
          "disabled",
          "sizeSmall",
          "sizeMedium",
          "contained",
          "focused",
          "filled",
          "required",
        ]),
        Fo = [
          "children",
          "className",
          "component",
          "disabled",
          "error",
          "filled",
          "focused",
          "margin",
          "required",
          "variant",
        ],
        Io = (0, T.ZP)("p", {
          name: "MuiFormHelperText",
          slot: "Root",
          overridesResolver: function (e, t) {
            var n = e.ownerState;
            return [
              t.root,
              n.size && t["size".concat((0, O.Z)(n.size))],
              n.contained && t.contained,
              n.filled && t.filled,
            ];
          },
        })(function (e) {
          var t,
            n = e.theme,
            r = e.ownerState;
          return (0,
          c.Z)({ color: (n.vars || n).palette.text.secondary }, n.typography.caption, ((t = { textAlign: "left", marginTop: 3, marginRight: 0, marginBottom: 0, marginLeft: 0 }), (0, a.Z)(t, "&.".concat(Ao.disabled), { color: (n.vars || n).palette.text.disabled }), (0, a.Z)(t, "&.".concat(Ao.error), { color: (n.vars || n).palette.error.main }), t), "small" === r.size && { marginTop: 4 }, r.contained && { marginLeft: 14, marginRight: 14 });
        }),
        Do = e.forwardRef(function (e, t) {
          var n = (0, j.Z)({ props: e, name: "MuiFormHelperText" }),
            r = n.children,
            o = n.className,
            i = n.component,
            a = void 0 === i ? "p" : i,
            l = (0, u.Z)(n, Fo),
            s = P({
              props: n,
              muiFormControl: R(),
              states: [
                "variant",
                "size",
                "disabled",
                "error",
                "filled",
                "focused",
                "required",
              ],
            }),
            f = (0, c.Z)({}, n, {
              component: a,
              contained: "filled" === s.variant || "outlined" === s.variant,
              variant: s.variant,
              size: s.size,
              disabled: s.disabled,
              error: s.error,
              filled: s.filled,
              focused: s.focused,
              required: s.required,
            }),
            p = (function (e) {
              var t = e.classes,
                n = e.contained,
                r = e.size,
                o = e.disabled,
                i = e.error,
                a = e.filled,
                l = e.focused,
                s = e.required,
                u = {
                  root: [
                    "root",
                    o && "disabled",
                    i && "error",
                    r && "size".concat((0, O.Z)(r)),
                    n && "contained",
                    l && "focused",
                    a && "filled",
                    s && "required",
                  ],
                };
              return (0, d.Z)(u, Lo, t);
            })(f);
          return (0,
          b.jsx)(Io, (0, c.Z)({ as: a, ownerState: f, className: (0, h.Z)(p.root, o), ref: t }, l, { children: " " === r ? _o || (_o = (0, b.jsx)("span", { className: "notranslate", children: "\u200b" })) : r }));
        });
      function Wo(t) {
        var n = t.open,
          r = t.handleClose,
          o = t.dispatch,
          a = "Register",
          l = "You can save your trees and access them later.",
          u = "Sign in",
          c = e.useState({ username: !1, password: !1, confirmPassword: !1 }),
          d = (0, i.Z)(c, 2),
          f = d[0],
          p = d[1],
          h = (function () {
            var e = en(
              Xt().mark(function e(t) {
                var n;
                return Xt().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          t.preventDefault(),
                          (e.next = 3),
                          dn(
                            t.target[0].value,
                            t.target[1].value,
                            t.target[2].value
                          )
                        );
                      case 3:
                        (n = e.sent),
                          console.log(n),
                          n.success
                            ? (p({
                                username: !1,
                                password: !1,
                                confirmPassword: !1,
                              }),
                              cn(t.target[0].value, t.target[1].value).then(
                                function (e) {
                                  e.success &&
                                    (o({
                                      type: "set fetched trees",
                                      trees: e.trees,
                                    }),
                                    o({ type: "set user", user: e.token }),
                                    r());
                                }
                              ))
                            : n.errors &&
                              (p({
                                username: !1,
                                password: !1,
                                confirmPassword: !1,
                              }),
                              n.errors.forEach(function (e) {
                                "password" === e.param &&
                                  p(function (t) {
                                    return s(s({}, t), {}, { password: e.msg });
                                  }),
                                  "confirmPassword" === e.param &&
                                    p(function (t) {
                                      return s(
                                        s({}, t),
                                        {},
                                        { confirmPassword: e.msg }
                                      );
                                    }),
                                  "username" === e.param &&
                                    p(function (t) {
                                      return s(
                                        s({}, t),
                                        {},
                                        { username: e.msg }
                                      );
                                    });
                              }));
                      case 6:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })();
        return (0, b.jsx)(kr, {
          open: n,
          onClose: r,
          "aria-labelledby": "modal-modal-title",
          "aria-describedby": "modal-modal-description",
          children: (0, b.jsx)(zr, {
            maxWidth: "xs",
            children: (0, b.jsx)(Qt, {
              py: 16,
              children: (0, b.jsx)(Br, {
                variant: "outlined",
                children: (0, b.jsxs)($r, {
                  children: [
                    (0, b.jsx)(Qt, {
                      display: "flex",
                      mt: 3,
                      children: (0, b.jsx)(Qt, {
                        mx: "auto",
                        children: (0, b.jsx)(eo, { variant: "rounded" }),
                      }),
                    }),
                    (0, b.jsxs)(Qt, {
                      mt: 2,
                      px: 4,
                      children: [
                        (0, b.jsx)(ao, {
                          variant: "h5",
                          component: "h3",
                          align: "center",
                          gutterBottom: !0,
                          children: a,
                        }),
                        (0, b.jsx)(ao, {
                          variant: "body2",
                          component: "p",
                          color: "textSecondary",
                          align: "center",
                          children: l,
                        }),
                        (0, b.jsx)(Qt, {
                          my: 3,
                          children: (0, b.jsx)("form", {
                            onSubmit: h,
                            children: (0, b.jsxs)(bo, {
                              container: !0,
                              spacing: 2,
                              children: [
                                (0, b.jsx)(bo, {
                                  item: !0,
                                  xs: 12,
                                  children: (0, b.jsxs)(Zo, {
                                    error: f.username,
                                    children: [
                                      (0, b.jsx)(No, {
                                        htmlFor: "username",
                                        children: "Username",
                                      }),
                                      (0, b.jsx)(de, {
                                        id: "username",
                                        "aria-describedby":
                                          "username-helper-text",
                                      }),
                                      (0, b.jsx)(Do, {
                                        id: "username-helper-text",
                                        children: f.username,
                                      }),
                                    ],
                                  }),
                                }),
                                (0, b.jsx)(bo, {
                                  item: !0,
                                  xs: 12,
                                  children: (0, b.jsxs)(Zo, {
                                    error: f.password,
                                    children: [
                                      (0, b.jsx)(No, {
                                        htmlFor: "password",
                                        children: "Password",
                                      }),
                                      (0, b.jsx)(de, {
                                        id: "password",
                                        type: "password",
                                        "aria-describedby":
                                          "password-helper-text",
                                      }),
                                      (0, b.jsx)(Do, {
                                        id: "password-helper-text",
                                        children: f.password,
                                      }),
                                    ],
                                  }),
                                }),
                                (0, b.jsx)(bo, {
                                  item: !0,
                                  xs: 12,
                                  children: (0, b.jsxs)(Zo, {
                                    error: f.confirmPassword,
                                    children: [
                                      (0, b.jsx)(No, {
                                        htmlFor: "confirmPassword",
                                        children: "Confirm Password",
                                      }),
                                      (0, b.jsx)(de, {
                                        id: "confirmPassword",
                                        type: "password",
                                        "aria-describedby":
                                          "confirm-password-helper-text",
                                      }),
                                      (0, b.jsx)(Do, {
                                        id: "confirm-password-helper-text",
                                        children: f.confirmPassword,
                                      }),
                                    ],
                                  }),
                                }),
                                (0, b.jsx)(bo, {
                                  item: !0,
                                  xs: 12,
                                  children: (0, b.jsx)(Qt, {
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    children: (0, b.jsx)(it, {
                                      type: "submit",
                                      variant: "contained",
                                      color: "primary",
                                      size: "large",
                                      children: u,
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          }),
        });
      }
      n(8457);
      var Bo = n(5783);
      var Vo = e.createContext({});
      function Ho(e) {
        return (0, q.Z)("MuiList", e);
      }
      (0, K.Z)("MuiList", ["root", "padding", "dense", "subheader"]);
      var Uo = [
          "children",
          "className",
          "component",
          "dense",
          "disablePadding",
          "subheader",
        ],
        $o = (0, T.ZP)("ul", {
          name: "MuiList",
          slot: "Root",
          overridesResolver: function (e, t) {
            var n = e.ownerState;
            return [
              t.root,
              !n.disablePadding && t.padding,
              n.dense && t.dense,
              n.subheader && t.subheader,
            ];
          },
        })(function (e) {
          var t = e.ownerState;
          return (0,
          c.Z)({ listStyle: "none", margin: 0, padding: 0, position: "relative" }, !t.disablePadding && { paddingTop: 8, paddingBottom: 8 }, t.subheader && { paddingTop: 0 });
        }),
        qo = e.forwardRef(function (t, n) {
          var r = (0, j.Z)({ props: t, name: "MuiList" }),
            o = r.children,
            i = r.className,
            a = r.component,
            l = void 0 === a ? "ul" : a,
            s = r.dense,
            f = void 0 !== s && s,
            p = r.disablePadding,
            m = void 0 !== p && p,
            v = r.subheader,
            g = (0, u.Z)(r, Uo),
            y = e.useMemo(
              function () {
                return { dense: f };
              },
              [f]
            ),
            x = (0, c.Z)({}, r, { component: l, dense: f, disablePadding: m }),
            w = (function (e) {
              var t = e.classes,
                n = {
                  root: [
                    "root",
                    !e.disablePadding && "padding",
                    e.dense && "dense",
                    e.subheader && "subheader",
                  ],
                };
              return (0, d.Z)(n, Ho, t);
            })(x);
          return (0,
          b.jsx)(Vo.Provider, { value: y, children: (0, b.jsxs)($o, (0, c.Z)({ as: l, className: (0, h.Z)(w.root, i), ref: n, ownerState: x }, g, { children: [v, o] })) });
        }),
        Ko = Tn,
        Go = [
          "actions",
          "autoFocus",
          "autoFocusItem",
          "children",
          "className",
          "disabledItemsFocusable",
          "disableListWrap",
          "onKeyDown",
          "variant",
        ];
      function Qo(e, t, n) {
        return e === t
          ? e.firstChild
          : t && t.nextElementSibling
          ? t.nextElementSibling
          : n
          ? null
          : e.firstChild;
      }
      function Yo(e, t, n) {
        return e === t
          ? n
            ? e.firstChild
            : e.lastChild
          : t && t.previousElementSibling
          ? t.previousElementSibling
          : n
          ? null
          : e.lastChild;
      }
      function Xo(e, t) {
        if (void 0 === t) return !0;
        var n = e.innerText;
        return (
          void 0 === n && (n = e.textContent),
          0 !== (n = n.trim().toLowerCase()).length &&
            (t.repeating
              ? n[0] === t.keys[0]
              : 0 === n.indexOf(t.keys.join("")))
        );
      }
      function Jo(e, t, n, r, o, i) {
        for (var a = !1, l = o(e, t, !!t && n); l; ) {
          if (l === e.firstChild) {
            if (a) return !1;
            a = !0;
          }
          var s =
            !r && (l.disabled || "true" === l.getAttribute("aria-disabled"));
          if (l.hasAttribute("tabindex") && Xo(l, i) && !s)
            return l.focus(), !0;
          l = o(e, l, n);
        }
        return !1;
      }
      var ei = e.forwardRef(function (t, n) {
          var r = t.actions,
            o = t.autoFocus,
            i = void 0 !== o && o,
            a = t.autoFocusItem,
            l = void 0 !== a && a,
            s = t.children,
            d = t.className,
            f = t.disabledItemsFocusable,
            p = void 0 !== f && f,
            h = t.disableListWrap,
            m = void 0 !== h && h,
            v = t.onKeyDown,
            g = t.variant,
            y = void 0 === g ? "selectedMenu" : g,
            x = (0, u.Z)(t, Go),
            w = e.useRef(null),
            k = e.useRef({
              keys: [],
              repeating: !0,
              previousKeyMatched: !0,
              lastTime: null,
            });
          (0, N.Z)(
            function () {
              i && w.current.focus();
            },
            [i]
          ),
            e.useImperativeHandle(
              r,
              function () {
                return {
                  adjustStyleForScrollbar: function (e, t) {
                    var n = !w.current.style.width;
                    if (e.clientHeight < w.current.clientHeight && n) {
                      var r = "".concat(Ko((0, Bo.Z)(e)), "px");
                      (w.current.style[
                        "rtl" === t.direction ? "paddingLeft" : "paddingRight"
                      ] = r),
                        (w.current.style.width = "calc(100% + ".concat(r, ")"));
                    }
                    return w.current;
                  },
                };
              },
              []
            );
          var S = (0, z.Z)(w, n),
            Z = -1;
          e.Children.forEach(s, function (t, n) {
            e.isValidElement(t) &&
              (t.props.disabled ||
                ((("selectedMenu" === y && t.props.selected) || -1 === Z) &&
                  (Z = n)));
          });
          var E = e.Children.map(s, function (t, n) {
            if (n === Z) {
              var r = {};
              return (
                l && (r.autoFocus = !0),
                void 0 === t.props.tabIndex &&
                  "selectedMenu" === y &&
                  (r.tabIndex = 0),
                e.cloneElement(t, r)
              );
            }
            return t;
          });
          return (0, b.jsx)(
            qo,
            (0, c.Z)(
              {
                role: "menu",
                ref: S,
                className: d,
                onKeyDown: function (e) {
                  var t = w.current,
                    n = e.key,
                    r = (0, Bo.Z)(t).activeElement;
                  if ("ArrowDown" === n) e.preventDefault(), Jo(t, r, m, p, Qo);
                  else if ("ArrowUp" === n)
                    e.preventDefault(), Jo(t, r, m, p, Yo);
                  else if ("Home" === n)
                    e.preventDefault(), Jo(t, null, m, p, Qo);
                  else if ("End" === n)
                    e.preventDefault(), Jo(t, null, m, p, Yo);
                  else if (1 === n.length) {
                    var o = k.current,
                      i = n.toLowerCase(),
                      a = performance.now();
                    o.keys.length > 0 &&
                      (a - o.lastTime > 500
                        ? ((o.keys = []),
                          (o.repeating = !0),
                          (o.previousKeyMatched = !0))
                        : o.repeating && i !== o.keys[0] && (o.repeating = !1)),
                      (o.lastTime = a),
                      o.keys.push(i);
                    var l = r && !o.repeating && Xo(r, o);
                    o.previousKeyMatched && (l || Jo(t, r, !1, p, Qo, o))
                      ? e.preventDefault()
                      : (o.previousKeyMatched = !1);
                  }
                  v && v(e);
                },
                tabIndex: i ? 0 : -1,
              },
              x,
              { children: E }
            )
          );
        }),
        ti = ei,
        ni = n(2977),
        ri = n(8195),
        oi = [
          "addEndListener",
          "appear",
          "children",
          "easing",
          "in",
          "onEnter",
          "onEntered",
          "onEntering",
          "onExit",
          "onExited",
          "onExiting",
          "style",
          "timeout",
          "TransitionComponent",
        ];
      function ii(e) {
        return "scale(".concat(e, ", ").concat(Math.pow(e, 2), ")");
      }
      var ai = {
          entering: { opacity: 1, transform: ii(1) },
          entered: { opacity: 1, transform: "none" },
        },
        li =
          "undefined" !== typeof navigator &&
          /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) &&
          /(os |version\/)15(.|_)4/i.test(navigator.userAgent),
        si = e.forwardRef(function (t, n) {
          var r = t.addEndListener,
            o = t.appear,
            i = void 0 === o || o,
            a = t.children,
            l = t.easing,
            s = t.in,
            d = t.onEnter,
            f = t.onEntered,
            p = t.onEntering,
            h = t.onExit,
            m = t.onExited,
            v = t.onExiting,
            g = t.style,
            y = t.timeout,
            x = void 0 === y ? "auto" : y,
            w = t.TransitionComponent,
            k = void 0 === w ? ar : w,
            S = (0, u.Z)(t, oi),
            Z = e.useRef(),
            E = e.useRef(),
            C = lr(),
            P = e.useRef(null),
            M = (0, z.Z)(a.ref, n),
            R = (0, z.Z)(P, M),
            T = function (e) {
              return function (t) {
                if (e) {
                  var n = P.current;
                  void 0 === t ? e(n) : e(n, t);
                }
              };
            },
            j = T(p),
            O = T(function (e, t) {
              sr(e);
              var n,
                r = ur({ style: g, timeout: x, easing: l }, { mode: "enter" }),
                o = r.duration,
                i = r.delay,
                a = r.easing;
              "auto" === x
                ? ((n = C.transitions.getAutoHeightDuration(e.clientHeight)),
                  (E.current = n))
                : (n = o),
                (e.style.transition = [
                  C.transitions.create("opacity", { duration: n, delay: i }),
                  C.transitions.create("transform", {
                    duration: li ? n : 0.666 * n,
                    delay: i,
                    easing: a,
                  }),
                ].join(",")),
                d && d(e, t);
            }),
            N = T(f),
            L = T(v),
            _ = T(function (e) {
              var t,
                n = ur({ style: g, timeout: x, easing: l }, { mode: "exit" }),
                r = n.duration,
                o = n.delay,
                i = n.easing;
              "auto" === x
                ? ((t = C.transitions.getAutoHeightDuration(e.clientHeight)),
                  (E.current = t))
                : (t = r),
                (e.style.transition = [
                  C.transitions.create("opacity", { duration: t, delay: o }),
                  C.transitions.create("transform", {
                    duration: li ? t : 0.666 * t,
                    delay: li ? o : o || 0.333 * t,
                    easing: i,
                  }),
                ].join(",")),
                (e.style.opacity = 0),
                (e.style.transform = ii(0.75)),
                h && h(e);
            }),
            A = T(m);
          return (
            e.useEffect(function () {
              return function () {
                clearTimeout(Z.current);
              };
            }, []),
            (0, b.jsx)(
              k,
              (0, c.Z)(
                {
                  appear: i,
                  in: s,
                  nodeRef: P,
                  onEnter: O,
                  onEntered: N,
                  onEntering: j,
                  onExit: _,
                  onExited: A,
                  onExiting: L,
                  addEndListener: function (e) {
                    "auto" === x && (Z.current = setTimeout(e, E.current || 0)),
                      r && r(P.current, e);
                  },
                  timeout: "auto" === x ? null : x,
                },
                S,
                {
                  children: function (t, n) {
                    return e.cloneElement(
                      a,
                      (0, c.Z)(
                        {
                          style: (0, c.Z)(
                            {
                              opacity: 0,
                              transform: ii(0.75),
                              visibility:
                                "exited" !== t || s ? void 0 : "hidden",
                            },
                            ai[t],
                            g,
                            a.props.style
                          ),
                          ref: R,
                        },
                        n
                      )
                    );
                  },
                }
              )
            )
          );
        });
      si.muiSupportAuto = !0;
      var ui = si;
      function ci(e) {
        return (0, q.Z)("MuiPopover", e);
      }
      (0, K.Z)("MuiPopover", ["root", "paper"]);
      var di = ["onEntering"],
        fi = [
          "action",
          "anchorEl",
          "anchorOrigin",
          "anchorPosition",
          "anchorReference",
          "children",
          "className",
          "container",
          "elevation",
          "marginThreshold",
          "open",
          "PaperProps",
          "transformOrigin",
          "TransitionComponent",
          "transitionDuration",
          "TransitionProps",
        ];
      function pi(e, t) {
        var n = 0;
        return (
          "number" === typeof t
            ? (n = t)
            : "center" === t
            ? (n = e.height / 2)
            : "bottom" === t && (n = e.height),
          n
        );
      }
      function hi(e, t) {
        var n = 0;
        return (
          "number" === typeof t
            ? (n = t)
            : "center" === t
            ? (n = e.width / 2)
            : "right" === t && (n = e.width),
          n
        );
      }
      function mi(e) {
        return [e.horizontal, e.vertical]
          .map(function (e) {
            return "number" === typeof e ? "".concat(e, "px") : e;
          })
          .join(" ");
      }
      function vi(e) {
        return "function" === typeof e ? e() : e;
      }
      var gi = (0, T.ZP)(kr, {
          name: "MuiPopover",
          slot: "Root",
          overridesResolver: function (e, t) {
            return t.root;
          },
        })({}),
        yi = (0, T.ZP)(Fr, {
          name: "MuiPopover",
          slot: "Paper",
          overridesResolver: function (e, t) {
            return t.paper;
          },
        })({
          position: "absolute",
          overflowY: "auto",
          overflowX: "hidden",
          minWidth: 16,
          minHeight: 16,
          maxWidth: "calc(100% - 32px)",
          maxHeight: "calc(100% - 32px)",
          outline: 0,
        }),
        bi = e.forwardRef(function (t, n) {
          var r = (0, j.Z)({ props: t, name: "MuiPopover" }),
            o = r.action,
            i = r.anchorEl,
            a = r.anchorOrigin,
            l = void 0 === a ? { vertical: "top", horizontal: "left" } : a,
            s = r.anchorPosition,
            f = r.anchorReference,
            p = void 0 === f ? "anchorEl" : f,
            m = r.children,
            v = r.className,
            g = r.container,
            y = r.elevation,
            x = void 0 === y ? 8 : y,
            w = r.marginThreshold,
            k = void 0 === w ? 16 : w,
            S = r.open,
            Z = r.PaperProps,
            E = void 0 === Z ? {} : Z,
            C = r.transformOrigin,
            P = void 0 === C ? { vertical: "top", horizontal: "left" } : C,
            M = r.TransitionComponent,
            R = void 0 === M ? ui : M,
            T = r.transitionDuration,
            O = void 0 === T ? "auto" : T,
            N = r.TransitionProps,
            L = (N = void 0 === N ? {} : N).onEntering,
            _ = (0, u.Z)(r.TransitionProps, di),
            A = (0, u.Z)(r, fi),
            F = e.useRef(),
            I = (0, z.Z)(F, E.ref),
            D = (0, c.Z)({}, r, {
              anchorOrigin: l,
              anchorReference: p,
              elevation: x,
              marginThreshold: k,
              PaperProps: E,
              transformOrigin: P,
              TransitionComponent: R,
              transitionDuration: O,
              TransitionProps: _,
            }),
            W = (function (e) {
              var t = e.classes;
              return (0, d.Z)({ root: ["root"], paper: ["paper"] }, ci, t);
            })(D),
            B = e.useCallback(
              function () {
                if ("anchorPosition" === p) return s;
                var e = vi(i),
                  t = (
                    e && 1 === e.nodeType ? e : (0, Bo.Z)(F.current).body
                  ).getBoundingClientRect();
                return {
                  top: t.top + pi(t, l.vertical),
                  left: t.left + hi(t, l.horizontal),
                };
              },
              [i, l.horizontal, l.vertical, s, p]
            ),
            V = e.useCallback(
              function (e) {
                return {
                  vertical: pi(e, P.vertical),
                  horizontal: hi(e, P.horizontal),
                };
              },
              [P.horizontal, P.vertical]
            ),
            H = e.useCallback(
              function (e) {
                var t = { width: e.offsetWidth, height: e.offsetHeight },
                  n = V(t);
                if ("none" === p)
                  return { top: null, left: null, transformOrigin: mi(n) };
                var r = B(),
                  o = r.top - n.vertical,
                  a = r.left - n.horizontal,
                  l = o + t.height,
                  s = a + t.width,
                  u = (0, ri.Z)(vi(i)),
                  c = u.innerHeight - k,
                  d = u.innerWidth - k;
                if (o < k) {
                  var f = o - k;
                  (o -= f), (n.vertical += f);
                } else if (l > c) {
                  var h = l - c;
                  (o -= h), (n.vertical += h);
                }
                if (a < k) {
                  var m = a - k;
                  (a -= m), (n.horizontal += m);
                } else if (s > d) {
                  var v = s - d;
                  (a -= v), (n.horizontal += v);
                }
                return {
                  top: "".concat(Math.round(o), "px"),
                  left: "".concat(Math.round(a), "px"),
                  transformOrigin: mi(n),
                };
              },
              [i, p, B, V, k]
            ),
            U = e.useCallback(
              function () {
                var e = F.current;
                if (e) {
                  var t = H(e);
                  null !== t.top && (e.style.top = t.top),
                    null !== t.left && (e.style.left = t.left),
                    (e.style.transformOrigin = t.transformOrigin);
                }
              },
              [H]
            );
          e.useEffect(function () {
            S && U();
          }),
            e.useImperativeHandle(
              o,
              function () {
                return S
                  ? {
                      updatePosition: function () {
                        U();
                      },
                    }
                  : null;
              },
              [S, U]
            ),
            e.useEffect(
              function () {
                if (S) {
                  var e = (0, ni.Z)(function () {
                      U();
                    }),
                    t = (0, ri.Z)(i);
                  return (
                    t.addEventListener("resize", e),
                    function () {
                      e.clear(), t.removeEventListener("resize", e);
                    }
                  );
                }
              },
              [i, S, U]
            );
          var $ = O;
          "auto" !== O || R.muiSupportAuto || ($ = void 0);
          var q = g || (i ? (0, Bo.Z)(vi(i)).body : void 0);
          return (0, b.jsx)(
            gi,
            (0, c.Z)(
              {
                BackdropProps: { invisible: !0 },
                className: (0, h.Z)(W.root, v),
                container: q,
                open: S,
                ref: n,
                ownerState: D,
              },
              A,
              {
                children: (0, b.jsx)(
                  R,
                  (0, c.Z)(
                    {
                      appear: !0,
                      in: S,
                      onEntering: function (e, t) {
                        L && L(e, t), U();
                      },
                      timeout: $,
                    },
                    _,
                    {
                      children: (0, b.jsx)(
                        yi,
                        (0, c.Z)({ elevation: x }, E, {
                          ref: I,
                          className: (0, h.Z)(W.paper, E.className),
                          children: m,
                        })
                      ),
                    }
                  )
                ),
              }
            )
          );
        }),
        xi = bi;
      function wi(e) {
        return (0, q.Z)("MuiMenu", e);
      }
      (0, K.Z)("MuiMenu", ["root", "paper", "list"]);
      var ki = ["onEntering"],
        Si = [
          "autoFocus",
          "children",
          "disableAutoFocusItem",
          "MenuListProps",
          "onClose",
          "open",
          "PaperProps",
          "PopoverClasses",
          "transitionDuration",
          "TransitionProps",
          "variant",
        ],
        Zi = { vertical: "top", horizontal: "right" },
        Ei = { vertical: "top", horizontal: "left" },
        Ci = (0, T.ZP)(xi, {
          shouldForwardProp: function (e) {
            return (0, T.FO)(e) || "classes" === e;
          },
          name: "MuiMenu",
          slot: "Root",
          overridesResolver: function (e, t) {
            return t.root;
          },
        })({}),
        Pi = (0, T.ZP)(Fr, {
          name: "MuiMenu",
          slot: "Paper",
          overridesResolver: function (e, t) {
            return t.paper;
          },
        })({
          maxHeight: "calc(100% - 96px)",
          WebkitOverflowScrolling: "touch",
        }),
        Mi = (0, T.ZP)(ti, {
          name: "MuiMenu",
          slot: "List",
          overridesResolver: function (e, t) {
            return t.list;
          },
        })({ outline: 0 }),
        Ri = e.forwardRef(function (t, n) {
          var r = (0, j.Z)({ props: t, name: "MuiMenu" }),
            o = r.autoFocus,
            i = void 0 === o || o,
            a = r.children,
            l = r.disableAutoFocusItem,
            s = void 0 !== l && l,
            f = r.MenuListProps,
            p = void 0 === f ? {} : f,
            m = r.onClose,
            v = r.open,
            g = r.PaperProps,
            y = void 0 === g ? {} : g,
            x = r.PopoverClasses,
            w = r.transitionDuration,
            k = void 0 === w ? "auto" : w,
            S = r.TransitionProps,
            Z = (S = void 0 === S ? {} : S).onEntering,
            E = r.variant,
            C = void 0 === E ? "selectedMenu" : E,
            P = (0, u.Z)(r.TransitionProps, ki),
            M = (0, u.Z)(r, Si),
            R = lr(),
            T = "rtl" === R.direction,
            O = (0, c.Z)({}, r, {
              autoFocus: i,
              disableAutoFocusItem: s,
              MenuListProps: p,
              onEntering: Z,
              PaperProps: y,
              transitionDuration: k,
              TransitionProps: P,
              variant: C,
            }),
            z = (function (e) {
              var t = e.classes;
              return (0, d.Z)(
                { root: ["root"], paper: ["paper"], list: ["list"] },
                wi,
                t
              );
            })(O),
            N = i && !s && v,
            L = e.useRef(null),
            _ = -1;
          return (
            e.Children.map(a, function (t, n) {
              e.isValidElement(t) &&
                (t.props.disabled ||
                  ((("selectedMenu" === C && t.props.selected) || -1 === _) &&
                    (_ = n)));
            }),
            (0, b.jsx)(
              Ci,
              (0, c.Z)(
                {
                  classes: x,
                  onClose: m,
                  anchorOrigin: {
                    vertical: "bottom",
                    horizontal: T ? "right" : "left",
                  },
                  transformOrigin: T ? Zi : Ei,
                  PaperProps: (0, c.Z)({ component: Pi }, y, {
                    classes: (0, c.Z)({}, y.classes, { root: z.paper }),
                  }),
                  className: z.root,
                  open: v,
                  ref: n,
                  transitionDuration: k,
                  TransitionProps: (0, c.Z)(
                    {
                      onEntering: function (e, t) {
                        L.current && L.current.adjustStyleForScrollbar(e, R),
                          Z && Z(e, t);
                      },
                    },
                    P
                  ),
                  ownerState: O,
                },
                M,
                {
                  children: (0, b.jsx)(
                    Mi,
                    (0, c.Z)(
                      {
                        onKeyDown: function (e) {
                          "Tab" === e.key &&
                            (e.preventDefault(), m && m(e, "tabKeyDown"));
                        },
                        actions: L,
                        autoFocus: i && (-1 === _ || s),
                        autoFocusItem: N,
                        variant: C,
                      },
                      p,
                      { className: (0, h.Z)(z.list, p.className), children: a }
                    )
                  ),
                }
              )
            )
          );
        }),
        Ti = Ri;
      var ji = (0, K.Z)("MuiDivider", [
        "root",
        "absolute",
        "fullWidth",
        "inset",
        "middle",
        "flexItem",
        "light",
        "vertical",
        "withChildren",
        "withChildrenVertical",
        "textAlignRight",
        "textAlignLeft",
        "wrapper",
        "wrapperVertical",
      ]);
      var Oi = (0, K.Z)("MuiListItemIcon", ["root", "alignItemsFlexStart"]);
      var zi = (0, K.Z)("MuiListItemText", [
        "root",
        "multiline",
        "dense",
        "inset",
        "primary",
        "secondary",
      ]);
      function Ni(e) {
        return (0, q.Z)("MuiMenuItem", e);
      }
      var Li = (0, K.Z)("MuiMenuItem", [
          "root",
          "focusVisible",
          "dense",
          "disabled",
          "divider",
          "gutters",
          "selected",
        ]),
        _i = [
          "autoFocus",
          "component",
          "dense",
          "divider",
          "disableGutters",
          "focusVisibleClassName",
          "role",
          "tabIndex",
          "className",
        ],
        Ai = (0, T.ZP)(Qe, {
          shouldForwardProp: function (e) {
            return (0, T.FO)(e) || "classes" === e;
          },
          name: "MuiMenuItem",
          slot: "Root",
          overridesResolver: function (e, t) {
            var n = e.ownerState;
            return [
              t.root,
              n.dense && t.dense,
              n.divider && t.divider,
              !n.disableGutters && t.gutters,
            ];
          },
        })(function (e) {
          var t,
            n = e.theme,
            r = e.ownerState;
          return (0,
          c.Z)({}, n.typography.body1, { display: "flex", justifyContent: "flex-start", alignItems: "center", position: "relative", textDecoration: "none", minHeight: 48, paddingTop: 6, paddingBottom: 6, boxSizing: "border-box", whiteSpace: "nowrap" }, !r.disableGutters && { paddingLeft: 16, paddingRight: 16 }, r.divider && { borderBottom: "1px solid ".concat((n.vars || n).palette.divider), backgroundClip: "padding-box" }, ((t = { "&:hover": { textDecoration: "none", backgroundColor: (n.vars || n).palette.action.hover, "@media (hover: none)": { backgroundColor: "transparent" } } }), (0, a.Z)(t, "&.".concat(Li.selected), (0, a.Z)({ backgroundColor: n.vars ? "rgba(".concat(n.vars.palette.primary.mainChannel, " / ").concat(n.vars.palette.action.selectedOpacity, ")") : (0, pe.Fq)(n.palette.primary.main, n.palette.action.selectedOpacity) }, "&.".concat(Li.focusVisible), { backgroundColor: n.vars ? "rgba(".concat(n.vars.palette.primary.mainChannel, " / calc(").concat(n.vars.palette.action.selectedOpacity, " + ").concat(n.vars.palette.action.focusOpacity, "))") : (0, pe.Fq)(n.palette.primary.main, n.palette.action.selectedOpacity + n.palette.action.focusOpacity) })), (0, a.Z)(t, "&.".concat(Li.selected, ":hover"), { backgroundColor: n.vars ? "rgba(".concat(n.vars.palette.primary.mainChannel, " / calc(").concat(n.vars.palette.action.selectedOpacity, " + ").concat(n.vars.palette.action.hoverOpacity, "))") : (0, pe.Fq)(n.palette.primary.main, n.palette.action.selectedOpacity + n.palette.action.hoverOpacity), "@media (hover: none)": { backgroundColor: n.vars ? "rgba(".concat(n.vars.palette.primary.mainChannel, " / ").concat(n.vars.palette.action.selectedOpacity, ")") : (0, pe.Fq)(n.palette.primary.main, n.palette.action.selectedOpacity) } }), (0, a.Z)(t, "&.".concat(Li.focusVisible), { backgroundColor: (n.vars || n).palette.action.focus }), (0, a.Z)(t, "&.".concat(Li.disabled), { opacity: (n.vars || n).palette.action.disabledOpacity }), (0, a.Z)(t, "& + .".concat(ji.root), { marginTop: n.spacing(1), marginBottom: n.spacing(1) }), (0, a.Z)(t, "& + .".concat(ji.inset), { marginLeft: 52 }), (0, a.Z)(t, "& .".concat(zi.root), { marginTop: 0, marginBottom: 0 }), (0, a.Z)(t, "& .".concat(zi.inset), { paddingLeft: 36 }), (0, a.Z)(t, "& .".concat(Oi.root), { minWidth: 36 }), t), !r.dense && (0, a.Z)({}, n.breakpoints.up("sm"), { minHeight: "auto" }), r.dense && (0, c.Z)({ minHeight: 32, paddingTop: 4, paddingBottom: 4 }, n.typography.body2, (0, a.Z)({}, "& .".concat(Oi.root, " svg"), { fontSize: "1.25rem" })));
        }),
        Fi = e.forwardRef(function (t, n) {
          var r = (0, j.Z)({ props: t, name: "MuiMenuItem" }),
            o = r.autoFocus,
            i = void 0 !== o && o,
            a = r.component,
            l = void 0 === a ? "li" : a,
            s = r.dense,
            f = void 0 !== s && s,
            p = r.divider,
            m = void 0 !== p && p,
            v = r.disableGutters,
            g = void 0 !== v && v,
            y = r.focusVisibleClassName,
            x = r.role,
            w = void 0 === x ? "menuitem" : x,
            k = r.tabIndex,
            S = r.className,
            Z = (0, u.Z)(r, _i),
            E = e.useContext(Vo),
            C = { dense: f || E.dense || !1, disableGutters: g },
            P = e.useRef(null);
          (0, N.Z)(
            function () {
              i && P.current && P.current.focus();
            },
            [i]
          );
          var M,
            R = (0, c.Z)({}, r, {
              dense: C.dense,
              divider: m,
              disableGutters: g,
            }),
            T = (function (e) {
              var t = e.disabled,
                n = e.dense,
                r = e.divider,
                o = e.disableGutters,
                i = e.selected,
                a = e.classes,
                l = {
                  root: [
                    "root",
                    n && "dense",
                    t && "disabled",
                    !o && "gutters",
                    r && "divider",
                    i && "selected",
                  ],
                },
                s = (0, d.Z)(l, Ni, a);
              return (0, c.Z)({}, a, s);
            })(r),
            O = (0, z.Z)(P, n);
          return (
            r.disabled || (M = void 0 !== k ? k : -1),
            (0, b.jsx)(Vo.Provider, {
              value: C,
              children: (0, b.jsx)(
                Ai,
                (0, c.Z)(
                  {
                    ref: O,
                    role: w,
                    tabIndex: M,
                    component: l,
                    focusVisibleClassName: (0, h.Z)(T.focusVisible, y),
                    className: (0, h.Z)(T.root, S),
                  },
                  Z,
                  { ownerState: R, classes: T }
                )
              ),
            })
          );
        }),
        Ii = n(5524),
        Di = n(6248);
      function Wi(e) {
        return (0, q.Z)("MuiDialog", e);
      }
      var Bi = (0, K.Z)("MuiDialog", [
        "root",
        "scrollPaper",
        "scrollBody",
        "container",
        "paper",
        "paperScrollPaper",
        "paperScrollBody",
        "paperWidthFalse",
        "paperWidthXs",
        "paperWidthSm",
        "paperWidthMd",
        "paperWidthLg",
        "paperWidthXl",
        "paperFullWidth",
        "paperFullScreen",
      ]);
      var Vi = (0, e.createContext)({}),
        Hi = [
          "aria-describedby",
          "aria-labelledby",
          "BackdropComponent",
          "BackdropProps",
          "children",
          "className",
          "disableEscapeKeyDown",
          "fullScreen",
          "fullWidth",
          "maxWidth",
          "onBackdropClick",
          "onClose",
          "open",
          "PaperComponent",
          "PaperProps",
          "scroll",
          "TransitionComponent",
          "transitionDuration",
          "TransitionProps",
        ],
        Ui = (0, T.ZP)(gr, {
          name: "MuiDialog",
          slot: "Backdrop",
          overrides: function (e, t) {
            return t.backdrop;
          },
        })({ zIndex: -1 }),
        $i = (0, T.ZP)(kr, {
          name: "MuiDialog",
          slot: "Root",
          overridesResolver: function (e, t) {
            return t.root;
          },
        })({ "@media print": { position: "absolute !important" } }),
        qi = (0, T.ZP)("div", {
          name: "MuiDialog",
          slot: "Container",
          overridesResolver: function (e, t) {
            var n = e.ownerState;
            return [t.container, t["scroll".concat((0, O.Z)(n.scroll))]];
          },
        })(function (e) {
          var t = e.ownerState;
          return (0,
          c.Z)({ height: "100%", "@media print": { height: "auto" }, outline: 0 }, "paper" === t.scroll && { display: "flex", justifyContent: "center", alignItems: "center" }, "body" === t.scroll && { overflowY: "auto", overflowX: "hidden", textAlign: "center", "&:after": { content: '""', display: "inline-block", verticalAlign: "middle", height: "100%", width: "0" } });
        }),
        Ki = (0, T.ZP)(Fr, {
          name: "MuiDialog",
          slot: "Paper",
          overridesResolver: function (e, t) {
            var n = e.ownerState;
            return [
              t.paper,
              t["scrollPaper".concat((0, O.Z)(n.scroll))],
              t["paperWidth".concat((0, O.Z)(String(n.maxWidth)))],
              n.fullWidth && t.paperFullWidth,
              n.fullScreen && t.paperFullScreen,
            ];
          },
        })(function (e) {
          var t = e.theme,
            n = e.ownerState;
          return (0,
          c.Z)({ margin: 32, position: "relative", overflowY: "auto", "@media print": { overflowY: "visible", boxShadow: "none" } }, "paper" === n.scroll && { display: "flex", flexDirection: "column", maxHeight: "calc(100% - 64px)" }, "body" === n.scroll && { display: "inline-block", verticalAlign: "middle", textAlign: "left" }, !n.maxWidth && { maxWidth: "calc(100% - 64px)" }, "xs" === n.maxWidth && (0, a.Z)({ maxWidth: "px" === t.breakpoints.unit ? Math.max(t.breakpoints.values.xs, 444) : "".concat(t.breakpoints.values.xs).concat(t.breakpoints.unit) }, "&.".concat(Bi.paperScrollBody), (0, a.Z)({}, t.breakpoints.down(Math.max(t.breakpoints.values.xs, 444) + 64), { maxWidth: "calc(100% - 64px)" })), n.maxWidth && "xs" !== n.maxWidth && (0, a.Z)({ maxWidth: "".concat(t.breakpoints.values[n.maxWidth]).concat(t.breakpoints.unit) }, "&.".concat(Bi.paperScrollBody), (0, a.Z)({}, t.breakpoints.down(t.breakpoints.values[n.maxWidth] + 64), { maxWidth: "calc(100% - 64px)" })), n.fullWidth && { width: "calc(100% - 64px)" }, n.fullScreen && (0, a.Z)({ margin: 0, width: "100%", maxWidth: "100%", height: "100%", maxHeight: "none", borderRadius: 0 }, "&.".concat(Bi.paperScrollBody), { margin: 0, maxWidth: "100%" }));
        }),
        Gi = e.forwardRef(function (t, n) {
          var r = (0, j.Z)({ props: t, name: "MuiDialog" }),
            o = lr(),
            i = {
              enter: o.transitions.duration.enteringScreen,
              exit: o.transitions.duration.leavingScreen,
            },
            a = r["aria-describedby"],
            l = r["aria-labelledby"],
            s = r.BackdropComponent,
            f = r.BackdropProps,
            p = r.children,
            m = r.className,
            v = r.disableEscapeKeyDown,
            g = void 0 !== v && v,
            y = r.fullScreen,
            x = void 0 !== y && y,
            w = r.fullWidth,
            k = void 0 !== w && w,
            S = r.maxWidth,
            Z = void 0 === S ? "sm" : S,
            E = r.onBackdropClick,
            C = r.onClose,
            P = r.open,
            M = r.PaperComponent,
            R = void 0 === M ? Fr : M,
            T = r.PaperProps,
            z = void 0 === T ? {} : T,
            N = r.scroll,
            L = void 0 === N ? "paper" : N,
            _ = r.TransitionComponent,
            A = void 0 === _ ? pr : _,
            F = r.transitionDuration,
            I = void 0 === F ? i : F,
            D = r.TransitionProps,
            W = (0, u.Z)(r, Hi),
            B = (0, c.Z)({}, r, {
              disableEscapeKeyDown: g,
              fullScreen: x,
              fullWidth: k,
              maxWidth: Z,
              scroll: L,
            }),
            V = (function (e) {
              var t = e.classes,
                n = e.scroll,
                r = e.maxWidth,
                o = e.fullWidth,
                i = e.fullScreen,
                a = {
                  root: ["root"],
                  container: ["container", "scroll".concat((0, O.Z)(n))],
                  paper: [
                    "paper",
                    "paperScroll".concat((0, O.Z)(n)),
                    "paperWidth".concat((0, O.Z)(String(r))),
                    o && "paperFullWidth",
                    i && "paperFullScreen",
                  ],
                };
              return (0, d.Z)(a, Wi, t);
            })(B),
            H = e.useRef(),
            U = (0, Di.Z)(l),
            $ = e.useMemo(
              function () {
                return { titleId: U };
              },
              [U]
            );
          return (0, b.jsx)(
            $i,
            (0, c.Z)(
              {
                className: (0, h.Z)(V.root, m),
                closeAfterTransition: !0,
                components: { Backdrop: Ui },
                componentsProps: {
                  backdrop: (0, c.Z)({ transitionDuration: I, as: s }, f),
                },
                disableEscapeKeyDown: g,
                onClose: C,
                open: P,
                ref: n,
                onClick: function (e) {
                  H.current &&
                    ((H.current = null), E && E(e), C && C(e, "backdropClick"));
                },
                ownerState: B,
              },
              W,
              {
                children: (0, b.jsx)(
                  A,
                  (0, c.Z)(
                    { appear: !0, in: P, timeout: I, role: "presentation" },
                    D,
                    {
                      children: (0, b.jsx)(qi, {
                        className: (0, h.Z)(V.container),
                        onMouseDown: function (e) {
                          H.current = e.target === e.currentTarget;
                        },
                        ownerState: B,
                        children: (0, b.jsx)(
                          Ki,
                          (0, c.Z)(
                            {
                              as: R,
                              elevation: 24,
                              role: "dialog",
                              "aria-describedby": a,
                              "aria-labelledby": U,
                            },
                            z,
                            {
                              className: (0, h.Z)(V.paper, z.className),
                              ownerState: B,
                              children: (0, b.jsx)(Vi.Provider, {
                                value: $,
                                children: p,
                              }),
                            }
                          )
                        ),
                      }),
                    }
                  )
                ),
              }
            )
          );
        }),
        Qi = Gi;
      function Yi(e) {
        return (0, q.Z)("MuiDialogActions", e);
      }
      (0, K.Z)("MuiDialogActions", ["root", "spacing"]);
      var Xi = ["className", "disableSpacing"],
        Ji = (0, T.ZP)("div", {
          name: "MuiDialogActions",
          slot: "Root",
          overridesResolver: function (e, t) {
            var n = e.ownerState;
            return [t.root, !n.disableSpacing && t.spacing];
          },
        })(function (e) {
          var t = e.ownerState;
          return (0,
          c.Z)({ display: "flex", alignItems: "center", padding: 8, justifyContent: "flex-end", flex: "0 0 auto" }, !t.disableSpacing && { "& > :not(:first-of-type)": { marginLeft: 8 } });
        }),
        ea = e.forwardRef(function (e, t) {
          var n = (0, j.Z)({ props: e, name: "MuiDialogActions" }),
            r = n.className,
            o = n.disableSpacing,
            i = void 0 !== o && o,
            a = (0, u.Z)(n, Xi),
            l = (0, c.Z)({}, n, { disableSpacing: i }),
            s = (function (e) {
              var t = e.classes,
                n = { root: ["root", !e.disableSpacing && "spacing"] };
              return (0, d.Z)(n, Yi, t);
            })(l);
          return (0,
          b.jsx)(Ji, (0, c.Z)({ className: (0, h.Z)(s.root, r), ownerState: l, ref: t }, a));
        });
      function ta(e) {
        return (0, q.Z)("MuiDialogContent", e);
      }
      (0, K.Z)("MuiDialogContent", ["root", "dividers"]);
      function na(e) {
        return (0, q.Z)("MuiDialogTitle", e);
      }
      var ra = (0, K.Z)("MuiDialogTitle", ["root"]),
        oa = ["className", "dividers"],
        ia = (0, T.ZP)("div", {
          name: "MuiDialogContent",
          slot: "Root",
          overridesResolver: function (e, t) {
            var n = e.ownerState;
            return [t.root, n.dividers && t.dividers];
          },
        })(function (e) {
          var t = e.theme,
            n = e.ownerState;
          return (0,
          c.Z)({ flex: "1 1 auto", WebkitOverflowScrolling: "touch", overflowY: "auto", padding: "20px 24px" }, n.dividers ? { padding: "16px 24px", borderTop: "1px solid ".concat((t.vars || t).palette.divider), borderBottom: "1px solid ".concat((t.vars || t).palette.divider) } : (0, a.Z)({}, ".".concat(ra.root, " + &"), { paddingTop: 0 }));
        }),
        aa = e.forwardRef(function (e, t) {
          var n = (0, j.Z)({ props: e, name: "MuiDialogContent" }),
            r = n.className,
            o = n.dividers,
            i = void 0 !== o && o,
            a = (0, u.Z)(n, oa),
            l = (0, c.Z)({}, n, { dividers: i }),
            s = (function (e) {
              var t = e.classes,
                n = { root: ["root", e.dividers && "dividers"] };
              return (0, d.Z)(n, ta, t);
            })(l);
          return (0,
          b.jsx)(ia, (0, c.Z)({ className: (0, h.Z)(s.root, r), ownerState: l, ref: t }, a));
        });
      function la(e) {
        return (0, q.Z)("MuiDialogContentText", e);
      }
      (0, K.Z)("MuiDialogContentText", ["root"]);
      var sa = ["children", "className"],
        ua = (0, T.ZP)(ao, {
          shouldForwardProp: function (e) {
            return (0, T.FO)(e) || "classes" === e;
          },
          name: "MuiDialogContentText",
          slot: "Root",
          overridesResolver: function (e, t) {
            return t.root;
          },
        })({}),
        ca = e.forwardRef(function (e, t) {
          var n = (0, j.Z)({ props: e, name: "MuiDialogContentText" }),
            r = n.className,
            o = (0, u.Z)(n, sa),
            i = (function (e) {
              var t = e.classes,
                n = (0, d.Z)({ root: ["root"] }, la, t);
              return (0, c.Z)({}, t, n);
            })(o);
          return (0,
          b.jsx)(ua, (0, c.Z)({ component: "p", variant: "body1", color: "text.secondary", ref: t, ownerState: o, className: (0, h.Z)(i.root, r) }, n, { classes: i }));
        }),
        da = ["className", "id"],
        fa = (0, T.ZP)(ao, {
          name: "MuiDialogTitle",
          slot: "Root",
          overridesResolver: function (e, t) {
            return t.root;
          },
        })({ padding: "16px 24px", flex: "0 0 auto" }),
        pa = e.forwardRef(function (t, n) {
          var r = (0, j.Z)({ props: t, name: "MuiDialogTitle" }),
            o = r.className,
            i = r.id,
            a = (0, u.Z)(r, da),
            l = r,
            s = (function (e) {
              var t = e.classes;
              return (0, d.Z)({ root: ["root"] }, na, t);
            })(l),
            f = e.useContext(Vi).titleId,
            p = void 0 === f ? i : f;
          return (0,
          b.jsx)(fa, (0, c.Z)({ component: "h2", className: (0, h.Z)(s.root, o), ownerState: l, ref: n, variant: "h6", id: p }, a));
        });
      function ha(e) {
        var t = e.dialog,
          n = e.handleClose;
        return (0, b.jsxs)(Qi, {
          open: t.isOpen,
          onClose: n,
          "aria-labelledby": "alert-dialog-title",
          "aria-describedby": "alert-dialog-description",
          children: [
            (0, b.jsx)(pa, {
              id: "alert-dialog-title",
              children: t.content.title,
            }),
            (0, b.jsx)(aa, {
              children: (0, b.jsx)(ca, {
                id: "alert-dialog-description",
                children: t.content.text,
              }),
            }),
            (0, b.jsxs)(ea, {
              sx: { color: "black" },
              children: [
                (0, b.jsx)(it, {
                  color: "primary",
                  variant: "contained",
                  onClick: function () {
                    t.action(!0), n();
                  },
                  children: t.content.buttonTrue,
                }),
                t.content.buttonFalse &&
                  (0, b.jsx)(it, {
                    color: "primary",
                    variant: "contained",
                    onClick: function () {
                      t.action(!1), n();
                    },
                    autoFocus: !0,
                    children: t.content.buttonFalse,
                  }),
              ],
            }),
          ],
        });
      }
      function ma(t) {
        var n = t.dispatch,
          r = t.fetched,
          o = e.useState(null),
          a = (0, i.Z)(o, 2),
          l = a[0],
          u = a[1],
          c = Boolean(l),
          d = function () {
            u(null);
          },
          f = e.useState({
            isOpen: !1,
            content: { title: "", text: "", buttonTrue: "", buttonFalse: "" },
            action: function (e) {
              return null;
            },
          }),
          p = (0, i.Z)(f, 2),
          h = p[0],
          m = p[1];
        return (0, b.jsxs)(b.Fragment, {
          children: [
            (0, b.jsx)(it, {
              "aria-controls": c ? "basic-menu" : void 0,
              "aria-haspopup": "true",
              "aria-expanded": c ? "true" : void 0,
              onClick: function (e) {
                u(e.currentTarget);
              },
              sx: { borderRadius: 0 },
              startIcon: (0, b.jsx)(Ii.Z, {}),
              children: (0, b.jsx)(ao, {
                sx: { display: { xs: "none", sm: "block" } },
                children:
                  -1 !== r.current
                    ? r.trees[r.current].title
                    : (0, b.jsx)("i", { children: "(unsaved tree)" }),
              }),
            }),
            (0, b.jsxs)(Ti, {
              id: "basic-menu",
              anchorEl: l,
              open: c,
              onClose: d,
              MenuListProps: { "aria-labelledby": "basic-button" },
              disableScrollLock: !0,
              children: [
                -1 === r.current
                  ? (0, b.jsx)(
                      Fi,
                      {
                        children: (0, b.jsx)("b", {
                          children: "(unsaved tree)",
                        }),
                      },
                      "local"
                    )
                  : "",
                r.trees.map(function (e, t) {
                  return (0, b.jsx)(
                    Fi,
                    {
                      onClick: function () {
                        return (function (e, t) {
                          t !== r.current &&
                            m(function () {
                              return {
                                isOpen: !0,
                                content: {
                                  title: "Switch Tree",
                                  text: "Are you sure you want to switch tree? Unsaved progress on current tree will be lost.",
                                  buttonTrue: "Switch",
                                  buttonFalse: "Cancel",
                                },
                                action: function (r) {
                                  return (
                                    r &&
                                      n({
                                        type: "load tree",
                                        tree: e,
                                        index: t,
                                      }),
                                    null
                                  );
                                },
                              };
                            }),
                            d();
                        })(e, t);
                      },
                      children:
                        r.current === t
                          ? (0, b.jsx)("b", { children: e.title })
                          : e.title,
                    },
                    e.id
                  );
                }),
              ],
            }),
            (0, b.jsx)(ha, {
              dialog: h,
              handleClose: function () {
                m(function (e) {
                  return s(s({}, e), {}, { isOpen: !1 });
                });
              },
            }),
          ],
        });
      }
      function va(t) {
        var n = t.open,
          r = t.handleClose,
          o = t.dispatch,
          a = "Sign In",
          l = "You can save your trees and access them later.",
          u = "Sign in",
          c = e.useState({ username: !1, password: !1 }),
          d = (0, i.Z)(c, 2),
          f = d[0],
          p = d[1],
          h = (function () {
            var e = en(
              Xt().mark(function e(t) {
                return Xt().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        t.preventDefault(),
                          cn(t.target[0].value, t.target[1].value)
                            .then(function (e) {
                              e.success
                                ? (p({ username: !1, password: !1 }),
                                  o({
                                    type: "set fetched trees",
                                    trees: e.trees,
                                  }),
                                  o({ type: "set user", user: e.token }),
                                  r())
                                : (p({ username: !1, password: !1 }),
                                  e.errors.forEach(function (e) {
                                    "password" === e.param &&
                                      p(function (t) {
                                        return s(
                                          s({}, t),
                                          {},
                                          { password: e.msg }
                                        );
                                      }),
                                      "username" === e.param &&
                                        p(function (t) {
                                          return s(
                                            s({}, t),
                                            {},
                                            { username: e.msg }
                                          );
                                        });
                                  }));
                            })
                            .catch(function (e) {
                              console.log(e),
                                o({
                                  type: "set error dialog",
                                  dialog: {
                                    isOpen: !0,
                                    content: {
                                      title: "Error",
                                      text: "".concat(e),
                                      buttonTrue: "Close",
                                      buttonFalse: null,
                                    },
                                    action: function () {},
                                  },
                                });
                            });
                      case 2:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })();
        return (0, b.jsx)(kr, {
          open: n,
          onClose: r,
          "aria-labelledby": "modal-modal-title",
          "aria-describedby": "modal-modal-description",
          children: (0, b.jsx)(zr, {
            maxWidth: "xs",
            children: (0, b.jsx)(Qt, {
              py: 16,
              children: (0, b.jsx)(Br, {
                variant: "outlined",
                children: (0, b.jsxs)($r, {
                  children: [
                    (0, b.jsx)(Qt, {
                      display: "flex",
                      mt: 3,
                      children: (0, b.jsx)(Qt, {
                        mx: "auto",
                        children: (0, b.jsx)(eo, { variant: "rounded" }),
                      }),
                    }),
                    (0, b.jsxs)(Qt, {
                      mt: 2,
                      px: 4,
                      children: [
                        (0, b.jsx)(ao, {
                          variant: "h5",
                          component: "h3",
                          align: "center",
                          gutterBottom: !0,
                          children: a,
                        }),
                        (0, b.jsx)(ao, {
                          variant: "body2",
                          component: "p",
                          color: "textSecondary",
                          align: "center",
                          children: l,
                        }),
                        (0, b.jsx)(Qt, {
                          my: 3,
                          children: (0, b.jsx)("form", {
                            onSubmit: h,
                            children: (0, b.jsxs)(bo, {
                              container: !0,
                              spacing: 2,
                              children: [
                                (0, b.jsx)(bo, {
                                  item: !0,
                                  xs: 12,
                                  children: (0, b.jsxs)(Zo, {
                                    error: f.username,
                                    children: [
                                      (0, b.jsx)(No, {
                                        htmlFor: "username",
                                        children: "Username",
                                      }),
                                      (0, b.jsx)(de, {
                                        id: "username",
                                        "aria-describedby":
                                          "username-helper-text",
                                      }),
                                      (0, b.jsx)(Do, {
                                        id: "username-helper-text",
                                        children: f.username,
                                      }),
                                    ],
                                  }),
                                }),
                                (0, b.jsx)(bo, {
                                  item: !0,
                                  xs: 12,
                                  children: (0, b.jsxs)(Zo, {
                                    error: f.password,
                                    children: [
                                      (0, b.jsx)(No, {
                                        htmlFor: "password",
                                        children: "Password",
                                      }),
                                      (0, b.jsx)(de, {
                                        id: "password",
                                        type: "password",
                                        "aria-describedby":
                                          "password-helper-text",
                                      }),
                                      (0, b.jsx)(Do, {
                                        id: "password-helper-text",
                                        children: f.password,
                                      }),
                                    ],
                                  }),
                                }),
                                (0, b.jsx)(bo, {
                                  item: !0,
                                  xs: 12,
                                  children: (0, b.jsx)(Qt, {
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    children: (0, b.jsx)(it, {
                                      type: "submit",
                                      variant: "contained",
                                      color: "primary",
                                      size: "large",
                                      children: u,
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          }),
        });
      }
      var ga = e.createContext();
      function ya(e) {
        return (0, q.Z)("MuiTableBody", e);
      }
      (0, K.Z)("MuiTableBody", ["root"]);
      var ba = ["className", "component"],
        xa = (0, T.ZP)("tbody", {
          name: "MuiTableBody",
          slot: "Root",
          overridesResolver: function (e, t) {
            return t.root;
          },
        })({ display: "table-row-group" }),
        wa = { variant: "body" },
        ka = "tbody",
        Sa = e.forwardRef(function (e, t) {
          var n = (0, j.Z)({ props: e, name: "MuiTableBody" }),
            r = n.className,
            o = n.component,
            i = void 0 === o ? ka : o,
            a = (0, u.Z)(n, ba),
            l = (0, c.Z)({}, n, { component: i }),
            s = (function (e) {
              var t = e.classes;
              return (0, d.Z)({ root: ["root"] }, ya, t);
            })(l);
          return (0,
          b.jsx)(ga.Provider, { value: wa, children: (0, b.jsx)(xa, (0, c.Z)({ className: (0, h.Z)(s.root, r), as: i, ref: t, role: i === ka ? null : "rowgroup", ownerState: l }, a)) });
        });
      function Za(e) {
        return (0, q.Z)("MuiTableRow", e);
      }
      var Ea = (0, K.Z)("MuiTableRow", [
          "root",
          "selected",
          "hover",
          "head",
          "footer",
        ]),
        Ca = ["className", "component", "hover", "selected"],
        Pa = (0, T.ZP)("tr", {
          name: "MuiTableRow",
          slot: "Root",
          overridesResolver: function (e, t) {
            var n = e.ownerState;
            return [t.root, n.head && t.head, n.footer && t.footer];
          },
        })(function (e) {
          var t,
            n = e.theme;
          return (
            (t = {
              color: "inherit",
              display: "table-row",
              verticalAlign: "middle",
              outline: 0,
            }),
            (0, a.Z)(t, "&.".concat(Ea.hover, ":hover"), {
              backgroundColor: (n.vars || n).palette.action.hover,
            }),
            (0, a.Z)(t, "&.".concat(Ea.selected), {
              backgroundColor: n.vars
                ? "rgba("
                    .concat(n.vars.palette.primary.mainChannel, " / ")
                    .concat(n.vars.palette.action.selectedOpacity, ")")
                : (0, pe.Fq)(
                    n.palette.primary.main,
                    n.palette.action.selectedOpacity
                  ),
              "&:hover": {
                backgroundColor: n.vars
                  ? "rgba("
                      .concat(n.vars.palette.primary.mainChannel, " / calc(")
                      .concat(n.vars.palette.action.selectedOpacity, " + ")
                      .concat(n.vars.palette.action.hoverOpacity, "))")
                  : (0, pe.Fq)(
                      n.palette.primary.main,
                      n.palette.action.selectedOpacity +
                        n.palette.action.hoverOpacity
                    ),
              },
            }),
            t
          );
        }),
        Ma = e.forwardRef(function (t, n) {
          var r = (0, j.Z)({ props: t, name: "MuiTableRow" }),
            o = r.className,
            i = r.component,
            a = void 0 === i ? "tr" : i,
            l = r.hover,
            s = void 0 !== l && l,
            f = r.selected,
            p = void 0 !== f && f,
            m = (0, u.Z)(r, Ca),
            v = e.useContext(ga),
            g = (0, c.Z)({}, r, {
              component: a,
              hover: s,
              selected: p,
              head: v && "head" === v.variant,
              footer: v && "footer" === v.variant,
            }),
            y = (function (e) {
              var t = e.classes,
                n = {
                  root: [
                    "root",
                    e.selected && "selected",
                    e.hover && "hover",
                    e.head && "head",
                    e.footer && "footer",
                  ],
                };
              return (0, d.Z)(n, Za, t);
            })(g);
          return (0,
          b.jsx)(Pa, (0, c.Z)({ as: a, ref: n, className: (0, h.Z)(y.root, o), role: "tr" === a ? null : "row", ownerState: g }, m));
        }),
        Ra = Ma;
      var Ta = e.createContext();
      function ja(e) {
        return (0, q.Z)("MuiTableCell", e);
      }
      var Oa = (0, K.Z)("MuiTableCell", [
          "root",
          "head",
          "body",
          "footer",
          "sizeSmall",
          "sizeMedium",
          "paddingCheckbox",
          "paddingNone",
          "alignLeft",
          "alignCenter",
          "alignRight",
          "alignJustify",
          "stickyHeader",
        ]),
        za = [
          "align",
          "className",
          "component",
          "padding",
          "scope",
          "size",
          "sortDirection",
          "variant",
        ],
        Na = (0, T.ZP)("td", {
          name: "MuiTableCell",
          slot: "Root",
          overridesResolver: function (e, t) {
            var n = e.ownerState;
            return [
              t.root,
              t[n.variant],
              t["size".concat((0, O.Z)(n.size))],
              "normal" !== n.padding &&
                t["padding".concat((0, O.Z)(n.padding))],
              "inherit" !== n.align && t["align".concat((0, O.Z)(n.align))],
              n.stickyHeader && t.stickyHeader,
            ];
          },
        })(function (e) {
          var t = e.theme,
            n = e.ownerState;
          return (0,
          c.Z)({}, t.typography.body2, { display: "table-cell", verticalAlign: "inherit", borderBottom: t.vars ? "1px solid ".concat(t.vars.palette.TableCell.border) : "1px solid\n    ".concat("light" === t.palette.mode ? (0, pe.$n)((0, pe.Fq)(t.palette.divider, 1), 0.88) : (0, pe._j)((0, pe.Fq)(t.palette.divider, 1), 0.68)), textAlign: "left", padding: 16 }, "head" === n.variant && { color: (t.vars || t).palette.text.primary, lineHeight: t.typography.pxToRem(24), fontWeight: t.typography.fontWeightMedium }, "body" === n.variant && { color: (t.vars || t).palette.text.primary }, "footer" === n.variant && { color: (t.vars || t).palette.text.secondary, lineHeight: t.typography.pxToRem(21), fontSize: t.typography.pxToRem(12) }, "small" === n.size && (0, a.Z)({ padding: "6px 16px" }, "&.".concat(Oa.paddingCheckbox), { width: 24, padding: "0 12px 0 16px", "& > *": { padding: 0 } }), "checkbox" === n.padding && { width: 48, padding: "0 0 0 4px" }, "none" === n.padding && { padding: 0 }, "left" === n.align && { textAlign: "left" }, "center" === n.align && { textAlign: "center" }, "right" === n.align && { textAlign: "right", flexDirection: "row-reverse" }, "justify" === n.align && { textAlign: "justify" }, n.stickyHeader && { position: "sticky", top: 0, zIndex: 2, backgroundColor: (t.vars || t).palette.background.default });
        }),
        La = e.forwardRef(function (t, n) {
          var r,
            o = (0, j.Z)({ props: t, name: "MuiTableCell" }),
            i = o.align,
            a = void 0 === i ? "inherit" : i,
            l = o.className,
            s = o.component,
            f = o.padding,
            p = o.scope,
            m = o.size,
            v = o.sortDirection,
            g = o.variant,
            y = (0, u.Z)(o, za),
            x = e.useContext(Ta),
            w = e.useContext(ga),
            k = w && "head" === w.variant;
          r = s || (k ? "th" : "td");
          var S = p;
          !S && k && (S = "col");
          var Z = g || (w && w.variant),
            E = (0, c.Z)({}, o, {
              align: a,
              component: r,
              padding: f || (x && x.padding ? x.padding : "normal"),
              size: m || (x && x.size ? x.size : "medium"),
              sortDirection: v,
              stickyHeader: "head" === Z && x && x.stickyHeader,
              variant: Z,
            }),
            C = (function (e) {
              var t = e.classes,
                n = e.variant,
                r = e.align,
                o = e.padding,
                i = e.size,
                a = {
                  root: [
                    "root",
                    n,
                    e.stickyHeader && "stickyHeader",
                    "inherit" !== r && "align".concat((0, O.Z)(r)),
                    "normal" !== o && "padding".concat((0, O.Z)(o)),
                    "size".concat((0, O.Z)(i)),
                  ],
                };
              return (0, d.Z)(a, ja, t);
            })(E),
            P = null;
          return (
            v && (P = "asc" === v ? "ascending" : "descending"),
            (0, b.jsx)(
              Na,
              (0, c.Z)(
                {
                  as: r,
                  ref: n,
                  className: (0, h.Z)(C.root, l),
                  "aria-sort": P,
                  scope: S,
                  ownerState: E,
                },
                y
              )
            )
          );
        }),
        _a = La,
        Aa = {
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          border: "2px solid #000",
          boxShadow: 24,
          p: 4,
          maxHeight: "80vh",
          overflowY: "auto",
        },
        Fa = {
          global: [
            { key: "undo", description: "undo last action" },
            { key: "collapseAll", description: "collapse tree" },
          ],
          moving: [
            { key: "shiftUp", description: "shift above next sibling" },
            { key: "shiftDown", description: "shift below next sibling" },
            {
              key: "shiftLeft",
              description: "shift to parent's siblings (negative indent)",
            },
            {
              key: "shiftRight",
              description: "shift to above sibling's children (indent)",
            },
          ],
          ui: [
            { key: "showHide", description: "show/hide node's children" },
            { key: "focusParent", description: "shift focus to parent" },
            { key: "focusChild", description: "shift focus to first child" },
            {
              key: "focusAbove",
              description: "shift focus up to next sibling",
            },
            {
              key: "focusBelow",
              description: "shift focus down to next sibling",
            },
            {
              key: "addFocusAbove",
              description: "extend focus up to next sibling",
            },
            {
              key: "addFocusBelow",
              description: "extend focus below to next sibling",
            },
          ],
          editing: [
            { key: "delete", description: "delete node" },
            { key: "paste", description: "paste node(s) as children" },
            { key: "newNode", description: "insert new node" },
            { key: "editNode", description: "edit node name" },
            { key: "submit", description: "submit edit/new node" },
            { key: "cancel", description: "cancel edit/new node" },
            { key: "indent", description: "toggle insert as sibling/child" },
          ],
        };
      var Ia = function (e) {
          var t = e.open,
            n = e.handleClose;
          return (0, b.jsx)(kr, {
            open: t,
            onClose: n,
            "aria-labelledby": "modal-modal-title",
            "aria-describedby": "modal-modal-description",
            children: (0, b.jsxs)(Qt, {
              sx: Aa,
              children: [
                (0, b.jsx)(ao, {
                  id: "modal-modal-title",
                  variant: "h6",
                  component: "h2",
                  fontWeight: "bold",
                  children: "Keyboard Shortcuts",
                }),
                (0, b.jsx)(ao, {
                  id: "modal-modal-description",
                  sx: { mt: 2 },
                  fontWeight: "bold",
                  children: "Global:",
                }),
                (0, b.jsx)(Sa, {
                  children: Fa.global.map(function (e) {
                    return (0,
                    b.jsxs)(Ra, { children: [(0, b.jsx)(_a, { children: e.description }), (0, b.jsx)(_a, { children: _t[e.key] })] }, e.key);
                  }),
                }),
                (0, b.jsx)(ao, {
                  id: "modal-modal-description",
                  sx: { mt: 2 },
                  fontWeight: "bold",
                  children: "Moving nodes:",
                }),
                (0, b.jsx)(Sa, {
                  children: Fa.moving.map(function (e) {
                    return (0,
                    b.jsxs)(Ra, { children: [(0, b.jsx)(_a, { children: e.description }), (0, b.jsx)(_a, { children: _t[e.key] })] }, e.key);
                  }),
                }),
                (0, b.jsx)(ao, {
                  id: "modal-modal-description",
                  sx: { mt: 2 },
                  fontWeight: "bold",
                  children: "UI:",
                }),
                (0, b.jsx)(Sa, {
                  children: Fa.ui.map(function (e) {
                    return (0,
                    b.jsxs)(Ra, { children: [(0, b.jsx)(_a, { children: e.description }), (0, b.jsx)(_a, { children: _t[e.key] })] }, e.key);
                  }),
                }),
                (0, b.jsx)(ao, {
                  id: "modal-modal-description",
                  sx: { mt: 2 },
                  fontWeight: "bold",
                  children: "Editing tree:",
                }),
                (0, b.jsx)(Sa, {
                  children: Fa.editing.map(function (e) {
                    return (0,
                    b.jsxs)(Ra, { children: [(0, b.jsx)(_a, { children: e.description }), (0, b.jsx)(_a, { children: _t[e.key] })] }, e.key);
                  }),
                }),
              ],
            }),
          });
        },
        Da = n(9724),
        Wa = n(1291),
        Ba = n(3416),
        Va = n(2207);
      function Ha(t) {
        var n = t.dispatch,
          r = t.collapsed,
          o = yn("(min-width:600px)"),
          a = e.useState(null),
          l = (0, i.Z)(a, 2),
          s = l[0],
          u = l[1],
          c = Boolean(s);
        var d = e.useState(!1),
          f = (0, i.Z)(d, 2),
          p = f[0],
          h = f[1];
        return (0, b.jsxs)(b.Fragment, {
          children: [
            (0, b.jsx)(it, {
              "aria-controls": c ? "basic-menu" : void 0,
              "aria-haspopup": "true",
              "aria-expanded": c ? "true" : void 0,
              onClick: function (e) {
                u(e.currentTarget);
              },
              sx: { borderRadius: 0 },
              startIcon: (0, b.jsx)(Da.Z, {}),
              children: o ? "Commands" : "",
            }),
            (0, b.jsx)(Ti, {
              id: "basic-menu",
              anchorEl: s,
              open: c,
              onClose: function () {
                u(null);
              },
              MenuListProps: { "aria-labelledby": "basic-button" },
              disableScrollLock: !0,
              children: (0, b.jsxs)(Sn, {
                color: "primary",
                variant: "text",
                orientation: "vertical",
                children: [
                  (0, b.jsx)(Fi, {
                    children: (0, b.jsx)(it, {
                      onClick: function () {
                        n({ type: "set collapse all", displayChildren: !r });
                      },
                      startIcon: r
                        ? (0, b.jsx)(Va.Z, {})
                        : (0, b.jsx)(Wa.Z, {}),
                      children: r ? "Uncollapse all" : "Collapse all",
                    }),
                  }),
                  (0, b.jsx)(Fi, {
                    children: (0, b.jsx)(it, {
                      onClick: function () {
                        n({ type: "undo" });
                      },
                      startIcon: (0, b.jsx)(Ba.Z, {}),
                      children: "undo",
                    }),
                  }),
                  (0, b.jsx)(Fi, {
                    children: (0, b.jsx)(it, {
                      onClick: function () {
                        h(!0), n({ type: "set modal", isOpen: !0 });
                      },
                      startIcon: (0, b.jsx)(Da.Z, {}),
                      children: "Shortcuts",
                    }),
                  }),
                ],
              }),
            }),
            (0, b.jsx)(Ia, {
              open: p,
              handleClose: function () {
                h(!1), n({ type: "set modal", isOpen: !1 });
              },
            }),
          ],
        });
      }
      var Ua = function (e) {
          var t = e.open,
            n = e.handleClose,
            r = e.state,
            o = e.dispatch,
            i = "Save new tree",
            a = "You can access this later from the 'My Trees' menu",
            l = "Save";
          function s() {
            return (s = en(
              Xt().mark(function e(t) {
                return Xt().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        t.preventDefault(),
                          o({
                            type: "edit root name",
                            name: t.target[0].value,
                          }),
                          on(t.target[0].value, r.tree)
                            .then(function (e) {
                              console.log(e),
                                o({
                                  type: "set fetched trees",
                                  trees: e.fetched,
                                }),
                                o({
                                  type: "load tree",
                                  tree: e.tree,
                                  index: e.fetched.findIndex(function (t) {
                                    return t.id === e.tree.id;
                                  }),
                                });
                            })
                            .catch(function (e) {
                              console.log(e),
                                o({
                                  type: "set error dialog",
                                  dialog: {
                                    isOpen: !0,
                                    content: {
                                      title: "Error",
                                      text: "".concat(e),
                                      buttonTrue: "Close",
                                      buttonFalse: null,
                                    },
                                    action: function () {},
                                  },
                                });
                            }),
                          n();
                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )).apply(this, arguments);
          }
          return (0, b.jsx)(kr, {
            open: t,
            onClose: n,
            "aria-labelledby": "modal-modal-title",
            "aria-describedby": "modal-modal-description",
            children: (0, b.jsx)(zr, {
              maxWidth: "xs",
              children: (0, b.jsx)(Qt, {
                py: 16,
                children: (0, b.jsx)(Br, {
                  variant: "outlined",
                  children: (0, b.jsx)($r, {
                    children: (0, b.jsxs)(Qt, {
                      mt: 2,
                      px: 4,
                      children: [
                        (0, b.jsx)(ao, {
                          variant: "h5",
                          component: "h3",
                          align: "center",
                          gutterBottom: !0,
                          children: i,
                        }),
                        (0, b.jsx)(ao, {
                          variant: "body2",
                          component: "p",
                          color: "textSecondary",
                          align: "center",
                          children: a,
                        }),
                        (0, b.jsx)(Qt, {
                          my: 3,
                          children: (0, b.jsx)("form", {
                            onSubmit: function (e) {
                              return s.apply(this, arguments);
                            },
                            children: (0, b.jsxs)(bo, {
                              container: !0,
                              spacing: 2,
                              children: [
                                (0, b.jsx)(bo, {
                                  item: !0,
                                  xs: 12,
                                  children: (0, b.jsxs)(Zo, {
                                    children: [
                                      (0, b.jsx)(No, {
                                        htmlFor: "name",
                                        children: "Name",
                                      }),
                                      (0, b.jsx)(de, {
                                        id: "name",
                                        "aria-describedby": "name-helper-text",
                                        required: !0,
                                      }),
                                      (0, b.jsx)(Do, {
                                        id: "name-helper-text",
                                      }),
                                    ],
                                  }),
                                }),
                                (0, b.jsx)(bo, {
                                  item: !0,
                                  xs: 12,
                                  children: (0, b.jsx)(Qt, {
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    children: (0, b.jsx)(it, {
                                      type: "submit",
                                      variant: "contained",
                                      color: "primary",
                                      size: "large",
                                      children: l,
                                    }),
                                  }),
                                }),
                              ],
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
        },
        $a = n(9885),
        qa = n(5020),
        Ka = n(7247);
      function Ga(t) {
        var n = t.dispatch,
          r = t.state,
          o = yn("(min-width:600px)"),
          a = e.useState(null),
          l = (0, i.Z)(a, 2),
          u = l[0],
          c = l[1],
          d = Boolean(u),
          f = function () {
            c(null);
          },
          p = e.useState(!1),
          h = (0, i.Z)(p, 2),
          m = h[0],
          v = h[1],
          g = function () {
            f(), v(!0), n({ type: "set modal", isOpen: !0 });
          };
        var y = e.useState({
            isOpen: !1,
            content: { title: "", text: "", buttonTrue: "", buttonFalse: "" },
            action: function (e) {
              return null;
            },
          }),
          x = (0, i.Z)(y, 2),
          w = x[0],
          k = x[1];
        return (0, b.jsxs)(b.Fragment, {
          children: [
            (0, b.jsx)(it, {
              "aria-controls": d ? "basic-menu" : void 0,
              "aria-haspopup": "true",
              "aria-expanded": d ? "true" : void 0,
              onClick: function (e) {
                c(e.currentTarget);
              },
              sx: { borderRadius: 0 },
              startIcon: (0, b.jsx)($a.Z, {}),
              children: o ? "File" : "",
            }),
            (0, b.jsx)(Ti, {
              id: "basic-menu",
              anchorEl: u,
              open: d,
              onClose: f,
              MenuListProps: { "aria-labelledby": "basic-button" },
              disableScrollLock: !0,
              children: (0, b.jsxs)(Sn, {
                color: "primary",
                variant: "text",
                orientation: "vertical",
                children: [
                  (0, b.jsx)(Fi, {
                    children: (0, b.jsx)(it, {
                      onClick: g,
                      startIcon: (0, b.jsx)(qa.Z, {}),
                      children: "Save as",
                    }),
                  }),
                  (0, b.jsx)(Fi, {
                    children: (0, b.jsx)(it, {
                      onClick: function () {
                        f(),
                          -1 !== r.fetched.current
                            ? (function (e, t) {
                                return ln.apply(this, arguments);
                              })(r.fetched.trees[r.fetched.current], r.tree)
                                .then(function (e) {
                                  n({
                                    type: "set fetched trees",
                                    trees: e.fetched,
                                  });
                                })
                                .catch(function (e) {
                                  console.log(e),
                                    n({
                                      type: "set error dialog",
                                      dialog: {
                                        isOpen: !0,
                                        content: {
                                          title: "Error",
                                          text: "".concat(e),
                                          buttonTrue: "Close",
                                          buttonFalse: null,
                                        },
                                        action: function () {},
                                      },
                                    });
                                })
                            : g();
                      },
                      startIcon: (0, b.jsx)(at.Z, {}),
                      children: "Save",
                    }),
                  }),
                  (0, b.jsx)(Fi, {
                    children: (0, b.jsx)(it, {
                      onClick: function () {
                        if ((f(), -1 !== r.fetched.current)) {
                          var e = r.fetched.trees[r.fetched.current];
                          k(function (t) {
                            return {
                              isOpen: !0,
                              content: {
                                title: "Delete ".concat(e.title),
                                text: "Are you sure want to delete ".concat(
                                  e.title,
                                  "?"
                                ),
                                buttonTrue: "Delete",
                                buttonFalse: "Cancel",
                              },
                              action: function (t) {
                                return (
                                  t &&
                                    (function (e) {
                                      return sn.apply(this, arguments);
                                    })(e)
                                      .then(function (e) {
                                        console.log(e),
                                          n({
                                            type: "load tree",
                                            tree: e.fetched[
                                              r.fetched.current - 1
                                            ] || {
                                              title: "(unsaved tree)",
                                              content:
                                                "sibling1\n\tchild1\n\tchild2\nsibling2\n\tchild1\n\tchild2",
                                            },
                                            index: r.fetched.current - 1,
                                          }),
                                          n({
                                            type: "set fetched trees",
                                            trees: e.fetched,
                                          });
                                      })
                                      .catch(function (e) {
                                        console.log(e),
                                          n({
                                            type: "set error dialog",
                                            dialog: {
                                              isOpen: !0,
                                              content: {
                                                title: "Error",
                                                text: "".concat(e),
                                                buttonTrue: "Close",
                                                buttonFalse: null,
                                              },
                                              action: function () {},
                                            },
                                          });
                                      }),
                                  null
                                );
                              },
                            };
                          });
                        } else
                          k(function (e) {
                            return {
                              isOpen: !0,
                              content: {
                                title: "No tree selected",
                                text: "Please select a tree from the My Trees menu to continue.",
                                buttonTrue: "Okay",
                                buttonFalse: null,
                              },
                              action: function () {
                                return null;
                              },
                            };
                          });
                      },
                      startIcon: (0, b.jsx)(Ka.Z, {}),
                      children: "Delete",
                    }),
                  }),
                ],
              }),
            }),
            (0, b.jsx)(Ua, {
              state: r,
              open: m,
              handleClose: function () {
                v(!1), n({ type: "set modal", isOpen: !1 });
              },
              dispatch: n,
            }),
            (0, b.jsx)(ha, {
              dialog: w,
              handleClose: function () {
                k(function (e) {
                  return s(s({}, e), {}, { isOpen: !1 });
                });
              },
            }),
          ],
        });
      }
      var Qa = n(6488),
        Ya = n(521),
        Xa = n(1961),
        Ja = n.p + "static/media/logo512.88fcd961b9040cf136c0.png",
        el = {
          position: "fixed",
          top: "0%",
          left: "0",
          right: "0",
          height: "3rem",
          fontWeight: "bold",
          justifyContent: "space-between",
          background: "#11151a",
          borderRadius: 0,
          boxShadow: "1px 2px #000",
          zIndex: 5,
          maxWidth: "100vw",
          minWidth: "100vw",
        };
      var tl = function (t) {
          var n = t.state,
            r = t.dispatch,
            o = (t.collapseAll, yn("(min-width:600px)")),
            a = e.useState(!1),
            l = (0, i.Z)(a, 2),
            u = l[0],
            c = l[1],
            d = e.useState(!1),
            f = (0, i.Z)(d, 2),
            p = f[0],
            h = f[1];
          return (0, b.jsxs)(Sn, {
            color: "secondary",
            variant: "text",
            sx: s(
              s({}, el),
              {},
              {
                "& button": {
                  padding: "1rem",
                  textTransform: "none",
                  height: "100%",
                },
              }
            ),
            disableRipple: !0,
            children: [
              (0, b.jsxs)(Qt, {
                children: [
                  (0, b.jsx)(Ga, { dispatch: r, state: n }),
                  (0, b.jsx)(Ha, { dispatch: r, collapsed: n.collapsed }),
                ],
              }),
              (0, b.jsx)(Qt, {
                component: "img",
                sx: { display: { xs: "none", sm: "block" }, padding: "0.5rem" },
                src: Ja,
                alt: "logo",
              }),
              (0, b.jsx)(Qt, {
                children: n.user
                  ? (0, b.jsxs)(b.Fragment, {
                      children: [
                        (0, b.jsx)(ma, { dispatch: r, fetched: n.fetched }),
                        (0, b.jsx)(it, {
                          onClick: function () {
                            localStorage.removeItem("user"),
                              r({ type: "set user", user: "" });
                          },
                          startIcon: (0, b.jsx)(Qa.Z, {}),
                          children: o ? "Sign out" : "",
                        }),
                      ],
                    })
                  : (0, b.jsxs)(b.Fragment, {
                      children: [
                        (0, b.jsx)(it, {
                          onClick: function () {
                            c(!0), r({ type: "set modal", isOpen: !0 });
                          },
                          startIcon: (0, b.jsx)(Ya.Z, {}),
                          children: o ? "Sign in" : "",
                        }),
                        "'",
                        (0, b.jsx)(it, {
                          onClick: function () {
                            h(!0), r({ type: "set modal", isOpen: !0 });
                          },
                          startIcon: (0, b.jsx)(Xa.Z, {}),
                          children: o ? "Register" : "",
                        }),
                      ],
                    }),
              }),
              (0, b.jsx)(va, {
                open: u,
                handleClose: function () {
                  c(!1), r({ type: "set modal", isOpen: !1 });
                },
                dispatch: r,
              }),
              (0, b.jsx)(Wo, {
                open: p,
                handleClose: function () {
                  h(!1), r({ type: "set modal", isOpen: !1 });
                },
                dispatch: r,
              }),
              (0, b.jsx)(ha, {
                dialog: n.errorDialog,
                handleClose: function () {
                  r({
                    type: "set error dialog",
                    dialog: s(s({}, n.errorDialog), {}, { isOpen: !1 }),
                  });
                },
              }),
            ],
          });
        },
        nl = n(8023),
        rl = n(9598),
        ol =
          "function" === typeof Symbol && Symbol.for
            ? Symbol.for("mui.nested")
            : "__THEME_NESTED__";
      var il = function (t) {
        var n = t.children,
          r = t.theme,
          o = (0, rl.Z)(),
          i = e.useMemo(
            function () {
              var e =
                null === o
                  ? r
                  : (function (e, t) {
                      return "function" === typeof t
                        ? t(e)
                        : (0, c.Z)({}, e, t);
                    })(o, r);
              return null != e && (e[ol] = null !== o), e;
            },
            [r, o]
          );
        return (0, b.jsx)(nl.Z.Provider, { value: i, children: n });
      };
      function al(e) {
        var t = (0, Ut.Z)();
        return (0, b.jsx)(L.T.Provider, {
          value: "object" === typeof t ? t : {},
          children: e.children,
        });
      }
      var ll = function (e) {
        var t = e.children,
          n = e.theme;
        return (0, b.jsx)(il, {
          theme: n,
          children: (0, b.jsx)(al, { children: t }),
        });
      };
      function sl(e) {
        if (null == e) return window;
        if ("[object Window]" !== e.toString()) {
          var t = e.ownerDocument;
          return (t && t.defaultView) || window;
        }
        return e;
      }
      function ul(e) {
        return e instanceof sl(e).Element || e instanceof Element;
      }
      function cl(e) {
        return e instanceof sl(e).HTMLElement || e instanceof HTMLElement;
      }
      function dl(e) {
        return (
          "undefined" !== typeof ShadowRoot &&
          (e instanceof sl(e).ShadowRoot || e instanceof ShadowRoot)
        );
      }
      var fl = Math.max,
        pl = Math.min,
        hl = Math.round;
      function ml() {
        var e = navigator.userAgentData;
        return null != e && e.brands
          ? e.brands
              .map(function (e) {
                return e.brand + "/" + e.version;
              })
              .join(" ")
          : navigator.userAgent;
      }
      function vl() {
        return !/^((?!chrome|android).)*safari/i.test(ml());
      }
      function gl(e, t, n) {
        void 0 === t && (t = !1), void 0 === n && (n = !1);
        var r = e.getBoundingClientRect(),
          o = 1,
          i = 1;
        t &&
          cl(e) &&
          ((o = (e.offsetWidth > 0 && hl(r.width) / e.offsetWidth) || 1),
          (i = (e.offsetHeight > 0 && hl(r.height) / e.offsetHeight) || 1));
        var a = (ul(e) ? sl(e) : window).visualViewport,
          l = !vl() && n,
          s = (r.left + (l && a ? a.offsetLeft : 0)) / o,
          u = (r.top + (l && a ? a.offsetTop : 0)) / i,
          c = r.width / o,
          d = r.height / i;
        return {
          width: c,
          height: d,
          top: u,
          right: s + c,
          bottom: u + d,
          left: s,
          x: s,
          y: u,
        };
      }
      function yl(e) {
        var t = sl(e);
        return { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
      }
      function bl(e) {
        return e ? (e.nodeName || "").toLowerCase() : null;
      }
      function xl(e) {
        return ((ul(e) ? e.ownerDocument : e.document) || window.document)
          .documentElement;
      }
      function wl(e) {
        return gl(xl(e)).left + yl(e).scrollLeft;
      }
      function kl(e) {
        return sl(e).getComputedStyle(e);
      }
      function Sl(e) {
        var t = kl(e),
          n = t.overflow,
          r = t.overflowX,
          o = t.overflowY;
        return /auto|scroll|overlay|hidden/.test(n + o + r);
      }
      function Zl(e, t, n) {
        void 0 === n && (n = !1);
        var r = cl(t),
          o =
            cl(t) &&
            (function (e) {
              var t = e.getBoundingClientRect(),
                n = hl(t.width) / e.offsetWidth || 1,
                r = hl(t.height) / e.offsetHeight || 1;
              return 1 !== n || 1 !== r;
            })(t),
          i = xl(t),
          a = gl(e, o, n),
          l = { scrollLeft: 0, scrollTop: 0 },
          s = { x: 0, y: 0 };
        return (
          (r || (!r && !n)) &&
            (("body" !== bl(t) || Sl(i)) &&
              (l = (function (e) {
                return e !== sl(e) && cl(e)
                  ? { scrollLeft: (t = e).scrollLeft, scrollTop: t.scrollTop }
                  : yl(e);
                var t;
              })(t)),
            cl(t)
              ? (((s = gl(t, !0)).x += t.clientLeft), (s.y += t.clientTop))
              : i && (s.x = wl(i))),
          {
            x: a.left + l.scrollLeft - s.x,
            y: a.top + l.scrollTop - s.y,
            width: a.width,
            height: a.height,
          }
        );
      }
      function El(e) {
        var t = gl(e),
          n = e.offsetWidth,
          r = e.offsetHeight;
        return (
          Math.abs(t.width - n) <= 1 && (n = t.width),
          Math.abs(t.height - r) <= 1 && (r = t.height),
          { x: e.offsetLeft, y: e.offsetTop, width: n, height: r }
        );
      }
      function Cl(e) {
        return "html" === bl(e)
          ? e
          : e.assignedSlot || e.parentNode || (dl(e) ? e.host : null) || xl(e);
      }
      function Pl(e) {
        return ["html", "body", "#document"].indexOf(bl(e)) >= 0
          ? e.ownerDocument.body
          : cl(e) && Sl(e)
          ? e
          : Pl(Cl(e));
      }
      function Ml(e, t) {
        var n;
        void 0 === t && (t = []);
        var r = Pl(e),
          o = r === (null == (n = e.ownerDocument) ? void 0 : n.body),
          i = sl(r),
          a = o ? [i].concat(i.visualViewport || [], Sl(r) ? r : []) : r,
          l = t.concat(a);
        return o ? l : l.concat(Ml(Cl(a)));
      }
      function Rl(e) {
        return ["table", "td", "th"].indexOf(bl(e)) >= 0;
      }
      function Tl(e) {
        return cl(e) && "fixed" !== kl(e).position ? e.offsetParent : null;
      }
      function jl(e) {
        for (
          var t = sl(e), n = Tl(e);
          n && Rl(n) && "static" === kl(n).position;

        )
          n = Tl(n);
        return n &&
          ("html" === bl(n) ||
            ("body" === bl(n) && "static" === kl(n).position))
          ? t
          : n ||
              (function (e) {
                var t = /firefox/i.test(ml());
                if (
                  /Trident/i.test(ml()) &&
                  cl(e) &&
                  "fixed" === kl(e).position
                )
                  return null;
                var n = Cl(e);
                for (
                  dl(n) && (n = n.host);
                  cl(n) && ["html", "body"].indexOf(bl(n)) < 0;

                ) {
                  var r = kl(n);
                  if (
                    "none" !== r.transform ||
                    "none" !== r.perspective ||
                    "paint" === r.contain ||
                    -1 !== ["transform", "perspective"].indexOf(r.willChange) ||
                    (t && "filter" === r.willChange) ||
                    (t && r.filter && "none" !== r.filter)
                  )
                    return n;
                  n = n.parentNode;
                }
                return null;
              })(e) ||
              t;
      }
      var Ol = "top",
        zl = "bottom",
        Nl = "right",
        Ll = "left",
        _l = "auto",
        Al = [Ol, zl, Nl, Ll],
        Fl = "start",
        Il = "end",
        Dl = "viewport",
        Wl = "popper",
        Bl = Al.reduce(function (e, t) {
          return e.concat([t + "-" + Fl, t + "-" + Il]);
        }, []),
        Vl = [].concat(Al, [_l]).reduce(function (e, t) {
          return e.concat([t, t + "-" + Fl, t + "-" + Il]);
        }, []),
        Hl = [
          "beforeRead",
          "read",
          "afterRead",
          "beforeMain",
          "main",
          "afterMain",
          "beforeWrite",
          "write",
          "afterWrite",
        ];
      function Ul(e) {
        var t = new Map(),
          n = new Set(),
          r = [];
        function o(e) {
          n.add(e.name),
            []
              .concat(e.requires || [], e.requiresIfExists || [])
              .forEach(function (e) {
                if (!n.has(e)) {
                  var r = t.get(e);
                  r && o(r);
                }
              }),
            r.push(e);
        }
        return (
          e.forEach(function (e) {
            t.set(e.name, e);
          }),
          e.forEach(function (e) {
            n.has(e.name) || o(e);
          }),
          r
        );
      }
      function $l(e) {
        var t;
        return function () {
          return (
            t ||
              (t = new Promise(function (n) {
                Promise.resolve().then(function () {
                  (t = void 0), n(e());
                });
              })),
            t
          );
        };
      }
      var ql = { placement: "bottom", modifiers: [], strategy: "absolute" };
      function Kl() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return !t.some(function (e) {
          return !(e && "function" === typeof e.getBoundingClientRect);
        });
      }
      function Gl(e) {
        void 0 === e && (e = {});
        var t = e,
          n = t.defaultModifiers,
          r = void 0 === n ? [] : n,
          o = t.defaultOptions,
          i = void 0 === o ? ql : o;
        return function (e, t, n) {
          void 0 === n && (n = i);
          var o = {
              placement: "bottom",
              orderedModifiers: [],
              options: Object.assign({}, ql, i),
              modifiersData: {},
              elements: { reference: e, popper: t },
              attributes: {},
              styles: {},
            },
            a = [],
            l = !1,
            s = {
              state: o,
              setOptions: function (n) {
                var l = "function" === typeof n ? n(o.options) : n;
                u(),
                  (o.options = Object.assign({}, i, o.options, l)),
                  (o.scrollParents = {
                    reference: ul(e)
                      ? Ml(e)
                      : e.contextElement
                      ? Ml(e.contextElement)
                      : [],
                    popper: Ml(t),
                  });
                var c = (function (e) {
                  var t = Ul(e);
                  return Hl.reduce(function (e, n) {
                    return e.concat(
                      t.filter(function (e) {
                        return e.phase === n;
                      })
                    );
                  }, []);
                })(
                  (function (e) {
                    var t = e.reduce(function (e, t) {
                      var n = e[t.name];
                      return (
                        (e[t.name] = n
                          ? Object.assign({}, n, t, {
                              options: Object.assign({}, n.options, t.options),
                              data: Object.assign({}, n.data, t.data),
                            })
                          : t),
                        e
                      );
                    }, {});
                    return Object.keys(t).map(function (e) {
                      return t[e];
                    });
                  })([].concat(r, o.options.modifiers))
                );
                return (
                  (o.orderedModifiers = c.filter(function (e) {
                    return e.enabled;
                  })),
                  o.orderedModifiers.forEach(function (e) {
                    var t = e.name,
                      n = e.options,
                      r = void 0 === n ? {} : n,
                      i = e.effect;
                    if ("function" === typeof i) {
                      var l = i({ state: o, name: t, instance: s, options: r }),
                        u = function () {};
                      a.push(l || u);
                    }
                  }),
                  s.update()
                );
              },
              forceUpdate: function () {
                if (!l) {
                  var e = o.elements,
                    t = e.reference,
                    n = e.popper;
                  if (Kl(t, n)) {
                    (o.rects = {
                      reference: Zl(t, jl(n), "fixed" === o.options.strategy),
                      popper: El(n),
                    }),
                      (o.reset = !1),
                      (o.placement = o.options.placement),
                      o.orderedModifiers.forEach(function (e) {
                        return (o.modifiersData[e.name] = Object.assign(
                          {},
                          e.data
                        ));
                      });
                    for (var r = 0; r < o.orderedModifiers.length; r++)
                      if (!0 !== o.reset) {
                        var i = o.orderedModifiers[r],
                          a = i.fn,
                          u = i.options,
                          c = void 0 === u ? {} : u,
                          d = i.name;
                        "function" === typeof a &&
                          (o =
                            a({ state: o, options: c, name: d, instance: s }) ||
                            o);
                      } else (o.reset = !1), (r = -1);
                  }
                }
              },
              update: $l(function () {
                return new Promise(function (e) {
                  s.forceUpdate(), e(o);
                });
              }),
              destroy: function () {
                u(), (l = !0);
              },
            };
          if (!Kl(e, t)) return s;
          function u() {
            a.forEach(function (e) {
              return e();
            }),
              (a = []);
          }
          return (
            s.setOptions(n).then(function (e) {
              !l && n.onFirstUpdate && n.onFirstUpdate(e);
            }),
            s
          );
        };
      }
      var Ql = { passive: !0 };
      function Yl(e) {
        return e.split("-")[0];
      }
      function Xl(e) {
        return e.split("-")[1];
      }
      function Jl(e) {
        return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
      }
      function es(e) {
        var t,
          n = e.reference,
          r = e.element,
          o = e.placement,
          i = o ? Yl(o) : null,
          a = o ? Xl(o) : null,
          l = n.x + n.width / 2 - r.width / 2,
          s = n.y + n.height / 2 - r.height / 2;
        switch (i) {
          case Ol:
            t = { x: l, y: n.y - r.height };
            break;
          case zl:
            t = { x: l, y: n.y + n.height };
            break;
          case Nl:
            t = { x: n.x + n.width, y: s };
            break;
          case Ll:
            t = { x: n.x - r.width, y: s };
            break;
          default:
            t = { x: n.x, y: n.y };
        }
        var u = i ? Jl(i) : null;
        if (null != u) {
          var c = "y" === u ? "height" : "width";
          switch (a) {
            case Fl:
              t[u] = t[u] - (n[c] / 2 - r[c] / 2);
              break;
            case Il:
              t[u] = t[u] + (n[c] / 2 - r[c] / 2);
          }
        }
        return t;
      }
      var ts = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
      function ns(e) {
        var t,
          n = e.popper,
          r = e.popperRect,
          o = e.placement,
          i = e.variation,
          a = e.offsets,
          l = e.position,
          s = e.gpuAcceleration,
          u = e.adaptive,
          c = e.roundOffsets,
          d = e.isFixed,
          f = a.x,
          p = void 0 === f ? 0 : f,
          h = a.y,
          m = void 0 === h ? 0 : h,
          v = "function" === typeof c ? c({ x: p, y: m }) : { x: p, y: m };
        (p = v.x), (m = v.y);
        var g = a.hasOwnProperty("x"),
          y = a.hasOwnProperty("y"),
          b = Ll,
          x = Ol,
          w = window;
        if (u) {
          var k = jl(n),
            S = "clientHeight",
            Z = "clientWidth";
          if (
            (k === sl(n) &&
              "static" !== kl((k = xl(n))).position &&
              "absolute" === l &&
              ((S = "scrollHeight"), (Z = "scrollWidth")),
            o === Ol || ((o === Ll || o === Nl) && i === Il))
          )
            (x = zl),
              (m -=
                (d && k === w && w.visualViewport
                  ? w.visualViewport.height
                  : k[S]) - r.height),
              (m *= s ? 1 : -1);
          if (o === Ll || ((o === Ol || o === zl) && i === Il))
            (b = Nl),
              (p -=
                (d && k === w && w.visualViewport
                  ? w.visualViewport.width
                  : k[Z]) - r.width),
              (p *= s ? 1 : -1);
        }
        var E,
          C = Object.assign({ position: l }, u && ts),
          P =
            !0 === c
              ? (function (e) {
                  var t = e.x,
                    n = e.y,
                    r = window.devicePixelRatio || 1;
                  return { x: hl(t * r) / r || 0, y: hl(n * r) / r || 0 };
                })({ x: p, y: m })
              : { x: p, y: m };
        return (
          (p = P.x),
          (m = P.y),
          s
            ? Object.assign(
                {},
                C,
                (((E = {})[x] = y ? "0" : ""),
                (E[b] = g ? "0" : ""),
                (E.transform =
                  (w.devicePixelRatio || 1) <= 1
                    ? "translate(" + p + "px, " + m + "px)"
                    : "translate3d(" + p + "px, " + m + "px, 0)"),
                E)
              )
            : Object.assign(
                {},
                C,
                (((t = {})[x] = y ? m + "px" : ""),
                (t[b] = g ? p + "px" : ""),
                (t.transform = ""),
                t)
              )
        );
      }
      var rs = {
        name: "applyStyles",
        enabled: !0,
        phase: "write",
        fn: function (e) {
          var t = e.state;
          Object.keys(t.elements).forEach(function (e) {
            var n = t.styles[e] || {},
              r = t.attributes[e] || {},
              o = t.elements[e];
            cl(o) &&
              bl(o) &&
              (Object.assign(o.style, n),
              Object.keys(r).forEach(function (e) {
                var t = r[e];
                !1 === t
                  ? o.removeAttribute(e)
                  : o.setAttribute(e, !0 === t ? "" : t);
              }));
          });
        },
        effect: function (e) {
          var t = e.state,
            n = {
              popper: {
                position: t.options.strategy,
                left: "0",
                top: "0",
                margin: "0",
              },
              arrow: { position: "absolute" },
              reference: {},
            };
          return (
            Object.assign(t.elements.popper.style, n.popper),
            (t.styles = n),
            t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
            function () {
              Object.keys(t.elements).forEach(function (e) {
                var r = t.elements[e],
                  o = t.attributes[e] || {},
                  i = Object.keys(
                    t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]
                  ).reduce(function (e, t) {
                    return (e[t] = ""), e;
                  }, {});
                cl(r) &&
                  bl(r) &&
                  (Object.assign(r.style, i),
                  Object.keys(o).forEach(function (e) {
                    r.removeAttribute(e);
                  }));
              });
            }
          );
        },
        requires: ["computeStyles"],
      };
      var os = {
          name: "offset",
          enabled: !0,
          phase: "main",
          requires: ["popperOffsets"],
          fn: function (e) {
            var t = e.state,
              n = e.options,
              r = e.name,
              o = n.offset,
              i = void 0 === o ? [0, 0] : o,
              a = Vl.reduce(function (e, n) {
                return (
                  (e[n] = (function (e, t, n) {
                    var r = Yl(e),
                      o = [Ll, Ol].indexOf(r) >= 0 ? -1 : 1,
                      i =
                        "function" === typeof n
                          ? n(Object.assign({}, t, { placement: e }))
                          : n,
                      a = i[0],
                      l = i[1];
                    return (
                      (a = a || 0),
                      (l = (l || 0) * o),
                      [Ll, Nl].indexOf(r) >= 0 ? { x: l, y: a } : { x: a, y: l }
                    );
                  })(n, t.rects, i)),
                  e
                );
              }, {}),
              l = a[t.placement],
              s = l.x,
              u = l.y;
            null != t.modifiersData.popperOffsets &&
              ((t.modifiersData.popperOffsets.x += s),
              (t.modifiersData.popperOffsets.y += u)),
              (t.modifiersData[r] = a);
          },
        },
        is = { left: "right", right: "left", bottom: "top", top: "bottom" };
      function as(e) {
        return e.replace(/left|right|bottom|top/g, function (e) {
          return is[e];
        });
      }
      var ls = { start: "end", end: "start" };
      function ss(e) {
        return e.replace(/start|end/g, function (e) {
          return ls[e];
        });
      }
      function us(e, t) {
        var n = t.getRootNode && t.getRootNode();
        if (e.contains(t)) return !0;
        if (n && dl(n)) {
          var r = t;
          do {
            if (r && e.isSameNode(r)) return !0;
            r = r.parentNode || r.host;
          } while (r);
        }
        return !1;
      }
      function cs(e) {
        return Object.assign({}, e, {
          left: e.x,
          top: e.y,
          right: e.x + e.width,
          bottom: e.y + e.height,
        });
      }
      function ds(e, t, n) {
        return t === Dl
          ? cs(
              (function (e, t) {
                var n = sl(e),
                  r = xl(e),
                  o = n.visualViewport,
                  i = r.clientWidth,
                  a = r.clientHeight,
                  l = 0,
                  s = 0;
                if (o) {
                  (i = o.width), (a = o.height);
                  var u = vl();
                  (u || (!u && "fixed" === t)) &&
                    ((l = o.offsetLeft), (s = o.offsetTop));
                }
                return { width: i, height: a, x: l + wl(e), y: s };
              })(e, n)
            )
          : ul(t)
          ? (function (e, t) {
              var n = gl(e, !1, "fixed" === t);
              return (
                (n.top = n.top + e.clientTop),
                (n.left = n.left + e.clientLeft),
                (n.bottom = n.top + e.clientHeight),
                (n.right = n.left + e.clientWidth),
                (n.width = e.clientWidth),
                (n.height = e.clientHeight),
                (n.x = n.left),
                (n.y = n.top),
                n
              );
            })(t, n)
          : cs(
              (function (e) {
                var t,
                  n = xl(e),
                  r = yl(e),
                  o = null == (t = e.ownerDocument) ? void 0 : t.body,
                  i = fl(
                    n.scrollWidth,
                    n.clientWidth,
                    o ? o.scrollWidth : 0,
                    o ? o.clientWidth : 0
                  ),
                  a = fl(
                    n.scrollHeight,
                    n.clientHeight,
                    o ? o.scrollHeight : 0,
                    o ? o.clientHeight : 0
                  ),
                  l = -r.scrollLeft + wl(e),
                  s = -r.scrollTop;
                return (
                  "rtl" === kl(o || n).direction &&
                    (l += fl(n.clientWidth, o ? o.clientWidth : 0) - i),
                  { width: i, height: a, x: l, y: s }
                );
              })(xl(e))
            );
      }
      function fs(e, t, n, r) {
        var o =
            "clippingParents" === t
              ? (function (e) {
                  var t = Ml(Cl(e)),
                    n =
                      ["absolute", "fixed"].indexOf(kl(e).position) >= 0 &&
                      cl(e)
                        ? jl(e)
                        : e;
                  return ul(n)
                    ? t.filter(function (e) {
                        return ul(e) && us(e, n) && "body" !== bl(e);
                      })
                    : [];
                })(e)
              : [].concat(t),
          i = [].concat(o, [n]),
          a = i[0],
          l = i.reduce(function (t, n) {
            var o = ds(e, n, r);
            return (
              (t.top = fl(o.top, t.top)),
              (t.right = pl(o.right, t.right)),
              (t.bottom = pl(o.bottom, t.bottom)),
              (t.left = fl(o.left, t.left)),
              t
            );
          }, ds(e, a, r));
        return (
          (l.width = l.right - l.left),
          (l.height = l.bottom - l.top),
          (l.x = l.left),
          (l.y = l.top),
          l
        );
      }
      function ps(e) {
        return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, e);
      }
      function hs(e, t) {
        return t.reduce(function (t, n) {
          return (t[n] = e), t;
        }, {});
      }
      function ms(e, t) {
        void 0 === t && (t = {});
        var n = t,
          r = n.placement,
          o = void 0 === r ? e.placement : r,
          i = n.strategy,
          a = void 0 === i ? e.strategy : i,
          l = n.boundary,
          s = void 0 === l ? "clippingParents" : l,
          u = n.rootBoundary,
          c = void 0 === u ? Dl : u,
          d = n.elementContext,
          f = void 0 === d ? Wl : d,
          p = n.altBoundary,
          h = void 0 !== p && p,
          m = n.padding,
          v = void 0 === m ? 0 : m,
          g = ps("number" !== typeof v ? v : hs(v, Al)),
          y = f === Wl ? "reference" : Wl,
          b = e.rects.popper,
          x = e.elements[h ? y : f],
          w = fs(
            ul(x) ? x : x.contextElement || xl(e.elements.popper),
            s,
            c,
            a
          ),
          k = gl(e.elements.reference),
          S = es({
            reference: k,
            element: b,
            strategy: "absolute",
            placement: o,
          }),
          Z = cs(Object.assign({}, b, S)),
          E = f === Wl ? Z : k,
          C = {
            top: w.top - E.top + g.top,
            bottom: E.bottom - w.bottom + g.bottom,
            left: w.left - E.left + g.left,
            right: E.right - w.right + g.right,
          },
          P = e.modifiersData.offset;
        if (f === Wl && P) {
          var M = P[o];
          Object.keys(C).forEach(function (e) {
            var t = [Nl, zl].indexOf(e) >= 0 ? 1 : -1,
              n = [Ol, zl].indexOf(e) >= 0 ? "y" : "x";
            C[e] += M[n] * t;
          });
        }
        return C;
      }
      function vs(e, t, n) {
        return fl(e, pl(t, n));
      }
      var gs = {
        name: "preventOverflow",
        enabled: !0,
        phase: "main",
        fn: function (e) {
          var t = e.state,
            n = e.options,
            r = e.name,
            o = n.mainAxis,
            i = void 0 === o || o,
            a = n.altAxis,
            l = void 0 !== a && a,
            s = n.boundary,
            u = n.rootBoundary,
            c = n.altBoundary,
            d = n.padding,
            f = n.tether,
            p = void 0 === f || f,
            h = n.tetherOffset,
            m = void 0 === h ? 0 : h,
            v = ms(t, {
              boundary: s,
              rootBoundary: u,
              padding: d,
              altBoundary: c,
            }),
            g = Yl(t.placement),
            y = Xl(t.placement),
            b = !y,
            x = Jl(g),
            w = "x" === x ? "y" : "x",
            k = t.modifiersData.popperOffsets,
            S = t.rects.reference,
            Z = t.rects.popper,
            E =
              "function" === typeof m
                ? m(Object.assign({}, t.rects, { placement: t.placement }))
                : m,
            C =
              "number" === typeof E
                ? { mainAxis: E, altAxis: E }
                : Object.assign({ mainAxis: 0, altAxis: 0 }, E),
            P = t.modifiersData.offset
              ? t.modifiersData.offset[t.placement]
              : null,
            M = { x: 0, y: 0 };
          if (k) {
            if (i) {
              var R,
                T = "y" === x ? Ol : Ll,
                j = "y" === x ? zl : Nl,
                O = "y" === x ? "height" : "width",
                z = k[x],
                N = z + v[T],
                L = z - v[j],
                _ = p ? -Z[O] / 2 : 0,
                A = y === Fl ? S[O] : Z[O],
                F = y === Fl ? -Z[O] : -S[O],
                I = t.elements.arrow,
                D = p && I ? El(I) : { width: 0, height: 0 },
                W = t.modifiersData["arrow#persistent"]
                  ? t.modifiersData["arrow#persistent"].padding
                  : { top: 0, right: 0, bottom: 0, left: 0 },
                B = W[T],
                V = W[j],
                H = vs(0, S[O], D[O]),
                U = b
                  ? S[O] / 2 - _ - H - B - C.mainAxis
                  : A - H - B - C.mainAxis,
                $ = b
                  ? -S[O] / 2 + _ + H + V + C.mainAxis
                  : F + H + V + C.mainAxis,
                q = t.elements.arrow && jl(t.elements.arrow),
                K = q ? ("y" === x ? q.clientTop || 0 : q.clientLeft || 0) : 0,
                G = null != (R = null == P ? void 0 : P[x]) ? R : 0,
                Q = z + $ - G,
                Y = vs(p ? pl(N, z + U - G - K) : N, z, p ? fl(L, Q) : L);
              (k[x] = Y), (M[x] = Y - z);
            }
            if (l) {
              var X,
                J = "x" === x ? Ol : Ll,
                ee = "x" === x ? zl : Nl,
                te = k[w],
                ne = "y" === w ? "height" : "width",
                re = te + v[J],
                oe = te - v[ee],
                ie = -1 !== [Ol, Ll].indexOf(g),
                ae = null != (X = null == P ? void 0 : P[w]) ? X : 0,
                le = ie ? re : te - S[ne] - Z[ne] - ae + C.altAxis,
                se = ie ? te + S[ne] + Z[ne] - ae - C.altAxis : oe,
                ue =
                  p && ie
                    ? (function (e, t, n) {
                        var r = vs(e, t, n);
                        return r > n ? n : r;
                      })(le, te, se)
                    : vs(p ? le : re, te, p ? se : oe);
              (k[w] = ue), (M[w] = ue - te);
            }
            t.modifiersData[r] = M;
          }
        },
        requiresIfExists: ["offset"],
      };
      var ys = {
        name: "arrow",
        enabled: !0,
        phase: "main",
        fn: function (e) {
          var t,
            n = e.state,
            r = e.name,
            o = e.options,
            i = n.elements.arrow,
            a = n.modifiersData.popperOffsets,
            l = Yl(n.placement),
            s = Jl(l),
            u = [Ll, Nl].indexOf(l) >= 0 ? "height" : "width";
          if (i && a) {
            var c = (function (e, t) {
                return ps(
                  "number" !==
                    typeof (e =
                      "function" === typeof e
                        ? e(
                            Object.assign({}, t.rects, {
                              placement: t.placement,
                            })
                          )
                        : e)
                    ? e
                    : hs(e, Al)
                );
              })(o.padding, n),
              d = El(i),
              f = "y" === s ? Ol : Ll,
              p = "y" === s ? zl : Nl,
              h =
                n.rects.reference[u] +
                n.rects.reference[s] -
                a[s] -
                n.rects.popper[u],
              m = a[s] - n.rects.reference[s],
              v = jl(i),
              g = v
                ? "y" === s
                  ? v.clientHeight || 0
                  : v.clientWidth || 0
                : 0,
              y = h / 2 - m / 2,
              b = c[f],
              x = g - d[u] - c[p],
              w = g / 2 - d[u] / 2 + y,
              k = vs(b, w, x),
              S = s;
            n.modifiersData[r] =
              (((t = {})[S] = k), (t.centerOffset = k - w), t);
          }
        },
        effect: function (e) {
          var t = e.state,
            n = e.options.element,
            r = void 0 === n ? "[data-popper-arrow]" : n;
          null != r &&
            ("string" !== typeof r ||
              (r = t.elements.popper.querySelector(r))) &&
            us(t.elements.popper, r) &&
            (t.elements.arrow = r);
        },
        requires: ["popperOffsets"],
        requiresIfExists: ["preventOverflow"],
      };
      function bs(e, t, n) {
        return (
          void 0 === n && (n = { x: 0, y: 0 }),
          {
            top: e.top - t.height - n.y,
            right: e.right - t.width + n.x,
            bottom: e.bottom - t.height + n.y,
            left: e.left - t.width - n.x,
          }
        );
      }
      function xs(e) {
        return [Ol, Nl, zl, Ll].some(function (t) {
          return e[t] >= 0;
        });
      }
      var ws = Gl({
        defaultModifiers: [
          {
            name: "eventListeners",
            enabled: !0,
            phase: "write",
            fn: function () {},
            effect: function (e) {
              var t = e.state,
                n = e.instance,
                r = e.options,
                o = r.scroll,
                i = void 0 === o || o,
                a = r.resize,
                l = void 0 === a || a,
                s = sl(t.elements.popper),
                u = [].concat(
                  t.scrollParents.reference,
                  t.scrollParents.popper
                );
              return (
                i &&
                  u.forEach(function (e) {
                    e.addEventListener("scroll", n.update, Ql);
                  }),
                l && s.addEventListener("resize", n.update, Ql),
                function () {
                  i &&
                    u.forEach(function (e) {
                      e.removeEventListener("scroll", n.update, Ql);
                    }),
                    l && s.removeEventListener("resize", n.update, Ql);
                }
              );
            },
            data: {},
          },
          {
            name: "popperOffsets",
            enabled: !0,
            phase: "read",
            fn: function (e) {
              var t = e.state,
                n = e.name;
              t.modifiersData[n] = es({
                reference: t.rects.reference,
                element: t.rects.popper,
                strategy: "absolute",
                placement: t.placement,
              });
            },
            data: {},
          },
          {
            name: "computeStyles",
            enabled: !0,
            phase: "beforeWrite",
            fn: function (e) {
              var t = e.state,
                n = e.options,
                r = n.gpuAcceleration,
                o = void 0 === r || r,
                i = n.adaptive,
                a = void 0 === i || i,
                l = n.roundOffsets,
                s = void 0 === l || l,
                u = {
                  placement: Yl(t.placement),
                  variation: Xl(t.placement),
                  popper: t.elements.popper,
                  popperRect: t.rects.popper,
                  gpuAcceleration: o,
                  isFixed: "fixed" === t.options.strategy,
                };
              null != t.modifiersData.popperOffsets &&
                (t.styles.popper = Object.assign(
                  {},
                  t.styles.popper,
                  ns(
                    Object.assign({}, u, {
                      offsets: t.modifiersData.popperOffsets,
                      position: t.options.strategy,
                      adaptive: a,
                      roundOffsets: s,
                    })
                  )
                )),
                null != t.modifiersData.arrow &&
                  (t.styles.arrow = Object.assign(
                    {},
                    t.styles.arrow,
                    ns(
                      Object.assign({}, u, {
                        offsets: t.modifiersData.arrow,
                        position: "absolute",
                        adaptive: !1,
                        roundOffsets: s,
                      })
                    )
                  )),
                (t.attributes.popper = Object.assign({}, t.attributes.popper, {
                  "data-popper-placement": t.placement,
                }));
            },
            data: {},
          },
          rs,
          os,
          {
            name: "flip",
            enabled: !0,
            phase: "main",
            fn: function (e) {
              var t = e.state,
                n = e.options,
                r = e.name;
              if (!t.modifiersData[r]._skip) {
                for (
                  var o = n.mainAxis,
                    i = void 0 === o || o,
                    a = n.altAxis,
                    l = void 0 === a || a,
                    s = n.fallbackPlacements,
                    u = n.padding,
                    c = n.boundary,
                    d = n.rootBoundary,
                    f = n.altBoundary,
                    p = n.flipVariations,
                    h = void 0 === p || p,
                    m = n.allowedAutoPlacements,
                    v = t.options.placement,
                    g = Yl(v),
                    y =
                      s ||
                      (g === v || !h
                        ? [as(v)]
                        : (function (e) {
                            if (Yl(e) === _l) return [];
                            var t = as(e);
                            return [ss(e), t, ss(t)];
                          })(v)),
                    b = [v].concat(y).reduce(function (e, n) {
                      return e.concat(
                        Yl(n) === _l
                          ? (function (e, t) {
                              void 0 === t && (t = {});
                              var n = t,
                                r = n.placement,
                                o = n.boundary,
                                i = n.rootBoundary,
                                a = n.padding,
                                l = n.flipVariations,
                                s = n.allowedAutoPlacements,
                                u = void 0 === s ? Vl : s,
                                c = Xl(r),
                                d = c
                                  ? l
                                    ? Bl
                                    : Bl.filter(function (e) {
                                        return Xl(e) === c;
                                      })
                                  : Al,
                                f = d.filter(function (e) {
                                  return u.indexOf(e) >= 0;
                                });
                              0 === f.length && (f = d);
                              var p = f.reduce(function (t, n) {
                                return (
                                  (t[n] = ms(e, {
                                    placement: n,
                                    boundary: o,
                                    rootBoundary: i,
                                    padding: a,
                                  })[Yl(n)]),
                                  t
                                );
                              }, {});
                              return Object.keys(p).sort(function (e, t) {
                                return p[e] - p[t];
                              });
                            })(t, {
                              placement: n,
                              boundary: c,
                              rootBoundary: d,
                              padding: u,
                              flipVariations: h,
                              allowedAutoPlacements: m,
                            })
                          : n
                      );
                    }, []),
                    x = t.rects.reference,
                    w = t.rects.popper,
                    k = new Map(),
                    S = !0,
                    Z = b[0],
                    E = 0;
                  E < b.length;
                  E++
                ) {
                  var C = b[E],
                    P = Yl(C),
                    M = Xl(C) === Fl,
                    R = [Ol, zl].indexOf(P) >= 0,
                    T = R ? "width" : "height",
                    j = ms(t, {
                      placement: C,
                      boundary: c,
                      rootBoundary: d,
                      altBoundary: f,
                      padding: u,
                    }),
                    O = R ? (M ? Nl : Ll) : M ? zl : Ol;
                  x[T] > w[T] && (O = as(O));
                  var z = as(O),
                    N = [];
                  if (
                    (i && N.push(j[P] <= 0),
                    l && N.push(j[O] <= 0, j[z] <= 0),
                    N.every(function (e) {
                      return e;
                    }))
                  ) {
                    (Z = C), (S = !1);
                    break;
                  }
                  k.set(C, N);
                }
                if (S)
                  for (
                    var L = function (e) {
                        var t = b.find(function (t) {
                          var n = k.get(t);
                          if (n)
                            return n.slice(0, e).every(function (e) {
                              return e;
                            });
                        });
                        if (t) return (Z = t), "break";
                      },
                      _ = h ? 3 : 1;
                    _ > 0;
                    _--
                  ) {
                    if ("break" === L(_)) break;
                  }
                t.placement !== Z &&
                  ((t.modifiersData[r]._skip = !0),
                  (t.placement = Z),
                  (t.reset = !0));
              }
            },
            requiresIfExists: ["offset"],
            data: { _skip: !1 },
          },
          gs,
          ys,
          {
            name: "hide",
            enabled: !0,
            phase: "main",
            requiresIfExists: ["preventOverflow"],
            fn: function (e) {
              var t = e.state,
                n = e.name,
                r = t.rects.reference,
                o = t.rects.popper,
                i = t.modifiersData.preventOverflow,
                a = ms(t, { elementContext: "reference" }),
                l = ms(t, { altBoundary: !0 }),
                s = bs(a, r),
                u = bs(l, o, i),
                c = xs(s),
                d = xs(u);
              (t.modifiersData[n] = {
                referenceClippingOffsets: s,
                popperEscapeOffsets: u,
                isReferenceHidden: c,
                hasPopperEscaped: d,
              }),
                (t.attributes.popper = Object.assign({}, t.attributes.popper, {
                  "data-popper-reference-hidden": c,
                  "data-popper-escaped": d,
                }));
            },
          },
        ],
      });
      function ks(e) {
        return (0, q.Z)("MuiPopperUnstyled", e);
      }
      (0, K.Z)("MuiPopperUnstyled", ["root"]);
      var Ss = [
          "anchorEl",
          "children",
          "component",
          "components",
          "componentsProps",
          "direction",
          "disablePortal",
          "modifiers",
          "open",
          "ownerState",
          "placement",
          "popperOptions",
          "popperRef",
          "TransitionProps",
        ],
        Zs = [
          "anchorEl",
          "children",
          "container",
          "direction",
          "disablePortal",
          "keepMounted",
          "modifiers",
          "open",
          "placement",
          "popperOptions",
          "popperRef",
          "style",
          "transition",
        ];
      function Es(e) {
        return "function" === typeof e ? e() : e;
      }
      var Cs = {},
        Ps = e.forwardRef(function (t, n) {
          var r,
            o = t.anchorEl,
            a = t.children,
            l = t.component,
            s = t.components,
            f = void 0 === s ? {} : s,
            p = t.componentsProps,
            h = void 0 === p ? {} : p,
            v = t.direction,
            g = t.disablePortal,
            x = t.modifiers,
            w = t.open,
            k = t.ownerState,
            S = t.placement,
            Z = t.popperOptions,
            E = t.popperRef,
            C = t.TransitionProps,
            P = (0, u.Z)(t, Ss),
            M = e.useRef(null),
            R = (0, m.Z)(M, n),
            T = e.useRef(null),
            j = (0, m.Z)(T, E),
            O = e.useRef(j);
          (0, y.Z)(
            function () {
              O.current = j;
            },
            [j]
          ),
            e.useImperativeHandle(
              E,
              function () {
                return T.current;
              },
              []
            );
          var z = (function (e, t) {
              if ("ltr" === t) return e;
              switch (e) {
                case "bottom-end":
                  return "bottom-start";
                case "bottom-start":
                  return "bottom-end";
                case "top-end":
                  return "top-start";
                case "top-start":
                  return "top-end";
                default:
                  return e;
              }
            })(S, v),
            N = e.useState(z),
            L = (0, i.Z)(N, 2),
            _ = L[0],
            A = L[1];
          e.useEffect(function () {
            T.current && T.current.forceUpdate();
          }),
            (0, y.Z)(
              function () {
                if (o && w) {
                  Es(o);
                  var e = [
                    { name: "preventOverflow", options: { altBoundary: g } },
                    { name: "flip", options: { altBoundary: g } },
                    {
                      name: "onUpdate",
                      enabled: !0,
                      phase: "afterWrite",
                      fn: function (e) {
                        var t = e.state;
                        A(t.placement);
                      },
                    },
                  ];
                  null != x && (e = e.concat(x)),
                    Z && null != Z.modifiers && (e = e.concat(Z.modifiers));
                  var t = ws(
                    Es(o),
                    M.current,
                    (0, c.Z)({ placement: z }, Z, { modifiers: e })
                  );
                  return (
                    O.current(t),
                    function () {
                      t.destroy(), O.current(null);
                    }
                  );
                }
              },
              [o, g, x, w, Z, z]
            );
          var F = { placement: _ };
          null !== C && (F.TransitionProps = C);
          var I = (0, d.Z)({ root: ["root"] }, ks, {}),
            D = null != (r = null != l ? l : f.Root) ? r : "div",
            W = Kn({
              elementType: D,
              externalSlotProps: h.root,
              externalForwardedProps: P,
              additionalProps: { role: "tooltip", ref: R },
              ownerState: (0, c.Z)({}, t, k),
              className: I.root,
            });
          return (0,
          b.jsx)(D, (0, c.Z)({}, W, { children: "function" === typeof a ? a(F) : a }));
        }),
        Ms = e.forwardRef(function (t, n) {
          var r = t.anchorEl,
            o = t.children,
            a = t.container,
            l = t.direction,
            s = void 0 === l ? "ltr" : l,
            d = t.disablePortal,
            f = void 0 !== d && d,
            p = t.keepMounted,
            h = void 0 !== p && p,
            m = t.modifiers,
            v = t.open,
            g = t.placement,
            y = void 0 === g ? "bottom" : g,
            x = t.popperOptions,
            w = void 0 === x ? Cs : x,
            k = t.popperRef,
            S = t.style,
            Z = t.transition,
            E = void 0 !== Z && Z,
            C = (0, u.Z)(t, Zs),
            P = e.useState(!0),
            M = (0, i.Z)(P, 2),
            R = M[0],
            T = M[1];
          if (!h && !v && (!E || R)) return null;
          var j = a || (r ? (0, Zn.Z)(Es(r)).body : void 0);
          return (0, b.jsx)(Mn, {
            disablePortal: f,
            container: j,
            children: (0, b.jsx)(
              Ps,
              (0, c.Z)(
                {
                  anchorEl: r,
                  direction: s,
                  disablePortal: f,
                  modifiers: m,
                  ref: n,
                  open: E ? !R : v,
                  placement: y,
                  popperOptions: w,
                  popperRef: k,
                },
                C,
                {
                  style: (0, c.Z)(
                    {
                      position: "fixed",
                      top: 0,
                      left: 0,
                      display: v || !h || (E && !R) ? null : "none",
                    },
                    S
                  ),
                  TransitionProps: E
                    ? {
                        in: v,
                        onEnter: function () {
                          T(!1);
                        },
                        onExited: function () {
                          T(!0);
                        },
                      }
                    : null,
                  children: o,
                }
              )
            ),
          });
        }),
        Rs = Ms,
        Ts = (0, T.ZP)(Rs, {
          name: "MuiPopper",
          slot: "Root",
          overridesResolver: function (e, t) {
            return t.root;
          },
        })({}),
        js = e.forwardRef(function (e, t) {
          var n = (0, pn.Z)(),
            r = (0, j.Z)({ props: e, name: "MuiPopper" });
          return (0,
          b.jsx)(Ts, (0, c.Z)({ direction: null == n ? void 0 : n.direction }, r, { ref: t }));
        }),
        Os = js,
        zs = n(1853),
        Ns = n(4938);
      function Ls(e) {
        return (0, q.Z)("MuiTooltip", e);
      }
      var _s = (0, K.Z)("MuiTooltip", [
          "popper",
          "popperInteractive",
          "popperArrow",
          "popperClose",
          "tooltip",
          "tooltipArrow",
          "touch",
          "tooltipPlacementLeft",
          "tooltipPlacementRight",
          "tooltipPlacementTop",
          "tooltipPlacementBottom",
          "arrow",
        ]),
        As = [
          "arrow",
          "children",
          "classes",
          "components",
          "componentsProps",
          "describeChild",
          "disableFocusListener",
          "disableHoverListener",
          "disableInteractive",
          "disableTouchListener",
          "enterDelay",
          "enterNextDelay",
          "enterTouchDelay",
          "followCursor",
          "id",
          "leaveDelay",
          "leaveTouchDelay",
          "onClose",
          "onOpen",
          "open",
          "placement",
          "PopperComponent",
          "PopperProps",
          "title",
          "TransitionComponent",
          "TransitionProps",
        ];
      var Fs = (0, T.ZP)(Os, {
          name: "MuiTooltip",
          slot: "Popper",
          overridesResolver: function (e, t) {
            var n = e.ownerState;
            return [
              t.popper,
              !n.disableInteractive && t.popperInteractive,
              n.arrow && t.popperArrow,
              !n.open && t.popperClose,
            ];
          },
        })(function (e) {
          var t,
            n = e.theme,
            r = e.ownerState,
            o = e.open;
          return (0,
          c.Z)({ zIndex: (n.vars || n).zIndex.tooltip, pointerEvents: "none" }, !r.disableInteractive && { pointerEvents: "auto" }, !o && { pointerEvents: "none" }, r.arrow && ((t = {}), (0, a.Z)(t, '&[data-popper-placement*="bottom"] .'.concat(_s.arrow), { top: 0, marginTop: "-0.71em", "&::before": { transformOrigin: "0 100%" } }), (0, a.Z)(t, '&[data-popper-placement*="top"] .'.concat(_s.arrow), { bottom: 0, marginBottom: "-0.71em", "&::before": { transformOrigin: "100% 0" } }), (0, a.Z)(t, '&[data-popper-placement*="right"] .'.concat(_s.arrow), (0, c.Z)({}, r.isRtl ? { right: 0, marginRight: "-0.71em" } : { left: 0, marginLeft: "-0.71em" }, { height: "1em", width: "0.71em", "&::before": { transformOrigin: "100% 100%" } })), (0, a.Z)(t, '&[data-popper-placement*="left"] .'.concat(_s.arrow), (0, c.Z)({}, r.isRtl ? { left: 0, marginLeft: "-0.71em" } : { right: 0, marginRight: "-0.71em" }, { height: "1em", width: "0.71em", "&::before": { transformOrigin: "0 0" } })), t));
        }),
        Is = (0, T.ZP)("div", {
          name: "MuiTooltip",
          slot: "Tooltip",
          overridesResolver: function (e, t) {
            var n = e.ownerState;
            return [
              t.tooltip,
              n.touch && t.touch,
              n.arrow && t.tooltipArrow,
              t["tooltipPlacement".concat((0, O.Z)(n.placement.split("-")[0]))],
            ];
          },
        })(function (e) {
          var t,
            n,
            r = e.theme,
            o = e.ownerState;
          return (0,
          c.Z)({ backgroundColor: r.vars ? r.vars.palette.Tooltip.bg : (0, pe.Fq)(r.palette.grey[700], 0.92), borderRadius: (r.vars || r).shape.borderRadius, color: (r.vars || r).palette.common.white, fontFamily: r.typography.fontFamily, padding: "4px 8px", fontSize: r.typography.pxToRem(11), maxWidth: 300, margin: 2, wordWrap: "break-word", fontWeight: r.typography.fontWeightMedium }, o.arrow && { position: "relative", margin: 0 }, o.touch && { padding: "8px 16px", fontSize: r.typography.pxToRem(14), lineHeight: "".concat(((n = 16 / 14), Math.round(1e5 * n) / 1e5), "em"), fontWeight: r.typography.fontWeightRegular }, ((t = {}), (0, a.Z)(t, ".".concat(_s.popper, '[data-popper-placement*="left"] &'), (0, c.Z)({ transformOrigin: "right center" }, o.isRtl ? (0, c.Z)({ marginLeft: "14px" }, o.touch && { marginLeft: "24px" }) : (0, c.Z)({ marginRight: "14px" }, o.touch && { marginRight: "24px" }))), (0, a.Z)(t, ".".concat(_s.popper, '[data-popper-placement*="right"] &'), (0, c.Z)({ transformOrigin: "left center" }, o.isRtl ? (0, c.Z)({ marginRight: "14px" }, o.touch && { marginRight: "24px" }) : (0, c.Z)({ marginLeft: "14px" }, o.touch && { marginLeft: "24px" }))), (0, a.Z)(t, ".".concat(_s.popper, '[data-popper-placement*="top"] &'), (0, c.Z)({ transformOrigin: "center bottom", marginBottom: "14px" }, o.touch && { marginBottom: "24px" })), (0, a.Z)(t, ".".concat(_s.popper, '[data-popper-placement*="bottom"] &'), (0, c.Z)({ transformOrigin: "center top", marginTop: "14px" }, o.touch && { marginTop: "24px" })), t));
        }),
        Ds = (0, T.ZP)("span", {
          name: "MuiTooltip",
          slot: "Arrow",
          overridesResolver: function (e, t) {
            return t.arrow;
          },
        })(function (e) {
          var t = e.theme;
          return {
            overflow: "hidden",
            position: "absolute",
            width: "1em",
            height: "0.71em",
            boxSizing: "border-box",
            color: t.vars
              ? t.vars.palette.Tooltip.bg
              : (0, pe.Fq)(t.palette.grey[700], 0.9),
            "&::before": {
              content: '""',
              margin: "auto",
              display: "block",
              width: "100%",
              height: "100%",
              backgroundColor: "currentColor",
              transform: "rotate(45deg)",
            },
          };
        }),
        Ws = !1,
        Bs = null;
      function Vs(e, t) {
        return function (n) {
          t && t(n), e(n);
        };
      }
      var Hs = e.forwardRef(function (t, n) {
          var r,
            o,
            a,
            l,
            s,
            f,
            p = (0, j.Z)({ props: t, name: "MuiTooltip" }),
            m = p.arrow,
            v = void 0 !== m && m,
            g = p.children,
            y = p.components,
            x = void 0 === y ? {} : y,
            w = p.componentsProps,
            k = void 0 === w ? {} : w,
            S = p.describeChild,
            Z = void 0 !== S && S,
            E = p.disableFocusListener,
            C = void 0 !== E && E,
            P = p.disableHoverListener,
            M = void 0 !== P && P,
            R = p.disableInteractive,
            T = void 0 !== R && R,
            N = p.disableTouchListener,
            L = void 0 !== N && N,
            _ = p.enterDelay,
            A = void 0 === _ ? 100 : _,
            F = p.enterNextDelay,
            I = void 0 === F ? 0 : F,
            D = p.enterTouchDelay,
            W = void 0 === D ? 700 : D,
            B = p.followCursor,
            V = void 0 !== B && B,
            H = p.id,
            U = p.leaveDelay,
            $ = void 0 === U ? 0 : U,
            q = p.leaveTouchDelay,
            K = void 0 === q ? 1500 : q,
            G = p.onClose,
            Q = p.onOpen,
            Y = p.open,
            X = p.placement,
            J = void 0 === X ? "bottom" : X,
            ee = p.PopperComponent,
            te = p.PopperProps,
            ne = void 0 === te ? {} : te,
            re = p.title,
            oe = p.TransitionComponent,
            ie = void 0 === oe ? ui : oe,
            ae = p.TransitionProps,
            le = (0, u.Z)(p, As),
            se = lr(),
            ue = "rtl" === se.direction,
            ce = e.useState(),
            de = (0, i.Z)(ce, 2),
            fe = de[0],
            pe = de[1],
            ve = e.useState(null),
            ge = (0, i.Z)(ve, 2),
            ye = ge[0],
            be = ge[1],
            xe = e.useRef(!1),
            we = T || V,
            ke = e.useRef(),
            Se = e.useRef(),
            Ze = e.useRef(),
            Ee = e.useRef(),
            Ce = (0, Ns.Z)({
              controlled: Y,
              default: !1,
              name: "Tooltip",
              state: "open",
            }),
            Pe = (0, i.Z)(Ce, 2),
            Me = Pe[0],
            Re = Pe[1],
            Te = Me,
            je = (0, zs.Z)(H),
            Oe = e.useRef(),
            ze = e.useCallback(function () {
              void 0 !== Oe.current &&
                ((document.body.style.WebkitUserSelect = Oe.current),
                (Oe.current = void 0)),
                clearTimeout(Ee.current);
            }, []);
          e.useEffect(
            function () {
              return function () {
                clearTimeout(ke.current),
                  clearTimeout(Se.current),
                  clearTimeout(Ze.current),
                  ze();
              };
            },
            [ze]
          );
          var Ne = function (e) {
              clearTimeout(Bs), (Ws = !0), Re(!0), Q && !Te && Q(e);
            },
            Le = (0, he.Z)(function (e) {
              clearTimeout(Bs),
                (Bs = setTimeout(function () {
                  Ws = !1;
                }, 800 + $)),
                Re(!1),
                G && Te && G(e),
                clearTimeout(ke.current),
                (ke.current = setTimeout(function () {
                  xe.current = !1;
                }, se.transitions.duration.shortest));
            }),
            _e = function (e) {
              (xe.current && "touchstart" !== e.type) ||
                (fe && fe.removeAttribute("title"),
                clearTimeout(Se.current),
                clearTimeout(Ze.current),
                A || (Ws && I)
                  ? (Se.current = setTimeout(
                      function () {
                        Ne(e);
                      },
                      Ws ? I : A
                    ))
                  : Ne(e));
            },
            Ae = function (e) {
              clearTimeout(Se.current),
                clearTimeout(Ze.current),
                (Ze.current = setTimeout(function () {
                  Le(e);
                }, $));
            },
            Fe = (0, me.Z)(),
            Ie = Fe.isFocusVisibleRef,
            De = Fe.onBlur,
            We = Fe.onFocus,
            Be = Fe.ref,
            Ve = e.useState(!1),
            He = (0, i.Z)(Ve, 2)[1],
            Ue = function (e) {
              De(e), !1 === Ie.current && (He(!1), Ae(e));
            },
            $e = function (e) {
              fe || pe(e.currentTarget),
                We(e),
                !0 === Ie.current && (He(!0), _e(e));
            },
            qe = function (e) {
              xe.current = !0;
              var t = g.props;
              t.onTouchStart && t.onTouchStart(e);
            },
            Ke = _e,
            Ge = Ae;
          e.useEffect(
            function () {
              if (Te)
                return (
                  document.addEventListener("keydown", e),
                  function () {
                    document.removeEventListener("keydown", e);
                  }
                );
              function e(e) {
                ("Escape" !== e.key && "Esc" !== e.key) || Le(e);
              }
            },
            [Le, Te]
          );
          var Qe = (0, z.Z)(pe, n),
            Ye = (0, z.Z)(Be, Qe),
            Xe = (0, z.Z)(g.ref, Ye);
          "number" === typeof re || re || (Te = !1);
          var Je = e.useRef({ x: 0, y: 0 }),
            et = e.useRef(),
            tt = {},
            nt = "string" === typeof re;
          Z
            ? ((tt.title = Te || !nt || M ? null : re),
              (tt["aria-describedby"] = Te ? je : null))
            : ((tt["aria-label"] = nt ? re : null),
              (tt["aria-labelledby"] = Te && !nt ? je : null));
          var rt = (0, c.Z)(
            {},
            tt,
            le,
            g.props,
            {
              className: (0, h.Z)(le.className, g.props.className),
              onTouchStart: qe,
              ref: Xe,
            },
            V
              ? {
                  onMouseMove: function (e) {
                    var t = g.props;
                    t.onMouseMove && t.onMouseMove(e),
                      (Je.current = { x: e.clientX, y: e.clientY }),
                      et.current && et.current.update();
                  },
                }
              : {}
          );
          var ot = {};
          L ||
            ((rt.onTouchStart = function (e) {
              qe(e),
                clearTimeout(Ze.current),
                clearTimeout(ke.current),
                ze(),
                (Oe.current = document.body.style.WebkitUserSelect),
                (document.body.style.WebkitUserSelect = "none"),
                (Ee.current = setTimeout(function () {
                  (document.body.style.WebkitUserSelect = Oe.current), _e(e);
                }, W));
            }),
            (rt.onTouchEnd = function (e) {
              g.props.onTouchEnd && g.props.onTouchEnd(e),
                ze(),
                clearTimeout(Ze.current),
                (Ze.current = setTimeout(function () {
                  Le(e);
                }, K));
            })),
            M ||
              ((rt.onMouseOver = Vs(Ke, rt.onMouseOver)),
              (rt.onMouseLeave = Vs(Ge, rt.onMouseLeave)),
              we || ((ot.onMouseOver = Ke), (ot.onMouseLeave = Ge))),
            C ||
              ((rt.onFocus = Vs($e, rt.onFocus)),
              (rt.onBlur = Vs(Ue, rt.onBlur)),
              we || ((ot.onFocus = $e), (ot.onBlur = Ue)));
          var it = e.useMemo(
              function () {
                var e,
                  t = [
                    {
                      name: "arrow",
                      enabled: Boolean(ye),
                      options: { element: ye, padding: 4 },
                    },
                  ];
                return (
                  null != (e = ne.popperOptions) &&
                    e.modifiers &&
                    (t = t.concat(ne.popperOptions.modifiers)),
                  (0, c.Z)({}, ne.popperOptions, { modifiers: t })
                );
              },
              [ye, ne]
            ),
            at = (0, c.Z)({}, p, {
              isRtl: ue,
              arrow: v,
              disableInteractive: we,
              placement: J,
              PopperComponentProp: ee,
              touch: xe.current,
            }),
            lt = (function (e) {
              var t = e.classes,
                n = e.disableInteractive,
                r = e.arrow,
                o = e.touch,
                i = e.placement,
                a = {
                  popper: [
                    "popper",
                    !n && "popperInteractive",
                    r && "popperArrow",
                  ],
                  tooltip: [
                    "tooltip",
                    r && "tooltipArrow",
                    o && "touch",
                    "tooltipPlacement".concat((0, O.Z)(i.split("-")[0])),
                  ],
                  arrow: ["arrow"],
                };
              return (0, d.Z)(a, Ls, t);
            })(at),
            st = null != (r = x.Popper) ? r : Fs,
            ut = null != (o = null != (a = x.Transition) ? a : ie) ? o : ui,
            ct = null != (l = x.Tooltip) ? l : Is,
            dt = null != (s = x.Arrow) ? s : Ds,
            ft = Vn(st, (0, c.Z)({}, ne, k.popper), at),
            pt = Vn(ut, (0, c.Z)({}, ae, k.transition), at),
            ht = Vn(ct, (0, c.Z)({}, k.tooltip), at),
            mt = Vn(dt, (0, c.Z)({}, k.arrow), at);
          return (0, b.jsxs)(e.Fragment, {
            children: [
              e.cloneElement(g, rt),
              (0, b.jsx)(
                st,
                (0, c.Z)(
                  {
                    as: null != ee ? ee : Os,
                    placement: J,
                    anchorEl: V
                      ? {
                          getBoundingClientRect: function () {
                            return {
                              top: Je.current.y,
                              left: Je.current.x,
                              right: Je.current.x,
                              bottom: Je.current.y,
                              width: 0,
                              height: 0,
                            };
                          },
                        }
                      : fe,
                    popperRef: et,
                    open: !!fe && Te,
                    id: je,
                    transition: !0,
                  },
                  ot,
                  ft,
                  {
                    className: (0, h.Z)(
                      lt.popper,
                      null == ne ? void 0 : ne.className,
                      null == (f = k.popper) ? void 0 : f.className
                    ),
                    popperOptions: it,
                    children: function (e) {
                      var t,
                        n,
                        r = e.TransitionProps;
                      return (0, b.jsx)(
                        ut,
                        (0, c.Z)(
                          { timeout: se.transitions.duration.shorter },
                          r,
                          pt,
                          {
                            children: (0, b.jsxs)(
                              ct,
                              (0, c.Z)({}, ht, {
                                className: (0, h.Z)(
                                  lt.tooltip,
                                  null == (t = k.tooltip) ? void 0 : t.className
                                ),
                                children: [
                                  re,
                                  v
                                    ? (0, b.jsx)(
                                        dt,
                                        (0, c.Z)({}, mt, {
                                          className: (0, h.Z)(
                                            lt.arrow,
                                            null == (n = k.arrow)
                                              ? void 0
                                              : n.className
                                          ),
                                          ref: be,
                                        })
                                      )
                                    : null,
                                ],
                              })
                            ),
                          }
                        )
                      );
                    },
                  }
                )
              ),
            ],
          });
        }),
        Us = Hs;
      function $s(e) {
        return (0, q.Z)("MuiFab", e);
      }
      var qs = (0, K.Z)("MuiFab", [
          "root",
          "primary",
          "secondary",
          "extended",
          "circular",
          "focusVisible",
          "disabled",
          "colorInherit",
          "sizeSmall",
          "sizeMedium",
          "sizeLarge",
          "info",
          "error",
          "warning",
          "success",
        ]),
        Ks = [
          "children",
          "className",
          "color",
          "component",
          "disabled",
          "disableFocusRipple",
          "focusVisibleClassName",
          "size",
          "variant",
        ],
        Gs = (0, T.ZP)(Qe, {
          name: "MuiFab",
          slot: "Root",
          overridesResolver: function (e, t) {
            var n = e.ownerState;
            return [
              t.root,
              t[n.variant],
              t["size".concat((0, O.Z)(n.size))],
              "inherit" === n.color && t.colorInherit,
              t[(0, O.Z)(n.size)],
              t[n.color],
            ];
          },
        })(
          function (e) {
            var t,
              n,
              r,
              o = e.theme,
              i = e.ownerState;
            return (0, c.Z)(
              {},
              o.typography.button,
              ((t = {
                minHeight: 36,
                transition: o.transitions.create(
                  ["background-color", "box-shadow", "border-color"],
                  { duration: o.transitions.duration.short }
                ),
                borderRadius: "50%",
                padding: 0,
                minWidth: 0,
                width: 56,
                height: 56,
                zIndex: (o.vars || o).zIndex.fab,
                boxShadow: (o.vars || o).shadows[6],
                "&:active": { boxShadow: (o.vars || o).shadows[12] },
                color: o.vars
                  ? o.vars.palette.text.primary
                  : null == (n = (r = o.palette).getContrastText)
                  ? void 0
                  : n.call(r, o.palette.grey[300]),
                backgroundColor: (o.vars || o).palette.grey[300],
                "&:hover": {
                  backgroundColor: (o.vars || o).palette.grey.A100,
                  "@media (hover: none)": {
                    backgroundColor: (o.vars || o).palette.grey[300],
                  },
                  textDecoration: "none",
                },
              }),
              (0, a.Z)(t, "&.".concat(qs.focusVisible), {
                boxShadow: (o.vars || o).shadows[6],
              }),
              (0, a.Z)(t, "&.".concat(qs.disabled), {
                color: (o.vars || o).palette.action.disabled,
                boxShadow: (o.vars || o).shadows[0],
                backgroundColor: (o.vars || o).palette.action
                  .disabledBackground,
              }),
              t),
              "small" === i.size && { width: 40, height: 40 },
              "medium" === i.size && { width: 48, height: 48 },
              "extended" === i.variant && {
                borderRadius: 24,
                padding: "0 16px",
                width: "auto",
                minHeight: "auto",
                minWidth: 48,
                height: 48,
              },
              "extended" === i.variant &&
                "small" === i.size && {
                  width: "auto",
                  padding: "0 8px",
                  borderRadius: 17,
                  minWidth: 34,
                  height: 34,
                },
              "extended" === i.variant &&
                "medium" === i.size && {
                  width: "auto",
                  padding: "0 16px",
                  borderRadius: 20,
                  minWidth: 40,
                  height: 40,
                },
              "inherit" === i.color && { color: "inherit" }
            );
          },
          function (e) {
            var t = e.theme,
              n = e.ownerState;
            return (0, c.Z)(
              {},
              "inherit" !== n.color &&
                "default" !== n.color &&
                null != (t.vars || t).palette[n.color] && {
                  color: (t.vars || t).palette[n.color].contrastText,
                  backgroundColor: (t.vars || t).palette[n.color].main,
                  "&:hover": {
                    backgroundColor: (t.vars || t).palette[n.color].dark,
                    "@media (hover: none)": {
                      backgroundColor: (t.vars || t).palette[n.color].main,
                    },
                  },
                }
            );
          }
        ),
        Qs = e.forwardRef(function (e, t) {
          var n = (0, j.Z)({ props: e, name: "MuiFab" }),
            r = n.children,
            o = n.className,
            i = n.color,
            a = void 0 === i ? "default" : i,
            l = n.component,
            s = void 0 === l ? "button" : l,
            f = n.disabled,
            p = void 0 !== f && f,
            m = n.disableFocusRipple,
            v = void 0 !== m && m,
            g = n.focusVisibleClassName,
            y = n.size,
            x = void 0 === y ? "large" : y,
            w = n.variant,
            k = void 0 === w ? "circular" : w,
            S = (0, u.Z)(n, Ks),
            Z = (0, c.Z)({}, n, {
              color: a,
              component: s,
              disabled: p,
              disableFocusRipple: v,
              size: x,
              variant: k,
            }),
            E = (function (e) {
              var t = e.color,
                n = e.variant,
                r = e.classes,
                o = e.size,
                i = {
                  root: [
                    "root",
                    n,
                    "size".concat((0, O.Z)(o)),
                    "inherit" === t ? "colorInherit" : t,
                  ],
                };
              return (0, d.Z)(i, $s, r);
            })(Z);
          return (0,
          b.jsx)(Gs, (0, c.Z)({ className: (0, h.Z)(E.root, o), component: s, disabled: p, focusRipple: !v, focusVisibleClassName: (0, h.Z)(E.focusVisible, g), ownerState: Z, ref: t }, S, { children: r }));
        }),
        Ys = n(8527),
        Xs = n(8422),
        Js = n(1286),
        eu = n(2419),
        tu = n(194),
        nu = n(1477),
        ru = n(2752),
        ou = [
          {
            title: "Insert Node",
            icon: (0, b.jsx)(eu.Z, {}),
            key: "newNode",
            action: { type: "edit node", isEditing: !0 },
          },
          {
            title: "Edit Name",
            icon: (0, b.jsx)(Js.Z, {}),
            key: "editNode",
            action: { type: "edit name", isEditing: !0 },
          },
          {
            title: "Delete",
            icon: (0, b.jsx)(Xs.Z, {}),
            key: "delete",
            action: { type: "delete" },
          },
          {
            title: "Copy Address",
            icon: (0, b.jsx)(ru.Z, {}),
            key: "copyAddress",
            action: { type: "copy address" },
          },
          {
            title: "Copy Node",
            icon: (0, b.jsx)(tu.Z, {}),
            key: "copyNode",
            action: { type: "copy node" },
          },
          {
            title: "Paste Node",
            icon: (0, b.jsx)(nu.Z, {}),
            key: "paste",
            action: { type: "paste node" },
          },
        ];
      var iu = function (t) {
          var n = t.dispatch,
            r = e.useState(!1),
            o = (0, i.Z)(r, 2),
            a = o[0],
            l = o[1];
          return (0, b.jsxs)(Qt, {
            sx: {
              padding: "3rem",
              position: "fixed",
              bottom: 0,
              right: 0,
              display: "flex",
              flexDirection: "column",
              flexGap: "1rem",
            },
            children: [
              a
                ? (0, b.jsx)(b.Fragment, {
                    children: ou.map(function (e) {
                      return (0, b.jsx)(
                        Us,
                        {
                          title: ""
                            .concat(e.title, " (")
                            .concat(_t[e.key], ")"),
                          placement: "left",
                          children: (0, b.jsx)(Qs, {
                            onClick: function () {
                              return (t = e.action), void n(t);
                              var t;
                            },
                            children: e.icon,
                          }),
                        },
                        e.key
                      );
                    }),
                  })
                : "",
              (0, b.jsx)(Qs, {
                onClick: function () {
                  l(function (e) {
                    return !e;
                  });
                },
                children: (0, b.jsx)(Ys.Z, {}),
              }),
            ],
          });
        },
        au = e.useState,
        lu = e.useEffect,
        su = e.useReducer,
        uu = (0, Kt.Z)({ palette: { secondary: { main: "#FFF" } } });
      var cu = function () {
        var e,
          t = su(Lt, {}),
          n = (0, i.Z)(t, 2),
          r = n[0],
          a = n[1],
          l = au([]),
          s = (0, i.Z)(l, 2),
          u = s[0],
          c = s[1],
          d = au(0),
          f = (0, i.Z)(d, 2),
          p = f[0],
          h = f[1],
          m = function (e) {
            if ("undo" !== e.type) {
              if (
                "focus node" !== e.type &&
                "unfocus node" !== e.type &&
                "unfocus all" !== e.type &&
                "input name" !== e.type &&
                "edit name" !== e.type &&
                "edit node" !== e.type &&
                "input node" !== e.type &&
                "toggle display children" !== e.type &&
                "set collapse all" !== e.type &&
                "copy node" !== e.type &&
                "copy address" !== e.type &&
                "change insert target" !== e.type
              ) {
                if (p > 0) {
                  var t = u.splice(0, p);
                  c(function () {
                    return t;
                  }),
                    h(function () {
                      return 0;
                    });
                }
                c(function (e) {
                  return [r].concat((0, o.Z)(e));
                });
              }
              a(e);
            } else if (u.length > p + 1 && u[0].tree) {
              var n = u[p];
              h(function (e) {
                return e + 1;
              }),
                a({ type: "replace state", newState: n });
            }
          },
          v = au(!1),
          g = (0, i.Z)(v, 2),
          y = g[0],
          x = g[1];
        lu(function () {
          m({
            type: "initialize",
            code: "sibling1\n\tchild1\n\tchild2\nsibling2\n\tchild1\n\tchild2",
          }),
            x(function () {
              return !0;
            });
        }, []),
          lu(function () {
            var e = fn();
            e &&
              (m({ type: "set user", user: e }),
              nn().then(function (e) {
                return m({ type: "set fetched trees", trees: e.trees });
              }));
          }, []);
        var w = au(!0),
          k = (0, i.Z)(w, 2),
          S = k[0],
          Z = k[1];
        function E() {
          m({ type: "set collapse all", displayChildren: !S }), Z(!S);
        }
        function C(e) {
          var t = -1;
          return (
            r.focus.forEach(function (n, r) {
              n.toString() === e.toString() && (t = r);
            }),
            t
          );
        }
        var P = It(r);
        return (
          lu(
            function () {
              At(m, P, r, E);
            },
            [P]
          ),
          (0, b.jsx)(ll, {
            theme: uu,
            children:
              y &&
              (0, b.jsxs)(b.Fragment, {
                children: [
                  (0, b.jsx)(tl, { state: r, dispatch: m, collapseAll: E }),
                  (0, b.jsxs)("main", {
                    className: "App-main",
                    children: [
                      (0, b.jsx)(Qt, {
                        sx: {
                          overflow: "auto",
                          width: "100%",
                          padding: "2rem 1rem",
                        },
                        children: (0, b.jsx)(
                          bt,
                          {
                            node: r.tree,
                            isRoot: !0,
                            focussed: C(r.tree.address),
                            findFocusIndex: C,
                            addressMap: r.addressMap,
                            displayChildren:
                              null ===
                                (e = r.addressMap.get(
                                  r.tree.address.toString()
                                )) || void 0 === e
                                ? void 0
                                : e.display,
                            visible: !0,
                            dispatch: m,
                          },
                          "root"
                        ),
                      }),
                      (0, b.jsx)(iu, { dispatch: m }),
                    ],
                  }),
                ],
              }),
          })
        );
      };
      r.render(
        (0, b.jsx)(e.StrictMode, { children: (0, b.jsx)(cu, {}) }),
        document.getElementById("root")
      );
    })();
})();
//# sourceMappingURL=main.996c44d4.js.map
