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
      icon: <PiEyeSlashFill size={20} />,
    },
    {
      progressValue: 18,
      progresstitle: "COMPLETED",
      icon: <TiTick size={20} />,
    },
    {
      progressValue: 5,
      progresstitle: "BACKLOGS",
      icon: <AiFillMessage size={20} />,
    },
  ];

  return (
    <Box
      gridColumn={"span 2"}
      gridRow={"span 1"}
      bg={"#FFFBF0"}
      borderRadius={"10"}
    >
      {/* main section */}
      <Box>
        {/* head part */}
        <Box display={"flex"} justifyContent="space-between" px={"6"} py={"5"}>
          <Text fontSize="lg" fontWeight="bold">
            Manage Task
          </Text>
          <Box display={"flex"}>
            <Text>View</Text>
            <IoIosArrowRoundForward size={25} />
          </Box>
        </Box>
        {/* mobile section */}
        <Box py={"10"} display={"flex"} gap={"3rem"}>
          <Box
            bg={"#FFE499"}
            w={"200px"}
            borderRadius={"20px"}
            h={"380px"}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            marginLeft={"2rem"}
          >
            <Text fontSize={"25"} fontWeight={"bold"}>
              50%
            </Text>
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
      alignItems="center"
      justifyContent="center"
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
