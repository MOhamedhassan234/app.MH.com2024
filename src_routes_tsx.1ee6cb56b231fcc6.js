(self["webpackChunkstores_admin"] = self["webpackChunkstores_admin"] || []).push([["src_routes_tsx"],{

/***/ "./src/lang lazy recursive ^\\.\\/.*\\.json$":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ar.json": [
		"./src/lang/ar.json",
		"src_lang_ar_json"
	],
	"./en.json": [
		"./src/lang/en.json",
		"src_lang_en_json"
	],
	"./fr.json": [
		"./src/lang/fr.json",
		"src_lang_fr_json"
	],
	"./tr.json": [
		"./src/lang/tr.json",
		"src_lang_tr_json"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__.t(id, 3 | 16);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = "./src/lang lazy recursive ^\\.\\/.*\\.json$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/CommerceAppContainer.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_RTEInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/components/RTEInput.tsx");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("webpack/sharing/consume/default/@apollo/client/@apollo/client?c775");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_initApollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/apollo/initApollo.ts");
/* harmony import */ var _intl_IntlProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/intl/IntlProvider.tsx");
/* harmony import */ var _components_LoadingBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/components/LoadingBar.tsx");
/* harmony import */ var _common_NetworkDetector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/common/NetworkDetector.tsx");
/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("webpack/sharing/consume/default/buffer/buffer");
/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(buffer__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var process__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("webpack/sharing/consume/default/process/process");
/* harmony import */ var process__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(process__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../../node_modules/react/jsx-dev-runtime.js");
var _jsxFileName = "/home/runner/work/wuilt-client/wuilt-client/apps/stores-admin/src/CommerceAppContainer.tsx";









// Don't delete, important for react/pdf library

window.Buffer = window.Buffer || buffer__WEBPACK_IMPORTED_MODULE_6__.Buffer;
window.process = window.process || (process__WEBPACK_IMPORTED_MODULE_7___default());
const client = (0,_apollo_initApollo__WEBPACK_IMPORTED_MODULE_2__["default"])();
function CommerceAppContainer({
  children
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_apollo_client__WEBPACK_IMPORTED_MODULE_1__.ApolloProvider, {
    client: client,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_intl_IntlProvider__WEBPACK_IMPORTED_MODULE_3__["default"], {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_LoadingBar__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_common_NetworkDetector__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_RTEInput__WEBPACK_IMPORTED_MODULE_0__.RTEInput, {
        isHidden: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, this), children]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }, this);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CommerceAppContainer);

/***/ }),

/***/ "./src/apollo/client/index.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IS_APOLLO_LOADING: () => (/* binding */ IS_APOLLO_LOADING),
/* harmony export */   IS_USER_AUTHORIZED: () => (/* binding */ IS_USER_AUTHORIZED),
/* harmony export */   isApolloLoadingVar: () => (/* binding */ isApolloLoadingVar),
/* harmony export */   isUserAuthorizedVar: () => (/* binding */ isUserAuthorizedVar),
/* harmony export */   typeDefs: () => (/* binding */ typeDefs)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("webpack/sharing/consume/default/@apollo/client/@apollo/client?c775");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);
let _ = t => t,
  _t,
  _t2,
  _t3;

const isApolloLoadingVar = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.makeVar)(false);
const isUserAuthorizedVar = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.makeVar)(true);
const typeDefs = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql)(_t || (_t = _`
  extend type Query {
    IsApolloLoading: Boolean!
    isUserNotAuthorizedVar: Boolean!
  }
`));
const IS_APOLLO_LOADING = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql)(_t2 || (_t2 = _`
  query IsApolloLoading {
    isLoading @client
  }
`));
const IS_USER_AUTHORIZED = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql)(_t3 || (_t3 = _`
  query IsUserAuthorized {
    isAuthorized @client
  }
`));

/***/ }),

