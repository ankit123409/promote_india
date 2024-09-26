
export const ENV_LIVE = "live"
export const ENV_DEV = "dev"
export const ENV_LOCAL = "local"


export const appConfig = {

    CURRENT_ENV: ENV_LIVE
}

export const baseUrls: any = {
    live: "https://backend.promotindia.in/api",//"http://prod-yelowtaxi-alb-o8spteig585c-1631605976.us-west-2.elb.amazonaws.com/"
  
}



export const APP_BASE_URL: any = baseUrls[appConfig.CURRENT_ENV]
