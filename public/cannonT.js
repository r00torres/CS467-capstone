let cannonT = {

  name: "cannon tower",
  buildSpeed: 8000, //8 seconds
  attackSpeed: 2.0, //1 second
  attackPower: 10,
  attackRadius: 8,
  towerTime: 0,
  cost: 120

};

function deadDino( d ){

  //console.log("DEAD DINO ID",d.uuid);
  //console.log("dino:", d);
  scene.remove( d.parent );
  //console.log("tweens", TWEEN.getAll());
  dinoSound2.play();
  //console.log("removing", d.uuid);
  viewBuildMenu(getCoins(), pirateT.cost, cannonT.cost, cabinT.cost);
  viewBuildMenu(getCoins(), pirateT.cost, cannonT.cost, cabinT.cost);

}

function attack( coins, towers, dinos ) {
  //the first one gives me problems with children...
  if ( towers.length == 1 ) {
    if (towers == Array){
      //console.log("first");
      //console.log("ft", towers)
    }
    //never called
    else if (towers == Object){

      var tc = towers[0].children;
      //console.log(tc[0].position);

    }

  }

  if ( dinos.length > 0) {

    //cycle through towers
    for( var i = 0; i < towers.length; i++ ) {

      var tc = towers[i].children;

      for( var j = 0; j < tc.length; j=j+2) {

        if(dinos.length > 0){

          for( var d = 0; d < dinos.length; d++) {

            radiusCheck( tc[j+1].userData.attackRadius, tc[j].position, dinos[d][0], tc[j+1].userData.attackSpeed, tc[j+1].userData.towerTime, tc[j+1] )

            if(dinos[d][0].userData.health <= 0){

              //console.log(dinos[d][0].userData.health);
              //console.log(dinos[d][0].uuid);
              //console.log("dinos, d",dinos, d);
              //console.log("dl", dinos[d]);
              dinos.splice(d, 1);

            }

          }

        }

      };

    }

  }

  function radiusCheck( towerRadius, towerLoc, dino, attackSpeed, towerTime, tc ) {

    var towerRay = new THREE.Raycaster();
    towerRay.far = towerRadius;
		var starting = towerLoc;
		var ptc = new THREE.Vector3( 0, 0, 0 );
		towerRay.set( starting, ptc.normalize() );

    //if the dino is within the radius...
    if( towerLoc.distanceTo( dino.position ) < towerRadius ){

      //Create a line between the dino and tower
      var towerToDinoLine = [];

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

      if( tc.userData.towerTime+attackSpeed < clock.elapsedTime ) {

        var sgeo = new THREE.SphereBufferGeometry( 0.1, 7, 7 );
        var smat = new THREE.MeshBasicMaterial( { color: 0x000000 } );
        var sph = new THREE.Mesh( sgeo, smat );

        sph.scale
        sph.position.copy( towerLoc );
        sph.position.y = 3.5;
        sph.userData = dinov3lineAdj;

        projectiles.push(sph);

        scene.add( sph );

        tc.userData.towerTime = clock.elapsedTime;
        dino.userData.health = dino.userData.health - tc.userData.attackPower;
        //console.log("POW!", clock.elapsedTime);
        //console.log("DINO HEALTH: ", dino.userData.health);
        if(dino.userData.health <= 0){
          //console.log("Dead dino reward",dino.userData.reward);

          coins = getCoins() + dino.userData.reward;
          setCoins(coins);

          updateGameUIbar( "coins", coins );
          deadDino( dino );
        }

      }

		}

  }

}
