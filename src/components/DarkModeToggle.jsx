import React, { useState, useEffect } from 'react';

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('darkMode');
    if (saved === 'true') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  };

  return (
    <button
      onClick={toggleDarkMode}
      className={`fixed top-20 right-6 w-12 h-12 rounded-full border-none cursor-pointer flex items-center justify-center shadow-lg transition-all duration-300 z-[45] hover:scale-110 ${
        isDark 
          ? 'bg-gradient-to-br from-slate-800 to-slate-600' 
          : 'bg-gradient-to-br from-yellow-400 to-amber-500'
      }`}
      title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    >
      {isDark ? (
        <svg 
          className="w-6 h-6 text-yellow-400"
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M12 3a6 6 0 00-6 6c0 3.3 2.7 6 6 6s6-2.7 6-6-2.7-6-6-6zm0-2a8 8 0 110 16 8 8 0 010-16zm0 4a4 4 0 100 8 4 4 0 000-8z"/>
          <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
        </svg>
      ) : (
        <svg 
          className="w-6 h-6 text-white"
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
        </svg>
      )}
    </button>
  );
};

export default DarkModeToggle;
