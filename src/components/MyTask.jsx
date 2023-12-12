import React, { useState } from "react";
import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { TiTick } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
import ManageTask from "./ManageTask";
import { FaArrowRight } from "react-icons/fa6";

function MyTask() {
  const [isButtonClicked, setButtonClicked] = useState(false);

  const handleButtonClick = () => {
    setButtonClicked(!isButtonClicked);
  };

  const officelist = [
    {
      title: "HR interview",
      time: "10:00AM",
    },
    {
      title: "Client Meeting",
      time: "11:00Am",
    },

    {
      title: "Team Meeting",
      time: "12:00Am",
    },
    {
      title: "Team Meeting",
      time: "1:00Am",
    },
    {
      title: "Team Meeting",
      time: "2:00Am",
    },
  ];
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
    <SimpleGrid columns={[1, 1, 1, 4, 4, 4]}>
      <Box gridColumn="span 1" gridRow={"span 2"} gap={"8"} px={"6"} h={"100"}>
        <Box
          display={"flex"}
          gap={"6"}
          pb={"5"}
          bg={"#F2ECFD"}
          flexDir="column"
          borderRadius={"8px"}
        >
          <Box
            display={"flex"}
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
        </Box>
      </Box>

      <ManageTask />
      {/* box 3 */}
      <Box gridColumn={"span 1"} gridRow={"span 3"} bg={"#FFE6E0"}>
        <Box>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            px={"5"}
            py={"10"}
          >
            <Text fontSize={"lg"} fontWeight={"bold"}>
              Track Time
            </Text>
            <Box display={"flex"} gap={2}>
              <Text>Track</Text>
              <FaArrowRight size={25} />
            </Box>
          </Box>
          <Box>
            <Box px={"5"} py={"4"}>
              <Text>Calender</Text>
            </Box>

            <Box
              display={"flex"}
              gap={4}
              px={"10"}
              py={"10"}
              border={"2px solid #e2e8f0"}
              borderRadius={"10"}
              bg={"#ffffff"}
              p={"5"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Box
                onClick={handleButtonClick}
                bg={isButtonClicked ? "blue.500" : "gray.200"}
                color={isButtonClicked ? "white" : "black"}
              >
                <Text>23</Text>
                <Text>mon</Text>
              </Box>
              <Box>
                <Text>23</Text>
                <Text>mon</Text>
              </Box>
              <Box>
                <Text>23</Text>
                <Text>mon</Text>
              </Box>
              <Box>
                <Text>23</Text>
                <Text>mon</Text>
              </Box>
              <Box>
                <Text>23</Text>
                <Text>mon</Text>
              </Box>
              <Box>
                <Text>23</Text>
                <Text>mon</Text>
              </Box>
            </Box>

            <Box px={"5"} py={"5"}>
              <Text>2:00</Text>
            </Box>

            <Box>
              {officelist.map((items) => (
                <OfficeDetails title={items.title} time={items.time} />
              ))}
            </Box>
          </Box>
        </Box>
      </Box>

      <Box gridColumn={"span 3"}>
        <Box px={"5"}>
          <Text>Connect</Text>
        </Box>
        <Box>
          <img src=""/>
          <Text>Hello</Text>
        </Box>
      </Box>
    </SimpleGrid>
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

const OfficeDetails = ({ title, time }) => (
  <Box display={"flex"} justifyContent={"space-between"} py={"4"} px={"6"}>
    <Box>
      <Text>{time}</Text>
    </Box>
    <Box
      bg={"#ffffff"}
      p={"3"}
      w={"200px"}
      borderRadius={"10px"}
      borderLeft="4px solid blue.500"
    >
      <Text>{title}</Text>
    </Box>
  </Box>
);
export default MyTask;
