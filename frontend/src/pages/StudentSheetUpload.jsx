// import { useState, useEffect } from "react";
// import { uploadStudentSheet, listStudentSheets } from "../utils/api";

// export default function StudentSheetUpload({ examId }) {
//   const [jsonText, setJsonText] = useState(`{
//   "studentId": "USN123",
//   "name": "Akshara Singa",
//   "answers": [
//     { "qno": 1, "response": "Process of photosynthesis explained ..." },
//     { "qno": 2, "response": "Mitosis is ..." }
//   ]
// }`);
//   const [msg, setMsg] = useState("");
//   const [sheets, setSheets] = useState([]);

//   const refresh = async () => {
//     try {
//       const res = await listStudentSheets(examId);
//       setSheets(res.data.sheets || res.data || []);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   useEffect(() => { refresh(); }, [examId]);

//   const handleUpload = async () => {
//     try {
//       const parsed = JSON.parse(jsonText);
//       await uploadStudentSheet(examId, parsed);
//       setMsg("✅ Student sheet uploaded");
//       setJsonText("");
//       refresh();
//     } catch (err) {
//       setMsg("❌ Error: " + (err.response?.data?.error || err.message));
//     }
//   };

//   return (
//     <div style={{ marginTop: 16, padding: 10, border: "1px dashed #ccc" }}>
//       <h4 style={{ fontSize: 16, fontWeight: 600 }}>Upload Student Sheet</h4>
//       <textarea
//         value={jsonText}
//         onChange={(e) => setJsonText(e.target.value)}
//         rows={6}
//         style={{ width: "100%", padding: 8, marginTop: 8 }}
//       />
//       <button
//         onClick={handleUpload}
//         style={{ marginTop: 8, padding: "8px 12px", background: "black", color: "white", border: "none", borderRadius: 4 }}
//       >
//         Upload
//       </button>
//       {msg && <div style={{ marginTop: 6 }}>{msg}</div>}

//       <div style={{ marginTop: 12 }}>
//         <b>Uploaded Sheets:</b>
//         {sheets.length === 0 && <div>None yet.</div>}
//         {sheets.map(s => (
//           <div key={s.studentId} style={{ padding: 6, borderBottom: "1px solid #eee" }}>
//             <b>{s.name}</b> ({s.studentId})
//             <pre style={{ fontSize: 12, background: "#f9f9f9", padding: 6 }}>
//               {JSON.stringify(s.answers, null, 2)}
//             </pre>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

import { useState, useEffect } from "react";
import { uploadStudentSheet, listStudentSheets } from "../utils/api";

export default function StudentSheetUpload({ examId }) {
  const [studentName, setStudentName] = useState("");
  const [studentId, setStudentId] = useState(""); // USN
  const [file, setFile] = useState(null);
  const [sheets, setSheets] = useState([]);
  const [msg, setMsg] = useState("");
  const [uploading, setUploading] = useState(false);

  const refresh = async () => {
    try {
      const res = await listStudentSheets(examId);
      setSheets(res.data.sheets || res.data || []);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    refresh();
  }, [examId]);

  const handleUpload = async () => {
    if (!studentName || !studentId || !file) {
      setMsg("❌ Please enter Name, USN, and select a PDF file.");
      return;
    }

    setUploading(true);
    setMsg("");

    try {
      const formData = new FormData();
      formData.append("studentId", studentId);
      formData.append("name", studentName);
      formData.append("file", file);

      await uploadStudentSheet(examId, formData); // Backend should accept FormData
      setMsg("✅ Student sheet uploaded successfully.");
      setStudentName("");
      setStudentId("");
      setFile(null);
      refresh();
    } catch (err) {
      setMsg("❌ Upload failed: " + (err.response?.data?.error || err.message));
    } finally {
      setUploading(false);
    }
  };

  return (
    <div style={{ marginTop: 16, padding: 10, border: "1px dashed #ccc" }}>
      <h4 style={{ fontSize: 16, fontWeight: 600 }}>Upload Student Script</h4>

      <input
        type="text"
        placeholder="Student Name"
        value={studentName}
        onChange={(e) => setStudentName(e.target.value)}
        style={{ width: "100%", padding: 8, marginTop: 8 }}
      />
      <input
        type="text"
        placeholder="USN"
        value={studentId}
        onChange={(e) => setStudentId(e.target.value)}
        style={{ width: "100%", padding: 8, marginTop: 8 }}
      />
      <input
        type="file"
        accept="application/pdf"
        onChange={(e) => setFile(e.target.files[0])}
        style={{ marginTop: 8 }}
      />

      <button
        onClick={handleUpload}
        disabled={uploading}
        style={{
          marginTop: 8,
          padding: "8px 12px",
          background: uploading ? "#888" : "black",
          color: "white",
          border: "none",
          borderRadius: 4,
          cursor: uploading ? "not-allowed" : "pointer",
        }}
      >
        {uploading ? "Uploading..." : "Upload"}
      </button>

      {msg && <div style={{ marginTop: 6 }}>{msg}</div>}

      <div style={{ marginTop: 12 }}>
        <b>Uploaded Sheets:</b>
        {sheets.length === 0 && <div>None yet.</div>}
        {sheets.map((s) => (
          <div key={s.studentId} style={{ padding: 6, borderBottom: "1px solid #eee" }}>
            <b>{s.name}</b> ({s.studentId})
            {s.fileUrl && (
              <div>
                <a href={s.fileUrl} target="_blank" rel="noopener noreferrer">
                  View PDF
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
