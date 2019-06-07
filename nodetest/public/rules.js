var lives = 3;
var curWave = 0;
var waveTime = 0;
var totWaves = 11;
var timeXwave = 1000;
var coins = 100;
var setWaveTime;
var countdownTimer;
var timeleft;

function mapWaves(testPath, curWaveVal){

  clearInterval(countdownTimer);

  var uplives = getLives();
  var getCurWave = getWave();

  if(curWave >= totWaves){

    stopWaveTimeout();

    var newMap = parseInt(currMap);
    newMap += 1;
    //console.log("NEWMAP", newMap);

    if(currMap < 4){
      clearEverything(scene);
      setMap(newMap);
      var win = false;
      play(win);
    }
    if(currMap > 3 ){
      clearEverything(scene);
      currMap = 1;
      //console.log("you beat the game");
      createCredits();
      setTimeout(function(){
        menu();
      }, 35000);
    }

  }
  else if( uplives < 1 ){

    //console.log("mapwaves if");
    uplives = 0;
    stopWaveTimeout();
    clearInterval(countdownTimer);

  }

  else if( uplives > 0 ){
    //console.log("mapwaves else");

    //console.log("MAPWAVES******************");
    //console.log("wt txw clock", waveTime, timeXwave, clock.elapsedTime);
    updateGameUIbar("waves", getCurWave);
    document.getElementById("countdown").style.display = "block";


    //Map loading of dinos


    if( curWave < totWaves && lives > 0){

      //console.log("mapwaves clock", clock.elapsedTime);
      var delay = 0;

      for( var i=0; i<curWave; i++ ) {

        if( curWave < 8 ){
          addOviGLTF( scene, dinos, delay, testPath );
          delay += 500;
          console.log("delay1", delay);
        }

        if( curWave > 3 && curWave < totWaves ){
          addRaptorGLTF( scene, dinos, delay, testPath );
          delay += 500;

        }

        if( curWave > 6 && curWave < totWaves ){
          addOviGLTF( scene, dinos, delay, testPath );
          delay += 500;

        }

        console.log("delay2", delay);


        delay += 1500;

      }

      if( curWave == totWaves - 1 ){
        addTrexGLTF( scene, dinos, delay, testPath );
        delay += 5000;
        addTrexGLTF( scene, dinos, delay, testPath );
        delay += 5000;
        delay += 5000;
      }

      if( lives > 0 ){
        saveGame();
      }

      curWave++;

    }

    console.log("delay", delay);

    var timex = 12000 + delay;
    //console.log("timex + delay", timex);

    timeleft = timex / 1000 ;
    if(timeleft % 1 != 0)
    {
      timeleft -= 0.5;
    }
    console.log("timex", timex);
    console.log("timeleft", timeleft);

    var countdownCheck = document.getElementById("countdown");

    var countdownTimer = setInterval(function(){
      if(countdownCheck != null ){
        //console.log("cc", countdownCheck);

        if( curWave < totWaves  && lives > 0 && timeleft > -1){

          document.getElementById("countdown").innerHTML = "Wave " + curWave +" in " + timeleft;

        } else if ( getCurWave <= totWaves && lives > 0 ) {

          document.getElementById("countdown").innerHTML = "Stay Alive!";

        }

        timeleft -= 1;

        if( timeleft == -1 && lives > 0 && curWave > 0){
          document.getElementById("countdown").innerHTML = "Wave " + curWave + " INCOMING!";
            dinoSound.play();
            clearInterval(countdownTimer);
        }
        else if(timeleft < -1 && lives > 0){
          clearInterval(countdownTimer);
          document.getElementById("countdown").innerHTML = "Stay Alive!";
          //document.getElementById("countdown").style.display = "none";
        }
        else if( timeleft <= 0 && lives < 0 ){
          clearInterval(countdownTimer);
          document.getElementById("countdown").innerHTML = "Out of Lives!";
        }
      }

    }, 1000);


    waveTimeout();

  }

  function waveTimeout(){
    setWaveTime = setTimeout(function(){

        console.log("Timeout wave", curWave, getCurWave, timex);
        clearTimeout( setWaveTime );
        clearInterval(countdownTimer);
        mapWaves(testPath, curWave);


    }, timex + timeXwave);

  }

}

