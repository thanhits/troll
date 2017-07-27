function initMainNavigation(e) {
    var t = jQuery("<span />", {
        "class": "dropdown-toggle"
    });
    e.find(".menu-item-has-children > a").after(t), e.find(".dropdown-toggle").on("click", function(e) {
        var t = jQuery(this);
        e.preventDefault(), e.stopPropagation(), t.hasClass("toggled-on") ? (t.removeClass("toggled-on"), t.next(".children, .sub-menu").removeClass("toggled-on")) : (t.parent().parent().find(".toggled-on").removeClass("toggled-on"), t.addClass("toggled-on"), t.next(".children, .sub-menu").addClass("toggled-on"))
    })
}

function fixedHeader() {
    if (jQuery(".fixed-header").length)
        if (jQuery(".fixed-top").length && jQuery(".no-top").length < 1) {
            new Waypoint.Sticky({
                element: jQuery(".fixed-top .top")[0]
            });
            bb.fixedHeader = jQuery(".fixed-top .top").outerHeight(!0)
        } else if (jQuery(".fixed-bottom").length && jQuery(".no-bottom").length < 1) {
        new Waypoint.Sticky({
            element: jQuery(".fixed-bottom .bottom")[0]
        });
        bb.fixedHeader = jQuery(".fixed-bottom .bottom").outerHeight(!0)
    } else if (jQuery(".fixed-both").length) {
        new Waypoint.Sticky({
            element: jQuery(".fixed-both")[0]
        });
        bb.fixedHeader = jQuery(".fixed-both").outerHeight(!0)
    }
}

function floatingPagination() {
    if (jQuery(".fixed-next-page").length) {
        var e = jQuery("#header"),
            t = e.height();
        bb.floatingPagination = jQuery(".fixed-next-page").outerHeight(!0), jQuery(window).scroll(function() {
            bb.scrollTop >= t ? jQuery(".fixed-next-page").addClass("stuck") : jQuery(".fixed-next-page").removeClass("stuck")
        })
    }
}

function headerAlignment() {
    var e = jQuery("#header .top").height(),
        t = jQuery("#header .bottom").height();
    jQuery("#header .top .container > *,#header .top .mobile-box > *").each(function() {
        var t = jQuery(this).innerHeight();
        jQuery(this).css({
            top: (e - t) / 2 + "px",
            opacity: 1
        })
    }), jQuery("#header .top .navigation-box .wrapper > *").each(function() {
        var t = jQuery(this).innerHeight();
        jQuery(this).css({
            top: (e - t) / 2 + "px"
        })
    }), jQuery("#header .bottom .container > *,#header .bottom .mobile-box > *").each(function() {
        var e = jQuery(this).innerHeight();
        jQuery(this).css({
            top: (t - e) / 2 + "px",
            opacity: 1
        })
    }), jQuery("#header .bottom .navigation-box .wrapper > *").each(function() {
        var e = jQuery(this).innerHeight();
        jQuery(this).css({
            top: (t - e) / 2 + "px"
        })
    })
}

function ShowFullPost(e) {
    var t = e.attr("width"),
        i = e.attr("height");
    i / t >= 3 && (e.parents(".post-thumbnail").addClass("show-short-media"), e.parents(".post").addClass("full-post-show"))
}

