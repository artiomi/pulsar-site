"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[25977],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>v});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(a),h=r,v=d["".concat(s,".").concat(h)]||d[h]||p[h]||i;return a?n.createElement(v,o(o({ref:t},u),{},{components:a})):n.createElement(v,o({ref:t},u))}));function v(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},97543:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const i={},o="Improper Hostname Verification in Java Client and Proxy can expose authentication data via MITM (CVE-2022-33681)",l={unversionedId:"CVE-2022-33681",id:"CVE-2022-33681",title:"Improper Hostname Verification in Java Client and Proxy can expose authentication data via MITM (CVE-2022-33681)",description:"PRODUCT AFFECTED:",source:"@site/security/CVE-2022-33681.md",sourceDirName:".",slug:"/CVE-2022-33681",permalink:"/security/CVE-2022-33681",draft:!1,tags:[],version:"current",frontMatter:{}},s={},c=[{value:"PRODUCT AFFECTED:",id:"product-affected",level:2},{value:"PROBLEM:",id:"problem",level:2},{value:"WORKAROUND",id:"workaround",level:2},{value:"RELATED LINKS",id:"related-links",level:2},{value:"ACKNOWLEDGEMENTS:",id:"acknowledgements",level:2}],u={toc:c},d="wrapper";function p(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"improper-hostname-verification-in-java-client-and-proxy-can-expose-authentication-data-via-mitm-cve-2022-33681"},"Improper Hostname Verification in Java Client and Proxy can expose authentication data via MITM (CVE-2022-33681)"),(0,r.kt)("h2",{id:"product-affected"},"PRODUCT AFFECTED:"),(0,r.kt)("p",null,"This issue affects Apache Pulsar 2.10, 2.6 and earlier, 2.7, 2.8, 2.9."),(0,r.kt)("h2",{id:"problem"},"PROBLEM:"),(0,r.kt)("p",null,"Severity: high"),(0,r.kt)("p",null,"Delayed TLS hostname verification in the Pulsar Java Client and the Pulsar Proxy make each client vulnerable to a man in the middle attack. Connections from the Pulsar Java Client to the Pulsar Broker/Proxy and connections from the Pulsar Proxy to the Pulsar Broker are vulnerable. Authentication data is sent before verifying the server\u2019s TLS certificate matches the hostname, which means authentication data could be exposed to an attacker."),(0,r.kt)("p",null,"An attacker can only take advantage of this vulnerability by taking control of a machine 'between' the client and the server. The attacker must then actively manipulate traffic to perform the attack by providing the client with a cryptographically valid certificate for an unrelated host. Because the client sends authentication data before performing hostname verification, an attacker could gain access to the client\u2019s authentication data. The client eventually closes the connection when it verifies the hostname and identifies the targeted hostname does not match a hostname on the certificate."),(0,r.kt)("p",null,"Because the client eventually closes the connection, the value of the intercepted authentication data depends on the authentication method used by the client. Token based authentication and username/password authentication methods are vulnerable because the authentication data can be used to impersonate the client in a separate session."),(0,r.kt)("p",null,"This issue affects Apache Pulsar Java Client versions 2.7.0 to 2.7.4; 2.8.0 to 2.8.3; 2.9.0 to 2.9.2; 2.10.0; 2.6.4 and earlier."),(0,r.kt)("p",null,"This issue has been assigned ",(0,r.kt)("a",{parentName:"p",href:"http://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2022-33681"},"CVE-2022-33681"),"."),(0,r.kt)("h2",{id:"workaround"},"WORKAROUND"),(0,r.kt)("p",null,"Any users running affected versions of the Java Client should rotate vulnerable authentication data, including tokens and passwords."),(0,r.kt)("p",null,"2.7 Pulsar Java Client users should upgrade to 2.7.5, and rotate vulnerable authentication data, including tokens and passwords."),(0,r.kt)("p",null,"2.8 Pulsar Java Client users should upgrade to 2.8.4, and rotate vulnerable authentication data, including tokens and passwords."),(0,r.kt)("p",null,"2.9 Pulsar Java Client users should upgrade to 2.9.3, and rotate vulnerable authentication data, including tokens and passwords."),(0,r.kt)("p",null,"2.10 Pulsar Java Client users should upgrade to 2.10.1, and rotate vulnerable authentication data, including tokens and passwords."),(0,r.kt)("p",null,"Any users running the Pulsar Java Client for 2.6.4 and earlier should upgrade to one of the above patched versions, and rotate vulnerable authentication data, including tokens and passwords."),(0,r.kt)("h2",{id:"related-links"},"RELATED LINKS"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2022-33681"},"CVE-2022-33681 at cve.mitre.org")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://lists.apache.org/thread/fpo6x10trvn20hlk0dmnr5vlz5v4kl3d"},"https://lists.apache.org/thread/fpo6x10trvn20hlk0dmnr5vlz5v4kl3d"))),(0,r.kt)("h2",{id:"acknowledgements"},"ACKNOWLEDGEMENTS:"),(0,r.kt)("p",null,"This issue was discovered by Michael Marshall of DataStax."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/security/"},"Security Advisories")))}p.isMDXComponent=!0}}]);