import LandingPage from "./pages/LandingPage";
import JobDetails from "./pages/JobDetails";
import EmployerDashboard from "./pages/EmployerDashboard";
import CandidateHome from "./pages/CandidateHome";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CandidateSignup from "./pages/CandidateSignup"
import CandidateLogin from "./pages/CandidateLogin";
import EmployerLogin from "./pages/EmployerLogin"
import EmployerSignup from "./pages/EmployerSignup";
import CompanyDetails from "./pages/CompanyDetails/index"

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/jobs" element={<CandidateHome />} />
        <Route path="/jobs/:id" element={<JobDetails />} />
        <Route path="/employer" element={<EmployerDashboard />} />
        <Route path="/employerSignup" element={<EmployerSignup/>} />
        <Route path="/employerLogin" element={<EmployerLogin />} />
        <Route path="/candidateSignup" element={<CandidateSignup/>} />
        <Route path="/candidateLogin" element={<CandidateLogin />} />
        <Route path="/companyDetails" element={<CompanyDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
