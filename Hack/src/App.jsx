import Login from './components/signup'
import Signin from './components/realsign'
import Profile from './components/profile'
import Dash  from './components/dashboard'
import WomenSupport from './components/womenSupport';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Legal from './components/legal';
import RealTimeTracking from './components/RealTimeTracking';
import Layout from './components/Layout'
import Land from './components/landing'
import JobAndCareerSupport from './components/JobAndCareerSupport';
import Dashboard from './components/dashboard'

function App() {
  const navbarHeight = '72px'; // Adjust this to match the actual height of your navbar
  // const navbarHeight = '72px';  // Adjust this to match the actual height of your navbar

  return (
    <Router>
      <Routes>
        {/* Wrap the Layout component around routes */}
        <Route path="login" element={<Login />} />
        <Route path="signin" element={<Signin />} />
        <Route path="" element={<Land/>} />
        <Route path="u" element={<Layout />}>
        
          <Route index element={<Dashboard/>} />
          <Route path="support" element={<WomenSupport />} />
          <Route path="profile" element={<Profile />} />
          <Route path="legal" element={<Legal />} />
          <Route path="realtime-tracking" element={<RealTimeTracking />} />
          <Route path="carrer" element={<JobAndCareerSupport />} />
        </Route>
        
          {/* Nested routes */}
      </Routes>
    </Router>
  ); 
  };
export default App;
