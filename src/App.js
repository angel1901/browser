import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

import axios from "axios";

import { TextField, IconButton, Grid } from "@mui/material";
import { useEffect, useState } from "react";

import List from "./List/List";

function App() {
  const [data, setData] = useState([]);
  const [dataBk, setDataBk] = useState([]);
  const API = "https://randomuser.me/api/?results=100";

  const getData = async () => {
    try {
      const response = await axios.get(API);

      setData(response.data.results);
      setDataBk(response.data.results);
    } catch (e) {
      console.log(e);
    }
  };

  const [search, setSearch] = useState("");
  const [icon, setIcon] = useState(false);

  const handleClear = () => {
    setSearch("");
    setData(dataBk);
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (search.length > 0) {
      setData(dataBk);
      setIcon(true);
    } else {
      setIcon(false);
    }
    const res = dataBk.filter(
      (e) =>
        e.name.first.toLowerCase().includes(search) ||
        e.name.last.toLowerCase().includes(search) ||
        e.email.toLowerCase().includes(search)
    );
    setData(res);
  }, [search]);

  return (
    <div className="App">
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={8} my={3}>
          <TextField
            id="text"
            label="Buscar"
            value={search}
            fullWidth={true}
            variant="outlined"
            onChange={({ target }) => setSearch(target.value.toLowerCase())}
            InputProps={{
              endAdornment: (
                <IconButton edge="start" onClick={handleClear}>
                  {!icon ? <SearchIcon /> : <CloseIcon />}
                </IconButton>
              ),
            }}
          />
        </Grid>
        <Grid item xs={8}>
          <List data={data} search={search}></List>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
