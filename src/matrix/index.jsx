import React, { useEffect, useMemo, useState } from 'react';

const Matrix = () => {
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
        const interval = setInterval(() => {
            if (!document.getElementById("score").classList.contains("end"))
                setTime(time + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, [time]);
    return (
        <>
            <canvas style={{
                margin: "auto",
                position: "absolute",
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
            }} id="canvas"></canvas>
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
    );
}
export default Matrix;