"use strict";(self.webpackChunkgutenberg=self.webpackChunkgutenberg||[]).push([[8693],{"./packages/components/src/ui/utils/space.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>space});const GRID_BASE="4px";function space(value){if(void 0===value)return;if(!value)return"0";const asInt="number"==typeof value?value:Number(value);return"undefined"!=typeof window&&window.CSS?.supports?.("margin",value.toString())||Number.isNaN(asInt)?value.toString():`calc(${GRID_BASE} * ${value})`}},"./packages/components/src/ui/control-label/stories/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__,_default:()=>_default});var _index__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/src/ui/control-label/component.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={parameters:{sourceLink:"packages/components/src/ui/control-label",storySource:{source:"/**\n * Internal dependencies\n */\nimport { ControlLabel } from '../index';\n\nexport default {\n\tcomponent: ControlLabel,\n\ttitle: 'Components (Experimental)/ControlLabel',\n};\n\nexport const _default = () => {\n\treturn <ControlLabel>Label</ControlLabel>;\n};\n",locationsMap:{default:{startLoc:{col:24,line:11},endLoc:{col:1,line:13},startBody:{col:24,line:11},endBody:{col:1,line:13}}}}},component:_index__WEBPACK_IMPORTED_MODULE_1__.Z,title:"Components (Experimental)/ControlLabel"},_default=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index__WEBPACK_IMPORTED_MODULE_1__.Z,{children:"Label"});_default.displayName="_default",_default.__docgenInfo={description:"",methods:[],displayName:"_default"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/ui/control-label/stories/index.js"]={name:"_default",docgenInfo:_default.__docgenInfo,path:"packages/components/src/ui/control-label/stories/index.js"})}}]);