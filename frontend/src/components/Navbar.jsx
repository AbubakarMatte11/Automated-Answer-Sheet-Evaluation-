// import { Link } from "react-router-dom";
// import logo from "../assets/react.svg"; // adjust path if needed

// export default function Navbar({ user, onLogout }) {
//   return (
//     <nav
//       style={{
//         background: "#1f2937", // dark gray
//         color: "white",
//         padding: "12px 24px",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "space-between",
//       }}
//     >
//       {/* Brand
//       <div style={{ fontSize: 20, fontWeight: 700 }}>
//         AutoEval System
//       </div> */}
//       {/* Brand */}
//       <div className="flex items-center">
//         <img
//           src={logo}
//           alt="AutoEval Logo"
//           style={{ height: 40, width: "auto" }}
//         />
//       </div>

//       {/* Links */}
//       <div style={{ display: "flex", gap: "24px" }}>
//         <Link to="/exams" style={{ color: "white", textDecoration: "none" }}>
//           Exams
//         </Link>
//         <Link
//           to="/results/student"
//           style={{ color: "white", textDecoration: "none" }}
//         >
//           Results by Student
//         </Link>
//         <Link
//           to="/results/exam"
//           style={{ color: "white", textDecoration: "none" }}
//         >
//           Results by Exam
//         </Link>
//       </div>

//       {/* User + Logout */}
//       <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
//         {user && <span style={{ fontSize: 14 }}>{user.email}</span>}
//         <button
//           onClick={onLogout}
//           style={{
//             padding: "6px 14px",
//             background: "#ef4444",
//             border: "none",
//             borderRadius: 6,
//             color: "white",
//             cursor: "pointer",
//           }}
//         >
//           Logout
//         </button>
//       </div>
//     </nav>
//   );
// }


// import { Link } from "react-router-dom";
// import logo from "../assets/react.svg"; // adjust path

// export default function Navbar({ onLogout, children }) {
//   return (
//     <div style={{ margin: 0, padding: 0 }}>
//       {/* Navbar */}
//       <nav
//         style={{
//           position: "fixed",
//           top: 0,
//           left: 0,
//           width: "100%",
//           background: "#1c1d1f",
//           color: "white",
//           padding: "12px 24px", // reduced side padding so it fits
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "space-between",
//           boxSizing: "border-box", // prevents overflow
//           boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
//           zIndex: 1000,
//         }}
//       >
//         {/* Brand (Left) */}
//         <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
//           <img
//             src={logo}
//             alt="AutoEval Logo"
//             style={{ height: 40, width: "auto" }}
//           />
//           <span style={{ fontSize: 20, fontWeight: 700, color: "#f97316" }}>
//             AutoEval
//           </span>
//         </div>

//         {/* Links (Center) */}
//         <div
//           style={{
//             display: "flex",
//             gap: "28px",
//             justifyContent: "center",
//             flex: 1,
//           }}
//         >
//           <Link
//             to="/exams"
//             style={{
//               color: "white",
//               textDecoration: "none",
//               fontWeight: 500,
//             }}
//           >
//             Exams
//           </Link>
//           <Link
//             to="/results/student"
//             style={{
//               color: "white",
//               textDecoration: "none",
//               fontWeight: 500,
//             }}
//           >
//             Results by Student
//           </Link>
//           <Link
//             to="/results/exam"
//             style={{
//               color: "white",
//               textDecoration: "none",
//               fontWeight: 500,
//             }}
//           >
//             Results by Exam
//           </Link>
//         </div>

//         {/* Logout (Right) */}
//         <div style={{ display: "flex", justifyContent: "flex-end" }}>
//           <button
//             onClick={onLogout}
//             style={{
//               padding: "8px 16px",
//               background: "#f97316",
//               border: "none",
//               borderRadius: "6px",
//               color: "white",
//               fontWeight: 600,
//               cursor: "pointer",
//               transition: "background 0.2s ease",
//               whiteSpace: "nowrap",
//             }}
//             onMouseOver={(e) => (e.currentTarget.style.background = "#ea580c")}
//             onMouseOut={(e) => (e.currentTarget.style.background = "#f97316")}
//           >
//             Logout
//           </button>
//         </div>
//       </nav>

//       {/* Page content wrapper with padding to avoid overlap */}
//       <div style={{ paddingTop: "70px" }}>{children}</div>
//     </div>
//   );
// }

import { Link } from "react-router-dom";
import logo from "../assets/react.svg"; // adjust path

export default function Navbar({ onLogout, children }) {
  return (
    <div style={{ margin: 0, padding: 0 }}>
      {/* Navbar */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          background: "#1c1d1f",
          color: "white",
          padding: "12px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          boxSizing: "border-box",
          boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
          zIndex: 1000,
        }}
      >
        {/* Brand */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img
            src={logo}
            alt="AutoEval Logo"
            style={{ height: 40, width: "auto" }}
          />
          <span style={{ fontSize: 20, fontWeight: 700, color: "#f97316" }}>
            AutoEval
          </span>
        </div>

        {/* Links */}
        <div
          style={{
            display: "flex",
            gap: "28px",
            justifyContent: "center",
            flex: 1,
          }}
        >
          <Link to="/exams" style={{ color: "white", textDecoration: "none", fontWeight: 500 }}>
            Exams
          </Link>
          <Link to="/upload-scripts" style={{ color: "white", textDecoration: "none", fontWeight: 500 }}>
            Upload Scripts
          </Link>
          <Link to="/results/student" style={{ color: "white", textDecoration: "none", fontWeight: 500 }}>
            Results by Student
          </Link>
          <Link to="/results/exam" style={{ color: "white", textDecoration: "none", fontWeight: 500 }}>
            Results by Exam
          </Link>
        </div>

        {/* Logout */}
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <button
            onClick={onLogout}
            style={{
              padding: "8px 16px",
              background: "#f97316",
              border: "none",
              borderRadius: "6px",
              color: "white",
              fontWeight: 600,
              cursor: "pointer",
              transition: "background 0.2s ease",
              whiteSpace: "nowrap",
            }}
            onMouseOver={(e) => (e.currentTarget.style.background = "#ea580c")}
            onMouseOut={(e) => (e.currentTarget.style.background = "#f97316")}
          >
            Logout
          </button>
        </div>
      </nav>

      {/* Page content wrapper */}
      <div style={{ paddingTop: "70px" }}>{children}</div>
    </div>
  );
}
