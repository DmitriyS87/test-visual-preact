(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const _ of r)if(_.type==="childList")for(const a of _.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const _={};return r.integrity&&(_.integrity=r.integrity),r.referrerPolicy&&(_.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?_.credentials="include":r.crossOrigin==="anonymous"?_.credentials="omit":_.credentials="same-origin",_}function o(r){if(r.ep)return;r.ep=!0;const _=n(r);fetch(r.href,_)}})();var G,u,Pe,A,se,Te,X,Oe,H={},Ee=[],Ye=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,K=Array.isArray;function $(e,t){for(var n in t)e[n]=t[n];return e}function He(e){var t=e.parentNode;t&&t.removeChild(e)}function ee(e,t,n){var o,r,_,a={};for(_ in t)_=="key"?o=t[_]:_=="ref"?r=t[_]:a[_]=t[_];if(arguments.length>2&&(a.children=arguments.length>3?G.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(_ in e.defaultProps)a[_]===void 0&&(a[_]=e.defaultProps[_]);return F(e,a,o,r,null)}function F(e,t,n,o,r){var _={type:e,props:t,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:r??++Pe,__i:-1,__u:0};return r==null&&u.vnode!=null&&u.vnode(_),_}function S(e){return e.children}function x(e,t){this.props=e,this.context=t}function T(e,t){if(t==null)return e.__?T(e.__,e.__i+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?T(e):null}function Ie(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return Ie(e)}}function te(e){(!e.__d&&(e.__d=!0)&&A.push(e)&&!R.__r++||se!==u.debounceRendering)&&((se=u.debounceRendering)||Te)(R)}function R(){var e,t,n,o,r,_,a,c,s;for(A.sort(X);e=A.shift();)e.__d&&(t=A.length,o=void 0,_=(r=(n=e).__v).__e,c=[],s=[],(a=n.__P)&&((o=$({},r)).__v=r.__v+1,u.vnode&&u.vnode(o),re(a,o,r,n.__n,a.ownerSVGElement!==void 0,32&r.__u?[_]:null,c,_??T(r),!!(32&r.__u),s),o.__.__k[o.__i]=o,De(c,o,s),o.__e!=_&&Ie(o)),A.length>t&&A.sort(X));R.__r=0}function Le(e,t,n,o,r,_,a,c,s,l,p){var i,h,f,g,C,w=o&&o.__k||Ee,m=t.length;for(n.__d=s,Ze(n,t,w),s=n.__d,i=0;i<m;i++)(f=n.__k[i])!=null&&typeof f!="boolean"&&typeof f!="function"&&(h=f.__i===-1?H:w[f.__i]||H,f.__i=i,re(e,f,h,r,_,a,c,s,l,p),g=f.__e,f.ref&&h.ref!=f.ref&&(h.ref&&_e(h.ref,null,f),p.push(f.ref,f.__c||g,f)),C==null&&g!=null&&(C=g),65536&f.__u||h.__k===f.__k?s=Ue(f,s,e):typeof f.type=="function"&&f.__d!==void 0?s=f.__d:g&&(s=g.nextSibling),f.__d=void 0,f.__u&=-196609);n.__d=s,n.__e=C}function Ze(e,t,n){var o,r,_,a,c,s=t.length,l=n.length,p=l,i=0;for(e.__k=[],o=0;o<s;o++)(r=e.__k[o]=(r=t[o])==null||typeof r=="boolean"||typeof r=="function"?null:typeof r=="string"||typeof r=="number"||typeof r=="bigint"||r.constructor==String?F(null,r,null,null,r):K(r)?F(S,{children:r},null,null,null):r.constructor===void 0&&r.__b>0?F(r.type,r.props,r.key,r.ref?r.ref:null,r.__v):r)!=null?(r.__=e,r.__b=e.__b+1,c=Qe(r,n,a=o+i,p),r.__i=c,_=null,c!==-1&&(p--,(_=n[c])&&(_.__u|=131072)),_==null||_.__v===null?(c==-1&&i--,typeof r.type!="function"&&(r.__u|=65536)):c!==a&&(c===a+1?i++:c>a?p>s-a?i+=c-a:i--:i=c<a&&c==a-1?c-a:0,c!==o+i&&(r.__u|=65536))):(_=n[o])&&_.key==null&&_.__e&&(_.__e==e.__d&&(e.__d=T(_)),ne(_,_,!1),n[o]=null,p--);if(p)for(o=0;o<l;o++)(_=n[o])!=null&&!(131072&_.__u)&&(_.__e==e.__d&&(e.__d=T(_)),ne(_,_))}function Ue(e,t,n){var o,r;if(typeof e.type=="function"){for(o=e.__k,r=0;o&&r<o.length;r++)o[r]&&(o[r].__=e,t=Ue(o[r],t,n));return t}return e.__e!=t&&(n.insertBefore(e.__e,t||null),t=e.__e),t&&t.nextSibling}function V(e,t){return t=t||[],e==null||typeof e=="boolean"||(K(e)?e.some(function(n){V(n,t)}):t.push(e)),t}function Qe(e,t,n,o){var r=e.key,_=e.type,a=n-1,c=n+1,s=t[n];if(s===null||s&&r==s.key&&_===s.type)return n;if(o>(s!=null&&!(131072&s.__u)?1:0))for(;a>=0||c<t.length;){if(a>=0){if((s=t[a])&&!(131072&s.__u)&&r==s.key&&_===s.type)return a;a--}if(c<t.length){if((s=t[c])&&!(131072&s.__u)&&r==s.key&&_===s.type)return c;c++}}return-1}function le(e,t,n){t[0]==="-"?e.setProperty(t,n??""):e[t]=n==null?"":typeof n!="number"||Ye.test(t)?n:n+"px"}function j(e,t,n,o,r){var _;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof o=="string"&&(e.style.cssText=o=""),o)for(t in o)n&&t in n||le(e.style,t,"");if(n)for(t in n)o&&n[t]===o[t]||le(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")_=t!==(t=t.replace(/(PointerCapture)$|Capture$/,"$1")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+_]=n,n?o?n.u=o.u:(n.u=Date.now(),e.addEventListener(t,_?fe:ue,_)):e.removeEventListener(t,_?fe:ue,_);else{if(r)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!=="width"&&t!=="height"&&t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t!=="rowSpan"&&t!=="colSpan"&&t!=="role"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&t[4]!=="-"?e.removeAttribute(t):e.setAttribute(t,n))}}function ue(e){var t=this.l[e.type+!1];if(e.t){if(e.t<=t.u)return}else e.t=Date.now();return t(u.event?u.event(e):e)}function fe(e){return this.l[e.type+!0](u.event?u.event(e):e)}function re(e,t,n,o,r,_,a,c,s,l){var p,i,h,f,g,C,w,m,b,B,L,E,ce,U,J,N=t.type;if(t.constructor!==void 0)return null;128&n.__u&&(s=!!(32&n.__u),_=[c=t.__e=n.__e]),(p=u.__b)&&p(t);e:if(typeof N=="function")try{if(m=t.props,b=(p=N.contextType)&&o[p.__c],B=p?b?b.props.value:p.__:o,n.__c?w=(i=t.__c=n.__c).__=i.__E:("prototype"in N&&N.prototype.render?t.__c=i=new N(m,B):(t.__c=i=new x(m,B),i.constructor=N,i.render=et),b&&b.sub(i),i.props=m,i.state||(i.state={}),i.context=B,i.__n=o,h=i.__d=!0,i.__h=[],i._sb=[]),i.__s==null&&(i.__s=i.state),N.getDerivedStateFromProps!=null&&(i.__s==i.state&&(i.__s=$({},i.__s)),$(i.__s,N.getDerivedStateFromProps(m,i.__s))),f=i.props,g=i.state,i.__v=t,h)N.getDerivedStateFromProps==null&&i.componentWillMount!=null&&i.componentWillMount(),i.componentDidMount!=null&&i.__h.push(i.componentDidMount);else{if(N.getDerivedStateFromProps==null&&m!==f&&i.componentWillReceiveProps!=null&&i.componentWillReceiveProps(m,B),!i.__e&&(i.shouldComponentUpdate!=null&&i.shouldComponentUpdate(m,i.__s,B)===!1||t.__v===n.__v)){for(t.__v!==n.__v&&(i.props=m,i.state=i.__s,i.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(D){D&&(D.__=t)}),L=0;L<i._sb.length;L++)i.__h.push(i._sb[L]);i._sb=[],i.__h.length&&a.push(i);break e}i.componentWillUpdate!=null&&i.componentWillUpdate(m,i.__s,B),i.componentDidUpdate!=null&&i.__h.push(function(){i.componentDidUpdate(f,g,C)})}if(i.context=B,i.props=m,i.__P=e,i.__e=!1,E=u.__r,ce=0,"prototype"in N&&N.prototype.render){for(i.state=i.__s,i.__d=!1,E&&E(t),p=i.render(i.props,i.state,i.context),U=0;U<i._sb.length;U++)i.__h.push(i._sb[U]);i._sb=[]}else do i.__d=!1,E&&E(t),p=i.render(i.props,i.state,i.context),i.state=i.__s;while(i.__d&&++ce<25);i.state=i.__s,i.getChildContext!=null&&(o=$($({},o),i.getChildContext())),h||i.getSnapshotBeforeUpdate==null||(C=i.getSnapshotBeforeUpdate(f,g)),Le(e,K(J=p!=null&&p.type===S&&p.key==null?p.props.children:p)?J:[J],t,n,o,r,_,a,c,s,l),i.base=t.__e,t.__u&=-161,i.__h.length&&a.push(i),w&&(i.__E=i.__=null)}catch(D){t.__v=null,s||_!=null?(t.__e=c,t.__u|=s?160:32,_[_.indexOf(c)]=null):(t.__e=n.__e,t.__k=n.__k),u.__e(D,t,n)}else _==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=Xe(n.__e,t,n,o,r,_,a,s,l);(p=u.diffed)&&p(t)}function De(e,t,n){t.__d=void 0;for(var o=0;o<n.length;o++)_e(n[o],n[++o],n[++o]);u.__c&&u.__c(t,e),e.some(function(r){try{e=r.__h,r.__h=[],e.some(function(_){_.call(r)})}catch(_){u.__e(_,r.__v)}})}function Xe(e,t,n,o,r,_,a,c,s){var l,p,i,h,f,g,C,w=n.props,m=t.props,b=t.type;if(b==="svg"&&(r=!0),_!=null){for(l=0;l<_.length;l++)if((f=_[l])&&"setAttribute"in f==!!b&&(b?f.localName===b:f.nodeType===3)){e=f,_[l]=null;break}}if(e==null){if(b===null)return document.createTextNode(m);e=r?document.createElementNS("http://www.w3.org/2000/svg",b):document.createElement(b,m.is&&m),_=null,c=!1}if(b===null)w===m||c&&e.data===m||(e.data=m);else{if(_=_&&G.call(e.childNodes),w=n.props||H,!c&&_!=null)for(w={},l=0;l<e.attributes.length;l++)w[(f=e.attributes[l]).name]=f.value;for(l in w)f=w[l],l=="children"||(l=="dangerouslySetInnerHTML"?i=f:l==="key"||l in m||j(e,l,null,f,r));for(l in m)f=m[l],l=="children"?h=f:l=="dangerouslySetInnerHTML"?p=f:l=="value"?g=f:l=="checked"?C=f:l==="key"||c&&typeof f!="function"||w[l]===f||j(e,l,f,w[l],r);if(p)c||i&&(p.__html===i.__html||p.__html===e.innerHTML)||(e.innerHTML=p.__html),t.__k=[];else if(i&&(e.innerHTML=""),Le(e,K(h)?h:[h],t,n,o,r&&b!=="foreignObject",_,a,_?_[0]:n.__k&&T(n,0),c,s),_!=null)for(l=_.length;l--;)_[l]!=null&&He(_[l]);c||(l="value",g!==void 0&&(g!==e[l]||b==="progress"&&!g||b==="option"&&g!==w[l])&&j(e,l,g,w[l],!1),l="checked",C!==void 0&&C!==e[l]&&j(e,l,C,w[l],!1))}return e}function _e(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(o){u.__e(o,n)}}function ne(e,t,n){var o,r;if(u.unmount&&u.unmount(e),(o=e.ref)&&(o.current&&o.current!==e.__e||_e(o,null,t)),(o=e.__c)!=null){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(_){u.__e(_,t)}o.base=o.__P=null,e.__c=void 0}if(o=e.__k)for(r=0;r<o.length;r++)o[r]&&ne(o[r],t,n||typeof e.type!="function");n||e.__e==null||He(e.__e),e.__=e.__e=e.__d=void 0}function et(e,t,n){return this.constructor(e,n)}function tt(e,t,n){var o,r,_,a;u.__&&u.__(e,t),r=(o=typeof n=="function")?null:n&&n.__k||t.__k,_=[],a=[],re(t,e=(!o&&n||t).__k=ee(S,null,[e]),r||H,H,t.ownerSVGElement!==void 0,!o&&n?[n]:r?null:t.firstChild?G.call(t.childNodes):null,_,!o&&n?n:r?r.__e:t.firstChild,o,a),De(_,e,a)}function nt(e,t){var n={__c:t="__cC"+Oe++,__:e,Consumer:function(o,r){return o.children(r)},Provider:function(o){var r,_;return this.getChildContext||(r=[],(_={})[t]=this,this.getChildContext=function(){return _},this.shouldComponentUpdate=function(a){this.props.value!==a.value&&r.some(function(c){c.__e=!0,te(c)})},this.sub=function(a){r.push(a);var c=a.componentWillUnmount;a.componentWillUnmount=function(){r.splice(r.indexOf(a),1),c&&c.call(a)}}),o.children}};return n.Provider.__=n.Consumer.contextType=n}G=Ee.slice,u={__e:function(e,t,n,o){for(var r,_,a;t=t.__;)if((r=t.__c)&&!r.__)try{if((_=r.constructor)&&_.getDerivedStateFromError!=null&&(r.setState(_.getDerivedStateFromError(e)),a=r.__d),r.componentDidCatch!=null&&(r.componentDidCatch(e,o||{}),a=r.__d),a)return r.__E=r}catch(c){e=c}throw e}},Pe=0,x.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=$({},this.state),typeof e=="function"&&(e=e($({},n),this.props)),e&&$(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),te(this))},x.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),te(this))},x.prototype.render=S,A=[],Te=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,X=function(e,t){return e.__v.__b-t.__v.__b},R.__r=0,Oe=0;const ot="_container_c3mtz_1",rt="_header_c3mtz_9",_t="_nav_c3mtz_13",it="_main_c3mtz_18",Y={container:ot,header:rt,nav:_t,main:it};var P,v,Z,de,z=0,je=[],q=[],pe=u.__b,he=u.__r,ve=u.diffed,me=u.__c,ye=u.unmount;function I(e,t){u.__h&&u.__h(v,e,z||t),z=0;var n=v.__H||(v.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({__V:q}),n.__[e]}function O(e){return z=1,at(Re,e)}function at(e,t,n){var o=I(P++,2);if(o.t=e,!o.__c&&(o.__=[n?n(t):Re(void 0,t),function(c){var s=o.__N?o.__N[0]:o.__[0],l=o.t(s,c);s!==l&&(o.__N=[l,o.__[1]],o.__c.setState({}))}],o.__c=v,!v.u)){var r=function(c,s,l){if(!o.__c.__H)return!0;var p=o.__c.__H.__.filter(function(h){return h.__c});if(p.every(function(h){return!h.__N}))return!_||_.call(this,c,s,l);var i=!1;return p.forEach(function(h){if(h.__N){var f=h.__[0];h.__=h.__N,h.__N=void 0,f!==h.__[0]&&(i=!0)}}),!(!i&&o.__c.props===c)&&(!_||_.call(this,c,s,l))};v.u=!0;var _=v.shouldComponentUpdate,a=v.componentWillUpdate;v.componentWillUpdate=function(c,s,l){if(this.__e){var p=_;_=void 0,r(c,s,l),_=p}a&&a.call(this,c,s,l)},v.shouldComponentUpdate=r}return o.__N||o.__}function Me(e,t){var n=I(P++,3);!u.__s&&ie(n.__H,t)&&(n.__=e,n.i=t,v.__H.__h.push(n))}function Fe(e,t){var n=I(P++,4);!u.__s&&ie(n.__H,t)&&(n.__=e,n.i=t,v.__h.push(n))}function qe(e){return z=5,ct(function(){return{current:e}},[])}function ct(e,t){var n=I(P++,7);return ie(n.__H,t)?(n.__V=e(),n.i=t,n.__h=e,n.__V):n.__}function We(e){var t=v.context[e.__c],n=I(P++,9);return n.c=e,t?(n.__==null&&(n.__=!0,t.sub(v)),t.props.value):e.__}function st(){for(var e;e=je.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(W),e.__H.__h.forEach(oe),e.__H.__h=[]}catch(t){e.__H.__h=[],u.__e(t,e.__v)}}u.__b=function(e){v=null,pe&&pe(e)},u.__r=function(e){he&&he(e),P=0;var t=(v=e.__c).__H;t&&(Z===v?(t.__h=[],v.__h=[],t.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=q,n.__N=n.i=void 0})):(t.__h.forEach(W),t.__h.forEach(oe),t.__h=[],P=0)),Z=v},u.diffed=function(e){ve&&ve(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(je.push(t)!==1&&de===u.requestAnimationFrame||((de=u.requestAnimationFrame)||lt)(st)),t.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==q&&(n.__=n.__V),n.i=void 0,n.__V=q})),Z=v=null},u.__c=function(e,t){t.some(function(n){try{n.__h.forEach(W),n.__h=n.__h.filter(function(o){return!o.__||oe(o)})}catch(o){t.some(function(r){r.__h&&(r.__h=[])}),t=[],u.__e(o,n.__v)}}),me&&me(e,t)},u.unmount=function(e){ye&&ye(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(o){try{W(o)}catch(r){t=r}}),n.__H=void 0,t&&u.__e(t,n.__v))};var ge=typeof requestAnimationFrame=="function";function lt(e){var t,n=function(){clearTimeout(o),ge&&cancelAnimationFrame(t),setTimeout(e)},o=setTimeout(n,100);ge&&(t=requestAnimationFrame(n))}function W(e){var t=v,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),v=t}function oe(e){var t=v;e.__c=e.__(),v=t}function ie(e,t){return!e||e.length!==t.length||t.some(function(n,o){return n!==e[o]})}function Re(e,t){return typeof t=="function"?t(e):t}const ut=e=>{const[t,n]=O(()=>window.matchMedia(e).matches);return Fe(()=>{const r=()=>{n(o(e))},_=window.matchMedia(e);return _.addEventListener("change",r),()=>{_.removeEventListener("change",r)}},[e]),t;function o(r){return window.matchMedia(r).matches}},ft="_close_t0t53_1",dt="_closeIcon_t0t53_7",we={close:ft,closeIcon:dt};var pt=0;function d(e,t,n,o,r,_){var a,c,s={};for(c in t)c=="ref"?a=t[c]:s[c]=t[c];var l={type:e,props:s,key:n,ref:a,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:--pt,__i:-1,__u:0,__source:r,__self:_};if(typeof e=="function"&&(a=e.defaultProps))for(c in a)s[c]===void 0&&(s[c]=a[c]);return u.vnode&&u.vnode(l),l}const Ve=({onClose:e=()=>{}})=>d("button",{onClick:e,className:we.close,tabIndex:0,"aria-label":"Action. Close ad banner pannel.",children:d("img",{className:we.closeIcon,src:"/src/assets/close.svg",alt:"close icon"})}),ht="_rowBanner_1jkg4_1",vt="_rowBannerContent_1jkg4_11",mt="_rowBannerDivider_1jkg4_18",yt="_rowBannerTitle_1jkg4_24",gt="_rowBannerComa_1jkg4_33",wt="_rowBannerDates_1jkg4_38",bt="_rowBannerText_1jkg4_44",kt="_rowBannerOffer_1jkg4_54",Nt="_offerAdditionalInfo_1jkg4_62",Ct="_rowBannerAction_1jkg4_65",xt="_rowBannerClose_1jkg4_70",Bt="_cardCode_1jkg4_74",$t="_adTextBlock_1jkg4_81",At="_shopNow_1jkg4_88",St="_shopNowText_1jkg4_94",Pt="_AdButton_1jkg4_101",Tt="_arrow_1jkg4_107",y={rowBanner:ht,rowBannerContent:vt,rowBannerDivider:mt,rowBannerTitle:yt,rowBannerComa:gt,rowBannerDates:wt,rowBannerText:bt,rowBannerOffer:kt,offerAdditionalInfo:Nt,rowBannerAction:Ct,rowBannerClose:xt,cardCode:Bt,adTextBlock:$t,shopNow:At,shopNowText:St,AdButton:Pt,arrow:Tt},Ot=650,Et=({forwardRef:e=null})=>{const t=ut(`(min-width: ${Ot}px)`);return d("section",{ref:e,className:y.rowBanner,"aria-label":"Advertising banner. You can use promo code to get a discount.",children:[d("div",{className:y.rowBannerContent,children:d("p",{className:y.adTextBlock,children:[d("span",{className:y.rowBannerTitle,children:["Black Friday",d("span",{className:y.rowBannerComa,children:","}),d("span",{className:y.rowBannerDates,children:"24-27 Nov"})]}),d("span",{className:y.rowBannerDivider,children:d("img",{className:y.point,src:"/src/assets/point.svg",alt:"divider"})}),d("span",{className:y.rowBannerText,children:"10%OFF"}),d("span",{className:y.rowBannerDivider,children:d("img",{className:y.point,src:"/src/assets/point.svg",alt:"divider"})}),d("span",{className:y.rowBannerOffer,children:["Use code ",d("span",{className:y.cardCode,"aria-label":"Promo code",children:"10friday"})," ",d("span",{className:y.offerAdditionalInfo,children:"at checkout"})]})]})}),d("div",{className:y.rowBannerAction,children:[t?d("a",{target:"#",className:y.shopNow,tabindex:0,"aria-label":"Go to online store",children:d("span",{className:y.shopNowText,children:"Shop now"})}):d("a",{target:"#",className:y.AdButton,tabindex:0,"aria-label":"Go to online store",children:d("img",{className:y.arrow,src:"/src/assets/ad-arrow.svg",alt:"action forward"})}),d("div",{className:y.rowBannerClose,children:d(Ve,{})})]})]})};function Ht(e,t){for(var n in t)e[n]=t[n];return e}function be(e,t){for(var n in e)if(n!=="__source"&&!(n in t))return!0;for(var o in t)if(o!=="__source"&&e[o]!==t[o])return!0;return!1}function ke(e){this.props=e}(ke.prototype=new x).isPureReactComponent=!0,ke.prototype.shouldComponentUpdate=function(e,t){return be(this.props,e)||be(this.state,t)};var Ne=u.__b;u.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),Ne&&Ne(e)};var It=u.__e;u.__e=function(e,t,n,o){if(e.then){for(var r,_=t;_=_.__;)if((r=_.__c)&&r.__c)return t.__e==null&&(t.__e=n.__e,t.__k=n.__k),r.__c(e,t)}It(e,t,n,o)};var Ce=u.unmount;function ze(e,t,n){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach(function(o){typeof o.__c=="function"&&o.__c()}),e.__c.__H=null),(e=Ht({},e)).__c!=null&&(e.__c.__P===n&&(e.__c.__P=t),e.__c=null),e.__k=e.__k&&e.__k.map(function(o){return ze(o,t,n)})),e}function Ge(e,t,n){return e&&n&&(e.__v=null,e.__k=e.__k&&e.__k.map(function(o){return Ge(o,t,n)}),e.__c&&e.__c.__P===t&&(e.__e&&n.appendChild(e.__e),e.__c.__e=!0,e.__c.__P=n)),e}function Q(){this.__u=0,this.t=null,this.__b=null}function Ke(e){var t=e.__.__c;return t&&t.__a&&t.__a(e)}function M(){this.u=null,this.o=null}u.unmount=function(e){var t=e.__c;t&&t.__R&&t.__R(),t&&32&e.__u&&(e.type=null),Ce&&Ce(e)},(Q.prototype=new x).__c=function(e,t){var n=t.__c,o=this;o.t==null&&(o.t=[]),o.t.push(n);var r=Ke(o.__v),_=!1,a=function(){_||(_=!0,n.__R=null,r?r(c):c())};n.__R=a;var c=function(){if(!--o.__u){if(o.state.__a){var s=o.state.__a;o.__v.__k[0]=Ge(s,s.__c.__P,s.__c.__O)}var l;for(o.setState({__a:o.__b=null});l=o.t.pop();)l.forceUpdate()}};o.__u++||32&t.__u||o.setState({__a:o.__b=o.__v.__k[0]}),e.then(a,a)},Q.prototype.componentWillUnmount=function(){this.t=[]},Q.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),o=this.__v.__k[0].__c;this.__v.__k[0]=ze(this.__b,n,o.__O=o.__P)}this.__b=null}var r=t.__a&&ee(S,null,e.fallback);return r&&(r.__u&=-33),[ee(S,null,t.__a?null:e.children),r]};var xe=function(e,t,n){if(++n[1]===n[0]&&e.o.delete(t),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.o.size))for(n=e.u;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.u=n=n[2]}};(M.prototype=new x).__a=function(e){var t=this,n=Ke(t.__v),o=t.o.get(e);return o[0]++,function(r){var _=function(){t.props.revealOrder?(o.push(r),xe(t,e,o)):r()};n?n(_):_()}},M.prototype.render=function(e){this.u=null,this.o=new Map;var t=V(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&t.reverse();for(var n=t.length;n--;)this.o.set(t[n],this.u=[1,0,this.u]);return e.children},M.prototype.componentDidUpdate=M.prototype.componentDidMount=function(){var e=this;this.o.forEach(function(t,n){xe(e,n,t)})};var Lt=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,Ut=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,Dt=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,jt=/[A-Z0-9]/g,Mt=typeof document<"u",Ft=function(e){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(e)};x.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(x.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})});var Be=u.event;function qt(){}function Wt(){return this.cancelBubble}function Rt(){return this.defaultPrevented}u.event=function(e){return Be&&(e=Be(e)),e.persist=qt,e.isPropagationStopped=Wt,e.isDefaultPrevented=Rt,e.nativeEvent=e};var Vt={enumerable:!1,configurable:!0,get:function(){return this.class}},$e=u.vnode;u.vnode=function(e){typeof e.type=="string"&&function(t){var n=t.props,o=t.type,r={};for(var _ in n){var a=n[_];if(!(_==="value"&&"defaultValue"in n&&a==null||Mt&&_==="children"&&o==="noscript"||_==="class"||_==="className")){var c=_.toLowerCase();_==="defaultValue"&&"value"in n&&n.value==null?_="value":_==="download"&&a===!0?a="":c==="ondoubleclick"?_="ondblclick":c!=="onchange"||o!=="input"&&o!=="textarea"||Ft(n.type)?c==="onfocus"?_="onfocusin":c==="onblur"?_="onfocusout":Dt.test(_)?_=c:o.indexOf("-")===-1&&Ut.test(_)?_=_.replace(jt,"-$&").toLowerCase():a===null&&(a=void 0):c=_="oninput",c==="oninput"&&r[_=c]&&(_="oninputCapture"),r[_]=a}}o=="select"&&r.multiple&&Array.isArray(r.value)&&(r.value=V(n.children).forEach(function(s){s.props.selected=r.value.indexOf(s.props.value)!=-1})),o=="select"&&r.defaultValue!=null&&(r.value=V(n.children).forEach(function(s){s.props.selected=r.multiple?r.defaultValue.indexOf(s.props.value)!=-1:r.defaultValue==s.props.value})),n.class&&!n.className?(r.class=n.class,Object.defineProperty(r,"className",Vt)):(n.className&&!n.class||n.class&&n.className)&&(r.class=r.className=n.className),t.props=r}(e),e.$$typeof=Lt,$e&&$e(e)};var Ae=u.__r;u.__r=function(e){Ae&&Ae(e),e.__c};var Se=u.diffed;u.diffed=function(e){Se&&Se(e);var t=e.props,n=e.__e;n!=null&&e.type==="textarea"&&"value"in t&&t.value!==n.value&&(n.value=t.value==null?"":t.value)};function zt(e,t="",{serialize:n=JSON.stringify,deserialize:o=JSON.parse}={}){const[r,_]=O(()=>{const c=window.localStorage.getItem(e);if(c)try{return o(c)}catch{window.localStorage.removeItem(e)}return typeof t=="function"?t():t}),a=qe(e);return Me(()=>{const c=a.current;c!==e&&window.localStorage.removeItem(c),a.current=e,window.localStorage.setItem(e,n(r))},[e,r,n]),[r,_]}const Gt="_card_yd1kq_1",Kt="_container_yd1kq_14",Jt="_cardContent_yd1kq_24",Yt="_cardText_yd1kq_30",Zt="_cardLink_yd1kq_37",Qt="_cardLinkExplanation_yd1kq_46",Xt="_cardtitle_yd1kq_49",en="_cardOffer_yd1kq_59",tn="_cardHow_yd1kq_71",nn="_cardCode_yd1kq_77",on="_cardClose_yd1kq_83",rn="_preanimation_yd1kq_89",_n="_loadAnimation_yd1kq_93",an="_fadeIn_yd1kq_1",cn="_moveIn_yd1kq_1",sn="_fixed_yd1kq_155",k={card:Gt,container:Kt,cardContent:Jt,cardText:Yt,cardLink:Zt,cardLinkExplanation:Qt,cardtitle:Xt,cardOffer:en,cardHow:tn,cardCode:nn,cardClose:on,preanimation:rn,loadAnimation:_n,fadeIn:an,moveIn:cn,fixed:sn};function ln(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Je={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var _="",a=0;a<arguments.length;a++){var c=arguments[a];c&&(_=r(_,o(c)))}return _}function o(_){if(typeof _=="string"||typeof _=="number")return _;if(typeof _!="object")return"";if(Array.isArray(_))return n.apply(null,_);if(_.toString!==Object.prototype.toString&&!_.toString.toString().includes("[native code]"))return _.toString();var a="";for(var c in _)t.call(_,c)&&_[c]&&(a=r(a,c));return a}function r(_,a){return a?_?_+" "+a:_+a:_}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(Je);var un=Je.exports;const fn=ln(un),dn=({onClose:e=()=>{},loadTrigger:t=null})=>{const[n,o]=O(!1),r=t!==null;return Fe(()=>{!n&&r&&t&&o(!0)},[n,r,t]),d("section",{className:fn(k.card,{[k.preanimation]:r,[k.loadAnimation]:n,[k.fixed]:r}),children:d("div",{className:k.container,children:[d("div",{className:k.cardContent,children:[d("div",{className:k.cardText,children:[d("h6",{className:k.cardtitle,children:"Black Friday"}),d("p",{className:k.cardOffer,children:"10%OFF"}),d("p",{className:k.cardHow,children:["Use code ",d("span",{"aria-label":"Promo code",tabindex:-1,className:k.cardCode,children:"10friday"})," at checkout"]})]}),d("div",{className:k.cardAction,children:d("a",{target:"#",className:k.cardLink,tabindex:0,"aria-label":"Go to online store",children:["Shop now"," ",d("span",{className:k.cardLinkExplanation,children:"through Monday"})]})})]}),d("div",{className:k.cardClose,children:d(Ve,{onClose:_})})]})});function _(){e()}},pn=({elRef:e,onVisible:t=void 0,onInvisible:n=void 0})=>{const[o,r]=O(!1);return Me(()=>{const _=new IntersectionObserver(([c])=>{c.isIntersecting?(r(!0),t&&t()):(r(!1),n&&n())},{threshold:.1}),a=e==null?void 0:e.current;return a&&_.observe(a),()=>{a&&_.unobserve(a)}},[t,n,e]),[o]},hn=()=>{const{state:e}=We(ae);return d("div",{"aria-live":"polite","aria-atomic":"true",className:"sr-only",children:e.message})},ae=nt(null),vn=({children:e})=>{const[t,n]=O(""),o=_=>{n(_)},r=()=>{n("")};return d(ae.Provider,{value:{state:{message:t},actions:{srNotify:o,srClearNotification:r}},children:[d(hn,{}),e]})},mn=()=>{const e=qe(null),[t,n]=O(!1),[o,r]=zt("tangem:main-banner-closed","false"),{actions:{srNotify:_,srClearNotification:a}}=We(ae);pn({elRef:e,onInvisible:l});const c=!o&&o!=="true";return d(S,{children:[d("header",{className:Y.header,children:[d("nav",{className:Y.nav}),d(Et,{forwardRef:e})]}),d("main",{className:Y.main,children:c&&d(dn,{loadTrigger:t,onClose:s})})]});function s(){r(!0),a()}function l(){n(!0),_("Page updated with AD card banner with sales inforamtion. You can use promo code to get a discount.")}};function yn(){return d(vn,{children:d(mn,{})})}tt(d(yn,{}),document.getElementById("app"));