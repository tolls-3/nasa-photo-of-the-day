import React,{useState, useEffect} from "react";
import axios from 'axios';
import "./App.css";
import NPOD from '../src/Npod';
import Date from '../src/Date';
import Title from '../src/Title';
import Explanation from "../src/Exp";


const nasaApi = 'https://api.nasa.gov/planetary/apod?api_key=D7LVDgUPtRo7ViFBwSqBdO0eZpnjKoFmTrQiwMPW';

function App() {
  const [nasaImg,updateNasaImg]= useState('');
  const [nasaDate,updateNasaDate]=useState('');
  const [nasaExp,updateNasaExp]=useState('');
  const [nasaTitle,updateNasaTitle]=useState('');

  useEffect(() =>{
  axios.get(nasaApi)
      .then(response => {
        updateNasaImg(response.data.url);
        updateNasaDate(response.data.date);
        updateNasaExp(response.data.explanation);
        updateNasaTitle(response.data.title);
        // debugger;      
      })

      .catch(error => {
        alert(`GET ${nasaApi} 403 (Forbidden)`);
        
      });
  }, []); 

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>

      <div>
        <h1>Hello there</h1>
        {
          !nasaImg ? <h3>Loading...</h3>:
        <div>
          <Date date={nasaDate}/>
          <NPOD source={nasaImg}/>
          <Title title ={nasaTitle}/>
          <Explanation exp={nasaExp}/>
        </div>
        }
      </div>
    
      
    </div>    
  
  );
}

export default App;


// if (!props.photoOfTheDay) return <h3>Loading...</h3>;

// // Display your component as normal after the data has been fetched
// return (
//   {* your normal JSX here *}
// );
