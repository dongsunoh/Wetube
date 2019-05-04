// const express = require("express");
import express from "express";
const app = express();

const PORT = 4000;

const handleListening = () =>
  console.log(`Listening on: http://localhost:${PORT}`);

const handleHome = (req, res) => res.send("Hello from my ass");

// javascript arrow function.
const handleProfile = (req, res) => res.send("You are on my profile");

// Middlewares
const betweenHome = (req, res, next) => {
  console.log("Between");
  // next function call
  next();
};

// route선언 전 middleware 사용해야 모든 라우트에 적용 됨. (순서 중요함.)
// middleware global set
app.use(betweenHome);

// route define
app.get("/", handleHome);
// app.get("/", betweenHome, handleHome); // 개별적 middlewares use.
app.get("/profile", handleProfile);

app.listen(PORT, handleListening);
