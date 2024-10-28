import React from "react";
import Mobile from "../images/mobile.png"

function Allcategories() {
    const allCategoriesData = [
        {
            Image : {Mobile},
            title : "Mobile"
        },
        {
            Image : "",
            title : "Vehicles"
        },
        {
            Image : "",
            title : "Property For Sele"
        },
        {
            Image : "",
            title : "Property For Rent"
        },
        {
            Image : "",
            title : "Electronics & Home Appliances"
        },
        {
            Image : "",
            title : "Bikes"
        },
        {
            Image : "",
            title : "Business, Industrial & Agriculture"
        },
        {
            Image : "",
            title : "Services"
        },
        {
            Image : "",
            title : "Jobs"
        },
        {
            Image : "",
            title : "Animals"
        },
        {
            Image : "",
            title : "Furniture & Home Decor"
        },
        {
            Image : "",
            title : "Fashion & beauty"
        },
        {
            Image : "",
            title : "Books, Sports & Hobbies"
        },
        {
            Image : "",
            title : "Kids"
        },
    ]
   

    return(<div>
            <h3>
            All categories
            </h3>

            {
             allCategoriesData.map((e)=>{
                return<div><div/>
             })
            }

        </div>
    )
    
}

export default Allcategories