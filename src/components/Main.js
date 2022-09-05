import React, { useEffect, useState } from "react";
import { Button, Container, Paper, TextField, Typography } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MuiCard from "./MuiCard";

// Generate unique id
import { v4 as uuidv4 } from "uuid";

const Main = () => {
  const [todos, setTodos] = useState([]);
  const [remove, setRemove] = useState();
  const [values, setValues] = useState({
    id: "",
    title: "",
    description: "",
  });

  const { title, description } = values;
  const handleChange = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
  };

  const isAdd = () => {
    if (!(title && description)) {
      toast.error("All field are required", { theme: "dark", autoClose: 1000 });
      return;
    }
    setTodos([...todos, { id: uuidv4(), title, description }]);
    setValues({
      title: "",
      description: "",
    });
    toast.success("You create a todo", { theme: "dark", autoClose: 1000 });
  };

  useEffect(() => {
    setTodos(todos.filter((item) => item.id !== remove));
  }, [remove]);

  return (
    <div>
      <ToastContainer />
      <Container>
        <Typography
          id="head_title"
          textAlign={"center"}
          mt={2}
          variant={"h4"}
          component={"h1"}
        >
          Todo
        </Typography>
        <Container
          maxWidth={"sm"}
          sx={{ marginTop: "1rem", marginBottom: "5rem" }}
        >
          <Paper sx={{ padding: "2rem", textAlign: "center" }} elevation={6}>
            <TextField
              label={"Title"}
              fullWidth
              margin="normal"
              value={title}
              onChange={handleChange("title")}
              autoComplete={"off"}
            />
            <TextField
              multiline
              label={"Description"}
              rows={3}
              fullWidth
              margin="normal"
              value={description}
              onChange={handleChange("description")}
              autoComplete={"off"}
            />
            <Button
              color="success"
              variant="contained"
              fullWidth
              sx={{ textTransform: "none" }}
              onClick={isAdd}
            >
              Add
            </Button>
          </Paper>
        </Container>

        <MuiCard todos={todos} setRemove={setRemove} />
      </Container>
    </div>
  );
};

export default Main;
