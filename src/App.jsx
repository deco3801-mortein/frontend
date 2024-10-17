import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Device } from "@deco3801-mortein/mortein-sdk/services.gen";
import HomePage from "./pages/HomePage";
import Detail from "./pages/Detail";
import SearchPage from "./pages/SearchPage";
import SearchDetail from "./pages/SearchDetail";
import Login from "./pages/Login";
import PestPage from "./pages/PestPage";
import GuidancePage from "./pages/GuidancePage";
import PestDetail from "./pages/PestDetail";
import "./App.css";
import "./pages/Detail.css";

function App() {
    // stores whether the device exists in the server
    const [devicesNotFound, setDevicesNotFound] = useState(false);

    const [devices, setDevices] = useState(null);

    // fetch all devices from the server
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

    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={<HomePage devices={devices} devicesNotFound={devicesNotFound} />}
                />
                <Route path="/login" element={<Login />} />
                <Route path="/garden-guidance" element={<GuidancePage />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/search-detail/:id" element={<SearchDetail />} />
                <Route path="/pest-search" element={<PestPage />} />
                <Route path="/pest-search/:id" element={<PestDetail />} />
                <Route path="/detail/:id" element={devices && <Detail />} />
            </Routes>
        </Router>
    );
}

export default App;
