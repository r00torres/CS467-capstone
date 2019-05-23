var lives = 3;
var curWave = 1;
var waveTime = 0;
var totWaves = 10;
var timeXwave = 10;
var coins = 100;

function mapWaves(testPath, curWaveVal){

  var uplives = getLives();
  var getCurWave = getWave();
  var setWaveTime;

  console.log("start of mapwaves", getCurWave, curWaveVal);
  if( uplives < 1 ){
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
  else {
    console.log("mapwaves else");

    console.log("MAPWAVES******************");
    console.log("wt txw clock", waveTime, timeXwave, clock.elapsedTime);
    updateGameUIbar("waves", getCurWave);
    if(curWave == totWaves){

      console.log("You win!");
      clearEverything();

    }
    if( curWave < totWaves && lives > 0){

      console.log("mapwaves clock", clock.elapsedTime);
      var delay = 0;

      for( var i=0; i<curWave; i++ ) {

        addOviGLTF(scene, dinos, delay, testPath);
        delay += 500;

      }

      curWave++;
      saveGame();



    }
    //if( lives > 0 ){

    var timex = 11000;





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
  //https://stackoverflow.com/questions/30359830/how-do-i-clear-three-js-scene
  //TWEEN.removeAll();
  controls.enabled = false;

  clearEverything();
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
  menu();
  //document.body.removeChild(game-ui-bar);
}
