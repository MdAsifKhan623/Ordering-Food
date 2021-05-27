import React from 'react'
import wendy from "../assets/wendy.jpg"
import kfc from "../assets/kfc-chicken.jpg"
import pizza from "../assets/pizza.jpg"
import walgreens from "../assets/walgreens-sushi.jpg"
import frenchfry from "../assets/mcd-french.jpg"
import burger from "../assets/burger.jpg"
import CardComp from "./Card-Component"



export default function Options(){
    const description={
        kfc:"Immerse Youself in the taste Juicy Fried Chicken.",
        walgreens:"Taste the finest of Japanese Cuisine in the delight of sushi.",
        burgerking: "Take a Bite of delicious Burgers and satiate your hunger.",
        Dominos:"Pizza made for ravenous as well as casual eaters.",
        fryies:"You think Patato tastes bad? Try it and you'll never say that again.",
        wendyCoke:"Thirsty and need to have something cold ?? Take a Sip of Coke and enjoy the rest of your day!"

    }
    return(
        <div className="option-div">
            <div className="nearby">Nearby Options</div>
            <div className="food-options">
                <div className="food-items"><CardComp title="KFC" description={description.kfc} img={kfc}/></div>
                <div className="food-items"><CardComp title="Walgreens" description={description.walgreens} img={walgreens}/></div>
                <div className="food-items"><CardComp title="Burger King" description={description.burgerking} img={burger}/></div>  
                <div className="food-items"><CardComp title="Dominos" description={description.Dominos} img={pizza}/></div>
                <div className="food-items"><CardComp title="McDonald's" description={description.fryies} img={frenchfry}/></div>
                <div className="food-items"><CardComp title="Wendy's" description={description.wendyCoke} img={wendy}/></div>               
            </div>
        </div>
    )
}
