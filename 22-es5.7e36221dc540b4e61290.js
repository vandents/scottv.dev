function asyncGeneratorStep(t,n,o,e,r,i,a){try{var s=t[i](a),l=s.value}catch(c){return void o(c)}s.done?n(l):Promise.resolve(l).then(e,r)}function _asyncToGenerator(t){return function(){var n=this,o=arguments;return new Promise(function(e,r){var i=t.apply(n,o);function a(t){asyncGeneratorStep(i,e,r,a,s,"next",t)}function s(t){asyncGeneratorStep(i,e,r,a,s,"throw",t)}a(void 0)})}}function _defineProperties(t,n){for(var o=0;o<n.length;o++){var e=n[o];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}function _createClass(t,n,o){return n&&_defineProperties(t.prototype,n),o&&_defineProperties(t,o),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{K9Nc:function(t,n,o){"use strict";o.r(n),o.d(n,"ion_app",function(){return c}),o.d(n,"ion_buttons",function(){return u}),o.d(n,"ion_content",function(){return g}),o.d(n,"ion_footer",function(){return h}),o.d(n,"ion_header",function(){return f}),o.d(n,"ion_router_outlet",function(){return m}),o.d(n,"ion_title",function(){return v}),o.d(n,"ion_toolbar",function(){return w});var e=o("mLBW"),r=o("TJLY"),i=(o("9Z7W"),o("Jbqe")),a=o("EQwm"),s=o("1hGh"),l=o("7rGv"),c=function(){function t(t){Object(e.m)(this,t)}var n=t.prototype;return n.componentDidLoad=function(){Object(a.a)(function(){var t=Object(r.f)(window,"hybrid");r.b.getBoolean("_testing")||o.e(9).then(o.bind(null,"066j")).then(function(t){return t.startTapClick(r.b)}),r.b.getBoolean("statusTap",t)&&o.e(7).then(o.bind(null,"xPG6")).then(function(t){return t.startStatusTap()}),r.b.getBoolean("inputShims",d())&&o.e(6).then(o.bind(null,"sMw3")).then(function(t){return t.startInputShims(r.b)}),r.b.getBoolean("hardwareBackButton",t)&&o.e(5).then(o.bind(null,"U/P7")).then(function(t){return t.startHardwareBackButton()}),o.e(4).then(o.bind(null,"3g2N")).then(function(t){return t.startFocusVisible()})})},n.hostData=function(){var t;return{class:(t={},t[Object(e.e)(this)]=!0,t["ion-page"]=!0,t["force-statusbar-padding"]=r.b.getBoolean("_forceStatusbarPadding"),t)}},n.render=function(){return Object(e.i)(e.a,this.hostData())},_createClass(t,[{key:"el",get:function(){return Object(e.f)(this)}}],[{key:"style",get:function(){return"html.plt-mobile ion-app{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ion-app.force-statusbar-padding{--ion-safe-area-top:20px}"}}]),t}(),d=function(){return Object(r.f)(window,"ios")&&Object(r.f)(window,"mobile")},u=function(){function t(t){Object(e.m)(this,t)}var n=t.prototype;return n.hostData=function(){var t;return{class:(t={},t[Object(e.e)(this)]=!0,t)}},n.render=function(){return Object(e.i)(e.a,this.hostData())},_createClass(t,null,[{key:"style",get:function(){return".sc-ion-buttons-md-h{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-webkit-transform:translateZ(0);transform:translateZ(0);z-index:99}.sc-ion-buttons-md-s  ion-button {margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;--padding-top:0;--padding-bottom:0;--padding-start:8px;--padding-end:8px;--box-shadow:none;margin-left:2px;margin-right:2px;height:32px;font-size:14px;font-weight:500}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-buttons-md-s  ion-button {margin-left:unset;margin-right:unset;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px}}.sc-ion-buttons-md-s  ion-button:not(.button-round) {--border-radius:2px}.sc-ion-buttons-md-h.ion-color.sc-ion-buttons-md-s  .button , .ion-color .sc-ion-buttons-md-h.sc-ion-buttons-md-s  .button {--color:initial;--color-focused:var(--ion-color-contrast);--color-hover:var(--ion-color-contrast);--background-hover:rgba(var(--ion-color-contrast-rgb),0.08);--background-focused:rgba(var(--ion-color-contrast-rgb),0.24)}.sc-ion-buttons-md-h.ion-color.sc-ion-buttons-md-s  .button-solid , .ion-color .sc-ion-buttons-md-h.sc-ion-buttons-md-s  .button-solid {--background:var(--ion-color-contrast);--background-activated:var(--ion-color-contrast);--background-focused:var(--ion-color-shade);--background-hover:var(--ion-color-tint);--color:var(--ion-color-base);--color-focused:var(--ion-color-base);--color-hover:var(--ion-color-base)}.sc-ion-buttons-md-h.ion-color.sc-ion-buttons-md-s  .button-outline , .ion-color .sc-ion-buttons-md-h.sc-ion-buttons-md-s  .button-outline {--border-color:var(--ion-color-contrast)}.sc-ion-buttons-md-s  .button-has-icon-only.button-clear {--padding-top:12px;--padding-end:12px;--padding-bottom:12px;--padding-start:12px;--border-radius:50%;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;width:48px;height:48px}.sc-ion-buttons-md-s  .button {--background-hover:rgba(66,66,66,0.08)}.sc-ion-buttons-md-s  .button-solid {--color:var(--ion-toolbar-background,var(--ion-background-color,#fff));--color-activated:var(--ion-toolbar-background,var(--ion-background-color,#fff));--background:var(--ion-toolbar-color,var(--ion-text-color,#424242));--background-activated:var(--ion-toolbar-color,var(--ion-text-color,#424242));--background-focused:var(--ion-toolbar-color-activated,#4a4a4a);--background-hover:rgba(66,66,66,0.92)}.sc-ion-buttons-md-s  .button-outline {--background:transparent;--background-activated:transparent;--border-color:var(--ion-toolbar-color,var(--ion-text-color,#424242));--background-focused:rgba(66,66,66,0.1)}.sc-ion-buttons-md-s  .button-clear , .sc-ion-buttons-md-s  .button-outline {--color:initial;--color-activated:currentColor;--color-focused:var(--ion-toolbar-color,var(--ion-text-color,#424242))}.sc-ion-buttons-md-s  .button-clear {--background:transparent;--background-focused:rgba(66,66,66,0.1)}.sc-ion-buttons-md-s  ion-icon[slot=start] {margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;margin-right:.3em;font-size:1.4em}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-buttons-md-s  ion-icon[slot=start] {margin-right:unset;-webkit-margin-end:.3em;margin-inline-end:.3em}}.sc-ion-buttons-md-s  ion-icon[slot=end] {margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;margin-left:.4em;font-size:1.4em}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-buttons-md-s  ion-icon[slot=end] {margin-left:unset;-webkit-margin-start:.4em;margin-inline-start:.4em}}.sc-ion-buttons-md-s  ion-icon[slot=icon-only] {padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;font-size:1.8em}"}}]),t}(),g=function(){function t(t){Object(e.m)(this,t),this.isScrolling=!1,this.lastScroll=0,this.queued=!1,this.cTop=-1,this.cBottom=-1,this.detail={scrollTop:0,scrollLeft:0,type:"scroll",event:void 0,startX:0,startY:0,startTimeStamp:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,timeStamp:0,data:void 0,isScrolling:!0},this.fullscreen=!1,this.scrollX=!1,this.scrollY=!0,this.scrollEvents=!1,this.ionScrollStart=Object(e.d)(this,"ionScrollStart",7),this.ionScroll=Object(e.d)(this,"ionScroll",7),this.ionScrollEnd=Object(e.d)(this,"ionScrollEnd",7)}var n=t.prototype;return n.componentWillLoad=function(){if(void 0===this.forceOverscroll){var t=Object(e.e)(this);this.forceOverscroll="ios"===t&&Object(r.f)(window,"mobile")}},n.componentDidLoad=function(){this.resize()},n.componentDidUnload=function(){this.onScrollEnd()},n.onClick=function(t){this.isScrolling&&(t.preventDefault(),t.stopPropagation())},n.resize=function(){this.fullscreen?Object(e.g)(this.readDimensions.bind(this)):0===this.cTop&&0===this.cBottom||(this.cTop=this.cBottom=0,this.el.forceUpdate())},n.readDimensions=function(){var t=p(this.el),n=Math.max(this.el.offsetTop,0),o=Math.max(t.offsetHeight-n-this.el.offsetHeight,0);(n!==this.cTop||o!==this.cBottom)&&(this.cTop=n,this.cBottom=o,this.el.forceUpdate())},n.onScroll=function(t){var n=this,o=Date.now(),r=!this.isScrolling;this.lastScroll=o,r&&this.onScrollStart(),!this.queued&&this.scrollEvents&&(this.queued=!0,Object(e.g)(function(o){n.queued=!1,n.detail.event=t,b(n.detail,n.scrollEl,o,r),n.ionScroll.emit(n.detail)}))},n.getScrollElement=function(){return Promise.resolve(this.scrollEl)},n.scrollToTop=function(t){return void 0===t&&(t=0),this.scrollToPoint(void 0,0,t)},n.scrollToBottom=function(t){return void 0===t&&(t=0),this.scrollToPoint(void 0,this.scrollEl.scrollHeight-this.scrollEl.clientHeight,t)},n.scrollByPoint=function(t,n,o){return this.scrollToPoint(t+this.scrollEl.scrollLeft,n+this.scrollEl.scrollTop,o)},n.scrollToPoint=function(){var t=_asyncToGenerator(regeneratorRuntime.mark(function t(n,o,e){var r,i,a,s,l,c,d,u,g;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(void 0===e&&(e=0),r=this.scrollEl,!(e<32)){t.next=4;break}return t.abrupt("return",(null!=o&&(r.scrollTop=o),void(null!=n&&(r.scrollLeft=n))));case 4:return a=0,s=new Promise(function(t){return i=t}),l=r.scrollTop,c=r.scrollLeft,d=null!=o?o-l:0,u=null!=n?n-c:0,g=function t(n){var o=Math.min(1,(n-a)/e)-1,s=Math.pow(o,3)+1;0!==d&&(r.scrollTop=Math.floor(s*d+l)),0!==u&&(r.scrollLeft=Math.floor(s*u+c)),s<1?requestAnimationFrame(t):i()},t.abrupt("return",(requestAnimationFrame(function(t){a=t,g(t)}),s));case 7:case"end":return t.stop()}},t,this)}));return function(n,o,e){return t.apply(this,arguments)}}(),n.onScrollStart=function(){var t=this;this.isScrolling=!0,this.ionScrollStart.emit({isScrolling:!0}),this.watchDog&&clearInterval(this.watchDog),this.watchDog=setInterval(function(){t.lastScroll<Date.now()-120&&t.onScrollEnd()},100)},n.onScrollEnd=function(){clearInterval(this.watchDog),this.watchDog=null,this.isScrolling&&(this.isScrolling=!1,this.ionScrollEnd.emit({isScrolling:!1}))},n.render=function(){var t,n=this,o=Object(e.e)(this),a=this.scrollX,s=this.scrollY,l=this.forceOverscroll,c="ios"===o&&r.b.getBoolean("experimentalTransitionShadow",!1);return this.resize(),Object(e.i)(e.a,{class:Object.assign({},Object(i.a)(this.color),(t={},t[o]=!0,t["content-sizing"]=Object(i.c)("ion-popover",this.el),t.overscroll=!!this.forceOverscroll,t)),style:{"--offset-top":this.cTop+"px","--offset-bottom":this.cBottom+"px"}},Object(e.i)("div",{class:{"inner-scroll":!0,"scroll-x":a,"scroll-y":s,overscroll:(a||s)&&!!l},ref:function(t){return n.scrollEl=t},onScroll:function(t){return n.onScroll(t)}},Object(e.i)("slot",null)),c?Object(e.i)("div",{class:"transition-effect"},Object(e.i)("div",{class:"transition-cover"}),Object(e.i)("div",{class:"transition-shadow"})):null,Object(e.i)("slot",{name:"fixed"}))},_createClass(t,[{key:"el",get:function(){return Object(e.f)(this)}}],[{key:"style",get:function(){return':host{--background:var(--ion-background-color,#fff);--color:var(--ion-text-color,#000);--padding-top:0px;--padding-bottom:0px;--padding-start:0px;--padding-end:0px;--keyboard-offset:0px;--offset-top:0px;--offset-bottom:0px;--overflow:auto;display:block;position:relative;-ms-flex:1;flex:1;width:100%;height:100%;margin:0!important;padding:0!important;font-family:var(--ion-font-family,inherit);contain:size style}:host(.ion-color) .inner-scroll{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.outer-content){--background:var(--ion-color-step-50,#f2f2f2)}.inner-scroll{left:0;right:0;top:calc(var(--offset-top) * -1);bottom:calc(var(--offset-bottom) * -1);padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:calc(var(--padding-top) + var(--offset-top));padding-bottom:calc(var(--padding-bottom) + var(--keyboard-offset) + var(--offset-bottom));position:absolute;background:var(--background);color:var(--color);-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.inner-scroll{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.scroll-x,.scroll-y{-webkit-overflow-scrolling:touch;will-change:scroll-position;-ms-scroll-chaining:none;overscroll-behavior:contain}.scroll-y{-ms-touch-action:pan-y;touch-action:pan-y;overflow-y:var(--overflow)}.scroll-x{-ms-touch-action:pan-x;touch-action:pan-x;overflow-x:var(--overflow)}.scroll-x.scroll-y{-ms-touch-action:auto;touch-action:auto}.overscroll:after,.overscroll:before{position:absolute;width:1px;height:1px;content:""}.overscroll:before{bottom:-1px}.overscroll:after{top:-1px}:host(.content-sizing){contain:none}:host(.content-sizing) .inner-scroll{position:relative}.transition-effect{left:-100%;opacity:0}.transition-cover,.transition-effect{position:absolute;width:100%;height:100%}.transition-cover{right:0;background:#000;opacity:.1}.transition-shadow{display:block;position:absolute;right:0;width:10px;height:100%;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAgCAYAAAAIXrg4AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTE3MDgzRkQ5QTkyMTFFOUEwNzQ5MkJFREE1NUY2MjQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTE3MDgzRkU5QTkyMTFFOUEwNzQ5MkJFREE1NUY2MjQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxMTcwODNGQjlBOTIxMUU5QTA3NDkyQkVEQTU1RjYyNCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxMTcwODNGQzlBOTIxMUU5QTA3NDkyQkVEQTU1RjYyNCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PmePEuQAAABNSURBVHjaYvz//z8DIxAwMDAwATGMhmFmPDQuOSZks0AMmoJBaQHjkPfB0Lfg/2gQjVow+HPy/yHvg9GiYjQfjMbBqAWjFgy/4hogwADYqwdzxy5BuwAAAABJRU5ErkJggg==);background-repeat:repeat-y;background-size:10px 16px}'}}]),t}(),p=function(t){return t.closest("ion-tabs")||t.closest("ion-app,ion-page,.ion-page,page-inner")||function(t){return t.parentElement?t.parentElement:t.parentNode&&t.parentNode.host?t.parentNode.host:null}(t)},b=function(t,n,o,e){var r=t.currentX,i=t.currentY,a=n.scrollLeft,s=n.scrollTop,l=o-t.timeStamp;if(e&&(t.startTimeStamp=o,t.startX=a,t.startY=s,t.velocityX=t.velocityY=0),t.timeStamp=o,t.currentX=t.scrollLeft=a,t.currentY=t.scrollTop=s,t.deltaX=a-t.startX,t.deltaY=s-t.startY,l>0&&l<100){var c=(s-i)/l;t.velocityX=(a-r)/l*.7+.3*t.velocityX,t.velocityY=.7*c+.3*t.velocityY}},h=function(){function t(t){Object(e.m)(this,t),this.translucent=!1}var n=t.prototype;return n.hostData=function(){var t,n=Object(e.e)(this);return{class:(t={},t[n]=!0,t["footer-"+n]=!0,t["footer-translucent"]=this.translucent,t["footer-translucent-"+n]=this.translucent,t)}},n.render=function(){return Object(e.i)(e.a,this.hostData())},_createClass(t,null,[{key:"style",get:function(){return'ion-footer{display:block;position:relative;-ms-flex-order:1;order:1;width:100%;z-index:10}ion-footer ion-toolbar:last-child{padding-bottom:var(--ion-safe-area-bottom,0)}.footer-md:before{left:0;top:-2px;bottom:auto;background-position:left 0 top 0;position:absolute;width:100%;height:2px;background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAHBAMAAADzDtBxAAAAD1BMVEUAAAAAAAAAAAAAAAAAAABPDueNAAAABXRSTlMUCS0gBIh/TXEAAAAaSURBVAjXYxCEAgY4UIICBmMogMsgFLtAAQCNSwXZKOdPxgAAAABJRU5ErkJggg==");background-repeat:repeat-x;content:""}:host-context([dir=rtl]) .footer-md:before,[dir=rtl] .footer-md:before{left:unset;right:unset;right:0;background-position:right 0 top 0}.footer-md[no-border]:before{display:none}'}}]),t}(),f=function(){function t(t){Object(e.m)(this,t),this.translucent=!1}var n=t.prototype;return n.hostData=function(){var t,n=Object(e.e)(this);return{class:(t={},t[n]=!0,t["header-"+n]=!0,t["header-translucent"]=this.translucent,t["header-translucent-"+n]=this.translucent,t)}},n.render=function(){return Object(e.i)(e.a,this.hostData())},_createClass(t,null,[{key:"style",get:function(){return'ion-header{display:block;position:relative;-ms-flex-order:-1;order:-1;width:100%;z-index:10}ion-header ion-toolbar:first-child{padding-top:var(--ion-safe-area-top,0)}.header-md:after{left:0;bottom:-5px;background-position:left 0 top -2px;position:absolute;width:100%;height:5px;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAHBAMAAADzDtBxAAAAD1BMVEUAAAAAAAAAAAAAAAAAAABPDueNAAAABXRSTlMUCS0gBIh/TXEAAAAaSURBVAjXYxCEAgY4UIICBmMogMsgFLtAAQCNSwXZKOdPxgAAAABJRU5ErkJggg==);background-repeat:repeat-x;content:""}:host-context([dir=rtl]) .header-md:after,[dir=rtl] .header-md:after{left:unset;right:unset;right:0;background-position:right 0 top -2px}.header-md[no-border]:after{display:none}'}}]),t}(),m=function(){function t(t){Object(e.m)(this,t),this.mode=Object(e.e)(this),this.animated=!0,this.ionNavWillLoad=Object(e.d)(this,"ionNavWillLoad",7),this.ionNavWillChange=Object(e.d)(this,"ionNavWillChange",3),this.ionNavDidChange=Object(e.d)(this,"ionNavDidChange",3)}var n=t.prototype;return n.swipeHandlerChanged=function(){this.gesture&&this.gesture.setDisabled(void 0===this.swipeHandler)},n.componentWillLoad=function(){this.ionNavWillLoad.emit()},n.componentDidLoad=function(){var t=_asyncToGenerator(regeneratorRuntime.mark(function t(){var n=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([o.e(0),o.e(3)]).then(o.bind(null,"Hofg"));case 2:t.t0=this.el,t.t1=function(){return!!n.swipeHandler&&n.swipeHandler.canStart()},t.t2=function(){return n.swipeHandler&&n.swipeHandler.onStart()},t.t3=function(t){return n.ani&&n.ani.progressStep(t)},t.t4=function(t,o,e){n.ani&&n.ani.progressEnd(t,o,e),n.swipeHandler&&n.swipeHandler.onEnd(t)},this.gesture=t.sent.createSwipeBackGesture(t.t0,t.t1,t.t2,t.t3,t.t4),this.swipeHandlerChanged();case 9:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),n.componentDidUnload=function(){this.activeEl=this.activeComponent=void 0,this.gesture&&(this.gesture.destroy(),this.gesture=void 0)},n.commit=function(){var t=_asyncToGenerator(regeneratorRuntime.mark(function t(n,o,e){var r,i;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.lock();case 2:return r=t.sent,i=!1,t.prev=4,t.next=7,this.transition(n,o,e);case 7:i=t.sent,t.next=13;break;case 10:t.prev=10,t.t0=t.catch(4),console.error(t.t0);case 13:return t.abrupt("return",(r(),i));case 14:case"end":return t.stop()}},t,this,[[4,10]])}));return function(n,o,e){return t.apply(this,arguments)}}(),n.setRouteId=function(){var t=_asyncToGenerator(regeneratorRuntime.mark(function t(n,o,e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.setRoot(n,o,{duration:"root"===e?0:void 0,direction:"back"===e?"back":"forward"});case 2:return t.t0=t.sent,t.t1=this.activeEl,t.abrupt("return",{changed:t.t0,element:t.t1});case 5:case"end":return t.stop()}},t,this)}));return function(n,o,e){return t.apply(this,arguments)}}(),n.getRouteId=function(){var t=_asyncToGenerator(regeneratorRuntime.mark(function t(){var n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=this.activeEl,t.abrupt("return",n?{id:n.tagName,element:n}:void 0);case 2:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),n.setRoot=function(){var t=_asyncToGenerator(regeneratorRuntime.mark(function t(n,o,e){var r,i;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(this.activeComponent!==n){t.next=2;break}return t.abrupt("return",!1);case 2:return r=this.activeEl,t.next=5,Object(s.a)(this.delegate,this.el,n,["ion-page","ion-page-invisible"],o);case 5:return i=t.sent,this.activeComponent=n,this.activeEl=i,t.next=10,this.commit(i,r,e);case 10:return t.next=12,Object(s.b)(this.delegate,r);case 12:return t.abrupt("return",!0);case 13:case"end":return t.stop()}},t,this)}));return function(n,o,e){return t.apply(this,arguments)}}(),n.transition=function(){var t=_asyncToGenerator(regeneratorRuntime.mark(function t(n,o,e){var i,a,s,c,d=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(void 0===e&&(e={}),o!==n){t.next=3;break}return t.abrupt("return",!1);case 3:return this.ionNavWillChange.emit(),i=this.el,a=this.mode,s=this.animated&&r.b.getBoolean("animated",!0),c=this.animation||e.animationBuilder||r.b.get("navAnimation"),t.next=7,Object(l.d)(Object.assign({mode:a,animated:s,animationBuilder:c,enteringEl:n,leavingEl:o,baseEl:i,progressCallback:e.progressAnimation?function(t){return d.ani=t}:void 0},e));case 7:return this.ionNavDidChange.emit(),t.abrupt("return",!0);case 9:case"end":return t.stop()}},t,this)}));return function(n,o,e){return t.apply(this,arguments)}}(),n.lock=function(){var t=_asyncToGenerator(regeneratorRuntime.mark(function t(){var n,o;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n=this.waitPromise,this.waitPromise=new Promise(function(t){return o=t}),t.t0=void 0!==n,!t.t0){t.next=6;break}return t.next=6,n;case 6:return t.abrupt("return",o);case 7:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),n.render=function(){return Object(e.i)("slot",null)},_createClass(t,[{key:"el",get:function(){return Object(e.f)(this)}}],[{key:"watchers",get:function(){return{swipeHandler:["swipeHandlerChanged"]}}},{key:"style",get:function(){return":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;overflow:hidden;z-index:0}"}}]),t}(),v=function(){function t(t){Object(e.m)(this,t)}var n=t.prototype;return n.getMode=function(){var t=Object(e.e)(this),n=this.el.closest("ion-toolbar");return n&&n.mode||t},n.hostData=function(){var t,n=this.getMode();return{class:Object.assign((t={},t[n]=!0,t["title-"+n]=!0,t),Object(i.a)(this.color))}},n.__stencil_render=function(){return[Object(e.i)("div",{class:"toolbar-title"},Object(e.i)("slot",null))]},n.render=function(){return Object(e.i)(e.a,this.hostData(),this.__stencil_render())},_createClass(t,[{key:"el",get:function(){return Object(e.f)(this)}}],[{key:"style",get:function(){return":host{--color:initial;display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;color:var(--color)}:host,:host(.title-ios){-webkit-transform:translateZ(0);transform:translateZ(0)}:host(.title-ios){left:0;top:0;padding-left:90px;padding-right:90px;padding-top:0;padding-bottom:0;position:absolute;width:100%;height:100%;font-size:17px;font-weight:600;letter-spacing:-.03em;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;pointer-events:none}:host-context([dir=rtl]).title-ios,:host-context([dir=rtl]):host(.title-ios){left:unset;right:unset;right:0}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.title-ios){padding-left:unset;padding-right:unset;-webkit-padding-start:90px;padding-inline-start:90px;-webkit-padding-end:90px;padding-inline-end:90px}}:host(.title-md){padding-left:20px;padding-right:20px;padding-top:0;padding-bottom:0;font-size:20px;font-weight:500;letter-spacing:.0125em}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.title-md){padding-left:unset;padding-right:unset;-webkit-padding-start:20px;padding-inline-start:20px;-webkit-padding-end:20px;padding-inline-end:20px}}:host(.ion-color){color:var(--ion-color-base)}.toolbar-title{display:block;width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;pointer-events:auto}"}}]),t}(),w=function(){function t(t){Object(e.m)(this,t),this.childrenStyles=new Map}var n=t.prototype;return n.componentWillLoad=function(){var t=Array.from(this.el.querySelectorAll("ion-buttons")),n=t.find(function(t){return"start"===t.slot});n&&n.classList.add("buttons-first-slot");var o=t.reverse(),e=o.find(function(t){return"end"===t.slot})||o.find(function(t){return"primary"===t.slot})||o.find(function(t){return"secondary"===t.slot});e&&e.classList.add("buttons-last-slot")},n.childrenStyle=function(t){t.stopPropagation();var n=t.target.tagName,o=t.detail,e={},r=this.childrenStyles.get(n)||{},i=!1;Object.keys(o).forEach(function(t){var n="toolbar-"+t,a=o[t];a!==r[n]&&(i=!0),a&&(e[n]=!0)}),i&&(this.childrenStyles.set(n,e),this.el.forceUpdate())},n.render=function(){var t,n=Object(e.e)(this),o={};return this.childrenStyles.forEach(function(t){Object.assign(o,t)}),Object(e.i)(e.a,{class:Object.assign((t={},t[n]=!0,t),o,Object(i.a)(this.color))},Object(e.i)("div",{class:"toolbar-background"}),Object(e.i)("div",{class:"toolbar-container"},Object(e.i)("slot",{name:"start"}),Object(e.i)("slot",{name:"secondary"}),Object(e.i)("div",{class:"toolbar-content"},Object(e.i)("slot",null)),Object(e.i)("slot",{name:"primary"}),Object(e.i)("slot",{name:"end"})))},_createClass(t,[{key:"el",get:function(){return Object(e.f)(this)}}],[{key:"style",get:function(){return":host{--border-width:0;--border-style:solid;--opacity:1;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;padding-left:var(--ion-safe-area-left);padding-right:var(--ion-safe-area-right);display:block;position:relative;width:100%;color:var(--color);font-family:var(--ion-font-family,inherit);contain:content;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-safe-area-left);padding-inline-start:var(--ion-safe-area-left);-webkit-padding-end:var(--ion-safe-area-right);padding-inline-end:var(--ion-safe-area-right)}}:host(.ion-color){color:var(--ion-color-contrast)}:host(.ion-color) .toolbar-background{background:var(--ion-color-base)}.toolbar-container{padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:var(--min-height);contain:content;overflow:hidden;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toolbar-container{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.toolbar-background{top:0;-webkit-transform:translateZ(0);transform:translateZ(0);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;opacity:var(--opacity);z-index:-1;pointer-events:none}.toolbar-background,::slotted(ion-progress-bar){left:0;right:0;bottom:0;position:absolute}:host{--background:var(--ion-toolbar-background,var(--ion-background-color,#fff));--color:var(--ion-toolbar-color,var(--ion-text-color,#424242));--border-color:var(--ion-toolbar-border-color,var(--ion-border-color,var(--ion-color-step-150,#c1c4cd)));--padding-top:0;--padding-bottom:0;--padding-start:0;--padding-end:0;--min-height:56px}.toolbar-content{-ms-flex:1;flex:1;-ms-flex-order:3;order:3;min-width:0;max-width:100%}::slotted(ion-segment){min-height:var(--min-height)}::slotted(.buttons-first-slot){margin-left:4px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted(.buttons-first-slot){margin-left:unset;-webkit-margin-start:4px;margin-inline-start:4px}}::slotted(.buttons-last-slot){margin-right:4px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted(.buttons-last-slot){margin-right:unset;-webkit-margin-end:4px;margin-inline-end:4px}}::slotted([slot=start]){-ms-flex-order:2;order:2}::slotted([slot=secondary]){-ms-flex-order:4;order:4}::slotted([slot=primary]){-ms-flex-order:5;order:5;text-align:end}::slotted([slot=end]){-ms-flex-order:6;order:6;text-align:end}"}}]),t}()}}]);