//https://stackoverflow.com/questions/30359830/how-do-i-clear-three-js-scene
function stopWaveTimeout(){

  console.log("stopwave");
  clearTimeout( setWaveTime );

}

//Win lose conditions
function loseCondition(){
  console.log("YOU LOSE", lives);



  gridT = [];
  currMap = 1;

  clearTimeout( setWaveTime );
  clearInterval(countdownTimer);
  stopWaveTimeout();

  document.getElementById("countdown").innerHTML = " ";

  controls.reset();
  controls.enabled = false;

  //console.log("tween menu", TWEEN.getAll());
  //console.log("d", dinos);

  camera.position.set( 0, 20, -20 );
  camera.lookAt( 0, 0, 0 );

  //console.log("camera menu", camera);
  //console.log("menuscene", scene);

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
  playButton.position.y = 17;
  playButton.position.z = -10;
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
  creditsButton.position.y = 12;
  creditsButton.position.z = -10;
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
          console.log("looooooooooooaaaaaaaaaaaad");

          document.removeEventListener( 'click', menuSelect, false );

          scene.remove(intersects[0].object);

          setTimeout( function() {

            gridT.pop();
            gridT.pop();

            scene.remove( playButton );
            scene.remove( creditsButton );

            buttonGeoPlay.dispose();

            buttonMatPlay.dispose();

            sound.context.resume();


          }, 500 );

          //Play the game
          setTimeout( function() { clearTimeout( setWaveTime ); clearEverything(scene); loadGame(); }, 600 );

        }
        else if (intersects[0].object.name == "credits"){
          console.log("menuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu");

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
            console.log("Hiiiiiii menuuuuuuuuuuuuuuuuuuuuuuuuu");


          }, 500 );

          //Play the game
          setTimeout( function() { clearTimeout( setWaveTime ); clearEverything(scene); menu(); }, 600 );
        }

      }

    }

  }

}

function clearEverything(curScene) {
  stopAnimation = true;

  while ( curScene.children.length > 1 ) {

    if( curScene.children.type != "AmbientLight" ){
      curScene.children.pop();
    }

  }

  //console.log("scene",scene);

  everythingLoaded = false;

  clearTimeout( setWaveTime );

  console.log("CLEARING!!!!!!!!!!!!!!!!!!!!!!!");

  gridT = [];
  towers = [];
  dinos = [];
  menuTowers = [];
  menuGridT = [];
  delay = 0;
  timeleft = 0;
  loaded = false;

  projectiles = [];

  setLives(0);
  curWave = 0;
  updateGameUIbar("waves", curWave);


  if( document.getElementById("countdown") ){
    document.body.removeChild(countdown);
  }


  if( document.getElementById("buildUIcontainer") ){
    document.body.removeChild(buildUIcontainer);
  }

  var setgameUI = document.getElementById("gameUIbar");
  setgameUI.style.display = "none";

  camera.position.set( 0, 10, -10 );
  camera.lookAt( 0, 0, 0 );
  camera.rotation.x = -2.677945044588987;
  camera.rotation.y = 0;
  camera.rotation.z = 3.141592653589793;

  //console.log("camera", camera);
  controls.reset();

  //console.log("tweengetall", TWEEN.getAll() );
  var tweencheck = TWEEN.getAll();

  //console.log("tweencheck", tweencheck.length);
  if( tweencheck.length > 0 ){

    //console.log("inside tween if", TWEEN.Tween[0]);
    //console.log(TWEEN.Tween.removeAll());
    for(var c = 0; c < tweencheck.length; c++){
      //console.log("for");
       TWEEN.removeAll();
    }
    //console.log("tweencheck if", tweencheck );
    //console.log("tween_", TWEEN._tweens);

  }

  console.log("ALL CLEAR");

}
