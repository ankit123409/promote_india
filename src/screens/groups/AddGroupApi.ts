import { AddContect, AllGroups, createGroups, EditGroups } from "../../api/ApiConstant"
import apiCall from "../../api/ApiService"
import { APP_BASE_URL } from "../../api/Config"
import AddGroups from "./AddGroups"
export const AddGroupApi={
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
    AddGroups(params:any ,onData: (res: any) => void, onError: (error?: any, errorCode?: any) => void) {

        //ProgressDialog.show()
        apiCall({
            baseUrl: APP_BASE_URL, endPoint: createGroups ,
            method:"post",params:params
        }, (res: any) => {
            // ProgressDialog.hide()
            if (onData)
                onData(res)

        }, (error, error_code) => {
            if (onError)
                onError(error, error_code)
        })
    },
    EditGroups(params:any ,onData: (res: any) => void, onError: (error?: any, errorCode?: any) => void) {

        //ProgressDialog.show()
        apiCall({
            baseUrl: APP_BASE_URL, endPoint: EditGroups,
            method:"put",params:params
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