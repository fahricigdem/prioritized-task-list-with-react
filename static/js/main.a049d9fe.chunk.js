(this["webpackJsonpprioritized-task-list-with-react"]=this["webpackJsonpprioritized-task-list-with-react"]||[]).push([[0],{25:function(t,e,c){},26:function(t,e,c){},33:function(t,e,c){},34:function(t,e,c){},35:function(t,e,c){},37:function(t,e,c){"use strict";c.r(e);var n=c(1),a=c.n(n),i=c(19),s=c.n(i),r=(c(25),c(5)),o=c(2),l=c(3),j=(c(26),c(0)),d=Object(n.createContext)(),b=function(t){var e=Object(n.useState)([]),c=Object(l.a)(e,2),a=c[0],i=c[1],s=Object(n.useState)(1e4),r=Object(l.a)(s,2),o=r[0],b=r[1];Object(n.useEffect)((function(){O()}),[]),Object(n.useEffect)((function(){u()}),[a]);var u=function(){localStorage.setItem("tasks",JSON.stringify(a)),localStorage.setItem("lastId",JSON.stringify(o))},O=function(){if(null===localStorage.getItem("tasks"))localStorage.setItem("tasks",JSON.stringify([])),localStorage.setItem("lastId",JSON.stringify(1e4));else{var t=JSON.parse(localStorage.getItem("tasks")),e=JSON.parse(localStorage.getItem("lastId"));i(t),b(e)}};return Object(j.jsx)(d.Provider,{value:{value1:[a,i],value2:[o,b]},children:t.children})},u=function(){var t=a.a.useContext(d).value1,e=Object(l.a)(t,1)[0],c=0;return e.map((function(t){return t.completed&&c++,t})),Object(j.jsxs)("nav",{className:"navBar",children:[Object(j.jsx)(r.b,{to:"/prioritized-task-list-with-react/",style:{textDecoration:"none",color:"whitesmoke"},children:Object(j.jsx)("h1",{className:"navButton navHome",children:"Home"})}),Object(j.jsx)(r.b,{to:"/prioritized-task-list-with-react/5",style:{textDecoration:"none"},children:Object(j.jsxs)("h5",{className:"navButton",children:["All: ",e.length]})}),c?Object(j.jsxs)("div",{className:"badge badge-danger",children:["Done : ",c," "]}):Object(j.jsxs)("div",{className:"badge badge-info",children:["Done : ",c," "]})]})},O=(c(33),function(t){var e=t.listNu,c=t.listName,n=t.title,a=t.numOfEl;return Object(j.jsx)(r.b,{to:"/prioritized-task-list-with-react/".concat(e),style:{textDecoration:"none",color:"whitesmoke"},children:Object(j.jsxs)("div",{className:"TaskGroup ".concat(c),children:[Object(j.jsx)("h5",{children:n}),a?Object(j.jsx)("h4",{children:Object(j.jsx)("span",{className:"badge rounded-pill bg-danger",children:a})}):""]})})}),m=function(){var t=Object(n.useContext)(d).value1,e=Object(l.a)(t,1)[0],c=0,a=0,i=0,s=0;return e.map((function(t){return 1===t.categorie&&c++,2===t.categorie&&a++,3===t.categorie&&i++,4===t.categorie&&s++,t})),Object(j.jsxs)("div",{className:"HomePage",children:[Object(j.jsxs)("div",{className:"TaskGroupRow",children:[Object(j.jsx)(O,{listNu:"1",listName:"UrgentImp",title:"Urgent & Important",numOfEl:c}),Object(j.jsx)(O,{listNu:"2",listName:"notUrgentImp",title:"Important",numOfEl:a})]}),Object(j.jsx)(r.b,{to:"/prioritized-task-list-with-react/new-task",style:{textDecoration:"none"},children:Object(j.jsx)("div",{className:"AddHome",children:Object(j.jsx)("h1",{children:" + "})})}),Object(j.jsxs)("div",{className:"TaskGroupRow",children:[Object(j.jsx)(O,{listNu:"3",listName:"UrgentNotImp",title:"Urgent",numOfEl:i}),Object(j.jsx)(O,{listNu:"4",listName:"notUrgentNotImp",title:"others",numOfEl:s})]})]})},h=(c(34),c(10)),x=function(t){var e=t.cat,c=Object(n.useContext)(d).value1,a=Object(l.a)(c,2),i=a[0],s=a[1],r=i.map((function(t){var c;if(t.categorie===e||5===e)return c=t.completed&&"checked",Object(j.jsxs)("div",{className:"taskrow",children:[Object(j.jsxs)("li",{className:c,onClick:function(){return e=t.id,void s(Object(h.a)(i).map((function(t){return t.id===e&&(t.completed=!t.completed),t})));var e},children:[t.title,t.text&&Object(j.jsx)("span",{style:{color:"grey",fontSize:"calc(7px + 2vmin)"},children:" ..."}),t.detail&&Object(j.jsx)("p",{style:{color:"grey",fontSize:"calc(7px + 2vmin)"},children:t.text})]},t.id),Object(j.jsx)("p",{onClick:function(){return e=t.id,void s(Object(h.a)(i).map((function(t){return t.id===e&&(t.detail=!t.detail),t})));var e},className:"formButton",style:{minWidth:"3vw",padding:"1vw",backgroundColor:"#f0c929",color:"whitesmoke"},children:" detail  "}),Object(j.jsx)("p",{onClick:function(){return e=t.id,void s(Object(h.a)(i).filter((function(t){return t.id!==e})));var e},className:"formButton",style:{minWidth:"3vw",padding:"1vw",backgroundColor:"#ec5858",color:"whitesmoke"},children:" del  "})]})}));return Object(j.jsx)("ul",{id:"myUL",children:r})},f=function(){var t=Object(n.useContext)(d).value1,e=Object(l.a)(t,1)[0],c=0,a=0,i=0,s=0;return e.map((function(t){return 1===t.categorie&&c++,2===t.categorie&&a++,3===t.categorie&&i++,4===t.categorie&&s++,t})),Object(j.jsxs)("div",{className:"buttonContainer",children:[Object(j.jsx)(r.b,{to:"/prioritized-task-list-with-react/1",style:{textDecoration:"none"},children:Object(j.jsxs)("div",{className:"formButton link",style:{backgroundColor:"#99CC00"},children:["Urgent & Important : ",c]})}),Object(j.jsx)(r.b,{to:"/prioritized-task-list-with-react/2",style:{textDecoration:"none"},children:Object(j.jsxs)("div",{className:"formButton link",style:{backgroundColor:"#36A4DD"},children:["Important :",a]})}),Object(j.jsx)(r.b,{to:"/prioritized-task-list-with-react/3",style:{textDecoration:"none"},children:Object(j.jsxs)("div",{className:"formButton link",style:{backgroundColor:"#FF9F00"},children:["Urgent : ",i]})}),Object(j.jsx)(r.b,{to:"/prioritized-task-list-with-react/4",style:{textDecoration:"none"},children:Object(j.jsxs)("div",{className:"formButton link",style:{backgroundColor:"#FF4D4E"},children:["others : ",s]})})]})},p=function(t){var e=t.match,c=Number(e.params.cat),n={color:"#d8c292",fontSize:"calc(15px + 2vmin)"};return Object(j.jsxs)("div",{className:"taskListContainer",children:[1===c?Object(j.jsx)("p",{style:n,children:"Urgent & Important"}):2===c?Object(j.jsx)("p",{style:n,children:"Important"}):3===c?Object(j.jsx)("p",{style:n,children:"Urgent"}):4===c?Object(j.jsx)("p",{style:n,children:"Others"}):Object(j.jsx)("p",{style:n,children:"All Tasks"}),Object(j.jsx)(x,{cat:c}),Object(j.jsxs)("div",{className:"buttonContainer",children:[Object(j.jsx)(r.b,{to:"/prioritized-task-list-with-react/new-task",style:{textDecoration:"none",color:"whitesmoke"},children:Object(j.jsx)("button",{className:"formButton",style:{backgroundColor:"#54e346",color:"#aa3a3a"},children:"Add"})}),Object(j.jsx)(f,{})]})]})},g=(c(35),function(){var t=Object(n.useContext)(d),e=t.value1,c=t.value2,a=Object(l.a)(e,2),i=a[0],s=a[1],r=Object(l.a)(c,2),o=r[0],b=r[1],u=Object(n.useState)(""),O=Object(l.a)(u,2),m=O[0],x=O[1],p=Object(n.useState)(""),g=Object(l.a)(p,2),v=g[0],k=g[1],N=Object(n.useState)(null),w=Object(l.a)(N,2),y=w[0],C=w[1],S=Object(n.useState)(!1),I=Object(l.a)(S,2),D=I[0],z=I[1],B=Object(n.useState)(!1),T=Object(l.a)(B,2),U=T[0],E=T[1],F=D?"formButton  urgent ":"formButton ",J=U?"formButton   important":"formButton ";Object(n.useEffect)((function(){C(D&&U?1:!D&&U?2:D&&!U?3:4)}),[D,U]);return Object(j.jsxs)("div",{className:"formContainer",children:[Object(j.jsxs)("form",{onSubmit:function(t){t.preventDefault();var e=[].concat(Object(h.a)(i),[{id:o,title:m,text:v,categorie:y,completed:!1,detail:!1}]);s(e),b(o+1),x(""),k("details..."),z(!1),E(!1)},children:[Object(j.jsx)("input",{className:"newTaskInput",type:"text",name:"title",value:m,placeholder:"New Task Title",onChange:function(t){x(t.target.value)},required:!0}),Object(j.jsx)("br",{}),Object(j.jsx)("div",{className:F,onClick:function(){z(!D)},children:"Urgent"}),Object(j.jsx)("div",{className:J,onClick:function(){E(!U)},children:"Important"}),Object(j.jsx)("br",{}),Object(j.jsx)("textarea",{className:"newTaskDetail",name:"newTaskDetail",id:"taskDetail",value:v,cols:"24",rows:"2",placeholder:"Task details: ...",onChange:function(t){k(t.target.value)}}),Object(j.jsx)("br",{}),Object(j.jsx)("button",{className:"formButton add",children:"Add"})]}),Object(j.jsx)("br",{}),Object(j.jsx)(f,{})]})});var v=function(){return Object(j.jsx)(b,{children:Object(j.jsx)(r.a,{children:Object(j.jsxs)("div",{children:[Object(j.jsx)(u,{}),Object(j.jsxs)(o.c,{children:[Object(j.jsx)(o.a,{path:"/prioritized-task-list-with-react/",exact:!0,component:m}),Object(j.jsx)(o.a,{path:"/prioritized-task-list-with-react/new-task",component:g}),Object(j.jsx)(o.a,{path:"/prioritized-task-list-with-react/:cat",component:p})]})]})})})},k=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,38)).then((function(e){var c=e.getCLS,n=e.getFID,a=e.getFCP,i=e.getLCP,s=e.getTTFB;c(t),n(t),a(t),i(t),s(t)}))};c(36);s.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(v,{})}),document.getElementById("root")),k()}},[[37,1,2]]]);
//# sourceMappingURL=main.a049d9fe.chunk.js.map