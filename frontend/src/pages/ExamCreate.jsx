
// import { useEffect, useState } from "react";
// import { createExam, listExams } from "../utils/api";
// import AnswerSchemeUpload from "./AnswerSchemeUpload";

// export default function ExamCreate() {
//   const [examId, setExamId] = useState("");
//   const [title, setTitle] = useState("");
//   const [msg, setMsg] = useState("");
//   const [exams, setExams] = useState([]);

//   const refresh = async () => {
//     const res = await listExams();
//     setExams(res.data.exams || []);
//   };

//   useEffect(() => {
//     refresh();
//   }, []);

//   const handleCreate = async () => {
//     setMsg("");
//     if (!examId || !title) {
//       setMsg("Please enter both Exam ID and Title.");
//       return;
//     }
//     try {
//       await createExam({ examId, title });
//       setMsg("✅ Exam created");
//       setExamId("");
//       setTitle("");
//       refresh();
//     } catch (err) {
//       setMsg("❌ " + (err.response?.data?.error || "Error"));
//     }
//   };

//   return (
//     <div style={{ maxWidth: 560 }}>
//       <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 12 }}>
//         Create Exam
//       </h2>
//       <div style={{ display: "grid", gap: 8 }}>
//         <input
//           placeholder="Exam ID (e.g., bio_unit1)"
//           value={examId}
//           onChange={(e) => setExamId(e.target.value)}
//           style={{ padding: 10, border: "1px solid #ccc", borderRadius: 6 }}
//         />
//         <input
//           placeholder="Exam Title (e.g., Biology Unit Test)"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           style={{ padding: 10, border: "1px solid #ccc", borderRadius: 6 }}
//         />
//         <div style={{ display: "flex", gap: 8 }}>
//           <button
//             onClick={handleCreate}
//             style={{
//               padding: "10px 14px",
//               borderRadius: 6,
//               border: "none",
//               background: "black",
//               color: "white",
//               cursor: "pointer",
//             }}
//           >
//             Create
//           </button>
//           <button
//             onClick={refresh}
//             style={{
//               padding: "10px 14px",
//               borderRadius: 6,
//               border: "1px solid #ddd",
//               background: "white",
//               cursor: "pointer",
//             }}
//           >
//             Refresh
//           </button>
//         </div>
//         {msg && <div>{msg}</div>}
//       </div>

//       <div style={{ marginTop: 24 }}>
//         <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>
//           Existing Exams
//         </h3>
//         <div style={{ display: "grid", gap: 10 }}>
//           {exams.length === 0 && <div>No exams yet.</div>}
//           {exams.map((e) => (
//             <div
//               key={e.examId}
//               style={{ padding: 10, border: "1px solid #eee", borderRadius: 6 }}
//             >
//               <div>
//                 <b>{e.title}</b>
//               </div>
//               <div style={{ fontSize: 12, color: "#666" }}>ID: {e.examId}</div>
//               {/* ✅ Upload/Update Scheme only */}
//               <AnswerSchemeUpload examId={e.examId} hasScheme={!!e.answerScheme} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import { createExam, listExams } from "../utils/api";
import AnswerSchemeUpload from "./AnswerSchemeUpload";

