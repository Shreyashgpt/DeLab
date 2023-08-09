const express = require("express");

const Router = express.Router();

Router.get("/", (req, res) => {
  res.render("index");
});

Router.get("/news", (req, res) => {
  res.render("news");
});

Router.get("/gallery", (req, res) => {
  res.render("gallery");
});

Router.get("/portfolio", (req, res) => {
  res.render("portfolio");
});

//To Do List
const items = ["Buy food", "Cook Food", "Eat Food"];
const works = [];

Router.get("/list", (req, res) => {
  const date = new Date();
  const options = {
    day: "numeric",
    weekday: "long",
    month: "long",
  };
  const day = date.toLocaleString("en-US", options);
  res.render("list", { myday: day, myItems: items });
});

Router.post("/list", (req, res) => {
  const item = req.body.newItem;
  items.push(item);
  res.redirect("/list");
});

Router.get("/simon", (req, res) => {
  res.render("simon");
});

module.exports = Router;
