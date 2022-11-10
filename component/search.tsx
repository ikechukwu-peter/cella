import { FC } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Input,
  Button,
  HStack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { ISearch } from "../@types/search.dt";

export const Search: FC<ISearch> = ({
  searchTerm,
  setSearchTerm,
  isOpen,
  onClose,
}) => {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onClose();
    router.push("/product/" + searchTerm);
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalBody>
          <form onSubmit={handleSubmit}>
            <Input
              placeholder="Enter text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              borderColor="brand.300"
              _focus={{
                borderColor: "brand.300",
                border: "brand.300",
              }}
              _active={{
                borderColor: "brand.300",
                border: "brand.300",
              }}
            />
            <HStack mt="2rem">
              <Button variant="ghost" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button
                type="submit"
                bg="brand.300"
                color="brand.200"
                _hover={{
                  bg: "brand.400",
                  color: "brand.500",
                }}
              >
                Search
              </Button>
            </HStack>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
