import HttpClient from '../httpClient';
import {normalizeHomeData} from './schema';

const BANNER_HOME_API = '/banner';


export function getHomeData(){
    HttpClient.get(BANNER_HOME_API, {
        transformResponse: [
            function(data) {
                return normalizeHomeData(data);
            }
        ]
    }).then(response => response);
}

