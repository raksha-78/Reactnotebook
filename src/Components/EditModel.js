import React,{useState} from 'react'

 function EditModel({editId,note,setNote}) {
    const today = new Date().toISOString().split('T')[0];
    const updateHandler=()=>{
      const updateNote=note.map((ele)=>{ // here we update the data
        if(editId==ele.id){
          return({...ele, title:document.getElementById("edittitle").value,
          date:document.getElementById("editdate").value,
          description:document.getElementById("editdescription").value})
         
        }
        else{
          return ele;
        }
      })
      
console.log(editId);
setNote(updateNote)
    }
  
  return (
   <>


<div className="modal fade" id="exampleModal" tabindex="-1" area-labelled="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Edit Notes</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <form >
      
      <div class="mb-3">
        <label htmlFor="title"class="form-label">Title:</label>
        <input
          type="text"
          id="edittitle"
          name="title"
          class="form-control"
          placeholder='Enter the title'
          required
        />
      </div>
      <div class="mb-3">
        <label htmlFor="date"class="form-label">Date:</label>
        <input
          type="date"
          id="editdate"
          name="date"
          min={today}
          
          class="form-control"
          
          required
        />
      </div>
      <div class="mb-3">
        <label htmlFor="description"class="form-label">Description:</label>
        <textarea
          id="editdescription"
          name="description"
          
          class="form-control"
          rows="3"
          
          placeholder='Enter the description'
          required
        />
      </div>
     
    </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={updateHandler}>EditNotes</button>
       
      </div>
    </div>
  </div>
</div>
   </>
  )
}
export default EditModel;