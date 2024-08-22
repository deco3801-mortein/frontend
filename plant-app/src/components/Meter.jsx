// Function for returning Meter component
// Used in Detail page for displaying Sunlight and Moisture data.
function Meter(props) {

    const type = props.type
    const level = props.level

    // Variable for checking if data level is low enough that formatting will
    // require changing
    const lowLevel = level < 5
    // Different heights for level = 1, 2, 3, 4
    const lowLevelHeights = [50, 65, 80, 93]

    const title = type == "sunlight" ? "Sunlight Exposure" : "Soil Moisture"

    return (
        <div className={type}>
            <h2 className="bar-heading">{title}</h2>
            <div className="meter">
                <div className="level" style={{width: `${level}%`, height: `${lowLevel ? lowLevelHeights[level-1] : 100}%`}}></div>
            </div>
            <p className="level-label" style={{marginLeft: `${level - 2}%`}}>{level}</p>
        </div>
    )
}

export default Meter