import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import useAuth from "./hooks/useAuth";
import { Loader } from "./utilities/loader";
import NotFound from "./pages/NotFound";
import { Cyber } from "./pages/variant_x/cyber";
import { Bm } from "./pages/variant_x/bm";
import { Buying } from "./pages/variant_x/buying";
import { Behruz } from "./pages/variant_x/Behruz";
import { DataStructure } from "./pages/variant_x/data";
import { Bp } from "./pages/variant_x/Bp";
import { Web } from "./pages/variant_x/web";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const LoginForm = lazy(() => import("./pages/login/login"));
const RegisterForm = lazy(() => import("./pages/login/register"));
const Home = lazy(() => import("./pages/home"));

function App() {
    useAuth(); // Custom hook for authentication handling

    return (
        <Suspense fallback={<Loader />}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/register" element={<RegisterForm />} />
                <Route path="/c" element={<Cyber/>} />
                <Route path="/s" element={<Buying/>} />
                <Route path="/z" element={<Web/>} />
                <Route path="/bm" element={<Bm/>} />
                <Route path="/zokirovfx" element={<Behruz/>} />
                <Route path="/b" element={<DataStructure/>} />
                <Route path="/bp" element={<Bp/>} />
                <Route
                    path="/dashboard"
                    element={
                        <ProtectedRoute>
                            <Dashboard />
                        </ProtectedRoute>
                    }
                />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Suspense>
    );
}

export default App;
