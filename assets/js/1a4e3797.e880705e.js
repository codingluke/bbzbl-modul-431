"use strict";(self.webpackChunkbbzbl_modul_431=self.webpackChunkbbzbl_modul_431||[]).push([[920],{8824:(e,t,n)=>{n.d(t,{c:()=>u});var r=n(7294),l=n(2263);const a=["zero","one","two","few","many","other"];function s(e){return a.filter((t=>e.includes(t)))}const c={locale:"en",pluralForms:s(["one","other"]),select:e=>1===e?"one":"other"};function o(){const{i18n:{currentLocale:e}}=(0,l.Z)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:s(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+t.message+"\n"),c}}),[e])}function u(){const e=o();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error("For locale="+n.locale+", a maximum of "+n.pluralForms.length+" plural forms are expected ("+n.pluralForms.join(",")+"), but the message contains "+r.length+": "+e);const l=n.select(t),a=n.pluralForms.indexOf(l);return r[Math.min(a,r.length-1)]}(n,t,e)}}},1473:(e,t,n)=>{n.r(t),n.d(t,{default:()=>R});var r=n(7294),l=n(2263),a=n(7274),s=n(5742),c=n(9960),o=n(5999),u=n(8824),m=n(6775),h=n(412);const i=function(){const e=(0,m.k6)(),t=(0,m.TH)(),{siteConfig:{baseUrl:n}}=(0,l.Z)(),r=h.Z.canUseDOM?new URLSearchParams(t.search):null,a=(null==r?void 0:r.get("q"))||"",s=(null==r?void 0:r.get("ctx"))||"",c=(null==r?void 0:r.get("version"))||"",o=e=>{const n=new URLSearchParams(t.search);return e?n.set("q",e):n.delete("q"),n};return{searchValue:a,searchContext:s,searchVersion:c,updateSearchPath:t=>{const n=o(t);e.replace({search:n.toString()})},generateSearchPageLink:e=>{const t=o(e);return n+"search?"+t.toString()}}};var p=n(22),g=n(8202),d=n(2539),f=n(726),E=n(1073),y=n(311),S=n(3926),b=n(1029);const w="searchQueryInput_CFBF",v="searchResultItem_U687",_="searchResultItemPath_uIbk",I="searchResultItemSummary_oZHr";function P(){const{siteConfig:{baseUrl:e}}=(0,l.Z)(),{selectMessage:t}=(0,u.c)(),{searchValue:n,searchContext:a,searchVersion:c,updateSearchPath:m}=i(),[h,d]=(0,r.useState)(n),[f,E]=(0,r.useState)(),[S,b]=(0,r.useState)(),v=""+e+c,_=(0,r.useMemo)((()=>h?(0,o.I)({id:"theme.SearchPage.existingResultsTitle",message:'Search results for "{query}"',description:"The search page title for non-empty query"},{query:h}):(0,o.I)({id:"theme.SearchPage.emptyResultsTitle",message:"Search the documentation",description:"The search page title for empty query"})),[h]);(0,r.useEffect)((()=>{m(h),f&&(h?f(h,(e=>{b(e)})):b(void 0))}),[h,f]);const I=(0,r.useCallback)((e=>{d(e.target.value)}),[]);return(0,r.useEffect)((()=>{n&&n!==h&&d(n)}),[n]),(0,r.useEffect)((()=>{!async function(){const{wrappedIndexes:e,zhDictionary:t}=await(0,p.w)(v,a);E((()=>(0,g.v)(e,t,100)))}()}),[a,v]),r.createElement(r.Fragment,null,r.createElement(s.Z,null,r.createElement("meta",{property:"robots",content:"noindex, follow"}),r.createElement("title",null,_)),r.createElement("div",{className:"container margin-vert--lg"},r.createElement("h1",null,_),r.createElement("input",{type:"search",name:"q",className:w,"aria-label":"Search",onChange:I,value:h,autoComplete:"off",autoFocus:!0}),!f&&h&&r.createElement("div",null,r.createElement(y.Z,null)),S&&(S.length>0?r.createElement("p",null,t(S.length,(0,o.I)({id:"theme.SearchPage.documentsFound.plurals",message:"1 document found|{count} documents found",description:'Pluralized label for "{count} documents found". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)'},{count:S.length}))):r.createElement("p",null,(0,o.I)({id:"theme.SearchPage.noResultsText",message:"No documents were found",description:"The paragraph for empty search result"}))),r.createElement("section",null,S&&S.map((e=>r.createElement(F,{key:e.document.i,searchResult:e}))))))}function F(e){let{searchResult:{document:t,type:n,page:l,tokens:a,metadata:s}}=e;const o=0===n,u=2===n,m=(o?t.b:l.b).slice(),h=u?t.s:t.t;o||m.push(l.t);let i="";if(b.vc&&a.length>0){const e=new URLSearchParams;for(const t of a)e.append("_highlight",t);i="?"+e.toString()}return r.createElement("article",{className:v},r.createElement("h2",null,r.createElement(c.Z,{to:t.u+i+(t.h||""),dangerouslySetInnerHTML:{__html:u?(0,d.C)(h,a):(0,f.o)(h,(0,E.m)(s,"t"),a,100)}})),m.length>0&&r.createElement("p",{className:_},(0,S.e)(m)),u&&r.createElement("p",{className:I,dangerouslySetInnerHTML:{__html:(0,f.o)(t.t,(0,E.m)(s,"t"),a,100)}}))}const R=function(){return r.createElement(a.Z,null,r.createElement(P,null))}}}]);