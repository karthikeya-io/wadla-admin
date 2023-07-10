import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Button, Paper } from "@mui/material";
import { getData } from "../utils/ApiCalls";
import { API_BASE_URL } from "../constants";
import { useNavigate, useParams } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";

const SpeakersTable = () => {
  const { eventId } = useParams();
  const [speakers, setSpeakers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getData(`${API_BASE_URL}/speakers/${eventId}`)
      .then((data) => {
        console.log(data);
        setSpeakers(data.speakers);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        alert(err);
      });
  }, []);

  return (
    <div>
      {loading ? (
        <CircularProgress />
      ) : (
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: "500px" }}>
            <Table
              sx={{
                minWidth: 650,
                maxWidth: "100%",
                margin: "auto",
                border: "1px solid black",
              }}
              stickyHeader
              aria-label="sticky table"
            >
              <TableHead>
                <TableRow>
                  <TableCell>#</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>company</TableCell>
                  <TableCell>Designation</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>website</TableCell>
                  <TableCell>Delete</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {speakers.map((speakers, index) => {
                  return (
                    <TableRow
                      key={index}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {index + 1}
                      </TableCell>
                      <TableCell>{speakers.name}</TableCell>
                      <TableCell>{speakers.company}</TableCell>
                      <TableCell>{speakers.designation}</TableCell>
                      <TableCell>{speakers.email}</TableCell>
                      <TableCell>
                        <a href={speakers.websiteLink} target="_blank">
                          Link
                        </a>
                      </TableCell>
                      <TableCell>
                        <Button variant="contained" color="error">
                          Delete
                        </Button>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      )}
    </div>
  );
};

export default SpeakersTable;
