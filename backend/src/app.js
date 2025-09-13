import express from "express";
import cors from "cors";
import fileUpload from "express-fileupload";
import authRoutes from "./routes/authRoutes.js";
import examsRoutes from "./routes/examRoutes.js";
import studentSheetRoutes from "./routes/studentSheetRoutes.js";
import resultsRouter from "./routes/resultsRoutes.js";
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload());

app.use("/api/auth", authRoutes);
app.use("/api", examsRoutes); 
app.use("/api/studentSheets", studentSheetRoutes);
app.use("/api/results", resultsRouter);

app.get("/health", (req, res) => res.json({ ok: true, service: "backend" }));
export default app;
