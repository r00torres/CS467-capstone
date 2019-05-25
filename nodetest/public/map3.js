var map3 = {};

map3.name = 'coast';

map3.lives = 10;
map3.coins = 100;
map3.waves = 10;

//size of the board
//this board is 10x10
map3.level3x = 10;
map3.level3z = 10;

//layout of the map, s is the start, e is the end, * is enemy path,
//. is buildable land
var maplevel3 = [['s', '*', '-', '*', '*', '*', '-', '*', '*', '*'],
              ['-', '*', '-', '*', '.', '*', '-', '*', '.', '*'],
              ['-', '*', '-', '*', '.', '*', '-', '*', '.', '*'],
              ['-', '*', '-', '*', '-', '*', '-', '*', '.', '*'],
              ['-', '*', '-', '*', '-', '*', '-', '*', '.', '*'],
              ['-', '*', '.', '*', '-', '*', '.', '*', '-', '*'],
              ['-', '*', '.', '*', '-', '*', '.', '*', '-', '*'],
              ['-', '*', '.', '*', '.', '*', '.', '*', '-', '*'],
              ['-', '*', '.', '*', '.', '*', '.', '*', '-', '*'],
              ['-', '*', '*', '*', '.', '*', '*', '*', '-', 'e']];

//path that the enemy will take
map3.path3 = [[0,0], [0,1], [1,1], [2,1], [3,1], [4,1], [5,1], [6,1], [7,1], [8,1], [9,1], [9,2],
             [9,3], [8,3], [7,3], [6,3], [5,3], [4,3], [3,3], [2,3], [1,3], [0,3], [0,4],
             [0,5], [1,5], [2,5], [3,5], [4,5], [5,5], [6,5], [7,5], [8,5], [9,5], [9,6],
             [9,7], [8,7], [7,7], [6,7], [5,7], [4,7], [3,7], [2,7], [1,7], [0,7], [0,8],
             [0,9], [1,9], [2,9], [3,9], [4,9], [5,9], [6,9], [7,9], [8,9], [9,9]];

map3.dinoPath =  map3.path3.map(arr => arr.slice());
