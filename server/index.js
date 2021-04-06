const express = require("express");
const cors = require("cors");
const ChessWebAPI = require('chess-web-api');

const chessAPI = new ChessWebAPI();

chessAPI.getPlayerStats('jw7890').then(function(response) {
  console.log('Player Profile', response.body);
}, function(err) {
  console.error(err);
})