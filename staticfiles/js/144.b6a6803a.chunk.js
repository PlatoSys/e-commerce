"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[144],{159:function(e,t,n){n.d(t,{tr:function(){return l},GW:function(){return u},Ir:function(){return d},ry:function(){return p},nM:function(){return f},nE:function(){return h},gL:function(){return x}});var r=n(5861),a=n(7757),s=n.n(a),c=n(9697),i=n(4569),o=n.n(i),l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return function(){var t=(0,r.Z)(s().mark((function t(n){var r,a;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:c.w8}),t.next=4,o().get("/api/products/".concat(e));case 4:r=t.sent,a=r.data,n({type:c.fu,payload:a}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),n({type:c.cK,payload:t.t0.response&&t.t0.response.data.detail?t.t0.response.data.detail:t.t0.message});case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()},u=function(e){return function(){var t=(0,r.Z)(s().mark((function t(n){var r,a;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:c.Uy}),t.next=4,o().get("/api/products/".concat(e));case 4:r=t.sent,a=r.data,n({type:c.xe,payload:a}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),n({type:c.gh,payload:t.t0.response&&t.t0.response.data.detail?t.t0.response.data.detail:t.t0.message});case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()},d=function(e){return function(){var t=(0,r.Z)(s().mark((function t(n,r){var a,i,l,u,d;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:c.o6}),a=r(),i=a.userLogin.userInfo,l={headers:{"Content-type":"application/json",Authorization:"Bearer ".concat(i.token)}},t.next=6,o().delete("/api/product/".concat(e,"/"),l);case 6:u=t.sent,d=u.data,n({type:c.Gd,payload:d}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),n({type:c.EP,payload:t.t0.response&&t.t0.response.data.detail?t.t0.response.data.detail:t.t0.message});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e,n){return t.apply(this,arguments)}}()},p=function(){return function(){var e=(0,r.Z)(s().mark((function e(t,n){var r,a,i,l,u;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:c.tf}),r=n(),a=r.userLogin.userInfo,i={headers:{"Content-type":"application/json",Authorization:"Bearer ".concat(a.token)}},e.next=6,o().post("/api/product/".concat(0,"/"),{},i);case 6:l=e.sent,u=l.data,t({type:c.xx,payload:u}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),t({type:c.X4,payload:e.t0.response&&e.t0.response.data.detail?e.t0.response.data.detail:e.t0.message});case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,n){return e.apply(this,arguments)}}()},f=function(e){return function(){var t=(0,r.Z)(s().mark((function t(n,r){var a,i,l,u,d;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:c.eP}),a=r(),i=a.userLogin.userInfo,l={headers:{"Content-type":"application/json",Authorization:"Bearer ".concat(i.token)}},t.next=6,o().put("/api/product/".concat(e._id,"/"),e,l);case 6:u=t.sent,d=u.data,n({type:c.n$,payload:d}),n({type:c.xe,payload:d}),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),n({type:c.D1,payload:t.t0.response&&t.t0.response.data.detail?t.t0.response.data.detail:t.t0.message});case 15:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(e,n){return t.apply(this,arguments)}}()},h=function(e,t){return function(){var n=(0,r.Z)(s().mark((function n(r,a){var i,l,u,d,p;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r({type:c.U8}),i=a(),l=i.userLogin.userInfo,u={headers:{"Content-type":"application/json",Authorization:"Bearer ".concat(l.token)}},n.next=6,o().post("/api/products/".concat(e,"/reviews/"),t,u);case 6:d=n.sent,p=d.data,r({type:c.rJ,payload:p}),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(0),r({type:c._B,payload:n.t0.response&&n.t0.response.data.detail?n.t0.response.data.detail:n.t0.message});case 14:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(e,t){return n.apply(this,arguments)}}()},x=function(){return function(){var e=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:c.V5}),e.next=4,o().get("/api/products/top/");case 4:n=e.sent,r=n.data,t({type:c.QN,payload:r}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t({type:c.CH,payload:e.t0.response&&e.t0.response.data.detail?e.t0.response.data.detail:e.t0.message});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()}},5006:function(e,t,n){n(2791);var r=n(2469),a=n(184);t.Z=function(e){var t=e.variant,n=e.children;return(0,a.jsx)(r.Z,{variant:t,children:n})}},2351:function(e,t,n){n(2791);var r=n(184);t.Z=function(e){var t=e.value,n=e.text,a=e.color;return(0,r.jsxs)("div",{className:"rating",children:[(0,r.jsx)("span",{children:(0,r.jsx)("i",{style:{color:a},className:t>=1?"fas fa-star":t>=.5?"fas fa-star-half-alt":"far fa-star"})}),(0,r.jsx)("span",{children:(0,r.jsx)("i",{style:{color:a},className:t>=2?"fas fa-star":t>=1.5?"fas fa-star-half-alt":"far fa-star"})}),(0,r.jsx)("span",{children:(0,r.jsx)("i",{style:{color:a},className:t>=3?"fas fa-star":t>=2.5?"fas fa-star-half-alt":"far fa-star"})}),(0,r.jsx)("span",{children:(0,r.jsx)("i",{style:{color:a},className:t>=4?"fas fa-star":t>=3.5?"fas fa-star-half-alt":"far fa-star"})}),(0,r.jsx)("span",{children:(0,r.jsx)("i",{style:{color:a},className:t>=5?"fas fa-star":t>=4.5?"fas fa-star-half-alt":"far fa-star"})}),(0,r.jsx)("span",{children:n&&n})]})}},7144:function(e,t,n){n.r(t);var r=n(2982),a=n(885),s=n(2791),c=n(3504),i=n(9743),o=n(2677),l=n(4523),u=n(1398),d=n(9140),p=n(160),f=n(3360),h=n(323),x=n(2351),v=n(6871),j=n(6030),y=n(159),m=n(2592),Z=n(5006),g=n(9697),k=n(184);t.default=function(){var e=(0,v.s0)(),t=(0,j.I0)(),n=(0,v.bS)("/products/:id"),w=(0,j.v9)((function(e){return e.productDetails})),I=w.error,b=w.loading,C=w.product,S=(0,j.v9)((function(e){return e.userLogin})).userInfo,N=(0,j.v9)((function(e){return e.productReviewCreate})),L=N.loading,A=N.error,G=N.success,B=(0,s.useState)(1),P=(0,a.Z)(B,2),R=P[0],z=P[1],E=(0,s.useState)(0),D=(0,a.Z)(E,2),W=D[0],$=D[1],_=(0,s.useState)(""),F=(0,a.Z)(_,2),K=F[0],Q=F[1];return(0,s.useEffect)((function(){G&&($(0),Q(""),t({type:g.K8})),t((0,y.GW)(n.params.id))}),[t,n.params.id,G,A]),(0,k.jsxs)(s.Fragment,{children:[(0,k.jsx)(c.Link,{to:"/",className:"btn btn-light my-3",children:"Go Back"}),b?(0,k.jsx)(m.Z,{}):I?(0,k.jsx)(Z.Z,{variant:"danger",children:I}):(0,k.jsxs)("div",{children:[(0,k.jsxs)(i.Z,{children:[(0,k.jsx)(o.Z,{md:6,children:(0,k.jsx)(l.Z,{className:"lazyload",src:C.image,alt:C.name,fluid:!0})}),(0,k.jsx)(o.Z,{md:3,children:(0,k.jsxs)(u.Z,{variant:"flush",children:[(0,k.jsx)(u.Z.Item,{children:C.name}),(0,k.jsx)(u.Z.Item,{children:(0,k.jsx)(x.Z,{value:C.rating,text:"".concat(C.numReviews," reviews"),color:"#f8e825"})}),(0,k.jsxs)(u.Z.Item,{children:["Price: $",C.price]}),(0,k.jsxs)(u.Z.Item,{children:["Description: ",C.description]})]})}),(0,k.jsx)(o.Z,{children:(0,k.jsx)(d.Z,{children:(0,k.jsxs)(u.Z,{variant:"flush",children:[(0,k.jsx)(u.Z.Item,{children:(0,k.jsxs)(i.Z,{children:[(0,k.jsx)(o.Z,{children:"Price:"}),(0,k.jsx)(o.Z,{children:(0,k.jsxs)("strong",{children:["$",C.price]})})]})}),(0,k.jsx)(u.Z.Item,{children:(0,k.jsxs)(i.Z,{children:[(0,k.jsx)(o.Z,{children:"Status:"}),(0,k.jsx)(o.Z,{children:C.countInStock>0?"In Stock":"Out of Stock"})]})}),C.countInStock>0&&(0,k.jsx)(u.Z.Item,{children:(0,k.jsxs)(i.Z,{children:[(0,k.jsx)(o.Z,{children:"Qty"}),(0,k.jsx)(o.Z,{xs:"auto",className:"my-1",children:(0,k.jsx)(p.Z.Control,{as:"select",value:R,onChange:function(e){return z(e.target.value)},children:(0,r.Z)(Array(C.countInStock).keys()).map((function(e){return(0,k.jsx)("option",{children:e+1},e+1)}))})})]})}),(0,k.jsx)(u.Z.Item,{children:(0,k.jsx)(i.Z,{children:(0,k.jsx)(f.Z,{disabled:0===C.countInStock,className:"btn-block",type:"button",onClick:function(){e("/cart/".concat(n.params.id,"?qty=").concat(R))},children:"Add To Cart"})})})]})})})]}),(0,k.jsx)(i.Z,{children:(0,k.jsxs)(o.Z,{md:6,children:[(0,k.jsx)("h4",{children:"Reviews"}),0===C.reviews.length&&(0,k.jsx)(Z.Z,{variant:"info",children:"No reviews"}),(0,k.jsxs)(u.Z,{variant:"flush",children:[C.reviews.map((function(e){return(0,k.jsxs)(u.Z.Item,{children:[(0,k.jsx)("strong",{children:e.name}),(0,k.jsx)(x.Z,{value:e.rating,color:"#f8e825"}),(0,k.jsx)("p",{children:e.createdAt.substring(0,10)}),(0,k.jsx)("p",{children:e.comment})]},e._id)})),(0,k.jsxs)(u.Z.Item,{children:[(0,k.jsx)("h4",{children:"Write a review"}),L&&(0,k.jsx)(m.Z,{}),G&&(0,k.jsx)(Z.Z,{variant:"success",children:"Review Submitted"}),A&&(0,k.jsx)(Z.Z,{variant:"danger",children:A}),S?(0,k.jsxs)(p.Z,{onSubmit:function(e){e.preventDefault(),t((0,y.nE)(n.params.id,{rating:W,comment:K}))},children:[(0,k.jsxs)(p.Z.Group,{controlId:"rating",children:[(0,k.jsx)(p.Z.Label,{children:"Rating"}),(0,k.jsxs)(p.Z.Control,{as:"select",value:W,onChange:function(e){return $(e.target.value)},children:[(0,k.jsx)("option",{value:"",children:"Select..."}),(0,k.jsx)("option",{value:"1",children:"1 - Poor"}),(0,k.jsx)("option",{value:"2",children:"2 - Fair"}),(0,k.jsx)("option",{value:"3",children:"3 - Good"}),(0,k.jsx)("option",{value:"4",children:"4 - Very Good"}),(0,k.jsx)("option",{value:"5",children:"5 - Excelent"})]})]}),(0,k.jsxs)(h.Z,{controlId:"comment",children:[(0,k.jsx)(p.Z.Label,{children:"Review"}),(0,k.jsx)(p.Z.Control,{as:"textarea",row:"5",value:K,onChange:function(e){return Q(e.target.value)}})]}),(0,k.jsx)(f.Z,{disabled:L,type:"submit",className:"my-3",variant:"primary",children:"Submit"})]}):(0,k.jsxs)(Z.Z,{variant:"info",children:["Please ",(0,k.jsx)(c.Link,{to:"/login",children:"Log In"})," tto write review"]})]})]})]})})]})]})}}}]);
//# sourceMappingURL=144.b6a6803a.chunk.js.map