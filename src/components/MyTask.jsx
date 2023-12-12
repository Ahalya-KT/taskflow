import React from "react";
import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { TiTick } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";

function MyTask() {
  const taskList = [
    {
      title: "Employee Survey",
      status: "To-do",
    },
    {
      title: "Finance team meeting",
      status: "In progress",
    },
    {
      title: "Bank Card issue",
      status: "Completed",
    },
    {
      title: "interview session",
      status: "Backlogs",
    },
    {
      title: "Bussiness analytics",
    },
    {
      title: "compeitor Visit",
    },
  ];

  return (
    <Box gap={"8"} px={"6"} py={"10"} w="30%">
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3 }}
        display={"flex"}
        gap={"6"}
        pb={"5"}
        bg={"#F2ECFD"}
        flexDir="column"
        borderRadius={"8px"}
      >
        <Box
          display={"flex"}
          gridColumn="span2"
          justifyContent="space-between"
          py={"5"}
          px={"5"}
        >
          <Text fontSize="lg" fontWeight="bold">
            My task
          </Text>
          <Box display={"flex"} gap={"1"}>
            <p>View</p>
            <IoIosArrowRoundForward size={25} />
          </Box>
        </Box>

        {taskList.map((items, index) => (
          <Task title={items.title} index={index} status={items.status} />
        ))}

        <Box
          display={{ base: "table-column", md: "flex" }}
          flexWrap={{ md: "nowrap" }}
          gap={{ base: "0", md: "2" }}
          whiteSpace={{ base: "normal", md: "nowrap" }}
        >
          <Box px={"3"} display={"flex"}>
            <Text
              background={"red"}
              borderRadius={"full"}
              w={"4"}
              h={"4"}
            ></Text>
            <Text> to-do</Text>
          </Box>
          <Box display={"flex"}>
            <Text
              background={"red"}
              borderRadius={"full"}
              w={"4"}
              h={"4"}
            ></Text>
            <Text> in-progress</Text>
          </Box>
          <Box display={"flex"}>
            <Text
              background={"red"}
              borderRadius={"full"}
              w={"4"}
              h={"4"}
            ></Text>
            <Text> Completed</Text>
          </Box>
          <Box display={"flex"}>
            <Text
              background={"red"}
              borderRadius={"full"}
              w={"4"}
              h={"4"}
              py={"1"}
            ></Text>

            <Text> Backlogs</Text>
          </Box>
        </Box>
      </SimpleGrid>
    </Box>
  );
}

const Task = ({ title, index, status }) => (
  <Box px={"5"}>
    <Box
      border={"2px solid #e2e8f0"}
      p={"2"}
      borderRadius={"8px"}
      background={"#ffffff"}
    >
      <Box display={"flex"} justifyContent="space-between" gap={"5"} px={"5"}>
        <Box display={"flex"} gap={3}>
          <Text>{index}</Text>
          <Text>{title}</Text>
        </Box>
        <Box background={"yellow"} borderRadius={"full"} p={1}>
          {status === "Backlogs" ? <RxCross2 /> : <TiTick />}
        </Box>
      </Box>
    </Box>
  </Box>
);
export default MyTask;
