"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[99264],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>k});var r=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function n(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},p=Object.keys(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var u=r.createContext({}),o=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=o(e.components);return r.createElement(u.Provider,{value:t},e.children)},h="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,l=e.mdxType,p=e.originalType,u=e.parentName,s=n(e,["components","mdxType","originalType","parentName"]),h=o(a),m=l,k=h["".concat(u,".").concat(m)]||h[m]||c[m]||p;return a?r.createElement(k,i(i({ref:t},s),{},{components:a})):r.createElement(k,i({ref:t},s))}));function k(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var p=a.length,i=new Array(p);i[0]=m;var n={};for(var u in t)hasOwnProperty.call(t,u)&&(n[u]=t[u]);n.originalType=e,n[h]="string"==typeof e?e:l,i[1]=n;for(var o=2;o<p;o++)i[o]=a[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},49101:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>p,metadata:()=>n,toc:()=>o});var r=a(87462),l=(a(67294),a(3905));const p={id:"pulsar-2.5.0",title:"Apache Pulsar 2.5.0",sidebar_label:"Apache Pulsar 2.5.0"},i=void 0,n={unversionedId:"versioned/pulsar-2.5.0",id:"versioned/pulsar-2.5.0",title:"Apache Pulsar 2.5.0",description:"2019-12-06",source:"@site/release-notes/versioned/pulsar-2.5.0.md",sourceDirName:"versioned",slug:"/versioned/pulsar-2.5.0",permalink:"/release-notes/versioned/pulsar-2.5.0",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/release-notes/versioned/pulsar-2.5.0.md",tags:[],version:"current",frontMatter:{id:"pulsar-2.5.0",title:"Apache Pulsar 2.5.0",sidebar_label:"Apache Pulsar 2.5.0"}},u={},o=[{value:"2019-12-06",id:"2019-12-06",level:4},{value:"PIPs",id:"pips",level:4},{value:"Fixes",id:"fixes",level:4},{value:"Enhancements",id:"enhancements",level:4},{value:"Stats &amp; Monitoring",id:"stats--monitoring",level:4},{value:"Security",id:"security",level:4},{value:"Tiered Storage",id:"tiered-storage",level:4},{value:"Pulsar Schema",id:"pulsar-schema",level:4},{value:"Pulsar IO",id:"pulsar-io",level:4},{value:"Pulsar Functions",id:"pulsar-functions",level:4},{value:"Pulsar SQL",id:"pulsar-sql",level:4},{value:"Adaptors",id:"adaptors",level:4},{value:"Transaction",id:"transaction",level:4}],s={toc:o},h="wrapper";function c(e){let{components:t,...a}=e;return(0,l.kt)(h,(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h4",{id:"2019-12-06"},"2019-12-06"),(0,l.kt)("h4",{id:"pips"},"PIPs"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[PIP-41]"," Introduce Protocol Handler API ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/5130"},"#5130")," ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/5473"},"#5743")," "),(0,l.kt)("li",{parentName:"ul"},"[PIP-45]"," Pluggable metadata interface ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/5330"},"#5330")," "),(0,l.kt)("li",{parentName:"ul"},"[PIP-44]"," Separate schema compatibility checker for producer and consumer ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/5227"},"#5227")),(0,l.kt)("li",{parentName:"ul"},"[PIP-43]"," Producer send messages with different schema ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/issues/5141"},"#5141")," ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/5517"},"#5517")," "),(0,l.kt)("li",{parentName:"ul"},"[PIP-51]"," Introduce sticky consumer ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/5388"},"#5388")),(0,l.kt)("li",{parentName:"ul"},"[PIP-38]"," Support batch receive in java client. ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/4621"},"#4621")),(0,l.kt)("li",{parentName:"ul"},"[PIP-52]"," PIP-52: ","[pulsar-sever]"," Add support of dispatch throttling relative to publish-rate ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/5797"},"#5797"))),(0,l.kt)("h4",{id:"fixes"},"Fixes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Avoid retrying deleting namespace when topic is already deleted/fenced ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/4665"},"#4665")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Fix expiry monitor to continue on non-recoverable error ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/4818"},"#4818")," "),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," fix ns-isolation api to fetch policy for specific broker ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/5314"},"#5314")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," external protocols not set to local broker data ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/5479"},"#5749")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Add handle exception KeeperException.BadVersionException  ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/5563"},"#5563")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Fix message deduplicate issue while using external sequence id with batch produce ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/5491"},"#5491")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Remove cursor while remove non-durable subscription ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/5719"},"#5719")," "),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Fix potential read 0 entries cause dispatcher stop dispatch ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/5894"},"#5894")),(0,l.kt)("li",{parentName:"ul"},"[Proxy]"," Proxy doesn't use the right ca certicate to connect to brokers ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/5971"},"#5971")),(0,l.kt)("li",{parentName:"ul"},"[Client]"," Add SentConnectFrame state check when running ",(0,l.kt)("inlineCode",{parentName:"li"},"handleError")," ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/5913"},"#5913"))),(0,l.kt)("h4",{id:"enhancements"},"Enhancements"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[Zookeeper]"," Bump zookeeper to version 3.5.6 ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/5043"},"#5043")),(0,l.kt)("li",{parentName:"ul"},"[BookKeeper]"," Upgrade bk version to 4.10.0 ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/5607"},"#5607")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Process requests asynchronously on some REST APIs ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/4765"},"4765")," ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/4778"},"4778")," ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/4795"},"4795")," "),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Fixes not owned bundles got selected when broker overloading ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/5002"},"#5002")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Support update partition for global topic  ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/5306"},"#5306")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Ensure the handling of PartitionMetadataRequest is async end-to-end ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/5307"},"#5307")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Allow to automatically assign TCP ports when starting a broker  ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/3555"},"#3555")," "),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Introduce publish rate-limiting on topic ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/3986"},"#3986")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Add publish rate limit for each broker to avoid OOM ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/5710"},"#5710")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Allow for namespace default of offload threshold ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/5872"},"#5872")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Avoid unsafe split when validate hostname which might be ipv6 address ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/5713"},"#5713")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Support batch authorization of partitioned topic ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/5767"},"#5767")),(0,l.kt)("li",{parentName:"ul"},"[Client][Java]"," Introduce ",(0,l.kt)("inlineCode",{parentName:"li"},"batchingMaxBytes")," setting in pulsar producer ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/5045"},"#5045")),(0,l.kt)("li",{parentName:"ul"},"[Client][Java]"," Add epoch for connection handler to handle create producer timeout ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/5571"},"#5571")),(0,l.kt)("li",{parentName:"ul"},"[Performance]"," Reduce char[] creation on jvm heap ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/5055"},"#5055")),(0,l.kt)("li",{parentName:"ul"},"[CLI]"," Add a broker tool for operations of a specific broker ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/5768"},"#5768")),(0,l.kt)("li",{parentName:"ul"},"[CLI]"," Validate topic name before creating partition/non partition topic via admin cli ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/5148"},"#5148")),(0,l.kt)("li",{parentName:"ul"},"[CLI]"," Make PulsarClusterMetadataSetup idempotent ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/5879"},"#5879")),(0,l.kt)("li",{parentName:"ul"},"[CLI]"," Allow for topic deletions with regex consumers ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/5230"},"#5230"))),(0,l.kt)("h4",{id:"stats--monitoring"},"Stats & Monitoring"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Added delayed messages in Prometheus when using namespace-level metrics aggregation ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/4691"},"#4691")),(0,l.kt)("li",{parentName:"ul"},"[Dashboard]"," Increasing Dashboard consumerName field to 256 varchar ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/4716"},"4716")),(0,l.kt)("li",{parentName:"ul"},"[Dashboard]"," integrate peek into messages page ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/4966"},"#4966")),(0,l.kt)("li",{parentName:"ul"},"[Dashboard]"," Support parse batch entry ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/4992"},"#4992"))),(0,l.kt)("h4",{id:"security"},"Security"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Add broker-bookie mTLS support ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/5042"},"#5042"))),(0,l.kt)("h4",{id:"tiered-storage"},"Tiered Storage"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"HDFS Offloader ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/4403"},"#4403")),(0,l.kt)("li",{parentName:"ul"},"Fix the problem of repeated storage of offload driver metadata ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/5834"},"#5834"))),(0,l.kt)("h4",{id:"pulsar-schema"},"Pulsar Schema"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Pulsar schema api should respect to namespace level compatibility ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/issues/4821"},"#4821")),(0,l.kt)("li",{parentName:"ul"},"[Client][Java]"," NPE is thrown when a consumer consumes a partitioned topic with struct schema\n",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/4960"},"#4960")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Add compatibility check for primitive schema types ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/5051"},"#5051")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Support uploading key/value schema using Pulsar admin ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/5000"},"#5000")),(0,l.kt)("li",{parentName:"ul"},"[Client][Java]"," Schema support encoding & encoding ByteBuf ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/5123"},"#5123"))),(0,l.kt)("h4",{id:"pulsar-io"},"Pulsar IO"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Support reload Source and Sink for Pulsar IO ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/5008"},"5008")),(0,l.kt)("li",{parentName:"ul"},"[Connector]"," Added Kinesis Source Connector ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/3784"},"#3784")),(0,l.kt)("li",{parentName:"ul"},"[Connector]"," Add a source connector for MongoDB ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/5316"},"#5316")),(0,l.kt)("li",{parentName:"ul"},"[Connector]"," Support CDC Connector for MongoDB ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/5590"},"#5590")),(0,l.kt)("li",{parentName:"ul"},"[Connector]"," Improve hbase sink performance ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/5705"},"#5705"))),(0,l.kt)("h4",{id:"pulsar-functions"},"Pulsar Functions"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[Function Worker]"," Allow resource overcommitting when running functions in Kubernetes ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/4829"},"4829")),(0,l.kt)("li",{parentName:"ul"},"[Function Worker]"," Make Function Authentication Provider pluggable ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/5404"},"#5404")),(0,l.kt)("li",{parentName:"ul"},"[Function Worker]"," Added deletion of state for Functions ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/5469"},"#5469")," "),(0,l.kt)("li",{parentName:"ul"},"[Function Worker]"," Distribute the CA for KubernetesSecretsTokenAuthProvider ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/5398"},"#5398")),(0,l.kt)("li",{parentName:"ul"},"[Function Runtime]"," Function runtime pluggable ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/5463"},"#5463")),(0,l.kt)("li",{parentName:"ul"},"[Function Runtime]"," Allow functions to pass runtime specific options ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/5400"},"#5400"))),(0,l.kt)("h4",{id:"pulsar-sql"},"Pulsar SQL"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Support for other schema name separators in pulsar SQL ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/issues/4732"},"4732")),(0,l.kt)("li",{parentName:"ul"},"Reuse ManagedLedgerFactory instances across SQL queries ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/4813"},"4813")," "),(0,l.kt)("li",{parentName:"ul"},"Using pulsar SQL query messages will appear ",(0,l.kt)("inlineCode",{parentName:"li"},"NoSuchLedger")," when zk root directory changed ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/5001"},"#5001"))),(0,l.kt)("h4",{id:"adaptors"},"Adaptors"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Add support of pulsar-kafka-adapter for kafka-0.9 API ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/4886"},"#4886")),(0,l.kt)("li",{parentName:"ul"},"Add support of pulsar-kafka-adapter for kafka-0.8 API ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/4797"},"#4797")," "),(0,l.kt)("li",{parentName:"ul"},"Make client keepalive interval configurable on pulsar-client-kafka ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/5131"},"#5131"))),(0,l.kt)("h4",{id:"transaction"},"Transaction"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The development of Pulsar Transaction is still ongoing")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[Buffer]"," Add new marker to show which message belongs to transaction ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/4776"},"#4776")),(0,l.kt)("li",{parentName:"ul"},"[Buffer]"," Add data ledger position in txn commit marker ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/4826"},"#4826")),(0,l.kt)("li",{parentName:"ul"},"[Buffer]"," Add basic operation of transaction ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/4738"},"#4738")),(0,l.kt)("li",{parentName:"ul"},"[Buffer]"," Add new commands for the transaction ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/4866"},"#4866")),(0,l.kt)("li",{parentName:"ul"},"[Protocol]"," Add default handler to handle transaction related commands ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/4891"},"#4891")),(0,l.kt)("li",{parentName:"ul"},"[Client]"," Introduce Transaction Client API ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/4952"},"#4952")),(0,l.kt)("li",{parentName:"ul"},"[Client]"," Add transaction coordinator client ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/4953"},"#4953")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Ownership change listeners ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/5457"},"#5457")),(0,l.kt)("li",{parentName:"ul"},"[Coordinator]"," Bootstrap pulsar system namespace and create TC assign topic ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/5515"},"#5515")),(0,l.kt)("li",{parentName:"ul"},"[Coordinator]"," Add transaction metadata store service ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/5504"},"#5504")," ")),(0,l.kt)("p",null,"For a complete list of issues fixed, see"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/milestone/22?closed=1"},"https://github.com/apache/pulsar/milestone/22?closed=1")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/releases/tag/v2.5.0"},"https://github.com/apache/pulsar/releases/tag/v2.5.0")))}c.isMDXComponent=!0}}]);