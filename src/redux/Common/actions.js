const actions = {
  GET_DATA_PAGE: "GET_DATA_PAGE",
  GET_DATA_PAGE_SUCCESS: "GET_DATA_PAGE_SUCCESS",
  GET_DATA_PAGE_ERROR: "GET_DATA_PAGE_ERROR",

  GET_RECAPTCH_SITE_KEY: "GET_RECAPTCH_SITE_KEY",
  GET_RECAPTCH_SITE_KEY_SUCCESS: "GET_RECAPTCH_SITE_KEY_SUCCESS",
  GET_RECAPTCH_SITE_KEY_ERROR: "GET_RECAPTCH_SITE_KEY_ERROR",

  GET_GOOGLE_MAP_API_KEY: "GET_GOOGLE_MAP_API_KEY",
  GET_GOOGLE_MAP_API_KEY_SUCCESS: "GET_GOOGLE_MAP_API_KEY_SUCCESS",
  GET_GOOGLE_MAP_API_KEY_ERROR: "GET_GOOGLE_MAP_API_KEY_ERROR",

  GET_TAG: "GET_TAG",
  GET_TAG_SUCCESS: "GET_TAG_SUCCESS",
  GET_TAG_ERROR: "GET_TAG_ERROR",

  GET_SELARYTYPE: "GET_SELARYTYPE",
  GET_SELARYTYPE_SUCCESS: "GET_SELARYTYPE_SUCCESS",
  GET_SELARYTYPE_ERROR: "GET_SELARYTYPE_ERROR",


  //#region get data
  getTitleList: () => ({
    type: actions.GET_DATA_PAGE
  }),
  //#endregion
  getKeyRecaptcha: () => ({
    type: actions.GET_RECAPTCH_SITE_KEY
  }),
  getKeyGoogleMap: () => ({
    type: actions.GET_GOOGLE_MAP_API_KEY
  }),
  getTagList: () => ({
    type: actions.GET_TAG
  }),
  getSalaryType: () => ({
    type: actions.GET_SELARYTYPE
  })
};

export default actions;
