import express from "express";
import "dotenv/config";
import {connecDB} from "./config/db";
import budgetRouter from "./routers/budgetRouter";


const app = express();
connecDB()

app.use(express.json());
//app.use("/api/budgets", require("./routes/budgetRouter"));
app.use("/api/budgets", budgetRouter);

export default app;