(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],[,,,,,,,function(module,__webpack_exports__,__webpack_require__){"use strict";var D_React_Calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),D_React_Calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(2),D_React_Calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(4),D_React_Calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(3),react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__),_calculator_calculator_jsx__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(8),App=function(_React$Component){Object(D_React_Calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__.a)(App,_React$Component);var _super=Object(D_React_Calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__.a)(App);function App(){var _this;Object(D_React_Calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,App);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return _this=_super.call.apply(_super,[this].concat(args)),_this.state={value:""},_this.handleChange=function(btnValue){console.log("Clicked",btnValue),_this.setState({value:btnValue}),"="===btnValue?_this.setState({value:eval(_this.state.value)}):"C"===btnValue?_this.setState({value:_this.state.value.slice(0,-1)}):_this.setState({value:_this.state.value+btnValue})},_this}return Object(D_React_Calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(App,[{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"mainDiv"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",null,this.state.value),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_calculator_calculator_jsx__WEBPACK_IMPORTED_MODULE_5__.a,{accessFunction:this.handleChange}))}}]),App}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);__webpack_exports__.a=App},function(e,t,_){"use strict";var a=_(1),n=_(2),r=_(4),c=_(3),u=_(0),l=_.n(u),o=function(e){Object(r.a)(_,e);var t=Object(c.a)(_);function _(){return Object(a.a)(this,_),t.apply(this,arguments)}return Object(n.a)(_,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"calculator"},l.a.createElement("button",{value:"+",onClick:function(t){return e.props.accessFunction(t.target.value)}},"+"),l.a.createElement("button",{value:"-",onClick:function(t){return e.props.accessFunction(t.target.value)}},"-"),l.a.createElement("button",{value:"*",onClick:function(t){return e.props.accessFunction(t.target.value)}},"*"),l.a.createElement("button",{value:"/",onClick:function(t){return e.props.accessFunction(t.target.value)}},"/"),l.a.createElement("button",{value:"7",onClick:function(t){return e.props.accessFunction(t.target.value)}},"7"),l.a.createElement("button",{value:"8",onClick:function(t){return e.props.accessFunction(t.target.value)}},"8"),l.a.createElement("button",{value:"9",onClick:function(t){return e.props.accessFunction(t.target.value)}},"9"),l.a.createElement("button",{value:"=",onClick:function(t){return e.props.accessFunction(t.target.value)}},"="),l.a.createElement("button",{value:"4",onClick:function(t){return e.props.accessFunction(t.target.value)}},"4"),l.a.createElement("button",{value:"5",onClick:function(t){return e.props.accessFunction(t.target.value)}},"5"),l.a.createElement("button",{value:"6",onClick:function(t){return e.props.accessFunction(t.target.value)}},"6"),l.a.createElement("button",{value:"1",onClick:function(t){return e.props.accessFunction(t.target.value)}},"1"),l.a.createElement("button",{value:"2",onClick:function(t){return e.props.accessFunction(t.target.value)}},"2"),l.a.createElement("button",{value:"3",onClick:function(t){return e.props.accessFunction(t.target.value)}},"3"),l.a.createElement("button",{value:"0",onClick:function(t){return e.props.accessFunction(t.target.value)}},"0"),l.a.createElement("button",{value:".",onClick:function(t){return e.props.accessFunction(t.target.value)}},"."),l.a.createElement("button",{value:"C",onClick:function(t){return e.props.accessFunction(t.target.value)}},"C"))}}]),_}(l.a.Component);t.a=o},function(e,t,_){e.exports=_(10)},function(e,t,_){"use strict";_.r(t);var a=_(0),n=_.n(a),r=_(6),c=_.n(r),u=_(7);_(15);c.a.render(n.a.createElement(u.a,null),document.getElementById("root"))},,,,,function(e,t,_){}],[[9,1,2]]]);
//# sourceMappingURL=main.1a66e5ea.chunk.js.map