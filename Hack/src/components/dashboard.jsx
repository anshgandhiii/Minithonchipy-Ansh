import React, { useState, useEffect } from 'react';
import { AlertTriangle, Heart, Activity, Users, Scale, Briefcase, Share2, Lightbulb, Book, ChevronLeft, ChevronRight, Menu } from 'lucide-react';

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

const EmpowermentFeature = ({ icon, title, onClick }) => (
  <button
    onClick={onClick}
    className="flex flex-col items-center justify-center p-4 bg-base-100 rounded-lg shadow-md hover:bg-base-200 transition duration-300 mx-auto"
    style={{ minWidth: '200px' }} // Optional: set a min width for consistency
  >
    {icon}
    <span className="mt-2 text-sm font-medium text-purple-800">{title}</span>
  </button>
);

const Carousel = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % React.Children.count(children));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + React.Children.count(children)) % React.Children.count(children));
  };

  useEffect(() => {
    let intervalId;
    if (isAutoPlaying) {
      intervalId = setInterval(nextSlide, 5000);
    }
    return () => clearInterval(intervalId);
  }, [isAutoPlaying]);

  return (
    <div className="relative w-full" onMouseEnter={() => setIsAutoPlaying(false)} onMouseLeave={() => setIsAutoPlaying(true)}>
      <div className="overflow-hidden">
        <div className="flex transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {React.Children.map(children, (child) => (
            <div className="flex justify-center items-center w-full flex-shrink-0">{child}</div>
          ))}
        </div>
      </div>
      <button onClick={prevSlide} className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2">
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button onClick={nextSlide} className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2">
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
};
import { Link } from 'react-router-dom';

// Inside the Sidebar component
const Sidebar = ({ features, activeFeature, setActiveFeature }) => (
  <div className="bg-base-800 w-64 p-6 h-screen text-black shadow-lg border-gray">
    <h2 className="text-2xl font-bold mb-4">Features</h2>
    <ul>
      {features.map((feature, index) => (
        <li key={index} className="mb-2">
          <Link
            to={feature.route} // Add the route here
            onClick={() => setActiveFeature(index)}
            className={`flex items-center w-full text-left p-2 rounded transition duration-200 hover:bg-gray-700 ${activeFeature === index ? 'bg-purple-600' : ''}`}
          >
            <span className="mr-2">{feature.icon}</span>
            <span>{feature.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  </div>
);


const Dashboard = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', content: '' });
  const [activeFeature, setActiveFeature] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const features = [
    {
      icon: <AlertTriangle className="w-8 h-8 text-red-500" />,
      title: "Real-Time Tracking & Safe Routes",
      description: "Share location, send alerts, and find safe routes based on user feedback and official ratings.",
      route: "/u/realtime-tracking", // Added route
    },
    {
      icon: <Heart className="w-8 h-8 text-pink-500" />,
      title: "Health & Mental Wellness",
      description: "Track menstrual cycles, access health tips, and connect with mental health resources.",
      route: "/u/mentalHealth", // Added route
    },
    {
      icon: <Activity className="w-8 h-8 text-green-500" />,
      title: "Fitness & Nutrition Plans",
      description: "Get personalized routines and meal plans to achieve your health goals.",
      route: "/u/fit", // Added route
    },
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: "Community Support",
      description: "Connect with peers, share experiences, and find support in a safe environment.",
      route: "/u/support", // Added route
    },
    {
      icon: <Scale className="w-8 h-8 text-purple-500" />,
      title: "Legal Assistance",
      description: "Access legal resources, emergency contacts, and guides for dealing with harassment.",
      route: "/u/legal", // Added route
    },
    {
      icon: <Briefcase className="w-8 h-8 text-yellow-500" />,
      title: "Job & Career Support",
      description: "Find resources for professional development, job search, and networking.",
      route: "/u/carrer", // Added route
    },
  ];
  

  const empowermentFeatures = [
    {
      icon: <Share2 className="w-6 h-6 text-purple-600" />,
      title: "Share Your Story",
      content: "A platform for women to share their experiences, challenges, and triumphs. Your story can inspire others!"
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-purple-600" />,
      title: "Daily Inspiration",
      content: "There is no limit to what we, as women, can accomplish.~Michelle Obama"
    },
    {
      icon: <Book className="w-6 h-6 text-purple-600" />,
      title: "Learn & Grow",
      content: "Explore the fitness tab."
    }
  ];

  const handleFeatureClick = (title, content) => {
    setModalContent({ title, content });
    setShowModal(true);
  };

  return (
    <div className="flex min-h-screen bg-base-100">
      {/* Sidebar for larger screens */}
      <div className="hidden md:block">
        <Sidebar features={features} activeFeature={activeFeature} setActiveFeature={setActiveFeature} />
      </div>

      {/* Mobile sidebar */}
      {isSidebarOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-gray-800 bg-opacity-75">
          <div className="w-64 h-full bg-white">
            <div className="p-4 flex justify-between items-center">
              <h2 className="text-xl font-bold">Features</h2>
              <button onClick={() => setIsSidebarOpen(false)} className="text-gray-500 hover:text-gray-700">
                <ChevronLeft className="w-6 h-6" />
              </button>
            </div>
            <Sidebar features={features} activeFeature={activeFeature} setActiveFeature={(index) => {
              setActiveFeature(index);
              setIsSidebarOpen(false);
            }} />
          </div>
        </div>
      )}

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <button onClick={() => setIsSidebarOpen(true)} className="md:hidden p-2">
          <Menu className="w-6 h-6" />
        </button>

        {/* Main Feature Cards */}
        <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <DashboardFeature key={index} icon={feature.icon} title={feature.title} description={feature.description} />
          ))}
        </div>

        {/* Empowerment Features Carousel */}
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-4">Empowerment Features</h2>
          <Carousel>
            {empowermentFeatures.map((empowermentFeature, index) => (
              <EmpowermentFeature
                key={index}
                icon={empowermentFeature.icon}
                title={empowermentFeature.title}
                onClick={() => handleFeatureClick(empowermentFeature.title, empowermentFeature.content)}
              />
            ))}
          </Carousel>
        </div>

        {/* Modal for Empowerment Features */}
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white rounded-lg p-6 shadow-lg w-11/12 md:w-1/3">
              <h3 className="text-xl font-bold mb-4">{modalContent.title}</h3>
              <p>{modalContent.content}</p>
              <button onClick={() => setShowModal(false)} className="mt-4 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700">
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
