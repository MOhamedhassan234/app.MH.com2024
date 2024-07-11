(self["webpackChunkstores_admin"] = self["webpackChunkstores_admin"] || []).push([["packages_app-core_src_index_ts"],{

/***/ "../../packages/app-core/src/auth/ShellPublic.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ShellPublic: () => (/* binding */ ShellPublic)
/* harmony export */ });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("webpack/sharing/consume/default/react-router-dom/react-router-dom?c045");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_loading_screen__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../packages/app-core/src/components/loading-screen.tsx");
/* harmony import */ var _auth_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../packages/app-core/src/auth/auth-provider.tsx");
/* harmony import */ var _auth_search_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../packages/app-core/src/auth/auth-search-query.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/react/jsx-dev-runtime.js");
var _jsxFileName = "/home/runner/work/wuilt-client/wuilt-client/packages/app-core/src/auth/ShellPublic.tsx";





const ShellPublic = ({
  children
}) => {
  const {
    loading,
    user
  } = (0,_auth_provider__WEBPACK_IMPORTED_MODULE_2__.useAuth)();
  if (!loading && user) {
    // user is already logged in or has logged in
    const {
      redirect,
      redirectOut: _redirectOut
    } = (0,_auth_search_query__WEBPACK_IMPORTED_MODULE_3__.getSearchQueries)();
    (0,_auth_search_query__WEBPACK_IMPORTED_MODULE_3__.clearSearchQueries)();
    if (_redirectOut) window.location.href = _redirectOut;
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_0__.Navigate, {
      to: redirect || "/",
      replace: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 12
    }, undefined);
  }
  if (loading) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_loading_screen__WEBPACK_IMPORTED_MODULE_4__.LoadingScreen, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 23
  }, undefined);
  if (user) return null;

  // user will continue to auth screens (login/signup)
  const {
    fpr,
    redirectOut
  } = (0,_auth_search_query__WEBPACK_IMPORTED_MODULE_3__.getSearchQueries)();
  (0,_auth_search_query__WEBPACK_IMPORTED_MODULE_3__.setSearchQueries)(fpr, undefined, redirectOut);
  return children;
};

/***/ }),

/***/ "../../packages/app-core/src/auth/ShellSecure.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ShellSecure: () => (/* binding */ ShellSecure)
/* harmony export */ });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("webpack/sharing/consume/default/react-router-dom/react-router-dom?c045");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_loading_screen__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../packages/app-core/src/components/loading-screen.tsx");
/* harmony import */ var _auth_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../packages/app-core/src/auth/auth-provider.tsx");
/* harmony import */ var _auth_search_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../packages/app-core/src/auth/auth-search-query.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/react/jsx-dev-runtime.js");
var _jsxFileName = "/home/runner/work/wuilt-client/wuilt-client/packages/app-core/src/auth/ShellSecure.tsx";





const ShellSecure = ({
  children
}) => {
  const {
    loading,
    user
  } = (0,_auth_provider__WEBPACK_IMPORTED_MODULE_2__.useAuth)();
  const {
    loginAction,
    fpr
  } = (0,_auth_search_query__WEBPACK_IMPORTED_MODULE_3__.getSearchQueries)();
  (0,_auth_search_query__WEBPACK_IMPORTED_MODULE_3__.setSearchQueries)(fpr, window.location.pathname);
  if (!user && !loading && loginAction === "signup") {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_0__.Navigate, {
      to: "/account/signup",
      replace: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 12
    }, undefined);
  }
  if (!user && !loading) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_0__.Navigate, {
      to: "/account/login",
      replace: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 12
    }, undefined);
  }
  if (loading) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_loading_screen__WEBPACK_IMPORTED_MODULE_4__.LoadingScreen, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 23
  }, undefined);
  if (!user) return null;
  return children;
};

/***/ }),

/***/ "../../packages/app-core/src/auth/StandaloneSecure.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StandaloneSecure: () => (/* binding */ StandaloneSecure)
/* harmony export */ });
/* harmony import */ var _components_loading_screen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../packages/app-core/src/components/loading-screen.tsx");
/* harmony import */ var _auth_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../packages/app-core/src/auth/auth-provider.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/react/jsx-dev-runtime.js");
var _jsxFileName = "/home/runner/work/wuilt-client/wuilt-client/packages/app-core/src/auth/StandaloneSecure.tsx";



const StandaloneSecure = ({
  children,
  authRoute
}) => {
  const {
    loading,
    user
  } = (0,_auth_provider__WEBPACK_IMPORTED_MODULE_1__.useAuth)();
  if (!user && !loading) {
    window.location.href = authRoute;
  }
  if (loading) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_loading_screen__WEBPACK_IMPORTED_MODULE_2__.LoadingScreen, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 23
  }, undefined);
  if (!user) return null;
  return children;
};

/***/ }),

/***/ "../../packages/app-core/src/auth/auth-provider.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthProvider: () => (/* binding */ AuthProvider),
/* harmony export */   useAuth: () => (/* binding */ useAuth)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("webpack/sharing/consume/default/react/react?2a4b");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/react/jsx-dev-runtime.js");
var _jsxFileName = "/home/runner/work/wuilt-client/wuilt-client/packages/app-core/src/auth/auth-provider.tsx";


const AuthContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
  loading: true
});
const AuthProvider = ({
  children,
  baseEndpoint
}) => {
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const logout = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async () => {
    (async () => {
      await fetch(`${baseEndpoint}/logout`, {
        method: "POST",
        credentials: "include"
      });
      setUser(undefined);
    })();
  }, [baseEndpoint]);
  const fetchUser = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async () => {
    if (!baseEndpoint) {
      throw new Error("baseEndpoint is required");
    }
    setLoading(true);
    const res = await fetch(`${baseEndpoint}/user-info`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      }
    });
    if (res.status === 401) {
      setUser(undefined);
      setLoading(false);
      return;
    }
    const data = await res.json();
    const user = data == null ? void 0 : data.user;
    setUser({
      id: `User_${user == null ? void 0 : user.id}`,
      name: user.name,
      email: user.email,
      decodedId: user.id,
      phone: user.verifiedPhone || user.validPhone || user.phone,
      country: {
        code: user.countryCode,
        name: user.countryName
      },
      locale: user.locale,
      meta: {
        isPartner: !!user.isPartner,
        shouldFillQuestionnaire: user.questionnaireCompleted === false,
        requireDemo: !!user.requireDemo,
        demoCompleted: !!user.demoCompleted
      }
    });
    setLoading(false);
    return user;
  }, [baseEndpoint]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    fetchUser();
  }, [fetchUser]);
  const value = react__WEBPACK_IMPORTED_MODULE_0___default().useMemo(() => ({
    loading,
    user,
    logout,
    updateUser: setUser,
    refetchUser: fetchUser
  }), [fetchUser, loading, logout, user]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(AuthContext.Provider, {
    value: value,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 109,
    columnNumber: 10
  }, undefined);
};
const useAuth = () => (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(AuthContext);

/***/ }),

