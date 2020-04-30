const actions = {
  GET_DATA_ARTICLE_BLOG: "GET_DATA_ARTICLE_BLOG",
  GET_DATA_ARTICLE_BLOG_SUCCESS: "GET_DATA_ARTICLE_BLOG_SUCCESS",
  GET_DATA_ARTICLE_BLOG_ERROR: "GET_DATA_ARTICLE_BLOG_ERROR",

  GET_DETAIL_ARTICLE_BLOG: "GET_DETAIL_ARTICLE_BLOG",
  GET_DETAIL_ARTICLE_BLOG_SUCCESS: "GET_DETAIL_ARTICLE_BLOG_SUCCESS",
  GET_DETAIL_ARTICLE_BLOG_ERROR: "GET_DETAIL_ARTICLE_BLOG_ERROR",

  GET_DETAIL_ARTICLE_SERVICE: "GET_DETAIL_ARTICLE_SERVICE",
  GET_DETAIL_ARTICLE_SERVICE_SUCCESS: "GET_DETAIL_ARTICLE_SERVICE_SUCCESS",
  GET_DETAIL_ARTICLE_SERVICE_ERROR: "GET_DETAIL_ARTICLE_SERVICE_ERROR",

  GET_DATA_TOPHIRING: "GET_DATA_TOPHIRING",
  GET_DATA_TOPHIRING_SUCCESS: "GET_DATA_TOPHIRING_SUCCESS",
  GET_DATA_TOPHIRING_ERROR: "GET_DATA_TOPHIRING_ERROR",

  GET_DATA_RELATED: "GET_DATA_RELATED",
  GET_DATA_RELATED_SUCCESS: "GET_DATA_RELATED_SUCCESS",
  GET_DATA_RELATED_ERROR: "GET_DATA_RELATED_ERROR",
  //#region get data blog
  getDataArticleBlog: model => ({
    type: actions.GET_DATA_ARTICLE_BLOG,
    payload: {
      model
    }
  }),
  getDetailArticleBlog: id => ({
    type: actions.GET_DETAIL_ARTICLE_BLOG,
    payload: {
      id
    }
  }),
  getRelatePost: id => ({
    type: actions.GET_DATA_RELATED,
    payload: {
      id
    }
  }),
  //#endregion
  //#region get data service
  getDataArticleService: () => ({
    type: actions.GET_DETAIL_ARTICLE_SERVICE,
  }),
  //#endregion
  //#region get data top hiring
  getDataTopHiring: () => ({
    type: actions.GET_DATA_TOPHIRING,
  })
  //#endregion
};

export default actions;
