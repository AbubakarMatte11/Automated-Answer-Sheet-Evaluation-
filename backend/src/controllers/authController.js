// TEMP "DB" in memory. We'll replace later.
let users = [
  { email: "teacher@test.com", password: "123456", role: "teacher" },
];

export const signup = (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(400).json({ error: "Email and password required" });
  if (users.find((u) => u.email === email)) {
    return res.status(400).json({ error: "User already exists" });
  }
  users.push({ email, password, role: "teacher" });
  return res.json({
    message: "Signup successful",
    user: { email, role: "teacher" },
  });
};

export const login = (req, res) => {
  const { email, password } = req.body;
  const user = users.find((u) => u.email === email && u.password === password);
  if (!user) return res.status(401).json({ error: "Invalid credentials" });
  // In real life, return a JWT. For now, a simple object:
  return res.json({
    message: "Login successful",
    user: { email: user.email, role: user.role },
  });
};
