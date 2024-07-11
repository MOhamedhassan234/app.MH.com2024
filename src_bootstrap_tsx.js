(self["webpackChunkapp_shell"] = self["webpackChunkapp_shell"] || []).push([["src_bootstrap_tsx"],{

/***/ "./src/app/screens/Errors/Error.module.scss":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"section":"Error_section__exy+g","wrapper":"Error_wrapper__iRLKH","heading":"Error_heading__hROq7","text":"Error_text__kyPPr","svg":"Error_svg__xQrCv","buttons-wrapper":"Error_buttons-wrapper__ZNrMo","button":"Error_button__AwrFa"});

/***/ }),

/***/ "./src/app/global.css":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/app/apollo/initApollo.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ initApollo)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("webpack/sharing/consume/default/@apollo/client/@apollo/client?c775");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client_link_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("webpack/sharing/consume/default/@apollo/client/link/context/@apollo/client/link/context");
/* harmony import */ var _apollo_client_link_context__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_link_context__WEBPACK_IMPORTED_MODULE_1__);


const {
  NX_GRAPHQL_URI
} = ({"NX_GRAPHQL_URI":"https://graphql.wuilt.com"});
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
const client = new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.ApolloClient({
  link: (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.from)([authLink, httpLink]),
  cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.InMemoryCache({})
});
function initApollo() {
  return client;
}

/***/ }),

/***/ "./src/app/app-navigation.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("webpack/sharing/consume/default/react/react?c222");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wuilt_quilt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("webpack/sharing/consume/default/@wuilt/quilt/@wuilt/quilt?e0d6");
/* harmony import */ var _wuilt_quilt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wuilt_quilt__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wuilt_app_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("webpack/sharing/consume/default/@wuilt/app-core/@wuilt/app-core");
/* harmony import */ var _wuilt_app_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wuilt_app_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("webpack/sharing/consume/default/react-intl/react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("webpack/sharing/consume/default/react-router-dom/react-router-dom?23b0");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _use_gravatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/app/use-gravatar.ts");
/* harmony import */ var _help_center_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/app/help-center-button.tsx");
/* harmony import */ var _gameball__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/app/gameball.tsx");
/* harmony import */ var _beamer_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/app/beamer-button.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../../node_modules/react/jsx-dev-runtime.js");
var _jsxFileName = "/home/runner/work/wuilt-client/wuilt-client/apps/app-shell/src/app/app-navigation.tsx";











