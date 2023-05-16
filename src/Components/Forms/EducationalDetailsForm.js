import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Button from "@mui/material/Button";


export const EducationalDetailsForm = (props) => {


  
  return (
    <div>
      {" "}
      <h4>EDUCATIONAL DETAILS</h4>
      <Button variant="contained" component="label" onClick={()=>props.handleAddEducation()}>
        Add Education
      </Button>
     {props.values.EducationDetails.map((val,i)=> {

      return (
     <div style={{ border: "2px solid black", margin: "5px", padding: "5px" }}>
        <Box
          component="form"
          sx={{
            padding: "0px 40px",
            minHeight: "300px",
            maxWidth: "100%",
          }}
          noValidate
          autoComplete="off"
          key={val}
        ><Button onClick={()=>props.handleRemoveEducation(i)}>Remove</Button>
          <TextField
            id="standard-basic"
            variant="standard"
            fullWidth
            label="Course"
            name={`props.values.EducationalDetails[${i}].course`}
            value={val.course}
            onChange={(e)=>{
              const updatedObjects = [...props.values.EducationDetails];
              updatedObjects[i].course = e.target.value;
              props.setFieldValue('props.values.EducationalDetails', updatedObjects)
            }}
          />
          <TextField
            id="standard-basic"
            variant="standard"
            fullWidth
            label="University"
            name={`props.values.EducationalDetails[${i}].university`}
            value={val.university}
            onChange={(e)=>{
              const updatedObjects = [...props.values.EducationDetails];
              updatedObjects[i].university = e.target.value;
              props.setFieldValue('props.values.EducationalDetails', updatedObjects)
            }}
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <DatePicker
                sx={{ width: "100%" }}
                fullWidth
                label="Passed On"
                variant="standard"
                name="passOn"
                value={val.passOn}
                onChange={props.setFieldValue}

              />
            </DemoContainer>
          </LocalizationProvider>
          <TextField
            id="standard-basic"
            variant="standard"
            fullWidth
            label="Grade"
            name={`props.values.EducationalDetails[${i}].grade`}
            value={val.grade}
            onChange={(e)=>{
              const updatedObjects = [...props.values.EducationDetails];
              updatedObjects[i].grade = e.target.value;
              props.setFieldValue('props.values.EducationalDetails', updatedObjects)
            }}
          />
        </Box>
      </div>)}
      )
     }
      
    </div>
  );
};
