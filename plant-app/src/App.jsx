import { useEffect } from "react"
import { useState } from "react"
//import { BrowserRouter, Routes, Route, Navigate } from "react"
import Navbar from "./components/Navbar"
import Plants from "./pages/Plants"
import Detail from "./pages/Detail"
import "./App.css"

function App() {

  const [userData, setUserData] = useState(null)
  
  // Function toggles vibration button and state of userData
  // Currently does not send anything to API
  function toggleVibration(event) {
    let newDevices = []
    console.log(userData.devices)
    for (let i = 0; i < userData.devices.length; i++) {
      let device = userData.devices[i]
      console.log(userData.devices[i])
      if (device.id === event.target.value) {
        device = {
          ...device,
          data: {
            ...device.data,
            vibration: !device.data.vibration
          }
        }
      }
      newDevices.push(device)
        
    }
    console.log(newDevices)
    setUserData(prevData => ({
      ...prevData,
      devices: newDevices
    }))
  }
  
  // API fetch - does not incrementally fetch
  // Only fetches once on initial load - need to reload page to
  // view updates to API.
  useEffect(() => {
    fetch("http://localhost:3000/users/1")
      .then(response => response.json())
      .then(data => {
          setUserData(data);
          console.log(data);
      })
      .catch(error => console.error(error))
  }, [])

  return (
      <main>
        <Navbar left="Back" title="Detail"/>
        {userData && userData.devices[0] && <Detail plantData = {userData.devices[0]} toggleVibration={toggleVibration}/>}
      </main>
  )
}

export default App
