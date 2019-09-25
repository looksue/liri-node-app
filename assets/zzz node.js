
//include the axios package (remember to run "npm install axios")
var axios = require("axios");
var spotify = new spotify(keys.spotify);

//read in command line parameters
var userRequest = process.argv[2];
var mediaRequest = process.argv[3];

//respond differently based on user request
switch (userRequest) {
  case 1: "concert-this";
    // Run the axios.get function to get concert information
    axios.get("https://rest.bandsintown.com/artists/" + mediaRequest + "/events?app_id=codingbootcamp").then(
      function (response) {
        console.log(mediaRequest + "is at performing at: ");
        for (i = 0; i < response.data.length; i++) {
          var venue = response.data[i].venue.name;
          var date = moment(response.data[i].datetime).format("MM/DD/YYYY");
          var location = response.data[i].venue.city + ", " + response.data[i].venue.region + ", " + response.data[i].venue.country;
          console.log("[" + venue + "]: " + location + " on " + date);
        }
        break;
      })
  case 2: "spotify-this-song";
    //Run the Spotify.search to get concert infomation
    spotify.search({ type: "track", query: "spotify-this-song" }, function (err, data) {
      if (err) {
        return console.log("Error occurred" + err);
      }
    })
    text = "Here's the song you requested";
    break;
  case 3: "movie-this";
    text = "Here's the movie you requested";
    break;
  case 4: "do-what-it-says";
    text = "You told me to do this:";
    break;
  default:
    text = "Oh no";
    break;
}
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

