function _defineProperty(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var o=0;o<t.length;o++){var i=t[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,o){return t&&_defineProperties(e.prototype,t),o&&_defineProperties(e,o),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{VgKV:function(e,t,o){"use strict";o.r(t),o.d(t,"ion_popover",(function(){return f}));var i=o("c1op"),r=(o("AfW+"),o("aiEM"),o("+4pY")),n=(o("kBU6"),o("pori")),a=o("Dl6n"),s=o("m9yc"),p=o("K6rM"),c=function(e,t){var o="top",i="left",n=e.querySelector(".popover-content"),a=n.getBoundingClientRect(),s=a.width,p=a.height,c=e.ownerDocument.defaultView.innerWidth,d=e.ownerDocument.defaultView.innerHeight,u=t&&t.target&&t.target.getBoundingClientRect(),h=null!=u&&"top"in u?u.top:d/2-p/2,f=null!=u&&"left"in u?u.left:c/2,m=u&&u.width||0,v=u&&u.height||0,b=e.querySelector(".popover-arrow"),g=b.getBoundingClientRect(),w=g.width,y=g.height;null==u&&(b.style.display="none");var x={top:h+v,left:f+m/2-w/2},j={top:h+v+(y-1),left:f+m/2-s/2},O=!1,k=!1;j.left<l+25?(O=!0,j.left=l):s+l+j.left+25>c&&(k=!0,j.left=c-s-l,i="right"),h+v+p>d&&h-p>0?(x.top=h-(y+1),j.top=h-p-(y-1),e.className=e.className+" popover-bottom",o="bottom"):h+v+p>d&&(n.style.bottom=l+"%"),b.style.top=x.top+"px",b.style.left=x.left+"px",n.style.top=j.top+"px",n.style.left=j.left+"px",O&&(n.style.left="calc(".concat(j.left,"px + var(--ion-safe-area-left, 0px))")),k&&(n.style.left="calc(".concat(j.left,"px - var(--ion-safe-area-right, 0px))")),n.style.transformOrigin=o+" "+i;var D=Object(r.a)(),P=Object(r.a)(),E=Object(r.a)();return P.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.01,.08),E.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.01,1),D.addElement(e).easing("ease").duration(100).addAnimation([P,E])},l=5,d=function(e){var t=Object(r.a)(),o=Object(r.a)(),i=Object(r.a)();return o.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.08,0),i.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.99,0),t.addElement(e).easing("ease").duration(500).addAnimation([o,i])},u=function(e,t){var o=e.ownerDocument,i="rtl"===o.dir,n="top",a=i?"right":"left",s=e.querySelector(".popover-content"),p=s.getBoundingClientRect(),c=p.width,l=p.height,d=o.defaultView.innerWidth,u=o.defaultView.innerHeight,h=t&&t.target&&t.target.getBoundingClientRect(),f=null!=h&&"bottom"in h?h.bottom:u/2-l/2,m=h&&h.height||0,v={top:f,left:null!=h&&"left"in h?i?h.left-c+h.width:h.left:d/2-c/2};v.left<12?(v.left=12,a="left"):c+12+v.left>d&&(v.left=d-c-12,a="right"),f+m+l>u&&f-l>0?(v.top=f-l-m,e.className=e.className+" popover-bottom",n="bottom"):f+m+l>u&&(s.style.bottom="12px");var b=Object(r.a)(),g=Object(r.a)(),w=Object(r.a)(),y=Object(r.a)(),x=Object(r.a)();return g.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.01,.32),w.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.01,1),y.addElement(s).beforeStyles({top:"".concat(v.top,"px"),left:"".concat(v.left,"px"),"transform-origin":"".concat(n," ").concat(a)}).fromTo("transform","scale(0.001)","scale(1)"),x.addElement(e.querySelector(".popover-viewport")).fromTo("opacity",.01,1),b.addElement(e).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(300).addAnimation([g,w,y,x])},h=function(e){var t=Object(r.a)(),o=Object(r.a)(),i=Object(r.a)();return o.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.32,0),i.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.99,0),t.addElement(e).easing("ease").duration(500).addAnimation([o,i])},f=function(){function e(t){var o=this;_classCallCheck(this,e),Object(i.l)(this,t),this.presented=!1,this.mode=Object(i.d)(this),this.keyboardClose=!0,this.backdropDismiss=!0,this.showBackdrop=!0,this.translucent=!1,this.animated=!0,this.onDismiss=function(e){e.stopPropagation(),e.preventDefault(),o.dismiss()},this.onBackdropTap=function(){o.dismiss(void 0,n.a)},this.onLifecycle=function(e){var t=o.usersElement,i=m[e.type];if(t&&i){var r=new CustomEvent(i,{bubbles:!1,cancelable:!1,detail:e.detail});t.dispatchEvent(r)}},Object(n.e)(this.el),this.didPresent=Object(i.e)(this,"ionPopoverDidPresent",7),this.willPresent=Object(i.e)(this,"ionPopoverWillPresent",7),this.willDismiss=Object(i.e)(this,"ionPopoverWillDismiss",7),this.didDismiss=Object(i.e)(this,"ionPopoverDidDismiss",7)}return _createClass(e,[{key:"present",value:function(){var e,t;return regeneratorRuntime.async((function(o){for(;;)switch(o.prev=o.next){case 0:if(!this.presented){o.next=2;break}return o.abrupt("return");case 2:if(e=this.el.querySelector(".popover-content")){o.next=5;break}throw new Error("container is undefined");case 5:return t=Object.assign(Object.assign({},this.componentProps),{popover:this.el}),o.next=8,regeneratorRuntime.awrap(Object(s.a)(this.delegate,e,this.component,["popover-viewport",this.el["s-sc"]],t));case 8:return this.usersElement=o.sent,o.next=11,regeneratorRuntime.awrap(Object(p.a)(this.usersElement));case 11:return o.abrupt("return",Object(n.f)(this,"popoverEnter",c,u,this.event));case 12:case"end":return o.stop()}}),null,this)}},{key:"dismiss",value:function(e,t){var o;return regeneratorRuntime.async((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,regeneratorRuntime.awrap(Object(n.g)(this,e,t,"popoverLeave",d,h,this.event));case 2:if(o=i.sent,i.t0=o,!i.t0){i.next=7;break}return i.next=7,regeneratorRuntime.awrap(Object(s.b)(this.delegate,this.usersElement));case 7:return i.abrupt("return",o);case 8:case"end":return i.stop()}}),null,this)}},{key:"onDidDismiss",value:function(){return Object(n.h)(this.el,"ionPopoverDidDismiss")}},{key:"onWillDismiss",value:function(){return Object(n.h)(this.el,"ionPopoverWillDismiss")}},{key:"render",value:function(){var e,t=Object(i.d)(this),o=this.onLifecycle;return Object(i.i)(i.a,{"aria-modal":"true","no-router":!0,style:{zIndex:"".concat(2e4+this.overlayIndex)},class:Object.assign(Object.assign({},Object(a.b)(this.cssClass)),(e={},_defineProperty(e,t,!0),_defineProperty(e,"popover-translucent",this.translucent),e)),onIonPopoverDidPresent:o,onIonPopoverWillPresent:o,onIonPopoverWillDismiss:o,onIonPopoverDidDismiss:o,onIonDismiss:this.onDismiss,onIonBackdropTap:this.onBackdropTap},Object(i.i)("ion-backdrop",{tappable:this.backdropDismiss,visible:this.showBackdrop}),Object(i.i)("div",{class:"popover-wrapper"},Object(i.i)("div",{class:"popover-arrow"}),Object(i.i)("div",{class:"popover-content"})))}},{key:"el",get:function(){return Object(i.f)(this)}}],[{key:"style",get:function(){return".sc-ion-popover-md-h{--background:var(--ion-background-color,#fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;color:var(--ion-text-color,#000);z-index:1001}.overlay-hidden.sc-ion-popover-md-h{display:none}.popover-wrapper.sc-ion-popover-md{opacity:0;z-index:10}.popover-content.sc-ion-popover-md{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport.sc-ion-popover-md{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px}.sc-ion-popover-md-h{--width:250px;--max-height:90%;--box-shadow:0 5px 5px -3px rgba(0,0,0,0.2),0 8px 10px 1px rgba(0,0,0,0.14),0 3px 14px 2px rgba(0,0,0,0.12)}.popover-content.sc-ion-popover-md{border-radius:4px;-webkit-transform-origin:left top;transform-origin:left top}[dir=rtl].sc-ion-popover-md-h .popover-content.sc-ion-popover-md, [dir=rtl] .sc-ion-popover-md-h .popover-content.sc-ion-popover-md, [dir=rtl].sc-ion-popover-md .popover-content.sc-ion-popover-md{-webkit-transform-origin:right top;transform-origin:right top}.popover-viewport.sc-ion-popover-md{-webkit-transition-delay:.1s;transition-delay:.1s}"}}]),e}(),m={ionPopoverDidPresent:"ionViewDidEnter",ionPopoverWillPresent:"ionViewWillEnter",ionPopoverWillDismiss:"ionViewWillLeave",ionPopoverDidDismiss:"ionViewDidLeave"}}}]);