const SideNav = () => {
  const auth = (0,_wuilt_app_core__WEBPACK_IMPORTED_MODULE_2__.useAuth)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
    style: {
      width: "90%",
      minWidth: 340,
      padding: "10px 0",
      boxSizing: "border-box",
      height: "100%",
      display: "flex",
      flexDirection: "column"
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_wuilt_quilt__WEBPACK_IMPORTED_MODULE_1__.Stack, {
      spacing: "none",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_wuilt_quilt__WEBPACK_IMPORTED_MODULE_1__.Box, {
        px: "22px",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_wuilt_quilt__WEBPACK_IMPORTED_MODULE_1__.WuiltLogo, {
          size: 40,
          isLoading: false
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_wuilt_quilt__WEBPACK_IMPORTED_MODULE_1__.Navigation, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_wuilt_quilt__WEBPACK_IMPORTED_MODULE_1__.Navigation.Section, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_wuilt_quilt__WEBPACK_IMPORTED_MODULE_1__.Navigation.Item, {
            icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_wuilt_quilt__WEBPACK_IMPORTED_MODULE_1__.WebDesignIcon, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 21
            }, undefined),
            label: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
              id: "/mrgIW",
              defaultMessage: "My Websites"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 17
            }, undefined),
            to: `/sites`
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_wuilt_quilt__WEBPACK_IMPORTED_MODULE_1__.Navigation.Item, {
            icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_wuilt_quilt__WEBPACK_IMPORTED_MODULE_1__.FurnitureStoreIcon, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 21
            }, undefined),
            label: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
              id: "cNiKNu",
              defaultMessage: "My Stores"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 17
            }, undefined),
            to: `/stores`
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_wuilt_quilt__WEBPACK_IMPORTED_MODULE_1__.Divider, {
            horizontal: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_help_center_button__WEBPACK_IMPORTED_MODULE_6__["default"], {
            padding: "0 30px"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
      style: {
        display: "flex",
        flex: "1 1 auto"
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_wuilt_quilt__WEBPACK_IMPORTED_MODULE_1__.Divider, {
      horizontal: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_wuilt_quilt__WEBPACK_IMPORTED_MODULE_1__.Stack, {
      px: 32,
      py: 10,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_wuilt_app_core__WEBPACK_IMPORTED_MODULE_2__.LanguageSwitcher, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_wuilt_quilt__WEBPACK_IMPORTED_MODULE_1__.Divider, {
      horizontal: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(UserNav, {
      auth: auth
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 5
  }, undefined);
};
const UserNav = ({
  auth
}) => {
  var _auth$user, _auth$user2, _auth$user3, _auth$user4;
  const [userGravatar] = (0,_use_gravatar__WEBPACK_IMPORTED_MODULE_5__.useGravatar)((_auth$user = auth.user) == null ? void 0 : _auth$user.email);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_wuilt_quilt__WEBPACK_IMPORTED_MODULE_1__.Stack, {
      px: 32,
      py: 10,
      style: {
        width: "100%"
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_wuilt_quilt__WEBPACK_IMPORTED_MODULE_1__.Stack, {
        direction: "row",
        align: "center",
        spacing: "condensed",
        style: {
          width: "100%"
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_wuilt_quilt__WEBPACK_IMPORTED_MODULE_1__.Stack, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_wuilt_quilt__WEBPACK_IMPORTED_MODULE_1__.Avatar, {
            size: "large",
            src: userGravatar,
            fullName: (_auth$user2 = auth.user) == null ? void 0 : _auth$user2.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_wuilt_quilt__WEBPACK_IMPORTED_MODULE_1__.Stack, {
          spacing: "tight",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_wuilt_quilt__WEBPACK_IMPORTED_MODULE_1__.Heading, {
            children: (_auth$user3 = auth.user) == null ? void 0 : _auth$user3.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_wuilt_quilt__WEBPACK_IMPORTED_MODULE_1__.Text, {
            children: (_auth$user4 = auth.user) == null ? void 0 : _auth$user4.email
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_wuilt_quilt__WEBPACK_IMPORTED_MODULE_1__.Divider, {
      horizontal: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_wuilt_quilt__WEBPACK_IMPORTED_MODULE_1__.Navigation, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_wuilt_quilt__WEBPACK_IMPORTED_MODULE_1__.Navigation.Section, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_wuilt_quilt__WEBPACK_IMPORTED_MODULE_1__.Navigation.Item, {
          icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_wuilt_quilt__WEBPACK_IMPORTED_MODULE_1__.SettingsGeneralIcon, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 19
          }, undefined),
          label: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
            defaultMessage: "Account Settings",
            id: "NQgbYA"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 15
          }, undefined),
          to: "/account"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_wuilt_quilt__WEBPACK_IMPORTED_MODULE_1__.Navigation.Item, {
          onClick: () => {
            auth.logout == null || auth.logout();
          },
          icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_wuilt_quilt__WEBPACK_IMPORTED_MODULE_1__.CloseIcon, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 132,
            columnNumber: 19
          }, undefined),
          label: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
            id: "C81/uG",
            defaultMessage: "Logout"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 133,
            columnNumber: 20
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};
const AppNavigationBar = () => {
  var _auth$user5, _auth$user6;
  const auth = (0,_wuilt_app_core__WEBPACK_IMPORTED_MODULE_2__.useAuth)();
  const [userGravatar] = (0,_use_gravatar__WEBPACK_IMPORTED_MODULE_5__.useGravatar)((_auth$user5 = auth.user) == null ? void 0 : _auth$user5.email);
  const isDesktop = _wuilt_quilt__WEBPACK_IMPORTED_MODULE_1__.useMediaQuery.isDesktop();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_wuilt_quilt__WEBPACK_IMPORTED_MODULE_1__.NavigationBar, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_wuilt_quilt__WEBPACK_IMPORTED_MODULE_1__.Box, {
      p: isDesktop ? "0 0 0 6px" : "0 12px",
      position: "relative",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_wuilt_quilt__WEBPACK_IMPORTED_MODULE_1__.Stack, {
        direction: "row",
        justify: "between",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_wuilt_quilt__WEBPACK_IMPORTED_MODULE_1__.Stack, {
          direction: "row",
          align: "center",
          spacing: "loose",
          tablet: {
            spacing: "natural"
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_wuilt_quilt__WEBPACK_IMPORTED_MODULE_1__.ShowBelowDesktop, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_wuilt_quilt__WEBPACK_IMPORTED_MODULE_1__.SidePanel, {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(SideNav, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 158,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 157,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_wuilt_quilt__WEBPACK_IMPORTED_MODULE_1__.Divider, {
              width: "2px",
              borderRadius: "5px",
              vertical: true,
              height: "20px"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 160,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 156,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
            to: "/",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_wuilt_quilt__WEBPACK_IMPORTED_MODULE_1__.WuiltLogo, {
              size: isDesktop ? 40 : 45,
              isLoading: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 163,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 162,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_wuilt_quilt__WEBPACK_IMPORTED_MODULE_1__.HideBelowDesktop, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_wuilt_quilt__WEBPACK_IMPORTED_MODULE_1__.Stack, {
              direction: "row",
              align: "center",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_wuilt_quilt__WEBPACK_IMPORTED_MODULE_1__.Button, {
                plain: true,
                color: "secondary",
                compact: true,
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
                  to: "/sites",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
                    id: "/mrgIW",
                    defaultMessage: "My Websites"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 169,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 168,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 167,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_wuilt_quilt__WEBPACK_IMPORTED_MODULE_1__.Button, {
                plain: true,
                color: "secondary",
                compact: true,
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
                  to: "/stores",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
                    id: "cNiKNu",
                    defaultMessage: "My Stores"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 177,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 176,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 175,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_help_center_button__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 180,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 166,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 165,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_wuilt_quilt__WEBPACK_IMPORTED_MODULE_1__.HideBelowDesktop, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_wuilt_quilt__WEBPACK_IMPORTED_MODULE_1__.Stack, {
            direction: "row",
            align: "center",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_wuilt_app_core__WEBPACK_IMPORTED_MODULE_2__.LanguageSwitcher, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 186,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_wuilt_quilt__WEBPACK_IMPORTED_MODULE_1__.Divider, {
              width: "2px",
              borderRadius: "5px",
              vertical: true,
              height: "20px"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 187,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_gameball__WEBPACK_IMPORTED_MODULE_7__.GameballButton, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 188,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_wuilt_quilt__WEBPACK_IMPORTED_MODULE_1__.Divider, {
              width: "2px",
              borderRadius: "5px",
              vertical: true,
              height: "20px"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 189,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_beamer_button__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 190,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_wuilt_quilt__WEBPACK_IMPORTED_MODULE_1__.Divider, {
              width: "2px",
              borderRadius: "5px",
              vertical: true,
              height: "20px"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 191,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_wuilt_quilt__WEBPACK_IMPORTED_MODULE_1__.DropMenu, {
              preferredAlign: "start",
              buttonProps: {
                suffixIcon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_wuilt_quilt__WEBPACK_IMPORTED_MODULE_1__.ChevronDownIcon, {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 195,
                  columnNumber: 31
                }, undefined),
                size: "normal",
                compact: true,
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_wuilt_quilt__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                  direction: "row",
                  align: "center",
                  spacing: "tight",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_wuilt_quilt__WEBPACK_IMPORTED_MODULE_1__.Avatar, {
                    src: userGravatar,
                    size: "medium",
                    fullName: auth == null || (_auth$user6 = auth.user) == null ? void 0 : _auth$user6.name
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 200,
                    columnNumber: 23
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 199,
                  columnNumber: 21
                }, undefined)
              },
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(UserNav, {
                auth: auth
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 209,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 192,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 185,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 184,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_wuilt_quilt__WEBPACK_IMPORTED_MODULE_1__.ShowBelowDesktop, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_beamer_button__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 214,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 213,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 147,
    columnNumber: 5
  }, undefined);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppNavigationBar);

/***/ }),

/***/ "./src/app/app.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   App: () => (/* binding */ App),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _global_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/app/global.css");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("webpack/sharing/consume/default/react/react?c222");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wuilt_app_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("webpack/sharing/consume/default/@wuilt/app-core/@wuilt/app-core");
/* harmony import */ var _wuilt_app_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wuilt_app_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("webpack/sharing/consume/default/react-router-dom/react-router-dom?23b0");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _main_container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/app/main-container.tsx");
/* harmony import */ var _components_DiscountBanner_TwoYearsOfferBanner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/app/components/DiscountBanner/TwoYearsOfferBanner.tsx");
/* harmony import */ var _shell_controller__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/app/shell-controller.tsx");
/* harmony import */ var _screens_Errors_shell_error_boundary__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/app/screens/Errors/shell-error-boundary.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../../node_modules/react/jsx-dev-runtime.js");
var _jsxFileName = "/home/runner/work/wuilt-client/wuilt-client/apps/app-shell/src/app/app.tsx";









function getRouteElement(route) {
  if (route.type === "unauthenticated") {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_wuilt_app_core__WEBPACK_IMPORTED_MODULE_2__.ShellPublic, {
      children: route.element
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 12
    }, this);
  }
  if (route.type === "frame") {
    return route.element;
  }
  if (route.type === "bare") {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_wuilt_app_core__WEBPACK_IMPORTED_MODULE_2__.ShellSecure, {
      children: route.element
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 12
    }, this);
  }
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_main_container__WEBPACK_IMPORTED_MODULE_4__.ShellContainer, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_wuilt_app_core__WEBPACK_IMPORTED_MODULE_2__.ShellSecure, {
      children: route.element
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 5
  }, this);
}
function App({
  routes
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.BrowserRouter, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_wuilt_app_core__WEBPACK_IMPORTED_MODULE_2__.LocaleProvider, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_main_container__WEBPACK_IMPORTED_MODULE_4__.ContextContainer, {
        routes: routes,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_screens_Errors_shell_error_boundary__WEBPACK_IMPORTED_MODULE_7__["default"], {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_shell_controller__WEBPACK_IMPORTED_MODULE_6__["default"], {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Suspense, {
              fallback: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_wuilt_app_core__WEBPACK_IMPORTED_MODULE_2__.LoadingScreen, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 40,
                columnNumber: 35
              }, this),
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Routes, {
                children: routes.map(route => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Route, {
                  path: route.path,
                  element: getRouteElement(route)
                }, route.path, false, {
                  fileName: _jsxFileName,
                  lineNumber: 43,
                  columnNumber: 21
                }, this))
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 41,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_DiscountBanner_TwoYearsOfferBanner__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 50,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 5
  }, this);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./src/app/beamer-button.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("webpack/sharing/consume/default/react/react?c222");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wuilt_quilt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("webpack/sharing/consume/default/@wuilt/quilt/@wuilt/quilt?e0d6");
/* harmony import */ var _wuilt_quilt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wuilt_quilt__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/react/jsx-dev-runtime.js");
var _jsxFileName = "/home/runner/work/wuilt-client/wuilt-client/apps/app-shell/src/app/beamer-button.tsx";



const BeamerButton = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_wuilt_quilt__WEBPACK_IMPORTED_MODULE_1__.ButtonIcon, {
    onlyIcon: true,
    className: "beamerTrigger",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_wuilt_quilt__WEBPACK_IMPORTED_MODULE_1__.BellIcon, {
      size: "xl"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, undefined);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BeamerButton);

/***/ }),

/***/ "./src/app/components/DiscountBanner/CountDownDisplay.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TIME_TYPES: () => (/* binding */ TIME_TYPES),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("webpack/sharing/consume/default/react/react?c222");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wuilt_quilt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("webpack/sharing/consume/default/@wuilt/quilt/@wuilt/quilt?e0d6");
/* harmony import */ var _wuilt_quilt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wuilt_quilt__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("webpack/sharing/consume/default/react-intl/react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/react/jsx-dev-runtime.js");
var _jsxFileName = "/home/runner/work/wuilt-client/wuilt-client/apps/app-shell/src/app/components/DiscountBanner/CountDownDisplay.tsx";




let TIME_TYPES = /*#__PURE__*/function (TIME_TYPES) {
  TIME_TYPES[TIME_TYPES["Days"] = 0] = "Days";
  TIME_TYPES[TIME_TYPES["Hours"] = 1] = "Hours";
  TIME_TYPES[TIME_TYPES["Minutes"] = 2] = "Minutes";
  TIME_TYPES[TIME_TYPES["Seconds"] = 3] = "Seconds";
  return TIME_TYPES;
}({});
const TIME_DISPLAY = {
  [TIME_TYPES.Days]: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
    defaultMessage: "day",
    id: "aVqg31"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 22
  }, undefined),
  [TIME_TYPES.Hours]: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
    defaultMessage: "hrs",
    id: "In2qYh"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 23
  }, undefined),
  [TIME_TYPES.Minutes]: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
    defaultMessage: "min",
    id: "TZr4xU"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 25
  }, undefined),
  [TIME_TYPES.Seconds]: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
    defaultMessage: "sec",
    id: "nCxC7R"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 25
  }, undefined)
};
function convertTo2Digits(number) {
  var _number$toString;
  return number == null || (_number$toString = number.toString()) == null ? void 0 : _number$toString.padStart(2, "0");
}
const CountDownDisplay = ({
  time,
  type
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_wuilt_quilt__WEBPACK_IMPORTED_MODULE_1__.Stack, {
    spacing: "none",
    align: "center",
    justify: "center",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_wuilt_quilt__WEBPACK_IMPORTED_MODULE_1__.Stack, {
      spacing: "none",
      direction: "row",
      justify: "center",
      align: "center",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_wuilt_quilt__WEBPACK_IMPORTED_MODULE_1__.Text, {
        color: "white",
        fontSize: "xl",
        fontWeight: "bold",
        children: convertTo2Digits(time)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, undefined), type !== TIME_TYPES.Seconds && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_wuilt_quilt__WEBPACK_IMPORTED_MODULE_1__.Text, {
        color: "grey",
        fontSize: "xl",
        fontWeight: "bold",
        children: " : "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_wuilt_quilt__WEBPACK_IMPORTED_MODULE_1__.Text, {
      color: "grey",
      children: TIME_DISPLAY[`${type}`]
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 5
  }, undefined);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CountDownDisplay);

/***/ }),

/***/ "./src/app/components/DiscountBanner/TwoYearsOfferBanner.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wuilt_quilt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("webpack/sharing/consume/default/@wuilt/quilt/@wuilt/quilt?e0d6");
/* harmony import */ var _wuilt_quilt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wuilt_quilt__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("webpack/sharing/consume/default/react-intl/react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("webpack/sharing/consume/default/styled-components/styled-components?6dc1");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _discount_gif__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/app/components/DiscountBanner/discount.gif");
/* harmony import */ var _useCountDown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/app/components/DiscountBanner/useCountDown.tsx");
/* harmony import */ var _CountDownDisplay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/app/components/DiscountBanner/CountDownDisplay.tsx");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("webpack/sharing/consume/default/@apollo/client/@apollo/client?c775");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _apollo_initApollo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/app/apollo/initApollo.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("webpack/sharing/consume/default/react/react?c222");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/generated/graphql.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("../../node_modules/react/jsx-dev-runtime.js");
var _jsxFileName = "/home/runner/work/wuilt-client/wuilt-client/apps/app-shell/src/app/components/DiscountBanner/TwoYearsOfferBanner.tsx";
/**
 * Convert the import of the DiscountBanner in the app.tsx file when disabling this file
 */











const endDate = new Date("2024-06-16T00:00:00").getTime() / 1000;
const TwoYearsOfferBanner = () => {
  const {
    data
  } = (0,_generated_graphql__WEBPACK_IMPORTED_MODULE_9__.useListStoresQuery)();
  const [showBanner, setShowBanner] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(false);
  const [days, hours, minutes, seconds] = (0,_useCountDown__WEBPACK_IMPORTED_MODULE_4__.useCountdown)(endDate);
  (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(() => {
    var _data$stores;
    if (!data) return;
    const hasSubscribedStore = data == null || (_data$stores = data.stores) == null ? void 0 : _data$stores.some(store => {
      var _store$activeSubscrip;
      return store == null || (_store$activeSubscrip = store.activeSubscription) == null ? void 0 : _store$activeSubscrip.active;
    });
    fetch(`https://api.wuilt.com/`, {
      credentials: "include",
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }).then(sites => sites == null ? void 0 : sites.json()).then(sites => {
      const hasSubscribedSite = sites == null ? void 0 : sites.some(site => (site == null ? void 0 : site.plan_id) !== 1);
      if (!hasSubscribedStore && !hasSubscribedSite && data) setShowBanner(true);
    });
  }, [data]);
  const isReady = days + hours + minutes + seconds > 0;
  if (!isReady || !showBanner || window.parent !== window) {
    return null;
  }
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_wuilt_quilt__WEBPACK_IMPORTED_MODULE_0__.Stack, {
    mt: "75px",
    largeMobile: {
      mt: "160px"
    },
    bgColor: "transparent",
    className: "ui",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(StyledStack, {
      direction: "row",
      justify: "between",
      width: "100%",
      p: "10px",
      position: "fixed",
      bottom: "0px",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_wuilt_quilt__WEBPACK_IMPORTED_MODULE_0__.Stack, {
        direction: "row",
        align: "center",
        justify: "around",
        flex: "1",
        tablet: {
          direction: "column"
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_wuilt_quilt__WEBPACK_IMPORTED_MODULE_0__.Stack, {
          direction: "row",
          align: "center",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_wuilt_quilt__WEBPACK_IMPORTED_MODULE_0__.Stack, {
            borderRadius: "10px",
            p: "6px",
            bgColor: "grey",
            align: "center",
            justify: "center",
            flexShrink: "0",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("img", {
              style: {
                width: "36px",
                height: "36px"
              },
              src: _discount_gif__WEBPACK_IMPORTED_MODULE_3__,
              alt: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_wuilt_quilt__WEBPACK_IMPORTED_MODULE_0__.Text, {
            color: "white",
            fontSize: "md",
            tablet: {
              align: "center"
            },
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
              defaultMessage: "Limited time offer just for you - Buy one year and get 2 years ",
              id: "Z1L61b"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 98,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_wuilt_quilt__WEBPACK_IMPORTED_MODULE_0__.Stack, {
          spacing: "none",
          direction: "row",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_CountDownDisplay__WEBPACK_IMPORTED_MODULE_5__["default"], {
            time: days,
            type: _CountDownDisplay__WEBPACK_IMPORTED_MODULE_5__.TIME_TYPES.Days
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_CountDownDisplay__WEBPACK_IMPORTED_MODULE_5__["default"], {
            time: hours,
            type: _CountDownDisplay__WEBPACK_IMPORTED_MODULE_5__.TIME_TYPES.Hours
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_CountDownDisplay__WEBPACK_IMPORTED_MODULE_5__["default"], {
            time: minutes,
            type: _CountDownDisplay__WEBPACK_IMPORTED_MODULE_5__.TIME_TYPES.Minutes
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_CountDownDisplay__WEBPACK_IMPORTED_MODULE_5__["default"], {
            time: seconds,
            type: _CountDownDisplay__WEBPACK_IMPORTED_MODULE_5__.TIME_TYPES.Seconds
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_wuilt_quilt__WEBPACK_IMPORTED_MODULE_0__.Stack, {
        onClick: () => setShowBanner(false),
        cursor: "pointer",
        maxHeight: "16px",
        flex: "0",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_wuilt_quilt__WEBPACK_IMPORTED_MODULE_0__.CloseIcon, {
          color: "white"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 50,
    columnNumber: 5
  }, undefined);
};
const DiscountBannerProvider = () => {
  const apolloClient = (0,_apollo_initApollo__WEBPACK_IMPORTED_MODULE_7__["default"])();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_apollo_client__WEBPACK_IMPORTED_MODULE_6__.ApolloProvider, {
    client: apolloClient,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(TwoYearsOfferBanner, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 127,
    columnNumber: 5
  }, undefined);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DiscountBannerProvider);
const StyledStack = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_wuilt_quilt__WEBPACK_IMPORTED_MODULE_0__.Stack).withConfig({
  displayName: "TwoYearsOfferBanner__StyledStack",
  componentId: "sc-11pjt3d-0"
})(["background:linear-gradient(72deg,#ff2c77 0%,#6723a5 100%),linear-gradient(312deg,#ff1c85 0%,#fdae05 73.73%),#d9d9d9;z-index:1000;"]);

/***/ }),

/***/ "./src/app/components/DiscountBanner/useCountDown.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useCountdown: () => (/* binding */ useCountdown)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("webpack/sharing/consume/default/react/react?c222");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useCountdown = expirationDate => {
  const countDownDate = new Date(expirationDate).getTime();
  const [countDown, setCountDown] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(countDownDate - new Date().getTime() / 1000);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate - new Date().getTime() / 1000);
    }, 1000);
    return () => clearInterval(interval);
  }, [countDownDate]);
  return getReturnValues(countDown);
};
const getReturnValues = countDown => {
  const days = Math.floor(countDown / (60 * 60 * 24));
  const hours = Math.floor(countDown % (60 * 60 * 24) / (60 * 60));
  const minutes = Math.floor(countDown % (60 * 60) / 60);
  const seconds = Math.floor(countDown % 60);
  return [days, hours, minutes, seconds];
};


/***/ }),

/***/ "./src/app/gameball.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GameballButton: () => (/* binding */ GameballButton),
/* harmony export */   setupGameBall: () => (/* binding */ setupGameBall)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("webpack/sharing/consume/default/react/react?c222");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wuilt_quilt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("webpack/sharing/consume/default/@wuilt/quilt/@wuilt/quilt?e0d6");
/* harmony import */ var _wuilt_quilt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wuilt_quilt__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wuilt_app_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("webpack/sharing/consume/default/@wuilt/app-core/@wuilt/app-core");
/* harmony import */ var _wuilt_app_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wuilt_app_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("webpack/sharing/consume/default/react-intl/react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../node_modules/react/jsx-dev-runtime.js");
var _jsxFileName = "/home/runner/work/wuilt-client/wuilt-client/apps/app-shell/src/app/gameball.tsx";





const GAMEBALL_API_KEY = ({"NX_FIRSTPROMOTER_ID":"vawjc2pq","NX_POSTHOG_TOKEN":"phc_dsvODN6jTLz7LOFzwmciKdwxfGGeHHge6rs8TRpu901","NX_HUBSPOT_PORTAL_ID":"25457140","NX_SEGMENT_WRITE_KEY":"WpSLNy7bllvPEh9wbnD6hUkSfliTlKIA","NX_POSTHOG_API_HOST":"https://analytics.wuilt.com","NX_ACCOUNTS_API_ENDPOINT":"https://accounts.wuilt.com","NX_SENTRY_DSN":"https://75ca38d1a52b8250988a822ac8153872@o4505821768384512.ingest.sentry.io/4505822481219584","NX_AMPLITUDE_API_KEY":"2a2cd80b0f15e8a2d51fac4b815d0d92","NX_SENTRY_AUTH_TOKEN":"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","NX_GRAPHQL_URI":"https://graphql.wuilt.com","NX_HELP_CENTER_URL":"https://help.wuilt.com/","NX_CLI_SET":"true","NX_LOAD_DOT_ENV_FILES":"true","NX_WORKSPACE_ROOT":"/home/runner/work/wuilt-client/wuilt-client","NX_TERMINAL_OUTPUT_PATH":"/home/runner/work/wuilt-client/wuilt-client/node_modules/.cache/nx/terminalOutputs/9276034470645146010","NX_STREAM_OUTPUT":"true","NX_TASK_TARGET_PROJECT":"app-shell","NX_TASK_TARGET_TARGET":"build","NX_TASK_TARGET_CONFIGURATION":"production","NX_TASK_HASH":"9276034470645146010"}).REACT_APP_GAMEBALL_API_KEY || "dcbc8508f1a54f17b5fc3f0edf0bfb43";
const GameballButton = () => {
  var _auth$user;
  const auth = (0,_wuilt_app_core__WEBPACK_IMPORTED_MODULE_2__.useAuth)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setupGameBall(auth.user, "en");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth == null || (_auth$user = auth.user) == null ? void 0 : _auth$user.id]);
  const isMobile = _wuilt_quilt__WEBPACK_IMPORTED_MODULE_1__.useMediaQuery.isMobile();
  const toggleGameBall = () => {
    var _GbSdk;
    if (typeof GbSdk === "undefined") return;
    (_GbSdk = GbSdk) == null || _GbSdk.toggle == null || _GbSdk.toggle();
  };
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_wuilt_quilt__WEBPACK_IMPORTED_MODULE_1__.Box, {
    backgroundColor: "lightGreen",
    border: "1px solid #99F6E0",
    borderRadius: "4px",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_wuilt_quilt__WEBPACK_IMPORTED_MODULE_1__.Button, {
      plain: true,
      prefixIcon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_wuilt_quilt__WEBPACK_IMPORTED_MODULE_1__.TrophyIcon, {
        size: "xl"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 21
      }, undefined),
      color: "primary",
      squared: true,
      onClick: toggleGameBall,
      size: "small",
      children: !isMobile && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
        defaultMessage: "Rewards",
        id: "y0EYpw"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 23
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 5
  }, undefined);
};
function setupGameBall(user, localeCode) {
  if (document.querySelector(`[id^="gameball-constScript"], [id^="gameball-dynamicScript"]`) !== null || !GAMEBALL_API_KEY || !(user != null && user.id) || !localeCode) {
    return;
  }
  const value = `
    <script
        id="gameball-constScript"
        defer
        src="https://assets.gameball.co/widget/js/gameball-init.min.js"
    ></script>
    <script id="gameball-dynamicScript">
        window.GbLoadInit = function () {
            GbSdk.init({
              APIKey: '${GAMEBALL_API_KEY}',
              lang: '${localeCode}',
              platform: "wuilt",
              playerUniqueId:'${user == null ? void 0 : user.id}',
              platform: "wuilt",
              playerAttributes: {
                displayName: '${user == null ? void 0 : user.name}',
                email: '${user == null ? void 0 : user.email}',
              },
          });
      };
  </script>
`;
  const parsedHTML = document.createRange().createContextualFragment(value);
  document.body.appendChild(parsedHTML);
}

/***/ }),

/***/ "./src/app/help-center-button.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wuilt_quilt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("webpack/sharing/consume/default/@wuilt/quilt/@wuilt/quilt?e0d6");
/* harmony import */ var _wuilt_quilt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wuilt_quilt__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("webpack/sharing/consume/default/react-intl/react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/react/jsx-dev-runtime.js");
var _jsxFileName = "/home/runner/work/wuilt-client/wuilt-client/apps/app-shell/src/app/help-center-button.tsx";



const {
  NX_HELP_CENTER_URL
} = ({"NX_HELP_CENTER_URL":"https://help.wuilt.com/"});
const HelpCenterButton = ({
  padding
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_wuilt_quilt__WEBPACK_IMPORTED_MODULE_0__.Button, {
    plain: true,
    prefixIcon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_wuilt_quilt__WEBPACK_IMPORTED_MODULE_0__.QuestionMarkIcon, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 19
    }, undefined),
    href: NX_HELP_CENTER_URL,
    external: true,
    padding: padding,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
      defaultMessage: "Help Center",
      id: "HtSDyc"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, undefined);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HelpCenterButton);

/***/ }),

/***/ "./src/app/main-container.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnalyticsContainer: () => (/* binding */ AnalyticsContainer),
/* harmony export */   ContextContainer: () => (/* binding */ ContextContainer),
/* harmony export */   ShellContainer: () => (/* binding */ ShellContainer),
/* harmony export */   WithNavigationBar: () => (/* binding */ WithNavigationBar)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("webpack/sharing/consume/default/react/react?c222");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("webpack/sharing/consume/default/react-router-dom/react-router-dom?23b0");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wuilt_quilt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("webpack/sharing/consume/default/@wuilt/quilt/@wuilt/quilt?e0d6");
/* harmony import */ var _wuilt_quilt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wuilt_quilt__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("webpack/sharing/consume/default/react-intl/react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wuilt_app_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("webpack/sharing/consume/default/@wuilt/app-core/@wuilt/app-core");
/* harmony import */ var _wuilt_app_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wuilt_app_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _app_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/app/app-navigation.tsx");
/* harmony import */ var _translations_en_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/translations/en.json");
/* harmony import */ var _translations_ar_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/translations/ar.json");
/* harmony import */ var _translations_fr_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/translations/fr.json");
/* harmony import */ var _translations_tr_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/translations/tr.json");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("../../node_modules/react/jsx-dev-runtime.js");
var _jsxFileName = "/home/runner/work/wuilt-client/wuilt-client/apps/app-shell/src/app/main-container.tsx";












const {
  NX_HUBSPOT_PORTAL_ID,
  NX_SEGMENT_WRITE_KEY,
  NX_AMPLITUDE_API_KEY,
  NX_POSTHOG_TOKEN,
  NX_POSTHOG_API_HOST,
  NX_ACCOUNTS_API_ENDPOINT,
  NX_SENTRY_DSN
} = ({"NX_POSTHOG_TOKEN":"phc_dsvODN6jTLz7LOFzwmciKdwxfGGeHHge6rs8TRpu901","NX_HUBSPOT_PORTAL_ID":"25457140","NX_SEGMENT_WRITE_KEY":"WpSLNy7bllvPEh9wbnD6hUkSfliTlKIA","NX_POSTHOG_API_HOST":"https://analytics.wuilt.com","NX_ACCOUNTS_API_ENDPOINT":"https://accounts.wuilt.com","NX_SENTRY_DSN":"https://75ca38d1a52b8250988a822ac8153872@o4505821768384512.ingest.sentry.io/4505822481219584","NX_AMPLITUDE_API_KEY":"2a2cd80b0f15e8a2d51fac4b815d0d92"});
const messagesMap = {
  en: _translations_en_json__WEBPACK_IMPORTED_MODULE_6__,
  ar: _translations_ar_json__WEBPACK_IMPORTED_MODULE_7__,
  fr: _translations_fr_json__WEBPACK_IMPORTED_MODULE_8__,
  tr: _translations_tr_json__WEBPACK_IMPORTED_MODULE_9__
};
const analyticsConfig = {
  posthog: {
    token: NX_POSTHOG_TOKEN,
    apiHost: NX_POSTHOG_API_HOST
  },
  hubspot: {
    portalId: NX_HUBSPOT_PORTAL_ID
  },
  segment: {
    writeKey: NX_SEGMENT_WRITE_KEY
  },
  amplitude: {
    apiKey: NX_AMPLITUDE_API_KEY
  },
  sentry: {
    dsn: NX_SENTRY_DSN
  }
};
const AnalyticsContainer = ({
  children
}) => {
  const {
    user
  } = (0,_wuilt_app_core__WEBPACK_IMPORTED_MODULE_4__.useAuth)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_wuilt_app_core__WEBPACK_IMPORTED_MODULE_4__.TrackingProvider, {
    config: analyticsConfig,
    user: user ? {
      id: user.decodedId,
      name: user.name,
      email: user.email,
      attributes: {
        phone: user.phone
      }
    } : undefined,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 58,
    columnNumber: 5
  }, undefined);
};
const ContextContainer = ({
  children,
  routes
}) => {
  var _routes$find;
  const {
    locale
  } = (0,_wuilt_app_core__WEBPACK_IMPORTED_MODULE_4__.useLocale)();
  const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useLocation)();
  const messages = messagesMap[locale == null ? void 0 : locale.code] || messagesMap.en;
  if (((_routes$find = routes.find(route => route.path === location.pathname)) == null ? void 0 : _routes$find.type) === "frame") {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(react_intl__WEBPACK_IMPORTED_MODULE_3__.IntlProvider, {
      locale: locale == null ? void 0 : locale.code,
      messages: messages,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_wuilt_quilt__WEBPACK_IMPORTED_MODULE_2__.QuiltProvider, {
        dir: (locale == null ? void 0 : locale.dir) || "ltr",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_wuilt_app_core__WEBPACK_IMPORTED_MODULE_4__.AuthProvider, {
          baseEndpoint: NX_ACCOUNTS_API_ENDPOINT,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(AnalyticsContainer, {
            children: children
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 7
    }, undefined);
  }
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(react_intl__WEBPACK_IMPORTED_MODULE_3__.IntlProvider, {
    locale: locale == null ? void 0 : locale.code,
    messages: messages,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_wuilt_quilt__WEBPACK_IMPORTED_MODULE_2__.QuiltProvider, {
      dir: (locale == null ? void 0 : locale.dir) || "ltr",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_wuilt_app_core__WEBPACK_IMPORTED_MODULE_4__.AuthProvider, {
        baseEndpoint: NX_ACCOUNTS_API_ENDPOINT,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_wuilt_app_core__WEBPACK_IMPORTED_MODULE_4__.ChatSupportProvider, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(AnalyticsContainer, {
            children: children
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 106,
    columnNumber: 5
  }, undefined);
};
const WithNavigationBar = ({
  children
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_app_navigation__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_wuilt_quilt__WEBPACK_IMPORTED_MODULE_2__.Box, {
      minHeight: "100vh",
      bg: {
        cloud: "light"
      },
      pt: "50px",
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};
const ShellContainer = ({
  children
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(WithNavigationBar, {
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 130,
    columnNumber: 10
  }, undefined);
};

/***/ }),

/***/ "./src/app/screens/Errors/C500.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C500: () => (/* binding */ C500)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/react/jsx-dev-runtime.js");
var _jsxFileName = "/home/runner/work/wuilt-client/wuilt-client/apps/app-shell/src/app/screens/Errors/C500.tsx";

const C500 = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
    width: "546",
    height: "182",
    viewBox: "0 0 546 182",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("defs", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
        id: "p2pw08vmva",
        d: "M0 179.922L197.418 179.922 197.418 0 0 0z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 5,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("g", {
      fill: "none",
      fillRule: "evenodd",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("g", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("g", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
            fill: "#5F738C",
            fillRule: "nonzero",
            d: "M75.19 175.77c14.133 0 26.541-2.465 37.224-7.396 10.683-4.93 18.9-11.915 24.652-20.954 5.752-9.04 8.628-19.557 8.628-31.555 0-10.19-2.752-19.228-8.258-27.117-5.506-7.889-13.312-14.052-23.42-18.49-10.107-4.437-21.817-6.655-35.129-6.655h-15.53V37.225h74.695V.986H21.94v98.609c9.697-.658 25.474-.986 47.333-.986 9.367 0 16.393 1.766 21.077 5.3 4.684 3.533 7.026 8.67 7.026 15.408 0 6.738-2.383 12.038-7.149 15.9s-11.422 5.793-19.968 5.793c-15.12 0-30.651-6.41-46.593-19.228l-16.763 32.54c9.532 6.41 20.42 11.587 32.664 15.531 12.244 3.945 24.118 5.917 35.622 5.917zM458.037 174.044c24.488 0 43.347-7.6 56.577-22.803 13.23-15.202 19.845-36.937 19.845-65.205s-6.615-49.962-19.845-65.082c-13.23-15.12-32.089-22.68-56.577-22.68-24.816 0-43.84 7.56-57.07 22.68-13.23 15.12-19.844 36.814-19.844 65.082 0 28.268 6.615 50.003 19.845 65.205 13.23 15.202 32.253 22.803 57.07 22.803zm0-33.527c-10.847 0-18.653-4.232-23.42-12.695-4.765-8.464-7.148-22.393-7.148-41.786 0-19.229 2.383-33.075 7.149-41.539 4.766-8.464 12.572-12.696 23.42-12.696 10.518 0 18.2 4.232 23.05 12.696 4.847 8.464 7.272 22.31 7.272 41.54 0 19.228-2.425 33.115-7.273 41.661s-12.531 12.82-23.05 12.82z",
            transform: "translate(-453 -379) translate(453 381)"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 10,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("g", {
            transform: "translate(-453 -379) translate(453 381) translate(162.704)",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
              fill: "#1A1A1A",
              d: "M124.23 139.045c1.266-1.5 1.899-3.6 1.899-6.3v-10.667h-16.813v10.667c0 2.7.684 4.8 2.053 6.3 1.369 1.498 3.538 2.248 6.508 2.248s5.088-.75 6.354-2.248zm-20.57 9.033c-2.79-3.316-4.184-8.051-4.184-14.206v-11.794H61.63v-11.76h74.416v24.323c0 5.606-1.472 10.077-4.416 13.41-2.945 3.335-7.503 5.001-13.675 5.001-6.741 0-11.506-1.659-14.295-4.974z"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 17,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("mask", {
              id: "4l8gu26g8b",
              fill: "#fff",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("use", {
                xlinkHref: "#p2pw08vmva"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 22,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 21,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
              fill: "#5F738C",
              d: "M54.929 26.975h123.998v-8.902H54.93v8.902zm-36.71 134.874h160.708V45.048H18.22v116.801zm4.477-143.988c2.488 0 4.504 2 4.504 4.469 0 2.467-2.016 4.468-4.504 4.468-2.487 0-4.504-2-4.504-4.468s2.017-4.469 4.504-4.469zm18.491 0c2.488 0 4.504 2 4.504 4.469 0 2.467-2.016 4.468-4.504 4.468-2.487 0-4.504-2-4.504-4.468s2.017-4.469 4.504-4.469zM9.181 0C4.14 0 0 3.919 0 8.92v162.033c0 5 4.14 8.97 9.18 8.97h178.998c5.044 0 9.24-3.97 9.24-8.97V8.92c0-5.001-4.196-8.92-9.24-8.92H9.18z",
              mask: "url(#4l8gu26g8b)"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
              fill: "#1A1A1A",
              d: "M77.176 86.024L65.856 74.791 77.173 63.562 69.625 56.084 58.306 67.311 46.989 56.084 39.443 63.562 50.763 74.796 39.443 86.024 46.989 93.509 58.306 82.281 69.629 93.509zM158.528 86.024L147.208 74.791 158.526 63.562 150.977 56.084 139.658 67.311 128.342 56.084 120.796 63.562 132.115 74.796 120.796 86.024 128.342 93.509 139.658 82.281 150.981 93.509z",
              mask: "url(#4l8gu26g8b)"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 29,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./src/app/screens/Errors/bare-error-boundary.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BareErrorBoundary)
/* harmony export */ });
/* harmony import */ var _error_boundary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/app/screens/Errors/error-boundary.tsx");
/* harmony import */ var _unhandled_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/app/screens/Errors/unhandled-error.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/react/jsx-dev-runtime.js");
var _jsxFileName = "/home/runner/work/wuilt-client/wuilt-client/apps/app-shell/src/app/screens/Errors/bare-error-boundary.tsx";



function BareErrorBoundary({
  children
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_error_boundary__WEBPACK_IMPORTED_MODULE_0__.ErrorBoundary, {
    children: children,
    component: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_unhandled_error__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 56
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 10
  }, this);
}

/***/ }),

/***/ "./src/app/screens/Errors/error-boundary.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ErrorBoundary: () => (/* binding */ ErrorBoundary)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("webpack/sharing/consume/default/react/react?c222");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sentry_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/@sentry/core/esm/exports.js");


class ErrorBoundary extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      eventId: ""
    };
  }
  static getDerivedStateFromError(error) {
    return {
      hasError: true
    };
  }
  componentDidCatch(error, errorInfo) {
    _sentry_browser__WEBPACK_IMPORTED_MODULE_1__.withScope(scope => {
      scope.setExtras(errorInfo);
      const eventId = _sentry_browser__WEBPACK_IMPORTED_MODULE_1__.captureException(error);
      this.setState({
        eventId
      });
    });
  }
  render() {
    if (this.state.hasError) {
      return this.props.component;
    }
    return this.props.children;
  }
}

/***/ }),

/***/ "./src/app/screens/Errors/shell-error-boundary.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ShellErrorBoundary)
/* harmony export */ });
/* harmony import */ var _main_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/app/main-container.tsx");
/* harmony import */ var _error_boundary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/app/screens/Errors/error-boundary.tsx");
/* harmony import */ var _unhandled_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/app/screens/Errors/unhandled-error.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/react/jsx-dev-runtime.js");
var _jsxFileName = "/home/runner/work/wuilt-client/wuilt-client/apps/app-shell/src/app/screens/Errors/shell-error-boundary.tsx";




function ShellErrorBoundary({
  children
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_error_boundary__WEBPACK_IMPORTED_MODULE_1__.ErrorBoundary, {
    children: children,
    component: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_main_container__WEBPACK_IMPORTED_MODULE_0__.WithNavigationBar, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_unhandled_error__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 47
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 18
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./src/app/screens/Errors/unhandled-error.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UnhandledError)
/* harmony export */ });
/* harmony import */ var _Error_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/app/screens/Errors/Error.module.scss");
/* harmony import */ var _C500__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/app/screens/Errors/C500.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/react/jsx-dev-runtime.js");
var _jsxFileName = "/home/runner/work/wuilt-client/wuilt-client/apps/app-shell/src/app/screens/Errors/unhandled-error.tsx";
/* eslint-disable formatjs/no-literal-string-in-jsx */



async function handleHardReload() {
  const url = window.location.href;
  await fetch(url, {
    headers: {
      Pragma: "no-cache",
      Expires: "-1",
      "Cache-Control": "no-cache"
    }
  });
  // eslint-disable-next-line no-self-assign
  window.location.href = url;
  window.location.reload();
}
function UnhandledError() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: _Error_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].section,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: _Error_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].wrapper,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h2", {
        className: _Error_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].heading,
        children: "Something went wrong!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_C500__WEBPACK_IMPORTED_MODULE_1__.C500, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
        className: _Error_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].text,
        children: "Make sure you have good internet connection and press reload"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: _Error_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"]["buttons-wrapper"],
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
          title: "Reload the page",
          className: _Error_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].button,
          onClick: handleHardReload,
          children: "Reload"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
          title: "Go to homepage",
          className: _Error_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].button,
          href: "/",
          children: "Homepage"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./src/app/shell-controller.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wuilt_app_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("webpack/sharing/consume/default/@wuilt/app-core/@wuilt/app-core");
/* harmony import */ var _wuilt_app_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wuilt_app_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("webpack/sharing/consume/default/react/react?c222");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("webpack/sharing/consume/default/react-router-dom/react-router-dom?23b0");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/react/jsx-dev-runtime.js");
var _jsxFileName = "/home/runner/work/wuilt-client/wuilt-client/apps/app-shell/src/app/shell-controller.tsx";





const ShellController = ({
  children
}) => {
  var _user$meta;
  const {
    user
  } = (0,_wuilt_app_core__WEBPACK_IMPORTED_MODULE_0__.useAuth)();
  const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useLocation)();
  if (user != null && (_user$meta = user.meta) != null && _user$meta.shouldFillQuestionnaire && !location.pathname.includes("welcome")) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Navigate, {
      to: "/welcome",
      replace: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 12
    }, undefined);
  }
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: children
  }, void 0, false);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShellController);

