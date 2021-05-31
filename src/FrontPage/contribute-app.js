import React from "react"


export default function Contribute(){

    return (
        <div>
            <div className="food-options">
                <div className="food-items"><CardComp title="Download App" description={description.kfc} img={kfc}/></div>
                <div className="food-items"><CardComp title="Contribute" description={description.walgreens} img={walgreens}/></div>
                <div className="food-items"><CardComp title="Get Coupons" description={description.burgerking} img={burger}/></div>                
            </div>
        </div>
    )
}

