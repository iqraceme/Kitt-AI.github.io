webpackJsonp([0],{0:function(t,exports,e){e(1),e(17),t.exports=e(344)},1:function(t,exports){},344:function(t,exports,e){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}var c=e(345),o=n(c);e(346);var r=e(348),a=n(r);(0,o.default)(document).ready(function(){var t=(0,o.default)(".brand-circle-wrap"),n=(0,o.default)(".controls-list"),c=[[{src:e(349),text:"Philips"},{src:e(350),text:"Raspberry Pi"},{src:e(351),text:"Nest"}],[{src:e(352),text:"Best Buy"},{src:e(353),text:"Yelp"},{src:e(354),text:"Spotify"},{src:e(355),text:"Uber"}],[{src:e(356),text:"Twilio"},{src:e(357),text:"Amazon Echo"},{src:e(358),text:"Facebook Messenger"},{src:e(359),text:"Slack"}]],r=function(){(0,o.default)(".circle-block-md").remove(),t.removeClass("doubled")},s=function(e){e.length>3&&(0,o.default)(".brand-circle-wrap").addClass("doubled"),e.forEach(function(e,n){var c=(0,o.default)("<div/>",{class:"circle-block circle-block-md circle-"+n,"data-text":e.text}).appendTo(t);(0,o.default)("<img>",{class:"img-fluid",alt:"circle-img",src:e.src}).appendTo(c)})},i=function(t){r(),s(c[t])},l=function(t){n.find("a").removeClass("active"),n.find(".carousel-control-item").eq(t).addClass("active")};i(0);var u=new a.default(".swiper-container",{simulateTouch:!1,onSlideChangeEnd:function(t){l(t.activeIndex),i(t.activeIndex)}});(0,o.default)(".carousel-control-item").click(function(t){t.preventDefault();var e=(0,o.default)(t.target).attr("data-target");l(e),u.slideTo(e)}),(0,o.default)(".carousel-next-btn").click(function(t){t.preventDefault(),u.slideNext()}),(0,o.default)(".carousel-prev-btn").click(function(t){t.preventDefault(),u.slidePrev()})})},349:function(t,exports,e){t.exports=e.p+"c534q6d.png"},350:function(t,exports,e){t.exports=e.p+"mwa9nym.svg"},351:function(t,exports,e){t.exports=e.p+"haaqig8.png"},352:function(t,exports,e){t.exports=e.p+"xgjbb0f.svg"},353:function(t,exports,e){t.exports=e.p+"p9p00s4.svg"},354:function(t,exports,e){t.exports=e.p+"30fezzd.png"},355:function(t,exports,e){t.exports=e.p+"kd8d6h5.png"},356:function(t,exports,e){t.exports=e.p+"28bsni0.svg"},357:function(t,exports,e){t.exports=e.p+"9799vmd.png"},358:function(t,exports,e){t.exports=e.p+"35dv4vm.svg"},359:function(t,exports,e){t.exports=e.p+"u270t82.svg"}});