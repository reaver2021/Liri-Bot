require("dotenv").config();

var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);
var axios = require("axios");
var moment = require("moment")
var fs = require("fs");

var action = process.argv[2]
var parameter = process.argv.splice(3).join(" ");

if (action === "movie-this" && parameter) {

    axios.get("http://www.omdbapi.com/?t=Mr.Nobody&y=&plot=short&apikey=trilogy")
        .then(
            function(response) {
                console.log("Do you not watch movies? What is wrong with you? Anyway here's Mr.Nobody")
                console.log("Title: " + response.data.Title);
                console.log("Year Released: " + response.data.Year);
                console.log("iMDB Rating: " + response.data.imdbRating);
                console.log("Rotten Tomatoes Score: " + response.data.Ratings[1].value);
                console.log("Filmed In: " + response.data.Country);
                console.log("Language: " + response.data.Language);
                console.log("Plot: " + response.data.Plot);
                console.log("Actors: " + response.data.Actors);
            })
        .catch(function(error){
            if(error.response){
                
            }
        })
            



