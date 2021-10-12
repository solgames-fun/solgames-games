/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useMemo, useState } from 'react';
import "./evil.scoped.scss";
const EvilGlitch = () => {
    const [score, setScore] = useState()
    const textObserver = useMemo(() => new MutationObserver((mutations) => {
        mutations.forEach(mu => {
            if (mu.type !== "attributes" && mu.attributeName !== "class") return;
            if (document.getElementById("score").classList.contains("end")) {
                setScore(Number(document.getElementById("score").innerText));
            }
            else {
                setScore(null);
            }
        });
    }), []);
    const withdrawEarnings = () => {

        alert(`Achieved ${score} points in ${Math.round(score / 1000)} seconds!`)
    }

    useEffect(() => {
        const glitch = document.createElement("script");
        glitch.src = "/evil.js";
        glitch.async = true;
        document.body.appendChild(glitch);
        let scoreVal = document.getElementById("score");
        textObserver.observe(scoreVal, { attributes: true });
    }, [textObserver]);
    return (
        <>
            <div id="d"><canvas id="c"></canvas>
                <canvas id="g" moz-opaque></canvas></div>
            <span id="score" style={{ color: "black", display: "none" }}></span>
            {score && <button
                onClick={withdrawEarnings}
                style={{ position: "absolute", marginLeft: "auto", marginRight: "auto", marginTop: "auto", marginBottom: "30px" }}>Take Tokens</button>}
        </>
    );
}
export default EvilGlitch;