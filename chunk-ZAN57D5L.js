import{a as s2,c as W4,e as U4,f as j4,g as V4,k as _2,l as V1,m as q4,t as G4}from"./chunk-CAFOEVDH.js";import{B as a1,Bb as $4,Cb as Z,Db as f2,Eb as m2,Fb as i1,H as g3,Hb as o1,Ib as r1,J as C3,Ja as E4,Kb as W1,Lb as U1,Ma as _,O as M,Oa as P4,P as q,Qa as $1,R as T2,Ra as $,T as G,U as g,Ub as t2,V as R1,Wa as I,Wb as b3,Xa as K,Ya as B,Za as _4,_ as o2,_a as D,a as w,ab as P2,ba as F1,ca as N,db as I4,ea as k4,gb as H,hb as A,i as D1,ia as h2,ib as O4,ja as T4,kb as D4,lb as g2,lc as j1,m as n1,ma as M2,na as E2,o as U2,oa as r2,pc as E,q as z3,qc as B4,rb as C2,rc as H4,sa as j2,sb as b2,sc as f1,tb as l2,tc as m1,u as h3,ub as B1,v as M3,vb as H1,w as w4,wb as R4,yb as F4,z as A4}from"./chunk-NM4URTZ5.js";var I2=class{},x3=(()=>{class c extends I2{getTranslation(e){return n1({})}static \u0275fac=(()=>{let e;return function(s){return(e||(e=N(c)))(s||c)}})();static \u0275prov=M({token:c,factory:c.\u0275fac})}return c})(),V2=class{},y3=(()=>{class c{handle(e){return e.key}static \u0275fac=function(l){return new(l||c)};static \u0275prov=M({token:c,factory:c.\u0275fac})}return c})();function G1(c,t){if(c===t)return!0;if(c===null||t===null)return!1;if(c!==c&&t!==t)return!0;let e=typeof c,l=typeof t,s,n,a;if(e==l&&e=="object")if(Array.isArray(c)){if(!Array.isArray(t))return!1;if((s=c.length)==t.length){for(n=0;n<s;n++)if(!G1(c[n],t[n]))return!1;return!0}}else{if(Array.isArray(t))return!1;a=Object.create(null);for(n in c){if(!G1(c[n],t[n]))return!1;a[n]=!0}for(n in t)if(!(n in a)&&typeof t[n]<"u")return!1;return!0}return!1}function x2(c){return typeof c<"u"&&c!==null}function p1(c){return q1(c)&&!A3(c)&&c!==null}function q1(c){return typeof c=="object"}function A3(c){return Array.isArray(c)}function k3(c){return typeof c=="string"}function n8(c){return typeof c=="function"}function N3(c,t){let e=Object.assign({},c);return q1(c)?(q1(c)&&q1(t)&&Object.keys(t).forEach(l=>{p1(t[l])?l in c?e[l]=N3(c[l],t[l]):Object.assign(e,{[l]:t[l]}):Object.assign(e,{[l]:t[l]})}),e):N3({},t)}function S3(c,t){let e=t.split(".");t="";do t+=e.shift(),x2(c)&&x2(c[t])&&(p1(c[t])||A3(c[t])||!e.length)?(c=c[t],t=""):e.length?t+=".":c=void 0;while(e.length);return c}function a8(c,t,e){let l=t.split("."),s=c;for(let n=0;n<l.length;n++){let a=l[n];n===l.length-1?s[a]=e:((!s[a]||!p1(s[a]))&&(s[a]={}),s=s[a])}}var O2=class{},v3=(()=>{class c extends O2{templateMatcher=/{{\s?([^{}\s]*)\s?}}/g;interpolate(e,l){if(k3(e))return this.interpolateString(e,l);if(n8(e))return this.interpolateFunction(e,l)}interpolateFunction(e,l){return e(l)}interpolateString(e,l){return l?e.replace(this.templateMatcher,(s,n)=>{let a=S3(l,n);return x2(a)?a:s}):e}static \u0275fac=(()=>{let e;return function(s){return(e||(e=N(c)))(s||c)}})();static \u0275prov=M({token:c,factory:c.\u0275fac})}return c})(),D2=class{},w3=(()=>{class c extends D2{compile(e,l){return e}compileTranslations(e,l){return e}static \u0275fac=(()=>{let e;return function(s){return(e||(e=N(c)))(s||c)}})();static \u0275prov=M({token:c,factory:c.\u0275fac})}return c})(),q2=class{defaultLang;currentLang=this.defaultLang;translations={};langs=[];onTranslationChange=new h2;onLangChange=new h2;onDefaultLangChange=new h2},K1=new T2("ISOLATE_TRANSLATE_SERVICE"),Y1=new T2("USE_DEFAULT_LANG"),X1=new T2("DEFAULT_LANGUAGE"),Q1=new T2("USE_EXTEND"),u1=c=>U2(c)?c:n1(c),G2=(()=>{class c{store;currentLoader;compiler;parser;missingTranslationHandler;useDefaultLang;extend;loadingTranslations;pending=!1;_translationRequests={};lastUseLanguage=null;get onTranslationChange(){return this.store.onTranslationChange}get onLangChange(){return this.store.onLangChange}get onDefaultLangChange(){return this.store.onDefaultLangChange}get defaultLang(){return this.store.defaultLang}set defaultLang(e){this.store.defaultLang=e}get currentLang(){return this.store.currentLang}set currentLang(e){this.store.currentLang=e}get langs(){return this.store.langs}set langs(e){this.store.langs=e}get translations(){return this.store.translations}set translations(e){this.store.translations=e}constructor(e,l,s,n,a,i=!0,o=!1,r=!1,f){this.store=e,this.currentLoader=l,this.compiler=s,this.parser=n,this.missingTranslationHandler=a,this.useDefaultLang=i,this.extend=r,o&&(this.store=new q2),f&&this.setDefaultLang(f)}setDefaultLang(e){if(e===this.defaultLang)return;let l=this.retrieveTranslations(e);typeof l<"u"?(this.defaultLang==null&&(this.defaultLang=e),l.pipe(a1(1)).subscribe(()=>{this.changeDefaultLang(e)})):this.changeDefaultLang(e)}getDefaultLang(){return this.defaultLang}use(e){if(this.lastUseLanguage=e,e===this.currentLang)return n1(this.translations[e]);this.currentLang||(this.currentLang=e);let l=this.retrieveTranslations(e);return U2(l)?(l.pipe(a1(1)).subscribe(()=>{this.changeLang(e)}),l):(this.changeLang(e),n1(this.translations[e]))}changeLang(e){e===this.lastUseLanguage&&(this.currentLang=e,this.onLangChange.emit({lang:e,translations:this.translations[e]}),this.defaultLang==null&&this.changeDefaultLang(e))}retrieveTranslations(e){if(typeof this.translations[e]>"u"||this.extend)return this._translationRequests[e]=this._translationRequests[e]||this.loadAndCompileTranslations(e),this._translationRequests[e]}getTranslation(e){return this.loadAndCompileTranslations(e)}loadAndCompileTranslations(e){this.pending=!0;let l=this.currentLoader.getTranslation(e).pipe(g3(1),a1(1));return this.loadingTranslations=l.pipe(z3(s=>this.compiler.compileTranslations(s,e)),g3(1),a1(1)),this.loadingTranslations.subscribe({next:s=>{this.translations[e]=this.extend&&this.translations[e]?w(w({},s),this.translations[e]):s,this.updateLangs(),this.pending=!1},error:s=>{this.pending=!1}}),l}setTranslation(e,l,s=!1){let n=this.compiler.compileTranslations(l,e);(s||this.extend)&&this.translations[e]?this.translations[e]=N3(this.translations[e],n):this.translations[e]=n,this.updateLangs(),this.onTranslationChange.emit({lang:e,translations:this.translations[e]})}getLangs(){return this.langs}addLangs(e){let l=e.filter(s=>!this.langs.includes(s));l.length>0&&(this.langs=[...this.langs,...l])}updateLangs(){this.addLangs(Object.keys(this.translations))}getParsedResultForKey(e,l,s){let n;if(e&&(n=this.runInterpolation(S3(e,l),s)),n===void 0&&this.defaultLang!=null&&this.defaultLang!==this.currentLang&&this.useDefaultLang&&(n=this.runInterpolation(S3(this.translations[this.defaultLang],l),s)),n===void 0){let a={key:l,translateService:this};typeof s<"u"&&(a.interpolateParams=s),n=this.missingTranslationHandler.handle(a)}return n!==void 0?n:l}runInterpolation(e,l){if(A3(e))return e.map(s=>this.runInterpolation(s,l));if(p1(e)){let s={};for(let n in e){let a=this.runInterpolation(e[n],l);a!==void 0&&(s[n]=a)}return s}else return this.parser.interpolate(e,l)}getParsedResult(e,l,s){if(l instanceof Array){let n={},a=!1;for(let o of l)n[o]=this.getParsedResultForKey(e,o,s),a=a||U2(n[o]);if(!a)return n;let i=l.map(o=>u1(n[o]));return w4(i).pipe(z3(o=>{let r={};return o.forEach((f,u)=>{r[l[u]]=f}),r}))}return this.getParsedResultForKey(e,l,s)}get(e,l){if(!x2(e)||!e.length)throw new Error('Parameter "key" is required and cannot be empty');return this.pending?this.loadingTranslations.pipe(A4(s=>u1(this.getParsedResult(s,e,l)))):u1(this.getParsedResult(this.translations[this.currentLang],e,l))}getStreamOnTranslationChange(e,l){if(!x2(e)||!e.length)throw new Error('Parameter "key" is required and cannot be empty');return h3(M3(()=>this.get(e,l)),this.onTranslationChange.pipe(C3(s=>{let n=this.getParsedResult(s.translations,e,l);return u1(n)})))}stream(e,l){if(!x2(e)||!e.length)throw new Error('Parameter "key" required');return h3(M3(()=>this.get(e,l)),this.onLangChange.pipe(C3(s=>{let n=this.getParsedResult(s.translations,e,l);return u1(n)})))}instant(e,l){if(!x2(e)||e.length===0)throw new Error('Parameter "key" is required and cannot be empty');let s=this.getParsedResult(this.translations[this.currentLang],e,l);return U2(s)?Array.isArray(e)?e.reduce((n,a)=>(n[a]=a,n),{}):e:s}set(e,l,s=this.currentLang){a8(this.translations[s],e,k3(l)?this.compiler.compile(l,s):this.compiler.compileTranslations(l,s)),this.updateLangs(),this.onTranslationChange.emit({lang:s,translations:this.translations[s]})}changeDefaultLang(e){this.defaultLang=e,this.onDefaultLangChange.emit({lang:e,translations:this.translations[e]})}reloadLang(e){return this.resetLang(e),this.loadAndCompileTranslations(e)}resetLang(e){delete this._translationRequests[e],delete this.translations[e]}getBrowserLang(){if(typeof window>"u"||!window.navigator)return;let e=this.getBrowserCultureLang();return e?e.split(/[-_]/)[0]:void 0}getBrowserCultureLang(){if(!(typeof window>"u"||typeof window.navigator>"u"))return window.navigator.languages?window.navigator.languages[0]:window.navigator.language||window.navigator.browserLanguage||window.navigator.userLanguage}static \u0275fac=function(l){return new(l||c)(G(q2),G(I2),G(D2),G(O2),G(V2),G(Y1),G(K1),G(Q1),G(X1))};static \u0275prov=M({token:c,factory:c.\u0275fac,providedIn:"root"})}return c})();var Pc=(()=>{class c{translate;_ref;value="";lastKey=null;lastParams=[];onTranslationChange;onLangChange;onDefaultLangChange;constructor(e,l){this.translate=e,this._ref=l}updateValue(e,l,s){let n=a=>{this.value=a!==void 0?a:e,this.lastKey=e,this._ref.markForCheck()};if(s){let a=this.translate.getParsedResult(s,e,l);U2(a)?a.subscribe(n):n(a)}this.translate.get(e,l).subscribe(n)}transform(e,...l){if(!e||!e.length)return e;if(G1(e,this.lastKey)&&G1(l,this.lastParams))return this.value;let s;if(x2(l[0])&&l.length)if(k3(l[0])&&l[0].length){let n=l[0].replace(/(')?([a-zA-Z0-9_]+)(')?(\s)?:/g,'"$2":').replace(/:(\s)?(')(.*?)(')/g,':"$3"');try{s=JSON.parse(n)}catch(a){throw new SyntaxError(`Wrong parameter in TranslatePipe. Expected a valid Object, received: ${l[0]}`)}}else p1(l[0])&&(s=l[0]);return this.lastKey=e,this.lastParams=l,this.updateValue(e,s),this._dispose(),this.onTranslationChange||(this.onTranslationChange=this.translate.onTranslationChange.subscribe(n=>{this.lastKey&&n.lang===this.translate.currentLang&&(this.lastKey=null,this.updateValue(e,s,n.translations))})),this.onLangChange||(this.onLangChange=this.translate.onLangChange.subscribe(n=>{this.lastKey&&(this.lastKey=null,this.updateValue(e,s,n.translations))})),this.onDefaultLangChange||(this.onDefaultLangChange=this.translate.onDefaultLangChange.subscribe(()=>{this.lastKey&&(this.lastKey=null,this.updateValue(e,s))})),this.value}_dispose(){typeof this.onTranslationChange<"u"&&(this.onTranslationChange.unsubscribe(),this.onTranslationChange=void 0),typeof this.onLangChange<"u"&&(this.onLangChange.unsubscribe(),this.onLangChange=void 0),typeof this.onDefaultLangChange<"u"&&(this.onDefaultLangChange.unsubscribe(),this.onDefaultLangChange=void 0)}ngOnDestroy(){this._dispose()}static \u0275fac=function(l){return new(l||c)($(G2,16),$(j1,16))};static \u0275pipe=_4({name:"translate",type:c,pure:!1});static \u0275prov=M({token:c,factory:c.\u0275fac})}return c})();var _c=(c={})=>R1([c.loader||{provide:I2,useClass:x3},c.compiler||{provide:D2,useClass:w3},c.parser||{provide:O2,useClass:v3},c.missingTranslationHandler||{provide:V2,useClass:y3},q2,{provide:K1,useValue:c.isolate},{provide:Y1,useValue:c.useDefaultLang},{provide:Q1,useValue:c.extend},{provide:X1,useValue:c.defaultLanguage},G2]),Ic=(()=>{class c{static forRoot(e={}){return{ngModule:c,providers:[e.loader||{provide:I2,useClass:x3},e.compiler||{provide:D2,useClass:w3},e.parser||{provide:O2,useClass:v3},e.missingTranslationHandler||{provide:V2,useClass:y3},q2,{provide:K1,useValue:e.isolate},{provide:Y1,useValue:e.useDefaultLang},{provide:Q1,useValue:e.extend},{provide:X1,useValue:e.defaultLanguage},G2]}}static forChild(e={}){return{ngModule:c,providers:[e.loader||{provide:I2,useClass:x3},e.compiler||{provide:D2,useClass:w3},e.parser||{provide:O2,useClass:v3},e.missingTranslationHandler||{provide:V2,useClass:y3},{provide:K1,useValue:e.isolate},{provide:Y1,useValue:e.useDefaultLang},{provide:Q1,useValue:e.extend},{provide:X1,useValue:e.defaultLanguage},G2]}}static \u0275fac=function(l){return new(l||c)};static \u0275mod=K({type:c});static \u0275inj=q({})}return c})();function K4(c,t){return c?c.classList?c.classList.contains(t):new RegExp("(^| )"+t+"( |$)","gi").test(c.className):!1}function d1(c,t){if(c&&t){let e=l=>{K4(c,l)||(c.classList?c.classList.add(l):c.className+=" "+l)};[t].flat().filter(Boolean).forEach(l=>l.split(" ").forEach(e))}}function o8(){return window.innerWidth-document.documentElement.offsetWidth}function K2(c){for(let t of document?.styleSheets)try{for(let e of t?.cssRules)for(let l of e?.style)if(c.test(l))return{name:l,value:e.style.getPropertyValue(l).trim()}}catch{}return null}function Rc(c="p-overflow-hidden"){let t=K2(/-scrollbar-width$/);t?.name&&document.body.style.setProperty(t.name,o8()+"px"),d1(document.body,c)}function R2(c,t){if(c&&t){let e=l=>{c.classList?c.classList.remove(l):c.className=c.className.replace(new RegExp("(^|\\b)"+l.split(" ").join("|")+"(\\b|$)","gi")," ")};[t].flat().filter(Boolean).forEach(l=>l.split(" ").forEach(e))}}function Fc(c="p-overflow-hidden"){let t=K2(/-scrollbar-width$/);t?.name&&document.body.style.removeProperty(t.name),R2(document.body,c)}function Y4(c){let t={width:0,height:0};return c&&(c.style.visibility="hidden",c.style.display="block",t.width=c.offsetWidth,t.height=c.offsetHeight,c.style.display="none",c.style.visibility="visible"),t}function X4(){let c=window,t=document,e=t.documentElement,l=t.getElementsByTagName("body")[0],s=c.innerWidth||e.clientWidth||l.clientWidth,n=c.innerHeight||e.clientHeight||l.clientHeight;return{width:s,height:n}}function r8(){let c=document.documentElement;return(window.pageXOffset||c.scrollLeft)-(c.clientLeft||0)}function f8(){let c=document.documentElement;return(window.pageYOffset||c.scrollTop)-(c.clientTop||0)}function $c(c,t,e=!0){var l,s,n,a;if(c){let i=c.offsetParent?{width:c.offsetWidth,height:c.offsetHeight}:Y4(c),o=i.height,r=i.width,f=t.offsetHeight,u=t.offsetWidth,m=t.getBoundingClientRect(),d=f8(),z=r8(),h=X4(),b,v,C="top";m.top+f+o>h.height?(b=m.top+d-o,C="bottom",b<0&&(b=d)):b=f+m.top+d,m.left+r>h.width?v=Math.max(0,m.left+z+u-r):v=m.left+z,c.style.top=b+"px",c.style.left=v+"px",c.style.transformOrigin=C,e&&(c.style.marginTop=C==="bottom"?`calc(${(s=(l=K2(/-anchor-gutter$/))==null?void 0:l.value)!=null?s:"2px"} * -1)`:(a=(n=K2(/-anchor-gutter$/))==null?void 0:n.value)!=null?a:"")}}function Bc(c,t){c&&(typeof t=="string"?c.style.cssText=t:Object.entries(t||{}).forEach(([e,l])=>c.style[e]=l))}function Q4(c,t){if(c instanceof HTMLElement){let e=c.offsetWidth;if(t){let l=getComputedStyle(c);e+=parseFloat(l.marginLeft)+parseFloat(l.marginRight)}return e}return 0}function Hc(c,t,e=!0){var l,s,n,a;if(c){let i=c.offsetParent?{width:c.offsetWidth,height:c.offsetHeight}:Y4(c),o=t.offsetHeight,r=t.getBoundingClientRect(),f=X4(),u,m,d="top";r.top+o+i.height>f.height?(u=-1*i.height,d="bottom",r.top+u<0&&(u=-1*r.top)):u=o,i.width>f.width?m=r.left*-1:r.left+i.width>f.width?m=(r.left+i.width-f.width)*-1:m=0,c.style.top=u+"px",c.style.left=m+"px",c.style.transformOrigin=d,e&&(c.style.marginTop=d==="bottom"?`calc(${(s=(l=K2(/-anchor-gutter$/))==null?void 0:l.value)!=null?s:"2px"} * -1)`:(a=(n=K2(/-anchor-gutter$/))==null?void 0:n.value)!=null?a:"")}}function Y2(c){return typeof HTMLElement=="object"?c instanceof HTMLElement:c&&typeof c=="object"&&c!==null&&c.nodeType===1&&typeof c.nodeName=="string"}function T3(c){let t=c;return c&&typeof c=="object"&&(c.hasOwnProperty("current")?t=c.current:c.hasOwnProperty("el")&&(c.el.hasOwnProperty("nativeElement")?t=c.el.nativeElement:t=c.el)),Y2(t)?t:void 0}function Wc(c,t){let e=T3(c);if(e)e.appendChild(t);else throw new Error("Cannot append "+t+" to "+c)}function E3(c,t={}){if(Y2(c)){let e=(l,s)=>{var n,a;let i=(n=c?.$attrs)!=null&&n[l]?[(a=c?.$attrs)==null?void 0:a[l]]:[];return[s].flat().reduce((o,r)=>{if(r!=null){let f=typeof r;if(f==="string"||f==="number")o.push(r);else if(f==="object"){let u=Array.isArray(r)?e(l,r):Object.entries(r).map(([m,d])=>l==="style"&&(d||d===0)?`${m.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${d}`:d?m:void 0);o=u.length?o.concat(u.filter(m=>!!m)):o}}return o},i)};Object.entries(t).forEach(([l,s])=>{if(s!=null){let n=l.match(/^on(.+)/);n?c.addEventListener(n[1].toLowerCase(),s):l==="p-bind"||l==="pBind"?E3(c,s):(s=l==="class"?[...new Set(e("class",s))].join(" ").trim():l==="style"?e("style",s).join(";").trim():s,(c.$attrs=c.$attrs||{})&&(c.$attrs[l]=s),c.setAttribute(l,s))}})}}function Uc(c,t){if(c){c.style.opacity="0";let e=+new Date,l="0",s=function(){l=`${+c.style.opacity+(new Date().getTime()-e)/t}`,c.style.opacity=l,e=+new Date,+l<1&&(window.requestAnimationFrame&&requestAnimationFrame(s)||setTimeout(s,16))};s()}}function m8(c,t){return Y2(c)?Array.from(c.querySelectorAll(t)):[]}function u8(c,t){return Y2(c)?c.matches(t)?c:c.querySelector(t):null}function jc(c,t){c&&document.activeElement!==c&&c.focus(t)}function Vc(c,t){if(Y2(c)){let e=c.getAttribute(t);return isNaN(e)?e==="true"||e==="false"?e==="true":e:+e}}function Z4(c,t=""){let e=m8(c,`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
            [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
            input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
            select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
            textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
            [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
            [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t}`),l=[];for(let s of e)getComputedStyle(s).display!="none"&&getComputedStyle(s).visibility!="hidden"&&l.push(s);return l}function qc(c,t){let e=Z4(c,t);return e.length>0?e[0]:null}function P3(c){if(c){let t=c.offsetHeight,e=getComputedStyle(c);return t-=parseFloat(e.paddingTop)+parseFloat(e.paddingBottom)+parseFloat(e.borderTopWidth)+parseFloat(e.borderBottomWidth),t}return 0}function J4(c){if(c){let t=c.parentNode;return t&&t instanceof ShadowRoot&&t.host&&(t=t.host),t}return null}function Gc(c){var t;if(c){let e=(t=J4(c))==null?void 0:t.childNodes,l=0;if(e)for(let s=0;s<e.length;s++){if(e[s]===c)return l;e[s].nodeType===1&&l++}}return-1}function Kc(c,t){let e=Z4(c,t);return e.length>0?e[e.length-1]:null}function c0(c){if(c){let t=c.getBoundingClientRect();return{top:t.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:t.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}return{top:"auto",left:"auto"}}function _3(c,t){if(c){let e=c.offsetHeight;if(t){let l=getComputedStyle(c);e+=parseFloat(l.marginTop)+parseFloat(l.marginBottom)}return e}return 0}function Yc(){if(window.getSelection)return window.getSelection().toString();if(document.getSelection)return document.getSelection().toString()}function p8(c){return!!(c!==null&&typeof c<"u"&&c.nodeName&&J4(c))}function Xc(c,t){var e;if(c)switch(c){case"document":return document;case"window":return window;case"body":return document.body;case"@next":return t?.nextElementSibling;case"@prev":return t?.previousElementSibling;case"@parent":return t?.parentElement;case"@grandparent":return(e=t?.parentElement)==null?void 0:e.parentElement;default:if(typeof c=="string")return document.querySelector(c);let s=T3((n=>!!(n&&n.constructor&&n.call&&n.apply))(c)?c():c);return s?.nodeType===9||p8(s)?s:void 0}}function I3(c){if(c){let t=c.offsetWidth,e=getComputedStyle(c);return t-=parseFloat(e.paddingLeft)+parseFloat(e.paddingRight)+parseFloat(e.borderLeftWidth)+parseFloat(e.borderRightWidth),t}return 0}function Qc(c){return!!(c&&c.offsetParent!=null)}function Zc(){return"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0}function e0(c){var t;c&&("remove"in Element.prototype?c.remove():(t=c.parentNode)==null||t.removeChild(c))}function Jc(c,t){let e=T3(c);if(e)e.removeChild(t);else throw new Error("Cannot remove "+t+" from "+c)}function c9(c,t){let e=getComputedStyle(c).getPropertyValue("borderTopWidth"),l=e?parseFloat(e):0,s=getComputedStyle(c).getPropertyValue("paddingTop"),n=s?parseFloat(s):0,a=c.getBoundingClientRect(),o=t.getBoundingClientRect().top+document.body.scrollTop-(a.top+document.body.scrollTop)-l-n,r=c.scrollTop,f=c.clientHeight,u=_3(t);o<0?c.scrollTop=r+o:o+u>f&&(c.scrollTop=r+o-f+u)}function l0(c,t="",e){Y2(c)&&e!==null&&e!==void 0&&c.setAttribute(t,e)}function t0(){let c=new Map;return{on(t,e){let l=c.get(t);return l?l.push(e):l=[e],c.set(t,l),this},off(t,e){let l=c.get(t);return l&&l.splice(l.indexOf(e)>>>0,1),this},emit(t,e){let l=c.get(t);l&&l.slice().map(s=>{s(e)})},clear(){c.clear()}}}var d8=Object.defineProperty,s0=Object.getOwnPropertySymbols,L8=Object.prototype.hasOwnProperty,z8=Object.prototype.propertyIsEnumerable,n0=(c,t,e)=>t in c?d8(c,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):c[t]=e,h8=(c,t)=>{for(var e in t||(t={}))L8.call(t,e)&&n0(c,e,t[e]);if(s0)for(var e of s0(t))z8.call(t,e)&&n0(c,e,t[e]);return c};function X(c){return c==null||c===""||Array.isArray(c)&&c.length===0||!(c instanceof Date)&&typeof c=="object"&&Object.keys(c).length===0}function O3(c,t,e=new WeakSet){if(c===t)return!0;if(!c||!t||typeof c!="object"||typeof t!="object"||e.has(c)||e.has(t))return!1;e.add(c).add(t);let l=Array.isArray(c),s=Array.isArray(t),n,a,i;if(l&&s){if(a=c.length,a!=t.length)return!1;for(n=a;n--!==0;)if(!O3(c[n],t[n],e))return!1;return!0}if(l!=s)return!1;let o=c instanceof Date,r=t instanceof Date;if(o!=r)return!1;if(o&&r)return c.getTime()==t.getTime();let f=c instanceof RegExp,u=t instanceof RegExp;if(f!=u)return!1;if(f&&u)return c.toString()==t.toString();let m=Object.keys(c);if(a=m.length,a!==Object.keys(t).length)return!1;for(n=a;n--!==0;)if(!Object.prototype.hasOwnProperty.call(t,m[n]))return!1;for(n=a;n--!==0;)if(i=m[n],!O3(c[i],t[i],e))return!1;return!0}function M8(c,t){return O3(c,t)}function i0(c){return!!(c&&c.constructor&&c.call&&c.apply)}function x(c){return!X(c)}function Z1(c,t){if(!c||!t)return null;try{let e=c[t];if(x(e))return e}catch{}if(Object.keys(c).length){if(i0(t))return t(c);if(t.indexOf(".")===-1)return c[t];{let e=t.split("."),l=c;for(let s=0,n=e.length;s<n;++s){if(l==null)return null;l=l[e[s]]}return l}}return null}function D3(c,t,e){return e?Z1(c,e)===Z1(t,e):M8(c,t)}function s9(c,t){if(c!=null&&t&&t.length){for(let e of t)if(D3(c,e))return!0}return!1}function n9(c,t){let e=-1;if(x(c))try{e=c.findLastIndex(t)}catch{e=c.lastIndexOf([...c].reverse().find(t))}return e}function J(c,t=!0){return c instanceof Object&&c.constructor===Object&&(t||Object.keys(c).length!==0)}function Y(c,...t){return i0(c)?c(...t):c}function y2(c,t=!0){return typeof c=="string"&&(t||c!=="")}function a0(c){return y2(c)?c.replace(/(-|_)/g,"").toLowerCase():c}function J1(c,t="",e={}){let l=a0(t).split("."),s=l.shift();return s?J(c)?J1(Y(c[Object.keys(c).find(n=>a0(n)===s)||""],e),l.join("."),e):void 0:Y(c,e)}function c3(c,t=!0){return Array.isArray(c)&&(t||c.length!==0)}function a9(c){return c instanceof Date&&c.constructor===Date}function o0(c){return x(c)&&!isNaN(c)}function i9(c=""){return x(c)&&c.length===1&&!!c.match(/\S| /)}function W(c,t){if(t){let e=t.test(c);return t.lastIndex=0,e}return!1}function L1(...c){let t=(e={},l={})=>{let s=h8({},e);return Object.keys(l).forEach(n=>{J(l[n])&&n in e&&J(e[n])?s[n]=t(e[n],l[n]):s[n]=l[n]}),s};return c.reduce((e,l,s)=>s===0?l:t(e,l),{})}function F2(c){return c&&c.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":")}function U(c){if(c&&/[\xC0-\xFF\u0100-\u017E]/.test(c)){let e={A:/[\xC0-\xC5\u0100\u0102\u0104]/g,AE:/[\xC6]/g,C:/[\xC7\u0106\u0108\u010A\u010C]/g,D:/[\xD0\u010E\u0110]/g,E:/[\xC8-\xCB\u0112\u0114\u0116\u0118\u011A]/g,G:/[\u011C\u011E\u0120\u0122]/g,H:/[\u0124\u0126]/g,I:/[\xCC-\xCF\u0128\u012A\u012C\u012E\u0130]/g,IJ:/[\u0132]/g,J:/[\u0134]/g,K:/[\u0136]/g,L:/[\u0139\u013B\u013D\u013F\u0141]/g,N:/[\xD1\u0143\u0145\u0147\u014A]/g,O:/[\xD2-\xD6\xD8\u014C\u014E\u0150]/g,OE:/[\u0152]/g,R:/[\u0154\u0156\u0158]/g,S:/[\u015A\u015C\u015E\u0160]/g,T:/[\u0162\u0164\u0166]/g,U:/[\xD9-\xDC\u0168\u016A\u016C\u016E\u0170\u0172]/g,W:/[\u0174]/g,Y:/[\xDD\u0176\u0178]/g,Z:/[\u0179\u017B\u017D]/g,a:/[\xE0-\xE5\u0101\u0103\u0105]/g,ae:/[\xE6]/g,c:/[\xE7\u0107\u0109\u010B\u010D]/g,d:/[\u010F\u0111]/g,e:/[\xE8-\xEB\u0113\u0115\u0117\u0119\u011B]/g,g:/[\u011D\u011F\u0121\u0123]/g,i:/[\xEC-\xEF\u0129\u012B\u012D\u012F\u0131]/g,ij:/[\u0133]/g,j:/[\u0135]/g,k:/[\u0137,\u0138]/g,l:/[\u013A\u013C\u013E\u0140\u0142]/g,n:/[\xF1\u0144\u0146\u0148\u014B]/g,p:/[\xFE]/g,o:/[\xF2-\xF6\xF8\u014D\u014F\u0151]/g,oe:/[\u0153]/g,r:/[\u0155\u0157\u0159]/g,s:/[\u015B\u015D\u015F\u0161]/g,t:/[\u0163\u0165\u0167]/g,u:/[\xF9-\xFC\u0169\u016B\u016D\u016F\u0171\u0173]/g,w:/[\u0175]/g,y:/[\xFD\xFF\u0177]/g,z:/[\u017A\u017C\u017E]/g};for(let l in e)c=c.replace(e[l],l)}return c}function e3(c){return y2(c)?c.replace(/(_)/g,"-").replace(/[A-Z]/g,(t,e)=>e===0?t:"-"+t.toLowerCase()).toLowerCase():c}function R3(c){return y2(c)?c.replace(/[A-Z]/g,(t,e)=>e===0?t:"."+t.toLowerCase()).toLowerCase():c}var l3={};function z1(c="pui_id_"){return l3.hasOwnProperty(c)||(l3[c]=0),l3[c]++,`${c}${l3[c]}`}function g8(){let c=[],t=(a,i,o=999)=>{let r=s(a,i,o),f=r.value+(r.key===a?0:o)+1;return c.push({key:a,value:f}),f},e=a=>{c=c.filter(i=>i.value!==a)},l=(a,i)=>s(a,i).value,s=(a,i,o=0)=>[...c].reverse().find(r=>i?!0:r.key===a)||{key:a,value:o},n=a=>a&&parseInt(a.style.zIndex,10)||0;return{get:n,set:(a,i,o)=>{i&&(i.style.zIndex=String(t(a,!0,o)))},clear:a=>{a&&(e(n(a)),a.style.zIndex="")},getCurrent:a=>l(a,!0)}}var f9=g8();var r0=["*"];var P=(()=>{class c{static STARTS_WITH="startsWith";static CONTAINS="contains";static NOT_CONTAINS="notContains";static ENDS_WITH="endsWith";static EQUALS="equals";static NOT_EQUALS="notEquals";static IN="in";static LESS_THAN="lt";static LESS_THAN_OR_EQUAL_TO="lte";static GREATER_THAN="gt";static GREATER_THAN_OR_EQUAL_TO="gte";static BETWEEN="between";static IS="is";static IS_NOT="isNot";static BEFORE="before";static AFTER="after";static DATE_IS="dateIs";static DATE_IS_NOT="dateIsNot";static DATE_BEFORE="dateBefore";static DATE_AFTER="dateAfter"}return c})(),y9=(()=>{class c{static AND="and";static OR="or"}return c})(),N9=(()=>{class c{filter(e,l,s,n,a){let i=[];if(e)for(let o of e)for(let r of l){let f=Z1(o,r);if(this.filters[n](f,s,a)){i.push(o);break}}return i}filters={startsWith:(e,l,s)=>{if(l==null||l.trim()==="")return!0;if(e==null)return!1;let n=U(l.toString()).toLocaleLowerCase(s);return U(e.toString()).toLocaleLowerCase(s).slice(0,n.length)===n},contains:(e,l,s)=>{if(l==null||typeof l=="string"&&l.trim()==="")return!0;if(e==null)return!1;let n=U(l.toString()).toLocaleLowerCase(s);return U(e.toString()).toLocaleLowerCase(s).indexOf(n)!==-1},notContains:(e,l,s)=>{if(l==null||typeof l=="string"&&l.trim()==="")return!0;if(e==null)return!1;let n=U(l.toString()).toLocaleLowerCase(s);return U(e.toString()).toLocaleLowerCase(s).indexOf(n)===-1},endsWith:(e,l,s)=>{if(l==null||l.trim()==="")return!0;if(e==null)return!1;let n=U(l.toString()).toLocaleLowerCase(s),a=U(e.toString()).toLocaleLowerCase(s);return a.indexOf(n,a.length-n.length)!==-1},equals:(e,l,s)=>l==null||typeof l=="string"&&l.trim()===""?!0:e==null?!1:e.getTime&&l.getTime?e.getTime()===l.getTime():e==l?!0:U(e.toString()).toLocaleLowerCase(s)==U(l.toString()).toLocaleLowerCase(s),notEquals:(e,l,s)=>l==null||typeof l=="string"&&l.trim()===""?!1:e==null?!0:e.getTime&&l.getTime?e.getTime()!==l.getTime():e==l?!1:U(e.toString()).toLocaleLowerCase(s)!=U(l.toString()).toLocaleLowerCase(s),in:(e,l)=>{if(l==null||l.length===0)return!0;for(let s=0;s<l.length;s++)if(D3(e,l[s]))return!0;return!1},between:(e,l)=>l==null||l[0]==null||l[1]==null?!0:e==null?!1:e.getTime?l[0].getTime()<=e.getTime()&&e.getTime()<=l[1].getTime():l[0]<=e&&e<=l[1],lt:(e,l,s)=>l==null?!0:e==null?!1:e.getTime&&l.getTime?e.getTime()<l.getTime():e<l,lte:(e,l,s)=>l==null?!0:e==null?!1:e.getTime&&l.getTime?e.getTime()<=l.getTime():e<=l,gt:(e,l,s)=>l==null?!0:e==null?!1:e.getTime&&l.getTime?e.getTime()>l.getTime():e>l,gte:(e,l,s)=>l==null?!0:e==null?!1:e.getTime&&l.getTime?e.getTime()>=l.getTime():e>=l,is:(e,l,s)=>this.filters.equals(e,l,s),isNot:(e,l,s)=>this.filters.notEquals(e,l,s),before:(e,l,s)=>this.filters.lt(e,l,s),after:(e,l,s)=>this.filters.gt(e,l,s),dateIs:(e,l)=>l==null?!0:e==null?!1:e.toDateString()===l.toDateString(),dateIsNot:(e,l)=>l==null?!0:e==null?!1:e.toDateString()!==l.toDateString(),dateBefore:(e,l)=>l==null?!0:e==null?!1:e.getTime()<l.getTime(),dateAfter:(e,l)=>l==null?!0:e==null?!1:(e.setHours(0,0,0,0),e.getTime()>l.getTime())};register(e,l){this.filters[e]=l}static \u0275fac=function(l){return new(l||c)};static \u0275prov=M({token:c,factory:c.\u0275fac,providedIn:"root"})}return c})();var S9=(()=>{class c{clickSource=new D1;clickObservable=this.clickSource.asObservable();add(e){e&&this.clickSource.next(e)}static \u0275fac=function(l){return new(l||c)};static \u0275prov=M({token:c,factory:c.\u0275fac,providedIn:"root"})}return c})();var v9=(()=>{class c{static \u0275fac=function(l){return new(l||c)};static \u0275cmp=I({type:c,selectors:[["p-header"]],standalone:!1,ngContentSelectors:r0,decls:1,vars:0,template:function(l,s){l&1&&(f2(),m2(0))},encapsulation:2})}return c})(),w9=(()=>{class c{static \u0275fac=function(l){return new(l||c)};static \u0275cmp=I({type:c,selectors:[["p-footer"]],standalone:!1,ngContentSelectors:r0,decls:1,vars:0,template:function(l,s){l&1&&(f2(),m2(0))},encapsulation:2})}return c})(),f0=(()=>{class c{template;type;name;constructor(e){this.template=e}getType(){return this.name}static \u0275fac=function(l){return new(l||c)($(P4))};static \u0275dir=B({type:c,selectors:[["","pTemplate",""]],inputs:{type:"type",name:[0,"pTemplate","name"]}})}return c})(),N2=(()=>{class c{static \u0275fac=function(l){return new(l||c)};static \u0275mod=K({type:c});static \u0275inj=q({imports:[_2]})}return c})(),A9=(()=>{class c{static STARTS_WITH="startsWith";static CONTAINS="contains";static NOT_CONTAINS="notContains";static ENDS_WITH="endsWith";static EQUALS="equals";static NOT_EQUALS="notEquals";static NO_FILTER="noFilter";static LT="lt";static LTE="lte";static GT="gt";static GTE="gte";static IS="is";static IS_NOT="isNot";static BEFORE="before";static AFTER="after";static CLEAR="clear";static APPLY="apply";static MATCH_ALL="matchAll";static MATCH_ANY="matchAny";static ADD_RULE="addRule";static REMOVE_RULE="removeRule";static ACCEPT="accept";static REJECT="reject";static CHOOSE="choose";static UPLOAD="upload";static CANCEL="cancel";static PENDING="pending";static FILE_SIZE_TYPES="fileSizeTypes";static DAY_NAMES="dayNames";static DAY_NAMES_SHORT="dayNamesShort";static DAY_NAMES_MIN="dayNamesMin";static MONTH_NAMES="monthNames";static MONTH_NAMES_SHORT="monthNamesShort";static FIRST_DAY_OF_WEEK="firstDayOfWeek";static TODAY="today";static WEEK_HEADER="weekHeader";static WEAK="weak";static MEDIUM="medium";static STRONG="strong";static PASSWORD_PROMPT="passwordPrompt";static EMPTY_MESSAGE="emptyMessage";static EMPTY_FILTER_MESSAGE="emptyFilterMessage";static SHOW_FILTER_MENU="showFilterMenu";static HIDE_FILTER_MENU="hideFilterMenu";static SELECTION_MESSAGE="selectionMessage";static ARIA="aria";static SELECT_COLOR="selectColor";static BROWSE_FILES="browseFiles"}return c})();function C8(c,t,e){return(t=x8(t))in c?Object.defineProperty(c,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):c[t]=e,c}function m0(c,t){var e=Object.keys(c);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(c);t&&(l=l.filter(function(s){return Object.getOwnPropertyDescriptor(c,s).enumerable})),e.push.apply(e,l)}return e}function p(c){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?m0(Object(e),!0).forEach(function(l){C8(c,l,e[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(e)):m0(Object(e)).forEach(function(l){Object.defineProperty(c,l,Object.getOwnPropertyDescriptor(e,l))})}return c}function b8(c,t){if(typeof c!="object"||!c)return c;var e=c[Symbol.toPrimitive];if(e!==void 0){var l=e.call(c,t||"default");if(typeof l!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(c)}function x8(c){var t=b8(c,"string");return typeof t=="symbol"?t:t+""}var u0=()=>{},a4={},F0={},$0=null,B0={mark:u0,measure:u0};try{typeof window<"u"&&(a4=window),typeof document<"u"&&(F0=document),typeof MutationObserver<"u"&&($0=MutationObserver),typeof performance<"u"&&(B0=performance)}catch{}var{userAgent:p0=""}=a4.navigator||{},v2=a4,S=F0,d0=$0,t3=B0,T9=!!v2.document,d2=!!S.documentElement&&!!S.head&&typeof S.addEventListener=="function"&&typeof S.createElement=="function",H0=~p0.indexOf("MSIE")||~p0.indexOf("Trident/"),y8=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,N8=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,W0={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},S8={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},U0=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],O="classic",r3="duotone",v8="sharp",w8="sharp-duotone",j0=[O,r3,v8,w8],A8={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},k8={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},T8=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),E8={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},P8=["fak","fa-kit","fakd","fa-kit-duotone"],L0={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},_8=["kit"],I8={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},O8=["fak","fakd"],D8={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},z0={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},s3={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},R8=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],F8=["fak","fa-kit","fakd","fa-kit-duotone"],$8={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},B8={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},H8={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},U3={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},W8=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],j3=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...R8,...W8],U8=["solid","regular","light","thin","duotone","brands"],V0=[1,2,3,4,5,6,7,8,9,10],j8=V0.concat([11,12,13,14,15,16,17,18,19,20]),V8=[...Object.keys(H8),...U8,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",s3.GROUP,s3.SWAP_OPACITY,s3.PRIMARY,s3.SECONDARY].concat(V0.map(c=>"".concat(c,"x"))).concat(j8.map(c=>"w-".concat(c))),q8={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},u2="___FONT_AWESOME___",V3=16,q0="fa",G0="svg-inline--fa",B2="data-fa-i2svg",q3="data-fa-pseudo-element",G8="data-fa-pseudo-element-pending",i4="data-prefix",o4="data-icon",h0="fontawesome-i2svg",K8="async",Y8=["HTML","HEAD","STYLE","SCRIPT"],K0=(()=>{try{return!0}catch{return!1}})();function x1(c){return new Proxy(c,{get(t,e){return e in t?t[e]:t[O]}})}var Y0=p({},W0);Y0[O]=p(p(p(p({},{"fa-duotone":"duotone"}),W0[O]),L0.kit),L0["kit-duotone"]);var X8=x1(Y0),G3=p({},E8);G3[O]=p(p(p(p({},{duotone:"fad"}),G3[O]),z0.kit),z0["kit-duotone"]);var M0=x1(G3),K3=p({},U3);K3[O]=p(p({},K3[O]),D8.kit);var r4=x1(K3),Y3=p({},B8);Y3[O]=p(p({},Y3[O]),I8.kit);var E9=x1(Y3),Q8=y8,X0="fa-layers-text",Z8=N8,J8=p({},A8),P9=x1(J8),c5=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],F3=S8,e5=[..._8,...V8],M1=v2.FontAwesomeConfig||{};function l5(c){var t=S.querySelector("script["+c+"]");if(t)return t.getAttribute(c)}function t5(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}S&&typeof S.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(t=>{let[e,l]=t,s=t5(l5(e));s!=null&&(M1[l]=s)});var Q0={styleDefault:"solid",familyDefault:O,cssPrefix:q0,replacementClass:G0,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};M1.familyPrefix&&(M1.cssPrefix=M1.familyPrefix);var Z2=p(p({},Q0),M1);Z2.autoReplaceSvg||(Z2.observeMutations=!1);var L={};Object.keys(Q0).forEach(c=>{Object.defineProperty(L,c,{enumerable:!0,set:function(t){Z2[c]=t,g1.forEach(e=>e(L))},get:function(){return Z2[c]}})});Object.defineProperty(L,"familyPrefix",{enumerable:!0,set:function(c){Z2.cssPrefix=c,g1.forEach(t=>t(L))},get:function(){return Z2.cssPrefix}});v2.FontAwesomeConfig=L;var g1=[];function s5(c){return g1.push(c),()=>{g1.splice(g1.indexOf(c),1)}}var S2=V3,n2={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function n5(c){if(!c||!d2)return;let t=S.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=c;let e=S.head.childNodes,l=null;for(let s=e.length-1;s>-1;s--){let n=e[s],a=(n.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(a)>-1&&(l=n)}return S.head.insertBefore(t,l),c}var a5="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function C1(){let c=12,t="";for(;c-- >0;)t+=a5[Math.random()*62|0];return t}function J2(c){let t=[];for(let e=(c||[]).length>>>0;e--;)t[e]=c[e];return t}function f4(c){return c.classList?J2(c.classList):(c.getAttribute("class")||"").split(" ").filter(t=>t)}function Z0(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function i5(c){return Object.keys(c||{}).reduce((t,e)=>t+"".concat(e,'="').concat(Z0(c[e]),'" '),"").trim()}function f3(c){return Object.keys(c||{}).reduce((t,e)=>t+"".concat(e,": ").concat(c[e].trim(),";"),"")}function m4(c){return c.size!==n2.size||c.x!==n2.x||c.y!==n2.y||c.rotate!==n2.rotate||c.flipX||c.flipY}function o5(c){let{transform:t,containerWidth:e,iconWidth:l}=c,s={transform:"translate(".concat(e/2," 256)")},n="translate(".concat(t.x*32,", ").concat(t.y*32,") "),a="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),i="rotate(".concat(t.rotate," 0 0)"),o={transform:"".concat(n," ").concat(a," ").concat(i)},r={transform:"translate(".concat(l/2*-1," -256)")};return{outer:s,inner:o,path:r}}function r5(c){let{transform:t,width:e=V3,height:l=V3,startCentered:s=!1}=c,n="";return s&&H0?n+="translate(".concat(t.x/S2-e/2,"em, ").concat(t.y/S2-l/2,"em) "):s?n+="translate(calc(-50% + ".concat(t.x/S2,"em), calc(-50% + ").concat(t.y/S2,"em)) "):n+="translate(".concat(t.x/S2,"em, ").concat(t.y/S2,"em) "),n+="scale(".concat(t.size/S2*(t.flipX?-1:1),", ").concat(t.size/S2*(t.flipY?-1:1),") "),n+="rotate(".concat(t.rotate,"deg) "),n}var f5=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function J0(){let c=q0,t=G0,e=L.cssPrefix,l=L.replacementClass,s=f5;if(e!==c||l!==t){let n=new RegExp("\\.".concat(c,"\\-"),"g"),a=new RegExp("\\--".concat(c,"\\-"),"g"),i=new RegExp("\\.".concat(t),"g");s=s.replace(n,".".concat(e,"-")).replace(a,"--".concat(e,"-")).replace(i,".".concat(l))}return s}var g0=!1;function $3(){L.autoAddCss&&!g0&&(n5(J0()),g0=!0)}var m5={mixout(){return{dom:{css:J0,insertCss:$3}}},hooks(){return{beforeDOMElementCreation(){$3()},beforeI2svg(){$3()}}}},p2=v2||{};p2[u2]||(p2[u2]={});p2[u2].styles||(p2[u2].styles={});p2[u2].hooks||(p2[u2].hooks={});p2[u2].shims||(p2[u2].shims=[]);var a2=p2[u2],c6=[],e6=function(){S.removeEventListener("DOMContentLoaded",e6),i3=1,c6.map(c=>c())},i3=!1;d2&&(i3=(S.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(S.readyState),i3||S.addEventListener("DOMContentLoaded",e6));function u5(c){d2&&(i3?setTimeout(c,0):c6.push(c))}function y1(c){let{tag:t,attributes:e={},children:l=[]}=c;return typeof c=="string"?Z0(c):"<".concat(t," ").concat(i5(e),">").concat(l.map(y1).join(""),"</").concat(t,">")}function C0(c,t,e){if(c&&c[t]&&c[t][e])return{prefix:t,iconName:e,icon:c[t][e]}}var p5=function(t,e){return function(l,s,n,a){return t.call(e,l,s,n,a)}},B3=function(t,e,l,s){var n=Object.keys(t),a=n.length,i=s!==void 0?p5(e,s):e,o,r,f;for(l===void 0?(o=1,f=t[n[0]]):(o=0,f=l);o<a;o++)r=n[o],f=i(f,t[r],r,t);return f};function d5(c){let t=[],e=0,l=c.length;for(;e<l;){let s=c.charCodeAt(e++);if(s>=55296&&s<=56319&&e<l){let n=c.charCodeAt(e++);(n&64512)==56320?t.push(((s&1023)<<10)+(n&1023)+65536):(t.push(s),e--)}else t.push(s)}return t}function X3(c){let t=d5(c);return t.length===1?t[0].toString(16):null}function L5(c,t){let e=c.length,l=c.charCodeAt(t),s;return l>=55296&&l<=56319&&e>t+1&&(s=c.charCodeAt(t+1),s>=56320&&s<=57343)?(l-55296)*1024+s-56320+65536:l}function b0(c){return Object.keys(c).reduce((t,e)=>{let l=c[e];return!!l.icon?t[l.iconName]=l.icon:t[e]=l,t},{})}function Q3(c,t){let e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},{skipHooks:l=!1}=e,s=b0(t);typeof a2.hooks.addPack=="function"&&!l?a2.hooks.addPack(c,b0(t)):a2.styles[c]=p(p({},a2.styles[c]||{}),s),c==="fas"&&Q3("fa",t)}var{styles:b1,shims:z5}=a2,l6=Object.keys(r4),h5=l6.reduce((c,t)=>(c[t]=Object.keys(r4[t]),c),{}),u4=null,t6={},s6={},n6={},a6={},i6={};function M5(c){return~e5.indexOf(c)}function g5(c,t){let e=t.split("-"),l=e[0],s=e.slice(1).join("-");return l===c&&s!==""&&!M5(s)?s:null}var o6=()=>{let c=l=>B3(b1,(s,n,a)=>(s[a]=B3(n,l,{}),s),{});t6=c((l,s,n)=>(s[3]&&(l[s[3]]=n),s[2]&&s[2].filter(i=>typeof i=="number").forEach(i=>{l[i.toString(16)]=n}),l)),s6=c((l,s,n)=>(l[n]=n,s[2]&&s[2].filter(i=>typeof i=="string").forEach(i=>{l[i]=n}),l)),i6=c((l,s,n)=>{let a=s[2];return l[n]=n,a.forEach(i=>{l[i]=n}),l});let t="far"in b1||L.autoFetchSvg,e=B3(z5,(l,s)=>{let n=s[0],a=s[1],i=s[2];return a==="far"&&!t&&(a="fas"),typeof n=="string"&&(l.names[n]={prefix:a,iconName:i}),typeof n=="number"&&(l.unicodes[n.toString(16)]={prefix:a,iconName:i}),l},{names:{},unicodes:{}});n6=e.names,a6=e.unicodes,u4=m3(L.styleDefault,{family:L.familyDefault})};s5(c=>{u4=m3(c.styleDefault,{family:L.familyDefault})});o6();function p4(c,t){return(t6[c]||{})[t]}function C5(c,t){return(s6[c]||{})[t]}function $2(c,t){return(i6[c]||{})[t]}function r6(c){return n6[c]||{prefix:null,iconName:null}}function b5(c){let t=a6[c],e=p4("fas",c);return t||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function w2(){return u4}var f6=()=>({prefix:null,iconName:null,rest:[]});function x5(c){let t=O,e=l6.reduce((l,s)=>(l[s]="".concat(L.cssPrefix,"-").concat(s),l),{});return j0.forEach(l=>{(c.includes(e[l])||c.some(s=>h5[l].includes(s)))&&(t=l)}),t}function m3(c){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{family:e=O}=t,l=X8[e][c];if(e===r3&&!c)return"fad";let s=M0[e][c]||M0[e][l],n=c in a2.styles?c:null;return s||n||null}function y5(c){let t=[],e=null;return c.forEach(l=>{let s=g5(L.cssPrefix,l);s?e=s:l&&t.push(l)}),{iconName:e,rest:t}}function x0(c){return c.sort().filter((t,e,l)=>l.indexOf(t)===e)}function u3(c){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{skipLookups:e=!1}=t,l=null,s=j3.concat(F8),n=x0(c.filter(u=>s.includes(u))),a=x0(c.filter(u=>!j3.includes(u))),i=n.filter(u=>(l=u,!U0.includes(u))),[o=null]=i,r=x5(n),f=p(p({},y5(a)),{},{prefix:m3(o,{family:r})});return p(p(p({},f),w5({values:c,family:r,styles:b1,config:L,canonical:f,givenPrefix:l})),N5(e,l,f))}function N5(c,t,e){let{prefix:l,iconName:s}=e;if(c||!l||!s)return{prefix:l,iconName:s};let n=t==="fa"?r6(s):{},a=$2(l,s);return s=n.iconName||a||s,l=n.prefix||l,l==="far"&&!b1.far&&b1.fas&&!L.autoFetchSvg&&(l="fas"),{prefix:l,iconName:s}}var S5=j0.filter(c=>c!==O||c!==r3),v5=Object.keys(U3).filter(c=>c!==O).map(c=>Object.keys(U3[c])).flat();function w5(c){let{values:t,family:e,canonical:l,givenPrefix:s="",styles:n={},config:a={}}=c,i=e===r3,o=t.includes("fa-duotone")||t.includes("fad"),r=a.familyDefault==="duotone",f=l.prefix==="fad"||l.prefix==="fa-duotone";if(!i&&(o||r||f)&&(l.prefix="fad"),(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),!l.prefix&&S5.includes(e)&&(Object.keys(n).find(m=>v5.includes(m))||a.autoFetchSvg)){let m=T8.get(e).defaultShortPrefixId;l.prefix=m,l.iconName=$2(l.prefix,l.iconName)||l.iconName}return(l.prefix==="fa"||s==="fa")&&(l.prefix=w2()||"fas"),l}var Z3=class{constructor(){this.definitions={}}add(){for(var t=arguments.length,e=new Array(t),l=0;l<t;l++)e[l]=arguments[l];let s=e.reduce(this._pullDefinitions,{});Object.keys(s).forEach(n=>{this.definitions[n]=p(p({},this.definitions[n]||{}),s[n]),Q3(n,s[n]);let a=r4[O][n];a&&Q3(a,s[n]),o6()})}reset(){this.definitions={}}_pullDefinitions(t,e){let l=e.prefix&&e.iconName&&e.icon?{0:e}:e;return Object.keys(l).map(s=>{let{prefix:n,iconName:a,icon:i}=l[s],o=i[2];t[n]||(t[n]={}),o.length>0&&o.forEach(r=>{typeof r=="string"&&(t[n][r]=i)}),t[n][a]=i}),t}},y0=[],X2={},Q2={},A5=Object.keys(Q2);function k5(c,t){let{mixoutsTo:e}=t;return y0=c,X2={},Object.keys(Q2).forEach(l=>{A5.indexOf(l)===-1&&delete Q2[l]}),y0.forEach(l=>{let s=l.mixout?l.mixout():{};if(Object.keys(s).forEach(n=>{typeof s[n]=="function"&&(e[n]=s[n]),typeof s[n]=="object"&&Object.keys(s[n]).forEach(a=>{e[n]||(e[n]={}),e[n][a]=s[n][a]})}),l.hooks){let n=l.hooks();Object.keys(n).forEach(a=>{X2[a]||(X2[a]=[]),X2[a].push(n[a])})}l.provides&&l.provides(Q2)}),e}function J3(c,t){for(var e=arguments.length,l=new Array(e>2?e-2:0),s=2;s<e;s++)l[s-2]=arguments[s];return(X2[c]||[]).forEach(a=>{t=a.apply(null,[t,...l])}),t}function H2(c){for(var t=arguments.length,e=new Array(t>1?t-1:0),l=1;l<t;l++)e[l-1]=arguments[l];(X2[c]||[]).forEach(n=>{n.apply(null,e)})}function A2(){let c=arguments[0],t=Array.prototype.slice.call(arguments,1);return Q2[c]?Q2[c].apply(null,t):void 0}function c4(c){c.prefix==="fa"&&(c.prefix="fas");let{iconName:t}=c,e=c.prefix||w2();if(t)return t=$2(e,t)||t,C0(m6.definitions,e,t)||C0(a2.styles,e,t)}var m6=new Z3,T5=()=>{L.autoReplaceSvg=!1,L.observeMutations=!1,H2("noAuto")},E5={i2svg:function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return d2?(H2("beforeI2svg",c),A2("pseudoElements2svg",c),A2("i2svg",c)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:t}=c;L.autoReplaceSvg===!1&&(L.autoReplaceSvg=!0),L.observeMutations=!0,u5(()=>{_5({autoReplaceSvgRoot:t}),H2("watch",c)})}},P5={icon:c=>{if(c===null)return null;if(typeof c=="object"&&c.prefix&&c.iconName)return{prefix:c.prefix,iconName:$2(c.prefix,c.iconName)||c.iconName};if(Array.isArray(c)&&c.length===2){let t=c[1].indexOf("fa-")===0?c[1].slice(3):c[1],e=m3(c[0]);return{prefix:e,iconName:$2(e,t)||t}}if(typeof c=="string"&&(c.indexOf("".concat(L.cssPrefix,"-"))>-1||c.match(Q8))){let t=u3(c.split(" "),{skipLookups:!0});return{prefix:t.prefix||w2(),iconName:$2(t.prefix,t.iconName)||t.iconName}}if(typeof c=="string"){let t=w2();return{prefix:t,iconName:$2(t,c)||c}}}},j={noAuto:T5,config:L,dom:E5,parse:P5,library:m6,findIconDefinition:c4,toHtml:y1},_5=function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:t=S}=c;(Object.keys(a2.styles).length>0||L.autoFetchSvg)&&d2&&L.autoReplaceSvg&&j.dom.i2svg({node:t})};function p3(c,t){return Object.defineProperty(c,"abstract",{get:t}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(e=>y1(e))}}),Object.defineProperty(c,"node",{get:function(){if(!d2)return;let e=S.createElement("div");return e.innerHTML=c.html,e.children}}),c}function I5(c){let{children:t,main:e,mask:l,attributes:s,styles:n,transform:a}=c;if(m4(a)&&e.found&&!l.found){let{width:i,height:o}=e,r={x:i/o/2,y:.5};s.style=f3(p(p({},n),{},{"transform-origin":"".concat(r.x+a.x/16,"em ").concat(r.y+a.y/16,"em")}))}return[{tag:"svg",attributes:s,children:t}]}function O5(c){let{prefix:t,iconName:e,children:l,attributes:s,symbol:n}=c,a=n===!0?"".concat(t,"-").concat(L.cssPrefix,"-").concat(e):n;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:p(p({},s),{},{id:a}),children:l}]}]}function d4(c){let{icons:{main:t,mask:e},prefix:l,iconName:s,transform:n,symbol:a,title:i,maskId:o,titleId:r,extra:f,watchable:u=!1}=c,{width:m,height:d}=e.found?e:t,z=O8.includes(l),h=[L.replacementClass,s?"".concat(L.cssPrefix,"-").concat(s):""].filter(Q=>f.classes.indexOf(Q)===-1).filter(Q=>Q!==""||!!Q).concat(f.classes).join(" "),b={children:[],attributes:p(p({},f.attributes),{},{"data-prefix":l,"data-icon":s,class:h,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(m," ").concat(d)})},v=z&&!~f.classes.indexOf("fa-fw")?{width:"".concat(m/d*16*.0625,"em")}:{};u&&(b.attributes[B2]=""),i&&(b.children.push({tag:"title",attributes:{id:b.attributes["aria-labelledby"]||"title-".concat(r||C1())},children:[i]}),delete b.attributes.title);let C=p(p({},b),{},{prefix:l,iconName:s,main:t,mask:e,maskId:o,transform:n,symbol:a,styles:p(p({},v),f.styles)}),{children:k,attributes:T}=e.found&&t.found?A2("generateAbstractMask",C)||{children:[],attributes:{}}:A2("generateAbstractIcon",C)||{children:[],attributes:{}};return C.children=k,C.attributes=T,a?O5(C):I5(C)}function N0(c){let{content:t,width:e,height:l,transform:s,title:n,extra:a,watchable:i=!1}=c,o=p(p(p({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")});i&&(o[B2]="");let r=p({},a.styles);m4(s)&&(r.transform=r5({transform:s,startCentered:!0,width:e,height:l}),r["-webkit-transform"]=r.transform);let f=f3(r);f.length>0&&(o.style=f);let u=[];return u.push({tag:"span",attributes:o,children:[t]}),n&&u.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),u}function D5(c){let{content:t,title:e,extra:l}=c,s=p(p(p({},l.attributes),e?{title:e}:{}),{},{class:l.classes.join(" ")}),n=f3(l.styles);n.length>0&&(s.style=n);let a=[];return a.push({tag:"span",attributes:s,children:[t]}),e&&a.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),a}var{styles:H3}=a2;function e4(c){let t=c[0],e=c[1],[l]=c.slice(4),s=null;return Array.isArray(l)?s={tag:"g",attributes:{class:"".concat(L.cssPrefix,"-").concat(F3.GROUP)},children:[{tag:"path",attributes:{class:"".concat(L.cssPrefix,"-").concat(F3.SECONDARY),fill:"currentColor",d:l[0]}},{tag:"path",attributes:{class:"".concat(L.cssPrefix,"-").concat(F3.PRIMARY),fill:"currentColor",d:l[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:l}},{found:!0,width:t,height:e,icon:s}}var R5={found:!1,width:512,height:512};function F5(c,t){!K0&&!L.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(t,'" is missing.'))}function l4(c,t){let e=t;return t==="fa"&&L.styleDefault!==null&&(t=w2()),new Promise((l,s)=>{if(e==="fa"){let n=r6(c)||{};c=n.iconName||c,t=n.prefix||t}if(c&&t&&H3[t]&&H3[t][c]){let n=H3[t][c];return l(e4(n))}F5(c,t),l(p(p({},R5),{},{icon:L.showMissingIcons&&c?A2("missingIconAbstract")||{}:{}}))})}var S0=()=>{},t4=L.measurePerformance&&t3&&t3.mark&&t3.measure?t3:{mark:S0,measure:S0},h1='FA "6.7.2"',$5=c=>(t4.mark("".concat(h1," ").concat(c," begins")),()=>u6(c)),u6=c=>{t4.mark("".concat(h1," ").concat(c," ends")),t4.measure("".concat(h1," ").concat(c),"".concat(h1," ").concat(c," begins"),"".concat(h1," ").concat(c," ends"))},L4={begin:$5,end:u6},n3=()=>{};function v0(c){return typeof(c.getAttribute?c.getAttribute(B2):null)=="string"}function B5(c){let t=c.getAttribute?c.getAttribute(i4):null,e=c.getAttribute?c.getAttribute(o4):null;return t&&e}function H5(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(L.replacementClass)}function W5(){return L.autoReplaceSvg===!0?a3.replace:a3[L.autoReplaceSvg]||a3.replace}function U5(c){return S.createElementNS("http://www.w3.org/2000/svg",c)}function j5(c){return S.createElement(c)}function p6(c){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{ceFn:e=c.tag==="svg"?U5:j5}=t;if(typeof c=="string")return S.createTextNode(c);let l=e(c.tag);return Object.keys(c.attributes||[]).forEach(function(n){l.setAttribute(n,c.attributes[n])}),(c.children||[]).forEach(function(n){l.appendChild(p6(n,{ceFn:e}))}),l}function V5(c){let t=" ".concat(c.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var a3={replace:function(c){let t=c[0];if(t.parentNode)if(c[1].forEach(e=>{t.parentNode.insertBefore(p6(e),t)}),t.getAttribute(B2)===null&&L.keepOriginalSource){let e=S.createComment(V5(t));t.parentNode.replaceChild(e,t)}else t.remove()},nest:function(c){let t=c[0],e=c[1];if(~f4(t).indexOf(L.replacementClass))return a3.replace(c);let l=new RegExp("".concat(L.cssPrefix,"-.*"));if(delete e[0].attributes.id,e[0].attributes.class){let n=e[0].attributes.class.split(" ").reduce((a,i)=>(i===L.replacementClass||i.match(l)?a.toSvg.push(i):a.toNode.push(i),a),{toNode:[],toSvg:[]});e[0].attributes.class=n.toSvg.join(" "),n.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",n.toNode.join(" "))}let s=e.map(n=>y1(n)).join(`
`);t.setAttribute(B2,""),t.innerHTML=s}};function w0(c){c()}function d6(c,t){let e=typeof t=="function"?t:n3;if(c.length===0)e();else{let l=w0;L.mutateApproach===K8&&(l=v2.requestAnimationFrame||w0),l(()=>{let s=W5(),n=L4.begin("mutate");c.map(s),n(),e()})}}var z4=!1;function L6(){z4=!0}function s4(){z4=!1}var o3=null;function A0(c){if(!d0||!L.observeMutations)return;let{treeCallback:t=n3,nodeCallback:e=n3,pseudoElementsCallback:l=n3,observeMutationsRoot:s=S}=c;o3=new d0(n=>{if(z4)return;let a=w2();J2(n).forEach(i=>{if(i.type==="childList"&&i.addedNodes.length>0&&!v0(i.addedNodes[0])&&(L.searchPseudoElements&&l(i.target),t(i.target)),i.type==="attributes"&&i.target.parentNode&&L.searchPseudoElements&&l(i.target.parentNode),i.type==="attributes"&&v0(i.target)&&~c5.indexOf(i.attributeName))if(i.attributeName==="class"&&B5(i.target)){let{prefix:o,iconName:r}=u3(f4(i.target));i.target.setAttribute(i4,o||a),r&&i.target.setAttribute(o4,r)}else H5(i.target)&&e(i.target)})}),d2&&o3.observe(s,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function q5(){o3&&o3.disconnect()}function G5(c){let t=c.getAttribute("style"),e=[];return t&&(e=t.split(";").reduce((l,s)=>{let n=s.split(":"),a=n[0],i=n.slice(1);return a&&i.length>0&&(l[a]=i.join(":").trim()),l},{})),e}function K5(c){let t=c.getAttribute("data-prefix"),e=c.getAttribute("data-icon"),l=c.innerText!==void 0?c.innerText.trim():"",s=u3(f4(c));return s.prefix||(s.prefix=w2()),t&&e&&(s.prefix=t,s.iconName=e),s.iconName&&s.prefix||(s.prefix&&l.length>0&&(s.iconName=C5(s.prefix,c.innerText)||p4(s.prefix,X3(c.innerText))),!s.iconName&&L.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=c.firstChild.data)),s}function Y5(c){let t=J2(c.attributes).reduce((s,n)=>(s.name!=="class"&&s.name!=="style"&&(s[n.name]=n.value),s),{}),e=c.getAttribute("title"),l=c.getAttribute("data-fa-title-id");return L.autoA11y&&(e?t["aria-labelledby"]="".concat(L.replacementClass,"-title-").concat(l||C1()):(t["aria-hidden"]="true",t.focusable="false")),t}function X5(){return{iconName:null,title:null,titleId:null,prefix:null,transform:n2,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function k0(c){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},{iconName:e,prefix:l,rest:s}=K5(c),n=Y5(c),a=J3("parseNodeAttributes",{},c),i=t.styleParser?G5(c):[];return p({iconName:e,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:l,transform:n2,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:i,attributes:n}},a)}var{styles:Q5}=a2;function z6(c){let t=L.autoReplaceSvg==="nest"?k0(c,{styleParser:!1}):k0(c);return~t.extra.classes.indexOf(X0)?A2("generateLayersText",c,t):A2("generateSvgReplacementMutation",c,t)}function Z5(){return[...P8,...j3]}function T0(c){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!d2)return Promise.resolve();let e=S.documentElement.classList,l=f=>e.add("".concat(h0,"-").concat(f)),s=f=>e.remove("".concat(h0,"-").concat(f)),n=L.autoFetchSvg?Z5():U0.concat(Object.keys(Q5));n.includes("fa")||n.push("fa");let a=[".".concat(X0,":not([").concat(B2,"])")].concat(n.map(f=>".".concat(f,":not([").concat(B2,"])"))).join(", ");if(a.length===0)return Promise.resolve();let i=[];try{i=J2(c.querySelectorAll(a))}catch{}if(i.length>0)l("pending"),s("complete");else return Promise.resolve();let o=L4.begin("onTree"),r=i.reduce((f,u)=>{try{let m=z6(u);m&&f.push(m)}catch(m){K0||m.name==="MissingIcon"&&console.error(m)}return f},[]);return new Promise((f,u)=>{Promise.all(r).then(m=>{d6(m,()=>{l("active"),l("complete"),s("pending"),typeof t=="function"&&t(),o(),f()})}).catch(m=>{o(),u(m)})})}function J5(c){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;z6(c).then(e=>{e&&d6([e],t)})}function c7(c){return function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=(t||{}).icon?t:c4(t||{}),{mask:s}=e;return s&&(s=(s||{}).icon?s:c4(s||{})),c(l,p(p({},e),{},{mask:s}))}}var e7=function(c){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:e=n2,symbol:l=!1,mask:s=null,maskId:n=null,title:a=null,titleId:i=null,classes:o=[],attributes:r={},styles:f={}}=t;if(!c)return;let{prefix:u,iconName:m,icon:d}=c;return p3(p({type:"icon"},c),()=>(H2("beforeDOMElementCreation",{iconDefinition:c,params:t}),L.autoA11y&&(a?r["aria-labelledby"]="".concat(L.replacementClass,"-title-").concat(i||C1()):(r["aria-hidden"]="true",r.focusable="false")),d4({icons:{main:e4(d),mask:s?e4(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:u,iconName:m,transform:p(p({},n2),e),symbol:l,title:a,maskId:n,titleId:i,extra:{attributes:r,styles:f,classes:o}})))},l7={mixout(){return{icon:c7(e7)}},hooks(){return{mutationObserverCallbacks(c){return c.treeCallback=T0,c.nodeCallback=J5,c}}},provides(c){c.i2svg=function(t){let{node:e=S,callback:l=()=>{}}=t;return T0(e,l)},c.generateSvgReplacementMutation=function(t,e){let{iconName:l,title:s,titleId:n,prefix:a,transform:i,symbol:o,mask:r,maskId:f,extra:u}=e;return new Promise((m,d)=>{Promise.all([l4(l,a),r.iconName?l4(r.iconName,r.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(z=>{let[h,b]=z;m([t,d4({icons:{main:h,mask:b},prefix:a,iconName:l,transform:i,symbol:o,maskId:f,title:s,titleId:n,extra:u,watchable:!0})])}).catch(d)})},c.generateAbstractIcon=function(t){let{children:e,attributes:l,main:s,transform:n,styles:a}=t,i=f3(a);i.length>0&&(l.style=i);let o;return m4(n)&&(o=A2("generateAbstractTransformGrouping",{main:s,transform:n,containerWidth:s.width,iconWidth:s.width})),e.push(o||s.icon),{children:e,attributes:l}}}},t7={mixout(){return{layer(c){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{classes:e=[]}=t;return p3({type:"layer"},()=>{H2("beforeDOMElementCreation",{assembler:c,params:t});let l=[];return c(s=>{Array.isArray(s)?s.map(n=>{l=l.concat(n.abstract)}):l=l.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(L.cssPrefix,"-layers"),...e].join(" ")},children:l}]})}}}},s7={mixout(){return{counter(c){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{title:e=null,classes:l=[],attributes:s={},styles:n={}}=t;return p3({type:"counter",content:c},()=>(H2("beforeDOMElementCreation",{content:c,params:t}),D5({content:c.toString(),title:e,extra:{attributes:s,styles:n,classes:["".concat(L.cssPrefix,"-layers-counter"),...l]}})))}}}},n7={mixout(){return{text(c){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:e=n2,title:l=null,classes:s=[],attributes:n={},styles:a={}}=t;return p3({type:"text",content:c},()=>(H2("beforeDOMElementCreation",{content:c,params:t}),N0({content:c,transform:p(p({},n2),e),title:l,extra:{attributes:n,styles:a,classes:["".concat(L.cssPrefix,"-layers-text"),...s]}})))}}},provides(c){c.generateLayersText=function(t,e){let{title:l,transform:s,extra:n}=e,a=null,i=null;if(H0){let o=parseInt(getComputedStyle(t).fontSize,10),r=t.getBoundingClientRect();a=r.width/o,i=r.height/o}return L.autoA11y&&!l&&(n.attributes["aria-hidden"]="true"),Promise.resolve([t,N0({content:t.innerHTML,width:a,height:i,transform:s,title:l,extra:n,watchable:!0})])}}},a7=new RegExp('"',"ug"),E0=[1105920,1112319],P0=p(p(p(p({},{FontAwesome:{normal:"fas",400:"fas"}}),k8),q8),$8),n4=Object.keys(P0).reduce((c,t)=>(c[t.toLowerCase()]=P0[t],c),{}),i7=Object.keys(n4).reduce((c,t)=>{let e=n4[t];return c[t]=e[900]||[...Object.entries(e)][0][1],c},{});function o7(c){let t=c.replace(a7,""),e=L5(t,0),l=e>=E0[0]&&e<=E0[1],s=t.length===2?t[0]===t[1]:!1;return{value:X3(s?t[0]:t),isSecondary:l||s}}function r7(c,t){let e=c.replace(/^['"]|['"]$/g,"").toLowerCase(),l=parseInt(t),s=isNaN(l)?"normal":l;return(n4[e]||{})[s]||i7[e]}function _0(c,t){let e="".concat(G8).concat(t.replace(":","-"));return new Promise((l,s)=>{if(c.getAttribute(e)!==null)return l();let a=J2(c.children).filter(m=>m.getAttribute(q3)===t)[0],i=v2.getComputedStyle(c,t),o=i.getPropertyValue("font-family"),r=o.match(Z8),f=i.getPropertyValue("font-weight"),u=i.getPropertyValue("content");if(a&&!r)return c.removeChild(a),l();if(r&&u!=="none"&&u!==""){let m=i.getPropertyValue("content"),d=r7(o,f),{value:z,isSecondary:h}=o7(m),b=r[0].startsWith("FontAwesome"),v=p4(d,z),C=v;if(b){let k=b5(z);k.iconName&&k.prefix&&(v=k.iconName,d=k.prefix)}if(v&&!h&&(!a||a.getAttribute(i4)!==d||a.getAttribute(o4)!==C)){c.setAttribute(e,C),a&&c.removeChild(a);let k=X5(),{extra:T}=k;T.attributes[q3]=t,l4(v,d).then(Q=>{let W2=d4(p(p({},k),{},{icons:{main:Q,mask:f6()},prefix:d,iconName:C,extra:T,watchable:!0})),z2=S.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?c.insertBefore(z2,c.firstChild):c.appendChild(z2),z2.outerHTML=W2.map(k2=>y1(k2)).join(`
`),c.removeAttribute(e),l()}).catch(s)}else l()}else l()})}function f7(c){return Promise.all([_0(c,"::before"),_0(c,"::after")])}function m7(c){return c.parentNode!==document.head&&!~Y8.indexOf(c.tagName.toUpperCase())&&!c.getAttribute(q3)&&(!c.parentNode||c.parentNode.tagName!=="svg")}function I0(c){if(d2)return new Promise((t,e)=>{let l=J2(c.querySelectorAll("*")).filter(m7).map(f7),s=L4.begin("searchPseudoElements");L6(),Promise.all(l).then(()=>{s(),s4(),t()}).catch(()=>{s(),s4(),e()})})}var u7={hooks(){return{mutationObserverCallbacks(c){return c.pseudoElementsCallback=I0,c}}},provides(c){c.pseudoElements2svg=function(t){let{node:e=S}=t;L.searchPseudoElements&&I0(e)}}},O0=!1,p7={mixout(){return{dom:{unwatch(){L6(),O0=!0}}}},hooks(){return{bootstrap(){A0(J3("mutationObserverCallbacks",{}))},noAuto(){q5()},watch(c){let{observeMutationsRoot:t}=c;O0?s4():A0(J3("mutationObserverCallbacks",{observeMutationsRoot:t}))}}}},D0=c=>{let t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return c.toLowerCase().split(" ").reduce((e,l)=>{let s=l.toLowerCase().split("-"),n=s[0],a=s.slice(1).join("-");if(n&&a==="h")return e.flipX=!0,e;if(n&&a==="v")return e.flipY=!0,e;if(a=parseFloat(a),isNaN(a))return e;switch(n){case"grow":e.size=e.size+a;break;case"shrink":e.size=e.size-a;break;case"left":e.x=e.x-a;break;case"right":e.x=e.x+a;break;case"up":e.y=e.y-a;break;case"down":e.y=e.y+a;break;case"rotate":e.rotate=e.rotate+a;break}return e},t)},d7={mixout(){return{parse:{transform:c=>D0(c)}}},hooks(){return{parseNodeAttributes(c,t){let e=t.getAttribute("data-fa-transform");return e&&(c.transform=D0(e)),c}}},provides(c){c.generateAbstractTransformGrouping=function(t){let{main:e,transform:l,containerWidth:s,iconWidth:n}=t,a={transform:"translate(".concat(s/2," 256)")},i="translate(".concat(l.x*32,", ").concat(l.y*32,") "),o="scale(".concat(l.size/16*(l.flipX?-1:1),", ").concat(l.size/16*(l.flipY?-1:1),") "),r="rotate(".concat(l.rotate," 0 0)"),f={transform:"".concat(i," ").concat(o," ").concat(r)},u={transform:"translate(".concat(n/2*-1," -256)")},m={outer:a,inner:f,path:u};return{tag:"g",attributes:p({},m.outer),children:[{tag:"g",attributes:p({},m.inner),children:[{tag:e.icon.tag,children:e.icon.children,attributes:p(p({},e.icon.attributes),m.path)}]}]}}}},W3={x:0,y:0,width:"100%",height:"100%"};function R0(c){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return c.attributes&&(c.attributes.fill||t)&&(c.attributes.fill="black"),c}function L7(c){return c.tag==="g"?c.children:[c]}var z7={hooks(){return{parseNodeAttributes(c,t){let e=t.getAttribute("data-fa-mask"),l=e?u3(e.split(" ").map(s=>s.trim())):f6();return l.prefix||(l.prefix=w2()),c.mask=l,c.maskId=t.getAttribute("data-fa-mask-id"),c}}},provides(c){c.generateAbstractMask=function(t){let{children:e,attributes:l,main:s,mask:n,maskId:a,transform:i}=t,{width:o,icon:r}=s,{width:f,icon:u}=n,m=o5({transform:i,containerWidth:f,iconWidth:o}),d={tag:"rect",attributes:p(p({},W3),{},{fill:"white"})},z=r.children?{children:r.children.map(R0)}:{},h={tag:"g",attributes:p({},m.inner),children:[R0(p({tag:r.tag,attributes:p(p({},r.attributes),m.path)},z))]},b={tag:"g",attributes:p({},m.outer),children:[h]},v="mask-".concat(a||C1()),C="clip-".concat(a||C1()),k={tag:"mask",attributes:p(p({},W3),{},{id:v,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[d,b]},T={tag:"defs",children:[{tag:"clipPath",attributes:{id:C},children:L7(u)},k]};return e.push(T,{tag:"rect",attributes:p({fill:"currentColor","clip-path":"url(#".concat(C,")"),mask:"url(#".concat(v,")")},W3)}),{children:e,attributes:l}}}},h7={provides(c){let t=!1;v2.matchMedia&&(t=v2.matchMedia("(prefers-reduced-motion: reduce)").matches),c.missingIconAbstract=function(){let e=[],l={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};e.push({tag:"path",attributes:p(p({},l),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});let n=p(p({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:p(p({},l),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||a.children.push({tag:"animate",attributes:p(p({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:p(p({},n),{},{values:"1;0;1;1;0;1;"})}),e.push(a),e.push({tag:"path",attributes:p(p({},l),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:p(p({},n),{},{values:"1;0;0;0;0;1;"})}]}),t||e.push({tag:"path",attributes:p(p({},l),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:p(p({},n),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:e}}}},M7={hooks(){return{parseNodeAttributes(c,t){let e=t.getAttribute("data-fa-symbol"),l=e===null?!1:e===""?!0:e;return c.symbol=l,c}}}},g7=[m5,l7,t7,s7,n7,u7,p7,d7,z7,h7,M7];k5(g7,{mixoutsTo:j});var _9=j.noAuto,h6=j.config,I9=j.library,M6=j.dom,g6=j.parse,O9=j.findIconDefinition,D9=j.toHtml,C6=j.icon,R9=j.layer,C7=j.text,b7=j.counter;var y7=["*"],N7=c=>{throw new Error(`Could not find icon with iconName=${c.iconName} and prefix=${c.prefix} in the icon library.`)},S7=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},x6=c=>c!=null&&(c===90||c===180||c===270||c==="90"||c==="180"||c==="270"),v7=c=>{let t=x6(c.rotate),e={[`fa-${c.animation}`]:c.animation!=null&&!c.animation.startsWith("spin"),"fa-spin":c.animation==="spin"||c.animation==="spin-reverse","fa-spin-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-spin-reverse":c.animation==="spin-reverse"||c.animation==="spin-pulse-reverse","fa-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-fw":c.fixedWidth,"fa-border":c.border,"fa-inverse":c.inverse,"fa-layers-counter":c.counter,"fa-flip-horizontal":c.flip==="horizontal"||c.flip==="both","fa-flip-vertical":c.flip==="vertical"||c.flip==="both",[`fa-${c.size}`]:c.size!==null,[`fa-rotate-${c.rotate}`]:t,"fa-rotate-by":c.rotate!=null&&!t,[`fa-pull-${c.pull}`]:c.pull!==null,[`fa-stack-${c.stackItemSize}`]:c.stackItemSize!=null};return Object.keys(e).map(l=>e[l]?l:null).filter(l=>l)},h4=new WeakSet,b6="fa-auto-css";function w7(c,t){if(!t.autoAddCss||h4.has(c))return;if(c.getElementById(b6)!=null){t.autoAddCss=!1,h4.add(c);return}let e=c.createElement("style");e.setAttribute("type","text/css"),e.setAttribute("id",b6),e.innerHTML=M6.css();let l=c.head.childNodes,s=null;for(let n=l.length-1;n>-1;n--){let a=l[n],i=a.nodeName.toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(s=a)}c.head.insertBefore(e,s),t.autoAddCss=!1,h4.add(c)}var A7=c=>c.prefix!==void 0&&c.iconName!==void 0,k7=(c,t)=>A7(c)?c:Array.isArray(c)&&c.length===2?{prefix:c[0],iconName:c[1]}:{prefix:t,iconName:c},T7=(()=>{class c{constructor(){this.defaultPrefix="fas",this.fallbackIcon=null,this._autoAddCss=!0}set autoAddCss(e){h6.autoAddCss=e,this._autoAddCss=e}get autoAddCss(){return this._autoAddCss}static{this.\u0275fac=function(l){return new(l||c)}}static{this.\u0275prov=M({token:c,factory:c.\u0275fac,providedIn:"root"})}}return c})(),E7=(()=>{class c{constructor(){this.definitions={}}addIcons(...e){for(let l of e){l.prefix in this.definitions||(this.definitions[l.prefix]={}),this.definitions[l.prefix][l.iconName]=l;for(let s of l.icon[2])typeof s=="string"&&(this.definitions[l.prefix][s]=l)}}addIconPacks(...e){for(let l of e){let s=Object.keys(l).map(n=>l[n]);this.addIcons(...s)}}getIconDefinition(e,l){return e in this.definitions&&l in this.definitions[e]?this.definitions[e][l]:null}static{this.\u0275fac=function(l){return new(l||c)}}static{this.\u0275prov=M({token:c,factory:c.\u0275fac,providedIn:"root"})}}return c})(),P7=(()=>{class c{constructor(){this.stackItemSize="1x"}ngOnChanges(e){if("size"in e)throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')}static{this.\u0275fac=function(l){return new(l||c)}}static{this.\u0275dir=B({type:c,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:"stackItemSize",size:"size"},features:[o2]})}}return c})(),_7=(()=>{class c{constructor(e,l){this.renderer=e,this.elementRef=l}ngOnInit(){this.renderer.addClass(this.elementRef.nativeElement,"fa-stack")}ngOnChanges(e){"size"in e&&(e.size.currentValue!=null&&this.renderer.addClass(this.elementRef.nativeElement,`fa-${e.size.currentValue}`),e.size.previousValue!=null&&this.renderer.removeClass(this.elementRef.nativeElement,`fa-${e.size.previousValue}`))}static{this.\u0275fac=function(l){return new(l||c)($($1),$(E2))}}static{this.\u0275cmp=I({type:c,selectors:[["fa-stack"]],inputs:{size:"size"},features:[o2],ngContentSelectors:y7,decls:1,vars:0,template:function(l,s){l&1&&(f2(),m2(0))},encapsulation:2})}}return c})(),X9=(()=>{class c{constructor(e,l,s,n,a){this.sanitizer=e,this.config=l,this.iconLibrary=s,this.stackItem=n,this.document=g(s2),a!=null&&n==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x"></fa-icon>.')}ngOnChanges(e){if(this.icon==null&&this.config.fallbackIcon==null){S7();return}if(e){let l=this.findIconDefinition(this.icon??this.config.fallbackIcon);if(l!=null){let s=this.buildParams();w7(this.document,this.config);let n=C6(l,s);this.renderedIconHTML=this.sanitizer.bypassSecurityTrustHtml(n.html.join(`
`))}}}render(){this.ngOnChanges({})}findIconDefinition(e){let l=k7(e,this.config.defaultPrefix);if("icon"in l)return l;let s=this.iconLibrary.getIconDefinition(l.prefix,l.iconName);return s??(N7(l),null)}buildParams(){let e={flip:this.flip,animation:this.animation,border:this.border,inverse:this.inverse,size:this.size||null,pull:this.pull||null,rotate:this.rotate||null,fixedWidth:typeof this.fixedWidth=="boolean"?this.fixedWidth:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize:null},l=typeof this.transform=="string"?g6.transform(this.transform):this.transform,s={};return e.rotate!=null&&!x6(e.rotate)&&(s["--fa-rotate-angle"]=`${e.rotate}`),{title:this.title,transform:l,classes:v7(e),mask:this.mask!=null?this.findIconDefinition(this.mask):null,symbol:this.symbol,attributes:{role:this.a11yRole},styles:s}}static{this.\u0275fac=function(l){return new(l||c)($(G4),$(T7),$(E7),$(P7,8),$(_7,8))}}static{this.\u0275cmp=I({type:c,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(l,s){l&2&&(F4("innerHTML",s.renderedIconHTML,E4),H("title",s.title))},inputs:{icon:"icon",title:"title",animation:"animation",mask:"mask",flip:"flip",size:"size",pull:"pull",border:"border",inverse:"inverse",symbol:"symbol",rotate:"rotate",fixedWidth:"fixedWidth",transform:"transform",a11yRole:"a11yRole"},features:[o2],decls:0,vars:0,template:function(l,s){},encapsulation:2})}}return c})();var Q9=(()=>{class c{static{this.\u0275fac=function(l){return new(l||c)}}static{this.\u0275mod=K({type:c})}static{this.\u0275inj=q({})}}return c})();var J9={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"]};var ce={prefix:"fas",iconName:"star",icon:[576,512,[11088,61446],"f005","M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"]};var ee={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]};var le={prefix:"fas",iconName:"tv",icon:[640,512,[63717,"television","tv-alt"],"f26c","M64 64l0 288 512 0 0-288L64 64zM0 64C0 28.7 28.7 0 64 0L576 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64L64 416c-35.3 0-64-28.7-64-64L0 64zM128 448l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-384 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"]};var te={prefix:"fas",iconName:"clapperboard",icon:[512,512,[],"e131","M448 32l-86.1 0-1 1-127 127 92.1 0 1-1L453.8 32.3c-1.9-.2-3.8-.3-5.8-.3zm64 128l0-64c0-15.1-5.3-29.1-14-40l-104 104L512 160zM294.1 32l-92.1 0-1 1L73.9 160l92.1 0 1-1 127-127zM64 32C28.7 32 0 60.7 0 96l0 64 6.1 0 1-1 127-127L64 32zM512 192L0 192 0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-224z"]};var se={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]};var ne={prefix:"fas",iconName:"chevron-left",icon:[320,512,[9001],"f053","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"]};var ae={prefix:"fas",iconName:"chevron-right",icon:[320,512,[9002],"f054","M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"]};var I7=Object.defineProperty,O7=Object.defineProperties,D7=Object.getOwnPropertyDescriptors,d3=Object.getOwnPropertySymbols,S6=Object.prototype.hasOwnProperty,v6=Object.prototype.propertyIsEnumerable,y6=(c,t,e)=>t in c?I7(c,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):c[t]=e,e2=(c,t)=>{for(var e in t||(t={}))S6.call(t,e)&&y6(c,e,t[e]);if(d3)for(var e of d3(t))v6.call(t,e)&&y6(c,e,t[e]);return c},M4=(c,t)=>O7(c,D7(t)),L2=(c,t)=>{var e={};for(var l in c)S6.call(c,l)&&t.indexOf(l)<0&&(e[l]=c[l]);if(c!=null&&d3)for(var l of d3(c))t.indexOf(l)<0&&v6.call(c,l)&&(e[l]=c[l]);return e};function re(...c){return L1(...c)}var R7=t0(),V=R7;function N6(c,t){c3(c)?c.push(...t||[]):J(c)&&Object.assign(c,t)}function F7(c){return J(c)&&c.hasOwnProperty("value")&&c.hasOwnProperty("type")?c.value:c}function $7(c){return c.replaceAll(/ /g,"").replace(/[^\w]/g,"-")}function g4(c="",t=""){return $7(`${y2(c,!1)&&y2(t,!1)?`${c}-`:c}${t}`)}function w6(c="",t=""){return`--${g4(c,t)}`}function B7(c=""){let t=(c.match(/{/g)||[]).length,e=(c.match(/}/g)||[]).length;return(t+e)%2!==0}function A6(c,t="",e="",l=[],s){if(y2(c)){let n=/{([^}]*)}/g,a=c.trim();if(B7(a))return;if(W(a,n)){let i=a.replaceAll(n,f=>{let m=f.replace(/{|}/g,"").split(".").filter(d=>!l.some(z=>W(d,z)));return`var(${w6(e,e3(m.join("-")))}${x(s)?`, ${s}`:""})`}),o=/(\d+\s+[\+\-\*\/]\s+\d+)/g,r=/var\([^)]+\)/g;return W(i.replace(r,"0"),o)?`calc(${i})`:i}return a}else if(o0(c))return c}function H7(c,t,e){y2(t,!1)&&c.push(`${t}:${e};`)}function c1(c,t){return c?`${c}{${t}}`:""}var e1=(...c)=>W7(y.getTheme(),...c),W7=(c={},t,e,l)=>{if(t){let{variable:s,options:n}=y.defaults||{},{prefix:a,transform:i}=c?.options||n||{},r=W(t,/{([^}]*)}/g)?t:`{${t}}`;return l==="value"||X(l)&&i==="strict"?y.getTokenValue(t):A6(r,void 0,a,[s.excludedKeyRegex],e)}return""};function U7(c,t={}){let e=y.defaults.variable,{prefix:l=e.prefix,selector:s=e.selector,excludedKeyRegex:n=e.excludedKeyRegex}=t,a=(r,f="")=>Object.entries(r).reduce((u,[m,d])=>{let z=W(m,n)?g4(f):g4(f,e3(m)),h=F7(d);if(J(h)){let{variables:b,tokens:v}=a(h,z);N6(u.tokens,v),N6(u.variables,b)}else u.tokens.push((l?z.replace(`${l}-`,""):z).replaceAll("-",".")),H7(u.variables,w6(z),A6(h,z,l,[n]));return u},{variables:[],tokens:[]}),{variables:i,tokens:o}=a(c,l);return{value:i,tokens:o,declarations:i.join(""),css:c1(s,i.join(""))}}var c2={regex:{rules:{class:{pattern:/^\.([a-zA-Z][\w-]*)$/,resolve(c){return{type:"class",selector:c,matched:this.pattern.test(c.trim())}}},attr:{pattern:/^\[(.*)\]$/,resolve(c){return{type:"attr",selector:`:root${c}`,matched:this.pattern.test(c.trim())}}},media:{pattern:/^@media (.*)$/,resolve(c){return{type:"media",selector:`${c}{:root{[CSS]}}`,matched:this.pattern.test(c.trim())}}},system:{pattern:/^system$/,resolve(c){return{type:"system",selector:"@media (prefers-color-scheme: dark){:root{[CSS]}}",matched:this.pattern.test(c.trim())}}},custom:{resolve(c){return{type:"custom",selector:c,matched:!0}}}},resolve(c){let t=Object.keys(this.rules).filter(e=>e!=="custom").map(e=>this.rules[e]);return[c].flat().map(e=>{var l;return(l=t.map(s=>s.resolve(e)).find(s=>s.matched))!=null?l:this.rules.custom.resolve(e)})}},_toVariables(c,t){return U7(c,{prefix:t?.prefix})},getCommon({name:c="",theme:t={},params:e,set:l,defaults:s}){var n,a,i,o,r,f,u;let{preset:m,options:d}=t,z,h,b,v,C,k,T;if(x(m)&&d.transform!=="strict"){let{primitive:Q,semantic:W2,extend:z2}=m,k2=W2||{},{colorScheme:N1}=k2,S1=L2(k2,["colorScheme"]),v1=z2||{},{colorScheme:w1}=v1,t1=L2(v1,["colorScheme"]),s1=N1||{},{dark:A1}=s1,k1=L2(s1,["dark"]),T1=w1||{},{dark:E1}=T1,P1=L2(T1,["dark"]),_1=x(Q)?this._toVariables({primitive:Q},d):{},I1=x(S1)?this._toVariables({semantic:S1},d):{},O1=x(k1)?this._toVariables({light:k1},d):{},y4=x(A1)?this._toVariables({dark:A1},d):{},N4=x(t1)?this._toVariables({semantic:t1},d):{},S4=x(P1)?this._toVariables({light:P1},d):{},v4=x(E1)?this._toVariables({dark:E1},d):{},[H6,W6]=[(n=_1.declarations)!=null?n:"",_1.tokens],[U6,j6]=[(a=I1.declarations)!=null?a:"",I1.tokens||[]],[V6,q6]=[(i=O1.declarations)!=null?i:"",O1.tokens||[]],[G6,K6]=[(o=y4.declarations)!=null?o:"",y4.tokens||[]],[Y6,X6]=[(r=N4.declarations)!=null?r:"",N4.tokens||[]],[Q6,Z6]=[(f=S4.declarations)!=null?f:"",S4.tokens||[]],[J6,c8]=[(u=v4.declarations)!=null?u:"",v4.tokens||[]];z=this.transformCSS(c,H6,"light","variable",d,l,s),h=W6;let e8=this.transformCSS(c,`${U6}${V6}`,"light","variable",d,l,s),l8=this.transformCSS(c,`${G6}`,"dark","variable",d,l,s);b=`${e8}${l8}`,v=[...new Set([...j6,...q6,...K6])];let t8=this.transformCSS(c,`${Y6}${Q6}color-scheme:light`,"light","variable",d,l,s),s8=this.transformCSS(c,`${J6}color-scheme:dark`,"dark","variable",d,l,s);C=`${t8}${s8}`,k=[...new Set([...X6,...Z6,...c8])],T=Y(m.css,{dt:e1})}return{primitive:{css:z,tokens:h},semantic:{css:b,tokens:v},global:{css:C,tokens:k},style:T}},getPreset({name:c="",preset:t={},options:e,params:l,set:s,defaults:n,selector:a}){var i,o,r;let f,u,m;if(x(t)&&e.transform!=="strict"){let d=c.replace("-directive",""),z=t,{colorScheme:h,extend:b,css:v}=z,C=L2(z,["colorScheme","extend","css"]),k=b||{},{colorScheme:T}=k,Q=L2(k,["colorScheme"]),W2=h||{},{dark:z2}=W2,k2=L2(W2,["dark"]),N1=T||{},{dark:S1}=N1,v1=L2(N1,["dark"]),w1=x(C)?this._toVariables({[d]:e2(e2({},C),Q)},e):{},t1=x(k2)?this._toVariables({[d]:e2(e2({},k2),v1)},e):{},s1=x(z2)?this._toVariables({[d]:e2(e2({},z2),S1)},e):{},[A1,k1]=[(i=w1.declarations)!=null?i:"",w1.tokens||[]],[T1,E1]=[(o=t1.declarations)!=null?o:"",t1.tokens||[]],[P1,_1]=[(r=s1.declarations)!=null?r:"",s1.tokens||[]],I1=this.transformCSS(d,`${A1}${T1}`,"light","variable",e,s,n,a),O1=this.transformCSS(d,P1,"dark","variable",e,s,n,a);f=`${I1}${O1}`,u=[...new Set([...k1,...E1,..._1])],m=Y(v,{dt:e1})}return{css:f,tokens:u,style:m}},getPresetC({name:c="",theme:t={},params:e,set:l,defaults:s}){var n;let{preset:a,options:i}=t,o=(n=a?.components)==null?void 0:n[c];return this.getPreset({name:c,preset:o,options:i,params:e,set:l,defaults:s})},getPresetD({name:c="",theme:t={},params:e,set:l,defaults:s}){var n;let a=c.replace("-directive",""),{preset:i,options:o}=t,r=(n=i?.directives)==null?void 0:n[a];return this.getPreset({name:a,preset:r,options:o,params:e,set:l,defaults:s})},applyDarkColorScheme(c){return!(c.darkModeSelector==="none"||c.darkModeSelector===!1)},getColorSchemeOption(c,t){var e;return this.applyDarkColorScheme(c)?this.regex.resolve(c.darkModeSelector===!0?t.options.darkModeSelector:(e=c.darkModeSelector)!=null?e:t.options.darkModeSelector):[]},getLayerOrder(c,t={},e,l){let{cssLayer:s}=t;return s?`@layer ${Y(s.order||"primeui",e)}`:""},getCommonStyleSheet({name:c="",theme:t={},params:e,props:l={},set:s,defaults:n}){let a=this.getCommon({name:c,theme:t,params:e,set:s,defaults:n}),i=Object.entries(l).reduce((o,[r,f])=>o.push(`${r}="${f}"`)&&o,[]).join(" ");return Object.entries(a||{}).reduce((o,[r,f])=>{if(f?.css){let u=F2(f?.css),m=`${r}-variables`;o.push(`<style type="text/css" data-primevue-style-id="${m}" ${i}>${u}</style>`)}return o},[]).join("")},getStyleSheet({name:c="",theme:t={},params:e,props:l={},set:s,defaults:n}){var a;let i={name:c,theme:t,params:e,set:s,defaults:n},o=(a=c.includes("-directive")?this.getPresetD(i):this.getPresetC(i))==null?void 0:a.css,r=Object.entries(l).reduce((f,[u,m])=>f.push(`${u}="${m}"`)&&f,[]).join(" ");return o?`<style type="text/css" data-primevue-style-id="${c}-variables" ${r}>${F2(o)}</style>`:""},createTokens(c={},t,e="",l="",s={}){return Object.entries(c).forEach(([n,a])=>{let i=W(n,t.variable.excludedKeyRegex)?e:e?`${e}.${R3(n)}`:R3(n),o=l?`${l}.${n}`:n;J(a)?this.createTokens(a,t,i,o,s):(s[i]||(s[i]={paths:[],computed(r,f={}){var u,m;return this.paths.length===1?(u=this.paths[0])==null?void 0:u.computed(this.paths[0].scheme,f.binding):r&&r!=="none"?(m=this.paths.find(d=>d.scheme===r))==null?void 0:m.computed(r,f.binding):this.paths.map(d=>d.computed(d.scheme,f[d.scheme]))}}),s[i].paths.push({path:o,value:a,scheme:o.includes("colorScheme.light")?"light":o.includes("colorScheme.dark")?"dark":"none",computed(r,f={}){let u=/{([^}]*)}/g,m=a;if(f.name=this.path,f.binding||(f.binding={}),W(a,u)){let z=a.trim().replaceAll(u,v=>{var C;let k=v.replace(/{|}/g,""),T=(C=s[k])==null?void 0:C.computed(r,f);return c3(T)&&T.length===2?`light-dark(${T[0].value},${T[1].value})`:T?.value}),h=/(\d+\w*\s+[\+\-\*\/]\s+\d+\w*)/g,b=/var\([^)]+\)/g;m=W(z.replace(b,"0"),h)?`calc(${z})`:z}return X(f.binding)&&delete f.binding,{colorScheme:r,path:this.path,paths:f,value:m.includes("undefined")?void 0:m}}}))}),s},getTokenValue(c,t,e){var l;let n=(o=>o.split(".").filter(f=>!W(f.toLowerCase(),e.variable.excludedKeyRegex)).join("."))(t),a=t.includes("colorScheme.light")?"light":t.includes("colorScheme.dark")?"dark":void 0,i=[(l=c[n])==null?void 0:l.computed(a)].flat().filter(o=>o);return i.length===1?i[0].value:i.reduce((o={},r)=>{let f=r,{colorScheme:u}=f,m=L2(f,["colorScheme"]);return o[u]=m,o},void 0)},getSelectorRule(c,t,e,l){return e==="class"||e==="attr"?c1(x(t)?`${c}${t},${c} ${t}`:c,l):c1(c,x(t)?c1(t,l):l)},transformCSS(c,t,e,l,s={},n,a,i){if(x(t)){let{cssLayer:o}=s;if(l!=="style"){let r=this.getColorSchemeOption(s,a);t=e==="dark"?r.reduce((f,{type:u,selector:m})=>(x(m)&&(f+=m.includes("[CSS]")?m.replace("[CSS]",t):this.getSelectorRule(m,i,u,t)),f),""):c1(i??":root",t)}if(o){let r={name:"primeui",order:"primeui"};J(o)&&(r.name=Y(o.name,{name:c,type:l})),x(r.name)&&(t=c1(`@layer ${r.name}`,t),n?.layerNames(r.name))}return t}return""}},y={defaults:{variable:{prefix:"p",selector:":root",excludedKeyRegex:/^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi},options:{prefix:"p",darkModeSelector:"system",cssLayer:!1}},_theme:void 0,_layerNames:new Set,_loadedStyleNames:new Set,_loadingStyles:new Set,_tokens:{},update(c={}){let{theme:t}=c;t&&(this._theme=M4(e2({},t),{options:e2(e2({},this.defaults.options),t.options)}),this._tokens=c2.createTokens(this.preset,this.defaults),this.clearLoadedStyleNames())},get theme(){return this._theme},get preset(){var c;return((c=this.theme)==null?void 0:c.preset)||{}},get options(){var c;return((c=this.theme)==null?void 0:c.options)||{}},get tokens(){return this._tokens},getTheme(){return this.theme},setTheme(c){this.update({theme:c}),V.emit("theme:change",c)},getPreset(){return this.preset},setPreset(c){this._theme=M4(e2({},this.theme),{preset:c}),this._tokens=c2.createTokens(c,this.defaults),this.clearLoadedStyleNames(),V.emit("preset:change",c),V.emit("theme:change",this.theme)},getOptions(){return this.options},setOptions(c){this._theme=M4(e2({},this.theme),{options:c}),this.clearLoadedStyleNames(),V.emit("options:change",c),V.emit("theme:change",this.theme)},getLayerNames(){return[...this._layerNames]},setLayerNames(c){this._layerNames.add(c)},getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(c){return this._loadedStyleNames.has(c)},setLoadedStyleName(c){this._loadedStyleNames.add(c)},deleteLoadedStyleName(c){this._loadedStyleNames.delete(c)},clearLoadedStyleNames(){this._loadedStyleNames.clear()},getTokenValue(c){return c2.getTokenValue(this.tokens,c,this.defaults)},getCommon(c="",t){return c2.getCommon({name:c,theme:this.theme,params:t,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getComponent(c="",t){let e={name:c,theme:this.theme,params:t,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return c2.getPresetC(e)},getDirective(c="",t){let e={name:c,theme:this.theme,params:t,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return c2.getPresetD(e)},getCustomPreset(c="",t,e,l){let s={name:c,preset:t,options:this.options,selector:e,params:l,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return c2.getPreset(s)},getLayerOrderCSS(c=""){return c2.getLayerOrder(c,this.options,{names:this.getLayerNames()},this.defaults)},transformCSS(c="",t,e="style",l){return c2.transformCSS(c,t,l,e,this.options,{layerNames:this.setLayerNames.bind(this)},this.defaults)},getCommonStyleSheet(c="",t,e={}){return c2.getCommonStyleSheet({name:c,theme:this.theme,params:t,props:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getStyleSheet(c,t,e={}){return c2.getStyleSheet({name:c,theme:this.theme,params:t,props:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},onStyleMounted(c){this._loadingStyles.add(c)},onStyleUpdated(c){this._loadingStyles.add(c)},onStyleLoaded(c,{name:t}){this._loadingStyles.size&&(this._loadingStyles.delete(t),V.emit(`theme:${t}:load`,c),!this._loadingStyles.size&&V.emit("theme:load"))}};var j7=0,k6=(()=>{class c{document=g(s2);use(e,l={}){let s=!1,n=e,a=null,{immediate:i=!0,manual:o=!1,name:r=`style_${++j7}`,id:f=void 0,media:u=void 0,nonce:m=void 0,first:d=!1,props:z={}}=l;if(this.document){if(a=this.document.querySelector(`style[data-primeng-style-id="${r}"]`)||f&&this.document.getElementById(f)||this.document.createElement("style"),!a.isConnected){n=e,E3(a,{type:"text/css",media:u,nonce:m});let h=this.document.head;d&&h.firstChild?h.insertBefore(a,h.firstChild):h.appendChild(a),l0(a,"data-primeng-style-id",r)}return a.textContent!==n&&(a.textContent=n),{id:f,name:r,el:a,css:n}}}static \u0275fac=function(l){return new(l||c)};static \u0275prov=M({token:c,factory:c.\u0275fac,providedIn:"root"})}return c})();var l1={_loadedStyleNames:new Set,getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(c){return this._loadedStyleNames.has(c)},setLoadedStyleName(c){this._loadedStyleNames.add(c)},deleteLoadedStyleName(c){this._loadedStyleNames.delete(c)},clearLoadedStyleNames(){this._loadedStyleNames.clear()}},V7=({dt:c})=>`
*,
::before,
::after {
    box-sizing: border-box;
}

/* Non ng overlay animations */
.p-connected-overlay {
    opacity: 0;
    transform: scaleY(0.8);
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-visible {
    opacity: 1;
    transform: scaleY(1);
}

.p-connected-overlay-hidden {
    opacity: 0;
    transform: scaleY(1);
    transition: opacity 0.1s linear;
}

/* NG based overlay animations */
.p-connected-overlay-enter-from {
    opacity: 0;
    transform: scaleY(0.8);
}

.p-connected-overlay-leave-to {
    opacity: 0;
}

.p-connected-overlay-enter-active {
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-leave-active {
    transition: opacity 0.1s linear;
}

/* Toggleable Content */
.p-toggleable-content-enter-from,
.p-toggleable-content-leave-to {
    max-height: 0;
}

.p-toggleable-content-enter-to,
.p-toggleable-content-leave-from {
    max-height: 1000px;
}

.p-toggleable-content-leave-active {
    overflow: hidden;
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);
}

.p-toggleable-content-enter-active {
    overflow: hidden;
    transition: max-height 1s ease-in-out;
}

.p-disabled,
.p-disabled * {
    cursor: default;
    pointer-events: none;
    user-select: none;
}

.p-disabled,
.p-component:disabled {
    opacity: ${c("disabled.opacity")};
}

.pi {
    font-size: ${c("icon.size")};
}

.p-icon {
    width: ${c("icon.size")};
    height: ${c("icon.size")};
}

.p-unselectable-text {
    user-select: none;
}

.p-overlay-mask {
    background: ${c("mask.background")};
    color: ${c("mask.color")};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-overlay-mask-enter {
    animation: p-overlay-mask-enter-animation ${c("mask.transition.duration")} forwards;
}

.p-overlay-mask-leave {
    animation: p-overlay-mask-leave-animation ${c("mask.transition.duration")} forwards;
}
/* Temporarily disabled, distrupts PrimeNG overlay animations */
/* @keyframes p-overlay-mask-enter-animation {
    from {
        background: transparent;
    }
    to {
        background: ${c("mask.background")};
    }
}
@keyframes p-overlay-mask-leave-animation {
    from {
        background: ${c("mask.background")};
    }
    to {
        background: transparent;
    }
}*/

.p-iconwrapper {
    display: inline-flex;
    justify-content: center;
    align-items: center;
}
`,q7=({dt:c})=>`
.p-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}

.p-hidden-accessible input,
.p-hidden-accessible select {
    transform: scale(0);
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: ${c("scrollbar.width")};
}

/* @todo move to baseiconstyle.ts */

.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,F=(()=>{class c{name="base";useStyle=g(k6);theme=void 0;css=void 0;classes={};inlineStyles={};load=(e,l={},s=n=>n)=>{let n=s(Y(e,{dt:e1}));return n?this.useStyle.use(F2(n),w({name:this.name},l)):{}};loadCSS=(e={})=>this.load(this.css,e);loadTheme=(e={},l="")=>this.load(this.theme,e,(s="")=>y.transformCSS(e.name||this.name,`${s}${l}`));loadGlobalCSS=(e={})=>this.load(q7,e);loadGlobalTheme=(e={},l="")=>this.load(V7,e,(s="")=>y.transformCSS(e.name||this.name,`${s}${l}`));getCommonTheme=e=>y.getCommon(this.name,e);getComponentTheme=e=>y.getComponent(this.name,e);getDirectiveTheme=e=>y.getDirective(this.name,e);getPresetTheme=(e,l,s)=>y.getCustomPreset(this.name,e,l,s);getLayerOrderThemeCSS=()=>y.getLayerOrderCSS(this.name);getStyleSheet=(e="",l={})=>{if(this.css){let s=Y(this.css,{dt:e1}),n=F2(`${s}${e}`),a=Object.entries(l).reduce((i,[o,r])=>i.push(`${o}="${r}"`)&&i,[]).join(" ");return`<style type="text/css" data-primeng-style-id="${this.name}" ${a}>${n}</style>`}return""};getCommonThemeStyleSheet=(e,l={})=>y.getCommonStyleSheet(this.name,e,l);getThemeStyleSheet=(e,l={})=>{let s=[y.getStyleSheet(this.name,e,l)];if(this.theme){let n=this.name==="base"?"global-style":`${this.name}-style`,a=Y(this.theme,{dt:e1}),i=F2(y.transformCSS(n,a)),o=Object.entries(l).reduce((r,[f,u])=>r.push(`${f}="${u}"`)&&r,[]).join(" ");s.push(`<style type="text/css" data-primeng-style-id="${n}" ${o}>${i}</style>`)}return s.join("")};static \u0275fac=function(l){return new(l||c)};static \u0275prov=M({token:c,factory:c.\u0275fac,providedIn:"root"})}return c})();var G7=(()=>{class c{theme=r2(void 0);csp=r2({nonce:void 0});isThemeChanged=!1;document=g(s2);baseStyle=g(F);constructor(){m1(()=>{V.on("theme:change",e=>{H4(()=>{this.isThemeChanged=!0,this.theme.set(e)})})}),m1(()=>{let e=this.theme();this.document&&e&&(this.isThemeChanged||this.onThemeChange(e),this.isThemeChanged=!1)})}ngOnDestroy(){y.clearLoadedStyleNames(),V.clear()}onThemeChange(e){y.setTheme(e),this.document&&this.loadCommonTheme()}loadCommonTheme(){if(this.theme()!=="none"&&!y.isStyleNameLoaded("common")){let{primitive:e,semantic:l,global:s,style:n}=this.baseStyle.getCommonTheme?.()||{},a={nonce:this.csp?.()?.nonce};this.baseStyle.load(e?.css,w({name:"primitive-variables"},a)),this.baseStyle.load(l?.css,w({name:"semantic-variables"},a)),this.baseStyle.load(s?.css,w({name:"global-variables"},a)),this.baseStyle.loadGlobalTheme(w({name:"global-style"},a),n),y.setLoadedStyleName("common")}}setThemeConfig(e){let{theme:l,csp:s}=e||{};l&&this.theme.set(l),s&&this.csp.set(s)}static \u0275fac=function(l){return new(l||c)};static \u0275prov=M({token:c,factory:c.\u0275fac,providedIn:"root"})}return c})(),C4=(()=>{class c extends G7{ripple=r2(!1);platformId=g(j2);inputStyle=r2(null);inputVariant=r2(null);overlayOptions={};csp=r2({nonce:void 0});filterMatchModeOptions={text:[P.STARTS_WITH,P.CONTAINS,P.NOT_CONTAINS,P.ENDS_WITH,P.EQUALS,P.NOT_EQUALS],numeric:[P.EQUALS,P.NOT_EQUALS,P.LESS_THAN,P.LESS_THAN_OR_EQUAL_TO,P.GREATER_THAN,P.GREATER_THAN_OR_EQUAL_TO],date:[P.DATE_IS,P.DATE_IS_NOT,P.DATE_BEFORE,P.DATE_AFTER]};translation={startsWith:"Starts with",contains:"Contains",notContains:"Not contains",endsWith:"Ends with",equals:"Equals",notEquals:"Not equals",noFilter:"No Filter",lt:"Less than",lte:"Less than or equal to",gt:"Greater than",gte:"Greater than or equal to",is:"Is",isNot:"Is not",before:"Before",after:"After",dateIs:"Date is",dateIsNot:"Date is not",dateBefore:"Date is before",dateAfter:"Date is after",clear:"Clear",apply:"Apply",matchAll:"Match All",matchAny:"Match Any",addRule:"Add Rule",removeRule:"Remove Rule",accept:"Yes",reject:"No",choose:"Choose",upload:"Upload",cancel:"Cancel",pending:"Pending",fileSizeTypes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],chooseYear:"Choose Year",chooseMonth:"Choose Month",chooseDate:"Choose Date",prevDecade:"Previous Decade",nextDecade:"Next Decade",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",prevHour:"Previous Hour",nextHour:"Next Hour",prevMinute:"Previous Minute",nextMinute:"Next Minute",prevSecond:"Previous Second",nextSecond:"Next Second",am:"am",pm:"pm",dateFormat:"mm/dd/yy",firstDayOfWeek:0,today:"Today",weekHeader:"Wk",weak:"Weak",medium:"Medium",strong:"Strong",passwordPrompt:"Enter a password",emptyMessage:"No results found",searchMessage:"Search results are available",selectionMessage:"{0} items selected",emptySelectionMessage:"No selected item",emptySearchMessage:"No results found",emptyFilterMessage:"No results found",fileChosenMessage:"Files",noFileChosenMessage:"No file chosen",aria:{trueLabel:"True",falseLabel:"False",nullLabel:"Not Selected",star:"1 star",stars:"{star} stars",selectAll:"All items selected",unselectAll:"All items unselected",close:"Close",previous:"Previous",next:"Next",navigation:"Navigation",scrollTop:"Scroll Top",moveTop:"Move Top",moveUp:"Move Up",moveDown:"Move Down",moveBottom:"Move Bottom",moveToTarget:"Move to Target",moveToSource:"Move to Source",moveAllToTarget:"Move All to Target",moveAllToSource:"Move All to Source",pageLabel:"{page}",firstPageLabel:"First Page",lastPageLabel:"Last Page",nextPageLabel:"Next Page",prevPageLabel:"Previous Page",rowsPerPageLabel:"Rows per page",previousPageLabel:"Previous Page",jumpToPageDropdownLabel:"Jump to Page Dropdown",jumpToPageInputLabel:"Jump to Page Input",selectRow:"Row Selected",unselectRow:"Row Unselected",expandRow:"Row Expanded",collapseRow:"Row Collapsed",showFilterMenu:"Show Filter Menu",hideFilterMenu:"Hide Filter Menu",filterOperator:"Filter Operator",filterConstraint:"Filter Constraint",editRow:"Row Edit",saveEdit:"Save Edit",cancelEdit:"Cancel Edit",listView:"List View",gridView:"Grid View",slide:"Slide",slideNumber:"{slideNumber}",zoomImage:"Zoom Image",zoomIn:"Zoom In",zoomOut:"Zoom Out",rotateRight:"Rotate Right",rotateLeft:"Rotate Left",listLabel:"Option List",selectColor:"Select a color",removeLabel:"Remove",browseFiles:"Browse Files",maximizeLabel:"Maximize"}};zIndex={modal:1100,overlay:1e3,menu:1e3,tooltip:1100};translationSource=new D1;translationObserver=this.translationSource.asObservable();getTranslation(e){return this.translation[e]}setTranslation(e){this.translation=w(w({},this.translation),e),this.translationSource.next(this.translation)}setConfig(e){let{csp:l,ripple:s,inputStyle:n,inputVariant:a,theme:i,overlayOptions:o,translation:r,filterMatchModeOptions:f}=e||{};l&&this.csp.set(l),s&&this.ripple.set(s),n&&this.inputStyle.set(n),a&&this.inputVariant.set(a),o&&(this.overlayOptions=o),r&&this.setTranslation(r),f&&(this.filterMatchModeOptions=f),i&&this.setThemeConfig({theme:i,csp:l})}static \u0275fac=(()=>{let e;return function(s){return(e||(e=N(c)))(s||c)}})();static \u0275prov=M({token:c,factory:c.\u0275fac,providedIn:"root"})}return c})(),K7=new T2("PRIME_NG_CONFIG");function $e(...c){let t=c?.map(l=>({provide:K7,useValue:l,multi:!1})),e=I4(()=>{let l=g(C4);c?.forEach(s=>l.setConfig(s))});return R1([...t,e])}var T6=(()=>{class c extends F{name="common";static \u0275fac=(()=>{let e;return function(s){return(e||(e=N(c)))(s||c)}})();static \u0275prov=M({token:c,factory:c.\u0275fac,providedIn:"root"})}return c})(),i2=(()=>{class c{document=g(s2);platformId=g(j2);el=g(E2);injector=g(k4);cd=g(j1);renderer=g($1);config=g(C4);baseComponentStyle=g(T6);baseStyle=g(F);scopedStyleEl;rootEl;dt;get styleOptions(){return{nonce:this.config?.csp().nonce}}get _name(){return this.constructor.name.replace(/^_/,"").toLowerCase()}get componentStyle(){return this._componentStyle}attrSelector=z1("pc");themeChangeListeners=[];_getHostInstance(e){if(e)return e?this.hostName?e.name===this.hostName?e:this._getHostInstance(e.parentInstance):e.parentInstance:void 0}_getOptionValue(e,l="",s={}){return J1(e,l,s)}ngOnInit(){this.document&&this._loadStyles()}ngAfterViewInit(){this.rootEl=this.el?.nativeElement,this.rootEl&&this.rootEl?.setAttribute(this.attrSelector,"")}ngOnChanges(e){if(this.document&&!q4(this.platformId)){let{dt:l}=e;l&&l.currentValue&&(this._loadScopedThemeStyles(l.currentValue),this._themeChangeListener(()=>this._loadScopedThemeStyles(l.currentValue)))}}ngOnDestroy(){this._unloadScopedThemeStyles(),this.themeChangeListeners.forEach(e=>V.off("theme:change",e))}_loadStyles(){let e=()=>{l1.isStyleNameLoaded("base")||(this.baseStyle.loadGlobalCSS(this.styleOptions),l1.setLoadedStyleName("base")),this._loadThemeStyles()};e(),this._themeChangeListener(()=>e())}_loadCoreStyles(){!l1.isStyleNameLoaded("base")&&this._name&&(this.baseComponentStyle.loadCSS(this.styleOptions),this.componentStyle&&this.componentStyle?.loadCSS(this.styleOptions),l1.setLoadedStyleName(this.componentStyle?.name))}_loadThemeStyles(){if(!y.isStyleNameLoaded("common")){let{primitive:e,semantic:l,global:s,style:n}=this.componentStyle?.getCommonTheme?.()||{};this.baseStyle.load(e?.css,w({name:"primitive-variables"},this.styleOptions)),this.baseStyle.load(l?.css,w({name:"semantic-variables"},this.styleOptions)),this.baseStyle.load(s?.css,w({name:"global-variables"},this.styleOptions)),this.baseStyle.loadGlobalTheme(w({name:"global-style"},this.styleOptions),n),y.setLoadedStyleName("common")}if(!y.isStyleNameLoaded(this.componentStyle?.name)&&this.componentStyle?.name){let{css:e,style:l}=this.componentStyle?.getComponentTheme?.()||{};this.componentStyle?.load(e,w({name:`${this.componentStyle?.name}-variables`},this.styleOptions)),this.componentStyle?.loadTheme(w({name:`${this.componentStyle?.name}-style`},this.styleOptions),l),y.setLoadedStyleName(this.componentStyle?.name)}if(!y.isStyleNameLoaded("layer-order")){let e=this.componentStyle?.getLayerOrderThemeCSS?.();this.baseStyle.load(e,w({name:"layer-order",first:!0},this.styleOptions)),y.setLoadedStyleName("layer-order")}this.dt&&(this._loadScopedThemeStyles(this.dt),this._themeChangeListener(()=>this._loadScopedThemeStyles(this.dt)))}_loadScopedThemeStyles(e){let{css:l}=this.componentStyle?.getPresetTheme?.(e,`[${this.attrSelector}]`)||{},s=this.componentStyle?.load(l,w({name:`${this.attrSelector}-${this.componentStyle?.name}`},this.styleOptions));this.scopedStyleEl=s?.el}_unloadScopedThemeStyles(){this.scopedStyleEl?.remove()}_themeChangeListener(e=()=>{}){l1.clearLoadedStyleNames(),V.on("theme:change",e),this.themeChangeListeners.push(e)}cx(e,l){let s=this.parent?this.parent.componentStyle?.classes?.[e]:this.componentStyle?.classes?.[e];return typeof s=="function"?s({instance:this}):typeof s=="string"?s:e}sx(e){let l=this.componentStyle?.inlineStyles?.[e];return typeof l=="function"?l({instance:this}):typeof l=="string"?l:w({},l)}get parent(){return this.parentInstance}static \u0275fac=function(l){return new(l||c)};static \u0275dir=B({type:c,inputs:{dt:"dt"},features:[t2([T6,F]),o2]})}return c})();var b4=(()=>{class c{static zindex=1e3;static calculatedScrollbarWidth=null;static calculatedScrollbarHeight=null;static browser;static addClass(e,l){e&&l&&(e.classList?e.classList.add(l):e.className+=" "+l)}static addMultipleClasses(e,l){if(e&&l)if(e.classList){let s=l.trim().split(" ");for(let n=0;n<s.length;n++)e.classList.add(s[n])}else{let s=l.split(" ");for(let n=0;n<s.length;n++)e.className+=" "+s[n]}}static removeClass(e,l){e&&l&&(e.classList?e.classList.remove(l):e.className=e.className.replace(new RegExp("(^|\\b)"+l.split(" ").join("|")+"(\\b|$)","gi")," "))}static removeMultipleClasses(e,l){e&&l&&[l].flat().filter(Boolean).forEach(s=>s.split(" ").forEach(n=>this.removeClass(e,n)))}static hasClass(e,l){return e&&l?e.classList?e.classList.contains(l):new RegExp("(^| )"+l+"( |$)","gi").test(e.className):!1}static siblings(e){return Array.prototype.filter.call(e.parentNode.children,function(l){return l!==e})}static find(e,l){return Array.from(e.querySelectorAll(l))}static findSingle(e,l){return this.isElement(e)?e.querySelector(l):null}static index(e){let l=e.parentNode.childNodes,s=0;for(var n=0;n<l.length;n++){if(l[n]==e)return s;l[n].nodeType==1&&s++}return-1}static indexWithinGroup(e,l){let s=e.parentNode?e.parentNode.childNodes:[],n=0;for(var a=0;a<s.length;a++){if(s[a]==e)return n;s[a].attributes&&s[a].attributes[l]&&s[a].nodeType==1&&n++}return-1}static appendOverlay(e,l,s="self"){s!=="self"&&e&&l&&this.appendChild(e,l)}static alignOverlay(e,l,s="self",n=!0){e&&l&&(n&&(e.style.minWidth=`${c.getOuterWidth(l)}px`),s==="self"?this.relativePosition(e,l):this.absolutePosition(e,l))}static relativePosition(e,l,s=!0){let n=C=>{if(C)return getComputedStyle(C).getPropertyValue("position")==="relative"?C:n(C.parentElement)},a=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),i=l.offsetHeight,o=l.getBoundingClientRect(),r=this.getWindowScrollTop(),f=this.getWindowScrollLeft(),u=this.getViewport(),d=n(e)?.getBoundingClientRect()||{top:-1*r,left:-1*f},z,h;o.top+i+a.height>u.height?(z=o.top-d.top-a.height,e.style.transformOrigin="bottom",o.top+z<0&&(z=-1*o.top)):(z=i+o.top-d.top,e.style.transformOrigin="top");let b=o.left+a.width-u.width,v=o.left-d.left;a.width>u.width?h=(o.left-d.left)*-1:b>0?h=v-b:h=o.left-d.left,e.style.top=z+"px",e.style.left=h+"px",s&&(e.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static absolutePosition(e,l,s=!0){let n=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),a=n.height,i=n.width,o=l.offsetHeight,r=l.offsetWidth,f=l.getBoundingClientRect(),u=this.getWindowScrollTop(),m=this.getWindowScrollLeft(),d=this.getViewport(),z,h;f.top+o+a>d.height?(z=f.top+u-a,e.style.transformOrigin="bottom",z<0&&(z=u)):(z=o+f.top+u,e.style.transformOrigin="top"),f.left+i>d.width?h=Math.max(0,f.left+m+r-i):h=f.left+m,e.style.top=z+"px",e.style.left=h+"px",s&&(e.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static getParents(e,l=[]){return e.parentNode===null?l:this.getParents(e.parentNode,l.concat([e.parentNode]))}static getScrollableParents(e){let l=[];if(e){let s=this.getParents(e),n=/(auto|scroll)/,a=i=>{let o=window.getComputedStyle(i,null);return n.test(o.getPropertyValue("overflow"))||n.test(o.getPropertyValue("overflowX"))||n.test(o.getPropertyValue("overflowY"))};for(let i of s){let o=i.nodeType===1&&i.dataset.scrollselectors;if(o){let r=o.split(",");for(let f of r){let u=this.findSingle(i,f);u&&a(u)&&l.push(u)}}i.nodeType!==9&&a(i)&&l.push(i)}}return l}static getHiddenElementOuterHeight(e){e.style.visibility="hidden",e.style.display="block";let l=e.offsetHeight;return e.style.display="none",e.style.visibility="visible",l}static getHiddenElementOuterWidth(e){e.style.visibility="hidden",e.style.display="block";let l=e.offsetWidth;return e.style.display="none",e.style.visibility="visible",l}static getHiddenElementDimensions(e){let l={};return e.style.visibility="hidden",e.style.display="block",l.width=e.offsetWidth,l.height=e.offsetHeight,e.style.display="none",e.style.visibility="visible",l}static scrollInView(e,l){let s=getComputedStyle(e).getPropertyValue("borderTopWidth"),n=s?parseFloat(s):0,a=getComputedStyle(e).getPropertyValue("paddingTop"),i=a?parseFloat(a):0,o=e.getBoundingClientRect(),f=l.getBoundingClientRect().top+document.body.scrollTop-(o.top+document.body.scrollTop)-n-i,u=e.scrollTop,m=e.clientHeight,d=this.getOuterHeight(l);f<0?e.scrollTop=u+f:f+d>m&&(e.scrollTop=u+f-m+d)}static fadeIn(e,l){e.style.opacity=0;let s=+new Date,n=0,a=function(){n=+e.style.opacity.replace(",",".")+(new Date().getTime()-s)/l,e.style.opacity=n,s=+new Date,+n<1&&(window.requestAnimationFrame&&requestAnimationFrame(a)||setTimeout(a,16))};a()}static fadeOut(e,l){var s=1,n=50,a=l,i=n/a;let o=setInterval(()=>{s=s-i,s<=0&&(s=0,clearInterval(o)),e.style.opacity=s},n)}static getWindowScrollTop(){let e=document.documentElement;return(window.pageYOffset||e.scrollTop)-(e.clientTop||0)}static getWindowScrollLeft(){let e=document.documentElement;return(window.pageXOffset||e.scrollLeft)-(e.clientLeft||0)}static matches(e,l){var s=Element.prototype,n=s.matches||s.webkitMatchesSelector||s.mozMatchesSelector||s.msMatchesSelector||function(a){return[].indexOf.call(document.querySelectorAll(a),this)!==-1};return n.call(e,l)}static getOuterWidth(e,l){let s=e.offsetWidth;if(l){let n=getComputedStyle(e);s+=parseFloat(n.marginLeft)+parseFloat(n.marginRight)}return s}static getHorizontalPadding(e){let l=getComputedStyle(e);return parseFloat(l.paddingLeft)+parseFloat(l.paddingRight)}static getHorizontalMargin(e){let l=getComputedStyle(e);return parseFloat(l.marginLeft)+parseFloat(l.marginRight)}static innerWidth(e){let l=e.offsetWidth,s=getComputedStyle(e);return l+=parseFloat(s.paddingLeft)+parseFloat(s.paddingRight),l}static width(e){let l=e.offsetWidth,s=getComputedStyle(e);return l-=parseFloat(s.paddingLeft)+parseFloat(s.paddingRight),l}static getInnerHeight(e){let l=e.offsetHeight,s=getComputedStyle(e);return l+=parseFloat(s.paddingTop)+parseFloat(s.paddingBottom),l}static getOuterHeight(e,l){let s=e.offsetHeight;if(l){let n=getComputedStyle(e);s+=parseFloat(n.marginTop)+parseFloat(n.marginBottom)}return s}static getHeight(e){let l=e.offsetHeight,s=getComputedStyle(e);return l-=parseFloat(s.paddingTop)+parseFloat(s.paddingBottom)+parseFloat(s.borderTopWidth)+parseFloat(s.borderBottomWidth),l}static getWidth(e){let l=e.offsetWidth,s=getComputedStyle(e);return l-=parseFloat(s.paddingLeft)+parseFloat(s.paddingRight)+parseFloat(s.borderLeftWidth)+parseFloat(s.borderRightWidth),l}static getViewport(){let e=window,l=document,s=l.documentElement,n=l.getElementsByTagName("body")[0],a=e.innerWidth||s.clientWidth||n.clientWidth,i=e.innerHeight||s.clientHeight||n.clientHeight;return{width:a,height:i}}static getOffset(e){var l=e.getBoundingClientRect();return{top:l.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:l.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static replaceElementWith(e,l){let s=e.parentNode;if(!s)throw"Can't replace element";return s.replaceChild(l,e)}static getUserAgent(){if(navigator&&this.isClient())return navigator.userAgent}static isIE(){var e=window.navigator.userAgent,l=e.indexOf("MSIE ");if(l>0)return!0;var s=e.indexOf("Trident/");if(s>0){var n=e.indexOf("rv:");return!0}var a=e.indexOf("Edge/");return a>0}static isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isAndroid(){return/(android)/i.test(navigator.userAgent)}static isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0}static appendChild(e,l){if(this.isElement(l))l.appendChild(e);else if(l&&l.el&&l.el.nativeElement)l.el.nativeElement.appendChild(e);else throw"Cannot append "+l+" to "+e}static removeChild(e,l){if(this.isElement(l))l.removeChild(e);else if(l.el&&l.el.nativeElement)l.el.nativeElement.removeChild(e);else throw"Cannot remove "+e+" from "+l}static removeElement(e){"remove"in Element.prototype?e.remove():e.parentNode.removeChild(e)}static isElement(e){return typeof HTMLElement=="object"?e instanceof HTMLElement:e&&typeof e=="object"&&e!==null&&e.nodeType===1&&typeof e.nodeName=="string"}static calculateScrollbarWidth(e){if(e){let l=getComputedStyle(e);return e.offsetWidth-e.clientWidth-parseFloat(l.borderLeftWidth)-parseFloat(l.borderRightWidth)}else{if(this.calculatedScrollbarWidth!==null)return this.calculatedScrollbarWidth;let l=document.createElement("div");l.className="p-scrollbar-measure",document.body.appendChild(l);let s=l.offsetWidth-l.clientWidth;return document.body.removeChild(l),this.calculatedScrollbarWidth=s,s}}static calculateScrollbarHeight(){if(this.calculatedScrollbarHeight!==null)return this.calculatedScrollbarHeight;let e=document.createElement("div");e.className="p-scrollbar-measure",document.body.appendChild(e);let l=e.offsetHeight-e.clientHeight;return document.body.removeChild(e),this.calculatedScrollbarWidth=l,l}static invokeElementMethod(e,l,s){e[l].apply(e,s)}static clearSelection(){if(window.getSelection)window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().rangeCount>0&&window.getSelection().getRangeAt(0).getClientRects().length>0&&window.getSelection().removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}}static getBrowser(){if(!this.browser){let e=this.resolveUserAgent();this.browser={},e.browser&&(this.browser[e.browser]=!0,this.browser.version=e.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}static resolveUserAgent(){let e=navigator.userAgent.toLowerCase(),l=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:l[1]||"",version:l[2]||"0"}}static isInteger(e){return Number.isInteger?Number.isInteger(e):typeof e=="number"&&isFinite(e)&&Math.floor(e)===e}static isHidden(e){return!e||e.offsetParent===null}static isVisible(e){return e&&e.offsetParent!=null}static isExist(e){return e!==null&&typeof e<"u"&&e.nodeName&&e.parentNode}static focus(e,l){e&&document.activeElement!==e&&e.focus(l)}static getFocusableSelectorString(e=""){return`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e}`}static getFocusableElements(e,l=""){let s=this.find(e,this.getFocusableSelectorString(l)),n=[];for(let a of s){let i=getComputedStyle(a);this.isVisible(a)&&i.display!="none"&&i.visibility!="hidden"&&n.push(a)}return n}static getFocusableElement(e,l=""){let s=this.findSingle(e,this.getFocusableSelectorString(l));if(s){let n=getComputedStyle(s);if(this.isVisible(s)&&n.display!="none"&&n.visibility!="hidden")return s}return null}static getFirstFocusableElement(e,l=""){let s=this.getFocusableElements(e,l);return s.length>0?s[0]:null}static getLastFocusableElement(e,l){let s=this.getFocusableElements(e,l);return s.length>0?s[s.length-1]:null}static getNextFocusableElement(e,l=!1){let s=c.getFocusableElements(e),n=0;if(s&&s.length>0){let a=s.indexOf(s[0].ownerDocument.activeElement);l?a==-1||a===0?n=s.length-1:n=a-1:a!=-1&&a!==s.length-1&&(n=a+1)}return s[n]}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}static getSelection(){return window.getSelection?window.getSelection().toString():document.getSelection?document.getSelection().toString():document.selection?document.selection.createRange().text:null}static getTargetElement(e,l){if(!e)return null;switch(e){case"document":return document;case"window":return window;case"@next":return l?.nextElementSibling;case"@prev":return l?.previousElementSibling;case"@parent":return l?.parentElement;case"@grandparent":return l?.parentElement.parentElement;default:let s=typeof e;if(s==="string")return document.querySelector(e);if(s==="object"&&e.hasOwnProperty("nativeElement"))return this.isExist(e.nativeElement)?e.nativeElement:void 0;let a=(i=>!!(i&&i.constructor&&i.call&&i.apply))(e)?e():e;return a&&a.nodeType===9||this.isExist(a)?a:null}}static isClient(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}static getAttribute(e,l){if(e){let s=e.getAttribute(l);return isNaN(s)?s==="true"||s==="false"?s==="true":s:+s}}static calculateBodyScrollbarWidth(){return window.innerWidth-document.documentElement.offsetWidth}static blockBodyScroll(e="p-overflow-hidden"){document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,e)}static unblockBodyScroll(e="p-overflow-hidden"){document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,e)}static createElement(e,l={},...s){if(e){let n=document.createElement(e);return this.setAttributes(n,l),n.append(...s),n}}static setAttribute(e,l="",s){this.isElement(e)&&s!==null&&s!==void 0&&e.setAttribute(l,s)}static setAttributes(e,l={}){if(this.isElement(e)){let s=(n,a)=>{let i=e?.$attrs?.[n]?[e?.$attrs?.[n]]:[];return[a].flat().reduce((o,r)=>{if(r!=null){let f=typeof r;if(f==="string"||f==="number")o.push(r);else if(f==="object"){let u=Array.isArray(r)?s(n,r):Object.entries(r).map(([m,d])=>n==="style"&&(d||d===0)?`${m.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${d}`:d?m:void 0);o=u.length?o.concat(u.filter(m=>!!m)):o}}return o},i)};Object.entries(l).forEach(([n,a])=>{if(a!=null){let i=n.match(/^on(.+)/);i?e.addEventListener(i[1].toLowerCase(),a):n==="pBind"?this.setAttributes(e,a):(a=n==="class"?[...new Set(s("class",a))].join(" ").trim():n==="style"?s("style",a).join(";").trim():a,(e.$attrs=e.$attrs||{})&&(e.$attrs[n]=a),e.setAttribute(n,a))}})}}static isFocusableElement(e,l=""){return this.isElement(e)?e.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${l},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${l},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${l},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${l},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${l},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${l},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${l}`):!1}}return c})(),E6=class{element;listener;scrollableParents;constructor(t,e=()=>{}){this.element=t,this.listener=e}bindScrollListener(){this.scrollableParents=b4.getScrollableParents(this.element);for(let t=0;t<this.scrollableParents.length;t++)this.scrollableParents[t].addEventListener("scroll",this.listener)}unbindScrollListener(){if(this.scrollableParents)for(let t=0;t<this.scrollableParents.length;t++)this.scrollableParents[t].removeEventListener("scroll",this.listener)}destroy(){this.unbindScrollListener(),this.element=null,this.listener=null,this.scrollableParents=null}};var P6=(()=>{class c extends i2{autofocus=!1;_autofocus=!1;focused=!1;platformId=g(j2);document=g(s2);host=g(E2);ngAfterContentChecked(){this.autofocus===!1?this.host.nativeElement.removeAttribute("autofocus"):this.host.nativeElement.setAttribute("autofocus",!0),this.focused||this.autoFocus()}ngAfterViewChecked(){this.focused||this.autoFocus()}autoFocus(){V1(this.platformId)&&this._autofocus&&setTimeout(()=>{let e=b4.getFocusableElements(this.host?.nativeElement);e.length===0&&this.host.nativeElement.focus(),e.length>0&&e[0].focus(),this.focused=!0})}static \u0275fac=(()=>{let e;return function(s){return(e||(e=N(c)))(s||c)}})();static \u0275dir=B({type:c,selectors:[["","pAutoFocus",""]],inputs:{autofocus:[2,"autofocus","autofocus",E],_autofocus:[0,"pAutoFocus","_autofocus"]},features:[D]})}return c})();var Y7=({dt:c})=>`
.p-badge {
    display: inline-flex;
    border-radius: ${c("badge.border.radius")};
    justify-content: center;
    padding: ${c("badge.padding")};
    background: ${c("badge.primary.background")};
    color: ${c("badge.primary.color")};
    font-size: ${c("badge.font.size")};
    font-weight: ${c("badge.font.weight")};
    min-width: ${c("badge.min.width")};
    height: ${c("badge.height")};
    line-height: ${c("badge.height")};
}

.p-badge-dot {
    width: ${c("badge.dot.size")};
    min-width: ${c("badge.dot.size")};
    height: ${c("badge.dot.size")};
    border-radius: 50%;
    padding: 0;
}

.p-badge-circle {
    padding: 0;
    border-radius: 50%;
}

.p-badge-secondary {
    background: ${c("badge.secondary.background")};
    color: ${c("badge.secondary.color")};
}

.p-badge-success {
    background: ${c("badge.success.background")};
    color: ${c("badge.success.color")};
}

.p-badge-info {
    background: ${c("badge.info.background")};
    color: ${c("badge.info.color")};
}

.p-badge-warn {
    background: ${c("badge.warn.background")};
    color: ${c("badge.warn.color")};
}

.p-badge-danger {
    background: ${c("badge.danger.background")};
    color: ${c("badge.danger.color")};
}

.p-badge-contrast {
    background: ${c("badge.contrast.background")};
    color: ${c("badge.contrast.color")};
}

.p-badge-sm {
    font-size: ${c("badge.sm.font.size")};
    min-width: ${c("badge.sm.min.width")};
    height: ${c("badge.sm.height")};
    line-height: ${c("badge.sm.height")};
}

.p-badge-lg {
    font-size: ${c("badge.lg.font.size")};
    min-width: ${c("badge.lg.min.width")};
    height: ${c("badge.lg.height")};
    line-height: ${c("badge.lg.height")};
}

.p-badge-xl {
    font-size: ${c("badge.xl.font.size")};
    min-width: ${c("badge.xl.min.width")};
    height: ${c("badge.xl.height")};
    line-height: ${c("badge.xl.height")};
}

/* For PrimeNG (directive)*/

.p-overlay-badge {
    position: relative;
}

.p-overlay-badge > .p-badge {
    position: absolute;
    top: 0;
    inset-inline-end: 0;
    transform: translate(50%, -50%);
    transform-origin: 100% 0;
    margin: 0;
}
`,X7={root:({props:c,instance:t})=>["p-badge p-component",{"p-badge-circle":x(c.value)&&String(c.value).length===1,"p-badge-dot":X(c.value)&&!t.$slots.default,"p-badge-sm":c.size==="small","p-badge-lg":c.size==="large","p-badge-xl":c.size==="xlarge","p-badge-info":c.severity==="info","p-badge-success":c.severity==="success","p-badge-warn":c.severity==="warn","p-badge-danger":c.severity==="danger","p-badge-secondary":c.severity==="secondary","p-badge-contrast":c.severity==="contrast"}]},_6=(()=>{class c extends F{name="badge";theme=Y7;classes=X7;static \u0275fac=(()=>{let e;return function(s){return(e||(e=N(c)))(s||c)}})();static \u0275prov=M({token:c,factory:c.\u0275fac})}return c})();var x4=(()=>{class c extends i2{styleClass=M2();style=M2();badgeSize=M2();size=M2();severity=M2();value=M2();badgeDisabled=M2(!1,{transform:E});_componentStyle=g(_6);containerClass=f1(()=>{let e="p-badge p-component";return x(this.value())&&String(this.value()).length===1&&(e+=" p-badge-circle"),this.badgeSize()==="large"?e+=" p-badge-lg":this.badgeSize()==="xlarge"?e+=" p-badge-xl":this.badgeSize()==="small"&&(e+=" p-badge-sm"),X(this.value())&&(e+=" p-badge-dot"),this.styleClass()&&(e+=` ${this.styleClass()}`),this.severity()&&(e+=` p-badge-${this.severity()}`),e});static \u0275fac=(()=>{let e;return function(s){return(e||(e=N(c)))(s||c)}})();static \u0275cmp=I({type:c,selectors:[["p-badge"]],hostVars:6,hostBindings:function(l,s){l&2&&(D4(s.style()),g2(s.containerClass()),O4("display",s.badgeDisabled()?"none":null))},inputs:{styleClass:[1,"styleClass"],style:[1,"style"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},features:[t2([_6]),D],decls:1,vars:1,template:function(l,s){l&1&&W1(0),l&2&&U1(s.value())},dependencies:[_2,N2],encapsulation:2,changeDetection:0})}return c})(),I6=(()=>{class c{static \u0275fac=function(l){return new(l||c)};static \u0275mod=K({type:c});static \u0275inj=q({imports:[x4,N2,N2]})}return c})();var Z7=["*"],J7=`
.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,cc=(()=>{class c extends F{name="baseicon";inlineStyles=J7;static \u0275fac=(()=>{let e;return function(s){return(e||(e=N(c)))(s||c)}})();static \u0275prov=M({token:c,factory:c.\u0275fac})}return c})();var L3=(()=>{class c extends i2{label;spin=!1;styleClass;role;ariaLabel;ariaHidden;ngOnInit(){super.ngOnInit(),this.getAttributes()}getAttributes(){let e=X(this.label);this.role=e?void 0:"img",this.ariaLabel=e?void 0:this.label,this.ariaHidden=e}getClassNames(){return`p-icon ${this.styleClass?this.styleClass+" ":""}${this.spin?"p-icon-spin":""}`}static \u0275fac=(()=>{let e;return function(s){return(e||(e=N(c)))(s||c)}})();static \u0275cmp=I({type:c,selectors:[["ng-component"]],hostAttrs:[1,"p-component","p-iconwrapper"],inputs:{label:"label",spin:[2,"spin","spin",E],styleClass:"styleClass"},features:[t2([cc]),D],ngContentSelectors:Z7,decls:1,vars:0,template:function(l,s){l&1&&(f2(),m2(0))},encapsulation:2,changeDetection:0})}return c})();var Pl=(()=>{class c extends L3{static \u0275fac=(()=>{let e;return function(s){return(e||(e=N(c)))(s||c)}})();static \u0275cmp=I({type:c,selectors:[["ChevronDownIcon"]],features:[D],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M7.01744 10.398C6.91269 10.3985 6.8089 10.378 6.71215 10.3379C6.61541 10.2977 6.52766 10.2386 6.45405 10.1641L1.13907 4.84913C1.03306 4.69404 0.985221 4.5065 1.00399 4.31958C1.02276 4.13266 1.10693 3.95838 1.24166 3.82747C1.37639 3.69655 1.55301 3.61742 1.74039 3.60402C1.92777 3.59062 2.11386 3.64382 2.26584 3.75424L7.01744 8.47394L11.769 3.75424C11.9189 3.65709 12.097 3.61306 12.2748 3.62921C12.4527 3.64535 12.6199 3.72073 12.7498 3.84328C12.8797 3.96582 12.9647 4.12842 12.9912 4.30502C13.0177 4.48162 12.9841 4.662 12.8958 4.81724L7.58083 10.1322C7.50996 10.2125 7.42344 10.2775 7.32656 10.3232C7.22968 10.3689 7.12449 10.3944 7.01744 10.398Z","fill","currentColor"]],template:function(l,s){l&1&&(F1(),C2(0,"svg",0),l2(1,"path",1),b2()),l&2&&(g2(s.getClassNames()),H("aria-label",s.ariaLabel)("aria-hidden",s.ariaHidden)("role",s.role))},encapsulation:2})}return c})();var O6=(()=>{class c extends L3{pathId;ngOnInit(){this.pathId="url(#"+z1()+")"}static \u0275fac=(()=>{let e;return function(s){return(e||(e=N(c)))(s||c)}})();static \u0275cmp=I({type:c,selectors:[["SpinnerIcon"]],features:[D],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(l,s){l&1&&(F1(),C2(0,"svg",0)(1,"g"),l2(2,"path",1),b2(),C2(3,"defs")(4,"clipPath",2),l2(5,"rect",3),b2()()()),l&2&&(g2(s.getClassNames()),H("aria-label",s.ariaLabel)("aria-hidden",s.ariaHidden)("role",s.role),_(),H("clip-path",s.pathId),_(3),A("id",s.pathId))},encapsulation:2})}return c})();var ec=({dt:c})=>`
/* For PrimeNG */
.p-ripple {
    overflow: hidden;
    position: relative;
}

.p-ink {
    display: block;
    position: absolute;
    background: ${c("ripple.background")};
    border-radius: 100%;
    transform: scale(0);
}

.p-ink-active {
    animation: ripple 0.4s linear;
}

.p-ripple-disabled .p-ink {
    display: none !important;
}

@keyframes ripple {
    100% {
        opacity: 0;
        transform: scale(2.5);
    }
}
`,lc={root:"p-ink"},D6=(()=>{class c extends F{name="ripple";theme=ec;classes=lc;static \u0275fac=(()=>{let e;return function(s){return(e||(e=N(c)))(s||c)}})();static \u0275prov=M({token:c,factory:c.\u0275fac})}return c})();var R6=(()=>{class c extends i2{zone=g(T4);_componentStyle=g(D6);animationListener;mouseDownListener;timeout;constructor(){super(),m1(()=>{V1(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}ngAfterViewInit(){super.ngAfterViewInit()}onMouseDown(e){let l=this.getInk();if(!l||this.document.defaultView?.getComputedStyle(l,null).display==="none")return;if(R2(l,"p-ink-active"),!P3(l)&&!I3(l)){let i=Math.max(Q4(this.el.nativeElement),_3(this.el.nativeElement));l.style.height=i+"px",l.style.width=i+"px"}let s=c0(this.el.nativeElement),n=e.pageX-s.left+this.document.body.scrollTop-I3(l)/2,a=e.pageY-s.top+this.document.body.scrollLeft-P3(l)/2;this.renderer.setStyle(l,"top",a+"px"),this.renderer.setStyle(l,"left",n+"px"),d1(l,"p-ink-active"),this.timeout=setTimeout(()=>{let i=this.getInk();i&&R2(i,"p-ink-active")},401)}getInk(){let e=this.el.nativeElement.children;for(let l=0;l<e.length;l++)if(typeof e[l].className=="string"&&e[l].className.indexOf("p-ink")!==-1)return e[l];return null}resetInk(){let e=this.getInk();e&&R2(e,"p-ink-active")}onAnimationEnd(e){this.timeout&&clearTimeout(this.timeout),R2(e.currentTarget,"p-ink-active")}create(){let e=this.renderer.createElement("span");this.renderer.addClass(e,"p-ink"),this.renderer.appendChild(this.el.nativeElement,e),this.renderer.setAttribute(e,"aria-hidden","true"),this.renderer.setAttribute(e,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(e,"animationend",this.onAnimationEnd.bind(this)))}remove(){let e=this.getInk();e&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,e0(e))}ngOnDestroy(){this.config&&this.config.ripple()&&this.remove(),super.ngOnDestroy()}static \u0275fac=function(l){return new(l||c)};static \u0275dir=B({type:c,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],features:[t2([D6]),D]})}return c})();var tc=["content"],sc=["loadingicon"],nc=["icon"],ac=["*"],$6=c=>({class:c});function ic(c,t){c&1&&R4(0)}function oc(c,t){if(c&1&&l2(0,"span",8),c&2){let e=Z(3);A("ngClass",e.iconClass()),H("aria-hidden",!0)("data-pc-section","loadingicon")}}function rc(c,t){if(c&1&&l2(0,"SpinnerIcon",9),c&2){let e=Z(3);A("styleClass",e.spinnerIconClass())("spin",!0),H("aria-hidden",!0)("data-pc-section","loadingicon")}}function fc(c,t){if(c&1&&(B1(0),P2(1,oc,1,3,"span",6)(2,rc,1,4,"SpinnerIcon",7),H1()),c&2){let e=Z(2);_(),A("ngIf",e.loadingIcon),_(),A("ngIf",!e.loadingIcon)}}function mc(c,t){}function uc(c,t){if(c&1&&P2(0,mc,0,0,"ng-template",10),c&2){let e=Z(2);A("ngIf",e.loadingIconTemplate||e._loadingIconTemplate)}}function pc(c,t){if(c&1&&(B1(0),P2(1,fc,3,2,"ng-container",2)(2,uc,1,1,null,5),H1()),c&2){let e=Z();_(),A("ngIf",!e.loadingIconTemplate&&!e._loadingIconTemplate),_(),A("ngTemplateOutlet",e.loadingIconTemplate||e._loadingIconTemplate)("ngTemplateOutletContext",b3(3,$6,e.iconClass()))}}function dc(c,t){if(c&1&&l2(0,"span",8),c&2){let e=Z(2);g2(e.icon),A("ngClass",e.iconClass()),H("data-pc-section","icon")}}function Lc(c,t){}function zc(c,t){if(c&1&&P2(0,Lc,0,0,"ng-template",10),c&2){let e=Z(2);A("ngIf",!e.icon&&(e.iconTemplate||e._iconTemplate))}}function hc(c,t){if(c&1&&(B1(0),P2(1,dc,1,4,"span",11)(2,zc,1,1,null,5),H1()),c&2){let e=Z();_(),A("ngIf",e.icon&&!e.iconTemplate&&!e._iconTemplate),_(),A("ngTemplateOutlet",e.iconTemplate||e._iconTemplate)("ngTemplateOutletContext",b3(3,$6,e.iconClass()))}}function Mc(c,t){if(c&1&&(C2(0,"span",12),W1(1),b2()),c&2){let e=Z();H("aria-hidden",e.icon&&!e.label)("data-pc-section","label"),_(),U1(e.label)}}function gc(c,t){if(c&1&&l2(0,"p-badge",13),c&2){let e=Z();A("value",e.badge)("severity",e.badgeSeverity)}}var Cc=({dt:c})=>`
.p-button {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    color: ${c("button.primary.color")};
    background: ${c("button.primary.background")};
    border: 1px solid ${c("button.primary.border.color")};
    padding-block: ${c("button.padding.y")};
    padding-inline: ${c("button.padding.x")};
    font-size: 1rem;
    font-family: inherit;
    font-feature-settings: inherit;
    transition: background ${c("button.transition.duration")}, color ${c("button.transition.duration")}, border-color ${c("button.transition.duration")},
            outline-color ${c("button.transition.duration")}, box-shadow ${c("button.transition.duration")};
    border-radius: ${c("button.border.radius")};
    outline-color: transparent;
    gap: ${c("button.gap")};
}

.p-button-icon,
.p-button-icon:before,
.p-button-icon:after {
    line-height: inherit;
}

.p-button:disabled {
    cursor: default;
}

.p-button-icon-right {
    order: 1;
}

.p-button-icon-right:dir(rtl) {
    order: -1;
}

.p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
    order: 1;
}

.p-button-icon-bottom {
    order: 2;
}

.p-button-icon-only {
    width: ${c("button.icon.only.width")};
    padding-inline-start: 0;
    padding-inline-end: 0;
    gap: 0;
}

.p-button-icon-only.p-button-rounded {
    border-radius: 50%;
    height: ${c("button.icon.only.width")};
}

.p-button-icon-only .p-button-label {
    visibility: hidden;
    width: 0;
}

.p-button-sm {
    font-size: ${c("button.sm.font.size")};
    padding-block: ${c("button.sm.padding.y")};
    padding-inline: ${c("button.sm.padding.x")};
}

.p-button-sm .p-button-icon {
    font-size: ${c("button.sm.font.size")};
}

.p-button-sm.p-button-icon-only {
    width: ${c("button.sm.icon.only.width")};
}

.p-button-sm.p-button-icon-only.p-button-rounded {
    height: ${c("button.sm.icon.only.width")};
}

.p-button-lg {
    font-size: ${c("button.lg.font.size")};
    padding-block: ${c("button.lg.padding.y")};
    padding-inline: ${c("button.lg.padding.x")};
}

.p-button-lg .p-button-icon {
    font-size: ${c("button.lg.font.size")};
}

.p-button-lg.p-button-icon-only {
    width: ${c("button.lg.icon.only.width")};
}

.p-button-lg.p-button-icon-only.p-button-rounded {
    height: ${c("button.lg.icon.only.width")};
}

.p-button-vertical {
    flex-direction: column;
}

.p-button-label {
    font-weight: ${c("button.label.font.weight")};
}

.p-button-fluid {
    width: 100%;
}

.p-button-fluid.p-button-icon-only {
    width: ${c("button.icon.only.width")};
}

.p-button:not(:disabled):hover {
    background: ${c("button.primary.hover.background")};
    border: 1px solid ${c("button.primary.hover.border.color")};
    color: ${c("button.primary.hover.color")};
}

.p-button:not(:disabled):active {
    background: ${c("button.primary.active.background")};
    border: 1px solid ${c("button.primary.active.border.color")};
    color: ${c("button.primary.active.color")};
}

.p-button:focus-visible {
    box-shadow: ${c("button.primary.focus.ring.shadow")};
    outline: ${c("button.focus.ring.width")} ${c("button.focus.ring.style")} ${c("button.primary.focus.ring.color")};
    outline-offset: ${c("button.focus.ring.offset")};
}

.p-button .p-badge {
    min-width: ${c("button.badge.size")};
    height: ${c("button.badge.size")};
    line-height: ${c("button.badge.size")};
}

.p-button-raised {
    box-shadow: ${c("button.raised.shadow")};
}

.p-button-rounded {
    border-radius: ${c("button.rounded.border.radius")};
}

.p-button-secondary {
    background: ${c("button.secondary.background")};
    border: 1px solid ${c("button.secondary.border.color")};
    color: ${c("button.secondary.color")};
}

.p-button-secondary:not(:disabled):hover {
    background: ${c("button.secondary.hover.background")};
    border: 1px solid ${c("button.secondary.hover.border.color")};
    color: ${c("button.secondary.hover.color")};
}

.p-button-secondary:not(:disabled):active {
    background: ${c("button.secondary.active.background")};
    border: 1px solid ${c("button.secondary.active.border.color")};
    color: ${c("button.secondary.active.color")};
}

.p-button-secondary:focus-visible {
    outline-color: ${c("button.secondary.focus.ring.color")};
    box-shadow: ${c("button.secondary.focus.ring.shadow")};
}

.p-button-success {
    background: ${c("button.success.background")};
    border: 1px solid ${c("button.success.border.color")};
    color: ${c("button.success.color")};
}

.p-button-success:not(:disabled):hover {
    background: ${c("button.success.hover.background")};
    border: 1px solid ${c("button.success.hover.border.color")};
    color: ${c("button.success.hover.color")};
}

.p-button-success:not(:disabled):active {
    background: ${c("button.success.active.background")};
    border: 1px solid ${c("button.success.active.border.color")};
    color: ${c("button.success.active.color")};
}

.p-button-success:focus-visible {
    outline-color: ${c("button.success.focus.ring.color")};
    box-shadow: ${c("button.success.focus.ring.shadow")};
}

.p-button-info {
    background: ${c("button.info.background")};
    border: 1px solid ${c("button.info.border.color")};
    color: ${c("button.info.color")};
}

.p-button-info:not(:disabled):hover {
    background: ${c("button.info.hover.background")};
    border: 1px solid ${c("button.info.hover.border.color")};
    color: ${c("button.info.hover.color")};
}

.p-button-info:not(:disabled):active {
    background: ${c("button.info.active.background")};
    border: 1px solid ${c("button.info.active.border.color")};
    color: ${c("button.info.active.color")};
}

.p-button-info:focus-visible {
    outline-color: ${c("button.info.focus.ring.color")};
    box-shadow: ${c("button.info.focus.ring.shadow")};
}

.p-button-warn {
    background: ${c("button.warn.background")};
    border: 1px solid ${c("button.warn.border.color")};
    color: ${c("button.warn.color")};
}

.p-button-warn:not(:disabled):hover {
    background: ${c("button.warn.hover.background")};
    border: 1px solid ${c("button.warn.hover.border.color")};
    color: ${c("button.warn.hover.color")};
}

.p-button-warn:not(:disabled):active {
    background: ${c("button.warn.active.background")};
    border: 1px solid ${c("button.warn.active.border.color")};
    color: ${c("button.warn.active.color")};
}

.p-button-warn:focus-visible {
    outline-color: ${c("button.warn.focus.ring.color")};
    box-shadow: ${c("button.warn.focus.ring.shadow")};
}

.p-button-help {
    background: ${c("button.help.background")};
    border: 1px solid ${c("button.help.border.color")};
    color: ${c("button.help.color")};
}

.p-button-help:not(:disabled):hover {
    background: ${c("button.help.hover.background")};
    border: 1px solid ${c("button.help.hover.border.color")};
    color: ${c("button.help.hover.color")};
}

.p-button-help:not(:disabled):active {
    background: ${c("button.help.active.background")};
    border: 1px solid ${c("button.help.active.border.color")};
    color: ${c("button.help.active.color")};
}

.p-button-help:focus-visible {
    outline-color: ${c("button.help.focus.ring.color")};
    box-shadow: ${c("button.help.focus.ring.shadow")};
}

.p-button-danger {
    background: ${c("button.danger.background")};
    border: 1px solid ${c("button.danger.border.color")};
    color: ${c("button.danger.color")};
}

.p-button-danger:not(:disabled):hover {
    background: ${c("button.danger.hover.background")};
    border: 1px solid ${c("button.danger.hover.border.color")};
    color: ${c("button.danger.hover.color")};
}

.p-button-danger:not(:disabled):active {
    background: ${c("button.danger.active.background")};
    border: 1px solid ${c("button.danger.active.border.color")};
    color: ${c("button.danger.active.color")};
}

.p-button-danger:focus-visible {
    outline-color: ${c("button.danger.focus.ring.color")};
    box-shadow: ${c("button.danger.focus.ring.shadow")};
}

.p-button-contrast {
    background: ${c("button.contrast.background")};
    border: 1px solid ${c("button.contrast.border.color")};
    color: ${c("button.contrast.color")};
}

.p-button-contrast:not(:disabled):hover {
    background: ${c("button.contrast.hover.background")};
    border: 1px solid ${c("button.contrast.hover.border.color")};
    color: ${c("button.contrast.hover.color")};
}

.p-button-contrast:not(:disabled):active {
    background: ${c("button.contrast.active.background")};
    border: 1px solid ${c("button.contrast.active.border.color")};
    color: ${c("button.contrast.active.color")};
}

.p-button-contrast:focus-visible {
    outline-color: ${c("button.contrast.focus.ring.color")};
    box-shadow: ${c("button.contrast.focus.ring.shadow")};
}

.p-button-outlined {
    background: transparent;
    border-color: ${c("button.outlined.primary.border.color")};
    color: ${c("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):hover {
    background: ${c("button.outlined.primary.hover.background")};
    border-color: ${c("button.outlined.primary.border.color")};
    color: ${c("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):active {
    background: ${c("button.outlined.primary.active.background")};
    border-color: ${c("button.outlined.primary.border.color")};
    color: ${c("button.outlined.primary.color")};
}

.p-button-outlined.p-button-secondary {
    border-color: ${c("button.outlined.secondary.border.color")};
    color: ${c("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):hover {
    background: ${c("button.outlined.secondary.hover.background")};
    border-color: ${c("button.outlined.secondary.border.color")};
    color: ${c("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):active {
    background: ${c("button.outlined.secondary.active.background")};
    border-color: ${c("button.outlined.secondary.border.color")};
    color: ${c("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-success {
    border-color: ${c("button.outlined.success.border.color")};
    color: ${c("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):hover {
    background: ${c("button.outlined.success.hover.background")};
    border-color: ${c("button.outlined.success.border.color")};
    color: ${c("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):active {
    background: ${c("button.outlined.success.active.background")};
    border-color: ${c("button.outlined.success.border.color")};
    color: ${c("button.outlined.success.color")};
}

.p-button-outlined.p-button-info {
    border-color: ${c("button.outlined.info.border.color")};
    color: ${c("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):hover {
    background: ${c("button.outlined.info.hover.background")};
    border-color: ${c("button.outlined.info.border.color")};
    color: ${c("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):active {
    background: ${c("button.outlined.info.active.background")};
    border-color: ${c("button.outlined.info.border.color")};
    color: ${c("button.outlined.info.color")};
}

.p-button-outlined.p-button-warn {
    border-color: ${c("button.outlined.warn.border.color")};
    color: ${c("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):hover {
    background: ${c("button.outlined.warn.hover.background")};
    border-color: ${c("button.outlined.warn.border.color")};
    color: ${c("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):active {
    background: ${c("button.outlined.warn.active.background")};
    border-color: ${c("button.outlined.warn.border.color")};
    color: ${c("button.outlined.warn.color")};
}

.p-button-outlined.p-button-help {
    border-color: ${c("button.outlined.help.border.color")};
    color: ${c("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):hover {
    background: ${c("button.outlined.help.hover.background")};
    border-color: ${c("button.outlined.help.border.color")};
    color: ${c("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):active {
    background: ${c("button.outlined.help.active.background")};
    border-color: ${c("button.outlined.help.border.color")};
    color: ${c("button.outlined.help.color")};
}

.p-button-outlined.p-button-danger {
    border-color: ${c("button.outlined.danger.border.color")};
    color: ${c("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):hover {
    background: ${c("button.outlined.danger.hover.background")};
    border-color: ${c("button.outlined.danger.border.color")};
    color: ${c("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):active {
    background: ${c("button.outlined.danger.active.background")};
    border-color: ${c("button.outlined.danger.border.color")};
    color: ${c("button.outlined.danger.color")};
}

.p-button-outlined.p-button-contrast {
    border-color: ${c("button.outlined.contrast.border.color")};
    color: ${c("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):hover {
    background: ${c("button.outlined.contrast.hover.background")};
    border-color: ${c("button.outlined.contrast.border.color")};
    color: ${c("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):active {
    background: ${c("button.outlined.contrast.active.background")};
    border-color: ${c("button.outlined.contrast.border.color")};
    color: ${c("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-plain {
    border-color: ${c("button.outlined.plain.border.color")};
    color: ${c("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):hover {
    background: ${c("button.outlined.plain.hover.background")};
    border-color: ${c("button.outlined.plain.border.color")};
    color: ${c("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):active {
    background: ${c("button.outlined.plain.active.background")};
    border-color: ${c("button.outlined.plain.border.color")};
    color: ${c("button.outlined.plain.color")};
}

.p-button-text {
    background: transparent;
    border-color: transparent;
    color: ${c("button.text.primary.color")};
}

.p-button-text:not(:disabled):hover {
    background: ${c("button.text.primary.hover.background")};
    border-color: transparent;
    color: ${c("button.text.primary.color")};
}

.p-button-text:not(:disabled):active {
    background: ${c("button.text.primary.active.background")};
    border-color: transparent;
    color: ${c("button.text.primary.color")};
}

.p-button-text.p-button-secondary {
    background: transparent;
    border-color: transparent;
    color: ${c("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):hover {
    background: ${c("button.text.secondary.hover.background")};
    border-color: transparent;
    color: ${c("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):active {
    background: ${c("button.text.secondary.active.background")};
    border-color: transparent;
    color: ${c("button.text.secondary.color")};
}

.p-button-text.p-button-success {
    background: transparent;
    border-color: transparent;
    color: ${c("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):hover {
    background: ${c("button.text.success.hover.background")};
    border-color: transparent;
    color: ${c("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):active {
    background: ${c("button.text.success.active.background")};
    border-color: transparent;
    color: ${c("button.text.success.color")};
}

.p-button-text.p-button-info {
    background: transparent;
    border-color: transparent;
    color: ${c("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):hover {
    background: ${c("button.text.info.hover.background")};
    border-color: transparent;
    color: ${c("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):active {
    background: ${c("button.text.info.active.background")};
    border-color: transparent;
    color: ${c("button.text.info.color")};
}

.p-button-text.p-button-warn {
    background: transparent;
    border-color: transparent;
    color: ${c("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):hover {
    background: ${c("button.text.warn.hover.background")};
    border-color: transparent;
    color: ${c("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):active {
    background: ${c("button.text.warn.active.background")};
    border-color: transparent;
    color: ${c("button.text.warn.color")};
}

.p-button-text.p-button-help {
    background: transparent;
    border-color: transparent;
    color: ${c("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):hover {
    background: ${c("button.text.help.hover.background")};
    border-color: transparent;
    color: ${c("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):active {
    background: ${c("button.text.help.active.background")};
    border-color: transparent;
    color: ${c("button.text.help.color")};
}

.p-button-text.p-button-danger {
    background: transparent;
    border-color: transparent;
    color: ${c("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):hover {
    background: ${c("button.text.danger.hover.background")};
    border-color: transparent;
    color: ${c("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):active {
    background: ${c("button.text.danger.active.background")};
    border-color: transparent;
    color: ${c("button.text.danger.color")};
}

.p-button-text.p-button-plain {
    background: transparent;
    border-color: transparent;
    color: ${c("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):hover {
    background: ${c("button.text.plain.hover.background")};
    border-color: transparent;
    color: ${c("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):active {
    background: ${c("button.text.plain.active.background")};
    border-color: transparent;
    color: ${c("button.text.plain.color")};
}

.p-button-text.p-button-contrast {
    background: transparent;
    border-color: transparent;
    color: ${c("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):hover {
    background: ${c("button.text.contrast.hover.background")};
    border-color: transparent;
    color: ${c("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):active {
    background: ${c("button.text.contrast.active.background")};
    border-color: transparent;
    color: ${c("button.text.contrast.color")};
}

.p-button-link {
    background: transparent;
    border-color: transparent;
    color: ${c("button.link.color")};
}

.p-button-link:not(:disabled):hover {
    background: transparent;
    border-color: transparent;
    color: ${c("button.link.hover.color")};
}

.p-button-link:not(:disabled):hover .p-button-label {
    text-decoration: underline;
}

.p-button-link:not(:disabled):active {
    background: transparent;
    border-color: transparent;
    color: ${c("button.link.active.color")};
}

/* For PrimeNG */
.p-button-icon-right {
    order: 1;
}

p-button[iconpos='right'] spinnericon {
    order: 1;
}
`,bc={root:({instance:c,props:t})=>["p-button p-component",{"p-button-icon-only":c.hasIcon&&!t.label&&!t.badge,"p-button-vertical":(t.iconPos==="top"||t.iconPos==="bottom")&&t.label,"p-button-loading":t.loading,"p-button-link":t.link,[`p-button-${t.severity}`]:t.severity,"p-button-raised":t.raised,"p-button-rounded":t.rounded,"p-button-text":t.text,"p-button-outlined":t.outlined,"p-button-sm":t.size==="small","p-button-lg":t.size==="large","p-button-plain":t.plain,"p-button-fluid":t.fluid}],loadingIcon:"p-button-loading-icon",icon:({props:c})=>["p-button-icon",{[`p-button-icon-${c.iconPos}`]:c.label}],label:"p-button-label"},F6=(()=>{class c extends F{name="button";theme=Cc;classes=bc;static \u0275fac=(()=>{let e;return function(s){return(e||(e=N(c)))(s||c)}})();static \u0275prov=M({token:c,factory:c.\u0275fac})}return c})();var xc=(()=>{class c extends i2{type="button";iconPos="left";icon;badge;label;disabled;loading=!1;loadingIcon;raised=!1;rounded=!1;text=!1;plain=!1;severity;outlined=!1;link=!1;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity="secondary";ariaLabel;autofocus;fluid;onClick=new h2;onFocus=new h2;onBlur=new h2;contentTemplate;loadingIconTemplate;iconTemplate;_buttonProps;get buttonProps(){return this._buttonProps}set buttonProps(e){this._buttonProps=e,e&&typeof e=="object"&&Object.entries(e).forEach(([l,s])=>this[`_${l}`]!==s&&(this[`_${l}`]=s))}get hasFluid(){let l=this.el.nativeElement.closest("p-fluid");return X(this.fluid)?!!l:this.fluid}_componentStyle=g(F6);templates;_contentTemplate;_iconTemplate;_loadingIconTemplate;ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;case"icon":this._iconTemplate=e.template;break;case"loadingicon":this._loadingIconTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}ngOnChanges(e){super.ngOnChanges(e);let{buttonProps:l}=e;if(l){let s=l.currentValue;for(let n in s)this[n]=s[n]}}spinnerIconClass(){return Object.entries(this.iconClass()).filter(([,e])=>!!e).reduce((e,[l])=>e+` ${l}`,"p-button-loading-icon")}iconClass(){return{[`p-button-loading-icon pi-spin ${this.loadingIcon??""}`]:this.loading,"p-button-icon":!0,"p-button-icon-left":this.iconPos==="left"&&this.label,"p-button-icon-right":this.iconPos==="right"&&this.label,"p-button-icon-top":this.iconPos==="top"&&this.label,"p-button-icon-bottom":this.iconPos==="bottom"&&this.label}}get buttonClass(){return{"p-button p-component":!0,"p-button-icon-only":(this.icon||this.iconTemplate||this._iconTemplate||this.loadingIcon||this.loadingIconTemplate||this._loadingIconTemplate)&&!this.label,"p-button-vertical":(this.iconPos==="top"||this.iconPos==="bottom")&&this.label,"p-button-loading":this.loading,"p-button-loading-label-only":this.loading&&!this.icon&&this.label&&!this.loadingIcon&&this.iconPos==="left","p-button-link":this.link,[`p-button-${this.severity}`]:this.severity,"p-button-raised":this.raised,"p-button-rounded":this.rounded,"p-button-text":this.text||this.variant=="text","p-button-outlined":this.outlined||this.variant=="outlined","p-button-sm":this.size==="small","p-button-lg":this.size==="large","p-button-plain":this.plain,"p-button-fluid":this.hasFluid,[`${this.styleClass}`]:this.styleClass}}static \u0275fac=(()=>{let e;return function(s){return(e||(e=N(c)))(s||c)}})();static \u0275cmp=I({type:c,selectors:[["p-button"]],contentQueries:function(l,s,n){if(l&1&&(i1(n,tc,5),i1(n,sc,5),i1(n,nc,5),i1(n,f0,4)),l&2){let a;o1(a=r1())&&(s.contentTemplate=a.first),o1(a=r1())&&(s.loadingIconTemplate=a.first),o1(a=r1())&&(s.iconTemplate=a.first),o1(a=r1())&&(s.templates=a)}},inputs:{type:"type",iconPos:"iconPos",icon:"icon",badge:"badge",label:"label",disabled:[2,"disabled","disabled",E],loading:[2,"loading","loading",E],loadingIcon:"loadingIcon",raised:[2,"raised","raised",E],rounded:[2,"rounded","rounded",E],text:[2,"text","text",E],plain:[2,"plain","plain",E],severity:"severity",outlined:[2,"outlined","outlined",E],link:[2,"link","link",E],tabindex:[2,"tabindex","tabindex",B4],size:"size",variant:"variant",style:"style",styleClass:"styleClass",badgeClass:"badgeClass",badgeSeverity:"badgeSeverity",ariaLabel:"ariaLabel",autofocus:[2,"autofocus","autofocus",E],fluid:[2,"fluid","fluid",E],buttonProps:"buttonProps"},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[t2([F6]),D,o2],ngContentSelectors:ac,decls:7,vars:14,consts:[["pRipple","",3,"click","focus","blur","ngStyle","disabled","ngClass","pAutoFocus"],[4,"ngTemplateOutlet"],[4,"ngIf"],["class","p-button-label",4,"ngIf"],[3,"value","severity",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"ngClass",4,"ngIf"],[3,"styleClass","spin",4,"ngIf"],[3,"ngClass"],[3,"styleClass","spin"],[3,"ngIf"],[3,"class","ngClass",4,"ngIf"],[1,"p-button-label"],[3,"value","severity"]],template:function(l,s){l&1&&(f2(),C2(0,"button",0),$4("click",function(a){return s.onClick.emit(a)})("focus",function(a){return s.onFocus.emit(a)})("blur",function(a){return s.onBlur.emit(a)}),m2(1),P2(2,ic,1,0,"ng-container",1)(3,pc,3,5,"ng-container",2)(4,hc,3,5,"ng-container",2)(5,Mc,2,3,"span",3)(6,gc,1,2,"p-badge",4),b2()),l&2&&(A("ngStyle",s.style)("disabled",s.disabled||s.loading)("ngClass",s.buttonClass)("pAutoFocus",s.autofocus),H("type",s.type)("aria-label",s.ariaLabel)("data-pc-name","button")("data-pc-section","root")("tabindex",s.tabindex),_(2),A("ngTemplateOutlet",s.contentTemplate||s._contentTemplate),_(),A("ngIf",s.loading),_(),A("ngIf",!s.loading),_(),A("ngIf",!s.contentTemplate&&!s._contentTemplate&&s.label),_(),A("ngIf",!s.contentTemplate&&!s._contentTemplate&&s.badge))},dependencies:[_2,W4,U4,V4,j4,R6,P6,O6,I6,x4,N2],encapsulation:2,changeDetection:0})}return c})(),zt=(()=>{class c{static \u0275fac=function(l){return new(l||c)};static \u0275mod=K({type:c});static \u0275inj=q({imports:[_2,xc,N2,N2]})}return c})();var B6=class c{constructor(t){this.translate=t;this.translate.addLangs(this.languages),this.translate.setDefaultLang(this.languages[0]);let e=localStorage.getItem("lang");if(e)this.translate.use(e),this._currentLanguage.set(e);else{let l=this.translate.getBrowserLang(),s=l&&this.languages.includes(l)?l:this.languages[0];this.translate.use(s),this._currentLanguage.set(s)}}languages=["en-US","pl-PL"];_currentLanguage=r2(this.languages[0]);currentLanguage=f1(()=>this._currentLanguage());changeLanguage(t){localStorage.setItem("lang",t),this.translate.use(t),this._currentLanguage.set(t)}static \u0275fac=function(e){return new(e||c)(G(G2))};static \u0275prov=M({token:c,factory:c.\u0275fac,providedIn:"root"})};export{I2 as a,Pc as b,_c as c,Ic as d,K4 as e,d1 as f,Rc as g,R2 as h,Fc as i,X4 as j,r8 as k,f8 as l,$c as m,Bc as n,Q4 as o,Hc as p,Wc as q,Uc as r,m8 as s,u8 as t,jc as u,Vc as v,Z4 as w,qc as x,P3 as y,Gc as z,Kc as A,_3 as B,Yc as C,Xc as D,I3 as E,Qc as F,Zc as G,Jc as H,c9 as I,l0 as J,X as K,M8 as L,x as M,Z1 as N,D3 as O,s9 as P,n9 as Q,a9 as R,i9 as S,z1 as T,P as U,y9 as V,N9 as W,S9 as X,v9 as Y,w9 as Z,f0 as _,N2 as $,A9 as aa,re as ba,F as ca,$e as da,B6 as ea,X9 as fa,Q9 as ga,J9 as ha,ce as ia,ee as ja,le as ka,te as la,se as ma,ne as na,ae as oa,i2 as pa,b4 as qa,E6 as ra,P6 as sa,L3 as ta,Pl as ua,O6 as va,R6 as wa,xc as xa,zt as ya};
