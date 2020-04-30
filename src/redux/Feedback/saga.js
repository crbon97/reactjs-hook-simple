import { all, takeEvery, put, fork, call } from "redux-saga/effects";
import actions from "./actions";
import * as servicesCommon from "@iso/services/common";
import { message } from "antd";

//#region CRUD
export function* getFeedBack() {
  yield takeEvery(actions.SEND_FEEDBACK, function*({ payload }) {
    let { model, cbSuccess } = payload;
    try {
      var response = yield call(servicesCommon.sendFeedBack, model);
      if (response.data.success === true) {
        cbSuccess();
        message.success("Send a successful messenge!", 5);
        yield put({
          type: actions.SEND_FEEDBACK_SUCCESS
        });
      } else {
        message.error("Your messenge fail to send", 5);
      }
    } catch (err) {
        message.error("Your messenge fail to send");
      yield put({
        type: actions.SEND_FEEDBACK_ERROR
      });
    }
  });
}

export function* sendApplyCV() {
  yield takeEvery(actions.SEND_APPLYCV, function*({ payload }) {
    let { model, cbSuccess } = payload;
    try {
      var response = yield call(servicesCommon.requestApplyCV, model);
      if (response.data.success === true) {
        cbSuccess();
        message.success("Send a successful messenge!");
        yield put({
          type: actions.SEND_APPLYCV_SUCCESS
        });
      }
    } catch (err) {
        message.error("Your messenge fail to send");
      }
      yield put({
        type: actions.SEND_APPLYCV_ERROR
      });
  });
}

//#endregion

export default function* rootSaga() {
  yield all([fork(getFeedBack), fork(sendApplyCV)]);
}
