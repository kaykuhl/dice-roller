import React, { useState } from "react";
import './App.css';

function App() {
  let [diceRoll, setDiceRoll] = useState([])
  let [diceType, setDiceType] = useState([20])
  let [numberRolls, setNumberRolls] = useState([1])
  let [modifier, setModifier] = useState([0])
  let [calculation, setCalculation] = useState([])

  function roll(e) {
    let sum = 0
    let currentRoll
    let allRolls = []
    let overallRoll
    let calc = ""

    e.preventDefault();

    for (var i = 0; i < numberRolls; i++) {
      currentRoll = Math.floor((Math.random() * diceType) + 1)
      allRolls.push(currentRoll)
      sum = sum + currentRoll
      overallRoll = parseFloat(sum) + parseFloat(modifier)
      setDiceRoll(overallRoll)
      }
    
    console.log(allRolls)
    console.log(modifier)
    allRolls.forEach((element) => {
      calc += `${element} + `
    })
     calc += `${modifier} = `
    console.log(calc)
    setCalculation(calc)
  }


  return (
    <div className="App">
      <div className="jumbotron"><h1 className='header1'>This is How I Roll</h1> <h2 className='header2'>Dice Roller</h2></div>

      <form>

        <div className="form-group">
          <div className="row">
            <div className="col-sm-2"></div>
            <div className="col-sm-2">
              <h6>Dice Type</h6>
              <div className="radio">
                <label><input type="radio" onChange={e => setDiceType(e.target.value)} name="d" value="3" ></input>d3</label>
              </div>
              <div className="radio">
                <label><input type="radio" onChange={e => setDiceType(e.target.value)} name="d" value="4"></input>d4</label>
              </div>
              <div className="radio">
                <label><input type="radio" onChange={e => setDiceType(e.target.value)} name="d" value="6"></input>d6</label>
              </div>
              <div className="radio">
                <label><input type="radio" onChange={e => setDiceType(e.target.value)} name="d" value="8"></input>d8</label>
              </div>
              <div className="radio">
                <label><input type="radio" onChange={e => setDiceType(e.target.value)} name="d" value="10"></input>d10</label>
              </div>
              <div className="radio">
                <label><input type="radio" onChange={e => setDiceType(e.target.value)} name="d" value="12"></input>d12</label>
              </div>
              <div className="radio">
                <label><input type="radio" onChange={e => setDiceType(e.target.value)} name="d" value="20" defaultChecked></input>d20</label>
              </div>
              <div className="radio">
                <label><input type="radio" onChange={e => setDiceType(e.target.value)} name="d" value="100"></input>d100</label>
              </div>
            </div>
            <div className="col-sm-2">
              <h6># of Rolls</h6>
              <input type="number" className="form-control" id="numberRolls" defaultValue="1" min="1" onChange={e => setNumberRolls(e.target.value)}></input>
            </div>
            <div className="col-sm-2">
              <h6>Modifier</h6>
              <input type="number" className="form-control" id="modifier" defaultValue="0" onChange={e => setModifier(e.target.value)}></input>
            </div>
            <div className="col-sm-2"><br></br>
              <button type="submit" onClick={roll} className="btn btn-primary">Roll</button>
            </div>
            <div className="col-sm-2"></div></div></div>

      </form>
      <div className="card">{calculation}<h3>{diceRoll}</h3></div>


    </div>
  );
}

export default App;
