"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[6148],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(n),h=r,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||i;return n?a.createElement(m,s(s({ref:t},u),{},{components:n})):a.createElement(m,s({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:r,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},26993:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const i={author:"Penghui Li",authorURL:"https://twitter.com/lipenghui6",title:"Apache Pulsar 2.4.0"},s=void 0,o={permalink:"/blog/2019/07/05/Apache-Pulsar-2-4-0",editUrl:"https://github.com/apache/pulsar-site/edit/main/blog/2019-07-05-Apache-Pulsar-2-4-0.md",source:"@site/blog/2019-07-05-Apache-Pulsar-2-4-0.md",title:"Apache Pulsar 2.4.0",description:"We are glad to publish Apache Pulsar 2.4.0. This is the result of a huge",date:"2019-07-05T00:00:00.000Z",formattedDate:"July 5, 2019",tags:[],readingTime:2.44,hasTruncateMarker:!0,authors:[{name:"Penghui Li",url:"https://twitter.com/lipenghui6"}],frontMatter:{author:"Penghui Li",authorURL:"https://twitter.com/lipenghui6",title:"Apache Pulsar 2.4.0"},prevItem:{title:"Apache Pulsar 2.4.2",permalink:"/blog/2019/12/04/Apache-Pulsar-2-4-2"},nextItem:{title:"Apache Pulsar 2.3.0",permalink:"/blog/2019/02/20/Apache-Pulsar-2-3-0"}},l={authorsImageUrls:[void 0]},c=[{value:"Delayed message delivery",id:"delayed-message-delivery",level:3},{value:"Go Functions",id:"go-functions",level:3},{value:"Key_Shared subscription",id:"key_shared-subscription",level:3},{value:"Schema versioning",id:"schema-versioning",level:3},{value:"Replicated subscription",id:"replicated-subscription",level:3},{value:"New IO connectors",id:"new-io-connectors",level:3},{value:"Security",id:"security",level:3},{value:"Conclusion",id:"conclusion",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"We are glad to publish Apache Pulsar 2.4.0. This is the result of a huge\neffort from the community, with over 460 commits and a long list of new features,\ngeneral improvements and bug fixes."),(0,r.kt)("p",null,"Check out the ",(0,r.kt)("b",null,(0,r.kt)("a",{parentName:"p",href:"/release-notes/#2.4.0"},"release notes"))," for a detailed list of\nthe changes, with links to the relevant pull requests, discussions and documentation."),(0,r.kt)("p",null,"Regarding new features introduced, I just want to highlight here a tiny subset of them:"),(0,r.kt)("h3",{id:"delayed-message-delivery"},"Delayed message delivery"),(0,r.kt)("p",null,"It's now possible to send a delayed message by Pulsar producer, and a delayed message will be\navailable after a delay time."),(0,r.kt)("p",null,"The Java code for a client using delayed messages delivery looks as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'\nproducer.newMessage().value("delayed message").deliverAfter(10, TimeUnit.SECONDS).send()\n\n')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},"Messages are only delayed on shared subscriptions, other subscriptions will deliver immediately."),(0,r.kt)("li",{parentName:"ol"},"Delayed messages are sent individually even if you enable message batching on producer."))),(0,r.kt)("h3",{id:"go-functions"},"Go Functions"),(0,r.kt)("p",null,"Before 2.4.0 release, Java and Python are supported to write Pulsar Functions. Now, you can\nuse Go to write Pulsar Functions, the following is an example of\na Pulsar Function written in Go."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'\nimport (\n    "fmt"\n    "context"\n\n    "github.com/apache/pulsar/pulsar-function-go/pf"\n)\n\nfunc HandleRequest(ctx context.Context, in []byte) error {\n    fmt.Println(string(in) + "!")\n    return nil\n}\n\nfunc main() {\n    pf.Start(HandleRequest)\n}\n\n')),(0,r.kt)("h3",{id:"key_shared-subscription"},"Key_Shared subscription"),(0,r.kt)("p",null,"A new subscription mode ",(0,r.kt)("inlineCode",{parentName:"p"},"Key_shared")," is introduced in 2.4.0. In ",(0,r.kt)("inlineCode",{parentName:"p"},"Key_shared")," subscription mode,\none partition could have several consumers to consume messages in parallelism and ensure messages\nwith the same key are distributed to a consumer in order.\nHere is ",(0,r.kt)("a",{parentName:"p",href:"http://pulsar.apache.org/docs/en/concepts-messaging/#key_shared"},"architecture"),"\nfor Key_Shared."),(0,r.kt)("p",null,"The following is an example to use ",(0,r.kt)("inlineCode",{parentName:"p"},"Key_shared")," subscription:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'\nclient.newConsumer()\n        .topic("topic")\n        .subscriptionType(SubscriptionType.Key_Shared)\n        .subscriptionName("sub-1")\n        .subscribe();\n\n')),(0,r.kt)("h3",{id:"schema-versioning"},"Schema versioning"),(0,r.kt)("p",null,"Before 2.4.0 release, Avro schema used one schema for both writer schema and reader schema.\nMultiple schemas version is supported now."),(0,r.kt)("p",null,"With multiple schemas, a producer can send messages with different schema versions and a consumer\ncan read messages with different schemas."),(0,r.kt)("p",null,"In 2.4.0 release, ",(0,r.kt)("inlineCode",{parentName:"p"},"FORWARD_TRANSITIVE"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"BACKWARD_TRANSITIVE")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"FULL_TRANSITIVE")," compatibility\nstrategies are added to check the compatibility with all existing schema version."),(0,r.kt)("h3",{id:"replicated-subscription"},"Replicated subscription"),(0,r.kt)("p",null,"In 2.4.0 release, a mechanism is added to keep subscription state in sync, within a sub-second timeframe,\nin the context of a topic that is being asynchronously replicated across multiple geographical\nregions. Here is ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/wiki/PIP-33%3A-Replicated-subscriptions"},"architecture"),"\nfor replicated subscription."),(0,r.kt)("p",null,"The following is an example to use replicated subscription:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'\nConsumer<String> consumer = client.newConsumer(Schema.STRING)\n            .topic("my-topic")\n            .subscriptionName("my-subscription")\n            .replicateSubscriptionState(true)\n            .subscribe();\n\n')),(0,r.kt)("h3",{id:"new-io-connectors"},"New IO connectors"),(0,r.kt)("p",null,"A new batch of connectors is added, including Flume, Redis sink, Solr sink, RabbitMQ sink.\nThe following lists builtin ",(0,r.kt)("a",{parentName:"p",href:"http://pulsar.apache.org/docs/en/io-connectors/"},"connectors"),"\nthat Pulsar supports."),(0,r.kt)("h3",{id:"security"},"Security"),(0,r.kt)("p",null,"In 2.4.0 release, Kerberos is supported in Apache Pulsar broker and client.\nTo enable Kerberos authentication, refer to the ",(0,r.kt)("a",{parentName:"p",href:"http://pulsar.apache.org/docs/en/security-kerberos/"},"document"),"."),(0,r.kt)("p",null,"Also added role based Pulsar Function authentication and authorization."),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"If you want to download Pulsar 2.4.0, click ",(0,r.kt)("a",{parentName:"p",href:"/download"},"here"),". You can send any questions or suggestions\nto our mailing lists, contribute to Pulsar on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar"},"GitHub")," or join\nthe Apache Pulsar community on ",(0,r.kt)("a",{parentName:"p",href:"https://apache-pulsar.herokuapp.com/"},"Slack"),"."))}d.isMDXComponent=!0}}]);