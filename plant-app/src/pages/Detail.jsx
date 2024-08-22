import Meter from "../components/Meter";

// Function for main portion of detail page.
function Detail(props) {
    // Data from API to be displayed
    const moistureData = props.plantData.data.moisture
    const sunlightData = props.plantData.data.sunlight

    return (
        <div className="detail">
            <div className="plant-main">
                <img className="plant-image"></img>
                <h2>{props.plantData.name}</h2>
            </div>

            <div className="plant-health">
                <h2 className="plant-health-title">Plant Health</h2>
                <Meter type="moisture" level={moistureData} />
                <Meter type="sunlight" level={sunlightData} />
                <div className="vibration">
                    <h2 className="vibration-heading">Vibration</h2>
                    <button className="vibration-button" 
                            value={props.plantData.id} 
                            onClick={props.toggleVibration}>
                        {props.plantData.data.vibration ? "Off" : "On"}
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Detail