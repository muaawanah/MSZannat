import{V as x}from"./ValidationErrors-c644e5de.js";import{L as U}from"./Label-d26a6110.js";import{B as A}from"./Button-8bea5765.js";import{I as q}from"./Input-92f590ba.js";import{S}from"./Select-79da2c15.js";import{F as I}from"./FormHeading-3aa523d3.js";import{F as C}from"./FormGroup-db26f158.js";import{F as j}from"./FormSlotGroup-d2780747.js";import{r as h,o as n,c as i,a as t,b as l,w as r,n as H,d as D,e as b,F as _,f as c,t as f,g as y}from"./app-34468406.js";import{_ as F}from"./_plugin-vue_export-helper-c27b6911.js";import"./TrashIcon-39f39eaf.js";import"./PlusCircleIcon-5c2fc182.js";const B={components:{ValidationErrors:x,Label:U,Button:A,Input:q,Select:S,FormHeading:I,FormGroup:C,FormSlotGroup:j},props:{moduleAction:String,buttonValue:{type:String,default:"Save"},data:{type:Object,default:{}}},created(){this.present_address.divisions=this.data.divisions,this.present_address.districts=this.data.districts,this.present_address.areas=this.data.areas,this.permanent_address.divisions=this.data.divisions,this.permanent_address.districts=this.data.districts,this.permanent_address.areas=this.data.areas,this.moduleAction=="update"&&(this.form.father_info=this.data.student.fatherInfo,this.form.mother_info=this.data.student.motherInfo,this.form.guardian_info=this.data.student.guardianInfo,this.form.present_address.postoffice=this.data.student.presentAddress.postoffice,this.form.present_address.address=this.data.student.presentAddress.value,this.form.present_address.area=this.data.student.presentAddress.areaId,this.form.present_address.district=this.data.student.presentAddress.area.districtId,this.form.present_address.division=this.data.student.presentAddress.area.district.divisionId,this.form.permanent_address.postoffice=this.data.student.permanentAddress.postoffice,this.form.permanent_address.address=this.data.student.permanentAddress.value,this.form.permanent_address.area=this.data.student.permanentAddress.areaId,this.form.permanent_address.district=this.data.student.permanentAddress.area.districtId,this.form.permanent_address.division=this.data.student.permanentAddress.area.district.divisionId)},data(){return{present_address:{divisions:"",districts:"",postoffice:"",areas:""},permanent_address:{divisions:"",districts:"",postoffice:"",areas:""},form:this.$inertia.form({name:this.data.student.name,date_of_birth:this.data.student.dateOfBirth,birth_certificate:this.data.student.birthCertificate,gender:this.data.student.gender,blood_group:this.data.student.bloodGroup,father_info:{name:"",phone:"",occupation:"",relation:"Father"},mother_info:{name:"",phone:"",occupation:"",relation:"Mother"},guardian_type:this.moduleAction=="update"?this.data.student.guardianType:0,guardian_info:{name:"",phone:"",occupation:"",relation:""},is_same_address:this.moduleAction=="update"?this.data.student.isSameAddress:0,present_address:{division:"",district:"",area:"",address:""},permanent_address:{division:"",district:"",area:"",address:""},resident:this.data.student.resident})}},methods:{submit(){if(this.moduleAction=="store")return this.form.post(this.route("students.store"));if(this.moduleAction=="update")return this.form.put(this.route("students.update",this.data.student.id))},sameAsPresentHandler(u){this.form.is_same_address=u.target.checked},presentAddressDivisionSelectHandler(){this.form.present_address.division?this.present_address.districts=Object.values(this.data.districts).filter(u=>u.divisionId==this.form.present_address.division):this.present_address.districts=this.data.districts,this.form.present_address.district="",this.presentAddressDistrictSelectHandler()},presentAddressDistrictSelectHandler(){this.form.present_address.district?this.present_address.areas=Object.values(this.data.areas).filter(u=>u.districtId==this.form.present_address.district):this.present_address.areas=this.data.areas,this.form.present_address.area=""},permanentAddressDivisionSelectHandler(){this.form.permanent_address.division?this.permanent_address.districts=Object.values(this.data.districts).filter(u=>u.divisionId==this.form.permanent_address.division):this.permanent_address.districts=this.data.districts,this.form.permanent_address.district="",this.permanentAddressDistrictSelectHandler()},permanentAddressDistrictSelectHandler(){this.form.permanent_address.district?this.permanent_address.areas=Object.values(this.data.areas).filter(u=>u.districtId==this.form.permanent_address.district):this.permanent_address.areas=this.data.areas,this.form.permanent_address.area=""}}},O={class:"w-full max-w-3xl rounded border bg-white p-4 shadow"},G={class:"grid gap-x-2 gap-y-4 md:grid-cols-2"},N={class:"flex gap-2"},L=l("option",{value:""},"-- নির্বাচন করুন --",-1),E=l("option",{value:1},"ছেলে",-1),M=l("option",{value:2},"মেয়ে",-1),P=l("option",{value:""},"-- Select --",-1),T=["value"],z={class:"grid gap-x-2 gap-y-4 md:grid-cols-3"},J={class:"col-span-full flex items-center justify-center gap-3 md:justify-start"},K={class:"flex items-center gap-1"},Q=l("span",null,"পিতা",-1),R={class:"flex items-center gap-1"},W=l("span",null,"মাতা",-1),X={class:"flex items-center gap-1"},Y=l("span",null,"বৈধ অভিভাবক",-1),Z={key:0,class:"grid gap-2 md:grid-cols-3"},$={class:"grid gap-x-2 gap-y-4 md:grid-cols-3"},ee=l("option",{value:""},"-- নির্বাচন করুন --",-1),se=["value"],te=l("option",{value:""},"-- নির্বাচন করুন --",-1),de=["value"],re=l("option",{value:""},"-- নির্বাচন করুন --",-1),le=["value"],oe={class:"col-span-full flex items-center justify-center gap-3 md:justify-start"},ae={class:"flex items-center justify-center gap-1"},ne=l("span",null,"বর্তমান ও স্থায়ী ঠিকানা একই",-1),ie={key:0,class:"grid gap-x-2 gap-y-4 md:grid-cols-3"},ue=l("option",{value:""},"-- নির্বাচন করুন --",-1),me=["value"],fe=l("option",{value:""},"-- নির্বাচন করুন --",-1),pe=["value"],_e=l("option",{value:""},"-- নির্বাচন করুন --",-1),ce=["value"],he={class:"grid gap-x-2 gap-y-4 md:grid-cols-3"},be={class:"col-span-full flex items-center justify-center gap-3 md:justify-start"},ge={class:"flex items-center gap-1"},Ve=l("span",null,"আবাসিক",-1),ve={class:"flex items-center gap-1"},ye=l("span",null,"অনাবাসিক",-1),ke={class:"flex items-center gap-1"},we=l("span",null,"ডে-কেয়ার",-1),xe={class:"flex items-center gap-1"},Ue=l("span",null,"সেমি-আবাসিক",-1),Ae=l("hr",{class:"my-4 w-full"},null,-1),qe={class:"flex items-center justify-end"};function Se(u,d,V,Ie,s,p){const k=h("validation-errors"),g=h("form-heading"),a=h("Input"),o=h("form-group"),m=h("Select"),w=h("Button");return n(),i("div",O,[t(k,{class:"mb-4"}),l("form",{onSubmit:d[31]||(d[31]=D((...e)=>p.submit&&p.submit(...e),["prevent"])),class:""},[t(g,{class:"mb-2"},{default:r(()=>[b("ব্যক্তিগত তথ্য")]),_:1}),l("div",G,[t(o,{class:"w-full",label:"শিক্ষার্থীর নাম"},{default:r(()=>[t(a,{type:"text",class:"block w-full",modelValue:s.form.name,"onUpdate:modelValue":d[0]||(d[0]=e=>s.form.name=e),required:""},null,8,["modelValue"])]),_:1}),t(o,{class:"w-full",label:"জন্ম তারিখ"},{default:r(()=>[t(a,{type:"date",class:"block w-full",modelValue:s.form.date_of_birth,"onUpdate:modelValue":d[1]||(d[1]=e=>s.form.date_of_birth=e),required:""},null,8,["modelValue"])]),_:1}),t(o,{class:"w-full",label:"জন্ম নিবন্ধন নাম্বার"},{default:r(()=>[t(a,{type:"number",class:"block w-full",modelValue:s.form.birth_certificate,"onUpdate:modelValue":d[2]||(d[2]=e=>s.form.birth_certificate=e)},null,8,["modelValue"])]),_:1}),l("div",N,[t(o,{class:"flex-1",label:"লিঙ্গ"},{default:r(()=>[t(m,{class:"block w-full",modelValue:s.form.gender,"onUpdate:modelValue":d[3]||(d[3]=e=>s.form.gender=e),required:""},{default:r(()=>[L,E,M]),_:1},8,["modelValue"])]),_:1}),t(o,{class:"flex-1",label:"রক্তের গ্রুপ"},{default:r(()=>[t(m,{class:"block w-full",modelValue:s.form.blood_group,"onUpdate:modelValue":d[4]||(d[4]=e=>s.form.blood_group=e)},{default:r(()=>[P,(n(!0),i(_,null,c(V.data.bloodGroups,(e,v)=>(n(),i("option",{key:v,value:v},f(e),9,T))),128))]),_:1},8,["modelValue"])]),_:1})]),t(o,{class:"col-span-full grid gap-2 rounded-md border border-dashed border-gray-300 px-2 py-2 md:grid-cols-3"},{default:r(()=>[t(o,{class:"w-full",label:"পিতার নাম"},{default:r(()=>[t(a,{type:"text",class:"block w-full",modelValue:s.form.father_info.name,"onUpdate:modelValue":d[5]||(d[5]=e=>s.form.father_info.name=e),required:""},null,8,["modelValue"])]),_:1}),t(o,{class:"w-full",label:"ফোন"},{default:r(()=>[t(a,{type:"number",class:"block w-full",modelValue:s.form.father_info.phone,"onUpdate:modelValue":d[6]||(d[6]=e=>s.form.father_info.phone=e)},null,8,["modelValue"])]),_:1}),t(o,{class:"w-full",label:"পেশা"},{default:r(()=>[t(a,{type:"text",class:"block w-full",modelValue:s.form.father_info.occupation,"onUpdate:modelValue":d[7]||(d[7]=e=>s.form.father_info.occupation=e)},null,8,["modelValue"])]),_:1})]),_:1}),t(o,{class:"col-span-full grid gap-2 rounded-md border border-dashed border-gray-300 px-2 py-2 md:grid-cols-3"},{default:r(()=>[t(o,{class:"w-full",label:"মাতার নাম"},{default:r(()=>[t(a,{type:"text",class:"block w-full",modelValue:s.form.mother_info.name,"onUpdate:modelValue":d[8]||(d[8]=e=>s.form.mother_info.name=e),required:""},null,8,["modelValue"])]),_:1}),t(o,{class:"w-full",label:"ফোন"},{default:r(()=>[t(a,{type:"number",class:"block w-full",modelValue:s.form.mother_info.phone,"onUpdate:modelValue":d[9]||(d[9]=e=>s.form.mother_info.phone=e)},null,8,["modelValue"])]),_:1}),t(o,{class:"w-full",label:"পেশা"},{default:r(()=>[t(a,{type:"text",class:"block w-full",modelValue:s.form.mother_info.occupation,"onUpdate:modelValue":d[10]||(d[10]=e=>s.form.mother_info.occupation=e)},null,8,["modelValue"])]),_:1})]),_:1})]),t(g,{class:"mt-6 mb-2"},{default:r(()=>[b("অভিভাবকের তথ্য")]),_:1}),l("div",z,[t(o,{class:"col-span-full grid gap-2 rounded-md border border-dashed border-gray-300 px-2 py-2"},{default:r(()=>[l("div",J,[l("label",K,[t(a,{modelValue:s.form.guardian_type,"onUpdate:modelValue":d[11]||(d[11]=e=>s.form.guardian_type=e),type:"radio",name:"guardian_info_type",value:1,checked:s.form.guardian_type==1,required:""},null,8,["modelValue","checked"]),Q]),l("label",R,[t(a,{modelValue:s.form.guardian_type,"onUpdate:modelValue":d[12]||(d[12]=e=>s.form.guardian_type=e),type:"radio",name:"guardian_info_type",value:2,checked:s.form.guardian_type==2,required:""},null,8,["modelValue","checked"]),W]),l("label",X,[t(a,{modelValue:s.form.guardian_type,"onUpdate:modelValue":d[13]||(d[13]=e=>s.form.guardian_type=e),type:"radio",name:"guardian_info_type",value:3,checked:s.form.guardian_type==3,required:""},null,8,["modelValue","checked"]),Y])]),s.form.guardian_type==3?(n(),i("div",Z,[t(o,{class:"w-full",label:"অভিভাবকের নাম"},{default:r(()=>[t(a,{type:"text",class:"block w-full",modelValue:s.form.guardian_info.name,"onUpdate:modelValue":d[14]||(d[14]=e=>s.form.guardian_info.name=e),required:""},null,8,["modelValue"])]),_:1}),t(o,{class:"w-full",label:"ফোন"},{default:r(()=>[t(a,{type:"number",class:"block w-full",modelValue:s.form.guardian_info.phone,"onUpdate:modelValue":d[15]||(d[15]=e=>s.form.guardian_info.phone=e)},null,8,["modelValue"])]),_:1}),t(o,{class:"w-full",label:"শিক্ষাথীর সাথে সম্পর্ক"},{default:r(()=>[t(a,{type:"text",class:"block w-full",modelValue:s.form.guardian_info.relation,"onUpdate:modelValue":d[16]||(d[16]=e=>s.form.guardian_info.relation=e)},null,8,["modelValue"])]),_:1})])):y("",!0)]),_:1})]),t(g,{class:"mt-6 mb-2"},{default:r(()=>[b("বর্তমান ঠিকানা")]),_:1}),t(o,{class:"col-span-full grid gap-2 rounded-md border border-dashed border-gray-300 px-2 pt-2 pb-2"},{default:r(()=>[l("div",$,[t(o,{label:"বিভাগ"},{default:r(()=>[t(m,{class:"block w-full",modelValue:s.form.present_address.division,"onUpdate:modelValue":d[17]||(d[17]=e=>s.form.present_address.division=e),onChange:p.presentAddressDivisionSelectHandler,required:""},{default:r(()=>[ee,(n(!0),i(_,null,c(s.present_address.divisions,e=>(n(),i("option",{key:e.id,value:e.id},f(e.name),9,se))),128))]),_:1},8,["modelValue","onChange"])]),_:1}),t(o,{label:"জেলা"},{default:r(()=>[t(m,{class:"block w-full",modelValue:s.form.present_address.district,"onUpdate:modelValue":d[18]||(d[18]=e=>s.form.present_address.district=e),onChange:p.presentAddressDistrictSelectHandler,required:""},{default:r(()=>[te,(n(!0),i(_,null,c(s.present_address.districts,e=>(n(),i("option",{key:e.id,value:e.id},f(e.name),9,de))),128))]),_:1},8,["modelValue","onChange"])]),_:1}),t(o,{label:"উপজেলা/থানা"},{default:r(()=>[t(m,{class:"block w-full",modelValue:s.form.present_address.area,"onUpdate:modelValue":d[19]||(d[19]=e=>s.form.present_address.area=e)},{default:r(()=>[re,(n(!0),i(_,null,c(s.present_address.areas,e=>(n(),i("option",{key:e.id,value:e.id,required:""},f(e.name),9,le))),128))]),_:1},8,["modelValue"])]),_:1}),t(o,{label:"পোস্ট অফিস",class:"col-span-1"},{default:r(()=>[t(a,{type:"text",class:"block w-full",modelValue:s.form.present_address.postoffice,"onUpdate:modelValue":d[20]||(d[20]=e=>s.form.present_address.postoffice=e),required:""},null,8,["modelValue"])]),_:1}),t(o,{label:"বাড়ি নং, রোড নং, গ্রাম/মহল্লা",class:"col-span-2"},{default:r(()=>[t(a,{type:"text",class:"block w-full",modelValue:s.form.present_address.address,"onUpdate:modelValue":d[21]||(d[21]=e=>s.form.present_address.address=e),required:""},null,8,["modelValue"])]),_:1})])]),_:1}),t(g,{class:"mt-6 mb-2"},{default:r(()=>[b("স্থায়ী ঠিকানা")]),_:1}),t(o,{class:"col-span-full grid gap-2 rounded-md border border-dashed border-gray-300 px-2 pt-2 pb-2"},{default:r(()=>[l("div",oe,[l("label",ae,[t(a,{onChange:p.sameAsPresentHandler,type:"checkbox",checked:s.form.is_same_address},null,8,["onChange","checked"]),ne])]),s.form.is_same_address?y("",!0):(n(),i("div",ie,[t(o,{label:"বিভাগ"},{default:r(()=>[t(m,{class:"block w-full",modelValue:s.form.permanent_address.division,"onUpdate:modelValue":d[22]||(d[22]=e=>s.form.permanent_address.division=e),onChange:p.permanentAddressDivisionSelectHandler,required:""},{default:r(()=>[ue,(n(!0),i(_,null,c(s.permanent_address.divisions,e=>(n(),i("option",{key:e.id,value:e.id},f(e.name),9,me))),128))]),_:1},8,["modelValue","onChange"])]),_:1}),t(o,{label:"জেলা"},{default:r(()=>[t(m,{class:"block w-full",modelValue:s.form.permanent_address.district,"onUpdate:modelValue":d[23]||(d[23]=e=>s.form.permanent_address.district=e),onChange:p.permanentAddressDistrictSelectHandler,required:""},{default:r(()=>[fe,(n(!0),i(_,null,c(s.permanent_address.districts,e=>(n(),i("option",{key:e.id,value:e.id},f(e.name),9,pe))),128))]),_:1},8,["modelValue","onChange"])]),_:1}),t(o,{label:"উপজেলা/থানা"},{default:r(()=>[t(m,{class:"block w-full",modelValue:s.form.permanent_address.area,"onUpdate:modelValue":d[24]||(d[24]=e=>s.form.permanent_address.area=e),required:""},{default:r(()=>[_e,(n(!0),i(_,null,c(s.permanent_address.areas,e=>(n(),i("option",{key:e.id,value:e.id},f(e.name),9,ce))),128))]),_:1},8,["modelValue"])]),_:1}),t(o,{label:"পোস্ট অফিস",class:"col-span-1"},{default:r(()=>[t(a,{type:"text",class:"block w-full",modelValue:s.form.permanent_address.postoffice,"onUpdate:modelValue":d[25]||(d[25]=e=>s.form.permanent_address.postoffice=e),required:""},null,8,["modelValue"])]),_:1}),t(o,{label:"বাড়ি নং, রোড নং, গ্রাম/মহল্লা",class:"col-span-2"},{default:r(()=>[t(a,{type:"text",class:"block w-full",modelValue:s.form.permanent_address.address,"onUpdate:modelValue":d[26]||(d[26]=e=>s.form.permanent_address.address=e),required:""},null,8,["modelValue"])]),_:1})]))]),_:1}),t(g,{class:"mt-6 mb-2"},{default:r(()=>[b("শিক্ষার্থীর ধরন")]),_:1}),l("div",he,[t(o,{class:"col-span-full grid gap-2 rounded-md border border-dashed border-gray-300 px-2 py-2"},{default:r(()=>[l("div",be,[l("label",ge,[t(a,{modelValue:s.form.resident,"onUpdate:modelValue":d[27]||(d[27]=e=>s.form.resident=e),type:"radio",name:"resident",value:1,checked:s.form.resident==1,required:""},null,8,["modelValue","checked"]),Ve]),l("label",ve,[t(a,{modelValue:s.form.resident,"onUpdate:modelValue":d[28]||(d[28]=e=>s.form.resident=e),type:"radio",name:"resident",value:2,checked:s.form.resident==2,required:""},null,8,["modelValue","checked"]),ye]),l("label",ke,[t(a,{modelValue:s.form.resident,"onUpdate:modelValue":d[29]||(d[29]=e=>s.form.resident=e),type:"radio",name:"resident",value:3,checked:s.form.resident==3,required:""},null,8,["modelValue","checked"]),we]),l("label",xe,[t(a,{modelValue:s.form.resident,"onUpdate:modelValue":d[30]||(d[30]=e=>s.form.resident=e),type:"radio",name:"resident",value:3,checked:s.form.resident==3,required:""},null,8,["modelValue","checked"]),Ue])])]),_:1})]),Ae,l("div",qe,[t(w,{class:H(["",{"opacity-25":s.form.processing}]),disabled:s.form.processing},{default:r(()=>[b(f(V.buttonValue),1)]),_:1},8,["class","disabled"])])],32)])}const Pe=F(B,[["render",Se]]);export{Pe as default};
