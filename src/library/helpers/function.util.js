import moment from "moment";
require("moment/locale/vi");

export const formatStringToDate = dateString => {
  const stringE = moment(dateString).locale("en");
  const date = moment(stringE).format("ll");
  return date;
};
export const totalPage = (totalItems, pageSize) => {
  var totalPage = 1;
  if (totalItems % pageSize > 0) {
    totalPage = parseInt(totalItems / pageSize) + 1;
  } else {
    totalPage = totalItems / pageSize;
  }
  return totalPage;
};
