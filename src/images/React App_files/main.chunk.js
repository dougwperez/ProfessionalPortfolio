(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/App.css ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":root {\n    --jumbotron-padding-y: 3rem;\n}\n\n.jumbotron {\n    padding-top: 3rem;\n    padding-top: var(--jumbotron-padding-y);\n    padding-bottom: 3rem;\n    padding-bottom: var(--jumbotron-padding-y);\n    margin-bottom: 0;\n    background-color: blue;\n    box-shadow: 0 0.3px 0.7px rgba(0, 0, 0, 0.126),\n        0 0.9px 1.7px rgba(0, 0, 0, 0.179), 0 1.8px 3.5px rgba(0, 0, 0, 0.224),\n        0 3.7px 7.3px rgba(0, 0, 0, 0.277), 0 10px 20px rgba(0, 0, 0, 0.4);\n    -webkit-backdrop-filter: blur(20px);\n            backdrop-filter: blur(20px);\n    -webkit-transition: 0.5s ease;\n    transition: 0.5s ease;\n}\n@media (min-width: 768px) {\n    .jumbotron {\n        padding-top: calc(3rem * 2);\n        padding-top: calc(var(--jumbotron-padding-y) * 2);\n        padding-bottom: calc(3rem * 2);\n        padding-bottom: calc(var(--jumbotron-padding-y) * 2);\n    }\n}\n\n.jumbotron p:last-child {\n    margin-bottom: 0;\n}\n\n.jumbotron-heading {\n    font-weight: 300;\n}\n\n.jumbotron .container {\n    max-width: 40rem;\n}\n\nfooter {\n    padding-top: 3rem;\n    padding-bottom: 3rem;\n}\n\nfooter p {\n    margin-bottom: 0.25rem;\n}\n\n.box-shadow {\n    box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.05);\n}\n\n.frosted-glass {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 72vw;\n    height: 36vh;\n    box-shadow: 0 0.3px 0.7px rgba(0, 0, 0, 0.126),\n        0 0.9px 1.7px rgba(0, 0, 0, 0.179), 0 1.8px 3.5px rgba(0, 0, 0, 0.224),\n        0 3.7px 7.3px rgba(0, 0, 0, 0.277), 0 10px 20px rgba(0, 0, 0, 0.4);\n    -webkit-backdrop-filter: blur(20px);\n            backdrop-filter: blur(20px);\n    -webkit-transition: 0.5s ease;\n    transition: 0.5s ease;\n\n    /* &:hover {\n      box-shadow: 0 0.7px 1px rgba(0, 0, 0, 0.157),\n        0 1.7px 2.6px rgba(0, 0, 0, 0.224), 0 3.5px 5.3px rgba(0, 0, 0, 0.28),\n        0 7.3px 11px rgba(0, 0, 0, 0.346), 0 20px 30px rgba(0, 0, 0, 0.5);\n    } */\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n    margin: 0;\n    padding: 0;\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',\n        'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',\n        'Helvetica Neue', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    background-image: url(" + escape(__webpack_require__(/*! ./blueprint.jpg */ "./src/blueprint.jpg")) + ");\n}\n\ncode {\n    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n        monospace;\n}\n", ""]);

// exports


/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Example; });
/* harmony import */ var _Users_douglasperez_PostHR_Personal_Projects_react_bootstrap_album_template_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_douglasperez_PostHR_Personal_Projects_react_bootstrap_album_template_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_douglasperez_PostHR_Personal_Projects_react_bootstrap_album_template_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_douglasperez_PostHR_Personal_Projects_react_bootstrap_album_template_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_douglasperez_PostHR_Personal_Projects_react_bootstrap_album_template_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_douglasperez_PostHR_Personal_Projects_react_bootstrap_album_template_client_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/Header */ "./src/components/Header.jsx");
/* harmony import */ var _components_Main__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/Main */ "./src/components/Main.jsx");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/Footer */ "./src/components/Footer.jsx");
/* harmony import */ var _data_album__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./data/album */ "./src/data/album.json");
var _data_album__WEBPACK_IMPORTED_MODULE_10___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./data/album */ "./src/data/album.json", 1);
/* harmony import */ var _data_socialLinks__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./data/socialLinks */ "./src/data/socialLinks.json");
var _data_socialLinks__WEBPACK_IMPORTED_MODULE_11___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./data/socialLinks */ "./src/data/socialLinks.json", 1);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_13__);






var _jsxFileName = "/Users/douglasperez/PostHR Personal Projects/react-bootstrap-album-template/client/src/App.js";









