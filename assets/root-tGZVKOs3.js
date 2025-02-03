import{u as f,d,r as i,j as t,O as y}from"./index-D7Fca6US.js";import{f as x,_ as g,M as S,L as w,S as j}from"./components-7EXf8YyU.js";import{u as k}from"./index-DlLtyYh7.js";/**
 * @remix-run/react v2.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */let a="positions";function M({getKey:e,...l}){let{isSpaMode:c}=x(),r=f(),u=d();k({getKey:e,storageKey:a});let p=i.useMemo(()=>{if(!e)return null;let s=e(r,u);return s!==r.key?s:null},[]);if(c)return null;let m=((s,h)=>{if(!window.history.state||!window.history.state.key){let o=Math.random().toString(32).slice(2);window.history.replaceState({key:o},"")}try{let n=JSON.parse(sessionStorage.getItem(s)||"{}")[h||window.history.state.key];typeof n=="number"&&window.scrollTo(0,n)}catch(o){console.error(o),sessionStorage.removeItem(s)}}).toString();return i.createElement("script",g({},l,{suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${m})(${JSON.stringify(a)}, ${JSON.stringify(p)})`}}))}const R=()=>[{rel:"preconnect",href:"https://fonts.googleapis.com"},{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"anonymous"},{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"}];function _({children:e}){return t.jsxs("html",{lang:"ru",children:[t.jsxs("head",{children:[t.jsx("meta",{charSet:"utf-8"}),t.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),t.jsx(S,{}),t.jsx(w,{})]}),t.jsxs("body",{children:[e,t.jsx(M,{}),t.jsx(j,{})]})]})}function v(){return t.jsx(y,{})}export{_ as Layout,v as default,R as links};
