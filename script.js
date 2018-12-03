! function(a) {
    "use strict";
    var e = {
        Android: function() {
            return navigator.userAgent.match(/Android/i)
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i)
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i)
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i)
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i)
        },
        any: function() {
            return e.Android() || e.BlackBerry() || e.iOS() || e.Opera() || e.Windows()
        }
    };
    a(document).ready(function() {

        function showHeader() {
            var e = a(".navigation").data("menu-type"),
                n = window.innerWidth,
                t = a(".navigation"),
                i = a(".header");
            e > n ? (t.addClass("nav").removeClass("nav-desktop").closest(".header"), i.next().css("margin-top", 0), a(".bars, .bars-close, .logo-banner").show(), a(".navigation .sub-menu").each(function() {
                a(this).removeClass("left right")
            })) : (t.removeClass("nav").addClass("nav-desktop").closest(".header"), i.css("background-color", "#fff").find(".logo").css({
                opacity: "1",
                visibility: "visible"
            }), i.next().css("margin-top", a(".header").height()), a(".bars, .bars-close, .logo-banner").hide(), a(".navigation .sub-menu").each(function() {
                var e = a(this).offset().left,
                    n = a(this).width(),
                    t = S - (e + n);
                60 > t ? a(this).removeClass("left").addClass("right") : a(this).removeClass("right"), 60 > e ? a(this).removeClass("right").addClass("left") : a(this).removeClass("left")
            }))
        }

        function ScrollTable() {
            a(".scroll-table").length && (e.any() || a(".scroll-table").niceScroll({
                touchbehavior: !1,
                background: "#e2e2e2",
                cursoropacitymin: 1,
                cursorcolor: "#141414",
                ursoropacitymax: .6,
                cursorwidth: 0,
                cursorborder: "0px solid #fff",
                railalign: "right"
            }))
        }

        ScrollTable(),a(window).load(function(e) {
            showHeader()
        }), a(window).resize(function(a) {
            showHeader()
        })
    })
}(jQuery);
