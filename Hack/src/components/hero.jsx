import React, { useState, useEffect, useRef } from 'react';
import Gymvideo1 from './img/Hack1.mp4';
import Gymvideo2 from './img/video2.mp4';
import Gymvideo3 from './img/video3.mp4';
import { Link } from 'react-router-dom';

function HeroSection() {
  const videoRef = useRef(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const videos = [Gymvideo1]; // Array of video sources

  useEffect(() => {
    const videoElement = videoRef.current;

    const handleVideoEnd = () => {
      // Move to the next video in the array
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
    };

    videoElement.addEventListener('ended', handleVideoEnd);

    return () => {
      videoElement.removeEventListener('ended', handleVideoEnd);
    };
  }, [videos.length]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.src = videos[currentVideoIndex];
      videoRef.current.play();
    }
  }, [currentVideoIndex, videos]);

  return (
    <div className="relative w-full h-screen bg-black">
      {/* Background video */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        type="video/mp4"
        autoPlay
        loop={false}  // Disable loop for sequential playback
        muted={true}  // Mute the video to allow autoplay
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-start justify-center h-full text-left text-white px-8 lg:px-16">
        <h1 className="text-6xl lg:text-8xl font-extrabold mb-8 leading-none tracking-tighter">
          <span className="block transform -skew-y-6 hover:skew-y-0 transition-transform duration-300">Raksha</span>
          {/* <span className="block transform skew-y-6 hover:skew-y-0 transition-transform duration-300">YOUR BODY</span> */}
          <span className="block  text-pink-500">Empowering Women</span>
        </h1>
        <p className="text-lg lg:text-xl mb-8 max-w-2xl">
          Achieve your ideal body with our expertly designed workout routines. Start your journey to a healthier, stronger you today!
        </p>
        <div className="flex flex-col lg:flex-row items-start space-y-4 lg:space-y-0 lg:space-x-4">
          
          <Link to="login" className="px-6 py-2  bg-pink-500 text-white rounded-md font-semibold hover: text-pink-500 transition duration-200 w-full lg:w-auto">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