/***/ "../../packages/app-core/src/auth/auth-search-query.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearSearchQueries: () => (/* binding */ clearSearchQueries),
/* harmony export */   getSearchQueries: () => (/* binding */ getSearchQueries),
/* harmony export */   setSearchQueries: () => (/* binding */ setSearchQueries)
/* harmony export */ });
function getSearchQueries() {
  const query = new URLSearchParams(window.location.search);
  const loginAction = query.get("loginAction");
  const fpr = query.get("fpr") || localStorage.getItem("fpr") || "";
  const redirect = localStorage.getItem("loginRedirect");
  const redirectOut = query.get("redirectOut") || localStorage.getItem("redirectOut");
  return {
    loginAction,
    redirect,
    fpr,
    redirectOut
  };
}
function setSearchQueries(fpr, currentPath, redirectOut) {
  if (currentPath && currentPath !== "/") {
    localStorage.setItem("loginRedirect", currentPath);
  }
  if (fpr) {
    localStorage.setItem("fpr", fpr);
  }
  if (redirectOut) {
    localStorage.setItem("redirectOut", redirectOut);
  }
}
function clearSearchQueries() {
  localStorage.removeItem("loginRedirect");
  localStorage.removeItem("redirectOut");
  localStorage.removeItem("fpr");
}

/***/ }),

/***/ "../../packages/app-core/src/auth/index.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthProvider: () => (/* reexport safe */ _auth_provider__WEBPACK_IMPORTED_MODULE_0__.AuthProvider),
/* harmony export */   ShellPublic: () => (/* reexport safe */ _ShellPublic__WEBPACK_IMPORTED_MODULE_2__.ShellPublic),
/* harmony export */   ShellSecure: () => (/* reexport safe */ _ShellSecure__WEBPACK_IMPORTED_MODULE_1__.ShellSecure),
/* harmony export */   StandaloneSecure: () => (/* reexport safe */ _StandaloneSecure__WEBPACK_IMPORTED_MODULE_3__.StandaloneSecure),
/* harmony export */   useAuth: () => (/* reexport safe */ _auth_provider__WEBPACK_IMPORTED_MODULE_0__.useAuth)
/* harmony export */ });
/* harmony import */ var _auth_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../packages/app-core/src/auth/auth-provider.tsx");
/* harmony import */ var _ShellSecure__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../packages/app-core/src/auth/ShellSecure.tsx");
/* harmony import */ var _ShellPublic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../packages/app-core/src/auth/ShellPublic.tsx");
/* harmony import */ var _StandaloneSecure__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../packages/app-core/src/auth/StandaloneSecure.tsx");





/***/ }),

/***/ "../../packages/app-core/src/chat-support/chat-support-context.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChatSupportContext: () => (/* binding */ ChatSupportContext),
/* harmony export */   ChatSupportProvider: () => (/* binding */ ChatSupportProvider),
/* harmony export */   useChatSupport: () => (/* binding */ useChatSupport)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("webpack/sharing/consume/default/react/react?2a4b");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _auth_auth_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../packages/app-core/src/auth/auth-provider.tsx");
/* harmony import */ var _identify_chat_user_mutation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../packages/app-core/src/chat-support/identify-chat-user-mutation.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/react/jsx-dev-runtime.js");
var _jsxFileName = "/home/runner/work/wuilt-client/wuilt-client/packages/app-core/src/chat-support/chat-support-context.tsx";




const noopChatSupport = {
  load: () => undefined,
  remove: () => undefined,
  refresh: () => undefined,
  open: () => undefined,
  close: () => undefined,
  hide: () => undefined,
  show: () => undefined
};
const ChatSupportContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(noopChatSupport);
const ChatSupportProvider = ({
  children
}) => {
  var _auth$user;
  const auth = (0,_auth_auth_provider__WEBPACK_IMPORTED_MODULE_2__.useAuth)();
  const isEnabled = // todo: handle backoffice access
  // !oidcUser?.aud.includes("wuilt-backoffice") &&
  (_auth$user = auth.user) == null ? void 0 : _auth$user.id;
  const onConversationsAPIReady = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    var _window$hsConversatio;
    if ((_window$hsConversatio = window.hsConversationsSettings) != null && _window$hsConversatio.identificationToken) return;
    (0,_identify_chat_user_mutation__WEBPACK_IMPORTED_MODULE_3__.identifyChatMutation)().then(res => {
      var _res$data;
      if ((_res$data = res.data) != null && _res$data.identifyChat) {
        var _window$HubSpotConver;
        window.hsConversationsSettings = {
          identificationEmail: res.data.identifyChat.email,
          identificationToken: res.data.identifyChat.token
        };
        (_window$HubSpotConver = window.HubSpotConversations) == null || (_window$HubSpotConver = _window$HubSpotConver.widget) == null || _window$HubSpotConver.load == null || _window$HubSpotConver.load();
      }
    }).catch(() => {
      // don't do anything if there's an error
    });
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!isEnabled) {
      return;
    }
    if (window.HubSpotConversations) {
      onConversationsAPIReady();
    } else {
      window.hsConversationsOnReady = [onConversationsAPIReady];
    }
  }, [isEnabled, onConversationsAPIReady]);
  const value = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (!isEnabled) {
      return noopChatSupport;
    }
    return {
      load: () => {
        var _window$HubSpotConver2;
        (_window$HubSpotConver2 = window.HubSpotConversations) == null || (_window$HubSpotConver2 = _window$HubSpotConver2.widget) == null || _window$HubSpotConver2.load == null || _window$HubSpotConver2.load();
      },
      refresh: () => {
        var _window$HubSpotConver3;
        (_window$HubSpotConver3 = window.HubSpotConversations) == null || (_window$HubSpotConver3 = _window$HubSpotConver3.widget) == null || _window$HubSpotConver3.refresh == null || _window$HubSpotConver3.refresh();
      },
      remove: () => {
        var _window$HubSpotConver4;
        (_window$HubSpotConver4 = window.HubSpotConversations) == null || (_window$HubSpotConver4 = _window$HubSpotConver4.widget) == null || _window$HubSpotConver4.remove == null || _window$HubSpotConver4.remove();
      },
      open: () => {
        var _window$HubSpotConver5;
        showHubSpotChat();
        (_window$HubSpotConver5 = window.HubSpotConversations) == null || (_window$HubSpotConver5 = _window$HubSpotConver5.widget) == null || _window$HubSpotConver5.open == null || _window$HubSpotConver5.open();
      },
      close: () => {
        var _window$HubSpotConver6;
        (_window$HubSpotConver6 = window.HubSpotConversations) == null || (_window$HubSpotConver6 = _window$HubSpotConver6.widget) == null || _window$HubSpotConver6.close == null || _window$HubSpotConver6.close();
      },
      hide: () => {
        hideHubSpotChat();
      },
      show: () => {
        showHubSpotChat();
      }
    };
  }, [isEnabled]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(ChatSupportContext.Provider, {
    value: value,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 108,
    columnNumber: 5
  }, undefined);
};
const useChatSupport = () => {
  const context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ChatSupportContext);
  return context;
};
function showHubSpotChat() {
  const el = document.getElementById("hubspot-messages-iframe-container");
  el && el.style.setProperty("display", "initial", "important");
}
function hideHubSpotChat() {
  const el = document.getElementById("hubspot-messages-iframe-container");
  el && el.style.setProperty("display", "none", "important");
}

