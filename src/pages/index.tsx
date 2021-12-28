import {
  Box,
  Center,
  Flex,
  Heading,
  Spacer,
  Stack,
  useColorMode,
} from "@chakra-ui/react";
import Base from "@components/og-image";
import ThemeToggle from "@components/ThemeToggle";
import type { NextPage } from "next";
import Head from "next/head";
import theme from "@styles/theme";

const Home: NextPage = () => {
  const { colorMode } = useColorMode();
  const color =
    colorMode === "light" ? theme.colors.black.dark : theme.colors.white.bright;
  return (
    <Center align="center" h="100vh">
      <Head>
        <title>draxel | og-image service</title>
        <meta name="description" content="draxel.io og-image service" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Stack direction="column" as="main">
        <ThemeToggle />
        <Box bgColor={color} p="0.25rem">
          <Base />
        </Box>
      </Stack>
    </Center>
  );
};

export default Home;
