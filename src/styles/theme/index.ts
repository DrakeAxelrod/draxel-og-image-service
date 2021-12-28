import {
  extendTheme,
  ThemeConfig,
  withDefaultVariant,
  useStyleConfig,
} from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import colors from "@styles/colors.module.scss";
import fonts from "@styles/fonts.module.scss";
import styles from "./styles";

// const config: ThemeConfig = {
//   initialColorMode: "dark",
//   useSystemColorMode: false,
// };

export default extendTheme({
  initialColorMode: "dark",
  useSystemColorMode: false,
  ...styles,
});
