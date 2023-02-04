"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[95246],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),s=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=s(a),m=r,k=c["".concat(u,".").concat(m)]||c[m]||d[m]||o;return a?n.createElement(k,l(l({ref:t},p),{},{components:a})):n.createElement(k,l({ref:t},p))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[c]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(86010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,l),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(87462),r=a(67294),o=a(86010),l=a(72389),i=a(67392),u=a(7094),s=a(12466);const p={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function c(e){const{lazy:t,block:a,defaultValue:l,values:c,groupId:d,className:m}=e,k=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=c??k.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),h=(0,i.l)(v,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===l?l:l??k.find((e=>e.props.default))?.props.value??k[0].props.value;if(null!==y&&!v.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:f,setTabGroupChoices:g}=(0,u.U)(),[b,N]=(0,r.useState)(y),C=[],{blockElementScrollPositionUntilNextRender:T}=(0,s.o5)();if(null!=d){const e=f[d];null!=e&&e!==b&&v.some((t=>t.value===e))&&N(e)}const x=e=>{const t=e.currentTarget,a=C.indexOf(t),n=v[a].value;n!==b&&(T(t),N(n),null!=d&&g(d,String(n)))},w=e=>{let t=null;switch(e.key){case"Enter":x(e);break;case"ArrowRight":{const a=C.indexOf(e.currentTarget)+1;t=C[a]??C[0];break}case"ArrowLeft":{const a=C.indexOf(e.currentTarget)-1;t=C[a]??C[C.length-1];break}}t?.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",p.tabList)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},m)},v.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,key:t,ref:e=>C.push(e),onKeyDown:w,onClick:x},l,{className:(0,o.Z)("tabs__item",p.tabItem,l?.className,{"tabs__item--active":b===t})}),a??t)}))),t?(0,r.cloneElement)(k.filter((e=>e.props.value===b))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==b})))))}function d(e){const t=(0,l.Z)();return r.createElement(c,(0,n.Z)({key:String(t)},e))}},53083:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>k,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=a(87462),r=(a(67294),a(3905)),o=a(65488),l=a(85162);const i={id:"functions-develop-state",title:"Configure state storage",sidebar_label:"Configure state storage"},u=void 0,s={unversionedId:"functions-develop-state",id:"version-2.11.x/functions-develop-state",title:"Configure state storage",description:"Pulsar Functions use Apache BookKeeper as a state storage interface. Pulsar integrates with BookKeeper table service to store state for functions. For example, a WordCount function can store the state of its counters into BookKeeper table service via State APIs.",source:"@site/versioned_docs/version-2.11.x/functions-develop-state.md",sourceDirName:".",slug:"/functions-develop-state",permalink:"/docs/2.11.x/functions-develop-state",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.11.x/functions-develop-state.md",tags:[],version:"2.11.x",frontMatter:{id:"functions-develop-state",title:"Configure state storage",sidebar_label:"Configure state storage"},sidebar:"docsSidebar",previous:{title:"Enable security on functions",permalink:"/docs/2.11.x/functions-develop-security"},next:{title:"Call Pulsar admin APIs",permalink:"/docs/2.11.x/functions-develop-admin-api"}},p={},c=[{value:"Call state APIs",id:"call-state-apis",level:2},{value:"Increment counter",id:"increment-counter",level:2},{value:"Retrieve counter",id:"retrieve-counter",level:3},{value:"Update state",id:"update-state",level:3},{value:"Retrieve state",id:"retrieve-state",level:3},{value:"Delete state",id:"delete-state",level:3},{value:"Query state via CLI",id:"query-state-via-cli",level:2},{value:"Example",id:"example",level:2}],d={toc:c},m="wrapper";function k(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Pulsar Functions use ",(0,r.kt)("a",{parentName:"p",href:"https://bookkeeper.apache.org"},"Apache BookKeeper")," as a state storage interface. Pulsar integrates with BookKeeper ",(0,r.kt)("a",{parentName:"p",href:"https://docs.google.com/document/d/155xAwWv5IdOitHh1NVMEwCMGgB28M3FyMiQSxEpjE-Y/edit#heading=h.56rbh52koe3f"},"table service")," to store state for functions. For example, a ",(0,r.kt)("inlineCode",{parentName:"p"},"WordCount")," function can store the state of its counters into BookKeeper table service via ",(0,r.kt)("a",{parentName:"p",href:"#call-state-apis"},"State APIs"),"."),(0,r.kt)("p",null,"States are key-value pairs, where a key is a string and its value is arbitrary binary data - counters are stored as 64-bit big-endian binary values. Keys are scoped to an individual function and shared between instances of that function."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"State storage is ",(0,r.kt)("strong",{parentName:"p"},"not")," available for Go functions.")),(0,r.kt)("h2",{id:"call-state-apis"},"Call state APIs"),(0,r.kt)("p",null,"Pulsar Functions expose APIs for mutating and accessing ",(0,r.kt)("inlineCode",{parentName:"p"},"state"),". These APIs are available in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.11.x/functions-concepts#context"},"Context")," object when you use ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.11.x/functions-develop-api"},"Java/Python SDK")," to develop functions."),(0,r.kt)("p",null,"The following table outlines the states that can be accessed within Java and Python functions."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"State-related API"),(0,r.kt)("th",{parentName:"tr",align:null},"Java"),(0,r.kt)("th",{parentName:"tr",align:null},"Python"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#increment-counter"},"Increment counter")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"incrCounter")," ",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"incrCounterAsync")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"incr_counter"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#retrieve-counter"},"Retrieve counter")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"getCounter")," ",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"getCounterAsync")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"get_counter"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#update-state"},"Update state")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"putState")," ",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"putStateAsync")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"put_state"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#retrieve-state"},"Retrieve state")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"getState")," ",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"getStateAsync")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"get_state"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#delete-state"},"Delete state")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"deleteState")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"del_counter"))))),(0,r.kt)("h2",{id:"increment-counter"},"Increment counter"),(0,r.kt)("p",null,"You can use ",(0,r.kt)("inlineCode",{parentName:"p"},"incrCounter")," to increment the counter of a given ",(0,r.kt)("inlineCode",{parentName:"p"},"key")," by the given ",(0,r.kt)("inlineCode",{parentName:"p"},"amount"),".\nIf the ",(0,r.kt)("inlineCode",{parentName:"p"},"key")," does not exist, a new key is created."),(0,r.kt)(o.Z,{groupId:"lang-choice",defaultValue:"Java",values:[{label:"Java",value:"Java"},{label:"Python",value:"Python"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"    /**\n     * Increment the built-in distributed counter referred by key\n     * @param key The name of the key\n     * @param amount The amount to be incremented\n     */\n    void incrCounter(String key, long amount);\n")),(0,r.kt)("p",null,"To asynchronously increment the counter, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"incrCounterAsync"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"     /**\n     * Increment the built-in distributed counter referred by key\n     * but dont wait for the completion of the increment operation\n     *\n     * @param key The name of the key\n     * @param amount The amount to be incremented\n     */\n    CompletableFuture<Void> incrCounterAsync(String key, long amount);\n"))),(0,r.kt)(l.Z,{value:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'  def incr_counter(self, key, amount):\n    """incr the counter of a given key in the managed state"""\n')))),(0,r.kt)("h3",{id:"retrieve-counter"},"Retrieve counter"),(0,r.kt)("p",null,"You can use ",(0,r.kt)("inlineCode",{parentName:"p"},"getCounter")," to retrieve the counter of a given ",(0,r.kt)("inlineCode",{parentName:"p"},"key")," mutated by ",(0,r.kt)("inlineCode",{parentName:"p"},"incrCounter"),"."),(0,r.kt)(o.Z,{groupId:"lang-choice",defaultValue:"Java",values:[{label:"Java",value:"Java"},{label:"Python",value:"Python"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"    /**\n     * Retrieve the counter value for the key.\n     *\n     * @param key name of the key\n     * @return the amount of the counter value for this key\n     */\n    long getCounter(String key);\n")),(0,r.kt)("p",null,"To asynchronously retrieve the counter mutated by ",(0,r.kt)("inlineCode",{parentName:"p"},"incrCounterAsync"),", you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"getCounterAsync"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"     /**\n     * Retrieve the counter value for the key, but don't wait\n     * for the operation to be completed\n     *\n     * @param key name of the key\n     * @return the amount of the counter value for this key\n     */\n    CompletableFuture<Long> getCounterAsync(String key);\n"))),(0,r.kt)(l.Z,{value:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'  def get_counter(self, key):\n    """get the counter of a given key in the managed state"""\n')))),(0,r.kt)("h3",{id:"update-state"},"Update state"),(0,r.kt)("p",null,"Besides the ",(0,r.kt)("inlineCode",{parentName:"p"},"counter")," API, Pulsar also exposes a general key/value API for functions to store and update the state of a given ",(0,r.kt)("inlineCode",{parentName:"p"},"key"),"."),(0,r.kt)(o.Z,{groupId:"lang-choice",defaultValue:"Java",values:[{label:"Java",value:"Java"},{label:"Python",value:"Python"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"    /**\n     * Update the state value for the key.\n     *\n     * @param key name of the key\n     * @param value state value of the key\n     */\n    void putState(String key, ByteBuffer value);\n")),(0,r.kt)("p",null,"To asynchronously update the state of a given ",(0,r.kt)("inlineCode",{parentName:"p"},"key"),", you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"putStateAsync"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"    /**\n     * Update the state value for the key, but don't wait for the operation to be completed\n     *\n     * @param key name of the key\n     * @param value state value of the key\n     */\n    CompletableFuture<Void> putStateAsync(String key, ByteBuffer value);\n"))),(0,r.kt)(l.Z,{value:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'  def put_state(self, key, value):\n    """update the value of a given key in the managed state"""\n')))),(0,r.kt)("h3",{id:"retrieve-state"},"Retrieve state"),(0,r.kt)("p",null,"You can use ",(0,r.kt)("inlineCode",{parentName:"p"},"getState")," to retrieve the state of a given ",(0,r.kt)("inlineCode",{parentName:"p"},"key"),"."),(0,r.kt)(o.Z,{groupId:"lang-choice",defaultValue:"Java",values:[{label:"Java",value:"Java"},{label:"Python",value:"Python"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"    /**\n     * Retrieve the state value for the key.\n     *\n     * @param key name of the key\n     * @return the state value for the key.\n     */\n    ByteBuffer getState(String key);\n")),(0,r.kt)("p",null,"To asynchronously retrieve the state of a given ",(0,r.kt)("inlineCode",{parentName:"p"},"key"),", you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"getStateAsync"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"    /**\n     * Retrieve the state value for the key, but don't wait for the operation to be completed\n     *\n     * @param key name of the key\n     * @return the state value for the key.\n     */\n    CompletableFuture<ByteBuffer> getStateAsync(String key);\n"))),(0,r.kt)(l.Z,{value:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'  def get_state(self, key):\n    """get the value of a given key in the managed state"""\n')))),(0,r.kt)("h3",{id:"delete-state"},"Delete state"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Both counters and binary values share the same keyspace, so this API deletes either type.")),(0,r.kt)(o.Z,{groupId:"lang-choice",defaultValue:"Java",values:[{label:"Java",value:"Java"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"    /**\n     * Delete the state value for the key.\n     *\n     * @param key   name of the key\n     */\n    void deleteState(String key);\n")))),(0,r.kt)("h2",{id:"query-state-via-cli"},"Query state via CLI"),(0,r.kt)("p",null,"Besides using the ",(0,r.kt)("a",{parentName:"p",href:"#call-state-apis"},"State APIs")," to store the state of functions in Pulsar's state storage and retrieve it back from the storage, you can use CLI commands to query the state of functions."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-admin functions querystate \\\n    --tenant <tenant> \\\n    --namespace <namespace> \\\n    --name <function-name> \\\n    --state-storage-url <bookkeeper-service-url> \\\n    --key <state-key> \\\n    [---watch]\n")),(0,r.kt)("p",null,"If ",(0,r.kt)("inlineCode",{parentName:"p"},"--watch")," is specified, the CLI tool keeps running to get the latest value of the provided ",(0,r.kt)("inlineCode",{parentName:"p"},"state-key"),"."),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"The example of ",(0,r.kt)("inlineCode",{parentName:"p"},"WordCountFunction")," demonstrates how ",(0,r.kt)("inlineCode",{parentName:"p"},"state")," is stored within Pulsar Functions."),(0,r.kt)(o.Z,{groupId:"lang-choice",defaultValue:"Java",values:[{label:"Java",value:"Java"},{label:"Python",value:"Python"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Java",mdxType:"TabItem"},(0,r.kt)("p",null,"The logic of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/tree/master//pulsar-functions/java-examples/src/main/java/org/apache/pulsar/functions/api/examples/WordCountFunction.java"},"WordCountFunction")," is simple and straightforward:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The function splits the received ",(0,r.kt)("inlineCode",{parentName:"p"},"String")," into multiple words using regex ",(0,r.kt)("inlineCode",{parentName:"p"},"\\\\."),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"For each ",(0,r.kt)("inlineCode",{parentName:"p"},"word"),", the function increments ",(0,r.kt)("inlineCode",{parentName:"p"},"counter")," by 1 via ",(0,r.kt)("inlineCode",{parentName:"p"},"incrCounter(key, amount)"),"."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},'import org.apache.pulsar.functions.api.Context;\nimport org.apache.pulsar.functions.api.Function;\n\nimport java.util.Arrays;\n\npublic class WordCountFunction implements Function<String, Void> {\n    @Override\n    public Void process(String input, Context context) throws Exception {\n        Arrays.asList(input.split("\\\\.")).forEach(word -> context.incrCounter(word, 1));\n        return null;\n    }\n}\n'))))),(0,r.kt)(l.Z,{value:"Python",mdxType:"TabItem"},(0,r.kt)("p",null,"The logic of this ",(0,r.kt)("inlineCode",{parentName:"p"},"WordCount")," function is simple and straightforward:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The function first splits the received string into multiple words.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"For each ",(0,r.kt)("inlineCode",{parentName:"p"},"word"),", the function increments ",(0,r.kt)("inlineCode",{parentName:"p"},"counter")," by 1 via ",(0,r.kt)("inlineCode",{parentName:"p"},"incr_counter(key, amount)"),"."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from pulsar import Function\n\nclass WordCount(Function):\n    def process(self, item, context):\n        for word in item.split():\n            context.incr_counter(word, 1)\n")))))))}k.isMDXComponent=!0}}]);