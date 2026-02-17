/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
const bioSlice = createSlice({
    name: 'bio',
    initialState: {
        books : ["Book 1", "Book 2", "Book 3"],
        enrolledStudentsCount : 100,
    },
    reducers: {
        addbook: (state, action) => {
            state.books.push(action.payload)
        },
        emptyBooksfrombioSlice: (state, action) => {
            state.books = []
        },  
        incrementEnrolledStudentsCount: (state, action) => {
            state.enrolledStudentsCount += 1
        }

    }
})
export const { addbook, emptyBooksfrombioSlice, incrementEnrolledStudentsCount } = bioSlice.actions
export default bioSlice.reducer