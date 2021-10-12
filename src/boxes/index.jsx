import React, { useEffect, useState, useMemo } from 'react'
const Boxes = () => {

    const [score, setScore] = useState()
    const scoreObserver = useMemo(() => new MutationObserver((mutations) => {
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

        alert(`Achieved ${score * 10} points in ${Math.round(score)} seconds!`)
    }


    useEffect(() => {
        const boxes = document.createElement("script");
        boxes.src = "/boxes/src.js";
        boxes.async = true;

        document.body.appendChild(boxes);
        let scoreVal = document.getElementById("score");
        scoreObserver.observe(scoreVal, { attributes: true });
    }, [scoreObserver]);
    return (
        <center style={{ backgroundColor: "black" }}>
            <div id="table">
                <div id="cell">
                    <div id="canvascontainer">
                        <canvas></canvas>
                    </div>
                </div>
            </div>
            <span id="score" style={{ display: "none" }}></span>
            {score && <button
                onClick={withdrawEarnings}
                style={{
                    position: "absolute"
                    , marginLeft: "auto",
                    marginRight: "auto",
                    marginTop: "auto",
                    marginBottom: "30px"
                }}>Take Tokens</button>}
        </center>
    );
}
export default Boxes;