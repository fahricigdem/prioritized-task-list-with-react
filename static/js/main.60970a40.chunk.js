(this["webpackJsonpprioritized-task-list-with-react"]=this["webpackJsonpprioritized-task-list-with-react"]||[]).push([[0],{25:function(t,e,c){},26:function(t,e,c){},33:function(t,e,c){},34:function(t,e,c){},35:function(t,e,c){},37:function(t,e,c){"use strict";c.r(e);var n=c(1),a=c.n(n),r=c(19),i=c.n(r),s=(c(25),c(5)),o=c(2),l=c(3),j=(c(26),c(0)),d=Object(n.createContext)(),b=function(t){var e=Object(n.useState)([]),c=Object(l.a)(e,2),a=c[0],r=c[1],i=Object(n.useState)(1e4),s=Object(l.a)(i,2),o=s[0],b=s[1];Object(n.useEffect)((function(){O()}),[]),Object(n.useEffect)((function(){u()}),[a]);var u=function(){localStorage.setItem("tasks",JSON.stringify(a)),localStorage.setItem("lastId",JSON.stringify(o))},O=function(){if(null===localStorage.getItem("tasks"))localStorage.setItem("tasks",JSON.stringify([])),localStorage.setItem("lastId",JSON.stringify(1e4));else{var t=JSON.parse(localStorage.getItem("tasks")),e=JSON.parse(localStorage.getItem("lastId"));r(t),b(e)}};return Object(j.jsx)(d.Provider,{value:{value1:[a,r],value2:[o,b]},children:t.children})},u=function(){var t=a.a.useContext(d).value1,e=Object(l.a)(t,1)[0],c=0;return e.map((function(t){return t.completed&&c++,t})),Object(j.jsxs)("nav",{className:"navBar",children:[Object(j.jsx)(s.b,{to:"/prioritized-task-list-with-react/",style:{textDecoration:"none",color:"whitesmoke"},children:Object(j.jsx)("h1",{className:"navButton navHome",children:"Home"})}),Object(j.jsx)(s.b,{to:"/prioritized-task-list-with-react/5",style:{textDecoration:"none"},children:Object(j.jsxs)("h5",{className:"navButton",children:["All: ",e.length]})}),c?Object(j.jsxs)("div",{className:"badge badge-danger",children:["Done : ",c," "]}):Object(j.jsxs)("div",{className:"badge badge-info",children:["Done : ",c," "]})]})},O=(c(33),function(t){var e=t.listNu,c=t.listName,n=t.title,a=t.numOfEl;return Object(j.jsx)(s.b,{to:"/prioritized-task-list-with-react/".concat(e),style:{textDecoration:"none",color:"whitesmoke"},children:Object(j.jsxs)("div",{className:"TaskGroup ".concat(c),children:[Object(j.jsx)("h5",{children:n}),a?Object(j.jsx)("h4",{children:Object(j.jsx)("span",{className:"badge rounded-pill bg-danger",children:a})}):""]})})}),m=function(){var t=Object(n.useContext)(d).value1,e=Object(l.a)(t,1)[0],c=0,a=0,r=0,i=0;return e.map((function(t){return 1===t.categorie&&c++,2===t.categorie&&a++,3===t.categorie&&r++,4===t.categorie&&i++,t})),Object(j.jsxs)("div",{className:"HomePage",children:[Object(j.jsxs)("div",{className:"TaskGroupRow",children:[Object(j.jsx)(O,{listNu:"1",listName:"UrgentImp",title:"Urgent & Important",numOfEl:c}),Object(j.jsx)(O,{listNu:"2",listName:"notUrgentImp",title:"Important",numOfEl:a})]}),Object(j.jsx)(s.b,{to:"/prioritized-task-list-with-react/new-task",style:{textDecoration:"none"},children:Object(j.jsx)("div",{className:"AddHome",children:Object(j.jsx)("h1",{children:" + "})})}),Object(j.jsxs)("div",{className:"TaskGroupRow",children:[Object(j.jsx)(O,{listNu:"3",listName:"UrgentNotImp",title:"Urgent",numOfEl:r}),Object(j.jsx)(O,{listNu:"4",listName:"notUrgentNotImp",title:"others",numOfEl:i})]})]})},h=(c(34),c(10)),x=function(t){var e=t.cat,c=Object(n.useContext)(d).value1,a=Object(l.a)(c,2),r=a[0],i=a[1],s=r.map((function(t){var c;if(t.categorie===e||5===e)return c=t.completed&&"checked",Object(j.jsxs)("div",{className:"taskrow",children:[Object(j.jsxs)("li",{className:c,onClick:function(){return e=t.id,void i(Object(h.a)(r).map((function(t){return t.id===e&&(t.completed=!t.completed),t})));var e},children:[t.title,t.text&&Object(j.jsx)("span",{style:{color:"#fff",fontSize:"calc(7px + 2vmin)"},children:" ..."}),t.detail&&Object(j.jsx)("p",{style:{color:"#c8c6a7",fontSize:"calc(7px + 2vmin)"},children:t.text})]},t.id),Object(j.jsx)("p",{onClick:function(){return e=t.id,void i(Object(h.a)(r).map((function(t){return t.id===e&&(t.detail=!t.detail),t})));var e},className:"formButton ",style:{minWidth:"3vw",padding:"1vw",margin:"1vh",backgroundColor:"#f0c929",color:"whitesmoke"},children:" ...  "}),Object(j.jsx)("p",{onClick:function(){return e=t.id,void i(Object(h.a)(r).filter((function(t){return t.id!==e})));var e},className:"formButton ",style:{minWidth:"3vw",padding:"1vw",margin:"1vh",backgroundColor:"#ec5858",color:"whitesmoke"},children:" x  "})]})}));return Object(j.jsx)("ul",{id:"myUL",children:s})},f=function(){var t=Object(n.useContext)(d).value1,e=Object(l.a)(t,1)[0],c=0,a=0,r=0,i=0;return e.map((function(t){return 1===t.categorie&&c++,2===t.categorie&&a++,3===t.categorie&&r++,4===t.categorie&&i++,t})),Object(j.jsxs)("div",{className:"buttonContainer",children:[Object(j.jsx)(s.b,{to:"/prioritized-task-list-with-react/1",style:{textDecoration:"none"},children:Object(j.jsxs)("div",{className:"formButton link",style:{backgroundColor:"#555",color:"#99CC00"},children:["Urgent & ",Object(j.jsx)("br",{})," Important : ",c]})}),Object(j.jsx)(s.b,{to:"/prioritized-task-list-with-react/2",style:{textDecoration:"none"},children:Object(j.jsxs)("div",{className:"formButton link",style:{backgroundColor:"#555",color:"#36A4DD"},children:["Important : ",a]})}),Object(j.jsx)(s.b,{to:"/prioritized-task-list-with-react/3",style:{textDecoration:"none"},children:Object(j.jsxs)("div",{className:"formButton link",style:{backgroundColor:"#555",color:"#FF9F00"},children:["Urgent : ",r]})}),Object(j.jsx)(s.b,{to:"/prioritized-task-list-with-react/4",style:{textDecoration:"none"},children:Object(j.jsxs)("div",{className:"formButton link",style:{backgroundColor:"#555",color:"#FF4D4E"},children:["others : ",i]})})]})},p=function(t){var e=t.match,c=Number(e.params.cat),n={color:"#d8c292",fontSize:"calc(15px + 2vmin)"};return Object(j.jsxs)("div",{className:"taskListContainer",children:[1===c?Object(j.jsx)("p",{style:n,children:"Urgent & Important"}):2===c?Object(j.jsx)("p",{style:n,children:"Important"}):3===c?Object(j.jsx)("p",{style:n,children:"Urgent"}):4===c?Object(j.jsx)("p",{style:n,children:"Others"}):Object(j.jsx)("p",{style:n,children:"All Tasks"}),Object(j.jsx)(x,{cat:c}),Object(j.jsxs)("div",{className:"buttonContainer",children:[Object(j.jsx)(s.b,{to:"/prioritized-task-list-with-react/new-task",style:{textDecoration:"none",color:"whitesmoke"},children:Object(j.jsx)("button",{className:"formButton",style:{backgroundColor:"#54e346",color:"#aa3a3a"},children:"Add"})}),Object(j.jsx)(f,{})]})]})},v=(c(35),function(){var t=Object(n.useContext)(d),e=t.value1,c=t.value2,a=Object(l.a)(e,2),r=a[0],i=a[1],s=Object(l.a)(c,2),o=s[0],b=s[1],u=Object(n.useState)(""),O=Object(l.a)(u,2),m=O[0],x=O[1],p=Object(n.useState)(""),v=Object(l.a)(p,2),g=v[0],k=v[1],N=Object(n.useState)(null),w=Object(l.a)(N,2),y=w[0],C=w[1],S=Object(n.useState)(!1),I=Object(l.a)(S,2),D=I[0],z=I[1],B=Object(n.useState)(!1),F=Object(l.a)(B,2),T=F[0],U=F[1],E=D?"formButton  urgent ":"formButton ",J=T?"formButton  important":"formButton ";Object(n.useEffect)((function(){C(D&&T?1:!D&&T?2:D&&!T?3:4)}),[D,T]);return Object(j.jsxs)("div",{className:"formContainer",children:[Object(j.jsxs)("form",{onSubmit:function(t){t.preventDefault();var e=[].concat(Object(h.a)(r),[{id:o,title:m,text:g,categorie:y,completed:!1,detail:!1}]);i(e),b(o+1),x(""),k(""),z(!1),U(!1)},children:[Object(j.jsx)("input",{className:"newTaskInput",type:"text",name:"title",value:m,placeholder:"New Task Title",onChange:function(t){x(t.target.value)},required:!0}),Object(j.jsx)("br",{}),Object(j.jsx)("div",{className:E,onClick:function(){z(!D)},style:{borderStyle:"dashed",borderColor:"#FF9F00"},children:"Urgent"}),Object(j.jsx)("div",{className:J,onClick:function(){U(!T)},style:{borderStyle:"dashed",borderColor:"#36A4DD"},children:"Important"}),Object(j.jsx)("br",{}),Object(j.jsx)("textarea",{className:"newTaskDetail",name:"newTaskDetail",id:"taskDetail",value:g,cols:"24",rows:"2",placeholder:"Task details: ...",onChange:function(t){k(t.target.value)}}),Object(j.jsx)("br",{}),Object(j.jsx)("button",{className:"formButton add",children:"Add"})]}),Object(j.jsx)("br",{}),Object(j.jsx)(f,{})]})});var g=function(){return Object(j.jsx)(b,{children:Object(j.jsxs)(s.a,{children:[Object(j.jsx)(u,{}),Object(j.jsxs)(o.c,{children:[Object(j.jsx)(o.a,{path:"/prioritized-task-list-with-react/",exact:!0,component:m}),Object(j.jsx)(o.a,{path:"/prioritized-task-list-with-react/new-task",component:v}),Object(j.jsx)(o.a,{path:"/prioritized-task-list-with-react/:cat",component:p})]})]})})},k=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,38)).then((function(e){var c=e.getCLS,n=e.getFID,a=e.getFCP,r=e.getLCP,i=e.getTTFB;c(t),n(t),a(t),r(t),i(t)}))};c(36);i.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(g,{})}),document.getElementById("root")),k()}},[[37,1,2]]]);
//# sourceMappingURL=main.60970a40.chunk.js.map