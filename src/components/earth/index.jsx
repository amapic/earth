import React, { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";

import EarthDayMap from "../../assets/textures/8k_earth_daymap.jpg";
// import EarthNormalMap from "../../assets/textures/8k_earth_normal_map.jpg";
// import EarthSpecularMap from "../../assets/textures/8k_earth_specular_map.jpg";
import EarthCloudsMap from "../../assets/textures/8k_earth_clouds.jpg";
import { TextureLoader } from "three";



export function Earth(props) {
  const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(
    TextureLoader,
    [EarthDayMap,  EarthCloudsMap]
  );

  const earthRef = useRef();
  const cloudsRef = useRef();

  // const axesHelper = new THREE.AxesHelper( 5 );
  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    earthRef.current.rotation.y = elapsedTime / 6;
    // cloudsRef.current.rotation.y = elapsedTime / 6;
  });

//   function addEarth() {
//     var spGeo = new THREE.SphereGeometry(600,50,50);
//     var planetTexture = THREE.ImageUtils.loadTexture( "assets/world-big-2-grey.jpg" );
//     var mat2 =  new THREE.MeshPhongMaterial( {
//         map: planetTexture,
//         perPixel: false,
//         shininess: 0.2 } );
//     sp = new THREE.Mesh(spGeo,mat2);
//     scene.add(sp);
// }

  return (
    <>  
    {/* <button>Prout</button> */}
      {/* <ambientLight intensity={1} /> */}
      <pointLight color="#f6f3ea" position={[2, 0, 5]} intensity={3} />
      <Stars
        radius={300}
        depth={60}
        count={20000}
        factor={7}
        saturation={0}
        fade={true}
      />
      {/* <primitive position={[0, 0, 3]} object={new THREE.AxesHelper(40)} /> */}
      <mesh ref={cloudsRef} position={[0, 0, 3]}>
        <sphereGeometry args={[1.005, 32, 32]} />
        <meshPhongMaterial
          map={cloudsMap}
          opacity={0.4}
          depthWrite={true}
          transparent={true}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh ref={earthRef} rotation={[1,0,0]} position={[0, 0, 3]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshPhongMaterial specularMap={specularMap} />
        <meshStandardMaterial
          map={colorMap}
          normalMap={normalMap}
          metalness={0.4}
          roughness={0.7}
        />
        {/* <OrbitControls
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          zoomSpeed={0.6}
          panSpeed={0.5}
          rotateSpeed={0.4}
        /> */}
      </mesh>
    </>
  );
}
