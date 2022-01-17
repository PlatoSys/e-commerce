"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[52],{2351:function(e,n,r){r(2791);var a=r(184);n.Z=function(e){var n=e.value,r=e.text,t=e.color;return(0,a.jsxs)("div",{className:"rating",children:[(0,a.jsx)("span",{children:(0,a.jsx)("i",{style:{color:t},className:n>=1?"fas fa-star":n>=.5?"fas fa-star-half-alt":"far fa-star"})}),(0,a.jsx)("span",{children:(0,a.jsx)("i",{style:{color:t},className:n>=2?"fas fa-star":n>=1.5?"fas fa-star-half-alt":"far fa-star"})}),(0,a.jsx)("span",{children:(0,a.jsx)("i",{style:{color:t},className:n>=3?"fas fa-star":n>=2.5?"fas fa-star-half-alt":"far fa-star"})}),(0,a.jsx)("span",{children:(0,a.jsx)("i",{style:{color:t},className:n>=4?"fas fa-star":n>=3.5?"fas fa-star-half-alt":"far fa-star"})}),(0,a.jsx)("span",{children:(0,a.jsx)("i",{style:{color:t},className:n>=5?"fas fa-star":n>=4.5?"fas fa-star-half-alt":"far fa-star"})}),(0,a.jsx)("span",{children:r&&r})]})}},6052:function(e,n,r){r.r(n),r.d(n,{default:function(){return W}});var a=r(2791),t=r(9743),c=r(9140),s=r(2351),o=r(2677),i=r(3504),l=r(184);var u=function(e){var n=e.product;return(0,l.jsx)(o.Z,{sm:12,md:6,lg:4,xl:3,children:(0,l.jsxs)(c.Z,{className:"my-3 p-3 rounded",children:["Product",(0,l.jsx)(i.Link,{to:"/products/".concat(n._id),children:(0,l.jsx)(c.Z.Img,{src:n.image,alt:n.name,height:"auto",width:"auto"})}),(0,l.jsxs)(c.Z.Body,{children:[(0,l.jsx)(i.Link,{to:"/products/".concat(n._id),children:(0,l.jsx)(c.Z.Title,{as:"div",children:(0,l.jsx)("strong",{children:n.name})})}),(0,l.jsx)(c.Z.Text,{as:"div",children:(0,l.jsxs)("div",{className:"my-3",children:[n.rating," from ",n.numReviews,(0,l.jsx)(s.Z,{value:n.rating,text:"".concat(n.numReviews," reviews"),color:"#f8e825"})]})}),(0,l.jsxs)(c.Z.Text,{as:"h2",style:{padding:"1rem"},children:["$",n.price]})]})]})})},d=r(6030),f=r(159),v=r(2592),m=r(5006),x=r(6871),h=r(9660),p=r(1413),b=r(885),Z=r(5987),j=r(9007);var N=function(e,n){var r=(0,a.useRef)(!0);(0,a.useEffect)((function(){if(!r.current)return e();r.current=!1}),n)},g=r(7904),y=r(5746),C=r(1683),k=Math.pow(2,31)-1;function w(e,n,r){var a=r-Date.now();e.current=a<=k?setTimeout(n,a):setTimeout((function(){return w(e,n,r)}),k)}function E(){var e=(0,y.Z)(),n=(0,a.useRef)();return(0,C.Z)((function(){return clearTimeout(n.current)})),(0,a.useMemo)((function(){var r=function(){return clearTimeout(n.current)};return{set:function(a,t){void 0===t&&(t=0),e()&&(r(),t<=k?n.current=setTimeout(a,t):w(n,a,Date.now()+t))},clear:r}}),[])}var I=r(6445),S=r(1694),T=r.n(S),P=r(239),L=(0,r(6543).Z)("carousel-caption"),R=r(162),M=["as","bsPrefix","className"],O=a.forwardRef((function(e,n){var r=e.as,a=void 0===r?"div":r,t=e.bsPrefix,c=e.className,s=(0,Z.Z)(e,M),o=T()(c,(0,R.vE)(t,"carousel-item"));return(0,l.jsx)(a,(0,p.Z)((0,p.Z)({ref:n},s),{},{className:o}))}));O.displayName="CarouselItem";var D=O,H=r(1701),A=r(933),_=r(7202),B=r(4083),F=["as","bsPrefix","slide","fade","controls","indicators","indicatorLabels","activeIndex","onSelect","onSlide","onSlid","interval","keyboard","onKeyDown","pause","onMouseOver","onMouseOut","wrap","touch","onTouchStart","onTouchMove","onTouchEnd","prevIcon","prevLabel","nextIcon","nextLabel","variant","className","children"],K={slide:!0,fade:!1,controls:!0,indicators:!0,indicatorLabels:[],defaultActiveIndex:0,interval:5e3,keyboard:!0,pause:"hover",wrap:!0,touch:!0,prevIcon:(0,l.jsx)("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:"Previous",nextIcon:(0,l.jsx)("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:"Next"};var U=a.forwardRef((function(e,n){var r=(0,P.Ch)(e,{activeIndex:"onSelect"}),t=r.as,c=void 0===t?"div":t,s=r.bsPrefix,o=r.slide,i=r.fade,u=r.controls,d=r.indicators,f=r.indicatorLabels,v=r.activeIndex,m=r.onSelect,x=r.onSlide,h=r.onSlid,y=r.interval,C=r.keyboard,k=r.onKeyDown,w=r.pause,S=r.onMouseOver,L=r.onMouseOut,M=r.wrap,O=r.touch,D=r.onTouchStart,K=r.onTouchMove,U=r.onTouchEnd,V=r.prevIcon,X=r.prevLabel,$=r.nextIcon,W=r.nextLabel,q=r.variant,z=r.className,G=r.children,J=(0,Z.Z)(r,F),Q=(0,R.vE)(s,"carousel"),Y=(0,R.SC)(),ee=(0,a.useRef)(null),ne=(0,a.useState)("next"),re=(0,b.Z)(ne,2),ae=re[0],te=re[1],ce=(0,a.useState)(!1),se=(0,b.Z)(ce,2),oe=se[0],ie=se[1],le=(0,a.useState)(!1),ue=(0,b.Z)(le,2),de=ue[0],fe=ue[1],ve=(0,a.useState)(v||0),me=(0,b.Z)(ve,2),xe=me[0],he=me[1];de||v===xe||(ee.current?te(ee.current):te((v||0)>xe?"next":"prev"),o&&fe(!0),he(v||0)),(0,a.useEffect)((function(){ee.current&&(ee.current=null)}));var pe,be=0;(0,H.Ed)(G,(function(e,n){++be,n===v&&(pe=e.props.interval)}));var Ze=(0,g.Z)(pe),je=(0,a.useCallback)((function(e){if(!de){var n=xe-1;if(n<0){if(!M)return;n=be-1}ee.current="prev",null==m||m(n,e)}}),[de,xe,m,M,be]),Ne=(0,j.Z)((function(e){if(!de){var n=xe+1;if(n>=be){if(!M)return;n=0}ee.current="next",null==m||m(n,e)}})),ge=(0,a.useRef)();(0,a.useImperativeHandle)(n,(function(){return{element:ge.current,prev:je,next:Ne}}));var ye=(0,j.Z)((function(){!document.hidden&&function(e){if(!e||!e.style||!e.parentNode||!e.parentNode.style)return!1;var n=getComputedStyle(e);return"none"!==n.display&&"hidden"!==n.visibility&&"none"!==getComputedStyle(e.parentNode).display}(ge.current)&&(Y?je():Ne())})),Ce="next"===ae?"start":"end";N((function(){o||(null==x||x(xe,Ce),null==h||h(xe,Ce))}),[xe]);var ke="".concat(Q,"-item-").concat(ae),we="".concat(Q,"-item-").concat(Ce),Ee=(0,a.useCallback)((function(e){(0,_.Z)(e),null==x||x(xe,Ce)}),[x,xe,Ce]),Ie=(0,a.useCallback)((function(){fe(!1),null==h||h(xe,Ce)}),[h,xe,Ce]),Se=(0,a.useCallback)((function(e){if(C&&!/input|textarea/i.test(e.target.tagName))switch(e.key){case"ArrowLeft":return e.preventDefault(),void(Y?Ne(e):je(e));case"ArrowRight":return e.preventDefault(),void(Y?je(e):Ne(e))}null==k||k(e)}),[C,k,je,Ne,Y]),Te=(0,a.useCallback)((function(e){"hover"===w&&ie(!0),null==S||S(e)}),[w,S]),Pe=(0,a.useCallback)((function(e){ie(!1),null==L||L(e)}),[L]),Le=(0,a.useRef)(0),Re=(0,a.useRef)(0),Me=E(),Oe=(0,a.useCallback)((function(e){Le.current=e.touches[0].clientX,Re.current=0,"hover"===w&&ie(!0),null==D||D(e)}),[w,D]),De=(0,a.useCallback)((function(e){e.touches&&e.touches.length>1?Re.current=0:Re.current=e.touches[0].clientX-Le.current,null==K||K(e)}),[K]),He=(0,a.useCallback)((function(e){if(O){var n=Re.current;Math.abs(n)>40&&(n>0?je(e):Ne(e))}"hover"===w&&Me.set((function(){ie(!1)}),y||void 0),null==U||U(e)}),[O,w,je,Ne,Me,y,U]),Ae=null!=y&&!oe&&!de,_e=(0,a.useRef)();(0,a.useEffect)((function(){var e,n;if(Ae){var r=Y?je:Ne;return _e.current=window.setInterval(document.visibilityState?ye:r,null!=(e=null!=(n=Ze.current)?n:y)?e:void 0),function(){null!==_e.current&&clearInterval(_e.current)}}}),[Ae,je,Ne,Ze,y,ye,Y]);var Be=(0,a.useMemo)((function(){return d&&Array.from({length:be},(function(e,n){return function(e){null==m||m(n,e)}}))}),[d,be,m]);return(0,l.jsxs)(c,(0,p.Z)((0,p.Z)({ref:ge},J),{},{onKeyDown:Se,onMouseOver:Te,onMouseOut:Pe,onTouchStart:Oe,onTouchMove:De,onTouchEnd:He,className:T()(z,Q,o&&"slide",i&&"".concat(Q,"-fade"),q&&"".concat(Q,"-").concat(q)),children:[d&&(0,l.jsx)("div",{className:"".concat(Q,"-indicators"),children:(0,H.UI)(G,(function(e,n){return(0,l.jsx)("button",{type:"button","data-bs-target":"","aria-label":null!=f&&f.length?f[n]:"Slide ".concat(n+1),className:n===xe?"active":void 0,onClick:Be?Be[n]:void 0,"aria-current":n===xe},n)}))}),(0,l.jsx)("div",{className:"".concat(Q,"-inner"),children:(0,H.UI)(G,(function(e,n){var r=n===xe;return o?(0,l.jsx)(B.Z,{in:r,onEnter:r?Ee:void 0,onEntered:r?Ie:void 0,addEndListener:A.Z,children:function(n,t){return a.cloneElement(e,(0,p.Z)((0,p.Z)({},t),{},{className:T()(e.props.className,r&&"entered"!==n&&ke,("entered"===n||"exiting"===n)&&"active",("entering"===n||"exiting"===n)&&we)}))}}):a.cloneElement(e,{className:T()(e.props.className,r&&"active")})}))}),u&&(0,l.jsxs)(l.Fragment,{children:[(M||0!==v)&&(0,l.jsxs)(I.Z,{className:"".concat(Q,"-control-prev"),onClick:je,children:[V,X&&(0,l.jsx)("span",{className:"visually-hidden",children:X})]}),(M||v!==be-1)&&(0,l.jsxs)(I.Z,{className:"".concat(Q,"-control-next"),onClick:Ne,children:[$,W&&(0,l.jsx)("span",{className:"visually-hidden",children:W})]})]})]}))}));U.displayName="Carousel",U.defaultProps=K;var V=Object.assign(U,{Caption:L,Item:D}),X=r(4523);var $=function(){var e=(0,d.I0)(),n=(0,d.v9)((function(e){return e.productTopRated})),r=n.error,t=n.loading,c=n.products;return(0,a.useEffect)((function(){e((0,f.gL)())}),[e]),t?(0,l.jsx)(v.Z,{}):r?(0,l.jsx)(m.Z,{variant:"danger",children:r}):(0,l.jsx)(V,{pause:"hover",className:"bg-dark",children:c.map((function(e){return(0,l.jsx)(V.Item,{children:(0,l.jsxs)(i.Link,{to:"/product/".concat(e._id),children:[(0,l.jsx)(X.Z,{src:e.image,alt:e.name,fluid:!0}),(0,l.jsx)(V.Caption,{className:"carousel.caption",children:(0,l.jsxs)("h4",{children:[e.name," $",e.price]})})]})},e._id)}))})};var W=function(){var e=(0,d.I0)(),n=(0,x.TH)(),r=(0,d.v9)((function(e){return e.productList})),c=r.error,s=r.loading,o=r.products,i=r.page,p=r.pages,b=n.search;return(0,a.useEffect)((function(){e((0,f.tr)(b))}),[e,b]),(0,l.jsx)(a.Suspense,{fallback:(0,l.jsx)(v.Z,{}),children:(0,l.jsxs)(a.Fragment,{children:[!b&&(0,l.jsx)($,{}),(0,l.jsx)("h1",{children:"Latest Products"}),s?(0,l.jsx)(v.Z,{}):c?(0,l.jsx)(m.Z,{variant:"danger",children:c}):(0,l.jsxs)("div",{children:[(0,l.jsx)(t.Z,{lg:"2px",children:o.map((function(e){return(0,l.jsx)(u,{product:e},e._id)}))}),(0,l.jsx)(h.Z,{page:i,pages:p,keyword:b})]})]})})}},1683:function(e,n,r){r.d(n,{Z:function(){return t}});var a=r(2791);function t(e){var n=function(e){var n=(0,a.useRef)(e);return n.current=e,n}(e);(0,a.useEffect)((function(){return function(){return n.current()}}),[])}},9140:function(e,n,r){r.d(n,{Z:function(){return T}});var a=r(1413),t=r(5987),c=r(1694),s=r.n(c),o=r(2791),i=r(162),l=r(6543),u=r(7472),d=r(184),f=["bsPrefix","className","variant","as"],v=o.forwardRef((function(e,n){var r=e.bsPrefix,c=e.className,o=e.variant,l=e.as,u=void 0===l?"img":l,v=(0,t.Z)(e,f),m=(0,i.vE)(r,"card-img");return(0,d.jsx)(u,(0,a.Z)({ref:n,className:s()(o?"".concat(m,"-").concat(o):m,c)},v))}));v.displayName="CardImg";var m=v,x=r(6040),h=["bsPrefix","className","as"],p=o.forwardRef((function(e,n){var r=e.bsPrefix,c=e.className,l=e.as,u=void 0===l?"div":l,f=(0,t.Z)(e,h),v=(0,i.vE)(r,"card-header"),m=(0,o.useMemo)((function(){return{cardHeaderBsPrefix:v}}),[v]);return(0,d.jsx)(x.Z.Provider,{value:m,children:(0,d.jsx)(u,(0,a.Z)((0,a.Z)({ref:n},f),{},{className:s()(c,v)}))})}));p.displayName="CardHeader";var b=p,Z=["bsPrefix","className","bg","text","border","body","children","as"],j=(0,u.Z)("h5"),N=(0,u.Z)("h6"),g=(0,l.Z)("card-body"),y=(0,l.Z)("card-title",{Component:j}),C=(0,l.Z)("card-subtitle",{Component:N}),k=(0,l.Z)("card-link",{Component:"a"}),w=(0,l.Z)("card-text",{Component:"p"}),E=(0,l.Z)("card-footer"),I=(0,l.Z)("card-img-overlay"),S=o.forwardRef((function(e,n){var r=e.bsPrefix,c=e.className,o=e.bg,l=e.text,u=e.border,f=e.body,v=e.children,m=e.as,x=void 0===m?"div":m,h=(0,t.Z)(e,Z),p=(0,i.vE)(r,"card");return(0,d.jsx)(x,(0,a.Z)((0,a.Z)({ref:n},h),{},{className:s()(c,p,o&&"bg-".concat(o),l&&"text-".concat(l),u&&"border-".concat(u)),children:f?(0,d.jsx)(g,{children:v}):v}))}));S.displayName="Card",S.defaultProps={body:!1};var T=Object.assign(S,{Img:m,Title:y,Subtitle:C,Body:g,Link:k,Text:w,Header:b,Footer:E,ImgOverlay:I})},6040:function(e,n,r){var a=r(2791).createContext(null);a.displayName="CardHeaderContext",n.Z=a},1701:function(e,n,r){r.d(n,{UI:function(){return t},Ed:function(){return c},XW:function(){return s}});var a=r(2791);function t(e,n){var r=0;return a.Children.map(e,(function(e){return a.isValidElement(e)?n(e,r++):e}))}function c(e,n){var r=0;a.Children.forEach(e,(function(e){a.isValidElement(e)&&n(e,r++)}))}function s(e,n){return a.Children.toArray(e).some((function(e){return a.isValidElement(e)&&e.type===n}))}},4523:function(e,n,r){var a=r(1413),t=r(5987),c=r(1694),s=r.n(c),o=r(2791),i=r(2007),l=r.n(i),u=r(162),d=r(184),f=["bsPrefix","className","fluid","rounded","roundedCircle","thumbnail"],v=(l().string,l().bool,l().bool,l().bool,l().bool,o.forwardRef((function(e,n){var r=e.bsPrefix,c=e.className,o=e.fluid,i=e.rounded,l=e.roundedCircle,v=e.thumbnail,m=(0,t.Z)(e,f);return r=(0,u.vE)(r,"img"),(0,d.jsx)("img",(0,a.Z)((0,a.Z)({ref:n},m),{},{className:s()(c,o&&"".concat(r,"-fluid"),i&&"rounded",l&&"rounded-circle",v&&"".concat(r,"-thumbnail"))}))})));v.displayName="Image",v.defaultProps={fluid:!1,rounded:!1,roundedCircle:!1,thumbnail:!1},n.Z=v}}]);
//# sourceMappingURL=52.1e67504b.chunk.js.map