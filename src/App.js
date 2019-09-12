import React,{useState, useEffect} from "react";
import axios from 'axios';
// import "./App.css";
import styled from 'styled-components';
import NPOD from '../src/Npod';
import Dated from '../src/Date';
import Title from '../src/Title';
import Explanation from "../src/Exp";



const StyledAppDisplay = styled.div`
    border: 2px solid red;
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-content: center;
    justify-content: center;
    margin: 0 auto;

    img {
    width: 60%;
    height: auto;
    margin-right: 1rem;
  }
`;

function App() {

  const today = new Date().toISOString().substr(0,10);

  const [dateState, setDateState] = useState(today);

  const handleChange = (e)=>{
    setDateState(e.target.value);
  }
  const [infos, setInfos] = useState({
  });

  useEffect(() =>{
  axios.get(`https://api.nasa.gov/planetary/apod?api_key=D7LVDgUPtRo7ViFBwSqBdO0eZpnjKoFmTrQiwMPW&date=${dateState}`)
      .then(res => {

        setInfos(res.data)
      })

      .catch(error => {
        alert(`GET 403 (Forbidden)`);
        
      });
  }, [dateState]); 

  return (
    <StyledAppDisplay className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>

      <div>
        <div>
           <h1>Hello there</h1>
        </div>

        
        {
        !infos ? <h3>Loading...</h3>:
        <section>
          <Dated today={dateState} handleChange={handleChange}/>
          <NPOD source={infos} />
          <Title title ={infos}/>
          <Explanation exp={infos}/>
        </section>
        }
      </div>
       
      
    </StyledAppDisplay>    
  
  );
}

export default App;


