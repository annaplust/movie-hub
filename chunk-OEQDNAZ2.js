import{ba as u,ea as B,ha as A}from"./chunk-2KXCTR5L.js";import{c as E,f as T,k as R,x as H}from"./chunk-J5LE5QTC.js";import{Cb as r,Ka as S,Kb as y,Lb as k,Ma as a,O as w,P,U as O,Ub as D,Wa as g,Xa as z,Xb as $,_a as I,a as d,ab as C,b as h,ca as x,gb as F,hb as m,lb as f,ma as l,mb as p,nb as L,pb as b,qb as M,rb as s,sb as c,tb as _}from"./chunk-NM4URTZ5.js";var Y=({dt:e})=>`
.p-skeleton {
    overflow: hidden;
    background: ${e("skeleton.background")};
    border-radius: ${e("skeleton.border.radius")};
}

.p-skeleton::after {
    content: "";
    animation: p-skeleton-animation 1.2s infinite;
    height: 100%;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transform: translateX(-100%);
    z-index: 1;
    background: linear-gradient(90deg, rgba(255, 255, 255, 0), ${e("skeleton.animation.background")}, rgba(255, 255, 255, 0));
}

[dir='rtl'] .p-skeleton::after {
    animation-name: p-skeleton-animation-rtl;
}

.p-skeleton-circle {
    border-radius: 50%;
}

.p-skeleton-animation-none::after {
    animation: none;
}

@keyframes p-skeleton-animation {
    from {
        transform: translateX(-100%);
    }
    to {
        transform: translateX(100%);
    }
}

@keyframes p-skeleton-animation-rtl {
    from {
        transform: translateX(100%);
    }
    to {
        transform: translateX(-100%);
    }
}
`,Z={root:{position:"relative"}},q={root:({props:e})=>["p-skeleton p-component",{"p-skeleton-circle":e.shape==="circle","p-skeleton-animation-none":e.animation==="none"}]},j=(()=>{class e extends B{name="skeleton";theme=Y;classes=q;inlineStyles=Z;static \u0275fac=(()=>{let t;return function(i){return(t||(t=x(e)))(i||e)}})();static \u0275prov=w({token:e,factory:e.\u0275fac})}return e})();var v=(()=>{class e extends A{styleClass;style;shape="rectangle";animation="wave";borderRadius;size;width="100%";height="1rem";_componentStyle=O(j);containerClass(){return{"p-skeleton p-component":!0,"p-skeleton-circle":this.shape==="circle","p-skeleton-animation-none":this.animation==="none"}}get containerStyle(){let t=this._componentStyle?.inlineStyles.root,n;return this.size?n=h(d(d({},this.style),t),{width:this.size,height:this.size,borderRadius:this.borderRadius}):n=d(h(d({},t),{width:this.width,height:this.height,borderRadius:this.borderRadius}),this.style),n}static \u0275fac=(()=>{let t;return function(i){return(t||(t=x(e)))(i||e)}})();static \u0275cmp=g({type:e,selectors:[["p-skeleton"]],inputs:{styleClass:"styleClass",style:"style",shape:"shape",animation:"animation",borderRadius:"borderRadius",size:"size",width:"width",height:"height"},features:[D([j]),I],decls:1,vars:7,consts:[[3,"ngClass","ngStyle"]],template:function(n,i){n&1&&_(0,"div",0),n&2&&(f(i.styleClass),m("ngClass",i.containerClass())("ngStyle",i.containerStyle),F("data-pc-name","skeleton")("aria-hidden",!0)("data-pc-section","root"))},dependencies:[R,E,T,u],encapsulation:2,changeDetection:0})}return e})(),N=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=z({type:e});static \u0275inj=P({imports:[v,u,u]})}return e})();var V=(e,o)=>[e,o],J=(e,o)=>o.id;function K(e,o){if(e&1&&_(0,"img",5),e&2){let t=r().$implicit,n=r(2);f(n.size()),m("src",t[n.image()],S)}}function Q(e,o){if(e&1&&(s(0,"span",3),y(1),c()),e&2){let t=r().$implicit,n=r(2);a(),k(t[n.header()])}}function W(e,o){if(e&1&&(s(0,"span",4),y(1),c()),e&2){let t=r().$implicit,n=r(2);a(),k(t[n.subheader()])}}function ee(e,o){if(e&1&&(s(0,"a",1),C(1,K,1,3,"img",2)(2,Q,2,1,"span",3)(3,W,2,1,"span",4),c()),e&2){let t,n=o.$implicit,i=r(2);m("routerLink",$(4,V,`/${(t=i.route())!==null&&t!==void 0?t:n.media_type}`,n.id)),a(),p(i.image()?1:-1),a(),p(i.header()?2:-1),a(),p(i.subheader()?3:-1)}}function te(e,o){if(e&1&&b(0,ee,4,7,"a",1,J),e&2){let t=r();M(t.items())}}function ne(e,o){e&1&&(s(0,"div",6),_(1,"p-skeleton",7),c())}function oe(e,o){if(e&1&&b(0,ne,2,0,"div",6,L),e&2){let t=r();M(t.skeletonArray)}}var U=class e{items=l.required();size=l("md");route=l();image=l(null);header=l(null);subheader=l(null);loading=l(!0);skeletonArray=Array(10);static \u0275fac=function(t){return new(t||e)};static \u0275cmp=g({type:e,selectors:[["app-horizontal-scroll-list"]],inputs:{items:[1,"items"],size:[1,"size"],route:[1,"route"],image:[1,"image"],header:[1,"header"],subheader:[1,"subheader"],loading:[1,"loading"]},decls:3,vars:1,consts:[["cdkScrollable","",1,"scroll"],[1,"scroll__item",3,"routerLink"],[3,"src","class"],[1,"header"],[1,"subheader"],[3,"src"],[1,"scroll__item","skeleton-item"],["width","150px","height","225px"]],template:function(t,n){t&1&&(s(0,"div",0),C(1,te,2,0)(2,oe,2,0),c()),t&2&&(a(),p(n.loading()?2:1))},dependencies:[H,N,v],styles:[".scroll[_ngcontent-%COMP%]{overflow-x:auto;overflow-y:hidden;white-space:nowrap;padding:16px 0 20px;display:flex;gap:20px;scroll-behavior:smooth}.scroll[_ngcontent-%COMP%]::-webkit-scrollbar{height:6px}.scroll[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:#0000001a;border-radius:3px}.scroll[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:#ffffff4d;border-radius:3px}.scroll[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:#ffffff80}.scroll__item[_ngcontent-%COMP%]{text-align:center;display:flex;flex-direction:column;gap:10px;color:#fff;width:150px;flex-shrink:0;text-decoration:none;transition:all .3s ease;cursor:pointer}.scroll__item[_ngcontent-%COMP%]:hover{transform:translateY(-4px)}.scroll__item[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{box-shadow:0 8px 25px #0006}.scroll__item[_ngcontent-%COMP%]:focus-visible{outline-offset:4px;border-radius:12px}.scroll__item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:150px;height:auto;border-radius:12px;display:block;margin-bottom:8px;box-shadow:0 4px 12px #0003;transition:all .3s ease;object-fit:cover}.scroll__item[_ngcontent-%COMP%]   img.sm[_ngcontent-%COMP%]{width:120px}.scroll__item[_ngcontent-%COMP%]   img.md[_ngcontent-%COMP%]{width:150px}.scroll__item[_ngcontent-%COMP%]   img.lg[_ngcontent-%COMP%]{width:220px}.scroll__item[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis;font-weight:600;line-height:1.3;transition:color .2s ease;text-shadow:0 1px 3px rgba(0,0,0,.3)}.scroll__item[_ngcontent-%COMP%]   .subheader[_ngcontent-%COMP%]{font-size:.825rem;overflow:hidden;text-overflow:ellipsis;opacity:.8;font-weight:400;line-height:1.2;text-shadow:0 1px 2px rgba(0,0,0,.2)}@media (max-width: 768px){.scroll[_ngcontent-%COMP%]{padding:12px 0 16px;gap:16px}.scroll__item[_ngcontent-%COMP%], .scroll__item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:130px}.scroll__item[_ngcontent-%COMP%]   img.sm[_ngcontent-%COMP%]{width:110px}.scroll__item[_ngcontent-%COMP%]   img.md[_ngcontent-%COMP%]{width:130px}.scroll__item[_ngcontent-%COMP%]   img.lg[_ngcontent-%COMP%]{width:180px}.scroll__item[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{font-size:14px}.scroll__item[_ngcontent-%COMP%]   .subheader[_ngcontent-%COMP%]{font-size:.75rem}}@media (min-width: 1024px){.scroll[_ngcontent-%COMP%]{gap:24px;padding:20px 0 24px}.scroll__item[_ngcontent-%COMP%]:hover{transform:translateY(-6px) scale(1.02)}}"]})};var ie="https://image.tmdb.org/t/p",re="https://media.themoviedb.org/t/p";var le="w276_and_h350_face",Pe=(e,o)=>e?`${ie}/${o}${e}`:"",Oe=(e,o=le)=>e?`${re}/${o}${e}`:"";export{Pe as a,Oe as b,v as c,N as d,U as e};
