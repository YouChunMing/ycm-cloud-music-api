import HttpClient from "../httpClient";
import { normalizeHomeData } from "./schema";

// 首页横幅广告URL
const BANNER_HOME_API = "/banner";

/**
 * 首页横幅广告
 */
export function getHomeData() {
  return HttpClient.get(BANNER_HOME_API)
    .then(response => {
      const data = normalizeHomeData(response.data.banners);
      return {
        ...response,
        data
      };
    })
    .catch(error => {
      return error;
    });
}
