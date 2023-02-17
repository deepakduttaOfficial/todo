import { ThemeProvider } from "@mui/material";
import "./App.css";
import theme from "./theme";
import TodoHome from "./pages";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ToastContainer />
      <TodoHome />
    </ThemeProvider>
  );
};

export default App;
