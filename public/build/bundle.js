var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function a(t){return"function"==typeof t}function r(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(t,e){t.appendChild(e)}function l(t,e,n){t.insertBefore(e,n||null)}function c(t){t.parentNode&&t.parentNode.removeChild(t)}function s(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function d(t){return document.createElement(t)}function u(t){return document.createTextNode(t)}function p(){return u(" ")}function f(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function g(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function h(t,e,n,o){null===n?t.style.removeProperty(e):t.style.setProperty(e,n,o?"important":"")}let m;function b(t){m=t}function $(t){(function(){if(!m)throw new Error("Function called outside component initialization");return m})().$$.on_mount.push(t)}const x=[],y=[],w=[],v=[],_=Promise.resolve();let k=!1;function C(t){w.push(t)}const z=new Set;let j=0;function M(){if(0!==j)return;const t=m;do{try{for(;j<x.length;){const t=x[j];j++,b(t),B(t.$$)}}catch(t){throw x.length=0,j=0,t}for(b(null),x.length=0,j=0;y.length;)y.pop()();for(let t=0;t<w.length;t+=1){const e=w[t];z.has(e)||(z.add(e),e())}w.length=0}while(x.length);for(;v.length;)v.pop()();k=!1,z.clear(),b(t)}function B(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(C)}}const D=new Set;let L;function T(t,e){t&&t.i&&(D.delete(t),t.i(e))}function E(t,e,n,o){if(t&&t.o){if(D.has(t))return;D.add(t),L.c.push((()=>{D.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}else o&&o()}function I(t,n,r,i){const{fragment:l,after_update:c}=t.$$;l&&l.m(n,r),i||C((()=>{const n=t.$$.on_mount.map(e).filter(a);t.$$.on_destroy?t.$$.on_destroy.push(...n):o(n),t.$$.on_mount=[]})),c.forEach(C)}function A(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function H(t,e){-1===t.$$.dirty[0]&&(x.push(t),k||(k=!0,_.then(M)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function N(e,a,r,i,l,s,d,u=[-1]){const p=m;b(e);const f=e.$$={fragment:null,ctx:[],props:s,update:t,not_equal:l,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(a.context||(p?p.$$.context:[])),callbacks:n(),dirty:u,skip_bound:!1,root:a.target||p.$$.root};d&&d(f.root);let g=!1;if(f.ctx=r?r(e,a.props||{},((t,n,...o)=>{const a=o.length?o[0]:n;return f.ctx&&l(f.ctx[t],f.ctx[t]=a)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](a),g&&H(e,t)),n})):[],f.update(),g=!0,o(f.before_update),f.fragment=!!i&&i(f.ctx),a.target){if(a.hydrate){const t=function(t){return Array.from(t.childNodes)}(a.target);f.fragment&&f.fragment.l(t),t.forEach(c)}else f.fragment&&f.fragment.c();a.intro&&T(e.$$.fragment),I(e,a.target,a.anchor,a.customElement),M()}b(p)}class S{$destroy(){A(this,1),this.$destroy=t}$on(e,n){if(!a(n))return t;const o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(n),()=>{const t=o.indexOf(n);-1!==t&&o.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function P(e){let n,o,a,r,s,m,b,$,x,y,w,v,_,k,C,z,j,M,B,D,L,T,E=new Date(e[3]).getDate()+"",I=new Date(e[3]).getUTCMonth()+1+"",A=new Date(e[3]).getFullYear()+"",H=(e[4]?e[4]:"No Description created!")+"",N=(e[2]?e[2]:"Svelte")+"";return{c(){n=d("div"),o=d("p"),a=u(e[0]),r=p(),s=d("a"),m=d("i"),b=d("br"),$=p(),x=d("span"),y=d("i"),w=p(),v=u(E),_=u("/"),k=u(I),C=u("/"),z=u(A),j=p(),M=d("p"),B=u(H),D=p(),L=d("span"),T=u(N),f(m,"class","fas fa-external-link-alt"),f(s,"href",e[1]),f(s,"style",";float:right"),f(y,"class","fas fa-calendar-alt"),h(x,"font-size","14px"),h(x,"color","white"),h(o,"font-size","20px"),h(o,"font-weight","bold"),f(o,"class","name svelte-1cuhcyi"),h(M,"max-height","50px"),h(M,"word-break","break-all"),h(M,"font-weight","500"),h(M,"font-size","15px"),f(n,"class","card-project up svelte-1cuhcyi"),f(n,"style",";border-radius:3px;padding:10px;display:inline-block;width:350px;margin-top:20px;margin-right:20px")},m(t,e){l(t,n,e),i(n,o),i(o,a),i(o,r),i(o,s),i(s,m),i(o,b),i(o,$),i(o,x),i(x,y),i(x,w),i(x,v),i(x,_),i(x,k),i(x,C),i(x,z),i(n,j),i(n,M),i(M,B),i(n,D),i(n,L),i(L,T)},p(t,[e]){1&e&&g(a,t[0]),2&e&&f(s,"href",t[1]),8&e&&E!==(E=new Date(t[3]).getDate()+"")&&g(v,E),8&e&&I!==(I=new Date(t[3]).getUTCMonth()+1+"")&&g(k,I),8&e&&A!==(A=new Date(t[3]).getFullYear()+"")&&g(z,A),16&e&&H!==(H=(t[4]?t[4]:"No Description created!")+"")&&g(B,H),4&e&&N!==(N=(t[2]?t[2]:"Svelte")+"")&&g(T,N)},i:t,o:t,d(t){t&&c(n)}}}function O(t,e,n){let{name:o}=e,{url:a}=e,{language:r}=e,{date:i}=e,{description:l}=e;return t.$$set=t=>{"name"in t&&n(0,o=t.name),"url"in t&&n(1,a=t.url),"language"in t&&n(2,r=t.language),"date"in t&&n(3,i=t.date),"description"in t&&n(4,l=t.description)},[o,a,r,i,l]}class U extends S{constructor(t){super(),N(this,t,O,P,r,{name:0,url:1,language:2,date:3,description:4})}}function F(t,e,n){const o=t.slice();return o[3]=e[n],o}function Y(t,e,n){const o=t.slice();return o[6]=e[n],o}function q(e){let n;return{c(){n=d("span"),n.textContent="Loading..."},m(t,e){l(t,n,e)},p:t,d(t){t&&c(n)}}}function G(t){let e,n,o,a,r="c++"===t[6]&&K();return{c(){r&&r.c(),e=p(),n=d("i"),f(n,"data-toggle","tooltip"),f(n,"data-placement","right"),f(n,"title",o=t[6]),h(n,"margin","5px"),h(n,"font-size","25px"),f(n,"class",a="devicon-"+t[6]+"-plain colored svelte-1gdabp4")},m(t,o){r&&r.m(t,o),l(t,e,o),l(t,n,o)},p(t,i){"c++"===t[6]?r||(r=K(),r.c(),r.m(e.parentNode,e)):r&&(r.d(1),r=null),2&i&&o!==(o=t[6])&&f(n,"title",o),2&i&&a!==(a="devicon-"+t[6]+"-plain colored svelte-1gdabp4")&&f(n,"class",a)},d(t){r&&r.d(t),t&&c(e),t&&c(n)}}}function J(e){let n;return{c(){n=d("span"),n.textContent="EJS",f(n,"data-toggle","tooltip"),f(n,"data-placement","right"),f(n,"title","ejs"),h(n,"color","#f3db4c"),h(n,"font-size","25px"),h(n,"font-weight","bold")},m(t,e){l(t,n,e)},p:t,d(t){t&&c(n)}}}function K(t){let e;return{c(){e=d("span"),e.innerHTML='<i class="devicon-cplusplus-plain-wordmark"></i>',f(e,"data-toggle","tooltip"),f(e,"data-placement","right"),f(e,"title","c++"),h(e,"color","#348feb"),h(e,"font-size","25px"),h(e,"font-weight","bold")},m(t,n){l(t,e,n)},d(t){t&&c(e)}}}function Q(t){let e;function n(t,e){return"ejs"===t[6]?J:G}let o=n(t),a=o(t);return{c(){a.c(),e=u("")},m(t,n){a.m(t,n),l(t,e,n)},p(t,r){o===(o=n(t))&&a?a.p(t,r):(a.d(1),a=o(t),a&&(a.c(),a.m(e.parentNode,e)))},d(t){a.d(t),t&&c(e)}}}function R(e){let n;return{c(){n=d("span"),n.textContent="Loading..."},m(t,e){l(t,n,e)},p:t,d(t){t&&c(n)}}}function V(t){let e,n;return e=new U({props:{description:t[3].description,name:t[3].name,url:t[3].html_url,language:t[3].language,date:t[3].created_at}}),{c(){var t;(t=e.$$.fragment)&&t.c()},m(t,o){I(e,t,o),n=!0},p(t,n){const o={};1&n&&(o.description=t[3].description),1&n&&(o.name=t[3].name),1&n&&(o.url=t[3].html_url),1&n&&(o.language=t[3].language),1&n&&(o.date=t[3].created_at),e.$set(o)},i(t){n||(T(e.$$.fragment,t),n=!0)},o(t){E(e.$$.fragment,t),n=!1},d(t){A(e,t)}}}function W(t){let e,n,a,r,g,m,b,$,x,y,w,v,_,k,C,z,j,M,B,D,I,A,H,N,S,P=t[1],O=[];for(let e=0;e<P.length;e+=1)O[e]=Q(Y(t,P,e));let U=null;P.length||(U=q());let G=t[0],J=[];for(let e=0;e<G.length;e+=1)J[e]=V(F(t,G,e));const K=t=>E(J[t],1,1,(()=>{J[t]=null}));let W=null;return G.length||(W=R()),{c(){e=d("main"),n=d("div"),a=d("div"),a.innerHTML='<div data-aos="fade-in" class="col-md-9"><h2 style="font-weight:bold;font-size:75px;"><p style="padding:6px;background-color:#358580;width:170px;border-radius:3px;font-size:20px;margin-bottom:-2px">Hi, There 👋 I&#39;m </p>Bruno Bianchi.</h2> \n\t\t\t\t<p style="font-weight:bold;font-size:50px;line-height:45px;color:#7f91ba">I Code Awesome Stuff for Internet.</p> \n\t\t\t\t<p style="font-weight:500;font-size:20px">I am a Computer Engineering Student at Poli-PUCCAMP. Currently, I&#39;m focused on learning new languages and starting new projects on my own.</p></div> \n\t\t\t<div class="col-md-3"></div> \n\t\t\t<div class="scroll svelte-1gdabp4"></div>',r=p(),g=d("div"),m=d("div"),b=d("h2"),b.textContent="About Me",$=p(),x=d("p"),x.innerHTML="Hello! My Name is Bruno Bianchi and I love creating projects from my creativity.<br/>My interest in programming languages started back in 2014 when I code a minecraft server, since then my mind changed and I start learning javascript. Today I am focused in my University and Learning deeper other Langagues, such Pyhton, C ...",y=p(),w=d("span"),v=u("Here are a few technologies I’ve been working with recently:"),_=d("br"),k=p();for(let t=0;t<O.length;t+=1)O[t].c();U&&U.c(),C=p(),z=d("span"),z.innerHTML='<i style=";font-size:25px" class="devicon-nodejs-plain colored"></i>',j=p(),M=d("div"),M.innerHTML='<img src="https://avatars.githubusercontent.com/u/81328873?v=4" alt="Github" width="200px;" height="200px;" style="border-radius:5%;"/>',B=p(),D=d("div"),I=d("h2"),I.textContent="Some Of My Projects:",A=p();for(let t=0;t<J.length;t+=1)J[t].c();W&&W.c(),H=p(),N=d("div"),N.innerHTML='<a class="socials up svelte-1gdabp4" href="https://github.com/BrunoBianchi"><i class="fab fa-github"></i></a> \n\t\t\t<a class="socials up svelte-1gdabp4" href="https://www.linkedin.com/in/bruno-bianchi-65a442268/"><i class="fab fa-linkedin"></i></a>',f(a,"class","row"),h(b,"border-bottom","2px solid white"),h(b,"color","#7f91ba"),h(b,"font-weight","bold"),h(x,"margin-top","15px"),f(z,"data-toggle","tooltip"),f(z,"data-placement","right"),f(z,"title","node.js"),f(m,"class","col-md-7"),f(M,"class","col-md-5"),f(g,"data-aos","fade-right"),h(g,"margin-top","90px"),f(g,"class","row"),f(I,"style",";color:#7f91ba;font-weight:bold;padding:10px;"),f(D,"data-aos","fade-right"),h(D,"margin-top","200px"),f(D,"class","projects"),f(N,"id","fixedsocial"),f(N,"class","svelte-1gdabp4"),f(n,"class","container"),f(e,"class","svelte-1gdabp4")},m(t,o){l(t,e,o),i(e,n),i(n,a),i(n,r),i(n,g),i(g,m),i(m,b),i(m,$),i(m,x),i(m,y),i(m,w),i(w,v),i(w,_),i(w,k);for(let t=0;t<O.length;t+=1)O[t].m(w,null);U&&U.m(w,null),i(w,C),i(w,z),i(g,j),i(g,M),i(n,B),i(n,D),i(D,I),i(D,A);for(let t=0;t<J.length;t+=1)J[t].m(D,null);W&&W.m(D,null),i(n,H),i(n,N),S=!0},p(t,[e]){if(2&e){let n;for(P=t[1],n=0;n<P.length;n+=1){const o=Y(t,P,n);O[n]?O[n].p(o,e):(O[n]=Q(o),O[n].c(),O[n].m(w,C))}for(;n<O.length;n+=1)O[n].d(1);O.length=P.length,!P.length&&U?U.p(t,e):P.length?U&&(U.d(1),U=null):(U=q(),U.c(),U.m(w,C))}if(1&e){let n;for(G=t[0],n=0;n<G.length;n+=1){const o=F(t,G,n);J[n]?(J[n].p(o,e),T(J[n],1)):(J[n]=V(o),J[n].c(),T(J[n],1),J[n].m(D,null))}for(L={r:0,c:[],p:L},n=G.length;n<J.length;n+=1)K(n);L.r||o(L.c),L=L.p,!G.length&&W?W.p(t,e):G.length?W&&(W.d(1),W=null):(W=R(),W.c(),W.m(D,null))}},i(t){if(!S){for(let t=0;t<G.length;t+=1)T(J[t]);S=!0}},o(t){J=J.filter(Boolean);for(let t=0;t<J.length;t+=1)E(J[t]);S=!1},d(t){t&&c(e),s(O,t),U&&U.d(),s(J,t),W&&W.d()}}}function X(t,e,n){let o=[],a=[],r=[];return $((async()=>{await fetch("https://api.github.com/users/BrunoBianchi/repos").then((t=>t.json())).then((t=>{n(0,o=t.filter((t=>"BrunoBianchi"!=t.name&&!t.name.includes("-fiver")&&!t.name.includes("-Aprendizado")&&!t.name.includes("-aprendizado"))).sort(((t,e)=>e.stargazers_count-t.stargazers_count||new Date(e.created_at)-new Date(t.created_at)))),t.forEach((t=>{null==t.language||a.includes(t.language.toLowerCase())||a.push(t.language.toLowerCase())}))})),n(1,r=a)})),AOS.init(),[o,r]}return new class extends S{constructor(t){super(),N(this,t,X,W,r,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map