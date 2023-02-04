"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[32775],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>b});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=l(n),d=i,b=p["".concat(u,".").concat(d)]||p[d]||f[d]||o;return n?r.createElement(b,a(a({ref:t},s),{},{components:n})):r.createElement(b,a({ref:t},s))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c[p]="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},32136:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>f,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=n(87462),i=(n(67294),n(3905));const o={id:"functions-deploy-cluster-builtin",title:"Use built-in functions",sidebar_label:"Use built-in functions"},a=void 0,c={unversionedId:"functions-deploy-cluster-builtin",id:"version-2.11.x/functions-deploy-cluster-builtin",title:"Use built-in functions",description:"Similar to built-in connectors, the code of Java functions packaged as NAR that are placed in the functions directory of the function worker are loaded at startup and can be referenced when creating a function.",source:"@site/versioned_docs/version-2.11.x/functions-deploy-cluster-builtin.md",sourceDirName:".",slug:"/functions-deploy-cluster-builtin",permalink:"/docs/2.11.x/functions-deploy-cluster-builtin",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.11.x/functions-deploy-cluster-builtin.md",tags:[],version:"2.11.x",frontMatter:{id:"functions-deploy-cluster-builtin",title:"Use built-in functions",sidebar_label:"Use built-in functions"},sidebar:"docsSidebar",previous:{title:"Enable package management service",permalink:"/docs/2.11.x/functions-deploy-cluster-package"},next:{title:"Trigger a function",permalink:"/docs/2.11.x/functions-deploy-trigger"}},u={},l=[],s={toc:l},p="wrapper";function f(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Similar to built-in connectors, the code of Java functions ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.11.x/functions-package-java"},"packaged as NAR")," that are placed in the ",(0,i.kt)("inlineCode",{parentName:"p"},"functions")," directory of the function worker are loaded at startup and can be referenced when creating a function."),(0,i.kt)("p",null,"For instance if you have a built-in function with name ",(0,i.kt)("inlineCode",{parentName:"p"},"exclamation")," in its ",(0,i.kt)("inlineCode",{parentName:"p"},"pulsar-io.yaml"),", you can create a function instance with:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-admin functions create \\\n  --function-type exclamation \\\n  --inputs persistent://public/default/input-1 \\\n  --output persistent://public/default/output-1\n")))}f.isMDXComponent=!0}}]);