import { all } from "redux-saga/effects";

import commonSaga from "@iso/redux/Common/saga";
import articleSaga from "@iso/redux/Article/saga";
import feedbackSaga from "@iso/redux/Feedback/saga";
import recruitmentSaga from "@iso/redux/Recruitment/saga";

export default function* rootSaga(getState) {
  yield all([commonSaga(),
     articleSaga(),
     feedbackSaga(),
     recruitmentSaga()
    ]);
}
