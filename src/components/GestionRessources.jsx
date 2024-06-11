import {
  Button,
  Card,
  CardContent,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import InfoTable from "./InfoTable";
import { useState } from "react";

export default function GestionRessources() {
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
    <div>
      {" "}
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
                className="opacity-60"
              />
              <FormControl sx={{ minWidth: 120 }} size="small">
                <InputLabel id="demo-select-small-label">Matière</InputLabel>
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
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
