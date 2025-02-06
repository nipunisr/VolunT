// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthLayout from './layouts/AuthLayout';
import Login from './pages/Login';
import VerifyEmail from './pages/VerifyEmail';

const App = () => {
 return (
 <BrowserRouter>
 <Routes>
 <Route element={<AuthLayout />}>
 <Route path="/login" element={<Login />} />
 <Route path="/verifyemail" element={<VerifyEmail />} />
 {/* Add other auth routes here (register, forgot-password, etc.) */}
 </Route>
 </Routes>
 </BrowserRouter>
 );
};

export default App;

