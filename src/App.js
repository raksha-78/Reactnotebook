import React, { useState } from 'react'
// import FormComponent from './Components/Formcomponent'
import Notes from './Components/Notes'
import EditModel from './Components/EditModel'
import NewForm from './NewForm'

export default function App() {
  //Here we set the all the input feild value to null
  const[title,setTitle]=useState("");
  const[date,setDate]=useState("");
  const[description,setDescription]=useState("");
  const[note,setNote]=useState('');
  const[editId,setEditId]=useState("");
  // localStorage.setItem("note",JSON.stringify(note))// here we store the value in local storage
  return (
    <>
    <EditModel editId={editId}note={note}setNote={setNote}/>
    <NewForm title={title} setTitle={setTitle}date={date}setDate={setDate}description={description}setDescription={setDescription}note={note}setNote={setNote}/>
   {/* <FormComponent /> */}
   <div className='container'>
    <div className='row justify-content-center'>
      <div className='col-md-10'>
        <h1 className='md-3'>Your Notes</h1>
        {
          note.length===0?// here we check the note are there or not if not there this code will executed
          <div className='card mb-3'>
          <div className="card-body">
            <h5 className="card-title">Message</h5>
            <p className="card-text">No Notes are avilable</p>
          </div>
          </div>:note.map((element)=>{//if there this will be executed
            return(
              <Notes element={element} key={element.id} note={note}setNote={setNote}setEditId={setEditId}/>
            )
          })
        }
      </div>
    </div>
   </div>
    </>
  )
  // function getNoteLs(){ // this function store the value to local storage if empty it resturn empty array
  //   const note=JSON.parse(localStorage.getItem("note"));
  //   if(note){
  //     return note
  //   }
  //   else{
  //     return []
  //   }
  // }
}
