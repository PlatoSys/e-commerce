"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[201],{7489:function(e,t,n){n.d(t,{z2:function(){return l},x4:function(){return p},M_:function(){return d},Lj:function(){return f},kS:function(){return h},yw:function(){return y},h8:function(){return m},Nq:function(){return v}});var a=n(5861),r=n(7757),s=n.n(r),o=n(4569),i=n.n(o),c=n(8278),u=n(3475),l=function(e,t,n){return function(){var r=(0,a.Z)(s().mark((function a(r){var o,u,l;return s().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,r({type:c.k1}),o={headers:{"Content-type":"application/json"}},a.next=5,i().post("/api/users/register/",{name:e,email:t,password:n},o);case 5:u=a.sent,l=u.data,r({type:c.hk,payload:l}),r({type:c.wW,payload:l}),a.next=14;break;case 11:a.prev=11,a.t0=a.catch(0),r({type:c.uh,payload:a.t0.response&&a.t0.response.data.detail?a.t0.response.data.detail:a.t0.message});case 14:case"end":return a.stop()}}),a,null,[[0,11]])})));return function(e){return r.apply(this,arguments)}}()},p=function(e,t){return function(){var n=(0,a.Z)(s().mark((function n(a){var r,o,u;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,a({type:c.mA}),r={headers:{"Content-type":"application/json"}},n.next=5,i().post("/api/users/login/",{username:e,password:t},r);case 5:o=n.sent,u=o.data,a({type:c.wW,payload:u}),localStorage.setItem("userInfo",JSON.stringify(u)),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(0),a({type:c.HW,payload:n.t0.response&&n.t0.response.data.detail?n.t0.response.data.detail:n.t0.message});case 14:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(e){return n.apply(this,arguments)}}()},d=function(e){return function(){var t=(0,a.Z)(s().mark((function t(n,a){var r,o,u,l,p;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:c.De}),r=a(),o=r.userLogin.userInfo,u={headers:{"Content-type":"application/json",Authorization:"Bearer ".concat(o.token)}},t.next=6,i().get("/api/users/".concat(e,"/"),u);case 6:l=t.sent,p=l.data,n({type:c.BA,payload:p}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),n({type:c.Wh,payload:t.t0.response&&t.t0.response.data.detail?t.t0.response.data.detail:t.t0.message});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e,n){return t.apply(this,arguments)}}()},f=function(e){return function(){var t=(0,a.Z)(s().mark((function t(n,a){var r,o,u,l,p;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:c.yJ}),r=a(),o=r.userLogin.userInfo,u={headers:{"Content-type":"application/json",Authorization:"Bearer ".concat(o.token)}},t.next=6,i().put("/api/users/profile/update/",e,u);case 6:l=t.sent,p=l.data,n({type:c.rg,payload:p}),n({type:c.wW,payload:p}),localStorage.setItem("userInfo",JSON.stringify(p)),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(0),n({type:c.D1,payload:t.t0.response&&t.t0.response.data.detail?t.t0.response.data.detail:t.t0.message});case 16:case"end":return t.stop()}}),t,null,[[0,13]])})));return function(e,n){return t.apply(this,arguments)}}()},h=function(){return function(e){localStorage.removeItem("userInfo"),e({type:c.lK}),e({type:c.uW}),e({type:u.JT}),e({type:c.ym})}},y=function(){return function(){var e=(0,a.Z)(s().mark((function e(t,n){var a,r,o,u,l;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:c.Ev}),a=n(),r=a.userLogin.userInfo,o={headers:{"Content-type":"application/json",Authorization:"Bearer ".concat(r.token)}},e.next=6,i().get("/api/users/",o);case 6:u=e.sent,l=u.data,t({type:c.lB,payload:l}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),t({type:c.Th,payload:e.t0.response&&e.t0.response.data.detail?e.t0.response.data.detail:e.t0.message});case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,n){return e.apply(this,arguments)}}()},m=function(e){return function(){var t=(0,a.Z)(s().mark((function t(n,a){var r,o,u,l,p;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:c.tv}),r=a(),o=r.userLogin.userInfo,u={headers:{"Content-type":"application/json",Authorization:"Bearer ".concat(o.token)}},t.next=6,i().delete("/api/users/delete/".concat(e,"/"),u);case 6:l=t.sent,p=l.data,n({type:c.Zy,payload:p}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),n({type:c.Pq,payload:t.t0.response&&t.t0.response.data.detail?t.t0.response.data.detail:t.t0.message});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e,n){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=(0,a.Z)(s().mark((function t(n,a){var r,o,u,l,p;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:c.An}),r=a(),o=r.userLogin.userInfo,u={headers:{"Content-type":"application/json",Authorization:"Bearer ".concat(o.token)}},t.next=6,i().put("/api/users/update/".concat(e._id,"/"),e,u);case 6:l=t.sent,p=l.data,n({type:c.dB}),n({type:c.BA,payload:p}),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),n({type:c.ku,payload:t.t0.response&&t.t0.response.data.detail?t.t0.response.data.detail:t.t0.message});case 15:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(e,n){return t.apply(this,arguments)}}()}},5524:function(e,t,n){n(2791);var a=n(7022),r=n(9743),s=n(2677),o=n(184);t.Z=function(e){var t=e.children;return(0,o.jsx)(a.Z,{children:(0,o.jsx)(r.Z,{className:"justify-content-md-center",children:(0,o.jsx)(s.Z,{xs:12,md:6,children:t})})})}},5006:function(e,t,n){n(2791);var a=n(2469),r=n(184);t.Z=function(e){var t=e.variant,n=e.children;return(0,r.jsx)(a.Z,{variant:t,children:n})}},6201:function(e,t,n){n.r(t);var a=n(885),r=n(2791),s=n(6871),o=n(3504),i=n(160),c=n(3360),u=n(2592),l=n(5006),p=n(6030),d=n(7489),f=n(5524),h=n(8278),y=n(184);t.default=function(){var e=(0,p.I0)(),t=(0,s.s0)(),n=(0,s.bS)("/admin/user/:id/edit").params.id,m=(0,p.v9)((function(e){return e.userDetails})),v=m.user,x=m.error,Z=m.loading,g=(0,p.v9)((function(e){return e.userUpdate})),j=g.error,k=g.loading,b=g.success,w=(0,r.useState)(""),C=(0,a.Z)(w,2),N=C[0],A=C[1],I=(0,r.useState)(""),L=(0,a.Z)(I,2),S=L[0],E=L[1],B=(0,r.useState)(!1),z=(0,a.Z)(B,2),P=z[0],W=z[1];return(0,r.useEffect)((function(){b?(e({type:h.Sc}),t("/admin/userlist")):v.name&&v._id===Number(n)?(A(v.name),E(v.email),W(v.isAdmin)):e((0,d.M_)(n))}),[n,v,b,t,e]),(0,y.jsxs)(r.Fragment,{children:[(0,y.jsx)(o.Link,{to:"/admin/userlist",children:"Go Back"}),(0,y.jsxs)(f.Z,{children:[(0,y.jsx)("h1",{children:"Edit User"}),k&&(0,y.jsx)(u.Z,{}),j&&(0,y.jsx)(l.Z,{variant:"danger",children:j}),Z?(0,y.jsx)(u.Z,{}):x?(0,y.jsx)(l.Z,{variant:"danger",children:x}):(0,y.jsxs)(i.Z,{onSubmit:function(t){t.preventDefault(),e((0,d.Nq)({_id:v.id,name:N,email:S,isAdmin:P}))},children:[(0,y.jsxs)(i.Z.Group,{controlId:"name",className:"my-2",children:[(0,y.jsx)(i.Z.Label,{children:"Name"}),(0,y.jsx)(i.Z.Control,{type:"name",placeholder:"Enter Name",value:N,onChange:function(e){return A(e.target.value)}})]}),(0,y.jsxs)(i.Z.Group,{controlId:"email",className:"my-2",children:[(0,y.jsx)(i.Z.Label,{children:"Email Address"}),(0,y.jsx)(i.Z.Control,{type:"email",placeholder:"Enter Email",value:S,onChange:function(e){return E(e.target.value)}})]}),(0,y.jsx)(i.Z.Group,{controlId:"isadmin",className:"my-2",children:(0,y.jsx)(i.Z.Check,{type:"checkbox",label:"is Admin",checked:P,onChange:function(e){return W(e.target.checked)}})}),(0,y.jsx)(c.Z,{type:"submit",variant:"primary",className:"my-2",children:"Update"})]})]})]})}},2469:function(e,t,n){var a=n(1413),r=n(5987),s=n(1694),o=n.n(s),i=n(2791),c=n(239),u=n(9007),l=n(6445),p=n(162),d=n(2709),f=n(473),h=n(7472),y=n(6543),m=n(184),v=["bsPrefix","show","closeLabel","closeVariant","className","children","variant","onClose","dismissible","transition"],x=(0,h.Z)("h4");x.displayName="DivStyledAsH4";var Z=(0,y.Z)("alert-heading",{Component:x}),g=(0,y.Z)("alert-link",{Component:l.Z}),j={variant:"primary",show:!0,transition:d.Z,closeLabel:"Close alert"},k=i.forwardRef((function(e,t){var n=(0,c.Ch)(e,{show:"onClose"}),s=n.bsPrefix,i=n.show,l=n.closeLabel,h=n.closeVariant,y=n.className,x=n.children,Z=n.variant,g=n.onClose,j=n.dismissible,k=n.transition,b=(0,r.Z)(n,v),w=(0,p.vE)(s,"alert"),C=(0,u.Z)((function(e){g&&g(!1,e)})),N=!0===k?d.Z:k,A=(0,m.jsxs)("div",(0,a.Z)((0,a.Z)({role:"alert"},N?void 0:b),{},{ref:t,className:o()(y,w,Z&&"".concat(w,"-").concat(Z),j&&"".concat(w,"-dismissible")),children:[j&&(0,m.jsx)(f.Z,{onClick:C,"aria-label":l,variant:h}),x]}));return N?(0,m.jsx)(N,(0,a.Z)((0,a.Z)({unmountOnExit:!0},b),{},{ref:void 0,in:i,children:A})):i?A:null}));k.displayName="Alert",k.defaultProps=j,t.Z=Object.assign(k,{Link:g,Heading:Z})},9743:function(e,t,n){var a=n(1413),r=n(5987),s=n(1694),o=n.n(s),i=n(2791),c=n(162),u=n(184),l=["bsPrefix","className","as"],p=["xxl","xl","lg","md","sm","xs"],d=i.forwardRef((function(e,t){var n=e.bsPrefix,s=e.className,i=e.as,d=void 0===i?"div":i,f=(0,r.Z)(e,l),h=(0,c.vE)(n,"row"),y="".concat(h,"-cols"),m=[];return p.forEach((function(e){var t,n=f[e];delete f[e],t=null!=n&&"object"===typeof n?n.cols:n;var a="xs"!==e?"-".concat(e):"";null!=t&&m.push("".concat(y).concat(a,"-").concat(t))})),(0,u.jsx)(d,(0,a.Z)((0,a.Z)({ref:t},f),{},{className:o().apply(void 0,[s,h].concat(m))}))}));d.displayName="Row",t.Z=d}}]);
//# sourceMappingURL=201.75b570bb.chunk.js.map