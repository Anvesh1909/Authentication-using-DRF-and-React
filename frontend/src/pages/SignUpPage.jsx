import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../api';

const SignupPage = () => {
    const [formData, setFormData] = useState({ username: '', email: '', password: '' });
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await register(formData);
            navigate('/login');
        } catch {
            alert('Registration failed');
        }
    };

    return (
        <div>
            <h2>Signup</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="username" placeholder="Enter Username" value={formData.username} onChange={(e) => setFormData({ ...formData, username: e.target.value })} required />
                <input type="email" name="email" placeholder="Enter Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
                <input type="password" name="password" placeholder="Enter Password" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} required />
                <button type="submit">Signup</button>
            </form>
        </div>
    );
};

export default SignupPage;
