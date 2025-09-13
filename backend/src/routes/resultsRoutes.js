import express from "express";
import { getResultsCtrl } from "../controllers/resultsController.js";

const router = express.Router();

// Get results for an exam
router.get("/:examId", getResultsCtrl);

export default router;
