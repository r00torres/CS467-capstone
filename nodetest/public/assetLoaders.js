function enviroLoader( object, position ) {

  console.log("enviroLoader");
}

function towerLoader( object, position, towers ) {
  console.log("towerLoader");
}

function dinoLoader( object, position, dinos, delay, testPath ) {

  console.log("dinoLoader", dinos);

  //two position variables were creating conflicts
  //dino does not get its position set individually now
  var position = {x: testPath[0][0], y: 0, z: testPath[0][1]};

  //create a target object with the x and z coordinates from the enemy path
  var target = {};
  target.x = [];
  target.z = [];
  target.y = 0;
  for(var i=0; i<testPath.length; i++)
  {
    //add the coordinates from the path
    target.x.push(testPath[i][0]);
    target.z.push(testPath[i][1]);
  }

  var targetHealth = {};
  targetHealth.x = [];
  targetHealth.z = [];
  targetHealth.y = 3;
  for(var i=0; i<testPath.length; i++)
  {
    //add the coordinates from the path
    targetHealth.x.push(testPath[i][0]);
    targetHealth.z.push(testPath[i][1]);
  }


  //https://github.com/mrdoob/three.js/blob/master/examples/webgl_animation_multiple.html
  //https://github.com/mrdoob/three.js/blob/master/examples/webgl_animation_keyframes.html
  const loader = new THREE.GLTFLoader();

  const onLoad = ( gltf, position ) => {


    var model = gltf.scene;

    model.position.copy( position );

    var animation = gltf.animations[ 0 ];

    var mixer = new THREE.AnimationMixer( model );
    mixers.push( mixer );

    var action = mixer.clipAction( animation );
    action.play();

    model.scale.set( 0.3, 0.3, 0.3 );

    model.name = "oviraptor";
    model.position.x = testPath[0][0];
    model.position.z = testPath[0][1];
    model.userData.health = oviraptor.health;
    model.userData.speed = oviraptor.speed;
    model.userData.reward = oviraptor.reward;
    model.userData.tweenId = oviraptor.tweenId;
    model.type = "Object3D";


    //creating the health bar
    //it has 4 sections that could equal 1/4 of the health of the dino
    var barGemetry = new THREE.BoxGeometry(.25, .25, 1, 1, 1, 4);
    var barMaterial = new THREE.MeshBasicMaterial({color: 0xff0000});
    var healthBar = new THREE.Mesh(barGemetry, barMaterial);
    healthBar.position.x = testPath[0][0];
    healthBar.position.z = testPath[0][1];

    //make bar float above the dino
    healthBar.position.y = 3;

    //create a new group out of a THREE.Object3D
    //this allows the dino and bar to be moved together
    //the dino and health bar position are not set individually
    //but the group's position is set instead
    dinogroup = new THREE.Group();
    dinogroup.add(model);
    dinogroup.add(healthBar);
    console.log("start pos", testPath[0][0]);

    console.log("loadDino model:", model);
    console.log("loadDino healthbar:", healthBar);
    console.log("dinogroup", dinogroup );
    //model.add(dino);
    scene.add( dinogroup );

    dinos.push([model,oviraptor]);
    console.log("group ", dinogroup);
    console.log("group pos ", dinogroup.position);
    dinoPath( dinogroup, oviraptor.speed, target, targetHealth, delay );

  };

  const onProgress = () => {};

  const onError = (errorMessage ) => {

    console.log( errorMessage );

  };

  loader.load( object, gltf => onLoad( gltf, position ), onProgress, onError );

}
