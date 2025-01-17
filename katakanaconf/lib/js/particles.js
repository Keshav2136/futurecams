var pJS = function(e, t) {
    var a = document.querySelector("#" + e + " > .particles-js-canvas-el");
    this.pJS = {
        canvas: {
            el: a,
            w: a.offsetWidth,
            h: a.offsetHeight
        },
        particles: {
            number: {
                value: 400,
                density: {
                    enable: !0,
                    value_area: 800
                }
            },
            color: {
                value: "#fff"
            },
            shape: {
                type: "circle",
                stroke: {
                    width: 0,
                    color: "#ff0000"
                },
                polygon: {
                    nb_sides: 5
                },
                image: {
                    src: "",
                    width: 100,
                    height: 100
                }
            },
            opacity: {
                value: 1,
                random: !1,
                anim: {
                    enable: !1,
                    speed: 2,
                    opacity_min: 0,
                    sync: !1
                }
            },
            size: {
                value: 20,
                random: !1,
                anim: {
                    enable: !1,
                    speed: 20,
                    size_min: 0,
                    sync: !1
                }
            },
            line_linked: {
                enable: !0,
                distance: 100,
                color: "#fff",
                opacity: 1,
                width: 1
            },
            move: {
                enable: !0,
                speed: 2,
                direction: "none",
                random: !1,
                straight: !1,
                out_mode: "out",
                bounce: !1,
                attract: {
                    enable: !1,
                    rotateX: 3e3,
                    rotateY: 3e3
                }
            },
            array: []
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: !0,
                    mode: "grab"
                },
                onclick: {
                    enable: !0,
                    mode: "push"
                },
                resize: !0
            },
            modes: {
                grab: {
                    distance: 100,
                    line_linked: {
                        opacity: 1
                    }
                },
                bubble: {
                    distance: 200,
                    size: 80,
                    duration: .4
                },
                repulse: {
                    distance: 200,
                    duration: .4
                },
                push: {
                    particles_nb: 4
                },
                remove: {
                    particles_nb: 2
                }
            },
            mouse: {}
        },
        retina_detect: !1,
        fn: {
            interact: {},
            modes: {},
            vendors: {}
        },
        tmp: {}
    };
    var i = this.pJS;
    t && Object.deepExtend(i, t),
    i.tmp.obj = {
        size_value: i.particles.size.value,
        size_anim_speed: i.particles.size.anim.speed,
        move_speed: i.particles.move.speed,
        line_linked_distance: i.particles.line_linked.distance,
        line_linked_width: i.particles.line_linked.width,
        mode_grab_distance: i.interactivity.modes.grab.distance,
        mode_bubble_distance: i.interactivity.modes.bubble.distance,
        mode_bubble_size: i.interactivity.modes.bubble.size,
        mode_repulse_distance: i.interactivity.modes.repulse.distance
    },
    i.fn.retinaInit = function() {
        i.retina_detect && window.devicePixelRatio > 1 ? (i.canvas.pxratio = window.devicePixelRatio,
        i.tmp.retina = !0) : (i.canvas.pxratio = 1,
        i.tmp.retina = !1),
        i.canvas.w = i.canvas.el.offsetWidth * i.canvas.pxratio,
        i.canvas.h = i.canvas.el.offsetHeight * i.canvas.pxratio,
        i.particles.size.value = i.tmp.obj.size_value * i.canvas.pxratio,
        i.particles.size.anim.speed = i.tmp.obj.size_anim_speed * i.canvas.pxratio,
        i.particles.move.speed = i.tmp.obj.move_speed * i.canvas.pxratio,
        i.particles.line_linked.distance = i.tmp.obj.line_linked_distance * i.canvas.pxratio,
        i.interactivity.modes.grab.distance = i.tmp.obj.mode_grab_distance * i.canvas.pxratio,
        i.interactivity.modes.bubble.distance = i.tmp.obj.mode_bubble_distance * i.canvas.pxratio,
        i.particles.line_linked.width = i.tmp.obj.line_linked_width * i.canvas.pxratio,
        i.interactivity.modes.bubble.size = i.tmp.obj.mode_bubble_size * i.canvas.pxratio,
        i.interactivity.modes.repulse.distance = i.tmp.obj.mode_repulse_distance * i.canvas.pxratio
    }
    ,
    i.fn.canvasInit = function() {
        i.canvas.ctx = i.canvas.el.getContext("2d")
    }
    ,
    i.fn.canvasSize = function() {
        i.canvas.el.width = i.canvas.w,
        i.canvas.el.height = i.canvas.h,
        i && i.interactivity.events.resize && window.addEventListener("resize", function() {
            i.canvas.w = i.canvas.el.offsetWidth,
            i.canvas.h = i.canvas.el.offsetHeight,
            i.tmp.retina && (i.canvas.w *= i.canvas.pxratio,
            i.canvas.h *= i.canvas.pxratio),
            i.canvas.el.width = i.canvas.w,
            i.canvas.el.height = i.canvas.h,
            i.particles.move.enable || (i.fn.particlesEmpty(),
            i.fn.particlesCreate(),
            i.fn.particlesDraw(),
            i.fn.vendors.densityAutoParticles()),
            i.fn.vendors.densityAutoParticles()
        })
    }
    ,
    i.fn.canvasPaint = function() {
        i.canvas.ctx.fillRect(0, 0, i.canvas.w, i.canvas.h)
    }
    ,
    i.fn.canvasClear = function() {
        i.canvas.ctx.clearRect(0, 0, i.canvas.w, i.canvas.h)
    }
    ,
    i.fn.particle = function(e, t, a) {
        if (this.radius = (i.particles.size.random ? Math.random() : 1) * i.particles.size.value,
        i.particles.size.anim.enable && (this.size_status = !1,
        this.vs = i.particles.size.anim.speed / 100,
        i.particles.size.anim.sync || (this.vs = this.vs * Math.random())),
        this.x = a ? a.x : Math.random() * i.canvas.w,
        this.y = a ? a.y : Math.random() * i.canvas.h,
        this.x > i.canvas.w - 2 * this.radius ? this.x = this.x - this.radius : this.x < 2 * this.radius && (this.x = this.x + this.radius),
        this.y > i.canvas.h - 2 * this.radius ? this.y = this.y - this.radius : this.y < 2 * this.radius && (this.y = this.y + this.radius),
        i.particles.move.bounce && i.fn.vendors.checkOverlap(this, a),
        this.color = {},
        "object" == typeof e.value)
            if (e.value instanceof Array) {
                var s = e.value[Math.floor(Math.random() * i.particles.color.value.length)];
                this.color.rgb = hexToRgb(s)
            } else
                void 0 != e.value.r && void 0 != e.value.g && void 0 != e.value.b && (this.color.rgb = {
                    r: e.value.r,
                    g: e.value.g,
                    b: e.value.b
                }),
                void 0 != e.value.h && void 0 != e.value.s && void 0 != e.value.l && (this.color.hsl = {
                    h: e.value.h,
                    s: e.value.s,
                    l: e.value.l
                });
        else
            "random" == e.value ? this.color.rgb = {
                r: Math.floor(256 * Math.random()) + 0,
                g: Math.floor(256 * Math.random()) + 0,
                b: Math.floor(256 * Math.random()) + 0
            } : "string" == typeof e.value && (this.color = e,
            this.color.rgb = hexToRgb(this.color.value));
        this.opacity = (i.particles.opacity.random ? Math.random() : 1) * i.particles.opacity.value,
        i.particles.opacity.anim.enable && (this.opacity_status = !1,
        this.vo = i.particles.opacity.anim.speed / 100,
        i.particles.opacity.anim.sync || (this.vo = this.vo * Math.random()));
        var n = {};
        switch (i.particles.move.direction) {
        case "top":
            n = {
                x: 0,
                y: -1
            };
            break;
        case "top-right":
            n = {
                x: .5,
                y: -.5
            };
            break;
        case "right":
            n = {
                x: 1,
                y: -0
            };
            break;
        case "bottom-right":
            n = {
                x: .5,
                y: .5
            };
            break;
        case "bottom":
            n = {
                x: 0,
                y: 1
            };
            break;
        case "bottom-left":
            n = {
                x: -.5,
                y: 1
            };
            break;
        case "left":
            n = {
                x: -1,
                y: 0
            };
            break;
        case "top-left":
            n = {
                x: -.5,
                y: -.5
            };
            break;
        default:
            n = {
                x: 0,
                y: 0
            }
        }
        i.particles.move.straight ? (this.vx = n.x,
        this.vy = n.y,
        i.particles.move.random && (this.vx = this.vx * Math.random(),
        this.vy = this.vy * Math.random())) : (this.vx = n.x + Math.random() - .5,
        this.vy = n.y + Math.random() - .5),
        this.vx_i = this.vx,
        this.vy_i = this.vy;
        var r = i.particles.shape.type;
        if ("object" == typeof r) {
            if (r instanceof Array) {
                var c = r[Math.floor(Math.random() * r.length)];
                this.shape = c
            }
        } else
            this.shape = r;
        if ("image" == this.shape) {
            var o = i.particles.shape;
            this.img = {
                src: o.image.src,
                ratio: o.image.width / o.image.height
            },
            this.img.ratio || (this.img.ratio = 1),
            "svg" == i.tmp.img_type && void 0 != i.tmp.source_svg && (i.fn.vendors.createSvgImg(this),
            i.tmp.pushing && (this.img.loaded = !1))
        }
    }
    ,
    i.fn.particle.prototype.draw = function() {
        var e = this;
        if (void 0 != e.radius_bubble)
            var t = e.radius_bubble;
        else
            t = e.radius;
        if (void 0 != e.opacity_bubble)
            var a = e.opacity_bubble;
        else
            a = e.opacity;
        if (e.color.rgb)
            var s = "rgba(" + e.color.rgb.r + "," + e.color.rgb.g + "," + e.color.rgb.b + "," + a + ")";
        else
            s = "hsla(" + e.color.hsl.h + "," + e.color.hsl.s + "%," + e.color.hsl.l + "%," + a + ")";
        switch (i.canvas.ctx.fillStyle = s,
        i.canvas.ctx.beginPath(),
        e.shape) {
        case "circle":
            i.canvas.ctx.arc(e.x, e.y, t, 0, 2 * Math.PI, !1);
            break;
        case "edge":
            i.canvas.ctx.rect(e.x - t, e.y - t, 2 * t, 2 * t);
            break;
        case "triangle":
            i.fn.vendors.drawShape(i.canvas.ctx, e.x - t, e.y + t / 1.66, 2 * t, 3, 2);
            break;
        case "polygon":
            i.fn.vendors.drawShape(i.canvas.ctx, e.x - t / (i.particles.shape.polygon.nb_sides / 3.5), e.y - t / .76, 2.66 * t / (i.particles.shape.polygon.nb_sides / 3), i.particles.shape.polygon.nb_sides, 1);
            break;
        case "star":
            i.fn.vendors.drawShape(i.canvas.ctx, e.x - 2 * t / (i.particles.shape.polygon.nb_sides / 4), e.y - t / 1.52, 2 * t * 2.66 / (i.particles.shape.polygon.nb_sides / 3), i.particles.shape.polygon.nb_sides, 2);
            break;
        case "image":
            ;if ("svg" == i.tmp.img_type)
                var n = e.img.obj;
            else
                n = i.tmp.img_obj;
            n && i.canvas.ctx.drawImage(n, e.x - t, e.y - t, 2 * t, 2 * t / e.img.ratio)
        }
        i.canvas.ctx.closePath(),
        i.particles.shape.stroke.width > 0 && (i.canvas.ctx.strokeStyle = i.particles.shape.stroke.color,
        i.canvas.ctx.lineWidth = i.particles.shape.stroke.width,
        i.canvas.ctx.stroke()),
        i.canvas.ctx.fill()
    }
    ,
    i.fn.particlesCreate = function() {
        for (var e = 0; e < i.particles.number.value; e++)
            i.particles.array.push(new i.fn.particle(i.particles.color,i.particles.opacity.value))
    }
    ,
    i.fn.particlesUpdate = function() {
        for (var e = 0; e < i.particles.array.length; e++) {
            var t = i.particles.array[e];
            if (i.particles.move.enable) {
                var a = i.particles.move.speed / 2;
                t.x += t.vx * a,
                t.y += t.vy * a
            }
            if (i.particles.opacity.anim.enable && (1 == t.opacity_status ? (t.opacity >= i.particles.opacity.value && (t.opacity_status = !1),
            t.opacity += t.vo) : (t.opacity <= i.particles.opacity.anim.opacity_min && (t.opacity_status = !0),
            t.opacity -= t.vo),
            t.opacity < 0 && (t.opacity = 0)),
            i.particles.size.anim.enable && (1 == t.size_status ? (t.radius >= i.particles.size.value && (t.size_status = !1),
            t.radius += t.vs) : (t.radius <= i.particles.size.anim.size_min && (t.size_status = !0),
            t.radius -= t.vs),
            t.radius < 0 && (t.radius = 0)),
            "bounce" == i.particles.move.out_mode)
                var s = {
                    x_left: t.radius,
                    x_right: i.canvas.w,
                    y_top: t.radius,
                    y_bottom: i.canvas.h
                };
            else
                s = {
                    x_left: -t.radius,
                    x_right: i.canvas.w + t.radius,
                    y_top: -t.radius,
                    y_bottom: i.canvas.h + t.radius
                };
            switch (t.x - t.radius > i.canvas.w ? (t.x = s.x_left,
            t.y = Math.random() * i.canvas.h) : t.x + t.radius < 0 && (t.x = s.x_right,
            t.y = Math.random() * i.canvas.h),
            t.y - t.radius > i.canvas.h ? (t.y = s.y_top,
            t.x = Math.random() * i.canvas.w) : t.y + t.radius < 0 && (t.y = s.y_bottom,
            t.x = Math.random() * i.canvas.w),
            i.particles.move.out_mode) {
            case "bounce":
                t.x + t.radius > i.canvas.w ? t.vx = -t.vx : t.x - t.radius < 0 && (t.vx = -t.vx),
                t.y + t.radius > i.canvas.h ? t.vy = -t.vy : t.y - t.radius < 0 && (t.vy = -t.vy)
            }
            if (isInArray("grab", i.interactivity.events.onhover.mode) && i.fn.modes.grabParticle(t),
            (isInArray("bubble", i.interactivity.events.onhover.mode) || isInArray("bubble", i.interactivity.events.onclick.mode)) && i.fn.modes.bubbleParticle(t),
            (isInArray("repulse", i.interactivity.events.onhover.mode) || isInArray("repulse", i.interactivity.events.onclick.mode)) && i.fn.modes.repulseParticle(t),
            i.particles.line_linked.enable || i.particles.move.attract.enable)
                for (var n = e + 1; n < i.particles.array.length; n++) {
                    var r = i.particles.array[n];
                    i.particles.line_linked.enable && i.fn.interact.linkParticles(t, r),
                    i.particles.move.attract.enable && i.fn.interact.attractParticles(t, r),
                    i.particles.move.bounce && i.fn.interact.bounceParticles(t, r)
                }
        }
    }
    ,
    i.fn.particlesDraw = function() {
        i.canvas.ctx.clearRect(0, 0, i.canvas.w, i.canvas.h),
        i.fn.particlesUpdate();
        for (var e = 0; e < i.particles.array.length; e++) {
            i.particles.array[e].draw()
        }
    }
    ,
    i.fn.particlesEmpty = function() {
        i.particles.array = []
    }
    ,
    i.fn.particlesRefresh = function() {
        cancelRequestAnimFrame(i.fn.checkAnimFrame),
        cancelRequestAnimFrame(i.fn.drawAnimFrame),
        i.tmp.source_svg = void 0,
        i.tmp.img_obj = void 0,
        i.tmp.count_svg = 0,
        i.fn.particlesEmpty(),
        i.fn.canvasClear(),
        i.fn.vendors.start()
    }
    ,
    i.fn.interact.linkParticles = function(e, t) {
        var a = e.x - t.x
          , s = e.y - t.y
          , n = Math.sqrt(a * a + s * s);
        if (n <= i.particles.line_linked.distance) {
            var r = i.particles.line_linked.opacity - n / (1 / i.particles.line_linked.opacity) / i.particles.line_linked.distance;
            if (r > 0) {
                var c = i.particles.line_linked.color_rgb_line;
                i.canvas.ctx.strokeStyle = "rgba(" + c.r + "," + c.g + "," + c.b + "," + r + ")",
                i.canvas.ctx.lineWidth = i.particles.line_linked.width,
                i.canvas.ctx.beginPath(),
                i.canvas.ctx.moveTo(e.x, e.y),
                i.canvas.ctx.lineTo(t.x, t.y),
                i.canvas.ctx.stroke(),
                i.canvas.ctx.closePath()
            }
        }
    }
    ,
    i.fn.interact.attractParticles = function(e, t) {
        var a = e.x - t.x
          , s = e.y - t.y;
        if (Math.sqrt(a * a + s * s) <= i.particles.line_linked.distance) {
            var n = a / (1e3 * i.particles.move.attract.rotateX)
              , r = s / (1e3 * i.particles.move.attract.rotateY);
            e.vx -= n,
            e.vy -= r,
            t.vx += n,
            t.vy += r
        }
    }
    ,
    i.fn.interact.bounceParticles = function(e, t) {
        var a = e.x - t.x
          , i = e.y - t.y;
        Math.sqrt(a * a + i * i) <= e.radius + t.radius && (e.vx = -e.vx,
        e.vy = -e.vy,
        t.vx = -t.vx,
        t.vy = -t.vy)
    }
    ,
    i.fn.modes.pushParticles = function(e, t) {
        i.tmp.pushing = !0;
        for (var a = 0; a < e; a++)
            i.particles.array.push(new i.fn.particle(i.particles.color,i.particles.opacity.value,{
                x: t ? t.pos_x : Math.random() * i.canvas.w,
                y: t ? t.pos_y : Math.random() * i.canvas.h
            })),
            a == e - 1 && (i.particles.move.enable || i.fn.particlesDraw(),
            i.tmp.pushing = !1)
    }
    ,
    i.fn.modes.removeParticles = function(e) {
        i.particles.array.splice(0, e),
        i.particles.move.enable || i.fn.particlesDraw()
    }
    ,
    i.fn.modes.bubbleParticle = function(e) {
        if (i.interactivity.events.onhover.enable && isInArray("bubble", i.interactivity.events.onhover.mode)) {
            var t = e.x - i.interactivity.mouse.pos_x
              , a = e.y - i.interactivity.mouse.pos_y
              , s = 1 - (l = Math.sqrt(t * t + a * a)) / i.interactivity.modes.bubble.distance;
            function n() {
                e.opacity_bubble = e.opacity,
                e.radius_bubble = e.radius
            }
            if (l <= i.interactivity.modes.bubble.distance) {
                if (s >= 0 && "mousemove" == i.interactivity.status) {
                    if (i.interactivity.modes.bubble.size != i.particles.size.value)
                        if (i.interactivity.modes.bubble.size > i.particles.size.value) {
                            (c = e.radius + i.interactivity.modes.bubble.size * s) >= 0 && (e.radius_bubble = c)
                        } else {
                            var r = e.radius - i.interactivity.modes.bubble.size
                              , c = e.radius - r * s;
                            e.radius_bubble = c > 0 ? c : 0
                        }
                    var o;
                    if (i.interactivity.modes.bubble.opacity != i.particles.opacity.value)
                        if (i.interactivity.modes.bubble.opacity > i.particles.opacity.value)
                            (o = i.interactivity.modes.bubble.opacity * s) > e.opacity && o <= i.interactivity.modes.bubble.opacity && (e.opacity_bubble = o);
                        else
                            (o = e.opacity - (i.particles.opacity.value - i.interactivity.modes.bubble.opacity) * s) < e.opacity && o >= i.interactivity.modes.bubble.opacity && (e.opacity_bubble = o)
                }
            } else
                n();
            "mouseleave" == i.interactivity.status && n()
        } else if (i.interactivity.events.onclick.enable && isInArray("bubble", i.interactivity.events.onclick.mode)) {
            if (i.tmp.bubble_clicking) {
                t = e.x - i.interactivity.mouse.click_pos_x,
                a = e.y - i.interactivity.mouse.click_pos_y;
                var l = Math.sqrt(t * t + a * a)
                  , v = ((new Date).getTime() - i.interactivity.mouse.click_time) / 1e3;
                v > i.interactivity.modes.bubble.duration && (i.tmp.bubble_duration_end = !0),
                v > 2 * i.interactivity.modes.bubble.duration && (i.tmp.bubble_clicking = !1,
                i.tmp.bubble_duration_end = !1)
            }
            function p(t, a, s, n, r) {
                if (t != a)
                    if (i.tmp.bubble_duration_end)
                        void 0 != s && (o = t + (t - (n - v * (n - t) / i.interactivity.modes.bubble.duration)),
                        "size" == r && (e.radius_bubble = o),
                        "opacity" == r && (e.opacity_bubble = o));
                    else if (l <= i.interactivity.modes.bubble.distance) {
                        if (void 0 != s)
                            var c = s;
                        else
                            c = n;
                        if (c != t) {
                            var o = n - v * (n - t) / i.interactivity.modes.bubble.duration;
                            "size" == r && (e.radius_bubble = o),
                            "opacity" == r && (e.opacity_bubble = o)
                        }
                    } else
                        "size" == r && (e.radius_bubble = void 0),
                        "opacity" == r && (e.opacity_bubble = void 0)
            }
            i.tmp.bubble_clicking && (p(i.interactivity.modes.bubble.size, i.particles.size.value, e.radius_bubble, e.radius, "size"),
            p(i.interactivity.modes.bubble.opacity, i.particles.opacity.value, e.opacity_bubble, e.opacity, "opacity"))
        }
    }
    ,
    i.fn.modes.repulseParticle = function(e) {
        if (i.interactivity.events.onhover.enable && isInArray("repulse", i.interactivity.events.onhover.mode) && "mousemove" == i.interactivity.status) {
            var t = e.x - i.interactivity.mouse.pos_x
              , a = e.y - i.interactivity.mouse.pos_y
              , s = Math.sqrt(t * t + a * a)
              , n = t / s
              , r = a / s
              , c = clamp(1 / (l = i.interactivity.modes.repulse.distance) * (-1 * Math.pow(s / l, 2) + 1) * l * 100, 0, 50)
              , o = {
                x: e.x + n * c,
                y: e.y + r * c
            };
            "bounce" == i.particles.move.out_mode ? (o.x - e.radius > 0 && o.x + e.radius < i.canvas.w && (e.x = o.x),
            o.y - e.radius > 0 && o.y + e.radius < i.canvas.h && (e.y = o.y)) : (e.x = o.x,
            e.y = o.y)
        } else if (i.interactivity.events.onclick.enable && isInArray("repulse", i.interactivity.events.onclick.mode))
            if (i.tmp.repulse_finish || (i.tmp.repulse_count++,
            i.tmp.repulse_count == i.particles.array.length && (i.tmp.repulse_finish = !0)),
            i.tmp.repulse_clicking) {
                var l = Math.pow(i.interactivity.modes.repulse.distance / 6, 3)
                  , v = i.interactivity.mouse.click_pos_x - e.x
                  , p = i.interactivity.mouse.click_pos_y - e.y
                  , d = v * v + p * p
                  , m = -l / d * 1;
                d <= l && function() {
                    var t = Math.atan2(p, v);
                    if (e.vx = m * Math.cos(t),
                    e.vy = m * Math.sin(t),
                    "bounce" == i.particles.move.out_mode) {
                        var a = e.x + e.vx
                          , s = e.y + e.vy;
                        a + e.radius > i.canvas.w ? e.vx = -e.vx : a - e.radius < 0 && (e.vx = -e.vx),
                        s + e.radius > i.canvas.h ? e.vy = -e.vy : s - e.radius < 0 && (e.vy = -e.vy)
                    }
                }()
            } else
                0 == i.tmp.repulse_clicking && (e.vx = e.vx_i,
                e.vy = e.vy_i)
    }
    ,
    i.fn.modes.grabParticle = function(e) {
        if (i.interactivity.events.onhover.enable && "mousemove" == i.interactivity.status) {
            var t = e.x - i.interactivity.mouse.pos_x
              , a = e.y - i.interactivity.mouse.pos_y
              , s = Math.sqrt(t * t + a * a);
            if (s <= i.interactivity.modes.grab.distance) {
                var n = i.interactivity.modes.grab.line_linked.opacity - s / (1 / i.interactivity.modes.grab.line_linked.opacity) / i.interactivity.modes.grab.distance;
                if (n > 0) {
                    var r = i.particles.line_linked.color_rgb_line;
                    i.canvas.ctx.strokeStyle = "rgba(" + r.r + "," + r.g + "," + r.b + "," + n + ")",
                    i.canvas.ctx.lineWidth = i.particles.line_linked.width,
                    i.canvas.ctx.beginPath(),
                    i.canvas.ctx.moveTo(e.x, e.y),
                    i.canvas.ctx.lineTo(i.interactivity.mouse.pos_x, i.interactivity.mouse.pos_y),
                    i.canvas.ctx.stroke(),
                    i.canvas.ctx.closePath()
                }
            }
        }
    }
    ,
    i.fn.vendors.eventsListeners = function() {
        "window" == i.interactivity.detect_on ? i.interactivity.el = window : i.interactivity.el = i.canvas.el,
        (i.interactivity.events.onhover.enable || i.interactivity.events.onclick.enable) && (i.interactivity.el.addEventListener("mousemove", function(e) {
            if (i.interactivity.el == window)
                var t = e.clientX
                  , a = e.clientY;
            else
                t = e.offsetX || e.clientX,
                a = e.offsetY || e.clientY;
            i.interactivity.mouse.pos_x = t,
            i.interactivity.mouse.pos_y = a,
            i.tmp.retina && (i.interactivity.mouse.pos_x *= i.canvas.pxratio,
            i.interactivity.mouse.pos_y *= i.canvas.pxratio),
            i.interactivity.status = "mousemove"
        }),
        i.interactivity.el.addEventListener("mouseleave", function(e) {
            i.interactivity.mouse.pos_x = null,
            i.interactivity.mouse.pos_y = null,
            i.interactivity.status = "mouseleave"
        })),
        i.interactivity.events.onclick.enable && i.interactivity.el.addEventListener("click", function() {
            if (i.interactivity.mouse.click_pos_x = i.interactivity.mouse.pos_x,
            i.interactivity.mouse.click_pos_y = i.interactivity.mouse.pos_y,
            i.interactivity.mouse.click_time = (new Date).getTime(),
            i.interactivity.events.onclick.enable)
                switch (i.interactivity.events.onclick.mode) {
                case "push":
                    i.particles.move.enable ? i.fn.modes.pushParticles(i.interactivity.modes.push.particles_nb, i.interactivity.mouse) : 1 == i.interactivity.modes.push.particles_nb ? i.fn.modes.pushParticles(i.interactivity.modes.push.particles_nb, i.interactivity.mouse) : i.interactivity.modes.push.particles_nb > 1 && i.fn.modes.pushParticles(i.interactivity.modes.push.particles_nb);
                    break;
                case "remove":
                    i.fn.modes.removeParticles(i.interactivity.modes.remove.particles_nb);
                    break;
                case "bubble":
                    i.tmp.bubble_clicking = !0;
                    break;
                case "repulse":
                    i.tmp.repulse_clicking = !0,
                    i.tmp.repulse_count = 0,
                    i.tmp.repulse_finish = !1,
                    setTimeout(function() {
                        i.tmp.repulse_clicking = !1
                    }, 1e3 * i.interactivity.modes.repulse.duration)
                }
        })
    }
    ,
    i.fn.vendors.densityAutoParticles = function() {
        if (i.particles.number.density.enable) {
            var e = i.canvas.el.width * i.canvas.el.height / 1e3;
            i.tmp.retina && (e /= 2 * i.canvas.pxratio);
            var t = e * i.particles.number.value / i.particles.number.density.value_area
              , a = i.particles.array.length - t;
            a < 0 ? i.fn.modes.pushParticles(Math.abs(a)) : i.fn.modes.removeParticles(a)
        }
    }
    ,
    i.fn.vendors.checkOverlap = function(e, t) {
        for (var a = 0; a < i.particles.array.length; a++) {
            var s = i.particles.array[a]
              , n = e.x - s.x
              , r = e.y - s.y;
            Math.sqrt(n * n + r * r) <= e.radius + s.radius && (e.x = t ? t.x : Math.random() * i.canvas.w,
            e.y = t ? t.y : Math.random() * i.canvas.h,
            i.fn.vendors.checkOverlap(e))
        }
    }
    ,
    i.fn.vendors.createSvgImg = function(e) {
        var t = i.tmp.source_svg.replace(/#([0-9A-F]{3,6})/gi, function(t, a, i, s) {
            if (e.color.rgb)
                var n = "rgba(" + e.color.rgb.r + "," + e.color.rgb.g + "," + e.color.rgb.b + "," + e.opacity + ")";
            else
                n = "hsla(" + e.color.hsl.h + "," + e.color.hsl.s + "%," + e.color.hsl.l + "%," + e.opacity + ")";
            return n
        })
          , a = new Blob([t],{
            type: "image/svg+xml;charset=utf-8"
        })
          , s = window.URL || window.webkitURL || window
          , n = s.createObjectURL(a)
          , r = new Image;
        r.addEventListener("load", function() {
            e.img.obj = r,
            e.img.loaded = !0,
            s.revokeObjectURL(n),
            i.tmp.count_svg++
        }),
        r.src = n
    }
    ,
    i.fn.vendors.destroypJS = function() {
        cancelAnimationFrame(i.fn.drawAnimFrame),
        a.remove(),
        pJSDom = null
    }
    ,
    i.fn.vendors.drawShape = function(e, t, a, i, s, n) {
        var r = s * n
          , c = s / n
          , o = 180 * (c - 2) / c
          , l = Math.PI - Math.PI * o / 180;
        e.save(),
        e.beginPath(),
        e.translate(t, a),
        e.moveTo(0, 0);
        for (var v = 0; v < r; v++)
            e.lineTo(i, 0),
            e.translate(i, 0),
            e.rotate(l);
        e.fill(),
        e.restore()
    }
    ,
    i.fn.vendors.exportImg = function() {
        window.open(i.canvas.el.toDataURL("image/png"), "_blank")
    }
    ,
    i.fn.vendors.loadImg = function(e) {
        if (i.tmp.img_error = void 0,
        "" != i.particles.shape.image.src)
            if ("svg" == e) {
                var t = new XMLHttpRequest;
                t.open("GET", i.particles.shape.image.src),
                t.onreadystatechange = function(e) {
                    4 == t.readyState && (200 == t.status ? (i.tmp.source_svg = e.currentTarget.response,
                    i.fn.vendors.checkBeforeDraw()) : (console.log("Error pJS - Image not found"),
                    i.tmp.img_error = !0))
                }
                ,
                t.send()
            } else {
                var a = new Image;
                a.addEventListener("load", function() {
                    i.tmp.img_obj = a,
                    i.fn.vendors.checkBeforeDraw()
                }),
                a.src = i.particles.shape.image.src
            }
        else
            console.log("Error pJS - No image.src"),
            i.tmp.img_error = !0
    }
    ,
    i.fn.vendors.draw = function() {
        "image" == i.particles.shape.type ? "svg" == i.tmp.img_type ? i.tmp.count_svg >= i.particles.number.value ? (i.fn.particlesDraw(),
        i.particles.move.enable ? i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw) : cancelRequestAnimFrame(i.fn.drawAnimFrame)) : i.tmp.img_error || (i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw)) : void 0 != i.tmp.img_obj ? (i.fn.particlesDraw(),
        i.particles.move.enable ? i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw) : cancelRequestAnimFrame(i.fn.drawAnimFrame)) : i.tmp.img_error || (i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw)) : (i.fn.particlesDraw(),
        i.particles.move.enable ? i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw) : cancelRequestAnimFrame(i.fn.drawAnimFrame))
    }
    ,
    i.fn.vendors.checkBeforeDraw = function() {
        "image" == i.particles.shape.type ? "svg" == i.tmp.img_type && void 0 == i.tmp.source_svg ? i.tmp.checkAnimFrame = requestAnimFrame(check) : (cancelRequestAnimFrame(i.tmp.checkAnimFrame),
        i.tmp.img_error || (i.fn.vendors.init(),
        i.fn.vendors.draw())) : (i.fn.vendors.init(),
        i.fn.vendors.draw())
    }
    ,
    i.fn.vendors.init = function() {
        i.fn.retinaInit(),
        i.fn.canvasInit(),
        i.fn.canvasSize(),
        i.fn.canvasPaint(),
        i.fn.particlesCreate(),
        i.fn.vendors.densityAutoParticles(),
        i.particles.line_linked.color_rgb_line = hexToRgb(i.particles.line_linked.color)
    }
    ,
    i.fn.vendors.start = function() {
        isInArray("image", i.particles.shape.type) ? (i.tmp.img_type = i.particles.shape.image.src.substr(i.particles.shape.image.src.length - 3),
        i.fn.vendors.loadImg(i.tmp.img_type)) : i.fn.vendors.checkBeforeDraw()
    }
    ,
    i.fn.vendors.eventsListeners(),
    i.fn.vendors.start()
};
function hexToRgb(e) {
    e = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(e, t, a, i) {
        return t + t + a + a + i + i
    });
    var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
    return t ? {
        r: parseInt(t[1], 16),
        g: parseInt(t[2], 16),
        b: parseInt(t[3], 16)
    } : null
}
function clamp(e, t, a) {
    return Math.min(Math.max(e, t), a)
}
function isInArray(e, t) {
    return t.indexOf(e) > -1
}
Object.deepExtend = function(e, t) {
    for (var a in t)
        t[a] && t[a].constructor && t[a].constructor === Object ? (e[a] = e[a] || {},
        arguments.callee(e[a], t[a])) : e[a] = t[a];
    return e
}
,
window.requestAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(e) {
    window.setTimeout(e, 1e3 / 60)
}
,
window.cancelRequestAnimFrame = window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout,
window.pJSDom = [],
window.particlesJS = function(e, t) {
    "string" != typeof e && (t = e,
    e = "particles-js"),
    e || (e = "particles-js");
    var a = document.getElementById(e)
      , i = "particles-js-canvas-el"
      , s = a.getElementsByClassName(i);
    if (s.length)
        for (; s.length > 0; )
            a.removeChild(s[0]);
    var n = document.createElement("canvas");
    n.className = i,
    n.style.width = "auto",
    n.style.height = "100%",
    null != document.getElementById(e).appendChild(n) && pJSDom.push(new pJS(e,t))
}
,
window.particlesJS.load = function(e, t, a) {
    var i = new XMLHttpRequest;
    i.open("GET", t),
    i.onreadystatechange = function(t) {
        if (4 == i.readyState)
            if (200 == i.status) {
                var s = JSON.parse(t.currentTarget.response);
                window.particlesJS(e, s),
                a && a()
            } else
                console.log("Error pJS - XMLHttpRequest status: " + i.status),
                console.log("Error pJS - File config not found")
    }
    ,
    i.send()
}
;
