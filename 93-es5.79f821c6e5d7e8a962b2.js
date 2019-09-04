function asyncGeneratorStep(t,e,i,n,r,s,o){try{var a=t[s](o),l=a.value}catch(h){return void i(h)}a.done?e(l):Promise.resolve(l).then(n,r)}function _asyncToGenerator(t){return function(){var e=this,i=arguments;return new Promise(function(n,r){var s=t.apply(e,i);function o(t){asyncGeneratorStep(s,n,r,o,a,"next",t)}function a(t){asyncGeneratorStep(s,n,r,o,a,"throw",t)}o(void 0)})}}function _defineProperties(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function _createClass(t,e,i){return e&&_defineProperties(t.prototype,e),i&&_defineProperties(t,i),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{"8Mb5":function(t,e,i){"use strict";i.r(e),i.d(e,"ion_virtual_scroll",function(){return h});var n=i("mLBW");i("TJLY");var r=function(t,e){var i=s(t,e);return i&&t.ownerDocument?t.ownerDocument.importNode(i.content,!0).children[0]:null},s=function(t,e){switch(e){case"item":return t.querySelector("template:not([name])");case"header":return t.querySelector("template[name=header]");case"footer":return t.querySelector("template[name=footer]")}},o=function(t,e){return 0===e?0:e===(t.length>0?t[t.length-1].index:0)+1?t.length:t.findIndex(function(t){return t.index===e})},a=function(t,e,i){if(0===i&&e.length>=t.length)return e;for(var n=0;n<e.length;n++)t[n+i]=e[n];return t},l=function(t,e,i,n,r,s,o,a,l,h,c,u){for(var d=[],f=u+c,p=c;p<f;p++){var m=t[p];if(r){var g=r(m,p,t);null!=g&&d.push({i:h++,type:"header",value:g,index:p,height:i?i(g,p):o,reads:i?0:2,visible:!!i})}if(d.push({i:h++,type:"item",value:m,index:p,height:e?e(m,p):l,reads:e?0:2,visible:!!e}),s){var v=s(m,p,t);null!=v&&d.push({i:h++,type:"footer",value:v,index:p,height:n?n(v,p):a,reads:n?0:2,visible:!!n})}}return d},h=function(){function t(t){var e=this;Object(n.m)(this,t),this.range={offset:0,length:0},this.viewportHeight=0,this.cells=[],this.virtualDom=[],this.isEnabled=!1,this.viewportOffset=0,this.currentScrollTop=0,this.indexDirty=0,this.lastItemLen=0,this.totalHeight=0,this.approxItemHeight=45,this.approxHeaderHeight=30,this.approxFooterHeight=30,this.onScroll=function(){e.updateVirtualScroll()}}var e=t.prototype;return e.itemsChanged=function(){this.calcCells(),this.updateVirtualScroll()},e.componentDidLoad=function(){var t=_asyncToGenerator(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!(e=this.el.closest("ion-content"))){t.next=12;break}return t.next=4,e.componentOnReady();case 4:return this.contentEl=e,t.next=7,e.getScrollElement();case 7:this.scrollEl=t.sent,this.calcCells(),this.updateState(),t.next=13;break;case 12:console.error("virtual-scroll must be used inside ion-content");case 13:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),e.componentDidUpdate=function(){this.updateState()},e.componentDidUnload=function(){this.scrollEl=void 0},e.onResize=function(){this.calcCells(),this.updateVirtualScroll()},e.positionForItem=function(t){return Promise.resolve(function(t,e,i){var n=e.find(function(e){return"item"===e.type&&e.index===t});return n?i[n.i]:-1}(t,this.cells,this.getHeightIndex()))},e.checkRange=function(){var t=_asyncToGenerator(regeneratorRuntime.mark(function t(e,i){var n,r,s;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(void 0===i&&(i=-1),this.items){t.next=3;break}return t.abrupt("return");case 3:n=-1===i?this.items.length-e:i,r=o(this.cells,e),s=l(this.items,this.itemHeight,this.headerHeight,this.footerHeight,this.headerFn,this.footerFn,this.approxHeaderHeight,this.approxFooterHeight,this.approxItemHeight,r,e,n),this.cells=a(this.cells,s,r),this.lastItemLen=this.items.length,this.indexDirty=Math.max(e-1,0),this.scheduleUpdate();case 5:case"end":return t.stop()}},t,this)}));return function(e,i){return t.apply(this,arguments)}}(),e.checkEnd=function(){var t=_asyncToGenerator(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.items&&this.checkRange(this.lastItemLen);case 1:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),e.updateVirtualScroll=function(){this.isEnabled&&this.scrollEl&&(this.timerUpdate&&(clearTimeout(this.timerUpdate),this.timerUpdate=void 0),Object(n.g)(this.readVS.bind(this)),Object(n.n)(this.writeVS.bind(this)))},e.readVS=function(){for(var t=this.contentEl,e=this.scrollEl,i=0,n=this.el;n&&n!==t;)i+=n.offsetTop,n=n.parentElement;this.viewportOffset=i,e&&(this.viewportHeight=e.offsetHeight,this.currentScrollTop=e.scrollTop)},e.writeVS=function(){var t,e,i,n=this.indexDirty,s=(t=this.currentScrollTop-this.viewportOffset,e=this.viewportHeight,i=100,{top:Math.max(t-i,0),bottom:t+e+i}),o=this.getHeightIndex(),a=function(t,e,i){for(var n=e.top,r=e.bottom,s=0;s<t.length&&!(t[s]>n);s++);for(var o=Math.max(s-i-1,0);s<t.length&&!(t[s]>=r);s++);return{offset:o,length:Math.min(s+i,t.length)-o}}(o,s,2);(function(t,e,i){return t<=i.offset+i.length||e.offset!==i.offset||e.length!==i.length})(n,this.range,a)&&(this.range=a,function(t,e,i,n){var r=t,s=Array.isArray(r),o=0;for(r=s?r:r[Symbol.iterator]();;){var a;if(s){if(o>=r.length)break;a=r[o++]}else{if((o=r.next()).done)break;a=o.value}var l=a;l.change=0,l.d=!0}for(var h=[],c=n.offset+n.length,u=function(n){var r=i[n],s=t.find(function(t){return t.d&&t.cell===r});if(s){var o=e[n];o!==s.top&&(s.top=o,s.change=1),s.d=!1}else h.push(r)},d=n.offset;d<c;d++)u(d);for(var f=t.filter(function(t){return t.d}),p=function(){var i=g[m],n=f.find(function(t){return t.d&&t.cell.type===i.type}),r=i.i;n?(n.d=!1,n.change=2,n.cell=i,n.top=e[r]):t.push({d:!1,cell:i,visible:!0,change:2,top:e[r]})},m=0,g=h;m<g.length;m++)p();t.filter(function(t){return t.d&&-9999!==t.top}).forEach(function(t){t.change=1,t.top=-9999})}(this.virtualDom,o,this.cells,a),this.nodeRender?function(t,e,i,n){for(var s,o=Array.from(t.children).filter(function(t){return"TEMPLATE"!==t.tagName}),a=o.length,l=0;l<i.length;l++){var h=i[l],c=h.cell;if(2===h.change){if(l<a)e(s=o[l],c,l);else{var u=r(t,c.type);(s=e(u,c,l)||u).classList.add("virtual-item"),t.appendChild(s)}s.$ionCell=c}else s=o[l];0!==h.change&&(s.style.transform="translate3d(0,"+h.top+"px,0)");var d=c.visible;h.visible!==d&&(d?s.classList.remove("virtual-loading"):s.classList.add("virtual-loading"),h.visible=d),c.reads>0&&(n(c,s),c.reads--)}}(this.el,this.nodeRender,this.virtualDom,this.updateCellHeight.bind(this)):this.domRender?this.domRender(this.virtualDom):this.renderItem&&this.el.forceUpdate())},e.updateCellHeight=function(t,e){var i=this,n=function(){if(e.$ionCell===t){var n=window.getComputedStyle(e),r=e.offsetHeight+parseFloat(n.getPropertyValue("margin-bottom"));i.setCellHeight(t,r)}};e&&e.componentOnReady?e.componentOnReady().then(n):n()},e.setCellHeight=function(t,e){var i=t.i;t===this.cells[i]&&(t.height===e&&!0===t.visible||(t.visible=!0,t.height=e,this.indexDirty=Math.min(this.indexDirty,i),this.scheduleUpdate()))},e.scheduleUpdate=function(){var t=this;clearTimeout(this.timerUpdate),this.timerUpdate=setTimeout(function(){return t.updateVirtualScroll()},100)},e.updateState=function(){var t=!(!this.scrollEl||!this.cells);t!==this.isEnabled&&(this.enableScrollEvents(t),t&&this.updateVirtualScroll())},e.calcCells=function(){this.items&&(this.lastItemLen=this.items.length,this.cells=l(this.items,this.itemHeight,this.headerHeight,this.footerHeight,this.headerFn,this.footerFn,this.approxHeaderHeight,this.approxFooterHeight,this.approxItemHeight,0,0,this.lastItemLen),this.indexDirty=0)},e.getHeightIndex=function(){return this.indexDirty!==1/0&&this.calcHeightIndex(this.indexDirty),this.heightIndex},e.calcHeightIndex=function(t){void 0===t&&(t=0),this.heightIndex=function(t,e){if(!t)return new Uint32Array(e);if(t.length===e)return t;if(e>t.length){var i=new Uint32Array(e);return i.set(t),i}return t.subarray(0,e)}(this.heightIndex,this.cells.length),this.totalHeight=function(t,e,i){for(var n=t[i],r=i;r<t.length;r++)t[r]=n,n+=e[r].height;return n}(this.heightIndex,this.cells,t),this.indexDirty=1/0},e.enableScrollEvents=function(t){var e=this;this.rmEvent&&(this.rmEvent(),this.rmEvent=void 0);var i=this.scrollEl;i&&(this.isEnabled=t,i.addEventListener("scroll",this.onScroll),this.rmEvent=function(){i.removeEventListener("scroll",e.onScroll)})},e.renderVirtualNode=function(t){var e=t.cell,i=e.type,n=e.value,r=e.index;switch(i){case"item":return this.renderItem(n,r);case"header":return this.renderHeader(n,r);case"footer":return this.renderFooter(n,r)}},e.hostData=function(){return{style:{height:this.totalHeight+"px"}}},e.__stencil_render=function(){var t=this;if(this.renderItem)return Object(n.i)(c,{dom:this.virtualDom},this.virtualDom.map(function(e){return t.renderVirtualNode(e)}))},e.render=function(){return Object(n.i)(n.a,this.hostData(),this.__stencil_render())},_createClass(t,[{key:"el",get:function(){return Object(n.f)(this)}}],[{key:"watchers",get:function(){return{itemHeight:["itemsChanged"],headerHeight:["itemsChanged"],footerHeight:["itemsChanged"],items:["itemsChanged"]}}},{key:"style",get:function(){return"ion-virtual-scroll{display:block;position:relative;width:100%;contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ion-virtual-scroll>.virtual-loading{opacity:0}ion-virtual-scroll>.virtual-item{position:absolute!important;top:0!important;right:0!important;left:0!important;-webkit-transition-duration:0ms;transition-duration:0ms;will-change:transform}"}}]),t}(),c=function(t,e,i){var n=t.dom;return i.map(e,function(t,e){var i=n[e],r=t.vattrs||{},s=r.class||"";return s+="virtual-item ",i.visible||(s+="virtual-loading"),Object.assign({},t,{vattrs:Object.assign({},r,{class:s,style:Object.assign({},r.style,{transform:"translate3d(0,"+i.top+"px,0)"})})})})}}}]);