import React from 'react'
import CompaniesList from './CompaniesList';
import CompanyFilter from './CompanyFilter';
import {WithCompanyConsumer} from '../CompaniesContext';
import Loading from './Loading'


function CompaniesContainer({context}) {
    const {loading, sortedCompanies, companies}= context;
    if(loading){
        return <Loading />
    }   
    return(
        <>
        <CompanyFilter profiles={companies} />
        <CompaniesList companies={sortedCompanies}/>
        </>
    )
}
export default WithCompanyConsumer(CompaniesContainer);
