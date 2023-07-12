(self.webpackChunkgutenberg=self.webpackChunkgutenberg||[]).push([[8379],{"./packages/components/src/ui/control-label/component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>control_label_component});var styles_namespaceObject={};__webpack_require__.r(styles_namespaceObject),__webpack_require__.d(styles_namespaceObject,{ControlLabel:()=>ControlLabel,block:()=>block,inline:()=>inline,large:()=>large,medium:()=>medium,small:()=>small});var context_connect=__webpack_require__("./packages/components/src/ui/context/context-connect.ts"),component=__webpack_require__("./packages/components/src/view/component.tsx"),use_context_system=__webpack_require__("./packages/components/src/ui/context/use-context-system.js"),form_group_context=__webpack_require__("./packages/components/src/ui/form-group/form-group-context.js"),hook=__webpack_require__("./packages/components/src/text/hook.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),config_values=__webpack_require__("./packages/components/src/utils/config-values.js");const lineHeight=`calc(${config_values.Z.fontSize} * 1.2)`;function getPadding(size){return`calc((${config_values.Z[size]} - ${lineHeight}) / 2)`}const highDpiAdjust=(function getHighDpi(strings,...interpolations){const interpolatedStyles=(0,emotion_react_browser_esm.iv)(strings,...interpolations);return(0,emotion_react_browser_esm.iv)("@media ( -webkit-min-device-pixel-ratio: 1.25 ),( min-resolution: 120dpi ){",interpolatedStyles,";}","")})`
	> * {
		position: relative;
		top: 0.5px;
	}
`,ControlLabel=(0,emotion_react_browser_esm.iv)("display:inline-block;line-height:",lineHeight,";margin:0;max-width:100%;padding-bottom:",getPadding("controlHeight"),";padding-top:",getPadding("controlHeight"),";&:active{user-select:none;}",highDpiAdjust,";",""),large=(0,emotion_react_browser_esm.iv)("padding-bottom:",getPadding("controlHeightLarge"),";padding-top:",getPadding("controlHeightLarge"),";",""),medium=(0,emotion_react_browser_esm.iv)("padding-bottom:",getPadding("controlHeight"),";padding-top:",getPadding("controlHeight"),";",""),small=(0,emotion_react_browser_esm.iv)("padding-bottom:",getPadding("controlHeightSmall"),";padding-top:",getPadding("controlHeightSmall"),";",""),inline={name:"1saok50",styles:"display:inline-block;vertical-align:middle"},block={name:"4zleql",styles:"display:block"};var use_cx=__webpack_require__("./packages/components/src/utils/hooks/use-cx.ts");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function component_ControlLabel(props,forwardedRef){const controlLabelProps=function useControlLabel(props){const{htmlFor:htmlForProp,isBlock=!1,size="medium",truncate=!0,...otherProps}=(0,use_context_system.y)(props,"ControlLabel"),{className,...textProps}=(0,hook.Z)({...otherProps,isBlock,truncate}),cx=(0,use_cx.I)(),htmlFor=(0,form_group_context.iY)(htmlForProp);return{...textProps,className:cx(ControlLabel,styles_namespaceObject[size],className,isBlock?block:inline),htmlFor}}(props);return(0,jsx_runtime.jsx)(component.Z,{as:"label",...controlLabelProps,ref:forwardedRef})}component_ControlLabel.displayName="ControlLabel";const control_label_component=(0,context_connect.Iq)(component_ControlLabel,"ControlLabel");component_ControlLabel.__docgenInfo={description:"@param {import('../context').WordPressComponentProps<import('./types').Props, 'label', false>} props\n@param {import('react').ForwardedRef<any>}                                                     forwardedRef",methods:[],displayName:"ControlLabel"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/ui/control-label/component.js"]={name:"ControlLabel",docgenInfo:component_ControlLabel.__docgenInfo,path:"packages/components/src/ui/control-label/component.js"})},"./packages/components/src/ui/form-group/form-group-context.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{PJ:()=>FormGroupContext,iY:()=>useFormGroupContextId});var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const initialContext={id:void 0,horizontal:!0},FormGroupContext=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createContext)(initialContext),useFormGroupContextId=id=>{const contextId=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useContext)(FormGroupContext).id;return id||contextId}},"./node_modules/highlight-words-core/dist/index.js":module=>{module.exports=function(modules){var installedModules={};function __nested_webpack_require_187__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={exports:{},id:moduleId,loaded:!1};return modules[moduleId].call(module.exports,module,module.exports,__nested_webpack_require_187__),module.loaded=!0,module.exports}return __nested_webpack_require_187__.m=modules,__nested_webpack_require_187__.c=installedModules,__nested_webpack_require_187__.p="",__nested_webpack_require_187__(0)}([function(module,exports,__nested_webpack_require_1468__){module.exports=__nested_webpack_require_1468__(1)},function(module,exports,__nested_webpack_require_1587__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _utils=__nested_webpack_require_1587__(2);Object.defineProperty(exports,"combineChunks",{enumerable:!0,get:function get(){return _utils.combineChunks}}),Object.defineProperty(exports,"fillInChunks",{enumerable:!0,get:function get(){return _utils.fillInChunks}}),Object.defineProperty(exports,"findAll",{enumerable:!0,get:function get(){return _utils.findAll}}),Object.defineProperty(exports,"findChunks",{enumerable:!0,get:function get(){return _utils.findChunks}})},function(module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});exports.findAll=function findAll(_ref){var autoEscape=_ref.autoEscape,_ref$caseSensitive=_ref.caseSensitive,caseSensitive=void 0!==_ref$caseSensitive&&_ref$caseSensitive,_ref$findChunks=_ref.findChunks,findChunks=void 0===_ref$findChunks?defaultFindChunks:_ref$findChunks,sanitize=_ref.sanitize,searchWords=_ref.searchWords,textToHighlight=_ref.textToHighlight;return fillInChunks({chunksToHighlight:combineChunks({chunks:findChunks({autoEscape,caseSensitive,sanitize,searchWords,textToHighlight})}),totalLength:textToHighlight?textToHighlight.length:0})};var combineChunks=exports.combineChunks=function combineChunks(_ref2){var chunks=_ref2.chunks;return chunks=chunks.sort((function(first,second){return first.start-second.start})).reduce((function(processedChunks,nextChunk){if(0===processedChunks.length)return[nextChunk];var prevChunk=processedChunks.pop();if(nextChunk.start<=prevChunk.end){var endIndex=Math.max(prevChunk.end,nextChunk.end);processedChunks.push({highlight:!1,start:prevChunk.start,end:endIndex})}else processedChunks.push(prevChunk,nextChunk);return processedChunks}),[])},defaultFindChunks=function defaultFindChunks(_ref3){var autoEscape=_ref3.autoEscape,caseSensitive=_ref3.caseSensitive,_ref3$sanitize=_ref3.sanitize,sanitize=void 0===_ref3$sanitize?defaultSanitize:_ref3$sanitize,searchWords=_ref3.searchWords,textToHighlight=_ref3.textToHighlight;return textToHighlight=sanitize(textToHighlight),searchWords.filter((function(searchWord){return searchWord})).reduce((function(chunks,searchWord){searchWord=sanitize(searchWord),autoEscape&&(searchWord=function escapeRegExpFn(string){return string.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}(searchWord));for(var regex=new RegExp(searchWord,caseSensitive?"g":"gi"),match=void 0;match=regex.exec(textToHighlight);){var _start=match.index,_end=regex.lastIndex;_end>_start&&chunks.push({highlight:!1,start:_start,end:_end}),match.index===regex.lastIndex&&regex.lastIndex++}return chunks}),[])};exports.findChunks=defaultFindChunks;var fillInChunks=exports.fillInChunks=function fillInChunks(_ref4){var chunksToHighlight=_ref4.chunksToHighlight,totalLength=_ref4.totalLength,allChunks=[],append=function append(start,end,highlight){end-start>0&&allChunks.push({start,end,highlight})};if(0===chunksToHighlight.length)append(0,totalLength,!1);else{var lastIndex=0;chunksToHighlight.forEach((function(chunk){append(lastIndex,chunk.start,!1),append(chunk.start,chunk.end,!0),lastIndex=chunk.end})),append(lastIndex,totalLength,!1)}return allChunks};function defaultSanitize(string){return string}}])}}]);
//# sourceMappingURL=8379.cb5c1020.iframe.bundle.js.map