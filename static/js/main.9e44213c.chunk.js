(this["webpackJsonpdanielwohlgemuth.github.io"]=this["webpackJsonpdanielwohlgemuth.github.io"]||[]).push([[0],{72:function(e,t,n){},82:function(e,t,n){},84:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),c=n(9),r=n.n(c),s=(n(72),n(21)),o=n(112),j=n(114),l=n(132),h=n(116),u=n(117),d=n(133),b=n(118),m=n(2),x=Object(o.a)({navListDisplayFlex:{display:"flex",alignContent:"center"},linkText:{textDecoration:"none",textTransform:"uppercase",color:"white"}});var O=function(){var e=x();return Object(m.jsx)(j.a,{position:"static",children:Object(m.jsx)(l.a,{display:"flex",justifyContent:"center",children:Object(m.jsx)(h.a,{children:Object(m.jsxs)(u.a,{className:e.navListDisplayFlex,children:[Object(m.jsx)(s.b,{to:"/",className:e.linkText,children:Object(m.jsx)(d.a,{button:!0,children:Object(m.jsx)(b.a,{primary:"Home"})})}),Object(m.jsx)(s.c,{to:"/about",className:e.linkText,children:Object(m.jsx)(d.a,{button:!0,children:Object(m.jsx)(b.a,{primary:"About"})})})]})})})})},g=n(11),p=n(46),f=n(119),v=n(120),y=n(121),w=n(122),k=n(123),F=Object(o.a)({linkText:{textDecoration:"none"}});var N=function(e){var t=e.url,n=e.to,a=e.children,i=F();return t?Object(m.jsx)("a",{href:t,className:i.linkText,children:a}):Object(m.jsx)(s.b,{to:n,className:i.linkText,children:a})},L=Object(o.a)({title:{paddingTop:"20px"},description:{paddingTop:"20px",paddingBottom:"20px",paddingLeft:"20px",paddingRight:"20px"},root:{height:"100%"},card:{display:"flex",height:"100%"},details:{display:"flex",flexDirection:"column",justifyContent:"center"},imageContainer:{marginTop:"auto",marginBottom:"auto"},image:{height:150,width:150,objectFit:"contain"}}),T=[{name:"Utility to find out if an IPv4 address is contained in an IPv4 address range",url:"/projects/ip-in-subnet-list",image:"ip-in-subnet-list.png"},{name:"Identicon generator using SVG",url:"/projects/svg-identicon",image:"svg-identicon-generator.png"},{name:"Visual representation for a few fuzzy logic operators",url:"https://github.com/danielwohlgemuth/fuzzy-operators-visualization",image:"fuzzy-logic.png"},{name:"Send sensor data and visualize it with Grafana",url:"https://github.com/danielwohlgemuth/sensor2graph-micropython-esp32",image:"sensor-to-graph.png"},{name:"Visualize house prices in Kibana",url:"https://github.com/danielwohlgemuth/visualize-house-prices-in-kibana",image:"visualize-house-prices-in-kibana.png"},{name:"Cost sharing calculator",to:"/app/cost-sharing",image:"cost-sharing.png"}];var P=function(){var e=L();return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(p.a,{variant:"h4",align:"center",className:e.title,children:"Projects"}),Object(m.jsx)(p.a,{variant:"body1",align:"center",className:e.description,children:"Different projects that I've been working on to try out ideas or technologies."}),Object(m.jsx)(f.a,{maxWidth:"lg",children:Object(m.jsx)(v.a,{container:!0,spacing:3,children:T.map((function(t){return Object(m.jsx)(v.a,{item:!0,xs:12,md:6,lg:4,children:Object(m.jsx)(l.a,{p:1,className:e.root,children:Object(m.jsx)(N,{url:t.url,to:t.to,children:Object(m.jsxs)(y.a,{className:e.card,raised:!0,children:[Object(m.jsx)("div",{className:e.imageContainer,children:Object(m.jsx)(w.a,{className:e.image,image:"/images/"+t.image,component:"img",title:t.name})}),Object(m.jsx)("div",{className:e.details,children:Object(m.jsx)(k.a,{className:e.content,children:Object(m.jsx)(p.a,{variant:"h6",children:t.name})})})]})})})},t.url||t.to)}))})})]})},C=Object(o.a)({root:{textAlign:"center"}});var z=function(){var e=C();return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(l.a,{className:e.root,mt:5,children:[Object(m.jsx)("section",{children:Object(m.jsx)(p.a,{variant:"body1",children:"Hi, I'm Daniel Wohlgemuth."})}),Object(m.jsx)("section",{children:Object(m.jsxs)(p.a,{variant:"body1",children:["You can find me on"," ",Object(m.jsx)("a",{href:"https://www.linkedin.com/in/daniel-wohlgemuth-6982291ba/",children:"LinkedIn"})," ","and ",Object(m.jsx)("a",{href:"https://github.com/danielwohlgemuth",children:"GitHub"}),"."]})})]})})},I=n(58),S=n(44),D=n(34),A=n(39),W=function(e,t){var n=Math.pow(10,t);return Math.round(e*n)/n},M=n(124),B=n(125),G=n(131),H=n(126),V=n(60),E=n(127),J=n(128),U=n(129),K=(n(82),function(e){var t=e.personList,n=e.editPerson;return Object(m.jsx)(m.Fragment,{children:t.map((function(e,t){var a=e.name,i=e.amount;return Object(m.jsxs)(M.a,{children:[Object(m.jsx)(B.a,{align:"left",children:Object(m.jsx)(G.a,{name:"Person",value:a,onChange:function(e){return n(t,"name",e.target.value)}})}),Object(m.jsx)(B.a,{align:"right",children:Object(m.jsx)(G.a,{name:"Amount",value:i,type:"number",onChange:function(e){var a=parseFloat(e.target.value);(isNaN(a)||a<0)&&(a=0),n(t,"amount",a)}})})]},t)}))})});var R=function(e){var t=e.personList,n=e.editPerson,a=e.total;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(p.a,{variant:"h6",children:"Expenses"}),Object(m.jsx)(H.a,{component:V.a,children:Object(m.jsxs)(E.a,{"aria-label":"simple table",children:[Object(m.jsx)(J.a,{children:Object(m.jsxs)(M.a,{children:[Object(m.jsx)(B.a,{children:"Person"}),Object(m.jsx)(B.a,{align:"right",children:"Amount"})]})}),Object(m.jsxs)(U.a,{children:[Object(m.jsx)(K,{personList:t,editPerson:n}),Object(m.jsxs)(M.a,{children:[Object(m.jsx)(B.a,{children:Object(m.jsx)(l.a,{fontWeight:"fontWeightMedium",children:"Total"})}),Object(m.jsx)(B.a,{align:"right",children:Object(m.jsx)(l.a,{fontWeight:"fontWeightMedium",mr:2,children:a})})]})]})]})})]})},Y=function(e){var t=e.paybackList;return 0===t.length?Object(m.jsx)(M.a,{children:Object(m.jsx)(B.a,{colSpan:3,align:"center",children:"Please add expenses for two or more people"})}):Object(m.jsx)(m.Fragment,{children:t.map((function(e,t){var n=e.from,a=e.to,i=e.amount;return Object(m.jsxs)(M.a,{children:[Object(m.jsx)(B.a,{children:n}),Object(m.jsx)(B.a,{children:a}),Object(m.jsx)(B.a,{align:"right",children:i})]},t)}))})};var q=function(e){var t=e.paybackList;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(p.a,{variant:"h6",children:"Payback Strategy"}),Object(m.jsx)(H.a,{component:V.a,children:Object(m.jsxs)(E.a,{"aria-label":"simple table",children:[Object(m.jsx)(J.a,{children:Object(m.jsxs)(M.a,{children:[Object(m.jsx)(B.a,{children:"From"}),Object(m.jsx)(B.a,{children:"To"}),Object(m.jsx)(B.a,{align:"right",children:"Amount"})]})}),Object(m.jsx)(U.a,{children:Object(m.jsx)(Y,{paybackList:t})})]})})]})},Q=Object(o.a)({root:{textAlign:"center"}});var X=function(){var e=Q(),t=Object(a.useState)([{name:"",amount:0}]),n=Object(A.a)(t,2),i=n[0],c=n[1],r=Object(a.useState)(0),s=Object(A.a)(r,2),o=s[0],j=s[1],h=Object(a.useState)([]),u=Object(A.a)(h,2),d=u[0],b=u[1];return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(f.a,{maxWidth:"sm",children:Object(m.jsxs)(l.a,{className:e.root,mt:5,children:[Object(m.jsx)("section",{children:Object(m.jsx)(p.a,{variant:"h4",children:"Cost Sharing"})}),Object(m.jsxs)("section",{children:[Object(m.jsx)(l.a,{mt:4,children:Object(m.jsx)(R,{personList:i,editPerson:function(e,t,n){c((function(a){var i=a.map((function(a,i){return e===i?Object(D.a)(Object(D.a)({},a),{},Object(S.a)({},t,n)):a})).filter((function(e){return!function(e){return!e.name&&!e.amount}(e)})),c=function(e){if(0===e.length)return[];for(var t=e.reduce((function(e,t){return e+t.amount}),0),n=t/e.length,a=e.map((function(e){return Object(D.a)(Object(D.a)({},e),{},{amount:e.amount-n})})).sort((function(e,t){return e.amount<t.amount})),i=a.filter((function(e){return e.amount>0})),c=a.filter((function(e){return e.amount<0})),r=[];i.length&&c.length;){var s=i[0],o=c[c.length-1];s.amount>=-o.amount?(r.push({from:o.name,to:s.name,amount:W(-o.amount,2)}),c.pop(),s.amount===-o.amount&&i.shift()):(r.push({from:o.name,to:s.name,amount:W(s.amount,2)}),i.shift())}return[r,t]}(i),r=Object(A.a)(c,2),s=r[0],o=r[1];return j(o),b(s),[].concat(Object(I.a)(i),[{name:"",amount:0}])}))},total:o})}),Object(m.jsx)(l.a,{mt:5,children:Object(m.jsx)(q,{paybackList:d})})]})]})})})};var Z=function(){var e=Object(g.f)().appId;switch(console.log(e),e){case"cost-sharing":return Object(m.jsx)(X,{});default:return Object(m.jsx)("div",{children:"Unknown App"})}};var $=function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(O,{}),Object(m.jsx)("main",{children:Object(m.jsxs)(g.c,{children:[Object(m.jsx)(g.a,{path:"/about",component:z}),Object(m.jsx)(g.a,{path:"/app/:appId",component:Z}),Object(m.jsx)(g.a,{path:"/",component:P})]})})]})},_=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,136)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),i(e),c(e),r(e)}))},ee=n(130);r.a.render(Object(m.jsxs)(i.a.StrictMode,{children:[Object(m.jsx)(ee.a,{}),Object(m.jsx)(s.a,{children:Object(m.jsx)($,{})})]}),document.getElementById("root")),_()}},[[84,1,2]]]);
//# sourceMappingURL=main.9e44213c.chunk.js.map