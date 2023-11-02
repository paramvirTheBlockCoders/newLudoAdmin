"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./Component/RegistrationPage.js":
/*!***************************************!*\
  !*** ./Component/RegistrationPage.js ***!
  \***************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ \"react-toastify\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_3__]);\nreact_toastify__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\nconst Login = ()=>{\n    const emailRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    const passwordRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)(); // this route helps us to going next page\n    async function login(data) {\n        console.log(data, \"from send\");\n        try {\n            const res = await axios__WEBPACK_IMPORTED_MODULE_1___default().post(\"api/login\", data);\n            const response = res.data;\n            console.log(response.data.data, \"response data!!!!!!!\");\n            // console.log(response.data.data.xx.data, \"to check the token for storage\")\n            localStorage.setItem(\"token\", response.data.data);\n            notify(\"User Login Successfully\");\n            setTimeout(()=>{\n                router.push(\"/dashboard\"); // here we are going to next page\n            }, 1000);\n        } catch (err) {\n            notifyError(\"Please Check Email or Password\");\n            console.log(err);\n        }\n    }\n    function onSubmitHandler(event) {\n        event.preventDefault();\n        const email = emailRef.current.value;\n        const password = passwordRef.current.value;\n        const data = {\n            email,\n            password\n        };\n        console.log(data, \"data here\");\n        login(data);\n    }\n    const notify = (msg)=>react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.success(msg, {\n            position: \"top-right\",\n            autoClose: 6000,\n            hideProgressBar: false,\n            closeOnClick: true,\n            pauseOnHover: true,\n            draggable: true,\n            progress: undefined\n        })\n    ;\n    const notifyError = (msg)=>react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error(msg, {\n            position: \"top-right\",\n            autoClose: 6000,\n            hideProgressBar: false,\n            closeOnClick: true,\n            pauseOnHover: true,\n            draggable: true,\n            progress: undefined\n        })\n    ;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                class: \"profile-sec pb-0\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    class: \"container\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        class: \"row justify-content-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_3__.ToastContainer, {\n                                position: \"top-right\",\n                                autoClose: 6000,\n                                hideProgressBar: false,\n                                newestOnTop: false,\n                                closeOnClick: true,\n                                rtl: false,\n                                pauseOnFocusLoss: true,\n                                draggable: true,\n                                pauseOnHover: true\n                            }, void 0, false, {\n                                fileName: \"/Users/mac1/Desktop/param/parm/project/ludoadmin/Component/RegistrationPage.js\",\n                                lineNumber: 74,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                class: \"input-sec\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        class: \"line profile-line\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mac1/Desktop/param/parm/project/ludoadmin/Component/RegistrationPage.js\",\n                                        lineNumber: 87,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        class: \"heading-text pink-text mt-2\",\n                                        children: \" LOGIN ADMIN\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mac1/Desktop/param/parm/project/ludoadmin/Component/RegistrationPage.js\",\n                                        lineNumber: 88,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        class: \"name-sec\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"input-item\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                                    className: \"item-text\",\n                                                    children: \"EMAIL\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/mac1/Desktop/param/parm/project/ludoadmin/Component/RegistrationPage.js\",\n                                                    lineNumber: 92,\n                                                    columnNumber: 19\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                    ref: emailRef,\n                                                    className: \"textinput\",\n                                                    type: \"email\",\n                                                    name: \"username\",\n                                                    placeholder: \"Enter your Email\",\n                                                    required: true\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/mac1/Desktop/param/parm/project/ludoadmin/Component/RegistrationPage.js\",\n                                                    lineNumber: 93,\n                                                    columnNumber: 19\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/mac1/Desktop/param/parm/project/ludoadmin/Component/RegistrationPage.js\",\n                                            lineNumber: 91,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mac1/Desktop/param/parm/project/ludoadmin/Component/RegistrationPage.js\",\n                                        lineNumber: 90,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"input-item\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                                className: \"item-text\",\n                                                children: \"PASSWORD\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/mac1/Desktop/param/parm/project/ludoadmin/Component/RegistrationPage.js\",\n                                                lineNumber: 105,\n                                                columnNumber: 19\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                ref: passwordRef,\n                                                className: \"textinput\",\n                                                type: \"password\",\n                                                name: \"last-name\",\n                                                placeholder: \"Enter your Password\",\n                                                required: true\n                                            }, void 0, false, {\n                                                fileName: \"/Users/mac1/Desktop/param/parm/project/ludoadmin/Component/RegistrationPage.js\",\n                                                lineNumber: 106,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/mac1/Desktop/param/parm/project/ludoadmin/Component/RegistrationPage.js\",\n                                        lineNumber: 104,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: \"funds-page.html\",\n                                        class: \"btn btn-round btn-warning w-100 \",\n                                        style: {\n                                            marginTop: \"126px\",\n                                            marginBottom: \"20px\"\n                                        },\n                                        type: \"button\",\n                                        onClick: onSubmitHandler,\n                                        children: \"CONTINUE\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mac1/Desktop/param/parm/project/ludoadmin/Component/RegistrationPage.js\",\n                                        lineNumber: 117,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"para-text\",\n                                        children: [\n                                            \"Forgot Password?\",\n                                            \" \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                style: {\n                                                    fontWeight: \"600\"\n                                                },\n                                                children: \"FORGOT\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/mac1/Desktop/param/parm/project/ludoadmin/Component/RegistrationPage.js\",\n                                                lineNumber: 131,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/mac1/Desktop/param/parm/project/ludoadmin/Component/RegistrationPage.js\",\n                                        lineNumber: 127,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/mac1/Desktop/param/parm/project/ludoadmin/Component/RegistrationPage.js\",\n                                lineNumber: 86,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/mac1/Desktop/param/parm/project/ludoadmin/Component/RegistrationPage.js\",\n                        lineNumber: 73,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/mac1/Desktop/param/parm/project/ludoadmin/Component/RegistrationPage.js\",\n                    lineNumber: 72,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/mac1/Desktop/param/parm/project/ludoadmin/Component/RegistrationPage.js\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"script\", {\n                src: \"js/bootstrap.bundle.js\"\n            }, void 0, false, {\n                fileName: \"/Users/mac1/Desktop/param/parm/project/ludoadmin/Component/RegistrationPage.js\",\n                lineNumber: 138,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mac1/Desktop/param/parm/project/ludoadmin/Component/RegistrationPage.js\",\n        lineNumber: 70,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cUJBQXFCO2dEQUNqQ0MsUUFBUTs7Ozs7eURBQ1I7Ozs7OztpREFDRTtrREFHUiw4REFBQ0MsR0FBQzt3Q0FDQUMsSUFBSSxFQUFDLGlCQUFpQjt3Q0FDdEJmLEtBQUssRUFBQyxrQ0FBa0M7d0NBQ3hDZ0IsS0FBSyxFQUFFOzRDQUFFQyxTQUFTLEVBQUUsT0FBTzs0Q0FBRUMsWUFBWSxFQUFFLE1BQU07eUNBQUU7d0NBQ25EUixJQUFJLEVBQUMsUUFBUTt3Q0FDYlMsT0FBTyxFQUFFdkMsZUFBZTtrREFDekIsVUFFRDs7Ozs7aURBQUk7a0RBRUosOERBQUN3QyxHQUFDO3dDQUFDZCxTQUFTLEVBQUMsV0FBVzs7NENBRXRCLGtCQUNnQjs0Q0FBQyxHQUFHOzBEQUNwQiw4REFBQ2UsTUFBSTtnREFBQ0wsS0FBSyxFQUFFO29EQUFFTSxVQUFVLEVBQUUsS0FBSztpREFBRTswREFBRSxRQUFNOzs7Ozt5REFBTzs7Ozs7O2lEQUMvQzs7Ozs7O3lDQUNDOzs7Ozs7aUNBQ0g7Ozs7OzZCQUNGOzs7Ozt5QkFDRTswQkFFViw4REFBQ0MsUUFBTTtnQkFBQ0MsR0FBRyxFQUFDLHdCQUF3Qjs7Ozs7eUJBQVU7Ozs7OztpQkFDMUMsQ0FDTjtDQUNIO0FBRUQsaUVBQWU5RCxLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sdWRvYWRtaW4vLi9Db21wb25lbnQvUmVnaXN0cmF0aW9uUGFnZS5qcz9kOWNkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyLCB0b2FzdCB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmNvbnN0IExvZ2luID0gKCkgPT4ge1xuICBjb25zdCBlbWFpbFJlZiA9IHVzZVJlZigpO1xuICBjb25zdCBwYXNzd29yZFJlZiA9IHVzZVJlZigpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTsgLy8gdGhpcyByb3V0ZSBoZWxwcyB1cyB0byBnb2luZyBuZXh0IHBhZ2VcblxuICBhc3luYyBmdW5jdGlvbiBsb2dpbihkYXRhKSB7XG4gICAgY29uc29sZS5sb2coZGF0YSxcImZyb20gc2VuZFwiKTtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MucG9zdChcImFwaS9sb2dpblwiLCBkYXRhKTtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVzLmRhdGE7XG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhLmRhdGEsIFwicmVzcG9uc2UgZGF0YSEhISEhISFcIik7XG4gICAgICAvLyBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhLmRhdGEueHguZGF0YSwgXCJ0byBjaGVjayB0aGUgdG9rZW4gZm9yIHN0b3JhZ2VcIilcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIHJlc3BvbnNlLmRhdGEuZGF0YSlcblxuICAgICAgbm90aWZ5KFwiVXNlciBMb2dpbiBTdWNjZXNzZnVsbHlcIik7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgcm91dGVyLnB1c2goXCIvZGFzaGJvYXJkXCIpOyAvLyBoZXJlIHdlIGFyZSBnb2luZyB0byBuZXh0IHBhZ2VcbiAgICAgIH0sIDEwMDApO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgbm90aWZ5RXJyb3IoXCJQbGVhc2UgQ2hlY2sgRW1haWwgb3IgUGFzc3dvcmRcIik7XG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgIH1cbiAgfVxuICBcblxuICBmdW5jdGlvbiBvblN1Ym1pdEhhbmRsZXIoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgZW1haWwgPSBlbWFpbFJlZi5jdXJyZW50LnZhbHVlO1xuICAgIGNvbnN0IHBhc3N3b3JkID0gcGFzc3dvcmRSZWYuY3VycmVudC52YWx1ZTtcblxuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICBlbWFpbCxcbiAgICAgIHBhc3N3b3JkLFxuICAgIH07XG5cbiAgICBjb25zb2xlLmxvZyhkYXRhLCBcImRhdGEgaGVyZVwiKTtcblxuICAgIGxvZ2luKGRhdGEpO1xuICB9XG5cbiAgY29uc3Qgbm90aWZ5ID0gKG1zZykgPT5cbiAgICB0b2FzdC5zdWNjZXNzKG1zZywge1xuICAgICAgcG9zaXRpb246IFwidG9wLXJpZ2h0XCIsXG4gICAgICBhdXRvQ2xvc2U6IDYwMDAsXG4gICAgICBoaWRlUHJvZ3Jlc3NCYXI6IGZhbHNlLFxuICAgICAgY2xvc2VPbkNsaWNrOiB0cnVlLFxuICAgICAgcGF1c2VPbkhvdmVyOiB0cnVlLFxuICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxuICAgICAgcHJvZ3Jlc3M6IHVuZGVmaW5lZCxcbiAgICB9KTtcblxuICBjb25zdCBub3RpZnlFcnJvciA9IChtc2cpID0+XG4gICAgdG9hc3QuZXJyb3IobXNnLCB7XG4gICAgICBwb3NpdGlvbjogXCJ0b3AtcmlnaHRcIixcbiAgICAgIGF1dG9DbG9zZTogNjAwMCxcbiAgICAgIGhpZGVQcm9ncmVzc0JhcjogZmFsc2UsXG4gICAgICBjbG9zZU9uQ2xpY2s6IHRydWUsXG4gICAgICBwYXVzZU9uSG92ZXI6IHRydWUsXG4gICAgICBkcmFnZ2FibGU6IHRydWUsXG4gICAgICBwcm9ncmVzczogdW5kZWZpbmVkLFxuICAgIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxzZWN0aW9uIGNsYXNzPVwicHJvZmlsZS1zZWMgcGItMFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICAgICAgICA8VG9hc3RDb250YWluZXJcbiAgICAgICAgICAgICAgcG9zaXRpb249XCJ0b3AtcmlnaHRcIlxuICAgICAgICAgICAgICBhdXRvQ2xvc2U9ezYwMDB9XG4gICAgICAgICAgICAgIGhpZGVQcm9ncmVzc0Jhcj17ZmFsc2V9XG4gICAgICAgICAgICAgIG5ld2VzdE9uVG9wPXtmYWxzZX1cbiAgICAgICAgICAgICAgY2xvc2VPbkNsaWNrXG4gICAgICAgICAgICAgIHJ0bD17ZmFsc2V9XG4gICAgICAgICAgICAgIHBhdXNlT25Gb2N1c0xvc3NcbiAgICAgICAgICAgICAgZHJhZ2dhYmxlXG4gICAgICAgICAgICAgIHBhdXNlT25Ib3ZlclxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgPGZvcm0gY2xhc3M9XCJpbnB1dC1zZWNcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpbmUgcHJvZmlsZS1saW5lXCI+PC9kaXY+XG4gICAgICAgICAgICAgIDxoMyBjbGFzcz1cImhlYWRpbmctdGV4dCBwaW5rLXRleHQgbXQtMlwiPiBMT0dJTiBBRE1JTjwvaDM+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWUtc2VjXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwiaXRlbS10ZXh0XCI+RU1BSUw8L2g2PlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHJlZj17ZW1haWxSZWZ9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHRpbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ1c2VybmFtZVwiXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBFbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwiaXRlbS10ZXh0XCI+UEFTU1dPUkQ8L2g2PlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHJlZj17cGFzc3dvcmRSZWZ9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHRpbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJsYXN0LW5hbWVcIlxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgUGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGhyZWY9XCJmdW5kcy1wYWdlLmh0bWxcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1yb3VuZCBidG4td2FybmluZyB3LTEwMCBcIlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblRvcDogXCIxMjZweFwiLCBtYXJnaW5Cb3R0b206IFwiMjBweFwiIH19XG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17b25TdWJtaXRIYW5kbGVyfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgQ09OVElOVUVcbiAgICAgICAgICAgICAgPC9hPlxuXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBhcmEtdGV4dFwiXG4gICAgICAgICAgICAgIC8vICBvbkNsaWNrPXtmb3Jnb3RIYW5kbGVyfVxuICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIEZvcmdvdCBQYXNzd29yZD97XCIgXCJ9XG4gICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFdlaWdodDogXCI2MDBcIiB9fT5GT1JHT1Q8L3NwYW4+XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG5cbiAgICAgIDxzY3JpcHQgc3JjPVwianMvYm9vdHN0cmFwLmJ1bmRsZS5qc1wiPjwvc2NyaXB0PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTG9naW47XG4iXSwibmFtZXMiOlsiYXhpb3MiLCJSZWFjdCIsInVzZVJlZiIsIlRvYXN0Q29udGFpbmVyIiwidG9hc3QiLCJ1c2VSb3V0ZXIiLCJMb2dpbiIsImVtYWlsUmVmIiwicGFzc3dvcmRSZWYiLCJyb3V0ZXIiLCJsb2dpbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwicmVzIiwicG9zdCIsInJlc3BvbnNlIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIm5vdGlmeSIsInNldFRpbWVvdXQiLCJwdXNoIiwiZXJyIiwibm90aWZ5RXJyb3IiLCJvblN1Ym1pdEhhbmRsZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZW1haWwiLCJjdXJyZW50IiwidmFsdWUiLCJwYXNzd29yZCIsIm1zZyIsInN1Y2Nlc3MiLCJwb3NpdGlvbiIsImF1dG9DbG9zZSIsImhpZGVQcm9ncmVzc0JhciIsImNsb3NlT25DbGljayIsInBhdXNlT25Ib3ZlciIsImRyYWdnYWJsZSIsInByb2dyZXNzIiwidW5kZWZpbmVkIiwiZXJyb3IiLCJkaXYiLCJzZWN0aW9uIiwiY2xhc3MiLCJuZXdlc3RPblRvcCIsInJ0bCIsInBhdXNlT25Gb2N1c0xvc3MiLCJmb3JtIiwiaDMiLCJjbGFzc05hbWUiLCJoNiIsImlucHV0IiwicmVmIiwidHlwZSIsIm5hbWUiLCJwbGFjZWhvbGRlciIsInJlcXVpcmVkIiwiYSIsImhyZWYiLCJzdHlsZSIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsIm9uQ2xpY2siLCJwIiwic3BhbiIsImZvbnRXZWlnaHQiLCJzY3JpcHQiLCJzcmMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Component/RegistrationPage.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Component_RegistrationPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Component/RegistrationPage */ \"./Component/RegistrationPage.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Component_RegistrationPage__WEBPACK_IMPORTED_MODULE_2__]);\n_Component_RegistrationPage__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nconst registrationPage = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Component_RegistrationPage__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n            fileName: \"/Users/mac1/Desktop/param/parm/project/ludoadmin/pages/index.js\",\n            lineNumber: 9,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/mac1/Desktop/param/parm/project/ludoadmin/pages/index.js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (registrationPage); // export async function getServerSideProps(context) {\n //   const session = await getSession(context)\n //   if (session) {\n //     return {\n //       redirect: {\n //         destination: \"/dashboard\",\n //         permanent: false,\n //       }\n //     }\n //   }\n //   return {\n //     props:{\n //       session\n //     }\n //   }\n // }\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQTBCO0FBQ21DO0FBQ2xCO0FBRzNDLE1BQU1HLGdCQUFnQixHQUFHLElBQU07SUFDN0IscUJBQ0UsOERBQUNDLEtBQUc7a0JBQ0EsNEVBQUNILG1FQUFnQjs7OztxQkFBRTs7Ozs7aUJBRWpCLENBQ1A7Q0FDRjtBQUVELGlFQUFlRSxnQkFBZ0IsRUFBQyxDQUVoQyxzREFBc0Q7Q0FDdEQsOENBQThDO0NBQzlDLG1CQUFtQjtDQUNuQixlQUFlO0NBQ2Ysb0JBQW9CO0NBQ3BCLHFDQUFxQztDQUNyQyw0QkFBNEI7Q0FDNUIsVUFBVTtDQUNWLFFBQVE7Q0FDUixNQUFNO0NBQ04sYUFBYTtDQUNiLGNBQWM7Q0FDZCxnQkFBZ0I7Q0FDaEIsUUFBUTtDQUNSLE1BQU07Q0FDTixJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbHVkb2FkbWluLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlZ2lzdHJhdGlvblBhZ2UgZnJvbSAnLi4vQ29tcG9uZW50L1JlZ2lzdHJhdGlvblBhZ2UnO1xuaW1wb3J0IHtnZXRTZXNzaW9ufSBmcm9tICduZXh0LWF1dGgvcmVhY3QnO1xuXG5cbmNvbnN0IHJlZ2lzdHJhdGlvblBhZ2UgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgICAgPFJlZ2lzdHJhdGlvblBhZ2UvPlxuICBcbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCByZWdpc3RyYXRpb25QYWdlO1xuXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcbi8vICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oY29udGV4dClcbi8vICAgaWYgKHNlc3Npb24pIHtcbi8vICAgICByZXR1cm4ge1xuLy8gICAgICAgcmVkaXJlY3Q6IHtcbi8vICAgICAgICAgZGVzdGluYXRpb246IFwiL2Rhc2hib2FyZFwiLFxuLy8gICAgICAgICBwZXJtYW5lbnQ6IGZhbHNlLFxuLy8gICAgICAgfVxuLy8gICAgIH1cbi8vICAgfVxuLy8gICByZXR1cm4ge1xuLy8gICAgIHByb3BzOntcbi8vICAgICAgIHNlc3Npb25cbi8vICAgICB9XG4vLyAgIH1cbi8vIH0iXSwibmFtZXMiOlsiUmVhY3QiLCJSZWdpc3RyYXRpb25QYWdlIiwiZ2V0U2Vzc2lvbiIsInJlZ2lzdHJhdGlvblBhZ2UiLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/***/ ((module) => {

module.exports = import("react-toastify");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();