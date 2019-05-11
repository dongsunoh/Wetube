import express from "express";

// const userRouter 변수를 export 함.
export const userRouter = express.Router();

userRouter.get("/", (req, res) => res.send('user index'));
userRouter.get("/edit", (req, res) => res.send('user edit'));
userRouter.get("/password", (req, res) => res.send('user password'));
