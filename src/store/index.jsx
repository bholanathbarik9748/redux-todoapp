import { configureStore } from "@reduxjs/toolkit";
import { UserSlice } from "./slice/userSlice";

const store = configureStore({
    reducer : {
        users : UserSlice.reducer
    }
})

export default store;