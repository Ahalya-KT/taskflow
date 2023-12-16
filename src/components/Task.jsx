import { SimpleGrid } from "@chakra-ui/react";
import { Box, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa6";
import { BiDotsVerticalRounded } from "react-icons/bi";


function Task() {
  const [buttonClicked, setButtonClicked] = useState(false);
  const handleButton = () => {
    setButtonClicked(!buttonClicked);
  };

  return (
    <SimpleGrid>
      <Box ml={"1rem"} py={4}>
        {/* div1 */}
        <Box
          display={"flex"}
          fontWeight={500}
          fontSize={"20px"}
          fontFamily="poppins"
        >
          <Text>Task Flow</Text>
          <FaChevronRight size={25} />
          <Text>Manage Task</Text>
        </Box>
        {/* todo list */}
        <Box>
          <ToDoList setButtonClicked={setButtonClicked} />
        </Box>
        <Box
          bg={"#F2F2F2"}
          w="20%"
          h="500px"
          borderRadius={5}
          fontFamily="poppins"
        >
          <Box py={6} px={4}>
            <SurveyDetails />
          </Box>
        </Box>
      </Box>
    </SimpleGrid>
  );
}

const ToDoList = () =>{
 
 
  
  function Task() {
    return (
      <SimpleGrid>
        <Box ml={"1rem"} py={4}>
          {/* div1 */}
          <Box
            display={"flex"}
            fontWeight={500}
            fontSize={"20px"}
            fontFamily="poppins"
          >
            <Text>Task Flow</Text>
            <FaChevronRight size={25} />
            <Text>Manage Task</Text>
          </Box>
          {/* todo list */}
          <Box>
            <ToDoList />
          </Box>
          <Box
            bg={"#F2F2F2"}
            w="20%"
            h="500px"
            borderRadius={5}
            fontFamily="poppins"
          >
            <Box py={6} px={4}>
              <SurveyDetails />
            </Box>
          </Box>
        </Box>
      </SimpleGrid>
    );
  }
  
  const ToDoList = () => {
    const [buttonClicked, setButtonClicked] = useState(false);
    const handleButton = () => {
      setButtonClicked(!buttonClicked);
    };
  
    return (
      <Box>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          w="20%"
          py={"1rem"}
          fontFamily="poppins"
          borderBottomWidth="1px"
          borderBottomColor="gray.300"
          setButtonClicked={setButtonClicked}
        >
          <Box display={"flex"} gap={"1rem"} alignItems={"center"}>
            <Text bg={"#FFF176"} w="3" h="3" borderRadius="full"></Text>
            <Text fontWeight={400} fontSize={"20px"}>
              To Do
            </Text>
            <Text
              bg={"#FFFCDD"}
              p={2}
              w={5}
              h={6}
              borderRadius={3}
              display={"flex"}
              alignItems={"center"}
            >
              7
            </Text>
          </Box>
  
          <Box position="relative">
            <BiDotsVerticalRounded onClick={handleButton} size={15} />
            {buttonClicked && (
              <Box
                bg={"black"}
                color={"#FFFFFF"}
                p={2}
                borderRadius={5}
                position="absolute"
                top="10"
                right="0"
              >
                <Text>Newest</Text>
                <Text>Oldest</Text>
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    );
  
    const SurveyDetails = () => (

      <Box bg={"#FFFFFF"} borderRadius="1rem" px={2} fontFamily="poppins">
        <Box py={5}>
          <Text fontWeight={500} fontSize={"16px"}>
            Employee Survey Questionair
          </Text>
          <Box display={"flex"} gap={"3rem"}>
            <Text fontWeight={500} fontSize={"12px"} py={1}>
              100% to be Completed
            </Text>
            <Box bg={"#FFF176"} borderRadius={3} p={1}>
              <Text fontWeight={500} fontSize={"9px"}>
                Software
              </Text>
            </Box>
          </Box>
        </Box>
  
        <Box display={"flex"} gap={4}>
          <Text fontWeight={400} fontSize={"11px"}>
            Due:7 Dec 2023
          </Text>
          <img src="" alt="no image" />
        </Box>
      </Box>
    );
  };
  
 
  
}

export default Task;
