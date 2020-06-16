import React, { useEffect, useState } from "react";
import axios from "axios";
import MaterialTable from "material-table";
import Paper from "@material-ui/core/Paper";
import CircularProgress from "@material-ui/core/CircularProgress";

export default function Listado() {
  const [congres, setCongres] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    axios.defaults.headers.common["X-API-Key"] =
      "6oKkP2d22TejcKPNH3Zst2QPp0sCjhtMD5FsTMgo";
    axios
      .get("https://api.propublica.org/congress/v1/116/senate/members.json")
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
