import React, { useState } from "react";
import Welcome from "../components/Welcome";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { postData } from "../utils/ApiCalls";
import { API_BASE_URL } from "../constants";
import EventTable from "../components/EventTable";

const Events = () => {
  const [formDetails, setFormDetails] = useState({});

  const changeHandler = (event) => {
    let name = event.target.name;
    setFormDetails((prev) => {
      return {
        ...prev,
        [name]: event.target.value,
      };
    });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    postData(`${API_BASE_URL}/events`, formDetails)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
    setFormDetails({});
    window.location.reload();
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#000000", // Change the primary color to black
      },
    },
  });
  return (
    <div
      style={{
        margin: "0px",
        padding: "0px",
        width: "100%",
        overflowX: "hidden",
      }}
    >
      <Welcome message={"Welcome to Admin dashboard!"} />
      <div>
        <ThemeProvider theme={theme}>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              height: "auto",
              marginTop: "50px",
            }}
          >
            <Box
              sx={{
                flexGrow: 1,
                flexBasis: { xs: "100%", md: "40%" },
                p: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Stack
                component="form"
                spacing={2}
                autoComplete="off"
                sx={{ width: "35ch" }}
                onSubmit={submitHandler}
              >
                <h1>Add Event</h1>
                <TextField
                  required
                  id="outlined-required"
                  label="Title"
                  value={formDetails.title || ""}
                  onChange={changeHandler}
                  name="title"
                />
                <TextField
                  id="outlined-multiline"
                  label="Description"
                  multiline
                  rows={4}
                  value={formDetails.description || ""}
                  onChange={changeHandler}
                  name="description"
                />
                <TextField
                  id="outlined-basic"
                  label="Version"
                  type="text"
                  helperText="Enter the version of the event (like year/iteration)"
                  value={formDetails.version || ""}
                  onChange={changeHandler}
                  name="version"
                />
                <Button type="submit" variant="contained">
                  Submit
                </Button>
              </Stack>
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                flexBasis: { xs: "100%", md: "60%" },
                maxHeight: "500px",
              }}
            >
              <EventTable />
            </Box>
          </Box>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Events;
