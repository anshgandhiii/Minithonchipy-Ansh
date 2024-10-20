import Login from './components/signup'
import Signin from './components/realsign'
import Profile from './components/profile'
import Hero from './components/hero'
import Dash  from './components/dashboard'
import WomenSupport from './components/womenSupport';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from './components/Layout'

function App() {
  const navbarHeight = '72px';  // Adjust this to match the actual height of your navbar

  return (
    <Router>
      <Routes>
        {/* Wrap the Layout component around routes */}
        <Route path="login" element={<Login />} />
        <Route path="signin" element={<Signin />} />
        <Route path="/" element={<Layout />}>
          {/* Nested routes */}
          <Route index element={<Dash />} />
          <Route path="support" element={<WomenSupport />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
