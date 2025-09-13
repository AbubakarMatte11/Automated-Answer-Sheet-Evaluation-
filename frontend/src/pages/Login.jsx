// import { useState } from "react";
// import axios from "axios";

// export default function Login({ onLogin }) {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleLogin = async () => {
//     setError("");
//     try {
//       const res = await axios.post("http://localhost:4000/api/auth/login", {
//         email,
//         password,
//       });
//       onLogin(res.data.user);
//     } catch (err) {
//       setError(err.response?.data?.error || "Login failed");
//     }
//   };

//   const handleSignup = async () => {
//     setError("");
//     try {
//       await axios.post("http://localhost:4000/api/auth/signup", {
//         email,
//         password,
//       });
//       alert("Signup successful! Now login with the same credentials.");
//     } catch (err) {
//       setError(err.response?.data?.error || "Signup failed");
//     }
//   };

//   return (
//     <div
//       style={{ minHeight: "100vh" }}
//       className="flex items-center justify-center"
//     >
//       <div style={{ width: 340 }} className="border rounded p-4 space-y-3">
//         <h1 className="text-xl font-bold">Teacher Login</h1>
//         <input
//           className="border p-2 w-full"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           className="border p-2 w-full"
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         {error && <div className="text-red-600 text-sm">{error}</div>}
//         <div className="flex gap-2">
//           <button
//             className="px-3 py-2 bg-black text-white rounded"
//             onClick={handleLogin}
//           >
//             Login
//           </button>
//           <button
//             className="px-3 py-2 bg-gray-700 text-white rounded"
//             onClick={handleSignup}
//           >
//             Sign up
//           </button>
//         </div>
//         <div className="text-xs text-gray-500">
//           Try default: <b>teacher@test.com</b> / <b>123456</b>
//         </div>
//       </div>
//     </div>
//   );
// }



// import { useState } from "react";
// import axios from "axios";
// import logo from "../assets/react.svg";
// export default function Login({ onLogin }) {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleLogin = async () => {
//     setError("");
//     try {
//       const res = await axios.post("http://localhost:4000/api/auth/login", {
//         email,
//         password,
//       });
//       onLogin(res.data.user);
//     } catch (err) {
//       setError(err.response?.data?.error || "Login failed");
//     }
//   };

//   const handleSignup = async () => {
//     setError("");
//     try {
//       await axios.post("http://localhost:4000/api/auth/signup", {
//         email,
//         password,
//       });
//       alert("Signup successful! Now login with the same credentials.");
//     } catch (err) {
//       setError(err.response?.data?.error || "Signup failed");
//     }
//   };

//   return (
//     <div
//       style={{
//         display: "flex",
//         minHeight: "100vh",
//         fontFamily: "Arial, sans-serif",
//       }}
//     >
//       {/* Left Form Section */}
//       <div
//         style={{
//           flex: 1,
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           padding: "40px",
//           backgroundColor: "#fff",
//         }}
//       >
//         <div style={{ maxWidth: "350px", width: "100%" }}>
//           <h1
//             style={{
//               fontSize: "28px",
//               fontWeight: "bold",
//               marginBottom: "10px",
//             }}
//           >
//             WELCOME BACK
//           </h1>
//           <p style={{ color: "#666", marginBottom: "20px" }}>
//             Welcome back! Please enter your details.
//           </p>

//           {/* Email */}
//           <label
//             style={{ display: "block", fontSize: "14px", marginBottom: "5px" }}
//           >
//             Email
//           </label>
//           <input
//             style={{
//               width: "100%",
//               padding: "10px",
//               marginBottom: "15px",
//               border: "1px solid #ccc",
//               borderRadius: "6px",
//             }}
//             placeholder="Enter your email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />

//           {/* Password */}
//           <label
//             style={{ display: "block", fontSize: "14px", marginBottom: "5px" }}
//           >
//             Password
//           </label>
//           <input
//             type="password"
//             style={{
//               width: "100%",
//               padding: "10px",
//               marginBottom: "10px",
//               border: "1px solid #ccc",
//               borderRadius: "6px",
//             }}
//             placeholder="********"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />

//           {/* Error */}
//           {error && (
//             <div
//               style={{ color: "red", fontSize: "12px", marginBottom: "10px" }}
//             >
//               {error}
//             </div>
//           )}

//           {/* Remember me / Forgot password */}
//           <div
//             style={{
//               display: "flex",
//               justifyContent: "space-between",
//               alignItems: "center",
//               fontSize: "12px",
//               marginBottom: "15px",
//             }}
//           >
//             <label>
//               <input type="checkbox" style={{ marginRight: "5px" }} />
//               Remember me
//             </label>
//             <span style={{ color: "#666", cursor: "pointer" }}>
//               Forgot password
//             </span>
//           </div>

