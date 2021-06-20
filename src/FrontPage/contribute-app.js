import React from "react"
import {CardPerks} from './Card-Component'
import phoneapp from '../assets/phone-app.png'
import contributeImage from '../assets/contribute.png'
import couponsImage from '../assets/coupons.png'
import flavor from "../assets/flavor.jpg"
import get_app from '../assets/get_app.jpg'

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
            <div className="get-cuisine">
                <div className="randomFlex" size="48">
                    <div className="cuisine-flex">
                            <div size="12">
                                <span className="cuisine-header">Want a Special and Unique Cuisine? We have got you. </span>
                            </div>
                            <div size="16">
                                <span>Countless options at reasonably affordable prices in excellent rated restaurants. Feel like 
                                trying something new? Try Us. We won't let you get disappointed.</span>

                            </div>
                        
                    </div>
                    <div className="cuisineImages">
                        <img className="cuisinePics" src={flavor} />
                    </div>
                </div>
            </div>
            <br/>
            <div className="get-cuisine">
                <div className="randomFlex">
                    <div className="cuisineImages">
                        <img className="cuisinePics" src={get_app} />
                    </div>
                    <div className="cuisine-flex">
                        <div className="cuisine-description">
                            <div size="12">
                                <span className="cuisine-header">Having Hard Time Finding the Restaurants? Check This out.</span>
                            </div>
                            <div size="16">
                                <span>We offer endless offers from your nearby restaurants.Please go find them.</span>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

