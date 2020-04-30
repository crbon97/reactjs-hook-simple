import actions from "./actions";

const initState = {
  dataRecruitment: {
    list: [],
    loadingR: false,
    totalPages: 0,
    total:0
  },
  dataRecruitmentDetail: {
    list: {},
    loadingDT: false,
  },
};

export default function recruitmentReducer(state = initState, action) {
  switch (action.type) {
    //#region
    case actions.GET_RECRUITMENT: {
      return {
        ...state,
        dataRecruitment: {
          ...state.dataRecruitment,
          list: [],
          loadingR: true,
          totalPages: 0,
          total:0
        }
      };
    }
    case actions.GET_RECRUITMENT_SUCCESS: {
      let { data, totalPages } = action.payload;
      let res = data ? data : [];
      return {
        ...state,
        dataRecruitment: {
          ...state.dataRecruitment,
          ...res,
          totalPages: totalPages,
          loadingR: false
        }
      };
    }
    case actions.GET_RECRUITMENT_ERROR: {
      return {
        ...state,
        dataRecruitment: {
          list: [],
          loadingR: true,
          totalPages: 0
        }
      };
    }
    // detail
    case actions.GET_RECRUITMENT_DETAIL: {
      return {
        ...state,
        dataRecruitmentDetail: {
          ...state.dataRecruitmentDetail,
          list:{},
          loadingDT: true,
        }
      };
    }
    case actions.GET_RECRUITMENT_DETAIL_SUCCESS: {
      let { data } = action.payload;
      let res = data ? data : {};
      return {
        ...state,
        dataRecruitmentDetail: {
          ...state.dataRecruitmentDetail,
          list:res,
          loadingDT: false
        }
      };
    }
    case actions.GET_RECRUITMENT_DETAIL_ERROR: {
      return {
        ...state,
        dataRecruitmentDetail: {
          list: [],
          loadingDT: true,
        }
      };
    }
   
    //#endregion

    default:
      return state;
  }
}
