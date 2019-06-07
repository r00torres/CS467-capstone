let oviraptor = {
  name: "oviraptor",
  health: 25,
  speed: 5000,
  reward: 5,
  tweenId: 5
}

function addOviGLTF( scene, dinos, delay, testPath ){
  //console.log( "dinos gltf", dinos );
  const oviPosition = new THREE.Vector3( 0, 0, 0 );
  var dinoName = "oviraptor";

	var ovi1 = dinoLoader( '/static/dinos/or1.glb', oviPosition, dinos, delay, testPath, oviraptor );

}