var Example =
/*#__PURE__*/
function (_React$Component) {
  Object(_Users_douglasperez_PostHR_Personal_Projects_react_bootstrap_album_template_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Example, _React$Component);

  function Example(props) {
    var _this;

    Object(_Users_douglasperez_PostHR_Personal_Projects_react_bootstrap_album_template_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Example);

    _this = Object(_Users_douglasperez_PostHR_Personal_Projects_react_bootstrap_album_template_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_douglasperez_PostHR_Personal_Projects_react_bootstrap_album_template_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Example).call(this, props));
    _this.getPrints = _this.getPrints.bind(Object(_Users_douglasperez_PostHR_Personal_Projects_react_bootstrap_album_template_client_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_Users_douglasperez_PostHR_Personal_Projects_react_bootstrap_album_template_client_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)));
    _this.toggleNavbar = _this.toggleNavbar.bind(Object(_Users_douglasperez_PostHR_Personal_Projects_react_bootstrap_album_template_client_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_Users_douglasperez_PostHR_Personal_Projects_react_bootstrap_album_template_client_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)));
    _this.state = {
      collapsed: true,
      socialLinks: _data_socialLinks__WEBPACK_IMPORTED_MODULE_11__,
      album: _data_album__WEBPACK_IMPORTED_MODULE_10__,
      apiResponse: '',
      prints: []
    };
    return _this;
  }

  Object(_Users_douglasperez_PostHR_Personal_Projects_react_bootstrap_album_template_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Example, [{
    key: "toggleNavbar",
    value: function toggleNavbar() {
      this.setState({
        collapsed: !this.state.collapsed
      });
    } //test

  }, {
    key: "callAPI",
    value: function callAPI() {
      var _this2 = this;

      fetch('http://localhost:8000/testAPI').then(function (res) {
        return res.text();
      }).then(function (res) {
        return _this2.setState({
          apiResponse: res
        });
      });
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      this.callAPI();
    }
  }, {
    key: "getPrints",
    value: function getPrints(query) {
      var _this3 = this;

      console.log('testing query', query);
      var proxyurl = 'https://cors-anywhere.herokuapp.com/'; // res.header("Access-Control-Allow-Headers", "x-requested-with, x-requested-by");

      axios__WEBPACK_IMPORTED_MODULE_13___default.a.get("".concat(proxyurl, "https://customsearch.googleapis.com/customsearch/v1/siterestrict?num=9&cx=dc1c0a26376a66714&q=").concat(query, "&key=AIzaSyCfI6Dgf4vFzx60JupuHtviiS_tGIjbFj0")) //  res.header("Access-Control-Allow-Headers", "x-requested-with, x-requested-by");
      .then(function (response) {
        console.log('authored response.data', response.data.items);

        _this3.setState({
          prints: response.data.items
        });
      }).catch(function (error) {
        return console.log(error);
      });
    } //     GET https://customsearch.googleapis.com/customsearch/v1?num=5&key=[YOUR_API_KEY] HTTP/1.1
    // Accept: application/json
    //     GET https://customsearch.googleapis.com/customsearch/v1?cx=dc1c0a26376a66714&q=clock&key=AIzaSyCfI6Dgf4vFzx60JupuHtviiS_tGIjbFj0
    //     HTTP/1.1
    // Accept: application/json
    // GET https://customsearch.googleapis.com/customsearch/v1?cx=dc1c0a26376a66714&q=clock&siteSearch=https%3A%2F%2Fjsfiddle.net%2F&key=AIzaSyCfI6Dgf4vFzx60JupuHtviiS_tGIjbFj0 HTTP/1.1
    // Accept: application/json
    //   https://cse.google.com/cse?cx=dc1c0a26376a66714
    // getFiddles2() {
    //     axios
    //         .get(
    //             'https://www.googleapis.com/customsearch/v1?key=AIzaSyCfI6Dgf4vFzx60JupuHtviiS_tGIjbFj0&cx=dc1c0a26376a66714:omuauf_lfve&q=clocks'
    //         )
    //         .then(response => {
    //             console.log('Yessss', response);
    //         })
    //         .catch(error => {
    //             console.error(error);
    //         });
    // }

  }, {
    key: "challengesByUser",
    value: function challengesByUser() {
      var _this4 = this;

      var user = 'Voile';
      var proxyurl = 'https://cors-anywhere.herokuapp.com/';
      axios__WEBPACK_IMPORTED_MODULE_13___default.a.get("".concat(proxyurl, "https://www.codewars.com/api/v1/users/").concat(user, "/code-challenges/completed?page=0?access_key=wH8ZhAsdT8xxsxJ1eJx3")).then(function (response) {
        console.log('challengesByUser response.data.data', response.data.data);

        _this4.setState({
          challengeIds: response.data.data
        }); //TOO MANY REQUESTS OTHERWISE< UNCOMENT LATER
        //this.getChallenge()

      }).catch(function (error) {
        return console.log(error);
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getPrints();
      this.challengesByUser();
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_7__["default"], {
        collapsed: this.state.collapsed,
        toggleNavbar: this.toggleNavbar,
        socialLinks: this.state.socialLinks,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Main__WEBPACK_IMPORTED_MODULE_8__["default"], {
        album: this.state.album,
        prints: this.state.prints,
        getPrints: this.getPrints,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }));
    }
  }]);

  return Example;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);



