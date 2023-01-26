import { Box, IconButton } from "@chakra-ui/react";
import { BsArrowUp } from "react-icons/bs";

import { animateScroll as scroll } from "react-scroll";
import { useScrollPositionContext } from "../../context/Scroll.context";

export default function ScrollToTop() {
  const { positionY } = useScrollPositionContext();

  return (
    <Box position="fixed" zIndex="100" bottom="8" right="8" transition="500ms" opacity={positionY > 100 ? 1 : 0}>
      <IconButton aria-label="arrow-up" icon={<BsArrowUp size={24} />} onClick={scroll.scrollToTop} />
    </Box>
  );
}
