import React /*,{useState,useEffect}*/ from 'react'
// import EditModel from './EditModel';
import NewForm from '../NewForm';

function Notes({element,note,setNote,setEditId,title}) {

  // IF ANY API REQUIRED TO FETCH THE DETAILS 
  // const [apiData, setApiData] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  //       const data = await response.json();
  //       setApiData(data);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);
  
  // remove the element
  console.log(element) //
  const removeHandler=(id)=>{
   const newNote=note.filter((ele)=>{
    if(ele.id!==id){
      return ele;
    }

    
   })

   setNote(newNote)
   
  }
  //edit the note
  const editHandler=(id)=>{
    setEditId(id);
    note.filter((ele)=>{
     if(ele.id===id){
       document.getElementById("edittitle").value=ele.title;
       document.getElementById("editdate").value=ele.date;
       document.getElementById("editdescription").value=ele.description;
     }
     
    })
  }
  return (
    <>
  <div className='card mb-3'>
  <div className="card-body">
    <h4 className="card-title">{element.title}</h4>
    <h5 className="card-text">{element.description}</h5>
    <p className="card-text">
        {/* {apiData.map((item) => (
             <div key={item.id}>
              <p>{item.title}</p>
             </div>
            
          ))} */}
    </p>

    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>{editHandler(element.id)}}>
   
  Edit
</button>



    <button className='btn btn-danger mx-3' onClick={()=>{removeHandler(element.id)}}>Delete</button>

  </div>
  <div className="card-footer text-muted">
    Date on Creation {element.date}
  </div>
  </div> 

    
    </>
  )
}
export default  Notes;