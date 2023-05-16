import * as Yup from "yup"


const numberRegex = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
export const mainFormSchema = Yup.object({
    image:Yup
    .mixed()
    .required("please upload your profile image"),
    firstName:Yup.string().min(2).max(23).required("please enter your name"),
    lastName:Yup.string().min(2).max(23).required("please enter your name"),
    dob: Yup.date()
    .max(new Date(Date.now() - 567648000000), "You must be at least 18 years")
    .required("Required"),
    phone:Yup.string().min(10).max(10).matches(numberRegex, 'Phone number is not valid').required("please enter your phone number"),
    email:Yup.string().email().required("please enter your email"),
    accountNumber:Yup.string().min(8).max(12).matches(numberRegex, 'account number is not valid').required("please enter your account number"),
    ifsc:Yup.string().min(11).max(11).matches(numberRegex, 'ifsc code is not valid').required("please enter your ifsc code"),
    panCard:Yup.string().min(10).max(10).required("please enter your pan card number"),
    adharCard:Yup.string().min(12).max(12).required("please enter your adhar card number"),
    cv:Yup.mixed().required("please upload your cv"),
    year:Yup.string().min(1).max(10).required("please enter yeras"),
    month:Yup.string().min(1).max(10).required("please enter months"),
    skills:Yup.array().min(1),
    company:Yup.string().min(5).max(50).required("please enter company name"),
    designation:Yup.string().min(5).max(50).required("please enter designation name"),
    department:Yup.string().min(5).max(50).required("please enter department name"),
    ctc:Yup.string().min(1).max(50).required("please enter ctc"),
    workingFrom:Yup.date().required("please enter woking from"),

})