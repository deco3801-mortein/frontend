// // import PropTypes from "prop-types";
// // // Function for returning Meter component
// // // Used in Detail page for displaying Sunlight and Moisture data.
// // function Meter(props) {
// //     const type = props.type;
// //     const level = props.level;

// //     // Variable for checking if data level is low enough that formatting will
// //     // require changing
// //     const lowLevel = level < 5;
// //     // Different heights for level = 1, 2, 3, 4
// //     const lowLevelHeights = [50, 65, 80, 93];

// //     const title = type == "sunlight" ? "Sunlight Exposure" : "Soil Moisture";

// //     return (
// //         <div className={type}>
// //             <h2 className="bar-heading">{title}</h2>
// //             <div className="meter">
// //                 <div
// //                     className="level"
// //                     style={{
// //                         width: `${level}%`,
// //                         height: `${lowLevel ? lowLevelHeights[level - 1] : 100}%`,
// //                     }}
// //                 ></div>
// //             </div>
// //             <p className="level-label" style={{ marginLeft: `${level - 2}%` }}>
// //                 {level}
// //             </p>
// //         </div>
// //     );
// // }

// // Meter.propTypes = {
// //     type: PropTypes.string,
// //     level: PropTypes.number,
// // };

// // export default Meter;


// import PropTypes from "prop-types";

// // Function for returning Meter component
// // Used in Detail page for displaying Sunlight and Moisture data.
// function Meter(props) {
//     const { type, level } = props;

//     // Variable for checking if data level is low enough that formatting will require changing
//     const lowLevel = level < 5;
//     // Different heights for level = 1, 2, 3, 4
//     const lowLevelHeights = [50, 65, 80, 93];

//     const title = type === "sunlight" ? "Sunlight Exposure" 
//                 : type === "moisture" ? "Soil Moisture"
//                 : type === "temperature" ? "Current Temperature"
//                 : "Humidity";

//     // Determine color: red for moisture < 30%, otherwise default color
//     const color = type === "moisture" && level < 40 ? "red" : "green";

//     return (
//         <div className={type}>
//             <h2 className="bar-heading">{title}</h2>
//             <div className="meter">
//                 <div
//                     className="level"
//                     style={{
//                         width: `${level}%`,
//                         height: `${lowLevel ? lowLevelHeights[level - 1] : 100}%`,
//                         backgroundColor: color, // Apply the dynamic color based on moisture level
//                     }}
//                 ></div>
//             </div>
//             <p className="level-label" style={{ marginLeft: `${level - 2}%` }}>
//                 {level}%
//             </p>
//         </div>
//     );
// }

// Meter.propTypes = {
//     type: PropTypes.string.isRequired,
//     level: PropTypes.number.isRequired,
// };

// export default Meter;

// import PropTypes from "prop-types";

// function Meter(props) {
//     const { type, level, color: propColor } = props;
    
//     // Variable for checking if data level is low enough that formatting will require changing
//     const lowLevel = level < 5;
    
//     // Different heights for level = 1, 2, 3, 4
//     const lowLevelHeights = [50, 65, 80, 93];
    
//     const title = type === "sunlight" ? "Sunlight Exposure"
//         : type === "moisture" ? "Soil Moisture"
//         : type === "temperature" ? "Current Temperature"
//         : "Humidity";
    
//     // Use propColor if provided, otherwise use the default logic
//     const color = propColor || (type === "moisture" && level < 40 ? "red" : "green");

//     return (
//         <div className={type}>
//             <h2 className="bar-heading">{title}</h2>
//             <div className="meter">
//                 <div
//                     className="level"
//                     style={{
//                         width: `${level}%`,
//                         height: `${lowLevel ? lowLevelHeights[level - 1] : 100}%`,
//                         backgroundColor: color,
//                     }}
//                 ></div>
//             </div>
//             <p className="level-label" style={{ marginLeft: `${level - 2}%` }}>
//                 {level}%
//             </p>
//         </div>
//     );
// }

// Meter.propTypes = {
//     type: PropTypes.string.isRequired,
//     level: PropTypes.number.isRequired,
//     color: PropTypes.string,
// };

// export default Meter;

import React, { useState } from 'react';
import PropTypes from "prop-types";
import { FaQuestionCircle } from 'react-icons/fa';
import Tip from './Tip';


function Meter({ type, level, color }) {
  const [showTip, setShowTip] = useState(false);

  const isHealthy = () => {
    switch (type) {
      case "moisture":
        return level >= 21 && level <= 40;
      case "sunlight":
        return level >= 50;
      case "humidity":
        return level >= 60 && level <= 70;
      case "temperature":
        return level >= 21 && level <= 29;
      default:
        return true;
    }
  };

  const getGuidance = () => {
    switch (type) {
      case "moisture":
        if (level < 21) return "Water your plant more frequently. Ideal soil moisture: Between 21% - 40%";
        if (level > 40) return "Reduce watering frequency. Ideal soil moisture: Between 21% - 40%";
        return "Ideal soil moisture: Between 21% - 40%";
      case "sunlight":
        if (level < 50) return "Move your plant to a sunnier spot. Full sun: Plants need at least 6 hours of direct sun daily";
        return "Full sun: Plants need at least 6 hours of direct sun daily";
      case "humidity":
        if (level < 60) return "Increase humidity around your plant. Ideal humidity for most adult plants: Between 60% - 70%";
        if (level > 70) return "Decrease humidity around your plant. Ideal humidity for most adult plants: Between 60% - 70%";
        return "Ideal humidity for most adult plants: Between 60% - 70%";
      case "temperature":
        if (level < 21) return "Increase the temperature around your plant. Ideal temperature: 21°-29° C";
        if (level > 29) return "Decrease the temperature around your plant. Ideal temperature: 21°-29° C";
        return "Ideal temperature: 21°-29° C";
      default:
        return "";
    }
  };

  return (
    <div className={type}>
      <h2 className="bar-heading">
        {type.charAt(0).toUpperCase() + type.slice(1)}
        {!isHealthy() && (
          <FaQuestionCircle
            className="question-icon"
            onClick={() => setShowTip(!showTip)}
          />
        )}
      </h2>
      <div className="meter">
        <div
          className="level"
          style={{
            width: `${level}%`,
            backgroundColor: color,
          }}
        ></div>
      </div>
      <p className="level-label">{level}%</p>
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