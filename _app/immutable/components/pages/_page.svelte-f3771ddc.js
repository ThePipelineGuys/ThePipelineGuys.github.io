import{S as H,i as z,s as B,k as w,q as F,a as E,I as R,e as M,l as v,m as b,r as q,h,c as $,J as S,n as c,K as I,b as d,D as P,u as V,B as A,p as W,f as D,d as J,t as k,L as K,w as L,x as j,y as N,z as O,g as Q}from"../../chunks/index-90666c04.js";function U(p){let e,o=p[0].title+"",n,a,l,u,s,y,t,f,i,_,x=p[0].html+"",g;return{c(){e=w("h2"),n=F(o),a=E(),l=w("iframe"),y=E(),t=w("a"),f=F("The Pipeline Guys"),i=E(),_=new R(!1),g=M(),this.h()},l(r){e=v(r,"H2",{class:!0});var m=b(e);n=q(m,o),m.forEach(h),a=$(r),l=v(r,"IFRAME",{title:!0,width:!0,height:!0,frameborder:!0,allow:!0,src:!0}),b(l).forEach(h),y=$(r),t=v(r,"A",{href:!0});var T=b(t);f=q(T,"The Pipeline Guys"),T.forEach(h),i=$(r),_=S(r,!1),g=M(),this.h()},h(){c(e,"class","text-2xl font-bold"),c(l,"title",u=p[0].title),c(l,"width","100%"),c(l,"height","152"),c(l,"frameborder","0"),l.allowFullscreen="",c(l,"allow","autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"),I(l.src,s="https://open.spotify.com/embed/episode/"+p[0].spotifyId+"?utm_source=generator")||c(l,"src",s),c(t,"href","https://open.spotify.com/show/528EvxMPW9pk5DdCT7iyDb"),_.a=g},m(r,m){d(r,e,m),P(e,n),d(r,a,m),d(r,l,m),d(r,y,m),d(r,t,m),P(t,f),d(r,i,m),_.m(x,r,m),d(r,g,m)},p(r,[m]){m&1&&o!==(o=r[0].title+"")&&V(n,o),m&1&&u!==(u=r[0].title)&&c(l,"title",u),m&1&&!I(l.src,s="https://open.spotify.com/embed/episode/"+r[0].spotifyId+"?utm_source=generator")&&c(l,"src",s),m&1&&x!==(x=r[0].html+"")&&_.p(x)},i:A,o:A,d(r){r&&h(e),r&&h(a),r&&h(l),r&&h(y),r&&h(t),r&&h(i),r&&h(g),r&&_.d()}}}function X(p,e,o){let{episode:n}=e;return p.$$set=a=>{"episode"in a&&o(0,n=a.episode)},[n]}class Y extends H{constructor(e){super(),z(this,e,X,U,B,{episode:0})}}function C(p,e,o){const n=p.slice();return n[1]=e[o],n}function G(p){let e,o,n,a;return o=new Y({props:{episode:p[1]}}),{c(){e=w("div"),L(o.$$.fragment),n=E(),this.h()},l(l){e=v(l,"DIV",{class:!0});var u=b(e);j(o.$$.fragment,u),n=$(u),u.forEach(h),this.h()},h(){c(e,"class","grow text-center px-4 pb-12")},m(l,u){d(l,e,u),N(o,e,null),P(e,n),a=!0},p(l,u){const s={};u&1&&(s.episode=l[1]),o.$set(s)},i(l){a||(D(o.$$.fragment,l),a=!0)},o(l){k(o.$$.fragment,l),a=!1},d(l){l&&h(e),O(o)}}}function Z(p){let e,o,n,a,l,u=p[0].episodes,s=[];for(let t=0;t<u.length;t+=1)s[t]=G(C(p,u,t));const y=t=>k(s[t],1,1,()=>{s[t]=null});return{c(){e=w("iframe"),n=E(),a=w("div");for(let t=0;t<s.length;t+=1)s[t].c();this.h()},l(t){e=v(t,"IFRAME",{title:!0,style:!0,src:!0,width:!0,height:!0,frameborder:!0,allow:!0,loading:!0}),b(e).forEach(h),n=$(t),a=v(t,"DIV",{class:!0});var f=b(a);for(let i=0;i<s.length;i+=1)s[i].l(f);f.forEach(h),this.h()},h(){c(e,"title","The Pipeline Guys Podcast"),W(e,"border-radius","12px"),I(e.src,o="https://open.spotify.com/embed/show/528EvxMPW9pk5DdCT7iyDb?utm_source=generator")||c(e,"src",o),c(e,"width","100%"),c(e,"height","352"),c(e,"frameborder","0"),e.allowFullscreen="",c(e,"allow","autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"),c(e,"loading","lazy"),c(a,"class","flex flex-wrap")},m(t,f){d(t,e,f),d(t,n,f),d(t,a,f);for(let i=0;i<s.length;i+=1)s[i].m(a,null);l=!0},p(t,[f]){if(f&1){u=t[0].episodes;let i;for(i=0;i<u.length;i+=1){const _=C(t,u,i);s[i]?(s[i].p(_,f),D(s[i],1)):(s[i]=G(_),s[i].c(),D(s[i],1),s[i].m(a,null))}for(Q(),i=u.length;i<s.length;i+=1)y(i);J()}},i(t){if(!l){for(let f=0;f<u.length;f+=1)D(s[f]);l=!0}},o(t){s=s.filter(Boolean);for(let f=0;f<s.length;f+=1)k(s[f]);l=!1},d(t){t&&h(e),t&&h(n),t&&h(a),K(s,t)}}}function ee(p,e,o){let{data:n}=e;return p.$$set=a=>{"data"in a&&o(0,n=a.data)},[n]}class le extends H{constructor(e){super(),z(this,e,ee,Z,B,{data:0})}}export{le as default};
