import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Admin from './pages/admin/Admin';
import BannerUpdate from './pages/admin/BannerUpdate';
import Login from './pages/admin/Login';
import Signup from './pages/admin/Signup';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="signup" element={<Signup/>} />
        <Route path="login" element={<Login/>} />
        <Route path="dashboard" element={<Admin/>} />
        <Route path="update/banner" element={<BannerUpdate/>} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
