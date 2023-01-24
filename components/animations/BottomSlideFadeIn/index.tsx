import { chakra, shouldForwardProp } from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

export default function BottomSlideFadeIn({ children }: WithChildren) {
  return (
    <ChakraBox
      animate={{
        translateY: [25, 0],
        opacity: [0.1, 1],
      }}
      //@ts-ignore
      transition={{
        duration: 0.8,
        ease: "linear",
      }}
    >
      {children}
    </ChakraBox>
  );
}
