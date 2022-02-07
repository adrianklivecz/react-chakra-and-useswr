import { ChakraProvider, VStack } from "@chakra-ui/react";
import { Header } from "./components/Header";
import { Todos } from "./components/Todos";

function App() {
  return (
    <ChakraProvider>
      <VStack fontFamily={"Helvetica"} p={0} m={0} h={"100%"}>
        <Header />
        <Todos />
      </VStack>
    </ChakraProvider>
  );
}

export default App;
