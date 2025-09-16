import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Chicken from './img/chicken.webp';
import Salad from './img/salad.webp';

export default function ComprehensiveFitnessPlanner() {
  const [dietType, setDietType] = useState('veg');
  const [height, setHeight] = useState(170);
  const [weight, setWeight] = useState(70);
  const [selectedSplit, setSelectedSplit] = useState('');
  const [customSplit, setCustomSplit] = useState('');
  const [selectedDates, setSelectedDates] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const predefinedSplits = [
    'Full Body 3x/week',
    'Upper/Lower 4x/week',
    'Push/Pull/Legs',
    'Bro Split',
  ];

  const handleGetResult = () => {
    setIsSubmitting(true);
    console.log('Diet Type:', dietType);
    console.log('Height:', height);
    console.log('Weight:', weight);
    console.log('Workout Split:', selectedSplit === 'custom' ? customSplit : selectedSplit);
    console.log('Workout Dates:', selectedDates);
    setTimeout(() => setIsSubmitting(false), 2000); // Simulating API call
  };

  const handleSplitChange = (value) => {
    setSelectedSplit(value);
    if (value !== 'custom') {
      setCustomSplit('');
    }
  };

  const handleDateClick = (date) => {
    setSelectedDates((prev) =>
      prev.includes(date) ? prev.filter((d) => d !== date) : [...prev, date]
    );
  };

  return (
    <div className="min-h-screen bg-base flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-br from-[#f8f7f6] to-[#f4f1df] text-white p-8 rounded-2xl shadow-2xl max-w-4xl w-full border border-pink-500/20"
      >
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-black to-black mb-8 text-center">
          Comprehensive Fitness Planner
        </h1>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-6 text-center text-black">Choose Your Diet</h2>
          <div className="flex justify-center space-x-6">
            <DietButton
              type="veg"
              selected={dietType === 'veg'}
              onClick={() => setDietType('veg')}
              imageSrc={Salad}
            >
              Vegetarian
            </DietButton>
            <DietButton
              type="non-veg"
              selected={dietType === 'non-veg'}
              onClick={() => setDietType('non-veg')}
              imageSrc={Chicken}
            >
              Non-Vegetarian
            </DietButton>
          </div>
        </section>

        <section className="mb-10">
          <SliderSection
            title="Your Height"
            value={height}
            onChange={setHeight}
            min={120}
            max={220}
            step={1}
            unit="cm"
          />

          <SliderSection
            title="Your Weight"
            value={weight}
            onChange={setWeight}
            min={30}
            max={170}
            step={1}
            unit="kg"
          />
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-center text-black">Choose Workout Split</h2>
          <div className="space-y-4 bg-white p-4 rounded-xl">
            {predefinedSplits.map((split, index) => (
              <div key={index} className="flex items-center space-x-2">
                <input
                  type="radio"
                  value={split}
                  id={`split-${index}`}
                  checked={selectedSplit === split}
                  onChange={() => handleSplitChange(split)}
                  className="text-black"
                />
                <label htmlFor={`split-${index}`} className="text-black cursor-pointer">
                  {split}
                </label>
              </div>
            ))}
            <div className="flex items-center space-x-2">
              <input
                type="radio"
                value="custom"
                id="split-custom"
                checked={selectedSplit === 'custom'}
                onChange={() => handleSplitChange('custom')}
                className="text-black"
              />
              <label htmlFor="split-custom" className="text-gray-300 cursor-pointer">
                Custom Split
              </label>
            </div>
          </div>
        </section>

        {selectedSplit === 'custom' && (
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-black">Create Custom Split</h2>
            <textarea
              placeholder="Describe your custom workout split here..."
              value={customSplit}
              onChange={(e) => setCustomSplit(e.target.value)}
              className="bg-white text-black border-gray-500 placeholder-white rounded-lg w-full"
            />
          </section>
        )}

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-center text-black">Schedule Workouts</h2>
          <Calendar
            selected={selectedDates}
            onSelect={handleDateClick}
            className="bg-[#1e1e1e] text-black border-pink-500 rounded-lg mx-auto"
          />
        </section>

        <div className="flex justify-center mt-10">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleGetResult}
            className="bg-gradient-to-r from-pink-300 to-pink-400 text-black font-bold py-3 px-10 rounded-full text-lg"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Creating Your Plan...' : 'Get Your Fitness Plan'}
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}

function DietButton({ type, selected, onClick, imageSrc, children }) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      onClick={onClick}
      className={` text-black p-6 rounded-xl ${selected ? 'bg-pink-400' : 'bg-white'}`}
    >
      <img src={imageSrc} alt={type} className="w-20 h-20 mb-2" />
      <span>{children}</span>
    </motion.button>
  );
}

function SliderSection({ title, value, onChange, min, max, step, unit }) {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-bold text-black mb-2">{title}</h2>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full"
      />
      <p className="text-center text-black mt-2">
        {value} {unit}
      </p>
    </div>
  );
}

const Calendar = ({ selected, onSelect, className }) => {
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <div className={`grid grid-cols-7 gap-2 ${className}`}>
      {days.map((day) => (
        <div
          key={day}
          onClick={() => onSelect(day)}
          className={`p-4 rounded-lg cursor-pointer ${
            selected.includes(day) ? 'bg-pink-400' : 'bg-white'
          }`}
        >
          {day}
        </div>
      ))}
    </div>
  );
};
