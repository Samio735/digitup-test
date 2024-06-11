import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material";

import SideBar from "./components/SideBar";
import GestionRessources from "./components/GestionRessources";
import NavBar from "./components/NavBar";

const theme = createTheme({
  palette: {
    primary: { main: "#F0C43C" },
    secondary: {
      main: "#F1F0F2",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme} className="text-sm">
      <SideBar />
      <div className="w-screen grid grid-cols-[15rem_1fr]  ">
        <div></div>
        <div className="p-4">
          <NavBar />
          <GestionRessources />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
