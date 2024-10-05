import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Detail from "./pages/Detail";
import "./App.css";
import "./pages/Detail.css";
import SearchPage from "./pages/SearchPage";
import SearchDetail from "./pages/SearchDetail";
import Login from "./pages/Login";
import { Device } from "@deco3801-mortein/mortein-sdk/services.gen";

function App() {
    const [userData, setUserData] = useState(null);


    useEffect(() => {
         const devices = Device.getDevice();
         devices.promise.then((data) => {
             setUserData(data)
         })
    }, []);

    console.log(userData);

//     const [deviceData, setDeviceData] = useState(null);
//     useEffect(() => {
//         const deviceInfo = Device.getDeviceById();
//         deviceInfo.promise.then((data) => {
//             setDeviceData(data)
//         })
//    }, [setDeviceData]);
    

    //const [deviceData, setDeviceData] = useState(null);

    // useEffect(() => {
    //     if (userData) {

    //         const device1 = userData[0];
    //         const deviceInfo = Device.getDeviceById(device1);
    //         deviceInfo.promise.then((data) => {
    //             setDeviceData(data);
    //         })
    //         console.log(deviceInfo);
    //     }
    // }, [userData]);


    //const deviceTest = {
        //deviceId: '5646b954-9fe6-484b-b82e-72cb46ee1c61',
    //};
    //const data = HealthcheckData.getDeviceByDeviceIdHealthcheckDataLatest(deviceTest);
    //console.log(data);
    //console.log(data);
    //console.log(data2);
    

    // Function to toggle vibration
    
    // function toggleVibration(event) {
    //     let newDevices = [];
    //     for (let i = 0; i < userData.devices.length; i++) {
    //         let device = userData.devices[i];
    //         if (device.id === event.target.value) {
    //             device = {
    //                 ...device,
    //                 data: {
    //                     ...device.data,
    //                     vibration: !device.data.vibration,
    //                 },
    //             };
    //         }
    //         newDevices.push(device);
    //     }
    //     setUserData((prevData) => ({
    //         ...prevData,
    //         devices: newDevices,
    //     }));
    // }

    // // Fetch API data
    // useEffect(() => {
    //     fetch("http://localhost:3000/users/1")
    //         .then((response) => response.json())
    //         .then((data) => {
    //             setUserData(data);
    //         })
    //         .catch((error) => console.error(error));
    // }, []);
    
    return (
          <Router>
              <Routes>
                  <Route path="/" element={<HomePage userData={userData} />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/search" element={<SearchPage />} />
                  <Route path="/search-detail/:id" element={<SearchDetail />} />
                  <Route
                      path="/detail/:id"
                      element={
                          userData && (
                              <Detail /> //toggleVibration={toggleVibration} />
                          )
                      }
                  />
              </Routes>
          </Router>
    );
}

export default App;
