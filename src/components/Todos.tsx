import {
  Checkbox,
  HStack,
  Spinner,
  StackDivider,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
} from "@chakra-ui/react";
import useSWR from "swr";
import { DeleteTodo } from "./DeleteTodo";

const fetcher = (url: any) => fetch(url).then((r) => r.json());

export const Todos = () => {
  const { data, error } = useSWR(
    "https://jsonplaceholder.typicode.com/todos",
    fetcher
  );

  return (
    <VStack
      divider={<StackDivider borderColor="gray.500" />}
      spacing={4}
      align="stretch"
      h={"100%"}
      w="50%"
    >
      <Tabs isFitted variant="enclosed">
        <TabList mb="1em">
          <Tab
            _selected={{ color: "white", bg: "blue.500" }}
            fontWeight={"bold"}
          >
            All Tasks
          </Tab>
          <Tab
            _selected={{ color: "white", bg: "blue.500" }}
            fontWeight={"bold"}
          >
            Stuff to do
          </Tab>
          <Tab
            _selected={{ color: "white", bg: "blue.500" }}
            fontWeight={"bold"}
          >
            Already done
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <DeleteTodo />
            {data ? (
              data.map((todo: any) => (
                <HStack
                  borderRadius="lg"
                  boxShadow="lg"
                  borderWidth="1px"
                  p="10"
                  marginTop="3"
                  marginBottom="3"
                  bg="gray.50"
                  justifyContent="space-between"
                >
                  <Text bg="inherit" w={120} fontWeight={"bold"}>
                    Task no: {todo.id}
                  </Text>
                  <Text bg="inherit">Description: {todo.title}</Text>
                  <Text bg="inherit">
                    <Checkbox
                      size="md"
                      colorScheme="blue"
                      isChecked={todo.completed ?? true}
                    >
                      Completed
                    </Checkbox>
                  </Text>
                </HStack>
              ))
            ) : (
              <HStack w="1000">
                <Spinner
                  thickness="4px"
                  speed="0.65s"
                  emptyColor="gray.200"
                  color="blue.500"
                  size="xl"
                  alignSelf={"center"}
                />
              </HStack>
            )}
            {console.log(data)}
          </TabPanel>
          <TabPanel>
            <DeleteTodo />
            {data
              ? data.map(
                  (todo: any) =>
                    todo.completed === false && (
                      <HStack
                        borderRadius="lg"
                        boxShadow="lg"
                        borderWidth="1px"
                        p="10"
                        marginTop="3"
                        marginBottom="3"
                        bg="gray.50"
                        justifyContent="space-between"
                      >
                        <Text bg="inherit" w={120} fontWeight={"bold"}>
                          Task no: {todo.id}
                        </Text>
                        <Text bg="inherit">Description: {todo.title}</Text>
                        <Checkbox
                          size="md"
                          colorScheme="blue"
                          // isChecked={todo.completed ?? true}
                        >
                          Completed
                        </Checkbox>
                      </HStack>
                    )
                )
              : null}
          </TabPanel>

          <TabPanel>
            <DeleteTodo />
            {data
              ? data.map(
                  (todo: any) =>
                    todo.completed === true && (
                      <HStack
                        borderRadius="lg"
                        boxShadow="lg"
                        borderWidth="1px"
                        p="10"
                        marginTop="3"
                        marginBottom="3"
                        bg="gray.50"
                        justifyContent="space-between"
                      >
                        <Text bg="inherit" w={100} fontWeight={"bold"}>
                          Task no: {todo.id}
                        </Text>
                        <Text bg="inherit">Description: {todo.title}</Text>
                        <Checkbox
                          size="md"
                          colorScheme="blue"
                          isChecked={todo.completed ?? true}
                          isDisabled
                        >
                          Completed
                        </Checkbox>
                      </HStack>
                    )
                )
              : null}
          </TabPanel>
        </TabPanels>
      </Tabs>
      )
    </VStack>
  );
};