//           {/* Sign in button */}
//           <button
//             onClick={handleLogin}
//             style={{
//               width: "100%",
//               padding: "12px",
//               backgroundColor: "#F05136",
//               color: "#fff",
//               border: "none",
//               borderRadius: "8px",
//               fontWeight: "bold",
//               cursor: "pointer",
//               marginBottom: "10px",
//             }}
//           >
//             Sign in
//           </button>

//           {/* Google Sign in */}
//           <button
//             style={{
//               width: "100%",
//               padding: "12px",
//               border: "1px solid #ccc",
//               borderRadius: "8px",
//               backgroundColor: "#fff",
//               cursor: "pointer",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               fontWeight: "bold",
//               marginBottom: "15px",
//             }}
//           >
//             <img
//               src="https://developers.google.com/identity/images/g-logo.png"
//               alt="Google logo"
//               style={{ width: "18px", height: "18px", marginRight: "8px" }}
//             />
//             Sign in with Google
//           </button>

//           {/* Signup link */}
//           <p style={{ fontSize: "12px", textAlign: "center" }}>
//             Don’t have an account?{" "}
//             <span
//               onClick={handleSignup}
//               style={{
//                 color: "#A435F0",
//                 cursor: "pointer",
//                 fontWeight: "bold",
//               }}
//             >
//               Sign up for free!
//             </span>
//           </p>
//         </div>
//       </div>

//       {/* Right Image Section */}
//       <div
//         style={{
//           flex: 1,
//           backgroundColor: "#f9f9f9",
//           display: "flex",
//           alignItems: "center", // vertical center
//           justifyContent: "center", // horizontal center
//           padding: "40px",
//           minHeight: "100vh", // ensure full height
//         }}
//       >
//         <img
//           src={logo} // Replace with your Automated Answer Sheet Evaluation logo
//           alt="Automated Answer Sheet Evaluation"
//           style={{
//             maxWidth: "400px",
//             width: "100%",
//             height: "auto",
//             objectFit: "contain",
//           }}
//         />
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import axios from "axios";
import logo from "../assets/image.png"; // replace with basketball image

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    setError("");
    try {
      const res = await axios.post("http://localhost:4000/api/auth/login", {
        email,
        password,
      });
      onLogin(res.data.user);
    } catch (err) {
      setError(err.response?.data?.error || "Login failed");
    }
  };

  const handleSignup = async () => {
    setError("");
    try {
      await axios.post("http://localhost:4000/api/auth/signup", {
        email,
        password,
      });
      alert("Signup successful! Now login with the same credentials.");
    } catch (err) {
      setError(err.response?.data?.error || "Signup failed");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        width: "100vw", // full width of screen
      }}
    >
      {/* Left Half - Login Form */}
      <div
        style={{
          flex: "1", // takes 50% space
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fff",
          padding: "40px",
        }}
      >
        <div style={{ width: "100%", maxWidth: "350px" }}>
          <h1 style={{ fontSize: "28px", fontWeight: "bold", marginBottom: "10px" }}>
            WELCOME BACK
          </h1>
          <p style={{ color: "#666", marginBottom: "20px" }}>
            Welcome back! Please enter your details.
          </p>

          <label>Email</label>
          <input
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "15px",
              border: "1px solid #ccc",
              borderRadius: "6px",
            }}
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password</label>
          <input
            type="password"
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "15px",
              border: "1px solid #ccc",
              borderRadius: "6px",
            }}
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <p style={{ color: "red" }}>{error}</p>}

          <button
            onClick={handleLogin}
            style={{
              width: "100%",
              padding: "12px",
              backgroundColor: "#F05136",
              color: "#fff",
              border: "none",
              borderRadius: "6px",
              marginBottom: "10px",
              cursor: "pointer",
            }}
          >
            Sign in
          </button>

          <button
            style={{
              width: "100%",
              padding: "12px",
              border: "1px solid #ccc",
              borderRadius: "6px",
              backgroundColor: "#fff",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src="https://developers.google.com/identity/images/g-logo.png"
              alt="Google"
              style={{ width: "18px", marginRight: "8px" }}
            />
            Sign in with Google
          </button>

          <p style={{ fontSize: "12px", marginTop: "10px" }}>
            Don’t have an account?{" "}
            <span
              onClick={handleSignup}
              style={{ color: "#A435F0", cursor: "pointer", fontWeight: "bold" }}
            >
              Sign up for free!
            </span>
          </p>
        </div>
      </div>

      {/* Right Half - Background Image */}
      <div
        style={{
          flex: "1", // takes 50% space
          backgroundImage: `url(${logo})`, // replace with basketball image
          backgroundSize: "cover", // fill half screen
          backgroundPosition: "center",
        }}
      />
    </div>
  );
}
