import { useState } from "react";
import { TextField, Autocomplete, InputLabel } from "@mui/material";

const medicines = [
  "Tacrolimus",
  "Tadalafil + Dapoxetine",
  "Tamoxifen",
  "Tamsulosin",
  "Tegafur + Gimeracil + Oteracil",
  "Teicoplanin",
  "Telmisartan",
  "Telmisartan + Amlodipine",
  "Telmisartan + Amlodipine + Chlorthalidone",
  "Telmisartan + Amlodipine + Hydrochlorothiazide",
  "Telmisartan + Atorvastatin",
  "Telmisartan + Azelnidipine",
  "Telmisartan + Chlorthalidone",
  "Telmisartan + Hydrochlorothiazide",
  "Telmisartan + Metoprolol Succinate",
  "Telmisartan + Metoprolol Succinate + Chlorthalidone",
];

function SearchField({ title }) {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <InputLabel
        id="input"
        sx={{
          mt: 1,
          mb: 0.5,
          fontWeight: 600,
          fontFamily: "Poppins",
          color: "#000",
          fontSize: 14,
        }}
      >
        {title}
      </InputLabel>
      <Autocomplete
        // freeSolo
        noOptionsText="No Data Found"
        options={medicines}
        value={searchTerm}
        onInputChange={(event, newValue) => setSearchTerm(newValue)}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            fullWidth
          />
        )}
      />
    </div>
  );
}

export default SearchField;
