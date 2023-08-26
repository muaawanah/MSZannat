import{A as h,C as g}from"./GridApp-7fc45828.js";import{_ as w}from"./_plugin-vue_export-helper-c27b6911.js";import{Z as x,i as b,r as s,o as n,c,a as o,w as d,F as m,b as t,f as y,h as v,t as l}from"./app-ab311d13.js";import{r as k}from"./ArrowLeftIcon-fa489952.js";import"./Index-717d3e2b.js";import"./ApplicationLogo-0bad1abd.js";const L={components:{AppLayout:h,Head:x,Link:b,ClassSvg:g,ArrowLeftIcon:k},props:{data:{type:Object,default:{}}}},A={class:"w-full flex items-center justify-start py-2"},C=t("span",null,"পূর্বের পেজ",-1),j={class:"w-full grid gap-2 md:grid-cols-2 md:gap-4"},S={class:"flex h-10 w-10 shrink-0 grow-0 items-center justify-center rounded-full bg-gray-200 text-xl font-bold text-gray-500 md:h-12 md:w-12 md:text-2xl"},B={class:"shrink grow"},$={class:"text-md font-bold text-brand-600 md:text-xl"},H={class:"flex items-center gap-2"},I=t("span",{class:"text-gray-600"}," বিষয়: ",-1),M={class:"font-bold text-gray-800"},Z=t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 40 40",class:"h-10 w-10 shrink-0 grow-0 fill-brand-600"},[t("g",{id:"right_arrow",transform:"translate(-0.287 0)"},[t("path",{id:"circle",d:"M20,1.379A18.593,18.593,0,0,0,1.429,20,18.554,18.554,0,1,0,27.212,2.835,18.411,18.411,0,0,0,20,1.379M20,0A20,20,0,1,1,0,20,20,20,0,0,1,20,0Z",transform:"translate(0.287 0)"}),t("path",{id:"arrow_icn",d:"M1048.294,2575.52h18.868l-7.145-7.146a.918.918,0,0,1,1.3-1.3l8.711,8.712a.92.92,0,0,1,0,1.3l-8.711,8.708a.918.918,0,0,1-1.3-1.3l7.145-7.144h-18.867a.918.918,0,1,1,0-1.835Z",transform:"translate(-1038.832 -2556.308)"})])],-1);function q(e,F,r,N,T,V){const p=s("Head"),_=s("ArrowLeftIcon"),i=s("Link"),f=s("ClassSvg"),u=s("app-layout");return n(),c(m,null,[o(p,{title:`${r.data.exam.name} এর ক্লাস সমুহ`},null,8,["title"]),o(u,{pageTitle:`${r.data.exam.name} এর ক্লাস সমুহ`},{default:d(()=>[t("div",A,[o(i,{href:e.route("question-papers.exams"),class:"flex items-center justify-center gap-2 rounded-md bg-gray-600 px-4 py-1 text-white"},{default:d(()=>[o(_,{class:"w-5"}),C]),_:1},8,["href"])]),t("div",j,[(n(!0),c(m,null,y(r.data.classes,a=>(n(),v(i,{key:a.id,href:e.route("question-papers.subjects",[r.data.exam.id,a.id]),class:"flex items-center gap-2 rounded-md border bg-white p-2 hover:shadow md:gap-4 md:p-4"},{default:d(()=>[t("div",S,l(e.$e2bnumber(a.code).padStart(2,e.$e2bnumber("0"))),1),t("div",B,[t("div",$,l(a.name),1),t("div",H,[o(f,{class:"w-5 text-gray-400"}),I,t("span",M,l(e.$e2bnumber(a.totalSubject))+" টি ",1)])]),Z]),_:2},1032,["href"]))),128))])]),_:1},8,["pageTitle"])],64)}const K=w(L,[["render",q]]);export{K as default};
