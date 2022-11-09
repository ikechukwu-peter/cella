import { useState, useEffect, FC } from "react";
import {
  Box,
  IconButton,
  Flex,
  Text,
  useBreakpointValue,
  Button,
  Heading,
  Image,
} from "@chakra-ui/react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { useRef } from "react";

const delay = 2500;

export const HomeSlider: FC<any> = () => {
  const slides = ["/hennessyroll.png", "/hennessyvs.webp"];

  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(0);

  const goToPrev = () => {
    const isFirstIndex = currentIndex === 0;
    const newIndex = isFirstIndex ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastIndex = currentIndex === slides.length - 1;
    const newIndex = isLastIndex ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });

  useEffect(() => {
    const isLastIndex = currentIndex === slides.length - 1;
    const newIndex = isLastIndex ? 0 : currentIndex + 1;

    timeoutRef.current = window.setTimeout(() => {
      setCurrentIndex(newIndex);
    }, delay);
    return () => {
      resetTimeout();
    };
  }, [currentIndex]);

  return (
    <Box h="100%" w="100%" pos="relative" bg="brand.600">
      <IconButton
        color="brand.300"
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={goToPrev}
      >
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      <IconButton
        color="brand.300"
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={goToNext}
      >
        <BiRightArrowAlt size="40px" />
      </IconButton>

      <Flex
        align={"center"}
        justify="space-around"
        px="2rem"
        w="100%"
        h="100%"
        pb="2rem"
        transition="ease"
        whiteSpace="nowrap"
        transitionDuration={"1000ms"}
      >
        <Flex
          align={"center"}
          justify="center"
          direction={"column"}
          gap="1.4rem"
        >
          <Text color="brand.500" textTransform="uppercase">
            Proud Partners
          </Text>
          <Heading color="brand.500" textTransform="uppercase">
            Hennessy
          </Heading>
          <Text color="brand.500">
            {"You haven't had Cognac, if you are yet to"}
            <br />
            taste Hennessy in all its glory .Try it today
          </Text>
          <Button
            color="brand.200"
            bg="brand.300"
            _hover={{
              bg: "brand.400",
              color: "brand.500",
            }}
          >
            Order Now
          </Button>
        </Flex>
        <Box maxW="300px" maxH="300px" pos="relative">
          <Image
            src={slides[currentIndex]}
            alt="g"
            h="auto"
            w="100%"
            objectFit={"cover"}
            objectPosition="center"
          />
        </Box>
        {/* <Box
          backgroundImage={`url(${slides[currentIndex]})`}
          backgroundPosition="center"
          backgroundSize={"cover"}
          w="300px"
          h="100%"
          border="none"
        ></Box> */}
        {/* <Box maxW="40%" maxH="40%" pos="relative"> */}
      </Flex>
    </Box>
  );
};
