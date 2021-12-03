// Write code to create a function that accepts a two-dimensional array
// Each 2D element contains either the string "X" or "O" (both capitalized)
// Return the number of times "X" appears in the 2D array
var gfg = new Array(2);

var arraySearch2D = function (arr) {
  for (let i = 0; i < gfg.length; i++) {
    gfg[i] = new Array(2);
  }

  var h = 0;

  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
      gfg[i][j] = h++;
    }
  }

  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
      console.log(gfg[i][j] + " ");
    }
  }
};

arraySearch2D();
