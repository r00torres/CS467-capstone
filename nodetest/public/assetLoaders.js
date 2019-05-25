function enviroLoader( object, position, orotation, glname ) {

  console.log("enviroLoader");

  const loader = new THREE.GLTFLoader(loadingManager);

  const onLoad = ( gltf, position ) => {


    var model = gltf.scene;

    model.position.copy( position );

    model.rotation.y = orotation;

    var animation = gltf.animations[ 0 ];

    var mixer = new THREE.AnimationMixer( model );
    mixers.push( mixer );

    var action = mixer.clipAction( animation );
    action.play();

    if( glname == "palm" ){
      var xzset = Math.random() + .3;
      model.scale.set( xzset, Math.random()+.2, xzset );
    }
    else if( glname == "mapbg" ){
      model.scale.set( 1, 0, 1 );
    }
    else{
      model.scale.set( 0.3, 0.3, 0.3 );
    }




    scene.add( model );

  };

  const onProgress = () => {};

  const onError = (errorMessage ) => {

    console.log( errorMessage );

  };

  loader.load( object, gltf => onLoad( gltf, position ), onProgress, onError );

}

function towerLoader( object, position, gridT, towers, towerName ) {
  console.log("towerLoader");

  const loader = new THREE.GLTFLoader();

  const onLoad = ( gltf, position ) => {


    var model = gltf.scene;

    model.position.copy( position );

    //model.rotation.y = orotation;

    var animation = gltf.animations[ 0 ];

    var mixer = new THREE.AnimationMixer( model );
    mixers.push( mixer );

    var action = mixer.clipAction( animation );
    action.play();

    model.position.x = position.x;
    model.position.y = .1;
    model.position.z = position.z;

    //show the attack radius of the newTower
    //create a circle around the newTower
    var cmaterial = new THREE.MeshBasicMaterial({
      color: 0xa12b0d,
      opacity: 0.20,
      transparent: true
    });

    //radius of 6 is about one square on the board
    var cgeometry = new THREE.CircleGeometry(pirateT.attackRadius, 32);
    var circle = new THREE.Mesh(cgeometry, cmaterial);

    circle.position.y = .5;
    circle.position.z = model.position.z;
    circle.position.x = model.position.x;
    circle.rotateX(300); //rotate circle so it lays flat

    //https://stackoverflow.com/questions/24723471/three-js-scale-model-with-scale-set-or-increase-model-size
    model.scale.set( 0.3, 0.3, 0.3 );
    model.name = towerName;

    //add pirate newTower attributes to each created newTower
    //three.js objects have a specific place for created attributes
    //called userData
    model.userData.buildSpeed = pirateT.buildSpeed;
    model.userData.attackPower = pirateT.attackPower;
    model.userData.attackSpeed = pirateT.attackSpeed;
    model.userData.attackRadius = pirateT.attackRadius;
    model.userData.towerTime = pirateT.towerTime;
    model.userData.cost = pirateT.cost;
    model.rotation.y = Math.floor(Math.random() * 3);

    //Adding Raycast to see intersecting objects for tower projectiles
    //Boundingsphere?

    cgeometry.computeBoundingSphere();
    cgeometry.boundingSphere.radius = model.userData.attackRadius;
    cgeometry.boundingSphere.center = model.position;
    circle.name = "atkradius";

    console.log("newTower", model);

    var towerGroup = new THREE.Group();

    towerGroup.name = "towerG";

    towerGroup.add( circle );
    towerGroup.add( model );


    scene.add( towerGroup );
    gridT.push( towerGroup );
    towers.push( towerGroup );

    console.log("towers", towers );

  };

  const onProgress = () => {};

  const onError = (errorMessage ) => {

    console.log( errorMessage );

  };

  loader.load( object, gltf => onLoad( gltf, position ), onProgress, onError );
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
  const loader = new THREE.GLTFLoader(loadingManager);

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
