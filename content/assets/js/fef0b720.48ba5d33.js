(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[8169],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},v="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),v=c(n),y=o,m=v["".concat(l,".").concat(y)]||v[y]||d[y]||a;return n?r.createElement(m,s(s({ref:t},p),{},{components:n})):r.createElement(m,s({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=y;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[v]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},53184:(e,t,n)=>{"use strict";n.d(t,{Z:()=>f});var r=n(87462),o=n(63366),a=n(67294),s=n(86010),i=n(94780),l=n(44063),c=n(68010),p=n(90948),v=n(1588),d=n(34867);function y(e){return(0,d.Z)("MuiTableHead",e)}(0,v.Z)("MuiTableHead",["root"]);var m=n(85893);const u=["className","component"],h=(0,p.ZP)("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"table-header-group"}),g={variant:"head"},b="thead",f=a.forwardRef((function(e,t){const n=(0,c.Z)({props:e,name:"MuiTableHead"}),{className:a,component:p=b}=n,v=(0,o.Z)(n,u),d=(0,r.Z)({},n,{component:p}),f=(e=>{const{classes:t}=e;return(0,i.Z)({root:["root"]},y,t)})(d);return(0,m.jsx)(l.Z.Provider,{value:g,children:(0,m.jsx)(h,(0,r.Z)({as:p,className:(0,s.Z)(f.root,a),ref:t,role:p===b?null:"rowgroup",ownerState:d},v))})}))},41717:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>v,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var r=n(87462),o=(n(67294),n(3905)),a=n(55063),s=n(97926),i=n.n(s);const l={id:"client-python",title:"Python Client Release Notes",sidebar_label:"Python Client"},c=void 0,p={unversionedId:"client-python",id:"client-python",title:"Python Client Release Notes",description:"",source:"@site/release-notes/client-python.mdx",sourceDirName:".",slug:"/client-python",permalink:"/release-notes/client-python",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/release-notes/client-python.mdx",tags:[],version:"current",frontMatter:{id:"client-python",title:"Python Client Release Notes",sidebar_label:"Python Client"},sidebar:"releaseNote",previous:{title:"C++ Client",permalink:"/release-notes/client-cpp"},next:{title:"Go Client",permalink:"/release-notes/client-go"}},v={},d=[],y={toc:d};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(a.Z,{data:i(),mdxType:"ClientReleaseTable"}))}m.isMDXComponent=!0},97926:e=>{e.exports=[{tagName:"v3.0.0",vtag:"3.0.x",releaseNotes:"/release-notes/versioned/client-python-3.0.0/",doc:"/docs/client-libraries-python",version:"v3.0.x"},{tagName:"v2.10.1",vtag:"2.10.x",releaseNotes:"/release-notes/versioned/client-python-2.10.1/",doc:"/docs/2.10.x/client-libraries-python",version:"v2.10.x"},{tagName:"v2.10.0",vtag:"2.10.x",releaseNotes:"/release-notes/versioned/client-python-2.10.0/",doc:"/docs/2.10.x/client-libraries-python",version:""},{tagName:"v2.9.3",vtag:"2.9.x",releaseNotes:"/release-notes/versioned/client-python-2.9.3/",doc:"/docs/2.9.x/client-libraries-python",version:"v2.9.x"},{tagName:"v2.9.2",vtag:"2.9.x",releaseNotes:"/release-notes/versioned/client-python-2.9.2/",doc:"/docs/2.9.x/client-libraries-python",version:""},{tagName:"v2.8.4",vtag:"2.8.x",releaseNotes:"/release-notes/versioned/client-python-2.8.4/",doc:"/docs/2.8.x/client-libraries-python",version:"v2.8.x"},{tagName:"v2.8.3",vtag:"2.8.x",releaseNotes:"/release-notes/versioned/client-python-2.8.3/",doc:"/docs/2.8.x/client-libraries-python",version:""},{tagName:"v2.8.2",vtag:"2.8.x",releaseNotes:"/release-notes/versioned/client-python-2.8.2/",doc:"/docs/2.8.x/client-libraries-python",version:""},{tagName:"v2.8.1",vtag:"2.8.x",releaseNotes:"/release-notes/versioned/client-python-2.8.1/",doc:"/docs/2.8.x/client-libraries-python",version:""},{tagName:"v2.8.0",vtag:"2.8.x",releaseNotes:"/release-notes/versioned/client-python-2.8.0/",doc:"/docs/2.8.x/client-libraries-python",version:""},{tagName:"v2.7.5",vtag:"2.7.5",releaseNotes:"/release-notes/versioned/client-python-2.7.5/",doc:"/docs/2.7.5/client-libraries-python",version:"v2.7.x"},{tagName:"v2.7.4",vtag:"2.7.4",releaseNotes:"/release-notes/versioned/client-python-2.7.4/",doc:"/docs/2.7.4/client-libraries-python",version:""},{tagName:"v2.7.2",vtag:"2.7.2",releaseNotes:"/release-notes/versioned/client-python-2.7.2/",doc:"/docs/2.7.2/client-libraries-python",version:""},{tagName:"v2.7.1",vtag:"2.7.1",releaseNotes:"/release-notes/versioned/client-python-2.7.1/",doc:"/docs/2.7.1/client-libraries-python",version:""},{tagName:"v2.6.2",vtag:"2.6.2",releaseNotes:"/release-notes/versioned/client-python-2.6.2/",doc:"/docs/2.6.2/client-libraries-python",version:"v2.6.x"},{tagName:"v2.6.0",vtag:"2.6.0",releaseNotes:"/release-notes/versioned/client-python-2.6.0/",doc:"/docs/2.6.0/client-libraries-python",version:""},{tagName:"v2.5.2",vtag:"2.5.2",releaseNotes:"/release-notes/versioned/client-python-2.5.2/",doc:"/docs/2.5.2/client-libraries-python",version:"v2.5.x"},{tagName:"v2.5.1",vtag:"2.5.1",releaseNotes:"/release-notes/versioned/client-python-2.5.1/",doc:"/docs/2.5.1/client-libraries-python",version:""}]},55063:(e,t,n)=>{"use strict";n.d(t,{Z:()=>p});var r=n(67294),o=n(7906),a=n(295),s=n(53252),i=n(53184),l=n(53816),c=n(95999);function p(e){return r.createElement(o.Z,{size:"small"},r.createElement(i.Z,null,r.createElement(l.Z,null,["Version","Release Note","Documentation"].map((e=>r.createElement(s.Z,{className:"font-bold",sx:{color:"inherit"},key:e},r.createElement(c.Z,null,e)))))),r.createElement(a.Z,null,e.data.map(((e,t)=>r.createElement(l.Z,{key:t,sx:{color:"inherit"}},r.createElement(s.Z,{sx:{color:"inherit"}},e.version),r.createElement(s.Z,{sx:{color:"inherit"}},r.createElement("a",{href:e.releaseNotes},e.tagName)),r.createElement(s.Z,{sx:{color:"inherit"}},r.createElement("a",{href:e.doc},e.vtag," Documentation")))))))}}}]);