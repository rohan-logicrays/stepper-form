import React,{useEffect, useState} from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Button from "@mui/material/Button";

export const ExperienceDetailsForm = (props) => {
  
  
   return (
    <div>
      <h4>EXPERIENCE DETAILS</h4>
      <Button
        variant="contained"
        component="label"
        onClick={() => props.handleAddExperience()}
      >
        Add Experience
      </Button>
      {props.values.Experiencedetails.map((val,i) => {
        return (
          <div
            style={{ border: "2px solid black", margin: "5px", padding: "5px" }}
          >
            <Box
              component="form"
              sx={{
                padding: "0px 40px",
                minHeight: "300px",
                maxWidth: "100%",
              }}
              noValidate
              autoComplete="off"
            ><Button  onClick={()=>props.handleRemoveExperience(i)}>Remove</Button>
            
              <TextField
                id="standard-basic"
                // error={
                //   props.errors.Experiencedetails[i].E_company && props.touched.Experiencedetails[i].E_company
                //     ? props.errors.Experiencedetails[i].E_company
                //     : null
                // }
                variant="standard"
                fullWidth
                label="Company"
                name={`props.values.Experiencedetails[${i}].E_company`}
                value={val.E_company}
                onChange={(e)=>{
                  const updatedObjects = [...props.values.Experiencedetails];
                  updatedObjects[i].E_company = e.target.value;
                  props.setFieldValue('props.values.Experiencedetails', updatedObjects)
                }}
                
              />
              {/* {props.errors.Experiencedetails[i].E_company && props.touched.Experiencedetails[i].E_company ? (
                <p style={{ color: "red" }}>{props.errors.Experiencedetails[i].E_company}</p>
              ) : null} */}
              <TextField
                id="standard-basic"
                variant="standard"
                // error={
                //   props.errors.Experiencedetails[i].E_designation && props.touched.Experiencedetails[i].E_designation
                //     ? props.errors.Experiencedetails[i].E_designation
                //     : null
                // }
                fullWidth
                label="Designation"
                name={`props.values.Experiencedetails[${i}].E_designation`}
                value={val.E_designation}
                onChange={(e)=>{
                  const updatedObjects = [...props.values.Experiencedetails];
                  updatedObjects[i].E_designation = e.target.value;
                  props.setFieldValue('props.values.Experiencedetails', updatedObjects)
                }}
              />
              {/* {props.errors.Experiencedetails[i].E_designation && props.touched.Experiencedetails[i].E_designation ? (
                <p style={{ color: "red" }}>{props.errors.Experiencedetails[i].E_designation}</p>
              ) : null} */}
              <TextField
                id="standard-basic"
                // error={
                //   props.errors.Experiencedetails[i].E_department && props.touched.Experiencedetails[i].E_department
                //     ? props.errors.Experiencedetails[i].E_department
                //     : null
                // }
                variant="standard"
                fullWidth
                label="Department"
                name={`props.values.Experiencedetails[${i}].E_department`}
                value={val.E_department}
                onChange={(e)=>{
                  const updatedObjects = [...props.values.Experiencedetails];
                  updatedObjects[i].E_department = e.target.value;
                  props.setFieldValue('props.values.Experiencedetails', updatedObjects)
                }}
              />
              {/* {props.errors.Experiencedetails[i].E_department && props.touched.Experiencedetails[i].E_department ? (
                <p style={{ color: "red" }}>{props.errors.Experiencedetails[i].E_department}</p>
              ) : null} */}
              <TextField
                id="standard-basic"
                // error={
                //   props.errors.Experiencedetails[i].E_ctc && props.touched.Experiencedetails[i].E_ctc
                //     ? props.errors.Experiencedetails[i].E_ctc
                //     : null
                // }
                variant="standard"
                fullWidth
                label="CTC"
                name={`props.values.Experiencedetails[${i}].E_ctc`}
                value={val.E_ctc}
                onChange={(e)=>{
                  const updatedObjects = [...props.values.Experiencedetails];
                  updatedObjects[i].E_ctc = e.target.value;
                  props.setFieldValue('props.values.Experiencedetails', updatedObjects)
                }}
              />
              {/* {props.errors.Experiencedetails[i].E_ctc && props.touched.Experiencedetails[i].E_ctc ? (
                <p style={{ color: "red" }}>{props.errors.Experiencedetails[i].E_ctc}</p>
              ) : null} */}
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DatePicker"]}>
                  <DatePicker
                    sx={{ width: "100%" }}
                    fullWidth
                    label="Woking From"
                    variant="standard"
                    name={`props.values.Experiencedetails[${i}].from`}
                    value={val.from }
                    onChange={(e)=>props.setFieldValue(`props.values.Experiencedetails[${i}].from`,e)}
                  />
                </DemoContainer>
              </LocalizationProvider>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DatePicker"]}>
                  <DatePicker
                    sx={{ width: "100%" }}
                    fullWidth
                    label="To"
                    variant="standard"
                    name={`props.values.Experiencedetails[${i}].To`}
                    value={val.To}
                    onChange={(e)=>props.setFieldValue(`props.values.Experiencedetails[${i}].To `,e)}
                  />
                </DemoContainer>
              </LocalizationProvider>
            </Box>
          </div>
        );
      })}
    </div>
  );
};
