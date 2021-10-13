import React, { useState, useEffect } from "react";
import Board from "./board";
import "./style.scoped.scss";


const Minesweeper = () => {
    const [height, setHeight] = useState(8);
    const [width, setWidth] = useState(8);
    const [mines, setMines] = useState(10);
    const [loaded, setLoaded] = useState(true);
    const [time, setTime] = useState(0);
    const [points, setPoints] = useState(0);
    const [ended, setEnded] = useState(false);
    function reloadGame() {
        setLoaded(false);
        setTime(0);
        setEnded(false);
        setPoints(0);
        setTimeout(() => setLoaded(true), 100)
    }
    function addPoints() {
        if (points === 0) {
            setPoints(100);
        } else {
            let score = points + 100;
            setPoints(score);
        }


    }
    useEffect(() => {
        const interval = setInterval(() => {
            if (!ended) { setTime(time + 1); }
        }, 1000);
        return () => clearInterval(interval);
    }, [time, ended]);
    function claim() {
        alert(`Achieved ${points} points in ${time} seconds`);
    }
    return (
        <div className="game">
            {loaded && <Board
                height={height} width={width}
                mines={mines} end={setEnded}
                addPoints={addPoints} />}
            <button onClick={reloadGame}>Restart</button>
            <button onClick={claim} disabled={ended !== true || !points}>Claim Tokens</button>
        </div>
    );
};

export default Minesweeper;
