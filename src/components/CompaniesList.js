import React from 'react'
import Company from './Company'


export default function CompaniesList({companies}) {
    if(companies.length === 0){
        return (
            <div className="empty-search">
                <h3>No companies matched your search parameters</h3>
            </div>
        )
    }
    return (
        <section className="roomslist">
            <div className="roomslist-center">
                {
                    companies.map((item) => {
                        return <Company key={item.id} company={item} />
                    })
                }
            </div>
        </section>
    )
}
