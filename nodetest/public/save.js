

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

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
function saveTowerLocations( towers ) {
  
    var savedTowers = [];
    for (var i = 0; i < towers.length; i++){
        var pos = towers[i].children[1].position;
        var nameOf = towers[i].children[1].name;
        savedTowers.push({pos, nameOf});
    }
  
  var json_str = JSON.stringify(savedTowers);
  
  setCookie('loadBuildMap', json_str);
  
}

function saveGameVariables( coins, curWave, lives, currMap ) {
    var coinAtSave = coins;
    var waveAtSave = curWave;
    var livesAtSave = lives;
    var mapAtSave = currMap;

    setCookie('loadCoins', coinAtSave);
    setCookie('loadWaves', waveAtSave);
    setCookie('loadLives', livesAtSave);
    setCookie('loadMap', mapAtSave);
}

function checkCookie() {
  var username = getCookie("username");
  if (username != "") {
   //load game state variables
   console.log("There's cookies here, yum!");
  } else {
    console.log("There's no cookies here yet, sad!");
    var user = "testName"
    if (user != "" && user != null) {
      setCookie("username", user, 365);
    }
  }
}

function saveGame(){
  saveGameVariables( coins, curWave, lives, currMap );
  saveTowerLocations( towers );
  
}

/*//testing saving tower pos and name
let position = {
                x: 1,
                y: 1,
                z: 1,
              }

savedTowers.push({ position, name:"test" });
savedTowers.push({ position, name:"test1" });
savedTowers.push({ position, name:"test2" });
var json_str = JSON.stringify(savedTowers); 
setCookie('loadBuildMap', json_str);*/