/***/ }),

/***/ "./src/app/use-gravatar.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useGravatar: () => (/* binding */ useGravatar)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("webpack/sharing/consume/default/react/react?c222");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var hash_wasm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("webpack/sharing/consume/default/hash-wasm/hash-wasm");
/* harmony import */ var hash_wasm__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hash_wasm__WEBPACK_IMPORTED_MODULE_1__);


const generateGravatarUrl = async (email, size = 80) => {
  const emailHash = await (0,hash_wasm__WEBPACK_IMPORTED_MODULE_1__.md5)(email);
  return `https://www.gravatar.com/avatar/${emailHash}.jpg?s=${size}&d=404`;
};
const isImageExist = async url => {
  try {
    const response = await fetch(url);
    if (response.ok) {
      return url;
    }
    return null;
  } catch (error) {
    return null;
  }
};
const useGravatar = (email, size = 80) => {
  const [imageSrc, setImageSrc] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const fetchImage = async () => {
      const url = await generateGravatarUrl(email, size);
      const src = await isImageExist(url);
      setImageSrc(src);
    };
    if (email) fetchImage();
  }, [email, size]);
  return [imageSrc, setImageSrc];
};

/***/ }),

/***/ "./src/bootstrap.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("webpack/sharing/consume/default/react/react?c222");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/react-dom/client.js");
/* harmony import */ var _app_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/app/app.tsx");
/* harmony import */ var _app_screens_Errors_bare_error_boundary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/app/screens/Errors/bare-error-boundary.tsx");
/* harmony import */ var account_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("webpack/container/remote/account/routes");
/* harmony import */ var account_routes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(account_routes__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var billing_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("webpack/container/remote/billing/routes");
/* harmony import */ var billing_routes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(billing_routes__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var stores_admin_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("webpack/container/remote/stores-admin/routes");
/* harmony import */ var stores_admin_routes__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(stores_admin_routes__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var builder_routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("webpack/container/remote/builder/routes");
/* harmony import */ var builder_routes__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(builder_routes__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("webpack/sharing/consume/default/react-router-dom/react-router-dom?23b0");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../../node_modules/react/jsx-dev-runtime.js");
var _jsxFileName = "/home/runner/work/wuilt-client/wuilt-client/apps/app-shell/src/bootstrap.tsx";










const ShellScreens = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/* import() */ "src_app_screens_index_tsx").then(__webpack_require__.bind(__webpack_require__, "./src/app/screens/index.tsx")));
const root = react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot(document.getElementById("root"));
const routes = [{
  path: "/",
  element: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Navigate, {
    to: "sites"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 14
  }, undefined),
  type: "shell"
}, ...account_routes__WEBPACK_IMPORTED_MODULE_4___default()(), ...billing_routes__WEBPACK_IMPORTED_MODULE_5___default()(), ...builder_routes__WEBPACK_IMPORTED_MODULE_7___default()(), ...stores_admin_routes__WEBPACK_IMPORTED_MODULE_6___default()(), {
  path: "*",
  element: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(ShellScreens, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 14
  }, undefined),
  type: "bare"
}];
root.render( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_0__.StrictMode, {
  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_app_screens_Errors_bare_error_boundary__WEBPACK_IMPORTED_MODULE_3__["default"], {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_app_app__WEBPACK_IMPORTED_MODULE_2__["default"], {
      routes: routes
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 42,
  columnNumber: 3
}, undefined));

/***/ }),

