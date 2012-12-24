(function () {
    function b(e) {
        if (!d[e]) {
            var f = d[e] = {
                exports: {}
            };
            c[e].call(f.exports, a, f, b)
        }
        return d[e].exports
    }
    var a = this,
        c = b.modules = [],
        d = b.cache = [];
    c[0] = function (a, b, c) {
        function J(a) {
            n(a) && (a = document.getElementById(a));
            if ( !! a) {
                if (arguments.length > 1) {
                    var b = arguments[1],
                        c = arguments[2] || {};
                    a.src = j + "?url=" + b + "&" + B(c)
                }
                var d = y(s(a));
                if (d && d.instance) return d.instance;
                var e = m.indexOf(s(a)) > -1,
                    f = new F(a);
                l.push(new E(f, a, e));
                return f
            }
        }
        function D(a) {
            var b, c, d, e;
            try {
                c = JSON.parse(a.data)
            } catch (f) {}
            b = y(a.source), d = c.method, e = c.value, d === i.READY && (b ? (b.isReady = !0, C(b, k), v(k, b)) : m.push(a.source));
            if (!b || a.origin !== b.domain) return !1;
            var g = [];
            e !== undefined && g.push(e), C(b, d, g)
        }
        function C(a, b, c) {
            var d, e, f = a.callbacks[b] || [];
            for (d = 0, e = f.length; d < e; d++) f[d].apply(a.instance, c);
            if (p(b) || b === i.READY) a.callbacks[b] = []
        }
        function B(a) {
            var b, c, d = [];
            for (b in a) a.hasOwnProperty(b) && (c = a[b], d.push(b + "=" + (b === "start_track" ? parseInt(c, 10) : c ? "true" : "false")));
            return d.join("&")
        }
        function A(a, b, c) {
            var d, e, f;
            for (d = 0, e = b.length; d < e; d++) f = b[d], a[f] = z(f, c)
        }
        function z(a, b) {
            return function (c) {
                var d = o(c),
                    e = x(this),
                    f = !d && b ? c : null,
                    g = d && !b ? c : null;
                g && u(a, g, e), w(a, f, e.element);
                return this
            }
        }
        function y(a) {
            var b;
            q(function (c) {
                if (s(c.element) === a) {
                    b = c;
                    return !1
                }
            });
            return b
        }
        function x(a) {
            var b;
            q(function (c) {
                if (c.instance === a) {
                    b = c;
                    return !1
                }
            });
            return b
        }
        function w(a, b, c) {
            var d = s(c);
            if (!d.postMessage) return !1;
            var e = c.getAttribute("src").split("?")[0],
                f = JSON.stringify({
                    method: a,
                    value: b
                });
            e.substr(0, 2) === "//" && (e = window.location.protocol + e), d.postMessage(f, e)
        }
        function v(a, b) {
            var c = !0,
                d;
            b.callbacks[a] = [], q(function (b) {
                d = b.callbacks[a] || [];
                if (d.length) {
                    c = !1;
                    return !1
                }
            });
            return c
        }
        function u(a, b, c) {
            c.callbacks[a] = c.callbacks[a] || [], c.callbacks[a].push(b)
        }
        function t(a) {
            var b = [],
                c;
            for (c in a) a.hasOwnProperty(c) && b.push(a[c]);
            return b
        }
        function s(a) {
            return a.contentWindow
        }
        function r(a) {
            var b = "",
                c, d;
            a.substr(0, 2) === "//" && (a = window.location.protocol + a);
            var e = a.split("/");
            for (c = 0, d = e.length; c < d; c++) {
                if (c < 3) b += e[c];
                else break;
                c < 2 && (b += "/")
            }
            return b
        }
        function q(a) {
            var b, c, d;
            for (b = 0, c = l.length; b < c; b++) {
                d = a(l[b]);
                if (d === !1) break
            }
        }
        function p(a) {
            var b = !1,
                c;
            for (c in f) if (f.hasOwnProperty(c) && f[c] === a) {
                b = !0;
                break
            }
            return b
        }
        function o(a) {
            return !!(a && a.constructor && a.call && a.apply)
        }
        function n(a) {
            return !!(a === "" || a && a.charCodeAt && a.substr)
        }
        var d = this,
            e = c(1),
            f = c(2),
            g = c(3),
            h = e.bridge,
            i = e.api,
            j = "http://wt.soundcloud.com/player/",
            k = "__LATE_BINDING__",
            l = [],
            m = [],
            E = function (a, b, c) {
                this.instance = a, this.element = b, this.domain = r(b.getAttribute("src")), this.isReady = !! c, this.callbacks = {}
            }, F = function () {}, G = F.prototype = {
                load: function (a, b) {
                    if ( !! a) {
                        b = b || {};
                        var c = this,
                            d = x(this),
                            e = d.element,
                            f = e.src,
                            g = f.substr(0, f.indexOf("?"));
                        d.isReady = !1, e.onload = function () {
                            c.bind(i.READY, function () {
                                var a, c = d.callbacks;
                                for (a in c) c.hasOwnProperty(a) && a !== i.READY && w(h.ADD_LISTENER, a, d.element);
                                b.callback && b.callback()
                            })
                        }, e.src = g + "?url=" + a + "&" + B(b)
                    }
                },
                bind: function (a, b) {
                    var c = this,
                        d = x(this);
                    d && d.element && (a === i.READY && d.isReady ? setTimeout(b, 1) : d.isReady ? (u(a, b, d), w(h.ADD_LISTENER, a, d.element)) : u(k, function () {
                        c.bind(a, b)
                    }, d));
                    return this
                },
                unbind: function (a) {
                    var b = x(this);
                    if (b && b.element) {
                        var c = v(a, b);
                        a !== i.READY && c && w(h.REMOVE_LISTENER, a, b.element)
                    }
                }
            }, H = t(f),
            I = t(g);
        A(G, H), A(G, I, !0), window.addEventListener ? window.addEventListener("message", D, !1) : window.attachEvent("onmessage", D), J.Events = i, a.SC = a.SC || {}, a.SC.Widget = J
    }, c[1] = function (a, b, c) {
        var d = this;
        d.api = {
            LOAD_PROGRESS: "loadProgres",
            PLAY_PROGRESS: "playProgress",
            PLAY: "play",
            PAUSE: "pause",
            FINISH: "finish",
            SEEK: "seek",
            READY: "ready",
            OPEN_SHARE_PANEL: "sharePanelOpened",
            SHARE: "share",
            CLICK_DOWNLOAD: "downloadClicked",
            CLICK_BUY: "buyClicked"
        }, d.bridge = {
            REMOVE_LISTENER: "removeEventListener",
            ADD_LISTENER: "addEventListener"
        }
    }, c[2] = function (a, b, c) {
        var d = this;
        b.exports = {
            GET_VOLUME: "getVolume",
            GET_DURATION: "getDuration",
            GET_POSITION: "getPosition",
            GET_SOUNDS: "getSounds",
            GET_CURRENT_SOUND: "getCurrentSound",
            GET_CURRENT_SOUND_INDEX: "getCurrentSoundIndex",
            IS_PAUSED: "isPaused"
        }
    }, c[3] = function (a, b, c) {
        var d = this;
        b.exports = {
            PLAY: "play",
            PAUSE: "pause",
            TOGGLE: "toggle",
            SEEK_TO: "seekTo",
            SET_VOLUME: "setVolume",
            NEXT: "next",
            PREV: "prev",
            SKIP: "skip"
        }
    }, b(0)
})()