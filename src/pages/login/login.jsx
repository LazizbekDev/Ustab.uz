import React, { useState, useEffect } from "react";
import {
    signInWithEmailAndPassword,
    signInWithPopup,
    onAuthStateChanged,
} from "firebase/auth";
import { auth, googleProvider } from "../../firebase";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import "./login.css";

// Debounce function to improve input performance
const debounce = (func, delay) => {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), delay);
    };
};

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    // Debounced change handlers
    const handleEmailChange = debounce((e) => setEmail(e.target.value), 300);
    const handlePasswordChange = debounce(
        (e) => setPassword(e.target.value),
        300
    );

    // Redirect user if already signed in
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                navigate("/dashboard");
            }
        });
        return () => unsubscribe();
    }, [navigate]);

    // Handle user login with email and password
    const handleLogin = async (e) => {
        e.preventDefault();
        setError(""); // Clear previous errors
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/dashboard");
        } catch (err) {
            setError("Failed to login. Please check your credentials.");
        }
    };

    // Handle Google Sign-In
    const handleGoogleLogin = async () => {
        setError(""); // Clear previous errors
        try {
            await signInWithPopup(auth, googleProvider);
            navigate("/dashboard");
        } catch (err) {
            setError("Failed to login with Google. Please try again.");
        }
    };

    return (
        <div className="ring-wrapper">
            <div className="ring">
                <i style={{ backgroundColor: "#00ff0a" }} />
                <i style={{ backgroundColor: "#ff0057" }} />
                <i style={{ backgroundColor: "#fffd44" }} />
                <form onSubmit={handleLogin} className="login">
                    <h2>Sign In</h2>
                    <div className="inputBx">
                        <input
                            type="email"
                            placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="inputBx">
                        <input
                            type="password"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="inputBx">
                        <input type="submit" defaultValue={"Sign In"}/>
                    </div>

                    <div className="inputBx">
                        <div className="links">
                            <Link to="/reset-password">Forgot Password?</Link>
                            <Link to="/register">Sign Up</Link>

                            <button
                                type="button"
                                onClick={handleGoogleLogin}
                                className="google-btn"
                            >
                                <FaGoogle /> 
                            </button>
                        </div>
                        {error && <p className="error-message">{error}</p>}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
