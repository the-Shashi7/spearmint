import "./Legs.css";
import { useState } from "react";

function Legs(value,{func}) {
    const [Dis,setDis] = useState({pointerEvents:'none',opacity:'0.7'});
    const [Dis_sl,setDis_sl] = useState({pointerEvents:'none',opacity:'0.7'});
    const handleChange =(e)=>{
      e.target.checked ?setDis({}) : setDis({pointerEvents:'none',opacity:'0.7'}); 
    }
    const handleChange_sl =(e)=>{
      e.target.checked ?setDis_sl({}) : setDis_sl({pointerEvents:'none',opacity:'0.7'}); 
  }

  return (
    <div className="container">
      <form className="Form">
      <img onClick={value.func} className="delete-icon" src="https://icons.veryicon.com/png/o/commerce-shopping/read/delete-181.png" alt="copy"/>
      <img onClick={value.func2}  className="copy-icon" src="https://icons.veryicon.com/png/o/miscellaneous/iview30-ios-style/ios-copy-5.png" alt="copy"/>
        <div className="top">
          <div className="input-field">
            <span
              style={{
                fontSize: "17px",
                fontWeight: "700",
                marginRight: "8px",
              }}
            >
              Lots:
            </span>
            <input
              name="lots"
              type="number"
              defaultValue={value.value.lots}
            />
          </div>
          <div className="input-field">
            <select name="positionType" defaultValue={value.value.positionType} >
              <option value="Sell">Sell</option>
              <option value="Buy">Buy</option>
            </select>
          </div>
          <div className="input-field">
            <select name="optionType" defaultValue={value.value.optionType} >
              <option value="Put">Put</option>
              <option value="Call">Call</option>
            </select>
          </div>
          <div className="input-field">
            <select name="ExpiryType" defaultValue={value.value.ExpiryType} >
              <option value="weekly">weekly</option>
              <option value="monthly">monthly</option>
            </select>
          </div>
          <div className="input-field">
            <span
              style={{
                fontSize: "17px",
                fontWeight: "700",
                marginRight: "8px",
              }}
            >
              Select Strike:
            </span>
            <select
              name="selectStrikeCriteria"
              style={{ width: "170px"}}
              defaultValue={value.value.selectStrikeCriteria}
            >
              <option value="strike Type">strike Type</option>
              <option value="premiumRange">premiumRange</option>
            </select>
          </div>
        </div>
        <div className="bottom">
          <div>
            <input type="checkbox" onClick={handleChange} />
            <span
              style={{
                fontSize: "17px",
                marginRight: "70px",
              }}
            >
              Simple Momentum
            </span>
            <div className="input-field" style={Dis} >
              <select name="simpleMomentum" style={{ width: "130px",border:"none",padding:"5px",marginRight:"4px"}}>
                <option value="pointsUp">pointsUp</option>
                <option value="pointsDown">pointsDown</option>
              </select>
              <input
                type="number"
                defaultValue={0}
                style={{ width: "100px",height:"28px",border:"none" }}
              />
            </div>
          </div>
          <div>
            <input type="checkbox"  onChange={handleChange_sl}/>
            <span
              style={{
                fontSize: "17px",
                marginRight: "270px",
              }}
            >
              Trail SL
            </span>
            <div className="input-field"  style={Dis_sl}>
              <select style={{width:"120px",height:"30px", border:"none"}}  name="trailSL" >
                <option value="points">points</option>
                <option value="percentage">percentage</option>
              </select>
              <input
                name="lots"
                type="number"
                defaultValue={0}
                style={{ width: "100px",height:"30px", border:"none" }}
              />
              <input
                name="lots"
                type="number"
                defaultValue={0}
                style={{ width: "100px",height:"30px", border:"none"}}
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
export default Legs;
