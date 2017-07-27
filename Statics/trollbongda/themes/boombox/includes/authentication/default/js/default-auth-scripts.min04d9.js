! function(a) {
    "use strict";
    var t = a("form#boombox-login"),
        e = a("form#boombox-register"),
        o = a("form#boombox_forgot_password"),
        n = null,
        r = null,
        s = function(a, t) {
            a.find(".captcha").attr("src", ajax_auth_object.captcha_file_url + "?" + Math.random() + "&type=" + t).closest(".captcha-container").removeClass("loading")
        };
    a.validator.addMethod("loginRegex", function(a, t) {
        return this.optional(t) || /^[a-z0-9\-\_]+$/i.test(a)
    }), a(".js-authentication").fancybox({
        padding: 0,
        helpers: {
            overlay: {
                locked: !0
            }
        },
        beforeShow: function() {
            var c = a(this.element).hasClass("entry-nsfw");
            if (t.length > 0 && (c && t.closest(".authentication").addClass("is-nsfw-auth"), t[0].reset(), t.find(".error").removeClass("error"), t.find(".status").text(""), 
                ajax_auth_object.enable_login_captcha))
                if ("image" === ajax_auth_object.captcha_type) s(t, t.attr("action"));
                else if ("google" === ajax_auth_object.captcha_type) {
                var i = t.find("#boombox-login-captcha");
                null === n ? n = grecaptcha.render(i.attr("id"), {
                    sitekey: i.data("boombox-sitekey"),
                    theme: "light"
                }) : grecaptcha.reset(n)
            }
            if (e.length > 0 && (c && t.closest(".authentication").addClass("is-nsfw-auth"), e[0].reset(), e.find(".error").removeClass("error"), e.find(".status").text(""), ajax_auth_object.enable_registration_captcha))
                if ("image" === ajax_auth_object.captcha_type) s(e, e.attr("action"));
                else if ("google" === ajax_auth_object.captcha_type) {
                var h = e.find("#boombox-register-captcha");
                null === r ? r = grecaptcha.render(h.attr("id"), {
                    sitekey: h.data("boombox-sitekey"),
                    theme: "light"
                }) : grecaptcha.reset(r)
            }
            o.length > 0 && (o[0].reset(), o.find(".error").removeClass("error"), o.find(".status").text(""))
        }
    }), e.length > 0 && e.validate({
        rules: {
            signonusername: {
                loginRegex: !0
            },
            password2: {
                equalTo: "#signonpassword"
            }
        },
        errorPlacement: function(a, t) {}
    }), t.length > 0 && t.validate({
        errorPlacement: function(a, t) {}
    }), o.length > 0 && o.validate({
        errorPlacement: function(a, t) {}
    }), t.on("submit", function(t) {
        if (!a(this).valid()) return !1;
        var e = a(this),
            o = e.find('[name="useremail"]').val(),
            r = e.find('[name="password"]').val(),
            c = e.find('[name="security"]').val(),
            i = e.closest(".authentication").hasClass("is-nsfw-auth"),
            h = i ? ajax_auth_object.nsfw_redirect_url : ajax_auth_object.login_redirect_url,
            l = {
                action: "boombox_ajax_login",
                useremail: o,
                password: r,
                security: c,
                redirect: h
            };
        ajax_auth_object.enable_login_captcha && ("image" === ajax_auth_object.captcha_type ? l.captcha = e.find('[name="captcha-code"]').val() : "google" === ajax_auth_object.captcha_type && (l.captcha = e.find('[name="g-recaptcha-response"]').val())), e.parent().find("p.status").show().text(ajax_auth_object.loading_message), a.post(ajax_auth_object.ajaxurl, l, function(t) {
            var o = a.parseJSON(t);
            e.parent().find("p.status").show().text(o.message), 1 == o.loggedin ? document.location.href = h : ajax_auth_object.enable_login_captcha && ("image" === ajax_auth_object.captcha_type ? s(e, e.attr("action")) : "google" === ajax_auth_object.captcha_type && grecaptcha.reset(n))
        }), t.preventDefault()
    }), e.on("submit", function(t) {
        if (!a(this).valid()) return !1;
        var e = a(this),
            o = e.find('[name="signonusername"]').val(),
            n = e.find('[name="signonemail"]').val(),
            c = e.find('[name="signonpassword"]').val(),
            i = e.find('[name="signonsecurity"]').val(),
            h = e.closest(".authentication").hasClass("is-nsfw-auth"),
            l = h ? ajax_auth_object.nsfw_redirect_url : ajax_auth_object.register_redirect_url,
            u = {
                action: "boombox_ajax_register",
                username: o,
                useremail: n,
                password: c,
                security: i,
                redirect: l
            };
        ajax_auth_object.enable_registration_captcha && ("image" === ajax_auth_object.captcha_type ? u.captcha = e.find('[name="signoncaptcha"]').val() : "google" === ajax_auth_object.captcha_type && (u.captcha = e.find('[name="g-recaptcha-response"]').val())), e.parent().find("p.status").show().text(ajax_auth_object.loading_message), a.post(ajax_auth_object.ajaxurl, u, function(t) {
            var o = a.parseJSON(t);
            e.parent().find("p.status").show().text(o.message), 1 == o.loggedin ? document.location.href = l : ajax_auth_object.enable_registration_captcha && ("image" === ajax_auth_object.captcha_type ? s(e, e.attr("action")) : "google" === ajax_auth_object.captcha_type && grecaptcha.reset(r))
        }), t.preventDefault()
    }), o.on("submit", function(t) {
        if (!a(this).valid()) return !1;
        var e = a(this),
            o = e.find('[name="userlogin"]').val(),
            n = e.find('[name="forgotsecurity"]').val();
        return e.parent().find("p.status").show().text(ajax_auth_object.loading_message), a.post(ajax_auth_object.ajaxurl, {
            action: "boombox_ajax_forgot_password",
            userlogin: o,
            security: n
        }, function(t) {
            var o = a("p.status", e);
            o.text(t.data.message), t.success && (o.insertBefore(e), e.remove())
        }), t.preventDefault(), !1
    }), a("body").on("click", ".auth-refresh-captcha", function() {
        var t = a(this).closest("form"),
            e = t.attr("action");
        return s(t, e), !1
    })
}(jQuery);