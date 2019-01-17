(window.webpackJsonp = window.webpackJsonp || []).push([
  [6],
  {
    154: function(e, a, t) {
      "use strict";
      t.r(a);
      var l = t(7),
        c = t.n(l),
        n = t(157),
        r = t.n(n),
        m = t(175),
        s = t.n(m),
        i = t(0),
        o = t.n(i),
        d = t(200),
        E = t(179),
        N = t(178),
        u = (t(302), t(303)),
        v = t(201),
        h = t(304);
      t(305);
      v.b.add(h.a, h.b, h.c, h.d, h.e, h.f, h.g, h.h, h.i, h.j, h.k);
      var p = function(e) {
        var a = e.name;
        return o.a.createElement(
          "div",
          { className: "icon", title: a },
          o.a.createElement(u.a, { icon: ["fab", a] })
        );
      };
      t.d(a, "query", function() {
        return f;
      });
      var g = (function(e) {
          function a() {
            return e.apply(this, arguments) || this;
          }
          return (
            c()(a, e),
            (a.prototype.render = function() {
              var e = this.props,
                a = e.location,
                t = e.data,
                l = r()(t, "profile.childImageSharp.fixed"),
                c = r()(t, "work1.childImageSharp.sizes"),
                n = r()(t, "work2.childImageSharp.sizes"),
                m = r()(t, "back1.childImageSharp.sizes"),
                i = r()(t, "back2.childImageSharp.sizes");
              return o.a.createElement(
                E.a,
                { location: a },
                o.a.createElement(N.a, {
                  site: d.siteMetadata,
                  title: "Profile"
                }),
                o.a.createElement(
                  "div",
                  null,
                  o.a.createElement(
                    "section",
                    { className: "text-center" },
                    o.a.createElement(
                      "div",
                      { className: "container" },
                      o.a.createElement(s.a, {
                        fixed: l,
                        className: "rounded-circle"
                      }),
                      o.a.createElement("h1", null, "jaxx2104"),
                      o.a.createElement(
                        "p",
                        { className: "lead text-muted" },
                        "Front-end engineer."
                      ),
                      o.a.createElement(
                        "div",
                        null,
                        o.a.createElement(
                          "a",
                          {
                            ref: "twButton",
                            href: "https://twitter.com/jaxx2104",
                            className: "twitter-follow-button",
                            "data-show-count": "false"
                          },
                          "Follow @jaxx2104"
                        )
                      )
                    )
                  ),
                  o.a.createElement(
                    "section",
                    { className: "bg-primary text-white text-center" },
                    o.a.createElement(
                      "div",
                      { className: "container" },
                      o.a.createElement(
                        "div",
                        { className: "row" },
                        o.a.createElement(
                          "div",
                          { className: "col-lg-12" },
                          o.a.createElement(
                            "h2",
                            { className: "section-heading" },
                            "SKILL"
                          ),
                          o.a.createElement("hr", { className: "border-white" })
                        )
                      )
                    ),
                    o.a.createElement(
                      "div",
                      { className: "container" },
                      o.a.createElement(
                        "div",
                        { className: "row justify-content-md-center" },
                        o.a.createElement(
                          "div",
                          { className: "col-lg-3 col-6" },
                          o.a.createElement(p, { title: "HTML", name: "html5" })
                        ),
                        o.a.createElement(
                          "div",
                          { className: "col-lg-3 col-6" },
                          o.a.createElement(p, {
                            title: "JavaScript",
                            name: "js"
                          })
                        ),
                        o.a.createElement(
                          "div",
                          { className: "col-lg-3 col-6" },
                          o.a.createElement(p, {
                            title: "React.js",
                            name: "react"
                          })
                        ),
                        o.a.createElement(
                          "div",
                          { className: "col-lg-3 col-6" },
                          o.a.createElement(p, {
                            title: "Vue.js",
                            name: "vuejs"
                          })
                        )
                      ),
                      o.a.createElement(
                        "div",
                        { className: "row justify-content-md-center" },
                        o.a.createElement(
                          "div",
                          { className: "col-lg-3 col-6" },
                          o.a.createElement(p, {
                            title: "Node.js",
                            name: "node"
                          })
                        ),
                        o.a.createElement(
                          "div",
                          { className: "col-lg-3 col-6 " },
                          o.a.createElement(p, { title: "PHP", name: "php" })
                        ),
                        o.a.createElement(
                          "div",
                          { className: "col-lg-3 col-6 " },
                          o.a.createElement(p, { title: "AWS", name: "aws" })
                        ),
                        o.a.createElement(
                          "div",
                          { className: "col-lg-3 col-6 " },
                          o.a.createElement(p, {
                            title: "Swift",
                            name: "apple"
                          })
                        )
                      )
                    )
                  ),
                  o.a.createElement(
                    "section",
                    { id: "features", className: "text-center jumboimage" },
                    o.a.createElement(s.a, {
                      sizes: m,
                      className: "cover-image"
                    }),
                    o.a.createElement(
                      "div",
                      { className: "container" },
                      o.a.createElement(
                        "div",
                        { className: "row cover-over" },
                        o.a.createElement(
                          "div",
                          { className: "col-md-12 text-left" },
                          o.a.createElement(
                            "h2",
                            { className: "section-heading" },
                            "Features"
                          ),
                          o.a.createElement(
                            "p",
                            null,
                            "I'm a front-end engineer in Japan 🗼",
                            o.a.createElement("br", null),
                            "Used to be a designer of furniture and architecture.",
                            o.a.createElement("br", null)
                          ),
                          o.a.createElement(
                            "li",
                            null,
                            "2013 ~ 2017: J-CAST News"
                          ),
                          o.a.createElement(
                            "li",
                            null,
                            "2017 ~ : Recruit Lifestyle"
                          )
                        )
                      )
                    )
                  ),
                  o.a.createElement(
                    "section",
                    {
                      className:
                        "bg-primary text-white text-center color-inverse",
                      id: "concept"
                    },
                    o.a.createElement(
                      "div",
                      { className: "container" },
                      o.a.createElement(
                        "div",
                        { className: "row" },
                        o.a.createElement(
                          "div",
                          { className: "col-lg-12" },
                          o.a.createElement(
                            "h2",
                            { className: "section-heading" },
                            "WORKS"
                          ),
                          o.a.createElement("hr", { className: "border-white" })
                        )
                      )
                    ),
                    o.a.createElement(
                      "div",
                      { className: "container" },
                      o.a.createElement(
                        "div",
                        { className: "row" },
                        o.a.createElement(
                          "div",
                          {
                            className: "col-md-6 slide-left",
                            "data-emergence": "hidden"
                          },
                          o.a.createElement(s.a, { sizes: c }),
                          o.a.createElement("p", null, "Yomu")
                        ),
                        o.a.createElement(
                          "div",
                          {
                            className: "col-md-6 slide-right",
                            "data-emergence": "hidden"
                          },
                          o.a.createElement(s.a, { sizes: n }),
                          o.a.createElement("p", null, "Detector")
                        )
                      )
                    )
                  ),
                  o.a.createElement(
                    "section",
                    { id: "repos" },
                    o.a.createElement(
                      "div",
                      { className: "container" },
                      o.a.createElement(
                        "div",
                        { className: "row align-items-center" },
                        o.a.createElement(
                          "div",
                          { className: "col-md-12 text-left" },
                          o.a.createElement(
                            "h2",
                            { className: "section-heading" },
                            "Repositories"
                          ),
                          o.a.createElement(
                            "p",
                            null,
                            "リポジトリは",
                            o.a.createElement(
                              "a",
                              { href: "https://github.com/jaxx2104/" },
                              "こちら"
                            )
                          )
                        )
                      )
                    )
                  ),
                  o.a.createElement(
                    "section",
                    { id: "features", className: "jumboimage" },
                    o.a.createElement(s.a, {
                      sizes: i,
                      className: "cover-image"
                    }),
                    o.a.createElement(
                      "div",
                      { className: "container" },
                      o.a.createElement(
                        "div",
                        { className: "row cover-over" },
                        o.a.createElement(
                          "div",
                          { className: "col-md-12 text-left" },
                          o.a.createElement(
                            "h2",
                            { className: "section-heading" },
                            "Degree Works"
                          ),
                          o.a.createElement(
                            "p",
                            null,
                            "過去の制作は",
                            o.a.createElement(
                              "a",
                              {
                                className: "text-white",
                                href: "https://old.jaxx2104.info/"
                              },
                              "こちら"
                            )
                          )
                        )
                      )
                    )
                  )
                )
              );
            }),
            a
          );
        })(o.a.Component),
        f = ((a.default = g), "731777526");
    },
    305: function(e, a, t) {}
  }
]);
//# sourceMappingURL=component---src-pages-profile-js-1484925b04a5c8d04858.js.map
