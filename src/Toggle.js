import React from "react";
import { Button, Flex, useColorMode } from "@chakra-ui/core";

const Toggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div>
      <Flex align="start" justify="space-around" height="50px" width="100vw" direction="column">
        <Button size="lg" onClick={() => toggleColorMode()}>
         Toggle Mode {colorMode}
        </Button>
      </Flex>
    </div>
  );
};

export default Toggle;