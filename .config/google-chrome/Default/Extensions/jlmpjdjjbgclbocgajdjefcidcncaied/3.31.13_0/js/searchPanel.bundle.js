"use strict";(self.webpackChunkextension=self.webpackChunkextension||[]).push([[949],{98186:(e,t,r)=>{r.r(t),r.d(t,{SearchPanel:()=>Fe,default:()=>Je});var n,o,i=r(98935),a=r(28076),s=r(29901),l=r(83849),u=r.n(l),c=r(2832),d=r(51911),v=r(20638),p=r(16309),f=r(4714),m=r(20102),y=r(86577),b=r(90614),g=r(30247),h=r(61991),x=r(24283),O=r(68071),k=r(12795),P=function(){},N=(0,s.createContext)({provider:k.xQ.Posts,providerText:void 0,query:"",isActive:!1,setProvider:P,setActive:P}),w=r(96628),q=r(98309),S=r(88467),A=s.createElement,C=function(e){var t=e.className,r=e.keys,n=(0,s.useState)(!1),o=n[0],i=n[1];return(0,s.useEffect)((function(){i(!0)}),[]),o?A("div",{className:u()(t,"flex")},r.map((function(e,t){return A(s.Fragment,{key:e},A("kbd",{className:"flex min-w-5 justify-center rounded-8 border border-border-subtlest-tertiary bg-background-subtle px-2 py-0.5 font-sans text-text-tertiary typo-footnote"},e),t!==r.length-1&&A("span",{className:"mx-1 py-0.5 text-text-tertiary typo-footnote"},"+"))}))):null},j=r(53767),Z=r(23016),E=r(86821),Q=["className"],T=s.createElement,_=k.xQ.Posts,D=(n={},(0,a.Z)(n,k.xQ.Posts,"Search posts"),(0,a.Z)(n,k.xQ.Chat,"Ask daily.dev AI"),(0,a.Z)(n,k.xQ.Tags,"Search tags"),n),L=(o={},(0,a.Z)(o,k.xQ.Posts,Z.W),(0,a.Z)(o,k.xQ.Chat,(function(e){var t=e.className,r=(0,j.Z)(e,Q);return T(E.K,(0,d.Z)({className:u()(t,"bg-gradient-to-t from-accent-onion-default to-accent-cabbage-default text-white"),secondary:!0},r))})),(0,a.Z)(o,k.xQ.Tags,Z.W),o),I=s.createElement;function R(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function z(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?R(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):R(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var F,J,M=z(z({},L),{},(0,a.Z)({},k.xQ.Posts,void 0)),B=function(e){var t=e.className,r=(0,s.useContext)(N),n=M[r.provider];return n?I(n,{className:u()(t,"rounded-8 p-1"),size:f.Jh.Large}):null},H=r(86138),X=s.createElement,K=function(e){var t=e.className,r=(0,s.useContext)(N),n=(0,H.C)();if(!r.providerText)return null;var o=null==n?void 0:n.sanitize;return X("div",{className:u()(null==t?void 0:t.main,"pointer-events-none absolute left-14 flex h-10")},X("span",{"aria-hidden":"true",className:u()(null==t?void 0:t.input,"invisible typo-body")},r.query),!!o&&X("div",{className:"ml-0.5 flex items-center rounded-4 bg-overlay-quaternary-cabbage px-1"},X("span",{className:"text-text-tertiary typo-footnote",dangerouslySetInnerHTML:{__html:o(r.providerText)}})))},V=r(93309),W=r(62699),Y=r.n(W),G=r(63496),U=r(96206),$=r(51273),ee=r(85734),te=(F={},(0,a.Z)(F,k.xQ.Posts,k.YX),(0,a.Z)(F,k.xQ.Tags,k.Rv),F),re=(J={},(0,a.Z)(J,k.xQ.Posts,(function(e){return e.searchPostSuggestions})),(0,a.Z)(J,k.xQ.Tags,(function(e){return e.searchTagSuggestions})),J),ne=function(){var e=(0,c.useRouter)(),t=(0,G.Y)().requestMethod,r=(0,$.PG)().getFeatureValue;return{search:(0,s.useCallback)((function(t){var r=t.provider,n=t.query;e.push((0,k.Tt)({query:n,provider:r}))}),[e]),getSuggestions:(0,s.useCallback)(function(){var e=(0,V.Z)(Y().mark((function e(n){var o,i,a,s,l,u,c,d;return Y().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=n.provider,i=n.query,a=n.limit,s=void 0===a?k.qQ:a,u=re[o],(l=te[o])&&u){e.next=5;break}return e.abrupt("return",{hits:[]});case 5:return c=r(ee.z.searchVersion),e.next=8,t(U.B3,l,{query:i,version:c,limit:s});case 8:return d=e.sent,e.abrupt("return",u(d));case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[r,t])}},oe=r(6189),ie=r(86825),ae=function(e){var t=e.provider,r=e.text,n=(0,s.useContext)(N),o=function(){n.setProvider({provider:t,text:r||D[t]})},i=function(){n.setProvider({provider:void 0})};return{onMouseEnter:o,onMouseLeave:i,onFocus:function(e){(null==e?void 0:e.target)instanceof HTMLElement&&e.target.setAttribute("data-search-panel-active","true");o()},onBlur:function(e){(null==e?void 0:e.target)instanceof HTMLElement&&e.target.removeAttribute("data-search-panel-active");i()}}},se=s.createElement,le=[(0,S.ad)()?"⌘":"Ctrl","K"],ue=function(e){var t=e.className,r=e.inputProps,n=e.valueChanged,o=e.children,i=ne().search,a=(0,s.useContext)(N),l=(0,s.useRef)(),c=(0,h.Os)().trackEvent,P=r||{},A=P.value,j=P.readOnly,Z=P.disabled,E=P.onFocus,Q=P.onBlur,T=P.onClick,L=P.placeholder,I=void 0===L?a.isActive?"Search posts or ask a question...":"Search":L,R=(0,g.i)(A,n),z=R.inputRef,F=R.focused,J=R.hasInput,M=R.onFocus,H=R.onBlur,X=R.onInput,V=R.setInput,W=(0,x.Eu)(),Y=W.isLoggedIn,G=W.showLogin,U=(0,w.V)(w.d.Laptop);(0,q.O)(globalThis,"click",(function(e){(0,S.le)(l.current)||l.current.contains(e.target)||!l.current||(H(),a.setActive({isActive:!1}))}));var $=a.isActive&&a.query.length>=k.RX;(0,q.O)(globalThis,"keydown",(function(e){var t,r;(0,S.IN)({event:e})&&"k"===e.key&&(e.preventDefault(),a.isActive?(null===(t=z.current)||void 0===t||t.blur(),a.setActive({isActive:!1})):(null===(r=z.current)||void 0===r||r.focus(),a.setActive({isActive:!0}),c({event_name:p.s6.KeyboardShortcutTriggered,target_id:p.LT.SearchActivation})))})),(0,q.O)(globalThis,"keydown",(function(e){var t;"Escape"===e.key&&(e.preventDefault(),a.isActive&&(null===(t=z.current)||void 0===t||t.blur(),a.setActive({isActive:!1})))}));var ee=ae({provider:void 0,text:D[_]});return se("div",{className:u()(null==t?void 0:t.container)},se("form",{onSubmit:function(e,t){var r,n;if(e.preventDefault(),!Y)return G({trigger:O.IP.SearchInput});var o=null!=t?t:z.current.value,s=null!==(r=a.provider)&&void 0!==r?r:_;return c({event_name:p.s6.SubmitSearch,extra:JSON.stringify({query:o,provider:s})}),V(o),a.setActive({isActive:!1}),null===(n=z.current)||void 0===n||n.blur(),i({provider:s,query:o})},className:u()(null==t?void 0:t.form,"relative w-full")},se(v.n,{className:u()("relative h-12 items-center rounded-12 !bg-background-subtle !px-3 laptop:border laptop:py-1 laptop:backdrop-blur-[3.75rem]",null==t?void 0:t.field,{focused:F},a.isActive&&"!border-border-subtlest-tertiary laptop:shadow-2",a.isActive&&$?"laptop:rounded-b-none laptop:rounded-t-16":"laptop:rounded-16"),ref:l},se(y.p,{size:f.Jh.Large,className:"mr-3 text-text-tertiary"}),se(v._,(0,d.Z)({},r,{"data-search-panel-item":"true",placeholder:I,ref:z,onFocus:function(e){M(),null==E||E(e),ee.onFocus(e),c({event_name:p.s6.FocusSearch})},onBlur:function(e){H(),null==Q||Q(e),ee.onBlur(e)},onClick:function(e){Y||G({trigger:O.IP.SearchInput}),null==T||T(e)},onInput:X,type:"primary",autoComplete:"off",className:u()("h-full flex-1",a.isActive?"!placeholder-text-quaternary":"!placeholder-text-tertiary",(0,m.rI)({readOnly:j,disabled:Z,hasInput:J,focused:F}))})),se("div",{className:u()("flex h-full items-center bg-background-subtle",a.isActive&&"-mr-2")},a.isActive&&!!a.query&&se(oe.zx,{id:"search-panel-input-clear-button",type:"button",className:"mr-2",size:ie.qE.XSmall,title:"Clear query",onClick:function(e){var t;e.stopPropagation(),V(""),null===(t=z.current)||void 0===t||t.focus()},icon:se(b.R,{secondary:!0})}),a.isActive&&se("div",{className:"flex h-full items-center border-l border-theme-float laptop:hidden"},se(oe.zx,{type:"button",onClick:function(){a.setActive({isActive:!1})}},"Cancel"))),se("div",{className:"z-1 hidden items-center gap-3 laptop:flex"},!a.isActive&&se(C,{keys:le}),a.isActive&&a.query.length>=k.RX&&se(s.Fragment,null,U&&se(K,null),se(B,{className:"ml-2"})))),o))},ce=["children"],de=s.createElement,ve=function(e){var t=e.children,r=(0,j.Z)(e,ce);return de("button",(0,d.Z)({type:"button","data-search-panel-item":"true"},r),t)},pe=["icon","children"],fe=s.createElement,me=function(e){var t=e.icon,r=e.children,n=(0,j.Z)(e,pe);return fe(ve,(0,d.Z)({},n,{className:u()(n.className,"flex w-full items-center gap-2 overflow-hidden rounded-12 p-2 hover:bg-theme-float focus:bg-theme-float laptop:text-text-tertiary")}),!!t&&t,r)},ye=s.createElement,be=function(e){var t=e.provider,r=(0,s.useContext)(N),n=L[t],o=ne().search,i=ae({provider:t}),a=t===_,l=!r.provider&&a,c=(0,h.Os)().trackEvent;return ye(me,(0,d.Z)({icon:ye(n,{className:"rounded-6 p-0.5",size:f.Jh.Small}),onClick:function(){c({event_name:p.s6.SubmitSearch,extra:JSON.stringify({query:r.query,provider:t})}),o({provider:t,query:r.query})},className:u()(l&&"bg-theme-float"),"data-search-panel-item":!a,tabIndex:a?-1:void 0},i),ye("span",{className:"flex-shrink overflow-hidden overflow-ellipsis whitespace-nowrap typo-callout"},r.query," ",ye("span",{className:"text-text-quaternary typo-footnote"},D[t])))},ge=r(2067),he=r(43573);function xe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Oe(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?xe(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):xe(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var ke=function(e){var t=e.provider,r=e.query,n=e.limit,o=void 0===n?k.qQ:n,i=(0,x.Eu)().user,a=ne().getSuggestions,l=(0,ge.a)((0,he.e0)(he.dt.Search,i,"suggestions",{provider:t,query:r}),(0,V.Z)(Y().mark((function e(){return Y().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",a({provider:t,query:r,limit:o}));case 1:case"end":return e.stop()}}),e)}))),{enabled:(null==r?void 0:r.length)>=k.RX,staleTime:he.R.Default,select:(0,s.useCallback)((function(e){var t;return e?Oe(Oe({},e),{},{hits:(null==e||null===(t=e.hits)||void 0===t?void 0:t.slice(0,o))||[]}):e}),[o])}),u=l.data;return{isLoading:l.isLoading,suggestions:u}},Pe=r(32575),Ne=["suggestion"],we=s.createElement,qe=function(e){var t=e.suggestion,r=(0,j.Z)(e,Ne),n=ae({provider:k.xQ.Posts,text:t.title}),o=(0,H.C)(),i=null==o?void 0:o.sanitize;return we(me,(0,d.Z)({},r,{icon:we(Z.W,null)},n),!!i&&we("span",{className:"flex-shrink overflow-hidden overflow-ellipsis whitespace-nowrap typo-subhead [&>strong]:text-text-primary",dangerouslySetInnerHTML:{__html:i(t.title)}}))},Se=function(e){var t,r,n=e.className,o=e.title,i=(0,c.useRouter)(),a=(0,s.useContext)(h.ZP).trackEvent,l=(0,s.useContext)(N),d=ne().search,v=ke({provider:k.xQ.Posts,query:l.query}).suggestions;return null!=v&&null!==(t=v.hits)&&void 0!==t&&t.length?we("div",{className:u()(n,"flex flex-col")},we("div",{className:"relative my-2 flex items-center justify-start gap-2"},we("hr",{className:"w-2 border-border-subtlest-tertiary"}),we("span",{className:"relative inline-flex font-bold typo-footnote"},o),we("hr",{className:"flex-1 border-border-subtlest-tertiary"})),null==v||null===(r=v.hits)||void 0===r?void 0:r.map((function(e){return we(qe,{key:e.title,suggestion:e,onClick:function(){!function(e){var t=e.title.replace(k.F4,"");if(e.id)return a({event_name:p.s6.Click,target_type:p.Lm.SearchRecommendation,target_id:e.id,feed_item_title:t,extra:JSON.stringify({origin:p.aP.HomePage,provider:k.xQ.Posts})}),void i.push("".concat(Pe.uJ,"posts/").concat(e.id));d({provider:k.xQ.Posts,query:t})}(e)}})}))):null},Ae=r(64341),Ce=r(52067),je=r(75943),Ze=["provider","children"],Ee=s.createElement,Qe=function(e){var t=e.provider,r=e.children,n=(0,j.Z)(e,Ze),o=ae({provider:t});return Ee(me,(0,d.Z)({},n,o),r)},Te=r(51577),_e=s.createElement,De=function(e){var t=e.suggestion,r=e.onClick,n=ae({provider:k.xQ.Tags,text:t.title});return _e(ve,(0,d.Z)({},n,{onClick:r}),_e(Te.k,{key:t.id,tag:t.id,buttonProps:{onClick:function(e){e.preventDefault()}}}))},Le=function(e){var t,r,n=e.className,o=e.title,i=(0,c.useRouter)(),a=(0,s.useContext)(h.ZP).trackEvent,l=(0,s.useContext)(N),d=ke({provider:k.xQ.Tags,query:l.query,limit:5}).suggestions;return null!=d&&null!==(t=d.hits)&&void 0!==t&&t.length?_e("div",{className:u()(n,"flex flex-col")},_e("div",{className:"relative my-2 flex items-center justify-start gap-2"},_e("hr",{className:"w-2 border-border-subtlest-tertiary"}),_e("span",{className:"relative inline-flex font-bold typo-footnote"},o),_e("hr",{className:"flex-1 border-border-subtlest-tertiary"})),_e("div",{className:"flex-start flex flex-wrap gap-2 p-2"},null==d||null===(r=d.hits)||void 0===r?void 0:r.map((function(e){return _e(De,{key:e.title,suggestion:e,onClick:function(t){t.preventDefault(),function(e){var t=e.id||e.title.toLowerCase();a({event_name:p.s6.Click,target_type:p.Lm.SearchRecommendation,target_id:t,feed_item_title:t,extra:JSON.stringify({origin:p.aP.HomePage,provider:k.xQ.Tags})}),i.push("".concat(Pe.uJ,"tags/").concat(t))}(e)}})})))):null},Ie=s.createElement;function Re(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ze(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Re(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Re(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Fe=function(e){var t=e.className;(0,s.useContext)(Ae.ZP);var r=ne().search,n=(0,c.useRouter)().query,o=(0,h.Os)().trackEvent,l=(0,s.useState)((function(){return{provider:void 0,query:"",isActive:!1,providerText:void 0}})),d=l[0],v=l[1],f=(0,s.useRef)();(0,s.useEffect)((function(){var e,t=null==n||null===(e=n.q)||void 0===e?void 0:e.toString();t&&v((function(e){return e.query?e:ze(ze({},e),{},{query:t})}))}),[null==n?void 0:n.q]);var m=(0,s.useMemo)((function(){return ze(ze({},d),{},{setProvider:function(e){var t=e.provider,r=e.text;v((function(e){return ze(ze({},e),{},{provider:t,providerText:r||void 0})}))},setActive:function(e){var t=e.isActive;v((function(e){return ze(ze({},e),{},{isActive:t})}))}})}),[d]);(0,q.O)(f,"keydown",(function(e){var t;if(d.isActive&&f.current){var r=(0,i.Z)(f.current.querySelectorAll('[data-search-panel-item="true"]')),n=r.findIndex((function(e){return"true"===e.getAttribute("data-search-panel-active")}));-1===n&&(n=0);var o=(t={},(0,a.Z)(t,S.k1.Up,-1),(0,a.Z)(t,S.k1.Down,1),(0,a.Z)(t,S.k1.Left,-1),(0,a.Z)(t,S.k1.Right,1),t),s=Object.keys(o).find((function(t){return t===e.key}));if(s){e.preventDefault();var l=r[n+o[s]];l&&l.focus()}}}));var y=d.isActive&&d.query.length>=k.RX,b=(0,Ce.F)({feature:ee.z.searchTags,shouldEvaluate:y}).value;return Ie(N.Provider,{value:m},Ie("div",{ref:f,className:u()(null==t?void 0:t.container,"flex flex-col"),"data-testid":"search-panel"},Ie(ue,{className:{container:u()("w-full laptop:w-[26.25rem] laptop:max-w-[29.5rem] laptopL:w-full laptopL:max-w-[35rem]"),field:null==t?void 0:t.field},valueChanged:function(e){v((function(t){return ze(ze({},t),{},{query:e,provider:void 0,providerText:D[_]})}))},inputProps:{value:d.query,onFocus:function(){m.setActive({isActive:!0})}}},y&&Ie("div",{className:u()("absolute w-full items-center rounded-b-16 border-0 border-border-subtlest-tertiary bg-background-default px-3 py-2 laptop:h-auto laptop:border-x laptop:border-b laptop:bg-background-subtle laptop:shadow-2")},Ie("div",{className:"flex flex-1 flex-col"},Ie(be,{provider:k.xQ.Posts}),Ie(be,{provider:k.xQ.Chat}),b&&Ie(Le,{title:"Tags"}),Ie(Se,{title:"Posts on daily.dev"}),Ie(Qe,{provider:k.xQ.Posts,onClick:function(){o({event_name:p.s6.SubmitSearch,extra:JSON.stringify({query:d.query,provider:k.xQ.Posts})}),r({provider:k.xQ.Posts,query:d.query})}},Ie("div",{className:"flex items-center justify-center text-text-tertiary typo-subhead"},"See more posts ",Ie(je.e0,{className:"!size-4 rotate-90"}))))))))};const Je=Fe}}]);