function asyncGeneratorStep(t,o,n,r,e,i,a){try{var s=t[i](a),l=s.value}catch(c){return void n(c)}s.done?o(l):Promise.resolve(l).then(r,e)}function _asyncToGenerator(t){return function(){var o=this,n=arguments;return new Promise(function(r,e){var i=t.apply(o,n);function a(t){asyncGeneratorStep(i,r,e,a,s,"next",t)}function s(t){asyncGeneratorStep(i,r,e,a,s,"throw",t)}a(void 0)})}}function _defineProperties(t,o){for(var n=0;n<o.length;n++){var r=o[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function _createClass(t,o,n){return o&&_defineProperties(t.prototype,o),n&&_defineProperties(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{iInF:function(t,o,n){"use strict";n.r(o),n.d(o,"ion_app",function(){return c}),n.d(o,"ion_buttons",function(){return u}),n.d(o,"ion_content",function(){return b}),n.d(o,"ion_footer",function(){return f}),n.d(o,"ion_header",function(){return g}),n.d(o,"ion_router_outlet",function(){return m}),n.d(o,"ion_title",function(){return v}),n.d(o,"ion_toolbar",function(){return w});var r=n("mLBW"),e=n("TJLY"),i=(n("9Z7W"),n("Jbqe")),a=n("EQwm"),s=n("1hGh"),l=n("7rGv"),c=function(){function t(t){Object(r.m)(this,t)}var o=t.prototype;return o.componentDidLoad=function(){Object(a.a)(function(){var t=Object(e.f)(window,"hybrid");e.b.getBoolean("_testing")||n.e(9).then(n.bind(null,"066j")).then(function(t){return t.startTapClick(e.b)}),e.b.getBoolean("statusTap",t)&&n.e(7).then(n.bind(null,"xPG6")).then(function(t){return t.startStatusTap()}),e.b.getBoolean("inputShims",d())&&n.e(6).then(n.bind(null,"sMw3")).then(function(t){return t.startInputShims(e.b)}),e.b.getBoolean("hardwareBackButton",t)&&n.e(5).then(n.bind(null,"U/P7")).then(function(t){return t.startHardwareBackButton()}),n.e(4).then(n.bind(null,"3g2N")).then(function(t){return t.startFocusVisible()})})},o.hostData=function(){var t;return{class:(t={},t[Object(r.e)(this)]=!0,t["ion-page"]=!0,t["force-statusbar-padding"]=e.b.getBoolean("_forceStatusbarPadding"),t)}},o.render=function(){return Object(r.i)(r.a,this.hostData())},_createClass(t,[{key:"el",get:function(){return Object(r.f)(this)}}],[{key:"style",get:function(){return"html.plt-mobile ion-app{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ion-app.force-statusbar-padding{--ion-safe-area-top:20px}"}}]),t}(),d=function(){return Object(e.f)(window,"ios")&&Object(e.f)(window,"mobile")},u=function(){function t(t){Object(r.m)(this,t)}var o=t.prototype;return o.hostData=function(){var t;return{class:(t={},t[Object(r.e)(this)]=!0,t)}},o.render=function(){return Object(r.i)(r.a,this.hostData())},_createClass(t,null,[{key:"style",get:function(){return".sc-ion-buttons-ios-h{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-webkit-transform:translateZ(0);transform:translateZ(0);z-index:99}.sc-ion-buttons-ios-s  ion-button {--padding-top:0;--padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;--padding-start:5px;--padding-end:5px;margin-left:2px;margin-right:2px;height:32px;font-size:17px;font-weight:400}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-buttons-ios-s  ion-button {margin-left:unset;margin-right:unset;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px}}.sc-ion-buttons-ios-s  ion-button:not(.button-round) {--border-radius:4px}.sc-ion-buttons-ios-h.ion-color.sc-ion-buttons-ios-s  .button , .ion-color .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s  .button {--color:initial;--border-color:initial;--background-focused:rgba(var(--ion-color-contrast-rgb),0.1)}.sc-ion-buttons-ios-h.ion-color.sc-ion-buttons-ios-s  .button-solid , .ion-color .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s  .button-solid {--background:var(--ion-color-contrast);--background-activated:rgba(var(--ion-color-contrast-rgb),0.8);--background-focused:rgba(var(--ion-color-contrast-rgb),0.6);--color:var(--ion-color-base);--color-focused:var(--ion-color-base)}.sc-ion-buttons-ios-h.ion-color.sc-ion-buttons-ios-s  .button-clear , .ion-color .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s  .button-clear {--background-focused:rgba(var(--ion-color-contrast-rgb),0.1);--color-activated:var(--ion-color-contrast);--color-focused:var(--ion-color-contrast)}.sc-ion-buttons-ios-h.ion-color.sc-ion-buttons-ios-s  .button-outline , .ion-color .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s  .button-outline {--background-activated:var(--ion-color-contrast);--background-focused:rgba(var(--ion-color-contrast-rgb),0.1);--color-activated:var(--ion-color-base);--color-focused:var(--ion-color-contrast)}.sc-ion-buttons-ios-hion-toolbar:not(.ion-color).sc-ion-buttons-ios-s  .button-clear , ion-toolbar:not(.ion-color) .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s  .button-clear {--color:var(--ion-toolbar-color,var(--ion-color-primary,#3880ff));--color-activated:var(--ion-toolbar-color-activated,var(--ion-color-primary,#3880ff));--color-focused:var(--ion-toolbar-color,var(--ion-color-primary,#3880ff))}.sc-ion-buttons-ios-hion-toolbar:not(.ion-color).sc-ion-buttons-ios-s  .button-outline , ion-toolbar:not(.ion-color) .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s  .button-outline {--color:var(--ion-toolbar-color,var(--ion-color-primary,#3880ff));--color-activated:var(--ion-toolbar-background,var(--ion-color-primary-contrast,#fff));--color-focused:var(--ion-toolbar-color,var(--ion-color-primary,#3880ff));--border-color:var(--ion-toolbar-color,var(--ion-color-primary,#3880ff));--background-activated:var(--ion-toolbar-color,var(--ion-color-primary,#3880ff))}.sc-ion-buttons-ios-hion-toolbar:not(.ion-color).sc-ion-buttons-ios-s  .button-solid , ion-toolbar:not(.ion-color) .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s  .button-solid {--color:var(--ion-toolbar-background,var(--ion-color-step-50,#fff));--color-activated:var(--ion-toolbar-background,var(--ion-color-step-50,#fff));--color-focused:var(--ion-toolbar-background,var(--ion-color-step-50,#fff));--background:var(--ion-toolbar-color,var(--ion-color-primary,#3880ff));--background-activated:var(--ion-toolbar-color-activated,var(--ion-color-primary-shade,#3171e0));--background-focused:var(--ion-toolbar-color-activated,var(--ion-color-primary-shade,#3171e0))}.sc-ion-buttons-ios-s  ion-icon[slot=start] {margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;margin-right:.3em;font-size:24px;line-height:.67}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-buttons-ios-s  ion-icon[slot=start] {margin-right:unset;-webkit-margin-end:.3em;margin-inline-end:.3em}}.sc-ion-buttons-ios-s  ion-icon[slot=end] {margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;margin-left:.4em;font-size:24px;line-height:.67}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-buttons-ios-s  ion-icon[slot=end] {margin-left:unset;-webkit-margin-start:.4em;margin-inline-start:.4em}}.sc-ion-buttons-ios-s  ion-icon[slot=icon-only] {padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;font-size:31px;line-height:.67}"}}]),t}(),b=function(){function t(t){Object(r.m)(this,t),this.isScrolling=!1,this.lastScroll=0,this.queued=!1,this.cTop=-1,this.cBottom=-1,this.detail={scrollTop:0,scrollLeft:0,type:"scroll",event:void 0,startX:0,startY:0,startTimeStamp:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,timeStamp:0,data:void 0,isScrolling:!0},this.fullscreen=!1,this.scrollX=!1,this.scrollY=!0,this.scrollEvents=!1,this.ionScrollStart=Object(r.d)(this,"ionScrollStart",7),this.ionScroll=Object(r.d)(this,"ionScroll",7),this.ionScrollEnd=Object(r.d)(this,"ionScrollEnd",7)}var o=t.prototype;return o.componentWillLoad=function(){if(void 0===this.forceOverscroll){var t=Object(r.e)(this);this.forceOverscroll="ios"===t&&Object(e.f)(window,"mobile")}},o.componentDidLoad=function(){this.resize()},o.componentDidUnload=function(){this.onScrollEnd()},o.onClick=function(t){this.isScrolling&&(t.preventDefault(),t.stopPropagation())},o.resize=function(){this.fullscreen?Object(r.g)(this.readDimensions.bind(this)):0===this.cTop&&0===this.cBottom||(this.cTop=this.cBottom=0,this.el.forceUpdate())},o.readDimensions=function(){var t=p(this.el),o=Math.max(this.el.offsetTop,0),n=Math.max(t.offsetHeight-o-this.el.offsetHeight,0);(o!==this.cTop||n!==this.cBottom)&&(this.cTop=o,this.cBottom=n,this.el.forceUpdate())},o.onScroll=function(t){var o=this,n=Date.now(),e=!this.isScrolling;this.lastScroll=n,e&&this.onScrollStart(),!this.queued&&this.scrollEvents&&(this.queued=!0,Object(r.g)(function(n){o.queued=!1,o.detail.event=t,h(o.detail,o.scrollEl,n,e),o.ionScroll.emit(o.detail)}))},o.getScrollElement=function(){return Promise.resolve(this.scrollEl)},o.scrollToTop=function(t){return void 0===t&&(t=0),this.scrollToPoint(void 0,0,t)},o.scrollToBottom=function(t){return void 0===t&&(t=0),this.scrollToPoint(void 0,this.scrollEl.scrollHeight-this.scrollEl.clientHeight,t)},o.scrollByPoint=function(t,o,n){return this.scrollToPoint(t+this.scrollEl.scrollLeft,o+this.scrollEl.scrollTop,n)},o.scrollToPoint=function(){var t=_asyncToGenerator(regeneratorRuntime.mark(function t(o,n,r){var e,i,a,s,l,c,d,u,b;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(void 0===r&&(r=0),e=this.scrollEl,!(r<32)){t.next=4;break}return t.abrupt("return",(null!=n&&(e.scrollTop=n),void(null!=o&&(e.scrollLeft=o))));case 4:return a=0,s=new Promise(function(t){return i=t}),l=e.scrollTop,c=e.scrollLeft,d=null!=n?n-l:0,u=null!=o?o-c:0,b=function t(o){var n=Math.min(1,(o-a)/r)-1,s=Math.pow(n,3)+1;0!==d&&(e.scrollTop=Math.floor(s*d+l)),0!==u&&(e.scrollLeft=Math.floor(s*u+c)),s<1?requestAnimationFrame(t):i()},t.abrupt("return",(requestAnimationFrame(function(t){a=t,b(t)}),s));case 7:case"end":return t.stop()}},t,this)}));return function(o,n,r){return t.apply(this,arguments)}}(),o.onScrollStart=function(){var t=this;this.isScrolling=!0,this.ionScrollStart.emit({isScrolling:!0}),this.watchDog&&clearInterval(this.watchDog),this.watchDog=setInterval(function(){t.lastScroll<Date.now()-120&&t.onScrollEnd()},100)},o.onScrollEnd=function(){clearInterval(this.watchDog),this.watchDog=null,this.isScrolling&&(this.isScrolling=!1,this.ionScrollEnd.emit({isScrolling:!1}))},o.render=function(){var t,o=this,n=Object(r.e)(this),a=this.scrollX,s=this.scrollY,l=this.forceOverscroll,c="ios"===n&&e.b.getBoolean("experimentalTransitionShadow",!1);return this.resize(),Object(r.i)(r.a,{class:Object.assign({},Object(i.a)(this.color),(t={},t[n]=!0,t["content-sizing"]=Object(i.c)("ion-popover",this.el),t.overscroll=!!this.forceOverscroll,t)),style:{"--offset-top":this.cTop+"px","--offset-bottom":this.cBottom+"px"}},Object(r.i)("div",{class:{"inner-scroll":!0,"scroll-x":a,"scroll-y":s,overscroll:(a||s)&&!!l},ref:function(t){return o.scrollEl=t},onScroll:function(t){return o.onScroll(t)}},Object(r.i)("slot",null)),c?Object(r.i)("div",{class:"transition-effect"},Object(r.i)("div",{class:"transition-cover"}),Object(r.i)("div",{class:"transition-shadow"})):null,Object(r.i)("slot",{name:"fixed"}))},_createClass(t,[{key:"el",get:function(){return Object(r.f)(this)}}],[{key:"style",get:function(){return':host{--background:var(--ion-background-color,#fff);--color:var(--ion-text-color,#000);--padding-top:0px;--padding-bottom:0px;--padding-start:0px;--padding-end:0px;--keyboard-offset:0px;--offset-top:0px;--offset-bottom:0px;--overflow:auto;display:block;position:relative;-ms-flex:1;flex:1;width:100%;height:100%;margin:0!important;padding:0!important;font-family:var(--ion-font-family,inherit);contain:size style}:host(.ion-color) .inner-scroll{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.outer-content){--background:var(--ion-color-step-50,#f2f2f2)}.inner-scroll{left:0;right:0;top:calc(var(--offset-top) * -1);bottom:calc(var(--offset-bottom) * -1);padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:calc(var(--padding-top) + var(--offset-top));padding-bottom:calc(var(--padding-bottom) + var(--keyboard-offset) + var(--offset-bottom));position:absolute;background:var(--background);color:var(--color);-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.inner-scroll{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.scroll-x,.scroll-y{-webkit-overflow-scrolling:touch;will-change:scroll-position;-ms-scroll-chaining:none;overscroll-behavior:contain}.scroll-y{-ms-touch-action:pan-y;touch-action:pan-y;overflow-y:var(--overflow)}.scroll-x{-ms-touch-action:pan-x;touch-action:pan-x;overflow-x:var(--overflow)}.scroll-x.scroll-y{-ms-touch-action:auto;touch-action:auto}.overscroll:after,.overscroll:before{position:absolute;width:1px;height:1px;content:""}.overscroll:before{bottom:-1px}.overscroll:after{top:-1px}:host(.content-sizing){contain:none}:host(.content-sizing) .inner-scroll{position:relative}.transition-effect{left:-100%;opacity:0}.transition-cover,.transition-effect{position:absolute;width:100%;height:100%}.transition-cover{right:0;background:#000;opacity:.1}.transition-shadow{display:block;position:absolute;right:0;width:10px;height:100%;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAgCAYAAAAIXrg4AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTE3MDgzRkQ5QTkyMTFFOUEwNzQ5MkJFREE1NUY2MjQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTE3MDgzRkU5QTkyMTFFOUEwNzQ5MkJFREE1NUY2MjQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxMTcwODNGQjlBOTIxMUU5QTA3NDkyQkVEQTU1RjYyNCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxMTcwODNGQzlBOTIxMUU5QTA3NDkyQkVEQTU1RjYyNCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PmePEuQAAABNSURBVHjaYvz//z8DIxAwMDAwATGMhmFmPDQuOSZks0AMmoJBaQHjkPfB0Lfg/2gQjVow+HPy/yHvg9GiYjQfjMbBqAWjFgy/4hogwADYqwdzxy5BuwAAAABJRU5ErkJggg==);background-repeat:repeat-y;background-size:10px 16px}'}}]),t}(),p=function(t){return t.closest("ion-tabs")||t.closest("ion-app,ion-page,.ion-page,page-inner")||function(t){return t.parentElement?t.parentElement:t.parentNode&&t.parentNode.host?t.parentNode.host:null}(t)},h=function(t,o,n,r){var e=t.currentX,i=t.currentY,a=o.scrollLeft,s=o.scrollTop,l=n-t.timeStamp;if(r&&(t.startTimeStamp=n,t.startX=a,t.startY=s,t.velocityX=t.velocityY=0),t.timeStamp=n,t.currentX=t.scrollLeft=a,t.currentY=t.scrollTop=s,t.deltaX=a-t.startX,t.deltaY=s-t.startY,l>0&&l<100){var c=(s-i)/l;t.velocityX=(a-e)/l*.7+.3*t.velocityX,t.velocityY=.7*c+.3*t.velocityY}},f=function(){function t(t){Object(r.m)(this,t),this.translucent=!1}var o=t.prototype;return o.hostData=function(){var t,o=Object(r.e)(this);return{class:(t={},t[o]=!0,t["footer-"+o]=!0,t["footer-translucent"]=this.translucent,t["footer-translucent-"+o]=this.translucent,t)}},o.render=function(){return Object(r.i)(r.a,this.hostData())},_createClass(t,null,[{key:"style",get:function(){return"ion-footer{display:block;position:relative;-ms-flex-order:1;order:1;width:100%;z-index:10}ion-footer ion-toolbar:last-child{padding-bottom:var(--ion-safe-area-bottom,0)}.footer-ios ion-toolbar:first-child{--border-width:0.55px 0 0}.footer-ios[no-border] ion-toolbar:first-child{--border-width:0}@supports ((-webkit-backdrop-filter:blur(0)) or (backdrop-filter:blur(0))){.footer-translucent-ios{-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}.footer-translucent-ios ion-toolbar{--opacity:.8;--backdrop-filter:saturate(180%) blur(20px)}}"}}]),t}(),g=function(){function t(t){Object(r.m)(this,t),this.translucent=!1}var o=t.prototype;return o.hostData=function(){var t,o=Object(r.e)(this);return{class:(t={},t[o]=!0,t["header-"+o]=!0,t["header-translucent"]=this.translucent,t["header-translucent-"+o]=this.translucent,t)}},o.render=function(){return Object(r.i)(r.a,this.hostData())},_createClass(t,null,[{key:"style",get:function(){return"ion-header{display:block;position:relative;-ms-flex-order:-1;order:-1;width:100%;z-index:10}ion-header ion-toolbar:first-child{padding-top:var(--ion-safe-area-top,0)}.header-ios ion-toolbar:last-child{--border-width:0 0 0.55px}.header-ios[no-border] ion-toolbar:last-child{--border-width:0}@supports ((-webkit-backdrop-filter:blur(0)) or (backdrop-filter:blur(0))){.header-translucent-ios{-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}.header-translucent-ios ion-toolbar{--opacity:.8;--backdrop-filter:saturate(180%) blur(20px)}}"}}]),t}(),m=function(){function t(t){Object(r.m)(this,t),this.mode=Object(r.e)(this),this.animated=!0,this.ionNavWillLoad=Object(r.d)(this,"ionNavWillLoad",7),this.ionNavWillChange=Object(r.d)(this,"ionNavWillChange",3),this.ionNavDidChange=Object(r.d)(this,"ionNavDidChange",3)}var o=t.prototype;return o.swipeHandlerChanged=function(){this.gesture&&this.gesture.setDisabled(void 0===this.swipeHandler)},o.componentWillLoad=function(){this.ionNavWillLoad.emit()},o.componentDidLoad=function(){var t=_asyncToGenerator(regeneratorRuntime.mark(function t(){var o=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"Hofg"));case 2:t.t0=this.el,t.t1=function(){return!!o.swipeHandler&&o.swipeHandler.canStart()},t.t2=function(){return o.swipeHandler&&o.swipeHandler.onStart()},t.t3=function(t){return o.ani&&o.ani.progressStep(t)},t.t4=function(t,n,r){o.ani&&o.ani.progressEnd(t,n,r),o.swipeHandler&&o.swipeHandler.onEnd(t)},this.gesture=t.sent.createSwipeBackGesture(t.t0,t.t1,t.t2,t.t3,t.t4),this.swipeHandlerChanged();case 9:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),o.componentDidUnload=function(){this.activeEl=this.activeComponent=void 0,this.gesture&&(this.gesture.destroy(),this.gesture=void 0)},o.commit=function(){var t=_asyncToGenerator(regeneratorRuntime.mark(function t(o,n,r){var e,i;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.lock();case 2:return e=t.sent,i=!1,t.prev=4,t.next=7,this.transition(o,n,r);case 7:i=t.sent,t.next=13;break;case 10:t.prev=10,t.t0=t.catch(4),console.error(t.t0);case 13:return t.abrupt("return",(e(),i));case 14:case"end":return t.stop()}},t,this,[[4,10]])}));return function(o,n,r){return t.apply(this,arguments)}}(),o.setRouteId=function(){var t=_asyncToGenerator(regeneratorRuntime.mark(function t(o,n,r){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.setRoot(o,n,{duration:"root"===r?0:void 0,direction:"back"===r?"back":"forward"});case 2:return t.t0=t.sent,t.t1=this.activeEl,t.abrupt("return",{changed:t.t0,element:t.t1});case 5:case"end":return t.stop()}},t,this)}));return function(o,n,r){return t.apply(this,arguments)}}(),o.getRouteId=function(){var t=_asyncToGenerator(regeneratorRuntime.mark(function t(){var o;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return o=this.activeEl,t.abrupt("return",o?{id:o.tagName,element:o}:void 0);case 2:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),o.setRoot=function(){var t=_asyncToGenerator(regeneratorRuntime.mark(function t(o,n,r){var e,i;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(this.activeComponent!==o){t.next=2;break}return t.abrupt("return",!1);case 2:return e=this.activeEl,t.next=5,Object(s.a)(this.delegate,this.el,o,["ion-page","ion-page-invisible"],n);case 5:return i=t.sent,this.activeComponent=o,this.activeEl=i,t.next=10,this.commit(i,e,r);case 10:return t.next=12,Object(s.b)(this.delegate,e);case 12:return t.abrupt("return",!0);case 13:case"end":return t.stop()}},t,this)}));return function(o,n,r){return t.apply(this,arguments)}}(),o.transition=function(){var t=_asyncToGenerator(regeneratorRuntime.mark(function t(o,n,r){var i,a,s,c,d=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(void 0===r&&(r={}),n!==o){t.next=3;break}return t.abrupt("return",!1);case 3:return this.ionNavWillChange.emit(),i=this.el,a=this.mode,s=this.animated&&e.b.getBoolean("animated",!0),c=this.animation||r.animationBuilder||e.b.get("navAnimation"),t.next=7,Object(l.d)(Object.assign({mode:a,animated:s,animationBuilder:c,enteringEl:o,leavingEl:n,baseEl:i,progressCallback:r.progressAnimation?function(t){return d.ani=t}:void 0},r));case 7:return this.ionNavDidChange.emit(),t.abrupt("return",!0);case 9:case"end":return t.stop()}},t,this)}));return function(o,n,r){return t.apply(this,arguments)}}(),o.lock=function(){var t=_asyncToGenerator(regeneratorRuntime.mark(function t(){var o,n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(o=this.waitPromise,this.waitPromise=new Promise(function(t){return n=t}),t.t0=void 0!==o,!t.t0){t.next=6;break}return t.next=6,o;case 6:return t.abrupt("return",n);case 7:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),o.render=function(){return Object(r.i)("slot",null)},_createClass(t,[{key:"el",get:function(){return Object(r.f)(this)}}],[{key:"watchers",get:function(){return{swipeHandler:["swipeHandlerChanged"]}}},{key:"style",get:function(){return":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;overflow:hidden;z-index:0}"}}]),t}(),v=function(){function t(t){Object(r.m)(this,t)}var o=t.prototype;return o.getMode=function(){var t=Object(r.e)(this),o=this.el.closest("ion-toolbar");return o&&o.mode||t},o.hostData=function(){var t,o=this.getMode();return{class:Object.assign((t={},t[o]=!0,t["title-"+o]=!0,t),Object(i.a)(this.color))}},o.__stencil_render=function(){return[Object(r.i)("div",{class:"toolbar-title"},Object(r.i)("slot",null))]},o.render=function(){return Object(r.i)(r.a,this.hostData(),this.__stencil_render())},_createClass(t,[{key:"el",get:function(){return Object(r.f)(this)}}],[{key:"style",get:function(){return":host{--color:initial;display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;color:var(--color)}:host,:host(.title-ios){-webkit-transform:translateZ(0);transform:translateZ(0)}:host(.title-ios){left:0;top:0;padding-left:90px;padding-right:90px;padding-top:0;padding-bottom:0;position:absolute;width:100%;height:100%;font-size:17px;font-weight:600;letter-spacing:-.03em;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;pointer-events:none}:host-context([dir=rtl]).title-ios,:host-context([dir=rtl]):host(.title-ios){left:unset;right:unset;right:0}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.title-ios){padding-left:unset;padding-right:unset;-webkit-padding-start:90px;padding-inline-start:90px;-webkit-padding-end:90px;padding-inline-end:90px}}:host(.title-md){padding-left:20px;padding-right:20px;padding-top:0;padding-bottom:0;font-size:20px;font-weight:500;letter-spacing:.0125em}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.title-md){padding-left:unset;padding-right:unset;-webkit-padding-start:20px;padding-inline-start:20px;-webkit-padding-end:20px;padding-inline-end:20px}}:host(.ion-color){color:var(--ion-color-base)}.toolbar-title{display:block;width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;pointer-events:auto}"}}]),t}(),w=function(){function t(t){Object(r.m)(this,t),this.childrenStyles=new Map}var o=t.prototype;return o.componentWillLoad=function(){var t=Array.from(this.el.querySelectorAll("ion-buttons")),o=t.find(function(t){return"start"===t.slot});o&&o.classList.add("buttons-first-slot");var n=t.reverse(),r=n.find(function(t){return"end"===t.slot})||n.find(function(t){return"primary"===t.slot})||n.find(function(t){return"secondary"===t.slot});r&&r.classList.add("buttons-last-slot")},o.childrenStyle=function(t){t.stopPropagation();var o=t.target.tagName,n=t.detail,r={},e=this.childrenStyles.get(o)||{},i=!1;Object.keys(n).forEach(function(t){var o="toolbar-"+t,a=n[t];a!==e[o]&&(i=!0),a&&(r[o]=!0)}),i&&(this.childrenStyles.set(o,r),this.el.forceUpdate())},o.render=function(){var t,o=Object(r.e)(this),n={};return this.childrenStyles.forEach(function(t){Object.assign(n,t)}),Object(r.i)(r.a,{class:Object.assign((t={},t[o]=!0,t),n,Object(i.a)(this.color))},Object(r.i)("div",{class:"toolbar-background"}),Object(r.i)("div",{class:"toolbar-container"},Object(r.i)("slot",{name:"start"}),Object(r.i)("slot",{name:"secondary"}),Object(r.i)("div",{class:"toolbar-content"},Object(r.i)("slot",null)),Object(r.i)("slot",{name:"primary"}),Object(r.i)("slot",{name:"end"})))},_createClass(t,[{key:"el",get:function(){return Object(r.f)(this)}}],[{key:"style",get:function(){return":host{--border-width:0;--border-style:solid;--opacity:1;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;padding-left:var(--ion-safe-area-left);padding-right:var(--ion-safe-area-right);display:block;position:relative;width:100%;color:var(--color);font-family:var(--ion-font-family,inherit);contain:content;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-safe-area-left);padding-inline-start:var(--ion-safe-area-left);-webkit-padding-end:var(--ion-safe-area-right);padding-inline-end:var(--ion-safe-area-right)}}:host(.ion-color){color:var(--ion-color-contrast)}:host(.ion-color) .toolbar-background{background:var(--ion-color-base)}.toolbar-container{padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:var(--min-height);contain:content;overflow:hidden;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toolbar-container{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.toolbar-background{top:0;-webkit-transform:translateZ(0);transform:translateZ(0);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;opacity:var(--opacity);z-index:-1;pointer-events:none}.toolbar-background,::slotted(ion-progress-bar){left:0;right:0;bottom:0;position:absolute}:host{--background:var(--ion-toolbar-background,var(--ion-color-step-50,#fff));--color:var(--ion-toolbar-color,var(--ion-text-color,#000));--border-color:var(--ion-toolbar-border-color,var(--ion-border-color,var(--ion-color-step-150,rgba(0,0,0,0.2))));--padding-top:4px;--padding-bottom:4px;--padding-start:4px;--padding-end:4px;--min-height:44px}.toolbar-content{-ms-flex:1;flex:1;-ms-flex-order:4;order:4;min-width:0}:host(.toolbar-segment){--min-height:auto}::slotted([slot=start]){-ms-flex-order:2;order:2}::slotted([slot=secondary]){-ms-flex-order:3;order:3}::slotted([slot=primary]){-ms-flex-order:5;order:5;text-align:end}::slotted([slot=end]){-ms-flex-order:6;order:6;text-align:end}"}}]),t}()}}]);