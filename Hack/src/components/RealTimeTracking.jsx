import React, { useState } from 'react';
import { Share2, AlertTriangle, Menu, X, Bell, Settings, Star } from 'lucide-react';
import MapComponent from './MapComponent'; // Import the new MapComponent

const SafeRoutesApp = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  // Example safe zones data
  const safeZones = [
    { id: 1, latitude: 40.1, longitude: -74.5, rating: 4.5 },
    { id: 2, latitude: 40.2, longitude: -74.6, rating: 3.8 },
    { id: 3, latitude: 40.3, longitude: -74.7, rating: 4.2 },
  ];

  const userLocation = [40.0, -74.55]; // User's current location (latitude, longitude)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleShareModal = () => setIsShareModalOpen(!isShareModalOpen);

  const sendEmergencyAlert = () => {
    // Implement emergency alert logic here
    console.log('Emergency alert sent!');
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <header className="bg-base text-gray-800 p-4 mt-4 shadow-md flex justify-between items-center rounded-lg">
        <button onClick={toggleMenu} className="md:hidden">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <h1 className="flex-grow text-3xl text-blue-800 text-center font-bold">Real-Time Tracking & Safe Routes</h1>
        <div className="flex space-x-4">
            <button className="hover:bg-gray-200 rounded p-2 transition duration-200">
            <Bell size={24} />
            </button>
            <button className="hover:bg-gray-200 rounded p-2 transition duration-200">
            <Settings size={24} />
            </button>
        </div>
      </header>



      {/* Main content */}
      <main className="flex-grow flex relative">
        {/* Side panel */}
        <aside className={`bg-white w-64 p-4 overflow-y-auto transition-transform duration-300 ease-in-out transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 absolute md:relative z-10 h-full`}>
          <h2 className="text-lg font-semibold mb-4">Safe Zones</h2>
          <ul>
            {safeZones.map((zone) => (
              <li key={zone.id} className="mb-2 p-2 bg-gray-100 rounded">
                <div className="flex items-center">
                  <Star className="text-yellow-400 mr-2" size={20} />
                  <span>{zone.rating.toFixed(1)}</span>
                </div>
                <p className="text-sm text-gray-600">Location: {zone.latitude}, {zone.longitude}</p>
              </li>
            ))}
          </ul>
        </aside>

        {/* Map container */}
        <div className="flex-grow relative bg-base overflow-hidden z-0">
          <div className="h-[70%] md:h-[80%] pt-16"> {/* Set the height for the map container and added padding */}
            <MapComponent safeZones={safeZones} userLocation={userLocation} />
          </div>

          {/* Floating buttons */}
          <div className="absolute bottom-4 right-4 flex flex-col space-y-2 z-20">
            <button
              onClick={toggleShareModal}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full shadow-lg flex items-center"
            >
              <Share2 size={20} className="mr-2" />
              Share Location
            </button>
            <button
              onClick={sendEmergencyAlert}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full shadow-lg flex items-center"
            >
              <AlertTriangle size={20} className="mr-2" />
              Send Emergency Alert
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-200 p-4 text-center text-sm z-30 relative">
        <p>&copy; 2024 Safe Routes App. All rights reserved.</p>
        <p>
          <a href="#" className="text-purple-700 hover:underline">Terms of Service</a>
          {' | '}
          <a href="#" className="text-purple-700 hover:underline">Privacy Policy</a>
        </p>
      </footer>

      {/* Share Location Modal */}
      {isShareModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Share Location</h2>
            <p className="mb-4">Select trusted contacts to share your location with:</p>
            <div className="space-y-2 mb-4">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Jane Doe
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                John Smith
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Emily Johnson
              </label>
            </div>
            <div className="flex justify-end space-x-2">
              <button
                onClick={toggleShareModal}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  // Implement share location logic here
                  console.log('Location shared');
                  toggleShareModal();
                }}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              >
                Share
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SafeRoutesApp;
