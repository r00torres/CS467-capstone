var trex = {
  name: "trex",
  health: 65,
  speed: 15000,
  reward: 15
}

function addTrexGLTF( scene, dinos, delay, testPath ){
  console.log( "dinos gltf", dinos );
  const trexPosition = new THREE.Vector3( 0, 0, 0 );

  var dinoName = "trex";
	var trex1 = dinoLoader( '/static/dinos/trex1.glb', trexPosition, dinos, delay, testPath, trex );

  //scene.add(newOvi);
  //dinos.push([ovi1,oviraptor]);
}
