import React, { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";

import EarthDayMap from "../../assets/textures/8k_earth_daymap.jpg";
import EarthNormalMap from "../../assets/textures/8k_earth_normal_map.jpg";
import EarthSpecularMap from "../../assets/textures/8k_earth_specular_map.jpg";
import EarthCloudsMap from "../../assets/textures/8k_earth_clouds.jpg";
import { TextureLoader } from "three";

export function Earth(props) {
  const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(
    TextureLoader,
    [EarthDayMap, EarthNormalMap, EarthSpecularMap, EarthCloudsMap]
  );

  const earthRef = useRef();
  const cloudsRef = useRef();

  // const axesHelper = new THREE.AxesHelper( 5 );
  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    earthRef.current.rotation.y = elapsedTime / 6;
    // cloudsRef.current.rotation.y = elapsedTime / 6;
  });

  function addDensity(data) {
    var geom = new THREE.Geometry();
    var cubeMat = new THREE.MeshLambertMaterial({
      color: 0x000000,
      opacity: 0.6,
      emissive: 0xffffff,
    });
    for (var i = 0; i < data.length - 1; i++) {
      var cube = new THREE.Mesh(
        new THREE.CubeGeometry(5, 5, 1 + value / 8, 1, 1, 1, cubeMat)
      );

      THREE.GeometryUtils.merge(geom, cube);
    }
    var total = new THREE.Mesh(geom, new THREE.MeshFaceMaterial());
    scene.add(total);
  }

  function addDensity2(data) {
    var geom = new THREE.Geometry();
    <mesh ref={earthRef} rotation={[1, 0, 0]} position={[0, 0, 3]}>
      <meshLambertMaterial
        //   map={colorMap}
        //   normalMap={normalMap}
        //   metalness={0.4}
        //   roughness={0.7}
        color="0x000000"
        opacity={0.6}
        emissive={0xffffff}
      />

      {data.map((user) => (
        // <div className="user">{user}</div>
        <boxGeometry args={(5, 5, 1 + value / 8, 1, 1, 1, cubeMat)} />
      ))}
      {/* var cubeMat = new THREE.MeshLambertMaterial({color: 0x000000,opacity:0.6, emissive:0xffffff}); */}
      {/* for (var i = 0 ; i < data.length-1 ; i++) {
       
        var cube = new THREE.Mesh(new THREE.CubeGeometry(5,5,1+value/8,1,1,1,cubeMat));
        
        THREE.GeometryUtils.merge(geom,cube);
    } */}
      {/* // var total = new THREE.Mesh(geom,new THREE.MeshFaceMaterial());
    // scene.add(total); */}
    </mesh>;
  }

  return (
    <>
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
      {/* <mesh ref={cloudsRef} position={[0, 0, 3]}>
        <sphereGeometry args={[1.005, 32, 32]} />
        <meshPhongMaterial
          map={cloudsMap}
          opacity={0.4}
          depthWrite={true}
          transparent={true}
          side={THREE.DoubleSide}
        />
      </mesh> */}
      <mesh ref={earthRef} rotation={[1, 0, 0]} position={[0, 0, 3]}>
        <sphereGeometry args={[1, 32, 32]} />
        {/* <meshPhongMaterial specularMap={specularMap} /> */}
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
