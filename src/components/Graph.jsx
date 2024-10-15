import PropTypes from "prop-types";
import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";
// Function for graph component
function Graph({ data }) {
    // get latest reading date information
    const date = new Date(data[0].timestamp);
    const year = date.getFullYear();
    const dayOfMonth = date.getDate();
    const month = date.getMonth();

    // get all data from the same day as date variable
    const dayData = data.filter((d) => {
        const dataDate = new Date(d.timestamp);
        return dataDate.getFullYear() == year && dataDate.getMonth() == month && dataDate.getDate() == dayOfMonth;
    });

    console.log(dayData);
    dayData.sort((a,b) => {
        return new Date(a.timestamp) - new Date(b.timestamp);
    });
    console.log(dayData);

    const timeData = dayData.map((d) => {
        const dataDate = new Date(d.timestamp);
        return {timestamp: `${dataDate.getHours()}:${dataDate.getMinutes()}:${dataDate.getSeconds()}`,
                seconds: dataDate.getTime(),
                sunlight: d.sunlight
                }
    })
    // check whether all hours have been iterated through
    // while (currentHour < 24) {
    //     for (let i = 0; i < dayData.length; i++) {
    //         const dataDate = new Date(dayData[i].timestamp); // the date data for the current data point
    //         // check if data hour is in the currentHour
    //         if (dataDate.getHours() == currentHour) {
    //             currentHourData.push(dayData[i])
    //         }
    //     }

    //     // only store the sunlight data 
    //     const sunlightValues = currentHourData.map((d) => {
    //         return d.sunlight;
    //     })
    //     let sum = 0;
    //     for (let i = 0; i < sunlightValues.length; i++) {
    //         sum += sunlightValues[i];
    //     }

    //     const avg = sum / sunlightValues.length; // average for this hour
    //     dayDataPerHour.push(avg);
    //     hours.push(currentHour);
    // }
    
    console.log(timeData);
    return (
        <>
        <h2>{`${dayOfMonth}-${month+1}-${year}`}</h2>
            <ResponsiveContainer width="100%" aspect={3}>
                {dayData && <LineChart data={timeData}>
                    <XAxis dataKey="timestamp" />
                    <YAxis dataKey="sunlight" />
                    <Tooltip />
                    <Line type="monotone" dataKey="sunlight" fill="#8884d8" />
                </LineChart>}
            </ResponsiveContainer>
        </>
    );
}

Graph.propTypes = {
     data: PropTypes.array,
 };

export default Graph;
