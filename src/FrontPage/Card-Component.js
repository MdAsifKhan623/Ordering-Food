import React from 'react'
import {Card} from 'react-bootstrap'
export default function CardComp(props){
    return (<div>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.img} />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                {/* <Button variant="primary">{props.place}</Button> */}
            </Card.Body>
        </Card>
    </div>)
}