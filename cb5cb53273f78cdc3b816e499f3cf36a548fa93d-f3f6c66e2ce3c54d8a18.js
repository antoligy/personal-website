(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"1j/A":function(e,t,a){(function(t){e.exports={fetch:t.fetch}}).call(this,a("eKGF"))},Bl7J:function(e,t,a){"use strict";var n=a("FdF9"),r=a("LbRr"),i=a("W/9C");a("sQfG");t.a=function(e){var t=e.location,a=e.children,o=n.default.createElement(r.a,{location:t}),u=n.default.createElement(i.a,null),s=n.Children.toArray(a).filter(function(e){return e.type===r.a||r.a.isPrototypeOf(e.type)?(o=e,!1):e.type!==i.a&&!i.a.isPrototypeOf(e.type)||(u=e,!1)});return n.default.createElement(n.default.Fragment,null,o,n.default.createElement("main",null,s),u)}},IGbE:function(e,t,a){"use strict";a.d(t,"a",function(){return r});var n=a("FdF9");function r(e){var t=e.src,a=e.alt,r=e.width,i=e.height,o=e.quality,u=e.format,s=e.className,c=[];return Number.isInteger(r)&&c.push("width="+r),Number.isInteger(i)&&c.push("height="+i),o&&c.push("quality="+o),u&&c.push("format="+u),n.default.createElement("img",{src:"https://imagecdn.app/v2/image/"+encodeURIComponent(t)+"?"+c.join("&"),className:"responsive "+s,alt:a})}},LbRr:function(e,t,a){"use strict";var n=a("9Hrx"),r=a("Wbzz"),i=a("FdF9"),o=function(e){var t=e instanceof HTMLImageElement||e instanceof Image,a=t?e:new Image;return t||(a.src=e),new Promise(function(t,n){a.addEventListener("load",function(a){return t(e)}),a.addEventListener("error",n),a.complete&&t(e)})},u=a("LpSC"),s=a.n(u),c=function(e){var t=e.url,a=e.children,n=e.rel;return/^(https?:)?\/\//.test(t)?i.default.createElement("a",{rel:n,href:t},a):i.default.createElement(r.a,{to:t},a)},l=function(e){var t=e.url,a=e.rel,n=e.active,r=e.children;return i.default.createElement("li",{className:"alex-header__nav-item "+(n?"alex-header__nav-item--active":null)},i.default.createElement(c,{rel:a,url:t},r))},d=function(){return i.default.createElement("li",{className:"alex-header__nav-item alex-header__nav-item--spacer"})},m=function(e){var t=e.src,a=e.title;return i.default.createElement("img",{src:t,alt:a,className:"large",height:"1em"})},h=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={preloadedImage:void 0},a}Object(n.a)(t,e);var a=t.prototype;return a.preloadImage=function(e){var t=this,a=this.imageService(this.props.src,[]);o(new Image(a)).then(function(){return t.setState({preloadedImage:a})}).catch(function(){})},a.imageService=function(e,t){return void 0===t&&(t=[]),"https://imagecdn.app/v2/image/"+encodeURIComponent(e)+"?"+t.join("&")},a.render=function(){var e=this.props.src;return i.default.createElement("div",{className:"alex-header-image"},i.default.createElement("picture",{className:"alex-header-image--container"},i.default.createElement("img",{alt:"Header",className:"alex-header-image__blur",onLoad:this.preloadImage.bind(this,e),src:null!==e?this.imageService(e,["width=25","height=10","quality=low","format=jpg"]):null}),i.default.createElement("img",{alt:"Header",className:"alex-header-image__main",src:this.state.preloadedImage,style:{opacity:void 0!==this.state.preloadedImage?1:0}})))},t}(i.Component),f=function(e){function t(t){var a;return(a=e.call(this,t)||this).header=i.default.createRef(),a.headerNav=i.default.createRef(),a.state={backgroundImage:t.image,backgroundImageLoaded:!1},a}Object(n.a)(t,e);var a=t.prototype;return a.componentDidMount=function(){this.header.current.style.top="-"+(this.header.current.offsetHeight-this.headerNav.current.offsetHeight)+"px",this.header.current.style.position="sticky",this.state.backgroundImage&&null!==this.state.backgroundImage||this.fetchRandomImage()},a.fetchRandomImage=function(){var e=this;s()("https://random.responsiveimages.io/v1/image?"+["format=json","provider=custom-v1:http://random-images-v1.s3-website.eu-west-1.amazonaws.com"].join("&")).then(function(e){return e.json()}).then(function(t){t.url&&e.setState({backgroundImage:t.url})}).catch(function(e){return null})},a.render=function(){var e=this.props.location.pathname,t=this.props.name?this.props.name:"Alex Wilson",a=this.props.intro?this.props.intro:"Software Engineer, Technical Architect — Helping build a better, faster internet.";return i.default.createElement("header",{role:"banner",className:"alex-header",ref:this.header},i.default.createElement(h,{src:this.state.backgroundImage}),i.default.createElement("div",{className:"alex-header--container"},i.default.createElement("div",{className:"alex-header__about"},i.default.createElement("h1",{className:"alex-header__name"},t),i.default.createElement("span",{className:"alex-header__intro"},a)),i.default.createElement("nav",null,i.default.createElement("ul",{className:"alex-header__nav",id:"menu",ref:this.headerNav},i.default.createElement(l,{url:"/",active:"/"===e},"Home"),i.default.createElement(l,{url:"/about-me/",active:e.startsWith("/about-me/")},"About Me"),i.default.createElement(l,{url:"/blog/",active:e.startsWith("/blog/")},"Blog"),i.default.createElement(l,{url:"/talks/",active:e.startsWith("/talks/")},"Talks"),i.default.createElement(l,{url:"/consultancy/",active:e.startsWith("/consultancy/")},"Hire Me"),i.default.createElement(d,null),i.default.createElement(l,{url:"https://twitter.com/AlexWilsonV1",rel:"me"},i.default.createElement(m,{src:"/svg/twitter.svg",title:"Twitter"})),i.default.createElement(l,{url:"https://www.linkedin.com/in/alex-/",rel:"me"},i.default.createElement(m,{src:"/svg/linkedin.svg",title:"LinkedIn"})),i.default.createElement(l,{url:"https://github.com/alexwilson",rel:"me"},i.default.createElement(m,{src:"/svg/github.svg",title:"Github"}))))))},t}(i.Component);f.defaultProps={siteTitle:"Alex Wilson",image:null};t.a=f},LpSC:function(e,t,a){a("1j/A"),e.exports=self.fetch.bind(self)},"W/9C":function(e,t,a){"use strict";var n=a("9Hrx"),r=a("FdF9"),i=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){return r.default.createElement("footer",{className:"footer"},r.default.createElement("div",{className:"container align-center"},r.default.createElement("span",{className:"text-muted"},"© Alex Wilson ",(new Date).getFullYear())))},t}(r.Component);t.a=i},eKGF:function(e,t){var a;a=function(){return this}();try{a=a||new Function("return this")()}catch(n){"object"==typeof window&&(a=window)}e.exports=a},eTKx:function(e,t,a){"use strict";a.d(t,"a",function(){return Z});var n=a("Wbzz");function r(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function i(e){r(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}var o={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function u(e){return function(t){var a=t||{},n=a.width?String(a.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}var s={date:u({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:u({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:u({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},c={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function l(e){return function(t,a){var n,r=a||{};if("formatting"===(r.context?String(r.context):"standalone")&&e.formattingValues){var i=e.defaultFormattingWidth||e.defaultWidth,o=r.width?String(r.width):i;n=e.formattingValues[o]||e.formattingValues[i]}else{var u=e.defaultWidth,s=r.width?String(r.width):e.defaultWidth;n=e.values[s]||e.values[u]}return n[e.argumentCallback?e.argumentCallback(t):t]}}function d(e){return function(t,a){var n=String(t),r=a||{},i=r.width,o=i&&e.matchPatterns[i]||e.matchPatterns[e.defaultMatchWidth],u=n.match(o);if(!u)return null;var s,c=u[0],l=i&&e.parsePatterns[i]||e.parsePatterns[e.defaultParseWidth];return s="[object Array]"===Object.prototype.toString.call(l)?function(e,t){for(var a=0;a<e.length;a++)if(t(e[a]))return a}(l,function(e){return e.test(c)}):function(e,t){for(var a in e)if(e.hasOwnProperty(a)&&t(e[a]))return a}(l,function(e){return e.test(c)}),s=e.valueCallback?e.valueCallback(s):s,{value:s=r.valueCallback?r.valueCallback(s):s,rest:n.slice(c.length)}}}var m,h={code:"en-US",formatDistance:function(e,t,a){var n;return a=a||{},n="string"==typeof o[e]?o[e]:1===t?o[e].one:o[e].other.replace("{{count}}",t),a.addSuffix?a.comparison>0?"in "+n:n+" ago":n},formatLong:s,formatRelative:function(e,t,a,n){return c[e]},localize:{ordinalNumber:function(e,t){var a=Number(e),n=a%100;if(n>20||n<10)switch(n%10){case 1:return a+"st";case 2:return a+"nd";case 3:return a+"rd"}return a+"th"},era:l({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:l({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:l({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:l({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:l({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(m={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}},function(e,t){var a=String(e),n=t||{},r=a.match(m.matchPattern);if(!r)return null;var i=r[0],o=a.match(m.parsePattern);if(!o)return null;var u=m.valueCallback?m.valueCallback(o[0]):o[0];return{value:u=n.valueCallback?n.valueCallback(u):u,rest:a.slice(i.length)}}),era:d({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:d({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:d({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:d({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:d({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function f(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function g(e,t){return r(2,arguments),function(e,t){r(2,arguments);var a=i(e).getTime(),n=f(t);return new Date(a+n)}(e,-f(t))}function w(e,t){for(var a=e<0?"-":"",n=Math.abs(e).toString();n.length<t;)n="0"+n;return a+n}var v={y:function(e,t){var a=e.getUTCFullYear(),n=a>0?a:1-a;return w("yy"===t?n%100:n,t.length)},M:function(e,t){var a=e.getUTCMonth();return"M"===t?String(a+1):w(a+1,2)},d:function(e,t){return w(e.getUTCDate(),t.length)},a:function(e,t){var a=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":case"aaa":return a.toUpperCase();case"aaaaa":return a[0];case"aaaa":default:return"am"===a?"a.m.":"p.m."}},h:function(e,t){return w(e.getUTCHours()%12||12,t.length)},H:function(e,t){return w(e.getUTCHours(),t.length)},m:function(e,t){return w(e.getUTCMinutes(),t.length)},s:function(e,t){return w(e.getUTCSeconds(),t.length)},S:function(e,t){var a=t.length,n=e.getUTCMilliseconds();return w(Math.floor(n*Math.pow(10,a-3)),t.length)}},p=864e5;function b(e){r(1,arguments);var t=i(e),a=t.getUTCDay(),n=(a<1?7:0)+a-1;return t.setUTCDate(t.getUTCDate()-n),t.setUTCHours(0,0,0,0),t}function y(e){r(1,arguments);var t=i(e),a=t.getUTCFullYear(),n=new Date(0);n.setUTCFullYear(a+1,0,4),n.setUTCHours(0,0,0,0);var o=b(n),u=new Date(0);u.setUTCFullYear(a,0,4),u.setUTCHours(0,0,0,0);var s=b(u);return t.getTime()>=o.getTime()?a+1:t.getTime()>=s.getTime()?a:a-1}var T=6048e5;function x(e){r(1,arguments);var t=i(e),a=b(t).getTime()-function(e){r(1,arguments);var t=y(e),a=new Date(0);return a.setUTCFullYear(t,0,4),a.setUTCHours(0,0,0,0),b(a)}(t).getTime();return Math.round(a/T)+1}function C(e,t){r(1,arguments);var a=t||{},n=a.locale,o=n&&n.options&&n.options.weekStartsOn,u=null==o?0:f(o),s=null==a.weekStartsOn?u:f(a.weekStartsOn);if(!(s>=0&&s<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var c=i(e),l=c.getUTCDay(),d=(l<s?7:0)+l-s;return c.setUTCDate(c.getUTCDate()-d),c.setUTCHours(0,0,0,0),c}function E(e,t){r(1,arguments);var a=i(e,t),n=a.getUTCFullYear(),o=t||{},u=o.locale,s=u&&u.options&&u.options.firstWeekContainsDate,c=null==s?1:f(s),l=null==o.firstWeekContainsDate?c:f(o.firstWeekContainsDate);if(!(l>=1&&l<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var d=new Date(0);d.setUTCFullYear(n+1,0,l),d.setUTCHours(0,0,0,0);var m=C(d,t),h=new Date(0);h.setUTCFullYear(n,0,l),h.setUTCHours(0,0,0,0);var g=C(h,t);return a.getTime()>=m.getTime()?n+1:a.getTime()>=g.getTime()?n:n-1}var M=6048e5;function k(e,t){r(1,arguments);var a=i(e),n=C(a,t).getTime()-function(e,t){r(1,arguments);var a=t||{},n=a.locale,i=n&&n.options&&n.options.firstWeekContainsDate,o=null==i?1:f(i),u=null==a.firstWeekContainsDate?o:f(a.firstWeekContainsDate),s=E(e,t),c=new Date(0);return c.setUTCFullYear(s,0,u),c.setUTCHours(0,0,0,0),C(c,t)}(a,t).getTime();return Math.round(n/M)+1}var D="midnight",P="noon",N="morning",S="afternoon",U="evening",W="night";function O(e,t){var a=e>0?"-":"+",n=Math.abs(e),r=Math.floor(n/60),i=n%60;if(0===i)return a+String(r);var o=t||"";return a+String(r)+o+w(i,2)}function Y(e,t){return e%60==0?(e>0?"-":"+")+w(Math.abs(e)/60,2):q(e,t)}function q(e,t){var a=t||"",n=e>0?"-":"+",r=Math.abs(e);return n+w(Math.floor(r/60),2)+a+w(r%60,2)}var F={G:function(e,t,a){var n=e.getUTCFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return a.era(n,{width:"abbreviated"});case"GGGGG":return a.era(n,{width:"narrow"});case"GGGG":default:return a.era(n,{width:"wide"})}},y:function(e,t,a){if("yo"===t){var n=e.getUTCFullYear(),r=n>0?n:1-n;return a.ordinalNumber(r,{unit:"year"})}return v.y(e,t)},Y:function(e,t,a,n){var r=E(e,n),i=r>0?r:1-r;return"YY"===t?w(i%100,2):"Yo"===t?a.ordinalNumber(i,{unit:"year"}):w(i,t.length)},R:function(e,t){return w(y(e),t.length)},u:function(e,t){return w(e.getUTCFullYear(),t.length)},Q:function(e,t,a){var n=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"Q":return String(n);case"QQ":return w(n,2);case"Qo":return a.ordinalNumber(n,{unit:"quarter"});case"QQQ":return a.quarter(n,{width:"abbreviated",context:"formatting"});case"QQQQQ":return a.quarter(n,{width:"narrow",context:"formatting"});case"QQQQ":default:return a.quarter(n,{width:"wide",context:"formatting"})}},q:function(e,t,a){var n=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"q":return String(n);case"qq":return w(n,2);case"qo":return a.ordinalNumber(n,{unit:"quarter"});case"qqq":return a.quarter(n,{width:"abbreviated",context:"standalone"});case"qqqqq":return a.quarter(n,{width:"narrow",context:"standalone"});case"qqqq":default:return a.quarter(n,{width:"wide",context:"standalone"})}},M:function(e,t,a){var n=e.getUTCMonth();switch(t){case"M":case"MM":return v.M(e,t);case"Mo":return a.ordinalNumber(n+1,{unit:"month"});case"MMM":return a.month(n,{width:"abbreviated",context:"formatting"});case"MMMMM":return a.month(n,{width:"narrow",context:"formatting"});case"MMMM":default:return a.month(n,{width:"wide",context:"formatting"})}},L:function(e,t,a){var n=e.getUTCMonth();switch(t){case"L":return String(n+1);case"LL":return w(n+1,2);case"Lo":return a.ordinalNumber(n+1,{unit:"month"});case"LLL":return a.month(n,{width:"abbreviated",context:"standalone"});case"LLLLL":return a.month(n,{width:"narrow",context:"standalone"});case"LLLL":default:return a.month(n,{width:"wide",context:"standalone"})}},w:function(e,t,a,n){var r=k(e,n);return"wo"===t?a.ordinalNumber(r,{unit:"week"}):w(r,t.length)},I:function(e,t,a){var n=x(e);return"Io"===t?a.ordinalNumber(n,{unit:"week"}):w(n,t.length)},d:function(e,t,a){return"do"===t?a.ordinalNumber(e.getUTCDate(),{unit:"date"}):v.d(e,t)},D:function(e,t,a){var n=function(e){r(1,arguments);var t=i(e),a=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var n=a-t.getTime();return Math.floor(n/p)+1}(e);return"Do"===t?a.ordinalNumber(n,{unit:"dayOfYear"}):w(n,t.length)},E:function(e,t,a){var n=e.getUTCDay();switch(t){case"E":case"EE":case"EEE":return a.day(n,{width:"abbreviated",context:"formatting"});case"EEEEE":return a.day(n,{width:"narrow",context:"formatting"});case"EEEEEE":return a.day(n,{width:"short",context:"formatting"});case"EEEE":default:return a.day(n,{width:"wide",context:"formatting"})}},e:function(e,t,a,n){var r=e.getUTCDay(),i=(r-n.weekStartsOn+8)%7||7;switch(t){case"e":return String(i);case"ee":return w(i,2);case"eo":return a.ordinalNumber(i,{unit:"day"});case"eee":return a.day(r,{width:"abbreviated",context:"formatting"});case"eeeee":return a.day(r,{width:"narrow",context:"formatting"});case"eeeeee":return a.day(r,{width:"short",context:"formatting"});case"eeee":default:return a.day(r,{width:"wide",context:"formatting"})}},c:function(e,t,a,n){var r=e.getUTCDay(),i=(r-n.weekStartsOn+8)%7||7;switch(t){case"c":return String(i);case"cc":return w(i,t.length);case"co":return a.ordinalNumber(i,{unit:"day"});case"ccc":return a.day(r,{width:"abbreviated",context:"standalone"});case"ccccc":return a.day(r,{width:"narrow",context:"standalone"});case"cccccc":return a.day(r,{width:"short",context:"standalone"});case"cccc":default:return a.day(r,{width:"wide",context:"standalone"})}},i:function(e,t,a){var n=e.getUTCDay(),r=0===n?7:n;switch(t){case"i":return String(r);case"ii":return w(r,t.length);case"io":return a.ordinalNumber(r,{unit:"day"});case"iii":return a.day(n,{width:"abbreviated",context:"formatting"});case"iiiii":return a.day(n,{width:"narrow",context:"formatting"});case"iiiiii":return a.day(n,{width:"short",context:"formatting"});case"iiii":default:return a.day(n,{width:"wide",context:"formatting"})}},a:function(e,t,a){var n=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":case"aaa":return a.dayPeriod(n,{width:"abbreviated",context:"formatting"});case"aaaaa":return a.dayPeriod(n,{width:"narrow",context:"formatting"});case"aaaa":default:return a.dayPeriod(n,{width:"wide",context:"formatting"})}},b:function(e,t,a){var n,r=e.getUTCHours();switch(n=12===r?P:0===r?D:r/12>=1?"pm":"am",t){case"b":case"bb":case"bbb":return a.dayPeriod(n,{width:"abbreviated",context:"formatting"});case"bbbbb":return a.dayPeriod(n,{width:"narrow",context:"formatting"});case"bbbb":default:return a.dayPeriod(n,{width:"wide",context:"formatting"})}},B:function(e,t,a){var n,r=e.getUTCHours();switch(n=r>=17?U:r>=12?S:r>=4?N:W,t){case"B":case"BB":case"BBB":return a.dayPeriod(n,{width:"abbreviated",context:"formatting"});case"BBBBB":return a.dayPeriod(n,{width:"narrow",context:"formatting"});case"BBBB":default:return a.dayPeriod(n,{width:"wide",context:"formatting"})}},h:function(e,t,a){if("ho"===t){var n=e.getUTCHours()%12;return 0===n&&(n=12),a.ordinalNumber(n,{unit:"hour"})}return v.h(e,t)},H:function(e,t,a){return"Ho"===t?a.ordinalNumber(e.getUTCHours(),{unit:"hour"}):v.H(e,t)},K:function(e,t,a){var n=e.getUTCHours()%12;return"Ko"===t?a.ordinalNumber(n,{unit:"hour"}):w(n,t.length)},k:function(e,t,a){var n=e.getUTCHours();return 0===n&&(n=24),"ko"===t?a.ordinalNumber(n,{unit:"hour"}):w(n,t.length)},m:function(e,t,a){return"mo"===t?a.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):v.m(e,t)},s:function(e,t,a){return"so"===t?a.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):v.s(e,t)},S:function(e,t){return v.S(e,t)},X:function(e,t,a,n){var r=(n._originalDate||e).getTimezoneOffset();if(0===r)return"Z";switch(t){case"X":return Y(r);case"XXXX":case"XX":return q(r);case"XXXXX":case"XXX":default:return q(r,":")}},x:function(e,t,a,n){var r=(n._originalDate||e).getTimezoneOffset();switch(t){case"x":return Y(r);case"xxxx":case"xx":return q(r);case"xxxxx":case"xxx":default:return q(r,":")}},O:function(e,t,a,n){var r=(n._originalDate||e).getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+O(r,":");case"OOOO":default:return"GMT"+q(r,":")}},z:function(e,t,a,n){var r=(n._originalDate||e).getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+O(r,":");case"zzzz":default:return"GMT"+q(r,":")}},t:function(e,t,a,n){var r=n._originalDate||e;return w(Math.floor(r.getTime()/1e3),t.length)},T:function(e,t,a,n){return w((n._originalDate||e).getTime(),t.length)}};function _(e,t){switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}}function H(e,t){switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}}var j={p:H,P:function(e,t){var a,n=e.match(/(P+)(p+)?/),r=n[1],i=n[2];if(!i)return _(e,t);switch(r){case"P":a=t.dateTime({width:"short"});break;case"PP":a=t.dateTime({width:"medium"});break;case"PPP":a=t.dateTime({width:"long"});break;case"PPPP":default:a=t.dateTime({width:"full"})}return a.replace("{{date}}",_(r,t)).replace("{{time}}",H(i,t))}},I=6e4;function L(e){return e.getTime()%I}var z=["D","DD"],G=["YY","YYYY"];function A(e,t,a){if("YYYY"===e)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(a,"`; see: https://git.io/fxCyr"));if("YY"===e)throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(a,"`; see: https://git.io/fxCyr"));if("D"===e)throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(a,"`; see: https://git.io/fxCyr"));if("DD"===e)throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(a,"`; see: https://git.io/fxCyr"))}var Q=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,X=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,B=/^'([^]*?)'?$/,R=/''/g,J=/[a-zA-Z]/;function K(e,t,a){r(2,arguments);var n=String(t),o=a||{},u=o.locale||h,s=u.options&&u.options.firstWeekContainsDate,c=null==s?1:f(s),l=null==o.firstWeekContainsDate?c:f(o.firstWeekContainsDate);if(!(l>=1&&l<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var d=u.options&&u.options.weekStartsOn,m=null==d?0:f(d),w=null==o.weekStartsOn?m:f(o.weekStartsOn);if(!(w>=0&&w<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!u.localize)throw new RangeError("locale must contain localize property");if(!u.formatLong)throw new RangeError("locale must contain formatLong property");var v=i(e);if(!function(e){r(1,arguments);var t=i(e);return!isNaN(t)}(v))throw new RangeError("Invalid time value");var p=g(v,function(e){var t=new Date(e.getTime()),a=Math.ceil(t.getTimezoneOffset());t.setSeconds(0,0);var n=a>0?(I+L(t))%I:L(t);return a*I+n}(v)),b={firstWeekContainsDate:l,weekStartsOn:w,locale:u,_originalDate:v};return n.match(X).map(function(e){var t=e[0];return"p"===t||"P"===t?(0,j[t])(e,u.formatLong,b):e}).join("").match(Q).map(function(a){if("''"===a)return"'";var n=a[0];if("'"===n)return a.match(B)[1].replace(R,"'");var r,i=F[n];if(i)return o.useAdditionalWeekYearTokens||(r=a,-1===G.indexOf(r))||A(a,t,e),!o.useAdditionalDayOfYearTokens&&function(e){return-1!==z.indexOf(e)}(a)&&A(a,t,e),i(p,a,u.localize,b);if(n.match(J))throw new RangeError("Format string contains an unescaped latin alphabet character `"+n+"`");return a}).join("")}var V=a("FdF9"),$=a("IGbE");function Z(e){var t=e.article,a=e.withBody,r=void 0===a||a,i=e.withImage,o=void 0===i||i,u=e.withDate,s=void 0===u||u,c=new Date(t.fields.date);return V.default.createElement("div",{className:"alex-card"},V.default.createElement("div",{className:"alex-card__content--container"},V.default.createElement("div",{className:"alex-card__title"},V.default.createElement("h3",null,V.default.createElement(n.a,{to:t.fields.slug},t.frontmatter.title))),!1!==r?V.default.createElement("div",{className:"alex-card__abstract"},V.default.createElement("p",null,t.excerpt)):null,!1!==s?V.default.createElement("div",{className:"alex-card__timetamp"},V.default.createElement("span",{className:"dateline"},V.default.createElement("time",{dateTime:c.toISOString()},K(c,"d MMM yyyy")))):null),!1!==o&&t.fields.thumbnail?V.default.createElement("div",{className:"alex-card__image"},V.default.createElement($.a,{src:t.fields.thumbnail,width:400})):null)}},sQfG:function(e,t,a){}}]);
//# sourceMappingURL=cb5cb53273f78cdc3b816e499f3cf36a548fa93d-f3f6c66e2ce3c54d8a18.js.map