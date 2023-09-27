import{useEffect, useState} from 'react'
import Weather from './Weather';

function App() {
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);
  const [isLoading, setIsLoading] = useState(true)

useEffect(() => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      setLat(position.coords.latitude);
      setLng(position.coords.longitude);
      setIsLoading(false)
    }, (error) => {
      alert(error);
    })
  }
  else{
    alert('Selaimsestasi puuttuu geolocation tuki')
  }

}, [])

if (isLoading) {
   return <div><p>Loading your position...</p></div>
} else {
  return (
    <div>
    <h1>
      Position:
      {lat.toFixed(3)} , 
      {lng.toFixed(3)}
    </h1>
    <Weather lat={lat} lng={lng}/>
    </div>
  );
    }
}

export default App;
