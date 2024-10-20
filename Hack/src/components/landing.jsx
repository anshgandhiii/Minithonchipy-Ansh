import React from 'react';
import { Shield, Heart, Dumbbell, Users, Scale, Briefcase, ImageOff, Import } from 'lucide-react';
import Navbar from './navbar';
import HeroSection from './hero';
const LandingPage = () => {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-100 text-gray-800">
      <header className="container mx-auto py-8">
        <h1 className="text-4xl font-bold text-center text-purple-600">EmpowerHer</h1>
        <p className="text-xl text-center mt-2 text-gray-600">Your companion for security and wellness</p>
      </header>

      <main className="container mx-auto mt-12">
        <section className="text-center mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-purple-700">Empowering You Every Step of the Way</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            We've got your back with smart tracking, health tips, and a supportive community. 
            Because when you feel safe and healthy, you can conquer the world!
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: Shield, title: "Smart Tracking", description: "Keep your squad in the loop, just in case" },
            { icon: Heart, title: "Wellness Buddy", description: "Period tracking and mood boosters at your fingertips" },
            { icon: Dumbbell, title: "Fit & Fab", description: "Fun workouts and yummy meal ideas to keep you glowing" },
            { icon: Users, title: "Girl Gang", description: "Connect, share, and grow with awesome women like you" },
            { icon: Scale, title: "Got Your Back", description: "Legal info and support when you need it most" },
            { icon: Briefcase, title: "Career Kickstart", description: "Level up your skills and network like a boss" }
          ].map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <feature.icon className="w-12 h-12 mb-4 mx-auto text-purple-500" />
              <h3 className="text-xl font-semibold mb-2 text-purple-600">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </main>

      <footer className="mt-16 py-8 bg-purple-100">
        <div className="container mx-auto text-center">
          <p className="text-gray-600">Ready to start your empowerment journey?</p>
          <button className="mt-4 bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-6 rounded-full transition-colors duration-300">
            Join the Squad
          </button>
        </div>
      </footer>
    </div>
    </>
  );
};

export default LandingPage;