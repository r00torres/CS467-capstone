let raptor = {
  health: 10,
  speed: 7500, 
  reward: 10
}

function addRaptor(scene, dinos){
  var newRaptor = new THREE.Object3D();
  var mtlLoader = new THREE.MTLLoader();
  mtlLoader.setPath('/static/dinos/');
  //mtlLoader.setBaseUrl('/static/dinos/');
  mtlLoader.load('raptor.mtl', function(materials){
    materials.preload();
    var loader = new THREE.OBJLoader();
    loader.setMaterials(materials);
    loader.setPath('/static/dinos/');
    //dinoMat = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    loader.load( 'raptor.obj', 
      //For getting materials on the object...
      //https://stackoverflow.com/questions/35927111/three-js-change-material-for-obj-file-using-a-button
      function ( dino ) {
        /*dino.traverse(function(child) {
          if (child instanceof THREE.Mesh){
            child.material = dinoMat;
          }
        });	*/

        newRaptor.add(dino);
        //dino.position.x = map.path1[0][0];
        //dino.position.z = map.path1[0][1];
        newRaptor.scale.set( 0.3, 0.3, 0.3 );
        //dinos.push(dino);
        //scene.add(dino);
        newRaptor.name = "raptor";
        newRaptor.position.x = map.path1[0][0];
        newRaptor.position.z = map.path1[0][1];
        newRaptor.userData.health = raptor.health;
        newRaptor.userData.speed = raptor.speed;
        newRaptor.userData.reward = raptor.reward;
    });
});

  scene.add(newRaptor);
  dinos.push([newRaptor, raptor]);
}