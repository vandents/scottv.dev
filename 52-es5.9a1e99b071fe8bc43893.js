function asyncGeneratorStep(n,i,e,t,o,r,a){try{var s=n[r](a),d=s.value}catch(c){return void e(c)}s.done?i(d):Promise.resolve(d).then(t,o)}function _asyncToGenerator(n){return function(){var i=this,e=arguments;return new Promise(function(t,o){var r=n.apply(i,e);function a(n){asyncGeneratorStep(r,t,o,a,s,"next",n)}function s(n){asyncGeneratorStep(r,t,o,a,s,"throw",n)}a(void 0)})}}function _defineProperties(n,i){for(var e=0;e<i.length;e++){var t=i[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function _createClass(n,i,e){return i&&_defineProperties(n.prototype,i),e&&_defineProperties(n,e),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{N3W9:function(n,i,e){"use strict";e.r(i),e.d(i,"ion_loading",function(){return m});var t=e("mLBW"),o=e("TJLY"),r=e("vTwt"),a=e("Jbqe"),s=e("IvgT"),d=function(n,i){var e=new n,t=new n;t.addElement(i.querySelector("ion-backdrop"));var o=new n;return o.addElement(i.querySelector(".loading-wrapper")),t.fromTo("opacity",.01,.3),o.fromTo("opacity",.01,1).fromTo("scale",1.1,1),Promise.resolve(e.addElement(i).easing("ease-in-out").duration(200).add(t).add(o))},c=function(n,i){var e=new n,t=new n;t.addElement(i.querySelector("ion-backdrop"));var o=new n;return o.addElement(i.querySelector(".loading-wrapper")),t.fromTo("opacity",.3,0),o.fromTo("opacity",.99,0).fromTo("scale",1,.9),Promise.resolve(e.addElement(i).easing("ease-in-out").duration(200).add(t).add(o))},l=function(n,i){var e=new n,t=new n;t.addElement(i.querySelector("ion-backdrop"));var o=new n;return o.addElement(i.querySelector(".loading-wrapper")),t.fromTo("opacity",.01,.32),o.fromTo("opacity",.01,1).fromTo("scale",1.1,1),Promise.resolve(e.addElement(i).easing("ease-in-out").duration(200).add(t).add(o))},p=function(n,i){var e=new n,t=new n;t.addElement(i.querySelector("ion-backdrop"));var o=new n;return o.addElement(i.querySelector(".loading-wrapper")),t.fromTo("opacity",.32,0),o.fromTo("opacity",.99,0).fromTo("scale",1,.9),Promise.resolve(e.addElement(i).easing("ease-in-out").duration(200).add(t).add(o))},m=function(){function n(n){var i=this;Object(t.m)(this,n),this.presented=!1,this.mode=Object(t.e)(this),this.keyboardClose=!0,this.duration=0,this.backdropDismiss=!1,this.showBackdrop=!0,this.translucent=!1,this.animated=!0,this.onBackdropTap=function(){i.dismiss(void 0,r.a)},this.didPresent=Object(t.d)(this,"ionLoadingDidPresent",7),this.willPresent=Object(t.d)(this,"ionLoadingWillPresent",7),this.willDismiss=Object(t.d)(this,"ionLoadingWillDismiss",7),this.didDismiss=Object(t.d)(this,"ionLoadingDidDismiss",7)}var i=n.prototype;return i.componentWillLoad=function(){if(void 0===this.spinner){var n=Object(t.e)(this);this.spinner=o.b.get("loadingSpinner",o.b.get("spinner","ios"===n?"lines":"crescent"))}},i.present=function(){var n=_asyncToGenerator(regeneratorRuntime.mark(function n(){var i=this;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(r.e)(this,"loadingEnter",d,l,void 0);case 2:this.duration>0&&(this.durationTimeout=setTimeout(function(){return i.dismiss()},this.duration+10));case 3:case"end":return n.stop()}},n,this)}));return function(){return n.apply(this,arguments)}}(),i.dismiss=function(n,i){return this.durationTimeout&&clearTimeout(this.durationTimeout),Object(r.f)(this,n,i,"loadingLeave",c,p)},i.onDidDismiss=function(){return Object(r.g)(this.el,"ionLoadingDidDismiss")},i.onWillDismiss=function(){return Object(r.g)(this.el,"ionLoadingWillDismiss")},i.render=function(){var n,i=this.message,e=this.spinner,o=Object(t.e)(this);return Object(t.i)(t.a,{onIonBackdropTap:this.onBackdropTap,style:{zIndex:""+(4e4+this.overlayIndex)},class:Object.assign({},Object(a.b)(this.cssClass),(n={},n[o]=!0,n["loading-translucent"]=this.translucent,n))},Object(t.i)("ion-backdrop",{visible:this.showBackdrop,tappable:this.backdropDismiss}),Object(t.i)("div",{class:"loading-wrapper",role:"dialog"},e&&Object(t.i)("div",{class:"loading-spinner"},Object(t.i)("ion-spinner",{name:e})),i&&Object(t.i)("div",{class:"loading-content",innerHTML:Object(s.a)(i)})))},_createClass(n,[{key:"el",get:function(){return Object(t.f)(this)}}],[{key:"style",get:function(){return".sc-ion-loading-md-h{--min-width:auto;--width:auto;--min-height:auto;--height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;font-family:var(--ion-font-family,inherit);contain:strict;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1000}.overlay-hidden.sc-ion-loading-md-h{display:none}.loading-wrapper.sc-ion-loading-md{display:-ms-flexbox;display:flex;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);opacity:0;z-index:10}.spinner-bubbles.sc-ion-loading-md, .spinner-circles.sc-ion-loading-md, .spinner-crescent.sc-ion-loading-md, .spinner-dots.sc-ion-loading-md, .spinner-lines.sc-ion-loading-md, .spinner-lines-small.sc-ion-loading-md{color:var(--spinner-color)}.sc-ion-loading-md-h{--background:var(--ion-color-step-50,#f2f2f2);--max-width:280px;--max-height:90%;--spinner-color:var(--ion-color-primary,#3880ff);color:var(--ion-color-step-850,#262626);font-size:14px}.loading-wrapper.sc-ion-loading-md{border-radius:2px;padding-left:24px;padding-right:24px;padding-top:24px;padding-bottom:24px;-webkit-box-shadow:0 16px 20px rgba(0,0,0,.4);box-shadow:0 16px 20px rgba(0,0,0,.4)}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.loading-wrapper.sc-ion-loading-md{padding-left:unset;padding-right:unset;-webkit-padding-start:24px;padding-inline-start:24px;-webkit-padding-end:24px;padding-inline-end:24px}}.loading-spinner.sc-ion-loading-md + .loading-content.sc-ion-loading-md{margin-left:16px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.loading-spinner.sc-ion-loading-md + .loading-content.sc-ion-loading-md{margin-left:unset;-webkit-margin-start:16px;margin-inline-start:16px}}"}}]),n}()}}]);