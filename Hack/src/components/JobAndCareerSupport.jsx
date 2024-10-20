import React, { useState } from "react";
import { FaSearch, FaCalendarAlt, FaUserGraduate, FaNetworkWired, FaTools } from "react-icons/fa";

const JobAndCareerSupport = () => {
  const [activeTab, setActiveTab] = useState("resources");

  const resources = [
    { id: 1, title: "Resume Writing Tips", type: "article", category: "job-search" },
    { id: 2, title: "Interview Techniques", type: "video", category: "job-search" },
    { id: 3, title: "Negotiation Skills", type: "webinar", category: "professional-development" },
    { id: 4, title: "Career Path Guide", type: "downloadable", category: "professional-development" },
  ];

  const courses = [
    { id: 1, title: "Leadership for Women", duration: "4 weeks", instructor: "Jane Doe", rating: 4.8 },
    { id: 2, title: "Tech Skills Bootcamp", duration: "8 weeks", instructor: "Sarah Smith", rating: 4.9 },
    { id: 3, title: "Financial Literacy", duration: "6 weeks", instructor: "Emily Brown", rating: 4.7 },
  ];

  const events = [
    { id: 1, title: "Women in Tech Networking Event", date: "2023-08-15", type: "networking" },
    { id: 2, title: "Career Fair for Women", date: "2023-09-01", type: "job-fair" },
    { id: 3, title: "Mentorship Program Kickoff", date: "2023-09-10", type: "mentorship" },
  ];

  return (
    <div className="bg-base min-h-screen p-8">
      <h1 className="text-4xl font-bold text-pink-800 mb-8 text-center">Job and Career Support</h1>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-semibold text-pink-800 mb-4">Search Resources</h2>
        <div className="flex items-center bg-pink-100 rounded-lg p-2">
          <input
            type="text"
            placeholder="Search for resources..."
            className="flex-grow bg-transparent outline-none text-pink-800 placeholder-pink-500"
          />
          <FaSearch className="text-pink-600 ml-2" />
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <div className="flex justify-center space-x-4 mb-6">
          <button
            className={`px-4 py-2 rounded-full ${
              activeTab === "resources"
                ? "bg-purple-600 text-white"
                : "bg-purple-200 text-purple-800"
            }`}
            onClick={() => setActiveTab("resources")}
          >
            Resources
          </button>
          <button
            className={`px-4 py-2 rounded-full ${
              activeTab === "tools"
                ? "bg-purple-600 text-white"
                : "bg-purple-200 text-purple-800"
            }`}
            onClick={() => setActiveTab("tools")}
          >
            Tools
          </button>
          <button
            className={`px-4 py-2 rounded-full ${
              activeTab === "courses"
                ? "bg-purple-600 text-white"
                : "bg-purple-200 text-purple-800"
            }`}
            onClick={() => setActiveTab("courses")}
          >
            Courses
          </button>
          <button
            className={`px-4 py-2 rounded-full ${
              activeTab === "networking"
                ? "bg-purple-600 text-white"
                : "bg-purple-200 text-purple-800"
            }`}
            onClick={() => setActiveTab("networking")}
          >
            Networking
          </button>
        </div>

        {activeTab === "resources" && (
          <div>
            <h2 className="text-2xl font-semibold text-pink-800 mb-4">Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resources.map((resource) => (
                <div key={resource.id} className="bg-pink-100 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-pink-700 mb-2">{resource.title}</h3>
                  <p className="text-pink-600">Type: {resource.type}</p>
                  <p className="text-pink-600">Category: {resource.category}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "tools" && (
          <div>
            <h2 className="text-2xl font-semibold text-pink-800 mb-4">Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-pink-100 p-4 rounded-lg flex items-center">
                <FaTools className="text-4xl text-pink-600 mr-4" />
                <div>
                  <h3 className="text-lg font-semibold text-pink-700 mb-2">Resume Builder</h3>
                  <p className="text-pink-600">Create a professional resume</p>
                </div>
              </div>
              <div className="bg-pink-100 p-4 rounded-lg flex items-center">
                <FaUserGraduate className="text-4xl text-pink-600 mr-4" />
                <div>
                  <h3 className="text-lg font-semibold text-pink-700 mb-2">Career Assessment</h3>
                  <p className="text-pink-600">Discover your ideal career path</p>
                </div>
              </div>
              <div className="bg-pink-100 p-4 rounded-lg flex items-center">
                <FaNetworkWired className="text-4xl text-pink-600 mr-4" />
                <div>
                  <h3 className="text-lg font-semibold text-pink-700 mb-2">Networking Platform</h3>
                  <p className="text-pink-600">Connect with professionals</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "courses" && (
          <div>
            <h2 className="text-2xl font-semibold text-pink-800 mb-4">Skill-Building Courses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course) => (
                <div key={course.id} className="bg-pink-100 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-pink-700 mb-2">{course.title}</h3>
                  <p className="text-pink-600">Duration: {course.duration}</p>
                  <p className="text-pink-600">Instructor: {course.instructor}</p>
                  <p className="text-pink-600">Rating: {course.rating}/5</p>
                  <button className="mt-4 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition duration-300">
                    Enroll Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "networking" && (
          <div>
            <h2 className="text-2xl font-semibold text-pink-800 mb-4">Networking Opportunities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map((event) => (
                <div key={event.id} className="bg-pink-100 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-pink-700 mb-2">{event.title}</h3>
                  <p className="text-pink-600">Date: {event.date}</p>
                  <p className="text-pink-600">Type: {event.type}</p>
                  <button className="mt-4 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition duration-300">
                    Register
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobAndCareerSupport;
