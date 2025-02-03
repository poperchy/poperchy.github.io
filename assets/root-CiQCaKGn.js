import{u as y,d as h,r as n,j as t,O as x}from"./index-D7Fca6US.js";import{f,_ as S,M as w,L as j,S as g}from"./components-7EXf8YyU.js";import{u as M}from"./index-DlLtyYh7.js";/**
 * @remix-run/react v2.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */let a="positions";function k({getKey:e,...l}){let{isSpaMode:u}=f(),o=y(),c=h();M({getKey:e,storageKey:a});let d=n.useMemo(()=>{if(!e)return null;let s=e(o,c);return s!==o.key?s:null},[]);if(u)return null;let p=((s,m)=>{if(!window.history.state||!window.history.state.key){let r=Math.random().toString(32).slice(2);window.history.replaceState({key:r},"")}try{let i=JSON.parse(sessionStorage.getItem(s)||"{}")[m||window.history.state.key];typeof i=="number"&&window.scrollTo(0,i)}catch(r){console.error(r),sessionStorage.removeItem(s)}}).toString();return n.createElement("script",S({},l,{suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${p})(${JSON.stringify(a)}, ${JSON.stringify(d)})`}}))}function _({children:e}){return t.jsxs("html",{lang:"ru",children:[t.jsxs("head",{children:[t.jsx("meta",{charSet:"utf-8"}),t.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),t.jsx(w,{}),t.jsx(j,{})]}),t.jsxs("body",{suppressHydrationWarning:!0,children:[e,t.jsx(k,{}),t.jsx(g,{})]})]})}function v(){return t.jsx(x,{})}export{_ as Layout,v as default};
