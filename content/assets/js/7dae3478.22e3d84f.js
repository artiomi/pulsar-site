"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[6227],{3905:(t,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>m});var l=a(67294);function p(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,l)}return a}function r(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){p(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function n(t,e){if(null==t)return{};var a,l,p=function(t,e){if(null==t)return{};var a,l,p={},i=Object.keys(t);for(l=0;l<i.length;l++)a=i[l],e.indexOf(a)>=0||(p[a]=t[a]);return p}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(l=0;l<i.length;l++)a=i[l],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(p[a]=t[a])}return p}var u=l.createContext({}),o=function(t){var e=l.useContext(u),a=e;return t&&(a="function"==typeof t?t(e):r(r({},e),t)),a},c=function(t){var e=o(t.components);return l.createElement(u.Provider,{value:e},t.children)},h="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},g=l.forwardRef((function(t,e){var a=t.components,p=t.mdxType,i=t.originalType,u=t.parentName,c=n(t,["components","mdxType","originalType","parentName"]),h=o(a),g=p,m=h["".concat(u,".").concat(g)]||h[g]||s[g]||i;return a?l.createElement(m,r(r({ref:e},c),{},{components:a})):l.createElement(m,r({ref:e},c))}));function m(t,e){var a=arguments,p=e&&e.mdxType;if("string"==typeof t||p){var i=a.length,r=new Array(i);r[0]=g;var n={};for(var u in e)hasOwnProperty.call(e,u)&&(n[u]=e[u]);n.originalType=t,n[h]="string"==typeof t?t:p,r[1]=n;for(var o=2;o<i;o++)r[o]=a[o];return l.createElement.apply(null,r)}return l.createElement.apply(null,a)}g.displayName="MDXCreateElement"},24654:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>u,contentTitle:()=>r,default:()=>s,frontMatter:()=>i,metadata:()=>n,toc:()=>o});var l=a(87462),p=(a(67294),a(3905));const i={id:"pulsar-client-go-0.8.0",title:"Pulsar Client Go",sidebar_label:"Pulsar Client Go"},r=void 0,n={unversionedId:"versioned/pulsar-client-go-0.8.0",id:"versioned/pulsar-client-go-0.8.0",title:"Pulsar Client Go",description:"What's Changed",source:"@site/release-notes/versioned/pulsar-client-go-0.8.0.md",sourceDirName:"versioned",slug:"/versioned/pulsar-client-go-0.8.0",permalink:"/release-notes/versioned/pulsar-client-go-0.8.0",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/release-notes/versioned/pulsar-client-go-0.8.0.md",tags:[],version:"current",frontMatter:{id:"pulsar-client-go-0.8.0",title:"Pulsar Client Go",sidebar_label:"Pulsar Client Go"}},u={},o=[{value:"What&#39;s Changed",id:"whats-changed",level:2},{value:"New Contributors",id:"new-contributors",level:2}],c={toc:o},h="wrapper";function s(t){let{components:e,...a}=t;return(0,p.kt)(h,(0,l.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,p.kt)("h2",{id:"whats-changed"},"What's Changed"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"Update release docs with missing information by @cckellogg in ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/656"},"https://github.com/apache/pulsar-client-go/pull/656")),(0,p.kt)("li",{parentName:"ul"},"Update change log for 0.7.0 release by @cckellogg in ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/655"},"https://github.com/apache/pulsar-client-go/pull/655")),(0,p.kt)("li",{parentName:"ul"},"Update version to 0.7.0 by @cckellogg in ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/654"},"https://github.com/apache/pulsar-client-go/pull/654")),(0,p.kt)("li",{parentName:"ul"},"fix issue 650,different handle sequence value by @baomingyu in ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/651"},"https://github.com/apache/pulsar-client-go/pull/651")),(0,p.kt)("li",{parentName:"ul"},"Support nack backoff policy for SDK by @wolfstudy in ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/660"},"https://github.com/apache/pulsar-client-go/pull/660")),(0,p.kt)("li",{parentName:"ul"},"Remove unused dependency in ",(0,p.kt)("inlineCode",{parentName:"li"},"oauth2")," module by @reugn in ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/661"},"https://github.com/apache/pulsar-client-go/pull/661")),(0,p.kt)("li",{parentName:"ul"},"[Issue 662]"," Fix race in connection.go waitUntilReady() by @bschofield in ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/663"},"https://github.com/apache/pulsar-client-go/pull/663")),(0,p.kt)("li",{parentName:"ul"},"Update dependencies by @reugn in ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/665"},"https://github.com/apache/pulsar-client-go/pull/665")),(0,p.kt)("li",{parentName:"ul"},"[Issue 652]"," Quick fixes to the documentation for the main building blocks of the library by @reugn in ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/667"},"https://github.com/apache/pulsar-client-go/pull/667")),(0,p.kt)("li",{parentName:"ul"},"Add subscription properties for ConsumerOptions by @wolfstudy in ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/671"},"https://github.com/apache/pulsar-client-go/pull/671")),(0,p.kt)("li",{parentName:"ul"},"Add new bug-resistant build constraints by @reugn in ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/670"},"https://github.com/apache/pulsar-client-go/pull/670")),(0,p.kt)("li",{parentName:"ul"},"Handle the parameters parsing error in NewProvider by @reugn in ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/673"},"https://github.com/apache/pulsar-client-go/pull/673")),(0,p.kt)("li",{parentName:"ul"},"Update email template of release docs by @izumo27 in ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/674"},"https://github.com/apache/pulsar-client-go/pull/674")),(0,p.kt)("li",{parentName:"ul"},"Add properties filed for batch container by @wolfstudy in ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/683"},"https://github.com/apache/pulsar-client-go/pull/683")),(0,p.kt)("li",{parentName:"ul"},"[Issue 513]"," Correct apparent logic error in batchContainer's hasSpace() method by @bschofield in ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/678"},"https://github.com/apache/pulsar-client-go/pull/678")),(0,p.kt)("li",{parentName:"ul"},"Upgrade DataDog/zstd to v1.5.0 by @dferstay in ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/690"},"https://github.com/apache/pulsar-client-go/pull/690")),(0,p.kt)("li",{parentName:"ul"},"fix:add order key to message by @leizhiyuan in ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/688"},"https://github.com/apache/pulsar-client-go/pull/688")),(0,p.kt)("li",{parentName:"ul"},"Set default go version to 1.13 in CI related files by @reugn in ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/692"},"https://github.com/apache/pulsar-client-go/pull/692")),(0,p.kt)("li",{parentName:"ul"},"[Partition Consumer]"," Provide lock-free access to compression providers by @dferstay in ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/689"},"https://github.com/apache/pulsar-client-go/pull/689")),(0,p.kt)("li",{parentName:"ul"},"Use a separate gorutine to handle the logic of reconnect by @wolfstudy in ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/691"},"https://github.com/apache/pulsar-client-go/pull/691")),(0,p.kt)("li",{parentName:"ul"},"[DefaultRouter]"," add a parallel bench test by @dferstay in ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/693"},"https://github.com/apache/pulsar-client-go/pull/693")),(0,p.kt)("li",{parentName:"ul"},'Revert "Use a separate gorutine to handle the logic of reconnect" by @wolfstudy in ',(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/700"},"https://github.com/apache/pulsar-client-go/pull/700")),(0,p.kt)("li",{parentName:"ul"},"Fix data race while accessing connection in partitionProducer by @wolfstudy in ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/701"},"https://github.com/apache/pulsar-client-go/pull/701")),(0,p.kt)("li",{parentName:"ul"},"Fix stuck when reconnect broker by @wolfstudy in ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/703"},"https://github.com/apache/pulsar-client-go/pull/703")),(0,p.kt)("li",{parentName:"ul"},"Fix slice bounds out of range for readSingleMessage by @wolfstudy in ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/709"},"https://github.com/apache/pulsar-client-go/pull/709")),(0,p.kt)("li",{parentName:"ul"},"Encryption failure test case fix by @GPrabhudas in ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/708"},"https://github.com/apache/pulsar-client-go/pull/708")),(0,p.kt)("li",{parentName:"ul"},"[DefaultRouter]"," fix unnecessary system clock reads due to races accessing router state by @dferstay in ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/694"},"https://github.com/apache/pulsar-client-go/pull/694")),(0,p.kt)("li",{parentName:"ul"},"Fix negative WaitGroup counter issue by @wolfstudy in ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/712"},"https://github.com/apache/pulsar-client-go/pull/712")),(0,p.kt)("li",{parentName:"ul"},"[issue 675]"," oauth2 use golang-jwt address CVE-2020-26160 by @zzzming in ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/713"},"https://github.com/apache/pulsar-client-go/pull/713")),(0,p.kt)("li",{parentName:"ul"},"readme: add note about how to build and test by @pgier in ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/714"},"https://github.com/apache/pulsar-client-go/pull/714")),(0,p.kt)("li",{parentName:"ul"},"Bump oauth2 package version to the latest in master by @iorvd in ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/715"},"https://github.com/apache/pulsar-client-go/pull/715")),(0,p.kt)("li",{parentName:"ul"},"Fix closed connection leak by @billowqiu in ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/716"},"https://github.com/apache/pulsar-client-go/pull/716")),(0,p.kt)("li",{parentName:"ul"},"[Bugfix]"," producer runEventsLoop for reconnect early exit by @billowqiu in ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/721"},"https://github.com/apache/pulsar-client-go/pull/721")),(0,p.kt)("li",{parentName:"ul"},"[issue 679][oauth2]"," Fix macos compiler warnings by @pgier in ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/719"},"https://github.com/apache/pulsar-client-go/pull/719")),(0,p.kt)("li",{parentName:"ul"},"[optimize]"," Stop batchFlushTicker when Disable batching by @Shoothzj in ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/720"},"https://github.com/apache/pulsar-client-go/pull/720")),(0,p.kt)("li",{parentName:"ul"},"Markdown error fix by @Shoothzj in ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/722"},"https://github.com/apache/pulsar-client-go/pull/722"))),(0,p.kt)("h2",{id:"new-contributors"},"New Contributors"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"@bschofield made their first contribution in ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/663"},"https://github.com/apache/pulsar-client-go/pull/663")),(0,p.kt)("li",{parentName:"ul"},"@izumo27 made their first contribution in ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/674"},"https://github.com/apache/pulsar-client-go/pull/674")),(0,p.kt)("li",{parentName:"ul"},"@pgier made their first contribution in ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/714"},"https://github.com/apache/pulsar-client-go/pull/714")),(0,p.kt)("li",{parentName:"ul"},"@iorvd made their first contribution in ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/715"},"https://github.com/apache/pulsar-client-go/pull/715")),(0,p.kt)("li",{parentName:"ul"},"@billowqiu made their first contribution in ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/716"},"https://github.com/apache/pulsar-client-go/pull/716"))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Full Changelog"),": ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar-client-go/compare/v0.7.0...v0.8.0-candidate-1"},"https://github.com/apache/pulsar-client-go/compare/v0.7.0...v0.8.0-candidate-1")))}s.isMDXComponent=!0}}]);