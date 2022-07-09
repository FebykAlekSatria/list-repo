
import { createSlice, createAsyncThunk, createEntityAdapter} from "@reduxjs/toolkit";
import axios from "axios";

export const getUser = createAsyncThunk('user/getUser', async () => {
    const response = await axios.get('https://api.github.com/users/FebykAlekSatria');
    return response.data;
});

export const productEntity = createEntityAdapter(
    {
        selectIds: (data) => data.id,
    }
)

const user = createSlice({
    name: "repo",
    initialState: productEntity.getInitialState({
        isLoading: false,
        error: null,
        data: [],
    }),
    extraReducers: {
        [getUser.pending]: (state, action) => {
            state.isLoading = true;
        },
        [getUser.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        }
    }   

});

export const dataSelector = productEntity.getSelectors(state => state.data);
export default user.reducer;