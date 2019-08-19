require("dotenv").config();

var keys = require("./keys.js");
var fs = require('fs');
var moment = require('moment');
var inquirer = require('inquirer');

var axios = require('axios');
var bandsinTown = keys.bandsInTown;
var bandsINtown = bandsinTown.id;

var Spotify = require('spotify')
var spotifyKEYS = keys.spotify;
var spotifyID = spotifyKEYS.id;
var secretSpotify = spotifyKEYS.secret;
var spotify = new spotify({
    id:spotifyID,
    secret: secretSpotify
});

var OMDB = require("omdb-client");
var omdbKEYS = keys.omdb;
omdbAPIkey = omdbKEYS.id;


var input = process.argv[2]
var content = process.argv[3]

var chalk = require('chalk');
var LiriTitle = chalk.bgYellow
var liriAnswer = LiriTitle("\n-----HERE IS WHAT THE ROBIT FOUND!-----\n")
var liriProblem = LiriTitle("\n-----DANGER! DANGER WILL ROBINSON-----\n")

//Here be the non-global code//



