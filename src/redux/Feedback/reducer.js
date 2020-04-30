import actions from "./actions";

const initState = {
  feedback: {
    loading: false
  },
  feedbackCV: {
    loadingCV: false
  }
};

export default function feedbackReducer(state = initState, action) {
  switch (action.type) {
    //#region
    case actions.SEND_FEEDBACK:
      return {
        ...state,
        feedback: {
          loading: true
        }
      };

    case actions.SEND_FEEDBACK_SUCCESS:
      return {
        ...state,
        feedback: {
          loading: false
        }
      };
    case actions.SEND_FEEDBACK_FAIL:
      return {
        ...state,
        feedback: {
          loading: false
        }
      };
    // CV
    case actions.SEND_APPLYCV:
      return {
        ...state,
        feedbackCV: {
          loadingCV: true
        }
      };

    case actions.SEND_APPLYCV_SUCCESS:
      return {
        ...state,
        feedbackCV: {
          loadingCV: false
        }
      };
    case actions.SEND_APPLYCV_FAIL:
      return {
        ...state,
        feedbackCV: {
          loadingCV: false
        }
      };
    //#endregion

    default:
      return state;
  }
}
