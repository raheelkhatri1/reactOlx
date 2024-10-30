import React from "react";
import Mobile from "../images/mobile.png"
import Vehicles from "../images/car 2 yellow.png"
import PropertyForSele from "../images/property picter.png"
import PropertyForRent from "../images/property key.png"
import ElectronicsHomeAppliances from "../images/camera.png"
import Bikes from "../images/bike.png"
import BusinessIndustrialAgriculture from "../images/tarak.png"
import Services from "../images/services.png"
import Jobs from "../images/job.png"
import Animals from "../images/hen.png"
import FurnitureHomeDecor from "../images/chair.png"
import Fashionbeauty from "../images/fashion-beauty.png"
import Kids from "../images/kids..png"
import BooksSportsHobbies from "../images/books-sports.png"
import { useState } from "react";
import { Form } from "react-router-dom";
import "./card.css"

function Allcategories() {
    const allCategoriesData = [
        {
            Image: Mobile,
            title: "Mobile"
        },
        {
            Image: Vehicles,
            title: "Vehicles"
        },
        {
            Image: PropertyForSele,
            title: "Property For Sele"
        },
        {
            Image: PropertyForRent,
            title: "Property For Rent"
        },
        {
            Image: ElectronicsHomeAppliances,
            title: "Electronics & Home Appliances"
        },
        {
            Image: Bikes,
            title: "Bikes"
        },
        {
            Image: BusinessIndustrialAgriculture,
            title: "Business, Industrial & Agriculture"
        },
        {
            Image: Services,
            title: "Services"
        },
        {
            Image: Jobs,
            title: "Jobs"
        },
        {
            Image: Animals,
            title: "Animals"
        },
        {
            Image: FurnitureHomeDecor,
            title: "Furniture & Home Decor"
        },
        {
            Image: Fashionbeauty,
            title: "Fashion & beauty"
        },
        {
            Image: BooksSportsHobbies,
            title: "Books, Sports & Hobbies"
        },
        {
            Image: Kids,
            title: "Kids"
        },
    ]
    const [categories, setcategories] = useState(allCategoriesData)

    return (
        <div className="margin-left">
            <h3>All Categories</h3>
            <div className="cirlcItemsContinar">

            {
                categories.map((e)=>{
                    return<div className="cirlcitems">
                        <img src={e.Image} />
                        <h5>{e.title}</h5>
                    </div>
                })
            }

            </div>
        </div>
    )
}

export default Allcategories