/***/ "./src/apollo/index.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IS_APOLLO_LOADING: () => (/* reexport safe */ _client__WEBPACK_IMPORTED_MODULE_1__.IS_APOLLO_LOADING),
/* harmony export */   IS_USER_AUTHORIZED: () => (/* reexport safe */ _client__WEBPACK_IMPORTED_MODULE_1__.IS_USER_AUTHORIZED),
/* harmony export */   isApolloLoadingVar: () => (/* reexport safe */ _client__WEBPACK_IMPORTED_MODULE_1__.isApolloLoadingVar),
/* harmony export */   isUserAuthorizedVar: () => (/* reexport safe */ _client__WEBPACK_IMPORTED_MODULE_1__.isUserAuthorizedVar),
/* harmony export */   setAccessToken: () => (/* reexport safe */ _initApollo__WEBPACK_IMPORTED_MODULE_0__.setAccessToken),
/* harmony export */   typeDefs: () => (/* reexport safe */ _client__WEBPACK_IMPORTED_MODULE_1__.typeDefs)
/* harmony export */ });
/* harmony import */ var _initApollo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/apollo/initApollo.ts");
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/apollo/client/index.ts");



/***/ }),

/***/ "./src/apollo/initApollo.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ initApollo),
/* harmony export */   setAccessToken: () => (/* binding */ setAccessToken)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("webpack/sharing/consume/default/@apollo/client/@apollo/client?c775");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client_link_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("webpack/sharing/consume/default/@apollo/client/link/context/@apollo/client/link/context");
/* harmony import */ var _apollo_client_link_context__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_link_context__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_client_link_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("webpack/sharing/consume/default/@apollo/client/link/error/@apollo/client/link/error");
/* harmony import */ var _apollo_client_link_error__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_link_error__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/apollo/client/index.ts");




const {
  NX_GRAPHQL_URI
} = ({"NX_GRAPHQL_URI":"https://graphql.wuilt.com/"});
let token;
const httpLink = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.createHttpLink)({
  uri: NX_GRAPHQL_URI || "https://graphql.wuilt.dev",
  credentials: "include"
});
const authLink = (0,_apollo_client_link_context__WEBPACK_IMPORTED_MODULE_1__.setContext)((_, {
  headers
}) => {
  const authHeaders = token ? {
    authorization: `Bearer ${token}`
  } : {};
  return {
    headers: Object.assign({}, headers, authHeaders)
  };
});
const permissionLink = (0,_apollo_client_link_error__WEBPACK_IMPORTED_MODULE_2__.onError)(({
  graphQLErrors,
  operation
}) => {
  (0,_client__WEBPACK_IMPORTED_MODULE_3__.isApolloLoadingVar)(false);
  if (graphQLErrors != null && graphQLErrors.some(error => error.message.toLowerCase().includes("not authorized"))) {
    (0,_client__WEBPACK_IMPORTED_MODULE_3__.isUserAuthorizedVar)(false);
  }
});
const startLoadingLink = new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.ApolloLink((operation, forward) => {
  (0,_client__WEBPACK_IMPORTED_MODULE_3__.isUserAuthorizedVar)(true);
  (0,_client__WEBPACK_IMPORTED_MODULE_3__.isApolloLoadingVar)(true);
  return forward(operation);
});
const endLoadingLink = new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.ApolloLink((operation, forward) => forward(operation).map(response => {
  (0,_client__WEBPACK_IMPORTED_MODULE_3__.isApolloLoadingVar)(false);
  return response;
}));
const client = new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.ApolloClient({
  link: (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.from)([startLoadingLink, permissionLink, authLink, endLoadingLink, httpLink]),
  typeDefs: _client__WEBPACK_IMPORTED_MODULE_3__.typeDefs,
  cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.InMemoryCache({
    typePolicies: {
      ShippingRate: {
        keyFields: false
      },
      ZoneCountry: {
        keyFields: ["id", "zoneId"]
      },
      TopSellingProduct: {
        keyFields: ["productId"]
      },
      PaymentAccount: {
        keyFields: ["accessToken"]
      },
      Query: {
        fields: {
          isLoading: {
            read() {
              return (0,_client__WEBPACK_IMPORTED_MODULE_3__.isApolloLoadingVar)();
            }
          },
          isAuthorized: {
            read() {
              return (0,_client__WEBPACK_IMPORTED_MODULE_3__.isUserAuthorizedVar)();
            }
          }
        }
      }
    }
  })
});
function initApollo() {
  return client;
}
function setAccessToken(value) {
  const previousToken = token;
  token = value;
  if (previousToken !== token) {
    if (client) client.resetStore();
  }
}

