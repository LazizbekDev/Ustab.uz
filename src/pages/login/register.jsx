import React, { useEffect, useState } from "react";
import "./login.css";
import { onAuthStateChanged, signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { auth, googleProvider } from "../../firebase";

const Register = () => {
    const [formData, setFormData] = useState({});
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(""); // Muvaffaqiyat xabari uchun
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log("User already signed in:", user.email);
                navigate("/dashboard");
            }
        });
        return () => unsubscribe();
    }, [navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password, confirm_password } = formData;

        if (password !== confirm_password) {
            setError("Passwords do not match!");
            return;
        }

        try {
            await createUserWithEmailAndPassword(auth, email, password);
            setSuccess("Registration successful! Redirecting to dashboard...");
            console.log("User registered successfully!");
            navigate("/dashboard");
        } catch (err) {
            setError(err.message);
        }
    };

    const handleGoogleLogin = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
            console.log("Google Sign-In successful!");
            navigate("/dashboard");
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="ring-wrapper">
            <div className="ring">
                <i style={{ clr: "#00ff0a" }} />
                <i style={{ clb: "#ff0057" }} />
                <i style={{ clt: "#fffd44" }} />
                <form onSubmit={handleSubmit} className="login">
                    <h2>Sign Up</h2>
                    <div className="inputBx">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="inputBx">
                        <input
                            type="password"
                            id="password"
                            name="password"
                            onChange={handleChange}
                            placeholder="Enter your password"
                            required
                            minLength={8}
                            maxLength={32}
                        />
                    </div>
                    <div className="inputBx">
                        <input
                            type="password"
                            id="confirm_password"
                            name="confirm_password"
                            onChange={handleChange}
                            placeholder="Confirm your password"
                            required
                            minLength={8}
                            maxLength={32}
                        />
                    </div>
                    <div className="inputBx">
                        <input type="submit" value="Sign Up" />
                    </div>

                    <div className="inputBx">
                        <div className="links">
                            <Link to={"/login"}>Sign In</Link>

                            <button
                                type="button"
                                onClick={handleGoogleLogin}
                                className="google-btn"
                            >
                                <FaGoogle />
                            </button>
                        </div>
                        {error && <p className="error-message">{error}</p>}
                        {success && <p className="success-message">{success}</p>}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
