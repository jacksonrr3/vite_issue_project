"use strict";

exports.default = void 0;

var _registrator = _interopRequireDefault(require("./registrator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cls_ui_stub_secondary = /*#__PURE__*/function () {
  function cls_ui_stub_secondary() {}

  var _proto = cls_ui_stub_secondary.prototype;

  _proto.fn_ui_stub_secondary = function fn_ui_stub_secondary() {
    console.log('ui.stub.secondary.log');
  };

  return cls_ui_stub_secondary;
}();

function unused_ui_stub_secondary() {
  console.log('unused_ui_stub_secondary.log');
}

var useles_arr_ui_stub_secondary = [];
(0, _registrator.default)('ui.stub.secondary', cls_ui_stub_secondary);
var _default = cls_ui_stub_secondary;
exports.default = _default;
module.exports = exports.default;
module.exports.default = exports.default;
