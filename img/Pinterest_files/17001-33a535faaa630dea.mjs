(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[17001],{17314:(t,e,n)=>{n.d(e,{Z:()=>p});var i,a,r=n(813653),o=n(861470),s=0,c=0;const p=function(t,e,n){var p=e&&n||0,h=e||new Array(16),d=(t=t||{}).node||i,l=void 0!==t.clockseq?t.clockseq:a;if(null==d||null==l){var u=t.random||(t.rng||r.Z)();null==d&&(d=i=[1|u[0],u[1],u[2],u[3],u[4],u[5]]),null==l&&(l=a=16383&(u[6]<<8|u[7]))}var m=void 0!==t.msecs?t.msecs:Date.now(),g=void 0!==t.nsecs?t.nsecs:c+1,f=m-s+(g-c)/1e4;if(f<0&&void 0===t.clockseq&&(l=l+1&16383),(f<0||m>s)&&void 0===t.nsecs&&(g=0),g>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");s=m,c=g,a=l;var w=(1e4*(268435455&(m+=122192928e5))+g)%4294967296;h[p++]=w>>>24&255,h[p++]=w>>>16&255,h[p++]=w>>>8&255,h[p++]=255&w;var v=m/4294967296*1e4&268435455;h[p++]=v>>>8&255,h[p++]=255&v,h[p++]=v>>>24&15|16,h[p++]=v>>>16&255,h[p++]=l>>>8|128,h[p++]=255&l;for(var b=0;b<6;++b)h[p+b]=d[b];return e||(0,o.Z)(h)}},476781:(t,e,n)=>{n.d(e,{X:()=>a,v:()=>i});const i="imgViewer",a="related"},558068:(t,e,n)=>{n.d(e,{Hv:()=>c,aX:()=>d,nK:()=>l});var i=n(667294),a=n(425288),r=n(925927),o=n(785893);const{Provider:s,useHook:c}=(0,a.Z)("HistoryStackContext",{previous:[],current:null,forward:[]}),p=t=>t&&t.pathname?t.pathname+(t.search||""):"";function h(t,e){var n;const i={action:e.type,location:e.location,match:e.match};if(e.location===(null===(n=t.current)||void 0===n?void 0:n.location))return t;switch(e.type){case"POP":return t.forward.length>0&&p(t.forward[0].location)===p(i.location)?{...t,forward:t.forward.slice(1),current:{...t.forward[0],action:e.type},previous:t.current?[...t.previous,{action:t.current.action,location:t.current.location,match:t.current.match}]:t.previous}:{...t,forward:t.current?[{action:t.current.action,location:t.current.location,match:t.current.match},...t.forward]:t.forward,current:{...t.previous.slice(-1)[0],action:e.type},previous:t.previous.slice(0,-1)};case"PUSH":return{...t,forward:t.forward.length>0?[]:t.forward,current:i,previous:t.current?[...t.previous,{action:t.current.action,location:t.current.location,match:t.current.match}]:t.previous};case"REPLACE":return{...t,current:i};default:return t}}function d(){const{current:t,previous:e}=c();return(0,i.useMemo)((()=>t?e.concat(t):e),[t,e])}function l({children:t}){const e=(0,r.k6)(),n=(0,r.TH)(),a=(0,r.$B)(),c={forward:[],current:{action:e.action,location:n,match:a},previous:[]},[p,d]=(0,i.useReducer)(h,c);return(0,i.useEffect)((()=>{const{action:t}=e;d({type:t,location:n,match:a})}),[n]),(0,o.jsx)(s,{value:p,children:t})}},53987:(t,e,n)=>{n.d(e,{wy:()=>U,Fw:()=>V,bo:()=>I,oF:()=>J,bW:()=>v,AX:()=>u,Fy:()=>l,XE:()=>d,am:()=>s,pD:()=>m,OJ:()=>p,LO:()=>rt,Gl:()=>F,h3:()=>z,PY:()=>_,Ni:()=>b,pV:()=>X,L6:()=>S,b0:()=>w,jC:()=>O,O7:()=>Q,LM:()=>Z,OK:()=>k,mP:()=>y,C$:()=>x,J3:()=>T,Fr:()=>A,Xn:()=>C,l4:()=>j,b_:()=>B,J:()=>c,dZ:()=>h,re:()=>P,RU:()=>tt,Ui:()=>g,KY:()=>f,fY:()=>N,uM:()=>M,x7:()=>Y,rk:()=>ot,cD:()=>$,k1:()=>q,dW:()=>st,Pu:()=>K,En:()=>E,ej:()=>it,gf:()=>L,mY:()=>et,kY:()=>at,cY:()=>G,$Y:()=>R,Zz:()=>W,$V:()=>D,j8:()=>H,YW:()=>nt});const i=new RegExp(/^\/(?!(?:pin|categories|report|search|password|terms|discover|help|email|topics|explore|pw|login|signup|about|business|source|ideas|today|tv))[\w\d\-]+\/(?!(?:following|followers|_tools|_created|_saved|tried))[\w\d\-]+(?=\/|$)/),a=["/BingSiteAuth.xml","/about","/add-account","/ads","/age_verification","/all","/apple-app-site-association","/apple-app-site-association.p7m","/attribution_source","/bot.html","/browserbutton","/buy-it","/careers","/categories","/close-account","/content-claiming","/convert-business","/convert-personal","/create-business","/create-linked-business","/create-personal","/creation-inspiration","/creator-onboarding-landing","/csrf_error","/ct.html","/deactivate-account","/developers","/discover","/edit","/email_verification_error","/engagement","/explore","/favicon.ico","/fb.html","/following","/google_gdn.html","/google_search.html","/googlef5dc42d6e03f6e61.html","/guidedsearch","/help","/holidays-celebrations","/homefeed","/idea-pin-builder","/idea-pin-invite","/ideas","/inbox","/install-shuffles","/invited","/jobs","/live-session","/login","/login_redirect","/logout","/manifest.json","/manifest.webapp","/me","/messages","/mobile","/notifications","/oauth","/app-factory-oauth","/appealed-pin","/oembed.json","/offline.html","/offsite","/opensearch.xml","/parent_contact_info","/pin-builder","/pin-editor","/pin_catalog","/pin_redirect","/pinterest-wellbeing","/pinterest-predicts","/pinterestlens","/pinterestlenstryon","/pinterestwellbeing","/policy","/product-catalogs","/recently-viewed","/report","/robots.txt","/safe-redirect","/search","/settings","/signup","/socialmanager","/story-pin-builder","/story-pin-invite","/story_feed","/story_pins","/sw-shell.html","/sw.html","/sw.js","/switch_account","/terms","/today","/topics","/transparent.html","/tv","/unauth-profile","/unlink","/upload-image","/upload-profile-image","/verified","/verify","/web-mentorship","/welcome","/windows-app-web-link","/your-shop"];var r=n(476781),o=n(925927);const s=t=>i.test(t.pathname),c=(t,e)=>{const{pathname:n}=t;return s(t)&&n.match(e||"?")},p=t=>{const{pathname:e}=t;return!!(0,o.LX)(e,{path:"/:username/:boardId/:boardSectionId",exact:!0})&&!e.match(/^\/.+\/.+\/(_tools)/i)},h=(t,e)=>{const{pathname:n}=t;return p(t)&&n.match(e||"?")},d=t=>!!(0,o.LX)(t.pathname,{path:"/board/:id/edit",exact:!0}),l=t=>!!(0,o.LX)(t.pathname,{path:"/board/:id/edit/collaborators",exact:!0}),u=t=>!!(0,o.LX)(t.pathname,{path:"/board/:id/edit/add_collaborators",exact:!0}),m=t=>!!(0,o.LX)(t.pathname,{path:"/boardsection/:id/edit",exact:!0}),g=t=>!!(0,o.LX)(t.pathname,{path:"/pin/:id/comments",exact:!0}),f=t=>!!(0,o.LX)(t.pathname,{path:"/pin/:id/edit",exact:!0}),w=t=>!!(0,o.LX)(t.pathname,{path:"/conversation/:id",exact:!0}),v=t=>!!(0,o.LX)(t.pathname,{path:"/appealed-pin/",exact:!0}),b=t=>t.pathname.startsWith("/business/"),_=t=>t.pathname.startsWith("/business/invite/"),y=t=>!!(0,o.LX)(t.pathname,{path:"/pin/:id/visual-search/",exact:!0}),x=t=>"/"===t.pathname,C=t=>t.pathname.startsWith("/login"),W=t=>!!(0,o.LX)(t.pathname,{path:"/today",exact:!0}),P=t=>t.pathname.startsWith("/password/reset")||!!(0,o.LX)(t.pathname,{path:"/pw/:username",exact:!0}),L=t=>t.pathname.startsWith("/signup"),k=t=>t.pathname.startsWith("/email/subscription"),j=t=>t.pathname.startsWith("/notifications/"),S=t=>!!(0,o.LX)(t.pathname,{path:"/pin/:id",exact:!0}),U=t=>S(t)&&void 0===t.state,X=t=>t.pathname.startsWith("/pin_redirect"),E=t=>t.pathname.startsWith("/search"),T=t=>t.pathname.startsWith("/ideas"),D=t=>t.pathname.startsWith("/topics"),R=t=>t.pathname.startsWith("/today/article/")||t.pathname.startsWith("/today/best/")||t.pathname.startsWith("/today/trending/"),I=t=>W(t)||R(t)||t.pathname.startsWith("/today/popular/"),Z=t=>/^\/discover\/article\/\S+\/?/i.test(t.pathname),O=t=>t.pathname.startsWith("/pin/create/"),$=t=>!!(0,o.LX)(t.pathname,{path:"/:username/",exact:!0})&&!a.includes(t.pathname.replace(/\/$/,"")),H=t=>t.pathname.startsWith("/unauth-profile"),M=t=>t.pathname.startsWith("/pin/"),A=t=>"#imgViewer"===t.hash,q=t=>t.hash===`#${r.X}`,N=t=>!!(0,o.LX)(t.pathname,{path:"/pin/:id",exact:!1})&&(t.pathname.includes("/sent/")||t.pathname.includes("/feedback/")),V=t=>(t=>new RegExp("invite_code").test(t.search))(t)&&((N(t)?"pin":s(t)&&"board")||$(t)&&"profile")||null,Y=t=>t.pathname.includes("/repin/x"),G=t=>t.pathname.startsWith("/_/storyboard"),B=t=>t.pathname.startsWith("/oauth"),J=t=>t.pathname.startsWith("/app-factory-oauth"),K=t=>t.pathname.includes("/scheduled-pin/"),F=t=>t.pathname.startsWith("/business/convert"),z=t=>t.pathname.startsWith("/business/hub"),Q=t=>t.pathname.startsWith("/pin-editor"),tt=t=>t.pathname.startsWith("/pin-builder"),et=t=>t.pathname.startsWith("/story-pin-builder")||t.pathname.startsWith("/idea-pin-builder"),nt=t=>t.pathname.startsWith("/advertiser/quick-promote"),it=t=>t.pathname.startsWith("/settings"),at=t=>t.pathname.startsWith("/story-pin-invite")||t.pathname.startsWith("/idea-pin-invite"),rt=t=>void 0!==t.pathname&&t.pathname.startsWith("/business/business-access/")&&t.pathname.includes("/dashboard/"),ot=t=>void 0!==t.pathname&&t.pathname.startsWith("/tv/studio"),st=t=>void 0!==t.pathname&&t.pathname.startsWith("/business/schedule_call/")},622096:(t,e,n)=>{n.d(e,{L_:()=>a,Nh:()=>r,qn:()=>i});const i=(t,e)=>{if("undefined"==typeof window)return e;try{return window.sessionStorage.getItem(t)}catch(n){return window.console.error("Cannot access sessionStorage."),e}},a=t=>{if("undefined"!=typeof window)try{window.sessionStorage.removeItem(t)}catch(e){window.console.error("Cannot access sessionStorage.")}},r=(t,e)=>{if("undefined"!=typeof window)try{window.sessionStorage.setItem(t,e)}catch(n){window.console.error("Cannot access sessionStorage.")}}},430323:(t,e,n)=>{n.d(e,{Z:()=>w});var i=n(667294),a=n(722767),r=n(706922),o=n(245474),s=n(558068),c=n(780280),p=n(790123),h=n(425288);const{Provider:d,useMaybeHook:l}=(0,h.Z)("timeSpentContext");var u=n(785893);function m(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}class g extends i.Component{constructor(t){super(t),m(this,"componentWillUnmount",(()=>{this.unregisterComponent()})),m(this,"getContext",(()=>{const{clientTrackingParams:t,component:e,element:n,objectId:i,timeSpentContext:a,view:r,viewParameter:o}=this.props;return{view:r||a&&a.view,viewParameter:o||a&&a.viewParameter,component:e||a&&a.component,element:n,objectId:i||a&&a.objectId,clientTrackingParams:t||a&&a.clientTrackingParams,getParentUuid:()=>this.getUuid(),getGrandparentUuid:()=>this.getParentId()}})),m(this,"getLoggerContext",(()=>{const t={...this.getContext()};return delete t.getParentUuid,t})),m(this,"getParentId",(()=>{const{timeSpentContext:t,shouldUseGrandparentId:e=!1}=this.props;if(e&&t&&t.getGrandparentUuid){const e=t.getGrandparentUuid();if(e)return e}return t&&t.getParentUuid?t.getParentUuid():void 0})),m(this,"getUuid",(()=>this.state.timedPair?this.state.timedPair.uuid:void 0)),m(this,"getTimedPair",(()=>this.state.timedPair)),m(this,"setTimedPair",(t=>this.setState({timedPair:t}))),m(this,"isRegistered",!1),m(this,"registerComponent",(()=>{this.props.timeSpentManager.registerComponent(this),this.isRegistered=!0})),m(this,"unregisterComponent",(()=>{this.isRegistered&&(this.props.timeSpentManager.unregisterComponent(this),this.isRegistered=!1)})),m(this,"handleVisibilityChange",(t=>{const{intersectionRatio:e}=t[0],{bottom:n,left:i,right:a,top:r}=t[0].intersectionRect;e>0?this.registerComponent():0===e&&(0===n&&0===i&&0===a&&0===r?this.unregisterComponent():this.registerComponent())})),this.state={timedPair:new o.Z(this.getLoggerContext())}}componentDidUpdate(t){!this.isRegistered||t.view===this.props.view&&t.viewParameter===this.props.viewParameter&&t.component===this.props.component&&t.element===this.props.element&&t.objectId===this.props.objectId&&(0,r.Z)(t.auxData,this.props.auxData)&&(0,r.Z)(t.viewData,this.props.viewData)||(this.unregisterComponent(),setTimeout(this.registerComponent))}render(){const{children:t}=this.props;return(0,u.jsx)(d,{value:this.getContext(),children:(0,u.jsx)(a.Z,{options:{threshold:0},onVisibilityChange:this.handleVisibilityChange,children:i.Children.only(t)})})}}function f(t){var e;const n=(0,s.Hv)(),a=l(),r=(0,p.w)(),{requestIdentifier:o=""}=(0,c.B)(),h={app_instance_id:o.slice(0,8),...null!==(e=t.auxData)&&void 0!==e?e:{}};return(0,i.useEffect)((()=>{null==r||r.setHistoryStackContext(n)}),[n,r]),r?(0,u.jsx)(g,{...t,auxData:h,timeSpentContext:a,timeSpentManager:r,children:t.children}):t.children}f.displayName="TimeSpent";const w=f},790123:(t,e,n)=>{n.d(e,{j:()=>a,w:()=>r});var i=n(425288);const{Provider:a,useMaybeHook:r}=(0,i.Z)("TimeSpentManagerContext")},245474:(t,e,n)=>{n.d(e,{Z:()=>s});var i=n(172045),a=n(17314);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const o="undefined"!=typeof window&&window.performance&&window.performance.now?()=>Math.floor(1e6*window.performance.now()):()=>1e6*Date.now();const s=class{constructor(t){r(this,"start",(()=>(this.startTime=o(),this.startTime))),r(this,"end",(()=>(this.endTime=o(),this.duration=this.startTime?this.endTime-this.startTime:null,this.duration)));try{this.uuid=(0,i.Z)()}catch(e){this.uuid=(0,a.Z)()}t&&Object.assign(this,t)}}},867820:(t,e,n)=>{n.d(e,{yl:()=>u,an:()=>v,qJ:()=>m,dy:()=>y,De:()=>b,NC:()=>w,LW:()=>_,My:()=>f,tj:()=>g});var i=n(231486),a=n(6637),r=n(826067),o=n(226198);const s="unauthHistories",c="trackHistoryClickInternalUrl";var p=n(622096),h=n(53987);let d=[];let l;function u(t){d.length&&(a.ZP.create("UserRegisterTrackActionResource",{actions:d}).callUpdate({showError:!1,async:!t}),d=[],l=null)}const m=t=>{!function(t){const e=(0,p.qn)(c);if((0,p.L_)(c),e)return;let n=(0,p.qn)(s);if(n=n?n.split(","):[],n.length){const e=`${t}.${n.reduce(((t,e)=>t+"-"+e))}`;d.push({name:e,aux_data:{}})}(0,p.L_)(s)}(t),d.length&&u(!0)};function g(t,e){let n="undefined"!=typeof window&&window.encodeURIComponent&&encodeURIComponent(t)||t;e||(e={}),-1!==n.indexOf("%")&&(e.invalid_action&&(e.invalid_action_original=e.invalid_action),e.invalid_action=n,n="track_register_action.web.invalid_action.with_percent"),d.push({name:n,aux_data:e}),l||(l=setTimeout((()=>u()),5e3)),function(t,e){if("undefined"!=typeof window)try{const n=new URL(window.location.href).searchParams.get("consoleTra");if(window.PINTEREST_DEV_LOG||n){const n=window.PINTEREST_DEV_REGEX||"";n&&!(t||"").match(n)||("object"==typeof e&&Object.keys(e).length?console.log(t+": %O",e):console.log(t))}}catch(n){}}(t,e)}function f(t,e){g(t,{tags:e?{...e}:{}})}function w(t,e=!1){if("undefined"==typeof window)return;let n=(0,p.qn)(s);n=n?n.split(","):[],n.push(t),(0,p.Nh)(s,n.join()),f(`lex.${t}`),e&&(0,p.Nh)(c,!0)}const v=()=>{const t=(0,r.mB)(window.location.search);if("31"===t.utm_source)return"email";if(t.utm_pai)return"paid";const e=i.U2(o.tg)||document.referrer;return e?e.includes("/t.co/")?"twitter":e.includes("cdn.ampproject.org")?"amp":e.includes("google.")?"google":e.includes("bing.")?"bing":e.includes("facebook.")?"facebook":"other":"direct"},b=t=>{t.action&&t.event?f("pinner_conversion",{...t,type:t.type||"none",trigger:t.trigger||"other",referrer:v()}):f("pinner_conversion.missing_tags")},_=({action:t,item:e,pageLocation:n,within:i})=>{var a;f(`logged_out_product.interaction.${a=n,(0,h.L6)(a)?"pin":(0,h.am)(a)?"board":(0,h.Xn)(a)?"login":(0,h.C$)(a)?"home":(0,h.cD)(a)?"profile":(0,h.J3)(a)?"ideas":(0,h.$Y)(a)?"article":(0,h.Zz)(a)?"today":(0,h.j8)(a)?"unauth-profile":"other"}.${t}`,{item:e||"none",within:i||"none"})},y=({event:t,provider:e})=>{f(`pinner_conversion.autologin.${e}.${t}`)}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/17001-33a535faaa630dea.mjs.map