import React from "react";
import { useNavigate } from "react-router-dom";
import "./GuidancePage.css";
import Header from "../components/Header";
import plantImagePath from "../assets/img/plant.gif";
import pestImagePath from "../assets/img/pest.gif";

const GuidancePage = () => {
    const navigate = useNavigate();

    return (
        <div className="garden-guidance-page">
            <Header left="Back" title="Garden Guidance" showGuide={false} />
            <div className="icon-container">
                <div className="icon-circle" onClick={() => navigate("/search")}>
                    <img src={plantImagePath} alt="Plant" className="custom-icon" />
                </div>
                <p onClick={() => navigate("/search")}>Plant</p>
            </div>
            <div className="icon-container" onClick={() => navigate("/pest-search")}>
                <div className="icon-circle">
                    <img src={pestImagePath} alt="Pest" className="custom-icon" />
                </div>
                <p>Pest</p>
            </div>
        </div>
    );
};

export default GuidancePage;
