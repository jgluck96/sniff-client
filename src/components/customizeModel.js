import React, { Component } from "react";
import ReactDOM from "react-dom";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import $ from 'jquery'

const style = {
  height: 250// we can control scene size by setting container dimensions
};

const white = new THREE.Color("rgb(255, 255, 255, 1)")
const black = new THREE.Color("rgb(0, 0, 0)")
const pink = new THREE.Color("rgb(255,182,193)")

class Model extends Component {

  componentDidMount() {

    this.sceneSetup();
    this.addCustomSceneObjects();
    this.startAnimationLoop();
    window.addEventListener("resize", this.handleWindowResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowResize);
    window.cancelAnimationFrame(this.requestID);
    this.controls.dispose();
  }

  sceneSetup = () => {
    // get container dimensions and use them for scene sizing
    const width = this.el.clientWidth;
    const height = this.el.clientHeight;

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      45, // fov = field of view
      width / height, // aspect ratio
      0.1, // near plane
      1000 // far plane
    );
    this.camera.position.set(7,5,-2);
    this.camera.up = new THREE.Vector3(0.5,0.5,0.4);
    // this.camera.lookAt(new THREE.Vector3(1.4,1,3)) // is used here to set some distance from a cube that is located at z = 0
    // OrbitControls allow a camera to orbit around the object
    // https://threejs.org/docs/#examples/controls/OrbitControls
    this.controls = new OrbitControls(this.camera, this.el);
    this.controls.enableZoom = false;
    this.renderer = new THREE.WebGLRenderer({alpha: true});

    this.renderer.setSize(width, height);
    this.renderer.setClearColor( 0x000000, 0);
    this.el.appendChild(this.renderer.domElement); // mount using React ref
  };

  // Here should come custom code.
  // Code below is taken from Three.js BoxGeometry example
  // https://threejs.org/docs/#api/en/geometries/BoxGeometry
  createBoxWithRoundedEdges = ( width, height, depth, radius0, smoothness ) =>{
    let shape = new THREE.Shape();
    let eps = 0.00001;
    let radius = radius0 - eps;
    shape.arc( eps, eps, eps, -Math.PI / 2, -Math.PI, true );
    shape.arc( eps, height -  radius * 2, eps, Math.PI, Math.PI / 2, true );
    shape.absarc( width - radius * 2, height -  radius * 2, eps, Math.PI / 2, 0, true );
    shape.absarc( width - radius * 2, eps, eps, 0, -Math.PI / 2, true );
    let geometry = new THREE.ExtrudeBufferGeometry( shape, {
      amount: depth - radius0 * 2,
      bevelEnabled: true,
      bevelSegments: smoothness * 2,
      steps: 1,
      bevelSize: radius,
      bevelThickness: radius0,
      curveSegments: smoothness
    });

    geometry.center();

    return geometry;
  }

  addCustomSceneObjects = () => {
    const geometry = new THREE.BoxGeometry(1, 0.5, 2);
    const material = new THREE.MeshStandardMaterial({
      color: '',
      emissive: 0x072534,
      side: THREE.DoubleSide,
      flatShading: true
    });
    // this.cube = new THREE.Mesh(geometry, material);
    this.cubeMat = new THREE.MeshStandardMaterial( {
      color: white,
      // envMap: cubeTexture,
      // metalness: 3 / 9,
      roughness: 1 - 3 / 9,
    } );
    this.cube = new THREE.Mesh( this.createBoxWithRoundedEdges( 1, 0.5, 2, 1 / 9, 16 ), this.cubeMat )
    this.scene.add(this.cube);
    // this.dirLight = new THREE.DirectionalLight( 0xffffff, 11, 0 );
    // this.dirLight.position.set( 10, -10, 10 );
    // this.scene.add( this.dirLight );
    const lights = [];
    lights[0] = new THREE.DirectionalLight(0xffffff, 1, 0);
    lights[1] = new THREE.DirectionalLight(0xffffff, 0.8, 0);
    lights[2] = new THREE.DirectionalLight(0xffffff, 1, 0);
    lights[3] = new THREE.DirectionalLight(0xffffff, 1, 0);

    lights[0].position.set(50, 200, 50);
    lights[1].position.set(100, 300, 100);
    lights[2].position.set(-100, -300, -100);
    lights[3].position.set(-300, -100, -200);

    this.scene.add(lights[0]);
    this.scene.add(lights[1]);
    this.scene.add(lights[2]);
    this.scene.add(lights[3]);
  };

  startAnimationLoop = () => {
    // this.cube.rotation.x += 0.5;
    // this.cube.rotation.y += 0.005;
    this.cube.rotation.z += 0.005;

    this.renderer.render(this.scene, this.camera);

    // The window.requestAnimationFrame() method tells the browser that you wish to perform
    // an animation and requests that the browser call a specified function
    // to update an animation before the next repaint
    this.requestID = window.requestAnimationFrame(this.startAnimationLoop);
  };

  handleWindowResize = () => {
    const width = $('.model').width();
    const height = $('.model').height();

    this.renderer.setSize(width, height);
    this.camera.aspect = width / height;

    this.camera.updateProjectionMatrix();
  };

  render(){
    return(
      <div className='col-md-10 model'>
        <div style={{height: '100%'}} ref={ref => (this.el = ref)} />
      </div>
    )
  }
}

// class Container extends Component {
//   state = { isMounted: true };
//
//   render() {
//     const { isMounted = true } = this.state;
//     return (
//       <>
//         <button
//           onClick={() =>
//             this.setState(state => ({ isMounted: !state.isMounted }))
//           }
//         >
//           {isMounted ? "Unmount" : "Mount"}
//         </button>
//         {isMounted && <Model />}
//         {isMounted && <div>Scroll to zoom, drag to rotate</div>}
//       </>
//     );
//   }
// }

export default Model
