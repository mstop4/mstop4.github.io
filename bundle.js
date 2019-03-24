!function(){var e=function(e){return"object"==typeof e?null!==e:"function"==typeof e},t=function(t){if(!e(t))throw TypeError(t+" is not an object!");return t},r=function(e){try{return!!e()}catch(t){return!0}},n=!r(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}),i={},o=i="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=o);var a=i.document,c=e(a)&&e(a.createElement),s=function(e){return c?a.createElement(e):{}},l=!n&&!r(function(){return 7!=Object.defineProperty(s("div"),"a",{get:function(){return 7}}).a}),u=function(t,r){if(!e(t))return t;var n,i;if(r&&"function"==typeof(n=t.toString)&&!e(i=n.call(t)))return i;if("function"==typeof(n=t.valueOf)&&!e(i=n.call(t)))return i;if(!r&&"function"==typeof(n=t.toString)&&!e(i=n.call(t)))return i;throw TypeError("Can't convert object to primitive value")},d={},p=Object.defineProperty;d.f=n?Object.defineProperty:function(e,r,n){if(t(e),r=u(r,!0),t(n),l)try{return p(e,r,n)}catch(i){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(e[r]=n.value),e};var f=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},m=function(e,t,r){t in e?d.f(e,t,f(0,r)):e[t]=r},h=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e},v=function(e,t,r){if(h(e),void 0===t)return e;switch(r){case 1:return function(r){return e.call(t,r)};case 2:return function(r,n){return e.call(t,r,n)};case 3:return function(r,n,i){return e.call(t,r,n,i)}}return function(){return e.apply(t,arguments)}},g={},y=g={version:"2.6.3"};"number"==typeof __e&&(__e=y);var b,w=n?function(e,t,r){return d.f(e,t,f(1,r))}:function(e,t,r){return e[t]=r,e},S={}.hasOwnProperty,_=function(e,t){return S.call(e,t)},k=0,L=Math.random(),j=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++k+L).toString(36))},x=j("src"),E=Function.toString,A=(""+E).split("toString");g.inspectSource=function(e){return E.call(e)},(b=function(e,t,r,n){var o="function"==typeof r;o&&(_(r,"name")||w(r,"name",t)),e[t]!==r&&(o&&(_(r,x)||w(r,x,e[t]?""+e[t]:A.join(String(t)))),e===i?e[t]=r:n?e[t]?e[t]=r:w(e,t,r):(delete e[t],w(e,t,r)))})(Function.prototype,"toString",function(){return"function"==typeof this&&this[x]||E.call(this)});var O={},C=function(e,t,r){var n,o,a,c,s=e&C.F,l=e&C.G,u=e&C.S,d=e&C.P,p=e&C.B,f=l?i:u?i[t]||(i[t]={}):(i[t]||{}).prototype,m=l?g:g[t]||(g[t]={}),h=m.prototype||(m.prototype={});for(n in l&&(r=t),r)a=((o=!s&&f&&void 0!==f[n])?f:r)[n],c=p&&o?v(a,i):d&&"function"==typeof a?v(Function.call,a):a,f&&b(f,n,a,e&C.U),m[n]!=a&&w(m,n,c),d&&h[n]!=a&&(h[n]=a)};i.core=g,C.F=1,C.G=2,C.S=4,C.P=8,C.B=16,C.W=32,C.U=64,C.R=128,O=C;var M,P={},T=i["__core-js_shared__"]||(i["__core-js_shared__"]={});(M=function(e,t){return T[e]||(T[e]=void 0!==t?t:{})})("versions",[]).push({version:g.version,mode:"global",copyright:"\xa9 2019 Denis Pushkarev (zloirock.ru)"});var F={},U=M("wks"),z=i.Symbol,q="function"==typeof z;(F=function(e){return U[e]||(U[e]=q&&z[e]||(q?z:j)("Symbol."+e))}).store=U;var G=F("iterator"),I=Array.prototype,D=function(e,r,n,i){try{return i?r(t(n)[0],n[1]):r(n)}catch(a){var o=e.return;throw void 0!==o&&t(o.call(e)),a}},N=F("iterator"),R=!1;try{var B=[7][N]();B.return=function(){R=!0},Array.from(B,function(){throw 2})}catch(cn){}var V=Math.ceil,W=Math.floor,H=function(e){return isNaN(e=+e)?0:(e>0?W:V)(e)},J=Math.min,K=function(e){return e>0?J(H(e),9007199254740991):0},Y=function(e){if(null==e)throw TypeError("Can't call method on  "+e);return e},Q=function(e){return Object(Y(e))},X={}.toString,Z=function(e){return X.call(e).slice(8,-1)},$=F("toStringTag"),ee="Arguments"==Z(function(){return arguments}()),te=F("iterator"),re=g.getIteratorMethod=function(e){if(null!=e)return e[te]||e["@@iterator"]||P[function(e){var t,r,n;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(r=function(e,t){try{return e[t]}catch(cn){}}(t=Object(e),$))?r:ee?Z(t):"Object"==(n=Z(t))&&"function"==typeof t.callee?"Arguments":n}(e)]};O(O.S+O.F*!function(e,t){if(!t&&!R)return!1;var r=!1;try{var n=[7],i=n[N]();i.next=function(){return{done:r=!0}},n[N]=function(){return i},e(n)}catch(cn){}return r}(function(e){Array.from(e)}),"Array",{from:function(e){var t,r,n,i,o,a=Q(e),c="function"==typeof this?this:Array,s=arguments.length,l=s>1?arguments[1]:void 0,u=void 0!==l,d=0,p=re(a);if(u&&(l=v(l,s>2?arguments[2]:void 0,2)),null==p||c==Array&&(void 0!==(o=p)&&(P.Array===o||I[G]===o)))for(r=new c(t=K(a.length));t>d;d++)m(r,d,u?l(a[d],d):a[d]);else for(i=p.call(a),r=new c;!(n=i.next()).done;d++)m(r,d,u?D(i,l,[n.value,d],!0):n.value);return r.length=d,r}});var ne=function(){var e=t(this),r="";return e.global&&(r+="g"),e.ignoreCase&&(r+="i"),e.multiline&&(r+="m"),e.unicode&&(r+="u"),e.sticky&&(r+="y"),r};n&&"g"!=/./g.flags&&d.f(RegExp.prototype,"flags",{configurable:!0,get:ne});var ie=/./.toString,oe=function(e){b(RegExp.prototype,"toString",e,!0)};r(function(){return"/a/b"!=ie.call({source:"a",flags:"b"})})?oe(function(){var e=t(this);return"/".concat(e.source,"/","flags"in e?e.flags:!n&&e instanceof RegExp?ne.call(e):void 0)}):"toString"!=ie.name&&oe(function(){return ie.call(this)});var ae,ce,se="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","),le=i.document,ue=le&&le.documentElement,de=Math.max,pe=Math.min,fe=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==Z(e)?e.split(""):Object(e)},me=function(e){return fe(Y(e))},he=M("keys"),ve=function(e){return he[e]||(he[e]=j(e))},ge=(ae=!1,function(e,t,r){var n,i=me(e),o=K(i.length),a=function(e,t){return(e=H(e))<0?de(e+t,0):pe(e,t)}(r,o);if(ae&&t!=t){for(;o>a;)if((n=i[a++])!=n)return!0}else for(;o>a;a++)if((ae||a in i)&&i[a]===t)return ae||a||0;return!ae&&-1}),ye=ve("IE_PROTO"),be=function(e,t){var r,n=me(e),i=0,o=[];for(r in n)r!=ye&&_(n,r)&&o.push(r);for(;t.length>i;)_(n,r=t[i++])&&(~ge(o,r)||o.push(r));return o},we=Object.keys||function(e){return be(e,se)},Se=n?Object.defineProperties:function(e,r){t(e);for(var n,i=we(r),o=i.length,a=0;o>a;)d.f(e,n=i[a++],r[n]);return e},_e=ve("IE_PROTO"),ke=function(){},Le=function(){var e,t=s("iframe"),r=se.length;for(t.style.display="none",ue.appendChild(t),t.src="javascript:",(e=t.contentWindow.document).open(),e.write("<script>document.F=Object<\/script>"),e.close(),Le=e.F;r--;)delete Le.prototype[se[r]];return Le()},je=Object.create||function(e,r){var n;return null!==e?(ke.prototype=t(e),n=new ke,ke.prototype=null,n[_e]=e):n=Le(),void 0===r?n:Se(n,r)},xe=d.f,Ee=F("toStringTag"),Ae=function(e,t,r){e&&!_(e=r?e:e.prototype,Ee)&&xe(e,Ee,{configurable:!0,value:t})},Oe={};w(Oe,F("iterator"),function(){return this}),ce=function(e,t,r){e.prototype=je(Oe,{next:f(1,r)}),Ae(e,t+" Iterator")};var Ce,Me=ve("IE_PROTO"),Pe=Object.prototype,Te=Object.getPrototypeOf||function(e){return e=Q(e),_(e,Me)?e[Me]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?Pe:null},Fe=F("iterator"),Ue=!([].keys&&"next"in[].keys()),ze=function(){return this},qe=function(e,t,r,n,i,o,a){ce(r,t,n);var c,s,l,u=function(e){if(!Ue&&e in m)return m[e];switch(e){case"keys":case"values":return function(){return new r(this,e)}}return function(){return new r(this,e)}},d=t+" Iterator",p="values"==i,f=!1,m=e.prototype,h=m[Fe]||m["@@iterator"]||i&&m[i],v=h||u(i),g=i?p?u("entries"):v:void 0,y="Array"==t&&m.entries||h;if(y&&(l=Te(y.call(new e)))!==Object.prototype&&l.next&&(Ae(l,d,!0),"function"==typeof l[Fe]||w(l,Fe,ze)),p&&h&&"values"!==h.name&&(f=!0,v=function(){return h.call(this)}),!Ue&&!f&&m[Fe]||w(m,Fe,v),P[t]=v,P[d]=ze,i)if(c={values:p?v:u("values"),keys:o?v:u("keys"),entries:g},a)for(s in c)s in m||b(m,s,c[s]);else O(O.P+O.F*(Ue||f),t,c);return c},Ge=(Ce=!0,function(e,t){var r,n,i=String(Y(e)),o=H(t),a=i.length;return o<0||o>=a?Ce?"":void 0:(r=i.charCodeAt(o))<55296||r>56319||o+1===a||(n=i.charCodeAt(o+1))<56320||n>57343?Ce?i.charAt(o):r:Ce?i.slice(o,o+2):n-56320+(r-55296<<10)+65536});qe(String,"String",function(e){this._t=String(e),this._i=0},function(){var e,t=this._t,r=this._i;return r>=t.length?{value:void 0,done:!0}:(e=Ge(t,r),this._i+=e.length,{value:e,done:!1})});var Ie={};Ie.f=Object.getOwnPropertySymbols;var De={};De.f={}.propertyIsEnumerable;var Ne,Re=Array.isArray||function(e){return"Array"==Z(e)},Be=j("meta"),Ve=(d.f,Object.isExtensible||function(){return!0}),We=(r(function(){return Ve(Object.preventExtensions({}))}),Ne={KEY:Be},{}),He=Object.getOwnPropertyDescriptor;We.f=n?He:function(e,t){if(e=me(e),t=u(t,!0),l)try{return He(e,t)}catch(cn){}if(_(e,t))return f(!De.f.call(e,t),e[t])};var Je={},Ke=se.concat("length","prototype");Je.f=Object.getOwnPropertyNames||function(e){return be(e,Ke)};var Ye={},Qe=Je.f,Xe={}.toString,Ze="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];Ye.f=function(e){return Ze&&"[object Window]"==Xe.call(e)?function(e){try{return Qe(e)}catch(cn){return Ze.slice()}}(e):Qe(me(e))};var $e={};$e.f=F;var et=d.f,tt=function(e){var t=g.Symbol||(g.Symbol=i.Symbol||{});"_"==e.charAt(0)||e in t||et(t,e,{value:$e.f(e)})},rt=Ne.KEY,nt=We.f,it=d.f,ot=Ye.f,at=i.Symbol,ct=i.JSON,st=ct&&ct.stringify,lt=F("_hidden"),ut=F("toPrimitive"),dt={}.propertyIsEnumerable,pt=M("symbol-registry"),ft=M("symbols"),mt=M("op-symbols"),ht=Object.prototype,vt="function"==typeof at,gt=i.QObject,yt=!gt||!gt.prototype||!gt.prototype.findChild,bt=n&&r(function(){return 7!=je(it({},"a",{get:function(){return it(this,"a",{value:7}).a}})).a})?function(e,t,r){var n=nt(ht,t);n&&delete ht[t],it(e,t,r),n&&e!==ht&&it(ht,t,n)}:it,wt=function(e){var t=ft[e]=je(at.prototype);return t._k=e,t},St=vt&&"symbol"==typeof at.iterator?function(e){return"symbol"==typeof e}:function(e){return e instanceof at},_t=function(e,r,n){return e===ht&&_t(mt,r,n),t(e),r=u(r,!0),t(n),_(ft,r)?(n.enumerable?(_(e,lt)&&e[lt][r]&&(e[lt][r]=!1),n=je(n,{enumerable:f(0,!1)})):(_(e,lt)||it(e,lt,f(1,{})),e[lt][r]=!0),bt(e,r,n)):it(e,r,n)},kt=function(e,r){t(e);for(var n,i=function(e){var t=we(e),r=Ie.f;if(r)for(var n,i=r(e),o=De.f,a=0;i.length>a;)o.call(e,n=i[a++])&&t.push(n);return t}(r=me(r)),o=0,a=i.length;a>o;)_t(e,n=i[o++],r[n]);return e},Lt=function(e){var t=dt.call(this,e=u(e,!0));return!(this===ht&&_(ft,e)&&!_(mt,e))&&(!(t||!_(this,e)||!_(ft,e)||_(this,lt)&&this[lt][e])||t)},jt=function(e,t){if(e=me(e),t=u(t,!0),e!==ht||!_(ft,t)||_(mt,t)){var r=nt(e,t);return!r||!_(ft,t)||_(e,lt)&&e[lt][t]||(r.enumerable=!0),r}},xt=function(e){for(var t,r=ot(me(e)),n=[],i=0;r.length>i;)_(ft,t=r[i++])||t==lt||t==rt||n.push(t);return n},Et=function(e){for(var t,r=e===ht,n=ot(r?mt:me(e)),i=[],o=0;n.length>o;)!_(ft,t=n[o++])||r&&!_(ht,t)||i.push(ft[t]);return i};vt||(b((at=function(){if(this instanceof at)throw TypeError("Symbol is not a constructor!");var e=j(arguments.length>0?arguments[0]:void 0),t=function(r){this===ht&&t.call(mt,r),_(this,lt)&&_(this[lt],e)&&(this[lt][e]=!1),bt(this,e,f(1,r))};return n&&yt&&bt(ht,e,{configurable:!0,set:t}),wt(e)}).prototype,"toString",function(){return this._k}),We.f=jt,d.f=_t,Je.f=Ye.f=xt,De.f=Lt,Ie.f=Et,n&&b(ht,"propertyIsEnumerable",Lt,!0),$e.f=function(e){return wt(F(e))}),O(O.G+O.W+O.F*!vt,{Symbol:at});for(var At="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),Ot=0;At.length>Ot;)F(At[Ot++]);for(var Ct=we(F.store),Mt=0;Ct.length>Mt;)tt(Ct[Mt++]);O(O.S+O.F*!vt,"Symbol",{for:function(e){return _(pt,e+="")?pt[e]:pt[e]=at(e)},keyFor:function(e){if(!St(e))throw TypeError(e+" is not a symbol!");for(var t in pt)if(pt[t]===e)return t},useSetter:function(){yt=!0},useSimple:function(){yt=!1}}),O(O.S+O.F*!vt,"Object",{create:function(e,t){return void 0===t?je(e):kt(je(e),t)},defineProperty:_t,defineProperties:kt,getOwnPropertyDescriptor:jt,getOwnPropertyNames:xt,getOwnPropertySymbols:Et}),ct&&O(O.S+O.F*(!vt||r(function(){var e=at();return"[null]"!=st([e])||"{}"!=st({a:e})||"{}"!=st(Object(e))})),"JSON",{stringify:function(t){for(var r,n,i=[t],o=1;arguments.length>o;)i.push(arguments[o++]);if(n=r=i[1],(e(r)||void 0!==t)&&!St(t))return Re(r)||(r=function(e,t){if("function"==typeof n&&(t=n.call(this,e,t)),!St(t))return t}),i[1]=r,st.apply(ct,i)}}),at.prototype[ut]||w(at.prototype,ut,at.prototype.valueOf),Ae(at,"Symbol"),Ae(Math,"Math",!0),Ae(i.JSON,"JSON",!0),tt("asyncIterator");var Pt,Tt=F("unscopables"),Ft=Array.prototype;null==Ft[Tt]&&w(Ft,Tt,{}),Pt=function(e){Ft[Tt][e]=!0};var Ut,zt=function(e,t){return{value:t,done:!!e}};Ut=qe(Array,"Array",function(e,t){this._t=me(e),this._i=0,this._k=t},function(){var e=this._t,t=this._k,r=this._i++;return!e||r>=e.length?(this._t=void 0,zt(1)):zt(0,"keys"==t?r:"values"==t?e[r]:[r,e[r]])},"values"),P.Arguments=P.Array,Pt("keys"),Pt("values"),Pt("entries");for(var qt=F("iterator"),Gt=F("toStringTag"),It=P.Array,Dt={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},Nt=we(Dt),Rt=0;Rt<Nt.length;Rt++){var Bt,Vt=Nt[Rt],Wt=Dt[Vt],Ht=i[Vt],Jt=Ht&&Ht.prototype;if(Jt&&(Jt[qt]||w(Jt,qt,It),Jt[Gt]||w(Jt,Gt,Vt),P[Vt]=It,Wt))for(Bt in Ut)Jt[Bt]||b(Jt,Bt,Ut[Bt],!0)}var Kt={};Object.defineProperty(Kt,"__esModule",{value:!0}),Kt.default=void 0,Kt.default=[{bullet:"\ud83d\uddbc\ufe0f",text:"Developer of games and web applications from Toronto who believes the marriage of code, art, and music can create beautiful things"},{bullet:"\ud83c\udf10",text:"Fascinated by the Internet of things and the web as a programmable platform"},{bullet:"\ud83d\udcc0",text:"Enjoys creating multimedia experiences"},{bullet:"\ud83d\udee0\ufe0f",text:"Excited to learn new technologies and coding techniques and teaching others"},{bullet:"\ud83d\udcc5",text:"Strives to exercise my creativity regularly, be it code, art, or music"}];var Yt,Qt={};Object.defineProperty(Qt,"__esModule",{value:!0}),Qt.throttle=Qt.toggleVisibilityFactory=Qt.getScrollBuffer=Qt.getScrollPosition=Qt.coinFlip=Qt.initScrollBuffer=void 0,Qt.initScrollBuffer=function(e){Xt(e),document.addEventListener("scroll",function(){Xt(e)})};var Xt=function(e){return Yt=Zt().height*e};Qt.getScrollBuffer=function(){return Yt},Qt.coinFlip=function(){return Math.floor(2*Math.random())};var Zt=function(){return{height:window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,width:window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth}},$t=function(){var e=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;return{top:e,bottom:e+(window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight)}};Qt.getScrollPosition=$t,Qt.toggleVisibilityFactory=function(e,t){return function(r,n){var i=-parseInt(document.querySelector("body").style.top)||0,o=r.offsetTop,a=r.offsetTop+r.offsetHeight;r.classList.contains(e)&&(o-Yt>n.top+i&&o+Yt<n.bottom+i||a+Yt<n.bottom+i&&a-Yt>n.top+i)&&t(r)}},Qt.throttle=function(e,t){var r=0,n=null;return function(){var i=Date.now();0<r&&i-r<t?(clearTimeout(n),n=setTimeout(function(){r=i,e.apply()},t)):(r=i,e.apply())}};var er={};Object.defineProperty(er,"__esModule",{value:!0}),er.handleUpdate=er.initialize=void 0;var tr,rr=(tr=Kt)&&tr.__esModule?tr:{default:tr};var nr=document.querySelector(".bio__text");er.initialize=function(){ir(),ar()};var ir=function(){rr.default.forEach(function(e){var t=document.createElement("li");t.setAttribute("data-bullet",e.bullet),t.classList.add("bio__text--hidden"),t.textContent=e.text,nr.appendChild(t)})},or=(0,Qt.toggleVisibilityFactory)("bio__text--hidden",function(e){e.classList.contains("bio__text--hidden")&&(e.classList.remove("bio__text--hidden"),function(e){return function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}(document.querySelectorAll(".bio__text li")).forEach(function(e,t){setTimeout(function(){e.classList.remove("bio__text--hidden"),e.classList.add("bio__text-right--appear")},250*t)}))}),ar=function(){var e=(0,Qt.getScrollPosition)();or(nr,e)};er.handleUpdate=ar;var cr={};Object.defineProperty(cr,"__esModule",{value:!0}),cr.contacts=cr.portfolios=cr.projects=void 0,cr.projects=[{id:5,title:"GML Script Wizard",previewStatic:"img/gml-script-wizard.jpg",previewAnim:"vid/preview/gml-script-wizard.mp4",fullAnim:"vid/gml-script-wizard.mp4",description:"A tool that will help users generate and modify GML script headers just be filling in a few fields.<br/><br/>Add, remove, and rearrange arguments and additional local variables with ease, then copy the script template with a simple click of a button. Conforms to both GM:S 1.4 and GMS 2 (JSDoc) documentation styles for documenting scripts.",stack:["React","Redux","Node.js","Material-UI","Babel","Webpack","Electron"],sourceUrls:[{url:"https://github.com/mstop4/gml-script-wizard",text:"Source"}],demoUrls:[{url:"https://mstop4.github.io/gml-script-wizard",text:"Demo"}]},{id:1,title:"GIFcentration",previewStatic:"img/gifcentration.jpg",previewAnim:"vid/preview/gifcentration.mp4",fullAnim:"vid/gifcentration.mp4",description:"Concentration (pairs-matching) game powered by Giphy and the MERN stack.<br/><br/>The Client app allows users to search for GIFs that populate the cards in a game on Concentration. The Server app relays results and queries between the Client and the Giphy API and keeps track of the most popular searches.",stack:["MongoDB","Mongoose","Express","React","Node.js","Giphy JS SDK","Redis","Chance.js"],sourceUrls:[{url:"https://github.com/mstop4/gifcentration-client",text:"Client"},{url:"https://github.com/mstop4/gifcentration-server",text:"Server"}],demoUrls:[{url:"https://mstop4.github.io/gifcentration-client",text:"Play"}]},{id:2,title:"Fractured Flicks",previewStatic:"img/fractured-flicks.jpg",previewAnim:"vid/preview/fractured-flicks.mp4",fullAnim:"vid/fractured-flicks.mp4",description:'A jigsaw puzzle-like web game where you put pieces of a video back together. Contains multiple puzzles of vary difficulty levels and saves the best solve times locally in the user\'s browser.<br/><br/>It was very well received in <a href="https://itch.io/jam/finally-finish-something-2018/rate/181663" target=_blank>Finally Finish Something Jam 2018</a>, ranked 3rd place overall out of 109 entries.',stack:["Pixi.js","pixi-sound","Node.js","Babel","Webpack","Amazon S3"],sourceUrls:[{url:"https://github.com/mstop4/fractured-flicks",text:"Source"}],demoUrls:[{url:"https://mstop4.github.io/fractured-flicks",text:"Play"}]},{id:0,title:"Sync Timer",previewStatic:"img/sync-timer.jpg",previewAnim:"vid/preview/sync-timer.mp4",fullAnim:"vid/sync-timer.mp4",description:"An online stopwatch microservice where multiple groups of users or parties can each create and observe a common timer hosted on an express server on multiple devices via web sockets.<br/><br/>During my time as a teaching assistant at the University of Toronto, I had students needing to time the length of their presentations. Since the presenters and the audience (myself included), were facing in opposite directions, a timer on a single screen did not suffice. That gave me the idea to build Sync Timer, which solves that problem by running timers on a central server, which is broadcasted to multiple devices for different viewers.<br/><br/>It caught the attention of lead instructor of my class and he loved the idea.",stack:["Node.js","Express","Socket.io","Pug","Sass","Mocha","Chai","Puppeteer","jsdom"],sourceUrls:[{url:"https://github.com/mstop4/sync-timer",text:"Source"}],demoUrls:[{url:"https://sync-timer.herokuapp.com",text:"Demo"}]},{id:3,title:"FMODGMS",previewStatic:"img/fmodgms.jpg",previewAnim:"vid/preview/fmodgms.mp4",fullAnim:"vid/fmodgms.mp4",description:"A <em>GameMaker: Studio 1.4</em> and <em>GameMaker Studio 2</em> extension that provides GML bindings to the FMOD Studio low-level API. Can be used in Windows, macOS, and Linux games.<br/><br/>My longest running project, it was started about a decade ago as a means to extend the audio capabilities of <em>Game Maker 8.0</em> and has been maintained and updated as newer editions of <em>GameMaker</em> have been released.",stack:["FMOD Low Level API","GameMaker Studio 2","GameMaker: Studio 1.4"],sourceUrls:[{url:"https://github.com/mstop4/fmodgms",text:"Source"}],demoUrls:[{url:"https://quadolorgames.itch.io/fmodgms",text:"Download"}]},{id:6,title:"Arborescence",previewStatic:"img/arborescence.png",previewAnim:"vid/preview/arborescence.mp4",fullAnim:"vid/arborescence.mp4",description:"A relaxing point-and-click puzzle game where the player must strategically use the keys at their disposal in order to undo all the locks and get all the trees ready for the season.<br/><br/>Every tree sprite and level is procedurally-generated, modelled after binary search trees. As such, every level has at least one solution.",stack:["GameMaker Studio 2"],sourceUrls:[],demoUrls:[{url:"https://quadolorgames.itch.io/arborescence",text:"Download"}]},{id:4,title:"Worker #11812",previewStatic:"img/worker-11812.jpg",previewAnim:"vid/preview/worker-11812.mp4",fullAnim:"vid/worker-11812.mp4",description:'A point-and-drag game inspired by the "paternoster machine" (better known as the "clock scene") from the 1927 film <em>Metropolis</em> by Fritz Lang.<br/><br/> The game was first created with Phaser 3 as an exercise in learning the framework, then it was ported to GameMaker Studio 2 for native builds (Windows, macOS, Linux) after deciding that packing the web app with Electron made it too large.',stack:["Phaser 3","Node.js","Babel","Webpack","GameMaker Studio 2"],sourceUrls:[{url:"https://github.com/mstop4/worker-11812-phaser",text:"Web"},{url:"https://github.com/mstop4/worker-11812-gms",text:"Native"}],demoUrls:[{url:"https://quadolorgames.itch.io/worker-11812",text:"Play"}]},{id:7,title:"dot.Market 2",previewStatic:"img/dotMarket2.png",previewAnim:"vid/preview/dotMarket2.mp4",fullAnim:"vid/dotMarket2.mp4",description:"A fantasy business simulator about the exciting world of pixel art restoration.<br/><br/>Players buy second-hand broken art and the pixels needed to fix them, then sell the restored art for a profit. The value of pixels and pixel art fluctuate depending on market forces, encouraging players to buy low, sell high.",stack:["GameMaker Studio 2"],sourceUrls:[{url:"https://github.com/mstop4/lowrezjam-2018",text:"Source"}],demoUrls:[{url:"https://quadolorgames.itch.io/dotmarket-2",text:"Play"}]},{id:8,title:"Toutatis",previewStatic:"img/toutatis.jpg",previewAnim:"vid/preview/toutatis.mp4",fullAnim:"vid/toutatis.mp4",description:"A collaborative project with Cirrus Studios for Global Game Jam 2017. A bunch of space rocks and UFOs have decided to team up to attack and hate on Earth, and it's up to the player to protect it by clicking or tapping the screen to create waves to fend them off.",stack:["GameMaker Studio 2"],sourceUrls:[],demoUrls:[{url:"https://quadolorgames.itch.io/toutatis",text:"Play"}]}],cr.portfolios=[{displayText:"Github",url:"https://github.com/mstop4",iconClass:["icon-github"]},{displayText:"itch.io",url:"https://quadolorgames.itch.io/",iconClass:["icon-itchio-textless-black"]}],cr.contacts=[{displayText:"Email",url:"mailto:jonathan.hs.lam@gmail.com",iconClass:["icon-envelope-o"]},{displayText:"LinkedIn",url:"https://www.linkedin.com/in/jonathanlam4/",iconClass:["icon-linkedin2"]}];var sr={};Object.defineProperty(sr,"__esModule",{value:!0}),sr.handleUpdate=sr.initialize=void 0;var lr=document.querySelector("#contact-list"),ur=document.querySelector("#resume-redux"),dr=[];sr.initialize=function(){return pr()};var pr=function(){var e=(0,Qt.getScrollPosition)();cr.contacts.forEach(function(t){var r=document.createElement("article");r.classList.add("external","external--hidden"),0===(0,Qt.coinFlip)()?r.classList.add("external-left"):r.classList.add("external-right"),fr(r,e),dr.push(r);var n=document.createElement("div");n.classList.add("external-icon");var i=document.createElement("span");i.classList.add(t.iconClass);var o=document.createElement("a");o.href=t.url,o.textContent=t.displayText,o.target="_blank",n.appendChild(i),r.appendChild(n),r.appendChild(o),lr.appendChild(r)});var t=document.createElement("article");t.classList.add("external","external--hidden"),0===(0,Qt.coinFlip)()?t.classList.add("external-left"):t.classList.add("external-right"),fr(t,e),dr.push(t);var r=document.createElement("div");r.classList.add("external-icon");var n=document.createElement("span");n.classList.add("icon-file-text");var i=document.createElement("a");i.href="downloads/Jonathan_Lam_resume.pdf",i.textContent="Resum\xe9",i.target="_blank",r.appendChild(n),t.appendChild(r),t.appendChild(i),ur.appendChild(t)},fr=(0,Qt.toggleVisibilityFactory)("external--hidden",function(e){e.classList.remove("external--hidden"),e.classList.contains("external-left")?e.classList.add("external-left--appear"):e.classList.contains("external-right")&&e.classList.add("external-right--appear")});sr.handleUpdate=function(){var e=(0,Qt.getScrollPosition)();dr.forEach(function(t){fr(t,e)})};var mr={};Object.defineProperty(mr,"__esModule",{value:!0}),mr.handleUpdate=mr.initialize=void 0;var hr,vr=function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(hr=document.querySelectorAll(".heading"))||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(hr)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}();mr.initialize=function(){yr()};var gr=(0,Qt.toggleVisibilityFactory)("heading--hidden",function(e){e.classList.remove("heading--hidden"),e.classList.contains("heading__left")?e.classList.add("heading__left--appear"):e.classList.contains("heading__right")&&e.classList.add("heading__right--appear")}),yr=function(){var e=(0,Qt.getScrollPosition)();vr.forEach(function(t){gr(t,e)})};mr.handleUpdate=yr;var br={};Object.defineProperty(br,"__esModule",{value:!0}),br.setCanClick=br.getCanClick=br.updateModal=br.initialize=void 0;var wr={root:document.querySelector(".modal"),back:document.querySelector(".modal__back"),front:document.querySelector(".modal__front")},Sr=!0,_r=function(){return Sr};br.getCanClick=_r;var kr=function(e){return Sr=e};br.setCanClick=kr,br.initialize=function(){wr.back.addEventListener("click",function(){if(_r()){kr(!1),setTimeout(function(){return kr(!0)},550),wr.front.classList.remove("modal__front--show"),wr.back.classList.remove("modal__back--show");var e=document.querySelector("body"),t=-parseInt(e.style.top);e.removeAttribute("style"),e.classList.remove("no-scroll"),window.scrollTo(0,t)}}),wr.back.addEventListener("transitionend",function(){wr.back.classList.contains("modal__back--show")||wr.root.classList.add("modal--hidden")})},br.updateModal=function(e){kr(!1),setTimeout(function(){return kr(!0)},550),wr.root.classList.remove("modal--hidden"),setTimeout(function(){wr.front.classList.add("modal__front--show"),wr.back.classList.add("modal__back--show")},10);for(var t=wr.front.querySelector(".info__preview-video"),r=t.querySelector("source"),n=wr.front.querySelector(".info__title"),i=wr.front.querySelector(".info__text"),o=wr.front.querySelector(".stack-list"),a=wr.front.querySelector(".links__container"),c=a.querySelector("#source-column"),s=a.querySelector("#source-links"),l=a.querySelector("#demo-column"),u=a.querySelector("#demo-links");o.firstChild;)o.removeChild(o.firstChild);for(;s.firstChild;)s.removeChild(s.firstChild);for(;u.firstChild;)u.removeChild(u.firstChild);t.poster=cr.projects[e].previewStatic,r.src=cr.projects[e].fullAnim,t.load(),t.play(),n.textContent=cr.projects[e].title,i.innerHTML=cr.projects[e].description,cr.projects[e].stack.forEach(function(e){var t=document.createElement("li");t.textContent=e,o.appendChild(t)}),0<cr.projects[e].sourceUrls.length?(c.classList.remove("links--hidden"),cr.projects[e].sourceUrls.forEach(function(e){var t=document.createElement("li"),r=document.createElement("a");r.textContent=e.text,r.href=e.url,r.target="_blank",t.appendChild(r),s.appendChild(t)})):c.classList.add("links--hidden"),0<cr.projects[e].demoUrls.length?(l.classList.remove("links--hidden"),cr.projects[e].demoUrls.forEach(function(e){var t=document.createElement("li"),r=document.createElement("a");r.innerText=e.text,r.href=e.url,r.target="_blank",t.appendChild(r),u.appendChild(t)})):l.classList.add("links--hidden")};var Lr,jr,xr=[].sort,Er=[1,2,3];O(O.P+O.F*(r(function(){Er.sort(void 0)})||!r(function(){Er.sort(null)})||!((Lr=xr)&&r(function(){jr?Lr.call(null,function(){},1):Lr.call(null)}))),"Array",{sort:function(e){return void 0===e?xr.call(Q(this)):xr.call(Q(this),h(e))}});var Ar={};Object.defineProperty(Ar,"__esModule",{value:!0}),Ar.handleUpdate=Ar.initialize=void 0;var Or=document.querySelector(".project__list"),Cr=[],Mr=document.querySelector("#portfolio-list"),Pr=[];Ar.initialize=function(){Tr(),Fr()};var Tr=function(){var e=(0,Qt.getScrollPosition)();cr.projects.sort(function(e,t){return e.id-t.id}).forEach(function(t,r){var n=document.createElement("article");n.classList.add("project","project--hidden"),n.setAttribute("data-index",r),n.setAttribute("tabindex","0"),0===(0,Qt.coinFlip)()?n.classList.add("project-left"):n.classList.add("project-right"),zr(n,e),Cr.push(n);var i=document.createElement("div");i.classList.add("project__preview--container");var o=document.createElement("img");o.classList.add("project__preview--media","project__preview--static"),o.src=t.previewStatic;var a=document.createElement("video");a.classList.add("project__preview--media"),a.setAttribute("loop",""),a.setAttribute("preload","none"),a.setAttribute("playsinline","true"),a.setAttribute("poster",t.previewStatic);var c=document.createElement("source");c.src=t.previewAnim,c.type="video/mp4",n.addEventListener("mouseenter",function(){o.classList.add("project__preview--hidden"),a.muted=!0,a.play()}),n.addEventListener("mouseleave",function(){o.classList.remove("project__preview--hidden"),a.pause()}),n.addEventListener("click",function(){if((0,br.getCanClick)()){o.classList.contains("project__preview--hidden")&&(o.classList.remove("project__preview--hidden"),a.pause());var e=document.querySelector("body"),t=(0,Qt.getScrollPosition)();e.style.top=(-t.top).toString()+"px",e.classList.add("no-scroll"),(0,br.updateModal)(r)}});var s=document.createElement("div");s.classList.add("project__short-info");var l=document.createElement("h3");l.classList.add("project__title"),l.textContent=t.title,s.appendChild(l),i.appendChild(o),a.appendChild(c),i.appendChild(a),n.appendChild(i),n.appendChild(s),Or.appendChild(n)})},Fr=function(){var e=(0,Qt.getScrollPosition)();cr.portfolios.forEach(function(t){var r=document.createElement("article");r.classList.add("external","external--hidden"),0===(0,Qt.coinFlip)()?r.classList.add("external-left"):r.classList.add("external-right"),Ur(r,e),Pr.push(r);var n=document.createElement("div");n.classList.add("external-icon");var i=document.createElement("span");i.classList.add(t.iconClass);var o=document.createElement("a");o.href=t.url,o.textContent=t.displayText,o.target="_blank",n.appendChild(i),r.appendChild(n),r.appendChild(o),Mr.appendChild(r)})},Ur=(0,Qt.toggleVisibilityFactory)("external--hidden",function(e){e.classList.remove("external--hidden"),e.classList.contains("external-left")?e.classList.add("external-left--appear"):e.classList.contains("external-right")&&e.classList.add("external-right--appear")}),zr=(0,Qt.toggleVisibilityFactory)("project--hidden",function(e){e.classList.remove("project--hidden"),e.classList.contains("project-left")?e.classList.add("project-left--appear"):e.classList.contains("project-right")&&e.classList.add("project-right--appear")});Ar.handleUpdate=function(){var e=(0,Qt.getScrollPosition)();Cr.forEach(function(t){zr(t,e)}),Pr.forEach(function(t){Ur(t,e)})};var qr=d.f,Gr=Function.prototype,Ir=/^\s*function ([^ (]*)/;"name"in Gr||n&&qr(Gr,"name",{configurable:!0,get:function(){try{return(""+this).match(Ir)[1]}catch(cn){return""}}});var Dr={};Object.defineProperty(Dr,"__esModule",{value:!0}),Dr.default=void 0,Dr.default=[{name:"mongoDB",image:"img/tech/mongodb.png"},{name:"express",image:"img/tech/express.png"},{name:"React",image:"img/tech/react.png"},{name:"Node.js",image:"img/tech/nodejs.png"},{name:"Babel",image:"img/tech/babel.png"},{name:"webpack",image:"img/tech/webpack.png"},{name:"Sass",image:"img/tech/sass.png"},{name:"Mocha",image:"img/tech/mocha.png"},{name:"Heroku",image:"img/tech/heroku.png"},{name:"git",image:"img/tech/git.png"},{name:"GameMaker Studio 2",image:"img/tech/gms2.png"},{name:"C++",image:"img/tech/cpp.png"}];var Nr={};Object.defineProperty(Nr,"__esModule",{value:!0}),Nr.handleUpdate=Nr.initialize=void 0;var Rr,Br=(Rr=Dr)&&Rr.__esModule?Rr:{default:Rr};var Vr=document.querySelector(".skills__list");Nr.initialize=function(){Wr(),Jr()};var Wr=function(){var e=document.querySelector(".skills__list");Br.default.forEach(function(t){var r=document.createElement("li"),n=document.createElement("img"),i=document.createElement("div");r.classList.add("skills--hidden"),i.innerText=t.name,i.classList.add("skills__tech"),n.src=t.image,n.alt=t.name,r.appendChild(n),r.appendChild(i),e.appendChild(r)})},Hr=(0,Qt.toggleVisibilityFactory)("skills--hidden",function(e){e.classList.contains("skills--hidden")&&(e.classList.remove("skills--hidden"),function(e){return function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}(document.querySelectorAll(".skills__list li")).forEach(function(e,t){setTimeout(function(){e.classList.remove("skills--hidden"),e.classList.add("skills__tech--show")},150*t)}))}),Jr=function(){var e=(0,Qt.getScrollPosition)();Hr(Vr,e)};Nr.handleUpdate=Jr;var Kr={};Object.defineProperty(Kr,"__esModule",{value:!0}),Kr.handleUpdate=Kr.initialize=void 0;var Yr=document.querySelector(".splash__wrapper");Kr.initialize=function(){(0,Qt.getScrollPosition)().top<=(0,Qt.getScrollBuffer)()&&Qr(Yr)};var Qr=function(e){e.classList.contains("splash--hidden")&&(e.classList.remove("splash--hidden"),function(e){return function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}(document.querySelectorAll(".splash__wrapper > *")).forEach(function(e,t){setTimeout(function(){e.classList.remove("splash--hidden"),e.classList.add("splash--show")},650*t+500)}))},Xr=(0,Qt.toggleVisibilityFactory)("splash--hidden",Qr);Kr.handleUpdate=function(){var e=(0,Qt.getScrollPosition)();Xr(Yr,e)};var Zr=an(br),$r=an(mr),en=an(Kr),tn=an(er),rn=an(Nr),nn=an(Ar),on=an(sr);function an(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}document.addEventListener("DOMContentLoaded",function(){document.documentMode&&!window.MSInputMethodContext&&document.getElementById("is-ie10-").classList.remove("hidden"),(0,Qt.initScrollBuffer)(.1),$r.initialize(),en.initialize(),tn.initialize(),rn.initialize(),nn.initialize(),on.initialize();var e=(0,Qt.throttle)(function(){nn.handleUpdate(),on.handleUpdate(),$r.handleUpdate(),tn.handleUpdate(),rn.handleUpdate(),en.handleUpdate()},100);document.addEventListener("scroll",e),window.addEventListener("resize",e),window.addEventListener("orientationchange",e),Zr.initialize()})}();