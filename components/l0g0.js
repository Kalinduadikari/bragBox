import { Text, useColorModeValue } from "@chakra-ui/react";
import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";


const LogoBox = styled.span`
font-weight: bold;
font-size: 18px;
display: inline-flex;
align-items: center;
height: 30px;
line-height: 20px;
padding: 10px;

&:hover img {
    animation: none; 
    animation: logoHover 1s infinite;
  }

  @keyframes logoHover {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }
`;

const Logo = () => {
    const footPrintImg = `/images/side${useColorModeValue('', '-darkmd')}.png`;
  
    return (
      <Link href="/" passHref={true} legacyBehavior>
        <a>
          <LogoBox>
            <Image src={footPrintImg} width={20} height={20} alt="logo" />
            <Text
              color={useColorModeValue('gray.800', 'whiteAlpha.900')}
              fontFamily="M PLUS Rounded 1c"
              fontWeight="bold"
              ml={0.5}
            >
              Kalindu Adikari
            </Text>
          </LogoBox>
        </a>
      </Link>
    );
  };
  
  export default Logo;