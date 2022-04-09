import React, { useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Button, Box } from "@mui/material";

export default function DenseTable() {
  const users = [
    {
      id: 1,
      name: "daniel",
      role: "role",
      country: "Brasil",
      email: "daniel@gmai.com",
      birthdate: "13 jan 2001",
      phone: "888888888",
    },
  ];

  const onRemove = (id) => {
    console.log(id);
  };

  const onEdit = (id) => {
    console.log(id);
  };

  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }} size="small">
        <TableHead>
          <TableRow>
            <TableCell>id</TableCell>
            <TableCell align="right">name</TableCell>
            <TableCell align="right">role</TableCell>
            <TableCell align="right">country</TableCell>
            <TableCell align="right">email</TableCell>
            <TableCell align="right">birthdate</TableCell>
            <TableCell align="right">phone</TableCell>
            <TableCell align="right">actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow
              key={user.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{user.id}</TableCell>
              <TableCell align="right">{user.name}</TableCell>
              <TableCell align="right">{user.role}</TableCell>
              <TableCell align="right">{user.country}</TableCell>
              <TableCell align="right">{user.email}</TableCell>
              <TableCell align="right">{user.birthdate}</TableCell>
              <TableCell align="right">{user.phone}</TableCell>
              <TableCell align="right">
                <Box>
                  <Button variant="contained" onClick={() => onEdit(user.id)}>
                    edit
                  </Button>
                  <Button variant="contained" onClick={() => onRemove(user.id)}>
                    remove
                  </Button>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
