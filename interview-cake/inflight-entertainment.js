/* 
Write a function that takes an integer flightLength (in minutes) and an array of integers movieLengths (in minutes) and returns a boolean indicating whether there are two numbers in movieLengths whose sum equals flightLength.

Make sure the same movie is not being shown twice (Assume the lengths in movieLengths are for different movies, so two occurences of 60 would refer to different movies)
*/
function FindMovie(flightLength,movieLengths) {
  let movieHash = {};
  for (let i = 0; i < movieLengths.length; i++) {
    // check the complementary length has not been seen before
    if (movieHash[flightLength - movieLengths[i]]) {
      return true
    } else {
    // otherwise add the movie length as a key
      movieHash[movieLengths[i]] = true
    }
  }
  return false
}

FindMovie(145,[60,90,120,45])