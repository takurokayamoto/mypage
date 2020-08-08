// import React from "react";
// import ReactDOMServer from "react-dom/server";
// import App from './src/App';

// const express = require("express");
// const bodyParser = require("body-parser");
// const ejs = require("ejs");
// const _ = require("lodash");
// const mongoose = require("mongoose");
// const fs = require("fs");
// const path = require("path");
// const app = express();
// const PORT = process.env.PORT || 3006;

// app.set("view engine", "ejs");
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static("public"));

// app.use();

// app.get('/', (req, res) => {
//     const app = ReactDOMServer.renderToString(<App />);
  
//     const indexFile = path.resolve('./build/index.html');
//     fs.readFile(indexFile, 'utf8', (err, data) => {
//       if (err) {
//         console.error('Something went wrong:', err);
//         return res.status(500).send('Oops, better luck next time!');
//       }
  
//       return res.send(
//         data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
//       );
//     });
//   });
  
//   app.use(express.static('./build'));
  
//   app.listen(PORT, () => {
//     console.log(`Server is listening on port ${PORT}`);
//   });