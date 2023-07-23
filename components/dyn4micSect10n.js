import { chakra } from "@chakra-ui/react";
import { motion, useMotionValue, useTransform, useAnimation } from "framer-motion"; 
import { useEffect } from "react";

const StyledDiv = chakra(motion.div);

const DySection = ({
  children,
  initial = "hidden",
  animate = "visible",
  exit = "hidden",
  hoverVariants = {
    scale: 1.02,
  },
  p = 8,
  borderRadius = "md",
  boxShadow = "md",
  parallaxSensitivity = 0.1,
  ...restProps
}) => {


  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (event) => {
      x.set((event.pageX - window.innerWidth / 2) * parallaxSensitivity);
      y.set((event.pageY - window.innerHeight / 2) * parallaxSensitivity);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [parallaxSensitivity, x, y]);


  const blurIntensity = useTransform(x, [-100, 100], [0, 20], {
    clamp: false,
  });


  const gradientX = useTransform(x, [-window.innerWidth / 2, window.innerWidth / 2], [0, 1]);
  const gradientY = useTransform(y, [-window.innerHeight / 2, window.innerHeight / 2], [0, 1]);


  const controls = useAnimation();

  return (
    <StyledDiv
      initial={initial}
      animate={controls} 
      exit={exit}
      whileHover={hoverVariants}
      whileTap="tap"
      p={p}
      borderRadius={borderRadius}
      boxShadow={boxShadow}
      bg={`linear-gradient(to right, rgba(255, 255, 255, ${gradientX}), rgba(255, 255, 255, ${gradientY}))`}
      backdropFilter={`blur(${blurIntensity}px)`}
      onTap={() => {
        x.set(0);
        y.set(0);
      }}
      _hover={{
        backdropFilter: "blur(15px)",
      }}
      {...restProps}
    >
      {children}
    </StyledDiv>
  );
};

export default DySection;
