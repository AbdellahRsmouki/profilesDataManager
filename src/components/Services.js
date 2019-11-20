import React, { Component } from 'react'
import Title from './Title';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa';

export default class Services extends Component {
    state={
        Services:[
            {
                icon:<FaCocktail />,
                title: "cocktail",
                info: "some infos about cocktail"
            },
            {
                icon:<FaHiking />,
                title: "Hicking",
                info: "some infos about Hicking"
            },
            {
                icon:<FaShuttleVan />,
                title: "Van",
                info: "some infos about Van"
            },
            {
                icon:<FaBeer />,
                title: "Beer",
                info: "some infos about Beer"
            }
        ]
    }
    render() {
        return (
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
        )
    }
}
