import React,{useState} from 'react'

export default function NewForm({title,setTitle,date,setDate,description,setDescription,note,setNote}) {
const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
const today = new Date().toISOString().split('T')[0];//it was use to set the present date.

const inputHandler=(e)=>{ // here validate the inputed value correct or not if correct here set the value
    if(e.target.id==="title"){
    setTitle(e.target.value)
    }
    else if(e.target.id==="date"){
        setDate(e.target.value);
    }
    else{
        setDescription(e.target.value);
    }
    if(title&&date&&description){ // here if all the values are inserted then only submit button enabled
        setIsSubmitDisabled(false);
    } else {
      setIsSubmitDisabled(true);
    }
}
const addNoteHandler=(e)=>{
    e.preventDefault() // here we set the browser default sate and convert the json formate
    if(title!==""&&date!==""&&description!=="")
    {
        setNote((notes)=>{
            return(
                [...notes,{
                    title:title,
                    date:date,
                    description:description,
                    id:new Date().getTime()
                }]
            )
        })
    }

    setDate(""); // when we submit the button all the feild set to null
    setTitle("");
    setDescription("")
    

}

 return (
<>
    <center><h3>ADD YOUR NOTE HERE</h3></center>
     <div className="container">
        <div className="row justify-content-center">
    <form style={{border:"2px solid black",borderRadius:"10px",padding:"30px"}}>
      
      <div class="mb-3">
        <label htmlFor="title"class="form-label">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          class="form-control"
          onChange={inputHandler}
          
          placeholder='Enter the title'
          required
        />
      </div>
      <div class="mb-3">
        <label htmlFor="date"class="form-label">Date:</label>
        <input
          type="date"
          id="date"
          name="date"
          onChange={inputHandler}
          value={date}
          min={today}
          class="form-control"
          
          required
        />
      </div>
      <div class="mb-3">
        <label htmlFor="description"class="form-label">Description:</label>
        <textarea
          id="description"
          name="description"
          value={description}
          class="form-control"
          rows="3"
         onChange={inputHandler}
          placeholder='Enter the description'
          required
        />
      </div>
      <button type="submit"onClick={addNoteHandler}disabled={isSubmitDisabled}  className='btn btn-primary'>
        SaveNote 
      </button>
    </form>
    </div>
    
    </div>
    </>
  );

}
