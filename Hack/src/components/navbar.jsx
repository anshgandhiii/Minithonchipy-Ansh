import React from 'react';
import { User } from 'lucide-react';

const Navbar = () => {
    return (
        <header className="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-gray-400 py-3 md:top-6 md:rounded-3xl lg:max-w-screen-lg backdrop-blur-sm bg-white/10">
            <div className="px-4">
                <div className="flex items-center justify-between">
                    <div className="flex shrink-0">
                        <a aria-current="page" className="flex items-center" href="/">
                            <img
                                className="h-7 w-auto"
                                src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                                alt=""
                            />
                            <p className="sr-only">Website Title</p>
                        </a>
                    </div>
                    {/* Centered Links Section */}
                    <div className="hidden md:flex flex-1 items-center justify-center gap-8 pl-10">
                        <a
                            aria-current="page"
                            className="inline-block rounded-lg px-2 py-1 text-md font-bold text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-black hover:rounded-full"
                            href="#"
                        >
                            How it works
                        </a>
                        <a
                            className="inline-block rounded-lg px-2 py-1 text-md font-bold text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-black hover:rounded-full"
                            href="#"
                        >
                            Pricing
                        </a>
                        <a
                            className="inline-block rounded-lg px-2 py-1 text-md font-bold text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-black hover:rounded-full"
                            href="#"
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
                        <button className="inline-flex items-center justify-center rounded-full bg-gray-200 p-2 text-gray-600 transition-all duration-150 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2">
                            <User size={24} />
                            <span className="sr-only">Profile</span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;