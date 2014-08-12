/*!
 * jQuery UI Effects @VERSION
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/
 */

jQuery.effects||function(f,k){function n(c){var a;return c&&c.constructor==Array&&3==c.length?c:(a=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(c))?[parseInt(a[1],10),parseInt(a[2],10),parseInt(a[3],10)]:(a=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(c))?[2.55*parseFloat(a[1]),2.55*parseFloat(a[2]),2.55*parseFloat(a[3])]:(a=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(c))?[parseInt(a[1],16),parseInt(a[2],
16),parseInt(a[3],16)]:(a=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(c))?[parseInt(a[1]+a[1],16),parseInt(a[2]+a[2],16),parseInt(a[3]+a[3],16)]:/rgba\(0, 0, 0, 0\)/.exec(c)?p.transparent:p[f.trim(c).toLowerCase()]}function q(){var c=document.defaultView?document.defaultView.getComputedStyle(this,null):this.currentStyle,a={},b,d;if(c&&c.length&&c[0]&&c[c[0]])for(var e=c.length;e--;)b=c[e],"string"==typeof c[b]&&(d=b.replace(/\-(\w)/g,function(a,b){return b.toUpperCase()}),a[d]=c[b]);else for(b in c)"string"===
typeof c[b]&&(a[b]=c[b]);return a}function r(c){var a,b;for(a in c)b=c[a],(null==b||f.isFunction(b)||a in t||/scrollbar/.test(a)||!/color/i.test(a)&&isNaN(parseFloat(b)))&&delete c[a];return c}function u(c,a){var b={_:0},d;for(d in a)c[d]!=a[d]&&(b[d]=a[d]);return b}function l(c,a,b,d){"object"==typeof c&&(d=a,b=null,a=c,c=a.effect);f.isFunction(a)&&(d=a,b=null,a={});if("number"==typeof a||f.fx.speeds[a])d=b,b=a,a={};f.isFunction(b)&&(d=b,b=null);a=a||{};b=b||a.duration;b=f.fx.off?0:"number"==typeof b?
b:b in f.fx.speeds?f.fx.speeds[b]:f.fx.speeds._default;d=d||a.complete;return[c,a,b,d]}function m(c){return!c||"number"===typeof c||f.fx.speeds[c]||"string"===typeof c&&!f.effects[c]?!0:!1}f.effects={};f.each("backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor borderColor color outlineColor".split(" "),function(c,a){f.fx.step[a]=function(b){if(!b.colorInit){var c;c=b.elem;var e=a,h;do{h=f.curCSS(c,e);if(""!=h&&"transparent"!=h||f.nodeName(c,"body"))break;e="backgroundColor"}while(c=
c.parentNode);c=n(h);b.start=c;b.end=n(b.end);b.colorInit=!0}b.elem.style[a]="rgb("+Math.max(Math.min(parseInt(b.pos*(b.end[0]-b.start[0])+b.start[0],10),255),0)+","+Math.max(Math.min(parseInt(b.pos*(b.end[1]-b.start[1])+b.start[1],10),255),0)+","+Math.max(Math.min(parseInt(b.pos*(b.end[2]-b.start[2])+b.start[2],10),255),0)+")"}});var p={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],
darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],
maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0],transparent:[255,255,255]},s=["add","remove","toggle"],t={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};f.effects.animateClass=function(c,a,b,d){f.isFunction(b)&&(d=b,b=null);return this.queue(function(){var e=f(this),h=e.attr("style")||
" ",g=r(q.call(this)),k,l=e.attr("class")||"";f.each(s,function(a,b){if(c[b])e[b+"Class"](c[b])});k=r(q.call(this));e.attr("class",l);e.animate(u(g,k),{queue:!1,duration:a,easing:b,complete:function(){f.each(s,function(a,b){if(c[b])e[b+"Class"](c[b])});"object"==typeof e.attr("style")?(e.attr("style").cssText="",e.attr("style").cssText=h):e.attr("style",h);d&&d.apply(this,arguments);f.dequeue(this)}})})};f.fn.extend({_addClass:f.fn.addClass,addClass:function(c,a,b,d){return a?f.effects.animateClass.apply(this,
[{add:c},a,b,d]):this._addClass(c)},_removeClass:f.fn.removeClass,removeClass:function(c,a,b,d){return a?f.effects.animateClass.apply(this,[{remove:c},a,b,d]):this._removeClass(c)},_toggleClass:f.fn.toggleClass,toggleClass:function(c,a,b,d,e){return"boolean"==typeof a||a===k?b?f.effects.animateClass.apply(this,[a?{add:c}:{remove:c},b,d,e]):this._toggleClass(c,a):f.effects.animateClass.apply(this,[{toggle:c},a,b,d])},switchClass:function(c,a,b,d,e){return f.effects.animateClass.apply(this,[{add:a,
remove:c},b,d,e])}});f.extend(f.effects,{version:"@VERSION",save:function(c,a){for(var b=0;b<a.length;b++)null!==a[b]&&c.data("ec.storage."+a[b],c[0].style[a[b]])},restore:function(c,a){for(var b=0;b<a.length;b++)null!==a[b]&&c.css(a[b],c.data("ec.storage."+a[b]))},setMode:function(c,a){"toggle"==a&&(a=c.is(":hidden")?"show":"hide");return a},getBaseline:function(c,a){var b,d;switch(c[0]){case "top":b=0;break;case "middle":b=0.5;break;case "bottom":b=1;break;default:b=c[0]/a.height}switch(c[1]){case "left":d=
0;break;case "center":d=0.5;break;case "right":d=1;break;default:d=c[1]/a.width}return{x:d,y:b}},createWrapper:function(c){if(c.parent().is(".ui-effects-wrapper"))return c.parent();var a={width:c.outerWidth(!0),height:c.outerHeight(!0),"float":c.css("float")},b=f("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),d=document.activeElement;c.wrap(b);(c[0]===d||f.contains(c[0],d))&&f(d).focus();b=c.parent();"static"==c.css("position")?
(b.css({position:"relative"}),c.css({position:"relative"})):(f.extend(a,{position:c.css("position"),zIndex:c.css("z-index")}),f.each(["top","left","bottom","right"],function(b,d){a[d]=c.css(d);isNaN(parseInt(a[d],10))&&(a[d]="auto")}),c.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"}));return b.css(a).show()},removeWrapper:function(c){var a,b=document.activeElement;return c.parent().is(".ui-effects-wrapper")?(a=c.parent().replaceWith(c),(c[0]===b||f.contains(c[0],b))&&f(b).focus(),
a):c},setTransition:function(c,a,b,d){d=d||{};f.each(a,function(a,f){var g=c.cssUnit(f);0<g[0]&&(d[f]=g[0]*b+g[1])});return d}});f.fn.extend({effect:function(c,a,b,d){var e=l.apply(this,arguments),h={options:e[1],duration:e[2],callback:e[3]},e=h.options.mode,g=f.effects[c];return f.fx.off||!g?e?this[e](h.duration,h.callback):this.each(function(){h.callback&&h.callback.call(this)}):g.call(this,h)},_show:f.fn.show,show:function(c){if(m(c))return this._show.apply(this,arguments);var a=l.apply(this,arguments);
a[1].mode="show";return this.effect.apply(this,a)},_hide:f.fn.hide,hide:function(c){if(m(c))return this._hide.apply(this,arguments);var a=l.apply(this,arguments);a[1].mode="hide";return this.effect.apply(this,a)},__toggle:f.fn.toggle,toggle:function(c){if(m(c)||"boolean"===typeof c||f.isFunction(c))return this.__toggle.apply(this,arguments);var a=l.apply(this,arguments);a[1].mode="toggle";return this.effect.apply(this,a)},cssUnit:function(c){var a=this.css(c),b=[];f.each(["em","px","%","pt"],function(c,
e){0<a.indexOf(e)&&(b=[parseFloat(a),e])});return b}});f.easing.jswing=f.easing.swing;f.extend(f.easing,{def:"easeOutQuad",swing:function(c,a,b,d,e){return f.easing[f.easing.def](c,a,b,d,e)},easeInQuad:function(c,a,b,d,e){return d*(a/=e)*a+b},easeOutQuad:function(c,a,b,d,e){return-d*(a/=e)*(a-2)+b},easeInOutQuad:function(c,a,b,d,e){return 1>(a/=e/2)?d/2*a*a+b:-d/2*(--a*(a-2)-1)+b},easeInCubic:function(c,a,b,d,e){return d*(a/=e)*a*a+b},easeOutCubic:function(c,a,b,d,e){return d*((a=a/e-1)*a*a+1)+b},
easeInOutCubic:function(c,a,b,d,e){return 1>(a/=e/2)?d/2*a*a*a+b:d/2*((a-=2)*a*a+2)+b},easeInQuart:function(c,a,b,d,e){return d*(a/=e)*a*a*a+b},easeOutQuart:function(c,a,b,d,e){return-d*((a=a/e-1)*a*a*a-1)+b},easeInOutQuart:function(c,a,b,d,e){return 1>(a/=e/2)?d/2*a*a*a*a+b:-d/2*((a-=2)*a*a*a-2)+b},easeInQuint:function(c,a,b,d,e){return d*(a/=e)*a*a*a*a+b},easeOutQuint:function(c,a,b,d,e){return d*((a=a/e-1)*a*a*a*a+1)+b},easeInOutQuint:function(c,a,b,d,e){return 1>(a/=e/2)?d/2*a*a*a*a*a+b:d/2*((a-=
2)*a*a*a*a+2)+b},easeInSine:function(c,a,b,d,e){return-d*Math.cos(a/e*(Math.PI/2))+d+b},easeOutSine:function(c,a,b,d,e){return d*Math.sin(a/e*(Math.PI/2))+b},easeInOutSine:function(c,a,b,d,e){return-d/2*(Math.cos(Math.PI*a/e)-1)+b},easeInExpo:function(c,a,b,d,e){return 0==a?b:d*Math.pow(2,10*(a/e-1))+b},easeOutExpo:function(c,a,b,d,e){return a==e?b+d:d*(-Math.pow(2,-10*a/e)+1)+b},easeInOutExpo:function(c,a,b,d,e){return 0==a?b:a==e?b+d:1>(a/=e/2)?d/2*Math.pow(2,10*(a-1))+b:d/2*(-Math.pow(2,-10*--a)+
2)+b},easeInCirc:function(c,a,b,d,e){return-d*(Math.sqrt(1-(a/=e)*a)-1)+b},easeOutCirc:function(c,a,b,d,e){return d*Math.sqrt(1-(a=a/e-1)*a)+b},easeInOutCirc:function(c,a,b,d,e){return 1>(a/=e/2)?-d/2*(Math.sqrt(1-a*a)-1)+b:d/2*(Math.sqrt(1-(a-=2)*a)+1)+b},easeInElastic:function(c,a,b,d,e){c=1.70158;var f=0,g=d;if(0==a)return b;if(1==(a/=e))return b+d;f||(f=0.3*e);g<Math.abs(d)?(g=d,c=f/4):c=f/(2*Math.PI)*Math.asin(d/g);return-(g*Math.pow(2,10*(a-=1))*Math.sin(2*(a*e-c)*Math.PI/f))+b},easeOutElastic:function(c,
a,b,d,e){c=1.70158;var f=0,g=d;if(0==a)return b;if(1==(a/=e))return b+d;f||(f=0.3*e);g<Math.abs(d)?(g=d,c=f/4):c=f/(2*Math.PI)*Math.asin(d/g);return g*Math.pow(2,-10*a)*Math.sin(2*(a*e-c)*Math.PI/f)+d+b},easeInOutElastic:function(c,a,b,d,e){c=1.70158;var f=0,g=d;if(0==a)return b;if(2==(a/=e/2))return b+d;f||(f=0.3*1.5*e);g<Math.abs(d)?(g=d,c=f/4):c=f/(2*Math.PI)*Math.asin(d/g);return 1>a?-0.5*g*Math.pow(2,10*(a-=1))*Math.sin(2*(a*e-c)*Math.PI/f)+b:0.5*g*Math.pow(2,-10*(a-=1))*Math.sin(2*(a*e-c)*Math.PI/
f)+d+b},easeInBack:function(c,a,b,d,e,f){f==k&&(f=1.70158);return d*(a/=e)*a*((f+1)*a-f)+b},easeOutBack:function(c,a,b,d,e,f){f==k&&(f=1.70158);return d*((a=a/e-1)*a*((f+1)*a+f)+1)+b},easeInOutBack:function(c,a,b,d,e,f){f==k&&(f=1.70158);return 1>(a/=e/2)?d/2*a*a*(((f*=1.525)+1)*a-f)+b:d/2*((a-=2)*a*(((f*=1.525)+1)*a+f)+2)+b},easeInBounce:function(c,a,b,d,e){return d-f.easing.easeOutBounce(c,e-a,0,d,e)+b},easeOutBounce:function(c,a,b,d,e){return(a/=e)<1/2.75?7.5625*d*a*a+b:a<2/2.75?d*(7.5625*(a-=
1.5/2.75)*a+0.75)+b:a<2.5/2.75?d*(7.5625*(a-=2.25/2.75)*a+0.9375)+b:d*(7.5625*(a-=2.625/2.75)*a+0.984375)+b},easeInOutBounce:function(c,a,b,d,e){return a<e/2?0.5*f.easing.easeInBounce(c,2*a,0,d,e)+b:0.5*f.easing.easeOutBounce(c,2*a-e,0,d,e)+0.5*d+b}})}(jQuery);
