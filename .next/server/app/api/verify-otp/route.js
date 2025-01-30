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
exports.id = "app/api/verify-otp/route";
exports.ids = ["app/api/verify-otp/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("mongoose");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fverify-otp%2Froute&page=%2Fapi%2Fverify-otp%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fverify-otp%2Froute.js&appDir=F%3A%5CJose%5Cdragcart%5CArchive%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=F%3A%5CJose%5Cdragcart%5CArchive&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fverify-otp%2Froute&page=%2Fapi%2Fverify-otp%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fverify-otp%2Froute.js&appDir=F%3A%5CJose%5Cdragcart%5CArchive%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=F%3A%5CJose%5Cdragcart%5CArchive&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var F_Jose_dragcart_Archive_src_app_api_verify_otp_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/verify-otp/route.js */ \"(rsc)/./src/app/api/verify-otp/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/verify-otp/route\",\n        pathname: \"/api/verify-otp\",\n        filename: \"route\",\n        bundlePath: \"app/api/verify-otp/route\"\n    },\n    resolvedPagePath: \"F:\\\\Jose\\\\dragcart\\\\Archive\\\\src\\\\app\\\\api\\\\verify-otp\\\\route.js\",\n    nextConfigOutput,\n    userland: F_Jose_dragcart_Archive_src_app_api_verify_otp_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZ2ZXJpZnktb3RwJTJGcm91dGUmcGFnZT0lMkZhcGklMkZ2ZXJpZnktb3RwJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGdmVyaWZ5LW90cCUyRnJvdXRlLmpzJmFwcERpcj1GJTNBJTVDSm9zZSU1Q2RyYWdjYXJ0JTVDQXJjaGl2ZSU1Q3NyYyU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9RiUzQSU1Q0pvc2UlNUNkcmFnY2FydCU1Q0FyY2hpdmUmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQ2dCO0FBQzdGO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXNEO0FBQzlEO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzBGOztBQUUxRiIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJGOlxcXFxKb3NlXFxcXGRyYWdjYXJ0XFxcXEFyY2hpdmVcXFxcc3JjXFxcXGFwcFxcXFxhcGlcXFxcdmVyaWZ5LW90cFxcXFxyb3V0ZS5qc1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvdmVyaWZ5LW90cC9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL3ZlcmlmeS1vdHBcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL3ZlcmlmeS1vdHAvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJGOlxcXFxKb3NlXFxcXGRyYWdjYXJ0XFxcXEFyY2hpdmVcXFxcc3JjXFxcXGFwcFxcXFxhcGlcXFxcdmVyaWZ5LW90cFxcXFxyb3V0ZS5qc1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fverify-otp%2Froute&page=%2Fapi%2Fverify-otp%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fverify-otp%2Froute.js&appDir=F%3A%5CJose%5Cdragcart%5CArchive%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=F%3A%5CJose%5Cdragcart%5CArchive&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./src/app/api/verify-otp/route.js":
/*!*****************************************!*\
  !*** ./src/app/api/verify-otp/route.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/mongodb */ \"(rsc)/./src/lib/mongodb.js\");\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/models/User */ \"(rsc)/./src/models/User.js\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jsonwebtoken */ \"(rsc)/./node_modules/jsonwebtoken/index.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nasync function POST(req) {\n    try {\n        await (0,_lib_mongodb__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n        const { phone, otp, username } = await req.json();\n        console.log(username);\n        if (!phone || !otp) {\n            return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n                error: \"Phone and OTP are required\"\n            }, {\n                status: 400\n            });\n        }\n        if (!global.otpStore || !global.otpStore[phone]) {\n            return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n                error: \"Invalid phone number or OTP expired\"\n            }, {\n                status: 400\n            });\n        }\n        if (global.otpStore[phone].otp !== parseInt(otp)) {\n            return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n                error: \"Invalid OTP\"\n            }, {\n                status: 400\n            });\n        }\n        if (Date.now() > global.otpStore[phone].expiresAt) {\n            return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n                error: \"OTP expired\"\n            }, {\n                status: 400\n            });\n        }\n        delete global.otpStore[phone]; // Remove OTP after verification\n        const existingUserser = await _models_User__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findOne({\n            phone\n        });\n        if (existingUserser) {\n            const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default().sign({\n                id: existingUserser._id\n            }, process.env.JWT_SECRET_KEY, {\n                expiresIn: '1h'\n            });\n            return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n                token,\n                success: true,\n                message: \"login successfully!\",\n                loginUser: existingUserser?.username\n            }, {\n                status: 200\n            });\n        }\n        const newUser = new _models_User__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n            username: username,\n            phone: phone\n        });\n        await newUser.save();\n        const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default().sign({\n            id: newUser._id\n        }, process.env.JWT_SECRET_KEY, {\n            expiresIn: '1h'\n        });\n        // return NextResponse.json(newUser, { status: 200 })\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n            token,\n            success: true,\n            message: \"Register successfully!\",\n            data: newUser\n        }, {\n            status: 200\n        });\n    // return NextResponse.json({ success: true, message: \"OTP verified successfully!\" });\n    } catch (error) {\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n            error: \"Verification failed\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS92ZXJpZnktb3RwL3JvdXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFrRDtBQUNqQjtBQUNVO0FBQ1o7QUFFeEIsZUFBZUksS0FBS0MsR0FBRztJQUM1QixJQUFJO1FBQ0YsTUFBTUwsd0RBQXFCQTtRQUMzQixNQUFNLEVBQUVNLEtBQUssRUFBRUMsR0FBRyxFQUFFQyxRQUFRLEVBQUUsR0FBRyxNQUFNSCxJQUFJSSxJQUFJO1FBQy9DQyxRQUFRQyxHQUFHLENBQUNIO1FBR1osSUFBSSxDQUFDRixTQUFTLENBQUNDLEtBQUs7WUFDbEIsT0FBT0wscURBQVlBLENBQUNPLElBQUksQ0FBQztnQkFBRUcsT0FBTztZQUE2QixHQUFHO2dCQUFFQyxRQUFRO1lBQUk7UUFDbEY7UUFFQSxJQUFJLENBQUNDLE9BQU9DLFFBQVEsSUFBSSxDQUFDRCxPQUFPQyxRQUFRLENBQUNULE1BQU0sRUFBRTtZQUMvQyxPQUFPSixxREFBWUEsQ0FBQ08sSUFBSSxDQUFDO2dCQUFFRyxPQUFPO1lBQXNDLEdBQUc7Z0JBQUVDLFFBQVE7WUFBSTtRQUMzRjtRQUVBLElBQUlDLE9BQU9DLFFBQVEsQ0FBQ1QsTUFBTSxDQUFDQyxHQUFHLEtBQUtTLFNBQVNULE1BQU07WUFDaEQsT0FBT0wscURBQVlBLENBQUNPLElBQUksQ0FBQztnQkFBRUcsT0FBTztZQUFjLEdBQUc7Z0JBQUVDLFFBQVE7WUFBSTtRQUNuRTtRQUVBLElBQUlJLEtBQUtDLEdBQUcsS0FBS0osT0FBT0MsUUFBUSxDQUFDVCxNQUFNLENBQUNhLFNBQVMsRUFBRTtZQUNqRCxPQUFPakIscURBQVlBLENBQUNPLElBQUksQ0FBQztnQkFBRUcsT0FBTztZQUFjLEdBQUc7Z0JBQUVDLFFBQVE7WUFBSTtRQUNuRTtRQUVBLE9BQU9DLE9BQU9DLFFBQVEsQ0FBQ1QsTUFBTSxFQUFFLGdDQUFnQztRQUMvRCxNQUFNYyxrQkFBa0IsTUFBTW5CLG9EQUFJQSxDQUFDb0IsT0FBTyxDQUFDO1lBQUVmO1FBQU07UUFDbkQsSUFBSWMsaUJBQWlCO1lBQ25CLE1BQU1FLFFBQVFuQix3REFBUSxDQUFDO2dCQUFFcUIsSUFBSUosZ0JBQWdCSyxHQUFHO1lBQUMsR0FBR0MsUUFBUUMsR0FBRyxDQUFDQyxjQUFjLEVBQUU7Z0JBQUVDLFdBQVc7WUFBSztZQUNsRyxPQUFPM0IscURBQVlBLENBQUNPLElBQUksQ0FBQztnQkFBRWE7Z0JBQU9RLFNBQVM7Z0JBQU1DLFNBQVM7Z0JBQXVCQyxXQUFXWixpQkFBaUJaO1lBQVMsR0FBRztnQkFBRUssUUFBUTtZQUFJO1FBQ3pJO1FBQ0EsTUFBTW9CLFVBQVUsSUFBSWhDLG9EQUFJQSxDQUFDO1lBQUVPLFVBQVVBO1lBQVVGLE9BQU9BO1FBQU07UUFDNUQsTUFBTTJCLFFBQVFDLElBQUk7UUFDbEIsTUFBTVosUUFBUW5CLHdEQUFRLENBQUM7WUFBRXFCLElBQUlTLFFBQVFSLEdBQUc7UUFBQyxHQUFHQyxRQUFRQyxHQUFHLENBQUNDLGNBQWMsRUFBRTtZQUFFQyxXQUFXO1FBQUs7UUFDMUYscURBQXFEO1FBQ3JELE9BQU8zQixxREFBWUEsQ0FBQ08sSUFBSSxDQUFDO1lBQUVhO1lBQU9RLFNBQVM7WUFBTUMsU0FBUztZQUEwQkksTUFBTUY7UUFBUSxHQUFHO1lBQUVwQixRQUFRO1FBQUk7SUFJbkgsc0ZBQXNGO0lBQ3hGLEVBQUUsT0FBT0QsT0FBTztRQUNkLE9BQU9WLHFEQUFZQSxDQUFDTyxJQUFJLENBQUM7WUFBRUcsT0FBTztRQUFzQixHQUFHO1lBQUVDLFFBQVE7UUFBSTtJQUMzRTtBQUNGIiwic291cmNlcyI6WyJGOlxcSm9zZVxcZHJhZ2NhcnRcXEFyY2hpdmVcXHNyY1xcYXBwXFxhcGlcXHZlcmlmeS1vdHBcXHJvdXRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb25ubmVjdGlvblRvRGF0YWJhc2UgZnJvbSBcIkAvbGliL21vbmdvZGJcIjtcclxuaW1wb3J0IFVzZXIgZnJvbSBcIkAvbW9kZWxzL1VzZXJcIjtcclxuaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XHJcbmltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJztcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcSkge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBjb25ubmVjdGlvblRvRGF0YWJhc2UoKVxyXG4gICAgY29uc3QgeyBwaG9uZSwgb3RwLCB1c2VybmFtZSB9ID0gYXdhaXQgcmVxLmpzb24oKTtcclxuICAgIGNvbnNvbGUubG9nKHVzZXJuYW1lKTtcclxuXHJcblxyXG4gICAgaWYgKCFwaG9uZSB8fCAhb3RwKSB7XHJcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiBcIlBob25lIGFuZCBPVFAgYXJlIHJlcXVpcmVkXCIgfSwgeyBzdGF0dXM6IDQwMCB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWdsb2JhbC5vdHBTdG9yZSB8fCAhZ2xvYmFsLm90cFN0b3JlW3Bob25lXSkge1xyXG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogXCJJbnZhbGlkIHBob25lIG51bWJlciBvciBPVFAgZXhwaXJlZFwiIH0sIHsgc3RhdHVzOiA0MDAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGdsb2JhbC5vdHBTdG9yZVtwaG9uZV0ub3RwICE9PSBwYXJzZUludChvdHApKSB7XHJcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiBcIkludmFsaWQgT1RQXCIgfSwgeyBzdGF0dXM6IDQwMCB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoRGF0ZS5ub3coKSA+IGdsb2JhbC5vdHBTdG9yZVtwaG9uZV0uZXhwaXJlc0F0KSB7XHJcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiBcIk9UUCBleHBpcmVkXCIgfSwgeyBzdGF0dXM6IDQwMCB9KTtcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGUgZ2xvYmFsLm90cFN0b3JlW3Bob25lXTsgLy8gUmVtb3ZlIE9UUCBhZnRlciB2ZXJpZmljYXRpb25cclxuICAgIGNvbnN0IGV4aXN0aW5nVXNlcnNlciA9IGF3YWl0IFVzZXIuZmluZE9uZSh7IHBob25lIH0pO1xyXG4gICAgaWYgKGV4aXN0aW5nVXNlcnNlcikge1xyXG4gICAgICBjb25zdCB0b2tlbiA9IGp3dC5zaWduKHsgaWQ6IGV4aXN0aW5nVXNlcnNlci5faWQgfSwgcHJvY2Vzcy5lbnYuSldUX1NFQ1JFVF9LRVksIHsgZXhwaXJlc0luOiAnMWgnIH0pO1xyXG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyB0b2tlbiwgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJsb2dpbiBzdWNjZXNzZnVsbHkhXCIsIGxvZ2luVXNlcjogZXhpc3RpbmdVc2Vyc2VyPy51c2VybmFtZSB9LCB7IHN0YXR1czogMjAwIH0pXHJcbiAgICB9XHJcbiAgICBjb25zdCBuZXdVc2VyID0gbmV3IFVzZXIoeyB1c2VybmFtZTogdXNlcm5hbWUsIHBob25lOiBwaG9uZSB9KTtcclxuICAgIGF3YWl0IG5ld1VzZXIuc2F2ZSgpXHJcbiAgICBjb25zdCB0b2tlbiA9IGp3dC5zaWduKHsgaWQ6IG5ld1VzZXIuX2lkIH0sIHByb2Nlc3MuZW52LkpXVF9TRUNSRVRfS0VZLCB7IGV4cGlyZXNJbjogJzFoJyB9KTtcclxuICAgIC8vIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihuZXdVc2VyLCB7IHN0YXR1czogMjAwIH0pXHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyB0b2tlbiwgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJSZWdpc3RlciBzdWNjZXNzZnVsbHkhXCIsIGRhdGE6IG5ld1VzZXIgfSwgeyBzdGF0dXM6IDIwMCB9KVxyXG5cclxuXHJcblxyXG4gICAgLy8gcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJPVFAgdmVyaWZpZWQgc3VjY2Vzc2Z1bGx5IVwiIH0pO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogXCJWZXJpZmljYXRpb24gZmFpbGVkXCIgfSwgeyBzdGF0dXM6IDUwMCB9KTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbImNvbm5uZWN0aW9uVG9EYXRhYmFzZSIsIlVzZXIiLCJOZXh0UmVzcG9uc2UiLCJqd3QiLCJQT1NUIiwicmVxIiwicGhvbmUiLCJvdHAiLCJ1c2VybmFtZSIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJzdGF0dXMiLCJnbG9iYWwiLCJvdHBTdG9yZSIsInBhcnNlSW50IiwiRGF0ZSIsIm5vdyIsImV4cGlyZXNBdCIsImV4aXN0aW5nVXNlcnNlciIsImZpbmRPbmUiLCJ0b2tlbiIsInNpZ24iLCJpZCIsIl9pZCIsInByb2Nlc3MiLCJlbnYiLCJKV1RfU0VDUkVUX0tFWSIsImV4cGlyZXNJbiIsInN1Y2Nlc3MiLCJtZXNzYWdlIiwibG9naW5Vc2VyIiwibmV3VXNlciIsInNhdmUiLCJkYXRhIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/verify-otp/route.js\n");

