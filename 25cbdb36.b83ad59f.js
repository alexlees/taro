(window.webpackJsonp=window.webpackJsonp||[]).push([[246],{1723:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return f}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),s=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(t),m=r,f=p["".concat(c,".").concat(m)]||p[m]||b[m]||a;return t?o.a.createElement(f,i(i({ref:n},l),{},{components:t})):o.a.createElement(f,i({ref:n},l))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=m;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<a;l++)c[l]=t[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1724:function(e,n,t){"use strict";function r(e){var n,t,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=r(e[n]))&&(o&&(o+=" "),o+=t);else for(n in e)e[n]&&(o&&(o+=" "),o+=n);return o}n.a=function(){for(var e,n,t=0,o="";t<arguments.length;)(e=arguments[t++])&&(n=r(e))&&(o&&(o+=" "),o+=n);return o}},1725:function(e,n,t){"use strict";var r=t(0),o=t(1726);n.a=function(){var e=Object(r.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},1726:function(e,n,t){"use strict";var r=t(0),o=Object(r.createContext)(void 0);n.a=o},1727:function(e,n,t){"use strict";var r=t(0),o=t.n(r),a=t(1725),c=t(1724),i=t(47),u=t.n(i),l=37,s=39;n.a=function(e){var n=e.block,t=e.children,i=e.defaultValue,p=e.values,b=e.groupId,m=e.className,f=Object(a.a)(),d=f.tabGroupChoices,v=f.setTabGroupChoices,O=Object(r.useState)(i),j=O[0],y=O[1],w=Object(r.useState)(!1),g=w[0],h=w[1];if(null!=b){var x=d[b];null!=x&&x!==j&&p.some((function(e){return e.value===x}))&&y(x)}var T=function(e){y(e),null!=b&&v(b,e)},C=[],N=function(e){e.metaKey||e.altKey||e.ctrlKey||h(!0)},E=function(){h(!1)};return Object(r.useEffect)((function(){return window.addEventListener("keydown",N),window.addEventListener("mousedown",E),function(){window.removeEventListener("keydown",N),window.removeEventListener("mousedown",E)}}),[]),o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":n},m)},p.map((function(e){var n=e.value,t=e.label;return o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":j===n,className:Object(c.a)("tabs__item",u.a.tabItem,{"tabs__item--active":j===n}),style:g?{}:{outline:"none"},key:n,ref:function(e){return C.push(e)},onKeyDown:function(e){!function(e,n,t){switch(t.keyCode){case s:!function(e,n){var t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()}(e,n);break;case l:!function(e,n){var t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,n)}}(C,e.target,e),N(e)},onFocus:function(){return T(n)},onClick:function(){T(n),h(!1)},onPointerDown:function(){return h(!1)}},t)}))),o.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(t).filter((function(e){return e.props.value===j}))[0]))}},1728:function(e,n,t){"use strict";var r=t(0),o=t.n(r);n.a=function(e){return o.a.createElement("div",null,e.children)}},303:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return u})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return b}));var r=t(2),o=t(6),a=(t(0),t(1723)),c=t(1727),i=t(1728),u={title:"\u7ec4\u4ef6\u5e93\u8bf4\u660e"},l={unversionedId:"components-desc",id:"version-3.0.14/components-desc",isDocsHomePage:!1,title:"\u7ec4\u4ef6\u5e93\u8bf4\u660e",description:"Taro \u4ee5 \u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u7ec4\u4ef6\u5e93 \u4e3a\u6807\u51c6\uff0c\u7ed3\u5408 jsx \u8bed\u6cd5\u89c4\u8303\uff0c\u5b9a\u5236\u4e86\u4e00\u5957\u81ea\u5df1\u7684\u7ec4\u4ef6\u5e93\u89c4\u8303\u3002",source:"@site/versioned_docs/version-3.0.14/components-desc.md",slug:"/components-desc",permalink:"/taro/docs/components-desc",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.0.14/components-desc.md",version:"3.0.14",sidebar:"version-3.0.14/components",next:{title:"View",permalink:"/taro/docs/components/viewContainer/view"}},s=[{value:"\u6ce8\u610f",id:"\u6ce8\u610f",children:[{value:"\u9996\u5b57\u6bcd\u5927\u5199\u4e0e\u9a7c\u5cf0\u5f0f\u547d\u540d",id:"\u9996\u5b57\u6bcd\u5927\u5199\u4e0e\u9a7c\u5cf0\u5f0f\u547d\u540d",children:[]},{value:"\u7ec4\u4ef6\u7684\u4e8b\u4ef6\u4f20\u9012\u90fd\u8981\u4ee5 on \u5f00\u5934",id:"\u7ec4\u4ef6\u7684\u4e8b\u4ef6\u4f20\u9012\u90fd\u8981\u4ee5-on-\u5f00\u5934",children:[]}]}],p={rightToc:s};function b(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Taro \u4ee5 ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/component/"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u7ec4\u4ef6\u5e93")," \u4e3a\u6807\u51c6\uff0c\u7ed3\u5408 ",Object(a.b)("inlineCode",{parentName:"p"},"jsx")," \u8bed\u6cd5\u89c4\u8303\uff0c\u5b9a\u5236\u4e86\u4e00\u5957\u81ea\u5df1\u7684\u7ec4\u4ef6\u5e93\u89c4\u8303\u3002"),Object(a.b)("p",null,"\u57fa\u4e8e\u4ee5\u4e0a\u539f\u5219\uff0c\u5728\u5c0f\u7a0b\u5e8f\u7aef\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u6240\u6709\u7684\u5c0f\u7a0b\u5e8f\u539f\u751f\u7ec4\u4ef6\uff0c\u800c\u5728\u5176\u4ed6\u7aef\uff0c\u6211\u4eec\u63d0\u4f9b\u4e86\u5bf9\u5e94\u7684\u7ec4\u4ef6\u5e93\u5b9e\u73b0"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"H5 \u7aef\uff0c",Object(a.b)("inlineCode",{parentName:"li"},"@tarojs/components"),"\uff0c\u540c\u65f6\u4e5f\u662f\u9700\u8981\u5f15\u5165\u7684\u9ed8\u8ba4\u6807\u51c6\u7ec4\u4ef6\u5e93")),Object(a.b)("p",null,"\u5728\u4f7f\u7528\u65f6\uff0cReact \u4e2d\u6211\u4eec\u9700\u8981\u5148\u4ece Taro \u6807\u51c6\u7ec4\u4ef6\u5e93 ",Object(a.b)("inlineCode",{parentName:"p"},"@tarojs/components")," \u5f15\u7528\u7ec4\u4ef6\uff0c\u518d\u8fdb\u884c\u4f7f\u7528\uff0c\u4f8b\u5982\u4f7f\u7528 ",Object(a.b)("inlineCode",{parentName:"p"},"<View />"),"\u3001 ",Object(a.b)("inlineCode",{parentName:"p"},"<Text />")," \u7ec4\u4ef6\uff0c\u800c Vue \u6211\u4eec\u5219\u65e0\u9700\u5f15\u5165"),Object(a.b)(c.a,{defaultValue:"React",values:[{label:"React",value:"React"},{label:"Vue",value:"Vue"}],mdxType:"Tabs"},Object(a.b)(i.a,{value:"React",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"import React, { Component } from 'react'\nimport { View, Text } from '@tarojs/components'\n\nexport default class C extends Component {\n  render () {\n    return (\n      <View className='c'>\n        <Text>c component</Text>\n      </View>\n    )\n  }\n}\n"))),Object(a.b)(i.a,{value:"Vue",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),'<template>\n  <view class="c">\n    <text>c component</text>\n  </view>\n</template>\n')))),Object(a.b)("h2",{id:"\u6ce8\u610f"},"\u6ce8\u610f"),Object(a.b)("p",null,"\u5728\u7ec4\u4ef6\u7684\u8be6\u7ec6\u6587\u6863\u4e2d\u5217\u51fa\u4e86\u7ec4\u4ef6\u5728\u4e0d\u540c\u7aef\u7684\u652f\u6301\u7a0b\u5ea6\uff0c\u4ee5\u53ca\u57fa\u672c\u7684\u4f7f\u7528\u793a\u4f8b\u3002 \u90e8\u5206\u672a\u5217\u51fa\u793a\u4f8b\u7684\uff0c\u6807\u660e\u4ec5\u5728\u5c0f\u7a0b\u5e8f\u7aef\u652f\u6301\u7684\u7ec4\u4ef6\u7684\u7528\u6cd5\u53ef\u4ee5\u76f4\u63a5\u53c2\u8003",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/component/"}),"\u5c0f\u7a0b\u5e8f\u7ec4\u4ef6\u6587\u6863"),"\u3002"),Object(a.b)("p",null,"\u9700\u8981\u6ce8\u610f\u7684\u662f\u4ecd\u9700\u9075\u5faa Taro \u7684\u5f00\u53d1\u89c4\u8303\uff1a"),Object(a.b)("h3",{id:"\u9996\u5b57\u6bcd\u5927\u5199\u4e0e\u9a7c\u5cf0\u5f0f\u547d\u540d"},"\u9996\u5b57\u6bcd\u5927\u5199\u4e0e\u9a7c\u5cf0\u5f0f\u547d\u540d"),Object(a.b)("p",null,"\u4f8b\u5982\uff0c\u4f7f\u7528 H5 \u7aef\u5c1a\u672a\u652f\u6301\u7684 map \u7ec4\u4ef6"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"import React, { Component } from 'react'\nimport Taro from '@tarojs/taro'\n// \u5f15\u5165 map \u7ec4\u4ef6\nimport { Map } from '@tarojs/components'\n\nclass App extends Components {\n  onTap () {}\n  render () {\n    return (\n      <Map onClick={this.onTap} />\n    )\n  }\n}\n")),Object(a.b)("h3",{id:"\u7ec4\u4ef6\u7684\u4e8b\u4ef6\u4f20\u9012\u90fd\u8981\u4ee5-on-\u5f00\u5934"},"\u7ec4\u4ef6\u7684\u4e8b\u4ef6\u4f20\u9012\u90fd\u8981\u4ee5 on \u5f00\u5934"),Object(a.b)("p",null,"\u5728\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u4e2d bind \u5f00\u5934\u8fd9\u6837\u7684\u7528\u6cd5\uff0c\u90fd\u9700\u8981\u8f6c\u6210\u4ee5 on \u5f00\u5934\u7684\u5f62\u5f0f\u3002"))}b.isMDXComponent=!0}}]);