//testing variables
var coins = 10;
var musketPrice = 5;
var cannonPrice = 5;
var netPrice = 5;

function initBuildUI(){
  var buildUI = document.createElement("div");
	buildUI.setAttribute("id", "build-ui-container");
  buildUI.setAttribute("class", "build-ui-button-group");
	document.body.append(buildUI);
    
  var musketButton = document.createElement("button");
  musketButton.setAttribute("id", "build-musket-button");
  musketButton.setAttribute("class", "build-ui-button-group");
  musketButton.innerHTML = 'Build Musket Tower';
    
  var cannonButton = document.createElement("button");
	cannonButton.setAttribute("id", "build-cannon-button");
	cannonButton.setAttribute("class", "build-ui-button-group");
  cannonButton.innerHTML = 'Build Cannon Tower';

  var netButton = document.createElement("button");
	netButton.setAttribute("id", "build-net-button");
	netButton.setAttribute("class", "build-ui-button-group");
  netButton.innerHTML = 'Build Cannon Tower';
  
  document.getElementById("build-ui-container").append(towerButton);
  document.getElementById("build-ui-container").append(cannonButton);
  document.getElementById("build-ui-container").append(musketButton);
};
  
initBuildUI();

function viewBuildMenu(coins, musketPrice, cannonPrice, netPrice) {
  
  var buildCont = document.getElementById("build-ui-container");
  if (buildCont.style.display === "none") {
    buildCont.style.display = "block";
    buildCont.children[0].style.display = "block";
    buildCont.children[0].disabled = false;
    buildCont.children[1].style.display = "block";
    buildCont.children[1].disabled = false;
    buildCont.children[2].style.display = "block";
    buildCont.children[2].disabled = false;

    //include an exit button?

    //if coins < musket price
    //make musket no click
    if(coins < musketPrice){
      buildCont.children[0].disabled = true;
    }

    //if coins < cannon price
    //make no click
    if(coins < cannonPrice){
      buildCont.children[1].disabled = true;
    }

    //if coins < net price
    //make no click
    if(coins < netPrice){
      buildCont.children[2].disabled = true;
    }

  } else {
  	buildCont.style.display = "none";
    buildCont.children[0].style.display = "none";
    buildCont.children[1].style.display = "none";
    buildCont.children[2].style.display = "none";
    //possible exit button
  }
  console.log("Within viewBuildMenu")
};

viewBuildMenu();

document.getElementById("build-musket-button").addEventListener("click", function () {
  console.log("Clicked Musket Tower")
  viewBuildMenu();
});

document.getElementById("build-cannon-button").addEventListener("click", function () {
  console.log("Clicked Cannon Tower")
  viewBuildMenu();
});

document.getElementById("build-net-button").addEventListener("click", function () {
  console.log("Clicked Net Tower")
  viewBuildMenu();
});