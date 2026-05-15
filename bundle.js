/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css"
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
(module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* =========================\r\n   Reset\r\n========================= */\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  font-family: 'Inter', sans-serif;\r\n  background: #f8fafc;\r\n  color: #0f172a;\r\n}\r\n\r\nbutton,\r\ninput,\r\ntextarea,\r\nselect {\r\n  font: inherit;\r\n}\r\n\r\nbutton {\r\n  cursor: pointer;\r\n}\r\n\r\n/* =========================\r\n   App Layout\r\n========================= */\r\n.container {\r\n  display: flex;\r\n  min-height: 100vh;\r\n}\r\n\r\n/* =========================\r\n   Sidebar\r\n========================= */\r\n.sidebar {\r\n  width: 260px;\r\n  background: #ffffff;\r\n  border-right: 1px solid #e2e8f0;\r\n  padding: 32px 20px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 12px;\r\n  box-shadow: 4px 0 12px rgba(15, 23, 42, 0.03);\r\n}\r\n\r\n.sidebar::before {\r\n  content: \"TaskFlow\";\r\n  display: block;\r\n  font-size: 1.75rem;\r\n  font-weight: 700;\r\n  color: #3b82f6;\r\n  margin-bottom: 24px;\r\n  padding-left: 4px;\r\n}\r\n\r\n.sidebar button {\r\n  width: 100%;\r\n  padding: 14px 16px;\r\n  border: none;\r\n  border-radius: 12px;\r\n  background: #f1f5f9;\r\n  color: #334155;\r\n  font-size: 0.95rem;\r\n  font-weight: 500;\r\n  text-align: left;\r\n  transition: all 0.2s ease;\r\n}\r\n\r\n.sidebar button:hover {\r\n  background: #e0edff;\r\n  color: #2563eb;\r\n  transform: translateX(3px);\r\n}\r\n\r\n/* Add Project button */\r\n.sidebar button:last-child {\r\n  margin-top: 12px;\r\n  background: #3b82f6;\r\n  color: #ffffff;\r\n  font-weight: 600;\r\n  text-align: center;\r\n  box-shadow: 0 8px 20px rgba(59, 130, 246, 0.25);\r\n}\r\n\r\n.sidebar button:last-child:hover {\r\n  background: #2563eb;\r\n  transform: translateY(-1px);\r\n}\r\n\r\n/* =========================\r\n   Main Content\r\n========================= */\r\n.main {\r\n  flex: 1;\r\n  padding: 40px;\r\n  background: #f8fafc;\r\n}\r\n\r\n.main h2 {\r\n  font-size: 2.25rem;\r\n  font-weight: 700;\r\n  color: #0f172a;\r\n  margin-bottom: 28px;\r\n}\r\n\r\n/* =========================\r\n   Columns Layout\r\n========================= */\r\n.columns {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  gap: 28px;\r\n  align-items: start;\r\n}\r\n\r\n.columns > div {\r\n  background: #ffffff;\r\n  border: 1px solid #e2e8f0;\r\n  border-radius: 20px;\r\n  padding: 24px;\r\n  min-height: 420px;\r\n  max-height: calc(100vh - 180px);\r\n  overflow-y: auto;\r\n  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.05);\r\n}\r\n\r\n.columns > div::-webkit-scrollbar {\r\n  width: 6px;\r\n}\r\n\r\n.columns > div::-webkit-scrollbar-thumb {\r\n  background: #cbd5e1;\r\n  border-radius: 999px;\r\n}\r\n\r\n.columns h3 {\r\n  font-size: 1.4rem;\r\n  font-weight: 700;\r\n  margin-bottom: 20px;\r\n  color: #0f172a;\r\n}\r\n\r\n/* =========================\r\n   Add Todo Button\r\n========================= */\r\n.columns > div > button,\r\n.add-todo-btn {\r\n  width: 100%;\r\n  padding: 10px 18px;\r\n  border: none;\r\n  border-radius: 10px;\r\n  background: #3b82f6;\r\n  color: #ffffff;\r\n  font-weight: 600;\r\n  margin-top: 8px;\r\n  transition: background 0.2s ease;\r\n}\r\n\r\n.columns > div > button:hover,\r\n.add-todo-btn:hover {\r\n  background: #2563eb;\r\n}\r\n\r\n/* =========================\r\n   Todo Cards\r\n========================= */\r\n.card {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 12px;\r\n  background: #f8fafc;\r\n  border: 1px solid #e2e8f0;\r\n  border-left: 4px solid #94a3b8;\r\n  border-radius: 14px;\r\n  padding: 16px;\r\n  margin-bottom: 14px;\r\n  cursor: pointer;\r\n  transition: all 0.2s ease;\r\n}\r\n\r\n.card:hover {\r\n  transform: translateY(-2px);\r\n  box-shadow: 0 8px 18px rgba(15, 23, 42, 0.06);\r\n}\r\n\r\n/* Priority Colors */\r\n.priority-high {\r\n  border-left-color: #ef4444;\r\n}\r\n\r\n.priority-medium {\r\n  border-left-color: #f59e0b;\r\n}\r\n\r\n.priority-low {\r\n  border-left-color: #10b981;\r\n}\r\n\r\n/* =========================\r\n   Card Header\r\n========================= */\r\n.card-header {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 12px;\r\n}\r\n\r\n.card-header input[type=\"checkbox\"] {\r\n  width: 18px;\r\n  height: 18px;\r\n  accent-color: #22c55e;\r\n  flex-shrink: 0;\r\n}\r\n\r\n.card-header h4 {\r\n  flex: 1;\r\n  margin: 0;\r\n  font-size: 1rem;\r\n  font-weight: 600;\r\n  color: #1e293b;\r\n}\r\n\r\n/* =========================\r\n   Card Actions\r\n========================= */\r\n.card-actions {\r\n  display: flex;\r\n  gap: 8px;\r\n}\r\n\r\n.card-actions button {\r\n  border: none;\r\n  padding: 6px 10px;\r\n  border-radius: 8px;\r\n  font-size: 0.8rem;\r\n  font-weight: 600;\r\n}\r\n\r\n.edit-btn {\r\n  background: #dbeafe;\r\n  color: #2563eb;\r\n}\r\n\r\n.edit-btn:hover {\r\n  background: #bfdbfe;\r\n}\r\n\r\n.delete-btn {\r\n  background: #fee2e2;\r\n  color: #dc2626;\r\n}\r\n\r\n.delete-btn:hover {\r\n  background: #fecaca;\r\n}\r\n\r\n/* =========================\r\n   Card Meta\r\n========================= */\r\n.card-meta {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  gap: 12px;\r\n  font-size: 0.85rem;\r\n  color: #64748b;\r\n}\r\n\r\n.priority-badge {\r\n  font-weight: 600;\r\n}\r\n\r\n/* =========================\r\n   Expandable Details\r\n========================= */\r\n.card-details {\r\n  display: none;\r\n  padding-top: 8px;\r\n  border-top: 1px solid #e2e8f0;\r\n  font-size: 0.9rem;\r\n  line-height: 1.5;\r\n  color: #475569;\r\n}\r\n\r\n.card-details.show {\r\n  display: block;\r\n}\r\n\r\n/* =========================\r\n   Completed Todos\r\n========================= */\r\n.columns > div:last-child .card h4 {\r\n  text-decoration: line-through;\r\n  color: #64748b;\r\n}\r\n\r\n.columns > div:last-child .card {\r\n  opacity: 0.9;\r\n}\r\n\r\n/* =========================\r\n   Responsive\r\n========================= */\r\n@media (max-width: 900px) {\r\n  .container {\r\n    flex-direction: column;\r\n  }\r\n\r\n  .sidebar {\r\n    width: 100%;\r\n    border-right: none;\r\n    border-bottom: 1px solid #e2e8f0;\r\n  }\r\n\r\n  .main {\r\n    padding: 24px;\r\n  }\r\n\r\n  .columns {\r\n    grid-template-columns: 1fr;\r\n  }\r\n\r\n  .columns > div {\r\n    max-height: none;\r\n  }\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
(module) {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ },

/***/ "./src/style.css"
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_appController_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/appController.js */ \"./src/modules/appController.js\");\n/* harmony import */ var _modules_DOMController_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/DOMController.js */ \"./src/modules/DOMController.js\");\n\r\n\r\n\r\n\r\nconsole.log(\"index.js loaded\");\r\n\r\n// initialize app (load from storage or create default)\r\n(0,_modules_appController_js__WEBPACK_IMPORTED_MODULE_1__.initApp)();\r\nconsole.log(\"initApp done\");\r\n\r\n// render UI\r\n(0,_modules_DOMController_js__WEBPACK_IMPORTED_MODULE_2__.renderApp)();\r\nconsole.log(\"renderApp done\");\n\n//# sourceURL=webpack://todo-list/./src/index.js?\n}");

