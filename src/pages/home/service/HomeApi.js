import { createAsyncThunk } from "@reduxjs/toolkit";

import { toast } from "react-toastify";
import apiInstance from "../../../../config/AxiosInstance";
// import { baseUrl } from "../../../../config/baseUrl";
// import { IsLoader } from "../../../../services/ShareSlice";



// **************** Question *************//

export const GetQuestionList = createAsyncThunk("createHomeSection/getQuestionList", async (params) => {

    // let response = await  apiInstance.get(`${baseUrl}all-venues`).then((response) => {
    let response = await apiInstance.get(`question`,).then((response) => {
        return response
    }).catch((error) => {
        return error.response
    })
    const { data, status } = response;
    return { data, status }

});






