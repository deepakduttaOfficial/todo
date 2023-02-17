import React, { useEffect, useState } from "react";
import { Stack } from "@mui/material";
import { Container } from "@mui/system";

// Todo card component
import TodoCard from "../components/todocard";
import TodoForm from "../components/todoForm";
// Todo helper, get the todo from localStorage
import { getItems } from "../components/helper";

const TodoHome = () => {
  // When todo created then the coponent will re-render
  const [todoUpdate, setTodoUpdate] = useState(false);

  const [todos, setTodos] = useState(null);

  useEffect(() => {
    setTodos(getItems());
  }, [todoUpdate]);

  return (
    <Container maxWidth="md" sx={{ paddingTop: "10px" }}>
      <TodoForm setTodoUpdate={setTodoUpdate} />
      <Stack spacing={2} mt="35px">
        {todos?.map((todo) => (
          <TodoCard todo={todo} setTodoUpdate={setTodoUpdate} key={todo.id} />
        ))}
      </Stack>
    </Container>
  );
};

export default TodoHome;
