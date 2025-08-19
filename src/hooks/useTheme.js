import { useState, useEffect } from 'react';

export function useTheme() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check system preference
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDark(mediaQuery.matches);

    // Listen for changes
    const handleChange = (e) => {
      setIsDark(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return {
    isDark,
    background: isDark 
      ? "radial-gradient(#0D0E12 0%, #0B0C11 40%, #06070A 100%)"
      : "radial-gradient(#F8F9FA 0%, #E9ECEF 40%, #DEE2E6 100%)",
    text: {
      primary: isDark ? "text-white/85" : "text-gray-900/85",
      secondary: isDark ? "text-white/70" : "text-gray-700/70",
      muted: isDark ? "text-white/60" : "text-gray-600/60",
      faint: isDark ? "text-white/40" : "text-gray-400/60",
      decoration: isDark ? "text-white/15" : "text-gray-900/10"
    },
    bg: {
      overlay: isDark ? "bg-white/5" : "bg-black/5",
      overlayHover: isDark ? "bg-white/10" : "bg-black/10",
      border: isDark ? "border-white/10" : "border-gray-200",
      borderHover: isDark ? "border-white/20" : "border-gray-300",
      accent: isDark ? "bg-white" : "bg-gray-900",
      accentText: isDark ? "text-black" : "text-white"
    },
    hover: {
      text: isDark ? "hover:text-white" : "hover:text-gray-900",
      bg: isDark ? "hover:bg-white/10" : "hover:bg-black/5"
    }
  };
}