/***/ }),

/***/ "./src/common/NetworkDetector.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wuilt_quilt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("webpack/sharing/consume/default/@wuilt/quilt/@wuilt/quilt?e0d6");
/* harmony import */ var _wuilt_quilt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wuilt_quilt__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("webpack/sharing/consume/default/react/react?c222");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("webpack/sharing/consume/default/react-intl/react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/react/jsx-dev-runtime.js");
var _jsxFileName = "/home/runner/work/wuilt-client/wuilt-client/apps/stores-admin/src/common/NetworkDetector.tsx";




const NetworkDetector = () => {
  const {
    addToast,
    removeToast
  } = (0,_wuilt_quilt__WEBPACK_IMPORTED_MODULE_0__.useToaster)();
  const handleConnectionChange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    const condition = window ? window.navigator.onLine : false;
    if (condition) {
      const webPing = setInterval(async () => {
        try {
          await fetch("//google.com", {
            mode: "no-cors"
          });
          removeToast("network-failed");
          addToast({
            content: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
              id: "EdoWRV",
              defaultMessage: [{
                "type": 0,
                "value": "You have stable connection now. Editing is available again"
              }]
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 21,
              columnNumber: 15
            }, undefined),
            appearance: "success",
            id: "network-connected"
          });
          return clearInterval(webPing);
        } catch (error) {
          addToast({
            content: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
              id: "Daz4V+",
              defaultMessage: [{
                "type": 0,
                "value": "Internet connection lost. Changes you make may not be saved"
              }]
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 30,
              columnNumber: 15
            }, undefined),
            appearance: "warning",
            id: "network-failed",
            autoDismiss: false
          });
        }
      }, 2000);
      return;
    }
    addToast({
      content: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
        id: "Daz4V+",
        defaultMessage: [{
          "type": 0,
          "value": "Internet connection lost. Changes you make may not be saved"
        }]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, undefined),
      appearance: "warning",
      id: "network-failed",
      autoDismiss: false
    });
  }, [addToast, removeToast]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    window.addEventListener("online", handleConnectionChange);
    window.addEventListener("offline", handleConnectionChange);
    return () => {
      window.removeEventListener("online", handleConnectionChange);
      window.removeEventListener("offline", handleConnectionChange);
    };
  }, [handleConnectionChange]);
  return null;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NetworkDetector);

/***/ }),

/***/ "./src/components/LoadingBar.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("webpack/sharing/consume/default/@apollo/client/@apollo/client?c775");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wuilt_quilt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("webpack/sharing/consume/default/@wuilt/quilt/@wuilt/quilt?e0d6");
/* harmony import */ var _wuilt_quilt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wuilt_quilt__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("webpack/sharing/consume/default/react/react?c222");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("webpack/sharing/consume/default/styled-components/styled-components?6dc1");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _apollo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/apollo/index.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../node_modules/react/jsx-dev-runtime.js");
var _jsxFileName = "/home/runner/work/wuilt-client/wuilt-client/apps/stores-admin/src/components/LoadingBar.tsx";






const LoadingBar = () => {
  const {
    data
  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.useQuery)(_apollo__WEBPACK_IMPORTED_MODULE_4__.IS_APOLLO_LOADING);
  const [prevLoading, setPreviousLoading] = (0,_wuilt_quilt__WEBPACK_IMPORTED_MODULE_1__.usePrevious)(false);
  const [isLoading, setIsLoading, setIsLoadingWithTimeout] = (0,_wuilt_quilt__WEBPACK_IMPORTED_MODULE_1__.useStateWithTimeout)(false, 1000);
  const isCompleted = !!prevLoading && !(data != null && data.isLoading);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    setPreviousLoading(isLoading);
  }, [isLoading, setPreviousLoading]);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (data != null && data.isLoading) {
      setIsLoading(true);
    } else {
      setIsLoadingWithTimeout(false);
    }
  }, [data == null ? void 0 : data.isLoading, setIsLoading, setIsLoadingWithTimeout]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(StyledWrapper, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(StyledBar, {
      isLoading: isLoading,
      isCompleted: isCompleted
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 5
  }, undefined);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoadingBar);

