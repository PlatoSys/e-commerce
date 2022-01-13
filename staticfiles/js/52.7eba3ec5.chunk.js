"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[52],{2351:function(e,n,r){r(2791);var a=r(184);n.Z=function(e){var n=e.value,r=e.text,t=e.color;return(0,a.jsxs)("div",{className:"rating",children:[(0,a.jsx)("span",{children:(0,a.jsx)("i",{style:{color:t},className:n>=1?"fas fa-star":n>=.5?"fas fa-star-half-alt":"far fa-star"})}),(0,a.jsx)("span",{children:(0,a.jsx)("i",{style:{color:t},className:n>=2?"fas fa-star":n>=1.5?"fas fa-star-half-alt":"far fa-star"})}),(0,a.jsx)("span",{children:(0,a.jsx)("i",{style:{color:t},className:n>=3?"fas fa-star":n>=2.5?"fas fa-star-half-alt":"far fa-star"})}),(0,a.jsx)("span",{children:(0,a.jsx)("i",{style:{color:t},className:n>=4?"fas fa-star":n>=3.5?"fas fa-star-half-alt":"far fa-star"})}),(0,a.jsx)("span",{children:(0,a.jsx)("i",{style:{color:t},className:n>=5?"fas fa-star":n>=4.5?"fas fa-star-half-alt":"far fa-star"})}),(0,a.jsx)("span",{children:r&&r})]})}},6052:function(e,n,r){r.r(n),r.d(n,{default:function(){return q}});var a=r(2791),t=r(9743),c=r(9140),s=r(2351),i=r(2677),o=r(3504),l=r(184);var u=function(e){var n=e.product;return(0,l.jsx)(i.Z,{sm:12,md:6,lg:4,xl:3,children:(0,l.jsxs)(c.Z,{className:"my-3 p-3 rounded",children:["Product",(0,l.jsx)(o.Link,{to:"/products/".concat(n._id),children:(0,l.jsx)(c.Z.Img,{src:n.image})}),(0,l.jsxs)(c.Z.Body,{children:[(0,l.jsx)(o.Link,{to:"/products/".concat(n._id),children:(0,l.jsx)(c.Z.Title,{as:"div",children:(0,l.jsx)("strong",{children:n.name})})}),(0,l.jsx)(c.Z.Text,{as:"div",children:(0,l.jsxs)("div",{className:"my-3",children:[n.rating," from ",n.numReviews,(0,l.jsx)(s.Z,{value:n.rating,text:"".concat(n.numReviews," reviews"),color:"#f8e825"})]})}),(0,l.jsxs)(c.Z.Text,{as:"h3",children:["$",n.price]})]})]})})},d=r(6030),f=r(159),v=r(2592),m=r(5006),x=r(6871),h=r(9660),p=r(4942),Z=r(1413),b=r(885),j=r(5987),N=r(9007);var g=function(e,n){var r=(0,a.useRef)(!0);(0,a.useEffect)((function(){if(!r.current)return e();r.current=!1}),n)},y=r(7904),C=r(5746),k=r(1683),w=Math.pow(2,31)-1;function E(e,n,r){var a=r-Date.now();e.current=a<=w?setTimeout(n,a):setTimeout((function(){return E(e,n,r)}),w)}function I(){var e=(0,C.Z)(),n=(0,a.useRef)();return(0,k.Z)((function(){return clearTimeout(n.current)})),(0,a.useMemo)((function(){var r=function(){return clearTimeout(n.current)};return{set:function(a,t){void 0===t&&(t=0),e()&&(r(),t<=w?n.current=setTimeout(a,t):E(n,a,Date.now()+t))},clear:r}}),[])}var S=r(6445),T=r(1694),P=r.n(T),L=r(239),R=(0,r(6543).Z)("carousel-caption"),M=r(162),O=["as","bsPrefix","className"],H=a.forwardRef((function(e,n){var r=e.as,a=void 0===r?"div":r,t=e.bsPrefix,c=e.className,s=(0,j.Z)(e,O),i=P()(c,(0,M.vE)(t,"carousel-item"));return(0,l.jsx)(a,(0,Z.Z)((0,Z.Z)({ref:n},s),{},{className:i}))}));H.displayName="CarouselItem";var D=H,A=r(1701),_=r(933),B=r(7202),F=r(4083),K=["as","bsPrefix","slide","fade","controls","indicators","indicatorLabels","activeIndex","onSelect","onSlide","onSlid","interval","keyboard","onKeyDown","pause","onMouseOver","onMouseOut","wrap","touch","onTouchStart","onTouchMove","onTouchEnd","prevIcon","prevLabel","nextIcon","nextLabel","variant","className","children"],U={slide:!0,fade:!1,controls:!0,indicators:!0,indicatorLabels:[],defaultActiveIndex:0,interval:5e3,keyboard:!0,pause:"hover",wrap:!0,touch:!0,prevIcon:(0,l.jsx)("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:"Previous",nextIcon:(0,l.jsx)("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:"Next"};var V=a.forwardRef((function(e,n){var r=(0,L.Ch)(e,{activeIndex:"onSelect"}),t=r.as,c=void 0===t?"div":t,s=r.bsPrefix,i=r.slide,o=r.fade,u=r.controls,d=r.indicators,f=r.indicatorLabels,v=r.activeIndex,m=r.onSelect,x=r.onSlide,h=r.onSlid,p=r.interval,C=r.keyboard,k=r.onKeyDown,w=r.pause,E=r.onMouseOver,T=r.onMouseOut,R=r.wrap,O=r.touch,H=r.onTouchStart,D=r.onTouchMove,U=r.onTouchEnd,V=r.prevIcon,W=r.prevLabel,X=r.nextIcon,$=r.nextLabel,q=r.variant,z=r.className,G=r.children,J=(0,j.Z)(r,K),Q=(0,M.vE)(s,"carousel"),Y=(0,M.SC)(),ee=(0,a.useRef)(null),ne=(0,a.useState)("next"),re=(0,b.Z)(ne,2),ae=re[0],te=re[1],ce=(0,a.useState)(!1),se=(0,b.Z)(ce,2),ie=se[0],oe=se[1],le=(0,a.useState)(!1),ue=(0,b.Z)(le,2),de=ue[0],fe=ue[1],ve=(0,a.useState)(v||0),me=(0,b.Z)(ve,2),xe=me[0],he=me[1];de||v===xe||(ee.current?te(ee.current):te((v||0)>xe?"next":"prev"),i&&fe(!0),he(v||0)),(0,a.useEffect)((function(){ee.current&&(ee.current=null)}));var pe,Ze=0;(0,A.Ed)(G,(function(e,n){++Ze,n===v&&(pe=e.props.interval)}));var be=(0,y.Z)(pe),je=(0,a.useCallback)((function(e){if(!de){var n=xe-1;if(n<0){if(!R)return;n=Ze-1}ee.current="prev",null==m||m(n,e)}}),[de,xe,m,R,Ze]),Ne=(0,N.Z)((function(e){if(!de){var n=xe+1;if(n>=Ze){if(!R)return;n=0}ee.current="next",null==m||m(n,e)}})),ge=(0,a.useRef)();(0,a.useImperativeHandle)(n,(function(){return{element:ge.current,prev:je,next:Ne}}));var ye=(0,N.Z)((function(){!document.hidden&&function(e){if(!e||!e.style||!e.parentNode||!e.parentNode.style)return!1;var n=getComputedStyle(e);return"none"!==n.display&&"hidden"!==n.visibility&&"none"!==getComputedStyle(e.parentNode).display}(ge.current)&&(Y?je():Ne())})),Ce="next"===ae?"start":"end";g((function(){i||(null==x||x(xe,Ce),null==h||h(xe,Ce))}),[xe]);var ke="".concat(Q,"-item-").concat(ae),we="".concat(Q,"-item-").concat(Ce),Ee=(0,a.useCallback)((function(e){(0,B.Z)(e),null==x||x(xe,Ce)}),[x,xe,Ce]),Ie=(0,a.useCallback)((function(){fe(!1),null==h||h(xe,Ce)}),[h,xe,Ce]),Se=(0,a.useCallback)((function(e){if(C&&!/input|textarea/i.test(e.target.tagName))switch(e.key){case"ArrowLeft":return e.preventDefault(),void(Y?Ne(e):je(e));case"ArrowRight":return e.preventDefault(),void(Y?je(e):Ne(e))}null==k||k(e)}),[C,k,je,Ne,Y]),Te=(0,a.useCallback)((function(e){"hover"===w&&oe(!0),null==E||E(e)}),[w,E]),Pe=(0,a.useCallback)((function(e){oe(!1),null==T||T(e)}),[T]),Le=(0,a.useRef)(0),Re=(0,a.useRef)(0),Me=I(),Oe=(0,a.useCallback)((function(e){Le.current=e.touches[0].clientX,Re.current=0,"hover"===w&&oe(!0),null==H||H(e)}),[w,H]),He=(0,a.useCallback)((function(e){e.touches&&e.touches.length>1?Re.current=0:Re.current=e.touches[0].clientX-Le.current,null==D||D(e)}),[D]),De=(0,a.useCallback)((function(e){if(O){var n=Re.current;Math.abs(n)>40&&(n>0?je(e):Ne(e))}"hover"===w&&Me.set((function(){oe(!1)}),p||void 0),null==U||U(e)}),[O,w,je,Ne,Me,p,U]),Ae=null!=p&&!ie&&!de,_e=(0,a.useRef)();(0,a.useEffect)((function(){var e,n;if(Ae){var r=Y?je:Ne;return _e.current=window.setInterval(document.visibilityState?ye:r,null!=(e=null!=(n=be.current)?n:p)?e:void 0),function(){null!==_e.current&&clearInterval(_e.current)}}}),[Ae,je,Ne,be,p,ye,Y]);var Be=(0,a.useMemo)((function(){return d&&Array.from({length:Ze},(function(e,n){return function(e){null==m||m(n,e)}}))}),[d,Ze,m]);return(0,l.jsxs)(c,(0,Z.Z)((0,Z.Z)({ref:ge},J),{},{onKeyDown:Se,onMouseOver:Te,onMouseOut:Pe,onTouchStart:Oe,onTouchMove:He,onTouchEnd:De,className:P()(z,Q,i&&"slide",o&&"".concat(Q,"-fade"),q&&"".concat(Q,"-").concat(q)),children:[d&&(0,l.jsx)("div",{className:"".concat(Q,"-indicators"),children:(0,A.UI)(G,(function(e,n){return(0,l.jsx)("button",{type:"button","data-bs-target":"","aria-label":null!=f&&f.length?f[n]:"Slide ".concat(n+1),className:n===xe?"active":void 0,onClick:Be?Be[n]:void 0,"aria-current":n===xe},n)}))}),(0,l.jsx)("div",{className:"".concat(Q,"-inner"),children:(0,A.UI)(G,(function(e,n){var r=n===xe;return i?(0,l.jsx)(F.Z,{in:r,onEnter:r?Ee:void 0,onEntered:r?Ie:void 0,addEndListener:_.Z,children:function(n,t){return a.cloneElement(e,(0,Z.Z)((0,Z.Z)({},t),{},{className:P()(e.props.className,r&&"entered"!==n&&ke,("entered"===n||"exiting"===n)&&"active",("entering"===n||"exiting"===n)&&we)}))}}):a.cloneElement(e,{className:P()(e.props.className,r&&"active")})}))}),u&&(0,l.jsxs)(l.Fragment,{children:[(R||0!==v)&&(0,l.jsxs)(S.Z,{className:"".concat(Q,"-control-prev"),onClick:je,children:[V,W&&(0,l.jsx)("span",{className:"visually-hidden",children:W})]}),(R||v!==Ze-1)&&(0,l.jsxs)(S.Z,{className:"".concat(Q,"-control-next"),onClick:Ne,children:[X,$&&(0,l.jsx)("span",{className:"visually-hidden",children:$})]})]})]}))}));V.displayName="Carousel",V.defaultProps=U;var W=Object.assign(V,{Caption:R,Item:D}),X=r(4523);var $=function(){var e=(0,d.I0)(),n=(0,d.v9)((function(e){return e.productTopRated})),r=n.error,t=n.loading,c=n.products;return(0,a.useEffect)((function(){e((0,f.gL)())}),[e]),t?(0,l.jsx)(v.Z,{}):r?(0,l.jsx)(m.Z,{variant:"danger",children:r}):(0,l.jsx)(W,{pause:"hover",className:"bg-dark",children:c.map((function(e){var n;return(0,l.jsx)(W.Item,{children:(0,l.jsxs)(o.Link,{to:"/product/".concat(e._id),children:[(0,l.jsx)(X.Z,(n={src:e.image,alt:e.name,maxWidth:"150px",minWidth:"150px",minHeight:"150px",maxHeight:"150px"},(0,p.Z)(n,"alt",e.name),(0,p.Z)(n,"fluid",!0),n)),(0,l.jsx)(W.Caption,{className:"carousel.caption",children:(0,l.jsxs)("h4",{children:[e.name," $",e.price]})})]})},e._id)}))})};var q=function(){var e=(0,d.I0)(),n=(0,x.TH)(),r=(0,d.v9)((function(e){return e.productList})),c=r.error,s=r.loading,i=r.products,o=r.page,p=r.pages,Z=n.search;return(0,a.useEffect)((function(){e((0,f.tr)(Z))}),[e,Z]),(0,l.jsx)(a.Suspense,{fallback:(0,l.jsx)(v.Z,{}),children:(0,l.jsxs)(a.Fragment,{children:[!Z&&(0,l.jsx)($,{}),(0,l.jsx)("h1",{children:"Latest Products"}),s?(0,l.jsx)(v.Z,{}):c?(0,l.jsx)(m.Z,{variant:"danger",children:c}):(0,l.jsxs)("div",{children:[(0,l.jsx)(t.Z,{lg:"2px",children:i.map((function(e){return(0,l.jsx)(u,{product:e},e._id)}))}),(0,l.jsx)(h.Z,{page:o,pages:p,keyword:Z})]})]})})}},1683:function(e,n,r){r.d(n,{Z:function(){return t}});var a=r(2791);function t(e){var n=function(e){var n=(0,a.useRef)(e);return n.current=e,n}(e);(0,a.useEffect)((function(){return function(){return n.current()}}),[])}},9140:function(e,n,r){r.d(n,{Z:function(){return T}});var a=r(1413),t=r(5987),c=r(1694),s=r.n(c),i=r(2791),o=r(162),l=r(6543),u=r(7472),d=r(184),f=["bsPrefix","className","variant","as"],v=i.forwardRef((function(e,n){var r=e.bsPrefix,c=e.className,i=e.variant,l=e.as,u=void 0===l?"img":l,v=(0,t.Z)(e,f),m=(0,o.vE)(r,"card-img");return(0,d.jsx)(u,(0,a.Z)({ref:n,className:s()(i?"".concat(m,"-").concat(i):m,c)},v))}));v.displayName="CardImg";var m=v,x=r(6040),h=["bsPrefix","className","as"],p=i.forwardRef((function(e,n){var r=e.bsPrefix,c=e.className,l=e.as,u=void 0===l?"div":l,f=(0,t.Z)(e,h),v=(0,o.vE)(r,"card-header"),m=(0,i.useMemo)((function(){return{cardHeaderBsPrefix:v}}),[v]);return(0,d.jsx)(x.Z.Provider,{value:m,children:(0,d.jsx)(u,(0,a.Z)((0,a.Z)({ref:n},f),{},{className:s()(c,v)}))})}));p.displayName="CardHeader";var Z=p,b=["bsPrefix","className","bg","text","border","body","children","as"],j=(0,u.Z)("h5"),N=(0,u.Z)("h6"),g=(0,l.Z)("card-body"),y=(0,l.Z)("card-title",{Component:j}),C=(0,l.Z)("card-subtitle",{Component:N}),k=(0,l.Z)("card-link",{Component:"a"}),w=(0,l.Z)("card-text",{Component:"p"}),E=(0,l.Z)("card-footer"),I=(0,l.Z)("card-img-overlay"),S=i.forwardRef((function(e,n){var r=e.bsPrefix,c=e.className,i=e.bg,l=e.text,u=e.border,f=e.body,v=e.children,m=e.as,x=void 0===m?"div":m,h=(0,t.Z)(e,b),p=(0,o.vE)(r,"card");return(0,d.jsx)(x,(0,a.Z)((0,a.Z)({ref:n},h),{},{className:s()(c,p,i&&"bg-".concat(i),l&&"text-".concat(l),u&&"border-".concat(u)),children:f?(0,d.jsx)(g,{children:v}):v}))}));S.displayName="Card",S.defaultProps={body:!1};var T=Object.assign(S,{Img:m,Title:y,Subtitle:C,Body:g,Link:k,Text:w,Header:Z,Footer:E,ImgOverlay:I})},6040:function(e,n,r){var a=r(2791).createContext(null);a.displayName="CardHeaderContext",n.Z=a},1701:function(e,n,r){r.d(n,{UI:function(){return t},Ed:function(){return c},XW:function(){return s}});var a=r(2791);function t(e,n){var r=0;return a.Children.map(e,(function(e){return a.isValidElement(e)?n(e,r++):e}))}function c(e,n){var r=0;a.Children.forEach(e,(function(e){a.isValidElement(e)&&n(e,r++)}))}function s(e,n){return a.Children.toArray(e).some((function(e){return a.isValidElement(e)&&e.type===n}))}},4523:function(e,n,r){var a=r(1413),t=r(5987),c=r(1694),s=r.n(c),i=r(2791),o=r(2007),l=r.n(o),u=r(162),d=r(184),f=["bsPrefix","className","fluid","rounded","roundedCircle","thumbnail"],v=(l().string,l().bool,l().bool,l().bool,l().bool,i.forwardRef((function(e,n){var r=e.bsPrefix,c=e.className,i=e.fluid,o=e.rounded,l=e.roundedCircle,v=e.thumbnail,m=(0,t.Z)(e,f);return r=(0,u.vE)(r,"img"),(0,d.jsx)("img",(0,a.Z)((0,a.Z)({ref:n},m),{},{className:s()(c,i&&"".concat(r,"-fluid"),o&&"rounded",l&&"rounded-circle",v&&"".concat(r,"-thumbnail"))}))})));v.displayName="Image",v.defaultProps={fluid:!1,rounded:!1,roundedCircle:!1,thumbnail:!1},n.Z=v}}]);
//# sourceMappingURL=52.7eba3ec5.chunk.js.map