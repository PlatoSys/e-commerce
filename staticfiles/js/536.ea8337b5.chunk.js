"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[536],{7489:function(e,t,n){n.d(t,{z2:function(){return p},x4:function(){return l},M_:function(){return d},Lj:function(){return f},kS:function(){return h},yw:function(){return y},h8:function(){return x},Nq:function(){return v}});var r=n(5861),a=n(7757),s=n.n(a),o=n(4569),i=n.n(o),c=n(8278),u=n(3475),p=function(e,t,n){return function(){var a=(0,r.Z)(s().mark((function r(a){var o,u,p;return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,a({type:c.k1}),o={headers:{"Content-type":"application/json"}},r.next=5,i().post("/api/users/register/",{name:e,email:t,password:n},o);case 5:u=r.sent,p=u.data,a({type:c.hk,payload:p}),a({type:c.wW,payload:p}),r.next=14;break;case 11:r.prev=11,r.t0=r.catch(0),a({type:c.uh,payload:r.t0.response&&r.t0.response.data.detail?r.t0.response.data.detail:r.t0.message});case 14:case"end":return r.stop()}}),r,null,[[0,11]])})));return function(e){return a.apply(this,arguments)}}()},l=function(e,t){return function(){var n=(0,r.Z)(s().mark((function n(r){var a,o,u;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r({type:c.mA}),a={headers:{"Content-type":"application/json"}},n.next=5,i().post("/api/users/login/",{username:e,password:t},a);case 5:o=n.sent,u=o.data,r({type:c.wW,payload:u}),localStorage.setItem("userInfo",JSON.stringify(u)),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(0),r({type:c.HW,payload:n.t0.response&&n.t0.response.data.detail?n.t0.response.data.detail:n.t0.message});case 14:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(e){return n.apply(this,arguments)}}()},d=function(e){return function(){var t=(0,r.Z)(s().mark((function t(n,r){var a,o,u,p,l;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:c.De}),a=r(),o=a.userLogin.userInfo,u={headers:{"Content-type":"application/json",Authorization:"Bearer ".concat(o.token)}},t.next=6,i().get("/api/users/".concat(e,"/"),u);case 6:p=t.sent,l=p.data,n({type:c.BA,payload:l}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),n({type:c.Wh,payload:t.t0.response&&t.t0.response.data.detail?t.t0.response.data.detail:t.t0.message});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e,n){return t.apply(this,arguments)}}()},f=function(e){return function(){var t=(0,r.Z)(s().mark((function t(n,r){var a,o,u,p,l;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:c.yJ}),a=r(),o=a.userLogin.userInfo,u={headers:{"Content-type":"application/json",Authorization:"Bearer ".concat(o.token)}},t.next=6,i().put("/api/users/profile/update/",e,u);case 6:p=t.sent,l=p.data,n({type:c.rg,payload:l}),n({type:c.wW,payload:l}),localStorage.setItem("userInfo",JSON.stringify(l)),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(0),n({type:c.D1,payload:t.t0.response&&t.t0.response.data.detail?t.t0.response.data.detail:t.t0.message});case 16:case"end":return t.stop()}}),t,null,[[0,13]])})));return function(e,n){return t.apply(this,arguments)}}()},h=function(){return function(e){localStorage.removeItem("userInfo"),e({type:c.lK}),e({type:c.uW}),e({type:u.JT}),e({type:c.ym})}},y=function(){return function(){var e=(0,r.Z)(s().mark((function e(t,n){var r,a,o,u,p;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:c.Ev}),r=n(),a=r.userLogin.userInfo,o={headers:{"Content-type":"application/json",Authorization:"Bearer ".concat(a.token)}},e.next=6,i().get("/api/users/",o);case 6:u=e.sent,p=u.data,t({type:c.lB,payload:p}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),t({type:c.Th,payload:e.t0.response&&e.t0.response.data.detail?e.t0.response.data.detail:e.t0.message});case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,n){return e.apply(this,arguments)}}()},x=function(e){return function(){var t=(0,r.Z)(s().mark((function t(n,r){var a,o,u,p,l;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:c.tv}),a=r(),o=a.userLogin.userInfo,u={headers:{"Content-type":"application/json",Authorization:"Bearer ".concat(o.token)}},t.next=6,i().delete("/api/users/delete/".concat(e,"/"),u);case 6:p=t.sent,l=p.data,n({type:c.Zy,payload:l}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),n({type:c.Pq,payload:t.t0.response&&t.t0.response.data.detail?t.t0.response.data.detail:t.t0.message});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e,n){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=(0,r.Z)(s().mark((function t(n,r){var a,o,u,p,l;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:c.An}),a=r(),o=a.userLogin.userInfo,u={headers:{"Content-type":"application/json",Authorization:"Bearer ".concat(o.token)}},t.next=6,i().put("/api/users/update/".concat(e._id,"/"),e,u);case 6:p=t.sent,l=p.data,n({type:c.dB}),n({type:c.BA,payload:l}),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),n({type:c.ku,payload:t.t0.response&&t.t0.response.data.detail?t.t0.response.data.detail:t.t0.message});case 15:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(e,n){return t.apply(this,arguments)}}()}},536:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var r=n(2791),a=n(7211),s=n(7022),o=n(3666),i=n(1399),c=n(1564),u=n(6030),p=n(7489),l=n(885),d=n(160),f=n(3360),h=n(6871),y=n(184);var x=function(){var e=(0,h.s0)(),t=(0,h.TH)(),n=(0,r.useState)(""),a=(0,l.Z)(n,2),s=a[0],o=a[1];return(0,y.jsxs)(d.Z,{onSubmit:function(n){n.preventDefault(),e(s?"/?keyword=".concat(s,"&page=1"):t.pathname)},className:"d-flex",children:[(0,y.jsx)(d.Z.Label,{for:"query-search"}),(0,y.jsx)(d.Z.Control,{type:"text",name:"q",id:"query-search",onChange:function(e){return o(e.target.value)}}),(0,y.jsx)(f.Z,{type:"submit",variant:"outline-success",className:"p-2 mx-2",children:"Search"})]})};var v=function(){var e=(0,u.v9)((function(e){return e.userLogin})).userInfo,t=(0,u.I0)();return(0,y.jsx)("header",{children:(0,y.jsx)(a.Z,{bg:"dark",variant:"dark",expand:"lg",collapseOnSelect:!0,children:(0,y.jsxs)(s.Z,{fluid:!0,children:[(0,y.jsx)(c.J,{to:"/",children:(0,y.jsx)(a.Z.Brand,{href:"/",children:"ProShop"})}),(0,y.jsx)(a.Z.Toggle,{"aria-controls":"navbarScroll"}),(0,y.jsx)(a.Z.Collapse,{id:"navbarScroll",children:(0,y.jsxs)(o.Z,{className:"mr-auto my-2 my-lg-0",style:{maxHeight:"100px"},navbarScroll:!0,children:[(0,y.jsx)(c.J,{to:"/cart",children:(0,y.jsxs)(o.Z.Link,{children:[(0,y.jsx)("i",{className:"fas fa-shopping-cart"})," Cart"]})}),e?(0,y.jsxs)(i.Z,{title:e.name,id:"username",children:[(0,y.jsx)(c.J,{to:"/profile",children:(0,y.jsx)(i.Z.Item,{children:"Profile"})}),(0,y.jsx)(i.Z.Item,{onClick:function(){t((0,p.kS)())},children:"Logout"})]}):(0,y.jsx)(c.J,{to:"/login",children:(0,y.jsxs)(o.Z.Link,{children:[(0,y.jsx)("i",{className:"fas fa-user"})," Login"]})}),e&&e.isAdmin&&(0,y.jsxs)(i.Z,{title:"Admin",id:"admin",children:[(0,y.jsx)(c.J,{to:"/admin/userlist",children:(0,y.jsx)(i.Z.Item,{children:"Users"})}),(0,y.jsx)(c.J,{to:"/admin/productlist",children:(0,y.jsx)(i.Z.Item,{children:"Products"})}),(0,y.jsx)(c.J,{to:"/admin/orderlist",children:(0,y.jsx)(i.Z.Item,{children:"Orders"})})]})]})}),(0,y.jsx)(x,{})]})})})}}}]);
//# sourceMappingURL=536.ea8337b5.chunk.js.map