/***/ }),

/***/ "../../packages/app-core/src/chat-support/identify-chat-user-mutation.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IdentifyChatDocument: () => (/* binding */ IdentifyChatDocument),
/* harmony export */   identifyChatMutation: () => (/* binding */ identifyChatMutation)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("webpack/sharing/consume/default/@apollo/client/@apollo/client?cfac");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);
let _ = t => t,
  _t;

const defaultOptions = {};
const IdentifyChatDocument = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql)(_t || (_t = _`
  mutation IdentifyChat {
    identifyChat {
      email
      token
    }
  }
`));
const httpLink = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.createHttpLink)({
  uri: "https://graphql.wuilt.com",
  credentials: "include"
});
const client = new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.ApolloClient({
  link: (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.from)([httpLink]),
  cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.InMemoryCache({})
});
function identifyChatMutation(baseOptions) {
  const options = Object.assign({}, defaultOptions, baseOptions);
  return client.mutate(Object.assign({
    mutation: IdentifyChatDocument
  }, options));
}

/***/ }),

/***/ "../../packages/app-core/src/chat-support/index.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChatSupportContext: () => (/* reexport safe */ _chat_support_context__WEBPACK_IMPORTED_MODULE_0__.ChatSupportContext),
/* harmony export */   ChatSupportProvider: () => (/* reexport safe */ _chat_support_context__WEBPACK_IMPORTED_MODULE_0__.ChatSupportProvider),
/* harmony export */   useChatSupport: () => (/* reexport safe */ _chat_support_context__WEBPACK_IMPORTED_MODULE_0__.useChatSupport)
/* harmony export */ });
/* harmony import */ var _chat_support_context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../packages/app-core/src/chat-support/chat-support-context.tsx");


/***/ }),

/***/ "../../packages/app-core/src/components/container.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Container: () => (/* binding */ Container)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("webpack/sharing/consume/default/styled-components/styled-components?d27b");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
// import { Box, BoxProps } from "@wuilt/quilt";
// import * as React from "react";


// export const Container: React.FC<BoxProps> = (props) => (
//   <Box maxWidth="1250px" margin="0 auto" {...props}>
//     {props.children}
//   </Box>
// );
// styles
const Container = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "container__Container",
  componentId: "sc-11rk1w6-0"
})(["margin:0 auto;padding:32px 10px;width:100%;max-width:1200px;"]);

/***/ }),

/***/ "../../packages/app-core/src/components/loading-screen.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoadingScreen: () => (/* binding */ LoadingScreen)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("webpack/sharing/consume/default/react/react?2a4b");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wuilt_quilt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("webpack/sharing/consume/default/@wuilt/quilt/@wuilt/quilt?13b5");
/* harmony import */ var _wuilt_quilt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wuilt_quilt__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("webpack/sharing/consume/default/styled-components/styled-components?d27b");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/react/jsx-dev-runtime.js");
var _jsxFileName = "/home/runner/work/wuilt-client/wuilt-client/packages/app-core/src/components/loading-screen.tsx";




const alignItems = {
  top: "flex-start",
  center: "center",
  bottom: "flex-end"
};
const StyledContainer = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "loading-screen__StyledContainer",
  componentId: "sc-1ccx881-0"
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
  id: "loading-screen",
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

/***/ "../../packages/app-core/src/first-promoter/first-promoter.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getFprTid: () => (/* binding */ getFprTid),
/* harmony export */   trackFpr: () => (/* binding */ trackFpr)
/* harmony export */ });
async function createPromoterLead({
  email,
  uid,
  apiKey,
  tid = undefined,
  ref_id = undefined
}) {
  const form = new URLSearchParams();
  if (email) form.append("email", email);
  if (uid) form.append("uid", uid);
  if (tid) form.append("tid", tid);
  if (ref_id) form.append("ref_id", ref_id);
  fetch(`https://firstpromoter.com/api/v1/track/signup`, {
    method: "POST",
    body: form,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "x-api-key": apiKey
    }
  }).catch(error => {
    //
  });
}
async function trackFpr(user, fpr, fprTid, apiKey) {
  if (!(user != null && user.id) || !fpr) {
    return null;
  }
  const fpromKey = fprTid ? "tid" : "ref_id";
  const fpromValue = fprTid != null ? fprTid : fpr;
  return createPromoterLead({
    email: user.email,
    uid: user.decodedId,
    [fpromKey]: fpromValue,
    apiKey
  });
}
function getFprTid() {
  if (typeof window !== "undefined" && "FPROM" in window) {
    var _window;
    return (_window = window) == null || (_window = _window.FPROM) == null || (_window = _window.data) == null ? void 0 : _window.tid;
  }
  return undefined;
}

/***/ }),

/***/ "../../packages/app-core/src/first-promoter/index.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getFprTid: () => (/* reexport safe */ _first_promoter__WEBPACK_IMPORTED_MODULE_0__.getFprTid),
/* harmony export */   trackFpr: () => (/* reexport safe */ _first_promoter__WEBPACK_IMPORTED_MODULE_0__.trackFpr)
/* harmony export */ });
/* harmony import */ var _first_promoter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../packages/app-core/src/first-promoter/first-promoter.ts");


/***/ }),

