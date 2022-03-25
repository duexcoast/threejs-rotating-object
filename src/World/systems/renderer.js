import { WebGLRenderer } from "../../../node_modules/three/build/three.module";

function createRenderer() {
  const renderer = new WebGLRenderer({ antialias: true });

  renderer.physicallyCorrectLights = true;

  return renderer;
}

export { createRenderer };
