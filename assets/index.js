!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=0)}({0:function(t,e,n){n("F1kH"),t.exports=n("iTlA")},F1kH:function(t,e){document.addEventListener("DOMContentLoaded",function(){var t=document.querySelectorAll("[data-scroll]");t.length>0&&Array.from(t).forEach(function(t){t.addEventListener("click",function(e){e.preventDefault();var n=document.querySelector(t.dataset.scroll);n&&n.scrollIntoView({behavior:"smooth"})})})})},iTlA:function(t,e){}});
//# sourceMappingURL=app.js.map

 	
 $('a[data-scroll]').click(function(e) {
    e.preventDefault();
    
	var target = ( '#' + $(this).data('scroll') );
    var $target = $(target);
    
	$('html, body').stop().animate({
	    'scrollTop': $target.offset().top
	}, 700, 'swing');
}); 