"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[86329],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(r),d=i,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||a;return r?n.createElement(f,o(o({ref:t},s),{},{components:r})):n.createElement(f,o({ref:t},s))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},56213:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(87462),i=(r(67294),r(3905));const a={id:"client-cpp-2.5.0",title:"Client CPP 2.5.0",sidebar_label:"Client CPP 2.5.0"},o=void 0,l={unversionedId:"versioned/client-cpp-2.5.0",id:"versioned/client-cpp-2.5.0",title:"Client CPP 2.5.0",description:"* C++] Windows CMake corrections [#6336",source:"@site/release-notes/versioned/client-cpp-2.5.0.md",sourceDirName:"versioned",slug:"/versioned/client-cpp-2.5.0",permalink:"/release-notes/versioned/client-cpp-2.5.0",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/release-notes/versioned/client-cpp-2.5.0.md",tags:[],version:"current",frontMatter:{id:"client-cpp-2.5.0",title:"Client CPP 2.5.0",sidebar_label:"Client CPP 2.5.0"}},p={},c=[],s={toc:c},u="wrapper";function m(e){let{components:t,...r}=e;return(0,i.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"[C++]"," Windows CMake corrections ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6336"},"#6336")),(0,i.kt)("li",{parentName:"ul"},"[C++]"," Avoid calling redeliverMessages() when message list is empty ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6480"},"#6480")),(0,i.kt)("li",{parentName:"ul"},"[C++]"," Improve cpp-client-lib: provide another ",(0,i.kt)("inlineCode",{parentName:"li"},"libpulsarwithdeps.a")," in dep/rpm ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6458"},"#6458"))))}m.isMDXComponent=!0}}]);