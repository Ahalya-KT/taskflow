import {
  SimpleGrid,
  Box,
  Text,
  Input,
  FormControl,
  FormLabel,
  list,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { MdAddCircle } from "react-icons/md";
import { IoIosHeartEmpty } from "react-icons/io";
import { Checkbox } from "@chakra-ui/react";
import { Radio, RadioGroup, Stack } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import ImageUpload from "./ImageUpload";
import { TiTick } from "react-icons/ti";
import { FaChevronRight } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from "@chakra-ui/react";
import imges from "../images/Ellipse 12.png";

function Messages() {
  const [selectedItem, setSelectedItem] = useState([]);

  const [softwareSelection, setsoftwareSelection] = useState([]);

  // function to delete a function
  const deleteItem = (index, event) => {
    event.stopPropagation();
    const updatedList = [...selectedItem];
    updatedList.splice(index, 1);
    setSelectedItem(updatedList);
  };

  const lists = [
    {
      Name: "Erin France",
      img: "imges",
    },
    {
      Name: "Erin France",
      img: "imges",
    },
    {
      Name: "Erin France",
      img: "imges",
    },
    {
      Name: "Erin France",
      img: "imges",
    },
    {
      Name: "Erin France",
      img: "imges",
    },
    {
      Name: "Erin France",
      img: "imges",
    },
    {
      Name: "Erin France",
      img: "imges",
    },
  ];

  // array 2

  const softwareList = [
    {
      names: "Mila france",
    },
    {
      names: "Mila france",
    },
    {
      names: "Mila france",
    },
    {
      names: "Mila france",
    },
    {
      names: "Mila france",
    },
    {
      names: "Mila france",
    },
    {
      names: "Mila france",
    },
    {
      names: "Mila france",
    },
    {
      names: "Mila france",
    },
  ];

  return (
    <SimpleGrid>
      <Box
        ml={"2rem"}
        py={"2rem"}
        display={"flex"}
        gap={"1rem"}
        flexDir={{ sm: "column", md: "column", lg: "column", xl: "row" }}
      >
        {/* Box 1 */}
        <Box w="50%" boxShadow="md">
          <Box display="flex" py={"1rem"} ml={"1rem"} fontFamily="poppins">
            <Text>TaskFlow</Text>
            <FaChevronRight size={18} />
            <Text>Schedule task</Text>
          </Box>
          <Box display="flex" justifyContent={"space-between"} gap={"2rem"}>
            {/* sub box1 */}
            <Box ml={"1rem"}>
              <Box display={"flex"} fontFamily="poppins">
                <FormControl>
                  <FormLabel fontSize={"0.9rem"}>Start Date</FormLabel>
                  <Input
                    placeholder="Select Date and Time"
                    size="md"
                    type="date"
                    fontSize={"0.7rem"}
                    w="200px"
                  />
                </FormControl>
              </Box>

              <Box fontFamily="poppins">
                <FormControl>
                  <FormLabel fontSize={"0.9rem"}>End Date</FormLabel>
                  <Input
                    placeholder="Select Date"
                    size="md"
                    type="date"
                    fontSize={"0.7rem"}
                    w="200px"
                  />
                </FormControl>
              </Box>
            </Box>

            {/* sub box2 */}
            <Box ml={"1rem"}>
              <Box fontFamily="poppins" fontSize={"0.5rem"}>
                <FormControl>
                  <FormLabel fontSize={"0.9rem"}>Start Time</FormLabel>
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
                  <FormLabel fontSize={"0.9rem"}>End Time</FormLabel>
                  <Input type="time" placeholder="6:00 AM" width="300px" />
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
                fontSize={"0.7rem"}
              >
                This Task is Scheduled to begin from 9:30 am on 3rd of oct 2023
                to 6:00 pm to 10 of oct 2023
              </Text>
            </Box>
          </Box>

          <Box py={"3rem"} ml={"1rem"}>
            <Box>
              <FormControl>
                <FormLabel fontSize={"0.9rem"}>Task title</FormLabel>
                <Input
                  type="text"
                  placeholder="Enter the title of your task"
                  fontSize={"0.7rem"}
                />
              </FormControl>
            </Box>

            <Box py={"1rem"} fontFamily="poppins">
              <FormControl>
                <FormLabel fontSize={"0.9rem"}>Task Description</FormLabel>
                <Input type="text" height="50px" />
              </FormControl>
            </Box>
          </Box>
        </Box>

        {/* box2 */}
        {/* select department */}
        <Box ml={"2rem"} fontFamily="poppins" boxShadow={"md"}>
          <Text py={"1rem"} fontSize={"0.9rem"} px={"1rem"}>
            Select Department
          </Text>
          <Box
            display={"flex"}
            gap={"1rem"}
            border="1px solid #ccc"
            width="600px"
            p={2}
            ml={"1rem"}
          >
            <Box display={"flex"}>
              <Box display={"flex"}>
                <Popover>
                  <PopoverTrigger>
                    <Box>
                      {softwareSelection.map((data) => (
                        <Text key={data.names}>{data.names}</Text>
                      ))}
                    </Box>
                    
                  </PopoverTrigger>

                  <PopoverContent>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverHeader></PopoverHeader>

                    <PopoverBody>
                      <Box
                      >
                        {softwareList.map((item) => (
                          <Text  onClick={() =>
                            setsoftwareSelection([...softwareSelection, item])
                          }>{item.names}</Text>
                        ))}
                      </Box>
                    </PopoverBody>
                  </PopoverContent>
                </Popover>
              </Box>
            </Box>
            <Box display={"flex"} justifyContent={"space-between"}>
              <Box
                display={"flex"}
                fontFamily="poppins"
                fontSize={"0.6rem"}
                alignItems={"center"}
              >
                <Text fontSize={"0.7rem"}>Add</Text>
                <MdAddCircle size={12} />
              </Box>

              {/* <Box>
                <IoIosHeartEmpty />
              </Box> */}
            </Box>
          </Box>

          <Box py={"2"} px={"1rem"}>
            {/* Assign to */}
            <Text py={"1rem"} fontSize={"0.9rem"}>
              Assign To
            </Text>

            {/* modal */}
            <Popover w="100">
              <PopoverTrigger>
                <Box
                  display={"flex"}
                  pt={3}
                  gap={"1rem"}
                  border="1px solid #ccc"
                  width="600px"
                  p={2}
                  fontSize={"0.6rem"}
                  cursor={"pointer"}
                  height="50px"
                  overflow="hidden"
                >
                  {selectedItem.map((data, index) => (
                    <Box
                      bg={"lavender"}
                      p={1}
                      borderRadius={"md"}
                      display={"flex"}
                      gap={"0.6rem"}
                    >
                      <Text>{data.Name}</Text>
                      <img src={data.imges} width="20" height="20" />
                      <Box bg={"lavender"} borderRadius={"full"} p={1}>
                        <RxCross2
                          size={10}
                          onClick={(event) => deleteItem(index, event)}
                        />
                      </Box>
                      <Box>
                        {/* Display selected name and image in a box */}
                        {selectedItem.name && (
                          <Box
                            bg={"seashell"}
                            borderRadius="md"
                            borderWidth="1px"
                          >
                            <img
                              src={selectedItem.img}
                              alt={selectedItem.name}
                              width="20"
                              height="20"
                            />
                            {selectedItem.name}
                          </Box>
                        )}
                      </Box>
                    </Box>
                  ))}
                </Box>
              </PopoverTrigger>
              <PopoverContent maxW="xl">
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader w="10px"></PopoverHeader>
                {lists.map((items) => (
                  <PopoverBody
                    display={"flex"}
                    justifyContent={"space-between"}
                    onClick={() => setSelectedItem([...selectedItem, items])}
                    key={items.Name}
                  >
                    <Box display={"flex"}>
                      <img src={imges} width="20" height="20" />
                      <Text fontSize={"0.9rem"}>{items.Name}</Text>
                    </Box>
                    <Box>
                      <text fontSize={"0.5rem"}>Select</text>
                    </Box>
                  </PopoverBody>
                ))}
              </PopoverContent>
            </Popover>
          </Box>
          {/* check box */}
          <Box fontFamily="poppins" display={"flex"} px={"1rem"}>
            <Checkbox defaultChecked>
              <Text fontSize={"0.7rem"}>Assgin this task to myself</Text>
            </Checkbox>
          </Box>

          {/* radio box */}
          <Box py={"2rem"} px={"1rem"}>
            <RadioGroup defaultValue="1">
              <Stack spacing={4} direction="row">
                <Radio value="1">
                  <Text fontSize="0.7rem">Low</Text>
                </Radio>
                <Radio value="2" fontSize="0.7rem">
                  <Text fontSize="0.7rem">Medium</Text>
                </Radio>
                <Radio value="3" fontSize="0.7rem">
                  <Text fontSize="0.7rem">High</Text>
                </Radio>
              </Stack>
            </RadioGroup>
          </Box>
          {/* Add attachment */}
          <Box px={"1rem"}>
            <Text fontSize={"0.9rem"}>Add Attachment</Text>
            <Box py={"2rem"}>
              <Input placeholder="" />
            </Box>
            {/* file upload */}
            <Box>
              <ImageUpload onChange={() => {}} />
            </Box>

            {/* button */}
            <Box py={"2rem"} display="flex" justifyContent="flex-end">
              <Stack direction="row" spacing={4}>
                <Button
                  colorScheme="teal"
                  variant="outline"
                  fontSize={"0.9rem"}
                >
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
