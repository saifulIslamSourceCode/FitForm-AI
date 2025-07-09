
import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    height: '',
    weight: '',
    gender: '',
    age: '',
    location: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3000/api/users/register', formData);
      console.log(res.data);
      // Handle success (e.g., redirect to login)
    } catch (err) {
      console.error(err);
      // Handle error
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" name="email" placeholder="Email" onChange={handleChange} />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} />
      <input type="number" name="height" placeholder="Height (cm)" onChange={handleChange} />
      <input type="number" name="weight" placeholder="Weight (kg)" onChange={handleChange} />
      <input type="text" name="gender" placeholder="Gender" onChange={handleChange} />
      <input type="number" name="age" placeholder="Age" onChange={handleChange} />
      <input type="text" name="location" placeholder="Location" onChange={handleChange} />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
