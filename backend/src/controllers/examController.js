// // In-memory "DB" for exams (we'll replace with real DB later)
// let exams = []; 
// // exam shape: { examId, title, answerScheme: null | {...}, sheets: [] }

// export const createExamCtrl = (req, res) => {
//   const { examId, title } = req.body;

//   if (!examId || !title) {
//     return res.status(400).json({ error: "examId and title are required" });
//   }

//   if (exams.find(e => e.examId === examId)) {
//     return res.status(400).json({ error: "Exam ID already exists" });
//   }

//   const exam = { examId, title, answerScheme: null, sheets: [] };
//   exams.push(exam);
//   return res.json({ message: "Exam created", exam });
// };
// // (optional) reset for testing
// export const _resetExams = () => { exams = []; };

// export const listExamsCtrl = (_req, res) => {
//   return res.json({ exams });
// };

// export const getExamCtrl = (req, res) => {
//   const { examId } = req.params;
//   const exam = exams.find(e => e.examId === examId);
//   if (!exam) return res.status(404).json({ error: "Exam not found" });
//   return res.json({ exam });
// };
// export const uploadAnswerSchemeCtrl = (req, res) => {
//   const { examId } = req.params;
//   const { questions } = req.body;

//   // Find exam
//   const exam = exams.find(e => e.examId === examId);
//   if (!exam) return res.status(404).json({ error: "Exam not found" });

//   // Validate
//   if (!questions || !Array.isArray(questions)) {
//     return res.status(400).json({ error: "questions array required" });
//   }

//   // Store scheme
//   exam.answerScheme = { questions };

//   return res.json({ message: "Answer scheme uploaded", exam });
// };

// // Assume exams = [] is already defined at top

// // Upload a student sheet
// export const uploadStudentSheetCtrl = (req, res) => {
//   const { examId } = req.params;
//   const { studentId, name, answers } = req.body;

//   const exam = exams.find(e => e.examId === examId);
//   if (!exam) return res.status(404).json({ error: "Exam not found" });

//   if (!studentId || !answers || !Array.isArray(answers)) {
//     return res.status(400).json({ error: "studentId and answers[] required" });
//   }

//   if (!exam.sheets) exam.sheets = [];

//   // If student already exists, replace
//   const existing = exam.sheets.find(s => s.studentId === studentId);
//   if (existing) {
//     existing.name = name;
//     existing.answers = answers;
//   } else {
//     exam.sheets.push({ studentId, name, answers });
//   }

//   return res.json({ message: "Student sheet uploaded", exam });
// };

// // List all student sheets for an exam
// export const listStudentSheetsCtrl = (req, res) => {
//   const { examId } = req.params;
//   const exam = exams.find(e => e.examId === examId);
//   if (!exam) return res.status(404).json({ error: "Exam not found" });

//   return res.json({ sheets: exam.sheets || [] });
// };

import fs from "fs";
import { exams } from "./db.js";
// In-memory "DB" for exams
// let exams = []; 
// exam shape: { examId, title, answerScheme: null | { fileName }, sheets: [] }

export const createExamCtrl = (req, res) => {
  const { examId, title } = req.body;

  if (!examId || !title) {
    return res.status(400).json({ error: "examId and title are required" });
  }

  if (exams.find(e => e.examId === examId)) {
    return res.status(400).json({ error: "Exam ID already exists" });
  }

  const exam = { examId, title, answerScheme: null, sheets: [] };
  exams.push(exam);
  return res.json({ message: "Exam created", exam });
};

export const _resetExams = () => { exams = []; };

export const listExamsCtrl = (_req, res) => res.json({ exams });

export const getExamCtrl = (req, res) => {
  const { examId } = req.params;
  const exam = exams.find(e => e.examId === examId);
  if (!exam) return res.status(404).json({ error: "Exam not found" });
  return res.json({ exam });
};

// Upload answer scheme (PDF)
export const uploadAnswerSchemeCtrl = (req, res) => {
  const { examId } = req.params;

  const exam = exams.find(e => e.examId === examId);
  if (!exam) return res.status(404).json({ error: "Exam not found" });

  if (!req.files || !req.files.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }

  const file = req.files.file;

  // Optional: Save file temporarily
  const uploadDir = `./uploads/answerSchemes/${examId}`;
  if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });
  file.mv(`${uploadDir}/${file.name}`, (err) => {
    if (err) return res.status(500).json({ error: err.message });

    // Store metadata in exam object
    exam.answerScheme = { fileName: file.name, filePath: `${uploadDir}/${file.name}` };

    return res.json({ message: "Answer scheme uploaded", exam });
  });
};
