import React, { useState } from "react";
import Welcome from "../components/Welcome";
import { API_BASE_URL } from "../constants";
import { useNavigate, useParams } from "react-router-dom";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";
import { getData } from "../utils/ApiCalls";
import SpeakersTable from "../components/SpeakersTable";
import CircularProgress from "@mui/material/CircularProgress";

const Speakers = () => {
  const { eventId } = useParams();
  const [formDetails, setFormDetails] = useState({ workingField: "Academia" });
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const changeHandler = (event) => {
    let name = event.target.name;
    setFormDetails((prev) => {
      return {
        ...prev,
        [name]: event.target.value,
      };
    });
  };

  async function postData(url = "", data) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: data, // body data type must match "Content-Type" header
    });
    if (!response.ok) {
      const message = `An error has occured: ${response.status}`;
      throw new Error(message);
      alert(message);
    }
    return response.json(); // parses JSON response into native JavaScript objects
  }

  const submitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", formDetails.name);
    formData.append("email", formDetails.email);
    formData.append("company", formDetails.company);
    formData.append("designation", formDetails.designation);
    formData.append("workingField", formDetails.workingField);
    formData.append("websiteLink", formDetails.websiteLink);
    formData.append("photo", file);
    postData(`${API_BASE_URL}/speakers/${eventId}`, formData)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
    setFormDetails({});
    setFile(null);
    console.log(formDetails);
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#000000", // Change the primary color to black
      },
    },
  });

  const workingFileds = ["Academia", "Industry"];

  return (
    <div
      style={{
        margin: "0px",
        padding: "0px",
        width: "100%",
        overflowX: "hidden",
      }}
    >
      <Welcome message={"Speakers Section!"} />
      <div>
        <ThemeProvider theme={theme}>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              height: "auto",
              marginTop: "10px",
            }}
          >
            <Box
              sx={{
                flexGrow: 1,
                flexBasis: { xs: "100%", md: "33%" },
                p: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Stack
                component="form"
                spacing={2}
                sx={{ width: "35ch" }}
                onSubmit={submitHandler}
              >
                <TextField
                  required
                  id="outlined-required"
                  label="Name"
                  type="text"
                  name="name"
                  value={formDetails.name || ""}
                  onChange={changeHandler}
                />
                <TextField
                  id="outlined-email-input"
                  label="Email"
                  type="email"
                  value={formDetails.email || ""}
                  onChange={changeHandler}
                  name="email"
                />
                <TextField
                  id="outlined-basic"
                  label="university/company name"
                  type="text"
                  value={formDetails.company || ""}
                  onChange={changeHandler}
                  name="company"
                />
                <TextField
                  id="outlined-basic"
                  label="Designation"
                  type="text"
                  value={formDetails.designation || ""}
                  onChange={changeHandler}
                  name="designation"
                />
                <TextField
                  id="outlined-basic"
                  label="Website link"
                  type="text"
                  value={formDetails.websiteLink || ""}
                  onChange={changeHandler}
                  name="websiteLink"
                />
                <TextField
                  id="outlined-select-industry"
                  select
                  label="Select"
                  defaultValue="Academia"
                  helperText="select your working field"
                  name="workingField"
                  value={formDetails.workingField || ""}
                  onChange={changeHandler}
                >
                  {workingFileds.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField
                  type="file"
                  helperText="upload photo"
                  onChange={(e) => setFile(e.target.files[0])}
                  name="photo"
                />
                <Button variant="contained" type="submit">
                  Add
                </Button>
              </Stack>
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                flexBasis: { xs: "100%", md: "67    %" },
                p: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <SpeakersTable />
            </Box>
          </Box>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Speakers;
