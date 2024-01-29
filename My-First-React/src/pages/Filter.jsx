import {Flex, Box} from "@chakra-ui/react";

const Filter = () => {
  const switchStyle = {
    backgroundColor: isOn ? '#ffffff' : '#000000', // Change colors as needed
    color: isOn ? '#000000' : '#ffffff', // Change text color accordingly
    padding: '10px',
    borderRadius: '5px',
    cursor: 'pointer',
  }
    
    return (
      <Flex flexWrap='wrap' gap='24px' justifyContent='space-evenly'>
        {/* adding blur property to the element */}
        <Box sx={switchStyle} filter='auto' blur='2px'>
          Box with Blur
        </Box>
      </Flex>
    )
  }

  export default Filter;