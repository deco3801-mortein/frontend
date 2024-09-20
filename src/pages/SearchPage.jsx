import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchBar } from '../components/SearchBar';
import Navbar from '../components/Navbar';
import '../pages/SearchPage.css';

const SearchPage = () => {
    const [results, setResults] = useState([]);
    const navigate = useNavigate(); // Initialize navigate hook

    // Handle clicking on a plant to navigate to the SearchDetail page
    const handlePlantClick = (id) => {
        navigate(`/search-detail/${id}`); // Navigate to the renamed SearchDetail page
    };
    let new_results = [];

    return (
        <div className="search-page">
            <Navbar left="Back" title="Search for a Plant" showGuide={false} />
            <SearchBar setResults={setResults} />
            {/* {console.log(results)}
            {console.log(results.map((plant) => plant.common_name))}
            <ul>
                {new_results = results.map((plant) => (
                    <li>
                        {plant.common_name}
                    </li>
                ))}
                {new_results}
            </ul> */}
            <ul className="results-list">
                {results.map((plant) => (
                    <li key={plant.id} className="result-item" onClick={() => handlePlantClick(plant.id)}>
                        <h2>{plant.common_name}</h2>
                        {plant.default_image && (
                        <img
                            src={plant.default_image.thumbnail}
                            alt={plant.common_name}
                            className="plant-thumbnail"
                        />
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SearchPage;
