import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchdata = createAsyncThunk("getdata", async ()=>
{
    const res = await axios.get("./carApi.json")
    return res.data
})

export const carSlice = createSlice({
    name:"car",
    initialState:{
        cars:[],
        filteredcars:[]
    },
    reducers:{
        filtered:(state,action)=>
        {
            const newfilter = state.cars.filter(e=>
                {
                    return e.category === action.payload
                })
        
                state.filteredcars = newfilter
        }
    },
    extraReducers:{
        [fetchdata.fulfilled]:(state,action)=>
        {
            state.cars = action.payload
            state.filteredcars = action.payload.filter(e=>
                {
                    return e.category === "economic"
                })
        }
    }
})

export const {filtered} = carSlice.actions
export default carSlice.reducer