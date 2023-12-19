import React from "react";
import { Box, Text, Input, Center } from "@chakra-ui/react";
import { useState } from "react";

export default function ImageUpload() {
  const [isDragActive, setIsDragActive] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleDragEnter = () => {
    setIsDragActive(true);
  };

  const handleDragLeave = () => {
    setIsDragActive(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragActive(false);

    const file = e.dataTransfer.files[0];
    setSelectedFile(file);
  };

  const handleInputChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleClearFile = () => {
    setSelectedFile(null);
  };
  return (
    <Box
      border="2px dashed"
      borderColor={isDragActive ? "teal.500" : "gray.300"}
      borderRadius="md"
      p={5}
      textAlign="center"
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
    >
      {selectedFile ? (
        <Box>
          <Center>
            {selectedFile.type.startsWith("image/") ? (
              <img
                src={URL.createObjectURL(selectedFile)}
                alt={selectedFile.name}
                className="object-cover w-50% h-50% rounded"
                style={{ maxWidth: "100%", maxHeight: "100%" }}
              />
            ) : (
              <Box w="20" h="20" bg="gray.100" />
            )}
          </Center>
          <Text className="truncate text-xs mt-3">{selectedFile.name}</Text>
          <Text
            as="button"
            color="red.500"
            fontWeight="bold"
            mt={6}
            onClick={handleClearFile}
          >
            Clear File
          </Text>
        </Box>
      ) : (
        <Box>
          <Center></Center>
          <Text fontSize="sm" color="gray.400" my={2}>
            {isDragActive
              ? "Drop the files here!"
              : "Drag and drop files here or click to select"}
          </Text>
          <Input
            id="file-input"
            type="file"
            display="none"
            onChange={handleInputChange}
            accept=".jpg, .jpeg, .png"
          />
          <Text
            as="button"
            bg="zinc.200"
            color="blue.600"
            fontSize="sm"
            fontWeight="semibold"
            py={2}
            px={4}
            rounded="md"
            onClick={() => document.getElementById("file-input").click()}
          >
            Upload File
          </Text>
        </Box>
      )}
    </Box>
  );
}
