//testing ui elements
function initGameUI(){    
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
    text = document.createTextNode("0");
    coinVal.appendChild(text);
    coinDiv.appendChild(coinVal);
        
    var livesDiv = document.createElement("span");
    livesDiv.setAttribute("id", "lives");
    text = document.createTextNode("LIVES ");
    livesDiv.appendChild(text);
    var livesVal = document.createElement("span");
    livesVal.setAttribute("id", "livesVal");
    text = document.createTextNode("0");
    livesVal.appendChild(text);
    livesDiv.appendChild(livesVal);
        
    var wavesDiv = document.createElement("span");
    wavesDiv.setAttribute("id", "wave");
    text = document.createTextNode("WAVE ");
    wavesDiv.appendChild(text);
    var wavesVal = document.createElement("span");
    wavesVal.setAttribute("id", "wavesVal");
    text = document.createTextNode("0");
    wavesVal.appendChild(text);
    wavesDiv.appendChild(wavesVal);
        
    document.getElementById("game-ui-bar").append(coinDiv);
    document.getElementById("game-ui-bar").append(livesDiv);
    document.getElementById("game-ui-bar").append(wavesDiv);
};

    function decrementGameUIbar(field, byValue){
        if(field == "coins"){
            var location = document.getElementById("coinVal");
            var current = parseInt(location.child[0]);
            var new = current - byValue;
            location.replaceChild(new, location.child[0]);
        }
    };