(this.webpackJsonpmern=this.webpackJsonpmern||[]).push([[0],{27:function(e,t,n){e.exports=n(60)},32:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},60:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(25),o=n.n(l),c=n(8),i=n(1);n(32);var s=function(e){var t=e.children;return r.a.createElement("div",{style:{height:100,clear:"both",paddingTop:20,paddingBottom:100,textAlign:"center"},className:"jumbotron"},t)},u=n(11);function m(e){var t=e.fluid,n=e.children;return r.a.createElement("div",{className:"container".concat(t?"-fluid":"")},n)}function d(e){var t=e.fluid,n=e.children;return r.a.createElement("div",{className:"row".concat(t?"-fluid":"")},n)}function v(e){var t=e.size,n=e.children;return r.a.createElement("div",{className:t.split(" ").map((function(e){return"col-"+e})).join(" ")},n)}var f=n(9),E=n.n(f),h=function(e){return E.a.get("https://www.googleapis.com/books/v1/volumes?q="+e)},p=function(){return E.a.get("/api/books")},b=function(e){return E.a.delete("/api/books/"+e)},g=function(e){return E.a.post("/api/books",e)};n(50);function N(e){var t=e.children;return r.a.createElement("div",{className:"list-overflow-container"},r.a.createElement("ul",{className:"list-group"},t))}n(51);var k=function(e){return r.a.createElement("li",{className:"list-group-item border border-dark p-2 m-2 p-1"},r.a.createElement(m,null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-8"},r.a.createElement("h4",null,e.title),r.a.createElement("p",null," Written by ",e.authors.map((function(e,t,n){return t===n.length-1?e:e+", "})))),r.a.createElement("div",{className:"col-4 text-right"},r.a.createElement("a",{href:e.link},r.a.createElement("button",{className:"btn btn-info m-1 btncolor",type:"button"},"View")),r.a.createElement("button",{onClick:e.deleteBook,id:e.id,className:"btn btn-info m-1 btncolor",type:"button"},"Delete"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-2"},r.a.createElement("img",{src:e.image,alt:e.title})),r.a.createElement("div",{className:"col-10"},e.description))))};var w=function(e){var t=Object(a.useState)([]),n=Object(u.a)(t,2),l=n[0],o=n[1];function c(e){e.preventDefault();var t=e.target.id;b(t).then((function(e){return i()})).catch((function(e){return console.log(e)}))}function i(){p().then((function(e){void 0===e.data?o([]):o(e.data)})).catch((function(e){return console.log(e)}))}return Object(a.useEffect)((function(){return i()}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(m,null,r.a.createElement("div",{className:"jumbotron border border-dark p-2"},r.a.createElement("strong",null,"Saved Books"),r.a.createElement("br",null),0!==l.length?r.a.createElement(N,null,l.map((function(e){return r.a.createElement(k,{key:e._id,id:e._id,title:e.title,authors:void 0===e.authors?[]:e.authors,description:e.description,image:e.image,link:e.link,deleteBook:c})}))):r.a.createElement("h1",null,"No saved books!"))))};n(52);var y=function(e){return r.a.createElement(m,null,r.a.createElement("div",{className:"jumbotron border border-dark p-2"},r.a.createElement("b",null,"Book Search"),r.a.createElement("form",{className:"search"},r.a.createElement("div",{className:"form-group text-right"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Enter your search",id:"book",onChange:e.inputChange}),r.a.createElement("button",{id:"submitbtn",type:"submit",onClick:e.handler,className:"btn btn-info mt-2"},"Submit")))))};n(53);var j=function(e){return r.a.createElement("li",{className:"list-group-item border border-dark p-2 m-2 p-1"},r.a.createElement(m,null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-8"},r.a.createElement("h4",null,e.title),e.authors.length?r.a.createElement("p",null," Written by ",e.authors.map((function(e,t,n){return t===n.length-1?e:e+", "}))):r.a.createElement("p",null,"No authors to display")),r.a.createElement("div",{className:"col-4 text-right"},r.a.createElement("a",{href:e.link},r.a.createElement("button",{id:"btncolor",className:"btn btn-info m-1",type:"button"},"View")),r.a.createElement("button",{id:"btncolor",className:"btn btn-info m-1",onClick:function(t){t.preventDefault(),alert("Saved "+e.title+"!");var n={title:e.title,authors:e.authors,description:e.description,image:e.image,link:e.link};g(n).catch((function(e){return console.log(e)}))},type:"button"},"Save"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-2"},r.a.createElement("img",{src:e.image,alt:e.title})),r.a.createElement("div",{className:"col-10"},e.description))))};var S=function(e){var t=Object(a.useState)({results:[]}),n=Object(u.a)(t,2),l=n[0],o=n[1],c=Object(a.useState)(""),i=Object(u.a)(c,2),s=i[0],d=i[1];function v(e){h(e).then((function(e){void 0===e.data?o({results:[]}):o({results:e.data.items})})).catch((function(e){return console.log(e)}))}return Object(a.useEffect)((function(){v("")}),[]),r.a.createElement("div",null,r.a.createElement(y,{inputChange:function(e){var t=e.target.value;d(t)},handler:function(e){e.preventDefault(),v(s)}}),r.a.createElement(r.a.Fragment,null,r.a.createElement(m,null,r.a.createElement("div",{className:"jumbotron border border-dark p-2"},r.a.createElement("strong",null,"Book Results"),r.a.createElement("br",null),l.results.length?r.a.createElement(N,null,l.results.map((function(e){return r.a.createElement(j,{key:e.id,title:e.volumeInfo.title,authors:void 0===e.volumeInfo.authors?[]:e.volumeInfo.authors,description:e.volumeInfo.description,image:void 0===e.volumeInfo.imageLinks?"https://via.placeholder.com/150":e.volumeInfo.imageLinks.thumbnail,link:e.volumeInfo.infoLink})}))):r.a.createElement("h1",null,"No results to show!")))))};var x=function(){return r.a.createElement(m,{fluid:!0},r.a.createElement(d,null,r.a.createElement(v,{size:"md-12"},r.a.createElement(s,null,r.a.createElement("h1",null,"404 Page Not Found"),r.a.createElement("h1",null,r.a.createElement("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji"},"\ud83d\ude44"))))))};n(54);var B=function(){var e=Object(i.f)();return r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-custom"},r.a.createElement(c.b,{className:"navbar-brand",to:"/"},"Google Book Search"),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"/"===e.pathname?"nav-item active":"nav-item"},r.a.createElement(c.b,{className:"nav-link",to:"/"},"Search ",r.a.createElement("span",{color:"white",className:" sr-only"},"(current)"))),r.a.createElement("li",{className:"/saved"===e.pathname?"nav-item active":"nav-item"},r.a.createElement(c.b,{className:"nav-link",to:"/saved"},"Saved"))))))};var O=function(){return r.a.createElement(c.a,null,r.a.createElement("div",null,r.a.createElement(B,null),r.a.createElement(s,null,r.a.createElement("h1",null,r.a.createElement("b",null,"Google Book Search")),r.a.createElement("p",null,"Search for and Save Books of Interest")),r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/",component:S}),r.a.createElement(i.a,{exact:!0,path:"/saved",component:w}),r.a.createElement(i.a,{exact:!0,path:"/saved/:id",component:w}),r.a.createElement(i.a,{component:x}))))},I=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function C(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(r.a.createElement(O,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");I?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):C(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):C(e)}))}}()}},[[27,1,2]]]);
//# sourceMappingURL=main.73fa967f.chunk.js.map