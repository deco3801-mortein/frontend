import { useState } from "react";
import { FaQuestionCircle } from "react-icons/fa";
import PropTypes from "prop-types";
import Tip from "./Tip";
import "./Meter.css";

/**
 * Component for the meters used in the detail page.
 *
 * @param {string} type the type of meter (sunlight, moisture or temperature)
 * @param {string} level the number to be displayed on the meter
 * @param {bool} color the color meter's level
 * @returns {ReactNode} react element to render the meter
 */
function Meter({ type, level, color }) {
    const [showTip, setShowTip] = useState(false);

    // calculate the level of sunlight from the value given
    function sunlightLevel(value) {
        if (value < 20) return 0;
        if (value < 250) return 1;
        if (value < 800) return 2;
        if (value < 2500) return 3;
        if (value < 5000) return 4;
        if (value < 10000) return 5;
        if (value < 20000) return 6;
        if (value < 30000) return 7;
        if (value < 45000) return 8;
        if (value < 65535) return 9;
        return 10;
    }

    // function to return the comment that is displayed when the question mark icon is clicked
    const getGuidance = () => {
        switch (type) {
            case "moisture":
                if (level < 21)
                    return "Water your plant more frequently. Ideal soil moisture: 21% - 40% for non-vegetables, 40% - 80% for vegetables";
                if (level <= 40)
                    return "Water more frequently if plant is a vegetable. Ideal soil moisture for vegetables: 40%-80%";
                if (level > 40)
                    return "Reduce watering frequency if your plant is not a vegetable. Ideal soil moisture for non-vegetable plants: Between 21% - 40%";
                return "Reduce watering frequency. Ideal soil moisture: 21% - 40% for non-vegetables, 40% - 80% for vegetables";
            case "sunlight":
                switch (sunlightLevel(level)) {
                    case 0:
                        return "No sunlight / night";
                    case 1:
                        return "Dim light / indoor";
                    case 2:
                    case 3:
                        return "Optimal for plants requiring low light levels";
                    case 4:
                    case 5:
                        return "Optimal for plants requiring medium light levels";
                    case 6:
                    case 7:
                        return "Optimal for plants requiring high light levels";
                    case 8:
                    case 9:
                    case 10:
                        return "Optimal for plants requiring direct sunlight";
                    default:
                        return "";
                }
            case "temperature":
                if (level < 21)
                    return "Increase the temperature around your plant. Ideal temperature: 21°-29° C";
                if (level > 29)
                    return "Decrease the temperature around your plant. Ideal temperature: 21°-29° C";
                return "Ideal temperature: 21°-29° C";
            default:
                return "";
        }
    };

    return (
        <div className={type}>
            <h2 className="bar-heading">
                {type.charAt(0).toUpperCase() + type.slice(1)}
                <FaQuestionCircle className="question-icon" onClick={() => setShowTip(!showTip)} />
            </h2>
            <div className="meter">
                <div
                    className="level"
                    style={{
                        width: `${type == "sunlight" ? sunlightLevel(level) * 10 : level}%`,
                        backgroundColor: color,
                    }}
                ></div>
            </div>
            <p className="level-label">
                {type == "sunlight" ? sunlightLevel(level) : level}
                {type == "moisture" ? "%" : type == "temperature" ? "°C" : ""}
            </p>
            {showTip && <Tip content={getGuidance()} onClose={() => setShowTip(false)} />}
        </div>
    );
}

Meter.propTypes = {
    type: PropTypes.string.isRequired,
    level: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
};

export default Meter;
