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
  loadTowers = JSON.parse(jsonloadedTowers);
  
  for (var i = 0; i < loadTowers.length; i++){
    
    if(loadTowers[i].nameOf == "musket tower"){
      //build
    }
    
    else if(loadTowers[i].nameOf == "cannon tower"){
      //build
    }
    
    else if(loadTowers[i].nameOf == "cannon tower"){
      //build
    }

  }
  
}
