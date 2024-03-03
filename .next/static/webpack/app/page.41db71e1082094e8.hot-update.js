"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/slices/TechList/index.tsx":
/*!***************************************!*\
  !*** ./src/slices/TechList/index.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_MdCircle_react_icons_md__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=MdCircle!=!react-icons/md */ \"(app-pages-browser)/./node_modules/react-icons/md/index.mjs\");\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gsap */ \"(app-pages-browser)/./node_modules/gsap/index.js\");\n/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gsap/ScrollTrigger */ \"(app-pages-browser)/./node_modules/gsap/ScrollTrigger.js\");\n/* harmony import */ var _components_Bounded__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Bounded */ \"(app-pages-browser)/./src/components/Bounded.tsx\");\n/* harmony import */ var _components_Heading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Heading */ \"(app-pages-browser)/./src/components/Heading.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\ngsap__WEBPACK_IMPORTED_MODULE_4__.gsap.registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_5__.ScrollTrigger);\n/**\n * Component for \"TechList\" Slices.\n */ const TechList = (param)=>{\n    let { slice } = param;\n    _s();\n    const component = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect)(()=>{\n        let ctx = gsap__WEBPACK_IMPORTED_MODULE_4__.gsap.context(()=>{\n            // create as many GSAP animations and/or ScrollTriggers here as you want...\n            const tl = gsap__WEBPACK_IMPORTED_MODULE_4__.gsap.timeline({\n                scrollTrigger: {\n                    pin: true,\n                    start: \"top bottom\",\n                    end: \"bottom top\",\n                    scrub: 4\n                }\n            });\n            tl.fromTo(\".tech-row\", {\n                x: (index)=>{\n                    return index % 2 === 0 ? gsap__WEBPACK_IMPORTED_MODULE_4__.gsap.utils.random(600, 400) : gsap__WEBPACK_IMPORTED_MODULE_4__.gsap.utils.random(-600, -400);\n                }\n            }, {\n                x: (index)=>{\n                    return index % 2 === 0 ? gsap__WEBPACK_IMPORTED_MODULE_4__.gsap.utils.random(-600, -400) : gsap__WEBPACK_IMPORTED_MODULE_4__.gsap.utils.random(600, 400);\n                },\n                ease: \"power1.inOut\"\n            });\n        }, component);\n        return ()=>ctx.revert(); // cleanup!\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        \"data-slice-type\": slice.slice_type,\n        \"data-slice-variation\": slice.variation,\n        className: \"wrapper overflow-hidden\",\n        ref: component,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Bounded__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                as: \"div\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Heading__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    size: \"xl\",\n                    className: \"mb-8\",\n                    as: \"h2\",\n                    children: slice.primary.heading\n                }, void 0, false, {\n                    fileName: \"/Users/harshnaik/Desktop/personal website/finalWebsite/src/slices/TechList/index.tsx\",\n                    lineNumber: 68,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/harshnaik/Desktop/personal website/finalWebsite/src/slices/TechList/index.tsx\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, undefined),\n            slice.items.map((param, index)=>{\n                let { tech_color, tech_name } = param;\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"tech-row mb-8 flex items-center justify-center gap-4 text-slate-500 \",\n                    \"aria-label\": tech_name || \"\",\n                    children: Array.from({\n                        length: 15\n                    }, (_, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"tech-item text-8xl font-extrabold uppercase tracking-tighter\",\n                                    style: {\n                                        color: index === 7 && tech_color ? tech_color : \"inherit\"\n                                    },\n                                    children: tech_name\n                                }, void 0, false, {\n                                    fileName: \"/Users/harshnaik/Desktop/personal website/finalWebsite/src/slices/TechList/index.tsx\",\n                                    lineNumber: 81,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"text-3xl\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_MdCircle_react_icons_md__WEBPACK_IMPORTED_MODULE_6__.MdCircle, {}, void 0, false, {\n                                        fileName: \"/Users/harshnaik/Desktop/personal website/finalWebsite/src/slices/TechList/index.tsx\",\n                                        lineNumber: 92,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/harshnaik/Desktop/personal website/finalWebsite/src/slices/TechList/index.tsx\",\n                                    lineNumber: 91,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, index, true, {\n                            fileName: \"/Users/harshnaik/Desktop/personal website/finalWebsite/src/slices/TechList/index.tsx\",\n                            lineNumber: 80,\n                            columnNumber: 13\n                        }, undefined))\n                }, index, false, {\n                    fileName: \"/Users/harshnaik/Desktop/personal website/finalWebsite/src/slices/TechList/index.tsx\",\n                    lineNumber: 74,\n                    columnNumber: 9\n                }, undefined);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/harshnaik/Desktop/personal website/finalWebsite/src/slices/TechList/index.tsx\",\n        lineNumber: 61,\n        columnNumber: 5\n    }, undefined);\n};\n_s(TechList, \"Q85NMPf9YSVS+dT+/ww9RM+qMgE=\");\n_c = TechList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TechList);\nvar _c;\n$RefreshReg$(_c, \"TechList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9zbGljZXMvVGVjaExpc3QvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBSXVEO0FBQ2I7QUFDZDtBQUN1QjtBQUVSO0FBQ0E7QUFFM0NJLHNDQUFJQSxDQUFDSSxjQUFjLENBQUNILDZEQUFhQTtBQU9qQzs7Q0FFQyxHQUNELE1BQU1JLFdBQVc7UUFBQyxFQUFFQyxLQUFLLEVBQWlCOztJQUN4QyxNQUFNQyxZQUFZVCw2Q0FBTUEsQ0FBQztJQUV6QkQsc0RBQWVBLENBQUM7UUFDZCxJQUFJVyxNQUFNUixzQ0FBSUEsQ0FBQ1MsT0FBTyxDQUFDO1lBQ3JCLDJFQUEyRTtZQUMzRSxNQUFNQyxLQUFLVixzQ0FBSUEsQ0FBQ1csUUFBUSxDQUFDO2dCQUN2QkMsZUFBZTtvQkFDYkMsS0FBSztvQkFDTEMsT0FBTztvQkFDUEMsS0FBSztvQkFDTEMsT0FBTztnQkFDVDtZQUNGO1lBRUFOLEdBQUdPLE1BQU0sQ0FDUCxhQUNBO2dCQUNFQyxHQUFHLENBQUNDO29CQUNGLE9BQU9BLFFBQVEsTUFBTSxJQUNqQm5CLHNDQUFJQSxDQUFDb0IsS0FBSyxDQUFDQyxNQUFNLENBQUMsS0FBSyxPQUN2QnJCLHNDQUFJQSxDQUFDb0IsS0FBSyxDQUFDQyxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUM7Z0JBQy9CO1lBQ0YsR0FDQTtnQkFDRUgsR0FBRyxDQUFDQztvQkFDRixPQUFPQSxRQUFRLE1BQU0sSUFDakJuQixzQ0FBSUEsQ0FBQ29CLEtBQUssQ0FBQ0MsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQ3pCckIsc0NBQUlBLENBQUNvQixLQUFLLENBQUNDLE1BQU0sQ0FBQyxLQUFLO2dCQUM3QjtnQkFDQUMsTUFBTTtZQUNSO1FBRUosR0FBR2Y7UUFDSCxPQUFPLElBQU1DLElBQUllLE1BQU0sSUFBSSxXQUFXO0lBQ3hDLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDQztRQUNDQyxtQkFBaUJuQixNQUFNb0IsVUFBVTtRQUNqQ0Msd0JBQXNCckIsTUFBTXNCLFNBQVM7UUFDckNDLFdBQVU7UUFDVkMsS0FBS3ZCOzswQkFFTCw4REFBQ0wsMkRBQU9BO2dCQUFDNkIsSUFBRzswQkFDViw0RUFBQzVCLDJEQUFPQTtvQkFBQzZCLE1BQUs7b0JBQUtILFdBQVU7b0JBQU9FLElBQUc7OEJBQ3BDekIsTUFBTTJCLE9BQU8sQ0FBQ0MsT0FBTzs7Ozs7Ozs7Ozs7WUFJekI1QixNQUFNNkIsS0FBSyxDQUFDQyxHQUFHLENBQUMsUUFBNEJqQjtvQkFBM0IsRUFBRWtCLFVBQVUsRUFBRUMsU0FBUyxFQUFFO3FDQUN6Qyw4REFBQ0M7b0JBRUNWLFdBQVU7b0JBQ1ZXLGNBQVlGLGFBQWE7OEJBRXhCRyxNQUFNQyxJQUFJLENBQUM7d0JBQUVDLFFBQVE7b0JBQUcsR0FBRyxDQUFDQyxHQUFHekIsc0JBQzlCLDhEQUFDdkIsdURBQWM7OzhDQUNiLDhEQUFDa0Q7b0NBQ0NqQixXQUNFO29DQUVGa0IsT0FBTzt3Q0FDTEMsT0FBTzdCLFVBQVUsS0FBS2tCLGFBQWFBLGFBQWE7b0NBQ2xEOzhDQUVDQzs7Ozs7OzhDQUVILDhEQUFDUTtvQ0FBS2pCLFdBQVU7OENBQ2QsNEVBQUM5QixvRkFBUUE7Ozs7Ozs7Ozs7OzJCQVpRb0I7Ozs7O21CQUxsQkE7Ozs7Ozs7Ozs7OztBQXlCZjtHQTdFTWQ7S0FBQUE7QUErRU4sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NsaWNlcy9UZWNoTGlzdC9pbmRleC50c3g/YjY5ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgQ29udGVudCB9IGZyb20gXCJAcHJpc21pY2lvL2NsaWVudFwiO1xuaW1wb3J0IHsgU2xpY2VDb21wb25lbnRQcm9wcyB9IGZyb20gXCJAcHJpc21pY2lvL3JlYWN0XCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlTGF5b3V0RWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IE1kQ2lyY2xlIH0gZnJvbSBcInJlYWN0LWljb25zL21kXCI7XG5pbXBvcnQgeyBnc2FwIH0gZnJvbSBcImdzYXBcIjtcbmltcG9ydCB7IFNjcm9sbFRyaWdnZXIgfSBmcm9tIFwiZ3NhcC9TY3JvbGxUcmlnZ2VyXCI7XG5cbmltcG9ydCBCb3VuZGVkIGZyb20gXCJAL2NvbXBvbmVudHMvQm91bmRlZFwiO1xuaW1wb3J0IEhlYWRpbmcgZnJvbSBcIkAvY29tcG9uZW50cy9IZWFkaW5nXCI7XG5cbmdzYXAucmVnaXN0ZXJQbHVnaW4oU2Nyb2xsVHJpZ2dlcik7XG5cbi8qKlxuICogUHJvcHMgZm9yIGBUZWNoTGlzdGAuXG4gKi9cbmV4cG9ydCB0eXBlIFRlY2hMaXN0UHJvcHMgPSBTbGljZUNvbXBvbmVudFByb3BzPENvbnRlbnQuVGVjaExpc3RTbGljZT47XG5cbi8qKlxuICogQ29tcG9uZW50IGZvciBcIlRlY2hMaXN0XCIgU2xpY2VzLlxuICovXG5jb25zdCBUZWNoTGlzdCA9ICh7IHNsaWNlIH06IFRlY2hMaXN0UHJvcHMpOiBKU1guRWxlbWVudCA9PiB7XG4gIGNvbnN0IGNvbXBvbmVudCA9IHVzZVJlZihudWxsKTtcblxuICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgIGxldCBjdHggPSBnc2FwLmNvbnRleHQoKCkgPT4ge1xuICAgICAgLy8gY3JlYXRlIGFzIG1hbnkgR1NBUCBhbmltYXRpb25zIGFuZC9vciBTY3JvbGxUcmlnZ2VycyBoZXJlIGFzIHlvdSB3YW50Li4uXG4gICAgICBjb25zdCB0bCA9IGdzYXAudGltZWxpbmUoe1xuICAgICAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICAgICAgcGluOiB0cnVlLCAvLyBwaW4gdGhlIHRyaWdnZXIgZWxlbWVudCB3aGlsZSBhY3RpdmVcbiAgICAgICAgICBzdGFydDogXCJ0b3AgYm90dG9tXCIsXG4gICAgICAgICAgZW5kOiBcImJvdHRvbSB0b3BcIixcbiAgICAgICAgICBzY3J1YjogNCxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuXG4gICAgICB0bC5mcm9tVG8oXG4gICAgICAgIFwiLnRlY2gtcm93XCIsXG4gICAgICAgIHtcbiAgICAgICAgICB4OiAoaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBpbmRleCAlIDIgPT09IDBcbiAgICAgICAgICAgICAgPyBnc2FwLnV0aWxzLnJhbmRvbSg2MDAsIDQwMClcbiAgICAgICAgICAgICAgOiBnc2FwLnV0aWxzLnJhbmRvbSgtNjAwLCAtNDAwKTtcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgeDogKGluZGV4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gaW5kZXggJSAyID09PSAwXG4gICAgICAgICAgICAgID8gZ3NhcC51dGlscy5yYW5kb20oLTYwMCwgLTQwMClcbiAgICAgICAgICAgICAgOiBnc2FwLnV0aWxzLnJhbmRvbSg2MDAsIDQwMCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBlYXNlOiBcInBvd2VyMS5pbk91dFwiLFxuICAgICAgICB9LFxuICAgICAgKTtcbiAgICB9LCBjb21wb25lbnQpO1xuICAgIHJldHVybiAoKSA9PiBjdHgucmV2ZXJ0KCk7IC8vIGNsZWFudXAhXG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uXG4gICAgICBkYXRhLXNsaWNlLXR5cGU9e3NsaWNlLnNsaWNlX3R5cGV9XG4gICAgICBkYXRhLXNsaWNlLXZhcmlhdGlvbj17c2xpY2UudmFyaWF0aW9ufVxuICAgICAgY2xhc3NOYW1lPVwid3JhcHBlciBvdmVyZmxvdy1oaWRkZW5cIlxuICAgICAgcmVmPXtjb21wb25lbnR9XG4gICAgPlxuICAgICAgPEJvdW5kZWQgYXM9XCJkaXZcIj5cbiAgICAgICAgPEhlYWRpbmcgc2l6ZT1cInhsXCIgY2xhc3NOYW1lPVwibWItOFwiIGFzPVwiaDJcIj5cbiAgICAgICAgICB7c2xpY2UucHJpbWFyeS5oZWFkaW5nfVxuICAgICAgICA8L0hlYWRpbmc+XG4gICAgICA8L0JvdW5kZWQ+XG5cbiAgICAgIHtzbGljZS5pdGVtcy5tYXAoKHsgdGVjaF9jb2xvciwgdGVjaF9uYW1lIH0sIGluZGV4KSA9PiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgIGNsYXNzTmFtZT1cInRlY2gtcm93IG1iLTggZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTQgdGV4dC1zbGF0ZS01MDAgXCJcbiAgICAgICAgICBhcmlhLWxhYmVsPXt0ZWNoX25hbWUgfHwgXCJcIn1cbiAgICAgICAgPlxuICAgICAgICAgIHtBcnJheS5mcm9tKHsgbGVuZ3RoOiAxNSB9LCAoXywgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgICAgXCJ0ZWNoLWl0ZW0gdGV4dC04eGwgZm9udC1leHRyYWJvbGQgdXBwZXJjYXNlIHRyYWNraW5nLXRpZ2h0ZXJcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgY29sb3I6IGluZGV4ID09PSA3ICYmIHRlY2hfY29sb3IgPyB0ZWNoX2NvbG9yIDogXCJpbmhlcml0XCIsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt0ZWNoX25hbWV9XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC0zeGxcIj5cbiAgICAgICAgICAgICAgICA8TWRDaXJjbGUgLz5cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApKX1cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUZWNoTGlzdDsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VMYXlvdXRFZmZlY3QiLCJ1c2VSZWYiLCJNZENpcmNsZSIsImdzYXAiLCJTY3JvbGxUcmlnZ2VyIiwiQm91bmRlZCIsIkhlYWRpbmciLCJyZWdpc3RlclBsdWdpbiIsIlRlY2hMaXN0Iiwic2xpY2UiLCJjb21wb25lbnQiLCJjdHgiLCJjb250ZXh0IiwidGwiLCJ0aW1lbGluZSIsInNjcm9sbFRyaWdnZXIiLCJwaW4iLCJzdGFydCIsImVuZCIsInNjcnViIiwiZnJvbVRvIiwieCIsImluZGV4IiwidXRpbHMiLCJyYW5kb20iLCJlYXNlIiwicmV2ZXJ0Iiwic2VjdGlvbiIsImRhdGEtc2xpY2UtdHlwZSIsInNsaWNlX3R5cGUiLCJkYXRhLXNsaWNlLXZhcmlhdGlvbiIsInZhcmlhdGlvbiIsImNsYXNzTmFtZSIsInJlZiIsImFzIiwic2l6ZSIsInByaW1hcnkiLCJoZWFkaW5nIiwiaXRlbXMiLCJtYXAiLCJ0ZWNoX2NvbG9yIiwidGVjaF9uYW1lIiwiZGl2IiwiYXJpYS1sYWJlbCIsIkFycmF5IiwiZnJvbSIsImxlbmd0aCIsIl8iLCJGcmFnbWVudCIsInNwYW4iLCJzdHlsZSIsImNvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/slices/TechList/index.tsx\n"));

/***/ })

});