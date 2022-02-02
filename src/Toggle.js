import React from "react";
import { Button, Flex, useColorMode } from "@chakra-ui/core";

const Toggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div>
      <Flex align="start" justify="space-around" height="50px" width="100vw" direction="column" padding="10px" boxSizing="border-box">
        <Button width="50px" onClick={() => toggleColorMode()}>
         {colorMode}
        </Button>
      </Flex>
    </div>
  );
};

export default Toggle;