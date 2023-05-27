import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BannerUpdate from "./pages/BannerUpdate";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="update/banner" element={<BannerUpdate />} />
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />

        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
