var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,s=(t,a,i)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[a]=i;"undefined"!=typeof require&&require;import{c as o}from"./mobile.53c015d4.js";import{a as n,A as p,B as c,C as u,r as g,o as d,e as m,g as b,j as f,k as y,F as h,i as j,c as v,t as w}from"./vendor.ab88405c.js";import"./index.8be0a7bb.js";const{createDemo:_}=o("swiper");var O=_({props:{},setup(){const e=n({page:2,page2:0,page3:0,page4:0,current:1,list:["https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg","https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg","https://storage.360buyimg.com/jdc-article/welcomenutui.jpg","https://storage.360buyimg.com/jdc-article/fristfabu.jpg"]});return o=((e,t)=>{for(var a in t||(t={}))r.call(t,a)&&s(e,a,t[a]);if(i)for(var a of i(t))l.call(t,a)&&s(e,a,t[a]);return e})({},p(e)),t(o,a({change:t=>{e.current=t+1}}));var o}});c("data-v-76e9da9c");const x={class:"demo"},k=b("h2",null,"基本用法",-1),P={class:"demo-box"},I=["src"],C=b("h2",null,"自定义大小",-1),q={class:"demo-box"},D=["src"],N=b("h2",null,"自定义指示器",-1),U={class:"demo-box"},A=["src"],B={class:"page"},E=b("h2",null,"垂直方向",-1),F={class:"demo-box"},S=["src"];u(),O.render=function(e,t,a,i,r,l){const s=g("nut-swiper-item"),o=g("nut-swiper");return d(),m("div",x,[k,b("view",P,[f(o,{"init-page":e.page,"pagination-visible":!0,"pagination-color":"#426543","auto-play":"2000"},{default:y((()=>[(d(!0),m(h,null,j(e.list,(e=>(d(),v(s,{key:e},{default:y((()=>[b("img",{src:e,alt:""},null,8,I)])),_:2},1024)))),128))])),_:1},8,["init-page"])]),C,b("view",q,[f(o,{"init-page":e.page2,loop:!1,width:"300"},{default:y((()=>[(d(!0),m(h,null,j(e.list,(e=>(d(),v(s,{key:e},{default:y((()=>[b("img",{src:e,alt:""},null,8,D)])),_:2},1024)))),128))])),_:1},8,["init-page"])]),N,b("view",U,[f(o,{"init-page":e.page3,loop:!0,onChange:e.change},{page:y((()=>[b("div",B,w(e.current)+"/4 ",1)])),default:y((()=>[(d(!0),m(h,null,j(e.list,(e=>(d(),v(s,{key:e},{default:y((()=>[b("img",{src:e,alt:""},null,8,A)])),_:2},1024)))),128))])),_:1},8,["init-page","onChange"])]),E,b("view",F,[f(o,{"init-page":e.page4,loop:!0,"auto-play":"3000",direction:"vertical",height:"150","pagination-visible":!0,style:{height:"150px"}},{default:y((()=>[(d(!0),m(h,null,j(e.list,(e=>(d(),v(s,{key:e},{default:y((()=>[b("img",{src:e,alt:""},null,8,S)])),_:2},1024)))),128))])),_:1},8,["init-page"])])])},O.__scopeId="data-v-76e9da9c";export{O as default};