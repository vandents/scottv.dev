var __awaiter=this&&this.__awaiter||function(t,e,n,i){return new(n||(n=Promise))((function(o,r){function a(t){try{c(i.next(t))}catch(e){r(e)}}function s(t){try{c(i.throw(t))}catch(e){r(e)}}function c(t){t.done?o(t.value):new n((function(e){e(t.value)})).then(a,s)}c((i=i.apply(t,e||[])).next())}))},__generator=this&&this.__generator||function(t,e){var n,i,o,r,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return r={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function s(r){return function(s){return function(r){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,i&&(o=2&r[0]?i.return:r[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,r[1])).done)return o;switch(i=0,o&&(r=[2&r[0],o.value]),r[0]){case 0:case 1:o=r;break;case 4:return a.label++,{value:r[1],done:!1};case 5:a.label++,i=r[1],r=[0];continue;case 7:r=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===r[0]||2===r[0])){a=0;continue}if(3===r[0]&&(!o||r[1]>o[0]&&r[1]<o[3])){a.label=r[1];break}if(6===r[0]&&a.label<o[1]){a.label=o[1],o=r;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(r);break}o[2]&&a.ops.pop(),a.trys.pop();continue}r=e.call(t,a)}catch(s){r=[6,s],i=0}finally{n=o=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,s])}}};(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{upP9:function(t,e,n){"use strict";n.r(e),n.d(e,"ion_toggle",(function(){return s}));var i=n("c1op"),o=(n("AfW+"),n("aiEM")),r=n("Dl6n"),a=n("opz7"),s=function(){function t(t){var e=this;Object(i.l)(this,t),this.inputId="ion-tg-"+d++,this.lastDrag=0,this.activated=!1,this.name=this.inputId,this.checked=!1,this.disabled=!1,this.value="on",this.onClick=function(){e.lastDrag+300<Date.now()&&(e.checked=!e.checked)},this.onFocus=function(){e.ionFocus.emit()},this.onBlur=function(){e.ionBlur.emit()},this.ionChange=Object(i.e)(this,"ionChange",7),this.ionFocus=Object(i.e)(this,"ionFocus",7),this.ionBlur=Object(i.e)(this,"ionBlur",7),this.ionStyle=Object(i.e)(this,"ionStyle",7)}return t.prototype.checkedChanged=function(t){this.ionChange.emit({checked:t,value:this.value})},t.prototype.disabledChanged=function(){this.emitStyle(),this.gesture&&this.gesture.setDisabled(this.disabled)},t.prototype.connectedCallback=function(){return __awaiter(this,void 0,void 0,(function(){var t,e=this;return __generator(this,(function(i){switch(i.label){case 0:return t=this,[4,Promise.resolve().then(n.bind(null,"mUkt"))];case 1:return t.gesture=i.sent().createGesture({el:this.el,gestureName:"toggle",gesturePriority:100,threshold:5,passive:!1,onStart:function(){return e.onStart()},onMove:function(t){return e.onMove(t)},onEnd:function(t){return e.onEnd(t)}}),this.disabledChanged(),[2]}}))}))},t.prototype.disconnectedCallback=function(){this.gesture&&(this.gesture.destroy(),this.gesture=void 0)},t.prototype.componentWillLoad=function(){this.emitStyle()},t.prototype.emitStyle=function(){this.ionStyle.emit({"interactive-disabled":this.disabled})},t.prototype.onStart=function(){this.activated=!0,this.setFocus()},t.prototype.onMove=function(t){c(document,this.checked,t.deltaX,-10)&&(this.checked=!this.checked,Object(a.d)())},t.prototype.onEnd=function(t){this.activated=!1,this.lastDrag=Date.now(),t.event.preventDefault(),t.event.stopImmediatePropagation()},t.prototype.getValue=function(){return this.value||""},t.prototype.setFocus=function(){this.buttonEl&&this.buttonEl.focus()},t.prototype.render=function(){var t,e=this,n=this,a=n.inputId,s=n.disabled,c=n.checked,d=n.activated,l=n.color,u=n.el,g=Object(i.d)(this),p=a+"-lbl",h=Object(o.f)(u),b=this.getValue();return h&&(h.id=p),Object(o.a)(!0,u,this.name,c?b:"",s),Object(i.i)(i.a,{onClick:this.onClick,role:"checkbox","aria-disabled":s?"true":null,"aria-checked":""+c,"aria-labelledby":p,class:Object.assign(Object.assign({},Object(r.a)(l)),(t={},t[g]=!0,t["in-item"]=Object(r.c)("ion-item",u),t["toggle-activated"]=d,t["toggle-checked"]=c,t["toggle-disabled"]=s,t.interactive=!0,t))},Object(i.i)("div",{class:"toggle-icon"},Object(i.i)("div",{class:"toggle-inner"})),Object(i.i)("button",{type:"button",onFocus:this.onFocus,onBlur:this.onBlur,disabled:s,ref:function(t){return e.buttonEl=t}}))},Object.defineProperty(t.prototype,"el",{get:function(){return Object(i.f)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(t,"watchers",{get:function(){return{checked:["checkedChanged"],disabled:["disabledChanged"]}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return":host{-webkit-box-sizing:content-box!important;box-sizing:content-box!important;display:inline-block;outline:none;contain:content;cursor:pointer;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.ion-focused) input{border:2px solid #5e9ed6}:host(.toggle-disabled){pointer-events:none}button{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}:host-context([dir=rtl]) button,[dir=rtl] button{left:unset;right:unset;right:0}button::-moz-focus-inner{border:0}:host{--background:rgba(var(--ion-text-color-rgb,0,0,0),0.3);--background-checked:rgba(var(--ion-color-primary-rgb,56,128,255),0.5);--handle-background:#fff;--handle-background-checked:var(--ion-color-primary,#3880ff);padding-left:12px;padding-right:12px;padding-top:12px;padding-bottom:12px;-webkit-box-sizing:content-box;box-sizing:content-box;position:relative;width:36px;height:14px;contain:strict}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px}}:host(.ion-color.toggle-checked) .toggle-icon{background:rgba(var(--ion-color-base-rgb),.5)}:host(.ion-color.toggle-checked) .toggle-inner{background:var(--ion-color-base)}.toggle-icon{border-radius:14px;display:block;position:relative;width:100%;height:100%;-webkit-transition:background-color .16s;transition:background-color .16s;background:var(--background);pointer-events:none}.toggle-inner{left:0;top:-3px;border-radius:50%;position:absolute;width:20px;height:20px;-webkit-transition-duration:.16s;transition-duration:.16s;-webkit-transition-property:background-color,-webkit-transform;transition-property:background-color,-webkit-transform;transition-property:transform,background-color;transition-property:transform,background-color,-webkit-transform;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1);background:var(--handle-background);-webkit-box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);will-change:transform,background-color;contain:strict}:host-context([dir=rtl]) .toggle-inner,[dir=rtl] .toggle-inner{left:unset;right:unset;right:0}:host(.toggle-checked) .toggle-icon{background:var(--background-checked)}:host(.toggle-checked) .toggle-inner{-webkit-transform:translate3d(16px,0,0);transform:translate3d(16px,0,0);background:var(--handle-background-checked)}:host-context([dir=rtl]).toggle-checked .toggle-inner,:host-context([dir=rtl]):host(.toggle-checked) .toggle-inner{-webkit-transform:translate3d(calc(-1 * 16px),0,0);transform:translate3d(calc(-1 * 16px),0,0)}:host(.toggle-disabled){opacity:.3}:host(.in-item[slot]){margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:16px;padding-right:0;padding-top:12px;padding-bottom:12px;cursor:pointer}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.in-item[slot]){padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:0;padding-inline-end:0}}:host(.in-item[slot=start]){padding-left:2px;padding-right:18px;padding-top:12px;padding-bottom:12px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.in-item[slot=start]){padding-left:unset;padding-right:unset;-webkit-padding-start:2px;padding-inline-start:2px;-webkit-padding-end:18px;padding-inline-end:18px}}"},enumerable:!0,configurable:!0}),t}(),c=function(t,e,n,i){var o="rtl"===t.dir;return e?!o&&i>n||o&&-i<n:!o&&-i<n||o&&i>n},d=0}}]);