import{A as n}from"./GridApp-7fc45828.js";import{Z as i,r as s,o as l,c as p,a as e,w as a,F as f,b as m,e as t}from"./app-ab311d13.js";import{G as u}from"./GridViewCard-66db2bf2.js";import{_}from"./_plugin-vue_export-helper-c27b6911.js";import"./Index-717d3e2b.js";import"./ApplicationLogo-0bad1abd.js";const h={components:{AppLayout:n,Head:i,GridViewCard:u},props:{data:{type:Object,default:{}}}},g={class:"w-full grid gap-2 grid-cols-2 md:gap-4 md:grid-cols-3 lg:grid-cols-4"};function v(o,w,V,b,k,y){const c=s("Head"),r=s("GridViewCard"),d=s("app-layout");return l(),p(f,null,[e(c,{title:"ড্যাশবোর্ড"}),e(d,{backHref:o.route("dashboard")},{default:a(()=>[m("div",g,[e(r,{href:o.route("sms-services.create"),"icon-class":"fa-solid fa-comment-dots"},{default:a(()=>[t(" সাধারণ বার্তা ")]),_:1},8,["href"]),e(r,{href:o.route("sms-services.create")+"?type=financial","icon-class":"fa-solid fa-comment-dollar"},{default:a(()=>[t(" ফিনানশিয়াল বার্তা ")]),_:1},8,["href"]),e(r,{href:o.route("sms-services.index"),"icon-class":"fa-solid fa-envelope-circle-check"},{default:a(()=>[t(" প্রেরিত বার্তা ")]),_:1},8,["href"])])]),_:1},8,["backHref"])],64)}const N=_(h,[["render",v]]);export{N as default};
