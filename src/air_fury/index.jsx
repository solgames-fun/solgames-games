import React, { useEffect, useState, useMemo } from 'react';
import "./style.scoped.scss";
const AirFury = () => {
    const [score, setScore] = useState()
    const [time, setTime] = useState(0);
    const scoreObserver = useMemo(() => new MutationObserver((mutations) => {
        mutations.forEach(mu => {
            if (mu.type !== "attributes" && mu.attributeName !== "class") return;
            if (document.getElementById("score").classList.contains("end")) {
                setScore(Number(document.getElementById("score").innerText));
            }
            else {
                setScore(null);
                setTime(0);
            }
        });
    }), []);
    const withdrawEarnings = () => {

        alert(`Achieved ${score} points in ${time} seconds!`)
    }
    useEffect(() => {
        const fury = document.createElement("script");
        fury.src = "/fury.js";
        fury.async = true;
        document.body.appendChild(fury);

        let scoreVal = document.getElementById("score");
        scoreObserver.observe(scoreVal, { attributes: true });
    });
    useEffect(() => {
        const interval = setInterval(() => {
            if (!document.getElementById("score").classList.contains("end") || !document.getElementById("pause"))
                setTime(time + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, [time]);
    return (
        <>
            <center><h1 style={{ fontSize: "90px", color: "black" }}>AIR FURY</h1></center>
            <div id="w">
                <div id="ldng">LOADING</div>
                <div id="ss">
                    <div id="title">AIR FURY</div>
                    <div id="instr">PRESS W or UP TO START</div>
                </div>
                <div id="pz">
                    <div>||</div>
                </div>
                <div id="gmo">
                    <div>
                        <div style={{ fontSize: "72px" }}>GAME OVER</div>
                        <div id="fscore"></div>
                        <div id="hscore">Highscore!</div>
                        <br />
                        <div>PRESS W or UP TO REPLAY</div>
                    </div>
                </div>
                <div id="hud">
                    <div id="score"></div>
                    <div id="hp"></div>
                    <div id="power"></div>
                </div>
                <canvas id="g"></canvas>
                <canvas id="h2o"></canvas>
            </div>
            <div id="w1" style={{ height: "auto", }}>
                <div style={{ fontFamily: "Helvetica", fontSize: "16px", color: "black" }}>
                    <h2 style={{ fontStyle: "bold", fontSize: "30px", color: "black" }}>CONTROLS:</h2>
                    W or Up to move forward. A or Left and D or Right to turn. Space to shoot. Shift to use Focus, your slow-motion power. Stop shooting to repair. Press P to toggle pause.
                </div>
                <br />

            </div>

            <span id="score" style={{ color: "black", display: "none" }}></span>

            {score && <button onClick={withdrawEarnings} style={{
                position: "absolute",
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: "auto",
                marginBottom: "30px"
            }}>
                Take Tokens</button>}
        </>
    )
}
export default AirFury