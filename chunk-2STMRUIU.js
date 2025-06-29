import{a as J}from"./chunk-ZGF3CCGW.js";import{Aa as H,Ba as b,Ea as W,Va as K,Ya as X,c as x,f as N,g as z,k as q,r as G,z as U}from"./chunk-JVFSG5EK.js";import{Db as v,Eb as B,Hb as $,Ib as D,Jb as u,Kb as w,Oa as a,P as _,Q as c,R as C,W as T,Wb as Q,Ya as M,Yb as R,Za as I,ab as F,ba as g,ca as h,cb as y,ea as f,ib as d,jb as r,ka as S,mb as E,nb as O,ob as A,qa as V,rc as m,sc as j,tb as p,ub as k,yb as L,zb as P}from"./chunk-25VTUDJ3.js";var Y=class e{searchPhase=V("");multiSearchResource=G(()=>`${U.api.url}/search/multi?query=${this.searchPhase()}`,{defaultValue:[],parse:s=>s.results.map(t=>({imageUrl:t.media_type==="movie"||t.media_type==="tv"?t.poster_path?`https://image.tmdb.org/t/p/w300${t.poster_path}`:null:t.media_type==="person"&&t.profile_path?`https://image.tmdb.org/t/p/w300${t.profile_path}`:null,name:"title"in t?t.title:t.name,link:t.media_type==="movie"?`/movie/${t.id}`:t.media_type==="tv"?`/tv/${t.id}`:`/person/${t.id}`}))});static \u0275fac=function(t){return new(t||e)};static \u0275prov=c({token:e,factory:e.\u0275fac,providedIn:"root"})};var oe=["handle"],le=["input"],ne=e=>({checked:e});function re(e,s){e&1&&L(0)}function ae(e,s){if(e&1&&y(0,re,1,0,"ng-container",4),e&2){let t=B();r("ngTemplateOutlet",t.handleTemplate||t._handleTemplate)("ngTemplateOutletContext",R(2,ne,t.checked()))}}var se=({dt:e})=>`
.p-toggleswitch {
    display: inline-block;
    width: ${e("toggleswitch.width")};
    height: ${e("toggleswitch.height")};
}

.p-toggleswitch-input {
    cursor: pointer;
    appearance: none;
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: 1;
    outline: 0 none;
    border-radius: ${e("toggleswitch.border.radius")};
}

.p-toggleswitch-slider {
    display: inline-block;
    cursor: pointer;
    width: 100%;
    height: 100%;
    border-width: ${e("toggleswitch.border.width")};
    border-style: solid;
    border-color: ${e("toggleswitch.border.color")};
    background: ${e("toggleswitch.background")};
    transition: background ${e("toggleswitch.transition.duration")}, color ${e("toggleswitch.transition.duration")}, border-color ${e("toggleswitch.transition.duration")}, outline-color ${e("toggleswitch.transition.duration")}, box-shadow ${e("toggleswitch.transition.duration")};
    border-radius: ${e("toggleswitch.border.radius")};
    outline-color: transparent;
    box-shadow: ${e("toggleswitch.shadow")};
}

.p-toggleswitch-handle {
    position: absolute;
    top: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${e("toggleswitch.handle.background")};
    color: ${e("toggleswitch.handle.color")};
    width: ${e("toggleswitch.handle.size")};
    height: ${e("toggleswitch.handle.size")};
    inset-inline-start: ${e("toggleswitch.gap")};
    margin-block-start: calc(-1 * calc(${e("toggleswitch.handle.size")} / 2));
    border-radius: ${e("toggleswitch.handle.border.radius")};
    transition: background ${e("toggleswitch.transition.duration")}, color ${e("toggleswitch.transition.duration")}, inset-inline-start ${e("toggleswitch.slide.duration")}, box-shadow ${e("toggleswitch.slide.duration")};
}

.p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-slider {
    background: ${e("toggleswitch.checked.background")};
    border-color: ${e("toggleswitch.checked.border.color")};
}

.p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-handle {
    background: ${e("toggleswitch.handle.checked.background")};
    color: ${e("toggleswitch.handle.checked.color")};
    inset-inline-start: calc(${e("toggleswitch.width")} - calc(${e("toggleswitch.handle.size")} + ${e("toggleswitch.gap")}));
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-slider {
    background: ${e("toggleswitch.hover.background")};
    border-color: ${e("toggleswitch.hover.border.color")};
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-handle {
    background: ${e("toggleswitch.handle.hover.background")};
    color: ${e("toggleswitch.handle.hover.color")};
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-slider {
    background: ${e("toggleswitch.checked.hover.background")};
    border-color: ${e("toggleswitch.checked.hover.border.color")};
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-handle {
    background: ${e("toggleswitch.handle.checked.hover.background")};
    color: ${e("toggleswitch.handle.checked.hover.color")};
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:focus-visible) .p-toggleswitch-slider {
    box-shadow: ${e("toggleswitch.focus.ring.shadow")};
    outline: ${e("toggleswitch.focus.ring.width")} ${e("toggleswitch.focus.ring.style")} ${e("toggleswitch.focus.ring.color")};
    outline-offset: ${e("toggleswitch.focus.ring.offset")};
}

.p-toggleswitch.p-invalid > .p-toggleswitch-slider {
    border-color: ${e("toggleswitch.invalid.border.color")};
}

.p-toggleswitch.p-disabled {
    opacity: 1;
}

.p-toggleswitch.p-disabled .p-toggleswitch-slider {
    background: ${e("toggleswitch.disabled.background")};
}

.p-toggleswitch.p-disabled .p-toggleswitch-handle {
    background: ${e("toggleswitch.handle.disabled.background")};
}

/* For PrimeNG */

p-toggleSwitch.ng-invalid.ng-dirty > .p-toggleswitch > .p-toggleswitch-slider,
p-toggle-switch.ng-invalid.ng-dirty > .p-toggleswitch > .p-toggleswitch-slider,
p-toggleswitch.ng-invalid.ng-dirty > .p-toggleswitch > .p-toggleswitch-slider {
    border-color: ${e("toggleswitch.invalid.border.color")};
}`,ce={root:{position:"relative"}},ge={root:({instance:e})=>({"p-toggleswitch p-component":!0,"p-toggleswitch-checked":e.checked(),"p-disabled":e.disabled,"p-invalid":e.invalid}),input:"p-toggleswitch-input",slider:"p-toggleswitch-slider",handle:"p-toggleswitch-handle"},Z=(()=>{class e extends W{name="toggleswitch";theme=se;classes=ge;inlineStyles=ce;static \u0275fac=(()=>{let t;return function(i){return(t||(t=f(e)))(i||e)}})();static \u0275prov=c({token:e,factory:e.\u0275fac})}return e})();var he={provide:J,useExisting:_(()=>ee),multi:!0},ee=(()=>{class e extends K{style;styleClass;tabindex;inputId;name;disabled;readonly;trueValue=!0;falseValue=!1;ariaLabel;ariaLabelledBy;autofocus;onChange=new S;input;handleTemplate;_handleTemplate;modelValue=!1;focused=!1;onModelChange=()=>{};onModelTouched=()=>{};_componentStyle=T(Z);templates;ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"handle":this._handleTemplate=t.template;break;default:this._handleTemplate=t.template;break}})}onClick(t){!this.disabled&&!this.readonly&&(this.modelValue=this.checked()?this.falseValue:this.trueValue,this.onModelChange(this.modelValue),this.onChange.emit({originalEvent:t,checked:this.modelValue}),this.input.nativeElement.focus())}onFocus(){this.focused=!0}onBlur(){this.focused=!1,this.onModelTouched()}writeValue(t){this.modelValue=t,this.cd.markForCheck()}registerOnChange(t){this.onModelChange=t}registerOnTouched(t){this.onModelTouched=t}setDisabledState(t){this.disabled=t,this.cd.markForCheck()}checked(){return this.modelValue===this.trueValue}static \u0275fac=(()=>{let t;return function(i){return(t||(t=f(e)))(i||e)}})();static \u0275cmp=M({type:e,selectors:[["p-toggleswitch"],["p-toggleSwitch"],["p-toggle-switch"]],contentQueries:function(o,i,l){if(o&1&&($(l,oe,4),$(l,H,4)),o&2){let n;u(n=w())&&(i.handleTemplate=n.first),u(n=w())&&(i.templates=n)}},viewQuery:function(o,i){if(o&1&&D(le,5),o&2){let l;u(l=w())&&(i.input=l.first)}},inputs:{style:"style",styleClass:"styleClass",tabindex:[2,"tabindex","tabindex",j],inputId:"inputId",name:"name",disabled:[2,"disabled","disabled",m],readonly:[2,"readonly","readonly",m],trueValue:"trueValue",falseValue:"falseValue",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",autofocus:[2,"autofocus","autofocus",m]},outputs:{onChange:"onChange"},features:[Q([he,Z]),F],decls:6,vars:23,consts:[["input",""],[3,"click","ngClass","ngStyle"],["type","checkbox","role","switch",3,"focus","blur","ngClass","checked","disabled","pAutoFocus"],[3,"ngClass"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(o,i){if(o&1){let l=P();p(0,"div",1),v("click",function(te){return g(l),h(i.onClick(te))}),p(1,"input",2,0),v("focus",function(){return g(l),h(i.onFocus())})("blur",function(){return g(l),h(i.onBlur())}),k(),p(3,"span",3)(4,"div",3),y(5,ae,1,4,"ng-container"),k()()()}o&2&&(E(i.sx("root")),O(i.styleClass),r("ngClass",i.cx("root"))("ngStyle",i.style),d("data-pc-name","toggleswitch")("data-pc-section","root"),a(),r("ngClass",i.cx("input"))("checked",i.checked())("disabled",i.disabled)("pAutoFocus",i.autofocus),d("id",i.inputId)("aria-checked",i.checked())("aria-labelledby",i.ariaLabelledBy)("aria-label",i.ariaLabel)("name",i.name)("tabindex",i.tabindex)("data-pc-section","hiddenInput"),a(2),r("ngClass",i.cx("slider")),d("data-pc-section","slider"),a(),r("ngClass",i.cx("handle")),a(),A(i.handleTemplate||i._handleTemplate?5:-1))},dependencies:[q,x,z,N,X,b],encapsulation:2,changeDetection:0})}return e})(),De=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275mod=I({type:e});static \u0275inj=C({imports:[ee,b,b]})}return e})();export{Y as a,ee as b,De as c};
