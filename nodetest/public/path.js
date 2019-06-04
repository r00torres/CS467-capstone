//converts the array numbers into coordinates that can be used on the board
function makePath(path, xSize, zSize)
{
  console.log("makePath map", map1);
  //var a = path1;
  var b = path;//.slice();
  minusX = xSize/2;
  minusZ = zSize/2;

  for(var i=0; i<b.length; i++)
  {
    b[i][0] -= minusX;
    b[i][0] = 4*b[i][0]+2;
    b[i][1] -= minusZ;
    b[i][1] = 4*b[i][1]+2;
  }

}

// function that sends a dino down the path
// target is the path determined by the map
// delay is determined by the wave
// uses onUpdate to change the rotation of the dino in relation to the y axis

function dinoPath(dino, speed, target, targetHealth, delay) {

  console.log("dino in dinoPath", dino);
  console.log(dino.children);
  console.log(dino.children.length);
  //dino.children because we are passing in a group
  for( var dc = 0; dc < dino.children.length; dc++){

    if(currMap == 3){
      dino.children[dc].rotation.y = 300;
      var move = new TWEEN.Tween(dino.children[0].position)
        .to(target, speed).delay(delay)
        .onUpdate(function(){
          dino.children[0].userData.tweenId = move.getId();
          //console.log("dino tweenid", move.getId());
          //to the left, good
          if(dino.children[0].position.z == -6 && dino.children[0].position.x > -18 && dino.children[0].position.x < -6){
            dino.children[0].rotation.y = 0;
          }

          //down, good
          else if(dino.children[0].position.x == -6 && dino.children[0].position.z < -6 && dino.children[0].position.z > -10){
            dino.children[0].rotation.y = 89.5;
          }

          //to the left, good
          else if(dino.children[0].position.z == -10 && dino.children[0].position.x > -5 && dino.children[0].position.x < 2){
            dino.children[0].rotation.y = 0;
          }

          //up, good
          else if(dino.children[0].position.x == 2 && dino.children[0].position.z > -10 && dino.children[0].position.z < -6){
            dino.children[0].rotation.y = 300;
          }

          //left, good
          else if(dino.children[0].position.z == -6 && dino.children[0].position.x > 2 && dino.children[0].position.x < 6){
            dino.children[0].rotation.y = 0;
          }

          //up, good
          else if(dino.children[0].position.x == 6 && dino.children[0].position.z > -5 && dino.children[0].position.z < 10){
            dino.children[0].rotation.y = 300;
          }

          //left, good
          else if(dino.children[0].position.z == 10 && dino.children[0].position.x > 2 && dino.children[0].position.x < 10){
            dino.children[0].rotation.y = 0;
          }

          //down, good
          else if(dino.children[0].position.x == 10 && dino.children[0].position.z < 10 && dino.children[0].position.z > 2){
            dino.children[0].rotation.y = 89.5;
          }

          //left, good
          else if(dino.children[0].position.z == 2 && dino.children[0].position.x > 10 && dino.children[0].position.x < 18){
            dino.children[0].rotation.y = 0;
          }

          //up, disappears
          else if(dino.children[0].position.x == 18 && dino.children[0].position.z > 2 && dino.children[0].position.z < 18){
            dino.children[0].rotation.y = 300;
          }

        })
        .start();
        //removes the dino from the scene once it has reached the end

          //health bar

      var healthmove = new TWEEN.Tween(dino.children[1].position)
        .to(targetHealth, speed).delay(delay)
        .onUpdate(function(){
          if(dino.children[1].position.z == -6 && dino.children[1].position.x > -18 && dino.children[1].position.x < -6){
            dino.children[1].rotation.y = 0;
          }

          //down, good
          else if(dino.children[1].position.x == -6 && dino.children[1].position.z < -6 && dino.children[1].position.z > -10){
            dino.children[1].rotation.y = 89.5;
          }

          //to the left, good
          else if(dino.children[1].position.z == -10 && dino.children[1].position.x > -5 && dino.children[1].position.x < 2){
            dino.children[1].rotation.y = 0;
          }

          //up, good
          else if(dino.children[1].position.x == 2 && dino.children[1].position.z > -10 && dino.children[1].position.z < -6){
            dino.children[1].rotation.y = 300;
          }

          //left, good
          else if(dino.children[1].position.z == -6 && dino.children[1].position.x > 2 && dino.children[1].position.x < 6){
            dino.children[1].rotation.y = 0;
          }

          //up, good
          else if(dino.children[1].position.x == 6 && dino.children[1].position.z > -5 && dino.children[1].position.z < 10){
            dino.children[1].rotation.y = 300;
          }

          //left, good
          else if(dino.children[1].position.z == 10 && dino.children[1].position.x > 2 && dino.children[1].position.x < 10){
            dino.children[1].rotation.y = 0;
          }

          //down, good
          else if(dino.children[1].position.x == 10 && dino.children[1].position.z < 10 && dino.children[1].position.z > 2){
            dino.children[1].rotation.y = 89.5;
          }

          //left, good
          else if(dino.children[1].position.z == 2 && dino.children[1].position.x > 10 && dino.children[1].position.x < 18){
            dino.children[1].rotation.y = 0;
          }

          //up, disappears
          else if(dino.children[1].position.x == 18 && dino.children[1].position.z > 2 && dino.children[1].position.z < 18){
            dino.children[1].rotation.y = 300;
          }

          //reduce healthbar
          if(dino.children[0].userData.health < oviraptor.health * .66 && dino.children[0].userData.health > oviraptor.health * .33)
          {
            dino.children[1].scale.z = .66;
          }
          else if(dino.children[0].userData.health < oviraptor.health * .33)
          {
            dino.children[1].scale.z = .33;
          }
        })
        .start();
      }

      else if(currMap == 2){
        dino.children[dc].rotation.y = 0;
        var move = new TWEEN.Tween(dino.children[0].position)
        .to(target, speed).delay(delay)
        .onUpdate(function(){
          dino.children[0].userData.tweenId = move.getId();
          //console.log("dino tweenid", move.getId());
          //to the left, good
          if(dino.children[0].position.x == -14 && dino.children[0].position.z > -18 && dino.children[0].position.z < -14){
            dino.children[0].rotation.y = 300;
          }

          else if(dino.children[0].position.z == -14 && dino.children[0].position.x > -14 && dino.children[0].position.x < -6){
            dino.children[0].rotation.y = 0;
          }

          else if(dino.children[0].position.x == -6 && dino.children[0].position.z < -14 && dino.children[0].position.z > -18){
            dino.children[0].rotation.y = 89.5;
          }

          else if(dino.children[0].position.z == -18 && dino.children[0].position.x > -6 && dino.children[0].position.x < 18){
            dino.children[0].rotation.y = 0;
          }

          else if(dino.children[0].position.x == 18 && dino.children[0].position.z > -18 && dino.children[0].position.z < -6){
            dino.children[0].rotation.y = 300;
          }

          else if(dino.children[0].position.z == -6 && dino.children[0].position.x < 18 && dino.children[0].position.x > -2){
            dino.children[0].rotation.y = 185.5;
          }

          else if(dino.children[0].position.x == -2 && dino.children[0].position.z > -6 && dino.children[0].position.z < 2){
            dino.children[0].rotation.y = 300;
          }

          else if(dino.children[0].position.z == 2 && dino.children[0].position.x > -6 && dino.children[0].position.x < -2){
            dino.children[0].rotation.y = 185.5;
          }

          else if(dino.children[0].position.x == -6 && dino.children[0].position.z > 2 && dino.children[0].position.z < 10){
            dino.children[0].rotation.y = 300;
          }

          else if(dino.children[0].position.z == 10 && dino.children[0].position.x > -6 && dino.children[0].position.x < 10){
            dino.children[0].rotation.y = 0;
          }
          else if(dino.children[0].position.x == 10 && dino.children[0].position.z > 10 && dino.children[0].position.z < 18){
            dino.children[0].rotation.y = 300;
          }
          else if(dino.children[0].position.z == 18 && dino.children[0].position.x > 10 && dino.children[0].position.x < 18){
            dino.children[0].rotation.y = 0;
          }
        })
        .start();

        var healthmove = new TWEEN.Tween(dino.children[1].position)
        .to(targetHealth, speed).delay(delay)
        .onUpdate(function(){
          if(dino.children[1].position.x == -14 && dino.children[1].position.z > -18 && dino.children[1].position.z < -14){
            dino.children[1].rotation.y = 300;
          }

          else if(dino.children[1].position.z == -14 && dino.children[1].position.x > -14 && dino.children[1].position.x < -6){
            dino.children[1].rotation.y = 0;
          }

          else if(dino.children[1].position.x == -6 && dino.children[1].position.z < -14 && dino.children[1].position.z > -18){
            dino.children[1].rotation.y = 89.5;
          }

          else if(dino.children[1].position.z == -18 && dino.children[1].position.x > -6 && dino.children[1].position.x < 18){
            dino.children[1].rotation.y = 0;
          }

          else if(dino.children[1].position.x == 18 && dino.children[1].position.z > -18 && dino.children[1].position.z < -6){
            dino.children[1].rotation.y = 300;
          }

          else if(dino.children[1].position.z == -6 && dino.children[1].position.x < 18 && dino.children[1].position.x > -2){
            dino.children[1].rotation.y = 185.5;
          }

          else if(dino.children[1].position.x == -2 && dino.children[1].position.z > -6 && dino.children[1].position.z < 2){
            dino.children[1].rotation.y = 300;
          }

          else if(dino.children[1].position.z == 2 && dino.children[1].position.x > -6 && dino.children[1].position.x < -2){
            dino.children[1].rotation.y = 185.5;
          }

          else if(dino.children[1].position.x == -6 && dino.children[1].position.z > 2 && dino.children[1].position.z < 10){
            dino.children[1].rotation.y = 300;
          }

          else if(dino.children[1].position.z == 10 && dino.children[1].position.x > -6 && dino.children[1].position.x < 10){
            dino.children[1].rotation.y = 0;
          }
          else if(dino.children[1].position.x == 10 && dino.children[1].position.z > 10 && dino.children[1].position.z < 18){
            dino.children[1].rotation.y = 300;
          }
          else if(dino.children[1].position.z == 18 && dino.children[1].position.x > 10 && dino.children[1].position.x < 18){
            dino.children[1].rotation.y = 0;
          }
          //reduce healthbar
          if(dino.children[0].userData.health < oviraptor.health * .66 && dino.children[0].userData.health > oviraptor.health * .33)
          {
            dino.children[1].scale.z = .66;
          }
          else if(dino.children[0].userData.health < oviraptor.health * .33)
          {
            dino.children[1].scale.z = .33;
          }
        })
        .start();
      }

      else if(currMap == 1){
        dino.children[dc].rotation.y = 300;
        var move = new TWEEN.Tween(dino.children[0].position)
        .to(target, speed+5000).delay(delay)
        .onUpdate(function(){
          dino.children[0].userData.tweenId = move.getId();
          if(dino.children[0].position.z == -14 && dino.children[0].position.x > -18 && dino.children[0].position.x < 18){
            dino.children[0].rotation.y = 0;
          }

          else if(dino.children[0].position.x == 18 && dino.children[0].position.z > -14 && dino.children[0].position.z < -6){
            dino.children[0].rotation.y = 300;
          }

          else if(dino.children[0].position.z == -6 && dino.children[0].position.x < 18 && dino.children[0].position.x > -18){
            dino.children[0].rotation.y = 185.5;
          }

          else if(dino.children[0].position.x == -18 && dino.children[0].position.z > -6 && dino.children[0].position.z < 2){
            dino.children[0].rotation.y = 300;
          }

          else if(dino.children[0].position.z == 2 && dino.children[0].position.x > -18 && dino.children[0].position.x < 18){
            dino.children[0].rotation.y = 0;
          }

          else if(dino.children[0].position.x == 18 && dino.children[0].position.z > 2 && dino.children[0].position.z < 10){
            dino.children[0].rotation.y = 300;
          }

          else if(dino.children[0].position.z == 10 && dino.children[0].position.x < 18 && dino.children[0].position.x > -18){
            dino.children[0].rotation.y = 185.5;
          }

          else if(dino.children[0].position.x == -18 && dino.children[0].position.z > 10 && dino.children[0].position.z < 18){
            dino.children[0].rotation.y = 300;
          }

          else if(dino.children[0].position.z == 18 && dino.children[0].position.x > -18 && dino.children[0].position.x < 18){
            dino.children[0].rotation.y = 0;
          }
        })
        .start();

        var healthmove = new TWEEN.Tween(dino.children[1].position)
        .to(targetHealth, speed+5000).delay(delay)
        .onUpdate(function(){
          if(dino.children[1].position.z == -14 && dino.children[1].position.x > -18 && dino.children[1].position.x < 18){
            dino.children[1].rotation.y = 0;
          }

          else if(dino.children[1].position.x == 18 && dino.children[1].position.z > -14 && dino.children[1].position.z < -6){
            dino.children[1].rotation.y = 300;
          }

          else if(dino.children[1].position.z == -6 && dino.children[1].position.x < 18 && dino.children[1].position.x > -18){
            dino.children[1].rotation.y = 185.5;
          }

          else if(dino.children[1].position.x == -18 && dino.children[1].position.z > -6 && dino.children[1].position.z < 2){
            dino.children[1].rotation.y = 300;
          }

          else if(dino.children[1].position.z == 2 && dino.children[1].position.x > -18 && dino.children[1].position.x < 18){
            dino.children[1].rotation.y = 0;
          }

          else if(dino.children[1].position.x == 18 && dino.children[1].position.z > 2 && dino.children[1].position.z < 10){
            dino.children[1].rotation.y = 300;
          }

          else if(dino.children[1].position.z == 10 && dino.children[1].position.x < 18 && dino.children[1].position.x > -18){
            dino.children[1].rotation.y = 185.5;
          }

          else if(dino.children[1].position.x == -18 && dino.children[1].position.z > 10 && dino.children[1].position.z < 18){
            dino.children[1].rotation.y = 300;
          }

          else if(dino.children[1].position.z == 18 && dino.children[1].position.x > -18 && dino.children[1].position.x < 18){
            dino.children[1].rotation.y = 0;
          }
          //reduce healthbar
          if(dino.children[0].userData.health < oviraptor.health * .66 && dino.children[0].userData.health > oviraptor.health * .33)
          {
            dino.children[1].scale.z = .66;
          }
          else if(dino.children[0].userData.health < oviraptor.health * .33)
          {
            dino.children[1].scale.z = .33;
          }
        })
        .start();
      }

    //removes the dino from the scene once it has reached the end
    healthmove.onComplete(function(){
        console.log("end of path", dino);
        console.log("dinos...", dinos);
        var endDinolength = dinos.length;
        curLives = getLives();
        //two children being removed.
        var dinoEnder = dino.parent;
        for(var dinosleft = 0; dinosleft < dinos.length; dinosleft++){
          console.log("for", dinos[dinosleft]);
          console.log("DINO UUID", dino.children[0].uuid, dinos[dinosleft][0].uuid);
          if(dino.children[0].uuid == dinos[dinosleft][0].uuid){
            console.log("HERERERERER", dino.uuid, dinos[dinosleft][0].uuid);
            curLives -= 1.0;
            setLives(curLives);
            updateGameUIbar( "lives", getLives() );
            scene.remove(dino);
            dinos.splice(dinosleft, 1);
          }

        };
        var tc = TWEEN.getAll();
        // if(tc.length > 0){
        //    TWEEN.removeAll();
        // }


        if( getLives() == 0 ){
          stopAnimation = true;
          //TWEEN.removeAll();
          //healthmove.removeAll();

          loseCondition();
        }
    });
  //
  }

}
