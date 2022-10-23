import React,{useState} from "react";


function Calculator(){
const [Input,setInput] = useState("")

function InputValue(e){     
setInput(Input.concat(e.target.value))
}

function Clear(){
    setInput("")
}

function Result(){
    setInput(eval(Input))
}

return (
 <div className="mainComtainer">   
<div className="heading"><h1>Calculator</h1></div>
<div className="Container">
<div className="Screen"><div className="span1">{Input}</div><button  style={{width:70,height:50,float:"right",marginRight:5,marginTop:5,fontSize:20}} onClick={Clear}>C</button></div>
<div className="Screen"><button value={"1"}  className="button" onClick={InputValue}>1</button><button value={"2"}  className="button" onClick={InputValue}>2</button><button value={"3"}  className="button" onClick={InputValue}>3</button><button value={"/"} style={{width:70,height:50,fontSize:20,marginLeft:4}} onClick={InputValue}>/</button></div>
<div className="Screen"><button value={"4"}  className="button" onClick={InputValue}>4</button><button value={"5"}  className="button" onClick={InputValue}>5</button><button value={"6"}  className="button" onClick={InputValue}>6</button><button value={"-"} style={{width:70,height:50,fontSize:20,marginLeft:4}}onClick={InputValue}>-</button></div>
<div className="Screen"><button value={"7"}  className="button" onClick={InputValue}>7</button><button value={"8"} className="button" onClick={InputValue}>8</button><button value={"9"} className="button" onClick={InputValue}>9</button><button value={"+"} style={{width:70,height:50,fontSize:20,marginLeft:4}} onClick={InputValue}>+</button></div>
<div className="Screen"><button value={"."}  className="button"  style={{fontSize:25}}onClick={InputValue}>.</button><button value={"0"}  className="button" onClick={InputValue}>0</button><button value={"="}  className="button" onClick={Result}>=</button><button style={{width:70,height:50,fontSize:20,marginLeft:4}} value={"*"} className="button1" onClick={InputValue}>*</button></div>
</div>
</div>
)

}

export default Calculator;