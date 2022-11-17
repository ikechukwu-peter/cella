import { Box, Button, Flex, Image, Input, Text } from "@chakra-ui/react";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { validateImageType } from "../utilities/validate-image.utilities";

export const UploadImage = ({ image, setImage }) => {
  const [previewImage, setPreviewImage] = useState<string>("");

  const [error, setError] = useState<string>("");

  const uploadImage = (file: Blob | MediaSource | any) => {
    const _file = URL.createObjectURL(file);

    setPreviewImage(_file);

    URL.revokeObjectURL(file);
  };

  const removePreviewImage = () => {
    setPreviewImage("");
    setImage(null);
  };

  const onDrop = useCallback((acceptedFiles: any) => {
    let file = acceptedFiles[0];
    if (!validateImageType(file)) {
      setError("Please upload a valid image file [png, jpeg]");
      return;
    }

    setError("");

    uploadImage(file);
    setImage(file);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <Flex
      gap={2}
      direction={{ base: "column", md: "row" }}
      align="center"
      w={{ base: "100%", md: "50%" }}
    >
      <Box
        {...getRootProps()}
        p={{ base: ".2rem" }}
        color={"brand.400"}
        bg={"brand.300"}
        border="2px solid #718096"
        rounded={"xl"}
        display={previewImage ? "none" : "flex"}
        alignItems={"center"}
        justifyContent="center"
        flexDirection={"column"}
        cursor="pointer"
        my="1rem"
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <>
            <Box m="1rem" fontSize={"2rem"}>
              <AiOutlineCloudUpload />
            </Box>
            <Text p="1rem">Drop the file here ...</Text>
          </>
        ) : (
          <>
            <Box m="1rem" fontSize={"2rem"}>
              <AiOutlineCloudUpload />
            </Box>
            <Text textTransform="uppercase" p="1rem">
              Click here or drag <br />& drop Image here to
              <br /> upload an image
            </Text>{" "}
          </>
        )}
      </Box>
      {!!error && (
        <Text color={"brand.200"} textAlign="center">
          {error}
        </Text>
      )}

      {previewImage && (
        <Box
          my="2rem"
          //   display="inline-block"
          borderRadius="lg"
          border="2px solid #718096"
          w={["100%", "50%"]}
          h={["100%", "50%"]}
          p={2}
          boxSizing="border-box"
          display="flex"
          justifyContent={"center"}
          flexDirection={"column"}
          alignItems="center"
        >
          <Box display="flex" minW={0} overflow="hidden">
            <Image src={previewImage} alt={image?.name} />
          </Box>
          <Button
            mt="2rem"
            bg="brand.300"
            borderRadius={"100%"}
            _hover={{
              bg: "brand.800",
            }}
            onClick={removePreviewImage}
          >
            &times;
          </Button>
        </Box>
      )}
    </Flex>
  );
};
