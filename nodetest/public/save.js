var savedTowers = [];

//gotta save the currently built towers! web suggest convert to json and create cookie this way
function saveTowerLocations( endOfWaveTowers ) {
  for (var i = 0; i < endOfWaveTowers.length; i++){
    savedTowers.push({endOfWaveTowers[i].position, endOfWaveTowers[i].name});
  }
  
  //https://stackoverflow.com/questions/2980143/i-want-to-store-javascript-array-as-a-cookie
  var json_str = JSON.stringify(savedTowers);
  
  setCookie('loadBuildMap', json_str);
  
}

//this will require that an additional function thatcan create these towers on the board upon load

//after each wave or level do we update? we would need to make this clear to user

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
let position = {
                x = 1;
                y = 1;
                z = 1;
              }
//testing saving tower pos and name
savedTowers.push({ position, name:"test" });
var json_str = JSON.stringify(savedTowers); 
setCookie('loadBuildMap', json_str);
