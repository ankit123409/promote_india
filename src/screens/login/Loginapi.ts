import { AddContect, Login } from "../../api/ApiConstant"
import apiCall from "../../api/ApiService"
import { APP_BASE_URL } from "../../api/Config"
export const LoginApi={
  
    login( onData: (res: any) => void, onError: (error?: any, errorCode?: any) => void) {

        //ProgressDialog.show()
        apiCall({
            baseUrl: APP_BASE_URL, endPoint: Login,
           method:"get"
        }, (res: any) => {
            // ProgressDialog.hide()
            if (onData)
                onData(res)

        }, (error, error_code) => {
            if (onError)
                onError(error, error_code)
        })
    },
}