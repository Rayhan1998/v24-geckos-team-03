(this["webpackJsonpmovie-database"]=this["webpackJsonpmovie-database"]||[]).push([[0],{120:function(e,t,a){},122:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(34),o=a.n(r),c=a(44),i=a(138),u=a(33),m=a(4),s=a(10),p=a(20),d=a.n(p),E=l.a.createContext();function f(e){var t=Object(n.useState)(!1),a=Object(s.a)(t,2),r=a[0],o=a[1],c=Object(n.useState)(!0),i=Object(s.a)(c,2),u=i[0],m=i[1],p=Object(n.useState)(""),f=Object(s.a)(p,2),v=f[0],b=f[1],g=Object(n.useState)([]),h=Object(s.a)(g,2),x=h[0],y=h[1],O=Object(n.useState)(null),j=Object(s.a)(O,2),S=j[0],k=j[1],C=Object(n.useState)(""),w=Object(s.a)(C,2),D=w[0],_=w[1],I="6ee25636d25df9899ed46e80a13383ff";return Object(n.useEffect)((function(){if(!0===u){var e=!1;if(null!==S)try{d.a.get("https://api.themoviedb.org/3/person/".concat(S,"?api_key=").concat(I)).then((function(e){_(e.data.name)})),d.a.get("https://api.themoviedb.org/3/person/".concat(S,"/movie_credits?api_key=").concat(I)).then((function(e){o(!1),y(e.data.cast),m(!0)}))}catch(t){console.log(t),e=!0}if(e||null===S){_("");try{d.a.get("https://api.themoviedb.org/3/trending/movie/week?api_key=".concat(I)).then((function(e){y(e.data.results),m(!0)}))}catch(t){console.log(t)}}}}),[u,S]),l.a.createElement(E.Provider,{value:{setSearch:b,setSearchResults:y,search:v,searchResults:x,ImageUrl:"https://image.tmdb.org/t/p/w400",isSearch:r,setIsSearch:o,APIKEY:I,setDefaultMovies:m,personName:D,setPersonId:k}},e.children)}var v=a(127);var b=function(e){var t=e.imageSrc,a=e.title,n=e.onClick;return l.a.createElement(m.a,{onClick:function(){return n()},bg:"primaryBackground",w:"170px",m:4,color:"primaryText",fontSize:"16px"},l.a.createElement(v.a,{src:t,w:"170px",h:"220px",objectFit:"cover"}),l.a.createElement("h1",null,a))},g=a(130),h=a(128),x=a(129),y=a(133),O=a(136),j=a(135);var S=function(e){var t=Object(n.useContext)(E),a=t.APIKEY,r=t.ImageUrl,o=t.setPersonId,c=t.setDefaultMovies,i=e.isOpen,u=e.onClose,p=e.id,f=Object(n.useState)(null),b=Object(s.a)(f,2),g=b[0],S=b[1],k=Object(n.useState)(null),C=Object(s.a)(k,2),w=C[0],D=C[1];Object(n.useEffect)((function(){if(null!==p){S(null),D(null);try{d.a.get("https://api.themoviedb.org/3/movie/".concat(p,"?api_key=").concat(a)).then((function(e){S(e.data)}))}catch(e){console.log(e)}try{d.a.get("https://api.themoviedb.org/3/movie/".concat(p,"/credits?api_key=").concat(a)).then((function(e){D(e.data.cast)}))}catch(e){console.log(e)}}else S(null),D(null)}),[p,a]);var _=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0,maximumFractionDigits:0}),I=[];if(null!==w){I=w.slice(0,10).map((function(e,t){var a=e.cast_id,n=e.character,i=e.name,s=e.profile_path,p=e.id;return l.a.createElement(m.a,{key:a},l.a.createElement(h.a,{p:"3px",borderWidth:"1px",borderColor:"primaryBorder",rounded:"lg",templateColumns:"30% 70%",columnGap:"3px"},l.a.createElement(v.a,{onClick:function(){return function(e){o(e),c(!0),u()}(p)},cursor:"pointer",rounded:"lg",src:r+s,h:"80px",objectFit:"cover"}),l.a.createElement(m.a,{p:"7px"},i," ",l.a.createElement("br",null)," ",l.a.createElement(x.a,{fontSize:"0.9em",fontStyle:"italic"},n))))}))}return l.a.createElement(l.a.Fragment,null,l.a.createElement(y.a,{preserveScrollBarGap:!0,isOpen:i,onClose:u},l.a.createElement(y.g,null),null!==g&&null!==w&&l.a.createElement(y.d,{bg:"primaryBackground",color:"primaryText"},l.a.createElement(y.f,null,g.title),l.a.createElement(y.c,null),l.a.createElement(y.b,null,l.a.createElement(O.a,null,l.a.createElement(m.a,null,"Summary"),l.a.createElement(m.a,{p:"10px",borderWidth:"1px",borderColor:"primaryBorder",rounded:"lg",fontSize:"0.9em"},g.overview),l.a.createElement(m.a,{mt:"15px"},"Details"),l.a.createElement(h.a,{p:"10px",borderWidth:"1px",borderColor:"primaryBorder",rounded:"lg",templateColumns:"50% 50%",columnGap:"10px",fontSize:"0.8em"},l.a.createElement(m.a,null,"Runtime:"," ",0===g.runtime?"?":"".concat(g.runtime," minutes")),l.a.createElement(m.a,null,"Popularity: ",g.popularity),l.a.createElement(m.a,null,"Status: ",g.status),l.a.createElement(m.a,null,"Release Date:"," ",new Date(g.release_date).toLocaleDateString()),0!==g.budget&&l.a.createElement(m.a,null,"Budget: ",_.format(g.budget)),0!==g.revenue&&l.a.createElement(m.a,null,"Revenue: ",_.format(g.revenue))),l.a.createElement(m.a,{mt:"15px"},"Cast"),null!==w&&l.a.createElement(h.a,{templateColumns:"50% 50%",columnGap:"10px",rowGap:"10px",fontSize:"0.7em"},I),l.a.createElement(m.a,{p:"10px",textAlign:"center",color:"logoText",fontStyle:"italic",fontSize:"1.1em"},g.tagline))),l.a.createElement(y.e,null,l.a.createElement(j.a,{borderColor:"logoText",borderWidth:"3px",backgroundColor:"primaryBackground",color:"logoText",_hover:!0,mr:3,onClick:u},"Close")))))};var k=function(){var e=Object(n.useContext)(E),t=e.searchResults,a=e.ImageUrl,r=Object(n.useState)(null),o=Object(s.a)(r,2),c=o[0],i=o[1],u=Object(g.a)(),m=u.isOpen,p=u.onOpen,d=u.onClose,f=t.map((function(e){return l.a.createElement(b,{key:e.id,title:e.original_title,imageSrc:a+e.poster_path,onClick:function(){return t=e.id,i(t),void p();var t}})}));return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container",style:{maxWidth:"1200px",margin:"0 auto",marginTop:"5%",display:"flex",flexWrap:"wrap",justifyContent:"space-evenly"}},t.length>0?f:null),l.a.createElement(S,{isOpen:m,onClose:d,id:c}))};var C=function(){var e=Object(n.useContext)(E),t=e.setSearch,a=e.setSearchResults,r=e.search,o=e.searchResults,c=e.setIsSearch,i=e.APIKEY,u=e.setDefaultMovies,m=Object(n.useRef)(null);return Object(n.useEffect)((function(){if(r.length>0)try{d.a.get("https://api.themoviedb.org/3/search/movie?api_key=".concat(i,"&query=").concat(r)).then((function(e){a(e.data.results),c(!0),u(!1),m.current.value=""}))}catch(e){console.log(e)}}),[r,a,i,c,u]),console.log(o),l.a.createElement("div",{className:"search-bar"},l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(m.current.value),c(!0)}},l.a.createElement("input",{type:"text",ref:m}),l.a.createElement(j.a,{mx:"5px",h:"2em"},"Search Movies")))},w=a(131),D=a(137),_=a(132),I=function(){var e=Object(n.useContext)(E),t=e.setDefaultMovies,a=e.defaultMovies,r=e.setPersonId;return l.a.createElement(m.a,{className:"nav-bar",bg:"primaryBackground",w:"100%",px:5,py:2},l.a.createElement(O.a,{isInline:!0,justifyContent:"space-between"}," ",l.a.createElement(u.b,{to:"/"}," ",l.a.createElement(O.a,{isInline:!0,onClick:function(){r(null),t(!0),console.log(a),console.log("hello")}},l.a.createElement(v.a,{src:"https://cdn1.iconfinder.com/data/icons/media-colorful-1/48/film_roll-512.png",size:30})," ",l.a.createElement(w.a,{as:"h3",size:"lg",color:"logoText"},"Daily Flix"))),l.a.createElement(O.a,{isInline:!0},l.a.createElement(C,null),l.a.createElement(D.a,{size:"sm",ml:2}))),l.a.createElement(m.a,{float:"right",mr:10},l.a.createElement(_.a,{px:2,color:"primaryText",className:"link"},"My Favorites"),l.a.createElement(_.a,{px:2,color:"primaryText",className:"link"},"Watched"),l.a.createElement(_.a,{px:2,color:"primaryText",className:"link"},"Watch List")))};var R=function(){var e=Object(n.useState)("Genre"),t=Object(s.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)("Year"),c=Object(s.a)(o,2),i=c[0],u=c[1],m=Object(n.useState)(!1),p=Object(s.a)(m,2),f=p[0],v=p[1],b=Object(n.useRef)(null),g=Object(n.useRef)(null),h=Object(n.useContext)(E),x=h.setSearchResults,y=h.APIKEY,O=h.setDefaultMovies;Object(n.useEffect)((function(){if("Genre"!=a&&"Year"!=i){console.log("hello");try{d.a.get("https://api.themoviedb.org/3/discover/movie?api_key=".concat(y,"&sort_by=popularity.desc&page=1&year=").concat(i,"&with_genres=").concat(a)).then((function(e){x(e.data.results),O(!1),v(!1)}))}catch(e){console.log(e)}}}),[f]);var j={marginRight:"10px",position:"relative",width:"20em",height:"3em",lineHeight:"3",background:"#2c3e50",overflow:"hidden",borderRadius:".25em",padding:"0 .5em",color:"#fff",cursor:"pointer"};return l.a.createElement("div",{style:{marginTop:"250px",textAlign:"center"}},l.a.createElement(w.a,{color:"white"},"Find Movies By"),l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),v(!0),r(b.current.value),u(g.current.value)}},l.a.createElement("select",{ref:b,style:j},l.a.createElement("option",{selected:!0,disabled:!0},"Genre"),l.a.createElement("option",{value:"28"},"Action"),l.a.createElement("option",{value:"12"},"Adventure"),l.a.createElement("option",{value:"16"},"Animation"),l.a.createElement("option",{value:"35"},"Comedy"),l.a.createElement("option",{value:"80"},"Crime"),l.a.createElement("option",{value:"99"},"Documentary"),l.a.createElement("option",{value:"18"},"Drama"),l.a.createElement("option",{value:"14"},"Fantasy"),l.a.createElement("option",{value:"36"},"History"),l.a.createElement("option",{value:"10402"},"Music"),l.a.createElement("option",{value:"9648"},"Mystery"),l.a.createElement("option",{value:"10749"},"Romance"),l.a.createElement("option",{value:"878"},"Science Fiction"),l.a.createElement("option",{value:"10770"},"Tv Movie"),l.a.createElement("option",{value:"53"},"Thriller"),l.a.createElement("option",{value:"10752"},"War")),l.a.createElement("select",{ref:g,style:j},l.a.createElement("option",{selected:!0,disabled:!0},"Year"),l.a.createElement("option",null,"2020"),l.a.createElement("option",null,"2019"),l.a.createElement("option",null,"2018"),l.a.createElement("option",null,"2017"),l.a.createElement("option",null,"2016"),l.a.createElement("option",null,"2016"),l.a.createElement("option",null,"2015"),l.a.createElement("option",null,"2013"),l.a.createElement("option",null,"2012"),l.a.createElement("option",null,"2011"),l.a.createElement("option",null,"2010"),l.a.createElement("option",null,"2009")),l.a.createElement("button",{style:{border:"none",color:"black",padding:"8px 32px",textAlign:"center",textDecoration:"none",display:"inlineBlock",fontSize:"16px",margin:"4px 2px",cursor:"pointer",backgroundColor:"#2c3e50",borderRadius:"30px",outline:"none"}},"Submit")))};var T=function(){var e=Object(n.useContext)(E),t=e.isSearch,a=e.personName;return l.a.createElement(m.a,{bg:"primaryBackground",h:"100vh",w:"100vw",style:{overflow:"scroll"}},l.a.createElement("h1",{style:{position:"absolute",top:"100px",color:"white",left:"150px",fontSize:"25px",fontWeight:"100"}},t?null:""===a?"Popular Movies":"Movies starring ".concat(a)),l.a.createElement(I,null),l.a.createElement(R,null),l.a.createElement(k,null))},B=a(7),M=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(B.c,null,l.a.createElement(B.a,{path:"/"},l.a.createElement(T,null))))},F=a(35),z=a(134),A=Object(F.a)(Object(F.a)({},z.a),{},{colors:Object(F.a)(Object(F.a)({},z.a.colors),{},{primaryBackground:"#333",primaryBorder:"#555",logoText:"#49c3fd",primaryText:"#fff"})});a(120);o.a.render(l.a.createElement(f,null,l.a.createElement(u.a,null,l.a.createElement(c.a,{theme:A},l.a.createElement(i.a,null),l.a.createElement(M,null)))),document.querySelector("#root"))},74:function(e,t,a){e.exports=a(122)}},[[74,1,2]]]);
//# sourceMappingURL=main.2bb945f1.chunk.js.map