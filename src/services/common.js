import { api } from "@iso/utils/axios.configs";
import { ApiRouters } from "@iso/utils/apiRouters";
import { BASE_API_URL } from "@iso/utils/api.configs";
import PageSize from "@iso/constants/PageSize";
import axios from "axios";

export const getData = () => {
  var url = ApiRouters.COMMON;
  return api.get(url);
};
export const getKeyGoogleMap = () => {
  var url = `${ApiRouters.GETKEY}/GOOGLE_MAP_API_KEY`;
  return api.get(url);
};
export const getKeyCaptcha = () => {
  var url = `${ApiRouters.GETKEY}/RECAPTCHA_SITE_KEY`;
  return api.get(url);
};
export const sendFeedBack = bpdy => {
  var url = ApiRouters.FEEDBACK;
  return api.post(url, bpdy);
};
export const requestApplyCV = model => {
  var bodyFormData = new FormData();
  bodyFormData.set("firstName", model.firstName);
  bodyFormData.set("lastName", model.lastName);
  bodyFormData.set("phone", model.phone);
  bodyFormData.set("email", model.email);
  bodyFormData.set("messenger", model.messenger);
  bodyFormData.set("recaptcha", model.recaptcha);
  bodyFormData.set("sourceApplyCVEnum", 2);
  bodyFormData.append("cv", model.file);

  const options = {
    url: BASE_API_URL + ApiRouters.APPLYCV + `jobVacancy/${model.id}/applyCV`,
    method: "POST",
    headers: {
      "X-Requested-With": "XMLHttpRequest",
      "Content-Type": "application/json",
      Accept: "multipart/form-data"
    },
    data: bodyFormData
  };
  return axios(options);
};

// #region blog
export const getDataBlogList = action => {
  let model = {
    page: action.page,
    tags: action.tags,
    limit: action.limit ? action.limit : PageSize.blog,
  };
  var url = ApiRouters.BLOG;
  return api.get(url, { params: model });
};
export const getDetailBlog = id => {
  var url = `${ApiRouters.BLOGDETAIL}/${id}`;
  return api.get(url);
};
export const getDataServiceList = () => {
  var url = ApiRouters.LISTSERVICE;
  return api.get(url);
};
export const getDataRecruitment = body => {
  let model = {
    page: body.page,
    limit: PageSize.recruiment,
    orderBy: body.orderBy,
    search: body.search,
    jobCategoryId: body.jobCategoryId,
  };
  var url = `${ApiRouters.RECRUITMENT}/list`;
  return api.get(url, { params: model });
};
export const getDataRecruitmentDetail = id => {
  var url = `${ApiRouters.RECRUITMENT}/detail/${id}`;
  return api.get(url);
};
export const getTags= () => {
  var url = `${ApiRouters.FECOMMON}/getTags`;
  return api.get(url);
};
export const getSalaryType= () => {
  var url = `${ApiRouters.FECOMMON}/salaryType`;
  return api.get(url);
};
export const getTopHiring= () => {
  var url = `${ApiRouters.FECOMMON}/topHiringCompany`;
  return api.get(url);
};
export const getRelatedPost= (id) => {
  var url = `${ApiRouters.RELATEDPOST}/${id}`;
  return api.get(url);
};
// #endregion