/***/ },

/***/ "./src/modules/DOMController.js"
/*!**************************************!*\
  !*** ./src/modules/DOMController.js ***!
  \**************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderApp: () => (/* binding */ renderApp)\n/* harmony export */ });\n/* harmony import */ var _appController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appController.js */ \"./src/modules/appController.js\");\n\r\n\r\nfunction renderApp() {\r\n    const app = document.getElementById('app');\r\n    app.innerHTML = '';\r\n\r\n    app.appendChild(createLayout());\r\n}\r\n\r\nfunction createLayout() {\r\n    const container = document.createElement(\"div\");\r\n    container.classList.add(\"container\");\r\n\r\n    container.appendChild(renderSidebar());\r\n    container.appendChild(renderMain());\r\n\r\n    return container;\r\n}\r\n\r\nfunction renderSidebar() {\r\n    const sidebar = document.createElement(\"div\");\r\n    sidebar.classList.add(\"sidebar\");\r\n\r\n    const projects = (0,_appController_js__WEBPACK_IMPORTED_MODULE_0__.getProjects)();\r\n\r\n    projects.forEach(p => {\r\n        const btn = document.createElement(\"button\");\r\n        btn.textContent = p.name;\r\n\r\n        btn.onclick = () => {\r\n            (0,_appController_js__WEBPACK_IMPORTED_MODULE_0__.setCurrentProject)(p.id);\r\n            renderApp();\r\n        };\r\n        sidebar.appendChild(btn);\r\n    });\r\n\r\n    const addBtn = document.createElement(\"button\");\r\n    addBtn.textContent = \"Add Project\";\r\n\r\n    addBtn.onclick = () => {\r\n        const name = prompt(\"Project Name:\");\r\n        if(name) {\r\n            (0,_appController_js__WEBPACK_IMPORTED_MODULE_0__.createProject)(name);\r\n            renderApp();\r\n        }\r\n    }; \r\n    sidebar.appendChild(addBtn);\r\n    return sidebar;\r\n}\r\n\r\nfunction renderMain() {\r\n    const main = document.createElement(\"div\");\r\n    main.classList.add(\"main\");\r\n\r\n    const project = (0,_appController_js__WEBPACK_IMPORTED_MODULE_0__.getCurrentProject)();\r\n\r\n    if (!project) {\r\n        main.textContent = \"No project selected\";\r\n        return main;\r\n    }\r\n\r\n    const title = document.createElement(\"h2\");\r\n    title.textContent = project.name;\r\n    main.appendChild(title);\r\n    main.appendChild(renderColumns(project)); \r\n\r\n    return main;\r\n}\r\n\r\nfunction renderColumns(project) {\r\n    const wrapper = document.createElement(\"div\");\r\n    wrapper.classList.add(\"columns\");\r\n\r\n    const inProgress = document.createElement(\"div\");\r\n    const completed = document.createElement(\"div\");\r\n\r\n    inProgress.innerHTML = \"<h3>In Progress</h3>\";\r\n    completed.innerHTML = \"<h3>Completed</h3>\";\r\n\r\n    project.todos.forEach(todo => {\r\n        const card = createTodoCard(todo);\r\n        if(todo.completed) {\r\n            completed.appendChild(card);\r\n        } else {\r\n            inProgress.appendChild(card);\r\n        }\r\n    });\r\n\r\n    const addBtn = document.createElement(\"button\");\r\n    addBtn.textContent = \"Add Todo\";\r\n    addBtn.classList.add('add-todo-btn');\r\n\r\n    addBtn.onclick = () => {\r\n        const title = prompt(\"Title:\");\r\n        if (!title) return;\r\n\r\n        const desc = prompt(\"Description:\") || '';\r\n        const date = prompt(\"Due Date:\") || '';\r\n        const priority = prompt(\"Priority (Low, Medium, High):\") || 'Low';\r\n\r\n        (0,_appController_js__WEBPACK_IMPORTED_MODULE_0__.createTodo)(title, desc, date, priority);\r\n        renderApp();\r\n    };\r\n\r\n    inProgress.appendChild(addBtn);\r\n    wrapper.appendChild(inProgress);\r\n    wrapper.appendChild(completed);\r\n\r\n    return wrapper;\r\n}\r\n\r\nfunction createTodoCard(todo) {\r\n    const card = document.createElement(\"div\");\r\n    card.classList.add(\"card\");\r\n    card.classList.add(`priority-${todo.priority.toLowerCase()}`);\r\n\r\n    const header = document.createElement('div');\r\n    header.classList.add('card-header');\r\n\r\n    const checkbox = document.createElement(\"input\");\r\n    checkbox.type = \"checkbox\";\r\n    checkbox.checked = todo.completed;\r\n\r\n    checkbox.onchange = () => {\r\n        (0,_appController_js__WEBPACK_IMPORTED_MODULE_0__.toggleTodo)(todo.id);\r\n        renderApp();\r\n    }\r\n\r\n    const title = document.createElement(\"h4\");\r\n    title.textContent = todo.title;\r\n\r\n    const actions = document.createElement('div');\r\n    actions.classList.add('card-actions');\r\n\r\n    const editBtn = document.createElement('button');\r\n    editBtn.textContent = 'Edit';\r\n    editBtn.classList.add('edit-btn');\r\n\r\n    editBtn.onclick = (e) => {\r\n        e.stopPropagation();\r\n\r\n        const newTitle = prompt('Title:', todo.title);\r\n        if (!newTitle) return;\r\n\r\n        const newDescription = prompt('Description:', todo.description);\r\n        const newDueDate = prompt('Due Date:', todo.dueDate);\r\n        const newPriority = prompt(\r\n            'Priority (Low, Medium, High):',\r\n            todo.priority\r\n    );\r\n\r\n        (0,_appController_js__WEBPACK_IMPORTED_MODULE_0__.updateTodo)(\r\n        todo.id,\r\n        newTitle,\r\n        newDescription,\r\n        newDueDate,\r\n        newPriority\r\n        );\r\n\r\n        renderApp();\r\n    };\r\n\r\n    const deleteBtn = document.createElement(\"button\");\r\n    deleteBtn.textContent = \"Delete\";\r\n    deleteBtn.classList.add('delete-btn');\r\n\r\n    deleteBtn.onclick = (e) => {\r\n        e.stopPropagation();\r\n        (0,_appController_js__WEBPACK_IMPORTED_MODULE_0__.deleteTodo)(todo.id);\r\n        renderApp();\r\n    };\r\n\r\n    actions.appendChild(editBtn);\r\n    actions.appendChild(deleteBtn);\r\n\r\n    header.appendChild(checkbox);\r\n    header.appendChild(title);\r\n    header.appendChild(actions);\r\n\r\n    // Meta information\r\n    const meta = document.createElement('div');\r\n    meta.classList.add('card-meta');\r\n\r\n    const due = document.createElement('span');\r\n    due.textContent = `📅 ${todo.dueDate || 'No due date'}`;\r\n\r\n    const priority = document.createElement('span');\r\n    priority.classList.add('priority-badge');\r\n    priority.textContent = todo.priority;\r\n\r\n    meta.appendChild(due);\r\n    meta.appendChild(priority);\r\n\r\n    // Expandable details\r\n    const details = document.createElement('div');\r\n    details.classList.add('card-details');\r\n    details.textContent = todo.description || 'No description';\r\n\r\n    // Toggle details\r\n    card.addEventListener('click', () => {\r\n        details.classList.toggle('show');\r\n    });\r\n\r\n    card.appendChild(checkbox);\r\n    card.appendChild(title);\r\n    card.appendChild(deleteBtn);\r\n    card.appendChild(header);\r\n    card.appendChild(meta);\r\n    card.appendChild(details);\r\n\r\n    return card;\r\n}\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/modules/DOMController.js?\n}");

