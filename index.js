'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Emulates a Relay-compatible container, passing the data in directly.
// It's hard to know how well this can work for complicated examples. However,
// it's worked well enough so far - ./

var StubbedRelayContainer = function (_React$Component) {
  _inherits(StubbedRelayContainer, _React$Component);

  function StubbedRelayContainer() {
    _classCallCheck(this, StubbedRelayContainer);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(StubbedRelayContainer).apply(this, arguments));
  }

  _createClass(StubbedRelayContainer, [{
    key: 'getChildContext',

    // Provide a stubbed context for child componentes
    value: function getChildContext() {
      return {
        relay: {
          forceFetch: function forceFetch() {},
          getFragmentResolver: function getFragmentResolver() {},
          getStoreData: function getStoreData() {},
          primeCache: function primeCache() {}
        },
        route: { name: 'string', params: {}, useMockData: true, queries: {} }
      };
    }

    // Directly render the child, and add the data

  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(this.props.Component, this.props.props);
    }

    // Needed to pass the isRelayContainer validation step

  }, {
    key: 'getFragmentNames',
    value: function getFragmentNames() {}
  }, {
    key: 'getFragment',
    value: function getFragment() {}
  }, {
    key: 'hasFragment',
    value: function hasFragment() {}
  }, {
    key: 'hasVariable',
    value: function hasVariable() {}
  }]);

  return StubbedRelayContainer;
}(_react2.default.Component);

// Expose dummy relay and a fake route


exports.default = StubbedRelayContainer;
StubbedRelayContainer.childContextTypes = {
  relay: _react2.default.PropTypes.object,
  route: _react2.default.PropTypes.object
};

