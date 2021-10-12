import React, { useEffect, useState, useMemo } from "react";
import "./style.scoped.scss";
const FlappyBird = () => {
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
        const bird = document.createElement("script");
        bird.src = "/flappy_bird.js"
        bird.async = true;

        document.body.appendChild(bird);

        let scoreVal = document.getElementById("score");
        scoreObserver.observe(scoreVal, { attributes: true });
    });
    useEffect(() => {
        const interval = setInterval(() => {
            if (!document.getElementById("score").classList.contains("end"))
                setTime(time + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, [time]);
    return (
        <div className="bg">

            <canvas id="canvas" width="276" height="414"></canvas>
            <span id="score" style={{ color: "black", display: "none" }}></span>
            {score && <button
                onClick={withdrawEarnings}
                style={{ position: "absolute", marginLeft: "auto", marginRight: "auto", marginTop: "auto", marginBottom: "30px" }}>Take Tokens</button>}
        </div>
    )
}
export default FlappyBird;