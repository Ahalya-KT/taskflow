import React from "react";
import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import { IoIosArrowRoundForward } from "react-icons/io";

function ManageTask() {
  return (
    <Box>
      <SimpleGrid>
        <Box
          display={"flex"}
          justifyContent="space-between"
          py={"5"}
          px={"5"}
          bg={""}
          w={"40%"}
        >
          <Text fontSize="lg" fontWeight="bold">
            My task
          </Text>
          <Box display={"flex"} gap={"1"}>
            <p>View</p>
            <IoIosArrowRoundForward size={25} />
          </Box>
        </Box>

        <Box>
          <Box
            bg={"#F2ECFD"}
            justifyContent={"center"}
            px={"14"}
            py={"30"}
            borderRadius={"8"}
          >
            <Text fontSize={"25"} fontWeight={"bold"}>
              50%
            </Text>
            <Text>To-do</Text>
          </Box>
        </Box>
      </SimpleGrid>
    </Box>
  );
}

export default ManageTask;
