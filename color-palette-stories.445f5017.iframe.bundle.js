"use strict";(self.webpackChunkgutenberg=self.webpackChunkgutenberg||[]).push([[9576],{"./node_modules/react-colorful/dist/index.module.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W_:()=>Ce,ef:()=>ge});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function u(){return(u=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}function c(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r.indexOf(t=a[o])>=0||(n[t]=e[t]);return n}function s(e){var t=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(e),o=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)((function(e){t.current&&t.current(e)}));return t.current=e,o.current}var i=function(e,r,t){return void 0===r&&(r=0),void 0===t&&(t=1),e>t?t:e<r?r:e},f=function(e){return"touches"in e},v=function(e,r){var t=e.getBoundingClientRect(),o=f(r)?r.touches[0]:r;return{left:i((o.pageX-(t.left+window.pageXOffset))/t.width),top:i((o.pageY-(t.top+window.pageYOffset))/t.height)}},d=function(e){!f(e)&&e.preventDefault()},h=react__WEBPACK_IMPORTED_MODULE_0__.memo((function(n){var a=n.onMove,l=n.onKey,i=c(n,["onMove","onKey"]),h=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),m=s(a),g=s(l),p=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1),b=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){var e=function(e){d(e),(f(e)?e.touches.length>0:e.buttons>0)&&h.current?m(v(h.current,e)):t(!1)},r=function(){return t(!1)};function t(t){var o=p.current,n=t?self.addEventListener:self.removeEventListener;n(o?"touchmove":"mousemove",e),n(o?"touchend":"mouseup",r)}return[function(e){var r=e.nativeEvent,o=h.current;o&&(d(r),!function(e,r){return r&&!f(e)}(r,p.current)&&o&&(p.current=f(r),o.focus(),m(v(o,r)),t(!0)))},function(e){var r=e.which||e.keyCode;r<37||r>40||(e.preventDefault(),g({left:39===r?.05:37===r?-.05:0,top:40===r?.05:38===r?-.05:0}))},t]}),[g,m]),_=b[0],C=b[1],x=b[2];return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){return x}),[x]),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",u({},i,{onTouchStart:_,onMouseDown:_,className:"react-colorful__interactive",ref:h,onKeyDown:C,tabIndex:0,role:"slider"}))})),m=function(e){return e.filter(Boolean).join(" ")},g=function(r){var t=r.color,o=r.left,n=r.top,a=void 0===n?.5:n,l=m(["react-colorful__pointer",r.className]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:l,style:{top:100*a+"%",left:100*o+"%"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"react-colorful__pointer-fill",style:{backgroundColor:t}}))},p=function(e,r,t){return void 0===r&&(r=0),void 0===t&&(t=Math.pow(10,r)),Math.round(t*e)/t},M=(Math.PI,function(e){var r=e.s,t=e.v,o=e.a,n=(200-r)*t/100;return{h:p(e.h),s:p(n>0&&n<200?r*t/100/(n<=100?n:200-n)*100:0),l:p(n/2),a:p(o,2)}}),N=function(e){var r=M(e);return"hsl("+r.h+", "+r.s+"%, "+r.l+"%)"},w=function(e){var r=M(e);return"hsla("+r.h+", "+r.s+"%, "+r.l+"%, "+r.a+")"},y=function(e){var r=e.h,t=e.s,o=e.v,n=e.a;r=r/360*6,t/=100,o/=100;var a=Math.floor(r),l=o*(1-t),u=o*(1-(r-a)*t),c=o*(1-(1-r+a)*t),s=a%6;return{r:p(255*[o,u,l,l,c,o][s]),g:p(255*[c,o,o,u,l,l][s]),b:p(255*[l,l,c,o,o,u][s]),a:p(n,2)}},O=function(e){var r=/rgba?\(?\s*(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(e);return r?z({r:Number(r[1])/(r[2]?100/255:1),g:Number(r[3])/(r[4]?100/255:1),b:Number(r[5])/(r[6]?100/255:1),a:void 0===r[7]?1:Number(r[7])/(r[8]?100:1)}):{h:0,s:0,v:0,a:1}},I=O,z=function(e){var r=e.r,t=e.g,o=e.b,n=e.a,a=Math.max(r,t,o),l=a-Math.min(r,t,o),u=l?a===r?(t-o)/l:a===t?2+(o-r)/l:4+(r-t)/l:0;return{h:p(60*(u<0?u+6:u)),s:p(a?l/a*100:0),v:p(a/255*100),a:n}},K=react__WEBPACK_IMPORTED_MODULE_0__.memo((function(r){var t=r.hue,o=r.onChange,n=m(["react-colorful__hue",r.className]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:n},react__WEBPACK_IMPORTED_MODULE_0__.createElement(h,{onMove:function(e){o({h:360*e.left})},onKey:function(e){o({h:i(t+360*e.left,0,360)})},"aria-label":"Hue","aria-valuetext":p(t)},react__WEBPACK_IMPORTED_MODULE_0__.createElement(g,{className:"react-colorful__hue-pointer",left:t/360,color:N({h:t,s:100,v:100,a:1})})))})),A=react__WEBPACK_IMPORTED_MODULE_0__.memo((function(r){var t=r.hsva,o=r.onChange,n={backgroundColor:N({h:t.h,s:100,v:100,a:1})};return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"react-colorful__saturation",style:n},react__WEBPACK_IMPORTED_MODULE_0__.createElement(h,{onMove:function(e){o({s:100*e.left,v:100-100*e.top})},onKey:function(e){o({s:i(t.s+100*e.left,0,100),v:i(t.v-100*e.top,0,100)})},"aria-label":"Color","aria-valuetext":"Saturation "+p(t.s)+"%, Brightness "+p(t.v)+"%"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(g,{className:"react-colorful__saturation-pointer",top:1-t.v/100,left:t.s/100,color:N(t)})))})),L=function(e,r){if(e===r)return!0;for(var t in e)if(e[t]!==r[t])return!1;return!0},D=function(e,r){return e.replace(/\s/g,"")===r.replace(/\s/g,"")};function F(e,t,l){var u=s(l),c=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((function(){return e.toHsva(t)})),i=c[0],f=c[1],v=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({color:t,hsva:i});(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){if(!e.equal(t,v.current.color)){var r=e.toHsva(t);v.current={hsva:r,color:t},f(r)}}),[t,e]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){var r;L(i,v.current.hsva)||e.equal(r=e.fromHsva(i),v.current.color)||(v.current={hsva:i,color:r},u(r))}),[i,e,u]);var d=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(e){f((function(r){return Object.assign({},r,e)}))}),[]);return[i,d]}var S,P,T="undefined"!=typeof window?react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect:react__WEBPACK_IMPORTED_MODULE_0__.useEffect,$=function(){T((function(){if("undefined"!=typeof document&&!P){(P=document.createElement("style")).innerHTML='.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>\')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}';var e=S||__webpack_require__.nc;e&&P.setAttribute("nonce",e),document.head.appendChild(P)}}),[])},R=function(r){var t=r.className,o=r.colorModel,n=r.color,a=void 0===n?o.defaultColor:n,l=r.onChange,s=c(r,["className","colorModel","color","onChange"]);$();var i=F(o,a,l),f=i[0],v=i[1],d=m(["react-colorful",t]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",u({},s,{className:d}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(A,{hsva:f,onChange:v}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(K,{hue:f.h,onChange:v,className:"react-colorful__last-control"}))},Q=function(r){var t=r.className,o=r.hsva,n=r.onChange,a={backgroundImage:"linear-gradient(90deg, "+w(Object.assign({},o,{a:0}))+", "+w(Object.assign({},o,{a:1}))+")"},l=m(["react-colorful__alpha",t]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:l},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"react-colorful__alpha-gradient",style:a}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(h,{onMove:function(e){n({a:e.left})},onKey:function(e){n({a:i(o.a+e.left)})},"aria-label":"Alpha","aria-valuetext":p(100*o.a)+"%"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(g,{className:"react-colorful__alpha-pointer",left:o.a,color:w(o)})))},U=function(r){var t=r.className,o=r.colorModel,n=r.color,a=void 0===n?o.defaultColor:n,l=r.onChange,s=c(r,["className","colorModel","color","onChange"]);$();var i=F(o,a,l),f=i[0],v=i[1],d=m(["react-colorful",t]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",u({},s,{className:d}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(A,{hsva:f,onChange:v}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(K,{hue:f.h,onChange:v}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(Q,{hsva:f,onChange:v,className:"react-colorful__last-control"}))},me={defaultColor:"rgba(0, 0, 0, 1)",toHsva:O,fromHsva:function(e){var r=y(e);return"rgba("+r.r+", "+r.g+", "+r.b+", "+r.a+")"},equal:D},ge=function(r){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(U,u({},r,{colorModel:me}))},_e={defaultColor:"rgb(0, 0, 0)",toHsva:I,fromHsva:function(e){var r=y(e);return"rgb("+r.r+", "+r.g+", "+r.b+")"},equal:D},Ce=function(r){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(R,u({},r,{colorModel:_e}))}},"./packages/components/src/color-palette/stories/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__,Default:()=>Default,MultipleOrigins:()=>MultipleOrigins,CSSVariables:()=>CSSVariables});var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/index.js"),___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/src/color-palette/index.tsx"),_popover__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/components/src/popover/index.tsx"),_slot_fill__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/components/src/slot-fill/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/ColorPalette",component:___WEBPACK_IMPORTED_MODULE_1__.ZP,argTypes:{as:{control:{type:null}},onChange:{action:"onChange",control:{type:null}},value:{control:{type:null}}},parameters:{sourceLink:"packages/components/src/color-palette",controls:{expanded:!0},docs:{source:{state:"open"}}}},Template=({onChange,...args})=>{const[color,setColor]=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_slot_fill__WEBPACK_IMPORTED_MODULE_3__.zt,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.ZP,{...args,value:color,onChange:newColor=>{setColor(newColor),onChange?.(newColor)}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_popover__WEBPACK_IMPORTED_MODULE_4__.ZP.Slot,{})]})};Template.displayName="Template";const Default=Template.bind({});Default.args={colors:[{name:"Red",color:"#f00"},{name:"White",color:"#fff"},{name:"Blue",color:"#00f"}]};const MultipleOrigins=Template.bind({});MultipleOrigins.args={colors:[{name:"Primary colors",colors:[{name:"Red",color:"#f00"},{name:"Yellow",color:"#ff0"},{name:"Blue",color:"#00f"}]},{name:"Secondary colors",colors:[{name:"Orange",color:"#f60"},{name:"Green",color:"#0f0"},{name:"Purple",color:"#60f"}]}]};const CSSVariables=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{style:{"--red":"#f00","--yellow":"#ff0","--blue":"#00f"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Template,{...args})});CSSVariables.displayName="CSSVariables",CSSVariables.args={colors:[{name:"Red",color:"var(--red)"},{name:"Yellow",color:"var(--yellow)"},{name:"Blue",color:"var(--blue)"}]};try{ComponentMeta.displayName="ComponentMeta",ComponentMeta.__docgenInfo={description:"For the common case where a component's stories are simple components that receives args as props:\n\n```tsx\nexport default { ... } as ComponentMeta<typeof Button>;\n```",displayName:"ComponentMeta",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/color-palette/stories/index.tsx#ComponentMeta"]={docgenInfo:ComponentMeta.__docgenInfo,name:"ComponentMeta",path:"packages/components/src/color-palette/stories/index.tsx#ComponentMeta"})}catch(__react_docgen_typescript_loader_error){}}}]);