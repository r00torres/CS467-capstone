var loadTowers = [];

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

//gotta save the currently built towers! web suggest convert to json and create cookie this way
function loadTowerLocations( towers ) {
  var jsonloadedTowers = getCookie('loadBuildMap');
  if(jsonloadedTowers == ""){
    console.log("No towers to load");
    return;
  }
  loadTowers = JSON.parse(jsonloadedTowers);

  for (var i = 0; i < loadTowers.length; i++){

    if(loadTowers[i].nameOf == "musketT"){
      var towerName = "musketT";
      towerLoader( '/static/towers/musket1.glb', loadTowers[i].pos, gridT, towers, towerName);
    }

    else if(loadTowers[i].nameOf == "cannonT"){
      var towerName = "cannonT";
      towerLoader( '/static/towers/canontowermodified2.glb', loadTowers[i].pos, gridT, towers, towerName);
    }

    //CHANGE TO NET CANNON
    else if(loadTowers[i].nameOf == "cannon tower"){
      var towerName = "cannon tower";
      towerLoader( '/static/towers/canontowermodified2.glb', loadTowers[i].pos, gridT, towers, towerName);
    }
  }
}

function loadGameValues() {
  var coinAtLoad = getCookie('loadCoins');
  var waveAtLoad = getCookie('loadWaves');
  var livesAtLoad = getCookie('loadLives');

  var mapAtLoad = getCookie('loadMap');

  if(coinAtLoad == ""){
    console.log("No game variables to load");
    return;
  }

  //console.log("coinAtLoad: ", coinAtLoad);

  setCoins( parseInt(coinAtLoad) );
  setLives( parseInt(livesAtLoad) );
  curWave = parseInt(waveAtLoad);
  currMap = parseInt(mapAtLoad);

  updateGameUIbar( 'coins', getCoins() );
  updateGameUIbar( 'lives', getLives() );
  updateGameUIbar( 'waves', curWave );
  updateGameUIbar( 'level', currMap );

}

function loadGame() {
  
  var isLoaded = getCookie('loadGame');
  var loaded = false;
  
  if(isLoaded != ""){
    loaded = true;  
    loadTowerLocations( towers );
    loadGameValues();
    console.log("Loaded Game!");
    stopWaveTimeout();
    //stopAnimation = false;
    play(loaded);
  }
  else if(isLoaded == ""){
    console.log("Cannot Load a Game!");
    stopWaveTimeout();
    play(loaded);
  }
}

//checks to see if a buildable space already has a tower
//false - okay to build
//true - tower was loaded at this position, change space to buildable on gridT
function fromLoaded(intersection, towers){

  //nothing loaded, good to build
  if(towers.length < 0){
    return false;
  }

  for(var i = 0; i < towers.length; i++){
    if((intersection[0].object.position.x == towers[i].children[1].position.x) && (intersection[0].object.position.z == towers[i].children[1].position.z)){
      return true;
    }
  }

  return false;
}
