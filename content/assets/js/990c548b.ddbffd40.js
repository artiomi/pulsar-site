(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[7883],{3905:(e,r,a)=>{"use strict";a.d(r,{Zo:()=>c,kt:()=>g});var s=a(67294);function t(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function o(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);r&&(s=s.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,s)}return a}function l(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?o(Object(a),!0).forEach((function(r){t(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function n(e,r){if(null==e)return{};var a,s,t=function(e,r){if(null==e)return{};var a,s,t={},o=Object.keys(e);for(s=0;s<o.length;s++)a=o[s],r.indexOf(a)>=0||(t[a]=e[a]);return t}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)a=o[s],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var i=s.createContext({}),u=function(e){var r=s.useContext(i),a=r;return e&&(a="function"==typeof e?e(r):l(l({},r),e)),a},c=function(e){var r=u(e.components);return s.createElement(i.Provider,{value:r},e.children)},d="mdxType",v={inlineCode:"code",wrapper:function(e){var r=e.children;return s.createElement(s.Fragment,{},r)}},p=s.forwardRef((function(e,r){var a=e.components,t=e.mdxType,o=e.originalType,i=e.parentName,c=n(e,["components","mdxType","originalType","parentName"]),d=u(a),p=t,g=d["".concat(i,".").concat(p)]||d[p]||v[p]||o;return a?s.createElement(g,l(l({ref:r},c),{},{components:a})):s.createElement(g,l({ref:r},c))}));function g(e,r){var a=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var o=a.length,l=new Array(o);l[0]=p;var n={};for(var i in r)hasOwnProperty.call(r,i)&&(n[i]=r[i]);n.originalType=e,n[d]="string"==typeof e?e:t,l[1]=n;for(var u=2;u<o;u++)l[u]=a[u];return s.createElement.apply(null,l)}return s.createElement.apply(null,a)}p.displayName="MDXCreateElement"},53184:(e,r,a)=>{"use strict";a.d(r,{Z:()=>f});var s=a(87462),t=a(63366),o=a(67294),l=a(86010),n=a(94780),i=a(44063),u=a(68010),c=a(90948),d=a(1588),v=a(34867);function p(e){return(0,v.Z)("MuiTableHead",e)}(0,d.Z)("MuiTableHead",["root"]);var g=a(85893);const h=["className","component"],m=(0,c.ZP)("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:(e,r)=>r.root})({display:"table-header-group"}),b={variant:"head"},N="thead",f=o.forwardRef((function(e,r){const a=(0,u.Z)({props:e,name:"MuiTableHead"}),{className:o,component:c=N}=a,d=(0,t.Z)(a,h),v=(0,s.Z)({},a,{component:c}),f=(e=>{const{classes:r}=e;return(0,n.Z)({root:["root"]},p,r)})(v);return(0,g.jsx)(i.Z.Provider,{value:b,children:(0,g.jsx)(m,(0,s.Z)({as:c,className:(0,l.Z)(f.root,o),ref:r,role:c===N?null:"rowgroup",ownerState:v},d))})}))},12551:(e,r,a)=>{"use strict";a.r(r),a.d(r,{assets:()=>N,contentTitle:()=>m,default:()=>Z,frontMatter:()=>h,metadata:()=>b,toc:()=>f});var s=a(87462),t=a(67294),o=a(3905),l=a(7906),n=a(295),i=a(53252),u=a(53184),c=a(53816),d=a(95999);function v(e){return t.createElement(l.Z,{sx:{minWidth:650},size:"small"},t.createElement(u.Z,null,t.createElement(c.Z,null,["Version","Release Note","Release Blog","Documentation","Release Date","Release Manager"].map((e=>t.createElement(i.Z,{className:"font-bold",sx:{color:"inherit"},key:e},t.createElement(d.Z,null,e)))))),t.createElement(n.Z,null,e.data.map(((e,r)=>t.createElement(c.Z,{key:r,sx:{color:"inherit"}},t.createElement(i.Z,{sx:{color:"inherit"}},e.version),t.createElement(i.Z,{sx:{color:"inherit"}},t.createElement("a",{href:e.releaseNotes},e.tagName)),t.createElement(i.Z,{sx:{color:"inherit"}},e.releaseBlog?t.createElement("a",{href:e.releaseBlog},"What's New in Apache Pulsar ",e.tagName):t.createElement(t.Fragment,null)),t.createElement(i.Z,{sx:{color:"inherit"}},t.createElement("a",{href:e.doc},e.vtag," Documentation")),t.createElement(i.Z,{sx:{color:"inherit"}},new Date(e.publishedAt).toDateString().substring(4)),t.createElement(i.Z,{sx:{color:"inherit"}},t.createElement("a",{href:`https://github.com/${e.author}`},e.author)))))))}var p=a(82288),g=a.n(p);const h={id:"pulsar",title:"Pulsar Release Notes",sidebar_label:"Pulsar Release Notes",slug:"/"},m=void 0,b={unversionedId:"pulsar",id:"pulsar",title:"Pulsar Release Notes",description:"Release notes",source:"@site/release-notes/pulsar.mdx",sourceDirName:".",slug:"/",permalink:"/release-notes/",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/release-notes/pulsar.mdx",tags:[],version:"current",frontMatter:{id:"pulsar",title:"Pulsar Release Notes",sidebar_label:"Pulsar Release Notes",slug:"/"},sidebar:"releaseNote",next:{title:"Pulsar Clients Release Notes",permalink:"/release-notes/clients"}},N={},f=[{value:"Release notes",id:"release-notes",level:2},{value:"Previous versions",id:"previous-versions",level:2}],x={toc:f};function Z(e){let{components:r,...a}=e;return(0,o.kt)("wrapper",(0,s.Z)({},x,a,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"release-notes"},"Release notes"),(0,o.kt)(v,{data:g(),mdxType:"PulsarReleaseTable"}),(0,o.kt)("h2",{id:"previous-versions"},"Previous versions"),(0,o.kt)("p",null,"All release notes of previous versions are available ",(0,o.kt)("a",{parentName:"p",href:"legacy"},"here"),"."))}Z.isMDXComponent=!0},82288:e=>{e.exports=[{author:"liangyepianzhou",tagName:"v2.10.3",publishedAt:"2023-01-04T01:53:34Z",vtag:"2.10.x",releaseNotes:"/release-notes/versioned/pulsar-2.10.3/",releaseBlog:"",doc:"/docs/2.10.x",version:"v2.10.x"},{author:"Jason918",tagName:"v2.10.2",publishedAt:"2022-10-28T01:53:34Z",vtag:"2.10.x",releaseNotes:"/release-notes/versioned/pulsar-2.10.2/",releaseBlog:"",doc:"/docs/2.10.x",version:""},{author:"codelipenghui",tagName:"v2.10.1",publishedAt:"2022-07-04T14:45:46Z",vtag:"2.10.x",releaseNotes:"/release-notes/versioned/pulsar-2.10.1/",releaseBlog:"/blog/2022/07/12/Apache-Pulsar-2-10-1",doc:"/docs/2.10.x",version:""},{author:"codelipenghui",tagName:"v2.10.0",publishedAt:"2022-04-18T02:08:43Z",vtag:"2.10.x",releaseNotes:"/release-notes/versioned/pulsar-2.10.0/",releaseBlog:"",doc:"/docs/2.10.x",version:""},{author:"congbobo184",tagName:"v2.9.4",publishedAt:"2022-12-28T01:12:20Z",vtag:"2.9.x",releaseNotes:"/release-notes/versioned/pulsar-2.9.4/",releaseBlog:"",doc:"/docs/2.9.x",version:"v2.9.x"},{author:"mattisonchao",tagName:"v2.9.3",publishedAt:"2022-07-20T02:04:10Z",vtag:"2.9.x",releaseNotes:"/release-notes/versioned/pulsar-2.9.3/",releaseBlog:"/blog/2022/07/27/Apache-Pulsar-2-9-3",doc:"/docs/2.9.x",version:""},{author:"gaoran10",tagName:"v2.9.2",publishedAt:"2022-04-08T03:22:33Z",vtag:"2.9.x",releaseNotes:"/release-notes/versioned/pulsar-2.9.2/",releaseBlog:"/blog/2022/04/08/Apache-Pulsar-2-9-2",doc:"/docs/2.9.x",version:""},{author:"eolivelli",tagName:"v2.9.1",publishedAt:"2021-12-20T12:34:56Z",vtag:"2.9.x",releaseNotes:"/release-notes/versioned/pulsar-2.9.1/",releaseBlog:"",doc:"/docs/2.9.x",version:""},{author:"BewareMyPower",tagName:"v2.8.4",publishedAt:"2022-10-04T13:38:54Z",vtag:"2.8.x",releaseNotes:"/release-notes/versioned/pulsar-2.8.4/",releaseBlog:"",doc:"/docs/2.8.x",version:"v2.8.x"},{author:"michaeljmarshall",tagName:"v2.8.3",publishedAt:"2022-04-08T03:27:18Z",vtag:"2.8.x",releaseNotes:"/release-notes/versioned/pulsar-2.8.3/",releaseBlog:"",doc:"/docs/2.8.x",version:""},{author:"315157973",tagName:"v2.8.2",publishedAt:"2022-01-12T09:39:25Z",vtag:"2.8.x",releaseNotes:"/release-notes/versioned/pulsar-2.8.2/",releaseBlog:"",doc:"/docs/2.8.x",version:""},{author:"hangc0276",tagName:"v2.8.1",publishedAt:"2021-09-18T01:39:29Z",vtag:"2.8.x",releaseNotes:"/release-notes/versioned/pulsar-2.8.1/",releaseBlog:"/blog/2021/09/23/Apache-Pulsar-2-8-1",doc:"/docs/2.8.x",version:""},{author:"codelipenghui",tagName:"v2.8.0",publishedAt:"2021-06-15T10:39:18Z",vtag:"2.8.x",releaseNotes:"/release-notes/versioned/pulsar-2.8.0/",releaseBlog:"/blog/2021/06/12/Apache-Pulsar-2-8-0",doc:"/docs/2.8.x",version:""},{author:"Jason918",tagName:"v2.7.5",publishedAt:"2022-09-06T10:53:32Z",vtag:"2.7.5",releaseNotes:"/release-notes/versioned/pulsar-2.7.5/",releaseBlog:"/blog/2022/09/09/Apache-Pulsar-2-7-5",doc:"/docs/2.7.5",version:"v2.7.x"},{author:"Technoboy-",tagName:"v2.7.4",publishedAt:"2021-12-27T08:24:54Z",vtag:"2.7.4",releaseNotes:"/release-notes/versioned/pulsar-2.7.4/",releaseBlog:"/blog/2021/12/14/Apache-Pulsar-2-7-4",doc:"/docs/2.7.4",version:""},{author:"congbobo184",tagName:"v2.7.3",publishedAt:"2021-08-11T01:45:27Z",vtag:"2.7.3",releaseNotes:"/release-notes/versioned/pulsar-2.7.3/",releaseBlog:"/blog/2021/08/11/Apache-Pulsar-2-7-3",doc:"/docs/2.7.3",version:""},{author:"eolivelli",tagName:"v2.7.2",publishedAt:"2021-05-25T06:30:19Z",vtag:"2.7.2",releaseNotes:"/release-notes/versioned/pulsar-2.7.2/",releaseBlog:"/blog/2021/05/13/Apache-Pulsar-2-7-2",doc:"/docs/2.7.2",version:""},{author:"zymap",tagName:"v2.7.1",publishedAt:"2021-03-22T00:35:17Z",vtag:"2.7.1",releaseNotes:"/release-notes/versioned/pulsar-2.7.1/",releaseBlog:"",doc:"/docs/2.7.1",version:""},{author:"codelipenghui",tagName:"v2.7.0",publishedAt:"2020-12-03T08:29:15Z",vtag:"2.7.0",releaseNotes:"/release-notes/versioned/pulsar-2.7.0/",releaseBlog:"/blog/2020/12/24/Apache-Pulsar-2-7-0",doc:"/docs/2.7.0",version:""},{author:"lhotari",tagName:"v2.6.4",publishedAt:"2021-06-02T18:10:21Z",vtag:"2.6.4",releaseNotes:"/release-notes/versioned/pulsar-2.6.4/",releaseBlog:"",doc:"/docs/2.6.4",version:"v2.6.x"},{author:"codelipenghui",tagName:"v2.6.3",publishedAt:"2021-01-21T12:34:56Z",vtag:"2.6.3",releaseNotes:"/release-notes/versioned/pulsar-2.6.3/",releaseBlog:"",doc:"/docs/2.6.3",version:""},{author:"wolfstudy",tagName:"v2.6.2",publishedAt:"2020-11-09T05:08:25Z",vtag:"2.6.2",releaseNotes:"/release-notes/versioned/pulsar-2.6.2/",releaseBlog:"/blog/2020/11/09/Apache-Pulsar-2-6-2",doc:"/docs/2.6.2",version:""},{author:"wolfstudy",tagName:"v2.6.1",publishedAt:"2020-08-21T01:35:54Z",vtag:"2.6.1",releaseNotes:"/release-notes/versioned/pulsar-2.6.1/",releaseBlog:"/blog/2020/08/21/Apache-Pulsar-2-6-1",doc:"/docs/2.6.1",version:""},{author:"codelipenghui",tagName:"v2.6.0",publishedAt:"2020-06-17T12:57:15Z",vtag:"2.6.0",releaseNotes:"/release-notes/versioned/pulsar-2.6.0/",releaseBlog:"/blog/2020/06/18/Apache-Pulsar-2-6-0",doc:"/docs/2.6.0",version:""},{author:"jiazhai",tagName:"v2.5.2",publishedAt:"2020-05-19T12:25:05Z",vtag:"2.5.2",releaseNotes:"/release-notes/versioned/pulsar-2.5.2/",releaseBlog:"/blog/2020/05/19/Apache-Pulsar-2-5-2",doc:"/docs/2.5.2",version:"v2.5.x"},{author:"tuteng",tagName:"v2.5.1",publishedAt:"2020-05-11T04:22:55Z",vtag:"2.5.1",releaseNotes:"/release-notes/versioned/pulsar-2.5.1/",releaseBlog:"/blog/2020/04/23/Apache-Pulsar-2-5-1",doc:"/docs/2.5.1",version:""},{author:"sijie",tagName:"v2.5.0",publishedAt:"2020-01-15T12:34:56Z",vtag:"2.5.0",releaseNotes:"/release-notes/versioned/pulsar-2.5.0/",releaseBlog:"",doc:"/docs/2.5.0",version:""}]}}]);