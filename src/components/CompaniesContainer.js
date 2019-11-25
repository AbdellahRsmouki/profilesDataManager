import React from 'react'
import CompaniesList from './CompaniesList';
import {WithProfileConsumer} from '../Context';
import Loading from './Loading'


function CompaniesContainer({context}) {
    const {loading, sortedProfiles}= context;
    if(loading){
        return <Loading />
    }   
    return(
        <>
        <CompaniesList companies={sortedProfiles}/>
        </>
    )
}
export default WithProfileConsumer(CompaniesContainer);
