import express from "express";
import "dotenv/config";


const app = express();

app.use(express.json());

//app.use("/api/budgets", require("./routes/budgetRouter"));
//app.use("/api/budgets", budgetRouter);

export default app;