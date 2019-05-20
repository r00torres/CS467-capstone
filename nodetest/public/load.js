var loadTowers = [];
var loadedGameVariables = [];

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
    
    if(loadTowers[i].nameOf == "musket tower"){('coins');
      addpirateT( loadTowers[i].pos, scene, gridT, towers );
    }
    
    else if(loadTowers[i].nameOf == "cannon tower"){
      //build
      addcannonT( loadTowers[i].pos, scene, gridT, towers );
    }
    
    //CHANGE TO NET CANNON
    else if(loadTowers[i].nameOf == "cannon tower"){
      //build
      addcannonT( loadTowers[i].pos, scene, gridT, towers );
    }

  }
  
}

function loadGameValues() {
  var jsonloadedGameVariables = getCookie('loadGameVariables');
  if(jsonloadedGameVariables == ""){
    console.log("No game variables to load");
    return;
  }
  
  loadedGameVariables = JSON.parse(jsonloadedGameVariables);
  
  var strCoins = jsonloadedGameVariables[0].coinsAtSave;
  console.log("StrCoins = ", strCoins);
  var strLives = jsonloadedGameVariables[0].livesAtSave;
  var strWaves = jsonloadedGameVariables[0].waveAtSave;
  setCoins( parseInt(strCoins) );
  setLives( parseInt(strLives) );
  curWave = parseInt(strWaves);
  
}

function loadGame() {
  loadTowerLocations( towers );
  loadGameValues();
  console.log("Loaded Game!");
}
