(this["webpackJsonpprincipal-page"]=this["webpackJsonpprincipal-page"]||[]).push([[0],{10:function(e,t){function c(e,t,c,n){var s=a(c-e),i=a(n-t),r=(e=a(e),c=a(c),Math.sin(s/2)*Math.sin(s/2)+Math.sin(i/2)*Math.sin(i/2)*Math.cos(e)*Math.cos(c)),o=6371*(2*Math.atan2(Math.sqrt(r),Math.sqrt(1-r)));return Number.parseFloat(o).toFixed(2)}function a(e){return e*Math.PI/180}e.exports={calcCrow:c,toRad:a,getDistance:function(e,t,a,n){for(var s=[],i=[],r=0;r<e.length;r++){var o=e[r];s.push(Number.parseFloat(c(a[0],a[1],o.PosX,o.PosY)))}for(var l=0;l<5;){var j=Math.min.apply(null,s);i.push(Number.parseFloat(j));var b=s.indexOf(j);-1!=b&&s.splice(b,1),l+=1}for(o=0;o<5;o++)if(c(a[0],a[1],t.PosX,t.PosY).toString()==i[o].toString())return!0;return!1}}},25:function(e,t,c){},26:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){},37:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c(17),s=c.n(n),i=(c(25),c(7)),r=(c(26),c(0));function o(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark p-3",children:Object(r.jsxs)("div",{className:"container",children:[Object(r.jsxs)(i.b,{className:"navbar-brand",to:"/",children:[Object(r.jsx)("i",{className:"material-icons"})," Adventist App"]}),Object(r.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(r.jsx)("span",{className:"navbar-toggler-icon"})}),Object(r.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(r.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(i.b,{to:"/Asociaciones",className:"nav-link",children:"Asociaciones"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(i.b,{to:"/Asociaciones",className:"nav-link",children:"Misiones"})}),Object(r.jsx)("li",{className:"nav-item active",children:Object(r.jsx)(i.b,{to:"/Informacion",className:"nav-link",children:"Informacion"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(i.b,{to:"/Contact",className:"nav-link",children:"Contacto"})})]})})]})})})}c(33);var l=c(2);c(34);function j(){return Object(r.jsx)("div",{children:Object(r.jsxs)("div",{className:"img-container",children:[Object(r.jsx)("h2",{className:"text-center text-white title",children:"Iglesia Adventista del Septimo Dia"}),Object(r.jsx)("button",{className:"icon",children:Object(r.jsx)("i",{className:"fas fa-place-of-worship"})}),Object(r.jsx)(i.b,{to:"/Church",className:"btn btn-light",children:"Iglesias Cerca"})]})})}c(35);function b(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"row",children:[Object(r.jsx)("h3",{className:"text-center",children:"Asociaciones"}),Object(r.jsx)("div",{className:"form-group mx-auto mt-4",children:Object(r.jsxs)("select",{className:"form-control mx-auto",id:"exampleFormControlSelect1",children:[Object(r.jsx)("option",{children:"Asociacion Central"}),Object(r.jsx)("option",{children:"Asociacion Metropolitana"}),Object(r.jsx)("option",{children:"Asociacion Occidental"})]})})]})})})}function d(){return Object(r.jsx)("div",{children:"Informacion"})}function h(){return Object(r.jsx)("div",{children:"Contact"})}var m=c(14),u=c.n(m),x=c(20),p=c(15),O=c(10);function v(){var e=Object(a.useState)([]),t=Object(p.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)([]),i=Object(p.a)(s,2),o=i[0],l=i[1];Object(a.useEffect)((function(){j(),navigator.geolocation.getCurrentPosition((function(e){var t=[e.coords.latitude,e.coords.longitude];l(t)}))}),[]);var j=function(){var e=Object(x.a)(u.a.mark((function e(){var t,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://pure-gorge-01437.herokuapp.com/getChurch/");case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,n(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:"Iglesias"}),Object(r.jsx)("ul",{children:c.map((function(e){if(Object(O.getDistance)(c,e,o))return Object(r.jsx)("div",{className:"card p-2 mt-4",children:Object(r.jsxs)("div",{className:"card-body mx-auto",children:[Object(r.jsx)("h3",{className:"card-title",children:e.Nombre}),Object(r.jsx)("p",{className:"card-text",children:e.Ubicacion}),Object(r.jsx)("iframe",{src:"https://www.google.com/maps/embed?pb=!1m24!1m12!1m3!1d30880.08117208651!2d".concat(o[1],"!3d").concat(o[0],"!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m9!3e6!4m3!3m2!1d").concat(o[0],"!2d").concat(o[1],"!4m3!3m2!1d").concat(e.PosX,"!2d").concat(e.PosY,"!5e0!3m2!1ses!2sgt!4v1635305813144!5m2!1ses!2sgt"),width:"600",height:"450",loading:"lazy"}),Object(r.jsxs)("p",{children:[Object(O.calcCrow)(o[0],o[1],e.PosX,e.PosY)," Km"]})]})},e.Id+e.Nombre[1])}))})]})}function f(){return Object(r.jsx)("div",{children:Object(r.jsx)(v,{})})}function g(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(o,{}),Object(r.jsx)(l.a,{path:"/",exact:!0,component:j}),Object(r.jsxs)("div",{className:"container p-4",children:[Object(r.jsx)(l.a,{path:"/Asociaciones",component:b}),Object(r.jsx)(l.a,{path:"/Mision",component:b}),Object(r.jsx)(l.a,{path:"/Contact",component:h}),Object(r.jsx)(l.a,{path:"/Informacion",component:d}),Object(r.jsx)(l.a,{path:"/Church",component:f})]})]})}s.a.render(Object(r.jsx)(i.a,{children:Object(r.jsx)(g,{})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.bc2682c6.chunk.js.map