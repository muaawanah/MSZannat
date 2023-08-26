import{V as _}from"./ValidationErrors-7e30df70.js";import{B as b}from"./Button-415165b1.js";import{I as y}from"./Input-372a1eaa.js";import{S as k}from"./Select-70604ac4.js";import{F as x}from"./FormGroup-4756c19a.js";import{T as v}from"./Textarea-aa808472.js";import{r as l,o as m,c as d,a as o,b as f,w as n,n as V,d as w,e as T,t as B}from"./app-ab311d13.js";import{_ as S}from"./_plugin-vue_export-helper-c27b6911.js";import"./Label-aac4f242.js";const z={components:{ValidationErrors:_,Button:b,Input:y,Select:k,FormGroup:x,Textarea:v},props:{moduleAction:String,buttonValue:{type:String,default:"Save"},data:{type:Object,default:{}}},created(){if(this.data.setting.key==="youtube"||this.data.setting.key==="facebook"){const a=this.data.setting.value.split("|");this.name=(a[0]||"").trim(),this.link=(a[1]||"").trim()}},data(){return{form:this.$inertia.form({key:this.data.setting.key||"",name:this.data.setting.name||"",value:this.data.setting.value||""}),name:"",link:""}},methods:{submit(){if((this.data.setting.key==="youtube"||this.data.setting.key==="facebook")&&(this.form.value=this.name+"|"+this.link),this.moduleAction=="store")return this.form.post(this.route("settings.store"));if(this.moduleAction=="update")return this.form.put(this.route("settings.update",this.data.setting.id))},resizeTextarea(a){let e=a.target;e.style.overflow="hidden",e.style.height=e.scrollHeight+"px"}}},F={class:"w-full max-w-xl rounded border bg-white p-4 shadow"},C={key:0,class:"grid gap-4"},I={key:1,class:"grid gap-4"},N=f("hr",{class:"my-4 w-full"},null,-1),A={class:"flex items-center justify-end"};function U(a,e,r,j,t,i){const p=l("validation-errors"),c=l("Input"),u=l("form-group"),h=l("Textarea"),g=l("Button");return m(),d("div",F,[o(p,{class:"mb-4"}),f("form",{onSubmit:e[3]||(e[3]=w((...s)=>i.submit&&i.submit(...s),["prevent"])),class:""},[r.data.setting.key==="youtube"||r.data.setting.key==="facebook"?(m(),d("div",C,[o(u,{class:"w-full",label:"Name"},{default:n(()=>[o(c,{type:"text",class:"block w-full",modelValue:t.name,"onUpdate:modelValue":e[0]||(e[0]=s=>t.name=s),required:""},null,8,["modelValue"])]),_:1}),o(u,{class:"w-full",label:"Link"},{default:n(()=>[o(c,{type:"text",class:"block w-full",modelValue:t.link,"onUpdate:modelValue":e[1]||(e[1]=s=>t.link=s),required:""},null,8,["modelValue"])]),_:1})])):(m(),d("div",I,[o(u,{class:"w-full",label:t.form.name},{default:n(()=>[o(h,{class:"block h-full min-h-max w-full resize-none text-sm md:text-lg",modelValue:t.form.value,"onUpdate:modelValue":e[2]||(e[2]=s=>t.form.value=s),onKeyup:i.resizeTextarea,onFocus:i.resizeTextarea},null,8,["modelValue","onKeyup","onFocus"])]),_:1},8,["label"])])),N,f("div",A,[o(g,{class:V(["",{"opacity-25":t.form.processing}]),disabled:t.form.processing},{default:n(()=>[T(B(r.buttonValue),1)]),_:1},8,["class","disabled"])])],32)])}const J=S(z,[["render",U]]);export{J as default};
