//read and set environment variables

require("dotenv").config();
var keys = require("./keys.js");

//include the packages (remember to run "npm install <package>")
var axios = require("axios");
var Spotify = require('node-spotify-api');
var moment = require('moment');

// open a new connection to Spotify using the ID and Key
var spotify = new Spotify(keys.spotify);

//read in command line parameters
var userRequest = process.argv[2];
var mediaRequest = process.argv[3];

console.log("");
console.log("Welcome to LIRI...");
console.log("------------------");
console.log("User request is: " + userRequest);
console.log("Media request is: " + mediaRequest);

//respond differently based on user request
if (userRequest === "concert-this") {
  if (typeof mediaRequest === "undefined") {
    mediaRequest = "Maroon+5";
  }
  // Run the axios.get function to get concert information
  axios.get("https://rest.bandsintown.com/artists/" + mediaRequest + "/events?app_id=codingbootcamp")
    .then(function (response) {
      console.log(mediaRequest + " is performing at: ");
      for (i = 0; i < response.data.length; i++) {
        var venue = response.data[i].venue.name;
        var date = moment(response.data[i].datetime).format("MM/DD/YYYY");
        var location = response.data[i].venue.city + ", " + response.data[i].venue.region + ", " + response.data[i].venue.country;
        console.log("[" + venue + "]: " + location + " on " + date);
      }
    })
    .catch(function (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log("---------------Data---------------");
        console.log(error.response.data);
        console.log("---------------Status---------------");
        console.log(error.response.status);
        console.log("---------------Status---------------");
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an object that comes back with details pertaining to the error that occurred.
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error", error.message);
      }
      console.log(error.config);
    });
} else if (userRequest === "spotify-this-song") {
  if (typeof mediaRequest === "undefined") {
    mediaRequest = "The+Sign";
  }
  //Run the Spotify.search to get song infomation
  spotify.search({ type: 'track', query: mediaRequest, limit: 5 })
    .then(function (response) {
      console.log("Song name is: " + mediaRequest);
      for (i = 0; i < response.tracks.items.length; i++) {
        //      console.log(response.tracks.items[0].album);
        console.log("Artist name is: " + response.tracks.items[i].artists[0].name);
        console.log("Album is: " + response.tracks.items[i].album.name);
        console.log("Preview URL is: " + response.tracks.items[i].preview_url);
      }
    })
    .catch(function (err) {
      console.log("Error occurred" + err);
    });
} else if (userRequest === "movie-this") {
  // if the movie isn't supplied, default to Mr. Nobody
  if (typeof mediaRequest === "undefined") {
    mediaRequest = "Mr. Nobody";
  }
  axios.get("http://www.omdbapi.com/?t=" + mediaRequest + "&y=&plot=short&apikey=trilogy").then(
    function (response) {
      // Then we print out the imdbRating
      console.log("The movie " + mediaRequest + " has a rating of: " + response.data.imdbRating);
    });
} else if (userRequest === "do-what-it-says") {
} else {
}

