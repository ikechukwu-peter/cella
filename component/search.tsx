import { FC } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Input,
  Button,
} from "@chakra-ui/react";
import { ISearch } from "../@types/search.dt";

export const Search: FC<ISearch> = ({
  searchTerm,
  setSearchTerm,
  isOpen,
  onClose,
}) => {
  const onSubmit = () => {
    console.log(searchTerm);
    onClose();
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalBody>
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
        </ModalBody>
        <ModalFooter>
          <Button variant="ghost" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button onClick={onSubmit} bg="brand.300">
            Search
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
