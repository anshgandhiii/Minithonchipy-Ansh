// src/components/Layout.jsx
import { Outlet } from "react-router-dom";
import Navbar from "./navbar";

const Layout = () => {
    const navbarHeight = '72px';
  return (
    <div style={{ paddingTop: navbarHeight }}> 
      <Navbar />
      <Outlet />
      <footer className="bottom-0 w-full bg-base text-center p-4">
        <p>© 2024 Raksha-ChaiPy</p>
      </footer>
    </div>
  );
};

export default Layout;


{/* <div className='min-h-screen w-full' style={{
backgroundImage: `url(${Bgi})`,
backgroundSize: 'cover',
backgroundPosition: 'center',
}}></div> */}