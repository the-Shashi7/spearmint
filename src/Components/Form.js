import Legs from "./Legs";
import "./Form.css";
import { useState } from "react";

const initialState ={
  lots: 1,
  positionType: "Buy",
  optionType: "call",
  ExpiryType: "weekly",
  selectStrikeCriteria: "Strike Type",
  simpleMomentum: {
    type: "pointsUp",
    Value: 0,
  },
  trailSL: {
    Type: "percentage",
    Value: {
      instrumentMove: 0,
      stopLossMove: 0,
    },
  },
}

function Form() {
  
  const [value, setValue] = useState(initialState);
  const [isTrue,setIstrue] = useState(false);
  const [isTrue2,setIstrue2] = useState(false);

  const handleSubmit2 =()=>{
    setIstrue2(true);
  }
  const CancelButton2 =()=>{
    setIstrue2(false);
  }
  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name] : e.target.value
    });
    console.log(value)
  };
  const handleSubmit=(e)=>{
    setValue({
      ...value,
      [e.target.name] : e.target.value
    });
    setIstrue(true);
    console.log(value);
  }

  const CancelButton =()=>{
    setIstrue(false);
  }

  return (
    <>
      <div>
        <form className="Form" >
          <div className="input-field">
            <p>Total Lot</p>
            <input name="lots" type="number" defaultValue={1} onChange={handleChange} />
          </div>
          <div className="input-field">
            <p>Position</p>
            <select name="positionType" onChange={handleChange}>
              <option value="Sell">Sell</option>
              <option value="Buy">Buy</option>
            </select>
          </div>
          <div className="input-field">
            <p>Option Type</p>
            <select name="optionType" onChange={handleChange}>
              <option value="Put">Put</option>
              <option value="Call">Call</option>
            </select>
          </div>
          <div className="input-field">
            <p>Expiry</p>
            <select name="ExpiryType" onChange={handleChange}>
              <option value="weekly">weekly</option>
              <option value="monthly">monthly</option>
            </select>
          </div>
          <div className="input-field">
            <p>Select Strike Criteria</p>
            <select name="selectStrikeCriteria" onChange={handleChange} style={{width:"170px"}} >
              <option value="strike Type">strike Type</option>
              <option value="premiumRange">premiumRange</option>
            </select>
          </div>
        </form>
      </div>
      <div className="Div-button">
        <button className="add_leg" onClick={handleSubmit} >Add Leg</button>
        <button className="cancel" onClick={CancelButton} >Cancel</button>
      </div>
      {isTrue && <Legs value={value} func2={handleSubmit2} func = {CancelButton} />}
      {isTrue2 && <Legs value={value}  func = {CancelButton2} />}
      {isTrue && <button className="btn" onClick={handleSubmit} >Final Submit</button>}
    </>
  );
}
export default Form;
