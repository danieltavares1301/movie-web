import React from "react";
import DenseTable from "../../components/Table";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const User = () => {
  const navigate = useNavigate();

  const onCreateUser = () => {
    navigate("new");
  };
  return (
    <>
      <h3>Users</h3>
      <Button variant="contained" onClick={() => onCreateUser()}>
        Criar novo
      </Button>
      <DenseTable />
    </>
  );
};

export default User;
