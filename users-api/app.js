const express = require("express");
const path = require("path");
const fs = require("fs");
const axios = require("axios");
const app = express();

app.use(express.json());

// const filePath = path.join(__dirname, process.env.STORY_FOLDER, "text.txt");
// app.get("/story", (req, res) => {
//   fs.readFile(filePath, (err, data) => {
//     if (err) {
//       return res.status(500).json({ message: "Failed to open file.", err });
//     }
//     res.status(200).json({ story: data.toString() });
//   });
// });

// app.post("/story", (req, res) => {
//   const newText = req.body.text;
//   if (newText.trim().length == 0) {
//     return res.status(422).json({ message: "Text must not be empty" });
//   }
//   fs.appendFile(filePath, newText + "\n", (err) => {
//     if (err) {
//       return res
//         .status(500)
//         .json({ message: "Failed to store data into file." });
//     }
//   });
//   res.status(201).json({ message: "Text was stored successfully." });
// });

app.post("/login", async (req, res) => {
  // let authUrl = "http://auth/login"
  let authUrl = `http://${process.env.AUTH_ADDRESS}/login`;

  let authSericeHit = await axios.post(authUrl, {
    uname: "test",
    password: "password",
  });
  res.json({ message: "Login Successfull", authSericeHit });
});

app.get("/error", (req, res) => {
  process.exit(1);
});

app.listen(8080, () => {
  console.log("Listening to server!!!");
});
