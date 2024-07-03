import React from 'react';
import {useNavigate} from "react-router-dom";
import '../assets/css/styles.css';
import SentimentAnalysis from "../pages/SentimentAnalysis";

const Sidebar = () => {
    const navigate = useNavigate();
    return (
        <div className="sidebar">
            <h2 onClick={() => navigate('/')}>Sidebar</h2>
            <ul>
                <li onClick={() => navigate('/rtod')}>Real time object detection</li>
                <li onClick={() => navigate('/rtbs')}>Real time body segmentation</li>
                <li onClick={() => navigate('/qna')}>Qna Bert</li>
            </ul>
        </div>
    );
};

export default Sidebar;
