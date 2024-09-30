import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Detail from "./pages/Detail";
import "./App.css";
import "./pages/Detail.css";
import SearchPage from "./pages/SearchPage";
import SearchDetail from "./pages/SearchDetail";
import Login from "./pages/Login";

function App() {
    const [userData, setUserData] = useState(null);

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

    return (
        <Router>
            {/* <Navbar left="Back" title="Detail" /> */}
            <Routes>
                <Route path="/" element={<HomePage userData={userData} />} />
                <Route path="/login" element={<Login />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/search-detail/:id" element={<SearchDetail />} />
                <Route
                    path="/detail/:id"
                    element={
                        userData &&
                        userData.devices.length > 0 && (
                            <Detail userData={userData} toggleVibration={toggleVibration} />
                        )
                    }
                />
            </Routes>
        </Router>
    );
}

export default App;
