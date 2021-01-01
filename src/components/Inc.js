import React, { useState } from 'react';
import "../css/Design.css"
import Clock from 'react-digital-clock'
const Inc=()=>{
const [num,setNum]=useState(0);

function Incn(){
setNum(num + 1);
}

function Dec(){
    if(num>0){
        setNum(num - 1)

    }
    else{
        alert("Negative number not allowed")

        setNum(0)

    }
}
    return(

        <div className="todo-in">
           

<h1 className='hha'>{num}</h1>
<br />
<br />
<div >
<button className="btnin" onClick={Incn}>Increment</button>
<button className="btnin" onClick={Dec}>Decrement</button>

<Clock />.
</div>
        </div>
    )
}
export default Inc;