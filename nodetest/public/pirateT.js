let pirateT = {

  name: "pirate tower",
  buildSpeed: 3000, //3 seconds
  attackSpeed: 0.5, //1 second
  attackPower: 5,
  attackRadius: 12,
  towerTime: 0,
  cost: 25
};

// function addpirateT( object, scene, gridT, towers ){
//   var group = new THREE.Group();
//   //create a new Object3D so that the added object can be pushed to the
//   //tower array, solved asynchronous js issues
//   var newTower = new THREE.Object3D();
//   var mtlLoader = new THREE.MTLLoader();
//   //mtlLoader.setTexturePath('/static/towers/');
//   mtlLoader.setPath('/static/towers/');
//   mtlLoader.load('canontowermodified.mtl', function(materials){
//
//     materials.preload();
//     var loader = new THREE.OBJLoader();
//     loader.setMaterials(materials);
//     loader.load( '/static/muskettexture.obj',
//       //For getting materials on the object...
//       //https://stackoverflow.com/questions/35927111/three-js-change-material-for-obj-file-using-a-button
//       function ( tower ) {
//         /*tower.traverse(function(child) {
//           if (child instanceof THREE.Mesh){
//             child.material = towerMat;
//           }
//         });	*/
//
//         newTower.add(tower);
//
//         //set tower position to where user clicked
//         newTower.position.x = object.x;
//         newTower.position.y = 2;
//         newTower.position.z = object.z;
//
//         //show the attack radius of the newTower
//         //create a circle around the newTower
//         var cmaterial = new THREE.MeshBasicMaterial({
//           color: 0xa12b0d,
//           opacity: 0.20,
//           transparent: true
//         });
//         //radius of 6 is about one square on the board
//         var cgeometry = new THREE.CircleGeometry(pirateT.attackRadius, 32);
//         var circle = new THREE.Mesh(cgeometry, cmaterial);
//         //scene.add(new THREE.LineLoop(cgeometry, cmaterial));
//         //scene.add(circle);
//         circle.position.y = .5;
//         circle.position.z = newTower.position.z;
//         circle.position.x = newTower.position.x;
//         circle.rotateX(300); //rotate circle so it lays flat
//
//         //https://stackoverflow.com/questions/24723471/three-js-scale-model-with-scale-set-or-increase-model-size
//         newTower.scale.set( 0.1, 0.1, 0.1 );
//         newTower.name = pirateT.name;
//         //add pirate newTower attributes to each created newTower
//         //three.js objects have a specific place for created attributes
//         //called userData
//         newTower.userData.buildSpeed = pirateT.buildSpeed;
//         newTower.userData.attackPower = pirateT.attackPower;
//         newTower.userData.attackSpeed = pirateT.attackSpeed;
//         newTower.userData.attackRadius = pirateT.attackRadius;
//         newTower.userData.towerTime = pirateT.towerTime;
//         newTower.userData.cost = pirateT.cost;
//
//         //Adding Raycast to see intersecting objects for tower projectiles
//         //Boundingsphere?
//
//         cgeometry.computeBoundingSphere();
//         //cgeometry.boundingSphere.radius = 10;
//         cgeometry.boundingSphere.radius = newTower.userData.attackRadius;
//         cgeometry.boundingSphere.center = newTower.position;
//         circle.name = "atkradius";
//
//         console.log("newTower", newTower);
//
//         //newTower.userData.attack = attack();
//
//
//         group.add( circle );
//         group.add( newTower );
//
//       });
//     });
//     scene.add( group );
//     console.log( "group", group );
//     gridT.push( group );
//     towers.push( group );
//
// }
/*
function addpirateT( object, scene, gridT, towers ){
  var group = new THREE.Group();
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

      group.add( circle );
      group.add( newTower );
    });

    //once the object has been loaded, add it to the scene and push it
    //to the arrays
    scene.add( group );
    gridT.push(group);
    towers.push(group);
}
*/
