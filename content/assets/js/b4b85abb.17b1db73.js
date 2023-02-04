"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[40433],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(a),h=r,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||i;return a?n.createElement(m,o(o({ref:t},c),{},{components:a})):n.createElement(m,o({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var u=2;u<i;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),r=a(86010);const i={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,o),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(87462),r=a(67294),i=a(86010),o=a(72389),s=a(67392),l=a(7094),u=a(12466);const c={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function p(e){const{lazy:t,block:a,defaultValue:o,values:p,groupId:d,className:h}=e,m=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=p??m.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),f=(0,s.l)(b,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===o?o:o??m.find((e=>e.props.default))?.props.value??m[0].props.value;if(null!==k&&!b.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:v}=(0,l.U)(),[y,w]=(0,r.useState)(k),N=[],{blockElementScrollPositionUntilNextRender:C}=(0,u.o5)();if(null!=d){const e=g[d];null!=e&&e!==y&&b.some((t=>t.value===e))&&w(e)}const T=e=>{const t=e.currentTarget,a=N.indexOf(t),n=b[a].value;n!==y&&(C(t),w(n),null!=d&&v(d,String(n)))},P=e=>{let t=null;switch(e.key){case"Enter":T(e);break;case"ArrowRight":{const a=N.indexOf(e.currentTarget)+1;t=N[a]??N[0];break}case"ArrowLeft":{const a=N.indexOf(e.currentTarget)-1;t=N[a]??N[N.length-1];break}}t?.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",c.tabList)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},h)},b.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,key:t,ref:e=>N.push(e),onKeyDown:P,onClick:T},o,{className:(0,i.Z)("tabs__item",c.tabItem,o?.className,{"tabs__item--active":y===t})}),a??t)}))),t?(0,r.cloneElement)(m.filter((e=>e.props.value===y))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},m.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==y})))))}function d(e){const t=(0,o.Z)();return r.createElement(p,(0,n.Z)({key:String(t)},e))}},34964:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),i=a(65488),o=a(85162);const s={id:"security-basic-auth",title:"Authentication using HTTP basic",sidebar_label:"Authentication using HTTP basic"},l=void 0,u={unversionedId:"security-basic-auth",id:"security-basic-auth",title:"Authentication using HTTP basic",description:"Basic authentication is a simple authentication scheme built into the HTTP protocol, which uses base64-encoded username and password pairs as credentials.",source:"@site/docs/security-basic-auth.md",sourceDirName:".",slug:"/security-basic-auth",permalink:"/docs/next/security-basic-auth",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/docs/security-basic-auth.md",tags:[],version:"current",frontMatter:{id:"security-basic-auth",title:"Authentication using HTTP basic",sidebar_label:"Authentication using HTTP basic"},sidebar:"docsSidebar",previous:{title:"Authentication using OAuth 2.0 access tokens",permalink:"/docs/next/security-oauth2"},next:{title:"Authorization and ACLs",permalink:"/docs/next/security-authorization"}},c={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Create your authentication file",id:"create-your-authentication-file",level:2},{value:"Enable basic authentication on brokers/proxies",id:"enable-basic-authentication-on-brokersproxies",level:2},{value:"Configure basic authentication in CLI tools",id:"configure-basic-authentication-in-cli-tools",level:2},{value:"Configure basic authentication in Pulsar clients",id:"configure-basic-authentication-in-pulsar-clients",level:2}],d={toc:p},h="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(h,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Basic_access_authentication"},"Basic authentication")," is a simple authentication scheme built into the HTTP protocol, which uses base64-encoded username and password pairs as credentials."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"Install ",(0,r.kt)("a",{parentName:"p",href:"https://httpd.apache.org/docs/2.4/programs/htpasswd.html"},(0,r.kt)("inlineCode",{parentName:"a"},"htpasswd"))," in your environment to create a password file for storing username-password pairs."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"For Ubuntu/Debian, run the following command to install ",(0,r.kt)("inlineCode",{parentName:"p"},"htpasswd"),"."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"apt install apache2-utils\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"For CentOS/RHEL, run the following command to install ",(0,r.kt)("inlineCode",{parentName:"p"},"htpasswd"),"."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install httpd-tools\n")))),(0,r.kt)("h2",{id:"create-your-authentication-file"},"Create your authentication file"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Currently, you can use MD5 (recommended) and CRYPT encryption to authenticate your password.")),(0,r.kt)("p",null,"Create a password file named ",(0,r.kt)("inlineCode",{parentName:"p"},".htpasswd")," with a user account ",(0,r.kt)("inlineCode",{parentName:"p"},"superuser/admin"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Use MD5 encryption (recommended):"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"htpasswd -cmb /path/to/.htpasswd superuser admin\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Use CRYPT encryption:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"htpasswd -cdb /path/to/.htpasswd superuser admin\n")))),(0,r.kt)("p",null,"You can preview the content of your password file by running the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cat path/to/.htpasswd\nsuperuser:$apr1$GBIYZYFZ$MzLcPrvoUky16mLcK6UtX/\n")),(0,r.kt)("h2",{id:"enable-basic-authentication-on-brokersproxies"},"Enable basic authentication on brokers/proxies"),(0,r.kt)("p",null,"To configure brokers/proxies to authenticate clients using basic, add the following parameters to the ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/broker.conf")," and the ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/proxy.conf")," file. If you use a standalone Pulsar, you need to add these parameters to the ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/standalone.conf")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-conf"},'# Configuration to enable Basic authentication\nauthenticationEnabled=true\nauthenticationProviders=org.apache.pulsar.broker.authentication.AuthenticationProviderBasic\n\nbasicAuthConf=file:///path/to/.htpasswd\n# basicAuthConf=/path/to/.htpasswd\n# When use the base64 format, you need to encode the .htpaswd content to bas64\n# basicAuthConf=data:;base64,YOUR-BASE64\n# basicAuthConf=YOUR-BASE64\n\n# Authentication settings of the broker itself. Used when the broker connects to other brokers, or when the proxy connects to brokers, either in same or other clusters\nbrokerClientAuthenticationPlugin=org.apache.pulsar.client.impl.auth.AuthenticationBasic\nbrokerClientAuthenticationParameters={"userId":"superuser","password":"admin"}\n')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"You can also set an environment variable named ",(0,r.kt)("inlineCode",{parentName:"p"},"PULSAR_EXTRA_OPTS")," and the value is ",(0,r.kt)("inlineCode",{parentName:"p"},"-Dpulsar.auth.basic.conf=/path/to/.htpasswd"),". Pulsar reads this environment variable to implement HTTP basic authentication.")),(0,r.kt)("h2",{id:"configure-basic-authentication-in-cli-tools"},"Configure basic authentication in CLI tools"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference-cli-tools"},"Command-line tools"),", such as ",(0,r.kt)("a",{href:"/tools/pulsar-admin/",target:"_blank"},"Pulsar-admin"),", ",(0,r.kt)("a",{href:"/tools/pulsar-perf/",target:"_blank"},"Pulsar-perf")," and ",(0,r.kt)("a",{href:"/tools/pulsar-client/",target:"_blank"},"Pulsar-client"),", use the ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/client.conf")," file in your Pulsar installation. To configure basic authentication in Pulsar CLI tools, you need to add the following parameters to the ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/client.conf")," file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-conf"},'authPlugin=org.apache.pulsar.client.impl.auth.AuthenticationBasic\nauthParams={"userId":"superuser","password":"admin"}\n')),(0,r.kt)("h2",{id:"configure-basic-authentication-in-pulsar-clients"},"Configure basic authentication in Pulsar clients"),(0,r.kt)("p",null,"The following example shows how to configure basic authentication when using Pulsar clients."),(0,r.kt)(i.Z,{groupId:"lang-choice",defaultValue:"Java",values:[{label:"Java",value:"Java"},{label:"Python",value:"Python"},{label:"C++",value:"C++"},{label:"Go",value:"Go"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'AuthenticationBasic auth = new AuthenticationBasic();\nauth.configure("{\\"userId\\":\\"superuser\\",\\"password\\":\\"admin\\"}");\nPulsarClient client = PulsarClient.builder()\n   .serviceUrl("pulsar://broker.example.com:6650")\n   .authentication(auth)\n   .build();\n'))),(0,r.kt)(o.Z,{value:"C++",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <pulsar/Client.h>\n\nint main() {\n    pulsar::ClientConfiguration config;\n    AuthenticationPtr auth = pulsar::AuthBasic::create("admin", "123456")\n    config.setAuth(auth);\n    pulsar::Client client("pulsar://broker.example.com:6650/", config);\n\n    return 0;\n}\n'))),(0,r.kt)(o.Z,{value:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'if __name__ == "__main__":\n   client = Client("pulsar://broker.example.com:6650", authentication=AuthenticationBasic("admin", "123456"))\n'))),(0,r.kt)(o.Z,{value:"Go",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'    provider, err := pulsar.NewAuthenticationBasic("admin", "123456")\n    if err != nil {\n        log.Fatal(err)\n    }\n    client, err := pulsar.NewClient(pulsar.ClientOptions{\n        URL: "pulsar://broker.example.com:6650",\n        Authentication: provider,\n    })\n')))))}m.isMDXComponent=!0}}]);