/***/ "./src/generated/graphql.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AbandonedCheckoutSortByField: () => (/* binding */ AbandonedCheckoutSortByField),
/* harmony export */   ActiveFooter: () => (/* binding */ ActiveFooter),
/* harmony export */   BostaPackageSizes: () => (/* binding */ BostaPackageSizes),
/* harmony export */   BostaPackageTypes: () => (/* binding */ BostaPackageTypes),
/* harmony export */   BuyNowButtonDisplay: () => (/* binding */ BuyNowButtonDisplay),
/* harmony export */   CancelShipmentError: () => (/* binding */ CancelShipmentError),
/* harmony export */   CartStatusEnum: () => (/* binding */ CartStatusEnum),
/* harmony export */   CartStepEnum: () => (/* binding */ CartStepEnum),
/* harmony export */   CategoryType: () => (/* binding */ CategoryType),
/* harmony export */   CheckoutFieldOptions: () => (/* binding */ CheckoutFieldOptions),
/* harmony export */   CheckoutNotePlacement: () => (/* binding */ CheckoutNotePlacement),
/* harmony export */   CheckoutServiceErrorCodes: () => (/* binding */ CheckoutServiceErrorCodes),
/* harmony export */   CollectionProductsSortBy: () => (/* binding */ CollectionProductsSortBy),
/* harmony export */   CreateSubscriptionStatus: () => (/* binding */ CreateSubscriptionStatus),
/* harmony export */   CurrencyCode: () => (/* binding */ CurrencyCode),
/* harmony export */   CustomProductSnapshotCategoryType: () => (/* binding */ CustomProductSnapshotCategoryType),
/* harmony export */   CustomerIdentifier: () => (/* binding */ CustomerIdentifier),
/* harmony export */   CustomerSortByField: () => (/* binding */ CustomerSortByField),
/* harmony export */   DiscountAppliedOnType: () => (/* binding */ DiscountAppliedOnType),
/* harmony export */   DiscountItemsType: () => (/* binding */ DiscountItemsType),
/* harmony export */   DiscountSource: () => (/* binding */ DiscountSource),
/* harmony export */   DiscountStatus: () => (/* binding */ DiscountStatus),
/* harmony export */   DiscountType: () => (/* binding */ DiscountType),
/* harmony export */   DisplayAsEnum: () => (/* binding */ DisplayAsEnum),
/* harmony export */   DomainType: () => (/* binding */ DomainType),
/* harmony export */   EmailRecipientEnum: () => (/* binding */ EmailRecipientEnum),
/* harmony export */   EmailStatus: () => (/* binding */ EmailStatus),
/* harmony export */   ErrorCode: () => (/* binding */ ErrorCode),
/* harmony export */   FatooraConfigurationAction: () => (/* binding */ FatooraConfigurationAction),
/* harmony export */   FontTypeEnum: () => (/* binding */ FontTypeEnum),
/* harmony export */   FulfillStatusEnum: () => (/* binding */ FulfillStatusEnum),
/* harmony export */   GetAvailablePromotionCodesDocument: () => (/* binding */ GetAvailablePromotionCodesDocument),
/* harmony export */   HandleType: () => (/* binding */ HandleType),
/* harmony export */   ImageContentType: () => (/* binding */ ImageContentType),
/* harmony export */   IntegrationAuthType: () => (/* binding */ IntegrationAuthType),
/* harmony export */   IntegrationCategory: () => (/* binding */ IntegrationCategory),
/* harmony export */   IntegrationSortByField: () => (/* binding */ IntegrationSortByField),
/* harmony export */   IntegrationType: () => (/* binding */ IntegrationType),
/* harmony export */   InvoiceType: () => (/* binding */ InvoiceType),
/* harmony export */   LinkType: () => (/* binding */ LinkType),
/* harmony export */   ListStoresDocument: () => (/* binding */ ListStoresDocument),
/* harmony export */   Locale: () => (/* binding */ Locale),
/* harmony export */   LogoSize: () => (/* binding */ LogoSize),
/* harmony export */   MediaStatus: () => (/* binding */ MediaStatus),
/* harmony export */   MenuItemType: () => (/* binding */ MenuItemType),
/* harmony export */   NameInputOptions: () => (/* binding */ NameInputOptions),
/* harmony export */   NextActionType: () => (/* binding */ NextActionType),
/* harmony export */   OrderErrorEnum: () => (/* binding */ OrderErrorEnum),
/* harmony export */   OrderHistoryTypes: () => (/* binding */ OrderHistoryTypes),
/* harmony export */   OrderItemSourceType: () => (/* binding */ OrderItemSourceType),
/* harmony export */   OrderPaymentStatusEnum: () => (/* binding */ OrderPaymentStatusEnum),
/* harmony export */   OrderSortByField: () => (/* binding */ OrderSortByField),
/* harmony export */   OrderStatusEnum: () => (/* binding */ OrderStatusEnum),
/* harmony export */   PageSortByFields: () => (/* binding */ PageSortByFields),
/* harmony export */   PageStatusEnum: () => (/* binding */ PageStatusEnum),
/* harmony export */   PaymentCollectionMethod: () => (/* binding */ PaymentCollectionMethod),
/* harmony export */   PaymentIntentStatusEnum: () => (/* binding */ PaymentIntentStatusEnum),
/* harmony export */   PaymentMethodEnum: () => (/* binding */ PaymentMethodEnum),
/* harmony export */   PaymentProvider: () => (/* binding */ PaymentProvider),
/* harmony export */   PaymentSourceType: () => (/* binding */ PaymentSourceType),
/* harmony export */   PaymentStatusEnum: () => (/* binding */ PaymentStatusEnum),
/* harmony export */   PermissionAction: () => (/* binding */ PermissionAction),
/* harmony export */   PermissionResource: () => (/* binding */ PermissionResource),
/* harmony export */   PermissionRole: () => (/* binding */ PermissionRole),
/* harmony export */   PlanResourceType: () => (/* binding */ PlanResourceType),
/* harmony export */   PricingInterval: () => (/* binding */ PricingInterval),
/* harmony export */   ProductAttributeType: () => (/* binding */ ProductAttributeType),
/* harmony export */   ProductCollectionSortByField: () => (/* binding */ ProductCollectionSortByField),
/* harmony export */   ProductImageZoomBehavior: () => (/* binding */ ProductImageZoomBehavior),
/* harmony export */   ProductSnapshotStatus: () => (/* binding */ ProductSnapshotStatus),
/* harmony export */   ProductSnapshotType: () => (/* binding */ ProductSnapshotType),
/* harmony export */   ProductSortByField: () => (/* binding */ ProductSortByField),
/* harmony export */   ProductStatus: () => (/* binding */ ProductStatus),
/* harmony export */   ProductStatusFilter: () => (/* binding */ ProductStatusFilter),
/* harmony export */   ProductType: () => (/* binding */ ProductType),
/* harmony export */   PromoCodeStatusEnum: () => (/* binding */ PromoCodeStatusEnum),
/* harmony export */   PromoCodeTypeEnum: () => (/* binding */ PromoCodeTypeEnum),
/* harmony export */   PromoCodesSortByField: () => (/* binding */ PromoCodesSortByField),
/* harmony export */   ProviderName: () => (/* binding */ ProviderName),
/* harmony export */   QuestionnaireInfoFragmentDoc: () => (/* binding */ QuestionnaireInfoFragmentDoc),
/* harmony export */   RequestStatus: () => (/* binding */ RequestStatus),
/* harmony export */   RequestType: () => (/* binding */ RequestType),
/* harmony export */   ReviewStatus: () => (/* binding */ ReviewStatus),
/* harmony export */   ReviewsSortByField: () => (/* binding */ ReviewsSortByField),
/* harmony export */   SearchingMechanism: () => (/* binding */ SearchingMechanism),
/* harmony export */   SectionBackgroundTypeEnum: () => (/* binding */ SectionBackgroundTypeEnum),
/* harmony export */   SectionTypeEnum: () => (/* binding */ SectionTypeEnum),
/* harmony export */   ShipmentStatus: () => (/* binding */ ShipmentStatus),
/* harmony export */   ShippingErrors: () => (/* binding */ ShippingErrors),
/* harmony export */   ShippingProviders: () => (/* binding */ ShippingProviders),
/* harmony export */   ShippingStatus: () => (/* binding */ ShippingStatus),
/* harmony export */   ShippingZoneSortByField: () => (/* binding */ ShippingZoneSortByField),
/* harmony export */   SortOrder: () => (/* binding */ SortOrder),
/* harmony export */   SourceType: () => (/* binding */ SourceType),
/* harmony export */   StaticPageEnum: () => (/* binding */ StaticPageEnum),
/* harmony export */   StockError: () => (/* binding */ StockError),
/* harmony export */   StoreCitiesByField: () => (/* binding */ StoreCitiesByField),
/* harmony export */   StorePageTypeEnum: () => (/* binding */ StorePageTypeEnum),
/* harmony export */   StorePaymentMethods: () => (/* binding */ StorePaymentMethods),
/* harmony export */   StorePaymentProvider: () => (/* binding */ StorePaymentProvider),
/* harmony export */   StoreSortByField: () => (/* binding */ StoreSortByField),
/* harmony export */   SubscriptionStatus: () => (/* binding */ SubscriptionStatus),
/* harmony export */   TopSellingProductSortOptions: () => (/* binding */ TopSellingProductSortOptions),
/* harmony export */   UpdateUserQuestionnaireAnswersDocument: () => (/* binding */ UpdateUserQuestionnaireAnswersDocument),
/* harmony export */   UserAccessType: () => (/* binding */ UserAccessType),
/* harmony export */   UserQuestionnaireAnswersDocument: () => (/* binding */ UserQuestionnaireAnswersDocument),
/* harmony export */   useGetAvailablePromotionCodesLazyQuery: () => (/* binding */ useGetAvailablePromotionCodesLazyQuery),
/* harmony export */   useGetAvailablePromotionCodesQuery: () => (/* binding */ useGetAvailablePromotionCodesQuery),
/* harmony export */   useListStoresLazyQuery: () => (/* binding */ useListStoresLazyQuery),
/* harmony export */   useListStoresQuery: () => (/* binding */ useListStoresQuery),
/* harmony export */   useUpdateUserQuestionnaireAnswersMutation: () => (/* binding */ useUpdateUserQuestionnaireAnswersMutation),
/* harmony export */   useUserQuestionnaireAnswersLazyQuery: () => (/* binding */ useUserQuestionnaireAnswersLazyQuery),
/* harmony export */   useUserQuestionnaireAnswersQuery: () => (/* binding */ useUserQuestionnaireAnswersQuery)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("webpack/sharing/consume/default/@apollo/client/@apollo/client?c775");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);
let _ = t => t,
  _t,
  _t2,
  _t3,
  _t4,
  _t5;


const defaultOptions = {};
/** All built-in and custom scalars, mapped to their actual values */

