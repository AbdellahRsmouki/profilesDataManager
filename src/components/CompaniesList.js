import React from 'react'
import Profile from './Profile'


export default function ProfilesList({companies}) {
    if(companies.length === 0){
        return (
            <div className="empty-search">
                <h3>No profiles matched your search parameters</h3>
            </div>
        )
    }
    return (
        <section className="roomslist">
            <div className="roomslist-center">
                {
                    companies.map((item) => {
                        return <Profile key={item.id} profile={item} />
                    })
                }
            </div>
        </section>
    )
}
