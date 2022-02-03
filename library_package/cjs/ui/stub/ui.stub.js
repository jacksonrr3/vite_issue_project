"use strict";

exports.default = void 0;

require("./ui.stub.secondary");

var _registrator = _interopRequireDefault(require("./registrator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _registrator.default)('hello', {});

var cls_ui_stub = /*#__PURE__*/function () {
  function cls_ui_stub() {}

  var _proto = cls_ui_stub.prototype;

  _proto.fn_ui_stub = function fn_ui_stub() {
    console.log('fn.ui.stub.log');
  };

  return cls_ui_stub;
}();

function unused_ui_stub() {
  console.log('unused_ui_stub.log');
}

var useles_arr_ui_stub = [];
var _default = cls_ui_stub;
exports.default = _default;
module.exports = exports.default;
module.exports.default = exports.default;
