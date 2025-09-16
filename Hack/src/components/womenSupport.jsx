import React, { useState } from "react";
import { FaUser, FaSearch, FaEnvelope, FaCalendar } from "react-icons/fa";

const WomenSupport = () => {
  const [selectedProfile, setSelectedProfile] = useState(null);

  const counselors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      expertise: "Trauma Counseling",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80"
    },
    {
      id: 2,
      name: "Lisa Chen",
      expertise: "Family Counseling",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80"
    },
    {
      id: 3,
      name: "Maria Rodriguez",
      expertise: "Career Counseling",
      image: "https://images.unsplash.com/photo-1573497019236-17f8177b81e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80"
    }
  ];

  const ngos = [
    {
      id: 1,
      name: "Women's Empowerment Network",
      focus: "Education and Skills Training",
      image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80"
    },
    {
      id: 2,
      name: "Safe Haven Foundation",
      focus: "Domestic Violence Support",
      image: "https://reddotfoundation.in/assets/images/home/Home_banner1.jpg"
    },
    {
      id: 3,
      name: "Women in Tech Initiative",
      focus: "STEM Career Advancement",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80"
    }
  ];

  const handleProfileClick = (profile) => {
    setSelectedProfile(profile);
  };

  const ProfileModal = ({ profile, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">{profile.name}</h2>
        <p className="mb-4">{profile.expertise || profile.focus}</p>
        <div className="flex space-x-4 mb-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300 flex items-center">
            <FaEnvelope className="mr-2" /> Message
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300 flex items-center">
            <FaCalendar className="mr-2" /> Book Appointment
          </button>
        </div>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          Close
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-base p-8">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-purple-800 mb-4">Women Support Community</h1>
        <p className="text-xl text-purple-600">Connect, Empower, Thrive</p>
      </header>

      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-purple-700 mb-6">Find Support</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Search for counselors, NGOs, or topics"
            className="w-full p-4 rounded-full border-2 border-purple-300 focus:outline-none focus:border-purple-500 pl-12"
          />
          <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-400" />
        </div>
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-purple-700 mb-6">Counselors</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {counselors.map((counselor) => (
            <div
              key={counselor.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform hover:scale-105 transition duration-300"
              onClick={() => handleProfileClick(counselor)}
            >
              <img src={counselor.image} alt={counselor.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-purple-600">{counselor.name}</h3>
                <p className="text-gray-600">{counselor.expertise}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-purple-700 mb-6">NGOs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ngos.map((ngo) => (
            <div
              key={ngo.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform hover:scale-105 transition duration-300"
              onClick={() => handleProfileClick(ngo)}
            >
              <img src={ngo.image} alt={ngo.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-purple-600">{ngo.name}</h3>
                <p className="text-gray-600">{ngo.focus}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-semibold text-purple-700 mb-6">Community Forum</h2>
        <div className="space-y-4">
          <div className="bg-purple-100 rounded-lg p-4">
            <h3 className="font-semibold text-purple-600">Latest Discussions</h3>
            <ul className="list-disc list-inside text-gray-700 mt-2">
              <li>Balancing work and family life</li>
              <li>Self-care tips for busy women</li>
              <li>Navigating career changes</li>
            </ul>
          </div>
          <button className="bg-purple-500 text-white px-6 py-2 rounded-full hover:bg-purple-600 transition duration-300">
            Join the Conversation
          </button>
        </div>
      </section>

      {selectedProfile && (
        <ProfileModal profile={selectedProfile} onClose={() => setSelectedProfile(null)} />
      )}
    </div>
  );
};

export default WomenSupport;