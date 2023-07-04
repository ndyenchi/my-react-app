import {base} from './base';
import axios from "axios";

export default function API(endpoint: string, method: any, body: any, header: any) {
    return axios({
        method: method,
        url: `${base}/${endpoint}`,
        data: body,
        headers: header
    })
}