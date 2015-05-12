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

var Nav = _interopRequire(require("./nav"));

var ImageGrid = _interopRequire(require("./image-grid"));

var Bio = _interopRequire(require("./bio"));

var Exhibitions = _interopRequire(require("./exhibitions"));

var Statement = _interopRequire(require("./statement"));

var App = (function (_React$Component) {
  function App() {
    _classCallCheck(this, App);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(App, _React$Component);

  _createClass(App, {
    render: {
      value: function render() {
        return React.createElement(
          "div",
          null,
          React.createElement(
            "div",
            { className: "col-md-3" },
            React.createElement(Nav, null)
          ),
          React.createElement(
            "div",
            { className: "col-md-9" },
            React.createElement(RouteHandler, null)
          )
        );
      }
    }
  });

  return App;
})(React.Component);

;

var routes = React.createElement(
  Route,
  { handler: App, name: "app", path: "/" },
  React.createElement(DefaultRoute, { handler: ImageGrid }),
  React.createElement(Route, { name: "bio", handler: Bio }),
  React.createElement(Route, { name: "exhibitions", handler: Exhibitions }),
  React.createElement(Route, { name: "statement", handler: Statement })
);

//bio, exhibition history, artist statement

Router.run(routes, function (Handler) {
  React.render(React.createElement(Handler, null), document.getElementById("app"));
});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./bio":2,"./exhibitions":3,"./image-grid":4,"./nav":5,"./statement":6,"bootstrap":"bootstrap","jquery":"jquery","react":"react","react-router":"react-router"}],2:[function(require,module,exports){
"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var React = _interopRequire(require("react"));

var Bio = (function (_React$Component) {
  function Bio() {
    _classCallCheck(this, Bio);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(Bio, _React$Component);

  _createClass(Bio, {
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
                "Bio"
              )
            )
          )
        );
      }
    }
  });

  return Bio;
})(React.Component);

module.exports = Bio;

},{"react":"react"}],3:[function(require,module,exports){
"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var React = _interopRequire(require("react"));

var Exhibitions = (function (_React$Component) {
  function Exhibitions() {
    _classCallCheck(this, Exhibitions);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(Exhibitions, _React$Component);

  _createClass(Exhibitions, {
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
                "Previous Exhibitions"
              )
            )
          )
        );
      }
    }
  });

  return Exhibitions;
})(React.Component);

module.exports = Exhibitions;

},{"react":"react"}],4:[function(require,module,exports){
"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var React = _interopRequire(require("react"));

var ImageGrid = (function (_React$Component) {
  function ImageGrid() {
    _classCallCheck(this, ImageGrid);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(ImageGrid, _React$Component);

  _createClass(ImageGrid, {
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
                "Image Grid"
              )
            )
          )
        );
      }
    }
  });

  return ImageGrid;
})(React.Component);

module.exports = ImageGrid;

},{"react":"react"}],5:[function(require,module,exports){
"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var React = _interopRequire(require("react"));

var Link = require("react-router").Link;

var Nav = (function (_React$Component) {
  function Nav() {
    _classCallCheck(this, Nav);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(Nav, _React$Component);

  _createClass(Nav, {
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
                "scott hatt"
              ),
              React.createElement(
                "ul",
                null,
                React.createElement(
                  "li",
                  null,
                  React.createElement(
                    Link,
                    { to: "app" },
                    "Gallery"
                  )
                ),
                React.createElement(
                  "li",
                  null,
                  React.createElement(
                    Link,
                    { to: "bio" },
                    "Bio"
                  )
                ),
                React.createElement(
                  "li",
                  null,
                  React.createElement(
                    Link,
                    { to: "exhibitions" },
                    "Previous Exhibitions"
                  )
                ),
                React.createElement(
                  "li",
                  null,
                  React.createElement(
                    Link,
                    { to: "statement" },
                    "Statement"
                  )
                )
              )
            )
          )
        );
      }
    }
  });

  return Nav;
})(React.Component);

module.exports = Nav;

},{"react":"react","react-router":"react-router"}],6:[function(require,module,exports){
"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var React = _interopRequire(require("react"));

var Statement = (function (_React$Component) {
  function Statement() {
    _classCallCheck(this, Statement);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(Statement, _React$Component);

  _createClass(Statement, {
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
                "Statement"
              )
            )
          )
        );
      }
    }
  });

  return Statement;
})(React.Component);

module.exports = Statement;

},{"react":"react"}]},{},[1]);
