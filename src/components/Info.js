import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#b3fdff",
  boxShadow: 24,
  p: 2,
  borderRadius: "10px",
};

export default function Info({ open, setOpen = (f) => f, todos, todoId }) {
  const handleClose = () => {
    setOpen(!open);
  };
  var result = todos.find(function (todo) {
    return todo.id === todoId;
  });
  const { title, description } = result;
  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h5"
            component="h2"
            sx={{ overflowWrap: "anywhere" }}
            bgcolor={"#9fe9ef"}
            p={2}
          >
            {title}
          </Typography>
          <Typography
            id="modal-modal-description"
            p={2}
            sx={{ mt: 1, overflowWrap: "anywhere" }}
            bgcolor={"#00c7ba1a"}
          >
            {description}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
