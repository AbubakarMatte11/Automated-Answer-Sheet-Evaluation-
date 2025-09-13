// // This file uses the same `exams` array as your exam controller

// // Upload a student sheet
// export const uploadStudentSheetCtrl = (req, res) => {
//   const { examId } = req.params;

//   // Access text fields from FormData
//   const studentId = req.body.studentId;
//   const name = req.body.name;

//   // Access file from FormData
//   const file = req.files?.file; // optional: only if you want to save the PDF

//   if (!studentId || !name) {
//     return res.status(400).json({ error: "studentId and name are required" });
//   }

//   const exam = exams.find(e => e.examId === examId);
//   if (!exam) return res.status(404).json({ error: "Exam not found" });

//   if (!exam.sheets) exam.sheets = [];

//   // Check if student already exists
//   const existing = exam.sheets.find(s => s.studentId === studentId);
//   if (existing) {
//     existing.name = name;
//     if (file) existing.fileName = file.name;
//   } else {
//     exam.sheets.push({ studentId, name, fileName: file?.name || null });
//   }

//   // Optionally save file temporarily
//   if (file) {
//     const uploadDir = `./uploads/${examId}`;
//     if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });
//     file.mv(`${uploadDir}/${file.name}`, (err) => {
//       if (err) return res.status(500).json({ error: err.message });
//       return res.json({ message: "Student sheet uploaded", exam });
//     });
//   } else {
//     return res.json({ message: "Student sheet uploaded", exam });
//   }
// };

// // List all student sheets for an exam
// export const listStudentSheetsCtrl = (req, res) => {
//   const { examId } = req.params;
//   const exam = exams.find(e => e.examId === examId);
//   if (!exam) return res.status(404).json({ error: "Exam not found" });

//   return res.json({ sheets: exam.sheets || [] });
// };

import fs from "fs";
import { exams } from "./db.js"; // same in-memory exams array

// Upload a student sheet (PDF)
export const uploadStudentSheetCtrl = (req, res) => {
  const { examId } = req.params;

  const studentId = req.body.studentId;
  const name = req.body.name;
  const file = req.files?.file; // PDF file

  if (!studentId || !name) {
    return res.status(400).json({ error: "studentId and name are required" });
  }

  const exam = exams.find(e => e.examId === examId);
  if (!exam) return res.status(404).json({ error: "Exam not found" });

  if (!exam.sheets) exam.sheets = [];

  // Check if student already exists
  const existing = exam.sheets.find(s => s.studentId === studentId);
  if (existing) {
    existing.name = name;
    if (file) existing.fileName = file.name;
  } else {
    exam.sheets.push({ studentId, name, fileName: file?.name || null });
  }

  // Save file temporarily
  if (file) {
    const uploadDir = `./uploads/studentSheets/${examId}`;
    if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });
    file.mv(`${uploadDir}/${file.name}`, (err) => {
      if (err) return res.status(500).json({ error: err.message });
      return res.json({ message: "Student sheet uploaded", exam });
    });
  } else {
    return res.json({ message: "Student sheet uploaded", exam });
  }
};

// List all student sheets for an exam
export const listStudentSheetsCtrl = (req, res) => {
  const { examId } = req.params;
  const exam = exams.find(e => e.examId === examId);
  if (!exam) return res.status(404).json({ error: "Exam not found" });
  return res.json({ sheets: exam.sheets || [] });
};
