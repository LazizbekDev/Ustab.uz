import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import useAuth from './hooks/useAuth';

const Dashboard = lazy(() => import('./pages/Dashboard'));
const LoginForm = lazy(() => import('./pages/login/login'));

function App() {
  useAuth(); // Custom hook for authentication handling

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Suspense>
  );
}

export default App;
