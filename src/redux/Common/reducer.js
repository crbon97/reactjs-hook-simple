import actions from "./actions";

const initState = {
  dataPage: {},
  dataTags: [],
  KEY_RECAPTCHA: null,
  GOOGLE_MAP_API_KEY: null,
  dataSalary:[]
};

export default function commonReducer(state = initState, action) {
  switch (action.type) {
    //#region
    case actions.GET_DATA_PAGE_SUCCESS: {
      let { data } = action.payload;
      let res = data ? data : [];
      return {
        ...state,
        dataPage: res
      };
    }
    case actions.GET_TAG_SUCCESS: {
      let { data } = action.payload;
      let res = data ? data : [];
      return {
        ...state,
        dataTags: res
      };
    }
    //#endregion
    //#region GET KEY
    case actions.GET_RECAPTCH_SITE_KEY_SUCCESS: {
      let { data } = action.payload;
      let res = data ? data : null;
      return {
        ...state,
        KEY_RECAPTCHA: res
      };
    }
    case actions.GET_GOOGLE_MAP_API_KEY_SUCCESS: {
      let { data } = action.payload;
      let res = data ? data : null;
      return {
        ...state,
        GOOGLE_MAP_API_KEY: res
      };
    }

    //#endregion
    // region SALARYTYPE
    case actions.GET_SELARYTYPE_SUCCESS: {
      let { data } = action.payload;
      let res = data ? data : [];
      return {
        ...state,
        dataSalary: res
      };
    }
    //#endregion
    default:
      return state;
  }
}
