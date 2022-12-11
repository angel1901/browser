import { useMemo } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import Paper from "@mui/material/Paper";
import Results from "../Results/Results";

export default function List({ data, search }) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow sx={{ backgroundColor: "#ece3e3" }}>
            <TableCell>Full Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Country</TableCell>
            <TableCell>Username</TableCell>
            <TableCell>Years Registered</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.length === 0 ? (
            <TableRow>
              <TableCell colSpan={5} align={"center"}>
                No Matches
              </TableCell>
            </TableRow>
          ) : (
            data?.map((row) => (
              <Results key={row?.login.uuid} data={row} search={search} />
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