/***/ }),

/***/ "(rsc)/./src/lib/mongodb.js":
/*!****************************!*\
  !*** ./src/lib/mongodb.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst MONGO_URI = \"mongodb+srv://admin:Needforspeed4@cluster0.sjx0c.mongodb.net/dragcart?retryWrites=true&w=majority\";\nconst connnectionToDatabase = async ()=>{\n    try {\n        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGO_URI);\n        console.log(\"Connected to database\");\n    } catch (error) {\n        console.log(error);\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connnectionToDatabase);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL21vbmdvZGIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRWhDLE1BQU1DLFlBQVk7QUFFbEIsTUFBTUMsd0JBQXdCO0lBQzFCLElBQUk7UUFDQSxNQUFNRix1REFBZ0IsQ0FBQ0M7UUFDdkJHLFFBQVFDLEdBQUcsQ0FBQztJQUVoQixFQUFFLE9BQU9DLE9BQU87UUFDWkYsUUFBUUMsR0FBRyxDQUFDQztJQUNoQjtBQUNKO0FBRUEsaUVBQWVKLHFCQUFxQkEsRUFBQSIsInNvdXJjZXMiOlsiRjpcXEpvc2VcXGRyYWdjYXJ0XFxBcmNoaXZlXFxzcmNcXGxpYlxcbW9uZ29kYi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xyXG5cclxuY29uc3QgTU9OR09fVVJJID0gXCJtb25nb2RiK3NydjovL2FkbWluOk5lZWRmb3JzcGVlZDRAY2x1c3RlcjAuc2p4MGMubW9uZ29kYi5uZXQvZHJhZ2NhcnQ/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5XCI7XHJcblxyXG5jb25zdCBjb25ubmVjdGlvblRvRGF0YWJhc2UgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGF3YWl0IG1vbmdvb3NlLmNvbm5lY3QoTU9OR09fVVJJKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ29ubmVjdGVkIHRvIGRhdGFiYXNlXCIpO1xyXG5cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25ubmVjdGlvblRvRGF0YWJhc2UiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJNT05HT19VUkkiLCJjb25ubmVjdGlvblRvRGF0YWJhc2UiLCJjb25uZWN0IiwiY29uc29sZSIsImxvZyIsImVycm9yIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/mongodb.js\n");

/***/ }),

