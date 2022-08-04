"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1238],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>s});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(r),s=a,h=m["".concat(c,".").concat(s)]||m[s]||d[s]||o;return r?n.createElement(h,l(l({ref:t},p),{},{components:r})):n.createElement(h,l({ref:t},p))}));function s(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8622:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const o={},l="Math\u65b9\u6cd5",i={unversionedId:"\u6d3b\u5230\u8001\u5b66\u5230\u8001/Math\u65b9\u6cd5",id:"\u6d3b\u5230\u8001\u5b66\u5230\u8001/Math\u65b9\u6cd5",title:"Math\u65b9\u6cd5",description:"\u6807\u7b7e\uff08\u7a7a\u683c\u5206\u9694\uff09\uff1a \u672a\u5206\u7c7b",source:"@site/docs/02-\u6d3b\u5230\u8001\u5b66\u5230\u8001/Math\u65b9\u6cd5.md",sourceDirName:"02-\u6d3b\u5230\u8001\u5b66\u5230\u8001",slug:"/\u6d3b\u5230\u8001\u5b66\u5230\u8001/Math\u65b9\u6cd5",permalink:"/m/docs/\u6d3b\u5230\u8001\u5b66\u5230\u8001/Math\u65b9\u6cd5",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/02-\u6d3b\u5230\u8001\u5b66\u5230\u8001/Math\u65b9\u6cd5.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"DOM \u6587\u6863\u5bf9\u8c61\u6a21\u578b\uff08document object model\uff09",permalink:"/m/docs/\u6d3b\u5230\u8001\u5b66\u5230\u8001/DOM \u6587\u6863\u5bf9\u8c61\u6a21\u578b\uff08document object model\uff09"},next:{title:"React hooks",permalink:"/m/docs/\u6d3b\u5230\u8001\u5b66\u5230\u8001/React hooks"}},c={},u=[{value:"Math.floor()\uff1a\u5411\u4e0b\u53d6\u6574",id:"mathfloor\u5411\u4e0b\u53d6\u6574",level:2},{value:"Math.ceil()\uff1a\u5411\u4e0a\u53d6\u6574",id:"mathceil\u5411\u4e0a\u53d6\u6574",level:2},{value:"Math.round()\uff1a\u56db\u820d\u4e94\u5165",id:"mathround\u56db\u820d\u4e94\u5165",level:2},{value:"Math.random() : 0-1\u4e4b\u95f4\u7684\u968f\u673a\u6570 0&lt;=X&lt;1",id:"mathrandom--0-1\u4e4b\u95f4\u7684\u968f\u673a\u6570-0x1",level:2}],p={toc:u};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"math\u65b9\u6cd5"},"Math\u65b9\u6cd5"),(0,a.kt)("p",null,"\u6807\u7b7e\uff08\u7a7a\u683c\u5206\u9694\uff09\uff1a \u672a\u5206\u7c7b"),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"mathfloor\u5411\u4e0b\u53d6\u6574"},"Math.floor()\uff1a\u5411\u4e0b\u53d6\u6574"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Math.floor(2.8)")," -- 2\n",(0,a.kt)("inlineCode",{parentName:"p"},"Math.floor(2.2)")," -- 2"),(0,a.kt)("h2",{id:"mathceil\u5411\u4e0a\u53d6\u6574"},"Math.ceil()\uff1a\u5411\u4e0a\u53d6\u6574"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Math.ceil(2.8)")," -- 3\n",(0,a.kt)("inlineCode",{parentName:"p"},"Math.ceil(2.2)")," -- 3"),(0,a.kt)("h2",{id:"mathround\u56db\u820d\u4e94\u5165"},"Math.round()\uff1a\u56db\u820d\u4e94\u5165"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Math.round(2.8)")," -- 3\n",(0,a.kt)("inlineCode",{parentName:"p"},"Math.round(2.2)")," -- 2"),(0,a.kt)("h2",{id:"mathrandom--0-1\u4e4b\u95f4\u7684\u968f\u673a\u6570-0x1"},"Math.random() : 0-1\u4e4b\u95f4\u7684\u968f\u673a\u6570 0<=X<1"),(0,a.kt)("p",null,"X-Y\u4e4b\u95f4\u7684\u968f\u673a\u6570\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-\u7eaf\u6587\u672c"},"Math.round(random()*(Y-X) + X)\n")))}d.isMDXComponent=!0}}]);