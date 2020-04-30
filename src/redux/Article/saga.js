import { all, takeEvery, put, fork, call } from "redux-saga/effects";
import actions from "./actions";
import * as servicesCommon from "@iso/services/common";
//#region article
export function* getArticlePageBlog() {
  yield takeEvery(actions.GET_DATA_ARTICLE_BLOG, function*({ payload }) {
    let { model } = payload;
    let isTags=false;
    if(model.tags){
      isTags=true
    }
    try {
      var response = yield call(servicesCommon.getDataBlogList, model);
      if (response.data.success === true) {
        var data = response.data.data;
        var totalItems = response.data.data.total;
        yield put({
          type: actions.GET_DATA_ARTICLE_BLOG_SUCCESS,
          payload: { data, totalItems ,isTags }
        });
      }
    } catch (e) {
      yield put({
        type: actions.GET_DATA_ARTICLE_BLOG_ERROR
      });
    }
  });
}
export function* getDetailArticle() {
  yield takeEvery(actions.GET_DETAIL_ARTICLE_BLOG, function*({ payload }) {
    let { id } = payload;
    try {
      var response = yield call(servicesCommon.getDetailBlog, id);
      if (response.data.success === true) {
        var data = response.data.data;
        yield put({
          type: actions.GET_DETAIL_ARTICLE_BLOG_SUCCESS,
          payload: { data }
        });
      }
    } catch (e) {
      yield put({
        type: actions.GET_DETAIL_ARTICLE_BLOG_ERROR
      });
    }
  });
}
//#endregion
//Articleregion

export function* getDataArticle() {
  yield takeEvery(actions.GET_DETAIL_ARTICLE_SERVICE, function*() {
    try {
      var response = yield call(servicesCommon.getDataServiceList);
      if (response.data.success === true) {
        var data = response.data.data;
        yield put({
          type: actions.GET_DETAIL_ARTICLE_SERVICE_SUCCESS,
          payload: { data }
        });
      }
    } catch (e) {
      yield put({
        type: actions.GET_DETAIL_ARTICLE_SERVICE_ERROR
      });
    }
  });
}
//#endregion
//TOPHIRINGregion

export function* getDataTophiring() {
  yield takeEvery(actions.GET_DATA_TOPHIRING, function*() {
    try {
      var response = yield call(servicesCommon.getTopHiring);
      if (response.data.success === true) {
        var data = response.data.data;
        yield put({
          type: actions.GET_DATA_TOPHIRING_SUCCESS,
          payload: { data }
        });
      }
    } catch (e) {
      yield put({
        type: actions.GET_DATA_TOPHIRING_ERROR
      });
    }
  });
}
//#endregion
//Related region

export function* getRelatedPost() {
  yield takeEvery(actions.GET_DATA_RELATED, function*({ payload }) {
    let { id } = payload;
    try {
      var response = yield call(servicesCommon.getRelatedPost, id);
      if (response.data.success === true) {
        var data = response.data.data;
        yield put({
          type: actions.GET_DATA_RELATED_SUCCESS,
          payload: { data }
        });
      }
    } catch (e) {
      yield put({
        type: actions.GET_DATA_RELATED_ERROR
      });
    }
  });
}
//#endregion

export default function* rootSaga() {
  yield all([
    fork(getArticlePageBlog),
    fork(getDetailArticle),
    fork(getDataArticle),
    fork(getDataTophiring),
    fork(getRelatedPost)
  ]);
}
