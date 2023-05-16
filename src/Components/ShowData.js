import React from "react";
import { useSelector } from "react-redux";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import EditIcon from "@mui/icons-material/Edit";
import { Delete } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { removeData } from "../store/dataSlice";

function ShowData(props) {
  const dispatch = useDispatch();
  const data = useSelector(({ user }) => user.items);
  const handleDelete = (id) => {
    dispatch(removeData(id));
  };
  const handleUpdate = (
    id,
    image,
    firstName,
    lastName,
    dob,
    phone,
    email,
    accountNumber,
    ifsc,
    panCard,
    adharCard,
    cv,
    year,
    month,
    skills,
    company,
    designation,
    department,
    ctc,
    workingFrom
  ) => {
    props.setIsEditModeOn(true)
    props.setIsStepperOn(true);
    props.setEditData({
      id: id,
      image: image,
      firstName: firstName,
      lastName: lastName,
      dob: dob,
      phone: phone,
      email: email,
      accountNumber: accountNumber,
      ifsc: ifsc,
      panCard: panCard,
      adharCard: adharCard,
      cv: cv,
      year: year,
      month: month,
      skills: [...skills],
      company: company,
      designation: designation,
      department: department,
      ctc: ctc,
      workingFrom: workingFrom,
    });
  };
  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Name</TableCell>
              <TableCell align="right">designation</TableCell>
              <TableCell align="right">department</TableCell>
              <TableCell align="right">update</TableCell>
              <TableCell align="right">delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="left">{row.id}</TableCell>
                <TableCell component="th" scope="row">
                  {row.firstName}
                </TableCell>
                <TableCell align="right">{row.designation}</TableCell>
                <TableCell align="right">{row.department}</TableCell>
                <TableCell align="right">
                  <button
                    onClick={() =>
                      handleUpdate(
                        row.id,
                        row.image,
                        row.firstName,
                        row.lastName,
                        row.dob,
                        row.phone,
                        row.email,
                        row.accountNumber,
                        row.ifsc,
                        row.panCard,
                        row.adharCard,
                        row.cv,
                        row.year,
                        row.month,
                        row.skills,
                        row.company,
                        row.designation,
                        row.department,
                        row.ctc,
                        row.workingFrom
                      )
                    }
                  >
                    <EditIcon />
                  </button>
                </TableCell>
                <TableCell align="right">
                  <button onClick={() => handleDelete(row.id)}>
                    <Delete />
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default ShowData;
