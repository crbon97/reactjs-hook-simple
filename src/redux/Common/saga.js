import { all, takeEvery, put, fork, call } from "redux-saga/effects";
import actions from "./actions";
import * as servicesCommon from "@iso/services/common";

//#region get data Page
export function* getDataPage() {
  yield takeEvery(actions.GET_DATA_PAGE, function*() {
    try {
      var response = yield call(servicesCommon.getData);
      if (response.data.success === true) {
        var data = response.data.data;
        yield put({
          type: actions.GET_DATA_PAGE_SUCCESS,
          payload: { data }
        });
      }
    } catch (e) {
      yield put({
        type: actions.GET_DATA_PAGE_ERROR
      });
    }
  });
}

//#endregion
//#region get Key Captcha & Google map
export function* getKeyCaptcha() {
  yield takeEvery(actions.GET_RECAPTCH_SITE_KEY, function*() {
    try {
      var response = yield call(servicesCommon.getKeyCaptcha);
      if (response.data.success === true) {
        var data = response.data.data;
        yield put({
          type: actions.GET_RECAPTCH_SITE_KEY_SUCCESS,
          payload: { data }
        });
      }
    } catch (e) {
      yield put({
        type: actions.GET_RECAPTCH_SITE_KEY_ERROR
      });
    }
  });
}
export function* getKeyGoogleMap() {
  yield takeEvery(actions.GET_GOOGLE_MAP_API_KEY, function*() {
    try {
      var response = yield call(servicesCommon.getKeyGoogleMap);
      if (response.data.success === true) {
        var data = response.data.data;
        yield put({
          type: actions.GET_GOOGLE_MAP_API_KEY_SUCCESS,
          payload: { data }
        });
      }
    } catch (e) {
      yield put({
        type: actions.GET_GOOGLE_MAP_API_KEY_ERROR
      });
    }
  });
}
export function* getTags() {
  yield takeEvery(actions.GET_TAG, function*() {
    try {
      var response = yield call(servicesCommon.getTags);
      if (response.data.success === true) {
        var data = response.data.data;
        yield put({
          type: actions.GET_TAG_SUCCESS,
          payload: { data }
        });
      }
    } catch (e) {
      yield put({
        type: actions.GET_TAG_ERROR
      });
    }
  });
}
export function* getSalaryType() {
  yield takeEvery(actions.GET_SELARYTYPE, function*() {
    try {
      var response = yield call(servicesCommon.getSalaryType);
      if (response.data.success === true) {
        var data = response.data.data;
        yield put({
          type: actions.GET_SELARYTYPE_SUCCESS,
          payload: { data }
        });
      }
    } catch (e) {
      yield put({
        type: actions.GET_SELARYTYPE_ERROR
      });
    }
  });
}
//#endregion

export default function* rootSaga() {
  yield all([
    fork(getDataPage),
     fork(getKeyCaptcha), 
     fork(getKeyGoogleMap),
     fork(getTags),
     fork(getSalaryType)
    ]);
}
