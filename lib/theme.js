import { extendTheme, keyframes } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

// Define the custom blinking cursor animation
const blinkCursor = keyframes`
  from, to {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
`;

const styles = {
  global: props => ({
    body: {
      bg: mode('#EDEAE4', ' #2B2B2C')(props),
    },
  }),
};

const components = {
  Heading: {
    variants: {
      'section-title': {
        fontSize: 20,
        padding: '0.3em 1em',
        textDecoration: 'none',
        position: 'relative',
        display: 'inline-block',
        textShadow: '0 0 5px rgba(255, 255, 255, 0.8)',
        _after: {
          content: '""',
          position: 'absolute',
          right: 0,
          top: '50%',
          width: '7px',
          height: '0.7em',
          background: 'linear-gradient(90deg, #C04970, #C04970)',
          animation: `${blinkCursor} 0.8s infinite`,
          transform: 'translateY(-50%)',
          zIndex: 1,
          transition: 'background 0.5s ease',  
        },
      },
    },
  },
  Link: {
    baseStyle: props => ({
      color: mode('#3d7aed', '#ff63c3')(props),
      textUnderlineOffset: 3,
    }),
  },
};

const fonts = {
  heading: "'M PLUS Rounded 1c'",
};

const colors = {
  glassTeal: '#88ccca',
};

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
};

const theme = extendTheme({
  config,
  styles,
  components,
  colors,
  fonts,
});

export default theme;
