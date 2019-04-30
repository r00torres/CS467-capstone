let trex = {
  health: 15,
  speed: 15000, 
  reward: 15
}

function addTrex(scene, dinos){
  var newTrex = new THREE.Object3D();
  var mtlLoader = new THREE.MTLLoader();
  mtlLoader.setPath('/static/dinos/');
  //mtlLoader.setBaseUrl('/static/dinos/');
  mtlLoader.load('trex.mtl', function(materials){
    materials.preload();
    var loader = new THREE.OBJLoader();
    loader.setMaterials(materials);
    loader.setPath('/static/dinos/');
    //dinoMat = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    loader.load( 'trex.obj', 
      //For getting materials on the object...
      //https://stackoverflow.com/questions/35927111/three-js-change-material-for-obj-file-using-a-button
      function ( dino ) {
        /*dino.traverse(function(child) {
          if (child instanceof THREE.Mesh){
            child.material = dinoMat;
          }
        });	*/

        newTrex.add(dino);
        //dino.position.x = map.path1[0][0];
        //dino.position.z = map.path1[0][1];
        newTrex.scale.set( 0.3, 0.3, 0.3 );
        //dinos.push(dino);
        //scene.add(dino);
        newTrex.name = "trex";
        newTrex.position.x = map.path1[0][0];
        newTrex.position.z = map.path1[0][1];
        newTrex.userData.health = trex.health;
        newTrex.userData.speed = trex.speed;
        newTrex.userData.reward = trex.reward;
    });
});

  scene.add(newTrex);
  dinos.push([newTrex, trex]);
}