import React from 'react'
import ProfilesFilter from './ProfilesFilter'
import ProfilesList from './ProfilesList';
import {WithProfileConsumer} from '../Context';
import Loading from './Loading'


function ProfilesContainer({context}) {
    const {loading, sortedProfiles, profiles}= context;
    if(loading){
        return <Loading />
    }
    return(
        <>
        <ProfilesFilter profiles={profiles} />
        <ProfilesList profiles={sortedProfiles}/>
        </>
    )
}
export default WithProfileConsumer(ProfilesContainer);








/*import React from 'react'
import ProfilesFilter from './ProfilesFilter'
import ProfilesList from './ProfilesList';
import {ProfileConsumer} from '../Context';
import Loading from './Loading'


export default function ProfilesContainer() {
    return (
        <ProfileConsumer>
            {
                (value)=>{
                    const {loading, sortedProfiles, profiles}= value;
                    if(loading){
                        return <Loading />
                    }
                    return(
                        <div>
                        Hello from profiles container
                        <ProfilesFilter profiles={profiles} />
                        <ProfilesList profiles={sortedProfiles}/>
                        
                        </div>
                    )
                }
            }
        </ProfileConsumer>
    )
}*/
