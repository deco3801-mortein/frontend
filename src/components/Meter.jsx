import PropTypes from "prop-types";
// Function for returning Meter component
// Used in Detail page for displaying Sunlight and Moisture data.
function Meter(props) {
    const type = props.type;
    const level = props.level;

    // Variable for checking if data level is low enough that formatting will
    // require changing
    const lowLevel = level < 5;
    // Different heights for level = 1, 2, 3, 4
    const lowLevelHeights = [50, 65, 80, 93];

    let title;

    switch (type) {
        case "sunlight":
            title = "Sunlight Exposure";
            break;
        case "moisture":
            title = "Soil Moisture";
            break;
        default:
            title = "Temperature";
    };

    return (
        <div className={type}>
            <h2 className="bar-heading">{title}</h2>
            <div className="meter">
                <div
                    className="level"
                    style={{
                        width: `${level}%`,
                        height: `${lowLevel ? lowLevelHeights[level - 1] : 100}%`,
                    }}
                ></div>
            </div>
            <p className="level-label" style={{ marginLeft: `${level - 2}%` }}>
                {level}
            </p>
        </div>
    );
}

Meter.propTypes = {
    type: PropTypes.string,
    level: PropTypes.number,
};

export default Meter;
