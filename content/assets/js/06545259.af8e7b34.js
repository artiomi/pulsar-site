"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[8446],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),d=r,k=p["".concat(l,".").concat(d)]||p[d]||m[d]||o;return n?a.createElement(k,s(s({ref:t},u),{},{components:n})):a.createElement(k,s({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(67294),r=n(86010);const o="tabItem_Ymn6";function s(e){let{children:t,hidden:n,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,s),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(87462),r=n(67294),o=n(86010),s=n(72389),i=n(67392),l=n(7094),c=n(12466);const u="tabList__CuJ",p="tabItem_LNqP";function m(e){const{lazy:t,block:n,defaultValue:s,values:m,groupId:d,className:k}=e,h=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=m??h.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),g=(0,i.l)(f,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===s?s:s??h.find((e=>e.props.default))?.props.value??h[0].props.value;if(null!==b&&!f.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:N}=(0,l.U)(),[y,w]=(0,r.useState)(b),E=[],{blockElementScrollPositionUntilNextRender:O}=(0,c.o5)();if(null!=d){const e=v[d];null!=e&&e!==y&&f.some((t=>t.value===e))&&w(e)}const T=e=>{const t=e.currentTarget,n=E.indexOf(t),a=f[n].value;a!==y&&(O(t),w(a),null!=d&&N(d,String(a)))},C=e=>{let t=null;switch(e.key){case"Enter":T(e);break;case"ArrowRight":{const n=E.indexOf(e.currentTarget)+1;t=E[n]??E[0];break}case"ArrowLeft":{const n=E.indexOf(e.currentTarget)-1;t=E[n]??E[E.length-1];break}}t?.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},k)},f.map((e=>{let{value:t,label:n,attributes:s}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,key:t,ref:e=>E.push(e),onKeyDown:C,onClick:T},s,{className:(0,o.Z)("tabs__item",p,s?.className,{"tabs__item--active":y===t})}),n??t)}))),t?(0,r.cloneElement)(h.filter((e=>e.props.value===y))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==y})))))}function d(e){const t=(0,s.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},66554:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var a=n(87462),r=(n(67294),n(3905)),o=n(65488),s=n(85162);const i={id:"io-overview",title:"Pulsar connector overview",sidebar_label:"Overview",original_id:"io-overview"},l=void 0,c={unversionedId:"io-overview",id:"version-2.7.5/io-overview",title:"Pulsar connector overview",description:"Messaging systems are most powerful when you can easily use them with external systems like databases and other messaging systems.",source:"@site/versioned_docs/version-2.7.5/io-overview.md",sourceDirName:".",slug:"/io-overview",permalink:"/docs/2.7.5/io-overview",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.7.5/io-overview.md",tags:[],version:"2.7.5",frontMatter:{id:"io-overview",title:"Pulsar connector overview",sidebar_label:"Overview",original_id:"io-overview"},sidebar:"version-2.7.5/docsSidebar",previous:{title:"Window Functions: Context",permalink:"/docs/2.7.5/window-functions-context"},next:{title:"Get started",permalink:"/docs/2.7.5/io-quickstart"}},u={},p=[{value:"Concept",id:"concept",level:2},{value:"Source",id:"source",level:3},{value:"Sink",id:"sink",level:3},{value:"Processing guarantee",id:"processing-guarantee",level:2},{value:"Set",id:"set",level:3},{value:"Update",id:"update",level:3},{value:"Work with connector",id:"work-with-connector",level:2}],m={toc:p};function d(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Messaging systems are most powerful when you can easily use them with external systems like databases and other messaging systems."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Pulsar IO connectors")," enable you to easily create, deploy, and manage connectors that interact with external systems, such as ",(0,r.kt)("a",{parentName:"p",href:"https://cassandra.apache.org"},"Apache Cassandra"),", ",(0,r.kt)("a",{parentName:"p",href:"https://www.aerospike.com"},"Aerospike"),", and many others."),(0,r.kt)("h2",{id:"concept"},"Concept"),(0,r.kt)("p",null,"Pulsar IO connectors come in two types: ",(0,r.kt)("strong",{parentName:"p"},"source")," and ",(0,r.kt)("strong",{parentName:"p"},"sink"),"."),(0,r.kt)("p",null,"This diagram illustrates the relationship between source, Pulsar, and sink:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Pulsar IO diagram",src:n(83030).Z,title:"Pulsar IO connectors (sources and sinks)",width:"1758",height:"352"})),(0,r.kt)("h3",{id:"source"},"Source"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Sources ",(0,r.kt)("strong",{parentName:"p"},"feed data from external systems into Pulsar"),".")),(0,r.kt)("p",null,"Common sources include other messaging systems and firehose-style data pipeline APIs."),(0,r.kt)("p",null,"For the complete list of Pulsar built-in source connectors, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.7.5/io-connectors#source-connector"},"source connector"),"."),(0,r.kt)("h3",{id:"sink"},"Sink"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Sinks ",(0,r.kt)("strong",{parentName:"p"},"feed data from Pulsar into external systems"),".")),(0,r.kt)("p",null,"Common sinks include other messaging systems and SQL and NoSQL databases."),(0,r.kt)("p",null,"For the complete list of Pulsar built-in sink connectors, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.7.5/io-connectors#sink-connector"},"sink connector"),"."),(0,r.kt)("h2",{id:"processing-guarantee"},"Processing guarantee"),(0,r.kt)("p",null,"Processing guarantees are used to handle errors when writing messages to Pulsar topics."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Pulsar connectors and Functions use the ",(0,r.kt)("strong",{parentName:"p"},"same")," processing guarantees as below.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Delivery semantic"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"at-most-once")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Each message sent to a connector is to be ",(0,r.kt)("strong",{parentName:"td"},"processed once")," or ",(0,r.kt)("strong",{parentName:"td"},"not to be processed"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"at-least-once")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Each message sent to a connector is to be ",(0,r.kt)("strong",{parentName:"td"},"processed once")," or ",(0,r.kt)("strong",{parentName:"td"},"more than once"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"effectively-once")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Each message sent to a connector has ",(0,r.kt)("strong",{parentName:"td"},"one output associated")," with it.")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Processing guarantees for connectors not just rely on Pulsar guarantee but also ",(0,r.kt)("strong",{parentName:"p"},"relate to external systems"),", that is, ",(0,r.kt)("strong",{parentName:"p"},"the implementation of source and sink"),".")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Source: Pulsar ensures that writing messages to Pulsar topics respects to the processing guarantees. It is within Pulsar's control.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Sink: the processing guarantees rely on the sink implementation. If the sink implementation does not handle retries in an idempotent way, the sink does not respect to the processing guarantees."))),(0,r.kt)("h3",{id:"set"},"Set"),(0,r.kt)("p",null,"When creating a connector, you can set the processing guarantee with the following semantics:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ATLEAST_ONCE"),(0,r.kt)("li",{parentName:"ul"},"ATMOST_ONCE"),(0,r.kt)("li",{parentName:"ul"},"EFFECTIVELY_ONCE")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If ",(0,r.kt)("inlineCode",{parentName:"p"},"--processing-guarantees")," is not specified when creating a connector, the default semantic is ",(0,r.kt)("inlineCode",{parentName:"p"},"ATLEAST_ONCE"),".")),(0,r.kt)("p",null,"Here takes ",(0,r.kt)("strong",{parentName:"p"},"Admin CLI")," as an example. For more information about ",(0,r.kt)("strong",{parentName:"p"},"REST API")," or ",(0,r.kt)("strong",{parentName:"p"},"JAVA Admin API"),", see ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.7.5/io-use#create"},"here"),". "),(0,r.kt)(o.Z,{defaultValue:"Source",values:[{label:"Source",value:"Source"},{label:"Sink",value:"Sink"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"Source",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ bin/pulsar-admin sources create \\\n  --processing-guarantees ATMOST_ONCE \\\n  # Other source configs\n\n")),(0,r.kt)("p",null,"For more information about the options of ",(0,r.kt)("inlineCode",{parentName:"p"},"pulsar-admin sources create"),", see ",(0,r.kt)("a",{parentName:"p",href:"reference-connector-admin.md#create"},"here"),".")),(0,r.kt)(s.Z,{value:"Sink",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ bin/pulsar-admin sinks create \\\n  --processing-guarantees EFFECTIVELY_ONCE \\\n  # Other sink configs\n\n")),(0,r.kt)("p",null,"For more information about the options of ",(0,r.kt)("inlineCode",{parentName:"p"},"pulsar-admin sinks create"),", see ",(0,r.kt)("a",{parentName:"p",href:"reference-connector-admin.md#create-1"},"here"),"."))),(0,r.kt)("h3",{id:"update"},"Update"),(0,r.kt)("p",null,"After creating a connector, you can update the processing guarantee with the following semantics:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ATLEAST_ONCE"),(0,r.kt)("li",{parentName:"ul"},"ATMOST_ONCE"),(0,r.kt)("li",{parentName:"ul"},"EFFECTIVELY_ONCE")),(0,r.kt)("p",null,"Here takes ",(0,r.kt)("strong",{parentName:"p"},"Admin CLI")," as an example. For more information about ",(0,r.kt)("strong",{parentName:"p"},"REST API")," or ",(0,r.kt)("strong",{parentName:"p"},"JAVA Admin API"),", see ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.7.5/io-use#create"},"here"),". "),(0,r.kt)(o.Z,{defaultValue:"Source",values:[{label:"Source",value:"Source"},{label:"Sink",value:"Sink"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"Source",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ bin/pulsar-admin sources update \\\n  --processing-guarantees EFFECTIVELY_ONCE \\\n  # Other source configs\n\n")),(0,r.kt)("p",null,"For more information about the options of ",(0,r.kt)("inlineCode",{parentName:"p"},"pulsar-admin sources update"),", see ",(0,r.kt)("a",{parentName:"p",href:"reference-connector-admin.md#update"},"here"),".")),(0,r.kt)(s.Z,{value:"Sink",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ bin/pulsar-admin sinks update \\\n  --processing-guarantees ATMOST_ONCE \\\n  # Other sink configs\n\n")),(0,r.kt)("p",null,"For more information about the options of ",(0,r.kt)("inlineCode",{parentName:"p"},"pulsar-admin sinks update"),", see ",(0,r.kt)("a",{parentName:"p",href:"reference-connector-admin.md#update-1"},"here"),"."))),(0,r.kt)("h2",{id:"work-with-connector"},"Work with connector"),(0,r.kt)("p",null,"You can manage Pulsar connectors (for example, create, update, start, stop, restart, reload, delete and perform other operations on connectors) via the ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.7.5/reference-connector-admin"},"Connector Admin CLI")," with ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.7.5/reference-connector-admin#sources"},"sources")," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.7.5/reference-connector-admin#sinks"},"sinks")," subcommands."),(0,r.kt)("p",null,"Connectors (sources and sinks) and Functions are components of instances, and they all run on Functions workers. When managing a source, sink or function via ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.7.5/reference-connector-admin"},"Connector Admin CLI")," or ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.7.5/functions-cli"},"Functions Admin CLI"),", an instance is started on a worker. For more information, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.7.5/functions-worker#run-functions-worker-separately"},"Functions worker"),"."))}d.isMDXComponent=!0},83030:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/pulsar-io-8e834df5eaed9d5b0a7e0ffa162e850a.png"}}]);