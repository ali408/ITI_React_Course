import "./register.css";

// function Register() {
//   return (
//     <div className="register">
//       <div className="register-box">
//         <div className="box">
//           <label htmlFor="">Name</label>
//           <input type="text" />
//         </div>
//         <div className="box">
//           <label htmlFor="">Email</label>
//           <input type="email" />
//         </div>
//         <div className="box">
//           <label htmlFor="">Password</label>
//           <input type="password" />
//         </div>
//         <div className="box">
//           <label htmlFor="">Confirm Password</label>
//           <input type="password" />
//         </div>
//         <button className="btn btn-primary mt-3">Register</button>
//       </div>
//     </div>
//   );
// }

// export default Register;
import React, { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePassword = (password) => {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = {};

    if (!validateEmail(formData.email)) {
      errors.email = "Invalid email address";
    }
    if (formData.name.trim() === "") {
      errors.name = "Name is required";
    }
    if (formData.username.trim() === "" || formData.username.includes(" ")) {
      errors.username = "Username is required and must not contain spaces";
    }
    if (!validatePassword(formData.password)) {
      errors.password =
        "Password must be at least 8 characters long and contain at least one uppercase, one lowercase, one digit, and one special character";
    }
    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
    } else {
      // Submit form (e.g., send to API or move to the next step)
      console.log("Form submitted successfully", formData);
    }
  };

  return (
    <div className="register">
      <form onSubmit={handleSubmit} className="register-box">
        <h2>Register</h2>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          {errors.name && <span>{errors.name}</span>}
        </div>
        <div className="box">
          <label>Email address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <span>{errors.email}</span>}
        </div>

        <div>
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
          {errors.username && <span>{errors.username}</span>}
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          {errors.password && <span>{errors.password}</span>}
        </div>
        <div>
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
        </div>
        <button className="btn btn-primary mt-3" type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
