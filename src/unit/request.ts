import axios from "./axious";
import { AxiosResponse } from "axios";
// @ts-ignore
import { cloneDeep, omit, assign } from "lodash-es";
export interface ResponseData {
  //it depand on api response format
  err_code: number;
  err_msg: string;
  data: any;
}

// get method
export function get(apiUrl: string, params?: any): Promise<ResponseData> {
  let paramsData = {};
  if (params && params.page && params.pageSize) {
    const data = cloneDeep(params);
    const pager = {
      page: data.page,
      pageSize: data.pageSize,
    };
    const pagerParams = { pager: JSON.stringify(pager) };

    const remainderParams = omit(data, ["page", "pageSize", "options"]);
    paramsData = assign(pagerParams, data.options, remainderParams);
  } else {
    paramsData = params;
  }
  return axios.get(apiUrl, { params: paramsData });
}

// post method
export function post(apiUrl: string, params?: any): Promise<ResponseData> {
  let postData = {};
  if (params && params.page && params.pageSize) {
    const data = cloneDeep(params);
    const pager = {
      page: data.page,
      pageSize: data.pageSize,
    };
    const pagerParams = { pager: pager };

    const remainderParams = omit(data, ["page", "pageSize", "options"]);
    postData = assign(pagerParams, { options: data.options }, remainderParams);
  } else {
    postData = params;
  }
  return axios.post(apiUrl, postData);
}

// put method
export function $put(apiUrl: string, params?: any): Promise<ResponseData> {
  return axios.put(apiUrl, params);
}

// delete method
export function $delete(apiUrl: string, params?: any): Promise<ResponseData> {
  return axios.delete(apiUrl, { data: params });
}
