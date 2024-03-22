"use strict";

import http from "http";
import fs from "fs";
import { data } from "./data";

// DONE: create a localhost

const host = "localhost";
const port = 2451;

const serverListener = (req, res) => {
  res.writeHead(200);
  res.end("This code runs better");
};

const htmlMessage = (req, res) => {
  res.setHeader("Content-Type", "../index.html");
  res.writeHead(200);
  res.end(data);
};

//DONE: server logic split into different functions

const server = http.createServer((req, res) => {
  let filePath = "." + req.url;

  //DONE: using the if else statement to support a 404 page.
  if (filePath === "../about.html") {
    filePath = "../about.html";
  } else {
    filePath = "../index.html";
  }

  
  fs.readFile(filePath, (error, content) => {
    //TODO: creating error handling
    res.writeHead(200, { "Content-Type": "../index.html"});
    res.end(content);
  });
});

server.listen(port, host, () => {
  console.log(`This server is running on http://${host}:${port}`);
});