function setFormPlaceholders(e, t) {
        jQuery(e + " " + t).each(function() {
            jQuery(this).children("label").text() && jQuery(this).find("input").attr("placeholder", jQuery(this).children("label").text())
        })
    }! function(e, t, i) {
        function o(e, t) {
            return typeof e === t
        }

        function n() {
            var e, t, i, n, s, r, a;
            for (var l in w)
                if (w.hasOwnProperty(l)) {
                    if (e = [], t = w[l], t.name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length))
                        for (i = 0; i < t.options.aliases.length; i++) e.push(t.options.aliases[i].toLowerCase());
                    for (n = o(t.fn, "function") ? t.fn() : t.fn, s = 0; s < e.length; s++) r = e[s], a = r.split("."), 1 === a.length ? x[a[0]] = n : (!x[a[0]] || x[a[0]] instanceof Boolean || (x[a[0]] = new Boolean(x[a[0]])), x[a[0]][a[1]] = n), m.push((n ? "" : "no-") + a.join("-"))
                }
        }

        function s(e) {
            var t = k.className,
                i = x._config.classPrefix || "";
            if (T && (t = t.baseVal), x._config.enableJSClass) {
                var o = new RegExp("(^|\\s)" + i + "no-js(\\s|$)");
                t = t.replace(o, "$1" + i + "js$2")
            }
            x._config.enableClasses && (t += " " + i + e.join(" " + i), T ? k.className.baseVal = t : k.className = t)
        }

        function r() {
            return "function" != typeof t.createElement ? t.createElement(arguments[0]) : T ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0]) : t.createElement.apply(t, arguments)
        }

        function a() {
            var e = t.body;
            return e || (e = r(T ? "svg" : "body"), e.fake = !0), e
        }

        function l(e, i, o, n) {
            var s, l, d, c, p = "modernizr",
                u = r("div"),
                h = a();
            if (parseInt(o, 10))
                for (; o--;) d = r("div"), d.id = n ? n[o] : p + (o + 1), u.appendChild(d);
            return s = r("style"), s.type = "text/css", s.id = "s" + p, (h.fake ? h : u).appendChild(s), h.appendChild(u), s.styleSheet ? s.styleSheet.cssText = e : s.appendChild(t.createTextNode(e)), u.id = p, h.fake && (h.style.background = "", h.style.overflow = "hidden", c = k.style.overflow, k.style.overflow = "hidden", k.appendChild(h)), l = i(u, e), h.fake ? (h.parentNode.removeChild(h), k.style.overflow = c, k.offsetHeight) : u.parentNode.removeChild(u), !!l
        }

        function d(e, t) {
            return !!~("" + e).indexOf(t)
        }

        function c(e) {
            return e.replace(/([a-z])-([a-z])/g, function(e, t, i) {
                return t + i.toUpperCase()
            }).replace(/^-/, "")
        }

        function p(e, t) {
            return function() {
                return e.apply(t, arguments)
            }
        }

        function u(e, t, i) {
            var n;
            for (var s in e)
                if (e[s] in t) return i === !1 ? e[s] : (n = t[e[s]], o(n, "function") ? p(n, i || t) : n);
            return !1
        }

        function h(e) {
            return e.replace(/([A-Z])/g, function(e, t) {
                return "-" + t.toLowerCase()
            }).replace(/^ms-/, "-ms-")
        }

        function f(t, o) {
            var n = t.length;
            if ("CSS" in e && "supports" in e.CSS) {
                for (; n--;)
                    if (e.CSS.supports(h(t[n]), o)) return !0;
                return !1
            }
            if ("CSSSupportsRule" in e) {
                for (var s = []; n--;) s.push("(" + h(t[n]) + ":" + o + ")");
                return s = s.join(" or "), l("@supports (" + s + ") { #modernizr { position: absolute; } }", function(e) {
                    return "absolute" == getComputedStyle(e, null).position
                })
            }
            return i
        }

        function g(e, t, n, s) {
            function a() {
                p && (delete E.style, delete E.modElem)
            }
            if (s = !o(s, "undefined") && s, !o(n, "undefined")) {
                var l = f(e, n);
                if (!o(l, "undefined")) return l
            }
            for (var p, u, h, g, y, v = ["modernizr", "tspan"]; !E.style;) p = !0, E.modElem = r(v.shift()), E.style = E.modElem.style;
            for (h = e.length, u = 0; h > u; u++)
                if (g = e[u], y = E.style[g], d(g, "-") && (g = c(g)), E.style[g] !== i) {
                    if (s || o(n, "undefined")) return a(), "pfx" != t || g;
                    try {
                        E.style[g] = n
                    } catch (m) {}
                    if (E.style[g] != y) return a(), "pfx" != t || g
                }
            return a(), !1
        }

        function y(e, t, i, n, s) {
            var r = e.charAt(0).toUpperCase() + e.slice(1),
                a = (e + " " + _.join(r + " ") + r).split(" ");
            return o(t, "string") || o(t, "undefined") ? g(a, t, n, s) : (a = (e + " " + P.join(r + " ") + r).split(" "), u(a, t, i))
        }

        function v(e, t, o) {
            return y(e, i, i, t, o)
        }
        var m = [],
            w = [],
            b = {
                _version: "3.3.1",
                _config: {
                    classPrefix: "",
                    enableClasses: !0,
                    enableJSClass: !0,
                    usePrefixes: !0
                },
                _q: [],
                on: function(e, t) {
                    var i = this;
                    setTimeout(function() {
                        t(i[e])
                    }, 0)
                },
                addTest: function(e, t, i) {
                    w.push({
                        name: e,
                        fn: t,
                        options: i
                    })
                },
                addAsyncTest: function(e) {
                    w.push({
                        name: null,
                        fn: e
                    })
                }
            },
            x = function() {};
        x.prototype = b, x = new x, x.addTest("svg", !!t.createElementNS && !!t.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect);
        var k = t.documentElement,
            T = "svg" === k.nodeName.toLowerCase();
        x.addTest("audio", function() {
            var e = r("audio"),
                t = !1;
            try {
                (t = !!e.canPlayType) && (t = new Boolean(t), t.ogg = e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), t.mp3 = e.canPlayType('audio/mpeg; codecs="mp3"').replace(/^no$/, ""), t.opus = e.canPlayType('audio/ogg; codecs="opus"') || e.canPlayType('audio/webm; codecs="opus"').replace(/^no$/, ""), t.wav = e.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), t.m4a = (e.canPlayType("audio/x-m4a;") || e.canPlayType("audio/aac;")).replace(/^no$/, ""))
            } catch (i) {}
            return t
        }), x.addTest("video", function() {
            var e = r("video"),
                t = !1;
            try {
                (t = !!e.canPlayType) && (t = new Boolean(t), t.ogg = e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), t.h264 = e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), t.webm = e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""), t.vp9 = e.canPlayType('video/webm; codecs="vp9"').replace(/^no$/, ""), t.hls = e.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/, ""))
            } catch (i) {}
            return t
        });
        var S = b._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
        b._prefixes = S;
        var C = b.testStyles = l;
        x.addTest("touchevents", function() {
            var i;
            if ("ontouchstart" in e || e.DocumentTouch && t instanceof DocumentTouch) i = !0;
            else {
                var o = ["@media (", S.join("touch-enabled),("), "heartz", ")", "{#modernizr{top:9px;position:absolute}}"].join("");
                C(o, function(e) {
                    i = 9 === e.offsetTop
                })
            }
            return i
        }), C("#modernizr{display: table; direction: ltr}#modernizr div{display: table-cell; padding: 10px}", function(e) {
            var t, i = e.childNodes;
            t = i[0].offsetLeft < i[1].offsetLeft, x.addTest("displaytable", t, {
                aliases: ["display-table"]
            })
        }, 2), C("#modernizr div {width:1px} #modernizr div:nth-child(2n) {width:2px;}", function(e) {
            for (var t = e.getElementsByTagName("div"), i = !0, o = 0; 5 > o; o++) i = i && t[o].offsetWidth === o % 2 + 1;
            x.addTest("nthchild", i)
        }, 5), C("#modernizr { height: 50vh; }", function(t) {
            var i = parseInt(e.innerHeight / 2, 10),
                o = parseInt((e.getComputedStyle ? getComputedStyle(t, null) : t.currentStyle).height, 10);
            x.addTest("cssvhunit", o == i)
        }), C("#modernizr { width: 50vw; }", function(t) {
            var i = parseInt(e.innerWidth / 2, 10),
                o = parseInt((e.getComputedStyle ? getComputedStyle(t, null) : t.currentStyle).width, 10);
            x.addTest("cssvwunit", o == i)
        });
        var $ = "Moz O ms Webkit",
            _ = b._config.usePrefixes ? $.split(" ") : [];
        b._cssomPrefixes = _;
        var P = b._config.usePrefixes ? $.toLowerCase().split(" ") : [];
        b._domPrefixes = P;
        var A = {
            elem: r("modernizr")
        };
        x._q.push(function() {
            delete A.elem
        });
        var E = {
            style: A.elem.style
        };
        x._q.unshift(function() {
                delete E.style
            }), b.testAllProps = y, b.testAllProps = v, x.addTest("cssanimations", v("animationName", "a", !0)),
            function() {
                x.addTest("csscolumns", function() {
                    var e = !1,
                        t = v("columnCount");
                    try {
                        (e = !!t) && (e = new Boolean(e))
                    } catch (i) {}
                    return e
                });
                for (var e, t, i = ["Width", "Span", "Fill", "Gap", "Rule", "RuleColor", "RuleStyle", "RuleWidth", "BreakBefore", "BreakAfter", "BreakInside"], o = 0; o < i.length; o++) e = i[o].toLowerCase(), t = v("column" + i[o]), ("breakbefore" === e || "breakafter" === e || "breakinside" == e) && (t = t || v(i[o])), x.addTest("csscolumns." + e, t)
            }(), x.addTest("csstransforms", function() {
                return -1 === navigator.userAgent.indexOf("Android 2.") && v("transform", "scale(1)", !0)
            }), T || ! function(e, t) {
                function i(e, t) {
                    var i = e.createElement("p"),
                        o = e.getElementsByTagName("head")[0] || e.documentElement;
                    return i.innerHTML = "x<style>" + t + "</style>", o.insertBefore(i.lastChild, o.firstChild)
                }

                function o() {
                    var e = S.elements;
                    return "string" == typeof e ? e.split(" ") : e
                }

                function n(e, t) {
                    var i = S.elements;
                    "string" != typeof i && (i = i.join(" ")), "string" != typeof e && (e = e.join(" ")), S.elements = i + " " + e, d(t)
                }

                function s(e) {
                    var t = T[e[x]];
                    return t || (t = {}, k++, e[x] = k, T[k] = t), t
                }

                function r(e, i, o) {
                    if (i || (i = t), y) return i.createElement(e);
                    o || (o = s(i));
                    var n;
                    return n = o.cache[e] ? o.cache[e].cloneNode() : b.test(e) ? (o.cache[e] = o.createElem(e)).cloneNode() : o.createElem(e), !n.canHaveChildren || w.test(e) || n.tagUrn ? n : o.frag.appendChild(n)
                }

                function a(e, i) {
                    if (e || (e = t), y) return e.createDocumentFragment();
                    i = i || s(e);
                    for (var n = i.frag.cloneNode(), r = 0, a = o(), l = a.length; l > r; r++) n.createElement(a[r]);
                    return n
                }

                function l(e, t) {
                    t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()), e.createElement = function(i) {
                        return S.shivMethods ? r(i, e, t) : t.createElem(i)
                    }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + o().join().replace(/[\w\-:]+/g, function(e) {
                        return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")'
                    }) + ");return n}")(S, t.frag)
                }

                function d(e) {
                    e || (e = t);
                    var o = s(e);
                    return !S.shivCSS || g || o.hasCSS || (o.hasCSS = !!i(e, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), y || l(e, o), e
                }

                function c(e) {
                    for (var t, i = e.getElementsByTagName("*"), n = i.length, s = RegExp("^(?:" + o().join("|") + ")$", "i"), r = []; n--;) t = i[n], s.test(t.nodeName) && r.push(t.applyElement(p(t)));
                    return r
                }

                function p(e) {
                    for (var t, i = e.attributes, o = i.length, n = e.ownerDocument.createElement($ + ":" + e.nodeName); o--;) t = i[o], t.specified && n.setAttribute(t.nodeName, t.nodeValue);
                    return n.style.cssText = e.style.cssText, n
                }

                function u(e) {
                    for (var t, i = e.split("{"), n = i.length, s = RegExp("(^|[\\s,>+~])(" + o().join("|") + ")(?=[[\\s,>+~#.:]|$)", "gi"), r = "$1" + $ + "\\:$2"; n--;) t = i[n] = i[n].split("}"), t[t.length - 1] = t[t.length - 1].replace(s, r), i[n] = t.join("}");
                    return i.join("{")
                }

                function h(e) {
                    for (var t = e.length; t--;) e[t].removeNode()
                }

                function f(e) {
                    function t() {
                        clearTimeout(r._removeSheetTimer), o && o.removeNode(!0), o = null
                    }
                    var o, n, r = s(e),
                        a = e.namespaces,
                        l = e.parentWindow;
                    return !_ || e.printShived ? e : ("undefined" == typeof a[$] && a.add($), l.attachEvent("onbeforeprint", function() {
                        t();
                        for (var s, r, a, l = e.styleSheets, d = [], p = l.length, h = Array(p); p--;) h[p] = l[p];
                        for (; a = h.pop();)
                            if (!a.disabled && C.test(a.media)) {
                                try {
                                    s = a.imports, r = s.length
                                } catch (f) {
                                    r = 0
                                }
                                for (p = 0; r > p; p++) h.push(s[p]);
                                try {
                                    d.push(a.cssText)
                                } catch (f) {}
                            }
                        d = u(d.reverse().join("")), n = c(e), o = i(e, d)
                    }), l.attachEvent("onafterprint", function() {
                        h(n), clearTimeout(r._removeSheetTimer), r._removeSheetTimer = setTimeout(t, 500)
                    }), e.printShived = !0, e)
                }
                var g, y, v = "3.7.3",
                    m = e.html5 || {},
                    w = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                    b = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                    x = "_html5shiv",
                    k = 0,
                    T = {};
                ! function() {
                    try {
                        var e = t.createElement("a");
                        e.innerHTML = "<xyz></xyz>", g = "hidden" in e, y = 1 == e.childNodes.length || function() {
                            t.createElement("a");
                            var e = t.createDocumentFragment();
                            return "undefined" == typeof e.cloneNode || "undefined" == typeof e.createDocumentFragment || "undefined" == typeof e.createElement
                        }()
                    } catch (i) {
                        g = !0, y = !0
                    }
                }();
                var S = {
                    elements: m.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",
                    version: v,
                    shivCSS: m.shivCSS !== !1,
                    supportsUnknownElements: y,
                    shivMethods: m.shivMethods !== !1,
                    type: "default",
                    shivDocument: d,
                    createElement: r,
                    createDocumentFragment: a,
                    addElements: n
                };
                e.html5 = S, d(t);
                var C = /^$|\b(?:all|print)\b/,
                    $ = "html5shiv",
                    _ = !y && function() {
                        var i = t.documentElement;
                        return !("undefined" == typeof t.namespaces || "undefined" == typeof t.parentWindow || "undefined" == typeof i.applyElement || "undefined" == typeof i.removeNode || "undefined" == typeof e.attachEvent)
                    }();
                S.type += " print", S.shivPrint = f, f(t), "object" == typeof module && module.exports && (module.exports = S)
            }("undefined" != typeof e ? e : this, t), n(), s(m), delete b.addTest, delete b.addAsyncTest;
        for (var j = 0; j < x._q.length; j++) x._q[j]();
        e.Modernizr = x
    }(window, document), ! function() {
        "use strict";

        function e(o) {
            if (!o) throw new Error("No options passed to Waypoint constructor");
            if (!o.element) throw new Error("No element option passed to Waypoint constructor");
            if (!o.handler) throw new Error("No handler option passed to Waypoint constructor");
            this.key = "waypoint-" + t, this.options = e.Adapter.extend({}, e.defaults, o), this.element = this.options.element, this.adapter = new e.Adapter(this.element), this.callback = o.handler, this.axis = this.options.horizontal ? "horizontal" : "vertical", this.enabled = this.options.enabled, this.triggerPoint = null, this.group = e.Group.findOrCreate({
                name: this.options.group,
                axis: this.axis
            }), this.context = e.Context.findOrCreateByElement(this.options.context), e.offsetAliases[this.options.offset] && (this.options.offset = e.offsetAliases[this.options.offset]), this.group.add(this), this.context.add(this), i[this.key] = this, t += 1
        }
        var t = 0,
            i = {};
        e.prototype.queueTrigger = function(e) {
            this.group.queueTrigger(this, e)
        }, e.prototype.trigger = function(e) {
            this.enabled && this.callback && this.callback.apply(this, e)
        }, e.prototype.destroy = function() {
            this.context.remove(this), this.group.remove(this), delete i[this.key]
        }, e.prototype.disable = function() {
            return this.enabled = !1, this
        }, e.prototype.enable = function() {
            return this.context.refresh(), this.enabled = !0, this
        }, e.prototype.next = function() {
            return this.group.next(this)
        }, e.prototype.previous = function() {
            return this.group.previous(this)
        }, e.invokeAll = function(e) {
            var t = [];
            for (var o in i) t.push(i[o]);
            for (var n = 0, s = t.length; s > n; n++) t[n][e]()
        }, e.destroyAll = function() {
            e.invokeAll("destroy")
        }, e.disableAll = function() {
            e.invokeAll("disable")
        }, e.enableAll = function() {
            e.invokeAll("enable")
        }, e.refreshAll = function() {
            e.Context.refreshAll()
        }, e.viewportHeight = function() {
            return window.innerHeight || document.documentElement.clientHeight
        }, e.viewportWidth = function() {
            return document.documentElement.clientWidth
        }, e.adapters = [], e.defaults = {
            context: window,
            continuous: !0,
            enabled: !0,
            group: "default",
            horizontal: !1,
            offset: 0
        }, e.offsetAliases = {
            "bottom-in-view": function() {
                return this.context.innerHeight() - this.adapter.outerHeight()
            },
            "right-in-view": function() {
                return this.context.innerWidth() - this.adapter.outerWidth()
            }
        }, window.Waypoint = e
    }(),
    function() {
        "use strict";

        function e(e) {
            window.setTimeout(e, 1e3 / 60)
        }

        function t(e) {
            this.element = e, this.Adapter = n.Adapter, this.adapter = new this.Adapter(e), this.key = "waypoint-context-" + i, this.didScroll = !1, this.didResize = !1, this.oldScroll = {
                x: this.adapter.scrollLeft(),
                y: this.adapter.scrollTop()
            }, this.waypoints = {
                vertical: {},
                horizontal: {}
            }, e.waypointContextKey = this.key, o[e.waypointContextKey] = this, i += 1, this.createThrottledScrollHandler(), this.createThrottledResizeHandler()
        }
        var i = 0,
            o = {},
            n = window.Waypoint,
            s = window.onload;
        t.prototype.add = function(e) {
            var t = e.options.horizontal ? "horizontal" : "vertical";
            this.waypoints[t][e.key] = e, this.refresh()
        }, t.prototype.checkEmpty = function() {
            var e = this.Adapter.isEmptyObject(this.waypoints.horizontal),
                t = this.Adapter.isEmptyObject(this.waypoints.vertical);
            e && t && (this.adapter.off(".waypoints"), delete o[this.key])
        }, t.prototype.createThrottledResizeHandler = function() {
            function e() {
                t.handleResize(), t.didResize = !1
            }
            var t = this;
            this.adapter.on("resize.waypoints", function() {
                t.didResize || (t.didResize = !0, n.requestAnimationFrame(e))
            })
        }, t.prototype.createThrottledScrollHandler = function() {
            function e() {
                t.handleScroll(), t.didScroll = !1
            }
            var t = this;
            this.adapter.on("scroll.waypoints", function() {
                (!t.didScroll || n.isTouch) && (t.didScroll = !0, n.requestAnimationFrame(e))
            })
        }, t.prototype.handleResize = function() {
            n.Context.refreshAll()
        }, t.prototype.handleScroll = function() {
            var e = {},
                t = {
                    horizontal: {
                        newScroll: this.adapter.scrollLeft(),
                        oldScroll: this.oldScroll.x,
                        forward: "right",
                        backward: "left"
                    },
                    vertical: {
                        newScroll: this.adapter.scrollTop(),
                        oldScroll: this.oldScroll.y,
                        forward: "down",
                        backward: "up"
                    }
                };
            for (var i in t) {
                var o = t[i],
                    n = o.newScroll > o.oldScroll,
                    s = n ? o.forward : o.backward;
                for (var r in this.waypoints[i]) {
                    var a = this.waypoints[i][r],
                        l = o.oldScroll < a.triggerPoint,
                        d = o.newScroll >= a.triggerPoint,
                        c = l && d,
                        p = !l && !d;
                    (c || p) && (a.queueTrigger(s), e[a.group.id] = a.group)
                }
            }
            for (var u in e) e[u].flushTriggers();
            this.oldScroll = {
                x: t.horizontal.newScroll,
                y: t.vertical.newScroll
            }
        }, t.prototype.innerHeight = function() {
            return this.element == this.element.window ? n.viewportHeight() : this.adapter.innerHeight()
        }, t.prototype.remove = function(e) {
            delete this.waypoints[e.axis][e.key], this.checkEmpty()
        }, t.prototype.innerWidth = function() {
            return this.element == this.element.window ? n.viewportWidth() : this.adapter.innerWidth()
        }, t.prototype.destroy = function() {
            var e = [];
            for (var t in this.waypoints)
                for (var i in this.waypoints[t]) e.push(this.waypoints[t][i]);
            for (var o = 0, n = e.length; n > o; o++) e[o].destroy()
        }, t.prototype.refresh = function() {
            var e, t = this.element == this.element.window,
                i = t ? void 0 : this.adapter.offset(),
                o = {};
            this.handleScroll(), e = {
                horizontal: {
                    contextOffset: t ? 0 : i.left,
                    contextScroll: t ? 0 : this.oldScroll.x,
                    contextDimension: this.innerWidth(),
                    oldScroll: this.oldScroll.x,
                    forward: "right",
                    backward: "left",
                    offsetProp: "left"
                },
                vertical: {
                    contextOffset: t ? 0 : i.top,
                    contextScroll: t ? 0 : this.oldScroll.y,
                    contextDimension: this.innerHeight(),
                    oldScroll: this.oldScroll.y,
                    forward: "down",
                    backward: "up",
                    offsetProp: "top"
                }
            };
            for (var s in e) {
                var r = e[s];
                for (var a in this.waypoints[s]) {
                    var l, d, c, p, u, h = this.waypoints[s][a],
                        f = h.options.offset,
                        g = h.triggerPoint,
                        y = 0,
                        v = null == g;
                    h.element !== h.element.window && (y = h.adapter.offset()[r.offsetProp]), "function" == typeof f ? f = f.apply(h) : "string" == typeof f && (f = parseFloat(f), h.options.offset.indexOf("%") > -1 && (f = Math.ceil(r.contextDimension * f / 100))), l = r.contextScroll - r.contextOffset, h.triggerPoint = y + l - f, d = g < r.oldScroll, c = h.triggerPoint >= r.oldScroll, p = d && c, u = !d && !c, !v && p ? (h.queueTrigger(r.backward), o[h.group.id] = h.group) : !v && u ? (h.queueTrigger(r.forward), o[h.group.id] = h.group) : v && r.oldScroll >= h.triggerPoint && (h.queueTrigger(r.forward), o[h.group.id] = h.group)
                }
            }
            return n.requestAnimationFrame(function() {
                for (var e in o) o[e].flushTriggers()
            }), this
        }, t.findOrCreateByElement = function(e) {
            return t.findByElement(e) || new t(e)
        }, t.refreshAll = function() {
            for (var e in o) o[e].refresh()
        }, t.findByElement = function(e) {
            return o[e.waypointContextKey]
        }, window.onload = function() {
            s && s(), t.refreshAll()
        }, n.requestAnimationFrame = function(t) {
            var i = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || e;
            i.call(window, t)
        }, n.Context = t
    }(),
    function() {
        "use strict";

        function e(e, t) {
            return e.triggerPoint - t.triggerPoint
        }

        function t(e, t) {
            return t.triggerPoint - e.triggerPoint
        }

        function i(e) {
            this.name = e.name, this.axis = e.axis, this.id = this.name + "-" + this.axis, this.waypoints = [], this.clearTriggerQueues(), o[this.axis][this.name] = this
        }
        var o = {
                vertical: {},
                horizontal: {}
            },
            n = window.Waypoint;
        i.prototype.add = function(e) {
            this.waypoints.push(e)
        }, i.prototype.clearTriggerQueues = function() {
            this.triggerQueues = {
                up: [],
                down: [],
                left: [],
                right: []
            }
        }, i.prototype.flushTriggers = function() {
            for (var i in this.triggerQueues) {
                var o = this.triggerQueues[i],
                    n = "up" === i || "left" === i;
                o.sort(n ? t : e);
                for (var s = 0, r = o.length; r > s; s += 1) {
                    var a = o[s];
                    (a.options.continuous || s === o.length - 1) && a.trigger([i])
                }
            }
            this.clearTriggerQueues()
        }, i.prototype.next = function(t) {
            this.waypoints.sort(e);
            var i = n.Adapter.inArray(t, this.waypoints),
                o = i === this.waypoints.length - 1;
            return o ? null : this.waypoints[i + 1]
        }, i.prototype.previous = function(t) {
            this.waypoints.sort(e);
            var i = n.Adapter.inArray(t, this.waypoints);
            return i ? this.waypoints[i - 1] : null
        }, i.prototype.queueTrigger = function(e, t) {
            this.triggerQueues[t].push(e)
        }, i.prototype.remove = function(e) {
            var t = n.Adapter.inArray(e, this.waypoints);
            t > -1 && this.waypoints.splice(t, 1)
        }, i.prototype.first = function() {
            return this.waypoints[0]
        }, i.prototype.last = function() {
            return this.waypoints[this.waypoints.length - 1]
        }, i.findOrCreate = function(e) {
            return o[e.axis][e.name] || new i(e)
        }, n.Group = i
    }(),
    function() {
        "use strict";

        function e(e) {
            this.$element = t(e)
        }
        var t = window.jQuery,
            i = window.Waypoint;
        t.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], function(t, i) {
            e.prototype[i] = function() {
                var e = Array.prototype.slice.call(arguments);
                return this.$element[i].apply(this.$element, e)
            }
        }), t.each(["extend", "inArray", "isEmptyObject"], function(i, o) {
            e[o] = t[o]
        }), i.adapters.push({
            name: "jquery",
            Adapter: e
        }), i.Adapter = e
    }(),
    function() {
        "use strict";

        function e(e) {
            return function() {
                var i = [],
                    o = arguments[0];
                return e.isFunction(arguments[0]) && (o = e.extend({}, arguments[1]), o.handler = arguments[0]), this.each(function() {
                    var n = e.extend({}, o, {
                        element: this
                    });
                    "string" == typeof n.context && (n.context = e(this).closest(n.context)[0]), i.push(new t(n))
                }), i
            }
        }
        var t = window.Waypoint;
        window.jQuery && (window.jQuery.fn.waypoint = e(window.jQuery)), window.Zepto && (window.Zepto.fn.waypoint = e(window.Zepto))
    }(), ! function() {
        "use strict";

        function e(o) {
            this.options = t.extend({}, i.defaults, e.defaults, o), this.element = this.options.element, this.$element = t(this.element), this.createWrapper(), this.createWaypoint()
        }
        var t = window.jQuery,
            i = window.Waypoint;
        e.prototype.createWaypoint = function() {
            var e = this.options.handler;
            this.waypoint = new i(t.extend({}, this.options, {
                element: this.wrapper,
                handler: t.proxy(function(t) {
                    var i = this.options.direction.indexOf(t) > -1,
                        o = i ? this.$element.outerHeight(!0) : "";
                    this.$wrapper.height(o), this.$element.toggleClass(this.options.stuckClass, i), e && e.call(this, t)
                }, this)
            }))
        }, e.prototype.createWrapper = function() {
            this.options.wrapper && this.$element.wrap(this.options.wrapper), this.$wrapper = this.$element.parent(), this.wrapper = this.$wrapper[0]
        }, e.prototype.destroy = function() {
            this.$element.parent()[0] === this.wrapper && (this.waypoint.destroy(), this.$element.removeClass(this.options.stuckClass), this.options.wrapper && this.$element.unwrap())
        }, e.defaults = {
            wrapper: '<div class="sticky-wrapper" />',
            stuckClass: "stuck",
            direction: "down right"
        }, i.Sticky = e
    }(), ! function() {
        "use strict";

        function e() {}

        function t(e) {
            this.options = i.Adapter.extend({}, t.defaults, e), this.axis = this.options.horizontal ? "horizontal" : "vertical", this.waypoints = [], this.element = this.options.element, this.createWaypoints()
        }
        var i = window.Waypoint;
        t.prototype.createWaypoints = function() {
            for (var e = {
                    vertical: [{
                        down: "enter",
                        up: "exited",
                        offset: "100%"
                    }, {
                        down: "entered",
                        up: "exit",
                        offset: "bottom-in-view"
                    }, {
                        down: "exit",
                        up: "entered",
                        offset: 0
                    }, {
                        down: "exited",
                        up: "enter",
                        offset: function() {
                            return -this.adapter.outerHeight()
                        }
                    }],
                    horizontal: [{
                        right: "enter",
                        left: "exited",
                        offset: "100%"
                    }, {
                        right: "entered",
                        left: "exit",
                        offset: "right-in-view"
                    }, {
                        right: "exit",
                        left: "entered",
                        offset: 0
                    }, {
                        right: "exited",
                        left: "enter",
                        offset: function() {
                            return -this.adapter.outerWidth()
                        }
                    }]
                }, t = 0, i = e[this.axis].length; i > t; t++) {
                var o = e[this.axis][t];
                this.createWaypoint(o)
            }
        }, t.prototype.createWaypoint = function(e) {
            var t = this;
            this.waypoints.push(new i({
                context: this.options.context,
                element: this.options.element,
                enabled: this.options.enabled,
                handler: function(e) {
                    return function(i) {
                        t.options[e[i]].call(t, i)
                    }
                }(e),
                offset: e.offset,
                horizontal: this.options.horizontal
            }))
        }, t.prototype.destroy = function() {
            for (var e = 0, t = this.waypoints.length; t > e; e++) this.waypoints[e].destroy();
            this.waypoints = []
        }, t.prototype.disable = function() {
            for (var e = 0, t = this.waypoints.length; t > e; e++) this.waypoints[e].disable()
        }, t.prototype.enable = function() {
            for (var e = 0, t = this.waypoints.length; t > e; e++) this.waypoints[e].enable()
        }, t.defaults = {
            context: window,
            enabled: !0,
            enter: e,
            entered: e,
            exit: e,
            exited: e
        }, i.Inview = t
    }(), ! function(e) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
    }(function(e) {
        "use strict";
        var t = window.Slick || {};
        t = function() {
            function t(t, o) {
                var n, s = this;
                s.defaults = {
                    accessibility: !0,
                    adaptiveHeight: !1,
                    appendArrows: e(t),
                    appendDots: e(t),
                    arrows: !0,
                    asNavFor: null,
                    prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                    nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                    autoplay: !1,
                    autoplaySpeed: 3e3,
                    centerMode: !1,
                    centerPadding: "50px",
                    cssEase: "ease",
                    customPaging: function(t, i) {
                        return e('<button type="button" data-role="none" role="button" tabindex="0" />').text(i + 1)
                    },
                    dots: !1,
                    dotsClass: "slick-dots",
                    draggable: !0,
                    easing: "linear",
                    edgeFriction: .35,
                    fade: !1,
                    focusOnSelect: !1,
                    infinite: !0,
                    initialSlide: 0,
                    lazyLoad: "ondemand",
                    mobileFirst: !1,
                    pauseOnHover: !0,
                    pauseOnFocus: !0,
                    pauseOnDotsHover: !1,
                    respondTo: "window",
                    responsive: null,
                    rows: 1,
                    rtl: !1,
                    slide: "",
                    slidesPerRow: 1,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 500,
                    swipe: !0,
                    swipeToSlide: !1,
                    touchMove: !0,
                    touchThreshold: 5,
                    useCSS: !0,
                    useTransform: !0,
                    variableWidth: !1,
                    vertical: !1,
                    verticalSwiping: !1,
                    waitForAnimate: !0,
                    zIndex: 1e3
                }, s.initials = {
                    animating: !1,
                    dragging: !1,
                    autoPlayTimer: null,
                    currentDirection: 0,
                    currentLeft: null,
                    currentSlide: 0,
                    direction: 1,
                    $dots: null,
                    listWidth: null,
                    listHeight: null,
                    loadIndex: 0,
                    $nextArrow: null,
                    $prevArrow: null,
                    slideCount: null,
                    slideWidth: null,
                    $slideTrack: null,
                    $slides: null,
                    sliding: !1,
                    slideOffset: 0,
                    swipeLeft: null,
                    $list: null,
                    touchObject: {},
                    transformsEnabled: !1,
                    unslicked: !1
                }, e.extend(s, s.initials), s.activeBreakpoint = null, s.animType = null, s.animProp = null, s.breakpoints = [], s.breakpointSettings = [], s.cssTransitions = !1, s.focussed = !1, s.interrupted = !1, s.hidden = "hidden", s.paused = !0, s.positionProp = null, s.respondTo = null, s.rowCount = 1, s.shouldClick = !0, s.$slider = e(t), s.$slidesCache = null, s.transformType = null, s.transitionType = null, s.visibilityChange = "visibilitychange", s.windowWidth = 0, s.windowTimer = null, n = e(t).data("slick") || {}, s.options = e.extend({}, s.defaults, o, n), s.currentSlide = s.options.initialSlide, s.originalSettings = s.options, "undefined" != typeof document.mozHidden ? (s.hidden = "mozHidden", s.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (s.hidden = "webkitHidden", s.visibilityChange = "webkitvisibilitychange"), s.autoPlay = e.proxy(s.autoPlay, s), s.autoPlayClear = e.proxy(s.autoPlayClear, s), s.autoPlayIterator = e.proxy(s.autoPlayIterator, s), s.changeSlide = e.proxy(s.changeSlide, s), s.clickHandler = e.proxy(s.clickHandler, s), s.selectHandler = e.proxy(s.selectHandler, s), s.setPosition = e.proxy(s.setPosition, s), s.swipeHandler = e.proxy(s.swipeHandler, s), s.dragHandler = e.proxy(s.dragHandler, s), s.keyHandler = e.proxy(s.keyHandler, s), s.instanceUid = i++, s.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, s.registerBreakpoints(), s.init(!0)
            }
            var i = 0;
            return t
        }(), t.prototype.activateADA = function() {
            var e = this;
            e.$slideTrack.find(".slick-active").attr({
                "aria-hidden": "false"
            }).find("a, input, button, select").attr({
                tabindex: "0"
            })
        }, t.prototype.addSlide = t.prototype.slickAdd = function(t, i, o) {
            var n = this;
            if ("boolean" == typeof i) o = i, i = null;
            else if (0 > i || i >= n.slideCount) return !1;
            n.unload(), "number" == typeof i ? 0 === i && 0 === n.$slides.length ? e(t).appendTo(n.$slideTrack) : o ? e(t).insertBefore(n.$slides.eq(i)) : e(t).insertAfter(n.$slides.eq(i)) : o === !0 ? e(t).prependTo(n.$slideTrack) : e(t).appendTo(n.$slideTrack), n.$slides = n.$slideTrack.children(this.options.slide), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.append(n.$slides), n.$slides.each(function(t, i) {
                e(i).attr("data-slick-index", t)
            }), n.$slidesCache = n.$slides, n.reinit()
        }, t.prototype.animateHeight = function() {
            var e = this;
            if (1 === e.options.slidesToShow && e.options.adaptiveHeight === !0 && e.options.vertical === !1) {
                var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
                e.$list.animate({
                    height: t
                }, e.options.speed)
            }
        }, t.prototype.animateSlide = function(t, i) {
            var o = {},
                n = this;
            n.animateHeight(), n.options.rtl === !0 && n.options.vertical === !1 && (t = -t), n.transformsEnabled === !1 ? n.options.vertical === !1 ? n.$slideTrack.animate({
                left: t
            }, n.options.speed, n.options.easing, i) : n.$slideTrack.animate({
                top: t
            }, n.options.speed, n.options.easing, i) : n.cssTransitions === !1 ? (n.options.rtl === !0 && (n.currentLeft = -n.currentLeft), e({
                animStart: n.currentLeft
            }).animate({
                animStart: t
            }, {
                duration: n.options.speed,
                easing: n.options.easing,
                step: function(e) {
                    e = Math.ceil(e), n.options.vertical === !1 ? (o[n.animType] = "translate(" + e + "px, 0px)", n.$slideTrack.css(o)) : (o[n.animType] = "translate(0px," + e + "px)", n.$slideTrack.css(o))
                },
                complete: function() {
                    i && i.call()
                }
            })) : (n.applyTransition(), t = Math.ceil(t), o[n.animType] = n.options.vertical === !1 ? "translate3d(" + t + "px, 0px, 0px)" : "translate3d(0px," + t + "px, 0px)", n.$slideTrack.css(o), i && setTimeout(function() {
                n.disableTransition(), i.call()
            }, n.options.speed))
        }, t.prototype.getNavTarget = function() {
            var t = this,
                i = t.options.asNavFor;
            return i && null !== i && (i = e(i).not(t.$slider)), i
        }, t.prototype.asNavFor = function(t) {
            var i = this,
                o = i.getNavTarget();
            null !== o && "object" == typeof o && o.each(function() {
                var i = e(this).slick("getSlick");
                i.unslicked || i.slideHandler(t, !0)
            })
        }, t.prototype.applyTransition = function(e) {
            var t = this,
                i = {};
            i[t.transitionType] = t.options.fade === !1 ? t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : "opacity " + t.options.speed + "ms " + t.options.cssEase, t.options.fade === !1 ? t.$slideTrack.css(i) : t.$slides.eq(e).css(i)
        }, t.prototype.autoPlay = function() {
            var e = this;
            e.autoPlayClear(), e.slideCount > e.options.slidesToShow && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed))
        }, t.prototype.autoPlayClear = function() {
            var e = this;
            e.autoPlayTimer && clearInterval(e.autoPlayTimer)
        }, t.prototype.autoPlayIterator = function() {
            var e = this,
                t = e.currentSlide + e.options.slidesToScroll;
            e.paused || e.interrupted || e.focussed || (e.options.infinite === !1 && (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1 ? e.direction = 0 : 0 === e.direction && (t = e.currentSlide - e.options.slidesToScroll, e.currentSlide - 1 === 0 && (e.direction = 1))), e.slideHandler(t))
        }, t.prototype.buildArrows = function() {
            var t = this;
            t.options.arrows === !0 && (t.$prevArrow = e(t.options.prevArrow).addClass("slick-arrow"), t.$nextArrow = e(t.options.nextArrow).addClass("slick-arrow"), t.slideCount > t.options.slidesToShow ? (t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.prependTo(t.options.appendArrows), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows), t.options.infinite !== !0 && t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({
                "aria-disabled": "true",
                tabindex: "-1"
            }))
        }, t.prototype.buildDots = function() {
            var t, i, o = this;
            if (o.options.dots === !0 && o.slideCount > o.options.slidesToShow) {
                for (o.$slider.addClass("slick-dotted"), i = e("<ul />").addClass(o.options.dotsClass), t = 0; t <= o.getDotCount(); t += 1) i.append(e("<li />").append(o.options.customPaging.call(this, o, t)));
                o.$dots = i.appendTo(o.options.appendDots),
                    o.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
            }
        }, t.prototype.buildOut = function() {
            var t = this;
            t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), t.slideCount = t.$slides.length, t.$slides.each(function(t, i) {
                e(i).attr("data-slick-index", t).data("originalStyling", e(i).attr("style") || "")
            }), t.$slider.addClass("slick-slider"), t.$slideTrack = 0 === t.slideCount ? e('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent(), t.$list = t.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), t.$slideTrack.css("opacity", 0), (t.options.centerMode === !0 || t.options.swipeToSlide === !0) && (t.options.slidesToScroll = 1), e("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"), t.setupInfinite(), t.buildArrows(), t.buildDots(), t.updateDots(), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), t.options.draggable === !0 && t.$list.addClass("draggable")
        }, t.prototype.buildRows = function() {
            var e, t, i, o, n, s, r, a = this;
            if (o = document.createDocumentFragment(), s = a.$slider.children(), a.options.rows > 1) {
                for (r = a.options.slidesPerRow * a.options.rows, n = Math.ceil(s.length / r), e = 0; n > e; e++) {
                    var l = document.createElement("div");
                    for (t = 0; t < a.options.rows; t++) {
                        var d = document.createElement("div");
                        for (i = 0; i < a.options.slidesPerRow; i++) {
                            var c = e * r + (t * a.options.slidesPerRow + i);
                            s.get(c) && d.appendChild(s.get(c))
                        }
                        l.appendChild(d)
                    }
                    o.appendChild(l)
                }
                a.$slider.empty().append(o), a.$slider.children().children().children().css({
                    width: 100 / a.options.slidesPerRow + "%",
                    display: "inline-block"
                })
            }
        }, t.prototype.checkResponsive = function(t, i) {
            var o, n, s, r = this,
                a = !1,
                l = r.$slider.width(),
                d = window.innerWidth || e(window).width();
            if ("window" === r.respondTo ? s = d : "slider" === r.respondTo ? s = l : "min" === r.respondTo && (s = Math.min(d, l)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
                n = null;
                for (o in r.breakpoints) r.breakpoints.hasOwnProperty(o) && (r.originalSettings.mobileFirst === !1 ? s < r.breakpoints[o] && (n = r.breakpoints[o]) : s > r.breakpoints[o] && (n = r.breakpoints[o]));
                null !== n ? null !== r.activeBreakpoint ? (n !== r.activeBreakpoint || i) && (r.activeBreakpoint = n, "unslick" === r.breakpointSettings[n] ? r.unslick(n) : (r.options = e.extend({}, r.originalSettings, r.breakpointSettings[n]), t === !0 && (r.currentSlide = r.options.initialSlide), r.refresh(t)), a = n) : (r.activeBreakpoint = n, "unslick" === r.breakpointSettings[n] ? r.unslick(n) : (r.options = e.extend({}, r.originalSettings, r.breakpointSettings[n]), t === !0 && (r.currentSlide = r.options.initialSlide), r.refresh(t)), a = n) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, t === !0 && (r.currentSlide = r.options.initialSlide), r.refresh(t), a = n), t || a === !1 || r.$slider.trigger("breakpoint", [r, a])
            }
        }, t.prototype.changeSlide = function(t, i) {
            var o, n, s, r = this,
                a = e(t.currentTarget);
            switch (a.is("a") && t.preventDefault(), a.is("li") || (a = a.closest("li")), s = r.slideCount % r.options.slidesToScroll !== 0, o = s ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, t.data.message) {
                case "previous":
                    n = 0 === o ? r.options.slidesToScroll : r.options.slidesToShow - o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - n, !1, i);
                    break;
                case "next":
                    n = 0 === o ? r.options.slidesToScroll : o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + n, !1, i);
                    break;
                case "index":
                    var l = 0 === t.data.index ? 0 : t.data.index || a.index() * r.options.slidesToScroll;
                    r.slideHandler(r.checkNavigable(l), !1, i), a.children().trigger("focus");
                    break;
                default:
                    return
            }
        }, t.prototype.checkNavigable = function(e) {
            var t, i, o = this;
            if (t = o.getNavigableIndexes(), i = 0, e > t[t.length - 1]) e = t[t.length - 1];
            else
                for (var n in t) {
                    if (e < t[n]) {
                        e = i;
                        break
                    }
                    i = t[n]
                }
            return e
        }, t.prototype.cleanUpEvents = function() {
            var t = this;
            t.options.dots && null !== t.$dots && e("li", t.$dots).off("click.slick", t.changeSlide).off("mouseenter.slick", e.proxy(t.interrupt, t, !0)).off("mouseleave.slick", e.proxy(t.interrupt, t, !1)), t.$slider.off("focus.slick blur.slick"), t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide), t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide)), t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler), t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler), t.$list.off("touchend.slick mouseup.slick", t.swipeHandler), t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler), t.$list.off("click.slick", t.clickHandler), e(document).off(t.visibilityChange, t.visibility), t.cleanUpSlideEvents(), t.options.accessibility === !0 && t.$list.off("keydown.slick", t.keyHandler), t.options.focusOnSelect === !0 && e(t.$slideTrack).children().off("click.slick", t.selectHandler), e(window).off("orientationchange.slick.slick-" + t.instanceUid, t.orientationChange), e(window).off("resize.slick.slick-" + t.instanceUid, t.resize), e("[draggable!=true]", t.$slideTrack).off("dragstart", t.preventDefault), e(window).off("load.slick.slick-" + t.instanceUid, t.setPosition), e(document).off("ready.slick.slick-" + t.instanceUid, t.setPosition)
        }, t.prototype.cleanUpSlideEvents = function() {
            var t = this;
            t.$list.off("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.off("mouseleave.slick", e.proxy(t.interrupt, t, !1))
        }, t.prototype.cleanUpRows = function() {
            var e, t = this;
            t.options.rows > 1 && (e = t.$slides.children().children(), e.removeAttr("style"), t.$slider.empty().append(e))
        }, t.prototype.clickHandler = function(e) {
            var t = this;
            t.shouldClick === !1 && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault())
        }, t.prototype.destroy = function(t) {
            var i = this;
            i.autoPlayClear(), i.touchObject = {}, i.cleanUpEvents(), e(".slick-cloned", i.$slider).detach(), i.$dots && i.$dots.remove(), i.$prevArrow && i.$prevArrow.length && (i.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove()), i.$nextArrow && i.$nextArrow.length && (i.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove()), i.$slides && (i.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
                e(this).attr("style", e(this).data("originalStyling"))
            }), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.detach(), i.$list.detach(), i.$slider.append(i.$slides)), i.cleanUpRows(), i.$slider.removeClass("slick-slider"), i.$slider.removeClass("slick-initialized"), i.$slider.removeClass("slick-dotted"), i.unslicked = !0, t || i.$slider.trigger("destroy", [i])
        }, t.prototype.disableTransition = function(e) {
            var t = this,
                i = {};
            i[t.transitionType] = "", t.options.fade === !1 ? t.$slideTrack.css(i) : t.$slides.eq(e).css(i)
        }, t.prototype.fadeSlide = function(e, t) {
            var i = this;
            i.cssTransitions === !1 ? (i.$slides.eq(e).css({
                zIndex: i.options.zIndex
            }), i.$slides.eq(e).animate({
                opacity: 1
            }, i.options.speed, i.options.easing, t)) : (i.applyTransition(e), i.$slides.eq(e).css({
                opacity: 1,
                zIndex: i.options.zIndex
            }), t && setTimeout(function() {
                i.disableTransition(e), t.call()
            }, i.options.speed))
        }, t.prototype.fadeSlideOut = function(e) {
            var t = this;
            t.cssTransitions === !1 ? t.$slides.eq(e).animate({
                opacity: 0,
                zIndex: t.options.zIndex - 2
            }, t.options.speed, t.options.easing) : (t.applyTransition(e), t.$slides.eq(e).css({
                opacity: 0,
                zIndex: t.options.zIndex - 2
            }))
        }, t.prototype.filterSlides = t.prototype.slickFilter = function(e) {
            var t = this;
            null !== e && (t.$slidesCache = t.$slides, t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.filter(e).appendTo(t.$slideTrack), t.reinit())
        }, t.prototype.focusHandler = function() {
            var t = this;
            t.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", function(i) {
                i.stopImmediatePropagation();
                var o = e(this);
                setTimeout(function() {
                    t.options.pauseOnFocus && (t.focussed = o.is(":focus"), t.autoPlay())
                }, 0)
            })
        }, t.prototype.getCurrent = t.prototype.slickCurrentSlide = function() {
            var e = this;
            return e.currentSlide
        }, t.prototype.getDotCount = function() {
            var e = this,
                t = 0,
                i = 0,
                o = 0;
            if (e.options.infinite === !0)
                for (; t < e.slideCount;) ++o, t = i + e.options.slidesToScroll, i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
            else if (e.options.centerMode === !0) o = e.slideCount;
            else if (e.options.asNavFor)
                for (; t < e.slideCount;) ++o, t = i + e.options.slidesToScroll, i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
            else o = 1 + Math.ceil((e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll);
            return o - 1
        }, t.prototype.getLeft = function(e) {
            var t, i, o, n = this,
                s = 0;
            return n.slideOffset = 0, i = n.$slides.first().outerHeight(!0), n.options.infinite === !0 ? (n.slideCount > n.options.slidesToShow && (n.slideOffset = n.slideWidth * n.options.slidesToShow * -1, s = i * n.options.slidesToShow * -1), n.slideCount % n.options.slidesToScroll !== 0 && e + n.options.slidesToScroll > n.slideCount && n.slideCount > n.options.slidesToShow && (e > n.slideCount ? (n.slideOffset = (n.options.slidesToShow - (e - n.slideCount)) * n.slideWidth * -1, s = (n.options.slidesToShow - (e - n.slideCount)) * i * -1) : (n.slideOffset = n.slideCount % n.options.slidesToScroll * n.slideWidth * -1, s = n.slideCount % n.options.slidesToScroll * i * -1))) : e + n.options.slidesToShow > n.slideCount && (n.slideOffset = (e + n.options.slidesToShow - n.slideCount) * n.slideWidth, s = (e + n.options.slidesToShow - n.slideCount) * i), n.slideCount <= n.options.slidesToShow && (n.slideOffset = 0, s = 0), n.options.centerMode === !0 && n.options.infinite === !0 ? n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2) - n.slideWidth : n.options.centerMode === !0 && (n.slideOffset = 0, n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2)), t = n.options.vertical === !1 ? e * n.slideWidth * -1 + n.slideOffset : e * i * -1 + s, n.options.variableWidth === !0 && (o = n.$slideTrack.children(".slick-slide").eq(n.slideCount <= n.options.slidesToShow || n.options.infinite === !1 ? e : e + n.options.slidesToShow), t = n.options.rtl === !0 ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, n.options.centerMode === !0 && (o = n.$slideTrack.children(".slick-slide").eq(n.slideCount <= n.options.slidesToShow || n.options.infinite === !1 ? e : e + n.options.slidesToShow + 1), t = n.options.rtl === !0 ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, t += (n.$list.width() - o.outerWidth()) / 2)), t
        }, t.prototype.getOption = t.prototype.slickGetOption = function(e) {
            var t = this;
            return t.options[e]
        }, t.prototype.getNavigableIndexes = function() {
            var e, t = this,
                i = 0,
                o = 0,
                n = [];
            for (t.options.infinite === !1 ? e = t.slideCount : (i = -1 * t.options.slidesToScroll, o = -1 * t.options.slidesToScroll, e = 2 * t.slideCount); e > i;) n.push(i), i = o + t.options.slidesToScroll, o += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
            return n
        }, t.prototype.getSlick = function() {
            return this
        }, t.prototype.getSlideCount = function() {
            var t, i, o, n = this;
            return o = n.options.centerMode === !0 ? n.slideWidth * Math.floor(n.options.slidesToShow / 2) : 0, n.options.swipeToSlide === !0 ? (n.$slideTrack.find(".slick-slide").each(function(t, s) {
                return s.offsetLeft - o + e(s).outerWidth() / 2 > -1 * n.swipeLeft ? (i = s, !1) : void 0
            }), t = Math.abs(e(i).attr("data-slick-index") - n.currentSlide) || 1) : n.options.slidesToScroll
        }, t.prototype.goTo = t.prototype.slickGoTo = function(e, t) {
            var i = this;
            i.changeSlide({
                data: {
                    message: "index",
                    index: parseInt(e)
                }
            }, t)
        }, t.prototype.init = function(t) {
            var i = this;
            e(i.$slider).hasClass("slick-initialized") || (e(i.$slider).addClass("slick-initialized"), i.buildRows(), i.buildOut(), i.setProps(), i.startLoad(), i.loadSlider(), i.initializeEvents(), i.updateArrows(), i.updateDots(), i.checkResponsive(!0), i.focusHandler()), t && i.$slider.trigger("init", [i]), i.options.accessibility === !0 && i.initADA(), i.options.autoplay && (i.paused = !1, i.autoPlay())
        }, t.prototype.initADA = function() {
            var t = this;
            t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({
                "aria-hidden": "true",
                tabindex: "-1"
            }).find("a, input, button, select").attr({
                tabindex: "-1"
            }), t.$slideTrack.attr("role", "listbox"), t.$slides.not(t.$slideTrack.find(".slick-cloned")).each(function(i) {
                e(this).attr({
                    role: "option",
                    "aria-describedby": "slick-slide" + t.instanceUid + i
                })
            }), null !== t.$dots && t.$dots.attr("role", "tablist").find("li").each(function(i) {
                e(this).attr({
                    role: "presentation",
                    "aria-selected": "false",
                    "aria-controls": "navigation" + t.instanceUid + i,
                    id: "slick-slide" + t.instanceUid + i
                })
            }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), t.activateADA()
        }, t.prototype.initArrowEvents = function() {
            var e = this;
            e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow.off("click.slick").on("click.slick", {
                message: "previous"
            }, e.changeSlide), e.$nextArrow.off("click.slick").on("click.slick", {
                message: "next"
            }, e.changeSlide))
        }, t.prototype.initDotEvents = function() {
            var t = this;
            t.options.dots === !0 && t.slideCount > t.options.slidesToShow && e("li", t.$dots).on("click.slick", {
                message: "index"
            }, t.changeSlide), t.options.dots === !0 && t.options.pauseOnDotsHover === !0 && e("li", t.$dots).on("mouseenter.slick", e.proxy(t.interrupt, t, !0)).on("mouseleave.slick", e.proxy(t.interrupt, t, !1))
        }, t.prototype.initSlideEvents = function() {
            var t = this;
            t.options.pauseOnHover && (t.$list.on("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.on("mouseleave.slick", e.proxy(t.interrupt, t, !1)))
        }, t.prototype.initializeEvents = function() {
            var t = this;
            t.initArrowEvents(), t.initDotEvents(), t.initSlideEvents(), t.$list.on("touchstart.slick mousedown.slick", {
                action: "start"
            }, t.swipeHandler), t.$list.on("touchmove.slick mousemove.slick", {
                action: "move"
            }, t.swipeHandler), t.$list.on("touchend.slick mouseup.slick", {
                action: "end"
            }, t.swipeHandler), t.$list.on("touchcancel.slick mouseleave.slick", {
                action: "end"
            }, t.swipeHandler), t.$list.on("click.slick", t.clickHandler), e(document).on(t.visibilityChange, e.proxy(t.visibility, t)), t.options.accessibility === !0 && t.$list.on("keydown.slick", t.keyHandler), t.options.focusOnSelect === !0 && e(t.$slideTrack).children().on("click.slick", t.selectHandler), e(window).on("orientationchange.slick.slick-" + t.instanceUid, e.proxy(t.orientationChange, t)), e(window).on("resize.slick.slick-" + t.instanceUid, e.proxy(t.resize, t)), e("[draggable!=true]", t.$slideTrack).on("dragstart", t.preventDefault), e(window).on("load.slick.slick-" + t.instanceUid, t.setPosition), e(document).on("ready.slick.slick-" + t.instanceUid, t.setPosition)
        }, t.prototype.initUI = function() {
            var e = this;
            e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(), e.$nextArrow.show()), e.options.dots === !0 && e.slideCount > e.options.slidesToShow && e.$dots.show()
        }, t.prototype.keyHandler = function(e) {
            var t = this;
            e.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === e.keyCode && t.options.accessibility === !0 ? t.changeSlide({
                data: {
                    message: t.options.rtl === !0 ? "next" : "previous"
                }
            }) : 39 === e.keyCode && t.options.accessibility === !0 && t.changeSlide({
                data: {
                    message: t.options.rtl === !0 ? "previous" : "next"
                }
            }))
        }, t.prototype.lazyLoad = function() {
            function t(t) {
                e("img[data-lazy]", t).each(function() {
                    var t = e(this),
                        i = e(this).attr("data-lazy"),
                        o = document.createElement("img");
                    o.onload = function() {
                        t.animate({
                            opacity: 0
                        }, 100, function() {
                            t.attr("src", i).animate({
                                opacity: 1
                            }, 200, function() {
                                t.removeAttr("data-lazy").removeClass("slick-loading")
                            }), r.$slider.trigger("lazyLoaded", [r, t, i])
                        })
                    }, o.onerror = function() {
                        t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), r.$slider.trigger("lazyLoadError", [r, t, i])
                    }, o.src = i
                })
            }
            var i, o, n, s, r = this;
            r.options.centerMode === !0 ? r.options.infinite === !0 ? (n = r.currentSlide + (r.options.slidesToShow / 2 + 1), s = n + r.options.slidesToShow + 2) : (n = Math.max(0, r.currentSlide - (r.options.slidesToShow / 2 + 1)), s = 2 + (r.options.slidesToShow / 2 + 1) + r.currentSlide) : (n = r.options.infinite ? r.options.slidesToShow + r.currentSlide : r.currentSlide, s = Math.ceil(n + r.options.slidesToShow), r.options.fade === !0 && (n > 0 && n--, s <= r.slideCount && s++)), i = r.$slider.find(".slick-slide").slice(n, s), t(i), r.slideCount <= r.options.slidesToShow ? (o = r.$slider.find(".slick-slide"), t(o)) : r.currentSlide >= r.slideCount - r.options.slidesToShow ? (o = r.$slider.find(".slick-cloned").slice(0, r.options.slidesToShow), t(o)) : 0 === r.currentSlide && (o = r.$slider.find(".slick-cloned").slice(-1 * r.options.slidesToShow), t(o))
        }, t.prototype.loadSlider = function() {
            var e = this;
            e.setPosition(), e.$slideTrack.css({
                opacity: 1
            }), e.$slider.removeClass("slick-loading"), e.initUI(), "progressive" === e.options.lazyLoad && e.progressiveLazyLoad()
        }, t.prototype.next = t.prototype.slickNext = function() {
            var e = this;
            e.changeSlide({
                data: {
                    message: "next"
                }
            })
        }, t.prototype.orientationChange = function() {
            var e = this;
            e.checkResponsive(), e.setPosition()
        }, t.prototype.pause = t.prototype.slickPause = function() {
            var e = this;
            e.autoPlayClear(), e.paused = !0
        }, t.prototype.play = t.prototype.slickPlay = function() {
            var e = this;
            e.autoPlay(), e.options.autoplay = !0, e.paused = !1, e.focussed = !1, e.interrupted = !1
        }, t.prototype.postSlide = function(e) {
            var t = this;
            t.unslicked || (t.$slider.trigger("afterChange", [t, e]), t.animating = !1, t.setPosition(), t.swipeLeft = null, t.options.autoplay && t.autoPlay(), t.options.accessibility === !0 && t.initADA())
        }, t.prototype.prev = t.prototype.slickPrev = function() {
            var e = this;
            e.changeSlide({
                data: {
                    message: "previous"
                }
            })
        }, t.prototype.preventDefault = function(e) {
            e.preventDefault()
        }, t.prototype.progressiveLazyLoad = function(t) {
            t = t || 1;
            var i, o, n, s = this,
                r = e("img[data-lazy]", s.$slider);
            r.length ? (i = r.first(), o = i.attr("data-lazy"), n = document.createElement("img"), n.onload = function() {
                i.attr("src", o).removeAttr("data-lazy").removeClass("slick-loading"), s.options.adaptiveHeight === !0 && s.setPosition(), s.$slider.trigger("lazyLoaded", [s, i, o]), s.progressiveLazyLoad()
            }, n.onerror = function() {
                3 > t ? setTimeout(function() {
                    s.progressiveLazyLoad(t + 1)
                }, 500) : (i.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), s.$slider.trigger("lazyLoadError", [s, i, o]), s.progressiveLazyLoad())
            }, n.src = o) : s.$slider.trigger("allImagesLoaded", [s])
        }, t.prototype.refresh = function(t) {
            var i, o, n = this;
            o = n.slideCount - n.options.slidesToShow, !n.options.infinite && n.currentSlide > o && (n.currentSlide = o), n.slideCount <= n.options.slidesToShow && (n.currentSlide = 0), i = n.currentSlide, n.destroy(!0), e.extend(n, n.initials, {
                currentSlide: i
            }), n.init(), t || n.changeSlide({
                data: {
                    message: "index",
                    index: i
                }
            }, !1)
        }, t.prototype.registerBreakpoints = function() {
            var t, i, o, n = this,
                s = n.options.responsive || null;
            if ("array" === e.type(s) && s.length) {
                n.respondTo = n.options.respondTo || "window";
                for (t in s)
                    if (o = n.breakpoints.length - 1, i = s[t].breakpoint, s.hasOwnProperty(t)) {
                        for (; o >= 0;) n.breakpoints[o] && n.breakpoints[o] === i && n.breakpoints.splice(o, 1), o--;
                        n.breakpoints.push(i), n.breakpointSettings[i] = s[t].settings
                    }
                n.breakpoints.sort(function(e, t) {
                    return n.options.mobileFirst ? e - t : t - e
                })
            }
        }, t.prototype.reinit = function() {
            var t = this;
            t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide"), t.slideCount = t.$slides.length, t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll), t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0), t.registerBreakpoints(), t.setProps(), t.setupInfinite(), t.buildArrows(), t.updateArrows(), t.initArrowEvents(), t.buildDots(), t.updateDots(), t.initDotEvents(), t.cleanUpSlideEvents(), t.initSlideEvents(), t.checkResponsive(!1, !0), t.options.focusOnSelect === !0 && e(t.$slideTrack).children().on("click.slick", t.selectHandler), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), t.setPosition(), t.focusHandler(), t.paused = !t.options.autoplay, t.autoPlay(), t.$slider.trigger("reInit", [t])
        }, t.prototype.resize = function() {
            var t = this;
            e(window).width() !== t.windowWidth && (clearTimeout(t.windowDelay), t.windowDelay = window.setTimeout(function() {
                t.windowWidth = e(window).width(), t.checkResponsive(), t.unslicked || t.setPosition()
            }, 50))
        }, t.prototype.removeSlide = t.prototype.slickRemove = function(e, t, i) {
            var o = this;
            return "boolean" == typeof e ? (t = e, e = t === !0 ? 0 : o.slideCount - 1) : e = t === !0 ? --e : e, !(o.slideCount < 1 || 0 > e || e > o.slideCount - 1) && (o.unload(), i === !0 ? o.$slideTrack.children().remove() : o.$slideTrack.children(this.options.slide).eq(e).remove(), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slidesCache = o.$slides, void o.reinit())
        }, t.prototype.setCSS = function(e) {
            var t, i, o = this,
                n = {};
            o.options.rtl === !0 && (e = -e), t = "left" == o.positionProp ? Math.ceil(e) + "px" : "0px", i = "top" == o.positionProp ? Math.ceil(e) + "px" : "0px", n[o.positionProp] = e, o.transformsEnabled === !1 ? o.$slideTrack.css(n) : (n = {}, o.cssTransitions === !1 ? (n[o.animType] = "translate(" + t + ", " + i + ")", o.$slideTrack.css(n)) : (n[o.animType] = "translate3d(" + t + ", " + i + ", 0px)", o.$slideTrack.css(n)))
        }, t.prototype.setDimensions = function() {
            var e = this;
            e.options.vertical === !1 ? e.options.centerMode === !0 && e.$list.css({
                padding: "0px " + e.options.centerPadding
            }) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), e.options.centerMode === !0 && e.$list.css({
                padding: e.options.centerPadding + " 0px"
            })), e.listWidth = e.$list.width(), e.listHeight = e.$list.height(), e.options.vertical === !1 && e.options.variableWidth === !1 ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow), e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))) : e.options.variableWidth === !0 ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth), e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)));
            var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
            e.options.variableWidth === !1 && e.$slideTrack.children(".slick-slide").width(e.slideWidth - t)
        }, t.prototype.setFade = function() {
            var t, i = this;
            i.$slides.each(function(o, n) {
                t = i.slideWidth * o * -1, e(n).css(i.options.rtl === !0 ? {
                    position: "relative",
                    right: t,
                    top: 0,
                    zIndex: i.options.zIndex - 2,
                    opacity: 0
                } : {
                    position: "relative",
                    left: t,
                    top: 0,
                    zIndex: i.options.zIndex - 2,
                    opacity: 0
                })
            }), i.$slides.eq(i.currentSlide).css({
                zIndex: i.options.zIndex - 1,
                opacity: 1
            })
        }, t.prototype.setHeight = function() {
            var e = this;
            if (1 === e.options.slidesToShow && e.options.adaptiveHeight === !0 && e.options.vertical === !1) {
                var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
                e.$list.css("height", t)
            }
        }, t.prototype.setOption = t.prototype.slickSetOption = function() {
            var t, i, o, n, s, r = this,
                a = !1;
            if ("object" === e.type(arguments[0]) ? (o = arguments[0], a = arguments[1], s = "multiple") : "string" === e.type(arguments[0]) && (o = arguments[0], n = arguments[1], a = arguments[2], "responsive" === arguments[0] && "array" === e.type(arguments[1]) ? s = "responsive" : "undefined" != typeof arguments[1] && (s = "single")), "single" === s) r.options[o] = n;
            else if ("multiple" === s) e.each(o, function(e, t) {
                r.options[e] = t
            });
            else if ("responsive" === s)
                for (i in n)
                    if ("array" !== e.type(r.options.responsive)) r.options.responsive = [n[i]];
                    else {
                        for (t = r.options.responsive.length - 1; t >= 0;) r.options.responsive[t].breakpoint === n[i].breakpoint && r.options.responsive.splice(t, 1), t--;
                        r.options.responsive.push(n[i])
                    }
            a && (r.unload(), r.reinit())
        }, t.prototype.setPosition = function() {
            var e = this;
            e.setDimensions(), e.setHeight(), e.options.fade === !1 ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(), e.$slider.trigger("setPosition", [e])
        }, t.prototype.setProps = function() {
            var e = this,
                t = document.body.style;
            e.positionProp = e.options.vertical === !0 ? "top" : "left", "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"), (void 0 !== t.WebkitTransition || void 0 !== t.MozTransition || void 0 !== t.msTransition) && e.options.useCSS === !0 && (e.cssTransitions = !0), e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex), void 0 !== t.OTransform && (e.animType = "OTransform", e.transformType = "-o-transform", e.transitionType = "OTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.MozTransform && (e.animType = "MozTransform", e.transformType = "-moz-transform", e.transitionType = "MozTransition", void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)), void 0 !== t.webkitTransform && (e.animType = "webkitTransform", e.transformType = "-webkit-transform", e.transitionType = "webkitTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.msTransform && (e.animType = "msTransform", e.transformType = "-ms-transform", e.transitionType = "msTransition", void 0 === t.msTransform && (e.animType = !1)), void 0 !== t.transform && e.animType !== !1 && (e.animType = "transform", e.transformType = "transform", e.transitionType = "transition"), e.transformsEnabled = e.options.useTransform && null !== e.animType && e.animType !== !1
        }, t.prototype.setSlideClasses = function(e) {
            var t, i, o, n, s = this;
            i = s.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), s.$slides.eq(e).addClass("slick-current"), s.options.centerMode === !0 ? (t = Math.floor(s.options.slidesToShow / 2), s.options.infinite === !0 && (e >= t && e <= s.slideCount - 1 - t ? s.$slides.slice(e - t, e + t + 1).addClass("slick-active").attr("aria-hidden", "false") : (o = s.options.slidesToShow + e, i.slice(o - t + 1, o + t + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === e ? i.eq(i.length - 1 - s.options.slidesToShow).addClass("slick-center") : e === s.slideCount - 1 && i.eq(s.options.slidesToShow).addClass("slick-center")), s.$slides.eq(e).addClass("slick-center")) : e >= 0 && e <= s.slideCount - s.options.slidesToShow ? s.$slides.slice(e, e + s.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : i.length <= s.options.slidesToShow ? i.addClass("slick-active").attr("aria-hidden", "false") : (n = s.slideCount % s.options.slidesToShow, o = s.options.infinite === !0 ? s.options.slidesToShow + e : e, s.options.slidesToShow == s.options.slidesToScroll && s.slideCount - e < s.options.slidesToShow ? i.slice(o - (s.options.slidesToShow - n), o + n).addClass("slick-active").attr("aria-hidden", "false") : i.slice(o, o + s.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === s.options.lazyLoad && s.lazyLoad()
        }, t.prototype.setupInfinite = function() {
            var t, i, o, n = this;
            if (n.options.fade === !0 && (n.options.centerMode = !1), n.options.infinite === !0 && n.options.fade === !1 && (i = null, n.slideCount > n.options.slidesToShow)) {
                for (o = n.options.centerMode === !0 ? n.options.slidesToShow + 1 : n.options.slidesToShow, t = n.slideCount; t > n.slideCount - o; t -= 1) i = t - 1, e(n.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i - n.slideCount).prependTo(n.$slideTrack).addClass("slick-cloned");
                for (t = 0; o > t; t += 1) i = t, e(n.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i + n.slideCount).appendTo(n.$slideTrack).addClass("slick-cloned");
                n.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                    e(this).attr("id", "")
                })
            }
        }, t.prototype.interrupt = function(e) {
            var t = this;
            e || t.autoPlay(), t.interrupted = e
        }, t.prototype.selectHandler = function(t) {
            var i = this,
                o = e(t.target).is(".slick-slide") ? e(t.target) : e(t.target).parents(".slick-slide"),
                n = parseInt(o.attr("data-slick-index"));
            return n || (n = 0), i.slideCount <= i.options.slidesToShow ? (i.setSlideClasses(n), void i.asNavFor(n)) : void i.slideHandler(n)
        }, t.prototype.slideHandler = function(e, t, i) {
            var o, n, s, r, a, l = null,
                d = this;
            return t = t || !1, d.animating === !0 && d.options.waitForAnimate === !0 || d.options.fade === !0 && d.currentSlide === e || d.slideCount <= d.options.slidesToShow ? void 0 : (t === !1 && d.asNavFor(e), o = e, l = d.getLeft(o), r = d.getLeft(d.currentSlide), d.currentLeft = null === d.swipeLeft ? r : d.swipeLeft, d.options.infinite === !1 && d.options.centerMode === !1 && (0 > e || e > d.getDotCount() * d.options.slidesToScroll) ? void(d.options.fade === !1 && (o = d.currentSlide, i !== !0 ? d.animateSlide(r, function() {
                d.postSlide(o)
            }) : d.postSlide(o))) : d.options.infinite === !1 && d.options.centerMode === !0 && (0 > e || e > d.slideCount - d.options.slidesToScroll) ? void(d.options.fade === !1 && (o = d.currentSlide, i !== !0 ? d.animateSlide(r, function() {
                d.postSlide(o)
            }) : d.postSlide(o))) : (d.options.autoplay && clearInterval(d.autoPlayTimer), n = 0 > o ? d.slideCount % d.options.slidesToScroll !== 0 ? d.slideCount - d.slideCount % d.options.slidesToScroll : d.slideCount + o : o >= d.slideCount ? d.slideCount % d.options.slidesToScroll !== 0 ? 0 : o - d.slideCount : o, d.animating = !0, d.$slider.trigger("beforeChange", [d, d.currentSlide, n]), s = d.currentSlide, d.currentSlide = n, d.setSlideClasses(d.currentSlide), d.options.asNavFor && (a = d.getNavTarget(), a = a.slick("getSlick"), a.slideCount <= a.options.slidesToShow && a.setSlideClasses(d.currentSlide)), d.updateDots(), d.updateArrows(), d.options.fade === !0 ? (i !== !0 ? (d.fadeSlideOut(s), d.fadeSlide(n, function() {
                d.postSlide(n)
            })) : d.postSlide(n), void d.animateHeight()) : void(i !== !0 ? d.animateSlide(l, function() {
                d.postSlide(n)
            }) : d.postSlide(n))))
        }, t.prototype.startLoad = function() {
            var e = this;
            e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()), e.options.dots === !0 && e.slideCount > e.options.slidesToShow && e.$dots.hide(), e.$slider.addClass("slick-loading")
        }, t.prototype.swipeDirection = function() {
            var e, t, i, o, n = this;
            return e = n.touchObject.startX - n.touchObject.curX, t = n.touchObject.startY - n.touchObject.curY, i = Math.atan2(t, e), o = Math.round(180 * i / Math.PI), 0 > o && (o = 360 - Math.abs(o)), 45 >= o && o >= 0 ? n.options.rtl === !1 ? "left" : "right" : 360 >= o && o >= 315 ? n.options.rtl === !1 ? "left" : "right" : o >= 135 && 225 >= o ? n.options.rtl === !1 ? "right" : "left" : n.options.verticalSwiping === !0 ? o >= 35 && 135 >= o ? "down" : "up" : "vertical"
        }, t.prototype.swipeEnd = function() {
            var e, t, i = this;
            if (i.dragging = !1, i.interrupted = !1, i.shouldClick = !(i.touchObject.swipeLength > 10), void 0 === i.touchObject.curX) return !1;
            if (i.touchObject.edgeHit === !0 && i.$slider.trigger("edge", [i, i.swipeDirection()]), i.touchObject.swipeLength >= i.touchObject.minSwipe) {
                switch (t = i.swipeDirection()) {
                    case "left":
                    case "down":
                        e = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide + i.getSlideCount()) : i.currentSlide + i.getSlideCount(), i.currentDirection = 0;
                        break;
                    case "right":
                    case "up":
                        e = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide - i.getSlideCount()) : i.currentSlide - i.getSlideCount(), i.currentDirection = 1
                }
                "vertical" != t && (i.slideHandler(e), i.touchObject = {}, i.$slider.trigger("swipe", [i, t]))
            } else i.touchObject.startX !== i.touchObject.curX && (i.slideHandler(i.currentSlide), i.touchObject = {})
        }, t.prototype.swipeHandler = function(e) {
            var t = this;
            if (!(t.options.swipe === !1 || "ontouchend" in document && t.options.swipe === !1 || t.options.draggable === !1 && -1 !== e.type.indexOf("mouse"))) switch (t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1, t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold, t.options.verticalSwiping === !0 && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold), e.data.action) {
                case "start":
                    t.swipeStart(e);
                    break;
                case "move":
                    t.swipeMove(e);
                    break;
                case "end":
                    t.swipeEnd(e)
            }
        }, t.prototype.swipeMove = function(e) {
            var t, i, o, n, s, r = this;
            return s = void 0 !== e.originalEvent ? e.originalEvent.touches : null, !(!r.dragging || s && 1 !== s.length) && (t = r.getLeft(r.currentSlide), r.touchObject.curX = void 0 !== s ? s[0].pageX : e.clientX, r.touchObject.curY = void 0 !== s ? s[0].pageY : e.clientY, r.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(r.touchObject.curX - r.touchObject.startX, 2))), r.options.verticalSwiping === !0 && (r.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(r.touchObject.curY - r.touchObject.startY, 2)))), i = r.swipeDirection(), "vertical" !== i ? (void 0 !== e.originalEvent && r.touchObject.swipeLength > 4 && e.preventDefault(), n = (r.options.rtl === !1 ? 1 : -1) * (r.touchObject.curX > r.touchObject.startX ? 1 : -1), r.options.verticalSwiping === !0 && (n = r.touchObject.curY > r.touchObject.startY ? 1 : -1), o = r.touchObject.swipeLength, r.touchObject.edgeHit = !1, r.options.infinite === !1 && (0 === r.currentSlide && "right" === i || r.currentSlide >= r.getDotCount() && "left" === i) && (o = r.touchObject.swipeLength * r.options.edgeFriction, r.touchObject.edgeHit = !0), r.swipeLeft = r.options.vertical === !1 ? t + o * n : t + o * (r.$list.height() / r.listWidth) * n, r.options.verticalSwiping === !0 && (r.swipeLeft = t + o * n), r.options.fade !== !0 && r.options.touchMove !== !1 && (r.animating === !0 ? (r.swipeLeft = null, !1) : void r.setCSS(r.swipeLeft))) : void 0)
        }, t.prototype.swipeStart = function(e) {
            var t, i = this;
            return i.interrupted = !0, 1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow ? (i.touchObject = {}, !1) : (void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]), i.touchObject.startX = i.touchObject.curX = void 0 !== t ? t.pageX : e.clientX, i.touchObject.startY = i.touchObject.curY = void 0 !== t ? t.pageY : e.clientY,
                void(i.dragging = !0))
        }, t.prototype.unfilterSlides = t.prototype.slickUnfilter = function() {
            var e = this;
            null !== e.$slidesCache && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.appendTo(e.$slideTrack), e.reinit())
        }, t.prototype.unload = function() {
            var t = this;
            e(".slick-cloned", t.$slider).remove(), t.$dots && t.$dots.remove(), t.$prevArrow && t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove(), t.$nextArrow && t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove(), t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
        }, t.prototype.unslick = function(e) {
            var t = this;
            t.$slider.trigger("unslick", [t, e]), t.destroy()
        }, t.prototype.updateArrows = function() {
            var e, t = this;
            e = Math.floor(t.options.slidesToShow / 2), t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && !t.options.infinite && (t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === t.currentSlide ? (t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : t.currentSlide >= t.slideCount - t.options.slidesToShow && t.options.centerMode === !1 ? (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : t.currentSlide >= t.slideCount - 1 && t.options.centerMode === !0 && (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
        }, t.prototype.updateDots = function() {
            var e = this;
            null !== e.$dots && (e.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
        }, t.prototype.visibility = function() {
            var e = this;
            e.options.autoplay && (e.interrupted = !!document[e.hidden])
        }, e.fn.slick = function() {
            var e, i, o = this,
                n = arguments[0],
                s = Array.prototype.slice.call(arguments, 1),
                r = o.length;
            for (e = 0; r > e; e++)
                if ("object" == typeof n || "undefined" == typeof n ? o[e].slick = new t(o[e], n) : i = o[e].slick[n].apply(o[e].slick, s), "undefined" != typeof i) return i;
            return o
        }
    }),
    function(e, t) {
        "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? module.exports = t() : e.SuperGif = t()
    }(this, function() {
        var e = function(e) {
                return e.reduce(function(e, t) {
                    return 2 * e + t
                }, 0)
            },
            t = function(e) {
                for (var t = [], i = 7; i >= 0; i--) t.push(!!(e & 1 << i));
                return t
            },
            i = function(e) {
                this.data = e, this.len = this.data.length, this.pos = 0, this.readByte = function() {
                    if (this.pos >= this.data.length) throw new Error("Attempted to read past end of stream.");
                    return e instanceof Uint8Array ? e[this.pos++] : 255 & e.charCodeAt(this.pos++)
                }, this.readBytes = function(e) {
                    for (var t = [], i = 0; e > i; i++) t.push(this.readByte());
                    return t
                }, this.read = function(e) {
                    for (var t = "", i = 0; e > i; i++) t += String.fromCharCode(this.readByte());
                    return t
                }, this.readUnsigned = function() {
                    var e = this.readBytes(2);
                    return (e[1] << 8) + e[0]
                }
            },
            o = function(e, t) {
                for (var i, o, n = 0, s = function(e) {
                        for (var i = 0, o = 0; e > o; o++) t.charCodeAt(n >> 3) & 1 << (7 & n) && (i |= 1 << o), n++;
                        return i
                    }, r = [], a = 1 << e, l = a + 1, d = e + 1, c = [], p = function() {
                        c = [], d = e + 1;
                        for (var t = 0; a > t; t++) c[t] = [t];
                        c[a] = [], c[l] = null
                    };;)
                    if (o = i, i = s(d), i !== a) {
                        if (i === l) break;
                        if (i < c.length) o !== a && c.push(c[o].concat(c[i][0]));
                        else {
                            if (i !== c.length) throw new Error("Invalid LZW code.");
                            c.push(c[o].concat(c[o][0]))
                        }
                        r.push.apply(r, c[i]), c.length === 1 << d && 12 > d && d++
                    } else p();
                return r
            },
            n = function(i, n) {
                n || (n = {});
                var s = function(e) {
                        for (var t = [], o = 0; e > o; o++) t.push(i.readBytes(3));
                        return t
                    },
                    r = function() {
                        var e, t;
                        t = "";
                        do e = i.readByte(), t += i.read(e); while (0 !== e);
                        return t
                    },
                    a = function() {
                        var o = {};
                        if (o.sig = i.read(3), o.ver = i.read(3), "GIF" !== o.sig) throw new Error("Not a GIF file.");
                        o.width = i.readUnsigned(), o.height = i.readUnsigned();
                        var r = t(i.readByte());
                        o.gctFlag = r.shift(), o.colorRes = e(r.splice(0, 3)), o.sorted = r.shift(), o.gctSize = e(r.splice(0, 3)), o.bgColor = i.readByte(), o.pixelAspectRatio = i.readByte(), o.gctFlag && (o.gct = s(1 << o.gctSize + 1)), n.hdr && n.hdr(o)
                    },
                    l = function(o) {
                        var s = function(o) {
                                var s = (i.readByte(), t(i.readByte()));
                                o.reserved = s.splice(0, 3), o.disposalMethod = e(s.splice(0, 3)), o.userInput = s.shift(), o.transparencyGiven = s.shift(), o.delayTime = i.readUnsigned(), o.transparencyIndex = i.readByte(), o.terminator = i.readByte(), n.gce && n.gce(o)
                            },
                            a = function(e) {
                                e.comment = r(), n.com && n.com(e)
                            },
                            l = function(e) {
                                i.readByte(), e.ptHeader = i.readBytes(12), e.ptData = r(), n.pte && n.pte(e)
                            },
                            d = function(e) {
                                var t = function(e) {
                                        i.readByte(), e.unknown = i.readByte(), e.iterations = i.readUnsigned(), e.terminator = i.readByte(), n.app && n.app.NETSCAPE && n.app.NETSCAPE(e)
                                    },
                                    o = function(e) {
                                        e.appData = r(), n.app && n.app[e.identifier] && n.app[e.identifier](e)
                                    };
                                switch (i.readByte(), e.identifier = i.read(8), e.authCode = i.read(3), e.identifier) {
                                    case "NETSCAPE":
                                        t(e);
                                        break;
                                    default:
                                        o(e)
                                }
                            },
                            c = function(e) {
                                e.data = r(), n.unknown && n.unknown(e)
                            };
                        switch (o.label = i.readByte(), o.label) {
                            case 249:
                                o.extType = "gce", s(o);
                                break;
                            case 254:
                                o.extType = "com", a(o);
                                break;
                            case 1:
                                o.extType = "pte", l(o);
                                break;
                            case 255:
                                o.extType = "app", d(o);
                                break;
                            default:
                                o.extType = "unknown", c(o)
                        }
                    },
                    d = function(a) {
                        var l = function(e, t) {
                            for (var i = new Array(e.length), o = e.length / t, n = function(o, n) {
                                    var s = e.slice(n * t, (n + 1) * t);
                                    i.splice.apply(i, [o * t, t].concat(s))
                                }, s = [0, 4, 2, 1], r = [8, 8, 4, 2], a = 0, l = 0; 4 > l; l++)
                                for (var d = s[l]; o > d; d += r[l]) n(d, a), a++;
                            return i
                        };
                        a.leftPos = i.readUnsigned(), a.topPos = i.readUnsigned(), a.width = i.readUnsigned(), a.height = i.readUnsigned();
                        var d = t(i.readByte());
                        a.lctFlag = d.shift(), a.interlaced = d.shift(), a.sorted = d.shift(), a.reserved = d.splice(0, 2), a.lctSize = e(d.splice(0, 3)), a.lctFlag && (a.lct = s(1 << a.lctSize + 1)), a.lzwMinCodeSize = i.readByte();
                        var c = r();
                        a.pixels = o(a.lzwMinCodeSize, c), a.interlaced && (a.pixels = l(a.pixels, a.width)), n.img && n.img(a)
                    },
                    c = function() {
                        var e = {};
                        switch (e.sentinel = i.readByte(), String.fromCharCode(e.sentinel)) {
                            case "!":
                                e.type = "ext", l(e);
                                break;
                            case ",":
                                e.type = "img", d(e);
                                break;
                            case ";":
                                e.type = "eof", n.eof && n.eof(e);
                                break;
                            default:
                                throw new Error("Unknown block: 0x" + e.sentinel.toString(16))
                        }
                        "eof" !== e.type && setTimeout(c, 0)
                    },
                    p = function() {
                        a(), setTimeout(c, 0)
                    };
                p()
            },
            s = function(e) {
                var t = {
                    vp_l: 0,
                    vp_t: 0,
                    vp_w: null,
                    vp_h: null,
                    c_w: null,
                    c_h: null
                };
                for (var o in e) t[o] = e[o];
                t.vp_w && t.vp_h && (t.is_vp = !0);
                var s, r, a = null,
                    l = !1,
                    d = null,
                    c = null,
                    p = null,
                    u = null,
                    h = null,
                    f = null,
                    g = null,
                    y = !0,
                    v = !0,
                    m = !1,
                    w = [],
                    b = [],
                    x = t.gif;
                "undefined" == typeof t.auto_play && (t.auto_play = !x.getAttribute("rel:auto_play") || "1" == x.getAttribute("rel:auto_play"));
                var k, T, S, C, $ = t.hasOwnProperty("on_end") ? t.on_end : null,
                    _ = t.hasOwnProperty("loop_delay") ? t.loop_delay : 0,
                    P = t.hasOwnProperty("loop_mode") ? t.loop_mode : "auto",
                    A = !t.hasOwnProperty("draw_while_loading") || t.draw_while_loading,
                    E = !!A && (!t.hasOwnProperty("show_progress_bar") || t.show_progress_bar),
                    j = t.hasOwnProperty("progressbar_height") ? t.progressbar_height : 25,
                    H = t.hasOwnProperty("progressbar_background_color") ? t.progressbar_background_color : "rgba(255,255,255,0.4)",
                    O = t.hasOwnProperty("progressbar_foreground_color") ? t.progressbar_foreground_color : "rgba(255,0,22,.8)",
                    z = function() {
                        d = null, c = null, h = p, p = null, f = null
                    },
                    W = function() {
                        try {
                            n(s, V)
                        } catch (e) {
                            D("parse")
                        }
                    },
                    M = function(e, t) {
                        k.width = e * Y(), k.height = t * Y(), S.style.minWidth = e * Y() + "px", C.width = e, C.height = t, C.style.width = e + "px", C.style.height = t + "px", C.getContext("2d").setTransform(1, 0, 0, 1, 0, 0)
                    },
                    L = function(e, t) {
                        return b[e] ? ("undefined" != typeof t.x && (b[e].x = t.x), void("undefined" != typeof t.y && (b[e].y = t.y))) : void(b[e] = t)
                    },
                    I = function(e, i, o) {
                        if (o && E) {
                            var n, s, r, a, l = j;
                            t.is_vp ? m ? (r = (t.vp_t + t.vp_h - l) / Y(), l /= Y(), n = t.vp_l / Y(), s = n + e / i * (t.vp_w / Y()), a = k.width / Y()) : (r = t.vp_t + t.vp_h - l, l = l, n = t.vp_l, s = n + e / i * t.vp_w, a = k.width) : (r = (k.height - l) / (m ? Y() : 1), s = e / i * k.width / (m ? Y() : 1), a = k.width / (m ? Y() : 1), l /= m ? Y() : 1), T.fillStyle = H, T.fillRect(s, r, a - s, l), T.fillStyle = O, T.fillRect(0, r, s, l)
                        }
                    },
                    D = function(e) {
                        var i = function() {
                            T.fillStyle = "black", T.fillRect(0, 0, t.c_w ? t.c_w : r.width, t.c_h ? t.c_h : r.height), T.strokeStyle = "red", T.lineWidth = 3, T.moveTo(0, 0), T.lineTo(t.c_w ? t.c_w : r.width, t.c_h ? t.c_h : r.height), T.moveTo(0, t.c_h ? t.c_h : r.height), T.lineTo(t.c_w ? t.c_w : r.width, 0), T.stroke()
                        };
                        a = e, r = {
                            width: x.width,
                            height: x.height
                        }, w = [], i()
                    },
                    R = function(e) {
                        r = e, M(r.width, r.height)
                    },
                    B = function(e) {
                        Q(), z(), d = e.transparencyGiven ? e.transparencyIndex : null, c = e.delayTime, p = e.disposalMethod
                    },
                    Q = function() {
                        f && (w.push({
                            data: f.getImageData(0, 0, r.width, r.height),
                            delay: c
                        }), b.push({
                            x: 0,
                            y: 0
                        }))
                    },
                    N = function(e) {
                        f || (f = C.getContext("2d"));
                        var i = w.length,
                            o = e.lctFlag ? e.lct : r.gct;
                        i > 0 && (3 === h ? null !== u ? f.putImageData(w[u].data, 0, 0) : f.clearRect(g.leftPos, g.topPos, g.width, g.height) : u = i - 1, 2 === h && f.clearRect(g.leftPos, g.topPos, g.width, g.height));
                        var n = f.getImageData(e.leftPos, e.topPos, e.width, e.height);
                        e.pixels.forEach(function(e, t) {
                            e !== d && (n.data[4 * t + 0] = o[e][0], n.data[4 * t + 1] = o[e][1], n.data[4 * t + 2] = o[e][2], n.data[4 * t + 3] = 255)
                        }), f.putImageData(n, e.leftPos, e.topPos), m || (T.scale(Y(), Y()), m = !0), A && (T.drawImage(C, 0, 0), A = t.auto_play), g = e
                    },
                    F = function() {
                        var e = -1,
                            i = 0,
                            o = function() {
                                var t = v ? 1 : -1;
                                return (e + t + w.length) % w.length
                            },
                            n = function(t) {
                                e += t, r()
                            },
                            s = function() {
                                var t = !1,
                                    s = function() {
                                        null !== $ && $(x), i++, P !== !1 || 0 > i ? r() : (t = !1, y = !1)
                                    },
                                    r = function() {
                                        if (t = y) {
                                            n(1);
                                            var i = 10 * w[e].delay;
                                            i || (i = 100);
                                            var a = o();
                                            0 === a ? (i += _, setTimeout(s, i)) : setTimeout(r, i)
                                        }
                                    };
                                return function() {
                                    t || setTimeout(r, 0)
                                }
                            }(),
                            r = function() {
                                var t;
                                e = parseInt(e, 10), e > w.length - 1 && (e = 0), 0 > e && (e = 0), t = b[e], C.getContext("2d").putImageData(w[e].data, t.x, t.y), T.globalCompositeOperation = "copy", T.drawImage(C, 0, 0)
                            },
                            l = function() {
                                y = !0, s()
                            },
                            d = function() {
                                y = !1
                            };
                        return {
                            init: function() {
                                a || (t.c_w && t.c_h || T.scale(Y(), Y()), t.auto_play ? s() : (e = 0, r()))
                            },
                            step: s,
                            play: l,
                            pause: d,
                            playing: y,
                            move_relative: n,
                            current_frame: function() {
                                return e
                            },
                            length: function() {
                                return w.length
                            },
                            move_to: function(t) {
                                e = t, r()
                            }
                        }
                    }(),
                    q = function(e) {
                        I(s.pos, s.data.length, e)
                    },
                    U = function() {},
                    X = function(e, t) {
                        return function(i) {
                            e(i), q(t)
                        }
                    },
                    V = {
                        hdr: X(R),
                        gce: X(B),
                        com: X(U),
                        app: {
                            NETSCAPE: X(U)
                        },
                        img: X(N, !0),
                        eof: function() {
                            Q(), q(!1), t.c_w && t.c_h || (k.width = r.width * Y(), k.height = r.height * Y()), F.init(), l = !1, G && G(x)
                        }
                    },
                    Z = function() {
                        var e = x.parentNode,
                            i = document.createElement("div");
                        k = document.createElement("canvas"), T = k.getContext("2d"), S = document.createElement("div"), C = document.createElement("canvas"), i.width = k.width = x.width, i.height = k.height = x.height, S.style.minWidth = x.width + "px", i.className = "jsgif", S.className = "jsgif_toolbar", i.appendChild(k), i.appendChild(S), e.insertBefore(i, x), e.removeChild(x), t.c_w && t.c_h && M(t.c_w, t.c_h), K = !0
                    },
                    Y = function() {
                        var e;
                        return e = t.max_width && r && r.width > t.max_width ? t.max_width / r.width : 1
                    },
                    K = !1,
                    G = !1,
                    J = function(e) {
                        return !l && (G = !!e && e, l = !0, w = [], z(), u = null, h = null, f = null, g = null, !0)
                    };
                return {
                    play: F.play,
                    pause: F.pause,
                    move_relative: F.move_relative,
                    move_to: F.move_to,
                    get_playing: function() {
                        return y
                    },
                    get_canvas: function() {
                        return k
                    },
                    get_canvas_scale: function() {
                        return Y()
                    },
                    get_loading: function() {
                        return l
                    },
                    get_auto_play: function() {
                        return t.auto_play
                    },
                    get_length: function() {
                        return F.length()
                    },
                    get_current_frame: function() {
                        return F.current_frame()
                    },
                    load_url: function(e, t) {
                        if (J(t)) {
                            var o = new XMLHttpRequest;
                            o.open("GET.html", e, !0), "overrideMimeType" in o ? o.overrideMimeType("text/plain; charset=x-user-defined") : "responseType" in o ? o.responseType = "arraybuffer" : o.setRequestHeader("Accept-Charset", "x-user-defined"), o.onloadstart = function() {
                                K || Z()
                            }, o.onload = function() {
                                200 != this.status && D("xhr - response"), "response" in this || (this.response = new VBArray(this.responseText).toArray().map(String.fromCharCode).join(""));
                                var e = this.response;
                                e.toString().indexOf("ArrayBuffer") > 0 && (e = new Uint8Array(e)), s = new i(e), setTimeout(W, 0)
                            }, o.onprogress = function(e) {
                                e.lengthComputable && I(e.loaded, e.total, !0)
                            }, o.onerror = function() {
                                D("xhr")
                            }, o.send()
                        }
                    },
                    load: function(e) {
                        this.load_url(x.getAttribute("rel:animated_src") || x.src, e)
                    },
                    load_raw: function(e, t) {
                        J(t) && (K || Z(), s = new i(e), setTimeout(W, 0))
                    },
                    set_frame_offset: L
                }
            };
        return s
    }), String.prototype.P = Number.prototype.P = function() {
        return parseFloat(this)
    }, String.prototype.S = function(e) {
        return this.toString().split(",")[e]
    },
    function(e) {
        var t = {
            defaults: {
                sts: !1,
                controls: !0,
                style: 1,
                control_opacity: "0,0.9",
                fade_speed: "250,250",
                player_fade_speed: 1e3,
                show_button: !0,
                on_timer: "0,0",
                on_scroll: !1,
                scroll_offset: .15,
                on_hover: !1,
                slate: "350,0.65,0"
            },
            init: function(i) {
                var o = document.createElement("canvas");
                if (o.getContext && o.getContext("2d")) {
                    for (var n = e.extend({}, t.defaults, i), s = 0, r = this.length; r > s; s++) {
                        var a = e(this[s]),
                            l = a.data("hyena"),
                            d = void 0 != l && l,
                            c = e.support.Hyena;
                        e.data(a, e.extend({}, n, d ? d || {} : {})), a.data("hyena", e.data(a));
                        var p = a.data().hyena;
                        a.wrap('<div class="hy_plyr hy_plyr_' + p.style + '"><div class="hy_fr_' + p.style + '"/>');
                        var u = a.parents("div.hy_plyr:first");
                        u.prepend('<div class="hy_bt_wr"><div class="hyena_slate"></div></div>'), p.slate.S(2).P() > 0 && u.find("div.hyena_slate").css("background", "url(Hyena/controls/tiles/bg_" + p.slate.S(2).P() + ".png)"), p.on_scroll && (p.on_hover = !1, p.controls = !1), p.on_hover && (p.controls = !1, c.isTablet && (p.on_hover = !1)), p.tmrOn = p.on_timer.S(0).P(), p.tmrOn > 0 && (p.tmr_Off = p.on_timer.S(1).P(), p.show_button = !1, p.controls = !1), p.controls ? (u.find("div.hy_bt_wr").prepend('<img src="Hyena/controls/' + p.style + '_play.png" class="hy_btn"/>'), u.on("mouseenter", function() {
                            var t = e(this),
                                i = t.find('img[src*=".gif"]'),
                                o = i.data().hyena,
                                n = t.find("img.hy_btn"),
                                s = n.css("opacity").P(),
                                r = o.control_opacity.S(1).P();
                            s !== r && n.stop(!0, !1).animate({
                                opacity: o.control_opacity.S(1).P()
                            }, {
                                duration: o.fade_speed.S(1).P(),
                                queue: !1
                            })
                        }).on("mouseleave", function() {
                            var t = e(this).find("img.hy_btn"),
                                i = t.css("opacity").P(),
                                o = p.control_opacity.S(0).P();
                            i !== o && t.stop(!0, !1).animate({
                                opacity: p.control_opacity.S(0).P()
                            }, {
                                duration: p.fade_speed.S(0).P(),
                                queue: !1
                            })
                        }), u.find("div.hy_bt_wr").css("cursor", "pointer").on(c.cEv, function(i) {
                            if (!i.handled) {
                                var o = e(this).parents("div.hy_plyr:first"),
                                    n = o.find('img[src*=".gif"]').data().hyena;
                                if (n.tmrOn > 0) return;
                                n.sts ? t.ST(o, n, e(this), !1) : (o.find("img.hy_btn").stop(!0, !1).animate({
                                    opacity: n.control_opacity.S(0).P()
                                }, {
                                    duration: n.fade_speed.S(0).P(),
                                    queue: !1,
                                    complete: function() {
                                        e(this).attr("src", "Hyena/controls/" + n.style + "_stop.png")
                                    }
                                }), t.PL(o, n))
                            }
                            return !1
                        })) : p.on_hover ? u.on("mouseenter touchstart", function() {
                            var i = e(this),
                                o = i.find('img[src*=".gif"]').data().hyena;
                            o.sts || t.PL(i, o)
                        }).on("mouseleave touchend", function() {
                            var i = e(this),
                                o = i.find('img[src*=".gif"]').data().hyena;
                            o.sts && t.ST(i, o, !1, !1)
                        }) : p.on_scroll && (t.SCR(u, p), e(window).on("load", function() {
                            e(document).scroll()
                        })), u.css("cursor", "pointer").on(c.cEv, function(i) {
                            if (!i.handled) {
                                var o = e(this),
                                    n = o.find('img[src*=".gif"]').data().hyena;
                                if (n.tmrOn > 0) return;
                                n.sts ? t.ST(o, n, !1, !1) : t.PL(o, n)
                            }
                        }), t.ST(u, p, p.show_button, !0)
                    }
                    e(window).on("resize", function() {
                        for (var t = e("div.hy_plyr"), i = t.length, o = 0; i > o; o++) {
                            var n = e(t[o]).find("img.hy_btn");
                            n.css({
                                "margin-top": -n.outerHeight() / 2 + "px",
                                "margin-left": -n.outerWidth() / 2 + "px"
                            })
                        }
                    }).resize()
                }
            },
            PL: function(i, o) {
                if (!o.sts) {
                    var n = i.find('img[src*=".gif"]'),
                        s = i.find("canvas"),
                        r = i.find("div.hyena_slate"),
                        a = i.find("img.hy_btn");
                    s[0].style.display = "none", n.css({
                        visibility: "visible",
                        display: "block"
                    }), r.stop(!0, !1).animate({
                        opacity: 0
                    }, {
                        duration: o.slate.S(0).P(),
                        queue: !1
                    }), e.support.Hyena.isTablet && a.css("opacity", 0), o.tmr_Off > 0 && (o.STMR = setTimeout(function() {
                        clearTimeout(o.TMR), t.ST(i, o, !1, !1)
                    }, o.tmr_Off)), o.sts = !0, i.addClass("play")
                }
            },
            ST: function(i, o, n, s) {
                var r = i.find('img[src*=".gif"]'),
                    a = new Image,
                    l = new Image;
                if (i.find("canvas").length || e('<canvas class="hyena_canvas"/>').insertBefore(r), a.onload = function() {
                        var e = i.find("canvas")[0],
                            n = e.getContext("2d"),
                            s = this.width,
                            l = this.height,
                            d = i.find("div.hyena_slate");
                        e.width = s, e.height = l, e.style.display = "block", n.drawImage(a, 0, 0, s, l), d.css("opacity", .01).animate({
                            opacity: o.slate.S(1).P()
                        }, {
                            duration: o.slate.S(0).P(),
                            queue: !1
                        }), "hidden" === i.css("visibility") && i.css({
                            visibility: "visible",
                            opacity: 0
                        }).fadeTo(o.player_fade_speed.P(), 1), r.css({
                            visibility: "hidden",
                            display: "none"
                        }), o.tmrOn > 0 && (o.TMR = setTimeout(function() {
                            clearTimeout(o.STMR), t.PL(i, o)
                        }, o.tmrOn))
                    }, a.src = r.attr("src"), o.controls) {
                    var d = s || o.sts ? "play" : "stop";
                    l.onload = function() {
                        var t = i.find("img.hy_btn");
                        n || e.support.Hyena.isTablet || e.support.Hyena.isMobile ? t.attr("src", "Hyena/controls/" + o.style + "_" + d + ".png").css({
                            "margin-top": -t.outerHeight() / 2 + "px",
                            "margin-left": -t.outerWidth() / 2 + "px"
                        }).stop(!0, !1).animate({
                            opacity: o.control_opacity.S(1).P()
                        }, {
                            duration: o.fade_speed.S(0).P(),
                            queue: !1
                        }) : t[0].style.display = "none"
                    }, l.src = "Hyena/controls/" + o.style + "_" + d + ".png"
                }
                o.sts = !1, i.removeClass("play")
            },
            SCR: function(i, o) {
                e(document).on("scroll", function() {
                    var n = e(window),
                        s = n.scrollTop(),
                        r = s + n.height(),
                        a = i.offset().top,
                        l = a + i.height(),
                        d = (n.height() * o.scroll_offset.P(), a <= r - i.height() / 2 && l >= s + i.height() / 4);
                    if (d) {
                        if (o.sts) return;
                        t.PL(i, o)
                    } else {
                        if (!o.sts) return;
                        t.ST(i, o, !1, !1)
                    }
                })
            }
        };
        e.fn.Hyena = function(i) {
            return t[i] ? t[i].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof i && i ? void e.error("Method " + i + " does not exist") : t.init.apply(this, arguments)
        }
    }(jQuery),
    function() {
        var e = navigator.userAgent.toLowerCase();
        jQuery.support.Hyena = {
            cEv: "ontouchstart" in window ? "touchstart" : "click",
            isTablet: null !== e.match(/iPad|Android|Kindle|NOOK|tablet/i),
            isMobile: /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase())
        }
    }(),
    function(e, t, i, o) {
        var n = i("html"),
            s = i(e),
            r = i(t),
            a = i.fancybox = function() {
                a.open.apply(this, arguments)
            },
            l = navigator.userAgent.match(/msie/i),
            d = null,
            c = t.createTouch !== o,
            p = function(e) {
                return e && e.hasOwnProperty && e instanceof i
            },
            u = function(e) {
                return e && "string" === i.type(e)
            },
            h = function(e) {
                return u(e) && 0 < e.indexOf("%")
            },
            f = function(e, t) {
                var i = parseInt(e, 10) || 0;
                return t && h(e) && (i *= a.getViewport()[t] / 100), Math.ceil(i)
            },
            g = function(e, t) {
                return f(e, t) + "px"
            };
        i.extend(a, {
            version: "2.1.5",
            defaults: {
                padding: 15,
                margin: 20,
                width: 800,
                height: 600,
                minWidth: 100,
                minHeight: 100,
                maxWidth: 9999,
                maxHeight: 9999,
                pixelRatio: 1,
                autoSize: !0,
                autoHeight: !1,
                autoWidth: !1,
                autoResize: !0,
                autoCenter: !c,
                fitToView: !0,
                aspectRatio: !1,
                topRatio: .5,
                leftRatio: .5,
                scrolling: "auto",
                wrapCSS: "",
                arrows: !0,
                closeBtn: !0,
                closeClick: !1,
                nextClick: !1,
                mouseWheel: !0,
                autoPlay: !1,
                playSpeed: 3e3,
                preload: 3,
                modal: !1,
                loop: !0,
                ajax: {
                    dataType: "html",
                    headers: {
                        "X-fancyBox": !0
                    }
                },
                iframe: {
                    scrolling: "auto",
                    preload: !0
                },
                swf: {
                    wmode: "transparent",
                    allowfullscreen: "true",
                    allowscriptaccess: "always"
                },
                keys: {
                    next: {
                        13: "left",
                        34: "up",
                        39: "left",
                        40: "up"
                    },
                    prev: {
                        8: "right",
                        33: "down",
                        37: "right",
                        38: "down"
                    },
                    close: [27],
                    play: [32],
                    toggle: [70]
                },
                direction: {
                    next: "left",
                    prev: "right"
                },
                scrollOutside: !0,
                index: 0,
                type: null,
                href: null,
                content: null,
                title: null,
                tpl: {
                    wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
                    image: '<img class="fancybox-image" src="{href}" alt="" />',
                    iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' + (l ? ' allowtransparency="true"' : "") + "></iframe>",
                    error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
                    closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
                    next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
                    prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
                },
                openEffect: "fade",
                openSpeed: 250,
                openEasing: "swing",
                openOpacity: !0,
                openMethod: "zoomIn",
                closeEffect: "fade",
                closeSpeed: 250,
                closeEasing: "swing",
                closeOpacity: !0,
                closeMethod: "zoomOut",
                nextEffect: "elastic",
                nextSpeed: 250,
                nextEasing: "swing",
                nextMethod: "changeIn",
                prevEffect: "elastic",
                prevSpeed: 250,
                prevEasing: "swing",
                prevMethod: "changeOut",
                helpers: {
                    overlay: !0,
                    title: !0
                },
                onCancel: i.noop,
                beforeLoad: i.noop,
                afterLoad: i.noop,
                beforeShow: i.noop,
                afterShow: i.noop,
                beforeChange: i.noop,
                beforeClose: i.noop,
                afterClose: i.noop
            },
            group: {},
            opts: {},
            previous: null,
            coming: null,
            current: null,
            isActive: !1,
            isOpen: !1,
            isOpened: !1,
            wrap: null,
            skin: null,
            outer: null,
            inner: null,
            player: {
                timer: null,
                isActive: !1
            },
            ajaxLoad: null,
            imgPreload: null,
            transitions: {},
            helpers: {},
            open: function(e, t) {
                return e && (i.isPlainObject(t) || (t = {}), !1 !== a.close(!0)) ? (i.isArray(e) || (e = p(e) ? i(e).get() : [e]), i.each(e, function(n, s) {
                    var r, l, d, c, h, f = {};
                    "object" === i.type(s) && (s.nodeType && (s = i(s)), p(s) ? (f = {
                        href: s.data("fancybox-href") || s.attr("href"),
                        title: s.data("fancybox-title") || s.attr("title"),
                        isDom: !0,
                        element: s
                    }, i.metadata && i.extend(!0, f, s.metadata())) : f = s), r = t.href || f.href || (u(s) ? s : null), l = t.title !== o ? t.title : f.title || "", c = (d = t.content || f.content) ? "html" : t.type || f.type, !c && f.isDom && (c = s.data("fancybox-type"), c || (c = (c = s.prop("class").match(/fancybox\.(\w+)/)) ? c[1] : null)), u(r) && (c || (a.isImage(r) ? c = "image" : a.isSWF(r) ? c = "swf" : "#" === r.charAt(0) ? c = "inline" : u(s) && (c = "html", d = s)), "ajax" === c && (h = r.split(/\s+/, 2), r = h.shift(), h = h.shift())), d || ("inline" === c ? r ? d = i(u(r) ? r.replace(/.*(?=#[^\s]+$)/, "") : r) : f.isDom && (d = s) : "html" === c ? d = r : !c && !r && f.isDom && (c = "inline", d = s)), i.extend(f, {
                        href: r,
                        type: c,
                        content: d,
                        title: l,
                        selector: h
                    }), e[n] = f
                }), a.opts = i.extend(!0, {}, a.defaults, t), t.keys !== o && (a.opts.keys = !!t.keys && i.extend({}, a.defaults.keys, t.keys)), a.group = e, a._start(a.opts.index)) : void 0
            },
            cancel: function() {
                var e = a.coming;
                e && !1 !== a.trigger("onCancel") && (a.hideLoading(), a.ajaxLoad && a.ajaxLoad.abort(), a.ajaxLoad = null, a.imgPreload && (a.imgPreload.onload = a.imgPreload.onerror = null), e.wrap && e.wrap.stop(!0, !0).trigger("onReset").remove(), a.coming = null, a.current || a._afterZoomOut(e))
            },
            close: function(e) {
                a.cancel(), !1 !== a.trigger("beforeClose") && (a.unbindEvents(), a.isActive && (a.isOpen && !0 !== e ? (a.isOpen = a.isOpened = !1, a.isClosing = !0, i(".fancybox-item, .fancybox-nav").remove(), a.wrap.stop(!0, !0).removeClass("fancybox-opened"), a.transitions[a.current.closeMethod]()) : (i(".fancybox-wrap").stop(!0).trigger("onReset").remove(), a._afterZoomOut())))
            },
            play: function(e) {
                var t = function() {
                        clearTimeout(a.player.timer)
                    },
                    i = function() {
                        t(), a.current && a.player.isActive && (a.player.timer = setTimeout(a.next, a.current.playSpeed))
                    },
                    o = function() {
                        t(), r.unbind(".player"), a.player.isActive = !1, a.trigger("onPlayEnd")
                    };
                !0 === e || !a.player.isActive && !1 !== e ? a.current && (a.current.loop || a.current.index < a.group.length - 1) && (a.player.isActive = !0, r.bind({
                    "onCancel.player beforeClose.player": o,
                    "onUpdate.player": i,
                    "beforeLoad.player": t
                }), i(), a.trigger("onPlayStart")) : o()
            },
            next: function(e) {
                var t = a.current;
                t && (u(e) || (e = t.direction.next), a.jumpto(t.index + 1, e, "next"))
            },
            prev: function(e) {
                var t = a.current;
                t && (u(e) || (e = t.direction.prev), a.jumpto(t.index - 1, e, "prev"))
            },
            jumpto: function(e, t, i) {
                var n = a.current;
                n && (e = f(e), a.direction = t || n.direction[e >= n.index ? "next" : "prev"], a.router = i || "jumpto", n.loop && (0 > e && (e = n.group.length + e % n.group.length), e %= n.group.length), n.group[e] !== o && (a.cancel(), a._start(e)))
            },
            reposition: function(e, t) {
                var o, n = a.current,
                    s = n ? n.wrap : null;
                s && (o = a._getPosition(t), e && "scroll" === e.type ? (delete o.position, s.stop(!0, !0).animate(o, 200)) : (s.css(o), n.pos = i.extend({}, n.dim, o)))
            },
            update: function(e) {
                var t = e && e.type,
                    i = !t || "orientationchange" === t;
                i && (clearTimeout(d), d = null), a.isOpen && !d && (d = setTimeout(function() {
                    var o = a.current;
                    o && !a.isClosing && (a.wrap.removeClass("fancybox-tmp"), (i || "load" === t || "resize" === t && o.autoResize) && a._setDimension(), "scroll" === t && o.canShrink || a.reposition(e), a.trigger("onUpdate"), d = null)
                }, i && !c ? 0 : 300))
            },
            toggle: function(e) {
                a.isOpen && (a.current.fitToView = "boolean" === i.type(e) ? e : !a.current.fitToView, c && (a.wrap.removeAttr("style").addClass("fancybox-tmp"), a.trigger("onUpdate")), a.update())
            },
            hideLoading: function() {
                r.unbind(".loading"), i("#fancybox-loading").remove()
            },
            showLoading: function() {
                var e, t;
                a.hideLoading(), e = i('<div id="fancybox-loading"><div></div></div>').click(a.cancel).appendTo("body"), r.bind("keydown.loading", function(e) {
                    27 === (e.which || e.keyCode) && (e.preventDefault(), a.cancel())
                }), a.defaults.fixed || (t = a.getViewport(), e.css({
                    position: "absolute",
                    top: .5 * t.h + t.y,
                    left: .5 * t.w + t.x
                }))
            },
            getViewport: function() {
                var t = a.current && a.current.locked || !1,
                    i = {
                        x: s.scrollLeft(),
                        y: s.scrollTop()
                    };
                return t ? (i.w = t[0].clientWidth, i.h = t[0].clientHeight) : (i.w = c && e.innerWidth ? e.innerWidth : s.width(), i.h = c && e.innerHeight ? e.innerHeight : s.height()), i
            },
            unbindEvents: function() {
                a.wrap && p(a.wrap) && a.wrap.unbind(".fb"), r.unbind(".fb"), s.unbind(".fb")
            },
            bindEvents: function() {
                var e, t = a.current;
                t && (s.bind("orientationchange.fb" + (c ? "" : " resize.fb") + (t.autoCenter && !t.locked ? " scroll.fb" : ""), a.update), (e = t.keys) && r.bind("keydown.fb", function(n) {
                    var s = n.which || n.keyCode,
                        r = n.target || n.srcElement;
                    return (27 !== s || !a.coming) && void!(n.ctrlKey || n.altKey || n.shiftKey || n.metaKey || r && (r.type || i(r).is("[contenteditable]")) || !i.each(e, function(e, r) {
                        return 1 < t.group.length && r[s] !== o ? (a[e](r[s]), n.preventDefault(), !1) : -1 < i.inArray(s, r) ? (a[e](), n.preventDefault(), !1) : void 0
                    }))
                }), i.fn.mousewheel && t.mouseWheel && a.wrap.bind("mousewheel.fb", function(e, o, n, s) {
                    for (var r = i(e.target || null), l = !1; r.length && !l && !r.is(".fancybox-skin") && !r.is(".fancybox-wrap");) l = r[0] && !(r[0].style.overflow && "hidden" === r[0].style.overflow) && (r[0].clientWidth && r[0].scrollWidth > r[0].clientWidth || r[0].clientHeight && r[0].scrollHeight > r[0].clientHeight), r = i(r).parent();
                    0 !== o && !l && 1 < a.group.length && !t.canShrink && (s > 0 || n > 0 ? a.prev(s > 0 ? "down" : "left") : (0 > s || 0 > n) && a.next(0 > s ? "up" : "right"), e.preventDefault())
                }))
            },
            trigger: function(e, t) {
                var o, n = t || a.coming || a.current;
                if (n) {
                    if (i.isFunction(n[e]) && (o = n[e].apply(n, Array.prototype.slice.call(arguments, 1))), !1 === o) return !1;
                    n.helpers && i.each(n.helpers, function(t, o) {
                        o && a.helpers[t] && i.isFunction(a.helpers[t][e]) && a.helpers[t][e](i.extend(!0, {}, a.helpers[t].defaults, o), n)
                    }), r.trigger(e)
                }
            },
            isImage: function(e) {
                return u(e) && e.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)
            },
            isSWF: function(e) {
                return u(e) && e.match(/\.(swf)((\?|#).*)?$/i)
            },
            _start: function(e) {
                var t, o, n = {};
                if (e = f(e), t = a.group[e] || null, !t) return !1;
                if (n = i.extend(!0, {}, a.opts, t), t = n.margin, o = n.padding, "number" === i.type(t) && (n.margin = [t, t, t, t]), "number" === i.type(o) && (n.padding = [o, o, o, o]), n.modal && i.extend(!0, n, {
                        closeBtn: !1,
                        closeClick: !1,
                        nextClick: !1,
                        arrows: !1,
                        mouseWheel: !1,
                        keys: null,
                        helpers: {
                            overlay: {
                                closeClick: !1
                            }
                        }
                    }), n.autoSize && (n.autoWidth = n.autoHeight = !0), "auto" === n.width && (n.autoWidth = !0), "auto" === n.height && (n.autoHeight = !0), n.group = a.group, n.index = e, a.coming = n, !1 === a.trigger("beforeLoad")) a.coming = null;
                else {
                    if (o = n.type, t = n.href, !o) return a.coming = null, !(!a.current || !a.router || "jumpto" === a.router) && (a.current.index = e, a[a.router](a.direction));
                    if (a.isActive = !0, ("image" === o || "swf" === o) && (n.autoHeight = n.autoWidth = !1, n.scrolling = "visible"), "image" === o && (n.aspectRatio = !0), "iframe" === o && c && (n.scrolling = "scroll"), n.wrap = i(n.tpl.wrap).addClass("fancybox-" + (c ? "mobile" : "desktop") + " fancybox-type-" + o + " fancybox-tmp " + n.wrapCSS).appendTo(n.parent || "body"), i.extend(n, {
                            skin: i(".fancybox-skin", n.wrap),
                            outer: i(".fancybox-outer", n.wrap),
                            inner: i(".fancybox-inner", n.wrap)
                        }), i.each(["Top", "Right", "Bottom", "Left"], function(e, t) {
                            n.skin.css("padding" + t, g(n.padding[e]))
                        }), a.trigger("onReady"), "inline" === o || "html" === o) {
                        if (!n.content || !n.content.length) return a._error("content")
                    } else if (!t) return a._error("href");
                    "image" === o ? a._loadImage() : "ajax" === o ? a._loadAjax() : "iframe" === o ? a._loadIframe() : a._afterLoad()
                }
            },
            _error: function(e) {
                i.extend(a.coming, {
                    type: "html",
                    autoWidth: !0,
                    autoHeight: !0,
                    minWidth: 0,
                    minHeight: 0,
                    scrolling: "no",
                    hasError: e,
                    content: a.coming.tpl.error
                }), a._afterLoad()
            },
            _loadImage: function() {
                var e = a.imgPreload = new Image;
                e.onload = function() {
                    this.onload = this.onerror = null, a.coming.width = this.width / a.opts.pixelRatio, a.coming.height = this.height / a.opts.pixelRatio, a._afterLoad()
                }, e.onerror = function() {
                    this.onload = this.onerror = null, a._error("image")
                }, e.src = a.coming.href, !0 !== e.complete && a.showLoading()
            },
            _loadAjax: function() {
                var e = a.coming;
                a.showLoading(), a.ajaxLoad = i.ajax(i.extend({}, e.ajax, {
                    url: e.href,
                    error: function(e, t) {
                        a.coming && "abort" !== t ? a._error("ajax", e) : a.hideLoading()
                    },
                    success: function(t, i) {
                        "success" === i && (e.content = t, a._afterLoad())
                    }
                }))
            },
            _loadIframe: function() {
                var e = a.coming,
                    t = i(e.tpl.iframe.replace(/\{rnd\}/g, (new Date).getTime())).attr("scrolling", c ? "auto" : e.iframe.scrolling).attr("src", e.href);
                i(e.wrap).bind("onReset", function() {
                    try {
                        i(this).find("iframe").hide().attr("src", "//about:blank").end().empty()
                    } catch (e) {}
                }), e.iframe.preload && (a.showLoading(), t.one("load", function() {
                    i(this).data("ready", 1), c || i(this).bind("load.fb", a.update), i(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show(), a._afterLoad()
                })), e.content = t.appendTo(e.inner), e.iframe.preload || a._afterLoad()
            },
            _preloadImages: function() {
                var e, t, i = a.group,
                    o = a.current,
                    n = i.length,
                    s = o.preload ? Math.min(o.preload, n - 1) : 0;
                for (t = 1; s >= t; t += 1) e = i[(o.index + t) % n], "image" === e.type && e.href && ((new Image).src = e.href)
            },
            _afterLoad: function() {
                var e, t, o, n, s, r = a.coming,
                    l = a.current;
                if (a.hideLoading(), r && !1 !== a.isActive)
                    if (!1 === a.trigger("afterLoad", r, l)) r.wrap.stop(!0).trigger("onReset").remove(), a.coming = null;
                    else {
                        switch (l && (a.trigger("beforeChange", l), l.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove()), a.unbindEvents(), e = r.content, t = r.type, o = r.scrolling, i.extend(a, {
                            wrap: r.wrap,
                            skin: r.skin,
                            outer: r.outer,
                            inner: r.inner,
                            current: r,
                            previous: l
                        }), n = r.href, t) {
                            case "inline":
                            case "ajax":
                            case "html":
                                r.selector ? e = i("<div>").html(e).find(r.selector) : p(e) && (e.data("fancybox-placeholder") || e.data("fancybox-placeholder", i('<div class="fancybox-placeholder"></div>').insertAfter(e).hide()), e = e.show().detach(), r.wrap.bind("onReset", function() {
                                    i(this).find(e).length && e.hide().replaceAll(e.data("fancybox-placeholder")).data("fancybox-placeholder", !1)
                                }));
                                break;
                            case "image":
                                e = r.tpl.image.replace("{href}", n);
                                break;
                            case "swf":
                                e = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + n + '"></param>', s = "", i.each(r.swf, function(t, i) {
                                    e += '<param name="' + t + '" value="' + i + '"></param>', s += " " + t + '="' + i + '"'
                                }), e += '<embed src="' + n + '" type="application/x-shockwave-flash" width="100%" height="100%"' + s + "></embed></object>"
                        }(!p(e) || !e.parent().is(r.inner)) && r.inner.append(e), a.trigger("beforeShow"), r.inner.css("overflow", "yes" === o ? "scroll" : "no" === o ? "hidden" : o), a._setDimension(), a.reposition(), a.isOpen = !1, a.coming = null, a.bindEvents(), a.isOpened ? l.prevMethod && a.transitions[l.prevMethod]() : i(".fancybox-wrap").not(r.wrap).stop(!0).trigger("onReset").remove(), a.transitions[a.isOpened ? r.nextMethod : r.openMethod](), a._preloadImages()
                    }
            },
            _setDimension: function() {
                var e, t, o, n, s, r, l, d, c, p = a.getViewport(),
                    u = 0,
                    y = !1,
                    v = !1,
                    y = a.wrap,
                    m = a.skin,
                    w = a.inner,
                    b = a.current,
                    v = b.width,
                    x = b.height,
                    k = b.minWidth,
                    T = b.minHeight,
                    S = b.maxWidth,
                    C = b.maxHeight,
                    $ = b.scrolling,
                    _ = b.scrollOutside ? b.scrollbarWidth : 0,
                    P = b.margin,
                    A = f(P[1] + P[3]),
                    E = f(P[0] + P[2]);
                if (y.add(m).add(w).width("auto").height("auto").removeClass("fancybox-tmp"), P = f(m.outerWidth(!0) - m.width()), e = f(m.outerHeight(!0) - m.height()), t = A + P, o = E + e, n = h(v) ? (p.w - t) * f(v) / 100 : v, s = h(x) ? (p.h - o) * f(x) / 100 : x, "iframe" === b.type) {
                    if (c = b.content, b.autoHeight && 1 === c.data("ready")) try {
                        c[0].contentWindow.document.location && (w.width(n).height(9999), r = c.contents().find("body"), _ && r.css("overflow-x", "hidden"), s = r.outerHeight(!0))
                    } catch (j) {}
                } else(b.autoWidth || b.autoHeight) && (w.addClass("fancybox-tmp"), b.autoWidth || w.width(n), b.autoHeight || w.height(s), b.autoWidth && (n = w.width()), b.autoHeight && (s = w.height()), w.removeClass("fancybox-tmp"));
                if (v = f(n), x = f(s), d = n / s, k = f(h(k) ? f(k, "w") - t : k), S = f(h(S) ? f(S, "w") - t : S), T = f(h(T) ? f(T, "h") - o : T), C = f(h(C) ? f(C, "h") - o : C), r = S, l = C, b.fitToView && (S = Math.min(p.w - t, S), C = Math.min(p.h - o, C)), t = p.w - A, E = p.h - E, b.aspectRatio ? (v > S && (v = S, x = f(v / d)), x > C && (x = C, v = f(x * d)), k > v && (v = k, x = f(v / d)), T > x && (x = T, v = f(x * d))) : (v = Math.max(k, Math.min(v, S)), b.autoHeight && "iframe" !== b.type && (w.width(v), x = w.height()), x = Math.max(T, Math.min(x, C))), b.fitToView)
                    if (w.width(v).height(x), y.width(v + P), p = y.width(), A = y.height(), b.aspectRatio)
                        for (;
                            (p > t || A > E) && v > k && x > T && !(19 < u++);) x = Math.max(T, Math.min(C, x - 10)), v = f(x * d), k > v && (v = k, x = f(v / d)), v > S && (v = S, x = f(v / d)), w.width(v).height(x), y.width(v + P), p = y.width(), A = y.height();
                    else v = Math.max(k, Math.min(v, v - (p - t))), x = Math.max(T, Math.min(x, x - (A - E)));
                _ && "auto" === $ && s > x && t > v + P + _ && (v += _), w.width(v).height(x), y.width(v + P), p = y.width(),
                    A = y.height(), y = (p > t || A > E) && v > k && x > T, v = b.aspectRatio ? r > v && l > x && n > v && s > x : (r > v || l > x) && (n > v || s > x), i.extend(b, {
                        dim: {
                            width: g(p),
                            height: g(A)
                        },
                        origWidth: n,
                        origHeight: s,
                        canShrink: y,
                        canExpand: v,
                        wPadding: P,
                        hPadding: e,
                        wrapSpace: A - m.outerHeight(!0),
                        skinSpace: m.height() - x
                    }), !c && b.autoHeight && x > T && C > x && !v && w.height("auto")
            },
            _getPosition: function(e) {
                var t = a.current,
                    i = a.getViewport(),
                    o = t.margin,
                    n = a.wrap.width() + o[1] + o[3],
                    s = a.wrap.height() + o[0] + o[2],
                    o = {
                        position: "absolute",
                        top: o[0],
                        left: o[3]
                    };
                return t.autoCenter && t.fixed && !e && s <= i.h && n <= i.w ? o.position = "fixed" : t.locked || (o.top += i.y, o.left += i.x), o.top = g(Math.max(o.top, o.top + (i.h - s) * t.topRatio)), o.left = g(Math.max(o.left, o.left + (i.w - n) * t.leftRatio)), o
            },
            _afterZoomIn: function() {
                var e = a.current;
                e && (a.isOpen = a.isOpened = !0, a.wrap.css("overflow", "visible").addClass("fancybox-opened"), a.update(), (e.closeClick || e.nextClick && 1 < a.group.length) && a.inner.css("cursor", "pointer").bind("click.fb", function(t) {
                    !i(t.target).is("a") && !i(t.target).parent().is("a") && (t.preventDefault(), a[e.closeClick ? "close" : "next"]())
                }), e.closeBtn && i(e.tpl.closeBtn).appendTo(a.skin).bind("click.fb", function(e) {
                    e.preventDefault(), a.close()
                }), e.arrows && 1 < a.group.length && ((e.loop || 0 < e.index) && i(e.tpl.prev).appendTo(a.outer).bind("click.fb", a.prev), (e.loop || e.index < a.group.length - 1) && i(e.tpl.next).appendTo(a.outer).bind("click.fb", a.next)), a.trigger("afterShow"), e.loop || e.index !== e.group.length - 1 ? a.opts.autoPlay && !a.player.isActive && (a.opts.autoPlay = !1, a.play()) : a.play(!1))
            },
            _afterZoomOut: function(e) {
                e = e || a.current, i(".fancybox-wrap").trigger("onReset").remove(), i.extend(a, {
                    group: {},
                    opts: {},
                    router: !1,
                    current: null,
                    isActive: !1,
                    isOpened: !1,
                    isOpen: !1,
                    isClosing: !1,
                    wrap: null,
                    skin: null,
                    outer: null,
                    inner: null
                }), a.trigger("afterClose", e)
            }
        }), a.transitions = {
            getOrigPosition: function() {
                var e = a.current,
                    t = e.element,
                    i = e.orig,
                    o = {},
                    n = 50,
                    s = 50,
                    r = e.hPadding,
                    l = e.wPadding,
                    d = a.getViewport();
                return !i && e.isDom && t.is(":visible") && (i = t.find("img:first"), i.length || (i = t)), p(i) ? (o = i.offset(), i.is("img") && (n = i.outerWidth(), s = i.outerHeight())) : (o.top = d.y + (d.h - s) * e.topRatio, o.left = d.x + (d.w - n) * e.leftRatio), ("fixed" === a.wrap.css("position") || e.locked) && (o.top -= d.y, o.left -= d.x), o = {
                    top: g(o.top - r * e.topRatio),
                    left: g(o.left - l * e.leftRatio),
                    width: g(n + l),
                    height: g(s + r)
                }
            },
            step: function(e, t) {
                var i, o, n = t.prop;
                o = a.current;
                var s = o.wrapSpace,
                    r = o.skinSpace;
                ("width" === n || "height" === n) && (i = t.end === t.start ? 1 : (e - t.start) / (t.end - t.start), a.isClosing && (i = 1 - i), o = "width" === n ? o.wPadding : o.hPadding, o = e - o, a.skin[n](f("width" === n ? o : o - s * i)), a.inner[n](f("width" === n ? o : o - s * i - r * i)))
            },
            zoomIn: function() {
                var e = a.current,
                    t = e.pos,
                    o = e.openEffect,
                    n = "elastic" === o,
                    s = i.extend({
                        opacity: 1
                    }, t);
                delete s.position, n ? (t = this.getOrigPosition(), e.openOpacity && (t.opacity = .1)) : "fade" === o && (t.opacity = .1), a.wrap.css(t).animate(s, {
                    duration: "none" === o ? 0 : e.openSpeed,
                    easing: e.openEasing,
                    step: n ? this.step : null,
                    complete: a._afterZoomIn
                })
            },
            zoomOut: function() {
                var e = a.current,
                    t = e.closeEffect,
                    i = "elastic" === t,
                    o = {
                        opacity: .1
                    };
                i && (o = this.getOrigPosition(), e.closeOpacity && (o.opacity = .1)), a.wrap.animate(o, {
                    duration: "none" === t ? 0 : e.closeSpeed,
                    easing: e.closeEasing,
                    step: i ? this.step : null,
                    complete: a._afterZoomOut
                })
            },
            changeIn: function() {
                var e, t = a.current,
                    i = t.nextEffect,
                    o = t.pos,
                    n = {
                        opacity: 1
                    },
                    s = a.direction;
                o.opacity = .1, "elastic" === i && (e = "down" === s || "up" === s ? "top" : "left", "down" === s || "right" === s ? (o[e] = g(f(o[e]) - 200), n[e] = "+=200px") : (o[e] = g(f(o[e]) + 200), n[e] = "-=200px")), "none" === i ? a._afterZoomIn() : a.wrap.css(o).animate(n, {
                    duration: t.nextSpeed,
                    easing: t.nextEasing,
                    complete: a._afterZoomIn
                })
            },
            changeOut: function() {
                var e = a.previous,
                    t = e.prevEffect,
                    o = {
                        opacity: .1
                    },
                    n = a.direction;
                "elastic" === t && (o["down" === n || "up" === n ? "top" : "left"] = ("up" === n || "left" === n ? "-" : "+") + "=200px"), e.wrap.animate(o, {
                    duration: "none" === t ? 0 : e.prevSpeed,
                    easing: e.prevEasing,
                    complete: function() {
                        i(this).trigger("onReset").remove()
                    }
                })
            }
        }, a.helpers.overlay = {
            defaults: {
                closeClick: !0,
                speedOut: 200,
                showEarly: !0,
                css: {},
                locked: !c,
                fixed: !0
            },
            overlay: null,
            fixed: !1,
            el: i("html"),
            create: function(e) {
                e = i.extend({}, this.defaults, e), this.overlay && this.close(), this.overlay = i('<div class="fancybox-overlay"></div>').appendTo(a.coming ? a.coming.parent : e.parent), this.fixed = !1, e.fixed && a.defaults.fixed && (this.overlay.addClass("fancybox-overlay-fixed"), this.fixed = !0)
            },
            open: function(e) {
                var t = this;
                e = i.extend({}, this.defaults, e), this.overlay ? this.overlay.unbind(".overlay").width("auto").height("auto") : this.create(e), this.fixed || (s.bind("resize.overlay", i.proxy(this.update, this)), this.update()), e.closeClick && this.overlay.bind("click.overlay", function(e) {
                    return i(e.target).hasClass("fancybox-overlay") ? (a.isActive ? a.close() : t.close(), !1) : void 0
                }), this.overlay.css(e.css).show()
            },
            close: function() {
                var e, t;
                s.unbind("resize.overlay"), this.el.hasClass("fancybox-lock") && (i(".fancybox-margin").removeClass("fancybox-margin"), e = s.scrollTop(), t = s.scrollLeft(), this.el.removeClass("fancybox-lock"), s.scrollTop(e).scrollLeft(t)), i(".fancybox-overlay").remove().hide(), i.extend(this, {
                    overlay: null,
                    fixed: !1
                })
            },
            update: function() {
                var e, i = "100%";
                this.overlay.width(i).height("100%"), l ? (e = Math.max(t.documentElement.offsetWidth, t.body.offsetWidth), r.width() > e && (i = r.width())) : r.width() > s.width() && (i = r.width()), this.overlay.width(i).height(r.height())
            },
            onReady: function(e, t) {
                var o = this.overlay;
                i(".fancybox-overlay").stop(!0, !0), o || this.create(e), e.locked && this.fixed && t.fixed && (o || (this.margin = r.height() > s.height() && i("html").css("margin-right").replace("px", "")), t.locked = this.overlay.append(t.wrap), t.fixed = !1), !0 === e.showEarly && this.beforeShow.apply(this, arguments)
            },
            beforeShow: function(e, t) {
                var o, n;
                t.locked && (!1 !== this.margin && (i("*").filter(function() {
                    return "fixed" === i(this).css("position") && !i(this).hasClass("fancybox-overlay") && !i(this).hasClass("fancybox-wrap")
                }).addClass("fancybox-margin"), this.el.addClass("fancybox-margin")), o = s.scrollTop(), n = s.scrollLeft(), this.el.addClass("fancybox-lock"), s.scrollTop(o).scrollLeft(n)), this.open(e)
            },
            onUpdate: function() {
                this.fixed || this.update()
            },
            afterClose: function(e) {
                this.overlay && !a.coming && this.overlay.fadeOut(e.speedOut, i.proxy(this.close, this))
            }
        }, a.helpers.title = {
            defaults: {
                type: "float",
                position: "bottom"
            },
            beforeShow: function(e) {
                var t = a.current,
                    o = t.title,
                    n = e.type;
                if (i.isFunction(o) && (o = o.call(t.element, t)), u(o) && "" !== i.trim(o)) {
                    switch (t = i('<div class="fancybox-title fancybox-title-' + n + '-wrap">' + o + "</div>"), n) {
                        case "inside":
                            n = a.skin;
                            break;
                        case "outside":
                            n = a.wrap;
                            break;
                        case "over":
                            n = a.inner;
                            break;
                        default:
                            n = a.skin, t.appendTo("body"), l && t.width(t.width()), t.wrapInner('<span class="child"></span>'), a.current.margin[2] += Math.abs(f(t.css("margin-bottom")))
                    }
                    t["top" === e.position ? "prependTo" : "appendTo"](n)
                }
            }
        }, i.fn.fancybox = function(e) {
            var t, o = i(this),
                n = this.selector || "",
                s = function(s) {
                    var r, l, d = i(this).blur(),
                        c = t;
                    !(s.ctrlKey || s.altKey || s.shiftKey || s.metaKey || d.is(".fancybox-wrap") || (r = e.groupAttr || "data-fancybox-group", l = d.attr(r), l || (r = "rel", l = d.get(0)[r]), l && "" !== l && "nofollow" !== l && (d = n.length ? i(n) : o, d = d.filter("[" + r + '="' + l + '"]'), c = d.index(this)), e.index = c, !1 === a.open(d, e) || !s.preventDefault()))
                };
            return e = e || {}, t = e.index || 0, n && !1 !== e.live ? r.undelegate(n, "click.fb-start").delegate(n + ":not('.fancybox-item, .fancybox-nav')", "click.fb-start", s) : o.unbind("click.fb-start").bind("click.fb-start", s), this.filter("[data-fancybox-start=1]").trigger("click"), this
        }, r.ready(function() {
            var t, s;
            if (i.scrollbarWidth === o && (i.scrollbarWidth = function() {
                    var e = i('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),
                        t = e.children(),
                        t = t.innerWidth() - t.height(99).innerWidth();
                    return e.remove(), t
                }), i.support.fixedPosition === o) {
                t = i.support, s = i('<div style="position:fixed;top:20px;"></div>').appendTo("body");
                var r = 20 === s[0].offsetTop || 15 === s[0].offsetTop;
                s.remove(), t.fixedPosition = r
            }
            i.extend(a.defaults, {
                scrollbarWidth: i.scrollbarWidth(),
                fixed: i.support.fixedPosition,
                parent: i("body")
            }), t = i(e).width(), n.addClass("fancybox-lock-test"), s = i(e).width(), n.removeClass("fancybox-lock-test"), i("<style type='text/css'>.fancybox-margin{margin-right:" + (s - t) + "px;}</style>").appendTo("head")
        })
    }(window, document, jQuery);
var bb = {
    isMobile: !1,
    isRTL: !1,
    html: jQuery("html"),
    windowWidth: jQuery(window).width(),
    windowHeight: jQuery(window).height(),
    stickyBorder: jQuery("#sticky-border").offset().top,
    fixedHeader: 0,
    scrollTop: 0,
    floatingPagination: 0,
    adminBar: 0
};
! function(e) {
    "use strict";

    function t() {
        var e = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        return e
    }

    function i() {
        bb.windowWidth = e(window).width(), bb.windowHeight = e(window).height(), e(".wh").css("height", bb.windowHeight + "px"), e(".min-wh").css("min-height", bb.windowHeight + "px"), e(".error404 .page-wrapper").css("min-height", bb.windowHeight);
        var t = e(".page-wrapper").width(),
            i = e(".page-wrapper").width();
        e("#video-stream .viewport").css("height", e("#video-stream .video-wrapper").height()), e("#header .top").css("width", t), e("#header .bottom").css("width", i), e("#wpadminbar").length && (bb.adminBar = e("#wpadminbar").outerHeight(!0))
    }
    t() ? (bb.isMobile = !0, bb.html.addClass("mobile")) : (bb.isMobile = !1, bb.html.addClass("desktop")), e("body").hasClass("rtl") && (bb.isRTL = !0), i(), headerAlignment();
    var o = e(".bb-tabs .tabs-menu>li.active");
    if (o.length > 0)
        for (var n = 0; n < o.length; n++) {
            var s = e(o[n]).children().attr("href");
            e(s).addClass("active").show()
        }
    e(".bb-tabs .tabs-menu a").on("click", function(t) {
        var i = e(this),
            o = i.attr("href"),
            n = i.closest(".bb-tabs"),
            s = n.find(".tab-content");
        i.parent().addClass("active"), i.parent().siblings().removeClass("active"), s.not(o).removeClass("active").hide(), e(o).addClass("active").fadeIn(500), t.preventDefault()
    }), e(window).load(function() {
        i(), headerAlignment(), fixedHeader(), bb.html.addClass("page-loaded")
    }), e(window).resize(function() {
        i(), this.resizeTO && clearTimeout(this.resizeTO), this.resizeTO = setTimeout(function() {
            e(this).trigger("resizeEnd")
        }, 100)
    }), e(window).bind("resizeEnd", function() {
        headerAlignment()
    }), jQuery(window).scroll(function() {
        bb.scrollTop = jQuery(window).scrollTop(), bb.stickyBorder = jQuery("#sticky-border").offset().top
    })
}(jQuery), jQuery.fn.fitText = function() {
        return this.each(function() {
            for (var e = jQuery(this), t = e.css("font-size"), i = parseFloat(t), o = i; o > 3 && (e.css("font-size", o), !(e.width() <= e.parent().width())); o--);
        })
    },
    function(e) {
        "use strict";

        function t() {
            e('.single .single.post img[src*=".gif"],.post-list.standard img[src*=".gif"]').not('.gallery-item img[src*=".gif"], .regif_row_parent img[src*=".gif"],.next-prev-pagination img[src*=".gif"]').Hyena({
                style: 1,
                controls: !1,
                on_hover: "hover" == boombox_gif_event,
                on_scroll: "scroll" == boombox_gif_event
            })
        }

        function i(t) {
            var i = e(t).parent(),
                o = !0;
            if (bb.isMobile) i.on("click", function() {
                return i.addClass("play"), t.play(), e(t).prop("controls", !0), e(t).prop("muted", !1), i.find(".icon-volume").hide(), !1
            });
            else {
                new Waypoint.Inview({
                    element: t,
                    entered: function() {
                        o && (i.addClass("play"), t.play())
                    },
                    exited: function() {
                        o && setTimeout(function() {
                            t.pause()
                        }, 150)
                    }
                });
                i.find(".icon-volume").on("click", function() {
                    return e(t).prop("controls", !0), e(t).prop("muted", !1), e(this).hide(), o = !1, !1
                })
            }
        }

        function o(t) {
            t.pause(), e(t).attr("width", "100%").attr("height", "auto");
            var i = e(t).parent(),
                o = !0;
            if (bb.isMobile && e(t).attr("webkit-playsinline", "webkit-playsinline"), "hover" == boombox_gif_event) i.on("mouseenter touchstart", function() {
                i.addClass("play"), t.play()
            }).on("mouseleave touchend", function() {
                i.removeClass("play"), t.pause()
            });
            else if ("scroll" == boombox_gif_event) {
                new Waypoint.Inview({
                    element: t,
                    entered: function() {
                        o && (i.addClass("play"), t.play())
                    },
                    exited: function() {
                        o && setTimeout(function() {
                            i.removeClass("play"), t.pause()
                        }, 150)
                    }
                })
            }
            i.on("click", function(e) {
                return e.stopPropagation(), i.hasClass("play") ? (t.pause(), i.removeClass("play")) : (t.play(), i.addClass("play")), !1
            })
        }

        function n(t) {
            var i, o = e(t).parent(),
                n = e(t).attr("src");
            o[0].addEventListener("click", function() {
                if (e(this).hasClass("video-done")) s(i);
                else {
                    var o = e(t).data("video");
                    i = document.createElement("video"), i.setAttribute("loop", !0), i.setAttribute("poster", n), i.setAttribute("webkit-playsinline", "webkit-playsinline");
                    var r = document.createElement("source");
                    r.setAttribute("src", o), r.setAttribute("type", "video/mp4"), i.appendChild(r), e(this)[0].appendChild(i), s(i), e(this).find("img").remove(), e(this).addClass("video-done")
                }
            });
            new Waypoint.Inview({
                element: o,
                exited: function() {
                    if (o.hasClass("video-done")) {
                        var t = "<img  src=" + n + ' alt="">';
                        e(t).appendTo(o), o.find("video").remove(), o.removeClass("play"), o.removeClass("video-done")
                    }
                }
            })
        }

        function s(t) {
            if (t.paused) {
                var i = t.play();
                void 0 === i ? t.setAttribute("controls", !0) : i.then(function() {})["catch"](function(e) {
                    t.setAttribute("controls", !0)
                }), e(t).parent().addClass("play")
            } else t.pause(), e(t).parent().removeClass("play")
        }

        function r() {
            u = new YT.Player("stream-player", {
                height: "420",
                width: "760",
                videoId: f,
                events: {
                    onReady: a,
                    onStateChange: l
                }
            })
        }

        function a(e) {
            h.find(".video-play").on("click", function(t) {
                t.preventDefault(), e.target.playVideo(), h.addClass("isPlaying")
            })
        }

        function l(e) {}

        function d(t) {
            var i = e("#sticky-share-box"),
                o = 0,
                n = 0;
            if (bb.adminBar && (n = bb.adminBar), bb.fixedHeader ? o = bb.fixedHeader + n : bb.floatingPagination && (o = bb.floatingPagination + n), !t) {
                new Waypoint.Sticky({
                    element: i[0],
                    offset: o
                })
            }
            var s = i.parent(".sticky-wrapper"),
                r = s.outerWidth();
            i.removeAttr("style"), i.css({
                width: r,
                top: o + "px"
            }), e(window).scroll(function() {
                bb.scrollTop >= bb.stickyBorder - 500 ? i.addClass("hidden") : i.removeClass("hidden")
            })
        }

        function c(t, i) {
            if (e("#secondary").outerHeight(!0) < e("#main").outerHeight(!0)) {
                var o = e(i),
                    n = 0;
                if (m = o.innerHeight(), w = 25, bb.adminBar && (n = bb.adminBar), bb.fixedHeader ? w = bb.fixedHeader + n + 25 : bb.floatingPagination && (w = bb.floatingPagination + n + 25), !t) {
                    new Waypoint.Sticky({
                        element: o[0],
                        offset: w
                    });
                    t = !0
                }
                var s = o.parent(".sticky-wrapper"),
                    r = s.outerWidth();
                o.removeAttr("style"), o.css({
                    width: r,
                    top: w + "px"
                }), e(window).scroll(function() {
                    bb.scrollTop >= bb.stickyBorder - m - w ? o.css({
                        position: "absolute",
                        bottom: 0,
                        top: "inherit",
                        width: r
                    }) : (o.removeAttr("style"), o.css({
                        width: r,
                        top: w + "px"
                    }))
                })
            }
        }

        function p(t) {
            var i = e(t),
                o = i.nextAll(".widget");
            e(o).appendTo(i)
        }
        if (e("#secondary .widget:first,#secondary-container .widget:first").addClass("first"), e(".featured-carousel").length && (e(".featured-carousel.big-item").slick({
                infinite: !1,
                slidesToShow: 6,
                slidesToScroll: 2,
                rtl: bb.isRTL,
                responsive: [{
                    breakpoint: 1e3,
                    settings: {
                        arrows: !1,
                        slidesToShow: 4,
                        slidesToScroll: 2
                    }
                }, {
                    breakpoint: 600,
                    settings: {
                        arrows: !0,
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                }, {
                    breakpoint: 480,
                    settings: {
                        arrows: !0,
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }, {
                    breakpoint: 0,
                    settings: {
                        arrows: !0,
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }]
            }), e(".featured-carousel.small-item").slick({
                infinite: !1,
                slidesToShow: 8,
                slidesToScroll: 2,
                rtl: bb.isRTL,
                responsive: [{
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 6,
                        slidesToScroll: 2
                    }
                }, {
                    breakpoint: 1e3,
                    settings: {
                        arrows: !1,
                        slidesToShow: 4,
                        slidesToScroll: 2
                    }
                }, {
                    breakpoint: 600,
                    settings: {
                        arrows: !0,
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                }, {
                    breakpoint: 480,
                    settings: {
                        arrows: !0,
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }, {
                    breakpoint: 0,
                    settings: {
                        arrows: !0,
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }]
            })), e(".js-inline-popup").fancybox({
                padding: 0
            }), bb.isMobile && "hover" == boombox_gif_event && (boombox_gif_event = "click"), t(), bb.html.hasClass("video") && (e(".post-thumbnail video").not(".gif-video").each(function() {
                var t = e(this)[0];
                i(t)
            }), e(" video.gif-video").each(function() {
                var t = e(this)[0];
                o(t)
            }), e(" img.gif-image").each(function() {
                var t = e(this)[0];
                n(t)
            })), e("#stream-player").length) {
            var u, h = e("#video-stream"),
                f = e("#stream-player").data("id");
            r();
            var g = h.find("li.active"),
                y = g.position(),
                v = document.getElementById("stream-scroll");
            v.scrollTop = y.top
        }
        e(document).on("click", ".top-search .js-toggle", function(t) {
            t.preventDefault(), t.stopPropagation();
            var i = e(this);
            i.parent().hasClass("open") ? i.parent().removeClass("open") : (i.parent().addClass("open"), setTimeout(function() {
                i.parent().find("input")[0].focus()
            }, 3e3))
        }), e(document).on("click", ".top-search,#more-menu,#mobile-navigation", function(e) {
            e.stopPropagation()
        }), e(document).on("touchstart click", "#mobile-nav-bg", function(t) {
            e(".top-search").removeClass("open"), e("#more-menu-toggle").removeClass("active"), e(".more-menu-item .more-menu").removeClass("active"), e(".toggled-on").removeClass("toggled-on"), bb.html.hasClass("main-menu-open") && (t.preventDefault(), bb.html.removeClass("main-menu-open"))
        }), e(document).on("click", "#menu-button", function(e) {
            e.stopPropagation(), e.preventDefault(), bb.html.addClass("main-menu-open")
        }), e(document).on("click", "#menu-close", function(e) {
            e.stopPropagation(), e.preventDefault(), bb.html.removeClass("main-menu-open")
        }), e(document).on("click", "#more-menu-toggle", function(t) {
            t.stopPropagation(), t.preventDefault(), e(this).toggleClass("active"), e(".more-menu-item .more-menu").toggleClass("active")
        }), e(document).on("click", "#go-top", function() {
            return e("body,html").animate({
                scrollTop: 0
            }, 800), !1
        }), bb.isMobile && e(".account-box .user-box .menu").length && e(".account-box .user-box > a").on("click", function(t) {
            t.preventDefault(), e(this).parent().toggleClass("active")
        }), e("#sticky-share-box").length && d(!1);
        var m = 1,
            w = 25;
        if (e("#load-more-button").length) {
            var b = e("#load-more-button"),
                x = !1,
                k = !1,
                T = b.data("scroll");
            e("#load-more-button").on("click", function() {
                if (!x) {
                    x = !0;
                    var t = b.attr("data-next_url");
                    b.parent().addClass("loading"), jQuery.post(t, {}, function(t) {
                        var s = e(t),
                            r = s.find("#post-items"),
                            a = r.find("article").addClass("item-added"),
                            l = s.find("#load-more-button");
                        if (e("#post-items").append(a), e('.post-list.standard .item-added  img[src*=".gif"]').Hyena({
                                style: 1,
                                controls: !1,
                                on_hover: "hover" == boombox_gif_event,
                                on_scroll: "scroll" == boombox_gif_event
                            }), e("#secondary .sticky-sidebar,#secondary-container .sticky-sidebar").length && !bb.isMobile && c(!0, ".sticky-sidebar"), e("html").hasClass("video") && (e("#post-items  .item-added video").not(".gif-video").each(function() {
                                var t = e(this)[0];
                                i(t)
                            }), e("#post-items  .item-added video.gif-video").each(function() {
                                var t = e(this)[0];
                                o(t)
                            }), e("#post-items  .item-added img.gif-image").each(function() {
                                var t = e(this)[0];
                                n(t)
                            })), e(".has-full-post-button .post-list.standard .item-added .post-thumbnail img").each(function() {
                                ShowFullPost(e(this))
                            }), e("#post-items  .item-added").removeClass("item-added"), b.parent().removeClass("loading"), l.length > 0) {
                            var d = l.data("next_url");
                            b.attr("data-next_url", d)
                        } else b.parent().remove();
                        x = !1, k = !0, "on_demand" !== T && "infinite_scroll" !== T || S()
                    })
                }
            });
            var S = function() {
                return !("on_demand" === T && !k) && void b.waypoint(function(e) {
                    "down" === e && b.trigger("click")
                }, {
                    offset: "150%"
                })
            };
            "infinite_scroll" === T && S()
        }
        e("body").on("alnp-post-loaded", function() {
            e("div#balnp_content_container  .item-added video").not(".gif-video").each(function() {
                var t = e(this)[0];
                i(t)
            }), e("div#balnp_content_container  .item-added video.gif-video").each(function() {
                var t = e(this)[0];
                o(t)
            }), e("div#balnp_content_container  .item-added img.gif-image").each(function() {
                var t = e(this)[0];
                n(t)
            }), e("div#balnp_content_container .item-added").removeClass("item-added")
        }), initMainNavigation(e(".main-navigation")), floatingPagination(), e(".has-full-post-button .post-list.standard .post-thumbnail img").each(function() {
            ShowFullPost(e(this))
        }), e("body").on("alnp-post-loaded", function() {
            "undefined" != typeof ZombifyOnAjax && ZombifyOnAjax && ZombifyOnAjax()
        }), e(window).load(function() {
            e("#sticky-share-box").length && d(!0), e(".sticky-sidebar").length && !bb.isMobile && e(".sticky-sidebar").each(function() {
                p(e(this)), c(!1, e(this))
            })
        }), e(window).resize(function() {
            e("#secondary .sticky-sidebar,#secondary-container .sticky-sidebar").length && !bb.isMobile && (c(!0, ".sticky-sidebar"), e(window).scroll()), e("#sticky-share-box").length && d(!0)
        }), e(window).scroll(function() {
            bb.scrollTop >= 500 ? e("#go-top").addClass("show") : e("#go-top").removeClass("show"), bb.scrollTop >= bb.stickyBorder - 500 ? e(".fixed-pagination").addClass("hide") : e(".fixed-pagination").removeClass("hide")
        }), e(function() {
            setFormPlaceholders(".woocommerce", ".form-row")
        }), e(window).load(function() {
            setFormPlaceholders(".woocommerce", ".form-row")
        }), e(".nav.disabled a").click(function(e) {
            e.preventDefault()
        })
    }(jQuery);