import{A as _}from"./GridApp-ff022798.js";import{Z as u,i as g,r as l,o as h,c as b,a as t,w as e,F as w,b as A,e as s,t as i}from"./app-34468406.js";import{S as N}from"./DataTable-916b1020.js";import{A as x}from"./ActionButtonShow-baecf17d.js";import{A as k}from"./ActionButtonEdit-fe9ea140.js";import{A as y}from"./AddNewButton-f29d572e.js";import{T as B}from"./TableTd-30d46cc5.js";import{_ as T}from"./_plugin-vue_export-helper-c27b6911.js";import"./Index-85bd2493.js";import"./ApplicationLogo-d7798735.js";import"./Index-14a51f7f.js";import"./Label-d26a6110.js";import"./PaginatorLinks-c2a70fb0.js";const H={components:{AppLayout:_,SimpleTable:N,Head:u,Link:g,ActionButtonShow:x,ActionButtonEdit:k,AddNewButton:y,TableTd:B},props:{data:{type:Object,default:{}}},data(){return{columns:[{title:"ভাউচার নং",align:"left"},{title:"তারিখ",align:"left"},{title:"খাত",align:"left"},{title:"ব্যয়কারী",align:"left"},{title:"টাকা",align:"right"}]}}},v={class:"overflow-hidden whitespace-normal break-all line-clamp-6"};function L(n,S,r,V,c,C){const m=l("Head"),d=l("Link"),o=l("table-td"),f=l("simple-table"),p=l("app-layout");return h(),b(w,null,[t(m,{title:"ব্যয়ের তালিকা"}),t(p,{pageTitle:"ব্যয়ের তালিকা",addNewHref:n.route("expenses.create")},{default:e(()=>[t(f,{collections:r.data.collections,filters:r.data.filters,columns:c.columns},{default:e(({item:a})=>[t(o,{class:"text-left"},{default:e(()=>[A("div",v,[t(d,{href:n.route("expenses.edit",a.id),class:"text-brand-600 hover:underline"},{default:e(()=>[s(i(a.id),1)]),_:2},1032,["href"])])]),_:2},1024),t(o,{class:"text-left"},{default:e(()=>[s(i(a.date),1)]),_:2},1024),t(o,{class:"text-left"},{default:e(()=>[s(i(a.categoryName),1)]),_:2},1024),t(o,{class:"text-left"},{default:e(()=>[s(i(a.staffName),1)]),_:2},1024),t(o,{class:"text-right"},{default:e(()=>[s(i(a.amount),1)]),_:2},1024)]),_:1},8,["collections","filters","columns"])]),_:1},8,["addNewHref"])],64)}const M=T(H,[["render",L]]);export{M as default};
