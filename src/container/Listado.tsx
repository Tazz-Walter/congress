import React, { useEffect, useState } from "react";
import MaterialTable from "material-table";
import Paper from "@material-ui/core/Paper";
import CircularProgress from "@material-ui/core/CircularProgress";
import { getListado } from "../utils/api";

export default function Listado() {
  const [congres, setCongres] = useState<any>();
  const [error, setError] = useState();

  useEffect(() => {
    getListado()
      .then(({ data }) => {
        setCongres(data.results[0]);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  const columns = [
    { title: "Name", field: "first_name" },
    { title: "Last Name", field: "last_name" },
    { title: "Birthday", field: "date_of_birth" },
    { title: "Gender", field: "gender" },
    { title: "Total Votes", field: "total_votes" },
  ];

  return (
    <Paper>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
      {error ? (
        <h2>{`Houston tenemos un error: ${error}`}</h2>
      ) : congres ? (
        <MaterialTable
          title="Congres List"
          columns={columns}
          data={congres.members}
        />
      ) : (
        <CircularProgress color="primary" thickness={6} />
      )}
    </Paper>
  );
}