/***/ "../../packages/app-core/src/index.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthProvider: () => (/* reexport safe */ _auth__WEBPACK_IMPORTED_MODULE_2__.AuthProvider),
/* harmony export */   ChatSupportContext: () => (/* reexport safe */ _chat_support__WEBPACK_IMPORTED_MODULE_6__.ChatSupportContext),
/* harmony export */   ChatSupportProvider: () => (/* reexport safe */ _chat_support__WEBPACK_IMPORTED_MODULE_6__.ChatSupportProvider),
/* harmony export */   Container: () => (/* reexport safe */ _components_container__WEBPACK_IMPORTED_MODULE_4__.Container),
/* harmony export */   LanguageSwitcher: () => (/* reexport safe */ _locale_language_switcher__WEBPACK_IMPORTED_MODULE_0__.LanguageSwitcher),
/* harmony export */   LoadingScreen: () => (/* reexport safe */ _components_loading_screen__WEBPACK_IMPORTED_MODULE_3__.LoadingScreen),
/* harmony export */   LocaleProvider: () => (/* reexport safe */ _locale_local_provider__WEBPACK_IMPORTED_MODULE_1__.LocaleProvider),
/* harmony export */   SUPPORTED_LOCALES: () => (/* reexport safe */ _locale_local_provider__WEBPACK_IMPORTED_MODULE_1__.SUPPORTED_LOCALES),
/* harmony export */   ShellPublic: () => (/* reexport safe */ _auth__WEBPACK_IMPORTED_MODULE_2__.ShellPublic),
/* harmony export */   ShellSecure: () => (/* reexport safe */ _auth__WEBPACK_IMPORTED_MODULE_2__.ShellSecure),
/* harmony export */   StandaloneSecure: () => (/* reexport safe */ _auth__WEBPACK_IMPORTED_MODULE_2__.StandaloneSecure),
/* harmony export */   TrackingContext: () => (/* reexport safe */ _tracking__WEBPACK_IMPORTED_MODULE_5__.TrackingContext),
/* harmony export */   TrackingProvider: () => (/* reexport safe */ _tracking__WEBPACK_IMPORTED_MODULE_5__.TrackingProvider),
/* harmony export */   getFprTid: () => (/* reexport safe */ _first_promoter__WEBPACK_IMPORTED_MODULE_7__.getFprTid),
/* harmony export */   trackFpr: () => (/* reexport safe */ _first_promoter__WEBPACK_IMPORTED_MODULE_7__.trackFpr),
/* harmony export */   trackingMethods: () => (/* reexport safe */ _tracking__WEBPACK_IMPORTED_MODULE_5__.trackingMethods),
/* harmony export */   useAuth: () => (/* reexport safe */ _auth__WEBPACK_IMPORTED_MODULE_2__.useAuth),
/* harmony export */   useChatSupport: () => (/* reexport safe */ _chat_support__WEBPACK_IMPORTED_MODULE_6__.useChatSupport),
/* harmony export */   useLocale: () => (/* reexport safe */ _locale_local_provider__WEBPACK_IMPORTED_MODULE_1__.useLocale),
/* harmony export */   useTracking: () => (/* reexport safe */ _tracking__WEBPACK_IMPORTED_MODULE_5__.useTracking)
/* harmony export */ });
/* harmony import */ var _locale_language_switcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../packages/app-core/src/locale/language-switcher.tsx");
/* harmony import */ var _locale_local_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../packages/app-core/src/locale/local-provider.tsx");
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../packages/app-core/src/auth/index.ts");
/* harmony import */ var _components_loading_screen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../packages/app-core/src/components/loading-screen.tsx");
/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../packages/app-core/src/components/container.tsx");
/* harmony import */ var _tracking__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../packages/app-core/src/tracking/index.ts");
/* harmony import */ var _chat_support__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../../packages/app-core/src/chat-support/index.ts");
/* harmony import */ var _first_promoter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../../packages/app-core/src/first-promoter/index.ts");









/***/ }),

/***/ "../../packages/app-core/src/locale/language-switcher.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LanguageSwitcher: () => (/* binding */ LanguageSwitcher)
/* harmony export */ });
/* harmony import */ var _home_runner_work_wuilt_client_wuilt_client_node_modules_nx_js_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/@nx/js/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _wuilt_quilt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("webpack/sharing/consume/default/@wuilt/quilt/@wuilt/quilt?13b5");
/* harmony import */ var _wuilt_quilt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wuilt_quilt__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _local_provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../packages/app-core/src/locale/local-provider.tsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("webpack/sharing/consume/default/styled-components/styled-components?d27b");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("webpack/sharing/consume/default/react-select/react-select");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_select__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../node_modules/react/jsx-dev-runtime.js");

const _excluded = ["children"];
var _jsxFileName = "/home/runner/work/wuilt-client/wuilt-client/packages/app-core/src/locale/language-switcher.tsx";





const OPTIONS = Object.values(_local_provider__WEBPACK_IMPORTED_MODULE_5__.SUPPORTED_LOCALES).map(locale => ({
  label: locale.display,
  value: locale.code
}));
const StyledSelectWrapper = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "language-switcher__StyledSelectWrapper",
  componentId: "sc-cafibg-0"
})(["input{right:-100px;}"]);
const Control = _ref => {
  let {
      children
    } = _ref,
    props = (0,_home_runner_work_wuilt_client_wuilt_client_node_modules_nx_js_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, _excluded);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_select__WEBPACK_IMPORTED_MODULE_3__.components.Control, Object.assign({}, props, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      style: {
        marginInlineStart: 9,
        marginInlineEnd: -9
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_wuilt_quilt__WEBPACK_IMPORTED_MODULE_1__.DomainIcon, {
        size: "xl"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, undefined), children]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }, undefined);
};
const LanguageSwitcher = () => {
  const {
    locale,
    setLocale
  } = (0,_local_provider__WEBPACK_IMPORTED_MODULE_5__.useLocale)();
  const handleChange = locale => {
    setLocale(locale);
  };
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(StyledSelectWrapper, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_wuilt_quilt__WEBPACK_IMPORTED_MODULE_1__.Select, {
      defaultValue: OPTIONS.find(option => option.value === locale.code),
      options: OPTIONS,
      onChange: e => handleChange(_local_provider__WEBPACK_IMPORTED_MODULE_5__.SUPPORTED_LOCALES[e.value]),
      components: {
        Control
      },
      isSearchable: false,
      isClearable: false,
      hideSelectedOptions: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "../../packages/app-core/src/locale/local-provider.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LocaleProvider: () => (/* binding */ LocaleProvider),
/* harmony export */   SUPPORTED_LOCALES: () => (/* binding */ SUPPORTED_LOCALES),
/* harmony export */   useLocale: () => (/* binding */ useLocale)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("webpack/sharing/consume/default/react/react?2a4b");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _user_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../packages/app-core/src/locale/user-storage.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/react/jsx-dev-runtime.js");
var _jsxFileName = "/home/runner/work/wuilt-client/wuilt-client/packages/app-core/src/locale/local-provider.tsx";



const SUPPORTED_LOCALES = {
  ar: {
    dir: "rtl",
    code: "ar",
    locale: "ar-EG",
    name: "arabic",
    display: "العربية",
    beamerPanel: "left"
  },
  en: {
    dir: "ltr",
    code: "en",
    locale: "en-US",
    name: "english",
    display: "English",
    beamerPanel: "right"
  },
  fr: {
    dir: "ltr",
    code: "fr",
    locale: "fr-FR",
    name: "french",
    display: "Francais",
    beamerPanel: "right"
  },
  tr: {
    dir: "ltr",
    code: "tr",
    locale: "tr-TR",
    name: "turkish",
    display: "Türkçe",
    beamerPanel: "right"
  }
};
const LocaleContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext({
  setLocale: () => {
    //
  },
  activeLocale: "en-US",
  locale: SUPPORTED_LOCALES.en
});
function useLocale() {
  return react__WEBPACK_IMPORTED_MODULE_0___default().useContext(LocaleContext);
}
const LocaleProvider = ({
  children
}) => {
  const [state, setState] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(SUPPORTED_LOCALES["en"]);
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
    let savedLocale;
    try {
      const savedLang = JSON.parse(localStorage.getItem("locale") || "");
      if (savedLang) {
        savedLocale = SUPPORTED_LOCALES[savedLang.substring(0, 2)];
        setState(savedLocale);
      } else {
        savedLocale = SUPPORTED_LOCALES.en;
        setState(savedLocale);
      }
    } catch (error) {
      savedLocale = SUPPORTED_LOCALES.en;
      setState(savedLocale);
    }
    (0,_user_storage__WEBPACK_IMPORTED_MODULE_2__.updateUserStorage)(savedLocale);
  }, []);
  const setLocale = newLocale => {
    (0,_user_storage__WEBPACK_IMPORTED_MODULE_2__.updateUserStorage)(newLocale);
    setState(newLocale);
  };
  const contextValue = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => ({
    setLocale,
    activeLocale: state == null ? void 0 : state.locale,
    locale: state
  }), [state]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(LocaleContext.Provider, {
    value: contextValue,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 104,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "../../packages/app-core/src/locale/user-storage.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   updateUserStorage: () => (/* binding */ updateUserStorage)
/* harmony export */ });
function updateBeamer(display, language, user = {}) {
  var _window$Beamer;
  (_window$Beamer = window.Beamer) == null || _window$Beamer.update(Object.assign({
    display,
    language
  }, user));
  window.beamer_config = Object.assign({}, window.beamer_config, {
    display,
    language
  });
}
function updateDocument(dir) {
  document.body.classList.toggle("rtl", dir === "rtl");
  document.body.classList.toggle("ltr", dir !== "rtl");
}
function updateStorage(locale) {
  localStorage.setItem("locale", JSON.stringify(locale));
}
function updateUserStorage(locale) {
  updateBeamer(locale.display, locale.code.toUpperCase());
  updateStorage(locale.locale);
  updateDocument(locale.dir);
}

/***/ }),

