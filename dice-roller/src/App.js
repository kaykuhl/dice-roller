import React, { useState } from "react";
import './App.css';

function App() {

  let [diceRoll, setDiceRoll] = useState([])
  let [diceType, setDiceType] = useState([])
  let [numberRolls, setNumberRolls] = useState([])
  let [modifier, setModifier] = useState([])

  function d6roll(e) {
    e.preventDefault();
    let sum = 0
    let currentRoll
    let allRolls = []
    for (var i=0; i < numberRolls; i++) {
      currentRoll = Math.floor((Math.random() * diceType) + 1)
      allRolls.push(currentRoll)
      sum = sum + currentRoll
    }

    setDiceRoll(sum)
  console.log(allRolls)
  console.log(modifier)
  }


  return (
    <div className="App">
      <div className="jumbotron"><h1>This is How I Roll</h1> <h2>Dice Roller</h2></div>

      <form>

        <div className="form-group">
          <div className="row">
            <div className="col-sm-1"></div>
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
                <label><input type="radio" onChange={e => setDiceType(e.target.value)} name="d" value="12"></input>d12</label>
              </div>
              <div className="radio">
                <label><input type="radio" onChange={e => setDiceType(e.target.value)} name="d" value="20"></input>d20</label>
              </div>
            </div>
            <div className="col-sm-2">
              <h6>Number of Rolls</h6>
              <input type="number" className="form-control" id="numberRolls" onChange={e => setNumberRolls(e.target.value)} placeholder="1"></input>
            </div>
            <div className="col-sm-2">
              <h6>Modifier</h6>
              <input type="number" className="form-control" id="Modifier" onChange={e => setModifier(e.target.value)}  placeholder="0"></input>
            </div>
            <div className="col-sm-2">
              <button type="submit" onClick={d6roll} className="btn btn-primary">Roll</button>
            </div>
            <div className="col-sm-1"></div></div></div>

      </form>

{/*   <button type="button" onClick={d6roll} className="btn">Roll d6</button> */}

      <div className="card"><h3>{ diceRoll }</h3></div>


    </div>
  );
}

export default App;
