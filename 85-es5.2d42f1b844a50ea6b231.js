function asyncGeneratorStep(t,e,n,r,i,a,o){try{var s=t[a](o),c=s.value}catch(u){return void n(u)}s.done?e(c):Promise.resolve(c).then(r,i)}function _asyncToGenerator(t){return function(){var e=this,n=arguments;return new Promise(function(r,i){var a=t.apply(e,n);function o(t){asyncGeneratorStep(a,r,i,o,s,"next",t)}function s(t){asyncGeneratorStep(a,r,i,o,s,"throw",t)}o(void 0)})}}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{TpdJ:function(t,e,n){"use strict";n.r(e),n.d(e,"ion_tab",function(){return a}),n.d(e,"ion_tabs",function(){return o});var r=n("mLBW"),i=(n("TJLY"),n("1hGh")),a=function(){function t(t){Object(r.m)(this,t),this.loaded=!1,this.active=!1}var e=t.prototype;return e.componentWillLoad=function(){},e.setActive=function(){var t=_asyncToGenerator(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.prepareLazyLoaded();case 2:this.active=!0;case 3:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),e.prepareLazyLoaded=function(){var t=_asyncToGenerator(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(this.loaded||null==this.component){t.next=9;break}return this.loaded=!0,t.prev=2,t.abrupt("return",Object(i.a)(this.delegate,this.el,this.component,["ion-page"]));case 6:t.prev=6,t.t0=t.catch(2),console.error(t.t0);case 9:case"end":return t.stop()}},t,this,[[2,6]])}));return function(){return t.apply(this,arguments)}}(),e.hostData=function(){var t=this.tab,e=this.active;return{role:"tabpanel","aria-hidden":e?null:"true","aria-labelledby":"tab-button-"+t,class:{"ion-page":void 0===this.component,"tab-hidden":!e}}},e.__stencil_render=function(){return Object(r.i)("slot",null)},e.render=function(){return Object(r.i)(r.a,this.hostData(),this.__stencil_render())},_createClass(t,[{key:"el",get:function(){return Object(r.f)(this)}}],[{key:"style",get:function(){return":host(.tab-hidden){display:none!important}"}}]),t}(),o=function(){function t(t){var e=this;Object(r.m)(this,t),this.transitioning=!1,this.tabs=[],this.useRouter=!1,this.onTabClicked=function(t){var n=t.detail,r=n.href,i=n.tab,a=e.tabs.find(function(t){return t.tab===i});if(e.useRouter&&void 0!==r){var o=document.querySelector("ion-router");o&&o.push(r)}else a&&e.select(a)},this.ionNavWillLoad=Object(r.d)(this,"ionNavWillLoad",7),this.ionTabsWillChange=Object(r.d)(this,"ionTabsWillChange",3),this.ionTabsDidChange=Object(r.d)(this,"ionTabsDidChange",3)}var e=t.prototype;return e.componentWillLoad=function(){var t=this;this.useRouter||(this.useRouter=!!document.querySelector("ion-router")&&!this.el.closest("[no-router]")),this.tabs=Array.from(this.el.querySelectorAll("ion-tab")),this.initSelect().then(function(){t.ionNavWillLoad.emit(),t.componentWillUpdate()})},e.componentDidUnload=function(){this.tabs.length=0,this.selectedTab=this.leavingTab=void 0},e.componentWillUpdate=function(){var t=this.el.querySelector("ion-tab-bar");t&&(t.selectedTab=this.selectedTab?this.selectedTab.tab:void 0)},e.select=function(){var t=_asyncToGenerator(regeneratorRuntime.mark(function t(e){var n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.getTab(e);case 2:if(n=t.sent,t.t0=!!this.shouldSwitch(n),!t.t0){t.next=11;break}return t.next=7,this.setActive(n);case 7:return t.next=9,this.notifyRouter();case 9:this.tabSwitch(),t.t0=!0;case 11:return t.abrupt("return",t.t0);case 12:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),e.getTab=function(){var t=_asyncToGenerator(regeneratorRuntime.mark(function t(e){var n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n="string"==typeof e?this.tabs.find(function(t){return t.tab===e}):e,t.abrupt("return",(n||console.error('tab with id: "'+n+'" does not exist'),n));case 2:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),e.getSelected=function(){return Promise.resolve(this.selectedTab?this.selectedTab.tab:void 0)},e.setRouteId=function(){var t=_asyncToGenerator(regeneratorRuntime.mark(function t(e){var n,r=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.getTab(e);case 2:if(n=t.sent,!this.shouldSwitch(n)){t.next=9;break}return t.next=6,this.setActive(n);case 6:t.t0={changed:!0,element:this.selectedTab,markVisible:function(){return r.tabSwitch()}},t.next=10;break;case 9:t.t0={changed:!1,element:this.selectedTab};case 10:return t.abrupt("return",t.t0);case 11:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),e.getRouteId=function(){var t=_asyncToGenerator(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.selectedTab&&this.selectedTab.tab,t.abrupt("return",void 0!==e?{id:e,element:this.selectedTab}:void 0);case 2:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),e.initSelect=function(){var t=_asyncToGenerator(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(t.t0=this.useRouter,t.t0){t.next=6;break}return t.next=4,Promise.all(this.tabs.map(function(t){return t.componentOnReady()}));case 4:return t.next=6,this.select(this.tabs[0]);case 6:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),e.setActive=function(t){return this.transitioning?Promise.reject("transitioning already happening"):(this.transitioning=!0,this.leavingTab=this.selectedTab,this.selectedTab=t,this.ionTabsWillChange.emit({tab:t.tab}),t.setActive())},e.tabSwitch=function(){var t=this.selectedTab,e=this.leavingTab;this.leavingTab=void 0,this.transitioning=!1,t&&e!==t&&(e&&(e.active=!1),this.ionTabsDidChange.emit({tab:t.tab}))},e.notifyRouter=function(){if(this.useRouter){var t=document.querySelector("ion-router");if(t)return t.navChanged("forward")}return Promise.resolve(!1)},e.shouldSwitch=function(t){return void 0!==t&&t!==this.selectedTab&&!this.transitioning},e.render=function(){return Object(r.i)(r.a,{onIonTabButtonClick:this.onTabClicked},Object(r.i)("slot",{name:"top"}),Object(r.i)("div",{class:"tabs-inner"},Object(r.i)("slot",null)),Object(r.i)("slot",{name:"bottom"}))},_createClass(t,[{key:"el",get:function(){return Object(r.f)(this)}}],[{key:"style",get:function(){return":host{left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%;z-index:0}.tabs-inner,:host{contain:layout size style}.tabs-inner{position:relative;-ms-flex:1;flex:1}"}}]),t}()}}]);