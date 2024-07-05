import React, { useState, useEffect } from "react";
import { Switch } from "react-native";

const ThemeSwitch = ({ onChange }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    onChange(isDarkMode);
  }, [isDarkMode, onChange]);

  const toggleSwitch = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return <Switch value={isDarkMode} onValueChange={toggleSwitch} />;
};

export default ThemeSwitch;