/**
 *
 * Styles
 *
 */

const StyledWrapper = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "LoadingBar__StyledWrapper",
  componentId: "sc-jvtii4-0"
})(["position:fixed;top:0;right:0;height:4px;width:100%;z-index:702;"]);
const StyledBar = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "LoadingBar__StyledBar",
  componentId: "sc-jvtii4-1"
})(["position:fixed;content:\"\";top:0;left:0;transform-origin:", ";transform:scaleX(0);display:block;width:100%;background:", ";height:4px;", " ", ""], _wuilt_quilt__WEBPACK_IMPORTED_MODULE_1__.utils.rtl("right", "left"), _wuilt_quilt__WEBPACK_IMPORTED_MODULE_1__.utils.color("product"), ({
  isLoading,
  isCompleted
}) => isLoading && !isCompleted && (0,styled_components__WEBPACK_IMPORTED_MODULE_3__.css)(["transform:scaleX(0.7);transition:transform 10s;"]), ({
  isLoading,
  isCompleted
}) => isLoading && isCompleted && (0,styled_components__WEBPACK_IMPORTED_MODULE_3__.css)(["transform:scaleX(0.99);transition:transform 1s;"]));

/***/ }),

/***/ "./src/components/LoadingScreen.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoadingScreen: () => (/* binding */ LoadingScreen)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("webpack/sharing/consume/default/react/react?c222");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wuilt_quilt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("webpack/sharing/consume/default/@wuilt/quilt/@wuilt/quilt?e0d6");
/* harmony import */ var _wuilt_quilt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wuilt_quilt__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("webpack/sharing/consume/default/styled-components/styled-components?6dc1");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/react/jsx-dev-runtime.js");
var _jsxFileName = "/home/runner/work/wuilt-client/wuilt-client/apps/stores-admin/src/components/LoadingScreen.tsx";




const alignItems = {
  top: "flex-start",
  center: "center",
  bottom: "flex-end"
};
const StyledContainer = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "LoadingScreen__StyledContainer",
  componentId: "sc-5jkyti-0"
})(["display:flex;width:100%;height:", ";justify-content:center;align-items:", ";"], ({
  height
}) => height, ({
  position
}) => alignItems[position]);
const LoadingScreen = ({
  size: _size = "large",
  position: _position = "center",
  height: _height = "100vh"
}) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(StyledContainer, {
  position: _position,
  height: _height,
  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_wuilt_quilt__WEBPACK_IMPORTED_MODULE_1__.Spinner, {
    size: _size
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 30,
  columnNumber: 3
}, undefined);

/***/ }),

/***/ "./src/components/RTEInput.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RTEInput: () => (/* binding */ RTEInput)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("webpack/sharing/consume/default/react/react?c222");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tinymce_tinymce_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("webpack/sharing/consume/default/@tinymce/tinymce-react/@tinymce/tinymce-react");
/* harmony import */ var _tinymce_tinymce_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tinymce_tinymce_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("webpack/sharing/consume/default/styled-components/styled-components?6dc1");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wuilt_app_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("webpack/sharing/consume/default/@wuilt/app-core/@wuilt/app-core");
/* harmony import */ var _wuilt_app_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wuilt_app_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wuilt_quilt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("webpack/sharing/consume/default/@wuilt/quilt/@wuilt/quilt?e0d6");
/* harmony import */ var _wuilt_quilt__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wuilt_quilt__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../node_modules/react/jsx-dev-runtime.js");
var _jsxFileName = "/home/runner/work/wuilt-client/wuilt-client/apps/stores-admin/src/components/RTEInput.tsx";






