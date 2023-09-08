import React from 'react';
import { 
  Image, 
  Modal,
  ModalOverlay, 
  ModalContent, 
  ModalBody, 
  ModalCloseButton, 
  } from '@chakra-ui/react';



  const ImageModal = ({ isOpen, onClose, imageData }) => {
    return (
      <Modal isOpen={isOpen} onClose={onClose} size="20%">
        <ModalOverlay style={{backdropFilter: "blur(2px)" }} />
        <ModalContent backgroundColor="transparent" style={{backdropFilter: "blur(2px)",width: '80%', marginTop: "100px"}}>
          <ModalCloseButton />
          <ModalBody >
          {imageData && (
            <Image
              src={imageData.src}
              alt={imageData.alt}
               
            />
          )}
        </ModalBody>
        </ModalContent>
      </Modal>
    );
  };
  

  export default ImageModal;
