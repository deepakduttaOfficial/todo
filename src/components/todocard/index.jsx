import React from "react";
import { Card, IconButton, Stack, Typography } from "@mui/material";
// Icons
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

// Custom style
import { cardStyle } from "./style";

// Remove todo helper
import { removeItem } from "../helper/index";
import { toast } from "react-toastify";

const TodoCard = ({ todo, setTodoUpdate }) => {
  const removeTodo = (id) => {
    removeItem(id);
    toast.warn("Todo Removed", {
      theme: "dark",
      autoClose: 1000,
    });
    setTodoUpdate((pre) => !pre);
  };
  return (
    <Card sx={cardStyle}>
      <Typography variant="h5" ml="10px" sx={{ overflow: "hidden" }}>
        {todo?.todo || todo?.description}
      </Typography>
      <Stack direction={"row"}>
        <IconButton
          onClick={() => {
            window.navigator.clipboard.writeText(
              todo?.todo || todo?.description
            );
            toast.success("Copied", {
              theme: "dark",
              autoClose: 1000,
            });
          }}
        >
          <ContentCopyIcon sx={{ color: "#42a5f5" }} />
        </IconButton>
        <IconButton disabled>
          <EditIcon sx={{ color: "#42a5f5" }} />
        </IconButton>
        <IconButton
          onClick={() => {
            removeTodo(todo.id);
          }}
        >
          <DeleteIcon sx={{ color: "#d32f2f" }} />
        </IconButton>
      </Stack>
    </Card>
  );
};

export default TodoCard;
