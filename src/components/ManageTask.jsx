import React from "react";
import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { PiEyeSlashFill } from "react-icons/pi";
import Ellipse from "../images/Ellipse 12.png";

function ManageTask() {
  const progressDetails = [
    {
      progressValue: 20,
      progresstitle: "In PROGRESS",
    },
    {
      progressValue: 18,
      progresstitle: "COMPLETED",
    },
    {
      progressValue: 5,
      progresstitle: "BACKLOGS",
    },
  ];

  return (
    <Box px={6} py={10} bg={"#FFFBF0"} w={"40%"}>
      <SimpleGrid column={2}>
        {/* main section */}
        <Box gridColumn={"span 2"}>
          {/* head part */}
          <Box display={"flex"} justifyContent="space-between">
            <Text fontSize="lg" fontWeight="bold">
              Manage Task
            </Text>
            <Box display={"flex"}>
              <Text>View</Text>
              <IoIosArrowRoundForward size={25} />
            </Box>
          </Box>
          {/* mobile section */}
          <Box py={"10"} display={"flex"} gap={10}>
            <Box
              py={"10"}
              px={"7"}
              bg={"#FFE499"}
              w={"200px"}
              borderRadius={"20px"}
              h={"380px"}
            >
              <Text fontSize={"25"}>50%</Text>
              <Text>To-do</Text>
            </Box>

            {/* section 2 */}

            <Box display={"flex"} flexDirection={"column"} gap={"4rem"}>
              {progressDetails.map((data) => (
                <Progress
                  display={"flex"}
                  gap={6}
                  progressValue={data.progressValue}
                  progresstitle={data.progresstitle}
                />
              ))}
            </Box>
          </Box>
        </Box>
      </SimpleGrid>
    </Box>
  );
}

const Progress = ({ progressValue, progresstitle }) => {
  return (
    <Box
      px={"10"}
      border="1px solid #ccc"
      p={3}
      borderRadius={"10"}
      display={"flex"}
      gap={10}
      spacing={4}
    >
      <Text>
        <PiEyeSlashFill size={25} px={"10"} />
      </Text>
      <Box display={"flex"} flexDirection={"column"}>
        <Text>{progressValue}</Text>
        <Text>{progresstitle}</Text>
      </Box>
      <img src={Ellipse} />
    </Box>
  );
};

export default ManageTask;
