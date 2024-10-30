import React from "react";
import Data from "./data";
import { useState } from "react";
import './card.css'
import { Link } from "react-router-dom";

function Card() {

    const [array, setarray] = useState(Data)


    return (
        <div className="margin-left">
            <div className="d-flex justify-content-between">
            <h3>Mobile Phones</h3>
            <Link className="text-decoration-none">View more ></Link>
            </div>
            <div className="cardContinar" >
                {array.map((e) => {
                    return <div className="box">
                        <div className="imgDiv">
                        <img className="img" src={e.image} />
                        </div>
                        
                        <h6 className="margin-left">{e.price}</h6>
                        <h5 className="margin-left">{e.title}</h5>
                        

                    </div>
                })
                }
            </div>
        </div>
    )
}

export default Card