const {
  NX_TINYMCE_API_KEY
} = ({"NX_TINYMCE_API_KEY":"12ea7jqqdzawbn2epqp1uso0k1aonmyn4tu6j5i7kraz5fyt"});
const {
  isDev
} = _wuilt_quilt__WEBPACK_IMPORTED_MODULE_4__.utils.browserEnv();
const skin_url = `${window.location.origin + (isDev ? "" : "/stores-admin")}/skins/ui/oxide`;
const RTEInput = ({
  value,
  isDisabled,
  isHidden,
  dataTest,
  onChange
}) => {
  const [isMounted, setIsMounted] = react__WEBPACK_IMPORTED_MODULE_0__.useState(false);
  const {
    locale
  } = (0,_wuilt_app_core__WEBPACK_IMPORTED_MODULE_3__.useLocale)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(StyledWrapper, {
    "data-test": dataTest,
    isHidden: isHidden,
    children: [isDisabled && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(StyledOverlay, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 22
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_tinymce_tinymce_react__WEBPACK_IMPORTED_MODULE_1__.Editor, {
      id: dataTest,
      disabled: isDisabled,
      onInit: () => setIsMounted(true),
      apiKey: NX_TINYMCE_API_KEY,
      value: typeof value === "string" ? value : value == null ? void 0 : value.html,
      onEditorChange: (content, editor) => {
        if (!isMounted) return;
        onChange == null || onChange({
          html: content,
          text: editor.getBody().textContent || ""
        });
      },
      init: {
        language: (locale == null ? void 0 : locale.code) || "en",
        skin: "oxide",
        skin_url,
        toolbar_mode: "sliding",
        valid_children: "+body[style]",
        toolbar_sticky: true,
        branding: false,
        plugins: ["advlist", "autolink", "lists", "link", "image", "charmap", "anchor", "searchreplace", "visualblocks", "code", "fullscreen", "insertdatetime", "media", "table", "preview", "help", "wordcount", "codesample", "pagebreak", "nonbreaking"],
        toolbar: `fullscreen | formatselect | bold italic fontsizeselect  forecolor|
            alignleft aligncenter alignright alignjustify |
            bullist numlist outdent indent | removeformat | ltr rtl | undo redo | blocks`
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 5
  }, undefined);
};

const StyledWrapper = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "RTEInput__StyledWrapper",
  componentId: "sc-1yohhuq-0"
})(["position:relative;display:", ";"], ({
  isHidden
}) => isHidden ? "none" : "block");
const StyledOverlay = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "RTEInput__StyledOverlay",
  componentId: "sc-1yohhuq-1"
})(["position:absolute;left:0;top:0;height:100%;width:100%;z-index:10;background-color:", ";opacity:50%;pointer-events:none;"], ({
  theme
}) => theme.palette.cloud.dark);

/***/ }),

/***/ "./src/intl/IntlProvider.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SUPPORTED_LOCALES: () => (/* binding */ SUPPORTED_LOCALES),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("webpack/sharing/consume/default/react/react?c222");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wuilt_app_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("webpack/sharing/consume/default/@wuilt/app-core/@wuilt/app-core");
/* harmony import */ var _wuilt_app_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wuilt_app_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("webpack/sharing/consume/default/react-intl/react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_LoadingScreen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/components/LoadingScreen.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../node_modules/react/jsx-dev-runtime.js");
var _jsxFileName = "/home/runner/work/wuilt-client/wuilt-client/apps/stores-admin/src/intl/IntlProvider.tsx";





