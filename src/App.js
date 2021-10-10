import { Link } from "react-router-dom";
import "./App.scss";

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
      </div>
    </div>
  );
}

export default App;
