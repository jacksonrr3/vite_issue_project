import './ui.stub.secondary';
import registerComponent from './registrator';
registerComponent('hello', {});

class cls_ui_stub {
  fn_ui_stub() {
    console.log('fn.ui.stub.log');
  }

}

function unused_ui_stub() {
  console.log('unused_ui_stub.log');
}

var useles_arr_ui_stub = [];
export default cls_ui_stub;
