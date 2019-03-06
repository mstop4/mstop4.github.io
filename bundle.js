!function(){var e=function(e){return"object"==typeof e?null!==e:"function"==typeof e},t=function(t){if(!e(t))throw TypeError(t+" is not an object!");return t},n=function(e){try{return!!e()}catch(t){return!0}},r=!n(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}),i={},o=i="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=o);var a=i.document,c=e(a)&&e(a.createElement),s=function(e){return c?a.createElement(e):{}},l=!r&&!n(function(){return 7!=Object.defineProperty(s("div"),"a",{get:function(){return 7}}).a}),u=function(t,n){if(!e(t))return t;var r,i;if(n&&"function"==typeof(r=t.toString)&&!e(i=r.call(t)))return i;if("function"==typeof(r=t.valueOf)&&!e(i=r.call(t)))return i;if(!n&&"function"==typeof(r=t.toString)&&!e(i=r.call(t)))return i;throw TypeError("Can't convert object to primitive value")},d={},p=Object.defineProperty;d.f=r?Object.defineProperty:function(e,n,r){if(t(e),n=u(n,!0),t(r),l)try{return p(e,n,r)}catch(i){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(e[n]=r.value),e};var f=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},m=function(e,t,n){t in e?d.f(e,t,f(0,n)):e[t]=n},h=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e},g=function(e,t,n){if(h(e),void 0===t)return e;switch(n){case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,i){return e.call(t,n,r,i)}}return function(){return e.apply(t,arguments)}},v={},y=v={version:"2.6.3"};"number"==typeof __e&&(__e=y);var b,w=r?function(e,t,n){return d.f(e,t,f(1,n))}:function(e,t,n){return e[t]=n,e},S={}.hasOwnProperty,k=function(e,t){return S.call(e,t)},L=0,_=Math.random(),x=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++L+_).toString(36))},E=x("src"),j=Function.toString,A=(""+j).split("toString");v.inspectSource=function(e){return j.call(e)},(b=function(e,t,n,r){var o="function"==typeof n;o&&(k(n,"name")||w(n,"name",t)),e[t]!==n&&(o&&(k(n,E)||w(n,E,e[t]?""+e[t]:A.join(String(t)))),e===i?e[t]=n:r?e[t]?e[t]=n:w(e,t,n):(delete e[t],w(e,t,n)))})(Function.prototype,"toString",function(){return"function"==typeof this&&this[E]||j.call(this)});var C={},O=function(e,t,n){var r,o,a,c,s=e&O.F,l=e&O.G,u=e&O.S,d=e&O.P,p=e&O.B,f=l?i:u?i[t]||(i[t]={}):(i[t]||{}).prototype,m=l?v:v[t]||(v[t]={}),h=m.prototype||(m.prototype={});for(r in l&&(n=t),n)a=((o=!s&&f&&void 0!==f[r])?f:n)[r],c=p&&o?g(a,i):d&&"function"==typeof a?g(Function.call,a):a,f&&b(f,r,a,e&O.U),m[r]!=a&&w(m,r,c),d&&h[r]!=a&&(h[r]=a)};i.core=v,O.F=1,O.G=2,O.S=4,O.P=8,O.B=16,O.W=32,O.U=64,O.R=128,C=O;var M,T={},P=i["__core-js_shared__"]||(i["__core-js_shared__"]={});(M=function(e,t){return P[e]||(P[e]=void 0!==t?t:{})})("versions",[]).push({version:v.version,mode:"global",copyright:"\xa9 2019 Denis Pushkarev (zloirock.ru)"});var q={},G=M("wks"),I=i.Symbol,F="function"==typeof I;(q=function(e){return G[e]||(G[e]=F&&I[e]||(F?I:x)("Symbol."+e))}).store=G;var U=q("iterator"),D=Array.prototype,N=function(e,n,r,i){try{return i?n(t(r)[0],r[1]):n(r)}catch(a){var o=e.return;throw void 0!==o&&t(o.call(e)),a}},z=q("iterator"),R=!1;try{var W=[7][z]();W.return=function(){R=!0},Array.from(W,function(){throw 2})}catch(Er){}var H=Math.ceil,B=Math.floor,J=function(e){return isNaN(e=+e)?0:(e>0?B:H)(e)},V=Math.min,K=function(e){return e>0?V(J(e),9007199254740991):0},Y=function(e){if(null==e)throw TypeError("Can't call method on  "+e);return e},Q=function(e){return Object(Y(e))},X={}.toString,Z=function(e){return X.call(e).slice(8,-1)},$=q("toStringTag"),ee="Arguments"==Z(function(){return arguments}()),te=q("iterator"),ne=v.getIteratorMethod=function(e){if(null!=e)return e[te]||e["@@iterator"]||T[function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=function(e,t){try{return e[t]}catch(Er){}}(t=Object(e),$))?n:ee?Z(t):"Object"==(r=Z(t))&&"function"==typeof t.callee?"Arguments":r}(e)]};C(C.S+C.F*!function(e,t){if(!t&&!R)return!1;var n=!1;try{var r=[7],i=r[z]();i.next=function(){return{done:n=!0}},r[z]=function(){return i},e(r)}catch(Er){}return n}(function(e){Array.from(e)}),"Array",{from:function(e){var t,n,r,i,o,a=Q(e),c="function"==typeof this?this:Array,s=arguments.length,l=s>1?arguments[1]:void 0,u=void 0!==l,d=0,p=ne(a);if(u&&(l=g(l,s>2?arguments[2]:void 0,2)),null==p||c==Array&&(void 0!==(o=p)&&(T.Array===o||D[U]===o)))for(n=new c(t=K(a.length));t>d;d++)m(n,d,u?l(a[d],d):a[d]);else for(i=p.call(a),n=new c;!(r=i.next()).done;d++)m(n,d,u?N(i,l,[r.value,d],!0):r.value);return n.length=d,n}});var re=function(){var e=t(this),n="";return e.global&&(n+="g"),e.ignoreCase&&(n+="i"),e.multiline&&(n+="m"),e.unicode&&(n+="u"),e.sticky&&(n+="y"),n};r&&"g"!=/./g.flags&&d.f(RegExp.prototype,"flags",{configurable:!0,get:re});var ie=/./.toString,oe=function(e){b(RegExp.prototype,"toString",e,!0)};n(function(){return"/a/b"!=ie.call({source:"a",flags:"b"})})?oe(function(){var e=t(this);return"/".concat(e.source,"/","flags"in e?e.flags:!r&&e instanceof RegExp?re.call(e):void 0)}):"toString"!=ie.name&&oe(function(){return ie.call(this)});var ae,ce,se="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","),le=i.document,ue=le&&le.documentElement,de=Math.max,pe=Math.min,fe=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==Z(e)?e.split(""):Object(e)},me=function(e){return fe(Y(e))},he=M("keys"),ge=function(e){return he[e]||(he[e]=x(e))},ve=(ae=!1,function(e,t,n){var r,i=me(e),o=K(i.length),a=function(e,t){return(e=J(e))<0?de(e+t,0):pe(e,t)}(n,o);if(ae&&t!=t){for(;o>a;)if((r=i[a++])!=r)return!0}else for(;o>a;a++)if((ae||a in i)&&i[a]===t)return ae||a||0;return!ae&&-1}),ye=ge("IE_PROTO"),be=function(e,t){var n,r=me(e),i=0,o=[];for(n in r)n!=ye&&k(r,n)&&o.push(n);for(;t.length>i;)k(r,n=t[i++])&&(~ve(o,n)||o.push(n));return o},we=Object.keys||function(e){return be(e,se)},Se=r?Object.defineProperties:function(e,n){t(e);for(var r,i=we(n),o=i.length,a=0;o>a;)d.f(e,r=i[a++],n[r]);return e},ke=ge("IE_PROTO"),Le=function(){},_e=function(){var e,t=s("iframe"),n=se.length;for(t.style.display="none",ue.appendChild(t),t.src="javascript:",(e=t.contentWindow.document).open(),e.write("<script>document.F=Object<\/script>"),e.close(),_e=e.F;n--;)delete _e.prototype[se[n]];return _e()},xe=Object.create||function(e,n){var r;return null!==e?(Le.prototype=t(e),r=new Le,Le.prototype=null,r[ke]=e):r=_e(),void 0===n?r:Se(r,n)},Ee=d.f,je=q("toStringTag"),Ae=function(e,t,n){e&&!k(e=n?e:e.prototype,je)&&Ee(e,je,{configurable:!0,value:t})},Ce={};w(Ce,q("iterator"),function(){return this}),ce=function(e,t,n){e.prototype=xe(Ce,{next:f(1,n)}),Ae(e,t+" Iterator")};var Oe,Me=ge("IE_PROTO"),Te=Object.prototype,Pe=Object.getPrototypeOf||function(e){return e=Q(e),k(e,Me)?e[Me]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?Te:null},qe=q("iterator"),Ge=!([].keys&&"next"in[].keys()),Ie=function(){return this},Fe=function(e,t,n,r,i,o,a){ce(n,t,r);var c,s,l,u=function(e){if(!Ge&&e in m)return m[e];switch(e){case"keys":case"values":return function(){return new n(this,e)}}return function(){return new n(this,e)}},d=t+" Iterator",p="values"==i,f=!1,m=e.prototype,h=m[qe]||m["@@iterator"]||i&&m[i],g=h||u(i),v=i?p?u("entries"):g:void 0,y="Array"==t&&m.entries||h;if(y&&(l=Pe(y.call(new e)))!==Object.prototype&&l.next&&(Ae(l,d,!0),"function"==typeof l[qe]||w(l,qe,Ie)),p&&h&&"values"!==h.name&&(f=!0,g=function(){return h.call(this)}),!Ge&&!f&&m[qe]||w(m,qe,g),T[t]=g,T[d]=Ie,i)if(c={values:p?g:u("values"),keys:o?g:u("keys"),entries:v},a)for(s in c)s in m||b(m,s,c[s]);else C(C.P+C.F*(Ge||f),t,c);return c},Ue=(Oe=!0,function(e,t){var n,r,i=String(Y(e)),o=J(t),a=i.length;return o<0||o>=a?Oe?"":void 0:(n=i.charCodeAt(o))<55296||n>56319||o+1===a||(r=i.charCodeAt(o+1))<56320||r>57343?Oe?i.charAt(o):n:Oe?i.slice(o,o+2):r-56320+(n-55296<<10)+65536});Fe(String,"String",function(e){this._t=String(e),this._i=0},function(){var e,t=this._t,n=this._i;return n>=t.length?{value:void 0,done:!0}:(e=Ue(t,n),this._i+=e.length,{value:e,done:!1})});var De={};De.f=Object.getOwnPropertySymbols;var Ne={};Ne.f={}.propertyIsEnumerable;var ze,Re=Array.isArray||function(e){return"Array"==Z(e)},We=x("meta"),He=(d.f,Object.isExtensible||function(){return!0}),Be=(n(function(){return He(Object.preventExtensions({}))}),ze={KEY:We},{}),Je=Object.getOwnPropertyDescriptor;Be.f=r?Je:function(e,t){if(e=me(e),t=u(t,!0),l)try{return Je(e,t)}catch(Er){}if(k(e,t))return f(!Ne.f.call(e,t),e[t])};var Ve={},Ke=se.concat("length","prototype");Ve.f=Object.getOwnPropertyNames||function(e){return be(e,Ke)};var Ye={},Qe=Ve.f,Xe={}.toString,Ze="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];Ye.f=function(e){return Ze&&"[object Window]"==Xe.call(e)?function(e){try{return Qe(e)}catch(Er){return Ze.slice()}}(e):Qe(me(e))};var $e={};$e.f=q;var et=d.f,tt=function(e){var t=v.Symbol||(v.Symbol=i.Symbol||{});"_"==e.charAt(0)||e in t||et(t,e,{value:$e.f(e)})},nt=ze.KEY,rt=Be.f,it=d.f,ot=Ye.f,at=i.Symbol,ct=i.JSON,st=ct&&ct.stringify,lt=q("_hidden"),ut=q("toPrimitive"),dt={}.propertyIsEnumerable,pt=M("symbol-registry"),ft=M("symbols"),mt=M("op-symbols"),ht=Object.prototype,gt="function"==typeof at,vt=i.QObject,yt=!vt||!vt.prototype||!vt.prototype.findChild,bt=r&&n(function(){return 7!=xe(it({},"a",{get:function(){return it(this,"a",{value:7}).a}})).a})?function(e,t,n){var r=rt(ht,t);r&&delete ht[t],it(e,t,n),r&&e!==ht&&it(ht,t,r)}:it,wt=function(e){var t=ft[e]=xe(at.prototype);return t._k=e,t},St=gt&&"symbol"==typeof at.iterator?function(e){return"symbol"==typeof e}:function(e){return e instanceof at},kt=function(e,n,r){return e===ht&&kt(mt,n,r),t(e),n=u(n,!0),t(r),k(ft,n)?(r.enumerable?(k(e,lt)&&e[lt][n]&&(e[lt][n]=!1),r=xe(r,{enumerable:f(0,!1)})):(k(e,lt)||it(e,lt,f(1,{})),e[lt][n]=!0),bt(e,n,r)):it(e,n,r)},Lt=function(e,n){t(e);for(var r,i=function(e){var t=we(e),n=De.f;if(n)for(var r,i=n(e),o=Ne.f,a=0;i.length>a;)o.call(e,r=i[a++])&&t.push(r);return t}(n=me(n)),o=0,a=i.length;a>o;)kt(e,r=i[o++],n[r]);return e},_t=function(e){var t=dt.call(this,e=u(e,!0));return!(this===ht&&k(ft,e)&&!k(mt,e))&&(!(t||!k(this,e)||!k(ft,e)||k(this,lt)&&this[lt][e])||t)},xt=function(e,t){if(e=me(e),t=u(t,!0),e!==ht||!k(ft,t)||k(mt,t)){var n=rt(e,t);return!n||!k(ft,t)||k(e,lt)&&e[lt][t]||(n.enumerable=!0),n}},Et=function(e){for(var t,n=ot(me(e)),r=[],i=0;n.length>i;)k(ft,t=n[i++])||t==lt||t==nt||r.push(t);return r},jt=function(e){for(var t,n=e===ht,r=ot(n?mt:me(e)),i=[],o=0;r.length>o;)!k(ft,t=r[o++])||n&&!k(ht,t)||i.push(ft[t]);return i};gt||(b((at=function(){if(this instanceof at)throw TypeError("Symbol is not a constructor!");var e=x(arguments.length>0?arguments[0]:void 0),t=function(n){this===ht&&t.call(mt,n),k(this,lt)&&k(this[lt],e)&&(this[lt][e]=!1),bt(this,e,f(1,n))};return r&&yt&&bt(ht,e,{configurable:!0,set:t}),wt(e)}).prototype,"toString",function(){return this._k}),Be.f=xt,d.f=kt,Ve.f=Ye.f=Et,Ne.f=_t,De.f=jt,r&&b(ht,"propertyIsEnumerable",_t,!0),$e.f=function(e){return wt(q(e))}),C(C.G+C.W+C.F*!gt,{Symbol:at});for(var At="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),Ct=0;At.length>Ct;)q(At[Ct++]);for(var Ot=we(q.store),Mt=0;Ot.length>Mt;)tt(Ot[Mt++]);C(C.S+C.F*!gt,"Symbol",{for:function(e){return k(pt,e+="")?pt[e]:pt[e]=at(e)},keyFor:function(e){if(!St(e))throw TypeError(e+" is not a symbol!");for(var t in pt)if(pt[t]===e)return t},useSetter:function(){yt=!0},useSimple:function(){yt=!1}}),C(C.S+C.F*!gt,"Object",{create:function(e,t){return void 0===t?xe(e):Lt(xe(e),t)},defineProperty:kt,defineProperties:Lt,getOwnPropertyDescriptor:xt,getOwnPropertyNames:Et,getOwnPropertySymbols:jt}),ct&&C(C.S+C.F*(!gt||n(function(){var e=at();return"[null]"!=st([e])||"{}"!=st({a:e})||"{}"!=st(Object(e))})),"JSON",{stringify:function(t){for(var n,r,i=[t],o=1;arguments.length>o;)i.push(arguments[o++]);if(r=n=i[1],(e(n)||void 0!==t)&&!St(t))return Re(n)||(n=function(e,t){if("function"==typeof r&&(t=r.call(this,e,t)),!St(t))return t}),i[1]=n,st.apply(ct,i)}}),at.prototype[ut]||w(at.prototype,ut,at.prototype.valueOf),Ae(at,"Symbol"),Ae(Math,"Math",!0),Ae(i.JSON,"JSON",!0),tt("asyncIterator");var Tt,Pt=q("unscopables"),qt=Array.prototype;null==qt[Pt]&&w(qt,Pt,{}),Tt=function(e){qt[Pt][e]=!0};var Gt,It=function(e,t){return{value:t,done:!!e}};Gt=Fe(Array,"Array",function(e,t){this._t=me(e),this._i=0,this._k=t},function(){var e=this._t,t=this._k,n=this._i++;return!e||n>=e.length?(this._t=void 0,It(1)):It(0,"keys"==t?n:"values"==t?e[n]:[n,e[n]])},"values"),T.Arguments=T.Array,Tt("keys"),Tt("values"),Tt("entries");for(var Ft=q("iterator"),Ut=q("toStringTag"),Dt=T.Array,Nt={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},zt=we(Nt),Rt=0;Rt<zt.length;Rt++){var Wt,Ht=zt[Rt],Bt=Nt[Ht],Jt=i[Ht],Vt=Jt&&Jt.prototype;if(Vt&&(Vt[Ft]||w(Vt,Ft,Dt),Vt[Ut]||w(Vt,Ut,Ht),T[Ht]=Dt,Bt))for(Wt in Gt)Vt[Wt]||b(Vt,Wt,Gt[Wt],!0)}var Kt,Yt=[{bullet:"\ud83d\uddbc\ufe0f",text:"Developer of games and web applications from Toronto who believes the marriage of code, art, and music can create beautiful things"},{bullet:"\ud83c\udf10",text:"Fascinated by the Internet of things and the web as a programmable platform"},{bullet:"\ud83d\udcc0",text:"Enjoys creating multimedia experiences"},{bullet:"\ud83d\udee0\ufe0f",text:"Excited to learn new technologies and coding techniques and teaching others"},{bullet:"\ud83d\udcc5",text:"Strives to exercise my creativity regularly, be it code, art, or music"}],Qt=function(e){return Kt=Xt().height*e},Xt=function(){return{height:window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,width:window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth}},Zt=function(e){Qt(e),document.addEventListener("scroll",function(){Qt(e)})},$t=function(){return Math.floor(2*Math.random())},en=function(){var e=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;return{top:e,bottom:e+(window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight)}},tn=function(){return Kt},nn=function(e,t){return function(n,r){var i=-parseInt(document.querySelector("body").style.top)||0,o=n.offsetTop,a=n.offsetTop+n.offsetHeight;n.classList.contains(e)&&(o-Kt>r.top+i&&o+Kt<r.bottom+i||a+Kt<r.bottom+i&&a-Kt>r.top+i)&&t(n)}},rn=function(e,t){var n=0,r=null;return function(){var i=Date.now();0<n&&i-n<t?(clearTimeout(r),r=setTimeout(function(){n=i,e.apply()},t)):(n=i,e.apply())}};var on,an,cn,sn=en,ln=nn,un=document.querySelector(".bio__text"),dn=ln("bio__text--hidden",function(e){e.classList.contains("bio__text--hidden")&&(e.classList.remove("bio__text--hidden"),function(e){return function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}(document.querySelectorAll(".bio__text li")).forEach(function(e,t){setTimeout(function(){e.classList.remove("bio__text--hidden"),e.classList.add("bio__text-right--appear")},250*t)}))}),pn=function(){var e=sn();dn(un,e)},fn=function(){Yt.forEach(function(e){var t=document.createElement("li");t.setAttribute("data-bullet",e.bullet),t.classList.add("bio__text--hidden"),t.textContent=e.text,un.appendChild(t)}),pn()},mn=pn,hn=[{id:5,title:"GML Script Wizard",previewStatic:"img/gml-script-wizard.jpg",previewAnim:"vid/preview/gml-script-wizard.mp4",fullAnim:"vid/gml-script-wizard.mp4",description:"A tool that will help users generate and modify GML script headers just be filling in a few fields.<br/><br/>Add, remove, and rearrange arguments and additional local variables with ease, then copy the script template with a simple click of a button. Conforms to both GM:S 1.4 and GMS 2 (JSDoc) documentation styles for documenting scripts.",stack:["React","Redux","Node.js","Material-UI","Babel","Webpack","Electron"],sourceUrls:[{url:"https://github.com/mstop4/gml-script-wizard",text:"Source"}],demoUrls:[{url:"https://mstop4.github.io/gml-script-wizard",text:"Demo"}]},{id:1,title:"GIFcentration",previewStatic:"img/gifcentration.jpg",previewAnim:"vid/preview/gifcentration.mp4",fullAnim:"vid/gifcentration.mp4",description:"Concentration (pairs-matching) game powered by Giphy and the MERN stack.<br/><br/>The Client app allows users to search for GIFs that populate the cards in a game on Concentration. The Server app relays results and queries between the Client and the Giphy API and keeps track of the most popular searches.",stack:["MongoDB","Mongoose","Express","React","Node.js","Giphy JS SDK","Redis","Chance.js"],sourceUrls:[{url:"https://github.com/mstop4/gifcentration-client",text:"Client"},{url:"https://github.com/mstop4/gifcentration-server",text:"Server"}],demoUrls:[{url:"https://mstop4.github.io/gifcentration-client",text:"Play"}]},{id:2,title:"Fractured Flicks",previewStatic:"img/fractured-flicks.jpg",previewAnim:"vid/preview/fractured-flicks.mp4",fullAnim:"vid/fractured-flicks.mp4",description:'A jigsaw puzzle-like web game where you put pieces of a video back together. Contains multiple puzzles of vary difficulty levels and saves the best solve times locally in the user\'s browser.<br/><br/>It was very well received in <a href="https://itch.io/jam/finally-finish-something-2018/rate/181663" target=_blank>Finally Finish Something Jam 2018</a>, ranked 3rd place overall out of 109 entries.',stack:["Pixi.js","pixi-sound","Node.js","Babel","Webpack","Amazon S3"],sourceUrls:[{url:"https://github.com/mstop4/fractured-flicks",text:"Source"}],demoUrls:[{url:"https://mstop4.github.io/fractured-flicks",text:"Play"}]},{id:0,title:"Sync Timer",previewStatic:"img/sync-timer.jpg",previewAnim:"vid/preview/sync-timer.mp4",fullAnim:"vid/sync-timer.mp4",description:"An online stopwatch microservice where multiple users can view the same timer on multiple devices.<br/><br/>During my time as a teaching assistant at the University of Toronto, I had students needing to time the length of their presentations. Since the presenters and the audience (myself included), were facing in opposite directions, a timer on a single screen did not suffice. That gave me the idea to build Sync Timer, which solves that problem by running timers on a central server, which is broadcasted to multiple devices for different viewers.<br/><br/>It caught the attention of lead instructor of my class and he loved the idea",stack:["Node.js","Express","Socket.io","Pug","Sass","Mocha","Chai","Puppeteer","jsdom"],sourceUrls:[{url:"https://github.com/mstop4/sync-timer",text:"Source"}],demoUrls:[{url:"https://sync-timer.herokuapp.com",text:"Demo"}]},{id:3,title:"FMODGMS",previewStatic:"img/fmodgms.jpg",previewAnim:"vid/preview/fmodgms.mp4",fullAnim:"vid/fmodgms.mp4",description:"A <em>GameMaker: Studio</em> and <em>GameMaker Studio 2</em> extension that provides GML bindings to the FMOD Studio low-level API. Can be used in Windows, macOS, and Linux games.<br/><br/>My longest running project, it was started about a decade ago as a means to extend the audio capabilities of <em>Game Maker 8.0</em> and has been maintained and updated as newer editions of <em>GameMaker</em> have been released.",stack:["FMOD Low Level API","GameMaker Studio 2","GameMaker: Studio 1.4"],sourceUrls:[{url:"https://github.com/mstop4/fmodgms",text:"Source"}],demoUrls:[{url:"https://quadolorgames.itch.io/fmodgms",text:"Download"}]},{id:6,title:"Arborescence",previewStatic:"img/arborescence.png",previewAnim:"vid/preview/arborescence.mp4",fullAnim:"vid/arborescence.mp4",description:"A relaxing point-and-click puzzle game where the player must strategically use the keys at their disposal in order to undo all the locks and get all the trees ready for the season.<br/><br/>Every tree sprite and level is procedurally-generated, modelled after binary search trees. As such, every level has at least one solution.",stack:["GameMaker Studio 2"],sourceUrls:[],demoUrls:[{url:"https://quadolorgames.itch.io/arborescence",text:"Download"}]},{id:4,title:"Worker #11812",previewStatic:"img/worker-11812.jpg",previewAnim:"vid/preview/worker-11812.mp4",fullAnim:"vid/worker-11812.mp4",description:'A point-and-drag game inspired by the "paternoster machine" (better known as the "clock scene") from the 1927 film <em>Metropolis</em> by Fritz Lang.<br/><br/> The game was first created with Phaser 3 as an exercise in learning the framework, then it was ported to GameMaker Studio 2 for native builds (Windows, macOS, Linux) after deciding that packing the web app with Electron made it too large.',stack:["Phaser 3","Node.js","Babel","Webpack","GameMaker Studio 2"],sourceUrls:[{url:"https://github.com/mstop4/worker-11812-phaser",text:"Web"},{url:"https://github.com/mstop4/worker-11812-gms",text:"Native"}],demoUrls:[{url:"https://quadolorgames.itch.io/worker-11812",text:"Play"}]},{id:7,title:"dot.Market 2",previewStatic:"img/dotMarket2.png",previewAnim:"vid/preview/dotMarket2.mp4",fullAnim:"vid/dotMarket2.mp4",description:"A fantasy business simulator about the exciting world of pixel art restoration.<br/><br/>Players buy second-hand broken art and the pixels needed to fix them, then sell the restored art for a profit. The value of pixels and pixel art fluctuate depending on market forces, encouraging players to buy low, sell high.",stack:["GameMaker Studio 2"],sourceUrls:[{url:"https://github.com/mstop4/lowrezjam-2018",text:"Source"}],demoUrls:[{url:"https://quadolorgames.itch.io/dotmarket-2",text:"Play"}]},{id:8,title:"Toutatis",previewStatic:"img/toutatis.jpg",previewAnim:"vid/preview/toutatis.mp4",fullAnim:"vid/toutatis.mp4",description:"A collaborative project with Cirrus Studios for Global Game Jam 2017. A bunch of space rocks and UFOs have decided to team up to attack and hate on Earth, and it's up to the player to protect it by clicking or tapping the screen to create waves to fend them off.",stack:["GameMaker Studio 2"],sourceUrls:[],demoUrls:[{url:"https://quadolorgames.itch.io/toutatis",text:"Play"}]}],gn=[{displayText:"Github",url:"https://github.com/mstop4",iconClass:["icon-github"]},{displayText:"itch.io",url:"https://quadolorgames.itch.io/",iconClass:["icon-itchio-textless-black"]}],vn=$t,yn=en,bn=nn,wn=[{displayText:"Email",url:"mailto:jonathan.hs.lam@gmail.com",iconClass:["icon-envelope-o"]},{displayText:"LinkedIn",url:"https://www.linkedin.com/in/jonathanlam4/",iconClass:["icon-linkedin2"]}],Sn=document.querySelector("#contact-list"),kn=document.querySelector("#resume-redux"),Ln=[],_n=bn("external--hidden",function(e){e.classList.remove("external--hidden"),e.classList.contains("external-left")?e.classList.add("external-left--appear"):e.classList.contains("external-right")&&e.classList.add("external-right--appear")}),xn=function(){return function(){var e=yn();wn.forEach(function(t){var n=document.createElement("article");n.classList.add("external","external--hidden"),0===vn()?n.classList.add("external-left"):n.classList.add("external-right"),_n(n,e),Ln.push(n);var r=document.createElement("div");r.classList.add("external-icon");var i=document.createElement("span");i.classList.add(t.iconClass);var o=document.createElement("a");o.href=t.url,o.textContent=t.displayText,o.target="_blank",r.appendChild(i),n.appendChild(r),n.appendChild(o),Sn.appendChild(n)});var t=document.createElement("article");t.classList.add("external","external--hidden"),0===vn()?t.classList.add("external-left"):t.classList.add("external-right"),_n(t,e),Ln.push(t);var n=document.createElement("div");n.classList.add("external-icon");var r=document.createElement("span");r.classList.add("icon-file-text");var i=document.createElement("a");i.href="downloads/Jonathan-Lam-resume.pdf",i.textContent="Resum\xe9",i.target="_blank",n.appendChild(r),t.appendChild(n),t.appendChild(i),kn.appendChild(t)}()},En=function(){var e=yn();Ln.forEach(function(t){_n(t,e)})},jn=en,An=nn,Cn=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(on=document.querySelectorAll(".heading"))||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(on)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}(),On=An("heading--hidden",function(e){e.classList.remove("heading--hidden"),e.classList.contains("heading__left")?e.classList.add("heading__left--appear"):e.classList.contains("heading__right")&&e.classList.add("heading__right--appear")}),Mn=function(){var e=jn();Cn.forEach(function(t){On(t,e)})},Tn=function(){Mn()},Pn=Mn,qn=hn,Gn={root:document.querySelector(".modal"),back:document.querySelector(".modal__back"),front:document.querySelector(".modal__front")},In=!0,Fn=function(){return In},Un=function(e){return In=e},Dn=function(){Gn.back.addEventListener("click",function(){if(Fn()){Un(!1),setTimeout(function(){return Un(!0)},550),Gn.front.classList.remove("modal__front--show"),Gn.back.classList.remove("modal__back--show");var e=document.querySelector("body"),t=-parseInt(e.style.top);e.removeAttribute("style"),e.classList.remove("no-scroll"),window.scrollTo(0,t)}}),Gn.back.addEventListener("transitionend",function(){Gn.back.classList.contains("modal__back--show")||Gn.root.classList.add("modal--hidden")})},Nn=function(e){Un(!1),setTimeout(function(){return Un(!0)},550),Gn.root.classList.remove("modal--hidden"),setTimeout(function(){Gn.front.classList.add("modal__front--show"),Gn.back.classList.add("modal__back--show")},10);for(var t=Gn.front.querySelector(".info__preview-video"),n=t.querySelector("source"),r=Gn.front.querySelector(".info__title"),i=Gn.front.querySelector(".info__text"),o=Gn.front.querySelector(".stack-list"),a=Gn.front.querySelector(".links__container"),c=a.querySelector("#source-column"),s=a.querySelector("#source-links"),l=a.querySelector("#demo-column"),u=a.querySelector("#demo-links");o.firstChild;)o.removeChild(o.firstChild);for(;s.firstChild;)s.removeChild(s.firstChild);for(;u.firstChild;)u.removeChild(u.firstChild);t.poster=qn[e].previewStatic,n.src=qn[e].fullAnim,t.load(),t.play(),r.textContent=qn[e].title,i.innerHTML=qn[e].description,qn[e].stack.forEach(function(e){var t=document.createElement("li");t.textContent=e,o.appendChild(t)}),0<qn[e].sourceUrls.length?(c.classList.remove("links--hidden"),qn[e].sourceUrls.forEach(function(e){var t=document.createElement("li"),n=document.createElement("a");n.textContent=e.text,n.href=e.url,n.target="_blank",t.appendChild(n),s.appendChild(t)})):c.classList.add("links--hidden"),0<qn[e].demoUrls.length?(l.classList.remove("links--hidden"),qn[e].demoUrls.forEach(function(e){var t=document.createElement("li"),n=document.createElement("a");n.innerText=e.text,n.href=e.url,n.target="_blank",t.appendChild(n),u.appendChild(t)})):l.classList.add("links--hidden")},zn=Fn,Rn=[].sort,Wn=[1,2,3];C(C.P+C.F*(n(function(){Wn.sort(void 0)})||!n(function(){Wn.sort(null)})||!((an=Rn)&&n(function(){cn?an.call(null,function(){},1):an.call(null)}))),"Array",{sort:function(e){return void 0===e?Rn.call(Q(this)):Rn.call(Q(this),h(e))}});var Hn=$t,Bn=en,Jn=nn,Vn=Nn,Kn=zn,Yn=hn,Qn=gn,Xn=document.querySelector(".project__list"),Zn=[],$n=document.querySelector("#portfolio-list"),er=[],tr=Jn("external--hidden",function(e){e.classList.remove("external--hidden"),e.classList.contains("external-left")?e.classList.add("external-left--appear"):e.classList.contains("external-right")&&e.classList.add("external-right--appear")}),nr=Jn("project--hidden",function(e){e.classList.remove("project--hidden"),e.classList.contains("project-left")?e.classList.add("project-left--appear"):e.classList.contains("project-right")&&e.classList.add("project-right--appear")}),rr=function(){var e;e=Bn(),Yn.sort(function(e,t){return e.id-t.id}).forEach(function(t,n){var r=document.createElement("article");r.classList.add("project","project--hidden"),r.setAttribute("data-index",n),r.setAttribute("tabindex","0"),0===Hn()?r.classList.add("project-left"):r.classList.add("project-right"),nr(r,e),Zn.push(r);var i=document.createElement("div");i.classList.add("project__preview--container");var o=document.createElement("img");o.classList.add("project__preview--media","project__preview--static"),o.src=t.previewStatic;var a=document.createElement("video");a.classList.add("project__preview--media"),a.setAttribute("loop",""),a.setAttribute("preload","none"),a.setAttribute("playsinline","true"),a.setAttribute("poster",t.previewStatic);var c=document.createElement("source");c.src=t.previewAnim,c.type="video/mp4",r.addEventListener("mouseenter",function(){o.classList.add("project__preview--hidden"),a.muted=!0,a.play()}),r.addEventListener("mouseleave",function(){o.classList.remove("project__preview--hidden"),a.pause()}),r.addEventListener("click",function(){if(Kn()){o.classList.contains("project__preview--hidden")&&(o.classList.remove("project__preview--hidden"),a.pause());var e=document.querySelector("body"),t=Bn();e.style.top=(-t.top).toString()+"px",e.classList.add("no-scroll"),Vn(n)}});var s=document.createElement("div");s.classList.add("project__short-info");var l=document.createElement("h3");l.classList.add("project__title"),l.textContent=t.title,s.appendChild(l),i.appendChild(o),a.appendChild(c),i.appendChild(a),r.appendChild(i),r.appendChild(s),Xn.appendChild(r)}),function(){var e=Bn();Qn.forEach(function(t){var n=document.createElement("article");n.classList.add("external","external--hidden"),0===Hn()?n.classList.add("external-left"):n.classList.add("external-right"),tr(n,e),er.push(n);var r=document.createElement("div");r.classList.add("external-icon");var i=document.createElement("span");i.classList.add(t.iconClass);var o=document.createElement("a");o.href=t.url,o.textContent=t.displayText,o.target="_blank",r.appendChild(i),n.appendChild(r),n.appendChild(o),$n.appendChild(n)})}()},ir=function(){var e=Bn();Zn.forEach(function(t){nr(t,e)}),er.forEach(function(t){tr(t,e)})},or=d.f,ar=Function.prototype,cr=/^\s*function ([^ (]*)/;"name"in ar||r&&or(ar,"name",{configurable:!0,get:function(){try{return(""+this).match(cr)[1]}catch(Er){return""}}});var sr=[{name:"mongoDB",image:"img/tech/mongodb.png"},{name:"express",image:"img/tech/express.png"},{name:"React",image:"img/tech/react.png"},{name:"Node.js",image:"img/tech/nodejs.png"},{name:"Babel",image:"img/tech/babel.png"},{name:"webpack",image:"img/tech/webpack.png"},{name:"Sass",image:"img/tech/sass.png"},{name:"Mocha",image:"img/tech/mocha.png"},{name:"Gulp",image:"img/tech/gulp.png"},{name:"git",image:"img/tech/git.png"},{name:"GameMaker Studio 2",image:"img/tech/gms2.png"},{name:"C++",image:"img/tech/cpp.png"}];var lr=en,ur=nn,dr=document.querySelector(".skills__list"),pr=ur("skills--hidden",function(e){e.classList.contains("skills--hidden")&&(e.classList.remove("skills--hidden"),function(e){return function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}(document.querySelectorAll(".skills__list li")).forEach(function(e,t){setTimeout(function(){e.classList.remove("skills--hidden"),e.classList.add("skills__tech--show")},150*t)}))}),fr=function(){var e=lr();pr(dr,e)},mr=function(){var e;e=document.querySelector(".skills__list"),sr.forEach(function(t){var n=document.createElement("li"),r=document.createElement("img"),i=document.createElement("div");n.classList.add("skills--hidden"),i.innerText=t.name,i.classList.add("skills__tech"),r.src=t.image,r.alt=t.name,n.appendChild(r),n.appendChild(i),e.appendChild(n)}),fr()},hr=fr;var gr=en,vr=tn,yr=nn,br=document.querySelector(".splash__wrapper"),wr=function(e){e.classList.contains("splash--hidden")&&(e.classList.remove("splash--hidden"),function(e){return function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}(document.querySelectorAll(".splash__wrapper > *")).forEach(function(e,t){setTimeout(function(){e.classList.remove("splash--hidden"),e.classList.add("splash--show")},650*t+500)}))},Sr=yr("splash--hidden",wr),kr=function(){gr().top<=vr()&&wr(br)},Lr=function(){var e=gr();Sr(br,e)},_r=Zt,xr=rn;document.addEventListener("DOMContentLoaded",function(){document.documentMode&&!window.MSInputMethodContext&&document.getElementById("is-ie10-").classList.remove("hidden"),_r(.1),Tn(),kr(),fn(),mr(),rr(),xn();var e=xr(function(){ir(),En(),Pn(),mn(),hr(),Lr()},100);document.addEventListener("scroll",e),window.addEventListener("resize",e),window.addEventListener("orientationchange",e),Dn()})}();