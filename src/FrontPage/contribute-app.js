import React from "react"


export default function Contribute(){

    return (
        <div>
            <div className="food-options">
                <div className="food-items"><CardComp title="KFC" description={description.kfc} img={kfc}/></div>
                <div className="food-items"><CardComp title="Walgreens" description={description.walgreens} img={walgreens}/></div>
                <div className="food-items"><CardComp title="Burger King" description={description.burgerking} img={burger}/></div>                
            </div>
        </div>
    )
}

