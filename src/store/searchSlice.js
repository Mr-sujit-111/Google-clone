import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState: {
        name: "test"
    },
    reducers: {
        add(state, action) {
            state.name = action.payload;
        }
    }

})
export const { add } = searchSlice.actions;
export default searchSlice.reducer;