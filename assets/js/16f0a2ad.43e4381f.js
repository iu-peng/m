"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3911],{3905:(e,t,n)=>{n.d(t,{Zo:()=>E,kt:()=>p});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),o=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},E=function(e){var t=o(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},A=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,s=e.parentName,E=i(e,["components","mdxType","originalType","parentName"]),A=o(n),p=r,d=A["".concat(s,".").concat(p)]||A[p]||u[p]||c;return n?a.createElement(d,l(l({ref:t},E),{},{components:n})):a.createElement(d,l({ref:t},E))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,l=new Array(c);l[0]=A;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var o=2;o<c;o++)l[o]=n[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}A.displayName="MDXCreateElement"},8438:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>c,metadata:()=>i,toc:()=>o});var a=n(7462),r=(n(7294),n(3905));const c={},l="React",i={unversionedId:"\u603b\u7ed3\u5f52\u7eb3/React/index",id:"\u603b\u7ed3\u5f52\u7eb3/React/index",title:"React",description:"useEffect\u4e2d\u5f02\u6b65\u7ed3\u675f\u66f4\u6539\u89c6\u56fe",source:"@site/docs/01-\u603b\u7ed3\u5f52\u7eb3/React/index.md",sourceDirName:"01-\u603b\u7ed3\u5f52\u7eb3/React",slug:"/\u603b\u7ed3\u5f52\u7eb3/React/",permalink:"/m/docs/\u603b\u7ed3\u5f52\u7eb3/React/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/01-\u603b\u7ed3\u5f52\u7eb3/React/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"RN\u6253\u5305\u53d1\u5305",permalink:"/m/docs/\u603b\u7ed3\u5f52\u7eb3/RN\u6253\u5305\u53d1\u5305"},next:{title:"React \u9ad8\u7ea7\u7279\u6027",permalink:"/m/docs/\u603b\u7ed3\u5f52\u7eb3/React \u9ad8\u7ea7\u7279\u6027"}},s={},o=[{value:"useEffect\u4e2d\u5f02\u6b65\u7ed3\u675f\u66f4\u6539\u89c6\u56fe",id:"useeffect\u4e2d\u5f02\u6b65\u7ed3\u675f\u66f4\u6539\u89c6\u56fe",level:3},{value:"\u89e3\u51b3\u529e\u6cd5\uff1a",id:"\u89e3\u51b3\u529e\u6cd5",level:4},{value:"\u5f02\u6b65\u4e2dstate\u4e3a\u5bf9\u8c61\u76f4\u63a5\u66f4\u6539\u952e\u503c",id:"\u5f02\u6b65\u4e2dstate\u4e3a\u5bf9\u8c61\u76f4\u63a5\u66f4\u6539\u952e\u503c",level:3},{value:"\u89e3\u51b3\u529e\u6cd5\uff1a",id:"\u89e3\u51b3\u529e\u6cd5-1",level:4},{value:"setState\u540c\u6b65\u5f02\u6b65",id:"setstate\u540c\u6b65\u5f02\u6b65",level:3},{value:"setState \u5408\u5e76",id:"setstate-\u5408\u5e76",level:3},{value:"\u591a\u6b21set\u53ea\u4f1a\u8d70\u6700\u540e\u4e00\u6b21",id:"\u591a\u6b21set\u53ea\u4f1a\u8d70\u6700\u540e\u4e00\u6b21",level:3},{value:"Event: target currentTarget",id:"event-target-currenttarget",level:3},{value:"React useCallback\u7684\u5751",id:"react-usecallback\u7684\u5751",level:3},{value:"React Hooks return\u987a\u5e8f",id:"react-hooks-return\u987a\u5e8f",level:3},{value:"React Memo\u4f18\u5316\u7ec4\u4ef6\u6e32\u67d3",id:"react-memo\u4f18\u5316\u7ec4\u4ef6\u6e32\u67d3",level:3},{value:"RN \u4e0a\u62c9\u52a0\u8f7dhook",id:"rn-\u4e0a\u62c9\u52a0\u8f7dhook",level:3},{value:"\u76d1\u542cuseRef\u503c\u7684\u53d8\u5316",id:"\u76d1\u542cuseref\u503c\u7684\u53d8\u5316",level:2},{value:"React \u9ad8\u7ea7\u7279\u6027",id:"react-\u9ad8\u7ea7\u7279\u6027",level:2}],E={toc:o};function u(e){let{components:t,...c}=e;return(0,r.kt)("wrapper",(0,a.Z)({},E,c,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"react"},"React"),(0,r.kt)("h1",{id:"\u5e38\u89c1\u95ee\u9898-\u53ca-\u89e3\u51b3\u65b9\u6848"},"\u5e38\u89c1\u95ee\u9898 \u53ca \u89e3\u51b3\u65b9\u6848"),(0,r.kt)("h3",{id:"useeffect\u4e2d\u5f02\u6b65\u7ed3\u675f\u66f4\u6539\u89c6\u56fe"},"useEffect\u4e2d\u5f02\u6b65\u7ed3\u675f\u66f4\u6539\u89c6\u56fe"),(0,r.kt)("p",null,"\u5728\u5b9e\u9645\u5f00\u53d1\u4e2d\uff0c\u5f80\u5f80\u4f1a\u78b0\u5230\u8bf7\u6c42\u6570\u636e\u5217\u8868\u4e4b\u540e\uff0c\u6309\u987a\u5e8f\u904d\u5386\u5217\u8868\u6570\u636e\uff0c\u7136\u540e\u6839\u636e\u6570\u636eid\u8bf7\u6c42\u76f8\u5e94\u7684\u5b50\u6570\u636e\uff0c\u7406\u60f3\u60c5\u51b5\u662f1\u8bf7\u6c42\u5b8c\u4e4b\u540e\uff0c\u5f00\u59cb\u8bf7\u6c422\uff0c\u7136\u540e\u662f3\uff0c\u4ee5\u6b64\u7c7b\u63a8\u3002\u4f46\u662f\u4ee3\u7801\u5199\u51fa\u6765\u5c31\u4e0d\u662f\u8fd9\u4e2a\u7ed3\u679c\u4e86"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-react",metastring:"tsx",tsx:!0},"async function delay(i){\n  return new Promise((rel, rej) => {\n    setTimeout(()=> {\n      rel(i)\n    },1000)\n  })\n}\n\nuseEffect(() => {\n    (async () => {\n      [1,2,3,4].forEach(async (i) => {\n        const a = await delay(i)\n        console.log('log--',a)\n      })\n    })()\n  },[])\n")),(0,r.kt)("p",null,"\u8fd9\u6837\u5199\u7684\u7ed3\u679c\u662f\uff0c1s\u8fc7\u540e\uff0c\u540c\u65f6\u6253\u5370\u4e861\uff0c2\uff0c3\uff0c4\u3002foreach\u4f1a\u628a\u6240\u6709\u7684\u56de\u8c03\u51fd\u6570\u90fd\u6267\u884c\u4e86\u4e00\u904d\uff0c\u5e76\u6ca1\u6709\u6309\u987a\u5e8fawait\u7b49\u5f85"),(0,r.kt)("h4",{id:"\u89e3\u51b3\u529e\u6cd5"},"\u89e3\u51b3\u529e\u6cd5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-react",metastring:"tsx",tsx:!0},"useEffect(() => {\n    (async () => {\n      for (const i of [1,2,3,4]) {\n        const a = await delay(i)\n        console.log('log--',a)\n      }\n    })()\n  },[])\n")),(0,r.kt)("p",null,"\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"for of")," \u6216\u8005",(0,r.kt)("inlineCode",{parentName:"p"},"for in")," \u90fd\u53ef\u4ee5\u8fbe\u5230\u8fd9\u6837\u7684\u6548\u679c\uff1a\u6309\u987a\u5e8f\u6bcf\u9694\u4e00\u79d2\u6309\u6b21\u6253\u5370"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/render-async-2n54k?file=/src/index.js"},"https://codesandbox.io/s/render-async-2n54k?file=/src/index.js")),(0,r.kt)("h3",{id:"\u5f02\u6b65\u4e2dstate\u4e3a\u5bf9\u8c61\u76f4\u63a5\u66f4\u6539\u952e\u503c"},"\u5f02\u6b65\u4e2dstate\u4e3a\u5bf9\u8c61\u76f4\u63a5\u66f4\u6539\u952e\u503c"),(0,r.kt)("p",null,"\u5982\u4e0b\u4ee3\u7801\u76f4\u63a5\u66f4\u6539\u5bf9\u8c61\u952e\u503c\u5e76\u4e0d\u4f1a\u89e6\u53d1\u91cd\u65b0\u6e32\u67d3"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-react",metastring:"tsx",tsx:!0},"const [schema, setSchema] = useState({ a: 1 });\n\nuseEffect(() => {\n    (async () => {\n      for (const i of [1,2,3,4]) {\n        const a = await delay(i)\n        console.log('log--',a)\n        schema.a = a\n      }\n    })()\n  },[])\n  \n  return <h2>{schema.a}</h2>\n\n")),(0,r.kt)("h4",{id:"\u89e3\u51b3\u529e\u6cd5-1"},"\u89e3\u51b3\u529e\u6cd5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-react",metastring:"tsx",tsx:!0},"const [schema, setSchema] = useState({ a: 1 });\nconst [, update] = useState(false);\n\nuseEffect(() => {\n    (async () => {\n      for (const i of [1,2,3,4]) {\n        const a = await delay(i)\n        console.log('log--',a)\n        schema.a = a\n        update(pre => !pre)\n        // if (i === 4) update(pre => !pre)\n      }\n    })()\n  },[])\n  \n  return <h2>{schema.a}</h2>\n")),(0,r.kt)("p",null,"\u66f4\u6539\u5b8c\u952e\u503c\u5bf9\u540e\uff0c\u518d\u6b21update\u8c03\u7528\u5237\u65b0\uff0c\u5c31\u4f1a\u770b\u5230\u9875\u9762\u5237\u65b0\u4e86\uff0cschema.a\u4f9d\u6b21\u663e\u793a1\uff0c2\uff0c3\uff0c4\u3002"),(0,r.kt)("p",null,"\u4e5f\u53ef\u4ee5\u5728\u6700\u540e\u4e00\u6b21\u8c03\u7528\u5237\u65b0"),(0,r.kt)("h3",{id:"setstate\u540c\u6b65\u5f02\u6b65"},"setState\u540c\u6b65\u5f02\u6b65"),(0,r.kt)("p",null,"\u770b\u5f53\u524d\u7ec4\u4ef6\u66f4\u65b0\u662f\u5426\u662f\u5904\u4e8eisBatchingUpdate\uff08\u66f4\u65b0\u65f6true\uff0c \u7ed3\u675f\u4e3afalse\uff09\uff0c \u5982\u679c\u5f53\u524d\u5904\u4e8e\u6279\u5904\u7406\u66f4\u65b0\u4e2d\uff0c\u90a3\u4e48\u5c31\u4e0d\u4f1a\u8d70\uff0c\u5982\u679c\u4e0d\u5904\u4e8e\u66f4\u65b0\u4e2d\uff0c\u90a3\u5c31\u4f1a\u66f4\u65b0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5f02\u6b65"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u76f4\u63a5\u4f7f\u7528setState"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"<button onClick={clickHandle}>\n\n// js\nconst clickHandle = () => {\n  this.setState({count: this.state.count++})\n  console.log(this.state.count) // \u6b64\u5904\u8fd8\u662f\u4e4b\u524d\u7684count\n}\n"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u540c\u6b65"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"setTimeout"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const clickHandle = () => {\n  setTimeout(()=> {\n    this.setState({count: this.state.count++})\n    console.log(this.state.count) // \u6b64\u5904\u662f\u6700\u65b0\u7684count\n  },0)\n}\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u81ea\u5b9a\u4e49DOM\u4e8b\u4ef6"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"componentDidMount(){\n  document.body.addListener('click', ()=>{\n    this.setState({count: this.state.count++})\n    console.log(this.state.count) // \u6b64\u5904\u4e5f\u662f\u6700\u65b0\u7684count\n  })\n}\n")))))),(0,r.kt)("h3",{id:"setstate-\u5408\u5e76"},"setState \u5408\u5e76"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u4f20\u5165\u5bf9\u8c61\u4f1a\u88ab\u5408\u5e76"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const clickHandle = () => {\n  // count: 0\n  this.setState({count: this.state.count+1})\n  this.setState({count: this.state.count+1})\n  this.setState({count: this.state.count+1})\n  // 1\n}\n")),(0,r.kt)("p",{parentName:"li"},"\u4ee5\u4e0asetState\u4f20\u5165\u7684\u662f\u5bf9\u8c61\u4f1a\u88ab\u5408\u5e76\uff0c\u6700\u7ec8\u8f93\u51fa1")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u4f20\u5165\u51fd\u6570\u4e0d\u4f1a\u88ab\u5408\u5e76"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const clickHandle = () => {\n  // count: 0\n  this.setState((preState, props) => ({count: preState.count+1}))\n  this.setState((preState, props) => ({count: preState.count+1}))\n  this.setState((preState, props) => ({count: preState.count+1}))\n  // 3\n}\n")),(0,r.kt)("p",{parentName:"li"},"\u5982\u679csetState\u4f20\u5165\u7684\u662f\u51fd\u6570\uff0c\u5219\u4e0d\u4f1a\u88ab\u5408\u5e76\uff0c\u6700\u7ec8\u8f93\u51fa3"))),(0,r.kt)("h3",{id:"\u591a\u6b21set\u53ea\u4f1a\u8d70\u6700\u540e\u4e00\u6b21"},"\u591a\u6b21set\u53ea\u4f1a\u8d70\u6700\u540e\u4e00\u6b21"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import React, {useState, useEffect} from \"react\";\n\nexport default function App() {\n  const [data, setData] = useState({a: 1})\n  const clickHandle = () => {\n    ['b','c'].forEach((key) => {\n      // setData(pre => ({...pre, [key]: 2})) // \u89e3\u51b3\u529e\u6cd5\n      setData({...data, [key]: 2})\n    })\n  }\n  return (\n    <div className=\"App\">\n      {JSON.stringify(data)}\n      <button onClick={clickHandle}>click</button>\n    </div>\n  );\n}\n")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(7705).Z,width:"547",height:"117"})),(0,r.kt)("p",null,"\u4e0a\u9762\u7684\u4f8b\u5b50\u70b9\u51fb\u540e\u7684data\u503c\u662f",(0,r.kt)("inlineCode",{parentName:"p"},'{"a":1,"c":2}'),"\uff0c\u5e76\u975e ",(0,r.kt)("inlineCode",{parentName:"p"},'{"a":1,"b":2,"c":2}'),",\u591a\u6b21set\u53ea\u4f1a\u8d70\u6700\u540e\u4e00\u6b21\uff0c\u89e3\u51b3\u529e\u6cd5\u662f\u4f7f\u7528\u56de\u8c03\u51fd\u6570\uff0c\u5c31\u662f\u4ee5\u4e0a\u6ce8\u91ca\u7684\u90e8\u5206"),(0,r.kt)("h3",{id:"event-target-currenttarget"},"Event: target currentTarget"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"target"),"\u662f\u89e6\u53d1\u4e8b\u4ef6\u7684\u5bf9\u8c61\uff0c\u53ef\u80fd\u5b83\u6ca1\u6709\u7ed1\u5b9a\u4e8b\u4ef6"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"currentTarget"),"\u662f\u7ed1\u5b9a\u4e8b\u4ef6\u7684\u5bf9\u8c61"),(0,r.kt)("p",null,"\u5982\uff1areact17\u4e4b\u524d\uff0c\u4e8b\u4ef6\u90fd\u7ed1\u5b9a\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"document"),"\u4e0a\uff0c\u5982\u679c\u4e00\u4e2abutton\u89e6\u53d1\u4e86\u4e8b\u4ef6\uff0c\u90a3\u4e48target\u5c31\u662fbutton\uff0ccurrentTarget\u5374\u662fdocument"),(0,r.kt)("h3",{id:"react-usecallback\u7684\u5751"},"React useCallback\u7684\u5751"),(0,r.kt)("p",null,"useCallback\u8fd4\u56de\u7684\u51fd\u6570\u4f1a\u7f13\u5b58\u4e00\u4e2a\u51fd\u6570\uff0c\u5982\u679c\u7f13\u5b58\u7684\u51fd\u6570\u91cc\u6709\u8c03\u7528\u522b\u7684\u51fd\u6570fn\uff0c\u5373\u4f7ffn\u51fd\u6570\u6ca1\u6709\u4f7f\u7528useCallback\uff0c\u8be5\u51fd\u6570fn\u4e5f\u4f1a\u88ab\u7f13\u5b58\uff0cfn\u4f9d\u8d56\u7684\u6570\u636e\u4e5f\u4e0d\u662f\u6700\u65b0\u7684\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'function App() {\n  const [data, setData] = useState([]);\n\n  const delayChange = () => {\n    setData([1, 2, 3]);\n  };\n\n  const callbackHandle = useCallback(() => {\n    callbackAfter();\n  }, []);\n\n  const callbackAfter = () => {\n    console.log(data.length); // \u6b64\u5904\u4f1a\u6253\u53700\n  };\n\n  return (\n    <div className="App">\n      <button onClick={delayChange}>\u66f4\u6539state</button>\n      <br />\n      <button onClick={callbackHandle}>callback\u8bb0\u5f55\u7684state</button>\n      <h2>{data.length}</h2>\n    </div>\n  );\n}\n\n')),(0,r.kt)("p",null,"\u56e0\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"callbackHandle"),"\u4f7f\u7528\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},"useCallback"),"\uff0c\u5b83\u5185\u90e8\u7684\u51fd\u6570",(0,r.kt)("inlineCode",{parentName:"p"},"callbackAfter")," \u4e5f\u4f1a\u88ab\u7f13\u5b58\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"callbackAfter")," \u8bb0\u5f55\u7684data\u7684\u503c\u8fd8\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"[]")," ,\u6240\u4ee5\u4f1a\u6253\u53700"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(7677).Z,width:"320",height:"198"})),(0,r.kt)("p",null,"\u89e3\u51b3\u529e\u6cd5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"  const callbackHandle = useCallback(() => {\n    callbackAfter();\n  }, [data]);\n")),(0,r.kt)("p",null,"\u5373\u4f7f\u770b\u4f3c callbackHandle \u548cdata\u65e0\u5173\uff0c \u4f46\u662f\u5185\u90e8\u7684\u51fd\u6570\u548cdata\u6709\u5173\uff0c\u6240\u4ee5\u52a0data\u4f9d\u8d56"),(0,r.kt)("h3",{id:"react-hooks-return\u987a\u5e8f"},"React Hooks return\u987a\u5e8f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-react",metastring:"jsx",jsx:!0},"const Demo = (props) => {\n  if(!props.data) return null\n  useEffect()\n  const [] = useState()\n}\n")),(0,r.kt)("p",null,"\u5982\u679c\u5728hooks\u4e4b\u524d\u5c31 return\u7ed3\u679c\uff0c\u90a3\u4e48\u6709\u6570\u636e\u548c\u6ca1\u6570\u636e\u7684\u65f6\u5019\uff0c\u4e24\u6b21\u6e32\u67d3hooks\u5c31\u4f1a\u6709\u4e0d\u540c\u7684\u6267\u884c\u987a\u5e8f\uff0c\u6ca1\u6709data\u65f6\u4e0d\u8d70\u4e0b\u9762\u7684hook\uff0c\u6709data\u65f6\u4f1a\u8d70hook\uff0c\u8fd9\u6837\u4e24\u6b21\u6e32\u67d3\u5c31\u4f1a\u6709\u4e0d\u4e00\u6837\u7684\u987a\u5e8f\uff0c\u8fd9\u662f\u4e0d\u5141\u8bb8\u7684\uff0c\u8fdf\u65e9\u4f1a\u51fa\u9519"),(0,r.kt)("h3",{id:"react-memo\u4f18\u5316\u7ec4\u4ef6\u6e32\u67d3"},"React Memo\u4f18\u5316\u7ec4\u4ef6\u6e32\u67d3"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-react",metastring:"tsx",tsx:!0},'import { ComponentType, memo, SFC } from "react"\n\nconst memoComponent = <T>(\n  component: ComponentType<T>,\n  excludeParams: Array<keyof T> = undefined,\n  func: typeof contrastProps = contrastProps,\n) => {\n  return memo(component, (pre, next) => func(pre, next, excludeParams))\n}\n\nfunction contrastProps<T>(pre: T, next: T, excludeParams: Array<keyof T> = []) {\n  const keys = Object.keys(next)\n  excludeParams.forEach(item => {\n    const onchangeIdx = keys.findIndex(it => it === item)\n    if (onchangeIdx >= 0) keys.splice(onchangeIdx, 1)\n  })\n  return keys.every(it => pre[it] === next[it])\n}\n// \u4f7f\u7528\nexport const MemberItem = memoComponent(_MemberItem, ["onPress"])\n\n')),(0,r.kt)("h3",{id:"rn-\u4e0a\u62c9\u52a0\u8f7dhook"},"RN \u4e0a\u62c9\u52a0\u8f7dhook"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.wolai.com/wosMxztZa6ynbYVg3BhEHu",title:"RN \u4e0a\u62c9\u52a0\u8f7d \u4e0b\u62c9\u5237\u65b0hook"},"RN \u4e0a\u62c9\u52a0\u8f7d \u4e0b\u62c9\u5237\u65b0hook")),(0,r.kt)("h1",{id:"\u77e5\u8bc6\u70b9"},"\u77e5\u8bc6\u70b9"),(0,r.kt)("h2",{id:"\u76d1\u542cuseref\u503c\u7684\u53d8\u5316"},"\u76d1\u542cuseRef\u503c\u7684\u53d8\u5316"),(0,r.kt)("p",null,"useRef\u8fd4\u56de\u7684\u503c\u5e26current\u7684\u5bf9\u8c61\uff0c\u6240\u4ee5useEffect\u65e0\u6cd5\u76d1\u542c\u5230\u4ed6\u7684\u53d8\u5316"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'function App() { \n  const ref = useRef({a: 1})\n  useEffect(() => {\n    console.log(\'\u66f4\u6539\u4e86\u5417\', ref.current)\n  },[ref.current])\n  \n  const click = () => {\n    ref.current.a = Math.random()\n    // ref.current = {a: Math.random()};\n  };\n  \n  const show = () => setV((pre) => ++pre)\n  \n  console.log("render", ref.current);\n\n  return (\n    <div className="App">\n      {JSON.stringify(ref.current)}\n      <button onClick={click}>\u66f4\u6539ref</button>\n      <button onClick={show}>\u663e\u793a</button>\n    </div>\n  );\n }\n')),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u4f9d\u8d56\u9879\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"ref")," \u6216\u8005",(0,r.kt)("inlineCode",{parentName:"p"},"ref.current")," \u6216\u8005 ",(0,r.kt)("inlineCode",{parentName:"p"},"ref.current.a"),"\uff0c \u53ea\u70b9\u51fb\u66f4\u6539ref\u6309\u94ae\uff0c\u5e76\u4e0d\u4f1a\u89e6\u53d1\u66f4\u65b0\uff0c\u56e0\u4e3a\u5e76\u6ca1\u6709\u8ba9\u51fd\u6570\u7ec4\u4ef6App\u91cd\u65b0\u8d70\u4e00\u904d")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u70b9\u51fb\u663e\u793a\u6309\u94ae\uff0c\u4f1a\u8ba9\u7ec4\u4ef6\u91cd\u65b0\u8d70\u4e00\u904d\uff0c\u5982\u679c\u4e4b\u524d\u66f4\u6539\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},"ref.current.a"),"\u7684\u503c\uff0c\u800cuseEffect\u7684\u4f9d\u8d56\u9879\u6070\u597d\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"[ref.current.a]")," \u800c\u4e0d\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"[ref]")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"p"},"[ref.current]")," \u7684\u8bdd\uff0c\u91cd\u65b0render\u4f1a\u8ba9\u8be5useEffect\u6267\u884c")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5982\u679cuseEffect \u7684\u4f9d\u8d56\u9879\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"[ref.current]")," \uff0c\u60f3\u8ba9\u8be5useEffect \u6267\u884c\uff0c\u53ea\u6709\u66f4\u6539\u8be5current\u7684\u5f15\u7528\u624d\u4f1a\u8ba9\u8be5useEffect\u6267\u884c\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5982\u679c\u4f9d\u8d56\u9879\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"[ref]")," \uff0c\u5373\u4f7f\u7ed9ref\u91cd\u65b0\u8d4b\u503c\uff0c\u8ba9\u8be5\u51fd\u6570\u7ec4\u4ef6\u4ece\u65b0render\uff0c\u4e5f\u4e0d\u4f1a\u8ba9useEffect\u6267\u884c\uff0c\u4e5f\u6ca1\u8fd9\u4e2a\u5fc5\u8981\u3002"))),(0,r.kt)("p",null,"\u603b\u7ed3\uff1a"," "),(0,r.kt)("p",null,"\u5982\u679c\u4f9d\u8d56\u9879\u662fuseRef\u7684\u8fd4\u56de\u503c ",(0,r.kt)("inlineCode",{parentName:"p"},"ref.current.a")," \u6216\u8005 ",(0,r.kt)("inlineCode",{parentName:"p"},"ref.current")," \uff0c\u66f4\u6539\u4e86\u4f9d\u8d56\u9879\uff0c\u672c\u5e94\u8be5\u89e6\u53d1useEffect\u7684\u66f4\u65b0\uff0c\u4f46\u662f\u56e0\u4e3a\u6ca1\u6709\u91cd\u65b0render\u51fd\u6570\u7ec4\u4ef6\uff0c\u6240\u4ee5\u5e76\u4e0d\u4f1a\u89e6\u53d1useEffect\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u60f3\u89e6\u53d1\u4f9d\u8d56ref\u7684useEffect\uff0c\u53ea\u6709\u8ba9\u8be5\u51fd\u6570\u7ec4\u4ef6\u91cd\u65b0render\u624d\u4f1a\u53d6\u5230ref\u7684\u6700\u65b0\u503c\uff0c\u4ece\u800c\u89e6\u53d1useEffect\u3002")),(0,r.kt)("p",null,"codesandbox\u5730\u5740"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/ref-test-t3kzc"},"https://codesandbox.io/s/ref-test-t3kzc")),(0,r.kt)("h2",{id:"react-\u9ad8\u7ea7\u7279\u6027"},"React \u9ad8\u7ea7\u7279\u6027"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.wolai.com/7X1un6fRM95BqieH7UEemL",title:"React \u9ad8\u7ea7\u7279\u6027"},"React \u9ad8\u7ea7\u7279\u6027")))}u.isMDXComponent=!0},7677:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/111_PdHBCAQtsF-3bd65803c6678540bc6186eb1e4ceac1.gif"},7705:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,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8+bNg9X6fQTKoEGDnDjhZJEiRezRRx+1WbNm2XPPPWfly5c3JttIqVGjRsFykc4n6xh9QmCmQ0LUjRgxwg4fPpwO3VEfREAEwghUqlTJChfOfu9ftWpV57IJy1qgduMVIgw6O50kYvBChCZWrlxpqVCD3iKCICH5fbeT5D8dO3Z0ihABgjUkNGEZWbBggZGnZ8+eoadSus1k2rJlS5s4caJrlwn29ttvdwIgrzuCwGjTpo3deuutrurQfR4s5P9hIye5a8B8+c477+R1NwpkfQjbadOmpdTkWyBBalAikMcEeAYIN8VbtmwxxEehQoWCLXz33XfuBqJEiRIpsVxv27Yt2HZuREKwUJI3gmKEf4yXrJQfQsSPxQuQVAoSXDPcyf/lL3+xHTt2+K5ke8c6gnvhV7/6laGaV6xYke18Xu506NDBOnfu7PyAr7/+ur399tv20EMP2c9//nM75ZRTnBgZO3as9ejRw1lRECdYKhAniAQCrXCb8GF++umnnTuF/uFa6datm7N2LVy40Fl+cLnglrr//vute/fuQbfLpZdeakuWLHFPNKRs6H7p0qXtH//4h91xxx2GX/WBBx6wsmXLun6NHDmS7MGEtefxxx93Lgn4kho2bGi4uipUqOAm5VGjRjmx+7e//e0nVrFhw4bZxx9/HKyPDeqkvy1atLDvv//eiaB3333X5alSpYrdc889zqKzatUq50/15SkHp9atW/+ETWgDCC8sTvDGeoE7bsyYMY4NYhT3HYFt9erVc5+DRx55xPihwlz617/+1SZNmuRcVtQJJ65haOL6cj2VREAE0ocAv0vnnnuuffPNN/b55587IULcBmnZsmXORcM80bRpU1u9erV99tlneXpDgdWY3yifsNBv2rTJiaM9e/a43xt/Li/fvWuG367cpKS7afJTiHgQCJLly5dbtWrVDKGQ7MSkRjxINCHi20eQYCFJdqpRo4bhEnnhhResT58+ToAgKl5++WUnELp27WqTJ092IgCLFftLly614sWL28UXX2yzZ892xwi4YvIlMcEOHjzYTZS4m1D/v/3tb905LD+vvPJKUIhwEHeQn+DD97lbqFy5sjNZ0tbQoUPd5E4/5s6d6+rkD5+lJ554wvWfsfiEKBowYID17t3b2rVr5wQN5/r16+fEHoJvxowZTqAQOBaeHnzwQdd+r169nNhCIJx1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obEEeQXLCxKC9JiUc/rxzYs2uRNNtUUktN/c1bI6AgWKS4Ex+xU1LBNNdxM7D8hhZUkyE58F4kvCl7Mms810qptVPNFWB/FZIWg2kqUmncagvoiACORMgOcREYPmV9vhqiWmJNGJP+dWo58l7o/f9/BEfxK9KfSPOwivO9Z+ocCdaUQ3DWIkmlCJVanOp4ZAuNJOTatqRQREQAQyh0Bu3RTRyBBLxo0XLlxiSeINVj3e9qO5S6gvN48DON72o3GIdjxlbppoHdBxERABERABESjoBLBw+hU2qRhraDxGKtpLtI2kLu1NtHMqLwIiIAIiIAIiUPAJSIwU/GusEYqACIiACCSJQDKDUOOpO548xzv0eOqOJ0887UuMxEMpTfPk1YcgTYenbomACIhAvhKI5zeW2I948uV2INQZT1xJQWlfAay5/YSkUX5WC/EP3dLhUftphEVdEQEREIGECXgxEGtJfsINqQJHQAGsJ/AHgS+Jvign8AVU10VABERABBwBuWn0QRABERABERABEchXAhIj+YpfjYuACIiACIiACEiM6DMgAiIgAiIgAiKQrwRyjBnhH/koiYAIiIAIiIAIiEAyCcgykky6qlsEREAEREAERCAmAYmRmIiUQQREQAREQAREIJkEJEaSSVd1i4AIiIAIiIAIxCQgMRITkTKIgAiIgAiIgAgkk4DESDLpqm4REAEREAEREIGYBCRGYiJSBhEQAREQAREQgWQSkBhJJl3VLQIiIAIiIAIiEJOAxEhMRMogAiIgAiIgAiKQTAISI8mkq7pFQAREQAREQARiEsjxCawxSytDnhLYsmWLvf3227Z27do8rTevKqtVq5bdeOONdsYZZ+RVlapHBERABERABCxPxMimTZvcJLphwwYbPHiwlShRQmhjEPj73/9uGzdutGuuucYuuOACK1SokGNYr14969q1a4zS+XP6888/d3389a9/nT8dUKsiIAIiIAIFkkDCbpqjR4+6yfT999+3s88+2046KeEqCxTo/fv327p162zfvn3ZxlW5cmU7dOiQNW3a1L788kt3DosIwiRdE31LV6tNujJTv0RABERABGITSFg5rF692nAvPPPMM3bHHXdYsWLFbMSIEVayZEnX+kMPPeRESuyu/C8H1gLqIp1//vl2//33/+9khC0m/DvvvNNZF9iOlA4cOODOjxs3zrZu3eq2J06cGClrxGMLFixwZVauXGkILywZmzdvjpiXg9u3b7fbb7/dWYlwb8CDPu7YscOVueqqq2zIkCHWsGFDmzlzZtR6dEIEREAEREAECjqBhN00TPIkLz7YLly4sJUuXZpNt51btw3WFUSNL1+8eHG3Hf4HqwwxFg8//LAtW7Ys/HS2/SJFirh96vXb0erNVvD/d3yZokWLujFx2PcxUn6EyKxZs2zq1KmGGEFw4N6A1+uvvx4sUr58eYsmoIKZtCECIiACIiACBZhAwpaRSGwQH6eccoo7xbYXJpHyRjpWqlQp80IhdDs873fffWedOnWyDh062NNPPx1+Otv+ySef7PYREAgKUk5iwmUI+ePz8u7H5t9DsrnNL774wt577z179dVX7corr7S6detajx49rE+fPjZ+/Hj78ccfw4skvL9+/XpnTdq1a5eLRcGytG3bthzrRSz169cvxzw6KQIiIAIiIALJJpCwGMnKyvpJHxES3PGTmLzLlCmTLc/kyZOdywJrSqVKldw2wsInBIi3ppDHb3OeyfY///mPy1quXDlbtWqVPfHEE1ahQgVfPOo79YSKCS8wKHDkyBEbNmyYNWrUyFl5fvOb39iUKVOCdfm8CJDQbV/2m2++Ceb125dddlnwGBvNmjVz+95V409GYujPxftOne+8844dPHjQjeXbb781LEc5JWJZEE1KIiACIiACIpCfBBIWIwRfMslXrFgxOI62bdsaq0VIN998sz355JPBc3PmzLHrrrvOTZgvv/yy9ezZ0/71r3/Z73//+2Cevn37OoHCAcpSh0+tW7e2qlWr2p49e5xoYPVJvOmjjz5yggArybx58+ycc84JFsWt8uCDD9ovfvELGzt2rBM91157rb3yyisuD21SBgFUv359mz9/vnlryyOPPOLiYjhPatGihcvrBZk7GPhDrAmsCF71ibo+/vhjy60g2blzp7OA+HpC36tVq+bcV6effnrw8LFjx4z4HsRKtMS53bt3Rzut4yIgAiIgAiKQHAIBEZEV6VWnTp3A/Jhzuu+++zCLZI0ZMybnjCFnb7nllqyOHTtmBSwRwaPPPfecq2fv3r3BY9E2aPOSSy7JCkyc2bIExI+rI7BqJdvxeHY++eQTVzYgQoLZA5O3aycQYBo8Fm0jIKayAqIoK2CliZYlK+CycW0w1tD01VdfZQUESlb16tWzAi6TrICFI8dXYBl1VsD14+qCPf1buHBhVsDl4o7Rh0CwrdteunSpqyvgGsoKuMqCZWBIOyNHjswKCCO3HVi26z4H7du3z/r++++j9oE+KomACIiACIhAXhJIyDLi77xZnRJvInhzwoQJzrJB0OmiRYuCMSVff/11zGoCE6hhXfFxHzELxJEBKwfp8ssvD+ZmtQx9feGFFwyrQk6pc+fOzl0UyUpz+PBhGzRokHXv3t3uvvtuu+eee7JVRfwIy35r166d7Xi0HeoKiAybNm2as4xUqVLFBgwYEDF74INiuGICAtBZmogreeutt9zKp88++yxYhuMBEWKtWrVyViEfrBvMoA0REAEREAERSCKBhFbT9O/f302iXbp0cctvfdBpTv0lNoRVJX5ZLW4Ln2LFOPh8ef3OZEw/atasma1qXDO8jjex5Pm2226zGTNmWMAi4oJYw5/DgjsrYClyAu2BBx6I2RSuHp6CyvNJSM8++6z98MMP7pklkQovXrzYHe7du7eL3UFwEbjKWJcsWWI8sI6l1MTuvPjii8GVQpHq0jEREAEREAERSAaBhCwjdMhbA8KDMiN1FrGBFYG7el48iwPLQOhdeqRyyT5G8CvWCYJjQxNigr7FsoyElvHbCJzGjRu7eBBiQgiIDRci5OW5JeSLJ/GQNMTDeeedF8yOdapBgwbB/fCNNWvWuBiV0047LXiqSZMmLvbFH2C1E09XXb58uT+kdxEQAREQARFIGYGExUhuehqIRbC5c+caAZ9t2rSxU0891RX/4IMP4q4Gt0cgtiSu/OFPPY1WyE/mn376abYsv/vd75z7ApdNrBQqxhBduGUIssUV1bx58xyLx1M/FeCaQjgE4kyC9bGMmOW5cImUsHggYEJdaTxsbfr06S47gccE3l566aV27733RrWwRKpbx0RABERABEQgLwikVIxwF48lhcmPCZIVIaNHj7Y//OEPcY+lXbt27h+1MdHnlFiWy7LgWM8foQ5WzfDP3wKBncbkjlXj+eefd6t8WGETSyw89dRTbilzIBDWdYkHnCG6sAIR38FS5tBXIitW+L81b7zxhs2ePdstceaBb4izaHEePg5m+PDh7km5PCSOuJsaNWq4vlKOh9TxBF2EE+eUREAEREAERCCVBBIWIz5OJJY4YFAshR01apStWLHCCLzEMjJp0iTzk3g8A2fZKnEcTKA5Jf9AMpYPx0o8N4Q+8DwU/v8K8RS4VYiJ6dWrV6ziblkzMSf+KbQ+EJdHz7OMOfyFEPMJV1Bo3Iw/Hu2dYNWWLVvaDTfc4J6JQp8RTKEp1B0Er9dee809bI1lxAMHDjSECQ9iC00E0D722GNuKXWsp9mGltO2CIiACIiACCRKoBDLeiNVUrZsWfdcikjnQo8RT8FzM3hYGIGY/v/ThOaJtM0qDywluZmII9WT0zGCQ5lYmXzjTbhbcCcheLy4iLdsbvJhKeG5J/wfH+I1+B88BLCGC4todeKCwjXDdYonsbKGccE8lqUnp/qGDh2a7bkxOeXVOREQAREQARGIh0DClhHuwvkncoFnf7gHgcW7IgbrQzKFCDERWDW6desWD4dgHqw1/PfhZAoRGiNwleBdXDoElOY2wS5eIULdCBBcUYkIkdz2UflFQAREQAREIB4COfs64qkhkAcT/x//+Mc4c6cmG4+UZ+lqvM/vSE2v/tdKrP9E/L+c2hIBERABERCBgk0gT8RIOiKKtYIlHfusPomACIiACIhAJhJI2E2TidCSNeZatWq5+JFk1Z9ovcS20EclERABERABEchLAgXWMpKXkFJVF09WZent1KlTU9VkrtpBiNBHJREQAREQARHISwIJr6bJy86oLhEQAREQAREQgcwjIDdN5l1zjVgEREAEREAE0oqAxEhaXQ51RgREQAREQAQyj4DESOZdc41YBERABERABNKKgMRIWl0OdUYEREAEREAEMo+AxEjmXXONWAREQAREQATSioDESFpdDnVGBERABERABDKPgMRI5l1zjVgEREAEREAE0oqAxEhaXQ51RgREQAREQAQyj4DESOZdc41YBERABERABNKKgMRIWl0OdUYEREAEREAEMo+AxEjmXXONWAREQAREQATSioDESFpdDnVGBERABERABDKPgMRI5l1zjVgEREAEREAE0oqAxEhaXQ51RgREQAREQAQyj4DESOZdc41YBERABERABNKKgMRIWl0OdUYEREAEREAEMo+AxEjmXXONWAREQAREQATSioDESFpdDnVGBERABERABDKPgMRI5l1zjVgEREAEREAE0oqAxEhaXQ51RgREQAREQAQyj4DESOZdc41YBERABERABNKKgMRIWl0OdUYEREAEREAEMo+AxEjmXXONWAREQAREQATSisD/ATwUGkR4i2VuAAAAAElFTkSuQmCC"}}]);