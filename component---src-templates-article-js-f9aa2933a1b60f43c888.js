(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{RJWs:function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(F){l=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof y?e:y,a=Object.create(o.prototype),i=new P(n||[]);return a._invoke=function(t,e,r){var n=f;return function(o,a){if(n===d)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw a;return N()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=S(i,r);if(c){if(c===m)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var l=s(t,e,r);if("normal"===l.type){if(n=r.done?p:h,l.arg===m)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n=p,r.method="throw",r.arg=l.arg)}}}(t,r,i),a}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(F){return{type:"throw",arg:F}}}t.wrap=u;var f="suspendedStart",h="suspendedYield",d="executing",p="completed",m={};function y(){}function v(){}function g(){}var w={};w[a]=function(){return this};var b=Object.getPrototypeOf,E=b&&b(b(j([])));E&&E!==r&&n.call(E,a)&&(w=E);var x=g.prototype=y.prototype=Object.create(w);function _(t){["next","throw","return"].forEach(function(e){l(t,e,function(t){return this._invoke(e,t)})})}function L(t,e){var r;this._invoke=function(o,a){function i(){return new e(function(r,i){!function r(o,a,i,c){var l=s(t[o],t,a);if("throw"!==l.type){var u=l.arg,f=u.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then(function(t){r("next",t,i,c)},function(t){r("throw",t,i,c)}):e.resolve(f).then(function(t){u.value=t,i(u)},function(t){return r("throw",t,i,c)})}c(l.arg)}(o,a,r,i)})}return r=r?r.then(i,i):i()}}function S(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,S(t,r),"throw"===r.method))return m;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=s(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,m;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,m):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function j(t){if(t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:N}}function N(){return{value:e,done:!0}}return v.prototype=x.constructor=g,g.constructor=v,v.displayName=l(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,l(t,c,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},_(L.prototype),L.prototype[i]=function(){return this},t.AsyncIterator=L,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new L(u(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then(function(t){return t.done?t.value:i.next()})},_(x),l(x,c,"Generator"),x[a]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=j,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(O),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var l=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(l&&u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:j(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),m}},t}(t.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},TOwV:function(t,e,r){"use strict";t.exports=r("qT12")},VRlk:function(t,e,r){"use strict";r.r(e),r.d(e,"pageQuery",function(){return Y});var n=r("FdF9"),o=r("Wbzz");function a(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}function i(){return(i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}function c(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}var l=r("9Hrx"),u=r("xHvr"),s=r.n(u);function f(t,e){if(!t){var r=new Error("loadable: "+e);throw r.framesToPop=1,r.name="Invariant Violation",r}}var h=n.default.createContext();var d=function(t){return function(e){return n.default.createElement(h.Consumer,null,function(r){return n.default.createElement(t,Object.assign({__chunkExtractor:r},e))})}},p=function(t){return t};function m(t){var e=t.resolve,r=void 0===e?p:e,o=t.render,u=t.onLoad;function s(t,e){void 0===e&&(e={});var s=function(t){return"function"==typeof t?{requireAsync:t}:t}(t),h={};function p(t){return e.cacheKey?e.cacheKey(t):s.resolve?s.resolve(t):null}var m=function(t){function n(r){var n;return(n=t.call(this,r)||this).state={result:null,error:null,loading:!0,cacheKey:p(r)},n.promise=null,f(!r.__chunkExtractor||s.requireSync,"SSR requires `@loadable/babel-plugin`, please install it"),r.__chunkExtractor?!1===e.ssr?c(n):(s.requireAsync(r).catch(function(){}),n.loadSync(),r.__chunkExtractor.addChunk(s.chunkName(r)),c(n)):(!1!==e.ssr&&s.isReady&&s.isReady(r)&&n.loadSync(),n)}Object(l.a)(n,t),n.getDerivedStateFromProps=function(t,e){var r=p(t);return i({},e,{cacheKey:r,loading:e.loading||e.cacheKey!==r})};var d=n.prototype;return d.componentDidMount=function(){this.mounted=!0,this.state.loading?this.loadAsync():this.state.error||this.triggerOnLoad()},d.componentDidUpdate=function(t,e){e.cacheKey!==this.state.cacheKey&&(this.promise=null,this.loadAsync())},d.componentWillUnmount=function(){this.mounted=!1},d.safeSetState=function(t,e){this.mounted&&this.setState(t,e)},d.triggerOnLoad=function(){var t=this;u&&setTimeout(function(){u(t.state.result,t.props)})},d.loadSync=function(){if(this.state.loading)try{var t=s.requireSync(this.props),e=r(t,{Loadable:v});this.state.result=e,this.state.loading=!1}catch(n){this.state.error=n}},d.getCacheKey=function(){return p(this.props)||JSON.stringify(this.props)},d.getCache=function(){return h[this.getCacheKey()]},d.setCache=function(t){h[this.getCacheKey()]=t},d.loadAsync=function(){var t=this;if(!this.promise){var n=this.props,o=(n.__chunkExtractor,n.forwardedRef,a(n,["__chunkExtractor","forwardedRef"]));this.promise=s.requireAsync(o).then(function(n){var o=r(n,{Loadable:v});e.suspense&&t.setCache(o),t.safeSetState({result:r(n,{Loadable:v}),loading:!1},function(){return t.triggerOnLoad()})}).catch(function(e){t.safeSetState({error:e,loading:!1})})}return this.promise},d.render=function(){var t=this.props,r=t.forwardedRef,n=t.fallback,c=(t.__chunkExtractor,a(t,["forwardedRef","fallback","__chunkExtractor"])),l=this.state,u=l.error,s=l.loading,f=l.result;if(e.suspense){var h=this.getCache();if(!h)throw this.loadAsync();return o({loading:!1,fallback:null,result:h,options:e,props:i({},c,{ref:r})})}if(u)throw u;var d=n||e.fallback||null;return s?d:o({loading:s,fallback:d,result:f,options:e,props:i({},c,{ref:r})})},n}(n.default.Component),y=d(m),v=n.default.forwardRef(function(t,e){return n.default.createElement(y,Object.assign({forwardedRef:e},t))});return v.preload=function(t){s.requireAsync(t)},v.load=function(t){return s.requireAsync(t)},v}return{loadable:s,lazy:function(t,e){return s(t,i({},e,{suspense:!0}))}}}var y=m({resolve:function(t,e){var r=e.Loadable,n=t.__esModule?t.default:t.default||t;return s()(r,n,{preload:!0}),n},render:function(t){var e=t.result,r=t.props;return n.default.createElement(e,r)}}),v=y.loadable,g=y.lazy,w=m({onLoad:function(t,e){t&&e.forwardedRef&&("function"==typeof e.forwardedRef?e.forwardedRef(t):e.forwardedRef.current=t)},render:function(t){var e=t.result,r=t.loading,n=t.props;return!r&&n.children?n.children(e):null}}),b=w.loadable,E=w.lazy;var x=v;x.lib=b,g.lib=E;var _=r("Bl7J"),L=r("LbRr"),S=r("vrv3"),k=r("eTKx");function O(t){var e=0;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=function(t,e){if(!t)return;if("string"==typeof t)return P(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return P(t,e)}(t)))return function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}};throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(e=t[Symbol.iterator]()).next.bind(e)}function P(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var j=function(t){for(var e=t.article,r=Object(o.c)("2203825502"),a=e.frontmatter.tags||[],i=new Set,c=3;c>=0&&!(i.size>=3);c--)for(var l,u=O(r.posts.nodes);!(l=u()).done;){var s=l.value;if(s.id!==e.id){if(i.size>=3)break;for(var f,h=0,d=O(s.frontmatter.tags);!(f=d()).done;){var p=f.value;a.includes(p)&&h++}h>=c&&!i.has(s)&&i.add(s)}}return n.default.createElement(n.default.Fragment,null,Array.from(i.values()).map(function(t){return n.default.createElement(k.a,{key:t.id,article:t})}))},N=r("vrFN"),F=r("lYb1"),R=r("aFnX"),T=function(t){var e=t.url,r=void 0===e?"":e,n=t.title,o=void 0===n?"":n,a=t.image,i=void 0===a?"":a,c=t.description,l=void 0===c?"":c,u=t.dateModified,s=void 0===u?new Date:u,f=t.datePublished,h=void 0===f?new Date:f;return{"@context":"http://schema.org","@type":"Article",mainEntityOfPage:{"@type":"WebPage","@id":r},url:r,headline:o,dateModified:s.toISOString(),datePublished:h.toISOString(),publisher:Object(F.a)(),author:Object(R.a)(),image:i,description:l}},A=r("kD0k"),$=r.n(A);r("ls82");function C(t,e,r,n,o,a,i){try{var c=t[a](i),l=c.value}catch(u){return void r(u)}c.done?e(l):Promise.resolve(l).then(n,o)}var M=r("LpSC"),G=r.n(M),I=r("IGbE"),D=function(t){return function(e){return e["wm-property"]===t}},q=function(t){return t.filter(D("like-of"))},K=function(t){return t.filter(D("mention-of"))},z=function(t){return t.filter(D("repost-of"))},W=function(t){return t.filter(D("reply-of"))};function J(t){var e=t.webmention;return n.default.createElement("a",{href:e.author.url,title:e.author.name},n.default.createElement(I.a,{src:e.author.photo,width:64,height:64,quality:"lossless",format:"png"}))}function U(t){var e=t.webmentions;return n.default.createElement("ul",null,e.map(function(t){return n.default.createElement("li",{key:t["wm-id"]},n.default.createElement(J,{webmention:t}))}))}var V=function(t){function e(e){var r;return(r=t.call(this,e)||this).state={error:null,isLoaded:!1,mentions:[],reposts:[],replies:[],likes:[]},r}Object(l.a)(e,t);var r=e.prototype;return r.fetchWebmentions=function(){var t,e=(t=$.a.mark(function t(e){var r;return $.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all(e.map(function(t){return G()("https://webmention.io/api/mentions.jf2?target="+t).then(function(t){return t.json()}).then(function(t){return t.children})})).then(function(t){return t.reduce(function(t,e){return t.concat(e)},[])}).catch(console.error);case 2:r=t.sent,console.log(r),this.setState({reposts:z(r),mentions:K(r),likes:q(r),replies:W(r)});case 5:case"end":return t.stop()}},t,this)}),function(){var e=this,r=arguments;return new Promise(function(n,o){var a=t.apply(e,r);function i(t){C(a,n,o,i,c,"next",t)}function c(t){C(a,n,o,i,c,"throw",t)}i(void 0)})});return function(t){return e.apply(this,arguments)}}(),r.componentDidMount=function(){var t=this.props.urls||[];this.props.url&&t.push(this.props.url),t.length>0&&this.fetchWebmentions(t)},r.render=function(){var t=this.state,e=t.likes,r=t.replies,o=t.reposts,a=t.mentions,i=e.length>0,c=(r.length,o.length>0);a.length;return!1===this.isLoaded?null:n.default.createElement("div",{className:"alex-webmentions"},i?n.default.createElement("div",{className:"alex-webmentions__likes"},n.default.createElement("h3",null,"Likes"),n.default.createElement(U,{webmentions:e})):null,c?n.default.createElement("div",{className:"alex-webmentions__reposts"},n.default.createElement("h3",null,"Reposts"),n.default.createElement(U,{webmentions:o})):null)},e}(n.Component),Y=(e.default=function(t){var e=t.data,r=t.location,a=e.markdownRemark,i=new URL(r.pathname,e.site.siteMetadata.siteUrl),c=new URL(a.fields.legacyslug,e.site.siteMetadata.siteUrl),l=new Date(a.frontmatter.date),u=new Date(a.frontmatter.last_modified_at||l);return n.default.createElement(_.a,{location:r},n.default.createElement(L.a,{location:r,image:a.fields.image}),n.default.createElement("div",{className:"alex-article"},n.default.createElement("div",{className:"alex-article__main"},n.default.createElement("h1",{itemProp:"name headline"},a.frontmatter.title),n.default.createElement("div",{className:"alex-article__main__byline"},"Posted",a.frontmatter.author?n.default.createElement(n.default.Fragment,null," by ",n.default.createElement("span",{itemProp:"author",itemType:"http://schema.org/Person"},n.default.createElement("a",{href:"/"},n.default.createElement("span",{itemProp:"name"},"Alex")))):null,l?n.default.createElement(n.default.Fragment,null," on ",n.default.createElement("time",{className:"alex-article__main__date",dateTime:l,itemProp:"datePublished"},a.fields.formattedDate),"."):null,a.frontmatter.image_credit?n.default.createElement(n.default.Fragment,null," "+a.frontmatter.image_credit):null),n.default.createElement("article",{dangerouslySetInnerHTML:{__html:a.html},className:"alex-article__body article-description",itemProp:"articleBody"}),n.default.createElement("hr",null),n.default.createElement("h3",{className:"share"},"Share"),n.default.createElement(S.a,{title:a.frontmatter.title,url:i}),n.default.createElement(V,{urls:[i,c]})),n.default.createElement("div",{className:"alex-article__aside"},a.frontmatter.tags?n.default.createElement("div",{className:"alex-article__topics"},n.default.createElement("strong",null,"Topics: "),n.default.createElement("ul",null,a.frontmatter.tags.map(function(t){return n.default.createElement("li",{key:t},n.default.createElement(o.a,{to:"/topic/"+t},t))}))):null,n.default.createElement("div",{className:"alex-article__recommended"},n.default.createElement("h2",null,"Read Next"),n.default.createElement(j,{article:a})))),n.default.createElement(N.a,{title:a.frontmatter.title,description:a.excerpt},n.default.createElement("script",{type:"application/ld+json"},JSON.stringify(T({url:i,title:a.frontmatter.title,image:a.fields.image,description:a.frontmatter.excerpt,dateModified:u,datePublished:l})))))},"3000868211")},kD0k:function(t,e,r){t.exports=r("RJWs")},ls82:function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function l(t,e,r,n){var o=e&&e.prototype instanceof m?e:m,a=Object.create(o.prototype),i=new O(n||[]);return a._invoke=function(t,e,r){var n=s;return function(o,a){if(n===h)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw a;return j()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=L(i,r);if(c){if(c===p)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===s)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var l=u(t,e,r);if("normal"===l.type){if(n=r.done?d:f,l.arg===p)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n=d,r.method="throw",r.arg=l.arg)}}}(t,r,i),a}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}t.wrap=l;var s="suspendedStart",f="suspendedYield",h="executing",d="completed",p={};function m(){}function y(){}function v(){}var g={};g[a]=function(){return this};var w=Object.getPrototypeOf,b=w&&w(w(P([])));b&&b!==r&&n.call(b,a)&&(g=b);var E=v.prototype=m.prototype=Object.create(g);function x(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function _(t){var e;this._invoke=function(r,o){function a(){return new Promise(function(e,a){!function e(r,o,a,i){var c=u(t[r],t,o);if("throw"!==c.type){var l=c.arg,s=l.value;return s&&"object"==typeof s&&n.call(s,"__await")?Promise.resolve(s.__await).then(function(t){e("next",t,a,i)},function(t){e("throw",t,a,i)}):Promise.resolve(s).then(function(t){l.value=t,a(l)},function(t){return e("throw",t,a,i)})}i(c.arg)}(r,o,e,a)})}return e=e?e.then(a,a):a()}}function L(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,L(t,r),"throw"===r.method))return p;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var o=u(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,p;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,p):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,p)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function P(t){if(t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:j}}function j(){return{value:e,done:!0}}return y.prototype=E.constructor=v,v.constructor=y,v[c]=y.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(E),t},t.awrap=function(t){return{__await:t}},x(_.prototype),_.prototype[i]=function(){return this},t.AsyncIterator=_,t.async=function(e,r,n,o){var a=new _(l(e,r,n,o));return t.isGeneratorFunction(r)?a:a.next().then(function(t){return t.done?t.value:a.next()})},x(E),E[c]="Generator",E[a]=function(){return this},E.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=P,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(k),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var l=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(l&&u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,p):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;k(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:P(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),p}},t}(t.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},qT12:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n="function"==typeof Symbol&&Symbol.for,o=n?Symbol.for("react.element"):60103,a=n?Symbol.for("react.portal"):60106,i=n?Symbol.for("react.fragment"):60107,c=n?Symbol.for("react.strict_mode"):60108,l=n?Symbol.for("react.profiler"):60114,u=n?Symbol.for("react.provider"):60109,s=n?Symbol.for("react.context"):60110,f=n?Symbol.for("react.async_mode"):60111,h=n?Symbol.for("react.concurrent_mode"):60111,d=n?Symbol.for("react.forward_ref"):60112,p=n?Symbol.for("react.suspense"):60113,m=n?Symbol.for("react.suspense_list"):60120,y=n?Symbol.for("react.memo"):60115,v=n?Symbol.for("react.lazy"):60116,g=n?Symbol.for("react.fundamental"):60117,w=n?Symbol.for("react.responder"):60118;function b(t){if("object"==typeof t&&null!==t){var e=t.$$typeof;switch(e){case o:switch(t=t.type){case f:case h:case i:case l:case c:case p:return t;default:switch(t=t&&t.$$typeof){case s:case d:case u:return t;default:return e}}case v:case y:case a:return e}}}function E(t){return b(t)===h}e.typeOf=b,e.AsyncMode=f,e.ConcurrentMode=h,e.ContextConsumer=s,e.ContextProvider=u,e.Element=o,e.ForwardRef=d,e.Fragment=i,e.Lazy=v,e.Memo=y,e.Portal=a,e.Profiler=l,e.StrictMode=c,e.Suspense=p,e.isValidElementType=function(t){return"string"==typeof t||"function"==typeof t||t===i||t===h||t===l||t===c||t===p||t===m||"object"==typeof t&&null!==t&&(t.$$typeof===v||t.$$typeof===y||t.$$typeof===u||t.$$typeof===s||t.$$typeof===d||t.$$typeof===g||t.$$typeof===w)},e.isAsyncMode=function(t){return E(t)||b(t)===f},e.isConcurrentMode=E,e.isContextConsumer=function(t){return b(t)===s},e.isContextProvider=function(t){return b(t)===u},e.isElement=function(t){return"object"==typeof t&&null!==t&&t.$$typeof===o},e.isForwardRef=function(t){return b(t)===d},e.isFragment=function(t){return b(t)===i},e.isLazy=function(t){return b(t)===v},e.isMemo=function(t){return b(t)===y},e.isPortal=function(t){return b(t)===a},e.isProfiler=function(t){return b(t)===l},e.isStrictMode=function(t){return b(t)===c},e.isSuspense=function(t){return b(t)===p}},vrv3:function(t,e,r){"use strict";var n=r("FdF9");e.a=function(t){var e=t.url,r=t.title;return n.default.createElement("div",{className:"alex-share"},n.default.createElement("ul",null,n.default.createElement("li",null,n.default.createElement("a",{href:"https://twitter.com/intent/tweet?url="+e+"&amp;text="+r+"&amp;related=AlexWilsonV1&amp;via=AlexWilsonV1"},n.default.createElement("img",{src:"/svg/twitter.svg",alt:"Twitter",title:"Share on Twitter"}))),n.default.createElement("li",null,n.default.createElement("a",{href:"http://www.facebook.com/sharer.php?u="+e+"&amp;t="+r},n.default.createElement("img",{src:"/svg/facebook.svg",alt:"Facebook",title:"Share on Facebook"}))),n.default.createElement("li",null,n.default.createElement("a",{href:"http://www.linkedin.com/shareArticle?mini=true&amp;url="+e+"&amp;title="+r},n.default.createElement("img",{src:"/svg/linkedin.svg",alt:"LinkedIn",title:"Share on LinkedIn"}))),n.default.createElement("li",null,n.default.createElement("a",{href:"http://reddit.com/submit?url="+e+"&amp;title="+r},n.default.createElement("img",{src:"/svg/reddit.svg",alt:"Reddit",title:"Share on Reddit"})))))}},xHvr:function(t,e,r){"use strict";var n=r("TOwV"),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},c={};function l(t){return n.isMemo(t)?i:c[t.$$typeof]||o}c[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},c[n.Memo]=i;var u=Object.defineProperty,s=Object.getOwnPropertyNames,f=Object.getOwnPropertySymbols,h=Object.getOwnPropertyDescriptor,d=Object.getPrototypeOf,p=Object.prototype;t.exports=function t(e,r,n){if("string"!=typeof r){if(p){var o=d(r);o&&o!==p&&t(e,o,n)}var i=s(r);f&&(i=i.concat(f(r)));for(var c=l(e),m=l(r),y=0;y<i.length;++y){var v=i[y];if(!(a[v]||n&&n[v]||m&&m[v]||c&&c[v])){var g=h(r,v);try{u(e,v,g)}catch(w){}}}}return e}}}]);
//# sourceMappingURL=component---src-templates-article-js-f9aa2933a1b60f43c888.js.map