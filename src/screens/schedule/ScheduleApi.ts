import { AddContect, AllGroups } from "../../api/ApiConstant"
import apiCall from "../../api/ApiService"
import { APP_BASE_URL } from "../../api/Config"
export const ScheduleApi={
    // getPickupStands(params: any) {

    //     //ProgressDialog.show()
    //     return apiCall({
    //         baseUrl: APP_BASE_URL, endPoint: AddContect,
    //         params: params, method: "post"
    //     }, (res: any) => {
    //         console.log("res pickup", res)
           
    //         // ProgressDialog.hide()
    //     }, (error) => {
    //         //ProgressDialog.hide()
    //         //Utils.showErrorToast(error)
    //     })
    // },
    gelallgroups( onData: (res: any) => void, onError: (error?: any, errorCode?: any) => void) {

        //ProgressDialog.show()
        apiCall({
            baseUrl: APP_BASE_URL, endPoint: AllGroups,
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