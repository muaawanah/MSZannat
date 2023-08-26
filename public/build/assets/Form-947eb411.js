import{V}from"./ValidationErrors-7e30df70.js";import{B as y}from"./Button-415165b1.js";import{I as w}from"./Input-372a1eaa.js";import{S as k}from"./Select-70604ac4.js";import{F as A}from"./FormGroup-4756c19a.js";import{T as j}from"./Textarea-aa808472.js";import{L as B}from"./Label-aac4f242.js";import{r as i,o as m,c,a as l,b as s,w as p,j as _,s as f,F as C,f as S,n as F,d as I,h as O,t as h,e as q}from"./app-ab311d13.js";import{_ as E}from"./_plugin-vue_export-helper-c27b6911.js";const U={components:{ValidationErrors:V,Button:y,Input:w,Select:k,FormGroup:A,Textarea:j,Label:B},props:{moduleAction:String,buttonValue:{type:String,default:"Save"},data:{type:Object,default:{}}},data(){return{form:this.$inertia.form({title:this.data.purpose.title,purpose_fees:[]}),all_amount_same:"",amount:""}},created(){this.moduleAction=="store"&&Object.values(this.data.classes).forEach(o=>{this.form.purpose_fees.push({class_id:o.id,class_name:o.name,amount:""})}),this.moduleAction=="update"&&(this.all_amount_same=Object.keys(this.data.purpose.purpose_fees).length?Object.values(this.data.purpose.purpose_fees).every((o,e,n)=>o.amount===n[0].amount):"",this.amount=this.all_amount_same?this.data.purpose.purpose_fees[0].amount:"",Object.values(this.data.classes).forEach(o=>{let e=Object.values(this.data.purpose.purpose_fees).find(n=>n.class_id===o.id);this.form.purpose_fees.push({class_id:o.id,class_name:o.name,amount:e?e.amount:""})}))},methods:{submit(){if(this.moduleAction=="store")return this.form.post(this.route("purposes.store"));if(this.moduleAction=="update")return this.form.put(this.route("purposes.update",this.data.purpose.id))},setAllAmount(){this.form.purpose_fees.forEach(o=>{o.amount=this.amount})}}},L={class:"w-full max-w-xl rounded border bg-white p-4 shadow"},N={class:"grid gap-x-10 md:grid-cols-2"},T={class:"col-span-full grid gap-4 md:grid-cols-2"},D={class:"flex items-center gap-2"},z={class:"flex items-center gap-2 py-4 text-brand-500"},G=s("span",null,"সব ক্লাসে একই ফি",-1),M={class:"flex items-center gap-2"},P={class:"flex items-center gap-2 text-brand-500"},H=s("span",null,"ভিন্ন ভিন্ন ফি",-1),J=s("hr",{class:"col-span-full mb-3"},null,-1),K={class:"flex items-center gap-2 py-1"},Q={class:"w-full text-right"},R=s("hr",{class:"my-4 w-full"},null,-1),W={class:"flex items-center justify-end"};function X(o,e,n,Y,t,u){const b=i("validation-errors"),r=i("Input"),d=i("form-group"),g=i("Button");return m(),c("div",L,[l(b,{class:"mb-4"}),s("form",{onSubmit:e[4]||(e[4]=I((...a)=>u.submit&&u.submit(...a),["prevent"])),class:""},[s("div",N,[l(d,{label:"বাবদের শিরোনাম",class:"col-span-2"},{default:p(()=>[l(r,{type:"text",class:"block w-full",modelValue:t.form.title,"onUpdate:modelValue":e[0]||(e[0]=a=>t.form.title=a),required:""},null,8,["modelValue"])]),_:1}),s("div",T,[s("div",D,[s("label",z,[l(r,{checked:t.all_amount_same===!0,type:"radio",name:"all_amount_same",onClick:e[1]||(e[1]=a=>t.all_amount_same=!0),onChange:u.setAllAmount,required:""},null,8,["checked","onChange"]),G]),_(l(r,{type:"number",class:"w-20 text-right",required:t.all_amount_same===!0,onInput:u.setAllAmount,modelValue:t.amount,"onUpdate:modelValue":e[2]||(e[2]=a=>t.amount=a)},null,8,["required","onInput","modelValue"]),[[f,t.all_amount_same===!0]])]),s("div",M,[s("label",P,[l(r,{checked:t.all_amount_same===!1,type:"radio",name:"all_amount_same",onClick:e[3]||(e[3]=a=>t.all_amount_same=!1),required:""},null,8,["checked"]),H])])]),J,(m(!0),c(C,null,S(t.form.purpose_fees,(a,x)=>(m(),O(d,{key:x,class:"col-span-1"},{default:p(()=>[_(s("div",K,[s("label",Q,h(a.class_name),1),l(r,{type:"text",class:"block w-20 text-right",modelValue:a.amount,"onUpdate:modelValue":v=>a.amount=v},null,8,["modelValue","onUpdate:modelValue"])],512),[[f,t.all_amount_same===!1]])]),_:2},1024))),128))]),R,s("div",W,[l(g,{class:F(["",{"opacity-25":t.form.processing}]),disabled:t.form.processing},{default:p(()=>[q(h(n.buttonValue),1)]),_:1},8,["class","disabled"])])],32)])}const re=E(U,[["render",X]]);export{re as default};
