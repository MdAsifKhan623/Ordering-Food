import React from "react"
import {CardPerks} from './Card-Component'
import phoneapp from '../assets/phone-app.png'
import contributeImage from '../assets/contribute.png'
import couponsImage from '../assets/coupons.png'

export default function Contribute(){

    let description={
        dwnldApp:"Download the Andriod/iOS app for faster and hassle-free ordering",
        contribute:"Wanna contribute something for the charity we work for the poor and underpriviledged !! Do it here.",
        coupons:"Want to get exciting coupons and spend as minimal as possible. Check this out."
    }

    return (
        <div>
            <div className="food-options">
                <div className="food-items"><CardPerks title="Download App" description={description.dwnldApp} img={phoneapp} /></div>
                <div className="food-items"><CardPerks title="Contribute" description={description.contribute} img={contributeImage} /></div>
                <div className="food-items"><CardPerks title="Get Coupons" description={description.coupons} img={couponsImage} /></div>                
            </div>
        </div>
    )
}