/***/ }),

/***/ "./src/blueprint.jpg":
/*!***************************!*\
  !*** ./src/blueprint.jpg ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/blueprint.0cf8c857.jpg";

/***/ }),

/***/ "./src/components/Album.jsx":
/*!**********************************!*\
  !*** ./src/components/Album.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _IframePic_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IframePic.jsx */ "./src/components/IframePic.jsx");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.es.js");
var _jsxFileName = "/Users/douglasperez/PostHR Personal Projects/react-bootstrap-album-template/client/src/components/Album.jsx";




var Album = function Album(_ref) {
  var prints = _ref.prints;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "album py-5 bg-light",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, prints.map(function (item, key) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      md: "4",
      key: key,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
      className: "mb-4 box-shadow",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardImg"], {
      top: true,
      width: "100%",
      src: item.src,
      alt: item.altText,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardBody"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardText"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, item.displayLink, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }), item.link), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_IframePic_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
      name: item.displayLink,
      link: item.link,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "d-flex justify-content-between align-items-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["ButtonGroup"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      outline: true,
      color: "secondary",
      size: "sm",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, "View"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      outline: true,
      color: "secondary",
      size: "sm",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, "Edit")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
      className: "text-muted",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, item.time)))));
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Album);

/***/ }),

/***/ "./src/components/Footer.jsx":
/*!***********************************!*\
  !*** ./src/components/Footer.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.es.js");
var _jsxFileName = "/Users/douglasperez/PostHR Personal Projects/react-bootstrap-album-template/client/src/components/Footer.jsx";



var Footer = function Footer(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
    className: "text-muted",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "float-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Back to top")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Album example is \xA9 Bootstrap, but please download and customize it for yourself!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "This reactstrap adaptation available for download", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://github.com/nas5w/react-bootstrap-album-template",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "here"), ".")));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/components/Header.jsx":
/*!***********************************!*\
  !*** ./src/components/Header.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.es.js");
var _jsxFileName = "/Users/douglasperez/PostHR Personal Projects/react-bootstrap-album-template/client/src/components/Header.jsx";



var Header = function Header(_ref) {
  var collapsed = _ref.collapsed,
      toggleNavbar = _ref.toggleNavbar,
      socialLinks = _ref.socialLinks;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"], {
    color: "dark",
    dark: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Collapse"], {
    isOpen: !collapsed,
    navbar: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: "8",
    md: "7",
    className: "py-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "text-white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "About"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-muted",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "Add some information about the album below, the author, or any other background context. Make it a few sentences long so folks can pick up some informative tidbits. Then, link them off to some social networking sites or contact information.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: "4",
    md: {
      offset: 1
    },
    className: "py-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "text-white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "Contact"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "list-unstyled",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, socialLinks.map(function (link, key) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: key,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: link.url,
      className: "text-white",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, link.text));
  }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavbarBrand"], {
    href: "/",
    className: "d-flex align-items-center mr-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "mr-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
    cx: "12",
    cy: "13",
    r: "4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, "Album")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavbarToggler"], {
    onClick: toggleNavbar,
    className: "mr-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/components/IframePic.jsx":
/*!**************************************!*\
  !*** ./src/components/IframePic.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IframePic; });
/* harmony import */ var _Users_douglasperez_PostHR_Personal_Projects_react_bootstrap_album_template_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_douglasperez_PostHR_Personal_Projects_react_bootstrap_album_template_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_douglasperez_PostHR_Personal_Projects_react_bootstrap_album_template_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_douglasperez_PostHR_Personal_Projects_react_bootstrap_album_template_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_douglasperez_PostHR_Personal_Projects_react_bootstrap_album_template_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);





