"use strict";(self.webpackChunkreact_hw_05_movies=self.webpackChunkreact_hw_05_movies||[]).push([[823],{823:function(n,t,e){e.r(t),e.d(t,{default:function(){return _}});var r,a,c,i,o,u,s,p,l=e(165),f=e(861),h=e(439),d=e(791),v=e(689),x=e(87),m=e(168),Z=e(444),g=(Z.ZP.h1(r||(r=(0,m.Z)(["\n  padding-top: 20px;\n  padding-bottom: 20px;\n"]))),Z.ZP.ul(a||(a=(0,m.Z)(["\n  list-style-type: none;\n      margin-bottom: 10px;\n    font-size: 20px;\n    margin-left: 100px;\n"])))),w=Z.ZP.li(c||(c=(0,m.Z)(["\nposition:relative;\ndisplay: flex;\npadding:5px 10px"]))),y=e(407),b={movieItem:"home_movieItem__AVLB7"},k=(Z.ZP.ul(i||(i=(0,m.Z)(["\n  list-style: none;\n  display: flex;\n  grid-template-rows: auto;\n  justify-content: center;\n  flex-wrap: wrap;\n  /* border: 2px solid #f99e8e; */\n  gap: 30px;\n"]))),Z.ZP.img(o||(o=(0,m.Z)(["\n  width: 270px;\n  height: 350px;\n"]))),Z.ZP.li(u||(u=(0,m.Z)(["\n  width: 270px;\n  margin: 10px;\n\n  text-decoration: none;\n  border: 2px solid #f99e8e;\n  border-radius: 2%;\n"]))),Z.ZP.h2(s||(s=(0,m.Z)(["\n  text-align: center;\n  text-decoration: none;\n  color: black;\n  font-style: italic;\n"]))),Z.ZP.p(p||(p=(0,m.Z)(["\n  margin: 3px;\n  font-style: italic;\n\n  /* text-align: center; */\n  padding-left: 10px;\n  margin-bottom: 10px;\n\n  color: black;\n"]))),e(184)),_=function(){var n=(0,d.useState)(null),t=(0,h.Z)(n,2),e=t[0],r=t[1],a=(0,d.useState)(!0),c=(0,h.Z)(a,2),i=c[0],o=c[1],u=(0,v.TH)();return(0,d.useEffect)((function(){var n=function(){var n=(0,f.Z)((0,l.Z)().mark((function n(){var t;return(0,l.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,o(!0),n.next=4,(0,y.Df)();case 4:t=n.sent,r(t),o(!1),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,k.jsx)(k.Fragment,{children:(0,k.jsxs)(g,{children:[(0,k.jsx)("h2",{className:b.title,children:"Trending movies:"}),i?"Loading...":e.map((function(n){var t=n.title,e=n.id;return(0,k.jsx)(w,{children:(0,k.jsx)(x.rU,{to:"/movies/".concat(e),state:{from:u},className:b.movieItem,children:t})},e)}))]})})}},407:function(n,t,e){e.d(t,{Df:function(){return i},M1:function(){return p},TP:function(){return u},qF:function(){return d},tx:function(){return f}});var r=e(165),a=e(861),c=e(243).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"31449444226ba6345698313fe055564a",language:"en-US"}});function i(){return o.apply(this,arguments)}function o(){return(o=(0,a.Z)((0,r.Z)().mark((function n(){var t,e;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"/trending/movie/week",n.prev=1,n.next=4,c.get("/trending/movie/week");case 4:return t=n.sent,e=t.data,n.abrupt("return",e.results);case 9:throw n.prev=9,n.t0=n.catch(1),n.t0;case 12:case"end":return n.stop()}}),n,null,[[1,9]])})))).apply(this,arguments)}function u(n){return s.apply(this,arguments)}function s(){return(s=(0,a.Z)((0,r.Z)().mark((function n(t){var e,a,i;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="/movie/".concat(t),n.prev=1,n.next=4,c.get(e);case 4:return a=n.sent,i=a.data,n.abrupt("return",i);case 9:throw n.prev=9,n.t0=n.catch(1),n.t0;case 12:case"end":return n.stop()}}),n,null,[[1,9]])})))).apply(this,arguments)}function p(n){return l.apply(this,arguments)}function l(){return(l=(0,a.Z)((0,r.Z)().mark((function n(t){var e,a,i;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="/movie/".concat(t,"/credits"),n.prev=1,n.next=4,c.get(e);case 4:return a=n.sent,i=a.data,n.abrupt("return",i);case 9:throw n.prev=9,n.t0=n.catch(1),n.t0;case 12:case"end":return n.stop()}}),n,null,[[1,9]])})))).apply(this,arguments)}function f(n){return h.apply(this,arguments)}function h(){return(h=(0,a.Z)((0,r.Z)().mark((function n(t){var e,a,i;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="/movie/".concat(t,"/reviews"),n.prev=1,n.next=4,c.get(e);case 4:return a=n.sent,i=a.data,n.abrupt("return",i);case 9:throw n.prev=9,n.t0=n.catch(1),n.t0;case 12:case"end":return n.stop()}}),n,null,[[1,9]])})))).apply(this,arguments)}function d(n){return v.apply(this,arguments)}function v(){return(v=(0,a.Z)((0,r.Z)().mark((function n(t){var e,a,i;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="/search/movie?query=".concat(t),n.prev=1,n.next=4,c.get(e);case 4:return a=n.sent,i=a.data,n.abrupt("return",i);case 9:throw n.prev=9,n.t0=n.catch(1),n.t0;case 12:case"end":return n.stop()}}),n,null,[[1,9]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=823.eaad3d79.chunk.js.map