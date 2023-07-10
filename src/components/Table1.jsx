import React from "react";
import firstBanner from "../assets/temp/first_banner.jpg";
// import inauguration from "../assets/temp/inauguration.jpeg";
// import academiaAll from "../assets/temp/Academia_all_foreign.png";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import paper from "@mui/material/Paper";
import { Button } from "@mui/material";

const Table1 = () => {
  return (
    <TableContainer component={paper}>
      <Table
        sx={{
          minWidth: 650,
          maxWidth: "80%",
          margin: "auto",
          marginTop: "50px",
          marginBottom: "50px",
          border: "1px solid black",
        }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>Photo</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow
            key={1}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              1
            </TableCell>
            <TableCell>
              <img height="50px" src={firstBanner} alt="" />
            </TableCell>
            <TableCell>First Banner</TableCell>
            <TableCell>
              <Button variant="contained" color="error">
                Delete
              </Button>
            </TableCell>
          </TableRow>
          <TableRow
            key={2}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              2
            </TableCell>
            <TableCell>
              <img height="50px" src={firstBanner} alt="" />
            </TableCell>
            <TableCell>static test</TableCell>
            <TableCell>
              <Button variant="contained" color="error">
                Delete
              </Button>
            </TableCell>
          </TableRow>
          <TableRow
            key={3}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              3
            </TableCell>
            <TableCell>
              <img height="50px" src={firstBanner} alt="" />
            </TableCell>
            <TableCell>static test</TableCell>
            <TableCell>
              <Button variant="contained" color="error">
                Delete
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Table1;

{
  /* <table className="">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Photo</th>
          <th scope="col">Name</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td> <img height="50px" src={firstBanner} alt="" /></td>
          <td>First Banner</td>
          <td><button className="btn btn-danger">Delete</button></td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td><img height="50px" src={inauguration} alt="" /></td>
          <td>Inaugration</td>
          <td><button className="btn btn-danger">Delete</button></td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <img height="50px" src={academiaAll} alt="" />
          <td>Scheduel</td>
          <td><button className="btn btn-danger">Delete</button></td>
        </tr>
      </tbody>
    </table> */
}
