import React, { useEffect, useState, useMemo } from 'react';
import "./style.scoped.scss"
const Swagshot = () => {

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
        const matrix = document.createElement("script");
        matrix.src = "/matrix/src.js";
        matrix.async = true;
        document.body.appendChild(matrix);

        let scoreVal = document.getElementById("score");
        scoreObserver.observe(scoreVal, { attributes: true });


    }, [scoreObserver]);

    useEffect(() => {
        const swagshot = document.createElement('script');
        swagshot.src = "/swagshot.js";
        swagshot.async = true;
        document.body.appendChild(swagshot);
    })

    useEffect(() => {
        const interval = setInterval(() => {
            if (!document.getElementById("score").classList.contains("end") && !document.getElementById("pause").classList.contains("pause"))
                setTime(time + 1);

        }, 1000);
        return () => clearInterval(interval);
    }, [time]);
    return (

        <div className="bg" style={{ height: "100vh" }}>
            <div id="t">
                <canvas id="g" width="800" height="600"></canvas>
                <span id="score" style={{ color: "black", display: "none" }}></span>
                <span id="pause" style={{ color: "black", display: "none" }} className="pause"></span>
                {score && <button onClick={withdrawEarnings} style={{
                    position: "absolute",
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginTop: "auto",
                    marginBottom: "30px"
                }}>
                    Take Tokens</button>}
            </div>
        </div>

    )
}
export default Swagshot;