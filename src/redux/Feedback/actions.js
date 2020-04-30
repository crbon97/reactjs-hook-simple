const actions = {
  SEND_FEEDBACK: "SEND_FEEDBACK",
  SEND_FEEDBACK_SUCCESS: "SEND_FEEDBACK_SUCCESS",
  SEND_FEEDBACK_ERROR: "SEND_FEEDBACK_ERROR",
  
  SEND_APPLYCV: "SEND_APPLYCV",
  SEND_APPLYCV_SUCCESS: "SEND_APPLYCV_SUCCESS",
  SEND_APPLYCV_ERROR: "SEND_APPLYCV_ERROR",
  //#region get data
  sendFeedBack: (model, cbSuccess) => ({
    type: actions.SEND_FEEDBACK,
    payload: {
      model,
      cbSuccess
    }
  }),
  sendApplyCV: (model, cbSuccess) => ({
    type: actions.SEND_APPLYCV,
    payload: {
      model,
      cbSuccess
    }
  })
  //#endregion
};

export default actions;
