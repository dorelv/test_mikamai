(this.webpackJsonptest_mikamai=this.webpackJsonptest_mikamai||[]).push([[0],{79:function(e,t,a){},83:function(e,t,a){"use strict";a.r(t);var n=a(5),i=a(0),l=a.n(i),r=a(10),c=a.n(r),o=(a(79),a(26)),s=a(42),u=a(129),d=a(85),j=a(126),b=a(113),f=a(127),m=a(130),h=a(116),x=a(132),v=Object(b.a)((function(e){return{flexContainer:{alignItems:"flex-start",display:"flex",flex:1,justifyContent:"flex-start",flexDirection:"column"},labelStyle:{marginLeft:e.spacing(1)}}})),p=function(e){var t=e.inputVal.split("").map((function(e){return e.toUpperCase()})).join("");return Object(n.jsxs)(d.a,{className:v().labelStyle,variant:"body2",children:["Esercizio 1: ",t]})},O=function(e){var t=e.inputVal,a=(t=t.replace(/[\W_]+/g," ")).split(" ").map((function(e,t){return t%2?e.toUpperCase():e.toLocaleLowerCase()})).join(" ");return Object(n.jsxs)(d.a,{className:v().labelStyle,variant:"body2",children:["Esercizio 2: ",a]})},g=function(e){var t=e.inputVal.split("").map((function(e){var t=90===e.charCodeAt(0)?65:e.charCodeAt(0)+1;return(/[^a-z]/gi.test(e)?e:String.fromCharCode(t)).toLowerCase()})).join("");return Object(n.jsxs)(d.a,{className:v().labelStyle,variant:"body2",children:["Esercizio 3: ",t]})},y=function(e){var t=e.inputVal,a=(t=t.replace(/[\W_]+/g,"").toLowerCase()).split("").reduce((function(e,t){return e[t]?e[t]++:e[t]=1,e}),{});return Object(n.jsxs)(d.a,{className:v().labelStyle,variant:"body2",children:["Esercizio 4: ",JSON.stringify(a)]})},C=function(e){var t=e.inputVal,a=e.goalVal,i=t.toLowerCase().includes(a.toLowerCase());return Object(n.jsxs)(d.a,{className:v().labelStyle,variant:"body2",children:['Esercizio 5 (valore da verificare "',a,'"): ',JSON.stringify(i)]})};function k(){var e=v(),t=Object(i.useState)(""),a=Object(o.a)(t,2),r=a[0],c=a[1];return Object(n.jsx)(l.a.Fragment,{children:Object(n.jsxs)(h.a,{className:e.flexContainer,maxWidth:"md",children:[Object(n.jsx)(x.a,{id:"outlined-full-width",label:"Javascript functional",placeholder:"Stringa da elaborare",value:r.toLowerCase(),onChange:function(e){var t=e.target;return c(t.value)},fullWidth:!0,margin:"normal",InputLabelProps:{shrink:!0},variant:"outlined"}),Object(n.jsx)(p,{inputVal:r}),Object(n.jsx)(O,{inputVal:r}),Object(n.jsx)(g,{inputVal:r}),Object(n.jsx)(y,{inputVal:r}),Object(n.jsx)(C,{inputVal:r,goalVal:"a"})]})})}var S=a(41),w=a(120),z=a(131),L=a(121),N=a(119),I=a(134),V=a(128),E=a(135),A=Object(b.a)((function(e){return{flexContainer:{alignItems:"flex-start",display:"flex",flex:1,justifyContent:"flex-start",flexDirection:"column"},btnDone:{backgroundColor:"#607d8b",color:"#ffffff",marginTop:e.spacing(1)},formControl:{padding:e.spacing(1)}}})),D=function(e){var t=e.item,a=e.onChange,i=e.onClick;return Object(n.jsxs)(u.a,{children:[Object(n.jsx)(w.a,{control:Object(n.jsx)(z.a,{checked:t.value,onChange:a,disabled:t.done}),label:t.label}),Object(n.jsx)(L.a,{style:{color:t.done?"#4caf50":"#f44336"},onClick:i,children:t.done?"Toggle":"Done"})]})},W=function(e){var t=e.toggledOn,a=e.onChange;return Object(n.jsx)(w.a,{control:Object(n.jsx)(z.a,{checked:t,onChange:a}),label:"Toggle All"})},J=function(e){var t=e.filterVal,a=e.onChange;return Object(n.jsxs)(N.a,{className:A().formControl,children:[Object(n.jsx)(I.a,{component:"span",id:"demo-simple-select-autowidth-label",children:"Filtra"}),Object(n.jsxs)(V.a,{value:t||"tutti",onChange:a,autoWidth:!0,displayEmpty:!0,children:[Object(n.jsx)(E.a,{value:"tutti",children:"Tutti"}),Object(n.jsx)(E.a,{value:"originali",children:"Solo originali"}),Object(n.jsx)(E.a,{value:"nuovi",children:"Nuovi"}),Object(n.jsx)(E.a,{value:"selezionati",children:"Selezionati"}),Object(n.jsx)(E.a,{value:"nonSelezionati",children:"Non selezionati"}),Object(n.jsx)(E.a,{value:"completati",children:"Completati"})]})]})};function T(){var e=A(),t=Object(i.useState)([]),a=Object(o.a)(t,2),r=a[0],c=a[1],s=Object(i.useState)(!1),u=Object(o.a)(s,2),d=u[0],j=u[1],b=Object(i.useState)(void 0),f=Object(o.a)(b,2),m=f[0],x=f[1];Object(i.useEffect)((function(){c([{id:"uuid-1",label:"item 1",value:!0},{id:"uuid-2",label:"item 2",value:!1},{id:"uuid-3",label:"item 3",value:!0}])}),[]),Object(i.useEffect)((function(){var e=Object.values(r).every((function(e){return!0===e.value}));j(!!e)}),[r]);var v=function(e){e.value=!e.value,e.filter="tutti"===m||"originali"===m||"nuovi"===m?e.value?"selezionati":"nonSelezionati":void 0,c(Object(S.a)(r))},p=function(e){void 0===e.done?e.done=!0:e.done=!e.done,e.filter="completati"===m?e.done?"completati":void 0:e.done?"completati":e.value?"selezionati":"nonSelezionati",c(Object(S.a)(r))};return Object(n.jsx)(l.a.Fragment,{children:Object(n.jsxs)(h.a,{className:e.flexContainer,maxWidth:"md",children:[Object(n.jsx)(W,{toggledOn:d,onChange:function(){r.forEach((function(e){delete e.filter,x(void 0),e.value=!d})),j(!d)}}),r.map((function(e){return m?e.filter?Object(n.jsx)(D,{item:e,onChange:function(){return v(e)},onClick:function(){return p(e)}},e.id):null:Object(n.jsx)(D,{item:e,onChange:function(){return v(e)},onClick:function(){return p(e)}},e.id)})),Object(n.jsx)(J,{filterVal:m,onChange:function(e){r.forEach((function(t,a){switch(delete t.filter,e.target.value){case"tutti":t.filter="tutti";break;case"originali":a<[{id:"uuid-1",label:"item 1",value:!0},{id:"uuid-2",label:"item 2",value:!1},{id:"uuid-3",label:"item 3",value:!0}].length&&(t.filter="originali");break;case"nuovi":a>=[{id:"uuid-1",label:"item 1",value:!0},{id:"uuid-2",label:"item 2",value:!1},{id:"uuid-3",label:"item 3",value:!0}].length&&(t.filter="nuovi");break;case"selezionati":t.value&&(t.filter="selezionati");break;case"nonSelezionati":t.value||(t.filter="nonSelezionati");break;case"completati":t.done&&(t.filter="completati");break;default:t.filter="tutti"}})),x(e.target.value),c(Object(S.a)(r))}}),Object(n.jsx)(L.a,{variant:"contained",className:e.btnDone,onClick:function(){var e={id:"uuid-".concat(r.length+1),label:"item ".concat(r.length+1),value:!0,filter:""};m?"nonSelezionati"===m||"completati"===m?x(void 0):e.filter=m:delete e.filter,c([].concat(Object(S.a)(r),[e]))},children:"Aggiungi item"})]})})}var F=a(61),P=a(122),_=a(123),G=a(124),M=a(125),U=Object(F.a)({breakpoints:{values:{xs:0,sm:640,md:960,lg:1280,xl:1920}}}),B=Object(b.a)((function(e){return{cardGrid:{minHeight:"100vh",alignItems:"center",display:"flex",flex:1},cardStyle:{height:"100%",display:"flex",flexDirection:"column"},cardContent:{display:"flex",flex:1,justifyContent:"space-between",flexDirection:"column",alignItems:"center"}}})),H=[{id:1,text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."},{id:2,text:"It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. And more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},{id:3,text:"It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},{id:4,text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}];function R(){var e=B();return Object(n.jsx)(l.a.Fragment,{children:Object(n.jsx)(h.a,{className:e.cardGrid,maxWidth:"md",children:Object(n.jsx)(P.a,{container:!0,spacing:2,children:H.map((function(t){return Object(n.jsx)(_.a,{theme:U,children:Object(n.jsx)(P.a,{item:!0,xs:12,sm:H.length%2?4:6,md:H.length%2?4:3,children:Object(n.jsx)(G.a,{className:e.cardStyle,children:Object(n.jsxs)(M.a,{className:e.cardContent,children:[Object(n.jsx)(d.a,{children:t.text}),Object(n.jsx)(d.a,{variant:"body2",children:"This stay at the bottom"})]})})},t)},t.id)}))})})})}function q(e){var t=e.children,a=e.value,i=e.index;return Object(n.jsx)("div",{role:"tabpanel",hidden:a!==i,id:"nav-tabpanel-".concat(i),"aria-labelledby":"nav-tab-".concat(i),children:a===i&&Object(n.jsx)(u.a,{p:3,children:Object(n.jsx)(d.a,{component:"span",children:t})})})}function K(e){return{id:"nav-tab-".concat(e),"aria-controls":"nav-tabpanel-".concat(e)}}function Q(e){return Object(n.jsx)(j.a,Object(s.a)({onClick:function(e){e.preventDefault()}},e))}var X=Object(b.a)((function(e){return{root:{flexGrow:1}}}));function Y(){var e=X(),t=l.a.useState(0),a=Object(o.a)(t,2),i=a[0],r=a[1];return Object(n.jsxs)("div",{className:e.root,children:[Object(n.jsx)(f.a,{position:"static",children:Object(n.jsxs)(m.a,{variant:"fullWidth",value:i,onChange:function(e,t){r(t)},"aria-label":"nav tabs example",style:{backgroundColor:"#34515e"},children:[Object(n.jsx)(Q,Object(s.a)({label:"Javascipt funzionale",href:"/linguaggi"},K(0))),Object(n.jsx)(Q,Object(s.a)({label:"React framework",href:"/frameworks"},K(1))),Object(n.jsx)(Q,Object(s.a)({label:"CSS",href:"/css"},K(2)))]})}),Object(n.jsx)(q,{value:i,index:0,children:Object(n.jsx)(k,{})}),Object(n.jsx)(q,{value:i,index:1,children:Object(n.jsx)(T,{})}),Object(n.jsx)(q,{value:i,index:2,children:Object(n.jsx)(R,{})})]})}function Z(){return Object(n.jsx)(Y,{})}c.a.render(Object(n.jsx)(Z,{}),document.getElementById("root"))}},[[83,1,2]]]);
//# sourceMappingURL=main.08c6e2ef.chunk.js.map