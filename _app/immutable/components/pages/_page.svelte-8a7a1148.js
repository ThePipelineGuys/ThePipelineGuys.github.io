import{S as A,i as S,s as B,k as m,a as y,q as P,e as x,I as C,l as g,h as f,c as b,m as T,r as q,n as p,G as v,b as _,B as E,J as H,u as I}from"../../chunks/index-05ffab7a.js";function k(h,t,n){const l=h.slice();return l[1]=t[n],l}function G(h){let t,n=h[1].title+"",l,c;return{c(){t=m("a"),l=P(n),this.h()},l(o){t=g(o,"A",{href:!0});var i=T(t);l=q(i,n),i.forEach(f),this.h()},h(){p(t,"href",c="/cdn/episodes/"+h[1].enclosure.file)},m(o,i){_(o,t,i),v(t,l)},p(o,i){i&1&&n!==(n=o[1].title+"")&&I(l,n),i&1&&c!==(c="/cdn/episodes/"+o[1].enclosure.file)&&p(t,"href",c)},d(o){o&&f(t)}}}function J(h){let t,n,l,c,o,i,d=h[0].episodes,s=[];for(let e=0;e<d.length;e+=1)s[e]=G(k(h,d,e));return{c(){t=m("meta"),n=y(),l=m("h1"),c=P("The Pipeline Guys"),o=y();for(let e=0;e<s.length;e+=1)s[e].c();i=x(),this.h()},l(e){const r=C("svelte-p51fyi",document.head);t=g(r,"META",{property:!0,content:!0}),r.forEach(f),n=b(e),l=g(e,"H1",{class:!0});var a=T(l);c=q(a,"The Pipeline Guys"),a.forEach(f),o=b(e);for(let u=0;u<s.length;u+=1)s[u].l(e);i=x(),this.h()},h(){p(t,"property","og:image"),p(t,"content","/cdn/images/podcast.png"),p(l,"class","text-3xl font-bold underline")},m(e,r){v(document.head,t),_(e,n,r),_(e,l,r),v(l,c),_(e,o,r);for(let a=0;a<s.length;a+=1)s[a].m(e,r);_(e,i,r)},p(e,[r]){if(r&1){d=e[0].episodes;let a;for(a=0;a<d.length;a+=1){const u=k(e,d,a);s[a]?s[a].p(u,r):(s[a]=G(u),s[a].c(),s[a].m(i.parentNode,i))}for(;a<s.length;a+=1)s[a].d(1);s.length=d.length}},i:E,o:E,d(e){f(t),e&&f(n),e&&f(l),e&&f(o),H(s,e),e&&f(i)}}}function M(h,t,n){let{data:l}=t;return h.$$set=c=>{"data"in c&&n(0,l=c.data)},[l]}class j extends A{constructor(t){super(),S(this,t,M,J,B,{data:0})}}export{j as default};
