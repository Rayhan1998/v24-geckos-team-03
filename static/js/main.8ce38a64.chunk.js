(this["webpackJsonpmovie-database"]=this["webpackJsonpmovie-database"]||[]).push([[0],{118:function(e,t,a){},121:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(31),c=a.n(r),o=a(25),i=l.a.createContext();function s(e){var t=Object(n.useState)(""),a=Object(o.a)(t,2),r=a[0],c=a[1],s=Object(n.useState)([]),u=Object(o.a)(s,2),m=u[0],f=u[1];return l.a.createElement(i.Provider,{value:{setSearch:c,setSearchResults:f,search:r,searchResults:m,ImageUrl:"https://image.tmdb.org/t/p/w400",APIKEY:"6ee25636d25df9899ed46e80a13383ff"}},e.children)}var u=a(35),m=a.n(u);var f=function(){var e=Object(n.useContext)(i),t=e.setSearch,a=e.setSearchResults,r=e.search,c=e.searchResults,o=e.APIKEY,s=Object(n.useRef)(null);return Object(n.useEffect)((function(){if(r.length>0)try{m.a.get("https://api.themoviedb.org/3/search/movie?api_key=".concat(o,"&query=").concat(r)).then((function(e){a(e.data.results)}))}catch(e){console.log(e)}}),[r,a,o]),console.log(c),l.a.createElement("div",{className:"search-bar"},l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(s.current.value)}},l.a.createElement("input",{type:"text",ref:s}),l.a.createElement("button",null,"Search Movies")))},E=a(4),p=a(125);var h=function(e){var t=e.imageSrc,a=e.title,n=e.onClick;return l.a.createElement(E.a,{onClick:function(){return n()},bg:"black",w:"170px",m:4,color:"white",fontSize:"8px"},l.a.createElement(p.a,{src:t,w:"170px",h:"220px",objectFit:"cover"}),l.a.createElement("h1",null,a))},v=a(126),d=(a(5),a(129)),b=a(130);var g=function(e){var t=Object(n.useContext)(i).APIKEY,a=e.isOpen,r=e.onClose,c=e.id,s=Object(n.useState)(null),u=Object(o.a)(s,2),f=u[0],E=u[1];return Object(n.useEffect)((function(){if(null!==c)try{m.a.get("https://api.themoviedb.org/3/movie/".concat(c,"?api_key=").concat(t)).then((function(e){E(e.data)}))}catch(e){console.log(e)}}),[c,t]),l.a.createElement(l.a.Fragment,null,l.a.createElement(d.a,{preserveScrollBarGap:!0,isOpen:a,onClose:r},l.a.createElement(d.g,null),null!==f&&l.a.createElement(d.d,null,l.a.createElement(d.f,null,f.title),l.a.createElement(d.c,null),l.a.createElement(d.b,null,f.overview),l.a.createElement(d.e,null,l.a.createElement(b.a,{variantColor:"blue",mr:3,onClick:r},"Close"),l.a.createElement(b.a,{variant:"ghost"},"Secondary Action")))))};var O=function(){var e=Object(n.useContext)(i),t=e.searchResults,a=e.ImageUrl,r=Object(n.useState)(null),c=Object(o.a)(r,2),s=c[0],u=c[1],m=Object(v.a)(),f=m.isOpen,E=m.onOpen,p=m.onClose,d=t.map((function(e){return l.a.createElement(h,{key:e.id,title:e.original_title,imageSrc:a+e.poster_path,onClick:function(){return t=e.id,u(t),void E();var t}})}));return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container",style:{maxWidth:"1200px",margin:"0 auto",marginTop:"5%",display:"flex",flexWrap:"wrap",justifyContent:"space-evenly"}},d),l.a.createElement(g,{isOpen:f,onClose:p,id:s}))},x=a(42),j=a(131),y=a(127),C=a(132),S=a(128),k=function(){return l.a.createElement(x.a,null,l.a.createElement(E.a,{className:"nav-bar",bg:"#333",w:"100%",px:5,py:2},l.a.createElement(j.a,{isInline:!0,justifyContent:"space-between"},l.a.createElement(j.a,{isInline:!0},l.a.createElement(p.a,{src:"https://cdn1.iconfinder.com/data/icons/media-colorful-1/48/film_roll-512.png",size:30}),l.a.createElement(y.a,{as:"h3",size:"lg",color:"#49c3fd"},"Daily Flix")),l.a.createElement(j.a,{isInline:!0},l.a.createElement(f,null),l.a.createElement(C.a,{size:"sm",ml:2}))),l.a.createElement(E.a,{float:"right",mr:10},l.a.createElement(S.a,{px:2,color:"#fff",className:"link"},"My Favorites"),l.a.createElement(S.a,{px:2,color:"#fff",className:"link"},"Watched"),l.a.createElement(S.a,{px:2,color:"#fff",className:"link"},"Watch List"))))};var w=function(){return l.a.createElement("div",{style:{backgroundColor:"#150e06",height:"100vh",width:"100vw",overflow:"scroll"}},l.a.createElement(k,null),l.a.createElement(O,null))},I=a(7),N=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(I.c,null,l.a.createElement(I.a,{path:"/"},l.a.createElement(w,null))))},R=a(45),A=(a(118),a(133));c.a.render(l.a.createElement(s,null,l.a.createElement(R.a,null,l.a.createElement(x.a,null,l.a.createElement(A.a,null),l.a.createElement(N,null)))),document.querySelector("#root"))},72:function(e,t,a){e.exports=a(121)}},[[72,1,2]]]);
//# sourceMappingURL=main.8ce38a64.chunk.js.map