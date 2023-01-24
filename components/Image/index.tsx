import { Box, chakra } from "@chakra-ui/react";
import NextImage from "next/image";

interface ImageProps {
  src: string;
  alt: string;
}

const ChakraNextImage = chakra(NextImage, {
  shouldForwardProp: (prop) => ["width", "height", "src", "alt", "quality", "placeholder", "blurDataURL", "loader", "fill"].includes(prop),
});

export default function Image({ alt, src }: ImageProps) {
  return (
    <Box position="relative" minH="80px" minW="80px">
      <NextImage src={src} alt={src} fill />
    </Box>
  );
}
