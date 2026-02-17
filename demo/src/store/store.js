import { configureStore } from '@reduxjs/toolkit'
import socialSlice from './slice/socialslice.js'
import bioSlice from './slice/bioslice.js'
const store = configureStore({
    reducer: {
        social: socialSlice,
        bio: bioSlice,
    },
})

export default store