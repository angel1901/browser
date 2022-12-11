import { useMemo } from "react";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

export default function Results({ data, search }) {
  const getPositions = (data, search) => {
    const index = data?.name.first.toLowerCase().indexOf(search);
    const left = data?.name.first.slice(0, index);
    const right = data?.name.first.slice(index + search.length);
    const center = data?.name.first.slice(index, index + search.length);

    const index_last = data?.name.last.toLowerCase().indexOf(search);
    const left_last = data?.name.last.slice(0, index_last);
    const right_last = data?.name.last.slice(index_last + search.length);
    const center_last = data?.name.last.slice(
      index_last,
      index_last + search.length
    );

    const index_email = data?.email.toLowerCase().indexOf(search);
    const left_email = data?.email.slice(0, index_email);
    const right_email = data?.email.slice(index_email + search.length);
    const center_email = data?.email.slice(
      index_email,
      index_email + search.length
    );

    return {
      left,
      center,
      right,
      left_last,
      right_last,
      center_last,
      left_email,
      right_email,
      center_email,
    };
  };

  const {
    left,
    center,
    right,
    left_last,
    right_last,
    center_last,
    left_email,
    right_email,
    center_email,
  } = useMemo(() => getPositions(data, search), [data, search]);

  return (
    <TableRow
      key={data?.login.uuid}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        {left}
        <span style={{ fontWeight: "bolder" }}>{center}</span>
        {right} {left_last}
        <span style={{ fontWeight: "bolder" }}>{center_last}</span>
        {right_last}
      </TableCell>
      <TableCell>
        {left_email}
        <span style={{ fontWeight: "bolder" }}>{center_email}</span>
        {right_email}
      </TableCell>
      <TableCell>{data?.location.country}</TableCell>
      <TableCell>{data?.login.username}</TableCell>
      <TableCell>{data?.registered.age}</TableCell>
    </TableRow>
  );
}
