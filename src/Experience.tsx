import {
  PresentationControls,
  Environment,
  Float,
  useGLTF,
  ContactShadows,
  Html,
  Text,
} from "@react-three/drei";
import TodoList from "./TodoList";

import useScaling from "./hooks/useScaling";

const Experience = () => {
  const { scalingFactor } = useScaling();

  // Laptop 3D Model
  const laptop = useGLTF("./models/model.gltf");

  return (
    <>
      <color args={["ivory"]} attach="background" />
      {/* Environment Lighting */}
      <Environment preset="city" environmentIntensity={0.3} />

      <PresentationControls
        global
        polar={[-0.1, 0.2]}
        azimuth={[-1.0, 0.75]}
        config={{ mass: 2, tension: 400 }}
        snap={{ mass: 4, tension: 400 }}
      >
        <Text
          color="black"
          font="./fonts/permanent-marker.ttf"
          position={[0.0, 2.5, -1.95]}
          letterSpacing={0.1}
          scale={scalingFactor * 0.9}
        >
          TO-DO LIST
        </Text>

        {/* Float Drei Helper */}
        <Float
          rotationIntensity={0.4} // XYZ rotation intensity, defaults to 1
        >
          {/* Laptop Screen Light */}
          <rectAreaLight
            width={2.5}
            height={1.65}
            intensity={65}
            color={"#6ee7b7"}
            rotation={[-0.1, Math.PI, 0]}
            position={[0.0, 0.55, -1.49]}
          />
          {/* Todo List App Screen */}
          <Html
            transform
            wrapperClass="html-screen"
            distanceFactor={1.2}
            position={[0, 0.4, -1.7]}
            rotation-x={-0.256}
          >
            {/* Todo List App */}
            <TodoList />
          </Html>
          <primitive object={laptop.scene} position-y={-1.4} scale={1.2} />
        </Float>
      </PresentationControls>
      <ContactShadows position-y={-1.4} opacity={0.7} blur={4.0} />
    </>
  );
};

export default Experience;
