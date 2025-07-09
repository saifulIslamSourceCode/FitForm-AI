import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styles from "../style/Register.module.css";

export default function Register() {
  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/api/register", { email, password });
      alert("Registration successful! Please login.");
      navigate("/login");
    } catch (error) {
      alert("Registration failed. Try again.");
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <h2 className={styles.title}>Create Your Account</h2>

        <form onSubmit={handleSubmit}>
          <div className={styles.inputWrapper}>
            <input
              type="email"
              placeholder="Email address"
              className={styles.inputField}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className={styles.inputWrapper}>
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
            Register
          </button>
        </form>

        <p className={styles.footerText}>
          Already have an account?{" "}
          <span onClick={() => navigate("/login")} className={styles.link}>
            Log in here
          </span>
        </p>
      </div>
    </div>
  );
}
