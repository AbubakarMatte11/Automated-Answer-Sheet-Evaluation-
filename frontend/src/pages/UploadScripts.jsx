import { useEffect, useState } from "react";
import { listExams } from "../utils/api";
import StudentSheetUpload from "./StudentSheetUpload";

export default function UploadScripts() {
  const [exams, setExams] = useState([]);

  const refresh = async () => {
    const res = await listExams();
    setExams(res.data.exams || []);
  };

  useEffect(() => {
    refresh();
  }, []);

  return (
    <div style={{ maxWidth: 560 }}>
      <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 12 }}>
        Upload Student Scripts
      </h2>

      <div style={{ display: "grid", gap: 10 }}>
        {exams.length === 0 && <div>No exams available.</div>}
        {exams.map((e) => (
          <div
            key={e.examId}
            style={{
              padding: 12,
              border: "1px solid #eee",
              borderRadius: 6,
              background: "#fafafa",
            }}
          >
            <div>
              <b>{e.title}</b>
            </div>
            <div style={{ fontSize: 12, color: "#666" }}>ID: {e.examId}</div>
            {/* ✅ Upload Student Scripts for this exam */}
            <StudentSheetUpload examId={e.examId} />
          </div>
        ))}
      </div>
    </div>
  );
}

