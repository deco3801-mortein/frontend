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
    const [devicesNotFound, setDevicesNotFound] = useState(false);

    const [devices, setDevices] = useState(null);

    useEffect(() => {
        Device.getDevice()
            .then((data) => {
                setDevices(data);
            })
            .catch((error) => {
                console.error(error.message);
                setDevicesNotFound(true);
            });
    }, []);
    console.log(devices);

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

    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={<HomePage devices={devices} devicesNotFound={devicesNotFound} />}
                />
                <Route path="/login" element={<Login />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/search-detail/:id" element={<SearchDetail />} />
                <Route
                    path="/detail/:id"
                    element={
                        devices && (
                            <Detail /> //toggleVibration={toggleVibration} />
                        )
                    }
                />
            </Routes>
        </Router>
    );
}

export default App;