export default function ExamCreate() {
  const [examId, setExamId] = useState("");
  const [title, setTitle] = useState("");
  const [msg, setMsg] = useState("");
  const [exams, setExams] = useState([]);

  const refresh = async () => {
    const res = await listExams();
    setExams(res.data.exams || []);
  };

  useEffect(() => {
    refresh();
  }, []);

  const handleCreate = async () => {
    setMsg("");
    if (!examId || !title) {
      setMsg("Please enter both Course Code and Course Name.");
      return;
    }
    try {
      await createExam({ examId, title });
      setMsg("✅ Exam created");
      setExamId("");
      setTitle("");
      refresh();
    } catch (err) {
      setMsg("❌ " + (err.response?.data?.error || "Error"));
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontFamily: "'Arial', sans-serif",
        padding: "40px 0",
        width: "100%", // full page width
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "32px",
          fontWeight: 700,
          marginBottom: "40px",
          color: "#EC5252", // Udemy primary red
          width: "100%",
        }}
      >
        Create New Exam
      </h1>

      {/* Create Exam Form */}
      <div style={{ display: "flex", flexDirection: "column", gap: "20px", width: "100%" }}>
        <div style={{ width: "100%" }}>
          <label style={{ display: "block", marginBottom: "6px", fontWeight: 600, fontSize: "14px" }}>
            Course Code
          </label>
          <input
            placeholder="e.g., BIO101"
            value={examId}
            onChange={(e) => setExamId(e.target.value)}
            style={{
              width: "100%",
              padding: "12px",
              border: "1px solid #ddd",
              borderRadius: "6px",
              fontSize: "14px",
              outline: "none",
              textAlign: "center",
              transition: "border 0.2s",
            }}
            onFocus={(e) => (e.target.style.border = "1px solid #EC5252")}
            onBlur={(e) => (e.target.style.border = "1px solid #ddd")}
          />
        </div>
        <div style={{ width: "100%" }}>
          <label style={{ display: "block", marginBottom: "6px", fontWeight: 600, fontSize: "14px" }}>
            Course Name
          </label>
          <input
            placeholder="e.g., Introduction to Biology"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{
              width: "100%",
              padding: "12px",
              border: "1px solid #ddd",
              borderRadius: "6px",
              fontSize: "14px",
              outline: "none",
              textAlign: "center",
              transition: "border 0.2s",
            }}
            onFocus={(e) => (e.target.style.border = "1px solid #EC5252")}
            onBlur={(e) => (e.target.style.border = "1px solid #ddd")}
          />
        </div>
        <div style={{ display: "flex", gap: "12px", justifyContent: "flex-start", marginTop: "12px" }}>
          <button
            onClick={handleCreate}
            style={{
              padding: "12px 24px",
              borderRadius: "6px",
              border: "none",
              backgroundColor: "#EC5252",
              color: "white",
              fontWeight: 600,
              cursor: "pointer",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#D43D3D")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#EC5252")}
          >
            Create
          </button>
          <button
            onClick={refresh}
            style={{
              padding: "12px 24px",
              borderRadius: "6px",
              border: "1px solid #EC5252",
              backgroundColor: "white",
              color: "#EC5252",
              fontWeight: 600,
              cursor: "pointer",
              transition: "background 0.2s, color 0.2s",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#EC5252";
              e.target.style.color = "white";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "white";
              e.target.style.color = "#EC5252";
            }}
          >
            Refresh
          </button>
        </div>
        {msg && <div style={{ marginTop: "12px", color: msg.includes("✅") ? "green" : "red" }}>{msg}</div>}
      </div>

      {/* Existing Exams Table */}
      <div style={{ width: "100%", marginTop: "50px" }}>
        <h3 style={{ fontSize: "20px", fontWeight: 600, marginBottom: "16px", color: "#EC5252", width: "100%" }}>
          Existing Exams
        </h3>

        <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "center" }}>
          <thead>
            <tr style={{ backgroundColor: "#f7f7f7" }}>
              <th style={{ padding: "12px", border: "1px solid #ddd" }}>Course Code</th>
              <th style={{ padding: "12px", border: "1px solid #ddd" }}>Course Name</th>
              <th style={{ padding: "12px", border: "1px solid #ddd" }}>Answer Scheme</th>
              <th style={{ padding: "12px", border: "1px solid #ddd" }}>Delete</th>
            </tr>
          </thead>
          <tbody>
            {exams.length === 0 && (
              <tr>
                <td colSpan={4} style={{ padding: "12px" }}>
                  No exams yet.
                </td>
              </tr>
            )}
            {exams.map((e) => (
              <tr key={e.examId}>
                <td style={{ padding: "12px", border: "1px solid #ddd" }}>{e.examId}</td>
                <td style={{ padding: "12px", border: "1px solid #ddd" }}>{e.title}</td>
                <td style={{ padding: "12px", border: "1px solid #ddd" }}>
                  <AnswerSchemeUpload examId={e.examId} hasScheme={!!e.answerScheme} />
                </td>
                <td style={{ padding: "12px", border: "1px solid #ddd" }}>
                  <button
                    style={{
                      padding: "6px 12px",
                      borderRadius: "6px",
                      border: "none",
                      backgroundColor: "#EC5252",
                      color: "white",
                      cursor: "pointer",
                      fontSize: "12px",
                    }}
                    onMouseEnter={(e) => (e.target.style.backgroundColor = "#D43D3D")}
                    onMouseLeave={(e) => (e.target.style.backgroundColor = "#EC5252")}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
