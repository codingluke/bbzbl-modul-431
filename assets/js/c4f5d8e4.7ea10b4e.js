/*! For license information please see c4f5d8e4.7ea10b4e.js.LICENSE.txt */
"use strict";(self.webpackChunkdocosaurus_rex=self.webpackChunkdocosaurus_rex||[]).push([[195],{9294:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var r=n(7294),a=n(6010),l=n(2263),c=n(2164);n(640);const i="heroBanner_qdFl",o="heroTitle_qg2I";var s=n(9960);function u(){const{siteConfig:e}=(0,l.Z)();return r.createElement("header",{className:(0,a.Z)("hero",i)},r.createElement("div",{className:"container"},r.createElement("h1",{className:(0,a.Z)("hero__title",o)},e.title),r.createElement("p",{className:"hero__subtitle"},e.tagline),r.createElement("div",null,r.createElement("p",null,"Hier finden Sie Informationen und Unterlagen zum Unterricht.",r.createElement("br",null),"Ausserdem finden Sie auch weiterf\xfchrende Links. Auf diese werden Sie im Unterricht nicht ausdr\xfccklich hingewiesen."),r.createElement(s.Z,{className:"button button--primary",to:"/docs"},"Hier geht es zum Inhalt"))))}function m(){const{siteConfig:e}=(0,l.Z)();return r.createElement(c.Z,{title:e.title,description:e.tagline},r.createElement(u,null))}},640:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(7294),a=function(){return a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},a.apply(this,arguments)};function l(e){var t=r.useState(!1),n=t[0],l=t[1],c=r.useState(!1),i=c[0],o=c[1],s=encodeURIComponent(e.id),u="string"==typeof e.playlistCoverId?encodeURIComponent(e.playlistCoverId):null,m=e.title,p=e.poster||"hqdefault",d="&"+e.params||0,h=e.muted?"&mute=1":"",f=e.announce||"Watch",g=e.webp?"webp":"jpg",w=e.webp?"vi_webp":"vi",y=e.thumbnail||(e.playlist?"https://i.ytimg.com/"+w+"/"+u+"/"+p+"."+g:"https://i.ytimg.com/"+w+"/"+s+"/"+p+"."+g),b=e.noCookie;b=e.cookie?"https://www.youtube.com":"https://www.youtube-nocookie.com";var E=e.playlist?b+"/embed/videoseries?autoplay=1"+h+"&list="+s+d:b+"/embed/"+s+"?autoplay=1&state=1"+h+d,k=e.activatedClass||"lyt-activated",v=e.adNetwork||!1,C=e.aspectHeight||9,I=e.aspectWidth||16,N=e.iframeClass||"",_=e.playerClass||"lty-playbtn",Z=e.wrapperClass||"yt-lite",F=e.onIframeAdded||function(){},S=e.rel?"prefetch":"preload";return r.useEffect((function(){i&&F()}),[i]),r.createElement(r.Fragment,null,r.createElement("link",{rel:S,href:y,as:"image"}),r.createElement(r.Fragment,null,n&&r.createElement(r.Fragment,null,r.createElement("link",{rel:"preconnect",href:b}),r.createElement("link",{rel:"preconnect",href:"https://www.google.com"}),v&&r.createElement(r.Fragment,null,r.createElement("link",{rel:"preconnect",href:"https://static.doubleclick.net"}),r.createElement("link",{rel:"preconnect",href:"https://googleads.g.doubleclick.net"})))),r.createElement("article",{onPointerOver:function(){n||l(!0)},onClick:function(){i||o(!0)},className:Z+" "+(i?k:""),"data-title":m,style:a({backgroundImage:"url("+y+")"},{"--aspect-ratio":C/I*100+"%"})},r.createElement("button",{className:_,"aria-label":f+" "+m}),i&&r.createElement("iframe",{className:N,title:m,width:"560",height:"315",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,src:E})))}}}]);