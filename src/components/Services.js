import React, { Component } from 'react'
import Title from './Title';
import { FaCalendarAlt} from 'react-icons/fa';
import {MdAccessibility, MdPersonAdd} from 'react-icons/md';
import {GiStairsGoal} from 'react-icons/gi';
import { Card } from 'reactstrap';

export default class Services extends Component {
    state={
        Services:[
            {
                icon:<MdAccessibility />,
                title: "Accessebility",
                info: "Easy access to useful data"
            },
            {
                icon:<MdPersonAdd />,
                title: "Grow Your Professional Network",
                info: "ENSIAS Laureats together the biggest IT community in Morocco"
            },
            {
                icon:<GiStairsGoal />,
                title: "strategy & organization",
                info: "inspire from the best profiles to meet your goals"
            },
            {
                icon:<FaCalendarAlt />,
                title: "News",
                info: "Be the first to hear about conferences and workshops inside ENSIAS"
            }
        ]
    }
    render() {
        return (
            <Card className="main card-profile shadow card-margin-top">
            <section className="services">
                <Title title="Services"/>
                <div className="services-center">
                    {
                        this.state.Services.map((item, index) => {
                            return <article key={index} className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        })
                    }
                </div>
                </section>
            </Card>
        )
    }
}
