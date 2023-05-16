import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "user",
  initialState: {
    items: []
  },
  reducers: {

    addData: (state, action) => {
        state.items = [...state.items, action.payload]
    },

    removeData: (state, action) => {
        state.items = state?.items?.filter(item => { if(item?.id !== action.payload) { return item }})
    },
    editData:(state,action)  =>{

      state.items = state.items.map((item,i)=>{
        if(item.id === action.payload.id) {
          return action.payload.values
        }else {
          return item;
        }
      })
    }
    
  },
});

export const { addData, removeData, editData} = dataSlice.actions;

export default dataSlice.reducer;
