import { SimpleGrid } from "@chakra-ui/react";
import { Box, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { Checkbox } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import Timeline from "react-timelines";
import "react-timelines/lib/css/style.css";

//  track time page
function TrackTime() {
  // const [buttonclicked, setButtonClicked] = useState(num);
  // const handleButton = (num) => {
  //   setButtonClicked(num);
  // };

  const Date = [
    {
      date: 15,
      day: "Mon",
      id: 1,
    },
    {
      date: 16,
      day: "Tue",
      id: 2,
    },
    {
      date: 17,
      day: "Wed",
      id: 3,
    },
    {
      date: 18,
      day: "Thu",
      id: 4,
    },
    {
      date: 19,
      day: "Fri",
      id: 5,
    },
    {
      date: 20,
      day: "Sat",
      id: 6,
    },
    {
      date: 21,
      day: "Sun",
      id: 7,
    },
    {
      date: 22,
      day: "Mon",
      id: 8,
    },
    {
      date: 23,
      day: "Tue",
      id: 9,
    },
  ];

  const schedules = [
    {
      time: "9:00 AM",
      title: "HR Interview",
    },
    {
      time: "9:00 AM",
      title: "Client meeting",
    },
    {
      time: "9:00 AM",
      title: "Review with UX Team",
    },
    {
      time: "9:00 AM",
      title: "Team Meeting",
    },
    {
      time: "9:00 AM",
      title: "Stakholder Meeting",
    },
  ];
  return (
    <SimpleGrid py={"2rem"}>
      {/* main div */}

      {/*calendar  */}

      <Box display={"flex"} gap={"2rem"}>
        <Box w="75%">
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            gap={"2rem"}
            ml={"1rem"}
            boxShadow="md"
            h="100px"
          >
            {Date.map((item) => (
              <Calendar date={item.date} day={item.day} />
            ))}
          </Box>
          {/* time */}
          <Box ml={"1rem"}>
            {/* <Timeline /> */}
          </Box>
        </Box>
        {/* calender2 */}
        <Box>
          <Box w="25%">
            <DayPicker />
          </Box>

          {/* schedule list */}
          <Box boxShadow="md" w="300px">
            <Box
              display={"flex"}
              gap={"2rem"}
              justifyContent={"space-between"}
              py={"1rem"}
              justifyItems={"center"}
              ml={"2rem"}
            >
              <Box>
                <Text>Today's Schedules</Text>
              </Box>
              <Box display={"flex"} mr={"2rem"}>
                <FiEdit size={12} />
                <Text fontSize={12}>0/5</Text>
              </Box>
            </Box>
            {schedules.map((data) => (
              <ScheduleList time={data.time} title={data.title} />
            ))}
            <Box>
              <Button
                colorScheme="teal"
                size="md"
                w="150px"
                mx="auto"
                alignItems={"center"}
                ml={"5rem"}
                py={5}
              >
                Click Me
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </SimpleGrid>
  );
}
// calender
const Calendar = ({ date, day}) => (
  <Box
    bg={"#FFFFFF"}
    textAlign={"center"}
    ml={"1rem"}
    fontFamily="poppins"
    fontWeight={400}
    fontSize={"20px"}
  >
    <Text>{date}</Text>
    <Text>{day}</Text>
  </Box>
);
export default TrackTime;

// Schedulelist
const ScheduleList = ({ time, title }) => (
  <Box ml={"2rem"}>
    <Box display={"flex"} justifyContent={"space-between"}>
      <Box mt={"1rem"}>
        <Text>{time}</Text>
        <Text>{title}</Text>
      </Box>
      <Box mr={"2rem"}>
        <Checkbox value="checkbox1"></Checkbox>
      </Box>
    </Box>
  </Box>
);
