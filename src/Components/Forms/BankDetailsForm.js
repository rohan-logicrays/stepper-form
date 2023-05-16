import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export const BankDetailsForm = (props) => {
 
  
  return (
    <div><h4>BANK DATAILS</h4>
      <Box
        component="form"
        sx={{
          padding:"0px 40px",
          minHeight:"300px",
          maxWidth: "100%",
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="standard-basic"
          error={props.errors.accountNumber && props.touched.accountNumber ? props.errors.accountNumber : null}
          variant="standard"
          fullWidth
          label="Account Number"
          name="accountNumber"
          value={props.values.accountNumber}
          onChange={props.handleChange}
        />{props.errors.accountNumber && props.touched.accountNumber ? (
          <p style={{ color: "red" }}>{props.errors.accountNumber}</p>
        ) : null}
        <TextField
          id="standard-basic"
          error={props.errors.ifsc && props.touched.ifsc ? props.errors.ifsc : null}
          variant="standard"
          fullWidth
          label="IFSC Code"
          name="ifsc"
          value={props.values.ifsc}
          onChange={props.handleChange}
        />{props.errors.ifsc && props.touched.ifsc ? (
          <p style={{ color: "red" }}>{props.errors.ifsc}</p>
        ) : null}
        <TextField
          id="standard-basic"
          error={props.errors.panCard && props.touched.panCard ? props.errors.panCard : null}
          variant="standard"
          fullWidth
          label="Pan Card Number"
          name="panCard"
          value={props.values.panCard}
          onChange={props.handleChange}
        />{props.errors.panCard && props.touched.ifsc ? (
          <p style={{ color: "red" }}>{props.errors.panCard}</p>
        ) : null}
        <TextField
          id="standard-basic"
          error={props.errors.adharCard && props.touched.adharCard ? props.errors.adharCard : null}
          variant="standard"
          fullWidth
          label="Adhar Card Number"
          name="adharCard"
          value={props.values.adharCard}
          onChange={props.handleChange}
        />{props.errors.adharCard && props.touched.adharCard ? (
          <p style={{ color: "red" }}>{props.errors.adharCard}</p>
        ) : null}
      </Box>
      
    </div>
  );
};
