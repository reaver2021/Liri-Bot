require("dotenv").config();

var keys = require("./keys.js");
var fs = require('fs');
var moment = require('moment');
var inquirer = require('inquirer');
var axios = require('axios');

var spotify = new spotify(keys.spotify)

var action = process.argv[2];
var choice = process.argv[3];

function switchCase(){
    switch(action) {
        
        case 'concert-this':
        bandsInTown(chocie)

        case 'spotify-this-song':
            sp
    }
}