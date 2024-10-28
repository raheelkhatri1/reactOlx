import React from "react";
import NavScrollExample from "../home/bar";
import ItemName from "../home/itemName";
import ControlledCarousel from "../home/slide";
import Card from "../home/card";
import Allcategories from "../home/AllCategories";

function Home (){
    return(
        <div>
            <NavScrollExample />
            <ItemName />
            <ControlledCarousel />
            <Allcategories />
            <Card />
        </div>
    )
}

export default Home
