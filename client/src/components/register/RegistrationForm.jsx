import React, { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateEmail = (email) => {
    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    let valid = true;
    const updatedErrors = {
      email: '',
      password: '',
      confirmPassword: '',
    };

    if (!validateEmail(formData.email)) {
      valid = false;
      updatedErrors.email = 'Invalid email format';
    }

    if (formData.password.length < 6) {
      valid = false;
      updatedErrors.password = 'Password must be at least 6 characters long';
    }

    if (formData.password !== formData.confirmPassword) {
      valid = false;
      updatedErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(updatedErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Perform registration logic here
      console.log('Registration successful');
      // Reset form data
      setFormData({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    } else {
      console.log('Registration failed. Please check the form for errors.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <div className="error">{errors.email}</div>
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <div className="error">{errors.password}</div>
      </div>
      <div>
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        <div className="error">{errors.confirmPassword}</div>
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
