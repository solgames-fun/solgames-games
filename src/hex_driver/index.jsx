import "./css/multi.css";
import "./css/fonts.css";
import React, { useEffect } from "react";
const HexDriver = () => {
    useEffect(() => {
        const leap = document.createElement("script");
        leap.src = "/hexgl/libs/leap-0.4.1.min.js";
        leap.async = true;
        document.body.appendChild(leap);
        const three = document.createElement("script");
        three.src = "/hexgl/libs/Three.dev.js";
        three.async = true;
        document.body.appendChild(three);
        const shaderExtras = document.createElement("script");
        shaderExtras.src = "/hexgl/libs/ShaderExtras.js";
        document.body.appendChild(shaderExtras);
        const effectComposer = document.createElement("script");
        effectComposer.src = "/hexgl/libs/postprocessing/EffectComposer.js"
        effectComposer.async = true;
        document.body.appendChild(effectComposer);
        const renderPass = document.createElement("script");
        renderPass.src = "/hexgl/libs/postprocessing/RenderPass.js";
        renderPass.async = true;
        document.body.appendChild(renderPass);
        const bloomPass = document.createElement("script");
        bloomPass.src = "/hexgl/libs/postprocessing/BloomPass.js";
        bloomPass.async = true;
        document.body.appendChild(bloomPass);
        const shaderPass = document.createElement("script");
        shaderPass.src = "/hexgl/libs/postprocessing/ShaderPass.js";
        shaderPass.async = true;
        document.body.appendChild(shaderPass);
        const maskPass = document.createElement("script");
        maskPass.src = "/hexgl/libs/postprocessing/MaskPass.js";
        maskPass.async = true;
        document.body.appendChild(maskPass);
        const detector = document.createElement("script");
        detector.src = "/hexgl/libs/Detector.js";
        detector.async = true;
        document.body.appendChild(detector);
        const stats = document.createElement("script");
        stats.src = "/hexgl/libs/Stats.js";
        stats.async = true;
        document.body.appendChild(stats);
        const dGui = document.createElement("script");
        dGui.src = "/hexgl/libs/DAT.GUI.min.js";
        dGui.async = true;
        document.body.appendChild(dGui);
        const touchController = document.createElement("script");
        touchController.src = "/hexgl/bkcore.coffee/controllers/TouchController.js";
        touchController.async = true;
        document.body.appendChild(touchController);
        const orientationController = document.createElement("script");
        orientationController.src = "bkcore.coffee/controllers/OrientationController.js";
        orientationController.async = true;
        document.body.appendChild(orientationController);
        const gamepadController = document.createElement("script");
        gamepadController.src = "/hexgl/bkcore.coffee/controllers/GamepadController.js";
        gamepadController.async = true;
        document.body.appendChild(gamepadController);
        const timer = document.createElement("script");
        timer.src = "/hexgl/bkcore.coffee/Timer.js";
        timer.async = true;
        document.body.appendChild(timer);
        const imageData = document.createElement("script");
        imageData.src = "/hexgl/bkcore.coffee/ImageData.js";
        imageData.async = true;
        document.body.appendChild(imageData);
        const utils = document.createElement("script");
        utils.src = "/hexgl/bkcore.coffee/Utils.js";
        utils.async = true;
        document.body.appendChild(utils);
        const renderManager = document.createElement("script");
        renderManager.src = "/hexgl/bkcore/threejs/RenderManager.js";
        renderManager.async = true;
        document.body.appendChild(renderManager);
        const shaders = document.createElement("script");
        shaders.src = "/hexgl/bkcore/threejs/Shaders.js";
        shaders.async = true;
        document.body.appendChild(shaders);
        const particles = document.createElement("script");
        particles.src = "/hexgl/bkcore/threejs/Particles.js";
        particles.async = true;
        document.body.appendChild(particles);
        const loader = document.createElement("script");
        loader.src = "/hexgl/bkcore/threejs/Loader.js"
        loader.async = true;
        document.body.appendChild(loader);
        const audio = document.createElement("script");
        audio.src = "/hexgl/bkcore/audio.js";
        audio.async = true;
        document.body.appendChild(audio)
        const hud = document.createElement("script");
        hud.src = "/hexgl/bkcore/hexgl/HUD.js";
        hud.async = true;
        document.body.appendChild(hud);
        const raceData = document.createElement("script");
        raceData.src = "/hexgl/bkcore/hexgl/RaceData.js";
        raceData.async = true;
        document.body.appendChild(raceData);
        const shipControls = document.createElement("script");
        shipControls.src = "/hexgl/bkcore/hexgl/ShipControls.js";
        shipControls.async = true;
        document.body.appendChild(shipControls);
        const shipEffects = document.createElement("script");
        shipEffects.src = "/hexgl/bkcore/hexgl/ShipEffects.js"
        shipEffects.async = true;
        document.body.appendChild(shipEffects);
        const cameraChase = document.createElement("script");
        cameraChase.src = "/hexgl/bkcore/hexgl/CameraChase.js";
        cameraChase.async = true;
        document.body.appendChild(cameraChase);
        const gameplay = document.createElement("script");
        gameplay.src = "/hexgl/bkcore/hexgl/Gameplay.js";
        gameplay.async = true;
        document.body.appendChild(gameplay);
        const cityscape = document.createElement("script");
        cityscape.src = "/hexgl/bkcore/hexgl/HUD.js";
        cityscape.async = true;
        document.body.appendChild(cityscape);
        const hexgl = document.createElement("script");
        hexgl.src = "/hexgl/bkcore/hexgl/HexGL.js";
        hexgl.async = true;
        document.body.appendChild(hexgl);
        const launch = document.createElement("script");
        launch.src = "/hexgl/launch.js";
        launch.async = true;
        document.body.appendChild(launch);
    });
    return (
        <>
            <div id="step-1">
                <div id="global"></div>
                <div id="title">
                </div>
                <div id="menucontainer">
                    <div id="menu">
                        <div id="start">Start</div>
                        <div id="s-controlType">Controls: Keyboard</div>
                        <div id="s-quality">Quality: High</div>
                        <div id="s-hud">HUD: On</div>
                        <div id="s-godmode" style={{ display: "none" }}>Godmode: Off</div>
                        <div id="s-credits">Credits</div>
                    </div>
                </div>
            </div>
            <div id="step-2" style={{ display: "none" }}>
                <div id="ctrl-help">Click/Touch to continue.</div>
            </div>
            <div id="step-3" style={{ display: "none" }}>
                <div id="progressbar"></div>
            </div>
            <div id="step-4" style={{ display: "none" }}>
                <div id="overlay"></div>
                <div id="main"></div>
            </div>
            <div id="step-5" style={{ display: "none" }}>
                <div id="time"></div>
                <div id="ctrl-help">Click/Touch to continue.</div>
            </div>


            <div id="leapinfo" style={{ display: "none" }}></div>
        </>

    )
}
export default HexDriver;