"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[88237],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),m=l(n),f=a,d=m["".concat(c,".").concat(f)]||m[f]||p[f]||o;return n?r.createElement(d,i(i({ref:t},s),{},{components:n})):r.createElement(d,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u[m]="string"==typeof e?e:a,i[1]=u;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},44756:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>u,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={id:"functions-runtime-thread",title:"Configure thread runtime",sidebar_label:"Configure thread runtime"},i=void 0,u={unversionedId:"functions-runtime-thread",id:"functions-runtime-thread",title:"Configure thread runtime",description:"You can use the default configurations of thread runtime in the conf/functions_worker.yml file.",source:"@site/docs/functions-runtime-thread.md",sourceDirName:".",slug:"/functions-runtime-thread",permalink:"/docs/next/functions-runtime-thread",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/docs/functions-runtime-thread.md",tags:[],version:"current",frontMatter:{id:"functions-runtime-thread",title:"Configure thread runtime",sidebar_label:"Configure thread runtime"},sidebar:"docsSidebar",previous:{title:"Configure function runtime",permalink:"/docs/next/functions-runtime"},next:{title:"Configure process runtime",permalink:"/docs/next/functions-runtime-process"}},c={},l=[],s={toc:l},m="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"You can use the default configurations of thread runtime in the ",(0,a.kt)("inlineCode",{parentName:"p"},"conf/functions_worker.yml")," file. "),(0,a.kt)("p",null,"If you want to customize more parameters, such as thread group name, refer to the following example."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'functionRuntimeFactoryClassName: org.apache.pulsar.functions.runtime.thread.ThreadRuntimeFactory\nfunctionRuntimeFactoryConfigs:\n  threadGroupName: "Your Function Container Group"\n')),(0,a.kt)("p",null,"To set the client memory limit for thread runtime, you can configure ",(0,a.kt)("inlineCode",{parentName:"p"},"pulsarClientMemoryLimit"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"functionRuntimeFactoryConfigs:\n#  pulsarClientMemoryLimit\n# # the max memory in bytes the pulsar client can use\n#   absoluteValue:\n# # the max memory the pulsar client can use as a percentage of max direct memory set for JVM\n#   percentOfMaxDirectMemory:\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"If ",(0,a.kt)("inlineCode",{parentName:"p"},"absoluteValue")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"percentOfMaxDirectMemory")," are both set, the smaller value is used.")),(0,a.kt)("p",null,"For more details, see ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/pulsar-functions/runtime/src/main/java/org/apache/pulsar/functions/runtime/thread/ThreadRuntimeFactoryConfig.java"},"code"),"."))}p.isMDXComponent=!0}}]);