import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BannerUpdate from "./pages/BannerUpdate";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Speakers from "./pages/Speakers";
import Events from "./pages/Events";
import Registrations from "./pages/Registrations";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Events />} />
        <Route path="/event/:eventId/:eventName">
          <Route index element={<Dashboard />} />
          <Route path="registrations" element={<Registrations />} />
          <Route path="speakers" element={<Speakers />} />
          <Route path="banner" element={<BannerUpdate />} />
        </Route>
        <Route path="update">
          <Route index element={<Dashboard />} />
          <Route path="banner" element={<BannerUpdate />} />
          <Route path="speakers" element={<Speakers />} />
        </Route>
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />

        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
