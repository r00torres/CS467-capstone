var raptor = {
  name: "raptor",
  health: 62,
  speed: 9000,
  reward: 10
}

function addRaptorGLTF( scene, dinos, delay, testPath ){
  //console.log( "dinos gltf", dinos );
  const raptorPosition = new THREE.Vector3( 0, 0, 0 );
  var dinoName = "raptor";

	var raptor1 = dinoLoader( '/static/dinos/raptor1.glb', raptorPosition, dinos, delay, testPath, raptor );

  //scene.add(newOvi);
  //dinos.push([ovi1,oviraptor]);
}
