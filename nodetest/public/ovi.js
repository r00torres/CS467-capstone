let oviraptor = {
  health: 5,
  speed: 10000,
  reward: 5
}

function addOviGLTF( scene, dinos ){
  console.log( "dinos gltf", dinos );
  const oviPosition = new THREE.Vector3( 0, 0, 0 );
	var ovi1 = dinoLoader( '/static/dinos/raptor1.glb', oviPosition, dinos );
  //scene.add(newOvi);
  //dinos.push([ovi1,oviraptor]);
}


function addOvi(scene, dinos){
  console.log( "dinos obj", dinos );
  var newOvi = new THREE.Object3D();
  var mtlLoader = new THREE.MTLLoader();
  mtlLoader.setPath('/static/dinos/');
  //mtlLoader.setBaseUrl('/static/dinos/');
  mtlLoader.load('oviraptor.mtl', function(materials){
    materials.preload();
    var loader = new THREE.OBJLoader();
    loader.setMaterials(materials);
    loader.setPath('/static/dinos/');
    //dinoMat = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    loader.load( 'oviraptor.obj',
      //For getting materials on the object...
      //https://stackoverflow.com/questions/35927111/three-js-change-material-for-obj-file-using-a-button
      function ( dino ) {
        /*dino.traverse(function(child) {
          if (child instanceof THREE.Mesh){
            child.material = dinoMat;
          }
        });	*/
        console.log( "newOvi befoer ", newOvi );
        newOvi.add(dino);
        //dino.position.x = map.path1[0][0];
        //dino.position.z = map.path1[0][1];
        newOvi.scale.set( 0.3, 0.3, 0.3 );
        //dinos.push(dino);
        //scene.add(dino);
        newOvi.name = "oviraptor";
        newOvi.position.x = map.path1[0][0];
        newOvi.position.z = map.path1[0][1];
        newOvi.userData.health = oviraptor.health;
        newOvi.userData.speed = oviraptor.speed;
        newOvi.userData.reward = oviraptor.reward;
        console.log( "newOvi:", newOvi );
    });
});

  scene.add(newOvi);
  dinos.push([newOvi,oviraptor]);
}
