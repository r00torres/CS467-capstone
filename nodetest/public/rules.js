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
  if( curWave < totWaves && lives > 0){
    console.log("mapwaves clock", clock.elapsedTime);
    var delay = 0;
    //delay += 10000;

    for(var i=0; i<3; i++)
    {
      addOviGLTF(scene, dinos, delay);
      delay += 500;
    }
    //waveTime += clock.elapsedTime;
    curWave++;
    saveTowerLocations( towers );
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
}