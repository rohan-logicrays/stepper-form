import React, { useEffect, useState } from "react";
import { PersonalDetailsForm } from "./Forms/PersonalDetailsForm";
import { BankDetailsForm } from "./Forms/BankDetailsForm";
import { ProfessionalDetailsForm } from "./Forms/ProfessionalDetailsForm";
import { CurrentStatusForm } from "./Forms/CurrentStatusForm";
import { ExperienceDetailsForm } from "./Forms/ExperienceDetailsForm";
import { EducationalDetailsForm } from "./Forms/EducationalDetailsForm";
import { useFormik } from "formik";
import { v4 as uuidv4 } from "uuid";
import { mainFormSchema } from "../schemas";
import { useDispatch } from "react-redux";
import { addData, editData } from "../store/dataSlice";
import Button from "@mui/material/Button";

export default function Form(props) {
  const dispatch = useDispatch();

  const [experienceArray, setExperienceArray] = useState([
    {
      E_company: "",
      E_designation: "",
      E_department: "",
      E_ctc: "",
      from: null,
      To: null,
    },
  ]);
  const [educationArray, setEducationArray] = useState([
    { course: "", university: "", passOn: null, grade: "" },
  ]);
  const initialValues = {
    id: uuidv4(),
    image: "",
    firstName: "",
    lastName: "",
    dob: null,
    phone: "",
    email: "",
    accountNumber: "",
    ifsc: "",
    panCard: "",
    adharCard: "",
    cv: null,
    year: "",
    month: "",
    skills: [],
    company: "",
    designation: "",
    department: "",
    ctc: "",
    workingFrom: null,
    Experiencedetails: experienceArray,
    EducationDetails: educationArray,
  };
  const handleAddExperience = () => {
    console.log(experienceArray);
    let newArr = [
      {
        E_company: "",
        E_designation: "",
        E_department: "",
        E_ctc: "",
        from: null,
        To: null,
      },
    ];
    setExperienceArray([...experienceArray, ...newArr]);
  };
  const handleRemoveExperience = (i) => {
    console.log(experienceArray);
    experienceArray.splice(i, 1);
    setExperienceArray([...experienceArray]);
  };
  const handleAddEducation = () => {
    let newArr = [
      {
        course: "",
        university: "",
        passOn: null,
        grade: "",
      },
    ];
    setEducationArray([...educationArray, ...newArr]);
  };
  const handleRemoveEducation = (i) => {
    educationArray.splice(i, 1);
    setEducationArray([...educationArray]);
  };
  const { values, errors, handleChange, touched, handleSubmit, setFieldValue } =
    useFormik({
      initialValues: initialValues,
      validationSchema: mainFormSchema,
      onSubmit: (values, action) => {
        console.log(props.isEditModeOn);
        props.isEditModeOn
          ? dispatch(editData({ values: values, id: values.id }))
          : dispatch(addData(values));
        props.setIsEditModeOn(false);
        action.resetForm();
        props.setIsStepperOn(false);
      },
    });
  useEffect(() => {
    setFieldValue("Experiencedetails", experienceArray);
    setFieldValue("EducationDetails", educationArray);
    setFieldValue("id",props.editData.id)
    setFieldValue("image", props.editData.image);
    setFieldValue("firstName", props.editData.firstName);
    setFieldValue("lastName", props.editData.lastName);
    setFieldValue("dob", props.editData.dob);
    setFieldValue("phone", props.editData.phone);
    setFieldValue("email", props.editData.email);
    setFieldValue("accountNumber", props.editData.accountNumber);
    setFieldValue("ifsc", props.editData.ifsc);
    setFieldValue("panCard", props.editData.panCard);
    setFieldValue("adharCard", props.editData.adharCard);
    setFieldValue("cv", props.editData.cv);
    setFieldValue("year", props.editData.year);
    setFieldValue("month", props.editData.month);
    setFieldValue("skills", props.editData.skills);
    setFieldValue("company", props.editData.company);
    setFieldValue("designation", props.editData.designation);
    setFieldValue("department", props.editData.department);
    setFieldValue("ctc", props.editData.ctc);
    setFieldValue("workingFrom", props.editData.workingFrom);
  }, [experienceArray, educationArray, props.editData]);

  return (
    <>
      <div style={{ display: props.activeStep === 0 ? "" : "none" }}>
        <PersonalDetailsForm
          values={values}
          handleChange={handleChange}
          setFieldValue={setFieldValue}
          handleSubmit={handleSubmit}
          handleNext={props.handleNext}
          errors={errors}
          touched={touched}
        />
      </div>
      <div style={{ display: props.activeStep === 1 ? "" : "none" }}>
        <BankDetailsForm
          values={values}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          handleNext={props.handleNext}
          errors={errors}
          touched={touched}
        />
      </div>
      <div style={{ display: props.activeStep === 2 ? "" : "none" }}>
        <ProfessionalDetailsForm
          values={values}
          setFieldValue={setFieldValue}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          handleNext={props.handleNext}
          errors={errors}
          touched={touched}
        />
      </div>
      <div style={{ display: props.activeStep === 3 ? "" : "none" }}>
        <CurrentStatusForm
          values={values}
          setFieldValue={setFieldValue}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          handleNext={props.handleNext}
          errors={errors}
          touched={touched}
        />
      </div>
      <div style={{ display: props.activeStep === 4 ? "" : "none" }}>
        <ExperienceDetailsForm
          values={values}
          handleChange={handleChange}
          setFieldValue={setFieldValue}
          handleAddExperience={handleAddExperience}
          handleRemoveExperience={handleRemoveExperience}
          experienceArray={experienceArray}
          errors={errors}
          touched={touched}
          handleSubmit={handleSubmit}
          handleNext={props.handleNext}
        />
      </div>
      <div style={{ display: props.activeStep === 5 ? "" : "none" }}>
        <EducationalDetailsForm
          values={values}
          handleChange={handleChange}
          setFieldValue={setFieldValue}
          handleAddEducation={handleAddEducation}
          handleRemoveEducation={handleRemoveEducation}
          handleSubmit={handleSubmit}
          handleNext={props.handleNext}
        />
      </div>
      <Button onClick={()=>{
        if(props.activeStep===0){
          handleSubmit()
          if(errors.firstName || errors.lastName || errors.dob || errors.phone || errors.email){
            console.log("personal errors")
          }else{
            props.handleNext()
          }
        }else if(props.activeStep === 1){
          handleSubmit()
          if(errors.accountNumber || errors.ifsc || errors.panCard || errors.adharCard){
            console.log("bank error")
          }else{
            props.handleNext()
          }
        }else if(props.activeStep === 2){
          handleSubmit()
          if(errors.cv || errors.year || errors.month || errors.skills){
            console.log("professional error")
          }else{
            props.handleNext()
          }
        }else if(props.activeStep === 3){
          handleSubmit()
          if(errors.company || errors.designation || errors.department || errors.ctc || errors.workingFrom){
            console.log("current error")
          }else{
            props.handleNext()
          }
        }
      }}>next</Button>
    </>
  );
}
