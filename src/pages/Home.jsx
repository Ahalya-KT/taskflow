import React from "react";
import MyTask from "../components/MyTask";
import { SimpleGrid } from "@chakra-ui/react";
import ManageTask from "../components/ManageTask";
import { Box } from "@chakra-ui/react";

function Home() {
  return (
    <SimpleGrid>
      <Box display={"flex"} w="100%">
        <MyTask />
        <ManageTask />
      </Box>
    </SimpleGrid>
  );
}

export default Home;
