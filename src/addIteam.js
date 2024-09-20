import {FaPlus} from 'react-icons/fa';
import { useRef } from 'react';

const AddIteam = ({newIteam , setNewIteam , handleSubmit}) => {
  const inputRef = useRef();
  return (
    <form action=""   onSubmit={handleSubmit}>
        <label htmlFor=""> Add Iteam </label>
        <input type="text"
        ref={inputRef}
        autoFocus
        id='AddIteams' 
        placeholder='AddIteams'
        value={newIteam}
        onChange={(e)=> setNewIteam(e.target.value)}  
      
        required/>
        <button type='submit'
        onClick={()=> inputRef.current.focus()}
        aria-label='Add Iteam'>
            <FaPlus />
        </button>
    </form>
  )
}

export default AddIteam;