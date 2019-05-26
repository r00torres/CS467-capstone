var map1 = {};

map1.name = 'coast';

map1.lives = 10;
map1.coins = 100;
map1.waves = 11;

//size of the board
//this board is 10x10
map1.level1x = 10;
map1.level1z = 10;

//layout of the map, s is the start, e is the end, * is enemy path,
//. is buildable land
var maplevel1 = [['s', '*', '*', '*', '.', '-', '-', '-', '-', '-'],
                 ['-', '.', '.', '*', '.', '-', '-', '-', '-', '-'],
                 ['-', '.', '.', '*', '.', '-', '-', '-', '-', '-'],
                 ['-', '.', '*', '*', '.', '-', '-', '-', '-', '-'],
                 ['-', '.', '*', '.', '.', '.', '.', '.', '.', '-'],
                 ['-', '.', '*', '*', '*', '*', '*', '*', '.', '-'],
                 ['-', '.', '.', '.', '.', '.', '.', '*', '.', '-'],
                 ['-', '-', '-', '-', '.', '*', '*', '*', '.', '-'],
                 ['-', '-', '-', '-', '.', '*', '.', '.', '.', '-'],
                 ['-', '-', '-', '-', '.', '*', '*', '*', '*', 'e']];

//path that the enemy will take
map1.path1 = [[0,0], [0,1], [0,2], [0,3], [1,3], [2,3], [3,3], [3,2],
  [4,2], [5,2], [5,3], [5,4], [5,5], [5,6], [5,7], [6,7], [7,7],
  [7,6], [7,5], [8,5], [9,5], [9,6], [9,7], [9,8], [9,9]];

//var testPath = map1.path1.map(arr => arr.slice());
//https://stackoverflow.com/questions/13756482/create-copy-of-multi-dimensional-array-not-reference-javascript

map1.dinoPath =  map1.path1.map(arr => arr.slice());
