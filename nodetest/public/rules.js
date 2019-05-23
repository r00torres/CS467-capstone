var lives = 3;
var curWave = 0;
var waveTime = 0;
var totWaves = 10;
var timeXwave = 10;
var coins = 100;

function mapWaves(testPath, curWaveVal){

  var uplives = getLives();
  var getCurWave = getWave();
  var setWaveTime;
  //curWave ++;

  console.log("start of mapwaves", getCurWave, curWaveVal);
  console.log("rules values:", getCurWave, totWaves);
  if(curWave >= totWaves){

    console.log("You win!");
    console.log("map", currMap);
    //clearEverything();
    var newMap = parseInt(currMap);
    newMap += 1;
    console.log("NEWMAP", newMap);

    if(currMap < 4){
      clearEverything();
      setMap(newMap);
      var win = false;
      play(win);
    }
    if(currMap > 3 ){
      clearEverything();
      console.log("you beat the game");
      menu();
    }

  }
  else if( uplives < 1 ){
    //loseCondition();
    console.log("mapwaves if");
    uplives = 0;
    stopWaveTimeout();
    //loseCondition();

  }
  // if( getCurWave != curWaveVal ){
  //   console.log("mapwaves else if");
  //   curWaveVal = getCurWave;
  //   //TWEEN.removeAll();
  //
  //   //loseCondition();
  //
  // }
  else if( uplives > 1 ){
    console.log("mapwaves else");

    console.log("MAPWAVES******************");
    console.log("wt txw clock", waveTime, timeXwave, clock.elapsedTime);
    updateGameUIbar("waves", getCurWave);

    if( curWave < totWaves && lives > 0){

      console.log("mapwaves clock", clock.elapsedTime);
      var delay = 0;

      for( var i=0; i<curWave; i++ ) {

        addOviGLTF(scene, dinos, delay, testPath);
        delay += 500;

      }

      saveGame();
      curWave++;




    }
    //if( lives > 0 ){

    var timex = 11000 + delay;





    waveTimeout();
    //}
  }

  function waveTimeout(){
    setWaveTime = setTimeout(function(){

        //var newWaveVal = curWave.slice(0);
        console.log("Timeout wave", curWave, getCurWave);
        mapWaves(testPath, getCurWave);


    }, timex);
  }

  function stopWaveTimeout(){
    console.log("stopwave");
    clearTimeout( setWaveTime );
  }

}

//Win lose conditions
function loseCondition(){
  console.log("YOU LOSE", lives);
  //stopAnimation = false;
  //https://stackoverflow.com/questions/30359830/how-do-i-clear-three-js-scene
  //TWEEN.removeAll();
  // controls.enabled = false;
  gridT = [];
  //
  //menu();


  controls.reset();
  controls.enabled = false;

  console.log("tween menu", TWEEN.getAll());
  console.log("d", dinos);

  camera.position.set( 0, 10, -10 );
  camera.lookAt( 0, 0, 0 );
  console.log("camera menu", camera);

  console.log("menuscene", scene);
  stopAnimation = false;

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
  playButton.position.y = 10;
  playButton.rotation.y = -1;
  playButton.name = "play";

    //Pushing to the tile array
  gridT.push( playButton );

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
  console.log("menuscope", menuScope);

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
          console.log("CLICKED");

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

            sound.context.resume();


          }, 500 );
          //Play the game
          setTimeout( function() { clearEverything(); loadGame(); }, 600 );

        }
        else if (intersects[0].object.name == "credits"){
          console.log("CLICKED");

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

            sound.context.resume();


          }, 500 );
          //Play the game
          setTimeout( function() { clearEverything(); menu(); }, 600 );
        }

      }

    }

  }


  //clearEverything();
}

function clearEverything() {
  stopAnimation = true;

  while ( scene.children.length > 1 ) {
    //testing
    if( scene.children.type != "AmbientLight" ){
      scene.children.pop();
    }

     //scene.children.pop();
  }

  console.log("scene",scene);

  console.log("CLEARING!!!!!!!!!!!!!!!!!!!!!!!");


  //document.getElementById("game-ui-bar").style.display = "none";
  //TWEEN.removeAll();
  gridT = [];
  towers = [];
  dinos = [];

  //mixers = [];
  projectiles = [];

  setLives(0);

  if( document.getElementById("countdown") ){
    document.body.removeChild(countdown);
  }

  //document.getElementById("countdown").style.display = "none";

  //document.getElementById("gameUIbar").style.display = "none";
  if( document.getElementById("soundButton") ){
    document.body.removeChild(soundButton);
  }

  //document.getElementById("soundButton").style.display = "none";
  if( document.getElementById("buildUIcontainer") ){
    //clearBuildMenu();
    document.body.removeChild(buildUIcontainer);
  }

  if( document.getElementById("gameUIbar") ){
    document.body.removeChild(gameUIbar);
  }

  camera.position.set( 0, 10, -10 );
  camera.lookAt( 0, 0, 0 );
  camera.rotation.x = -2.677945044588987;
  camera.rotation.y = 0;
  camera.rotation.z = 3.141592653589793;
  console.log("camera", camera);
  controls.reset();
  console.log("tweengetall", TWEEN.getAll() );
  var tweencheck = TWEEN.getAll();
  console.log("tweencheck", tweencheck.length);
  if( tweencheck.length > 0 ){
    //console.log("inside tween if", TWEEN.Tween[0]);
    //console.log(TWEEN.Tween.removeAll());
    //TWEEN.Tween.removeAll; //stop();
    for(var c = 0; c < tweencheck.length; c++){
      console.log("for");
       TWEEN.removeAll();
    }
    console.log("tweencheck if", tweencheck );
    //console.log("tween_", TWEEN._tweens);

  }
  //document.body.removeChild(canvas);
  //menu();

  console.log("ALL CLEAR");
  //document.body.removeChild(game-ui-bar);
}
