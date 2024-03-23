"use strict";
import http from 'http';
import fs from "fs";
import { data } from "./data.js";

const host = "localhost";
const port = 4000;

//DONE: adding a serverListener
const serverListener = (req, res) => {
  res.writeHead(200);
  res.end("This server code runs better");
}

//DONE: adding an html listener for the server code.

const htmlListener = (req, res) => {
  res.setHeader("Content-Type", "text.html");
  res.writeHead(200);
  res.end(data);
};

//DONE: adding the createServer block and creating support for the 404 page

const server = http.createServer((req, res) => {
  let filePath = "." + req.url;
  if(req.url === "/") {
    filePath = "./index.html";
  } else if (req.url === "/about") {
    filePath = "./about.html";
  } else {
    filePath = "./404error/404error.html";
  }


  fs.readFile(filePath, (error, content) => {
    //DONE: set up Handle error
    res.writeHead(200, { "Content-Type": "text/html"});
    res.end(content);
  });
});

server.listen(port, host, () => {
  console.log(`server is running here http://${host}:${port}`);
});