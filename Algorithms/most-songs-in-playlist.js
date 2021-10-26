// Write code to create a function that accepts an array of numbers
// Each number represents the duration of a song in minutes
// Return the maximum number of songs from the list that can fit in a 60 minute playlist

const testArray = [5, 6, 12, 10, 14, 4, 11, 21, 15, 17, 7]


var mostSongsInPlaylist = function(arr) {
   const sortedArray = arr.sort(function(a, b){return a - b})
   console.log(sortedArray)
   let time = 0
   for (let i = 0; i < arr.length; i++) {
    time += sortedArray[i]
    if (time <= 60) {
        console.log(i)
    }   
       
   }

  };
  mostSongsInPlaylist(testArray)