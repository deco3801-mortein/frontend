import PropTypes from "prop-types";
import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";
// Function for graph component
function Graph({ data }) {
    // get latest reading date information
    let averages = [];
    for (let i = 0; i < data.length; i = i + 10) {
        const group = data.slice(i, i + 10);
        let sum = 0;
        for (let j = 0; j < group.length; j++) {
            sum += group[j].sunlight;
        }
        averages.push(sum / group.length);
    }
    // const date = new Date(data[0].timestamp);
    // const year = date.getUTCFullYear();
    // const dayOfMonth = date.getUTCDate();
    // const month = date.getUTCMonth();

    // // get all data from the same day as date variable
    // const dayData = data.filter((d) => {
    //     const dataDate = new Date(d.timestamp);
    //     return dataDate.getUTCFullYear() == year && dataDate.getUTCMonth() == month && dataDate.getUTCDate() == dayOfMonth;
    // });

    // console.log(dayData);
    // dayData.sort((a,b) => {
    //     return new Date(a.timestamp) - new Date(b.timestamp);
    // });
    // console.log(dayData);

    // const timeData = dayData.map((d) => {
    //     const dataDate = new Date(d.timestamp);
    //     return {timestamp: `${dataDate.getUTCHours()}:${dataDate.getUTCMinutes()}:${dataDate.getUTCSeconds()}`,
    //             seconds: dataDate.getTime(),
    //             sunlight: d.sunlight
    //             }
    // })
    // const currentDate = new Date(dayData[0].timestamp);
    // console.log(currentDate);
    // const currentMinute = currentDate.getUTCMinutes();
    // console.log(currentMinute);
    // for (let i = 0; i < dayData.length; i++) {
    //     const dataDate = new Date(dayData[i].timestamp); // the date data for the current data point
    //     // check if data hour is in the currentHour
    //     if (dataDate.getUTCMinutes() == currentMinute) {
    //         console.log("hello");
    //     }
    // }

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
    
    //console.log(timeData);
    let index = -1;
    const newFormat = averages.map((d) => {
        index++;
        return {
            id: index,
            sunlight: d
        }
    });

    return (
        <>
            {/* <h2>{`${dayOfMonth}-${month+1}-${year}`}</h2> */}
            <ResponsiveContainer width="100%" aspect={3}>
                    {newFormat && <LineChart data={newFormat}>
                        <XAxis type="number" dataKey="id" />
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
