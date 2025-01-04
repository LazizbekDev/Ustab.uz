import React from "react";
import { Link } from "react-router-dom";

function home() {
    return (
        <body>
            <div className="app-container">
                {/* Navbar */}
                <nav className="navbar">
                    <div className="navbar-brand">Ustab.uz</div>
                    <div className="navbar-links">
                        <Link to='/login' className="btn login-btn">
                            Login
                        </Link>
                        <Link to='/register' className="btn register-btn">
                            Register
                        </Link>
                    </div>
                </nav>

                {/* Hero Section */}
                <header className="hero">
                    <h1>Welcome to Our Platform</h1>
                    <p>
                        Your journey starts here. Build something amazing with
                        us!
                    </p>
                    <button className="btn hero-btn">Get Started</button>
                </header>
            </div>
        </body>
    );
}

export default home;
