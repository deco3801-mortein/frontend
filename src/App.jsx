// import React from 'react';
// import HomePage from './page/HomePage';
// import './App.css';

// function App() {
//     return (
//         <div className="App">
//             <HomePage />
//         </div>
//     );
// }

// export default App;

import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Detail from "./pages/Detail";
import "./App.css";
import "./pages/Detail.css";
import SearchPage from "./pages/SearchPage";
import SearchDetail from "./pages/SearchDetail";
import Login from "./pages/Login";
//import { Device } from "@deco3801-mortein/mortein-sdk/services.gen";

function App() {
    const [userData, setUserData] = useState(null);
    // const devices = Device.getDevice();
    // Function to toggle vibration
    function toggleVibration(event) {
        let newDevices = [];
        for (let i = 0; i < userData.devices.length; i++) {
            let device = userData.devices[i];
            if (device.id === event.target.value) {
                device = {
                    ...device,
                    data: {
                        ...device.data,
                        vibration: !device.data.vibration,
                    },
                };
            }
            newDevices.push(device);
        }
        setUserData((prevData) => ({
            ...prevData,
            devices: newDevices,
        }));
    }

    // Fetch API data
    useEffect(() => {
        fetch("http://localhost:3000/users/1")
            .then((response) => response.json())
            .then((data) => {
                setUserData(data);
            })
            .catch((error) => console.error(error));
    }, []);
    console.log(userData);
    let detailPages = [];
    if (userData) {
        detailPages = userData.devices.map((device) => (
            {path:`/detail/${device.id}`,
            element: <Detail
                        plantData={device}
                        toggleVibration={toggleVibration}
                      />
            })
        )  
    }

    const router = createBrowserRouter([
       {path: "/",
        element: <HomePage userData={userData} />
       },
       {
        path: "/login",
        element: <Login />
       },
       {
        path: "/search",
        element: <SearchPage />
       },
       {
        path: "/search-detail/:id",
        element: <SearchDetail />
       },
       ...detailPages
    ])
    console.log(detailPages);






    return (
        <RouterProvider router={router} />
         
    );
}

export default App;
