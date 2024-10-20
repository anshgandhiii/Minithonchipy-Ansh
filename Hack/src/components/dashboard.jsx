"use client";
import React, { useState, useEffect } from "react";
import { HexColorPicker } from "react-colorful";

const AdminPanel = () => {
  const [color, setColor] = useState("#3b82f6"); // Default color (blue)

  // Helper function to adjust brightness
  const adjustColorBrightness = (col, amt) => {
    let usePound = false;
    if (col[0] === "#") {
      col = col.slice(1);
      usePound = true;
    }
    let num = parseInt(col, 16);
    let r = (num >> 16) + amt;
    let b = ((num >> 8) & 0x00ff) + amt;
    let g = (num & 0x0000ff) + amt;
    return (
      (usePound ? "#" : "") +
      (g | (b << 8) | (r << 16)).toString(16).padStart(6, "0")
    );
  };

  // Function to apply color to CSS variables
  const applyColorToStyles = (color) => {
    document.documentElement.style.setProperty("--theme-color", color);
    document.documentElement.style.setProperty(
      "--theme-color-dark",
      adjustColorBrightness(color, -20)
    );
    document.documentElement.style.setProperty(
      "--theme-color-light",
      adjustColorBrightness(color, 20)
    );
  };

  const handleColorChange = (newColor) => {
    setColor(newColor);
    applyColorToStyles(newColor);
  };

  // Apply color when the component loads
  useEffect(() => {
    applyColorToStyles(color);
  }, []);

  return (
    <div className="bg-orange-100 min-h-screen">
      <link
        href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp"
        rel="stylesheet"
      />

      <div
        className="fixed bg-white px-10 py-1 z-10 w-full"
        style={{ color: "var(--theme-color-dark)" }}
      >
        <div className="flex items-center justify-between py-2 text-5xl">
          <div className="font-bold text-xl" style={{ color: "var(--theme-color)" }}>
            Admin<span className="text-orange-600">Panel</span>
          </div>
          <div className="flex items-center">
            <span className="material-icons-outlined p-2" style={{ fontSize: "30px" }}>
              search
            </span>
            <span className="material-icons-outlined p-2" style={{ fontSize: "30px" }}>
              notifications
            </span>
            <div
              className="rounded-full inline-block h-12 w-12 ml-2"
              style={{
                backgroundImage:
                  "url(https://i.pinimg.com/564x/de/0f/3d/de0f3d06d2c6dbf29a888cf78e4c0323.jpg)",
                backgroundSize: "cover",
              }}
            ></div>
          </div>
        </div>
      </div>

      <div className="flex flex-row pt-24 px-10 pb-4">
        <div className="w-2/12 mr-6">
          <div className="bg-white rounded-xl shadow-lg mb-6 px-6 py-4">
            <HexColorPicker color={color} onChange={handleColorChange} />
            <p className="text-center mt-4" style={{ color: "var(--theme-color)" }}>
              Selected Color: {color}
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg mb-6 px-6 py-4">
            <a href="#" className="inline-block text-gray-600 hover:text-black my-4">
              <span className="material-icons-outlined float-left pr-2">dashboard</span>
              Home
              <span className="material-icons-outlined float-right">keyboard_arrow_right</span>
            </a>
            <a href="#" className="inline-block text-gray-600 hover:text-black my-4">
              <span className="material-icons-outlined float-left pr-2">tune</span>
              Some menu item
              <span className="material-icons-outlined float-right">keyboard_arrow_right</span>
            </a>
            <a href="#" className="inline-block text-gray-600 hover:text-black my-4">
              <span className="material-icons-outlined float-left pr-2">file_copy</span>
              Another menu item
              <span className="material-icons-outlined float-right">keyboard_arrow_right</span>
            </a>
          </div>
        </div>

        <div className="w-10/12">
          <div className="flex flex-row">
            <div
              className="bg-red-200 border border-red-300 rounded-xl w-7/12 mr-2 p-6"
              style={{ backgroundColor: "var(--theme-color-light)" }}
            >
              <p className="text-5xl" style={{ color: "var(--theme-color)" }}>
                Welcome <br />
                <strong>Lorem Ipsum</strong>
              </p>
            </div>

            <div
              className="bg-orange-200 border border-orange-300 rounded-xl w-5/12 ml-2 p-6"
              style={{ backgroundColor: "var(--theme-color-light)" }}
            >
              <p className="text-5xl" style={{ color: "var(--theme-color)" }}>
                Inbox <br />
                <strong>23</strong>
              </p>
              <a
                href="#"
                className="underline hover:no-underline inline-block mt-12 px-8 py-2"
                style={{ backgroundColor: "var(--theme-color-dark)", color: "white" }}
              >
                <strong>See messages</strong>
              </a>
            </div>
          </div>

          <div className="flex flex-row h-64 mt-6">
            <div className="bg-white rounded-xl shadow-lg px-6 py-4 w-4/12">
              a
            </div>
            <div className="bg-white rounded-xl shadow-lg mx-6 px-6 py-4 w-4/12">
              b
            </div>
            <div className="bg-white rounded-xl shadow-lg px-6 py-4 w-4/12">
              c
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
