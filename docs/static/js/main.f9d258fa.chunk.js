(this["webpackJsonpprincipal-page"]=this["webpackJsonpprincipal-page"]||[]).push([[0],{13:function(e,t){function c(e,t,c,a){var n=s(c-e),r=s(a-t),i=(e=s(e),c=s(c),Math.sin(n/2)*Math.sin(n/2)+Math.sin(r/2)*Math.sin(r/2)*Math.cos(e)*Math.cos(c)),l=6371*(2*Math.atan2(Math.sqrt(i),Math.sqrt(1-i)));return Number.parseFloat(l).toFixed(2)}function s(e){return e*Math.PI/180}e.exports={calcCrow:c,toRad:s,getDistance:function(e,t,s,a){for(var n=[],r=[],i=0;i<e.length;i++){var l=e[i];n.push(Number.parseFloat(c(s[0],s[1],l.PosX,l.PosY)))}for(var o=0;o<5;){var d=Math.min.apply(null,n);r.push(Number.parseFloat(d));var j=n.indexOf(d);-1!=j&&n.splice(j,1),o+=1}for(l=0;l<5;l++)if(c(s[0],s[1],t.PosX,t.PosY).toString()==r[l].toString())return!0;return!1}}},25:function(e,t,c){},26:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c(18),n=c.n(a),r=(c(25),c(4)),i=(c(26),c(0));function l(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark p-3",children:Object(i.jsxs)("div",{className:"container",children:[Object(i.jsxs)(r.b,{className:"navbar-brand",to:"/",children:[Object(i.jsx)("i",{className:"material-icons"})," Adventist App"]}),Object(i.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(i.jsx)("span",{className:"navbar-toggler-icon"})}),Object(i.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(i.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(r.b,{to:"/Asociaciones",className:"nav-link",children:"Asociaciones"})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(r.b,{to:"/Mision",className:"nav-link",children:"Misiones"})}),Object(i.jsx)("li",{className:"nav-item active",children:Object(i.jsx)(r.b,{to:"/Informacion",className:"nav-link",children:"Informacion"})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(r.b,{to:"/Contact",className:"nav-link",children:"Contacto"})})]})})]})})})}c(33);var o=c(2);c(34);function d(){return Object(i.jsx)("div",{children:Object(i.jsxs)("div",{className:"img-container",children:[Object(i.jsx)("h2",{className:"text-center text-white title",children:"Iglesia Adventista del Septimo Dia"}),Object(i.jsx)("button",{className:"icon",children:Object(i.jsx)("i",{className:"fas fa-place-of-worship"})}),Object(i.jsx)(r.b,{to:"/Church",className:"btn btn-light",children:"Iglesias Cerca"})]})})}var j=c(8),b=(c(35),c(36),c(10)),m=c.n(b),h=c(12),x=function(){var e=Object(h.a)(m.a.mark((function e(t){var c,s,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),c="https://pure-gorge-01437.herokuapp.com/getMision/".concat(t),e.next=4,fetch(c);case 4:return s=e.sent,e.next=7,s.json();case 7:return a=e.sent,console.log(a),e.abrupt("return",a);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=(c(38),function(e){var t=e.church,c=Object(s.useState)([]),a=Object(j.a)(c,2),n=a[0],l=a[1];return Object(s.useEffect)((function(){navigator.geolocation.getCurrentPosition((function(e){var t=[e.coords.latitude,e.coords.longitude];l(t)}))}),[n]),Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("div",{style:{width:500,height:480,marginTop:20},className:"shadow-lg mb-5 bg-darks rounded border-bottom mx-auto card",children:Object(i.jsxs)("div",{className:"card-body",style:{padding:20},children:[Object(i.jsxs)("h3",{children:["Iglesia ",t.Nombre]}),Object(i.jsxs)("p",{children:[" ",Object(i.jsx)("b",{children:"Ubicacion"})," ",t.Ubicacion]}),Object(i.jsx)("iframe",{src:"https://www.google.com/maps/embed?pb=!1m24!1m12!1m3!1d30880.08117208651!2d".concat(n[1],"!3d").concat(n[0],"!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m9!3e6!4m3!3m2!1d").concat(n[0],"!2d").concat(n[1],"!4m3!3m2!1d").concat(t.PosX,"!2d").concat(t.PosY,"!5e0!3m2!1ses!2sgt!4v1635305813144!5m2!1ses!2sgt"),width:"450",height:"280",loading:"lazy"}),Object(i.jsx)(r.b,{to:{pathname:"/Some",state:{church:t,position:n}},className:"btn btn-primary btn-block mt-4",children:"Ver Iglesia"})]})})})});function O(e){var t=function(e){var t=Object(s.useState)({data:[],loading:!0}),c=Object(j.a)(t,2),a=c[0],n=c[1];return Object(s.useEffect)((function(){x(e).then((function(e){n({data:e,loading:!1})}))}),[e]),a}(e.mision),c=t.data,a=t.loading;return Object(i.jsxs)("div",{className:"contentGrid",children:[a&&Object(i.jsx)("p",{children:"Loading..."}),c.length>0?c.map((function(e){return Object(i.jsx)(u,{church:e},e.Id+e.Anciano[0])})):Object(i.jsx)("h2",{className:"text-center text-white",children:"En Desarrollo"})]})}function p(e){var t=e.title,c=e.datas,a=Object(s.useState)(),n=Object(j.a)(a,2),r=n[0],l=n[1];return Object(s.useEffect)((function(){var e=document.getElementById("exampleFormControlSelect1").value;l(e)})),Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("div",{children:Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("div",{className:"row",children:[Object(i.jsx)("h3",{className:"text-center text-white",children:t}),Object(i.jsxs)("div",{className:"form-group mx-auto mt-4",children:[Object(i.jsx)("select",{className:"form-control mx-auto",id:"exampleFormControlSelect1",onChange:function(e){var t=e.target.value;t=t.substring(3,t.length),l(t)},children:c.map((function(e){return"Asociaciones"==t?Object(i.jsxs)("option",{value:e,children:[" ",t.substring(0,t.length-2)+" "+e," "]},e):Object(i.jsxs)("option",{value:e,children:[" ",t.substring(0,t.length-2)+" del "+e," "]},e)}))}),Object(i.jsx)(O,{mision:r})]})]})})})})}function g(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:"container mt-5 text-white",children:[Object(i.jsx)("h1",{children:"Quienes Somos?"}),Object(i.jsxs)("div",{className:"row g-3",children:[Object(i.jsx)("div",{className:"col-md-7",children:Object(i.jsx)("img",{src:"https://github.com/Olivers11/Images/blob/master/img/mision.png?raw=true",width:"450",height:"220"})}),Object(i.jsx)("div",{className:"col-md-5",children:Object(i.jsx)("p",{children:Object(i.jsx)("font",{face:"stencil",children:Object(i.jsx)("b",{children:"La misio\u0301n de la Iglesia Adventista del Se\u0301ptimo Di\u0301a es hacer disci\u0301pulos de todas las naciones mediante la proclamacio\u0301n del evangelio eterno en el contexto de los mensajes de los tres a\u0301ngeles de Apocalipsis 14: 6-12, guia\u0301ndolos a aceptar a Jesu\u0301s como Salvador personal y a unirse a su iglesia remanente, e instruye\u0301ndolos para que sirvan al Sen\u0303or y se preparen para su pronto regreso."})})})}),Object(i.jsx)("div",{className:"col-md-7",children:Object(i.jsx)("img",{src:"https://github.com/Olivers11/Images/blob/master/img/vision.png?raw=true",width:"450",height:"220"})}),Object(i.jsx)("div",{className:"col-md-5",children:Object(i.jsx)("p",{children:Object(i.jsx)("font",{size:"3",face:"stencil",children:Object(i.jsx)("b",{children:"\u201cCada miembro del cuerpo de Cristo preparado para el reino de Dios\u201d."})})})}),Object(i.jsx)("div",{className:"col-md-7",children:Object(i.jsx)("img",{src:"https://github.com/Olivers11/Images/blob/master/img/valores.png?raw=true",width:"450",height:"220"})}),Object(i.jsx)("div",{className:"col-md-5",children:Object(i.jsx)("p",{children:Object(i.jsx)("font",{size:"3",face:"stencil",children:Object(i.jsx)("b",{children:"Amor, Servicio, Obediencia, Excelencia, Coherencia, Integridad, Lealtad, Respeto, Tolerancia, Compromiso."})})})}),Object(i.jsxs)("div",{className:"col-md-12",children:[Object(i.jsx)("a",{className:"btn btn-primary",target:"_blank",href:"https://es-la.facebook.com/CentralGuatemalaIglesiaAdventista/",role:"button",children:Object(i.jsx)("i",{className:"fab fa-facebook-f",children:"Facebook"})}),Object(i.jsx)("a",{className:"btn btn-primary ml-2",target:"_blank",href:"https://twitter.com/adventista_es?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",role:"button",children:Object(i.jsx)("i",{className:"fab fa-twitter",children:"Twitter"})}),Object(i.jsx)("a",{className:"btn btn-primary ml-2",target:"_blank",href:"https://www.instagram.com/iglesiaadventistaoficial/?hl=es",role:"button",children:Object(i.jsx)("i",{className:"fab fa-instagram",children:"Instagram"})}),Object(i.jsx)("a",{className:"btn btn-primary ml-2",target:"_blank",href:"https://www.youtube.com/channel/UC5QTNtavIA-uuuCDuaZYIUA",role:"button",children:Object(i.jsx)("i",{className:"fab fa-youtube",children:"Youtube"})})]})]})]})})}c(39);function f(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:"container mt-5 text-white",children:[Object(i.jsx)("h1",{className:"text-white",children:"Contactenos!"}),Object(i.jsxs)("div",{className:"row g-3",children:[Object(i.jsxs)("div",{className:"col-md-6",children:[Object(i.jsx)("label",{for:"nombre",className:"form-label",children:"Nombre"}),Object(i.jsx)("input",{type:"text",className:"form-control",id:"nombre",required:!0})]}),Object(i.jsxs)("div",{className:"col-md-6",children:[Object(i.jsx)("label",{for:"apellido",className:"form-label",children:"Apellido"}),Object(i.jsx)("input",{type:"text",className:"form-control",id:"apellido",required:!0})]}),Object(i.jsxs)("div",{class:"col-md-8",children:[Object(i.jsx)("label",{for:"email",className:"form-label",children:"E-mail"}),Object(i.jsx)("input",{type:"text",className:"form-control",id:"email",required:!0})]}),Object(i.jsxs)("div",{className:"col-md-4",children:[Object(i.jsx)("label",{for:"numeroTelefono",className:"form-label",children:"Numero de Telefono"}),Object(i.jsx)("input",{type:"text",className:"form-control",id:"numeroTelefono",placeholder:"(502) 47331499"})]}),Object(i.jsxs)("div",{className:"col-md-12",children:[Object(i.jsx)("label",{for:"preguntas",className:"form-label",children:"Comentarios o Preguntas?"}),Object(i.jsx)("textarea",{className:"form-control",id:"preguntas",rows:"3"})]}),Object(i.jsx)("div",{className:"col-md-12",children:Object(i.jsx)("button",{type:"Enviar",className:"btn btn-primary",children:"Enviar"})}),Object(i.jsxs)("div",{className:"col-md-12",children:[Object(i.jsx)("a",{className:"btn btn-primary ",target:"_blank",href:"https://es-la.facebook.com/CentralGuatemalaIglesiaAdventista/",role:"button",children:Object(i.jsx)("i",{className:"fab fa-facebook-f",children:"Facebook"})}),Object(i.jsx)("a",{className:"btn btn-primary ml-3",target:"_blank",href:"https://twitter.com/adventista_es?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",role:"button",children:Object(i.jsx)("i",{className:"fab fa-twitter",children:"Twitter"})}),Object(i.jsx)("a",{className:"btn btn-primary ml-3",target:"_blank",href:"https://www.instagram.com/iglesiaadventistaoficial/?hl=es",role:"button",children:Object(i.jsx)("i",{className:"fab fa-instagram",children:"Instagram"})}),Object(i.jsx)("a",{className:"btn btn-primary ml-3",target:"_blank",href:"https://www.youtube.com/channel/UC5QTNtavIA-uuuCDuaZYIUA",role:"button",children:Object(i.jsx)("i",{className:"fab fa-youtube",children:"Youtube"})})]})]})]})})}var v=c(13);function N(){var e=Object(s.useState)([]),t=Object(j.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)([]),l=Object(j.a)(n,2),o=l[0],d=l[1];Object(s.useEffect)((function(){b(),navigator.geolocation.getCurrentPosition((function(e){var t=[e.coords.latitude,e.coords.longitude];d(t)}))}),[]);var b=function(){var e=Object(h.a)(m.a.mark((function e(){var t,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://pure-gorge-01437.herokuapp.com/getChurch/");case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,a(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{className:"text-center text-white",children:"Iglesias Cerca"}),Object(i.jsx)("ul",{children:c.map((function(e){if(Object(v.getDistance)(c,e,o))return Object(i.jsx)("div",{style:{width:500,height:510,marginTop:20},className:"card mx-auto p-2 mt-4",children:Object(i.jsxs)("div",{className:"card-body",children:[Object(i.jsx)("h3",{className:"card-title",children:e.Nombre}),Object(i.jsx)("p",{className:"card-text",children:e.Ubicacion}),Object(i.jsx)("iframe",{src:"https://www.google.com/maps/embed?pb=!1m24!1m12!1m3!1d30880.08117208651!2d".concat(o[1],"!3d").concat(o[0],"!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m9!3e6!4m3!3m2!1d").concat(o[0],"!2d").concat(o[1],"!4m3!3m2!1d").concat(e.PosX,"!2d").concat(e.PosY,"!5e0!3m2!1ses!2sgt!4v1635305813144!5m2!1ses!2sgt"),width:"450",height:"280",loading:"lazy"}),Object(i.jsx)(r.b,{to:{pathname:"/Some",state:{church:e,position:o}},className:"btn btn-primary btn-block mt-4",children:"Ver Iglesia"}),Object(i.jsxs)("p",{className:"mt-3 text-muted text-center",style:{fontSize:14},children:[" Distancia ",Object(v.calcCrow)(o[0],o[1],e.PosX,e.PosY)," Km"]})]})},e.Id+e.Nombre[1])}))})]})}function w(){return Object(i.jsx)("div",{children:Object(i.jsx)(N,{})})}var y=function(){var e,t,c=Object(o.e)(),a=null===(e=c.state)||void 0===e?void 0:e.church,n=null===(t=c.state)||void 0===t?void 0:t.position;return Object(s.useEffect)((function(){window.scrollTo(0,0)}),[]),Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("div",{className:"container mx-auto",children:Object(i.jsxs)("div",{className:"row",children:[Object(i.jsx)("div",{className:"col",children:Object(i.jsx)("div",{style:{width:500,height:480,marginTop:20},className:"shadow-lg mb-5 bg-darks rounded border-bottom mx-auto card",children:Object(i.jsxs)("div",{className:"card-body",style:{padding:20},children:[Object(i.jsxs)("h3",{className:"text-center mt-2",children:["Iglesia ",a.Nombre]}),Object(i.jsxs)("div",{className:"row mt-2",children:[Object(i.jsx)("div",{className:"col mt-4",children:Object(i.jsx)("iframe",{src:"https://www.google.com/maps/embed?pb=!1m24!1m12!1m3!1d30880.08117208651!2d".concat(n[1],"!3d").concat(n[0],"!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m9!3e6!4m3!3m2!1d").concat(n[0],"!2d").concat(n[1],"!4m3!3m2!1d").concat(a.PosX,"!2d").concat(a.PosY,"!5e0!3m2!1ses!2sgt!4v1635305813144!5m2!1ses!2sgt"),width:"450",height:"280",loading:"lazy"})}),Object(i.jsxs)("p",{className:"mt-4 text-muted text-center",children:["Pr. ",a.Pastor]})]})]})})}),Object(i.jsxs)("div",{className:"col",children:[Object(i.jsxs)("table",{class:"table bg-success text-white mt-4 text-center",children:[Object(i.jsx)("thead",{children:Object(i.jsx)("tr",{children:Object(i.jsx)("th",{class:"lopendeopdrachten",colspan:"4",children:"Horarios y Actividades"})})}),Object(i.jsxs)("tbody",{children:[Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{scope:"row",children:"Hora"}),Object(i.jsxs)("td",{children:[" ",Object(i.jsx)("b",{children:"Domingo"})," "]}),Object(i.jsxs)("td",{children:[" ",Object(i.jsx)("b",{children:"Miercoles"})," "]}),Object(i.jsxs)("td",{children:[" ",Object(i.jsx)("b",{children:"Sabado"})," "]})]}),Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{scope:"row",children:"19:00 - 20:00"}),Object(i.jsx)("td",{children:"Culto Virtual"}),Object(i.jsx)("td",{children:"Culto Virtual"}),Object(i.jsx)("td",{children:"----"})]}),Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{scope:"row",children:"09:30 - 12:00"}),Object(i.jsx)("td",{children:"Club de Conquistadores"}),Object(i.jsx)("td",{children:"----"}),Object(i.jsx)("td",{children:"Culto "})]}),Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{scope:"row",children:"16:00 - 18:00"}),Object(i.jsx)("td",{children:"----"}),Object(i.jsx)("td",{children:"----"}),Object(i.jsx)("td",{children:"S. Jovenes"})]}),Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{scope:"row",children:"19:00 - 20:30"}),Object(i.jsx)("td",{children:"----"}),Object(i.jsx)("td",{children:"----"}),Object(i.jsx)("td",{children:"Futbol"})]})]})]}),Object(i.jsxs)("div",{className:"card",style:{height:210},children:[Object(i.jsxs)("p",{className:"ml-4 mt-4",children:[" ",Object(i.jsx)("b",{children:"Anciano de Iglesia: "})," ",a.Anciano," "]}),Object(i.jsxs)("p",{className:"ml-4",children:[" ",Object(i.jsx)("b",{children:"Lider de Iglesia: "})," ",a.Lider," "]}),Object(i.jsxs)("p",{className:"ml-4",children:[" ",Object(i.jsx)("b",{children:"Distrito: "})," ",a.Distrito," "]}),Object(i.jsxs)("p",{className:"ml-4",children:[" ",Object(i.jsx)("b",{children:"Ubicacion: "})," ",a.Ubicacion," "]})]})]})]})})})};function C(){return Object(i.jsxs)("div",{children:[Object(i.jsx)(l,{}),Object(i.jsx)(o.a,{path:"/",exact:!0,component:d}),Object(i.jsxs)("div",{className:"container p-4",children:[Object(i.jsx)(o.a,{path:"/Asociaciones",component:function(){return Object(i.jsx)(p,{title:"Asociaciones",datas:["Central","Metropolitana","Occidental"]})}}),Object(i.jsx)(o.a,{path:"/Mision",component:function(){return Object(i.jsx)(p,{title:"Misiones",datas:["Oriente","Norte","Altipano","Lago","Sur"]})}}),Object(i.jsx)(o.a,{path:"/Contact",component:f}),Object(i.jsx)(o.a,{path:"/Informacion",component:g}),Object(i.jsx)(o.a,{path:"/Church",component:w}),Object(i.jsxs)(o.a,{path:"/Some",children:[" ",Object(i.jsx)(y,{})," "]})]})]})}n.a.render(Object(i.jsx)(r.a,{children:Object(i.jsx)(C,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.f9d258fa.chunk.js.map