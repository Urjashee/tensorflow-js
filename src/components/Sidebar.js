import React from 'react';
import {useNavigate} from "react-router-dom";
import '../assets/css/styles.css';

const Sidebar = () => {
    const navigate = useNavigate();
    return (
        <div className="sidebar">
            <h2 onClick={() => navigate('/')}>Sidebar</h2>
            <ul>
                <li onClick={() => navigate('/rtod')}>Real time object detection</li>
                <li>Services</li>
                <li>Clients</li>
                <li>Contact</li>
            </ul>
        </div>
    );
};

export default Sidebar;
