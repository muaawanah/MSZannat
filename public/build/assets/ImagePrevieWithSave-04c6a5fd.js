import{y as u,o as i,c as r,n as c,b as l,g as o,e as p,t as h}from"./app-ab311d13.js";import{_ as g}from"./_plugin-vue_export-helper-c27b6911.js";const m={components:{},props:{imageUrl:{type:String,default:null},ratioClass:{type:String,default:"aspect-video"},option:{type:String,default:null},id:{type:Number,default:0},type:{type:Number,default:1},width:{type:Number,default:300},height:{type:Number,default:300}},created(){this.image=this.imageUrl,this.imagePreview=this.imageUrl},data(){return{imagePreview:null,image:null,file:null,edit:!1,status:0}},methods:{preview(t){const e=t.target.files[0],d=URL.createObjectURL(e);this.file=e,this.edit=!0,this.imagePreview=d},cancel(){this.imagePreview=null,this.edit=!1,this.file=null,setTimeout(()=>{this.imagePreview=this.image},400)},save(){this.status=2;const t=new FormData;t.append("image",this.file),t.append("option",this.option),t.append("id",this.id),t.append("type",this.type),t.append("width",this.width),t.append("height",this.height),u.post("/image-upload-get-link",t).then(e=>{this.edit=!1,this.file=null,this.status=1,setTimeout(()=>{this.status=0},2e3)}).catch(e=>{console.log(e)})}}},b={class:"grid w-full max-w-xs gap-3 border p-3"},f=["src"],v={key:1,class:"flex items-center justify-center print:hidden"},y={key:0,class:"flex gap-2 bg-brand-600 px-4 py-2 font-bold text-white"},x=l("span",null,"✓",-1),w={key:1,class:"flex gap-2 bg-indigo-500 px-4 py-2 font-bold text-white"},_=l("span",{class:"animate-spin font-bold"},"⁛",-1),k={key:2,class:"flex items-center justify-center gap-4 print:hidden"},P={key:0,class:"cursor-pointer border border-brand-600 px-4 py-2 text-brand-600 hover:bg-brand-600 hover:text-white"};function C(t,e,d,N,s,a){return i(),r("div",b,[s.imagePreview?(i(),r("div",{key:0,class:c(["relative border",d.ratioClass])},[l("img",{src:s.imagePreview,class:"h-full w-full object-cover"},null,8,f),l("div",{class:c(["absolute inset-0 border border-dashed border-gray-600 bg-transparent",d.ratioClass])},null,2)],2)):o("",!0),s.status?(i(),r("div",v,[s.status===1?(i(),r("div",y,[x,p(" Success ")])):o("",!0),s.status===2?(i(),r("div",w,[_,p(" Processing ")])):o("",!0)])):(i(),r("div",k,[s.edit?o("",!0):(i(),r("label",P,[p(h(s.imagePreview?"পরিবর্তন":"আপলোড")+" ",1),l("input",{type:"file",class:"hidden",accept:"image/*",onInput:e[0]||(e[0]=(...n)=>a.preview&&a.preview(...n))},null,32)])),s.edit?(i(),r("button",{key:1,type:"button",onClick:e[1]||(e[1]=(...n)=>a.cancel&&a.cancel(...n)),class:"w-1/2 text-sm cursor-pointer border border-rose-500 px-1 py-2 text-rose-500 hover:bg-rose-500 hover:text-white"}," Cancel ")):o("",!0),s.edit?(i(),r("button",{key:2,type:"button",onClick:e[2]||(e[2]=(...n)=>a.save&&a.save(...n)),class:"w-1/2 text-sm cursor-pointer border border-brand-500 px-1 py-2 text-brand-600 hover:bg-brand-600 hover:text-white"}," Save ")):o("",!0)]))])}const j=g(m,[["render",C]]);export{j as I};
