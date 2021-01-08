import './App.css';
import React,{useState} from 'react';
const api={
  key:"68de0485b291a7d1ec512dc70e964fc8",
  base:"https://api.openweathermap.org/data/2.5/",
}
function App() {

const [query, setquery] = useState('');
const [weather, setweather] = useState({})

const dateBuilder= (d)=>{
      let months=["January","February","March","April","May","June","July","August","September","October","November","December"]
      let days=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

      let day =days[d.getDay()];
      let month= months[d.getMonth()];
      let date=d.getDate();
      let year =d.getFullYear();
  return `${day} ${date} ${month} ${year}`
}
//api.openweathermap.org/data/2.5/weather?id=524901&appid=YOUR_API_KEY
 const search = evt=>{
   if(evt.key==="Enter"){
     fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
     .then(res=>res.json())
     .then(result=>{
      setweather(result);
      setquery('');
      console.log(result)
      })
   }
  }
  return (
    <div className={
    (typeof weather.main!= "undefined")?
    ((weather.main.temp > 16)?'app warm':'app')
      :'app'}>
        <div className="search-bar">
         <input type="text" placeholder="Search..." 
         onChange={(e)=>setquery(e.target.value)}
         value={query}
         onKeyPress={search}
         />
        </div>
        {(typeof weather.main != "undefined")?(
        <>
          <div className="location-box">
            <div className="location">{weather.name} {weather.sys.country}</div>
            <div className="date">{dateBuilder(new Date())}</div>
          </div>
          <div className="weather-box">
            <div className="temp">{Math.round(weather.main.temp)}°c</div>
            <div className="weather">{weather.weather[0].main}</div>
          </div>
        </>)
        :('')}
     </div>
  );
}

export default App;
