"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[38372],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(n),h=o,f=u["".concat(l,".").concat(h)]||u[h]||m[h]||i;return n?a.createElement(f,r(r({ref:t},c),{},{components:n})):a.createElement(f,r({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=h;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:o,r[1]=p;for(var s=2;s<i;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},41283:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var a=n(87462),o=(n(67294),n(3905));const i={id:"functions-package-python",title:"Package Python Functions",sidebar_label:"Package Python Functions"},r=void 0,p={unversionedId:"functions-package-python",id:"version-2.11.x/functions-package-python",title:"Package Python Functions",description:"Python functions support the following three packaging formats:",source:"@site/versioned_docs/version-2.11.x/functions-package-python.md",sourceDirName:".",slug:"/functions-package-python",permalink:"/docs/2.11.x/functions-package-python",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.11.x/functions-package-python.md",tags:[],version:"2.11.x",frontMatter:{id:"functions-package-python",title:"Package Python Functions",sidebar_label:"Package Python Functions"},sidebar:"docsSidebar",previous:{title:"Package Java Functions",permalink:"/docs/2.11.x/functions-package-java"},next:{title:"Package Go Functions",permalink:"/docs/2.11.x/functions-package-go"}},l={},s=[{value:"One Python file",id:"one-python-file",level:2},{value:"ZIP file",id:"zip-file",level:2},{value:"PIP",id:"pip",level:2}],c={toc:s},u="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Python functions support the following three packaging formats:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"One Python file"),(0,o.kt)("li",{parentName:"ul"},"ZIP file"),(0,o.kt)("li",{parentName:"ul"},"PIP")),(0,o.kt)("h2",{id:"one-python-file"},"One Python file"),(0,o.kt)("p",null,"To package a Python function into ",(0,o.kt)("strong",{parentName:"p"},"one Python file"),", complete the following steps."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Write a Python function."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from pulsar import Function #  import the Function module from Pulsar\n\n# The classic ExclamationFunction that appends an exclamation at the end\n# of the input\nclass ExclamationFunction(Function):\n    def __init__(self):\n        pass\n\n    def process(self, input, context):\n        return input + '!'\n")),(0,o.kt)("p",{parentName:"li"}," In this example, when you write a Python function, you need to inherit the Function class and implement the ",(0,o.kt)("inlineCode",{parentName:"p"},"process()")," method."),(0,o.kt)("p",{parentName:"li"}," ",(0,o.kt)("inlineCode",{parentName:"p"},"process()")," mainly has two parameters: "),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"input")," represents your input.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"context")," represents an interface exposed by the Pulsar Function. You can get the attributes in the Python function based on the provided context object.")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Install a Python client. The implementation of a Python function depends on the Python client. "),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pip install pulsar-client==2.10.0\n")),(0,o.kt)("p",{parentName:"li"},"And install protobuf tools to generate the proto files:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pip install 'protobuf==3.20.*'\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Copy the Python function file to the Pulsar image."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker exec -it [CONTAINER ID] /bin/bash\ndocker cp <path of Python function file>  CONTAINER ID:/pulsar\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Run the Python function using the following command."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"./bin/pulsar-admin functions localrun \\\n    --classname <Python Function file name>.<Python Function class name> \\\n    --py <path of Python Function file> \\\n    --inputs persistent://public/default/my-topic-1 \\\n    --output persistent://public/default/test-1 \\\n    --tenant public \\\n    --namespace default \\\n    --name PythonFunction\n")),(0,o.kt)("p",{parentName:"li"},"The following log indicates that the Python function starts successfully."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-text"}," ...\n 07:55:03.724 [main] INFO  org.apache.pulsar.functions.runtime.ProcessRuntime - Started process successfully\n ...\n")))),(0,o.kt)("h2",{id:"zip-file"},"ZIP file"),(0,o.kt)("p",null,"To package a Python function into a ",(0,o.kt)("strong",{parentName:"p"},"ZIP file"),", complete the following steps."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Prepare the ZIP file. "),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-text"},' Assuming the zip file is named as `func.zip`, unzip the `func.zip` folder:\n     "func/src"\n     "func/requirements.txt"\n     "func/deps"\n')),(0,o.kt)("p",{parentName:"li"},"Take the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/tree/master/tests/docker-images/latest-version-image/python-examples"},"exclamation.zip")," file as an example. The internal structure of the example is as follows."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-text"}," .\n \u251c\u2500\u2500 deps\n \u2502   \u2514\u2500\u2500 sh-1.12.14-py2.py3-none-any.whl\n \u2514\u2500\u2500 src\n     \u2514\u2500\u2500 exclamation.py\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Copy the ZIP file to the Pulsar image."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"}," docker exec -it [CONTAINER ID] /bin/bash\n docker cp <path of ZIP file>  CONTAINER ID:/pulsar\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Run the Python function using the following command."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"./bin/pulsar-admin functions localrun \\\n    --classname exclamation \\\n    --py <path of ZIP file> \\\n    --inputs persistent://public/default/in-topic \\\n    --output persistent://public/default/out-topic \\\n    --tenant public \\\n    --namespace default \\\n    --name PythonFunction\n")),(0,o.kt)("p",{parentName:"li"}," The following log indicates that the Python function starts successfully."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-text"}," ...\n 07:55:03.724 [main] INFO  org.apache.pulsar.functions.runtime.ProcessRuntime - Started process successfully\n ...\n")))),(0,o.kt)("h2",{id:"pip"},"PIP"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The PIP method is only supported in Kubernetes runtime. ")),(0,o.kt)("p",null,"To package a Python function with ",(0,o.kt)("strong",{parentName:"p"},"PIP"),", complete the following steps."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Configure the ",(0,o.kt)("inlineCode",{parentName:"p"},"functions_worker.yml")," file."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"}," #### Kubernetes Runtime ####\n installUserCodeDependencies: true\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Write your Python Function."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from pulsar import Function\nimport js2xml\n\n# The classic ExclamationFunction that appends an exclamation at the end\n# of the input\nclass ExclamationFunction(Function):\n    def __init__(self):\n        pass\n\n    def process(self, input, context):\n        # add your logic\n        return input + '!'\n")),(0,o.kt)("p",{parentName:"li"},"You can introduce additional dependencies. When Python functions detect that the file currently used is ",(0,o.kt)("inlineCode",{parentName:"p"},"whl")," and the ",(0,o.kt)("inlineCode",{parentName:"p"},"installUserCodeDependencies")," parameter is specified, the system uses the ",(0,o.kt)("inlineCode",{parentName:"p"},"pip install")," command to install the dependencies required in Python functions.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Generate the ",(0,o.kt)("inlineCode",{parentName:"p"},"whl")," file."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cd $PULSAR_HOME/pulsar-functions/scripts/python\nchmod +x generate.sh\n./generate.sh <path of your Python Function> <path of the whl output dir> <the version of whl>\n# e.g: ./generate.sh /path/to/python /path/to/python/output 1.0.0\n")),(0,o.kt)("p",{parentName:"li"},"The output is written in ",(0,o.kt)("inlineCode",{parentName:"p"},"/path/to/python/output"),":"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-text"}," -rw-r--r--  1 root  staff   1.8K  8 27 14:29 pulsarfunction-1.0.0-py2-none-any.whl\n -rw-r--r--  1 root  staff   1.4K  8 27 14:29 pulsarfunction-1.0.0.tar.gz\n -rw-r--r--  1 root  staff     0B  8 27 14:29 pulsarfunction.whl\n")))))}m.isMDXComponent=!0}}]);