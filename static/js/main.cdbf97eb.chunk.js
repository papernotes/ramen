(this.webpackJsonpramen=this.webpackJsonpramen||[]).push([[0],{31:function(e,t,n){},32:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n(12),r=n.n(i),a=n(10),s=(n(31),n(32),n(3)),l=n(15),h=n(21),j=n(1);var o=function(){return Object(j.jsx)(h.a,{children:Object(j.jsxs)(l.a,{children:[Object(j.jsx)(h.a.Brand,{children:Object(j.jsx)(a.b,{style:{textDecoration:"none"},to:"/ramen",children:Object(j.jsx)("h2",{children:"jon's ramen list"})})}),Object(j.jsx)(h.a.Collapse,{className:"justify-content-end",children:Object(j.jsx)(a.b,{style:{textDecoration:"none"},to:"/faq",children:Object(j.jsx)("h3",{children:"faq"})})})]})})},d=n(13);var u=function(){return Object(c.useEffect)((function(){d.a.initialize("UA-210961017-1"),d.a.pageview(window.location.pathname+window.location.search)}),[]),Object(j.jsxs)("div",{children:[Object(j.jsx)("p",{children:"As a heads up, I do like strong/rich broths. A good egg will help."}),Object(j.jsx)("p",{children:"I usually check things out like: broth > noodles > chashu > egg > rest"}),Object(j.jsx)("hr",{style:{width:"50vw",margin:"auto"}}),Object(j.jsx)("br",{}),Object(j.jsxs)("div",{style:{margin:"auto",width:"50%",textAlign:"left"},children:[Object(j.jsx)("h4",{children:"Why are the reviews so vague/short?"}),Object(j.jsx)("p",{children:"I'm really bad at explaining flavors/food. A lot of these are quick notes I saved during the meal."}),Object(j.jsx)("h4",{children:'What does "yes" mean?'}),Object(j.jsx)("p",{children:"I'll say yes if you ask me to go there every time."}),Object(j.jsx)("h4",{children:'What does "try it" mean?'}),Object(j.jsx)("p",{children:"Try it out. There's something here that I liked . I wouldn't mind eating here, too."}),Object(j.jsx)("h4",{children:'What does "aite" mean?'}),Object(j.jsx)("p",{children:"It's good, it's alright, but I won't seek it out. I wouldn't mind eating here, though."}),Object(j.jsx)("h4",{children:'What does "nah" mean?'}),Object(j.jsx)("p",{children:"I'd prefer eating some place else."}),Object(j.jsx)("h4",{children:'Should I never eat at the "Nah" section?'}),Object(j.jsx)("p",{children:"No, you should still try it all. I'd be willing to go back to these places eventually."}),Object(j.jsx)("h4",{children:"How can you put RAMEN_PLACE in CATEGORY?!?"}),Object(j.jsx)("p",{children:"My bad, ignore that one."})]}),Object(j.jsx)(a.b,{to:"/ramen",children:"home"})]})},b=n(7),x=n(20),O=n(16),f=n(24);var g=function(e){var t=e.reviews,n=e.update,c=e.setText,i={1:[],2:[],3:[],4:[],5:[]};return Object(j.jsx)("div",{style:{maxHeight:"100%",overflow:"scroll"},children:function(e){return e.forEach((function(e){return i[e.rank].push(e)})),Object.keys(i).map((function(e){return function(e,t){var i=e.filter((function(e){return e.rank.toString()===t})),r=function(e){switch(e){case"1":return"Yes";case"2":return"Try it";case"3":return"It's aite";case"4":return"Nah";default:return"haven't been yet"}}(t);return Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{style:{textAlign:"left"},children:Object(j.jsx)("h2",{children:r})}),Object(j.jsx)(f.a,{variant:"flush",children:i.sort((function(e,t){return e.name.localeCompare(t.name)})).map((function(e,t){return Object(j.jsx)(f.a.Item,{action:!0,onClick:function(){n(e.name,e.lat,e.lng),c(e.text)},children:e.name},t)}))})]},t)}(i[e],e)}))}(t)})},m=n(14);var p=function(e){var t,n=e.reviews,c=e.defaultCenter,i=e.lat,r=e.lng,a=e.update;return Object(j.jsxs)(m.a,{height:400,defaultCenter:c,center:[i,r],defaultZoom:12,children:[(t=n,t.map((function(e,t){return"5"===e.rank.toString()?Object(j.jsx)(m.b,{onClick:function(){return a(e.name,e.lat,e.lng,e.text)},color:"gray",width:40,anchor:[e.lat,e.lng]},t):e.lat!==i&&e.lng!==r?Object(j.jsx)(m.b,{onClick:function(){return a(e.name,e.lat,e.lng,e.text)},color:"green",width:40,anchor:[e.lat,e.lng]},t):Object(j.jsx)(m.b,{color:"red",width:50,anchor:[i,r]},t)}))),Object(j.jsx)(m.c,{})]})},v=n.p+"static/media/ramen.f770b7ec.yml";function w(){var e=window;return{width:e.innerWidth,height:e.innerHeight}}var y=n(26);var k=function(){var e=37.7649439,t=-122.4640632,n=Object(c.useState)(e),i=Object(b.a)(n,2),r=i[0],a=i[1],s=Object(c.useState)(t),h=Object(b.a)(s,2),o=h[0],u=h[1],f=Object(c.useState)([]),m=Object(b.a)(f,2),k=m[0],I=m[1],C=Object(c.useState)("hi"),A=Object(b.a)(C,2),S=A[0],E=A[1],T=Object(c.useState)("Thanks for coming through. Check out the ramen list and the FAQ.\nIf you find yourself liking the places I like, maybe this list is for you."),W=Object(b.a)(T,2),N=W[0],F=W[1],L=function(){var e=Object(c.useState)(w()),t=Object(b.a)(e,2),n=t[0],i=t[1];return Object(c.useEffect)((function(){function e(){i(w())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),n}().width;function q(e,t,n,c){a(t),u(n),E(e),F(c)}return Object(c.useEffect)((function(){d.a.initialize("UA-210961017-1"),d.a.pageview(window.location.pathname+window.location.search)}),[]),Object(c.useEffect)((function(){0===k.length&&fetch(v).then((function(e){return e.text()})).then((function(e){I(y.a.load(e))}))}),[k]),L<=580?Object(j.jsxs)(l.a,{children:[Object(j.jsx)(x.a,{children:Object(j.jsx)(O.a,{sm:8,style:{height:"40vh"},children:Object(j.jsxs)("div",{style:{whiteSpace:"break-spaces",textAlign:"left"},children:[Object(j.jsx)("h1",{children:S}),Object(j.jsx)("p",{children:N})]})})}),Object(j.jsx)(x.a,{children:Object(j.jsx)(O.a,{sm:4,style:{width:"100%",height:"40vh"},children:Object(j.jsx)(g,{reviews:k,update:q,setText:F})})})]}):Object(j.jsx)(l.a,{style:{maxWidth:"85vw"},children:Object(j.jsxs)(x.a,{children:[Object(j.jsx)(O.a,{sm:4,style:{maxHeight:"80vh"},children:Object(j.jsx)(g,{reviews:k,update:q,setText:F})}),Object(j.jsxs)(O.a,{sm:8,style:{height:"100%"},children:[Object(j.jsx)(p,{reviews:k,defaultCenter:[e,t],lat:r,lng:o,update:q}),Object(j.jsxs)("div",{style:{whiteSpace:"break-spaces"},children:[Object(j.jsx)("h1",{children:S}),Object(j.jsx)("p",{children:N})]})]})]})})};var I=function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(o,{}),Object(j.jsxs)(s.c,{children:[Object(j.jsx)(s.a,{path:"*",element:Object(j.jsx)(k,{})}),Object(j.jsx)(s.a,{exact:!0,path:"/ramen",element:Object(j.jsx)(k,{})}),Object(j.jsx)(s.a,{exact:!0,path:"/faq",element:Object(j.jsx)(u,{})})]})]})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,38)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),i(e),r(e),a(e)}))};r.a.render(Object(j.jsx)(a.a,{basename:"/",children:Object(j.jsx)(I,{})}),document.getElementById("root")),C()}},[[36,1,2]]]);
//# sourceMappingURL=main.cdbf97eb.chunk.js.map