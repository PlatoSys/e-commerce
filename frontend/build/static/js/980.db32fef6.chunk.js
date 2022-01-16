"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[980],{3980:function(e,r,s){s.r(r);var n=s(2791),a=s(1564),t=s(9743),c=s(2677),i=s(3360),d=s(2591),o=s(2592),l=s(5006),u=s(6030),h=s(159),x=s(6871),f=s(9697),j=s(9660),v=s(184);r.default=function(){var e=(0,u.I0)(),r=(0,x.s0)(),s=(0,x.TH)(),m=(0,u.v9)((function(e){return e.productList})),p=m.loading,b=m.error,Z=m.products,g=m.pages,N=m.page,y=(0,u.v9)((function(e){return e.productCreate})),w=y.loading,P=y.error,k=y.success,C=y.product,_=(0,u.v9)((function(e){return e.productDelete})),z=_.loading,I=_.error,B=_.success,E=(0,u.v9)((function(e){return e.userLogin})).userInfo,A=s.search;return(0,n.useEffect)((function(){e({type:f.uB}),E.isAdmin||r("/"),k?r("/admin/product/".concat(C._id,"/edit")):e((0,h.tr)(A))}),[e,r,C,E,B,k,A]),(0,v.jsxs)(n.Fragment,{children:[(0,v.jsxs)(t.Z,{className:"align-items-center",children:[(0,v.jsx)(c.Z,{children:(0,v.jsx)("h1",{children:"Products"})}),(0,v.jsx)(c.Z,{className:"d-flex justify-content-end",children:(0,v.jsxs)(i.Z,{className:"my-3 text-right",onClick:function(r){e((0,h.ry)())},children:["Create Product ",(0,v.jsx)("i",{className:"fas fa-plus"})]})})]}),z&&(0,v.jsx)(o.Z,{}),I&&(0,v.jsx)(l.Z,{variant:"danger",children:I}),w&&(0,v.jsx)(o.Z,{}),P&&(0,v.jsx)(l.Z,{variant:"danger",children:P}),p?(0,v.jsx)(o.Z,{}):b?(0,v.jsx)(l.Z,{variant:"danger",children:b}):(0,v.jsxs)("div",{children:[(0,v.jsxs)(d.Z,{striped:!0,bordered:!0,hover:!0,responsive:!0,className:"table-sm",children:[(0,v.jsx)("thead",{children:(0,v.jsxs)("tr",{children:[(0,v.jsx)("th",{children:"ID"}),(0,v.jsx)("th",{children:"Name"}),(0,v.jsx)("th",{children:"Price"}),(0,v.jsx)("th",{children:"Category"}),(0,v.jsx)("th",{children:"Brand"}),(0,v.jsx)("th",{})]})}),(0,v.jsx)("tbody",{children:Z.map((function(r){return(0,v.jsxs)("tr",{children:[(0,v.jsx)("td",{children:r._id}),(0,v.jsx)("td",{children:r.name}),(0,v.jsxs)("td",{children:["$",r.price]}),(0,v.jsx)("td",{children:r.category}),(0,v.jsx)("td",{children:r.brand}),(0,v.jsxs)("td",{children:[(0,v.jsx)(a.J,{to:"/admin/product/".concat(r._id,"/edit"),children:(0,v.jsx)("button",{variant:"warning",className:"btn btn-sm",children:(0,v.jsx)("i",{className:"fas fa-edit",style:{color:"black"}})})}),(0,v.jsx)(i.Z,{variant:"danger",className:"btn-sm",onClick:function(){return s=r._id,void(window.confirm("You want to delete product?")&&e((0,h.Ir)(s)));var s},children:(0,v.jsx)("i",{className:"fas fa-trash"})})]})]},r._id)}))})]}),(0,v.jsx)(j.Z,{pages:g,page:N,isAdmin:!0})]})]})}},3360:function(e,r,s){var n=s(1413),a=s(885),t=s(5987),c=s(1694),i=s.n(c),d=s(2791),o=s(5341),l=s(162),u=s(184),h=["as","bsPrefix","variant","size","active","className"],x=d.forwardRef((function(e,r){var s=e.as,c=e.bsPrefix,d=e.variant,x=e.size,f=e.active,j=e.className,v=(0,t.Z)(e,h),m=(0,l.vE)(c,"btn"),p=(0,o.FT)((0,n.Z)({tagName:s},v)),b=(0,a.Z)(p,2),Z=b[0],g=b[1].tagName;return(0,u.jsx)(g,(0,n.Z)((0,n.Z)((0,n.Z)({},v),Z),{},{ref:r,className:i()(j,m,f&&"active",d&&"".concat(m,"-").concat(d),x&&"".concat(m,"-").concat(x),v.href&&v.disabled&&"disabled")}))}));x.displayName="Button",x.defaultProps={variant:"primary",active:!1,disabled:!1},r.Z=x},2591:function(e,r,s){var n=s(1413),a=s(5987),t=s(1694),c=s.n(t),i=s(2791),d=s(162),o=s(184),l=["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"],u=i.forwardRef((function(e,r){var s=e.bsPrefix,t=e.className,i=e.striped,u=e.bordered,h=e.borderless,x=e.hover,f=e.size,j=e.variant,v=e.responsive,m=(0,a.Z)(e,l),p=(0,d.vE)(s,"table"),b=c()(t,p,j&&"".concat(p,"-").concat(j),f&&"".concat(p,"-").concat(f),i&&"".concat(p,"-striped"),u&&"".concat(p,"-bordered"),h&&"".concat(p,"-borderless"),x&&"".concat(p,"-hover")),Z=(0,o.jsx)("table",(0,n.Z)((0,n.Z)({},m),{},{className:b,ref:r}));if(v){var g="".concat(p,"-responsive");return"string"===typeof v&&(g="".concat(g,"-").concat(v)),(0,o.jsx)("div",{className:g,children:Z})}return Z}));r.Z=u}}]);
//# sourceMappingURL=980.db32fef6.chunk.js.map