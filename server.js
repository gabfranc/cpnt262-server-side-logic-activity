"use strict";
import http from "http";
import fs from "fs";
import { data } from "./data.js";

const host = "localhost";
const port = 4000;

// DONE: create a server listener

const serverListener = (req, res) => {
  res.writeHead(200);
  res.end("This server code is much better!");
};

// DONE: setting up an html listener for the server

const htmlListener = (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.writeHead(200);
  res.end(data);
};

//TODO: split the logic into different functions for the server

const server = http.createServer((req, res) => {
  let filePath = "." + req.url;

  // create support for a 404 page using the else statement.

  if (filePath === "./about.html"){
    filePath ="./about.html";
  } else {
    filePath = "./index.html";
  }

  fs.readFile(filePath, (error, content) => {
    //TODO: handle errors
    res.writeHead(200, {"Content-Type": "text/html"});
    res.end(content);
  }); 
});

server.listen(port, host, () => {
  console.log(`server is running on http://${host}:${port}`);
})