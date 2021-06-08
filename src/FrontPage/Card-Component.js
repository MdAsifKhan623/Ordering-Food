import React from 'react'
import {Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'
export default function CardComp(props){
    return (<div>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.img} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                {props.description}
                </Card.Text>
            </Card.Body>
        </Card>
    </div>)
}

function CardPerks(props){
    return (
        <div>

            <Link to={"/coupons"} className="card-contribute">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={props.img} />
                    <Card.Body>
                        <Card.Title>{props.title}</Card.Title>
                        <Card.Text>
                            {props.description}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Link>
        
        </div>
    )
}
export {CardPerks}