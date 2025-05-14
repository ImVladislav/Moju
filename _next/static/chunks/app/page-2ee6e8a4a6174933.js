(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [931],
  {
    88350: function (A, e, t) {
      Promise.resolve().then(t.bind(t, 24522));
    },
    24522: function (A, e, t) {
      "use strict";
      t.r(e),
        t.d(e, {
          default: function () {
            return P;
          },
        });
      var a = t(57437),
        s = t(44108),
        l = t(2265),
        i = t(51765),
        c = t(98609),
        n = t(47168),
        r = t(42421),
        o = t(49354);
      let d = n.fC,
        g = l.forwardRef((A, e) => {
          let { className: t, ...s } = A;
          return (0, a.jsx)(n.ck, {
            ref: e,
            className: (0, o.cn)("rounded-md bg-foreground text-background", t),
            ...s,
          });
        });
      g.displayName = "AccordionItem";
      let h = l.forwardRef((A, e) => {
        let { className: t, children: s, ...l } = A;
        return (0, a.jsx)(n.h4, {
          className: "flex",
          children: (0, a.jsxs)(n.xz, {
            ref: e,
            className: (0, o.cn)(
              "flex flex-1 items-center justify-between font-luckiest-guy font-medium leading-none transition-all ~text-lg/[2rem] ~px-3/6 ~py-2.5/5 hover:text-accent [&[data-state=open]>svg]:rotate-180 [&[data-state=open]]:text-accent",
              t
            ),
            ...l,
            children: [
              s,
              (0, a.jsx)(r.Z, {
                className:
                  "size-3/8 shrink-0 transition-transform duration-200",
              }),
            ],
          }),
        });
      });
      h.displayName = n.xz.displayName;
      let m = l.forwardRef((A, e) => {
        let { className: t, children: s, ...l } = A;
        return (0, a.jsx)(n.VY, {
          ref: e,
          className:
            "overflow-hidden leading-[1.2] transition-all ~text-sm/2xl ~px-3/6 data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
          ...l,
          children: (0, a.jsx)("div", {
            className: (0, o.cn)("pt-0 ~pb-2.5/5", t),
            children: s,
          }),
        });
      });
      m.displayName = n.VY.displayName;
      let x = [
          {
            title: "Who & wtf is momo?",
            content:
              "MOMO is a monkey with a big ass nose. Stuck in an endless cycle of losing his Momo, he needs your help to get it back. You in?",
          },
          {
            title: "What chain is $momo on?",
            content: "MOMO is living on the Solana Network.",
          },
          {
            title: "How do I buy $momo?",
            content: "Follow the steps above in the how to buy section.",
          },
          {
            title: "Why should I get $momo?",
            content:
              "We all have moments when we are down in life, those moments where we lose our Momo. Together, strong, we can now get that MOMO back!",
          },
        ],
        u = () =>
          (0, a.jsx)("section", {
            className: "bg-black",
            id: "faq",
            children: (0, a.jsxs)(i.W, {
              className: "space-y-8",
              children: [
                (0, a.jsx)(c.D, { className: "text-center", children: "FAQ" }),
                (0, a.jsx)(d, {
                  type: "single",
                  collapsible: !0,
                  className: "space-y-3",
                  children: x.map((A) =>
                    (0, a.jsxs)(
                      g,
                      {
                        value: A.title,
                        children: [
                          (0, a.jsx)(h, { children: A.title }),
                          (0, a.jsx)(m, { children: A.content }),
                        ],
                      },
                      A.title
                    )
                  ),
                }),
              ],
            }),
          });
      var p = t(17442),
        b = t(66648),
        f = {
          src: "/_next/static/media/mojo-home.1427f260.jpg",
          height: 1880,
          width: 3840,
          blurDataURL:
            "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAEAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAT/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/aAAwDAQACEAMQAAABjFB//8QAFhABAQEAAAAAAAAAAAAAAAAAAQID/9oACAEBAAEFAje1/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwF//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwF//8QAFxAAAwEAAAAAAAAAAAAAAAAAABESIf/aAAgBAQAGPwKXh//EABcQAAMBAAAAAAAAAAAAAAAAAAABEWH/2gAIAQEAAT8hpDYrP//aAAwDAQACAAMAAAAQ8//EABURAQEAAAAAAAAAAAAAAAAAAAAB/9oACAEDAQE/EK//xAAWEQEBAQAAAAAAAAAAAAAAAAABABH/2gAIAQIBAT8QQwv/xAAYEAEBAAMAAAAAAAAAAAAAAAABEQBBof/aAAgBAQABPxCzYowFXdt7n//Z",
          blurWidth: 8,
          blurHeight: 4,
        },
        w = {
          src: "/_next/static/media/mojo-sticker.fc15011e.png",
          height: 1592,
          width: 1592,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAXVBMVEVMaXHkwqQ0VI8AMYnHspLEuKL14LgAKnQALo6vlXMMM3oAIH3Bq45EQlvezbS8fWNttrbnvKzJu7u5jVundT6qdD0ALoD63rr/57xedqEXOHC5fGP8w6+5m4jYvKk2HTgVAAAAFnRSTlMA2OV8ebu8/f0zT95Gll2kB8MTXD1gWP5ynQAAAAlwSFlzAAALEwAACxMBAJqcGAAAAEBJREFUeJwVxscRgDAABLE1OJLjmdx/mYxfEgDbvqbiYr5soLPT/GQPNg/j/TpIh++vEEpcqyBozipKEeooKegHYrQC+QoWErIAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        },
        j = {
          src: "/_next/static/media/rocks.8ffb4f42.png",
          height: 272,
          width: 3840,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAMAAADU3h9xAAAADFBMVEURGRYQFhYRGRYQGBb1pOw7AAAABHRSTlOYa7F9XI8ZaAAAAAlwSFlzAAALEwAACxMBAJqcGAAAABFJREFUeJxjYGJgZGRmYGACAAAyAAqxXNAZAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 1,
        },
        E = t(33150);
      let B = () =>
        (0, a.jsxs)("section", {
          className:
            "relative aspect-[2/1] object-center portrait:mobile:aspect-[1/1.5]",
          children: [
            (0, a.jsx)(E.h, {}),
            (0, a.jsx)(b.default, {
              src: j,
              alt: "",
              sizes: "(min-width: 640px) 100vw, 25vw",
              className:
                "absolute inset-x-0 bottom-0 z-20 w-full object-contain",
            }),
            (0, a.jsx)(b.default, {
              src: f,
              alt: "",
              priority: !0,
              placeholder: "blur",
              fill: !0,
              sizes: "(min-width: 640px) 100vw, 300vw",
              className: "object-cover",
            }),
            (0, a.jsx)(b.default, {
              src: w,
              alt: "",
              sizes: "(min-width: 640px) 100vw, 50vw",
              className:
                "absolute bottom-0 right-0 z-10 h-[85%] object-contain object-right-bottom portrait:mobile:max-w-[80%]",
            }),
          ],
        });
      var N = {
          src: "/_next/static/media/howtobuy-1.e7ecc0b8.png",
          height: 880,
          width: 1400,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAVFBMVEVERlFshot1bnPwtZccJT6fmohnVFiAe4Rsa3MoN1EXDTQaLk47OlgUETcjQDpaWHM2Sk0VL1QoTldyfY8aOVBMTkk+Y3gILm0kTZqZnqtadYDTzseEBee5AAAACXBIWXMAAAsTAAALEwEAmpwYAAAANUlEQVR4nGPg4mVgYxNl4WRgEWBnZGRmFWLg42AXk2KWFGFgYGVnYpKWEGTg4edg4BQW5wYAIfwBr0Mm6+0AAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 5,
        },
        y = {
          src: "/_next/static/media/howtobuy-2.c79c7ceb.png",
          height: 880,
          width: 1400,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAP1BMVEUTLCzrzqsLGC3qv50WPjcILymSe28hND4NNC4TJS84REBsaWGnm4VfX13osqtYY1V7eXHUrZDTupeZiHf637mzIbfcAAAACXBIWXMAAAsTAAALEwEAmpwYAAAALklEQVR4nAXBhQEAIAzAsA7bcP3/VhKyFucsQ1xyawhgyYufBrG9PaqB9tNSUf0ZdAE/uds9XwAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 5,
        },
        v = {
          src: "/_next/static/media/howtobuy-3.a967a043.png",
          height: 880,
          width: 1400,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAUVBMVEVKLydzWTiYiXLgvpySf21rdG9AKSM6HxikpZ1KOjKilHiMjod2Y1puKhfIzsNkSDczFhCAZkxXXFBKYFYvQ0NXOTJ4gE0AGR1sc1Z8fm6BjHXyh0/mAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMUlEQVR4nAXBhQEAIAwDsALD3eX/Q0lgpMX0zyNRtOquAxMwthQcuqB1Jxy0yqxyYh8oUwGiF30XKgAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 5,
        },
        M = {
          src: "/_next/static/media/howtobuy-4.82f6a6b4.png",
          height: 880,
          width: 1400,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAATlBMVEWgn5mtpanK0ce5oZyFe3SAc3peUVwuGjewr65/cmbe29dGIVGoxLfTztAdLSm+t7FfaWabjoPYqp1TZmXqvp46QDmVko68vLphPUh9Z3m+HXtqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAM0lEQVR4nAXBBwKAIAwAsWOWIgrKUP//URKSsTlJgDcX6z4DnKxn/J67utbjEVCv8xKJGx9fAYRgGsf1AAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 5,
        },
        R = t(60019),
        C = t(49582),
        O = t(71204),
        T = {
          src: "/_next/static/media/path.197eee0c.svg",
          height: 509,
          width: 268,
          blurWidth: 0,
          blurHeight: 0,
        };
      C.ZP.registerPlugin(R.V, O.i);
      let Q = () => {
        let A = (0, l.useRef)(null),
          e = (0, l.useRef)(null);
        return (
          (0, R.V)(() => {
            C.ZP.to(e.current, {
              scrollTrigger: {
                pin: !0,
                trigger: e.current,
                endTrigger: A.current,
                start: "center center",
                end: "bottom 60%",
                toggleActions: "play none none reverse",
              },
            });
            let t = Array.from(document.querySelectorAll(".buy-step")),
              a = document.querySelectorAll(".animated-path");
            t.slice(0, -1).forEach((A, e) => {
              C.ZP.from(a.item(e), {
                clipPath: "inset(0 0 100% 0)",
                scrollTrigger: {
                  trigger: A,
                  endTrigger: t[e + 1],
                  start: "top center",
                  end: "top center",
                  scrub: !0,
                  toggleActions: "play none none reverse",
                },
              });
            }),
              t.slice(1).forEach((A, e) => {
                C.ZP.to(".image-".concat(e), {
                  scale: 1.3,
                  opacity: 0,
                  ease: "power1.out",
                  immediateRender: !1,
                  scrollTrigger: {
                    trigger: A,
                    start: "top 60%",
                    toggleActions: "play none none reverse",
                  },
                }),
                  C.ZP.to(".image-".concat(e + 1), {
                    opacity: 1,
                    immediateRender: !1,
                    scrollTrigger: {
                      trigger: A,
                      start: "top 60%",
                      toggleActions: "play none none reverse",
                    },
                  });
              });
          }),
          (0, a.jsx)("section", {
            className: "bg-black py-[6vw]",
            id: "how-to-buy",
            children: (0, a.jsxs)(i.W, {
              className: "space-y-10 ~mb-16/32",
              children: [
                (0, a.jsx)("div", {
                  className: "md:grid md:grid-cols-2",
                  children: (0, a.jsxs)(c.D, {
                    className: "md:col-start-2",
                    children: ["HOW", (0, a.jsx)("br", {}), "TO BUY"],
                  }),
                }),
                (0, a.jsxs)("div", {
                  className: "relative md:grid md:grid-cols-2 md:gap-10",
                  children: [
                    (0, a.jsxs)("div", {
                      ref: e,
                      className: "relative hidden aspect-video w-full md:block",
                      children: [
                        (0, a.jsx)(b.default, {
                          src: N,
                          alt: "",
                          className:
                            "image-0 absolute inset-0 h-full w-full object-contain",
                        }),
                        (0, a.jsx)(b.default, {
                          src: y,
                          alt: "",
                          className:
                            "image-1 absolute inset-0 h-full w-full object-contain opacity-0",
                        }),
                        (0, a.jsx)(b.default, {
                          src: v,
                          alt: "",
                          className:
                            "image-2 absolute inset-0 h-full w-full object-contain opacity-0",
                        }),
                        (0, a.jsx)(b.default, {
                          src: M,
                          alt: "",
                          className:
                            "image-3 absolute inset-0 h-full w-full object-contain opacity-0",
                        }),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      ref: A,
                      className: "space-y-8 md:space-y-0 md:~pt-12/32",
                      children: [
                        (0, a.jsxs)("div", {
                          className: "flex flex-col gap-10",
                          children: [
                            (0, a.jsx)(b.default, {
                              src: N,
                              alt: "",
                              className: "md:hidden",
                            }),
                            (0, a.jsxs)("div", {
                              className:
                                "relative flex h-[590px] items-start gap-4",
                              children: [
                                (0, a.jsx)("span", {
                                  className:
                                    "rounded-lg bg-accent px-2.5 py-1.5 font-luckiest-guy !leading-[0.9] ~text-base/3xl",
                                  children: "01",
                                }),
                                (0, a.jsx)(b.default, {
                                  src: T,
                                  alt: "",
                                  className:
                                    "animated-path absolute top-16 h-[500px] w-auto object-contain object-top",
                                }),
                                (0, a.jsxs)("div", {
                                  className: "buy-step ~space-y-3/7",
                                  children: [
                                    (0, a.jsx)("h2", {
                                      className:
                                        "font-luckiest-guy !leading-[1] text-accent ~text-2xl/5xl",
                                      children: "Download Phantom",
                                    }),
                                    (0, a.jsx)("p", {
                                      className:
                                        "~text-lg/2xl ~leading-[1.35rem]/[1.8rem]",
                                      children:
                                        "First, download and install the Phantom wallet. You can find it on the App Store for your mobile device or as a browser extension for your desktop.",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, a.jsxs)("div", {
                          className: "flex flex-col gap-10",
                          children: [
                            (0, a.jsx)(b.default, {
                              src: y,
                              alt: "",
                              className: "md:hidden",
                            }),
                            (0, a.jsxs)("div", {
                              className:
                                "relative flex h-[590px] items-start gap-4",
                              children: [
                                (0, a.jsx)("span", {
                                  className:
                                    "rounded-lg bg-accent px-2.5 py-1.5 font-luckiest-guy !leading-[0.9] ~text-base/3xl",
                                  children: "02",
                                }),
                                (0, a.jsx)(b.default, {
                                  src: T,
                                  alt: "",
                                  className:
                                    "animated-path absolute top-16 h-[500px] w-auto object-contain object-top",
                                }),
                                (0, a.jsxs)("div", {
                                  className: "buy-step ~space-y-3/7",
                                  children: [
                                    (0, a.jsx)("h2", {
                                      className:
                                        "font-luckiest-guy !leading-[1] text-accent ~text-2xl/5xl",
                                      children: "Get SOL on the Solana Network",
                                    }),
                                    (0, a.jsx)("p", {
                                      className:
                                        "~text-lg/2xl ~leading-[1.35rem]/[1.8rem]",
                                      children:
                                        "Make sure you have SOL in your Phantom wallet. You can purchase SOL directly through Phantom or transfer it from another wallet or exchange. Be sure to leave some extra SOL to cover gas fees for transactions.",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, a.jsxs)("div", {
                          className: "flex flex-col gap-10",
                          children: [
                            (0, a.jsx)(b.default, {
                              src: v,
                              alt: "",
                              className: "md:hidden",
                            }),
                            (0, a.jsxs)("div", {
                              className:
                                "relative flex h-[590px] items-start gap-4",
                              children: [
                                (0, a.jsx)("span", {
                                  className:
                                    "rounded-lg bg-accent px-2.5 py-1.5 font-luckiest-guy !leading-[0.9] ~text-base/3xl",
                                  children: "03",
                                }),
                                (0, a.jsx)(b.default, {
                                  src: T,
                                  alt: "",
                                  className:
                                    "animated-path absolute top-16 h-[500px] w-auto object-contain object-top",
                                }),
                                (0, a.jsxs)("div", {
                                  className: "buy-step ~space-y-3/7",
                                  children: [
                                    (0, a.jsx)("h2", {
                                      className:
                                        "font-luckiest-guy !leading-[1] text-accent ~text-2xl/5xl",
                                      children: "Buy $MOMO",
                                    }),
                                    (0, a.jsx)("p", {
                                      className:
                                        "~text-lg/2xl ~leading-[1.35rem]/[1.8rem]",
                                      children:
                                        "Head over to Raydium, the leading decentralized exchange. Copy the $MOMO contract address from this website and paste it into the search bar on Raydium. Swap your SOL for $MOMO.",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, a.jsxs)("div", {
                          className: "flex flex-col gap-10",
                          children: [
                            (0, a.jsx)(b.default, {
                              src: M,
                              alt: "",
                              className: "md:hidden",
                            }),
                            (0, a.jsxs)("div", {
                              className: "relative flex items-start gap-4",
                              children: [
                                (0, a.jsx)("span", {
                                  className:
                                    "rounded-lg bg-accent px-2.5 py-1.5 font-luckiest-guy !leading-[0.9] ~text-base/3xl",
                                  children: "04",
                                }),
                                (0, a.jsxs)("div", {
                                  className: "buy-step ~space-y-3/7",
                                  children: [
                                    (0, a.jsx)("h2", {
                                      className:
                                        "font-luckiest-guy !leading-[1] text-accent ~text-2xl/5xl",
                                      children: "View Your $MOMO",
                                    }),
                                    (0, a.jsx)("p", {
                                      className:
                                        "~text-lg/2xl ~leading-[1.35rem]/[1.8rem]",
                                      children:
                                        "Finally, open your wallet and watch the explosive growth of $MOMO tokens.",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          })
        );
      };
      var k = {
          src: "/_next/static/media/copy-icon.bc588790.svg",
          height: 20,
          width: 20,
          blurWidth: 0,
          blurHeight: 0,
        },
        U = {
          src: "/_next/static/media/mojonomics-bottom.04cb79c0.png",
          height: 796,
          width: 3840,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAAElBMVEURFhVMaXEPFhUSGRcAAAAQFhaFp6NDAAAABnRSTlNIAFiLAqcU8Ah1AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAFUlEQVR4nGNghAAWBmYmBgYGBiZWAADLABjpANHWAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 2,
        },
        V = {
          src: "/_next/static/media/mojonomics-top.cf37de6d.png",
          height: 1600,
          width: 3840,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAElBMVEVMaXEOFxUUFBQTExMVFRUQFBTYk3jbAAAABnRSTlMAJxgNDD+a4XqXAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGElEQVR4nGNgZWRkZGJmYmJgZoACFigDAAHxABk5hogMAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 3,
        },
        F = {
          src: "/_next/static/media/mojonomics-w-text.2ecfaa41.png",
          height: 1434,
          width: 2478,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAS1BMVEVYERsAAABHZup5KJwTgZNjTjdXTz1MaXFsbXTDLLLfLW2HXkFbYeU1t2p7e0iqdVhYQybxNHxaTzNTPCvRmoPMtJf2zayEblWuoZKl4QbGAAAAFHRSTlMJARksSMaRABAzOD5RKzzfhE7drpGkijwAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAxSURBVHicBcGHAYAgAASxU8qDoFTF/SclQaG6p11C/n8dwD3m12MUSmX5bOAQ1p6BDSTFAXAglBtAAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 5,
        },
        X = t(33628),
        S = t(80042),
        D = t.n(S),
        W = t(27776);
      let Y = () =>
        (0, a.jsxs)("section", {
          className: "relative bg-white py-[8.7vw] text-black",
          id: "tokenomics",
          children: [
            (0, a.jsxs)(i.W, {
              className: "relative z-10",
              children: [
                (0, a.jsx)(c.D, { children: "MOMONOMICS" }),
                (0, a.jsxs)("div", {
                  className:
                    "relative inline-flex flex-col gap-1 rounded-[8px] bg-black text-accent ~mt-4/8 ~px-4/8 ~py-2/5",
                  children: [
                    (0, a.jsx)("span", {
                      className: "~text-xs/xl",
                      children: "Total Supply:",
                    }),
                    (0, a.jsx)("span", {
                      className:
                        "font-luckiest-guy !leading-[0.8] ~text-4xl/title",
                      children: "100M",
                    }),
                  ],
                }),
                (0, a.jsx)("div", {
                  className:
                    "relative sm:m-auto sm:max-h-[80%] sm:max-w-[80%] sm:~-top-16/24",
                  children: (0, a.jsx)(b.default, {
                    src: F,
                    alt: "",
                    className: "object-contain",
                  }),
                }),
                X.v.contract.tokenAddress &&
                  (0, a.jsxs)("ul", {
                    className:
                      "relative mb-12 mt-8 flex w-fit flex-col gap-2 rounded-lg border border-dashed border-[#101615] ~px-3/6 ~py-2.5/5 sm:mb-0 sm:mt-8 sm:~-top-16/24 lg:~-top-24/32",
                    children: [
                      (0, a.jsx)("li", {
                        children: (0, a.jsx)("h2", {
                          className:
                            "w-fit rounded-lg bg-[#101615] px-2.5 font-medium text-white ~text-xs/xl",
                          children: "Contract Address",
                        }),
                      }),
                      (0, a.jsx)("li", {
                        className: "text-xs font-medium sm:~text-sm/2xl",
                        children: X.v.contract.tokenAddress,
                      }),
                      (0, a.jsx)("li", {
                        children: (0, a.jsxs)("button", {
                          className:
                            "flex items-center gap-2 rounded-lg border border-[#101615] font-medium leading-none ~text-xs/xl ~px-1.5/4 ~py-1/2.5",
                          onClick: () => {
                            D()(X.v.contract.tokenAddress),
                              W.A.success("Copied to clipboard");
                          },
                          children: [
                            (0, a.jsx)(b.default, {
                              src: k,
                              unoptimized: !0,
                              alt: "Copy CA",
                            }),
                            "Copy",
                          ],
                        }),
                      }),
                    ],
                  }),
              ],
            }),
            (0, a.jsx)(b.default, {
              src: V,
              alt: "",
              className: "absolute inset-x-0 top-0 w-full object-contain",
            }),
            (0, a.jsx)(b.default, {
              src: U,
              alt: "",
              className: "absolute inset-x-0 bottom-0 w-full object-cover",
            }),
          ],
        });
      var G = {
          src: "/_next/static/media/story-1.3e9fd586.png",
          height: 586,
          width: 640,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAMAAAACh/xsAAAAgVBMVEU8NjK5rZnn5d+qpoV7jGiFqaqCpoSPhHQsKi6+ytDxw6yQpnVLf5GPi2VadEvs58+XcVXamYWqWSdmgH/Yv6Ds48NdcVp/d2s4IxciIyppY0iBbEj/6cCjhGPlxqT35tmHkW/3qon/yKiepqyZoJCdu64uTCtPmFa4qnfq1ba1qKW7/zX2AAAAFXRSTlP5+fn9/mVl/Pn8/f1i/nZh/aH///5U7P2LAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAQ0lEQVR4nAXBhQGAMBAEsAOqOF/B3dl/QBJwwdO8KgQWdvjbvQ9YFNskoxLGrdt50YdODpPxtKNvbd2Ms4ZUUAhC/QOGVwQlzFE0twAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 7,
        },
        z = {
          src: "/_next/static/media/story-2.dc2c647d.png",
          height: 587,
          width: 641,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAMAAAACh/xsAAAAV1BMVEXl///G5cvezre/qYnM4r7d+PK+y7zA2rbF37q516zu///Ilpy/ya/O4d7BipDKtZXNyLLWu5vXx6/oy6rIzcbP7tbQ5MHFnoHSq5jdoYGzvJLP0rvNwqAl7vjUAAAAD3RSTlNV/P3+/f3+/f79TX/+T4Hol71mAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAPklEQVR4nAXBBwKAIAwEsEOBFlcHw/n/d5oAAPZjXZA6h+auCGPLudoMHt9rtwgiPXqdIigUu5oIiEtqXqcfUiIC0UlY2IcAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 7,
        },
        L = {
          src: "/_next/static/media/story-3.f6cf3439.png",
          height: 587,
          width: 641,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAMAAAACh/xsAAAAXVBMVEXgu7zZrY7gg4LguKLp29vT3ejT8f/mxLfCtKPqycOKaWkGDw/Mqauz5f81MjKmoZ2dnKG3q6LMu6u1mpHuyazF2Or02LaTlp/Yxq782rnvtZvg3NrEpaeghoeojY8J/KgpAAAAD3RSTlP+/pX+VPz5/vv9XlRW+Va1qzWhAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAQElEQVR4nBXGRxaAMAgFwB8lArGQatf7H9PnrAbUhXGZiKB6Py/aAIBdD/+nnpXbDHAqJV8evMa4yaGQbGZplw9KQAKpEGc80QAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 7,
        },
        H = {
          src: "/_next/static/media/story.710dfd78.png",
          height: 1362,
          width: 2841,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAM1BMVEX6+vrGrqXNv7Oim4D///rewbnJz8r////n6O7///+lm4+jlXeJeWbK3r/t+fPa6NLQwab3kvaEAAAAEXRSTlMJ3YXqGj1jARkPfqS52StF7AxOiOcAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAoSURBVHicBcGJAQAwBACxoxT995+2CW1WEl1ZwzJiPxKXzj1YuWjABw+OAMm9vyMsAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 4,
        };
      let K = () =>
        (0, a.jsx)("section", {
          className: "bg-black",
          id: "story",
          children: (0, a.jsxs)(i.W, {
            className: "space-y-8 py-16",
            children: [
              (0, a.jsx)(c.D, { children: "THE STORY OF MOMO" }),
              (0, a.jsx)("div", {
                className: "relative hidden w-full md:block",
                children: (0, a.jsx)(b.default, {
                  src: H,
                  alt: "",
                  className: "w-full object-cover",
                }),
              }),
              (0, a.jsxs)("div", {
                className: "flex flex-col gap-8 md:hidden",
                children: [
                  (0, a.jsxs)("div", {
                    className: "flex flex-col items-center gap-4",
                    children: [
                      (0, a.jsx)(b.default, { src: G, alt: "mojo story 1" }),
                      (0, a.jsx)("p", {
                        className: "text-lg",
                        children:
                          "Once upon a time in the crypto world, there was Momo, with a knack for sniffing out the next 1000x meme coin. While his wealth grew, so did the jealously of those around him, until one day, he was thrown off a cliff and left for dead.",
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: "flex flex-col items-center gap-4",
                    children: [
                      (0, a.jsx)(b.default, { src: z, alt: "mojo story 1" }),
                      (0, a.jsx)("p", {
                        className: "text-lg",
                        children:
                          "With his face taking most of the impact, his nose became huge and his life became miserable, he lost his Momo - he was angry, lifeless. Nothing seemed to be going right anymore.",
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: "flex flex-col items-center gap-4",
                    children: [
                      (0, a.jsx)(b.default, { src: L, alt: "mojo story 1" }),
                      (0, a.jsx)("p", {
                        className: "text-lg",
                        children:
                          "Those years were tough, but he didn’t give up. He opened his computer, reignited his business, started working out, and his nose began to shrink. Slowly but surely, he was on track to getting his MOMO back!",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      var P = () => {
        let A = (0, l.useRef)();
        return (
          (0, l.useEffect)(() => {
            let e = new s.Z();
            return (
              (A.current = requestAnimationFrame(function t(a) {
                e.raf(a), (A.current = requestAnimationFrame(t));
              })),
              () => {
                cancelAnimationFrame(A.current), e.destroy();
              }
            );
          }, []),
          (0, a.jsxs)("main", {
            children: [
              (0, a.jsx)(B, {}),
              (0, a.jsx)(K, {}),
              (0, a.jsx)(Y, {}),
              (0, a.jsx)(Q, {}),
              (0, a.jsx)(u, {}),
              (0, a.jsx)(p.$, {}),
            ],
          })
        );
      };
    },
  },
  function (A) {
    A.O(0, [922, 776, 522, 639, 592, 728, 971, 23, 744], function () {
      return A((A.s = 88350));
    }),
      (_N_E = A.O());
  },
]);
