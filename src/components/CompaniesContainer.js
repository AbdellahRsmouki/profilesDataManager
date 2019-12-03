import React from 'react'
import CompaniesList from './CompaniesList';
import {WithCompanyConsumer} from '../CompaniesContext';
import Loading from './Loading'


function CompaniesContainer({context}) {
    const {loading, sortedCompanies}= context;
    if(loading){
        return <Loading />
    }   
    return(
        <>
        <CompaniesList companies={sortedCompanies}/>
        </>
    )
}
export default WithCompanyConsumer(CompaniesContainer);
