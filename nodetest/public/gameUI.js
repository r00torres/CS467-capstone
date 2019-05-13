//testing ui elements
function initGameUI(coins, lives, waves){
    var gameUI = document.createElement("div");
    gameUI.setAttribute("id", "game-ui-bar");
    gameUI.setAttribute("class", "game-ui");
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

    document.getElementById("game-ui-bar").append(coinDiv);
    document.getElementById("game-ui-bar").append(coinVal);
    document.getElementById("game-ui-bar").append(livesDiv);
    document.getElementById("game-ui-bar").append(livesVal);
    document.getElementById("game-ui-bar").append(wavesDiv);
    document.getElementById("game-ui-bar").append(wavesVal);
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
