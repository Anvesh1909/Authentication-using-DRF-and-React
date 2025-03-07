import { createContext, useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import { login, refreshToken } from '../api';
import LoginPage from '../pages/LoginPage';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [authTokens, setAuthTokens] = useState(() => 
        localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null
    );

    const [user, setUser] = useState(() => 
        authTokens ? jwtDecode(authTokens.access) : null
    );

    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const loginUser = async (e) => {
        e.preventDefault();
        const credentials = {
            username: e.target.username.value,
            password: e.target.password.value
        };
        try {
            const response = await login(credentials);
            setAuthTokens(response.data);
            setUser(jwtDecode(response.data.access));
            localStorage.setItem('authTokens', JSON.stringify(response.data));
            navigate('/');
        } catch {
            alert('Invalid credentials');
        }
    };

    const logoutUser = () => {
        setAuthTokens(null);
        setUser(null);
        localStorage.removeItem('authTokens');
        navigate('/login');
    };

    const updateToken = async () => {
        if (!authTokens?.refresh) {
            logoutUser();
            return;
        }

        try {
            const response = await refreshToken(authTokens.refresh);
            setAuthTokens(response.data);
            setUser(jwtDecode(response.data.access));
            localStorage.setItem('authTokens', JSON.stringify(response.data));
        } catch {
            logoutUser();
        }
        
        if (loading) setLoading(false);
    };

    useEffect(() => {
        if (loading) updateToken();

        const interval = setInterval(() => {
            if (authTokens) updateToken();
        }, 1000 * 60 * 4);

        return () => clearInterval(interval);
    }, [authTokens, loading]);

    return (
        <AuthContext.Provider value={{ user, authTokens, loginUser, logoutUser }}>
            {loading ? <LoginPage /> : children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
