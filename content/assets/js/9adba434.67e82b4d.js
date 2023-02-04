"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[54866],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||l;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},91873:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const l={id:"pulsar-client-node-1.2.0",title:"Pulsar Client Node",sidebar_label:"Pulsar Client Node"},i=void 0,o={unversionedId:"versioned/pulsar-client-node-1.2.0",id:"versioned/pulsar-client-node-1.2.0",title:"Pulsar Client Node",description:"1.2.0 &mdash; 2020-08-12",source:"@site/release-notes/versioned/pulsar-client-node-1.2.0.md",sourceDirName:"versioned",slug:"/versioned/pulsar-client-node-1.2.0",permalink:"/release-notes/versioned/pulsar-client-node-1.2.0",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/release-notes/versioned/pulsar-client-node-1.2.0.md",tags:[],version:"current",frontMatter:{id:"pulsar-client-node-1.2.0",title:"Pulsar Client Node",sidebar_label:"Pulsar Client Node"}},s={},p=[{value:'1.2.0 \u2014 2020-08-12 <a id="1.2.0"></a>',id:"120--2020-08-12-",level:3},{value:"Features",id:"features",level:4},{value:"Fixes",id:"fixes",level:4}],c={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"120--2020-08-12-"},"1.2.0 ","\u2014"," 2020-08-12 ",(0,a.kt)("a",{id:"1.2.0"})),(0,a.kt)("p",null,"This is the third release of the Pulsar Node.js client.\n",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/pulsar-client/v/1.2.0"},"https://www.npmjs.com/package/pulsar-client/v/1.2.0")),(0,a.kt)("h4",{id:"features"},"Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Added Key_Shared subscription type ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-node/pull/71"},"#71")),(0,a.kt)("li",{parentName:"ul"},"Added read compacted option to consumer options ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-node/pull/73"},"#73")),(0,a.kt)("li",{parentName:"ul"},"Enabled passing function for logging when creating client ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-node/pull/82"},"#82")),(0,a.kt)("li",{parentName:"ul"},"Enabled getting redelivery count of message ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-node/pull/101"},"#101"))),(0,a.kt)("h4",{id:"fixes"},"Fixes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fixed issue where consumer with message listener dies ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-node/pull/83"},"#83")),(0,a.kt)("li",{parentName:"ul"},"Fixed issue where client instance could be garbage collected ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-node/pull/85"},"#85"))),(0,a.kt)("p",null,"For a complete list of issues fixed, see\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar-client-node/milestone/4?closed=1"},"https://github.com/apache/pulsar-client-node/milestone/4?closed=1")))}d.isMDXComponent=!0}}]);