function menu() {
  //disables users ability to move around menu\
  controls.reset();
  controls.enabled = false;

  TWEEN.removeAll();

  camera.position.set( 0, 10, -10 );
  camera.lookAt( 0, 0, 0 );
  console.log("camera menu", camera);

  console.log("menuscene", scene);
  stopAnimation = false;


  /*Adding a play button*/

    //Creating a plane
  var buttonGeoPlay = new THREE.PlaneBufferGeometry( 5, 3 );
  console.log( "buttonGeoPlay", buttonGeoPlay );
  buttonGeoPlay.rotateX( 2.677945044588987 );
  buttonGeoPlay.rotateY( -1 );
  buttonGeoPlay.rotateZ( Math.PI );
    //Creating material
  var buttonMatPlay = new THREE.MeshBasicMaterial( { color: 0xffffff } );

    //Creating a mesh
  var playButton = new THREE.Mesh( buttonGeoPlay, buttonMatPlay );

    //Setting variables
  playButton.position.y = 6;
  playButton.rotation.y = -1;
  playButton.name = "play";

    //Pushing to the tile array
  gridT.push( playButton );



  /*Adding a Credits button*/

    //Creating a plane
  var buttonGeoCredits = new THREE.PlaneBufferGeometry( 3, 1 );
  console.log( "buttonGeoCredits", buttonGeoCredits );
  buttonGeoCredits.rotateX( 2.677945044588987 );
  buttonGeoCredits.rotateY( -1 );
  buttonGeoCredits.rotateZ( Math.PI );
    //Creating material
  var buttonMatCredits = new THREE.MeshBasicMaterial( { color: 0xff00ff } );

    //Creating a mesh
  var creditsButton = new THREE.Mesh( buttonGeoCredits, buttonMatCredits );

    //Setting variables
  creditsButton.position.y = 2;
  creditsButton.rotation.y = -1;
  creditsButton.name = "credits";

    //Pushing to the tile array
  gridT.push( creditsButton );
  //Add buttons to the scene
  scene.add( playButton );
  scene.add( creditsButton );


  //Remove right click menu and add object clicking
  document.addEventListener( 'contextmenu', function( event ) { event.preventDefault() }, false );
  document.addEventListener( 'click', menuSelect, false );

  var menuScope = this;

  function menuSelect( event ) {

    console.log( "mouse: ", event );

    if( event.button == 0 ) {

      event.preventDefault();
      event.stopPropagation();

      mouse.set( ( event.clientX / window.innerWidth ) * 2 - 1, - ( event.clientY / window.innerHeight ) * 2 + 1 );
      raycaster.setFromCamera( mouse, camera );

      var intersects = raycaster.intersectObjects( gridT );
      console.log( "intersects", intersects);

      if( intersects.length != 0 ) {

        if(intersects[0].object.name == "play") {

          document.removeEventListener( 'click', menuSelect, false );

          scene.remove(intersects[0].object);

          setTimeout( function() {

            gridT.pop();
            gridT.pop();

            scene.remove( playButton );
            scene.remove( creditsButton );

            buttonGeoPlay.dispose();
            buttonGeoCredits.dispose();

            buttonMatPlay.dispose();
            buttonMatCredits.dispose();

          }, 500 );
          //Play the game
          setTimeout( function() { play(); }, 600 );

        } else if ( intersects[0].object.name == "credits" ) {

          //Show credit screen



        }

      }

    }

  }
  console.log("menu");
}
