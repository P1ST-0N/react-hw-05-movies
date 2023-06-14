"use strict";(self.webpackChunkreact_hw_05_movies=self.webpackChunkreact_hw_05_movies||[]).push([[721],{5361:function(t,e,n){n.d(e,{v:function(){return Z}});var r,a,c,i,o,u=n(7689),s=n(1087),p=n(168),l=n(6444),f=l.ZP.ul(r||(r=(0,p.Z)(["\n  list-style: none;\n  display: flex;\n  grid-template-rows: auto;\n  justify-content: center;\n  flex-wrap: wrap;\n  /* border: 2px solid #f99e8e; */\n  gap: 30px;\n  padding: 0;\n"]))),d=l.ZP.img(a||(a=(0,p.Z)(["\n  width: 270px;\n  height: 350px;\n"]))),h=l.ZP.li(c||(c=(0,p.Z)(["\n  width: 270px;\n  margin: 10px;\n\n  text-decoration: none;\n  border: 2px solid #f99e8e;\n  border-radius: 2%;\n"]))),v=l.ZP.h2(i||(i=(0,p.Z)(["\n  text-align: center;\n  text-decoration: none;\n  color: black;\n  font-style: italic;\n"]))),x=l.ZP.p(o||(o=(0,p.Z)(["\n  margin: 3px;\n  font-style: italic;\n\n  /* text-align: center; */\n  padding-left: 10px;\n  margin-bottom: 10px;\n\n  color: black;\n"]))),g=n(184),Z=function(t){var e=t.films,n=(0,u.TH)();return(0,g.jsx)(f,{children:e&&e.map((function(t){return(0,g.jsx)(h,{children:(0,g.jsxs)(s.rU,{to:"/movies/".concat(t.id),state:{from:n},style:{textDecoration:"none"},children:[t.poster_path?(0,g.jsx)(d,{src:"https://image.tmdb.org/t/p/w500".concat(t.poster_path),alt:t.title}):(0,g.jsx)(d,{src:"https://i.gifer.com/C7Gr.gif",alt:"error"}),(0,g.jsx)(v,{children:t.title}),(0,g.jsxs)(x,{children:[" Rating: ",t.vote_average]}),(0,g.jsxs)(x,{children:["Popular: ",t.popularity,"%"]}),(0,g.jsxs)(x,{children:[" Relase year: ",t.release_date]})]})},t.id)}))})}},4721:function(t,e,n){n.r(e),n.d(e,{default:function(){return Z}});var r,a,c,i=n(4165),o=n(8683),u=n(5861),s=n(9439),p=n(2791),l=n(168),f=n(6444),d=(f.ZP.h1(r||(r=(0,l.Z)(["\n  padding-top: 20px;\n  padding-bottom: 20px;\n"]))),f.ZP.ul(a||(a=(0,l.Z)(["\n  list-style-type: none;\n      margin-bottom: 10px;\n    font-size: 20px;\n    margin: 0;\n    padding: 0;\n"])))),h=(f.ZP.li(c||(c=(0,l.Z)(["\nposition:relative;\ndisplay: flex;\npadding:5px 10px"]))),n(8407)),v="home_title__A3qkN",x=n(5361),g=n(184),Z=function(){var t=(0,p.useState)(null),e=(0,s.Z)(t,2),n=e[0],r=e[1],a=(0,p.useState)(!0),c=(0,s.Z)(a,2),l=c[0],f=c[1];return(0,p.useEffect)((function(){var t=function(){var t=(0,u.Z)((0,i.Z)().mark((function t(){var e;return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,f(!0),t.next=4,(0,h.Df)();case 4:e=(e=t.sent).map((function(t){return(0,o.Z)((0,o.Z)({},t),{},{vote_average:t.vote_average.toFixed(1),popularity:t.popularity.toString().substring(0,2)})})),r(e),f(!1),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(){return t.apply(this,arguments)}}();t()}),[]),(0,g.jsx)(g.Fragment,{children:(0,g.jsxs)(d,{children:[(0,g.jsx)("h1",{className:v,children:"Trending today"}),l?"loading...":(0,g.jsx)(x.v,{films:n})]})})}},8407:function(t,e,n){n.d(e,{Df:function(){return i},Io:function(){return p},M1:function(){return f},TP:function(){return u},qF:function(){return x},tx:function(){return h}});var r=n(4165),a=n(5861),c=n(1243).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"31449444226ba6345698313fe055564a",language:"en-US"}});function i(){return o.apply(this,arguments)}function o(){return(o=(0,a.Z)((0,r.Z)().mark((function t(){var e,n;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"/trending/movie/week",t.prev=1,t.next=4,c.get("/trending/movie/week");case 4:return e=t.sent,n=e.data,t.abrupt("return",n.results);case 9:throw t.prev=9,t.t0=t.catch(1),t.t0;case 12:case"end":return t.stop()}}),t,null,[[1,9]])})))).apply(this,arguments)}function u(t){return s.apply(this,arguments)}function s(){return(s=(0,a.Z)((0,r.Z)().mark((function t(e){var n,a,i;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="/movie/".concat(e),t.prev=1,t.next=4,c.get(n);case 4:return a=t.sent,i=a.data,t.abrupt("return",i);case 9:throw t.prev=9,t.t0=t.catch(1),t.t0;case 12:case"end":return t.stop()}}),t,null,[[1,9]])})))).apply(this,arguments)}function p(t){return l.apply(this,arguments)}function l(){return(l=(0,a.Z)((0,r.Z)().mark((function t(e){var n,a,i;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="/person/".concat(e),t.prev=1,t.next=4,c.get(n);case 4:return a=t.sent,i=a.data,t.abrupt("return",i);case 9:throw t.prev=9,t.t0=t.catch(1),t.t0;case 12:case"end":return t.stop()}}),t,null,[[1,9]])})))).apply(this,arguments)}function f(t){return d.apply(this,arguments)}function d(){return(d=(0,a.Z)((0,r.Z)().mark((function t(e){var n,a,i;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="/movie/".concat(e,"/credits"),t.prev=1,t.next=4,c.get(n);case 4:return a=t.sent,i=a.data,t.abrupt("return",i);case 9:throw t.prev=9,t.t0=t.catch(1),t.t0;case 12:case"end":return t.stop()}}),t,null,[[1,9]])})))).apply(this,arguments)}function h(t){return v.apply(this,arguments)}function v(){return(v=(0,a.Z)((0,r.Z)().mark((function t(e){var n,a,i;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="/movie/".concat(e,"/reviews"),t.prev=1,t.next=4,c.get(n);case 4:return a=t.sent,i=a.data,t.abrupt("return",i);case 9:throw t.prev=9,t.t0=t.catch(1),t.t0;case 12:case"end":return t.stop()}}),t,null,[[1,9]])})))).apply(this,arguments)}function x(t){return g.apply(this,arguments)}function g(){return(g=(0,a.Z)((0,r.Z)().mark((function t(e){var n,a,i;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="/search/movie?query=".concat(e),t.prev=1,t.next=4,c.get(n);case 4:return a=t.sent,i=a.data,t.abrupt("return",i);case 9:throw t.prev=9,t.t0=t.catch(1),t.t0;case 12:case"end":return t.stop()}}),t,null,[[1,9]])})))).apply(this,arguments)}},8683:function(t,e,n){n.d(e,{Z:function(){return i}});var r=n(9142);function a(t,e,n){return(e=(0,r.Z)(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}}}]);
//# sourceMappingURL=721.a4ea2ef4.chunk.js.map