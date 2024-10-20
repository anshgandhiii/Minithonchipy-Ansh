import { useState } from 'react'
import Navbar from './components/navbar';
import Bgi from './bgi.jpg'
import Login from './components/signup'
import Signin from './components/realsign'
import Profile from './components/profile'
import Hero from './components/hero'
import Dash  from './components/dashboard'
import Legal from './components/legal';
import RealTimeTracking from './components/RealTimeTracking';

function App() {
  const navbarHeight = '72px';  // Adjust this to match the actual height of your navbar

  return (
    <div className='min-h-screen w-full' style={{
      backgroundImage: `url(${Bgi})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      <Navbar />

      {/* Add padding to ensure the content starts after the navbar */}
      {/* <div style={{ paddingTop: navbarHeight }}> */}
        <Hero/>
        <Login/>
        <Signin/>
        <Profile/>
        <Dash/>
        <Legal/>
        <RealTimeTracking />
      {/* </div> */}

    </div>
  )
}

export default App
