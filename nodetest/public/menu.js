function menu() {
  //disables users ability to move around menu\
  controls.reset();

  console.log("hi in menuuuuuuuuuuuuue function");

  onMenu = true;
  everythingLoaded = false;

  //console.log("tween menu", TWEEN.getAll());
  //console.log("d", dinos);

  menuScreen.camera.position.set( 0, 7, -10 );
  menuScreen.camera.lookAt( 0, 0, 0 );

  //console.log("msc", menuScene.camera);

  menuControls = new THREE.OrbitControls( menuScreen.camera, renderer.domElement );
  //console.log("menucontrols", menuControls);
  menuControls.target = new THREE.Vector3( 5, 0, 2 );
  menuControls.autoRotate = true;
  menuControls.autoRotateSpeed = 0.75;
  menuControls.enabled = false;

  //
  //console.log("camera menu", camera);

  menuScreen.scene.add(menuScreen.light);

 // console.log("menuscene menu()", menuScreen.scene);
  //console.log("mixers", mixers);



  enviroLoader("/static/enviro/palm.glb", new THREE.Vector3(5,0,2), Math.floor(Math.random() * 3), "palmMenu", menuScreen.scene);
  enviroLoader("/static/towers/musket1.glb", new THREE.Vector3(0,0,5), Math.floor(Math.random() * 3), "tower", menuScreen.scene);
  enviroLoader("/static/enviro/palm.glb", new THREE.Vector3(-5,0,2), Math.floor(Math.random() * 3), "palmMenu", menuScreen.scene);
  enviroLoader("/static/towers/canontowermodified2.glb", new THREE.Vector3(-1,0,-4), 3, "palmMenu", menuScreen.scene);


  //towerLoader( '/static/towers/musket1.glb', new THREE.Vector3(0, 0, 4), menuGridT, menuTowers, "menuTower" );  //enviroLoader("/static/enviro/palm.glb", new THREE.Vector3(-2,0,5), Math.floor(Math.random() * 3), "palmMenu", menuScreen.scene);
  var grassmat = new THREE.MeshBasicMaterial({
    color: 0xffd04f
  });

  //radius of 6 is about one square on the board
  var grassgeo = new THREE.CircleBufferGeometry(10, 32);
  var grassbg = new THREE.Mesh(grassgeo, grassmat);

  grassbg.position.y = -0.1;

  grassbg.rotateX(-(Math.PI / 2));

  menuScreen.scene.add(grassbg);

  var seamat = new THREE.MeshBasicMaterial({
    color: 0x42f4c5
  });

  //radius of 6 is about one square on the board
  var seageo = new THREE.CircleBufferGeometry(500, 32);
  var seabg = new THREE.Mesh(seageo, seamat);

  seabg.position.y = -0.3;

  seabg.rotateX(-(Math.PI / 2));

  menuScreen.scene.add(seabg);

  stopAnimation = false;

  function startMenu(){

    //var testinggltf = enviroLoader("/static/enviro/palm.glb", new THREE.Vector3(), Math.floor(Math.random() * 3), "palm");
    //console.log("testinggltf", testinggltf);
    //menuScreen.scene.add(testinggltf);
    //menuScreen.scene.add(menuScreen.palm);


  //create title for game
  var title = document.createElement('H1');
  var titleText = document.createTextNode("Dinosaurs vs Pirates");
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
  startButton.style.top = '125px';
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
  loadButton.style.top = '210px';
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

  //credits
  var credits = document.createElement('p');
  credits.setAttribute('style', 'white-space: pre;');
  credits.textContent = "Authors:\r\nChristopher Frenchi\r\nJonathan Ruby\r\nRuben Torres\r\n\r\nGitHub:\r\nhttps://github.com/cfrenchi/capstone/tree/master";
  credits.style.position = 'absolute';
  credits.id = 'credits';
  credits.style.width = '320px';
  credits.style.height = '130px';
  credits.style.background = 'light blue';
  credits.style.top = '285px';
  credits.style.left = '43%';
  credits.style.textAlign = 'center';
  credits.style.color = 'teal';
  credits.style.border = 'dashed';
  credits.style.background = 'white';
  document.body.appendChild(credits);

  //instructions text
  var instructions = document.createElement('p');
  instructions.setAttribute('style', 'white-space: pre;');
  instructions.textContent = "Objective: \r\nBuild pirate towers to stop the dinos from stealing all your treasure. \r\nEach dino that makes it to the end makes you loose a life. Each dino defeated gives you gold. \r\nInstructions: \r\nLand that is not the dino path or occupied by palm trees is buildable. Double click buildable land to add a tower. \r\nSelect a tower from the tower menu and it will be added. \r\nMusket towers do the least damage with the fastest rate of fire. Cannon towers have meduim damage and attack speed. \r\nCamera Controls: \r\nTo move the camera hold the left mouse button and move the mouse to change the rotation of the camera. \r\nTo pan the camera, hold the right mouse button or hold control with the left mouse button and move the mouse. \r\nUse scroll to zoom in and out. \r\nSaves:\r\n The game is saved after each wave. If you exit and want to continue where you left off, choose load from the start menu. \r\nTo play a new game, choose start.";
  instructions.style.position = 'absolute';
  instructions.id = 'instructions';
  instructions.style.width = '800px';
  instructions.style.height = '275px';
  instructions.style.background = 'light blue';
  instructions.style.top = '440px';
  instructions.style.left = '28%';
  instructions.style.textAlign = 'center';
  instructions.style.color = 'teal';
  instructions.style.border = 'dashed';
  instructions.style.background = 'white';
  document.body.appendChild(instructions);
  }

  startMenu();

  function clearMenuScreen(){
    document.body.removeChild(loadButton);
    document.body.removeChild(startButton);
    document.body.removeChild(title);
    document.body.removeChild(credits);
    document.body.removeChild(instructions);
    clearEverything(menuScene);
  }
}
