(this["webpackJsonpgpa-calculator"]=this["webpackJsonpgpa-calculator"]||[]).push([[0],{61:function(e,a,t){e.exports=t.p+"static/media/phone.6cfac974.svg"},77:function(e,a,t){e.exports=t(90)},82:function(e,a,t){},89:function(e,a,t){},90:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(8),l=t.n(c),o=(t(82),t(12)),i=t(64),s=t(125),u=t(122),m=t(135),d=t(131),p=t(130),b=t(134),g=t(128),E=t(63),f=t(133),v=t(127),h=t(47),j=t.n(h),O=Object(u.a)((function(e){return{root:{color:"black"},input:{margin:5},button:{marginTop:-6,color:"#2d85fe"}}})),w=function(e){var a=Object(n.useState)(""),t=Object(o.a)(a,2),c=(t[0],t[1]),l=O();return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{noValidate:!0,autoComplete:"off"},r.a.createElement(f.a,{inputProps:{min:0,style:{textAlign:"center"}},id:"credits",label:"Credits",type:"number",variant:"outlined",size:"small",className:l.input}),r.a.createElement(f.a,{inputProps:{style:{textAlign:"center"},maxLength:1},id:"grade",label:"Grade",variant:"outlined",size:"small",className:l.input,onChange:function(e){return c(e.target.value)},onInput:function(e){e.target.value=(""+e.target.value).toUpperCase()}}),r.a.createElement(v.a,{"aria-label":"add an alarm",className:l.button,onClick:function(){var a=document.getElementById("credits").value,t=document.getElementById("grade").value;e.newItem({credits:a,grade:t})}},r.a.createElement(j.a,{fontSize:"large"}))))},S=Object(u.a)((function(e){return{paper:{width:e.spacing(50),height:e.spacing(8),backgroundColor:"#F0F5FF",color:"#10286b"},item:{padding:e.spacing(1),marginTop:e.spacing(2),marginLeft:e.spacing(2)}}})),x=function(e){var a=S();return r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{container:!0},r.a.createElement(g.a,{item:!0},r.a.createElement(s.a,{className:a.paper,elevation:3},r.a.createElement(g.a,{container:!0},r.a.createElement(g.a,{item:!0,className:a.item},"Number of Credits: ",e.credits),r.a.createElement(g.a,{item:!0,className:a.item},"Estimated Grade: ",e.grade))))))},y=t(126),k=t(129),C=t(59),N=t.n(C),A=t(60),G=t.n(A),F=Object(u.a)((function(e){return{deleteIcon:{color:"#2d79fe"}}})),I=function(){var e=F(),a=Object(n.useState)(0),t=Object(o.a)(a,2),c=(t[0],t[1]),l=Object(n.useState)(""),i=Object(o.a)(l,2),s=(i[0],i[1],Object(n.useState)(0)),u=Object(o.a)(s,2),m=(u[0],u[1]),d=Object(n.useState)(0),b=Object(o.a)(d,2),g=(b[0],b[1],Object(n.useState)([])),f=Object(o.a)(g,2),h=f[0],j=f[1],O=Object(n.useState)(0),S=Object(o.a)(O,2),C=(S[0],S[1],Object(n.useState)("")),A=Object(o.a)(C,2),I=A[0],B=A[1],T=Object(n.useState)(0),P=Object(o.a)(T,2),z=P[0],L=P[1],D=Object(n.useState)(""),U=Object(o.a)(D,2),M=(U[0],U[1]),W=Object(n.useState)(""),J=Object(o.a)(W,2),R=(J[0],J[1],Object(n.useState)(!1)),V=Object(o.a)(R,2),$=V[0],q=V[1],H=function(e){L(I);var a=0;e.map((function(e,t){a+=Number(e.credits)}));var t=0;e.map((function(e,a){t+=e.credits*e.grade}));var n=t/a;n=+n.toFixed(2),console.log("CALCULATED"),console.log(n),B(n)};return r.a.createElement("div",null,r.a.createElement(w,{newItem:function(e){c(e.credits);var a=e.grade,t=0;switch(a){case"S":t=10;break;case"A":t=9;break;case"B":t=8;break;case"C":t=7;break;case"D":t=6;break;case"E":t=5;break;case"F":case"N":t=0}m(t);var n={credits:e.credits,DisplayGrade:a,grade:t};M(h.length),h.push(n),H(h),q(!1)}}),r.a.createElement("h1",{style:{fontSize:"3em",color:"#2d85fe"}},function(){var e=z,a=isNaN(I)?"":$?0:I;return r.a.createElement(N.a,{start:e,end:a,duration:2.75,separator:" ",decimals:2,decimal:"."})}(),r.a.createElement("span",{style:{fontSize:"0.45em",color:"#A6A6A6",fontWeight:"400"}},"/10")),r.a.createElement(y.a,null,h.map((function(a,t){return r.a.createElement(k.a,{key:t},r.a.createElement(p.a,{color:"textSecondary"},r.a.createElement(x,{credits:a.credits,grade:a.DisplayGrade})),r.a.createElement(v.a,{"aria-label":"delete",onClick:function(){return function(e){var a=Object(E.a)(h);a.splice(e,1),j(a),console.log(a),a.length>0?H(a):q(!0)}(t)}},r.a.createElement(G.a,{fontSize:"large",className:e.deleteIcon})))}))))};function B(e){var a=e.children,t=e.value,n=e.index,c=Object(i.a)(e,["children","value","index"]);return r.a.createElement("div",Object.assign({role:"tabpanel",hidden:t!==n,id:"wrapped-tabpanel-".concat(n),"aria-labelledby":"wrapped-tab-".concat(n)},c),t===n&&r.a.createElement(b.a,{p:3},r.a.createElement(p.a,null,a)))}function T(e){return{id:"wrapped-tab-".concat(e),"aria-controls":"wrapped-tabpanel-".concat(e)}}var P=Object(u.a)((function(e){return{root:{flexGrow:1},outerGrid:{margin:"auto"},paper:{padding:e.spacing(1),textAlign:"center",background:"white",color:"black",paddingLeft:"50px",borderRadius:10,width:"560px",marginBottom:"100px"}}}));function z(){var e=P(),a=r.a.useState("one"),t=Object(o.a)(a,2),n=t[0],c=t[1];return r.a.createElement("div",{className:e.root},r.a.createElement(g.a,{container:!0},r.a.createElement(g.a,{item:!0,className:e.outerGrid},r.a.createElement(s.a,{className:e.paper},r.a.createElement(m.a,{value:n,onChange:function(e,a){c(a)},"aria-label":"wrapped label tabs example"},r.a.createElement(d.a,Object.assign({value:"one",label:"Semester GPA",wrapped:!0},T("one"))),r.a.createElement(d.a,Object.assign({value:"two",label:"Subject Grade "},T("two"))),r.a.createElement(d.a,Object.assign({value:"three",label:"CGPA Estimator"},T("three")))),r.a.createElement(B,{value:n,index:"one"},r.a.createElement(I,null)),r.a.createElement(B,{value:n,index:"two"},r.a.createElement("p",{style:{color:"black"}},"This Feature is Under Construction \ud83e\udd55")),r.a.createElement(B,{value:n,index:"three"},r.a.createElement("p",{style:{color:"black"}},"This Feature is also Under Construction \ud83e\udd55"))))))}var L=t(61),D=t.n(L),U=(t(89),function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"App"},r.a.createElement("div",{id:"title"},r.a.createElement("h1",null,"GPA Calculator"),r.a.createElement("p",null,"Calculate your Semester GPA, Cumulative CGPA and Estimated Grade for a subject"),r.a.createElement(z,null)),r.a.createElement("div",{className:"footer",style:{textAlign:"center",marginTop:"2em"}},r.a.createElement("p",null," Made with love exclusively for VITians \ud83d\udc9a"))),r.a.createElement("div",{className:"phone"},r.a.createElement("p",null,"This website is not currently compatible with mobile"),r.a.createElement("img",{src:D.a,className:"phoneIcon"})))}),M=t(62),W=Object(M.a)({props:{MuiButtonBase:{disableRipple:!0}}}),J=t(132);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(J.a,{theme:W},r.a.createElement(U,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[77,1,2]]]);
//# sourceMappingURL=main.d3ae6ad2.chunk.js.map