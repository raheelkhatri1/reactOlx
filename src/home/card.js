import React from "react";
import Data from "./data";
import { useState } from "react";
import './card.css'

function Card() {

    const [array,setarray] = useState(Data)

    
    return(
        <div className="cardContinar">{array.map((e)=>{
                return<div className="box">
                <img className="img" src={e.image} />
                <h2>{e.title}</h2>
            </div>
        })
    }
        </div>
    )
}

export default Card