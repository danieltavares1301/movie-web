import { Autocomplete, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";

const User = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setCountries(
        response.data.map((country) => ({
          image: "",
          label: country.name.common,
        }))
      );
    });
  }, []);

  return (
    <>
      <div>user</div>
      <TextField id="name" variant="outlined" label="name" />
      <br />
      <TextField id="email" variant="outlined" label="email" />
      <br />
      <Autocomplete
        disablePortal
        id="Country"
        options={countries.map((item) => item.label)}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Country" />}
      />
    </>
  );
};
export default User;
