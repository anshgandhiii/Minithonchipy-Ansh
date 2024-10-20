import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import meditationAudio from './meditation.mp3';

const Health = () => {
  const [healthData, setHealthData] = useState({
    cycleStartDate: '',
    cycleEndDate: '',
    cycleLength: '',
    exerciseDuration: '',
    exerciseIntensity: '',
    mood: '',
  });

  const [logs, setLogs] = useState([]);
  const [chatInput, setChatInput] = useState('');
  const [chatResponses, setChatResponses] = useState([]);

  useEffect(() => {
    // Load hardcoded past data and logs from local storage
    const storedLogs = localStorage.getItem('healthLogs');
    const hardcodedData = [
      {
        date: '2024-10-01',
        cycleLength: 28,
        exerciseDuration: 45,
        exerciseIntensity: 'Medium',
        mood: 'Happy',
      },
      {
        date: '2024-09-01',
        cycleLength: 27,
        exerciseDuration: 35,
        exerciseIntensity: 'High',
        mood: 'Neutral',
      },
    ];
    if (storedLogs) {
      setLogs([...JSON.parse(storedLogs), ...hardcodedData]);
    } else {
      setLogs(hardcodedData);
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setHealthData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleResetLogs = () => {
    setLogs([]); // Reset state
    localStorage.removeItem('healthLogs'); // Clear from local storage
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
      exerciseDuration: '',
      exerciseIntensity: '',
      mood: '',
    });
  };

  const getHealthTips = () => {
    const tips = [];

    // Mood-based tips
    if (healthData.mood === 'Stressed') {
      tips.push('🌬️ Try deep breathing exercises to reduce stress.');
      tips.push('🧘‍♀️ Consider practicing yoga or meditation.');
    }
    if (healthData.mood === 'Sad') {
      tips.push('🗣️ Consider talking to a friend or a therapist to share your feelings.');
      tips.push('📅 Try to engage in activities you enjoy.');
    }
    if (healthData.mood === 'Happy') {
      tips.push('💪 Maintain a routine that supports your well-being.');
      tips.push('🌟 Keep doing what makes you happy!');
    }

    // Exercise duration tips
    if (healthData.exerciseDuration < 30) {
      tips.push('⏱️ Aim for at least 30 minutes of exercise daily for better health.');
    } else if (healthData.exerciseDuration >= 30 && healthData.exerciseDuration < 60) {
      tips.push('🏃 Great job! Keep up the consistent exercise.');
    } else {
      tips.push('🎉 Excellent! You are exceeding the recommended exercise duration.');
    }

    // Cycle length tip
    if (healthData.cycleLength && healthData.cycleLength < 28) {
      tips.push('📞 If your cycle length is shorter than normal, consider consulting with a healthcare provider.');
    }

    // Additional tips
    tips.push('💧 Stay hydrated throughout the day.');
    tips.push('🥗 Consider incorporating more fruits and vegetables into your meals.');
    tips.push('🌈 Take time for self-care activities that rejuvenate you.');
    tips.push('🔍 Keep a journal to track your emotions and progress.');

    // Limit to the first five tips
    return tips.slice(0, 5);
  };

  const handleChatSubmit = () => {
    if (!chatInput.trim()) return;
    const botResponses = [
      "🤔 That's a great question. How does this make you feel?",
      "🧐 I understand. Can you tell me more about that?",
      "💬 It's normal to feel that way. Have you considered talking to a professional about this?",
      '🤗 Remember, it’s okay to seek help whenever you need it.',
      '💡 Have you thought about trying some mindfulness exercises?',
      '🌟 Focusing on gratitude can help shift your mindset.',
      '🔄 Sometimes, just changing your environment can boost your mood.',
      '🕵️‍♀️ It\'s great to express your feelings! What else is on your mind?',
    ];
    const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
    setChatResponses([...chatResponses, { user: chatInput, bot: randomResponse }]);
    setChatInput('');
  };

  return (
    <div className="bg-base min-h-screen p-6">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800">Health & Mental Wellness Tracking</h1>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Health Data Input</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="date"
              name="cycleStartDate"
              value={healthData.cycleStartDate}
              onChange={handleInputChange}
              className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="date"
              name="cycleEndDate"
              value={healthData.cycleEndDate}
              onChange={handleInputChange}
              className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="number"
              name="cycleLength"
              value={healthData.cycleLength}
              onChange={handleInputChange}
              placeholder="Cycle Length"
              className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="number"
              name="exerciseDuration"
              value={healthData.exerciseDuration}
              onChange={handleInputChange}
              placeholder="Exercise Duration (minutes)"
              className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <select
              name="exerciseIntensity"
              value={healthData.exerciseIntensity}
              onChange={handleInputChange}
              className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="" disabled>Select Mood</option>
              <option value="Happy">Happy</option>
              <option value="Neutral">Neutral</option>
              <option value="Sad">Sad</option>
              <option value="Stressed">Stressed</option>
            </select>
            <button type="submit" className="bg-blue-600 text-white rounded-lg p-3 hover:bg-blue-700 transition">Submit</button>
          </form>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Health Logs</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={logs}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" tickFormatter={(date) => new Date(date).toLocaleDateString()} />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="cycleLength" stroke="#8884d8" />
              <Line type="monotone" dataKey="exerciseDuration" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
          <ul className="mt-4 space-y-2">
            {logs.map((log, index) => (
              <li key={index} className="text-sm text-gray-600">
                {new Date(log.date).toLocaleDateString()}: Mood - {log.mood}, Exercise - {log.exerciseDuration} min ({log.exerciseIntensity})
              </li>
            ))}
          </ul>
          <button onClick={handleResetLogs} className="mt-4 bg-red-600 text-white rounded-lg p-2 hover:bg-red-700 transition">Reset Logs</button>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Personalized Health Tips</h2>
          <ul className="list-disc pl-5 space-y-2">
            {getHealthTips().map((tip, index) => (
              <li key={index} className="text-gray-600">{tip}</li>
            ))}
          </ul>
          <audio controls src={meditationAudio} className="mt-4 w-full">
            Your browser does not support the audio element.
          </audio>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Mental Health Chat</h2>
          <div className="space-y-4">
            <div className="border p-4 rounded-lg overflow-y-auto h-48 bg-gray-50">
              {chatResponses.map((response, index) => (
                <div key={index} className="mb-4">
                  <p className="font-semibold text-blue-600">You: {response.user}</p>
                  <p className="text-gray-800">Bot: {response.bot}</p>
                </div>
              ))}
            </div>
            <input
              type="text"
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              placeholder="Share your thoughts..."
              className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button onClick={handleChatSubmit} className="bg-green-600 text-white rounded-lg p-3 hover:bg-green-700 transition">Send</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Health;
