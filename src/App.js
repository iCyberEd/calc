import React, { useState, useRef } from 'react';

function Calc() {

  let calcSign = "+"

  let [info, setInfo]= useState("")
  let [number, setNumber] = useState("")
  let [calculated, setCalculated] = useState(0)

  const numberInput = useRef(null)

  const prevCalc = () => {
    switch (calcSign){
      case "+":
        setCalculated(calculated + +number)
        break
      case "-":
        setCalculated(calculated - +number)
        break
      case "/":
        setCalculated(calculated / +number)
        break
      case "*":
        setCalculated(calculated * +number)
        break
      default:
        break
    }
  }

  const addition = () => {
    if (number === ""){
      return
    }
    prevCalc()
    setInfo(info + number + "+")
    setNumber("")
    calcSign = "+"
    numberInput.current.focus()
  }

  const subtraction = () => {
    if (number === ""){
      return
    }
    prevCalc()
    setInfo(info + number + "-")
    setNumber("")
    calcSign = "-"
    numberInput.current.focus()
  }

  const division = () => {
    if (number === ""){
      return
    }
    prevCalc()
    setInfo(info + number + "/")
    setNumber("")
    calcSign = "/"
    numberInput.current.focus()
  }

  const multiplication = () => {
    if (number === ""){
      return
    }
    prevCalc()
    setInfo(info + number + "*")
    setNumber("")
    calcSign = "*"
    numberInput.current.focus()
  }

  let calculations = () => {
    setNumber(calculated)
    setInfo("")
    numberInput.current.focus()
  }


  return (
    <div className="App container">
      <form className="form-group bg-dark">
       <div className="row">
        <div className="info input-number col-12 p-0 text-info p-0 mb-2" value={info} >{info}</div>
        <input type="number" className="input-number col-12 p-0" value={number} onChange={ (e)=>{setNumber(e.target.value)} } ref={numberInput} autoFocus/>
        </div>
        <div className="btns row">
          <div className="calculations d-inline-flex flex-wrap justify-content-between col-12 col-sm-8 p-0">
            <input type="button" value="+" className="col" onClick={addition} />
            <input type="button" value="-" className="col" onClick={subtraction} />
            <input type="button" value="*" className="col" onClick={multiplication} />
            <input type="button" value="/" className="col" onClick={division} />
            <input type="button" value="c" className="col"  />
          </div>
          <div className="col-sm-4 p-0">
            <input type="button" value="=" className="equal col-12" onClick={calculations} />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Calc;
