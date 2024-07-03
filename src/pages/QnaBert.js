import React, {useRef, useState, useEffect} from 'react';
import * as tf from "@tensorflow/tfjs"
import * as qna from '@tensorflow-models/qna';
import Sidebar from "../components/Sidebar";

function QnaBert(props) {
    const passageRef = useRef(null)
    const questionRef = useRef(null)

    const [answer,setAnswer] = useState();
    const [model,setModel] = useState(null);

    return (
        <div className="App">
            <Sidebar/>
            <div className="content">
                <header className="App-header">
                    <h1>Question and Answer (Bert) </h1>
                </header>

            </div>
        </div>
    );
}

export default QnaBert;