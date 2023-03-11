!function(){var e=function(e){var t;return function(i){return t||e(t={exports:{},parent:i},t.exports),t.exports}},t=e((function(e,t){"use strict";var i=o({});e.exports=ke(Array,"Array",(function(e,t){this._t=T(e),this._i=0,this._k=t}),(function(){var e=this._t,t=this._k,i=this._i++;return!e||i>=e.length?(this._t=void 0,M(1)):M(0,"keys"==t?i:"values"==t?e[i]:[i,e[i]])}),"values"),i.Arguments=i.Array,j("keys"),j("values"),j("entries")})),i=e((function(e,t){var i=c({}).document;e.exports=i&&i.documentElement})),n=e((function(e,t){e.exports=Object.keys||function(e){return te(e,ie)}})),r=e((function(e,t){var i=c({}),n=a({}),r=v("src"),o=(""+F).split("toString");d.inspectSource=function(e){return F.call(e)},(e.exports=function(e,t,a,s){var l="function"==typeof a;l&&(z(a,"name")||n(a,"name",t)),e[t]!==a&&(l&&(z(a,r)||n(a,r,e[t]?""+e[t]:o.join(String(t)))),e===i?e[t]=a:s?e[t]?e[t]=a:n(e,t,a):(delete e[t],n(e,t,a)))})(Function.prototype,"toString",(function(){return"function"==typeof this&&this[r]||F.call(this)}))})),o=e((function(e,t){e.exports={}})),a=e((function(e,t){e.exports=_?function(e,t,i){return S.f(e,t,x(1,i))}:function(e,t,i){return e[t]=i,e}})),s=e((function(e,t){var i=c({}).document,n=y(i)&&y(i.createElement);e.exports=function(e){return n?i.createElement(e):{}}})),l=e((function(e,t){var i=p("wks"),n=c({}).Symbol,r="function"==typeof n;(e.exports=function(e){return i[e]||(i[e]=r&&n[e]||(r?n:v)("Symbol."+e))}).store=i})),c=e((function(e,t){var i=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=i)})),d={},u=d={version:"2.6.12"};"number"==typeof __e&&(__e=u);var p={},m=c({}),h=m["__core-js_shared__"]||(m["__core-js_shared__"]={});(p=function(e,t){return h[e]||(h[e]=void 0!==t?t:{})})("versions",[]).push({version:d.version,mode:"global",copyright:"\xa9 2020 Denis Pushkarev (zloirock.ru)"});var f=0,g=Math.random(),v=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++f+g).toString(36))},y=function(e){return"object"==typeof e?null!==e:"function"==typeof e},b=function(e){if(!y(e))throw TypeError(e+" is not an object!");return e},w=function(e){try{return!!e()}catch(t){return!0}},_=!w((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})),k=!_&&!w((function(){return 7!=Object.defineProperty(s({})("div"),"a",{get:function(){return 7}}).a})),S={},L=Object.defineProperty;S.f=_?Object.defineProperty:function(e,t,i){if(b(e),t=function(e,t){if(!y(e))return e;var i,n;if(t&&"function"==typeof(i=e.toString)&&!y(n=i.call(e)))return n;if("function"==typeof(i=e.valueOf)&&!y(n=i.call(e)))return n;if(!t&&"function"==typeof(i=e.toString)&&!y(n=i.call(e)))return n;throw TypeError("Can't convert object to primitive value")}(t,!0),b(i),k)try{return L(e,t,i)}catch(n){}if("get"in i||"set"in i)throw TypeError("Accessors not supported!");return"value"in i&&(e[t]=i.value),e};var x=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},j={},C=l({})("unscopables"),E=Array.prototype;null==E[C]&&a({})(E,C,{}),j=function(e){E[C][e]=!0};var M=function(e,t){return{value:t,done:!!e}},P={}.toString,A=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==function(e){return P.call(e).slice(8,-1)}(e)?e.split(""):Object(e)},O=function(e){if(null==e)throw TypeError("Can't call method on  "+e);return e},T=function(e){return A(O(e))},U={}.hasOwnProperty,z=function(e,t){return U.call(e,t)},F=p("native-function-to-string",Function.toString),q=function(e,t,i){if(function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!")}(e),void 0===t)return e;switch(i){case 1:return function(i){return e.call(t,i)};case 2:return function(i,n){return e.call(t,i,n)};case 3:return function(i,n,r){return e.call(t,i,n,r)}}return function(){return e.apply(t,arguments)}},G={},D=c({}),I=a({}),N=r({}),B=function(e,t,i){var n,r,o,a,s=e&B.F,l=e&B.G,c=e&B.S,u=e&B.P,p=e&B.B,m=l?D:c?D[t]||(D[t]={}):(D[t]||{}).prototype,h=l?d:d[t]||(d[t]={}),f=h.prototype||(h.prototype={});for(n in l&&(i=t),i)o=((r=!s&&m&&void 0!==m[n])?m:i)[n],a=p&&r?q(o,D):u&&"function"==typeof o?q(Function.call,o):o,m&&N(m,n,o,e&B.U),h[n]!=o&&I(h,n,a),u&&f[n]!=o&&(f[n]=o)};D.core=d,B.F=1,B.G=2,B.S=4,B.P=8,B.B=16,B.W=32,B.U=64,B.R=128,G=B;var V,W,H=Math.ceil,R=Math.floor,J=function(e){return isNaN(e=+e)?0:(e>0?R:H)(e)},Y=Math.min,K=Math.max,Q=Math.min,X=p("keys"),Z=function(e){return X[e]||(X[e]=v(e))},$=(V=!1,function(e,t,i){var n,r,o=T(e),a=(r=o.length)>0?Y(J(r),9007199254740991):0,s=function(e,t){return(e=J(e))<0?K(e+t,0):Q(e,t)}(i,a);if(V&&t!=t){for(;a>s;)if((n=o[s++])!=n)return!0}else for(;a>s;s++)if((V||s in o)&&o[s]===t)return V||s||0;return!V&&-1}),ee=Z("IE_PROTO"),te=function(e,t){var i,n=T(e),r=0,o=[];for(i in n)i!=ee&&z(n,i)&&o.push(i);for(;t.length>r;)z(n,i=t[r++])&&(~$(o,i)||o.push(i));return o},ie="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","),ne=n({}),re=_?Object.defineProperties:function(e,t){b(e);for(var i,n=ne(t),r=n.length,o=0;r>o;)S.f(e,i=n[o++],t[i]);return e},oe=Z("IE_PROTO"),ae=function(){},se=function(){var e,t=s({})("iframe"),n=ie.length;for(t.style.display="none",i({}).appendChild(t),t.src="javascript:",(e=t.contentWindow.document).open(),e.write("<script>document.F=Object<\/script>"),e.close(),se=e.F;n--;)delete se.prototype[ie[n]];return se()},le=Object.create||function(e,t){var i;return null!==e?(ae.prototype=b(e),i=new ae,ae.prototype=null,i[oe]=e):i=se(),void 0===t?i:re(i,t)},ce=S.f,de=l({})("toStringTag"),ue=function(e,t,i){e&&!z(e=i?e:e.prototype,de)&&ce(e,de,{configurable:!0,value:t})},pe={};a({})(pe,l({})("iterator"),(function(){return this})),W=function(e,t,i){e.prototype=le(pe,{next:x(1,i)}),ue(e,t+" Iterator")};for(var me=Z("IE_PROTO"),he=Object.prototype,fe=Object.getPrototypeOf||function(e){return e=Object(O(e)),z(e,me)?e[me]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?he:null},ge=r({}),ve=a({}),ye=o({}),be=l({})("iterator"),we=(!([].keys&&"next"in[].keys())),_e=function(){return this},ke=function(e,t,i,n,r,o,a){W(i,t,n);var s,l,c,d=function(e){if(!we&&e in h)return h[e];switch(e){case"keys":case"values":return function(){return new i(this,e)}}return function(){return new i(this,e)}},u=t+" Iterator",p="values"==r,m=!1,h=e.prototype,f=h[be]||h["@@iterator"]||r&&h[r],g=f||d(r),v=r?p?d("entries"):g:void 0,y="Array"==t&&h.entries||f;if(y&&(c=fe(y.call(new e)))!==Object.prototype&&c.next&&(ue(c,u,!0),"function"==typeof c[be]||ve(c,be,_e)),p&&f&&"values"!==f.name&&(m=!0,g=function(){return f.call(this)}),!we&&!m&&h[be]||ve(h,be,g),ye[t]=g,ye[u]=_e,r)if(s={values:p?g:d("values"),keys:o?g:d("keys"),entries:v},a)for(l in s)l in h||ge(h,l,s[l]);else G(G.P+G.F*(we||m),t,s);return s},Se=t({}),Le=n({}),xe=r({}),je=c({}),Ce=a({}),Ee=o({}),Me=l({}),Pe=Me("iterator"),Ae=Me("toStringTag"),Oe=Ee.Array,Te={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},Ue=Le(Te),ze=0;ze<Ue.length;ze++){var Fe,qe=Ue[ze],Ge=Te[qe],De=je[qe],Ie=De&&De.prototype;if(Ie&&(Ie[Pe]||Ce(Ie,Pe,Oe),Ie[Ae]||Ce(Ie,Ae,qe),Ee[qe]=Oe,Ge))for(Fe in Se)Ie[Fe]||xe(Ie,Fe,Se[Fe],!0)}var Ne={};let Be;Object.defineProperty(Ne,"__esModule",{value:!0}),Ne.toggleVisibilityFactory=Ne.throttle=Ne.initScrollBuffer=Ne.getScrollPosition=Ne.getScrollBuffer=Ne.coinFlip=void 0,Ne.initScrollBuffer=e=>{Ve(e),document.addEventListener("scroll",()=>{Ve(e)})};const Ve=e=>Be=We().height*e;Ne.getScrollBuffer=()=>Be,Ne.coinFlip=()=>Math.floor(2*Math.random());const We=()=>({height:window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,width:window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth}),He=()=>{const e=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;return{top:e,bottom:e+(window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight)}};Ne.getScrollPosition=He,Ne.toggleVisibilityFactory=(e,t)=>(i,n)=>{const r=-parseInt(document.querySelector("body").style.top)||0,o=i.offsetTop,a=i.offsetTop+i.offsetHeight;i.classList.contains(e)&&(o-Be>n.top+r&&o+Be<n.bottom+r||a+Be<n.bottom+r&&a-Be>n.top+r)&&t(i)},Ne.throttle=(e,t)=>{let i=0,n=null;return()=>{const r=Date.now();0<i&&r-i<t?(clearTimeout(n),n=setTimeout(()=>{i=r,e.apply()},t)):(i=r,e.apply())}};var Re={};Object.defineProperty(Re,"__esModule",{value:!0}),Re.projects=Re.portfolios=Re.contacts=void 0,Re.projects=[{id:0,title:"Match 3 Garden",previewStatic:"img/match-3-garden.jpg",previewAnim:"vid/preview/match-3-garden.mp4",fullAnim:"vid/match-3-garden.mp4",description:"A free-to-play narrative match-3 puzzle game on Facebook by Softgames. Features a story about a young woman who is trying to save and restore her dilapidated childhood home. Players complete levels in order to restore and decorate a large garden and mansion. Other features include daily challenge and missions, and a weekly event where player compete on a leaderboard to earn rewards.",stack:["Phaser CE","Facebook Instant Games","DeltaDNA","Node.js","Gulp"],sourceUrls:[],demoUrls:[{url:"https://fb.gg/play/sg_mtgarden",text:"Play"}]},{id:1,title:"Cookie Land",previewStatic:"img/cookie-land.jpg",previewAnim:"vid/preview/cookie-land.mp4",fullAnim:"vid/cookie-land.mp4",description:"A free-to-play match-3 puzzle game on Facebook by Softgames. Players complete levels and compete with friends to see who can reach the highest level, with new levels updated every week. Other features include daily challenge, a weekly Treasure Hunt events, and seasonal events where player can earn rewards.",stack:["Phaser CE","Facebook Instant Games","DeltaDNA","Node.js","Gulp"],sourceUrls:[],demoUrls:[{url:"https://fb.gg/play/cookie_crush_two",text:"Play"}]},{id:7,title:"GML Script Wizard",previewStatic:"img/gml-script-wizard.jpg",previewAnim:"vid/preview/gml-script-wizard.mp4",fullAnim:"vid/gml-script-wizard.mp4",description:"A tool that will help users generate and modify GML script headers just be filling in a few fields.<br/><br/>Add, remove, and rearrange arguments and additional local variables with ease, then copy the script template with a simple click of a button. Conforms to both GM:S 1.4 and GMS 2 (JSDoc) documentation styles for documenting scripts.",stack:["React","Redux","Node.js","Material-UI","Babel","Webpack","Electron"],sourceUrls:[{url:"https://github.com/mstop4/gml-script-wizard",text:"Source"}],demoUrls:[{url:"https://mstop4.github.io/gml-script-wizard",text:"Demo"}]},{id:3,title:"GIFcentration",previewStatic:"img/gifcentration.jpg",previewAnim:"vid/preview/gifcentration.mp4",fullAnim:"vid/gifcentration.mp4",description:"Concentration (pairs-matching) game powered by Giphy and the MERN stack.<br/><br/>The Client app allows users to search for GIFs that populate the cards in a game on Concentration. The Server app relays results and queries between the Client and the Giphy API and keeps track of the most popular searches.",stack:["MongoDB","Mongoose","Express","React","Node.js","Giphy JS SDK","Redis","Chance.js"],sourceUrls:[{url:"https://github.com/mstop4/gifcentration-client",text:"Client"},{url:"https://github.com/mstop4/gifcentration-server",text:"Server"}],demoUrls:[{url:"https://mstop4.github.io/gifcentration-client",text:"Play"}]},{id:4,title:"Fractured Flicks",previewStatic:"img/fractured-flicks.jpg",previewAnim:"vid/preview/fractured-flicks.mp4",fullAnim:"vid/fractured-flicks.mp4",description:'A jigsaw puzzle-like web game where you put pieces of a video back together. Contains multiple puzzles of vary difficulty levels and saves the best solve times locally in the user\'s browser.<br/><br/>It was very well received in <a href="https://itch.io/jam/finally-finish-something-2018/rate/181663" target=_blank>Finally Finish Something Jam 2018</a>, ranked 3rd place overall out of 109 entries.',stack:["Pixi.js","pixi-sound","Node.js","Babel","Webpack","Amazon S3"],sourceUrls:[{url:"https://github.com/mstop4/fractured-flicks",text:"Source"}],demoUrls:[{url:"https://mstop4.github.io/fractured-flicks",text:"Play"}]},{id:2,title:"Sync Timer",previewStatic:"img/sync-timer.jpg",previewAnim:"vid/preview/sync-timer.mp4",fullAnim:"vid/sync-timer.mp4",description:"An online stopwatch microservice where multiple groups of users or parties can each create and observe a common timer hosted on an express server on multiple devices via web sockets.<br/><br/>During my time as a teaching assistant at the University of Toronto, I had students needing to time the length of their presentations. Since the presenters and the audience (myself included), were facing in opposite directions, a timer on a single screen did not suffice. That gave me the idea to build Sync Timer, which solves that problem by running timers on a central server, which is broadcasted to multiple devices for different viewers.<br/><br/>It caught the attention of lead instructor of my class and he loved the idea.",stack:["Node.js","Express","Socket.io","Pug","Sass","Mocha","Chai","Puppeteer","jsdom"],sourceUrls:[{url:"https://github.com/mstop4/sync-timer",text:"Source"}],demoUrls:[{url:"https://sync-timer.herokuapp.com",text:"Demo"}]},{id:5,title:"FMODGMS",previewStatic:"img/fmodgms.jpg",previewAnim:"vid/preview/fmodgms.mp4",fullAnim:"vid/fmodgms.mp4",description:"A <em>GameMaker: Studio 1.4</em> and <em>GameMaker Studio 2</em> extension that provides GML bindings to the FMOD Studio low-level API. Can be used in Windows, macOS, and Linux games.<br/><br/>My longest running project, it was started about a decade ago as a means to extend the audio capabilities of <em>Game Maker 8.0</em> and has been maintained and updated as newer editions of <em>GameMaker</em> have been released.",stack:["FMOD Low Level API","GameMaker Studio 2","GameMaker: Studio 1.4"],sourceUrls:[{url:"https://github.com/mstop4/fmodgms",text:"Source"}],demoUrls:[{url:"https://quadolorgames.itch.io/fmodgms",text:"Download"}]},{id:8,title:"Arborescence",previewStatic:"img/arborescence.png",previewAnim:"vid/preview/arborescence.mp4",fullAnim:"vid/arborescence.mp4",description:"A relaxing point-and-click puzzle game where the player must strategically use the keys at their disposal in order to undo all the locks and get all the trees ready for the season.<br/><br/>Every tree sprite and level is procedurally-generated, modelled after binary search trees. As such, every level has at least one solution.",stack:["GameMaker Studio 2"],sourceUrls:[],demoUrls:[{url:"https://quadolorgames.itch.io/arborescence",text:"Download"}]},{id:6,title:"Worker #11812",previewStatic:"img/worker-11812.jpg",previewAnim:"vid/preview/worker-11812.mp4",fullAnim:"vid/worker-11812.mp4",description:'A point-and-drag game inspired by the "paternoster machine" (better known as the "clock scene") from the 1927 film <em>Metropolis</em> by Fritz Lang.<br/><br/> The game was first created with Phaser 3 as an exercise in learning the framework, then it was ported to GameMaker Studio 2 for native builds (Windows, macOS, Linux) after deciding that packing the web app with Electron made it too large.',stack:["Phaser 3","Node.js","Babel","Webpack","GameMaker Studio 2"],sourceUrls:[{url:"https://github.com/mstop4/worker-11812-phaser",text:"Web"},{url:"https://github.com/mstop4/worker-11812-gms",text:"Native"}],demoUrls:[{url:"https://quadolorgames.itch.io/worker-11812",text:"Play"}]}],Re.portfolios=[{displayText:"Github",url:"https://github.com/mstop4",iconClass:["icon-github"]},{displayText:"itch.io",url:"https://quadolorgames.itch.io/",iconClass:["icon-itchio-textless-black"]}],Re.contacts=[{displayText:"Email",url:"mailto:jonathan.hs.lam@gmail.com",iconClass:["icon-envelope-o"]},{displayText:"LinkedIn",url:"https://www.linkedin.com/in/jonathanlam4/",iconClass:["icon-linkedin2"]}];var Je={};Object.defineProperty(Je,"__esModule",{value:!0}),Je.updateModal=Je.setCanClick=Je.initialize=Je.getCanClick=void 0;const Ye={root:document.querySelector(".modal"),back:document.querySelector(".modal__back"),front:document.querySelector(".modal__front")};let Ke=!0;const Qe=()=>Ke;Je.getCanClick=Qe;const Xe=e=>Ke=e;Je.setCanClick=Xe,Je.initialize=()=>{Ye.back.addEventListener("click",()=>{if(Qe()){Xe(!1),setTimeout(()=>Xe(!0),550),Ye.front.classList.remove("modal__front--show"),Ye.back.classList.remove("modal__back--show");const e=document.querySelector("body"),t=-parseInt(e.style.top);e.removeAttribute("style"),e.classList.remove("no-scroll"),window.scrollTo(0,t)}}),Ye.back.addEventListener("transitionend",()=>{Ye.back.classList.contains("modal__back--show")||Ye.root.classList.add("modal--hidden")})},Je.updateModal=e=>{Xe(!1),setTimeout(()=>Xe(!0),550),Ye.root.classList.remove("modal--hidden"),setTimeout(()=>{Ye.front.classList.add("modal__front--show"),Ye.back.classList.add("modal__back--show")},10);const t=Ye.front.querySelector(".info__preview-video"),i=t.querySelector("source"),n=Ye.front.querySelector(".info__title"),r=Ye.front.querySelector(".info__text"),o=Ye.front.querySelector(".stack-list"),a=Ye.front.querySelector(".links__container"),s=a.querySelector("#source-column"),l=a.querySelector("#source-links"),c=a.querySelector("#demo-column"),d=a.querySelector("#demo-links");for(;o.firstChild;)o.removeChild(o.firstChild);for(;l.firstChild;)l.removeChild(l.firstChild);for(;d.firstChild;)d.removeChild(d.firstChild);t.poster=Re.projects[e].previewStatic,i.src=Re.projects[e].fullAnim,t.load(),t.play(),n.textContent=Re.projects[e].title,r.innerHTML=Re.projects[e].description,Re.projects[e].stack.forEach(e=>{const t=document.createElement("li");t.textContent=e,o.appendChild(t)}),0<Re.projects[e].sourceUrls.length?(s.classList.remove("links--hidden"),Re.projects[e].sourceUrls.forEach(e=>{const t=document.createElement("li"),i=document.createElement("a");i.textContent=e.text,i.href=e.url,i.target="_blank",t.appendChild(i),l.appendChild(t)})):s.classList.add("links--hidden"),0<Re.projects[e].demoUrls.length?(c.classList.remove("links--hidden"),Re.projects[e].demoUrls.forEach(e=>{const t=document.createElement("li"),i=document.createElement("a");i.innerText=e.text,i.href=e.url,i.target="_blank",t.appendChild(i),d.appendChild(t)})):c.classList.add("links--hidden")};var Ze={};Object.defineProperty(Ze,"__esModule",{value:!0}),Ze.initialize=Ze.handleUpdate=void 0;const $e=[...document.querySelectorAll(".heading")];Ze.initialize=()=>{tt()};const et=(0,Ne.toggleVisibilityFactory)("heading--hidden",e=>{e.classList.remove("heading--hidden"),e.classList.contains("heading__left")?e.classList.add("heading__left--appear"):e.classList.contains("heading__right")&&e.classList.add("heading__right--appear")}),tt=()=>{const e=(0,Ne.getScrollPosition)();$e.forEach(t=>{et(t,e)})};Ze.handleUpdate=tt;var it={};Object.defineProperty(it,"__esModule",{value:!0}),it.initialize=it.handleUpdate=void 0;const nt=document.querySelector(".splash__wrapper");it.initialize=()=>{(0,Ne.getScrollPosition)().top<=(0,Ne.getScrollBuffer)()&&rt(nt)};const rt=e=>{e.classList.contains("splash--hidden")&&(e.classList.remove("splash--hidden"),[...document.querySelectorAll(".splash__wrapper > *")].forEach((e,t)=>{setTimeout(()=>{e.classList.remove("splash--hidden"),e.classList.add("splash--show")},650*t+500)}))},ot=(0,Ne.toggleVisibilityFactory)("splash--hidden",rt);it.handleUpdate=()=>{const e=(0,Ne.getScrollPosition)();ot(nt,e)};var at={};Object.defineProperty(at,"__esModule",{value:!0}),at.default=void 0,at.default=[{bullet:"\ud83d\uddbc\ufe0f",text:"Developer of games and web applications from Toronto who believes the marriage of code, art, and music can create beautiful things"},{bullet:"\ud83c\udf10",text:"Fascinated by the Internet of things and the web as a programmable platform"},{bullet:"\ud83d\udee0\ufe0f",text:"Likes to tinker with and optimize code until it's just right"},{bullet:"\ud83d\udcda",text:"Excited to learn new technologies and coding techniques and teaching others"},{bullet:"\ud83d\udcc5",text:"Strives to exercise my creativity regularly, be it code, art, or music"}];var st={};Object.defineProperty(st,"__esModule",{value:!0}),st.initialize=st.handleUpdate=void 0;var lt,ct=(lt=at)&&lt.__esModule?lt:{default:lt};const dt=document.querySelector(".bio__text");st.initialize=()=>{ut(),mt()};const ut=()=>{ct.default.forEach(e=>{const t=document.createElement("li");t.setAttribute("data-bullet",e.bullet),t.classList.add("bio__text--hidden"),t.textContent=e.text,dt.appendChild(t)})},pt=(0,Ne.toggleVisibilityFactory)("bio__text--hidden",e=>{e.classList.contains("bio__text--hidden")&&(e.classList.remove("bio__text--hidden"),[...document.querySelectorAll(".bio__text li")].forEach((e,t)=>{setTimeout(()=>{e.classList.remove("bio__text--hidden"),e.classList.add("bio__text-right--appear")},250*t)}))}),mt=()=>{const e=(0,Ne.getScrollPosition)();pt(dt,e)};st.handleUpdate=mt;var ht={};Object.defineProperty(ht,"__esModule",{value:!0}),ht.default=void 0,ht.default=[{name:"React",image:"img/tech/react.png"},{name:"Phaser CE",image:"img/tech/phaser.png"},{name:"express",image:"img/tech/express.png"},{name:"Babel",image:"img/tech/babel.png"},{name:"Gulp",image:"img/tech/gulp.png"},{name:"webpack",image:"img/tech/webpack.png"},{name:"Sass",image:"img/tech/sass.png"},{name:"Mocha",image:"img/tech/mocha.png"},{name:"Jest",image:"img/tech/jest.png"},{name:"mongoDB",image:"img/tech/mongodb.png"},{name:"mySQL",image:"img/tech/mysql.png"},{name:"Heroku",image:"img/tech/heroku.png"},{name:"DeltaDNA",image:"img/tech/deltadna.png"},{name:"GameMaker",image:"img/tech/gms2.png"}];var ft={};Object.defineProperty(ft,"__esModule",{value:!0}),ft.initialize=ft.handleUpdate=void 0;var gt,vt=(gt=ht)&&gt.__esModule?gt:{default:gt};const yt=document.querySelector(".skills__list");ft.initialize=()=>{bt(),_t()};const bt=()=>{const e=document.querySelector(".skills__list");vt.default.forEach(t=>{const i=document.createElement("li"),n=document.createElement("img"),r=document.createElement("div");i.classList.add("skills--hidden"),r.innerText=t.name,r.classList.add("skills__tech"),n.src=t.image,n.alt=t.name,i.appendChild(n),i.appendChild(r),e.appendChild(i)})},wt=(0,Ne.toggleVisibilityFactory)("skills--hidden",e=>{e.classList.contains("skills--hidden")&&(e.classList.remove("skills--hidden"),[...document.querySelectorAll(".skills__list li")].forEach((e,t)=>{setTimeout(()=>{e.classList.remove("skills--hidden"),e.classList.add("skills__tech--show")},150*t)}))}),_t=()=>{const e=(0,Ne.getScrollPosition)();wt(yt,e)};ft.handleUpdate=_t;var kt={};Object.defineProperty(kt,"__esModule",{value:!0}),kt.initialize=kt.handleUpdate=void 0;const St=document.querySelector(".project__list"),Lt=[],xt=document.querySelector("#portfolio-list"),jt=[];kt.initialize=()=>{Ct(),Et()};const Ct=()=>{const e=(0,Ne.getScrollPosition)();Re.projects.sort((e,t)=>e.id-t.id).forEach((t,i)=>{let n=document.createElement("div");n.classList.add("project","project--hidden"),n.setAttribute("data-index",i),n.setAttribute("tabindex","0"),0===(0,Ne.coinFlip)()?n.classList.add("project-left"):n.classList.add("project-right"),Pt(n,e),Lt.push(n);let r=document.createElement("div");r.classList.add("project__preview--container");let o=document.createElement("img");o.classList.add("project__preview--media","project__preview--static"),o.src=t.previewStatic;let a=document.createElement("video");a.classList.add("project__preview--media"),a.setAttribute("loop",""),a.setAttribute("preload","none"),a.setAttribute("playsinline","true"),a.setAttribute("poster",t.previewStatic);let s=document.createElement("source");s.src=t.previewAnim,s.type="video/mp4",n.addEventListener("mouseenter",()=>{o.classList.add("project__preview--hidden"),a.muted=!0,a.play()}),n.addEventListener("mouseleave",()=>{o.classList.remove("project__preview--hidden"),a.pause()}),n.addEventListener("click",()=>{if((0,Je.getCanClick)()){o.classList.contains("project__preview--hidden")&&(o.classList.remove("project__preview--hidden"),a.pause());const e=document.querySelector("body"),t=(0,Ne.getScrollPosition)();e.style.top=(-t.top).toString()+"px",e.classList.add("no-scroll"),(0,Je.updateModal)(i)}});let l=document.createElement("div");l.classList.add("project__short-info");let c=document.createElement("h3");c.classList.add("project__title"),c.textContent=t.title,l.appendChild(c),r.appendChild(o),a.appendChild(s),r.appendChild(a),n.appendChild(r),n.appendChild(l),St.appendChild(n)})},Et=()=>{const e=(0,Ne.getScrollPosition)();Re.portfolios.forEach(t=>{const i=document.createElement("div");i.classList.add("external","external--hidden"),0===(0,Ne.coinFlip)()?i.classList.add("external-left"):i.classList.add("external-right"),Mt(i,e),jt.push(i);const n=document.createElement("div");n.classList.add("external-icon");const r=document.createElement("span");r.classList.add(t.iconClass);const o=document.createElement("a");o.href=t.url,o.textContent=t.displayText,o.target="_blank",n.appendChild(r),i.appendChild(n),i.appendChild(o),xt.appendChild(i)})},Mt=(0,Ne.toggleVisibilityFactory)("external--hidden",e=>{e.classList.remove("external--hidden"),e.classList.contains("external-left")?e.classList.add("external-left--appear"):e.classList.contains("external-right")&&e.classList.add("external-right--appear")}),Pt=(0,Ne.toggleVisibilityFactory)("project--hidden",e=>{e.classList.remove("project--hidden"),e.classList.contains("project-left")?e.classList.add("project-left--appear"):e.classList.contains("project-right")&&e.classList.add("project-right--appear")});kt.handleUpdate=()=>{const e=(0,Ne.getScrollPosition)();Lt.forEach(t=>{Pt(t,e)}),jt.forEach(t=>{Mt(t,e)})};var At={};Object.defineProperty(At,"__esModule",{value:!0}),At.initialize=At.handleUpdate=void 0;const Ot=document.querySelector("#contact-list"),Tt=document.querySelector("#resume-redux"),Ut=[];At.initialize=()=>zt();const zt=()=>{const e=(0,Ne.getScrollPosition)();Re.contacts.forEach(t=>{const i=document.createElement("div");i.classList.add("external","external--hidden"),0===(0,Ne.coinFlip)()?i.classList.add("external-left"):i.classList.add("external-right"),Ft(i,e),Ut.push(i);const n=document.createElement("div");n.classList.add("external-icon");const r=document.createElement("span");r.classList.add(t.iconClass);const o=document.createElement("a");o.href=t.url,o.textContent=t.displayText,o.target="_blank",n.appendChild(r),i.appendChild(n),i.appendChild(o),Ot.appendChild(i)});const t=document.createElement("div");t.classList.add("external","external--hidden"),0===(0,Ne.coinFlip)()?t.classList.add("external-left"):t.classList.add("external-right"),Ft(t,e),Ut.push(t);const i=document.createElement("div");i.classList.add("external-icon");const n=document.createElement("span");n.classList.add("icon-file-text");const r=document.createElement("a");r.href="downloads/Jonathan_Lam_resume.pdf",r.textContent="Resum\xe9",r.target="_blank",i.appendChild(n),t.appendChild(i),t.appendChild(r),Tt.appendChild(t)},Ft=(0,Ne.toggleVisibilityFactory)("external--hidden",e=>{e.classList.remove("external--hidden"),e.classList.contains("external-left")?e.classList.add("external-left--appear"):e.classList.contains("external-right")&&e.classList.add("external-right--appear")});At.handleUpdate=()=>{const e=(0,Ne.getScrollPosition)();Ut.forEach(t=>{Ft(t,e)})};var qt={};Object.defineProperty(qt,"__esModule",{value:!0}),qt.updateCopyrightYear=void 0,qt.updateCopyrightYear=()=>{document.querySelector("#copyright-year").innerHTML=(new Date).getFullYear()};var Gt=Rt(Je),Dt=Rt(Ze),It=Rt(it),Nt=Rt(st),Bt=Rt(ft),Vt=Rt(kt),Wt=Rt(At);function Ht(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,i=new WeakMap;return(Ht=function(e){return e?i:t})(e)}function Rt(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var i=Ht(t);if(i&&i.has(e))return i.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!=o&&Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}return n.default=e,i&&i.set(e,n),n}document.addEventListener("DOMContentLoaded",()=>{document.documentMode&&!window.MSInputMethodContext&&document.getElementById("is-ie10-").classList.remove("hidden"),(0,Ne.initScrollBuffer)(.1),Dt.initialize(),It.initialize(),Nt.initialize(),Bt.initialize(),Vt.initialize(),Wt.initialize();const e=(0,Ne.throttle)(()=>{Vt.handleUpdate(),Wt.handleUpdate(),Dt.handleUpdate(),Nt.handleUpdate(),Bt.handleUpdate(),It.handleUpdate()},100);document.addEventListener("scroll",e),window.addEventListener("resize",e),window.addEventListener("orientationchange",e),Gt.initialize(),(0,qt.updateCopyrightYear)()})}();