/***/ },

/***/ "./src/modules/appController.js"
/*!**************************************!*\
  !*** ./src/modules/appController.js ***!
  \**************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createProject: () => (/* binding */ createProject),\n/* harmony export */   createTodo: () => (/* binding */ createTodo),\n/* harmony export */   deleteProject: () => (/* binding */ deleteProject),\n/* harmony export */   deleteTodo: () => (/* binding */ deleteTodo),\n/* harmony export */   getCurrentProject: () => (/* binding */ getCurrentProject),\n/* harmony export */   getProjects: () => (/* binding */ getProjects),\n/* harmony export */   initApp: () => (/* binding */ initApp),\n/* harmony export */   setCurrentProject: () => (/* binding */ setCurrentProject),\n/* harmony export */   toggleTodo: () => (/* binding */ toggleTodo),\n/* harmony export */   updateTodo: () => (/* binding */ updateTodo)\n/* harmony export */ });\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ \"./src/modules/project.js\");\n/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo.js */ \"./src/modules/todo.js\");\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage.js */ \"./src/modules/storage.js\");\n\r\n\r\n\r\n\r\nlet projects = [];\r\nlet currentProjectId = null;\r\n\r\nfunction initApp() {\r\n  const storedProjects = (0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.loadData)();\r\n\r\n  if (storedProjects.length > 0) {\r\n    projects = storedProjects.map((projectData) => {\r\n      const project = new _project_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](projectData.name);\r\n      project.id = projectData.id;\r\n\r\n      project.todos = projectData.todos.map((todoData) => {\r\n        const todo = new _todo_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\r\n          todoData.title,\r\n          todoData.description,\r\n          todoData.dueDate,\r\n          todoData.priority\r\n        );\r\n\r\n        todo.id = todoData.id;\r\n        todo.completed = todoData.completed;\r\n\r\n        return todo;\r\n      });\r\n\r\n      return project;\r\n    });\r\n  } else {\r\n    const defaultProject = new _project_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"Default\");\r\n    projects.push(defaultProject);\r\n    currentProjectId = defaultProject.id;\r\n    (0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.saveData)(projects);\r\n  }\r\n\r\n  if (!currentProjectId && projects.length > 0) {\r\n    currentProjectId = projects[0].id;\r\n  }\r\n}\r\n\r\nfunction getProjects() {\r\n    return projects;\r\n}\r\n\r\nfunction getCurrentProject() {\r\n    return projects.find(p => p.id === currentProjectId);\r\n}\r\n\r\nfunction setCurrentProject(id) {\r\n    currentProjectId = id;\r\n}\r\n\r\nfunction createProject(name) {\r\n    const newProject = new _project_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](name);\r\n    projects.push(newProject);\r\n    (0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.saveData)(projects);\r\n}\r\n\r\nfunction deleteProject(projectId) {\r\n  projects = projects.filter((project) => project.id !== projectId);\r\n\r\n  // Ensure at least one project exists\r\n  if (projects.length === 0) {\r\n    const defaultProject = new _project_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"Default\");\r\n    projects.push(defaultProject);\r\n  }\r\n\r\n  currentProjectId = projects[0].id;\r\n  (0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.saveData)(projects);\r\n}\r\n\r\nfunction createTodo(title, description, dueDate, priority) {\r\n    const currentProject = getCurrentProject();\r\n\r\n    if (!currentProject) return;\r\n\r\n    const newTodo = new _todo_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](title, description, dueDate, priority);\r\n    currentProject.addTodo(newTodo);\r\n    (0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.saveData)(projects);\r\n}\r\n\r\nfunction toggleTodo(todoId) {\r\n    const currentProject = getCurrentProject();\r\n\r\n    if (!currentProject) return;\r\n\r\n    const todo = currentProject.todos.find(t => t.id === todoId);\r\n    \r\n    if (!todo) return;\r\n    \r\n    todo.toggleComplete();\r\n    (0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.saveData)(projects);\r\n}\r\n\r\nfunction deleteTodo(todoId) {\r\n    const currentProject = getCurrentProject();\r\n\r\n    if (!currentProject) return;\r\n\r\n    currentProject.deleteTodo(todoId);\r\n    (0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.saveData)(projects);\r\n}\r\n\r\nfunction updateTodo(todoId, title, description, dueDate, priority) {\r\n    const currentProject = getCurrentProject();\r\n\r\n    if (!currentProject) return;\r\n\r\n    const todo = currentProject.todos.find((t) => t.id === todoId);\r\n\r\n    if (!todo) return;\r\n\r\n    todo.update(title, description, dueDate, priority);\r\n    (0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.saveData)(projects);\r\n}\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/modules/appController.js?\n}");

