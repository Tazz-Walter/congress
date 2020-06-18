import axios from "axios";

/**
 * GET listado from congres
 * @param congress number between 112 and 116
 * @param chamber string between senate and house
 */
export function getListado(congres?: Number, chamber?: String): Promise<any> {
  const congresVal = congres ? congres : 116;
  const chamberVal = chamber ? chamber : "senate";

  axios.defaults.headers.common["X-API-Key"] =
    "6oKkP2d22TejcKPNH3Zst2QPp0sCjhtMD5FsTMgo";
  return axios.get(
    `https://api.propublica.org/congress/v1/${congresVal}/${chamberVal}/members.json`
  );
}
