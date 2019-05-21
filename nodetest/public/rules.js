var lives = 3;
var curWave = 1;
var waveTime = 0;
var totWaves = 10;
var timeXwave = 10;
var coins = 100;

function mapWaves(curWaveVal){



  var uplives = getLives();
  var getCurWave = getWave();

  console.log("start of mapwaves", getCurWave, curWaveVal);
  if( uplives < 1 ){
    //loseCondition();
    console.log("mapwaves if");
    uplives = 0;

  }
  if( getCurWave != curWaveVal ){
    console.log("mapwaves else if");
    curWaveVal = getCurWave;
    //Tween.removeAll();

    //loseCondition();

  }
  else {
    console.log("mapwaves else");

    console.log("MAPWAVES******************");
    console.log("wt txw clock", waveTime, timeXwave, clock.elapsedTime);
    updateGameUIbar("waves", getCurWave);
    if(curWave == totWaves){

      console.log("You win!");

    }
    if( curWave < totWaves && lives > 0){

      console.log("mapwaves clock", clock.elapsedTime);
      var delay = 0;

      for( var i=0; i<curWave; i++ ) {

        addOviGLTF(scene, dinos, delay);
        delay += 500;

      }

      curWave++;
      saveGame();


    }
    //if( lives > 0 ){

      setTimeout(function(){

          //var newWaveVal = curWave.slice(0);
          console.log("Timeout wave", curWave, getCurWave);
          mapWaves(getCurWave);


      }, 10000);

    //}
  }

}

//Win lose conditions
function loseCondition(){
  console.log("YOU LOSE", lives);
  //https://stackoverflow.com/questions/30359830/how-do-i-clear-three-js-scene
  //TWEEN.removeAll();
  while ( scene.children.length > 1 ) {
    //testing
    if( scene.children.type != "AmbientLight" ){
      scene.children.pop();
    }

     //scene.children.pop();
  }

  console.log("scene",scene);
  clearErrythang();
}

function clearErrythang() {
  // var animationID = requestAnimationFrame(animate);
  // cancelAnimationFrame(animationID);
  // scene = NULL;
  // camera = NULL;
  // renderer = NULL;
  // controls = NULL;
  // stats = NULL;
  // raycaster = NULL;
  // mouse = NULL;
  // setTimeout( function(){
  //   init();
  // }, 500);
  console.log("CLEARING!!!!!!!!!!!!!!!!!!!!!!!");

  stopAnimation = true;
  //document.getElementById("game-ui-bar").style.display = "none";

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
    document.body.removeChild(buildUIcontainer);
  }

  if( document.getElementById("gameUIbar") ){
    document.body.removeChild(gameUIbar);
  }


  //document.body.removeChild(canvas);
  menu();
  //document.body.removeChild(game-ui-bar);
}