/***/ "../../packages/app-core/src/tracking/amplitude.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createAmplitudeProvider: () => (/* binding */ createAmplitudeProvider)
/* harmony export */ });
/* harmony import */ var _home_runner_work_wuilt_client_wuilt_client_node_modules_nx_js_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/@nx/js/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _amplitude_analytics_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("webpack/sharing/consume/default/@amplitude/analytics-browser/@amplitude/analytics-browser");
/* harmony import */ var _amplitude_analytics_browser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_amplitude_analytics_browser__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../packages/app-core/src/tracking/utils.ts");

const _excluded = ["attributes"];


const createAmplitudeProvider = ({
  config: {
    apiKey
  },
  user: _user = undefined
}) => {
  (0,_amplitude_analytics_browser__WEBPACK_IMPORTED_MODULE_1__.init)(apiKey, _user == null ? void 0 : _user.id, {
    minIdLength: 3
    // serverUrl: 'https://79473c3dd1c7.ngrok.app/amplitude',
  });
  if (_user) {
    (0,_amplitude_analytics_browser__WEBPACK_IMPORTED_MODULE_1__.setUserId)(_user.id);
    const identifyEvent = new _amplitude_analytics_browser__WEBPACK_IMPORTED_MODULE_1__.Identify();
    const {
        attributes
      } = _user,
      userProps = (0,_home_runner_work_wuilt_client_wuilt_client_node_modules_nx_js_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_user, _excluded);
    Object.entries(userProps).forEach(([key, value]) => {
      identifyEvent.set(key, value);
    });
    if (attributes) {
      Object.entries(attributes).forEach(([key, value]) => {
        identifyEvent.set(key, value);
      });
    }
    (0,_amplitude_analytics_browser__WEBPACK_IMPORTED_MODULE_1__.identify)(identifyEvent);
  }
  return {
    setContext: (key, context) => {
      // Not implemented
    },
    pushError: (message, context) => {
      // We don't push errors to Amplitude
    },
    pushEvent: (name, attributes) => {
      (0,_amplitude_analytics_browser__WEBPACK_IMPORTED_MODULE_1__.track)(name, attributes);
    },
    view: (name, attributes) => {
      (0,_amplitude_analytics_browser__WEBPACK_IMPORTED_MODULE_1__.track)("View", Object.assign({
        name,
        url: window.location.href,
        path: window.location.pathname,
        search: (0,_utils__WEBPACK_IMPORTED_MODULE_2__.urlSearchParamsToObject)(new URLSearchParams(window.location.search))
      }, attributes));
    }
  };
};

/***/ }),

/***/ "../../packages/app-core/src/tracking/datadog-rum.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createDatadogRumProvider: () => (/* binding */ createDatadogRumProvider)
/* harmony export */ });
/* harmony import */ var _datadog_browser_rum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("webpack/sharing/consume/default/@datadog/browser-rum/@datadog/browser-rum");
/* harmony import */ var _datadog_browser_rum__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_datadog_browser_rum__WEBPACK_IMPORTED_MODULE_0__);

const createDatadogRumProvider = ({
  config: {
    applicationId,
    clientToken,
    site,
    env,
    version,
    service
  },
  user
}) => {
  _datadog_browser_rum__WEBPACK_IMPORTED_MODULE_0__.datadogRum.init({
    // proxy: "https://79473c3dd1c7.ngrok.app/datadog",
    applicationId: applicationId,
    clientToken: clientToken,
    site: site,
    service,
    env,
    version,
    sessionSampleRate: 100,
    sessionReplaySampleRate: 0,
    trackResources: true,
    trackLongTasks: true,
    trackUserInteractions: true,
    defaultPrivacyLevel: "allow",
    trackFrustrations: true
  });
  // datadogRum.startSessionReplayRecording();

  if (user) {
    _datadog_browser_rum__WEBPACK_IMPORTED_MODULE_0__.datadogRum.setUser({
      id: user.id,
      email: user.email,
      name: user.name
    });
  }
  return {
    setContext: (key, context) => {
      if (!context) {
        _datadog_browser_rum__WEBPACK_IMPORTED_MODULE_0__.datadogRum.removeGlobalContextProperty(key);
        return;
      }
      _datadog_browser_rum__WEBPACK_IMPORTED_MODULE_0__.datadogRum.setGlobalContextProperty(key, context);
    },
    pushEvent: (name, attributes) => {
      _datadog_browser_rum__WEBPACK_IMPORTED_MODULE_0__.datadogRum.addAction(name, attributes);
    },
    view: (name, attributes) => {
      _datadog_browser_rum__WEBPACK_IMPORTED_MODULE_0__.datadogRum.startView(name);
      _datadog_browser_rum__WEBPACK_IMPORTED_MODULE_0__.datadogRum.addAction(`View ${name}`, attributes);
    },
    pushError: (error, context) => {
      _datadog_browser_rum__WEBPACK_IMPORTED_MODULE_0__.datadogRum.addError(error, context);
    }
  };
};

