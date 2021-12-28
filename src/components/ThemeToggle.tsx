import { useColorMode, Button } from "@chakra-ui/react";
import { FC } from "react";

const ThemeToggle: FC = () => {
  const { toggleColorMode: toggleMode, colorMode } = useColorMode();
  return (
    <>
      <Button
        _focus={{
          color: colorMode === "light" ? "white.bright" : "black.dark",
          bgColor: colorMode === "light" ? "black.dark" : "white.bright",
        }}
        _hover={{
          color: colorMode === "light" ? "white.bright" : "black.dark",
          bgColor: colorMode === "light" ? "black.dark" : "white.bright",
        }}
        _active={{
          color: colorMode === "light" ? "white.bright" : "black.dark",
          bgColor: colorMode === "light" ? "black.dark" : "white.bright",
        }}
        mx="0.5rem"
        alignSelf="center"
        color={colorMode === "light" ? "white.bright" : "black.dark"}
        bgColor={colorMode === "light" ? "black.dark" : "white.bright"}
        aria-label="toggle dark and light mode"
        onClick={toggleMode}
        m="1rem"
        fontSize="xx-large"
      >
        toggle {colorMode === "light" ? "dark" : "light"} mode
      </Button>
    </>
  );
};

export default ThemeToggle;
