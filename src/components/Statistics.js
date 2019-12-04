import React, { Component } from 'react'
import Title from './Title';
import { FaCalendarAlt} from 'react-icons/fa';
import {MdAccessibility, MdPersonAdd} from 'react-icons/md';
import {GiStairsGoal} from 'react-icons/gi';

export default class Statistics extends Component {
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
            <section className="services">
            <Title title="Statistiques"/>
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
        )
    }
}
