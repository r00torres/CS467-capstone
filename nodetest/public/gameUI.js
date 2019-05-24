//testing ui elements
function initGameUI(coins, lives, waves){
    var gameUI = document.createElement("div");
    gameUI.setAttribute("id", "gameUIbar");
    gameUI.setAttribute("class", "game-ui");
    gameUI.style.display = "none";
    document.body.insertBefore(gameUI, document.body.firstChild);

    var coinDiv = document.createElement("span");
    coinDiv.setAttribute("id", "coins");
    var text = document.createTextNode("COINS ");
    coinDiv.appendChild(text);
    var coinVal = document.createElement("span");
    coinVal.setAttribute("id", "coinVal");
    text = document.createTextNode(coins);
    coinVal.appendChild(text);

    var livesDiv = document.createElement("span");
    livesDiv.setAttribute("id", "lives");
    text = document.createTextNode("LIVES ");
    livesDiv.appendChild(text);
    var livesVal = document.createElement("span");
    livesVal.setAttribute("id", "livesVal");
    text = document.createTextNode(lives);
    livesVal.appendChild(text);

    var wavesDiv = document.createElement("span");
    wavesDiv.setAttribute("id", "wave");
    text = document.createTextNode("WAVE ");
    wavesDiv.appendChild(text);
    var wavesVal = document.createElement("span");
    wavesVal.setAttribute("id", "wavesVal");
    text = document.createTextNode(waves);
    wavesVal.appendChild(text);

    //create a button to pause the audio
    var soundOpt = document.createElement("span");
    text = document.createTextNode("Sound ");
    soundOpt.appendChild(text);
		soundButton = document.createElement('button');
		soundButton.style.position = 'absolute';
		soundButton.id = 'soundButton';
		soundButton.style.width = '100px';
		soundButton.style.height = '47px';
		soundButton.style.background = 'green';
		soundButton.style.top = '0px';
		//soundButton.style.left = '375px';
		soundButton.style.textAlign = 'center';
		soundButton.innerHTML = 'Music';
		soundButton.style.color = 'white';


		soundButton.onclick = function(){
			if(sound.isPlaying){
				sound.pause();
				soundButton.style.background = 'red';
			}
			else{
				soundButton.style.background = 'green';
				sound.play();
			}
		};

    // soundButton.ontouch = function(){
    //   if(sound.isPlaying){
		// 		sound.pause();
		// 		soundButton.style.background = 'red';
		// 	}
		// 	else{
		// 		soundButton.style.background = 'green';
		// 		sound.play();
		// 	}
    // };

    document.getElementById("gameUIbar").append(coinDiv);
    document.getElementById("gameUIbar").append(coinVal);
    document.getElementById("gameUIbar").append(livesDiv);
    document.getElementById("gameUIbar").append(livesVal);
    document.getElementById("gameUIbar").append(wavesDiv);
    document.getElementById("gameUIbar").append(wavesVal);
    document.getElementById("gameUIbar").append(soundOpt);
    document.getElementById("gameUIbar").appendChild(soundButton);

};

    function updateGameUIbar(field, newValue){
        if(field == "coins"){
            var location = document.getElementById("coinVal");
            console.log("Current Coin value is: ", location.innerHTML);
            location.innerHTML = newValue;
            console.log("New Coin value is: ", location.innerHTML);
        }

        else if(field == "lives"){
            var location = document.getElementById("livesVal");
            console.log("Current Lives value is: ", location.innerHTML);
            location.innerHTML = newValue;
            console.log("New Lives value is: ", location.innerHTML);
        }

        else if(field == "waves"){
            var location = document.getElementById("wavesVal");
            console.log("Current Waves value is: ", location.innerHTML);
            location.innerHTML = newValue;
            console.log("New Waves value is: ", location.innerHTML);
        }
    };
