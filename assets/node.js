//include the axios package (remember to run "npm install axios")
var axios = require("axios");

//read in command line parameters
var userRequest = process.argv[2];

//respond differently based on user request
switch (userRequest) {
  case "concert-this":
    text = "Here's the Artist/Band Name you requested:";
    break;
  case "spotify-this-song":
    text = "Here's the song you requested";
    break;
  case "movie-this":
    text = "Here's the movie you requested";
    break;
  case "do-what-it-says":
    text = "You told me to do this:";
    break;
  default:
    text = "Oh no";
}






// Run the axios.get function...
axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp".then(
  function (response) {





    // Run the axios.get function...
    // The axios.get function takes in a URL and returns a promise (just like $.ajax)
    axios.get("https://www.spotify.com/us/").then(
      function (response) {
        // If the axios was successful...
        // Then log the body from the site!
        console.log(response.data);
      });
    // Run the axios.get function...
    // The axios.get function takes in a URL and returns a promise (just like $.ajax)
    axios.get("http://www.omdbapi.com/").then(
      function (response) {
        // If the axios was successful...
        // Then log the body from the site!
        console.log(response.data);
      });

