import { exams } from "./db.js";

// For now we just return mock marks (later you’ll plug OCR evaluation)
export const getResultsCtrl = (req, res) => {
  const { examId } = req.params;
  const exam = exams.find(e => e.examId === examId);
  if (!exam) return res.status(404).json({ error: "Exam not found" });

  const results = (exam.sheets || []).map(s => ({
    studentId: s.studentId,
    name: s.name,
    marks: Math.floor(Math.random() * 100) // 👈 mock score, replace with real evaluation later
  }));

  res.json({ examId, title: exam.title, results });
};

// import axios from "axios";
// import FormData from "form-data";
// import fs from "fs";
// import { exams } from "./db.js";

// // helper → call OCR service
// async function evaluateWithOCR(pdfPath, scheme) {
//   const form = new FormData();
//   form.append("answer_pdf", fs.createReadStream(pdfPath));
//   form.append("scheme_json", JSON.stringify(scheme));

//   const res = await axios.post("http://localhost:8000/evaluate-pdf", form, {
//     headers: form.getHeaders(),
//   });
//   return res.data;
// }

// export const getResultsCtrl = async (req, res) => {
//   try {
//     const { examId } = req.params;
//     const exam = exams.find((e) => e.examId === examId);
//     if (!exam) return res.status(404).json({ error: "Exam not found" });

//     const results = await Promise.all(
//       (exam.sheets || []).map(async (s) => {
//         const evaluation = await evaluateWithOCR(s.filePath, exam.answerScheme);

//         // only total marks
//         const totalMarks = Object.values(evaluation.scoring).reduce(
//           (a, b) => a + b,
//           0
//         );

//         return {
//           studentId: s.studentId,
//           name: s.name,
//           marks: totalMarks,
//         };
//       })
//     );

//     res.json({ examId, title: exam.title, results });
//   } catch (err) {
//     console.error("Error evaluating results:", err.message);
//     res.status(500).json({ error: "Failed to evaluate results" });
//   }
// };
