(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./kramaaClient/ProjectFormModal.js":
/*!******************************************!*\
  !*** ./kramaaClient/ProjectFormModal.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ \"./node_modules/reactstrap/es/index.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\n\n\n\nvar ProjectFormModal =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(ProjectFormModal, _Component);\n\n  function ProjectFormModal(props) {\n    var _this;\n\n    _classCallCheck(this, ProjectFormModal);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(ProjectFormModal).call(this, props));\n    _this.state = {\n      modal: true,\n      name: '',\n      description: '',\n      tokenName: '',\n      tokenSymbol: '',\n      industry: '',\n      subIndustry: '',\n      subIndustryList: ''\n    };\n    _this.toggle = _this.toggle.bind(_assertThisInitialized(_assertThisInitialized(_this)));\n    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));\n    _this.handleIndustryChange = _this.handleIndustryChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));\n    _this.onSubmitForm = _this.onSubmitForm.bind(_assertThisInitialized(_assertThisInitialized(_this)));\n    return _this;\n  }\n\n  _createClass(ProjectFormModal, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      if (this.props.isClosed == \"true\") {\n        console.log(\"Props\", this.props.isOpen);\n        console.log(\"cLOSED MODAL\");\n        this.setState({\n          modal: false\n        });\n      }\n    }\n  }, {\n    key: \"toggle\",\n    value: function toggle() {\n      this.setState({\n        modal: !this.state.modal\n      });\n    }\n  }, {\n    key: \"handleChange\",\n    value: function handleChange(e) {\n      var _e$target = e.target,\n          name = _e$target.name,\n          value = _e$target.value;\n      this.setState(_defineProperty({}, name, value));\n    }\n  }, {\n    key: \"handleIndustryChange\",\n    value: function handleIndustryChange(e) {\n      var _e$target2 = e.target,\n          name = _e$target2.name,\n          value = _e$target2.value;\n      this.setState(_defineProperty({}, name, value));\n\n      switch (value) {\n        case \"1\":\n          console.log(\"1\");\n          break;\n      }\n    }\n  }, {\n    key: \"onSubmitForm\",\n    value: function onSubmitForm(e) {\n      e.preventDefault();\n      this.props.parentHandler(this.state.name, this.state.industry, this.state.subIndustry, this.state.name, this.state.name);\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this$state = this.state,\n          name = _this$state.name,\n          description = _this$state.description,\n          industry = _this$state.industry,\n          subIndustry = _this$state.subIndustry,\n          tokenName = _this$state.tokenName,\n          tokenSymbol = _this$state.tokenSymbol;\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"animated fadeIn\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Modal\"], {\n        isOpen: this.state.modal,\n        toggle: this.toggle,\n        className: this.props.className\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"ModalHeader\"], {\n        toggle: this.toggle\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"strong\", null, \"New Project Form\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"ModalBody\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Form\"], {\n        className: \"form-horizontal\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"FormGroup\"], {\n        row: true\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n        md: \"3\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Label\"], {\n        htmlFor: \"text-input\"\n      }, \"Project Name\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n        xs: \"12\",\n        md: \"9\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Input\"], {\n        type: \"text\",\n        name: \"name\",\n        value: name,\n        onChange: this.handleChange,\n        id: \"text-input\",\n        placeholder: \"Text\"\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"FormText\"], {\n        color: \"muted\"\n      }, \"This is a help text\"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"FormGroup\"], {\n        row: true\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n        md: \"3\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Label\"], {\n        htmlFor: \"text-input\"\n      }, \"Project Description\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n        xs: \"12\",\n        md: \"9\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Input\"], {\n        type: \"text\",\n        id: \"text-input\",\n        name: \"text-input\",\n        placeholder: \"Text\"\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"FormText\"], {\n        color: \"muted\"\n      }, \"Describe your project\"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"FormGroup\"], {\n        row: true\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n        md: \"3\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Label\"], {\n        htmlFor: \"select\"\n      }, \"Select Industry\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n        xs: \"12\",\n        md: \"9\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Input\"], {\n        type: \"select\",\n        name: \"industry\",\n        value: industry,\n        onChange: this.handleIndustryChange,\n        id: \"select\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", {\n        value: \"0\"\n      }, \"Please select\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", {\n        value: \"Smart City\"\n      }, \"Smart City\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", {\n        value: \"Building\"\n      }, \"Building\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", {\n        value: \"Energy\"\n      }, \"Energy\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", {\n        value: \"Automobile\"\n      }, \"Automobile\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", {\n        value: \"Retail\"\n      }, \"Retail\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", {\n        value: \"Healthcare\"\n      }, \"Healthcare\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", {\n        value: \"Agriculture\"\n      }, \"Agriculture\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", {\n        value: \"Supply Chain\"\n      }, \"Supply Chain\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", {\n        value: \"Industry\"\n      }, \"Industry\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", {\n        value: \"Other\"\n      }, \"Other\")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"FormGroup\"], {\n        row: true\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n        md: \"3\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Label\"], {\n        htmlFor: \"text-input\"\n      }, \"Sub Industry\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n        xs: \"12\",\n        md: \"9\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Input\"], {\n        type: \"text\",\n        name: \"subIndustry\",\n        value: subIndustry,\n        onChange: this.handleChange,\n        id: \"text-input\",\n        placeholder: \"Text\"\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"FormText\"], {\n        color: \"muted\"\n      }, \"This is a help text\"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"ModalFooter\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n        color: \"primary\",\n        onClick: this.onSubmitForm\n      }, \"Create Project\"))))));\n    }\n  }]);\n\n  return ProjectFormModal;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectFormModal);\n\n//# sourceURL=webpack:///./kramaaClient/ProjectFormModal.js?");

/***/ })

}]);