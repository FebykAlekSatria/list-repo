
import { createSlice, createAsyncThunk, createEntityAdapter} from "@reduxjs/toolkit";
import axios from "axios";

export const getData = createAsyncThunk('data/getData', async () => {
    const response = await axios.get('https://api.github.com/users/FebykAlekSatria/repos');
    return response.data;
});

export const productEntity = createEntityAdapter(
    {
        selectIds: (data) => data.id,
    }
)

const data = createSlice({
    name: "repo",
    initialState: productEntity.getInitialState({
        isLoading: false,
        error: null,
        data: [],
    }),
    extraReducers: {
        [getData.pending]: (state, action) => {
            state.isLoading = true;
        },
        [getData.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        }
    }   

});

export const dataSelector = productEntity.getSelectors(state => state.data);
export default data.reducer;