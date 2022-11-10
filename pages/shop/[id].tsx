import { useRouter } from "next/router";
import { useState, useEffect, useContext } from "react";
import {
  Flex,
  Box,
  Heading,
  Text,
  HStack,
  Button,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Input,
} from "@chakra-ui/react";
import Image from "next/image";
import cogoToast from "cogo-toast";
import { IDrink } from "../../@types/drink";
import DRINKS from "../../infrastructure/data/wines.json";
import styles from "../../styles/Home.module.css";
import Head from "next/head";
import { Header } from "../../infrastructure/navigation/header.navigation";
import { Footer } from "../../infrastructure/navigation/footer.navigaton";
import CurrencyFormatter from "../../component/currency-formatter";
import { Selector } from "../../component/selector";
import { Drinks } from "../../component/drinks";
import { CartContext } from "../../context/cart.context";
import { CartType } from "../../@types/cart";

const Product = () => {
  const { addToCart } = useContext(CartContext) as CartType;

  const { id } = useRouter().query;
  const [state, setState] = useState<number>(1);
  const [product, setProduct] = useState<IDrink>({
    type: "",
    title: "",
    price: 0,
    image: "",
    id: 0,
  });

  useEffect(() => {
    if (!id) return;
    const items = DRINKS.filter((drink) => drink.id === Number(id));
    setProduct(items[0]);
  }, [id]);

  const handleSearch = (e: any) => {
    let term = e && e.innerText.toLowerCase();
    const item = DRINKS.filter((drinks) => drinks.type === term);
    // setData(item);
  };

  const handleIncrement = () => {
    setState((prev) => prev + 1);
  };

  const handleDecrement = () => {
    if (state > 1) {
      setState((prev) => prev - 1);
    } else {
      cogoToast.warn("Quantity cannot be less than 1");
    }
  };

  const handleCart = () => {
    if (state < 1) {
      cogoToast.warn("Qauntity cannot be less than 1");
      return;
    }
    const payload = {
      id: Number(product.id),
      title: product.title,
      image: product.image,
      price: product.price,
      quantity: state,
      type: product.type,
    };

    addToCart({ ...payload });
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Cella || {product?.title}</title>
        <meta name="description" content="A product" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Header />
      </header>
      <main className={styles.main}>
        <Selector onChange={handleSearch} />
        <Flex
          align="flex-start"
          justify="center"
          direction={{ base: "column", md: "row" }}
          mt="4rem"
          w="100%"
          gap="4rem"
        >
          <Box w="250px" h="250px">
            <Image
              src={product.image}
              alt={"A picture of " + product.title}
              layout="responsive"
              width={100}
              height={100}
              placeholder="empty"
            />
          </Box>
          <Flex direction={"column"} align="left" w={250} h={250}>
            <Heading fontWeight={700} fontSize="1.75rem">
              {product.title}
            </Heading>
            <HStack>
              <Text
                fontWeight={400}
                fontSize=".75rem"
                textTransform="uppercase"
              >
                Category: {product.type}
              </Text>
            </HStack>

            <HStack fontWeight={700}>
              <Text>Price:</Text>
              <CurrencyFormatter amount={product.price} />
            </HStack>

            <HStack mt="2.5rem" mb="1rem">
              <Text textTransform="uppercase">Quantity</Text>

              <Button
                rounded="xl"
                size="sm"
                border="2px solid #000"
                bg="null"
                onClick={handleDecrement}
              >
                -
              </Button>
              <Input
                type="number"
                value={state}
                onChange={(e) => {
                  setState(Number(e.target.value));
                }}
              />
              <Button
                rounded="xl"
                size="sm"
                border="2px solid #000"
                bg="null"
                onClick={handleIncrement}
              >
                +
              </Button>
            </HStack>

            <Button
              bg="brand.300"
              mb=".76rem"
              color="brand.200"
              textTransform="uppercase"
              _hover={{
                bg: "brand.400",
                color: "brand.500",
              }}
              onClick={handleCart}
            >
              Add to Cart
            </Button>
            {/* <Button
              textTransform="uppercase"
              bg="brand.500"
              color="brand.400"
              borderColor="brand.300"
              border="1px solid #DDA74F"
              _hover={{
                bg: "brand.300",
              }}
            >
              Add to Favourites
            </Button> */}
          </Flex>
        </Flex>

        <Box>
          <Tabs color="brand.300">
            <TabList as={Flex} justifyContent="center" color="brand.300">
              <Tab
                _selected={{ color: "brand.300" }}
                color="brand.200"
                _hover={{
                  color: "brand.200",
                }}
              >
                Description
              </Tab>
              <Tab
                _selected={{ color: "brand.300" }}
                color="brand.200"
                _hover={{
                  color: "brand.200",
                }}
              >
                Reviews
              </Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <Text color="brand.200">
                  {
                    "Hennessy Very Special (V.S) is one of the most popular cognacs in the world. Matured in new oak barrels, Hennessy V.S is bold and fragrant. Its beguiling character is uniquely Hennessy, a timeless choice with an intensity all its own. Hennessy V.S offers toasted and fruit notes, with a rich, clearly defined palate and a welcoming exuberance."
                  }
                </Text>
                <Text color="brand.200">
                  {
                    "Hennessy V.S expresses its vibrant and dynamic personality through unique artist partnerships and annual limited editions. Easy to enjoy, it’s a perfect cognac for high-energy occasions and sharing the moment."
                  }
                </Text>
                <Text color="brand.200">
                  {
                    "The round and robust flavours of Hennessy V.S make it very versatile and ideal for any cocktail possibility, from classic recipes and "
                  }
                </Text>
              </TabPanel>
              <TabPanel>
                <p>No Reviews yet!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>

        <Box textTransform="uppercase" color="brand.200" ml="1rem">
          <Heading fontSize={"1rem"}>Others you may like</Heading>
          <Drinks drinks={DRINKS} />
        </Box>
      </main>

      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  );
};

export default Product;
