"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[9306],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,s=e.originalType,c=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),u=l(a),h=i,d=u["".concat(c,".").concat(h)]||u[h]||m[h]||s;return a?n.createElement(d,o(o({ref:t},p),{},{components:a})):n.createElement(d,o({ref:t},p))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=a.length,o=new Array(s);o[0]=h;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r[u]="string"==typeof e?e:i,o[1]=r;for(var l=2;l<s;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},9186:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var n=a(87462),i=(a(67294),a(3905));const s={id:"concepts-multi-tenancy",title:"Multi Tenancy",sidebar_label:"Multi Tenancy"},o=void 0,r={unversionedId:"concepts-multi-tenancy",id:"concepts-multi-tenancy",title:"Multi Tenancy",description:"Pulsar was created from the ground up as a multi-tenant system. To support multi-tenancy, Pulsar has a concept of tenants. Tenants can be spread across clusters and can each have their own authentication and authorization scheme applied to them. They are also the administrative unit at which storage quotas, message TTL, and isolation policies can be managed.",source:"@site/docs/concepts-multi-tenancy.md",sourceDirName:".",slug:"/concepts-multi-tenancy",permalink:"/docs/next/concepts-multi-tenancy",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/docs/concepts-multi-tenancy.md",tags:[],version:"current",frontMatter:{id:"concepts-multi-tenancy",title:"Multi Tenancy",sidebar_label:"Multi Tenancy"},sidebar:"docsSidebar",previous:{title:"Cluster-level failover",permalink:"/docs/next/concepts-cluster-level-failover"},next:{title:"Authentication and Authorization",permalink:"/docs/next/concepts-authentication"}},c={},l=[{value:"Tenants",id:"tenants",level:2},{value:"Namespaces",id:"namespaces",level:2},{value:"Namespace change events and topic-level policies",id:"namespace-change-events-and-topic-level-policies",level:3}],p={toc:l},u="wrapper";function m(e){let{components:t,...s}=e;return(0,i.kt)(u,(0,n.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Pulsar was created from the ground up as a multi-tenant system. To support multi-tenancy, Pulsar has a concept of tenants. Tenants can be spread across clusters and can each have their own ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/security-overview"},"authentication and authorization")," scheme applied to them. They are also the administrative unit at which storage quotas, ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/cookbooks-retention-expiry#time-to-live-ttl"},"message TTL"),", and isolation policies can be managed."),(0,i.kt)("p",null,"The multi-tenant nature of Pulsar is reflected mostly visibly in topic URLs, which have this structure:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-http"},"persistent://tenant/namespace/topic\n")),(0,i.kt)("p",null,"As you can see, the tenant is the most basic unit of categorization for topics (more fundamental than the namespace and topic name)."),(0,i.kt)("h2",{id:"tenants"},"Tenants"),(0,i.kt)("p",null,"To each tenant in a Pulsar instance you can assign:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"An ",(0,i.kt)("a",{parentName:"li",href:"/docs/next/security-authorization"},"authorization")," scheme"),(0,i.kt)("li",{parentName:"ul"},"The set of ",(0,i.kt)("a",{parentName:"li",href:"/docs/next/reference-terminology#cluster"},"clusters")," to which the tenant's configuration applies")),(0,i.kt)("h2",{id:"namespaces"},"Namespaces"),(0,i.kt)("p",null,"Tenants and namespaces are two key concepts of Pulsar to support multi-tenancy."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Pulsar is provisioned for specified tenants with appropriate capacity allocated to the tenant."),(0,i.kt)("li",{parentName:"ul"},"A namespace is the administrative unit nomenclature within a tenant. The configuration policies set on a namespace apply to all the topics created in that namespace. A tenant may create multiple namespaces via self-administration using the REST API and the ",(0,i.kt)("a",{href:"/tools/pulsar-admin/",target:"_blank"},(0,i.kt)("inlineCode",{parentName:"li"},"pulsar-admin"))," CLI tool. For instance, a tenant with different applications can create a separate namespace for each application.")),(0,i.kt)("p",null,"Names for topics in the same namespace will look like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-http"},"\npersistent://tenant/app1/topic-1\n\npersistent://tenant/app1/topic-2\n\npersistent://tenant/app1/topic-3\n\n")),(0,i.kt)("h3",{id:"namespace-change-events-and-topic-level-policies"},"Namespace change events and topic-level policies"),(0,i.kt)("p",null,"Pulsar is a multi-tenant event streaming system. Administrators can manage the tenants and namespaces by setting policies at different levels. However, the policies, such as retention policy and storage quota policy, are only available at a namespace level. In many use cases, users need to set a policy at the topic level. The namespace change events approach is proposed for supporting topic-level policies in an efficient way. In this approach, Pulsar is used as an event log to store namespace change events (such as topic policy changes). This approach has a few benefits:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Avoid using ZooKeeper and introduce more loads to ZooKeeper."),(0,i.kt)("li",{parentName:"ul"},"Use Pulsar as an event log for propagating the policy cache. It can scale efficiently."),(0,i.kt)("li",{parentName:"ul"},"Use Pulsar SQL to query the namespace changes and audit the system.")),(0,i.kt)("p",null,"Each namespace has a ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/concepts-messaging#system-topic"},"system topic")," named ",(0,i.kt)("inlineCode",{parentName:"p"},"__change_events"),". This system topic stores change events for a given namespace. The following figure illustrates how to leverage it to update topic-level policies."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Leverage the system topic to update topic-level policies",src:a(9593).Z,width:"1510",height:"536"})),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Pulsar Admin clients communicate with the Admin Restful API to update topic-level policies."),(0,i.kt)("li",{parentName:"ol"},"Any broker that receives the Admin HTTP request publishes a topic policy change event to the corresponding system topic (",(0,i.kt)("inlineCode",{parentName:"li"},"__change_events"),") of the namespace."),(0,i.kt)("li",{parentName:"ol"},"Each broker that owns a namespace bundle(s) subscribes to the system topic (",(0,i.kt)("inlineCode",{parentName:"li"},"__change_events"),") to receive the change events of the namespace."),(0,i.kt)("li",{parentName:"ol"},"Each broker applies the change events to its policy cache."),(0,i.kt)("li",{parentName:"ol"},"Once the policy cache is updated, the broker sends the response back to the Pulsar Admin clients.")))}m.isMDXComponent=!0},9593:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/system-topic-for-topic-level-policies-326a54c4c9a23081ef9bf8d9646601eb.svg"}}]);