import Button from "@mui/material/Button";
import "./App.css";
import {
  Card,
  CardContent,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import { useState } from "react";
import InfoTable from "./components/InfoTable";
import ComplexTable from "./components/ComplexTable";

const theme = createTheme({
  palette: {
    primary: { main: "#F0C43C" },
    secondary: {
      main: "#F1F0F2",
    },
  },
});

function App() {
  const [matiere, setMatiere] = useState("");
  const [typeTransaction, setTypeTransaction] = useState("");
  const [pays, setPays] = useState("");

  const handleChangeMatiere = (e) => {
    setMatiere(e.target.value);
  };
  const handleChangeTypeTransaction = (e) => {
    setTypeTransaction(e.target.value);
  };
  const handleChangePays = (e) => {
    setPays(e.target.value);
  };
  return (
    <ThemeProvider theme={theme} className="text-sm">
      <Card
        sx={{
          width: "15rem",
          height: "100vh",
          position: "fixed",
          top: "0",
          left: "0",
          zIndex: "100",
        }}
      >
        <CardContent>
          <div className="flex justify-between items-center mb-4 text-gray-600">
            <p className="text-xl font-bold">OZ CORP</p>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="9.99999"
                cy="9.99999"
                r="0.833333"
                stroke="#4B465C"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle
                cx="9.99999"
                cy="9.99999"
                r="0.833333"
                stroke="white"
                strokeOpacity="0.2"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle
                cx="10"
                cy="10"
                r="7.5"
                stroke="#4B465C"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle
                cx="10"
                cy="10"
                r="7.5"
                stroke="white"
                strokeOpacity="0.2"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <Button
            size="small"
            sx={{
              width: "100%",
              color: "grey",
              justifyContent: "start",
              textTransform: "none",
              marginBottom: "1rem",
            }}
            startIcon={<AccessAlarmIcon />}
          >
            Dashboard
          </Button>
          <p className="text-xs ms-6 mb-2 text-gray-400">APPLICATION</p>
          <Button
            size="small"
            sx={{
              width: "100%",
              color: "grey",
              justifyContent: "start",
              textTransform: "none",
            }}
            startIcon={<AccessAlarmIcon />}
          >
            Users
          </Button>
          <Button
            size="small"
            sx={{
              width: "100%",
              color: "grey",
              justifyContent: "start",
              textTransform: "none",
            }}
            startIcon={<AccessAlarmIcon />}
          >
            Transcations
          </Button>
          <Button
            size="small"
            sx={{
              width: "100%",
              color: "grey",
              justifyContent: "start",
              textTransform: "none",
            }}
            startIcon={<AccessAlarmIcon />}
          >
            KYC documents
          </Button>
          <Button
            size="small"
            sx={{
              width: "100%",
              color: "grey",
              justifyContent: "start",
              textTransform: "none",
            }}
            startIcon={<AccessAlarmIcon />}
          >
            Notifications
          </Button>
          <Button
            size="small"
            sx={{
              width: "100%",
              color: "grey",
              justifyContent: "start",
              textTransform: "none",
            }}
            startIcon={<AccessAlarmIcon />}
          >
            Tiquets
          </Button>
          <Button
            size="small"
            sx={{
              width: "100%",
              color: "grey",
              justifyContent: "start",
              textTransform: "none",
            }}
            startIcon={<AccessAlarmIcon />}
            variant="contained"
          >
            Gestion des concessions
          </Button>
          <Button
            size="small"
            sx={{
              width: "100%",
              color: "grey",
              justifyContent: "start",
              textTransform: "none",
            }}
            startIcon={<AccessAlarmIcon />}
          >
            Gestion des concessions
          </Button>
          <Button
            size="small"
            sx={{
              width: "100%",
              color: "grey",
              justifyContent: "start",
              textTransform: "none",
            }}
            startIcon={<AccessAlarmIcon />}
          >
            Patamètres
          </Button>
        </CardContent>
      </Card>
      <div className="w-screen grid grid-cols-[15rem_1fr]  ">
        <div></div>
        <div className="p-4">
          <Card
            sx={{
              width: "100%",
              height: "4rem",
            }}
          >
            <CardContent></CardContent>
          </Card>
          <h1 className="text-xl font-bold text-gray-500 my-6">
            Gestion des concessions
          </h1>
          <Card
            sx={{
              width: "100%",
              height: "100vh",
            }}
          >
            <CardContent>
              <h2 className="text-lg my-0 p-0 text-gray-700 mb-4">
                Liste des concessions
              </h2>
              <div className="flex justify-between">
                {" "}
                <Button
                  size="small"
                  sx={{
                    justifyContent: "start",
                    textTransform: "none",
                    boxShadow: "none",
                    fontWeight: "bold",
                    paddingY: "0.5rem",
                    borderRadius: "10px",
                    height: "fit-content",
                  }}
                  variant="contained"
                >
                  Créer une concession{" "}
                </Button>
                <div className="flex gap-4">
                  <TextField
                    size="small"
                    id="chercher"
                    label="Chercher"
                    variant="outlined"
                  />
                  <FormControl sx={{ minWidth: 120 }} size="small">
                    <InputLabel id="demo-select-small-label">
                      Matière
                    </InputLabel>
                    <Select
                      labelId="demo-select-small-label"
                      id="demo-select-small"
                      value={matiere}
                      label="Age"
                      onChange={handleChangeMatiere}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl sx={{ minWidth: 200 }} size="small">
                    <InputLabel id="demo-select-small-label">
                      Type de transaction
                    </InputLabel>
                    <Select
                      labelId="demo-select-small-label"
                      id="demo-select-small"
                      value={typeTransaction}
                      label="Age"
                      onChange={handleChangeTypeTransaction}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl sx={{ minWidth: 200 }} size="small">
                    <InputLabel id="demo-select-small-label">
                      Pays de l’utilisateur
                    </InputLabel>
                    <Select
                      labelId="demo-select-small-label"
                      id="demo-select-small"
                      value={pays}
                      label="Age"
                      onChange={handleChangePays}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>
              <div className="my-4">
                <InfoTable />
                {/* <ComplexTable /> */}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
