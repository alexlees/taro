(window.webpackJsonp=window.webpackJsonp||[]).push([[167],{1722:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(1743),i=a(1735),c=a(1737),m=a(1736);var s=function(e){var t=e.metadata;return l.a.createElement("nav",{className:"pagination-nav","aria-label":"Blog list page navigation"},l.a.createElement("div",{className:"pagination-nav__item"},t.previous&&l.a.createElement(m.a,{className:"pagination-nav__link",to:t.previous.permalink},l.a.createElement("div",{className:"pagination-nav__sublabel"},"Previous"),l.a.createElement("div",{className:"pagination-nav__label"},"\xab ",t.previous.title))),l.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t.next&&l.a.createElement(m.a,{className:"pagination-nav__link",to:t.next.permalink},l.a.createElement("div",{className:"pagination-nav__sublabel"},"Next"),l.a.createElement("div",{className:"pagination-nav__label"},t.next.title," \xbb"))))},o=a(1741);var d=function(){Object(i.a)().siteConfig.title;var e,t=Object(o.useActivePlugin)({failfast:!0}).pluginId,a=(Object(o.useActiveVersion)(t),Object(o.useDocVersionSuggestions)(t)),n=a.latestDocSuggestion,r=a.latestVersionSuggestion;return r?(null!=n||(e=r).docs.find((function(t){return t.id===e.mainDocId})),l.a.createElement("div",null)):l.a.createElement(l.a.Fragment,null)},u=a(1763),g=a(1730),v=a(218),E=a.n(v);t.default=function(e){var t,a=Object(i.a)().siteConfig,n=a.url,m=a.title,v=a.titleDelimiter,p=e.content,f=p.metadata,b=f.description,h=f.title,_=f.permalink,N=f.editUrl,w=f.lastUpdatedAt,O=f.lastUpdatedBy,y=p.frontMatter,k=y.image,j=y.keywords,C=y.hide_title,x=y.hide_table_of_contents,I=Object(o.useActivePlugin)({failfast:!0}).pluginId,L=Object(o.useVersions)(I),A=Object(o.useActiveVersion)(I),S=L.length>1,B=h?h+" "+v+" "+m:m,D=Object(c.a)(k,{absolute:!0});return l.a.createElement(l.a.Fragment,null,l.a.createElement(r.a,null,l.a.createElement("title",null,B),l.a.createElement("meta",{property:"og:title",content:B}),b&&l.a.createElement("meta",{name:"description",content:b}),b&&l.a.createElement("meta",{property:"og:description",content:b}),j&&j.length&&l.a.createElement("meta",{name:"keywords",content:j.join(",")}),k&&l.a.createElement("meta",{property:"og:image",content:D}),k&&l.a.createElement("meta",{property:"twitter:image",content:D}),k&&l.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+h}),_&&l.a.createElement("meta",{property:"og:url",content:n+_}),_&&l.a.createElement("link",{rel:"canonical",href:n+_})),l.a.createElement("div",{className:Object(g.a)("container padding-vert--lg",E.a.docItemWrapper)},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:Object(g.a)("col",(t={},t[E.a.docItemCol]=!x,t))},l.a.createElement(d,null),l.a.createElement("div",{className:E.a.docItemContainer},l.a.createElement("article",null,S&&l.a.createElement("div",null,l.a.createElement("span",{className:"badge badge--secondary"},"Version: ",A.label)),!C&&l.a.createElement("header",null,l.a.createElement("h1",{className:E.a.docTitle},h)),l.a.createElement("div",{className:"markdown"},l.a.createElement(p,null))),(N||w||O)&&l.a.createElement("div",{className:"margin-vert--xl"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},N&&l.a.createElement("a",{href:N,target:"_blank",rel:"noreferrer noopener"},l.a.createElement("svg",{fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 40 40",style:{marginRight:"0.3em",verticalAlign:"sub"}},l.a.createElement("g",null,l.a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"}))),"Edit this page")),(w||O)&&l.a.createElement("div",{className:"col text--right"},l.a.createElement("em",null,l.a.createElement("small",null,"Last updated"," ",w&&l.a.createElement(l.a.Fragment,null,"on"," ",l.a.createElement("time",{dateTime:new Date(1e3*w).toISOString(),className:E.a.docLastUpdatedAt},new Date(1e3*w).toLocaleDateString()),O&&" "),O&&l.a.createElement(l.a.Fragment,null,"by ",l.a.createElement("strong",null,O)),!1))))),l.a.createElement("div",{className:"margin-vert--lg"},l.a.createElement(s,{metadata:f})))),!x&&p.rightToc&&l.a.createElement("div",{className:"col col--3"},l.a.createElement(u.a,{headings:p.rightToc})))))}},1763:function(e,t,a){"use strict";var n=a(0),l=a.n(n);var r=function(e,t,a){var l=Object(n.useState)(void 0),r=l[0],i=l[1];Object(n.useEffect)((function(){function n(){var n=function(){var e=Array.from(document.getElementsByClassName("anchor")),t=e.find((function(e){return e.getBoundingClientRect().top>=a}));if(t){if(t.getBoundingClientRect().top>=a){var n=e[e.indexOf(t)-1];return null!=n?n:t}return t}return e[e.length-1]}();if(n)for(var l=0,c=!1,m=document.getElementsByClassName(e);l<m.length&&!c;){var s=m[l],o=s.href,d=decodeURIComponent(o.substring(o.indexOf("#")+1));n.id===d&&(r&&r.classList.remove(t),s.classList.add(t),i(s),c=!0),l+=1}}return document.addEventListener("scroll",n),document.addEventListener("resize",n),n(),function(){document.removeEventListener("scroll",n),document.removeEventListener("resize",n)}}))},i=a(50),c=a.n(i),m="table-of-contents__link";function s(e){var t=e.headings,a=e.isChild;return t.length?l.a.createElement("ul",{className:a?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return l.a.createElement("li",{key:e.id},l.a.createElement("a",{href:"#"+e.id,className:m,dangerouslySetInnerHTML:{__html:e.value}}),l.a.createElement(s,{isChild:!0,headings:e.children}))}))):null}t.a=function(e){var t=e.headings;return r(m,"table-of-contents__link--active",100),l.a.createElement("div",{className:c.a.tableOfContents},l.a.createElement(s,{headings:t}))}}}]);