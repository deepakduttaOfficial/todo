import React, { useState } from "react";
import { Stack, Button, Box } from "@mui/material";
import { v4 } from "uuid";
// Custom style
import { TodoInput } from "./style";
import { setItem } from "../helper";
import { toast } from "react-toastify";

const TodoForm = ({ setTodoUpdate }) => {
  const [value, setValue] = useState("");
  // Create a todo
  const handleSubmit = (e) => {
    e.preventDefault();
    const todo = {
      id: v4(),
      todo: value,
      time: Date.now(),
    };
    toast.success("Todo Created", {
      theme: "dark",
      autoClose: 1000,
    });
    setValue("");
    setItem(todo);
    setTodoUpdate((pre) => !pre);
  };
  // Check if user create a empty todo or not
  const disabled = value.trim().length === 0;
  return (
    <Stack
      sx={{ padding: "10px", bgcolor: "#ffffff" }}
      direction="row"
      alignItems="center"
      borderRadius="5px"
      spacing={3}
      component={"form"}
      onSubmit={handleSubmit}
    >
      <TodoInput
        placeholder="Add new..."
        fullWidth
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <Box>
        <Button
          sx={{ marginRight: "8px" }}
          variant="contained"
          type="submit"
          disabled={disabled}
        >
          Add
        </Button>
      </Box>
    </Stack>
  );
};

export default TodoForm;
