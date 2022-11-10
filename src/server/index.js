import express from "express";
import db from "./config/db";
import cors from "cors";

const app = express();
const PORT = 3306;
app.use(cors());
app.use(express.json());
