import Login from './components/signup'
import Signin from './components/realsign'
import Profile from './components/profile'
import Hero from './components/hero'
import Dash  from './components/dashboard'
import WomenSupport from './components/womenSupport';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from './components/Layout'
import Dashboard from './components/dashboard'

function App() {
  const navbarHeight = '72px';  // Adjust this to match the actual height of your navbar

  return (
    <Router>
      <Routes>
        {/* Wrap the Layout component around routes */}
        <Route path="login" element={<Login />} />
        <Route path="signin" element={<Signin />} />
        
        <Route path="/dashboard" element={<Dashboard/>}>
          {/* Nested routes */}
          <Route index element={<Dash />} />
          <Route path="support" element={<WomenSupport />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="/" element={<Layout />}/>
      </Routes>
    </Router>
  )
}

export default App
