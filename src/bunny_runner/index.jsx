import "./styles.scss";
import React, { useEffect, useState, useMemo } from "react";
const BunnyRunner = () => {
    const [time, setTime] = useState(0);
    const [visible, setVisible] = useState(false);
    var timing = React.useRef();
    const attrObserver = useMemo(() => new MutationObserver((mutations) => {
        mutations.forEach(mu => {
            if (mu.type !== "attributes" && mu.attributeName !== "class") return;
            if (!document.getElementById("gameoverInstructions").classList.contains("show")) {
                setTime(0);
                setVisible(false);
            }

        });
    }), []);

    useEffect(() => {
        const interval = setInterval(() => {
            if (!document.getElementById("gameoverInstructions").classList.contains("show"))
                setTime(time + 1);


            if (document.getElementById("gameoverInstructions").classList.contains("show"))
                setVisible(true);

            const rCounter = document.getElementById("gameoverInstructions");
            attrObserver.observe(rCounter, { attributes: true });
            timing.current.innerText = time;
        }, 1000);
        return () => clearInterval(interval);
    }, [time, attrObserver]);
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "/bunny.js";
        script.async = true;

        document.body.appendChild(script);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const withdrawEarnings = () => {
        const score = document.getElementById("distValue").textContent;
        alert(`Achieved ${score} points in ${time} seconds!`)
    }
    return (
        <>

            <div id="world" />


            <div id="gameoverInstructions">
                Game Over<br />

            </div>
            <div id="dist">
                <div class="label">distance</div>
                <div id="distValue">000</div>
                <div id="timing" ref={timing}></div>
            </div>


            <div style={{ position: "absolute", marginTop: "60vh" }}>
                {visible && <button onClick={withdrawEarnings} className="withdraw">
                    Withdraw tokens
                </button>}
            </div>
            <div style={{ position: "absolute", marginTop: "100vh" }}>

                <div id="instructions">Press Space to Jump<span className="lightInstructions"> — Grab the carrots / avoid the hedgehogs</span></div>

            </div>



        </>
    );
}
export default BunnyRunner;