import express from "express";
import { baseRouter } from "./route.mjs";

const app = express();

app.use('/', baseRouter);

app.listen(3000, () => console.log('Listening from commonjs module'));