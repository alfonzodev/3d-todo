import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Canvas
    className="canvas-r3f"
    camera={{ fov: 45, near: 0.1, far: 100, position: [0.0, 0.5, 5.0] }}
  >
    <Experience />
  </Canvas>
);
