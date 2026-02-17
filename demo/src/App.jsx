/* eslint-disable no-unused-vars */
import { useSelector,useDispatch } from 'react-redux'
import './App.css'
import { addBook, emptyBooks } from './store/slice/socialslice.js'
import { addbook, emptyBooksfrombioSlice, incrementEnrolledStudentsCount } from './store/slice/bioslice.js'
function App() {
let books = useSelector((state) => state.social.books)
let bioBooks = useSelector((state) => state.bio.books)
let studentCount = useSelector((state) => state.bio.enrolledStudentsCount)

function printBioStats(){
  console.log("Books in Bio Slice:", bioBooks)
  console.log("Enrolled Students Count:", studentCount)
}
const dispatch = useDispatch()
function addBookTotheSlice(){
  dispatch( addBook("New Book"))
  console.log("Book Added to the Slice")
}
function getBooksFromSlice(){
  console.log("Books in the Slice:", books)
}
function emptyAllBooksFromSlice(){
  dispatch(emptyBooks())
  console.log("All Books Emptied from the Slice")
}
return (
    <>
      <button onClick = {addBookTotheSlice}>Add Book</button>
      <button onClick = {getBooksFromSlice}>Get Books</button>
      <button onClick = {emptyAllBooksFromSlice}>Empty Books</button>
      <button onClick = {printBioStats}>Print Bio Stats</button>
    </>
  )
}

export default App
