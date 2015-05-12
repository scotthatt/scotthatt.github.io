(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var React = _interopRequire(require("react"));

var _reactRouter = require("react-router");

var Router = _interopRequire(_reactRouter);

var DefaultRoute = _reactRouter.DefaultRoute;
var Link = _reactRouter.Link;
var Route = _reactRouter.Route;
var RouteHandler = _reactRouter.RouteHandler;

var jQuery = _interopRequire(require("jquery"));

global.jQuery = jQuery;

var bootstrap = _interopRequire(require("bootstrap"));

// var DefaultRoute = Router.DefaultRoute;
// var Link = Router.Link;
// import Route = Router.Route;
// import RouteHandler from Router.RouteHandler;

var routes = React.createElement(Route, { handler: HelloWorld, path: "/" });

Router.run(routes, Router.HistoryLocation, function (Handler) {
  React.render(React.createElement(Handler, null), document.getElementById("app"));
});

var HelloWorld = (function (_React$Component) {
  function HelloWorld() {
    _classCallCheck(this, HelloWorld);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(HelloWorld, _React$Component);

  _createClass(HelloWorld, {
    render: {
      value: function render() {
        return React.createElement(
          "div",
          null,
          React.createElement(
            "div",
            { className: "row" },
            React.createElement(
              "div",
              { className: "col-md-12" },
              React.createElement(
                "h1",
                null,
                "Hello World"
              )
            )
          )
        );
      }
    }
  });

  return HelloWorld;
})(React.Component);

;

React.render(React.createElement(HelloWorld, null), document.getElementById("app"));

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"bootstrap":"bootstrap","jquery":"jquery","react":"react","react-router":"react-router"}]},{},[1]);