let AbandonedCheckoutSortByField = /*#__PURE__*/function (AbandonedCheckoutSortByField) {
  AbandonedCheckoutSortByField["CheckoutSerial"] = "checkoutSerial";
  AbandonedCheckoutSortByField["CreatedAt"] = "createdAt";
  AbandonedCheckoutSortByField["Status"] = "status";
  AbandonedCheckoutSortByField["UpdatedAt"] = "updatedAt";
  return AbandonedCheckoutSortByField;
}({});
let ActiveFooter = /*#__PURE__*/function (ActiveFooter) {
  ActiveFooter["Custom"] = "CUSTOM";
  ActiveFooter["Splitted"] = "SPLITTED";
  return ActiveFooter;
}({});
let BostaPackageSizes = /*#__PURE__*/function (BostaPackageSizes) {
  BostaPackageSizes["HeavyBulky"] = "HeavyBulky";
  BostaPackageSizes["Large"] = "LARGE";
  BostaPackageSizes["LightBulky"] = "LightBulky";
  BostaPackageSizes["Medium"] = "MEDIUM";
  BostaPackageSizes["Small"] = "SMALL";
  return BostaPackageSizes;
}({});
let BostaPackageTypes = /*#__PURE__*/function (BostaPackageTypes) {
  BostaPackageTypes["Document"] = "Document";
  BostaPackageTypes["HeavyBulky"] = "HeavyBulky";
  BostaPackageTypes["LightBulky"] = "LightBulky";
  BostaPackageTypes["Parcel"] = "Parcel";
  return BostaPackageTypes;
}({});
let BuyNowButtonDisplay = /*#__PURE__*/function (BuyNowButtonDisplay) {
  BuyNowButtonDisplay["Always"] = "always";
  BuyNowButtonDisplay["None"] = "none";
  BuyNowButtonDisplay["OnHover"] = "onHover";
  return BuyNowButtonDisplay;
}({});
let CancelShipmentError = /*#__PURE__*/function (CancelShipmentError) {
  CancelShipmentError["OrderNotFound"] = "ORDER_NOT_FOUND";
  CancelShipmentError["OrderShipmentNotOngoing"] = "ORDER_SHIPMENT_NOT_ONGOING";
  CancelShipmentError["ProviderShipmentStillActive"] = "PROVIDER_SHIPMENT_STILL_ACTIVE";
  return CancelShipmentError;
}({});
let CartStatusEnum = /*#__PURE__*/function (CartStatusEnum) {
  CartStatusEnum["Abandoned"] = "ABANDONED";
  CartStatusEnum["Active"] = "ACTIVE";
  CartStatusEnum["CheckedOut"] = "CHECKED_OUT";
  CartStatusEnum["Expired"] = "EXPIRED";
  CartStatusEnum["Recovered"] = "RECOVERED";
  return CartStatusEnum;
}({});
let CartStepEnum = /*#__PURE__*/function (CartStepEnum) {
  CartStepEnum["Completed"] = "COMPLETED";
  CartStepEnum["Delivery"] = "DELIVERY";
  CartStepEnum["Information"] = "INFORMATION";
  CartStepEnum["Payment"] = "PAYMENT";
  CartStepEnum["Shopping"] = "SHOPPING";
  return CartStepEnum;
}({});
let CategoryType = /*#__PURE__*/function (CategoryType) {
  CategoryType["Multiple"] = "MULTIPLE";
  CategoryType["Single"] = "SINGLE";
  return CategoryType;
}({});
let CheckoutFieldOptions = /*#__PURE__*/function (CheckoutFieldOptions) {
  CheckoutFieldOptions["Inactive"] = "INACTIVE";
  CheckoutFieldOptions["Mandatory"] = "MANDATORY";
  CheckoutFieldOptions["Optional"] = "OPTIONAL";
  return CheckoutFieldOptions;
}({});
let CheckoutNotePlacement = /*#__PURE__*/function (CheckoutNotePlacement) {
  CheckoutNotePlacement["AfterPaymentMethods"] = "AFTER_PAYMENT_METHODS";
  CheckoutNotePlacement["BeforePaymentMethods"] = "BEFORE_PAYMENT_METHODS";
  return CheckoutNotePlacement;
}({});
let CheckoutServiceErrorCodes = /*#__PURE__*/function (CheckoutServiceErrorCodes) {
  CheckoutServiceErrorCodes["AddContactInfoFailed"] = "ADD_CONTACT_INFO_FAILED";
  CheckoutServiceErrorCodes["AddItemFailed"] = "ADD_ITEM_FAILED";
  CheckoutServiceErrorCodes["BadRequestError"] = "BAD_REQUEST_ERROR";
  CheckoutServiceErrorCodes["CalculationError"] = "CALCULATION_ERROR";
  CheckoutServiceErrorCodes["CartIsReserved"] = "CART_IS_RESERVED";
  CheckoutServiceErrorCodes["CategoryMaxQuantityExceeded"] = "CATEGORY_MAX_QUANTITY_EXCEEDED";
  CheckoutServiceErrorCodes["CategoryMaxSelectionExceeded"] = "CATEGORY_MAX_SELECTION_EXCEEDED";
  CheckoutServiceErrorCodes["ClearCartFailed"] = "CLEAR_CART_FAILED";
  CheckoutServiceErrorCodes["ClearContactInfoFailed"] = "CLEAR_CONTACT_INFO_FAILED";
  CheckoutServiceErrorCodes["Conflict"] = "CONFLICT";
  CheckoutServiceErrorCodes["CurrencyMismatch"] = "CURRENCY_MISMATCH";
  CheckoutServiceErrorCodes["DiscountAmountOffDataNotProvided"] = "DiscountAmountOffDataNotProvided";
  CheckoutServiceErrorCodes["DiscountBuyXGetYDataNotProvided"] = "DiscountBuyXGetYDataNotProvided";
  CheckoutServiceErrorCodes["DiscountCollectionsOrProductsNotProvided"] = "DiscountCollectionsOrProductsNotProvided";
  CheckoutServiceErrorCodes["DiscountItemsTypeNotProvided"] = "DiscountItemsTypeNotProvided";
  CheckoutServiceErrorCodes["DiscountScheduleStartDateNotProvided"] = "DiscountScheduleStartDateNotProvided";
  CheckoutServiceErrorCodes["EmailNotSentError"] = "EmailNotSentError";
  CheckoutServiceErrorCodes["FailedToGetItemsSnapshot"] = "FAILED_TO_GET_ITEMS_SNAPSHOT";
  CheckoutServiceErrorCodes["FailedToGetShippingSnapshot"] = "FAILED_TO_GET_SHIPPING_SNAPSHOT";
  CheckoutServiceErrorCodes["Forbidden"] = "FORBIDDEN";
  CheckoutServiceErrorCodes["InsufficientQuantity"] = "INSUFFICIENT_QUANTITY";
  CheckoutServiceErrorCodes["InternalServerError"] = "INTERNAL_SERVER_ERROR";
  CheckoutServiceErrorCodes["Invalid"] = "INVALID";
  CheckoutServiceErrorCodes["InvalidCheckoutNotes"] = "INVALID_CHECKOUT_NOTES";
  CheckoutServiceErrorCodes["InvalidCheckoutPostcode"] = "INVALID_CHECKOUT_POSTCODE";
  CheckoutServiceErrorCodes["InvalidCustomerIdentifier"] = "INVALID_CUSTOMER_IDENTIFIER";
  CheckoutServiceErrorCodes["InvalidCustomerName"] = "INVALID_CUSTOMER_NAME";
  CheckoutServiceErrorCodes["InvalidDiscount"] = "INVALID_DISCOUNT";
  CheckoutServiceErrorCodes["InvalidInput"] = "INVALID_INPUT";
  CheckoutServiceErrorCodes["InvalidSecondaryPhone"] = "INVALID_SECONDARY_PHONE";
  CheckoutServiceErrorCodes["InvalidShippingDetails"] = "INVALID_SHIPPING_DETAILS";
  CheckoutServiceErrorCodes["InvalidShippingRate"] = "INVALID_SHIPPING_RATE";
  CheckoutServiceErrorCodes["MaxQuantityExceeded"] = "MAX_QUANTITY_EXCEEDED";
  CheckoutServiceErrorCodes["MinQuantityNotMet"] = "MIN_QUANTITY_NOT_MET";
  CheckoutServiceErrorCodes["MaximumNumberOfBuyXGetYDiscountsReached"] = "MaximumNumberOfBuyXGetYDiscountsReached";
  CheckoutServiceErrorCodes["NotFound"] = "NOT_FOUND";
  CheckoutServiceErrorCodes["NoVariantsSelected"] = "NO_VARIANTS_SELECTED";
  CheckoutServiceErrorCodes["PaymentIntentCreationFailed"] = "PAYMENT_INTENT_CREATION_FAILED";
  CheckoutServiceErrorCodes["PriceChanged"] = "PRICE_CHANGED";
  CheckoutServiceErrorCodes["ProductNotAvailable"] = "PRODUCT_NOT_AVAILABLE";
  CheckoutServiceErrorCodes["PromoCodeNotValid"] = "PROMO_CODE_NOT_VALID";
  CheckoutServiceErrorCodes["PromoCodeUsageLimitReached"] = "PromoCodeUsageLimitReached";
  CheckoutServiceErrorCodes["ReplaceCartItemsFailed"] = "REPLACE_CART_ITEMS_FAILED";
  CheckoutServiceErrorCodes["RequiredCategoryMissing"] = "REQUIRED_CATEGORY_MISSING";
  CheckoutServiceErrorCodes["StockReservationFailed"] = "STOCK_RESERVATION_FAILED";
  CheckoutServiceErrorCodes["Unauthorized"] = "UNAUTHORIZED";
  CheckoutServiceErrorCodes["UnauthorizedAction"] = "UNAUTHORIZED_ACTION";
  CheckoutServiceErrorCodes["UpdateContactInfoFailed"] = "UPDATE_CONTACT_INFO_FAILED";
  CheckoutServiceErrorCodes["UpdateItemFailed"] = "UPDATE_ITEM_FAILED";
  return CheckoutServiceErrorCodes;
}({});
let CollectionProductsSortBy = /*#__PURE__*/function (CollectionProductsSortBy) {
  CollectionProductsSortBy["CreatedAt"] = "createdAt";
  CollectionProductsSortBy["Id"] = "id";
  CollectionProductsSortBy["Manual"] = "manual";
  CollectionProductsSortBy["Price"] = "price";
  CollectionProductsSortBy["Title"] = "title";
  CollectionProductsSortBy["UpdatedAt"] = "updatedAt";
  return CollectionProductsSortBy;
}({});
let CreateSubscriptionStatus = /*#__PURE__*/function (CreateSubscriptionStatus) {
  CreateSubscriptionStatus["Failed"] = "FAILED";
  CreateSubscriptionStatus["Pending"] = "PENDING";
  CreateSubscriptionStatus["Succeeded"] = "SUCCEEDED";
  return CreateSubscriptionStatus;
}({});
/** Currency codes. */
let CurrencyCode = /*#__PURE__*/function (CurrencyCode) {
  CurrencyCode["Adp"] = "ADP";
  CurrencyCode["Aed"] = "AED";
  CurrencyCode["Afn"] = "AFN";
  CurrencyCode["All"] = "ALL";
  CurrencyCode["Amd"] = "AMD";
  CurrencyCode["Ang"] = "ANG";
  CurrencyCode["Aoa"] = "AOA";
  CurrencyCode["Ara"] = "ARA";
  CurrencyCode["Ars"] = "ARS";
  CurrencyCode["Ats"] = "ATS";
  CurrencyCode["Aud"] = "AUD";
  CurrencyCode["Awg"] = "AWG";
  CurrencyCode["Azn"] = "AZN";
  CurrencyCode["Bam"] = "BAM";
  CurrencyCode["Bbd"] = "BBD";
  CurrencyCode["Bdt"] = "BDT";
  CurrencyCode["Bef"] = "BEF";
  CurrencyCode["Bgn"] = "BGN";
  CurrencyCode["Bhd"] = "BHD";
  CurrencyCode["Bif"] = "BIF";
  CurrencyCode["Bmd"] = "BMD";
  CurrencyCode["Bnd"] = "BND";
  CurrencyCode["Bob"] = "BOB";
  CurrencyCode["Bop"] = "BOP";
  CurrencyCode["Bov"] = "BOV";
  CurrencyCode["Brl"] = "BRL";
  CurrencyCode["Bsd"] = "BSD";
  CurrencyCode["Btn"] = "BTN";
  CurrencyCode["Buk"] = "BUK";
  CurrencyCode["Bwp"] = "BWP";
  CurrencyCode["Byn"] = "BYN";
  CurrencyCode["Bzd"] = "BZD";
  CurrencyCode["Cad"] = "CAD";
  CurrencyCode["Cdf"] = "CDF";
  CurrencyCode["Chf"] = "CHF";
  CurrencyCode["Clp"] = "CLP";
  CurrencyCode["Cny"] = "CNY";
  CurrencyCode["Cop"] = "COP";
  CurrencyCode["Crc"] = "CRC";
  CurrencyCode["Csk"] = "CSK";
  CurrencyCode["Cuc"] = "CUC";
  CurrencyCode["Cup"] = "CUP";
  CurrencyCode["Cve"] = "CVE";
  CurrencyCode["Cyp"] = "CYP";
  CurrencyCode["Czk"] = "CZK";
  CurrencyCode["Ddm"] = "DDM";
  CurrencyCode["Dem"] = "DEM";
  CurrencyCode["Djf"] = "DJF";
  CurrencyCode["Dkk"] = "DKK";
  CurrencyCode["Dop"] = "DOP";
  CurrencyCode["Dzd"] = "DZD";
  CurrencyCode["Eek"] = "EEK";
  CurrencyCode["Egp"] = "EGP";
  CurrencyCode["Ern"] = "ERN";
  CurrencyCode["Esp"] = "ESP";
  CurrencyCode["Etb"] = "ETB";
  CurrencyCode["Eur"] = "EUR";
  CurrencyCode["Fim"] = "FIM";
  CurrencyCode["Fjd"] = "FJD";
  CurrencyCode["Fkp"] = "FKP";
  CurrencyCode["Frf"] = "FRF";
  CurrencyCode["Gbp"] = "GBP";
  CurrencyCode["Gel"] = "GEL";
  CurrencyCode["Ghs"] = "GHS";
  CurrencyCode["Gip"] = "GIP";
  CurrencyCode["Gmd"] = "GMD";
  CurrencyCode["Gnf"] = "GNF";
  CurrencyCode["Gns"] = "GNS";
  CurrencyCode["Gqe"] = "GQE";
  CurrencyCode["Grd"] = "GRD";
  CurrencyCode["Gtq"] = "GTQ";
  CurrencyCode["Gwe"] = "GWE";
  CurrencyCode["Gwp"] = "GWP";
  CurrencyCode["Gyd"] = "GYD";
  CurrencyCode["Hkd"] = "HKD";
  CurrencyCode["Hnl"] = "HNL";
  CurrencyCode["Hrd"] = "HRD";
  CurrencyCode["Hrk"] = "HRK";
  CurrencyCode["Htg"] = "HTG";
  CurrencyCode["Huf"] = "HUF";
  CurrencyCode["Idr"] = "IDR";
  CurrencyCode["Iep"] = "IEP";
  CurrencyCode["Ils"] = "ILS";
  CurrencyCode["Inr"] = "INR";
  CurrencyCode["Iqd"] = "IQD";
  CurrencyCode["Irr"] = "IRR";
  CurrencyCode["Isk"] = "ISK";
  CurrencyCode["Itl"] = "ITL";
  CurrencyCode["Jep"] = "JEP";
  CurrencyCode["Jmd"] = "JMD";
  CurrencyCode["Jod"] = "JOD";
  CurrencyCode["Jpy"] = "JPY";
  CurrencyCode["Kes"] = "KES";
  CurrencyCode["Kgs"] = "KGS";
  CurrencyCode["Khr"] = "KHR";
  CurrencyCode["Kmf"] = "KMF";
  CurrencyCode["Kpw"] = "KPW";
  CurrencyCode["Krw"] = "KRW";
  CurrencyCode["Kwd"] = "KWD";
  CurrencyCode["Kyd"] = "KYD";
  CurrencyCode["Kzt"] = "KZT";
  CurrencyCode["Lak"] = "LAK";
  CurrencyCode["Lbp"] = "LBP";
  CurrencyCode["Lkr"] = "LKR";
  CurrencyCode["Lrd"] = "LRD";
  CurrencyCode["Lsl"] = "LSL";
  CurrencyCode["Ltl"] = "LTL";
  CurrencyCode["Ltt"] = "LTT";
  CurrencyCode["Luc"] = "LUC";
  CurrencyCode["Luf"] = "LUF";
  CurrencyCode["Lul"] = "LUL";
  CurrencyCode["Lvl"] = "LVL";
  CurrencyCode["Lvr"] = "LVR";
  CurrencyCode["Lyd"] = "LYD";
  CurrencyCode["Mad"] = "MAD";
  CurrencyCode["Maf"] = "MAF";
  CurrencyCode["Mdl"] = "MDL";
  CurrencyCode["Mga"] = "MGA";
  CurrencyCode["Mgf"] = "MGF";
  CurrencyCode["Mkd"] = "MKD";
  CurrencyCode["Mlf"] = "MLF";
  CurrencyCode["Mmk"] = "MMK";
  CurrencyCode["Mnt"] = "MNT";
  CurrencyCode["Mop"] = "MOP";
  CurrencyCode["Mro"] = "MRO";
  CurrencyCode["Mru"] = "MRU";
  CurrencyCode["Mtl"] = "MTL";
  CurrencyCode["Mtp"] = "MTP";
  CurrencyCode["Mur"] = "MUR";
  CurrencyCode["Mvr"] = "MVR";
  CurrencyCode["Mwk"] = "MWK";
  CurrencyCode["Mxn"] = "MXN";
  CurrencyCode["Myr"] = "MYR";
  CurrencyCode["Mze"] = "MZE";
  CurrencyCode["Mzn"] = "MZN";
  CurrencyCode["Nad"] = "NAD";
  CurrencyCode["Ngn"] = "NGN";
  CurrencyCode["Nio"] = "NIO";
  CurrencyCode["Nlg"] = "NLG";
  CurrencyCode["Nok"] = "NOK";
  CurrencyCode["Npr"] = "NPR";
  CurrencyCode["Nzd"] = "NZD";
  CurrencyCode["Omr"] = "OMR";
  CurrencyCode["Pab"] = "PAB";
  CurrencyCode["Pen"] = "PEN";
  CurrencyCode["Pgk"] = "PGK";
  CurrencyCode["Php"] = "PHP";
  CurrencyCode["Pkr"] = "PKR";
  CurrencyCode["Pln"] = "PLN";
  CurrencyCode["Pte"] = "PTE";
  CurrencyCode["Pyg"] = "PYG";
  CurrencyCode["Qar"] = "QAR";
  CurrencyCode["Rhd"] = "RHD";
  CurrencyCode["Ron"] = "RON";
  CurrencyCode["Rsd"] = "RSD";
  CurrencyCode["Rub"] = "RUB";
  CurrencyCode["Rwf"] = "RWF";
  CurrencyCode["Sar"] = "SAR";
  CurrencyCode["Sbd"] = "SBD";
  CurrencyCode["Scr"] = "SCR";
  CurrencyCode["Sdg"] = "SDG";
  CurrencyCode["Sek"] = "SEK";
  CurrencyCode["Sgd"] = "SGD";
  CurrencyCode["Shp"] = "SHP";
  CurrencyCode["Sit"] = "SIT";
  CurrencyCode["Skk"] = "SKK";
  CurrencyCode["Sll"] = "SLL";
  CurrencyCode["Sos"] = "SOS";
  CurrencyCode["Srd"] = "SRD";
  CurrencyCode["Srg"] = "SRG";
  CurrencyCode["Ssp"] = "SSP";
  CurrencyCode["Std"] = "STD";
  CurrencyCode["Sur"] = "SUR";
  CurrencyCode["Svc"] = "SVC";
  CurrencyCode["Syp"] = "SYP";
  CurrencyCode["Szl"] = "SZL";
  CurrencyCode["Thb"] = "THB";
  CurrencyCode["Tjr"] = "TJR";
  CurrencyCode["Tjs"] = "TJS";
  CurrencyCode["Tmt"] = "TMT";
  CurrencyCode["Tnd"] = "TND";
  CurrencyCode["Top"] = "TOP";
  CurrencyCode["Tpe"] = "TPE";
  CurrencyCode["Try"] = "TRY";
  CurrencyCode["Ttd"] = "TTD";
  CurrencyCode["Twd"] = "TWD";
  CurrencyCode["Tzs"] = "TZS";
  CurrencyCode["Uah"] = "UAH";
  CurrencyCode["Ugx"] = "UGX";
  CurrencyCode["Usd"] = "USD";
  CurrencyCode["Uyu"] = "UYU";
  CurrencyCode["Uzs"] = "UZS";
  CurrencyCode["Vef"] = "VEF";
  CurrencyCode["Vnd"] = "VND";
  CurrencyCode["Vuv"] = "VUV";
  CurrencyCode["Wst"] = "WST";
  CurrencyCode["Xaf"] = "XAF";
  CurrencyCode["Xcd"] = "XCD";
  CurrencyCode["Xeu"] = "XEU";
  CurrencyCode["Xfo"] = "XFO";
  CurrencyCode["Xof"] = "XOF";
  CurrencyCode["Xpf"] = "XPF";
  CurrencyCode["Ydd"] = "YDD";
  CurrencyCode["Yer"] = "YER";
  CurrencyCode["Zar"] = "ZAR";
  CurrencyCode["Zmw"] = "ZMW";
  return CurrencyCode;
}({});
let CustomProductSnapshotCategoryType = /*#__PURE__*/function (CustomProductSnapshotCategoryType) {
  CustomProductSnapshotCategoryType["Multiple"] = "MULTIPLE";
  CustomProductSnapshotCategoryType["Single"] = "SINGLE";
  return CustomProductSnapshotCategoryType;
}({});
let CustomerIdentifier = /*#__PURE__*/function (CustomerIdentifier) {
  CustomerIdentifier["Email"] = "EMAIL";
  CustomerIdentifier["EmailAndPhone"] = "EMAIL_AND_PHONE";
  CustomerIdentifier["Phone"] = "PHONE";
  return CustomerIdentifier;
}({});
let CustomerSortByField = /*#__PURE__*/function (CustomerSortByField) {
  CustomerSortByField["CreatedAt"] = "createdAt";
  CustomerSortByField["Id"] = "id";
  CustomerSortByField["Name"] = "name";
  CustomerSortByField["UpdatedAt"] = "updatedAt";
  return CustomerSortByField;
}({});
let DiscountAppliedOnType = /*#__PURE__*/function (DiscountAppliedOnType) {
  DiscountAppliedOnType["All"] = "ALL";
  DiscountAppliedOnType["AmountOff"] = "AMOUNT_OFF";
  DiscountAppliedOnType["BuyXGetY"] = "BUY_X_GET_Y";
  DiscountAppliedOnType["Shipping"] = "SHIPPING";
  return DiscountAppliedOnType;
}({});
let DiscountItemsType = /*#__PURE__*/function (DiscountItemsType) {
  DiscountItemsType["Collections"] = "COLLECTIONS";
  DiscountItemsType["Products"] = "PRODUCTS";
  return DiscountItemsType;
}({});
let DiscountSource = /*#__PURE__*/function (DiscountSource) {
  DiscountSource["AmountOff"] = "AMOUNT_OFF";
  DiscountSource["BuyXGetY"] = "BUY_X_GET_Y";
  DiscountSource["CustomDiscount"] = "CUSTOM_DISCOUNT";
  DiscountSource["Mixed"] = "MIXED";
  return DiscountSource;
}({});
let DiscountStatus = /*#__PURE__*/function (DiscountStatus) {
  DiscountStatus["Active"] = "ACTIVE";
  DiscountStatus["Draft"] = "DRAFT";
  DiscountStatus["Expired"] = "EXPIRED";
  DiscountStatus["Scheduled"] = "SCHEDULED";
  return DiscountStatus;
}({});
let DiscountType = /*#__PURE__*/function (DiscountType) {
  DiscountType["Automatic"] = "AUTOMATIC";
  DiscountType["Manual"] = "MANUAL";
  return DiscountType;
}({});
let DisplayAsEnum = /*#__PURE__*/function (DisplayAsEnum) {
  DisplayAsEnum["Grid"] = "Grid";
  DisplayAsEnum["Slider"] = "Slider";
  return DisplayAsEnum;
}({});
let EmailRecipientEnum = /*#__PURE__*/function (EmailRecipientEnum) {
  EmailRecipientEnum["All"] = "ALL";
  EmailRecipientEnum["None"] = "NONE";
  return EmailRecipientEnum;
}({});
let EmailStatus = /*#__PURE__*/function (EmailStatus) {
  EmailStatus["NotSent"] = "NOT_SENT";
  EmailStatus["Scheduled"] = "SCHEDULED";
  EmailStatus["Sent"] = "SENT";
  return EmailStatus;
}({});
let ErrorCode = /*#__PURE__*/function (ErrorCode) {
  ErrorCode["ActionLimitReached"] = "ACTION_LIMIT_REACHED";
  ErrorCode["BulkUploadOverwriteMustBeEnabled"] = "BULK_UPLOAD_OVERWRITE_MUST_BE_ENABLED";
  ErrorCode["CheckoutTimeout"] = "CHECKOUT_TIMEOUT";
  ErrorCode["CollectionNotFound"] = "COLLECTION_NOT_FOUND";
  ErrorCode["CurrencyChanged"] = "CURRENCY_CHANGED";
  ErrorCode["CustomerCreationError"] = "CUSTOMER_CREATION_ERROR";
  ErrorCode["DocumentSizeTooLarge"] = "DOCUMENT_SIZE_TOO_LARGE";
  ErrorCode["DuplicateSku"] = "DUPLICATE_SKU";
  ErrorCode["DuplicateVariants"] = "DUPLICATE_VARIANTS";
  ErrorCode["ExtraHeaders"] = "EXTRA_HEADERS";
  ErrorCode["InconsistentVariation"] = "INCONSISTENT_VARIATION";
  ErrorCode["InsufficientQuantity"] = "INSUFFICIENT_QUANTITY";
  ErrorCode["IntegratedItemsQuantityValidationError"] = "INTEGRATED_ITEMS_QUANTITY_VALIDATION_ERROR";
  ErrorCode["InvalidCustomerCheckoutData"] = "INVALID_CUSTOMER_CHECKOUT_DATA";
  ErrorCode["InvalidFieldValue"] = "INVALID_FIELD_VALUE";
  ErrorCode["InvalidFileExtension"] = "INVALID_FILE_EXTENSION";
  ErrorCode["InvalidHandle"] = "INVALID_HANDLE";
  ErrorCode["InvalidRecord"] = "INVALID_RECORD";
  ErrorCode["InvalidSlug"] = "INVALID_SLUG";
  ErrorCode["InvalidTranslationLocale"] = "INVALID_TRANSLATION_LOCALE";
  ErrorCode["MaxQuantityExceeded"] = "MAX_QUANTITY_EXCEEDED";
  ErrorCode["MinQuantityNotMet"] = "MIN_QUANTITY_NOT_MET";
  ErrorCode["MissingHeaders"] = "MISSING_HEADERS";
  ErrorCode["NoPaymentMethods"] = "NO_PAYMENT_METHODS";
  ErrorCode["OptionMustHaveValidValue"] = "OPTION_MUST_HAVE_VALID_VALUE";
  ErrorCode["OrderCanceledByCustomer"] = "ORDER_CANCELED_BY_CUSTOMER";
  ErrorCode["OrderRestorationFailed"] = "ORDER_RESTORATION_FAILED";
  ErrorCode["PaymentError"] = "PAYMENT_ERROR";
  ErrorCode["PlanLimitExceeded"] = "PLAN_LIMIT_EXCEEDED";
  ErrorCode["PriceCalculationError"] = "PRICE_CALCULATION_ERROR";
  ErrorCode["PriceChanged"] = "PRICE_CHANGED";
  ErrorCode["ProductNotActive"] = "PRODUCT_NOT_ACTIVE";
  ErrorCode["ProductNotAvailable"] = "PRODUCT_NOT_AVAILABLE";
  ErrorCode["ProductNotFound"] = "PRODUCT_NOT_FOUND";
  ErrorCode["RecordNotFound"] = "RECORD_NOT_FOUND";
  ErrorCode["ShippingError"] = "SHIPPING_ERROR";
  ErrorCode["UnexpectedError"] = "UNEXPECTED_ERROR";
  ErrorCode["UnverifiedJwtToken"] = "UNVERIFIED_JWT_TOKEN";
  ErrorCode["VariantNotAvailable"] = "VARIANT_NOT_AVAILABLE";
  return ErrorCode;
}({});
let FatooraConfigurationAction = /*#__PURE__*/function (FatooraConfigurationAction) {
  FatooraConfigurationAction["Activate"] = "Activate";
  FatooraConfigurationAction["RenewCertificate"] = "RenewCertificate";
  FatooraConfigurationAction["RevokeCertificate"] = "RevokeCertificate";
  FatooraConfigurationAction["Save"] = "Save";
  return FatooraConfigurationAction;
}({});
let FontTypeEnum = /*#__PURE__*/function (FontTypeEnum) {
  FontTypeEnum["Body"] = "Body";
  FontTypeEnum["Headers"] = "Headers";
  return FontTypeEnum;
}({});
let FulfillStatusEnum = /*#__PURE__*/function (FulfillStatusEnum) {
  FulfillStatusEnum["Fulfilled"] = "FULFILLED";
  FulfillStatusEnum["PartiallyFulfilled"] = "PARTIALLY_FULFILLED";
  FulfillStatusEnum["Unfulfilled"] = "UNFULFILLED";
  return FulfillStatusEnum;
}({});
let HandleType = /*#__PURE__*/function (HandleType) {
  HandleType["Attribute"] = "attribute";
  HandleType["AttributesValue"] = "attributesValue";
  HandleType["Collection"] = "collection";
  HandleType["Option"] = "option";
  HandleType["OptionsValue"] = "optionsValue";
  HandleType["Product"] = "product";
  return HandleType;
}({});
let ImageContentType = /*#__PURE__*/function (ImageContentType) {
  ImageContentType["Jpg"] = "JPG";
  ImageContentType["Png"] = "PNG";
  ImageContentType["Webp"] = "WEBP";
  return ImageContentType;
}({});
let IntegrationAuthType = /*#__PURE__*/function (IntegrationAuthType) {
  IntegrationAuthType["Api"] = "Api";
  IntegrationAuthType["Basic"] = "Basic";
  IntegrationAuthType["Custom"] = "Custom";
  IntegrationAuthType["NoAuth"] = "NoAuth";
  IntegrationAuthType["Token"] = "Token";
  return IntegrationAuthType;
}({});
let IntegrationCategory = /*#__PURE__*/function (IntegrationCategory) {
  IntegrationCategory["Dropshipping"] = "Dropshipping";
  IntegrationCategory["EInvoice"] = "EInvoice";
  IntegrationCategory["Marketing"] = "Marketing";
  IntegrationCategory["Shipping"] = "Shipping";
  IntegrationCategory["SocialMediaSalesChannel"] = "SocialMediaSalesChannel";
  return IntegrationCategory;
}({});
let IntegrationSortByField = /*#__PURE__*/function (IntegrationSortByField) {
  IntegrationSortByField["CreatedAt"] = "createdAt";
  IntegrationSortByField["Id"] = "id";
  IntegrationSortByField["Name"] = "name";
  IntegrationSortByField["UpdatedAt"] = "updatedAt";
  return IntegrationSortByField;
}({});
let IntegrationType = /*#__PURE__*/function (IntegrationType) {
  IntegrationType["Dropshipping"] = "Dropshipping";
  IntegrationType["EInvoice"] = "EInvoice";
  IntegrationType["Marketing"] = "Marketing";
  IntegrationType["Shipping"] = "Shipping";
  IntegrationType["SocialMediaSalesChannel"] = "SocialMediaSalesChannel";
  return IntegrationType;
}({});
let InvoiceType = /*#__PURE__*/function (InvoiceType) {
  InvoiceType["CreateSubscription"] = "CREATE_SUBSCRIPTION";
  InvoiceType["CreateUpgrade"] = "CREATE_UPGRADE";
  InvoiceType["Recurring"] = "RECURRING";
  InvoiceType["Renewal"] = "RENEWAL";
  InvoiceType["Subscription"] = "SUBSCRIPTION";
  InvoiceType["Upgrade"] = "UPGRADE";
  return InvoiceType;
}({});
let LinkType = /*#__PURE__*/function (LinkType) {
  LinkType["Collection"] = "Collection";
  LinkType["ExternalLink"] = "ExternalLink";
  LinkType["None"] = "None";
  LinkType["Page"] = "Page";
  LinkType["Product"] = "Product";
  LinkType["Shop"] = "SHOP";
  return LinkType;
}({});
let Locale = /*#__PURE__*/function (Locale) {
  Locale["Ar"] = "ar";
  Locale["En"] = "en";
  Locale["Fr"] = "fr";
  Locale["Tr"] = "tr";
  return Locale;
}({});
let LogoSize = /*#__PURE__*/function (LogoSize) {
  LogoSize["Large"] = "LARGE";
  LogoSize["Medium"] = "MEDIUM";
  LogoSize["Small"] = "SMALL";
  return LogoSize;
}({});
let MediaStatus = /*#__PURE__*/function (MediaStatus) {
  MediaStatus["Failed"] = "FAILED";
  MediaStatus["Processing"] = "PROCESSING";
  MediaStatus["Ready"] = "READY";
  MediaStatus["Uploaded"] = "UPLOADED";
  return MediaStatus;
}({});
let MenuItemType = /*#__PURE__*/function (MenuItemType) {
  MenuItemType["Collection"] = "Collection";
  MenuItemType["EmailAddress"] = "EmailAddress";
  MenuItemType["ExternalLink"] = "ExternalLink";
  MenuItemType["Folder"] = "Folder";
  MenuItemType["LegalPage"] = "LegalPage";
  MenuItemType["Page"] = "Page";
  MenuItemType["PhoneNumber"] = "PhoneNumber";
  MenuItemType["Product"] = "Product";
  MenuItemType["StaticPage"] = "StaticPage";
  return MenuItemType;
}({});
let NameInputOptions = /*#__PURE__*/function (NameInputOptions) {
  NameInputOptions["FirstAndLast"] = "FIRST_AND_LAST";
  NameInputOptions["FirstOnly"] = "FIRST_ONLY";
  return NameInputOptions;
}({});
let NextActionType = /*#__PURE__*/function (NextActionType) {
  NextActionType["NeedPaymentSource"] = "NEED_PAYMENT_SOURCE";
  NextActionType["Redirect"] = "REDIRECT";
  NextActionType["UseProviderSdk"] = "USE_PROVIDER_SDK";
  return NextActionType;
}({});
let OrderErrorEnum = /*#__PURE__*/function (OrderErrorEnum) {
  OrderErrorEnum["CheckoutTimeout"] = "CHECKOUT_TIMEOUT";
  OrderErrorEnum["PaymentFailed"] = "PAYMENT_FAILED";
  OrderErrorEnum["QuantityNotAvailable"] = "QUANTITY_NOT_AVAILABLE";
  return OrderErrorEnum;
}({});
let OrderHistoryTypes = /*#__PURE__*/function (OrderHistoryTypes) {
  OrderHistoryTypes["ItemsFulfilled"] = "ItemsFulfilled";
  OrderHistoryTypes["ItemsFulfillmentCanceled"] = "ItemsFulfillment_canceled";
  OrderHistoryTypes["ItemsFulfillmentUpdated"] = "ItemsFulfillment_updated";
  OrderHistoryTypes["ItemsQuantityUpdated"] = "ItemsQuantity_updated";
  OrderHistoryTypes["ItemsRemoved"] = "ItemsRemoved";
  OrderHistoryTypes["ItemsUnFulfilled"] = "ItemsUnFulfilled";
  OrderHistoryTypes["OrderArchived"] = "OrderArchived";
  OrderHistoryTypes["OrderCanceled"] = "OrderCanceled";
  OrderHistoryTypes["OrderComment"] = "OrderComment";
  OrderHistoryTypes["OrderCreated"] = "OrderCreated";
  OrderHistoryTypes["OrderPaid"] = "OrderPaid";
  OrderHistoryTypes["OrderRefunded"] = "OrderRefunded";
  OrderHistoryTypes["OrderUnArchive"] = "OrderUnArchive";
  OrderHistoryTypes["OrderUncanceled"] = "OrderUncanceled";
  OrderHistoryTypes["OrderUpdated"] = "OrderUpdated";
  OrderHistoryTypes["OrderViewed"] = "OrderViewed";
  OrderHistoryTypes["ShippingStatusUpdated"] = "ShippingStatus_updated";
  return OrderHistoryTypes;
}({});
let OrderItemSourceType = /*#__PURE__*/function (OrderItemSourceType) {
  OrderItemSourceType["Integration"] = "INTEGRATION";
  OrderItemSourceType["Manual"] = "MANUAL";
  return OrderItemSourceType;
}({});
let OrderPaymentStatusEnum = /*#__PURE__*/function (OrderPaymentStatusEnum) {
  OrderPaymentStatusEnum["Failed"] = "FAILED";
  OrderPaymentStatusEnum["Paid"] = "PAID";
  OrderPaymentStatusEnum["Pending"] = "PENDING";
  OrderPaymentStatusEnum["Refunded"] = "REFUNDED";
  return OrderPaymentStatusEnum;
}({});
let OrderSortByField = /*#__PURE__*/function (OrderSortByField) {
  OrderSortByField["CreatedAt"] = "createdAt";
  OrderSortByField["Id"] = "id";
  OrderSortByField["OrderSerial"] = "orderSerial";
  OrderSortByField["UpdatedAt"] = "updatedAt";
  return OrderSortByField;
}({});
let OrderStatusEnum = /*#__PURE__*/function (OrderStatusEnum) {
  OrderStatusEnum["Failed"] = "FAILED";
  OrderStatusEnum["Processing"] = "PROCESSING";
  OrderStatusEnum["Successful"] = "SUCCESSFUL";
  return OrderStatusEnum;
}({});
let PageSortByFields = /*#__PURE__*/function (PageSortByFields) {
  PageSortByFields["CreatedAt"] = "createdAt";
  PageSortByFields["UpdatedAt"] = "updatedAt";
  return PageSortByFields;
}({});
let PageStatusEnum = /*#__PURE__*/function (PageStatusEnum) {
  PageStatusEnum["Draft"] = "DRAFT";
  PageStatusEnum["Published"] = "PUBLISHED";
  return PageStatusEnum;
}({});
let PaymentCollectionMethod = /*#__PURE__*/function (PaymentCollectionMethod) {
  PaymentCollectionMethod["Alinma"] = "ALINMA";
  PaymentCollectionMethod["AlRajhi"] = "AL_RAJHI";
  PaymentCollectionMethod["Automatic"] = "AUTOMATIC";
  PaymentCollectionMethod["CashOnHand"] = "CASH_ON_HAND";
  PaymentCollectionMethod["Chargedesk"] = "CHARGEDESK";
  PaymentCollectionMethod["Cib"] = "CIB";
  PaymentCollectionMethod["Free"] = "FREE";
  PaymentCollectionMethod["Paymob"] = "PAYMOB";
  PaymentCollectionMethod["SaudieInitiative"] = "SAUDIE_INITIATIVE";
  PaymentCollectionMethod["SendInvoice"] = "SEND_INVOICE";
  PaymentCollectionMethod["Tap"] = "TAP";
  return PaymentCollectionMethod;
}({});
let PaymentIntentStatusEnum = /*#__PURE__*/function (PaymentIntentStatusEnum) {
  PaymentIntentStatusEnum["Cancelled"] = "CANCELLED";
  PaymentIntentStatusEnum["Done"] = "DONE";
  PaymentIntentStatusEnum["Expired"] = "EXPIRED";
  PaymentIntentStatusEnum["Failed"] = "FAILED";
  PaymentIntentStatusEnum["Pending"] = "PENDING";
  PaymentIntentStatusEnum["PendingExternalAction"] = "PENDING_EXTERNAL_ACTION";
  PaymentIntentStatusEnum["Successful"] = "SUCCESSFUL";
  PaymentIntentStatusEnum["Unprocessed"] = "UNPROCESSED";
  return PaymentIntentStatusEnum;
}({});
let PaymentMethodEnum = /*#__PURE__*/function (PaymentMethodEnum) {
  PaymentMethodEnum["AmanMasary"] = "AMAN_MASARY";
  PaymentMethodEnum["ApplePay"] = "APPLE_PAY";
  PaymentMethodEnum["BankInstallments"] = "BANK_INSTALLMENTS";
  PaymentMethodEnum["BankTransfers"] = "BANK_TRANSFERS";
  PaymentMethodEnum["Card"] = "CARD";
  PaymentMethodEnum["CashCollection"] = "CASH_COLLECTION";
  PaymentMethodEnum["CashOnDelivary"] = "CASH_ON_DELIVARY";
  PaymentMethodEnum["CashOnDelivery"] = "CASH_ON_DELIVERY";
  PaymentMethodEnum["CashOutlet"] = "CASH_OUTLET";
  PaymentMethodEnum["CryptoWallet"] = "CRYPTO_WALLET";
  PaymentMethodEnum["Efawateercom"] = "EFAWATEERCOM";
  PaymentMethodEnum["GooglePay"] = "GOOGLE_PAY";
  PaymentMethodEnum["Knet"] = "KNET";
  PaymentMethodEnum["MobileMoney"] = "MOBILE_MONEY";
  PaymentMethodEnum["MobileWallet"] = "MOBILE_WALLET";
  PaymentMethodEnum["MPesa"] = "M_PESA";
  PaymentMethodEnum["Naps"] = "NAPS";
  PaymentMethodEnum["None"] = "NONE";
  PaymentMethodEnum["OnlinePayment"] = "ONLINE_PAYMENT";
  PaymentMethodEnum["Paypal"] = "PAYPAL";
  PaymentMethodEnum["PayAtFawry"] = "PAY_AT_FAWRY";
  PaymentMethodEnum["ReferenceNumber"] = "REFERENCE_NUMBER";
  PaymentMethodEnum["SamsungPay"] = "SAMSUNG_PAY";
  PaymentMethodEnum["SelfserveWallet"] = "SELFSERVE_WALLET";
  PaymentMethodEnum["Shahry"] = "SHAHRY";
  PaymentMethodEnum["Ussd"] = "USSD";
  PaymentMethodEnum["Valu"] = "VALU";
  return PaymentMethodEnum;
}({});
let PaymentProvider = /*#__PURE__*/function (PaymentProvider) {
  PaymentProvider["Internal"] = "INTERNAL";
  PaymentProvider["PayFort"] = "PAY_FORT";
  PaymentProvider["Stripe"] = "STRIPE";
  PaymentProvider["VodafoneHub"] = "VODAFONE_HUB";
  return PaymentProvider;
}({});
let PaymentSourceType = /*#__PURE__*/function (PaymentSourceType) {
  PaymentSourceType["BankDeposit"] = "BANK_DEPOSIT";
  PaymentSourceType["Card"] = "CARD";
  PaymentSourceType["Cash"] = "CASH";
  PaymentSourceType["Initiative"] = "INITIATIVE";
  PaymentSourceType["PaymentLink"] = "PAYMENT_LINK";
  PaymentSourceType["VodafoneHub"] = "VODAFONE_HUB";
  return PaymentSourceType;
}({});
let PaymentStatusEnum = /*#__PURE__*/function (PaymentStatusEnum) {
  PaymentStatusEnum["Paid"] = "PAID";
  PaymentStatusEnum["Pending"] = "PENDING";
  PaymentStatusEnum["Refunded"] = "REFUNDED";
  return PaymentStatusEnum;
}({});
let PermissionAction = /*#__PURE__*/function (PermissionAction) {
  PermissionAction["Create"] = "CREATE";
  PermissionAction["Delete"] = "DELETE";
  PermissionAction["Read"] = "READ";
  PermissionAction["Update"] = "UPDATE";
  return PermissionAction;
}({});
let PermissionResource = /*#__PURE__*/function (PermissionResource) {
  PermissionResource["AbandonedCheckout"] = "ABANDONED_CHECKOUT";
  PermissionResource["Account"] = "ACCOUNT";
  PermissionResource["Analytics"] = "ANALYTICS";
  PermissionResource["Catalog"] = "CATALOG";
  PermissionResource["Customer"] = "CUSTOMER";
  PermissionResource["Discount"] = "DISCOUNT";
  PermissionResource["Domain"] = "DOMAIN";
  PermissionResource["Integration"] = "INTEGRATION";
  PermissionResource["Order"] = "ORDER";
  PermissionResource["Page"] = "PAGE";
  PermissionResource["Review"] = "REVIEW";
  PermissionResource["Shipping"] = "SHIPPING";
  PermissionResource["Store"] = "STORE";
  PermissionResource["StorePayment"] = "STORE_PAYMENT";
  PermissionResource["Subscription"] = "SUBSCRIPTION";
  return PermissionResource;
}({});
let PermissionRole = /*#__PURE__*/function (PermissionRole) {
  PermissionRole["Custom"] = "CUSTOM";
  PermissionRole["Owner"] = "OWNER";
  PermissionRole["SuperAdmin"] = "SUPER_ADMIN";
  return PermissionRole;
}({});
let PlanResourceType = /*#__PURE__*/function (PlanResourceType) {
  PlanResourceType["RegisteredDomain"] = "RegisteredDomain";
  PlanResourceType["Site"] = "Site";
  PlanResourceType["Store"] = "Store";
  return PlanResourceType;
}({});
let PricingInterval = /*#__PURE__*/function (PricingInterval) {
  PricingInterval["Month"] = "MONTH";
  PricingInterval["SixMonths"] = "SIX_MONTHS";
  PricingInterval["ThreeMonths"] = "THREE_MONTHS";
  PricingInterval["Year"] = "YEAR";
  return PricingInterval;
}({});
let ProductAttributeType = /*#__PURE__*/function (ProductAttributeType) {
  ProductAttributeType["Image"] = "IMAGE";
  ProductAttributeType["Text"] = "TEXT";
  return ProductAttributeType;
}({});
let ProductCollectionSortByField = /*#__PURE__*/function (ProductCollectionSortByField) {
  ProductCollectionSortByField["CreatedAt"] = "createdAt";
  ProductCollectionSortByField["Id"] = "id";
  ProductCollectionSortByField["Title"] = "title";
  ProductCollectionSortByField["UpdatedAt"] = "updatedAt";
  return ProductCollectionSortByField;
}({});
let ProductImageZoomBehavior = /*#__PURE__*/function (ProductImageZoomBehavior) {
  ProductImageZoomBehavior["None"] = "none";
  ProductImageZoomBehavior["OnHover"] = "onHover";
  return ProductImageZoomBehavior;
}({});
let ProductSnapshotStatus = /*#__PURE__*/function (ProductSnapshotStatus) {
  ProductSnapshotStatus["Active"] = "ACTIVE";
  ProductSnapshotStatus["Draft"] = "DRAFT";
  ProductSnapshotStatus["Unlisted"] = "UNLISTED";
  return ProductSnapshotStatus;
}({});
let ProductSnapshotType = /*#__PURE__*/function (ProductSnapshotType) {
  ProductSnapshotType["Custom"] = "CUSTOM";
  ProductSnapshotType["Simple"] = "SIMPLE";
  return ProductSnapshotType;
}({});
let ProductSortByField = /*#__PURE__*/function (ProductSortByField) {
  ProductSortByField["CreatedAt"] = "createdAt";
  ProductSortByField["Id"] = "id";
  ProductSortByField["Price"] = "price";
  ProductSortByField["Title"] = "title";
  ProductSortByField["UpdatedAt"] = "updatedAt";
  return ProductSortByField;
}({});
let ProductStatus = /*#__PURE__*/function (ProductStatus) {
  ProductStatus["Active"] = "ACTIVE";
  ProductStatus["Draft"] = "DRAFT";
  ProductStatus["Pending"] = "PENDING";
  ProductStatus["Unlisted"] = "UNLISTED";
  return ProductStatus;
}({});
let ProductStatusFilter = /*#__PURE__*/function (ProductStatusFilter) {
  ProductStatusFilter["Active"] = "ACTIVE";
  ProductStatusFilter["All"] = "ALL";
  ProductStatusFilter["Draft"] = "DRAFT";
  ProductStatusFilter["Unlisted"] = "UNLISTED";
  return ProductStatusFilter;
}({});
let ProductType = /*#__PURE__*/function (ProductType) {
  ProductType["All"] = "ALL";
  ProductType["Custom"] = "CUSTOM";
  ProductType["Simple"] = "SIMPLE";
  return ProductType;
}({});
let PromoCodeStatusEnum = /*#__PURE__*/function (PromoCodeStatusEnum) {
  PromoCodeStatusEnum["Active"] = "ACTIVE";
  PromoCodeStatusEnum["All"] = "ALL";
  PromoCodeStatusEnum["Inactive"] = "INACTIVE";
  PromoCodeStatusEnum["Scheduled"] = "SCHEDULED";
  return PromoCodeStatusEnum;
}({});
let PromoCodeTypeEnum = /*#__PURE__*/function (PromoCodeTypeEnum) {
  PromoCodeTypeEnum["FixedAmount"] = "FIXED_AMOUNT";
  PromoCodeTypeEnum["Percentage"] = "PERCENTAGE";
  return PromoCodeTypeEnum;
}({});
let ProviderName = /*#__PURE__*/function (ProviderName) {
  ProviderName["Aliexpress"] = "Aliexpress";
  ProviderName["Bosta"] = "Bosta";
  ProviderName["Facebook"] = "Facebook";
  ProviderName["Fatoora"] = "Fatoora";
  ProviderName["Gameball"] = "Gameball";
  ProviderName["GoAffPro"] = "GoAffPro";
  ProviderName["GoogleMerchant"] = "GoogleMerchant";
  ProviderName["HubSpot"] = "HubSpot";
  ProviderName["Klaviyo"] = "Klaviyo";
  ProviderName["Knawat"] = "Knawat";
  ProviderName["MailChimp"] = "MailChimp";
  ProviderName["Oto"] = "OTO";
  ProviderName["Optimonk"] = "Optimonk";
  ProviderName["SnapChat"] = "SnapChat";
  ProviderName["Taager"] = "Taager";
  ProviderName["TikTok"] = "TikTok";
  return ProviderName;
}({});
let RequestStatus = /*#__PURE__*/function (RequestStatus) {
  RequestStatus["Failed"] = "FAILED";
  RequestStatus["Pending"] = "PENDING";
  RequestStatus["Succeeded"] = "SUCCEEDED";
  return RequestStatus;
}({});
let RequestType = /*#__PURE__*/function (RequestType) {
  RequestType["BulkTranslate"] = "BULK_TRANSLATE";
  RequestType["BulkUpload"] = "BULK_UPLOAD";
  return RequestType;
}({});
let ReviewStatus = /*#__PURE__*/function (ReviewStatus) {
  ReviewStatus["Published"] = "Published";
  ReviewStatus["Unpublished"] = "Unpublished";
  return ReviewStatus;
}({});
let ReviewsSortByField = /*#__PURE__*/function (ReviewsSortByField) {
  ReviewsSortByField["CreatedAt"] = "createdAt";
  ReviewsSortByField["Rating"] = "rating";
  ReviewsSortByField["Status"] = "status";
  ReviewsSortByField["UpdatedAt"] = "updatedAt";
  return ReviewsSortByField;
}({});
let SearchingMechanism = /*#__PURE__*/function (SearchingMechanism) {
  SearchingMechanism["AllProductSearch"] = "AllProductSearch";
  SearchingMechanism["CategorySearch"] = "CategorySearch";
  SearchingMechanism["TextSearch"] = "TextSearch";
  return SearchingMechanism;
}({});
let SectionBackgroundTypeEnum = /*#__PURE__*/function (SectionBackgroundTypeEnum) {
  SectionBackgroundTypeEnum["Color"] = "COLOR";
  SectionBackgroundTypeEnum["None"] = "NONE";
  return SectionBackgroundTypeEnum;
}({});
let SectionTypeEnum = /*#__PURE__*/function (SectionTypeEnum) {
  SectionTypeEnum["AttributesRow"] = "ATTRIBUTES_ROW";
  SectionTypeEnum["Banner"] = "BANNER";
  SectionTypeEnum["CollectionsRow"] = "COLLECTIONS_ROW";
  SectionTypeEnum["Embed"] = "EMBED";
  SectionTypeEnum["ProductsRow"] = "PRODUCTS_ROW";
  SectionTypeEnum["Text"] = "TEXT";
  SectionTypeEnum["Video"] = "VIDEO";
  return SectionTypeEnum;
}({});
let ShipmentStatus = /*#__PURE__*/function (ShipmentStatus) {
  ShipmentStatus["AddressConfirmed"] = "addressConfirmed";
  ShipmentStatus["ArrivedDestination"] = "arrivedDestination";
  ShipmentStatus["ArrivedDestinationTerminal"] = "arrivedDestinationTerminal";
  ShipmentStatus["ArrivedOriginTerminal"] = "arrivedOriginTerminal";
  ShipmentStatus["ArrivedPickup"] = "arrivedPickup";
  ShipmentStatus["AssignedToWarehouse"] = "assignedToWarehouse";
  ShipmentStatus["BranchAssigned"] = "branchAssigned";
  ShipmentStatus["Canceled"] = "canceled";
  ShipmentStatus["ConfirmedReturn"] = "confirmedReturn";
  ShipmentStatus["Delivered"] = "delivered";
  ShipmentStatus["Failed"] = "failed";
  ShipmentStatus["GoingToPickup"] = "goingToPickup";
  ShipmentStatus["InTransit"] = "inTransit";
  ShipmentStatus["New"] = "new";
  ShipmentStatus["OutForDelivery"] = "outForDelivery";
  ShipmentStatus["PickedUp"] = "pickedUp";
  ShipmentStatus["PickupFromStore"] = "pickupFromStore";
  ShipmentStatus["ReturnProcessing"] = "returnProcessing";
  ShipmentStatus["ReturnShipmentProcessing"] = "returnShipmentProcessing";
  ShipmentStatus["Returned"] = "returned";
  ShipmentStatus["SearchingDriver"] = "searchingDriver";
  ShipmentStatus["SentTo"] = "sent_to";
  ShipmentStatus["ShipmentCanceled"] = "shipmentCanceled";
  ShipmentStatus["ShipmentCreated"] = "shipmentCreated";
  ShipmentStatus["ShipmentInProgress"] = "shipmentInProgress";
  ShipmentStatus["ShipmentOnHold"] = "shipmentOnHold";
  ShipmentStatus["ShipmentOnHoldToCancel"] = "shipmentOnHoldToCancel";
  ShipmentStatus["ShipmentOnHoldWarehouse"] = "shipmentOnHoldWarehouse";
  ShipmentStatus["UndeliveredAttempt"] = "undeliveredAttempt";
  ShipmentStatus["WaitingAddressConfirmation"] = "waitingAddressConfirmation";
  return ShipmentStatus;
}({});
let ShippingErrors = /*#__PURE__*/function (ShippingErrors) {
  ShippingErrors["BostaError"] = "BOSTA_ERROR";
  ShippingErrors["InvalidCity"] = "INVALID_CITY";
  ShippingErrors["InvalidDistrict"] = "INVALID_DISTRICT";
  ShippingErrors["InvalidPackageSize"] = "INVALID_PACKAGE_SIZE";
  ShippingErrors["InvalidPackageType"] = "INVALID_PACKAGE_TYPE";
  ShippingErrors["MissingAdditionalInfo"] = "MISSING_ADDITIONAL_INFO";
  ShippingErrors["UnexpectedError"] = "UNEXPECTED_ERROR";
  return ShippingErrors;
}({});
let ShippingProviders = /*#__PURE__*/function (ShippingProviders) {
  ShippingProviders["Bosta"] = "Bosta";
  ShippingProviders["Oto"] = "OTO";
  return ShippingProviders;
}({});
let ShippingStatus = /*#__PURE__*/function (ShippingStatus) {
  ShippingStatus["DataFullfilled"] = "DATA_FULLFILLED";
  ShippingStatus["Pending"] = "PENDING";
  return ShippingStatus;
}({});
let ShippingZoneSortByField = /*#__PURE__*/function (ShippingZoneSortByField) {
  ShippingZoneSortByField["CreatedAt"] = "createdAt";
  ShippingZoneSortByField["Id"] = "id";
  ShippingZoneSortByField["UpdatedAt"] = "updatedAt";
  return ShippingZoneSortByField;
}({});
let SortOrder = /*#__PURE__*/function (SortOrder) {
  SortOrder["Asc"] = "asc";
  SortOrder["Desc"] = "desc";
  return SortOrder;
}({});
let SourceType = /*#__PURE__*/function (SourceType) {
  SourceType["Integration"] = "INTEGRATION";
  SourceType["Manual"] = "MANUAL";
  return SourceType;
}({});
let StaticPageEnum = /*#__PURE__*/function (StaticPageEnum) {
  StaticPageEnum["Contact"] = "Contact";
  StaticPageEnum["Home"] = "Home";
  StaticPageEnum["Shop"] = "Shop";
  return StaticPageEnum;
}({});
let StockError = /*#__PURE__*/function (StockError) {
  StockError["InconsistentCartLimits"] = "INCONSISTENT_CART_LIMITS";
  StockError["InconsistentPricing"] = "INCONSISTENT_PRICING";
  StockError["InvalidCartMax"] = "INVALID_CART_MAX";
  StockError["InvalidCartMin"] = "INVALID_CART_MIN";
  StockError["InvalidCostPrice"] = "INVALID_COST_PRICE";
  StockError["InvalidQuantity"] = "INVALID_QUANTITY";
  StockError["InvalidRegularPrice"] = "INVALID_REGULAR_PRICE";
  StockError["InvalidSalePrice"] = "INVALID_SALE_PRICE";
  StockError["ItemNotFound"] = "ITEM_NOT_FOUND";
  StockError["StockUpdateFailed"] = "STOCK_UPDATE_FAILED";
  return StockError;
}({});
let StoreCitiesByField = /*#__PURE__*/function (StoreCitiesByField) {
  StoreCitiesByField["CreatedAt"] = "createdAt";
  StoreCitiesByField["Id"] = "id";
  StoreCitiesByField["UpdatedAt"] = "updatedAt";
  return StoreCitiesByField;
}({});
let StorePageTypeEnum = /*#__PURE__*/function (StorePageTypeEnum) {
  StorePageTypeEnum["Custom"] = "CUSTOM";
  StorePageTypeEnum["Home"] = "HOME";
  return StorePageTypeEnum;
}({});
let StorePaymentMethods = /*#__PURE__*/function (StorePaymentMethods) {
  StorePaymentMethods["CashOnDelivary"] = "CASH_ON_DELIVARY";
  StorePaymentMethods["OnlinePayment"] = "ONLINE_PAYMENT";
  return StorePaymentMethods;
}({});
let StorePaymentProvider = /*#__PURE__*/function (StorePaymentProvider) {
  StorePaymentProvider["Cowpay"] = "COWPAY";
  StorePaymentProvider["Stripe"] = "STRIPE";
  StorePaymentProvider["Vapulus"] = "VAPULUS";
  return StorePaymentProvider;
}({});
let StoreSortByField = /*#__PURE__*/function (StoreSortByField) {
  StoreSortByField["CreatedAt"] = "createdAt";
  StoreSortByField["Id"] = "id";
  StoreSortByField["Name"] = "name";
  StoreSortByField["UpdatedAt"] = "updatedAt";
  return StoreSortByField;
}({});
let SubscriptionStatus = /*#__PURE__*/function (SubscriptionStatus) {
  SubscriptionStatus["Active"] = "ACTIVE";
  SubscriptionStatus["Canceled"] = "CANCELED";
  SubscriptionStatus["CancelRequested"] = "CANCEL_REQUESTED";
  SubscriptionStatus["Disputed"] = "DISPUTED";
  SubscriptionStatus["DowngradeRequested"] = "DOWNGRADE_REQUESTED";
  SubscriptionStatus["Expired"] = "EXPIRED";
  SubscriptionStatus["Incomplete"] = "INCOMPLETE";
  SubscriptionStatus["PastDue"] = "PAST_DUE";
  SubscriptionStatus["Pending"] = "PENDING";
  SubscriptionStatus["Refunded"] = "REFUNDED";
  return SubscriptionStatus;
}({});
let TopSellingProductSortOptions = /*#__PURE__*/function (TopSellingProductSortOptions) {
  TopSellingProductSortOptions["TotalQuantitySold"] = "totalQuantitySold";
  TopSellingProductSortOptions["TotalSales"] = "totalSales";
  return TopSellingProductSortOptions;
}({});
let UserAccessType = /*#__PURE__*/function (UserAccessType) {
  UserAccessType["App"] = "APP";
  UserAccessType["User"] = "USER";
  return UserAccessType;
}({});
let DomainType = /*#__PURE__*/function (DomainType) {
  DomainType["External"] = "external";
  DomainType["Internal"] = "internal";
  return DomainType;
}({});
let PromoCodesSortByField = /*#__PURE__*/function (PromoCodesSortByField) {
  PromoCodesSortByField["CreatedAt"] = "createdAt";
  PromoCodesSortByField["Id"] = "id";
  PromoCodesSortByField["UpdatedAt"] = "updatedAt";
  return PromoCodesSortByField;
}({});
const QuestionnaireInfoFragmentDoc = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql)(_t || (_t = _`
    fragment QuestionnaireInfo on Questionnaire {
  version
  answers {
    questionNo
    answer
  }
}
    `));
