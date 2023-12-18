import {
  SimpleGrid,
  Box,
  Text,
  Input,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdAddCircle } from "react-icons/md";
import { IoIosHeartEmpty } from "react-icons/io";
import { Checkbox } from "@chakra-ui/react";
import { Radio, RadioGroup, Stack } from "@chakra-ui/react";
import { Textarea, Button } from "@chakra-ui/react";
import ImageUpload from "./ImageUpload";
import { TiTick } from "react-icons/ti";

function Messages() {
  return (
    <SimpleGrid>
      <Box
        ml={"2rem"}
        py={"2rem"}
        display={"flex"}
        gap={"2rem"}
        flexDir={{ sm: "column", md: "column", lg: "column", xl: "row" }}
      >
        {/* Box 1 */}
        <Box w="50%" boxShadow="md">
          <Box display="flex" py={"1rem"} ml={"1rem"} fontFamily="poppins">
            <Text>TaskFlow</Text>
            <FaArrowRightLong size={12} />
            <Text>Schedule task</Text>
          </Box>
          <Box display="flex" justifyContent={"space-between"} gap={"2rem"}>
            {/* sub box1 */}
            <Box ml={"1rem"}>
              <Box display={"flex"} fontFamily="poppins">
                <FormControl>
                  <FormLabel>Start Date</FormLabel>
                  <Input
                    placeholder="Select Date and Time"
                    size="md"
                    type="date"
                    fontSize={"0.9rem"}
                  />
                </FormControl>
              </Box>

              <Box fontFamily="poppins">
                <FormControl>
                  <FormLabel>End Date</FormLabel>
                  <Input
                    placeholder="Select Date"
                    size="md"
                    type="date"
                    fontSize={"0.9rem"}
                  />
                </FormControl>
              </Box>
            </Box>

            {/* sub box2 */}
            <Box ml={"1rem"}>
              <Box fontFamily="poppins" fontSize={"0.5rem"}>
                <FormControl>
                  <FormLabel>Start Time</FormLabel>
                  <Input
                    type="time"
                    placeholder="9:00 AM"
                    width="300px"
                    fontSize={"0.9rem"}
                  />
                </FormControl>
              </Box>

              <Box fontFamily="poppins" fontSize={"0.5rem"}>
                <FormControl>
                  <FormLabel>End Time</FormLabel>
                  <Input
                    type="time"
                    placeholder="6:00 AM"
                    width="300px"
                    fontSize={"0.9rem"}
                  />
                </FormControl>
              </Box>
            </Box>
          </Box>
          <Box ml={"2rem"} py={"2rem"} display={"flex"} gap={1}>
            <Box bg={"greenyellow"} borderRadius={"full"} p={1}>
              <TiTick />
            </Box>

            <Box>
              <Text
                alignItems={"center"}
                fontFamily="poppins"
                fontSize={"0.8rem"}
              >
                This Task is Scheduled to begin from 9:30 am on 3rd of oct 2023
                to 6:00 pm to 10 of oct 2023
              </Text>
            </Box>
          </Box>

          <Box py={"3rem"} ml={"1rem"}>
            <Box>
              <FormControl>
                <FormLabel>Task title</FormLabel>
                <Input type="text" placeholder="Enter the title of your task" />
              </FormControl>
            </Box>

            <Box py={"1rem"} fontFamily="poppins">
              <FormControl>
                <FormLabel>Task Description</FormLabel>
                <Input type="text" height="50px" />
              </FormControl>
            </Box>
          </Box>
        </Box>

        {/* box2 */}
        {/* select department */}
        <Box ml={"2rem"} fontFamily="poppins">
          <Text py={"1rem"} fontSize={"1rem"}>
            Select Department
          </Text>
          <Box
            display={"flex"}
            gap={"1rem"}
            border="1px solid #ccc"
            width="600px"
            p={2}
          >
            <Text
              fontFamily="poppins"
              fontSize={"0.6rem"}
              bg={"seashell"}
              borderRadius="md"
              borderWidth="1px"
              p={1}
            >
              Software
            </Text>
            <Box display={"flex"} justifyContent={"space-between"}>
              <Box display={"flex"} fontFamily="poppins" fontSize={"0.6rem"} alignItems={"center"}>
                <Text fontSize={"0.8rem"}>Add</Text>
                <MdAddCircle size={12} />
              </Box>

              <Box>
                <IoIosHeartEmpty />
              </Box>
            </Box>
          </Box>

          <Box py={"2"}>
            {/* Assign to */}
            <Text py={"1rem"} fontSize={"1rem"}>
              Assign To
            </Text>
            <Box
              display={"flex"}
              pt={3}
              gap={"1rem"}
              border="1px solid #ccc"
              width="600px"
              p={2}
              fontSize={"0.6rem"}
            >
              <Text bg={"seashell"} borderRadius="md" borderWidth="1px" p={1}>
                Nolam Kenter
              </Text>
              <Text bg={"seashell"} borderRadius="md" borderWidth="1px" p={1}>
                Nolam Kenter
              </Text>
              <Text bg={"seashell"} borderRadius="md" borderWidth="1px" p={1}>
                Nolam Kenter
              </Text>
              <Text bg={"seashell"} borderRadius="md" borderWidth="1px" p={1}>
                Nolam Kenter
              </Text>
            </Box>
          </Box>
          {/* check box */}
          <Box fontFamily="poppins" fontSize={"0.6rem"}>
            <Checkbox defaultChecked>Assgin this task to myself</Checkbox>
          </Box>

          {/* radio box */}
          <Box py={"2rem"}>
            <RadioGroup defaultValue="1">
              <Stack spacing={4} direction="row">
                <Radio value="1">Low</Radio>
                <Radio value="2">Medium</Radio>
                <Radio value="3">High</Radio>
              </Stack>
            </RadioGroup>
          </Box>
          {/* Add attachment */}
          <Box>
            <Text fontSize={"1rem"}>Add Attachment</Text>
            <Box py={"2rem"}>
              <Input placeholder="" />
            </Box>
            {/* upload */}
            <Box>
              {/* <Textarea placeholder="You can also drop the files here" /> */}

              <ImageUpload onChange={() => {}} />
            </Box>

            {/* button */}
            <Box py={"2rem"} display="flex" justifyContent="flex-end">
              <Stack direction="row" spacing={4}>
                <Button colorScheme="teal" variant="outline">
                  Cancel
                </Button>

                <Button colorScheme="teal" variant="solid">
                  Schedule task
                </Button>
              </Stack>
            </Box>
          </Box>
        </Box>
      </Box>
    </SimpleGrid>
  );
}

export default Messages;
