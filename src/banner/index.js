import HttpClient from '../httpClient';
import parseJSONResponse from '../utils/parseJSONResponse';
import {normalizeHomeData} from './schema';

// 首页横幅广告URL
const BANNER_HOME_API = '/banner';

/**
 * 首页横幅广告
*/
export function getHomeData(){
    return HttpClient.get(BANNER_HOME_API, {
        transformResponse: [
            function(data) {
                const {banners} = parseJSONResponse(data);
                return normalizeHomeData(banners);
            }
        ]
    }).then(response => response);
}
