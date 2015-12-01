/**
 * fontfaceobserver Copyright (c) 2014 - Bram Stein
 * https://github.com/bramstein/fontfaceobserver/
 */

(function(){'use strict';function f(a){function b(){document.body?a():setTimeout(b,0)}b()};function h(a){this.a=document.createElement("div");this.a.setAttribute("aria-hidden","true");this.a.appendChild(document.createTextNode(a));this.b=document.createElement("span");this.c=document.createElement("span");this.h=document.createElement("span");this.g=document.createElement("span");this.f=-1;this.b.style.cssText="display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;";this.c.style.cssText="display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;";
this.g.style.cssText="display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;";this.h.style.cssText="display:inline-block;width:200%;height:200%;";this.b.appendChild(this.h);this.c.appendChild(this.g);this.a.appendChild(this.b);this.a.appendChild(this.c)}function p(a,b,c){a.a.style.cssText="min-width:20px;min-height:20px;display:inline-block;position:absolute;width:auto;margin:0;padding:0;top:-999px;left:-999px;white-space:nowrap;font-size:100px;font-family:"+b+";"+c}
function u(a){var b=a.a.offsetWidth,c=b+100;a.g.style.width=c+"px";a.c.scrollLeft=c;a.b.scrollLeft=a.b.scrollWidth+100;return a.f!==b?(a.f=b,!0):!1}function v(a,b){a.b.addEventListener("scroll",function(){u(a)&&null!==a.a.parentNode&&b(a.f)},!1);a.c.addEventListener("scroll",function(){u(a)&&null!==a.a.parentNode&&b(a.f)},!1);u(a)};var A=[];function B(a){A.push(a);1===A.length&&C()}function D(){for(;A.length;)A[0](),A.shift()}if(window.MutationObserver){var E=document.createElement("div");(new MutationObserver(D)).observe(E,{attributes:!0});var C=function(){E.setAttribute("x",0)}}else C=function(){setTimeout(D)};function F(a){this.a=G;this.b=void 0;this.c=[];var b=this;try{a(function(a){b.resolve(a)},function(a){b.reject(a)})}catch(c){b.reject(c)}}var G=2;function H(a){return new F(function(b,c){c(a)})}function I(a){return new F(function(b){b(a)})}
F.prototype.resolve=function(a){var b=this;if(b.a===G){if(a===b)throw new TypeError("Promise settled with itself.");var c=!1;try{var e=a&&a.then;if(null!==a&&"object"===typeof a&&"function"===typeof e){e.call(a,function(a){c||b.resolve(a);c=!0},function(a){c||b.reject(a);c=!0});return}}catch(d){c||b.reject(d);return}b.a=0;b.b=a;J(b)}};F.prototype.reject=function(a){if(this.a===G){if(a===this)throw new TypeError("Promise settled with itself.");this.a=1;this.b=a;J(this)}};
function J(a){B(function(){if(a.a!==G)for(;a.c.length;){var b=a.c.shift(),c=b[0],e=b[1],d=b[2],b=b[3];try{0===a.a?"function"===typeof c?d(c.call(void 0,a.b)):d(a.b):1===a.a&&("function"===typeof e?d(e.call(void 0,a.b)):b(a.b))}catch(g){b(g)}}})}F.prototype.catch=function(a){return this.then(void 0,a)};F.prototype.then=function(a,b){var c=this;return new F(function(e,d){c.c.push([a,b,e,d]);J(c)})};
function K(a){return new F(function(b,c){function e(c){return function(e){g[c]=e;d+=1;d===a.length&&b(g)}}var d=0,g=[];0===a.length&&b(g);for(var k=0;k<a.length;k+=1)a[k].then(e(k),c)})}function L(a){return new F(function(b,c){for(var e=0;e<a.length;e+=1)a[e].then(b,c)})}
if(window.Promise){var M=window.Promise;M.prototype.then=window.Promise.prototype.then;M.prototype.catch=window.Promise.prototype["catch"];M.all=window.Promise.all;M.race=window.Promise.race;M.resolve=window.Promise.resolve;M.reject=window.Promise.reject}else M=F,M.prototype.then=F.prototype.then,M.prototype.catch=F.prototype.catch,M.all=K,M.race=L,M.resolve=I,M.reject=H;function N(a,b){var c=b||{};this.family=a;this.style=c.style||"normal";this.variant=c.variant||"normal";this.weight=c.weight||"normal";this.stretch=c.stretch||"stretch";this.featureSettings=c.featureSettings||"normal"}var O=null;
N.prototype.a=function(a,b){var c=a||"BESbswy",e=b||3E3,d="font-style:"+this.style+";font-variant:"+this.variant+";font-weight:"+this.weight+";font-stretch:"+this.stretch+";font-feature-settings:"+this.featureSettings+";-moz-font-feature-settings:"+this.featureSettings+";-webkit-font-feature-settings:"+this.featureSettings+";",g=document.createElement("div"),k=new h(c),q=new h(c),r=new h(c),l=-1,m=-1,n=-1,w=-1,x=-1,y=-1,t=this;return new M(function(a,b){function c(){null!==g.parentNode&&g.parentNode.removeChild(g)}
function z(){if(-1!==l&&-1!==m||-1!==l&&-1!==n||-1!==m&&-1!==n)if(l===m||l===n||m===n){if(null===O){var b=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);O=!!b&&(536>parseInt(b[1],10)||536===parseInt(b[1],10)&&11>=parseInt(b[2],10))}O?l===w&&m===w&&n===w||l===x&&m===x&&n===x||l===y&&m===y&&n===y||(c(),a(t)):(c(),a(t))}}f(function(){function a(){if(Date.now()-P>=e)c(),b(t);else{var d=document.hidden;if(!0===d||void 0===d)l=k.a.offsetWidth,m=q.a.offsetWidth,n=r.a.offsetWidth,
z();setTimeout(a,50)}}var P=Date.now();p(k,"sans-serif",d);p(q,"serif",d);p(r,"monospace",d);g.appendChild(k.a);g.appendChild(q.a);g.appendChild(r.a);document.body.appendChild(g);w=k.a.offsetWidth;x=q.a.offsetWidth;y=r.a.offsetWidth;a();v(k,function(a){l=a;z()});p(k,t.family+",sans-serif",d);v(q,function(a){m=a;z()});p(q,t.family+",serif",d);v(r,function(a){n=a;z()});p(r,t.family+",monospace",d)})})};window.FontFaceObserver=N;window.FontFaceObserver.prototype.check=N.prototype.a;}());

/**
 * Fonts are loaded through `@font-face` rules in the CSS whenever an element
 * references them. FontFaceObserver creates a referencing element to trigger
 * the font request, and listens for font load events. When all 3 fonts are
 * loaded, we enable them by adding a class to the `html` element.
 */

(function(w){
  // If the class is already set, we're good.
  if(w.document.documentElement.className.indexOf("has-fonts-loaded") > -1 ) {
    return;
  }
  var fontA = new w.FontFaceObserver("Merriweather", {
    weight: 400
  });
  w.Promise
    .all([fontA.check()])
    .then(function() {
      w.document.documentElement.className += " has-fonts-loaded";
    });
}(this));