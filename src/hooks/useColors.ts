import { useColorModeValue } from "@chakra-ui/react";
import theme from "@styles/theme";

const useColors = () => {
  return {
    default: {
      fg: useColorModeValue("black.dark", "white.bright"),
      bg: useColorModeValue("white.bright", "black.dark"),
    },
    background: {
      dark: useColorModeValue("white.dark", "black.dark"),
      normal: useColorModeValue("white.normal", "black.normal"),
      bright: useColorModeValue("white.bright", "black.bright"),
    },
    foreground: {
      dark: useColorModeValue("black.dark", "white.dark"),
      normal: useColorModeValue("black.normal", "white.normal"),
      bright: useColorModeValue("black.bright", "white.bright"),
    },
    // alpha: useColorModeValue("blue.normal", "magenta.bright"),
    // beta: useColorModeValue("magenta.normal", "blue.bright"),
    // omega: useColorModeValue("red.normal", "green.bright"),
    // gamma: useColorModeValue("green.normal", "red.bright"),
    // theta: useColorModeValue("cyan.normal", "yellow.bright"),
    // delta: useColorModeValue("yellow.normal", "cyan.bright"),
    alpha: useColorModeValue(
      theme.colors.blue.normal,
      theme.colors.magenta.bright,
    ),
    beta: useColorModeValue(
      theme.colors.magenta.normal,
      theme.colors.blue.bright,
    ),
    omega: useColorModeValue(
      theme.colors.red.normal,
      theme.colors.green.bright,
    ),
    gamma: useColorModeValue(
      theme.colors.green.normal,
      theme.colors.red.bright,
    ),
    theta: useColorModeValue(
      theme.colors.cyan.normal,
      theme.colors.yellow.bright,
    ),
    delta: useColorModeValue(
      theme.colors.yellow.normal,
      theme.colors.cyan.bright,
    ),
  };
};

export default useColors;
