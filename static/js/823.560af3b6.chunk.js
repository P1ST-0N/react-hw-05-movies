"use strict";(self.webpackChunkreact_hw_05_movies=self.webpackChunkreact_hw_05_movies||[]).push([[823],{823:function(t,n,e){e.r(n),e.d(n,{default:function(){return D}});var r,a,c,i,s,o,u,p,l=e(165),f=e(861),h=e(439),d=e(791),x=e(168),v=e(444),m=(v.ZP.h1(r||(r=(0,x.Z)(["\n  padding-top: 20px;\n  padding-bottom: 20px;\n"]))),v.ZP.ul(a||(a=(0,x.Z)(["\n  list-style-type: none;\n      margin-bottom: 10px;\n    font-size: 20px;\n    margin-left: 100px;\n"])))),Z=(v.ZP.li(c||(c=(0,x.Z)(["\nposition:relative;\ndisplay: flex;\npadding:5px 10px"]))),e(407)),g="home_title__A3qkN",w=e(689),y=e(87),b=v.ZP.ul(i||(i=(0,x.Z)(["\n  list-style: none;\n  display: flex;\n  grid-template-rows: auto;\n  justify-content: center;\n  flex-wrap: wrap;\n  /* border: 2px solid #f99e8e; */\n  gap: 30px;\n"]))),k=v.ZP.img(s||(s=(0,x.Z)(["\n  width: 270px;\n  height: 350px;\n"]))),j=v.ZP.li(o||(o=(0,x.Z)(["\n  width: 270px;\n  margin: 10px;\n\n  text-decoration: none;\n  border: 2px solid #f99e8e;\n  border-radius: 2%;\n"]))),_=v.ZP.h2(u||(u=(0,x.Z)(["\n  text-align: center;\n  text-decoration: none;\n  color: black;\n  font-style: italic;\n"]))),P=v.ZP.p(p||(p=(0,x.Z)(["\n  margin: 3px;\n  font-style: italic;\n\n  /* text-align: center; */\n  padding-left: 10px;\n  margin-bottom: 10px;\n\n  color: black;\n"]))),q=e(184),C=function(t){var n=t.films,e=(0,w.TH)();return(0,q.jsx)(b,{children:n&&n.map((function(t){return(0,q.jsx)(j,{children:(0,q.jsxs)(y.rU,{to:"/movies/".concat(t.id),state:{from:e},style:{textDecoration:"none"},children:[t.poster_path?(0,q.jsx)(k,{src:"https://image.tmdb.org/t/p/w500".concat(t.poster_path),alt:t.title}):(0,q.jsx)(k,{src:"https://i.gifer.com/C7Gr.gif",alt:"error"}),(0,q.jsx)(_,{children:t.title}),(0,q.jsxs)(P,{children:[" Rating: ",t.vote_average]}),(0,q.jsxs)(P,{children:["Popular: ",t.popularity,"%"]}),(0,q.jsxs)(P,{children:[" Relase year: ",t.release_date]})]})},t.id)}))})},D=function(){var t=(0,d.useState)(null),n=(0,h.Z)(t,2),e=n[0],r=n[1],a=(0,d.useState)(!0),c=(0,h.Z)(a,2),i=c[0],s=c[1];return(0,d.useEffect)((function(){var t=function(){var t=(0,f.Z)((0,l.Z)().mark((function t(){var n;return(0,l.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,s(!0),t.next=4,(0,Z.Df)();case 4:n=t.sent,r(n),s(!1),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(){return t.apply(this,arguments)}}();t()}),[]),(0,q.jsx)(q.Fragment,{children:(0,q.jsxs)(m,{children:[(0,q.jsx)("h1",{className:g,children:"Trending today"}),i?"loading...":(0,q.jsx)(C,{films:e})]})})}},407:function(t,n,e){e.d(n,{Df:function(){return i},M1:function(){return p},TP:function(){return o},qF:function(){return d},tx:function(){return f}});var r=e(165),a=e(861),c=e(243).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"31449444226ba6345698313fe055564a",language:"en-US"}});function i(){return s.apply(this,arguments)}function s(){return(s=(0,a.Z)((0,r.Z)().mark((function t(){var n,e;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"/trending/movie/week",t.prev=1,t.next=4,c.get("/trending/movie/week");case 4:return n=t.sent,e=n.data,t.abrupt("return",e.results);case 9:throw t.prev=9,t.t0=t.catch(1),t.t0;case 12:case"end":return t.stop()}}),t,null,[[1,9]])})))).apply(this,arguments)}function o(t){return u.apply(this,arguments)}function u(){return(u=(0,a.Z)((0,r.Z)().mark((function t(n){var e,a,i;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="/movie/".concat(n),t.prev=1,t.next=4,c.get(e);case 4:return a=t.sent,i=a.data,t.abrupt("return",i);case 9:throw t.prev=9,t.t0=t.catch(1),t.t0;case 12:case"end":return t.stop()}}),t,null,[[1,9]])})))).apply(this,arguments)}function p(t){return l.apply(this,arguments)}function l(){return(l=(0,a.Z)((0,r.Z)().mark((function t(n){var e,a,i;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="/movie/".concat(n,"/credits"),t.prev=1,t.next=4,c.get(e);case 4:return a=t.sent,i=a.data,t.abrupt("return",i);case 9:throw t.prev=9,t.t0=t.catch(1),t.t0;case 12:case"end":return t.stop()}}),t,null,[[1,9]])})))).apply(this,arguments)}function f(t){return h.apply(this,arguments)}function h(){return(h=(0,a.Z)((0,r.Z)().mark((function t(n){var e,a,i;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="/movie/".concat(n,"/reviews"),t.prev=1,t.next=4,c.get(e);case 4:return a=t.sent,i=a.data,t.abrupt("return",i);case 9:throw t.prev=9,t.t0=t.catch(1),t.t0;case 12:case"end":return t.stop()}}),t,null,[[1,9]])})))).apply(this,arguments)}function d(t){return x.apply(this,arguments)}function x(){return(x=(0,a.Z)((0,r.Z)().mark((function t(n){var e,a,i;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="/search/movie?query=".concat(n),t.prev=1,t.next=4,c.get(e);case 4:return a=t.sent,i=a.data,t.abrupt("return",i);case 9:throw t.prev=9,t.t0=t.catch(1),t.t0;case 12:case"end":return t.stop()}}),t,null,[[1,9]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=823.560af3b6.chunk.js.map