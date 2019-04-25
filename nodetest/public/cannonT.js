let cannonT = {

  name: "cannon tower",
  buildSpeed: 8000, //8 seconds
  attackSpeed: 2000, //2 second
  attackPower: 10,
  attackRadius: 2,
  cost: 35
};

function addcannonT( object, scene, gridT, towers ){

  //create a new Object3D so that the added object can be pushed to the 
  //tower array, solved asynchronous js issues
  var newTower = new THREE.Object3D();
  var mtlLoader = new THREE.MTLLoader();
  //mtlLoader.setTexturePath('/static/towers/');
  mtlLoader.setPath('/static/towers/');
  mtlLoader.load('canontowermodified.mtl', function(materials){

    materials.preload();
    var loader = new THREE.OBJLoader();
    loader.setMaterials(materials);
    loader.load( '/static/towers/canontowermodified.obj', 
      //For getting materials on the object...
      //https://stackoverflow.com/questions/35927111/three-js-change-material-for-obj-file-using-a-button
      function ( tower ) {
        /*tower.traverse(function(child) {
          if (child instanceof THREE.Mesh){
            child.material = towerMat;
          }
        });	*/

        newTower.add(tower);
              
        //set tower position to where user clicked
        newTower.position.x = object.x;
        newTower.position.y = .1;
        newTower.position.z = object.z;

        //show the attack radius of the newTower
        //create a circle around the newTower
        var cmaterial = new THREE.MeshBasicMaterial({color: 0xa12b0d});
        //radius of 6 is about one square on the board
        var cgeometry = new THREE.CircleGeometry(12, 32); 
        var circle = new THREE.LineLoop(cgeometry, cmaterial);
        //scene.add(new THREE.LineLoop(cgeometry, cmaterial));
        scene.add(circle);
        circle.position.y = .5;
        circle.position.z = newTower.position.z;
        circle.position.x = newTower.position.x;
        circle.rotateX(300); //rotate circle so it lays flat
        
        //https://stackoverflow.com/questions/24723471/three-js-scale-model-with-scale-set-or-increase-model-size
        newTower.scale.set( 0.3, 0.3, 0.3 );
        newTower.name = cannonT.name;
        //add pirate newTower attributes to each created newTower
        //three.js objects have a specific place for created attributes
        //called userData
        newTower.userData.buildSpeed = cannonT.buildSpeed;
        newTower.userData.attackPower = cannonT.attackPower;
        newTower.userData.attackSpeed = cannonT.attackSpeed;
        newTower.userData.cost = cannonT.cost;
      });
    });
    scene.add(newTower);
    gridT.push(newTower);
    towers.push(newTower);
}