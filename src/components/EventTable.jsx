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
import { useNavigate } from "react-router-dom";

const EventTable = () => {
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getData(`${API_BASE_URL}/events`)
      .then((data) => {
        console.log(data);
        setEvents(data.events);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
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
                <TableCell>Title</TableCell>
                <TableCell>Version</TableCell>
                <TableCell>Go to Event Dashboard</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {events.map((event, index) => {
                return (
                  <TableRow
                    key={index}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {index + 1}
                    </TableCell>
                    <TableCell>{event.title}</TableCell>
                    <TableCell>{event.version}</TableCell>
                    <TableCell>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => {
                          navigate(`/event/${event._id}/${event.title}`);
                        }}
                      >
                        Go
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
};

export default EventTable;
