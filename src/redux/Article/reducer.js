import actions from "./actions";

const initState = {
  newsMain: {},
  recentPost: [],
  dataArticleBlog: {
    list: [],
    loadingB: false,
    totalItems: 0
  },
  dataArticleBlogDetail: {
    list: {},
    loadingDT: false
  },
  dataArticleService: {
    list: [],
    loadingS: false
  },
  dataTopHiring: {
    listDT: [],
    loadingDT: false
  },
  dataRelated: {
    list: []
  }
};
function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}
export default function userReducer(state = initState, action) {
  switch (action.type) {
    //#region
    //blog
    case actions.GET_DATA_ARTICLE_BLOG: {
      return {
        ...state,
        dataArticleBlog: {
          ...state.dataArticleBlog,
          loadingB: true,
          totalPages: 0
        }
      };
    }
    case actions.GET_DATA_ARTICLE_BLOG_SUCCESS: {
      let { data, totalItems, isTags } = action.payload;
      let res = data ? data : [];
      let obj = state.newsMain;
   
      if (isEmpty(obj) && !isTags) {
        if (res.list && res.list.length > 0) {
          state.newsMain = res.list[0];
        }
      } else if (!isEmpty(obj) && isTags) {
        state.newsMain = {};
      }
      if (state.recentPost.length === 0 && res.list && res.list.length > 0) {
        state.recentPost = res.list.slice(0, 3);
      }
      if (res.list && res.list.length >= 1 && !isTags) {
        let arrRes = res.list;
        var resFilter = arrRes.filter((word, index) => index !== 0);
        return {
          ...state,
          dataArticleBlog: {
            ...state.dataArticleBlog,
            list: resFilter,
            totalItems: totalItems,
            loadingB: false
          }
        };
      } else if (res.list && res.list.length > 0 && isTags) {
        let arrRes = res.list;
        return {
          ...state,
          dataArticleBlog: {
            ...state.dataArticleBlog,
            list: arrRes,
            totalItems: totalItems,
            loadingB: false
          }
        };
      } else {
        return {
          ...state,
          dataArticleBlog: {
            ...state.dataArticleBlog,
            list: [],
            totalItems: totalItems,
            loadingB: false
          }
        };
      }
    }
    case actions.GET_DATA_ARTICLE_BLOG_ERROR: {
      return {
        ...state,
        dataArticleBlog: {
          list: [],
          loadingB: true,
          totalPages: 0
        }
      };
    }
    //service
    case actions.GET_DETAIL_ARTICLE_SERVICE: {
      return {
        ...state,
        dataArticleService: {
          ...state.dataArticleService,
          loadingS: true
        }
      };
    }
    case actions.GET_DETAIL_ARTICLE_SERVICE_SUCCESS: {
      let { data } = action.payload;
      let res = data ? data : {};
      return {
        ...state,
        dataArticleService: {
          ...state.dataArticleService,
          ...res,
          loadingS: false
        }
      };
    }
    case actions.GET_DETAIL_ARTICLE_SERVICE_ERROR: {
      return {
        ...state,
        dataArticleService: {
          list: [],
          loadingS: true
        }
      };
    }
    //detail
    case actions.GET_DETAIL_ARTICLE_BLOG: {
      return {
        ...state,
        dataArticleBlogDetail: {
          ...state.dataArticleBlogDetail,
          loadingDT: true,
          list: {}
        }
      };
    }
    case actions.GET_DETAIL_ARTICLE_BLOG_SUCCESS: {
      let { data } = action.payload;
      let res = data ? data : {};
      return {
        ...state,
        dataArticleBlogDetail: {
          ...state.dataArticleBlogDetail,
          list: res,
          loadingDT: false
        }
      };
    }
    case actions.GET_DETAIL_ARTICLE_BLOG_ERROR: {
      return {
        ...state,
        dataArticleBlogDetail: {
          list: {},
          loadingDT: true
        }
      };
    }
    //TOPHIRING
    case actions.GET_DATA_TOPHIRING: {
      return {
        ...state,
        dataTopHiring: {
          ...state.dataTopHiring,
          loadingDT: true
        }
      };
    }
    case actions.GET_DATA_TOPHIRING_SUCCESS: {
      let { data } = action.payload;
      let res = data ? data : [];
      return {
        ...state,
        dataTopHiring: {
          ...state.dataTopHiring,
          listDT: res,
          loadingDT: false
        }
      };
    }
    case actions.GET_DATA_TOPHIRING_ERROR: {
      return {
        ...state,
        dataTopHiring: {
          loadingDT: true
        }
      };
    }
    //RELATED
    case actions.GET_DATA_RELATED: {
      return {
        ...state,
        dataRelated: {
          ...state.dataRelated
        }
      };
    }
    case actions.GET_DATA_RELATED_SUCCESS: {
      let { data } = action.payload;
      let res = data ? data : {};
      return {
        ...state,
        dataRelated: {
          ...state.dataRelated,
          ...res
        }
      };
    }

    //#endregion

    default:
      return state;
  }
}
