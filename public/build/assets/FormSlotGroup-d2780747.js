import{F as x}from"./FormGroup-db26f158.js";import{r as y}from"./TrashIcon-39f39eaf.js";import{r as $}from"./PlusCircleIcon-5c2fc182.js";import{_ as m}from"./_plugin-vue_export-helper-c27b6911.js";import{r as s,o as t,c as n,a,b as l,k as d,e as g,h as k,w as C,f as v,F as w,g as S}from"./app-34468406.js";import{L as F}from"./Label-d26a6110.js";const I={components:{PlusCircleIcon:$}},B={type:"button",class:"flex items-center justify-center gap-1 rounded border border-dashed border-gray-400 px-2 py-1 text-gray-500"},N={class:"-mb-1 text-sm"};function T(e,u,o,p,_,i){const c=s("PlusCircleIcon");return t(),n("button",B,[a(c,{class:"h-4 w-4"}),l("span",N,[d(e.$slots,"default",{},()=>[g("যোগ করুন")])])])}const V=m(I,[["render",T]]),j={components:{FormGroup:x,TrashIcon:y,AddButton:V,Label:F},props:["label","collections","addSlotMethod"],methods:{removeSlot(e){confirm("Are you sure you want to delete?")&&this.collections.splice(e,1)}}},A={class:"flex flex-col gap-2 rounded border px-2 py-3"},L={class:"flex-grow-0"},M={key:0,class:"flex items-center justify-center"};function P(e,u,o,p,_,i){const c=s("TrashIcon"),f=s("add-button"),h=s("form-group");return t(),k(h,{label:o.label},{default:C(()=>[l("div",A,[d(e.$slots,"header"),(t(!0),n(w,null,v(o.collections,(b,r)=>(t(),n("div",{key:r,class:"flex flex-col md:flex-row items-center justify-center gap-2 rounded border border-dashed border-gray-300 px-2 py-3"},[d(e.$slots,"default",{item:b,index:r,iteration:r+1}),l("div",L,[a(c,{onClick:G=>i.removeSlot(r),class:"h-5 w-5 cursor-pointer text-red-600"},null,8,["onClick"])])]))),128)),o.addSlotMethod?(t(),n("div",M,[a(f,{onClick:o.addSlotMethod},null,8,["onClick"])])):S("",!0)])]),_:3},8,["label"])}const K=m(j,[["render",P]]);export{V as A,K as F};
