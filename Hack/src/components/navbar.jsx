import React, { useEffect, useState } from 'react';
import { User } from 'lucide-react';
import Profile from './img/profile.jpg';

const Navbar = () => {
    const [visible, setVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    // Alert Button Handler
    const handleAlertClick = () => {
        alert('Baachaoo Baachaoo');
    };

    const handleScroll = () => {
        if (window.scrollY > lastScrollY) {
            setVisible(false); // Scrolling down
        } else {
            setVisible(true); // Scrolling up
        }
        setLastScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    return (
        <header
            className={`fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-gray-500 py-3 md:top-6 md:rounded-3xl lg:max-w-screen-lg backdrop-blur-sm bg-white/10 transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'}`}
        >
            <div className="px-4">
                <div className="flex items-center justify-between">
                    <div className="flex shrink-0">
                        <a aria-current="page" className="flex items-center" href="/">
                            <img
                                className="h-7 w-auto"
                                src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                                alt="Logo"
                            />
                            <p className="sr-only">Website Title</p>
                        </a>
                    </div>
                    {/* Centered Links Section */}
                    <div className="hidden md:flex flex-1 items-center justify-center gap-8 pl-10">
                        <a
                            aria-current="page"
                            className="inline-block rounded-lg px-2 py-1 text-md font-bold transition-all duration-200 hover:bg-gray-100 hover:rounded-full"
                            href="#"
                            style={{ color: '#D4EBFD', fontFamily: 'Montserrat, sans-serif' }} // Cyan color and custom font
                        >
                            How it works
                        </a>
                        <a
                            className="inline-block rounded-lg px-2 py-1 text-md font-bold transition-all duration-200 hover:bg-gray-100 hover:rounded-full"
                            href="#"
                            style={{ color: '#D4EBFD', fontFamily: 'Montserrat, sans-serif' }} // Cyan color and custom font
                        >
                            Pricing
                        </a>
                        <a
                            className="inline-block rounded-lg px-2 py-1 text-md font-bold transition-all duration-200 hover:bg-gray-100 hover:rounded-full"
                            href="#"
                            style={{ color: '#D4EBFD', fontFamily: 'Montserrat, sans-serif' }} // Cyan color and custom font
                        >
                            Do it
                        </a>
                    </div>
                    <div className="flex items-center justify-end gap-3">
                        <a
                            className="hidden items-center justify-center rounded-xl bg-white px-3 py-2 text-sm font-bold text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 transition-all duration-150 hover:bg-gray-50 hover:rounded-full sm:inline-flex"
                            href="/login"
                        >
                            Sign in
                        </a>
                        <a
                            className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-3 py-2 text-sm font-bold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 hover:rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                            href="/login"
                        >
                            Login
                        </a>
                        {/* Alert Button */}
                        <button
                            onClick={handleAlertClick}
                            className="inline-flex items-center justify-center rounded-full bg-red-600 px-3 py-2 text-sm font-bold text-white shadow-sm transition-all duration-150 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2"
                        >
                            Alert
                        </button>
                        <button className="inline-flex items-center justify-center rounded-full bg-gray-200 p-2 w-10 h-10 text-gray-600 transition-all duration-150 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2">
                            <img
                                src={Profile}
                                alt="Profile"
                                className="w-full h-full object-cover rounded-full "
                            />
                            <span className="sr-only">Profile</span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
