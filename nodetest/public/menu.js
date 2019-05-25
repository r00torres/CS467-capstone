function menu() {
  //disables users ability to move around menu\
  controls.reset();
  controls.enabled = false;

  console.log("tween menu", TWEEN.getAll());
  console.log("d", dinos);

  camera.position.set( 0, 10, -10 );
  camera.lookAt( 0, 0, 0 );
  console.log("camera menu", camera);



  //console.log("menuscene menu()", scene, menuScreen.scene.uuid);
  stopAnimation = false;

  function startMenu(){

    //var testinggltf = enviroLoader("/static/enviro/palm.glb", new THREE.Vector3(), Math.floor(Math.random() * 3), "palm");
    //console.log("testinggltf", testinggltf);
    //menuScreen.scene.add(testinggltf);
    //menuScreen.scene.add(menuScreen.palm);


  //create title for game
  var title = document.createElement('H1');
  var titleText = document.createTextNode("Dinosuars vs Pirates");
  title.appendChild(titleText);
  title.style.position = 'absolute';
  title.id = 'title';
  title.style.width = '300px';
  title.style.height = '100px';
  title.style.background = 'light blue';
  title.style.top = '20px';
  title.style.left = '45%';
  title.style.textAlign = 'center';
  title.style.color = 'white';
  document.body.appendChild(title);

  //start button will start the game when pressed
  var startButton = document.createElement('button');
  startButton.style.position = 'absolute';
  startButton.id = 'startButton';
  startButton.style.width = '100px';
  startButton.style.height = '50px';
  startButton.style.background = 'green';
  startButton.style.top = '200px';
  startButton.style.left = '50%';
  startButton.style.textAlign = 'center';
  startButton.innerHTML = 'Start';
  startButton.style.color = 'white';

  document.body.appendChild(startButton);
  startButton.onclick = function(){
    onMenu = false;
    document.getElementById("startButton").style.display = "none";
    document.getElementById("loadButton").style.display = "none";
    document.getElementById("credits").style.display = "none";
    document.getElementById("title").style.display = "none";
    sound.context.resume();
    clearMenuScreen();
    play();
  };

  //load button will load previous saved game
  var loadButton = document.createElement('button');
  loadButton.style.position = 'absolute';
  loadButton.id = 'loadButton';
  loadButton.style.width = '100px';
  loadButton.style.height = '50px';
  loadButton.style.background = 'green';
  loadButton.style.top = '300px';
  loadButton.style.left = '50%';
  loadButton.style.textAlign = 'center';
  loadButton.innerHTML = 'Load';
  loadButton.style.color = 'white';

  document.body.appendChild(loadButton);
  loadButton.onclick = function(){
    onMenu = false;
    document.getElementById("startButton").style.display = "none";
    document.getElementById("loadButton").style.display = "none";
    document.getElementById("credits").style.display = "none";
    document.getElementById("title").style.display = "none";
    sound.context.resume();
    clearMenuScreen();
    loadGame();
  };

  var credits = document.createElement('p');
  credits.setAttribute('style', 'white-space: pre;');
  credits.textContent = "Authors:\r\nChristopher Frenchi\r\nJonathan Ruby\r\nRuben Torres\r\n\r\nGitHub:\r\nhttps://github.com/cfrenchi/capstone/tree/master";
  credits.style.position = 'absolute';
  credits.id = 'credits';
  credits.style.width = '300px';
  credits.style.height = '100px';
  credits.style.background = 'light blue';
  credits.style.top = '400px';
  credits.style.left = '43%';
  credits.style.textAlign = 'center';
  credits.style.color = 'white';
  document.body.appendChild(credits);
  }

  startMenu();

  function clearMenuScreen(){
    document.body.removeChild(loadButton);
    document.body.removeChild(startButton);
    document.body.removeChild(title);
    document.body.removeChild(credits);
  }

  //adding some trees!
  // var ubName = "palm";
  // var palmRotation = Math.floor(Math.random() * 3);
  // var palmPos = new THREE.Vector3(0,0,0);
  // var palm = enviroLoader("/static/enviro/palm.glb", palmPos, palmRotation, ubName);

}
