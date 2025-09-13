import express from "express";
import { uploadStudentSheetCtrl, listStudentSheetsCtrl } from "../controllers/studentSheetController.js";

const router = express.Router();

// Upload a student sheet
router.post("/:examId/upload", uploadStudentSheetCtrl);

// List all student sheets for an exam
router.get("/:examId/list", listStudentSheetsCtrl);

export default router;
