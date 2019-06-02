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

    stopWaveTimeout();
    console.log("You win!");
    console.log("map", currMap);
    //clearEverything();
    var newMap = parseInt(currMap);
    newMap += 1;
    console.log("NEWMAP", newMap);

    if(currMap < 4){
      clearEverything(scene);
      setMap(newMap);
      var win = false;
      //levelTransition(newMap);
      //setTimeout(function(){
        play(win);
      //}, 5000);
    }
    if(currMap > 3 ){
      clearEverything(scene);
      currMap = 1;
      console.log("you beat the game");
      createCredits();
      setTimeout(function(){
        menu();
      }, 35000);
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
  else if( uplives > 0 ){
    console.log("mapwaves else");

    console.log("MAPWAVES******************");
    console.log("wt txw clock", waveTime, timeXwave, clock.elapsedTime);
    updateGameUIbar("waves", getCurWave);
    document.getElementById("countdown").style.display = "block";

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

    var timeleft = timex / 1000;

    var countdownCheck = document.getElementById("countdown");

    var countdownTimer = setInterval(function(){
      if(countdownCheck != null ){
        console.log("cc", countdownCheck);
        if(getCurWave < totWaves - 1){

          document.getElementById("countdown").innerHTML = "Wave " + curWave +" in " + timeleft;

        } else {

          document.getElementById("countdown").innerHTML = "Stay Alive!";

        }

        timeleft -= 1;
        if(timeleft == -1){
          document.getElementById("countdown").innerHTML = "Start"
            dinoSound.play();
        }
        else if(timeleft < 0){
          clearInterval(countdownTimer);
          //document.getElementById("countdown").style.display = "none";
        }
      }

    }, 1000);




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

  // function stopWaveTimeout(){
  //   console.log("stopwave");
  //   clearTimeout( setWaveTime );
  // }

}
var setWaveTime;
function stopWaveTimeout(){
  console.log("stopwave");
  clearTimeout( setWaveTime );
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
  stopWaveTimeout();


  controls.reset();
  controls.enabled = false;

  console.log("tween menu", TWEEN.getAll());
  console.log("d", dinos);

  camera.position.set( 0, 10, -10 );
  camera.lookAt( 0, 0, 0 );
  console.log("camera menu", camera);

  console.log("menuscene", scene);
  stopAnimation = false;

  var losemenu = new THREE.TextureLoader();
  var loadg = losemenu.load( '/static/load.jpg' );
  var loadm = losemenu.load( '/static/menu.jpg' );

  var buttonGeoPlay = new THREE.PlaneBufferGeometry( 5, 3 );
  console.log( "buttonGeoPlay", buttonGeoPlay );
  buttonGeoPlay.rotateX( 2.677945044588987 );
  buttonGeoPlay.rotateY( -1 );
  buttonGeoPlay.rotateZ( Math.PI );
    //Creating material
  var buttonMatPlay = new THREE.MeshBasicMaterial( {
    map: loadg,
    alphaTest: 0.5
  } );

    //Creating a mesh
  var playButton = new THREE.Mesh( buttonGeoPlay, buttonMatPlay );

    //Setting variables
  playButton.position.y = 8;
  playButton.rotation.y = -1;
  playButton.name = "play";

    //Pushing to the tile array
  gridT.push( playButton );

  var buttonGeoCredits = new THREE.PlaneBufferGeometry( 5, 3 );
  console.log( "buttonGeoCredits", buttonGeoCredits );
  buttonGeoCredits.rotateX( 2.677945044588987 );
  buttonGeoCredits.rotateY( -1 );
  buttonGeoCredits.rotateZ( Math.PI );
    //Creating material
  var buttonMatCredits = new THREE.MeshBasicMaterial( {
    map: loadm,
    alphaTest: 0.5
  } );

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
            //buttonGeoCredits.dispose();

            buttonMatPlay.dispose();
            //buttonMatCredits.dispose();

            sound.context.resume();


          }, 500 );
          //Play the game
          setTimeout( function() { clearEverything(scene); loadGame(); }, 600 );

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
          setTimeout( function() { clearEverything(scene); menu(); }, 600 );
        }

      }

    }

  }


  //clearEverything();
}

function clearEverything(curScene) {
  stopAnimation = true;

  while ( curScene.children.length > 1 ) {
    //testing
    if( curScene.children.type != "AmbientLight" ){
      curScene.children.pop();
    }

     //scene.children.pop();
  }

  console.log("scene",scene);

  everythingLoaded = false;

  console.log("CLEARING!!!!!!!!!!!!!!!!!!!!!!!");


  //document.getElementById("game-ui-bar").style.display = "none";
  //TWEEN.removeAll();
  gridT = [];
  towers = [];
  dinos = [];
  menuTowers = [];
  menuGridT = [];

  //mixers = [];
  projectiles = [];

  setLives(0);

  if( document.getElementById("countdown") ){
    document.body.removeChild(countdown);
  }

  //document.getElementById("countdown").style.display = "none";

  //document.getElementById("gameUIbar").style.display = "none";
  // if( document.getElementById("soundButton") ){
  //   document.body.removeChild(soundButton);
  // }

  //document.getElementById("soundButton").style.display = "none";
  if( document.getElementById("buildUIcontainer") ){
    //clearBuildMenu();
    document.body.removeChild(buildUIcontainer);
  }

  // if( document.getElementById("gameUIbar") ){
  //   document.body.removeChild(gameUIbar);
  // }

  var setgameUI = document.getElementById("gameUIbar");
  setgameUI.style.display = "none";

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
