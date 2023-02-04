"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[63591],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=l(n),f=o,d=p["".concat(c,".").concat(f)]||p[f]||m[f]||a;return n?r.createElement(d,i(i({ref:t},s),{},{components:n})):r.createElement(d,i({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u[p]="string"==typeof e?e:o,i[1]=u;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},54367:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>u,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const a={id:"functions-runtime",title:"Configure function runtime",sidebar_label:"Configure function runtime"},i=void 0,u={unversionedId:"functions-runtime",id:"functions-runtime",title:"Configure function runtime",description:"Pulsar supports three types of function runtime with different costs and isolation guarantees to maximize the deployment flexibility of your functions.",source:"@site/docs/functions-runtime.md",sourceDirName:".",slug:"/functions-runtime",permalink:"/docs/next/functions-runtime",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/docs/functions-runtime.md",tags:[],version:"current",frontMatter:{id:"functions-runtime",title:"Configure function runtime",sidebar_label:"Configure function runtime"},sidebar:"docsSidebar",previous:{title:"Troubleshooting",permalink:"/docs/next/functions-worker-troubleshooting"},next:{title:"Configure thread runtime",permalink:"/docs/next/functions-runtime-thread"}},c={},l=[],s={toc:l},p="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Pulsar supports three types of ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/functions-concepts#function-runtime"},"function runtime")," with different costs and isolation guarantees to maximize the deployment flexibility of your functions."),(0,o.kt)("p",null,"The following table outlines the supported programming languages for each type of function runtime."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Function runtime"),(0,o.kt)("th",{parentName:"tr",align:null},"Supported programming languages of functions"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/next/functions-runtime-thread"},"Thread runtime")),(0,o.kt)("td",{parentName:"tr",align:null},"Java")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/next/functions-runtime-process"},"Process runtime")),(0,o.kt)("td",{parentName:"tr",align:null},"Java, Python, Go")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/next/functions-runtime-kubernetes"},"Kubernetes runtime")),(0,o.kt)("td",{parentName:"tr",align:null},"Java, Python, Go")))),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"For the runtime Java version, refer to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/README.md#pulsar-runtime-java-version-recommendation"},"Pulsar Runtime Java Version Recommendation")," according to your target Pulsar version.")))}m.isMDXComponent=!0}}]);