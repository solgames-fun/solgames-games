import { Link } from "react-router-dom";
import "./App.scoped.scss";

function App() {
  return (
    <div className="app">
      <div className="grid">
        <a href="/bunny">
          <div className="card">
            <h2>Bunny Runner</h2>
            <center>
              <img src="https://i.imgur.com/1OTJy4C.png" alt="" />
            </center>
          </div>
        </a>
        <a href="/raid">
          <div className="card">
            <h2>Radius Raid</h2>
            <center>
              <img src="https://i.imgur.com/Nk5Lmot.png" alt="" />
            </center>
          </div>
        </a>
        <Link to="/stack-it">
          <div className="card">
            <h2>Stack It</h2>
            <center>
              <img src="https://i.imgur.com/JIYQ5Xf.png" alt="" />
            </center>
          </div>
        </Link>
        <a href="/evil-glitch">
          <div className="card">
            <h2>Evil Glitch</h2>
            <center>
              <img src="https://i.imgur.com/pFQQiyw.png" alt="" />
            </center>
          </div>
        </a>
        <a href="/pronto">
          <div className="card">
            <h2>Pronto</h2>
            <center>
              <img src="https://i.imgur.com/oGPirXI.png" alt="" />
            </center>
          </div>
        </a>
        <a href="/matrix">
          <div className="card">
            <h2>Matrix</h2>
            <center>
              <img src="https://i.imgur.com/EKinlyP.png" alt="" />
            </center>
          </div>
        </a>
        <a href="/flappy-box">
          <div className="card">
            <h2>Flappy Box</h2>
            <center>
              <img src="https://i.imgur.com/xwwwaej.png" alt="" />
            </center>
          </div>
        </a>
        <a href="/boxes">
          <div className="card">
            <h2>Falling Boxes</h2>
            <center>
              <img src="https://i.imgur.com/8XRxOS8.png" alt="" />
            </center>
          </div>
        </a>
        <a href="/flappy-bird">
          <div className="card">
            <h2>Flappy Bird</h2>
            <center>
              <img src="https://i.imgur.com/QaEZ3L3.png" alt="" />
            </center>
          </div>
        </a>
        <a href="/air-fury">
          <div className="card">
            <h2>Air Fury</h2>
            <center>
              <img src="https://i.imgur.com/v4CACfp.png" alt="" />
            </center>
          </div>
        </a>
      </div>
    </div>
  );
}

export default App;
