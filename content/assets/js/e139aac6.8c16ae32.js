"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[22844],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>d});var r=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var s=r.createContext({}),l=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=l(t.components);return r.createElement(s.Provider,{value:e},t.children)},p="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,s=t.parentName,u=c(t,["components","mdxType","originalType","parentName"]),p=l(n),f=o,d=p["".concat(s,".").concat(f)]||p[f]||m[f]||a;return n?r.createElement(d,i(i({ref:e},u),{},{components:n})):r.createElement(d,i({ref:e},u))}));function d(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=t,c[p]="string"==typeof t?t:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},80659:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const a={id:"txn-monitor",title:"How to monitor transactions?",sidebar_label:"How to monitor transactions?"},i=void 0,c={unversionedId:"txn-monitor",id:"txn-monitor",title:"How to monitor transactions?",description:"You can monitor the status of the transactions in Prometheus and Grafana using the transaction metrics.",source:"@site/docs/txn-monitor.md",sourceDirName:".",slug:"/txn-monitor",permalink:"/docs/next/txn-monitor",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/docs/txn-monitor.md",tags:[],version:"current",frontMatter:{id:"txn-monitor",title:"How to monitor transactions?",sidebar_label:"How to monitor transactions?"},sidebar:"docsSidebar",previous:{title:"How to use transactions?",permalink:"/docs/next/txn-use"},next:{title:"Tutorials",permalink:"/docs/next/install-deploy-upgrade-landing"}},s={},l=[],u={toc:l},p="wrapper";function m(t){let{components:e,...n}=t;return(0,o.kt)(p,(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You can monitor the status of the transactions in Prometheus and Grafana using the ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/reference-metrics#pulsar-transaction"},"transaction metrics"),". "),(0,o.kt)("p",null,"For how to configure Prometheus and Grafana, see ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/deploy-monitoring"},"here"),"."))}m.isMDXComponent=!0}}]);