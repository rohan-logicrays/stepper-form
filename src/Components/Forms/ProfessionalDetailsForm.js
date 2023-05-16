import React from "react";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormLabel from "@mui/material/FormLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";

export const ProfessionalDetailsForm = (props) => {

 
  const names = [
    "Java Developer",
    "Python Developer",
    "JavaScript Developer",
    "C# Developer",
    "Ruby Developer",
    "PHP Developer",
    "Swift Developer",
    "Objective-C Developer",
    "Go Developer",
    "Rust Developer",
    "TypeScript Developer",
    "Scala Developer",
    "Kotlin Developer",
    "Perl Developer",
    "C++ Developer",
    "C Developer",
    "R Developer",
    "MATLAB Developer",
    "Shell Script Developer",
    "HTML/CSS Developer",
  ];

  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };
  function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

  return (
    <div>
      <h4>PROFESSION DETAILS</h4>
      <Box
        component="form"
        sx={{
          padding: "0px 40px",
          // minHeight: "300px",
          Width: "400px",
          display:"flex",
          flexDirection:"column",
          justifyContent:"center",
          alignItems:"center"
        }}
        noValidate
        autoComplete="off"
      >
        <Button variant="contained" component="label">
          Upload CV
          <input type="file" hidden name="cv"
            onChange={(e) => {
              props.setFieldValue("cv", e.target.files[0]);
          ;
            }}
          />
        </Button>{props.errors.cv && props.touched.cv ? (
          <p style={{ color: "red" }}>{props.errors.cv}</p>
        ) : null}
        <br />
        <FormLabel>Total Experience</FormLabel>
        <Box sx={{ display:"flex" ,width:"700px",justifyContent:"center" }}>
          <TextField
            id="standard-basic"
            error={
              props.errors.year && props.touched.year
                ? props.errors.image
                : null
            }
            variant="standard"
            sx={{ width: 200, display: "flex", flexDirection: "row" ,marginRight:"20px"}}
            label="Years"
            name="year"
            value={props.values.year}
            onChange={props.handleChange}
          />{props.errors.year && props.touched.year ? (
            <p style={{ color: "red" }}>{props.errors.year}</p>
          ) : null}
          <br></br>
          <TextField
            id="standard-basic"
            error={
              props.errors.month && props.touched.month
                ? props.errors.month
                : null
            }
            variant="standard"
            sx={{ width: "200px", display: "flex", flexDirection: "row" }}
            label="Months"
            name="month"
            value={props.values.month}
            onChange={props.handleChange}
          />{props.errors.month && props.touched.month ? (
            <p style={{ color: "red" }}>{props.errors.month}</p>
          ) : null}
        </Box>
        <br></br>
        <FormControl sx={{ m: 1, width: 500 }}>
          <InputLabel id="demo-multiple-chip-label">Skills</InputLabel>
          <Select
            labelId="demo-multiple-chip-label"
            id="demo-multiple-chip"
            error={
              props.errors.skills && props.touched.skills
                ? props.errors.skills
                : null
            }
            name="skills"
            value={props.values.skills}
            multiple
            onChange={props.handleChange}
            input={<OutlinedInput id="select-multiple-chip" label="chip" />}
            renderValue={(selected) => (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            )}
            MenuProps={MenuProps}
          >
            {names.map((name) => (
              <MenuItem
                key={name}
                value={name}
                style={getStyles(name, personName, theme)}
              >
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>{props.errors.skills && props.touched.skills ? (
          <p style={{ color: "red" }}>{props.errors.skills}</p>
        ) : null}
      </Box>

    </div>
  );
};
