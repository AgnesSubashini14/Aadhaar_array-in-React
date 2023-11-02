import React from 'react';
import '../App.css';
import { useState } from 'react';
export default function Aadhar() {
    const [show,setShow]=useState({
        Id: '',
        FullName: '',
        Age: '',
        FatherName: '',
        mobile: ''
    })
    const[result,setResult]=useState([]);
    const[outputValues,setOutputvalues]=useState([]);
    const handleChange=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setShow(values=>({...values,[name]:value}))
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
      
        const data={...show}
      
            setResult((res)=>
                [...res,data])
                setShow({
                    Id: '',
                    FullName: '',
                    Age: '',
                    FatherName: '',
                    mobile: ''
                });
                
          
        }

    console.log(result);
    React.useEffect(()=>{
        setOutputvalues(result)
    },[result]);
    console.log(outputValues);
    

    return(
        <div>
            <form>
<div>
            <label>Id</label>
            <input type="number" placeholder='Enter your Id' name='Id' value={show.Id} onChange={handleChange} />
            </div>


<div>
                <label>FullName</label>
                <input type="text" placeholder='Enter your Name' name='FullName' value={show.FullName} onChange={handleChange}/>
                </div>
                <div>
                <label>Age</label>
                <input type="text" placeholder='Enter your Age' name='Age' value={show.Age} onChange={handleChange}/>
                </div>
                <div>
                <label>FatherName</label>
                <input type="text" placeholder='Enter your FatherName' name='FatherName' value={show.FatherName} onChange={handleChange}/>
                </div>
                <div>
                <label>Mobile</label>
                <input type="text" placeholder='Enter your Mobile' name='mobile'  value={show.mobile}onChange={handleChange}/>
                </div>
                <button onClick={handleSubmit}>Submit</button>
             
             
            </form>
            {  result.map((a)=>
           
                <div className='container'>
                    <pre>Department Of India</pre>
                    <pre>Government  Of India</pre>

                <div>
              Id  : {a.Id}
                </div>
                <div>
            FullName : {a.FullName}
                </div>
                <div>
            Age : {a.Age}
                </div>
                <div>
            FatherName :   {a.FatherName}
                </div>
                <div>
            Mobile :    {a.mobile}
                </div>
<hr/>




                </div>)}
                {/* <div>
                    <input type="text" onChange={handleChange}/>
                    {
                        result.filter(data=>{
                            if(outputValues==""){
                                return ""
                            }
                            else if(data.FullName==outputValues || data.Id==outputValues){
                                return data
                            }
                        }).map(datas=>{
                            return(
                                <div  class='img'>
                                <pre> Department Of India</pre>
                                <pre> Government   Of India</pre>
                            
                                
                            
                                <pre>Name        =  {datas.name}</pre>
                                <pre>FatherName  =  {datas.FatherName}</pre>
                                <pre>Gender      =  {datas.gender}</pre>
                                <pre>Age         =  {datas.age}</pre>
                            
                            
                            
                                </div>
                            )
                        })
                    }
                </div> */}
                
        </div>
    )
}