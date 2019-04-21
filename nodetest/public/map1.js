let map = {};

map.name = 'coast';

//size of the board
//this board is 10x10
map.level1x = 10;
map.level1z = 10;

//layout of the map, s is the start, e is the end, * is enemy path, 
//. is buildable land
map.level1 = [['s', '*', '*', '*', '.', '.', '.', '.', '.', '.'], 
              ['.', '.', '.', '*', '.', '.', '.', '.', '.', '.'], 
              ['.', '.', '.', '*', '.', '.', '.', '.', '.', '.'], 
              ['.', '.', '*', '*', '.', '.', '.', '.', '.', '.'],
              ['.', '.', '*', '.', '.', '.', '.', '.', '.', '.'], 
              ['.', '.', '*', '*', '*', '*', '*', '*', '.', '.'], 
              ['.', '.', '.', '.', '.', '.', '.', '*', '.', '.'], 
              ['.', '.', '.', '.', '.', '*', '*', '*', '.', '.'],
              ['.', '.', '.', '.', '.', '*', '.', '.', '.', '.'], 
              ['.', '.', '.', '.', '.', '*', '*', '*', '*', 'e']];

//path that the enemy will take
map.path1 = [[0,0], [0,1], [0,2], [0,3], [1,3], [2,3], [3,3], [3,2], 
  [4,2], [5,2], [5,3], [6,3], [6,4], [6,5], [6,6], [6,7], [7,7], 
  [7,6], [7,5], [8,5], [9,5], [9,6], [9,7], [9,8], [9,9]];

//converst the array numbers into coordinates that can be used on the board
function makePath(path, xSize, zSize)
{
  minusX = xSize/2;
  minusZ = zSize/2;

  for(var i=0; i<path.length; i++)
  {
    path[i][0] -= minusX;
    path[i][0] = 4*path[i][0]+2;
    path[i][1] -= minusZ;
    path[i][1] = 4*path[i][1]+2;
  }
  console.log(path);
}

