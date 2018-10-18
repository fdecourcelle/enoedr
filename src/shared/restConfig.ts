import { baseURL } from "./baseurl";

export function RestangularConfigFactory(RestangularProvider) {
  RestangularProvider.setBaseUrl(baseURL);
  console.log("passa config rest");
}
