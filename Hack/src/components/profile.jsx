import React, { useState, useEffect } from "react";
import { HexColorPicker } from "react-colorful";
import { Bell, User, Phone, Mail, Plus, Trash2 } from "lucide-react";
import Butt from './button';

export default function UserProfile() {
  const [user, setUser] = useState({
    name: "Jane Doe",
    phone: "+1 (555) 123-4567",
    email: "jane.doe@example.com",
  });
  const [emergencyContacts, setEmergencyContacts] = useState([
    { name: "John Doe", phone: "+1 (555) 987-6543" },
    { name: "Emma Smith", phone: "+1 (555) 456-7890" },
  ]);
  const [newContact, setNewContact] = useState({ name: "", phone: "" });
  const [color, setColor] = useState("#ff69b4");
  const [notifications, setNotifications] = useState([
    { id: 1, message: "Welcome to Women Empowerment!", read: false },
    { id: 2, message: "New safety feature available. Check it out!", read: false },
  ]);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showColorPicker, setShowColorPicker] = useState(false);

  useEffect(() => {
    document.documentElement.style.setProperty("--theme-color", color);
  }, [color]);

  const handleAddContact = () => {
    if (newContact.name && newContact.phone) {
      setEmergencyContacts([...emergencyContacts, newContact]);
      setNewContact({ name: "", phone: "" });
    }
  };

  const handleRemoveContact = (index) => {
    const updatedContacts = emergencyContacts.filter((_, i) => i !== index);
    setEmergencyContacts(updatedContacts);
  };

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  const markAsRead = (id) => {
    setNotifications(notifications.map(notif =>
      notif.id === id ? { ...notif, read: true } : notif
    ));
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="min-h-screen p-8 bg-gradient-to-r from-pink-100 to-purple-200 backdrop-blur-lg">
      <div className="flex justify-center mb-8">
        <Butt />
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/3 bg-[#f9f9f9] backdrop-blur-md rounded-lg shadow-md p-6"> {/* Updated color */}
          <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--theme-color)" }}>Theme Color</h2>
          <div
            className="w-full h-20 rounded-md cursor-pointer mb-4"
            style={{ backgroundColor: color }}
            onClick={() => setShowColorPicker(!showColorPicker)}
          />
          {showColorPicker && (
            <HexColorPicker color={color} onChange={setColor} />
          )}
        </div>

        <div className="bg-[#f9f9f9] backdrop-blur-md rounded-lg shadow-md p-6 lg:w-2/3"> {/* Updated color */}
          <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--theme-color)" }}>User Profile</h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <User className="text-gray-400" />
              <input
                type="text"
                value={user.name}
                onChange={(e) => setUser({ ...user, name: e.target.value })}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="Name"
              />
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="text-gray-400" />
              <input
                type="tel"
                value={user.phone}
                onChange={(e) => setUser({ ...user, phone: e.target.value })}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="Phone Number"
              />
            </div>
            <div className="flex items-center space-x-4">
              <Mail className="text-gray-400" />
              <input
                type="email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="Email"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#f9f9f9] backdrop-blur-md rounded-lg shadow-md p-6 mt-8"> {/* Updated color */}
        <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--theme-color)" }}>Emergency Contacts</h2>
        <div className="space-y-4">
          {emergencyContacts.map((contact, index) => (
            <div key={index} className="flex items-center justify-between bg-gray-100 p-3 rounded-md">
              <div>
                <p className="font-semibold">{contact.name}</p>
                <p className="text-sm text-gray-600">{contact.phone}</p>
              </div>
              <button
                onClick={() => handleRemoveContact(index)}
                className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-full"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          ))}
          <div className="flex space-x-2">
            <input
              type="text"
              placeholder="Name"
              value={newContact.name}
              onChange={(e) => setNewContact({ ...newContact, name: e.target.value })}
              className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <input
              type="tel"
              placeholder="Phone"
              value={newContact.phone}
              onChange={(e) => setNewContact({ ...newContact, phone: e.target.value })}
              className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <button
              onClick={handleAddContact}
              className="text-white px-4 py-2 rounded-md flex items-center"
              style={{ backgroundColor: color }}
            >
              <Plus className="h-4 w-4 mr-2" /> Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
