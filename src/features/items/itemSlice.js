import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { items } from '../../data/items';

const initialState = {
  loading : false,
  items: items,
  error:'',
}

//createAsyncThunk  automatically generate pending , fulfilled, and rejected action types

const itemSlice = createSlice({
  name:'item',
  initialState,
  reducers:{

  },
});

export default itemSlice.reducer
export const itemActions = itemSlice.actions
