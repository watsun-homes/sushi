!function(t){"use strict";function a(e,s,o,r,n,d,p,c){var l="",f=0,h=0,g="",u=!0,v=void 0;t(e).hover(function(m){if(m.stopPropagation(),m.preventDefault(),u){u=!1,v=t(this).clone(),l=t(this).attr("src");var w=this.getBoundingClientRect();f=w.top,h=w.left,g=t(this).css("position"),v.attr("src",t(this).data("after-img")),v.data("after-img",l),v.attr("data-after-img",l),v.css({width:r,height:n,position:"absolute",top:f+"px",left:h+"px",display:"none"}),v.addClass("tatsu_class_imgReplaceLayer"),t(this).addClass("tatsu_class_imgBeforeReplaceLayer");var x=t("<div />").addClass("tatsu_overlay");x.css({width:"100%",height:"100%",position:"fixed",top:t(window).scrollTop()-t(window).scrollTop()+"px",left:-1*t(window).scrollLeft()+"px","z-index":9996});var y=t("<div />").addClass("tatsu_overlay2");y.css({width:"100%",height:"100%",position:"relative",top:t(window).scrollTop()-t(window).scrollTop()+"px",left:-1*t(window).scrollLeft()+"px","z-index":9997});var _=t(this);y.append(v),x.append(y),t("body").append(x),v.hover(function(){},function(){u||(v.stop(!0,!1),_.attr("src",s),_.data("after-img",o),_.attr("data-after-img",o),y.remove(),x.remove(),i(_,d,f,h,r,n,p,g),a(_,s,o,r,n,d,p,c))});v.css("z-index");v.css("z-index",9999),v.fadeIn(c,function(){i(v,d,f,h,r,n,p,g),a(v,s,o,r,n,d,p,c),t(e).replaceWith(v),t("#tatsu_imgReplaceLayer").remove(),y.remove(),x.remove(),u=!0})}},function(a){a.preventDefault(),a.stopPropagation(),a.stopImmediatePropagation(),u&&(t(this).attr("src",s),t(this).data("after-img",o),t(this).attr("data-after-img",o),i(t(this),d,f,h,r,n,p,g))})}function i(a,i,e,s,o,r,n,d){t(a).attr("style",i),t(a).css({top:e+"px",left:s+"px",width:o,height:r}),n?t(a).css("opacity",n):t(a).css("opacity",1),"undefined"!==d?t(a).css("position",d):t(a).css("position","")}t.fn.imageReplace=function(){var i=this;return i.each(function(i,e){var s=t(e).attr("src"),o=t(e).data("after-img"),r=t(e).data("after-img"),n=1e3;if(r){var d=t(e).data("after-fade-time");isFinite(d)&&(n=5>d?5:d);var p=t(e).width()+"px",c=t(e).height()+"px",l=t(e).attr("style"),f=t(e).css("opacity");a(e,s,o,p,c,l,f,n)}})},t(window).on("load",function(){t("img").imageReplace(1e3)})}(jQuery);