import React, { useEffect } from 'react';
import "./style.scoped.scss";
const RadiusRaid = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "/raid.js";
        script.async = true;
        document.body.appendChild(script);
    })
    const withdrawEarnings = () => {
        const score = document.getElementById("score").textContent;
        const timing = document.getElementById("timing").innerText.split(":");
        let time = Number(timing[0]) * 60 + Number(timing[1]);
        alert(`Achieved ${score} points in ${time} seconds!`)
    }

    return (
        <>

            <div style={{ backgroundColor: "black", height: "100vh" }}>
                <span id="score" style={{ color: "black", display: "none" }}></span>
                <span id="timing" style={{ color: "black", display: "none" }}></span>

                <div id="wrap">

                    <div id="wrap-inner">
                        <canvas id="cbg1"></canvas>
                        <canvas id="cbg2"></canvas>
                        <canvas id="cbg3"></canvas>
                        <canvas id="cbg4"></canvas>
                        <canvas id="cmg"></canvas>
                        <canvas id="cfg"></canvas>

                    </div>

                </div>

                <button id="claim" style={{
                    position: "absolute",
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginTop: "80vh",
                    marginBottom: "1px"
                }} onClick={withdrawEarnings}>CLAIM TOKENS</button>

            </div>
        </>

    )
}
export default RadiusRaid;