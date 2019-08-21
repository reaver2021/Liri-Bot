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
            .catch(function(err){
                if(err.response){

                }
            });
    } else {
        axios.get("http://www.omdbapi.com/?t=" + parameter + "&y=&plot=short&apikey=trilogy")
        .then(
            function(response){
                console.log("Title: " + response.data.Title);
                console.log("Year Released: " + response.data.Year);
                console.log("iMDB Rating: " + response.data.imdbRating);
                console.log("Rotten Tomatoes Score: " + response.data.Ratings[1].value);
                console.log("Filmed In: " + response.data.Country);
                console.log("Language: " + response.data.Language);
                console.log("Plot: " + response.data.Plot);
                console.log("Actors: " + response.data.Actors);
            })
        .catch(function(err){
            if(err.response){

            }
        });
    }   
    
    if (action === "concert-this") {
        axios.get("https://rest.bandsintown.com/artists/" + parameter + "/events?app_id=codingbootcamp")
        .then(function(response){
            var results = response.data
            if(results.length === 0){
                console.log("Tough luck! " + parameter + " doesn't appear to be touring at the moment! Please look again!")
            } else {
                console.log("Upcoming Shows For: " + parameter);
                for (var result of results) {
                    var eventDate = moment(result.datetime).format("MMM Do YY")
                    console.log("Venue: " + result.venue.name);
                    console.log("Venue Location: " + result.venue.city + ", " + result.venue.region);
                    console.log("Event Date: " + eventDate);
                    console.log("--------------------------------");
                }
            }
        })
        .catch(function(err){
            if(err.response){

            }
        })
    }

    if (action === "spotify-this-song"){
        spotify
        .search({
            type:"track",
            query: parameter,
        },  function(err, data){

            if(err){
                return console.log("Error Occured: " + err)
            } else{

                for(i = 0; i < 4; i++){
                    var artistName = data.tracks.items[i].artists[0].name;
                    var songName = data.tracks.items[i].name;
                    var url = data.tracks.items[i].preview_url;
                    var albumName = data.tracks.items[i].album.name

                    console.log("-------------------------")
                    console.log("Artist: " + artistName);
                    console.log("Song: " + songName);
                    console.log("Preview: " + url);
                    console.log("Album: " + albumName);
                    console.log("--------------------");
                }
            }})
    }
    
    if (action === "do-what-it-says"){
        fs.readFile("./random.txt", "utf8", function(error, data){
            if(err) {
                return console.log(error);
            } else{
                var dataArr = data.split(",");
                if(dataArr[0]==="spotify-this-song"){
                    spotify
                    .search({
                        type: "track",
                        query: dataArr[1]
                    }, function(err, data){
                        if(err) {
                            return console.log("Error Occured: " + err);
                        } else{
                            for(i = 0; i < 2; i++){
                                var artistName = data.tracks.items[i].artists[0].name;
                                var songName = data.tracks.items[i].name;
                                var url = data.tracks.items[i].preview_url;
                                var albumName = data.tracks.items[i].album.name

                                console.log("-------------------------")
                                console.log("Artist: " + artistName);
                                console.log("Song: " + songName);
                                console.log("Preview: " + url);
                                console.log("Album: " + albumName);
                                console.log("--------------------");
                            }
                        }
                    })
                }
            }
        })
    }



