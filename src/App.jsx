// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthLayout from './layouts/AuthLayout';
import Login from './pages/Login';
import VerifyEmail from './pages/VerifyEmail';
import CreateAccount from './pages/CreateAccount';
import EmailCode from './pages/EmailCode';
import VerificationSuccess from './pages/EmailSuccess';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import PasswordUpdated from './pages/UpdatePassword';
import MainLayout from "./layouts/VolunteerLayout";
import HomePage from "./pages/VolunteerDashboard";
import EventPage from './pages/Opportunity';
import MyEvents from './pages/MyEvents';

const App = () => {
 return (
 <BrowserRouter>
 <Routes>
 <Route element={<AuthLayout />}>
   <Route path="/login" element={<Login />} />
   <Route path="/verify-email" element={<VerifyEmail />} />
   <Route path="/create-account" element={<CreateAccount />} />
   <Route path="/email-code" element={<EmailCode/>} />
   <Route path="/email-success" element={<VerificationSuccess/>} />
   <Route path="/forgot-password" element={<ForgotPassword/>} />
   <Route path="/reset-password" element={<ResetPassword/>} />
   <Route path="/update-password" element={<PasswordUpdated/>} />
 </Route>
 
<Route element={<MainLayout />}>
  <Route path="/" element={<HomePage />} />
  <Route path='/selected-opportunity' element={<EventPage/>}/>
  <Route path='/my-events' element={<MyEvents/>}/>
</Route>
  
       {/* <Route element={<VolunteerLayout />}>
          
          <Route path="/events" element={<MyEventsPage />} />
          <Route path="/notifications" element={<NotificationsPage />} />
          <Route path="/about" element={<AboutUsPage />} />
           Add more routes as needed */}
       

 </Routes>
 </BrowserRouter>
 );
};

export default App;

