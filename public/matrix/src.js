/* eslint-disable no-unused-expressions */
!(function() {
  function e() {
    function e(e, a) {
      ++e.button && (e.keyCode = 900 + e.button),
        (pe[e.keyCode] = a),
        e.preventDefault();
    }
    function a(a) {
      e(a, !1);
    }
    function n(a) {
      e(a, !0);
    }
    (U = document.getElementById("canvas")),
      (B = document.createElement("canvas")),
      B.setAttribute("width", ue),
      B.setAttribute("height", ce),
      U.setAttribute("width", ue),
      U.setAttribute("height", ce),
      (R = U.getContext("2d")),
      (V = B.getContext("2d")),
      (R.imageSmoothingEnabled = !1),
      (R.mozImageSmoothingEnabled = !1),
      (R.msImageSmoothingEnabled = !1),
      (R.oImageSmoothingEnabled = !1),
      (document.onkeydown = document.onmousedown = n),
      (document.onkeyup = document.onmouseup = a),
      (U.onmousemove = function(e) {
        ($.x = -(ue / 2) + (e.offsetX || e.layerX)),
          ($.y = -(ce / 2) + (e.offsetY || e.layerY)),
          (_.x = e.offsetX || e.layerX),
          (_.y = e.offsetY || e.layerY);
      }),
      (S = new N()),
      S.init(function() {
        S.run();
      });
  }
  function a(e, a) {
    for (
      var r = n(e),
        t = r[0],
        o = r[1],
        i = o.getImageData(0, 0, t.width, t.height),
        l = i.data,
        m = l.length,
        s = 0;
      s < m;
      s++
    ) {
      var f = (l[4 * s] + l[4 * s + 1] + l[4 * s + 2]) / 3;
      (l[4 * s] = f + a.r), (l[4 * s + 1] = f + a.g), (l[4 * s + 2] = f + a.b);
    }
    return o.putImageData(i, 0, 0), t;
  }
  function n(e, a, n) {
    var r = document.createElement("canvas");
    (r.width = a || e.width), (r.height = n || e.height);
    var t = r.getContext("2d");
    return e && t.drawImage(e, 0, 0), [r, t];
  }
  function r(e, a, r) {
    for (
      var t = n(e),
        o = t[0],
        i = t[1],
        l = i.getImageData(0, 0, o.width, o.height),
        m = l.data,
        s = m.length,
        f = 0;
      f < s;
      f++
    )
      a.r === m[4 * f] &&
        a.g === m[4 * f + 1] &&
        a.b === m[4 * f + 2] &&
        a.a === m[4 * f + 3] &&
        ((m[4 * f] = r.r),
        (m[4 * f + 1] = r.g),
        (m[4 * f + 2] = r.b),
        (m[4 * f + 3] = r.a));
    return i.putImageData(l, 0, 0), o;
  }
  function t(e, a) {
    for (var n = [], r = 0; r < 3; r++)
      n.push({ x: d(-e / 2, e / 2) + e / 2, y: d(-a / 2, a / 2) + a / 2 });
    return n;
  }
  function o(e, a, r) {
    r = r || 1;
    for (var o = n(null, e, a), i = o[0], l = o[1], m = 0; m < r; m++) {
      var s = t(e, a);
      l.moveTo(s[0].x, s[0].y);
      for (var m = 1; m < s.length; m++) {
        var f = s[m];
        l.lineTo(f.x, f.y);
      }
      l.fill();
    }
    return i;
  }
  function i(e) {
    var a = n(e),
      r = a[0],
      o = a[1],
      i = (r.width = e.width),
      l = (r.height = e.height);
    o.beginPath();
    var m = t(i, l);
    o.moveTo(m[0].x, m[0].y);
    for (var s = 1; s < m.length; s++) {
      var f = m[s];
      o.lineTo(f.x, f.y);
    }
    o.closePath(), o.clip(), o.drawImage(e, 0, 0);
    var h = Math.atan2(d(-1, 1), d(-1, 1)),
      g = me(h),
      u = le(h);
    return { vx: g, vy: u, buffer: r };
  }
  function l(e, a, n) {
    for (
      var r, t, o = [], i = e.width, l = e.height, m = i / a, s = l / n, f = 0;
      f < s;
      f++
    ) {
      o[f] = [];
      for (var h = 0; h < m; h++)
        (r = document.createElement("canvas")),
          (r.width = a),
          (r.height = n),
          (t = r.getContext("2d")),
          t.drawImage(e, h * a, f * n, a, n, 0, 0, a, n),
          (o[f][h] = r);
    }
    return o;
  }
  function m(e, a, n, r) {
    return Math.atan2(r - a, n - e);
  }
  function s(e, a) {
    var n = new K(e);
    for (var r in a) a[r].push(n);
    return n.setRef(n), n;
  }
  function f(e, a, n, r, t, o, i, l) {
    return e + n > t && e < t + i && a + r > o && a < o + l;
  }
  function h(e, a) {
    var n = [];
    for (var r in e) {
      n[r] = [];
      for (var t in e[r]) n[r][t] = a(e[r][t]);
    }
    return n;
  }
  function g(e) {
    function a() {
      m.clearRect(0, 0, t.width, t.height), (h += 3);
      for (var e in s)
        (m.globalAlpha = r = 1 - h / 50),
          m.drawImage(s[e].buffer, h * s[e].vx + o / 2, h * s[e].vy + l / 2);
      return t;
    }
    function n() {
      return r < 0;
    }
    for (
      var r,
        t = document.createElement("canvas"),
        o = (t.width = 4 * e.width),
        l = (t.height = 4 * e.height),
        m = t.getContext("2d"),
        s = [],
        f = 0;
      f < 5;
      f++
    )
      s.push(i(e));
    var h = 0;
    return { draw: a, finished: n };
  }
  function d(e, a) {
    return ae() * (a - e) + e;
  }
  function u(e, a, n) {
    var r = document.createElement("canvas"),
      t = 6,
      o = 2;
    (r.width = e), (r.height = a);
    for (var i = ie(r.height / t), l = r.getContext("2d"), m = 0; m < i; m++)
      l.drawImage(new Me().draw(M(3 * i), o, n), 0, m * o * t);
    return r;
  }
  function c(e, a, n, r, t) {
    var o = document.createElement("canvas");
    (o.width = r), (o.height = t);
    var i = o.getContext("2d");
    return (
      (i.imageSmoothingEnabled = !1), i.drawImage(e, 0, 0, a, n, 0, 0, r, t), o
    );
  }
  function A(e, a) {
    return a * e ? j : 1;
  }
  function p(e) {
    return (
      (e = e || 1),
      ae() > F.$.hp / 1e3 &&
        ae() > F.$.hp / 1e3 &&
        ae() > F.$.hp / 1e3 &&
        ae() > F.$.hp / 1e3 &&
        ae() > F.$.hp / 1e3 &&
        e > F.$.hp / 1e3
    );
  }
  function w(e, a, n, r) {
    for (var t = [], o = 0; o < e; o++) t.push(u(a, n, r));
    return t;
  }
  function v(e, a, n) {
    V.save();
    var r = 0.05 * le((1.1 * se()) / 1e3);
    n *= 1 + r;
    var t = V.createRadialGradient(e, a, 0, e, a, n);
    t.addColorStop(0, "#BBB"),
      t.addColorStop(0.2 + r, "#AAA"),
      t.addColorStop(0.7 + r, "#333"),
      t.addColorStop(0.9, "#111"),
      t.addColorStop(1, "#000"),
      (V.fillStyle = t),
      V.beginPath(),
      V.arc(e, a, n, 0, 2 * ee),
      V.fill(),
      V.restore();
  }
  function y(e, a) {
    a = a || "lightgreen";
    var r = n(e),
      t = r[0],
      o = r[1],
      i = x(Ie[a]);
    return (
      o.drawImage(e, 0, 0),
      (o.globalCompositeOperation = "source-in"),
      o.drawImage(i, 0, 0),
      t
    );
  }
  function x(e) {
    return e[oe(ae() * e.length)];
  }
  function M(e) {
    for (var a = ""; e--; ) a += ae() > 0.5 ? 1 : 0;
    return a;
  }
  function I(e, a, n, r) {
    return { r: e, g: a, b: n, a: 255 * (isNaN(r) ? 1 : r) };
  }
  function P(e) {
    return JSON.parse(JSON.stringify(e));
  }
  function C(e, a, n, r) {
    return Math.sqrt((e -= n) * e + (a -= r) * a);
  }
  function b(e, a, n) {
    return {
      x: function(r) {
        return (1 - r) * (1 - r) * e.x + 2 * (1 - r) * r * a.x + r * r * n.x;
      },
      y: function(r) {
        return (1 - r) * (1 - r) * e.y + 2 * (1 - r) * r * a.y + r * r * n.y;
      },
    };
  }
  var U,
    B,
    S,
    R,
    V,
    F,
    G,
    E,
    k,
    T,
    D,
    z,
    Z,
    O,
    Y,
    Q,
    X,
    W,
    J = function(e) {
      function a() {
        var a = se();
        if (l + i < a || n) {
          i = se();
          var s = e.getPos().x,
            h = e.getPos().y;
          if (n)
            (r = n.x < s ? -1 : 1),
              e.moveX(r * m),
              (r = n.y < h ? -1 : 1),
              e.moveY(r * m);
          else {
            var g = C(t, o, s, h),
              u = re(150, g / 2),
              c = s > t ? -1 : 1,
              A = d(50, u),
              p = c * A + s;
            c = h > o ? -1 : 1;
            var w = d(50, u),
              v = c * w + h;
            n = { x: p, y: v };
          }
          n &&
            f(n.x, n.y, 10, 10, s, h, e.getDim().w, e.getDim().h) &&
            ((n = !1), (l = d(500, 2e3)));
        }
      }
      var n,
        r,
        t,
        o,
        i = se(),
        l = d(500, 2e3),
        m = 5;
      return {
        update: function(n) {
          (t = n.x), (o = n.y), a(), e.shoot(!0, { x: t, y: o });
        },
      };
    },
    K = function(e, a) {
      function n(e) {
        if (
          ((ke.name = e.name),
          (ke.isPlayer = "player" == ke.name),
          (la =
            "bullet" == ke.name ||
            "playersGrenade" == ke.name ||
            "explosion" == ke.name),
          (sa = "playersGrenade" == ke.name),
          (Aa = "glitch" == ke.name),
          (fa = "explosion" == ke.name),
          (ma = e.points),
          ma && (Ee = new Me()),
          (ke.isEnemy = !(!ke.name.match(/enemy/) && !ke.name.match(/drone/))),
          (ca = e.isCollectable),
          (ke.isPowerUp = e.isPowerUp),
          (Ae = ke.name.match(/drone/) || ca),
          (ke.isItem = ke.name.match(/crate/)),
          ke.isItem && (Ze /= 2),
          (ua = e.bot),
          Aa && (Re = !0),
          !ma)
        )
          if (la)
            ($ = e.id),
              (pe = e.speed),
              (We = e.damage),
              we[ke.name] && (Be = we[ke.name].sprites),
              (Ie = e.shootThrough),
              (He = e.shift),
              (ye = e.start);
          else {
            var a = we[ke.name];
            if (
              ((De = a.h),
              (Te = a.w),
              (ke.hp = e.hp || a.hp || 0),
              "crate3" == ke.name && (ke.hp = 1),
              (Xe = ke.hp),
              (Be = a.sprites),
              (Se = a.hitSprites),
              (Le = Be[0].length),
              ($e = Be.length),
              ua || ke.isPlayer)
            ) {
              var n = a.weapon,
                r = a.weaponMod;
              ke.weapon = na[n] = new be(Ce[n], ke.id, r, ke.isPlayer);
            }
            ke.isPlayer || (Ue = new g(Be[0][0]));
          }
        if (
          ((H = _ = e.x),
          (j = ee = e.y),
          (ae = e.vx),
          (re = e.vy),
          (qe = 4),
          (ta = L),
          la && (ta = 10),
          sa &&
            ((ga = C(_, ee, ae, re) / 3),
            (Ye = m(_, ee, ae, re)),
            (fe = new b(
              { x: _, y: ee },
              { x: Math.cos(Ye) * ga + _, y: Math.sin(Ye) * ga + ee - 300 },
              { x: ae, y: re }
            )),
            (ga /= 10)),
          fa)
        )
          for (var t = 0; t < 20; t++)
            da.push([Math.cos(d(0, 100)), Math.sin(d(0, 100))]);
      }
      function r(e) {
        aa += e;
        for (var a; !a; )
          aa < 0 && (aa = de.length + aa),
            (aa = aa.mod(de.length)),
            (a = na[de[aa]]),
            (aa += e);
        (ke.weapon = a), (aa -= e);
      }
      function t(e) {
        if (
          ((oe = e.x),
          (ie = e.y),
          Je.unshift({ x: H, y: j }),
          Je.splice(10, 1),
          Aa && (je++, je > 150))
        ) {
          var a = 5 * d(-1, 1) * ta + H,
            n = 5 * d(-1, 1) * ta + j;
          s({ name: x(["drone", "drone1", "drone2"]), x: a, y: n, bot: !0 }, [
            T,
            z,
          ]),
            (je = 0);
        }
        if (
          (ze + Ze < se() && me && me.update(e),
          Re && (ea += 1),
          ke.isPlayer && (qe = k),
          ea > qe && ((ea = 0), _e < Le - 1 ? (_e += 1) : (_e = 0)),
          la)
        )
          if (sa)
            (H = fe.x(ha / ga)),
              (j = fe.y(ha / ga)),
              ha++,
              ha > ga &&
                (D.splice(D.indexOf(Ge), 1),
                s({ name: "explosion", x: ae, y: re, id: $, damage: 6 }, [D]));
          else {
            ye += pe;
            for (var r = ye, t = 0; t < He; t++)
              Ke.unshift({ x: ae * r + _, y: re * r + ee }),
                Ke.splice(He, 1),
                r--;
            fa || ((H = ae * ye + _), (j = re * ye + ee));
            var a = H,
              n = j,
              o = Te,
              l = De;
            fa &&
              ((a -= 15 * ta), (n -= 15 * ta), (o = 30 * ta), (l = 30 * ta));
            var m;
            for (var t in T)
              if (
                ((m = T[t]), !(ke.id == m.$.id || $ == m.$.id || m.$.hp <= 0))
              ) {
                var h = m.getPos().x,
                  g = m.getPos().y,
                  u = m.getBounding().w,
                  c = m.getBounding().h;
                if (
                  f(a, n, o, l, h, g, u, c) &&
                  (m.$.isItem ||
                    m.$.isPlayer ||
                    (m.$.isEnemy && $ == F.$.id) ||
                    $ == -1)
                ) {
                  var A = m.dealDamage(We);
                  if (
                    (A >= We && (Ie = !1),
                    fa || (We -= A),
                    (!Ie && !fa) || We < 0)
                  ) {
                    D.splice(D.indexOf(Ge), 1);
                    break;
                  }
                }
              }
          }
        if (ke.isPlayer) {
          var m,
            p = 0;
          for (var t in W) {
            m = W[t];
            var h = m.getPos().x,
              g = m.getPos().y,
              u = m.getBounding().w,
              c = m.getBounding().h;
            if (
              f(
                H - (Te * ta) / 4,
                j - (De * ta) / 2,
                (Te * ta) / 2,
                (De * ta) / 2,
                h,
                g,
                u,
                c
              )
            ) {
              var w = m.$.name;
              "glitch" == w
                ? (p = m.hack())
                : m.$.isPowerUp
                ? (F.givePowerup(w), m.deleteItem())
                : (F.giveWeapon(w), m.deleteItem());
            }
          }
          Y = p;
        }
        ke.weapon && ke.weapon.reload();
        var v = C(oe, ie, H, j);
        return (v > 1.5 * ue || ((la || ke.isItem) && v > ce)) && i(), ia;
      }
      function i() {
        if (la) D.splice(D.indexOf(Ge), 1);
        else if (ma) he.splice(he.indexOf(Ge), 1);
        else {
          T.splice(T.indexOf(Ge), 1);
          var e = 0;
          ke.isEnemy && (e = Xe),
            Aa && (e = 200),
            Aa &&
              s(
                {
                  name: "points",
                  x: H - (Te / 8) * ta,
                  y: j - (ta * De) / 2,
                  points: e,
                },
                [he]
              ),
            (E += e),
            ke.isItem && X.splice(X.indexOf(Ge), 1),
            (ca || Aa) && W.splice(W.indexOf(Ge), 1),
            ke.isEnemy && z.splice(z.indexOf(Ge), 1);
        }
      }
      function l() {
        (oa =
          Fe && !Ae && ke.weapon.getReloadProgress().reloadProgress <= 0
            ? 1
            : 0),
          Re || (_e = 0);
        var e = ke.isPlayer ? ue / 2 : ue / 2 + H - oe,
          a = ke.isPlayer ? ce / 2 : ce / 2 + j - ie,
          n = (xe - se()) / Ne;
        return (
          ma
            ? ((j -= 2),
              (R.globalAlpha = 1 - ha++ / 50),
              R.drawImage(Ee.draw(String(ma), 5, "green"), e, a),
              (R.globalAlpha = 1),
              ha > 50 && i())
            : h(
                !la && Be[oa][_e],
                e,
                a,
                0,
                !(la || ca || Aa) && { img: Se[oa][_e], alpha: n }
              ),
          (Re = Aa || 0),
          ia
        );
      }
      function h(e, a, n, r, t) {
        R.save();
        var l;
        if (
          (Ae && (n += 5 * le(Oe++ / 7)),
          (a += ta * (Te / 4)),
          (l = Ve ? -1 : 1),
          R.scale(ra, l),
          (a *= ra),
          ra == -1 && (a += (Te * ta) / 2),
          (n *= l),
          !la)
        )
          if (Pe) {
            var m = Ue.draw(),
              s = Ue.finished(),
              f = m.width,
              h = m.height;
            R.drawImage(
              m,
              0,
              0,
              f,
              h,
              a + f,
              n + h,
              (-f / 2) * ta,
              (-h / 2) * ta
            ),
              s && i();
          } else
            Z || ((Aa || ze + Ze > se()) && !ca)
              ? (Aa && (e = o(20, 20, 3)),
                ze + Ze > se() && !Aa && (R.globalAlpha = 1 - (se() - ze) / Ze),
                R.drawImage(
                  y(
                    c(e, Te, De, (Te * ta) / 2, (De * ta) / 2),
                    Aa ? "red" : "lightgreen"
                  ),
                  0,
                  0,
                  (Te * ta) / 2,
                  (De * ta) / 2,
                  a,
                  n,
                  (-Te / 2) * ta,
                  (-De / 2) * ta
                ),
                ze + Ze > se() &&
                  !Aa &&
                  ((R.globalAlpha = (se() - ze) / Ze),
                  R.drawImage(
                    e,
                    0,
                    0,
                    Te,
                    De,
                    a,
                    n,
                    (-Te / 2) * ta,
                    (-De / 2) * ta
                  )),
                (R.globalAlpha = 1))
              : R.drawImage(
                  e,
                  0,
                  0,
                  Te,
                  De,
                  a,
                  n,
                  (-Te / 2) * ta,
                  (-De / 2) * ta
                );
        if (fa) {
          R.fillStyle = "#ffffff";
          var g,
            d,
            u = ta / 2;
          for (var A in da) {
            R.globalAlpha = 1 - ha / 10;
            var p = da[A][0] * ha * 10,
              w = da[A][1] * ha * 10;
            (g = ue / 2 + p + _ - oe + 5 * ta),
              (d = ce / 2 + w + ee - ie + 4 * ta),
              R.drawImage(Be[0][0], 0, 0, 20, 18, g, d, -10 * ta, -9 * ta);
          }
          (U.style.left = 20 * Math.sin(ha) + "px"),
            ++ha > 10 && ((U.style.left = "0px"), D.splice(D.indexOf(Ge), 1));
        } else if (la) {
          (R.fillStyle = "#ffffff"), 1 == $ && (R.fillStyle = "#dadaa8");
          var u = ta / 2;
          if (
            (sa && ((R.fillStyle = "#94947f"), (u = ta)),
            R.fillRect(a, n, u, u),
            He)
          )
            for (var g, d, A = 0; A < He; A++)
              Ke[A] &&
                ((R.globalAlpha = A / He),
                (g = ue / 2 + Ke[A].x - oe),
                (d = ce / 2 + Ke[A].y - ie),
                R.fillRect(g, d, u, u));
          R.globalAlpha = 1;
        }
        t.alpha > 0 &&
          ((R.globalAlpha = t.alpha),
          R.drawImage(
            t.img,
            0,
            0,
            Te,
            De,
            a,
            n,
            (-Te / 2) * ta,
            (-De / 2) * ta
          )),
          R.restore();
      }
      function u(e) {
        if (ke.grenadeCount > 0) {
          var a = p(e),
            n = a[0],
            r = a[1],
            t = a[2],
            o = a[3];
          s({ name: "playersGrenade", x: n, y: r, id: ke.id, vx: t, vy: o }, [
            D,
          ]),
            ke.grenadeCount--;
        }
      }
      function p(e) {
        if (ke.isPlayer)
          var a = ie - ((ta * De) / 4) * 1.3,
            n = oe,
            r = e.x + oe,
            t = e.y + ie;
        else
          var a = j - ((ta * De) / 4) * 1.3,
            n = H,
            r = e.x,
            t = e.y - ((ta * De) / 4) * 1.3;
        return [n, a, r, t];
      }
      function w(e, a) {
        Fe = e;
        var n = ke.weapon.checkCooldown();
        if (e && !n) {
          var t = p(a),
            o = t[0],
            i = t[1],
            l = t[2],
            s = t[3];
          (ra = _ < a.x ? 1 : -1),
            (Ye = m(o, i, l, s)),
            ke.weapon.fire(o, i, Ye),
            ke.weapon.getAmmo().ammo <= 0 &&
              ke.isPlayer &&
              (delete na[ke.weapon.name], r(1));
        }
      }
      function v(e) {
        na[e] && ((ke.weapon = na[e]), (aa = de.indexOf(e)));
      }
      function M(e) {
        (Re = Re || e),
          (e *= A(ke.isPlayer, e)),
          ke.weapon.checkCooldown() || (ra = 0 == e ? ra : e > 0 ? 1 : -1),
          (H += e);
      }
      function I(e) {
        (Re = Re || e), (e *= A(ke.isPlayer, e)), (j += e);
      }
      function P() {
        return { w: Te, h: De };
      }
      function B() {
        return { x: H, y: j };
      }
      function S() {
        return { x: H - (Te * ta) / 4, y: j - (De * ta) / 2 };
      }
      function V() {
        return { w: (Te * ta) / 2, h: (De * ta) / 2 };
      }
      function O(e) {
        ke.hp = e;
      }
      function Q(e, a) {
        (a = a || 0),
          (ke.armor += a),
          (ke.armor = te(ke.armor, Xe)),
          (ke.hp += e),
          (ke.hp = te(ke.hp, Xe));
      }
      function K(e) {
        var a = ke.hp + (ke.armor || 0);
        if (((xe = se() + Ne), ke.armor)) {
          var n = ke.armor - e;
          n < 0
            ? ((e -= ke.armor), (ke.armor = 0))
            : ((ke.armor -= e), (e = 0));
        }
        if (((ke.hp -= e), ke.hp <= 0)) {
          if (((Pe = Ge), ke.isItem)) {
            var r = ve[4];
            "crate" == ke.name
              ? (r = ve[ne(d(0, 3))])
              : "crate2" == ke.name && (r = ve[ne(d(5, ve.length - 1))]),
              s(
                {
                  name: r,
                  isCollectable: "explosion" != r,
                  damage: "explosion" == r ? 4 : 0,
                  isPowerUp: "crate2" == ke.name,
                  id: -1,
                  x: H,
                  y: j,
                },
                "explosion" == r ? [D] : [T, W]
              );
          }
          ke.isEnemy &&
            s(
              {
                name: "points",
                x: H - Te / 2,
                y: j - (ta * De) / 2,
                points: Xe,
              },
              [he]
            );
        }
        return a;
      }
      function N(e) {
        ua && (me = new J(e)), (Ge = e);
      }
      function q() {
        return Ge;
      }
      G++;
      var H,
        j,
        $,
        _,
        ee,
        ae,
        re,
        oe,
        ie,
        me,
        fe,
        Ae,
        pe,
        ye,
        xe,
        Ie,
        Pe,
        Ue,
        Be,
        Se,
        Re,
        Ve,
        Fe,
        Ge,
        Ee,
        ke = { hp: 0, armor: 0, grenadeCount: 3, isPowerUp: !1, id: G },
        Te = 1,
        De = 1,
        ze = se(),
        Ze = 2e3,
        Oe = 0,
        Ye = 0,
        Qe = 0,
        Xe = 0,
        We = 0,
        Je = [],
        Ke = [],
        Ne = 200,
        qe = 0,
        He = 0,
        je = 0,
        Le = 1,
        $e = 1,
        _e = 0,
        ea = 0,
        aa = 0,
        na = {},
        ra = 1,
        ta = 1,
        oa = 0,
        ia = {
          init: n,
          switchToWeapon: v,
          draw: l,
          update: t,
          switchWeapon: r,
          moveX: M,
          moveY: I,
          shoot: w,
          throws: u,
          getBounding: V,
          getPos: S,
          getDim: P,
          dealDamage: K,
          getRealPos: B,
          setRef: N,
          getRef: q,
          setHp: O,
          addHp: Q,
          getPowerUp: ke.hasPowerUp,
          $: ke,
          giveWeapon: function(e) {
            na[e]
              ? na[e].addAmmo(Ce[e].ammo)
              : ((na[e] = new be(Ce[e], ke.id, null, ke.isPlayer)), v(e));
          },
          usePowerup: function() {
            ke.hasPowerUp &&
              --ke.hasPowerUp.charges <= 0 &&
              (ke.hasPowerUp = void 0);
          },
          givePowerup: function(e) {
            var a = 0;
            switch (e) {
              case "health":
                Q(250);
                break;
              case "armor":
                Q(0, 250);
                break;
              case "speed":
                a = 200;
                break;
              case "teleport":
                a = 3;
                break;
              case "grenade":
                ke.grenadeCount += 3;
            }
            a && (ke.hasPowerUp = { name: e, charges: a, maxcharges: a });
          },
          deleteItem: i,
          hack: function() {
            return (Qe += A(!0, 1)), ++Qe > ge ? void i() : Qe;
          },
        },
        la = !1,
        ma = !1,
        sa = !1,
        fa = !1,
        ha = 0,
        ga = 0,
        da = [],
        ua = !1,
        ca = !1,
        Aa = !1;
      return e && n(e, a), ia;
    },
    N = function(e) {
      function a() {
        var e = new Date();
        return (
          e.getDay() +
          "-" +
          (e.getMonth() + 1) +
          "-" +
          (1900 + e.getYear()) +
          " " +
          e.getHours() +
          ":" +
          e.getMinutes() +
          ":" +
          e.getSeconds()
        );
      }
      function n() {
        document.body.onkeyup = function(e) {
          var a = e.keyCode;
          89 == a ? F.switchWeapon(1) : 88 == a && F.switchWeapon(-1),
            69 == a && F.throws($);
          for (var n = 49, r = 0; r < 5; r++)
            a == n + r && F.switchToWeapon(de[r]);
          82 == a && F.$.weapon.startReloading();
        };
      }
      function r() {
        o(), t(), l.realFinished() || requestAnimationFrame(r);
      }
      function t() {
        if (!e && (i.update(), !i.finished())) return void (O = se() + 5e3);
        if ("number" == typeof m && --m <= 0) {
          if (document.getElementById("score").classList !== "end") {
            document.getElementById("score").classList = "end";
            document.getElementById("score").innerText = E;
          }

          if ((l.update(), l.realFinished())) {
            document.getElementById("score").classList = "";
            document.getElementById("score").innerText = "";
            var a = localStorage.getItem("stm_highscore") || 0;
            E > a && localStorage.setItem("stm_highscore", E),
              (S = new N(!0)),
              S.init(function() {
                S.run();
              });
          }
        } else if (
          ((Z = p()),
          R.clearRect(0, 0, U.width, U.height),
          _map.update(F.getRealPos()),
          F.$.hp > 0)
        ) {
          T.sort(function(e, a) {
            return e.getRealPos().y - a.getRealPos().y;
          });
          for (var n in T) T[n].update(F.getRealPos()).draw();
          for (var n in D) D[n].update(F.getRealPos()).draw();
          for (var n in he) he[n].update(F.getRealPos()).draw();
          fe ||
            ((V.fillStyle = "#000000"),
            V.fillRect(0, 0, ue, ce),
            v(ue / 2, ce / 2, 1.2 * ce),
            R.save(),
            (R.globalCompositeOperation = "multiply"),
            R.drawImage(B, 0, 0),
            R.restore()),
            gui.draw();
        } else "boolean" == typeof m && (m = 45);
      }
      function o() {
        var e = 0,
          a = 5,
          n = !1;
        pe[900] && (n = !0),
          pe[65] ? (e = a * -1) : pe[68] && (e = a),
          F.$.hp > 0 && F.moveX(e),
          (e = 0),
          pe[83] ? (e = a) : pe[87] && (e = a * -1),
          F.$.hp > 0 && F.moveY(e);
        var r = F.$.hasPowerUp;
        pe[16] && r
          ? "speed" == r.name
            ? ((k = 1), (j = 2), F.usePowerup())
            : "teleport" == r.name &&
              f + 500 < se() &&
              (F.moveX($.x), F.moveY($.y), (f = se()), F.usePowerup())
          : ((k = 4), (j = 1)),
          F.shoot(n, $);
      }
      (G = 0),
        (T = []),
        (D = []),
        (z = []),
        (O = 0),
        (Y = 0),
        (E = 0),
        (X = []),
        (W = []);
      var i = new Pe(
          [
            "",
            "call trans opt: received. " + a() + " REC:log>",
            "warning: carrier anomaly",
            "trace program: running..",
          ],
          "to skip"
        ),
        l = new Pe(["system failure"], "to retry", !0),
        m = !1;
      n();
      var f = se();
      return {
        init: function(e) {
          (_map = new xe()),
            _map.init(function() {
              (F = s({ name: "player", x: 0, y: 0, hp: 1e3 }, [T])),
                (gui = new q(F)),
                e();
            });
        },
        run: r,
      };
    },
    q = function(e) {
      function a() {
        var a = e.$.weapon;
        R.drawImage(
          l.draw(a.name + ": " + a.getAmmo().ammo, 5, "green"),
          m,
          ce - m - 130
        ),
          R.drawImage(
            l.draw("Grenades: " + e.$.grenadeCount, 5, "green"),
            m,
            ce - m - 90
          ),
          e.$.hasPowerUp &&
            R.drawImage(
              l.draw(
                e.$.hasPowerUp.name + ": " + e.$.hasPowerUp.charges,
                5,
                "green"
              ),
              m,
              ce - m - 50
            ),
          R.drawImage(l.draw("score: " + E, 5, "green"), m, m),
          t(),
          i(),
          e.$.hasPowerUp && o(),
          Y && r();
      }
      function n(e) {
        var a = e.w,
          n = e.h,
          r = e.x,
          t = e.y,
          o = L / 2,
          i = e.fill / e.fillMax;
        e.inverse && (i = 1 - i),
          e.bg &&
            ((R.fillStyle = "#000000"),
            R.fillRect(r, t, a, n),
            (R.fillStyle = e.bg),
            R.fillRect(r + o, t + o, a - 2 * o, n - 2 * o)),
          (R.fillStyle = e.fg),
          R.fillRect(r + o - (e.bg ? 0 : 1), t + o, (a - 2 * o) * i, n - 2 * o);
      }
      function r() {
        n({
          w: s,
          h: 20,
          x: ue / 2 - s / 2,
          y: ce - m - 20,
          bg: "#228822",
          fg: "#00ff00",
          fill: Y,
          fillMax: ge,
        });
      }
      function t() {
        n({
          w: s,
          h: 20,
          x: ue / 2 - s / 2,
          y: m,
          bg: "#ff8888",
          fg: "#ff0000",
          fill: e.$.hp,
          fillMax: 1e3,
        }),
          n({
            w: s,
            h: 20,
            x: ue / 2 - s / 2,
            y: m,
            bg: null,
            fg: "#8d8fb4",
            fill: e.$.armor,
            fillMax: 1e3,
          });
      }
      function o() {
        n({
          w: s,
          h: 20,
          x: ue / 2 - s / 2,
          y: m + 60,
          bg: "#000022",
          fg: "#222288",
          fill: e.$.hasPowerUp.charges,
          fillMax: e.$.hasPowerUp.maxcharges,
        });
      }
      function i() {
        var a = e.$.weapon,
          r = a.getReloadProgress(),
          t = "#3b321b",
          o = "#ffd674",
          i = a.getAmmo().reloadAmmo,
          l = Ce[a.name].reloadAmmo || Ce[a.name].ammo;
        r.reloadProgress &&
          ((o = "#ffffff"), (i = r.reloadProgress), (l = r.reloadTime)),
          n({
            w: s,
            h: 20,
            x: ue / 2 - s / 2,
            y: m + 30,
            bg: t,
            fg: o,
            fill: i,
            fillMax: l,
            inverse: r.reloadProgress,
          });
      }
      var l = new Me(),
        m = 100,
        s = 400;
      return { draw: a };
    },
    H = {
      player:
        "iVBORw0KGgoAAAANSUhEUgAAAKoAAAA8BAMAAAAEZzzvAAAAMFBMVEUAAADQ0NAJCAgwMDD1x8f5+fkUFBQPDw8AAABQUFBBQUHsmpooKCgdHR1KSko8PDyN+U9UAAAAAnRSTlMAJqSeSMUAAAKFSURBVFjD7dYxa9tAGAbgq1xESpb+BHGRp2AwPdBWCOU6hHYKaOlkatAvKKjQDt4i6GK6ackQyNJZS3GHDh0DUUNXQX6B6Q/o0E+Ccvfe557iJAQCOtCQl++eVyYGf+IhnqJY3D26k+fvF9vV7BRFn3qc5/mC1yDCrhQ9NcfvtOY1DIFa6uU1mHw8f81qGIKB1gd8ApHVxQWv8SPnP757JyiqtGY1fuTDtz+/+QQeUHkNR8QnejX/RCCrVxWr8SJilwL/hJSA8BqOyH29cmq4mp5JVoMI3gkg6BIWMNUNAq6O3xxFbIKrtadGGsQKJiyoIdmo1turjZ0ELfLTq+pNam3dCNperja2Gr/EGlJPo6f/V3UUjL+QeiBM1Kna7iEV/33j9BTflZDYUmni7Ch67FUp8KuBJiTGCVKFQCS9FNuoQo9TQnCCqUo1bg1+X/uQkKvZXKnMrbHVjCYSuCH31LOIBagmmUo8NWGWKRzoghmoylXnSTZPPDXhSFGAKvXOsMb5vGGrTu0RN1BTehSqiQKjU2eOOpragXJVekag0J9T/LykYkIkqEJlGSL8MEONlOpR6elRDWoMJYYz7ITDTnhPO2FZrnt2Qpjo3wkFLWtfy/VVWZampjUAOYSJ3TY4ucIauBPIVaWX4klZLv8FFRjdbgYT7U5Ynqy7wNTgHSll/Hnya2nthGAIySb2CRFic69RtWxsFQ0K+IQ8lA3B7M3g5x9XEzREt705E/GLCahwB5cKrEFVOMEEthkT2MgjN6j7VDRMYCO8BhDcCTlCO6FP9e9ZiOD2dntVGMSjptuq19sJpa8mvMlO+HbPqFADG98tdkJTc2kvUdTyfNgJh53w2ucvyKGtvhGWdaIAAAAASUVORK5CYII=",
      items:
        "iVBORw0KGgoAAAANSUhEUgAAAGQAAAAkCAMAAABIZG8KAAAAolBMVEUAAAAAAP//zAD/zAAAAP//zAD/zACZZgAAAJkAAADMzMzMMwCZAABmAJnMMzPMZgBmZpn//wD/mQD///9mZv9mmf+ZmZnMmTP/zAAzM8wzMzNmZmZmZjMAM5nMzJn/zGaZmWYzMwAzZsyZMzPMmQCZmcz/ZgDMzP8zZv///2ZmAAAzAADM/////8xmZszMmZkzZmb/zDPMZjOZmQCZMwBmMwBEXvP9AAAAB3RSTlMAgIAWFsAqh6qHCwAAAxRJREFUSMfMld1qwzAMhYPCalwJhB2IIRkNhVJoyxj7e/9Xm7zGVWIVcjtDb8SxP51jV2kWqwWAtrGr1fJGze62GuccPK+DqU3JSEFk2wzvoH1Wf5+gtpF8AuNNtyOGEAit/UvXOXjGOMxOVPqVRj1Q/fqiE0SDgiCsJZ13k40lM0r+RZrGcXBgcihBEIkJCgGZG8al5K3r3ellZ2xkRludNvrhWJsTGw9h5DsCiQgXG7teGvmw7R0mZcynjcLIB5qoFgyWFSJHscWPZ9Hve+nkBO1mVLljV6pqwyuVIgUOjEgYkJoYZsjkhXFxcwZ64GBsDEMCqBHOLyEokCg2iBCZGpohuxeXE5im1WY3VNcLLvW9ryLNiLwe7gjPAokRM0SAFIvw5F7TaVaV2q20p6WhL5ehxZkBJURqGANmCGKIEhc+7j3V/3Y4X/1UlVw+C+onXnyUgUGfzIiZ8RcX07y524tslVUL51sJQCFHVZmHoOMHGUnyYua4lKa0vmKQjvFoH7TFen/3AMuhGVG6Z+E0zGF5ZnXF8ftq01esQrLKTlDiEBBZfqtJkdYQ/qkZGocpPZn7RJRH5LojkW1OfVCuClW2tVrb9eZHSWv/bv12UwatDcMwFOaBDplhIVA7zItTTErpDmPs//+6Kcbdq5VAdtmlCrnIlr88PUcCQNrUPzCGYYDNyWbX0adwo+wx3gaIOS/YI/GqgR3wprTrcMgQwIfw6X0s9YT0vYVgWeI8Q1irBGIbhkLABYRwWsM5H3AAiS5imZldGbJtmDI0Hk1BZWgEsAkF0nZH4E8eaCCoDWswanqBMAlfEBVCPy59f2l8EXxcx+8F7NcqQQn0hXn15BGMoAgL6X+DEHTjNKVxRgSF6FsQnZFi7ha8+yvknNz7+WsH8qIPGuPvDHb6emfIfrsISVZJaZe+jRIySKlafF2wxhOSk0vZEyJVhiJaIWQQXKTceIHtFaYnKeWihFKqDJ5qGbw27nSjEAPhtphznmY90/yMppIMU+6jrhyMFXRrmF+nCLFz8Hgu2wG5HV3b0qeLH6EONE66TaWQAAAAAElFTkSuQmCC",
      drone:
        "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAMAAAC67D+PAAAAclBMVEUAAAA9TFs4R1U/T11HWWszQ1I7Tl05UF9OX3A/Tlt3hJFpeYg/Tls5UF9bank5UF84S1mOanBBTFlKWWmzOUJhcYN4iZxYaHvrQTeXrMOFrrJ2r6SCjplsopRtgJN1go9om4toeIo8tG4+VWjybWWk8iZ/9ooDAAAAEXRSTlMAfEMOxTfh1cX28vLtxcSsXwpGXZsAAABYSURBVAjXFY1FAoAwDMDKBIbT+XD9/xfpcsopAQA2NK1iJLxYzjmlp+Ag/fZhRoII/kYbI45QGudIX6yyXmitJVXa7JjpYdImuGP1RlJME0FTjBai7gQtfk84BeImStuXAAAAAElFTkSuQmCC",
      crate:
        "iVBORw0KGgoAAAANSUhEUgAAABQAAAASCAMAAABsDg4iAAAAOVBMVEUAAABcRRdzRRdzXBdFLgBFLheLcy6iiy4uFwCLcxeLXBdcLhcuLhe5iy5cXBdFRRfQoi65oi7QuUXCATLGAAAAAXRSTlMAQObYZgAAALFJREFUGNM90FGSgzAMA9AK2U5MEyh7/8OuMGkzA5N5lvyRV53e3a+jd10XOAmwfUi2a9akD7aWVyPj8zfvf56v9w7ABmKyzenHcIdw27Dp02T4wBGFMAPkhmBEclRSh5rYuwGI9IWVFDJICm3faCYuJNOF2LVM/afukU/ShDorWTv93qkYVNDOgD8IoBYIPYKnUPXbVvJXX/1CHKmknkQ5ZVlIpp/CLwuTifWqayDkA/84mwZSOgxGJQAAAABJRU5ErkJggg==",
      area:
        "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeBAMAAADJHrORAAAAJFBMVEVbWVVcW1ZfXVldXFdaWFRYV1JgX1tWVVBiYVxUUk5lY19QTknZ5i6cAAABrUlEQVQY0w3MPW/TQAAG4NcfqdfzXWyVzWc3l8Bkn03KaCc2gc1u7USIKU4IHoNwFbqhVIqiTAWpCmwUiQxMiF8Izw948FANHSbIVNgnXixn0BMtL4kPV3rLTmzieH2hqV1yhxAsAVD68oLuri3lsWMFehdjqU5K1Z3rzxXCjjewz1m2STQvKod+HTDwhyjVIqvyYikcugC3mUfk4IfXrrhj9vBoH3TFGTUsThYBCVBqs+6nmTqgIzG7/bbHdHcVh8g9YQ6C4CrD2bzQvwZ0wXMFofodKcLOSxOD1U2VQAjMix0zRTbyJJeO3CBj9dAVzWkh9odtpIIqZKvldCHpM41VKUoamOd+t4yZziorw/0HriROqlA9J6ZpgMaM9yDz8Wz9ul9VmMLmTirPdN/uT1oPg8Pvn03dHHrVmohDg8YF/WVcti96xdYgCaa1Zr16ikKEq/323Rr3oeglfEyYXGruLccpSG1NM+AozrwjKUgSJY4+Mb2Qq5M2Rn+d5Tou/yrrt3/K8oiCvd98ce98R/l/i8/opKTThrWtB2ld+hbGsmVK9NE1qIzfGE/+AVCzYbmsQwHYAAAAAElFTkSuQmCC",
    },
    j = 1,
    L = 8,
    $ = { x: 0, y: 0 },
    _ = { x: 0, y: 0 },
    ee = Math.PI,
    ae = Math.random,
    ne = Math.round,
    re = Math.max,
    te = Math.min,
    oe = Math.floor,
    ie = Math.ceil,
    le = Math.sin,
    me = Math.cos,
    se = Date.now,
    fe = navigator.userAgent.search("Firefox") != -1,
    he = [],
    ge = 150,
    de = ["pistol", "pistols", "machinegun", "shotgun", "rifle"],
    ue = 1200,
    ce = 800,
    Ae = 1e3,
    pe = [];
  (window.onload = function() {
    e();
  }),
    (Number.prototype.mod = function(e) {
      return ((this % e) + e) % e;
    });
  var we,
    ve,
    ye = function() {
      function e(e) {
        function n(e, a) {
          var r = new Image(),
            t = e.pop(),
            o = t.name;
          (r.src = "data:image/png;base64," + H[o]),
            r.addEventListener("load", function() {
              (we[o].sprites = l(this, t.w, t.h)), e.length ? n(e, a) : a();
            });
        }
        var t = [];
        for (var i in we) t.push(we[i]);
        n(t, function() {
          var n, t;
          for (var i in we)
            if ((n = we[i].variations))
              for (var l in n) {
                t = [];
                var m = void 0;
                (we[l] = {
                  w: we[i].w,
                  h: we[i].h,
                  hp: n[l].hp || we[i].hp,
                  weapon: n[l].weapon || we[i].weapon,
                  weaponMod: n[l].weaponMod || we[i].weaponMod,
                  name: l,
                }),
                  n[l].from &&
                    (m = h(we[i].sprites, function(e) {
                      for (var a = e, t = 0; t < n[l].from.length; t++)
                        a = r(a, n[l].from[t], n[l].to[t]);
                      return a;
                    })),
                  n[l].tint &&
                    (m = h(m || we[i].sprites, function(e) {
                      return a(e, n[l].tint);
                    })),
                  (we[l].sprites = m);
              }
          for (var i in we) {
            var s = 150;
            we[i].hitSprites = h(we[i].sprites, function(e) {
              return a(e, I(s, s, s));
            });
            for (var l in we[i].subitems)
              for (var f in we[i].subitems[l]) {
                var g = we[i].subitems[l][f];
                ve.push(g);
                var d = [[we[i].sprites[l][f]]];
                we[g] = { w: we[i].w, h: we[i].h, name: g, sprites: d };
              }
          }
          (we.glitch = {
            name: "glitch",
            w: 20,
            h: 20,
            sprites: [[o(20, 20)]],
          }),
            e();
        });
      }
      return (
        (we = {
          area: { name: "area", w: 30, h: 30 },
          player: {
            name: "player",
            w: 34,
            h: 30,
            hp: 100,
            weapon: "pistol",
            variations: {
              enemy1: {
                weapon: "pistols",
                hp: 40,
                weaponMod: { cooldown: 1e3, randomizer: 0.35 },
                from: [
                  I(29, 29, 29),
                  I(9, 8, 8),
                  I(48, 48, 48),
                  I(20, 20, 20),
                  I(65, 65, 65),
                  I(249, 249, 249),
                  I(40, 40, 40),
                  I(60, 60, 60),
                  I(0, 0, 0),
                  I(245, 199, 199),
                  I(236, 154, 154),
                  I(15, 15, 15),
                ],
                to: [
                  I(236, 154, 154),
                  I(48, 94, 210),
                  I(40, 85, 200),
                  I(0, 0, 0, 0),
                  I(236, 154, 154),
                  I(236, 154, 154),
                  I(236, 154, 154),
                  I(126, 79, 79),
                  I(0, 0, 0, 0),
                  I(245, 199, 199),
                  I(236, 154, 154),
                  I(236, 154, 154),
                ],
              },
              enemy2: {
                weapon: "shotgun",
                hp: 100,
                weaponMod: {
                  randomizer: 0.15,
                  damage: 2,
                  cooldown: 1500,
                  ammo: 4,
                },
                from: [
                  I(48, 48, 48),
                  I(65, 65, 65),
                  I(249, 249, 249),
                  I(0, 0, 0),
                  I(245, 199, 199),
                  I(236, 154, 154),
                  I(15, 15, 15),
                ],
                to: [
                  I(50, 16, 16),
                  I(74, 74, 74),
                  I(44, 44, 44),
                  I(0, 0, 0, 0),
                  I(100, 80, 49),
                  I(77, 59, 30),
                  I(0, 0, 0),
                ],
              },
              enemy3: {
                weapon: "machinegun",
                hp: 75,
                weaponMod: {
                  randomizer: 0.35,
                  damage: 2,
                  cooldown: 200,
                  ammo: 10,
                  speed: 20,
                },
                from: [
                  I(29, 29, 29),
                  I(9, 8, 8),
                  I(48, 48, 48),
                  I(20, 20, 20),
                  I(65, 65, 65),
                  I(249, 249, 249),
                  I(40, 40, 40),
                  I(60, 60, 60),
                  I(0, 0, 0),
                  I(15, 15, 15),
                ],
                to: [
                  I(190, 190, 190),
                  I(220, 220, 220),
                  I(190, 190, 190),
                  I(220, 220, 220),
                  I(74, 74, 74),
                  I(190, 190, 190),
                  I(180, 180, 180),
                  I(180, 180, 180),
                  I(190, 190, 190),
                  I(190, 190, 190),
                ],
              },
            },
          },
          drone: {
            name: "drone",
            w: 10,
            h: 10,
            hp: 10,
            weapon: "pistol",
            weaponMod: { cooldown: 1e3, randomizer: 0.35 },
            variations: {
              drone1: {
                weapon: "rifle",
                weaponMod: {
                  cooldown: 1e3,
                  randomizer: 0.35,
                  ammo: 4,
                  damage: 20,
                },
                hp: 15,
                tint: I(17, 30, 30),
              },
              drone2: {
                weapon: "rifle",
                weaponMod: {
                  cooldown: 1e3,
                  randomizer: 0.5,
                  damage: 30,
                  shots: 3,
                  ammo: 3,
                  damage: 15,
                },
                hp: 30,
                from: [
                  I(242, 109, 101),
                  I(235, 65, 55),
                  I(179, 57, 66),
                  I(142, 106, 112),
                ],
                to: [
                  I(227, 242, 101),
                  I(215, 235, 55),
                  I(179, 176, 57),
                  I(142, 138, 106),
                ],
              },
            },
          },
          crate: {
            name: "crate",
            w: 20,
            h: 18,
            hp: 20,
            variations: {
              crate2: { tint: I(17, 30, 30) },
              crate3: { tint: I(100, 20, 20) },
            },
          },
          items: {
            name: "items",
            w: 20,
            h: 18,
            subitems: [
              ["pistols", "rifle", "shotgun", "machinegun", "explosion"],
              ["speed", "armor", "health", "grenade", "teleport"],
            ],
          },
        }),
        (ve = []),
        { init: e }
      );
    },
    xe = function() {
      function e(e) {
        var a = [];
        for (var n in p)
          e % (Number(n) + 1) == 0 &&
            a.push({ name: p[n], count: oe(re(1, e / 10)) });
        return a;
      }
      function a(e) {
        var a = new ye();
        a.init(function() {
          e(), t(), (u = we.area.w);
        });
      }
      function n() {
        var e = (d(-1, 1) * ue) / 3 + m,
          a = (d(-1, 1) * ce) / 3 + f;
        s({ name: "glitch", x: e, y: a }, [T, W]);
      }
      function r() {
        if (Q[A]) {
          var e = Q[A].enemies;
          O = se() + Q[A].lasting;
          for (var a in e)
            if ("glitch" == e[a].name) n();
            else
              for (var r = 0; r < e[a].count; r++) {
                var t = (d(-1, 1) * ue) / 2 + m,
                  o = (d(-1, 1) * ce) / 2 + f;
                s({ name: e[a].name, x: t, y: o, bot: !0 }, [T, p]);
              }
        }
        A++;
      }
      function t() {
        for (var e = d(4, 7); e > 0; e--) {
          var a = (d(-1, 1) * ue) / 2,
            n = (d(-1, 1) * ce) / 2;
          s({ name: x(w), x: a, y: n }, [T, X]);
        }
      }
      function o(e) {
        (m = e.x), (f = e.y), i(), (h = m), (g = f), se() > O && r(), l();
      }
      function i() {
        if (ae() > X.length / 5 && X.length < 5 && (h != m || g != f)) {
          var e,
            a,
            n = !0;
          h != m && g != f && (n = ae() > 0.5),
            h != m && n
              ? ((e = ((h > m ? -1 : 1) * ue) / 2 + m),
                (a = (d(-1, 1) * ce) / 2 + f))
              : g != f &&
                ((a = ((g > f ? -1 : 1) * ce) / 2 + f),
                (e = (d(-1, 1) * ue) / 2 + m)),
            s({ name: x(w), x: e, y: a }, [T, X]);
        }
      }
      function l() {
        for (var e = u * L, a = -e; a < ue + e; a += e)
          for (var n = -e; n < ce + e; n += e)
            F.$.hp > 0 &&
              R.drawImage(
                we.area.sprites[0][0],
                0,
                0,
                u,
                u,
                a - m.mod(e),
                n - f.mod(e),
                e,
                e
              ),
              F.$.hp <= 0 &&
                ((R.globalAlpha = 0.25),
                R.drawImage(
                  y(c(we.area.sprites[0][0], u, u, e / 2, e / 2)),
                  0,
                  0,
                  e / 2,
                  e / 2,
                  a - m.mod(e),
                  n - f.mod(e),
                  e,
                  e
                ),
                (R.globalAlpha = 1));
      }
      var m,
        f,
        h,
        g,
        u,
        A = -1,
        p = ["enemy1", "glitch", "enemy3", "enemy2"],
        w = [
          "crate",
          "crate",
          "crate",
          "crate2",
          "crate",
          "crate2",
          "crate2",
          "crate3",
        ];
      return (
        (Q = (function() {
          for (var a = [], n = 1; n < 1e3; n++)
            a.push({ enemies: e(n), lasting: 7 * Ae });
          return a;
        })()),
        { init: a, update: o, draw: l }
      );
    },
    Me = function() {
      function e(e, i, l) {
        (i = i || 24), (a = 1), (n = 1);
        var m = [];
        e = e.toUpperCase();
        for (var s = 0; s < e.length; s++) {
          var f = r[e.charAt(s)];
          f &&
            ((a += i * f[0].length), (a += i), (n += i * f.length), m.push(f));
        }
        (a += i), (t.width = a), (t.height = n), (o.fillStyle = l || "black");
        var h = 0;
        for (s = 0; s < m.length; s++) {
          f = m[s];
          for (var g = 0, d = 0, u = 0; u < f.length; u++) {
            for (var c = f[u], A = 0; A < c.length; A++)
              c[A] && o.fillRect(h + A * i, g, i, i);
            (d = re(d, c.length * i)), (g += i);
          }
          h += i + d;
        }
        return t;
      }
      var a,
        n,
        r = (r = {
          A: [[, 1, 0], [1, , 1], [1, , 1], [1, 1, 1], [1, , 1]],
          B: [[1, 1, 0], [1, , 1], [1, 1, 1], [1, , 1], [1, 1]],
          C: [[1, 1, 1], [1], [1], [1], [1, 1, 1]],
          D: [[1, 1, 0], [1, , 1], [1, , 1], [1, , 1], [1, 1]],
          E: [[1, 1, 1], [1], [1, 1, 1], [1], [1, 1, 1]],
          F: [[1, 1, 1], [1], [1, 1], [1], [1]],
          G: [[, 1, 1, 0], [1], [1, , 1, 1], [1, , , 1], [, 1, 1]],
          H: [[1, , 1], [1, , 1], [1, 1, 1], [1, , 1], [1, , 1]],
          I: [[1, 1, 1], [, 1], [, 1], [, 1], [1, 1, 1]],
          J: [[1, 1, 1], [, , 1], [, , 1], [1, , 1], [1, 1, 1]],
          K: [[1, , , 1], [1, , 1], [1, 1], [1, , 1], [1, , , 1]],
          L: [[1, 0, 0], [1], [1], [1], [1, 1, 1]],
          M: [
            [1, 1, 1, 1, 1],
            [1, , 1, , 1],
            [1, , 1, , 1],
            [1, , , , 1],
            [1, , , , 1],
          ],
          N: [[1, , , 1], [1, 1, , 1], [1, , 1, 1], [1, , , 1], [1, , , 1]],
          O: [[1, 1, 1], [1, , 1], [1, , 1], [1, , 1], [1, 1, 1]],
          P: [[1, 1, 1], [1, , 1], [1, 1, 1], [1], [1]],
          Q: [[0, 1, 1, 0], [1, , , 1], [1, , , 1], [1, , 1, 1], [1, 1, 1, 1]],
          R: [[1, 1, 0], [1, , 1], [1, , 1], [1, 1], [1, , 1]],
          S: [[1, 1, 1], [1], [1, 1, 1], [, , 1], [1, 1, 1]],
          T: [[1, 1, 1], [, 1], [, 1], [, 1], [, 1]],
          U: [[1, , 1], [1, , 1], [1, , 1], [1, , 1], [1, 1, 1]],
          V: [[1, , , , 1], [1, , , , 1], [, 1, , 1], [, 1, , 1], [, , 1]],
          W: [
            [1, , , , 1],
            [1, , , , 1],
            [1, , , , 1],
            [1, , 1, , 1],
            [1, 1, 1, 1, 1],
          ],
          X: [[1, , , , 1], [, 1, , 1], [, , 1], [, 1, , 1], [1, , , , 1]],
          Y: [[1, , 1], [1, , 1], [, 1], [, 1], [, 1]],
          Z: [[1, 1, 1, 1, 1], [, , , 1], [, , 1], [, 1], [1, 1, 1, 1, 1]],
          0: [[1, 1, 1], [1, , 1], [1, , 1], [1, , 1], [1, 1, 1]],
          1: [[1], [1], [1], [1], [1]],
          2: [[1, 1, 1], [, , 1], [1, 1, 1], [1, ,], [1, 1, 1]],
          3: [[1, 1, 1], [, , 1], [, 1, 1], [, , 1], [1, 1, 1]],
          4: [[1, , 1, 0], [1, , 1], [1, 1, 1, 1], [, , 1], [, , 1]],
          5: [[1, 1, 1, 0], [1, , ,], [1, 1, 1], [, , 1], [1, 1, 1]],
          6: [[1, 1, 1, 0], [1, , ,], [1, 1, 1], [1, , 1], [1, 1, 1]],
          7: [[1, 1, 1], [, , 1], [, , 1], [, , 1], [, , 1]],
          8: [[1, 1, 1], [1, , 1], [1, 1, 1], [1, , 1], [1, 1, 1]],
          9: [[1, 1, 1], [1, , 1], [1, 1, 1], [, , 1], [1, 1, 1]],
          "-": [[0, 0], [], [1, 1], [], []],
          " ": [[0, 0, 0], [, ,], [, ,], [, ,], [, ,]],
          ":": [[0, 0, 0], [, 1], [, ,], [, ,], [, 1]],
          ".": [[0], [0], [0], [0], [1]],
          "!": [[, 1], [, 1], [, 1], [,], [, 1]],
          ">": [[, 1, 0, 0], [, , 1], [, , , 1], [, , 1], [, 1]],
          "<": [[, , , 1], [, , 1], [, 1, ,], [, , 1], [, , , 1]],
        }),
        t = document.createElement("canvas"),
        o = t.getContext("2d");
      return { draw: e };
    },
    Ie = (function() {
      var e = {};
      return (
        (e.red = w(10, 200, 200, "red")),
        (e.lightgreen = w(10, 200, 200, "lightgreen")),
        e
      );
    })(),
    Pe = function(e, a, n) {
      function r() {
        return d(0, 3);
      }
      function t() {
        g--,
          u--,
          pe[32] && ((h = f.length - 1), (i = f[h].length), (s = !0)),
          !f[h + 1] && u <= 0 && g <= 0 && i > f[h].length && (m = !0),
          g <= 0 && (i++, (g = r())),
          c && u <= 0 && f[h + 1] && ((i = 0), (g = 40), h++, (c = !1)),
          (l = le(se() / 100) > 0),
          (A = f[h].substring(0, i)),
          i > f[h].length && !c && ((u = 50), (c = !0)),
          o();
      }
      function o() {
        (R.fillStyle = "black"), R.fillRect(0, 0, ue, ce);
        var e = p.draw(A, 5, "lightgreen");
        R.drawImage(e, 100, 100),
          (R.fillStyle = "lightgreen"),
          l && R.fillRect(e.width + 100, 98, 20, 28);
        var r = p.draw(a, 5, "lightgreen");
        if ((R.drawImage(r, ue / 2 - r.width / 2, ce - 150), n)) {
          var t = localStorage.getItem("stm_highscore") || 0,
            o = "Your score: " + E + " - highscore: " + t;
          E > t && (o = "New highscore: " + E);
          var i = p.draw(o, 5, "lightgreen");
          R.drawImage(i, ue / 2 - i.width / 2, ce - 200);
        }
      }
      var i = 0;
      a = "Press <Space> " + a;
      var l,
        m,
        s,
        f = e,
        h = 0,
        g = r(),
        u = 0,
        c = !1,
        A = "",
        p = new Me();
      return {
        update: t,
        finished: function() {
          return m;
        },
        realFinished: function() {
          return s;
        },
      };
    },
    Ce = {
      pistol: {
        name: "pistol",
        ammo: null,
        reloadAmmo: 10,
        cooldown: 600,
        shots: 1,
        speed: 20,
        damage: 10,
      },
      pistols: {
        name: "pistols",
        ammo: 48,
        reloadAmmo: 14,
        cooldown: 300,
        shots: 2,
        speed: 20,
        damage: 10,
      },
      machinegun: {
        name: "machinegun",
        ammo: 90,
        reloadAmmo: 30,
        cooldown: 100,
        shots: 1,
        randomizer: 0.005,
        speed: 40,
        damage: 8,
      },
      shotgun: {
        name: "shotgun",
        ammo: 16,
        reloadAmmo: 8,
        cooldown: 800,
        shots: 10,
        randomizer: 0.035,
        speed: 30,
        damage: 5,
        startRandomizer: 50,
      },
      rifle: {
        name: "rifle",
        ammo: 14,
        reloadAmmo: 7,
        cooldown: 800,
        shots: 1,
        speed: 40,
        damage: 100,
        shootThrough: !0,
      },
    },
    be = function(e, a, n, r) {
      function t() {
        l || (l = 1);
      }
      e = P(e);
      for (var o in n) e[o] = n[o];
      e.ammo || (e.ammo = Number.POSITIVE_INFINITY);
      var i,
        l,
        m = e.ammo,
        f = e.cooldown,
        h = e.shots,
        g = e.name,
        u = e.randomizer || 0,
        c = e.speed,
        p = e.damage,
        w = e.startRandomizer || 0,
        v = e.shootThrough,
        y = 0,
        x = e.reloadAmmo || m,
        M = x,
        I = (x * p * h) / (r ? 12 : 0.2);
      return {
        name: g,
        reload: function() {
          l && ((y = I - ++l * A(r, 1)), y <= 0 && ((x = M), (l = 0), (y = 0)));
        },
        startReloading: t,
        getReloadProgress: function() {
          return { reloadProgress: y, reloadTime: I };
        },
        getAmmo: function() {
          return { ammo: m, reloadAmmo: x };
        },
        addAmmo: function(e) {
          m += e;
        },
        fire: function(e, n, o) {
          if (!l) {
            var f = 0;
            ("pistols" == g || ("shotgun" == g && !r)) && (f = d(-u, u));
            for (var A = 0; A < h; A++) {
              var y = 0;
              y += "pistols" == g ? 0.035 * (0 == A ? 1 : -1) : d(-u, u);
              var M = d(-w, w) + 80;
              (o = o - y - f),
                s(
                  {
                    name: "bullet",
                    x: e,
                    y: n,
                    id: a,
                    speed: c,
                    start: M,
                    damage: p,
                    shift: c,
                    shootThrough: v,
                    vx: me(o),
                    vy: le(o),
                  },
                  [D]
                );
            }
            m--, x--, x <= 0 && t(), (i = se());
          }
        },
        checkCooldown: function() {
          return i + f / A(r, 1) > se();
        },
      };
    };
})();
//# sourceMappingURL=uglify.js.map