const GetAvailablePromotionCodesDocument = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql)(_t2 || (_t2 = _`
    query getAvailablePromotionCodes {
  getAvailablePromotionCodes {
    id
    active
    code
    createdAt
    expiresAt
    maxRedemptions
    percentOff
  }
}
    `));

/**
 * __useGetAvailablePromotionCodesQuery__
 *
 * To run a query within a React component, call `useGetAvailablePromotionCodesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAvailablePromotionCodesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAvailablePromotionCodesQuery({
 *   variables: {
 *   },
 * });
 */
function useGetAvailablePromotionCodesQuery(baseOptions) {
  const options = Object.assign({}, defaultOptions, baseOptions);
  return _apollo_client__WEBPACK_IMPORTED_MODULE_0__.useQuery(GetAvailablePromotionCodesDocument, options);
}
function useGetAvailablePromotionCodesLazyQuery(baseOptions) {
  const options = Object.assign({}, defaultOptions, baseOptions);
  return _apollo_client__WEBPACK_IMPORTED_MODULE_0__.useLazyQuery(GetAvailablePromotionCodesDocument, options);
}
const ListStoresDocument = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql)(_t3 || (_t3 = _`
    query ListStores {
  stores {
    activeSubscription {
      active
    }
  }
}
    `));

