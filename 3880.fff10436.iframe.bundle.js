"use strict";(self.webpackChunkgutenberg=self.webpackChunkgutenberg||[]).push([[3880],{"./packages/compose/build-module/hooks/use-constrained-tabbing/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/keycodes/build-module/index.js"),_wordpress_dom__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/dom/build-module/index.js"),_use_ref_effect__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/compose/build-module/hooks/use-ref-effect/index.js");const __WEBPACK_DEFAULT_EXPORT__=function useConstrainedTabbing(){return(0,_use_ref_effect__WEBPACK_IMPORTED_MODULE_0__.Z)((node=>{function onKeyDown(event){const{keyCode,shiftKey,target}=event;if(keyCode!==_wordpress_keycodes__WEBPACK_IMPORTED_MODULE_1__.Mf)return;const action=shiftKey?"findPrevious":"findNext",nextElement=_wordpress_dom__WEBPACK_IMPORTED_MODULE_2__.T_.tabbable[action](target)||null;if(target.contains(nextElement))return event.preventDefault(),void nextElement?.focus();if(node.contains(nextElement))return;const domAction=shiftKey?"append":"prepend",{ownerDocument}=node,trap=ownerDocument.createElement("div");trap.tabIndex=-1,node[domAction](trap),trap.addEventListener("blur",(()=>node.removeChild(trap))),trap.focus()}return node.addEventListener("keydown",onKeyDown),()=>{node.removeEventListener("keydown",onKeyDown)}}),[])}},"./packages/compose/build-module/hooks/use-debounce/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>useDebounce});var use_memo_one__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/use-memo-one/dist/use-memo-one.esm.js"),_wordpress_element__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/index.js"),_utils_debounce__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/compose/build-module/utils/debounce/index.js");function useDebounce(fn,wait,options){const debounced=(0,use_memo_one__WEBPACK_IMPORTED_MODULE_0__.Pr)((()=>(0,_utils_debounce__WEBPACK_IMPORTED_MODULE_1__.D)(fn,null!=wait?wait:0,options)),[fn,wait,options]);return(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useEffect)((()=>()=>debounced.cancel()),[debounced]),debounced}},"./packages/compose/build-module/hooks/use-dialog/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_wordpress_keycodes__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/keycodes/build-module/index.js"),_use_constrained_tabbing__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/compose/build-module/hooks/use-constrained-tabbing/index.js"),_use_focus_on_mount__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/compose/build-module/hooks/use-focus-on-mount/index.js"),_use_focus_return__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/compose/build-module/hooks/use-focus-return/index.js"),_use_focus_outside__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/compose/build-module/hooks/use-focus-outside/index.js"),_use_merge_refs__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./packages/compose/build-module/hooks/use-merge-refs/index.js");const __WEBPACK_DEFAULT_EXPORT__=function useDialog(options){const currentOptions=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)();(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{currentOptions.current=options}),Object.values(options));const constrainedTabbingRef=(0,_use_constrained_tabbing__WEBPACK_IMPORTED_MODULE_1__.Z)(),focusOnMountRef=(0,_use_focus_on_mount__WEBPACK_IMPORTED_MODULE_2__.Z)(options.focusOnMount),focusReturnRef=(0,_use_focus_return__WEBPACK_IMPORTED_MODULE_3__.Z)(),focusOutsideProps=(0,_use_focus_outside__WEBPACK_IMPORTED_MODULE_4__.Z)((event=>{currentOptions.current?.__unstableOnClose?currentOptions.current.__unstableOnClose("focus-outside",event):currentOptions.current?.onClose&&currentOptions.current.onClose()})),closeOnEscapeRef=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)((node=>{node&&node.addEventListener("keydown",(event=>{event.keyCode===_wordpress_keycodes__WEBPACK_IMPORTED_MODULE_5__.hY&&!event.defaultPrevented&&currentOptions.current?.onClose&&(event.preventDefault(),currentOptions.current.onClose())}))}),[]);return[(0,_use_merge_refs__WEBPACK_IMPORTED_MODULE_6__.Z)([!1!==options.focusOnMount?constrainedTabbingRef:null,!1!==options.focusOnMount?focusReturnRef:null,!1!==options.focusOnMount?focusOnMountRef:null,closeOnEscapeRef]),{...focusOutsideProps,tabIndex:-1}]}},"./packages/compose/build-module/hooks/use-focus-on-mount/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>useFocusOnMount});var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_wordpress_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/dom/build-module/index.js");function useFocusOnMount(focusOnMount="firstElement"){const focusOnMountRef=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(focusOnMount),setFocus=target=>{target.focus({preventScroll:!0})},timerId=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)();return(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{focusOnMountRef.current=focusOnMount}),[focusOnMount]),(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>()=>{timerId.current&&clearTimeout(timerId.current)}),[]),(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)((node=>{var _node$ownerDocument$a;node&&!1!==focusOnMountRef.current&&(node.contains(null!==(_node$ownerDocument$a=node.ownerDocument?.activeElement)&&void 0!==_node$ownerDocument$a?_node$ownerDocument$a:null)||("firstElement"!==focusOnMountRef.current?setFocus(node):timerId.current=setTimeout((()=>{const firstTabbable=_wordpress_dom__WEBPACK_IMPORTED_MODULE_1__.T_.tabbable.find(node)[0];firstTabbable&&setFocus(firstTabbable)}),0)))}),[])}},"./packages/compose/build-module/hooks/use-focus-outside/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>useFocusOutside});var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const INPUT_BUTTON_TYPES=["button","submit"];function useFocusOutside(onFocusOutside){const currentOnFocusOutside=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(onFocusOutside);(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{currentOnFocusOutside.current=onFocusOutside}),[onFocusOutside]);const preventBlurCheck=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1),blurCheckTimeoutId=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(),cancelBlurCheck=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)((()=>{clearTimeout(blurCheckTimeoutId.current)}),[]);(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>()=>cancelBlurCheck()),[]),(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{onFocusOutside||cancelBlurCheck()}),[onFocusOutside,cancelBlurCheck]);const normalizeButtonFocus=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)((event=>{const{type,target}=event;["mouseup","touchend"].includes(type)?preventBlurCheck.current=!1:function isFocusNormalizedButton(eventTarget){if(!(eventTarget instanceof window.HTMLElement))return!1;switch(eventTarget.nodeName){case"A":case"BUTTON":return!0;case"INPUT":return INPUT_BUTTON_TYPES.includes(eventTarget.type)}return!1}(target)&&(preventBlurCheck.current=!0)}),[]),queueBlurCheck=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)((event=>{if(event.persist(),preventBlurCheck.current)return;const ignoreForRelatedTarget=event.target.getAttribute("data-unstable-ignore-focus-outside-for-relatedtarget");ignoreForRelatedTarget&&event.relatedTarget?.closest(ignoreForRelatedTarget)||(blurCheckTimeoutId.current=setTimeout((()=>{document.hasFocus()?"function"==typeof currentOnFocusOutside.current&&currentOnFocusOutside.current(event):event.preventDefault()}),0))}),[]);return{onFocus:cancelBlurCheck,onMouseDown:normalizeButtonFocus,onMouseUp:normalizeButtonFocus,onTouchStart:normalizeButtonFocus,onTouchEnd:normalizeButtonFocus,onBlur:queueBlurCheck}}},"./packages/compose/build-module/hooks/use-focus-return/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const __WEBPACK_DEFAULT_EXPORT__=function useFocusReturn(onFocusReturn){const ref=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),focusedBeforeMount=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),onFocusReturnRef=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(onFocusReturn);return(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{onFocusReturnRef.current=onFocusReturn}),[onFocusReturn]),(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)((node=>{if(node){if(ref.current=node,focusedBeforeMount.current)return;focusedBeforeMount.current=node.ownerDocument.activeElement}else if(focusedBeforeMount.current){const isFocused=ref.current?.contains(ref.current?.ownerDocument.activeElement);if(ref.current?.isConnected&&!isFocused)return;onFocusReturnRef.current?onFocusReturnRef.current():focusedBeforeMount.current?.focus()}}),[])}},"./packages/compose/build-module/hooks/use-instance-id/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const instanceMap=new WeakMap;const __WEBPACK_DEFAULT_EXPORT__=function useInstanceId(object,prefix,preferredId){return(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>{if(preferredId)return preferredId;const id=function createId(object){const instances=instanceMap.get(object)||0;return instanceMap.set(object,instances+1),instances}(object);return prefix?`${prefix}-${id}`:id}),[object,preferredId,prefix])}},"./packages/compose/build-module/hooks/use-media-query/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>useMediaQuery});var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function useMediaQuery(query){const source=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>{const mediaQueryList=function getMediaQueryList(query){return query&&"undefined"!=typeof window&&"function"==typeof window.matchMedia?window.matchMedia(query):null}(query);return{subscribe:onStoreChange=>mediaQueryList?(mediaQueryList.addEventListener("change",onStoreChange),()=>{mediaQueryList.removeEventListener("change",onStoreChange)}):()=>{},getValue(){var _mediaQueryList$match;return null!==(_mediaQueryList$match=mediaQueryList?.matches)&&void 0!==_mediaQueryList$match&&_mediaQueryList$match}}}),[query]);return(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useSyncExternalStore)(source.subscribe,source.getValue,(()=>!1))}},"./packages/compose/build-module/hooks/use-merge-refs/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>useMergeRefs});var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function assignRef(ref,value){"function"==typeof ref?ref(value):ref&&ref.hasOwnProperty("current")&&(ref.current=value)}function useMergeRefs(refs){const element=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(),isAttached=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1),didElementChange=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1),previousRefs=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)([]),currentRefs=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(refs);return currentRefs.current=refs,(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)((()=>{!1===didElementChange.current&&!0===isAttached.current&&refs.forEach(((ref,index)=>{const previousRef=previousRefs.current[index];ref!==previousRef&&(assignRef(previousRef,null),assignRef(ref,element.current))})),previousRefs.current=refs}),refs),(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)((()=>{didElementChange.current=!1})),(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)((value=>{assignRef(element,value),didElementChange.current=!0,isAttached.current=null!==value;const refsToAssign=value?currentRefs.current:previousRefs.current;for(const ref of refsToAssign)assignRef(ref,value)}),[])}},"./packages/compose/build-module/hooks/use-ref-effect/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>useRefEffect});var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function useRefEffect(callback,dependencies){const cleanup=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)();return(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)((node=>{node?cleanup.current=callback(node):cleanup.current&&cleanup.current()}),dependencies)}},"./packages/compose/build-module/hooks/use-viewport-match/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_use_media_query__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/compose/build-module/hooks/use-media-query/index.js");const BREAKPOINTS={huge:1440,wide:1280,large:960,medium:782,small:600,mobile:480},CONDITIONS={">=":"min-width","<":"max-width"},OPERATOR_EVALUATORS={">=":(breakpointValue,width)=>width>=breakpointValue,"<":(breakpointValue,width)=>width<breakpointValue},ViewportMatchWidthContext=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createContext)(null),useViewportMatch=(breakpoint,operator=">=")=>{const simulatedWidth=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useContext)(ViewportMatchWidthContext),mediaQuery=!simulatedWidth&&`(${CONDITIONS[operator]}: ${BREAKPOINTS[breakpoint]}px)`,mediaQueryResult=(0,_use_media_query__WEBPACK_IMPORTED_MODULE_1__.Z)(mediaQuery||void 0);return simulatedWidth?OPERATOR_EVALUATORS[operator](BREAKPOINTS[breakpoint],simulatedWidth):mediaQueryResult};useViewportMatch.__experimentalWidthProvider=ViewportMatchWidthContext.Provider,useViewportMatch.__docgenInfo={description:"Returns true if the viewport matches the given query, or false otherwise.\n\n@param {WPBreakpoint}       breakpoint      Breakpoint size name.\n@param {WPViewportOperator} [operator=\">=\"] Viewport operator.\n\n@example\n\n```js\nuseViewportMatch( 'huge', '<' );\nuseViewportMatch( 'medium' );\n```\n\n@return {boolean} Whether viewport matches query.",methods:[],displayName:"useViewportMatch"};const __WEBPACK_DEFAULT_EXPORT__=useViewportMatch;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/compose/build-module/hooks/use-viewport-match/index.js"]={name:"useViewportMatch",docgenInfo:useViewportMatch.__docgenInfo,path:"packages/compose/build-module/hooks/use-viewport-match/index.js"})},"./packages/compose/build-module/utils/debounce/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>debounce});const debounce=(func,wait,options)=>{let lastArgs,lastThis,result,timerId,lastCallTime,maxWait=0,lastInvokeTime=0,leading=!1,maxing=!1,trailing=!0;function invokeFunc(time){const args=lastArgs,thisArg=lastThis;return lastArgs=void 0,lastThis=void 0,lastInvokeTime=time,result=func.apply(thisArg,args),result}function startTimer(pendingFunc,waitTime){timerId=setTimeout(pendingFunc,waitTime)}function getTimeSinceLastCall(time){return time-(lastCallTime||0)}function shouldInvoke(time){const timeSinceLastCall=getTimeSinceLastCall(time);return void 0===lastCallTime||timeSinceLastCall>=wait||timeSinceLastCall<0||maxing&&time-lastInvokeTime>=maxWait}function timerExpired(){const time=Date.now();if(shouldInvoke(time))return trailingEdge(time);startTimer(timerExpired,function remainingWait(time){const timeSinceLastCall=getTimeSinceLastCall(time),timeSinceLastInvoke=time-lastInvokeTime,timeWaiting=wait-timeSinceLastCall;return maxing?Math.min(timeWaiting,maxWait-timeSinceLastInvoke):timeWaiting}(time))}function clearTimer(){timerId=void 0}function trailingEdge(time){return clearTimer(),trailing&&lastArgs?invokeFunc(time):(lastArgs=lastThis=void 0,result)}function pending(){return void 0!==timerId}function debounced(...args){const time=Date.now(),isInvoking=shouldInvoke(time);if(lastArgs=args,lastThis=this,lastCallTime=time,isInvoking){if(!pending())return function leadingEdge(time){return lastInvokeTime=time,startTimer(timerExpired,wait),leading?invokeFunc(time):result}(lastCallTime);if(maxing)return startTimer(timerExpired,wait),invokeFunc(lastCallTime)}return pending()||startTimer(timerExpired,wait),result}return options&&(leading=!!options.leading,maxing="maxWait"in options,void 0!==options.maxWait&&(maxWait=Math.max(options.maxWait,wait)),trailing="trailing"in options?!!options.trailing:trailing),debounced.cancel=function cancel(){!function cancelTimer(){void 0!==timerId&&clearTimeout(timerId)}(),lastInvokeTime=0,clearTimer(),lastArgs=lastCallTime=lastThis=void 0},debounced.flush=function flush(){return pending()?trailingEdge(Date.now()):result},debounced.pending=pending,debounced}},"./packages/deprecated/build-module/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>deprecated});var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/hooks/build-module/index.js");const logged=Object.create(null);function deprecated(feature,options={}){const{since,version,alternative,plugin,link,hint}=options,message=`${feature} is deprecated${since?` since version ${since}`:""}${version?` and will be removed${plugin?` from ${plugin}`:""} in version ${version}`:""}.${alternative?` Please use ${alternative} instead.`:""}${link?` See: ${link}`:""}${hint?` Note: ${hint}`:""}`;message in logged||((0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__.Kw)("deprecated",feature,options,message),console.warn(message),logged[message]=!0)}},"./packages/dom/build-module/dom/get-computed-style.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>getComputedStyle});var _utils_assert_is_defined__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/dom/build-module/utils/assert-is-defined.js");function getComputedStyle(element){return(0,_utils_assert_is_defined__WEBPACK_IMPORTED_MODULE_0__.c)(element.ownerDocument.defaultView,"element.ownerDocument.defaultView"),element.ownerDocument.defaultView.getComputedStyle(element)}},"./packages/dom/build-module/dom/get-scroll-container.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>getScrollContainer});var _get_computed_style__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/dom/build-module/dom/get-computed-style.js");function getScrollContainer(node,direction="vertical"){if(node){if(("vertical"===direction||"all"===direction)&&node.scrollHeight>node.clientHeight){const{overflowY}=(0,_get_computed_style__WEBPACK_IMPORTED_MODULE_0__.Z)(node);if(/(auto|scroll)/.test(overflowY))return node}if(("horizontal"===direction||"all"===direction)&&node.scrollWidth>node.clientWidth){const{overflowX}=(0,_get_computed_style__WEBPACK_IMPORTED_MODULE_0__.Z)(node);if(/(auto|scroll)/.test(overflowX))return node}return node.ownerDocument===node.parentNode?node:getScrollContainer(node.parentNode,direction)}}},"./packages/dom/build-module/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T_:()=>build_module_focus});var focusable_namespaceObject={};__webpack_require__.r(focusable_namespaceObject),__webpack_require__.d(focusable_namespaceObject,{find:()=>find});var tabbable_namespaceObject={};function isVisible(element){return element.offsetWidth>0||element.offsetHeight>0||element.getClientRects().length>0}function find(context,{sequential=!1}={}){const elements=context.querySelectorAll(function buildSelector(sequential){return[sequential?'[tabindex]:not([tabindex^="-"])':"[tabindex]","a[href]","button:not([disabled])",'input:not([type="hidden"]):not([disabled])',"select:not([disabled])","textarea:not([disabled])",'iframe:not([tabindex^="-"])',"object","embed","area[href]","[contenteditable]:not([contenteditable=false])"].join(",")}(sequential));return Array.from(elements).filter((element=>{if(!isVisible(element))return!1;const{nodeName}=element;return"AREA"!==nodeName||function isValidFocusableArea(element){const map=element.closest("map[name]");if(!map)return!1;const img=element.ownerDocument.querySelector('img[usemap="#'+map.name+'"]');return!!img&&isVisible(img)}(element)}))}function getTabIndex(element){const tabIndex=element.getAttribute("tabindex");return null===tabIndex?0:parseInt(tabIndex,10)}function isTabbableIndex(element){return-1!==getTabIndex(element)}function mapElementToObjectTabbable(element,index){return{element,index}}function mapObjectTabbableToElement(object){return object.element}function compareObjectTabbables(a,b){const aTabIndex=getTabIndex(a.element),bTabIndex=getTabIndex(b.element);return aTabIndex===bTabIndex?a.index-b.index:aTabIndex-bTabIndex}function filterTabbable(focusables){return focusables.filter(isTabbableIndex).map(mapElementToObjectTabbable).sort(compareObjectTabbables).map(mapObjectTabbableToElement).reduce(function createStatefulCollapseRadioGroup(){const CHOSEN_RADIO_BY_NAME={};return function collapseRadioGroup(result,element){const{nodeName,type,checked,name}=element;if("INPUT"!==nodeName||"radio"!==type||!name)return result.concat(element);const hasChosen=CHOSEN_RADIO_BY_NAME.hasOwnProperty(name);if(!checked&&hasChosen)return result;if(hasChosen){const hadChosenElement=CHOSEN_RADIO_BY_NAME[name];result=result.filter((e=>e!==hadChosenElement))}return CHOSEN_RADIO_BY_NAME[name]=element,result.concat(element)}}(),[])}function tabbable_find(context){return filterTabbable(find(context))}function findPrevious(element){return filterTabbable(find(element.ownerDocument.body)).reverse().find((focusable=>element.compareDocumentPosition(focusable)&element.DOCUMENT_POSITION_PRECEDING))}function findNext(element){return filterTabbable(find(element.ownerDocument.body)).find((focusable=>element.compareDocumentPosition(focusable)&element.DOCUMENT_POSITION_FOLLOWING))}__webpack_require__.r(tabbable_namespaceObject),__webpack_require__.d(tabbable_namespaceObject,{find:()=>tabbable_find,findNext:()=>findNext,findPrevious:()=>findPrevious,isTabbableIndex:()=>isTabbableIndex});const build_module_focus={focusable:focusable_namespaceObject,tabbable:tabbable_namespaceObject}},"./packages/dom/build-module/utils/assert-is-defined.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function assertIsDefined(val,name){0}__webpack_require__.d(__webpack_exports__,{c:()=>assertIsDefined})},"./packages/element/build-module/react.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Qz:()=>concatChildren});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function concatChildren(...childrenArguments){return childrenArguments.reduce(((accumulator,children,i)=>(react__WEBPACK_IMPORTED_MODULE_0__.Children.forEach(children,((child,j)=>{child&&"string"!=typeof child&&(child=(0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(child,{key:[i,j].join()})),accumulator.push(child)})),accumulator)),[])}},"./packages/element/build-module/utils.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{V:()=>isEmptyElement});const isEmptyElement=element=>"number"!=typeof element&&("string"==typeof element?.valueOf()||Array.isArray(element)?!element.length:!element)},"./packages/icons/build-module/library/close.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/primitives/build-module/svg/index.js");const __WEBPACK_DEFAULT_EXPORT__=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.y$,{d:"M13 11.8l6.1-6.3-1-1-6.1 6.2-6.1-6.2-1 1 6.1 6.3-6.5 6.7 1 1 6.5-6.6 6.5 6.6 1-1z"}))},"./packages/is-shallow-equal/build-module/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{ZP:()=>isShallowEqual});var objects=__webpack_require__("./packages/is-shallow-equal/build-module/objects.js");function isShallowEqual(a,b){if(a&&b){if(a.constructor===Object&&b.constructor===Object)return(0,objects.Z)(a,b);if(Array.isArray(a)&&Array.isArray(b))return function isShallowEqualArrays(a,b){if(a===b)return!0;if(a.length!==b.length)return!1;for(let i=0,len=a.length;i<len;i++)if(a[i]!==b[i])return!1;return!0}(a,b)}return a===b}},"./packages/is-shallow-equal/build-module/objects.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function isShallowEqualObjects(a,b){if(a===b)return!0;const aKeys=Object.keys(a),bKeys=Object.keys(b);if(aKeys.length!==bKeys.length)return!1;let i=0;for(;i<aKeys.length;){const key=aKeys[i],aValue=a[key];if(void 0===aValue&&!b.hasOwnProperty(key)||aValue!==b[key])return!1;i++}return!0}__webpack_require__.d(__webpack_exports__,{Z:()=>isShallowEqualObjects})},"./packages/keycodes/build-module/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{ZH:()=>BACKSPACE,Mf:()=>TAB,K5:()=>ENTER,hY:()=>ESCAPE,L_:()=>SPACE,wx:()=>PAGEUP,Bi:()=>PAGEDOWN,uR:()=>END,Sd:()=>HOME,RL:()=>LEFT,UP:()=>UP,pX:()=>RIGHT,WV:()=>DOWN,yY:()=>DELETE,kC:()=>F10,Ac:()=>rawShortcut,E_:()=>displayShortcut,J3:()=>shortcutAriaLabel,vd:()=>isKeyboardEvent});var change_case__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/capital-case/dist.es2015/index.js"),_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/i18n/build-module/index.js"),_platform__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/keycodes/build-module/platform.js");const BACKSPACE=8,TAB=9,ENTER=13,ESCAPE=27,SPACE=32,PAGEUP=33,PAGEDOWN=34,END=35,HOME=36,LEFT=37,UP=38,RIGHT=39,DOWN=40,DELETE=46,F10=121,ALT="alt",CTRL="ctrl",COMMAND="meta",SHIFT="shift";function mapValues(object,mapFn){return Object.fromEntries(Object.entries(object).map((([key,value])=>[key,mapFn(value)])))}const modifiers={primary:_isApple=>_isApple()?[COMMAND]:[CTRL],primaryShift:_isApple=>_isApple()?[SHIFT,COMMAND]:[CTRL,SHIFT],primaryAlt:_isApple=>_isApple()?[ALT,COMMAND]:[CTRL,ALT],secondary:_isApple=>_isApple()?[SHIFT,ALT,COMMAND]:[CTRL,SHIFT,ALT],access:_isApple=>_isApple()?[CTRL,ALT]:[SHIFT,ALT],ctrl:()=>[CTRL],alt:()=>[ALT],ctrlShift:()=>[CTRL,SHIFT],shift:()=>[SHIFT],shiftAlt:()=>[SHIFT,ALT],undefined:()=>[]},rawShortcut=mapValues(modifiers,(modifier=>(character,_isApple=_platform__WEBPACK_IMPORTED_MODULE_1__.R)=>[...modifier(_isApple),character.toLowerCase()].join("+"))),displayShortcutList=mapValues(modifiers,(modifier=>(character,_isApple=_platform__WEBPACK_IMPORTED_MODULE_1__.R)=>{const isApple=_isApple(),replacementKeyMap={[ALT]:isApple?"⌥":"Alt",[CTRL]:isApple?"⌃":"Ctrl",[COMMAND]:"⌘",[SHIFT]:isApple?"⇧":"Shift"};return[...modifier(_isApple).reduce(((accumulator,key)=>{var _replacementKeyMap$ke;const replacementKey=null!==(_replacementKeyMap$ke=replacementKeyMap[key])&&void 0!==_replacementKeyMap$ke?_replacementKeyMap$ke:key;return isApple?[...accumulator,replacementKey]:[...accumulator,replacementKey,"+"]}),[]),(0,change_case__WEBPACK_IMPORTED_MODULE_2__.I)(character,{stripRegexp:/[^A-Z0-9~`,\.\\\-]/gi})]})),displayShortcut=mapValues(displayShortcutList,(shortcutList=>(character,_isApple=_platform__WEBPACK_IMPORTED_MODULE_1__.R)=>shortcutList(character,_isApple).join(""))),shortcutAriaLabel=mapValues(modifiers,(modifier=>(character,_isApple=_platform__WEBPACK_IMPORTED_MODULE_1__.R)=>{const isApple=_isApple(),replacementKeyMap={[SHIFT]:"Shift",[COMMAND]:isApple?"Command":"Control",[CTRL]:"Control",[ALT]:isApple?"Option":"Alt",",":(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Comma"),".":(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Period"),"`":(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Backtick"),"~":(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Tilde")};return[...modifier(_isApple),character].map((key=>{var _replacementKeyMap$ke2;return(0,change_case__WEBPACK_IMPORTED_MODULE_2__.I)(null!==(_replacementKeyMap$ke2=replacementKeyMap[key])&&void 0!==_replacementKeyMap$ke2?_replacementKeyMap$ke2:key)})).join(isApple?" ":" + ")}));const isKeyboardEvent=mapValues(modifiers,(getModifiers=>(event,character,_isApple=_platform__WEBPACK_IMPORTED_MODULE_1__.R)=>{const mods=getModifiers(_isApple),eventMods=function getEventModifiers(event){return[ALT,CTRL,COMMAND,SHIFT].filter((key=>event[`${key}Key`]))}(event),replacementWithShiftKeyMap={Comma:",",Backslash:"\\",IntlRo:"\\",IntlYen:"\\"},modsDiff=mods.filter((mod=>!eventMods.includes(mod))),eventModsDiff=eventMods.filter((mod=>!mods.includes(mod)));if(modsDiff.length>0||eventModsDiff.length>0)return!1;let key=event.key.toLowerCase();return character?(event.altKey&&1===character.length&&(key=String.fromCharCode(event.keyCode).toLowerCase()),event.shiftKey&&1===character.length&&replacementWithShiftKeyMap[event.code]&&(key=replacementWithShiftKeyMap[event.code]),"del"===character&&(character="delete"),key===character.toLowerCase()):mods.includes(key)}))},"./packages/keycodes/build-module/platform.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function isAppleOS(_window=null){if(!_window){if("undefined"==typeof window)return!1;_window=window}const{platform}=_window.navigator;return-1!==platform.indexOf("Mac")||["iPad","iPhone"].includes(platform)}__webpack_require__.d(__webpack_exports__,{R:()=>isAppleOS})},"./packages/primitives/build-module/svg/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Cd:()=>Circle,G:()=>G,y$:()=>Path,UL:()=>Rect,Wj:()=>SVG});var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),_wordpress_element__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js");const Circle=props=>(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("circle",props),G=props=>(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("g",props),Path=props=>(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path",props),Rect=props=>(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("rect",props),SVG=({className,isPressed,...props})=>{const appliedProps={...props,className:classnames__WEBPACK_IMPORTED_MODULE_0___default()(className,{"is-pressed":isPressed})||void 0,"aria-hidden":!0,focusable:!1};return(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg",{...appliedProps})}}}]);