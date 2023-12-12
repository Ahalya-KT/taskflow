import React from "react";
import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { PiEyeSlashFill } from "react-icons/pi";
import Ellipse from "../images/Ellipse 12.png";
import { TiTick } from "react-icons/ti";
import { AiFillMessage } from "react-icons/ai";

function ManageTask() {
  const progressDetails = [
    {
      progressValue: 20,
      progresstitle: "In PROGRESS",
      icon: <PiEyeSlashFill size={25} />,
    },
    {
      progressValue: 18,
      progresstitle: "COMPLETED",
      icon: <TiTick size={25} />,
    },
    {
      progressValue: 5,
      progresstitle: "BACKLOGS",
      icon: <AiFillMessage size={25} />,
    },
  ];

  return (
    <Box gridColumn={"span 2"} gridRow={"span 2"} px={6} py={10} bg={"#FFFBF0"} h>
      <Box>
        {/* main section */}
        <Box>
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

            <Box
              display={"flex"}
              flexDirection={"column"}
              gap={"4rem"}
              justifyContent={"center"}
            >
              {progressDetails.map((data) => (
                <Progress
                  display={"flex"}
                  gap={6}
                  progressValue={data.progressValue}
                  progresstitle={data.progresstitle}
                  icon={data.icon}
                />
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

const Progress = ({ progressValue, progresstitle, icon }) => {
  return (
    <Box
      px={"10"}
      border="1px solid #FFE499"
      bg={"#FFFFFF"}
      borderRadius={"10"}
      display={"flex"}
      gap={10}
      spacing={4}
    >
      <Text>{icon}</Text>
      <Box display={"flex"} flexDirection={"column"}>
        <Text
          fontFamily={"popp"}
          fontWeight={"600"}
          color={"#000000"}
          fontSize={"32px"}
        >
          {progressValue}
        </Text>
        <Text fontWeight={"500"} fontSize={"12"}>
          {progresstitle}
        </Text>
      </Box>
      <img src={Ellipse} />
    </Box>
  );
};

export default ManageTask;
