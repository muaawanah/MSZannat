import{A as u}from"./GridApp-ff022798.js";import{Z as _,i as b,r as o,o as h,c as w,a as t,w as e,F as A,b as T,e as l,t as s}from"./app-34468406.js";import{S as g}from"./DataTable-916b1020.js";import{A as x}from"./ActionButtonShow-baecf17d.js";import{A as B}from"./ActionButtonEdit-fe9ea140.js";import{A as N}from"./AddNewButton-f29d572e.js";import{T as k}from"./TableTd-30d46cc5.js";import{_ as y}from"./_plugin-vue_export-helper-c27b6911.js";import"./Index-85bd2493.js";import"./ApplicationLogo-d7798735.js";import"./Index-14a51f7f.js";import"./Label-d26a6110.js";import"./PaginatorLinks-c2a70fb0.js";const H={components:{AppLayout:u,DataTable:g,Head:_,Link:b,ActionButtonShow:x,ActionButtonEdit:B,AddNewButton:N,TableTd:k},props:{data:{type:Object,default:{}}},data(){return{columns:[{title:"ক্লাস কোড",align:"center"},{title:"ক্লাস/বিভাগের নাম",align:"left"},{title:"শিক্ষাথী সংখ্যা",align:"center"}]}}},S={class:"w-full"};function L(a,v,c,V,i,$){const d=o("Head"),r=o("table-td"),m=o("Link"),p=o("data-table"),f=o("app-layout");return h(),w(A,null,[t(d,{title:"ক্লাস/বিভাগ সমুহ"}),t(f,{pageTitle:"ক্লাস/বিভাগ সমুহ",addNewHref:a.route("classes.create")},{default:e(()=>[T("div",S,[t(p,{collections:c.data.collections,filters:c.data.filters,columns:i.columns},{default:e(({item:n})=>[t(r,{class:"text-center"},{default:e(()=>[l(s(a.$e2bnumber(n.code)),1)]),_:2},1024),t(r,{class:"text-left"},{default:e(()=>[t(m,{href:a.route("classes.show",n.id),class:"text-brand-600 hover:underline"},{default:e(()=>[l(s(n.name),1)]),_:2},1032,["href"])]),_:2},1024),t(r,{class:"text-center"},{default:e(()=>[l(s(a.$e2bnumber(n.totalStudent)),1)]),_:2},1024)]),_:1},8,["collections","filters","columns"])])]),_:1},8,["addNewHref"])],64)}const M=y(H,[["render",L]]);export{M as default};
