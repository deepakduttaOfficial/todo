import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

export const TodoInput = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: "none",
    },
  },
});
