import { Router } from "express";
import { createExamCtrl, listExamsCtrl, getExamCtrl,uploadAnswerSchemeCtrl} from "../controllers/examController.js";

const router = Router();

// POST /api/exams        -> create exam
router.post("/exams", createExamCtrl);

// GET /api/exams         -> list all exams
router.get("/exams", listExamsCtrl);

// GET /api/exams/:examId -> get single exam
router.get("/exams/:examId", getExamCtrl);

// POST /api/exams/:examId/answer-scheme -> upload scheme for given id
router.post("/exams/:examId/answer-scheme", uploadAnswerSchemeCtrl);


export default router;
