import React, {useRef, useState, useEffect} from 'react';
import * as tf from "@tensorflow/tfjs"
import Webcam from 'react-webcam'
import * as bodyPix from '@tensorflow-models/body-pix';

import Sidebar from "../components/Sidebar";

function RealTimeBodySegmentation(props) {
    const webcamRef = useRef(null);
    const canvasRef = useRef(null);

    // useEffect(() => {
    //     loadBodyPixModel();
    // }, []);
    const loadBodyPixModel = async() =>{
        const model = await bodyPix.load();
        console.log("Model Loaded")
        setInterval(()=>{
            detectSegments(model);
        },1000);
    }
    const detectSegments = async(model) => {

        if(typeof webcamRef.current!== "undefined" && webcamRef.current !== null
            && webcamRef.current.video.readyState === 4)
        {
            const video = webcamRef.current.video;
            const vWidth = video.videoWidth;
            const vHeight  = video.videoHeight;

            webcamRef.current.video.width = vWidth;
            webcamRef.current.video.height = vHeight;

            canvasRef.current.width = vWidth;
            canvasRef.current.height = vHeight;

            const pred = await model.segmentPersonParts(video)
            console.log(pred)
            const colors = bodyPix.toColoredPartMask(pred);

            bodyPix.drawMask(
                canvasRef.current,
                video,
                colors,
                0.7,
                0,
                false
            );
        }
    }
    loadBodyPixModel();

    return (
        <div className="App">
            <Sidebar/>
            <div className="content">
                <header className="App-header">
                    <h1>Real time Body segmentation</h1>
                </header>

                    <Webcam
                        ref={webcamRef}
                        muted={true}
                        style={{
                            position: 'absolute',
                            marginLeft: "auto",
                            marginRight: "auto",
                            marginTop: "50px",
                            left: 0,
                            right: 0,
                            textAlign: "center",
                            zindex: 9,
                            width: 640,
                            height: 480
                        }}/>


                    <canvas
                        ref={canvasRef}

                        style={{
                            position: 'absolute',
                            marginLeft: "auto",
                            marginRight: "auto",
                            marginTop: "50px",
                            left: 0,
                            right: 0,
                            textAlign: "center",
                            zindex: 9,
                            width: 640,
                            height: 480
                        }}/>
            </div>
        </div>
    );
}

export default RealTimeBodySegmentation;