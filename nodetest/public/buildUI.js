//testing variables
var coins = 10;
var musketPrice = 5;
var cannonPrice = 5;
var netPrice = 5;

var towerEvent = "none";

var clickMusket = function (){ };
var clickCannon = function () { };
var clickNet = function () { };
var clickCancel = function() {
			console.log("Clicked Cancel Build")
  			viewBuildMenu();
		};

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
  netButton.innerHTML = 'Build Net Tower';
	
	var cancelButton = document.createElement("button");
	cancelButton.setAttribute("id", "build-cancel-button");
	cancelButton.setAttribute("class", "build-ui-button-group");
  	cancelButton.innerHTML = 'Cancel Build Here';
	
  
  document.getElementById("build-ui-container").append(musketButton);
  document.getElementById("build-ui-container").append(cannonButton);
  document.getElementById("build-ui-container").append(netButton);
	document.getElementById("build-ui-container").append(cancelButton);
	
	document.getElementById("build-cancel-button").addEventListener("click", clickCancel);
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
	buildCont.children[3].style.display = "block";
    buildCont.children[3].disabled = false;

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
	 
  	if(coins < musketPrice && coins < cannonPrice && coins < netPrice){
	  	//change cancel button to "cannot build, exit build mode"
	}
	  

  } else {	//hide build menu
  	buildCont.style.display = "none";
    buildCont.children[0].style.display = "none";
    buildCont.children[1].style.display = "none";
    buildCont.children[2].style.display = "none";
	  buildCont.children[3].style.display = "none";
    //possible exit button
  }
  console.log("Within viewBuildMenu")
	
};

viewBuildMenu();

function clearBuildMenu(){
	
	var buildCont = document.getElementById("build-ui-container");
	buildCont.style.display = "none";
    	buildCont.children[0].style.display = "none";
    	buildCont.children[1].style.display = "none";
    	buildCont.children[2].style.display = "none";
	buildCont.children[3].style.display = "none";

};

/*document.getElementById("build-musket-button").addEventListener("click", function () {
  console.log("Clicked Musket Tower")
  viewBuildMenu();
	towerEvent = "buildMusket";
});

document.getElementById("build-cannon-button").addEventListener("click", function () {
  console.log("Clicked Cannon Tower")
  viewBuildMenu();
	towerEvent = "buildCannon";
});

document.getElementById("build-net-button").addEventListener("click", function () {
  console.log("Clicked Net Tower")
  viewBuildMenu();
	towerEvent = "buildNet";
	
});

document.getElementById("build-cancel-button").addEventListener("click", function () {
  console.log("Clicked Cancel Build")
  viewBuildMenu();
	towerEvent = "buildNothing";
	
});*/
