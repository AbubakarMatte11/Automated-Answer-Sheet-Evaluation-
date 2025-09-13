
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import ExamCreate from "./pages/ExamCreate";
import UploadScripts from "./pages/UploadScripts"; // ✅ new page
import Navbar from "./components/Navbar";
import Results from "./pages/Results";
// Placeholder Results pages
function ResultsByStudent() {
  return (
    <div style={{ padding: 20 }}>
      <h2 style={{ fontSize: 18, fontWeight: 600, marginBottom: 12 }}>
        Results by Student
      </h2>
      <div>Table of all exams for a single student (coming soon)</div>
    </div>
  );
}

// function ResultsByExam() {
//   return (
//     <div style={{ padding: 20 }}>
//       <h2 style={{ fontSize: 18, fontWeight: 600, marginBottom: 12 }}>
//         Results by Exam
//       </h2>
//       <div>Table of all students in one exam (coming soon)</div>
//     </div>
//   );
// }

export default function App() {
  const [user, setUser] = useState(null);

  if (!user) return <Login onLogin={setUser} />;

  return (
    <BrowserRouter>
      {/* ✅ Wrap routes inside Navbar so it shows consistently */}
      <Navbar user={user} onLogout={() => setUser(null)}>
        <Routes>
          <Route path="/exams" element={<ExamCreate />} />
          <Route path="/upload-scripts" element={<UploadScripts />} /> {/* ✅ new route */}
          <Route path="/results/student" element={<ResultsByStudent />} />
          <Route path="/results/exam" element={<Results />} />
          {/* Default route → Exams page */}
          <Route path="*" element={<ExamCreate />} />
        </Routes>
      </Navbar>
    </BrowserRouter>
  );
}
