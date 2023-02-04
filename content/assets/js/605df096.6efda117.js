"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[4171],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=c(r),m=a,d=s["".concat(p,".").concat(m)]||s[m]||h[m]||i;return r?n.createElement(d,l(l({ref:t},u),{},{components:r})):n.createElement(d,l({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},25395:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const i={id:"client-python-2.8.1",title:"Client Python 2.8.1",sidebar_label:"Client Python 2.8.1"},l=void 0,o={unversionedId:"versioned/client-python-2.8.1",id:"versioned/client-python-2.8.1",title:"Client Python 2.8.1",description:"- Fix redefined Record or Enum in Python schema #11595",source:"@site/release-notes/versioned/client-python-2.8.1.md",sourceDirName:"versioned",slug:"/versioned/client-python-2.8.1",permalink:"/release-notes/versioned/client-python-2.8.1",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/release-notes/versioned/client-python-2.8.1.md",tags:[],version:"current",frontMatter:{id:"client-python-2.8.1",title:"Client Python 2.8.1",sidebar_label:"Client Python 2.8.1"}},p={},c=[],u={toc:c},s="wrapper";function h(e){let{components:t,...r}=e;return(0,a.kt)(s,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fix redefined Record or Enum in Python schema ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11595"},"#11595")),(0,a.kt)("li",{parentName:"ul"},"Fix Python doc generate ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11585"},"#11585")),(0,a.kt)("li",{parentName:"ul"},"Fix Python schema array map with record ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11530"},"#11530")),(0,a.kt)("li",{parentName:"ul"},"Fixed import when AvroSchema is not being used ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11034"},"#11034")),(0,a.kt)("li",{parentName:"ul"},"Fix deadlock caused by ExecutorService::close ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11882"},"#11882")),(0,a.kt)("li",{parentName:"ul"},"Fixed crash when using Python logger ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10981"},"#10981")),(0,a.kt)("li",{parentName:"ul"},"Ensure producer is keeping the client object alive ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11887"},"#11887")),(0,a.kt)("li",{parentName:"ul"},"Fix fields that are ignoring the required key argument ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11508"},"#11508")),(0,a.kt)("li",{parentName:"ul"},"Fix handle complex schema ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11400"},"#11400")),(0,a.kt)("li",{parentName:"ul"},"Check if the record is not None ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11559"},"#11559"))))}h.isMDXComponent=!0}}]);