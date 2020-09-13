import React, { useState, useRef} from 'react';


function Calc() {

  let [calcSign, setCalcSign] = useState("+")
  let [info, setInfo]= useState("")
  let [number, setNumber] = useState("")
  let [calculated, setCalculated] = useState(0)

  const numberInput = useRef(null)

  const checkCorrectNumber = (e) => {
    let value = e.target.value
    let reg = /[^0-9+-.]/ // check for invalid characters
    if( value.search(reg) >= 0 ){
      return false
    }
    if( value.includes("-", 1) || value.includes("+", 1) ){ // checking for the presence of the signs + and - inside numbers
     return false
    }
    if( (value.split(".").length + value.split(",").length) > 3 ){ // checking for more than 1 dot or comma
     return false
    }
    if (typeof +value != 'number'){
      return false
    }
    
    setNumber(value)
    
  }

  const prevCalc = () => {
    let prevCalculated = 0

    switch (calcSign){
      case "+":
        prevCalculated = calculated + +number
        break
      case "-":
        prevCalculated = calculated - +number
        break
      case "/":
        prevCalculated = calculated / +number
        break
      case "*":
        prevCalculated = calculated * +number
        break
      default:
        break
    }

    return prevCalculated
  }

  const addition = () => {
    if (number === ""){
      return
    }
    setCalculated(prevCalc())
    setNumber("")
    setCalcSign("+")
    numberInput.current.focus()
  }

  const subtraction = () => {
    if (number === ""){
      return
    }
    setCalculated(prevCalc())
    setNumber("")
    setCalcSign("-")
    numberInput.current.focus()
  }

  const division = () => {
    if (number === ""){
      return
    }
    setCalculated(prevCalc())
    setInfo(info + number + "/")
    setNumber("")
    calcSign = "/"
    numberInput.current.focus()
  }

  const multiplication = () => {
    if (number === ""){
      return
    }
    setCalculated(prevCalc())
    setInfo(info + number + "*")
    setNumber("")
    calcSign = "*"
    numberInput.current.focus()
  }

  const calculations = () => {
    //console.log(calculated)
  
    setNumber(prevCalc())
    setCalculated(0)
    numberInput.current.focus()
  }

  const reset = () => {
    setNumber("")
    setInfo("")
    calcSign = "+"
    numberInput.current.focus()
  }


  return (
    <div className="App ">
      <form className="form-group bg-dark" >
        <div className="container p-0">
        <div className="row m-0 p-0">
          <div className="info col-12 text-info p-0 mb-1" >{calculated + calcSign}</div>
        </div>
        <div className="row m-0 p-0">
          <input type="text" className="input-number col-12 mb-1" value={number} onChange={ (e)=>checkCorrectNumber(e) } ref={numberInput} autoFocus data-testid="test-input-number"/>
        </div>
        
        <div className="btns row m-0 p-0">
          <div className="calculations d-inline-flex flex-wrap justify-content-between col-12 col-sm-8 p-0">
            <input type="button" value="+" className="col" onClick={addition} />
            <input type="button" value="-" className="col" onClick={subtraction} />
            <input type="button" value="*" className="col" onClick={multiplication} />
            <input type="button" value="/" className="col" onClick={division} />
            <input type="button" value="C" className="col font-weight-bold" onClick={reset} />
          </div>
          <div className="col-sm-4 p-0">
            <input type="button" value="=" className="equal col-12" onClick={calculations} />
          </div>
        </div>
        </div>
      </form>
    </div>
  );
}

export default Calc;
