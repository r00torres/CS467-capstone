let cannonT = {

  name: "cannon tower",
  buildSpeed: 8000, //8 seconds
  attackSpeed: 1, //1 second
  attackPower: 10,
  attackRadius: 8,
  towerTime: 0,
  cost: 35
};
var group = new THREE.Group();
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
        var cmaterial = new THREE.MeshBasicMaterial({
          color: 0xa12b0d,
          opacity: 0.20,
          transparent: true
        });
        //radius of 6 is about one square on the board
        var cgeometry = new THREE.CircleGeometry(cannonT.attackRadius, 32);
        var circle = new THREE.Mesh(cgeometry, cmaterial);
        //scene.add(new THREE.LineLoop(cgeometry, cmaterial));
        //scene.add(circle);
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
        newTower.userData.attackRadius = cannonT.attackRadius;
        newTower.userData.towerTime = cannonT.towerTime;
        newTower.userData.cost = cannonT.cost;

        //Adding Raycast to see intersecting objects for tower projectiles
        //Boundingsphere?

        cgeometry.computeBoundingSphere();
        //cgeometry.boundingSphere.radius = 10;
        cgeometry.boundingSphere.radius = newTower.userData.attackRadius;
        cgeometry.boundingSphere.center = newTower.position;
        circle.name = "atkradius";

        console.log("newTower", newTower);

        //newTower.userData.attack = attack();


        group.add( circle );
        group.add( newTower );

      });
    });
    scene.add( group );
    console.log( "group", group );
    gridT.push( group );
    towers.push( group );

}

function deadDino( d ){
  console.log("DEAD DINO ID",d.uuid);
  console.log("dino:", d)
  scene.remove( d.parent );
  console.log("removing", d.uuid);
  //console.log("dinos", d);
  //console.log("after", dinos);
}

