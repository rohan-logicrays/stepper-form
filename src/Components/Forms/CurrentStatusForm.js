import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Button from "@mui/material/Button";

export const CurrentStatusForm = (props) => {
 
  return (
    <div><h4>CURRENT STATUS</h4>
      <Box
        component="form"
        sx={{
          padding: "0px 40px",
          minHeight: "300px",
          maxWidth: "100%",
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="standard-basic"
          error={
            props.errors.company && props.touched.company
              ? props.errors.company
              : null
          }
          variant="standard"
          fullWidth
          label="Company"
          name="company"
          value={props.values.company}
          onChange={props.handleChange}
        />{props.errors.company && props.touched.company ? (
          <p style={{ color: "red" }}>{props.errors.company}</p>
        ) : null}
        <TextField
          id="standard-basic"
          error={
            props.errors.designation && props.touched.designation
              ? props.errors.designation
              : null
          }
          variant="standard"
          fullWidth
          label="Designation"
          name="designation"
          value={props.values.designation}
          onChange={props.handleChange}
        />{props.errors.designation && props.touched.designation ? (
          <p style={{ color: "red" }}>{props.errors.designation}</p>
        ) : null}
        <TextField
          id="standard-basic"
          error={
            props.errors.department && props.touched.department
              ? props.errors.department
              : null
          }
          variant="standard"
          fullWidth
          label="Department"
          name="department"
          value={props.values.department}
          onChange={props.handleChange}
        />{props.errors.department && props.touched.department ? (
          <p style={{ color: "red" }}>{props.errors.department}</p>
        ) : null}
        <TextField
          id="standard-basic"
          error={
            props.errors.ctc && props.touched.ctc
              ? props.errors.image
              : null
          }
          variant="standard"
          fullWidth
          label="CTC"
          name="ctc"
          value={props.values.ctc}
          onChange={props.handleChange}
        />{props.errors.ctc && props.touched.ctc ? (
          <p style={{ color: "red" }}>{props.errors.month}</p>
        ) : null}
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DatePicker"]}>
            <DatePicker
              sx={{ width: "100%" }}
              error={
                props.errors.workingFrom && props.touched.workingForm
                  ? props.errors.workingFrom
                  : null
              }
              fullWidth
              label="Woking From"
              variant="standard"
              name="workingFrom"
              value={props.values.workingFrom}
              onChange={(val) => props.setFieldValue("workingFrom", val)}
            />
          </DemoContainer>
        </LocalizationProvider>{props.errors.workingFrom && props.touched.workingFrom ? (
            <p style={{ color: "red" }}>{props.errors.workingFrom}</p>
          ) : null}
      </Box>
    </div>
  );
};