/***/ "(rsc)/./src/models/User.js":
/*!****************************!*\
  !*** ./src/models/User.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst userSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    username: {\n        type: String,\n        default: \"\"\n    },\n    phone: {\n        type: String\n    },\n    useremail: {\n        type: String,\n        default: \"\"\n    },\n    leveltype: {\n        type: String,\n        default: \"\"\n    },\n    isdel: {\n        type: String,\n        default: \"\"\n    },\n    deluser: {\n        type: String,\n        default: \"\"\n    },\n    salary: {\n        type: String,\n        default: \"\"\n    },\n    date: {\n        type: Date,\n        default: Date.now\n    },\n    status: {\n        type: String,\n        default: \"Active\"\n    }\n}, {\n    timestamps: true\n});\nconst User = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).User || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"User\", userSchema, \"user\");\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbW9kZWxzL1VzZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTRDO0FBRTVDLE1BQU1FLGFBQWEsSUFBSUQsNENBQU1BLENBQzNCO0lBQ0VFLFVBQVU7UUFDUkMsTUFBTUM7UUFDTkMsU0FBUztJQUNYO0lBQ0FDLE9BQU87UUFDTEgsTUFBTUM7SUFDUjtJQUNBRyxXQUFXO1FBQ1RKLE1BQU1DO1FBQ05DLFNBQVM7SUFDWDtJQUNBRyxXQUFXO1FBQ1RMLE1BQU1DO1FBQ05DLFNBQVM7SUFDWDtJQUNBSSxPQUFPO1FBQ0xOLE1BQU1DO1FBQ05DLFNBQVM7SUFDWDtJQUNBSyxTQUFTO1FBQ1BQLE1BQU1DO1FBQ05DLFNBQVM7SUFDWDtJQUNBTSxRQUFRO1FBQ05SLE1BQU1DO1FBQ05DLFNBQVM7SUFDWDtJQUNBTyxNQUFNO1FBQ0pULE1BQU1VO1FBQ05SLFNBQVNRLEtBQUtDLEdBQUc7SUFDbkI7SUFDQUMsUUFBUTtRQUNOWixNQUFNQztRQUNOQyxTQUFTO0lBQ1g7QUFDRixHQUNBO0lBQ0VXLFlBQVk7QUFDZDtBQUdGLE1BQU1DLE9BQU9sQix3REFBZSxDQUFDa0IsSUFBSSxJQUFJbEIscURBQWMsQ0FBQyxRQUFRRSxZQUFZO0FBRXhFLGlFQUFlZ0IsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsiRjpcXEpvc2VcXGRyYWdjYXJ0XFxBcmNoaXZlXFxzcmNcXG1vZGVsc1xcVXNlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UsIHsgU2NoZW1hIH0gZnJvbSBcIm1vbmdvb3NlXCI7XG5cbmNvbnN0IHVzZXJTY2hlbWEgPSBuZXcgU2NoZW1hKFxuICB7XG4gICAgdXNlcm5hbWU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6IFwiXCJcbiAgICB9LFxuICAgIHBob25lOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgfSxcbiAgICB1c2VyZW1haWw6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6IFwiXCJcbiAgICB9LFxuICAgIGxldmVsdHlwZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogXCJcIlxuICAgIH0sXG4gICAgaXNkZWw6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6IFwiXCJcbiAgICB9LFxuICAgIGRlbHVzZXI6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6IFwiXCJcbiAgICB9LFxuICAgIHNhbGFyeToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogXCJcIlxuICAgIH0sXG4gICAgZGF0ZToge1xuICAgICAgdHlwZTogRGF0ZSxcbiAgICAgIGRlZmF1bHQ6IERhdGUubm93LFxuICAgIH0sXG4gICAgc3RhdHVzOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiBcIkFjdGl2ZVwiLFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICB0aW1lc3RhbXBzOiB0cnVlLFxuICB9XG4pO1xuXG5jb25zdCBVc2VyID0gbW9uZ29vc2UubW9kZWxzLlVzZXIgfHwgbW9uZ29vc2UubW9kZWwoXCJVc2VyXCIsIHVzZXJTY2hlbWEsIFwidXNlclwiKTtcblxuZXhwb3J0IGRlZmF1bHQgVXNlcjtcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsIlNjaGVtYSIsInVzZXJTY2hlbWEiLCJ1c2VybmFtZSIsInR5cGUiLCJTdHJpbmciLCJkZWZhdWx0IiwicGhvbmUiLCJ1c2VyZW1haWwiLCJsZXZlbHR5cGUiLCJpc2RlbCIsImRlbHVzZXIiLCJzYWxhcnkiLCJkYXRlIiwiRGF0ZSIsIm5vdyIsInN0YXR1cyIsInRpbWVzdGFtcHMiLCJVc2VyIiwibW9kZWxzIiwibW9kZWwiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/models/User.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/ms","vendor-chunks/semver","vendor-chunks/jsonwebtoken","vendor-chunks/jws","vendor-chunks/ecdsa-sig-formatter","vendor-chunks/safe-buffer","vendor-chunks/lodash.once","vendor-chunks/lodash.isstring","vendor-chunks/lodash.isplainobject","vendor-chunks/lodash.isnumber","vendor-chunks/lodash.isinteger","vendor-chunks/lodash.isboolean","vendor-chunks/lodash.includes","vendor-chunks/jwa","vendor-chunks/buffer-equal-constant-time"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fverify-otp%2Froute&page=%2Fapi%2Fverify-otp%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fverify-otp%2Froute.js&appDir=F%3A%5CJose%5Cdragcart%5CArchive%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=F%3A%5CJose%5Cdragcart%5CArchive&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();