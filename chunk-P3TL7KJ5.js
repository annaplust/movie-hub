import{B as a3,C as n3,F as s1,I as o3,M as n2,O as e1,V as a1,aa as t3,ba as K,ea as J,f as R2,h as p2,ha as B,o as e3,y as l1}from"./chunk-FF6AFZCM.js";import{a as $2,c as J1,e as Z1,f as c3,g as l3,k as x2,l as H2,t as s3}from"./chunk-F4X3CPPA.js";import{Bb as X1,Cb as D,Db as z2,Eb as L2,Fb as h2,Hb as g2,Ib as b2,Ja as q1,Kb as I2,Lb as B2,Ma as N,O as E,P as W,Qa as U1,Ra as U,U as v,Ub as Q,Wa as k,Wb as Z2,Xa as j,Ya as V,_ as e2,_a as S,ab as a2,ba as P2,ca as g,gb as A,hb as M,ia as T2,ib as j1,ja as _1,kb as V1,lb as G,ma as q,na as F2,pc as b,qc as Q1,rb as Y,sa as W1,sb as X,sc as c1,tb as I,tc as K1,ub as E2,vb as D2,wb as G1,yb as Y1}from"./chunk-NM4URTZ5.js";function T4(c,a,l){return(a=E4(a))in c?Object.defineProperty(c,a,{value:l,enumerable:!0,configurable:!0,writable:!0}):c[a]=l,c}function i3(c,a){var l=Object.keys(c);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(c);a&&(s=s.filter(function(e){return Object.getOwnPropertyDescriptor(c,e).enumerable})),l.push.apply(l,s)}return l}function i(c){for(var a=1;a<arguments.length;a++){var l=arguments[a]!=null?arguments[a]:{};a%2?i3(Object(l),!0).forEach(function(s){T4(c,s,l[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(l)):i3(Object(l)).forEach(function(s){Object.defineProperty(c,s,Object.getOwnPropertyDescriptor(l,s))})}return c}function F4(c,a){if(typeof c!="object"||!c)return c;var l=c[Symbol.toPrimitive];if(l!==void 0){var s=l.call(c,a||"default");if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(c)}function E4(c){var a=F4(c,"string");return typeof a=="symbol"?a:a+""}var r3=()=>{},v1={},I3={},B3=null,$3={mark:r3,measure:r3};try{typeof window<"u"&&(v1=window),typeof document<"u"&&(I3=document),typeof MutationObserver<"u"&&(B3=MutationObserver),typeof performance<"u"&&($3=performance)}catch{}var{userAgent:f3=""}=v1.navigator||{},c2=v1,d=I3,m3=B3,O2=$3,h8=!!c2.document,_=!!d.documentElement&&!!d.head&&typeof d.addEventListener=="function"&&typeof d.createElement=="function",H3=~f3.indexOf("MSIE")||~f3.indexOf("Trident/"),D4=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,I4=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,R3={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},B4={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},O3=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],y="classic",V2="duotone",$4="sharp",H4="sharp-duotone",_3=[y,V2,$4,H4],R4={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},O4={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},_4=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),W4={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},q4=["fak","fa-kit","fakd","fa-kit-duotone"],z3={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},U4=["kit"],j4={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},V4=["fak","fakd"],G4={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},L3={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},_2={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Y4=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],X4=["fak","fa-kit","fakd","fa-kit-duotone"],Q4={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},K4={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},J4={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},f1={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},Z4=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],m1=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...Y4,...Z4],c0=["solid","regular","light","thin","duotone","brands"],W3=[1,2,3,4,5,6,7,8,9,10],l0=W3.concat([11,12,13,14,15,16,17,18,19,20]),s0=[...Object.keys(J4),...c0,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",_2.GROUP,_2.SWAP_OPACITY,_2.PRIMARY,_2.SECONDARY].concat(W3.map(c=>"".concat(c,"x"))).concat(l0.map(c=>"w-".concat(c))),e0={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},R="___FONT_AWESOME___",z1=16,q3="fa",U3="svg-inline--fa",t2="data-fa-i2svg",L1="data-fa-pseudo-element",a0="data-fa-pseudo-element-pending",k1="data-prefix",A1="data-icon",p3="fontawesome-i2svg",n0="async",o0=["HTML","HEAD","STYLE","SCRIPT"],j3=(()=>{try{return!0}catch{return!1}})();function k2(c){return new Proxy(c,{get(a,l){return l in a?a[l]:a[y]}})}var V3=i({},R3);V3[y]=i(i(i(i({},{"fa-duotone":"duotone"}),R3[y]),z3.kit),z3["kit-duotone"]);var t0=k2(V3),p1=i({},W4);p1[y]=i(i(i(i({},{duotone:"fad"}),p1[y]),L3.kit),L3["kit-duotone"]);var u3=k2(p1),u1=i({},f1);u1[y]=i(i({},u1[y]),G4.kit);var P1=k2(u1),d1=i({},K4);d1[y]=i(i({},d1[y]),j4.kit);var g8=k2(d1),i0=D4,G3="fa-layers-text",r0=I4,f0=i({},R4),b8=k2(f0),m0=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],n1=B4,z0=[...U4,...s0],y2=c2.FontAwesomeConfig||{};function L0(c){var a=d.querySelector("script["+c+"]");if(a)return a.getAttribute(c)}function p0(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}d&&typeof d.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(a=>{let[l,s]=a,e=p0(L0(l));e!=null&&(y2[s]=e)});var Y3={styleDefault:"solid",familyDefault:y,cssPrefix:q3,replacementClass:U3,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};y2.familyPrefix&&(y2.cssPrefix=y2.familyPrefix);var M2=i(i({},Y3),y2);M2.autoReplaceSvg||(M2.observeMutations=!1);var z={};Object.keys(Y3).forEach(c=>{Object.defineProperty(z,c,{enumerable:!0,set:function(a){M2[c]=a,S2.forEach(l=>l(z))},get:function(){return M2[c]}})});Object.defineProperty(z,"familyPrefix",{enumerable:!0,set:function(c){M2.cssPrefix=c,S2.forEach(a=>a(z))},get:function(){return M2.cssPrefix}});c2.FontAwesomeConfig=z;var S2=[];function u0(c){return S2.push(c),()=>{S2.splice(S2.indexOf(c),1)}}var Z=z1,$={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function d0(c){if(!c||!_)return;let a=d.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=c;let l=d.head.childNodes,s=null;for(let e=l.length-1;e>-1;e--){let n=l[e],o=(n.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(s=n)}return d.head.insertBefore(a,s),c}var M0="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function w2(){let c=12,a="";for(;c-- >0;)a+=M0[Math.random()*62|0];return a}function C2(c){let a=[];for(let l=(c||[]).length>>>0;l--;)a[l]=c[l];return a}function T1(c){return c.classList?C2(c.classList):(c.getAttribute("class")||"").split(" ").filter(a=>a)}function X3(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function C0(c){return Object.keys(c||{}).reduce((a,l)=>a+"".concat(l,'="').concat(X3(c[l]),'" '),"").trim()}function G2(c){return Object.keys(c||{}).reduce((a,l)=>a+"".concat(l,": ").concat(c[l].trim(),";"),"")}function F1(c){return c.size!==$.size||c.x!==$.x||c.y!==$.y||c.rotate!==$.rotate||c.flipX||c.flipY}function h0(c){let{transform:a,containerWidth:l,iconWidth:s}=c,e={transform:"translate(".concat(l/2," 256)")},n="translate(".concat(a.x*32,", ").concat(a.y*32,") "),o="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),t="rotate(".concat(a.rotate," 0 0)"),r={transform:"".concat(n," ").concat(o," ").concat(t)},f={transform:"translate(".concat(s/2*-1," -256)")};return{outer:e,inner:r,path:f}}function g0(c){let{transform:a,width:l=z1,height:s=z1,startCentered:e=!1}=c,n="";return e&&H3?n+="translate(".concat(a.x/Z-l/2,"em, ").concat(a.y/Z-s/2,"em) "):e?n+="translate(calc(-50% + ".concat(a.x/Z,"em), calc(-50% + ").concat(a.y/Z,"em)) "):n+="translate(".concat(a.x/Z,"em, ").concat(a.y/Z,"em) "),n+="scale(".concat(a.size/Z*(a.flipX?-1:1),", ").concat(a.size/Z*(a.flipY?-1:1),") "),n+="rotate(".concat(a.rotate,"deg) "),n}var b0=`:root, :host {
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
}`;function Q3(){let c=q3,a=U3,l=z.cssPrefix,s=z.replacementClass,e=b0;if(l!==c||s!==a){let n=new RegExp("\\.".concat(c,"\\-"),"g"),o=new RegExp("\\--".concat(c,"\\-"),"g"),t=new RegExp("\\.".concat(a),"g");e=e.replace(n,".".concat(l,"-")).replace(o,"--".concat(l,"-")).replace(t,".".concat(s))}return e}var d3=!1;function o1(){z.autoAddCss&&!d3&&(d0(Q3()),d3=!0)}var x0={mixout(){return{dom:{css:Q3,insertCss:o1}}},hooks(){return{beforeDOMElementCreation(){o1()},beforeI2svg(){o1()}}}},O=c2||{};O[R]||(O[R]={});O[R].styles||(O[R].styles={});O[R].hooks||(O[R].hooks={});O[R].shims||(O[R].shims=[]);var H=O[R],K3=[],J3=function(){d.removeEventListener("DOMContentLoaded",J3),U2=1,K3.map(c=>c())},U2=!1;_&&(U2=(d.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(d.readyState),U2||d.addEventListener("DOMContentLoaded",J3));function N0(c){_&&(U2?setTimeout(c,0):K3.push(c))}function A2(c){let{tag:a,attributes:l={},children:s=[]}=c;return typeof c=="string"?X3(c):"<".concat(a," ").concat(C0(l),">").concat(s.map(A2).join(""),"</").concat(a,">")}function M3(c,a,l){if(c&&c[a]&&c[a][l])return{prefix:a,iconName:l,icon:c[a][l]}}var y0=function(a,l){return function(s,e,n,o){return a.call(l,s,e,n,o)}},t1=function(a,l,s,e){var n=Object.keys(a),o=n.length,t=e!==void 0?y0(l,e):l,r,f,m;for(s===void 0?(r=1,m=a[n[0]]):(r=0,m=s);r<o;r++)f=n[r],m=t(m,a[f],f,a);return m};function S0(c){let a=[],l=0,s=c.length;for(;l<s;){let e=c.charCodeAt(l++);if(e>=55296&&e<=56319&&l<s){let n=c.charCodeAt(l++);(n&64512)==56320?a.push(((e&1023)<<10)+(n&1023)+65536):(a.push(e),l--)}else a.push(e)}return a}function M1(c){let a=S0(c);return a.length===1?a[0].toString(16):null}function w0(c,a){let l=c.length,s=c.charCodeAt(a),e;return s>=55296&&s<=56319&&l>a+1&&(e=c.charCodeAt(a+1),e>=56320&&e<=57343)?(s-55296)*1024+e-56320+65536:s}function C3(c){return Object.keys(c).reduce((a,l)=>{let s=c[l];return!!s.icon?a[s.iconName]=s.icon:a[l]=s,a},{})}function C1(c,a){let l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},{skipHooks:s=!1}=l,e=C3(a);typeof H.hooks.addPack=="function"&&!s?H.hooks.addPack(c,C3(a)):H.styles[c]=i(i({},H.styles[c]||{}),e),c==="fas"&&C1("fa",a)}var{styles:v2,shims:v0}=H,Z3=Object.keys(P1),k0=Z3.reduce((c,a)=>(c[a]=Object.keys(P1[a]),c),{}),E1=null,c4={},l4={},s4={},e4={},a4={};function A0(c){return~z0.indexOf(c)}function P0(c,a){let l=a.split("-"),s=l[0],e=l.slice(1).join("-");return s===c&&e!==""&&!A0(e)?e:null}var n4=()=>{let c=s=>t1(v2,(e,n,o)=>(e[o]=t1(n,s,{}),e),{});c4=c((s,e,n)=>(e[3]&&(s[e[3]]=n),e[2]&&e[2].filter(t=>typeof t=="number").forEach(t=>{s[t.toString(16)]=n}),s)),l4=c((s,e,n)=>(s[n]=n,e[2]&&e[2].filter(t=>typeof t=="string").forEach(t=>{s[t]=n}),s)),a4=c((s,e,n)=>{let o=e[2];return s[n]=n,o.forEach(t=>{s[t]=n}),s});let a="far"in v2||z.autoFetchSvg,l=t1(v0,(s,e)=>{let n=e[0],o=e[1],t=e[2];return o==="far"&&!a&&(o="fas"),typeof n=="string"&&(s.names[n]={prefix:o,iconName:t}),typeof n=="number"&&(s.unicodes[n.toString(16)]={prefix:o,iconName:t}),s},{names:{},unicodes:{}});s4=l.names,e4=l.unicodes,E1=Y2(z.styleDefault,{family:z.familyDefault})};u0(c=>{E1=Y2(c.styleDefault,{family:z.familyDefault})});n4();function D1(c,a){return(c4[c]||{})[a]}function T0(c,a){return(l4[c]||{})[a]}function o2(c,a){return(a4[c]||{})[a]}function o4(c){return s4[c]||{prefix:null,iconName:null}}function F0(c){let a=e4[c],l=D1("fas",c);return a||(l?{prefix:"fas",iconName:l}:null)||{prefix:null,iconName:null}}function l2(){return E1}var t4=()=>({prefix:null,iconName:null,rest:[]});function E0(c){let a=y,l=Z3.reduce((s,e)=>(s[e]="".concat(z.cssPrefix,"-").concat(e),s),{});return _3.forEach(s=>{(c.includes(l[s])||c.some(e=>k0[s].includes(e)))&&(a=s)}),a}function Y2(c){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{family:l=y}=a,s=t0[l][c];if(l===V2&&!c)return"fad";let e=u3[l][c]||u3[l][s],n=c in H.styles?c:null;return e||n||null}function D0(c){let a=[],l=null;return c.forEach(s=>{let e=P0(z.cssPrefix,s);e?l=e:s&&a.push(s)}),{iconName:l,rest:a}}function h3(c){return c.sort().filter((a,l,s)=>s.indexOf(a)===l)}function X2(c){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{skipLookups:l=!1}=a,s=null,e=m1.concat(X4),n=h3(c.filter(L=>e.includes(L))),o=h3(c.filter(L=>!m1.includes(L))),t=n.filter(L=>(s=L,!O3.includes(L))),[r=null]=t,f=E0(n),m=i(i({},D0(o)),{},{prefix:Y2(r,{family:f})});return i(i(i({},m),H0({values:c,family:f,styles:v2,config:z,canonical:m,givenPrefix:s})),I0(l,s,m))}function I0(c,a,l){let{prefix:s,iconName:e}=l;if(c||!s||!e)return{prefix:s,iconName:e};let n=a==="fa"?o4(e):{},o=o2(s,e);return e=n.iconName||o||e,s=n.prefix||s,s==="far"&&!v2.far&&v2.fas&&!z.autoFetchSvg&&(s="fas"),{prefix:s,iconName:e}}var B0=_3.filter(c=>c!==y||c!==V2),$0=Object.keys(f1).filter(c=>c!==y).map(c=>Object.keys(f1[c])).flat();function H0(c){let{values:a,family:l,canonical:s,givenPrefix:e="",styles:n={},config:o={}}=c,t=l===V2,r=a.includes("fa-duotone")||a.includes("fad"),f=o.familyDefault==="duotone",m=s.prefix==="fad"||s.prefix==="fa-duotone";if(!t&&(r||f||m)&&(s.prefix="fad"),(a.includes("fa-brands")||a.includes("fab"))&&(s.prefix="fab"),!s.prefix&&B0.includes(l)&&(Object.keys(n).find(p=>$0.includes(p))||o.autoFetchSvg)){let p=_4.get(l).defaultShortPrefixId;s.prefix=p,s.iconName=o2(s.prefix,s.iconName)||s.iconName}return(s.prefix==="fa"||e==="fa")&&(s.prefix=l2()||"fas"),s}var h1=class{constructor(){this.definitions={}}add(){for(var a=arguments.length,l=new Array(a),s=0;s<a;s++)l[s]=arguments[s];let e=l.reduce(this._pullDefinitions,{});Object.keys(e).forEach(n=>{this.definitions[n]=i(i({},this.definitions[n]||{}),e[n]),C1(n,e[n]);let o=P1[y][n];o&&C1(o,e[n]),n4()})}reset(){this.definitions={}}_pullDefinitions(a,l){let s=l.prefix&&l.iconName&&l.icon?{0:l}:l;return Object.keys(s).map(e=>{let{prefix:n,iconName:o,icon:t}=s[e],r=t[2];a[n]||(a[n]={}),r.length>0&&r.forEach(f=>{typeof f=="string"&&(a[n][f]=t)}),a[n][o]=t}),a}},g3=[],u2={},d2={},R0=Object.keys(d2);function O0(c,a){let{mixoutsTo:l}=a;return g3=c,u2={},Object.keys(d2).forEach(s=>{R0.indexOf(s)===-1&&delete d2[s]}),g3.forEach(s=>{let e=s.mixout?s.mixout():{};if(Object.keys(e).forEach(n=>{typeof e[n]=="function"&&(l[n]=e[n]),typeof e[n]=="object"&&Object.keys(e[n]).forEach(o=>{l[n]||(l[n]={}),l[n][o]=e[n][o]})}),s.hooks){let n=s.hooks();Object.keys(n).forEach(o=>{u2[o]||(u2[o]=[]),u2[o].push(n[o])})}s.provides&&s.provides(d2)}),l}function g1(c,a){for(var l=arguments.length,s=new Array(l>2?l-2:0),e=2;e<l;e++)s[e-2]=arguments[e];return(u2[c]||[]).forEach(o=>{a=o.apply(null,[a,...s])}),a}function i2(c){for(var a=arguments.length,l=new Array(a>1?a-1:0),s=1;s<a;s++)l[s-1]=arguments[s];(u2[c]||[]).forEach(n=>{n.apply(null,l)})}function s2(){let c=arguments[0],a=Array.prototype.slice.call(arguments,1);return d2[c]?d2[c].apply(null,a):void 0}function b1(c){c.prefix==="fa"&&(c.prefix="fas");let{iconName:a}=c,l=c.prefix||l2();if(a)return a=o2(l,a)||a,M3(i4.definitions,l,a)||M3(H.styles,l,a)}var i4=new h1,_0=()=>{z.autoReplaceSvg=!1,z.observeMutations=!1,i2("noAuto")},W0={i2svg:function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return _?(i2("beforeI2svg",c),s2("pseudoElements2svg",c),s2("i2svg",c)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:a}=c;z.autoReplaceSvg===!1&&(z.autoReplaceSvg=!0),z.observeMutations=!0,N0(()=>{U0({autoReplaceSvgRoot:a}),i2("watch",c)})}},q0={icon:c=>{if(c===null)return null;if(typeof c=="object"&&c.prefix&&c.iconName)return{prefix:c.prefix,iconName:o2(c.prefix,c.iconName)||c.iconName};if(Array.isArray(c)&&c.length===2){let a=c[1].indexOf("fa-")===0?c[1].slice(3):c[1],l=Y2(c[0]);return{prefix:l,iconName:o2(l,a)||a}}if(typeof c=="string"&&(c.indexOf("".concat(z.cssPrefix,"-"))>-1||c.match(i0))){let a=X2(c.split(" "),{skipLookups:!0});return{prefix:a.prefix||l2(),iconName:o2(a.prefix,a.iconName)||a.iconName}}if(typeof c=="string"){let a=l2();return{prefix:a,iconName:o2(a,c)||c}}}},P={noAuto:_0,config:z,dom:W0,parse:q0,library:i4,findIconDefinition:b1,toHtml:A2},U0=function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:a=d}=c;(Object.keys(H.styles).length>0||z.autoFetchSvg)&&_&&z.autoReplaceSvg&&P.dom.i2svg({node:a})};function Q2(c,a){return Object.defineProperty(c,"abstract",{get:a}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(l=>A2(l))}}),Object.defineProperty(c,"node",{get:function(){if(!_)return;let l=d.createElement("div");return l.innerHTML=c.html,l.children}}),c}function j0(c){let{children:a,main:l,mask:s,attributes:e,styles:n,transform:o}=c;if(F1(o)&&l.found&&!s.found){let{width:t,height:r}=l,f={x:t/r/2,y:.5};e.style=G2(i(i({},n),{},{"transform-origin":"".concat(f.x+o.x/16,"em ").concat(f.y+o.y/16,"em")}))}return[{tag:"svg",attributes:e,children:a}]}function V0(c){let{prefix:a,iconName:l,children:s,attributes:e,symbol:n}=c,o=n===!0?"".concat(a,"-").concat(z.cssPrefix,"-").concat(l):n;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:i(i({},e),{},{id:o}),children:s}]}]}function I1(c){let{icons:{main:a,mask:l},prefix:s,iconName:e,transform:n,symbol:o,title:t,maskId:r,titleId:f,extra:m,watchable:L=!1}=c,{width:p,height:u}=l.found?l:a,C=V4.includes(s),x=[z.replacementClass,e?"".concat(z.cssPrefix,"-").concat(e):""].filter(m2=>m.classes.indexOf(m2)===-1).filter(m2=>m2!==""||!!m2).concat(m.classes).join(" "),w={children:[],attributes:i(i({},m.attributes),{},{"data-prefix":s,"data-icon":e,class:x,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(p," ").concat(u)})},T=C&&!~m.classes.indexOf("fa-fw")?{width:"".concat(p/u*16*.0625,"em")}:{};L&&(w.attributes[t2]=""),t&&(w.children.push({tag:"title",attributes:{id:w.attributes["aria-labelledby"]||"title-".concat(f||w2())},children:[t]}),delete w.attributes.title);let h=i(i({},w),{},{prefix:s,iconName:e,main:a,mask:l,maskId:r,transform:n,symbol:o,styles:i(i({},T),m.styles)}),{children:F,attributes:f2}=l.found&&a.found?s2("generateAbstractMask",h)||{children:[],attributes:{}}:s2("generateAbstractIcon",h)||{children:[],attributes:{}};return h.children=F,h.attributes=f2,o?V0(h):j0(h)}function b3(c){let{content:a,width:l,height:s,transform:e,title:n,extra:o,watchable:t=!1}=c,r=i(i(i({},o.attributes),n?{title:n}:{}),{},{class:o.classes.join(" ")});t&&(r[t2]="");let f=i({},o.styles);F1(e)&&(f.transform=g0({transform:e,startCentered:!0,width:l,height:s}),f["-webkit-transform"]=f.transform);let m=G2(f);m.length>0&&(r.style=m);let L=[];return L.push({tag:"span",attributes:r,children:[a]}),n&&L.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),L}function G0(c){let{content:a,title:l,extra:s}=c,e=i(i(i({},s.attributes),l?{title:l}:{}),{},{class:s.classes.join(" ")}),n=G2(s.styles);n.length>0&&(e.style=n);let o=[];return o.push({tag:"span",attributes:e,children:[a]}),l&&o.push({tag:"span",attributes:{class:"sr-only"},children:[l]}),o}var{styles:i1}=H;function x1(c){let a=c[0],l=c[1],[s]=c.slice(4),e=null;return Array.isArray(s)?e={tag:"g",attributes:{class:"".concat(z.cssPrefix,"-").concat(n1.GROUP)},children:[{tag:"path",attributes:{class:"".concat(z.cssPrefix,"-").concat(n1.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(z.cssPrefix,"-").concat(n1.PRIMARY),fill:"currentColor",d:s[1]}}]}:e={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:a,height:l,icon:e}}var Y0={found:!1,width:512,height:512};function X0(c,a){!j3&&!z.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(a,'" is missing.'))}function N1(c,a){let l=a;return a==="fa"&&z.styleDefault!==null&&(a=l2()),new Promise((s,e)=>{if(l==="fa"){let n=o4(c)||{};c=n.iconName||c,a=n.prefix||a}if(c&&a&&i1[a]&&i1[a][c]){let n=i1[a][c];return s(x1(n))}X0(c,a),s(i(i({},Y0),{},{icon:z.showMissingIcons&&c?s2("missingIconAbstract")||{}:{}}))})}var x3=()=>{},y1=z.measurePerformance&&O2&&O2.mark&&O2.measure?O2:{mark:x3,measure:x3},N2='FA "6.7.2"',Q0=c=>(y1.mark("".concat(N2," ").concat(c," begins")),()=>r4(c)),r4=c=>{y1.mark("".concat(N2," ").concat(c," ends")),y1.measure("".concat(N2," ").concat(c),"".concat(N2," ").concat(c," begins"),"".concat(N2," ").concat(c," ends"))},B1={begin:Q0,end:r4},W2=()=>{};function N3(c){return typeof(c.getAttribute?c.getAttribute(t2):null)=="string"}function K0(c){let a=c.getAttribute?c.getAttribute(k1):null,l=c.getAttribute?c.getAttribute(A1):null;return a&&l}function J0(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(z.replacementClass)}function Z0(){return z.autoReplaceSvg===!0?q2.replace:q2[z.autoReplaceSvg]||q2.replace}function c6(c){return d.createElementNS("http://www.w3.org/2000/svg",c)}function l6(c){return d.createElement(c)}function f4(c){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{ceFn:l=c.tag==="svg"?c6:l6}=a;if(typeof c=="string")return d.createTextNode(c);let s=l(c.tag);return Object.keys(c.attributes||[]).forEach(function(n){s.setAttribute(n,c.attributes[n])}),(c.children||[]).forEach(function(n){s.appendChild(f4(n,{ceFn:l}))}),s}function s6(c){let a=" ".concat(c.outerHTML," ");return a="".concat(a,"Font Awesome fontawesome.com "),a}var q2={replace:function(c){let a=c[0];if(a.parentNode)if(c[1].forEach(l=>{a.parentNode.insertBefore(f4(l),a)}),a.getAttribute(t2)===null&&z.keepOriginalSource){let l=d.createComment(s6(a));a.parentNode.replaceChild(l,a)}else a.remove()},nest:function(c){let a=c[0],l=c[1];if(~T1(a).indexOf(z.replacementClass))return q2.replace(c);let s=new RegExp("".concat(z.cssPrefix,"-.*"));if(delete l[0].attributes.id,l[0].attributes.class){let n=l[0].attributes.class.split(" ").reduce((o,t)=>(t===z.replacementClass||t.match(s)?o.toSvg.push(t):o.toNode.push(t),o),{toNode:[],toSvg:[]});l[0].attributes.class=n.toSvg.join(" "),n.toNode.length===0?a.removeAttribute("class"):a.setAttribute("class",n.toNode.join(" "))}let e=l.map(n=>A2(n)).join(`
`);a.setAttribute(t2,""),a.innerHTML=e}};function y3(c){c()}function m4(c,a){let l=typeof a=="function"?a:W2;if(c.length===0)l();else{let s=y3;z.mutateApproach===n0&&(s=c2.requestAnimationFrame||y3),s(()=>{let e=Z0(),n=B1.begin("mutate");c.map(e),n(),l()})}}var $1=!1;function z4(){$1=!0}function S1(){$1=!1}var j2=null;function S3(c){if(!m3||!z.observeMutations)return;let{treeCallback:a=W2,nodeCallback:l=W2,pseudoElementsCallback:s=W2,observeMutationsRoot:e=d}=c;j2=new m3(n=>{if($1)return;let o=l2();C2(n).forEach(t=>{if(t.type==="childList"&&t.addedNodes.length>0&&!N3(t.addedNodes[0])&&(z.searchPseudoElements&&s(t.target),a(t.target)),t.type==="attributes"&&t.target.parentNode&&z.searchPseudoElements&&s(t.target.parentNode),t.type==="attributes"&&N3(t.target)&&~m0.indexOf(t.attributeName))if(t.attributeName==="class"&&K0(t.target)){let{prefix:r,iconName:f}=X2(T1(t.target));t.target.setAttribute(k1,r||o),f&&t.target.setAttribute(A1,f)}else J0(t.target)&&l(t.target)})}),_&&j2.observe(e,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function e6(){j2&&j2.disconnect()}function a6(c){let a=c.getAttribute("style"),l=[];return a&&(l=a.split(";").reduce((s,e)=>{let n=e.split(":"),o=n[0],t=n.slice(1);return o&&t.length>0&&(s[o]=t.join(":").trim()),s},{})),l}function n6(c){let a=c.getAttribute("data-prefix"),l=c.getAttribute("data-icon"),s=c.innerText!==void 0?c.innerText.trim():"",e=X2(T1(c));return e.prefix||(e.prefix=l2()),a&&l&&(e.prefix=a,e.iconName=l),e.iconName&&e.prefix||(e.prefix&&s.length>0&&(e.iconName=T0(e.prefix,c.innerText)||D1(e.prefix,M1(c.innerText))),!e.iconName&&z.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(e.iconName=c.firstChild.data)),e}function o6(c){let a=C2(c.attributes).reduce((e,n)=>(e.name!=="class"&&e.name!=="style"&&(e[n.name]=n.value),e),{}),l=c.getAttribute("title"),s=c.getAttribute("data-fa-title-id");return z.autoA11y&&(l?a["aria-labelledby"]="".concat(z.replacementClass,"-title-").concat(s||w2()):(a["aria-hidden"]="true",a.focusable="false")),a}function t6(){return{iconName:null,title:null,titleId:null,prefix:null,transform:$,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function w3(c){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},{iconName:l,prefix:s,rest:e}=n6(c),n=o6(c),o=g1("parseNodeAttributes",{},c),t=a.styleParser?a6(c):[];return i({iconName:l,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:s,transform:$,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:e,styles:t,attributes:n}},o)}var{styles:i6}=H;function L4(c){let a=z.autoReplaceSvg==="nest"?w3(c,{styleParser:!1}):w3(c);return~a.extra.classes.indexOf(G3)?s2("generateLayersText",c,a):s2("generateSvgReplacementMutation",c,a)}function r6(){return[...q4,...m1]}function v3(c){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!_)return Promise.resolve();let l=d.documentElement.classList,s=m=>l.add("".concat(p3,"-").concat(m)),e=m=>l.remove("".concat(p3,"-").concat(m)),n=z.autoFetchSvg?r6():O3.concat(Object.keys(i6));n.includes("fa")||n.push("fa");let o=[".".concat(G3,":not([").concat(t2,"])")].concat(n.map(m=>".".concat(m,":not([").concat(t2,"])"))).join(", ");if(o.length===0)return Promise.resolve();let t=[];try{t=C2(c.querySelectorAll(o))}catch{}if(t.length>0)s("pending"),e("complete");else return Promise.resolve();let r=B1.begin("onTree"),f=t.reduce((m,L)=>{try{let p=L4(L);p&&m.push(p)}catch(p){j3||p.name==="MissingIcon"&&console.error(p)}return m},[]);return new Promise((m,L)=>{Promise.all(f).then(p=>{m4(p,()=>{s("active"),s("complete"),e("pending"),typeof a=="function"&&a(),r(),m()})}).catch(p=>{r(),L(p)})})}function f6(c){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;L4(c).then(l=>{l&&m4([l],a)})}function m6(c){return function(a){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=(a||{}).icon?a:b1(a||{}),{mask:e}=l;return e&&(e=(e||{}).icon?e:b1(e||{})),c(s,i(i({},l),{},{mask:e}))}}var z6=function(c){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:l=$,symbol:s=!1,mask:e=null,maskId:n=null,title:o=null,titleId:t=null,classes:r=[],attributes:f={},styles:m={}}=a;if(!c)return;let{prefix:L,iconName:p,icon:u}=c;return Q2(i({type:"icon"},c),()=>(i2("beforeDOMElementCreation",{iconDefinition:c,params:a}),z.autoA11y&&(o?f["aria-labelledby"]="".concat(z.replacementClass,"-title-").concat(t||w2()):(f["aria-hidden"]="true",f.focusable="false")),I1({icons:{main:x1(u),mask:e?x1(e.icon):{found:!1,width:null,height:null,icon:{}}},prefix:L,iconName:p,transform:i(i({},$),l),symbol:s,title:o,maskId:n,titleId:t,extra:{attributes:f,styles:m,classes:r}})))},L6={mixout(){return{icon:m6(z6)}},hooks(){return{mutationObserverCallbacks(c){return c.treeCallback=v3,c.nodeCallback=f6,c}}},provides(c){c.i2svg=function(a){let{node:l=d,callback:s=()=>{}}=a;return v3(l,s)},c.generateSvgReplacementMutation=function(a,l){let{iconName:s,title:e,titleId:n,prefix:o,transform:t,symbol:r,mask:f,maskId:m,extra:L}=l;return new Promise((p,u)=>{Promise.all([N1(s,o),f.iconName?N1(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(C=>{let[x,w]=C;p([a,I1({icons:{main:x,mask:w},prefix:o,iconName:s,transform:t,symbol:r,maskId:m,title:e,titleId:n,extra:L,watchable:!0})])}).catch(u)})},c.generateAbstractIcon=function(a){let{children:l,attributes:s,main:e,transform:n,styles:o}=a,t=G2(o);t.length>0&&(s.style=t);let r;return F1(n)&&(r=s2("generateAbstractTransformGrouping",{main:e,transform:n,containerWidth:e.width,iconWidth:e.width})),l.push(r||e.icon),{children:l,attributes:s}}}},p6={mixout(){return{layer(c){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{classes:l=[]}=a;return Q2({type:"layer"},()=>{i2("beforeDOMElementCreation",{assembler:c,params:a});let s=[];return c(e=>{Array.isArray(e)?e.map(n=>{s=s.concat(n.abstract)}):s=s.concat(e.abstract)}),[{tag:"span",attributes:{class:["".concat(z.cssPrefix,"-layers"),...l].join(" ")},children:s}]})}}}},u6={mixout(){return{counter(c){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{title:l=null,classes:s=[],attributes:e={},styles:n={}}=a;return Q2({type:"counter",content:c},()=>(i2("beforeDOMElementCreation",{content:c,params:a}),G0({content:c.toString(),title:l,extra:{attributes:e,styles:n,classes:["".concat(z.cssPrefix,"-layers-counter"),...s]}})))}}}},d6={mixout(){return{text(c){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:l=$,title:s=null,classes:e=[],attributes:n={},styles:o={}}=a;return Q2({type:"text",content:c},()=>(i2("beforeDOMElementCreation",{content:c,params:a}),b3({content:c,transform:i(i({},$),l),title:s,extra:{attributes:n,styles:o,classes:["".concat(z.cssPrefix,"-layers-text"),...e]}})))}}},provides(c){c.generateLayersText=function(a,l){let{title:s,transform:e,extra:n}=l,o=null,t=null;if(H3){let r=parseInt(getComputedStyle(a).fontSize,10),f=a.getBoundingClientRect();o=f.width/r,t=f.height/r}return z.autoA11y&&!s&&(n.attributes["aria-hidden"]="true"),Promise.resolve([a,b3({content:a.innerHTML,width:o,height:t,transform:e,title:s,extra:n,watchable:!0})])}}},M6=new RegExp('"',"ug"),k3=[1105920,1112319],A3=i(i(i(i({},{FontAwesome:{normal:"fas",400:"fas"}}),O4),e0),Q4),w1=Object.keys(A3).reduce((c,a)=>(c[a.toLowerCase()]=A3[a],c),{}),C6=Object.keys(w1).reduce((c,a)=>{let l=w1[a];return c[a]=l[900]||[...Object.entries(l)][0][1],c},{});function h6(c){let a=c.replace(M6,""),l=w0(a,0),s=l>=k3[0]&&l<=k3[1],e=a.length===2?a[0]===a[1]:!1;return{value:M1(e?a[0]:a),isSecondary:s||e}}function g6(c,a){let l=c.replace(/^['"]|['"]$/g,"").toLowerCase(),s=parseInt(a),e=isNaN(s)?"normal":s;return(w1[l]||{})[e]||C6[l]}function P3(c,a){let l="".concat(a0).concat(a.replace(":","-"));return new Promise((s,e)=>{if(c.getAttribute(l)!==null)return s();let o=C2(c.children).filter(p=>p.getAttribute(L1)===a)[0],t=c2.getComputedStyle(c,a),r=t.getPropertyValue("font-family"),f=r.match(r0),m=t.getPropertyValue("font-weight"),L=t.getPropertyValue("content");if(o&&!f)return c.removeChild(o),s();if(f&&L!=="none"&&L!==""){let p=t.getPropertyValue("content"),u=g6(r,m),{value:C,isSecondary:x}=h6(p),w=f[0].startsWith("FontAwesome"),T=D1(u,C),h=T;if(w){let F=F0(C);F.iconName&&F.prefix&&(T=F.iconName,u=F.prefix)}if(T&&!x&&(!o||o.getAttribute(k1)!==u||o.getAttribute(A1)!==h)){c.setAttribute(l,h),o&&c.removeChild(o);let F=t6(),{extra:f2}=F;f2.attributes[L1]=a,N1(T,u).then(m2=>{let A4=I1(i(i({},F),{},{icons:{main:m2,mask:t4()},prefix:u,iconName:h,extra:f2,watchable:!0})),J2=d.createElementNS("http://www.w3.org/2000/svg","svg");a==="::before"?c.insertBefore(J2,c.firstChild):c.appendChild(J2),J2.outerHTML=A4.map(P4=>A2(P4)).join(`
`),c.removeAttribute(l),s()}).catch(e)}else s()}else s()})}function b6(c){return Promise.all([P3(c,"::before"),P3(c,"::after")])}function x6(c){return c.parentNode!==document.head&&!~o0.indexOf(c.tagName.toUpperCase())&&!c.getAttribute(L1)&&(!c.parentNode||c.parentNode.tagName!=="svg")}function T3(c){if(_)return new Promise((a,l)=>{let s=C2(c.querySelectorAll("*")).filter(x6).map(b6),e=B1.begin("searchPseudoElements");z4(),Promise.all(s).then(()=>{e(),S1(),a()}).catch(()=>{e(),S1(),l()})})}var N6={hooks(){return{mutationObserverCallbacks(c){return c.pseudoElementsCallback=T3,c}}},provides(c){c.pseudoElements2svg=function(a){let{node:l=d}=a;z.searchPseudoElements&&T3(l)}}},F3=!1,y6={mixout(){return{dom:{unwatch(){z4(),F3=!0}}}},hooks(){return{bootstrap(){S3(g1("mutationObserverCallbacks",{}))},noAuto(){e6()},watch(c){let{observeMutationsRoot:a}=c;F3?S1():S3(g1("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},E3=c=>{let a={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return c.toLowerCase().split(" ").reduce((l,s)=>{let e=s.toLowerCase().split("-"),n=e[0],o=e.slice(1).join("-");if(n&&o==="h")return l.flipX=!0,l;if(n&&o==="v")return l.flipY=!0,l;if(o=parseFloat(o),isNaN(o))return l;switch(n){case"grow":l.size=l.size+o;break;case"shrink":l.size=l.size-o;break;case"left":l.x=l.x-o;break;case"right":l.x=l.x+o;break;case"up":l.y=l.y-o;break;case"down":l.y=l.y+o;break;case"rotate":l.rotate=l.rotate+o;break}return l},a)},S6={mixout(){return{parse:{transform:c=>E3(c)}}},hooks(){return{parseNodeAttributes(c,a){let l=a.getAttribute("data-fa-transform");return l&&(c.transform=E3(l)),c}}},provides(c){c.generateAbstractTransformGrouping=function(a){let{main:l,transform:s,containerWidth:e,iconWidth:n}=a,o={transform:"translate(".concat(e/2," 256)")},t="translate(".concat(s.x*32,", ").concat(s.y*32,") "),r="scale(".concat(s.size/16*(s.flipX?-1:1),", ").concat(s.size/16*(s.flipY?-1:1),") "),f="rotate(".concat(s.rotate," 0 0)"),m={transform:"".concat(t," ").concat(r," ").concat(f)},L={transform:"translate(".concat(n/2*-1," -256)")},p={outer:o,inner:m,path:L};return{tag:"g",attributes:i({},p.outer),children:[{tag:"g",attributes:i({},p.inner),children:[{tag:l.icon.tag,children:l.icon.children,attributes:i(i({},l.icon.attributes),p.path)}]}]}}}},r1={x:0,y:0,width:"100%",height:"100%"};function D3(c){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return c.attributes&&(c.attributes.fill||a)&&(c.attributes.fill="black"),c}function w6(c){return c.tag==="g"?c.children:[c]}var v6={hooks(){return{parseNodeAttributes(c,a){let l=a.getAttribute("data-fa-mask"),s=l?X2(l.split(" ").map(e=>e.trim())):t4();return s.prefix||(s.prefix=l2()),c.mask=s,c.maskId=a.getAttribute("data-fa-mask-id"),c}}},provides(c){c.generateAbstractMask=function(a){let{children:l,attributes:s,main:e,mask:n,maskId:o,transform:t}=a,{width:r,icon:f}=e,{width:m,icon:L}=n,p=h0({transform:t,containerWidth:m,iconWidth:r}),u={tag:"rect",attributes:i(i({},r1),{},{fill:"white"})},C=f.children?{children:f.children.map(D3)}:{},x={tag:"g",attributes:i({},p.inner),children:[D3(i({tag:f.tag,attributes:i(i({},f.attributes),p.path)},C))]},w={tag:"g",attributes:i({},p.outer),children:[x]},T="mask-".concat(o||w2()),h="clip-".concat(o||w2()),F={tag:"mask",attributes:i(i({},r1),{},{id:T,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[u,w]},f2={tag:"defs",children:[{tag:"clipPath",attributes:{id:h},children:w6(L)},F]};return l.push(f2,{tag:"rect",attributes:i({fill:"currentColor","clip-path":"url(#".concat(h,")"),mask:"url(#".concat(T,")")},r1)}),{children:l,attributes:s}}}},k6={provides(c){let a=!1;c2.matchMedia&&(a=c2.matchMedia("(prefers-reduced-motion: reduce)").matches),c.missingIconAbstract=function(){let l=[],s={fill:"currentColor"},e={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};l.push({tag:"path",attributes:i(i({},s),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});let n=i(i({},e),{},{attributeName:"opacity"}),o={tag:"circle",attributes:i(i({},s),{},{cx:"256",cy:"364",r:"28"}),children:[]};return a||o.children.push({tag:"animate",attributes:i(i({},e),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:i(i({},n),{},{values:"1;0;1;1;0;1;"})}),l.push(o),l.push({tag:"path",attributes:i(i({},s),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:a?[]:[{tag:"animate",attributes:i(i({},n),{},{values:"1;0;0;0;0;1;"})}]}),a||l.push({tag:"path",attributes:i(i({},s),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:i(i({},n),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:l}}}},A6={hooks(){return{parseNodeAttributes(c,a){let l=a.getAttribute("data-fa-symbol"),s=l===null?!1:l===""?!0:l;return c.symbol=s,c}}}},P6=[x0,L6,p6,u6,d6,N6,y6,S6,v6,k6,A6];O0(P6,{mixoutsTo:P});var x8=P.noAuto,p4=P.config,N8=P.library,u4=P.dom,d4=P.parse,y8=P.findIconDefinition,S8=P.toHtml,M4=P.icon,w8=P.layer,T6=P.text,F6=P.counter;var D6=["*"],I6=c=>{throw new Error(`Could not find icon with iconName=${c.iconName} and prefix=${c.prefix} in the icon library.`)},B6=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},h4=c=>c!=null&&(c===90||c===180||c===270||c==="90"||c==="180"||c==="270"),$6=c=>{let a=h4(c.rotate),l={[`fa-${c.animation}`]:c.animation!=null&&!c.animation.startsWith("spin"),"fa-spin":c.animation==="spin"||c.animation==="spin-reverse","fa-spin-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-spin-reverse":c.animation==="spin-reverse"||c.animation==="spin-pulse-reverse","fa-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-fw":c.fixedWidth,"fa-border":c.border,"fa-inverse":c.inverse,"fa-layers-counter":c.counter,"fa-flip-horizontal":c.flip==="horizontal"||c.flip==="both","fa-flip-vertical":c.flip==="vertical"||c.flip==="both",[`fa-${c.size}`]:c.size!==null,[`fa-rotate-${c.rotate}`]:a,"fa-rotate-by":c.rotate!=null&&!a,[`fa-pull-${c.pull}`]:c.pull!==null,[`fa-stack-${c.stackItemSize}`]:c.stackItemSize!=null};return Object.keys(l).map(s=>l[s]?s:null).filter(s=>s)},H1=new WeakSet,C4="fa-auto-css";function H6(c,a){if(!a.autoAddCss||H1.has(c))return;if(c.getElementById(C4)!=null){a.autoAddCss=!1,H1.add(c);return}let l=c.createElement("style");l.setAttribute("type","text/css"),l.setAttribute("id",C4),l.innerHTML=u4.css();let s=c.head.childNodes,e=null;for(let n=s.length-1;n>-1;n--){let o=s[n],t=o.nodeName.toUpperCase();["STYLE","LINK"].indexOf(t)>-1&&(e=o)}c.head.insertBefore(l,e),a.autoAddCss=!1,H1.add(c)}var R6=c=>c.prefix!==void 0&&c.iconName!==void 0,O6=(c,a)=>R6(c)?c:Array.isArray(c)&&c.length===2?{prefix:c[0],iconName:c[1]}:{prefix:a,iconName:c},_6=(()=>{class c{constructor(){this.defaultPrefix="fas",this.fallbackIcon=null,this._autoAddCss=!0}set autoAddCss(l){p4.autoAddCss=l,this._autoAddCss=l}get autoAddCss(){return this._autoAddCss}static{this.\u0275fac=function(s){return new(s||c)}}static{this.\u0275prov=E({token:c,factory:c.\u0275fac,providedIn:"root"})}}return c})(),W6=(()=>{class c{constructor(){this.definitions={}}addIcons(...l){for(let s of l){s.prefix in this.definitions||(this.definitions[s.prefix]={}),this.definitions[s.prefix][s.iconName]=s;for(let e of s.icon[2])typeof e=="string"&&(this.definitions[s.prefix][e]=s)}}addIconPacks(...l){for(let s of l){let e=Object.keys(s).map(n=>s[n]);this.addIcons(...e)}}getIconDefinition(l,s){return l in this.definitions&&s in this.definitions[l]?this.definitions[l][s]:null}static{this.\u0275fac=function(s){return new(s||c)}}static{this.\u0275prov=E({token:c,factory:c.\u0275fac,providedIn:"root"})}}return c})(),q6=(()=>{class c{constructor(){this.stackItemSize="1x"}ngOnChanges(l){if("size"in l)throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')}static{this.\u0275fac=function(s){return new(s||c)}}static{this.\u0275dir=V({type:c,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:"stackItemSize",size:"size"},features:[e2]})}}return c})(),U6=(()=>{class c{constructor(l,s){this.renderer=l,this.elementRef=s}ngOnInit(){this.renderer.addClass(this.elementRef.nativeElement,"fa-stack")}ngOnChanges(l){"size"in l&&(l.size.currentValue!=null&&this.renderer.addClass(this.elementRef.nativeElement,`fa-${l.size.currentValue}`),l.size.previousValue!=null&&this.renderer.removeClass(this.elementRef.nativeElement,`fa-${l.size.previousValue}`))}static{this.\u0275fac=function(s){return new(s||c)(U(U1),U(F2))}}static{this.\u0275cmp=k({type:c,selectors:[["fa-stack"]],inputs:{size:"size"},features:[e2],ngContentSelectors:D6,decls:1,vars:0,template:function(s,e){s&1&&(z2(),L2(0))},encapsulation:2})}}return c})(),R8=(()=>{class c{constructor(l,s,e,n,o){this.sanitizer=l,this.config=s,this.iconLibrary=e,this.stackItem=n,this.document=v($2),o!=null&&n==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x"></fa-icon>.')}ngOnChanges(l){if(this.icon==null&&this.config.fallbackIcon==null){B6();return}if(l){let s=this.findIconDefinition(this.icon??this.config.fallbackIcon);if(s!=null){let e=this.buildParams();H6(this.document,this.config);let n=M4(s,e);this.renderedIconHTML=this.sanitizer.bypassSecurityTrustHtml(n.html.join(`
`))}}}render(){this.ngOnChanges({})}findIconDefinition(l){let s=O6(l,this.config.defaultPrefix);if("icon"in s)return s;let e=this.iconLibrary.getIconDefinition(s.prefix,s.iconName);return e??(I6(s),null)}buildParams(){let l={flip:this.flip,animation:this.animation,border:this.border,inverse:this.inverse,size:this.size||null,pull:this.pull||null,rotate:this.rotate||null,fixedWidth:typeof this.fixedWidth=="boolean"?this.fixedWidth:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize:null},s=typeof this.transform=="string"?d4.transform(this.transform):this.transform,e={};return l.rotate!=null&&!h4(l.rotate)&&(e["--fa-rotate-angle"]=`${l.rotate}`),{title:this.title,transform:s,classes:$6(l),mask:this.mask!=null?this.findIconDefinition(this.mask):null,symbol:this.symbol,attributes:{role:this.a11yRole},styles:e}}static{this.\u0275fac=function(s){return new(s||c)(U(s3),U(_6),U(W6),U(q6,8),U(U6,8))}}static{this.\u0275cmp=k({type:c,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(s,e){s&2&&(Y1("innerHTML",e.renderedIconHTML,q1),A("title",e.title))},inputs:{icon:"icon",title:"title",animation:"animation",mask:"mask",flip:"flip",size:"size",pull:"pull",border:"border",inverse:"inverse",symbol:"symbol",rotate:"rotate",fixedWidth:"fixedWidth",transform:"transform",a11yRole:"a11yRole"},features:[e2],decls:0,vars:0,template:function(s,e){},encapsulation:2})}}return c})();var O8=(()=>{class c{static{this.\u0275fac=function(s){return new(s||c)}}static{this.\u0275mod=j({type:c})}static{this.\u0275inj=W({})}}return c})();var W8={prefix:"fas",iconName:"star",icon:[576,512,[11088,61446],"f005","M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"]};var q8={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]};var U8={prefix:"fas",iconName:"tv",icon:[640,512,[63717,"television","tv-alt"],"f26c","M64 64l0 288 512 0 0-288L64 64zM0 64C0 28.7 28.7 0 64 0L576 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64L64 416c-35.3 0-64-28.7-64-64L0 64zM128 448l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-384 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"]};var j8={prefix:"fas",iconName:"clapperboard",icon:[512,512,[],"e131","M448 32l-86.1 0-1 1-127 127 92.1 0 1-1L453.8 32.3c-1.9-.2-3.8-.3-5.8-.3zm64 128l0-64c0-15.1-5.3-29.1-14-40l-104 104L512 160zM294.1 32l-92.1 0-1 1L73.9 160l92.1 0 1-1 127-127zM64 32C28.7 32 0 60.7 0 96l0 64 6.1 0 1-1 127-127L64 32zM512 192L0 192 0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-224z"]};var V8={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]};var G8={prefix:"fas",iconName:"chevron-left",icon:[320,512,[9001],"f053","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"]};var Y8={prefix:"fas",iconName:"chevron-right",icon:[320,512,[9002],"f054","M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"]};var R1=(()=>{class c{static zindex=1e3;static calculatedScrollbarWidth=null;static calculatedScrollbarHeight=null;static browser;static addClass(l,s){l&&s&&(l.classList?l.classList.add(s):l.className+=" "+s)}static addMultipleClasses(l,s){if(l&&s)if(l.classList){let e=s.trim().split(" ");for(let n=0;n<e.length;n++)l.classList.add(e[n])}else{let e=s.split(" ");for(let n=0;n<e.length;n++)l.className+=" "+e[n]}}static removeClass(l,s){l&&s&&(l.classList?l.classList.remove(s):l.className=l.className.replace(new RegExp("(^|\\b)"+s.split(" ").join("|")+"(\\b|$)","gi")," "))}static removeMultipleClasses(l,s){l&&s&&[s].flat().filter(Boolean).forEach(e=>e.split(" ").forEach(n=>this.removeClass(l,n)))}static hasClass(l,s){return l&&s?l.classList?l.classList.contains(s):new RegExp("(^| )"+s+"( |$)","gi").test(l.className):!1}static siblings(l){return Array.prototype.filter.call(l.parentNode.children,function(s){return s!==l})}static find(l,s){return Array.from(l.querySelectorAll(s))}static findSingle(l,s){return this.isElement(l)?l.querySelector(s):null}static index(l){let s=l.parentNode.childNodes,e=0;for(var n=0;n<s.length;n++){if(s[n]==l)return e;s[n].nodeType==1&&e++}return-1}static indexWithinGroup(l,s){let e=l.parentNode?l.parentNode.childNodes:[],n=0;for(var o=0;o<e.length;o++){if(e[o]==l)return n;e[o].attributes&&e[o].attributes[s]&&e[o].nodeType==1&&n++}return-1}static appendOverlay(l,s,e="self"){e!=="self"&&l&&s&&this.appendChild(l,s)}static alignOverlay(l,s,e="self",n=!0){l&&s&&(n&&(l.style.minWidth=`${c.getOuterWidth(s)}px`),e==="self"?this.relativePosition(l,s):this.absolutePosition(l,s))}static relativePosition(l,s,e=!0){let n=h=>{if(h)return getComputedStyle(h).getPropertyValue("position")==="relative"?h:n(h.parentElement)},o=l.offsetParent?{width:l.offsetWidth,height:l.offsetHeight}:this.getHiddenElementDimensions(l),t=s.offsetHeight,r=s.getBoundingClientRect(),f=this.getWindowScrollTop(),m=this.getWindowScrollLeft(),L=this.getViewport(),u=n(l)?.getBoundingClientRect()||{top:-1*f,left:-1*m},C,x;r.top+t+o.height>L.height?(C=r.top-u.top-o.height,l.style.transformOrigin="bottom",r.top+C<0&&(C=-1*r.top)):(C=t+r.top-u.top,l.style.transformOrigin="top");let w=r.left+o.width-L.width,T=r.left-u.left;o.width>L.width?x=(r.left-u.left)*-1:w>0?x=T-w:x=r.left-u.left,l.style.top=C+"px",l.style.left=x+"px",e&&(l.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static absolutePosition(l,s,e=!0){let n=l.offsetParent?{width:l.offsetWidth,height:l.offsetHeight}:this.getHiddenElementDimensions(l),o=n.height,t=n.width,r=s.offsetHeight,f=s.offsetWidth,m=s.getBoundingClientRect(),L=this.getWindowScrollTop(),p=this.getWindowScrollLeft(),u=this.getViewport(),C,x;m.top+r+o>u.height?(C=m.top+L-o,l.style.transformOrigin="bottom",C<0&&(C=L)):(C=r+m.top+L,l.style.transformOrigin="top"),m.left+t>u.width?x=Math.max(0,m.left+p+f-t):x=m.left+p,l.style.top=C+"px",l.style.left=x+"px",e&&(l.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static getParents(l,s=[]){return l.parentNode===null?s:this.getParents(l.parentNode,s.concat([l.parentNode]))}static getScrollableParents(l){let s=[];if(l){let e=this.getParents(l),n=/(auto|scroll)/,o=t=>{let r=window.getComputedStyle(t,null);return n.test(r.getPropertyValue("overflow"))||n.test(r.getPropertyValue("overflowX"))||n.test(r.getPropertyValue("overflowY"))};for(let t of e){let r=t.nodeType===1&&t.dataset.scrollselectors;if(r){let f=r.split(",");for(let m of f){let L=this.findSingle(t,m);L&&o(L)&&s.push(L)}}t.nodeType!==9&&o(t)&&s.push(t)}}return s}static getHiddenElementOuterHeight(l){l.style.visibility="hidden",l.style.display="block";let s=l.offsetHeight;return l.style.display="none",l.style.visibility="visible",s}static getHiddenElementOuterWidth(l){l.style.visibility="hidden",l.style.display="block";let s=l.offsetWidth;return l.style.display="none",l.style.visibility="visible",s}static getHiddenElementDimensions(l){let s={};return l.style.visibility="hidden",l.style.display="block",s.width=l.offsetWidth,s.height=l.offsetHeight,l.style.display="none",l.style.visibility="visible",s}static scrollInView(l,s){let e=getComputedStyle(l).getPropertyValue("borderTopWidth"),n=e?parseFloat(e):0,o=getComputedStyle(l).getPropertyValue("paddingTop"),t=o?parseFloat(o):0,r=l.getBoundingClientRect(),m=s.getBoundingClientRect().top+document.body.scrollTop-(r.top+document.body.scrollTop)-n-t,L=l.scrollTop,p=l.clientHeight,u=this.getOuterHeight(s);m<0?l.scrollTop=L+m:m+u>p&&(l.scrollTop=L+m-p+u)}static fadeIn(l,s){l.style.opacity=0;let e=+new Date,n=0,o=function(){n=+l.style.opacity.replace(",",".")+(new Date().getTime()-e)/s,l.style.opacity=n,e=+new Date,+n<1&&(window.requestAnimationFrame&&requestAnimationFrame(o)||setTimeout(o,16))};o()}static fadeOut(l,s){var e=1,n=50,o=s,t=n/o;let r=setInterval(()=>{e=e-t,e<=0&&(e=0,clearInterval(r)),l.style.opacity=e},n)}static getWindowScrollTop(){let l=document.documentElement;return(window.pageYOffset||l.scrollTop)-(l.clientTop||0)}static getWindowScrollLeft(){let l=document.documentElement;return(window.pageXOffset||l.scrollLeft)-(l.clientLeft||0)}static matches(l,s){var e=Element.prototype,n=e.matches||e.webkitMatchesSelector||e.mozMatchesSelector||e.msMatchesSelector||function(o){return[].indexOf.call(document.querySelectorAll(o),this)!==-1};return n.call(l,s)}static getOuterWidth(l,s){let e=l.offsetWidth;if(s){let n=getComputedStyle(l);e+=parseFloat(n.marginLeft)+parseFloat(n.marginRight)}return e}static getHorizontalPadding(l){let s=getComputedStyle(l);return parseFloat(s.paddingLeft)+parseFloat(s.paddingRight)}static getHorizontalMargin(l){let s=getComputedStyle(l);return parseFloat(s.marginLeft)+parseFloat(s.marginRight)}static innerWidth(l){let s=l.offsetWidth,e=getComputedStyle(l);return s+=parseFloat(e.paddingLeft)+parseFloat(e.paddingRight),s}static width(l){let s=l.offsetWidth,e=getComputedStyle(l);return s-=parseFloat(e.paddingLeft)+parseFloat(e.paddingRight),s}static getInnerHeight(l){let s=l.offsetHeight,e=getComputedStyle(l);return s+=parseFloat(e.paddingTop)+parseFloat(e.paddingBottom),s}static getOuterHeight(l,s){let e=l.offsetHeight;if(s){let n=getComputedStyle(l);e+=parseFloat(n.marginTop)+parseFloat(n.marginBottom)}return e}static getHeight(l){let s=l.offsetHeight,e=getComputedStyle(l);return s-=parseFloat(e.paddingTop)+parseFloat(e.paddingBottom)+parseFloat(e.borderTopWidth)+parseFloat(e.borderBottomWidth),s}static getWidth(l){let s=l.offsetWidth,e=getComputedStyle(l);return s-=parseFloat(e.paddingLeft)+parseFloat(e.paddingRight)+parseFloat(e.borderLeftWidth)+parseFloat(e.borderRightWidth),s}static getViewport(){let l=window,s=document,e=s.documentElement,n=s.getElementsByTagName("body")[0],o=l.innerWidth||e.clientWidth||n.clientWidth,t=l.innerHeight||e.clientHeight||n.clientHeight;return{width:o,height:t}}static getOffset(l){var s=l.getBoundingClientRect();return{top:s.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:s.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static replaceElementWith(l,s){let e=l.parentNode;if(!e)throw"Can't replace element";return e.replaceChild(s,l)}static getUserAgent(){if(navigator&&this.isClient())return navigator.userAgent}static isIE(){var l=window.navigator.userAgent,s=l.indexOf("MSIE ");if(s>0)return!0;var e=l.indexOf("Trident/");if(e>0){var n=l.indexOf("rv:");return!0}var o=l.indexOf("Edge/");return o>0}static isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isAndroid(){return/(android)/i.test(navigator.userAgent)}static isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0}static appendChild(l,s){if(this.isElement(s))s.appendChild(l);else if(s&&s.el&&s.el.nativeElement)s.el.nativeElement.appendChild(l);else throw"Cannot append "+s+" to "+l}static removeChild(l,s){if(this.isElement(s))s.removeChild(l);else if(s.el&&s.el.nativeElement)s.el.nativeElement.removeChild(l);else throw"Cannot remove "+l+" from "+s}static removeElement(l){"remove"in Element.prototype?l.remove():l.parentNode.removeChild(l)}static isElement(l){return typeof HTMLElement=="object"?l instanceof HTMLElement:l&&typeof l=="object"&&l!==null&&l.nodeType===1&&typeof l.nodeName=="string"}static calculateScrollbarWidth(l){if(l){let s=getComputedStyle(l);return l.offsetWidth-l.clientWidth-parseFloat(s.borderLeftWidth)-parseFloat(s.borderRightWidth)}else{if(this.calculatedScrollbarWidth!==null)return this.calculatedScrollbarWidth;let s=document.createElement("div");s.className="p-scrollbar-measure",document.body.appendChild(s);let e=s.offsetWidth-s.clientWidth;return document.body.removeChild(s),this.calculatedScrollbarWidth=e,e}}static calculateScrollbarHeight(){if(this.calculatedScrollbarHeight!==null)return this.calculatedScrollbarHeight;let l=document.createElement("div");l.className="p-scrollbar-measure",document.body.appendChild(l);let s=l.offsetHeight-l.clientHeight;return document.body.removeChild(l),this.calculatedScrollbarWidth=s,s}static invokeElementMethod(l,s,e){l[s].apply(l,e)}static clearSelection(){if(window.getSelection)window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().rangeCount>0&&window.getSelection().getRangeAt(0).getClientRects().length>0&&window.getSelection().removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}}static getBrowser(){if(!this.browser){let l=this.resolveUserAgent();this.browser={},l.browser&&(this.browser[l.browser]=!0,this.browser.version=l.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}static resolveUserAgent(){let l=navigator.userAgent.toLowerCase(),s=/(chrome)[ \/]([\w.]+)/.exec(l)||/(webkit)[ \/]([\w.]+)/.exec(l)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(l)||/(msie) ([\w.]+)/.exec(l)||l.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(l)||[];return{browser:s[1]||"",version:s[2]||"0"}}static isInteger(l){return Number.isInteger?Number.isInteger(l):typeof l=="number"&&isFinite(l)&&Math.floor(l)===l}static isHidden(l){return!l||l.offsetParent===null}static isVisible(l){return l&&l.offsetParent!=null}static isExist(l){return l!==null&&typeof l<"u"&&l.nodeName&&l.parentNode}static focus(l,s){l&&document.activeElement!==l&&l.focus(s)}static getFocusableSelectorString(l=""){return`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${l},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${l},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${l},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${l},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${l},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${l},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${l},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${l},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${l}`}static getFocusableElements(l,s=""){let e=this.find(l,this.getFocusableSelectorString(s)),n=[];for(let o of e){let t=getComputedStyle(o);this.isVisible(o)&&t.display!="none"&&t.visibility!="hidden"&&n.push(o)}return n}static getFocusableElement(l,s=""){let e=this.findSingle(l,this.getFocusableSelectorString(s));if(e){let n=getComputedStyle(e);if(this.isVisible(e)&&n.display!="none"&&n.visibility!="hidden")return e}return null}static getFirstFocusableElement(l,s=""){let e=this.getFocusableElements(l,s);return e.length>0?e[0]:null}static getLastFocusableElement(l,s){let e=this.getFocusableElements(l,s);return e.length>0?e[e.length-1]:null}static getNextFocusableElement(l,s=!1){let e=c.getFocusableElements(l),n=0;if(e&&e.length>0){let o=e.indexOf(e[0].ownerDocument.activeElement);s?o==-1||o===0?n=e.length-1:n=o-1:o!=-1&&o!==e.length-1&&(n=o+1)}return e[n]}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}static getSelection(){return window.getSelection?window.getSelection().toString():document.getSelection?document.getSelection().toString():document.selection?document.selection.createRange().text:null}static getTargetElement(l,s){if(!l)return null;switch(l){case"document":return document;case"window":return window;case"@next":return s?.nextElementSibling;case"@prev":return s?.previousElementSibling;case"@parent":return s?.parentElement;case"@grandparent":return s?.parentElement.parentElement;default:let e=typeof l;if(e==="string")return document.querySelector(l);if(e==="object"&&l.hasOwnProperty("nativeElement"))return this.isExist(l.nativeElement)?l.nativeElement:void 0;let o=(t=>!!(t&&t.constructor&&t.call&&t.apply))(l)?l():l;return o&&o.nodeType===9||this.isExist(o)?o:null}}static isClient(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}static getAttribute(l,s){if(l){let e=l.getAttribute(s);return isNaN(e)?e==="true"||e==="false"?e==="true":e:+e}}static calculateBodyScrollbarWidth(){return window.innerWidth-document.documentElement.offsetWidth}static blockBodyScroll(l="p-overflow-hidden"){document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,l)}static unblockBodyScroll(l="p-overflow-hidden"){document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,l)}static createElement(l,s={},...e){if(l){let n=document.createElement(l);return this.setAttributes(n,s),n.append(...e),n}}static setAttribute(l,s="",e){this.isElement(l)&&e!==null&&e!==void 0&&l.setAttribute(s,e)}static setAttributes(l,s={}){if(this.isElement(l)){let e=(n,o)=>{let t=l?.$attrs?.[n]?[l?.$attrs?.[n]]:[];return[o].flat().reduce((r,f)=>{if(f!=null){let m=typeof f;if(m==="string"||m==="number")r.push(f);else if(m==="object"){let L=Array.isArray(f)?e(n,f):Object.entries(f).map(([p,u])=>n==="style"&&(u||u===0)?`${p.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${u}`:u?p:void 0);r=L.length?r.concat(L.filter(p=>!!p)):r}}return r},t)};Object.entries(s).forEach(([n,o])=>{if(o!=null){let t=n.match(/^on(.+)/);t?l.addEventListener(t[1].toLowerCase(),o):n==="pBind"?this.setAttributes(l,o):(o=n==="class"?[...new Set(e("class",o))].join(" ").trim():n==="style"?e("style",o).join(";").trim():o,(l.$attrs=l.$attrs||{})&&(l.$attrs[n]=o),l.setAttribute(n,o))}})}}static isFocusableElement(l,s=""){return this.isElement(l)?l.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${s},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${s},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${s},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${s},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${s},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${s},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${s}`):!1}}return c})(),g4=class{element;listener;scrollableParents;constructor(a,l=()=>{}){this.element=a,this.listener=l}bindScrollListener(){this.scrollableParents=R1.getScrollableParents(this.element);for(let a=0;a<this.scrollableParents.length;a++)this.scrollableParents[a].addEventListener("scroll",this.listener)}unbindScrollListener(){if(this.scrollableParents)for(let a=0;a<this.scrollableParents.length;a++)this.scrollableParents[a].removeEventListener("scroll",this.listener)}destroy(){this.unbindScrollListener(),this.element=null,this.listener=null,this.scrollableParents=null}};var b4=(()=>{class c extends B{autofocus=!1;_autofocus=!1;focused=!1;platformId=v(W1);document=v($2);host=v(F2);ngAfterContentChecked(){this.autofocus===!1?this.host.nativeElement.removeAttribute("autofocus"):this.host.nativeElement.setAttribute("autofocus",!0),this.focused||this.autoFocus()}ngAfterViewChecked(){this.focused||this.autoFocus()}autoFocus(){H2(this.platformId)&&this._autofocus&&setTimeout(()=>{let l=R1.getFocusableElements(this.host?.nativeElement);l.length===0&&this.host.nativeElement.focus(),l.length>0&&l[0].focus(),this.focused=!0})}static \u0275fac=(()=>{let l;return function(e){return(l||(l=g(c)))(e||c)}})();static \u0275dir=V({type:c,selectors:[["","pAutoFocus",""]],inputs:{autofocus:[2,"autofocus","autofocus",b],_autofocus:[0,"pAutoFocus","_autofocus"]},features:[S]})}return c})();var j6=({dt:c})=>`
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
`,V6={root:({props:c,instance:a})=>["p-badge p-component",{"p-badge-circle":e1(c.value)&&String(c.value).length===1,"p-badge-dot":n2(c.value)&&!a.$slots.default,"p-badge-sm":c.size==="small","p-badge-lg":c.size==="large","p-badge-xl":c.size==="xlarge","p-badge-info":c.severity==="info","p-badge-success":c.severity==="success","p-badge-warn":c.severity==="warn","p-badge-danger":c.severity==="danger","p-badge-secondary":c.severity==="secondary","p-badge-contrast":c.severity==="contrast"}]},x4=(()=>{class c extends J{name="badge";theme=j6;classes=V6;static \u0275fac=(()=>{let l;return function(e){return(l||(l=g(c)))(e||c)}})();static \u0275prov=E({token:c,factory:c.\u0275fac})}return c})();var O1=(()=>{class c extends B{styleClass=q();style=q();badgeSize=q();size=q();severity=q();value=q();badgeDisabled=q(!1,{transform:b});_componentStyle=v(x4);containerClass=c1(()=>{let l="p-badge p-component";return e1(this.value())&&String(this.value()).length===1&&(l+=" p-badge-circle"),this.badgeSize()==="large"?l+=" p-badge-lg":this.badgeSize()==="xlarge"?l+=" p-badge-xl":this.badgeSize()==="small"&&(l+=" p-badge-sm"),n2(this.value())&&(l+=" p-badge-dot"),this.styleClass()&&(l+=` ${this.styleClass()}`),this.severity()&&(l+=` p-badge-${this.severity()}`),l});static \u0275fac=(()=>{let l;return function(e){return(l||(l=g(c)))(e||c)}})();static \u0275cmp=k({type:c,selectors:[["p-badge"]],hostVars:6,hostBindings:function(s,e){s&2&&(V1(e.style()),G(e.containerClass()),j1("display",e.badgeDisabled()?"none":null))},inputs:{styleClass:[1,"styleClass"],style:[1,"style"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},features:[Q([x4]),S],decls:1,vars:1,template:function(s,e){s&1&&I2(0),s&2&&B2(e.value())},dependencies:[x2,K],encapsulation:2,changeDetection:0})}return c})(),N4=(()=>{class c{static \u0275fac=function(s){return new(s||c)};static \u0275mod=j({type:c});static \u0275inj=W({imports:[O1,K,K]})}return c})();var Y6=["*"],X6=`
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
`,Q6=(()=>{class c extends J{name="baseicon";inlineStyles=X6;static \u0275fac=(()=>{let l;return function(e){return(l||(l=g(c)))(e||c)}})();static \u0275prov=E({token:c,factory:c.\u0275fac})}return c})();var K2=(()=>{class c extends B{label;spin=!1;styleClass;role;ariaLabel;ariaHidden;ngOnInit(){super.ngOnInit(),this.getAttributes()}getAttributes(){let l=n2(this.label);this.role=l?void 0:"img",this.ariaLabel=l?void 0:this.label,this.ariaHidden=l}getClassNames(){return`p-icon ${this.styleClass?this.styleClass+" ":""}${this.spin?"p-icon-spin":""}`}static \u0275fac=(()=>{let l;return function(e){return(l||(l=g(c)))(e||c)}})();static \u0275cmp=k({type:c,selectors:[["ng-component"]],hostAttrs:[1,"p-component","p-iconwrapper"],inputs:{label:"label",spin:[2,"spin","spin",b],styleClass:"styleClass"},features:[Q([Q6]),S],ngContentSelectors:Y6,decls:1,vars:0,template:function(s,e){s&1&&(z2(),L2(0))},encapsulation:2,changeDetection:0})}return c})();var P5=(()=>{class c extends K2{static \u0275fac=(()=>{let l;return function(e){return(l||(l=g(c)))(e||c)}})();static \u0275cmp=k({type:c,selectors:[["ChevronDownIcon"]],features:[S],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M7.01744 10.398C6.91269 10.3985 6.8089 10.378 6.71215 10.3379C6.61541 10.2977 6.52766 10.2386 6.45405 10.1641L1.13907 4.84913C1.03306 4.69404 0.985221 4.5065 1.00399 4.31958C1.02276 4.13266 1.10693 3.95838 1.24166 3.82747C1.37639 3.69655 1.55301 3.61742 1.74039 3.60402C1.92777 3.59062 2.11386 3.64382 2.26584 3.75424L7.01744 8.47394L11.769 3.75424C11.9189 3.65709 12.097 3.61306 12.2748 3.62921C12.4527 3.64535 12.6199 3.72073 12.7498 3.84328C12.8797 3.96582 12.9647 4.12842 12.9912 4.30502C13.0177 4.48162 12.9841 4.662 12.8958 4.81724L7.58083 10.1322C7.50996 10.2125 7.42344 10.2775 7.32656 10.3232C7.22968 10.3689 7.12449 10.3944 7.01744 10.398Z","fill","currentColor"]],template:function(s,e){s&1&&(P2(),Y(0,"svg",0),I(1,"path",1),X()),s&2&&(G(e.getClassNames()),A("aria-label",e.ariaLabel)("aria-hidden",e.ariaHidden)("role",e.role))},encapsulation:2})}return c})();var y4=(()=>{class c extends K2{pathId;ngOnInit(){this.pathId="url(#"+a1()+")"}static \u0275fac=(()=>{let l;return function(e){return(l||(l=g(c)))(e||c)}})();static \u0275cmp=k({type:c,selectors:[["SpinnerIcon"]],features:[S],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(s,e){s&1&&(P2(),Y(0,"svg",0)(1,"g"),I(2,"path",1),X(),Y(3,"defs")(4,"clipPath",2),I(5,"rect",3),X()()()),s&2&&(G(e.getClassNames()),A("aria-label",e.ariaLabel)("aria-hidden",e.ariaHidden)("role",e.role),N(),A("clip-path",e.pathId),N(3),M("id",e.pathId))},encapsulation:2})}return c})();var K6=({dt:c})=>`
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
`,J6={root:"p-ink"},S4=(()=>{class c extends J{name="ripple";theme=K6;classes=J6;static \u0275fac=(()=>{let l;return function(e){return(l||(l=g(c)))(e||c)}})();static \u0275prov=E({token:c,factory:c.\u0275fac})}return c})();var w4=(()=>{class c extends B{zone=v(_1);_componentStyle=v(S4);animationListener;mouseDownListener;timeout;constructor(){super(),K1(()=>{H2(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}ngAfterViewInit(){super.ngAfterViewInit()}onMouseDown(l){let s=this.getInk();if(!s||this.document.defaultView?.getComputedStyle(s,null).display==="none")return;if(p2(s,"p-ink-active"),!l1(s)&&!s1(s)){let t=Math.max(e3(this.el.nativeElement),n3(this.el.nativeElement));s.style.height=t+"px",s.style.width=t+"px"}let e=a3(this.el.nativeElement),n=l.pageX-e.left+this.document.body.scrollTop-s1(s)/2,o=l.pageY-e.top+this.document.body.scrollLeft-l1(s)/2;this.renderer.setStyle(s,"top",o+"px"),this.renderer.setStyle(s,"left",n+"px"),R2(s,"p-ink-active"),this.timeout=setTimeout(()=>{let t=this.getInk();t&&p2(t,"p-ink-active")},401)}getInk(){let l=this.el.nativeElement.children;for(let s=0;s<l.length;s++)if(typeof l[s].className=="string"&&l[s].className.indexOf("p-ink")!==-1)return l[s];return null}resetInk(){let l=this.getInk();l&&p2(l,"p-ink-active")}onAnimationEnd(l){this.timeout&&clearTimeout(this.timeout),p2(l.currentTarget,"p-ink-active")}create(){let l=this.renderer.createElement("span");this.renderer.addClass(l,"p-ink"),this.renderer.appendChild(this.el.nativeElement,l),this.renderer.setAttribute(l,"aria-hidden","true"),this.renderer.setAttribute(l,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(l,"animationend",this.onAnimationEnd.bind(this)))}remove(){let l=this.getInk();l&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,o3(l))}ngOnDestroy(){this.config&&this.config.ripple()&&this.remove(),super.ngOnDestroy()}static \u0275fac=function(s){return new(s||c)};static \u0275dir=V({type:c,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],features:[Q([S4]),S]})}return c})();var Z6=["content"],c8=["loadingicon"],l8=["icon"],s8=["*"],k4=c=>({class:c});function e8(c,a){c&1&&G1(0)}function a8(c,a){if(c&1&&I(0,"span",8),c&2){let l=D(3);M("ngClass",l.iconClass()),A("aria-hidden",!0)("data-pc-section","loadingicon")}}function n8(c,a){if(c&1&&I(0,"SpinnerIcon",9),c&2){let l=D(3);M("styleClass",l.spinnerIconClass())("spin",!0),A("aria-hidden",!0)("data-pc-section","loadingicon")}}function o8(c,a){if(c&1&&(E2(0),a2(1,a8,1,3,"span",6)(2,n8,1,4,"SpinnerIcon",7),D2()),c&2){let l=D(2);N(),M("ngIf",l.loadingIcon),N(),M("ngIf",!l.loadingIcon)}}function t8(c,a){}function i8(c,a){if(c&1&&a2(0,t8,0,0,"ng-template",10),c&2){let l=D(2);M("ngIf",l.loadingIconTemplate||l._loadingIconTemplate)}}function r8(c,a){if(c&1&&(E2(0),a2(1,o8,3,2,"ng-container",2)(2,i8,1,1,null,5),D2()),c&2){let l=D();N(),M("ngIf",!l.loadingIconTemplate&&!l._loadingIconTemplate),N(),M("ngTemplateOutlet",l.loadingIconTemplate||l._loadingIconTemplate)("ngTemplateOutletContext",Z2(3,k4,l.iconClass()))}}function f8(c,a){if(c&1&&I(0,"span",8),c&2){let l=D(2);G(l.icon),M("ngClass",l.iconClass()),A("data-pc-section","icon")}}function m8(c,a){}function z8(c,a){if(c&1&&a2(0,m8,0,0,"ng-template",10),c&2){let l=D(2);M("ngIf",!l.icon&&(l.iconTemplate||l._iconTemplate))}}function L8(c,a){if(c&1&&(E2(0),a2(1,f8,1,4,"span",11)(2,z8,1,1,null,5),D2()),c&2){let l=D();N(),M("ngIf",l.icon&&!l.iconTemplate&&!l._iconTemplate),N(),M("ngTemplateOutlet",l.iconTemplate||l._iconTemplate)("ngTemplateOutletContext",Z2(3,k4,l.iconClass()))}}function p8(c,a){if(c&1&&(Y(0,"span",12),I2(1),X()),c&2){let l=D();A("aria-hidden",l.icon&&!l.label)("data-pc-section","label"),N(),B2(l.label)}}function u8(c,a){if(c&1&&I(0,"p-badge",13),c&2){let l=D();M("value",l.badge)("severity",l.badgeSeverity)}}var d8=({dt:c})=>`
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
`,M8={root:({instance:c,props:a})=>["p-button p-component",{"p-button-icon-only":c.hasIcon&&!a.label&&!a.badge,"p-button-vertical":(a.iconPos==="top"||a.iconPos==="bottom")&&a.label,"p-button-loading":a.loading,"p-button-link":a.link,[`p-button-${a.severity}`]:a.severity,"p-button-raised":a.raised,"p-button-rounded":a.rounded,"p-button-text":a.text,"p-button-outlined":a.outlined,"p-button-sm":a.size==="small","p-button-lg":a.size==="large","p-button-plain":a.plain,"p-button-fluid":a.fluid}],loadingIcon:"p-button-loading-icon",icon:({props:c})=>["p-button-icon",{[`p-button-icon-${c.iconPos}`]:c.label}],label:"p-button-label"},v4=(()=>{class c extends J{name="button";theme=d8;classes=M8;static \u0275fac=(()=>{let l;return function(e){return(l||(l=g(c)))(e||c)}})();static \u0275prov=E({token:c,factory:c.\u0275fac})}return c})();var C8=(()=>{class c extends B{type="button";iconPos="left";icon;badge;label;disabled;loading=!1;loadingIcon;raised=!1;rounded=!1;text=!1;plain=!1;severity;outlined=!1;link=!1;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity="secondary";ariaLabel;autofocus;fluid;onClick=new T2;onFocus=new T2;onBlur=new T2;contentTemplate;loadingIconTemplate;iconTemplate;_buttonProps;get buttonProps(){return this._buttonProps}set buttonProps(l){this._buttonProps=l,l&&typeof l=="object"&&Object.entries(l).forEach(([s,e])=>this[`_${s}`]!==e&&(this[`_${s}`]=e))}get hasFluid(){let s=this.el.nativeElement.closest("p-fluid");return n2(this.fluid)?!!s:this.fluid}_componentStyle=v(v4);templates;_contentTemplate;_iconTemplate;_loadingIconTemplate;ngAfterContentInit(){this.templates?.forEach(l=>{switch(l.getType()){case"content":this._contentTemplate=l.template;break;case"icon":this._iconTemplate=l.template;break;case"loadingicon":this._loadingIconTemplate=l.template;break;default:this._contentTemplate=l.template;break}})}ngOnChanges(l){super.ngOnChanges(l);let{buttonProps:s}=l;if(s){let e=s.currentValue;for(let n in e)this[n]=e[n]}}spinnerIconClass(){return Object.entries(this.iconClass()).filter(([,l])=>!!l).reduce((l,[s])=>l+` ${s}`,"p-button-loading-icon")}iconClass(){return{[`p-button-loading-icon pi-spin ${this.loadingIcon??""}`]:this.loading,"p-button-icon":!0,"p-button-icon-left":this.iconPos==="left"&&this.label,"p-button-icon-right":this.iconPos==="right"&&this.label,"p-button-icon-top":this.iconPos==="top"&&this.label,"p-button-icon-bottom":this.iconPos==="bottom"&&this.label}}get buttonClass(){return{"p-button p-component":!0,"p-button-icon-only":(this.icon||this.iconTemplate||this._iconTemplate||this.loadingIcon||this.loadingIconTemplate||this._loadingIconTemplate)&&!this.label,"p-button-vertical":(this.iconPos==="top"||this.iconPos==="bottom")&&this.label,"p-button-loading":this.loading,"p-button-loading-label-only":this.loading&&!this.icon&&this.label&&!this.loadingIcon&&this.iconPos==="left","p-button-link":this.link,[`p-button-${this.severity}`]:this.severity,"p-button-raised":this.raised,"p-button-rounded":this.rounded,"p-button-text":this.text||this.variant=="text","p-button-outlined":this.outlined||this.variant=="outlined","p-button-sm":this.size==="small","p-button-lg":this.size==="large","p-button-plain":this.plain,"p-button-fluid":this.hasFluid,[`${this.styleClass}`]:this.styleClass}}static \u0275fac=(()=>{let l;return function(e){return(l||(l=g(c)))(e||c)}})();static \u0275cmp=k({type:c,selectors:[["p-button"]],contentQueries:function(s,e,n){if(s&1&&(h2(n,Z6,5),h2(n,c8,5),h2(n,l8,5),h2(n,t3,4)),s&2){let o;g2(o=b2())&&(e.contentTemplate=o.first),g2(o=b2())&&(e.loadingIconTemplate=o.first),g2(o=b2())&&(e.iconTemplate=o.first),g2(o=b2())&&(e.templates=o)}},inputs:{type:"type",iconPos:"iconPos",icon:"icon",badge:"badge",label:"label",disabled:[2,"disabled","disabled",b],loading:[2,"loading","loading",b],loadingIcon:"loadingIcon",raised:[2,"raised","raised",b],rounded:[2,"rounded","rounded",b],text:[2,"text","text",b],plain:[2,"plain","plain",b],severity:"severity",outlined:[2,"outlined","outlined",b],link:[2,"link","link",b],tabindex:[2,"tabindex","tabindex",Q1],size:"size",variant:"variant",style:"style",styleClass:"styleClass",badgeClass:"badgeClass",badgeSeverity:"badgeSeverity",ariaLabel:"ariaLabel",autofocus:[2,"autofocus","autofocus",b],fluid:[2,"fluid","fluid",b],buttonProps:"buttonProps"},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[Q([v4]),S,e2],ngContentSelectors:s8,decls:7,vars:14,consts:[["pRipple","",3,"click","focus","blur","ngStyle","disabled","ngClass","pAutoFocus"],[4,"ngTemplateOutlet"],[4,"ngIf"],["class","p-button-label",4,"ngIf"],[3,"value","severity",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"ngClass",4,"ngIf"],[3,"styleClass","spin",4,"ngIf"],[3,"ngClass"],[3,"styleClass","spin"],[3,"ngIf"],[3,"class","ngClass",4,"ngIf"],[1,"p-button-label"],[3,"value","severity"]],template:function(s,e){s&1&&(z2(),Y(0,"button",0),X1("click",function(o){return e.onClick.emit(o)})("focus",function(o){return e.onFocus.emit(o)})("blur",function(o){return e.onBlur.emit(o)}),L2(1),a2(2,e8,1,0,"ng-container",1)(3,r8,3,5,"ng-container",2)(4,L8,3,5,"ng-container",2)(5,p8,2,3,"span",3)(6,u8,1,2,"p-badge",4),X()),s&2&&(M("ngStyle",e.style)("disabled",e.disabled||e.loading)("ngClass",e.buttonClass)("pAutoFocus",e.autofocus),A("type",e.type)("aria-label",e.ariaLabel)("data-pc-name","button")("data-pc-section","root")("tabindex",e.tabindex),N(2),M("ngTemplateOutlet",e.contentTemplate||e._contentTemplate),N(),M("ngIf",e.loading),N(),M("ngIf",!e.loading),N(),M("ngIf",!e.contentTemplate&&!e._contentTemplate&&e.label),N(),M("ngIf",!e.contentTemplate&&!e._contentTemplate&&e.badge))},dependencies:[x2,J1,Z1,l3,c3,w4,b4,y4,N4,O1,K],encapsulation:2,changeDetection:0})}return c})(),u7=(()=>{class c{static \u0275fac=function(s){return new(s||c)};static \u0275mod=j({type:c});static \u0275inj=W({imports:[x2,C8,K,K]})}return c})();export{R8 as a,O8 as b,W8 as c,q8 as d,U8 as e,j8 as f,V8 as g,G8 as h,Y8 as i,R1 as j,g4 as k,b4 as l,K2 as m,P5 as n,y4 as o,w4 as p,C8 as q,u7 as r};
