!(function(e) {
  (e.color = {}),
    (e.color.make = function(t, i, o, n) {
      var r = {};
      return (
        (r.r = t || 0),
        (r.g = i || 0),
        (r.b = o || 0),
        (r.a = null != n ? n : 1),
        (r.add = function(e, t) {
          for (var i = 0; i < e.length; ++i) r[e.charAt(i)] += t;
          return r.normalize();
        }),
        (r.scale = function(e, t) {
          for (var i = 0; i < e.length; ++i) r[e.charAt(i)] *= t;
          return r.normalize();
        }),
        (r.toString = function() {
          return r.a >= 1
            ? "rgb(" + [r.r, r.g, r.b].join(",") + ")"
            : "rgba(" + [r.r, r.g, r.b, r.a].join(",") + ")";
        }),
        (r.normalize = function() {
          function e(e, t, i) {
            return t < e ? e : t > i ? i : t;
          }
          return (
            (r.r = e(0, parseInt(r.r), 255)),
            (r.g = e(0, parseInt(r.g), 255)),
            (r.b = e(0, parseInt(r.b), 255)),
            (r.a = e(0, r.a, 1)),
            r
          );
        }),
        (r.clone = function() {
          return e.color.make(r.r, r.b, r.g, r.a);
        }),
        r.normalize()
      );
    }),
    (e.color.extract = function(t, i) {
      var o;
      do {
        if ("" != (o = t.css(i).toLowerCase()) && "transparent" != o) break;
        t = t.parent();
      } while (t.length && !e.nodeName(t.get(0), "body"));
      return "rgba(0, 0, 0, 0)" == o && (o = "transparent"), e.color.parse(o);
    }),
    (e.color.parse = function(i) {
      var o,
        n = e.color.make;
      if (
        (o = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(
          i
        ))
      )
        return n(parseInt(o[1], 10), parseInt(o[2], 10), parseInt(o[3], 10));
      if (
        (o = /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(
          i
        ))
      )
        return n(
          parseInt(o[1], 10),
          parseInt(o[2], 10),
          parseInt(o[3], 10),
          parseFloat(o[4])
        );
      if (
        (o = /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(
          i
        ))
      )
        return n(
          2.55 * parseFloat(o[1]),
          2.55 * parseFloat(o[2]),
          2.55 * parseFloat(o[3])
        );
      if (
        (o = /rgba\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(
          i
        ))
      )
        return n(
          2.55 * parseFloat(o[1]),
          2.55 * parseFloat(o[2]),
          2.55 * parseFloat(o[3]),
          parseFloat(o[4])
        );
      if ((o = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(i)))
        return n(parseInt(o[1], 16), parseInt(o[2], 16), parseInt(o[3], 16));
      if ((o = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(i)))
        return n(
          parseInt(o[1] + o[1], 16),
          parseInt(o[2] + o[2], 16),
          parseInt(o[3] + o[3], 16)
        );
      var r = e.trim(i).toLowerCase();
      return "transparent" == r
        ? n(255, 255, 255, 0)
        : n((o = t[r] || [0, 0, 0])[0], o[1], o[2]);
    });
  var t = {
    aqua: [0, 255, 255],
    azure: [240, 255, 255],
    beige: [245, 245, 220],
    black: [0, 0, 0],
    blue: [0, 0, 255],
    brown: [165, 42, 42],
    cyan: [0, 255, 255],
    darkblue: [0, 0, 139],
    darkcyan: [0, 139, 139],
    darkgrey: [169, 169, 169],
    darkgreen: [0, 100, 0],
    darkkhaki: [189, 183, 107],
    darkmagenta: [139, 0, 139],
    darkolivegreen: [85, 107, 47],
    darkorange: [255, 140, 0],
    darkorchid: [153, 50, 204],
    darkred: [139, 0, 0],
    darksalmon: [233, 150, 122],
    darkviolet: [148, 0, 211],
    fuchsia: [255, 0, 255],
    gold: [255, 215, 0],
    green: [0, 128, 0],
    indigo: [75, 0, 130],
    khaki: [240, 230, 140],
    lightblue: [173, 216, 230],
    lightcyan: [224, 255, 255],
    lightgreen: [144, 238, 144],
    lightgrey: [211, 211, 211],
    lightpink: [255, 182, 193],
    lightyellow: [255, 255, 224],
    lime: [0, 255, 0],
    magenta: [255, 0, 255],
    maroon: [128, 0, 0],
    navy: [0, 0, 128],
    olive: [128, 128, 0],
    orange: [255, 165, 0],
    pink: [255, 192, 203],
    purple: [128, 0, 128],
    violet: [128, 0, 128],
    red: [255, 0, 0],
    silver: [192, 192, 192],
    white: [255, 255, 255],
    yellow: [255, 255, 0]
  };
})(jQuery),
  (function(e) {
    var t = Object.prototype.hasOwnProperty;
    function i(t, i) {
      var o = i.children("." + t)[0];
      if (
        null == o &&
        (((o = document.createElement("canvas")).className = t),
        e(o)
          .css({ direction: "ltr", position: "absolute", left: 0, top: 0 })
          .appendTo(i),
        !o.getContext)
      ) {
        if (!window.G_vmlCanvasManager)
          throw new Error(
            "Canvas is not available. If you're using IE with a fall-back such as Excanvas, then there's either a mistake in your conditional include, or the page has no DOCTYPE and is rendering in Quirks Mode."
          );
        o = window.G_vmlCanvasManager.initElement(o);
      }
      this.element = o;
      var n = (this.context = o.getContext("2d")),
        r = window.devicePixelRatio || 1,
        a =
          n.webkitBackingStorePixelRatio ||
          n.mozBackingStorePixelRatio ||
          n.msBackingStorePixelRatio ||
          n.oBackingStorePixelRatio ||
          n.backingStorePixelRatio ||
          1;
      (this.pixelRatio = r / a),
        this.resize(i.width(), i.height()),
        (this.textContainer = null),
        (this.text = {}),
        (this._textCache = {});
    }
    function o(t, o, n, r) {
      var a = [],
        l = {
          colors: ["#edc240", "#afd8f8", "#cb4b4b", "#4da74d", "#9440ed"],
          legend: {
            show: !0,
            noColumns: 1,
            labelFormatter: null,
            labelBoxBorderColor: "#ccc",
            container: null,
            position: "ne",
            margin: 5,
            backgroundColor: null,
            backgroundOpacity: 0.85,
            sorted: null
          },
          xaxis: {
            show: null,
            position: "bottom",
            mode: null,
            font: null,
            color: null,
            tickColor: null,
            transform: null,
            inverseTransform: null,
            min: null,
            max: null,
            autoscaleMargin: null,
            ticks: null,
            tickFormatter: null,
            labelWidth: null,
            labelHeight: null,
            reserveSpace: null,
            tickLength: null,
            alignTicksWithAxis: null,
            tickDecimals: null,
            tickSize: null,
            minTickSize: null
          },
          yaxis: { autoscaleMargin: 0.02, position: "left" },
          xaxes: [],
          yaxes: [],
          series: {
            points: {
              show: !1,
              radius: 3,
              lineWidth: 2,
              fill: !0,
              fillColor: "#ffffff",
              symbol: "circle"
            },
            lines: { lineWidth: 2, fill: !1, fillColor: null, steps: !1 },
            bars: {
              show: !1,
              lineWidth: 2,
              barWidth: 1,
              fill: !0,
              fillColor: null,
              align: "left",
              horizontal: !1,
              zero: !0
            },
            shadowSize: 3,
            highlightColor: null
          },
          grid: {
            show: !0,
            aboveData: !1,
            color: "#545454",
            backgroundColor: null,
            borderColor: null,
            tickColor: null,
            margin: 0,
            labelMargin: 5,
            axisMargin: 8,
            borderWidth: 2,
            minBorderMargin: null,
            markings: null,
            markingsColor: "#f4f4f4",
            markingsLineWidth: 2,
            clickable: !1,
            hoverable: !1,
            autoHighlight: !0,
            mouseActiveRadius: 10
          },
          interaction: { redrawOverlayInterval: 1e3 / 60 },
          hooks: {}
        },
        s = null,
        c = null,
        h = null,
        u = null,
        f = null,
        p = [],
        d = [],
        g = { left: 0, right: 0, top: 0, bottom: 0 },
        m = 0,
        x = 0,
        v = {
          processOptions: [],
          processRawData: [],
          processDatapoints: [],
          processOffset: [],
          drawBackground: [],
          drawSeries: [],
          draw: [],
          bindEvents: [],
          drawOverlay: [],
          shutdown: []
        },
        b = this;
      function k(e, t) {
        t = [b].concat(t);
        for (var i = 0; i < e.length; ++i) e[i].apply(this, t);
      }
      function y(t) {
        (a = (function(t) {
          for (var i = [], o = 0; o < t.length; ++o) {
            var n = e.extend(!0, {}, l.series);
            null != t[o].data
              ? ((n.data = t[o].data),
                delete t[o].data,
                e.extend(!0, n, t[o]),
                (t[o].data = n.data))
              : (n.data = t[o]),
              i.push(n);
          }
          return i;
        })(t)),
          (function() {
            var t,
              i = a.length,
              o = -1;
            for (t = 0; t < a.length; ++t) {
              var n = a[t].color;
              null != n && (i--, "number" == typeof n && n > o && (o = n));
            }
            i <= o && (i = o + 1);
            var r,
              s = [],
              c = l.colors,
              h = c.length,
              u = 0;
            for (t = 0; t < i; t++)
              (r = e.color.parse(c[t % h] || "#666")),
                t % h == 0 && t && (u = u >= 0 ? (u < 0.5 ? -u - 0.2 : 0) : -u),
                (s[t] = r.scale("rgb", 1 + u));
            var f,
              g = 0;
            for (t = 0; t < a.length; ++t) {
              if (
                (null == (f = a[t]).color
                  ? ((f.color = s[g].toString()), ++g)
                  : "number" == typeof f.color &&
                    (f.color = s[f.color].toString()),
                null == f.lines.show)
              ) {
                var m,
                  x = !0;
                for (m in f)
                  if (f[m] && f[m].show) {
                    x = !1;
                    break;
                  }
                x && (f.lines.show = !0);
              }
              null == f.lines.zero && (f.lines.zero = !!f.lines.fill),
                (f.xaxis = C(p, w(f, "x"))),
                (f.yaxis = C(d, w(f, "y")));
            }
          })(),
          (function() {
            var t,
              i,
              o,
              n,
              r,
              l,
              s,
              c,
              h,
              u,
              f,
              p,
              d = Number.POSITIVE_INFINITY,
              g = Number.NEGATIVE_INFINITY,
              m = Number.MAX_VALUE;
            function x(e, t, i) {
              t < e.datamin && t != -m && (e.datamin = t),
                i > e.datamax && i != m && (e.datamax = i);
            }
            for (
              e.each(M(), function(e, t) {
                (t.datamin = d), (t.datamax = g), (t.used = !1);
              }),
                t = 0;
              t < a.length;
              ++t
            )
              ((r = a[t]).datapoints = { points: [] }),
                k(v.processRawData, [r, r.data, r.datapoints]);
            for (t = 0; t < a.length; ++t) {
              if (((r = a[t]), (f = r.data), !(p = r.datapoints.format))) {
                if (
                  ((p = []).push({ x: !0, number: !0, required: !0 }),
                  p.push({ y: !0, number: !0, required: !0 }),
                  r.bars.show || (r.lines.show && r.lines.fill))
                ) {
                  var b = !!(
                    (r.bars.show && r.bars.zero) ||
                    (r.lines.show && r.lines.zero)
                  );
                  p.push({
                    y: !0,
                    number: !0,
                    required: !1,
                    defaultValue: 0,
                    autoscale: b
                  }),
                    r.bars.horizontal &&
                      (delete p[p.length - 1].y, (p[p.length - 1].x = !0));
                }
                r.datapoints.format = p;
              }
              if (null == r.datapoints.pointsize) {
                (r.datapoints.pointsize = p.length),
                  (s = r.datapoints.pointsize),
                  (l = r.datapoints.points);
                var y = r.lines.show && r.lines.steps;
                for (
                  r.xaxis.used = r.yaxis.used = !0, i = o = 0;
                  i < f.length;
                  ++i, o += s
                ) {
                  var w = null == (u = f[i]);
                  if (!w)
                    for (n = 0; n < s; ++n)
                      (c = u[n]),
                        (h = p[n]) &&
                          (h.number &&
                            null != c &&
                            ((c = +c),
                            isNaN(c)
                              ? (c = null)
                              : c == 1 / 0
                                ? (c = m)
                                : c == -1 / 0 && (c = -m)),
                          null == c &&
                            (h.required && (w = !0),
                            null != h.defaultValue && (c = h.defaultValue))),
                        (l[o + n] = c);
                  if (w)
                    for (n = 0; n < s; ++n)
                      null != (c = l[o + n]) &&
                        !1 !== (h = p[n]).autoscale &&
                        (h.x && x(r.xaxis, c, c), h.y && x(r.yaxis, c, c)),
                        (l[o + n] = null);
                  else if (
                    y &&
                    o > 0 &&
                    null != l[o - s] &&
                    l[o - s] != l[o] &&
                    l[o - s + 1] != l[o + 1]
                  ) {
                    for (n = 0; n < s; ++n) l[o + s + n] = l[o + n];
                    (l[o + 1] = l[o - s + 1]), (o += s);
                  }
                }
              }
            }
            for (t = 0; t < a.length; ++t)
              (r = a[t]), k(v.processDatapoints, [r, r.datapoints]);
            for (t = 0; t < a.length; ++t) {
              (r = a[t]),
                (l = r.datapoints.points),
                (s = r.datapoints.pointsize),
                (p = r.datapoints.format);
              var T = d,
                C = d,
                A = g,
                z = g;
              for (i = 0; i < l.length; i += s)
                if (null != l[i])
                  for (n = 0; n < s; ++n)
                    (c = l[i + n]),
                      (h = p[n]) &&
                        !1 !== h.autoscale &&
                        c != m &&
                        c != -m &&
                        (h.x && (c < T && (T = c), c > A && (A = c)),
                        h.y && (c < C && (C = c), c > z && (z = c)));
              if (r.bars.show) {
                var S;
                switch (r.bars.align) {
                  case "left":
                    S = 0;
                    break;
                  case "right":
                    S = -r.bars.barWidth;
                    break;
                  default:
                    S = -r.bars.barWidth / 2;
                }
                r.bars.horizontal
                  ? ((C += S), (z += S + r.bars.barWidth))
                  : ((T += S), (A += S + r.bars.barWidth));
              }
              x(r.xaxis, T, A), x(r.yaxis, C, z);
            }
            e.each(M(), function(e, t) {
              t.datamin == d && (t.datamin = null),
                t.datamax == g && (t.datamax = null);
            });
          })();
      }
      function w(e, t) {
        var i = e[t + "axis"];
        return (
          "object" == typeof i && (i = i.n), "number" != typeof i && (i = 1), i
        );
      }
      function M() {
        return e.grep(p.concat(d), function(e) {
          return e;
        });
      }
      function T(e) {
        var t,
          i,
          o = {};
        for (t = 0; t < p.length; ++t)
          (i = p[t]) && i.used && (o["x" + i.n] = i.c2p(e.left));
        for (t = 0; t < d.length; ++t)
          (i = d[t]) && i.used && (o["y" + i.n] = i.c2p(e.top));
        return (
          void 0 !== o.x1 && (o.x = o.x1), void 0 !== o.y1 && (o.y = o.y1), o
        );
      }
      function C(t, i) {
        return (
          t[i - 1] ||
            (t[i - 1] = {
              n: i,
              direction: t == p ? "x" : "y",
              options: e.extend(!0, {}, t == p ? l.xaxis : l.yaxis)
            }),
          t[i - 1]
        );
      }
      function A() {
        D && clearTimeout(D),
          h.unbind("mousemove", L),
          h.unbind("mouseleave", j),
          h.unbind("click", q),
          k(v.shutdown, [h]);
      }
      function z(t) {
        var i = t.labelWidth,
          o = t.labelHeight,
          n = t.options.position,
          r = "x" === t.direction,
          a = t.options.tickLength,
          c = l.grid.axisMargin,
          h = l.grid.labelMargin,
          u = !0,
          f = !0,
          m = !0,
          x = !1;
        e.each(r ? p : d, function(e, i) {
          i &&
            (i.show || i.reserveSpace) &&
            (i === t
              ? (x = !0)
              : i.options.position === n && (x ? (f = !1) : (u = !1)),
            x || (m = !1));
        }),
          f && (c = 0),
          null == a && (a = m ? "full" : 5),
          isNaN(+a) || (h += +a),
          r
            ? ((o += h),
              "bottom" == n
                ? ((g.bottom += o + c),
                  (t.box = { top: s.height - g.bottom, height: o }))
                : ((t.box = { top: g.top + c, height: o }), (g.top += o + c)))
            : ((i += h),
              "left" == n
                ? ((t.box = { left: g.left + c, width: i }), (g.left += i + c))
                : ((g.right += i + c),
                  (t.box = { left: s.width - g.right, width: i }))),
          (t.position = n),
          (t.tickLength = a),
          (t.box.padding = h),
          (t.innermost = u);
      }
      function S() {
        var i,
          o = M(),
          n = l.grid.show;
        for (var r in g) {
          var c = l.grid.margin || 0;
          g[r] = "number" == typeof c ? c : c[r] || 0;
        }
        for (var r in (k(v.processOffset, [g]), g))
          "object" == typeof l.grid.borderWidth
            ? (g[r] += n ? l.grid.borderWidth[r] : 0)
            : (g[r] += n ? l.grid.borderWidth : 0);
        if (
          (e.each(o, function(e, t) {
            var i = t.options;
            (t.show = null == i.show ? t.used : i.show),
              (t.reserveSpace =
                null == i.reserveSpace ? t.show : i.reserveSpace),
              (function(e) {
                var t = e.options,
                  i = +(null != t.min ? t.min : e.datamin),
                  o = +(null != t.max ? t.max : e.datamax),
                  n = o - i;
                if (0 == n) {
                  var r = 0 == o ? 1 : 0.01;
                  null == t.min && (i -= r),
                    (null != t.max && null == t.min) || (o += r);
                } else {
                  var a = t.autoscaleMargin;
                  null != a &&
                    (null == t.min &&
                      (i -= n * a) < 0 &&
                      null != e.datamin &&
                      e.datamin >= 0 &&
                      (i = 0),
                    null == t.max &&
                      (o += n * a) > 0 &&
                      null != e.datamax &&
                      e.datamax <= 0 &&
                      (o = 0));
                }
                (e.min = i), (e.max = o);
              })(t);
          }),
          n)
        ) {
          var h = e.grep(o, function(e) {
            return e.show || e.reserveSpace;
          });
          for (
            e.each(h, function(t, i) {
              !(function(t) {
                var i,
                  o = t.options;
                i =
                  "number" == typeof o.ticks && o.ticks > 0
                    ? o.ticks
                    : 0.3 * Math.sqrt("x" == t.direction ? s.width : s.height);
                var n = (t.max - t.min) / i,
                  r = -Math.floor(Math.log(n) / Math.LN10),
                  a = o.tickDecimals;
                null != a && r > a && (r = a);
                var l,
                  c = Math.pow(10, -r),
                  h = n / c;
                h < 1.5
                  ? (l = 1)
                  : h < 3
                    ? ((l = 2),
                      h > 2.25 && (null == a || r + 1 <= a) && ((l = 2.5), ++r))
                    : (l = h < 7.5 ? 5 : 10);
                (l *= c),
                  null != o.minTickSize &&
                    l < o.minTickSize &&
                    (l = o.minTickSize);
                if (
                  ((t.delta = n),
                  (t.tickDecimals = Math.max(0, null != a ? a : r)),
                  (t.tickSize = o.tickSize || l),
                  "time" == o.mode && !t.tickGenerator)
                )
                  throw new Error("Time mode requires the flot.time plugin.");
                t.tickGenerator ||
                  ((t.tickGenerator = function(e) {
                    var t,
                      i,
                      o,
                      n = [],
                      r = ((i = e.min), (o = e.tickSize) * Math.floor(i / o)),
                      a = 0,
                      l = Number.NaN;
                    do {
                      (t = l), (l = r + a * e.tickSize), n.push(l), ++a;
                    } while (l < e.max && l != t);
                    return n;
                  }),
                  (t.tickFormatter = function(e, t) {
                    var i = t.tickDecimals ? Math.pow(10, t.tickDecimals) : 1,
                      o = "" + Math.round(e * i) / i;
                    if (null != t.tickDecimals) {
                      var n = o.indexOf("."),
                        r = -1 == n ? 0 : o.length - n - 1;
                      if (r < t.tickDecimals)
                        return (
                          (r ? o : o + ".") +
                          ("" + i).substr(1, t.tickDecimals - r)
                        );
                    }
                    return o;
                  }));
                e.isFunction(o.tickFormatter) &&
                  (t.tickFormatter = function(e, t) {
                    return "" + o.tickFormatter(e, t);
                  });
                if (null != o.alignTicksWithAxis) {
                  var u = ("x" == t.direction ? p : d)[
                    o.alignTicksWithAxis - 1
                  ];
                  if (u && u.used && u != t) {
                    var f = t.tickGenerator(t);
                    if (
                      (f.length > 0 &&
                        (null == o.min && (t.min = Math.min(t.min, f[0])),
                        null == o.max &&
                          f.length > 1 &&
                          (t.max = Math.max(t.max, f[f.length - 1]))),
                      (t.tickGenerator = function(e) {
                        var t,
                          i,
                          o = [];
                        for (i = 0; i < u.ticks.length; ++i)
                          (t = (u.ticks[i].v - u.min) / (u.max - u.min)),
                            (t = e.min + t * (e.max - e.min)),
                            o.push(t);
                        return o;
                      }),
                      !t.mode && null == o.tickDecimals)
                    ) {
                      var g = Math.max(
                          0,
                          1 - Math.floor(Math.log(t.delta) / Math.LN10)
                        ),
                        m = t.tickGenerator(t);
                      (m.length > 1 &&
                        /\..*0$/.test((m[1] - m[0]).toFixed(g))) ||
                        (t.tickDecimals = g);
                    }
                  }
                }
              })(i),
                (function(t) {
                  var i,
                    o,
                    n = t.options.ticks,
                    r = [];
                  null == n || ("number" == typeof n && n > 0)
                    ? (r = t.tickGenerator(t))
                    : n && (r = e.isFunction(n) ? n(t) : n);
                  for (t.ticks = [], i = 0; i < r.length; ++i) {
                    var a = null,
                      l = r[i];
                    "object" == typeof l
                      ? ((o = +l[0]), l.length > 1 && (a = l[1]))
                      : (o = +l),
                      null == a && (a = t.tickFormatter(o, t)),
                      isNaN(o) || t.ticks.push({ v: o, label: a });
                  }
                })(i),
                (function(e, t) {
                  e.options.autoscaleMargin &&
                    t.length > 0 &&
                    (null == e.options.min && (e.min = Math.min(e.min, t[0].v)),
                    null == e.options.max &&
                      t.length > 1 &&
                      (e.max = Math.max(e.max, t[t.length - 1].v)));
                })(i, i.ticks),
                (function(e) {
                  for (
                    var t = e.options,
                      i = e.ticks || [],
                      o = t.labelWidth || 0,
                      n = t.labelHeight || 0,
                      r =
                        o ||
                        ("x" == e.direction
                          ? Math.floor(s.width / (i.length || 1))
                          : null),
                      a = e.direction + "Axis " + e.direction + e.n + "Axis",
                      l =
                        "flot-" +
                        e.direction +
                        "-axis flot-" +
                        e.direction +
                        e.n +
                        "-axis " +
                        a,
                      c = t.font || "flot-tick-label tickLabel",
                      h = 0;
                    h < i.length;
                    ++h
                  ) {
                    var u = i[h];
                    if (u.label) {
                      var f = s.getTextInfo(l, u.label, c, null, r);
                      (o = Math.max(o, f.width)), (n = Math.max(n, f.height));
                    }
                  }
                  (e.labelWidth = t.labelWidth || o),
                    (e.labelHeight = t.labelHeight || n);
                })(i);
            }),
              i = h.length - 1;
            i >= 0;
            --i
          )
            z(h[i]);
          !(function() {
            var t,
              i = l.grid.minBorderMargin;
            if (null == i)
              for (i = 0, t = 0; t < a.length; ++t)
                i = Math.max(
                  i,
                  2 * (a[t].points.radius + a[t].points.lineWidth / 2)
                );
            var o = { left: i, right: i, top: i, bottom: i };
            e.each(M(), function(e, t) {
              t.reserveSpace &&
                t.ticks &&
                t.ticks.length &&
                ("x" === t.direction
                  ? ((o.left = Math.max(o.left, t.labelWidth / 2)),
                    (o.right = Math.max(o.right, t.labelWidth / 2)))
                  : ((o.bottom = Math.max(o.bottom, t.labelHeight / 2)),
                    (o.top = Math.max(o.top, t.labelHeight / 2))));
            }),
              (g.left = Math.ceil(Math.max(o.left, g.left))),
              (g.right = Math.ceil(Math.max(o.right, g.right))),
              (g.top = Math.ceil(Math.max(o.top, g.top))),
              (g.bottom = Math.ceil(Math.max(o.bottom, g.bottom)));
          })(),
            e.each(h, function(e, t) {
              !(function(e) {
                "x" == e.direction
                  ? ((e.box.left = g.left - e.labelWidth / 2),
                    (e.box.width = s.width - g.left - g.right + e.labelWidth))
                  : ((e.box.top = g.top - e.labelHeight / 2),
                    (e.box.height =
                      s.height - g.bottom - g.top + e.labelHeight));
              })(t);
            });
        }
        (m = s.width - g.left - g.right),
          (x = s.height - g.bottom - g.top),
          e.each(o, function(e, t) {
            !(function(e) {
              function t(e) {
                return e;
              }
              var i,
                o,
                n = e.options.transform || t,
                r = e.options.inverseTransform;
              "x" == e.direction
                ? ((i = e.scale = m / Math.abs(n(e.max) - n(e.min))),
                  (o = Math.min(n(e.max), n(e.min))))
                : ((i = -(i = e.scale = x / Math.abs(n(e.max) - n(e.min)))),
                  (o = Math.max(n(e.max), n(e.min)))),
                (e.p2c =
                  n == t
                    ? function(e) {
                        return (e - o) * i;
                      }
                    : function(e) {
                        return (n(e) - o) * i;
                      }),
                (e.c2p = r
                  ? function(e) {
                      return r(o + e / i);
                    }
                  : function(e) {
                      return o + e / i;
                    });
            })(t);
          }),
          n &&
            e.each(M(), function(e, t) {
              var i,
                o,
                n,
                r,
                a,
                l = t.box,
                c = t.direction + "Axis " + t.direction + t.n + "Axis",
                h =
                  "flot-" +
                  t.direction +
                  "-axis flot-" +
                  t.direction +
                  t.n +
                  "-axis " +
                  c,
                u = t.options.font || "flot-tick-label tickLabel";
              if ((s.removeText(h), t.show && 0 != t.ticks.length))
                for (var f = 0; f < t.ticks.length; ++f)
                  !(i = t.ticks[f]).label ||
                    i.v < t.min ||
                    i.v > t.max ||
                    ("x" == t.direction
                      ? ((r = "center"),
                        (o = g.left + t.p2c(i.v)),
                        "bottom" == t.position
                          ? (n = l.top + l.padding)
                          : ((n = l.top + l.height - l.padding),
                            (a = "bottom")))
                      : ((a = "middle"),
                        (n = g.top + t.p2c(i.v)),
                        "left" == t.position
                          ? ((o = l.left + l.width - l.padding), (r = "right"))
                          : (o = l.left + l.padding)),
                    s.addText(h, o, n, i.label, u, null, null, r, a));
            }),
          (function() {
            null != l.legend.container
              ? e(l.legend.container).html("")
              : t.find(".legend").remove();
            if (!l.legend.show) return;
            for (
              var i,
                o,
                n = [],
                r = [],
                s = !1,
                c = l.legend.labelFormatter,
                h = 0;
              h < a.length;
              ++h
            )
              (i = a[h]).label &&
                (o = c ? c(i.label, i) : i.label) &&
                r.push({ label: o, color: i.color });
            if (l.legend.sorted)
              if (e.isFunction(l.legend.sorted)) r.sort(l.legend.sorted);
              else if ("reverse" == l.legend.sorted) r.reverse();
              else {
                var u = "descending" != l.legend.sorted;
                r.sort(function(e, t) {
                  return e.label == t.label
                    ? 0
                    : e.label < t.label != u
                      ? 1
                      : -1;
                });
              }
            for (var h = 0; h < r.length; ++h) {
              var f = r[h];
              h % l.legend.noColumns == 0 &&
                (s && n.push("</tr>"), n.push("<tr>"), (s = !0)),
                n.push(
                  '<td class="legendColorBox"><div style="border:1px solid ' +
                    l.legend.labelBoxBorderColor +
                    ';padding:1px"><div style="width:4px;height:0;border:5px solid ' +
                    f.color +
                    ';overflow:hidden"></div></div></td><td class="legendLabel">' +
                    f.label +
                    "</td>"
                );
            }
            s && n.push("</tr>");
            if (0 == n.length) return;
            var p =
              '<table style="font-size:smaller;color:' +
              l.grid.color +
              '">' +
              n.join("") +
              "</table>";
            if (null != l.legend.container) e(l.legend.container).html(p);
            else {
              var d = "",
                m = l.legend.position,
                x = l.legend.margin;
              null == x[0] && (x = [x, x]),
                "n" == m.charAt(0)
                  ? (d += "top:" + (x[1] + g.top) + "px;")
                  : "s" == m.charAt(0) &&
                    (d += "bottom:" + (x[1] + g.bottom) + "px;"),
                "e" == m.charAt(1)
                  ? (d += "right:" + (x[0] + g.right) + "px;")
                  : "w" == m.charAt(1) &&
                    (d += "left:" + (x[0] + g.left) + "px;");
              var v = e(
                '<div class="legend">' +
                  p.replace('style="', 'style="position:absolute;' + d + ";") +
                  "</div>"
              ).appendTo(t);
              if (0 != l.legend.backgroundOpacity) {
                var b = l.legend.backgroundColor;
                null == b &&
                  (((b =
                    (b = l.grid.backgroundColor) && "string" == typeof b
                      ? e.color.parse(b)
                      : e.color.extract(v, "background-color")).a = 1),
                  (b = b.toString()));
                var k = v.children();
                e(
                  '<div style="position:absolute;width:' +
                    k.width() +
                    "px;height:" +
                    k.height() +
                    "px;" +
                    d +
                    "background-color:" +
                    b +
                    ';"> </div>'
                )
                  .prependTo(v)
                  .css("opacity", l.legend.backgroundOpacity);
              }
            }
          })();
      }
      function W() {
        s.clear(), k(v.drawBackground, [u]);
        var e = l.grid;
        e.show &&
          e.backgroundColor &&
          (u.save(),
          u.translate(g.left, g.top),
          (u.fillStyle = V(
            l.grid.backgroundColor,
            x,
            0,
            "rgba(255, 255, 255, 0)"
          )),
          u.fillRect(0, 0, m, x),
          u.restore()),
          e.show && !e.aboveData && P();
        for (var t = 0; t < a.length; ++t) k(v.drawSeries, [u, a[t]]), F(a[t]);
        k(v.draw, [u]), e.show && e.aboveData && P(), s.render(), H();
      }
      function I(e, t) {
        for (var i, o, n, r, a = M(), l = 0; l < a.length; ++l)
          if (
            (i = a[l]).direction == t &&
            (e[(r = t + i.n + "axis")] || 1 != i.n || (r = t + "axis"), e[r])
          ) {
            (o = e[r].from), (n = e[r].to);
            break;
          }
        if (
          (e[r] ||
            ((i = "x" == t ? p[0] : d[0]), (o = e[t + "1"]), (n = e[t + "2"])),
          null != o && null != n && o > n)
        ) {
          var s = o;
          (o = n), (n = s);
        }
        return { from: o, to: n, axis: i };
      }
      function P() {
        var t, i, o, n;
        u.save(), u.translate(g.left, g.top);
        var r = l.grid.markings;
        if (r)
          for (
            e.isFunction(r) &&
              (((i = b.getAxes()).xmin = i.xaxis.min),
              (i.xmax = i.xaxis.max),
              (i.ymin = i.yaxis.min),
              (i.ymax = i.yaxis.max),
              (r = r(i))),
              t = 0;
            t < r.length;
            ++t
          ) {
            var a = r[t],
              s = I(a, "x"),
              c = I(a, "y");
            if (
              (null == s.from && (s.from = s.axis.min),
              null == s.to && (s.to = s.axis.max),
              null == c.from && (c.from = c.axis.min),
              null == c.to && (c.to = c.axis.max),
              !(
                s.to < s.axis.min ||
                s.from > s.axis.max ||
                c.to < c.axis.min ||
                c.from > c.axis.max
              ))
            ) {
              (s.from = Math.max(s.from, s.axis.min)),
                (s.to = Math.min(s.to, s.axis.max)),
                (c.from = Math.max(c.from, c.axis.min)),
                (c.to = Math.min(c.to, c.axis.max));
              var h = s.from === s.to,
                f = c.from === c.to;
              if (!h || !f)
                if (
                  ((s.from = Math.floor(s.axis.p2c(s.from))),
                  (s.to = Math.floor(s.axis.p2c(s.to))),
                  (c.from = Math.floor(c.axis.p2c(c.from))),
                  (c.to = Math.floor(c.axis.p2c(c.to))),
                  h || f)
                ) {
                  var p = a.lineWidth || l.grid.markingsLineWidth,
                    d = p % 2 ? 0.5 : 0;
                  u.beginPath(),
                    (u.strokeStyle = a.color || l.grid.markingsColor),
                    (u.lineWidth = p),
                    h
                      ? (u.moveTo(s.to + d, c.from), u.lineTo(s.to + d, c.to))
                      : (u.moveTo(s.from, c.to + d), u.lineTo(s.to, c.to + d)),
                    u.stroke();
                } else
                  (u.fillStyle = a.color || l.grid.markingsColor),
                    u.fillRect(s.from, c.to, s.to - s.from, c.from - c.to);
            }
          }
        (i = M()), (o = l.grid.borderWidth);
        for (var v = 0; v < i.length; ++v) {
          var k,
            y,
            w,
            T,
            C = i[v],
            A = C.box,
            z = C.tickLength;
          if (C.show && 0 != C.ticks.length) {
            for (
              u.lineWidth = 1,
                "x" == C.direction
                  ? ((k = 0),
                    (y =
                      "full" == z
                        ? "top" == C.position
                          ? 0
                          : x
                        : A.top - g.top + ("top" == C.position ? A.height : 0)))
                  : ((y = 0),
                    (k =
                      "full" == z
                        ? "left" == C.position
                          ? 0
                          : m
                        : A.left -
                          g.left +
                          ("left" == C.position ? A.width : 0))),
                C.innermost ||
                  ((u.strokeStyle = C.options.color),
                  u.beginPath(),
                  (w = T = 0),
                  "x" == C.direction ? (w = m + 1) : (T = x + 1),
                  1 == u.lineWidth &&
                    ("x" == C.direction
                      ? (y = Math.floor(y) + 0.5)
                      : (k = Math.floor(k) + 0.5)),
                  u.moveTo(k, y),
                  u.lineTo(k + w, y + T),
                  u.stroke()),
                u.strokeStyle = C.options.tickColor,
                u.beginPath(),
                t = 0;
              t < C.ticks.length;
              ++t
            ) {
              var S = C.ticks[t].v;
              (w = T = 0),
                isNaN(S) ||
                  S < C.min ||
                  S > C.max ||
                  ("full" == z &&
                    (("object" == typeof o && o[C.position] > 0) || o > 0) &&
                    (S == C.min || S == C.max)) ||
                  ("x" == C.direction
                    ? ((k = C.p2c(S)),
                      (T = "full" == z ? -x : z),
                      "top" == C.position && (T = -T))
                    : ((y = C.p2c(S)),
                      (w = "full" == z ? -m : z),
                      "left" == C.position && (w = -w)),
                  1 == u.lineWidth &&
                    ("x" == C.direction
                      ? (k = Math.floor(k) + 0.5)
                      : (y = Math.floor(y) + 0.5)),
                  u.moveTo(k, y),
                  u.lineTo(k + w, y + T));
            }
            u.stroke();
          }
        }
        o &&
          ((n = l.grid.borderColor),
          "object" == typeof o || "object" == typeof n
            ? ("object" != typeof o &&
                (o = { top: o, right: o, bottom: o, left: o }),
              "object" != typeof n &&
                (n = { top: n, right: n, bottom: n, left: n }),
              o.top > 0 &&
                ((u.strokeStyle = n.top),
                (u.lineWidth = o.top),
                u.beginPath(),
                u.moveTo(0 - o.left, 0 - o.top / 2),
                u.lineTo(m, 0 - o.top / 2),
                u.stroke()),
              o.right > 0 &&
                ((u.strokeStyle = n.right),
                (u.lineWidth = o.right),
                u.beginPath(),
                u.moveTo(m + o.right / 2, 0 - o.top),
                u.lineTo(m + o.right / 2, x),
                u.stroke()),
              o.bottom > 0 &&
                ((u.strokeStyle = n.bottom),
                (u.lineWidth = o.bottom),
                u.beginPath(),
                u.moveTo(m + o.right, x + o.bottom / 2),
                u.lineTo(0, x + o.bottom / 2),
                u.stroke()),
              o.left > 0 &&
                ((u.strokeStyle = n.left),
                (u.lineWidth = o.left),
                u.beginPath(),
                u.moveTo(0 - o.left / 2, x + o.bottom),
                u.lineTo(0 - o.left / 2, 0),
                u.stroke()))
            : ((u.lineWidth = o),
              (u.strokeStyle = l.grid.borderColor),
              u.strokeRect(-o / 2, -o / 2, m + o, x + o))),
          u.restore();
      }
      function F(e) {
        e.lines.show &&
          (function(e) {
            function t(e, t, i, o, n) {
              var r = e.points,
                a = e.pointsize,
                l = null,
                s = null;
              u.beginPath();
              for (var c = a; c < r.length; c += a) {
                var h = r[c - a],
                  f = r[c - a + 1],
                  p = r[c],
                  d = r[c + 1];
                if (null != h && null != p) {
                  if (f <= d && f < n.min) {
                    if (d < n.min) continue;
                    (h = ((n.min - f) / (d - f)) * (p - h) + h), (f = n.min);
                  } else if (d <= f && d < n.min) {
                    if (f < n.min) continue;
                    (p = ((n.min - f) / (d - f)) * (p - h) + h), (d = n.min);
                  }
                  if (f >= d && f > n.max) {
                    if (d > n.max) continue;
                    (h = ((n.max - f) / (d - f)) * (p - h) + h), (f = n.max);
                  } else if (d >= f && d > n.max) {
                    if (f > n.max) continue;
                    (p = ((n.max - f) / (d - f)) * (p - h) + h), (d = n.max);
                  }
                  if (h <= p && h < o.min) {
                    if (p < o.min) continue;
                    (f = ((o.min - h) / (p - h)) * (d - f) + f), (h = o.min);
                  } else if (p <= h && p < o.min) {
                    if (h < o.min) continue;
                    (d = ((o.min - h) / (p - h)) * (d - f) + f), (p = o.min);
                  }
                  if (h >= p && h > o.max) {
                    if (p > o.max) continue;
                    (f = ((o.max - h) / (p - h)) * (d - f) + f), (h = o.max);
                  } else if (p >= h && p > o.max) {
                    if (h > o.max) continue;
                    (d = ((o.max - h) / (p - h)) * (d - f) + f), (p = o.max);
                  }
                  (h == l && f == s) || u.moveTo(o.p2c(h) + t, n.p2c(f) + i),
                    (l = p),
                    (s = d),
                    u.lineTo(o.p2c(p) + t, n.p2c(d) + i);
                }
              }
              u.stroke();
            }
            u.save(), u.translate(g.left, g.top), (u.lineJoin = "round");
            var i = e.lines.lineWidth,
              o = e.shadowSize;
            if (i > 0 && o > 0) {
              (u.lineWidth = o), (u.strokeStyle = "rgba(0,0,0,0.1)");
              var n = Math.PI / 18;
              t(
                e.datapoints,
                Math.sin(n) * (i / 2 + o / 2),
                Math.cos(n) * (i / 2 + o / 2),
                e.xaxis,
                e.yaxis
              ),
                (u.lineWidth = o / 2),
                t(
                  e.datapoints,
                  Math.sin(n) * (i / 2 + o / 4),
                  Math.cos(n) * (i / 2 + o / 4),
                  e.xaxis,
                  e.yaxis
                );
            }
            (u.lineWidth = i), (u.strokeStyle = e.color);
            var r = R(e.lines, e.color, 0, x);
            r &&
              ((u.fillStyle = r),
              (function(e, t, i) {
                var o = e.points,
                  n = e.pointsize,
                  r = Math.min(Math.max(0, i.min), i.max),
                  a = 0,
                  l = !1,
                  s = 1,
                  c = 0,
                  h = 0;
                for (; !(n > 0 && a > o.length + n); ) {
                  var f = o[(a += n) - n],
                    p = o[a - n + s],
                    d = o[a],
                    g = o[a + s];
                  if (l) {
                    if (n > 0 && null != f && null == d) {
                      (h = a), (n = -n), (s = 2);
                      continue;
                    }
                    if (n < 0 && a == c + n) {
                      u.fill(), (l = !1), (s = 1), (a = c = h + (n = -n));
                      continue;
                    }
                  }
                  if (null != f && null != d) {
                    if (f <= d && f < t.min) {
                      if (d < t.min) continue;
                      (p = ((t.min - f) / (d - f)) * (g - p) + p), (f = t.min);
                    } else if (d <= f && d < t.min) {
                      if (f < t.min) continue;
                      (g = ((t.min - f) / (d - f)) * (g - p) + p), (d = t.min);
                    }
                    if (f >= d && f > t.max) {
                      if (d > t.max) continue;
                      (p = ((t.max - f) / (d - f)) * (g - p) + p), (f = t.max);
                    } else if (d >= f && d > t.max) {
                      if (f > t.max) continue;
                      (g = ((t.max - f) / (d - f)) * (g - p) + p), (d = t.max);
                    }
                    if (
                      (l ||
                        (u.beginPath(), u.moveTo(t.p2c(f), i.p2c(r)), (l = !0)),
                      p >= i.max && g >= i.max)
                    )
                      u.lineTo(t.p2c(f), i.p2c(i.max)),
                        u.lineTo(t.p2c(d), i.p2c(i.max));
                    else if (p <= i.min && g <= i.min)
                      u.lineTo(t.p2c(f), i.p2c(i.min)),
                        u.lineTo(t.p2c(d), i.p2c(i.min));
                    else {
                      var m = f,
                        x = d;
                      p <= g && p < i.min && g >= i.min
                        ? ((f = ((i.min - p) / (g - p)) * (d - f) + f),
                          (p = i.min))
                        : g <= p &&
                          g < i.min &&
                          p >= i.min &&
                          ((d = ((i.min - p) / (g - p)) * (d - f) + f),
                          (g = i.min)),
                        p >= g && p > i.max && g <= i.max
                          ? ((f = ((i.max - p) / (g - p)) * (d - f) + f),
                            (p = i.max))
                          : g >= p &&
                            g > i.max &&
                            p <= i.max &&
                            ((d = ((i.max - p) / (g - p)) * (d - f) + f),
                            (g = i.max)),
                        f != m && u.lineTo(t.p2c(m), i.p2c(p)),
                        u.lineTo(t.p2c(f), i.p2c(p)),
                        u.lineTo(t.p2c(d), i.p2c(g)),
                        d != x &&
                          (u.lineTo(t.p2c(d), i.p2c(g)),
                          u.lineTo(t.p2c(x), i.p2c(g)));
                    }
                  }
                }
              })(e.datapoints, e.xaxis, e.yaxis));
            i > 0 && t(e.datapoints, 0, 0, e.xaxis, e.yaxis);
            u.restore();
          })(e),
          e.bars.show &&
            (function(e) {
              var t;
              switch (
                (u.save(),
                u.translate(g.left, g.top),
                (u.lineWidth = e.bars.lineWidth),
                (u.strokeStyle = e.color),
                e.bars.align)
              ) {
                case "left":
                  t = 0;
                  break;
                case "right":
                  t = -e.bars.barWidth;
                  break;
                default:
                  t = -e.bars.barWidth / 2;
              }
              var i = e.bars.fill
                ? function(t, i) {
                    return R(e.bars, e.color, t, i);
                  }
                : null;
              (function(t, i, o, n, r, a) {
                for (
                  var l = t.points, s = t.pointsize, c = 0;
                  c < l.length;
                  c += s
                )
                  null != l[c] &&
                    O(
                      l[c],
                      l[c + 1],
                      l[c + 2],
                      i,
                      o,
                      n,
                      r,
                      a,
                      u,
                      e.bars.horizontal,
                      e.bars.lineWidth
                    );
              })(e.datapoints, t, t + e.bars.barWidth, i, e.xaxis, e.yaxis),
                u.restore();
            })(e),
          e.points.show &&
            (function(e) {
              function t(e, t, i, o, n, r, a, l) {
                for (
                  var s = e.points, c = e.pointsize, h = 0;
                  h < s.length;
                  h += c
                ) {
                  var f = s[h],
                    p = s[h + 1];
                  null == f ||
                    f < r.min ||
                    f > r.max ||
                    p < a.min ||
                    p > a.max ||
                    (u.beginPath(),
                    (f = r.p2c(f)),
                    (p = a.p2c(p) + o),
                    "circle" == l
                      ? u.arc(f, p, t, 0, n ? Math.PI : 2 * Math.PI, !1)
                      : l(u, f, p, t, n),
                    u.closePath(),
                    i && ((u.fillStyle = i), u.fill()),
                    u.stroke());
                }
              }
              u.save(), u.translate(g.left, g.top);
              var i = e.points.lineWidth,
                o = e.shadowSize,
                n = e.points.radius,
                r = e.points.symbol;
              0 == i && (i = 1e-4);
              if (i > 0 && o > 0) {
                var a = o / 2;
                (u.lineWidth = a),
                  (u.strokeStyle = "rgba(0,0,0,0.1)"),
                  t(e.datapoints, n, null, a + a / 2, !0, e.xaxis, e.yaxis, r),
                  (u.strokeStyle = "rgba(0,0,0,0.2)"),
                  t(e.datapoints, n, null, a / 2, !0, e.xaxis, e.yaxis, r);
              }
              (u.lineWidth = i),
                (u.strokeStyle = e.color),
                t(
                  e.datapoints,
                  n,
                  R(e.points, e.color),
                  0,
                  !1,
                  e.xaxis,
                  e.yaxis,
                  r
                ),
                u.restore();
            })(e);
      }
      function O(e, t, i, o, n, r, a, l, s, c, h) {
        var u, f, p, d, g, m, x, v, b;
        c
          ? ((v = m = x = !0),
            (g = !1),
            (d = t + o),
            (p = t + n),
            (f = e) < (u = i) &&
              ((b = f), (f = u), (u = b), (g = !0), (m = !1)))
          : ((g = m = x = !0),
            (v = !1),
            (u = e + o),
            (f = e + n),
            (d = t) < (p = i) &&
              ((b = d), (d = p), (p = b), (v = !0), (x = !1))),
          f < a.min ||
            u > a.max ||
            d < l.min ||
            p > l.max ||
            (u < a.min && ((u = a.min), (g = !1)),
            f > a.max && ((f = a.max), (m = !1)),
            p < l.min && ((p = l.min), (v = !1)),
            d > l.max && ((d = l.max), (x = !1)),
            (u = a.p2c(u)),
            (p = l.p2c(p)),
            (f = a.p2c(f)),
            (d = l.p2c(d)),
            r && ((s.fillStyle = r(p, d)), s.fillRect(u, d, f - u, p - d)),
            h > 0 &&
              (g || m || x || v) &&
              (s.beginPath(),
              s.moveTo(u, p),
              g ? s.lineTo(u, d) : s.moveTo(u, d),
              x ? s.lineTo(f, d) : s.moveTo(f, d),
              m ? s.lineTo(f, p) : s.moveTo(f, p),
              v ? s.lineTo(u, p) : s.moveTo(u, p),
              s.stroke()));
      }
      function R(t, i, o, n) {
        var r = t.fill;
        if (!r) return null;
        if (t.fillColor) return V(t.fillColor, o, n, i);
        var a = e.color.parse(i);
        return (
          (a.a = "number" == typeof r ? r : 0.4), a.normalize(), a.toString()
        );
      }
      (b.setData = y),
        (b.setupGrid = S),
        (b.draw = W),
        (b.getPlaceholder = function() {
          return t;
        }),
        (b.getCanvas = function() {
          return s.element;
        }),
        (b.getPlotOffset = function() {
          return g;
        }),
        (b.width = function() {
          return m;
        }),
        (b.height = function() {
          return x;
        }),
        (b.offset = function() {
          var e = h.offset();
          return (e.left += g.left), (e.top += g.top), e;
        }),
        (b.getData = function() {
          return a;
        }),
        (b.getAxes = function() {
          var t = {};
          return (
            e.each(p.concat(d), function(e, i) {
              i && (t[i.direction + (1 != i.n ? i.n : "") + "axis"] = i);
            }),
            t
          );
        }),
        (b.getXAxes = function() {
          return p;
        }),
        (b.getYAxes = function() {
          return d;
        }),
        (b.c2p = T),
        (b.p2c = function(e) {
          var t,
            i,
            o,
            n = {};
          for (t = 0; t < p.length; ++t)
            if (
              (i = p[t]) &&
              i.used &&
              ((o = "x" + i.n),
              null == e[o] && 1 == i.n && (o = "x"),
              null != e[o])
            ) {
              n.left = i.p2c(e[o]);
              break;
            }
          for (t = 0; t < d.length; ++t)
            if (
              (i = d[t]) &&
              i.used &&
              ((o = "y" + i.n),
              null == e[o] && 1 == i.n && (o = "y"),
              null != e[o])
            ) {
              n.top = i.p2c(e[o]);
              break;
            }
          return n;
        }),
        (b.getOptions = function() {
          return l;
        }),
        (b.highlight = G),
        (b.unhighlight = X),
        (b.triggerRedrawOverlay = H),
        (b.pointOffset = function(e) {
          return {
            left: parseInt(p[w(e, "x") - 1].p2c(+e.x) + g.left, 10),
            top: parseInt(d[w(e, "y") - 1].p2c(+e.y) + g.top, 10)
          };
        }),
        (b.shutdown = A),
        (b.destroy = function() {
          A(),
            t.removeData("plot").empty(),
            (a = []),
            (l = null),
            (s = null),
            (c = null),
            (h = null),
            (u = null),
            (f = null),
            (p = []),
            (d = []),
            (v = null),
            (N = []),
            (b = null);
        }),
        (b.resize = function() {
          var e = t.width(),
            i = t.height();
          s.resize(e, i), c.resize(e, i);
        }),
        (b.hooks = v),
        (function() {
          for (var t = { Canvas: i }, o = 0; o < r.length; ++o) {
            var n = r[o];
            n.init(b, t), n.options && e.extend(!0, l, n.options);
          }
        })(),
        (function(i) {
          e.extend(!0, l, i), i && i.colors && (l.colors = i.colors);
          null == l.xaxis.color &&
            (l.xaxis.color = e.color
              .parse(l.grid.color)
              .scale("a", 0.22)
              .toString());
          null == l.yaxis.color &&
            (l.yaxis.color = e.color
              .parse(l.grid.color)
              .scale("a", 0.22)
              .toString());
          null == l.xaxis.tickColor &&
            (l.xaxis.tickColor = l.grid.tickColor || l.xaxis.color);
          null == l.yaxis.tickColor &&
            (l.yaxis.tickColor = l.grid.tickColor || l.yaxis.color);
          null == l.grid.borderColor && (l.grid.borderColor = l.grid.color);
          null == l.grid.tickColor &&
            (l.grid.tickColor = e.color
              .parse(l.grid.color)
              .scale("a", 0.22)
              .toString());
          var o,
            n,
            r,
            a = t.css("font-size"),
            s = a ? +a.replace("px", "") : 13,
            c = {
              style: t.css("font-style"),
              size: Math.round(0.8 * s),
              variant: t.css("font-variant"),
              weight: t.css("font-weight"),
              family: t.css("font-family")
            };
          for (r = l.xaxes.length || 1, o = 0; o < r; ++o)
            (n = l.xaxes[o]) && !n.tickColor && (n.tickColor = n.color),
              (n = e.extend(!0, {}, l.xaxis, n)),
              (l.xaxes[o] = n),
              n.font &&
                ((n.font = e.extend({}, c, n.font)),
                n.font.color || (n.font.color = n.color),
                n.font.lineHeight ||
                  (n.font.lineHeight = Math.round(1.15 * n.font.size)));
          for (r = l.yaxes.length || 1, o = 0; o < r; ++o)
            (n = l.yaxes[o]) && !n.tickColor && (n.tickColor = n.color),
              (n = e.extend(!0, {}, l.yaxis, n)),
              (l.yaxes[o] = n),
              n.font &&
                ((n.font = e.extend({}, c, n.font)),
                n.font.color || (n.font.color = n.color),
                n.font.lineHeight ||
                  (n.font.lineHeight = Math.round(1.15 * n.font.size)));
          l.xaxis.noTicks &&
            null == l.xaxis.ticks &&
            (l.xaxis.ticks = l.xaxis.noTicks);
          l.yaxis.noTicks &&
            null == l.yaxis.ticks &&
            (l.yaxis.ticks = l.yaxis.noTicks);
          l.x2axis &&
            ((l.xaxes[1] = e.extend(!0, {}, l.xaxis, l.x2axis)),
            (l.xaxes[1].position = "top"),
            null == l.x2axis.min && (l.xaxes[1].min = null),
            null == l.x2axis.max && (l.xaxes[1].max = null));
          l.y2axis &&
            ((l.yaxes[1] = e.extend(!0, {}, l.yaxis, l.y2axis)),
            (l.yaxes[1].position = "right"),
            null == l.y2axis.min && (l.yaxes[1].min = null),
            null == l.y2axis.max && (l.yaxes[1].max = null));
          l.grid.coloredAreas && (l.grid.markings = l.grid.coloredAreas);
          l.grid.coloredAreasColor &&
            (l.grid.markingsColor = l.grid.coloredAreasColor);
          l.lines && e.extend(!0, l.series.lines, l.lines);
          l.points && e.extend(!0, l.series.points, l.points);
          l.bars && e.extend(!0, l.series.bars, l.bars);
          null != l.shadowSize && (l.series.shadowSize = l.shadowSize);
          null != l.highlightColor &&
            (l.series.highlightColor = l.highlightColor);
          for (o = 0; o < l.xaxes.length; ++o) C(p, o + 1).options = l.xaxes[o];
          for (o = 0; o < l.yaxes.length; ++o) C(d, o + 1).options = l.yaxes[o];
          for (var h in v)
            l.hooks[h] && l.hooks[h].length && (v[h] = v[h].concat(l.hooks[h]));
          k(v.processOptions, [l]);
        })(n),
        (function() {
          t
            .css("padding", 0)
            .children()
            .filter(function() {
              return (
                !e(this).hasClass("flot-overlay") &&
                !e(this).hasClass("flot-base")
              );
            })
            .remove(),
            "static" == t.css("position") && t.css("position", "relative");
          (s = new i("flot-base", t)),
            (c = new i("flot-overlay", t)),
            (u = s.context),
            (f = c.context),
            (h = e(c.element).unbind());
          var o = t.data("plot");
          o && (o.shutdown(), c.clear());
          t.data("plot", b);
        })(),
        y(o),
        S(),
        W(),
        (function() {
          l.grid.hoverable && (h.mousemove(L), h.bind("mouseleave", j));
          l.grid.clickable && h.click(q);
          k(v.bindEvents, [h]);
        })();
      var N = [],
        D = null;
      function L(e) {
        l.grid.hoverable &&
          E("plothover", e, function(e) {
            return 0 != e.hoverable;
          });
      }
      function j(e) {
        l.grid.hoverable &&
          E("plothover", e, function(e) {
            return !1;
          });
      }
      function q(e) {
        E("plotclick", e, function(e) {
          return 0 != e.clickable;
        });
      }
      function E(e, i, o) {
        var n = h.offset(),
          r = i.pageX - n.left - g.left,
          s = i.pageY - n.top - g.top,
          c = T({ left: r, top: s });
        (c.pageX = i.pageX), (c.pageY = i.pageY);
        var u = (function(e, t, i) {
          var o,
            n,
            r,
            s = l.grid.mouseActiveRadius,
            c = s * s + 1,
            h = null;
          for (o = a.length - 1; o >= 0; --o)
            if (i(a[o])) {
              var u = a[o],
                f = u.xaxis,
                p = u.yaxis,
                d = u.datapoints.points,
                g = f.c2p(e),
                m = p.c2p(t),
                x = s / f.scale,
                v = s / p.scale;
              if (
                ((r = u.datapoints.pointsize),
                f.options.inverseTransform && (x = Number.MAX_VALUE),
                p.options.inverseTransform && (v = Number.MAX_VALUE),
                u.lines.show || u.points.show)
              )
                for (n = 0; n < d.length; n += r) {
                  var b = d[n],
                    k = d[n + 1];
                  if (
                    null != b &&
                    !(b - g > x || b - g < -x || k - m > v || k - m < -v)
                  ) {
                    var y = Math.abs(f.p2c(b) - e),
                      w = Math.abs(p.p2c(k) - t),
                      M = y * y + w * w;
                    M < c && ((c = M), (h = [o, n / r]));
                  }
                }
              if (u.bars.show && !h) {
                var T, C;
                switch (u.bars.align) {
                  case "left":
                    T = 0;
                    break;
                  case "right":
                    T = -u.bars.barWidth;
                    break;
                  default:
                    T = -u.bars.barWidth / 2;
                }
                for (C = T + u.bars.barWidth, n = 0; n < d.length; n += r) {
                  (b = d[n]), (k = d[n + 1]);
                  var A = d[n + 2];
                  null != b &&
                    (a[o].bars.horizontal
                      ? g <= Math.max(A, b) &&
                        g >= Math.min(A, b) &&
                        m >= k + T &&
                        m <= k + C
                      : g >= b + T &&
                        g <= b + C &&
                        m >= Math.min(A, k) &&
                        m <= Math.max(A, k)) &&
                    (h = [o, n / r]);
                }
              }
            }
          return h
            ? ((o = h[0]),
              (n = h[1]),
              (r = a[o].datapoints.pointsize),
              {
                datapoint: a[o].datapoints.points.slice(n * r, (n + 1) * r),
                dataIndex: n,
                series: a[o],
                seriesIndex: o
              })
            : null;
        })(r, s, o);
        if (
          (u &&
            ((u.pageX = parseInt(
              u.series.xaxis.p2c(u.datapoint[0]) + n.left + g.left,
              10
            )),
            (u.pageY = parseInt(
              u.series.yaxis.p2c(u.datapoint[1]) + n.top + g.top,
              10
            ))),
          l.grid.autoHighlight)
        ) {
          for (var f = 0; f < N.length; ++f) {
            var p = N[f];
            p.auto != e ||
              (u &&
                p.series == u.series &&
                p.point[0] == u.datapoint[0] &&
                p.point[1] == u.datapoint[1]) ||
              X(p.series, p.point);
          }
          u && G(u.series, u.datapoint, e);
        }
        t.trigger(e, [c, u]);
      }
      function H() {
        var e = l.interaction.redrawOverlayInterval;
        -1 != e ? D || (D = setTimeout(B, e)) : B();
      }
      function B() {
        var e, t;
        for (
          D = null, f.save(), c.clear(), f.translate(g.left, g.top), e = 0;
          e < N.length;
          ++e
        )
          (t = N[e]).series.bars.show
            ? Q(t.series, t.point)
            : _(t.series, t.point);
        f.restore(), k(v.drawOverlay, [f]);
      }
      function G(e, t, i) {
        if (("number" == typeof e && (e = a[e]), "number" == typeof t)) {
          var o = e.datapoints.pointsize;
          t = e.datapoints.points.slice(o * t, o * (t + 1));
        }
        var n = Y(e, t);
        -1 == n
          ? (N.push({ series: e, point: t, auto: i }), H())
          : i || (N[n].auto = !1);
      }
      function X(e, t) {
        if (null == e && null == t) return (N = []), void H();
        if (("number" == typeof e && (e = a[e]), "number" == typeof t)) {
          var i = e.datapoints.pointsize;
          t = e.datapoints.points.slice(i * t, i * (t + 1));
        }
        var o = Y(e, t);
        -1 != o && (N.splice(o, 1), H());
      }
      function Y(e, t) {
        for (var i = 0; i < N.length; ++i) {
          var o = N[i];
          if (o.series == e && o.point[0] == t[0] && o.point[1] == t[1])
            return i;
        }
        return -1;
      }
      function _(t, i) {
        var o = i[0],
          n = i[1],
          r = t.xaxis,
          a = t.yaxis,
          l =
            "string" == typeof t.highlightColor
              ? t.highlightColor
              : e.color
                  .parse(t.color)
                  .scale("a", 0.5)
                  .toString();
        if (!(o < r.min || o > r.max || n < a.min || n > a.max)) {
          var s = t.points.radius + t.points.lineWidth / 2;
          (f.lineWidth = s), (f.strokeStyle = l);
          var c = 1.5 * s;
          (o = r.p2c(o)),
            (n = a.p2c(n)),
            f.beginPath(),
            "circle" == t.points.symbol
              ? f.arc(o, n, c, 0, 2 * Math.PI, !1)
              : t.points.symbol(f, o, n, c, !1),
            f.closePath(),
            f.stroke();
        }
      }
      function Q(t, i) {
        var o,
          n =
            "string" == typeof t.highlightColor
              ? t.highlightColor
              : e.color
                  .parse(t.color)
                  .scale("a", 0.5)
                  .toString(),
          r = n;
        switch (t.bars.align) {
          case "left":
            o = 0;
            break;
          case "right":
            o = -t.bars.barWidth;
            break;
          default:
            o = -t.bars.barWidth / 2;
        }
        (f.lineWidth = t.bars.lineWidth),
          (f.strokeStyle = n),
          O(
            i[0],
            i[1],
            i[2] || 0,
            o,
            o + t.bars.barWidth,
            function() {
              return r;
            },
            t.xaxis,
            t.yaxis,
            f,
            t.bars.horizontal,
            t.bars.lineWidth
          );
      }
      function V(t, i, o, n) {
        if ("string" == typeof t) return t;
        for (
          var r = u.createLinearGradient(0, o, 0, i),
            a = 0,
            l = t.colors.length;
          a < l;
          ++a
        ) {
          var s = t.colors[a];
          if ("string" != typeof s) {
            var c = e.color.parse(n);
            null != s.brightness && (c = c.scale("rgb", s.brightness)),
              null != s.opacity && (c.a *= s.opacity),
              (s = c.toString());
          }
          r.addColorStop(a / (l - 1), s);
        }
        return r;
      }
    }
    e.fn.detach ||
      (e.fn.detach = function() {
        return this.each(function() {
          this.parentNode && this.parentNode.removeChild(this);
        });
      }),
      (i.prototype.resize = function(e, t) {
        if (e <= 0 || t <= 0)
          throw new Error(
            "Invalid dimensions for plot, width = " + e + ", height = " + t
          );
        var i = this.element,
          o = this.context,
          n = this.pixelRatio;
        this.width != e &&
          ((i.width = e * n), (i.style.width = e + "px"), (this.width = e)),
          this.height != t &&
            ((i.height = t * n),
            (i.style.height = t + "px"),
            (this.height = t)),
          o.restore(),
          o.save(),
          o.scale(n, n);
      }),
      (i.prototype.clear = function() {
        this.context.clearRect(0, 0, this.width, this.height);
      }),
      (i.prototype.render = function() {
        var e = this._textCache;
        for (var i in e)
          if (t.call(e, i)) {
            var o = this.getTextLayer(i),
              n = e[i];
            for (var r in (o.hide(), n))
              if (t.call(n, r)) {
                var a = n[r];
                for (var l in a)
                  if (t.call(a, l)) {
                    for (var s, c = a[l].positions, h = 0; (s = c[h]); h++)
                      s.active
                        ? s.rendered || (o.append(s.element), (s.rendered = !0))
                        : (c.splice(h--, 1), s.rendered && s.element.detach());
                    0 == c.length && delete a[l];
                  }
              }
            o.show();
          }
      }),
      (i.prototype.getTextLayer = function(t) {
        var i = this.text[t];
        return (
          null == i &&
            (null == this.textContainer &&
              (this.textContainer = e("<div class='flot-text'></div>")
                .css({
                  position: "absolute",
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  "font-size": "smaller",
                  color: "#545454"
                })
                .insertAfter(this.element)),
            (i = this.text[t] = e("<div></div>")
              .addClass(t)
              .css({
                position: "absolute",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0
              })
              .appendTo(this.textContainer))),
          i
        );
      }),
      (i.prototype.getTextInfo = function(t, i, o, n, r) {
        var a, l, s, c;
        if (
          ((i = "" + i),
          (a =
            "object" == typeof o
              ? o.style +
                " " +
                o.variant +
                " " +
                o.weight +
                " " +
                o.size +
                "px/" +
                o.lineHeight +
                "px " +
                o.family
              : o),
          null == (l = this._textCache[t]) && (l = this._textCache[t] = {}),
          null == (s = l[a]) && (s = l[a] = {}),
          null == (c = s[i]))
        ) {
          var h = e("<div></div>")
            .html(i)
            .css({ position: "absolute", "max-width": r, top: -9999 })
            .appendTo(this.getTextLayer(t));
          "object" == typeof o
            ? h.css({ font: a, color: o.color })
            : "string" == typeof o && h.addClass(o),
            (c = s[i] = {
              width: h.outerWidth(!0),
              height: h.outerHeight(!0),
              element: h,
              positions: []
            }),
            h.detach();
        }
        return c;
      }),
      (i.prototype.addText = function(e, t, i, o, n, r, a, l, s) {
        var c = this.getTextInfo(e, o, n, r, a),
          h = c.positions;
        "center" == l ? (t -= c.width / 2) : "right" == l && (t -= c.width),
          "middle" == s
            ? (i -= c.height / 2)
            : "bottom" == s && (i -= c.height);
        for (var u, f = 0; (u = h[f]); f++)
          if (u.x == t && u.y == i) return void (u.active = !0);
        (u = {
          active: !0,
          rendered: !1,
          element: h.length ? c.element.clone() : c.element,
          x: t,
          y: i
        }),
          h.push(u),
          u.element.css({
            top: Math.round(i),
            left: Math.round(t),
            "text-align": l
          });
      }),
      (i.prototype.removeText = function(e, i, o, n, r, a) {
        if (null == n) {
          var l = this._textCache[e];
          if (null != l)
            for (var s in l)
              if (t.call(l, s)) {
                var c = l[s];
                for (var h in c)
                  if (t.call(c, h))
                    for (var u = c[h].positions, f = 0; (p = u[f]); f++)
                      p.active = !1;
              }
        } else {
          var p;
          for (
            u = this.getTextInfo(e, n, r, a).positions, f = 0;
            (p = u[f]);
            f++
          )
            p.x == i && p.y == o && (p.active = !1);
        }
      }),
      (e.plot = function(t, i, n) {
        return new o(e(t), i, n, e.plot.plugins);
      }),
      (e.plot.version = "0.8.3"),
      (e.plot.plugins = []),
      (e.fn.plot = function(t, i) {
        return this.each(function() {
          e.plot(this, t, i);
        });
      });
  })(jQuery),
  (function(e, t, i) {
    "$:nomunge";
    var o,
      n = [],
      r = (e.resize = e.extend(e.resize, {})),
      a = !1,
      l = "setTimeout",
      s = "resize",
      c = s + "-special-event",
      h = "pendingDelay",
      u = "activeDelay",
      f = "throttleWindow";
    function p(i) {
      !0 === a && (a = i || 1);
      for (var l = n.length - 1; l >= 0; l--) {
        var u = e(n[l]);
        if (u[0] == t || u.is(":visible")) {
          var f = u.width(),
            d = u.height(),
            g = u.data(c);
          !g ||
            (f === g.w && d === g.h) ||
            (u.trigger(s, [(g.w = f), (g.h = d)]), (a = i || !0));
        } else ((g = u.data(c)).w = 0), (g.h = 0);
      }
      null !== o &&
        (a && (null == i || i - a < 1e3)
          ? (o = t.requestAnimationFrame(p))
          : ((o = setTimeout(p, r[h])), (a = !1)));
    }
    (r[h] = 200),
      (r[u] = 20),
      (r[f] = !0),
      (e.event.special[s] = {
        setup: function() {
          if (!r[f] && this[l]) return !1;
          var t = e(this);
          n.push(this),
            t.data(c, { w: t.width(), h: t.height() }),
            1 === n.length && ((o = i), p());
        },
        teardown: function() {
          if (!r[f] && this[l]) return !1;
          for (var t = e(this), i = n.length - 1; i >= 0; i--)
            if (n[i] == this) {
              n.splice(i, 1);
              break;
            }
          t.removeData(c),
            n.length ||
              (a ? cancelAnimationFrame(o) : clearTimeout(o), (o = null));
        },
        add: function(t) {
          if (!r[f] && this[l]) return !1;
          var o;
          function n(t, n, r) {
            var a = e(this),
              l = a.data(c) || {};
            (l.w = n !== i ? n : a.width()),
              (l.h = r !== i ? r : a.height()),
              o.apply(this, arguments);
          }
          if (e.isFunction(t)) return (o = t), n;
          (o = t.handler), (t.handler = n);
        }
      }),
      t.requestAnimationFrame ||
        (t.requestAnimationFrame =
          t.webkitRequestAnimationFrame ||
          t.mozRequestAnimationFrame ||
          t.oRequestAnimationFrame ||
          t.msRequestAnimationFrame ||
          function(e, i) {
            return t.setTimeout(function() {
              e(new Date().getTime());
            }, r[u]);
          }),
      t.cancelAnimationFrame ||
        (t.cancelAnimationFrame =
          t.webkitCancelRequestAnimationFrame ||
          t.mozCancelRequestAnimationFrame ||
          t.oCancelRequestAnimationFrame ||
          t.msCancelRequestAnimationFrame ||
          clearTimeout);
  })(jQuery, this),
  (function(e) {
    jQuery.plot.plugins.push({
      init: function(e) {
        function t() {
          var t = e.getPlaceholder();
          0 != t.width() &&
            0 != t.height() &&
            (e.resize(), e.setupGrid(), e.draw());
        }
        e.hooks.bindEvents.push(function(e, i) {
          e.getPlaceholder().resize(t);
        }),
          e.hooks.shutdown.push(function(e, i) {
            e.getPlaceholder().unbind("resize", t);
          });
      },
      options: {},
      name: "resize",
      version: "1.0"
    });
  })(),
  (function(e) {
    function t(e, t, i, o) {
      var n = "categories" == t.xaxis.options.mode,
        r = "categories" == t.yaxis.options.mode;
      if (n || r) {
        var a = o.format;
        if (!a) {
          var l = t;
          if (
            ((a = []).push({ x: !0, number: !0, required: !0 }),
            a.push({ y: !0, number: !0, required: !0 }),
            l.bars.show || (l.lines.show && l.lines.fill))
          ) {
            var s = !!(
              (l.bars.show && l.bars.zero) ||
              (l.lines.show && l.lines.zero)
            );
            a.push({
              y: !0,
              number: !0,
              required: !1,
              defaultValue: 0,
              autoscale: s
            }),
              l.bars.horizontal &&
                (delete a[a.length - 1].y, (a[a.length - 1].x = !0));
          }
          o.format = a;
        }
        for (var c = 0; c < a.length; ++c)
          a[c].x && n && (a[c].number = !1), a[c].y && r && (a[c].number = !1);
      }
    }
    function i(e) {
      var t = [];
      for (var i in e.categories) {
        var o = e.categories[i];
        o >= e.min && o <= e.max && t.push([o, i]);
      }
      return (
        t.sort(function(e, t) {
          return e[0] - t[0];
        }),
        t
      );
    }
    function o(t, o, n) {
      if ("categories" == t[o].options.mode) {
        if (!t[o].categories) {
          var r = {},
            a = t[o].options.categories || {};
          if (e.isArray(a)) for (var l = 0; l < a.length; ++l) r[a[l]] = l;
          else for (var s in a) r[s] = a[s];
          t[o].categories = r;
        }
        t[o].options.ticks || (t[o].options.ticks = i),
          (function(e, t, i) {
            for (
              var o = e.points,
                n = e.pointsize,
                r = e.format,
                a = t.charAt(0),
                l = (function(e) {
                  var t = -1;
                  for (var i in e) e[i] > t && (t = e[i]);
                  return t + 1;
                })(i),
                s = 0;
              s < o.length;
              s += n
            )
              if (null != o[s])
                for (var c = 0; c < n; ++c) {
                  var h = o[s + c];
                  null != h &&
                    r[c][a] &&
                    (h in i || ((i[h] = l), ++l), (o[s + c] = i[h]));
                }
          })(n, o, t[o].categories);
      }
    }
    function n(e, t, i) {
      o(t, "xaxis", i), o(t, "yaxis", i);
    }
    e.plot.plugins.push({
      init: function(e) {
        e.hooks.processRawData.push(t), e.hooks.processDatapoints.push(n);
      },
      options: { xaxis: { categories: null }, yaxis: { categories: null } },
      name: "categories",
      version: "1.0"
    });
  })(jQuery),
  (function(e) {
    var t = 10,
      i = 0.95;
    var o = {
      series: {
        pie: {
          show: !1,
          radius: "auto",
          innerRadius: 0,
          startAngle: 1.5,
          tilt: 1,
          shadow: { left: 5, top: 15, alpha: 0.02 },
          offset: { top: 0, left: "auto" },
          stroke: { color: "#fff", width: 1 },
          label: {
            show: "auto",
            formatter: function(e, t) {
              return (
                "<div style='font-size:x-small;text-align:center;padding:2px;color:" +
                t.color +
                ";'>" +
                e +
                "<br/>" +
                Math.round(t.percent) +
                "%</div>"
              );
            },
            radius: 1,
            background: { color: null, opacity: 0 },
            threshold: 0
          },
          combine: { threshold: -1, color: null, label: "Other" },
          highlight: { opacity: 0.5 }
        }
      }
    };
    e.plot.plugins.push({
      init: function(o) {
        var n = null,
          r = null,
          a = null,
          l = null,
          s = null,
          c = null,
          h = !1,
          u = null,
          f = [];
        function p(t, i, o) {
          h ||
            ((h = !0),
            (n = t.getCanvas()),
            (r = e(n).parent()),
            (a = t.getOptions()),
            t.setData(
              (function(t) {
                for (
                  var i = 0,
                    o = 0,
                    n = 0,
                    r = a.series.pie.combine.color,
                    l = [],
                    s = 0;
                  s < t.length;
                  ++s
                ) {
                  var c = t[s].data;
                  e.isArray(c) && 1 == c.length && (c = c[0]),
                    e.isArray(c)
                      ? !isNaN(parseFloat(c[1])) && isFinite(c[1])
                        ? (c[1] = +c[1])
                        : (c[1] = 0)
                      : (c =
                          !isNaN(parseFloat(c)) && isFinite(c)
                            ? [1, +c]
                            : [1, 0]),
                    (t[s].data = [c]);
                }
                for (var s = 0; s < t.length; ++s) i += t[s].data[0][1];
                for (var s = 0; s < t.length; ++s) {
                  var c = t[s].data[0][1];
                  c / i <= a.series.pie.combine.threshold &&
                    ((o += c), n++, r || (r = t[s].color));
                }
                for (var s = 0; s < t.length; ++s) {
                  var c = t[s].data[0][1];
                  (n < 2 || c / i > a.series.pie.combine.threshold) &&
                    l.push(
                      e.extend(t[s], {
                        data: [[1, c]],
                        color: t[s].color,
                        label: t[s].label,
                        angle: (c * Math.PI * 2) / i,
                        percent: c / (i / 100)
                      })
                    );
                }
                return (
                  n > 1 &&
                    l.push({
                      data: [[1, o]],
                      color: r,
                      label: a.series.pie.combine.label,
                      angle: (o * Math.PI * 2) / i,
                      percent: o / (i / 100)
                    }),
                  l
                );
              })(t.getData())
            ));
        }
        function d(o, n) {
          if (r) {
            var f = o.getPlaceholder().width(),
              p = o.getPlaceholder().height(),
              d =
                r
                  .children()
                  .filter(".legend")
                  .children()
                  .width() || 0;
            (u = n),
              (h = !1),
              (l = Math.min(f, p / a.series.pie.tilt) / 2),
              (c = p / 2 + a.series.pie.offset.top),
              (s = f / 2),
              "auto" == a.series.pie.offset.left
                ? (a.legend.position.match("w") ? (s += d / 2) : (s -= d / 2),
                  s < l ? (s = l) : s > f - l && (s = f - l))
                : (s += a.series.pie.offset.left);
            var m = o.getData(),
              x = 0;
            do {
              x > 0 && (l *= i), (x += 1), v(), a.series.pie.tilt <= 0.8 && b();
            } while (!k() && x < t);
            x >= t &&
              (v(),
              r.prepend(
                "<div class='error'>Could not draw pie with labels contained inside canvas</div>"
              )),
              o.setSeries &&
                o.insertLegend &&
                (o.setSeries(m), o.insertLegend());
          }
          function v() {
            u.clearRect(0, 0, f, p),
              r
                .children()
                .filter(".pieLabel, .pieLabelBackground")
                .remove();
          }
          function b() {
            var e = a.series.pie.shadow.left,
              t = a.series.pie.shadow.top,
              i = a.series.pie.shadow.alpha,
              o =
                a.series.pie.radius > 1
                  ? a.series.pie.radius
                  : l * a.series.pie.radius;
            if (
              !(o >= f / 2 - e || o * a.series.pie.tilt >= p / 2 - t || o <= 10)
            ) {
              u.save(),
                u.translate(e, t),
                (u.globalAlpha = i),
                (u.fillStyle = "#000"),
                u.translate(s, c),
                u.scale(1, a.series.pie.tilt);
              for (var n = 1; n <= 10; n++)
                u.beginPath(),
                  u.arc(0, 0, o, 0, 2 * Math.PI, !1),
                  u.fill(),
                  (o -= n);
              u.restore();
            }
          }
          function k() {
            var t = Math.PI * a.series.pie.startAngle,
              i =
                a.series.pie.radius > 1
                  ? a.series.pie.radius
                  : l * a.series.pie.radius;
            u.save(),
              u.translate(s, c),
              u.scale(1, a.series.pie.tilt),
              u.save();
            for (var o = t, n = 0; n < m.length; ++n)
              (m[n].startAngle = o), h(m[n].angle, m[n].color, !0);
            if ((u.restore(), a.series.pie.stroke.width > 0)) {
              for (
                u.save(), u.lineWidth = a.series.pie.stroke.width, o = t, n = 0;
                n < m.length;
                ++n
              )
                h(m[n].angle, a.series.pie.stroke.color, !1);
              u.restore();
            }
            return (
              g(u),
              u.restore(),
              !a.series.pie.label.show ||
                (function() {
                  for (
                    var i = t,
                      o =
                        a.series.pie.label.radius > 1
                          ? a.series.pie.label.radius
                          : l * a.series.pie.label.radius,
                      n = 0;
                    n < m.length;
                    ++n
                  ) {
                    if (
                      m[n].percent >= 100 * a.series.pie.label.threshold &&
                      !h(m[n], i, n)
                    )
                      return !1;
                    i += m[n].angle;
                  }
                  return !0;
                  function h(t, i, n) {
                    if (0 == t.data[0][1]) return !0;
                    var l,
                      h = a.legend.labelFormatter,
                      u = a.series.pie.label.formatter;
                    (l = h ? h(t.label, t) : t.label), u && (l = u(l, t));
                    var d = (i + t.angle + i) / 2,
                      g = s + Math.round(Math.cos(d) * o),
                      m = c + Math.round(Math.sin(d) * o) * a.series.pie.tilt,
                      x =
                        "<span class='pieLabel' id='pieLabel" +
                        n +
                        "' style='position:absolute;top:" +
                        m +
                        "px;left:" +
                        g +
                        "px;'>" +
                        l +
                        "</span>";
                    r.append(x);
                    var v = r.children("#pieLabel" + n),
                      b = m - v.height() / 2,
                      k = g - v.width() / 2;
                    if (
                      (v.css("top", b),
                      v.css("left", k),
                      0 - b > 0 ||
                        0 - k > 0 ||
                        p - (b + v.height()) < 0 ||
                        f - (k + v.width()) < 0)
                    )
                      return !1;
                    if (0 != a.series.pie.label.background.opacity) {
                      var y = a.series.pie.label.background.color;
                      null == y && (y = t.color);
                      var w = "top:" + b + "px;left:" + k + "px;";
                      e(
                        "<div class='pieLabelBackground' style='position:absolute;width:" +
                          v.width() +
                          "px;height:" +
                          v.height() +
                          "px;" +
                          w +
                          "background-color:" +
                          y +
                          ";'></div>"
                      )
                        .css("opacity", a.series.pie.label.background.opacity)
                        .insertBefore(v);
                    }
                    return !0;
                  }
                })()
            );
            function h(e, t, n) {
              e <= 0 ||
                isNaN(e) ||
                (n
                  ? (u.fillStyle = t)
                  : ((u.strokeStyle = t), (u.lineJoin = "round")),
                u.beginPath(),
                Math.abs(e - 2 * Math.PI) > 1e-9 && u.moveTo(0, 0),
                u.arc(0, 0, i, o, o + e / 2, !1),
                u.arc(0, 0, i, o + e / 2, o + e, !1),
                u.closePath(),
                (o += e),
                n ? u.fill() : u.stroke());
            }
          }
        }
        function g(e) {
          if (a.series.pie.innerRadius > 0) {
            e.save();
            var t =
              a.series.pie.innerRadius > 1
                ? a.series.pie.innerRadius
                : l * a.series.pie.innerRadius;
            (e.globalCompositeOperation = "destination-out"),
              e.beginPath(),
              (e.fillStyle = a.series.pie.stroke.color),
              e.arc(0, 0, t, 0, 2 * Math.PI, !1),
              e.fill(),
              e.closePath(),
              e.restore(),
              e.save(),
              e.beginPath(),
              (e.strokeStyle = a.series.pie.stroke.color),
              e.arc(0, 0, t, 0, 2 * Math.PI, !1),
              e.stroke(),
              e.closePath(),
              e.restore();
          }
        }
        function m(e, t) {
          for (var i = !1, o = -1, n = e.length, r = n - 1; ++o < n; r = o)
            ((e[o][1] <= t[1] && t[1] < e[r][1]) ||
              (e[r][1] <= t[1] && t[1] < e[o][1])) &&
              t[0] <
                ((e[r][0] - e[o][0]) * (t[1] - e[o][1])) / (e[r][1] - e[o][1]) +
                  e[o][0] &&
              (i = !i);
          return i;
        }
        function x(e) {
          b("plothover", e);
        }
        function v(e) {
          b("plotclick", e);
        }
        function b(e, t) {
          var i = o.offset(),
            n = (function(e, t) {
              for (
                var i,
                  n,
                  r = o.getData(),
                  a = o.getOptions(),
                  h =
                    a.series.pie.radius > 1
                      ? a.series.pie.radius
                      : l * a.series.pie.radius,
                  f = 0;
                f < r.length;
                ++f
              ) {
                var p = r[f];
                if (p.pie.show) {
                  if (
                    (u.save(),
                    u.beginPath(),
                    u.moveTo(0, 0),
                    u.arc(
                      0,
                      0,
                      h,
                      p.startAngle,
                      p.startAngle + p.angle / 2,
                      !1
                    ),
                    u.arc(
                      0,
                      0,
                      h,
                      p.startAngle + p.angle / 2,
                      p.startAngle + p.angle,
                      !1
                    ),
                    u.closePath(),
                    (i = e - s),
                    (n = t - c),
                    u.isPointInPath)
                  ) {
                    if (u.isPointInPath(e - s, t - c))
                      return (
                        u.restore(),
                        {
                          datapoint: [p.percent, p.data],
                          dataIndex: 0,
                          series: p,
                          seriesIndex: f
                        }
                      );
                  } else if (
                    m(
                      [
                        [0, 0],
                        [
                          h * Math.cos(p.startAngle),
                          h * Math.sin(p.startAngle)
                        ],
                        [
                          h * Math.cos(p.startAngle + p.angle / 4),
                          h * Math.sin(p.startAngle + p.angle / 4)
                        ],
                        [
                          h * Math.cos(p.startAngle + p.angle / 2),
                          h * Math.sin(p.startAngle + p.angle / 2)
                        ],
                        [
                          h * Math.cos(p.startAngle + p.angle / 1.5),
                          h * Math.sin(p.startAngle + p.angle / 1.5)
                        ],
                        [
                          h * Math.cos(p.startAngle + p.angle),
                          h * Math.sin(p.startAngle + p.angle)
                        ]
                      ],
                      [i, n]
                    )
                  )
                    return (
                      u.restore(),
                      {
                        datapoint: [p.percent, p.data],
                        dataIndex: 0,
                        series: p,
                        seriesIndex: f
                      }
                    );
                  u.restore();
                }
              }
              return null;
            })(parseInt(t.pageX - i.left), parseInt(t.pageY - i.top));
          if (a.grid.autoHighlight)
            for (var h = 0; h < f.length; ++h) {
              var p = f[h];
              p.auto != e || (n && p.series == n.series) || k(p.series);
            }
          n &&
            (function(e, t) {
              var i = y(e);
              -1 == i
                ? (f.push({ series: e, auto: t }), o.triggerRedrawOverlay())
                : t || (f[i].auto = !1);
            })(n.series, e);
          var d = { pageX: t.pageX, pageY: t.pageY };
          r.trigger(e, [d, n]);
        }
        function k(e) {
          null == e && ((f = []), o.triggerRedrawOverlay());
          var t = y(e);
          -1 != t && (f.splice(t, 1), o.triggerRedrawOverlay());
        }
        function y(e) {
          for (var t = 0; t < f.length; ++t) if (f[t].series == e) return t;
          return -1;
        }
        o.hooks.processOptions.push(function(e, t) {
          t.series.pie.show &&
            ((t.grid.show = !1),
            "auto" == t.series.pie.label.show &&
              (t.legend.show
                ? (t.series.pie.label.show = !1)
                : (t.series.pie.label.show = !0)),
            "auto" == t.series.pie.radius &&
              (t.series.pie.label.show
                ? (t.series.pie.radius = 0.75)
                : (t.series.pie.radius = 1)),
            t.series.pie.tilt > 1
              ? (t.series.pie.tilt = 1)
              : t.series.pie.tilt < 0 && (t.series.pie.tilt = 0));
        }),
          o.hooks.bindEvents.push(function(e, t) {
            var i = e.getOptions();
            i.series.pie.show &&
              (i.grid.hoverable && t.unbind("mousemove").mousemove(x),
              i.grid.clickable && t.unbind("click").click(v));
          }),
          o.hooks.processDatapoints.push(function(e, t, i, o) {
            e.getOptions().series.pie.show && p(e);
          }),
          o.hooks.drawOverlay.push(function(e, t) {
            e.getOptions().series.pie.show &&
              (function(e, t) {
                var i = e.getOptions(),
                  o =
                    i.series.pie.radius > 1
                      ? i.series.pie.radius
                      : l * i.series.pie.radius;
                t.save(), t.translate(s, c), t.scale(1, i.series.pie.tilt);
                for (var n = 0; n < f.length; ++n) r(f[n].series);
                function r(e) {
                  e.angle <= 0 ||
                    isNaN(e.angle) ||
                    ((t.fillStyle =
                      "rgba(255, 255, 255, " +
                      i.series.pie.highlight.opacity +
                      ")"),
                    t.beginPath(),
                    Math.abs(e.angle - 2 * Math.PI) > 1e-9 && t.moveTo(0, 0),
                    t.arc(
                      0,
                      0,
                      o,
                      e.startAngle,
                      e.startAngle + e.angle / 2,
                      !1
                    ),
                    t.arc(
                      0,
                      0,
                      o,
                      e.startAngle + e.angle / 2,
                      e.startAngle + e.angle,
                      !1
                    ),
                    t.closePath(),
                    t.fill());
                }
                g(t), t.restore();
              })(e, t);
          }),
          o.hooks.draw.push(function(e, t) {
            e.getOptions().series.pie.show && d(e, t);
          });
      },
      options: o,
      name: "pie",
      version: "1.1"
    });
  })(jQuery),
  (function(e) {
    jQuery.plot.plugins.push({
      init: function(e) {
        e.hooks.processDatapoints.push(function(e, t, i) {
          if (null != t.stack && !1 !== t.stack) {
            var o = (function(e, t) {
              for (var i = null, o = 0; o < t.length && e != t[o]; ++o)
                t[o].stack == e.stack && (i = t[o]);
              return i;
            })(t, e.getData());
            if (o) {
              for (
                var n,
                  r,
                  a,
                  l,
                  s,
                  c,
                  h,
                  u,
                  f = i.pointsize,
                  p = i.points,
                  d = o.datapoints.pointsize,
                  g = o.datapoints.points,
                  m = [],
                  x = t.lines.show,
                  v = t.bars.horizontal,
                  b = f > 2 && (v ? i.format[2].x : i.format[2].y),
                  k = x && t.lines.steps,
                  y = !0,
                  w = v ? 1 : 0,
                  M = v ? 0 : 1,
                  T = 0,
                  C = 0;
                !(T >= p.length);

              ) {
                if (((h = m.length), null == p[T])) {
                  for (u = 0; u < f; ++u) m.push(p[T + u]);
                  T += f;
                } else if (C >= g.length) {
                  if (!x) for (u = 0; u < f; ++u) m.push(p[T + u]);
                  T += f;
                } else if (null == g[C]) {
                  for (u = 0; u < f; ++u) m.push(null);
                  (y = !0), (C += d);
                } else {
                  if (
                    ((n = p[T + w]),
                    (r = p[T + M]),
                    (l = g[C + w]),
                    (s = g[C + M]),
                    (c = 0),
                    n == l)
                  ) {
                    for (u = 0; u < f; ++u) m.push(p[T + u]);
                    (m[h + M] += s), (c = s), (T += f), (C += d);
                  } else if (n > l) {
                    if (x && T > 0 && null != p[T - f]) {
                      for (
                        a =
                          r +
                          ((p[T - f + M] - r) * (l - n)) / (p[T - f + w] - n),
                          m.push(l),
                          m.push(a + s),
                          u = 2;
                        u < f;
                        ++u
                      )
                        m.push(p[T + u]);
                      c = s;
                    }
                    C += d;
                  } else {
                    if (y && x) {
                      T += f;
                      continue;
                    }
                    for (u = 0; u < f; ++u) m.push(p[T + u]);
                    x &&
                      C > 0 &&
                      null != g[C - d] &&
                      (c =
                        s +
                        ((g[C - d + M] - s) * (n - l)) / (g[C - d + w] - l)),
                      (m[h + M] += c),
                      (T += f);
                  }
                  (y = !1), h != m.length && b && (m[h + 2] += c);
                }
                if (
                  k &&
                  h != m.length &&
                  h > 0 &&
                  null != m[h] &&
                  m[h] != m[h - f] &&
                  m[h + 1] != m[h - f + 1]
                ) {
                  for (u = 0; u < f; ++u) m[h + f + u] = m[h + u];
                  m[h + 1] = m[h - f + 1];
                }
              }
              i.points = m;
            }
          }
        });
      },
      options: { series: { stack: null } },
      name: "stack",
      version: "1.2"
    });
  })(),
  (function(e) {
    jQuery.plot.plugins.push({
      init: function(e) {
        var t = { x: -1, y: -1, locked: !1 };
        function i(i) {
          t.locked || (-1 != t.x && ((t.x = -1), e.triggerRedrawOverlay()));
        }
        function o(i) {
          if (!t.locked)
            if (e.getSelection && e.getSelection()) t.x = -1;
            else {
              var o = e.offset();
              (t.x = Math.max(0, Math.min(i.pageX - o.left, e.width()))),
                (t.y = Math.max(0, Math.min(i.pageY - o.top, e.height()))),
                e.triggerRedrawOverlay();
            }
        }
        (e.setCrosshair = function(i) {
          if (i) {
            var o = e.p2c(i);
            (t.x = Math.max(0, Math.min(o.left, e.width()))),
              (t.y = Math.max(0, Math.min(o.top, e.height())));
          } else t.x = -1;
          e.triggerRedrawOverlay();
        }),
          (e.clearCrosshair = e.setCrosshair),
          (e.lockCrosshair = function(i) {
            i && e.setCrosshair(i), (t.locked = !0);
          }),
          (e.unlockCrosshair = function() {
            t.locked = !1;
          }),
          e.hooks.bindEvents.push(function(e, t) {
            e.getOptions().crosshair.mode && (t.mouseout(i), t.mousemove(o));
          }),
          e.hooks.drawOverlay.push(function(e, i) {
            var o = e.getOptions().crosshair;
            if (o.mode) {
              var n = e.getPlotOffset();
              if ((i.save(), i.translate(n.left, n.top), -1 != t.x)) {
                var r = e.getOptions().crosshair.lineWidth % 2 ? 0.5 : 0;
                if (
                  ((i.strokeStyle = o.color),
                  (i.lineWidth = o.lineWidth),
                  (i.lineJoin = "round"),
                  i.beginPath(),
                  -1 != o.mode.indexOf("x"))
                ) {
                  var a = Math.floor(t.x) + r;
                  i.moveTo(a, 0), i.lineTo(a, e.height());
                }
                if (-1 != o.mode.indexOf("y")) {
                  var l = Math.floor(t.y) + r;
                  i.moveTo(0, l), i.lineTo(e.width(), l);
                }
                i.stroke();
              }
              i.restore();
            }
          }),
          e.hooks.shutdown.push(function(e, t) {
            t.unbind("mouseout", i), t.unbind("mousemove", o);
          });
      },
      options: {
        crosshair: { mode: null, color: "rgba(170, 0, 0, 0.80)", lineWidth: 1 }
      },
      name: "crosshair",
      version: "1.0"
    });
  })();
