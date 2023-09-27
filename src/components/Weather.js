import React, {useEffect, useState} from 'react'
import axios from 'axios';

const API_URL = "https://api.openweathermap.org/data/2.5/weather?"
const API_KEY = "c67f856ca90f2a16f19ce09b4c1d5f48"

export default function Weather({lat, lng}) {
const [temp, setTemp] = useState(0)

useEffect(() => {
    const address = API_URL +
    'lat=' + lat +
    '&lon=' + lng +
    '&units=metric' +
    '&appid=' + API_KEY

    axios.get(address)
    .then((response) => {
        setTemp(response.data.main.temp)
    }).catch (error => {
        alert(error)
    })

}, [])


  return (
    <div>
    <h3>Current Weather</h3>
    <p>Temperature: {temp} 'C</p>
    </div>
  )
}
