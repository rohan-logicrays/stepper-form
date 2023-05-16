import { useState } from 'react';
import './App.css';
import Stepper from './Components/StepperBar';
import ShowData from './Components/ShowData';

function App() {
  const [isStepperON,setIsStepperOn]=useState(true)
  const [isEditModeOn,setIsEditModeOn]=useState(false)
  const [editData,setEditData] = useState({
    id:"",
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
    cv:null,
    year: "",
    month: "",
    skills: [],
    company: "",
    designation: "",
    department: "",
    ctc: "",
    workingFrom: null
  })

  return (
    <div className="App">
      <button onClick={()=>setIsStepperOn(true)} style={{marginBottom:"15px"}}>ENTER DETAILS</button>
      <div style={{display:isStepperON?"":"none",border:"2px solid black",margin:"5px",padding:"5px"}}>
          <Stepper setIsStepperOn={setIsStepperOn} editData={editData} isEditModeOn={isEditModeOn} setIsEditModeOn={setIsEditModeOn}/>
      </div>
     <ShowData setIsStepperOn={setIsStepperOn} setEditData={setEditData} setIsEditModeOn={setIsEditModeOn}/>
     
    </div>
  );
}

export default App;
