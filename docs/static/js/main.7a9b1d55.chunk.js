(this["webpackJsonpprincipal-page"]=this["webpackJsonpprincipal-page"]||[]).push([[0],{13:function(e,t){function n(e,t,n,c){var s=a(n-e),r=a(c-t),i=(e=a(e),n=a(n),Math.sin(s/2)*Math.sin(s/2)+Math.sin(r/2)*Math.sin(r/2)*Math.cos(e)*Math.cos(n)),o=6371*(2*Math.atan2(Math.sqrt(i),Math.sqrt(1-i)));return Number.parseFloat(o).toFixed(2)}function a(e){return e*Math.PI/180}e.exports={calcCrow:n,toRad:a,getDistance:function(e,t,a,c){for(var s=[],r=[],i=0;i<e.length;i++){var o=e[i];s.push(Number.parseFloat(n(a[0],a[1],o.PosX,o.PosY)))}for(var l=0;l<5;){var j=Math.min.apply(null,s);r.push(Number.parseFloat(j));var b=s.indexOf(j);-1!=b&&s.splice(b,1),l+=1}for(o=0;o<5;o++)if(n(a[0],a[1],t.PosX,t.PosY).toString()==r[o].toString())return!0;return!1}}},25:function(e,t,n){},26:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(18),s=n.n(c),r=(n(25),n(7)),i=(n(26),n(0));function o(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark p-3",children:Object(i.jsxs)("div",{className:"container",children:[Object(i.jsxs)(r.b,{className:"navbar-brand",to:"/",children:[Object(i.jsx)("i",{className:"material-icons"})," Adventist App"]}),Object(i.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(i.jsx)("span",{className:"navbar-toggler-icon"})}),Object(i.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(i.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(r.b,{to:"/Asociaciones",className:"nav-link",children:"Asociaciones"})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(r.b,{to:"/Mision",className:"nav-link",children:"Misiones"})}),Object(i.jsx)("li",{className:"nav-item active",children:Object(i.jsx)(r.b,{to:"/Informacion",className:"nav-link",children:"Informacion"})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(r.b,{to:"/Contact",className:"nav-link",children:"Contacto"})})]})})]})})})}n(33);var l=n(2);n(34);function j(){return Object(i.jsx)("div",{children:Object(i.jsxs)("div",{className:"img-container",children:[Object(i.jsx)("h2",{className:"text-center text-white title",children:"Iglesia Adventista del Septimo Dia"}),Object(i.jsx)("button",{className:"icon",children:Object(i.jsx)("i",{className:"fas fa-place-of-worship"})}),Object(i.jsx)(r.b,{to:"/Church",className:"btn btn-light",children:"Iglesias Cerca"})]})})}var b=n(8),d=(n(35),n(36),n(10)),u=n.n(d),h=n(12),m=function(){var e=Object(h.a)(u.a.mark((function e(t){var n,a,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),n="https://pure-gorge-01437.herokuapp.com/getMision/".concat(t),e.next=4,fetch(n);case 4:return a=e.sent,e.next=7,a.json();case 7:return c=e.sent,console.log(c),e.abrupt("return",c);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function x(e){var t=function(e){var t=Object(a.useState)({data:[],loading:!0}),n=Object(b.a)(t,2),c=n[0],s=n[1];return Object(a.useEffect)((function(){m(e).then((function(e){s({data:e,loading:!1})}))}),[e]),c}(e.mision),n=t.data;t.loading;return Object(i.jsx)("div",{className:"contentGrid",children:n.length>0?n.map((function(e){return Object(i.jsx)("p",{className:"text-white",children:e.Nombre})})):Object(i.jsx)("h2",{className:"text-center text-white",children:"En Desarrollo"})})}function p(e){var t=e.title,n=e.datas,c=Object(a.useState)(),s=Object(b.a)(c,2),r=s[0],o=s[1];return Object(a.useEffect)((function(){var e=document.getElementById("exampleFormControlSelect1").value;o(e)})),Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("div",{children:Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("div",{className:"row",children:[Object(i.jsx)("h3",{className:"text-center text-white",children:t}),Object(i.jsxs)("div",{className:"form-group mx-auto mt-4",children:[Object(i.jsx)("select",{className:"form-control mx-auto",id:"exampleFormControlSelect1",onChange:function(e){var t=e.target.value;t=t.substring(3,t.length),o(t)},children:n.map((function(e){return"Asociaciones"==t?Object(i.jsxs)("option",{value:e,children:[" ",t.substring(0,t.length-2)+" "+e," "]},e):Object(i.jsxs)("option",{value:e,children:[" ",t.substring(0,t.length-2)+" del "+e," "]},e)}))}),Object(i.jsx)(x,{mision:r})]})]})})})})}function O(){return Object(i.jsx)("div",{children:"Informacion"})}function v(){return Object(i.jsx)("div",{children:"Contact"})}var f=n(13);n(38);function g(){var e=Object(a.useState)([]),t=Object(b.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)([]),r=Object(b.a)(s,2),o=r[0],l=r[1];Object(a.useEffect)((function(){j(),navigator.geolocation.getCurrentPosition((function(e){var t=[e.coords.latitude,e.coords.longitude];l(t)}))}),[]);var j=function(){var e=Object(h.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://pure-gorge-01437.herokuapp.com/getChurch/");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,c(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{children:"Iglesias"}),Object(i.jsx)("ul",{children:n.map((function(e){if(Object(f.getDistance)(n,e,o))return Object(i.jsx)("div",{className:"card p-2 mt-4",children:Object(i.jsxs)("div",{className:"card-body",children:[Object(i.jsx)("h3",{className:"card-title",children:e.Nombre}),Object(i.jsx)("p",{className:"card-text",children:e.Ubicacion}),Object(i.jsx)("iframe",{src:"https://www.google.com/maps/embed?pb=!1m24!1m12!1m3!1d30880.08117208651!2d".concat(o[1],"!3d").concat(o[0],"!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m9!3e6!4m3!3m2!1d").concat(o[0],"!2d").concat(o[1],"!4m3!3m2!1d").concat(e.PosX,"!2d").concat(e.PosY,"!5e0!3m2!1ses!2sgt!4v1635305813144!5m2!1ses!2sgt"),width:"600",height:"450",loading:"lazy"}),Object(i.jsxs)("p",{children:[Object(f.calcCrow)(o[0],o[1],e.PosX,e.PosY)," Km"]})]})},e.Id+e.Nombre[1])}))})]})}function N(){return Object(i.jsx)("div",{children:Object(i.jsx)(g,{})})}function w(){return Object(i.jsxs)("div",{children:[Object(i.jsx)(o,{}),Object(i.jsx)(l.a,{path:"/",exact:!0,component:j}),Object(i.jsxs)("div",{className:"container p-4",children:[Object(i.jsx)(l.a,{path:"/Asociaciones",component:function(){return Object(i.jsx)(p,{title:"Asociaciones",datas:["Central","Metropolitana","Occidental"]})}}),Object(i.jsx)(l.a,{path:"/Mision",component:function(){return Object(i.jsx)(p,{title:"Misiones",datas:["Oriente","Norte","Altipano","Lago","Sur"]})}}),Object(i.jsx)(l.a,{path:"/Contact",component:v}),Object(i.jsx)(l.a,{path:"/Informacion",component:O}),Object(i.jsx)(l.a,{path:"/Church",component:N})]})]})}s.a.render(Object(i.jsx)(r.a,{children:Object(i.jsx)(w,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.7a9b1d55.chunk.js.map