import React, {Component } from 'react';
import myEvents from '../data/events.js'
import  Card  from 'react-bootstrap/Card';
import './Events.css'

export default class Events extends Component{

    render(){
        const Events = myEvents.map((event) => <li><Card className="bg-dark text-white" style={{ width: '18rem' }}>
                                                    <Card.Body>
                                                    <Card.Title>{event.name}</Card.Title>
                                                    <Card.Subtitle className="mb-2 text-muted">{event.location}</Card.Subtitle>
                                                    <Card.Text>
                                                        {event.description}
                                                    </Card.Text>
                                                    <Card.Link href="#">{event.date}</Card.Link>
                                                    </Card.Body>
                                                </Card></li>
        )
        return (<ul className="events">
            {Events}
        </ul>);
    }
}