import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Mail, Lock } from "lucide-react";
import styles from "../style/Login.module.css"; 

export default function Login() {
  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/api/login", {
        email,
        password,
      });
      localStorage.setItem("token", res.data.token);
      navigate("/dashboard");
    } catch {
      alert("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <h2 className={styles.title}>Login to FitForm AI</h2>

        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div className={styles.inputWrapper}>
            <Mail size={18} className={styles.icon} />
            <input
              type="email"
              placeholder="Email address"
              className={styles.inputField}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password */}
          <div className={styles.inputWrapper}>
            <Lock size={18} className={styles.icon} />
            <input
              type="password"
              placeholder="Password"
              className={styles.inputField}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className={styles.button}>
            Log In
          </button>
        </form>

        <p className={styles.footerText}>
          Don't have an account?{" "}
          <span
            onClick={() => navigate("/register")}
            className={styles.link}
          >
            Register here
          </span>
        </p>
      </div>
    </div>
  );
}