import React, { useEffect, useState } from "react";
import Welcome from "../components/Welcome";
import { useParams } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Button, CircularProgress, Paper, Tab } from "@mui/material";
import { getData } from "../utils/ApiCalls";
import { API_BASE_URL } from "../constants";

const Registrations = () => {
  const { eventId } = useParams();
  const [loading, setLoading] = useState(false);
  const [registrations, setRegistrations] = useState([]);

  useEffect(() => {
    setLoading(true);
    getData(`${API_BASE_URL}/register/${eventId}`)
      .then((data) => {
        console.log(data);
        setRegistrations(data.registrations);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        alert(err);
      });
  }, []);

  // get receipt using registration id and event id
  const getReceipt = (registrationId) => {
    setLoading(true);
    getData(`${API_BASE_URL}/register/receipt/${eventId}/${registrationId}`)
      .then((data) => {
        console.log(data);
        const url = data.url;
        // open url in new tab
        window.open(url, "_blank");
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        alert(err);
      });
  };

  const getProof = (registrationId) => {
    setLoading(true);
    getData(`${API_BASE_URL}/register/idproof/${eventId}/${registrationId}`)
      .then((data) => {
        const url = data.url;
        // open url in new tab
        window.open(url, "_blank");
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        alert(err);
      });
  };

  return (
    <div
      style={{
        margin: "0px",
        padding: "0px",
        width: "100%",
        overflowX: "hidden",
      }}
    >
      <Welcome message={"Registrations Section!"} />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "80vh",
        }}
      >
        {/* Table to display registrations */}
        <div
          style={{
            width: "100%",
            overflow: "auto",
          }}
        >
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
                      <TableCell>Affiliation</TableCell>
                      <TableCell>Designation</TableCell>
                      <TableCell>Email</TableCell>
                      <TableCell>Mode</TableCell>
                      <TableCell>Transaction Number</TableCell>
                      <TableCell>Amount Paid</TableCell>
                      <TableCell>Paid On</TableCell>
                      <TableCell>Receipt</TableCell>
                      <TableCell>proof</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {registrations.map((user, index) => {
                      return (
                        <TableRow
                          key={index}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell component="th" scope="row">
                            {index + 1}
                          </TableCell>
                          <TableCell>{user.name}</TableCell>
                          <TableCell>{user.affiliation}</TableCell>
                          <TableCell>{user.designation}</TableCell>
                          <TableCell>{user.email}</TableCell>
                          <TableCell>{user.mode}</TableCell>
                          <TableCell>{user.transactionNumber}</TableCell>
                          <TableCell>{user.registrationFee}</TableCell>
                          <TableCell>
                            {new Date(user.registrationDate).toLocaleString(
                              "en-IN",
                              {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                                timeZone: "Asia/Kolkata",
                              }
                            )}
                          </TableCell>

                          <TableCell>
                            <Button
                              onClick={() => getReceipt(user._id)}
                              variant="contained"
                            >
                              View
                            </Button>
                          </TableCell>
                          <TableCell>
                            <Button
                              onClick={() => getProof(user._id)}
                              variant="contained"
                            >
                              View
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
      </div>
    </div>
  );
};

export default Registrations;