/***/ }),

/***/ "../../packages/app-core/src/tracking/hubspot.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createHubspotProvider: () => (/* binding */ createHubspotProvider)
/* harmony export */ });
/**
 * The props to track event function
 */

function initHubspotScript(portalId) {
  if (!document.getElementById("hs-script-loader")) {
    const script = document.createElement("script");
    script.src = `https://js.hs-scripts.com/${portalId}.js`;
    script.async = true;
    script.type = "text/javascript";
    script.defer = true;
    script.id = "hs-script-loader";
    document.body.appendChild(script);
  }
  if (!document.getElementById("hs-meetings-embed-code")) {
    const script = document.createElement("script");
    script.src = "https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js";
    script.async = true;
    script.defer = true;
    script.type = "text/javascript";
    script.id = "hs-meetings-embed-code";
    document.body.appendChild(script);
  }
  const _hsq = window._hsq = window._hsq || [];
  const setIdentity = (email, customProperties) => {
    _hsq.push(["identify", Object.assign({
      email
    }, customProperties)]);
  };
  const setTrackEvent = ({
    eventId,
    value
  }) => {
    _hsq.push(["trackEvent", {
      id: eventId,
      value
    }]);
  };
  const setContentType = contentType => {
    _hsq.push(["setContentType", contentType]);
  };
  const setPathPageView = path => {
    _hsq.push(["setPath", path]);
    _hsq.push(["trackPageView"]);
  };
  return {
    setContentType,
    setPathPageView,
    setIdentity,
    setTrackEvent
  };
}
const createHubspotProvider = ({
  config: {
    portalId
  },
  user
}) => {
  const hubspot = initHubspotScript(portalId);
  if (user) {
    hubspot.setIdentity(user.email, user);
  }
  return {
    setContext: (key, context) => {
      // Not implemented
    },
    pushError: (message, context) => {
      // We don't push errors to Amplitude
    },
    pushEvent: (name, attributes) => {
      // Don't need to push event from client for now
      // hubspot.setTrackEvent({ eventId: name, value: attributes });
    },
    view: (name, attributes) => {
      hubspot.setPathPageView(window.location.pathname);
    }
  };
};

/***/ }),

/***/ "../../packages/app-core/src/tracking/index.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TrackingContext: () => (/* reexport safe */ _tracking_context__WEBPACK_IMPORTED_MODULE_0__.TrackingContext),
/* harmony export */   TrackingProvider: () => (/* reexport safe */ _tracking_context__WEBPACK_IMPORTED_MODULE_0__.TrackingProvider),
/* harmony export */   trackingMethods: () => (/* reexport safe */ _tracking_context__WEBPACK_IMPORTED_MODULE_0__.trackingMethods),
/* harmony export */   useTracking: () => (/* reexport safe */ _tracking_context__WEBPACK_IMPORTED_MODULE_0__.useTracking)
/* harmony export */ });
/* harmony import */ var _tracking_context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../packages/app-core/src/tracking/tracking-context.tsx");


/***/ }),

/***/ "../../packages/app-core/src/tracking/posthog.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PostHogProvider: () => (/* binding */ PostHogProvider),
/* harmony export */   createPostHogProvider: () => (/* binding */ createPostHogProvider),
/* harmony export */   posthogClient: () => (/* binding */ posthogClient)
/* harmony export */ });
/* harmony import */ var posthog_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("webpack/sharing/consume/default/posthog-js/posthog-js");
/* harmony import */ var posthog_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(posthog_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var posthog_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/posthog-js/react/dist/esm/index.js");


const PostHogProvider = posthog_js_react__WEBPACK_IMPORTED_MODULE_1__.PostHogProvider;
const posthogClient = (posthog_js__WEBPACK_IMPORTED_MODULE_0___default());
const createPostHogProvider = ({
  config: {
    token,
    apiHost
  },
  user
}) => {
  if (user) {
    posthog_js__WEBPACK_IMPORTED_MODULE_0___default().init(token, {
      api_host: apiHost
    });
    posthog_js__WEBPACK_IMPORTED_MODULE_0___default().identify(user.id, {
      id: user.id,
      email: user.email,
      name: user.name
    });
  }
  return {
    setContext: (key, context) => {
      if (!context) {
        // remove context
        // return;
      }
      // add context
    },
    pushEvent: (name, attributes) => {
      posthog_js__WEBPACK_IMPORTED_MODULE_0___default().capture(name, attributes);
    },
    view: (name, attributes) => {},
    pushError: (error, context) => {}
  };
};

/***/ }),

/***/ "../../packages/app-core/src/tracking/segments.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createSegmentProvider: () => (/* binding */ createSegmentProvider)
/* harmony export */ });
/* harmony import */ var _segment_analytics_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("webpack/sharing/consume/default/@segment/analytics-next/@segment/analytics-next");
/* harmony import */ var _segment_analytics_next__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_segment_analytics_next__WEBPACK_IMPORTED_MODULE_0__);

const createSegmentProvider = ({
  config: {
    writeKey
  },
  user
}) => {
  const analytics = _segment_analytics_next__WEBPACK_IMPORTED_MODULE_0__.AnalyticsBrowser.load({
    writeKey
    // cdnURL: 'https://79473c3dd1c7.ngrok.app/segment-cdn',
  }
  // {
  //   integrations: {
  //     'Segment.io': {
  //       apiHost: '79473c3dd1c7.ngrok.app/segment/v1',
  //       protocol: 'https', // optional
  //     },
  //   },
  // }
  );
  if (user) {
    analytics.identify(user.id, user);
  }
  return {
    setContext: (key, context) => {
      //
    },
    pushError: (message, context) => {
      //
    },
    pushEvent: (name, attributes) => {
      analytics.track(name, attributes);
    },
    view: (name, attributes) => {
      analytics.page(undefined, name, attributes);
    }
  };
};

/***/ }),

/***/ "../../packages/app-core/src/tracking/sentry.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createSentryProvider: () => (/* binding */ createSentryProvider)
/* harmony export */ });
/* harmony import */ var _sentry_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("webpack/sharing/consume/default/@sentry/react/@sentry/react");
/* harmony import */ var _sentry_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sentry_react__WEBPACK_IMPORTED_MODULE_0__);