const SUPPORTED_LOCALES = {
  ar: {
    dir: "rtl",
    code: "ar",
    locale: "ar-EG",
    name: "arabic",
    display: "العربية"
  },
  en: {
    dir: "ltr",
    code: "en",
    locale: "en-US",
    name: "english",
    display: "English"
  },
  fr: {
    dir: "ltr",
    code: "fr",
    locale: "fr-FR",
    name: "french",
    display: "Francais"
  },
  tr: {
    dir: "ltr",
    code: "tr",
    locale: "tr-TR",
    name: "turkish",
    display: "Türkçe"
  }
};
const IntlProvider = ({
  children
}) => {
  const {
    locale
  } = (0,_wuilt_app_core__WEBPACK_IMPORTED_MODULE_1__.useLocale)();
  const [translations, setTranslations] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(null);
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
    async function importTranslations() {
      setTranslations(null);
      if (locale != null && locale.code) {
        const file = await __webpack_require__("./src/lang lazy recursive ^\\.\\/.*\\.json$")(`./${locale.code}.json`);
        setTranslations(file.default);
      }
    }
    importTranslations();
  }, [locale == null ? void 0 : locale.code]);
  if (!translations) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_LoadingScreen__WEBPACK_IMPORTED_MODULE_3__.LoadingScreen, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 12
    }, undefined);
  }
  const messages = translations;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_intl__WEBPACK_IMPORTED_MODULE_2__.IntlProvider, {
    messages: messages,
    locale: locale == null ? void 0 : locale.locale,
    defaultLocale: "en-US",
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 69,
    columnNumber: 5
  }, undefined);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IntlProvider);

/***/ }),

/***/ "./src/routes.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getRoutes)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("webpack/sharing/consume/default/react/react?c222");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("webpack/sharing/consume/default/react-router-dom/react-router-dom?23b0");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CommerceAppContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/CommerceAppContainer.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/react/jsx-dev-runtime.js");
var _jsxFileName = "/home/runner/work/wuilt-client/wuilt-client/apps/stores-admin/src/routes.tsx";




const Home = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => Promise.all(/* import() */[__webpack_require__.e("src_generated_graphql_tsx"), __webpack_require__.e("src_common_HelpArticle_index_ts-src_components_Demo_BookDemoBanner_tsx"), __webpack_require__.e("src_data_plansData_tsx-src_utils_getStoreLink_ts-src_utils_isStoreFree_ts"), __webpack_require__.e("src_screens_Home_tsx")]).then(__webpack_require__.bind(__webpack_require__, "./src/screens/Home.tsx")));
const SingleStore = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => Promise.all(/* import() */[__webpack_require__.e("src_generated_graphql_tsx"), __webpack_require__.e("src_data_plansData_tsx-src_utils_getStoreLink_ts-src_utils_isStoreFree_ts"), __webpack_require__.e("src_screens_Store_SingleStore_tsx")]).then(__webpack_require__.bind(__webpack_require__, "./src/screens/Store/SingleStore.tsx")));
const CreateStore = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => Promise.all(/* import() */[__webpack_require__.e("src_generated_graphql_tsx"), __webpack_require__.e("src_data_Industries_ts-src_screens_Store_create-store_CurruncySelect_CurrencySelect_tsx"), __webpack_require__.e("src_screens_Store_create-store_CreateStore_tsx")]).then(__webpack_require__.bind(__webpack_require__, "./src/screens/Store/create-store/CreateStore.tsx")));
function getRoutes() {
  return [{
    path: "/",
    element: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Navigate, {
      to: "/stores"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 16
    }, this),
    type: "bare"
  }, {
    path: "store/*",
    element: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_CommerceAppContainer__WEBPACK_IMPORTED_MODULE_2__["default"], {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Routes, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {
          path: "/:storeId/:locale/*",
          element: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(SingleStore, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 56
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {
          path: "*",
          element: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Navigate, {
            to: "/",
            replace: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 38
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }, this),
    type: "shell"
  }, {
    path: "stores/*",
    element: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_CommerceAppContainer__WEBPACK_IMPORTED_MODULE_2__["default"], {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Routes, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {
          path: "/",
          element: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(Home, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 38
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {
          path: "*",
          element: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Navigate, {
            to: "/",
            replace: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 38
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }, this),
    type: "shell"
  }, {
    path: "stores/create",
    element: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_CommerceAppContainer__WEBPACK_IMPORTED_MODULE_2__["default"], {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(CreateStore, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }, this),
    type: "top-level-with-context"
  }];
}

/***/ })

}])
//# sourceMappingURL=src_routes_tsx.1ee6cb56b231fcc6.js.map