var lives = 3;
var curWave = 1;
var waveTime = 0;
var totWaves = 10;
var timeXwave = 10;
var coins = 100;

function mapWaves(curWave){
  console.log("MAPWAVES******************");
  console.log("wt txw clock", waveTime, timeXwave, clock.elapsedTime);
  updateGameUIbar("waves", curWave);
  if(curWave == totWaves){
    console.log("You win!");
  }
  if( curWave < totWaves && lives > 0){
    console.log("mapwaves clock", clock.elapsedTime);
    var delay = 0;
    //delay += 10000;

    for(var i=0; i<curWave; i++)
    {
      addOviGLTF(scene, dinos, delay);
      delay += 500;
    }
    //waveTime += clock.elapsedTime;
    curWave++;
    //if( lives <= 0)
    if( lives > 0 ){


      setTimeout(function(){
        if( lives > 0 ){
          mapWaves(curWave);
          //console.log("stopping here");
        }
      }, 15000);

    }
  }
/*
  var delay = 10000;
  for(var i=0; i<3; i++)
  {
    addOviGLTF(scene, dinos, delay);
    delay += 500;
  }

  delay += 10000;

  var waveTimer = setInterval(function(){
    updateGameUIbar("waves", 2);
  }, 21500);

  for(var i=0; i<4; i++)
  {
    addOviGLTF(scene, dinos, delay);
    delay += 500;
  }

  delay += 10500;

  waveTimer = setInterval(function(){
    updateGameUIbar("waves", 3);
  }, 33000);
  for(var i=0; i<5; i++)
  {
    addOviGLTF(scene, dinos, delay);
    delay += 500;
  }
*/
}

//Win lose conditions
function loseCondition(){
  console.log("YOU LOSE", lives);
  //https://stackoverflow.com/questions/30359830/how-do-i-clear-three-js-scene
  while ( scene.children.length > 0 ) {
     scene.children.pop();
  }
  console.log(scene);
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
  menu();
}
