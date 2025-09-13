// import { useState } from "react";
// import { uploadAnswerScheme } from "../utils/api";

// export default function AnswerSchemeUpload({ examId, hasScheme }) {
//   const [jsonText, setJsonText] = useState("");
//   const [msg, setMsg] = useState("");
//   const [open, setOpen] = useState(false);

//   const handleUpload = async () => {
//     try {
//       const parsed = JSON.parse(jsonText);
//       await uploadAnswerScheme(examId, parsed);
//       setMsg("✅ Answer scheme uploaded successfully");
//       setOpen(false);
//     } catch (err) {
//       setMsg("❌ Error: " + (err.response?.data?.error || err.message));
//     }
//   };

//   return (
//     <div style={{ marginTop: 10 }}>
//       <button
//         onClick={() => setOpen(true)}
//         style={{
//           padding: "6px 12px",
//           background: "#2563eb",
//           color: "white",
//           border: "none",
//           borderRadius: 6,
//           cursor: "pointer",
//         }}
//       >
//         {hasScheme ? "Update Answer Scheme" : "Upload Answer Scheme"}
//       </button>

//       {open && (
//         <div
//           style={{
//             marginTop: 12,
//             padding: 12,
//             border: "1px solid #ddd",
//             borderRadius: 6,
//             background: "#fafafa",
//           }}
//         >
//           <h2 style={{ fontSize: 16, fontWeight: 600 }}>
//             Answer Scheme (JSON)
//           </h2>
//           <textarea
//             value={jsonText}
//             onChange={(e) => setJsonText(e.target.value)}
//             rows={8}
//             style={{
//               width: "100%",
//               padding: 10,
//               marginTop: 10,
//               borderRadius: 6,
//               border: "1px solid #ccc",
//               fontFamily: "monospace",
//             }}
//           />
//           <div style={{ display: "flex", gap: 8, marginTop: 10 }}>
//             <button
//               onClick={handleUpload}
//               style={{
//                 padding: "8px 14px",
//                 background: "black",
//                 color: "white",
//                 border: "none",
//                 borderRadius: 6,
//                 cursor: "pointer",
//               }}
//             >
//               Save
//             </button>
//             <button
//               onClick={() => setOpen(false)}
//               style={{
//                 padding: "8px 14px",
//                 background: "white",
//                 border: "1px solid #ccc",
//                 borderRadius: 6,
//                 cursor: "pointer",
//               }}
//             >
//               Cancel
//             </button>
//           </div>
//           {msg && <div style={{ marginTop: 10 }}>{msg}</div>}
//         </div>
//       )}
//     </div>
//   );
// }

import { useState } from "react";
import { uploadAnswerScheme } from "../utils/api";

export default function AnswerSchemeUpload({ examId, hasScheme }) {
  const [file, setFile] = useState(null);
  const [msg, setMsg] = useState("");
  const [open, setOpen] = useState(false);
  const [uploading, setUploading] = useState(false);

  const handleUpload = async () => {
    if (!file) {
      setMsg("❌ Please select a PDF file.");
      return;
    }

    setUploading(true);
    setMsg("");

    try {
      const formData = new FormData();
      formData.append("file", file);

      await uploadAnswerScheme(examId, formData); // backend expects FormData
      setMsg("✅ Answer scheme uploaded successfully");
      setFile(null);
      setOpen(false);
    } catch (err) {
      setMsg("❌ Error: " + (err.response?.data?.error || err.message));
    } finally {
      setUploading(false);
    }
  };

  return (
    <div style={{ marginTop: 10 }}>
      <button
        onClick={() => setOpen(true)}
        style={{
          padding: "6px 12px",
          background: "#2563eb",
          color: "white",
          border: "none",
          borderRadius: 6,
          cursor: "pointer",
        }}
      >
        {hasScheme ? "Update Answer Scheme" : "Upload Answer Scheme"}
      </button>

      {open && (
        <div
          style={{
            marginTop: 12,
            padding: 12,
            border: "1px solid #ddd",
            borderRadius: 6,
            background: "#fafafa",
          }}
        >
          <h2 style={{ fontSize: 16, fontWeight: 600 }}>Answer Scheme (PDF)</h2>
          <input
            type="file"
            accept="application/pdf"
            onChange={(e) => setFile(e.target.files[0])}
            style={{ marginTop: 10 }}
          />

          <div style={{ display: "flex", gap: 8, marginTop: 10 }}>
            <button
              onClick={handleUpload}
              disabled={uploading}
              style={{
                padding: "8px 14px",
                background: uploading ? "#888" : "black",
                color: "white",
                border: "none",
                borderRadius: 6,
                cursor: uploading ? "not-allowed" : "pointer",
              }}
            >
              {uploading ? "Uploading..." : "Save"}
            </button>
            <button
              onClick={() => setOpen(false)}
              style={{
                padding: "8px 14px",
                background: "white",
                border: "1px solid #ccc",
                borderRadius: 6,
                cursor: "pointer",
              }}
            >
              Cancel
            </button>
          </div>

          {msg && <div style={{ marginTop: 10 }}>{msg}</div>}
        </div>
      )}
    </div>
  );
}
