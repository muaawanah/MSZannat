import{A as i}from"./GridApp-ff022798.js";import{Z as c,r as t,o as l,c as f,a as e,w as o,F as p,b as m,e as s}from"./app-34468406.js";import{G as u}from"./GridViewCard-13a7b417.js";import{_}from"./_plugin-vue_export-helper-c27b6911.js";import"./Index-85bd2493.js";import"./ApplicationLogo-d7798735.js";import"./Index-14a51f7f.js";const h={components:{AppLayout:i,Head:c,GridViewCard:u},props:{data:{type:Object,default:{}}}},g={class:"w-full grid gap-2 grid-cols-2 md:gap-4 md:grid-cols-3 lg:grid-cols-4"};function b(a,w,x,V,y,C){const d=t("Head"),r=t("GridViewCard"),n=t("app-layout");return l(),f(p,null,[e(d,{title:"ড্যাশবোর্ড"}),e(n,{backHref:a.route("dashboard")},{default:o(()=>[m("div",g,[e(r,{href:a.route("expenses.create"),"icon-class":"fa-solid fa-hand-holding-dollar"},{default:o(()=>[s(" সাধারণ ব্যয় ")]),_:1},8,["href"]),e(r,{href:a.route("staff.index"),"icon-class":"fa-solid fa-money-bill-transfer"},{default:o(()=>[s(" স্টাফ বেতন ")]),_:1},8,["href"]),e(r,{href:a.route("expenses.index"),"icon-class":"fa-solid fa-list"},{default:o(()=>[s(" ব্যয় তালিকা ")]),_:1},8,["href"])])]),_:1},8,["backHref"])],64)}const A=_(h,[["render",b]]);export{A as default};
