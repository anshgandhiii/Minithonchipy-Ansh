import React from 'react';
import { AlertTriangle, Heart, Activity, Users, Scale, Briefcase } from 'lucide-react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const DashboardFeature = ({ icon, title, description }) => (
  <div className="rounded-lg shadow-lg transform transition duration-500 hover:scale-105 bg-base-200">
    <div className="p-10 flex flex-col items-center justify-center">
      <div className="bg-base-100 rounded-full p-4 shadow-lg">
        {icon}
      </div>
      <h3 className="text-xl font-bold mt-4 text-center">{title}</h3>
      <p className="text-gray-500 mt-2 text-center">{description}</p>
    </div>
  </div>
);

const Dashboard = () => {
  const features = [
    {
      icon: <AlertTriangle className="w-8 h-8 text-red-500" />,
      title: "Real-Time Tracking & Safe Routes",
      description: "Share location, send alerts, and find safe routes based on user feedback and official ratings.",
    },
    {
      icon: <Heart className="w-8 h-8 text-pink-500" />,
      title: "Health & Mental Wellness",
      description: "Track menstrual cycles, access health tips, and connect with mental health resources.",
    },
    {
      icon: <Activity className="w-8 h-8 text-green-500" />,
      title: "Fitness & Nutrition Plans",
      description: "Get personalized routines and meal plans to achieve your health goals.",
    },
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: "Community Support",
      description: "Connect with peers, share experiences, and find support in a safe environment.",
    },
    {
      icon: <Scale className="w-8 h-8 text-purple-500" />,
      title: "Legal Assistance",
      description: "Access legal resources, emergency contacts, and guides for dealing with harassment.",
    },
    {
      icon: <Briefcase className="w-8 h-8 text-yellow-500" />,
      title: "Job & Career Support",
      description: "Find resources for professional development, job search, and networking.",
    },
  ];

  return (
    <div className="min-h-screen bg-base-100">
      {/* Hero Section */}
      <header className="relative">
        <img src="https://plus.unsplash.com/premium_photo-1679429321023-dff2ea455b0c?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Header Image" className="w-full object-cover h-64 sm:h-96" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white">Raksha</h1>
            {/* <p className="text-white mt-4">Empowering women with tools for safety, health, and success</p> */}
            <div className="mt-6">
              <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition">Get Started</button>
              <button className="ml-4 bg-gray-200 text-gray-800 px-6 py-2 rounded-md hover:bg-gray-300 transition">Learn More</button>
            </div>
          </div>
        </div>
      </header>

      {/* Features Carousel */}
      <main className="max-w-7xl mx-auto py-12 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Our Key Features
          </p>
        </div>

        {/* Carousel */}
        <div className="carousel w-full">
          <Carousel showThumbs={false} autoPlay infiniteLoop>
            {features.map((feature, index) => (
              <div key={index} className="carousel-item">
                <DashboardFeature {...feature} />
              </div>
            ))}
          </Carousel>
        </div>
      </main>

      
    </div>
  );
};

export default Dashboard;
