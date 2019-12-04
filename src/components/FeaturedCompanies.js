import React, { Component } from 'react'
import Loading from './Loading';
import {CompaniesContext} from '../CompaniesContext';
import Title from './Title';
import Company from './Company';

export default class FeaturedCompanies extends Component {
    static contextType = CompaniesContext;
    render() {
        let {loading, featuredCompanies:companies} = this.context;
        companies = companies.map(company => {
            return <Company key={company.id} company = {company} />
        });
        // console.log(companies);
        return (
            <section className="featured-rooms">
                <Title title="Featured companies" />
                <div className="featured-rooms-center" >
                {loading?<Loading />:companies}
                </div>
            </section>
        )
    }
}
