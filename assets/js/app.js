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
var Redirect = _reactRouter.Redirect;

var jQuery = _interopRequire(require("jquery"));

global.jQuery = require("jquery");

var bootstrap = _interopRequire(require("bootstrap"));

var _ = _interopRequire(require("lodash"));

global._ = _;

var Nav = _interopRequire(require("./nav"));

var ImageGrid = _interopRequire(require("./image-grid"));

var ImageDetail = _interopRequire(require("./image-detail"));

var Bio = _interopRequire(require("./bio"));

var Exhibitions = _interopRequire(require("./exhibitions"));

var Statement = _interopRequire(require("./statement"));

var images = require("../data/images").images;

var App = (function (_React$Component) {
  function App() {
    _classCallCheck(this, App);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(App, _React$Component);

  _createClass(App, {
    getGalleries: {
      value: function getGalleries(images) {
        var galleries = _.pluck(images, "gallery");
        var merged = [];
        merged = merged.concat.apply(merged, galleries);
        return _.uniq(merged);
      }
    },
    render: {
      value: function render() {
        return React.createElement(
          "div",
          { className: "container-fluid" },
          React.createElement(
            "div",
            { className: "row" },
            React.createElement(
              "div",
              { className: "col-md-12" },
              React.createElement(Nav, { galleries: this.getGalleries(images) })
            )
          ),
          React.createElement(
            "div",
            { className: "row" },
            React.createElement(
              "div",
              { className: "col-md-12" },
              React.createElement(RouteHandler, null)
            )
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
  React.createElement(Redirect, { from: "/", to: "/gallery/2015" }),
  React.createElement(Route, { name: "gallery", path: "/gallery/:galleryId", handler: ImageGrid }),
  React.createElement(Route, { name: "bio", handler: Bio }),
  React.createElement(Route, { name: "exhibitions", handler: Exhibitions }),
  React.createElement(Route, { name: "statement", handler: Statement }),
  React.createElement(Route, { name: "image-detail", path: "/image/:imageKey", handler: ImageDetail })
);

//bio, exhibition history, artist statement

Router.run(routes, function (Handler) {
  React.render(React.createElement(Handler, null), document.getElementById("app"));
});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../data/images":8,"./bio":2,"./exhibitions":3,"./image-detail":4,"./image-grid":5,"./nav":6,"./statement":7,"bootstrap":"bootstrap","jquery":"jquery","lodash":"lodash","react":"react","react-router":"react-router"}],2:[function(require,module,exports){
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
          { className: "col-md-12" },
          React.createElement(
            "h1",
            null,
            "Bio"
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
          { className: "col-md-12" },
          React.createElement(
            "h1",
            null,
            "Previous Exhibitions"
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

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var React = _interopRequire(require("react"));

var _reactRouter = require("react-router");

var Link = _reactRouter.Link;
var Navigation = _reactRouter.Navigation;

var images = require("../data/images").images;

var ImageDetail = (function (_React$Component) {
  function ImageDetail(props) {
    _classCallCheck(this, ImageDetail);

    _get(Object.getPrototypeOf(ImageDetail.prototype), "constructor", this).call(this, props);
    var key = this.props.params.imageKey;
    var image = _.find(images, function (img) {
      return _.kebabCase(img.title) === key;
    });

    this._clickHandler = this._clickHandler.bind(this);
    this.state = {
      image: image
    };
  }

  _inherits(ImageDetail, _React$Component);

  _createClass(ImageDetail, {
    _clickHandler: {
      value: function _clickHandler(e) {
        this.context.router.goBack();
      }
    },
    render: {
      value: function render() {
        var image = this.state.image;
        var src = "assets/images/fullSize/" + image.image + ".jpg";
        return React.createElement(
          "div",
          { className: "container-fluid" },
          React.createElement(
            "div",
            { className: "row" },
            React.createElement(
              "div",
              { className: "col-md-12 text-right" },
              React.createElement(
                "h4",
                null,
                React.createElement(
                  "a",
                  { onClick: this._clickHandler },
                  React.createElement("i", { className: "fa fa-chevron-left" }),
                  " Back"
                )
              )
            )
          ),
          React.createElement(
            "div",
            { className: "row" },
            React.createElement(
              "div",
              { className: "col-md-4 col-md-offset-2" },
              React.createElement("img", { src: src, className: "img-responsive fullSize" })
            ),
            React.createElement(
              "div",
              { className: "col-md-4 image-detail" },
              React.createElement(
                "h2",
                null,
                image.title
              ),
              React.createElement(
                "p",
                { "class": "date" },
                image.year
              ),
              React.createElement(
                "p",
                { "class": "medium" },
                image.medium
              ),
              React.createElement(
                "p",
                { "class": "dimensions" },
                image.height,
                " x ",
                image.width
              ),
              React.createElement(
                "p",
                { "class": "location" },
                image.location
              )
            )
          )
        );
      }
    }
  });

  return ImageDetail;
})(React.Component);

module.exports = ImageDetail;

ImageDetail.contextTypes = {
  router: React.PropTypes.func
};

ImageDetail.mixins = [Navigation];

},{"../data/images":8,"react":"react","react-router":"react-router"}],5:[function(require,module,exports){
"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var React = _interopRequire(require("react"));

var Link = require("react-router").Link;

var images = require("../data/images").images;

var Thumbnail = (function (_React$Component) {
  function Thumbnail(props) {
    _classCallCheck(this, Thumbnail);

    _get(Object.getPrototypeOf(Thumbnail.prototype), "constructor", this).call(this, props);
  }

  _inherits(Thumbnail, _React$Component);

  _createClass(Thumbnail, {
    render: {
      value: function render() {
        var image = this.props.image;
        var src = "assets/images/thumbnails/" + image.image + "-thmb.jpg";
        var href = "/image/" + image.link;
        return React.createElement(
          "div",
          { className: "col-lg-2 col-md-3 col-sm-4 col-xs-12 box" },
          React.createElement(
            Link,
            { to: href },
            React.createElement("img", { src: src, className: "img-responsive" })
          )
        );
      }
    }
  });

  return Thumbnail;
})(React.Component);

var ImageGrid = (function (_React$Component2) {
  function ImageGrid(props) {
    _classCallCheck(this, ImageGrid);

    _get(Object.getPrototypeOf(ImageGrid.prototype), "constructor", this).call(this, props);
  }

  _inherits(ImageGrid, _React$Component2);

  _createClass(ImageGrid, {
    filterImageByGallery: {
      value: function filterImageByGallery(images) {
        return _.sortBy(_.filter(images, { gallery: [this.props.params.galleryId] }), "order");
      }
    },
    createKeyPath: {
      value: function createKeyPath(title) {
        return _.kebabCase(title);
      }
    },
    render: {
      value: function render() {
        var self = this;
        return React.createElement(
          "div",
          { className: "col-md-12" },
          _.map(this.filterImageByGallery(images), function (image) {
            var key = self.createKeyPath(image.title);
            image.link = key;
            return React.createElement(Thumbnail, { image: image, key: key });
          })
        );
      }
    }
  });

  return ImageGrid;
})(React.Component);

module.exports = ImageGrid;

},{"../data/images":8,"react":"react","react-router":"react-router"}],6:[function(require,module,exports){
"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var React = _interopRequire(require("react"));

var Link = require("react-router").Link;

var Nav = (function (_React$Component) {
  function Nav(props) {
    _classCallCheck(this, Nav);

    _get(Object.getPrototypeOf(Nav.prototype), "constructor", this).call(this, props);
  }

  _inherits(Nav, _React$Component);

  _createClass(Nav, {
    render: {
      value: function render() {
        return React.createElement(
          "nav",
          { className: "navbar navbar-default navbar-fixed-top" },
          React.createElement(
            "div",
            { className: "container-fluid" },
            React.createElement(
              "div",
              { className: "navbar-header" },
              React.createElement(
                "button",
                { type: "button", className: "navbar-toggle collapsed", "data-toggle": "collapse", "data-target": "#nav-collapse", "aria-expanded": "false" },
                React.createElement(
                  "span",
                  { className: "sr-only" },
                  "Toggle navigation"
                ),
                React.createElement("span", { className: "icon-bar" }),
                React.createElement("span", { className: "icon-bar" }),
                React.createElement("span", { className: "icon-bar" })
              ),
              React.createElement(
                "a",
                { className: "navbar-brand", href: "#" },
                "scott hatt"
              )
            ),
            React.createElement(
              "div",
              { className: "collapse navbar-collapse", id: "nav-collapse" },
              React.createElement(
                "ul",
                { className: "nav navbar-nav" },
                React.createElement(
                  "li",
                  { className: "dropdown" },
                  React.createElement(
                    "a",
                    { href: "#", className: "dropdown-toggle", "data-toggle": "dropdown", role: "button" },
                    "Galleries",
                    React.createElement("span", { className: "caret" })
                  ),
                  React.createElement(
                    "ul",
                    { className: "dropdown-menu" },
                    React.createElement(
                      "li",
                      null,
                      React.createElement(
                        Link,
                        { to: "/gallery/2015" },
                        "2015"
                      )
                    ),
                    React.createElement(
                      "li",
                      null,
                      React.createElement(
                        Link,
                        { to: "/gallery/2014" },
                        "2014"
                      )
                    )
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
})(React.Component)

// <li><Link to='bio'>Bio</Link></li>
// <li><Link to='exhibitions'>Previous Exhibitions</Link></li>
// <li><Link to='statement'>Statement</Link></li>
;

module.exports = Nav;

},{"react":"react","react-router":"react-router"}],7:[function(require,module,exports){
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

},{"react":"react"}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var images = [{ title: "Oh Look", height: "30", width: "30", medium: "acrylic and collage on canvas", year: "2015", location: "Studio", image: "hatt_2015_0135_w", gallery: ["2015"], order: "1" }, { title: "If not for him", height: "20", width: "16", medium: "collage, acrylic, and gold leaf on cradled panel", year: "2014", location: "Studio", image: "hatt_2015_0157_w", gallery: ["2014"], order: "1" }, { title: "Food", height: "14", width: "11", medium: "collage, acrylic, metal, and plastic on prepared lofted panel", year: "2015", location: "studio", image: "hatt_2015_0100_w", gallery: ["2015"], order: "2" }, { title: "Eat", height: "16", width: "12", medium: "collage, acrylic, knob and metal on cradled panel", year: "2014", location: "Studio", image: "hatt_2015_0155_w", gallery: ["2014"], order: "2" }, { title: "Scandals: Leipzig, 1950", height: "14", width: "11", medium: "collage, acrylic, and pencil on Aquarelle", year: "2015", location: "Studio", image: "hatt_2015_0149_w", gallery: ["2015"], order: "3" }, { title: "Handy Calculator: 70", height: "16", width: "12", medium: "collage and acrylic on prepared cradled panel", year: "2014", location: "studio", image: "hatt_2015_0104_w", gallery: ["2014"], order: "3" }, { title: "10 with Corn", height: "13.5", width: "10", medium: "collage, acrylic, gold leaf, and pencil on Aquarelle", year: "2015", location: "Studio", image: "hatt_2015_0131_w", gallery: ["2015"], order: "4" }, { title: "The Disappearance of Mr. Baudrillard", height: "11", width: "14", medium: "collage, acrylic, metal, and plastic on prepared lofted panel", year: "2014", location: "studio", image: "hatt_2015_0115_w", gallery: ["2014"], order: "4" }, { title: "Two Pence Revenue", height: "10", width: "8", medium: "collage and acrylic on Arches 88", year: "2015", location: "studio", image: "hatt_2015_0102_w", gallery: ["2015"], order: "5" }, { title: "29356", height: "10", width: "7", medium: "collage and acrylic on Aquarelle", year: "2014", location: "PC", image: "hatt_2015_0101_w", gallery: ["2014"], order: "5" }, { title: "Shiller w/Nash", height: "10", width: "8", medium: "collage, acrylic, gold leaf, and pencil on Arches 88", year: "2015", location: "studio", image: "hatt_2015_0109_w", gallery: ["2015"], order: "6" }, { title: "How to Figure Price", height: "10", width: "8", medium: "collage and acrylic on Aquarelle", year: "2014", location: "studio", image: "hatt_2015_0103_w", gallery: ["2014"], order: "6" }, { title: "...Faster", height: "10", width: "8", medium: "collage, acrylic, and pencil on Arches 88", year: "2015", location: "studio", image: "hatt_2015_0110_w", gallery: ["2015"], order: "7" }, { title: "At Last", height: "10", width: "7", medium: "collage, acrylic, and gold leaf on book cover", year: "2014", location: "studio", image: "hatt_2015_0105_w", gallery: ["2014"], order: "7" }, { title: "The Flushing Remonstrance", height: "11", width: "8", medium: "collage, acrylic, on prepared Moulin Aquarelle", year: "2015", location: "studio", image: "hatt_2015_0117_w", gallery: ["2015"], order: "8" }, { title: "Both Boys Went Back", height: "10", width: "8", medium: "collage, acrylic, and pencil on Aquarelle", year: "2014", location: "PC", image: "hatt_2015_0106_w", gallery: ["2014"], order: "8" }, { title: "The Arrival of Discordia", height: "9", width: "8", medium: "collage, acrylic, on prepared  #300 cold press Arches Aquarelle", year: "2015", location: "studio", image: "hatt_2015_0119_w", gallery: ["2015"], order: "9" }, { title: "Hans Holbein: Cinco", height: "11", width: "9", medium: "collage, and acrylic on Aquarelle", year: "2014", location: "studio", image: "hatt_2015_0107_w", gallery: ["2014"], order: "9" }, { title: "Heading for the City: Thanks for the Fish", height: "15 cm", width: "10 cm", medium: "collage, acrylic, and pencil on #300 cold press Arches Aquarelle", year: "2015", location: "PC", image: "hatt_2015_0122_w", gallery: ["2015"], order: "10" }, { title: "How to Figure Price", height: "10", width: "8", medium: "collage, and acrylic on Aquarelle", year: "2014", location: "studio", image: "hatt_2015_0108_w", gallery: ["2014"], order: "10" }, { title: "You Need a Quart", height: "7.25", width: "7", medium: "collage, acrylic, and pencil on Aquarelle", year: "2015", location: "Studio", image: "hatt_2015_0132_w", gallery: ["2015"], order: "11" }, { title: "Is That For Me?", height: "10", width: "8", medium: "collage, acrylic, on Aquarelle", year: "2014", location: "studio", image: "hatt_2015_0111_w", gallery: ["2014"], order: "11" }, { title: "The Vigilance Issue", height: "12", width: "10", medium: "collage, acrylic, transparency, and pencil on Aquarelle", year: "2015", location: "Studio", image: "hatt_2015_0136_w", gallery: ["2015"], order: "12" }, { title: "Broom", height: "7", width: "6", medium: "collage, acrylic, on Aquarelle", year: "2014", location: "studio", image: "hatt_2015_0112_w", gallery: ["2014"], order: "12" }, { title: "A Question of Pumping Ethyl", height: "11", width: "8", medium: "collage, acrylic, and pencil on Aquarelle", year: "2015", location: "Studio", image: "hatt_2015_0145_w", gallery: ["2015"], order: "13" }, { title: "Time for Mother", height: "8", width: "9", medium: "collage on oversize postcards", year: "2014", location: "studio", image: "hatt_2015_0113_w", gallery: ["2014"], order: "13" }, { title: "Thanking Richard Hamilton", height: "8", width: "6", medium: "collage and acrylic on Aquarelle", year: "2015", location: "Studio", image: "hatt_2015_0147_w", gallery: ["2015"], order: "14" }, { title: "Europe After the Congress of Vienna", height: "8", width: "6", medium: "collage, acrylic, on prepared  #300 cold press Arches Aquarelle88", year: "2014", location: "studio", image: "hatt_2015_0114_w", gallery: ["2014"], order: "14" }, { title: "Hepplewhite", height: "13", width: "9.5", medium: "collage and acrylic on book cover", year: "2015", location: "Studio", image: "hatt_2015_0154_w", gallery: ["2015"], order: "15" }, { title: "Tip While Tripping", height: "8", width: "6", medium: "collage, acrylic, on prepared  #300 cold press Arches Aquarelle", year: "2014", location: "studio", image: "hatt_2015_0116_w", gallery: ["2014"], order: "15" }, { title: "Vrooom", height: "14", width: "11", medium: "collage, acrylic, and gold leaf on canvas panel", year: "2015", location: "Studio", image: "hatt_2015_0156_w", gallery: ["2015"], order: "16" }, { title: "Luigi: 65", height: "10", width: "8", medium: "collage, acrylic, plastic, and brass on lofted basswood panel", year: "2014", location: "studio", image: "hatt_2015_0118_w", gallery: ["2014"], order: "16" }, { title: "Atoms for Peace", height: "10", width: "8", medium: "collage and acrylic on Aquarelle", year: "2015", location: "Studio", image: "hatt_2015_0161_w", gallery: ["2015"], order: "17" }, { title: "Our Mr. Seward", height: "10", width: "7.75", medium: "collage, acrylic, on prepared  #300 cold press Arches Aquarelle", year: "2014", location: "studio", image: "hatt_2015_0125_w", gallery: ["2014"], order: "17" }, { title: "Homogenance of Banality", height: "11", width: "10", medium: "collage and acrylic on Aquarelle", year: "2015", location: "Studio", image: "hatt_2015_0167_w", gallery: ["2015"], order: "18" }, { title: "Starting the Cure", height: "7.25", width: "5", medium: "collage on #300 Arches Aquarelle", year: "2014", location: "studio", image: "hatt_2015_0127_w", gallery: ["2014"], order: "18" }, { title: "Royal Crown: No Moon Pies", height: "8", width: "6", medium: "collage and acrylic on Aquarelle", year: "2015", location: "Studio", image: "hatt_2015_0169_w", gallery: ["2015"], order: "19" }, { title: "Preface to the 11th Edition", height: "7", width: "4.5", medium: "collage on #300 Arches Aquarelle", year: "2014", location: "studio", image: "hatt_2015_0128_w", gallery: ["2014"], order: "19" }, { title: "A Midwest Mercury: with Brunhilde", height: "10", width: "7", medium: "collage, acrylic, and gold leaf on Aquarelle", year: "2015", location: "Studio", image: "hatt_2015_0171_w", gallery: ["2015"], order: "20" }, { title: "Vitality", height: "7", width: "5", medium: "collage on #300 Arches Aquarelle", year: "2014", location: "studio", image: "hatt_2015_0129_w", gallery: ["2014"], order: "20" }, { title: "One 50: Revisited", height: "11", width: "9", medium: "collage, acrylic, and gold leaf on Aquarelle", year: "2015", location: "Studio", image: "hatt_2015_0162_w", gallery: ["2015"], order: "21" }, { title: "Horace", height: "7", width: "5", medium: "collage on #300 Arches Aquarelle", year: "2014", location: "Studio", image: "hatt_2015_0130_w", gallery: ["2014"], order: "21" }, { title: "Special", height: "7", width: "5", medium: "collage and acrylic on prepared panel", year: "2015", location: "Studio", image: "hatt_2015_0133_w", gallery: ["2015"], order: "22" }, { title: "Flowers in House and Garden: Prothalamion", height: "9.75", width: "7", medium: "collage, acrylic, on prepared  #300 cold press Arches Aquarelle", year: "2014", location: "studio", image: "hatt_2015_0120_w", gallery: ["2014"], order: "22" }, { title: "Crimp", height: "7", width: "5", medium: "collage and acrylic on prepared panel", year: "2015", location: "Studio", image: "hatt_2015_0134_w", gallery: ["2015"], order: "23" }, { title: "Moments Later", height: "6.5", width: "4.5", medium: "collage, acrylic, gold leaf on prepared vintage book cover", year: "2014", location: "PC", image: "hatt_2015_0121_w", gallery: ["2014"], order: "23" }, { title: "Spiritual Knockings and Table Tippings", height: "5.75", width: "5", medium: "collage on vintage postcards", year: "2014", location: "studio", image: "hatt_2015_0126_w", gallery: ["2014"], order: "24" }, { title: "Bingo", height: "7", width: "5", medium: "collage and pencil on Aquarelle", year: "2014", location: "PC", image: "hatt_2015_0140_w", gallery: ["2015"], order: "24" }, { title: "Peru 50", height: "7", width: "5", medium: "collage and acrylic on prepared panel", year: "2015", location: "Studio", image: "hatt_2015_0146_w", gallery: ["2015"], order: "25" }, { title: "A Consideration of Grumbach's Execution", height: "7", width: "5", medium: "collage and acrylic on panel", year: "2015", location: "Studio", image: "hatt_2015_0164_w", gallery: ["2015"], order: "26" }, { title: "Window: Rear", height: "7", width: "5", medium: "collage and acrylic on panel", year: "2015", location: "Studio", image: "hatt_2015_0165_w", gallery: ["2015"], order: "27" }, { title: "To Collect", height: "7", width: "5", medium: "collage and acrylic on Aquarelle", year: "2015", location: "Studio", image: "hatt_2015_0166_w", gallery: ["2015"], order: "28" }, { title: "Eldorado Banal", height: "8", width: "6", medium: "collage and acrylic on Aquarelle", year: "2015", location: "Studio", image: "hatt_2015_0168_w", gallery: ["2015"], order: "29" }, { title: "Latitudes", height: "5", width: "7", medium: "collage and acrylic on Aquarelle", year: "2015", location: "Studio", image: "hatt_2015_0170_w", gallery: ["2015"], order: "30" }, { title: "Mayo 17", height: "7", width: "5", medium: "collage, acrylic, and pencil on Aquarelle", year: "2015", location: "Studio", image: "hatt_2015_0163_w", gallery: ["2015"], order: "31" }, { title: "Wait for me", height: "8", width: "7", medium: "collage and acrylic on Aquarelle", year: "2015", location: "Studio", image: "hatt_2015_0158_w", gallery: ["2015"], order: "32" }, { title: "One: Boy with Hat", height: "8", width: "6", medium: "collage and acrylic on Aquarelle", year: "2015", location: "Studio", image: "hatt_2015_0152_w", gallery: ["2015"], order: "33" }, { title: "My Best Wishes", height: "5", width: "7", medium: "collage and acrylic on Aquarelle", year: "2015", location: "Studio", image: "hatt_2015_0137_w", gallery: ["2015"], order: "34" }, { title: "Willy and the Dutch Boy", height: "5", width: "3.75", medium: "collage and acrylic on Aquarelle", year: "2015", location: "Studio", image: "hatt_2015_0138_w", gallery: ["2015"], order: "35" }, { title: "Field 3", height: "6", width: "4", medium: "collage, acrylic, and gold leaf on game card", year: "2015", location: "Studio", image: "hatt_2015_0144_w", gallery: ["2015"], order: "36" }, { title: "Comprehensive", height: "6", width: "4", medium: "collage and acrylic on Aquarelle", year: "2015", location: "Studio", image: "hatt_2015_0150_w", gallery: ["2015"], order: "37" }, { title: "Capital", height: "4", width: "3", medium: "collage and acrylic on Aquarelle", year: "2015", location: "Studio", image: "hatt_2015_0148_w", gallery: ["2015"], order: "38" }, { title: "See Bolivia", height: "4", width: "2", medium: "collage and acrylic on Aquarelle", year: "2015", location: "Studio", image: "hatt_2015_0153_w", gallery: ["2015"], order: "39" }, { title: "Koroseal: Afford It?", height: "6.25", width: "5", medium: "collage and acrylic on Aquarelle", year: "2015", location: "Studio", image: "hatt_2015_0159_w", gallery: ["2015"], order: "40" }, { title: "Clunk", height: "4.5", width: "4.5", medium: "collage and acrylic on Aquarelle", year: "2015", location: "Studio", image: "hatt_2015_0160_w", gallery: ["2015"], order: "41" }, { title: "An Indexical Coupon", height: "4", width: "3", medium: "collage and acrylic on Aquarelle", year: "2015", location: "Studio", image: "hatt_2015_0141_w", gallery: ["2015"], order: "42" }, { title: "Ceylon", height: "3", width: "2", medium: "collage on Aquarelle", year: "2015", location: "Studio", image: "Hatt_2015_0142_w", gallery: ["2015"], order: "43" }, { title: "50", height: "3.5", width: "4", medium: "collage and acrylic on Aquarelle", year: "2015", location: "Studio", image: "hatt_2015_0143_w", gallery: ["2015"], order: "44" }, { title: "A Longer Range Ranger", height: "20", width: "16", medium: "collage, acrylic, and pencil on panel", year: "2015", location: "Studio", image: "hatt_2015_0172_w", gallery: ["2015"], order: "45" }, { title: "65 Bond DKB", height: "", width: "", medium: "collage, acrylic, and pencil on #300 cold press Arches Aquarelle", year: "2011", location: "PC", image: "hatt_2015_0123_w", gallery: "", order: "" }, { title: "Flint ", height: "", width: "", medium: "collage, acrylic, photo on canvas", year: "2008", location: "studio", image: "hatt_2015_0124_w", gallery: "", order: "" }];
exports.images = images;

},{}]},{},[1]);
