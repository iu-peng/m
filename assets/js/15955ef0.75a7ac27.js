"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1730],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>c});var r=t(7294);function f(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function v(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?v(Object(t),!0).forEach((function(n){f(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):v(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,r,f=function(e,n){if(null==e)return{};var t,r,f={},v=Object.keys(e);for(r=0;r<v.length;r++)t=v[r],n.indexOf(t)>=0||(f[t]=e[t]);return f}(e,n);if(Object.getOwnPropertySymbols){var v=Object.getOwnPropertySymbols(e);for(r=0;r<v.length;r++)t=v[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(f[t]=e[t])}return f}var o=r.createContext({}),s=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=s(e.components);return r.createElement(o.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,f=e.mdxType,v=e.originalType,o=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),p=s(t),c=f,i=p["".concat(o,".").concat(c)]||p[c]||m[c]||v;return t?r.createElement(i,a(a({ref:n},l),{},{components:t})):r.createElement(i,a({ref:n},l))}));function c(e,n){var t=arguments,f=n&&n.mdxType;if("string"==typeof e||f){var v=t.length,a=new Array(v);a[0]=p;var d={};for(var o in n)hasOwnProperty.call(n,o)&&(d[o]=n[o]);d.originalType=e,d.mdxType="string"==typeof e?e:f,a[1]=d;for(var s=2;s<v;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},6452:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>m,frontMatter:()=>v,metadata:()=>d,toc:()=>s});var r=t(7462),f=(t(7294),t(3905));const v={},a="Npm",d={unversionedId:"NodeJs/Npm/index",id:"NodeJs/Npm/index",title:"Npm",description:"\u67e5\u770b\u5168\u5c40\u7684npm\u5305",source:"@site/docs/04-NodeJs/Npm/index.md",sourceDirName:"04-NodeJs/Npm",slug:"/NodeJs/Npm/",permalink:"/m/docs/NodeJs/Npm/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/04-NodeJs/Npm/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u521b\u5efa\u5730\u5740 \u3001\u83b7\u53d6\u5730\u5740\u5217\u8868\u3001\u8be6\u60c5\u3001\u66f4\u65b0\u8def\u7531\\_\u526f\u672c",permalink:"/m/docs/NodeJs/Koa 2 \u6a21\u62df\u4e0b\u5355/\u521b\u5efa\u5730\u5740 \u3001\u83b7\u53d6\u5730\u5740\u5217\u8868\u3001\u8be6\u60c5\u3001\u66f4\u65b0\u8def\u7531"},next:{title:"Npm link\u4f9d\u8d56\u6dfb\u52a0\u672c\u5730\u5305\u8c03\u8bd5",permalink:"/m/docs/NodeJs/Npm/Npm link\u4f9d\u8d56\u6dfb\u52a0\u672c\u5730\u5305\u8c03\u8bd5"}},o={},s=[{value:"\u67e5\u770b\u5168\u5c40\u7684npm\u5305",id:"\u67e5\u770b\u5168\u5c40\u7684npm\u5305",level:2},{value:"npm link \u8c03\u8bd5",id:"npm-link-\u8c03\u8bd5",level:2},{value:"npm view [\u5305\u540d]",id:"npm-view-\u5305\u540d",level:2},{value:"npm view [\u5305\u540d] version",id:"npm-view-\u5305\u540d-version",level:2},{value:"npm view [\u5305\u540d] version\u3001",id:"npm-view-\u5305\u540d-version-1",level:2},{value:"\u5217\u51fa\u6240\u6709\u8fdc\u7a0b\u53ef\u7528\u7248\u672c",id:"\u5217\u51fa\u6240\u6709\u8fdc\u7a0b\u53ef\u7528\u7248\u672c",level:2}],l={toc:s};function m(e){let{components:n,...v}=e;return(0,f.kt)("wrapper",(0,r.Z)({},l,v,{components:n,mdxType:"MDXLayout"}),(0,f.kt)("h1",{id:"npm"},"Npm"),(0,f.kt)("h2",{id:"\u67e5\u770b\u5168\u5c40\u7684npm\u5305"},"\u67e5\u770b\u5168\u5c40\u7684npm\u5305"),(0,f.kt)("pre",null,(0,f.kt)("code",{parentName:"pre",className:"language-bash"},"npm list -g --depth 0\n")),(0,f.kt)("h2",{id:"npm-link-\u8c03\u8bd5"},"npm link \u8c03\u8bd5"),(0,f.kt)("p",null,(0,f.kt)("a",{parentName:"p",href:"https://www.wolai.com/4Am2wUY5kPb16ffCshhF3r",title:"Npm link\u4f9d\u8d56\u6dfb\u52a0\u672c\u5730\u5305\u8c03\u8bd5"},"Npm link\u4f9d\u8d56\u6dfb\u52a0\u672c\u5730\u5305\u8c03\u8bd5")),(0,f.kt)("h1",{id:"name-\u5305\u540d"},"name \u5305\u540d"),(0,f.kt)("h2",{id:"npm-view-\u5305\u540d"},"npm view ","[","\u5305\u540d]"),(0,f.kt)("blockquote",null,(0,f.kt)("p",{parentName:"blockquote"},"\u67e5\u770bnpm\u4e0a\u662f\u5426\u6709\u5bf9\u5e94\u7684\u5305\uff0c\u5982\u679c\u6709\u8fd4\u56de\u5177\u4f53\u4fe1\u606f\uff0c\u6ca1\u6709\u5219\u4f1a404\u62a5\u9519")),(0,f.kt)("p",null,(0,f.kt)("img",{src:t(2152).Z,width:"566",height:"167"})),(0,f.kt)("h1",{id:"version-\u7248\u672c\u53f7"},"version \u7248\u672c\u53f7"),(0,f.kt)("p",null,"\u683c\u5f0f\u4e3a\uff1a",(0,f.kt)("strong",{parentName:"p"},"\u4e3b\u7248\u672c\u53f7.\u6b21\u7248\u672c\u53f7.\u4fee\u8ba2\u53f7")),(0,f.kt)("h2",{id:"npm-view-\u5305\u540d-version"},"npm view ","[","\u5305\u540d] version"),(0,f.kt)("blockquote",null,(0,f.kt)("p",{parentName:"blockquote"},"\u67e5\u770b\u5f53\u524d\u5305\u7684\u6700\u65b0\u7248\u672c")),(0,f.kt)("p",null,(0,f.kt)("img",{src:t(4085).Z,width:"355",height:"46"})),(0,f.kt)("h2",{id:"npm-view-\u5305\u540d-version-1"},"npm view ","[","\u5305\u540d] version\u3001"),(0,f.kt)("blockquote",null,(0,f.kt)("p",{parentName:"blockquote"},"\u67e5\u770b\u5f53\u524d\u5305\u7684\u6240\u6709\u7248\u672c\uff0c\u4f1a\u5217\u51fa\u6240\u6709\u6b63\u5f0f\u7248\u3001\u5185\u90e8\u7248\uff08alpha\uff09\u3001\u516c\u6d4b\u7248\uff08beta\uff09\u3001\u5019\u9009\u7248\u672c\uff08rc\uff09\u3002")),(0,f.kt)("p",null,(0,f.kt)("img",{src:t(7198).Z,width:"207",height:"267"})),(0,f.kt)("h1",{id:"nvm"},"nvm"),(0,f.kt)("h2",{id:"\u5217\u51fa\u6240\u6709\u8fdc\u7a0b\u53ef\u7528\u7248\u672c"},"\u5217\u51fa\u6240\u6709\u8fdc\u7a0b\u53ef\u7528\u7248\u672c"),(0,f.kt)("pre",null,(0,f.kt)("code",{parentName:"pre",className:"language-javascript"},"nvm ls-remote --lts\n")),(0,f.kt)("p",null,(0,f.kt)("a",{parentName:"p",href:"https://www.wolai.com/4Am2wUY5kPb16ffCshhF3r",title:"Npm link\u4f9d\u8d56\u6dfb\u52a0\u672c\u5730\u5305\u8c03\u8bd5"},"Npm link\u4f9d\u8d56\u6dfb\u52a0\u672c\u5730\u5305\u8c03\u8bd5")))}m.isMDXComponent=!0},2152:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/image_CHumlomjzP-f50201fab83004a5e9771eddfbecc340.png"},7198:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/image_rORfBgrtB8-eb4a8e9ced7d90f917bce4fa8990ae6b.png"},4085:(e,n,t)=>{t.d(n,{Z:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWMAAAAuCAYAAAD9c3jnAAAgAElEQVR4AdWdza7lyFKFS/dWn24YwBDGjJCu+iKERD8DI3gUnoJ3ZnTQ8vLnWBlOe9t771PdDKyIjP8IZ66T5TrV/e3PP318Hj1/+unjUw/6Zf3d65T/Gdn3j88/iV+p+Iwx+ERcx//58/uHnz//9PMnz/cP5fNa+pmt/T4Wf/TUbF96wJ/1j6H0Da3aruY/7p+ZaU7Mp2Q10+dlY1xqr3zkCLvlfbk38uo9wOO7rAd52sAT1+t9fusdM3MiJ86z9F1xns3/R/D7Jd7dO+rJmYq/8Px0ZqOaMubdGolNnIyV/Bj3pw+vRc17Tj99iDKzpL98SodfnQfH+fZf//0fn3rY5JcoINtAeAHeBOJVD1jPYqsgDuoIumPjWXja448MO+Wy7irgXbPTS3ed1+xnPV8H5f0PD/qlT9ZH/afd8zybdaULgHoO+/w1d+f7+Py+HSS909FvsZkB8iAb8//P//7nGsdyvw/2i/PX4TxaY//z5/chV8jXw/b83P6/xgJAjup/pJ/59fcgG7+/2h/rGvkhDd+3viPyz+q/I2M+Bt4Ca0B7HuvbGTBo03cwGewDeIfbcMgXgF5vwYPvdjNmsD9/+pBVoQAMlEOBHXLXaT9kSa8As2Lk0/t+Zu26xj9dXImTdThG9aa+qjdvcGJqPqWrOTK323QFKWLaP8HUPPl7rdQjvXk2u9c6jI5dax9Q1S4dD2vvkZwPNj7QRz2v8bcfCpnPsekt81t2FPM1uXr4yvjvjS1w4VHfgM3xDMb+mLfsxV98eF/QqR8xj2vRLI5uo66T+mZ1ncfNOR/lOMuf/t/YzDOqQmfyRbZ+joBfPkkkCIvXZ45Gx3gjeIwv8HgIsnNtdThpCuAYD7nzlM5Dz1p6r32dtiOv2IDGSHuM+Q+j0Uexys+xcw1YOOd+RpJrFqZsMvfPjO7TinOUX7OlziX+doBcI7Of1UZMqHsjZ82H+NAZANO/YxGj9T/UJhvsoPu53p/Z3RgAHFT+yd+Nd8U+48OL9oda0uY8vt7R8cz6zJk78iOqnGl7XMMcGKn/GJznNZPzOF/3m+cv/5l+B8YaYj4cDNGUb0C7AnDqxCc4py7j9Ziyy0Obftkscsng5QcgIBN1PIY59mC9D3vy1JW1jjELIHrO7nO0PgPmqsUvT2v1mj1m79qgzlPzcAxAiP6tz1ne4ZdZbjdzx8y5zOpE7zyqc/6eAE/1gY/jKU+9IwEwcmKhH3rZPj1gX7NRDOWRX+Za4m5AXTrFdc46TEOuj1HebXMtnmeMYaBAZx9AcZ/f+jHvGK902BI77ZBhY90vW43oO0Ajhx7FdNzaf2Xn+esd8B7gaz32MMuleM4R7/dDfvt5YofPPh41Vaz0wQ/adZL3Zwa63UZr2X1T4wCGgsNzKFgf6r570wK+svvT9582MPa6/qi+rNfDIF6F+FDVoZEMHfpci5dPUtnNHmzoh3j0Rf+yywc9fkdrx5/PMHXJLz/I4jbdgTnrwC97Q+9evNGZB/1IJzv6xR8Z63NKbNOyLXDUXCTv+Z1n9VvflWqTbdYgXr6jbgRLZi8b2duH2Cv9yPc/yvBxDvaZbMwvPQQ4267qlH+vu2aRec1jj01fj7HqtmY71gbEBBXijf77/GmH7VhDAVWBLP1Kx6PY3Ra787xjvnNbasy67e/32GPN1l2mui3zX5optgCvg+PeL/vb55d9+iSf9R/xPX/aDTdjBWbji+Y6+U23fqqQbgRjfZ4wIEvXH3KMMT0EDmb30VqF16GvoaUOffqPfgWc1LH1EwApf/TJd9srum6TcaXr+lz7Zalmb2j6oyeAQ2v7eUYAjf2RzQ8FNWCrNTxUNYtXfnjbUVvuF2qxj/wqJmDoWoYY7VYsXekVy+8OueuoHNRqWnLZe36OscRM8OWmHLfuuoFX7a5lPsMx92Offaz9bdQ2CYaP4/Y6tN7nUg/n+Wb6EZjP5zDPec2n+2rdn+yz7Pkh4pnpNxfwc+2Wz32rtopnWa6TP55txcpcj/inwFjAq6J0GBKEJfN6cjNeP2fkb1YQQ3H00GgCDg34MNVwWHfbimng8LrzdbAzNzy1sK6YVedVnXzxzxvwEV+5XbMBqPjZBvAseCeyNUCSd5jh9sf3miV6amWdlByS7XtXrDE/uWWbOn5zYZ6LPWAgxZd8UGJDszbXbH942VF3gax/y4MYqnHTrT948OvUcc8P3CMf9I5lELEsAaXAA/tO79TSbYlVQEVuAJz83DL3e6bHZF2xz+eEvSg+UHR9jRxqPbWb1q+X+WYsGz39V8tmsbss18lnzdTyiH7ZzVjAK3BVgb4JA8JQdAYx/ngOEMmPAybqtQ+7mzaoqEEfuNJp7Qe/PPTFEycHV76OV7ldZ1/P67TtVV23Uw7mID4f21Zt2T/Atn/pzMF+ox3gZJu979GBcV2ZX3UqtmZYPTln1g3vXOR1HdId1WBd1Vv5akbENi3biomsg0flZ95bjOFCUHaK6ZqKVp6jufW8eztictusPAWAY54CxPLdxx19ZnVUfMdhLVsDWdVS/pkz+Vm+7n9kM5NX7Kqr6ixZ1cpcqN0UME6qOLk+qrNqGPfBzL5sz9/FGQgrrvTDzVgbVMHzYdN23SI/+Ms7+fOZglt0xkwQSrn4o3ypS566ys+HxjYAhsCiAEM6HvxYQ5FDkYsigx7pum1f49/pzC43rvRea7MYGLVWHOl41LPlY//yyXjYpQyeuTlOASI1kwuKnFsmcserzY0ceqYnJrZQyav/mgOx6Ev21YdnhC+xoKrb8+EHSIGwbBz7/OBhc2Y/6gCS2rtbPR/kAnSqHvI8omMu4pmSB5qxUtZjoIOmH/yZDptOnQfQZS7unXhlY31fC6gFumkvXjKDcc3AvrWmnvRFJtrt+zpt7/L3/9HH+g85lltx3Cb8ecKfLVRgrhf+5CbIYXsvNThx6Di0zlHgxCGt3OVXsj0IPaPLH0LX/F2Lawd4DGgATb3wmdx1G1z2G24Ww7KKpTrJP9Z8PKexJvuX7MqGPs+v/VV1Et8+maf6xkYzME8vPkzoAfRZrP38xlyv6hOAiIWM9TspsY/oO3OdxTrKL/m9B7A14AK8pinD7r3vb98jt2Hoo3y7mzGb9CFdb8WArjY1D7Ijqtg/FqABDlENzYdOvPtE9h7QfTi7+MF0B6ATXJSDPuoljzL3Vz3Lzv0XzRiO6Zk4JuCE/dl87EfvzqXvsPtNKh17xWDYbQBD8juva+01pK/7n+d0zHz/1FGzrLzuP2P/KH4GTsjeXcNXxb1SJ0Ar26wDPim21yjAyw05Qd1ATE5yXKn3a22mnyk4TDMKcEBls/Dxl3M7AF6Bl3+hh0/GmOV6r6wDxexwYwPth77Wc1Ao/Xtr38dVfj9sENmYLzrKqAlfrbOPDTzjL+jSx7xnQwz89Ud7bMe4WRNAR81XKH3u42cNriNzjbEB4PShzvosoX8W/UyNY67nQRxggL4r7rvifPVs6Fv03gP4QvFnnQB89Zb6/Hucz/sob8l/2X8zzkN1xHOrlR5e4ArAJgWc0zbjpl/Kv4b3oHQ4/dQGUz4OKzpkX1PLCDBXclR99jUIVd3eQPRkuePyA0b9y5d12Eb/Bcyl9yxG/yv5n97UAzBWv+R0PaN87H9+KNwbwEt/7kuxn6734zjf/ZgA0ztjvhrrHbOhL6hqSp41MtF7TwJw+iIv2avzOPcvkKWnkUpvG/cq/vQzBaCqjQ9opix/TW2x0Q05bJfbcAdpvjm325T83/8U6Di21z7Q4vN5Nn/PcS3OMMene/eGUG8GGeWmJ/MJXsy3y8q3ah9tlKd0Ncvz/P5ccPcQd3vn3eenP8/fPbieDfzWT1JeMyP3go3mBZ92o6zb3Fn3fu74/h62R/VKfqT7yjrPwXgPsvWNmBsxFOAfgfKV2qlNMQyqI9gDtKoJm+JdV9V7G4w50IBJp9IPshWgU06MVyg5nouRgJUgU8A6P/xp+8fhZ7XOZHdmhf8CSsMtlc3LwfQhNajVTDZg24Ed/lfommO9tWf9qq9qVF7Fo6aKPQNbZIo383kfEP8R/4twOaPkmRmynA0ybOazfuvcPsjVQQ4A3FPATYAofqTE+yoKyBK/52etGzEAnPzkMwV/sQLYQZEn5XBgw7rTmU+36ev0EY9+lmsmw35PZ4DL7arABD8OPOsfTWf5ZzLqSl3y6JN2vdaAqOy42SbQLfIPNpzpoj8A3QK+0ef6wfU7ca3796Qa3ZPiU3/PNYL1rIfr9fTYF9cH87mXVwf6Yr6p3dF8+mcb/wMYz1M+PMp9EmOa85V6uy/9G9hGsC1Z3U4tG2/CxOixr6zT13wHfXIjp0avR/AtUDY4LzdjwAzQg3qT+zBgg0w2kiFPHhvRHquvZUOM9Ov8kR++R/l7nGtrDvgenI/8tUmPdD9CfpT/SH5Wkw68QNRPO3wPQGUE3zrEyO+DCTFMVTc9Fc2DJL1rl95P9oIs7dL/Pbz7Jdd7Yo6zS2C4Gz/q2v50sMqWteIdAbLnNtZyN/+r9uqdxwA3X7+a58if3H4HCbyAr+up2gBe9KzxFZ1+pgBotfEXkGvfgmfAeHS4u21fH/l1+bN+Pc7/lzVAk/XOZKl/Jw+IFbAdbcyvkteh9w8F8hg06NV1+uZbgD/6YsP8TBXPsb4eWKqe53MBAMzhHZT+z6lm/Xzd76jzUQzPpoDN9vWd9pH/FX3O3yAMsBp4Z59G8Kn6qsZRdgrGbHbRfvsEGFOe9umDbafd/tEa/8Wu/SUgv9GReantUdwfqQcM7uXUra7fumeybvPcmhoLsK5s1B9lY9AYb53u02ABqHg+AAjzozetsU8e++cpcTWP5N89H8Dg1bjM64BucyLPV/b0auz+zZaav4KSK98DMuWzHOBN0JYMOTx0+EzBphXwLTdibsai6+140TUwxG9GAdFO0/YMOKXDF7tOiYWc9e9DR6BMADiqR4d/1Gmtl1qHRHrW3ABHn+fAl7hjLPJ/xUZ+PSb9F+D5ILsXz5JZic57HH2eB+DsxzGrLt5h2lzh85B3e+l4pMMW2u1na+rsOslTl3y3fWX9VXH5LPBKbY98mT3zHqmBVjEs53t1lwPQlhugzz9TCHQFwivVpl6AMcD4EQACpBz2vkZ+RM/slftR/qO4XyUfD38H2WNgoB4fBh8KywAXveAC3OTxfQet/O8H5ALRRxv+il6zSDvPjB9sns/x/OmTmXmd8e7ymf+u75n9eNjHHxrS8ZzFONIlKB7xR77vkPeczDDl78jzSoz5/MdPINj0PCnnPRl4AWdRngGMATYB4MLnt+IVlNEtAJ1/fI7/rCYbXLSDaV/PbPDvttQnffKL/foDgt993umz1t+BNzgApoBEAq3BTwADyEA5gKUDiIj3GgWINEeDmTdVz08dz9F3HjBiFaVW9g5gy9yh6JPS//2+ZvnHd3o9Zh7cPNQcYsk6jwz7oxjof0/KrHoNkqODdpvfc91nzowFoqqL9Z0aiVlALEAewFjg1x+BWn6iYBPvwHgCvNhmTGSiS+wDv/SBfwpgG0hn/h/F60AaSL3x4J1fLxE5IJsv1jof6uLlK7939JD55/9dh6znJr/eXgHL6+B0M896oD0X+dZskp/Na+j/4yyvZo4evt6D3zNy7J6hswOOjIOsuMjI0dfI/0iU+XhuzL4otaYdst+fCoC51b4yfz5fKMbuZpxAB7+A5Xo73j5XrODMv67T5t6AGeBbb57EyQMwky0x4rZ6ZJNxuk/q8Iem7SJrdabvs7w20+jrG5Jl2kQFtACTQRm72miLfvgjeOl84Ll9Vc59/tKNdR3JKwf1FfCU7r6MQ1Ux3hu/4tYPEue81nfNw715fa1P8qgGfhUs6vm4y3cw7cDLekbv5rpqP6vpqu9Vu9wj4nN9NcZX2WX/Bk7tjQLT5/MCwt5r7WbM5hVgbY+Aa32WG/L6uWLRh1y+C9AJVGdg12SbbYAw+d9JybP9wDj5QfHOvIplgARsa52bzTllw0s924gCij0QP1O3awCI3vsvxaoXeqLmWl8Du6v2OTPA1PNWHubj9zHqN932j0eIhT9r1TKbf/ZmH8W839946MdbF+CrGuCTIr86r5ndUf5HedJvFveRrM8q18kfxXk1/1HcknfQzHdbt+SyT/0579qJP3ymYGNuYMo3Y2gALsC8+XRQbeDb7To4dv3L6zU/YLzFQ/6gvs1+7SsPctc9WpcvBxcQHA83L85gZp1krNFXvIzzLK9NpE0fG3/7wfDMBrMPPzQ0m+ph7L/6eT7PUPdHxcl3IpuztWv0DKjbPorHXJJia2ob+LWGp2eY4AKfdMZX3/dnSjxiaP3oSVv4u5R5yq/N7uNurK+yZzZJ+VasnOYTkJ//jrz+h4J2gBWgq42KfgFgrQVkAdDLRg9ZbvwrPPGv2D5jo/jLcxOAOZiV0xun1uMhvyY3uAKwpik72FjLDwXy+yZ7Ld+sxgL4zH//II+1EivjSDbWaR/b5oEcY2WMKzx5xoM9610y1yTbsbZaO47nvfAx/6WeBWwBkTFm+V7tKQ87Ph0QJT+SocP3Du0x76xfyXunxpmt6sz8rGe2z8oqZoGs52MANj/WQa7yfbx/bTu/Ga+3wQ3EYq3Ny614AdEGcIus2fcNnzZd9871lmetkTX0ai4N86rtmZ0OaeodVy+vDnPqDVi8XGqAjrFGv2u62iTvA0V6SrBN3v/tY/d8nP9KPavN7gZavQOKmo15f9dlVrwPKPKkxMAGSsyRRl8bWNf7q36vyjjsHGzW6Y8uZVf5jAd/lV7N8dV22X/y78rreQC+UH4w5jp561XD9ZoOwbgDltZdtmxawBj6AIhzo0/jrf5p9ww/xF6/cxMHHRQ5tADFhxj5V1Py1qE14ABmys9/DB3+2ZoKVN61aYmjGmc/MCwzuBU49h841TvxOvWvS452npNl8JVj/AFQ8qPZ7Wu0D/bMznFLt/m9DMQGgLHHPNTw0D6jO2tyzekeYLBTjnfkv1Nrt838yXe759ezGzEzEU1+D9DKS13Q41oWMBYozYBJv1KmDTjTLT4BwGmTPBv4CiXfI9tu19fkX2q8+MNBMfJxDR1U+rpuYbOae10zGw62QAl91kGM5aCvhxy7d1Ad+BkgKvaRbgSJ2lyqFUCin+qPWVU+cszjOX/pvO6zcT5qMDCWjLX0+3jOT11FAdmcr/twnPRzXPIkneWkzqu0H+C+vhrnzE4xxweA6fL5+ix2n/mZ7RXdWOcIdD9mNsp5fT7qiZrH/ma/jfEN4MqNBw8QsO62fb39xd+Tt9uej7ydciAlT77bTdfrt+6uG3P7/9FWNgWUJavDeyQbY87tfchHnfzykLNWnpn9Uf5H8sxh4HUdBYDjBrL9KHMOz8f9Sr+vs8ucox9W+x3lZw5QYlbt/FZIj0tNrrPi7+vMmRFfMvEzmvaL/uVb8Thf1/oVQJN5AIyRJugkXyCYMZKfzT/1d/nef18T70iO/i6tedC/KHwCM3Jo6h7Py3V9y7+IE7hqo+eTgJvyvglTJ/5Zv4ybMWdyybBBzxqqOpZaVhBGDk0/3xB96KRHJzn2o7xs0ZePaztbp868Xsrol2tAR7mQ93qoo8vJNZMrVgGUa6j1qltAhh9KtakzH7G5WaZuvH3Xe8Om8o2z3mpb34H6kE/am6cHaNW4ty0d79x55Ot3yrwW+eQv/LCXHTy+Vc+9Wo7rBGSgVf+xz12bAh6DR60TfJzvq+o4ilu1jPmR3+31qr3rGfsnZ4FyAvAehMueuc5uxerL34zXzw0cJoA01/Bs0lyL7z4zO8m6H3bP6IgFzVjc0hfdQX9pL7t8uo61DlzmS142uT7iiSXKAU6Z/PJJHfmJnf7IsO9rybsM/40uNXHDZNOOgON/XOFY9hNIG0SJ0/PkWrw23+azAr1k6HzoWFd+6W1TQDcCPTVfpwAycxPVDxT1Qj/oFll8Lko99rahvorjnpBfr49ZFDVI1HoWizydzmwl24NGydDj+0x+fK9QajmyvZL/yPeKnPx7ehd4C5yVl7qhYy3bZwqBqTY5m04018mnrvvN7CTLhxwz29SlT9rCd7r4rv+NjPQ9+kFBLlFiIct18t32iq7bZA7pul7rPOSAhQ4f+Ud93dCJjV2uj/isQXHJvwDS8skpN41yac3MuC2z7rVUzcqPn4Ekcn04B7UkHUHHPtI7nmsZbbLeK3wClutXnTUvciDzuvSrz/p5zr6Zl/jESd0z/PwwH88g89/Jl2AkP/JC78R6xfaojldinvnSX+WdgXDemNFD6weZY5TtPi835W/b7w6/AEjalBwegE+yDtSpwyc3NAdspjuyS1vyLXnis4TW6jPjZ7yMgTxtix+B5YqffMufw2xQEqgpBod3n1svbj3o26eEsQ/0j2ohNhQ/1UZ+akUHYMpHMtai5EPGmvjExc9rb0RsU+Y43IRzw5K78hN75k+cZyk/aFRj9kYfpvke/Y64Sadf+WQ/q/02z647WwMSZzZVN7U+O4sCX/JdyY/tFZrx4EWTzzjIU/YunrzXKcALTQAGfKGjjn9OPfazgPHwR/r4yzdt9jxc8KJd14EW27RDBu26XCePPbTrtAaAF16fJeKGvIBxq5lY0FnMd+p6fGLPaNmOG022OvTSc9ABdOnKz2DR1zMb8ieYLIC0uxELgPnHJqqLfOaJrYMPT2zW8lEM12W/BSi2zxT0NvYNmChO9l9x5vb4Xad8nojaPio2+Zc5rGAKv+jCdswJQFasUX8m58Ca1q9anfnEZ6bJD9LruR/kOOz3XX4AY4/HTLr8HWvnnIGoAPVI3nXYQbs+34HeqZ7lMwVgxaHRJueRjAeZD8Fcjg3gLIoMSrw7+TJn8sQgZubbbsPxGxTUAMWPNRQ5FLkoMuiRrtv2tfwNUDVLyWynjZVyr/USiSO+x5COh/qS4ossc5ivPKxtO250g5BrIZ9oxpvJqT91+LFBu075Z362fwXosqeMAy9wZsbMRToeZBnnSNZt7q7vAFDUr1o3QEZ+N/dX2ifgdl556Rv6I2qhjj0VuCbAur69XcqxH325HVc/w29T8JsVHNSrVIcnbfs6dV/Bb8Av0F2fpZcAYXrD9ivquBIzweqKfb95aS0/AZFpAvYrvOMRf4kdN1aAEhB2/tpIrO0vuWsxcCm2ZVp7f+Abt+G1L3wMIuVHDvnDb7YfxHsHXUFrqIeZU0/cPt+au9efIMShl03Kuw81qmY/Of9xZmuvQw8z2SwHske1yO6RDfqk4lmT6yp9tgfykbsooJpAe4Xf+xmIuRH7Tzu6Ga+AJZDiuQYS48HXAeE58v8KIFxqzn98sn6i2IFx/IrbUX0/Uq4D8Uw+g5B8vSkdQzzx9qD6KI8Pp/0Vf/pswAywlh21dD/Jye26AbDxT0vd73jtA3aU79ivar1jo9o9m6r7jv/rth0Y1EeBw+P4vFP3sfSz9RSyo3d+Kp/VRn1QbHJN/cigyDtNvfgrj/eJbeMdXvJ1/g6gj9bje8nbs4C3ehLvdQEyPW2fKfSiAMtroFwHLQ8dh++HUEB4BWCAWT9gsp9namEW13xzFoDiV1Dn+b4A78hLNsqlZ+OyOVUTtUJdp26he/uMQaxnaOXXxnMNGbsfmNGezfrj6DqTdc7U7PzU9swcnvWpw6wa6nATT3r4GWW+ptrTft/jumLQI5SYmSdresTLH99Hto/0s1qQQd1XvS/6gGLXKbklhy/K3KEzm7mMd1ZxK4ZrqG/G/PE+vg9fAyFv2jrgPtDd9x6wEfOcLoDLZ4i1/u1TBOAMKK+01/W+9Qhs74u7n0EdmL6REtx0k/O7kP0Cshswy28f10D8aLPuc2Y9joHNmJ89wgHRjPY/QMrHOmId0dfqzdrh890h+2PQAoU68MxFOvhjmr3N+GHm2/vp8bIO6XL9I/leV1/zrdxnc5nP1hN7r/u8r58C25wJ8Q3OfJ7g3Q3/bYp7oOlDziHz4XLjlsHXwb8Xv/zYOBsAA7788Ih1vxVnzuSJmXTRA+CK/eUgPvaY9SVPjby0+3QPWsQsqo2yt7ufq29wNr6BlnxL3OVwZF7yQzlI45wco+d5x7ryPNd3P3i9Jum7rK+xIVbXa40O25nNXsbsk/qdM++VrufqvNas4ffk931W3epnfehJe24A5TP//XznIJv9Kx7rHtufKBTDcVL/8flNhefL2fPS+6FJ1p2qcfs7ifXjISS+wIYH2ZTm7RfwPaEzECNP6gTai1yAC+jCA+7revGjjpPc0/of2GdNc//9/P3O8kWOvObOuzqi2JCTd1f/66LHMY5iz+TkcV7viZndkYx6pa9Y7K3cnzpsd2pnz47UdQBSfDM+itsPH+uk8tU6Y7DGLm10YPnj7UyfcR7z48yq1wWsGjjJdpFPfzj3mqntNQrIQQvQ7sQ9mkP1m3OY9dhvq+P7msXP+mb6lMlW71Qy/NB/fH77x3/6h8+//fu/+/z45W/aJvdGzEOgQLO1GxxBo2TzQeRQZvwCloDiA0Cb+T8lW/Nl7s7zKaTHfwyqNQd+CCh2j7Nf87JM+/z7ZpHej2KnL8DCQSudcvrdUk/pevzra/KpHsetzb+v4XrcSW1LfPJYT0+P4lIbdLSvHkb5pIblgHU5B86HcB8j5fBnPuh6ngfrOD96B/RaM1r7XPdBvqedzdYntTymdRMcbV8D3oyl/lkfzWLsmxn4lowP75v9yRp9p8qJ7FF+Pk2Mt+ME/2///G//+vnrb//y+eu//+Xzr7/9ulLzf/3tL5+//vbrIhcvfdnYVn7bs/rjQ8zBZ8vx6xJbtssT+fFb4nZ9+mdu8avuUf6hlzU+Mnqh5l19b8i/9bfmpu4tZ87iZP6uWe/Fj/vevyfF3foL3vLx/bo2YkDLP2NteZd62StQ9tIYf/RHl/Hdy95uVgu2plf673H7+6Wnbsf8RvmYf9RlT2c8M6A/Yg92w+QAAAAwSURBVJ75dNvrPn1GrjlzXY9Vs7rjk7noPWV3YmELzThzfnnf6/mq3tP2eqx39/9/IxJRShLOPMAAAAAASUVORK5CYII="}}]);