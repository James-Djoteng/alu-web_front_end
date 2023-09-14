"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["app_assets_modules_github_ref-selector_ts"],{82368:(e,t,i)=>{var n=i(53290),r=i(69567),s=i(76006),h=i(17945),a=function(e,t,i,n){var r,s=arguments.length,h=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)h=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(h=(s<3?r(h):s>3?r(t,i,h):r(t,i))||h);return s>3&&h&&Object.defineProperty(t,i,h),h};let o=class RefSelectorElement extends HTMLElement{connectedCallback(){window.addEventListener("resize",this.windowResized),this.refType="branch"===this.getRequiredAttr("type")?n.r.Branch:n.r.Tag;let e=this.getAttribute("current-committish");this.currentCommittish=e?atob(e):null,this.input=this.hasAttribute("initial-filter")&&this.currentCommittish||"",this.defaultBranch=atob(this.getRequiredAttr("default-branch")),this.nameWithOwner=atob(this.getRequiredAttr("name-with-owner")),this.canCreate=this.hasAttribute("can-create"),this.prefetchOnMouseover=this.hasAttribute("prefetch-on-mouseover");let t=this.getRequiredAttr("query-endpoint"),i=this.getRequiredAttr("cache-key");this.index=new n.W(this.refType,this,t,i,this.nameWithOwner),this.updateViewportSize(),this.setupFetchListeners()}disconnectedCallback(){this.resizeAnimationRequest&&cancelAnimationFrame(this.resizeAnimationRequest),window.removeEventListener("resize",this.windowResized)}updateViewportSize(){this.isMobileViewport=window.innerWidth<544,this.windowHeight=window.innerHeight}inputEntered(e){this.input=e.detail,this.render()}tabSelected(){this.index.fetchData()}renderTemplate(e,t){return new r.R(e,t,r.XK)}renderRow(e){let t=this.index.currentSearchResult[e];if(!t&&e>=this.listLength)return document.createElement("span");if(this.index.fetchFailed)return this.renderTemplate(this.fetchFailedTemplate,{index:e,refName:this.input});if(!t){let t=this.input===this.currentCommittish;return this.isCurrentVisible||(this.isCurrentVisible=t),this.renderTemplate(this.noMatchTemplate,{index:e,isCurrent:t,refName:this.input})}let i=this.input.length>0,n=t===this.currentCommittish;this.isCurrentVisible||(this.isCurrentVisible=n);let r=this.renderTemplate(this.itemTemplate,{refName:t,index:e,isFilteringClass:i?"is-filtering":"",urlEncodedRefName:this.urlEncodeRef(t),isCurrent:n,isNotDefault:t!==this.defaultBranch});if(i){let e=r.querySelector("span");e.textContent="";let i=t.split(this.input),n=i.length-1;for(let t=0;t<i.length;t++){let r=i[t];if(e.appendChild(document.createTextNode(r)),t<n){let t=document.createElement("b");t.textContent=this.input,e.appendChild(t)}}}return r}urlEncodeRef(e){return encodeURIComponent(e).replaceAll("%2F","/").replaceAll("%3A",":").replaceAll("%2B","+")}render(){if(this.currentSelectionIndex=null,!this.index.isLoading){if(!this.virtualizedList){this.index.search(this.input),this.setupVirtualizedList();return}this.listContainer.scrollTop=0,this.index.search(this.input),this.virtualizedList.setRowCount(this.listLength)}}get listHeight(){return this.isMobileViewport?.3*this.windowHeight:330}get listLength(){let e=this.index.currentSearchResult.length;return this.showCreateRow?e+1:e||1}get showCreateRow(){return!this.index.fetchFailed&&!this.index.exactMatchFound&&""!==this.input&&this.canCreate}getRequiredAttr(e,t=this){let i=t.getAttribute(e);if(!i)throw Error(`Missing attribute for ${t}: ${e}`);return i}setupFetchListeners(){let e=this.closest("details"),t=!1,i=()=>{t||(this.index.fetchData(),t=!0)};if(!e||e.open){i();return}this.prefetchOnMouseover&&e.addEventListener("mouseover",i,{once:!0}),this.addEventListener("keydown",this.keydown),this.addEventListener("change",this.updateCurrent);let n=e.querySelector("input[data-ref-filter]");n&&(n.addEventListener("input",()=>{this.input=n.value,this.render()}),n.addEventListener("keydown",t=>{if("ArrowDown"!==t.key&&("Tab"!==t.key||t.shiftKey)){if("Enter"===t.key){let i=this.index.currentSearchResult.indexOf(this.input);if(-1===i){if(!this.showCreateRow)return;i=this.listLength-1}let n=e.querySelector(`[data-index="${i}"]`);n.click(),t.preventDefault()}}else t.preventDefault(),t.stopPropagation(),this.focusFirstListMember()}))}focusFirstListMember(){this.virtualizedList&&(this.currentSelectionIndex=0,this.focusItemAtIndex(this.currentSelectionIndex))}updateCurrent(e){e.target instanceof HTMLInputElement&&e.target.checked&&e.target.value&&(this.currentCommittish=e.target.value)}keydown(e){if(null!==this.currentSelectionIndex){if("Enter"===e.key){let t=document.activeElement;if(!t)return;t.click(),e.preventDefault();return}if("Tab"!==e.key&&"Escape"!==e.key)switch(e.preventDefault(),e.stopPropagation(),e.key){case"ArrowUp":this.currentSelectionIndex--,this.currentSelectionIndex<0&&(this.currentSelectionIndex=this.listLength-1),this.focusItemAtIndex(this.currentSelectionIndex);break;case"Home":this.currentSelectionIndex=0,this.focusItemAtIndex(this.currentSelectionIndex);break;case"End":this.currentSelectionIndex=this.listLength-1,this.focusItemAtIndex(this.currentSelectionIndex);break;case"ArrowDown":this.currentSelectionIndex++,this.currentSelectionIndex>this.listLength-1&&(this.currentSelectionIndex=0),this.focusItemAtIndex(this.currentSelectionIndex)}}}focusItemAtIndex(e){this.virtualizedList.scrollToIndex(e,"center"),setTimeout(()=>{let t=this.listContainer.querySelector(`[data-index="${e}"]`);t&&t.focus()},20)}setupVirtualizedList(){this.listContainer.textContent="",this.listContainer.style.maxHeight=`${this.listHeight}px`,this.virtualizedList=new h.Z(this.listContainer,{height:this.listHeight,rowCount:this.listLength,renderRow:this.renderRow.bind(this),rowHeight:e=>{let t=this.isMobileViewport?54:33;return this.showCreateRow&&e===this.listLength-1?51:t},onRowsRendered:()=>{this.hiddenCurrentElement&&(this.listContainer.removeChild(this.hiddenCurrentElement),delete this.hiddenCurrentElement),this.isCurrentVisible?this.isCurrentVisible=!1:this.hiddenCurrentItemTemplate&&(this.hiddenCurrentElement=document.createElement("div"),this.hiddenCurrentElement?.appendChild(this.renderTemplate(this.hiddenCurrentItemTemplate,{refName:this.currentCommittish})),this.listContainer.appendChild(this.hiddenCurrentElement))},initialIndex:0,overscanCount:6}),this.virtualizedList.resize.bind(this.virtualizedList)}constructor(...e){super(...e),this.isCurrentVisible=!1,this.currentSelectionIndex=null,this.handleWindowResize=()=>{if(!this.virtualizedList)return;let e=this.isMobileViewport,t=this.windowHeight;this.updateViewportSize();let i=e!==this.isMobileViewport,n=t!==this.windowHeight;if(i){this.virtualizedList.destroy(),this.setupVirtualizedList();return}this.isMobileViewport&&n&&(this.listContainer.style.maxHeight=`${this.listHeight}px`,this.virtualizedList.resize(this.listHeight))},this.windowResized=()=>{this.resizeAnimationRequest&&cancelAnimationFrame(this.resizeAnimationRequest),this.resizeAnimationRequest=requestAnimationFrame(this.handleWindowResize)}}};a([s.fA],o.prototype,"listContainer",void 0),a([s.fA],o.prototype,"itemTemplate",void 0),a([s.fA],o.prototype,"noMatchTemplate",void 0),a([s.fA],o.prototype,"fetchFailedTemplate",void 0),a([s.fA],o.prototype,"hiddenCurrentItemTemplate",void 0),o=a([s.Ih],o)},53290:(e,t,i)=>{i.d(t,{W:()=>SearchIndex,r:()=>n});var n,r=i(86702),s=i(34855);let{getItem:h,setItem:a,removeItem:o}=(0,r.Z)("localStorage",{throwQuotaErrorsOnSet:!0});!function(e){e.Branch="branch",e.Tag="tag"}(n||(n={}));let SearchIndex=class SearchIndex{render(){this.selector.render()}async fetchData(){try{if(!this.isLoading||this.fetchInProgress)return;if(!this.bootstrapFromLocalStorage()){this.fetchInProgress=!0,this.fetchFailed=!1;let e=await fetch(`${this.refEndpoint}?type=${this.refType}`,{headers:{Accept:"application/json"}});await this.processResponse(e)}this.isLoading=!1,this.fetchInProgress=!1,this.render()}catch(e){this.fetchInProgress=!1,this.fetchFailed=!0}}async processResponse(e){if(this.emitStats(e),!e.ok){this.fetchFailed=!0;return}let t=e.clone(),i=await e.json();this.knownItems=i.refs,this.cacheKey=i.cacheKey,this.flushToLocalStorage(await t.text())}emitStats(e){if(!e.ok){(0,s.b)({incrementKey:"REF_SELECTOR_BOOT_FAILED"},!0);return}switch(e.status){case 200:(0,s.b)({incrementKey:"REF_SELECTOR_BOOTED_FROM_UNCACHED_HTTP"});break;case 304:(0,s.b)({incrementKey:"REF_SELECTOR_BOOTED_FROM_HTTP_CACHE"});break;default:(0,s.b)({incrementKey:"REF_SELECTOR_UNEXPECTED_RESPONSE"})}}search(e){let t;if(this.searchTerm=e,""===e){this.currentSearchResult=this.knownItems;return}let i=[],n=[];for(let r of(this.exactMatchFound=!1,this.knownItems))if(!((t=r.indexOf(e))<0)){if(0===t){e===r?(n.unshift(r),this.exactMatchFound=!0):n.push(r);continue}i.push(r)}this.currentSearchResult=[...n,...i]}bootstrapFromLocalStorage(){let e=h(this.localStorageKey);if(!e)return!1;let t=JSON.parse(e);return t.cacheKey===this.cacheKey&&"refs"in t?(this.knownItems=t.refs,this.isLoading=!1,(0,s.b)({incrementKey:"REF_SELECTOR_BOOTED_FROM_LOCALSTORAGE"}),!0):(o(this.localStorageKey),!1)}async flushToLocalStorage(e){try{a(this.localStorageKey,e)}catch(t){if(t.message.toLowerCase().includes("quota")){this.clearSiblingLocalStorage(),(0,s.b)({incrementKey:"REF_SELECTOR_LOCALSTORAGE_OVERFLOWED"});try{a(this.localStorageKey,e)}catch(e){e.message.toLowerCase().includes("quota")&&(0,s.b)({incrementKey:"REF_SELECTOR_LOCALSTORAGE_GAVE_UP"})}}else throw t}}clearSiblingLocalStorage(){for(let e of Object.keys(localStorage))e.startsWith(SearchIndex.LocalStoragePrefix)&&o(e)}get localStorageKey(){return`${SearchIndex.LocalStoragePrefix}:${this.nameWithOwner}:${this.refType}`}constructor(e,t,i,n,r){this.knownItems=[],this.currentSearchResult=[],this.exactMatchFound=!1,this.searchTerm="",this.isLoading=!0,this.fetchInProgress=!1,this.fetchFailed=!1,this.refType=e,this.selector=t,this.refEndpoint=i,this.cacheKey=n,this.nameWithOwner=r}};SearchIndex.LocalStoragePrefix="ref-selector"},86702:(e,t,i)=>{i.d(t,{Z:()=>r,_:()=>n._});var n=i(44544);let r=n.Z},34855:(e,t,i)=>{i.d(t,{B:()=>n.B,b:()=>n.b});var n=i(71643)},4412:(e,t,i)=>{i.d(t,{C:()=>s,x:()=>r});var n=i(86283);let r=n.n4?.readyState==="interactive"||n.n4?.readyState==="complete"?Promise.resolve():new Promise(e=>{n.n4?.addEventListener("DOMContentLoaded",()=>{e()})}),s=n.n4?.readyState==="complete"?Promise.resolve():new Promise(e=>{n.iG?.addEventListener("load",e)})},53729:(e,t,i)=>{i.d(t,{A7:()=>u,ko:()=>l,q1:()=>a});var n=i(15205),r=i(86283);let s=(0,n.Z)(h);function h(){return r.n4?.head?.querySelector('meta[name="runtime-environment"]')?.content||""}let a=(0,n.Z)(o);function o(){return r.n4?.head?.querySelector('meta[name="is-private-instance"]')?.content==="true"}let l=(0,n.Z)(c);function c(){return"enterprise"===s()}let u="webpack"},44544:(e,t,i)=>{i.d(t,{Z:()=>h,_:()=>a});var n=i(86283),r=i(71643);let s=class NoOpStorage{getItem(){return null}setItem(){}removeItem(){}clear(){}key(){return null}get length(){return 0}};function h(e,t={throwQuotaErrorsOnSet:!1},i=n.iG,h=e=>e,a=e=>e){let o;try{if(!i)throw Error();o=i[e]||new s}catch{o=new s}let{throwQuotaErrorsOnSet:l}=t;function c(e){t.sendCacheStats&&(0,r.b)({incrementKey:e})}function u(e){try{if(o.removeItem(e),t.ttl){let t=`${e}:expiry`;o.removeItem(t)}}catch(e){}}return{getItem:function(e,t=new Date().getTime()){try{let i=o.getItem(e);if(!i)return null;let n=`${e}:expiry`,r=Number(o.getItem(n));if(r&&t>r)return u(e),u(n),c("SAFE_STORAGE_VALUE_EXPIRED"),null;return c("SAFE_STORAGE_VALUE_WITHIN_TTL"),h(i)}catch(e){return null}},setItem:function(e,i,n=new Date().getTime()){try{if(o.setItem(e,a(i)),t.ttl){let i=`${e}:expiry`,r=n+t.ttl;o.setItem(i,r.toString())}}catch(e){if(l&&e.message.toLowerCase().includes("quota"))throw e}},removeItem:u,clear:o.clear,key:o.key,get length(){return o.length}}}function a(e){return h(e,{throwQuotaErrorsOnSet:!1},window,JSON.parse,JSON.stringify)}},86283:(e,t,i)=>{i.d(t,{Qg:()=>n.Qg,W6:()=>n.W6,cF:()=>n.cF,iG:()=>r.iG,jX:()=>r.jX,n4:()=>r.n4});var n=i(35647),r=i(73614)},73614:(e,t,i)=>{i.d(t,{iG:()=>r,jX:()=>s,n4:()=>n});let n="undefined"==typeof document?void 0:document,r="undefined"==typeof window?void 0:window,s="undefined"==typeof location?{pathname:"",origin:"",search:""}:location},35647:(e,t,i)=>{i.d(t,{Qg:()=>s,W6:()=>r,cF:()=>h});var n=i(73614);let r=void 0===n.n4,s=!r;function h(){return!!r||Boolean(n.n4.querySelector('react-app[data-ssr="true"]'))}},71643:(e,t,i)=>{i.d(t,{B:()=>p,b:()=>a});var n=i(86283),r=i(4412),s=i(53729);let h=[];function a(e,t=!1){void 0===e.timestamp&&(e.timestamp=new Date().getTime()),e.loggedIn=m(),e.staff=p(),e.bundler=s.A7,h.push(e),t?c():l()}let o=null;async function l(){await r.C,null==o&&(o=window.requestIdleCallback(c))}function c(){if(o=null,!h.length)return;let e=n.n4?.head?.querySelector('meta[name="browser-stats-url"]')?.content;if(!e)return;let t=u(h);for(let i of t)f(e,`{"stats": [${i.join(",")}] }`);h=[]}function u(e){let t=[],i=e.map(e=>JSON.stringify(e));for(;i.length>0;)t.push(d(i));return t}function d(e){let t=e.shift(),i=[t],n=t.length;for(;e.length>0&&n<=65536;){let t=e[0].length;if(n+t<=65536){let r=e.shift();i.push(r),n+=t}else break}return i}function f(e,t){try{navigator.sendBeacon&&navigator.sendBeacon(e,t)}catch{}}function m(){return!!n.n4?.head?.querySelector('meta[name="user-login"]')?.content}function p(){return!!n.n4?.head?.querySelector('meta[name="user-staff"]')?.content}n.n4?.addEventListener("pagehide",c),n.n4?.addEventListener("visibilitychange",c)}}]);
//# sourceMappingURL=app_assets_modules_github_ref-selector_ts-6c2e9677ebe8.js.map