/**
 * __useListStoresQuery__
 *
 * To run a query within a React component, call `useListStoresQuery` and pass it any options that fit your needs.
 * When your component renders, `useListStoresQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListStoresQuery({
 *   variables: {
 *   },
 * });
 */
function useListStoresQuery(baseOptions) {
  const options = Object.assign({}, defaultOptions, baseOptions);
  return _apollo_client__WEBPACK_IMPORTED_MODULE_0__.useQuery(ListStoresDocument, options);
}
function useListStoresLazyQuery(baseOptions) {
  const options = Object.assign({}, defaultOptions, baseOptions);
  return _apollo_client__WEBPACK_IMPORTED_MODULE_0__.useLazyQuery(ListStoresDocument, options);
}
const UserQuestionnaireAnswersDocument = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql)(_t4 || (_t4 = _`
    query UserQuestionnaireAnswers($userId: ID!, $version: String!) {
  userQuestionnaireAnswers(userId: $userId, version: $version) {
    ...QuestionnaireInfo
  }
}
    ${0}`), QuestionnaireInfoFragmentDoc);

/**
 * __useUserQuestionnaireAnswersQuery__
 *
 * To run a query within a React component, call `useUserQuestionnaireAnswersQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuestionnaireAnswersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuestionnaireAnswersQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *      version: // value for 'version'
 *   },
 * });
 */
function useUserQuestionnaireAnswersQuery(baseOptions) {
  const options = Object.assign({}, defaultOptions, baseOptions);
  return _apollo_client__WEBPACK_IMPORTED_MODULE_0__.useQuery(UserQuestionnaireAnswersDocument, options);
}
function useUserQuestionnaireAnswersLazyQuery(baseOptions) {
  const options = Object.assign({}, defaultOptions, baseOptions);
  return _apollo_client__WEBPACK_IMPORTED_MODULE_0__.useLazyQuery(UserQuestionnaireAnswersDocument, options);
}
const UpdateUserQuestionnaireAnswersDocument = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql)(_t5 || (_t5 = _`
    mutation UpdateUserQuestionnaireAnswers($userId: ID!, $done: Boolean, $Answers: QuestionnaireInput) {
  updateUserQuestionnaireAnswers(
    userId: $userId
    done: $done
    questionnaireAnswers: $Answers
  ) {
    ...QuestionnaireInfo
  }
}
    ${0}`), QuestionnaireInfoFragmentDoc);
/**
 * __useUpdateUserQuestionnaireAnswersMutation__
 *
 * To run a mutation, you first call `useUpdateUserQuestionnaireAnswersMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserQuestionnaireAnswersMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserQuestionnaireAnswersMutation, { data, loading, error }] = useUpdateUserQuestionnaireAnswersMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *      done: // value for 'done'
 *      Answers: // value for 'Answers'
 *   },
 * });
 */
function useUpdateUserQuestionnaireAnswersMutation(baseOptions) {
  const options = Object.assign({}, defaultOptions, baseOptions);
  return _apollo_client__WEBPACK_IMPORTED_MODULE_0__.useMutation(UpdateUserQuestionnaireAnswersDocument, options);
}

/***/ }),

/***/ "../../node_modules/react-dom/client.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var m = __webpack_require__("webpack/sharing/consume/default/react-dom/react-dom?1c2f");
if (false) {} else {
  var i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  exports.createRoot = function(c, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.createRoot(c, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
  exports.hydrateRoot = function(c, h, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.hydrateRoot(c, h, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
}


/***/ }),

/***/ "./src/app/components/DiscountBanner/discount.gif":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "discount.gif";

/***/ }),

