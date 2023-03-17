import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";


//slice to manage Question section
const createHomeSlice = createSlice({
    name: "createHomeSection",
    initialState: {
        getQuestionList: [],

    },
    reducers: { },
    extraReducers: {


        ['createHomeSection/getQuestionList/fulfilled']: (state, action) => {
            const { data, status } = action.payload || {}

            if (status >= 200 && status < 300) {
                state.getQuestionList = data
            } else if (status >= 400 && status < 500) {
                toast("Something went wrong in getQuestionList")
            }
        },




    }
})

export const { SetAddedVenuesData, RemoveAddedVenuesData,
    SetAddedVenueDetailsData, RemoveAddedVenueDetailsData,
    ClearAddedVenuesData, ClearAddedVenuesDetailData,ChangeCurrentLocationlanlng } = createHomeSlice.actions;

export default createHomeSlice.reducer;