const init = (dsn, user) => {
  var _Sentry$getCurrentHub;
  const isInitialized = (_sentry_react__WEBPACK_IMPORTED_MODULE_0__ == null || _sentry_react__WEBPACK_IMPORTED_MODULE_0__.getCurrentHub == null || (_Sentry$getCurrentHub = _sentry_react__WEBPACK_IMPORTED_MODULE_0__.getCurrentHub()) == null || _Sentry$getCurrentHub.getClient == null ? void 0 : _Sentry$getCurrentHub.getClient()) != null;
  if (isInitialized) return;
  _sentry_react__WEBPACK_IMPORTED_MODULE_0__.init({
    dsn,
    integrations: [new _sentry_react__WEBPACK_IMPORTED_MODULE_0__.BrowserTracing({
      // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
      tracePropagationTargets: [/^https:\/\/*\.wuilt\.com/]
    }), new _sentry_react__WEBPACK_IMPORTED_MODULE_0__.Replay({
      maskAllText: false,
      blockAllMedia: false,
      maskAllInputs: false,
      networkDetailAllowUrls: [window.location.origin, /^https:\/\/*\.wuilt\.com/]
    })],
    // Performance Monitoring
    tracesSampleRate: 0,
    // Capture 100% of the transactions, reduce in production!
    // Session Replay
    replaysSessionSampleRate: 0,
    // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
    replaysOnErrorSampleRate: 1 // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
  });
  _sentry_react__WEBPACK_IMPORTED_MODULE_0__.setUser({
    email: user == null ? void 0 : user.email,
    id: user == null ? void 0 : user.id,
    username: user == null ? void 0 : user.name
  });
};
const createSentryProvider = ({
  dsn,
  user
}) => {
  init(dsn, user);
  return {
    setContext: (key, context) => {
      // Not implemented
    },
    pushError: (message, context) => {
      // Not implemented
    },
    pushEvent: (name, attributes) => {
      // Not implemented
    },
    view: (name, attributes) => {
      // Not implemented
    }
  };
};

/***/ }),

/***/ "../../packages/app-core/src/tracking/tracking-context.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnalyticsView: () => (/* binding */ AnalyticsView),
/* harmony export */   TrackingContext: () => (/* binding */ TrackingContext),
/* harmony export */   TrackingProvider: () => (/* binding */ TrackingProvider),
/* harmony export */   trackingMethods: () => (/* binding */ trackingMethods),
/* harmony export */   useInteractionTime: () => (/* binding */ useInteractionTime),
/* harmony export */   useTracking: () => (/* binding */ useTracking)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("webpack/sharing/consume/default/react/react?2a4b");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var browser_interaction_time__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("webpack/sharing/consume/default/browser-interaction-time/browser-interaction-time");
/* harmony import */ var browser_interaction_time__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(browser_interaction_time__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _amplitude__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../packages/app-core/src/tracking/amplitude.ts");
/* harmony import */ var _datadog_rum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../../packages/app-core/src/tracking/datadog-rum.ts");
/* harmony import */ var _hubspot__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../packages/app-core/src/tracking/hubspot.ts");
/* harmony import */ var _segments__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../packages/app-core/src/tracking/segments.ts");
/* harmony import */ var _posthog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../../packages/app-core/src/tracking/posthog.ts");
/* harmony import */ var _sentry__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../../packages/app-core/src/tracking/sentry.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/react/jsx-dev-runtime.js");
var _jsxFileName = "/home/runner/work/wuilt-client/wuilt-client/packages/app-core/src/tracking/tracking-context.tsx";









const noopTracking = {
  setContext: () => undefined,
  pushError: () => undefined,
  pushEvent: () => undefined,
  view: () => undefined
};
let trackingMethods = noopTracking;
const TrackingContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(trackingMethods);
const TrackingProvider = ({
  config: {
    amplitude,
    segment,
    hubspot,
    datadogRum,
    posthog,
    sentry
  },
  user,
  children,
  disable: _disable = false
}) => {
  const isEnabled = !_disable;
  const value = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const providers = {};
    if (!isEnabled) {
      return noopTracking;
    }
    if (amplitude != null && amplitude.apiKey) {
      providers.amplitude = (0,_amplitude__WEBPACK_IMPORTED_MODULE_3__.createAmplitudeProvider)({
        user,
        config: amplitude
      });
    }
    if (segment != null && segment.writeKey) {
      providers.segment = (0,_segments__WEBPACK_IMPORTED_MODULE_4__.createSegmentProvider)({
        user,
        config: segment
      });
    }
    if (hubspot != null && hubspot.portalId) {
      providers.hubspot = (0,_hubspot__WEBPACK_IMPORTED_MODULE_5__.createHubspotProvider)({
        user,
        config: hubspot
      });
    }
    if (datadogRum != null && datadogRum.applicationId) {
      providers.datadogRum = (0,_datadog_rum__WEBPACK_IMPORTED_MODULE_6__.createDatadogRumProvider)({
        user,
        config: datadogRum
      });
    }
    if (posthog != null && posthog.token) {
      providers.datadogRum = (0,_posthog__WEBPACK_IMPORTED_MODULE_7__.createPostHogProvider)({
        user,
        config: posthog
      });
    }
    if (sentry != null && sentry.dsn) {
      providers.sentry = (0,_sentry__WEBPACK_IMPORTED_MODULE_8__.createSentryProvider)({
        user,
        dsn: sentry == null ? void 0 : sentry.dsn
      });
    }
    const tracking = {
      setContext: (name, context) => {
        Object.values(providers).forEach(provider => {
          provider.setContext(name, context);
        });
      },
      pushError: (error, context) => {
        Object.values(providers).forEach(provider => {
          provider.pushError(error, context);
        });
      },
      pushEvent: (name, attributes) => {
        Object.values(providers).forEach(provider => {
          provider.pushEvent(name, attributes);
        });
      },
      view: (name, attributes) => {
        Object.values(providers).forEach(provider => {
          provider.view(name, attributes);
        });
      }
    };
    trackingMethods = tracking;
    return tracking;
  }, [isEnabled, amplitude, segment, hubspot, datadogRum, posthog, sentry, user]);
  const innerJsx = posthog != null && posthog.token ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_posthog__WEBPACK_IMPORTED_MODULE_7__.PostHogProvider, {
    client: _posthog__WEBPACK_IMPORTED_MODULE_7__.posthogClient,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 163,
    columnNumber: 5
  }, undefined) : children;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(TrackingContext.Provider, {
    value: value,
    children: innerJsx
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 169,
    columnNumber: 5
  }, undefined);
};
const useTracking = () => {
  const context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(TrackingContext);
  return context;
};
const AnalyticsView = ({
  name,
  attributes,
  children
}) => {
  const context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(TrackingContext);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    context.view(name, attributes);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useInteractionTime(milliseconds => {
    context.pushEvent("View - End", Object.assign({}, attributes, {
      name,
      activeTimeInSeconds: Math.floor(milliseconds / 1000)
    }));
  });
  return children;
};
const useInteractionTime = callback => {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const browserInteractionTime = new (browser_interaction_time__WEBPACK_IMPORTED_MODULE_1___default())({
      idleTimeoutMs: 3000
    });
    browserInteractionTime.startTimer();
    return () => {
      browserInteractionTime.stopTimer();
      callback(browserInteractionTime.getTimeInMilliseconds());
    };
  }, [callback]);
};

/***/ }),

