const actions = {
  GET_RECRUITMENT: "GET_RECRUITMENT",
  GET_RECRUITMENT_SUCCESS: "GET_RECRUITMENT_SUCCESS",
  GET_RECRUITMENT_ERROR: "GET_RECRUITMENT_ERROR",

  GET_RECRUITMENT_DETAIL: "GET_RECRUITMENT_DETAIL",
  GET_RECRUITMENT_DETAIL_SUCCESS: "GET_RECRUITMENT_DETAIL_SUCCESS",
  GET_RECRUITMENT_DETAIL_ERROR: "GET_RECRUITMENT_DETAIL_ERROR",

  //#region search recruitment
  getDataRecruitment: model => ({
    type: actions.GET_RECRUITMENT,
    payload: {
      model
    }
  }),
  getDataRecruitmentDetail: id => ({
    type: actions.GET_RECRUITMENT_DETAIL,
    payload: {
      id
    }
  }),
  //#endregion
};

export default actions;
