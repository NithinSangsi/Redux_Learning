/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit'

const socialSlice = createSlice({
    name: 'social',
    initialState: {
        books: ["Book 1", "Book 2", "Book 3"],
    },
    reducers: {
        addBook: (state, action) => {
            console.log("action is :",action)
            console.log('addBook function called with payload:', action.payload)
            state.books.push(action.payload)
        },
        emptyBooks: (state, action) => {
            state.books = []
        }
    },
})

export const { addBook, emptyBooks } = socialSlice.actions
export default socialSlice.reducer