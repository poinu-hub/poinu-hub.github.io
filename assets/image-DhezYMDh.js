import{i as at,e as ot,g as z,d as Bt,f as _t,m as Y,h as Mt,a as d,j as N,T as Ee,p as M,k as Ft,u as X,l as ge,I as ie,n as it,q as rt,r as Ve,s as Le,t as st,v as lt,V as Ie,x as re,F as fe,y as ct,z as Nt,A as ut,B as Dt,C as O,D as Te,E as dt,G as $,H as U,J as Re,K as R,L as Ht,M as he,N as j,O as W,P as He,Q as Be,R as ft,S as Wt,U as ye,W as vt,X as We,Y as zt,Z as Q,_ as $t,$ as jt,a0 as mt,a1 as qt,a2 as Ut,a3 as Yt,a4 as Xt,a5 as gt,a6 as Gt,a7 as Jt,a8 as Kt,a9 as Zt,aa as Qt,ab as en,ac as ht,ad as tn,ae as nn,w as _,af as ne,o as an,b as le,ag as on}from"./index-7iQxqR-J.js";import{_ as rn}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{b as sn,a as ze,V as $e}from"./VRow-B-iEVqEk.js";import{m as _e,a as ln,b as yt,u as bt,c as wt,d as cn,V as ke,g as St,e as un,f as dn,h as fn,i as vn,R as mn,j as gn,k as hn,l as yn,n as bn,L as wn,p as je,o as be,q as we,r as qe,s as Ue,t as Sn,v as xn,w as ce}from"./VBtn-C94k85xh.js";class G{constructor(n){let{x:t,y:a,width:o,height:i}=n;this.x=t,this.y=a,this.width=o,this.height=i}get top(){return this.y}get bottom(){return this.y+this.height}get left(){return this.x}get right(){return this.x+this.width}}function Ye(e,n){return{x:{before:Math.max(0,n.left-e.left),after:Math.max(0,e.right-n.right)},y:{before:Math.max(0,n.top-e.top),after:Math.max(0,e.bottom-n.bottom)}}}function xt(e){return Array.isArray(e)?new G({x:e[0],y:e[1],width:0,height:0}):e.getBoundingClientRect()}function Ct(e){const n=e.getBoundingClientRect(),t=getComputedStyle(e),a=t.transform;if(a){let o,i,s,r,c;if(a.startsWith("matrix3d("))o=a.slice(9,-1).split(/, /),i=+o[0],s=+o[5],r=+o[12],c=+o[13];else if(a.startsWith("matrix("))o=a.slice(7,-1).split(/, /),i=+o[0],s=+o[3],r=+o[4],c=+o[5];else return new G(n);const u=t.transformOrigin,l=n.x-r-(1-i)*parseFloat(u),g=n.y-c-(1-s)*parseFloat(u.slice(u.indexOf(" ")+1)),h=i?n.width/i:e.offsetWidth+1,m=s?n.height/s:e.offsetHeight+1;return new G({x:l,y:g,width:h,height:m})}else return new G(n)}function oe(e,n,t){if(typeof e.animate>"u")return{finished:Promise.resolve()};let a;try{a=e.animate(n,t)}catch{return{finished:Promise.resolve()}}return typeof a.finished>"u"&&(a.finished=new Promise(o=>{a.onfinish=()=>{o(a)}})),a}const ue=new WeakMap;function Cn(e,n){Object.keys(n).forEach(t=>{if(at(t)){const a=ot(t),o=ue.get(e);if(n[t]==null)o==null||o.forEach(i=>{const[s,r]=i;s===a&&(e.removeEventListener(a,r),o.delete(i))});else if(!o||![...o].some(i=>i[0]===a&&i[1]===n[t])){e.addEventListener(a,n[t]);const i=o||new Set;i.add([a,n[t]]),ue.has(e)||ue.set(e,i)}}else n[t]==null?e.removeAttribute(t):e.setAttribute(t,n[t])})}function pn(e,n){Object.keys(n).forEach(t=>{if(at(t)){const a=ot(t),o=ue.get(e);o==null||o.forEach(i=>{const[s,r]=i;s===a&&(e.removeEventListener(a,r),o.delete(i))})}else e.removeAttribute(t)})}function pt(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",t=arguments.length>2?arguments[2]:void 0;return z()({name:t??Bt(_t(e.replace(/__/g,"-"))),props:{tag:{type:String,default:n},...Y()},setup(a,o){let{slots:i}=o;return()=>{var s;return Mt(a.tag,{class:[e,a.class],style:a.style},(s=i.default)==null?void 0:s.call(i))}}})}function Et(e){if(typeof e.getRootNode!="function"){for(;e.parentNode;)e=e.parentNode;return e!==document?null:document}const n=e.getRootNode();return n!==document&&n.getRootNode({composed:!0})!==document?null:n}const Pe="cubic-bezier(0.4, 0, 0.2, 1)",En="cubic-bezier(0.0, 0, 0.2, 1)",kn="cubic-bezier(0.4, 0, 1, 1)";function Pn(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;for(;e;){if(n?An(e):Me(e))return e;e=e.parentElement}return document.scrollingElement}function ve(e,n){const t=[];if(n&&e&&!n.contains(e))return t;for(;e&&(Me(e)&&t.push(e),e!==n);)e=e.parentElement;return t}function Me(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const n=window.getComputedStyle(e);return n.overflowY==="scroll"||n.overflowY==="auto"&&e.scrollHeight>e.clientHeight}function An(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const n=window.getComputedStyle(e);return["scroll","auto"].includes(n.overflowY)}function On(e){for(;e;){if(window.getComputedStyle(e).position==="fixed")return!0;e=e.offsetParent}return!1}const Vn=M({target:[Object,Array]},"v-dialog-transition"),Ln=z()({name:"VDialogTransition",props:Vn(),setup(e,n){let{slots:t}=n;const a={onBeforeEnter(o){o.style.pointerEvents="none",o.style.visibility="hidden"},async onEnter(o,i){var h;await new Promise(m=>requestAnimationFrame(m)),await new Promise(m=>requestAnimationFrame(m)),o.style.visibility="";const{x:s,y:r,sx:c,sy:u,speed:l}=Ge(e.target,o),g=oe(o,[{transform:`translate(${s}px, ${r}px) scale(${c}, ${u})`,opacity:0},{}],{duration:225*l,easing:En});(h=Xe(o))==null||h.forEach(m=>{oe(m,[{opacity:0},{opacity:0,offset:.33},{}],{duration:225*2*l,easing:Pe})}),g.finished.then(()=>i())},onAfterEnter(o){o.style.removeProperty("pointer-events")},onBeforeLeave(o){o.style.pointerEvents="none"},async onLeave(o,i){var h;await new Promise(m=>requestAnimationFrame(m));const{x:s,y:r,sx:c,sy:u,speed:l}=Ge(e.target,o);oe(o,[{},{transform:`translate(${s}px, ${r}px) scale(${c}, ${u})`,opacity:0}],{duration:125*l,easing:kn}).finished.then(()=>i()),(h=Xe(o))==null||h.forEach(m=>{oe(m,[{},{opacity:0,offset:.2},{opacity:0}],{duration:125*2*l,easing:Pe})})},onAfterLeave(o){o.style.removeProperty("pointer-events")}};return()=>e.target?d(Ee,N({name:"dialog-transition"},a,{css:!1}),t):d(Ee,{name:"dialog-transition"},t)}});function Xe(e){var t;const n=(t=e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list"))==null?void 0:t.children;return n&&[...n]}function Ge(e,n){const t=xt(e),a=Ct(n),[o,i]=getComputedStyle(n).transformOrigin.split(" ").map(k=>parseFloat(k)),[s,r]=getComputedStyle(n).getPropertyValue("--v-overlay-anchor-origin").split(" ");let c=t.left+t.width/2;s==="left"||r==="left"?c-=t.width/2:(s==="right"||r==="right")&&(c+=t.width/2);let u=t.top+t.height/2;s==="top"||r==="top"?u-=t.height/2:(s==="bottom"||r==="bottom")&&(u+=t.height/2);const l=t.width/a.width,g=t.height/a.height,h=Math.max(1,l,g),m=l/h||0,y=g/h||0,v=a.width*a.height/(window.innerWidth*window.innerHeight),w=v>.12?Math.min(1.5,(v-.12)*10+1):1;return{x:c-(o+a.left),y:u-(i+a.top),sx:m,sy:y,speed:w}}const In=pt("v-spacer","div","VSpacer"),Tn=z()({name:"VCardActions",props:Y(),setup(e,n){let{slots:t}=n;return Ft({VBtn:{slim:!0,variant:"text"}}),X(()=>{var a;return d("div",{class:["v-card-actions",e.class],style:e.style},[(a=t.default)==null?void 0:a.call(t)])}),{}}}),Rn=M({opacity:[Number,String],...Y(),...ge()},"VCardSubtitle"),Bn=z()({name:"VCardSubtitle",props:Rn(),setup(e,n){let{slots:t}=n;return X(()=>d(e.tag,{class:["v-card-subtitle",e.class],style:[{"--v-card-subtitle-opacity":e.opacity},e.style]},t)),{}}}),_n=pt("v-card-title"),Mn=M({start:Boolean,end:Boolean,icon:ie,image:String,text:String,...it(),...Y(),..._e(),...rt(),...ln(),...ge(),...Ve(),...yt({variant:"flat"})},"VAvatar"),Je=z()({name:"VAvatar",props:Mn(),setup(e,n){let{slots:t}=n;const{themeClasses:a}=Le(e),{borderClasses:o}=st(e),{colorClasses:i,colorStyles:s,variantClasses:r}=bt(e),{densityClasses:c}=wt(e),{roundedClasses:u}=lt(e),{sizeClasses:l,sizeStyles:g}=cn(e);return X(()=>d(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},a.value,o.value,i.value,c.value,u.value,l.value,r.value,e.class],style:[s.value,g.value,e.style]},{default:()=>[t.default?d(re,{key:"content-defaults",defaults:{VImg:{cover:!0,src:e.image},VIcon:{icon:e.icon}}},{default:()=>[t.default()]}):e.image?d(Ie,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?d(ke,{key:"icon",icon:e.icon},null):e.text,St(!1,"v-avatar")]})),{}}}),Fn=M({appendAvatar:String,appendIcon:ie,prependAvatar:String,prependIcon:ie,subtitle:[String,Number],title:[String,Number],...Y(),..._e()},"VCardItem"),Nn=z()({name:"VCardItem",props:Fn(),setup(e,n){let{slots:t}=n;return X(()=>{var u;const a=!!(e.prependAvatar||e.prependIcon),o=!!(a||t.prepend),i=!!(e.appendAvatar||e.appendIcon),s=!!(i||t.append),r=!!(e.title!=null||t.title),c=!!(e.subtitle!=null||t.subtitle);return d("div",{class:["v-card-item",e.class],style:e.style},[o&&d("div",{key:"prepend",class:"v-card-item__prepend"},[t.prepend?d(re,{key:"prepend-defaults",disabled:!a,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon}}},t.prepend):d(fe,null,[e.prependAvatar&&d(Je,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&d(ke,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)])]),d("div",{class:"v-card-item__content"},[r&&d(_n,{key:"title"},{default:()=>{var l;return[((l=t.title)==null?void 0:l.call(t))??e.title]}}),c&&d(Bn,{key:"subtitle"},{default:()=>{var l;return[((l=t.subtitle)==null?void 0:l.call(t))??e.subtitle]}}),(u=t.default)==null?void 0:u.call(t)]),s&&d("div",{key:"append",class:"v-card-item__append"},[t.append?d(re,{key:"append-defaults",disabled:!i,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon}}},t.append):d(fe,null,[e.appendIcon&&d(ke,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&d(Je,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)])])])}),{}}}),Dn=M({opacity:[Number,String],...Y(),...ge()},"VCardText"),Hn=z()({name:"VCardText",props:Dn(),setup(e,n){let{slots:t}=n;return X(()=>d(e.tag,{class:["v-card-text",e.class],style:[{"--v-card-text-opacity":e.opacity},e.style]},t)),{}}}),Wn=M({appendAvatar:String,appendIcon:ie,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:ie,ripple:{type:[Boolean,Object],default:!0},subtitle:[String,Number],text:[String,Number],title:[String,Number],...it(),...Y(),..._e(),...ct(),...Nt(),...un(),...dn(),...fn(),...rt(),...vn(),...ge(),...Ve(),...yt({variant:"elevated"})},"VCard"),zn=z()({name:"VCard",directives:{Ripple:mn},props:Wn(),setup(e,n){let{attrs:t,slots:a}=n;const{themeClasses:o}=Le(e),{borderClasses:i}=st(e),{colorClasses:s,colorStyles:r,variantClasses:c}=bt(e),{densityClasses:u}=wt(e),{dimensionStyles:l}=ut(e),{elevationClasses:g}=Dt(e),{loaderClasses:h}=gn(e),{locationStyles:m}=hn(e),{positionClasses:y}=yn(e),{roundedClasses:v}=lt(e),w=bn(e,t),k=O(()=>e.link!==!1&&w.isLink.value),p=O(()=>!e.disabled&&e.link!==!1&&(e.link||w.isClickable.value));return X(()=>{const E=k.value?"a":e.tag,V=!!(a.title||e.title!=null),I=!!(a.subtitle||e.subtitle!=null),B=V||I,A=!!(a.append||e.appendAvatar||e.appendIcon),f=!!(a.prepend||e.prependAvatar||e.prependIcon),L=!!(a.image||e.image),ee=B||f||A,P=!!(a.text||e.text!=null);return Te(d(E,N({class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":p.value},o.value,i.value,s.value,u.value,g.value,h.value,y.value,v.value,c.value,e.class],style:[r.value,l.value,m.value,e.style],onClick:p.value&&w.navigate,tabindex:e.disabled?-1:void 0},w.linkProps),{default:()=>{var x;return[L&&d("div",{key:"image",class:"v-card__image"},[a.image?d(re,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},a.image):d(Ie,{key:"image-img",cover:!0,src:e.image},null)]),d(wn,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:a.loader}),ee&&d(Nn,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:a.item,prepend:a.prepend,title:a.title,subtitle:a.subtitle,append:a.append}),P&&d(Hn,{key:"text"},{default:()=>{var b;return[((b=a.text)==null?void 0:b.call(a))??e.text]}}),(x=a.default)==null?void 0:x.call(a),a.actions&&d(Tn,null,{default:a.actions}),St(p.value,"v-card")]}}),[[dt("ripple"),p.value&&e.ripple]])}),{}}});function Se(e,n){return{x:e.x+n.x,y:e.y+n.y}}function $n(e,n){return{x:e.x-n.x,y:e.y-n.y}}function Ke(e,n){if(e.side==="top"||e.side==="bottom"){const{side:t,align:a}=e,o=a==="left"?0:a==="center"?n.width/2:a==="right"?n.width:a,i=t==="top"?0:t==="bottom"?n.height:t;return Se({x:o,y:i},n)}else if(e.side==="left"||e.side==="right"){const{side:t,align:a}=e,o=t==="left"?0:t==="right"?n.width:t,i=a==="top"?0:a==="center"?n.height/2:a==="bottom"?n.height:a;return Se({x:o,y:i},n)}return Se({x:n.width/2,y:n.height/2},n)}const kt={static:Un,connected:Xn},jn=M({locationStrategy:{type:[String,Function],default:"static",validator:e=>typeof e=="function"||e in kt},location:{type:String,default:"bottom"},origin:{type:String,default:"auto"},offset:[Number,String,Array]},"VOverlay-location-strategies");function qn(e,n){const t=$({}),a=$();U&&Re(()=>!!(n.isActive.value&&e.locationStrategy),i=>{var s,r;R(()=>e.locationStrategy,i),j(()=>{window.removeEventListener("resize",o),a.value=void 0}),window.addEventListener("resize",o,{passive:!0}),typeof e.locationStrategy=="function"?a.value=(s=e.locationStrategy(n,e,t))==null?void 0:s.updateLocation:a.value=(r=kt[e.locationStrategy](n,e,t))==null?void 0:r.updateLocation});function o(i){var s;(s=a.value)==null||s.call(a,i)}return{contentStyles:t,updateLocation:a}}function Un(){}function Yn(e,n){const t=Ct(e);return n?t.x+=parseFloat(e.style.right||0):t.x-=parseFloat(e.style.left||0),t.y-=parseFloat(e.style.top||0),t}function Xn(e,n,t){(Array.isArray(e.target.value)||On(e.target.value))&&Object.assign(t.value,{position:"fixed",top:0,[e.isRtl.value?"right":"left"]:0});const{preferredAnchor:o,preferredOrigin:i}=Ht(()=>{const y=je(n.location,e.isRtl.value),v=n.origin==="overlap"?y:n.origin==="auto"?be(y):je(n.origin,e.isRtl.value);return y.side===v.side&&y.align===we(v).align?{preferredAnchor:qe(y),preferredOrigin:qe(v)}:{preferredAnchor:y,preferredOrigin:v}}),[s,r,c,u]=["minWidth","minHeight","maxWidth","maxHeight"].map(y=>O(()=>{const v=parseFloat(n[y]);return isNaN(v)?1/0:v})),l=O(()=>{if(Array.isArray(n.offset))return n.offset;if(typeof n.offset=="string"){const y=n.offset.split(" ").map(parseFloat);return y.length<2&&y.push(0),y}return typeof n.offset=="number"?[n.offset,0]:[0,0]});let g=!1;const h=new ResizeObserver(()=>{g&&m()});R([e.target,e.contentEl],(y,v)=>{let[w,k]=y,[p,E]=v;p&&!Array.isArray(p)&&h.unobserve(p),w&&!Array.isArray(w)&&h.observe(w),E&&h.unobserve(E),k&&h.observe(k)},{immediate:!0}),j(()=>{h.disconnect()});function m(){if(g=!1,requestAnimationFrame(()=>g=!0),!e.target.value||!e.contentEl.value)return;const y=xt(e.target.value),v=Yn(e.contentEl.value,e.isRtl.value),w=ve(e.contentEl.value),k=12;w.length||(w.push(document.documentElement),e.contentEl.value.style.top&&e.contentEl.value.style.left||(v.x-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x")||0),v.y-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y")||0)));const p=w.reduce((P,x)=>{const b=x.getBoundingClientRect(),C=new G({x:x===document.documentElement?0:b.x,y:x===document.documentElement?0:b.y,width:x.clientWidth,height:x.clientHeight});return P?new G({x:Math.max(P.left,C.left),y:Math.max(P.top,C.top),width:Math.min(P.right,C.right)-Math.max(P.left,C.left),height:Math.min(P.bottom,C.bottom)-Math.max(P.top,C.top)}):C},void 0);p.x+=k,p.y+=k,p.width-=k*2,p.height-=k*2;let E={anchor:o.value,origin:i.value};function V(P){const x=new G(v),b=Ke(P.anchor,y),C=Ke(P.origin,x);let{x:D,y:H}=$n(b,C);switch(P.anchor.side){case"top":H-=l.value[0];break;case"bottom":H+=l.value[0];break;case"left":D-=l.value[0];break;case"right":D+=l.value[0];break}switch(P.anchor.align){case"top":H-=l.value[1];break;case"bottom":H+=l.value[1];break;case"left":D-=l.value[1];break;case"right":D+=l.value[1];break}return x.x+=D,x.y+=H,x.width=Math.min(x.width,c.value),x.height=Math.min(x.height,u.value),{overflows:Ye(x,p),x:D,y:H}}let I=0,B=0;const A={x:0,y:0},f={x:!1,y:!1};let L=-1;for(;!(L++>10);){const{x:P,y:x,overflows:b}=V(E);I+=P,B+=x,v.x+=P,v.y+=x;{const C=Ue(E.anchor),D=b.x.before||b.x.after,H=b.y.before||b.y.after;let J=!1;if(["x","y"].forEach(T=>{if(T==="x"&&D&&!f.x||T==="y"&&H&&!f.y){const q={anchor:{...E.anchor},origin:{...E.origin}},K=T==="x"?C==="y"?we:be:C==="y"?be:we;q.anchor=K(q.anchor),q.origin=K(q.origin);const{overflows:Z}=V(q);(Z[T].before<=b[T].before&&Z[T].after<=b[T].after||Z[T].before+Z[T].after<(b[T].before+b[T].after)/2)&&(E=q,J=f[T]=!0)}}),J)continue}b.x.before&&(I+=b.x.before,v.x+=b.x.before),b.x.after&&(I-=b.x.after,v.x-=b.x.after),b.y.before&&(B+=b.y.before,v.y+=b.y.before),b.y.after&&(B-=b.y.after,v.y-=b.y.after);{const C=Ye(v,p);A.x=p.width-C.x.before-C.x.after,A.y=p.height-C.y.before-C.y.after,I+=C.x.before,v.x+=C.x.before,B+=C.y.before,v.y+=C.y.before}break}const ee=Ue(E.anchor);return Object.assign(t.value,{"--v-overlay-anchor-origin":`${E.anchor.side} ${E.anchor.align}`,transformOrigin:`${E.origin.side} ${E.origin.align}`,top:W(xe(B)),left:e.isRtl.value?void 0:W(xe(I)),right:e.isRtl.value?W(xe(-I)):void 0,minWidth:W(ee==="y"?Math.min(s.value,y.width):s.value),maxWidth:W(Ze(He(A.x,s.value===1/0?0:s.value,c.value))),maxHeight:W(Ze(He(A.y,r.value===1/0?0:r.value,u.value)))}),{available:A,contentBox:v}}return R(()=>[o.value,i.value,n.offset,n.minWidth,n.minHeight,n.maxWidth,n.maxHeight],()=>m()),he(()=>{const y=m();if(!y)return;const{available:v,contentBox:w}=y;w.height>v.y&&requestAnimationFrame(()=>{m(),requestAnimationFrame(()=>{m()})})}),{updateLocation:m}}function xe(e){return Math.round(e*devicePixelRatio)/devicePixelRatio}function Ze(e){return Math.ceil(e*devicePixelRatio)/devicePixelRatio}let Ae=!0;const me=[];function Gn(e){!Ae||me.length?(me.push(e),Oe()):(Ae=!1,e(),Oe())}let Qe=-1;function Oe(){cancelAnimationFrame(Qe),Qe=requestAnimationFrame(()=>{const e=me.shift();e&&e(),me.length?Oe():Ae=!0})}const de={none:null,close:Zn,block:Qn,reposition:ea},Jn=M({scrollStrategy:{type:[String,Function],default:"block",validator:e=>typeof e=="function"||e in de}},"VOverlay-scroll-strategies");function Kn(e,n){if(!U)return;let t;Be(async()=>{t==null||t.stop(),n.isActive.value&&e.scrollStrategy&&(t=ft(),await new Promise(a=>setTimeout(a)),t.active&&t.run(()=>{var a;typeof e.scrollStrategy=="function"?e.scrollStrategy(n,e,t):(a=de[e.scrollStrategy])==null||a.call(de,n,e,t)}))}),j(()=>{t==null||t.stop()})}function Zn(e){function n(t){e.isActive.value=!1}Pt(e.targetEl.value??e.contentEl.value,n)}function Qn(e,n){var s;const t=(s=e.root.value)==null?void 0:s.offsetParent,a=[...new Set([...ve(e.targetEl.value,n.contained?t:void 0),...ve(e.contentEl.value,n.contained?t:void 0)])].filter(r=>!r.classList.contains("v-overlay-scroll-blocked")),o=window.innerWidth-document.documentElement.offsetWidth,i=(r=>Me(r)&&r)(t||document.documentElement);i&&e.root.value.classList.add("v-overlay--scroll-blocked"),a.forEach((r,c)=>{r.style.setProperty("--v-body-scroll-x",W(-r.scrollLeft)),r.style.setProperty("--v-body-scroll-y",W(-r.scrollTop)),r!==document.documentElement&&r.style.setProperty("--v-scrollbar-offset",W(o)),r.classList.add("v-overlay-scroll-blocked")}),j(()=>{a.forEach((r,c)=>{const u=parseFloat(r.style.getPropertyValue("--v-body-scroll-x")),l=parseFloat(r.style.getPropertyValue("--v-body-scroll-y")),g=r.style.scrollBehavior;r.style.scrollBehavior="auto",r.style.removeProperty("--v-body-scroll-x"),r.style.removeProperty("--v-body-scroll-y"),r.style.removeProperty("--v-scrollbar-offset"),r.classList.remove("v-overlay-scroll-blocked"),r.scrollLeft=-u,r.scrollTop=-l,r.style.scrollBehavior=g}),i&&e.root.value.classList.remove("v-overlay--scroll-blocked")})}function ea(e,n,t){let a=!1,o=-1,i=-1;function s(r){Gn(()=>{var l,g;const c=performance.now();(g=(l=e.updateLocation).value)==null||g.call(l,r),a=(performance.now()-c)/(1e3/60)>2})}i=(typeof requestIdleCallback>"u"?r=>r():requestIdleCallback)(()=>{t.run(()=>{Pt(e.targetEl.value??e.contentEl.value,r=>{a?(cancelAnimationFrame(o),o=requestAnimationFrame(()=>{o=requestAnimationFrame(()=>{s(r)})})):s(r)})})}),j(()=>{typeof cancelIdleCallback<"u"&&cancelIdleCallback(i),cancelAnimationFrame(o)})}function Pt(e,n){const t=[document,...ve(e)];t.forEach(a=>{a.addEventListener("scroll",n,{passive:!0})}),j(()=>{t.forEach(a=>{a.removeEventListener("scroll",n)})})}const ta=Symbol.for("vuetify:v-menu"),na=M({closeDelay:[Number,String],openDelay:[Number,String]},"delay");function aa(e,n){let t=()=>{};function a(s){t==null||t();const r=Number(s?e.openDelay:e.closeDelay);return new Promise(c=>{t=Wt(r,()=>{n==null||n(s),c(s)})})}function o(){return a(!0)}function i(){return a(!1)}return{clearDelay:t,runOpenDelay:o,runCloseDelay:i}}const oa=M({target:[String,Object],activator:[String,Object],activatorProps:{type:Object,default:()=>({})},openOnClick:{type:Boolean,default:void 0},openOnHover:Boolean,openOnFocus:{type:Boolean,default:void 0},closeOnContentClick:Boolean,...na()},"VOverlay-activator");function ia(e,n){let{isActive:t,isTop:a,contentEl:o}=n;const i=ye("useActivator"),s=$();let r=!1,c=!1,u=!0;const l=O(()=>e.openOnFocus||e.openOnFocus==null&&e.openOnHover),g=O(()=>e.openOnClick||e.openOnClick==null&&!e.openOnHover&&!l.value),{runOpenDelay:h,runCloseDelay:m}=aa(e,f=>{f===(e.openOnHover&&r||l.value&&c)&&!(e.openOnHover&&t.value&&!a.value)&&(t.value!==f&&(u=!0),t.value=f)}),y=$(),v={onClick:f=>{f.stopPropagation(),s.value=f.currentTarget||f.target,t.value||(y.value=[f.clientX,f.clientY]),t.value=!t.value},onMouseenter:f=>{var L;(L=f.sourceCapabilities)!=null&&L.firesTouchEvents||(r=!0,s.value=f.currentTarget||f.target,h())},onMouseleave:f=>{r=!1,m()},onFocus:f=>{zt(f.target,":focus-visible")!==!1&&(c=!0,f.stopPropagation(),s.value=f.currentTarget||f.target,h())},onBlur:f=>{c=!1,f.stopPropagation(),m()}},w=O(()=>{const f={};return g.value&&(f.onClick=v.onClick),e.openOnHover&&(f.onMouseenter=v.onMouseenter,f.onMouseleave=v.onMouseleave),l.value&&(f.onFocus=v.onFocus,f.onBlur=v.onBlur),f}),k=O(()=>{const f={};if(e.openOnHover&&(f.onMouseenter=()=>{r=!0,h()},f.onMouseleave=()=>{r=!1,m()}),l.value&&(f.onFocusin=()=>{c=!0,h()},f.onFocusout=()=>{c=!1,m()}),e.closeOnContentClick){const L=vt(ta,null);f.onClick=()=>{t.value=!1,L==null||L.closeParents()}}return f}),p=O(()=>{const f={};return e.openOnHover&&(f.onMouseenter=()=>{u&&(r=!0,u=!1,h())},f.onMouseleave=()=>{r=!1,m()}),f});R(a,f=>{var L;f&&(e.openOnHover&&!r&&(!l.value||!c)||l.value&&!c&&(!e.openOnHover||!r))&&!((L=o.value)!=null&&L.contains(document.activeElement))&&(t.value=!1)}),R(t,f=>{f||setTimeout(()=>{y.value=void 0})},{flush:"post"});const E=We();Be(()=>{E.value&&he(()=>{s.value=E.el})});const V=We(),I=O(()=>e.target==="cursor"&&y.value?y.value:V.value?V.el:At(e.target,i)||s.value),B=O(()=>Array.isArray(I.value)?void 0:I.value);let A;return R(()=>!!e.activator,f=>{f&&U?(A=ft(),A.run(()=>{ra(e,i,{activatorEl:s,activatorEvents:w})})):A&&A.stop()},{flush:"post",immediate:!0}),j(()=>{A==null||A.stop()}),{activatorEl:s,activatorRef:E,target:I,targetEl:B,targetRef:V,activatorEvents:w,contentEvents:k,scrimEvents:p}}function ra(e,n,t){let{activatorEl:a,activatorEvents:o}=t;R(()=>e.activator,(c,u)=>{if(u&&c!==u){const l=r(u);l&&s(l)}c&&he(()=>i())},{immediate:!0}),R(()=>e.activatorProps,()=>{i()}),j(()=>{s()});function i(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:r(),u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;c&&Cn(c,N(o.value,u))}function s(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:r(),u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;c&&pn(c,N(o.value,u))}function r(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:e.activator;const u=At(c,n);return a.value=(u==null?void 0:u.nodeType)===Node.ELEMENT_NODE?u:void 0,a.value}}function At(e,n){var a,o;if(!e)return;let t;if(e==="parent"){let i=(o=(a=n==null?void 0:n.proxy)==null?void 0:a.$el)==null?void 0:o.parentNode;for(;i!=null&&i.hasAttribute("data-no-activator");)i=i.parentNode;t=i}else typeof e=="string"?t=document.querySelector(e):"$el"in e?t=e.$el:t=e;return t}function sa(){if(!U)return Q(!1);const{ssr:e}=$t();if(e){const n=Q(!1);return jt(()=>{n.value=!0}),n}else return Q(!0)}const la=M({eager:Boolean},"lazy");function ca(e,n){const t=Q(!1),a=O(()=>t.value||e.eager||n.value);R(n,()=>t.value=!0);function o(){e.eager||(t.value=!1)}return{isBooted:t,hasContent:a,onAfterLeave:o}}function Ot(){const n=ye("useScopeId").vnode.scopeId;return{scopeId:n?{[n]:""}:void 0}}const et=Symbol.for("vuetify:stack"),ae=mt([]);function ua(e,n,t){const a=ye("useStack"),o=!t,i=vt(et,void 0),s=mt({activeChildren:new Set});qt(et,s);const r=Q(+n.value);Re(e,()=>{var g;const l=(g=ae.at(-1))==null?void 0:g[1];r.value=l?l+10:+n.value,o&&ae.push([a.uid,r.value]),i==null||i.activeChildren.add(a.uid),j(()=>{if(o){const h=Yt(ae).findIndex(m=>m[0]===a.uid);ae.splice(h,1)}i==null||i.activeChildren.delete(a.uid)})});const c=Q(!0);o&&Be(()=>{var g;const l=((g=ae.at(-1))==null?void 0:g[0])===a.uid;setTimeout(()=>c.value=l)});const u=O(()=>!s.activeChildren.size);return{globalTop:Ut(c),localTop:u,stackStyles:O(()=>({zIndex:r.value}))}}function da(e){return{teleportTarget:O(()=>{const t=e();if(t===!0||!U)return;const a=t===!1?document.body:typeof t=="string"?document.querySelector(t):t;if(a==null)return;let o=[...a.children].find(i=>i.matches(".v-overlay-container"));return o||(o=document.createElement("div"),o.className="v-overlay-container",a.appendChild(o)),o})}}function fa(){return!0}function Vt(e,n,t){if(!e||Lt(e,t)===!1)return!1;const a=Et(n);if(typeof ShadowRoot<"u"&&a instanceof ShadowRoot&&a.host===e.target)return!1;const o=(typeof t.value=="object"&&t.value.include||(()=>[]))();return o.push(n),!o.some(i=>i==null?void 0:i.contains(e.target))}function Lt(e,n){return(typeof n.value=="object"&&n.value.closeConditional||fa)(e)}function va(e,n,t){const a=typeof t.value=="function"?t.value:t.value.handler;e.shadowTarget=e.target,n._clickOutside.lastMousedownWasOutside&&Vt(e,n,t)&&setTimeout(()=>{Lt(e,t)&&a&&a(e)},0)}function tt(e,n){const t=Et(e);n(document),typeof ShadowRoot<"u"&&t instanceof ShadowRoot&&n(t)}const ma={mounted(e,n){const t=o=>va(o,e,n),a=o=>{e._clickOutside.lastMousedownWasOutside=Vt(o,e,n)};tt(e,o=>{o.addEventListener("click",t,!0),o.addEventListener("mousedown",a,!0)}),e._clickOutside||(e._clickOutside={lastMousedownWasOutside:!1}),e._clickOutside[n.instance.$.uid]={onClick:t,onMousedown:a}},beforeUnmount(e,n){e._clickOutside&&(tt(e,t=>{var i;if(!t||!((i=e._clickOutside)!=null&&i[n.instance.$.uid]))return;const{onClick:a,onMousedown:o}=e._clickOutside[n.instance.$.uid];t.removeEventListener("click",a,!0),t.removeEventListener("mousedown",o,!0)}),delete e._clickOutside[n.instance.$.uid])}};function ga(e){const{modelValue:n,color:t,...a}=e;return d(Ee,{name:"fade-transition",appear:!0},{default:()=>[e.modelValue&&d("div",N({class:["v-overlay__scrim",e.color.backgroundColorClasses.value],style:e.color.backgroundColorStyles.value},a),null)]})}const It=M({absolute:Boolean,attach:[Boolean,String,Object],closeOnBack:{type:Boolean,default:!0},contained:Boolean,contentClass:null,contentProps:null,disabled:Boolean,opacity:[Number,String],noClickAnimation:Boolean,modelValue:Boolean,persistent:Boolean,scrim:{type:[Boolean,String],default:!0},zIndex:{type:[Number,String],default:2e3},...oa(),...Y(),...ct(),...la(),...jn(),...Jn(),...Ve(),...Xt()},"VOverlay"),nt=z()({name:"VOverlay",directives:{ClickOutside:ma},inheritAttrs:!1,props:{_disableGlobalStack:Boolean,...It()},emits:{"click:outside":e=>!0,"update:modelValue":e=>!0,afterEnter:()=>!0,afterLeave:()=>!0},setup(e,n){let{slots:t,attrs:a,emit:o}=n;const i=ye("VOverlay"),s=$(),r=$(),c=$(),u=gt(e,"modelValue"),l=O({get:()=>u.value,set:S=>{S&&e.disabled||(u.value=S)}}),{themeClasses:g}=Le(e),{rtlClasses:h,isRtl:m}=Gt(),{hasContent:y,onAfterLeave:v}=ca(e,l),w=Jt(O(()=>typeof e.scrim=="string"?e.scrim:null)),{globalTop:k,localTop:p,stackStyles:E}=ua(l,Kt(e,"zIndex"),e._disableGlobalStack),{activatorEl:V,activatorRef:I,target:B,targetEl:A,targetRef:f,activatorEvents:L,contentEvents:ee,scrimEvents:P}=ia(e,{isActive:l,isTop:p,contentEl:c}),{teleportTarget:x}=da(()=>{var te,Ne,De;const S=e.attach||e.contained;if(S)return S;const F=((te=V==null?void 0:V.value)==null?void 0:te.getRootNode())||((De=(Ne=i.proxy)==null?void 0:Ne.$el)==null?void 0:De.getRootNode());return F instanceof ShadowRoot?F:!1}),{dimensionStyles:b}=ut(e),C=sa(),{scopeId:D}=Ot();R(()=>e.disabled,S=>{S&&(l.value=!1)});const{contentStyles:H,updateLocation:J}=qn(e,{isRtl:m,contentEl:c,target:B,isActive:l});Kn(e,{root:s,contentEl:c,targetEl:A,isActive:l,updateLocation:J});function T(S){o("click:outside",S),e.persistent?se():l.value=!1}function q(S){return l.value&&k.value&&(!e.scrim||S.target===r.value||S instanceof MouseEvent&&S.shadowTarget===r.value)}U&&R(l,S=>{S?window.addEventListener("keydown",K):window.removeEventListener("keydown",K)},{immediate:!0}),Zt(()=>{U&&window.removeEventListener("keydown",K)});function K(S){var F,te;S.key==="Escape"&&k.value&&(e.persistent?se():(l.value=!1,(F=c.value)!=null&&F.contains(document.activeElement)&&((te=V.value)==null||te.focus())))}const Z=Sn();Re(()=>e.closeOnBack,()=>{xn(Z,S=>{k.value&&l.value?(S(!1),e.persistent?se():l.value=!1):S()})});const Fe=$();R(()=>l.value&&(e.absolute||e.contained)&&x.value==null,S=>{if(S){const F=Pn(s.value);F&&F!==document.scrollingElement&&(Fe.value=F.scrollTop)}});function se(){e.noClickAnimation||c.value&&oe(c.value,[{transformOrigin:"center"},{transform:"scale(1.03)"},{transformOrigin:"center"}],{duration:150,easing:Pe})}function Tt(){o("afterEnter")}function Rt(){v(),o("afterLeave")}return X(()=>{var S;return d(fe,null,[(S=t.activator)==null?void 0:S.call(t,{isActive:l.value,targetRef:f,props:N({ref:I},L.value,e.activatorProps)}),C.value&&y.value&&d(Qt,{disabled:!x.value,to:x.value},{default:()=>[d("div",N({class:["v-overlay",{"v-overlay--absolute":e.absolute||e.contained,"v-overlay--active":l.value,"v-overlay--contained":e.contained},g.value,h.value,e.class],style:[E.value,{"--v-overlay-opacity":e.opacity,top:W(Fe.value)},e.style],ref:s},D,a),[d(ga,N({color:w,modelValue:l.value&&!!e.scrim,ref:r},P.value),null),d(en,{appear:!0,persisted:!0,transition:e.transition,target:B.value,onAfterEnter:Tt,onAfterLeave:Rt},{default:()=>{var F;return[Te(d("div",N({ref:c,class:["v-overlay__content",e.contentClass],style:[b.value,H.value]},ee.value,e.contentProps),[(F=t.default)==null?void 0:F.call(t,{isActive:l})]),[[ht,l.value],[dt("click-outside"),{handler:T,closeConditional:q,include:()=>[V.value]}]])]}})])]})])}),{activatorEl:V,scrimEl:r,target:B,animateClick:se,contentEl:c,globalTop:k,localTop:p,updateLocation:J}}}),Ce=Symbol("Forwarded refs");function pe(e,n){let t=e;for(;t;){const a=Reflect.getOwnPropertyDescriptor(t,n);if(a)return a;t=Object.getPrototypeOf(t)}}function ha(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),a=1;a<n;a++)t[a-1]=arguments[a];return e[Ce]=t,new Proxy(e,{get(o,i){if(Reflect.has(o,i))return Reflect.get(o,i);if(!(typeof i=="symbol"||i.startsWith("$")||i.startsWith("__"))){for(const s of t)if(s.value&&Reflect.has(s.value,i)){const r=Reflect.get(s.value,i);return typeof r=="function"?r.bind(s.value):r}}},has(o,i){if(Reflect.has(o,i))return!0;if(typeof i=="symbol"||i.startsWith("$")||i.startsWith("__"))return!1;for(const s of t)if(s.value&&Reflect.has(s.value,i))return!0;return!1},set(o,i,s){if(Reflect.has(o,i))return Reflect.set(o,i,s);if(typeof i=="symbol"||i.startsWith("$")||i.startsWith("__"))return!1;for(const r of t)if(r.value&&Reflect.has(r.value,i))return Reflect.set(r.value,i,s);return!1},getOwnPropertyDescriptor(o,i){var r;const s=Reflect.getOwnPropertyDescriptor(o,i);if(s)return s;if(!(typeof i=="symbol"||i.startsWith("$")||i.startsWith("__"))){for(const c of t){if(!c.value)continue;const u=pe(c.value,i)??("_"in c.value?pe((r=c.value._)==null?void 0:r.setupState,i):void 0);if(u)return u}for(const c of t){const u=c.value&&c.value[Ce];if(!u)continue;const l=u.slice();for(;l.length;){const g=l.shift(),h=pe(g.value,i);if(h)return h;const m=g.value&&g.value[Ce];m&&l.push(...m)}}}}})}const ya=M({fullscreen:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,...It({origin:"center center",scrollStrategy:"block",transition:{component:Ln},zIndex:2400})},"VDialog"),ba=z()({name:"VDialog",props:ya(),emits:{"update:modelValue":e=>!0,afterEnter:()=>!0,afterLeave:()=>!0},setup(e,n){let{emit:t,slots:a}=n;const o=gt(e,"modelValue"),{scopeId:i}=Ot(),s=$();function r(l){var m,y;const g=l.relatedTarget,h=l.target;if(g!==h&&((m=s.value)!=null&&m.contentEl)&&((y=s.value)!=null&&y.globalTop)&&![document,s.value.contentEl].includes(h)&&!s.value.contentEl.contains(h)){const v=tn(s.value.contentEl);if(!v.length)return;const w=v[0],k=v[v.length-1];g===w?k.focus():w.focus()}}U&&R(()=>o.value&&e.retainFocus,l=>{l?document.addEventListener("focusin",r):document.removeEventListener("focusin",r)},{immediate:!0});function c(){var l;t("afterEnter"),(l=s.value)!=null&&l.contentEl&&!s.value.contentEl.contains(document.activeElement)&&s.value.contentEl.focus({preventScroll:!0})}function u(){t("afterLeave")}return R(o,async l=>{var g;l||(await he(),(g=s.value.activatorEl)==null||g.focus({preventScroll:!0}))}),X(()=>{const l=nt.filterProps(e),g=N({"aria-haspopup":"dialog"},e.activatorProps),h=N({tabindex:-1},e.contentProps);return d(nt,N({ref:s,class:["v-dialog",{"v-dialog--fullscreen":e.fullscreen,"v-dialog--scrollable":e.scrollable},e.class],style:e.style},l,{modelValue:o.value,"onUpdate:modelValue":m=>o.value=m,"aria-modal":"true",activatorProps:g,contentProps:h,role:"dialog",onAfterEnter:c,onAfterLeave:u},i),{activator:a.activator,default:function(){for(var m=arguments.length,y=new Array(m),v=0;v<m;v++)y[v]=arguments[v];return d(re,{root:"VDialog"},{default:()=>{var w;return[(w=a.default)==null?void 0:w.call(a,...y)]}})}})}),ha({},s)}}),wa={data(){return{imageUrl:"https://bad.src/not/valid",imageClass:"",history:[],pageId:null,loading:!1,showSelfieConsent:!1,dialog:!1,stream:null}},mounted(){const e=this.$route.query.id;this.pageId=e,this.onInit()},methods:{async onInit(){this.history=this.getHistory(),this.location=this.getLocation()},getLocation(){navigator.geolocation?navigator.geolocation.getCurrentPosition(this.successLocationCallback,this.errorLocationCallback):console.log("Geolocation is not supported by this browser.")},successLocationCallback(e){const n=e.coords.latitude,t=e.coords.longitude;console.log(`Latitude: ${n}, Longitude: ${t}`)},errorLocationCallback(e){},getHistory(){let e=localStorage.getItem("history");return e==null?e=[]:e=JSON.parse(e),e},async addtoHistory(){let e=this.getHistory();e.includes(this.imageUrl)||(e.push(this.imageUrl),e.length>5&&e.pop(),this.history=e,localStorage.setItem("history",JSON.stringify(e)),this.loading=!1)},async showPhoto(){this.loading=!0;let e=this.getImageUrl();this.isImageURLValid(e,this.addtoHistory),this.imageUrl=e,this.imageClass="image-frame",this.showSelfieConsent=!0},getImageUrl(){return this.pageId},isImageURLValid(e,n,t){const a=new Image;a.onload=function(){n()},a.onerror=function(){t()},a.src=e},async initCameraShow(){try{this.dialog=!0,this.stream=await navigator.mediaDevices.getUserMedia({video:!0}),this.$refs.video.srcObject=this.stream}catch(e){console.error("Error accessing the camera: ",e)}},async cancelSelfie(){try{this.dialog=!1,this.stream.getTracks().forEach(n=>n.stop())}catch(e){console.error("Error accessing the camera: ",e)}},async takeSelfie(){this.dialog=!1},async checkCamera(){try{this.cancelSelfie(),this.stream=await navigator.mediaDevices.getUserMedia({video:!0}),this.$refs.video.srcObject=this.stream}catch(e){console.error("Error accessing the camera: ",e)}this.cancelSelfie()}}},Sa={class:"d-flex align-center justify-center fill-height"},xa={class:"d-flex align-center justify-center fill-height"},Ca={class:"text-center pa-4"},pa={ref:"video",width:"640",height:"480",autoplay:"",class:"media-border"};function Ea(e,n,t,a,o,i){return an(),nn(fe,null,[d(sn,null,{default:_(()=>[d(ze,{align:"center"},{default:_(()=>[d($e,null,{default:_(()=>[ne("div",{class:on(o.imageClass),width:"80%"},[d(Ie,{class:"mx-auto","min-height":"250","lazy-src":"https://picsum.photos/id/11/100/60",id:"image-id",src:o.imageUrl},{placeholder:_(()=>[ne("div",Sa,[d(ce,{"prepend-icon":"mdi-camera",size:"x-large",variant:"outlined",loading:o.loading,color:"primary",onClick:i.showPhoto,stacked:""},{default:_(()=>n[1]||(n[1]=[le(" Show me ")])),_:1},8,["loading","onClick"])])]),_:1},8,["src"])],2)]),_:1})]),_:1}),d(ze,null,{default:_(()=>[d($e,null,{default:_(()=>[ne("div",xa,[Te(d(ce,{"prepend-icon":"mdi-camera",size:"small",variant:"outlined",color:"primary",onClick:i.initCameraShow},{default:_(()=>n[2]||(n[2]=[le(" Say Thank you with a selfie. ")])),_:1},8,["onClick"]),[[ht,o.showSelfieConsent]])])]),_:1})]),_:1})]),_:1}),ne("div",Ca,[d(ba,{modelValue:o.dialog,"onUpdate:modelValue":n[0]||(n[0]=s=>o.dialog=s),"max-width":"640",persistent:""},{default:_(()=>[d(zn,{"prepend-icon":"mdi-camera",text:"Send a selfie to say a big thank you to the person who shared the image!",title:"Say Cheese!!!"},{actions:_(()=>[d(In),d(ce,{onClick:i.cancelSelfie},{default:_(()=>n[3]||(n[3]=[le(" Cancel ")])),_:1},8,["onClick"]),d(ce,{onClick:i.takeSelfie},{default:_(()=>n[4]||(n[4]=[le(" Send ")])),_:1},8,["onClick"])]),default:_(()=>[ne("video",pa,null,512)]),_:1})]),_:1},8,["modelValue"])])],64)}const Va=rn(wa,[["render",Ea]]);export{Va as default};