//May want to implement a "starting tower" to mitigate the transfer from
//what appears to be an array to an object
function attack( towers, dinos ) {
  //the first one gives me problems with children...
  if ( towers.length == 1 ) {
    if (towers == Array){
      //console.log("first");
      //console.log("ft", towers)
    }
    //never called
    else if (towers == Object){
      //console.log( "first tower ", towers[0] );
      var tc = towers[0].children;
      //console.log( "tc ", tc );
      console.log(tc[0].position);

    }

    //attack(towers, dinos);
  }

  //set this to 2 if we have a starting tower... I'm thinking the dinos starting
  //tile should be the start tower. No attack but padding the object array
  if ( towers.length > 1 && dinos.length > 0) {
    //console.log("dl", dinos.length);

    //cycle through towers
    for( var i = 0; i < towers.length; i++ ) {
      //console.log("for i", i );
      var tc = towers[i].children;
      for( var j = 0; j < tc.length; j=j+2) {

        if(dinos.length > 0){
          for( var d = 0; d < dinos.length; d++) {
            radiusCheck( tc[j+1].userData.attackRadius, tc[j].position, dinos[d][0], tc[j+1].userData.attackSpeed, tc[j+1].userData.towerTime, tc[j+1] )
            //console.log("or herer?");
            //console.log("outside")
            if(dinos[d][0].userData.health <= 0){

              console.log(dinos[d][0].userData.health);
              console.log(dinos[d][0].uuid);
              //console.log("dl", dinos.length);
              dinos.splice(d, 1);

              //console.log("after", dinos.length);
              //dinos.pop();

            }
          }
        }


      };
      //animate();

      //console.log( "towers",towers[0] );
      //console.log( "t", tc[0].position );
      //console.log( "dtc:", )
    }
    // var tc = towers[0].children;
    // console.log( "towers",towers[0] );
    // console.log( "t", tc[0].position );
    // console.log( "dtc:", )
  }

  function radiusCheck( towerRadius, towerLoc, dino, attackSpeed, towerTime, tc ) {
    //console.log("here?");
    //console.log( "dinos", dinos );

    var towerRay = new THREE.Raycaster();
    towerRay.far = towerRadius;
		var starting = towerLoc;
		var ptc = new THREE.Vector3( 0, 0, 0 ); //default 0,0,0
		towerRay.set( starting, ptc.normalize() );
    // for( var d = 0; d < dinos.length; d++ ){
    //   var intersected = towerRay.intersectObject( dinos[d][0] );
    //
    //   if( towerLoc.distanceTo( dinos.position ) < towerRadius ){
  	// 		//console.log("intersected", towerTime, clock.elapsedTime);
    //     //Create a line between the dino and tower
    //     console.log( "dinos*****************************************8" );
    //   }
    //
    //
    //
    //
    //
    // }


    // var tc = towers[0].children;
    // console.log( "towers",towers[0] );
    // console.log( "t", tc[0].position );
    //console.log( "dtd:", towerLoc.distanceTo( dinos.position ) )
		//console.log(intersected);

		//setTimeout( function() {

    //if the dino is within the radius...
    if( towerLoc.distanceTo( dino.position ) < towerRadius ){
			//console.log("intersected", towerTime, clock.elapsedTime);
      //Create a line between the dino and tower
      //console.log( "dinos", dinos );
      var towerToDinoLine = [];
      // var tmaterial = new THREE.LineBasicMaterial( { color: 0x0000ff } );
      // //var tgeometry = new THREE.BufferGeometry();
      // var tgeometry = new THREE.Geometry();
      //
      // var towerv3lineAdj = new THREE.Vector3;
      // towerv3lineAdj.copy( tc.position );
      // towerv3lineAdj.y = 1;
      // var dinov3lineAdj = new THREE.Vector3;
      // dinov3lineAdj.copy( dinos.position );
      // dinov3lineAdj.y = 0;
      //
      // tgeometry.vertices.push(towerv3lineAdj);
      // tgeometry.vertices.push(dinov3lineAdj);
      // var line = new THREE.Line( tgeometry, tmaterial );
      // line.position.y = 2;

      //attempt at buffer geometry for performance
      var tmaterial = new THREE.LineBasicMaterial( { color: 0x0000ff } );
      var tgeometry = new THREE.BufferGeometry();

      var towerv3lineAdj = new THREE.Vector3;
      towerv3lineAdj.copy( tc.position );
      towerv3lineAdj.y = 1;
      var dinov3lineAdj = new THREE.Vector3;
      dinov3lineAdj.copy( dino.position );
      dinov3lineAdj.y = 0;
      towerToDinoLine.push( towerv3lineAdj.x, towerv3lineAdj.y, towerv3lineAdj.z);
      towerToDinoLine.push( dinov3lineAdj.x, dinov3lineAdj.y, dinov3lineAdj.z);

      tgeometry.addAttribute( 'position', new THREE.Float32BufferAttribute( towerToDinoLine, 3));
      var line = new THREE.Line( tgeometry, tmaterial );
      //line.position.y = 2;

      //scene.add( line );


      if( tc.userData.towerTime+attackSpeed < clock.elapsedTime ) {

        //console.log("shooting", dino.uuid);

        //pShot(dino, tc);
        //var projGroup = new THREE.Group();
        var sgeo = new THREE.SphereBufferGeometry( 0.1, 7, 7 );
        var smat = new THREE.MeshBasicMaterial( { color: 0x000000 } );
        var sph = new THREE.Mesh( sgeo, smat );
        //console.log( "sph", sph, towerLoc);
        sph.scale
        sph.position.copy( towerLoc );
        sph.position.y = 3.5;
        sph.userData = dinov3lineAdj;
        //projGroup.add( sph );
        //projGroup.add( dinos );
        //projGroup.add( tc );
        projectiles.push(sph);

        scene.add( sph );

        //console.log("positioning dino t ", dino.position, tc.position, tc)
        //console.log("line...d t", dinov3lineAdj, towerv3lineAdj );
        //console.log("line", line);
        tc.userData.towerTime = clock.elapsedTime;
        dino.userData.health--;
        console.log("POW!", clock.elapsedTime);
        console.log("DINO HEALTH: ", dino.userData.health);
        if(dino.userData.health <= 0){
          //console.log("Dead dino",dino.userData.health);
          deadDino( dino );
          //deadDino(dinos);
        }

      }
      // setTimeout( function() {
      //   scene.remove( line );
      // }, 1 );

		}
    //}, attackSpeed );

			//console.log("not intersected");
		// }
    // var towerRay = new THREE.Raycaster();
    // var ptc = new THREE.Vector3( 0, 1, 0 ); //default 0,0,0
    // towerRay.set( towerLoc, ptc );
    // var intersected = towerRay.intersectObject( dinos )
    // //console.log(intersected);
    //
    // if( intersected.length != 0 ){
    //   console.log("intersected");
    // }
    // else {
    //   //console.log("not intersected");
    // }

  }

    //for( var i = 0; i < towers.length; i++) {
      //console.log("attack");
      // var a = new THREE.Vector3( );
      // var b = towers[i].children[0].position;
      // var towerRay = new THREE.Raycaster();
      // towerRay.set( towers[i].position, a);
    //  console.log( "distance to center:", b.distanceTo( a ) );
    //}
    //requestAnimationFrame( animate );

  //}
  //if( towers.length > 0 ){
    //console.log( towers );



  //}

}
