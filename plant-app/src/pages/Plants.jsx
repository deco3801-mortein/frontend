import PlantIcon from "../components/PlantIcon"
import { useEffect } from "react"
import { useState } from "react"
function Plants() {

    const [plantData, setPlantData] = useState({})
    useEffect(() => {
        fetch("http://localhost:3000/users")
        .then(response => response.json())
        .then(data => setPlantData(data))
        .catch(error => console.error(error))
  }, [])

   useEffect(() => {
    let interval = setInterval(() => {
    fetch("http://localhost:3000/users")
    .then(response => response.json())
    .then(data => setPlantData(data))
    .catch(error => console.error(error))
}, 10000)
}, [])

    const userPlants = plantData[0];
    const devices = userPlants["devices"];
    const userPlantComponents = devices.map((d) => <PlantIcon key={d.id} name={d.name}/>)
    
    return (
        <div className="plants-page">
            {userPlantComponents}
        </div>
    )
}

export default Plants