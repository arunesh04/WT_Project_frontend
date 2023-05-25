import React, { useState } from 'react';
import '../cssfiles/UserRegistration.css'; // Import the CSS file

const UserRegistration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobno, setMobNo] = useState('');
  const [password, setPassword] = useState('');
  const [city, setCity] = useState('');
  const [region, setRegion] = useState('');

  const handleRegistration = (event) => {
    event.preventDefault();

    // Perform registration logic here
    // You can access the form values from the state variables (name, email, mobno, password, city, region)
  };

  return (
    <div className="container">
      <div className="registration-form">
        <div className="image-container">
          <img src="path/to/image" alt="Registration" />
        </div>
        <div className="form-container">
          <h2>Register</h2>
          <form onSubmit={handleRegistration}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="mobno">Mobile Number</label>
              <input
                type="tel"
                id="mobno"
                value={mobno}
                onChange={(e) => setMobNo(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="city">City</label>
              <input
                type="text"
                id="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="region">Region</label>
              <input
                type="text"
                id="region"
                value={region}
                onChange={(e) => setRegion(e.target.value)}
                required
              />
            </div>
            <button type="submit">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserRegistration;
