import{u as c,r as a,j as t}from"./index-CkgdGYXC.js";import{a as d,A as h}from"./config--onS6N-O.js";const l="_list_1wskg_1",u={list:l},p=async s=>{const r={headers:{Authorization:`Bearer ${h}`}};return d.get(`https://api.themoviedb.org/3/movie/${s}/reviews`,r)},m=()=>{const{movieId:s}=c(),[r,i]=a.useState([]);a.useEffect(()=>{p(s).then(({data:e})=>{i(e.results)})},[s]);function n(e){const o=new Date(e);return`${String(o.getUTCDate()).padStart(2,"0")}/${String(o.getUTCMonth()+1).padStart(2,"0")}/${o.getUTCFullYear()}`}return t.jsx("div",{children:t.jsx("ul",{className:u.list,children:r.length?r.map(e=>t.jsxs("li",{children:[t.jsxs("p",{children:["Author: ",e.author]}),t.jsxs("p",{children:["Posted: ",n(e.created_at)]}),t.jsx("p",{children:e.content})]},e.id)):t.jsx("p",{children:"We don't have any reviews for this movie"})})})};export{m as default};
