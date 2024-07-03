import React, {useRef, useState, useEffect} from 'react';
import * as tf from "@tensorflow/tfjs"
import Webcam from 'react-webcam'
import * as cocossd from '@tensorflow-models/coco-ssd';
import {drawBB} from '../components/utils';
import Sidebar from "../components/Sidebar";

function RealTimeObjectDetection(props) {
    const webcamRef = useRef(null);
    const canvasRef = useRef(null);

    const runCocoSSD = async () => {

        //load model

        const net = await cocossd.load();


        setInterval(() => {
            detectImage(net)
        }, 10);
    }

    const detectImage = async (net) => {
        if (
            typeof webcamRef.current !== "undefined" && webcamRef.current !== null
            && webcamRef.current.video.readyState === 4
        ) {
            const video = webcamRef.current.video;
            const videoWidth = webcamRef.current.video.videoWidth;

            const videoHeight = webcamRef.current.video.videoHeight;


            webcamRef.current.video.width = videoWidth;
            webcamRef.current.video.height = videoHeight;
            canvasRef.current.width = videoWidth;
            canvasRef.current.height = videoHeight;

            const inference = await net.detect(video);
            // console.log(inference);
            const ctx = canvasRef.current.getContext("2d");
            drawBB(inference, ctx);
        }
    };

    useEffect(() => {
        runCocoSSD()
    }, []);


    return (
        <div className="App">
            <Sidebar/>
            <div className="content">
                <header className="App-header">
                    <h1>Real time object detection</h1>
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

export default RealTimeObjectDetection;