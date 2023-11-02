import React, { useState } from "react";
function Aadhar(){
    var[data,setData]=useState('');
    var[array,setArray]=useState([]);
    var change=(e)=>{
      setData  (e.target.value);
    }
    const filterData=()=>{
        console.log("hi");
        let out=document.getElementById('out').value;
        for(let i=0;i<array.length;i++){
            if(array[i]==out){
                let view=document.getElementById('view')
                view.innerHTML=out
            }
        }
    }


return(
    <>
    <div className="input">
        <input type="text" id="text" onChange={change}/>
        <button onClick={()=>{
            setArray([...array,data])
            console.log(array);
            const a=document.createElement('p')
            a.innerHTML=data;
            document.body.appendChild(a);
            document.getElementById("text").value="";

        }}>Add</button>
        <input  type="text" id="out"/>
        <button onClick={filterData}>Filter</button>
        <p id="view">

        </p>

    </div>
    </>
)}
export default Aadhar
