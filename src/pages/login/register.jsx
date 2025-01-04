import React, { useState } from "react";

const Register = () => {
    const [formData, setFormData] = useState({});

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">{"email"}</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="password">{"password"}</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    onChange={handleChange}
                    placeholder="enter your password"
                    required
                    minLength={8}
                    maxLength={32}
                />
            </div>
            <div>
                <label htmlFor="confirm_password">{"confirm password"}</label>
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
            <button type="submit">Submit</button>
        </form>
    );
};

export default Register;
