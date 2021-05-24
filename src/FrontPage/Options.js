import React from 'react'
import wendy from "../assets/wendy.jpg"
import kfc from "../assets/kfc-chicken.jpg"
import pizza from "../assets/pizza.jpg"
import walgreens from "../assets/walgreens-sushi.jpg"
import frenchfry from "../assets/mcd-french.jpg"
import burger from "../assets/burger.jpg"
import CardComp from "./Card-Component"


export default function Options(){
    return(
        <div className="option-div">
            <div className="nearby">Nearby Options</div>
            <div className="food-options">
                <div className="food-items"><CardComp img={kfc}/></div>
                <div className="food-items"><CardComp img={walgreens}/></div>
                <div className="food-items"><CardComp img={burger}/></div>  
                <div className="food-items"><CardComp img={pizza}/></div>
                <div className="food-items"><CardComp img={frenchfry}/></div>
                <div className="food-items"><CardComp img={wendy}/></div>               
            </div>
        </div>
    )
}