var _jsxFileName = "/Users/douglasperez/PostHR Personal Projects/react-bootstrap-album-template/client/src/components/IframePic.jsx";


var IframePic =
/*#__PURE__*/
function (_React$Component) {
  Object(_Users_douglasperez_PostHR_Personal_Projects_react_bootstrap_album_template_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(IframePic, _React$Component);

  function IframePic(props) {
    var _this;

    Object(_Users_douglasperez_PostHR_Personal_Projects_react_bootstrap_album_template_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, IframePic);

    _this = Object(_Users_douglasperez_PostHR_Personal_Projects_react_bootstrap_album_template_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_douglasperez_PostHR_Personal_Projects_react_bootstrap_album_template_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(IframePic).call(this, props));
    _this.state = {};
    return _this;
  }

  Object(_Users_douglasperez_PostHR_Personal_Projects_react_bootstrap_album_template_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(IframePic, [{
    key: "render",
    value: function render() {
      console.log('this.props.link', this.props.link); // let codePenFrame = this.props.link.replace('/pen/', '/full/');
      // console.log('codePenFrame', codePenFrame);

      if (this.props.name === 'codepen.io') {
        var codePenFrame = this.props.link.replace('/pen/', '/full/');
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("iframe", {
          src: codePenFrame,
          title: "codepen iframe",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 15
          },
          __self: this
        });
      }

      if (this.props.name === 'codesandbox.io') {
        var split = this.props.link.split('/s/');
        var identifier = split[1];
        var codeSandboxFrame = "https://codesandbox.io/embed/".concat(identifier, "?fontsize=14&hidenavigation=1&theme=dark&view=preview");
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("iframe", {
          src: codeSandboxFrame,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          },
          __self: this
        });
      }

      if (this.props.name === 'jsfiddle.net') {
        // let split = this.props.link.split('/s/');
        // let identifier = split[1];
        // let codeSandboxFrame = `https://codesandbox.io/embed/${identifier}?fontsize=14&hidenavigation=1&theme=dark&view=preview`;
        // console.log('identifier', identifier);
        var removeHttp = this.props.link.substring(6);
        var jsFiddleFrame = removeHttp.concat('embedded/result/');
        console.log('jsFiddleFrame', jsFiddleFrame);
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("iframe", {
          width: "100%",
          height: "300",
          src: jsFiddleFrame,
          allowfullscreen: "allowfullscreen",
          allowpaymentrequest: true,
          frameborder: "0",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          },
          __self: this
        });
      } else {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          },
          __self: this
        }, "Not codepen");
      }
    }
  }]);

  return IframePic;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);


{
  /* <iframe
  width="100%"
  height="300"
  src="//jsfiddle.net/Daniel_Hug/pvk6p/embedded/result/"
  allowfullscreen="allowfullscreen"
  allowpaymentrequest
  frameborder="0"
  />; */
}

/***/ }),

/***/ "./src/components/Main.jsx":
/*!*********************************!*\
  !*** ./src/components/Main.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Album__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Album */ "./src/components/Album.jsx");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.es.js");
/* harmony import */ var _SearchBar_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SearchBar.jsx */ "./src/components/SearchBar.jsx");
var _jsxFileName = "/Users/douglasperez/PostHR Personal Projects/react-bootstrap-album-template/client/src/components/Main.jsx";





var Main = function Main(_ref) {
  var album = _ref.album,
      prints = _ref.prints,
      getPrints = _ref.getPrints;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
    role: "main",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Jumbotron"], {
    className: "text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "jumbotron-heading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Album example"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "lead text-muted",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "Something short and leading about the collection below\u2014its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SearchBar_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
    getPrints: getPrints,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    color: "primary",
    className: "mx-1 my-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Main call to action"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    color: "secondary",
    className: "my-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "Secondary action")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Album__WEBPACK_IMPORTED_MODULE_1__["default"], {
    album: album,
    prints: prints,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Main);

/***/ }),

