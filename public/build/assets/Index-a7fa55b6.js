import{A as i}from"./GridApp-7fc45828.js";import{Z as n,r as a,o as l,c as p,a as e,w as s,F as f,b as m,e as r}from"./app-ab311d13.js";import{G as _}from"./GridViewCard-66db2bf2.js";import{_ as u}from"./_plugin-vue_export-helper-c27b6911.js";import"./Index-717d3e2b.js";import"./ApplicationLogo-0bad1abd.js";const g={components:{AppLayout:i,Head:n,GridViewCard:_},props:{data:{type:Object,default:{}}}},h={class:"w-full grid gap-2 grid-cols-2 md:gap-4 md:grid-cols-3 lg:grid-cols-4"};function w(o,V,b,k,C,H){const c=a("Head"),t=a("GridViewCard"),d=a("app-layout");return l(),p(f,null,[e(c,{title:"ড্যাশবোর্ড"}),e(d,{backHref:o.route("dashboard")},{default:s(()=>[m("div",h,[e(t,{href:o.route("admissions.admission"),"icon-class":"fa-solid fa-file-circle-plus",class:"lg:col-start-2"},{default:s(()=>[r(" ভর্তির আবেদন ")]),_:1},8,["href"]),e(t,{href:o.route("admissions.index"),"icon-class":"fa-solid fa-list-check"},{default:s(()=>[r(" আবেদন তালিকা ")]),_:1},8,["href"])])]),_:1},8,["backHref"])],64)}const v=u(g,[["render",w]]);export{v as default};
