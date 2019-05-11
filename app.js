// const express = require("express");

// babel 사용시 아래 구문 사용 가능
import express from "express";
import morgan from "morgan"; // log 사용 (npm morgan install require)
import helmet from "helmet"; // 보안을 위한 것들 (앱의 보안)
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

// 변수 import는 아래처럼 해야 함.
import {userRouter} from "./router";

const app = express();

const handleListening = () =>
  console.log(`Listening on: http://localhost:${PORT}`);

const handleHome = (req, res) => res.send("Hello from my ass");

// javascript arrow function.
const handleProfile = (req, res) => res.send("You are on my profile");

// Middlewares
// const betweenHome = (req, res, next) => {
//   console.log("Between");
//   // next function call
//   next();
// };

// route선언 전 middleware 사용해야 모든 라우트에 적용 됨. (순서 중요함.)
// middleware global set
// app.use(betweenHome);
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet()); // 보안 설정
app.use(morgan("dev")); // morgan log 사용

// route define
app.get("/", handleHome);
// app.get("/", betweenHome, handleHome); // 개별적 middlewares use.
app.get("/profile", handleProfile);

// /user 이하로 접속하는 url은 userRouter 사용..
app.use("/user", userRouter);

// 다른 js 파일에서 import문 app object를 사용 할 수 있도록 함.
export default app;
