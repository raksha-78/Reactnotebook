import React, { useState } from 'react';
import Notes from './Notes';

const Formcomponent = () => {
  const today = new Date().toISOString().split('T')[0];
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Update the state for the corresponding input field
    if (name === 'title') {
      setTitle(value);
    } else if (name === 'date') {
      setDate(value);
    } else if (name === 'description') {
      setDescription(value);
    }

    // Enable submit button if all fields are filled
    if (title && date && description) {
      setIsSubmitDisabled(false);
    } else {
      setIsSubmitDisabled(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform the action on form submission (e.g., API call, etc.)
    
    console.log('Submitted:', { title, date, description });
   
   

    // Reset the form after submission
    setTitle('');
    setDate('');
    setDescription('');
    setIsSubmitDisabled(true);
    
    
  };

  return (
    <>
    <center><h3>ADD YOUR NOTE HERE</h3></center>
     <div className="container">
        <div className="row justify-content-center">
    <form onSubmit={handleSubmit}style={{border:"2px solid black",borderRadius:"10px",padding:"30px"}}>
      
      <div class="mb-3">
        <label htmlFor="title"class="form-label">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          class="form-control"
          onChange={handleInputChange}
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
          min={today}
          value={date}
          class="form-control"
          onChange={handleInputChange}
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
          onChange={handleInputChange}
          placeholder='Enter the description'
          required
        />
      </div>
      <button type="submit" disabled={isSubmitDisabled} className='btn btn-primary'>
        SaveNote 
      </button>
    </form>
    </div>
    {/* {title && (
        <Notes
          title={title}
          date={date}
          description={description}
        />
      )} */}
    </div>
    </>
  );
};

export default Formcomponent;
