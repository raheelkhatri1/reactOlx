import React from "react";
import {useState} from "react";
import './bar.css'

const ItemName = () =>{
    const name = ["All categories","Mobile Phones","Cars","Motorcycles","Houses","Video-Audios","Tablets","Land & Plots"]
    return <div className="itemNameContinar">{
    name.map((e)=>{
        
        return <div>{e}</div>
    })}

    </div> 
}
export default ItemName