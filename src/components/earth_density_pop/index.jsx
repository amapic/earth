import React, { useRef } from "react";
import { useFrame, useLoader,Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";

import EarthDayMap from "../../assets/textures/8k_earth_daymap.jpg";
import EarthNormalMap from "../../assets/textures/8k_earth_normal_map.jpg";
import EarthSpecularMap from "../../assets/textures/8k_earth_specular_map.jpg";
import EarthCloudsMap from "../../assets/textures/8k_earth_clouds.jpg";

import BigGreyMap from "../../assets/world-big-2-grey.jpg";
import EarthCloud from "../../assets/earth_clouds_1024.png";
// import CameraControls from 'camera-controls';
import { TextureLoader } from "three";

import { Caca } from "../../js/densite.jsx";



export function Earth(props) {
  // const cameraControls = useRef<CameraControls | null>(null);
  const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(
    TextureLoader,
    [EarthDayMap, EarthNormalMap, EarthSpecularMap, EarthCloudsMap, BigGreyMap,EarthCloud]
  );

  const earthRef = useRef();
  const cloudsRef = useRef();

  // const axesHelper = new THREE.AxesHelper( 5 );
  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    // earthRef.current.rotation.y = elapsedTime / 6;
    // cloudsRef.current.rotation.y = elapsedTime / 6;
  });

  // function addDensity(data) {
  //   var geom = new THREE.Geometry();
  //   var cubeMat = new THREE.MeshLambertMaterial({
  //     color: 0x000000,
  //     opacity: 0.6,
  //     emissive: 0xffffff,
  //   });
  //   for (var i = 0; i < data.length - 1; i++) {
  //     var cube = new THREE.Mesh(
  //       new THREE.CubeGeometry(5, 5, 1 + value / 8, 1, 1, 1, cubeMat)
  //     );

  //     THREE.GeometryUtils.merge(geom, cube);
  //   }
  //   var total = new THREE.Mesh(geom, new THREE.MeshFaceMaterial());
  //   scene.add(total);
  // }

  // function addDensity2(data) {
  //   var geom = new THREE.Geometry();
  //   <mesh ref={earthRef} rotation={[1, 0, 0]} position={[0, 0, 3]}>
  //     <meshLambertMaterial
  //       //   map={colorMap}
  //       //   normalMap={normalMap}
  //       //   metalness={0.4}
  //       //   roughness={0.7}
  //       color="0x000000"
  //       opacity={0.6}
  //       emissive={0xffffff}
  //     />

  //     {data.map((user) => (
  //       // <div className="user">{user}</div>
  //       <boxGeometry args={(5, 5, 1 + value / 8, 1, 1, 1, cubeMat)} />
  //     ))}
  //     {/* var cubeMat = new THREE.MeshLambertMaterial({color: 0x000000,opacity:0.6, emissive:0xffffff}); */}
  //     {/* for (var i = 0 ; i < data.length-1 ; i++) {

  //       var cube = new THREE.Mesh(new THREE.CubeGeometry(5,5,1+value/8,1,1,1,cubeMat));

  //       THREE.GeometryUtils.merge(geom,cube);
  //   } */}
  //     {/* // var total = new THREE.Mesh(geom,new THREE.MeshFaceMaterial());
  //   // scene.add(total); */}
  //   </mesh>;
  // }

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
  function Terre2() {
    return (
      <mesh rotation={[1, 0, 0]} position={[0, 0, 3]}>
        <sphereGeometry args={[0.8, 50, 50]} />
        <meshStandardMaterial
          map={colorMap}
          // normalMap={normalMap}
          // metalness={0.4}
          // roughness={0.7}
          perPixel={false}
          shininess={0.2}
        />
      </mesh>
    );
  }

  return (
    <>
      {/* <ambientLight intensity={1} /> */}
      {/* <CameraControls ref={cameraControls} /> */}
      {/* <Canvas> */}
      <mesh>
      <pointLight color="#f6f3ea" position={[2, 0, 5]} intensity={3} />
      <Stars
        radius={300}
        depth={60}
        count={20000}
        factor={7}
        saturation={0}
        fade={true}
      />
      {/* <Terre2 /> */}
      <Caca position={[0.8,0,0]} />
      </mesh>
      {/* <primitive position={[0, 0, 3]} object={new THREE.AxesHelper(40)} /> */}

      
      {/* </Canvas> */}
    </>
  );
}
