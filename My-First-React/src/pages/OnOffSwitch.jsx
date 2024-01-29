/* eslint-disable react/no-unknown-property */
import { Flex, Box } from "@chakra-ui/react";
import { useState, useEffect } from 'react';

const OnOffSwitch = () => {
  // Load the initial state from localStorage or default to true
  const initialIsOn = JSON.parse(localStorage.getItem('isOn')) || false;
  const [isOn, setOn] = useState(initialIsOn);

  useEffect(() => {
    // Save the current state to localStorage whenever it changes
    localStorage.setItem('isOn', JSON.stringify(isOn));
  }, [isOn]);

  const handleSwitchToggle = () => {
    setOn(!isOn);
  };

  const switchStyle = {
    
    cursor: "pointer",
  };

  return (
    <Flex >
      <Box
        sx={{
          ...switchStyle,
          filter: isOn ? "none" : "blur(1px)"
          // Apply blur conditionally
        }}
        onClick={handleSwitchToggle}
        cursor="pointer"
        p="10px"
        borderRadius="5px"
      >
        {isOn ? "ON" : "OFF"}
      </Box>
    </Flex>
  );
};

export default OnOffSwitch;
