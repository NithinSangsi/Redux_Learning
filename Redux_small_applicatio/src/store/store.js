import {configureStore} from '@reduxjs/toolkit'
import ReduxCounterSlice from './slices/ReduxCounterSlice.js'
const store = configureStore({
    name:'store',
    reducer:{
        counter:ReduxCounterSlice
    }
})
export default store