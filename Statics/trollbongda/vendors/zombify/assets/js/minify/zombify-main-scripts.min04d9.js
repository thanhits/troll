function zfContainerWidth(){var e=jQuery(".zombify-screen"),t=e.width();switch(!0){case t>850:e.removeClass(function(e,t){return(t.match(/(^|\s)zf-screen-\S+/g)||[]).join(" ")}),e.addClass("zf-screen-lg");break;case t<=850&&t>700:e.removeClass(function(e,t){return(t.match(/(^|\s)zf-screen-\S+/g)||[]).join(" ")}),e.addClass("zf-screen-md");break;case t<=700&&t>550:e.removeClass(function(e,t){return(t.match(/(^|\s)zf-screen-\S+/g)||[]).join(" ")}),e.addClass("zf-screen-sm");break;case t<=550:e.removeClass(function(e,t){return(t.match(/(^|\s)zf-screen-\S+/g)||[]).join(" ")}),e.addClass("zf-screen-xs")}/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?(zf_isMobile=!0,jQuery("html").addClass("zf-mobile")):(zf_isMobile=!1,jQuery("html").addClass("zf-desktop"))}jQuery(document).ready(function(e){zfContainerWidth(),e(document).on("click",".zf-create-popup",function(t){t.preventDefault(),e(".zombify-create-popup").addClass("zf-open")}),e(document).on("click",".zombify-create-popup .zf-popup_close",function(t){t.preventDefault(),e(".zombify-create-popup").removeClass("zf-open")}),e(document).on("click",".js-authentication",function(t){t.preventDefault(),e(".zombify-create-popup").removeClass("zf-open")}),e(document).on("click",".zombify-submit-popup .zf-popup_close",function(t){t.preventDefault(),e(".zombify-submit-popup").removeClass("zf-open")}),e(document).mouseup(function(t){var o=e(".zombify-popup_body");o.is(t.target)||0!==o.has(t.target).length||o.parent("div").hasClass("zf-open")&&o.parent("div").removeClass("zf-open")}),e(document).on("click",".js-zf-actions-toggle",function(t){t.preventDefault(),t.stopPropagation(),e(this).parent().toggleClass("zf-open")}),e(document).on("click","body",function(){e(".zf-actions.zf-open").removeClass("zf-open")}),e("#submissions-filter-by").on("change",function(){var t=e(this),o=t.closest("form");o.trigger("submit")}),jQuery(document).on("click",".zf-vote_up",function(){jQuery(this).parent().addClass("zf-loading");var e=jQuery(this).parent().attr("data-zf-post-id"),t=jQuery(this).parent().attr("data-zf-post-parent-id");jQuery.ajax({url:zf_main.ajaxurl,type:"POST",data:{post_id:e,post_parent_id:t,vote_type:"up",action:"zombify_post_vote"},dataType:"json",success:function(e){jQuery(".zf-vote_count[data-zf-post-id='"+e.post_id+"'] .zf-vote_number").html(e.votes),jQuery(".zf-vote_count[data-zf-post-id='"+e.post_id+"']").parent().removeClass("zf-loading")}})}),jQuery(document).on("click",".zf-vote_down",function(e){jQuery(this).parent().addClass("zf-loading");var t=jQuery(this).parent().attr("data-zf-post-id"),o=jQuery(this).parent().attr("data-zf-post-parent-id");jQuery.ajax({url:zf_main.ajaxurl,type:"POST",data:{post_id:t,post_parent_id:o,vote_type:"down",action:"zombify_post_vote"},dataType:"json",success:function(e){jQuery(".zf-vote_count[data-zf-post-id='"+e.post_id+"'] .zf-vote_number").html(e.votes),jQuery(".zf-vote_count[data-zf-post-id='"+e.post_id+"']").parent().removeClass("zf-loading")}})})});