/***/ "./src/translations/ar.json":
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"1czY3t":"مستقل","NQgbYA":"إعدادات الحساب","26Qv3b":"كيف تعبر عن نفسك؟","4e2ypk":"مرحبًا بك في ويلت!","Fvkduq":"بلغت الحد الأقصى لعدد المواقع المجانية","GLsLlN":"هل تحتاج إلى مساعدة في موقعك؟ اطلب تجربة مع خبير","GulPNa":"ترقية الموقع","0h/lPM":"اشترك الآن","Iaj8Lc":"أنوي الاشتراك لو كانت المنصة تلبي احتياجاتي","In2qYh":"ساعة","Q+u+wA":"Choose one website you’d like to upgrade to one of Wuilt Premium plans","KpA5Go":"أحاول فقط استكشاف المنصة في الوقت الراهن، لكني سأقرر فيما بعد!","/mrgIW":"مواقعي","KqJr7f":"اضغط لنسخ الكوبون","S979K5":"Select a website to upgrade","LsiRP5":"مدون أو مؤثر","Z1L61b":"فرصتك الأكبر للتوفير - سنتين بسعر سنة واحدة","UvFUuq":"طالب","TZr4xU":"دقيقة","bsHKmr":"وكالة دعاية","aVqg31":"يوم","q2pzzd":"To tailor this and offer better support, we have","C81/uG":"خروج","lq6VRy":"{count} أسئلة سريعة لتصل إلى ما تحتاجه","o/0Yia":"كنت أظن أن المنصة مجانية دائمًا","nCxC7R":"ثانية","rp9UNw":"أي جُملة من هذه تصف ما تريده بعد انتهاء تجربتك المجانية لـ 7 أيام؟","v7ZC0v":"سأكمل فقط إن ساعدني شخص في التصميم بدلا منّي!","zjiKv/":"صاحب مشروع","zjK0dJ":"كوبون لفترة محدودوة {promoCode} - انسخ الكوبون واحصل على {discount}% خصم","cNiKNu":"متاجري","9+Ddtu":"التالي","HtSDyc":"مركز المساعدة","32hRAW":"في أسبوع","3LVf4V":"في شهر","6+NbDk":"جرّب مجانًا مع خبير","C5xzTC":"مميز","6Qo/pN":"تسويق خدماتي ومشروعي","cyR7Kh":"عودة","8/N5KZ":"ابدأ مع خبير من ويلت!","9EYfT2":"عمل بورتفوليو لعرض أعمالي ومشاريعي","9QXm1E":"ابدأ","9rFrCD":"سآخذ وقتي لأني لستُ مستعجلًا","FMKUos":"هل تحتاج إلى خبير معك لإنشاء المتجر خطوة بخطوة؟ بسيطة، اطلب التجربة مجانًا مع خبير وسيساعدك في كل ما تحتاجه!","EBeRKF":"ما الذي تتمنى تحقيقه من استخدامك لمنصة ويلت؟","Ntjkqd":"أو","KXBMcU":"نعم، أنشأت موقعًا عن طريق منصات مثل <b>ويكس أو شوبيفاي أو منصة أخرى</b>","O9iqJc":"أنشئ متجرك مع خبير خطوة بخطوة!","N4Hpam":"{n} من {count}","TMOuJj":"في هذه الحالة يمكنك:","Rn9r4B":"بناءًا على إجابتك، سيتواصل معك أحد خبرائنا بأسرع وقت ممكن، للإجابة على أسئلتك وتصميم الموقع أو المتجر معك، كما فعلنا مع كثير من عملائنا الناجحين. ","SocNz0":"في أسرع وقت ممكن","YYU0VW":"الترقية إلى باقاتنا المميزة","WIIvBw":"هذه الأسئلة لن تأخذ منك كثيرًا لكنها ستجعل تجربتك لمنصتنا أسهل وأسرع!","X/wL/F":"{username}، شكرًا لوقتك!","XG6LwZ":"لا، كنت أستخدم <b>مواقع التواصل الاجتماعي</b> فقط لبيع خدماتي ومنتجاتي","XcHpIe":"هل كان لديك أي موقع إلكتروني من قبل؟","cNEfr+":"تسهيل البيع أونلاين عليك، أولوية عندنا","fTCnY2":"عمل موقع شخصي أو مدونة","lf2D/K":"حدد الوقت المناسب لك وسيتواصل معك خبير من ويلت","y0EYpw":"النقاط","iR5sS4":"أريد التجربة بنفسي","oD3Gja":"جرّب مجانًا مع خبير","kr/+YP":"نعم، أنشأت موقعًا من قبل <b>ولم أكن راضيًا عنه</b>","n9d4UT":"لا، لم أنشئ أو أدير أي موقع إلكتروني","oJTR7D":"نعم، أنشأتُ موقعًا <b>بمساعدة مستقل أو وكالة تصميم</b>","oZ5/ts":"أريد تجربة تصميم متجري بنفسي","pRTobQ":"بيع منتجاتي أونلاين","ptnrDO":"مرحبًا {username}","sWX1rT":"متى تحتاج الموقع أو المتجر؟","Ks9I9F":"مرحبًا، أودُّ تجربة منصة ويلت مع أحد الخبراء المتوفرين لديكم."}');

/***/ }),

/***/ "./src/translations/en.json":
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"1czY3t":"Freelancer","NQgbYA":"Account Settings","26Qv3b":"What’s your role?","4e2ypk":"Welcome to Wuilt!","Fvkduq":"You’ve reached the limit of 1 free website","GLsLlN":"Need help with your Wuilt website? Request a demo with a Wuilt expert","GulPNa":"Upgrade Site","0h/lPM":"Upgrade","In2qYh":"hrs","Iaj8Lc":"I am planning to continue with the paid version if the product meets my needs","Q+u+wA":"Choose one website you’d like to upgrade to one of Wuilt Premium plans","KpA5Go":"I’m just exploring the platform at the moment and will decide later","/mrgIW":"My Websites","KqJr7f":"Click to copy","LsiRP5":"Blogger/Influencer","S979K5":"Select a website to upgrade","Z1L61b":"Limited time offer just for you - Buy one year and get 2 years","UvFUuq":"Student","TZr4xU":"min","bsHKmr":"Agency","aVqg31":"day","q2pzzd":"To tailor this and offer better support, we have","C81/uG":"Logout","lq6VRy":"{count} brief questions to understands your needs","o/0Yia":"I was under the impression that the service was entirely free","nCxC7R":"sec","rp9UNw":"Which of the following statements best describes your plan after the 7-day free trial?","v7ZC0v":"I will only continue if someone can create the website on my behalf","zjiKv/":"Business Owner","zjK0dJ":"Limited time offer just for you - get {discount}% off using promocode \\"{promoCode}\\"","cNiKNu":"My Stores","9+Ddtu":"Next","HtSDyc":"Help Center","32hRAW":"Within a week","3LVf4V":"Within a month","6+NbDk":"Book a demo","C5xzTC":"Premium","6Qo/pN":"Promote my business or services","cyR7Kh":"Back","8/N5KZ":"Get started with a Wuilt Expert!","9EYfT2":"Create a portfolio to showcase my work","9QXm1E":"Get Started","9rFrCD":"I’m not in a hurry, I want to take my time to build it","FMKUos":"Need help with your Wuilt store? Request a demo with a Wuilt expert, they will onboard and assist you with everything you need.","EBeRKF":"What are you hoping to achieve by building a website with our tool?","Ntjkqd":"or","KXBMcU":"Yes, using website builders like <b>Wix, Shopify, or others</b>","O9iqJc":"Book a demo with a Wuilt Expert!","N4Hpam":"Question {n} of {count}","TMOuJj":"Here is what you can do","Rn9r4B":"Based on your responses, one of our Wuilt Experts will contact you as soon as possible. This personalized session can clarify tool usage and answer your queries. Many users have found success through this.","SocNz0":"As soon as possible","YYU0VW":"Upgrade to Premium","WIIvBw":"This won\'t take much of your time but will significantly enhance your experience with us.","X/wL/F":"Thank you {username}!","XG6LwZ":"No, I mainly use <b>social networks</b>","XcHpIe":"Have you ever created or managed a website before?","cNEfr+":"Your exceptional experience is out priority","fTCnY2":"Build a personal site or blog","lf2D/K":"Pick a time, and a Wuilt expert will contact you","y0EYpw":"Rewards","iR5sS4":"I want to try a website on my own","oD3Gja":"Request a demo","kr/+YP":"Yes, but I had <b>a negative experience</b>","n9d4UT":"No, I have never created a website before","oJTR7D":"Yes, with the help of a <b>freelancer or a web design agency</b>","oZ5/ts":"I want to try a store on my own","pRTobQ":"Sell products online (e-commerce)","ptnrDO":"Hello {username}","sWX1rT":"How soon do you want your website to be live?","Ks9I9F":"Hi, I would like to book a demo with a Wuilt Expert."}');

/***/ }),

/***/ "./src/translations/fr.json":
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"/mrgIW":"Mes sites web","0h/lPM":"Mettre à niveau","32hRAW":"Au cours d’une semaine","HtSDyc":"Centre d’aide","C81/uG":"Se déconnecter","3LVf4V":"Au cours d’un mois","1czY3t":"Travailleur indépendant","y0EYpw":"Récompenses","NQgbYA":"Paramètres du compte","26Qv3b":"Quel est votre rôle ?","cNiKNu":"Mes boutiques","4e2ypk":"Bienvenue chez Wuilt !","6+NbDk":"Réserver une démonstration","6Qo/pN":"Promouvoir mon commerce ou mes services","8/N5KZ":"Commencez avec un expert Wuilt !","9+Ddtu":"Suivant","9EYfT2":"Créer un portefeuille pour présenter mon travail","9QXm1E":"Démarrer","9rFrCD":"Je ne me presse pas ; j’aimerais prendre mon temps","C5xzTC":"Premium","EBeRKF":"Que souhaitez-vous réaliser en créant un site web à l’aide de notre outil ?","FMKUos":"Besoin d’aide avec votre magasin Wuilt ? Demandez une démonstration avec l’un des experts Wuilt ; ils vous embarqueront et vous aideront avec tout ce dont vous avez besoin.","Fvkduq":"Vous avez atteint la limite de 1 site web gratuit","GLsLlN":"Besoin d’aide avec votre magasin Wuilt ? Demandez une démonstration avec l’un des experts Wuilt","GulPNa":"Mettre à jour le site","KXBMcU":"Oui, en utilisant des créateurs de sites web tels que <b>Wix, Shopify ou autres</b>.","Ks9I9F":"Bonjour, je souhaite réserver une démonstration avec un expert Wuilt.","N4Hpam":"Question {n} de {count} questions","Iaj8Lc":"J’envisage de continuer avec la version payante si le produit répond à mes besoins.","In2qYh":"heure","Ntjkqd":"ou","O9iqJc":"Réservez une démonstration avec un expert Wuilt !","Q+u+wA":"Choisissez un site web que vous souhaitez mettre à niveau vers l’un des plans Premium de Wuilt","KpA5Go":"Je suis juste en train de découvrir la plateforme pour le moment et je déciderai plus tard.","KqJr7f":"Cliquez pour copier","Rn9r4B":"D’après vos réponses, l’un de nos experts Wuilt vous contactera dans les plus brefs délais. Lors de cette séance personnalisée, vous comprendrez mieux comment utiliser l’outil et vous recevrez des réponses à vos questions. De nombreux utilisateurs ont réussi grâce à ce service.","S979K5":"Sélectionnez un site web à mettre à niveau","LsiRP5":"Blogueur/Influenceur","SocNz0":"Dans les plus brefs délais","TMOuJj":"Voici ce que vous pouvez faire","WIIvBw":"Cela ne vous prendra pas beaucoup de temps mais améliorera considérablement votre expérience avec nous.","X/wL/F":"Merci {username} !","XG6LwZ":"Non, j’utilise principalement les <b>réseaux sociaux</b>.","XcHpIe":"Avez-vous déjà créé ou géré un site web ?","YYU0VW":"Passer à la version Premium","cNEfr+":"Notre principale priorité est de vous offrir une expérience exceptionnelle","Z1L61b":"Limited time offer just for you - Buy one year and get 2 years","cyR7Kh":"Retour","UvFUuq":"Étudiant","TZr4xU":"minute","fTCnY2":"Créer un site ou un blog personnel","iR5sS4":"Je voudrais essayer moi-même avec un site web","kr/+YP":"Oui, mais j’ai eu une <b>expérience négative</b>.","bsHKmr":"Agence","lf2D/K":"Choisissez la date et l’heure, et un expert Wuilt vous contactera","aVqg31":"jour","n9d4UT":"Non, je n’ai jamais créé de site web","oD3Gja":"Demander une démonstration","oJTR7D":"Oui, avec l’aide d’un <b>développeur indépendant ou d’une agence de création de sites web</b>","oZ5/ts":"Je voudrais essayer moi-même avec une boutique","pRTobQ":"Vendre des produits en ligne (e-commerce)","ptnrDO":"Bonjour {username}","q2pzzd":"Afin d’adapter ceci et d’offrir un meilleur soutien, nous avons","sWX1rT":"Dans combien de temps souhaitez-vous que votre site web soit mis en ligne ?","lq6VRy":"{count} petites questions pour comprendre vos besoins","o/0Yia":"J’avais l’impression que le service était tout à fait gratuit","nCxC7R":"seconde","rp9UNw":"Laquelle des affirmations suivantes décrit le mieux votre plan après les 7 jours d’essai gratuit ?","v7ZC0v":"Je ne continuerai que si quelqu’un peut créer le site web en mon nom","zjiKv/":"Entrepreneur","zjK0dJ":"Offre limitée dans le temps juste pour vous - obtenez {discount}% de remise en utilisant le code promo « {promoCode} »"}');

/***/ }),

/***/ "./src/translations/tr.json":
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"/mrgIW":"Web Sitelerim","0h/lPM":"Yükselt","HtSDyc":"Yardım Merkezi","32hRAW":"Bir hafta içinde","C81/uG":"Oturumu Kapat","3LVf4V":"Bir ay içinde","NQgbYA":"Hesap Ayarları","y0EYpw":"Ödüller","1czY3t":"Serbest Çalışan","26Qv3b":"Rolünüz nedir?","cNiKNu":"Mağazalarım","4e2ypk":"Wuilt\'e Hoş Geldiniz!","6+NbDk":"Demo rezervasyonu yapın","6Qo/pN":"İşletmemi veya hizmetlerimi tanıt","8/N5KZ":"Bir Wuilt Uzmanı ile çalışmaya başlayın!","C5xzTC":"Premium","9+Ddtu":"İleri","9EYfT2":"Çalışmalarımı sergileyeceğim bir portföy oluştur","9QXm1E":"Başlangıç","9rFrCD":"Acelem yok, geliştirmek için yeterli zamanı ayırmak istiyorum","EBeRKF":"Aracımız yardımıyla bir web sitesi geliştirerek neyi başarmayı umuyorsunuz?","FMKUos":"Wuilt mağazanız hakkında yardıma mı ihtiyacınız var? Sizinle ilgilenip ihtiyacınız olan her konuda size yardımcı olacak bir Wuilt uzmanı ile demo rezervasyonu talebinde bulunun.","Fvkduq":"Ücretsiz 1 web sitesi sınırına ulaştınız","GLsLlN":"Wuilt web siteniz hakkında yardıma mı ihtiyacınız var? Bir Wuilt uzmanı ile demo rezervasyonu talebinde bulunun","GulPNa":"Siteyi Yükselt","KXBMcU":"Evet; <b>Wix, Shopify veya benzeri</b> web sitesi geliştiricilerini kullanarak","Ks9I9F":"Merhaba, bir Wuilt uzmanı ile demo rezervasyonu talebinde bulunmak istiyorum.","N4Hpam":"Soru {n}/{count}","Iaj8Lc":"Ürünün ihtiyaçlarımı karşılaması halinde ücretli sürümle devam etmeyi planlıyorum","In2qYh":"saat","Ntjkqd":"veya","O9iqJc":"Bir Wuilt uzmanı ile demo rezervasyonu talebinde bulunun!","Q+u+wA":"Wuilt Premium planlarından birine yükseltmek istediğiniz bir web sitesi seçin","KpA5Go":"Bu aşamada sadece platformu inceliyorum, kararımı sonra vereceğim","Rn9r4B":"Vereceğiniz yanıtlara göre Wuilt Uzmanlarımızdan biri en kısa süre içinde sizinle iletişime geçecektir. Bu kişiselleştirilmiş oturum, aracın kullanımı konusundaki soru işaretlerini açıklığa kavuşturup aklınızdaki soruları yanıtlayabilir. Pek çok kullanıcı bu yolla başarıya ulaşmıştır.","KqJr7f":"Kopyalamak için tıkla","S979K5":"Yükseltilecek web sitesini seç","LsiRP5":"Blog Yazarı/Sosyal Medya Fenomeni","SocNz0":"Mümkün olan en kısa süre içinde","TMOuJj":"Şunu yapabilirsiniz:","WIIvBw":"Bu, fazla zamanınız almayacak ancak bizimle yaşadığınız deneyimi kayda değer derecede iyileştirecektir.","X/wL/F":"Teşekkürler {username}!","XG6LwZ":"Hayır, ağırlıklı olarak <b>sosyal ağları</b> kullanıyorum","XcHpIe":"Daha önce hiç web sitesi oluşturdunuz veya yönettiniz mi?","Z1L61b":"Limited time offer just for you - Buy one year and get 2 years","YYU0VW":"Premium\'a Yükselt","cNEfr+":"Önceliğimiz, size benzersiz bir deneyim yaşatmaktır","cyR7Kh":"Geri","UvFUuq":"Öğrenci","TZr4xU":"dakika","fTCnY2":"Kişisel site veya blog oluştur","iR5sS4":"Kendime ait bir web sitesi oluşturmayı denemek istiyorum","kr/+YP":"Evet ama <b>olumsuz bir deneyimim</b> oldu","lf2D/K":"Zamanını siz seçin ve bir Wuilt uzmanı sizinle iletişime geçsin","bsHKmr":"Ajans","aVqg31":"gün","n9d4UT":"Hayır daha önce hiç web sitesi oluşturmadım","oD3Gja":"Demo talebinde bulun","oJTR7D":"Evet bir <b>serbest çalışanın veya web sitesi tasarım ajansının</b> yardımıyla","oZ5/ts":"Kendime ait bir mağaza oluşturmayı denemek istiyorum","pRTobQ":"İnternet üzerinden ürün satın (e-ticaret)","ptnrDO":"Merhaba {username}","q2pzzd":"Bunu özelleştirmek ve daha iyi bir destek sunmak üzere","sWX1rT":"Web sitenizin ne kadar kısa bir süre içinde kullanıma açılmasını istiyorsunuz?","lq6VRy":"ihtiyaçlarınızı anlamak için {count} kısa soru hazırladık","o/0Yia":"Hizmetin tamamen ücretsiz olduğu izlenimini edinmiştim","nCxC7R":"saniye","rp9UNw":"7 günlük ücretsiz deneme sonrasındaki planınızı en iyi şekilde aşağıdaki ifadelerden hangisi açıklar?","v7ZC0v":"Sadece birisinin web sitesini benim adıma oluşturması mümkünse devam edeceğim","zjiKv/":"İşletme Sahibi","zjK0dJ":"Sınırlı süresi olan size özel teklif - \\"{promoCode}\\" promosyon kodunu kullanarak %{discount} indirimden yararlanın"}');

/***/ })

}])
//# sourceMappingURL=src_bootstrap_tsx.js.map