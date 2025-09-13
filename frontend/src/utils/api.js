import axios from "axios";
const api = axios.create({ baseURL: "http://localhost:4000/api" });

// Exams
export const createExam = (payload) => api.post("/exams", payload);
export const listExams = () => api.get("/exams");
export const getExam = (examId) => api.get(`/exams/${examId}`);

//Answer Scheme
export const uploadAnswerScheme = (examId, payload) => 
  api.post(`/exams/${examId}/answer-scheme`, payload);

// Student Sheets
export const uploadStudentSheet = (examId, payload) =>
  api.post(`/studentSheets/${examId}/upload`, payload);

export const listStudentSheets = (examId) =>
  api.get(`/studentSheets/${examId}/list`);

export const getResultsByExam = (examId) => api.get(`/results/${examId}`);


export default api;