/***/ "./src/components/SearchBar.jsx":
/*!**************************************!*\
  !*** ./src/components/SearchBar.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_douglasperez_PostHR_Personal_Projects_react_bootstrap_album_template_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_douglasperez_PostHR_Personal_Projects_react_bootstrap_album_template_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_douglasperez_PostHR_Personal_Projects_react_bootstrap_album_template_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_douglasperez_PostHR_Personal_Projects_react_bootstrap_album_template_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_douglasperez_PostHR_Personal_Projects_react_bootstrap_album_template_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_douglasperez_PostHR_Personal_Projects_react_bootstrap_album_template_client_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);






var _jsxFileName = "/Users/douglasperez/PostHR Personal Projects/react-bootstrap-album-template/client/src/components/SearchBar.jsx";
 // import ReactDOM from 'react-dom';

var SearchBar =
/*#__PURE__*/
function (_React$Component) {
  Object(_Users_douglasperez_PostHR_Personal_Projects_react_bootstrap_album_template_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(SearchBar, _React$Component);

  function SearchBar(props) {
    var _this;

    Object(_Users_douglasperez_PostHR_Personal_Projects_react_bootstrap_album_template_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SearchBar);

    _this = Object(_Users_douglasperez_PostHR_Personal_Projects_react_bootstrap_album_template_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_douglasperez_PostHR_Personal_Projects_react_bootstrap_album_template_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(SearchBar).call(this, props));
    _this.state = {
      value: ''
    };
    _this.handleChange = _this.handleChange.bind(Object(_Users_douglasperez_PostHR_Personal_Projects_react_bootstrap_album_template_client_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_Users_douglasperez_PostHR_Personal_Projects_react_bootstrap_album_template_client_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)));
    _this.handleSubmit = _this.handleSubmit.bind(Object(_Users_douglasperez_PostHR_Personal_Projects_react_bootstrap_album_template_client_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_Users_douglasperez_PostHR_Personal_Projects_react_bootstrap_album_template_client_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)));
    return _this;
  }

  Object(_Users_douglasperez_PostHR_Personal_Projects_react_bootstrap_album_template_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SearchBar, [{
    key: "handleChange",
    value: function handleChange(event) {
      this.setState({
        value: event.target.value
      });
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(event) {
      event.preventDefault();
      this.props.getPrints(this.state.value);
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("form", {
        onSubmit: this.handleSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        placeholder: "What do you want to build?",
        type: "text",
        value: this.state.value,
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        type: "submit",
        value: "Submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }));
    }
  }]);

  return SearchBar;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (SearchBar);

/***/ }),

/***/ "./src/data/album.json":
/*!*****************************!*\
  !*** ./src/data/album.json ***!
  \*****************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, default */
/***/ (function(module) {

module.exports = [{"src":"https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180","description":"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.","altText":"Item alt text","time":"9 mins"},{"src":"https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180","description":"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.","altText":"Item alt text","time":"9 mins"},{"src":"https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180","description":"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.","altText":"Item alt text","time":"9 mins"},{"src":"https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180","description":"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.","altText":"Item alt text","time":"9 mins"},{"src":"https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180","description":"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.","altText":"Item alt text","time":"9 mins"},{"src":"https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180","description":"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.","altText":"Item alt text","time":"9 mins"},{"src":"https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180","description":"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.","altText":"Item alt text","time":"9 mins"},{"src":"https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180","description":"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.","altText":"Item alt text","time":"9 mins"},{"src":"https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180","description":"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.","altText":"Item alt text","time":"9 mins"}];

/***/ }),

/***/ "./src/data/socialLinks.json":
/*!***********************************!*\
  !*** ./src/data/socialLinks.json ***!
  \***********************************/
/*! exports provided: 0, 1, 2, default */
/***/ (function(module) {

module.exports = [{"text":"Follow on Twitter","url":"http://www.twitter.com/nas5w"},{"text":"Like on Facebook","url":"#"},{"text":"Email me","url":"#"}];

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ "./node_modules/bootstrap/dist/css/bootstrap.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
var _jsxFileName = "/Users/douglasperez/PostHR Personal Projects/react-bootstrap-album-template/client/src/index.js";






react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}), document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_5__["unregister"]();

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read http://bit.ly/CRA-PWA
var isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.1/8 is considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) { var publicUrl; }
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(function (registration) {
    registration.onupdatefound = function () {
      var installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = function () {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See http://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(function (error) {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl).then(function (response) {
    // Ensure service worker exists, and that we really are getting a JS file.
    var contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(function (registration) {
        registration.unregister().then(function () {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(function () {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(function (registration) {
      registration.unregister();
    });
  }
}

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/douglasperez/PostHR Personal Projects/react-bootstrap-album-template/client/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/douglasperez/PostHR Personal Projects/react-bootstrap-album-template/client/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime~main",1]]]);
//# sourceMappingURL=main.chunk.js.map