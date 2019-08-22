!function (e) {
    var n = window.webpackHotUpdate;
    window.webpackHotUpdate = function (e, r) {
        !function (e, n) {
            if (!_[e] || !O[e]) return;
            for (var r in O[e] = !1, n) Object.prototype.hasOwnProperty.call(n, r) && (y[r] = n[r]);
            0 == --b && 0 === m && E()
        }(e, r), n && n(e, r)
    };
    var r, t = !0, o = "32d477dc9c7a205b9e70", c = 1e4, i = {}, d = [], a = [];

    function l(e) {
        var n = H[e];
        if (!n) return P;
        var t = function (t) {
            return n.hot.active ? (H[t] ? -1 === H[t].parents.indexOf(e) && H[t].parents.push(e) : (d = [e], r = t), -1 === n.children.indexOf(t) && n.children.push(t)) : (console.warn("[HMR] unexpected require(" + t + ") from disposed module " + e), d = []), P(t)
        }, o = function (e) {
            return {
                configurable: !0, enumerable: !0, get: function () {
                    return P[e]
                }, set: function (n) {
                    P[e] = n
                }
            }
        };
        for (var c in P) Object.prototype.hasOwnProperty.call(P, c) && "e" !== c && "t" !== c && Object.defineProperty(t, c, o(c));
        return t.e = function (e) {
            return "ready" === p && f("prepare"), m++, P.e(e).then(n, function (e) {
                throw n(), e
            });

            function n() {
                m--, "prepare" === p && (w[e] || D(e), 0 === m && 0 === b && E())
            }
        }, t.t = function (e, n) {
            return 1 & n && (e = t(e)), P.t(e, -2 & n)
        }, t
    }

    function s(e) {
        var n = {
            _acceptedDependencies: {},
            _declinedDependencies: {},
            _selfAccepted: !1,
            _selfDeclined: !1,
            _disposeHandlers: [],
            _main: r !== e,
            active: !0,
            accept: function (e, r) {
                if (void 0 === e) n._selfAccepted = !0; else if ("function" == typeof e) n._selfAccepted = e; else if ("object" == typeof e) for (var t = 0; t < e.length; t++) n._acceptedDependencies[e[t]] = r || function () {
                }; else n._acceptedDependencies[e] = r || function () {
                }
            },
            decline: function (e) {
                if (void 0 === e) n._selfDeclined = !0; else if ("object" == typeof e) for (var r = 0; r < e.length; r++) n._declinedDependencies[e[r]] = !0; else n._declinedDependencies[e] = !0
            },
            dispose: function (e) {
                n._disposeHandlers.push(e)
            },
            addDisposeHandler: function (e) {
                n._disposeHandlers.push(e)
            },
            removeDisposeHandler: function (e) {
                var r = n._disposeHandlers.indexOf(e);
                r >= 0 && n._disposeHandlers.splice(r, 1)
            },
            check: j,
            apply: x,
            status: function (e) {
                if (!e) return p;
                u.push(e)
            },
            addStatusHandler: function (e) {
                u.push(e)
            },
            removeStatusHandler: function (e) {
                var n = u.indexOf(e);
                n >= 0 && u.splice(n, 1)
            },
            data: i[e]
        };
        return r = void 0, n
    }

    var u = [], p = "idle";

    function f(e) {
        p = e;
        for (var n = 0; n < u.length; n++) u[n].call(null, e)
    }

    var h, y, v, b = 0, m = 0, w = {}, O = {}, _ = {};

    function g(e) {
        return +e + "" === e ? +e : e
    }

    function j(e) {
        if ("idle" !== p) throw new Error("check() is only allowed in idle status");
        return t = e, f("check"), (n = c, n = n || 1e4, new Promise(function (e, r) {
            if ("undefined" == typeof XMLHttpRequest) return r(new Error("No browser support"));
            try {
                var t = new XMLHttpRequest, c = P.p + "" + o + ".hot-update.json";
                t.open("GET", c, !0), t.timeout = n, t.send(null)
            } catch (e) {
                return r(e)
            }
            t.onreadystatechange = function () {
                if (4 === t.readyState) if (0 === t.status) r(new Error("Manifest request to " + c + " timed out.")); else if (404 === t.status) e(); else if (200 !== t.status && 304 !== t.status) r(new Error("Manifest request to " + c + " failed.")); else {
                    try {
                        var n = JSON.parse(t.responseText)
                    } catch (e) {
                        return void r(e)
                    }
                    e(n)
                }
            }
        })).then(function (e) {
            if (!e) return f("idle"), null;
            O = {}, w = {}, _ = e.c, v = e.h, f("prepare");
            var n = new Promise(function (e, n) {
                h = {resolve: e, reject: n}
            });
            y = {};
            return D(0), "prepare" === p && 0 === m && 0 === b && E(), n
        });
        var n
    }

    function D(e) {
        _[e] ? (O[e] = !0, b++, function (e) {
            var n = document.createElement("script");
            n.charset = "utf-8", n.src = P.p + "" + e + "." + o + ".hot-update.js", document.head.appendChild(n)
        }(e)) : w[e] = !0
    }

    function E() {
        f("ready");
        var e = h;
        if (h = null, e) if (t) Promise.resolve().then(function () {
            return x(t)
        }).then(function (n) {
            e.resolve(n)
        }, function (n) {
            e.reject(n)
        }); else {
            var n = [];
            for (var r in y) Object.prototype.hasOwnProperty.call(y, r) && n.push(g(r));
            e.resolve(n)
        }
    }

    function x(n) {
        if ("ready" !== p) throw new Error("apply() is only allowed in ready status");
        var r, t, c, a, l;

        function s(e) {
            for (var n = [e], r = {}, t = n.map(function (e) {
                return {chain: [e], id: e}
            }); t.length > 0;) {
                var o = t.pop(), c = o.id, i = o.chain;
                if ((a = H[c]) && !a.hot._selfAccepted) {
                    if (a.hot._selfDeclined) return {type: "self-declined", chain: i, moduleId: c};
                    if (a.hot._main) return {type: "unaccepted", chain: i, moduleId: c};
                    for (var d = 0; d < a.parents.length; d++) {
                        var l = a.parents[d], s = H[l];
                        if (s) {
                            if (s.hot._declinedDependencies[c]) return {
                                type: "declined",
                                chain: i.concat([l]),
                                moduleId: c,
                                parentId: l
                            };
                            -1 === n.indexOf(l) && (s.hot._acceptedDependencies[c] ? (r[l] || (r[l] = []), u(r[l], [c])) : (delete r[l], n.push(l), t.push({
                                chain: i.concat([l]),
                                id: l
                            })))
                        }
                    }
                }
            }
            return {type: "accepted", moduleId: e, outdatedModules: n, outdatedDependencies: r}
        }

        function u(e, n) {
            for (var r = 0; r < n.length; r++) {
                var t = n[r];
                -1 === e.indexOf(t) && e.push(t)
            }
        }

        n = n || {};
        var h = {}, b = [], m = {}, w = function () {
            console.warn("[HMR] unexpected require(" + j.moduleId + ") to disposed module")
        };
        for (var O in y) if (Object.prototype.hasOwnProperty.call(y, O)) {
            var j;
            l = g(O);
            var D = !1, E = !1, x = !1, I = "";
            switch ((j = y[O] ? s(l) : {
                type: "disposed",
                moduleId: O
            }).chain && (I = "\nUpdate propagation: " + j.chain.join(" -> ")), j.type) {
                case"self-declined":
                    n.onDeclined && n.onDeclined(j), n.ignoreDeclined || (D = new Error("Aborted because of self decline: " + j.moduleId + I));
                    break;
                case"declined":
                    n.onDeclined && n.onDeclined(j), n.ignoreDeclined || (D = new Error("Aborted because of declined dependency: " + j.moduleId + " in " + j.parentId + I));
                    break;
                case"unaccepted":
                    n.onUnaccepted && n.onUnaccepted(j), n.ignoreUnaccepted || (D = new Error("Aborted because " + l + " is not accepted" + I));
                    break;
                case"accepted":
                    n.onAccepted && n.onAccepted(j), E = !0;
                    break;
                case"disposed":
                    n.onDisposed && n.onDisposed(j), x = !0;
                    break;
                default:
                    throw new Error("Unexception type " + j.type)
            }
            if (D) return f("abort"), Promise.reject(D);
            if (E) for (l in m[l] = y[l], u(b, j.outdatedModules), j.outdatedDependencies) Object.prototype.hasOwnProperty.call(j.outdatedDependencies, l) && (h[l] || (h[l] = []), u(h[l], j.outdatedDependencies[l]));
            x && (u(b, [j.moduleId]), m[l] = w)
        }
        var k, M = [];
        for (t = 0; t < b.length; t++) l = b[t], H[l] && H[l].hot._selfAccepted && m[l] !== w && M.push({
            module: l,
            errorHandler: H[l].hot._selfAccepted
        });
        f("dispose"), Object.keys(_).forEach(function (e) {
            !1 === _[e] && function (e) {
                delete installedChunks[e]
            }(e)
        });
        for (var A, S, q = b.slice(); q.length > 0;) if (l = q.pop(), a = H[l]) {
            var U = {}, T = a.hot._disposeHandlers;
            for (c = 0; c < T.length; c++) (r = T[c])(U);
            for (i[l] = U, a.hot.active = !1, delete H[l], delete h[l], c = 0; c < a.children.length; c++) {
                var R = H[a.children[c]];
                R && ((k = R.parents.indexOf(l)) >= 0 && R.parents.splice(k, 1))
            }
        }
        for (l in h) if (Object.prototype.hasOwnProperty.call(h, l) && (a = H[l])) for (S = h[l], c = 0; c < S.length; c++) A = S[c], (k = a.children.indexOf(A)) >= 0 && a.children.splice(k, 1);
        for (l in f("apply"), o = v, m) Object.prototype.hasOwnProperty.call(m, l) && (e[l] = m[l]);
        var C = null;
        for (l in h) if (Object.prototype.hasOwnProperty.call(h, l) && (a = H[l])) {
            S = h[l];
            var L = [];
            for (t = 0; t < S.length; t++) if (A = S[t], r = a.hot._acceptedDependencies[A]) {
                if (-1 !== L.indexOf(r)) continue;
                L.push(r)
            }
            for (t = 0; t < L.length; t++) {
                r = L[t];
                try {
                    r(S)
                } catch (e) {
                    n.onErrored && n.onErrored({
                        type: "accept-errored",
                        moduleId: l,
                        dependencyId: S[t],
                        error: e
                    }), n.ignoreErrored || C || (C = e)
                }
            }
        }
        for (t = 0; t < M.length; t++) {
            var N = M[t];
            l = N.module, d = [l];
            try {
                P(l)
            } catch (e) {
                if ("function" == typeof N.errorHandler) try {
                    N.errorHandler(e)
                } catch (r) {
                    n.onErrored && n.onErrored({
                        type: "self-accept-error-handler-errored",
                        moduleId: l,
                        error: r,
                        originalError: e
                    }), n.ignoreErrored || C || (C = r), C || (C = e)
                } else n.onErrored && n.onErrored({
                    type: "self-accept-errored",
                    moduleId: l,
                    error: e
                }), n.ignoreErrored || C || (C = e)
            }
        }
        return C ? (f("fail"), Promise.reject(C)) : (f("idle"), new Promise(function (e) {
            e(b)
        }))
    }

    var H = {};

    function P(n) {
        if (H[n]) return H[n].exports;
        var r = H[n] = {i: n, l: !1, exports: {}, hot: s(n), parents: (a = d, d = [], a), children: []};
        return e[n].call(r.exports, r, r.exports, l(n)), r.l = !0, r.exports
    }

    P.m = e, P.c = H, P.d = function (e, n, r) {
        P.o(e, n) || Object.defineProperty(e, n, {enumerable: !0, get: r})
    }, P.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, P.t = function (e, n) {
        if (1 & n && (e = P(e)), 8 & n) return e;
        if (4 & n && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (P.r(r), Object.defineProperty(r, "default", {
            enumerable: !0,
            value: e
        }), 2 & n && "string" != typeof e) for (var t in e) P.d(r, t, function (n) {
            return e[n]
        }.bind(null, t));
        return r
    }, P.n = function (e) {
        var n = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return P.d(n, "a", n), n
    }, P.o = function (e, n) {
        return Object.prototype.hasOwnProperty.call(e, n)
    }, P.p = "/", P.h = function () {
        return o
    }, l("./src/index.js")(P.s = "./src/index.js")
}({
    "./src/index.js": function (e, n, r) {
        "use strict";
        r.r(n), document.body.appendChild(function () {
            let e = document.createElement("pre");
            var n;
            return e.innerHTML = ["Hello webpack", "5 cubed is equal to " + (n = 5, n * n * n)].join("\n\n"), e
        }())
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tYXRoLmpzIl0sIm5hbWVzIjpbInBhcmVudEhvdFVwZGF0ZUNhbGxiYWNrIiwid2luZG93IiwiY2h1bmtJZCIsIm1vcmVNb2R1bGVzIiwiaG90QXZhaWxhYmxlRmlsZXNNYXAiLCJob3RSZXF1ZXN0ZWRGaWxlc01hcCIsIm1vZHVsZUlkIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiaG90VXBkYXRlIiwiaG90V2FpdGluZ0ZpbGVzIiwiaG90Q2h1bmtzTG9hZGluZyIsImhvdFVwZGF0ZURvd25sb2FkZWQiLCJob3RBZGRVcGRhdGVDaHVuayIsImhvdEN1cnJlbnRDaGlsZE1vZHVsZSIsImhvdEFwcGx5T25VcGRhdGUiLCJob3RDdXJyZW50SGFzaCIsImhvdFJlcXVlc3RUaW1lb3V0IiwiaG90Q3VycmVudE1vZHVsZURhdGEiLCJob3RDdXJyZW50UGFyZW50cyIsImhvdEN1cnJlbnRQYXJlbnRzVGVtcCIsImhvdENyZWF0ZVJlcXVpcmUiLCJtZSIsImluc3RhbGxlZE1vZHVsZXMiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiZm4iLCJyZXF1ZXN0IiwiaG90IiwiYWN0aXZlIiwicGFyZW50cyIsImluZGV4T2YiLCJwdXNoIiwiY2hpbGRyZW4iLCJjb25zb2xlIiwid2FybiIsIk9iamVjdEZhY3RvcnkiLCJuYW1lIiwiY29uZmlndXJhYmxlIiwiZW51bWVyYWJsZSIsImdldCIsInNldCIsInZhbHVlIiwiZGVmaW5lUHJvcGVydHkiLCJlIiwiaG90U3RhdHVzIiwiaG90U2V0U3RhdHVzIiwidGhlbiIsImZpbmlzaENodW5rTG9hZGluZyIsImVyciIsImhvdFdhaXRpbmdGaWxlc01hcCIsImhvdEVuc3VyZVVwZGF0ZUNodW5rIiwidCIsIm1vZGUiLCJob3RDcmVhdGVNb2R1bGUiLCJfYWNjZXB0ZWREZXBlbmRlbmNpZXMiLCJfZGVjbGluZWREZXBlbmRlbmNpZXMiLCJfc2VsZkFjY2VwdGVkIiwiX3NlbGZEZWNsaW5lZCIsIl9kaXNwb3NlSGFuZGxlcnMiLCJfbWFpbiIsImFjY2VwdCIsImRlcCIsImNhbGxiYWNrIiwidW5kZWZpbmVkIiwiaSIsImxlbmd0aCIsImRlY2xpbmUiLCJkaXNwb3NlIiwiYWRkRGlzcG9zZUhhbmRsZXIiLCJyZW1vdmVEaXNwb3NlSGFuZGxlciIsImlkeCIsInNwbGljZSIsImNoZWNrIiwiaG90Q2hlY2siLCJhcHBseSIsImhvdEFwcGx5Iiwic3RhdHVzIiwibCIsImhvdFN0YXR1c0hhbmRsZXJzIiwiYWRkU3RhdHVzSGFuZGxlciIsInJlbW92ZVN0YXR1c0hhbmRsZXIiLCJkYXRhIiwibmV3U3RhdHVzIiwiaG90RGVmZXJyZWQiLCJob3RVcGRhdGVOZXdIYXNoIiwidG9Nb2R1bGVJZCIsImlkIiwiRXJyb3IiLCJyZXF1ZXN0VGltZW91dCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiWE1MSHR0cFJlcXVlc3QiLCJyZXF1ZXN0UGF0aCIsInAiLCJvcGVuIiwidGltZW91dCIsInNlbmQiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJyZWFkeVN0YXRlIiwidXBkYXRlIiwiSlNPTiIsInBhcnNlIiwicmVzcG9uc2VUZXh0IiwiYyIsImgiLCJwcm9taXNlIiwic2NyaXB0IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2hhcnNldCIsInNyYyIsImhlYWQiLCJhcHBlbmRDaGlsZCIsImhvdERvd25sb2FkVXBkYXRlQ2h1bmsiLCJkZWZlcnJlZCIsInJlc3VsdCIsIm91dGRhdGVkTW9kdWxlcyIsIm9wdGlvbnMiLCJjYiIsImoiLCJtb2R1bGUiLCJnZXRBZmZlY3RlZFN0dWZmIiwidXBkYXRlTW9kdWxlSWQiLCJvdXRkYXRlZERlcGVuZGVuY2llcyIsInF1ZXVlIiwibWFwIiwiY2hhaW4iLCJxdWV1ZUl0ZW0iLCJwb3AiLCJ0eXBlIiwicGFyZW50SWQiLCJwYXJlbnQiLCJjb25jYXQiLCJhZGRBbGxUb1NldCIsImEiLCJiIiwiaXRlbSIsImFwcGxpZWRVcGRhdGUiLCJ3YXJuVW5leHBlY3RlZFJlcXVpcmUiLCJhYm9ydEVycm9yIiwiZG9BcHBseSIsImRvRGlzcG9zZSIsImNoYWluSW5mbyIsImpvaW4iLCJvbkRlY2xpbmVkIiwiaWdub3JlRGVjbGluZWQiLCJvblVuYWNjZXB0ZWQiLCJpZ25vcmVVbmFjY2VwdGVkIiwib25BY2NlcHRlZCIsIm9uRGlzcG9zZWQiLCJvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMiLCJlcnJvckhhbmRsZXIiLCJrZXlzIiwiZm9yRWFjaCIsImluc3RhbGxlZENodW5rcyIsImhvdERpc3Bvc2VDaHVuayIsImRlcGVuZGVuY3kiLCJtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyIsInNsaWNlIiwiZGlzcG9zZUhhbmRsZXJzIiwiY2hpbGQiLCJtb2R1bGVzIiwiZXJyb3IiLCJjYWxsYmFja3MiLCJvbkVycm9yZWQiLCJkZXBlbmRlbmN5SWQiLCJpZ25vcmVFcnJvcmVkIiwiZXJyMiIsIm9yaWdpbmFsRXJyb3IiLCJleHBvcnRzIiwibSIsImQiLCJnZXR0ZXIiLCJvIiwiciIsIlN5bWJvbCIsInRvU3RyaW5nVGFnIiwiX19lc01vZHVsZSIsIm5zIiwiY3JlYXRlIiwia2V5IiwiYmluZCIsIm4iLCJvYmplY3QiLCJwcm9wZXJ0eSIsInMiLCJib2R5IiwiZWxlbWVudCIsIngiLCJpbm5lckhUTUwiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiJhQUdBLElBQUFBLEVBQUFDLE9BQUEsaUJBQ0FBLE9BQUEsaUJBQ0EsU0FBQUMsRUFBQUMsSUFnUkEsU0FBQUQsRUFBQUMsR0FDQSxJQUFBQyxFQUFBRixLQUFBRyxFQUFBSCxHQUNBLE9BRUEsUUFBQUksS0FEQUQsRUFBQUgsSUFBQSxFQUNBQyxFQUNBSSxPQUFBQyxVQUFBQyxlQUFBQyxLQUFBUCxFQUFBRyxLQUNBSyxFQUFBTCxHQUFBSCxFQUFBRyxJQUdBLEtBQUFNLEdBQUEsSUFB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QUFPLEVBQUFFLEVBQUEsU0FBQUEsR0FBZ0gsT0FBQTVJLEVBQUE0SSxJQUFxQkMsS0FBQSxLQUFBRCxJQUNySSxPQUFBRixHQUlBM0osRUFBQStKLEVBQUEsU0FBQTlELEdBQ0EsSUFBQW9ELEVBQUFwRCxLQUFBeUQsV0FDQSxXQUEyQixPQUFBekQsRUFBQSxTQUMzQixXQUFpQyxPQUFBQSxHQUVqQyxPQURBakcsRUFBQW9KLEVBQUFDLEVBQUEsSUFBQUEsR0FDQUEsR0FJQXJKLEVBQUFzSixFQUFBLFNBQUFVLEVBQUFDLEdBQXNELE9BQUFwTCxPQUFBQyxVQUFBQyxlQUFBQyxLQUFBZ0wsRUFBQUMsSUFHdERqSyxFQUFBc0UsRUFBQSxJQUdBdEUsRUFBQWlGLEVBQUEsV0FBc0MsT0FBQXpGLEdBSXRDSyxFQUFBLGlCQUFBQSxDQUFBRyxFQUFBa0ssRUFBQSx5RUNud0JBOUUsU0FBQStFLEtBQUExRSxZQWhCQSxXQUNBLElBQUEyRSxFQUFBaEYsU0FBQUMsY0FBQSxPQ0hPLElBQUFnRixFREtQLE9BREFELEVBQUFFLFVBQUEseUNDSk9ELEVESTZELEVDSHBFQSxRREdvRTdDLEtBQUEsUUFDcEU0QyxFQWFBRyIsImZpbGUiOiJhcHAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0ZnVuY3Rpb24gaG90RGlzcG9zZUNodW5rKGNodW5rSWQpIHtcbiBcdFx0ZGVsZXRlIGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcbiBcdH1cbiBcdHZhciBwYXJlbnRIb3RVcGRhdGVDYWxsYmFjayA9IHdpbmRvd1tcIndlYnBhY2tIb3RVcGRhdGVcIl07XG4gXHR3aW5kb3dbXCJ3ZWJwYWNrSG90VXBkYXRlXCJdID0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSG90VXBkYXRlQ2FsbGJhY2soY2h1bmtJZCwgbW9yZU1vZHVsZXMpIHtcbiBcdFx0aG90QWRkVXBkYXRlQ2h1bmsoY2h1bmtJZCwgbW9yZU1vZHVsZXMpO1xuIFx0XHRpZiAocGFyZW50SG90VXBkYXRlQ2FsbGJhY2spIHBhcmVudEhvdFVwZGF0ZUNhbGxiYWNrKGNodW5rSWQsIG1vcmVNb2R1bGVzKTtcbiBcdH0gO1xuXG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdGZ1bmN0aW9uIGhvdERvd25sb2FkVXBkYXRlQ2h1bmsoY2h1bmtJZCkge1xuIFx0XHR2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcbiBcdFx0c2NyaXB0LmNoYXJzZXQgPSBcInV0Zi04XCI7XG4gXHRcdHNjcmlwdC5zcmMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBcIlwiICsgY2h1bmtJZCArIFwiLlwiICsgaG90Q3VycmVudEhhc2ggKyBcIi5ob3QtdXBkYXRlLmpzXCI7XG4gXHRcdGlmIChudWxsKSBzY3JpcHQuY3Jvc3NPcmlnaW4gPSBudWxsO1xuIFx0XHRkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gXHR9XG5cbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gaG90RG93bmxvYWRNYW5pZmVzdChyZXF1ZXN0VGltZW91dCkge1xuIFx0XHRyZXF1ZXN0VGltZW91dCA9IHJlcXVlc3RUaW1lb3V0IHx8IDEwMDAwO1xuIFx0XHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gXHRcdFx0aWYgKHR5cGVvZiBYTUxIdHRwUmVxdWVzdCA9PT0gXCJ1bmRlZmluZWRcIikge1xuIFx0XHRcdFx0cmV0dXJuIHJlamVjdChuZXcgRXJyb3IoXCJObyBicm93c2VyIHN1cHBvcnRcIikpO1xuIFx0XHRcdH1cbiBcdFx0XHR0cnkge1xuIFx0XHRcdFx0dmFyIHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiBcdFx0XHRcdHZhciByZXF1ZXN0UGF0aCA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIFwiXCIgKyBob3RDdXJyZW50SGFzaCArIFwiLmhvdC11cGRhdGUuanNvblwiO1xuIFx0XHRcdFx0cmVxdWVzdC5vcGVuKFwiR0VUXCIsIHJlcXVlc3RQYXRoLCB0cnVlKTtcbiBcdFx0XHRcdHJlcXVlc3QudGltZW91dCA9IHJlcXVlc3RUaW1lb3V0O1xuIFx0XHRcdFx0cmVxdWVzdC5zZW5kKG51bGwpO1xuIFx0XHRcdH0gY2F0Y2ggKGVycikge1xuIFx0XHRcdFx0cmV0dXJuIHJlamVjdChlcnIpO1xuIFx0XHRcdH1cbiBcdFx0XHRyZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuIFx0XHRcdFx0aWYgKHJlcXVlc3QucmVhZHlTdGF0ZSAhPT0gNCkgcmV0dXJuO1xuIFx0XHRcdFx0aWYgKHJlcXVlc3Quc3RhdHVzID09PSAwKSB7XG4gXHRcdFx0XHRcdC8vIHRpbWVvdXRcbiBcdFx0XHRcdFx0cmVqZWN0KFxuIFx0XHRcdFx0XHRcdG5ldyBFcnJvcihcIk1hbmlmZXN0IHJlcXVlc3QgdG8gXCIgKyByZXF1ZXN0UGF0aCArIFwiIHRpbWVkIG91dC5cIilcbiBcdFx0XHRcdFx0KTtcbiBcdFx0XHRcdH0gZWxzZSBpZiAocmVxdWVzdC5zdGF0dXMgPT09IDQwNCkge1xuIFx0XHRcdFx0XHQvLyBubyB1cGRhdGUgYXZhaWxhYmxlXG4gXHRcdFx0XHRcdHJlc29sdmUoKTtcbiBcdFx0XHRcdH0gZWxzZSBpZiAocmVxdWVzdC5zdGF0dXMgIT09IDIwMCAmJiByZXF1ZXN0LnN0YXR1cyAhPT0gMzA0KSB7XG4gXHRcdFx0XHRcdC8vIG90aGVyIGZhaWx1cmVcbiBcdFx0XHRcdFx0cmVqZWN0KG5ldyBFcnJvcihcIk1hbmlmZXN0IHJlcXVlc3QgdG8gXCIgKyByZXF1ZXN0UGF0aCArIFwiIGZhaWxlZC5cIikpO1xuIFx0XHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdFx0Ly8gc3VjY2Vzc1xuIFx0XHRcdFx0XHR0cnkge1xuIFx0XHRcdFx0XHRcdHZhciB1cGRhdGUgPSBKU09OLnBhcnNlKHJlcXVlc3QucmVzcG9uc2VUZXh0KTtcbiBcdFx0XHRcdFx0fSBjYXRjaCAoZSkge1xuIFx0XHRcdFx0XHRcdHJlamVjdChlKTtcbiBcdFx0XHRcdFx0XHRyZXR1cm47XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0cmVzb2x2ZSh1cGRhdGUpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH07XG4gXHRcdH0pO1xuIFx0fVxuXG4gXHR2YXIgaG90QXBwbHlPblVwZGF0ZSA9IHRydWU7XG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdHZhciBob3RDdXJyZW50SGFzaCA9IFwiMzJkNDc3ZGM5YzdhMjA1YjllNzBcIjtcbiBcdHZhciBob3RSZXF1ZXN0VGltZW91dCA9IDEwMDAwO1xuIFx0dmFyIGhvdEN1cnJlbnRNb2R1bGVEYXRhID0ge307XG4gXHR2YXIgaG90Q3VycmVudENoaWxkTW9kdWxlO1xuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHR2YXIgaG90Q3VycmVudFBhcmVudHMgPSBbXTtcbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0dmFyIGhvdEN1cnJlbnRQYXJlbnRzVGVtcCA9IFtdO1xuXG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdGZ1bmN0aW9uIGhvdENyZWF0ZVJlcXVpcmUobW9kdWxlSWQpIHtcbiBcdFx0dmFyIG1lID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdGlmICghbWUpIHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fO1xuIFx0XHR2YXIgZm4gPSBmdW5jdGlvbihyZXF1ZXN0KSB7XG4gXHRcdFx0aWYgKG1lLmhvdC5hY3RpdmUpIHtcbiBcdFx0XHRcdGlmIChpbnN0YWxsZWRNb2R1bGVzW3JlcXVlc3RdKSB7XG4gXHRcdFx0XHRcdGlmIChpbnN0YWxsZWRNb2R1bGVzW3JlcXVlc3RdLnBhcmVudHMuaW5kZXhPZihtb2R1bGVJZCkgPT09IC0xKSB7XG4gXHRcdFx0XHRcdFx0aW5zdGFsbGVkTW9kdWxlc1tyZXF1ZXN0XS5wYXJlbnRzLnB1c2gobW9kdWxlSWQpO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0XHRob3RDdXJyZW50UGFyZW50cyA9IFttb2R1bGVJZF07XG4gXHRcdFx0XHRcdGhvdEN1cnJlbnRDaGlsZE1vZHVsZSA9IHJlcXVlc3Q7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRpZiAobWUuY2hpbGRyZW4uaW5kZXhPZihyZXF1ZXN0KSA9PT0gLTEpIHtcbiBcdFx0XHRcdFx0bWUuY2hpbGRyZW4ucHVzaChyZXF1ZXN0KTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0Y29uc29sZS53YXJuKFxuIFx0XHRcdFx0XHRcIltITVJdIHVuZXhwZWN0ZWQgcmVxdWlyZShcIiArXG4gXHRcdFx0XHRcdFx0cmVxdWVzdCArXG4gXHRcdFx0XHRcdFx0XCIpIGZyb20gZGlzcG9zZWQgbW9kdWxlIFwiICtcbiBcdFx0XHRcdFx0XHRtb2R1bGVJZFxuIFx0XHRcdFx0KTtcbiBcdFx0XHRcdGhvdEN1cnJlbnRQYXJlbnRzID0gW107XG4gXHRcdFx0fVxuIFx0XHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKHJlcXVlc3QpO1xuIFx0XHR9O1xuIFx0XHR2YXIgT2JqZWN0RmFjdG9yeSA9IGZ1bmN0aW9uIE9iamVjdEZhY3RvcnkobmFtZSkge1xuIFx0XHRcdHJldHVybiB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IHRydWUsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcbiBcdFx0XHRcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX19bbmFtZV07XG4gXHRcdFx0XHR9LFxuIFx0XHRcdFx0c2V0OiBmdW5jdGlvbih2YWx1ZSkge1xuIFx0XHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fW25hbWVdID0gdmFsdWU7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fTtcbiBcdFx0fTtcbiBcdFx0Zm9yICh2YXIgbmFtZSBpbiBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG4gXHRcdFx0aWYgKFxuIFx0XHRcdFx0T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKF9fd2VicGFja19yZXF1aXJlX18sIG5hbWUpICYmXG4gXHRcdFx0XHRuYW1lICE9PSBcImVcIiAmJlxuIFx0XHRcdFx0bmFtZSAhPT0gXCJ0XCJcbiBcdFx0XHQpIHtcbiBcdFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmbiwgbmFtZSwgT2JqZWN0RmFjdG9yeShuYW1lKSk7XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGZuLmUgPSBmdW5jdGlvbihjaHVua0lkKSB7XG4gXHRcdFx0aWYgKGhvdFN0YXR1cyA9PT0gXCJyZWFkeVwiKSBob3RTZXRTdGF0dXMoXCJwcmVwYXJlXCIpO1xuIFx0XHRcdGhvdENodW5rc0xvYWRpbmcrKztcbiBcdFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5lKGNodW5rSWQpLnRoZW4oZmluaXNoQ2h1bmtMb2FkaW5nLCBmdW5jdGlvbihlcnIpIHtcbiBcdFx0XHRcdGZpbmlzaENodW5rTG9hZGluZygpO1xuIFx0XHRcdFx0dGhyb3cgZXJyO1xuIFx0XHRcdH0pO1xuXG4gXHRcdFx0ZnVuY3Rpb24gZmluaXNoQ2h1bmtMb2FkaW5nKCkge1xuIFx0XHRcdFx0aG90Q2h1bmtzTG9hZGluZy0tO1xuIFx0XHRcdFx0aWYgKGhvdFN0YXR1cyA9PT0gXCJwcmVwYXJlXCIpIHtcbiBcdFx0XHRcdFx0aWYgKCFob3RXYWl0aW5nRmlsZXNNYXBbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdFx0XHRob3RFbnN1cmVVcGRhdGVDaHVuayhjaHVua0lkKTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRpZiAoaG90Q2h1bmtzTG9hZGluZyA9PT0gMCAmJiBob3RXYWl0aW5nRmlsZXMgPT09IDApIHtcbiBcdFx0XHRcdFx0XHRob3RVcGRhdGVEb3dubG9hZGVkKCk7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH07XG4gXHRcdGZuLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRcdGlmIChtb2RlICYgMSkgdmFsdWUgPSBmbih2YWx1ZSk7XG4gXHRcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18udCh2YWx1ZSwgbW9kZSAmIH4xKTtcbiBcdFx0fTtcbiBcdFx0cmV0dXJuIGZuO1xuIFx0fVxuXG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdGZ1bmN0aW9uIGhvdENyZWF0ZU1vZHVsZShtb2R1bGVJZCkge1xuIFx0XHR2YXIgaG90ID0ge1xuIFx0XHRcdC8vIHByaXZhdGUgc3R1ZmZcbiBcdFx0XHRfYWNjZXB0ZWREZXBlbmRlbmNpZXM6IHt9LFxuIFx0XHRcdF9kZWNsaW5lZERlcGVuZGVuY2llczoge30sXG4gXHRcdFx0X3NlbGZBY2NlcHRlZDogZmFsc2UsXG4gXHRcdFx0X3NlbGZEZWNsaW5lZDogZmFsc2UsXG4gXHRcdFx0X2Rpc3Bvc2VIYW5kbGVyczogW10sXG4gXHRcdFx0X21haW46IGhvdEN1cnJlbnRDaGlsZE1vZHVsZSAhPT0gbW9kdWxlSWQsXG5cbiBcdFx0XHQvLyBNb2R1bGUgQVBJXG4gXHRcdFx0YWN0aXZlOiB0cnVlLFxuIFx0XHRcdGFjY2VwdDogZnVuY3Rpb24oZGVwLCBjYWxsYmFjaykge1xuIFx0XHRcdFx0aWYgKGRlcCA9PT0gdW5kZWZpbmVkKSBob3QuX3NlbGZBY2NlcHRlZCA9IHRydWU7XG4gXHRcdFx0XHRlbHNlIGlmICh0eXBlb2YgZGVwID09PSBcImZ1bmN0aW9uXCIpIGhvdC5fc2VsZkFjY2VwdGVkID0gZGVwO1xuIFx0XHRcdFx0ZWxzZSBpZiAodHlwZW9mIGRlcCA9PT0gXCJvYmplY3RcIilcbiBcdFx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZXAubGVuZ3RoOyBpKyspXG4gXHRcdFx0XHRcdFx0aG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBbaV1dID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24oKSB7fTtcbiBcdFx0XHRcdGVsc2UgaG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBdID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24oKSB7fTtcbiBcdFx0XHR9LFxuIFx0XHRcdGRlY2xpbmU6IGZ1bmN0aW9uKGRlcCkge1xuIFx0XHRcdFx0aWYgKGRlcCA9PT0gdW5kZWZpbmVkKSBob3QuX3NlbGZEZWNsaW5lZCA9IHRydWU7XG4gXHRcdFx0XHRlbHNlIGlmICh0eXBlb2YgZGVwID09PSBcIm9iamVjdFwiKVxuIFx0XHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGRlcC5sZW5ndGg7IGkrKylcbiBcdFx0XHRcdFx0XHRob3QuX2RlY2xpbmVkRGVwZW5kZW5jaWVzW2RlcFtpXV0gPSB0cnVlO1xuIFx0XHRcdFx0ZWxzZSBob3QuX2RlY2xpbmVkRGVwZW5kZW5jaWVzW2RlcF0gPSB0cnVlO1xuIFx0XHRcdH0sXG4gXHRcdFx0ZGlzcG9zZTogZnVuY3Rpb24oY2FsbGJhY2spIHtcbiBcdFx0XHRcdGhvdC5fZGlzcG9zZUhhbmRsZXJzLnB1c2goY2FsbGJhY2spO1xuIFx0XHRcdH0sXG4gXHRcdFx0YWRkRGlzcG9zZUhhbmRsZXI6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gXHRcdFx0XHRob3QuX2Rpc3Bvc2VIYW5kbGVycy5wdXNoKGNhbGxiYWNrKTtcbiBcdFx0XHR9LFxuIFx0XHRcdHJlbW92ZURpc3Bvc2VIYW5kbGVyOiBmdW5jdGlvbihjYWxsYmFjaykge1xuIFx0XHRcdFx0dmFyIGlkeCA9IGhvdC5fZGlzcG9zZUhhbmRsZXJzLmluZGV4T2YoY2FsbGJhY2spO1xuIFx0XHRcdFx0aWYgKGlkeCA+PSAwKSBob3QuX2Rpc3Bvc2VIYW5kbGVycy5zcGxpY2UoaWR4LCAxKTtcbiBcdFx0XHR9LFxuXG4gXHRcdFx0Ly8gTWFuYWdlbWVudCBBUElcbiBcdFx0XHRjaGVjazogaG90Q2hlY2ssXG4gXHRcdFx0YXBwbHk6IGhvdEFwcGx5LFxuIFx0XHRcdHN0YXR1czogZnVuY3Rpb24obCkge1xuIFx0XHRcdFx0aWYgKCFsKSByZXR1cm4gaG90U3RhdHVzO1xuIFx0XHRcdFx0aG90U3RhdHVzSGFuZGxlcnMucHVzaChsKTtcbiBcdFx0XHR9LFxuIFx0XHRcdGFkZFN0YXR1c0hhbmRsZXI6IGZ1bmN0aW9uKGwpIHtcbiBcdFx0XHRcdGhvdFN0YXR1c0hhbmRsZXJzLnB1c2gobCk7XG4gXHRcdFx0fSxcbiBcdFx0XHRyZW1vdmVTdGF0dXNIYW5kbGVyOiBmdW5jdGlvbihsKSB7XG4gXHRcdFx0XHR2YXIgaWR4ID0gaG90U3RhdHVzSGFuZGxlcnMuaW5kZXhPZihsKTtcbiBcdFx0XHRcdGlmIChpZHggPj0gMCkgaG90U3RhdHVzSGFuZGxlcnMuc3BsaWNlKGlkeCwgMSk7XG4gXHRcdFx0fSxcblxuIFx0XHRcdC8vaW5oZXJpdCBmcm9tIHByZXZpb3VzIGRpc3Bvc2UgY2FsbFxuIFx0XHRcdGRhdGE6IGhvdEN1cnJlbnRNb2R1bGVEYXRhW21vZHVsZUlkXVxuIFx0XHR9O1xuIFx0XHRob3RDdXJyZW50Q2hpbGRNb2R1bGUgPSB1bmRlZmluZWQ7XG4gXHRcdHJldHVybiBob3Q7XG4gXHR9XG5cbiBcdHZhciBob3RTdGF0dXNIYW5kbGVycyA9IFtdO1xuIFx0dmFyIGhvdFN0YXR1cyA9IFwiaWRsZVwiO1xuXG4gXHRmdW5jdGlvbiBob3RTZXRTdGF0dXMobmV3U3RhdHVzKSB7XG4gXHRcdGhvdFN0YXR1cyA9IG5ld1N0YXR1cztcbiBcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBob3RTdGF0dXNIYW5kbGVycy5sZW5ndGg7IGkrKylcbiBcdFx0XHRob3RTdGF0dXNIYW5kbGVyc1tpXS5jYWxsKG51bGwsIG5ld1N0YXR1cyk7XG4gXHR9XG5cbiBcdC8vIHdoaWxlIGRvd25sb2FkaW5nXG4gXHR2YXIgaG90V2FpdGluZ0ZpbGVzID0gMDtcbiBcdHZhciBob3RDaHVua3NMb2FkaW5nID0gMDtcbiBcdHZhciBob3RXYWl0aW5nRmlsZXNNYXAgPSB7fTtcbiBcdHZhciBob3RSZXF1ZXN0ZWRGaWxlc01hcCA9IHt9O1xuIFx0dmFyIGhvdEF2YWlsYWJsZUZpbGVzTWFwID0ge307XG4gXHR2YXIgaG90RGVmZXJyZWQ7XG5cbiBcdC8vIFRoZSB1cGRhdGUgaW5mb1xuIFx0dmFyIGhvdFVwZGF0ZSwgaG90VXBkYXRlTmV3SGFzaDtcblxuIFx0ZnVuY3Rpb24gdG9Nb2R1bGVJZChpZCkge1xuIFx0XHR2YXIgaXNOdW1iZXIgPSAraWQgKyBcIlwiID09PSBpZDtcbiBcdFx0cmV0dXJuIGlzTnVtYmVyID8gK2lkIDogaWQ7XG4gXHR9XG5cbiBcdGZ1bmN0aW9uIGhvdENoZWNrKGFwcGx5KSB7XG4gXHRcdGlmIChob3RTdGF0dXMgIT09IFwiaWRsZVwiKSB7XG4gXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiY2hlY2soKSBpcyBvbmx5IGFsbG93ZWQgaW4gaWRsZSBzdGF0dXNcIik7XG4gXHRcdH1cbiBcdFx0aG90QXBwbHlPblVwZGF0ZSA9IGFwcGx5O1xuIFx0XHRob3RTZXRTdGF0dXMoXCJjaGVja1wiKTtcbiBcdFx0cmV0dXJuIGhvdERvd25sb2FkTWFuaWZlc3QoaG90UmVxdWVzdFRpbWVvdXQpLnRoZW4oZnVuY3Rpb24odXBkYXRlKSB7XG4gXHRcdFx0aWYgKCF1cGRhdGUpIHtcbiBcdFx0XHRcdGhvdFNldFN0YXR1cyhcImlkbGVcIik7XG4gXHRcdFx0XHRyZXR1cm4gbnVsbDtcbiBcdFx0XHR9XG4gXHRcdFx0aG90UmVxdWVzdGVkRmlsZXNNYXAgPSB7fTtcbiBcdFx0XHRob3RXYWl0aW5nRmlsZXNNYXAgPSB7fTtcbiBcdFx0XHRob3RBdmFpbGFibGVGaWxlc01hcCA9IHVwZGF0ZS5jO1xuIFx0XHRcdGhvdFVwZGF0ZU5ld0hhc2ggPSB1cGRhdGUuaDtcblxuIFx0XHRcdGhvdFNldFN0YXR1cyhcInByZXBhcmVcIik7XG4gXHRcdFx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiBcdFx0XHRcdGhvdERlZmVycmVkID0ge1xuIFx0XHRcdFx0XHRyZXNvbHZlOiByZXNvbHZlLFxuIFx0XHRcdFx0XHRyZWplY3Q6IHJlamVjdFxuIFx0XHRcdFx0fTtcbiBcdFx0XHR9KTtcbiBcdFx0XHRob3RVcGRhdGUgPSB7fTtcbiBcdFx0XHR2YXIgY2h1bmtJZCA9IDA7XG4gXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWxvbmUtYmxvY2tzXG4gXHRcdFx0e1xuIFx0XHRcdFx0LypnbG9iYWxzIGNodW5rSWQgKi9cbiBcdFx0XHRcdGhvdEVuc3VyZVVwZGF0ZUNodW5rKGNodW5rSWQpO1xuIFx0XHRcdH1cbiBcdFx0XHRpZiAoXG4gXHRcdFx0XHRob3RTdGF0dXMgPT09IFwicHJlcGFyZVwiICYmXG4gXHRcdFx0XHRob3RDaHVua3NMb2FkaW5nID09PSAwICYmXG4gXHRcdFx0XHRob3RXYWl0aW5nRmlsZXMgPT09IDBcbiBcdFx0XHQpIHtcbiBcdFx0XHRcdGhvdFVwZGF0ZURvd25sb2FkZWQoKTtcbiBcdFx0XHR9XG4gXHRcdFx0cmV0dXJuIHByb21pc2U7XG4gXHRcdH0pO1xuIFx0fVxuXG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdGZ1bmN0aW9uIGhvdEFkZFVwZGF0ZUNodW5rKGNodW5rSWQsIG1vcmVNb2R1bGVzKSB7XG4gXHRcdGlmICghaG90QXZhaWxhYmxlRmlsZXNNYXBbY2h1bmtJZF0gfHwgIWhvdFJlcXVlc3RlZEZpbGVzTWFwW2NodW5rSWRdKVxuIFx0XHRcdHJldHVybjtcbiBcdFx0aG90UmVxdWVzdGVkRmlsZXNNYXBbY2h1bmtJZF0gPSBmYWxzZTtcbiBcdFx0Zm9yICh2YXIgbW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdGhvdFVwZGF0ZVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmICgtLWhvdFdhaXRpbmdGaWxlcyA9PT0gMCAmJiBob3RDaHVua3NMb2FkaW5nID09PSAwKSB7XG4gXHRcdFx0aG90VXBkYXRlRG93bmxvYWRlZCgpO1xuIFx0XHR9XG4gXHR9XG5cbiBcdGZ1bmN0aW9uIGhvdEVuc3VyZVVwZGF0ZUNodW5rKGNodW5rSWQpIHtcbiBcdFx0aWYgKCFob3RBdmFpbGFibGVGaWxlc01hcFtjaHVua0lkXSkge1xuIFx0XHRcdGhvdFdhaXRpbmdGaWxlc01hcFtjaHVua0lkXSA9IHRydWU7XG4gXHRcdH0gZWxzZSB7XG4gXHRcdFx0aG90UmVxdWVzdGVkRmlsZXNNYXBbY2h1bmtJZF0gPSB0cnVlO1xuIFx0XHRcdGhvdFdhaXRpbmdGaWxlcysrO1xuIFx0XHRcdGhvdERvd25sb2FkVXBkYXRlQ2h1bmsoY2h1bmtJZCk7XG4gXHRcdH1cbiBcdH1cblxuIFx0ZnVuY3Rpb24gaG90VXBkYXRlRG93bmxvYWRlZCgpIHtcbiBcdFx0aG90U2V0U3RhdHVzKFwicmVhZHlcIik7XG4gXHRcdHZhciBkZWZlcnJlZCA9IGhvdERlZmVycmVkO1xuIFx0XHRob3REZWZlcnJlZCA9IG51bGw7XG4gXHRcdGlmICghZGVmZXJyZWQpIHJldHVybjtcbiBcdFx0aWYgKGhvdEFwcGx5T25VcGRhdGUpIHtcbiBcdFx0XHQvLyBXcmFwIGRlZmVycmVkIG9iamVjdCBpbiBQcm9taXNlIHRvIG1hcmsgaXQgYXMgYSB3ZWxsLWhhbmRsZWQgUHJvbWlzZSB0b1xuIFx0XHRcdC8vIGF2b2lkIHRyaWdnZXJpbmcgdW5jYXVnaHQgZXhjZXB0aW9uIHdhcm5pbmcgaW4gQ2hyb21lLlxuIFx0XHRcdC8vIFNlZSBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD00NjU2NjZcbiBcdFx0XHRQcm9taXNlLnJlc29sdmUoKVxuIFx0XHRcdFx0LnRoZW4oZnVuY3Rpb24oKSB7XG4gXHRcdFx0XHRcdHJldHVybiBob3RBcHBseShob3RBcHBseU9uVXBkYXRlKTtcbiBcdFx0XHRcdH0pXG4gXHRcdFx0XHQudGhlbihcbiBcdFx0XHRcdFx0ZnVuY3Rpb24ocmVzdWx0KSB7XG4gXHRcdFx0XHRcdFx0ZGVmZXJyZWQucmVzb2x2ZShyZXN1bHQpO1xuIFx0XHRcdFx0XHR9LFxuIFx0XHRcdFx0XHRmdW5jdGlvbihlcnIpIHtcbiBcdFx0XHRcdFx0XHRkZWZlcnJlZC5yZWplY3QoZXJyKTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0KTtcbiBcdFx0fSBlbHNlIHtcbiBcdFx0XHR2YXIgb3V0ZGF0ZWRNb2R1bGVzID0gW107XG4gXHRcdFx0Zm9yICh2YXIgaWQgaW4gaG90VXBkYXRlKSB7XG4gXHRcdFx0XHRpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGhvdFVwZGF0ZSwgaWQpKSB7XG4gXHRcdFx0XHRcdG91dGRhdGVkTW9kdWxlcy5wdXNoKHRvTW9kdWxlSWQoaWQpKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdFx0ZGVmZXJyZWQucmVzb2x2ZShvdXRkYXRlZE1vZHVsZXMpO1xuIFx0XHR9XG4gXHR9XG5cbiBcdGZ1bmN0aW9uIGhvdEFwcGx5KG9wdGlvbnMpIHtcbiBcdFx0aWYgKGhvdFN0YXR1cyAhPT0gXCJyZWFkeVwiKVxuIFx0XHRcdHRocm93IG5ldyBFcnJvcihcImFwcGx5KCkgaXMgb25seSBhbGxvd2VkIGluIHJlYWR5IHN0YXR1c1wiKTtcbiBcdFx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiBcdFx0dmFyIGNiO1xuIFx0XHR2YXIgaTtcbiBcdFx0dmFyIGo7XG4gXHRcdHZhciBtb2R1bGU7XG4gXHRcdHZhciBtb2R1bGVJZDtcblxuIFx0XHRmdW5jdGlvbiBnZXRBZmZlY3RlZFN0dWZmKHVwZGF0ZU1vZHVsZUlkKSB7XG4gXHRcdFx0dmFyIG91dGRhdGVkTW9kdWxlcyA9IFt1cGRhdGVNb2R1bGVJZF07XG4gXHRcdFx0dmFyIG91dGRhdGVkRGVwZW5kZW5jaWVzID0ge307XG5cbiBcdFx0XHR2YXIgcXVldWUgPSBvdXRkYXRlZE1vZHVsZXMubWFwKGZ1bmN0aW9uKGlkKSB7XG4gXHRcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0XHRjaGFpbjogW2lkXSxcbiBcdFx0XHRcdFx0aWQ6IGlkXG4gXHRcdFx0XHR9O1xuIFx0XHRcdH0pO1xuIFx0XHRcdHdoaWxlIChxdWV1ZS5sZW5ndGggPiAwKSB7XG4gXHRcdFx0XHR2YXIgcXVldWVJdGVtID0gcXVldWUucG9wKCk7XG4gXHRcdFx0XHR2YXIgbW9kdWxlSWQgPSBxdWV1ZUl0ZW0uaWQ7XG4gXHRcdFx0XHR2YXIgY2hhaW4gPSBxdWV1ZUl0ZW0uY2hhaW47XG4gXHRcdFx0XHRtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHRcdGlmICghbW9kdWxlIHx8IG1vZHVsZS5ob3QuX3NlbGZBY2NlcHRlZCkgY29udGludWU7XG4gXHRcdFx0XHRpZiAobW9kdWxlLmhvdC5fc2VsZkRlY2xpbmVkKSB7XG4gXHRcdFx0XHRcdHJldHVybiB7XG4gXHRcdFx0XHRcdFx0dHlwZTogXCJzZWxmLWRlY2xpbmVkXCIsXG4gXHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLFxuIFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZFxuIFx0XHRcdFx0XHR9O1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0aWYgKG1vZHVsZS5ob3QuX21haW4pIHtcbiBcdFx0XHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdFx0XHR0eXBlOiBcInVuYWNjZXB0ZWRcIixcbiBcdFx0XHRcdFx0XHRjaGFpbjogY2hhaW4sXG4gXHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkXG4gXHRcdFx0XHRcdH07XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1vZHVsZS5wYXJlbnRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0XHRcdHZhciBwYXJlbnRJZCA9IG1vZHVsZS5wYXJlbnRzW2ldO1xuIFx0XHRcdFx0XHR2YXIgcGFyZW50ID0gaW5zdGFsbGVkTW9kdWxlc1twYXJlbnRJZF07XG4gXHRcdFx0XHRcdGlmICghcGFyZW50KSBjb250aW51ZTtcbiBcdFx0XHRcdFx0aWYgKHBhcmVudC5ob3QuX2RlY2xpbmVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSkge1xuIFx0XHRcdFx0XHRcdHJldHVybiB7XG4gXHRcdFx0XHRcdFx0XHR0eXBlOiBcImRlY2xpbmVkXCIsXG4gXHRcdFx0XHRcdFx0XHRjaGFpbjogY2hhaW4uY29uY2F0KFtwYXJlbnRJZF0pLFxuIFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuIFx0XHRcdFx0XHRcdFx0cGFyZW50SWQ6IHBhcmVudElkXG4gXHRcdFx0XHRcdFx0fTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRpZiAob3V0ZGF0ZWRNb2R1bGVzLmluZGV4T2YocGFyZW50SWQpICE9PSAtMSkgY29udGludWU7XG4gXHRcdFx0XHRcdGlmIChwYXJlbnQuaG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRcdFx0XHRpZiAoIW91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXSlcbiBcdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXSA9IFtdO1xuIFx0XHRcdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXSwgW21vZHVsZUlkXSk7XG4gXHRcdFx0XHRcdFx0Y29udGludWU7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0ZGVsZXRlIG91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXTtcbiBcdFx0XHRcdFx0b3V0ZGF0ZWRNb2R1bGVzLnB1c2gocGFyZW50SWQpO1xuIFx0XHRcdFx0XHRxdWV1ZS5wdXNoKHtcbiBcdFx0XHRcdFx0XHRjaGFpbjogY2hhaW4uY29uY2F0KFtwYXJlbnRJZF0pLFxuIFx0XHRcdFx0XHRcdGlkOiBwYXJlbnRJZFxuIFx0XHRcdFx0XHR9KTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG5cbiBcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0dHlwZTogXCJhY2NlcHRlZFwiLFxuIFx0XHRcdFx0bW9kdWxlSWQ6IHVwZGF0ZU1vZHVsZUlkLFxuIFx0XHRcdFx0b3V0ZGF0ZWRNb2R1bGVzOiBvdXRkYXRlZE1vZHVsZXMsXG4gXHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llczogb3V0ZGF0ZWREZXBlbmRlbmNpZXNcbiBcdFx0XHR9O1xuIFx0XHR9XG5cbiBcdFx0ZnVuY3Rpb24gYWRkQWxsVG9TZXQoYSwgYikge1xuIFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYi5sZW5ndGg7IGkrKykge1xuIFx0XHRcdFx0dmFyIGl0ZW0gPSBiW2ldO1xuIFx0XHRcdFx0aWYgKGEuaW5kZXhPZihpdGVtKSA9PT0gLTEpIGEucHVzaChpdGVtKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBhdCBiZWdpbiBhbGwgdXBkYXRlcyBtb2R1bGVzIGFyZSBvdXRkYXRlZFxuIFx0XHQvLyB0aGUgXCJvdXRkYXRlZFwiIHN0YXR1cyBjYW4gcHJvcGFnYXRlIHRvIHBhcmVudHMgaWYgdGhleSBkb24ndCBhY2NlcHQgdGhlIGNoaWxkcmVuXG4gXHRcdHZhciBvdXRkYXRlZERlcGVuZGVuY2llcyA9IHt9O1xuIFx0XHR2YXIgb3V0ZGF0ZWRNb2R1bGVzID0gW107XG4gXHRcdHZhciBhcHBsaWVkVXBkYXRlID0ge307XG5cbiBcdFx0dmFyIHdhcm5VbmV4cGVjdGVkUmVxdWlyZSA9IGZ1bmN0aW9uIHdhcm5VbmV4cGVjdGVkUmVxdWlyZSgpIHtcbiBcdFx0XHRjb25zb2xlLndhcm4oXG4gXHRcdFx0XHRcIltITVJdIHVuZXhwZWN0ZWQgcmVxdWlyZShcIiArIHJlc3VsdC5tb2R1bGVJZCArIFwiKSB0byBkaXNwb3NlZCBtb2R1bGVcIlxuIFx0XHRcdCk7XG4gXHRcdH07XG5cbiBcdFx0Zm9yICh2YXIgaWQgaW4gaG90VXBkYXRlKSB7XG4gXHRcdFx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChob3RVcGRhdGUsIGlkKSkge1xuIFx0XHRcdFx0bW9kdWxlSWQgPSB0b01vZHVsZUlkKGlkKTtcbiBcdFx0XHRcdC8qKiBAdHlwZSB7VE9ET30gKi9cbiBcdFx0XHRcdHZhciByZXN1bHQ7XG4gXHRcdFx0XHRpZiAoaG90VXBkYXRlW2lkXSkge1xuIFx0XHRcdFx0XHRyZXN1bHQgPSBnZXRBZmZlY3RlZFN0dWZmKG1vZHVsZUlkKTtcbiBcdFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHRcdHJlc3VsdCA9IHtcbiBcdFx0XHRcdFx0XHR0eXBlOiBcImRpc3Bvc2VkXCIsXG4gXHRcdFx0XHRcdFx0bW9kdWxlSWQ6IGlkXG4gXHRcdFx0XHRcdH07XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHQvKiogQHR5cGUge0Vycm9yfGZhbHNlfSAqL1xuIFx0XHRcdFx0dmFyIGFib3J0RXJyb3IgPSBmYWxzZTtcbiBcdFx0XHRcdHZhciBkb0FwcGx5ID0gZmFsc2U7XG4gXHRcdFx0XHR2YXIgZG9EaXNwb3NlID0gZmFsc2U7XG4gXHRcdFx0XHR2YXIgY2hhaW5JbmZvID0gXCJcIjtcbiBcdFx0XHRcdGlmIChyZXN1bHQuY2hhaW4pIHtcbiBcdFx0XHRcdFx0Y2hhaW5JbmZvID0gXCJcXG5VcGRhdGUgcHJvcGFnYXRpb246IFwiICsgcmVzdWx0LmNoYWluLmpvaW4oXCIgLT4gXCIpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0c3dpdGNoIChyZXN1bHQudHlwZSkge1xuIFx0XHRcdFx0XHRjYXNlIFwic2VsZi1kZWNsaW5lZFwiOlxuIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRGVjbGluZWQpIG9wdGlvbnMub25EZWNsaW5lZChyZXN1bHQpO1xuIFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVEZWNsaW5lZClcbiBcdFx0XHRcdFx0XHRcdGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoXG4gXHRcdFx0XHRcdFx0XHRcdFwiQWJvcnRlZCBiZWNhdXNlIG9mIHNlbGYgZGVjbGluZTogXCIgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5tb2R1bGVJZCArXG4gXHRcdFx0XHRcdFx0XHRcdFx0Y2hhaW5JbmZvXG4gXHRcdFx0XHRcdFx0XHQpO1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0XHRjYXNlIFwiZGVjbGluZWRcIjpcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkRlY2xpbmVkKSBvcHRpb25zLm9uRGVjbGluZWQocmVzdWx0KTtcbiBcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRGVjbGluZWQpXG4gXHRcdFx0XHRcdFx0XHRhYm9ydEVycm9yID0gbmV3IEVycm9yKFxuIFx0XHRcdFx0XHRcdFx0XHRcIkFib3J0ZWQgYmVjYXVzZSBvZiBkZWNsaW5lZCBkZXBlbmRlbmN5OiBcIiArXG4gXHRcdFx0XHRcdFx0XHRcdFx0cmVzdWx0Lm1vZHVsZUlkICtcbiBcdFx0XHRcdFx0XHRcdFx0XHRcIiBpbiBcIiArXG4gXHRcdFx0XHRcdFx0XHRcdFx0cmVzdWx0LnBhcmVudElkICtcbiBcdFx0XHRcdFx0XHRcdFx0XHRjaGFpbkluZm9cbiBcdFx0XHRcdFx0XHRcdCk7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGNhc2UgXCJ1bmFjY2VwdGVkXCI6XG4gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25VbmFjY2VwdGVkKSBvcHRpb25zLm9uVW5hY2NlcHRlZChyZXN1bHQpO1xuIFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVVbmFjY2VwdGVkKVxuIFx0XHRcdFx0XHRcdFx0YWJvcnRFcnJvciA9IG5ldyBFcnJvcihcbiBcdFx0XHRcdFx0XHRcdFx0XCJBYm9ydGVkIGJlY2F1c2UgXCIgKyBtb2R1bGVJZCArIFwiIGlzIG5vdCBhY2NlcHRlZFwiICsgY2hhaW5JbmZvXG4gXHRcdFx0XHRcdFx0XHQpO1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0XHRjYXNlIFwiYWNjZXB0ZWRcIjpcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkFjY2VwdGVkKSBvcHRpb25zLm9uQWNjZXB0ZWQocmVzdWx0KTtcbiBcdFx0XHRcdFx0XHRkb0FwcGx5ID0gdHJ1ZTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0Y2FzZSBcImRpc3Bvc2VkXCI6XG4gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25EaXNwb3NlZCkgb3B0aW9ucy5vbkRpc3Bvc2VkKHJlc3VsdCk7XG4gXHRcdFx0XHRcdFx0ZG9EaXNwb3NlID0gdHJ1ZTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0ZGVmYXVsdDpcbiBcdFx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJVbmV4Y2VwdGlvbiB0eXBlIFwiICsgcmVzdWx0LnR5cGUpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0aWYgKGFib3J0RXJyb3IpIHtcbiBcdFx0XHRcdFx0aG90U2V0U3RhdHVzKFwiYWJvcnRcIik7XG4gXHRcdFx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChhYm9ydEVycm9yKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGlmIChkb0FwcGx5KSB7XG4gXHRcdFx0XHRcdGFwcGxpZWRVcGRhdGVbbW9kdWxlSWRdID0gaG90VXBkYXRlW21vZHVsZUlkXTtcbiBcdFx0XHRcdFx0YWRkQWxsVG9TZXQob3V0ZGF0ZWRNb2R1bGVzLCByZXN1bHQub3V0ZGF0ZWRNb2R1bGVzKTtcbiBcdFx0XHRcdFx0Zm9yIChtb2R1bGVJZCBpbiByZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXMpIHtcbiBcdFx0XHRcdFx0XHRpZiAoXG4gXHRcdFx0XHRcdFx0XHRPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoXG4gXHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5vdXRkYXRlZERlcGVuZGVuY2llcyxcbiBcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWRcbiBcdFx0XHRcdFx0XHRcdClcbiBcdFx0XHRcdFx0XHQpIHtcbiBcdFx0XHRcdFx0XHRcdGlmICghb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKVxuIFx0XHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0gPSBbXTtcbiBcdFx0XHRcdFx0XHRcdGFkZEFsbFRvU2V0KFxuIFx0XHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0sXG4gXHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5vdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF1cbiBcdFx0XHRcdFx0XHRcdCk7XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRpZiAoZG9EaXNwb3NlKSB7XG4gXHRcdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkTW9kdWxlcywgW3Jlc3VsdC5tb2R1bGVJZF0pO1xuIFx0XHRcdFx0XHRhcHBsaWVkVXBkYXRlW21vZHVsZUlkXSA9IHdhcm5VbmV4cGVjdGVkUmVxdWlyZTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBTdG9yZSBzZWxmIGFjY2VwdGVkIG91dGRhdGVkIG1vZHVsZXMgdG8gcmVxdWlyZSB0aGVtIGxhdGVyIGJ5IHRoZSBtb2R1bGUgc3lzdGVtXG4gXHRcdHZhciBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMgPSBbXTtcbiBcdFx0Zm9yIChpID0gMDsgaSA8IG91dGRhdGVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdG1vZHVsZUlkID0gb3V0ZGF0ZWRNb2R1bGVzW2ldO1xuIFx0XHRcdGlmIChcbiBcdFx0XHRcdGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdICYmXG4gXHRcdFx0XHRpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5ob3QuX3NlbGZBY2NlcHRlZCAmJlxuIFx0XHRcdFx0Ly8gcmVtb3ZlZCBzZWxmLWFjY2VwdGVkIG1vZHVsZXMgc2hvdWxkIG5vdCBiZSByZXF1aXJlZFxuIFx0XHRcdFx0YXBwbGllZFVwZGF0ZVttb2R1bGVJZF0gIT09IHdhcm5VbmV4cGVjdGVkUmVxdWlyZVxuIFx0XHRcdCkge1xuIFx0XHRcdFx0b3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzLnB1c2goe1xuIFx0XHRcdFx0XHRtb2R1bGU6IG1vZHVsZUlkLFxuIFx0XHRcdFx0XHRlcnJvckhhbmRsZXI6IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmhvdC5fc2VsZkFjY2VwdGVkXG4gXHRcdFx0XHR9KTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBOb3cgaW4gXCJkaXNwb3NlXCIgcGhhc2VcbiBcdFx0aG90U2V0U3RhdHVzKFwiZGlzcG9zZVwiKTtcbiBcdFx0T2JqZWN0LmtleXMoaG90QXZhaWxhYmxlRmlsZXNNYXApLmZvckVhY2goZnVuY3Rpb24oY2h1bmtJZCkge1xuIFx0XHRcdGlmIChob3RBdmFpbGFibGVGaWxlc01hcFtjaHVua0lkXSA9PT0gZmFsc2UpIHtcbiBcdFx0XHRcdGhvdERpc3Bvc2VDaHVuayhjaHVua0lkKTtcbiBcdFx0XHR9XG4gXHRcdH0pO1xuXG4gXHRcdHZhciBpZHg7XG4gXHRcdHZhciBxdWV1ZSA9IG91dGRhdGVkTW9kdWxlcy5zbGljZSgpO1xuIFx0XHR3aGlsZSAocXVldWUubGVuZ3RoID4gMCkge1xuIFx0XHRcdG1vZHVsZUlkID0gcXVldWUucG9wKCk7XG4gXHRcdFx0bW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0aWYgKCFtb2R1bGUpIGNvbnRpbnVlO1xuXG4gXHRcdFx0dmFyIGRhdGEgPSB7fTtcblxuIFx0XHRcdC8vIENhbGwgZGlzcG9zZSBoYW5kbGVyc1xuIFx0XHRcdHZhciBkaXNwb3NlSGFuZGxlcnMgPSBtb2R1bGUuaG90Ll9kaXNwb3NlSGFuZGxlcnM7XG4gXHRcdFx0Zm9yIChqID0gMDsgaiA8IGRpc3Bvc2VIYW5kbGVycy5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0Y2IgPSBkaXNwb3NlSGFuZGxlcnNbal07XG4gXHRcdFx0XHRjYihkYXRhKTtcbiBcdFx0XHR9XG4gXHRcdFx0aG90Q3VycmVudE1vZHVsZURhdGFbbW9kdWxlSWRdID0gZGF0YTtcblxuIFx0XHRcdC8vIGRpc2FibGUgbW9kdWxlICh0aGlzIGRpc2FibGVzIHJlcXVpcmVzIGZyb20gdGhpcyBtb2R1bGUpXG4gXHRcdFx0bW9kdWxlLmhvdC5hY3RpdmUgPSBmYWxzZTtcblxuIFx0XHRcdC8vIHJlbW92ZSBtb2R1bGUgZnJvbSBjYWNoZVxuIFx0XHRcdGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcblxuIFx0XHRcdC8vIHdoZW4gZGlzcG9zaW5nIHRoZXJlIGlzIG5vIG5lZWQgdG8gY2FsbCBkaXNwb3NlIGhhbmRsZXJcbiBcdFx0XHRkZWxldGUgb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdO1xuXG4gXHRcdFx0Ly8gcmVtb3ZlIFwicGFyZW50c1wiIHJlZmVyZW5jZXMgZnJvbSBhbGwgY2hpbGRyZW5cbiBcdFx0XHRmb3IgKGogPSAwOyBqIDwgbW9kdWxlLmNoaWxkcmVuLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgY2hpbGQgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZS5jaGlsZHJlbltqXV07XG4gXHRcdFx0XHRpZiAoIWNoaWxkKSBjb250aW51ZTtcbiBcdFx0XHRcdGlkeCA9IGNoaWxkLnBhcmVudHMuaW5kZXhPZihtb2R1bGVJZCk7XG4gXHRcdFx0XHRpZiAoaWR4ID49IDApIHtcbiBcdFx0XHRcdFx0Y2hpbGQucGFyZW50cy5zcGxpY2UoaWR4LCAxKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyByZW1vdmUgb3V0ZGF0ZWQgZGVwZW5kZW5jeSBmcm9tIG1vZHVsZSBjaGlsZHJlblxuIFx0XHR2YXIgZGVwZW5kZW5jeTtcbiBcdFx0dmFyIG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzO1xuIFx0XHRmb3IgKG1vZHVsZUlkIGluIG91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XG4gXHRcdFx0aWYgKFxuIFx0XHRcdFx0T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG91dGRhdGVkRGVwZW5kZW5jaWVzLCBtb2R1bGVJZClcbiBcdFx0XHQpIHtcbiBcdFx0XHRcdG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdFx0aWYgKG1vZHVsZSkge1xuIFx0XHRcdFx0XHRtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyA9IG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXTtcbiBcdFx0XHRcdFx0Zm9yIChqID0gMDsgaiA8IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHRcdFx0ZGVwZW5kZW5jeSA9IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzW2pdO1xuIFx0XHRcdFx0XHRcdGlkeCA9IG1vZHVsZS5jaGlsZHJlbi5pbmRleE9mKGRlcGVuZGVuY3kpO1xuIFx0XHRcdFx0XHRcdGlmIChpZHggPj0gMCkgbW9kdWxlLmNoaWxkcmVuLnNwbGljZShpZHgsIDEpO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gTm93IGluIFwiYXBwbHlcIiBwaGFzZVxuIFx0XHRob3RTZXRTdGF0dXMoXCJhcHBseVwiKTtcblxuIFx0XHRob3RDdXJyZW50SGFzaCA9IGhvdFVwZGF0ZU5ld0hhc2g7XG5cbiBcdFx0Ly8gaW5zZXJ0IG5ldyBjb2RlXG4gXHRcdGZvciAobW9kdWxlSWQgaW4gYXBwbGllZFVwZGF0ZSkge1xuIFx0XHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYXBwbGllZFVwZGF0ZSwgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IGFwcGxpZWRVcGRhdGVbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIGNhbGwgYWNjZXB0IGhhbmRsZXJzXG4gXHRcdHZhciBlcnJvciA9IG51bGw7XG4gXHRcdGZvciAobW9kdWxlSWQgaW4gb3V0ZGF0ZWREZXBlbmRlbmNpZXMpIHtcbiBcdFx0XHRpZiAoXG4gXHRcdFx0XHRPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob3V0ZGF0ZWREZXBlbmRlbmNpZXMsIG1vZHVsZUlkKVxuIFx0XHRcdCkge1xuIFx0XHRcdFx0bW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0XHRpZiAobW9kdWxlKSB7XG4gXHRcdFx0XHRcdG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzID0gb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdO1xuIFx0XHRcdFx0XHR2YXIgY2FsbGJhY2tzID0gW107XG4gXHRcdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdFx0XHRcdGRlcGVuZGVuY3kgPSBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llc1tpXTtcbiBcdFx0XHRcdFx0XHRjYiA9IG1vZHVsZS5ob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW2RlcGVuZGVuY3ldO1xuIFx0XHRcdFx0XHRcdGlmIChjYikge1xuIFx0XHRcdFx0XHRcdFx0aWYgKGNhbGxiYWNrcy5pbmRleE9mKGNiKSAhPT0gLTEpIGNvbnRpbnVlO1xuIFx0XHRcdFx0XHRcdFx0Y2FsbGJhY2tzLnB1c2goY2IpO1xuIFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgY2FsbGJhY2tzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0XHRcdFx0Y2IgPSBjYWxsYmFja3NbaV07XG4gXHRcdFx0XHRcdFx0dHJ5IHtcbiBcdFx0XHRcdFx0XHRcdGNiKG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzKTtcbiBcdFx0XHRcdFx0XHR9IGNhdGNoIChlcnIpIHtcbiBcdFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuIFx0XHRcdFx0XHRcdFx0XHRvcHRpb25zLm9uRXJyb3JlZCh7XG4gXHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJhY2NlcHQtZXJyb3JlZFwiLFxuIFx0XHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcbiBcdFx0XHRcdFx0XHRcdFx0XHRkZXBlbmRlbmN5SWQ6IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzW2ldLFxuIFx0XHRcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnJcbiBcdFx0XHRcdFx0XHRcdFx0fSk7XG4gXHRcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuIFx0XHRcdFx0XHRcdFx0XHRpZiAoIWVycm9yKSBlcnJvciA9IGVycjtcbiBcdFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBMb2FkIHNlbGYgYWNjZXB0ZWQgbW9kdWxlc1xuIFx0XHRmb3IgKGkgPSAwOyBpIDwgb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGl0ZW0gPSBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXNbaV07XG4gXHRcdFx0bW9kdWxlSWQgPSBpdGVtLm1vZHVsZTtcbiBcdFx0XHRob3RDdXJyZW50UGFyZW50cyA9IFttb2R1bGVJZF07XG4gXHRcdFx0dHJ5IHtcbiBcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpO1xuIFx0XHRcdH0gY2F0Y2ggKGVycikge1xuIFx0XHRcdFx0aWYgKHR5cGVvZiBpdGVtLmVycm9ySGFuZGxlciA9PT0gXCJmdW5jdGlvblwiKSB7XG4gXHRcdFx0XHRcdHRyeSB7XG4gXHRcdFx0XHRcdFx0aXRlbS5lcnJvckhhbmRsZXIoZXJyKTtcbiBcdFx0XHRcdFx0fSBjYXRjaCAoZXJyMikge1xuIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuIFx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuIFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcInNlbGYtYWNjZXB0LWVycm9yLWhhbmRsZXItZXJyb3JlZFwiLFxuIFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG4gXHRcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnIyLFxuIFx0XHRcdFx0XHRcdFx0XHRvcmlnaW5hbEVycm9yOiBlcnJcbiBcdFx0XHRcdFx0XHRcdH0pO1xuIFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuIFx0XHRcdFx0XHRcdFx0aWYgKCFlcnJvcikgZXJyb3IgPSBlcnIyO1xuIFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0XHRpZiAoIWVycm9yKSBlcnJvciA9IGVycjtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25FcnJvcmVkKSB7XG4gXHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuIFx0XHRcdFx0XHRcdFx0dHlwZTogXCJzZWxmLWFjY2VwdC1lcnJvcmVkXCIsXG4gXHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG4gXHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyXG4gXHRcdFx0XHRcdFx0fSk7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRpZiAoIWVycm9yKSBlcnJvciA9IGVycjtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIGhhbmRsZSBlcnJvcnMgaW4gYWNjZXB0IGhhbmRsZXJzIGFuZCBzZWxmIGFjY2VwdGVkIG1vZHVsZSBsb2FkXG4gXHRcdGlmIChlcnJvcikge1xuIFx0XHRcdGhvdFNldFN0YXR1cyhcImZhaWxcIik7XG4gXHRcdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcbiBcdFx0fVxuXG4gXHRcdGhvdFNldFN0YXR1cyhcImlkbGVcIik7XG4gXHRcdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlKSB7XG4gXHRcdFx0cmVzb2x2ZShvdXRkYXRlZE1vZHVsZXMpO1xuIFx0XHR9KTtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aG90OiBob3RDcmVhdGVNb2R1bGUobW9kdWxlSWQpLFxuIFx0XHRcdHBhcmVudHM6IChob3RDdXJyZW50UGFyZW50c1RlbXAgPSBob3RDdXJyZW50UGFyZW50cywgaG90Q3VycmVudFBhcmVudHMgPSBbXSwgaG90Q3VycmVudFBhcmVudHNUZW1wKSxcbiBcdFx0XHRjaGlsZHJlbjogW11cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgaG90Q3JlYXRlUmVxdWlyZShtb2R1bGVJZCkpO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHQvLyBfX3dlYnBhY2tfaGFzaF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSBmdW5jdGlvbigpIHsgcmV0dXJuIGhvdEN1cnJlbnRIYXNoOyB9O1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIGhvdENyZWF0ZVJlcXVpcmUoXCIuL3NyYy9pbmRleC5qc1wiKShfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiLy9pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG4vL2ltcG9ydCBwcmludCBmcm9tIFwiLi9wcmludC5qc1wiO1xyXG4vL2ltcG9ydCAnLi9zdHlsZXMuY3NzJ1xyXG5pbXBvcnQge2N1YmV9IGZyb20gJy4vbWF0aC5qcydcclxuXHJcbmZ1bmN0aW9uIGNvbXBvbmVudCgpe1xyXG4gICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwcmUnKTtcclxuICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gWydIZWxsbyB3ZWJwYWNrJywnNSBjdWJlZCBpcyBlcXVhbCB0byAnK2N1YmUoNSldLmpvaW4oJ1xcblxcbicpO1xyXG4gICAgcmV0dXJuIGVsZW1lbnQ7XHJcblxyXG5cclxuICAgLyogbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gXy5qb2luKFsnaGVsbG8nLCd3ZWJwYWNrJ10sJyAnKTtcclxuXHJcbiAgICBsZXQgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBidG4uaW5uZXJIVE1MID0gJ0NsaWNrIG1lIGFuZCBjaGVjayB0aGUgY29uc29sZSEnO1xyXG4gICAgYnRuLm9uY2xpY2s9cHJpbnQ7XHJcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGJ0bik7XHJcblxyXG4gICAgcmV0dXJuIGVsZW1lbnQ7Ki9cclxufVxyXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbXBvbmVudCgpKTtcclxuXHJcbi8qXHJcbmlmKG1vZHVsZS5ob3Qpe1xyXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoJy4vcHJpbnQuanMnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0FjY3BldGluZyB0aGUgdXBkYXRlZCBwcmludE1lIG1vZHVsZSEnKTtcclxuICAgICAgICBwcmludCgpO1xyXG4gICAgfSlcclxufSovXHJcbiIsImV4cG9ydCBmdW5jdGlvbiBzcXVyZSh4KXtcclxuICAgIHJldHVybiB4Kng7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGN1YmUoeCl7XHJcbiAgICByZXR1cm4geCp4Kng7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9