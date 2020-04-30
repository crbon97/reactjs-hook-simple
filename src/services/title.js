import { api } from "@iso/utils/axios.configs";
import { ApiRouters } from "@iso/utils/apiRouters";

export const getTitleRq = body => {
  var url = ApiRouters.TITLE;

  return api.get(url, { params: body });
};
export const getTitleCreate = body => {
  var url = ApiRouters.TITLE;
  return api.post(url, body);
};
export const getTitleUpdate = body => {
  var url = `${ApiRouters.TITLE}/${body.id}`;
  return api.put(url,body);
};
export const deleteTitle = id => {
  var url = `${ApiRouters.TITLE}/${id}`;
  return api.delete(url);
};
export const getTitleDetail = id => {
  var url = `${ApiRouters.TITLE}/${id}`;
  return api.get(url);
};
export const titleAccessPermission = id => {
    var url = `${ApiRouters.TITLE}/${id}/Roles`;;
    return api.get(url);
};
export const updateTitleAccessPermission = body => {
    var url = `${ApiRouters.TITLE}/${body.id}/Roles`;;
    return api.put(url, body);
};