import{S,i as b,s as k,k as p,q as x,a as H,K as y,l as g,m as v,r as q,h as d,c as w,L as A,n as C,b as B,D as o,u as L,B as P}from"../../../../chunks/index-28bd9009.js";function D(n){let a,l,s=n[0].title+"",i,f,r,c=n[0].readingTime+"",h,u,m,_=n[0].html+"";return{c(){a=p("article"),l=p("h1"),i=x(s),f=H(),r=p("p"),h=x(c),u=H(),m=new y(!1),this.h()},l(e){a=g(e,"ARTICLE",{class:!0});var t=v(a);l=g(t,"H1",{});var E=v(l);i=q(E,s),E.forEach(d),f=w(t),r=g(t,"P",{class:!0});var T=v(r);h=q(T,c),T.forEach(d),u=w(t),m=A(t,!1),t.forEach(d),this.h()},h(){C(r,"class","text-sm"),m.a=null,C(a,"class","prose lg:prose-xl mx-auto")},m(e,t){B(e,a,t),o(a,l),o(l,i),o(a,f),o(a,r),o(r,h),o(a,u),m.m(_,a)},p(e,[t]){t&1&&s!==(s=e[0].title+"")&&L(i,s),t&1&&c!==(c=e[0].readingTime+"")&&L(h,c),t&1&&_!==(_=e[0].html+"")&&m.p(_)},i:P,o:P,d(e){e&&d(a)}}}function I(n,a,l){let{data:s}=a;return n.$$set=i=>{"data"in i&&l(0,s=i.data)},[s]}class R extends S{constructor(a){super(),b(this,a,I,D,k,{data:0})}}export{R as default};