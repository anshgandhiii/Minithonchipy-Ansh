import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Health = () => {
  const [healthData, setHealthData] = useState({
    cycleStartDate: '',
    cycleEndDate: '',
    cycleLength: '',
    exerciseType: '',
    exerciseDuration: '',
    exerciseIntensity: '',
    mood: '',
    notes: '',
  });

  const [logs, setLogs] = useState([]);
  const [chatInput, setChatInput] = useState('');
  const [chatResponses, setChatResponses] = useState([]);

  useEffect(() => {
    const storedLogs = localStorage.getItem('healthLogs');
    if (storedLogs) {
      setLogs(JSON.parse(storedLogs));
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setHealthData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newLog = { ...healthData, date: new Date().toISOString() };
    const updatedLogs = [...logs, newLog];
    setLogs(updatedLogs);
    localStorage.setItem('healthLogs', JSON.stringify(updatedLogs));
    setHealthData({
      cycleStartDate: '',
      cycleEndDate: '',
      cycleLength: '',
      exerciseType: '',
      exerciseDuration: '',
      exerciseIntensity: '',
      mood: '',
      notes: '',
    });
  };

  const getHealthTips = () => {
    const tips = [];
    if (healthData.mood === 'Stressed') {
      tips.push("Try deep breathing exercises to reduce stress.");
    }
    if (healthData.exerciseDuration < 30) {
      tips.push("Aim for at least 30 minutes of exercise daily for better health.");
    }
    return tips;
  };

  const handleChatSubmit = () => {
    const botResponses = [
      "That's a great question. How does this make you feel?",
      "I understand. Can you tell me more about that?",
      "It's normal to feel that way. Have you considered talking to a professional about this?",
    ];
    const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
    setChatResponses([...chatResponses, { user: chatInput, bot: randomResponse }]);
    setChatInput('');
  };

  return (
    <div className="container mx-auto p-4">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold">Health & Mental Wellness Tracking</h1>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="font-bold">Health Data Input</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="date"
              name="cycleStartDate"
              value={healthData.cycleStartDate}
              onChange={handleInputChange}
              placeholder="Cycle Start Date"
              className="border rounded p-2 w-full"
            />
            <input
              type="date"
              name="cycleEndDate"
              value={healthData.cycleEndDate}
              onChange={handleInputChange}
              placeholder="Cycle End Date"
              className="border rounded p-2 w-full"
            />
            <input
              type="number"
              name="cycleLength"
              value={healthData.cycleLength}
              onChange={handleInputChange}
              placeholder="Cycle Length"
              className="border rounded p-2 w-full"
            />
            <input
              type="text"
              name="exerciseType"
              value={healthData.exerciseType}
              onChange={handleInputChange}
              placeholder="Exercise Type"
              className="border rounded p-2 w-full"
            />
            <input
              type="number"
              name="exerciseDuration"
              value={healthData.exerciseDuration}
              onChange={handleInputChange}
              placeholder="Exercise Duration (minutes)"
              className="border rounded p-2 w-full"
            />
            <select
              name="exerciseIntensity"
              value={healthData.exerciseIntensity}
              onChange={handleInputChange}
              className="border rounded p-2 w-full"
            >
              <option value="" disabled>Select Exercise Intensity</option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
            <select
              name="mood"
              value={healthData.mood}
              onChange={handleInputChange}
              className="border rounded p-2 w-full"
            >
              <option value="" disabled>Select Mood</option>
              <option value="Happy">Happy</option>
              <option value="Neutral">Neutral</option>
              <option value="Sad">Sad</option>
              <option value="Stressed">Stressed</option>
            </select>
            <textarea
              name="notes"
              value={healthData.notes}
              onChange={handleInputChange}
              placeholder="Notes"
              className="border rounded p-2 w-full"
            />
            <button type="submit" className="bg-blue-500 text-white rounded p-2">Submit</button>
          </form>
        </div>

        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="font-bold">Health Logs</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={logs}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="cycleLength" stroke="#8884d8" />
              <Line type="monotone" dataKey="exerciseDuration" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
          <ul className="mt-4 space-y-2">
            {logs.map((log, index) => (
              <li key={index} className="text-sm">
                {new Date(log.date).toLocaleDateString()}: {log.mood} - {log.exerciseType} ({log.exerciseDuration} min)
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="font-bold">Personalized Health Tips</h2>
          <ul className="list-disc pl-5 space-y-2">
            {getHealthTips().map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>
        </div>

        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="font-bold">Mental Wellness Resources</h2>
          <h3 className="font-semibold mb-2">Guided Meditation</h3>
          <p>Listen to a 5-minute guided meditation</p>
          <audio controls className="w-full mt-2">
            <source src="/meditation.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>

          <h3 className="font-semibold mt-4 mb-2">Articles</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li><a href="#" className="text-blue-600 hover:underline">Managing Stress in Daily Life</a></li>
            <li><a href="#" className="text-blue-600 hover:underline">The Importance of Self-Care</a></li>
            <li><a href="#" className="text-blue-600 hover:underline">Understanding Anxiety and How to Cope</a></li>
          </ul>
        </div>

        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="font-bold">Chat with Virtual Therapist</h2>
          <div className="h-64 overflow-y-auto mb-4 p-4 border rounded">
            {chatResponses.map((response, index) => (
              <div key={index} className="mb-2">
                <p className="font-semibold">You: {response.user}</p>
                <p>Therapist: {response.bot}</p>
              </div>
            ))}
          </div>
          <div className="flex">
            <input
              type="text"
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-grow border rounded p-2 mr-2"
            />
            <button onClick={handleChatSubmit} className="bg-blue-500 text-white rounded p-2">Send</button>
          </div>
        </div>
      </main>

      <footer className="text-center mt-8">
        <p>&copy; {new Date().getFullYear()} Wellness Tracker</p>
      </footer>
    </div>
  );
};

export default Health;
