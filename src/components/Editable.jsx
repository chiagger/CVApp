import { useState } from 'react'
import '../styles/Editable.css'

function Editable(props) {
    const [field, setField] = useState('');
    const [inputVisible, setInputVisible] = useState(true);
    const [textVisible, setTextVisible] = useState(false);
    const [editVisible, setEditVisible] = useState(false);
    const [submitVisible, setSubmitVisible] = useState(true);


    const handleEdit = () =>{
      setInputVisible(true);
      setTextVisible(false);
      setEditVisible(false);
      setSubmitVisible(true);
    };

    const handleSubmit = (e) =>{
      e.preventDefault();
      if (e.target.field.value !== ''){
        setField(e.target.field.value);
      }
      
      setInputVisible(false);
      setTextVisible(true);
      setEditVisible(true);
      setSubmitVisible(false);
    };
  
    return (
       <div className="editable">

        {textVisible &&<div className='text'>{field}</div>}

        {inputVisible && submitVisible && (
          <form onSubmit={handleSubmit}>
            <input type="text" name="field" placeholder={props.text} />
            <button type="submit" className="material-symbols-outlined">done</button>
          </form>)}

        {editVisible && <span className="material-symbols-outlined"
        onClick={handleEdit}>edit</span>}

       

      </div>
    )
}

  
export default Editable;