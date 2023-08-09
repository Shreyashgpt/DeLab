const express = require("express");
const mongoose = require("mongoose");
const app = express();

const Router = require("./routes/pageRoutes");

const port = process.env.port || 3000;

// Set up EJS as the view engine
app.set("view engine", "ejs");

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Connect to MongoDB
// mongoose.connect("mongodb://localhost:27017/fullstack-website", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// // Define Schema and Model
// const itemSchema = new mongoose.Schema({
//   title: String,
//   content: String,
// });

// const Item = mongoose.model("Item", itemSchema);

// Routes
app.use(Router);

// Add REST API Routes
// app.get("/api/items", (req, res) => {
//   Item.find({}, (err, items) => {
//     if (err) {
//       console.log(err);
//       res.status(500).send("An error occurred");
//     } else {
//       res.json(items);
//     }
//   });
// });

// app.post("/api/items", (req, res) => {
//   const newItem = new Item({
//     title: req.body.title,
//     content: req.body.content,
//   });

//   newItem.save((err) => {
//     if (err) {
//       console.log(err);
//       res.status(500).send("An error occurred");
//     } else {
//       res.json({ message: "Item added successfully" });
//     }
//   });
// });

// Start the server
app.listen(port, () => {
  console.log("Server is running on port 3000");
});
