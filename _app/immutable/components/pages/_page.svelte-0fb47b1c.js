import{S as B,i as C,s as H,k as b,a as g,q as P,I as J,l as v,h as r,c as E,m as k,r as T,n as m,G as x,b as _,B as A,J as M,u as U}from"../../chunks/index-05ffab7a.js";function I(h,t,n){const a=h.slice();return a[1]=t[n],a}function L(h){let t,n=h[1].title+"",a,f;return{c(){t=b("li"),a=P(n),f=g()},l(o){t=v(o,"LI",{});var s=k(t);a=T(s,n),f=E(s),s.forEach(r)},m(o,s){_(o,t,s),x(t,a),x(t,f)},p(o,s){s&1&&n!==(n=o[1].title+"")&&U(a,n)},d(o){o&&r(t)}}}function j(h){let t,n,a,f,o,s,S,y,u,d=h[0].episodes,i=[];for(let e=0;e<d.length;e+=1)i[e]=L(I(h,d,e));return{c(){t=b("meta"),n=g(),a=b("h1"),f=P("The Pipeline Guys"),o=g(),s=b("a"),S=P("Subscribe"),y=g(),u=b("ul");for(let e=0;e<i.length;e+=1)i[e].c();this.h()},l(e){const c=J("svelte-p51fyi",document.head);t=v(c,"META",{property:!0,content:!0}),c.forEach(r),n=E(e),a=v(e,"H1",{class:!0});var l=k(a);f=T(l,"The Pipeline Guys"),l.forEach(r),o=E(e),s=v(e,"A",{href:!0,target:!0});var p=k(s);S=T(p,"Subscribe"),p.forEach(r),y=E(e),u=v(e,"UL",{});var q=k(u);for(let G=0;G<i.length;G+=1)i[G].l(q);q.forEach(r),this.h()},h(){m(t,"property","og:image"),m(t,"content","/cdn/images/podcast.png"),m(a,"class","text-3xl font-bold underline"),m(s,"href","https://thepipelineguys.live/feed.xml"),m(s,"target","_blank")},m(e,c){x(document.head,t),_(e,n,c),_(e,a,c),x(a,f),_(e,o,c),_(e,s,c),x(s,S),_(e,y,c),_(e,u,c);for(let l=0;l<i.length;l+=1)i[l].m(u,null)},p(e,[c]){if(c&1){d=e[0].episodes;let l;for(l=0;l<d.length;l+=1){const p=I(e,d,l);i[l]?i[l].p(p,c):(i[l]=L(p),i[l].c(),i[l].m(u,null))}for(;l<i.length;l+=1)i[l].d(1);i.length=d.length}},i:A,o:A,d(e){r(t),e&&r(n),e&&r(a),e&&r(o),e&&r(s),e&&r(y),e&&r(u),M(i,e)}}}function w(h,t,n){let{data:a}=t;return h.$$set=f=>{"data"in f&&n(0,a=f.data)},[a]}class D extends B{constructor(t){super(),C(this,t,w,j,H,{data:0})}}export{D as default};
