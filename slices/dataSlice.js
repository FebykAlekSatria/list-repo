
import { createSlice} from "@reduxjs/toolkit";

const data = createSlice({
    name: "data",
    initialState: {
        'data' :[]
    },
    reducers: {
        // masukkan data get ke stat
        setData: (state, action) => {
            state.data = action.payload;
        }
        
    }
});

export const { setData } = data.actions;
export default data.reducer;