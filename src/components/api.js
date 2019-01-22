import { get, post } from "@/components/http.js";
export const apiHome = (params, router, store) =>
  get("v1/home", params, router, store);
export const apiXXX = (params, router, store, data, upload) =>
  post("v1/XXX", params, router, store, data, upload);
