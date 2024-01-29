import { useState, useEffect } from "react";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton } from "@chakra-ui/react";

const LightBox = () => {
  const [showLightBox, setShowLightBox] = useState(true);

  const closeLightBox = () => {
    setShowLightBox(false);
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      // Close the lightbox if the user clicks outside of it
      if (showLightBox && !e.target.closest(".chakra-modal")) {
        closeLightBox();
      }
    };

    // Add event listener for clicks outside the lightbox when the component mounts
    document.addEventListener("click", handleOutsideClick);

    // Remove event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [showLightBox]);

  return (
    <Modal isOpen={showLightBox} onClose={closeLightBox} >
      <ModalOverlay 
      sx={{
        backdropFilter: "auto", backdropContrast:'30%'
      }}/>
      <ModalContent>
        <ModalHeader>Lightbox Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <p>This is the lightbox content.</p>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default LightBox;
