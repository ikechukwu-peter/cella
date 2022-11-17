import Head from "next/head";
import { useState, useEffect } from "react";
import NextLink from "next/link";
import {
  Heading,
  Box,
  Input,
  Center,
  Button,
  Text,
  Textarea,
  Flex,
  Spinner,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { withAuthAdmin } from "../../infrastructure/admin/auth.admin";
import FormField from "../../component/formfield";
import { UploadImage } from "../../component/upload-image";

export const Upload = () => {
  const loading = false;

  const [image, setImage] = useState<Blob | MediaSource | File | string>("");

  const schema = yup
    .object()
    .shape({
      title: yup.string().required("title is required"),
      category: yup.string().required("product category is required"),
      price: yup.string().required("product price required"),
      decription: yup.string().required("description is required"),
    })
    .required();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (e: any) => {
    console.log(e);
    console.log("SUBMITTEd");
  };
  return (
    <>
      <Head>
        <title>Cella || Upload Drink</title>
        <meta name="description" content="Checkout" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box
        as="main"
        maxW="container.xl"
        m="1rem"
        ml={{ base: "1rem", md: "3.5rem" }}
      >
        <NextLink passHref href="/">
          <Text as="span">Back</Text>
        </NextLink>
        <Center>
          <Heading
            fontSize={{ base: ".9rem", md: "1rem", lg: "1.3rem" }}
            textTransform="uppercase"
            color="brand.400"
          >
            Upload Item
          </Heading>
        </Center>
        <Center>
          <Box
            w={{ base: "100%", md: "50%" }}
            as="form"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Center>
              <UploadImage image={image} setImage={setImage} />
            </Center>
            <FormField label="Title" error={errors.title?.message}>
              <Input
                type="text"
                placeholder="Enter item's title here"
                _placeholder={{
                  color: "brand.400",
                }}
                bg="brand.500"
                color="brand.400"
                borderColor="brand.50"
                borderWidth={2}
                outline="none"
                _focus={{
                  borderColor: "brand.300",
                  borderWidth: ".15rem",
                }}
                _hover={{
                  borderColor: "brand.300",
                  borderWidth: ".15rem",
                }}
                _active={{
                  borderColor: "brand.300",
                  borderWidth: ".15rem",
                }}
                fontSize={{
                  base: ".625rem",
                  md: ".8rem",
                }}
                {...register("title")}
              />
            </FormField>
            <FormField label="Category" error={errors.category?.message}>
              <Input
                placeholder="Pick category"
                _placeholder={{
                  color: "brand.400",
                }}
                bg="brand.500"
                color="brand.400"
                borderColor="brand.50"
                borderWidth={2}
                outline="none"
                _focus={{
                  borderColor: "brand.300",
                  borderWidth: ".15rem",
                }}
                _hover={{
                  borderColor: "brand.300",
                  borderWidth: ".15rem",
                }}
                _active={{
                  borderColor: "brand.300",
                  borderWidth: ".15rem",
                }}
                fontSize={{
                  base: ".625rem",
                  md: ".8rem",
                }}
                {...register("category")}
              />
            </FormField>
            <FormField label="Price" error={errors.price?.message}>
              <Input
                placeholder="Enter item's price"
                _placeholder={{
                  color: "brand.400",
                }}
                bg="brand.500"
                color="brand.400"
                borderColor="brand.50"
                borderWidth={2}
                outline="none"
                _focus={{
                  borderColor: "brand.300",
                  borderWidth: ".15rem",
                }}
                _hover={{
                  borderColor: "brand.300",
                  borderWidth: ".15rem",
                }}
                _active={{
                  borderColor: "brand.300",
                  borderWidth: ".15rem",
                }}
                fontSize={{
                  base: ".625rem",
                  md: ".8rem",
                }}
                {...register("price")}
              />
            </FormField>
            <FormField label="Description" error={errors.description?.message}>
              <Textarea
                placeholder="Enter item's description"
                _placeholder={{
                  color: "brand.400",
                }}
                bg="brand.500"
                color="brand.400"
                borderColor="brand.50"
                borderWidth={2}
                outline="none"
                _focus={{
                  borderColor: "brand.300",
                  borderWidth: ".15rem",
                }}
                _hover={{
                  borderColor: "brand.300",
                  borderWidth: ".15rem",
                }}
                _active={{
                  borderColor: "brand.300",
                  borderWidth: ".15rem",
                }}
                fontSize={{
                  base: ".625rem",
                  md: ".8rem",
                }}
                resize="vertical"
                {...register("description")}
              />
            </FormField>
            <Flex align="flex-end" justify="flex-end">
              <Button
                type="submit"
                color="brand.600"
                bg="brand.300"
                _hover={{
                  bg: "brand.400",
                  color: "brand.500",
                }}
              >
                {loading ? (
                  <Spinner
                    thickness="4px"
                    speed="0.65s"
                    emptyColor="gray.200"
                    color="brand.300"
                    size="md"
                  />
                ) : (
                  "Save"
                )}
              </Button>
            </Flex>
          </Box>
        </Center>
      </Box>
    </>
  );
};

export default withAuthAdmin(Upload);
