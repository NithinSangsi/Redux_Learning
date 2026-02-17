import {createSlice} from '@reduxjs/toolkit'
const ReduxCounterSlice = createSlice({
    name:'counter',
    initialState:{value :0,
        performedAction:""
    },

    reducers:{
        increment:(state,action)=>{
            console.log(action.payload)
            state.value += 1;    
            state.performedAction = action.payload;
        },
        decrement:(state,action)=>{
            // console.log(action) //bot the type and the payload is printed in the console
            console.log(action.payload)// only the message is printed in the console because the payload is a string and not an object
            state.value -= 1;   
            state.performedAction = action.payload;
        },
        reset:(state,action)=>{
            // console.log(action)
            console.log(action.payload)
            state.value = 0; 
                        state.performedAction = action.payload;
  
        }
    }
})
export const {increment,decrement,reset} = ReduxCounterSlice.actions
export default ReduxCounterSlice.reducer