"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[8551],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,h=u["".concat(s,".").concat(d)]||u[d]||k[d]||i;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},92823:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>k,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={id:"security-kerberos",title:"Authentication using Kerberos",sidebar_label:"Authentication using Kerberos"},o=void 0,l={unversionedId:"security-kerberos",id:"version-2.11.x/security-kerberos",title:"Authentication using Kerberos",description:"Kerberos is a network authentication protocol designed to provide strong authentication for client applications and server applications by using secret-key cryptography.",source:"@site/versioned_docs/version-2.11.x/security-kerberos.md",sourceDirName:".",slug:"/security-kerberos",permalink:"/docs/2.11.x/security-kerberos",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.11.x/security-kerberos.md",tags:[],version:"2.11.x",frontMatter:{id:"security-kerberos",title:"Authentication using Kerberos",sidebar_label:"Authentication using Kerberos"},sidebar:"docsSidebar",previous:{title:"Authentication using Athenz",permalink:"/docs/2.11.x/security-athenz"},next:{title:"Authentication using OAuth 2.0 access tokens",permalink:"/docs/2.11.x/security-oauth2"}},s={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Enable Kerberos authentication on brokers",id:"enable-kerberos-authentication-on-brokers",level:2},{value:"Create Kerberos principals",id:"create-kerberos-principals",level:3},{value:"Configure brokers",id:"configure-brokers",level:3},{value:"Configure JAAS",id:"configure-jaas",level:3},{value:"Connect to KDC",id:"connect-to-kdc",level:3},{value:"Enable Kerberos authentication on proxies",id:"enable-kerberos-authentication-on-proxies",level:2},{value:"Create Kerberos principals",id:"create-kerberos-principals-1",level:3},{value:"Configure proxies",id:"configure-proxies",level:3},{value:"Configure JAAS",id:"configure-jaas-1",level:3},{value:"Configure Kerberos authentication in Java clients",id:"configure-kerberos-authentication-in-java-clients",level:2},{value:"Configure Kerberos authentication in CLI tools",id:"configure-kerberos-authentication-in-cli-tools",level:2},{value:"Configure Kerberos authentication between ZooKeeper and broker",id:"configure-kerberos-authentication-between-zookeeper-and-broker",level:2},{value:"Configure Kerberos authentication for BookKeeper and broker",id:"configure-kerberos-authentication-for-bookkeeper-and-broker",level:2}],c={toc:p},u="wrapper";function k(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://web.mit.edu/kerberos/"},"Kerberos")," is a network authentication protocol designed to provide strong authentication for client applications and server applications by using secret-key cryptography. "),(0,r.kt)("p",null,"In Pulsar, you can use Kerberos with ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Simple_Authentication_and_Security_Layer"},"SASL")," as a choice for authentication. Since Pulsar uses the ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Java_Authentication_and_Authorization_Service"},"Java Authentication and Authorization Service (JAAS)")," for SASL configuration, you need to provide JAAS configurations for Kerberos authentication. "),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Kerberos authentication uses the authenticated principal as the role token for ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.11.x/security-authorization"},"Pulsar authorization"),". If you've enabled ",(0,r.kt)("inlineCode",{parentName:"p"},"authorizationEnabled"),", you need to set ",(0,r.kt)("inlineCode",{parentName:"p"},"superUserRoles")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"broker.conf")," that corresponds to the name registered in KDC. For example:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"superUserRoles=client/{clientIp}@EXAMPLE.COM\n"))),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Set up and run a ",(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Key_distribution_center"},"Key Distribution Center(KDC)"),"."),(0,r.kt)("li",{parentName:"ul"},"Install a Kerberos server if your organization doesn't have one. Your Linux vendor might have packages for ",(0,r.kt)("inlineCode",{parentName:"li"},"Kerberos"),". For how to install and configure Kerberos, see ",(0,r.kt)("a",{parentName:"li",href:"https://help.ubuntu.com/community/Kerberos"},"Ubuntu")," and\n",(0,r.kt)("a",{parentName:"li",href:"https://access.redhat.com/documentation/en-US/Red_Hat_Enterprise_Linux/6/html/Managing_Smart_Cards/installing-kerberos.html"},"Redhat"),"."),(0,r.kt)("li",{parentName:"ul"},"If you use Oracle Java, you need to download JCE policy files for your Java version and copy them to the ",(0,r.kt)("inlineCode",{parentName:"li"},"$JAVA_HOME/jre/lib/security")," directory.")),(0,r.kt)("h2",{id:"enable-kerberos-authentication-on-brokers"},"Enable Kerberos authentication on brokers"),(0,r.kt)("h3",{id:"create-kerberos-principals"},"Create Kerberos principals"),(0,r.kt)("p",null,"If you use the existing Kerberos system, ask your Kerberos administrator to obtain a principal for each broker in your cluster and for every operating system user that accesses Pulsar with Kerberos authentication (via clients and CLI tools)."),(0,r.kt)("p",null,"If you have installed your own Kerberos system, you need to create these principals with the following commands:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"### add Principals for broker\nsudo /usr/sbin/kadmin.local -q 'addprinc -randkey broker/{hostname}@{REALM}'\nsudo /usr/sbin/kadmin.local -q \"ktadd -k /etc/security/keytabs/{broker-keytabname}.keytab broker/{hostname}@{REALM}\"\n### add Principals for client\nsudo /usr/sbin/kadmin.local -q 'addprinc -randkey client/{hostname}@{REALM}'\nsudo /usr/sbin/kadmin.local -q \"ktadd -k /etc/security/keytabs/{client-keytabname}.keytab client/{hostname}@{REALM}\"\n")),(0,r.kt)("p",null,"The first part of broker principal (for example, ",(0,r.kt)("inlineCode",{parentName:"p"},"broker")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"broker/{hostname}@{REALM}"),") is the ",(0,r.kt)("inlineCode",{parentName:"p"},"serverType")," of each host. The suggested values of ",(0,r.kt)("inlineCode",{parentName:"p"},"serverType")," are ",(0,r.kt)("inlineCode",{parentName:"p"},"broker")," (host machine runs Pulsar broker service) and ",(0,r.kt)("inlineCode",{parentName:"p"},"proxy")," (host machine runs Pulsar Proxy service). "),(0,r.kt)("p",null,"Note that ",(0,r.kt)("em",{parentName:"p"},"Kerberos")," requires that all your hosts can be resolved with their FQDNs."),(0,r.kt)("h3",{id:"configure-brokers"},"Configure brokers"),(0,r.kt)("p",null,"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"broker.conf")," file, set Kerberos-related configurations. Here is an example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-conf"},'authenticationEnabled=true\nauthenticationProviders=org.apache.pulsar.broker.authentication.AuthenticationProviderSasl\nsaslJaasClientAllowedIds=.*client.* ## regex for principals that are allowed to connect to brokers\nsaslJaasServerSectionName=PulsarBroker ## corresponds to the section in the JAAS configuration file for brokers\n\n# Authentication settings of the broker itself. Used when the broker connects to other brokers, or when the proxy connects to brokers, either in same or other clusters\nbrokerClientAuthenticationPlugin=org.apache.pulsar.client.impl.auth.AuthenticationSasl\nbrokerClientAuthenticationParameters={"saslJaasClientSectionName":"PulsarClient", "serverType":"broker"}\n')),(0,r.kt)("p",null,"To make Pulsar internal admin client work properly, you need to: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Set ",(0,r.kt)("inlineCode",{parentName:"li"},"brokerClientAuthenticationPlugin")," to client plugin ",(0,r.kt)("inlineCode",{parentName:"li"},"AuthenticationSasl"),";"),(0,r.kt)("li",{parentName:"ul"},"Set ",(0,r.kt)("inlineCode",{parentName:"li"},"brokerClientAuthenticationParameters")," to value in JSON string ",(0,r.kt)("inlineCode",{parentName:"li"},'{"saslJaasClientSectionName":"PulsarClient", "serverType":"broker"}'),", in which ",(0,r.kt)("inlineCode",{parentName:"li"},"PulsarClient")," is the section name in the ",(0,r.kt)("inlineCode",{parentName:"li"},"pulsar_jaas.conf")," file, and ",(0,r.kt)("inlineCode",{parentName:"li"},'"serverType":"broker"')," indicates that the internal admin client connects to a broker.")),(0,r.kt)("h3",{id:"configure-jaas"},"Configure JAAS"),(0,r.kt)("p",null,"JAAS configuration file provides the information to connect KDC. Here is an example named ",(0,r.kt)("inlineCode",{parentName:"p"},"pulsar_jaas.conf"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-conf"},' PulsarBroker {\n   com.sun.security.auth.module.Krb5LoginModule required\n   useKeyTab=true\n   storeKey=true\n   useTicketCache=false\n   keyTab="/etc/security/keytabs/pulsarbroker.keytab"\n   principal="broker/localhost@EXAMPLE.COM";\n};\n\n PulsarClient {\n   com.sun.security.auth.module.Krb5LoginModule required\n   useKeyTab=true\n   storeKey=true\n   useTicketCache=false\n   keyTab="/etc/security/keytabs/pulsarclient.keytab"\n   principal="client/localhost@EXAMPLE.COM";\n};\n')),(0,r.kt)("p",null,"In the above example:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"PulsarBroker")," is a section name in the JAAS file that each broker uses. This section tells the broker to use which principal inside Kerberos and the location of the keytab where the principal is stored. "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"PulsarClient")," is a section name in the JASS file that each client uses. This section tells the client to use which principal inside Kerberos and the location of the keytab where the principal is stored.")),(0,r.kt)("p",null,"You need to set the ",(0,r.kt)("inlineCode",{parentName:"p"},"pulsar_jaas.conf")," file path as a JVM parameter. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"    -Djava.security.auth.login.config=/etc/pulsar/pulsar_jaas.conf\n")),(0,r.kt)("h3",{id:"connect-to-kdc"},"Connect to KDC"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If your machines configured with Kerberos already have a system-wide configuration, you can skip this configuration.")),(0,r.kt)("p",null,"The content of ",(0,r.kt)("inlineCode",{parentName:"p"},"krb5.conf")," file indicates the default Realm and KDC information. See ",(0,r.kt)("a",{parentName:"p",href:"https://docs.oracle.com/javase/8/docs/technotes/guides/security/jgss/tutorials/KerberosReq.html"},"JDK\u2019s Kerberos Requirements")," for more details."),(0,r.kt)("p",null,"To specify the path to the ",(0,r.kt)("inlineCode",{parentName:"p"},"krb5.conf")," file for brokers, enter the command below. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"-Djava.security.krb5.conf=/etc/pulsar/krb5.conf\n")),(0,r.kt)("p",null,"Here is an example of the ",(0,r.kt)("inlineCode",{parentName:"p"},"krb5.conf")," file. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-conf"},"[libdefaults]\n default_realm = EXAMPLE.COM\n\n[realms]\n EXAMPLE.COM  = {\n  kdc = localhost:62037\n }\n")),(0,r.kt)("p",null,"In the above example:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"EXAMPLE.COM")," is the default Realm;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"kdc = localhost:62037")," is the KDC server URL for the ",(0,r.kt)("inlineCode",{parentName:"li"},"EXAMPLE.COM")," Realm.")),(0,r.kt)("h2",{id:"enable-kerberos-authentication-on-proxies"},"Enable Kerberos authentication on proxies"),(0,r.kt)("p",null,"If you want to use proxies between brokers and clients, Pulsar proxies (as a SASL server in Kerberos) will authenticate clients (as a SASL client in Kerberos) before brokers authenticate proxies. "),(0,r.kt)("h3",{id:"create-kerberos-principals-1"},"Create Kerberos principals"),(0,r.kt)("p",null,"Add new principals for Pulsar proxies."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"### add Principals for Pulsar Proxy\nsudo /usr/sbin/kadmin.local -q 'addprinc -randkey proxy/{hostname}@{REALM}'\nsudo /usr/sbin/kadmin.local -q \"ktadd -k /etc/security/keytabs/{proxy-keytabname}.keytab proxy/{hostname}@{REALM}\"\n")),(0,r.kt)("p",null,"For principals set for brokers and clients, see ",(0,r.kt)("a",{parentName:"p",href:"#create-kerberos-principals"},"here"),"."),(0,r.kt)("h3",{id:"configure-proxies"},"Configure proxies"),(0,r.kt)("p",null,"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"proxy.conf")," file, set Kerberos-related configuration. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'## related to authenticate client.\nauthenticationEnabled=true\nauthenticationProviders=org.apache.pulsar.broker.authentication.AuthenticationProviderSasl\nsaslJaasClientAllowedIds=.*client.*\nsaslJaasServerSectionName=PulsarProxy\n\n## related to be authenticated by broker\nbrokerClientAuthenticationPlugin=org.apache.pulsar.client.impl.auth.AuthenticationSasl\nbrokerClientAuthenticationParameters={"saslJaasClientSectionName":"PulsarProxy", "serverType":"broker"}\nforwardAuthorizationCredentials=true\n')),(0,r.kt)("p",null,"In the above example:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The first part relates to the authentication between clients and proxies. In this phase, clients work as SASL clients, while proxies work as SASL servers. "),(0,r.kt)("li",{parentName:"ul"},"The second part relates to the authentication between proxies and brokers. In this phase, proxies work as SASL clients, while brokers work as SASL servers.")),(0,r.kt)("h3",{id:"configure-jaas-1"},"Configure JAAS"),(0,r.kt)("p",null,"Add a new section for proxies in the ",(0,r.kt)("inlineCode",{parentName:"p"},"pulsar_jaas.conf")," file. Here is an example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-conf"},' PulsarProxy {\n   com.sun.security.auth.module.Krb5LoginModule required\n   useKeyTab=true\n   storeKey=true\n   useTicketCache=false\n   keyTab="/etc/security/keytabs/pulsarproxy.keytab"\n   principal="proxy/localhost@EXAMPLE.COM";\n};\n')),(0,r.kt)("h2",{id:"configure-kerberos-authentication-in-java-clients"},"Configure Kerberos authentication in Java clients"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Ensure that the operating system user who starts Pulsar clients can access the keytabs configured in the ",(0,r.kt)("inlineCode",{parentName:"p"},"pulsar_jaas.conf")," file and the KDC server configured in the ",(0,r.kt)("inlineCode",{parentName:"p"},"krb5.conf")," file.")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In client applications, include ",(0,r.kt)("inlineCode",{parentName:"p"},"pulsar-client-auth-sasl")," in your project dependency."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"    <dependency>\n      <groupId>org.apache.pulsar</groupId>\n      <artifactId>pulsar-client-auth-sasl</artifactId>\n      <version>${pulsar.version}</version>\n    </dependency>\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Configure the authentication type to use ",(0,r.kt)("inlineCode",{parentName:"p"},"AuthenticationSasl")," and provide the following parameters. "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"set ",(0,r.kt)("inlineCode",{parentName:"li"},"saslJaasClientSectionName")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"PulsarClient"),";"),(0,r.kt)("li",{parentName:"ul"},"set ",(0,r.kt)("inlineCode",{parentName:"li"},"serverType")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"broker"),". ",(0,r.kt)("inlineCode",{parentName:"li"},"serverType")," stands for whether this client connects to brokers or proxies. Clients use this parameter to know which server-side principal should be used. ")),(0,r.kt)("p",{parentName:"li"},"The following is an example of configuring a Java client:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},'System.setProperty("java.security.auth.login.config", "/etc/pulsar/pulsar_jaas.conf");\nSystem.setProperty("java.security.krb5.conf", "/etc/pulsar/krb5.conf");\n\nMap<String, String> authParams = Maps.newHashMap();\nauthParams.put("saslJaasClientSectionName", "PulsarClient");\nauthParams.put("serverType", "broker");\n\nAuthentication saslAuth = AuthenticationFactory\n        .create(org.apache.pulsar.client.impl.auth.AuthenticationSasl.class.getName(), authParams);\n\nPulsarClient client = PulsarClient.builder()\n        .serviceUrl("pulsar://my-broker.com:6650")\n        .authentication(saslAuth)\n        .build();\n')),(0,r.kt)("admonition",{parentName:"li",type:"note"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"To configure clients for proxies, you need to set ",(0,r.kt)("inlineCode",{parentName:"li"},"serverType")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"proxy")," instead of ",(0,r.kt)("inlineCode",{parentName:"li"},"broker"),"."),(0,r.kt)("li",{parentName:"ul"},"The first two lines in the above example are hard-coded. Alternatively, you can set additional JVM parameters for ",(0,r.kt)("inlineCode",{parentName:"li"},"pulsar_jaas.conf")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"krb5.conf")," files when you run the application like below:")),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"java -cp -Djava.security.auth.login.config=/etc/pulsar/pulsar_jaas.conf -Djava.security.krb5.conf=/etc/pulsar/krb5.conf $APP-jar-with-dependencies.jar $CLASSNAME\n"))))),(0,r.kt)("h2",{id:"configure-kerberos-authentication-in-cli-tools"},"Configure Kerberos authentication in CLI tools"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/2.11.x/reference-cli-tools"},"Command-line tools")," like ",(0,r.kt)("a",{href:"/tools/pulsar-admin/",target:"_blank"},(0,r.kt)("inlineCode",{parentName:"p"},"pulsar-admin")),", ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.11.x/reference-cli-tools#pulsar-perf"},(0,r.kt)("inlineCode",{parentName:"a"},"pulsar-perf")),", and ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.11.x/reference-cli-tools#pulsar-client"},(0,r.kt)("inlineCode",{parentName:"a"},"pulsar-client"))," use the ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/client.conf")," file in a Pulsar installation."),(0,r.kt)("p",null,"When using command-line tools, you need to perform the following steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Configure the ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/client.conf")," file."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'authPlugin=org.apache.pulsar.client.impl.auth.AuthenticationSasl\nauthParams={"saslJaasClientSectionName":"PulsarClient", "serverType":"broker"}\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Set JVM parameters for the ",(0,r.kt)("inlineCode",{parentName:"p"},"pulsar_jaas.conf")," file and ",(0,r.kt)("inlineCode",{parentName:"p"},"krb5.conf")," files with additional options."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"-Djava.security.auth.login.config=/etc/pulsar/pulsar_jaas.conf -Djava.security.krb5.conf=/etc/pulsar/krb5.conf\n")),(0,r.kt)("p",{parentName:"li"},"You can add this at the end of ",(0,r.kt)("inlineCode",{parentName:"p"},"PULSAR_EXTRA_OPTS")," in the file ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/conf/pulsar_tools_env.sh"},(0,r.kt)("inlineCode",{parentName:"a"},"pulsar_tools_env.sh")),", or add this line ",(0,r.kt)("inlineCode",{parentName:"p"},'OPTS="$OPTS -Djava.security.auth.login.config=/etc/pulsar/pulsar_jaas.conf -Djava.security.krb5.conf=/etc/pulsar/krb5.conf"')," directly to the CLI tool script. The meaning of configurations is the same as the meaning of configurations in Java client section."))),(0,r.kt)("h2",{id:"configure-kerberos-authentication-between-zookeeper-and-broker"},"Configure Kerberos authentication between ZooKeeper and broker"),(0,r.kt)("p",null,"Pulsar broker acts as a Kerberos client when authenticating with Zookeeper."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add the settings in ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/zookeeper.conf"),"."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-conf"},"authProvider.1=org.apache.zookeeper.server.auth.SASLAuthenticationProvider\nrequireClientAuthScheme=sasl\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enter the following commands to add a section of ",(0,r.kt)("inlineCode",{parentName:"p"},"Client")," configurations in ",(0,r.kt)("inlineCode",{parentName:"p"},"pulsar_jaas.conf")," that Pulsar broker uses:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},' Client {\n   com.sun.security.auth.module.Krb5LoginModule required\n   useKeyTab=true\n   storeKey=true\n   useTicketCache=false\n   keyTab="/etc/security/keytabs/pulsarbroker.keytab"\n   principal="broker/localhost@EXAMPLE.COM";\n};\n')),(0,r.kt)("p",{parentName:"li"},"In this setting, the principal of Pulsar broker and keytab file indicates the role of brokers when you authenticate with ZooKeeper."))),(0,r.kt)("p",null,"For more information, see ",(0,r.kt)("a",{parentName:"p",href:"https://cwiki.apache.org/confluence/display/ZOOKEEPER/Client-Server+mutual+authentication"},"ZooKeeper document")),(0,r.kt)("h2",{id:"configure-kerberos-authentication-for-bookkeeper-and-broker"},"Configure Kerberos authentication for BookKeeper and broker"),(0,r.kt)("p",null,"Pulsar broker acts as a Kerberos client when authenticating with Bookie. "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add the ",(0,r.kt)("inlineCode",{parentName:"p"},"bookkeeperClientAuthenticationPlugin")," parameter in ",(0,r.kt)("inlineCode",{parentName:"p"},"broker.conf"),"."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-conf"},"bookkeeperClientAuthenticationPlugin=org.apache.bookkeeper.sasl.SASLClientProviderFactory\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"SASLClientProviderFactory")," creates a BookKeeper SASL client in a broker, and the broker uses the created SASL client to authenticate with a Bookie node.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add a section of ",(0,r.kt)("inlineCode",{parentName:"p"},"BookKeeper")," configurations in the ",(0,r.kt)("inlineCode",{parentName:"p"},"pulsar_jaas.conf")," file that broker/proxy uses."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-conf"},' BookKeeper {\n   com.sun.security.auth.module.Krb5LoginModule required\n   useKeyTab=true\n   storeKey=true\n   useTicketCache=false\n   keyTab="/etc/security/keytabs/pulsarbroker.keytab"\n   principal="broker/localhost@EXAMPLE.COM";\n};\n')),(0,r.kt)("p",{parentName:"li"},"In this setting, the principal of Pulsar broker and keytab file indicates the role of brokers when you authenticate with Bookie."))),(0,r.kt)("p",null,"For more information, see ",(0,r.kt)("a",{parentName:"p",href:"https://bookkeeper.apache.org/docs/next/security/sasl/"},"BookKeeper document"),"."))}k.isMDXComponent=!0}}]);