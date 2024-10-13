import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import PestSearch from "../components/PestSearch";
import "../pages/SearchPage.css";
import pestsData from "../data/pest.json";

const PestPage = () => {
    const [results, setResults] = useState([]);
    const navigate = useNavigate();

    // Handle clicking on a pest to navigate to the detail page
    const handlePestClick = (id) => {
        navigate(`/pest-search/${id}`);
    };

    return (
        <div className="pest-page">
            <Header left="Back" title="Search for a Pest" showGuide={false} />
            <PestSearch setResults={setResults} data={pestsData.pest} />
            <ul className="results-list">
                {results.map((pest) => (
                    <li
                        key={pest.name}
                        className="result-item"
                        onClick={() => handlePestClick(pest.id)}
                    >
                        <h2>{pest.name}</h2>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PestPage;
