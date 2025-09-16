import React from 'react';
import { AlertTriangle, Heart, Activity, Users, Scale, Briefcase } from 'lucide-react';

const DashboardCard = ({ icon, title, description, color }) => (
  <div className={`card bg-base-100 shadow-xl`}>
    <figure className={`px-10 pt-10 ${color} text-primary-content rounded-t-xl`}>
      <div className="rounded-full bg-base-100 p-3">
        {icon}
      </div>
    </figure>
    <div className="card-body items-center text-center">
      <h2 className="card-title">{title}</h2>
      <p>{description}</p>
      <div className="card-actions">
        <button className="btn btn-primary">Learn More</button>
      </div>
    </div>
  </div>
);

const Dashy = () => {
  const features = [
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: "Real-Time Tracking & Safe Routes",
      description: "Share location, send alerts, and find safe routes based on user feedback and official ratings.",
      color: "bg-red-500"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Health & Mental Wellness",
      description: "Track menstrual cycles, access health tips, and connect with mental health resources.",
      color: "bg-pink-500"
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Fitness & Nutrition Plans",
      description: "Get personalized routines and meal plans to achieve your health goals.",
      color: "bg-green-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Support",
      description: "Connect with peers, share experiences, and find support in a safe environment.",
      color: "bg-blue-500"
    },
    {
      icon: <Scale className="w-8 h-8" />,
      title: "Legal Assistance",
      description: "Access legal resources, emergency contacts, and guides for dealing with harassment.",
      color: "bg-purple-500"
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Job & Career Support",
      description: "Find resources for professional development, job search, and networking.",
      color: "bg-yellow-500"
    }
  ];

  return (
    <div className="min-h-screen bg-base-200 p-6">
      <div className="navbar bg-base-100 rounded-box mb-8">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Women's Safety India</a>
        </div>
        <div className="flex-none">
          <button className="btn btn-ghost mr-2">Login</button>
          <button className="btn btn-primary">Sign Up</button>
        </div>
      </div>

      <div className="hero bg-base-100 rounded-box mb-8">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Women's Safety Dashboard</h1>
            <p className="py-6">Empowering women with tools for safety, health, and success.</p>
            <div className="flex justify-center gap-2">
              <div className="badge badge-outline">Safe</div>
              <div className="badge badge-outline">Supportive</div>
              <div className="badge badge-outline">Empowering</div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <DashboardCard key={index} {...feature} />
        ))}
      </div>
    </div>
  );
};

export default Dashy;