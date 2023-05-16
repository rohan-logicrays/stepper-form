import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Button from "@mui/material/Button";

export const PersonalDetailsForm = (props) => {
  const [selectedImage, setSelectedImage] = useState("");

  return (
    <div>
      <h4>PERSONAL DETAILS</h4>
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
        <Button variant="contained" component="label">
          Upload File
          <input
            type="file"
            name="image"
            error={
              props.errors.image && props.touched.image
                ? props.errors.image
                : null
            }
            hidden
            onChange={(e) => {
              props.setFieldValue("image", e.target.files[0]);
              setSelectedImage(e.target.files[0]);
            }}
          />
        </Button>
        <Box sx={{ margin: "5px" }}>
          {selectedImage && (
            <img
              src={URL.createObjectURL(selectedImage)}
              alt="Thumb"
              width="100px"
            />
          )}
        </Box>
        {props.errors.image && props.touched.image ? (
          <p style={{ color: "red" }}>{props.errors.image}</p>
        ) : null}
        <TextField
          id="standard-basic"
          error={
            props.errors.firstName && props.touched.firstName
              ? props.errors.firstName
              : null
          }
          variant="standard"
          fullWidth
          label="First Name"
          name="firstName"
          value={props.values.firstName}
          onChange={props.handleChange}
        />{" "}
        {props.errors.firstName && props.touched.firstName ? (
          <p style={{ color: "red" }}>{props.errors.firstName}</p>
        ) : null}
        <TextField
          id="standard-basic"
          error={
            props.errors.lastName && props.touched.lastName
              ? props.errors.lastName
              : null
          }
          variant="standard"
          fullWidth
          label="Last Name"
          name="lastName"
          value={props.values.lastName}
          onChange={props.handleChange}
        />
        {props.errors.lastName && props.touched.lastName ? (
          <p style={{ color: "red" }}>{props.errors.lastName}</p>
        ) : null}
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DatePicker"]}>
            <DatePicker
              disableFuture
              sx={{ width: "100%" }}
              fullWidth
              error={
                props.errors.dob && props.touched.dob ? props.errors.dob : null
              }
              label="Birth Date"
              name="dob"
              variant="standard"
              value={props.values.dob}
              onChange={(val) => props.setFieldValue("dob", val)}
            />
          </DemoContainer>
          {props.errors.dob && props.touched.dob ? (
            <p style={{ color: "red" }}>{props.errors.dob}</p>
          ) : null}
        </LocalizationProvider>
        <TextField
          id="standard-basic"
          error={
            props.errors.phone && props.touched.phone
              ? props.errors.phone
              : null
          }
          variant="standard"
          fullWidth
          label="Phone Number"
          name="phone"
          value={props.values.phone}
          onChange={props.handleChange}
        />
        {props.errors.phone && props.touched.phone ? (
          <p style={{ color: "red" }}>{props.errors.phone}</p>
        ) : null}
        <TextField
          id="standard-basic"
          error={
            props.errors.email && props.touched.email
              ? props.errors.email
              : null
          }
          variant="standard"
          fullWidth
          label="Email"
          name="email"
          value={props.values.email}
          onChange={props.handleChange}
        />
        {props.errors.email && props.touched.email ? (
          <p style={{ color: "red" }}>{props.errors.email}</p>
        ) : null}
      </Box>
     
    </div>
  );
};
