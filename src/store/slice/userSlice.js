import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
    name: "user",
    initialState: [],
    reducers: {
        addUser(state, action) {
            state.push(action.payload);
        },
        removeUser(state, action) { },
        deleteUsers(state, action) { },
    }
});

export const { addUser } = UserSlice.actions;
export { UserSlice };