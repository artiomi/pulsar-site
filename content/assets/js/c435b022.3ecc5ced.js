"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[9647],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>k});var r=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},p=Object.keys(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var n=r.createContext({}),o=function(e){var t=r.useContext(n),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=o(e.components);return r.createElement(n.Provider,{value:t},e.children)},h="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,l=e.mdxType,p=e.originalType,n=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),h=o(a),m=l,k=h["".concat(n,".").concat(m)]||h[m]||c[m]||p;return a?r.createElement(k,i(i({ref:t},s),{},{components:a})):r.createElement(k,i({ref:t},s))}));function k(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var p=a.length,i=new Array(p);i[0]=m;var u={};for(var n in t)hasOwnProperty.call(t,n)&&(u[n]=t[n]);u.originalType=e,u[h]="string"==typeof e?e:l,i[1]=u;for(var o=2;o<p;o++)i[o]=a[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},95510:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>n,contentTitle:()=>i,default:()=>c,frontMatter:()=>p,metadata:()=>u,toc:()=>o});var r=a(87462),l=(a(67294),a(3905));const p={id:"pulsar-2.6.0",title:"Apache Pulsar 2.6.0",sidebar_label:"Apache Pulsar 2.6.0"},i=void 0,u={unversionedId:"versioned/pulsar-2.6.0",id:"versioned/pulsar-2.6.0",title:"Apache Pulsar 2.6.0",description:"2020-06-17",source:"@site/release-notes/versioned/pulsar-2.6.0.md",sourceDirName:"versioned",slug:"/versioned/pulsar-2.6.0",permalink:"/release-notes/versioned/pulsar-2.6.0",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/release-notes/versioned/pulsar-2.6.0.md",tags:[],version:"current",frontMatter:{id:"pulsar-2.6.0",title:"Apache Pulsar 2.6.0",sidebar_label:"Apache Pulsar 2.6.0"}},n={},o=[{value:"2020-06-17",id:"2020-06-17",level:4},{value:"Features",id:"features",level:4},{value:"PIPs",id:"pips",level:5},{value:"Broker",id:"broker",level:5},{value:"Function",id:"function",level:5},{value:"Pulsar SQL",id:"pulsar-sql",level:5},{value:"Pulsar IO",id:"pulsar-io",level:5},{value:"Pulsar Proxy",id:"pulsar-proxy",level:5},{value:"Admin",id:"admin",level:5},{value:"Fixes",id:"fixes",level:4}],s={toc:o},h="wrapper";function c(e){let{components:t,...a}=e;return(0,l.kt)(h,(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h4",{id:"2020-06-17"},"2020-06-17"),(0,l.kt)("h4",{id:"features"},"Features"),(0,l.kt)("h5",{id:"pips"},"PIPs"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[PIP-37]"," Large message size support ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/4400"},"#4400")),(0,l.kt)("li",{parentName:"ul"},"[PIP-39]"," Namespace change events (System Topic) ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/4955"},"#4955")),(0,l.kt)("li",{parentName:"ul"},"[PIP-45]"," Switch ManagedLedger to use MetadataStore interface ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/5358"},"#5358")),(0,l.kt)("li",{parentName:"ul"},"[PIP 53]"," Contribute ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-dotpulsar"},"DotPulsar")," to Apache Pulsar"),(0,l.kt)("li",{parentName:"ul"},"[PIP-54]"," Support acknowledgment at batch index level ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6052"},"#6052")),(0,l.kt)("li",{parentName:"ul"},"[PIP-58]"," Support consumers set custom message retry delay ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6449"},"#6449")),(0,l.kt)("li",{parentName:"ul"},"[PIP-60]"," Support SNI routing to support various proxy-server ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6566"},"#6566")),(0,l.kt)("li",{parentName:"ul"},"[PIP-61]"," Advertise multiple addresses ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6903"},"#6903")),(0,l.kt)("li",{parentName:"ul"},"[PIP-65]"," Adapting Pulsar IO Sources to support Batch Sources ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7090"},"#7090"))),(0,l.kt)("h5",{id:"broker"},"Broker"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Add threshold shedder strategy and metrics exporter for loadbalancer ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6772"},"#6772")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Add consistent hashing in the Key_Shared distribution ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6791"},"#6791")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Fixed ordering issue in KeyShared subscription dispatcher when adding consumer ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7106"},"#7106")," ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7108"},"#7108")," ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7188"},"#7188")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Add support for key hash range reading in Key_Shared subscription ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/5928"},"#5928")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Allow for schema reader and writer registration on SchemaDefinition ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6905"},"#6905")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Support use null key and null value in KeyValue Schema ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7139"},"#7139")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Support multiple pulsar clusters to use the same bk cluster ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/5985"},"#5985")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Add a flag to skip broker shutdown on transient OOM ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6634"},"#6634")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Make zookeeper cache expiry time configurable ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6668"},"#6668")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Check replicator periodically to avoid issue due to zookeeper missing watch ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6674"},"#6674")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Expose managedLedgerCache, managedLedger, loadBalance metrics to Prometheus ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6705"},"#6705")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Optimize consumer fetch messages in case of batch message ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6719"},"#6719")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Add configuration to limit max partitions for a partitioned topic ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6794"},"#6794")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Change default FlushEntryLogBytes to 256MB to improve bookie io throughput ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6915"},"#6915")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Introduce precise topic publish rate limiting ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7078"},"#7078")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Expose new entries check delay in the broker.conf ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7154"},"7154")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Add broker interceptor for intercepting all Pulsar command and REST API requests ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7143"},"#7143")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Only close active consumer for Failover subscription when seek() ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7141"},"#7141")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Allow to delete topics that are failing to recover ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7131"},"#7131")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Support set netty max frame size in bookkeeper.conf ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7116"},"#7116")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Trigger rollover when meeting maxLedgerRolloverTimeMinutes ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7111"},"#7111")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Cap the dispatcher batch size in bytes to fixed max ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7097"},"#7097")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Support specify managedLedgerMaxSizePerLedgerMbytes in broker.conf ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7085"},"#7085")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Allow to grant permissions when the authorization is disabled ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7074"},"#7074")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Add messages and bytes counter stats to broker-stats/topics ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7045"},"#7045")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Expose new entries check delay in the broker.conf ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7154"},"#7154"))),(0,l.kt)("h5",{id:"function"},"Function"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[Function]"," Built-in functions support ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6895"},"#6895")),(0,l.kt)("li",{parentName:"ul"},"[Function]"," Add Go Function heartbeat (and gRPC service) for production usage ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6031"},"#6031")),(0,l.kt)("li",{parentName:"ul"},"[Function]"," Add custom property option to functions ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6348"},"#6348")),(0,l.kt)("li",{parentName:"ul"},"[Function]"," Separate TLS configuration of function worker and broker ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6602"},"#6602")),(0,l.kt)("li",{parentName:"ul"},"[Function]"," Added ability to build consumers in functions and sources ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6954"},"#6954")),(0,l.kt)("li",{parentName:"ul"},"[Function]"," Support DLQ on sources and sinks ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7032"},"#7032"))),(0,l.kt)("h5",{id:"pulsar-sql"},"Pulsar SQL"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[SQL]"," KeyValue schema support ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6325"},"#6325")),(0,l.kt)("li",{parentName:"ul"},"[SQL]"," Multiple version schema support ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/4847"},"#4847")),(0,l.kt)("li",{parentName:"ul"},"[SQL]"," Fix presto SQL does not start metrics service before queue execute ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7030"},"#7030"))),(0,l.kt)("h5",{id:"pulsar-io"},"Pulsar IO"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Added ability for sources to publish messages on their own ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6941"},"#6941")),(0,l.kt)("li",{parentName:"ul"},"[RabbitMQ]"," Allow routing key per message to RabbitMQ sink connector ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/5890"},"#5890")),(0,l.kt)("li",{parentName:"ul"},"[RabbitMQ]"," Add passive config options ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6679"},"#6679")),(0,l.kt)("li",{parentName:"ul"},"[debezium]"," Upgrade from v0.10.0-Final to v1.0.0-Final ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/5972"},"#5972")),(0,l.kt)("li",{parentName:"ul"},"[debezium]"," Support avro schema for debezium connector ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6034"},"#6034")),(0,l.kt)("li",{parentName:"ul"},"[influxdb2]","  Add support for influxdb2 in pulsar-influxdb-sink ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6601"},"#6601")),(0,l.kt)("li",{parentName:"ul"},"[jdbc]"," Add jdbc sinks: postgres, mariadb, clickhouse ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6835"},"#6835"))),(0,l.kt)("h5",{id:"pulsar-proxy"},"Pulsar Proxy"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[Proxy]"," Add REST API to get connection and topic stats ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6473"},"#6473")),(0,l.kt)("li",{parentName:"ul"},"[Proxy]"," Add advertised address option ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6942"},"#6942")),(0,l.kt)("li",{parentName:"ul"},"[Proxy]"," Add proxyLogLevel into config ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6948"},"#6948"))),(0,l.kt)("h5",{id:"admin"},"Admin"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[Admin]"," Support delete inactive topic when subscriptions caught up ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6077"},"#6077")),(0,l.kt)("li",{parentName:"ul"},"[Admin]"," Add configuration to disable auto-creation of subscriptions ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6456"},"#6456")),(0,l.kt)("li",{parentName:"ul"},"[Admin]"," Add maxUnackedMessagesPerSubscription and maxUnackedMessagesPerConsumer on namespaces policies ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/5936"},"#5936")),(0,l.kt)("li",{parentName:"ul"},"[Admin]"," Support get a message by message ID in pulsar-admin ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6331"},"#6331")),(0,l.kt)("li",{parentName:"ul"},"[Admin]"," Support delete subscription forcefully ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6383"},"#6383")),(0,l.kt)("li",{parentName:"ul"},"[Admin]"," Add subscribe initial position for consumer CLI ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6442"},"#6442")),(0,l.kt)("li",{parentName:"ul"},"[Admin]"," Support to get managed ledger info of a partitioned topic ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6532"},"#6532")),(0,l.kt)("li",{parentName:"ul"},"[Admin]"," Support compact all partitions of a partitioned topic ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6537"},"#6537")),(0,l.kt)("li",{parentName:"ul"},"[Admin]"," Support multi-hosts in PulsarAdmin ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6547"},"#6547")),(0,l.kt)("li",{parentName:"ul"},"[Admin]"," Support to get internal stats for a partitioned topic ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6624"},"#6624")),(0,l.kt)("li",{parentName:"ul"},"[Admin]"," Support enable or disable subscription auto-creation at namespace level ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6637"},"#6637")),(0,l.kt)("li",{parentName:"ul"},"[Admin]"," Enable to set the subscription expiration time for each namespace ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6851"},"#6851"))),(0,l.kt)("h4",{id:"fixes"},"Fixes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Fixed increasing number of partitions with attached readers ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7077"},"#7077")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Make ZkBookieRackAffinityMapping work as expected ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6917"},"#6917")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Fix backlog and backlog size stats keeps growing ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7082"},"#7082")),(0,l.kt)("li",{parentName:"ul"},"[Java Client]"," Fix connection leak ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6524"},"#6524")),(0,l.kt)("li",{parentName:"ul"},"[Java Client]"," Fix message id compare between MessageId and BatchMessageId ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6621"},"#6621")),(0,l.kt)("li",{parentName:"ul"},"[Java Client]"," Fix memory leak when create producer with not exsits topic ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7120"},"#7120")," ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7124"},"#7124")),(0,l.kt)("li",{parentName:"ul"},"[Java Client]"," Fix duplicated messages sent to dead letter topic ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7021"},"#7021")),(0,l.kt)("li",{parentName:"ul"},"[CPP Client]"," Fix deadlock of consumer for topics auto discovery ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7206"},"#7206")),(0,l.kt)("li",{parentName:"ul"},"[Managed Ledger]"," Fix NPE on opening non-durable cursors on an empty managed ledger ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7133"},"#7133")),(0,l.kt)("li",{parentName:"ul"},"[Websocket]"," Fix incorrect topic URL parse ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6630"},"#6630")),(0,l.kt)("li",{parentName:"ul"},"[Pulsar SQL]"," Fix problem with multiple zookeeper address ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6947"},"#6947")),(0,l.kt)("li",{parentName:"ul"},"[Docker]"," Do not apply env values to pulsar_env.sh and bkenv.sh implicitly ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6579"},"6579"))))}c.isMDXComponent=!0}}]);