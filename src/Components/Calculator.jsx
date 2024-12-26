import React, {useState} from "react";
import '../Styles/Calculator.css'

function Calculator(){
const [num1 , setNum1]=useState('');
const [num2 , setNum2]=useState('');
const [result , setResult]=useState('');
const handleAddition=() =>
    setResult (Number (num1)+Number (num2) );

const handleSub=() =>
    setResult( num1-num2 );

const handleMulti=() =>
    setResult( num1*num2 );

const handleDiv=() =>
    setResult( num1/num2 );
    return(
        <div>
<h1>Calculator</h1>

            <input className="num1"
    type="number"
    placeholder="Enter your n1"
    value={num1}
    onChange={(e) => setNum1(e.target.value)}
/>
<input className="num2"
type="number"
placeholder="Enter your num2"
value={num2}
onChange={(e) => setNum2(e.target.value)}
/>

<button onClick={handleAddition}>+</button>
<button onClick={handleSub}>-</button>
<button onClick={handleMulti}>*</button>
<button onClick={handleDiv}>/</button>
<h2>Result: {result}</h2>
        </div>
    );
}
export default Calculator;