import { useEffect, useState } from "react";
import { listExams, getResultsByExam } from "../utils/api";

export default function ResultsPage() {
  const [exams, setExams] = useState([]);
  const [selectedExam, setSelectedExam] = useState(null);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchExams = async () => {
      try {
        const res = await listExams();
        const data = Array.isArray(res.data) ? res.data : res.data.exams || [];
        setExams(data);
      } catch (err) {
        console.error("Error fetching exams:", err);
      }
    };
    fetchExams();
  }, []);

  const handleViewResults = async (examId) => {
    try {
      const res = await getResultsByExam(examId);
      const data = Array.isArray(res.data) ? res.data : res.data.results || [];
      setResults(data);
      setSelectedExam(examId);
    } catch (err) {
      console.error("Error fetching results:", err);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2 style={{ fontSize: 18, fontWeight: 600, marginBottom: 12 }}>
        Results by Exam
      </h2>

      {exams.length === 0 ? (
        <p>No exams found.</p>
      ) : (
        <table border="1" cellPadding="8" style={{ borderCollapse: "collapse", width: "100%" }}>
          <thead>
            <tr>
              <th>Exam ID</th>
              <th>Title</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {exams.map((exam) => (
              <tr key={exam.examId || exam.id || exam._id}>
                <td>{exam.examId || exam.id || exam._id}</td>
                <td>{exam.title}</td>
                <td>
                  <button onClick={() => handleViewResults(exam.examId || exam.id || exam._id)}>
                    View Results
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {selectedExam && (
        <div style={{ marginTop: 20 }}>
          <h3>Results for Exam {selectedExam}</h3>
          {results.length === 0 ? (
            <p>No results found.</p>
          ) : (
            <table border="1" cellPadding="8" style={{ borderCollapse: "collapse", width: "100%" }}>
              <thead>
                <tr>
                  <th>Student ID</th>
                  <th>Marks</th>
                </tr>
              </thead>
              <tbody>
                {results.map((r, idx) => (
                  <tr key={idx}>
                    <td>{r.studentId}</td>
                    <td>{r.marks}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}
    </div>
  );
}

// import { useEffect, useState } from "react";
// import { listExams, getResultsByExam } from "../utils/api";

// export default function ResultsPage() {
//   const [exams, setExams] = useState([]);
//   const [selectedExam, setSelectedExam] = useState(null);
//   const [results, setResults] = useState([]);

//   useEffect(() => {
//     const fetchExams = async () => {
//       try {
//         const res = await listExams();
//         const data = Array.isArray(res.data) ? res.data : res.data.exams || [];
//         setExams(data);
//       } catch (err) {
//         console.error("Error fetching exams:", err);
//       }
//     };
//     fetchExams();
//   }, []);

//   const handleViewResults = async (examId) => {
//     try {
//       const res = await getResultsByExam(examId);
//       const data = Array.isArray(res.data) ? res.data : res.data.results || [];
//       setResults(data);
//       setSelectedExam(examId);
//     } catch (err) {
//       console.error("Error fetching results:", err);
//     }
//   };

//   return (
//     <div style={{ padding: 20 }}>
//       <h2 style={{ fontSize: 18, fontWeight: 600, marginBottom: 12 }}>
//         Results by Exam
//       </h2>

//       {exams.length === 0 ? (
//         <p>No exams found.</p>
//       ) : (
//         <table
//           border="1"
//           cellPadding="8"
//           style={{ borderCollapse: "collapse", width: "100%" }}
//         >
//           <thead>
//             <tr>
//               <th>Exam ID</th>
//               <th>Title</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {exams.map((exam) => (
//               <tr key={exam.examId || exam.id || exam._id}>
//                 <td>{exam.examId || exam.id || exam._id}</td>
//                 <td>{exam.title}</td>
//                 <td>
//                   <button
//                     onClick={() =>
//                       handleViewResults(exam.examId || exam.id || exam._id)
//                     }
//                   >
//                     View Results
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}

//       {selectedExam && (
//         <div style={{ marginTop: 20 }}>
//           <h3>Results for Exam {selectedExam}</h3>
//           {results.length === 0 ? (
//             <p>No results found.</p>
//           ) : (
//             <table
//               border="1"
//               cellPadding="8"
//               style={{ borderCollapse: "collapse", width: "100%" }}
//             >
//               <thead>
//                 <tr>
//                   <th>Student ID</th>
//                   <th>Name</th>
//                   <th>Total Marks</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {results.map((r, idx) => (
//                   <tr key={idx}>
//                     <td>{r.studentId}</td>
//                     <td>{r.name}</td>
//                     <td>{r.marks}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }
