import { useState , useEffect } from "react";
import './App.css';
import Footer from './footer';
import Header from './header';
import Card from './card';
import CheckBox from './checkBox';
import AddIteam from './addIteam';
import Search from './search';

function App() {
  const endPoint = "http://localhost:8080/ToDo/getCourse";
  const [newIteam , setNewIteam ] = useState("");
  const [iteam , setIteams] = useState([]);
const [intSearch , setsearch]=useState("");
useEffect(() => {
  console.log("loged ")
  const fetchData = async () => {
    try {
      const response = await fetch(endPoint,{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // Include cookies if needed
      });
      const data = await response.json();
      console.log(data);
      setIteams(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  fetchData();
}, []); 
const  handleChange=(id)=>{
console.log(id);
const newList = iteam.map((iteam)=> iteam.id === id ? {...iteam , checked: !iteam.checked}:iteam);


setIteams(newList);
}
const addIteams = (item)=>{
  const id = iteam.length? iteam[iteam.length - 1] +1: 1;
  const addvalue = {id  : id,checked: false ,iteam:item  };
  const listadded = [...iteam , addvalue];
  setIteams(listadded);

}
function handleDelete(id){
console.log(id);
const newsList = iteam.filter((iteam) => iteam.id !== id);
setIteams(newsList);
console.log(newsList);

}
function handleSubmit (e){
  e.preventDefault();
  if(!newIteam)
    return;
 addIteams(newIteam);
  setNewIteam('');
}

  return (
    <div className='mains'>
      <Header title = "To Do List "/> 
      <AddIteam newIteam = {newIteam}
      setNewIteam = {setNewIteam}
      handleSubmit= {handleSubmit}
       />
       <Search 
       intSearch = {intSearch} 
       setsearch = {setsearch}
      
       />
      <Card />
      <CheckBox  iteam = {iteam.filter((itm) => itm.iteam.toLowerCase().includes(intSearch.toLowerCase()))} 
      handleChange= {handleChange}
      handleDelete = {handleDelete}
      />
      <Footer  iteam = {iteam} />
    </div>
  )
}

export default App;