/***/ "../../packages/app-core/src/tracking/utils.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   urlSearchParamsToObject: () => (/* binding */ urlSearchParamsToObject)
/* harmony export */ });
const urlSearchParamsToObject = params => {
  const result = {};
  for (const [key, value] of Array.from(params.entries())) {
    result[key] = value;
  }
  return result;
};

/***/ }),

/***/ "../../node_modules/@nx/js/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _objectWithoutPropertiesLoose)
/* harmony export */ });
function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (e.indexOf(n) >= 0) continue;
    t[n] = r[n];
  }
  return t;
}


/***/ }),

/***/ "../../node_modules/posthog-js/react/dist/esm/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PostHogContext: () => (/* binding */ PostHogContext),
/* harmony export */   PostHogFeature: () => (/* binding */ PostHogFeature),
/* harmony export */   PostHogProvider: () => (/* binding */ PostHogProvider),
/* harmony export */   useActiveFeatureFlags: () => (/* binding */ useActiveFeatureFlags),
/* harmony export */   useFeatureFlagEnabled: () => (/* binding */ useFeatureFlagEnabled),
/* harmony export */   useFeatureFlagPayload: () => (/* binding */ useFeatureFlagPayload),
/* harmony export */   useFeatureFlagVariantKey: () => (/* binding */ useFeatureFlagVariantKey),
/* harmony export */   usePostHog: () => (/* binding */ usePostHog)
/* harmony export */ });
/* harmony import */ var posthog_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("webpack/sharing/consume/default/posthog-js/posthog-js");
/* harmony import */ var posthog_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(posthog_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("webpack/sharing/consume/default/react/react?a146");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



var PostHogContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({ client: (posthog_js__WEBPACK_IMPORTED_MODULE_0___default()) });

function PostHogProvider(_a) {
    var children = _a.children, client = _a.client, apiKey = _a.apiKey, options = _a.options;
    var posthog = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {
        if (client && apiKey) {
            console.warn('You have provided both a client and an apiKey to PostHogProvider. The apiKey will be ignored in favour of the client.');
        }
        if (client && options) {
            console.warn('You have provided both a client and options to PostHogProvider. The options will be ignored in favour of the client.');
        }
        if (client) {
            return client;
        }
        if (apiKey) {
            if ((posthog_js__WEBPACK_IMPORTED_MODULE_0___default().__loaded)) {
                console.warn('posthog was already loaded elsewhere. This may cause issues.');
            }
            posthog_js__WEBPACK_IMPORTED_MODULE_0___default().init(apiKey, options);
        }
        return (posthog_js__WEBPACK_IMPORTED_MODULE_0___default());
    }, [client, apiKey]);
    return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(PostHogContext.Provider, { value: { client: posthog } }, children);
}

var usePostHog = function () {
    var client = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(PostHogContext).client;
    return client;
};

function useFeatureFlagEnabled(flag) {
    var client = usePostHog();
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), featureEnabled = _a[0], setFeatureEnabled = _a[1];
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
        return client.onFeatureFlags(function () {
            setFeatureEnabled(client.isFeatureEnabled(flag));
        });
    }, [client, flag]);
    return featureEnabled;
}

function useFeatureFlagPayload(flag) {
    var client = usePostHog();
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), featureFlagPayload = _a[0], setFeatureFlagPayload = _a[1];
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
        return client.onFeatureFlags(function () {
            setFeatureFlagPayload(client.getFeatureFlagPayload(flag));
        });
    }, [client, flag]);
    return featureFlagPayload;
}

function useActiveFeatureFlags() {
    var client = usePostHog();
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), featureFlags = _a[0], setFeatureFlags = _a[1];
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
        return client.onFeatureFlags(function (flags) {
            setFeatureFlags(flags);
        });
    }, [client]);
    return featureFlags;
}

function useFeatureFlagVariantKey(flag) {
    var client = usePostHog();
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), featureFlagVariantKey = _a[0], setFeatureFlagVariantKey = _a[1];
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
        return client.onFeatureFlags(function () {
            setFeatureFlagVariantKey(client.getFeatureFlag(flag));
        });
    }, [client, flag]);
    return featureFlagVariantKey;
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function PostHogFeature(_a) {
    var flag = _a.flag, match = _a.match, children = _a.children, fallback = _a.fallback, visibilityObserverOptions = _a.visibilityObserverOptions, trackInteraction = _a.trackInteraction, trackView = _a.trackView, props = __rest(_a, ["flag", "match", "children", "fallback", "visibilityObserverOptions", "trackInteraction", "trackView"]);
    var payload = useFeatureFlagPayload(flag);
    var variant = useFeatureFlagVariantKey(flag);
    var shouldTrackInteraction = trackInteraction !== null && trackInteraction !== void 0 ? trackInteraction : true;
    var shouldTrackView = trackView !== null && trackView !== void 0 ? trackView : true;
    if (match === undefined || variant === match) {
        var childNode = typeof children === 'function' ? children(payload) : children;
        return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement(VisibilityAndClickTracker, __assign({ flag: flag, options: visibilityObserverOptions, trackInteraction: shouldTrackInteraction, trackView: shouldTrackView }, props), childNode));
    }
    return react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, fallback);
}
function captureFeatureInteraction(flag, posthog) {
    var _a;
    posthog.capture('$feature_interaction', { feature_flag: flag, $set: (_a = {}, _a["$feature_interaction/" + flag] = true, _a) });
}
function captureFeatureView(flag, posthog) {
    posthog.capture('$feature_view', { feature_flag: flag });
}
function VisibilityAndClickTracker(_a) {
    var flag = _a.flag, children = _a.children, trackInteraction = _a.trackInteraction, trackView = _a.trackView, options = _a.options, props = __rest(_a, ["flag", "children", "trackInteraction", "trackView", "options"]);
    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    var posthog = usePostHog();
    var visibilityTrackedRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(false);
    var clickTrackedRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(false);
    var cachedOnClick = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function () {
        if (!clickTrackedRef.current && trackInteraction) {
            captureFeatureInteraction(flag, posthog);
            clickTrackedRef.current = true;
        }
    }, [flag, posthog, trackInteraction]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
        if (ref.current === null || !trackView)
            return;
        var onIntersect = function (entry) {
            if (!visibilityTrackedRef.current && entry.isIntersecting) {
                captureFeatureView(flag, posthog);
                visibilityTrackedRef.current = true;
            }
        };
        var observer = new IntersectionObserver(function (_a) {
            var entry = _a[0];
            return onIntersect(entry);
        }, __assign({ threshold: 0.1 }, options));
        observer.observe(ref.current);
        return function () { return observer.disconnect(); };
    }, [flag, options, posthog, ref, trackView]);
    return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", __assign({ ref: ref }, props, { onClick: cachedOnClick }), children));
}




/***/ })

}])
//# sourceMappingURL=packages_app-core_src_index_ts.fe0df522265a18ae.js.map