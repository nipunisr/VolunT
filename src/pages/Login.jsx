// src/pages/Login.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
 const [formData, setFormData] = useState({
 email: '',
 password: ''
 });

 const handleChange = (e) => {
 const { name, value } = e.target;
 setFormData(prev => ({
 ...prev,
 [name]: value
 }));
 };

 const handleSubmit = (e) => {
 e.preventDefault();
 // Add your login logic here
 console.log('Form submitted:', formData);
 };

 return (
 <div className="w-full ">
 <div className="text-center mb-8">
 <h1 className="text-4xl font-bold text-[#29142C] mb-2">
 Volunteer Login
 </h1>
 </div>

 <form onSubmit={handleSubmit} className="space-y-6">
 <div>
 <label 
 htmlFor="email" 
 className="block text-sm font-medium text-gray-700 mb-1"
 >
 E-Mail
 </label>
 <input
 type="email"
 id="email"
 name="email"
 value={formData.email}
 onChange={handleChange}
 className="w-full px-2 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E17335] focus:border-transparent h-8 text-xs"
 placeholder="E Mail"
 required
 />
 </div>

 <div>
 <label 
 htmlFor="password" 
 className="block text-sm font-medium text-gray-700 mb-1"
 >
 Password
 </label>
 <input
 type="password"
 id="password"
 name="password"
 value={formData.password}
 onChange={handleChange}
 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E17335] focus:border-transparent h-8 text-xs"
 placeholder="Password"
 required
 />
 <div className="mt-1 text-right">
 <Link 
 to="/forgot-password" 
 className="text-sm text-gray-600 hover:text-[#E17335]"
 >
 Forgot Password
 </Link>
 </div>
 </div>

 <button
 type="submit"
 className="w-full bg-[#E17335] text-white py-1 px-4 rounded-md hover:bg-[#E17335] transition-colors duration-200 h-8"
 >
 Login
 </button>

 <div className="text-center">
 <Link 
 to="/register" 
 className="text-sm text-gray-600 hover:text-[#E17335]"
 >
 Don't Have An Account
 </Link>
 </div>
 </form>
 </div>
 );
};

export default Login;

