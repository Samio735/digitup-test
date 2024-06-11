import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import UsePagination from "./UsePagination";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
function createData(id, name, date, date2, taux, investNum, but, action) {
  return { id, name, date, date2, taux, investNum, but, action };
}
const options = {
  year: "numeric",
  month: "long",
  day: "numeric",
};

const rows = [
  createData(
    5089,
    "investissement",
    [new Date("June 14, 2024 03:24:00"), new Date("July 29, 2026 03:24:00")],
    [new Date("June 14, 2024 03:24:00"), new Date("July 29, 2026 03:24:00")],
    7,
    1524,
    70,
    5
  ),
  createData(
    5089,
    "investissement",
    [new Date("June 14, 2024 03:24:00"), new Date("July 29, 2026 03:24:00")],
    [new Date("June 14, 2024 03:24:00"), new Date("July 29, 2026 03:24:00")],
    7,
    3827,
    55,
    5
  ),
  createData(
    5089,
    "investissement",
    [new Date("June 14, 2024 03:24:00"), new Date("July 29, 2026 03:24:00")],
    [new Date("June 14, 2024 03:24:00"), new Date("July 29, 2026 03:24:00")],
    7,
    1434,
    33,
    5
  ),
  createData(
    5089,
    "investissement",
    [new Date("June 14, 2024 03:24:00"), new Date("July 29, 2026 03:24:00")],
    [new Date("June 14, 2024 03:24:00"), new Date("July 29, 2026 03:24:00")],
    7,
    1200,
    50,
    5
  ),
];

export default function InfoTable() {
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID concession</TableCell>
              <TableCell>Nom</TableCell>
              <TableCell>Date d’exploitation</TableCell>
              <TableCell>Date d’investissement</TableCell>
              <TableCell>Taux</TableCell>
              <TableCell>nb investisseurs</TableCell>
              <TableCell>But</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>#{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>
                  <div className="flex ">
                    <div>
                      {row.date[0].toLocaleDateString("fr-FR", options)} <br />
                      {row.date[1].toLocaleDateString("fr", options)}
                    </div>
                    <ArrowRightAltIcon />
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex ">
                    <div>
                      {row.date2[0].toLocaleDateString("fr-FR", options)} <br />
                      {row.date2[1].toLocaleDateString("fr", options)}
                    </div>
                    <ArrowRightAltIcon />
                  </div>
                </TableCell>
                <TableCell>
                  <p className="">{row.taux} OZT/g</p>
                </TableCell>
                <TableCell>
                  <p className="font-bold">{row.investNum}</p>
                </TableCell>
                <TableCell>
                  <div className="flex justify-center gap-2">
                    <p
                      className={`${
                        row.but > 50 ? "text-yellow-400" : "text-orange-900"
                      }`}
                    >
                      {row.but}%
                    </p>
                    <div
                      className={"w-16 bg-gray-200 h-4  relative rounded-sm"}
                    >
                      <div
                        className={`   ${
                          row.but > 50 ? "bg-yellow-400" : "bg-orange-900"
                        } h-full absolute top-0 left-0 z-10`}
                        style={{ width: `${row.but}%` }}
                      ></div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>{row.action}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className="p-4 flex w-full justify-end">
        {" "}
        {/* <Pagination
          count={5}
          shape="rounded"
          color="primary"
          renderItem={(item) => (
            <PaginationItem
              slots={{ previous: Previous, next: ArrowForwardIcon }}
              {...item}
            />
          )}
        /> */}
        <UsePagination />
      </div>
    </>
  );
}
