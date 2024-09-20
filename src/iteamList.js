import { FaRegTrashCan } from "react-icons/fa6";

function Iteam({handleDelete,handleChange,iteam}){
    return (
<div className="cardss">
        <ul className="listofvalue">
        {
            (iteam.length === 0)? <h1>the empty array</h1>:
            iteam.map((iteam)=>( 
    
                       <li className="items" key = {iteam.id}>
                    <input type="checkbox" checked={iteam.checked} onChange={()=>handleChange(iteam.id)}/>
                    <label 
                    style={(iteam.checked)? {textDecoration: 'line-through'}:null} onDoubleClick={()=> handleChange(iteam.id)}>{iteam.iteam
                    
                    }</label>
                    <button><FaRegTrashCan  onClick={() => handle+Delete(iteam.id)}/></button>

                </li>
            ))
        }
      
        </ul>
       

    </div>
    );
}
export default Iteam;