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
      var towerName = "musketT";
      towerLoader( '/static/towers/canontowermodified2.glb', loadTowers[i].pos, gridT, towers, towerName);
    }

    //CHANGE TO NET CANNON
    else if(loadTowers[i].nameOf == "cannon tower"){
      //build
      addcannonT( loadTowers[i].pos, scene, gridT, towers );
    }

  }

}

function loadGameValues() {
  var coinAtLoad = getCookie('loadCoins');
  var waveAtLoad = getCookie('loadWaves');
  var livesAtLoad = getCookie('loadLives');
  if(coinAtLoad == ""){
    console.log("No game variables to load");
    return;
  }

  //console.log("coinAtLoad: ", coinAtLoad);

  setCoins( parseInt(coinAtLoad) );
  setLives( parseInt(livesAtLoad) );
  curWave = parseInt(waveAtLoad);

}

function loadGame() {
  loadTowerLocations( towers );
  loadGameValues();
  console.log("Loaded Game!");
  //stopAnimation = false;
  play();
}
