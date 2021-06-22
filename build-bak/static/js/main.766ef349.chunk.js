(this.webpackJsonpfront_end_dev_homework_assignment=this.webpackJsonpfront_end_dev_homework_assignment||[]).push([[0],{18:function(e,t,r){},19:function(e,t,r){},21:function(e,t,r){"use strict";r.r(t);var c=r(1),n=r.n(c),s=r(9),a=r.n(s),o=(r(18),r(6)),i=r(3),j=r(10),d=r(11),l=r(4),u=r(13),b=r(12),h=[{name:"CAN",id:1,sponsor:"NIH",active:!1,project_start_date:"10/1/2008",project_end_date:"9/31/2014"},{name:"CLN",id:2,sponsor:"NIEHS",active:!0,project_start_date:"10/1/2007",project_end_date:"10/1/2022"},{name:"AMI",id:3,sponsor:"NSF",active:!0,project_start_date:"10/1/2007",project_end_date:"10/1/2027"}],m=[{id:1,name:"Mark",project_id:3,department:"Medicine",role:"PI"},{id:2,name:"Ann",project_id:2,department:"Neuroscience",role:"PI"},{id:3,name:"Mary",project_id:1,department:"Nursing",role:"PI"},{id:4,name:"John",project_id:3,department:"Medicine",role:"Key Personnel"},{id:5,name:"Geri",project_id:2,department:"Neuroscience",role:"Key Personnel"},{id:6,name:"Sam",project_id:2,department:"Neuroscience",role:"Grant Administrator"},{id:7,name:"Jordan",project_id:1,department:"Nursing",role:"Key Personnel"},{id:8,name:"Pat",project_id:3,department:"Medicine",role:"Grant Administrator"},{id:9,name:"Mark",project_id:2,department:"Neuroscience",role:"Key Personnel"},{id:10,name:"Cameron",project_id:3,department:"Medicine",role:"Key Personnel"}],O=(r(19),r(0)),p=function(e){var t=e.projectName,r=e.projectID,c=e.active,n=e.users,s=e.removeProject,a=e.removeUser;e.startDate;return Object(O.jsx)("div",{children:Object(O.jsxs)("table",{children:[Object(O.jsxs)("thead",{children:[Object(O.jsx)("tr",{children:Object(O.jsx)("th",{colSpan:4,children:Object(O.jsxs)("div",{className:"flex-box justify-space-between",children:[Object(O.jsx)("h5",{children:t}),Object(O.jsx)("div",{className:"flex-box align-center",children:Object(O.jsx)("button",{className:"btn remove-project-btn",onClick:function(){return s(r)},children:"Remove Project"})})]})})}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{style:{width:"30%"},children:"User"}),Object(O.jsx)("th",{style:{width:"30%"},children:"Department"}),Object(O.jsx)("th",{colSpan:2,style:{width:"40%"},children:"Role"})]})]}),Object(O.jsxs)("tbody",{children:[!!n.length&&n.map((function(e){return Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:e.name}),Object(O.jsx)("td",{children:e.department}),Object(O.jsx)("td",{children:e.role}),Object(O.jsx)("td",{children:Object(O.jsx)("button",{className:"btn remove-user-btn",onClick:function(){return a(e.id)},children:"x"})})]},e.id)})),!n.length&&Object(O.jsx)("tr",{children:Object(O.jsx)("td",{style:{textAlign:"center"},colSpan:4,children:"No users"})}),Object(O.jsx)("tr",{children:Object(O.jsx)("td",{colSpan:4,children:Object(O.jsx)("span",{className:c?"status active":"status draft",children:c?"Active":"Draft"})})})]})]})})},x=function(e){var t=e.projects,r=e.users,c=e.removeProject,n=e.removeUser;return Object(O.jsx)("div",{className:"flex-box justify-evenly wrap",children:!!t.length&&t.map((function(e){var t=r.filter((function(t){return t.project_id===e.id}));return Object(O.jsx)(p,{active:e.active,projectID:e.id,projectName:e.name,users:t,removeProject:c,removeUser:n},e.id)}))})},v=r(2),f=function(e){var t=e.addProject,r=Object(c.useState)(""),n=Object(v.a)(r,2),s=n[0],a=n[1],o=Object(c.useState)(""),i=Object(v.a)(o,2),j=i[0],d=i[1],l=Object(c.useState)(!1),u=Object(v.a)(l,2),b=u[0],h=u[1],m=Object(c.useState)(""),p=Object(v.a)(m,2),x=p[0],f=p[1],g=Object(c.useState)(""),N=Object(v.a)(g,2),y=N[0],P=N[1],_=function(){a(""),d(""),h(!1),f(""),P("")};return Object(O.jsxs)("form",{className:"form-container",onSubmit:function(e){e.preventDefault(),t({name:s,sponsor:j,active:b,project_start_date:x,project_end_date:y}),_()},children:[Object(O.jsx)("h4",{style:{marginBottom:"0.5rem"},children:"Add Project"}),Object(O.jsxs)("div",{className:"form-control",children:[Object(O.jsx)("label",{children:"Project Name"}),Object(O.jsx)("input",{type:"text",placeholder:"e.g. CHR",value:s,onChange:function(e){return a(e.target.value)},required:!0})]}),Object(O.jsxs)("div",{className:"form-control",children:[Object(O.jsx)("label",{children:"Sponsor"}),Object(O.jsx)("input",{type:"text",placeholder:"e.g. NIEHS",value:j,onChange:function(e){return d(e.target.value)},required:!0})]}),Object(O.jsxs)("div",{className:"form-control flex-box justify-unset align-center",children:[Object(O.jsx)("label",{style:{marginRight:5},children:"Active"}),Object(O.jsx)("input",{type:"checkbox",value:b,onChange:function(e){return h(e.target.checked)}})]}),Object(O.jsxs)("div",{className:"form-control",children:[Object(O.jsx)("label",{children:"Start Date"}),Object(O.jsx)("input",{type:"text",placeholder:"MM/DD/YYYY",value:x,onChange:function(e){return f(e.target.value)},required:!0})]}),Object(O.jsxs)("div",{className:"form-control",children:[Object(O.jsx)("label",{children:"End Date"}),Object(O.jsx)("input",{type:"text",placeholder:"MM/DD/YYYY",value:y,onChange:function(e){return P(e.target.value)},required:!0})]}),Object(O.jsx)("div",{className:"form-control",children:Object(O.jsx)("button",{type:"submit",className:"btn submit-btn",children:"Add"})})]})},g=function(e){var t=e.addUser,r=e.projects,n=Object(c.useState)(""),s=Object(v.a)(n,2),a=s[0],o=s[1],i=Object(c.useState)(""),j=Object(v.a)(i,2),d=j[0],l=j[1],u=Object(c.useState)(""),b=Object(v.a)(u,2),h=b[0],m=b[1],p=Object(c.useState)(1),x=Object(v.a)(p,2),f=x[0],g=x[1],N=function(){o(""),l(""),m(""),g(1)};return Object(O.jsxs)("form",{className:"form-container",onSubmit:function(e){e.preventDefault(),t({name:a,department:d,role:h,project_id:f}),N()},children:[Object(O.jsx)("h4",{style:{marginBottom:"0.5rem"},children:"Add User"}),Object(O.jsxs)("div",{className:"form-control",children:[Object(O.jsx)("label",{children:"User Name"}),Object(O.jsx)("input",{type:"text",placeholder:"e.g. John",value:a,onChange:function(e){return o(e.target.value)},required:!0})]}),Object(O.jsxs)("div",{className:"form-control",children:[Object(O.jsx)("label",{children:"Department"}),Object(O.jsx)("input",{type:"text",placeholder:"e.g. Medicine",value:d,onChange:function(e){return l(e.target.value)},required:!0})]}),Object(O.jsxs)("div",{className:"form-control",children:[Object(O.jsx)("label",{children:"Role"}),Object(O.jsx)("input",{type:"text",placeholder:"Key Personnel",value:h,onChange:function(e){return m(e.target.value)},required:!0})]}),Object(O.jsxs)("div",{className:"form-control flex-box justify-unset align-center",children:[Object(O.jsx)("label",{style:{marginRight:15},children:"Project"}),Object(O.jsx)("select",{value:f,onChange:function(e){return g(parseInt(e.target.value))},children:!!r.length&&r.map((function(e){return Object(O.jsx)("option",{value:e.id,children:e.name},e.id)}))})]}),Object(O.jsx)("div",{className:"form-control",children:Object(O.jsx)("button",{type:"submit",className:"btn submit-btn",children:"Add"})})]})},N=function(e){var t=e.addProject,r=e.addUser,c=e.projects;return Object(O.jsxs)("div",{className:"flex-box justify-evenly wrap",children:[Object(O.jsx)(f,{addProject:t}),Object(O.jsx)(g,{addUser:r,projects:c})]})},y=function(e){Object(u.a)(r,e);var t=Object(b.a)(r);function r(e){var c;return Object(j.a)(this,r),(c=t.call(this,e)).addProjectHandler=c.addProjectHandler.bind(Object(l.a)(c)),c.removeProjectHandler=c.removeProjectHandler.bind(Object(l.a)(c)),c.addUserToProjectHandler=c.addUserToProjectHandler.bind(Object(l.a)(c)),c.removeUserFromProjectHandler=c.removeUserFromProjectHandler.bind(Object(l.a)(c)),c.state={projects:[],users:[]},c}return Object(d.a)(r,[{key:"componentDidMount",value:function(){this.setState({users:Object(i.a)(m),projects:Object(i.a)(h)})}},{key:"addProjectHandler",value:function(e){var t=Object(o.a)(Object(o.a)({},e),{},{id:this.state.projects.length+1}),r=[].concat(Object(i.a)(this.state.projects),[t]);this.setState({projects:Object(i.a)(r)}),console.log("new",e,t,r)}},{key:"removeProjectHandler",value:function(e){var t=this.state.projects.filter((function(t){return t.id!==e})),r=this.state.users.filter((function(t){return t.project_id!==e}));this.setState({projects:Object(i.a)(t),users:Object(i.a)(r)})}},{key:"addUserToProjectHandler",value:function(e){var t=Object(o.a)(Object(o.a)({},e),{},{id:this.state.users.length+1}),r=[].concat(Object(i.a)(this.state.users),[t]);this.setState({users:Object(i.a)(r)})}},{key:"removeUserFromProjectHandler",value:function(e){var t=this.state.users.filter((function(t){return t.id!==e}));this.setState({users:Object(i.a)(t)})}},{key:"render",value:function(){return Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)("header",{className:"text-white",id:"MRH-header",children:Object(O.jsx)("div",{id:"login",className:"fit-header",children:Object(O.jsxs)("div",{className:"user-menu-links",children:[Object(O.jsx)("a",{href:"http://mrh.duke.edu",children:"CUSTOMIZE"})," | ",Object(O.jsx)("a",{href:"http://mrh.duke.edu",children:"Nick Lusk"})]})})}),Object(O.jsx)(x,{projects:this.state.projects,users:this.state.users,removeProject:this.removeProjectHandler,removeUser:this.removeUserFromProjectHandler}),Object(O.jsx)(N,{addProject:this.addProjectHandler,addUser:this.addUserToProjectHandler,projects:this.state.projects})]})}}]),r}(c.Component);a.a.render(Object(O.jsx)(n.a.StrictMode,{children:Object(O.jsx)(y,{})}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.766ef349.chunk.js.map