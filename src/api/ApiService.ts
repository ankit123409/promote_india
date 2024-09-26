import axios, { AxiosResponse } from 'axios';
import { getRoute } from '../navigation/RootNavigation';
import { APP_BASE_URL } from './Config';

export type METHOD = "post" | "get" | "put" | "delete" | "patch"

export interface Response<T> {
    data: T,
    status?: number,
    success?: number,
    message: string,
    under_maintainance: string,
    error: [string],
    error_code: any
}

interface Config {
    baseUrl?: string,
    params?: any,
    endPoint: string,
    method?: METHOD,
    forceLive?: boolean,
    headers?: any
    timeout?: number;
    tokenRequired?: boolean;
}



export default async <T>(apiConfig: Config,
    onSuccess: (res: T) => void,
    onFailure: (error: any, errorCode?: number, underMaintainace?: any) => void,
    requiredParams?: Array<string>) => {

    // const session: SessionState = store.getState().session
    // let token = session[KEY_TOKEN]
    // let IS_LIVE = appConfig.CURRENT_ENV == ENV_LIVE
    // const IS_DEV = appConfig.CURRENT_ENV == ENV_DEV

    // IS_LIVE = IS_LIVE || IS_DEV
    // let company_uuid = session.company?.company_uuid || LocalConfig.uuid

    // const token = "Token eyJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE1NjkzMjY3NDN9.lYVts0p2gD8RXvyGYcSoabB8qgeZXAaZB1M14wQDnmSEbu9ZV3EtBfJ32QgGMpQvQ-094WfNRcN2HPsgCLaBqg";
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    let endpoint = apiConfig.endPoint;
    let params: any = apiConfig.params || {};
    const method: METHOD = apiConfig.method || "post"
    const currentDate = new Date().getTime()
    const dataDogAttr: any = {}

    let shouldApiCall = true;

    if (requiredParams && requiredParams.length) {
        shouldApiCall = requiredParams.every(key => Object.keys(params).includes(key));

        Object.keys(params).forEach((item) => {
            if (requiredParams.includes(item)) {
                if ((typeof params[item] == "string" && params[item].trim().length == 0) || params[item] == null) {
                    shouldApiCall = false
                }

            }
        })
    }

    if (shouldApiCall) {
        // params.language = 'en'
        const baseURL = APP_BASE_URL 

        // const isConnected: NetInfoState = await NetInfo.fetch()
        // console.log("---INTERNET CONNECTION---", isConnected);

      
            // Generating Api Payload Token
            // let payloadToken = await sign(
            //     {
            //         exp: new Date().getTime() + 60 * 100 * 1000, // Token Expiration 1 Min
            //         additional: {
            //             "Authorization": token || "",
            //             "apikey": company_uuid,
            //         }
            //     }
            //     , JWT_SECRET, {
            //     alg: "HS256",
            // })

            if (params._path != undefined) {
                endpoint = `${endpoint}/${params._path}`
                let updatedParams = JSON.parse(JSON.stringify(params))
                delete updatedParams._path;
                params = updatedParams
            }
            // if (params.company_uuid != undefined) {
            //     let updatedParams = JSON.parse(JSON.stringify(params))
            //     delete updatedParams.company_uuid
            //     params = updatedParams
            // }

            // params = { ...params, ...store.getState().common.deviceInfo }
            let headers: any = {
                // Authorization: token || "",
                "Accept": 'application/json',
                'Cookie': 'connect.sid=s%3AwyGQPeDgjsGF5ZnDI4FIL_LXTz_C3ZRg.Ahp2Kx2W%2B3EVVgbj33tzBMPwSC53TIM7ers%2BbN6c8bg',
                // "apikey": company_uuid,
                // "Accept-Language": session.language ? session.language.keyword : "en",
                // "validation": Utils.getEncryptedTimeStamp(),
                // 'Cache-Control': 'no-cache',

            }
            if (apiConfig.headers) {
                headers = { ...headers, ...apiConfig.headers }
            }
            if (params._parts) {

                headers = {
                    ...headers,
                    'Content-Type': 'multipart/form-data'
                }
            }
            let screen = ""


            console.log('---------------------------------------------')
            console.log(`------------------Api Params of ${endpoint}-------------------`)
            console.log('url', baseURL + endpoint)
            // console.log("Token", token);
            // console.log("apiKey", company_uuid);
            console.log("header", headers);
            console.log("Params")
            console.log("Method", method)
            console.log(JSON.stringify(params));
            console.log('--------------------------------------------------------------')

            // let paramsData = new FormData()

            // for (const property in params) {
            //     paramsData.append(property, params[property])
            // }

            // if (paramsData._parts.length)
            //     params = paramsData
            // else
            //     params.company_id = getUserFromStore().company_id || appConfig.COMPANY_ID;

            //params = stringify(params)

            let config: any = {
                baseURL: baseURL,
                timeout: apiConfig.timeout || 60000,
                headers: headers,
                cancelToken: source.token,
            }

            let request: Promise<any>
            // if ((token == "" || token == null) && apiConfig.tokenRequired) {
            //     return Utils.showSessionExpireDailog()
            // }

            switch (method) {
                case "post":
                    request = axios.post(endpoint, params, config)
                    break;
                case "get":
                    config = { ...config, params }
                    request = axios.get(endpoint, config)
                    break;
                case "delete":
                    config = { ...config, params }
                    request = axios.delete(endpoint, config)
                    break;
                case "put":
                    request = axios.put(endpoint, params, config)
                    break;
                case "patch":
                    request = axios.patch(endpoint, params, config)
                    break;
            }

            dataDogAttr.url = endpoint
            dataDogAttr.host = baseURL
            dataDogAttr.method = method.toUpperCase()
            dataDogAttr.screen_name = screen
            dataDogAttr.params = params
            dataDogAttr.headers = headers
         
            request.then((response: AxiosResponse<Response<T>>) => {

                if (response) {
                    console.log("response",response.data);
                    onSuccess(response.data)
                    return
                    
                    if (response.status == 200) {
                        console.log(`------------------ Response of ${endpoint} -------------------`)
                        console.log(JSON.stringify(response.data))
                        // console.log("Time:--", dataDogAttr.duration)
                        console.log('--------------------------------------------------------------')
                        if (response.data.status == 1 || response.data.success == 1) {
                            try {
                                onSuccess(response.data.data)
                            } catch (err: any) {
                                console.log('Error', err);
                            
                            }

                        } else {
                            const error: any = response.data.message || response.data.error && response.data.error[0];
                            if (error) {
                                if (response.data.error_code == 4007) {
                                    dataDogAttr.errorMsg = response.data.message?.toString()

                                } else {
                                    dataDogAttr.errorMsg = error.toString()

                                }

                            }
                            const under_maintainance = response.data.under_maintainance || "N"
                            if ("Y" == under_maintainance) {
                                const route = getRoute()
                            }
                        }
                    } else if (response.status == 401) {
                        //onFailure('Session expired')
                    } else if (response.status == 503) {
                        //onFailure('Session expired')
                    } else {
                        const error: any = response.data.error[0];
                        if (error && typeof (error) === "string") {
                            if (error.includes("Unable") && error.includes("api.yelowtaxi.com")) {
                            } else {
                                onFailure(error)
                            }
                        } else {
                        }

                        if (error) {
                            dataDogAttr.errorMsg = error.toString()
                        }
                    }
                } else {

                }
            }).catch(error => {
                if (axios.isCancel(error)) {
                    console.log('---REQUEST CANCELED---', error.message);
                    return
                }

                console.log(`------------------ Error of ${endpoint} -------------------`)
                console.log(JSON.stringify(error));

                if (error) {
                    if (error.response) {
                        console.log('Error', error.response.data);
                       

                    } else if (error.message) {
                        if (error.code && error.code == 'ECONNABORTED') {

                          
                        }

                    }

                } else {
                }
            })

        return source
    }
    else { }
}

