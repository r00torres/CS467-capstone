let pirateT = {

  name: "pirate tower",
  buildSpeed: 3000, //3 seconds
  attackSpeed: 1000, //1 second
  attackPower: 5,
  attackRadius: 1,
  cost: 25
};

function addpirateT( object, scene, gridT, towers ){

  //create a new Object3D so that the added object can be pushed to the
  //tower array, solved asynchronous js issues
  var newTower = new THREE.Object3D();
  var loader = new THREE.OBJLoader();
  towerMat = new THREE.MeshBasicMaterial( { color: 0xffffff } );
  loader.load( '/static/muskettexture.obj',
    //For getting materials on the object...
    //https://stackoverflow.com/questions/35927111/three-js-change-material-for-obj-file-using-a-button
    function ( tower ) {
      tower.traverse(function(child) {
        if (child instanceof THREE.Mesh){
          child.material = towerMat;
        }
      });

      newTower.add(tower);

      //set tower position to where user clicked
      newTower.position.x = object.x;
      newTower.position.y = object.y + 1.85;
      newTower.position.z = object.z;

      //show the attack radius of the newTower
      //create a circle around the newTower
      var cmaterial = new THREE.MeshBasicMaterial({color: 0xa12b0d});
      //radius of 6 is about one square on the board
      var cgeometry = new THREE.CircleGeometry(6, 32);
      var circle = new THREE.LineLoop(cgeometry, cmaterial);
      //scene.add(new THREE.LineLoop(cgeometry, cmaterial));
      scene.add(circle);
      circle.position.y = .5;
      circle.position.z = newTower.position.z;
      circle.position.x = newTower.position.x;
      circle.rotateX(300); //rotate circle so it lays flat

      //https://stackoverflow.com/questions/24723471/three-js-scale-model-with-scale-set-or-increase-model-size
      newTower.scale.set( 0.1, 0.1, 0.1 );
      newTower.name = pirateT.name;
      //add pirate newTower attributes to each created newTower
      //three.js objects have a specific place for created attributes
      //called userData
      newTower.userData.buildSpeed = pirateT.buildSpeed;
      newTower.userData.attackPower = pirateT.attackPower;
      newTower.userData.attackSpeed = pirateT.attackSpeed;
      newTower.userData.cost = pirateT.cost;
    });

    //once the object has been loaded, add it to the scene and push it
    //to the arrays
    scene.add(newTower);
    gridT.push(newTower);
    towers.push(newTower);
}
