// src/components/Login/Login.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Import custom CSS if needed

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        // Validate username and password
        if ( password === 'niss123') {
            // Redirect to the dashboard
            navigate('/dashboard');
        } else {
            // Show error message
            setError('Invalid username or password');
        }
    };

    return (
        <div className="login-page">
         
            <form className="login-form" onSubmit={handleLogin}>
            <h1 >Login</h1>
                {/* <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Enter your username"
                        required
                    />
                </div> */}
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        required
                    />
                </div>
                {error && <p className="error-message">{error}</p>}
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
    );
};

export default Login;
