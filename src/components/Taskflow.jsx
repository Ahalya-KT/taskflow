import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { MdArrowForwardIos, MdDelete } from "react-icons/md";
import { MdArrowDropDownCircle } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { FaBookmark } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { TiTick } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
import imges from "../images/Ellipse 12.png";

function Taskflow() {
  const [buttonClicked, setButtonClicked] = useState(1);
  const handleButtonClicked = (num) => {
    setButtonClicked(num);
  };
  const tasks = [
    {
      status: "Todo",
      title: "Employee Survey Questionnaire",
      time: "05 Nov 2023 9 :40 PM",
      subTaskCompleted: 3,
      totalSubTasks: 3,
      id: 1,
    },
    {
      status: "Done",
      title: "Presentation for meeting",
      time: "05 Nov 2023 9 :40 PM",
      subTaskCompleted: 2,
      totalSubTasks: 2,
      id: 2,
    },
    {
      status: "Backlog",
      title: "Schedule interviews",
      time: "05 Nov 2023 9 :40 PM",
      subTaskCompleted: 3,
      id: 3,
    },
    {
      status: "Backlog",
      title: "Complete the financial statement for the quarter",
      time: "05 Nov 2023 9 :40 PM",
      subTaskCompleted: 3,
      id: 4,
    },
    {
      status: "Backlog",
      title: "Pay monthly bills,such as rent utilities and internet",
      time: "05 Nov 2023 9 :40 PM",
      subTaskCompleted: 3,
      id: 5,
    },
    {
      status: "Backlog",
      title: "Pay monthly bills,such as rent utilities and internet",
      time: "05 Nov 2023 9 :40 PM",
      subTaskCompleted: 3,
      id: 6,
    },
  ];

  return (
    <Box>
      <Flex w="100%">
        <Box
          borderRadius="0.5rem"
          w="40%"
          display="flex"
          m="1rem"
          justifyContent="space-between"
          alignItems="center"
          border="1px solid black"
          borderLeft="4px solid black"
          p={4}
        >
          <Flex alignItems="center">
            <Text fontFamily="poppins">Task flow</Text>
            <MdArrowForwardIos />
            <Text fontFamily="poppins">My Tasks</Text>
          </Flex>
          <Flex alignItems="center">
            <MdArrowDropDownCircle />
            <Text fontFamily="poppins">All</Text>
          </Flex>
        </Box>

        <Box
          borderRadius="0.5rem"
          ml="1rem"
          w="60%"
          display="flex"
          m="1rem"
          justifyContent="space-between"
          alignItems="center"
          border="1px solid black"
          p={4}
        >
          <Flex alignItems="center">
            <Image src={imges} h="2rem" w="2rem" borderRadius="50%" />
            <Box
              border="1px solid #CCB0FD"
              bg="#F2ECFD"
              fontFamily="poppins"
              fontSize="0.7rem"
              p="0.5rem"
              borderRadius="1rem"
              color="#B287FD"
            >
              Due: 15 Nov 2023
            </Box>
            <Box
              ml="1rem"
              border="1px solid #CCB0FD"
              bg="#F2ECFD"
              fontFamily="poppins"
              fontSize="0.7rem"
              p="0.5rem"
              borderRadius="1rem"
              color="#B287FD"
            >
              Staus: To-do
            </Box>
          </Flex>
          <Flex alignItems="center">
            <Box
              display="flex"
              flexDir="column"
              justifyContent="center"
              alignItems="center"
            >
              {" "}
              <Box
                border="1px solid #CCB0FD"
                bg="#F2ECFD"
                p="0.5rem"
                borderRadius="1rem"
                color="#B287FD"
              >
                <MdDelete />
              </Box>
              <Text fontFamily="poppins" fontSize="0.7rem">
                Delete
              </Text>
            </Box>
            <Box
              ml="1rem"
              display="flex"
              flexDir="column"
              justifyContent="center"
              alignItems="center"
            >
              {" "}
              <Box
                border="1px solid #CCB0FD"
                bg="#F2ECFD"
                p="0.5rem"
                borderRadius="1rem"
                color="#B287FD"
              >
                <MdEdit />
              </Box>
              <Text fontFamily="poppins" fontSize="0.7rem">
                Edit
              </Text>
            </Box>
            <Box
              ml="1rem"
              display="flex"
              flexDir="column"
              justifyContent="center"
              alignItems="center"
            >
              {" "}
              <Box
                border="1px solid #CCB0FD"
                bg="#F2ECFD"
                p="0.5rem"
                borderRadius="1rem"
                color="#B287FD"
              >
                <FaBookmark />
              </Box>
              <Text fontFamily="poppins" fontSize="0.7rem">
                Mark as
              </Text>
            </Box>
          </Flex>
        </Box>
      </Flex>
      {/* box1 */}
      <Box display={"flex"}>
        <Box w="40%">
          {tasks.map((data) => (
            <TaskDetails
              title={data.title}
              time={data.time}
              status={data.status}
              data={data}
              buttonClicked={buttonClicked}
             handleButtonClicked={handleButtonClicked}
            />
          ))}
        </Box>
        {/* box 2 */}
        <Box ml={"3rem"} w="60%" border="1px solid black" borderRadius="0.5rem">
          {/* div1 */}
          <Box
            display={"flex"}
            alignItems={"center"}
            py={6}
            px={5}
            borderBottom="1px solid"
          >
            <Box bg={"#9AD894"} w="5" h="5" borderRadius={"md"}>
              <TiTick size={20} />
            </Box>
            <Text fontWeight={500} fontSize={"15px"}>
              Prepare a Presenation for the upcoming meetings
            </Text>
          </Box>

          {/* div 2 */}
          <Box ml={"2rem"} py={2} borderBottom="1px solid">
            <Text py={3} color={"#0C2242"} fontWeight={600} fontSize={"20px"}>
              Description
            </Text>
            <Text py={2} fontWeight={400} fontSize={"16px"}>
              The task is to create a well structured and engaging Presenation
              for the upcoming meeting.This presentation serves as a medium to
              effectively communicate important information proposals,findings
              or updates to the meeting attendees.The Content of the
              presentation will vary depending on the meeting's purpose but
              generally includes text.visuals,and potentially multimedia
              elements to support the spoken delivery{" "}
            </Text>
          </Box>
          {/* div 3 */}
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            ml={"2rem"}
            py={3}
            borderBottom="1px solid"
          >
            <Box>
              <Text py={2} fontWeight={600} fontSize={"16px"} color={"#0C2242"}>Time Schedule</Text>
              <Text>
                <span color="red">Start</span> :01 Nov 2023 9:00AM
              </Text>
              <Text>
                <span color="green">End</span> :15 Nov 2023 6:00AM
              </Text>
            </Box>

            <Box>
              <Text py={2} color={"#0C2242"} fontWeight={600} fontSize={"16px"}>Assigners</Text>
              <Box display={"flex"} gap={"1rem"}>
                <Box>
                  <img src={imges} />
                  <Text>Daniel</Text>
                </Box>
                <Box>
                  <img src={imges} />
                  <Text>Daniel</Text>
                </Box>
                <Box>
                  <img src={imges} />
                  <Text>Daniel</Text>
                </Box>
                <Box>
                  <img src={imges} />
                  <Text>Daniel</Text>
                </Box>
                <Box>
                  <img src={imges} />
                  <Text>Daniel</Text>
                </Box>
                <Box>
                  <img src={imges} />
                  <Text>Daniel</Text>
                </Box>
              </Box>
            </Box>
          </Box>
          {/* div4 */}
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            ml={"2rem"}
            py={3}
          >
            <Box py={3}>
              <Text fontWeight={600} fontSize={"16px"} color={"#0C2242"} >Subtask</Text>
              <Text py={2}>
                1 Clearly define the scope of the survey,including which topics
                and areas it should cover
              </Text>
              <Text>
                2 Choose the method of survey adminstration,whether it's online
                paper-based or in-person
              </Text>
            </Box>
            <Box   alignItems={"center"}  >
            <Box backgroundColor="blue.500" borderRadius="md">
            <TiTick size={20} color="#FFFFFF" />
            </Box>
            <Box backgroundColor="blue.500" borderRadius="md">
             <TiTick size={20} color="#FFFFFF" />
            </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
//task details
const TaskDetails = ({ data, buttonClicked, handleButtonClicked }) => {
 
  return (
    <Box
      ml={"1rem"}
      display="flex"
      mb={5}
      justifyContent={"space-between"}
      gap={"2rem"}
      border="1px solid black"
      w={"full"}
      borderRadius="0.5rem"
      p={"3"}
      boxShadow="lg"
      onClick={() => handleButtonClicked(data.id)}
      bg={buttonClicked === data.id ? "#F2ECFD" : ""}
      color={buttonClicked == data.id ? "black" : "black"}
      cursor={"pointer"}
    >
      <Box ml={"1rem"} flexDir={"column"} gap={2}>
        <Box display={"flex"} gap={"1rem"} alignItems={"center"}>
          <Box bg={"#EFDE4C"} w="4" h="4" borderRadius="md">
            {data.status === "Done" ? <RxCross2 bg={"red"} /> : <TiTick />}
          </Box>
          <Text fontWeight={"400"} fontSize={"16px"}>
            {data.title}
          </Text>
        </Box>
        <Text pl={"1.5rem"} fontSize={"12px"} color={"#595959"}>
          {data.time}
        </Text>
      </Box>

      <Box
        display={"flex"}
        alignItems={"center"}
        color={"#595959"}
        fontWeight={"400"}
        fontSize={"12px"}
      >
        <FiEdit size={12} />
        <Text ml={"0.5rem"}>0/3</Text>
      </Box>
    </Box>
  );
};

export default Taskflow;
