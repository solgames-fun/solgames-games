import React, { useEffect, useMemo, useState } from 'react';
import "./pronto.scoped.scss";

const Pronto = () => {
    const [score, setScore] = useState()
    const [time, setTime] = useState(0);
    const scoreObserver = useMemo(() => new MutationObserver((mutations) => {
        mutations.forEach(mu => {
            if (mu.type !== "attributes" && mu.attributeName !== "class") return;
            if (document.getElementById("Message").classList.contains("end")) {
                setScore(Number(document.getElementById("Message").innerText));
            }
            else {
                setScore(null);
                setTime(0);
            }
        });
    }), []);
    useEffect(() => {
        const pronto = document.createElement("script");
        pronto.src = "/pronto/src.js";
        pronto.async = true;
        document.body.appendChild(pronto);

        let scoreVal = document.getElementById("Message");
        scoreObserver.observe(scoreVal, { attributes: true });


    }, [scoreObserver]);

    useEffect(() => {
        const interval = setInterval(() => {
            if (!document.getElementById("Message").classList.contains("end"))
                setTime(time + 1);

        }, 1000);
        return () => clearInterval(interval);
    }, [time])
    const withdrawEarnings = () => {

        alert(`Achieved ${score} points in ${time} seconds!`);
        window.location.reload();
    }
    return (
        <div
            style={{ height: "100vh" }}
        >
            <canvas id="Canvas" tabIndex="0">Sorry, this browser cannot render this content.</canvas>
            {score && <p className="info-1">You've scored</p>}
            <div id="Message"></div>
            {score && <p className="info-2">Points!</p>}
            {score && <button onClick={withdrawEarnings} type="button" style={{
                position: "absolute", marginTop: "90vh",
                marginLeft: "auto", marginRight: "auto"
            }}>Claim Tokens</button>}
        </div>
    );
}
export default Pronto;