var towerEvent = "none";

var clickMusket = function (){ };
var clickCannon = function () { };
var clickNet = function () { };
var clickCancel = function() {
			//console.log("Clicked Cancel Build")
  		viewBuildMenu();
		};

function initBuildUI(){
  var buildUI = document.createElement("div");
	buildUI.setAttribute("id", "buildUIcontainer");
  buildUI.setAttribute("class", "build-ui-button-group");
	document.body.append(buildUI);

  var musketButton = document.createElement("button");
  musketButton.setAttribute("id", "build-musket-button");
  musketButton.setAttribute("class", "build-ui-button-group");
  musketButton.innerHTML = 'Build Musket Tower (-' + pirateT.cost + ')';

  var cannonButton = document.createElement("button");
	cannonButton.setAttribute("id", "build-cannon-button");
	cannonButton.setAttribute("class", "build-ui-button-group");
  cannonButton.innerHTML = 'Build Cannon Tower (-' + cannonT.cost + ')';

	//NEED TO UPDATE TO NET TOWER cost
  var netButton = document.createElement("button");
	netButton.setAttribute("id", "build-net-button");
	netButton.setAttribute("class", "build-ui-button-group");
  netButton.innerHTML = 'Build Cabin Tower (-' + cabinT.cost + ')';

	var cancelButton = document.createElement("button");
	cancelButton.setAttribute("id", "build-cancel-button");
	cancelButton.setAttribute("class", "build-ui-button-group");
  	cancelButton.innerHTML = 'Cancel Build Here';


  document.getElementById("buildUIcontainer").append(musketButton);
  document.getElementById("buildUIcontainer").append(cannonButton);
  document.getElementById("buildUIcontainer").append(netButton);
	document.getElementById("buildUIcontainer").append(cancelButton);

	document.getElementById("build-cancel-button").addEventListener("click", clickCancel);

	//viewBuildMenu();
};

//initBuildUI();
function coinDeficientWarning(){

	var warnCoins = document.getElementById("build-warning")
	warnCoins.style.display = "block";

	setTimeout(function(){
		warnCoins.style.display = "none";
	}, 5000);

}

function viewBuildMenu(coin, musketPrice, cannonPrice, netPrice) {

	//console.log("here in viewBuildMenu");

  var buildCont = document.getElementById("buildUIcontainer");
	var updateCancel = document.getElementById("build-cancel-button");
	updateCancel.innerHTML = 'Cancel Build Here';

	//console.log("buildCont", buildCont);

  if (buildCont.style.display === "none") {
		//console.log("inside if");

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
    if(coin < musketPrice){
      buildCont.children[0].disabled = true;
    }

    //if coins < cannon price
    //make no click
    if(coin < cannonPrice){
      buildCont.children[1].disabled = true;
    }

    //if coins < net price
    //make no click
    if(coin < netPrice){
      buildCont.children[2].disabled = true;
    }

  	if(coin < musketPrice && coin < cannonPrice && coin < netPrice){
	  	//change cancel button to "cannot build, exit build mode"
		updateCancel.innerHTML = 'Insufficient Coins, Close Build Mode';
	}


  } else {	//hide build menu
		//console.log("inside else");
  	buildCont.style.display = "none";
    buildCont.children[0].style.display = "none";
    buildCont.children[1].style.display = "none";
    buildCont.children[2].style.display = "none";
	  buildCont.children[3].style.display = "none";
  }
  //console.log("Within viewBuildMenu")

};

//viewBuildMenu();

function clearBuildMenu(){

	var buildCont = document.getElementById("buildUIcontainer");
	buildCont.style.display = "none";
	buildCont.children[0].style.display = "none";
	buildCont.children[1].style.display = "none";
	buildCont.children[2].style.display = "none";
	buildCont.children[3].style.display = "none";

};
