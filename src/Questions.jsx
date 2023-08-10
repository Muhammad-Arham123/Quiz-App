import React, { useState } from "react";


function Questions({ question, options, i,callback }) {

    let [res, setres] = useState("")
    return (

        <>
        <h1 style={{ marginTop:"20px",marginLeft:"300px" , fontWeight:"bold",fontSize:"35px" }}>My First Quiz App</h1>
        <div className="text-center    " style={{ marginTop:"20px",marginLeft:"300px", width: "50%", border: "5px solid black",borderRadius:"10px",backgroundColor:"lightGrey" }} >

            <h1 style={{ marginLeft:"20px", fontWeight:"bold",fontSize:"27px" }} >Question No : {i + 1}</h1>
            <p style={{ marginLeft:"20px", fontWeight:"bold",fontSize:"20px" }}>
               Q : {question}
            </p>

            {

                options.map((v, i) => {
                    return (
                        <div style={{ marginLeft:"20px"}}>
                            <input type="radio"
                                onChange={(e) => setres(e.target.value)}
                                name="select" id="" value={v} />
                            <b> {v}</b>
                        </div>
                    )

                })
            }
            <br />
            <button style={{ marginLeft:"20px", fontWeight:"bold",fontSize:"23px" , width:"160px",border:"2px solid black", marginBottom:"10px"}}
            onClick={()=>callback(res)}
            >Next</button>
            <br />



        </div>
   </> )
}

export default Questions