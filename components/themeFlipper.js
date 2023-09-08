import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useColorMode } from "@chakra-ui/react";
import styled from "@emotion/styled";

const ToggleContainer = styled.div`
  position: relative;
  width: 64px;
  height: 32px;
  border-radius: 30px;
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(15px);
  cursor: pointer;
  overflow: hidden;
`;

const ToggleCircle = styled.div`
  position: absolute;
  top: 2px;
  left: ${(props) => (props.isDarkMode ? "34px" : "2px")};
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: ${(props) =>
    `conic-gradient(from 225deg, ${
      props.isDarkMode ? "#ff9800" : "#805ad5"
    } 0%, ${props.isDarkMode ? "#f57c00" : "#4a148c"} 100%)`};
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  animation: bounce 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-16px);
    }
    60% {
      transform: translateY(-8px);
    }
  }

  transition: left 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55),
    background 0.4s ease;
`;

const ToggleButton = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  position: relative; 

  & svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: transform 0.3s, fill 0.3s;
    fill: ${(props) => (props.isDarkMode ? "#f57c00" : "#805ad5")};
    transform: rotate(${(props) => (props.isDarkMode ? "0deg" : "180deg")});
  }

  &:hover svg {
    fill: ${(props) => (props.isDarkMode ? "#ff9800" : "#4a148c")};
    transform: scale(1.2);
  }

  
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 50%;
    opacity: 0; 
    pointer-events: none; 
    transform: scale(0); 
  }

  &:hover::before {
    opacity: 1; 
    transform: scale(1); 
    transition: opacity 0.3s, transform 0.3s;
  }
`;

const ThemeFlipper = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDarkMode = colorMode === "dark";

  const handleToggle = (event) => {
    if (event.type === "click" || event.key === "Enter" || event.key === " ") {
      toggleColorMode();
    }
  };

  return (
    <ToggleContainer onClick={handleToggle} onKeyDown={handleToggle} tabIndex="0">
      <ToggleCircle isDarkMode={isDarkMode} />
      <ToggleButton isDarkMode={isDarkMode} onClick={handleToggle} onKeyDown={handleToggle}>
        {isDarkMode ? <SunIcon boxSize={6} /> : <MoonIcon boxSize={6} />}
      </ToggleButton>
    </ToggleContainer>
  );
};

export default ThemeFlipper;
