import React, {useEffect,useState} from 'react'
import './App.css'
const api = {
  
 beg: "https://api.openweathermap.org/data/2.5/weather?q=",
 end: "&appid=c5a305944abf387a76c113e3e39562bf&units=imperial"

}

//key c5a305944abf387a76c113e3e39562bf



function App() {
 
  
  const [search, setSearch] =useState("");
  const [weather,setWeather ] = useState({});



  const searchPressed = () => {
    fetch(api.beg+search+api.end)
    .then(res => res.json(
))
    .then(result => {
    setWeather(result)
    })
  }

  return (
    <>
   <div className='degrees'>
    <h2 id='location'>{weather.name}</h2>
    <h1 id='degree'>{weather.main.temp}</h1>
    <h2 id='hourly'>{weather.weather[0].main}</h2>
   </div>


   <div id='searchbar'>
    <nav>
      <input type="text" placeholder='Enter Location...' id='search'
      
      onChange={(e) => setSearch(e.target.value)}
      
      />
      <button id='btn' onClick={searchPressed}>Submit</button>
    </nav>
   </div>

    </>
  )
}

export default App
