import React, { useState } from "react";
import { Grid, IconButton, Paper, Stack, Typography } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//icon
import InfoIcon from "@mui/icons-material/Info";
import DeleteIcon from "@mui/icons-material/Delete";
import Info from "./Info";

const MuiCard = ({ todos, setRemove = (f) => f }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };

  const isDelete = (id) => {
    setRemove(id);
    toast.success("Item remove", { theme: "dark", autoClose: 1000 });
  };

  return (
    <>
      <ToastContainer />
      <Grid container spacing={2} mb={7}>
        {todos &&
          todos.map((todo, index) => {
            return (
              <Grid item lg={3} md={4} sm={6} xs={12} key={index}>
                <Paper sx={{ padding: "2rem" }} elevation={6}>
                  <Typography variant="h6" component={"h1"}>
                    {todo.title.length > 20
                      ? todo.title.substring(0, 15) + "..."
                      : todo.title}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{ overflowWrap: "anywhere" }}
                  >
                    {todo.description.length > 105
                      ? todo.description.substring(0, 105) + "..."
                      : todo.description}
                  </Typography>
                </Paper>
                <Stack
                  direction={"row"}
                  spacing={1}
                  justifyContent={"end"}
                  mt={"-2rem"}
                >
                  <IconButton color="info" onClick={handleOpen}>
                    <Info
                      open={open}
                      setOpen={setOpen}
                      todos={todos}
                      todoId={todo.id}
                    />
                    <InfoIcon />
                  </IconButton>
                  <IconButton
                    color="warning"
                    onClick={() => {
                      isDelete(todo.id);
                    }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </Stack>
              </Grid>
            );
          })}
      </Grid>
    </>
  );
};

export default MuiCard;
