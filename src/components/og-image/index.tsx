import { Box, Flex, Text, useColorMode } from "@chakra-ui/react";
import { css, Global } from "@emotion/react";
import theme from "@styles/theme";
import { FC } from "react";
import SVG, { OGProps } from "./BaseSVG";
import { sanitizeHtml } from "@lib/sanitizer";
import twemoji from "twemoji";
import { marked } from "marked";
import "@fontsource/nunito";
import React from "react";

type BaseOGImageProps = {
  mode?: "light" | "dark";
  text?: string;
  fontFamilyUrl?: string;
  fontFamily?: string;
  md?: boolean;
} & OGProps;

const emojify = (text: string) => {
  const result = twemoji.parse(text, { folder: "svg", ext: ".svg" });
  return result;
};

const Base: FC<BaseOGImageProps> = ({
  mode,
  text = "Drake Axelrod's Portfolio Website",
  md = false,
  ...rest
}) => {
  const { colorMode } = useColorMode();
  const isLight = mode ? mode === "light" : colorMode === "light";
  const colors = {
    fg: isLight ? theme.colors.black.dark : theme.colors.white.bright,
    bg: isLight ? theme.colors.white.bright : theme.colors.black.dark,
    alpha: isLight ? theme.colors.blue.normal : theme.colors.magenta.bright,
    beta: isLight ? theme.colors.magenta.normal : theme.colors.blue.bright,
    omega: isLight ? theme.colors.red.normal : theme.colors.green.bright,
    gamma: isLight ? theme.colors.green.normal : theme.colors.red.bright,
    theta: isLight ? theme.colors.cyan.normal : theme.colors.yellow.bright,
    delta: isLight ? theme.colors.yellow.normal : theme.colors.cyan.bright,
  };
  return (
    <>
      <Global
        styles={css`
          @import url("https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap");
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: Nunito, -apple-system, BlinkMacSystemFont, "Segoe UI",
              Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
              sans-serif;
          }
          .og-text {
            font-family: Nunito;
            text-align: center;
          }
        `}
      />
      <Box pos="absolute" w="1200px" h="630px" zIndex={1}>
        <Flex h="100%" w="100%" justify="center" align="center">
          <Text
            className="og-text"
            as="span"
            fontFamily="Nunito"
            fontSize={rest.fontSize}
            alignSelf="center"
            px="200px"
            color={colors.alpha}
            dangerouslySetInnerHTML={{
              __html: emojify(md ? marked(text) : sanitizeHtml(text)),
            }}
          />
        </Flex>
      </Box>
      <SVG mode={mode ? mode : colorMode} {...rest} />
    </>
  );
};

export default Base;
