import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Admin from './pages/Admin';
import BannerUpdate from './pages/BannerUpdate';
import Login from './pages/Login';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="about" element={<h1>About</h1>} />
        <Route path="login" element={<Login/>} />
        <Route path="admin" element={<Admin/>} />
        <Route path="admin/banner" element={<BannerUpdate/>} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