/***/ },

/***/ "./src/modules/project.js"
/*!********************************!*\
  !*** ./src/modules/project.js ***!
  \********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\nclass Project {\r\n    constructor(name) {\r\n        this.id = crypto.randomUUID();\r\n        this.name = name;\r\n        this.todos = [];\r\n    }\r\n\r\n    addTodo(todo) {\r\n        this.todos.push(todo);\r\n    }\r\n\r\n    deleteTodo(todoId) {\r\n        this.todos = this.todos.filter(t => t.id != todoId);\r\n    }\r\n}\n\n//# sourceURL=webpack://todo-list/./src/modules/project.js?\n}");

/***/ },

/***/ "./src/modules/storage.js"
/*!********************************!*\
  !*** ./src/modules/storage.js ***!
  \********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadData: () => (/* binding */ loadData),\n/* harmony export */   saveData: () => (/* binding */ saveData)\n/* harmony export */ });\nfunction saveData(projects) {\r\n    localStorage.setItem('projects', JSON.stringify(projects));\r\n}\r\n\r\nfunction loadData() {\r\n    const data = localStorage.getItem('projects');\r\n    return data ? JSON.parse(data) : [];\r\n}\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/modules/storage.js?\n}");

/***/ },

/***/ "./src/modules/todo.js"
/*!*****************************!*\
  !*** ./src/modules/todo.js ***!
  \*****************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Todo)\n/* harmony export */ });\nclass Todo {\r\n    constructor(title, description, dueDate, priority) {\r\n        this.id = crypto.randomUUID();\r\n        this.title = title;\r\n        this.description = description;\r\n        this.dueDate = dueDate;\r\n        this.priority = priority;\r\n        this.completed = false;\r\n    }\r\n\r\n    toggleComplete() {\r\n        this.completed = !this.completed;\r\n    }\r\n\r\n    update(title, description, dueDate, priority) {\r\n        this.title = title;\r\n        this.description = description;\r\n        this.dueDate = dueDate;\r\n        this.priority = priority;\r\n  }\r\n}\n\n//# sourceURL=webpack://todo-list/./src/modules/todo.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;