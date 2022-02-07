import { Button, HStack } from "@chakra-ui/react";
import { useState } from "react";

const fetcher = () =>
  fetch("https://jsonplaceholder.typicode.com/todos/1", {
    method: "DELETE",
  }).then(() => fetch("https://jsonplaceholder.typicode.com/todos"));

export const DeleteTodo = () => {
  const [deleteTodo, setDeleteTodo] = useState(false);

  return (
    <HStack justifyContent={"right"} w={"100%"}>
      <Button
        w="100"
        // disabled={!deleteTodo ?? true}
        colorScheme="red"
        onClick={() => fetcher()}
      >
        Delete
      </Button>
    </HStack>
  );
};
