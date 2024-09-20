
import './App.css';
import Iteam from './iteamList';
function  CheckBox  ({handleDelete,handleChange,iteam})  {

  
  return (
    
    <Iteam iteam = {iteam} 
    handleChange= {handleChange}
    handleDelete = {handleDelete}/> 
  )
}

export default CheckBox;