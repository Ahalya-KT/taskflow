import React, { useState } from "react";
import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { TiTick } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
import ManageTask from "./ManageTask";
import { FaArrowRight } from "react-icons/fa6";
import imges from "../images/Ellipse 12.png";
import { FaSearch } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { IoMdSend } from "react-icons/io";
  
function MyTask() {
  const [isButtonClicked, setButtonClicked] = useState(1);

  const handleButtonClick = (num) => {
    setButtonClicked(num);
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

  const EmployeeList = [
    {
      name: "mira toff",
    },
    {
      name: "mira toff",
    },
    {
      name: "mira toff",
    },
    {
      name: "mira toff",
    },
    {
      name: "mira toff",
    },
    {
      name: "mira toff",
    },
    {
      name: "mira toff",
    },
    {
      name: "mira toff",
    },
    {
      name: "mira toff",
    },
  ];

  return (
    <SimpleGrid columns={[1, 1, 1, 4, 4, 4]} gap={"1rem"}>
      <Box gridColumn="span 1" gridRow={"span 1"} gap={"8"} px={"6"} h={"100"}>
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
          {/*  */}
          {taskList.map((items, index) => (
            <Task title={items.title} index={index} status={items.status} />
          ))}

          <Box
            // display={{ base: "table-column", md: "flex" }}
            // flexWrap={{ md: "nowrap" }}
            // gap={{ base: "0", md: "2" }}
            // whiteSpace={{ base: "normal", md: "nowrap" }}
            display={"flex"}
          >
            <Box px={"3"} display={"flex"}>
              <Text
                background={"red"}
                borderRadius={"full"}
                w={"4"}
                h={"4"}
              ></Text>
              <Text whiteSpace="nowrap"> to-do</Text>
            </Box>
            <Box display={"flex"}>
              <Text
                background={"red"}
                borderRadius={"full"}
                w={"4"}
                h={"4"}
              ></Text>
              <Text whiteSpace="nowrap"> in-progress</Text>
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
              border={"2px solid #e2e8f0"}
              borderRadius={"10"}
              bg={"#ffffff"}
              p={"5"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Box
                onClick={() => handleButtonClick(1)}
                bg={isButtonClicked === 1 ? "blue.500" : ""}
                color={isButtonClicked === 1 ? "white" : "black"}
                cursor={"pointer"}
              >
                <Text>23</Text>
                <Text>mon</Text>
              </Box>
              <Box
                onClick={() => handleButtonClick(2)}
                bg={isButtonClicked === 2 ? "blue.500" : ""}
                color={isButtonClicked === 2 ? "white" : "black"}
                cursor={"pointer"}
              >
                <Text>23</Text>
                <Text>mon</Text>
              </Box>
              <Box
                onClick={() => handleButtonClick(3)}
                bg={isButtonClicked === 3 ? "blue.500" : ""}
                color={isButtonClicked === 3 ? "white" : "black"}
                cursor={"pointer"}
              >
                <Text>23</Text>
                <Text>mon</Text>
              </Box>
              <Box
                onClick={() => handleButtonClick(4)}
                bg={isButtonClicked === 4 ? "blue.500" : ""}
                color={isButtonClicked === 4 ? "white" : "black"}
                cursor={"pointer"}
              >
                <Text>23</Text>
                <Text>mon</Text>
              </Box>
              <Box
                onClick={() => handleButtonClick(5)}
                bg={isButtonClicked === 5 ? "blue.500" : ""}
                color={isButtonClicked === 5 ? "white" : "black"}
                cursor={"pointer"}
              >
                <Text>23</Text>
                <Text>mon</Text>
              </Box>
              <Box
                onClick={() => handleButtonClick(6)}
                bg={isButtonClicked === 6 ? "blue.500" : ""}
                color={isButtonClicked === 6 ? "white" : "black"}
                cursor={"pointer"}
              >
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
      {/* Box 4 */}
      <Box
        gridColumn={"span 3"}
        bg={"#E8FFE7"}
        p={"1rem"}
        borderRadius={8}
        mb={4}
      >
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          px={"5"}
          py={"7"}
        >
          <Box px={"5"}>
            <Text>Connect</Text>
          </Box>
          <Box display={"flex"} gap={1}>
            <Text>Message</Text>
            <FaArrowRight size={25} />
          </Box>
        </Box>
        <Box display={"flex"} justifyContent={"center"} gap={7}>
          {EmployeeList.map((data) => (
            <EmployeeDetails name={data.name} image={data.image} />
          ))}
          <Box>
            <FaSearch size={20} />
          </Box>
        </Box>

        {/*input box  */}
        <Box
          border="1px solid #4B8049"
          width={"full"}
          p={"2"}
          borderRadius={"6"}
          bg={"#FFFFFF"}
          mb={6}
        >
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            bg={"#E8FFE7"}
            gap={7}
          >
            <Box>
              <GoPlus size={20} />
            </Box>
            <Box>
              <Text>Type Something</Text>
            </Box>
            <IoMdSend size={20} />
          </Box>
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
          <Text whiteSpace={"nowrap"}>{title}</Text>
        </Box>
        <Box background={"yellow"} borderRadius={"full"} p={1}>
          {status === "Backlogs" ? <RxCross2 /> :<TiTick /> }
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

const EmployeeDetails = ({ name, img }) => (
  <Box>
    <Box>
      <img src={imges} />
      <Text>{name}</Text>
    </Box>
  </Box>
);
export default MyTask;
