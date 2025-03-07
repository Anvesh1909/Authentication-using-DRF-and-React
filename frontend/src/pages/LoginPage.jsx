import React, { useState, useContext } from 'react';
import AuthContext from '../context/AuthContext';

const LoginPage = () => {
    const { loginUser } = useContext(AuthContext);
    const [formData, setFormData] = useState({ username: '', password: '' });

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={loginUser}>
                <input type="text" name="username" placeholder="Enter Username" value={formData.username} onChange={(e) => setFormData({ ...formData, username: e.target.value })} required />
                <input type="password" name="password" placeholder="Enter Password" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} required />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginPage;
