(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[37099],{97656:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var n=r(67597),o=r(20362),i=o.jU?n.useLayoutEffect:n.useEffect,u={x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0};var a=o.jU&&"undefined"!==typeof window.ResizeObserver?function(){var e=(0,n.useState)(null),t=e[0],r=e[1],o=(0,n.useState)(u),a=o[0],c=o[1],s=(0,n.useMemo)((function(){return new window.ResizeObserver((function(e){if(e[0]){var t=e[0].contentRect,r=t.x,n=t.y,o=t.width,i=t.height,u=t.top,a=t.left,s=t.bottom,l=t.right;c({x:r,y:n,width:o,height:i,top:u,left:a,bottom:s,right:l})}}))}),[]);return i((function(){if(t)return s.observe(t),function(){s.disconnect()}}),[t]),[r,a]}:function(){return[o.ZT,u]}},89411:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSP:function(){return C},default:function(){return F}});var n=r(21879),o=r(37004),i=r(25654),u=r(49977),a=r(49289),c=r(99434),s=r(17075),l=r(57410),p=r(99460),f=r(59050),d=r(24043),b=r(95458),g=r(2844),m=r(61254),h=r(22450),O=r(87957),v=r(71365),y=r(67597),j=r(1477),P=r(729),Z=r.n(P),w=r(57611);function _(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function x(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?_(Object(r),!0).forEach((function(t){(0,g.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function S(e){var t=(0,u.Z)("popular-searches"),r=t.t,n=(0,y.useState)(!1),i=n[0],a=n[1],c=e.trending,s=c.id,f=c.attributes,d=f.image_url,b=f.term,g=function(e){var t=e.query,r=e.enabled,n=(0,v.useQuery)((0,o.yI)({query:t,page:1,per_page:0}),{enabled:r});return n.isSuccess?x(x({},n.data.meta),{},{query:t}):null}({query:b,enabled:i});return(0,w.jsxs)(h.Z,{href:function(e){return(0,m.yC)({i18n:e,query:b,mode:"photos"})},trackAction:"popular-searches",trackLabel:"popular-search-".concat(s),className:Z().card,onMouseEnter:function(){return a(!0)},children:[(0,w.jsx)("div",{className:Z().image,children:(0,w.jsx)(O.Z,{url:d,w:230,h:230,fit:"crop",crop:"focalpoint"})}),(0,w.jsxs)(p.Z,{className:Z().textSection,children:[(0,w.jsx)(l.Z,{size:"h$33",color:"white$FFFFFF",capitalize:!0,children:b}),g&&g.total_results&&(0,w.jsxs)(l.Z,{size:"h$18",color:"white$FFFFFF",weight:"book",className:Z().mediaCount,children:[r("media.photo.other",{text:(0,j.Z)(g.total_results.photos,t)})," ","."," ",r("media.video.other",{text:(0,j.Z)(g.total_results.videos,t)})]})]})]},s)}var D=s.XX,E=function(){return(0,o.aK)(20)},N=function(e){var t=e.datum;return{aspectRatio:1,itemKeyId:t.id,component:(0,w.jsx)(S,{trending:t})}},k={mobile:1,tablet:3,desktop:4,oversized:5},C=!0;function F(e){var t=e.initialData,r=e.translatedSlugs,o=(0,u.Z)("popular-searches").t,s=(0,b.ZP)("popular-searches",E,t);return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(n.Z,{title:o("header.title"),description:o("header.subtitle"),translatedSlugs:r,metaRoute:D.metaAdapter}),(0,w.jsx)(a.Z,{}),(0,w.jsxs)(f.Z,{children:[(0,w.jsx)(i.Z,{marginTop:30}),(0,w.jsxs)(p.Z,{marginTop:50,marginBottom:30,children:[(0,w.jsx)(l.Z,{size:"h$33",center:!0,children:o("header.title")}),(0,w.jsx)(l.Z,{size:"h$18",color:"greyPlus1$4A4A4A",weight:"book",marginTop:8,center:!0,children:o("header.subtitle")})]}),(0,w.jsx)(d.Z,{columnGap:30,pagination:s,renderItem:N,marginBottom:50,columnSizing:k})]}),(0,w.jsx)(c.Z,{})]})}},4768:function(e,t,r){"use strict";r.d(t,{C0:function(){return s},I9:function(){return u},Nb:function(){return i},_g:function(){return c},cg:function(){return a},dT:function(){return l},ju:function(){return o}});var n=r(18338),o=(0,n.ZP)({pathname:"/communities/[slug]/",buildPathname:function(e){var t=e.pathname,r=e.props.slug;return t.replace("[slug]",r)}}),i=(0,n.ZP)({pathname:"/communities/[slug]/events/",buildPathname:function(e){var t=e.pathname,r=e.props.slug;return t.replace("[slug]",r)}}),u=(0,n.ZP)({pathname:"/communities/[slug]/leaderboard/",buildPathname:function(e){var t=e.pathname,r=e.props.slug;return t.replace("[slug]",r)}}),a=(0,n.ZP)({pathname:"/communities/[slug]/discussion-board/",buildPathname:function(e){var t=e.pathname,r=e.props.slug;return t.replace("[slug]",r)}}),c=(0,n.ZP)({pathname:"/communities/[communitySlug]/discussion-board/[discussionId]/",buildPathname:function(e){var t=e.pathname,r=e.props,n=r.communitySlug,o=r.discussionId;return t.replace("[communitySlug]",n).replace("[discussionId]",o)}}),s=(0,n.ZP)({pathname:"/communities/[slug]/members/",buildPathname:function(e){var t=e.pathname,r=e.props.slug;return t.replace("[slug]",r)}}),l=(0,n.ZP)({pathname:"/communities/[slug]/recent-uploads/",buildPathname:function(e){var t=e.pathname,r=e.props.slug;return t.replace("[slug]",r)}})},75290:function(e,t,r){"use strict";function n(e){return e.page?Number.isNaN(parseInt(e.page,10))?null:parseInt(e.page,10):null}r.d(t,{A:function(){return n}})},95458:function(e,t,r){"use strict";r.d(t,{ZP:function(){return P}});var n=r(2844),o=r(14730),i=(r(34587),r(18400)),u=r(71365),a=r(15129),c=r(36161),s=r(67597),l=r(37361);function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e){var t=e.options,r=e.initialData,n=(0,s.useRef)(!1),o=(0,l.ZP)().getStateFor;return f(f({},t),{},{onSettled:function(e){if(null!==e&&void 0!==e&&e.pages&&Array.isArray(e.pages)){var t=e.pages[e.pages.length-1];o(t.data)}},getNextPageParam:function(e){var t=e.pagination,r=t.current_page;if(r<t.total_pages)return r+1},getPreviousPageParam:function(e){var t=e.pagination.current_page;if(t>1)return t-1},initialData:function(){if(r&&!n.current)return n.current=!0,{pages:[r],pageParams:[1]}}})}var b=r(75290),g=r(25924),m=r(46130);function h(e){var t={currentPage:1,pageCount:1,totalResults:0,included:void 0};if(!e||!e.pages)return t;var r=e.pages,n=r[r.length-1];return n&&(t.currentPage=n.pagination.current_page,t.pageCount=n.pagination.total_pages,t.totalResults=n.pagination.total_results,t.included=n.included),t}function O(e){return function(t){var r=t.pageParam,n=parseInt(r,10);return(Number.isNaN(n)||n<=0)&&(n=1),(0,i.A3)(e({page:n}))}}var v=["data"];function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function j(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function P(e,t,r){var n,i,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},l=(0,a.useRouter)(),p=l.query,f=(0,b.A)(p),y=(0,g.Z)(e,f),P=y.queryKeyString,Z=y.metaKey,w=d({options:s,initialData:r}),_=(0,u.useInfiniteQuery)(s.queryKeyPrefix?[s.queryKeyPrefix,P]:P,O(t),w),x=_.data,S=(0,o.Z)(_,v),D=(0,c.Z)(Z,null===x||void 0===x||null===(n=x.pages)||void 0===n||null===(i=n[0])||void 0===i?void 0:i.meta),E=h(x),N=E.currentPage,k=E.pageCount,C=E.totalResults,F=E.included;return j(j({},S),{},{meta:D,data:(0,m.Z)(x),pageCount:k,totalResults:C,included:F,page:f||N})}},25654:function(e,t,r){"use strict";r.d(t,{Z:function(){return m}});var n=r(2844),o=r(14730),i=r(49977),u=r(16482),a=r(17075),c=r(67396),s=r(21010),l=r(38895),p=r(4768),f=r(57611),d=["canAccessPhotographerExperience","isLeaderboardPage"];function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e){var t=e.canAccessPhotographerExperience,r=e.isLeaderboardPage,n=void 0!==r&&r,b=(0,o.Z)(e,d),m=(0,i.Z)().t,h=(0,l.ZP)().communities;return(0,f.jsxs)(c.Z,g(g({center:"horizontal"},b),{},{children:[(0,f.jsx)(s.Z,{href:function(e){return(0,u.s)({i18n:e})},children:m("common:subnav.home")}),t&&(0,f.jsx)(s.Z,{href:function(e){return(0,a.Q0)({i18n:e})},children:m("common:subnav.feed")}),null===h||void 0===h?void 0:h.map((function(e){var t=e.attributes,r=t.name,n=t.slug;return(0,f.jsx)(s.Z,{href:function(e){return(0,p.ju)({i18n:e,slug:n})},children:1===h.length?m("common:community"):r},n)})),(0,f.jsx)(s.Z,{href:function(e){return(0,a.Xh)({i18n:e})},children:m("common:subnav.videos")}),(0,f.jsx)(s.Z,{href:function(e){return(0,a.Eb)({i18n:e})},active:n,children:m("common:subnav.leaderboard")}),(0,f.jsx)(s.Z,{href:function(e){return(0,a.b5)({i18n:e})},children:m("common:subnav.challenges")})]}))}},21010:function(e,t,r){"use strict";r.d(t,{Z:function(){return y}});var n=r(2844),o=r(14730),i=r(22450),u=r(67597),a=r(9134),c=r.n(a),s=r(49977),l=r(12074),p=r(12818),f=r(15129),d=r(17177),b=r(30720),g=r.n(b),m=r(57611),h=["active","number"];function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?O(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function y(e){var t=e.active,r=(0,s.Z)(),a=(0,f.useRouter)(),b=(0,p.dw)(e).href,O=t||(0,p.OO)({href:b,router:a}),y=(0,u.useRef)(null);function j(){if(y.current){var e=y.current.parentNode,t=y.current.offsetLeft-e.offsetWidth/2+y.current.offsetWidth/2;e.scrollLeft=t}}return(0,u.useEffect)((function(){O&&null!==y&&void 0!==y&&y.current&&(document.fonts?document.fonts.ready.then((function(){j()})):setTimeout((function(){j()}),500))}),[y,O]),(0,m.jsxs)(i.Z,v(v({},function(e){e.active,e.number;var t=(0,o.Z)(e,h);return(0,d.K)(t)}(e)),{},{className:c()(g().tab,(0,d.Z)(e),(0,n.Z)({},g().active,O)),activeClassName:g().active,ref:y,hoverAnimation:!1,children:[e.children,void 0!==e.number&&(0,m.jsx)("span",{className:g().number,children:null!==e.number?(0,l.Z)(e.number,r):"--"})]}))}},67396:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var n=r(2844),o=r(14730),i=r(21874),u=r(57611),a=["children"];function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e){var t=e.children,r=(0,o.Z)(e,a);return(0,u.jsx)(i.Z,s(s({},r),{},{spaceBetween:0,responsive:"overflow",children:t}))}},24980:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/popular-searches",function(){return r(89411)}])},729:function(e){e.exports={card:"Card_card__xfQfF",mediaCount:"Card_mediaCount__Y9Vfd",image:"Card_image__3oDrU",textSection:"Card_textSection__7T41q"}},30720:function(e){e.exports={tab:"Tab_tab__LykKB",number:"Tab_number__k5SYC",active:"Tab_active__8PGWR",hover:"Tab_hover__lnxXM"}}},function(e){e.O(0,[6716,79507,49774,92888,40179],(function(){return t=24980,e(e.s=t);var t}));var t=e.O();_N_E=t}]);