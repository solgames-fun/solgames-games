import "./styles.scss";
import React, { useEffect, useState } from "react";
const BunnyRunner = () => {
    const [time, setTime] = useState(0);
    var timing = React.useRef();
    const attrObserver = new MutationObserver((mutations) => {
        mutations.forEach(mu => {
            if (mu.type !== "attributes" && mu.attributeName !== "class") return;
            if (!document.getElementById("gameoverInstructions").classList.contains("show"))
                setTime(0);
        });
    });

    useEffect(() => {
        const interval = setInterval(() => {
            if (!document.getElementById("gameoverInstructions").classList.contains("show"))
                setTime(time + 1);
            const rCounter = document.getElementById("gameoverInstructions");
            attrObserver.observe(rCounter, { attributes: true });
            timing.current.innerText = time;
        }, 1000);
        return () => clearInterval(interval);
    }, [time]);
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
                <button onClick={withdrawEarnings} className="withdraw">
                    Withdraw tokens
                </button>
            </div>
            <div id="dist">
                <div class="label">distance</div>
                <div id="distValue">000</div>
                <div id="timing" ref={timing}></div>
            </div>




            <div id="instructions">Press Space to Jump<span class="lightInstructions"> — Grab the carrots / avoid the hedgehogs</span></div>



        </>
    );
}
export default BunnyRunner;