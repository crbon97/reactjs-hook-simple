import { all, takeEvery, put, fork, call } from "redux-saga/effects";
import actions from "./actions";
import * as servicesCommon from "@iso/services/common";
import PageSize from "@iso/constants/PageSize";
import { totalPage } from "@iso/lib/helpers/function.util";
//#region article
export function* getRecruitment() {
  yield takeEvery(actions.GET_RECRUITMENT, function*({ payload }) {
    let { model } = payload;
    try {
      var response = yield call(servicesCommon.getDataRecruitment, model);
      if (response.data.success === true) {
        var data = response.data.data;
        var totalItems = response.data.data.total;
        var totalPages = totalPage(totalItems, PageSize.recruiment);
        yield put({
          type: actions.GET_RECRUITMENT_SUCCESS,
          payload: { data, totalPages }
        });
      }
    } catch (e) {
      yield put({
        type: actions.GET_RECRUITMENT_ERROR
      });
    }
  });
}
// detail
export function* getRecruitmentDetail() {
  yield takeEvery(actions.GET_RECRUITMENT_DETAIL, function*({ payload }) {
    let { id } = payload;
    try {
      var response = yield call(servicesCommon.getDataRecruitmentDetail, id);
      if (response.data.success === true) {
        var data = response.data.data;
        yield put({
          type: actions.GET_RECRUITMENT_DETAIL_SUCCESS,
          payload: { data }
        });
      }
    } catch (e) {
      yield put({
        type: actions.GET_RECRUITMENT_DETAIL_ERROR
      });
    }
  });
}

//#endregion

export default function* rootSaga() {
  yield all([fork(getRecruitment), fork(getRecruitmentDetail)]);
}
