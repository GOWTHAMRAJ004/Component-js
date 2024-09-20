
import './App.css';
import {useState} from 'react';
function Card(){
  const [count , setCount ] =useState(1); 
  function handledcr(){
    setCount(count - 1);
  }
  function handlingincr (){
    setCount(count + 1)
  }
  function valueTake(){
    const obj = {name:"hema", age : 11};
    return obj.name;
  }
   
const [name , setName] = useState("gowtham");

function changeName(){
  setName (valueTake)
}

      return (
        <div>
         <span> hi these  {name }</span>
           <button onClick={handlingincr}>+</button>
           <span>{count}</span>
           <button onClick={handledcr}>-</button>
           <button onClick={changeName}>subcribe</button>
        </div>
       
      );
}
export default Card;